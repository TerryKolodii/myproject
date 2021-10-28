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

/***/ "./assets/webpack-logo.png":
/*!*********************************!*\
  !*** ./assets/webpack-logo.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"47692505d122dbcae490be2492a60b2e.png\");\n\n//# sourceURL=webpack:///./assets/webpack-logo.png?");

/***/ }),

/***/ "./styled/styles.css":
/*!***************************!*\
  !*** ./styled/styles.css ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nValidationError: Invalid options object. Mini CSS Extract Plugin Loader has been initialized using an options object that does not match the API schema.\\n - options has an unknown property 'reloadAll'. These properties are valid:\\n   object { publicPath?, emit?, esModule?, layer? }\\n    at validate (/home/user/Projects/drupal-starter/drupal-starter/web/themes/custom/news/node_modules/schema-utils/dist/validate.js:105:11)\\n    at Object.getOptions (/home/user/Projects/drupal-starter/drupal-starter/web/themes/custom/news/node_modules/webpack/lib/NormalModule.js:575:19)\\n    at Object.pitch (/home/user/Projects/drupal-starter/drupal-starter/web/themes/custom/news/node_modules/mini-css-extract-plugin/dist/loader.js:38:24)\");\n\n//# sourceURL=webpack:///./styled/styles.css?");

/***/ }),

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\nclass Post {\n  constructor(title, img) {\n    this.title = title\n    this.img = img\n    this.dare = new Date()\n  }\n\n  toString() {\n    return JSON.stringify({\n      title: this.title,\n      date: this.date.toJSON(),\n      img: this.img\n      })\n  }\n\n  get uppercaseTitle() {\n    return this.title.toUpperCase()\n  }\n}\n\n\n//# sourceURL=webpack:///./Post.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ \"./Post.js\");\n/* harmony import */ var _assets_json_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/json.json */ \"./assets/json.json\");\n/* harmony import */ var _assets_webpack_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/webpack-logo.png */ \"./assets/webpack-logo.png\");\n/* harmony import */ var _styled_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/styles.css */ \"./styled/styles.css\");\n/* harmony import */ var _styled_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst post = new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Webpack Post Title', _assets_webpack_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\nconsole.log('Post to String:', post.toString())\n\nconsole.log('JSON:',_assets_json_json__WEBPACK_IMPORTED_MODULE_1__)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"I am JSON title\"}');\n\n//# sourceURL=webpack:///./assets/json.json?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;