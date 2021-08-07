self["webpackHotUpdate_N_E"]("pages/newAccount",{

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


  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(1),
      _React$useState20 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState19, 2),
      chipValue = _React$useState20[0],
      setChipValue = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('default'),
      _React$useState22 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState21, 2),
      variantInfluencerValue = _React$useState22[0],
      setVariantInfluencerValue = _React$useState22[1];

  var _React$useState23 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('outlined'),
      _React$useState24 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState23, 2),
      variantCompanyValue = _React$useState24[0],
      setVariantCompanyValue = _React$useState24[1];

  var required_txt = 'This field is required';

  function handleInfluencerClick() {
    setChipValue(1);
    setVariantInfluencerValue('default');
    setVariantCompanyValue('outlined');
  }

  function handleCompanyClick() {
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
                  variant: variantInfluencerValue,
                  color: "secondary",
                  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 100
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
                  variant: variantCompanyValue,
                  color: "secondary",
                  icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 99
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
                marginTop: '5%',
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

_s(SignUp, "vgNC/snzEksa9qcY2vpev0zNsHQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3QWNjb3VudC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJSZWFjdCIsImVtYWlsVmFsdWUiLCJzZXRFbWFpbFZhbHVlIiwicGFzc1ZhbHVlIiwic2V0UGFzc1ZhbHVlIiwicGFzc1ZWYWx1ZSIsInNldFBhc3NWVmFsdWUiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3NFcnJvciIsInNldFBhc3NFcnJvciIsInBhc3NWRXJyb3IiLCJzZXRQYXNzVkVycm9yIiwiZW1haWxNZXMiLCJzZXRFbWFpbE1lcyIsInBhc3NNZXMiLCJzZXRQYXNzTWVzIiwicGFzc1ZNZXMiLCJzZXRQYXNzVk1lcyIsImNoaXBWYWx1ZSIsInNldENoaXBWYWx1ZSIsInZhcmlhbnRJbmZsdWVuY2VyVmFsdWUiLCJzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlIiwidmFyaWFudENvbXBhbnlWYWx1ZSIsInNldFZhcmlhbnRDb21wYW55VmFsdWUiLCJyZXF1aXJlZF90eHQiLCJoYW5kbGVJbmZsdWVuY2VyQ2xpY2siLCJoYW5kbGVDb21wYW55Q2xpY2siLCJlbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3NDaGFuZ2UiLCJwYXNzVkNoYW5nZSIsIlNpZ25VcENsaWNrZWQiLCJ2YWxpZCIsIlZhbGlkYXRlRW1haWwiLCJyZW1vdmVFbWFpbEVycm9yIiwicmVtb3ZlUGFzc0Vycm9yIiwicmVtb3ZlUGFzc1ZFcnJvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZW1haWwiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFT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QTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQThFSSw4REFBQywyREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLFVBQUUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNGSDs7R0FsTHVCbkMsTTs7S0FBQUEsTTs7QUFvTHhCLFNBQVNxQyxhQUFULENBQXVCYSxLQUF2QixFQUNBO0FBQ0ksU0FBTyx1RUFBdUVDLElBQXZFLENBQTRFRCxLQUE1RSxDQUFQO0FBQ0g7O01BSFFiLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3QWNjb3VudC5lNjJiYjk0MmEzZmU1ZTZmZTc0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcbmltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb24nXHJcbmltcG9ydCBCdXNpbmVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xyXG4gICAgLy8gdmFsdWVzXHJcbiAgICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzVmFsdWUsIHNldFBhc3NWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzVlZhbHVlLCBzZXRQYXNzVlZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgLy8gc2V0IGVycm9yXHJcbiAgICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwYXNzRXJyb3IsIHNldFBhc3NFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwYXNzVkVycm9yLCBzZXRQYXNzVkVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gc2V0IG1lc3NhZ2UgZXJyb3JcclxuICAgIGNvbnN0IFtlbWFpbE1lcywgc2V0RW1haWxNZXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc01lcywgc2V0UGFzc01lc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzVk1lcywgc2V0UGFzc1ZNZXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICAvLyBjaGlwc1xyXG4gICAgY29uc3QgW2NoaXBWYWx1ZSwgc2V0Q2hpcFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDEpXHJcbiAgICBjb25zdCBbdmFyaWFudEluZmx1ZW5jZXJWYWx1ZSwgc2V0VmFyaWFudEluZmx1ZW5jZXJWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnZGVmYXVsdCcpXHJcbiAgICBjb25zdCBbdmFyaWFudENvbXBhbnlWYWx1ZSwgc2V0VmFyaWFudENvbXBhbnlWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnb3V0bGluZWQnKVxyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkX3R4dCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUluZmx1ZW5jZXJDbGljaygpIHtcclxuICAgICAgICBzZXRDaGlwVmFsdWUoMSlcclxuICAgICAgICBzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlKCdkZWZhdWx0JylcclxuICAgICAgICBzZXRWYXJpYW50Q29tcGFueVZhbHVlKCdvdXRsaW5lZCcpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tcGFueUNsaWNrKCkge1xyXG4gICAgICAgIHNldENoaXBWYWx1ZSgyKVxyXG4gICAgICAgIHNldFZhcmlhbnRJbmZsdWVuY2VyVmFsdWUoJ291dGxpbmVkJylcclxuICAgICAgICBzZXRWYXJpYW50Q29tcGFueVZhbHVlKCdkZWZhdWx0JylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbWFpbENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRQYXNzVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc1ZDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFBhc3NWVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2lnblVwQ2xpY2tlZCgpIHtcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlXHJcbiAgICAgICAgaWYgKHBhc3NWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0UGFzc01lcyhyZXF1aXJlZF90eHQpXHJcbiAgICAgICAgICAgIHNldFBhc3NFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzVmFsdWUgIT09IHBhc3NWVmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0UGFzc1ZFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBzZXRQYXNzVk1lcygnVGhlIHBhc3N3b3JkcyBkb25cXCd0IG1hdGNoJylcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRQYXNzVlZhbHVlKCcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFzc1ZWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0UGFzc1ZNZXMocmVxdWlyZWRfdHh0KVxyXG4gICAgICAgICAgICBzZXRQYXNzVkVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFWYWxpZGF0ZUVtYWlsKGVtYWlsVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0RW1haWxFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsTWVzKHJlcXVpcmVkX3R4dClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsTWVzKFwiVGhlIGVtYWlsIGVudGVyZWQgaXMgbm90IGluIHRoZSBjb3JyZWN0IGZvcm1hdFwiKVxyXG4gICAgICAgICAgICAgICAgc2V0RW1haWxWYWx1ZSgnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZW5kcyB2YWx1ZXMgdG8gc2VydmVyIGZvciByZWdpc3RyYXRpb25cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtYWlsRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0RW1haWxFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRFbWFpbE1lcygnJylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQYXNzRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0UGFzc0Vycm9yKGZhbHNlKVxyXG4gICAgICAgIHNldFBhc3NNZXMoJycpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFzc1ZFcnJvcigpIHtcclxuICAgICAgICBzZXRQYXNzVkVycm9yKGZhbHNlKVxyXG4gICAgICAgIHNldFBhc3NWTWVzKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBwYWdlT3B0aW9uPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICczJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPXtcInNlY29uZGFyeVwifSBjb21wb25lbnQ9eydoMSd9IHZhcmlhbnQ9eydoMyd9IHN0eWxlPXt7bWFyZ2luOjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogJzUlJ319IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2VtYWlsTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlRW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtwYXNzRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtwYXNzTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlUGFzc0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZF92XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQgVmVyaWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkX3ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3NWVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc1ZDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cGFzc1ZFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3Bhc3NWTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlUGFzc1ZFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgdmFyaWFudD17dmFyaWFudEluZmx1ZW5jZXJWYWx1ZX0gY29sb3I9XCJzZWNvbmRhcnlcIiBpY29uPXs8UGVyc29uSWNvbiAvPn0gbGFiZWw9eydJbmZsdWVuY2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzFlbSd9fSBvbkNsaWNrPXtoYW5kbGVJbmZsdWVuY2VyQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgdmFyaWFudD17dmFyaWFudENvbXBhbnlWYWx1ZX0gY29sb3I9e1wic2Vjb25kYXJ5XCJ9IGljb249ezxCdXNpbmVzc0ljb24gLz59IGxhYmVsPXsnQ29tcGFueSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcxZW0nfX0gb25DbGljaz17aGFuZGxlQ29tcGFueUNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiAzMDAsIG1hcmdpblRvcDogJzUlJywgbWFyZ2luQm90dG9tOiAnMiUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTaWduVXBDbGlja2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0ZUVtYWlsKGVtYWlsKVxyXG57XHJcbiAgICByZXR1cm4gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8udGVzdChlbWFpbCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9