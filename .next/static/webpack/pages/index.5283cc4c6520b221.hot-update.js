"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/drag-n-drop-file-uploader.js":
/*!********************************************!*\
  !*** ./pages/drag-n-drop-file-uploader.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction DragDropFile() {\n    _s();\n    const [dragActive, setDragActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleDrag = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        if (e.type === \"dragenter\" || e.type === \"dragover\") {\n            setDragActive(true);\n        } else if (e.type === \"dragleave\") {\n            setDragActive(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"form-file-upload\",\n                onDragEnter: handleDrag,\n                onSubmit: (e)=>e.preventDefault(),\n                className: \"jsx-3342e61edc9b4a83\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        id: \"input-file-upload\",\n                        multiple: true,\n                        className: \"jsx-3342e61edc9b4a83\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/File-uploader/pages/drag-n-drop-file-uploader.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        id: \"label-file-upload\",\n                        htmlFor: \"input-file-upload\",\n                        className: \"jsx-3342e61edc9b4a83\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-3342e61edc9b4a83\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-3342e61edc9b4a83\",\n                                    children: \"Drag and drop file here or\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/File-uploader/pages/drag-n-drop-file-uploader.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"jsx-3342e61edc9b4a83\" + \" \" + \"upload-button\",\n                                    children: \"Upload a file\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/File-uploader/pages/drag-n-drop-file-uploader.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/File-uploader/pages/drag-n-drop-file-uploader.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/File-uploader/pages/drag-n-drop-file-uploader.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/File-uploader/pages/drag-n-drop-file-uploader.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3342e61edc9b4a83\",\n                children: '#form-file-upload.jsx-3342e61edc9b4a83{height:16rem;width:28rem;max-width:100%;text-align:center;position:relative}#input-file-upload.jsx-3342e61edc9b4a83{display:none}#label-file-upload.jsx-3342e61edc9b4a83{height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;border:2px dashed#cbd5e1;-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem;background:#f8fafc}#label-file-upload.drag-active.jsx-3342e61edc9b4a83{background:#fff}.upload-button.jsx-3342e61edc9b4a83{cursor:pointer;padding:.25rem;font-size:1rem;border:none;background:transparent;font-family:\"Oswald\",sans-serif}.upload-button.jsx-3342e61edc9b4a83:hover{text-decoration:underline}'\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(DragDropFile, \"B2AOPnfZQwER03kq/NOASmPaG9E=\");\n_c = DragDropFile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragDropFile);\nvar _c;\n$RefreshReg$(_c, \"DragDropFile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kcmFnLW4tZHJvcC1maWxlLXVwbG9hZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFFaEMsU0FBU0MsZUFBYzs7SUFFbkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFFbEQsTUFBTUksYUFBYSxTQUFTQyxDQUFDLEVBQUM7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJELEVBQUVFLGVBQWU7UUFFakIsSUFBR0YsRUFBRUcsSUFBSSxLQUFLLGVBQWVILEVBQUVHLElBQUksS0FBSyxZQUFXO1lBQy9DTCxjQUFjLElBQUk7UUFDdEIsT0FBTSxJQUFJRSxFQUFFRyxJQUFJLEtBQUssYUFBWTtZQUM3QkwsY0FBYyxLQUFLO1FBQ3ZCLENBQUM7SUFDTDtJQUNBLHFCQUNJOzswQkFDSSw4REFBQ007Z0JBQUtDLElBQUc7Z0JBQW1CQyxhQUFhUDtnQkFBWVEsVUFBVVAsQ0FBQUEsSUFBS0EsRUFBRUMsY0FBYzs7O2tDQUNoRiw4REFBQ087d0JBQU1MLE1BQUs7d0JBQU9FLElBQUc7d0JBQW9CSSxRQUFROzs7Ozs7O2tDQUNsRCw4REFBQ0M7d0JBQU1MLElBQUc7d0JBQW9CTSxTQUFROztrQ0FDbEMsNEVBQUNDOzs7OENBQ0csOERBQUNDOzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQzs4RUFBaUI7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDMUQ7R0FuRVNsQjtLQUFBQTtBQXFFVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kcmFnLW4tZHJvcC1maWxlLXVwbG9hZGVyLmpzP2U2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5mdW5jdGlvbiBEcmFnRHJvcEZpbGUoKXtcblxuICAgIGNvbnN0IFtkcmFnQWN0aXZlLCBzZXREcmFnQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYWcgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmKGUudHlwZSA9PT0gJ2RyYWdlbnRlcicgfHwgZS50eXBlID09PSAnZHJhZ292ZXInKXtcbiAgICAgICAgICAgIHNldERyYWdBY3RpdmUodHJ1ZSk7XG4gICAgICAgIH1lbHNlIGlmIChlLnR5cGUgPT09ICdkcmFnbGVhdmUnKXtcbiAgICAgICAgICAgIHNldERyYWdBY3RpdmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtLWZpbGUtdXBsb2FkXCIgb25EcmFnRW50ZXI9e2hhbmRsZURyYWd9IG9uU3VibWl0PXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIGlkPVwiaW5wdXQtZmlsZS11cGxvYWRcIiBtdWx0aXBsZSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cImxhYmVsLWZpbGUtdXBsb2FkXCIgaHRtbEZvcj1cImlucHV0LWZpbGUtdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmFnIGFuZCBkcm9wIGZpbGUgaGVyZSBvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidXBsb2FkLWJ1dHRvblwiPlVwbG9hZCBhIGZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAjZm9ybS1maWxlLXVwbG9hZHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNpbnB1dC1maWxlLXVwbG9hZHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNsYWJlbC1maWxlLXVwbG9hZHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNjYmQ1ZTE7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI2xhYmVsLWZpbGUtdXBsb2FkLmRyYWctYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC51cGxvYWQtYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnVwbG9hZC1idXR0b246aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcEZpbGUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEcmFnRHJvcEZpbGUiLCJkcmFnQWN0aXZlIiwic2V0RHJhZ0FjdGl2ZSIsImhhbmRsZURyYWciLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0eXBlIiwiZm9ybSIsImlkIiwib25EcmFnRW50ZXIiLCJvblN1Ym1pdCIsImlucHV0IiwibXVsdGlwbGUiLCJsYWJlbCIsImh0bWxGb3IiLCJkaXYiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/drag-n-drop-file-uploader.js\n"));

/***/ })

});