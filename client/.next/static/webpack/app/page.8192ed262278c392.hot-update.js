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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import socketio \n\n//set cookie of username\nfunction Page() {\n    _s();\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //messages is array of { senderId, message}\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reciever, setReciever] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    const [onlineUsers, setOnlineUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"useEffect\");\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://10.11.6.9:3005\");\n        socket.emit(\"join\", username);\n        setSocket(socket);\n        return ()=>{\n            setMessages([]);\n            socket.off(\"message\");\n            socket.disconnect();\n        };\n    }, [\n        username\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket) {\n            socket.emit(\"get-message\", username);\n            socket.on(\"receive-message\", (message)=>{\n                setMessages((messages)=>[\n                        ...messages,\n                        message\n                    ]);\n            });\n        }\n    }, [\n        socket,\n        username\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    const handlereceiverChange = (event)=>{\n        setReciever(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (!message || !reciever) return;\n        socket.emit(\"send-message\", {\n            senderId: username,\n            receiverId: reciever,\n            message: message\n        });\n        messages.push({\n            senderId: username,\n            message: message\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"bg-gray-200 flex-1 border-2 border-gray-200 p-2 rounded-lg m-2\",\n                        type: \"text\",\n                        placeholder: \"username\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Set Username\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Messages\"\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"messages\",\n                children: messages && messages.length > 0 && messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                message.senderId,\n                                \" : \",\n                                message.message\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"reciever\",\n                        value: reciever,\n                        onChange: handlereceiverChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"message\",\n                        value: message,\n                        onChange: handleMessageChange\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlektaib/Desktop/app/chatapp/src/app/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"5kUgi/PS44Qvn440KqU5Ebmw9yY=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNtQjt3QkFBT0osTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBMUZ3QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgc29ja2V0aW8gXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG4vLyBpbXBvcnQgQ29va2llc1xuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XG5cbmludGVyZmFjZSBtZXNzYWdlcyB7XG4gIHNlbmRlcklkOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cbi8vc2V0IGNvb2tpZSBvZiB1c2VybmFtZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGU8YW55PihudWxsKTtcbiAgLy9tZXNzYWdlcyBpcyBhcnJheSBvZiB7IHNlbmRlcklkLCBtZXNzYWdlfVxuXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8bWVzc2FnZXNbXT4oW10pOyBcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8YW55PignJyk7XG4gIGNvbnN0IFtyZWNpZXZlciwgc2V0UmVjaWV2ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2RlZmF1bHQnKTtcbiAgY29uc3QgW29ubGluZVVzZXJzLCBzZXRPbmxpbmVVc2Vyc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3RcIik7XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly8xMC4xMS42Ljk6MzAwNScpO1xuICAgIHNvY2tldC5lbWl0KCdqb2luJywgdXNlcm5hbWUpO1xuICAgIFxuICAgIHNldFNvY2tldChzb2NrZXQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlcyhbXSk7XG4gICAgICBzb2NrZXQub2ZmKCdtZXNzYWdlJylcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBbdXNlcm5hbWVdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc29ja2V0KSB7XG4gICAgICBzb2NrZXQuZW1pdCgnZ2V0LW1lc3NhZ2UnLCB1c2VybmFtZSk7XG4gICAgICBzb2NrZXQub24oJ3JlY2VpdmUtbWVzc2FnZScsIChtZXNzYWdlOmFueSkgPT4ge1xuICAgICAgICBzZXRNZXNzYWdlcygobWVzc2FnZXM6YW55KSA9PiBbLi4ubWVzc2FnZXMsIG1lc3NhZ2VdKTtcblxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc29ja2V0LHVzZXJuYW1lXSk7XG4gIFxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlcmVjZWl2ZXJDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldFJlY2lldmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCFtZXNzYWdlIHx8ICFyZWNpZXZlcikgcmV0dXJuO1xuICAgICAgc29ja2V0LmVtaXQoJ3NlbmQtbWVzc2FnZScsIHsgc2VuZGVySWQ6dXNlcm5hbWUsIHJlY2VpdmVySWQ6cmVjaWV2ZXIsIG1lc3NhZ2U6bWVzc2FnZSB9KTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goeyBzZW5kZXJJZDp1c2VybmFtZSwgbWVzc2FnZTptZXNzYWdlIH0pO1xuICAgIHNldE1lc3NhZ2UoJycpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBmbGV4LTEgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHAtMiByb3VuZGVkLWxnIG0tMidcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkJz5cbiAgICAgICAgICBTZXQgVXNlcm5hbWVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPk1lc3NhZ2VzPC9oMT5cbiAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bWVzc2FnZXMgJiYgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8cD57bWVzc2FnZS5zZW5kZXJJZH0gOiB7bWVzc2FnZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVjaWV2ZXJcIlxuICAgICAgICAgIHZhbHVlPXtyZWNpZXZlcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlcmVjZWl2ZXJDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiUGFnZSIsInNvY2tldCIsInNldFNvY2tldCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInJlY2lldmVyIiwic2V0UmVjaWV2ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwib25saW5lVXNlcnMiLCJzZXRPbmxpbmVVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwib2ZmIiwiZGlzY29ubmVjdCIsIm9uIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVyZWNlaXZlckNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2VuZGVySWQiLCJyZWNlaXZlcklkIiwicHVzaCIsIm1haW4iLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsImJ1dHRvbiIsImgxIiwiZGl2IiwiaWQiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});