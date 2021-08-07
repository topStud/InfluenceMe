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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
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
      variantValue = _React$useState22[0],
      setVariantValue = _React$useState22[1];

  var required_txt = 'This field is required';

  function handleInfluencerClick(e) {
    setChipValue(1);
  }

  function handleCompanyClick(e) {
    setChipValue(2);
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
        lineNumber: 100,
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
            lineNumber: 105,
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
                  lineNumber: 111,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
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
                  lineNumber: 126,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
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
                  lineNumber: 142,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
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
                    lineNumber: 157,
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
                  lineNumber: 157,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
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
              lineNumber: 161,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

_s(SignUp, "EEvLsB9dlrRecKo3MP8mUWLrQJE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3QWNjb3VudC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJSZWFjdCIsImVtYWlsVmFsdWUiLCJzZXRFbWFpbFZhbHVlIiwicGFzc1ZhbHVlIiwic2V0UGFzc1ZhbHVlIiwicGFzc1ZWYWx1ZSIsInNldFBhc3NWVmFsdWUiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3NFcnJvciIsInNldFBhc3NFcnJvciIsInBhc3NWRXJyb3IiLCJzZXRQYXNzVkVycm9yIiwiZW1haWxNZXMiLCJzZXRFbWFpbE1lcyIsInBhc3NNZXMiLCJzZXRQYXNzTWVzIiwicGFzc1ZNZXMiLCJzZXRQYXNzVk1lcyIsImNoaXBWYWx1ZSIsInNldENoaXBWYWx1ZSIsInZhcmlhbnRWYWx1ZSIsInNldFZhcmlhbnRWYWx1ZSIsInJlcXVpcmVkX3R4dCIsImhhbmRsZUluZmx1ZW5jZXJDbGljayIsImUiLCJoYW5kbGVDb21wYW55Q2xpY2siLCJlbWFpbENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicGFzc0NoYW5nZSIsInBhc3NWQ2hhbmdlIiwiU2lnblVwQ2xpY2tlZCIsInZhbGlkIiwiVmFsaWRhdGVFbWFpbCIsInJlbW92ZUVtYWlsRXJyb3IiLCJyZW1vdmVQYXNzRXJyb3IiLCJyZW1vdmVQYXNzVkVycm9yIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwid2lkdGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJlbWFpbCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0I7QUFENkIsd0JBRU9DLHFEQUFBLENBQWUsRUFBZixDQUZQO0FBQUE7QUFBQSxNQUV0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WjtBQUVJLHVCQUFTLE1BRmI7QUFHSSxtQkFBSyxFQUFDLFNBSFY7QUFJSSxtQkFBSyxFQUFFO0FBQUNxQiwwQkFBVSxFQUFFLEdBQWI7QUFBa0JQLHlCQUFTLEVBQUUsS0FBN0I7QUFBb0NRLDRCQUFZLEVBQUU7QUFBbEQsZUFKWDtBQUtJLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWQsYUFBYSxFQUFuQjtBQUFBLGVBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUEwRUksOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrRkg7O0dBekt1QmpDLE07O0tBQUFBLE07O0FBMkt4QixTQUFTbUMsYUFBVCxDQUF1QmEsS0FBdkIsRUFDQTtBQUNJLFNBQU8sdUVBQXVFQyxJQUF2RSxDQUE0RUQsS0FBNUUsQ0FBUDtBQUNIOztNQUhRYixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0FjY291bnQuYjcyYWM0Y2VhODBkNGVlYTljN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xyXG4gICAgLy8gdmFsdWVzXHJcbiAgICBjb25zdCBbZW1haWxWYWx1ZSwgc2V0RW1haWxWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzVmFsdWUsIHNldFBhc3NWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzVlZhbHVlLCBzZXRQYXNzVlZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgLy8gc2V0IGVycm9yXHJcbiAgICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwYXNzRXJyb3IsIHNldFBhc3NFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwYXNzVkVycm9yLCBzZXRQYXNzVkVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gc2V0IG1lc3NhZ2UgZXJyb3JcclxuICAgIGNvbnN0IFtlbWFpbE1lcywgc2V0RW1haWxNZXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc01lcywgc2V0UGFzc01lc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzVk1lcywgc2V0UGFzc1ZNZXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICAvLyBjaGlwc1xyXG4gICAgY29uc3QgW2NoaXBWYWx1ZSwgc2V0Q2hpcFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbdmFyaWFudFZhbHVlLCBzZXRWYXJpYW50VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJ291dGxpbmVkJylcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZF90eHQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbmZsdWVuY2VyQ2xpY2soZSkge1xyXG4gICAgICAgIHNldENoaXBWYWx1ZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbXBhbnlDbGljayhlKSB7XHJcbiAgICAgICAgc2V0Q2hpcFZhbHVlKDIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW1haWxDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldEVtYWlsVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc0NoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0UGFzc1ZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3NWQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRQYXNzVlZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNpZ25VcENsaWNrZWQoKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZVxyXG4gICAgICAgIGlmIChwYXNzVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3NNZXMocmVxdWlyZWRfdHh0KVxyXG4gICAgICAgICAgICBzZXRQYXNzRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgICAgIH0gZWxzZSBpZiAocGFzc1ZhbHVlICE9PSBwYXNzVlZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3NWRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgc2V0UGFzc1ZNZXMoJ1RoZSBwYXNzd29yZHMgZG9uXFwndCBtYXRjaCcpXHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0UGFzc1ZWYWx1ZSgnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3NWVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFBhc3NWTWVzKHJlcXVpcmVkX3R4dClcclxuICAgICAgICAgICAgc2V0UGFzc1ZFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVmFsaWRhdGVFbWFpbChlbWFpbFZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHNldEVtYWlsRXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgaWYgKGVtYWlsVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lcyhyZXF1aXJlZF90eHQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFbWFpbE1lcyhcIlRoZSBlbWFpbCBlbnRlcmVkIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBmb3JtYXRcIilcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsVmFsdWUoJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VuZHMgdmFsdWVzIHRvIHNlcnZlciBmb3IgcmVnaXN0cmF0aW9uXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbWFpbEVycm9yKCkge1xyXG4gICAgICAgIHNldEVtYWlsRXJyb3IoZmFsc2UpXHJcbiAgICAgICAgc2V0RW1haWxNZXMoJycpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFzc0Vycm9yKCkge1xyXG4gICAgICAgIHNldFBhc3NFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRQYXNzTWVzKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVBhc3NWRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0UGFzc1ZFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRQYXNzVk1lcygnJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgcGFnZU9wdGlvbj17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMyUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj17XCJzZWNvbmRhcnlcIn0gY29tcG9uZW50PXsnaDEnfSB2YXJpYW50PXsnaDMnfSBzdHlsZT17e21hcmdpbjowfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICc1JSd9fSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2VtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlbWFpbE1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUVtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3NDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cGFzc0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17cGFzc01lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZVBhc3NFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkIFZlcmlmaWNhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZF92XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzVlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3NWQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Bhc3NWRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtwYXNzVk1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZVBhc3NWRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgaWNvbj17PFBlcnNvbkljb24gLz59IGxhYmVsPXsnSW5mbHVlbmNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZm9udFNpemU6ICcxZW0nfX0gb25DbGljaz17aGFuZGxlSW5mbHVlbmNlckNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiAzMDAsIG1hcmdpblRvcDogJzEwJScsIG1hcmdpbkJvdHRvbTogJzIlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gU2lnblVwQ2xpY2tlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGVFbWFpbChlbWFpbClcclxue1xyXG4gICAgcmV0dXJuIC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLnRlc3QoZW1haWwpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==