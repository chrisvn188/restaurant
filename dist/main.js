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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/default */ \"./src/modules/default.js\");\n/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/events */ \"./src/modules/events.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\n\n\n(function () {\n  (0,_modules_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_modules_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_events__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage() {\n  const content = document.querySelector('#content');\n  const aboutSection = document.createElement('section');\n  aboutSection.classList.add('tab-content', 'about-section');\n\n  const aboutHeading = document.createElement('h2');\n  aboutHeading.classList.add('about-heading');\n  aboutHeading.textContent = 'ABOUT US';\n  aboutSection.appendChild(aboutHeading);\n\n  const aboutFlex = document.createElement('div');\n  aboutFlex.classList.add('about-flex');\n\n  const storyText = document.createElement('p');\n  storyText.classList.add('about-flex-item', 'story-text');\n  storyText.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n  when an unknown printer took a galley of type and scrambled it to make a type \n  specimen book. It has survived not only five centuries, but also the leap.`;\n  aboutFlex.appendChild(storyText);\n\n  const storyImg = document.createElement('img');\n  storyImg.classList.add('about-flex-item', 'story-img');\n  storyImg.setAttribute('src', './images/hero.jpg');\n  aboutFlex.appendChild(storyImg);\n  aboutSection.appendChild(aboutFlex);\n\n  content.appendChild(aboutSection);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/default.js":
/*!********************************!*\
  !*** ./src/modules/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadDefault)\n/* harmony export */ });\nfunction loadDefault() {\n  const content = document.querySelector('#content');\n  const header = document.createElement('header');\n  header.classList.add('header');\n\n  // create wrapper element\n  const navWrapper = document.createElement('div');\n  navWrapper.classList.add('nav-wrapper');\n\n  // create header logo\n  const logo = document.createElement('span');\n  logo.classList.add('header-logo');\n  logo.textContent = 'Coffenergy';\n  navWrapper.appendChild(logo);\n\n  // create navigation bar\n  const headerNav = document.createElement('nav');\n  headerNav.classList.add('header-nav');\n  headerNav.innerHTML = `\n    <div class=\"btn active\">Home</div>\n    <div class=\"btn menu\">Menu</div>\n    <div class=\"btn\">About</div>\n  `;\n  navWrapper.appendChild(headerNav);\n  header.appendChild(navWrapper);\n  content.appendChild(header);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/default.js?");

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleEvents)\n/* harmony export */ });\nfunction handleEvents() {\n  const homeMenuBtn = document.querySelector('.home-menu-btn');\n  const menuBtn = document.querySelector('.menu');\n  const menuBtns = document.querySelectorAll('.btn');\n  const homeContent = document.querySelector('.hero-section');\n  const menuContent = document.querySelector('.menu-section');\n  const aboutContent = document.querySelector('.about-section');\n  const tabContents = document.querySelectorAll('.tab-content');\n\n  // when menu btn from home clicked, render menu page\n  homeMenuBtn.addEventListener('click', () => {\n    tabContents.forEach(content => content.classList.remove('active'));\n    menuBtns.forEach(btn => {\n      btn.classList.remove('active');\n    });\n    menuBtn.classList.add('active');\n    menuContent.classList.add('active');\n  });\n\n  // when btns from nav bar clicked, render the appropriate content\n  menuBtns.forEach(btn =>\n    btn.addEventListener('click', e => {\n      const currentActiveTab = Array.from(menuBtns).find(btn =>\n        btn.classList.contains('active')\n      );\n      currentActiveTab.classList.remove('active');\n      e.target.classList.add('active');\n      const currentActiveContent = Array.from(tabContents).find(content =>\n        content.classList.contains('active')\n      );\n      currentActiveContent.classList.remove('active');\n      if (e.target && e.target.textContent === 'Home') {\n        homeContent.classList.add('active');\n      }\n      if (e.target && e.target.textContent === 'Menu') {\n        menuContent.classList.add('active');\n      }\n      if (e.target && e.target.textContent === 'About') {\n        aboutContent.classList.add('active');\n      }\n    })\n  );\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/events.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n  const content = document.querySelector('#content');\n  const heroSection = document.createElement('section');\n  heroSection.classList.add('tab-content', 'hero-section', 'active');\n\n  const heroIntro = document.createElement('div');\n  heroIntro.classList.add('hero-intro');\n  heroIntro.innerHTML = `\n    <h1>DRINK COFFEE, FEEL ENERGY<br>100% HANDMADE COFFEE</h1>\n  `;\n  const homeMenuBtn = document.createElement('div');\n  homeMenuBtn.classList.add('home-menu-btn');\n  homeMenuBtn.textContent = 'Menu';\n  heroIntro.appendChild(homeMenuBtn);\n  heroSection.appendChild(heroIntro);\n  content.appendChild(heroSection);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  const ItemFactory = function (title, src) {\n    return { title, src };\n  };\n\n  const items = [];\n\n  const cappuccino = ItemFactory('Cappuchino', './images/cappuccino.jpg');\n  const expresso = ItemFactory('Expresso', './images/expresso.jpg');\n  const eggCoffee = ItemFactory('Egg Coffee', './images/egg-coffee.jpg');\n  const matchaLatte = ItemFactory('Matcha Latte', './images/matcha-latte.jpg');\n  const coconutCoffee = ItemFactory(\n    'Coconut Coffee',\n    './images/coconut-coffee.jpg'\n  );\n  const vietnameseCoffee = ItemFactory(\n    'Vietnamese Coffee',\n    './images/vietnamese-coffee.jpg'\n  );\n\n  items.push(\n    cappuccino,\n    expresso,\n    eggCoffee,\n    matchaLatte,\n    coconutCoffee,\n    vietnameseCoffee\n  );\n\n  const content = document.querySelector('#content');\n\n  // menu section\n  const menuSection = document.createElement('section');\n  menuSection.classList.add('tab-content', 'menu-section');\n\n  // menu heading\n  const menuHeading = document.createElement('h2');\n  menuHeading.classList.add('menu-heading');\n  menuHeading.textContent = 'OUR MENU';\n\n  // menu grid\n  const menuGrid = document.createElement('div');\n  menuGrid.classList.add('menu-grid');\n\n  for (let i = 0; i < items.length; i++) {\n    const menuCard = document.createElement('div');\n    menuCard.classList.add('menu-card');\n\n    const cardTitle = document.createElement('div');\n    cardTitle.classList.add('card-title');\n    cardTitle.textContent = `${items[i].title}`;\n\n    const cardImg = document.createElement('img');\n    cardImg.classList.add('card-img');\n    cardImg.setAttribute('src', `${items[i].src}`);\n\n    menuCard.appendChild(cardTitle);\n    menuCard.appendChild(cardImg);\n    menuGrid.appendChild(menuCard);\n  }\n  menuSection.appendChild(menuHeading);\n  menuSection.appendChild(menuGrid);\n  content.appendChild(menuSection);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;