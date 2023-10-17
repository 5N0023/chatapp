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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import socketio \n\n//set cookie of username\nfunction Page() {\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //messages is array of { senderId, message}\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reciever, setReciever] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [connection, setConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (username.length === 0) return;\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://10.11.6.9:3005\");\n        socket.emit(\"join\", username);\n        setSocket(socket);\n        return ()=>{\n            setMessages([]);\n            socket.off(\"message\");\n            socket.disconnect();\n        };\n    }, [\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-message\", username);\n            socket.on(\"receive-message\", (message)=>{\n                setMessages((messages)=>[\n                        ...messages,\n                        message\n                    ]);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!connection) return;\n        if (socket) {\n            socket.emit(\"get-online-users\", username);\n            socket.on(\"online-users\", (users)=>{\n                setOnlineUsers(users);\n            });\n        }\n    }, [\n        socket,\n        username,\n        connection\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    const handlereceiverChange = (event)=>{\n        setReciever(event.target.value);\n        console.log(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!message || !reciever) return;\n        socket.emit(\"send-message\", {\n            senderId: username,\n            receiverId: reciever,\n            message: message\n        });\n        messages.push({\n            senderId: username,\n            message: message\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: setConnection(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-200 flex-1 border-2 border-gray-200 p-2 rounded-lg m-2\",\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: username,\n                        onChange: (event)=>setUsername(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: ()=>{\n                            setConnection(true);\n                        },\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Messages\"\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"messages\",\n                children: messages && messages.length > 0 && messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                message.senderId,\n                                \" : \",\n                                message.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"online-users\",\n                        children: onlineUsers && onlineUsers.length > 0 && onlineUsers.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"reciever\",\n                                        value: user,\n                                        onChange: handlereceiverChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: user\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"message\",\n                        value: message,\n                        onChange: handleMessageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 102,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"zv4C1PuTEz99pvkrUHQTvwC6HOU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDTztnQkFBSUMsSUFBRzswQkFDTDFDLFlBQWFBLFNBQVNZLE1BQU0sR0FBRyxLQUFLWixTQUFTMkMsR0FBRyxDQUFDLENBQUN6QyxTQUFTMEMsc0JBQzFELDhEQUFDSDtrQ0FDQyw0RUFBQ0k7O2dDQUFHM0MsUUFBUXlCLFFBQVE7Z0NBQUM7Z0NBQUl6QixRQUFRQSxPQUFPOzs7Ozs7O3VCQURoQzBDOzs7Ozs7Ozs7OzBCQUtiLDhEQUFDYjtnQkFBS0MsVUFBVVA7O2tDQUVmLDhEQUFDZ0I7d0JBQUlDLElBQUc7a0NBQ0xsQyxlQUFlQSxZQUFZSSxNQUFNLEdBQUcsS0FBS0osWUFBWW1DLEdBQUcsQ0FBQyxDQUFDRyxNQUFNRixzQkFDL0QsOERBQUNIO2dDQUFnQlAsV0FBVTs7a0RBQ3pCLDhEQUFDRDt3Q0FDQ0UsTUFBSzt3Q0FDTFksTUFBSzt3Q0FDTDFCLE9BQU95Qjt3Q0FDUFQsVUFBVWY7Ozs7OztrREFFWiw4REFBQzBCO2tEQUFPRjs7Ozs7OzsrQkFQQUY7Ozs7Ozs7Ozs7a0NBWWQsOERBQUNYO3dCQUNDRSxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaZixPQUFPbkI7d0JBQ1BtQyxVQUFVbkI7Ozs7OztrQ0FFWiw4REFBQ29CO3dCQUFPSCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FoSHdCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBzb2NrZXRpbyBcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbi8vIGltcG9ydCBDb29raWVzXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcblxuaW50ZXJmYWNlIG1lc3NhZ2VzIHtcbiAgc2VuZGVySWQ6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuLy9zZXQgY29va2llIG9mIHVzZXJuYW1lXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICAvL21lc3NhZ2VzIGlzIGFycmF5IG9mIHsgc2VuZGVySWQsIG1lc3NhZ2V9XG5cbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxtZXNzYWdlc1tdPihbXSk7IFxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxhbnk+KCcnKTtcbiAgY29uc3QgW3JlY2lldmVyLCBzZXRSZWNpZXZlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignZGVmYXVsdCcpO1xuICBjb25zdCBbb25saW5lVXNlcnMsIHNldE9ubGluZVVzZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtjb25uZWN0aW9uLCBzZXRDb25uZWN0aW9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCFjb25uZWN0aW9uKSByZXR1cm47XG4gICAgaWYodXNlcm5hbWUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly8xMC4xMS42Ljk6MzAwNScpO1xuICAgIHNvY2tldC5lbWl0KCdqb2luJywgdXNlcm5hbWUpO1xuICAgIFxuICAgIHNldFNvY2tldChzb2NrZXQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlcyhbXSk7XG4gICAgICBzb2NrZXQub2ZmKCdtZXNzYWdlJylcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBbY29ubmVjdGlvbl0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKCFjb25uZWN0aW9uKSByZXR1cm47XG4gICAgaWYgKHNvY2tldCkge1xuICAgICAgXG4gICAgICBzb2NrZXQuZW1pdCgnZ2V0LW1lc3NhZ2UnLCB1c2VybmFtZSk7XG4gICAgICBzb2NrZXQub24oJ3JlY2VpdmUtbWVzc2FnZScsIChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBzZXRNZXNzYWdlcygobWVzc2FnZXM6YW55KSA9PiBbLi4ubWVzc2FnZXMsIG1lc3NhZ2VdKTtcblxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc29ja2V0LHVzZXJuYW1lLGNvbm5lY3Rpb25dKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighY29ubmVjdGlvbikgcmV0dXJuO1xuICAgIGlmIChzb2NrZXQpIHtcbiAgICAgIHNvY2tldC5lbWl0KCdnZXQtb25saW5lLXVzZXJzJywgdXNlcm5hbWUpO1xuICAgICAgc29ja2V0Lm9uKCdvbmxpbmUtdXNlcnMnLCAodXNlcnM6YW55KSA9PiB7XG4gICAgICAgIHNldE9ubGluZVVzZXJzKHVzZXJzKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgfVxuICB9LCBbc29ja2V0LHVzZXJuYW1lLGNvbm5lY3Rpb25dKTtcbiAgY29uc3QgaGFuZGxlTWVzc2FnZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZXJlY2VpdmVyQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRSZWNpZXZlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCFtZXNzYWdlIHx8ICFyZWNpZXZlcikgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoJ3NlbmQtbWVzc2FnZScsIHsgc2VuZGVySWQ6dXNlcm5hbWUsIHJlY2VpdmVySWQ6cmVjaWV2ZXIsIG1lc3NhZ2U6bWVzc2FnZSB9KTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goeyBzZW5kZXJJZDp1c2VybmFtZSwgbWVzc2FnZTptZXNzYWdlIH0pO1xuICAgIHNldE1lc3NhZ2UoJycpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c2V0Q29ubmVjdGlvbigpfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBmbGV4LTEgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHAtMiByb3VuZGVkLWxnIG0tMidcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQnIG9uQ2xpY2s9eygpID0+IHtzZXRDb25uZWN0aW9uKHRydWUpfX0+Q29ubmVjdDwvYnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPk1lc3NhZ2VzPC9oMT5cbiAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bWVzc2FnZXMgJiYgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8cD57bWVzc2FnZS5zZW5kZXJJZH0gOiB7bWVzc2FnZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgIHsvKiBwaWNrIGEgdXNlciB0byBzZW5kIG1lc3NhZ2UgdG8gZnJvbSBvbmxpbmUgdXNlcnMgKi99XG4gICAgICAgIDxkaXYgaWQ9XCJvbmxpbmUtdXNlcnNcIj5cbiAgICAgICAgICB7b25saW5lVXNlcnMgJiYgb25saW5lVXNlcnMubGVuZ3RoID4gMCAmJiBvbmxpbmVVc2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNpZXZlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJlY2VpdmVyQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWw+e3VzZXJ9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJtZXNzYWdlXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsIlBhZ2UiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJyZWNpZXZlciIsInNldFJlY2lldmVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIm9ubGluZVVzZXJzIiwic2V0T25saW5lVXNlcnMiLCJjb25uZWN0aW9uIiwic2V0Q29ubmVjdGlvbiIsImxlbmd0aCIsImVtaXQiLCJvZmYiLCJkaXNjb25uZWN0Iiwib24iLCJ1c2VycyIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlcmVjZWl2ZXJDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZW5kZXJJZCIsInJlY2VpdmVySWQiLCJwdXNoIiwibWFpbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJkaXYiLCJpZCIsIm1hcCIsImluZGV4IiwicCIsInVzZXIiLCJuYW1lIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});