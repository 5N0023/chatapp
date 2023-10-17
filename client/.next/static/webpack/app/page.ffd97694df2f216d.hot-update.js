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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import socketio \n\n//set cookie of username\nfunction Page() {\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //messages is array of { senderId, message}\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reciever, setReciever] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [connection, setConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (username.length === 0) return;\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://10.11.6.9:3005\");\n        socket.emit(\"join\", username);\n        setSocket(socket);\n        return ()=>{\n            setMessages([]);\n            socket.off(\"message\");\n            socket.disconnect();\n        };\n    }, [\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-message\", username);\n            socket.on(\"receive-message\", (message)=>{\n                setMessages((messages)=>[\n                        ...messages,\n                        message\n                    ]);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-online-users\", username);\n            socket.on(\"online-users\", (users)=>{\n                setOnlineUsers(users);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    const handlereceiverChange = (event)=>{\n        setReciever(event.target.value);\n        console.log(event.target.value);\n    };\n    const handleLogin = (event)=>{\n        event.preventDefault();\n        if (username.length === 0) return;\n        setConnection(true);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!message || !reciever) return;\n        socket.emit(\"send-message\", {\n            senderId: username,\n            receiverId: reciever,\n            message: message\n        });\n        messages.push({\n            senderId: username,\n            message: message\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-200 flex-1 border-2 border-gray-200 p-2 rounded-lg m-2\",\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: username,\n                        onChange: (event)=>setUsername(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Messages\"\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"messages\",\n                children: messages && messages.length > 0 && messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                message.senderId,\n                                \" : \",\n                                message.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"online-users\",\n                        children: onlineUsers && onlineUsers.length > 0 && onlineUsers.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"reciever\",\n                                        value: user,\n                                        onChange: handlereceiverChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: user\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"message\",\n                        value: message,\n                        onChange: handleMessageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"zv4C1PuTEz99pvkrUHQTvwC6HOU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO3dCQUFTRCxXQUFVO2tDQUF3RTs7Ozs7Ozs7Ozs7OzBCQUcxRyw4REFBQ0s7Z0JBQUdMLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDTTtnQkFBSUMsSUFBRzswQkFDTDFDLFlBQWFBLFNBQVNZLE1BQU0sR0FBRyxLQUFLWixTQUFTMkMsR0FBRyxDQUFDLENBQUN6QyxTQUFTMEMsc0JBQzFELDhEQUFDSDtrQ0FDQyw0RUFBQ0k7O2dDQUFHM0MsUUFBUTBCLFFBQVE7Z0NBQUM7Z0NBQUkxQixRQUFRQSxPQUFPOzs7Ozs7O3VCQURoQzBDOzs7Ozs7Ozs7OzBCQUtiLDhEQUFDWjtnQkFBS0MsVUFBVU47O2tDQUVmLDhEQUFDYzt3QkFBSUMsSUFBRztrQ0FDTGxDLGVBQWVBLFlBQVlJLE1BQU0sR0FBRyxLQUFLSixZQUFZbUMsR0FBRyxDQUFDLENBQUNHLE1BQU1GLHNCQUMvRCw4REFBQ0g7Z0NBQWdCTixXQUFVOztrREFDekIsOERBQUNEO3dDQUNDRSxNQUFLO3dDQUNMVyxNQUFLO3dDQUNMMUIsT0FBT3lCO3dDQUNQUixVQUFVaEI7Ozs7OztrREFFWiw4REFBQzBCO2tEQUFPRjs7Ozs7OzsrQkFQQUY7Ozs7Ozs7Ozs7a0NBWWQsOERBQUNWO3dCQUNDRSxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaaEIsT0FBT25CO3dCQUNQb0MsVUFBVXBCOzs7Ozs7a0NBRVosOERBQUNxQjt3QkFBT0gsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBcEh3QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgc29ja2V0aW8gXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG4vLyBpbXBvcnQgQ29va2llc1xuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XG5cbmludGVyZmFjZSBtZXNzYWdlcyB7XG4gIHNlbmRlcklkOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cbi8vc2V0IGNvb2tpZSBvZiB1c2VybmFtZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgLy9tZXNzYWdlcyBpcyBhcnJheSBvZiB7IHNlbmRlcklkLCBtZXNzYWdlfVxuXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8bWVzc2FnZXNbXT4oW10pOyBcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8YW55PignJyk7XG4gIGNvbnN0IFtyZWNpZXZlciwgc2V0UmVjaWV2ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2RlZmF1bHQnKTtcbiAgY29uc3QgW29ubGluZVVzZXJzLCBzZXRPbmxpbmVVc2Vyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbY29ubmVjdGlvbiwgc2V0Q29ubmVjdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighY29ubmVjdGlvbikgcmV0dXJuO1xuICAgIGlmKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vMTAuMTEuNi45OjMwMDUnKTtcbiAgICBzb2NrZXQuZW1pdCgnam9pbicsIHVzZXJuYW1lKTtcbiAgICBcbiAgICBzZXRTb2NrZXQoc29ja2V0KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0TWVzc2FnZXMoW10pO1xuICAgICAgc29ja2V0Lm9mZignbWVzc2FnZScpXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3Rpb25dKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighY29ubmVjdGlvbikgcmV0dXJuO1xuICAgIGlmIChzb2NrZXQpIHtcbiAgICAgIFxuICAgICAgc29ja2V0LmVtaXQoJ2dldC1tZXNzYWdlJywgdXNlcm5hbWUpO1xuICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlLW1lc3NhZ2UnLCAobWVzc2FnZTphbnkpID0+IHtcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzOmFueSkgPT4gWy4uLm1lc3NhZ2VzLCBtZXNzYWdlXSk7XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NvY2tldCx1c2VybmFtZSxjb25uZWN0aW9uXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIWNvbm5lY3Rpb24pIHJldHVybjtcbiAgICBpZiAoc29ja2V0KSB7XG4gICAgICBzb2NrZXQuZW1pdCgnZ2V0LW9ubGluZS11c2VycycsIHVzZXJuYW1lKTtcbiAgICAgIHNvY2tldC5vbignb25saW5lLXVzZXJzJywgKHVzZXJzOmFueSkgPT4ge1xuICAgICAgICBzZXRPbmxpbmVVc2Vycyh1c2Vycyk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfSwgW3NvY2tldCx1c2VybmFtZSxjb25uZWN0aW9uXSk7XG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVyZWNlaXZlckNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0UmVjaWV2ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVMb2dpbiA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih1c2VybmFtZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBzZXRDb25uZWN0aW9uKHRydWUpO1xuICB9XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighbWVzc2FnZSB8fCAhcmVjaWV2ZXIpIHJldHVybjtcbiAgICAgIHNvY2tldC5lbWl0KCdzZW5kLW1lc3NhZ2UnLCB7IHNlbmRlcklkOnVzZXJuYW1lLCByZWNlaXZlcklkOnJlY2lldmVyLCBtZXNzYWdlOm1lc3NhZ2UgfSk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHsgc2VuZGVySWQ6dXNlcm5hbWUsIG1lc3NhZ2U6bWVzc2FnZSB9KTtcbiAgICBzZXRNZXNzYWdlKCcnKTtcbiAgfTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBmbGV4LTEgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHAtMiByb3VuZGVkLWxnIG0tMidcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQnID5Mb2dpbjwvYnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPk1lc3NhZ2VzPC9oMT5cbiAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bWVzc2FnZXMgJiYgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8cD57bWVzc2FnZS5zZW5kZXJJZH0gOiB7bWVzc2FnZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgIHsvKiBwaWNrIGEgdXNlciB0byBzZW5kIG1lc3NhZ2UgdG8gZnJvbSBvbmxpbmUgdXNlcnMgKi99XG4gICAgICAgIDxkaXYgaWQ9XCJvbmxpbmUtdXNlcnNcIj5cbiAgICAgICAgICB7b25saW5lVXNlcnMgJiYgb25saW5lVXNlcnMubGVuZ3RoID4gMCAmJiBvbmxpbmVVc2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNpZXZlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJlY2VpdmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWw+e3VzZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJtZXNzYWdlXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIlBhZ2UiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJyZWNpZXZlciIsInNldFJlY2lldmVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIm9ubGluZVVzZXJzIiwic2V0T25saW5lVXNlcnMiLCJjb25uZWN0aW9uIiwic2V0Q29ubmVjdGlvbiIsImxlbmd0aCIsImVtaXQiLCJvZmYiLCJkaXNjb25uZWN0Iiwib24iLCJ1c2VycyIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlcmVjZWl2ZXJDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9naW4iLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Ym1pdCIsInNlbmRlcklkIiwicmVjZWl2ZXJJZCIsInB1c2giLCJtYWluIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImgxIiwiZGl2IiwiaWQiLCJtYXAiLCJpbmRleCIsInAiLCJ1c2VyIiwibmFtZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});