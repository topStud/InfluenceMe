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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\topaz\\WebstormProjects\\InfluenceMe\\app\\components\\personalInfo.js",
    _s = $RefreshSig$();





function PersonalInfo() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState2 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      phoneValue = _React$useState2[0],
      setPhoneValue = _React$useState2[1];

  handleUploadClick = function handleUploadClick(event) {
    console.log();
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(_this);

    console.log(url); // Would see a path?

    _this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  function onPhoneChange(e) {
    setPhoneValue(e.target.value);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    spacing: 5,
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
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 4,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((material_ui_phone_number__WEBPACK_IMPORTED_MODULE_3___default()), {
        fullwidth: true,
        name: "phone",
        label: "Phone Number",
        "data-cy": "user-phone",
        defaultCountry: "us",
        value: phoneValue,
        onChange: onPhoneChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 8,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        accept: "image/*",
        id: "contained-button-file",
        multiple: true,
        type: "file",
        onChange: this.handleUploadClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(PersonalInfo, "rZIGgndihVCEIbeLuM/4jXvjYRU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXJzb25hbEluZm8uanMiXSwibmFtZXMiOlsiUGVyc29uYWxJbmZvIiwiUmVhY3QiLCJwaG9uZVZhbHVlIiwic2V0UGhvbmVWYWx1ZSIsImhhbmRsZVVwbG9hZENsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInVybCIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJlIiwic2V0U3RhdGUiLCJzZWxlY3RlZEZpbGUiLCJyZXN1bHQiLCJiaW5kIiwibWFpblN0YXRlIiwiaW1hZ2VVcGxvYWRlZCIsIm9uUGhvbmVDaGFuZ2UiLCJ2YWx1ZSIsInNocmluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSx3QkFDQ0MscURBQUEsQ0FBZSxFQUFmLENBREQ7QUFBQTtBQUFBLE1BQzVCQyxVQUQ0QjtBQUFBLE1BQ2hCQyxhQURnQjs7QUFHbkNDLG1CQUFpQixHQUFHLDJCQUFBQyxLQUFLLEVBQUk7QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUjtBQUNBLFFBQUlDLElBQUksR0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBWDtBQUNBLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQSxRQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csYUFBUCxDQUFxQk4sSUFBckIsQ0FBVjs7QUFFQUcsVUFBTSxDQUFDSSxTQUFQLEdBQW1CLFVBQVNDLENBQVQsRUFBWTtBQUMzQixXQUFLQyxRQUFMLENBQWM7QUFDVkMsb0JBQVksRUFBRSxDQUFDUCxNQUFNLENBQUNRLE1BQVI7QUFESixPQUFkO0FBR0gsS0FKa0IsQ0FJakJDLElBSmlCLENBSVosS0FKWSxDQUFuQjs7QUFLQWQsV0FBTyxDQUFDQyxHQUFSLENBQVlNLEdBQVosRUFYeUIsQ0FXUDs7QUFFbEIsU0FBSSxDQUFDSSxRQUFMLENBQWM7QUFDVkksZUFBUyxFQUFFLFVBREQ7QUFFVkgsa0JBQVksRUFBRWIsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FGSjtBQUdWWSxtQkFBYSxFQUFFO0FBSEwsS0FBZDtBQUtILEdBbEJEOztBQXFCQSxXQUFTQyxhQUFULENBQXVCUCxDQUF2QixFQUEwQjtBQUN0QmIsaUJBQWEsQ0FBQ2EsQ0FBQyxDQUFDUCxNQUFGLENBQVNlLEtBQVYsQ0FBYjtBQUNIOztBQUVELHNCQUNJLDhEQUFDLDJEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBLDRCQUNJLDhEQUFDLDJEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQUEsNkJBQ0ksOERBQUMsZ0VBQUQ7QUFDSSxVQUFFLEVBQUMsV0FEUDtBQUVJLGFBQUssRUFBQyxZQUZWO0FBR0ksWUFBSSxFQUFDLE1BSFQ7QUFJSSxpQkFBUztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFTSSw4REFBQywyREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUFBLDZCQUNJLDhEQUFDLGdFQUFEO0FBQ0ksVUFBRSxFQUFDLFVBRFA7QUFFSSxhQUFLLEVBQUMsV0FGVjtBQUdJLFlBQUksRUFBQyxNQUhUO0FBSUksaUJBQVM7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLGVBaUJJLDhEQUFDLDJEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBQSw2QkFDSSw4REFBQyxnRUFBRDtBQUNJLFVBQUUsRUFBQyxNQURQO0FBRUksYUFBSyxFQUFDLFVBRlY7QUFHSSxZQUFJLEVBQUMsTUFIVDtBQUlJLGlCQUFTLE1BSmI7QUFLSSx1QkFBZSxFQUFFO0FBQ2JDLGdCQUFNLEVBQUU7QUFESztBQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQTRCSSw4REFBQywyREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUFBLDZCQUNJLDhEQUFDLGlFQUFEO0FBQ0ksaUJBQVMsRUFBRSxJQURmO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxhQUFLLEVBQUMsY0FIVjtBQUlJLG1CQUFRLFlBSlo7QUFLSSxzQkFBYyxFQUFFLElBTHBCO0FBTUksYUFBSyxFQUFFdkIsVUFOWDtBQU9JLGdCQUFRLEVBQUVxQjtBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJKLGVBdUNJLDhEQUFDLDJEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQUEsNkJBQ0k7QUFDSSxjQUFNLEVBQUMsU0FEWDtBQUVJLFVBQUUsRUFBQyx1QkFGUDtBQUdJLGdCQUFRLE1BSFo7QUFJSSxZQUFJLEVBQUMsTUFKVDtBQUtJLGdCQUFRLEVBQUUsS0FBS25CO0FBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbURIOztHQS9FdUJKLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3QWNjb3VudC4wYzU1ODJkMWE0MzhiYzI3YjY2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNdWlQaG9uZU51bWJlciBmcm9tIFwibWF0ZXJpYWwtdWktcGhvbmUtbnVtYmVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxJbmZvKCkge1xyXG4gICAgY29uc3QgW3Bob25lVmFsdWUsIHNldFBob25lVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgaGFuZGxlVXBsb2FkQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHZhciB1cmwgPSByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGU6IFtyZWFkZXIucmVzdWx0XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTsgLy8gV291bGQgc2VlIGEgcGF0aD9cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1haW5TdGF0ZTogXCJ1cGxvYWRlZFwiLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICAgICAgaW1hZ2VVcGxvYWRlZDogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gb25QaG9uZUNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0UGhvbmVWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCaXJ0aGRheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxNdWlQaG9uZU51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGx3aWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWN5PVwidXNlci1waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENvdW50cnk9e1widXNcIn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25QaG9uZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFpbmVkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVcGxvYWRDbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9