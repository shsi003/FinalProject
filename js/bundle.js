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

/***/ "./js/components/fetchBooks.js":
/*!*************************************!*\
  !*** ./js/components/fetchBooks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchBooks: () => (/* binding */ fetchBooks)\n/* harmony export */ });\nasync function fetchBooks() {\n  try {\n    const resonse = await fetch('https://www.googleapis.com/books/v1/categories');\n    if (!response.ok) {\n      throw new Error(error);\n    }\n    const books = await response.json();\n    return books;\n  } catch (error) {\n    console.error('Error fetching categories:', error);\n  }\n  ;\n}\n\n//# sourceURL=webpack://finalproject/./js/components/fetchBooks.js?");

/***/ }),

/***/ "./js/components/searchBooks.js":
/*!**************************************!*\
  !*** ./js/components/searchBooks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchBooks: () => (/* binding */ searchBooks)\n/* harmony export */ });\nasync function searchBooks(query) {\n  try {\n    const resonse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);\n    if (!response.ok) {\n      throw new Error(error);\n    }\n    const data = await response.json();\n    return data.items;\n  } catch (error) {\n    console.error('Error fetching books:', error);\n  }\n}\n\n//# sourceURL=webpack://finalproject/./js/components/searchBooks.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_fetchBooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fetchBooks.js */ \"./js/components/fetchBooks.js\");\n/* harmony import */ var _components_searchBooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/searchBooks.js */ \"./js/components/searchBooks.js\");\n\n\n(0,_components_fetchBooks_js__WEBPACK_IMPORTED_MODULE_0__.fetchBooks)().then(books => {\n  console.log('Fetched books', books);\n}).catch(error => {\n  console.error('Error fetching books:', error);\n});\n\n//# sourceURL=webpack://finalproject/./js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;