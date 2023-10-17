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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import socketio \n\n//set cookie of username\nfunction Page() {\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //messages is array of { senderId, message}\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reciever, setReciever] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [connection, setConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (username.length === 0) return;\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://10.11.6.9:3005\");\n        setConnection(true);\n        socket.emit(\"join\", username);\n        setSocket(socket);\n        return ()=>{\n            setMessages([]);\n            socket.off(\"message\");\n            socket.disconnect();\n            setConnection(false);\n        };\n    }, [\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-message\", username);\n            socket.on(\"receive-message\", (message)=>{\n                setMessages((messages)=>[\n                        ...messages,\n                        message\n                    ]);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-online-users\", username);\n            socket.on(\"online-users\", (users)=>{\n                setOnlineUsers(users);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    const handlereceiverChange = (event)=>{\n        setReciever(event.target.value);\n        console.log(event.target.value);\n    };\n    const handleLogin = (event)=>{\n        setConnection(false);\n        event.preventDefault();\n        if (username.length === 0) return;\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!message || !reciever) return;\n        socket.emit(\"send-message\", {\n            senderId: username,\n            receiverId: reciever,\n            message: message\n        });\n        messages.push({\n            senderId: username,\n            message: message\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-200 flex-1 border-2 border-gray-200 p-2 rounded-lg m-2\",\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: username,\n                        onChange: (event)=>setUsername(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Messages\"\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"messages\",\n                children: messages && messages.length > 0 && messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                message.senderId,\n                                \" : \",\n                                message.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"online-users\",\n                        children: onlineUsers && onlineUsers.length > 0 && onlineUsers.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"reciever\",\n                                        value: user,\n                                        onChange: handlereceiverChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: user\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"message\",\n                        value: message,\n                        onChange: handleMessageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 107,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"zv4C1PuTEz99pvkrUHQTvwC6HOU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szt3QkFBU0QsV0FBVTtrQ0FBd0U7Ozs7Ozs7Ozs7OzswQkFHMUcsOERBQUNLO2dCQUFHTCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ007Z0JBQUlDLElBQUc7MEJBQ0wxQyxZQUFhQSxTQUFTWSxNQUFNLEdBQUcsS0FBS1osU0FBUzJDLEdBQUcsQ0FBQyxDQUFDekMsU0FBUzBDLHNCQUMxRCw4REFBQ0g7a0NBQ0MsNEVBQUNJOztnQ0FBRzNDLFFBQVEwQixRQUFRO2dDQUFDO2dDQUFJMUIsUUFBUUEsT0FBTzs7Ozs7Ozt1QkFEaEMwQzs7Ozs7Ozs7OzswQkFLYiw4REFBQ1o7Z0JBQUtDLFVBQVVOOztrQ0FFZiw4REFBQ2M7d0JBQUlDLElBQUc7a0NBQ0xsQyxlQUFlQSxZQUFZSSxNQUFNLEdBQUcsS0FBS0osWUFBWW1DLEdBQUcsQ0FBQyxDQUFDRyxNQUFNRixzQkFDL0QsOERBQUNIO2dDQUFnQk4sV0FBVTs7a0RBQ3pCLDhEQUFDRDt3Q0FDQ0UsTUFBSzt3Q0FDTFcsTUFBSzt3Q0FDTDFCLE9BQU95Qjt3Q0FDUFIsVUFBVWhCOzs7Ozs7a0RBRVosOERBQUMwQjtrREFBT0Y7Ozs7Ozs7K0JBUEFGOzs7Ozs7Ozs7O2tDQVlkLDhEQUFDVjt3QkFDQ0UsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWmhCLE9BQU9uQjt3QkFDUG9DLFVBQVVwQjs7Ozs7O2tDQUVaLDhEQUFDcUI7d0JBQU9ILE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXJId0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHNvY2tldGlvIFxuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuLy8gaW1wb3J0IENvb2tpZXNcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xuXG5pbnRlcmZhY2UgbWVzc2FnZXMge1xuICBzZW5kZXJJZDogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG4vL3NldCBjb29raWUgb2YgdXNlcm5hbWVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIC8vbWVzc2FnZXMgaXMgYXJyYXkgb2YgeyBzZW5kZXJJZCwgbWVzc2FnZX1cblxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPG1lc3NhZ2VzW10+KFtdKTsgXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPGFueT4oJycpO1xuICBjb25zdCBbcmVjaWV2ZXIsIHNldFJlY2lldmVyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdkZWZhdWx0Jyk7XG4gIGNvbnN0IFtvbmxpbmVVc2Vycywgc2V0T25saW5lVXNlcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW2Nvbm5lY3Rpb24sIHNldENvbm5lY3Rpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYodXNlcm5hbWUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly8xMC4xMS42Ljk6MzAwNScpO1xuICAgIHNldENvbm5lY3Rpb24odHJ1ZSk7XG4gICAgc29ja2V0LmVtaXQoJ2pvaW4nLCB1c2VybmFtZSk7XG4gICAgXG4gICAgc2V0U29ja2V0KHNvY2tldCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2VzKFtdKTtcbiAgICAgIHNvY2tldC5vZmYoJ21lc3NhZ2UnKVxuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgIHNldENvbm5lY3Rpb24oZmFsc2UpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3Rpb25dKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighY29ubmVjdGlvbikgcmV0dXJuO1xuICAgIGlmIChzb2NrZXQpIHtcbiAgICAgIFxuICAgICAgc29ja2V0LmVtaXQoJ2dldC1tZXNzYWdlJywgdXNlcm5hbWUpO1xuICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlLW1lc3NhZ2UnLCAobWVzc2FnZTphbnkpID0+IHtcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzOmFueSkgPT4gWy4uLm1lc3NhZ2VzLCBtZXNzYWdlXSk7XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NvY2tldCx1c2VybmFtZSxjb25uZWN0aW9uXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIWNvbm5lY3Rpb24pIHJldHVybjtcbiAgICBpZiAoc29ja2V0KSB7XG4gICAgICBzb2NrZXQuZW1pdCgnZ2V0LW9ubGluZS11c2VycycsIHVzZXJuYW1lKTtcbiAgICAgIHNvY2tldC5vbignb25saW5lLXVzZXJzJywgKHVzZXJzOmFueSkgPT4ge1xuICAgICAgICBzZXRPbmxpbmVVc2Vycyh1c2Vycyk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfSwgW3NvY2tldCx1c2VybmFtZSxjb25uZWN0aW9uXSk7XG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVyZWNlaXZlckNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0UmVjaWV2ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVMb2dpbiA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0Q29ubmVjdGlvbihmYWxzZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih1c2VybmFtZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgfVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIW1lc3NhZ2UgfHwgIXJlY2lldmVyKSByZXR1cm47XG4gICAgICBzb2NrZXQuZW1pdCgnc2VuZC1tZXNzYWdlJywgeyBzZW5kZXJJZDp1c2VybmFtZSwgcmVjZWl2ZXJJZDpyZWNpZXZlciwgbWVzc2FnZTptZXNzYWdlIH0pO1xuICAgICAgbWVzc2FnZXMucHVzaCh7IHNlbmRlcklkOnVzZXJuYW1lLCBtZXNzYWdlOm1lc3NhZ2UgfSk7XG4gICAgc2V0TWVzc2FnZSgnJyk7XG4gIH07XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgZmxleC0xIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCBwLTIgcm91bmRlZC1sZyBtLTInXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkJyA+TG9naW48L2J1dHRvbj5cblxuICAgICAgPC9mb3JtPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkJz5NZXNzYWdlczwvaDE+XG4gICAgICA8ZGl2IGlkPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21lc3NhZ2VzICYmICBtZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHA+e21lc3NhZ2Uuc2VuZGVySWR9IDoge21lc3NhZ2UubWVzc2FnZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICB7LyogcGljayBhIHVzZXIgdG8gc2VuZCBtZXNzYWdlIHRvIGZyb20gb25saW5lIHVzZXJzICovfVxuICAgICAgICA8ZGl2IGlkPVwib25saW5lLXVzZXJzXCI+XG4gICAgICAgICAge29ubGluZVVzZXJzICYmIG9ubGluZVVzZXJzLmxlbmd0aCA+IDAgJiYgb25saW5lVXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVjaWV2ZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyZWNlaXZlckNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPnt1c2VyfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWVzc2FnZVwiXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1lc3NhZ2VDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L21haW4+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJQYWdlIiwic29ja2V0Iiwic2V0U29ja2V0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicmVjaWV2ZXIiLCJzZXRSZWNpZXZlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJvbmxpbmVVc2VycyIsInNldE9ubGluZVVzZXJzIiwiY29ubmVjdGlvbiIsInNldENvbm5lY3Rpb24iLCJsZW5ndGgiLCJlbWl0Iiwib2ZmIiwiZGlzY29ubmVjdCIsIm9uIiwidXNlcnMiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZXJlY2VpdmVyQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ2luIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXQiLCJzZW5kZXJJZCIsInJlY2VpdmVySWQiLCJwdXNoIiwibWFpbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJoMSIsImRpdiIsImlkIiwibWFwIiwiaW5kZXgiLCJwIiwidXNlciIsIm5hbWUiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});