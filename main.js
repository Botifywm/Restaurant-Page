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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/blue_stripes.jpg */ \"./src/images/blue_stripes.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: navy;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    margin: 0;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(256,256,256, 0.8);\n    padding: 1rem;\n    border-bottom: 3px solid navy;\n    margin-bottom: 1.5rem;\n}\n\n#title {\n    text-align: center;\n    color: navy;\n    font-size: 3rem;\n    letter-spacing: 0.2rem;\n    margin-bottom: 1rem;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    gap: 1rem;\n    padding: 0 3rem;\n}\n\n.navBtn {\n    display: grid;\n    grid-template-columns: repeat(2, 5rem);\n    border: 0;\n}\n\nnav button {\n    font-size: 1rem;\n    border: 0;\n    background-color: transparent;\n}\n\n.aboutNav {\n    display: grid;\n    justify-items: end;\n}\n\n/* #content {\n    display: grid;\n    grid-template-columns: 1fr;\n} */\n\n.container {\n    display: grid;\n}\n\n\n/* HOME */\n#intro {\n    background-color: rgb(256,256,256, 0.5);\n    padding: 2rem 25%;\n    text-align: center;\n}\n\n.chefSpecs, .chefMenu {\n    text-align: center;\n    background-color: rgb(256,256,256, 0.7);\n    font-size: 1.5rem;\n    color: navy;\n}\n\n.specialties, .allMenu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 1rem;\n    justify-items: center;\n    padding: 2% 25%;\n    background-color: rgb(256,256,256, 0.7);\n}\n.awardHeader{\n    text-align: center;\n    background-color: rgb(256,256,256, 0.7);\n    margin-top: 1rem;\n    font-size: 1.5rem;\n    color: navy;\n}\n\n.awards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    justify-items: center;\n    background-color: rgb(256,256,256, 0.7);\n    padding: 2% 35%;\n}\n\n.menu, .menuDiv{\n    height: 250px;\n}\n\n\n.award {\n    height: 150px;\n}\n\n\n.menuText {\n    display:flex;\n    flex-direction: column;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    top: calc(-100% - 2%);\n    opacity: 0;\n    height: 250px;\n    background-color: black;\n}\n\n\n.menuText:hover {\n    opacity: 0.75;\n    color: white;\n}\n\n.location {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: stretch center;\n    border: 1px solid black;\n    gap: 1rem;\n    background-color: navy;\n    padding: 0 1rem;\n\n}\n\n.city {\n    text-align: center;\n    background-color: white;\n    padding: 1rem 0;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerAbout: () => (/* binding */ containerAbout)\n/* harmony export */ });\n\n\nconst containerAbout = document.createElement('div');\ncontainerAbout.classList.add('containerAbout');\n\nconst location = document.createElement('div');\nlocation.classList.add('location');\n\nconst locationsList = ['New York', 'China', 'Singapore'];\n\nlocationsList.forEach(loc => {\n    const city = document.createElement('div');\n    city.classList.add('city');\n    city.textContent = loc;\n    location.appendChild(city);\n})\n\ncontainerAbout.appendChild(location);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerHome: () => (/* binding */ containerHome)\n/* harmony export */ });\n/* harmony import */ var _images_menu1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu1.jpg */ \"./src/images/menu1.jpg\");\n/* harmony import */ var _images_menu2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu2.jpg */ \"./src/images/menu2.jpg\");\n/* harmony import */ var _images_menu3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu3.jpg */ \"./src/images/menu3.jpg\");\n/* harmony import */ var _images_menu4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu4.jpg */ \"./src/images/menu4.jpg\");\n/* harmony import */ var _images_menu5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu5.jpg */ \"./src/images/menu5.jpg\");\n/* harmony import */ var _images_menu6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu6.jpg */ \"./src/images/menu6.jpg\");\n/* harmony import */ var _images_award1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/award1.png */ \"./src/images/award1.png\");\n/* harmony import */ var _images_award2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/award2.png */ \"./src/images/award2.png\");\n/* harmony import */ var _images_award3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/award3.png */ \"./src/images/award3.png\");\n/* harmony import */ var _images_award4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/award4.png */ \"./src/images/award4.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst containerHome = document.createElement('div');\ncontainerHome.classList.add('container');\n\n\nconst intro = document.createElement('div');\nconst chefSpecs = document.createElement('div');\nconst specialties = document.createElement('div');\nconst awardHeader = document.createElement('div');\nconst awards = document.createElement('div');\n\nintro.setAttribute('id', 'intro');\nintro.textContent = \n\"Zeo's Kitchen is where it all started! This is where the sea meets the soul! Born from a passion for fresh seafood and coastal flavors, our restaurant offers a unique dining experience that celebrates the ocean’s bounty. At Zeo’s, we believe in sourcing the finest, freshest ingredients, prepared with care and creativity to bring you dishes that are both comforting and inspired. Founded by a team of food lovers and seasoned chefs, we set out to create a place where friends and family can gather over great food and even better memories. We are proud to be currently holding a two-starred michelin restaurant!\";\ncontainerHome.appendChild(intro);\n\nchefSpecs.classList.add('chefSpecs')\nchefSpecs.textContent = \"Chefs' Specialties\"\ncontainerHome.appendChild(chefSpecs);\n\nspecialties.classList.add('specialties');\n\nconst menuSrc = [_images_menu1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_menu2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_menu3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_menu4_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_menu5_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_menu6_jpg__WEBPACK_IMPORTED_MODULE_5__];\n\nmenuSrc.forEach((src) => {\n    const image_menu = document.createElement('img');\n    image_menu.classList.add('menu');\n    image_menu.src = src;\n    specialties.appendChild(image_menu);\n})\ncontainerHome.appendChild(specialties)\n\nawardHeader.classList.add(\"awardHeader\");\nawardHeader.textContent = \"Featured Press & ACCOLADES\";\ncontainerHome.appendChild(awardHeader);\n\nconst awardsSrc = [_images_award1_png__WEBPACK_IMPORTED_MODULE_6__, _images_award2_png__WEBPACK_IMPORTED_MODULE_7__, _images_award3_png__WEBPACK_IMPORTED_MODULE_8__, _images_award4_png__WEBPACK_IMPORTED_MODULE_9__];\nawardsSrc.forEach((src) => {\n    const award = document.createElement('img');\n    award.classList.add('award');\n    award.src = src;\n    awards.appendChild(award);\n})\nawards.classList.add('awards');\ncontainerHome.appendChild(awards);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\n\nconst blankContent = document.querySelector('#content');\nconst homeNav = document.querySelector('.homeNav');\nconst menuNav = document.querySelector('.menuNav');\nconst aboutNav = document.querySelector('.aboutNav');\n\nblankContent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.containerHome);\n\nhomeNav.addEventListener('click', ()=> {\n    // blankContent.removeChild(blankContent.firstChild)\n    blankContent.innerHTML = '';\n    blankContent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_1__.containerHome);\n})\n\nmenuNav.addEventListener('click', ()=> {\n    // blankContent.removeChild(blankContent.firstChild);\n    blankContent.innerHTML = '';\n    blankContent.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.containerMenu);\n})\n\naboutNav.addEventListener('click', ()=> {\n    // blankContent.removeChild(blankContent.firstChild);\n    blankContent.innerHTML = '';\n    blankContent.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_3__.containerAbout);\n})\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerMenu: () => (/* binding */ containerMenu)\n/* harmony export */ });\n/* harmony import */ var _images_menu1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu1.jpg */ \"./src/images/menu1.jpg\");\n/* harmony import */ var _images_menu2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu2.jpg */ \"./src/images/menu2.jpg\");\n/* harmony import */ var _images_menu3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu3.jpg */ \"./src/images/menu3.jpg\");\n/* harmony import */ var _images_menu4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu4.jpg */ \"./src/images/menu4.jpg\");\n/* harmony import */ var _images_menu5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu5.jpg */ \"./src/images/menu5.jpg\");\n/* harmony import */ var _images_menu6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu6.jpg */ \"./src/images/menu6.jpg\");\n/* harmony import */ var _images_menu7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu7.jpg */ \"./src/images/menu7.jpg\");\n/* harmony import */ var _images_menu8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu8.jpg */ \"./src/images/menu8.jpg\");\n/* harmony import */ var _images_menu9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/menu9.jpg */ \"./src/images/menu9.jpg\");\n\n\n\n\n\n\n\n\n\n\n\nconst containerMenu = document.createElement('div');\ncontainerMenu.classList.add('container');\n\nconst chefMenu = document.createElement('div');\nchefMenu.classList.add('chefMenu');\nchefMenu.textContent = \"Chef's Menu\";\ncontainerMenu.appendChild(chefMenu);\n\nconst allMenu = document.createElement('div');\nallMenu.classList.add('allMenu');\n\nconst menuSrc = [_images_menu1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_menu2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_menu3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_menu4_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_menu5_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_menu6_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_menu7_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_menu8_jpg__WEBPACK_IMPORTED_MODULE_7__, _images_menu9_jpg__WEBPACK_IMPORTED_MODULE_8__];\nconst menuTitle = [\n    `King of Prawns with Lemon Sauce <p>$199</p>`, \n    `King of Lobster with Lemon Sauce <p>$299</p>`,\n    `Fresh Seafood Roll <p>$99</p>`,\n    `Cut Royal Dragon Prawn <p>$199</p>`, \n    `Oysters with Wasabi and Lemon <p>$199</p>`,\n    `King of Seafood Platter <p>$399</p>`,\n    `Royal Carribean <p>$199</p>`, \n    `Mediterrenean Platter <p>$299</p>`,\n    `Scallops and Prawn <p>$199</p>`\n]\n\nmenuSrc.forEach((src, index) => {\n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('menuDiv');\n    const image = document.createElement('img');\n    image.classList.add('menu');\n    image.src = src;\n    menuDiv.appendChild(image);\n    const menuText = document.createElement('div');\n    menuText.classList.add('menuText');\n    menuText.innerHTML = menuTitle[index];\n    menuDiv.appendChild(menuText);\n    allMenu.appendChild(menuDiv);\n})\n\ncontainerMenu.appendChild(allMenu);\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/award1.png":
/*!*******************************!*\
  !*** ./src/images/award1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8da2c2f9004d3d235ee7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/award1.png?");

/***/ }),

/***/ "./src/images/award2.png":
/*!*******************************!*\
  !*** ./src/images/award2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5814d59ed496c05fa669.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/award2.png?");

/***/ }),

/***/ "./src/images/award3.png":
/*!*******************************!*\
  !*** ./src/images/award3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8c7f04c015983a7e818.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/award3.png?");

/***/ }),

/***/ "./src/images/award4.png":
/*!*******************************!*\
  !*** ./src/images/award4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24c15b2f4c0a8cb75087.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/award4.png?");

/***/ }),

/***/ "./src/images/blue_stripes.jpg":
/*!*************************************!*\
  !*** ./src/images/blue_stripes.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d782f7dc26ecc978db5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/blue_stripes.jpg?");

/***/ }),

/***/ "./src/images/menu1.jpg":
/*!******************************!*\
  !*** ./src/images/menu1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35aba23468934b37e885.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu1.jpg?");

/***/ }),

/***/ "./src/images/menu2.jpg":
/*!******************************!*\
  !*** ./src/images/menu2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"414ca729fd1de999a673.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu2.jpg?");

/***/ }),

/***/ "./src/images/menu3.jpg":
/*!******************************!*\
  !*** ./src/images/menu3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e8f2d5d351dbb13fd71.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu3.jpg?");

/***/ }),

/***/ "./src/images/menu4.jpg":
/*!******************************!*\
  !*** ./src/images/menu4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a7a7d3a15be43dd1823.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu4.jpg?");

/***/ }),

/***/ "./src/images/menu5.jpg":
/*!******************************!*\
  !*** ./src/images/menu5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36b6847ea6397164706c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu5.jpg?");

/***/ }),

/***/ "./src/images/menu6.jpg":
/*!******************************!*\
  !*** ./src/images/menu6.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f031fd709304e0904b4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu6.jpg?");

/***/ }),

/***/ "./src/images/menu7.jpg":
/*!******************************!*\
  !*** ./src/images/menu7.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7af9c891ef7ae26e6ff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu7.jpg?");

/***/ }),

/***/ "./src/images/menu8.jpg":
/*!******************************!*\
  !*** ./src/images/menu8.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"035f193c45e9be450ed3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu8.jpg?");

/***/ }),

/***/ "./src/images/menu9.jpg":
/*!******************************!*\
  !*** ./src/images/menu9.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7f1ce4a0a2cad50ee9d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu9.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;