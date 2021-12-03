/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = {}; // canvas\n\nconfig.CANVAS_SIZE = 700;\nconfig.LINE_WIDTH = 2.5;\nconfig.IMAGE_RATIO = 0.7; // tools hover & action\n\nconfig.INITIAL_COLOR = \"#2c2c2c\";\nconfig.SECECT_COLOR = \"#00eaa0\"; // tools\n\nconfig.RANGE_SHOWING_CN = \"showing\";\nconfig.COLOR_CLICKED_CN = \"clicked\";\nconfig.COLORS = [\"#2c2c2c\", \"#fff\", \"#ff3b30\", \"#ff9500\", \"#ffcc00\", \"#4cd963\", \"#5ac8fa\", \"#0579ff\", \"#5856d6\", \"#ac3bee\"];\nconfig.MSG = {\n  SELECTED_FILE_OPEN_BTN: \"Select an image location you want on the canvas 📍\",\n  HOVER_IN_POINTER_BNT: \"\\uD604\\uC7AC\\uB294 \\uC774\\uBBF8\\uC9C0 \\uC0BD\\uC785 \\uC2DC\\uC5D0\\uB9CC \\uC0AC\\uC6A9\\uD560 \\uC218 \\uC788\\uC2B5\\uB2C8\\uB2E4!\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://paint/./src/js/config.js?");

/***/ }),

/***/ "./src/js/core/base-layers.js":
/*!************************************!*\
  !*** ./src/js/core/base-layers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Base_layers)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n/* harmony import */ var _base_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-tools */ \"./src/js/core/base-tools.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * layers 핸들러 클래스\n */\n\nvar Base_layers = /*#__PURE__*/function () {\n  function Base_layers() {\n    var _this = this;\n\n    _classCallCheck(this, Base_layers);\n\n    _defineProperty(this, \"startPainting\", function () {\n      var _this$tools$toolMode = _this.tools.toolMode,\n          filling = _this$tools$toolMode.filling,\n          settingImage = _this$tools$toolMode.settingImage;\n      if (!filling && !settingImage.state) _this.tools.toolMode = [\"painting\", true];\n    });\n\n    _defineProperty(this, \"stopPainting\", function () {\n      _this.tools.toolMode = [\"painting\", false];\n    });\n\n    _defineProperty(this, \"onMouseMove\", function (_ref) {\n      var x = _ref.offsetX,\n          y = _ref.offsetY;\n      var _this$tools$toolMode2 = _this.tools.toolMode,\n          painting = _this$tools$toolMode2.painting,\n          settingImage = _this$tools$toolMode2.settingImage;\n\n      if (!settingImage.state) {\n        if (!painting) {\n          _this.ctx.beginPath();\n\n          _this.ctx.moveTo(x, y);\n        } else {\n          _this.ctx.lineTo(x, y);\n\n          _this.ctx.stroke();\n        }\n      }\n    });\n\n    _defineProperty(this, \"handleCanvasClick\", function (_ref2) {\n      var offsetX = _ref2.offsetX,\n          offsetY = _ref2.offsetY;\n      var _this$tools$toolMode3 = _this.tools.toolMode,\n          filling = _this$tools$toolMode3.filling,\n          settingImage = _this$tools$toolMode3.settingImage;\n      if (filling) _this.ctx.fillRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE);\n\n      if (settingImage.state) {\n        var img = settingImage.img,\n            reduceSize = settingImage.reduceSize,\n            width = img.width * reduceSize,\n            height = img.height * reduceSize;\n\n        _this.ctx.drawImage(img, offsetX - width / 2, offsetY - height / 2, width, height);\n\n        _this.tools.toolMode = [\"settingImage\", _objectSpread(_objectSpread({}, settingImage), _defineProperty({}, \"state\", false))];\n\n        _this.tools.settingModeBtn(\"painting\");\n      }\n    });\n\n    this.canvas = document.getElementById(\"jsCanvas\");\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.resetBtn = document.getElementById(\"jsReset\");\n    this.tools = new _base_tools__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas, this.ctx);\n  }\n\n  _createClass(Base_layers, [{\n    key: \"resetCanvas\",\n    value: function resetCanvas() {\n      var ctx = this.ctx,\n          canvas = this.canvas,\n          tools = this.tools;\n      ctx.fillStyle = \"white\";\n      ctx.fillRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE);\n      ctx.strokeStyle = ctx.fillStyle = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INITIAL_COLOR;\n      canvas.width = canvas.height = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE;\n      ctx.lineWidth = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LINE_WIDTH;\n      tools.resetTools();\n      tools.mode().painting();\n      tools.toolMode = [\"painting\", false];\n    }\n  }, {\n    key: \"event\",\n    value: function event() {\n      var _this2 = this;\n\n      if (this.tools) this.tools.event();\n\n      if (this.canvas) {\n        this.resetCanvas();\n        this.canvas.addEventListener(\"mousemove\", this.onMouseMove);\n        this.canvas.addEventListener(\"mousedown\", this.startPainting);\n        this.canvas.addEventListener(\"mouseup\", this.stopPainting);\n        this.canvas.addEventListener(\"mouseleave\", this.stopPainting);\n        this.canvas.addEventListener(\"click\", this.handleCanvasClick);\n        this.canvas.addEventListener(\"contextmenu\", function (event) {\n          return event.preventDefault();\n        });\n      }\n\n      if (this.resetBtn) this.resetBtn.addEventListener(\"click\", function () {\n        return _this2.resetCanvas();\n      });\n    }\n  }]);\n\n  return Base_layers;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/base-layers.js?");

/***/ }),

/***/ "./src/js/core/base-modal.js":
/*!***********************************!*\
  !*** ./src/js/core/base-modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Base_modal)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Base_modal = /*#__PURE__*/function () {\n  function Base_modal(classname, msg) {\n    _classCallCheck(this, Base_modal);\n\n    this.classname = classname;\n    this.ui = msg;\n  }\n\n  _createClass(Base_modal, [{\n    key: \"showModal\",\n    value: function showModal(target) {\n      target.after(this.ui);\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.ui.remove();\n    }\n  }, {\n    key: \"createHTML\",\n    value: function createHTML(msg) {\n      var ui = document.createElement(\"ui\");\n      ui.classList.add(\"modal\", \"modal-\".concat(this.classname));\n      ui.innerHTML = \"<p>\".concat(msg, \"</p>\");\n      return ui;\n    }\n  }, {\n    key: \"ui\",\n    get: function get() {\n      return this._ui;\n    },\n    set: function set(msg) {\n      this._ui = this.createHTML(msg);\n    }\n  }]);\n\n  return Base_modal;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/base-modal.js?");

/***/ }),

/***/ "./src/js/core/base-tools.js":
/*!***********************************!*\
  !*** ./src/js/core/base-tools.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Base_tools)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n/* harmony import */ var _gui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/colors */ \"./src/js/gui/colors.js\");\n/* harmony import */ var _modal_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/tooltip */ \"./src/js/core/modal/tooltip.js\");\n/* harmony import */ var _modal_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/message */ \"./src/js/core/modal/message.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/**\n * Tools 핸들러 클래스\n * @param {canvas} canvas\n * @param {canvas.context} ctx\n */\n\nvar Base_tools = /*#__PURE__*/function () {\n  function Base_tools(canvas, ctx) {\n    var _this = this;\n\n    _classCallCheck(this, Base_tools);\n\n    _defineProperty(this, \"toolModes\", function () {\n      var modelist = {\n        filling: null,\n        painting: null,\n        settingImage: {\n          state: false,\n          img: null,\n          reduceSize: 1\n        }\n      };\n      return function () {\n        return {\n          painting: function painting() {\n            modelist.settingImage.state = modelist.filling = false;\n            _this.paintBtn.style.color = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SECECT_COLOR;\n            _this.pointerBtn.style.color = _this.fillBnt.style.color = \"#000\";\n          },\n          filling: function filling() {\n            modelist.filling = true;\n            modelist.settingImage.state = modelist.painting = false;\n            _this.fillBnt.style.color = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SECECT_COLOR;\n            _this.pointerBtn.style.color = _this.paintBtn.style.color = \"#000\";\n          },\n          settingImage: function settingImage() {\n            modelist.painting = modelist.filling = false;\n            _this.pointerBtn.style.color = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SECECT_COLOR;\n            _this.paintBtn.style.color = _this.fillBnt.style.color = \"#000\";\n          },\n          getCurMode: function getCurMode() {\n            return modelist;\n          },\n          setMode: function setMode(modes) {\n            Object.entries(modes).forEach(function (_ref) {\n              var _ref2 = _slicedToArray(_ref, 2),\n                  key = _ref2[0],\n                  value = _ref2[1];\n\n              if (key === \"settingImage\" || typeof value === \"boolean\") modelist = _objectSpread(_objectSpread({}, modelist), _defineProperty({}, key, value));\n            });\n          }\n        };\n      };\n    });\n\n    _defineProperty(this, \"handleColorClick\", function (_ref3) {\n      var target = _ref3.target;\n      var bgColor = target.style.backgroundColor;\n\n      _this.resetPalette();\n\n      target.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLOR_CLICKED_CN);\n      _this.ctx.strokeStyle = bgColor;\n      _this.ctx.fillStyle = bgColor;\n    });\n\n    _defineProperty(this, \"handleRangeChange\", function (_ref4) {\n      var target = _ref4.target;\n      var size = target.value;\n      _this.ctx.lineWidth = size;\n      target.setAttribute(\"data-before\", \"\".concat(size, \" |\"));\n    });\n\n    _defineProperty(this, \"handleRangeDivHiding\", function (_ref5) {\n      var id = _ref5.target.parentNode.id;\n      if (!id.includes(\"Range\")) _this.rangeDiv.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_SHOWING_CN);\n    });\n\n    _defineProperty(this, \"handleImageInsert\", function (_ref6) {\n      var files = _ref6.target.files;\n\n      if (files.length) {\n        var url = URL.createObjectURL(files[0]),\n            img = new Image(),\n            mode = _this.mode,\n            message = _this.message,\n            _mode$getCurMode = mode().getCurMode(),\n            settingImage = _mode$getCurMode.settingImage;\n\n        img.onload = function () {\n          var _objectSpread3;\n\n          var reduceSize = (Math.max.apply(Math, [this.width, this.height]) > _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE ? _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE / Math.max.apply(Math, [this.width, this.height]) : 1) * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IMAGE_RATIO;\n          message.showModal();\n          mode().settingImage();\n          mode().setMode({\n            settingImage: _objectSpread(_objectSpread({}, settingImage), (_objectSpread3 = {}, _defineProperty(_objectSpread3, \"state\", true), _defineProperty(_objectSpread3, \"img\", img), _defineProperty(_objectSpread3, \"reduceSize\", reduceSize), _objectSpread3))\n          });\n        };\n\n        img.src = url;\n      }\n    });\n\n    _defineProperty(this, \"handleCanvasSave\", function () {\n      var link = document.createElement(\"a\");\n      link.href = _this.canvas.toDataURL();\n      link.download = \"paint_\".concat(new Date().getTime());\n      link.click();\n    });\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.openBtn = document.getElementById(\"jsOpen\");\n    this.saveBtn = document.getElementById(\"jsSave\");\n    this.rangeBtn = document.getElementById(\"jsSelectRange\");\n    this.rangeDiv = document.getElementById(\"jsRangeDiv\");\n    this.range = document.getElementById(\"jsRange\");\n    this.pointerBtn = document.getElementById(\"jsPointer\");\n    this.paintBtn = document.getElementById(\"jsPaint\");\n    this.fillBnt = document.getElementById(\"jsFill\");\n    _gui_colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n    this.colors = Array.from(document.getElementsByClassName(\"jsColor\"));\n    this.tooltip = new _modal_tooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.message = new _modal_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.mode = new this.toolModes();\n  }\n\n  _createClass(Base_tools, [{\n    key: \"toolMode\",\n    get: function get() {\n      return this.mode().getCurMode();\n    },\n    set: function set(_ref7) {\n      var _ref8 = _slicedToArray(_ref7, 2),\n          key = _ref8[0],\n          value = _ref8[1];\n\n      this.mode().setMode(_defineProperty({}, key, value));\n    }\n  }, {\n    key: \"settingModeBtn\",\n    value: function settingModeBtn(mode) {\n      return this.mode()[mode]();\n    }\n  }, {\n    key: \"resetTools\",\n    value: function resetTools() {\n      this.range.value = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LINE_WIDTH;\n      this.rangeDiv.children[\"jsRange\"].setAttribute(\"data-before\", \"\".concat(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LINE_WIDTH, \" |\"));\n      this.resetPalette();\n      this.colors[0].classList.add(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLOR_CLICKED_CN);\n    }\n  }, {\n    key: \"resetPalette\",\n    value: function resetPalette() {\n      this.colors.forEach(function (color) {\n        return color.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLOR_CLICKED_CN);\n      });\n    }\n  }, {\n    key: \"event\",\n    value: function event() {\n      var _this2 = this;\n\n      if (this.openBtn) this.openBtn.addEventListener(\"change\", this.handleImageInsert);\n      if (this.saveBtn) this.saveBtn.addEventListener(\"click\", this.handleCanvasSave);\n\n      if (this.rangeBtn) {\n        this.rangeBtn.addEventListener(\"click\", function () {\n          return _this2.rangeDiv.classList.toggle(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_SHOWING_CN);\n        });\n        document.addEventListener(\"click\", this.handleRangeDivHiding);\n        if (this.range) this.range.addEventListener(\"input\", this.handleRangeChange);\n      }\n\n      if (this.pointerBtn) {\n        this.pointerBtn.addEventListener(\"mouseover\", function (_ref9) {\n          var target = _ref9.target;\n          return _this2.tooltip.showModal(target);\n        });\n        this.pointerBtn.addEventListener(\"mouseleave\", function () {\n          return _this2.tooltip.closeModal();\n        });\n      }\n\n      if (this.paintBtn) this.paintBtn.addEventListener(\"click\", function () {\n        return _this2.settingModeBtn(\"painting\");\n      });\n      if (this.fillBnt) this.fillBnt.addEventListener(\"click\", function () {\n        return _this2.settingModeBtn(\"filling\");\n      });\n      if (this.colors) this.colors.forEach(function (color) {\n        return color.addEventListener(\"click\", _this2.handleColorClick);\n      });\n    }\n  }]);\n\n  return Base_tools;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/base-tools.js?");

/***/ }),

/***/ "./src/js/core/modal/message.js":
/*!**************************************!*\
  !*** ./src/js/core/modal/message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./src/js/config.js\");\n/* harmony import */ var _base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-modal */ \"./src/js/core/base-modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get() { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Message = /*#__PURE__*/function (_Base_modal) {\n  _inherits(Message, _Base_modal);\n\n  var _super = _createSuper(Message);\n\n  function Message() {\n    _classCallCheck(this, Message);\n\n    return _super.call(this, \"message\", _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MSG.SELECTED_FILE_OPEN_BTN);\n  }\n\n  _createClass(Message, [{\n    key: \"showModal\",\n    value: function showModal() {\n      _get(_getPrototypeOf(Message.prototype), \"showModal\", this).call(this, document.getElementById(\"jsCanvas\"));\n    }\n  }]);\n\n  return Message;\n}(_base_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/modal/message.js?");

/***/ }),

/***/ "./src/js/core/modal/tooltip.js":
/*!**************************************!*\
  !*** ./src/js/core/modal/tooltip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./src/js/config.js\");\n/* harmony import */ var _base_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-modal */ \"./src/js/core/base-modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get() { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar Tooltip = /*#__PURE__*/function (_Base_modal) {\n  _inherits(Tooltip, _Base_modal);\n\n  var _super = _createSuper(Tooltip);\n\n  function Tooltip() {\n    _classCallCheck(this, Tooltip);\n\n    return _super.call(this, \"tooltip\", _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MSG.HOVER_IN_POINTER_BNT);\n  }\n\n  _createClass(Tooltip, [{\n    key: \"showModal\",\n    value: function showModal(_ref) {\n      var parentNode = _ref.parentNode;\n\n      _get(_getPrototypeOf(Tooltip.prototype), \"showModal\", this).call(this, parentNode);\n    }\n  }]);\n\n  return Tooltip;\n}(_base_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/modal/tooltip.js?");

/***/ }),

/***/ "./src/js/gui/colors.js":
/*!******************************!*\
  !*** ./src/js/gui/colors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Colors)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Colors = /*#__PURE__*/function () {\n  function Colors() {\n    _classCallCheck(this, Colors);\n  }\n\n  _createClass(Colors, null, [{\n    key: \"display\",\n    value: function display() {\n      document.getElementById(\"jsColors\").innerHTML = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORS.map(function (color) {\n        return \"<div class=\\\"controls__color jsColor\\\" style=\\\"background-color: \".concat(color, \"\\\"></div>\");\n      }).join(\"\");\n    }\n  }]);\n\n  return Colors;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/gui/colors.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _core_base_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/base-layers */ \"./src/js/core/base-layers.js\");\n\n\nwindow.addEventListener(\"load\", function () {\n  var layers = new _core_base_layers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  layers.event();\n});\n\n//# sourceURL=webpack://paint/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://paint/./src/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;