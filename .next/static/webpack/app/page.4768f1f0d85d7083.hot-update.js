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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; },\n/* harmony export */   name: function() { return /* binding */ name; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/db/client */ \"(app-pages-browser)/./server/db/client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default,name auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n//HOME PAGE\nfunction Page(_) {\n    return _Page.apply(this, arguments);\n}\nfunction _Page() {\n    _Page = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(param) {\n        var posts, _useState, login, setLogin, _useState1, password, setPassword;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function(_state) {\n            posts = param.posts;\n            _s();\n            _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), login = _useState[0], setLogin = _useState[1];\n            _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), password = _useState1[0], setPassword = _useState1[1];\n            console.log(\"this is login info\" + login, password);\n            return [\n                2,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Slot Tracker\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: function(e) {\n                                    e.preventDefault();\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: \"User name\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 21,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                onChange: function(e) {\n                                                    return setLogin(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 22,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 25,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                onChange: function(e) {\n                                                    return setPassword(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                                lineNumber: 26,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ];\n        });\n    });\n    return _Page.apply(this, arguments);\n}\n_s(Page, \"yheLViTV+Rj0wBG3t+t+m4rra3c=\");\n_c = Page;\nfunction name(username, password) {\n    return _name.apply(this, arguments);\n}\nfunction _name() {\n    _name = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function(username, password) {\n        var data, isInDataBase;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _server_db_client__WEBPACK_IMPORTED_MODULE_1__.prisma.userdata.findMany()\n                    ];\n                case 1:\n                    data = _state.sent();\n                    isInDataBase = data.map(function(data) {\n                        if (username === data.username && password === data.pw) {\n                            return true;\n                        }\n                    });\n                    return [\n                        2,\n                        isInDataBase ? true : false\n                    ];\n            }\n        });\n    });\n    return _name.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFDZjtBQUVoQyxXQUFXO0FBQ00sU0FBZUUsS0FBSyxDQUFPO1dBQVpBOztTQUFBQTtJQUFBQSxRQUFmLDRFQUFvQixLQUFPO1lBQU5DLE9BQ1RGLFdBQWxCRyxPQUFNQyxVQUNrQkosWUFBeEJLLFVBQVNDOztZQUZrQkosUUFBRCxNQUFDQTs7WUFDVEYsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQTNCRyxRQUFrQkgsY0FBWkksV0FBWUo7WUFDTUEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQWpDSyxXQUF3QkwsZUFBZk0sY0FBZU47WUFDL0JPLFFBQVFDLEdBQUcsQ0FBQyx1QkFBcUJMLE9BQU1FO1lBQ3ZDOzs4QkFDSSw4REFBQ0k7O3NDQUNELDhEQUFDQTtzQ0FDRyw0RUFBQ0M7MENBQUc7Ozs7Ozs7Ozs7O3NDQUVSLDhEQUFDRDtzQ0FDRyw0RUFBQ0U7Z0NBQUtDLFVBQVUsU0FBQ0M7b0NBQ2JBLEVBQUVDLGNBQWM7Z0NBQ3BCOztrREFDQSw4REFBQ0w7OzBEQUNHLDhEQUFDTTswREFBTzs7Ozs7OzBEQUNSLDhEQUFDQztnREFBTUMsTUFBSztnREFBT0MsVUFBVSxTQUFDTDsyREFBTVQsU0FBU1MsRUFBRU0sTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7O2tEQUUvRCw4REFBQ1g7OzBEQUNHLDhEQUFDTTswREFBTzs7Ozs7OzBEQUNSLDhEQUFDQztnREFBTUMsTUFBSztnREFBV0MsVUFBVSxTQUFDTDsyREFBTVAsWUFBWU8sRUFBRU0sTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7O2tEQUV0RSw4REFBQ0M7d0NBQU9KLE1BQUs7a0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFVbEM7V0EvQmdDaEI7O0dBQUFBO0tBQUFBO0FBZ0N6QixTQUFlcUIsS0FBS0MsUUFBZSxFQUFDbEIsUUFBZTtXQUFwQ2lCOztTQUFBQTtJQUFBQSxRQUFmLDRFQUFvQkMsUUFBZSxFQUFDbEIsUUFBZTtZQUNoRG1CLE1BQ0FDOzs7O29CQURPOzt3QkFBTTFCLHFEQUFNQSxDQUFDMkIsUUFBUSxDQUFDQyxRQUFROzs7b0JBQXJDSCxPQUFPO29CQUNQQyxlQUFlRCxLQUFLSSxHQUFHLENBQUMsU0FBQ0o7d0JBQzNCLElBQUdELGFBQWFDLEtBQUtELFFBQVEsSUFBSWxCLGFBQWFtQixLQUFLSyxFQUFFLEVBQUM7NEJBQ2xELE9BQU87d0JBQ1g7b0JBQ0o7b0JBQ0E7O3dCQUFPSixlQUFnQixPQUFPOzs7O0lBQ2xDO1dBUnNCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGIvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9IT01FIFBBR0VcclxuICBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQYWdlKHtwb3N0c30pe1xyXG4gICAgY29uc3QgW2xvZ2luLHNldExvZ2luXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGxvZ2luIGluZm9cIitsb2dpbixwYXNzd29yZClcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5TbG90IFRyYWNrZXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgPlVzZXIgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5Mb2cgaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWYgPVwiL2dhbWVzXCI+TG9nIEluPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PkRvbid0IGhhdmUgYSBhY2NvdW50PyBTaWduIHVwIHRvZGF5ITwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPVwiL3NpZ251cFwiPlNpZ24gdXA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbmFtZSh1c2VybmFtZTpTdHJpbmcscGFzc3dvcmQ6U3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLnVzZXJkYXRhLmZpbmRNYW55KClcclxuICAgIGNvbnN0IGlzSW5EYXRhQmFzZSA9IGRhdGEubWFwKChkYXRhKT0+e1xyXG4gICAgICAgIGlmKHVzZXJuYW1lID09PSBkYXRhLnVzZXJuYW1lICYmIHBhc3N3b3JkID09PSBkYXRhLnB3KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGlzSW5EYXRhQmFzZSA/ICB0cnVlIDogZmFsc2VcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwidXNlU3RhdGUiLCJQYWdlIiwicG9zdHMiLCJsb2dpbiIsInNldExvZ2luIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm5hbWUiLCJ1c2VybmFtZSIsImRhdGEiLCJpc0luRGF0YUJhc2UiLCJ1c2VyZGF0YSIsImZpbmRNYW55IiwibWFwIiwicHciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});