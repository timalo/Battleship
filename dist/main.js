/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000000;\n  margin: 0;\n}\n\n.content {\n  height: 95%;\n  width: 95%;\n  background-color: #303030;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameDiv {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100%;\n  width: 100%;\n}\n\n.boardArea {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #303030;\n  height: 80%;\n  width: 80%;\n  padding: 5%;\n}\n\np {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\n\n.playerInfo {\n  font-size: 2rem;\n}\n\n.gameBoard {\n  aspect-ratio: 1/1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  width: 100%;\n  border: 5px solid #006800;\n  border-radius: 10px;\n}\n\n.box {\n  border: 1px solid #006800;\n  background-color: #303030;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n}\n\n.box:hover {\n  background-color: #006800;\n}\n\n.missed {\n  background-color: #0000ff;\n}\n\n.hit {\n  background-color: #ff0000;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const script = __webpack_require__(/*! ./scripts */ \"./src/scripts.js\");\nconst main = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\nfunction init() {\n  // This initializes the gameboard boxes and gives them classes and id's on page load.\n  const gameBoard1 = document.getElementsByClassName(\"board1\")[0];\n  const gameBoard2 = document.getElementsByClassName(\"board2\")[0];\n  for (let i = 0; i < 10; i += 1) {\n    for (let j = 0; j < 10; j += 1) {\n      const box1 = document.createElement(\"div\");\n      box1.classList.add(\"box\");\n      box1.classList.add(\"unhit\");\n      box1.id = `box1-${i}${j}`;\n      box1.onclick = () => main.hitShip(1, i, j);\n      gameBoard1.appendChild(box1);\n      const box2 = document.createElement(\"div\");\n      box2.classList.add(\"box\");\n      box2.classList.add(\"unhit\");\n      box2.id = `box2-${i}${j}`;\n      box2.onclick = () => main.hitShip(2, i, j);\n      gameBoard2.appendChild(box2);\n    }\n  }\n}\n\nfunction renderBoards(player1, player2) {\n  // In addition to handling classes etc. We could also add images to hit/missed boxes.\n  // Doing it with just background colors for now\n  for (let i = 0; i < 10; i += 1) {\n    for (let j = 0; j < 10; j += 1) {\n      const box1 = document.getElementById(`box1-${i}${j}`);\n      const box2 = document.getElementById(`box2-${i}${j}`);\n      box1.innerHTML = \"\";\n      box2.innerHTML = \"\";\n      box1.classList.remove(\"unhit\", \"missed\", \"hit\", \"adjacent\");\n      box2.classList.remove(\"unhit\", \"missed\", \"hit\", \"adjacent\");\n      if (\n        player1.gameBoard.board[i][j] === undefined ||\n        typeof player1.gameBoard.board[i][j] === \"object\"\n      ) {\n        box1.classList.add(\"unhit\");\n      } else if (player1.gameBoard.board[i][j] === \"a\") {\n        box1.innerHTML = \"a\";\n        box1.classList.add(\"adjacent\");\n      } else if (player1.gameBoard.board[i][j] === \"o\") {\n        box1.innerHTML = \"o\";\n        box1.classList.add(\"missed\");\n      } else if (player1.gameBoard.board[i][j] === \"x\") {\n        box1.innerHTML = \"x\";\n        box1.classList.add(\"hit\");\n      }\n      if (\n        player2.gameBoard.board[i][j] === undefined ||\n        typeof player2.gameBoard.board[i][j] === \"object\"\n      ) {\n        box2.classList.add(\"unhit\");\n      } else if (player2.gameBoard.board[i][j] === \"a\") {\n        box2.innerHTML = \"a\";\n        box2.classList.add(\"adjacent\");\n      } else if (player2.gameBoard.board[i][j] === \"o\") {\n        box2.innerHTML = \"o\";\n        box2.classList.add(\"missed\");\n      } else if (player2.gameBoard.board[i][j] === \"x\") {\n        box2.innerHTML = \"x\";\n        box2.classList.add(\"hit\");\n      }\n    }\n  }\n}\n\nmodule.exports = { init, renderBoards }; // eslint complains about this when exporting just one function. There are more funcs coming\n\n\n//# sourceURL=webpack://battleship-game/./src/DOMHandler.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\nconst DOMHandler = __webpack_require__(/*! ./DOMHandler */ \"./src/DOMHandler.js\");\nconst script = __webpack_require__(/*! ./scripts */ \"./src/scripts.js\");\n\nwindow.onload = () => {\n  DOMHandler.init();\n  const player1 = script.playerCreator(\"human\");\n  // just placing these manually for now. Will be done by the user later.\n  player1.gameBoard.placeShip(4, 1, 4, \"y\"); // ends in 1, 8\n  player1.gameBoard.placeShip(3, 7, 2, \"x\"); // 9, 2\n  player1.gameBoard.placeShip(3, 3, 1, \"y\"); // 3, 3\n  player1.gameBoard.placeShip(2, 4, 5, \"x\"); // 5, 5\n  player1.gameBoard.placeShip(2, 6, 8, \"x\"); // 7, 8\n  player1.gameBoard.placeShip(2, 1, 9, \"x\"); // 2, 9\n  player1.gameBoard.placeShip(1, 4, 7, \"x\");\n  player1.gameBoard.placeShip(1, 9, 8, \"y\");\n  player1.gameBoard.placeShip(1, 0, 0, \"x\");\n  player1.gameBoard.placeShip(1, 0, 2, \"x\");\n\n  const player2 = script.playerCreator();\n  player2.gameBoard.placeShip(4, 1, 4, \"y\"); // ends in 1, 8\n  player2.gameBoard.placeShip(3, 7, 2, \"x\"); // 9, 2\n  player2.gameBoard.placeShip(3, 3, 1, \"y\"); // 3, 3\n  player2.gameBoard.placeShip(2, 4, 5, \"x\"); // 5, 5\n  player2.gameBoard.placeShip(2, 6, 8, \"x\"); // 7, 8\n  player2.gameBoard.placeShip(2, 1, 9, \"x\"); // 2, 9\n  player2.gameBoard.placeShip(1, 4, 7, \"x\");\n  player2.gameBoard.placeShip(1, 9, 8, \"y\");\n  player2.gameBoard.placeShip(1, 0, 0, \"x\");\n  player2.gameBoard.placeShip(1, 0, 2, \"x\");\n\n  DOMHandler.renderBoards(player1, player2);\n};\n\nfunction hitShip() {}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ hitShip }); // export all funcs later so we can test them.\n\n\n//# sourceURL=webpack://battleship-game/./src/main.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((module) => {

eval("function shipCreator(length) {\n  return {\n    length,\n    hp: length,\n    isSunk: false,\n    hit() {\n      this.hp -= 1;\n      this.checkSunk();\n    },\n    checkSunk() {\n      if (this.hp === 0) {\n        this.isSunk = true;\n      }\n    },\n  };\n}\n\nfunction gameBoardCreator() {\n  const board = Array(10)\n    .fill(undefined)\n    .map(() => Array(10).fill(undefined));\n  return {\n    board,\n    placeShip(shipSize, xCoord, yCoord, direction) {\n      // ship direction is either \"x\" or \"y\"\n      if (\n        (direction === \"x\" && xCoord + shipSize > 10) ||\n        (direction === \"y\" && yCoord + shipSize > 10)\n      ) {\n        throw new Error(\"Ship out of bounds\");\n      } else {\n        for (let i = 0; i < shipSize; i += 1) {\n          if (direction === \"x\" && board[yCoord][xCoord + i] !== undefined) {\n            throw new Error(\"Ship overlaps another ship.\");\n          } else if (\n            direction === \"y\" &&\n            board[yCoord + i][xCoord] !== undefined\n          ) {\n            throw new Error(\"Ship overlaps another ship.\");\n          }\n          for (let j = -1; j <= 1; j += 1) {\n            for (let k = -1; k <= 1; k += 1) {\n              if (\n                yCoord + j >= 0 &&\n                yCoord + j <= 9 &&\n                xCoord + k >= 0 &&\n                xCoord + k <= 9\n              ) {\n                if (\n                  direction === \"x\" &&\n                  board[yCoord + j][xCoord + k + i] !== undefined &&\n                  typeof board[yCoord + j][xCoord + k + i] === \"object\"\n                ) {\n                  throw new Error(\"Ship is next to another ship.\");\n                } else if (\n                  direction === \"y\" &&\n                  board[yCoord + j][xCoord + k + i] !== undefined &&\n                  typeof board[yCoord + j + i][xCoord + k] === \"object\"\n                ) {\n                  throw new Error(\"Ship is next to another ship.\");\n                }\n              }\n            }\n          }\n        }\n        // If gotten this far, ship should be good to place.\n        const ship = shipCreator(shipSize);\n        for (let i = 0; i < shipSize; i += 1) {\n          if (direction === \"x\") {\n            board[yCoord][xCoord + i] = ship;\n          } else {\n            board[yCoord + i][xCoord] = ship;\n          }\n        }\n        return ship;\n      }\n    },\n    // undefined = not hit, \"o\" = miss, \"x\" = hit, \"a\" = adjacent to ship\n    receiveAttack(xCoord, yCoord) {\n      // This function should take in coordinates and mark the board accordingly\n      // hitting an already hit part of the ship should pass the func without executing anything\n      // This takes care of illegal clicks.\n      if (\n        // no need to do anything here.\n        board[yCoord][xCoord] === \"o\" ||\n        board[yCoord][xCoord] === \"x\" ||\n        board[yCoord][xCoord] === \"a\"\n      ) {\n        return false;\n      }\n      if (board[yCoord][xCoord] === undefined) {\n        board[yCoord][xCoord] = \"o\";\n        return true;\n      }\n      if (typeof board[yCoord][xCoord] === \"object\") {\n        board[yCoord][xCoord].hit();\n        this.markAdjacents(xCoord, yCoord);\n        this.checkIfAllSunk();\n        board[yCoord][xCoord] = \"x\";\n        return true;\n      }\n      return false; // should never get here. This is just to shut up eslint.\n    },\n    checkIfAllSunk() {\n      for (let i = 0; i < board.length; i += 1) {\n        for (let j = 0; j < board[i].length; j += 1) {\n          if (board[i][j] !== undefined && board[i][j].isSunk === false) {\n            return false;\n          }\n        }\n      }\n      return true;\n    },\n    markAdjacents(xCoord, yCoord) {\n      for (let i = -1; i <= 1; i += 1) {\n        for (let j = -1; j <= 1; j += 1) {\n          if (\n            yCoord + i >= 0 &&\n            yCoord + i <= 9 &&\n            xCoord + j >= 0 &&\n            xCoord + j <= 9\n          ) {\n            if (\n              board[yCoord + i][xCoord + j] === undefined ||\n              board[yCoord + i][xCoord + j] === \"o\"\n            ) {\n              if (\n                board[yCoord][xCoord].isSunk === false &&\n                i ** 2 !== 0 &&\n                j ** 2 !== 0\n              ) {\n                board[yCoord + i][xCoord + j] = \"a\";\n              } else if (board[yCoord][xCoord].isSunk === true) {\n                board[yCoord + i][xCoord + j] = \"a\";\n              }\n            }\n          }\n        }\n      }\n    },\n  };\n}\n\nfunction playerCreator(type = \"CPU\") {\n  // type is either \"CPU\" or \"human\". Let's just use CPU for default. don't know lol\n  return {\n    type,\n    gameBoard: gameBoardCreator(),\n  };\n}\n\nmodule.exports = { shipCreator, gameBoardCreator, playerCreator };\n\n\n//# sourceURL=webpack://battleship-game/./src/scripts.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;