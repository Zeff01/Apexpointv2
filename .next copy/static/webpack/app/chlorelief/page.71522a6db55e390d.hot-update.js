"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chlorelief/page",{

/***/ "(app-pages-browser)/./app/chlorelief/components/Navbar/NavView/MobileNav.tsx":
/*!****************************************************************!*\
  !*** ./app/chlorelief/components/Navbar/NavView/MobileNav.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GiHamburgerMenu!=!react-icons/gi */ \"(app-pages-browser)/./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\nconst MobileNav = (param)=>{\n    let { setNavMenu, navMenu, links } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:hidden fixed justify-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  text-white fixed  top-0 px-6 py-3 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden block cursor-pointer z-50\",\n                    onClick: ()=>setNavMenu(!navMenu),\n                    children: navMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoClose, {\n                        size: 32\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 22\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiHamburgerMenu, {\n                        size: 32\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 46\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: navMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        x: \"100%\"\n                    },\n                    animate: {\n                        opacity: 1,\n                        x: \"0%\"\n                    },\n                    exit: {\n                        opacity: 0,\n                        x: \"100%\"\n                    },\n                    transition: {\n                        duration: 0.5,\n                        ease: \"easeInOut\"\n                    },\n                    className: \"right-0 top-0 shadow-md w-[40%] fixed h-full bg-white font-medium z-[100]    \",\n                    onClick: ()=>setNavMenu(!navMenu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col gap-2 border-2  px-10  pt-10 text-Caption-Desktop font-inter\",\n                        children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                onClick: ()=>setNavMenu(!navMenu),\n                                href: link.href,\n                                className: link.hover,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: link.text\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGxvcmVsaWVmL2NvbXBvbmVudHMvTmF2YmFyL05hdlZpZXcvTW9iaWxlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNPO0FBQ3BCO0FBQzJCO0FBU3hELE1BQU1NLFlBQXNDO1FBQUMsRUFDM0NDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxLQUFLLEVBQ047SUFDQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBUyxJQUFNTCxXQUFXLENBQUNDOzhCQUUxQkEsd0JBQVUsOERBQUNQLG1GQUFPQTt3QkFBQ1ksTUFBTTs7Ozs7a0RBQVMsOERBQUNYLGtHQUFlQTt3QkFBQ1csTUFBTTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNSLDBEQUFlQTswQkFDYkcseUJBQ0MsOERBQUNKLGlEQUFNQSxDQUFDTSxHQUFHO29CQUNUSSxTQUFTO3dCQUFFQyxTQUFTO3dCQUFHQyxHQUFHO29CQUFPO29CQUNqQ0MsU0FBUzt3QkFBRUYsU0FBUzt3QkFBR0MsR0FBRztvQkFBSztvQkFDL0JFLE1BQU07d0JBQUVILFNBQVM7d0JBQUdDLEdBQUc7b0JBQU87b0JBQzlCRyxZQUFZO3dCQUFFQyxVQUFVO3dCQUFLQyxNQUFNO29CQUFZO29CQUMvQ1YsV0FBVTtvQkFFVkMsU0FBUyxJQUFNTCxXQUFXLENBQUNDOzhCQUUzQiw0RUFBQ2M7d0JBQUdYLFdBQVU7a0NBQ1hGLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUN0QixrREFBSUE7Z0NBRUhTLFNBQVMsSUFBTUwsV0FBVyxDQUFDQztnQ0FDM0JrQixNQUFNRixLQUFLRSxJQUFJO2dDQUNmZixXQUFXYSxLQUFLRyxLQUFLOzBDQUVyQiw0RUFBQ0M7OENBQUlKLEtBQUtLLElBQUk7Ozs7OzsrQkFMVEo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3ZCO0tBM0NNbkI7QUE2Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NobG9yZWxpZWYvY29tcG9uZW50cy9OYXZiYXIvTmF2Vmlldy9Nb2JpbGVOYXYudHN4P2NmMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XHJcbmltcG9ydCB7IEdpSGFtYnVyZ2VyTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmludGVyZmFjZSBNb2JpbGVOYXZQcm9wcyB7XHJcbiAgbmF2TWVudTogYm9vbGVhbjtcclxuXHJcbiAgc2V0TmF2TWVudTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4gIGxpbmtzOiB7IHRleHQ6IHN0cmluZzsgaHJlZjogc3RyaW5nICwgaG92ZXI6c3RyaW5nIH1bXTtcclxufVxyXG5cclxuY29uc3QgTW9iaWxlTmF2OiBSZWFjdC5GQzxNb2JpbGVOYXZQcm9wcz4gPSAoe1xyXG4gIHNldE5hdk1lbnUsXHJcbiAgbmF2TWVudSxcclxuICBsaW5rcyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6aGlkZGVuIGZpeGVkIGp1c3RpZnktc3RhcnQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCAgdGV4dC13aGl0ZSBmaXhlZCAgdG9wLTAgcHgtNiBweS0zICc+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdtZDpoaWRkZW4gYmxvY2sgY3Vyc29yLXBvaW50ZXIgei01MCdcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdk1lbnUoIW5hdk1lbnUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYXZNZW51ID8gPElvQ2xvc2Ugc2l6ZT17MzJ9IC8+IDogPEdpSGFtYnVyZ2VyTWVudSBzaXplPXszMn0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIHtuYXZNZW51ICYmIChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogJzAlJyB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGVhc2U6ICdlYXNlSW5PdXQnIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncmlnaHQtMCB0b3AtMCBzaGFkb3ctbWQgdy1bNDAlXSBmaXhlZCBoLWZ1bGwgYmctd2hpdGUgZm9udC1tZWRpdW0gei1bMTAwXSBcclxuICAgICAgICAgICdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2TWVudSghbmF2TWVudSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTIgYm9yZGVyLTIgIHB4LTEwICBwdC0xMCB0ZXh0LUNhcHRpb24tRGVza3RvcCBmb250LWludGVyJz5cclxuICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2TWVudSghbmF2TWVudSl9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtsaW5rLmhvdmVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+e2xpbmsudGV4dH08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW9DbG9zZSIsIkdpSGFtYnVyZ2VyTWVudSIsIkxpbmsiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJNb2JpbGVOYXYiLCJzZXROYXZNZW51IiwibmF2TWVudSIsImxpbmtzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNpemUiLCJpbml0aWFsIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ1bCIsIm1hcCIsImxpbmsiLCJpbmRleCIsImhyZWYiLCJob3ZlciIsImxpIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chlorelief/components/Navbar/NavView/MobileNav.tsx\n"));

/***/ })

});