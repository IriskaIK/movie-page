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

/***/ "./app/config.js":
/*!***********************!*\
  !*** ./app/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = '55687841d1704641de203beca1d8debe';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  searchMovieUrl: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`\n});\n\n//# sourceURL=webpack:///./app/config.js?");

/***/ }),

/***/ "./app/disableScroll.js":
/*!******************************!*\
  !*** ./app/disableScroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"disableScroll\": () => (/* binding */ disableScroll),\n/* harmony export */   \"enableScroll\": () => (/* binding */ enableScroll)\n/* harmony export */ });\nfunction disableScroll() {\n  document.body.classList.add(\"stop-scrolling\");\n}\n\nfunction enableScroll() {\n  document.body.classList.remove(\"stop-scrolling\");\n}\n\n\n\n//# sourceURL=webpack:///./app/disableScroll.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movie_getMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie/getMovies */ \"./app/movie/getMovies.js\");\n/* harmony import */ var _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie/movieClassCard */ \"./app/movie/movieClassCard.js\");\n/* harmony import */ var _disableScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disableScroll */ \"./app/disableScroll.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const search = document.querySelector('.search-input ');\n  const movie_inner = document.querySelector('.movie-container');\n  const grey_bg = document.querySelector('.grey-bg');\n  search.addEventListener('input', e => {\n    const text = e.target.value;\n    movie_inner.innerHTML = '';\n\n    if (text) {\n      fetch((0,_movie_getMovies__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text)).then(r => r.json()).then(r => {\n        r.results.forEach(element => {\n          let card = new _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element);\n          card.renderCard(movie_inner);\n        });\n      });\n    }\n  });\n  movie_inner.addEventListener('click', e => {\n    if (document.querySelector('.select')) {} else {\n      if (e.target.className == 'movie' || e.target.parentElement.className == 'movie') {\n        (0,_disableScroll__WEBPACK_IMPORTED_MODULE_2__.disableScroll)();\n        let select_card;\n        console.log('click');\n        movie_inner.style.marginRight = `17px`;\n\n        if (e.target.parentElement.className == 'movie') {\n          select_card = e.target.parentElement.cloneNode(true);\n          e.target.parentElement.classList.add('op_1');\n        } else {\n          select_card = e.target.cloneNode(true);\n          e.target.classList.add('op_1');\n        }\n\n        select_card.style.top = `${window.scrollY + 130}px`;\n        select_card.classList.add('select');\n        movie_inner.append(select_card);\n\n        if (grey_bg.style.display != 'block') {\n          grey_bg.style.display = 'block';\n          grey_bg.style.zIndex = '1';\n        }\n\n        select_card.style.zIndex = '1';\n      }\n    }\n  });\n  grey_bg.addEventListener('click', e => {\n    console.log('grey');\n    movie_inner.style.marginRight = '0px';\n    (0,_disableScroll__WEBPACK_IMPORTED_MODULE_2__.enableScroll)();\n    grey_bg.style.display = 'none';\n    let op_card = document.querySelector('.op_1');\n    op_card.classList.remove('op_1');\n    document.querySelector('.select').remove();\n  });\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/movie/getMovies.js":
/*!********************************!*\
  !*** ./app/movie/getMovies.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMovies)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./app/config.js\");\n\nfunction getMovies(text) {\n  return _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchMovieUrl + text;\n}\n\n//# sourceURL=webpack:///./app/movie/getMovies.js?");

/***/ }),

/***/ "./app/movie/movieClassCard.js":
/*!*************************************!*\
  !*** ./app/movie/movieClassCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieCard)\n/* harmony export */ });\nclass MovieCard {\n  constructor(data) {\n    this.html = document.createElement('div');\n    this.html.className = 'movie';\n    this.img = new Image();\n    this.img.classList.add('img', 'loader');\n    this.img.addEventListener('load', () => {\n      let s = this.html.querySelector('.loader');\n      s.className = 'img';\n    });\n    this.html.append(this.img);\n\n    if (data.poster_path) {\n      this.img.src = `https://www.themoviedb.org/t/p/w250_and_h141_face${data.poster_path}`;\n    } else {\n      this.img.src = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';\n    }\n\n    this.html.innerHTML = this.html.innerHTML + `\n            <div class=\"title\">${data.title}</div>\n            <div class=\"orig_title\">${data.original_title}</div>\n            <div class=\"overview\">${data.overview}</div>\n            <div class=\"bottom_text\">\n                <div class=\"date\">${data.release_date}</div>\n                <div class=\"average\">${data.vote_average}</div>\n            </div>`;\n  }\n\n  renderCard(query) {\n    query.append(this.html);\n  }\n\n}\n\n//# sourceURL=webpack:///./app/movie/movieClassCard.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;