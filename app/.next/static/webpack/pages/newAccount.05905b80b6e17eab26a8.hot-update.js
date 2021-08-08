self["webpackHotUpdate_N_E"]("pages/newAccount",{

/***/ "./components/newAccountSteps.js":
/*!***************************************!*\
  !*** ./components/newAccountSteps.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HorizontalLabelPositionBelowStepper; }
/* harmony export */ });
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Person */ "./node_modules/@material-ui/icons/Person.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Stepper.module.css */ "./styles/Stepper.module.css");
/* harmony import */ var _styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personalInfo */ "./components/personalInfo.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\topaz\\WebstormProjects\\InfluenceMe\\app\\components\\newAccountSteps.js",
    _s = $RefreshSig$();

















function getSteps() {
  return ['Personal information', 'instagram account', 'Bio'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      // return 'What is an ad group anyways?';
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_personalInfo__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 20
      }, this);

    case 1:
      return 'What is an ad group anyways?';

    case 2:
      return 'This is the bit I really care about!';

    default:
      return 'Unknown stepIndex';
  }
}

function ColorLibStepIcon(props) {
  var _clsx;

  var active = props.active,
      completed = props.completed;
  var icons = {
    1: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, this),
    2: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }, this),
    3: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, this)
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)((_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default().root_icon), (_clsx = {}, (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_clsx, (_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default().active_icon), active), (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_clsx, (_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default().completed_icon), completed), _clsx)),
    children: icons[String(props.icon)]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

_c = ColorLibStepIcon;
function HorizontalLabelPositionBelowStepper(props) {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0),
      _React$useState2 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = getSteps();

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBackStandard = function handleBackStandard() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleBackToRegister = function handleBackToRegister() {
    props.register(false);
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    style: {
      width: '100%'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_10__.default, {
      activeStep: activeStep,
      alternativeLabel: true,
      connector: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.StepConnector, {
        style: {
          marginTop: '10px'
        },
        classes: {
          completed: (_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default().completed_conn),
          active: (_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default().active_conn),
          line: (_styles_Stepper_module_css__WEBPACK_IMPORTED_MODULE_9___default().line_conn)
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 74
      }, this),
      children: steps.map(function (label) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__.default, {
            StepIconComponent: ColorLibStepIcon,
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this)
        }, label, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: activeStep === steps.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__.default, {
          style: {
            marginTop: '4%',
            marginBottom: '4%'
          },
          children: "All steps completed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__.default, {
          onClick: handleReset,
          children: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, this) // here we need to go to user page
      :
      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: getStepContent(activeStep)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_16__.default, {
          style: {
            marginTop: '30px',
            marginBottom: '30px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__.default, {
            onClick: activeStep === 0 ? handleBackToRegister : handleBackStandard,
            style: {
              marginRight: '4%'
            },
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__.default, {
            variant: "contained",
            color: "primary",
            onClick: handleNext,
            children: activeStep === steps.length - 1 ? 'Finish' : 'Next'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }, this);
}

_s(HorizontalLabelPositionBelowStepper, "cJXWosTT0XUh3gGn3cCcv/Y+Hws=");

_c2 = HorizontalLabelPositionBelowStepper;

var _c, _c2;

$RefreshReg$(_c, "ColorLibStepIcon");
$RefreshReg$(_c2, "HorizontalLabelPositionBelowStepper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdBY2NvdW50U3RlcHMuanMiXSwibmFtZXMiOlsiZ2V0U3RlcHMiLCJnZXRTdGVwQ29udGVudCIsInN0ZXBJbmRleCIsIkNvbG9yTGliU3RlcEljb24iLCJwcm9wcyIsImFjdGl2ZSIsImNvbXBsZXRlZCIsImljb25zIiwiY2xzeCIsImNsYXNzZXMiLCJTdHJpbmciLCJpY29uIiwiSG9yaXpvbnRhbExhYmVsUG9zaXRpb25CZWxvd1N0ZXBwZXIiLCJSZWFjdCIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwic3RlcHMiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrU3RhbmRhcmQiLCJoYW5kbGVCYWNrVG9SZWdpc3RlciIsInJlZ2lzdGVyIiwiaGFuZGxlUmVzZXQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImxpbmUiLCJsaW5lX2Nvbm4iLCJtYXAiLCJsYWJlbCIsImxlbmd0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2hCLFNBQU8sQ0FBQyxzQkFBRCxFQUF5QixtQkFBekIsRUFBOEMsS0FBOUMsQ0FBUDtBQUNIOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DO0FBQy9CLFVBQVFBLFNBQVI7QUFDSSxTQUFLLENBQUw7QUFDSTtBQUNBLDBCQUFPLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDs7QUFDSixTQUFLLENBQUw7QUFDSSxhQUFPLDhCQUFQOztBQUNKLFNBQUssQ0FBTDtBQUNJLGFBQU8sc0NBQVA7O0FBQ0o7QUFDSSxhQUFPLG1CQUFQ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QTtBQUFBLGdCQURKLGVBRUksOERBQUMsOERBQUQ7QUFBUSxpQkFBTyxFQUFFUixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxDQUtHO0FBTEg7QUFBQTtBQU9HO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBTXJCLGNBQWMsQ0FBQ2EsVUFBRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsK0RBQUQ7QUFBUyxlQUFLLEVBQUU7QUFBQ1UscUJBQVMsRUFBRSxNQUFaO0FBQW9CTSx3QkFBWSxFQUFFO0FBQWxDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLGtDQUNJLDhEQUFDLDhEQUFEO0FBQ0ksbUJBQU8sRUFBRWhCLFVBQVUsS0FBSyxDQUFmLEdBQW1CTSxvQkFBbkIsR0FBMENELGtCQUR2RDtBQUVJLGlCQUFLLEVBQUU7QUFBQ1kseUJBQVcsRUFBRTtBQUFkLGFBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFPSSw4REFBQyw4REFBRDtBQUFRLG1CQUFPLEVBQUMsV0FBaEI7QUFBNEIsaUJBQUssRUFBQyxTQUFsQztBQUE0QyxtQkFBTyxFQUFFZCxVQUFyRDtBQUFBLHNCQUNLSCxVQUFVLEtBQUtFLEtBQUssQ0FBQ2EsTUFBTixHQUFlLENBQTlCLEdBQWtDLFFBQWxDLEdBQTZDO0FBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0F6RHVCakIsbUM7O01BQUFBLG1DIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0FjY291bnQuMDU5MDViODBiNmUxN2VhYjI2YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFBlcnNvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbic7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xyXG5pbXBvcnQgSW5mb0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luZm8nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9zdHlsZXMvU3RlcHBlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9TdGVwcGVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7U3RlcENvbm5lY3Rvcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBQZXJzb25hbEluZm8gZnJvbSBcIi4vcGVyc29uYWxJbmZvXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG4gICAgcmV0dXJuIFsnUGVyc29uYWwgaW5mb3JtYXRpb24nLCAnaW5zdGFncmFtIGFjY291bnQnLCAnQmlvJ107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXBJbmRleCkge1xyXG4gICAgc3dpdGNoIChzdGVwSW5kZXgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIC8vIHJldHVybiAnV2hhdCBpcyBhbiBhZCBncm91cCBhbnl3YXlzPyc7XHJcbiAgICAgICAgICAgIHJldHVybiA8UGVyc29uYWxJbmZvLz5cclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiAnV2hhdCBpcyBhbiBhZCBncm91cCBhbnl3YXlzPyc7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICByZXR1cm4gJ1RoaXMgaXMgdGhlIGJpdCBJIHJlYWxseSBjYXJlIGFib3V0ISc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdVbmtub3duIHN0ZXBJbmRleCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbG9yTGliU3RlcEljb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlLCBjb21wbGV0ZWQgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgIDE6IDxQZXJzb25JY29uIC8+LFxyXG4gICAgICAgIDI6IDxJbnN0YWdyYW1JY29uIC8+LFxyXG4gICAgICAgIDM6IDxJbmZvSWNvbiAvPixcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3RfaWNvbiwge1xyXG4gICAgICAgICAgICAgICAgW2NsYXNzZXMuYWN0aXZlX2ljb25dOiBhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICBbY2xhc3Nlcy5jb21wbGV0ZWRfaWNvbl06IGNvbXBsZXRlZCxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7aWNvbnNbU3RyaW5nKHByb3BzLmljb24pXX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvcml6b250YWxMYWJlbFBvc2l0aW9uQmVsb3dTdGVwcGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVCYWNrU3RhbmRhcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2tUb1JlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnJlZ2lzdGVyKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlU3RlcCgwKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfSBhbHRlcm5hdGl2ZUxhYmVsIGNvbm5lY3Rvcj17PFN0ZXBDb25uZWN0b3Igc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3tjb21wbGV0ZWQ6IGNsYXNzZXMuY29tcGxldGVkX2Nvbm4sIGFjdGl2ZTogY2xhc3Nlcy5hY3RpdmVfY29ubiwgbGluZTogY2xhc3Nlcy5saW5lX2Nvbm59fS8+fT5cclxuICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0NvbG9yTGliU3RlcEljb259PntsYWJlbH08L1N0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e21hcmdpblRvcDogJzQlJywgbWFyZ2luQm90dG9tOiAnNCUnfX0+QWxsIHN0ZXBzIGNvbXBsZXRlZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+UmVzZXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyBoZXJlIHdlIG5lZWQgdG8gZ28gdG8gdXNlciBwYWdlXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2dldFN0ZXBDb250ZW50KGFjdGl2ZVN0ZXApfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17e21hcmdpblRvcDogJzMwcHgnLCBtYXJnaW5Cb3R0b206ICczMHB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthY3RpdmVTdGVwID09PSAwID8gaGFuZGxlQmFja1RvUmVnaXN0ZXIgOiBoYW5kbGVCYWNrU3RhbmRhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzQlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVOZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/ICdGaW5pc2gnIDogJ05leHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=