const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer((req, res) => {
    // Handle HTTP requests here (if needed)
});

const io = new Server(server, {
    cors: {
        origin: '*', // allow all origins
        methods: ['GET', 'POST']
    }
});

// Create a map to store connected sockets by user IDs
const connectedUsers = new Map();
const messagesqueue = new Map();

io.on('connection', (socket) => {
    // When a user connects, store their socket in the connectedUsers map
    socket.on('join', (userId) => {
        connectedUsers.set(userId, socket);
        console.log('user connected ' + userId);
    });

    socket.on('send-message', ({ senderId, receiverId, message }) => {
        // If the recipient is connected, send them the message directly
        const receiver = connectedUsers.get(receiverId);
        if (receiver) {
            receiver.emit('receive-message', {
                senderId,
                message
            });
        } else {
            // Otherwise, store the message in the database for later retrieval
            const messages = messagesqueue.get(receiverId) || [];
            messages.push({ senderId, message });
            messagesqueue.set(receiverId, messages);
        }
    });
    socket.on('get-online-users', () => {
        socket.emit('online-users', [...connectedUsers.keys()]);
    });

    socket.on('get-message', (receiverId) => {
        const messages = messagesqueue.get(receiverId) || [];
        messages.forEach((message) => {
            socket.emit('receive-message', message);
        });
        messagesqueue.delete(receiverId);
    });

    socket.on('disconnect', () => {
        // Remove the user's socket from the connectedUsers map when they disconnect
        connectedUsers.forEach((userSocket, userId) => {
            if (userSocket === socket) {
                connectedUsers.delete(userId);
            }
        });
        console.log('user disconnected');
    });
});

server.listen(8080, () => {
    console.log('Socket.IO server is running on port 3005');
});
