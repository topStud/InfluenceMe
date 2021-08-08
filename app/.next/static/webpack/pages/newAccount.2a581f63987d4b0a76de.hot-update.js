self["webpackHotUpdate_N_E"]("pages/newAccount",{

/***/ "./components/personalInfo.js":
/*!************************************!*\
  !*** ./components/personalInfo.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PersonalInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_phone_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-phone-number */ "./node_modules/material-ui-phone-number/dist/index.js");
/* harmony import */ var material_ui_phone_number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_phone_number__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ "./node_modules/@material-ui/icons/AddPhotoAlternate.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\topaz\\WebstormProjects\\InfluenceMe\\app\\components\\personalInfo.js",
    _s = $RefreshSig$();








function PersonalInfo() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState2 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      phoneValue = _React$useState2[0],
      setPhoneValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
      _React$useState4 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      selectedFile = _React$useState4[0],
      setSelectedFile = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState6 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      imageName = _React$useState6[0],
      setImageName = _React$useState6[1];

  var handleUploadClick = function handleUploadClick(event) {
    var file = event.target.files[0];
    setImageName(file.name);
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setSelectedFile(reader.result);
    };
  };

  function onPhoneChange(e) {
    setPhoneValue(e.target.value);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    spacing: 4,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        id: "firstName",
        label: "First Name",
        type: "text",
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        id: "lastName",
        label: "Last Name",
        type: "text",
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        id: "date",
        label: "Birthday",
        type: "date",
        fullWidth: true,
        InputLabelProps: {
          shrink: true
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 8,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        accept: "image/*",
        style: {
          display: "none"
        },
        id: "contained-button-file",
        multiple: true,
        type: "file",
        onChange: handleUploadClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "contained-button-file",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Fab, {
          component: "span",
          style: {
            color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__.blue[900],
            margin: 10
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), imageName !== '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: imageName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 42
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Add a profile picture"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(PersonalInfo, "kL1W5Yo4fRp+SlPFv8EJSWHlkSk=");

_c = PersonalInfo;

var _c;

$RefreshReg$(_c, "PersonalInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXJzb25hbEluZm8uanMiXSwibmFtZXMiOlsiUGVyc29uYWxJbmZvIiwiUmVhY3QiLCJwaG9uZVZhbHVlIiwic2V0UGhvbmVWYWx1ZSIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImltYWdlTmFtZSIsInNldEltYWdlTmFtZSIsImhhbmRsZVVwbG9hZENsaWNrIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJlIiwicmVzdWx0Iiwib25QaG9uZUNoYW5nZSIsInZhbHVlIiwic2hyaW5rIiwiZGlzcGxheSIsImNvbG9yIiwiYmx1ZSIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSx3QkFDQ0MscURBQUEsQ0FBZSxFQUFmLENBREQ7QUFBQTtBQUFBLE1BQzVCQyxVQUQ0QjtBQUFBLE1BQ2hCQyxhQURnQjs7QUFBQSx5QkFFS0YscURBQUEsQ0FBZSxJQUFmLENBRkw7QUFBQTtBQUFBLE1BRTVCRyxZQUY0QjtBQUFBLE1BRWRDLGVBRmM7O0FBQUEseUJBR0RKLHFEQUFBLENBQWUsRUFBZixDQUhDO0FBQUE7QUFBQSxNQUc1QkssU0FINEI7QUFBQSxNQUdqQkMsWUFIaUI7O0FBS25DLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBWDtBQUNBTCxnQkFBWSxDQUFDRyxJQUFJLENBQUNHLElBQU4sQ0FBWjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxV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LFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3QWNjb3VudC4yYTU4MWY2Mzk4N2Q0YjBhNzZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNdWlQaG9uZU51bWJlciBmcm9tIFwibWF0ZXJpYWwtdWktcGhvbmUtbnVtYmVyXCI7XHJcbmltcG9ydCB7RmFifSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFkZFBob3RvQWx0ZXJuYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFBob3RvQWx0ZXJuYXRlXCI7XHJcbmltcG9ydCB7Ymx1ZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxJbmZvKCkge1xyXG4gICAgY29uc3QgW3Bob25lVmFsdWUsIHNldFBob25lVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtpbWFnZU5hbWUsIHNldEltYWdlTmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBzZXRJbWFnZU5hbWUoZmlsZS5uYW1lKVxyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRmlsZShyZWFkZXIucmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25QaG9uZUNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0UGhvbmVWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCaXJ0aGRheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250YWluZWQtYnV0dG9uLWZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRDbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhaW5lZC1idXR0b24tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWIgY29tcG9uZW50PVwic3BhblwiIHN0eWxlPXt7Y29sb3I6IGJsdWVbOTAwXSwgbWFyZ2luOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkUGhvdG9BbHRlcm5hdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlTmFtZSAhPT0gJycgPyAoPHNwYW4+e2ltYWdlTmFtZX08L3NwYW4+KSA6ICg8c3Bhbj5BZGQgYSBwcm9maWxlIHBpY3R1cmU8L3NwYW4+KX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIHsvKjxNdWlQaG9uZU51bWJlciovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgIG5hbWU9XCJwaG9uZVwiKi99XHJcbiAgICAgICAgICAgICAgICB7LyogICAgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIiovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgIGRhdGEtY3k9XCJ1c2VyLXBob25lXCIqL31cclxuICAgICAgICAgICAgICAgIHsvKiAgICBkZWZhdWx0Q291bnRyeT17XCJ1c1wifSovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgIHZhbHVlPXtwaG9uZVZhbHVlfSovfVxyXG4gICAgICAgICAgICAgICAgey8qICAgIG9uQ2hhbmdlPXsoZSk9Pm9uUGhvbmVDaGFuZ2UoZSl9Ki99XHJcbiAgICAgICAgICAgICAgICB7LyovPiovfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==