(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("esm1/lib-esm/Hammer.js"), require("esm1/lib-esm/Box-node.js"));
	else if(typeof define === 'function' && define.amd)
		define("MyEsm2", ["esm1/lib-esm/Hammer.js", "esm1/lib-esm/Box-node.js"], factory);
	else if(typeof exports === 'object')
		exports["MyEsm2"] = factory(require("esm1/lib-esm/Hammer.js"), require("esm1/lib-esm/Box-node.js"));
	else
		root["MyEsm2"] = factory(root["esm1/lib-esm/Hammer.js"], root["esm1/lib-esm/Box-node.js"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_esm1_lib_esm_Hammer_js__, __WEBPACK_EXTERNAL_MODULE_esm1_lib_esm_Box_node_js__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "esm1/lib-esm/Box-node.js":
/*!*******************************************!*\
  !*** external "esm1/lib-esm/Box-node.js" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_esm1_lib_esm_Box_node_js__;

/***/ }),

/***/ "esm1/lib-esm/Hammer.js":
/*!*****************************************!*\
  !*** external "esm1/lib-esm/Hammer.js" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_esm1_lib_esm_Hammer_js__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interop": () => (/* binding */ Interop)
/* harmony export */ });
/* harmony import */ var esm1_lib_esm_Hammer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esm1/lib-esm/Hammer.js */ "esm1/lib-esm/Hammer.js");
/* harmony import */ var esm1_lib_esm_Hammer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(esm1_lib_esm_Hammer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var esm1_lib_esm_Box_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esm1/lib-esm/Box-node.js */ "esm1/lib-esm/Box-node.js");
/* harmony import */ var esm1_lib_esm_Box_node_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(esm1_lib_esm_Box_node_js__WEBPACK_IMPORTED_MODULE_1__);


class Interop {
    constructor() {
    }
    doSomethingWithEsm1() {
        console.log("Into doSomethingWithEsm5");
        const p = new esm1_lib_esm_Hammer_js__WEBPACK_IMPORTED_MODULE_0__.Hammer("blue");
        console.log(p);
        const box = new esm1_lib_esm_Box_node_js__WEBPACK_IMPORTED_MODULE_1__.Box("studio");
        box.addObject(p);
        console.log(box);
        box.getFile("http://skies.esac.esa.int/Herschel/PACS-color/properties").then((data) => console.log(data));
    }
}
const ip = new Interop();
ip.doSomethingWithEsm1();

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=my-lib.js.map