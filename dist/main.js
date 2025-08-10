/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
}


.form-container {
    display: grid;
    place-content: center;
    justify-content: center;
    margin-top: 20px;
}

form {
    height: 250px;
    margin: 10px;
    padding: 10px;
    display: grid;
    place-items: center;
    text-align: center;
}

form > button, .place-ship {
    width: 4rem;
    height: 2rem;
    background-color: white;
    color: black;
    border: 1px solid red;
}

form > button:hover, .place-ship:hover {
    background-color: red;
    color: white;
} 

.game-container {
   display: none;
   grid-template-columns: 1fr 1fr 1fr;
   place-content: center;
   place-items: center;
   margin-top: 10px;
   
}


.p1-container {
    grid-column: 1;
}

.announcement {
    grid-column: 2;
}

.p2-container {
    grid-column: 3;
}

.p1-container, .p2-container {
    display: grid;
    gap: 10px;
}

.boards {
    display: grid;
    width: 500px;
    height: 500px;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}

.ship-placement{
    display: flex;
    justify-content: center;
    gap: 10px;
}

.vertical-dock {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100px;
    gap: 10px;
}

.horizontal-dock {
    display: grid;
    gap: 10px;
}

/* .vertical-dock {
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px, 150px));
    width: 50px;
} */

.battleship-vertical-height {
    height: 199px;
   
}

.cruiser-submarine-vertical-height {
    height: 150px;
   
}

.destroyer-vertical-height {
    height: 100px;
}

/*  */
.carrier-horizontal-height {
    display: flex;
    width: auto;
    height: 50px;
    gap: 1.5px;
}

.battleship-horizontal-height {
    display: flex;
    width: 190px;
    height: 50px;
    gap: 1.5px;
}

.cruiser-submarine-horizontal-height {
    display: flex;
    width: 150px;
    height: 50px;
    gap: 1.5px;
}

.destroyer-horizontal-height {
    display: flex;
    width: 100px;
    height: 50px;
    gap: 1.5px;
}


.shipment {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    background: blue;
}

.shipment-valid {
    background-color: green;
}

.shipment-invalid {
    background-color: red;
}


.cell-computer {
    pointer-events: none
}

.cell-human, .cell-computer  {
    /* background-color: aliceblue; */
    background: thistle;
    border: 1px solid white;
}

.hide-btn, .create-ship {
    display: none;
}

.ship {
    background-color: blue;
}

.hit {
    background-color: blanchedalmond;
}

.sink {
    background-color: red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;;AAGA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;GACG,aAAa;GACb,kCAAkC;GAClC,qBAAqB;GACrB,mBAAmB;GACnB,gBAAgB;;AAEnB;;;AAGA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;;;GAKG;;AAEH;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;AACjB;;AAEA,KAAK;AACL;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI;AACJ;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\n\n\n.form-container {\n    display: grid;\n    place-content: center;\n    justify-content: center;\n    margin-top: 20px;\n}\n\nform {\n    height: 250px;\n    margin: 10px;\n    padding: 10px;\n    display: grid;\n    place-items: center;\n    text-align: center;\n}\n\nform > button, .place-ship {\n    width: 4rem;\n    height: 2rem;\n    background-color: white;\n    color: black;\n    border: 1px solid red;\n}\n\nform > button:hover, .place-ship:hover {\n    background-color: red;\n    color: white;\n} \n\n.game-container {\n   display: none;\n   grid-template-columns: 1fr 1fr 1fr;\n   place-content: center;\n   place-items: center;\n   margin-top: 10px;\n   \n}\n\n\n.p1-container {\n    grid-column: 1;\n}\n\n.announcement {\n    grid-column: 2;\n}\n\n.p2-container {\n    grid-column: 3;\n}\n\n.p1-container, .p2-container {\n    display: grid;\n    gap: 10px;\n}\n\n.boards {\n    display: grid;\n    width: 500px;\n    height: 500px;\n    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n}\n\n.ship-placement{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.vertical-dock {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    width: 100px;\n    gap: 10px;\n}\n\n.horizontal-dock {\n    display: grid;\n    gap: 10px;\n}\n\n/* .vertical-dock {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(100px, 150px));\n    width: 50px;\n} */\n\n.battleship-vertical-height {\n    height: 199px;\n   \n}\n\n.cruiser-submarine-vertical-height {\n    height: 150px;\n   \n}\n\n.destroyer-vertical-height {\n    height: 100px;\n}\n\n/*  */\n.carrier-horizontal-height {\n    display: flex;\n    width: auto;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.battleship-horizontal-height {\n    display: flex;\n    width: 190px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.cruiser-submarine-horizontal-height {\n    display: flex;\n    width: 150px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n.destroyer-horizontal-height {\n    display: flex;\n    width: 100px;\n    height: 50px;\n    gap: 1.5px;\n}\n\n\n.shipment {\n    height: 50px;\n    width: 50px;\n    border: 1px solid black;\n    background: blue;\n}\n\n.shipment-valid {\n    background-color: green;\n}\n\n.shipment-invalid {\n    background-color: red;\n}\n\n\n.cell-computer {\n    pointer-events: none\n}\n\n.cell-human, .cell-computer  {\n    /* background-color: aliceblue; */\n    background: thistle;\n    border: 1px solid white;\n}\n\n.hide-btn, .create-ship {\n    display: none;\n}\n\n.ship {\n    background-color: blue;\n}\n\n.hit {\n    background-color: blanchedalmond;\n}\n\n.sink {\n    background-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/module/board/board.ts":
/*!***********************************!*\
  !*** ./src/module/board/board.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameBoard: () => (/* binding */ createGameBoard)
/* harmony export */ });
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ship/ship */ "./src/module/ship/ship.ts");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index */ "./src/module/lib/index.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index */ "./src/module/board/utils/index.ts");



const BOARD_LEN = 10;
class GameBoard {
    _ocean;
    _virtualOcean;
    _attackedCoords;
    _dock;
    _deployedShips;
    constructor() {
        this._ocean = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.createBoard)(BOARD_LEN, () => null);
        this._virtualOcean = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.createBoard)(BOARD_LEN, (row, col) => [row, col]);
        this._attackedCoords = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.createBoard)(BOARD_LEN, () => null);
        this._dock = [];
        this._deployedShips = [];
    }
    initShips = (blueprints) => {
        blueprints.forEach(({ name, length }) => {
            if (this._dock.find((s) => s.name === name && s.length === length)) {
                throw Error(`You can only have a one type of ${name} with length of ${length}`);
            }
            this._dock.push((0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)({ name, length }));
        });
    };
    placeShip = (ship, row, col, dir) => {
        if (!(0,_lib_index__WEBPACK_IMPORTED_MODULE_1__.validPosition)(ship, row, col, dir, this._ocean))
            return false;
        for (let i = 0; i < ship.length; i += 1) {
            const [r, c] = dir === "horizontal" ? [row, col + i] : [row + i, col];
            (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.ensureRow)(this._ocean, r)[c] = ship;
            ship.positions = { row: r, col: c };
        }
        this._dock = this._dock.filter((s) => !(s.name === ship.name && s.length === ship.length));
        if (!this._deployedShips.includes(ship)) {
            this._deployedShips.push(ship);
        }
        return true;
    };
    receivedAtk = (row, col) => {
        const MISS = 0;
        const HIT = 1;
        if (this._attackedCoords[row]?.[col] !== null)
            return "already";
        const currentShip = this._ocean[row]?.[col];
        if (!currentShip?.isShip()) {
            (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.ensureRow)(this._attackedCoords, row)[col] = MISS;
            return "miss";
        }
        currentShip.hit();
        (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.ensureRow)(this._attackedCoords, row)[col] = HIT;
        return "hit";
    };
    allShipsSunk = () => this._deployedShips
        .map((ship) => ship.isSunk())
        .every((hasSunk) => hasSunk === true);
    get ocean() {
        return this._ocean;
    }
    get virtualOcean() {
        return this._virtualOcean;
    }
    get dock() {
        return this._dock;
    }
    get deployedShips() {
        return this._deployedShips;
    }
    get attackedCoords() {
        return this._attackedCoords;
    }
}
const createGameBoard = () => new GameBoard();
const t = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.createBoard)(BOARD_LEN, () => Math.random() > 0.5 ? null : (0,_ship_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)({ name: "cruiser", length: 5 }));


/***/ }),

/***/ "./src/module/board/utils/create-board.ts":
/*!************************************************!*\
  !*** ./src/module/board/utils/create-board.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard)
/* harmony export */ });
const createBoard = (length, fn) => Array.from({ length }, (_, row) => Array.from({ length }, (_, col) => fn(row, col)));


/***/ }),

/***/ "./src/module/board/utils/ensure-row.ts":
/*!**********************************************!*\
  !*** ./src/module/board/utils/ensure-row.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureRow: () => (/* binding */ ensureRow)
/* harmony export */ });
const ensureRow = (arr, row) => arr[row] ?? (arr[row] = []);


/***/ }),

/***/ "./src/module/board/utils/index.ts":
/*!*****************************************!*\
  !*** ./src/module/board/utils/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* reexport safe */ _create_board__WEBPACK_IMPORTED_MODULE_0__.createBoard),
/* harmony export */   ensureRow: () => (/* reexport safe */ _ensure_row__WEBPACK_IMPORTED_MODULE_1__.ensureRow)
/* harmony export */ });
/* harmony import */ var _create_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-board */ "./src/module/board/utils/create-board.ts");
/* harmony import */ var _ensure_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ensure-row */ "./src/module/board/utils/ensure-row.ts");




/***/ }),

/***/ "./src/module/dom/controller.ts":
/*!**************************************!*\
  !*** ./src/module/dom/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domController: () => (/* binding */ domController)
/* harmony export */ });
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ "./src/module/game/game.ts");
/* harmony import */ var _create_announcement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-announcement */ "./src/module/dom/create-announcement.ts");
/* harmony import */ var _create_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-direction */ "./src/module/dom/create-direction.ts");
/* harmony import */ var _create_dom_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-dom-state */ "./src/module/dom/create-dom-state.ts");
/* harmony import */ var _init_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-game */ "./src/module/dom/init-game.ts");
/* harmony import */ var _ship_portage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship-portage */ "./src/module/dom/ship-portage.ts");






const domController = () => {
    const root = document.getElementById("root");
    if (!root)
        throw new Error("No root element found");
    const gameController = (0,_game_game__WEBPACK_IMPORTED_MODULE_0__.createGame)();
    const gameContainer = (0,_init_game__WEBPACK_IMPORTED_MODULE_4__.initGame)(gameController);
    const announcement = (0,_create_announcement__WEBPACK_IMPORTED_MODULE_1__.createAnnouncement)();
    const direction = (0,_create_direction__WEBPACK_IMPORTED_MODULE_2__.createDirection)(announcement);
    const shipPlacement = (0,_ship_portage__WEBPACK_IMPORTED_MODULE_5__.createShipPlacement)(direction);
    const domState = (0,_create_dom_state__WEBPACK_IMPORTED_MODULE_3__.createDomState)(gameController);
    root.appendChild(announcement);
    root.appendChild(gameContainer);
    return { gameController, domState, shipPlacement };
};


/***/ }),

/***/ "./src/module/dom/create-announcement.ts":
/*!***********************************************!*\
  !*** ./src/module/dom/create-announcement.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnnouncement: () => (/* binding */ createAnnouncement)
/* harmony export */ });
const createAnnouncement = () => {
    const container = document.createElement("div");
    container.classList.add("announcement");
    const error = document.createElement("div");
    error.classList.add("error");
    const winner = document.createElement("div");
    winner.classList.add("success");
    container.appendChild(error);
    container.appendChild(winner);
    return container;
};


/***/ }),

/***/ "./src/module/dom/create-direction.ts":
/*!********************************************!*\
  !*** ./src/module/dom/create-direction.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDirection: () => (/* binding */ createDirection)
/* harmony export */ });
const createDirection = (parent) => {
    const directionContainer = document.createElement("div");
    const shipPlacement = document.createElement("div");
    directionContainer.classList.add("direction");
    shipPlacement.classList.add("ship-placement");
    const label = document.createElement("label");
    const startBtn = document.createElement("button");
    startBtn.classList.add("place-ship");
    label.textContent = "Choose a direction:";
    startBtn.textContent = "start";
    const directionSelect = document.createElement("select");
    const values = ["vertical", "horizontal"];
    values.forEach((val) => {
        const option = document.createElement("option");
        option.value = val;
        directionSelect.appendChild(option);
    });
    label.appendChild(directionSelect);
    directionContainer.appendChild(label);
    shipPlacement.appendChild(startBtn);
    parent.appendChild(directionContainer);
    parent.appendChild(shipPlacement);
    return { directionContainer, shipPlacement, startBtn, directionSelect };
};


/***/ }),

/***/ "./src/module/dom/create-dock.ts":
/*!***************************************!*\
  !*** ./src/module/dom/create-dock.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDock: () => (/* binding */ createDock)
/* harmony export */ });
/* harmony import */ var _player_data_blueprints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player/data/blueprints */ "./src/module/player/data/blueprints.ts");

const createDock = () => {
    const dock = document.createElement("div");
    dock.classList.add("vertical-dock");
    const ships = _player_data_blueprints__WEBPACK_IMPORTED_MODULE_0__.shipBluePrints.map(({ name, length }, i) => {
        const ship = document.createElement("div");
        ship.classList.add("vertical-dir");
        ship.setAttribute("data-name", name);
        ship.setAttribute("data-length", length.toString());
        ship.setAttribute("data-index", i.toString());
        ship.draggable = true;
        const btns = Array.from({ length }, () => {
            const btn = document.createElement("button");
            btn.classList.add("shipment");
            return btn;
        });
        ship.append(...btns);
        dock.appendChild(ship);
        return ship;
    });
    return { dock, ships };
};


/***/ }),

/***/ "./src/module/dom/create-dom-state.ts":
/*!********************************************!*\
  !*** ./src/module/dom/create-dom-state.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDomState: () => (/* binding */ createDomState),
/* harmony export */   gameOver: () => (/* reexport safe */ _game_over__WEBPACK_IMPORTED_MODULE_3__.gameOver),
/* harmony export */   updateScreen: () => (/* reexport safe */ _update_screen__WEBPACK_IMPORTED_MODULE_2__.updateScreen)
/* harmony export */ });
/* harmony import */ var _get_ocean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-ocean */ "./src/module/dom/get-ocean.ts");
/* harmony import */ var _play_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-logic */ "./src/module/dom/play-logic.ts");
/* harmony import */ var _update_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-screen */ "./src/module/dom/update-screen.ts");
/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-over */ "./src/module/dom/game-over.ts");




const createDomState = (gameController) => {
    const playerOneOCean = (0,_get_ocean__WEBPACK_IMPORTED_MODULE_0__.getOcean)(gameController.playerOne.id);
    const playerOneOTwo = (0,_get_ocean__WEBPACK_IMPORTED_MODULE_0__.getOcean)(gameController.playerTwo.id);
    playerOneOCean.addEventListener("click", (e) => {
        (0,_play_logic__WEBPACK_IMPORTED_MODULE_1__.playLogic)(e, gameController);
    });
    playerOneOTwo.addEventListener("click", (e) => {
        (0,_play_logic__WEBPACK_IMPORTED_MODULE_1__.playLogic)(e, gameController);
    });
};


/***/ }),

/***/ "./src/module/dom/create-ocean.ts":
/*!****************************************!*\
  !*** ./src/module/dom/create-ocean.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOcean: () => (/* binding */ createOcean)
/* harmony export */ });
const createOcean = (player) => {
    const container = document.createElement("div");
    const oceanContainer = document.createElement("div");
    container.setAttribute("id", `${player.id}-container`);
    oceanContainer.setAttribute("id", `${player.id}-ocean`);
    oceanContainer.setAttribute("class", "oceans");
    player.board.virtualOcean
        .flatMap((c) => c)
        .forEach(([row, col]) => {
        const colCell = document.createElement("button");
        colCell.setAttribute("data-row", row.toString());
        colCell.setAttribute("data-col", col.toString());
        colCell.classList.add(`cell-${player.id}`);
        colCell.classList.add("drop-target");
        oceanContainer.appendChild(colCell);
    });
    container.appendChild(oceanContainer);
    return container;
};


/***/ }),

/***/ "./src/module/dom/game-over.ts":
/*!*************************************!*\
  !*** ./src/module/dom/game-over.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameOver: () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _update_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-screen */ "./src/module/dom/update-screen.ts");

const gameOver = (gameController) => {
    if (!gameController.isGameOver)
        return;
    const winContainer = document.querySelector(".winner");
    const p = document.createElement("p");
    const winner = gameController.winner?.name;
    p.textContent = `Winner: ${winner}`;
    winContainer?.appendChild(p);
    (0,_update_screen__WEBPACK_IMPORTED_MODULE_0__.disableOcean)(gameController.playerOne);
    (0,_update_screen__WEBPACK_IMPORTED_MODULE_0__.disableOcean)(gameController.playerTwo);
};


/***/ }),

/***/ "./src/module/dom/get-ocean.ts":
/*!*************************************!*\
  !*** ./src/module/dom/get-ocean.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOcean: () => (/* binding */ getOcean)
/* harmony export */ });
const getOcean = (id) => {
    const ocean = document.getElementById(`${id}-ocean`);
    if (!ocean) {
        throw new Error("Ocean does not exist");
    }
    return ocean;
};


/***/ }),

/***/ "./src/module/dom/init-game.ts":
/*!*************************************!*\
  !*** ./src/module/dom/init-game.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGame: () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _create_ocean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-ocean */ "./src/module/dom/create-ocean.ts");

const createGameContainer = (game) => {
    const container = document.createElement("div");
    container.setAttribute("id", "game-container");
    const playerOne = document.createElement("div");
    playerOne.setAttribute("id", "player-one");
    const playerTwo = document.createElement("div");
    playerTwo.setAttribute("id", "player-two");
    const playerOneName = document.createElement("p");
    playerOneName.textContent = game.playerOne.name;
    const playerTwoName = document.createElement("p");
    playerTwoName.textContent = game.playerTwo.name;
    const playerOneOCean = (0,_create_ocean__WEBPACK_IMPORTED_MODULE_0__.createOcean)(game.playerOne);
    const playerTwoOCean = (0,_create_ocean__WEBPACK_IMPORTED_MODULE_0__.createOcean)(game.playerTwo);
    playerOne.appendChild(playerOneOCean);
    playerTwo.appendChild(playerTwoOCean);
    container.appendChild(playerOne);
    container.appendChild(playerTwo);
    return container;
};
const initGame = (gameController) => {
    const gameContainer = createGameContainer(gameController);
    return gameContainer;
};


/***/ }),

/***/ "./src/module/dom/play-logic.ts":
/*!**************************************!*\
  !*** ./src/module/dom/play-logic.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playLogic: () => (/* binding */ playLogic)
/* harmony export */ });
/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-over */ "./src/module/dom/game-over.ts");
/* harmony import */ var _update_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-screen */ "./src/module/dom/update-screen.ts");


const playLogic = async (e, gameController) => {
    const target = e?.target;
    if (!target)
        return;
    const { row } = target.dataset;
    const { col } = target.dataset;
    try {
        if (gameController.isGameOver)
            return (0,_game_over__WEBPACK_IMPORTED_MODULE_0__.gameOver)(gameController);
        if (row !== undefined && col !== undefined) {
            if (target.classList.contains("hit") ||
                target.classList.contains("boards")) {
                return false;
            }
            const parent = target.parentNode;
            if (!parent)
                return;
            (0,_update_screen__WEBPACK_IMPORTED_MODULE_1__.disableOcean)(gameController.currentPlayer);
            await gameController.playerOneInput(+row, +col);
            await gameController.playerTwoInput();
            (0,_update_screen__WEBPACK_IMPORTED_MODULE_1__.updateScreen)(gameController);
            (0,_update_screen__WEBPACK_IMPORTED_MODULE_1__.enableOcean)(gameController.currentPlayer);
            return;
        }
        const error = Error("you clicked the board frame");
        throw error;
    }
    catch (error) {
        return error;
    }
};


/***/ }),

/***/ "./src/module/dom/ship-portage.ts":
/*!****************************************!*\
  !*** ./src/module/dom/ship-portage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShipPlacement: () => (/* binding */ createShipPlacement)
/* harmony export */ });
/* harmony import */ var _lib_is_valid_direciton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/is-valid-direciton */ "./src/module/lib/is-valid-direciton.ts");
/* harmony import */ var _lib_valid_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/valid-position */ "./src/module/lib/valid-position.ts");
/* harmony import */ var _create_dock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-dock */ "./src/module/dom/create-dock.ts");
/* harmony import */ var _ship_visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship-visibility */ "./src/module/dom/ship-visibility.ts");




const createShipPlacement = (DTO) => (player, enemyId, random) => {
    if (random) {
        player.autoPlaceShips();
        return;
    }
    const controller = new AbortController();
    const { signal, abort } = controller;
    const { directionContainer, startBtn, directionSelect } = DTO;
    startBtn?.addEventListener("click", () => {
        startBtn.classList.add("hide-btn");
        const ships = document.querySelectorAll(`.cell-${enemyId}`);
        ships.forEach((ship) => {
            ship.style.pointerEvents = "auto";
        });
    }, { signal });
    let dragged = null;
    const { dock, ships } = (0,_create_dock__WEBPACK_IMPORTED_MODULE_2__.createDock)();
    directionSelect?.addEventListener("click", (e) => {
        const classPos = {
            carrier: "carrier-horizontal-height",
            battleship: "battleship-horizontal-height",
            cruiser: "cruiser-submarine-horizontal-height",
            destroyer: "destroyer-horizontal-height",
        };
        const target = e.target;
        if (target.value === "horizontal") {
            dock.classList.remove("vertical-dock");
            dock.classList.add("horizontal-dock");
        }
        else {
            dock.classList.add("vertical-dock");
            dock.classList.remove("horizontal-dock");
        }
        const queue = [...ships];
        while (queue.length !== 0) {
            const current = queue[0];
            if (typeof current === "undefined")
                continue;
            const shipName = current.dataset?.name;
            const pos = shipName
                ? classPos[shipName]
                : null;
            if (!pos)
                continue;
            queue.shift();
            current.classList.add(pos);
        }
    }, { signal });
    dock.addEventListener("dragstart", (e) => {
        const parent = e.target.parentNode;
        const children = parent.children;
        const target = e.target;
        const selectedChild = children.namedItem(target.dataset.name ?? "");
        if (selectedChild) {
            dragged = selectedChild;
        }
    }, { signal });
    const targetOcean = document.querySelector(`${player.id}-ocean`);
    if (!targetOcean)
        throw new Error(`player ocean with ID of ${player.id} is not found`);
    targetOcean.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, { signal });
    targetOcean.addEventListener("dragenter", () => { });
    targetOcean.addEventListener("dragleave", () => { });
    targetOcean.addEventListener("drop", (e) => {
        if (!dragged)
            return;
        const target = e.target;
        const parent = dragged.parentNode;
        const child = dragged;
        const row = Number(target.dataset.row);
        const col = Number(target.dataset.col);
        const index = Number(dragged.dataset.index);
        const ship = player.board.deployedShips[index];
        if (!ship?.isShip()) {
            throw new Error(`Invalid ship: ${dragged.dataset.name}`);
        }
        const direction = ["vertical", "horizontal"].find((dir) => dir === directionSelect.value.toLowerCase()) ?? "";
        if (!(0,_lib_is_valid_direciton__WEBPACK_IMPORTED_MODULE_0__.isValidDirection)(direction)) {
            throw new Error(`invalid direction of ${directionSelect.value}; expected either "horizontal" or "vertical"`);
        }
        if (!(0,_lib_valid_position__WEBPACK_IMPORTED_MODULE_1__.validPosition)(ship, row, col, direction, player.board.ocean))
            return false;
        player.board.placeShip(ship, row, col, direction);
        parent?.removeChild(child);
        if (parent?.children.length === 0) {
            startBtn.classList.remove("hide-btn");
            startBtn.classList.add("show");
            directionContainer.style.display = "none";
            abort("all ships deployed");
        }
        return (0,_ship_visibility__WEBPACK_IMPORTED_MODULE_3__.showShips)(player);
    }, { signal });
};


/***/ }),

/***/ "./src/module/dom/ship-visibility.ts":
/*!*******************************************!*\
  !*** ./src/module/dom/ship-visibility.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideShips: () => (/* binding */ hideShips),
/* harmony export */   showShips: () => (/* binding */ showShips)
/* harmony export */ });
const showShips = (player) => player.board.deployedShips.map((ship) => {
    const { row, col } = ship.positions;
    const cell = document.querySelector(`.cell-${player.id}[data-row"${row}"][data-col"${col}"]`);
    if (!cell)
        return;
    cell.classList.add("ship");
    return cell;
});
const hideShips = (player) => player.board.deployedShips.map((ship) => {
    const { row, col } = ship.positions;
    const cell = document.querySelector(`.cell-${player.id}[data-row"${row}"][data-col"${col}"]`);
    if (!cell)
        return;
    cell.classList.remove("ship");
    return cell;
});


/***/ }),

/***/ "./src/module/dom/update-screen.ts":
/*!*****************************************!*\
  !*** ./src/module/dom/update-screen.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableOcean: () => (/* binding */ disableOcean),
/* harmony export */   enableOcean: () => (/* binding */ enableOcean),
/* harmony export */   renderAttackedCoords: () => (/* binding */ renderAttackedCoords),
/* harmony export */   renderSunkShips: () => (/* binding */ renderSunkShips),
/* harmony export */   updateScreen: () => (/* binding */ updateScreen)
/* harmony export */ });
const renderAttackedCoords = (player) => {
    player.board.attackedCoords.forEach((row, rIndex) => {
        row.forEach((col, cIndex) => {
            const cell = document.querySelector(`.cell-${player.id}[data-row="${rIndex}"][data-col="${cIndex}"]`);
            if (!cell)
                return;
            if (!cell.classList.contains("hit") && col === 0) {
                cell.textContent = "miss";
                cell.classList.add("hit");
            }
            if (col === 1) {
                cell.textContent = "hit";
                cell.classList.add("hit");
            }
        });
    });
};
const renderSunkShips = (player) => {
    const sunkShips = player.board.deployedShips.filter((ship) => ship.isSunk());
    sunkShips.forEach((ship) => {
        const { row, col } = ship.positions;
        const cell = document.querySelector(`.cell-${player.id}[data-row="${row}"][data-col="${col}"]`);
        cell?.classList.add("sink");
    });
};
const disableOcean = (player) => {
    const container = document.querySelector(`${player.id}-container`);
    if (!container) {
        throw new Error(`Ocean of player with ID of ${player.id} does not exist`);
    }
    container?.childNodes.forEach((c) => {
        const node = c;
        node.style.pointerEvents = "none";
    });
    container.style.pointerEvents = "none";
};
const enableOcean = (player) => {
    const container = document.querySelector(`${player.id}-container`);
    if (!container) {
        throw new Error(`Ocean of player with ID of ${player.id} does not exist`);
    }
    container?.childNodes.forEach((c) => {
        const node = c;
        node.style.pointerEvents = "auto";
    });
    container.style.pointerEvents = "auto";
};
const updateScreen = (gameController) => {
    const { playerOne, playerTwo } = gameController;
    renderAttackedCoords(playerOne);
    renderAttackedCoords(playerTwo);
    renderSunkShips(playerOne);
    renderSunkShips(playerTwo);
};


/***/ }),

/***/ "./src/module/game/game.ts":
/*!*********************************!*\
  !*** ./src/module/game/game.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGame: () => (/* binding */ createGame)
/* harmony export */ });
/* harmony import */ var _board_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board/board */ "./src/module/board/board.ts");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player */ "./src/module/player/player.ts");
/* harmony import */ var _player_data_blueprints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/data/blueprints */ "./src/module/player/data/blueprints.ts");
/* harmony import */ var _lib_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/wait */ "./src/module/lib/wait.ts");




class Game {
    _isGameOver;
    _winner;
    _playerOneBoard;
    _playerTwoBoard;
    _playerOne;
    _playerTwo;
    _currentPlayer;
    /**
     *
     */
    constructor() {
        this._isGameOver = false;
        this._winner = null;
        this._playerOneBoard = (0,_board_board__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)();
        this._playerTwoBoard = (0,_board_board__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)();
        this._playerOne = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)({
            name: "Player One",
            board: this._playerOneBoard,
            enemyBoard: this._playerTwoBoard,
            blueprints: _player_data_blueprints__WEBPACK_IMPORTED_MODULE_2__.shipBluePrints,
        });
        this._playerTwo = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)({
            name: "Player Two",
            board: this._playerTwoBoard,
            enemyBoard: this._playerOneBoard,
            blueprints: _player_data_blueprints__WEBPACK_IMPORTED_MODULE_2__.shipBluePrints,
        });
        this._currentPlayer = this._playerOne;
    }
    switchPlayer() {
        if (this._currentPlayer.name === this._playerOne.name) {
            this._currentPlayer = this._playerTwo;
            return this._currentPlayer;
        }
        this._currentPlayer = this._playerOne;
        return this._currentPlayer;
    }
    async playerOneInput(row, col) {
        if (this.isGameOver) {
            return;
        }
        await (0,_lib_wait__WEBPACK_IMPORTED_MODULE_3__.wait)(2000);
        if (row && col) {
            this._playerOne.atkEnemy(row, col);
        }
        else {
            this._playerOne.autoAtk();
        }
        if (this._playerTwo.board.allShipsSunk()) {
            this._isGameOver = true;
            this._winner = this._playerOne;
            return;
        }
        this.switchPlayer();
    }
    async playerTwoInput(row, col) {
        if (this.isGameOver) {
            return;
        }
        await (0,_lib_wait__WEBPACK_IMPORTED_MODULE_3__.wait)(2000);
        if (row && col) {
            this._playerTwo.atkEnemy(row, col);
        }
        else {
            this._playerTwo.autoAtk();
        }
        if (this._playerTwo.board.allShipsSunk()) {
            this._isGameOver = true;
            this._winner = this._playerTwo;
            return;
        }
        this.switchPlayer();
    }
    get playerOne() {
        return this._playerOne;
    }
    get playerTwo() {
        return this._playerTwo;
    }
    get currentPlayer() {
        return this._currentPlayer;
    }
    get isGameOver() {
        return this._isGameOver;
    }
    get winner() {
        return this._winner;
    }
}
const createGame = () => new Game();


/***/ }),

/***/ "./src/module/lib/index.ts":
/*!*********************************!*\
  !*** ./src/module/lib/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDirection: () => (/* reexport safe */ _is_valid_direciton__WEBPACK_IMPORTED_MODULE_2__.isValidDirection),
/* harmony export */   shuffleArray: () => (/* reexport safe */ _shuffle_array__WEBPACK_IMPORTED_MODULE_1__.shuffleArray),
/* harmony export */   validPosition: () => (/* reexport safe */ _valid_position__WEBPACK_IMPORTED_MODULE_0__.validPosition),
/* harmony export */   wait: () => (/* reexport safe */ _wait__WEBPACK_IMPORTED_MODULE_3__.wait)
/* harmony export */ });
/* harmony import */ var _valid_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valid-position */ "./src/module/lib/valid-position.ts");
/* harmony import */ var _shuffle_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shuffle-array */ "./src/module/lib/shuffle-array.ts");
/* harmony import */ var _is_valid_direciton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-valid-direciton */ "./src/module/lib/is-valid-direciton.ts");
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait */ "./src/module/lib/wait.ts");






/***/ }),

/***/ "./src/module/lib/is-valid-direciton.ts":
/*!**********************************************!*\
  !*** ./src/module/lib/is-valid-direciton.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDirection: () => (/* binding */ isValidDirection)
/* harmony export */ });
const isValidDirection = (dir) => {
    return (dir === "horizontal" || dir === "vertical");
};


/***/ }),

/***/ "./src/module/lib/shuffle-array.ts":
/*!*****************************************!*\
  !*** ./src/module/lib/shuffle-array.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shuffleArray: () => (/* binding */ shuffleArray)
/* harmony export */ });
const shuffleArray = (arr) => arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);


/***/ }),

/***/ "./src/module/lib/valid-position.ts":
/*!******************************************!*\
  !*** ./src/module/lib/valid-position.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validPosition: () => (/* binding */ validPosition)
/* harmony export */ });
const validPosition = (ship, row, col, dir, ocean) => {
    for (let i = 0; i < ship.length; i += 1) {
        if (dir === "horizontal") {
            if (col + i > 9 || !ocean[row] || ocean[row][col + i]?.isShip())
                return false;
        }
        else {
            if (row + i > 9 || !ocean[row + i] || ocean[row + i]?.[col]?.isShip())
                return false;
        }
    }
    return true;
};


/***/ }),

/***/ "./src/module/lib/wait.ts":
/*!********************************!*\
  !*** ./src/module/lib/wait.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wait: () => (/* binding */ wait)
/* harmony export */ });
const wait = (ms) => new Promise((r) => {
    setTimeout(r, ms);
});


/***/ }),

/***/ "./src/module/player/data/blueprints.ts":
/*!**********************************************!*\
  !*** ./src/module/player/data/blueprints.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shipBluePrints: () => (/* binding */ shipBluePrints)
/* harmony export */ });
const shipBluePrints = [
    {
        name: "carrier",
        length: 5,
    },
    {
        name: "battleship",
        length: 4,
    },
    {
        name: "cruiser",
        length: 3,
    },
    {
        name: "submarine",
        length: 3,
    },
    {
        name: "destroyer",
        length: 2,
    },
];


/***/ }),

/***/ "./src/module/player/player.ts":
/*!*************************************!*\
  !*** ./src/module/player/player.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _board_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board/board */ "./src/module/board/board.ts");
/* harmony import */ var _lib_shuffle_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/shuffle-array */ "./src/module/lib/shuffle-array.ts");
/* harmony import */ var _lib_valid_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/valid-position */ "./src/module/lib/valid-position.ts");



class Player {
    _id;
    _name;
    _board;
    _enemyBoard;
    _validCoords;
    /**
     *
     */
    constructor(DTO) {
        this._id = crypto.randomUUID();
        this._name = DTO.name;
        this._board = DTO.board;
        this._enemyBoard = DTO.enemyBoard;
        this._board.initShips(DTO.blueprints);
        this._validCoords = DTO.enemyBoard.virtualOcean.flatMap((v) => v.map((v) => v));
    }
    atkEnemy(row, col) {
        return this._enemyBoard.receivedAtk(row, col);
    }
    autoPlaceShips() {
        const queue = [...this._board.dock];
        while (queue.length !== 0) {
            const currentShip = queue[0];
            if (!currentShip?.isShip())
                return false;
            const randomRow = Math.floor(Math.random() * 9);
            const randomCol = Math.floor(Math.random() * 9);
            const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
            if ((0,_lib_valid_position__WEBPACK_IMPORTED_MODULE_2__.validPosition)(currentShip, randomRow, randomCol, direction, this.board.ocean)) {
                this._board.placeShip(currentShip, randomRow, randomCol, direction);
                queue.shift();
            }
        }
    }
    autoAtk() {
        this._validCoords = (0,_lib_shuffle_array__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)(this._validCoords);
        if (!this._validCoords.length)
            return "already";
        const coords = this._validCoords.shift();
        if (!coords)
            return "miss";
        const [row, col] = coords;
        return this._enemyBoard.receivedAtk(row, col);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get board() {
        return this._board;
    }
}
const createPlayer = (DTO) => new Player(DTO);
// export default function Player(
//   name: string,
//   board: TGameBoard,
//   enemyBoard: TGameBoard,
//   isComputer = false,
// ) {
//   const playerName = !isComputer ? name : "Computer";
// const validCoords = enemyBoard.virtualOcean.flatMap((v) => v.map((v) => v));
//   const { dock } = board;
//   const initShips = () => {
//     board.initShips(shipBluePrints);
//   };
//   const placeShip = (
//     isRandom: boolean,
//     DTO?: { ship: TShip; row: number; col: number; dir: TDirection },
//   ) => {
//     if (isRandom || !DTO) {
// const queue = [...dock];
// while (queue.length !== 0) {
//   const currentShip = queue[0];
//   if (!isShip(currentShip)) return false;
//   const randomRow = Math.floor(Math.random() * 9);
//   const randomCol = Math.floor(Math.random() * 9);
//   const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
//         if (
//           validPosition(
//             currentShip,
//             randomRow,
//             randomCol,
//             direction,
//             enemyBoard.ocean,
//           )
//         ) {
//           board.placeShip(currentShip, randomRow, randomCol, direction);
//           queue.shift();
//         }
//       }
//       return true;
//     }
//     return board.placeShip(DTO.ship, DTO.row, DTO.col, DTO.dir);
//   };
//   const atkEnemy = (row: number, col: number) => {
//     if (
//       row &&
//       col &&
//       !Number.isNaN(Number(enemyBoard.attackedCoords?.[row]?.[col]))
//     )
//       return false;
//     if (isComputer) {
//   const availableIndex = validCoords.filter(
//     ([row, col]) => enemyBoard.attackedCoords?.[row]?.[col] !== null,
//   );
//   const coords =
//     availableIndex[Math.floor(Math.random() * availableIndex.length)];
//   if (!coords) return false;
//   enemyBoard.receivedAtk(coords[0], coords[1]);
//   return true;
// }
// enemyBoard.receivedAtk(row, col);
//     return true;
//   };
//   return Object.freeze({
//     isComputer() {
//       return isComputer;
//     },
//     getName() {
//       return playerName;
//     },
//     getOcean() {
//       return board.ocean;
//     },
//     getDock() {
//       return dock;
//     },
//     atkEnemy,
//     initShips,
//     placeShip,
//   });
// }


/***/ }),

/***/ "./src/module/ship/ship.ts":
/*!*********************************!*\
  !*** ./src/module/ship/ship.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });
class Ship {
    _health;
    _name;
    _length;
    _positions;
    isShip() {
        return this instanceof Ship;
    }
    constructor(DTO) {
        this._name = DTO.name;
        this._length = DTO.length;
        this._health = DTO.length;
        this._positions = { row: -1, col: -1 };
    }
    get name() {
        return this._name;
    }
    get length() {
        return this._length;
    }
    get health() {
        return this._health;
    }
    get positions() {
        return this._positions;
    }
    set positions(p) {
        this._positions = p;
    }
    hit = () => {
        if (this.isSunk())
            return false;
        this._health -= 1;
        return true;
    };
    resetHealth = () => {
        this._health = this._length;
    };
    isSunk = () => {
        if (this._health < this.length)
            return true;
        return false;
    };
}
const createShip = (DTO) => new Ship(DTO);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_dom_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/dom/controller */ "./src/module/dom/controller.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import "./module/dom/game-container";


const ctr = (0,_module_dom_controller__WEBPACK_IMPORTED_MODULE_0__.domController)();
const gameController = ctr.gameController;
console.log(42);
ctr.shipPlacement(gameController.playerOne, gameController.playerTwo.id, false);
ctr.shipPlacement(gameController.playerTwo, gameController.playerOne.id, true);
ctr.domState;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL2JvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL3V0aWxzL2NyZWF0ZS1ib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9ib2FyZC91dGlscy9lbnN1cmUtcm93LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtYW5ub3VuY2VtZW50LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtZGlyZWN0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtZG9jay50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vY3JlYXRlLWRvbS1zdGF0ZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vY3JlYXRlLW9jZWFuLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9nYW1lLW92ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2dldC1vY2Vhbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vaW5pdC1nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9wbGF5LWxvZ2ljLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9zaGlwLXBvcnRhZ2UudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL3NoaXAtdmlzaWJpbGl0eS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vdXBkYXRlLXNjcmVlbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvbGliL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi9pcy12YWxpZC1kaXJlY2l0b24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvbGliL3NodWZmbGUtYXJyYXkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvbGliL3ZhbGlkLXBvc2l0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi93YWl0LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL3BsYXllci9kYXRhL2JsdWVwcmludHMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvcGxheWVyL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9zaGlwL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZvcm0ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSA+IGJ1dHRvbiwgLnBsYWNlLXNoaXAge1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5mb3JtID4gYnV0dG9uOmhvdmVyLCAucGxhY2Utc2hpcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0gXG5cbi5nYW1lLWNvbnRhaW5lciB7XG4gICBkaXNwbGF5OiBub25lO1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgXG59XG5cblxuLnAxLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5hbm5vdW5jZW1lbnQge1xuICAgIGdyaWQtY29sdW1uOiAyO1xufVxuXG4ucDItY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMztcbn1cblxuLnAxLWNvbnRhaW5lciwgLnAyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5ib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTBweCwgMWZyKSk7XG59XG5cbi5zaGlwLXBsYWNlbWVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnZlcnRpY2FsLWRvY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaG9yaXpvbnRhbC1kb2NrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLyogLnZlcnRpY2FsLWRvY2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDEwMHB4LCAxNTBweCkpO1xuICAgIHdpZHRoOiA1MHB4O1xufSAqL1xuXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTk5cHg7XG4gICBcbn1cblxuLmNydWlzZXItc3VibWFyaW5lLXZlcnRpY2FsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgIFxufVxuXG4uZGVzdHJveWVyLXZlcnRpY2FsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLyogICovXG4uY2Fycmllci1ob3Jpem9udGFsLWhlaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuLmJhdHRsZXNoaXAtaG9yaXpvbnRhbC1oZWlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBnYXA6IDEuNXB4O1xufVxuXG4uY3J1aXNlci1zdWJtYXJpbmUtaG9yaXpvbnRhbC1oZWlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBnYXA6IDEuNXB4O1xufVxuXG4uZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZ2FwOiAxLjVweDtcbn1cblxuXG4uc2hpcG1lbnQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuXG4uc2hpcG1lbnQtdmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uc2hpcG1lbnQtaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5cbi5jZWxsLWNvbXB1dGVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxufVxuXG4uY2VsbC1odW1hbiwgLmNlbGwtY29tcHV0ZXIgIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXG4gICAgYmFja2dyb3VuZDogdGhpc3RsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmhpZGUtYnRuLCAuY3JlYXRlLXNoaXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuLnNpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0dBQ0csYUFBYTtHQUNiLGtDQUFrQztHQUNsQyxxQkFBcUI7R0FDckIsbUJBQW1CO0dBQ25CLGdCQUFnQjs7QUFFbkI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLEtBQUs7QUFDTDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbiwgLnBsYWNlLXNoaXAge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbmZvcm0gPiBidXR0b246aG92ZXIsIC5wbGFjZS1zaGlwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgIFxcbn1cXG5cXG5cXG4ucDEtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbi5hbm5vdW5jZW1lbnQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnAyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4ucDEtY29udGFpbmVyLCAucDItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udmVydGljYWwtZG9jayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1kb2NrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiAudmVydGljYWwtZG9jayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTAwcHgsIDE1MHB4KSk7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn0gKi9cXG5cXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDE5OXB4O1xcbiAgIFxcbn1cXG5cXG4uY3J1aXNlci1zdWJtYXJpbmUtdmVydGljYWwtaGVpZ2h0IHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICBcXG59XFxuXFxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4uY2Fycmllci1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcbi5iYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcbi5jcnVpc2VyLXN1Ym1hcmluZS1ob3Jpem9udGFsLWhlaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMS41cHg7XFxufVxcblxcblxcbi5zaGlwbWVudCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4uc2hpcG1lbnQtdmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXBtZW50LWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5jZWxsLWNvbXB1dGVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG59XFxuXFxuLmNlbGwtaHVtYW4sIC5jZWxsLWNvbXB1dGVyICB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG4gICAgYmFja2dyb3VuZDogdGhpc3RsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5oaWRlLWJ0biwgLmNyZWF0ZS1zaGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5zaW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHR5cGUgeyBHZXRSZXR1cm5UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVTaGlwLCB0eXBlIElTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuaW1wb3J0IHsgdmFsaWRQb3NpdGlvbiB9IGZyb20gXCIuLi9saWIvaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUJvYXJkLCBlbnN1cmVSb3cgfSBmcm9tIFwiLi91dGlscy9pbmRleFwiO1xuXG5leHBvcnQgdHlwZSBUQXR0YWNrZWRDb29yZHMgPSAobnVtYmVyIHwgbnVsbClbXVtdO1xuXG5leHBvcnQgdHlwZSBUVmlydHVhbE9jZWFuID0gW251bWJlciwgbnVtYmVyXVtdW107XG5cbmV4cG9ydCB0eXBlIFRPY2VhbiA9IChJU2hpcCB8IG51bGwpW11bXTtcblxuZXhwb3J0IHR5cGUgVERpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuXG5leHBvcnQgdHlwZSBURG9jayA9IElTaGlwW107XG5cbmV4cG9ydCB0eXBlIFRBdGtSZXMgPSBcImhpdFwiIHwgXCJtaXNzXCIgfCBcImFscmVhZHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJR2FtZUJvYXJkIHtcbiAgcmVhZG9ubHkgb2NlYW46IFRPY2VhbjtcbiAgcmVhZG9ubHkgdmlydHVhbE9jZWFuOiBUVmlydHVhbE9jZWFuO1xuICByZWFkb25seSBhdHRhY2tlZENvb3JkczogVEF0dGFja2VkQ29vcmRzO1xuICByZWFkb25seSBkb2NrOiBURG9jaztcbiAgcmVhZG9ubHkgZGVwbG95ZWRTaGlwczogVERvY2s7XG4gIGluaXRTaGlwcyhibHVlcHJpbnRzOiBSZWFkb25seTx7IG5hbWU6IHN0cmluZzsgbGVuZ3RoOiBudW1iZXIgfVtdPik6IHZvaWQ7XG4gIHBsYWNlU2hpcChzaGlwOiBJU2hpcCwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBkaXI6IFREaXJlY3Rpb24pOiBib29sZWFuO1xuICByZWNlaXZlZEF0ayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBUQXRrUmVzO1xuICBhbGxTaGlwc1N1bmsoKTogYm9vbGVhbjtcbn1cblxuY29uc3QgQk9BUkRfTEVOID0gMTA7XG5cbmNsYXNzIEdhbWVCb2FyZCBpbXBsZW1lbnRzIElHYW1lQm9hcmQge1xuICBwcml2YXRlIF9vY2VhbjogVE9jZWFuO1xuICBwcml2YXRlIF92aXJ0dWFsT2NlYW46IFRWaXJ0dWFsT2NlYW47XG4gIHByaXZhdGUgX2F0dGFja2VkQ29vcmRzOiBUQXR0YWNrZWRDb29yZHM7XG4gIHByaXZhdGUgX2RvY2s6IFREb2NrO1xuICBwcml2YXRlIF9kZXBsb3llZFNoaXBzOiBURG9jaztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9vY2VhbiA9IGNyZWF0ZUJvYXJkKEJPQVJEX0xFTiwgKCkgPT4gbnVsbCk7XG4gICAgdGhpcy5fdmlydHVhbE9jZWFuID0gY3JlYXRlQm9hcmQoQk9BUkRfTEVOLCAocm93LCBjb2wpID0+IFtyb3csIGNvbF0pO1xuICAgIHRoaXMuX2F0dGFja2VkQ29vcmRzID0gY3JlYXRlQm9hcmQoQk9BUkRfTEVOLCAoKSA9PiBudWxsKTtcbiAgICB0aGlzLl9kb2NrID0gW107XG4gICAgdGhpcy5fZGVwbG95ZWRTaGlwcyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGluaXRTaGlwcyA9IChcbiAgICBibHVlcHJpbnRzOiBSZWFkb25seTx7IG5hbWU6IHN0cmluZzsgbGVuZ3RoOiBudW1iZXIgfVtdPixcbiAgKSA9PiB7XG4gICAgYmx1ZXByaW50cy5mb3JFYWNoKCh7IG5hbWUsIGxlbmd0aCB9KSA9PiB7XG4gICAgICBpZiAodGhpcy5fZG9jay5maW5kKChzKSA9PiBzLm5hbWUgPT09IG5hbWUgJiYgcy5sZW5ndGggPT09IGxlbmd0aCkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgYFlvdSBjYW4gb25seSBoYXZlIGEgb25lIHR5cGUgb2YgJHtuYW1lfSB3aXRoIGxlbmd0aCBvZiAke2xlbmd0aH1gLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9kb2NrLnB1c2goY3JlYXRlU2hpcCh7IG5hbWUsIGxlbmd0aCB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIHBsYWNlU2hpcCA9IChcbiAgICBzaGlwOiBJU2hpcCxcbiAgICByb3c6IG51bWJlcixcbiAgICBjb2w6IG51bWJlcixcbiAgICBkaXI6IFREaXJlY3Rpb24sXG4gICkgPT4ge1xuICAgIGlmICghdmFsaWRQb3NpdGlvbihzaGlwLCByb3csIGNvbCwgZGlyLCB0aGlzLl9vY2VhbikpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgW3IsIGNdID0gZGlyID09PSBcImhvcml6b250YWxcIiA/IFtyb3csIGNvbCArIGldIDogW3JvdyArIGksIGNvbF07XG5cbiAgICAgIGVuc3VyZVJvdyh0aGlzLl9vY2VhbiwgcilbY10gPSBzaGlwO1xuXG4gICAgICBzaGlwLnBvc2l0aW9ucyA9IHsgcm93OiByLCBjb2w6IGMgfTtcbiAgICB9XG5cbiAgICB0aGlzLl9kb2NrID0gdGhpcy5fZG9jay5maWx0ZXIoXG4gICAgICAocykgPT4gIShzLm5hbWUgPT09IHNoaXAubmFtZSAmJiBzLmxlbmd0aCA9PT0gc2hpcC5sZW5ndGgpLFxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMuX2RlcGxveWVkU2hpcHMuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgIHRoaXMuX2RlcGxveWVkU2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBwdWJsaWMgcmVjZWl2ZWRBdGsgPSAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgTUlTUyA9IDA7XG4gICAgY29uc3QgSElUID0gMTtcblxuICAgIGlmICh0aGlzLl9hdHRhY2tlZENvb3Jkc1tyb3ddPy5bY29sXSAhPT0gbnVsbCkgcmV0dXJuIFwiYWxyZWFkeVwiO1xuXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLl9vY2Vhbltyb3ddPy5bY29sXTtcblxuICAgIGlmICghY3VycmVudFNoaXA/LmlzU2hpcCgpKSB7XG4gICAgICBlbnN1cmVSb3codGhpcy5fYXR0YWNrZWRDb29yZHMsIHJvdylbY29sXSA9IE1JU1M7XG5cbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG5cbiAgICBjdXJyZW50U2hpcC5oaXQoKTtcblxuICAgIGVuc3VyZVJvdyh0aGlzLl9hdHRhY2tlZENvb3Jkcywgcm93KVtjb2xdID0gSElUO1xuXG4gICAgcmV0dXJuIFwiaGl0XCI7XG4gIH07XG5cbiAgcHVibGljIGFsbFNoaXBzU3VuayA9ICgpID0+XG4gICAgdGhpcy5fZGVwbG95ZWRTaGlwc1xuICAgICAgLm1hcCgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSlcbiAgICAgIC5ldmVyeSgoaGFzU3VuaykgPT4gaGFzU3VuayA9PT0gdHJ1ZSk7XG5cbiAgcHVibGljIGdldCBvY2VhbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb2NlYW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZpcnR1YWxPY2VhbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbE9jZWFuO1xuICB9XG5cbiAgcHVibGljIGdldCBkb2NrKCkge1xuICAgIHJldHVybiB0aGlzLl9kb2NrO1xuICB9XG4gIHB1YmxpYyBnZXQgZGVwbG95ZWRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95ZWRTaGlwcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXR0YWNrZWRDb29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFja2VkQ29vcmRzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiBuZXcgR2FtZUJvYXJkKCk7XG5cbmNvbnN0IHQ6IFRPY2VhbiA9IGNyZWF0ZUJvYXJkKEJPQVJEX0xFTiwgKCkgPT5cbiAgTWF0aC5yYW5kb20oKSA+IDAuNSA/IG51bGwgOiBjcmVhdGVTaGlwKHsgbmFtZTogXCJjcnVpc2VyXCIsIGxlbmd0aDogNSB9KSxcbik7XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlQm9hcmQgPSA8VD4oXG4gIGxlbmd0aDogbnVtYmVyLFxuICBmbjogKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4gVCxcbikgPT5cbiAgQXJyYXkuZnJvbSh7IGxlbmd0aCB9LCAoXywgcm93KSA9PlxuICAgIEFycmF5LmZyb20oeyBsZW5ndGggfSwgKF8sIGNvbCkgPT4gZm4ocm93LCBjb2wpKSxcbiAgKTtcbiIsImV4cG9ydCBjb25zdCBlbnN1cmVSb3cgPSA8VD4oYXJyOiBUW11bXSwgcm93OiBudW1iZXIpID0+XG4gIGFycltyb3ddID8/IChhcnJbcm93XSA9IFtdKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2NyZWF0ZS1ib2FyZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZW5zdXJlLXJvd1wiO1xuIiwiaW1wb3J0IHR5cGUgeyBJUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUdhbWUsIHR5cGUgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVBbm5vdW5jZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGUtYW5ub3VuY2VtZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVEaXJlY3Rpb24gfSBmcm9tIFwiLi9jcmVhdGUtZGlyZWN0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVEb21TdGF0ZSB9IGZyb20gXCIuL2NyZWF0ZS1kb20tc3RhdGVcIjtcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vaW5pdC1nYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVTaGlwUGxhY2VtZW50IH0gZnJvbSBcIi4vc2hpcC1wb3J0YWdlXCI7XG5cbmV4cG9ydCBjb25zdCBkb21Db250cm9sbGVyID0gKCk6IHtcbiAgZ2FtZUNvbnRyb2xsZXI6IElHYW1lO1xuICBkb21TdGF0ZTogdm9pZDtcbiAgc2hpcFBsYWNlbWVudChwbGF5ZXI6IElQbGF5ZXIsIGVuZW15SWQ6IHN0cmluZywgcmFuZG9tPzogYm9vbGVhbik6IHZvaWQ7XG59ID0+IHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBpZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcihcIk5vIHJvb3QgZWxlbWVudCBmb3VuZFwiKTtcblxuICBjb25zdCBnYW1lQ29udHJvbGxlciA9IGNyZWF0ZUdhbWUoKTtcblxuICBjb25zdCBnYW1lQ29udGFpbmVyID0gaW5pdEdhbWUoZ2FtZUNvbnRyb2xsZXIpO1xuXG4gIGNvbnN0IGFubm91bmNlbWVudCA9IGNyZWF0ZUFubm91bmNlbWVudCgpO1xuXG4gIGNvbnN0IGRpcmVjdGlvbiA9IGNyZWF0ZURpcmVjdGlvbihhbm5vdW5jZW1lbnQpO1xuXG4gIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSBjcmVhdGVTaGlwUGxhY2VtZW50KGRpcmVjdGlvbik7XG5cbiAgY29uc3QgZG9tU3RhdGUgPSBjcmVhdGVEb21TdGF0ZShnYW1lQ29udHJvbGxlcik7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZChhbm5vdW5jZW1lbnQpO1xuXG4gIHJvb3QuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHsgZ2FtZUNvbnRyb2xsZXIsIGRvbVN0YXRlLCBzaGlwUGxhY2VtZW50IH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUFubm91bmNlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFubm91bmNlbWVudFwiKTtcblxuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuXG4gIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgd2lubmVyLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5uZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBHZXRSZXR1cm5UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2dldC1yZXR1cm4tdHlwZS50c1wiO1xuXG5leHBvcnQgdHlwZSBUQ3JlYXRlRGlyZWN0aW9uID0gR2V0UmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlRGlyZWN0aW9uPjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURpcmVjdGlvbiA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGRpcmVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uXCIpO1xuICBzaGlwUGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlbWVudFwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJwbGFjZS1zaGlwXCIpO1xuXG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBkaXJlY3Rpb246XCI7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJzdGFydFwiO1xuXG4gIGNvbnN0IGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgY29uc3QgdmFsdWVzID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdIGFzIGNvbnN0O1xuXG4gIHZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgb3B0aW9uLnZhbHVlID0gdmFsO1xuXG4gICAgZGlyZWN0aW9uU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGxhYmVsLmFwcGVuZENoaWxkKGRpcmVjdGlvblNlbGVjdCk7XG5cbiAgZGlyZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgc2hpcFBsYWNlbWVudC5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGRpcmVjdGlvbkNvbnRhaW5lcik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChzaGlwUGxhY2VtZW50KTtcblxuICByZXR1cm4geyBkaXJlY3Rpb25Db250YWluZXIsIHNoaXBQbGFjZW1lbnQsIHN0YXJ0QnRuLCBkaXJlY3Rpb25TZWxlY3QgfTtcbn07XG4iLCJpbXBvcnQgeyBzaGlwQmx1ZVByaW50cyB9IGZyb20gXCIuLi9wbGF5ZXIvZGF0YS9ibHVlcHJpbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEb2NrID0gKCkgPT4ge1xuICBjb25zdCBkb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkb2NrLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbC1kb2NrXCIpO1xuXG4gIGNvbnN0IHNoaXBzID0gc2hpcEJsdWVQcmludHMubWFwKCh7IG5hbWUsIGxlbmd0aCB9LCBpKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbC1kaXJcIik7XG5cbiAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiLCBuYW1lKTtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtbGVuZ3RoXCIsIGxlbmd0aC50b1N0cmluZygpKTtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaS50b1N0cmluZygpKTtcblxuICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2hpcG1lbnRcIik7XG5cbiAgICAgIHJldHVybiBidG47XG4gICAgfSk7XG5cbiAgICBzaGlwLmFwcGVuZCguLi5idG5zKTtcblxuICAgIGRvY2suYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICByZXR1cm4gc2hpcDtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgZG9jaywgc2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IElHYW1lIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IHsgZ2V0T2NlYW4gfSBmcm9tIFwiLi9nZXQtb2NlYW5cIjtcbmltcG9ydCB7IHBsYXlMb2dpYyB9IGZyb20gXCIuL3BsYXktbG9naWNcIjtcblxuZXhwb3J0IHsgdXBkYXRlU2NyZWVuIH0gZnJvbSBcIi4vdXBkYXRlLXNjcmVlblwiO1xuZXhwb3J0IHsgZ2FtZU92ZXIgfSBmcm9tIFwiLi9nYW1lLW92ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvbVN0YXRlID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmVPQ2VhbiA9IGdldE9jZWFuKGdhbWVDb250cm9sbGVyLnBsYXllck9uZS5pZCk7XG4gIGNvbnN0IHBsYXllck9uZU9Ud28gPSBnZXRPY2VhbihnYW1lQ29udHJvbGxlci5wbGF5ZXJUd28uaWQpO1xuXG4gIHBsYXllck9uZU9DZWFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHBsYXlMb2dpYyhlLCBnYW1lQ29udHJvbGxlcik7XG4gIH0pO1xuXG4gIHBsYXllck9uZU9Ud28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcGxheUxvZ2ljKGUsIGdhbWVDb250cm9sbGVyKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBUVmlydHVhbE9jZWFuIH0gZnJvbSBcIi4uL2JvYXJkL2JvYXJkLnRzXCI7XG5pbXBvcnQgdHlwZSB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci50c1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlT2NlYW4gPSAocGxheWVyOiBJUGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3Qgb2NlYW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwbGF5ZXIuaWR9LWNvbnRhaW5lcmApO1xuXG4gIG9jZWFuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci5pZH0tb2NlYW5gKTtcbiAgb2NlYW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvY2VhbnNcIik7XG5cbiAgcGxheWVyLmJvYXJkLnZpcnR1YWxPY2VhblxuICAgIC5mbGF0TWFwKChjKSA9PiBjKVxuICAgIC5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICBjb25zdCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCByb3cudG9TdHJpbmcoKSk7XG4gICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbC50b1N0cmluZygpKTtcbiAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChgY2VsbC0ke3BsYXllci5pZH1gKTtcbiAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChcImRyb3AtdGFyZ2V0XCIpO1xuXG4gICAgICBvY2VhbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xDZWxsKTtcbiAgICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2NlYW5Db250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJR2FtZSB9IGZyb20gXCIuLi9nYW1lL2dhbWVcIjtcbmltcG9ydCB7IGRpc2FibGVPY2VhbiB9IGZyb20gXCIuL3VwZGF0ZS1zY3JlZW5cIjtcblxuZXhwb3J0IGNvbnN0IGdhbWVPdmVyID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBpZiAoIWdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIpIHJldHVybjtcblxuICBjb25zdCB3aW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3Qgd2lubmVyID0gZ2FtZUNvbnRyb2xsZXIud2lubmVyPy5uYW1lO1xuXG4gIHAudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3dpbm5lcn1gO1xuXG4gIHdpbkNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQocCk7XG5cbiAgZGlzYWJsZU9jZWFuKGdhbWVDb250cm9sbGVyLnBsYXllck9uZSk7XG4gIGRpc2FibGVPY2VhbihnYW1lQ29udHJvbGxlci5wbGF5ZXJUd28pO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXRPY2VhbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG9jZWFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9LW9jZWFuYCk7XG5cbiAgaWYgKCFvY2Vhbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk9jZWFuIGRvZXMgbm90IGV4aXN0XCIpO1xuICB9XG5cbiAgcmV0dXJuIG9jZWFuO1xufTtcbiIsImltcG9ydCB0eXBlIHsgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVPY2VhbiB9IGZyb20gXCIuL2NyZWF0ZS1vY2VhblwiO1xuXG5jb25zdCBjcmVhdGVHYW1lQ29udGFpbmVyID0gKGdhbWU6IElHYW1lKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgcGxheWVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwbGF5ZXJPbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItb25lXCIpO1xuXG4gIGNvbnN0IHBsYXllclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcGxheWVyVHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLXR3b1wiKTtcblxuICBjb25zdCBwbGF5ZXJPbmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgcGxheWVyT25lTmFtZS50ZXh0Q29udGVudCA9IGdhbWUucGxheWVyT25lLm5hbWU7XG5cbiAgY29uc3QgcGxheWVyVHdvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIHBsYXllclR3b05hbWUudGV4dENvbnRlbnQgPSBnYW1lLnBsYXllclR3by5uYW1lO1xuXG4gIGNvbnN0IHBsYXllck9uZU9DZWFuID0gY3JlYXRlT2NlYW4oZ2FtZS5wbGF5ZXJPbmUpO1xuICBjb25zdCBwbGF5ZXJUd29PQ2VhbiA9IGNyZWF0ZU9jZWFuKGdhbWUucGxheWVyVHdvKTtcblxuICBwbGF5ZXJPbmUuYXBwZW5kQ2hpbGQocGxheWVyT25lT0NlYW4pO1xuICBwbGF5ZXJUd28uYXBwZW5kQ2hpbGQocGxheWVyVHdvT0NlYW4pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRHYW1lID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBjb25zdCBnYW1lQ29udGFpbmVyID0gY3JlYXRlR2FtZUNvbnRhaW5lcihnYW1lQ29udHJvbGxlcik7XG5cbiAgcmV0dXJuIGdhbWVDb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJR2FtZSB9IGZyb20gXCIuLi9nYW1lL2dhbWVcIjtcbmltcG9ydCB7IGdhbWVPdmVyIH0gZnJvbSBcIi4vZ2FtZS1vdmVyXCI7XG5pbXBvcnQgeyBkaXNhYmxlT2NlYW4sIGVuYWJsZU9jZWFuLCB1cGRhdGVTY3JlZW4gfSBmcm9tIFwiLi91cGRhdGUtc2NyZWVuXCI7XG5cbmV4cG9ydCBjb25zdCBwbGF5TG9naWMgPSBhc3luYyAoZTogTW91c2VFdmVudCwgZ2FtZUNvbnRyb2xsZXI6IElHYW1lKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGU/LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgcm93IH0gPSB0YXJnZXQuZGF0YXNldDtcbiAgY29uc3QgeyBjb2wgfSA9IHRhcmdldC5kYXRhc2V0O1xuXG4gIHRyeSB7XG4gICAgaWYgKGdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIpIHJldHVybiBnYW1lT3ZlcihnYW1lQ29udHJvbGxlcik7XG5cbiAgICBpZiAocm93ICE9PSB1bmRlZmluZWQgJiYgY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fFxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmRzXCIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcblxuICAgICAgZGlzYWJsZU9jZWFuKGdhbWVDb250cm9sbGVyLmN1cnJlbnRQbGF5ZXIpO1xuXG4gICAgICBhd2FpdCBnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmVJbnB1dCgrcm93LCArY29sKTtcblxuICAgICAgYXdhaXQgZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvSW5wdXQoKTtcblxuICAgICAgdXBkYXRlU2NyZWVuKGdhbWVDb250cm9sbGVyKTtcblxuICAgICAgZW5hYmxlT2NlYW4oZ2FtZUNvbnRyb2xsZXIuY3VycmVudFBsYXllcik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvciA9IEVycm9yKFwieW91IGNsaWNrZWQgdGhlIGJvYXJkIGZyYW1lXCIpO1xuICAgIHRocm93IGVycm9yO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcbiIsImltcG9ydCB0eXBlIHsgSVBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFRDcmVhdGVEaXJlY3Rpb24gfSBmcm9tIFwiLi9jcmVhdGUtZGlyZWN0aW9uXCI7XG5pbXBvcnQgeyBpc1ZhbGlkRGlyZWN0aW9uIH0gZnJvbSBcIi4uL2xpYi9pcy12YWxpZC1kaXJlY2l0b25cIjtcbmltcG9ydCB7IHZhbGlkUG9zaXRpb24gfSBmcm9tIFwiLi4vbGliL3ZhbGlkLXBvc2l0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVEb2NrIH0gZnJvbSBcIi4vY3JlYXRlLWRvY2tcIjtcbmltcG9ydCB7IHNob3dTaGlwcyB9IGZyb20gXCIuL3NoaXAtdmlzaWJpbGl0eVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU2hpcFBsYWNlbWVudCA9XG4gIChEVE86IFRDcmVhdGVEaXJlY3Rpb24pID0+XG4gIChwbGF5ZXI6IElQbGF5ZXIsIGVuZW15SWQ6IHN0cmluZywgcmFuZG9tPzogYm9vbGVhbikgPT4ge1xuICAgIGlmIChyYW5kb20pIHtcbiAgICAgIHBsYXllci5hdXRvUGxhY2VTaGlwcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBjb25zdCB7IHNpZ25hbCwgYWJvcnQgfSA9IGNvbnRyb2xsZXI7XG5cbiAgICBjb25zdCB7IGRpcmVjdGlvbkNvbnRhaW5lciwgc3RhcnRCdG4sIGRpcmVjdGlvblNlbGVjdCB9ID0gRFRPO1xuXG4gICAgc3RhcnRCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJ0blwiKTtcblxuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgIGAuY2VsbC0ke2VuZW15SWR9YCxcbiAgICAgICAgKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsIH0sXG4gICAgKTtcblxuICAgIGxldCBkcmFnZ2VkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgY29uc3QgeyBkb2NrLCBzaGlwcyB9ID0gY3JlYXRlRG9jaygpO1xuXG4gICAgZGlyZWN0aW9uU2VsZWN0Py5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NQb3MgPSB7XG4gICAgICAgICAgY2FycmllcjogXCJjYXJyaWVyLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgYmF0dGxlc2hpcDogXCJiYXR0bGVzaGlwLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgY3J1aXNlcjogXCJjcnVpc2VyLXN1Ym1hcmluZS1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICAgIGRlc3Ryb3llcjogXCJkZXN0cm95ZXItaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgIGRvY2suY2xhc3NMaXN0LnJlbW92ZShcInZlcnRpY2FsLWRvY2tcIik7XG5cbiAgICAgICAgICBkb2NrLmNsYXNzTGlzdC5hZGQoXCJob3Jpem9udGFsLWRvY2tcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jay5jbGFzc0xpc3QuYWRkKFwidmVydGljYWwtZG9ja1wiKTtcblxuICAgICAgICAgIGRvY2suY2xhc3NMaXN0LnJlbW92ZShcImhvcml6b250YWwtZG9ja1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHF1ZXVlID0gWy4uLnNoaXBzXTtcblxuICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9IHF1ZXVlWzBdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSBjb250aW51ZTtcblxuICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gY3VycmVudC5kYXRhc2V0Py5uYW1lO1xuXG4gICAgICAgICAgY29uc3QgcG9zID0gc2hpcE5hbWVcbiAgICAgICAgICAgID8gY2xhc3NQb3Nbc2hpcE5hbWUgYXMga2V5b2YgdHlwZW9mIGNsYXNzUG9zXVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgaWYgKCFwb3MpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQocG9zKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsIH0sXG4gICAgKTtcblxuICAgIGRvY2suYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZHJhZ3N0YXJ0XCIsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSA8SFRNTEVsZW1lbnQ+KDxIVE1MRWxlbWVudD5lLnRhcmdldCkucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGlsZCA9IGNoaWxkcmVuLm5hbWVkSXRlbShcbiAgICAgICAgICB0YXJnZXQuZGF0YXNldC5uYW1lID8/IFwiXCIsXG4gICAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQ2hpbGQpIHtcbiAgICAgICAgICBkcmFnZ2VkID0gc2VsZWN0ZWRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IHRhcmdldE9jZWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwbGF5ZXIuaWR9LW9jZWFuYCk7XG5cbiAgICBpZiAoIXRhcmdldE9jZWFuKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBwbGF5ZXIgb2NlYW4gd2l0aCBJRCBvZiAke3BsYXllci5pZH0gaXMgbm90IGZvdW5kYCk7XG5cbiAgICB0YXJnZXRPY2Vhbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcmFnb3ZlclwiLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsIH0sXG4gICAgKTtcblxuICAgIHRhcmdldE9jZWFuLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKCkgPT4ge30pO1xuXG4gICAgdGFyZ2V0T2NlYW4uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoKSA9PiB7fSk7XG5cbiAgICB0YXJnZXRPY2Vhbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcm9wXCIsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBpZiAoIWRyYWdnZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZHJhZ2dlZC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjaGlsZCA9IGRyYWdnZWQ7XG4gICAgICAgIGNvbnN0IHJvdyA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5yb3cpO1xuICAgICAgICBjb25zdCBjb2wgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZHJhZ2dlZC5kYXRhc2V0LmluZGV4KTtcblxuICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyLmJvYXJkLmRlcGxveWVkU2hpcHNbaW5kZXhdO1xuXG4gICAgICAgIGlmICghc2hpcD8uaXNTaGlwKCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2hpcDogJHtkcmFnZ2VkLmRhdGFzZXQubmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICAgICAgW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdLmZpbmQoXG4gICAgICAgICAgICAoZGlyKSA9PiBkaXIgPT09IGRpcmVjdGlvblNlbGVjdC52YWx1ZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICkgPz8gXCJcIjtcblxuICAgICAgICBpZiAoIWlzVmFsaWREaXJlY3Rpb24oZGlyZWN0aW9uKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBpbnZhbGlkIGRpcmVjdGlvbiBvZiAke2RpcmVjdGlvblNlbGVjdC52YWx1ZX07IGV4cGVjdGVkIGVpdGhlciBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCJgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbGlkUG9zaXRpb24oc2hpcCwgcm93LCBjb2wsIGRpcmVjdGlvbiwgcGxheWVyLmJvYXJkLm9jZWFuKSlcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCByb3csIGNvbCwgZGlyZWN0aW9uKTtcblxuICAgICAgICBwYXJlbnQ/LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuICAgICAgICBpZiAocGFyZW50Py5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG5cIik7XG4gICAgICAgICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgICAgICAgICBkaXJlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgYWJvcnQoXCJhbGwgc2hpcHMgZGVwbG95ZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hvd1NoaXBzKHBsYXllcik7XG4gICAgICB9LFxuICAgICAgeyBzaWduYWwgfSxcbiAgICApO1xuICB9O1xuIiwiaW1wb3J0IHR5cGUgeyBJUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIudHNcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTaGlwcyA9IChwbGF5ZXI6IElQbGF5ZXIpID0+XG4gIHBsYXllci5ib2FyZC5kZXBsb3llZFNoaXBzLm1hcCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHNoaXAucG9zaXRpb25zO1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGwtJHtwbGF5ZXIuaWR9W2RhdGEtcm93XCIke3Jvd31cIl1bZGF0YS1jb2xcIiR7Y29sfVwiXWAsXG4gICAgKTtcblxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGhpZGVTaGlwcyA9IChwbGF5ZXI6IElQbGF5ZXIpID0+XG4gIHBsYXllci5ib2FyZC5kZXBsb3llZFNoaXBzLm1hcCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHNoaXAucG9zaXRpb25zO1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGwtJHtwbGF5ZXIuaWR9W2RhdGEtcm93XCIke3Jvd31cIl1bZGF0YS1jb2xcIiR7Y29sfVwiXWAsXG4gICAgKTtcblxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9KTtcbiIsImltcG9ydCB0eXBlIHsgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lLnRzXCI7XG5pbXBvcnQgdHlwZSB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci50c1wiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQXR0YWNrZWRDb29yZHMgPSAocGxheWVyOiBJUGxheWVyKSA9PiB7XG4gIHBsYXllci5ib2FyZC5hdHRhY2tlZENvb3Jkcy5mb3JFYWNoKChyb3csIHJJbmRleCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2wsIGNJbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2VsbC0ke3BsYXllci5pZH1bZGF0YS1yb3c9XCIke3JJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NJbmRleH1cIl1gLFxuICAgICAgKTtcblxuICAgICAgaWYgKCFjZWxsKSByZXR1cm47XG5cbiAgICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sID09PSAxKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcImhpdFwiO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclN1bmtTaGlwcyA9IChwbGF5ZXI6IElQbGF5ZXIpID0+IHtcbiAgY29uc3Qgc3Vua1NoaXBzID0gcGxheWVyLmJvYXJkLmRlcGxveWVkU2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBzdW5rU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHNoaXAucG9zaXRpb25zO1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGwtJHtwbGF5ZXIuaWR9W2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCxcbiAgICApO1xuXG4gICAgY2VsbD8uY2xhc3NMaXN0LmFkZChcInNpbmtcIik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVPY2VhbiA9IChwbGF5ZXI6IElQbGF5ZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgJHtwbGF5ZXIuaWR9LWNvbnRhaW5lcmAsXG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE9jZWFuIG9mIHBsYXllciB3aXRoIElEIG9mICR7cGxheWVyLmlkfSBkb2VzIG5vdCBleGlzdGApO1xuICB9XG5cbiAgY29udGFpbmVyPy5jaGlsZE5vZGVzLmZvckVhY2goKGMpID0+IHtcbiAgICBjb25zdCBub2RlID0gYyBhcyBIVE1MRWxlbWVudDtcblxuICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB9KTtcblxuICBjb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZU9jZWFuID0gKHBsYXllcjogSVBsYXllcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAke3BsYXllci5pZH0tY29udGFpbmVyYCxcbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgT2NlYW4gb2YgcGxheWVyIHdpdGggSUQgb2YgJHtwbGF5ZXIuaWR9IGRvZXMgbm90IGV4aXN0YCk7XG4gIH1cblxuICBjb250YWluZXI/LmNoaWxkTm9kZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgbm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2NyZWVuID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBjb25zdCB7IHBsYXllck9uZSwgcGxheWVyVHdvIH0gPSBnYW1lQ29udHJvbGxlcjtcblxuICByZW5kZXJBdHRhY2tlZENvb3JkcyhwbGF5ZXJPbmUpO1xuICByZW5kZXJBdHRhY2tlZENvb3JkcyhwbGF5ZXJUd28pO1xuXG4gIHJlbmRlclN1bmtTaGlwcyhwbGF5ZXJPbmUpO1xuICByZW5kZXJTdW5rU2hpcHMocGxheWVyVHdvKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lQm9hcmQsIHR5cGUgSUdhbWVCb2FyZCB9IGZyb20gXCIuLi9ib2FyZC9ib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyLCB0eXBlIElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IHsgc2hpcEJsdWVQcmludHMgfSBmcm9tIFwiLi4vcGxheWVyL2RhdGEvYmx1ZXByaW50c1wiO1xuaW1wb3J0IHsgd2FpdCB9IGZyb20gXCIuLi9saWIvd2FpdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHYW1lIHtcbiAgcGxheWVyT25lOiBJUGxheWVyO1xuICBwbGF5ZXJUd286IElQbGF5ZXI7XG4gIGN1cnJlbnRQbGF5ZXI6IElQbGF5ZXI7XG4gIGlzR2FtZU92ZXI6IGJvb2xlYW47XG4gIHdpbm5lcjogSVBsYXllciB8IG51bGw7XG4gIHN3aXRjaFBsYXllcigpOiBJUGxheWVyO1xuICBwbGF5ZXJPbmVJbnB1dChyb3c/OiBudW1iZXIsIGNvbD86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gIHBsYXllclR3b0lucHV0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuY2xhc3MgR2FtZSBpbXBsZW1lbnRzIElHYW1lIHtcbiAgcHJpdmF0ZSBfaXNHYW1lT3ZlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2lubmVyOiBJUGxheWVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfcGxheWVyT25lQm9hcmQ6IElHYW1lQm9hcmQ7XG4gIHByaXZhdGUgX3BsYXllclR3b0JvYXJkOiBJR2FtZUJvYXJkO1xuICBwcml2YXRlIF9wbGF5ZXJPbmU6IElQbGF5ZXI7XG4gIHByaXZhdGUgX3BsYXllclR3bzogSVBsYXllcjtcbiAgcHJpdmF0ZSBfY3VycmVudFBsYXllcjogSVBsYXllcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2lzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLl93aW5uZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fcGxheWVyT25lQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKTtcbiAgICB0aGlzLl9wbGF5ZXJUd29Cb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpO1xuXG4gICAgdGhpcy5fcGxheWVyT25lID0gY3JlYXRlUGxheWVyKHtcbiAgICAgIG5hbWU6IFwiUGxheWVyIE9uZVwiLFxuICAgICAgYm9hcmQ6IHRoaXMuX3BsYXllck9uZUJvYXJkLFxuICAgICAgZW5lbXlCb2FyZDogdGhpcy5fcGxheWVyVHdvQm9hcmQsXG4gICAgICBibHVlcHJpbnRzOiBzaGlwQmx1ZVByaW50cyxcbiAgICB9KTtcblxuICAgIHRoaXMuX3BsYXllclR3byA9IGNyZWF0ZVBsYXllcih7XG4gICAgICBuYW1lOiBcIlBsYXllciBUd29cIixcbiAgICAgIGJvYXJkOiB0aGlzLl9wbGF5ZXJUd29Cb2FyZCxcbiAgICAgIGVuZW15Qm9hcmQ6IHRoaXMuX3BsYXllck9uZUJvYXJkLFxuICAgICAgYmx1ZXByaW50czogc2hpcEJsdWVQcmludHMsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gdGhpcy5fcGxheWVyT25lO1xuICB9XG5cbiAgcHVibGljIHN3aXRjaFBsYXllcigpOiBJUGxheWVyIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFBsYXllci5uYW1lID09PSB0aGlzLl9wbGF5ZXJPbmUubmFtZSkge1xuICAgICAgdGhpcy5fY3VycmVudFBsYXllciA9IHRoaXMuX3BsYXllclR3bztcbiAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGxheWVyO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXIgPSB0aGlzLl9wbGF5ZXJPbmU7XG5cbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBsYXllcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwbGF5ZXJPbmVJbnB1dChyb3c/OiBudW1iZXIsIGNvbD86IG51bWJlcikge1xuICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB3YWl0KDIwMDApO1xuXG4gICAgaWYgKHJvdyAmJiBjb2wpIHtcbiAgICAgIHRoaXMuX3BsYXllck9uZS5hdGtFbmVteShyb3csIGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BsYXllck9uZS5hdXRvQXRrKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BsYXllclR3by5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLl93aW5uZXIgPSB0aGlzLl9wbGF5ZXJPbmU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHBsYXllclR3b0lucHV0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IHdhaXQoMjAwMCk7XG5cbiAgICBpZiAocm93ICYmIGNvbCkge1xuICAgICAgdGhpcy5fcGxheWVyVHdvLmF0a0VuZW15KHJvdywgY29sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyVHdvLmF1dG9BdGsoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGxheWVyVHdvLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3dpbm5lciA9IHRoaXMuX3BsYXllclR3bztcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gIH1cblxuICBnZXQgcGxheWVyT25lKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJPbmU7XG4gIH1cblxuICBnZXQgcGxheWVyVHdvKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJUd287XG4gIH1cblxuICBnZXQgY3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBsYXllcjtcbiAgfVxuXG4gIGdldCBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0dhbWVPdmVyO1xuICB9XG5cbiAgZ2V0IHdpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lubmVyO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVHYW1lID0gKCkgPT4gbmV3IEdhbWUoKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL3ZhbGlkLXBvc2l0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zaHVmZmxlLWFycmF5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pcy12YWxpZC1kaXJlY2l0b25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dhaXRcIjtcbiIsImltcG9ydCB0eXBlIHsgVERpcmVjdGlvbiB9IGZyb20gXCIuLi9ib2FyZC9ib2FyZC50c1wiO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZERpcmVjdGlvbiA9IChkaXI6IHN0cmluZyk6IGRpciBpcyBURGlyZWN0aW9uID0+IHtcbiAgcmV0dXJuIChcbiAgICAoZGlyIGFzIFREaXJlY3Rpb24pID09PSBcImhvcml6b250YWxcIiB8fCAoZGlyIGFzIFREaXJlY3Rpb24pID09PSBcInZlcnRpY2FsXCJcbiAgKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2h1ZmZsZUFycmF5ID0gPFQ+KGFycjogVFtdKSA9PlxuICBhcnJcbiAgICAubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIHNvcnQ6IE1hdGgucmFuZG9tKCkgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiIsImltcG9ydCB0eXBlIHsgSVNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwLnRzXCI7XG5pbXBvcnQgdHlwZSB7IFREaXJlY3Rpb24sIFRPY2VhbiB9IGZyb20gXCIuLi9ib2FyZC9ib2FyZC50c1wiO1xuXG5leHBvcnQgY29uc3QgdmFsaWRQb3NpdGlvbiA9IChcbiAgc2hpcDogSVNoaXAsXG4gIHJvdzogbnVtYmVyLFxuICBjb2w6IG51bWJlcixcbiAgZGlyOiBURGlyZWN0aW9uLFxuICBvY2VhbjogVE9jZWFuLFxuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChkaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoY29sICsgaSA+IDkgfHwgIW9jZWFuW3Jvd10gfHwgb2NlYW5bcm93XVtjb2wgKyBpXT8uaXNTaGlwKCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJvdyArIGkgPiA5IHx8ICFvY2Vhbltyb3cgKyBpXSB8fCBvY2Vhbltyb3cgKyBpXT8uW2NvbF0/LmlzU2hpcCgpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHdhaXQgPSAobXM6IG51bWJlcikgPT5cbiAgbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICBzZXRUaW1lb3V0KHIsIG1zKTtcbiAgfSk7XG4iLCJleHBvcnQgY29uc3Qgc2hpcEJsdWVQcmludHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImNhcnJpZXJcIixcbiAgICBsZW5ndGg6IDUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImJhdHRsZXNoaXBcIixcbiAgICBsZW5ndGg6IDQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNydWlzZXJcIixcbiAgICBsZW5ndGg6IDMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN1Ym1hcmluZVwiLFxuICAgIGxlbmd0aDogMyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGVzdHJveWVyXCIsXG4gICAgbGVuZ3RoOiAyLFxuICB9LFxuXSBhcyBjb25zdDtcbiIsImltcG9ydCB7IHR5cGUgVERpcmVjdGlvbiwgdHlwZSBJR2FtZUJvYXJkLCB0eXBlIFRBdGtSZXMgfSBmcm9tIFwiLi4vYm9hcmQvYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgSVNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmltcG9ydCB7IHNodWZmbGVBcnJheSB9IGZyb20gXCIuLi9saWIvc2h1ZmZsZS1hcnJheVwiO1xuaW1wb3J0IHsgdmFsaWRQb3NpdGlvbiB9IGZyb20gXCIuLi9saWIvdmFsaWQtcG9zaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgVFBsYWNlU2hpcCA9IHtcbiAgRFRPPzogeyBzaGlwOiBJU2hpcDsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyOyBkaXI6IFREaXJlY3Rpb24gfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBsYXllciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYm9hcmQ6IElHYW1lQm9hcmQ7XG4gIGF0a0VuZW15KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IFRBdGtSZXM7XG4gIGF1dG9QbGFjZVNoaXBzKCk6IHZvaWQ7XG4gIGF1dG9BdGsoKTogVEF0a1Jlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJEVE8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJvYXJkOiBJR2FtZUJvYXJkO1xuICBlbmVteUJvYXJkOiBJR2FtZUJvYXJkO1xuICBibHVlcHJpbnRzOiBSZWFkb25seTx7IG5hbWU6IHN0cmluZzsgbGVuZ3RoOiBudW1iZXIgfVtdPjtcbn1cblxuY2xhc3MgUGxheWVyIGltcGxlbWVudHMgSVBsYXllciB7XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYm9hcmQ6IElHYW1lQm9hcmQ7XG4gIHByaXZhdGUgX2VuZW15Qm9hcmQ6IElHYW1lQm9hcmQ7XG4gIHByaXZhdGUgX3ZhbGlkQ29vcmRzOiBbbnVtYmVyLCBudW1iZXJdW107XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihEVE86IFBsYXllckRUTykge1xuICAgIHRoaXMuX2lkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICB0aGlzLl9uYW1lID0gRFRPLm5hbWU7XG4gICAgdGhpcy5fYm9hcmQgPSBEVE8uYm9hcmQ7XG4gICAgdGhpcy5fZW5lbXlCb2FyZCA9IERUTy5lbmVteUJvYXJkO1xuICAgIHRoaXMuX2JvYXJkLmluaXRTaGlwcyhEVE8uYmx1ZXByaW50cyk7XG4gICAgdGhpcy5fdmFsaWRDb29yZHMgPSBEVE8uZW5lbXlCb2FyZC52aXJ0dWFsT2NlYW4uZmxhdE1hcCgodikgPT5cbiAgICAgIHYubWFwKCh2KSA9PiB2KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGF0a0VuZW15KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9lbmVteUJvYXJkLnJlY2VpdmVkQXRrKHJvdywgY29sKTtcbiAgfVxuXG4gIHB1YmxpYyBhdXRvUGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFsuLi50aGlzLl9ib2FyZC5kb2NrXTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gcXVldWVbMF07XG5cbiAgICAgIGlmICghY3VycmVudFNoaXA/LmlzU2hpcCgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcblxuICAgICAgaWYgKFxuICAgICAgICB2YWxpZFBvc2l0aW9uKFxuICAgICAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgICAgIHJhbmRvbVJvdyxcbiAgICAgICAgICByYW5kb21Db2wsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHRoaXMuYm9hcmQub2NlYW4sXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9ib2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGF1dG9BdGsoKSB7XG4gICAgdGhpcy5fdmFsaWRDb29yZHMgPSBzaHVmZmxlQXJyYXkodGhpcy5fdmFsaWRDb29yZHMpO1xuXG4gICAgaWYgKCF0aGlzLl92YWxpZENvb3Jkcy5sZW5ndGgpIHJldHVybiBcImFscmVhZHlcIjtcblxuICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuX3ZhbGlkQ29vcmRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoIWNvb3JkcykgcmV0dXJuIFwibWlzc1wiO1xuXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcblxuICAgIHJldHVybiB0aGlzLl9lbmVteUJvYXJkLnJlY2VpdmVkQXRrKHJvdywgY29sKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvYXJkKCk6IElHYW1lQm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9ib2FyZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUGxheWVyID0gKERUTzogUGxheWVyRFRPKSA9PiBuZXcgUGxheWVyKERUTyk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihcbi8vICAgbmFtZTogc3RyaW5nLFxuLy8gICBib2FyZDogVEdhbWVCb2FyZCxcbi8vICAgZW5lbXlCb2FyZDogVEdhbWVCb2FyZCxcbi8vICAgaXNDb21wdXRlciA9IGZhbHNlLFxuLy8gKSB7XG4vLyAgIGNvbnN0IHBsYXllck5hbWUgPSAhaXNDb21wdXRlciA/IG5hbWUgOiBcIkNvbXB1dGVyXCI7XG5cbi8vIGNvbnN0IHZhbGlkQ29vcmRzID0gZW5lbXlCb2FyZC52aXJ0dWFsT2NlYW4uZmxhdE1hcCgodikgPT4gdi5tYXAoKHYpID0+IHYpKTtcblxuLy8gICBjb25zdCB7IGRvY2sgfSA9IGJvYXJkO1xuXG4vLyAgIGNvbnN0IGluaXRTaGlwcyA9ICgpID0+IHtcbi8vICAgICBib2FyZC5pbml0U2hpcHMoc2hpcEJsdWVQcmludHMpO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IHBsYWNlU2hpcCA9IChcbi8vICAgICBpc1JhbmRvbTogYm9vbGVhbixcbi8vICAgICBEVE8/OiB7IHNoaXA6IFRTaGlwOyByb3c6IG51bWJlcjsgY29sOiBudW1iZXI7IGRpcjogVERpcmVjdGlvbiB9LFxuLy8gICApID0+IHtcbi8vICAgICBpZiAoaXNSYW5kb20gfHwgIURUTykge1xuLy8gY29uc3QgcXVldWUgPSBbLi4uZG9ja107XG5cbi8vIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbi8vICAgY29uc3QgY3VycmVudFNoaXAgPSBxdWV1ZVswXTtcblxuLy8gICBpZiAoIWlzU2hpcChjdXJyZW50U2hpcCkpIHJldHVybiBmYWxzZTtcblxuLy8gICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbi8vICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbi8vICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbFwiO1xuXG4vLyAgICAgICAgIGlmIChcbi8vICAgICAgICAgICB2YWxpZFBvc2l0aW9uKFxuLy8gICAgICAgICAgICAgY3VycmVudFNoaXAsXG4vLyAgICAgICAgICAgICByYW5kb21Sb3csXG4vLyAgICAgICAgICAgICByYW5kb21Db2wsXG4vLyAgICAgICAgICAgICBkaXJlY3Rpb24sXG4vLyAgICAgICAgICAgICBlbmVteUJvYXJkLm9jZWFuLFxuLy8gICAgICAgICAgIClcbi8vICAgICAgICAgKSB7XG4vLyAgICAgICAgICAgYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uKTtcblxuLy8gICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cblxuLy8gICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIGJvYXJkLnBsYWNlU2hpcChEVE8uc2hpcCwgRFRPLnJvdywgRFRPLmNvbCwgRFRPLmRpcik7XG4vLyAgIH07XG5cbi8vICAgY29uc3QgYXRrRW5lbXkgPSAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiB7XG4vLyAgICAgaWYgKFxuLy8gICAgICAgcm93ICYmXG4vLyAgICAgICBjb2wgJiZcbi8vICAgICAgICFOdW1iZXIuaXNOYU4oTnVtYmVyKGVuZW15Qm9hcmQuYXR0YWNrZWRDb29yZHM/Lltyb3ddPy5bY29sXSkpXG4vLyAgICAgKVxuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xuXG4vLyAgICAgaWYgKGlzQ29tcHV0ZXIpIHtcbi8vICAgY29uc3QgYXZhaWxhYmxlSW5kZXggPSB2YWxpZENvb3Jkcy5maWx0ZXIoXG4vLyAgICAgKFtyb3csIGNvbF0pID0+IGVuZW15Qm9hcmQuYXR0YWNrZWRDb29yZHM/Lltyb3ddPy5bY29sXSAhPT0gbnVsbCxcbi8vICAgKTtcblxuLy8gICBjb25zdCBjb29yZHMgPVxuLy8gICAgIGF2YWlsYWJsZUluZGV4W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUluZGV4Lmxlbmd0aCldO1xuXG4vLyAgIGlmICghY29vcmRzKSByZXR1cm4gZmFsc2U7XG5cbi8vICAgZW5lbXlCb2FyZC5yZWNlaXZlZEF0ayhjb29yZHNbMF0sIGNvb3Jkc1sxXSk7XG4vLyAgIHJldHVybiB0cnVlO1xuLy8gfVxuXG4vLyBlbmVteUJvYXJkLnJlY2VpdmVkQXRrKHJvdywgY29sKTtcbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfTtcblxuLy8gICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4vLyAgICAgaXNDb21wdXRlcigpIHtcbi8vICAgICAgIHJldHVybiBpc0NvbXB1dGVyO1xuLy8gICAgIH0sXG4vLyAgICAgZ2V0TmFtZSgpIHtcbi8vICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuLy8gICAgIH0sXG4vLyAgICAgZ2V0T2NlYW4oKSB7XG4vLyAgICAgICByZXR1cm4gYm9hcmQub2NlYW47XG4vLyAgICAgfSxcbi8vICAgICBnZXREb2NrKCkge1xuLy8gICAgICAgcmV0dXJuIGRvY2s7XG4vLyAgICAgfSxcbi8vICAgICBhdGtFbmVteSxcbi8vICAgICBpbml0U2hpcHMsXG4vLyAgICAgcGxhY2VTaGlwLFxuLy8gICB9KTtcbi8vIH1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSVNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoZWFsdGg6IG51bWJlcjtcbiAgaXNTaGlwKCk6IGJvb2xlYW47XG4gIGhpdCgpOiBib29sZWFuO1xuICByZXNldEhlYWx0aCgpOiB2b2lkO1xuICBpc1N1bmsoKTogYm9vbGVhbjtcbiAgcG9zaXRpb25zOiB7IHJvdzogbnVtYmVyOyBjb2w6IG51bWJlciB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoaXBEVE8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU2hpcCBpbXBsZW1lbnRzIElTaGlwIHtcbiAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXI7XG4gIHByaXZhdGUgX3Bvc2l0aW9uczogeyByb3c6IG51bWJlcjsgY29sOiBudW1iZXIgfTtcblxuICBwdWJsaWMgaXNTaGlwKCk6IHRoaXMgaXMgdHlwZW9mIFNoaXAge1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgU2hpcDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKERUTzogU2hpcERUTykge1xuICAgIHRoaXMuX25hbWUgPSBEVE8ubmFtZTtcbiAgICB0aGlzLl9sZW5ndGggPSBEVE8ubGVuZ3RoO1xuICAgIHRoaXMuX2hlYWx0aCA9IERUTy5sZW5ndGg7XG4gICAgdGhpcy5fcG9zaXRpb25zID0geyByb3c6IC0xLCBjb2w6IC0xIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIGdldCBoZWFsdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbnM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHBvc2l0aW9ucyhwOiB7IHJvdzogbnVtYmVyOyBjb2w6IG51bWJlciB9KSB7XG4gICAgdGhpcy5fcG9zaXRpb25zID0gcDtcbiAgfVxuXG4gIHB1YmxpYyBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuX2hlYWx0aCAtPSAxO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcHVibGljIHJlc2V0SGVhbHRoID0gKCkgPT4ge1xuICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMuX2xlbmd0aDtcbiAgfTtcblxuICBwdWJsaWMgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9oZWFsdGggPCB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwID0gKERUTzogU2hpcERUTykgPT4gbmV3IFNoaXAoRFRPKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBcIi4vbW9kdWxlL2RvbS9nYW1lLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBkb21Db250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlL2RvbS9jb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjdHIgPSBkb21Db250cm9sbGVyKCk7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gY3RyLmdhbWVDb250cm9sbGVyO1xuXG5jb25zb2xlLmxvZyg0Mik7XG5cbmN0ci5zaGlwUGxhY2VtZW50KGdhbWVDb250cm9sbGVyLnBsYXllck9uZSwgZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvLmlkLCBmYWxzZSk7XG5jdHIuc2hpcFBsYWNlbWVudChnYW1lQ29udHJvbGxlci5wbGF5ZXJUd28sIGdhbWVDb250cm9sbGVyLnBsYXllck9uZS5pZCwgdHJ1ZSk7XG5cbmN0ci5kb21TdGF0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==