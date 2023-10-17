"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import socketio \n\n//set cookie of username\nfunction Page() {\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //messages is array of { senderId, message}\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reciever, setReciever] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [connection, setConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (username.length === 0) return;\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://10.11.6.9:3005\");\n        socket.emit(\"join\", username);\n        setSocket(socket);\n        return ()=>{\n            setMessages([]);\n            socket.off(\"message\");\n            socket.disconnect();\n        };\n    }, [\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket) {\n            socket.emit(\"get-message\", username);\n            socket.on(\"receive-message\", (message)=>{\n                setMessages((messages)=>[\n                        ...messages,\n                        message\n                    ]);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-online-users\", username);\n            socket.on(\"online-users\", (users)=>{\n                setOnlineUsers(users);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    const handlereceiverChange = (event)=>{\n        setReciever(event.target.value);\n        console.log(event.target.value);\n    };\n    const handleLogin = (event)=>{\n        event.preventDefault();\n        if (username.length === 0) return;\n        setConnection(!connection);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!message || !reciever) return;\n        socket.emit(\"send-message\", {\n            senderId: username,\n            receiverId: reciever,\n            message: message\n        });\n        messages.push({\n            senderId: username,\n            message: message\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-200 flex-1 border-2 border-gray-200 p-2 rounded-lg m-2\",\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: username,\n                        onChange: (event)=>setUsername(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Messages\"\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"messages\",\n                children: messages && messages.length > 0 && messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                message.senderId,\n                                \" : \",\n                                message.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"online-users\",\n                        children: onlineUsers && onlineUsers.length > 0 && onlineUsers.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"reciever\",\n                                        value: user,\n                                        onChange: handlereceiverChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: user\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"message\",\n                        value: message,\n                        onChange: handleMessageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"zv4C1PuTEz99pvkrUHQTvwC6HOU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDSztnQkFBR0wsV0FBVTswQkFBcUI7Ozs7OzswQkFDbkMsOERBQUNNO2dCQUFJQyxJQUFHOzBCQUNMMUMsWUFBYUEsU0FBU1ksTUFBTSxHQUFHLEtBQUtaLFNBQVMyQyxHQUFHLENBQUMsQ0FBQ3pDLFNBQVMwQyxzQkFDMUQsOERBQUNIO2tDQUNDLDRFQUFDSTs7Z0NBQUczQyxRQUFRMEIsUUFBUTtnQ0FBQztnQ0FBSTFCLFFBQVFBLE9BQU87Ozs7Ozs7dUJBRGhDMEM7Ozs7Ozs7Ozs7MEJBS2IsOERBQUNaO2dCQUFLQyxVQUFVTjs7a0NBRWYsOERBQUNjO3dCQUFJQyxJQUFHO2tDQUNMbEMsZUFBZUEsWUFBWUksTUFBTSxHQUFHLEtBQUtKLFlBQVltQyxHQUFHLENBQUMsQ0FBQ0csTUFBTUYsc0JBQy9ELDhEQUFDSDtnQ0FBZ0JOLFdBQVU7O2tEQUN6Qiw4REFBQ0Q7d0NBQ0NFLE1BQUs7d0NBQ0xXLE1BQUs7d0NBQ0wxQixPQUFPeUI7d0NBQ1BSLFVBQVVoQjs7Ozs7O2tEQUVaLDhEQUFDMEI7a0RBQU9GOzs7Ozs7OytCQVBBRjs7Ozs7Ozs7OztrQ0FZZCw4REFBQ1Y7d0JBQ0NFLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1poQixPQUFPbkI7d0JBQ1BvQyxVQUFVcEI7Ozs7OztrQ0FFWiw4REFBQ3FCO3dCQUFPSCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FsSHdCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBzb2NrZXRpbyBcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbi8vIGltcG9ydCBDb29raWVzXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcblxuaW50ZXJmYWNlIG1lc3NhZ2VzIHtcbiAgc2VuZGVySWQ6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuLy9zZXQgY29va2llIG9mIHVzZXJuYW1lXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICAvL21lc3NhZ2VzIGlzIGFycmF5IG9mIHsgc2VuZGVySWQsIG1lc3NhZ2V9XG5cbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxtZXNzYWdlc1tdPihbXSk7IFxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxhbnk+KCcnKTtcbiAgY29uc3QgW3JlY2lldmVyLCBzZXRSZWNpZXZlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignZGVmYXVsdCcpO1xuICBjb25zdCBbb25saW5lVXNlcnMsIHNldE9ubGluZVVzZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtjb25uZWN0aW9uLCBzZXRDb25uZWN0aW9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vMTAuMTEuNi45OjMwMDUnKTtcbiAgICBzb2NrZXQuZW1pdCgnam9pbicsIHVzZXJuYW1lKTtcbiAgICBcbiAgICBzZXRTb2NrZXQoc29ja2V0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMoW10pO1xuICAgICAgc29ja2V0Lm9mZignbWVzc2FnZScpXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3Rpb25dKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc29ja2V0KSB7XG4gICAgICBcbiAgICAgIHNvY2tldC5lbWl0KCdnZXQtbWVzc2FnZScsIHVzZXJuYW1lKTtcbiAgICAgIHNvY2tldC5vbigncmVjZWl2ZS1tZXNzYWdlJywgKG1lc3NhZ2U6YW55KSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlczphbnkpID0+IFsuLi5tZXNzYWdlcywgbWVzc2FnZV0pO1xuXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzb2NrZXQsdXNlcm5hbWUsY29ubmVjdGlvbl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCFjb25uZWN0aW9uKSByZXR1cm47XG4gICAgaWYgKHNvY2tldCkge1xuICAgICAgc29ja2V0LmVtaXQoJ2dldC1vbmxpbmUtdXNlcnMnLCB1c2VybmFtZSk7XG4gICAgICBzb2NrZXQub24oJ29ubGluZS11c2VycycsICh1c2VyczphbnkpID0+IHtcbiAgICAgICAgc2V0T25saW5lVXNlcnModXNlcnMpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9XG4gIH0sIFtzb2NrZXQsdXNlcm5hbWUsY29ubmVjdGlvbl0pO1xuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlcmVjZWl2ZXJDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldFJlY2lldmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYodXNlcm5hbWUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgc2V0Q29ubmVjdGlvbighY29ubmVjdGlvbik7XG4gIH1cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCFtZXNzYWdlIHx8ICFyZWNpZXZlcikgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoJ3NlbmQtbWVzc2FnZScsIHsgc2VuZGVySWQ6dXNlcm5hbWUsIHJlY2VpdmVySWQ6cmVjaWV2ZXIsIG1lc3NhZ2U6bWVzc2FnZSB9KTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goeyBzZW5kZXJJZDp1c2VybmFtZSwgbWVzc2FnZTptZXNzYWdlIH0pO1xuICAgIHNldE1lc3NhZ2UoJycpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktMjAwIGZsZXgtMSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcC0yIHJvdW5kZWQtbGcgbS0yJ1xuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCcgPkxvZ2luPC9idXR0b24+XG5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCc+TWVzc2FnZXM8L2gxPlxuICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttZXNzYWdlcyAmJiAgbWVzc2FnZXMubGVuZ3RoID4gMCAmJiBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxwPnttZXNzYWdlLnNlbmRlcklkfSA6IHttZXNzYWdlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgey8qIHBpY2sgYSB1c2VyIHRvIHNlbmQgbWVzc2FnZSB0byBmcm9tIG9ubGluZSB1c2VycyAqL31cbiAgICAgICAgPGRpdiBpZD1cIm9ubGluZS11c2Vyc1wiPlxuICAgICAgICAgIHtvbmxpbmVVc2VycyAmJiBvbmxpbmVVc2Vycy5sZW5ndGggPiAwICYmIG9ubGluZVVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlY2lldmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlcmVjZWl2ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbD57dXNlcn08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiUGFnZSIsInNvY2tldCIsInNldFNvY2tldCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInJlY2lldmVyIiwic2V0UmVjaWV2ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwib25saW5lVXNlcnMiLCJzZXRPbmxpbmVVc2VycyIsImNvbm5lY3Rpb24iLCJzZXRDb25uZWN0aW9uIiwibGVuZ3RoIiwiZW1pdCIsIm9mZiIsImRpc2Nvbm5lY3QiLCJvbiIsInVzZXJzIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVyZWNlaXZlckNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dpbiIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0Iiwic2VuZGVySWQiLCJyZWNlaXZlcklkIiwicHVzaCIsIm1haW4iLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiaDEiLCJkaXYiLCJpZCIsIm1hcCIsImluZGV4IiwicCIsInVzZXIiLCJuYW1lIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});