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

/***/ "./pages/react-drag-n-drop.js":
/*!************************************!*\
  !*** ./pages/react-drag-n-drop.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst App = ()=>{\n    _s();\n    const dragItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const dragOverItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"item1\",\n        \"item2\",\n        \"item3\",\n        \"item4\",\n        \"item5\",\n        \"item6\"\n    ]);\n    const dragStart = (e, position)=>{\n        dragItem.current = position;\n        console.log(e.target.innerHTML);\n        console.log(dragItem.current);\n    };\n    const dragEnter = (e, position)=>{\n        dragOverItem.current = position;\n        console.log(e.target.innerHTML);\n        console.log(dragOverItem.current);\n        e.target.style.background = \"red\";\n    };\n    const dragLeave = (e, position)=>{\n        e.target.style.background = \"lightblue\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: list && list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: \"lightblue\",\n                    margin: \"20px 25%\",\n                    textAlign: \"center\",\n                    fontSize: \"40px\"\n                },\n                draggable: true,\n                onDragStart: (e)=>dragStart(e, index),\n                onDragOver: (e)=>dragEnter(e, index),\n                onDragLeave: (e)=>dragLeave(e, index),\n                children: item\n            }, index.toString(), false, {\n                fileName: \"/workspaces/File-uploader/pages/react-drag-n-drop.js\",\n                lineNumber: 32,\n                columnNumber: 21\n            }, undefined))\n    }, void 0, false);\n};\n_s(App, \"TTZp4Jcc+R6dIfbdhfHznlp31TM=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWFjdC1kcmFnLW4tZHJvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLE1BQUssSUFBSTs7SUFFWCxNQUFNQyxXQUFXSCw2Q0FBTUE7SUFDdkIsTUFBTUksZUFBZUosNkNBQU1BO0lBQzNCLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFDO1FBQVM7UUFBUztRQUFTO1FBQVM7UUFBUztLQUFRO0lBRXZGLE1BQU1NLFlBQVcsQ0FBQ0MsR0FBR0MsV0FBVztRQUM1Qk4sU0FBU08sT0FBTyxHQUFHRDtRQUNuQkUsUUFBUUMsR0FBRyxDQUFDSixFQUFFSyxNQUFNLENBQUNDLFNBQVM7UUFDOUJILFFBQVFDLEdBQUcsQ0FBQ1QsU0FBU08sT0FBTztJQUNoQztJQUVBLE1BQU1LLFlBQVcsQ0FBQ1AsR0FBR0MsV0FBVztRQUM1QkwsYUFBYU0sT0FBTyxHQUFHRDtRQUN2QkUsUUFBUUMsR0FBRyxDQUFDSixFQUFFSyxNQUFNLENBQUNDLFNBQVM7UUFDOUJILFFBQVFDLEdBQUcsQ0FBQ1IsYUFBYU0sT0FBTztRQUVoQ0YsRUFBRUssTUFBTSxDQUFDRyxLQUFLLENBQUNDLFVBQVUsR0FBRztJQUNoQztJQUVBLE1BQU1DLFlBQVcsQ0FBQ1YsR0FBR0MsV0FBVztRQUM1QkQsRUFBRUssTUFBTSxDQUFDRyxLQUFLLENBQUNDLFVBQVUsR0FBRztJQUNoQztJQUVBLHFCQUNJO2tCQUVRWixRQUNBQSxLQUFLYyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1osOERBQUNDO2dCQUFJTixPQUFPO29CQUFFQyxZQUFZO29CQUFhTSxRQUFRO29CQUFZQyxXQUFXO29CQUFVQyxVQUFVO2dCQUFPO2dCQUEwQkMsU0FBUztnQkFDcElDLGFBQWEsQ0FBQ25CLElBQUtELFVBQVVDLEdBQUdhO2dCQUNoQ08sWUFBWSxDQUFDcEIsSUFBS08sVUFBVVAsR0FBR2E7Z0JBQy9CUSxhQUFhLENBQUNyQixJQUFLVSxVQUFVVixHQUFHYTswQkFFM0JEO2VBTG9HQyxNQUFNUyxRQUFROzs7Ozs7QUFXM0k7R0F4Q001QjtLQUFBQTtBQTBDTiwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWFjdC1kcmFnLW4tZHJvcC5qcz82MzczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBBcHAgPSgpPT57XG5cbiAgICBjb25zdCBkcmFnSXRlbSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGRyYWdPdmVySXRlbSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFsnaXRlbTEnLCAnaXRlbTInLCAnaXRlbTMnLCAnaXRlbTQnLCAnaXRlbTUnLCAnaXRlbTYnXSk7XG5cbiAgICBjb25zdCBkcmFnU3RhcnQgPShlLCBwb3NpdGlvbik9PntcbiAgICAgICAgZHJhZ0l0ZW0uY3VycmVudCA9IHBvc2l0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lckhUTUwpXG4gICAgICAgIGNvbnNvbGUubG9nKGRyYWdJdGVtLmN1cnJlbnQpXG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ0VudGVyID0oZSwgcG9zaXRpb24pPT57XG4gICAgICAgIGRyYWdPdmVySXRlbS5jdXJyZW50ID0gcG9zaXRpb247XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVySFRNTClcbiAgICAgICAgY29uc29sZS5sb2coZHJhZ092ZXJJdGVtLmN1cnJlbnQpXG5cbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdMZWF2ZSA9KGUsIHBvc2l0aW9uKT0+e1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpZ2h0Ymx1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdCAmJiBcbiAgICAgICAgICAgICAgICBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpPT4oXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpZ2h0Ymx1ZScsIG1hcmdpbjogJzIwcHggMjUlJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICc0MHB4JyB9fSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IGRyYWdnYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlKT0+IGRyYWdTdGFydChlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKT0+IGRyYWdFbnRlcihlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoZSk9PiBkcmFnTGVhdmUoZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJBcHAiLCJkcmFnSXRlbSIsImRyYWdPdmVySXRlbSIsImxpc3QiLCJzZXRMaXN0IiwiZHJhZ1N0YXJ0IiwiZSIsInBvc2l0aW9uIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJkcmFnRW50ZXIiLCJzdHlsZSIsImJhY2tncm91bmQiLCJkcmFnTGVhdmUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0xlYXZlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/react-drag-n-drop.js\n"));

/***/ })

});