self["webpackHotUpdate_N_E"]("pages/newAccount",{

/***/ "./node_modules/@material-ui/icons/Business.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Business.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
}), 'Business');

exports.default = _default;

/***/ }),

/***/ "./pages/newAccount.js":
/*!*****************************!*\
  !*** ./pages/newAccount.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Business */ "./node_modules/@material-ui/icons/Business.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\topaz\\WebstormProjects\\InfluenceMe\\app\\pages\\newAccount.js",
    _s = $RefreshSig$();










function SignUp() {
  _s();

  // values
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState2 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      emailValue = _React$useState2[0],
      setEmailValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState4 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      passValue = _React$useState4[0],
      setPassValue = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState6 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      passVValue = _React$useState6[0],
      setPassVValue = _React$useState6[1]; // set error


  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState8 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState7, 2),
      emailError = _React$useState8[0],
      setEmailError = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState10 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState9, 2),
      passError = _React$useState10[0],
      setPassError = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState12 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState11, 2),
      passVError = _React$useState12[0],
      setPassVError = _React$useState12[1]; // set message error


  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState14 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState13, 2),
      emailMes = _React$useState14[0],
      setEmailMes = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState16 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState15, 2),
      passMes = _React$useState16[0],
      setPassMes = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState18 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState17, 2),
      passVMes = _React$useState18[0],
      setPassVMes = _React$useState18[1]; // chips


  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0),
      _React$useState20 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState19, 2),
      chipValue = _React$useState20[0],
      setChipValue = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('outlined'),
      _React$useState22 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState21, 2),
      variantInfluencerValue = _React$useState22[0],
      setVariantInfluencerValue = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('outlined'),
      _React$useState24 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState23, 2),
      variantCompanyValue = _React$useState24[0],
      setVariantCompanyValue = _React$useState24[1];

  var required_txt = 'This field is required';

  function handleInfluencerClick(e) {
    setChipValue(1);
    setVariantInfluencerValue('default');
    setVariantCompanyValue('outlined');
  }

  function handleCompanyClick(e) {
    setChipValue(2);
    setVariantInfluencerValue('outlined');
    setVariantCompanyValue('default');
  }

  function emailChange(e) {
    setEmailValue(e.target.value);
  }

  function passChange(e) {
    setPassValue(e.target.value);
  }

  function passVChange(e) {
    setPassVValue(e.target.value);
  }

  function SignUpClicked() {
    var valid = true;

    if (passValue === '') {
      setPassMes(required_txt);
      setPassError(true);
      valid = false;
    } else if (passValue !== passVValue) {
      setPassVError(true);
      setPassVMes('The passwords don\'t match');
      valid = false;
      setPassVValue('');
    }

    if (passVValue === '') {
      setPassVMes(required_txt);
      setPassVError(true);
      valid = false;
    }

    if (!ValidateEmail(emailValue)) {
      valid = false;
      setEmailError(true);

      if (emailValue === '') {
        setEmailMes(required_txt);
      } else {
        setEmailMes("The email entered is not in the correct format");
        setEmailValue('');
      }
    } // sends values to server for registration


    if (valid) {}
  }

  function removeEmailError() {
    setEmailError(false);
    setEmailMes('');
  }

  function removePassError() {
    setPassError(false);
    setPassMes('');
  }

  function removePassVError() {
    setPassVError(false);
    setPassVMes('');
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    pageOption: 1,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      container: true,
      spacing: 0,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 8,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginTop: '3%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
            color: "secondary",
            component: 'h1',
            variant: 'h3',
            style: {
              margin: 0
            },
            children: "Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            style: {
              width: '100%',
              marginTop: '5%'
            },
            noValidate: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {
                  required: true,
                  fullWidth: true,
                  id: "email",
                  label: "Email Address",
                  name: "email",
                  autoComplete: "email",
                  value: emailValue,
                  onChange: emailChange,
                  error: emailError,
                  helperText: emailMes,
                  onClick: removeEmailError
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {
                  required: true,
                  fullWidth: true,
                  name: "password",
                  label: "Password",
                  type: "password",
                  id: "password",
                  autoComplete: "current-password",
                  value: passValue,
                  onChange: passChange,
                  error: passError,
                  helperText: passMes,
                  onClick: removePassError
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__.default, {
                  required: true,
                  fullWidth: true,
                  name: "password_v",
                  label: "Password Verification",
                  type: "password",
                  id: "password_v",
                  value: passVValue,
                  onChange: passVChange,
                  error: passVError,
                  helperText: passVMes,
                  onClick: removePassVError
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
                item: true,
                xs: 12,
                sm: 6,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__.default, {
                  variant: "outlined",
                  color: "secondary",
                  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 86
                  }, this),
                  label: 'Influencer',
                  style: {
                    width: '100%',
                    fontSize: '1em'
                  },
                  onClick: handleInfluencerClick
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
                item: true,
                xs: 12,
                sm: 6,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__.default, {
                  variant: "outlined",
                  color: "secondary",
                  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 86
                  }, this),
                  label: 'Company',
                  style: {
                    width: '100%',
                    fontSize: '1em'
                  },
                  onClick: handleCompanyClick
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
              variant: "contained",
              fullWidth: true,
              color: "primary",
              style: {
                fontWeight: 300,
                marginTop: '10%',
                marginBottom: '2%'
              },
              onClick: function onClick() {
                return SignUpClicked();
              },
              children: "Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 9
  }, this);
}

_s(SignUp, "eot8+zEzYLUI/5oxgsanPtRjYDw=");

_c = SignUp;

function ValidateEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

_c2 = ValidateEmail;

var _c, _c2;

$RefreshReg$(_c, "SignUp");
$RefreshReg$(_c2, "ValidateEmail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9CdXNpbmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3QWNjb3VudC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJSZWFjdCIsImVtYWlsVmFsdWUiLCJzZXRFbWFpbFZhbHVlIiwicGFzc1ZhbHVlIiwic2V0UGFzc1ZhbHVlIiwicGFzc1ZWYWx1ZSIsInNldFBhc3NWVmFsdWUiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3NFcnJvciIsInNldFBhc3NFcnJvciIsInBhc3NWRXJyb3IiLCJzZXRQYXNzVkVycm9yIiwiZW1haWxNZXMiLCJzZXRFbWFpbE1lcyIsInBhc3NNZXMiLCJzZXRQYXNzTWVzIiwicGFzc1ZNZXMiLCJzZXRQYXNzVk1lcyIsImNoaXBWYWx1ZSIsInNldENoaXBWYWx1ZSIsInZhcmlhbnRJbmZsdWVuY2VyVmFsdWUiLCJzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlIiwidmFyaWFudENvbXBhbnlWYWx1ZSIsInNldFZhcmlhbnRDb21wYW55VmFsdWUiLCJyZXF1aXJlZF90eHQiLCJoYW5kbGVJbmZsdWVuY2VyQ2xpY2siLCJlIiwiaGFuZGxlQ29tcGFueUNsaWNrIiwiZW1haWxDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3NDaGFuZ2UiLCJwYXNzVkNoYW5nZSIsIlNpZ25VcENsaWNrZWQiLCJ2YWxpZCIsIlZhbGlkYXRlRW1haWwiLCJyZW1vdmVFbWFpbEVycm9yIiwicmVtb3ZlUGFzc0Vycm9yIiwicmVtb3ZlUGFzc1ZFcnJvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZW1haWwiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTs7QUFFYiw2QkFB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SSw4REFBQyw4REFBRDtBQUNJLHFCQUFPLEVBQUMsV0FEWjtBQUVJLHVCQUFTLE1BRmI7QUFHSSxtQkFBSyxFQUFDLFNBSFY7QUFJSSxtQkFBSyxFQUFFO0FBQUNtQiwwQkFBVSxFQUFFLEdBQWI7QUFBa0JQLHlCQUFTLEVBQUUsS0FBN0I7QUFBb0NRLDRCQUFZLEVBQUU7QUFBbEQsZUFKWDtBQUtJLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWQsYUFBYSxFQUFuQjtBQUFBLGVBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUE4RUksOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzRkg7O0dBbEx1Qm5DLE07O0tBQUFBLE07O0FBb0x4QixTQUFTcUMsYUFBVCxDQUF1QmEsS0FBdkIsRUFDQTtBQUNJLFNBQU8sdUVBQXVFQyxJQUF2RSxDQUE0RUQsS0FBNUUsQ0FBUDtBQUNIOztNQUhRYixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0FjY291bnQuNWE4NDNmOTkyYzAyODA1YjMwOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiA3VjNIMnYxOGgyMFY3SDEyek02IDE5SDR2LTJoMnYyem0wLTRINHYtMmgydjJ6bTAtNEg0VjloMnYyem0wLTRINFY1aDJ2MnptNCAxMkg4di0yaDJ2MnptMC00SDh2LTJoMnYyem0wLTRIOFY5aDJ2MnptMC00SDhWNWgydjJ6bTEwIDEyaC04di0yaDJ2LTJoLTJ2LTJoMnYtMmgtMlY5aDh2MTB6bS0yLThoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yelwiXG59KSwgJ0J1c2luZXNzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uJ1xyXG5pbXBvcnQgQnVzaW5lc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CdXNpbmVzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuICAgIC8vIHZhbHVlc1xyXG4gICAgY29uc3QgW2VtYWlsVmFsdWUsIHNldEVtYWlsVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc1ZhbHVlLCBzZXRQYXNzVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc1ZWYWx1ZSwgc2V0UGFzc1ZWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIC8vIHNldCBlcnJvclxyXG4gICAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcGFzc0Vycm9yLCBzZXRQYXNzRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcGFzc1ZFcnJvciwgc2V0UGFzc1ZFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIHNldCBtZXNzYWdlIGVycm9yXHJcbiAgICBjb25zdCBbZW1haWxNZXMsIHNldEVtYWlsTWVzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NNZXMsIHNldFBhc3NNZXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc1ZNZXMsIHNldFBhc3NWTWVzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgLy8gY2hpcHNcclxuICAgIGNvbnN0IFtjaGlwVmFsdWUsIHNldENoaXBWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3ZhcmlhbnRJbmZsdWVuY2VyVmFsdWUsIHNldFZhcmlhbnRJbmZsdWVuY2VyVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJ291dGxpbmVkJylcclxuICAgIGNvbnN0IFt2YXJpYW50Q29tcGFueVZhbHVlLCBzZXRWYXJpYW50Q29tcGFueVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCdvdXRsaW5lZCcpXHJcblxyXG4gICAgY29uc3QgcmVxdWlyZWRfdHh0ID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5mbHVlbmNlckNsaWNrKGUpIHtcclxuICAgICAgICBzZXRDaGlwVmFsdWUoMSlcclxuICAgICAgICBzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlKCdkZWZhdWx0JylcclxuICAgICAgICBzZXRWYXJpYW50Q29tcGFueVZhbHVlKCdvdXRsaW5lZCcpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tcGFueUNsaWNrKGUpIHtcclxuICAgICAgICBzZXRDaGlwVmFsdWUoMilcclxuICAgICAgICBzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlKCdvdXRsaW5lZCcpXHJcbiAgICAgICAgc2V0VmFyaWFudENvbXBhbnlWYWx1ZSgnZGVmYXVsdCcpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1haWxDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldEVtYWlsVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0NoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0UGFzc1ZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NWQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRQYXNzVlZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNpZ25VcENsaWNrZWQoKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZVxyXG4gICAgICAgIGlmIChwYXNzVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3NNZXMocmVxdWlyZWRfdHh0KVxyXG4gICAgICAgICAgICBzZXRQYXNzRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgICAgIH0gZWxzZSBpZiAocGFzc1ZhbHVlICE9PSBwYXNzVlZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3NWRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgc2V0UGFzc1ZNZXMoJ1RoZSBwYXNzd29yZHMgZG9uXFwndCBtYXRjaCcpXHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0UGFzc1ZWYWx1ZSgnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3NWVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3NWTWVzKHJlcXVpcmVkX3R4dClcclxuICAgICAgICAgICAgc2V0UGFzc1ZFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVmFsaWRhdGVFbWFpbChlbWFpbFZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNldEVtYWlsRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgaWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lcyhyZXF1aXJlZF90eHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lcyhcIlRoZSBlbWFpbCBlbnRlcmVkIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBmb3JtYXRcIilcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsVmFsdWUoJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VuZHMgdmFsdWVzIHRvIHNlcnZlciBmb3IgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbWFpbEVycm9yKCkge1xyXG4gICAgICAgIHNldEVtYWlsRXJyb3IoZmFsc2UpXHJcbiAgICAgICAgc2V0RW1haWxNZXMoJycpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFzc0Vycm9yKCkge1xyXG4gICAgICAgIHNldFBhc3NFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRQYXNzTWVzKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVBhc3NWRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0UGFzc1ZFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRQYXNzVk1lcygnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgcGFnZU9wdGlvbj17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMyUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj17XCJzZWNvbmRhcnlcIn0gY29tcG9uZW50PXsnaDEnfSB2YXJpYW50PXsnaDMnfSBzdHlsZT17e21hcmdpbjowfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICc1JSd9fSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2VtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlbWFpbE1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUVtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3NDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cGFzc0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17cGFzc01lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZVBhc3NFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkIFZlcmlmaWNhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZF92XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzVlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3NWQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Bhc3NWRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtwYXNzVk1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZVBhc3NWRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgaWNvbj17PFBlcnNvbkljb24gLz59IGxhYmVsPXsnSW5mbHVlbmNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcxZW0nfX0gb25DbGljaz17aGFuZGxlSW5mbHVlbmNlckNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgaWNvbj17PEJ1c2luZXNzSWNvbiAvPn0gbGFiZWw9eydDb21wYW55J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzFlbSd9fSBvbkNsaWNrPXtoYW5kbGVDb21wYW55Q2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IDMwMCwgbWFyZ2luVG9wOiAnMTAlJywgbWFyZ2luQm90dG9tOiAnMiUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTaWduVXBDbGlja2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0ZUVtYWlsKGVtYWlsKVxyXG57XHJcbiAgICByZXR1cm4gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8udGVzdChlbWFpbCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9