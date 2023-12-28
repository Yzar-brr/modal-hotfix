/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/modal.js":
/*!*******************************!*\
  !*** ./resources/js/modal.js ***!
  \*******************************/
/***/ (() => {

window.LivewireUIModal = function () {
  return {
    show: false,
    showActiveComponent: true,
    activeComponent: false,
    componentHistory: [],
    modalWidth: null,
    getActiveComponentModalAttribute: function getActiveComponentModalAttribute(key) {
      if (this.$wire.get('components')[this.activeComponent] !== undefined) {
        return this.$wire.get('components')[this.activeComponent]['modalAttributes'][key];
      }
    },
    closeModalOnEscape: function closeModalOnEscape(trigger) {
      if (this.getActiveComponentModalAttribute('closeOnEscape') === false) {
        return;
      }
      var force = this.getActiveComponentModalAttribute('closeOnEscapeIsForceful') === true;
      this.closeModal(force);
    },
    closeModalOnClickAway: function closeModalOnClickAway(trigger) {
      if (this.getActiveComponentModalAttribute('closeOnClickAway') === false) {
        return;
      }
      this.closeModal(true);
    },
    closeModal: function closeModal() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var skipPreviousModals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var destroySkipped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.show === false) {
        return;
      }
      if (this.getActiveComponentModalAttribute('dispatchCloseEvent') === true) {
        var componentName = this.$wire.get('components')[this.activeComponent].name;
        Livewire.emit('modalClosed', componentName);
      }
      if (this.getActiveComponentModalAttribute('destroyOnClose') === true) {
        Livewire.emit('destroyComponent', this.activeComponent);
      }
      if (skipPreviousModals > 0) {
        for (var i = 0; i < skipPreviousModals; i++) {
          if (destroySkipped) {
            var _id = this.componentHistory[this.componentHistory.length - 1];
            Livewire.emit('destroyComponent', _id);
          }
          this.componentHistory.pop();
        }
      }
      var id = this.componentHistory.pop();
      if (id && force === false) {
        if (id) {
          this.setActiveModalComponent(id, true);
        } else {
          this.setShowPropertyTo(false);
        }
      } else {
        this.setShowPropertyTo(false);
      }
    },
    setActiveModalComponent: function setActiveModalComponent(id) {
      var _this = this;
      var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.setShowPropertyTo(true);
      if (this.activeComponent === id) {
        return;
      }
      if (this.activeComponent !== false && skip === false) {
        this.componentHistory.push(this.activeComponent);
      }
      var focusableTimeout = 50;
      if (this.activeComponent === false) {
        this.activeComponent = id;
        this.showActiveComponent = true;
        this.modalWidth = this.getActiveComponentModalAttribute('maxWidthClass');
      } else {
        this.showActiveComponent = false;
        focusableTimeout = 400;
        setTimeout(function () {
          _this.activeComponent = id;
          _this.showActiveComponent = true;
          _this.modalWidth = _this.getActiveComponentModalAttribute('maxWidthClass');
        }, 300);
      }
    },
    setShowPropertyTo: function setShowPropertyTo(show) {
      var _this2 = this;
      this.show = show;
      if (show) {
        document.body.classList.add('overflow-y-hidden');
      } else {
        document.body.classList.remove('overflow-y-hidden');
        setTimeout(function () {
          _this2.activeComponent = false;
          _this2.$wire.resetState();
        }, 300);
      }
    },
    init: function init() {
      var _this3 = this;
      this.modalWidth = this.getActiveComponentModalAttribute('maxWidthClass');
      Livewire.on('closeModal', function () {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var skipPreviousModals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var destroySkipped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        _this3.closeModal(force, skipPreviousModals, destroySkipped);
      });
      Livewire.on('activeModalComponentChanged', function (id) {
        _this3.setActiveModalComponent(id);
      });
    }
  };
};

/***/ }),

/***/ "./resources/css/modal.css":
/*!*********************************!*\
  !*** ./resources/css/modal.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/modal": 0,
/******/ 			"public/modal": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/modal"], () => (__webpack_require__("./resources/js/modal.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/modal"], () => (__webpack_require__("./resources/css/modal.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;