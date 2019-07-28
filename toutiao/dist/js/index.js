/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tpl */ \"./src/components/header/index.tpl\");\n/* harmony import */ var _index_tpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_tpl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ \"./src/components/header/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/tools */ \"./src/utils/tools.js\");\n/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_tools__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return {\n    name: 'header',\n    tpl: function tpl(options) {\n      return _index_tpl__WEBPACK_IMPORTED_MODULE_0___default()().replace(_utils_tools__WEBPACK_IMPORTED_MODULE_2___default.a.tplReplace(), function (node, key) {\n        return {\n          title: options.title,\n          showLeftIcon: !options.showLeftIcon && 'none',\n          showRightIcon: !options.showRightIcon && 'none'\n        }[key];\n      });\n    }\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanM/OGExYSJdLCJuYW1lcyI6WyJuYW1lIiwidHBsIiwib3B0aW9ucyIsInJlcGxhY2UiLCJ0b29scyIsInRwbFJlcGxhY2UiLCJub2RlIiwia2V5IiwidGl0bGUiLCJzaG93TGVmdEljb24iLCJzaG93UmlnaHRJY29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNlLDJFQUFJO0FBQ2YsU0FBTTtBQUNGQSxRQUFJLEVBQUMsUUFESDtBQUVGQyxPQUZFLGVBRUVDLE9BRkYsRUFFVTtBQUNSLGFBQU9ELGlEQUFHLEdBQUdFLE9BQU4sQ0FBY0MsbURBQUssQ0FBQ0MsVUFBTixFQUFkLEVBQWlDLFVBQUNDLElBQUQsRUFBTUMsR0FBTixFQUFZO0FBQ2hELGVBQU07QUFDRkMsZUFBSyxFQUFDTixPQUFPLENBQUNNLEtBRFo7QUFFRkMsc0JBQVksRUFBQyxDQUFDUCxPQUFPLENBQUNPLFlBQVQsSUFBdUIsTUFGbEM7QUFHRkMsdUJBQWEsRUFBQyxDQUFDUixPQUFPLENBQUNRLGFBQVQsSUFBeUI7QUFIckMsVUFJTEgsR0FKSyxDQUFOO0FBS0gsT0FOTSxDQUFQO0FBT0g7QUFWQyxHQUFOO0FBWUgsQ0FiRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cGwgZnJvbSAnLi9pbmRleC50cGwnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4uLy4uL3V0aWxzL3Rvb2xzJztcbmV4cG9ydCBkZWZhdWx0ICgpPT57XG4gICAgcmV0dXJue1xuICAgICAgICBuYW1lOidoZWFkZXInLFxuICAgICAgICB0cGwob3B0aW9ucyl7XG4gICAgICAgICAgICByZXR1cm4gdHBsKCkucmVwbGFjZSh0b29scy50cGxSZXBsYWNlKCksKG5vZGUsa2V5KT0+e1xuICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6b3B0aW9ucy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xlZnRJY29uOiFvcHRpb25zLnNob3dMZWZ0SWNvbiYmJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBzaG93UmlnaHRJY29uOiFvcHRpb25zLnNob3dSaWdodEljb24mJiAnbm9uZSdcbiAgICAgICAgICAgICAgIH1ba2V5XTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/index.js\n");

/***/ }),

/***/ "./src/components/header/index.scss":
/*!******************************************!*\
  !*** ./src/components/header/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguc2Nzcz8xOTM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/index.scss\n");

/***/ }),

/***/ "./src/components/header/index.tpl":
/*!*****************************************!*\
  !*** ./src/components/header/index.tpl ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function (obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<header class=\"header\">\\n\t<div class=\"icon left\">\\n\t\t<a href=\"javascript:history.back(-1)\">\\n\t\t\t<img src=\"' +\n((__t = (__webpack_require__(/*! ../../images/backward.png */ \"./src/images/backward.png\"))) == null ? '' : __t) +\n'\" class=\"img-icon\" style=\"display: {{showLeftIcon}}\" />\\n\t\t</a>\\n\t</div>\\n\t<div class=\"title\">\\n\t\t<h1>{{title}}</h1>\\n\t</div>\\n\t<div class=\"icon right\">\\n\t\t<a href=\"collections.html\">\\n\t\t\t<img src=\"' +\n((__t = (__webpack_require__(/*! ../../images/follow.png */ \"./src/images/follow.png\"))) == null ? '' : __t) +\n'\" class=\"img-icon\" style=\"display: {{showRightIcon}}\" />\\n\t\t</a>\\n\t</div>\\n</header>';\n\n}\nreturn __p\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHBsP2Y4NTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLDREQUEyQjtBQUM1QyxzQ0FBc0MsY0FBYyxxREFBcUQsT0FBTztBQUNoSCxTQUFTLG1CQUFPLENBQUMsd0RBQXlCO0FBQzFDLHNDQUFzQyxlQUFlOztBQUVyRDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cXG5cdDxkaXYgY2xhc3M9XCJpY29uIGxlZnRcIj5cXG5cdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6aGlzdG9yeS5iYWNrKC0xKVwiPlxcblx0XHRcdDxpbWcgc3JjPVwiJyArXG4oKF9fdCA9IChyZXF1aXJlKCcuLi8uLi9pbWFnZXMvYmFja3dhcmQucG5nJykpKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidcIiBjbGFzcz1cImltZy1pY29uXCIgc3R5bGU9XCJkaXNwbGF5OiB7e3Nob3dMZWZ0SWNvbn19XCIgLz5cXG5cdFx0PC9hPlxcblx0PC9kaXY+XFxuXHQ8ZGl2IGNsYXNzPVwidGl0bGVcIj5cXG5cdFx0PGgxPnt7dGl0bGV9fTwvaDE+XFxuXHQ8L2Rpdj5cXG5cdDxkaXYgY2xhc3M9XCJpY29uIHJpZ2h0XCI+XFxuXHRcdDxhIGhyZWY9XCJjb2xsZWN0aW9ucy5odG1sXCI+XFxuXHRcdFx0PGltZyBzcmM9XCInICtcbigoX190ID0gKHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9mb2xsb3cucG5nJykpKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidcIiBjbGFzcz1cImltZy1pY29uXCIgc3R5bGU9XCJkaXNwbGF5OiB7e3Nob3dSaWdodEljb259fVwiIC8+XFxuXHRcdDwvYT5cXG5cdDwvZGl2PlxcbjwvaGVhZGVyPic7XG5cbn1cbnJldHVybiBfX3Bcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/index.tpl\n");

/***/ }),

/***/ "./src/images/backward.png":
/*!*********************************!*\
  !*** ./src/images/backward.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABFFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+2eZYUAAAAW3RSTlMA1CWfCQ8c3RXKkKw5/uwuZ7nl9/JSAwdY/AH1+RLZS0U/4tACpr80l8X7DO8ZBbNf/SrwfunqeAghf26ktoJDqCR7fC9aeoZWeW3B85ipWYd3uLsti2i8ZilOJrWvGQAAAgdJREFUaN7V2udSAkEQBOAl55yDAkpQRJKAmHPOOdz7v4cozt75U6u6q9wX+Koorm975pT6xXFeX3peFfaML4zJ2cYi98bX2UEau1PDuAIajm/DGOAMvxgrXpixKoZxBDO62tiAGameGLcwo9wUYwFmBBNiBGBGJClGLI0y7GExFjMowx0XY34JZXg9YszOoAyXTYy5ZZSR8YkxXEMZ6ZgYrT7KyAfEKDTw4V6s4MM9V4IZ+2KEsjAjqsM9CjOyITHWYUYpRwj3ohg1Qrh3qvhwr7fx4e5z4sPd5sKHuwd2i3PqcI+7UUa7LkbYjjKqHTGSEdgDUhMjEcSHe7MMMwZi9FKEcO8Swv2OEO5+mFHR4e6AGY2Cbgd5lNFv4duBe4hvB2a449qBGe64dmCGO64dqBcxRnsw41mPMx5xM5NNfDsw+wHwDaJUSv9ch0BFV7aRHYdQ/sKUh5ETK9bbLy4grfd4XNRPGgnhpcV5/XIuEtYr0RlQYTR3pQ70DCIFVBgXbstcCBn85oQLWIJUmlDnOMWUU7E5wwLO2IMzwOGMoqwbkxrw0S8TxoOcQScr+I8Jw2fOGJ2zEOCsNihLGs66ibM446wAOctMzlr2x4L5/wd/kxH85ucLJ0CF8SGG9ZOSG6DypGMM+FCawX8KRHTwvyvk2ZpmmBOKjB8+r+FvCnzOB39qkx/F4zgal7fD7wAAAABJRU5ErkJggg==\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2t3YXJkLnBuZz85YWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQyIsImZpbGUiOiIuL3NyYy9pbWFnZXMvYmFja3dhcmQucG5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR1FBQUFCa0NBTUFBQUJIUEdWbUFBQUJGRkJNVkVWSGNFei8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLysyZVpZVUFBQUFXM1JTVGxNQTFDV2ZDUThjM1JYS2tLdzUvdXd1WjdubDkvSlNBd2RZL0FIMStSTFpTMFUvNHRBQ3ByODBsOFg3RE84WkJiTmYvU3J3ZnVucWVBZ2hmMjZrdG9KRHFDUjdmQzlhZW9aV2VXM0I4NWlwV1lkM3VMc3RpMmk4WmlsT0pyV3ZHUUFBQWdkSlJFRlVhTjdWMnVkU0FrRVFCT0FsNTV5REFrcFFSSktBbUhQT09kejd2NGNvenQ3NVU2dTZxOXdYK0tvb3JtOTc1cFQ2eFhGZVgzcGVGZmFNTDR6SjJjWWk5OGJYMlVFYXUxUER1QUlham0vREdPQU12eGdyWHBpeEtvWnhCRE82MnRpQUdhbWVHTGN3bzl3VVl3Rm1CQk5pQkdCR0pDbEdMSTB5N0dFeEZqTW93eDBYWTM0SlpYZzlZc3pPb0F5WFRZeTVaWlNSOFlreFhFTVo2WmdZclQ3S3lBZkVLRFR3NFY2czRNTTlWNElaKzJLRXNqQWpxc005Q2pPeUlUSFdZVVlwUndqM29oZzFRcmgzcXZod3I3Zng0ZTV6NHNQZDVzS0h1d2QyaTNQcWNJKzdVVWE3TGtiWWpqS3FIVEdTRWRnRFVoTWpFY1NIZTdNTU13Wmk5RktFY084U3d2Mk9FTzUrbUZIUjRlNkFHWTJDYmdkNWxORnY0ZHVCZTRodkIyYTQ0OXFCR2U2NGRtQ0dPNjRkcUJjeFJuc3c0MW1QTXg1eE01Tk5mRHN3K3dId0RhSlVTdjljaDBCRlY3YVJIWWRRL3NLVWg1RVRLOWJiTHk0Z3JmZDRYTlJQR2duaHBjVjUvWEl1RXRZcjBSbFFZVFIzcFE3MERDSUZWQmdYYnN0Y0NCbjg1b1FMV0lKVW1sRG5PTVdVVTdFNXd3TE8ySU16d09HTW9xd2JreHJ3MFM4VHhvT2NRU2NyK0k4SncyZk9HSjJ6RU9Dc05paExHczY2aWJNNDQ2d0FPY3RNemxyMng0TDUvd2Qva3hIODV1Y0xKMENGOFNHRzlaT1NHNkR5cEdNTStGQ2F3WDhLUkhUd3Z5dmsyWnBtbUJPS2pCOCtyK0Z2Q256T0IzOXFreC9GNHpnYWw3ZkQ3d0FBQUFCSlJVNUVya0pnZ2c9PVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/images/backward.png\n");

/***/ }),

/***/ "./src/images/follow.png":
/*!*******************************!*\
  !*** ./src/images/follow.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAVFBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////+DS+nTAAAAG3RSTlMAYKDwECDvgEAwr9Cwv1/fcMBQn+BPz5CPb38/d4VgAAACLUlEQVRo3u3ZUXODIAwA4GpBQMWWaWs3/v//3MNwJysKCdHbA3ns9e4rGENIL5eTQ75ulihuowwSbLSk0bJ3Qz0tcTzV2zrIDWuff9dS2wOi9g1uDwnuIeIYRHiIWT6VJLH8ZuMhTXAT8eEeceN9GFxeRixLKUhBClKQf4Go1tpWHYtUP9+rjkSq5TSqjkPU75HXqKMQ1dhUBY2sjZiCRXwjoiCRv8a+gkNk897wNJIUkTrcV2lJhmwROwwUGfR+lxhkYMiQcC96DlmISrx63RQekemttUQjgCvkDY1AbgnqDIRjkS7dmM548BU+hQ1yISBEIjMY9sb3aYbJKisctxBg7UoaItSZBZJfwe8IotQLzEKgCIsu5cryD605hvQEJ2N0vwQBIoEV5RhEUnQrMYRRILH0Ium7DLBuoZAansFwRMAzGI58wDMYjih4BiMa7mm3chF19av9MvNdyvtsIruFuZ9IY23XC7k6N7gUfWft9FFmKwUpSEEKchrChpfWWuvx66gZJBva9XTgRT+58wXnfHJCJCS4AdEnI0G2BfeX+JB7P4kJznlkII/WJkYzPlDIY2xCHVAthBChoYuXbknIlrA0J/wedL54MhITXGM5T8F04wlImuCc+rqRbntICxBcdxl29A4SvH9UbL+eVX3iLQwrLE6HRtKEvXSLIRBhO932ELiwkW6bSHfnGWein25hJE94S7cAQiAsjgkjZMI63fxZNq3gnHm6nBffO/GEHLdXG+sAAAAASUVORK5CYII=\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ZvbGxvdy5wbmc/YzlmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUMiLCJmaWxlIjoiLi9zcmMvaW1hZ2VzL2ZvbGxvdy5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUJrQ0FNQUFBQkhQR1ZtQUFBQVZGQk1WRVZIY0V6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rRFMrblRBQUFBRzNSU1RsTUFZS0R3RUNEdmdFQXdyOUN3djEvZmNNQlFuK0JQejVDUGIzOC9kNFZnQUFBQ0xVbEVRVlJvM3UzWlVYT0RJQXdBNEdwQlFNV1dhV3MzL3YvLzNNTndKeXNLQ2RIYkEzbnM5ZTRyR0VOSUw1ZVRRNzV1bGlodW93d1NiTFNrMGJKM1F6MHRjVHpWMnpySURXdWZmOWRTMndPaTlnMXVEd251SWVJWVJIaUlXVDZWSkxIOFp1TWhUWEFUOGVFZWNlTjlHRnhlUml4TEtVaEJDbEtRZjRHbzF0cFdIWXRVUDkrcmprU3E1VFNxamtQVTc1SFhxS01RMWRoVUJZMnNqWmlDUlh3am9pQ1J2OGErZ2tOazg5N3dOSklVa1RyY1YybEpobXdST3d3VUdmUitseGhrWU1pUWNDOTZEbG1JU3J4NjNSUWVrZW10dFVRamdDdmtEWTFBYmducURJUmprUzdkbU01NDhCVStoUTF5SVNCRUlqTVk5c2IzYVliSktpc2N0eEJnN1VvYUl0U1pCWkpmd2U4SW90UUx6RUtnQ0lzdTVjcnlENjA1aHZRRUoyTjB2d1FCSW9FVjVSaEVVblFyTVlSUklMSDBJdW03RExCdW9aQWFuc0Z3Uk1BekdJNTh3RE1ZamloNEJpTWE3bW0zY2hGMTlhdjlNdk5keXZ0c0lydUZ1WjlJWTIzWEM3azZON2dVZldmdDlGRm1Ld1VwU0VFS2NockNocGZXV3V2eDY2Z1pKQnZhOVhUZ1JUKzU4d1huZkhKQ0pDUzRBZEVuSTBHMkJmZVgrSkI3UDRrSnpubGtJSS9XSmtZelBsRElZMnhDSFZBdGhCQ2hvWXVYYmtuSWxyQTBKL3dlZEw1NE1oSVRYR001VDhGMDR3bEltdUNjK3JxUmJudElDeEJjZHhsMjlBNFN2SDlVYkwrZVZYM2lMUXdyTEU2SFJ0S0V2WFNMSVJCaE85MzJFTGl3a1c2YlNIZm5HV2VpbjI1aEpFOTRTN2NBUWlBc2pna2paTUk2M2Z4Wk5xM2duSG02bkJmZk8vR0VITGRYRytzQUFBQUFTVVZPUks1Q1lJST1cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/images/follow.png\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/index */ \"./src/components/header/index.js\");\n\n\nvar header = new _components_header_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nvar App = function App($) {\n  console.log($);\n  var $app = $('#app');\n\n  var init = function init() {\n    render();\n  };\n\n  var render = function render() {\n    _renderHeader();\n  };\n\n  var _renderHeader = function _renderHeader() {\n    console.log(header.tpl({\n      title: 'JS++新闻头条',\n      showLeftIcon: false,\n      showRightIcon: true\n    }));\n  };\n\n  init();\n};\n\nApp(Zepto);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJoZWFkZXIiLCJIZWFkZXIiLCJBcHAiLCIkIiwiY29uc29sZSIsImxvZyIsIiRhcHAiLCJpbml0IiwicmVuZGVyIiwiX3JlbmRlckhlYWRlciIsInRwbCIsInRpdGxlIiwic2hvd0xlZnRJY29uIiwic2hvd1JpZ2h0SWNvbiIsIlplcHRvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsZ0VBQUosRUFBZjs7QUFDQSxJQUFNQyxHQUFHLEdBQUMsU0FBSkEsR0FBSSxDQUFDQyxDQUFELEVBQUs7QUFDWEMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQSxNQUFNRyxJQUFJLEdBQUNILENBQUMsQ0FBQyxNQUFELENBQVo7O0FBQ0EsTUFBTUksSUFBSSxHQUFDLFNBQUxBLElBQUssR0FBSTtBQUNYQyxVQUFNO0FBQ1QsR0FGRDs7QUFHQSxNQUFNQSxNQUFNLEdBQUMsU0FBUEEsTUFBTyxHQUFJO0FBQ2JDLGlCQUFhO0FBQ2hCLEdBRkQ7O0FBR0EsTUFBTUEsYUFBYSxHQUFDLFNBQWRBLGFBQWMsR0FBSTtBQUNwQkwsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQU0sQ0FBQ1UsR0FBUCxDQUFXO0FBQ25CQyxXQUFLLEVBQUUsVUFEWTtBQUVuQkMsa0JBQVksRUFBRSxLQUZLO0FBR25CQyxtQkFBYSxFQUFFO0FBSEksS0FBWCxDQUFaO0FBS0gsR0FORDs7QUFPQU4sTUFBSTtBQUNQLENBakJEOztBQWtCQUwsR0FBRyxDQUFDWSxLQUFELENBQUgiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2NzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXgnXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKClcbmNvbnN0IEFwcD0oJCk9PntcbiAgICBjb25zb2xlLmxvZygkKTtcbiAgICBjb25zdCAkYXBwPSQoJyNhcHAnKTtcbiAgICBjb25zdCBpbml0PSgpPT57XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXI9KCk9PntcbiAgICAgICAgX3JlbmRlckhlYWRlcigpO1xuICAgIH1cbiAgICBjb25zdCBfcmVuZGVySGVhZGVyPSgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWRlci50cGwoe1xuICAgICAgICAgICAgdGl0bGU6ICdKUysr5paw6Ze75aS05p2hJyxcbiAgICAgICAgICAgIHNob3dMZWZ0SWNvbjogZmFsc2UsXG4gICAgICAgICAgICBzaG93UmlnaHRJY29uOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgaW5pdCgpXG59XG5BcHAoWmVwdG8pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzP2YwOTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvc2Nzcy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/index.scss\n");

/***/ }),

/***/ "./src/utils/tools.js":
/*!****************************!*\
  !*** ./src/utils/tools.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tplReplace() {\n  return /{{(.*?)}}/g;\n}\n\nmodule.exports = {\n  tplReplace: tplReplace\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG9vbHMuanM/Yjg5MyJdLCJuYW1lcyI6WyJ0cGxSZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsVUFBVCxHQUFxQjtBQUNuQixTQUFPLFlBQVA7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWU7QUFDYkYsWUFBVSxFQUFWQTtBQURhLENBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvdG9vbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0cGxSZXBsYWNlKCl7XG4gIHJldHVybiAve3soLio/KX19L2c7XG59XG5cbm1vZHVsZS5leHBvcnRzPXtcbiAgdHBsUmVwbGFjZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/tools.js\n");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /React1/untitled folder/rh/toutiao/src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });