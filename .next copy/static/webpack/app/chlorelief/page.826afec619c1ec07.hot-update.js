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

/***/ "(app-pages-browser)/./app/chlorelief/components/Navbar/NavView/DesktopNav.tsx":
/*!*****************************************************************!*\
  !*** ./app/chlorelief/components/Navbar/NavView/DesktopNav.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DesktopNav = (param)=>{\n    let { links } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:block hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex gap-10\",\n                children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: link.hover,\n                        href: link.href,\n                        children: link.text\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\DesktopNav.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\DesktopNav.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\DesktopNav.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deeezy\\\\OneDrive\\\\Desktop\\\\Lubie\\\\ApexpointV2\\\\app\\\\chlorelief\\\\components\\\\Navbar\\\\NavView\\\\DesktopNav.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DesktopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesktopNav);\nvar _c;\n$RefreshReg$(_c, \"DesktopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGxvcmVsaWVmL2NvbXBvbmVudHMvTmF2YmFyL05hdlZpZXcvRGVza3RvcE5hdi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNHO0FBSzdCLE1BQU1FLGFBQXdDO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBT0QsV0FBVTswQkFDZkYsTUFBTUksR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ1Isa0RBQUlBO3dCQUNISSxXQUFXRyxLQUFLRSxLQUFLO3dCQUVyQkMsTUFBTUgsS0FBS0csSUFBSTtrQ0FFZEgsS0FBS0ksSUFBSTt1QkFITEg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVW5CO0tBbEJNUDtBQW1CTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hsb3JlbGllZi9jb21wb25lbnRzL05hdmJhci9OYXZWaWV3L0Rlc2t0b3BOYXYudHN4P2NjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBEZXNrdG9wTmF2UHJvcHMge1xyXG4gIGxpbmtzOiB7IHRleHQ6IHN0cmluZzsgaHJlZjogc3RyaW5nOyBob3ZlcjpzdHJpbmcgfVtdO1xyXG59XHJcbmNvbnN0IERlc2t0b3BOYXY6IFJlYWN0LkZDPERlc2t0b3BOYXZQcm9wcz4gPSAoeyBsaW5rcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpibG9jayBoaWRkZW4nPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGdhcC0xMCc+XHJcbiAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17bGluay5ob3Zlcn1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BOYXY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJEZXNrdG9wTmF2IiwibGlua3MiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJob3ZlciIsImhyZWYiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chlorelief/components/Navbar/NavView/DesktopNav.tsx\n"));

/***/ })

});