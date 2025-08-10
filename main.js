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
        if (!gameController.gameStarted)
            return;
        (0,_play_logic__WEBPACK_IMPORTED_MODULE_1__.playLogic)(e, gameController);
    });
    playerOneOTwo.addEventListener("click", (e) => {
        if (!gameController.gameStarted)
            return;
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
    get gameStarted() {
        return (this._playerOne.board.dock.length === 0 &&
            this._playerTwo.board.dock.length === 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL2JvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL3V0aWxzL2NyZWF0ZS1ib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9ib2FyZC91dGlscy9lbnN1cmUtcm93LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2JvYXJkL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtYW5ub3VuY2VtZW50LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtZGlyZWN0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9jcmVhdGUtZG9jay50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vY3JlYXRlLWRvbS1zdGF0ZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vY3JlYXRlLW9jZWFuLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9nYW1lLWNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vZ2FtZS1vdmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9nZXQtb2NlYW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL2luaXQtZ2FtZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vcGxheS1sb2dpYy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9kb20vc2hpcC1wb3J0YWdlLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2RvbS9zaGlwLXZpc2liaWxpdHkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZG9tL3VwZGF0ZS1zY3JlZW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9saWIvaXMtdmFsaWQtZGlyZWNpdG9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi9zaHVmZmxlLWFycmF5LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL2xpYi92YWxpZC1wb3NpdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9saWIvd2FpdC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS9wbGF5ZXIvZGF0YS9ibHVlcHJpbnRzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlL3BsYXllci9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUvc2hpcC9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmZvcm0ge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSA+IGJ1dHRvbixcbi5wbGFjZS1zaGlwIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5mb3JtID4gYnV0dG9uOmhvdmVyLFxuLnBsYWNlLXNoaXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2dhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBnYXA6IDVyZW07XG59XG5cbi5wMS1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMTtcbn1cblxuLmFubm91bmNlbWVudCB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4ucDItY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbi5wMS1jb250YWluZXIsXG4ucDItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ub2NlYW5zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MHB4LCAxZnIpKTtcbn1cblxuLnNoaXAtcGxhY2VtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnZlcnRpY2FsLWRvY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICB3aWR0aDogMTAwcHg7XG4gIGdhcDogMTBweDtcbn1cblxuLmhvcml6b250YWwtZG9jayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbn1cblxuLyogLnZlcnRpY2FsLWRvY2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDEwMHB4LCAxNTBweCkpO1xuICAgIHdpZHRoOiA1MHB4O1xufSAqL1xuXG4uYmF0dGxlc2hpcC12ZXJ0aWNhbC1oZWlnaHQge1xuICBoZWlnaHQ6IDE5OXB4O1xufVxuXG4uY3J1aXNlci1zdWJtYXJpbmUtdmVydGljYWwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4vKiAgKi9cbi5jYXJyaWVyLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgZ2FwOiAxLjVweDtcbn1cblxuLmJhdHRsZXNoaXAtaG9yaXpvbnRhbC1oZWlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTkwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZ2FwOiAxLjVweDtcbn1cblxuLmNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGdhcDogMS41cHg7XG59XG5cbi5kZXN0cm95ZXItaG9yaXpvbnRhbC1oZWlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZ2FwOiAxLjVweDtcbn1cblxuLnNoaXBtZW50IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5zaGlwbWVudC12YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uc2hpcG1lbnQtaW52YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNlbGwtY29tcHV0ZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNlbGwtaHVtYW4sXG4uY2VsbC1jb21wdXRlciB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cbiAgYmFja2dyb3VuZDogdGhpc3RsZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5oaWRlLWJ0bixcbi5jcmVhdGUtc2hpcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4uc2luayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBOzs7OztHQUtHOztBQUVIO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLEtBQUs7QUFDTDtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uLFxcbi5wbGFjZS1zaGlwIHtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbmZvcm0gPiBidXR0b246aG92ZXIsXFxuLnBsYWNlLXNoaXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnAxLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuLmFubm91bmNlbWVudCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnAyLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLnAxLWNvbnRhaW5lcixcXG4ucDItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5vY2VhbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnZlcnRpY2FsLWRvY2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICB3aWR0aDogMTAwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ob3Jpem9udGFsLWRvY2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLyogLnZlcnRpY2FsLWRvY2sge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDEwMHB4LCAxNTBweCkpO1xcbiAgICB3aWR0aDogNTBweDtcXG59ICovXFxuXFxuLmJhdHRsZXNoaXAtdmVydGljYWwtaGVpZ2h0IHtcXG4gIGhlaWdodDogMTk5cHg7XFxufVxcblxcbi5jcnVpc2VyLXN1Ym1hcmluZS12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmRlc3Ryb3llci12ZXJ0aWNhbC1oZWlnaHQge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLyogICovXFxuLmNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxLjVweDtcXG59XFxuXFxuLmJhdHRsZXNoaXAtaG9yaXpvbnRhbC1oZWlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxOTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGdhcDogMS41cHg7XFxufVxcblxcbi5jcnVpc2VyLXN1Ym1hcmluZS1ob3Jpem9udGFsLWhlaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxLjVweDtcXG59XFxuXFxuLmRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZ2FwOiAxLjVweDtcXG59XFxuXFxuLnNoaXBtZW50IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4uc2hpcG1lbnQtdmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwbWVudC1pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGwtY29tcHV0ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5jZWxsLWh1bWFuLFxcbi5jZWxsLWNvbXB1dGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG4gIGJhY2tncm91bmQ6IHRoaXN0bGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmhpZGUtYnRuLFxcbi5jcmVhdGUtc2hpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG4uc2luayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdHlwZSB7IEdldFJldHVyblR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZVNoaXAsIHR5cGUgSVNoaXAgfSBmcm9tIFwiLi4vc2hpcC9zaGlwXCI7XG5pbXBvcnQgeyB2YWxpZFBvc2l0aW9uIH0gZnJvbSBcIi4uL2xpYi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlQm9hcmQsIGVuc3VyZVJvdyB9IGZyb20gXCIuL3V0aWxzL2luZGV4XCI7XG5cbmV4cG9ydCB0eXBlIFRBdHRhY2tlZENvb3JkcyA9IChudW1iZXIgfCBudWxsKVtdW107XG5cbmV4cG9ydCB0eXBlIFRWaXJ0dWFsT2NlYW4gPSBbbnVtYmVyLCBudW1iZXJdW11bXTtcblxuZXhwb3J0IHR5cGUgVE9jZWFuID0gKElTaGlwIHwgbnVsbClbXVtdO1xuXG5leHBvcnQgdHlwZSBURGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG5cbmV4cG9ydCB0eXBlIFREb2NrID0gSVNoaXBbXTtcblxuZXhwb3J0IHR5cGUgVEF0a1JlcyA9IFwiaGl0XCIgfCBcIm1pc3NcIiB8IFwiYWxyZWFkeVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHYW1lQm9hcmQge1xuICByZWFkb25seSBvY2VhbjogVE9jZWFuO1xuICByZWFkb25seSB2aXJ0dWFsT2NlYW46IFRWaXJ0dWFsT2NlYW47XG4gIHJlYWRvbmx5IGF0dGFja2VkQ29vcmRzOiBUQXR0YWNrZWRDb29yZHM7XG4gIHJlYWRvbmx5IGRvY2s6IFREb2NrO1xuICByZWFkb25seSBkZXBsb3llZFNoaXBzOiBURG9jaztcbiAgaW5pdFNoaXBzKGJsdWVwcmludHM6IFJlYWRvbmx5PHsgbmFtZTogc3RyaW5nOyBsZW5ndGg6IG51bWJlciB9W10+KTogdm9pZDtcbiAgcGxhY2VTaGlwKHNoaXA6IElTaGlwLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGRpcjogVERpcmVjdGlvbik6IGJvb2xlYW47XG4gIHJlY2VpdmVkQXRrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IFRBdGtSZXM7XG4gIGFsbFNoaXBzU3VuaygpOiBib29sZWFuO1xufVxuXG5jb25zdCBCT0FSRF9MRU4gPSAxMDtcblxuY2xhc3MgR2FtZUJvYXJkIGltcGxlbWVudHMgSUdhbWVCb2FyZCB7XG4gIHByaXZhdGUgX29jZWFuOiBUT2NlYW47XG4gIHByaXZhdGUgX3ZpcnR1YWxPY2VhbjogVFZpcnR1YWxPY2VhbjtcbiAgcHJpdmF0ZSBfYXR0YWNrZWRDb29yZHM6IFRBdHRhY2tlZENvb3JkcztcbiAgcHJpdmF0ZSBfZG9jazogVERvY2s7XG4gIHByaXZhdGUgX2RlcGxveWVkU2hpcHM6IFREb2NrO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29jZWFuID0gY3JlYXRlQm9hcmQoQk9BUkRfTEVOLCAoKSA9PiBudWxsKTtcbiAgICB0aGlzLl92aXJ0dWFsT2NlYW4gPSBjcmVhdGVCb2FyZChCT0FSRF9MRU4sIChyb3csIGNvbCkgPT4gW3JvdywgY29sXSk7XG4gICAgdGhpcy5fYXR0YWNrZWRDb29yZHMgPSBjcmVhdGVCb2FyZChCT0FSRF9MRU4sICgpID0+IG51bGwpO1xuICAgIHRoaXMuX2RvY2sgPSBbXTtcbiAgICB0aGlzLl9kZXBsb3llZFNoaXBzID0gW107XG4gIH1cblxuICBwdWJsaWMgaW5pdFNoaXBzID0gKFxuICAgIGJsdWVwcmludHM6IFJlYWRvbmx5PHsgbmFtZTogc3RyaW5nOyBsZW5ndGg6IG51bWJlciB9W10+LFxuICApID0+IHtcbiAgICBibHVlcHJpbnRzLmZvckVhY2goKHsgbmFtZSwgbGVuZ3RoIH0pID0+IHtcbiAgICAgIGlmICh0aGlzLl9kb2NrLmZpbmQoKHMpID0+IHMubmFtZSA9PT0gbmFtZSAmJiBzLmxlbmd0aCA9PT0gbGVuZ3RoKSkge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBgWW91IGNhbiBvbmx5IGhhdmUgYSBvbmUgdHlwZSBvZiAke25hbWV9IHdpdGggbGVuZ3RoIG9mICR7bGVuZ3RofWAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RvY2sucHVzaChjcmVhdGVTaGlwKHsgbmFtZSwgbGVuZ3RoIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgcGxhY2VTaGlwID0gKFxuICAgIHNoaXA6IElTaGlwLFxuICAgIHJvdzogbnVtYmVyLFxuICAgIGNvbDogbnVtYmVyLFxuICAgIGRpcjogVERpcmVjdGlvbixcbiAgKSA9PiB7XG4gICAgaWYgKCF2YWxpZFBvc2l0aW9uKHNoaXAsIHJvdywgY29sLCBkaXIsIHRoaXMuX29jZWFuKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBbciwgY10gPSBkaXIgPT09IFwiaG9yaXpvbnRhbFwiID8gW3JvdywgY29sICsgaV0gOiBbcm93ICsgaSwgY29sXTtcblxuICAgICAgZW5zdXJlUm93KHRoaXMuX29jZWFuLCByKVtjXSA9IHNoaXA7XG5cbiAgICAgIHNoaXAucG9zaXRpb25zID0geyByb3c6IHIsIGNvbDogYyB9O1xuICAgIH1cblxuICAgIHRoaXMuX2RvY2sgPSB0aGlzLl9kb2NrLmZpbHRlcihcbiAgICAgIChzKSA9PiAhKHMubmFtZSA9PT0gc2hpcC5uYW1lICYmIHMubGVuZ3RoID09PSBzaGlwLmxlbmd0aCksXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5fZGVwbG95ZWRTaGlwcy5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgdGhpcy5fZGVwbG95ZWRTaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHB1YmxpYyByZWNlaXZlZEF0ayA9IChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBNSVNTID0gMDtcbiAgICBjb25zdCBISVQgPSAxO1xuXG4gICAgaWYgKHRoaXMuX2F0dGFja2VkQ29vcmRzW3Jvd10/Lltjb2xdICE9PSBudWxsKSByZXR1cm4gXCJhbHJlYWR5XCI7XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMuX29jZWFuW3Jvd10/Lltjb2xdO1xuXG4gICAgaWYgKCFjdXJyZW50U2hpcD8uaXNTaGlwKCkpIHtcbiAgICAgIGVuc3VyZVJvdyh0aGlzLl9hdHRhY2tlZENvb3Jkcywgcm93KVtjb2xdID0gTUlTUztcblxuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cblxuICAgIGN1cnJlbnRTaGlwLmhpdCgpO1xuXG4gICAgZW5zdXJlUm93KHRoaXMuX2F0dGFja2VkQ29vcmRzLCByb3cpW2NvbF0gPSBISVQ7XG5cbiAgICByZXR1cm4gXCJoaXRcIjtcbiAgfTtcblxuICBwdWJsaWMgYWxsU2hpcHNTdW5rID0gKCkgPT5cbiAgICB0aGlzLl9kZXBsb3llZFNoaXBzXG4gICAgICAubWFwKChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKVxuICAgICAgLmV2ZXJ5KChoYXNTdW5rKSA9PiBoYXNTdW5rID09PSB0cnVlKTtcblxuICBwdWJsaWMgZ2V0IG9jZWFuKCkge1xuICAgIHJldHVybiB0aGlzLl9vY2VhbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlydHVhbE9jZWFuKCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsT2NlYW47XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY2s7XG4gIH1cbiAgcHVibGljIGdldCBkZXBsb3llZFNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3llZFNoaXBzO1xuICB9XG5cbiAgcHVibGljIGdldCBhdHRhY2tlZENvb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNrZWRDb29yZHM7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IG5ldyBHYW1lQm9hcmQoKTtcblxuY29uc3QgdDogVE9jZWFuID0gY3JlYXRlQm9hcmQoQk9BUkRfTEVOLCAoKSA9PlxuICBNYXRoLnJhbmRvbSgpID4gMC41ID8gbnVsbCA6IGNyZWF0ZVNoaXAoeyBuYW1lOiBcImNydWlzZXJcIiwgbGVuZ3RoOiA1IH0pLFxuKTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVCb2FyZCA9IDxUPihcbiAgbGVuZ3RoOiBudW1iZXIsXG4gIGZuOiAocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSA9PiBULFxuKSA9PlxuICBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCByb3cpID0+XG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aCB9LCAoXywgY29sKSA9PiBmbihyb3csIGNvbCkpLFxuICApO1xuIiwiZXhwb3J0IGNvbnN0IGVuc3VyZVJvdyA9IDxUPihhcnI6IFRbXVtdLCByb3c6IG51bWJlcikgPT5cbiAgYXJyW3Jvd10gPz8gKGFycltyb3ddID0gW10pO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vY3JlYXRlLWJvYXJkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbnN1cmUtcm93XCI7XG4iLCJpbXBvcnQgdHlwZSB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZSwgdHlwZSBJR2FtZSB9IGZyb20gXCIuLi9nYW1lL2dhbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUFubm91bmNlbWVudCB9IGZyb20gXCIuL2NyZWF0ZS1hbm5vdW5jZW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZURpcmVjdGlvbiB9IGZyb20gXCIuL2NyZWF0ZS1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IGNyZWF0ZURvbVN0YXRlIH0gZnJvbSBcIi4vY3JlYXRlLWRvbS1zdGF0ZVwiO1xuaW1wb3J0IHsgaW5pdEdhbWUgfSBmcm9tIFwiLi9pbml0LWdhbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVNoaXBQbGFjZW1lbnQgfSBmcm9tIFwiLi9zaGlwLXBvcnRhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IGRvbUNvbnRyb2xsZXIgPSAoKToge1xuICBnYW1lQ29udHJvbGxlcjogSUdhbWU7XG4gIHNoaXBQbGFjZW1lbnQocGxheWVyOiBJUGxheWVyLCByYW5kb20/OiBib29sZWFuKTogdm9pZDtcbn0gPT4ge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIGlmICghcm9vdCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gcm9vdCBlbGVtZW50IGZvdW5kXCIpO1xuXG4gIGNvbnN0IGdhbWVDb250cm9sbGVyID0gY3JlYXRlR2FtZSgpO1xuXG4gIGNvbnN0IGdhbWVDb250YWluZXIgPSBpbml0R2FtZShnYW1lQ29udHJvbGxlcik7XG5cbiAgY29uc3QgYW5ub3VuY2VtZW50ID0gY3JlYXRlQW5ub3VuY2VtZW50KCk7XG5cbiAgY29uc3QgZGlyZWN0aW9uID0gY3JlYXRlRGlyZWN0aW9uKGFubm91bmNlbWVudCk7XG5cbiAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IGNyZWF0ZVNoaXBQbGFjZW1lbnQoZGlyZWN0aW9uKTtcblxuICByb290LmFwcGVuZENoaWxkKGFubm91bmNlbWVudCk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcblxuICBjcmVhdGVEb21TdGF0ZShnYW1lQ29udHJvbGxlcik7XG5cbiAgcmV0dXJuIHsgZ2FtZUNvbnRyb2xsZXIsIHNoaXBQbGFjZW1lbnQgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlQW5ub3VuY2VtZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYW5ub3VuY2VtZW50XCIpO1xuXG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBlcnJvci5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG5cbiAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB3aW5uZXIuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbm5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEdldFJldHVyblR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZ2V0LXJldHVybi10eXBlLnRzXCI7XG5cbmV4cG9ydCB0eXBlIFRDcmVhdGVEaXJlY3Rpb24gPSBHZXRSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVEaXJlY3Rpb24+O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0aW9uID0gKHBhcmVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgZGlyZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZGlyZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25cIik7XG4gIHNoaXBQbGFjZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VtZW50XCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInBsYWNlLXNoaXBcIik7XG5cbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkNob29zZSBhIGRpcmVjdGlvbjpcIjtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcInN0YXJ0XCI7XG5cbiAgY29uc3QgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICBjb25zdCB2YWx1ZXMgPSBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl0gYXMgY29uc3Q7XG5cbiAgdmFsdWVzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBvcHRpb24udmFsdWUgPSB2YWw7XG5cbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWw7XG5cbiAgICBkaXJlY3Rpb25TZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG5cbiAgbGFiZWwuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uU2VsZWN0KTtcblxuICBkaXJlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBzaGlwUGxhY2VtZW50LmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uQ29udGFpbmVyKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKHNoaXBQbGFjZW1lbnQpO1xuXG4gIHJldHVybiB7IGRpcmVjdGlvbkNvbnRhaW5lciwgc2hpcFBsYWNlbWVudCwgc3RhcnRCdG4sIGRpcmVjdGlvblNlbGVjdCB9O1xufTtcbiIsImltcG9ydCB7IHNoaXBCbHVlUHJpbnRzIH0gZnJvbSBcIi4uL3BsYXllci9kYXRhL2JsdWVwcmludHNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGRvY2suY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsLWRvY2tcIik7XG5cbiAgY29uc3Qgc2hpcHMgPSBzaGlwQmx1ZVByaW50cy5tYXAoKHsgbmFtZSwgbGVuZ3RoIH0sIGkpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsLWRpclwiKTtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZShcImlkXCIsIG5hbWUpO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1sZW5ndGhcIiwgbGVuZ3RoLnRvU3RyaW5nKCkpO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpLnRvU3RyaW5nKCkpO1xuXG4gICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAgY29uc3QgYnRucyA9IEFycmF5LmZyb20oeyBsZW5ndGggfSwgKCkgPT4ge1xuICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzaGlwbWVudFwiKTtcblxuICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9KTtcblxuICAgIHNoaXAuYXBwZW5kKC4uLmJ0bnMpO1xuXG4gICAgZG9jay5hcHBlbmRDaGlsZChzaGlwKTtcblxuICAgIHJldHVybiBzaGlwO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFubm91bmNlbWVudFwiKT8uYXBwZW5kQ2hpbGQoZG9jayk7XG5cbiAgcmV0dXJuIHsgZG9jaywgc2hpcHMgfTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IElHYW1lIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IHsgZ2V0T2NlYW4gfSBmcm9tIFwiLi9nZXQtb2NlYW5cIjtcbmltcG9ydCB7IHBsYXlMb2dpYyB9IGZyb20gXCIuL3BsYXktbG9naWNcIjtcblxuZXhwb3J0IHsgdXBkYXRlU2NyZWVuIH0gZnJvbSBcIi4vdXBkYXRlLXNjcmVlblwiO1xuZXhwb3J0IHsgZ2FtZU92ZXIgfSBmcm9tIFwiLi9nYW1lLW92ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURvbVN0YXRlID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBjb25zdCBwbGF5ZXJPbmVPQ2VhbiA9IGdldE9jZWFuKGdhbWVDb250cm9sbGVyLnBsYXllck9uZS5pZCk7XG4gIGNvbnN0IHBsYXllck9uZU9Ud28gPSBnZXRPY2VhbihnYW1lQ29udHJvbGxlci5wbGF5ZXJUd28uaWQpO1xuXG4gIHBsYXllck9uZU9DZWFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghZ2FtZUNvbnRyb2xsZXIuZ2FtZVN0YXJ0ZWQpIHJldHVybjtcblxuICAgIHBsYXlMb2dpYyhlLCBnYW1lQ29udHJvbGxlcik7XG4gIH0pO1xuXG4gIHBsYXllck9uZU9Ud28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFnYW1lQ29udHJvbGxlci5nYW1lU3RhcnRlZCkgcmV0dXJuO1xuXG4gICAgcGxheUxvZ2ljKGUsIGdhbWVDb250cm9sbGVyKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBUVmlydHVhbE9jZWFuIH0gZnJvbSBcIi4uL2JvYXJkL2JvYXJkLnRzXCI7XG5pbXBvcnQgdHlwZSB7IElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci50c1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlT2NlYW4gPSAocGxheWVyOiBJUGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3Qgb2NlYW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwbGF5ZXIuaWR9LWNvbnRhaW5lcmApO1xuXG4gIG9jZWFuQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3BsYXllci5pZH0tb2NlYW5gKTtcbiAgb2NlYW5Db250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvY2VhbnNcIik7XG5cbiAgcGxheWVyLmJvYXJkLnZpcnR1YWxPY2VhblxuICAgIC5mbGF0TWFwKChjKSA9PiBjKVxuICAgIC5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICBjb25zdCBjb2xDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgY29sQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCByb3cudG9TdHJpbmcoKSk7XG4gICAgICBjb2xDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29sXCIsIGNvbC50b1N0cmluZygpKTtcbiAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChgY2VsbC0ke3BsYXllci5pZH1gKTtcbiAgICAgIGNvbENlbGwuY2xhc3NMaXN0LmFkZChcImRyb3AtdGFyZ2V0XCIpO1xuXG4gICAgICBvY2VhbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xDZWxsKTtcbiAgICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2NlYW5Db250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuIiwiY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuaWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoXCJObyByb290IGVsZW1lbnQgZm91bmRcIik7XG5cbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5nYW1lQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1jb250YWluZXJcIik7XG5cbnJvb3QuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG4iLCJpbXBvcnQgdHlwZSB7IElHYW1lIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZVwiO1xuaW1wb3J0IHsgZGlzYWJsZU9jZWFuIH0gZnJvbSBcIi4vdXBkYXRlLXNjcmVlblwiO1xuXG5leHBvcnQgY29uc3QgZ2FtZU92ZXIgPSAoZ2FtZUNvbnRyb2xsZXI6IElHYW1lKSA9PiB7XG4gIGlmICghZ2FtZUNvbnRyb2xsZXIuaXNHYW1lT3ZlcikgcmV0dXJuO1xuXG4gIGNvbnN0IHdpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VjY2Vzc1wiKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgY29uc3Qgd2lubmVyID0gZ2FtZUNvbnRyb2xsZXIud2lubmVyPy5uYW1lO1xuXG4gIHAudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3dpbm5lcn1gO1xuXG4gIHdpbkNvbnRhaW5lcj8uYXBwZW5kQ2hpbGQocCk7XG5cbiAgZGlzYWJsZU9jZWFuKGdhbWVDb250cm9sbGVyLnBsYXllck9uZSk7XG4gIGRpc2FibGVPY2VhbihnYW1lQ29udHJvbGxlci5wbGF5ZXJUd28pO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXRPY2VhbiA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG9jZWFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9LW9jZWFuYCk7XG5cbiAgaWYgKCFvY2Vhbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk9jZWFuIGRvZXMgbm90IGV4aXN0XCIpO1xuICB9XG5cbiAgcmV0dXJuIG9jZWFuO1xufTtcbiIsImltcG9ydCB0eXBlIHsgSUdhbWUgfSBmcm9tIFwiLi4vZ2FtZS9nYW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVPY2VhbiB9IGZyb20gXCIuL2NyZWF0ZS1vY2VhblwiO1xuXG5jb25zdCBjcmVhdGVHYW1lQ29udGFpbmVyID0gKGdhbWU6IElHYW1lKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgcGxheWVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwbGF5ZXJPbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItb25lXCIpO1xuXG4gIGNvbnN0IHBsYXllclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcGxheWVyVHdvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLXR3b1wiKTtcblxuICBjb25zdCBwbGF5ZXJPbmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgcGxheWVyT25lTmFtZS50ZXh0Q29udGVudCA9IGdhbWUucGxheWVyT25lLm5hbWU7XG5cbiAgY29uc3QgcGxheWVyVHdvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIHBsYXllclR3b05hbWUudGV4dENvbnRlbnQgPSBnYW1lLnBsYXllclR3by5uYW1lO1xuXG4gIGNvbnN0IHBsYXllck9uZU9DZWFuID0gY3JlYXRlT2NlYW4oZ2FtZS5wbGF5ZXJPbmUpO1xuICBjb25zdCBwbGF5ZXJUd29PQ2VhbiA9IGNyZWF0ZU9jZWFuKGdhbWUucGxheWVyVHdvKTtcblxuICBwbGF5ZXJPbmUuYXBwZW5kQ2hpbGQocGxheWVyT25lT0NlYW4pO1xuICBwbGF5ZXJUd28uYXBwZW5kQ2hpbGQocGxheWVyVHdvT0NlYW4pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRHYW1lID0gKGdhbWVDb250cm9sbGVyOiBJR2FtZSkgPT4ge1xuICBjb25zdCBnYW1lQ29udGFpbmVyID0gY3JlYXRlR2FtZUNvbnRhaW5lcihnYW1lQ29udHJvbGxlcik7XG5cbiAgcmV0dXJuIGdhbWVDb250YWluZXI7XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBJR2FtZSB9IGZyb20gXCIuLi9nYW1lL2dhbWVcIjtcbmltcG9ydCB7IGdhbWVPdmVyIH0gZnJvbSBcIi4vZ2FtZS1vdmVyXCI7XG5pbXBvcnQgeyBkaXNhYmxlT2NlYW4sIGVuYWJsZU9jZWFuLCB1cGRhdGVTY3JlZW4gfSBmcm9tIFwiLi91cGRhdGUtc2NyZWVuXCI7XG5cbmV4cG9ydCBjb25zdCBwbGF5TG9naWMgPSBhc3luYyAoZTogTW91c2VFdmVudCwgZ2FtZUNvbnRyb2xsZXI6IElHYW1lKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGU/LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgcm93IH0gPSB0YXJnZXQuZGF0YXNldDtcbiAgY29uc3QgeyBjb2wgfSA9IHRhcmdldC5kYXRhc2V0O1xuXG4gIHRyeSB7XG4gICAgaWYgKGdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocm93ICE9PSB1bmRlZmluZWQgJiYgY29sICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fFxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmRzXCIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcblxuICAgICAgYXdhaXQgZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lSW5wdXQoK3JvdywgK2NvbCk7XG5cbiAgICAgIGF3YWl0IGdhbWVDb250cm9sbGVyLnBsYXllclR3b0lucHV0KCk7XG5cbiAgICAgIHVwZGF0ZVNjcmVlbihnYW1lQ29udHJvbGxlcik7XG5cbiAgICAgIGlmIChnYW1lQ29udHJvbGxlci5pc0dhbWVPdmVyKSB7XG4gICAgICAgIHJldHVybiBnYW1lT3ZlcihnYW1lQ29udHJvbGxlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvciA9IEVycm9yKFwieW91IGNsaWNrZWQgdGhlIGJvYXJkIGZyYW1lXCIpO1xuICAgIHRocm93IGVycm9yO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcbiIsImltcG9ydCB0eXBlIHsgSVBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFRDcmVhdGVEaXJlY3Rpb24gfSBmcm9tIFwiLi9jcmVhdGUtZGlyZWN0aW9uXCI7XG5pbXBvcnQgeyBpc1ZhbGlkRGlyZWN0aW9uIH0gZnJvbSBcIi4uL2xpYi9pcy12YWxpZC1kaXJlY2l0b25cIjtcbmltcG9ydCB7IHZhbGlkUG9zaXRpb24gfSBmcm9tIFwiLi4vbGliL3ZhbGlkLXBvc2l0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVEb2NrIH0gZnJvbSBcIi4vY3JlYXRlLWRvY2tcIjtcbmltcG9ydCB7IHNob3dTaGlwcyB9IGZyb20gXCIuL3NoaXAtdmlzaWJpbGl0eVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU2hpcFBsYWNlbWVudCA9XG4gIChEVE86IFRDcmVhdGVEaXJlY3Rpb24pID0+IChwbGF5ZXI6IElQbGF5ZXIsIHJhbmRvbT86IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgY29uc3QgeyBzaWduYWwsIGFib3J0IH0gPSBjb250cm9sbGVyO1xuXG4gICAgY29uc3QgeyBkaXJlY3Rpb25Db250YWluZXIsIHN0YXJ0QnRuLCBkaXJlY3Rpb25TZWxlY3QgfSA9IERUTztcblxuICAgIHN0YXJ0QnRuPy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuZG9jayk7XG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuZG9jay5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZS1idG5cIik7XG5cbiAgICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcbiAgICAgICAgICBgLmNlbGwtJHtwbGF5ZXIuaWR9YCxcbiAgICAgICAgKTtcblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsIH0sXG4gICAgKTtcblxuICAgIGlmIChyYW5kb20pIHtcbiAgICAgIHBsYXllci5hdXRvUGxhY2VTaGlwcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRyYWdnZWQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdCB7IGRvY2ssIHNoaXBzIH0gPSBjcmVhdGVEb2NrKCk7XG5cbiAgICBkaXJlY3Rpb25TZWxlY3Q/LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc1BvcyA9IHtcbiAgICAgICAgICBjYXJyaWVyOiBcImNhcnJpZXItaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgICBiYXR0bGVzaGlwOiBcImJhdHRsZXNoaXAtaG9yaXpvbnRhbC1oZWlnaHRcIixcbiAgICAgICAgICBjcnVpc2VyOiBcImNydWlzZXItc3VibWFyaW5lLWhvcml6b250YWwtaGVpZ2h0XCIsXG4gICAgICAgICAgZGVzdHJveWVyOiBcImRlc3Ryb3llci1ob3Jpem9udGFsLWhlaWdodFwiLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgZG9jay5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWwtZG9ja1wiKTtcblxuICAgICAgICAgIGRvY2suY2xhc3NMaXN0LmFkZChcImhvcml6b250YWwtZG9ja1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2NrLmNsYXNzTGlzdC5hZGQoXCJ2ZXJ0aWNhbC1kb2NrXCIpO1xuXG4gICAgICAgICAgZG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiaG9yaXpvbnRhbC1kb2NrXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBbLi4uc2hpcHNdO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gcXVldWVbMF07XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09IFwidW5kZWZpbmVkXCIpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjdXJyZW50LmRhdGFzZXQ/Lm5hbWU7XG5cbiAgICAgICAgICBjb25zdCBwb3MgPSBzaGlwTmFtZVxuICAgICAgICAgICAgPyBjbGFzc1Bvc1tzaGlwTmFtZSBhcyBrZXlvZiB0eXBlb2YgY2xhc3NQb3NdXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICBpZiAoIXBvcykgYnJlYWs7XG5cbiAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZChwb3MpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBzaWduYWwgfSxcbiAgICApO1xuXG4gICAgZG9jay5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcmFnc3RhcnRcIixcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IDxIVE1MRWxlbWVudD4oPEhUTUxFbGVtZW50PmUudGFyZ2V0KS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZENoaWxkID0gY2hpbGRyZW4ubmFtZWRJdGVtKFxuICAgICAgICAgIHRhcmdldC5pZCA/PyBcIlwiLFxuICAgICAgICApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZENoaWxkKSB7XG4gICAgICAgICAgZHJhZ2dlZCA9IHNlbGVjdGVkQ2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbCB9LFxuICAgICk7XG5cbiAgICBjb25zdCB0YXJnZXRPY2VhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsYXllci5pZH0tb2NlYW5gKTtcblxuICAgIGlmICghdGFyZ2V0T2NlYW4pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHBsYXllciBvY2VhbiB3aXRoIElEIG9mICR7cGxheWVyLmlkfSBpcyBub3QgZm91bmRgKTtcblxuICAgIHRhcmdldE9jZWFuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRyYWdvdmVyXCIsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgeyBzaWduYWwgfSxcbiAgICApO1xuXG4gICAgdGFyZ2V0T2NlYW4uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoKSA9PiB7fSk7XG5cbiAgICB0YXJnZXRPY2Vhbi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsICgpID0+IHt9KTtcblxuICAgIHRhcmdldE9jZWFuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRyb3BcIixcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGlmICghZHJhZ2dlZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkcmFnZ2VkLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gZHJhZ2dlZDtcbiAgICAgICAgY29uc3Qgcm93ID0gTnVtYmVyKHRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IE51bWJlcih0YXJnZXQuZGF0YXNldC5jb2wpO1xuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGRyYWdnZWQuaWQ7XG4gICAgICAgIGNvbnN0IHNoaXBMZW4gPSBOdW1iZXIoZHJhZ2dlZC5kYXRhc2V0Lmxlbmd0aCk7XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5ib2FyZC5kb2NrLmZpbmQoXG4gICAgICAgICAgKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUgJiYgc2hpcC5sZW5ndGggPT09IHNoaXBMZW4sXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc2hpcD8uaXNTaGlwKCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBhIHNoaXBcIiwgcGxheWVyLmJvYXJkLmRvY2spO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICAgICAgW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdLmZpbmQoXG4gICAgICAgICAgICAoZGlyKSA9PiBkaXIgPT09IGRpcmVjdGlvblNlbGVjdC52YWx1ZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICkgPz8gXCJcIjtcblxuICAgICAgICBpZiAoIWlzVmFsaWREaXJlY3Rpb24oZGlyZWN0aW9uKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBpbnZhbGlkIGRpcmVjdGlvbiBvZiAke2RpcmVjdGlvblNlbGVjdC52YWx1ZX07IGV4cGVjdGVkIGVpdGhlciBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCJgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbGlkUG9zaXRpb24oc2hpcCwgcm93LCBjb2wsIGRpcmVjdGlvbiwgcGxheWVyLmJvYXJkLm9jZWFuKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5vY2Vhbltyb3ddPy5bY29sXSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCByb3csIGNvbCwgZGlyZWN0aW9uKTtcblxuICAgICAgICBwYXJlbnQ/LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuICAgICAgICBpZiAocGFyZW50Py5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzdGFydEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1idG5cIik7XG4gICAgICAgICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgICAgICAgICBkaXJlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgLy8gYWJvcnQoXCJhbGwgc2hpcHMgZGVwbG95ZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hvd1NoaXBzKHBsYXllcik7XG4gICAgICB9LFxuICAgICAgeyBzaWduYWwgfSxcbiAgICApO1xuICB9O1xuIiwiaW1wb3J0IHR5cGUgeyBJUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIudHNcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTaGlwcyA9IChwbGF5ZXI6IElQbGF5ZXIpID0+XG4gIHBsYXllci5ib2FyZC5vY2Vhbi5mb3JFYWNoKChyb3csIHJJbmRleCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2wsIGNJbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2VsbC0ke3BsYXllci5pZH1bZGF0YS1yb3c9XCIke3JJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NJbmRleH1cIl1gLFxuICAgICAgKTtcblxuICAgICAgaWYgKGNvbCkge1xuICAgICAgICBzaGlwPy5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBoaWRlU2hpcHMgPSAocGxheWVyOiBJUGxheWVyKSA9PlxuICBwbGF5ZXIuYm9hcmQuZGVwbG95ZWRTaGlwcy5tYXAoKHNoaXApID0+IHtcbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBzaGlwLnBvc2l0aW9ucztcblxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5jZWxsLSR7cGxheWVyLmlkfVtkYXRhLXJvd1wiJHtyb3d9XCJdW2RhdGEtY29sXCIke2NvbH1cIl1gLFxuICAgICk7XG5cbiAgICBpZiAoIWNlbGwpIHJldHVybjtcblxuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG5cbiAgICByZXR1cm4gY2VsbDtcbiAgfSk7XG4iLCJpbXBvcnQgdHlwZSB7IElHYW1lIH0gZnJvbSBcIi4uL2dhbWUvZ2FtZS50c1wiO1xuaW1wb3J0IHR5cGUgeyBJUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIudHNcIjtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckF0dGFja2VkQ29vcmRzID0gKHBsYXllcjogSVBsYXllcikgPT4ge1xuICBwbGF5ZXIuYm9hcmQuYXR0YWNrZWRDb29yZHMuZm9yRWFjaCgocm93LCBySW5kZXgpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY29sLCBjSW5kZXgpID0+IHtcbiAgICAgIGlmIChjb2wgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY2VsbC0ke3BsYXllci5pZH1bZGF0YS1yb3c9XCIke3JJbmRleH1cIl1bZGF0YS1jb2w9XCIke2NJbmRleH1cIl1gLFxuICAgICAgKTtcblxuICAgICAgaWYgKCFjZWxsKSByZXR1cm47XG5cbiAgICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIm1pc3NcIjtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sID09PSAxKSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcImhpdFwiO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaW5rXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJTdW5rU2hpcHMgPSAocGxheWVyOiBJUGxheWVyKSA9PiB7XG4gIGNvbnN0IHN1bmtTaGlwcyA9IHBsYXllci5ib2FyZC5kZXBsb3llZFNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbiAgc3Vua1NoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBzaGlwLnBvc2l0aW9ucztcblxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5jZWxsLSR7cGxheWVyLmlkfVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWAsXG4gICAgKTtcblxuICAgIGNlbGw/LmNsYXNzTGlzdC5hZGQoXCJzaW5rXCIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlT2NlYW4gPSAocGxheWVyOiBJUGxheWVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYCR7cGxheWVyLmlkfS1jb250YWluZXJgLFxuICApIGFzIEhUTUxFbGVtZW50O1xuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBPY2VhbiBvZiBwbGF5ZXIgd2l0aCBJRCBvZiAke3BsYXllci5pZH0gZG9lcyBub3QgZXhpc3RgKTtcbiAgfVxuXG4gIGNvbnRhaW5lcj8uY2hpbGROb2Rlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGMgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBub2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfSk7XG5cbiAgY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVPY2VhbiA9IChwbGF5ZXI6IElQbGF5ZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgJHtwbGF5ZXIuaWR9LWNvbnRhaW5lcmAsXG4gICkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE9jZWFuIG9mIHBsYXllciB3aXRoIElEIG9mICR7cGxheWVyLmlkfSBkb2VzIG5vdCBleGlzdGApO1xuICB9XG5cbiAgY29udGFpbmVyPy5jaGlsZE5vZGVzLmZvckVhY2goKGMpID0+IHtcbiAgICBjb25zdCBub2RlID0gYyBhcyBIVE1MRWxlbWVudDtcblxuICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9KTtcblxuICBjb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjcmVlbiA9IChnYW1lQ29udHJvbGxlcjogSUdhbWUpID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJPbmUsIHBsYXllclR3byB9ID0gZ2FtZUNvbnRyb2xsZXI7XG5cbiAgcmVuZGVyQXR0YWNrZWRDb29yZHMocGxheWVyT25lKTtcbiAgcmVuZGVyQXR0YWNrZWRDb29yZHMocGxheWVyVHdvKTtcblxuICBjb25zb2xlLmxvZyhwbGF5ZXJUd28uYm9hcmQuYXR0YWNrZWRDb29yZHMpO1xuXG4gIHJlbmRlclN1bmtTaGlwcyhwbGF5ZXJPbmUpO1xuICByZW5kZXJTdW5rU2hpcHMocGxheWVyVHdvKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lQm9hcmQsIHR5cGUgSUdhbWVCb2FyZCB9IGZyb20gXCIuLi9ib2FyZC9ib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyLCB0eXBlIElQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllclwiO1xuaW1wb3J0IHsgc2hpcEJsdWVQcmludHMgfSBmcm9tIFwiLi4vcGxheWVyL2RhdGEvYmx1ZXByaW50c1wiO1xuaW1wb3J0IHsgd2FpdCB9IGZyb20gXCIuLi9saWIvd2FpdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHYW1lIHtcbiAgcGxheWVyT25lOiBJUGxheWVyO1xuICBwbGF5ZXJUd286IElQbGF5ZXI7XG4gIGN1cnJlbnRQbGF5ZXI6IElQbGF5ZXI7XG4gIGlzR2FtZU92ZXI6IGJvb2xlYW47XG4gIHdpbm5lcjogSVBsYXllciB8IG51bGw7XG4gIHN3aXRjaFBsYXllcigpOiBJUGxheWVyO1xuICBwbGF5ZXJPbmVJbnB1dChyb3c/OiBudW1iZXIsIGNvbD86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gIHBsYXllclR3b0lucHV0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPjtcbiAgZ2FtZVN0YXJ0ZWQ6IGJvb2xlYW47XG59XG5cbmNsYXNzIEdhbWUgaW1wbGVtZW50cyBJR2FtZSB7XG4gIHByaXZhdGUgX2lzR2FtZU92ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX3dpbm5lcjogSVBsYXllciB8IG51bGw7XG4gIHByaXZhdGUgX3BsYXllck9uZUJvYXJkOiBJR2FtZUJvYXJkO1xuICBwcml2YXRlIF9wbGF5ZXJUd29Cb2FyZDogSUdhbWVCb2FyZDtcbiAgcHJpdmF0ZSBfcGxheWVyT25lOiBJUGxheWVyO1xuICBwcml2YXRlIF9wbGF5ZXJUd286IElQbGF5ZXI7XG4gIHByaXZhdGUgX2N1cnJlbnRQbGF5ZXI6IElQbGF5ZXI7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5fd2lubmVyID0gbnVsbDtcblxuICAgIHRoaXMuX3BsYXllck9uZUJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKCk7XG4gICAgdGhpcy5fcGxheWVyVHdvQm9hcmQgPSBjcmVhdGVHYW1lQm9hcmQoKTtcblxuICAgIHRoaXMuX3BsYXllck9uZSA9IGNyZWF0ZVBsYXllcih7XG4gICAgICBuYW1lOiBcIlBsYXllciBPbmVcIixcbiAgICAgIGJvYXJkOiB0aGlzLl9wbGF5ZXJPbmVCb2FyZCxcbiAgICAgIGVuZW15Qm9hcmQ6IHRoaXMuX3BsYXllclR3b0JvYXJkLFxuICAgICAgYmx1ZXByaW50czogc2hpcEJsdWVQcmludHMsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wbGF5ZXJUd28gPSBjcmVhdGVQbGF5ZXIoe1xuICAgICAgbmFtZTogXCJQbGF5ZXIgVHdvXCIsXG4gICAgICBib2FyZDogdGhpcy5fcGxheWVyVHdvQm9hcmQsXG4gICAgICBlbmVteUJvYXJkOiB0aGlzLl9wbGF5ZXJPbmVCb2FyZCxcbiAgICAgIGJsdWVwcmludHM6IHNoaXBCbHVlUHJpbnRzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY3VycmVudFBsYXllciA9IHRoaXMuX3BsYXllck9uZTtcbiAgfVxuXG4gIHB1YmxpYyBzd2l0Y2hQbGF5ZXIoKTogSVBsYXllciB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRQbGF5ZXIubmFtZSA9PT0gdGhpcy5fcGxheWVyT25lLm5hbWUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXIgPSB0aGlzLl9wbGF5ZXJUd287XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBsYXllcjtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50UGxheWVyID0gdGhpcy5fcGxheWVyT25lO1xuXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQbGF5ZXI7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcGxheWVyT25lSW5wdXQocm93PzogbnVtYmVyLCBjb2w/OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgd2FpdCgwKTtcblxuICAgIGNvbnN0IHIgPSBOdW1iZXIocm93KTtcbiAgICBjb25zdCBjID0gTnVtYmVyKGNvbCk7XG5cbiAgICBpZiAoIU51bWJlci5pc05hTihyKSAmJiAhTnVtYmVyLmlzTmFOKE51bWJlcihjKSkpIHtcbiAgICAgIHRoaXMuX3BsYXllck9uZS5hdGtFbmVteShyLCBjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyT25lLmF1dG9BdGsoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGxheWVyVHdvLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3dpbm5lciA9IHRoaXMuX3BsYXllck9uZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcGxheWVyVHdvSW5wdXQocm93PzogbnVtYmVyLCBjb2w/OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgd2FpdCgwKTtcblxuICAgIGlmIChyb3cgJiYgY29sKSB7XG4gICAgICB0aGlzLl9wbGF5ZXJUd28uYXRrRW5lbXkocm93LCBjb2wpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wbGF5ZXJUd28uYXV0b0F0aygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wbGF5ZXJUd28uYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHRoaXMuX2lzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5fd2lubmVyID0gdGhpcy5fcGxheWVyVHdvO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zd2l0Y2hQbGF5ZXIoKTtcbiAgfVxuXG4gIGdldCBnYW1lU3RhcnRlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fcGxheWVyT25lLmJvYXJkLmRvY2subGVuZ3RoID09PSAwICYmXG4gICAgICB0aGlzLl9wbGF5ZXJUd28uYm9hcmQuZG9jay5sZW5ndGggPT09IDBcbiAgICApO1xuICB9XG5cbiAgZ2V0IHBsYXllck9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyT25lO1xuICB9XG5cbiAgZ2V0IHBsYXllclR3bygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyVHdvO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQbGF5ZXI7XG4gIH1cblxuICBnZXQgaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNHYW1lT3ZlcjtcbiAgfVxuXG4gIGdldCB3aW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpbm5lcjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlR2FtZSA9ICgpID0+IG5ldyBHYW1lKCk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi92YWxpZC1wb3NpdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2h1ZmZsZS1hcnJheVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaXMtdmFsaWQtZGlyZWNpdG9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93YWl0XCI7XG4iLCJpbXBvcnQgdHlwZSB7IFREaXJlY3Rpb24gfSBmcm9tIFwiLi4vYm9hcmQvYm9hcmQudHNcIjtcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWREaXJlY3Rpb24gPSAoZGlyOiBzdHJpbmcpOiBkaXIgaXMgVERpcmVjdGlvbiA9PiB7XG4gIHJldHVybiAoXG4gICAgKGRpciBhcyBURGlyZWN0aW9uKSA9PT0gXCJob3Jpem9udGFsXCIgfHwgKGRpciBhcyBURGlyZWN0aW9uKSA9PT0gXCJ2ZXJ0aWNhbFwiXG4gICk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNodWZmbGVBcnJheSA9IDxUPihhcnI6IFRbXSkgPT5cbiAgYXJyXG4gICAgLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBzb3J0OiBNYXRoLnJhbmRvbSgpIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnQgLSBiLnNvcnQpXG4gICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG4iLCJpbXBvcnQgdHlwZSB7IElTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcC50c1wiO1xuaW1wb3J0IHR5cGUgeyBURGlyZWN0aW9uLCBUT2NlYW4gfSBmcm9tIFwiLi4vYm9hcmQvYm9hcmQudHNcIjtcblxuZXhwb3J0IGNvbnN0IHZhbGlkUG9zaXRpb24gPSAoXG4gIHNoaXA6IElTaGlwLFxuICByb3c6IG51bWJlcixcbiAgY29sOiBudW1iZXIsXG4gIGRpcjogVERpcmVjdGlvbixcbiAgb2NlYW46IFRPY2VhbixcbikgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZGlyID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKGNvbCArIGkgPiA5IHx8ICFvY2Vhbltyb3ddIHx8IG9jZWFuW3Jvd11bY29sICsgaV0/LmlzU2hpcCgpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3cgKyBpID4gOSB8fCAhb2NlYW5bcm93ICsgaV0gfHwgb2NlYW5bcm93ICsgaV0/Lltjb2xdPy5pc1NoaXAoKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImV4cG9ydCBjb25zdCB3YWl0ID0gKG1zOiBudW1iZXIpID0+XG4gIG5ldyBQcm9taXNlKChyKSA9PiB7XG4gICAgc2V0VGltZW91dChyLCBtcyk7XG4gIH0pO1xuIiwiZXhwb3J0IGNvbnN0IHNoaXBCbHVlUHJpbnRzID0gW1xuICB7XG4gICAgbmFtZTogXCJjYXJyaWVyXCIsXG4gICAgbGVuZ3RoOiA1LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4gICAgbGVuZ3RoOiA0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjcnVpc2VyXCIsXG4gICAgbGVuZ3RoOiAzLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzdWJtYXJpbmVcIixcbiAgICBsZW5ndGg6IDMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRlc3Ryb3llclwiLFxuICAgIGxlbmd0aDogMixcbiAgfSxcbl0gYXMgY29uc3Q7XG4iLCJpbXBvcnQgeyB0eXBlIFREaXJlY3Rpb24sIHR5cGUgSUdhbWVCb2FyZCwgdHlwZSBUQXRrUmVzIH0gZnJvbSBcIi4uL2JvYXJkL2JvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IElTaGlwIH0gZnJvbSBcIi4uL3NoaXAvc2hpcFwiO1xuXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vbGliL3NodWZmbGUtYXJyYXlcIjtcbmltcG9ydCB7IHZhbGlkUG9zaXRpb24gfSBmcm9tIFwiLi4vbGliL3ZhbGlkLXBvc2l0aW9uXCI7XG5cbmV4cG9ydCB0eXBlIFRQbGFjZVNoaXAgPSB7XG4gIERUTz86IHsgc2hpcDogSVNoaXA7IHJvdzogbnVtYmVyOyBjb2w6IG51bWJlcjsgZGlyOiBURGlyZWN0aW9uIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElQbGF5ZXIge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGJvYXJkOiBJR2FtZUJvYXJkO1xuICBhdGtFbmVteShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBUQXRrUmVzO1xuICBhdXRvUGxhY2VTaGlwcygpOiB2b2lkO1xuICBhdXRvQXRrKCk6IFRBdGtSZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyRFRPIHtcbiAgbmFtZTogc3RyaW5nO1xuICBib2FyZDogSUdhbWVCb2FyZDtcbiAgZW5lbXlCb2FyZDogSUdhbWVCb2FyZDtcbiAgYmx1ZXByaW50czogUmVhZG9ubHk8eyBuYW1lOiBzdHJpbmc7IGxlbmd0aDogbnVtYmVyIH1bXT47XG59XG5cbmNsYXNzIFBsYXllciBpbXBsZW1lbnRzIElQbGF5ZXIge1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JvYXJkOiBJR2FtZUJvYXJkO1xuICBwcml2YXRlIF9lbmVteUJvYXJkOiBJR2FtZUJvYXJkO1xuICBwcml2YXRlIF92YWxpZENvb3JkczogW251bWJlciwgbnVtYmVyXVtdO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoRFRPOiBQbGF5ZXJEVE8pIHtcbiAgICB0aGlzLl9pZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgdGhpcy5fbmFtZSA9IERUTy5uYW1lO1xuICAgIHRoaXMuX2JvYXJkID0gRFRPLmJvYXJkO1xuICAgIHRoaXMuX2VuZW15Qm9hcmQgPSBEVE8uZW5lbXlCb2FyZDtcbiAgICB0aGlzLl9ib2FyZC5pbml0U2hpcHMoRFRPLmJsdWVwcmludHMpO1xuICAgIHRoaXMuX3ZhbGlkQ29vcmRzID0gRFRPLmVuZW15Qm9hcmQudmlydHVhbE9jZWFuLmZsYXRNYXAoKHYpID0+XG4gICAgICB2Lm1hcCgodikgPT4gdiksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhdGtFbmVteShyb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5lbXlCb2FyZC5yZWNlaXZlZEF0ayhyb3csIGNvbCk7XG4gIH1cblxuICBwdWJsaWMgYXV0b1BsYWNlU2hpcHMoKSB7XG4gICAgY29uc3QgcXVldWUgPSBbLi4udGhpcy5fYm9hcmQuZG9ja107XG5cbiAgICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHF1ZXVlWzBdO1xuXG4gICAgICBpZiAoIWN1cnJlbnRTaGlwPy5pc1NoaXAoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsaWRQb3NpdGlvbihcbiAgICAgICAgICBjdXJyZW50U2hpcCxcbiAgICAgICAgICByYW5kb21Sb3csXG4gICAgICAgICAgcmFuZG9tQ29sLFxuICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICB0aGlzLmJvYXJkLm9jZWFuLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCByYW5kb21Sb3csIHJhbmRvbUNvbCwgZGlyZWN0aW9uKTtcblxuICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhdXRvQXRrKCkge1xuICAgIHRoaXMuX3ZhbGlkQ29vcmRzID0gc2h1ZmZsZUFycmF5KHRoaXMuX3ZhbGlkQ29vcmRzKTtcblxuICAgIGlmICghdGhpcy5fdmFsaWRDb29yZHMubGVuZ3RoKSByZXR1cm4gXCJhbHJlYWR5XCI7XG5cbiAgICBjb25zdCBjb29yZHMgPSB0aGlzLl92YWxpZENvb3Jkcy5zaGlmdCgpO1xuXG4gICAgaWYgKCFjb29yZHMpIHJldHVybiBcIm1pc3NcIjtcblxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XG5cbiAgICByZXR1cm4gdGhpcy5fZW5lbXlCb2FyZC5yZWNlaXZlZEF0ayhyb3csIGNvbCk7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCBib2FyZCgpOiBJR2FtZUJvYXJkIHtcbiAgICByZXR1cm4gdGhpcy5fYm9hcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsYXllciA9IChEVE86IFBsYXllckRUTykgPT4gbmV3IFBsYXllcihEVE8pO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJU2hpcCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGhlYWx0aDogbnVtYmVyO1xuICBpc1NoaXAoKTogYm9vbGVhbjtcbiAgaGl0KCk6IGJvb2xlYW47XG4gIHJlc2V0SGVhbHRoKCk6IHZvaWQ7XG4gIGlzU3VuaygpOiBib29sZWFuO1xuICBwb3NpdGlvbnM6IHsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hpcERUTyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGlwIGltcGxlbWVudHMgSVNoaXAge1xuICBwcml2YXRlIF9oZWFsdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9sZW5ndGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcG9zaXRpb25zOiB7IHJvdzogbnVtYmVyOyBjb2w6IG51bWJlciB9O1xuXG4gIHB1YmxpYyBpc1NoaXAoKTogdGhpcyBpcyB0eXBlb2YgU2hpcCB7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBTaGlwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoRFRPOiBTaGlwRFRPKSB7XG4gICAgdGhpcy5fbmFtZSA9IERUTy5uYW1lO1xuICAgIHRoaXMuX2xlbmd0aCA9IERUTy5sZW5ndGg7XG4gICAgdGhpcy5faGVhbHRoID0gRFRPLmxlbmd0aDtcbiAgICB0aGlzLl9wb3NpdGlvbnMgPSB7IHJvdzogLTEsIGNvbDogLTEgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlYWx0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoO1xuICB9XG5cbiAgcHVibGljIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcG9zaXRpb25zKHA6IHsgcm93OiBudW1iZXI7IGNvbDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLl9wb3NpdGlvbnMgPSBwO1xuICB9XG5cbiAgcHVibGljIGhpdCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5faGVhbHRoIC09IDE7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBwdWJsaWMgcmVzZXRIZWFsdGggPSAoKSA9PiB7XG4gICAgdGhpcy5faGVhbHRoID0gdGhpcy5fbGVuZ3RoO1xuICB9O1xuXG4gIHB1YmxpYyBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2hlYWx0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaGlwID0gKERUTzogU2hpcERUTykgPT4gbmV3IFNoaXAoRFRPKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbW9kdWxlL2RvbS9nYW1lLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBkb21Db250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlL2RvbS9jb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjdHIgPSBkb21Db250cm9sbGVyKCk7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gY3RyLmdhbWVDb250cm9sbGVyO1xuXG5jdHIuc2hpcFBsYWNlbWVudChnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmUsIGZhbHNlKTtcbmN0ci5zaGlwUGxhY2VtZW50KGdhbWVDb250cm9sbGVyLnBsYXllclR3bywgdHJ1ZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=