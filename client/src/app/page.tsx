"use client"

import { use, useEffect, useState } from 'react';
// import socketio 
import { io } from 'socket.io-client';

// import Cookies
import Cookies from 'universal-cookie';

interface messages {
  senderId: string;
  message: string;
}
//set cookie of username

export default function Page() {
  const [socket, setSocket] = useState<any>(null);
  //messages is array of { senderId, message}

  const [messages, setMessages] = useState<messages[]>([]); 
  const [message, setMessage] = useState<any>('');
  const [reciever, setReciever] = useState('');
  const [username, setUsername] = useState<string>('default');
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    if(username.length === 0) return;
    const socket = io('http://localhost:3005');
    setConnection(true);
    socket.emit('join', username);
    
    setSocket(socket);
    return () => {
      setMessages([]);
      socket.off('message')
      socket.disconnect();
      setConnection(false);
    }
  }, [connection]);
  useEffect(() => {
    if(!connection) return;
    if (socket) {
      
      socket.emit('get-message', username);
      socket.on('receive-message', (message:any) => {
        setMessages((messages:any) => [...messages, message]);

      });
    }
  }, [socket,username,connection]);
  useEffect(() => {
    if(!connection) return;
    if (socket) {
      socket.emit('get-online-users', username);
      socket.on('online-users', (users:any) => {
        setOnlineUsers(users);
      });
      
    }
  }, [socket,username,connection]);
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handlereceiverChange = (event: any) => {
    setReciever(event.target.value);
    console.log(event.target.value);
  };
  const handleLogin = (event: any) => {
    setConnection(false);
    event.preventDefault();
    if(username.length === 0) return;
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(!message || !reciever) return;
      socket.emit('send-message', { senderId:username, receiverId:reciever, message:message });
      messages.push({ senderId:username, message:message });
    setMessage('');
  };




  return (
    <main>
      <form onSubmit={handleLogin}>
        <input
          className='bg-gray-200 flex-1 border-2 border-gray-200 p-2 rounded-lg m-2'
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Login</button>

      </form>
      <h1 className='text-2xl font-bold'>Messages</h1>
      <div id="messages">
        {messages &&  messages.length > 0 && messages.map((message, index) => (
          <div key={index}>
            <p>{message.senderId} : {message.message}</p>
          </div>
        ))}
      </div>
       <form onSubmit={handleSubmit}>
         {/* pick a user to send message to from online users */}
        <div id="online-users">
          {onlineUsers && onlineUsers.length > 0 && onlineUsers.map((user, index) => (
            <div key={index} className='flex items-center'>
              <input
                type="radio"
                name="reciever"
                value={user}
                onChange={handlereceiverChange}
              />
              <label>{user}</label>
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="message"
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}