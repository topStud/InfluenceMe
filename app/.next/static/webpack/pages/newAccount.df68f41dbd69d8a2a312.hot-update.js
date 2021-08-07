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

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('outlined'),
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
    }

    if (chipValue === 0) {
      valid = false; //add warning
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
        lineNumber: 110,
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
            lineNumber: 115,
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
                  lineNumber: 121,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
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
                  lineNumber: 136,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
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
                  lineNumber: 152,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
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
                    lineNumber: 167,
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
                  lineNumber: 167,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
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
                    lineNumber: 171,
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
                  lineNumber: 171,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
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
              lineNumber: 175,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }, this);
}

_s(SignUp, "ChBIRA4WBoe/Cy/jyL8zuUd1PhQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3QWNjb3VudC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJSZWFjdCIsImVtYWlsVmFsdWUiLCJzZXRFbWFpbFZhbHVlIiwicGFzc1ZhbHVlIiwic2V0UGFzc1ZhbHVlIiwicGFzc1ZWYWx1ZSIsInNldFBhc3NWVmFsdWUiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3NFcnJvciIsInNldFBhc3NFcnJvciIsInBhc3NWRXJyb3IiLCJzZXRQYXNzVkVycm9yIiwiZW1haWxNZXMiLCJzZXRFbWFpbE1lcyIsInBhc3NNZXMiLCJzZXRQYXNzTWVzIiwicGFzc1ZNZXMiLCJzZXRQYXNzVk1lcyIsImNoaXBWYWx1ZSIsInNldENoaXBWYWx1ZSIsInZhcmlhbnRJbmZsdWVuY2VyVmFsdWUiLCJzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlIiwidmFyaWFudENvbXBhbnlWYWx1ZSIsInNldFZhcmlhbnRDb21wYW55VmFsdWUiLCJyZXF1aXJlZF90eHQiLCJoYW5kbGVJbmZsdWVuY2VyQ2xpY2siLCJoYW5kbGVDb21wYW55Q2xpY2siLCJlbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3NDaGFuZ2UiLCJwYXNzVkNoYW5nZSIsIlNpZ25VcENsaWNrZWQiLCJ2YWxpZCIsIlZhbGlkYXRlRW1haWwiLCJyZW1vdmVFbWFpbEVycm9yIiwicmVtb3ZlUGFzc0Vycm9yIiwicmVtb3ZlUGFzc1ZFcnJvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiZW1haWwiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFT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QUE7QUFBQTtBQUFBLG9CQXpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBOEVJLDhEQUFDLDJEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0ZIOztHQXRMdUJuQyxNOztLQUFBQSxNOztBQXdMeEIsU0FBU3FDLGFBQVQsQ0FBdUJhLEtBQXZCLEVBQ0E7QUFDSSxTQUFPLHVFQUF1RUMsSUFBdkUsQ0FBNEVELEtBQTVFLENBQVA7QUFDSDs7TUFIUWIsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXdBY2NvdW50LmRmNjhmNDFkYmQ2OWQ4YTJhMzEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuaW1wb3J0IFBlcnNvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbidcclxuaW1wb3J0IEJ1c2luZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnVzaW5lc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgICAvLyB2YWx1ZXNcclxuICAgIGNvbnN0IFtlbWFpbFZhbHVlLCBzZXRFbWFpbFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NWYWx1ZSwgc2V0UGFzc1ZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NWVmFsdWUsIHNldFBhc3NWVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICAvLyBzZXQgZXJyb3JcclxuICAgIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Bhc3NFcnJvciwgc2V0UGFzc0Vycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Bhc3NWRXJyb3IsIHNldFBhc3NWRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBzZXQgbWVzc2FnZSBlcnJvclxyXG4gICAgY29uc3QgW2VtYWlsTWVzLCBzZXRFbWFpbE1lc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzTWVzLCBzZXRQYXNzTWVzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NWTWVzLCBzZXRQYXNzVk1lc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIC8vIGNoaXBzXHJcbiAgICBjb25zdCBbY2hpcFZhbHVlLCBzZXRDaGlwVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFt2YXJpYW50SW5mbHVlbmNlclZhbHVlLCBzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCdvdXRsaW5lZCcpXHJcbiAgICBjb25zdCBbdmFyaWFudENvbXBhbnlWYWx1ZSwgc2V0VmFyaWFudENvbXBhbnlWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnb3V0bGluZWQnKVxyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkX3R4dCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUluZmx1ZW5jZXJDbGljaygpIHtcclxuICAgICAgICBzZXRDaGlwVmFsdWUoMSlcclxuICAgICAgICBzZXRWYXJpYW50SW5mbHVlbmNlclZhbHVlKCdkZWZhdWx0JylcclxuICAgICAgICBzZXRWYXJpYW50Q29tcGFueVZhbHVlKCdvdXRsaW5lZCcpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tcGFueUNsaWNrKCkge1xyXG4gICAgICAgIHNldENoaXBWYWx1ZSgyKVxyXG4gICAgICAgIHNldFZhcmlhbnRJbmZsdWVuY2VyVmFsdWUoJ291dGxpbmVkJylcclxuICAgICAgICBzZXRWYXJpYW50Q29tcGFueVZhbHVlKCdkZWZhdWx0JylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbWFpbENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRQYXNzVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc1ZDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFBhc3NWVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2lnblVwQ2xpY2tlZCgpIHtcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlXHJcbiAgICAgICAgaWYgKHBhc3NWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0UGFzc01lcyhyZXF1aXJlZF90eHQpXHJcbiAgICAgICAgICAgIHNldFBhc3NFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzVmFsdWUgIT09IHBhc3NWVmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0UGFzc1ZFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBzZXRQYXNzVk1lcygnVGhlIHBhc3N3b3JkcyBkb25cXCd0IG1hdGNoJylcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRQYXNzVlZhbHVlKCcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFzc1ZWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0UGFzc1ZNZXMocmVxdWlyZWRfdHh0KVxyXG4gICAgICAgICAgICBzZXRQYXNzVkVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFWYWxpZGF0ZUVtYWlsKGVtYWlsVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0RW1haWxFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsTWVzKHJlcXVpcmVkX3R4dClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsTWVzKFwiVGhlIGVtYWlsIGVudGVyZWQgaXMgbm90IGluIHRoZSBjb3JyZWN0IGZvcm1hdFwiKVxyXG4gICAgICAgICAgICAgICAgc2V0RW1haWxWYWx1ZSgnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpcFZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgLy9hZGQgd2FybmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZW5kcyB2YWx1ZXMgdG8gc2VydmVyIGZvciByZWdpc3RyYXRpb25cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtYWlsRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0RW1haWxFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRFbWFpbE1lcygnJylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQYXNzRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0UGFzc0Vycm9yKGZhbHNlKVxyXG4gICAgICAgIHNldFBhc3NNZXMoJycpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFzc1ZFcnJvcigpIHtcclxuICAgICAgICBzZXRQYXNzVkVycm9yKGZhbHNlKVxyXG4gICAgICAgIHNldFBhc3NWTWVzKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBwYWdlT3B0aW9uPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICczJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPXtcInNlY29uZGFyeVwifSBjb21wb25lbnQ9eydoMSd9IHZhcmlhbnQ9eydoMyd9IHN0eWxlPXt7bWFyZ2luOjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogJzUlJ319IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2VtYWlsTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlRW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtwYXNzRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtwYXNzTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlUGFzc0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZF92XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQgVmVyaWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkX3ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3NWVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc1ZDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cGFzc1ZFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3Bhc3NWTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlUGFzc1ZFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgdmFyaWFudD17dmFyaWFudEluZmx1ZW5jZXJWYWx1ZX0gY29sb3I9XCJzZWNvbmRhcnlcIiBpY29uPXs8UGVyc29uSWNvbiAvPn0gbGFiZWw9eydJbmZsdWVuY2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzFlbSd9fSBvbkNsaWNrPXtoYW5kbGVJbmZsdWVuY2VyQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgdmFyaWFudD17dmFyaWFudENvbXBhbnlWYWx1ZX0gY29sb3I9e1wic2Vjb25kYXJ5XCJ9IGljb249ezxCdXNpbmVzc0ljb24gLz59IGxhYmVsPXsnQ29tcGFueSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcxZW0nfX0gb25DbGljaz17aGFuZGxlQ29tcGFueUNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiAzMDAsIG1hcmdpblRvcDogJzUlJywgbWFyZ2luQm90dG9tOiAnMiUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTaWduVXBDbGlja2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0ZUVtYWlsKGVtYWlsKVxyXG57XHJcbiAgICByZXR1cm4gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8udGVzdChlbWFpbCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9