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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoClose!=!react-icons/io5 */ \"(app-pages-browser)/./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GiHamburgerMenu!=!react-icons/gi */ \"(app-pages-browser)/./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\nconst MobileNav = (param)=>{\n    let { setNavMenu, navMenu, links } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:hidden flex justify-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  px-6 py-3 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden block cursor-pointer z-10\",\n                    onClick: ()=>setNavMenu(!navMenu),\n                    children: navMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoClose_react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoClose, {\n                        size: 32\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 22\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_4__.GiHamburgerMenu, {\n                        size: 32\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 46\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                children: navMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        x: \"100%\"\n                    },\n                    animate: {\n                        opacity: 1,\n                        x: \"0%\"\n                    },\n                    exit: {\n                        opacity: 0,\n                        x: \"100%\"\n                    },\n                    transition: {\n                        duration: 0.5,\n                        ease: \"easeInOut\"\n                    },\n                    className: \"right-0 top-0 shadow-md w-[40%] fixed h-full bg-white font-medium z-[100]    \",\n                    onClick: ()=>setNavMenu(!navMenu),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex text-Caption-Mobile sm:text-Caption-Desktop font-inter\",\n                        children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                onClick: ()=>setNavMenu(!navMenu),\n                                href: link.href,\n                                className: link.hover,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: link.text\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\MobileNav.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGxvcmVsaWVmL2NvbXBvbmVudHMvTmF2YmFyL05hdlZpZXcvTW9iaWxlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNPO0FBQ3BCO0FBQzJCO0FBU3hELE1BQU1NLFlBQXNDO1FBQUMsRUFDM0NDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxLQUFLLEVBQ047SUFDQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBUyxJQUFNTCxXQUFXLENBQUNDOzhCQUUxQkEsd0JBQVUsOERBQUNQLG1GQUFPQTt3QkFBQ1ksTUFBTTs7Ozs7a0RBQVMsOERBQUNYLGtHQUFlQTt3QkFBQ1csTUFBTTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNSLDBEQUFlQTswQkFDYkcseUJBQ0MsOERBQUNKLGlEQUFNQSxDQUFDTSxHQUFHO29CQUNUSSxTQUFTO3dCQUFFQyxTQUFTO3dCQUFHQyxHQUFHO29CQUFPO29CQUNqQ0MsU0FBUzt3QkFBRUYsU0FBUzt3QkFBR0MsR0FBRztvQkFBSztvQkFDL0JFLE1BQU07d0JBQUVILFNBQVM7d0JBQUdDLEdBQUc7b0JBQU87b0JBQzlCRyxZQUFZO3dCQUFFQyxVQUFVO3dCQUFLQyxNQUFNO29CQUFZO29CQUMvQ1YsV0FBVTtvQkFFVkMsU0FBUyxJQUFNTCxXQUFXLENBQUNDOzhCQUUzQiw0RUFBQ2M7d0JBQUdYLFdBQVU7a0NBQ1hGLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUN0QixrREFBSUE7Z0NBRUhTLFNBQVMsSUFBTUwsV0FBVyxDQUFDQztnQ0FDM0JrQixNQUFNRixLQUFLRSxJQUFJO2dDQUNmZixXQUFXYSxLQUFLRyxLQUFLOzBDQUVyQiw0RUFBQ0M7OENBQUlKLEtBQUtLLElBQUk7Ozs7OzsrQkFMVEo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3ZCO0tBM0NNbkI7QUE2Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NobG9yZWxpZWYvY29tcG9uZW50cy9OYXZiYXIvTmF2Vmlldy9Nb2JpbGVOYXYudHN4P2NmMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XHJcbmltcG9ydCB7IEdpSGFtYnVyZ2VyTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2dpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmludGVyZmFjZSBNb2JpbGVOYXZQcm9wcyB7XHJcbiAgbmF2TWVudTogYm9vbGVhbjtcclxuXHJcbiAgc2V0TmF2TWVudTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4gIGxpbmtzOiB7IHRleHQ6IHN0cmluZzsgaHJlZjogc3RyaW5nICwgaG92ZXI6c3RyaW5nIH1bXTtcclxufVxyXG5cclxuY29uc3QgTW9iaWxlTmF2OiBSZWFjdC5GQzxNb2JpbGVOYXZQcm9wcz4gPSAoe1xyXG4gIHNldE5hdk1lbnUsXHJcbiAgbmF2TWVudSxcclxuICBsaW5rcyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6aGlkZGVuIGZsZXgganVzdGlmeS1zdGFydCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4ICBweC02IHB5LTMgJz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9J21kOmhpZGRlbiBibG9jayBjdXJzb3ItcG9pbnRlciB6LTEwJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2TWVudSghbmF2TWVudSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge25hdk1lbnUgPyA8SW9DbG9zZSBzaXplPXszMn0gLz4gOiA8R2lIYW1idXJnZXJNZW51IHNpemU9ezMyfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAge25hdk1lbnUgJiYgKFxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAnMTAwJScgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAnMCUnIH19XHJcbiAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZWFzZTogJ2Vhc2VJbk91dCcgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdyaWdodC0wIHRvcC0wIHNoYWRvdy1tZCB3LVs0MCVdIGZpeGVkIGgtZnVsbCBiZy13aGl0ZSBmb250LW1lZGl1bSB6LVsxMDBdIFxyXG4gICAgICAgICAgJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZNZW51KCFuYXZNZW51KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCB0ZXh0LUNhcHRpb24tTW9iaWxlIHNtOnRleHQtQ2FwdGlvbi1EZXNrdG9wIGZvbnQtaW50ZXInPlxyXG4gICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZNZW51KCFuYXZNZW51KX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2xpbmsuaG92ZXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT57bGluay50ZXh0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTmF2O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJb0Nsb3NlIiwiR2lIYW1idXJnZXJNZW51IiwiTGluayIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIk1vYmlsZU5hdiIsInNldE5hdk1lbnUiLCJuYXZNZW51IiwibGlua3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInVsIiwibWFwIiwibGluayIsImluZGV4IiwiaHJlZiIsImhvdmVyIiwibGkiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chlorelief/components/Navbar/NavView/MobileNav.tsx\n"));

/***/ })

});