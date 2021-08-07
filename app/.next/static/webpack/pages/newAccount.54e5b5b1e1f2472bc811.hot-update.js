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
      setPassVMes = _React$useState18[1];

  var required_txt = 'This field is required';

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
        lineNumber: 89,
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
            lineNumber: 94,
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
                  lineNumber: 100,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
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
                  lineNumber: 115,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
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
                  lineNumber: 131,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
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
                    lineNumber: 146,
                    columnNumber: 86
                  }, this),
                  label: 'Influencer',
                  style: {
                    width: '100%',
                    fontSize: '1em'
                  },
                  onClick: handleClick
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
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
              lineNumber: 150,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
        item: true,
        xs: 12,
        sm: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 9
  }, this);
}

_s(SignUp, "+1lLvllLEBuqsvHYrjZlbkEyJc8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3QWNjb3VudC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJSZWFjdCIsImVtYWlsVmFsdWUiLCJzZXRFbWFpbFZhbHVlIiwicGFzc1ZhbHVlIiwic2V0UGFzc1ZhbHVlIiwicGFzc1ZWYWx1ZSIsInNldFBhc3NWVmFsdWUiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3NFcnJvciIsInNldFBhc3NFcnJvciIsInBhc3NWRXJyb3IiLCJzZXRQYXNzVkVycm9yIiwiZW1haWxNZXMiLCJzZXRFbWFpbE1lcyIsInBhc3NNZXMiLCJzZXRQYXNzTWVzIiwicGFzc1ZNZXMiLCJzZXRQYXNzVk1lcyIsInJlcXVpcmVkX3R4dCIsImVtYWlsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGFzc0NoYW5nZSIsInBhc3NWQ2hhbmdlIiwiU2lnblVwQ2xpY2tlZCIsInZhbGlkIiwiVmFsaWRhdGVFbWFpbCIsInJlbW92ZUVtYWlsRXJyb3IiLCJyZW1vdmVQYXNzRXJyb3IiLCJyZW1vdmVQYXNzVkVycm9yIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwid2lkdGgiLCJmb250U2l6ZSIsImhhbmRsZUNsaWNrIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsImVtYWlsIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUM3QjtBQUQ2Qix3QkFFT0MscURBQUEsQ0FBZSxFQUFmLENBRlA7QUFBQTtBQUFBLE1BRXRCQyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBQUEseUJBR0tGLHFEQUFBLENBQWUsRUFBZixDQUhMO0FBQUE7QUFBQSxNQUd0QkcsU0FIc0I7QUFBQSxNQUdYQyxZQUhXOztBQUFBLHlCQUlPSixxREFBQSxDQUFlLEVBQWYsQ0FKUDtBQUFBO0FBQUEsTUFJdEJLLFVBSnNCO0FBQUEsTUFJVkMsYUFKVSx3QkFLN0I7OztBQUw2Qix5QkFNT04scURBQUEsQ0FBZSxLQUFmLENBTlA7QUFBQTtBQUFBLE1BTXRCTyxVQU5zQjtBQUFBLE1BTVZDLGFBTlU7O0FBQUEseUJBT0tSLHFEQUFBLENBQWUsS0FBZixDQVBMO0FBQUE7QUFBQSxNQU90QlMsU0FQc0I7QUFBQSxNQU9YQyxZQVBXOztBQUFBLDBCQVFPVixxREFBQSxDQUFlLEtBQWYsQ0FSUDtBQUFBO0FBQUEsTUFRdEJXLFVBUnNCO0FBQUEsTUFRVkMsYUFSVSx5QkFTN0I7OztBQVQ2QiwwQkFVR1oscURBQUEsQ0FBZSxFQUFmLENBVkg7QUFBQTtBQUFBLE1BVXRCYSxRQVZzQjtBQUFBLE1BVVpDLFdBVlk7O0FBQUEsMEJBV0NkLHFEQUFBLENBQWUsRUFBZixDQVhEO0FBQUE7QUFBQSxNQVd0QmUsT0FYc0I7QUFBQSxNQVdiQyxVQVhhOztBQUFBLDBCQVlHaEIscURBQUEsQ0FBZSxFQUFmLENBWkg7QUFBQTtBQUFBLE1BWXRCaUIsUUFac0I7QUFBQSxNQVlaQyxXQVpZOztBQWM3QixNQUFNQyxZQUFZLEdBQUcsd0JBQXJCOztBQUVBLFdBQVNDLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3BCbkIsaUJBQWEsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSDs7QUFFRCxXQUFTQyxVQUFULENBQW9CSCxDQUFwQixFQUF1QjtBQUNuQmpCLGdCQUFZLENBQUNpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0g7O0FBRUQsV0FBU0UsV0FBVCxDQUFxQkosQ0FBckIsRUFBd0I7QUFDcEJmLGlCQUFhLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSDs7QUFFRCxXQUFTRyxhQUFULEdBQXlCO0FBQ3JCLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUNBLFFBQUl4QixTQUFTLEtBQUssRUFBbEIsRUFBc0I7QUFDbEJhLGdCQUFVLENBQUNHLFlBQUQsQ0FBVjtBQUNBVCxrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBaUIsV0FBSyxHQUFHLEtBQVI7QUFDSCxLQUpELE1BSU8sSUFBSXhCLFNBQVMsS0FBS0UsVUFBbEIsRUFBOEI7QUFDakNPLG1CQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FNLGlCQUFXLENBQUMsNEJBQUQsQ0FBWDtBQUNBUyxXQUFLLEdBQUcsS0FBUjtBQUNBckIsbUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDSDs7QUFDRCxRQUFJRCxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDbkJhLGlCQUFXLENBQUNDLFlBQUQsQ0FBWDtBQUNBUCxtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBZSxXQUFLLEdBQUcsS0FBUjtBQUNIOztBQUNELFFBQUksQ0FBQ0MsYUFBYSxDQUFDM0IsVUFBRCxDQUFsQixFQUFnQztBQUM1QjBCLFdBQUssR0FBRyxLQUFSO0FBQ0FuQixtQkFBYSxDQUFDLElBQUQsQ0FBYjs7QUFDQSxVQUFJUCxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDbkJhLG1CQUFXLENBQUNLLFlBQUQsQ0FBWDtBQUNILE9BRkQsTUFFTztBQUNITCxtQkFBVyxDQUFDLGdEQUFELENBQVg7QUFDQVoscUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDSDtBQUNKLEtBMUJvQixDQTJCckI7OztBQUNBLFFBQUl5QixLQUFKLEVBQVcsQ0FFVjtBQUNKOztBQUVELFdBQVNFLGdCQUFULEdBQTRCO0FBQ3hCckIsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQU0sZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNnQixlQUFULEdBQTJCO0FBQ3ZCcEIsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQU0sY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNIOztBQUVELFdBQVNlLGdCQUFULEdBQTRCO0FBQ3hCbkIsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQU0sZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNIOztBQUVELHNCQUNJLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFLENBQXBCO0FBQUEsMkJBQ0ksOERBQUMsMkRBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQUEsOEJBQ0ksOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUksOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBRTtBQUFDYyxxQkFBUyxFQUFFLElBQVo7QUFBa0JDLG1CQUFPLEVBQUUsTUFBM0I7QUFBbUNDLHlCQUFhLEVBQUUsUUFBbEQ7QUFBNERDLHNCQUFVLEVBQUU7QUFBeEUsV0FBWjtBQUFBLGtDQUNJLDhEQUFDLGlFQUFEO0FBQVksaUJBQUssRUFBRSxXQUFuQjtBQUFnQyxxQkFBUyxFQUFFLElBQTNDO0FBQWlELG1CQUFPLEVBQUUsSUFBMUQ7QUFBZ0UsaUJBQUssRUFBRTtBQUFDQyxvQkFBTSxFQUFDO0FBQVIsYUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFNLGlCQUFLLEVBQUU7QUFBQ0MsbUJBQUssRUFBRSxNQUFSO0FBQWdCTCx1QkFBUyxFQUFFO0FBQTNCLGFBQWI7QUFBK0Msc0JBQVUsTUFBekQ7QUFBQSxvQ0FDSSw4REFBQywyREFBRDtBQUFNLHVCQUFTLE1BQWY7QUFBZ0IscUJBQU8sRUFBRSxDQUF6QjtBQUFBLHNDQUNJLDhEQUFDLDJEQUFEO0FBQU0sb0JBQUksTUFBVjtBQUFXLGtCQUFFLEVBQUUsRUFBZjtBQUFBLHVDQUNJLDhEQUFDLGdFQUFEO0FBQ0ksMEJBQVEsTUFEWjtBQUVJLDJCQUFTLE1BRmI7QUFHSSxvQkFBRSxFQUFDLE9BSFA7QUFJSSx1QkFBSyxFQUFDLGVBSlY7QUFLSSxzQkFBSSxFQUFDLE9BTFQ7QUFNSSw4QkFBWSxFQUFDLE9BTmpCO0FBT0ksdUJBQUssRUFBRS9CLFVBUFg7QUFRSSwwQkFBUSxFQUFFbUIsV0FSZDtBQVNJLHVCQUFLLEVBQUViLFVBVFg7QUFVSSw0QkFBVSxFQUFFTSxRQVZoQjtBQVdJLHlCQUFPLEVBQUVnQjtBQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBZ0JJLDhEQUFDLDJEQUFEO0FBQU0sb0JBQUksTUFBVjtBQUFXLGtCQUFFLEVBQUUsRUFBZjtBQUFBLHVDQUNJLDhEQUFDLGdFQUFEO0FBQ0ksMEJBQVEsTUFEWjtBQUVJLDJCQUFTLE1BRmI7QUFHSSxzQkFBSSxFQUFDLFVBSFQ7QUFJSSx1QkFBSyxFQUFDLFVBSlY7QUFLSSxzQkFBSSxFQUFDLFVBTFQ7QUFNSSxvQkFBRSxFQUFDLFVBTlA7QUFPSSw4QkFBWSxFQUFDLGtCQVBqQjtBQVFJLHVCQUFLLEVBQUUxQixTQVJYO0FBU0ksMEJBQVEsRUFBRXFCLFVBVGQ7QUFVSSx1QkFBSyxFQUFFZixTQVZYO0FBV0ksNEJBQVUsRUFBRU0sT0FYaEI7QUFZSSx5QkFBTyxFQUFFZTtBQVpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhCSixlQWdDSSw4REFBQywyREFBRDtBQUFNLG9CQUFJLE1BQVY7QUFBVyxrQkFBRSxFQUFFLEVBQWY7QUFBQSx1Q0FDSSw4REFBQyxnRUFBRDtBQUNJLDBCQUFRLE1BRFo7QUFFSSwyQkFBUyxNQUZiO0FBR0ksc0JBQUksRUFBQyxZQUhUO0FBSUksdUJBQUssRUFBQyx1QkFKVjtBQUtJLHNCQUFJLEVBQUMsVUFMVDtBQU1JLG9CQUFFLEVBQUMsWUFOUDtBQU9JLHVCQUFLLEVBQUV6QixVQVBYO0FBUUksMEJBQVEsRUFBRW9CLFdBUmQ7QUFTSSx1QkFBSyxFQUFFZCxVQVRYO0FBVUksNEJBQVUsRUFBRU0sUUFWaEI7QUFXSSx5QkFBTyxFQUFFYztBQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhDSixlQStDSSw4REFBQywyREFBRDtBQUFNLG9CQUFJLE1BQVY7QUFBVyxrQkFBRSxFQUFFLEVBQWY7QUFBbUIsa0JBQUUsRUFBRSxDQUF2QjtBQUFBLHVDQUNJLDhEQUFDLDJEQUFEO0FBQU0seUJBQU8sRUFBQyxVQUFkO0FBQXlCLHVCQUFLLEVBQUMsV0FBL0I7QUFBMkMsc0JBQUksZUFBRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFqRDtBQUFpRSx1QkFBSyxFQUFFLFlBQXhFO0FBQ0EsdUJBQUssRUFBRTtBQUFDTSx5QkFBSyxFQUFFLE1BQVI7QUFBZ0JDLDRCQUFRLEVBQUU7QUFBMUIsbUJBRFA7QUFDeUMseUJBQU8sRUFBRUM7QUFEbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBL0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQXFESSw4REFBQyw2REFBRDtBQUNJLHFCQUFPLEVBQUMsV0FEWjtBQUVJLHVCQUFTLE1BRmI7QUFHSSxtQkFBSyxFQUFDLFNBSFY7QUFJSSxtQkFBSyxFQUFFO0FBQUNDLDBCQUFVLEVBQUUsR0FBYjtBQUFrQlIseUJBQVMsRUFBRSxLQUE3QjtBQUFvQ1MsNEJBQVksRUFBRTtBQUFsRCxlQUpYO0FBS0kscUJBQU8sRUFBRTtBQUFBLHVCQUFNZixhQUFhLEVBQW5CO0FBQUEsZUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQTBFSSw4REFBQywyREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQW1CLFVBQUUsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtGSDs7R0E5SnVCM0IsTTs7S0FBQUEsTTs7QUFnS3hCLFNBQVM2QixhQUFULENBQXVCYyxLQUF2QixFQUNBO0FBQ0ksU0FBTyx1RUFBdUVDLElBQXZFLENBQTRFRCxLQUE1RSxDQUFQO0FBQ0g7O01BSFFkLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3QWNjb3VudC41NGU1YjViMWUxZjI0NzJiYzgxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcbmltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcbiAgICAvLyB2YWx1ZXNcclxuICAgIGNvbnN0IFtlbWFpbFZhbHVlLCBzZXRFbWFpbFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NWYWx1ZSwgc2V0UGFzc1ZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NWVmFsdWUsIHNldFBhc3NWVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICAvLyBzZXQgZXJyb3JcclxuICAgIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Bhc3NFcnJvciwgc2V0UGFzc0Vycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Bhc3NWRXJyb3IsIHNldFBhc3NWRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBzZXQgbWVzc2FnZSBlcnJvclxyXG4gICAgY29uc3QgW2VtYWlsTWVzLCBzZXRFbWFpbE1lc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwYXNzTWVzLCBzZXRQYXNzTWVzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bhc3NWTWVzLCBzZXRQYXNzVk1lc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZF90eHQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcclxuXHJcbiAgICBmdW5jdGlvbiBlbWFpbENoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0RW1haWxWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXNzQ2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRQYXNzVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFzc1ZDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFBhc3NWVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2lnblVwQ2xpY2tlZCgpIHtcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlXHJcbiAgICAgICAgaWYgKHBhc3NWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0UGFzc01lcyhyZXF1aXJlZF90eHQpXHJcbiAgICAgICAgICAgIHNldFBhc3NFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzVmFsdWUgIT09IHBhc3NWVmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0UGFzc1ZFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBzZXRQYXNzVk1lcygnVGhlIHBhc3N3b3JkcyBkb25cXCd0IG1hdGNoJylcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBzZXRQYXNzVlZhbHVlKCcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFzc1ZWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0UGFzc1ZNZXMocmVxdWlyZWRfdHh0KVxyXG4gICAgICAgICAgICBzZXRQYXNzVkVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFWYWxpZGF0ZUVtYWlsKGVtYWlsVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgc2V0RW1haWxFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBpZiAoZW1haWxWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsTWVzKHJlcXVpcmVkX3R4dClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsTWVzKFwiVGhlIGVtYWlsIGVudGVyZWQgaXMgbm90IGluIHRoZSBjb3JyZWN0IGZvcm1hdFwiKVxyXG4gICAgICAgICAgICAgICAgc2V0RW1haWxWYWx1ZSgnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZW5kcyB2YWx1ZXMgdG8gc2VydmVyIGZvciByZWdpc3RyYXRpb25cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtYWlsRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0RW1haWxFcnJvcihmYWxzZSlcclxuICAgICAgICBzZXRFbWFpbE1lcygnJylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQYXNzRXJyb3IoKSB7XHJcbiAgICAgICAgc2V0UGFzc0Vycm9yKGZhbHNlKVxyXG4gICAgICAgIHNldFBhc3NNZXMoJycpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUGFzc1ZFcnJvcigpIHtcclxuICAgICAgICBzZXRQYXNzVkVycm9yKGZhbHNlKVxyXG4gICAgICAgIHNldFBhc3NWTWVzKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBwYWdlT3B0aW9uPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICczJScsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPXtcInNlY29uZGFyeVwifSBjb21wb25lbnQ9eydoMSd9IHZhcmlhbnQ9eydoMyd9IHN0eWxlPXt7bWFyZ2luOjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogJzUlJ319IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2VtYWlsTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlRW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtwYXNzRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtwYXNzTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlUGFzc0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZF92XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQgVmVyaWZpY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkX3ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3NWVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc1ZDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cGFzc1ZFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e3Bhc3NWTWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlUGFzc1ZFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaXAgdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBpY29uPXs8UGVyc29uSWNvbiAvPn0gbGFiZWw9eydJbmZsdWVuY2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzFlbSd9fSBvbkNsaWNrPXtoYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogMzAwLCBtYXJnaW5Ub3A6ICcxMCUnLCBtYXJnaW5Cb3R0b206ICcyJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFNpZ25VcENsaWNrZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlRW1haWwoZW1haWwpXHJcbntcclxuICAgIHJldHVybiAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLy50ZXN0KGVtYWlsKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=