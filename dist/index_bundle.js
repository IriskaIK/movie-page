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

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movie_getMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie/getMovies */ \"./app/movie/getMovies.js\");\n/* harmony import */ var _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie/movieClassCard */ \"./app/movie/movieClassCard.js\");\n/* harmony import */ var _movie_MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie/MovieList */ \"./app/movie/MovieList.js\");\n/* harmony import */ var _movie_renderCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie/renderCards */ \"./app/movie/renderCards.js\");\n/* harmony import */ var _movie_selectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/selectCard */ \"./app/movie/selectCard.js\");\n/* harmony import */ var _sortMovie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sortMovie */ \"./app/sortMovie.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const search = document.querySelector('.search-input ');\n  const movie_inner = document.querySelector('.movie-container');\n  const grey_bg = document.querySelector('.grey-bg');\n  const sort_bar = document.querySelector('.sort_inner');\n  search.addEventListener('input', e => {\n    const text = e.target.value;\n    movie_inner.innerHTML = '';\n\n    if (text) {\n      (0,_movie_getMovies__WEBPACK_IMPORTED_MODULE_0__.getMovies)(text, _movie_MovieList__WEBPACK_IMPORTED_MODULE_2__.CreateMovieList, _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).then(r => {\n        (0,_movie_renderCards__WEBPACK_IMPORTED_MODULE_3__.renderCards)(r, movie_inner);\n      });\n    }\n  });\n  sort_bar.addEventListener('click', e => {\n    if (e.target.classList.contains('nav_item')) {\n      if (e.target.classList.contains('max_sort')) {\n        movie_inner.innerHTML = '';\n        (0,_movie_getMovies__WEBPACK_IMPORTED_MODULE_0__.getMovies)(document.querySelector('.search-input').value, _movie_MovieList__WEBPACK_IMPORTED_MODULE_2__.CreateMovieList, _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).then(r => {\n          r = (0,_sortMovie__WEBPACK_IMPORTED_MODULE_5__.sortByMaxRating)(r);\n          return r;\n        }).then(r => {\n          (0,_movie_renderCards__WEBPACK_IMPORTED_MODULE_3__.renderCards)(r, movie_inner);\n        });\n      } else if (e.target.classList.contains('min_sort')) {\n        movie_inner.innerHTML = '';\n        (0,_movie_getMovies__WEBPACK_IMPORTED_MODULE_0__.getMovies)(document.querySelector('.search-input').value, _movie_MovieList__WEBPACK_IMPORTED_MODULE_2__.CreateMovieList, _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).then(r => {\n          r = (0,_sortMovie__WEBPACK_IMPORTED_MODULE_5__.sortByMinRating)(r);\n          return r;\n        }).then(r => {\n          (0,_movie_renderCards__WEBPACK_IMPORTED_MODULE_3__.renderCards)(r, movie_inner);\n        });\n      } else if (e.target.classList.contains('date_old_sort')) {\n        movie_inner.innerHTML = '';\n        (0,_movie_getMovies__WEBPACK_IMPORTED_MODULE_0__.getMovies)(document.querySelector('.search-input').value, _movie_MovieList__WEBPACK_IMPORTED_MODULE_2__.CreateMovieList, _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).then(r => {\n          r = (0,_sortMovie__WEBPACK_IMPORTED_MODULE_5__.sortByOld)(r);\n          return r;\n        }).then(r => {\n          (0,_movie_renderCards__WEBPACK_IMPORTED_MODULE_3__.renderCards)(r, movie_inner);\n        });\n      } else if (e.target.classList.contains('date_new_sort')) {\n        movie_inner.innerHTML = '';\n        (0,_movie_getMovies__WEBPACK_IMPORTED_MODULE_0__.getMovies)(document.querySelector('.search-input').value, _movie_MovieList__WEBPACK_IMPORTED_MODULE_2__.CreateMovieList, _movie_movieClassCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).then(r => {\n          r = (0,_sortMovie__WEBPACK_IMPORTED_MODULE_5__.sortByNew)(r);\n          return r;\n        }).then(r => {\n          (0,_movie_renderCards__WEBPACK_IMPORTED_MODULE_3__.renderCards)(r, movie_inner);\n        });\n      }\n    }\n  });\n  (0,_movie_selectCard__WEBPACK_IMPORTED_MODULE_4__.selectCard)(movie_inner, grey_bg);\n  (0,_movie_selectCard__WEBPACK_IMPORTED_MODULE_4__.unselectCard)(movie_inner, grey_bg);\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/movie/MovieList.js":
/*!********************************!*\
  !*** ./app/movie/MovieList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateMovieList\": () => (/* binding */ CreateMovieList)\n/* harmony export */ });\nfunction CreateMovieList(arrOfCards, MovieCardClass) {\n  let movie_list = [];\n  arrOfCards.results.forEach(element => {\n    let card = new MovieCardClass(element);\n    movie_list.push(card);\n  });\n  return movie_list;\n}\n\n\n\n//# sourceURL=webpack:///./app/movie/MovieList.js?");

/***/ }),

/***/ "./app/movie/disableScroll.js":
/*!************************************!*\
  !*** ./app/movie/disableScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"disableScroll\": () => (/* binding */ disableScroll),\n/* harmony export */   \"enableScroll\": () => (/* binding */ enableScroll)\n/* harmony export */ });\nfunction disableScroll() {\n  document.body.classList.add(\"stop-scrolling\");\n}\n\nfunction enableScroll() {\n  document.body.classList.remove(\"stop-scrolling\");\n}\n\n\n\n//# sourceURL=webpack:///./app/movie/disableScroll.js?");

/***/ }),

/***/ "./app/movie/getMovies.js":
/*!********************************!*\
  !*** ./app/movie/getMovies.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./app/config.js\");\n\n\nfunction getMovies(text, CreateMovieList, MovieCard) {\n  return fetch(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchMovieUrl + text).then(r => r.json()).then(r => {\n    return r = CreateMovieList(r, MovieCard);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/movie/getMovies.js?");

/***/ }),

/***/ "./app/movie/movieClassCard.js":
/*!*************************************!*\
  !*** ./app/movie/movieClassCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieCard)\n/* harmony export */ });\nclass MovieCard {\n  constructor(data) {\n    this.html = document.createElement('div');\n    this.html.className = 'movie';\n    this.average = data.vote_average;\n    this.img = new Image();\n    this.date = data.release_date;\n    this.img.classList.add('img', 'loader');\n    this.img.addEventListener('load', () => {\n      let s = this.html.querySelector('.loader');\n      s.className = 'img';\n    });\n    this.html.append(this.img);\n\n    if (data.poster_path) {\n      this.img.src = `https://www.themoviedb.org/t/p/w250_and_h141_face${data.poster_path}`;\n    } else {\n      this.img.src = 'https://mizez.com/custom/mizez/img/general/no-image-available.png';\n    }\n\n    this.html.innerHTML = this.html.innerHTML + `\n            <div class=\"title\">${data.title}</div>\n            <div class=\"orig_title\">${data.original_title}</div>\n            <div class=\"overview\">${data.overview}</div>\n            <div class=\"bottom_text\">\n                <div class=\"date\">${data.release_date}</div>\n                <div class=\"average\">${data.vote_average}</div>\n            </div>`;\n  }\n\n  getHtml() {\n    return this.html;\n  }\n\n  getVote_average() {\n    return this.average;\n  }\n\n  getDate() {\n    return this.date;\n  }\n\n}\n\n//# sourceURL=webpack:///./app/movie/movieClassCard.js?");

/***/ }),

/***/ "./app/movie/renderCards.js":
/*!**********************************!*\
  !*** ./app/movie/renderCards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCards\": () => (/* binding */ renderCards)\n/* harmony export */ });\nfunction renderCards(movie_list, selector) {\n  movie_list.forEach(element => {\n    selector.append(element.getHtml());\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/movie/renderCards.js?");

/***/ }),

/***/ "./app/movie/selectCard.js":
/*!*********************************!*\
  !*** ./app/movie/selectCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectCard\": () => (/* binding */ selectCard),\n/* harmony export */   \"unselectCard\": () => (/* binding */ unselectCard)\n/* harmony export */ });\n/* harmony import */ var _disableScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disableScroll */ \"./app/movie/disableScroll.js\");\n\n\nfunction selectCard(area, bg) {\n  area.addEventListener('click', e => {\n    if (document.querySelector('.select')) {} else {\n      if (e.target.className == 'movie' || e.target.parentElement.className == 'movie') {\n        (0,_disableScroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();\n        let select_card;\n        area.style.marginRight = `17px`;\n\n        if (e.target.parentElement.className == 'movie') {\n          select_card = e.target.parentElement.cloneNode(true);\n          e.target.parentElement.classList.add('op_1');\n        } else {\n          select_card = e.target.cloneNode(true);\n          e.target.classList.add('op_1');\n        }\n\n        select_card.style.top = `${window.scrollY + 130}px`;\n        select_card.classList.add('select');\n        area.append(select_card);\n\n        if (bg.style.display != 'block') {\n          bg.style.display = 'block';\n          bg.style.zIndex = '1';\n        }\n\n        select_card.style.zIndex = '1';\n      }\n    }\n  });\n}\n\nfunction unselectCard(area, bg) {\n  bg.addEventListener('click', e => {\n    area.style.marginRight = '0px';\n    (0,_disableScroll__WEBPACK_IMPORTED_MODULE_0__.enableScroll)();\n    bg.style.display = 'none';\n    let op_card = document.querySelector('.op_1');\n    op_card.classList.remove('op_1');\n    document.querySelector('.select').remove();\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/movie/selectCard.js?");

/***/ }),

/***/ "./app/sortMovie.js":
/*!**************************!*\
  !*** ./app/sortMovie.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByMaxRating\": () => (/* binding */ sortByMaxRating),\n/* harmony export */   \"sortByMinRating\": () => (/* binding */ sortByMinRating),\n/* harmony export */   \"sortByNew\": () => (/* binding */ sortByNew),\n/* harmony export */   \"sortByOld\": () => (/* binding */ sortByOld)\n/* harmony export */ });\nfunction sortByMaxRating(data) {\n  data.sort((a, b) => {\n    if (parseFloat(a.getVote_average()) < parseFloat(b.getVote_average())) {\n      console.log(a.vote_average);\n      return 1;\n    } else if (parseFloat(a.getVote_average()) > parseFloat(b.getVote_average())) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n  return data;\n}\n\nfunction sortByMinRating(data) {\n  data.sort((a, b) => {\n    if (parseFloat(a.getVote_average()) > parseFloat(b.getVote_average())) {\n      console.log(a.vote_average);\n      return 1;\n    } else if (parseFloat(a.getVote_average()) < parseFloat(b.getVote_average())) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n  return data;\n}\n\nfunction sortByOld(data) {\n  data.sort((a, b) => {\n    if (new Date(a.getDate()) > new Date(b.getDate())) {\n      return 1;\n    } else if (new Date(a.getDate()) < new Date(b.getDate())) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n  return data;\n}\n\nfunction sortByNew(data) {\n  data.sort((a, b) => {\n    if (new Date(a.getDate()) < new Date(b.getDate())) {\n      return 1;\n    } else if (new Date(a.getDate()) > new Date(b.getDate())) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n  return data;\n}\n\n\n\n//# sourceURL=webpack:///./app/sortMovie.js?");

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