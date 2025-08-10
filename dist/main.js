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
___CSS_LOADER_EXPORT___.push([module.id, `* {
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

form > button,
.place-ship {
  width: 4rem;
  height: 2rem;
  background-color: white;
  color: black;
  border: 1px solid red;
}

form > button:hover,
.place-ship:hover {
  background-color: red;
  color: white;
}

#game-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  place-items: center;
  margin-top: 10px;
  gap: 5rem;
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

.p1-container,
.p2-container {
  display: grid;
  gap: 10px;
}

.oceans {
  display: grid;
  width: 500px;
  height: 500px;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}

.ship-placement {
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
  pointer-events: none;
}

.cell-human,
.cell-computer {
  /* background-color: aliceblue; */
  background: thistle;
  border: 1px solid white;
}

.hide-btn,
.create-ship {
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
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;;EAEE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,2DAA2D;AAC7D;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;;;GAKG;;AAEH;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA,KAAK;AACL;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;EAEE,iCAAiC;EACjC,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n.form-container {\n  display: grid;\n  place-content: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n\nform {\n  height: 250px;\n  margin: 10px;\n  padding: 10px;\n  display: grid;\n  place-items: center;\n  text-align: center;\n}\n\nform > button,\n.place-ship {\n  width: 4rem;\n  height: 2rem;\n  background-color: white;\n  color: black;\n  border: 1px solid red;\n}\n\nform > button:hover,\n.place-ship:hover {\n  background-color: red;\n  color: white;\n}\n\n#game-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  place-content: center;\n  place-items: center;\n  margin-top: 10px;\n  gap: 5rem;\n}\n\n.p1-container {\n  grid-column: 1;\n}\n\n.announcement {\n  grid-column: 2;\n}\n\n.p2-container {\n  grid-column: 3;\n}\n\n.p1-container,\n.p2-container {\n  display: grid;\n  gap: 10px;\n}\n\n.oceans {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n}\n\n.ship-placement {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.vertical-dock {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 100px;\n  gap: 10px;\n}\n\n.horizontal-dock {\n  display: grid;\n  gap: 10px;\n}\n\n/* .vertical-dock {\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(100px, 150px));\n    width: 50px;\n} */\n\n.battleship-vertical-height {\n  height: 199px;\n}\n\n.cruiser-submarine-vertical-height {\n  height: 150px;\n}\n\n.destroyer-vertical-height {\n  height: 100px;\n}\n\n/*  */\n.carrier-horizontal-height {\n  display: flex;\n  width: auto;\n  height: 50px;\n  gap: 1.5px;\n}\n\n.battleship-horizontal-height {\n  display: flex;\n  width: 190px;\n  height: 50px;\n  gap: 1.5px;\n}\n\n.cruiser-submarine-horizontal-height {\n  display: flex;\n  width: 150px;\n  height: 50px;\n  gap: 1.5px;\n}\n\n.destroyer-horizontal-height {\n  display: flex;\n  width: 100px;\n  height: 50px;\n  gap: 1.5px;\n}\n\n.shipment {\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n  background: blue;\n}\n\n.shipment-valid {\n  background-color: green;\n}\n\n.shipment-invalid {\n  background-color: red;\n}\n\n.cell-computer {\n  pointer-events: none;\n}\n\n.cell-human,\n.cell-computer {\n  /* background-color: aliceblue; */\n  background: thistle;\n  border: 1px solid white;\n}\n\n.hide-btn,\n.create-ship {\n  display: none;\n}\n\n.ship {\n  background-color: blue;\n}\n\n.hit {\n  background-color: blanchedalmond;\n}\n\n.sink {\n  background-color: red;\n}\n"],"sourceRoot":""}]);
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
    root.appendChild(announcement);
    root.appendChild(gameContainer);
    (0,_create_dom_state__WEBPACK_IMPORTED_MODULE_3__.createDomState)(gameController);
    return { gameController, shipPlacement };
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
        option.textContent = val;
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
        ship.setAttribute("id", name);
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
    document.querySelector(".announcement")?.appendChild(dock);
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

/***/ "./src/module/dom/game-container.ts":
/*!******************************************!*\
  !*** ./src/module/dom/game-container.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const root = document.getElementById("root");
if (!root)
    throw new Error("No root element found");
const gameContainer = document.createElement("div");
gameContainer.setAttribute("id", "game-container");
root.appendChild(gameContainer);



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
    const winContainer = document.querySelector(".success");
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
        if (gameController.isGameOver) {
            return;
        }
        if (row !== undefined && col !== undefined) {
            if (target.classList.contains("hit") ||
                target.classList.contains("boards")) {
                return false;
            }
            const parent = target.parentNode;
            if (!parent)
                return;
            await gameController.playerOneInput(+row, +col);
            await gameController.playerTwoInput();
            (0,_update_screen__WEBPACK_IMPORTED_MODULE_1__.updateScreen)(gameController);
            if (gameController.isGameOver) {
                return (0,_game_over__WEBPACK_IMPORTED_MODULE_0__.gameOver)(gameController);
            }
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




const createShipPlacement = (DTO) => (player, random) => {
    const controller = new AbortController();
    const { signal, abort } = controller;
    const { directionContainer, startBtn, directionSelect } = DTO;
    startBtn?.addEventListener("click", () => {
        console.log(player.board.dock);
        if (player.board.dock.length !== 0)
            return;
        startBtn.classList.add("hide-btn");
        const ships = document.querySelectorAll(`.cell-${player.id}`);
        ships.forEach((ship) => {
            ship.style.pointerEvents = "auto";
        });
    }, { signal });
    if (random) {
        player.autoPlaceShips();
        return;
    }
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
                break;
            queue.shift();
            current.classList.add(pos);
        }
    }, { signal });
    dock.addEventListener("dragstart", (e) => {
        const parent = e.target.parentNode;
        const children = parent.children;
        const target = e.target;
        const selectedChild = children.namedItem(target.id ?? "");
        if (selectedChild) {
            dragged = selectedChild;
        }
    }, { signal });
    const targetOcean = document.getElementById(`${player.id}-ocean`);
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
        const shipName = dragged.id;
        const shipLen = Number(dragged.dataset.length);
        const ship = player.board.dock.find((ship) => ship.name === shipName && ship.length === shipLen);
        if (!ship?.isShip()) {
            console.log("not a ship", player.board.dock);
            return;
        }
        const direction = ["vertical", "horizontal"].find((dir) => dir === directionSelect.value.toLowerCase()) ?? "";
        if (!(0,_lib_is_valid_direciton__WEBPACK_IMPORTED_MODULE_0__.isValidDirection)(direction)) {
            throw new Error(`invalid direction of ${directionSelect.value}; expected either "horizontal" or "vertical"`);
        }
        if (!(0,_lib_valid_position__WEBPACK_IMPORTED_MODULE_1__.validPosition)(ship, row, col, direction, player.board.ocean)) {
            console.log(player.board.ocean[row]?.[col]);
            return false;
        }
        player.board.placeShip(ship, row, col, direction);
        parent?.removeChild(child);
        if (parent?.children.length === 0) {
            startBtn.classList.remove("hide-btn");
            startBtn.classList.add("show");
            directionContainer.style.display = "none";
            // abort("all ships deployed");
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
const showShips = (player) => player.board.ocean.forEach((row, rIndex) => {
    row.forEach((col, cIndex) => {
        const ship = document.querySelector(`.cell-${player.id}[data-row="${rIndex}"][data-col="${cIndex}"]`);
        if (col) {
            ship?.classList.add("ship");
        }
    });
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
            if (col === null)
                return;
            const cell = document.querySelector(`.cell-${player.id}[data-row="${rIndex}"][data-col="${cIndex}"]`);
            if (!cell)
                return;
            if (!cell.classList.contains("hit") && col === 0) {
                cell.textContent = "miss";
                cell.classList.add("hit");
            }
            if (col === 1) {
                cell.textContent = "hit";
                cell.classList.add("sink");
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
    console.log(playerTwo.board.attackedCoords);
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
        await (0,_lib_wait__WEBPACK_IMPORTED_MODULE_3__.wait)(0);
        const r = Number(row);
        const c = Number(col);
        if (!Number.isNaN(r) && !Number.isNaN(Number(c))) {
            this._playerOne.atkEnemy(r, c);
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
        await (0,_lib_wait__WEBPACK_IMPORTED_MODULE_3__.wait)(0);
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
        if (this._health === 0)
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
/* harmony import */ var _module_dom_game_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/dom/game-container */ "./src/module/dom/game-container.ts");
/* harmony import */ var _module_dom_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/dom/controller */ "./src/module/dom/controller.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const ctr = (0,_module_dom_controller__WEBPACK_IMPORTED_MODULE_1__.domController)();
const gameController = ctr.gameController;
ctr.shipPlacement(gameController.playerOne, false);
ctr.shipPlacement(gameController.playerTwo, true);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBTyxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUVLLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVwQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQztDQUNIO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O1VDeEUxRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFFbUI7QUFDbkM7QUFFckIsTUFBTSxHQUFHLEdBQUcscUVBQWEsRUFBRSxDQUFDO0FBRTVCLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7QUFFMUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvYm9hcmQvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvYm9hcmQvdXRpbHMvY3JlYXRlLWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL3V0aWxzL2Vuc3VyZS1yb3cudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvYm9hcmQvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2NyZWF0ZS1hbm5vdW5jZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2NyZWF0ZS1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2NyZWF0ZS1kb2NrLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtZG9tLXN0YXRlLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtb2NlYW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2dhbWUtY29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9nYW1lLW92ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2dldC1vY2Vhbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vaW5pdC1nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9wbGF5LWxvZ2ljLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9zaGlwLXBvcnRhZ2UudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL3NoaXAtdmlzaWJpbGl0eS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vdXBkYXRlLXNjcmVlbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvbGliL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi9pcy12YWxpZC1kaXJlY2l0b24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvbGliL3NodWZmbGUtYXJyYXkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvbGliL3ZhbGlkLXBvc2l0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi93YWl0LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL3BsYXllci9kYXRhL2JsdWVwcmludHMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvcGxheWVyL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9zaGlwL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuZm9ybSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtID4gYnV0dG9uLFxuLnBsYWNlLXNoaXAge1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbmZvcm0gPiBidXR0b246aG92ZXIsXG4ucGxhY2Utc2hpcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGdhcDogNXJlbTtcbn1cblxuLnAxLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uYW5ub3VuY2VtZW50IHtcbiAgZ3JpZC1jb2x1bW46IDI7XG59XG5cbi5wMi1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMztcbn1cblxuLnAxLWNvbnRhaW5lcixcbi5wMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG59XG5cbi5vY2VhbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwcHgsIDFmcikpO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udmVydGljYWwtZG9jayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIHdpZHRoOiAxMDBweDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaG9yaXpvbnRhbC1kb2NrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4vKiAudmVydGljYWwtZG9jayB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTAwcHgsIDE1MHB4KSk7XG4gICAgd2lkdGg6IDUwcHg7XG59ICovXG5cbi5iYXR0bGVzaGlwLXZlcnRpY2FsLWhlaWdodCB7XG4gIGhlaWdodDogMTk5cHg7XG59XG5cbi5jcnVpc2VyLXN1Ym1hcmluZS12ZXJ0aWNhbC1oZWlnaHQge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uZGVzdHJveWVyLXZlcnRpY2FsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi8qICAqL1xuLmNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICBnYXA6IDEuNXB4O1xufVxuXG4uYmF0dGxlc2hpcC1ob3Jpem9udGFsLWhlaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBnYXA6IDEuNXB4O1xufVxuXG4uY3J1aXNlci1zdWJtYXJpbmUtaG9yaXpvbnRhbC1oZWlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZ2FwOiAxLjVweDtcbn1cblxuLmRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBnYXA6IDEuNXB4O1xufVxuXG4uc2hpcG1lbnQge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLnNoaXBtZW50LXZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5zaGlwbWVudC1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2VsbC1jb21wdXRlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2VsbC1odW1hbixcbi5jZWxsLWNvbXB1dGVyIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xuICBiYWNrZ3JvdW5kOiB0aGlzdGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmhpZGUtYnRuLFxuLmNyZWF0ZS1zaGlwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbi5zaW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsS0FBSztBQUNMO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gPiBidXR0b24sXFxuLnBsYWNlLXNoaXAge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbjpob3ZlcixcXG4ucGxhY2Utc2hpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4ucDEtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4uYW5ub3VuY2VtZW50IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4ucDItY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4ucDEtY29udGFpbmVyLFxcbi5wMi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm9jZWFucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwcHgsIDFmcikpO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udmVydGljYWwtZG9jayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmhvcml6b250YWwtZG9jayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiAudmVydGljYWwtZG9jayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTAwcHgsIDE1MHB4KSk7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn0gKi9cXG5cXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgaGVpZ2h0OiAxOTlweDtcXG59XFxuXFxuLmNydWlzZXItc3VibWFyaW5lLXZlcnRpY2FsLWhlaWdodCB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLXZlcnRpY2FsLWhlaWdodCB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4uY2Fycmllci1ob3Jpem9udGFsLWhlaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcC1ob3Jpem9udGFsLWhlaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDE5MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxLjVweDtcXG59XFxuXFxuLmNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBnYXA6IDEuNXB4O1xcbn1cXG5cXG4uc2hpcG1lbnQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5zaGlwbWVudC12YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnNoaXBtZW50LWludmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2VsbC1jb21wdXRlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmNlbGwtaHVtYW4sXFxuLmNlbGwtY29tcHV0ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xcbiAgYmFja2dyb3VuZDogdGhpc3RsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaGlkZS1idG4sXFxuLmNyZWF0ZS1zaGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5zaW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0eXBlIHsgR2V0UmV0dXJuVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCwgdHlwZSBJU2hpcCB9IGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcbmltcG9ydCB7IHZhbGlkUG9zaXRpb24gfSBmcm9tIFwiLi4vbGliL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVCb2FyZCwgZW5zdXJlUm93IH0gZnJvbSBcIi4vdXRpbHMvaW5kZXhcIjtcblxuZXhwb3J0IHR5cGUgVEF0dGFja2VkQ29vcmRzID0gKG51bWJlciB8IG51bGwpW11bXTtcblxuZXhwb3J0IHR5cGUgVFZpcnR1YWxPY2VhbiA9IFtudW1iZXIsIG51bWJlcl1bXVtdO1xuXG5leHBvcnQgdHlwZSBUT2NlYW4gPSAoSVNoaXAgfCBudWxsKVtdW107XG5cbmV4cG9ydCB0eXBlIFREaXJlY3Rpb24gPSBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcblxuZXhwb3J0IHR5cGUgVERvY2sgPSBJU2hpcFtdO1xuXG5leHBvcnQgdHlwZSBUQXRrUmVzID0gXCJoaXRcIiB8IFwibWlzc1wiIHwgXCJhbHJlYWR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdhbWVCb2FyZCB7XG4gIHJlYWRvbmx5IG9jZWFuOiBUT2NlYW47XG4gIHJlYWRvbmx5IHZpcnR1YWxPY2VhbjogVFZpcnR1YWxPY2VhbjtcbiAgcmVhZG9ubHkgYXR0YWNrZWRDb29yZHM6IFRBdHRhY2tlZENvb3JkcztcbiAgcmVhZG9ubHkgZG9jazogVERvY2s7XG4gIHJlYWRvbmx5IGRlcGxveWVkU2hpcHM6IFREb2NrO1xuICBpbml0U2hpcHMoYmx1ZXByaW50czogUmVhZG9ubHk8eyBuYW1lOiBzdHJpbmc7IGxlbmd0aDogbnVtYmVyIH1bXT4pOiB2b2lkO1xuICBwbGFjZVNoaXAoc2hpcDogSVNoaXAsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZGlyOiBURGlyZWN0aW9uKTogYm9vbGVhbjtcbiAgcmVjZWl2ZWRBdGsocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogVEF0a1JlcztcbiAgYWxsU2hpcHNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IEJPQVJEX0xFTiA9IDEwO1xuXG5jbGFzcyBHYW1lQm9hcmQgaW1wbGVtZW50cyBJR2FtZUJvYXJkIHtcbiAgcHJpdmF0ZSBfb2NlYW46IFRPY2VhbjtcbiAgcHJpdmF0ZSBfdmlydHVhbE9jZWFuOiBUVmlydHVhbE9jZWFuO1xuICBwcml2YXRlIF9hdHRhY2tlZENvb3JkczogVEF0dGFja2VkQ29vcmRzO1xuICBwcml2YXRlIF9kb2NrOiBURG9jaztcbiAgcHJpdmF0ZSBfZGVwbG95ZWRTaGlwczogVERvY2s7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fb2NlYW4gPSBjcmVhdGVCb2FyZChCT0FSRF9MRU4sICgpID0+IG51bGwpO1xuICAgIHRoaXMuX3ZpcnR1YWxPY2VhbiA9IGNyZWF0ZUJvYXJkKEJPQVJEX0xFTiwgKHJvdywgY29sKSA9PiBbcm93LCBjb2xdKTtcbiAgICB0aGlzLl9hdHRhY2tlZENvb3JkcyA9IGNyZWF0ZUJvYXJkKEJPQVJEX0xFTiwgKCkgPT4gbnVsbCk7XG4gICAgdGhpcy5fZG9jayA9IFtdO1xuICAgIHRoaXMuX2RlcGxveWVkU2hpcHMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0U2hpcHMgPSAoXG4gICAgYmx1ZXByaW50czogUmVhZG9ubHk8eyBuYW1lOiBzdHJpbmc7IGxlbmd0aDogbnVtYmVyIH1bXT4sXG4gICkgPT4ge1xuICAgIGJsdWVwcmludHMuZm9yRWFjaCgoeyBuYW1lLCBsZW5ndGggfSkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RvY2suZmluZCgocykgPT4gcy5uYW1lID09PSBuYW1lICYmIHMubGVuZ3RoID09PSBsZW5ndGgpKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIGBZb3UgY2FuIG9ubHkgaGF2ZSBhIG9uZSB0eXBlIG9mICR7bmFtZX0gd2l0aCBsZW5ndGggb2YgJHtsZW5ndGh9YCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZG9jay5wdXNoKGNyZWF0ZVNoaXAoeyBuYW1lLCBsZW5ndGggfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBwbGFjZVNoaXAgPSAoXG4gICAgc2hpcDogSVNoaXAsXG4gICAgcm93OiBudW1iZXIsXG4gICAgY29sOiBudW1iZXIsXG4gICAgZGlyOiBURGlyZWN0aW9uLFxuICApID0+IHtcbiAgICBpZiAoIXZhbGlkUG9zaXRpb24oc2hpcCwgcm93LCBjb2wsIGRpciwgdGhpcy5fb2NlYW4pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IFtyLCBjXSA9IGRpciA9PT0gXCJob3Jpem9udGFsXCIgPyBbcm93LCBjb2wgKyBpXSA6IFtyb3cgKyBpLCBjb2xdO1xuXG4gICAgICBlbnN1cmVSb3codGhpcy5fb2NlYW4sIHIpW2NdID0gc2hpcDtcblxuICAgICAgc2hpcC5wb3NpdGlvbnMgPSB7IHJvdzogciwgY29sOiBjIH07XG4gICAgfVxuXG4gICAgdGhpcy5fZG9jayA9IHRoaXMuX2RvY2suZmlsdGVyKFxuICAgICAgKHMpID0+ICEocy5uYW1lID09PSBzaGlwLm5hbWUgJiYgcy5sZW5ndGggPT09IHNoaXAubGVuZ3RoKSxcbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLl9kZXBsb3llZFNoaXBzLmluY2x1ZGVzKHNoaXApKSB7XG4gICAgICB0aGlzLl9kZXBsb3llZFNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcHVibGljIHJlY2VpdmVkQXRrID0gKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IE1JU1MgPSAwO1xuICAgIGNvbnN0IEhJVCA9IDE7XG5cbiAgICBpZiAodGhpcy5fYXR0YWNrZWRDb29yZHNbcm93XT8uW2NvbF0gIT09IG51bGwpIHJldHVybiBcImFscmVhZHlcIjtcblxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gdGhpcy5fb2NlYW5bcm93XT8uW2NvbF07XG5cbiAgICBpZiAoIWN1cnJlbnRTaGlwPy5pc1NoaXAoKSkge1xuICAgICAgZW5zdXJlUm93KHRoaXMuX2F0dGFja2VkQ29vcmRzLCByb3cpW2NvbF0gPSBNSVNTO1xuXG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuXG4gICAgY3VycmVudFNoaXAuaGl0KCk7XG5cbiAgICBlbnN1cmVSb3codGhpcy5fYXR0YWNrZWRDb29yZHMsIHJvdylbY29sXSA9IEhJVDtcblxuICAgIHJldHVybiBcImhpdFwiO1xuICB9O1xuXG4gIHB1YmxpYyBhbGxTaGlwc1N1bmsgPSAoKSA9PlxuICAgIHRoaXMuX2RlcGxveWVkU2hpcHNcbiAgICAgIC5tYXAoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpXG4gICAgICAuZXZlcnkoKGhhc1N1bmspID0+IGhhc1N1bmsgPT09IHRydWUpO1xuXG4gIHB1YmxpYyBnZXQgb2NlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29jZWFuO1xuICB9XG5cbiAgcHVibGljIGdldCB2aXJ0dWFsT2NlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxPY2VhbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jaztcbiAgfVxuICBwdWJsaWMgZ2V0IGRlcGxveWVkU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveWVkU2hpcHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGF0dGFja2VkQ29vcmRzKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2tlZENvb3JkcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4gbmV3IEdhbWVCb2FyZCgpO1xuXG5jb25zdCB0OiBUT2NlYW4gPSBjcmVhdGVCb2FyZChCT0FSRF9MRU4sICgpID0+XG4gIE1hdGgucmFuZG9tKCkgPiAwLjUgPyBudWxsIDogY3JlYXRlU2hpcCh7IG5hbWU6IFwiY3J1aXNlclwiLCBsZW5ndGg6IDUgfSksXG4pO1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUJvYXJkID0gPFQ+KFxuICBsZW5ndGg6IG51bWJlcixcbiAgZm46IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IFQsXG4pID0+XG4gIEFycmF5LmZyb20oeyBsZW5ndGggfSwgKF8sIHJvdykgPT5cbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBjb2wpID0+IGZuKHJvdywgY29sKSksXG4gICk7XG4iLCJleHBvcnQgY29uc3QgZW5zdXJlUm93ID0gPFQ+KGFycjogVFtdW10sIHJvdzogbnVtYmVyKSA9PlxuICBhcnJbcm93XSA/PyAoYXJyW3Jvd10gPSBbXSk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jcmVhdGUtYm9hcmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Vuc3VyZS1yb3dcIjtcbiIsImltcG9ydCB0eXBlIHsgSVBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgeyBjcmVhdGVHYW1lLCB0eXBlIElHYW1lIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IHsgY3JlYXRlQW5ub3VuY2VtZW50IH0gZnJvbSBcIi4vY3JlYXRlLWFubm91bmNlbWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aW9uIH0gZnJvbSBcIi4vY3JlYXRlLWRpcmVjdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlRG9tU3RhdGUgfSBmcm9tIFwiLi9jcmVhdGUtZG9tLXN0YXRlXCI7XG5pbXBvcnQgeyBpbml0R2FtZSB9IGZyb20gXCIuL2luaXQtZ2FtZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hpcFBsYWNlbWVudCB9IGZyb20gXCIuL3NoaXAtcG9ydGFnZVwiO1xuXG5leHBvcnQgY29uc3QgZG9tQ29udHJvbGxlciA9ICgpOiB7XG4gIGdhbWVDb250cm9sbGVyOiBJR2FtZTtcbiAgc2hpcFBsYWNlbWVudChwbGF5ZXI6IElQbGF5ZXIsIHJhbmRvbT86IGJvb2xlYW4pOiB2b2lkO1xufSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgaWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoXCJObyByb290IGVsZW1lbnQgZm91bmRcIik7XG5cbiAgY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSBjcmVhdGVHYW1lKCk7XG5cbiAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGluaXRHYW1lKGdhbWVDb250cm9sbGVyKTtcblxuICBjb25zdCBhbm5vdW5jZW1lbnQgPSBjcmVhdGVBbm5vdW5jZW1lbnQoKTtcblxuICBjb25zdCBkaXJlY3Rpb24gPSBjcmVhdGVEaXJlY3Rpb24oYW5ub3VuY2VtZW50KTtcblxuICBjb25zdCBzaGlwUGxhY2VtZW50ID0gY3JlYXRlU2hpcFBsYWNlbWVudChkaXJlY3Rpb24pO1xuXG4gIHJvb3QuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50KTtcblxuICByb290LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuXG4gIGNyZWF0ZURvbVN0YXRlKGdhbWVDb250cm9sbGVyKTtcblxuICByZXR1cm4geyBnYW1lQ29udHJvbGxlciwgc2hpcFBsYWNlbWVudCB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVBbm5vdW5jZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhbm5vdW5jZW1lbnRcIik7XG5cbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGVycm9yLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcblxuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHdpbm5lci5jbGFzc0xpc3QuYWRkKFwic3VjY2Vzc1wiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcbiIsImltcG9ydCB0eXBlIHsgR2V0UmV0dXJuVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy9nZXQtcmV0dXJuLXR5cGUudHNcIjtcblxuZXhwb3J0IHR5cGUgVENyZWF0ZURpcmVjdGlvbiA9IEdldFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZURpcmVjdGlvbj47XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3Rpb24gPSAocGFyZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBkaXJlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaGlwUGxhY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkaXJlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvblwiKTtcbiAgc2hpcFBsYWNlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZW1lbnRcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwicGxhY2Utc2hpcFwiKTtcblxuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgZGlyZWN0aW9uOlwiO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwic3RhcnRcIjtcblxuICBjb25zdCBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gIGNvbnN0IHZhbHVlcyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXSBhcyBjb25zdDtcblxuICB2YWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcblxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbDtcblxuICAgIGRpcmVjdGlvblNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICBsYWJlbC5hcHBlbmRDaGlsZChkaXJlY3Rpb25TZWxlY3QpO1xuXG4gIGRpcmVjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIHNoaXBQbGFjZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXJlY3Rpb25Db250YWluZXIpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2hpcFBsYWNlbWVudCk7XG5cbiAgcmV0dXJuIHsgZGlyZWN0aW9uQ29udGFpbmVyLCBzaGlwUGxhY2VtZW50LCBzdGFydEJ0biwgZGlyZWN0aW9uU2VsZWN0IH07XG59O1xuIiwiaW1wb3J0IHsgc2hpcEJsdWVQcmludHMgfSBmcm9tIFwiLi4vcGxheWVyL2RhdGEvYmx1ZXByaW50c1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRG9jayA9ICgpID0+IHtcbiAgY29uc3QgZG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZG9jay5jbGFzc0xpc3QuYWRkKFwidmVydGljYWwtZG9ja1wiKTtcblxuICBjb25zdCBzaGlwcyA9IHNoaXBCbHVlUHJpbnRzLm1hcCgoeyBuYW1lLCBsZW5ndGggfSwgaSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwidmVydGljYWwtZGlyXCIpO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmFtZSk7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxlbmd0aFwiLCBsZW5ndGgudG9TdHJpbmcoKSk7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkudG9TdHJpbmcoKSk7XG5cbiAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG5cbiAgICBjb25zdCBidG5zID0gQXJyYXkuZnJvbSh7IGxlbmd0aCB9LCAoKSA9PiB7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNoaXBtZW50XCIpO1xuXG4gICAgICByZXR1cm4gYnRuO1xuICAgIH0pO1xuXG4gICAgc2hpcC5hcHBlbmQoLi4uYnRucyk7XG5cbiAgICBkb2NrLmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5ub3VuY2VtZW50XCIpPy5hcHBlbmRDaGlsZChkb2NrKTtcblxuICByZXR1cm4geyBkb2NrLCBzaGlwcyB9O1xufTtcbiIsImltcG9ydCB0eXBlIHsgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgeyBnZXRPY2VhbiB9IGZyb20gXCIuL2dldC1vY2VhblwiO1xuaW1wb3J0IHsgcGxheUxvZ2ljIH0gZnJvbSBcIi4vcGxheS1sb2dpY1wiO1xuXG5leHBvcnQgeyB1cGRhdGVTY3JlZW4gfSBmcm9tIFwiLi91cGRhdGUtc2NyZWVuXCI7XG5leHBvcnQgeyBnYW1lT3ZlciB9IGZyb20gXCIuL2dhbWUtb3ZlclwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRG9tU3RhdGUgPSAoZ2FtZUNvbnRyb2xsZXI6IElHYW1lKSA9PiB7XG4gIGNvbnN0IHBsYXllck9uZU9DZWFuID0gZ2V0T2NlYW4oZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lLmlkKTtcbiAgY29uc3QgcGxheWVyT25lT1R3byA9IGdldE9jZWFuKGdhbWVDb250cm9sbGVyLnBsYXllclR3by5pZCk7XG5cbiAgcGxheWVyT25lT0NlYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcGxheUxvZ2ljKGUsIGdhbWVDb250cm9sbGVyKTtcbiAgfSk7XG5cbiAgcGxheWVyT25lT1R3by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBwbGF5TG9naWMoZSwgZ2FtZUNvbnRyb2xsZXIpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IFRWaXJ0dWFsT2NlYW4gfSBmcm9tIFwiLi4vYm9hcmQvYm9hcmQudHNcIjtcbmltcG9ydCB0eXBlIHsgSVBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLnRzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVPY2VhbiA9IChwbGF5ZXI6IElQbGF5ZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBvY2VhbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci5pZH0tY29udGFpbmVyYCk7XG5cbiAgb2NlYW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cGxheWVyLmlkfS1vY2VhbmApO1xuICBvY2VhbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9jZWFuc1wiKTtcblxuICBwbGF5ZXIuYm9hcmQudmlydHVhbE9jZWFuXG4gICAgLmZsYXRNYXAoKGMpID0+IGMpXG4gICAgLmZvckVhY2goKFtyb3csIGNvbF0pID0+IHtcbiAgICAgIGNvbnN0IGNvbENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIHJvdy50b1N0cmluZygpKTtcbiAgICAgIGNvbENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIiwgY29sLnRvU3RyaW5nKCkpO1xuICAgICAgY29sQ2VsbC5jbGFzc0xpc3QuYWRkKGBjZWxsLSR7cGxheWVyLmlkfWApO1xuICAgICAgY29sQ2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJvcC10YXJnZXRcIik7XG5cbiAgICAgIG9jZWFuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbENlbGwpO1xuICAgIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvY2VhbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iLCJjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG5pZiAoIXJvb3QpIHRocm93IG5ldyBFcnJvcihcIk5vIHJvb3QgZWxlbWVudCBmb3VuZFwiKTtcblxuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmdhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLWNvbnRhaW5lclwiKTtcblxucm9vdC5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbiIsImltcG9ydCB0eXBlIHsgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgeyBkaXNhYmxlT2NlYW4gfSBmcm9tIFwiLi91cGRhdGUtc2NyZWVuXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lT3ZlciA9IChnYW1lQ29udHJvbGxlcjogSUdhbWUpID0+IHtcbiAgaWYgKCFnYW1lQ29udHJvbGxlci5pc0dhbWVPdmVyKSByZXR1cm47XG5cbiAgY29uc3Qgd2luQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWNjZXNzXCIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb25zdCB3aW5uZXIgPSBnYW1lQ29udHJvbGxlci53aW5uZXI/Lm5hbWU7XG5cbiAgcC50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7d2lubmVyfWA7XG5cbiAgd2luQ29udGFpbmVyPy5hcHBlbmRDaGlsZChwKTtcblxuICBkaXNhYmxlT2NlYW4oZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lKTtcbiAgZGlzYWJsZU9jZWFuKGdhbWVDb250cm9sbGVyLnBsYXllclR3byk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldE9jZWFuID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgb2NlYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH0tb2NlYW5gKTtcblxuICBpZiAoIW9jZWFuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT2NlYW4gZG9lcyBub3QgZXhpc3RcIik7XG4gIH1cblxuICByZXR1cm4gb2NlYW47XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJR2FtZSB9IGZyb20gXCIuLi9nYW1lL2dhbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU9jZWFuIH0gZnJvbSBcIi4vY3JlYXRlLW9jZWFuXCI7XG5cbmNvbnN0IGNyZWF0ZUdhbWVDb250YWluZXIgPSAoZ2FtZTogSUdhbWUpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnYW1lLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwbGF5ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHBsYXllck9uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllci1vbmVcIik7XG5cbiAgY29uc3QgcGxheWVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwbGF5ZXJUd28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItdHdvXCIpO1xuXG4gIGNvbnN0IHBsYXllck9uZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBwbGF5ZXJPbmVOYW1lLnRleHRDb250ZW50ID0gZ2FtZS5wbGF5ZXJPbmUubmFtZTtcblxuICBjb25zdCBwbGF5ZXJUd29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgcGxheWVyVHdvTmFtZS50ZXh0Q29udGVudCA9IGdhbWUucGxheWVyVHdvLm5hbWU7XG5cbiAgY29uc3QgcGxheWVyT25lT0NlYW4gPSBjcmVhdGVPY2VhbihnYW1lLnBsYXllck9uZSk7XG4gIGNvbnN0IHBsYXllclR3b09DZWFuID0gY3JlYXRlT2NlYW4oZ2FtZS5wbGF5ZXJUd28pO1xuXG4gIHBsYXllck9uZS5hcHBlbmRDaGlsZChwbGF5ZXJPbmVPQ2Vhbik7XG4gIHBsYXllclR3by5hcHBlbmRDaGlsZChwbGF5ZXJUd29PQ2Vhbik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd28pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEdhbWUgPSAoZ2FtZUNvbnRyb2xsZXI6IElHYW1lKSA9PiB7XG4gIGNvbnN0IGdhbWVDb250YWluZXIgPSBjcmVhdGVHYW1lQ29udGFpbmVyKGdhbWVDb250cm9sbGVyKTtcblxuICByZXR1cm4gZ2FtZUNvbnRhaW5lcjtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IElHYW1lIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IHsgZ2FtZU92ZXIgfSBmcm9tIFwiLi9nYW1lLW92ZXJcIjtcbmltcG9ydCB7IGRpc2FibGVPY2VhbiwgZW5hYmxlT2NlYW4sIHVwZGF0ZVNjcmVlbiB9IGZyb20gXCIuL3VwZGF0ZS1zY3JlZW5cIjtcblxuZXhwb3J0IGNvbnN0IHBsYXlMb2dpYyA9IGFzeW5jIChlOiBNb3VzZUV2ZW50LCBnYW1lQ29udHJvbGxlcjogSUdhbWUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZT8udGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmICghdGFyZ2V0KSByZXR1cm47XG5cbiAgY29uc3QgeyByb3cgfSA9IHRhcmdldC5kYXRhc2V0O1xuICBjb25zdCB7IGNvbCB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG5cbiAgdHJ5IHtcbiAgICBpZiAoZ2FtZUNvbnRyb2xsZXIuaXNHYW1lT3Zlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyb3cgIT09IHVuZGVmaW5lZCAmJiBjb2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZHNcIilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuXG4gICAgICBhd2FpdCBnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmVJbnB1dCgrcm93LCArY29sKTtcblxuICAgICAgYXdhaXQgZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvSW5wdXQoKTtcblxuICAgICAgdXBkYXRlU2NyZWVuKGdhbWVDb250cm9sbGVyKTtcblxuICAgICAgaWYgKGdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyKGdhbWVDb250cm9sbGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9yID0gRXJyb3IoXCJ5b3UgY2xpY2tlZCB0aGUgYm9hcmQgZnJhbWVcIik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgVENyZWF0ZURpcmVjdGlvbiB9IGZyb20gXCIuL2NyZWF0ZS1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IGlzVmFsaWREaXJlY3Rpb24gfSBmcm9tIFwiLi4vbGliL2lzLXZhbGlkLWRpcmVjaXRvblwiO1xuaW1wb3J0IHsgdmFsaWRQb3NpdGlvbiB9IGZyb20gXCIuLi9saWIvdmFsaWQtcG9zaXRpb25cIjtcbmltcG9ydCB7IGNyZWF0ZURvY2sgfSBmcm9tIFwiLi9jcmVhdGUtZG9ja1wiO1xuaW1wb3J0IHsgc2hvd1NoaXBzIH0gZnJvbSBcIi4vc2hpcC12aXNpYmlsaXR5XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwUGxhY2VtZW50ID1cbiAgKERUTzogVENyZWF0ZURpcmVjdGlvbikgPT4gKHBsYXllcjogSVBsYXllciwgcmFuZG9tPzogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBjb25zdCB7IHNpZ25hbCwgYWJvcnQgfSA9IGNvbnRyb2xsZXI7XG5cbiAgICBjb25zdCB7IGRpcmVjdGlvbkNvbnRhaW5lciwgc3RhcnRCdG4sIGRpcmVjdGlvblNlbGVjdCB9ID0gRFRPO1xuXG4gICAgc3RhcnRCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5kb2NrKTtcbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5kb2NrLmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJ0blwiKTtcblxuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgIGAuY2VsbC0ke3BsYXllci5pZH1gLFxuICAgICAgICApO1xuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICBzaGlwLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgeyBzaWduYWwgfSxcbiAgICApO1xuXG4gICAgaWYgKHJhbmRvbSkge1xuICAgICAgcGxheWVyLmF1dG9QbGFjZVNoaXBzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZHJhZ2dlZDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHsgZG9jaywgc2hpcHMgfSA9IGNyZWF0ZURvY2soKTtcblxuICAgIGRpcmVjdGlvblNlbGVjdD8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzUG9zID0ge1xuICAgICAgICAgIGNhcnJpZXI6IFwiY2Fycmllci1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICAgIGJhdHRsZXNoaXA6IFwiYmF0dGxlc2hpcC1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICAgIGNydWlzZXI6IFwiY3J1aXNlci1zdWJtYXJpbmUtaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgICBkZXN0cm95ZXI6IFwiZGVzdHJveWVyLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICBkb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJ2ZXJ0aWNhbC1kb2NrXCIpO1xuXG4gICAgICAgICAgZG9jay5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvbnRhbC1kb2NrXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY2suY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsLWRvY2tcIik7XG5cbiAgICAgICAgICBkb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJob3Jpem9udGFsLWRvY2tcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWV1ZSA9IFsuLi5zaGlwc107XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZVswXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikgY29udGludWU7XG5cbiAgICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGN1cnJlbnQuZGF0YXNldD8ubmFtZTtcblxuICAgICAgICAgIGNvbnN0IHBvcyA9IHNoaXBOYW1lXG4gICAgICAgICAgICA/IGNsYXNzUG9zW3NoaXBOYW1lIGFzIGtleW9mIHR5cGVvZiBjbGFzc1Bvc11cbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgIGlmICghcG9zKSBicmVhaztcblxuICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKHBvcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbCB9LFxuICAgICk7XG5cbiAgICBkb2NrLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRyYWdzdGFydFwiLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gPEhUTUxFbGVtZW50Pig8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hpbGQgPSBjaGlsZHJlbi5uYW1lZEl0ZW0oXG4gICAgICAgICAgdGFyZ2V0LmlkID8/IFwiXCIsXG4gICAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQ2hpbGQpIHtcbiAgICAgICAgICBkcmFnZ2VkID0gc2VsZWN0ZWRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IHRhcmdldE9jZWFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyLmlkfS1vY2VhbmApO1xuXG4gICAgaWYgKCF0YXJnZXRPY2VhbilcbiAgICAgIHRocm93IG5ldyBFcnJvcihgcGxheWVyIG9jZWFuIHdpdGggSUQgb2YgJHtwbGF5ZXIuaWR9IGlzIG5vdCBmb3VuZGApO1xuXG4gICAgdGFyZ2V0T2NlYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZHJhZ292ZXJcIixcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbCB9LFxuICAgICk7XG5cbiAgICB0YXJnZXRPY2Vhbi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsICgpID0+IHt9KTtcblxuICAgIHRhcmdldE9jZWFuLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKCkgPT4ge30pO1xuXG4gICAgdGFyZ2V0T2NlYW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZHJvcFwiLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgaWYgKCFkcmFnZ2VkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRyYWdnZWQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkcmFnZ2VkO1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIodGFyZ2V0LmRhdGFzZXQucm93KTtcbiAgICAgICAgY29uc3QgY29sID0gTnVtYmVyKHRhcmdldC5kYXRhc2V0LmNvbCk7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZHJhZ2dlZC5pZDtcbiAgICAgICAgY29uc3Qgc2hpcExlbiA9IE51bWJlcihkcmFnZ2VkLmRhdGFzZXQubGVuZ3RoKTtcblxuICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyLmJvYXJkLmRvY2suZmluZChcbiAgICAgICAgICAoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSAmJiBzaGlwLmxlbmd0aCA9PT0gc2hpcExlbixcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzaGlwPy5pc1NoaXAoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGEgc2hpcFwiLCBwbGF5ZXIuYm9hcmQuZG9jayk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID1cbiAgICAgICAgICBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl0uZmluZChcbiAgICAgICAgICAgIChkaXIpID0+IGRpciA9PT0gZGlyZWN0aW9uU2VsZWN0LnZhbHVlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgKSA/PyBcIlwiO1xuXG4gICAgICAgIGlmICghaXNWYWxpZERpcmVjdGlvbihkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYGludmFsaWQgZGlyZWN0aW9uIG9mICR7ZGlyZWN0aW9uU2VsZWN0LnZhbHVlfTsgZXhwZWN0ZWQgZWl0aGVyIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcImAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmFsaWRQb3NpdGlvbihzaGlwLCByb3csIGNvbCwgZGlyZWN0aW9uLCBwbGF5ZXIuYm9hcmQub2NlYW4pKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkLm9jZWFuW3Jvd10/Lltjb2xdKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIHBhcmVudD8ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXG4gICAgICAgIGlmIChwYXJlbnQ/LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWJ0blwiKTtcbiAgICAgICAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICAgICAgICAgIGRpcmVjdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgICAvLyBhYm9ydChcImFsbCBzaGlwcyBkZXBsb3llZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaG93U2hpcHMocGxheWVyKTtcbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbCB9LFxuICAgICk7XG4gIH07XG4iLCJpbXBvcnQgdHlwZSB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci50c1wiO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NoaXBzID0gKHBsYXllcjogSVBsYXllcikgPT5cbiAgcGxheWVyLmJvYXJkLm9jZWFuLmZvckVhY2goKHJvdywgckluZGV4KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbCwgY0luZGV4KSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5jZWxsLSR7cGxheWVyLmlkfVtkYXRhLXJvdz1cIiR7ckluZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y0luZGV4fVwiXWAsXG4gICAgICApO1xuXG4gICAgICBpZiAoY29sKSB7XG4gICAgICAgIHNoaXA/LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGhpZGVTaGlwcyA9IChwbGF5ZXI6IElQbGF5ZXIpID0+XG4gIHBsYXllci5ib2FyZC5kZXBsb3llZFNoaXBzLm1hcCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHNoaXAucG9zaXRpb25zO1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGwtJHtwbGF5ZXIuaWR9W2RhdGEtcm93XCIke3Jvd31cIl1bZGF0YS1jb2xcIiR7Y29sfVwiXWAsXG4gICAgKTtcblxuICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcblxuICAgIHJldHVybiBjZWxsO1xuICB9KTtcbiIsImltcG9ydCB0eXBlIHsgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lLnRzXCI7XG5pbXBvcnQgdHlwZSB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci50c1wiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQXR0YWNrZWRDb29yZHMgPSAocGxheWVyOiBJUGxheWVyKSA9PiB7XG4gIHBsYXllci5ib2FyZC5hdHRhY2tlZENvb3Jkcy5mb3JFYWNoKChyb3csIHJJbmRleCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2wsIGNJbmRleCkgPT4ge1xuICAgICAgaWYgKGNvbCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5jZWxsLSR7cGxheWVyLmlkfVtkYXRhLXJvdz1cIiR7ckluZGV4fVwiXVtkYXRhLWNvbD1cIiR7Y0luZGV4fVwiXWAsXG4gICAgICApO1xuXG4gICAgICBpZiAoIWNlbGwpIHJldHVybjtcblxuICAgICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwibWlzc1wiO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wgPT09IDEpIHtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IFwiaGl0XCI7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNpbmtcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclN1bmtTaGlwcyA9IChwbGF5ZXI6IElQbGF5ZXIpID0+IHtcbiAgY29uc3Qgc3Vua1NoaXBzID0gcGxheWVyLmJvYXJkLmRlcGxveWVkU2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBzdW5rU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHNoaXAucG9zaXRpb25zO1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGwtJHtwbGF5ZXIuaWR9W2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCxcbiAgICApO1xuXG4gICAgY2VsbD8uY2xhc3NMaXN0LmFkZChcInNpbmtcIik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVPY2VhbiA9IChwbGF5ZXI6IElQbGF5ZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgJHtwbGF5ZXIuaWR9LWNvbnRhaW5lcmAsXG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE9jZWFuIG9mIHBsYXllciB3aXRoIElEIG9mICR7cGxheWVyLmlkfSBkb2VzIG5vdCBleGlzdGApO1xuICB9XG5cbiAgY29udGFpbmVyPy5jaGlsZE5vZGVzLmZvckVhY2goKGMpID0+IHtcbiAgICBjb25zdCBub2RlID0gYyBhcyBIVE1MRWxlbWVudDtcblxuICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB9KTtcblxuICBjb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZU9jZWFuID0gKHBsYXllcjogSVBsYXllcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAke3BsYXllci5pZH0tY29udGFpbmVyYCxcbiAgKSBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgT2NlYW4gb2YgcGxheWVyIHdpdGggSUQgb2YgJHtwbGF5ZXIuaWR9IGRvZXMgbm90IGV4aXN0YCk7XG4gIH1cblxuICBjb250YWluZXI/LmNoaWxkTm9kZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgbm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2NyZWVuID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBjb25zdCB7IHBsYXllck9uZSwgcGxheWVyVHdvIH0gPSBnYW1lQ29udHJvbGxlcjtcblxuICByZW5kZXJBdHRhY2tlZENvb3JkcyhwbGF5ZXJPbmUpO1xuICByZW5kZXJBdHRhY2tlZENvb3JkcyhwbGF5ZXJUd28pO1xuXG4gIGNvbnNvbGUubG9nKHBsYXllclR3by5ib2FyZC5hdHRhY2tlZENvb3Jkcyk7XG5cbiAgcmVuZGVyU3Vua1NoaXBzKHBsYXllck9uZSk7XG4gIHJlbmRlclN1bmtTaGlwcyhwbGF5ZXJUd28pO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCwgdHlwZSBJR2FtZUJvYXJkIH0gZnJvbSBcIi4uL2JvYXJkL2JvYXJkXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIsIHR5cGUgSVBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgeyBzaGlwQmx1ZVByaW50cyB9IGZyb20gXCIuLi9wbGF5ZXIvZGF0YS9ibHVlcHJpbnRzXCI7XG5pbXBvcnQgeyB3YWl0IH0gZnJvbSBcIi4uL2xpYi93YWl0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdhbWUge1xuICBwbGF5ZXJPbmU6IElQbGF5ZXI7XG4gIHBsYXllclR3bzogSVBsYXllcjtcbiAgY3VycmVudFBsYXllcjogSVBsYXllcjtcbiAgaXNHYW1lT3ZlcjogYm9vbGVhbjtcbiAgd2lubmVyOiBJUGxheWVyIHwgbnVsbDtcbiAgc3dpdGNoUGxheWVyKCk6IElQbGF5ZXI7XG4gIHBsYXllck9uZUlucHV0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgcGxheWVyVHdvSW5wdXQocm93PzogbnVtYmVyLCBjb2w/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5jbGFzcyBHYW1lIGltcGxlbWVudHMgSUdhbWUge1xuICBwcml2YXRlIF9pc0dhbWVPdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF93aW5uZXI6IElQbGF5ZXIgfCBudWxsO1xuICBwcml2YXRlIF9wbGF5ZXJPbmVCb2FyZDogSUdhbWVCb2FyZDtcbiAgcHJpdmF0ZSBfcGxheWVyVHdvQm9hcmQ6IElHYW1lQm9hcmQ7XG4gIHByaXZhdGUgX3BsYXllck9uZTogSVBsYXllcjtcbiAgcHJpdmF0ZSBfcGxheWVyVHdvOiBJUGxheWVyO1xuICBwcml2YXRlIF9jdXJyZW50UGxheWVyOiBJUGxheWVyO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuX3dpbm5lciA9IG51bGw7XG5cbiAgICB0aGlzLl9wbGF5ZXJPbmVCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZCgpO1xuICAgIHRoaXMuX3BsYXllclR3b0JvYXJkID0gY3JlYXRlR2FtZUJvYXJkKCk7XG5cbiAgICB0aGlzLl9wbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoe1xuICAgICAgbmFtZTogXCJQbGF5ZXIgT25lXCIsXG4gICAgICBib2FyZDogdGhpcy5fcGxheWVyT25lQm9hcmQsXG4gICAgICBlbmVteUJvYXJkOiB0aGlzLl9wbGF5ZXJUd29Cb2FyZCxcbiAgICAgIGJsdWVwcmludHM6IHNoaXBCbHVlUHJpbnRzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fcGxheWVyVHdvID0gY3JlYXRlUGxheWVyKHtcbiAgICAgIG5hbWU6IFwiUGxheWVyIFR3b1wiLFxuICAgICAgYm9hcmQ6IHRoaXMuX3BsYXllclR3b0JvYXJkLFxuICAgICAgZW5lbXlCb2FyZDogdGhpcy5fcGxheWVyT25lQm9hcmQsXG4gICAgICBibHVlcHJpbnRzOiBzaGlwQmx1ZVByaW50cyxcbiAgICB9KTtcblxuICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXIgPSB0aGlzLl9wbGF5ZXJPbmU7XG4gIH1cblxuICBwdWJsaWMgc3dpdGNoUGxheWVyKCk6IElQbGF5ZXIge1xuICAgIGlmICh0aGlzLl9jdXJyZW50UGxheWVyLm5hbWUgPT09IHRoaXMuX3BsYXllck9uZS5uYW1lKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gdGhpcy5fcGxheWVyVHdvO1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQbGF5ZXI7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudFBsYXllciA9IHRoaXMuX3BsYXllck9uZTtcblxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGxheWVyO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHBsYXllck9uZUlucHV0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IHdhaXQoMCk7XG5cbiAgICBjb25zdCByID0gTnVtYmVyKHJvdyk7XG4gICAgY29uc3QgYyA9IE51bWJlcihjb2wpO1xuXG4gICAgaWYgKCFOdW1iZXIuaXNOYU4ocikgJiYgIU51bWJlci5pc05hTihOdW1iZXIoYykpKSB7XG4gICAgICB0aGlzLl9wbGF5ZXJPbmUuYXRrRW5lbXkociwgYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BsYXllck9uZS5hdXRvQXRrKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BsYXllclR3by5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICB0aGlzLl93aW5uZXIgPSB0aGlzLl9wbGF5ZXJPbmU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN3aXRjaFBsYXllcigpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHBsYXllclR3b0lucHV0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IHdhaXQoMCk7XG5cbiAgICBpZiAocm93ICYmIGNvbCkge1xuICAgICAgdGhpcy5fcGxheWVyVHdvLmF0a0VuZW15KHJvdywgY29sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyVHdvLmF1dG9BdGsoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGxheWVyVHdvLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3dpbm5lciA9IHRoaXMuX3BsYXllclR3bztcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gIH1cblxuICBnZXQgcGxheWVyT25lKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJPbmU7XG4gIH1cblxuICBnZXQgcGxheWVyVHdvKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJUd287XG4gIH1cblxuICBnZXQgY3VycmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBsYXllcjtcbiAgfVxuXG4gIGdldCBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0dhbWVPdmVyO1xuICB9XG5cbiAgZ2V0IHdpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lubmVyO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVHYW1lID0gKCkgPT4gbmV3IEdhbWUoKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL3ZhbGlkLXBvc2l0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zaHVmZmxlLWFycmF5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pcy12YWxpZC1kaXJlY2l0b25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dhaXRcIjtcbiIsImltcG9ydCB0eXBlIHsgVERpcmVjdGlvbiB9IGZyb20gXCIuLi9ib2FyZC9ib2FyZC50c1wiO1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZERpcmVjdGlvbiA9IChkaXI6IHN0cmluZyk6IGRpciBpcyBURGlyZWN0aW9uID0+IHtcbiAgcmV0dXJuIChcbiAgICAoZGlyIGFzIFREaXJlY3Rpb24pID09PSBcImhvcml6b250YWxcIiB8fCAoZGlyIGFzIFREaXJlY3Rpb24pID09PSBcInZlcnRpY2FsXCJcbiAgKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2h1ZmZsZUFycmF5ID0gPFQ+KGFycjogVFtdKSA9PlxuICBhcnJcbiAgICAubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIHNvcnQ6IE1hdGgucmFuZG9tKCkgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiIsImltcG9ydCB0eXBlIHsgSVNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwLnRzXCI7XG5pbXBvcnQgdHlwZSB7IFREaXJlY3Rpb24sIFRPY2VhbiB9IGZyb20gXCIuLi9ib2FyZC9ib2FyZC50c1wiO1xuXG5leHBvcnQgY29uc3QgdmFsaWRQb3NpdGlvbiA9IChcbiAgc2hpcDogSVNoaXAsXG4gIHJvdzogbnVtYmVyLFxuICBjb2w6IG51bWJlcixcbiAgZGlyOiBURGlyZWN0aW9uLFxuICBvY2VhbjogVE9jZWFuLFxuKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChkaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoY29sICsgaSA+IDkgfHwgIW9jZWFuW3Jvd10gfHwgb2NlYW5bcm93XVtjb2wgKyBpXT8uaXNTaGlwKCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJvdyArIGkgPiA5IHx8ICFvY2Vhbltyb3cgKyBpXSB8fCBvY2Vhbltyb3cgKyBpXT8uW2NvbF0/LmlzU2hpcCgpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHdhaXQgPSAobXM6IG51bWJlcikgPT5cbiAgbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICBzZXRUaW1lb3V0KHIsIG1zKTtcbiAgfSk7XG4iLCJleHBvcnQgY29uc3Qgc2hpcEJsdWVQcmludHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImNhcnJpZXJcIixcbiAgICBsZW5ndGg6IDUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImJhdHRsZXNoaXBcIixcbiAgICBsZW5ndGg6IDQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNydWlzZXJcIixcbiAgICBsZW5ndGg6IDMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN1Ym1hcmluZVwiLFxuICAgIGxlbmd0aDogMyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGVzdHJveWVyXCIsXG4gICAgbGVuZ3RoOiAyLFxuICB9LFxuXSBhcyBjb25zdDtcbiIsImltcG9ydCB7IHR5cGUgVERpcmVjdGlvbiwgdHlwZSBJR2FtZUJvYXJkLCB0eXBlIFRBdGtSZXMgfSBmcm9tIFwiLi4vYm9hcmQvYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgSVNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5cbmltcG9ydCB7IHNodWZmbGVBcnJheSB9IGZyb20gXCIuLi9saWIvc2h1ZmZsZS1hcnJheVwiO1xuaW1wb3J0IHsgdmFsaWRQb3NpdGlvbiB9IGZyb20gXCIuLi9saWIvdmFsaWQtcG9zaXRpb25cIjtcblxuZXhwb3J0IHR5cGUgVFBsYWNlU2hpcCA9IHtcbiAgRFRPPzogeyBzaGlwOiBJU2hpcDsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyOyBkaXI6IFREaXJlY3Rpb24gfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBsYXllciB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYm9hcmQ6IElHYW1lQm9hcmQ7XG4gIGF0a0VuZW15KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IFRBdGtSZXM7XG4gIGF1dG9QbGFjZVNoaXBzKCk6IHZvaWQ7XG4gIGF1dG9BdGsoKTogVEF0a1Jlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJEVE8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJvYXJkOiBJR2FtZUJvYXJkO1xuICBlbmVteUJvYXJkOiBJR2FtZUJvYXJkO1xuICBibHVlcHJpbnRzOiBSZWFkb25seTx7IG5hbWU6IHN0cmluZzsgbGVuZ3RoOiBudW1iZXIgfVtdPjtcbn1cblxuY2xhc3MgUGxheWVyIGltcGxlbWVudHMgSVBsYXllciB7XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYm9hcmQ6IElHYW1lQm9hcmQ7XG4gIHByaXZhdGUgX2VuZW15Qm9hcmQ6IElHYW1lQm9hcmQ7XG4gIHByaXZhdGUgX3ZhbGlkQ29vcmRzOiBbbnVtYmVyLCBudW1iZXJdW107XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihEVE86IFBsYXllckRUTykge1xuICAgIHRoaXMuX2lkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICB0aGlzLl9uYW1lID0gRFRPLm5hbWU7XG4gICAgdGhpcy5fYm9hcmQgPSBEVE8uYm9hcmQ7XG4gICAgdGhpcy5fZW5lbXlCb2FyZCA9IERUTy5lbmVteUJvYXJkO1xuICAgIHRoaXMuX2JvYXJkLmluaXRTaGlwcyhEVE8uYmx1ZXByaW50cyk7XG4gICAgdGhpcy5fdmFsaWRDb29yZHMgPSBEVE8uZW5lbXlCb2FyZC52aXJ0dWFsT2NlYW4uZmxhdE1hcCgodikgPT5cbiAgICAgIHYubWFwKCh2KSA9PiB2KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGF0a0VuZW15KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9lbmVteUJvYXJkLnJlY2VpdmVkQXRrKHJvdywgY29sKTtcbiAgfVxuXG4gIHB1YmxpYyBhdXRvUGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFsuLi50aGlzLl9ib2FyZC5kb2NrXTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gcXVldWVbMF07XG5cbiAgICAgIGlmICghY3VycmVudFNoaXA/LmlzU2hpcCgpKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcblxuICAgICAgaWYgKFxuICAgICAgICB2YWxpZFBvc2l0aW9uKFxuICAgICAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgICAgIHJhbmRvbVJvdyxcbiAgICAgICAgICByYW5kb21Db2wsXG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHRoaXMuYm9hcmQub2NlYW4sXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9ib2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHJhbmRvbVJvdywgcmFuZG9tQ29sLCBkaXJlY3Rpb24pO1xuXG4gICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGF1dG9BdGsoKSB7XG4gICAgdGhpcy5fdmFsaWRDb29yZHMgPSBzaHVmZmxlQXJyYXkodGhpcy5fdmFsaWRDb29yZHMpO1xuXG4gICAgaWYgKCF0aGlzLl92YWxpZENvb3Jkcy5sZW5ndGgpIHJldHVybiBcImFscmVhZHlcIjtcblxuICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuX3ZhbGlkQ29vcmRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoIWNvb3JkcykgcmV0dXJuIFwibWlzc1wiO1xuXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcblxuICAgIHJldHVybiB0aGlzLl9lbmVteUJvYXJkLnJlY2VpdmVkQXRrKHJvdywgY29sKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJvYXJkKCk6IElHYW1lQm9hcmQge1xuICAgIHJldHVybiB0aGlzLl9ib2FyZDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUGxheWVyID0gKERUTzogUGxheWVyRFRPKSA9PiBuZXcgUGxheWVyKERUTyk7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElTaGlwIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgaGVhbHRoOiBudW1iZXI7XG4gIGlzU2hpcCgpOiBib29sZWFuO1xuICBoaXQoKTogYm9vbGVhbjtcbiAgcmVzZXRIZWFsdGgoKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG4gIHBvc2l0aW9uczogeyByb3c6IG51bWJlcjsgY29sOiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaGlwRFRPIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZW5ndGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNoaXAgaW1wbGVtZW50cyBJU2hpcCB7XG4gIHByaXZhdGUgX2hlYWx0aDogbnVtYmVyO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuICBwcml2YXRlIF9wb3NpdGlvbnM6IHsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyIH07XG5cbiAgcHVibGljIGlzU2hpcCgpOiB0aGlzIGlzIHR5cGVvZiBTaGlwIHtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIFNoaXA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihEVE86IFNoaXBEVE8pIHtcbiAgICB0aGlzLl9uYW1lID0gRFRPLm5hbWU7XG4gICAgdGhpcy5fbGVuZ3RoID0gRFRPLmxlbmd0aDtcbiAgICB0aGlzLl9oZWFsdGggPSBEVE8ubGVuZ3RoO1xuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IHsgcm93OiAtMSwgY29sOiAtMSB9O1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGVhbHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25zO1xuICB9XG5cbiAgcHVibGljIHNldCBwb3NpdGlvbnMocDogeyByb3c6IG51bWJlcjsgY29sOiBudW1iZXIgfSkge1xuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IHA7XG4gIH1cblxuICBwdWJsaWMgaGl0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLl9oZWFsdGggLT0gMTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHB1YmxpYyByZXNldEhlYWx0aCA9ICgpID0+IHtcbiAgICB0aGlzLl9oZWFsdGggPSB0aGlzLl9sZW5ndGg7XG4gIH07XG5cbiAgcHVibGljIGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5faGVhbHRoID09PSAwKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNoaXAgPSAoRFRPOiBTaGlwRFRPKSA9PiBuZXcgU2hpcChEVE8pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9tb2R1bGUvZG9tL2dhbWUtY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IGRvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9tb2R1bGUvZG9tL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGN0ciA9IGRvbUNvbnRyb2xsZXIoKTtcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSBjdHIuZ2FtZUNvbnRyb2xsZXI7XG5cbmN0ci5zaGlwUGxhY2VtZW50KGdhbWVDb250cm9sbGVyLnBsYXllck9uZSwgZmFsc2UpO1xuY3RyLnNoaXBQbGFjZW1lbnQoZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvLCB0cnVlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==