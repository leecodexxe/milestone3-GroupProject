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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; },\n/* harmony export */   name: function() { return /* binding */ name; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server/db/client */ \"(app-pages-browser)/./server/db/client.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default,name auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n//HOME PAGE\nfunction Page(_) {\n    return _Page.apply(this, arguments);\n}\nfunction _Page() {\n    _Page = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(param) {\n        var posts, _useState, login, setLogin, _useState1, password, setPassword;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function(_state) {\n            posts = param.posts;\n            _s();\n            _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), 2), login = _useState[0], setLogin = _useState[1];\n            _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), 2), password = _useState1[0], setPassword = _useState1[1];\n            return [\n                2,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Slot Tracker\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: function(e) {\n                                    e.preventDefault();\n                                    console.log(\"this is login info\" + login, password);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"User name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        onChange: function(e) {\n                                            return setLogin(e.target.value);\n                                        },\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        onChange: function(e) {\n                                            return setPassword(e.target.value);\n                                        },\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/games\",\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        display: \"inline-block\"\n                                    },\n                                    children: \"Don't have a account? Sign up today!\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/signup\",\n                                    children: \"Sign up\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\UNLV-Coding\\\\milestone\\\\p2\\\\p2msa\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            ];\n        });\n    });\n    return _Page.apply(this, arguments);\n}\n_s(Page, \"VcBgZJo7FqEfiNjdD6W1/t1hnvQ=\");\n_c = Page;\nfunction name(username, password) {\n    return _name.apply(this, arguments);\n}\nfunction _name() {\n    _name = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(username, password) {\n        var data, isInDataBase;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _server_db_client__WEBPACK_IMPORTED_MODULE_2__.prisma.userdata.findMany()\n                    ];\n                case 1:\n                    data = _state.sent();\n                    isInDataBase = data.map(function(data) {\n                        if (username === data.username && password === data.pw) {\n                            return true;\n                        }\n                    });\n                    return [\n                        2,\n                        isInDataBase ? true : false\n                    ];\n            }\n        });\n    });\n    return _name.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QjtBQUNtQjtBQUNmO0FBRWhDLFdBQVc7QUFDSSxTQUFlRyxLQUFLLENBQVM7V0FBZEE7O1NBQUFBO0lBQUFBLFFBQWYsNEVBQW9CLEtBQVM7WUFBUEMsT0FDUEYsV0FBbkJHLE9BQU9DLFVBQ2tCSixZQUF6QkssVUFBVUM7O1lBRmdCSixRQUFGLE1BQUVBOztZQUNQRixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBNUJHLFFBQW1CSCxjQUFaSSxXQUFZSjtZQUNNQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBbENLLFdBQXlCTCxlQUFmTSxjQUFlTjtZQUNoQzs7OEJBQ0ksOERBQUNPOztzQ0FDRyw4REFBQ0E7c0NBQ0csNEVBQUNDOzBDQUFHOzs7Ozs7Ozs7OztzQ0FFUiw4REFBQ0Q7c0NBQ0csNEVBQUNFO2dDQUFLQyxVQUFVLFNBQUNDO29DQUNiQSxFQUFFQyxjQUFjO29DQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QlgsT0FBT0U7Z0NBQzlDOztrREFDSSw4REFBQ1U7a0RBQU87Ozs7OztrREFDUiw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLFVBQVUsU0FBQ1A7bURBQU1QLFNBQVNPLEVBQUVRLE1BQU0sQ0FBQ0MsS0FBSzs7d0NBQUdDLFFBQVE7Ozs7OztrREFDdEUsOERBQUNOO2tEQUFPOzs7Ozs7a0RBQ1IsOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFXQyxVQUFVLFNBQUNQO21EQUFNTCxZQUFZSyxFQUFFUSxNQUFNLENBQUNDLEtBQUs7O3dDQUFHQyxRQUFROzs7Ozs7a0RBQzdFLDhEQUFDQzt3Q0FBT0wsTUFBSztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzlCLDhEQUFDbkIsa0RBQUlBOzRCQUFDeUIsTUFBSztzQ0FBUzs7Ozs7O3NDQUNwQiw4REFBQ2hCOzs4Q0FDRyw4REFBQ2lCO29DQUFFQyxPQUFPO3dDQUFFQyxTQUFTO29DQUFlOzhDQUFHOzs7Ozs7OENBQ3ZDLDhEQUFDNUIsa0RBQUlBO29DQUFDeUIsTUFBSzs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJckM7V0EzQjhCdEI7O0dBQUFBO0tBQUFBO0FBNEJ2QixTQUFlMEIsS0FBS0MsUUFBZ0IsRUFBRXZCLFFBQWdCO1dBQXZDc0I7O1NBQUFBO0lBQUFBLFFBQWYsNEVBQW9CQyxRQUFnQixFQUFFdkIsUUFBZ0I7WUFDbkR3QixNQUNBQzs7OztvQkFETzs7d0JBQU0vQixxREFBTUEsQ0FBQ2dDLFFBQVEsQ0FBQ0MsUUFBUTs7O29CQUFyQ0gsT0FBTztvQkFDUEMsZUFBZUQsS0FBS0ksR0FBRyxDQUFDLFNBQUNKO3dCQUMzQixJQUFJRCxhQUFhQyxLQUFLRCxRQUFRLElBQUl2QixhQUFhd0IsS0FBS0ssRUFBRSxFQUFFOzRCQUNwRCxPQUFPO3dCQUNYO29CQUNKO29CQUNBOzt3QkFBT0osZUFBZSxPQUFPOzs7O0lBQ2pDO1dBUnNCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGIvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9IT01FIFBBR0VcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUGFnZSh7IHBvc3RzIH0pIHtcclxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlNsb3QgVHJhY2tlcjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGxvZ2luIGluZm9cIiArIGxvZ2luLCBwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+VXNlciBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZyBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYW1lc1wiPkxvZyBJbjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PkRvbid0IGhhdmUgYSBhY2NvdW50PyBTaWduIHVwIHRvZGF5ITwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+U2lnbiB1cDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5hbWUodXNlcm5hbWU6IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS51c2VyZGF0YS5maW5kTWFueSgpXHJcbiAgICBjb25zdCBpc0luRGF0YUJhc2UgPSBkYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gZGF0YS51c2VybmFtZSAmJiBwYXNzd29yZCA9PT0gZGF0YS5wdykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gaXNJbkRhdGFCYXNlID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJwcmlzbWEiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwb3N0cyIsImxvZ2luIiwic2V0TG9naW4iLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJidXR0b24iLCJocmVmIiwicCIsInN0eWxlIiwiZGlzcGxheSIsIm5hbWUiLCJ1c2VybmFtZSIsImRhdGEiLCJpc0luRGF0YUJhc2UiLCJ1c2VyZGF0YSIsImZpbmRNYW55IiwibWFwIiwicHciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});