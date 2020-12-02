// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/logic/Room.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Room = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Room = /*#__PURE__*/function () {
  function Room() {
    _classCallCheck(this, Room);

    this.furniture = [];
  }

  _createClass(Room, [{
    key: "addFurnitureToTheRoom",
    value: function addFurnitureToTheRoom(furniture) {
      this.furniture.push(furniture);
    }
  }, {
    key: "visualiseRoom",
    value: function visualiseRoom(root, furniture) {
      var image = document.createElement("img");

      switch (furniture.constructor.name) {
        case 'ModernChair':
          image.src = '/modern-chair.8d94ab2a.jpg';
          break;

        case 'ModernTable':
          image.src = '/modern-table.ad992a07.jpg';
          break;

        case 'ModernSofa':
          image.src = '/modern-sofa.e7929329.jpg';
          break;

        case 'GothicChair':
          image.src = '/gothic-chair.495b01aa.png';
          break;

        case 'GothicTable':
          image.src = '/gothic-table.24882c3c.jpeg';
          break;

        case 'GothicSofa':
          image.src = '/gothic-sofa.f5134f72.jpg';
          break;

        default:
          throw new Error('No constructor found');
      }

      image.width = 150;
      image.height = 150;
      root.appendChild(image);
    }
  }]);

  return Room;
}();

exports.Room = Room;
},{}],"src/furniture/Chair.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernChair = exports.GothicChair = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GothicChair = /*#__PURE__*/function () {
  function GothicChair() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'black';

    _classCallCheck(this, GothicChair);

    this.peacesState = 'not connected';
    this.color = 'no color';
    this.metalChairLeg = true;
    this.connectAllPeases();
    this.paintTheChair(color);
  }

  _createClass(GothicChair, [{
    key: "connectAllPeases",
    value: function connectAllPeases() {
      this.peacesState = 'connected';
    }
  }, {
    key: "paintTheChair",
    value: function paintTheChair(color) {
      this.color = color;
    }
  }]);

  return GothicChair;
}();

exports.GothicChair = GothicChair;

var ModernChair = /*#__PURE__*/function () {
  function ModernChair() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'white';

    _classCallCheck(this, ModernChair);

    this.color = color;
    this.peacesState = 'not connected';
    this.comfortableChairBack = true;
    this.connectAllPeases();
    this.paintTheChair(color);
  }

  _createClass(ModernChair, [{
    key: "connectAllPeases",
    value: function connectAllPeases() {
      this.peacesState = 'connected';
    }
  }, {
    key: "paintTheChair",
    value: function paintTheChair(color) {
      this.color = color;
    }
  }]);

  return ModernChair;
}();

exports.ModernChair = ModernChair;
},{}],"src/furniture/Table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GothicTable = exports.ModernTable = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModernTable = /*#__PURE__*/function () {
  function ModernTable() {
    var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rectangle';
    var material = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'wood';

    _classCallCheck(this, ModernTable);

    this.form = 'no form';
    this.material = 'no material';
    this.color = 'white';
    this.chooseMaterial(material);
    this.createForm(form);
  }

  _createClass(ModernTable, [{
    key: "chooseMaterial",
    value: function chooseMaterial(material) {
      this.material = material;
    }
  }, {
    key: "createForm",
    value: function createForm(form) {
      this.form = form;
    }
  }]);

  return ModernTable;
}();

exports.ModernTable = ModernTable;

var GothicTable = /*#__PURE__*/function () {
  function GothicTable() {
    var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'circle';
    var material = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'metal';

    _classCallCheck(this, GothicTable);

    this.form = 'no form';
    this.material = 'no material';
    this.color = 'dark brown';
    this.chooseMaterial(material);
    this.createForm(form);
  }

  _createClass(GothicTable, [{
    key: "chooseMaterial",
    value: function chooseMaterial(material) {
      this.material = material;
    }
  }, {
    key: "createForm",
    value: function createForm(form) {
      this.form = form;
    }
  }]);

  return GothicTable;
}();

exports.GothicTable = GothicTable;
},{}],"src/furniture/Sofa.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GothicSofa = exports.ModernSofa = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModernSofa = /*#__PURE__*/function () {
  function ModernSofa() {
    var material = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cotton and linen';
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gray';

    _classCallCheck(this, ModernSofa);

    this.material = 'no material';
    this.color = 'no color';
    this.softSeats = true;
    this.chooseMaterial(material);
    this.design(color);
  }

  _createClass(ModernSofa, [{
    key: "chooseMaterial",
    value: function chooseMaterial(material) {
      this.material = material;
    }
  }, {
    key: "design",
    value: function design(color) {
      this.color = color;
    }
  }]);

  return ModernSofa;
}();

exports.ModernSofa = ModernSofa;

var GothicSofa = /*#__PURE__*/function () {
  function GothicSofa() {
    var material = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'velvet';
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dark blue';

    _classCallCheck(this, GothicSofa);

    this.material = 'no material';
    this.color = 'no color';
    this.hardSeats = true;
    this.chooseMaterial(material);
    this.design(color);
  }

  _createClass(GothicSofa, [{
    key: "chooseMaterial",
    value: function chooseMaterial(material) {
      this.material = material;
    }
  }, {
    key: "design",
    value: function design(color) {
      this.color = color;
    }
  }]);

  return GothicSofa;
}();

exports.GothicSofa = GothicSofa;
},{}],"src/logic/GothicFurnitureFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GothicFurnitureFactory = void 0;

var _Chair = require("../furniture/Chair");

var _Table = require("../furniture/Table");

var _Sofa = require("../furniture/Sofa");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GothicFurnitureFactory = /*#__PURE__*/function () {
  function GothicFurnitureFactory() {
    _classCallCheck(this, GothicFurnitureFactory);
  }

  _createClass(GothicFurnitureFactory, [{
    key: "createChair",
    value: function createChair() {
      return new _Chair.GothicChair();
    }
  }, {
    key: "createTable",
    value: function createTable() {
      return new _Table.GothicTable();
    }
  }, {
    key: "createSofa",
    value: function createSofa() {
      return new _Sofa.GothicSofa();
    }
  }]);

  return GothicFurnitureFactory;
}();

exports.GothicFurnitureFactory = GothicFurnitureFactory;
},{"../furniture/Chair":"src/furniture/Chair.js","../furniture/Table":"src/furniture/Table.js","../furniture/Sofa":"src/furniture/Sofa.js"}],"src/logic/ModernFurnitureFactory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModernFurnitureFactory = void 0;

var _Chair = require("../furniture/Chair");

var _Table = require("../furniture/Table");

var _Sofa = require("../furniture/Sofa");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModernFurnitureFactory = /*#__PURE__*/function () {
  function ModernFurnitureFactory() {
    _classCallCheck(this, ModernFurnitureFactory);
  }

  _createClass(ModernFurnitureFactory, [{
    key: "createChair",
    value: function createChair() {
      return new _Chair.ModernChair();
    }
  }, {
    key: "createTable",
    value: function createTable() {
      return new _Table.ModernTable();
    }
  }, {
    key: "createSofa",
    value: function createSofa() {
      return new _Sofa.ModernSofa();
    }
  }]);

  return ModernFurnitureFactory;
}();

exports.ModernFurnitureFactory = ModernFurnitureFactory;
},{"../furniture/Chair":"src/furniture/Chair.js","../furniture/Table":"src/furniture/Table.js","../furniture/Sofa":"src/furniture/Sofa.js"}],"src/view/Dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dom = void 0;

var _Room = require("../logic/Room");

var _GothicFurnitureFactory = require("../logic/GothicFurnitureFactory");

var _ModernFurnitureFactory = require("../logic/ModernFurnitureFactory");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom = /*#__PURE__*/function () {
  function Dom() {
    var _this = this;

    _classCallCheck(this, Dom);

    this.modernChairInput = document.getElementById('modernChairInput');
    this.modernTableInput = document.getElementById('modernTableInput');
    this.modernSofaInput = document.getElementById('modernSofaInput');
    this.gothicChairInput = document.getElementById('gothicChairInput');
    this.gothicTableInput = document.getElementById('gothicTableInput');
    this.gothicSofaInput = document.getElementById('gothicSofaInput');
    this.submitButton = document.getElementById('submit');
    this.modernFurnitureFactory = new _ModernFurnitureFactory.ModernFurnitureFactory();
    this.gothicFurnitureFactory = new _GothicFurnitureFactory.GothicFurnitureFactory();
    this.room = new _Room.Room();
    this.inputs = [this.modernChairInput, this.modernTableInput, this.modernSofaInput, this.gothicChairInput, this.gothicTableInput, this.gothicSofaInput];
    this.furnitureAmount = {};

    this.onSubmit = function () {
      _this.inputs.forEach(function (input) {
        _this.furnitureAmount[input.name] = parseInt(input.value);
      });

      _this.addFurnitureToRoom();
    };

    this.addEventListener('change', this.inputs);
    this.addEventListener('onclick', this.submitButton);
  }

  _createClass(Dom, [{
    key: "addEventListener",
    value: function addEventListener(eventName, el) {
      var _this2 = this;

      if (el instanceof Array) {
        el.forEach(function (input) {
          input.addEventListener(eventName, function (e) {
            _this2.onInputChange(e.currentTarget);
          });
        });
      } else {
        el.onclick = this.onSubmit;
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(el) {
      var span = document.getElementById("".concat(el.name, "Value"));
      span.innerHTML = el.value;
    }
  }, {
    key: "addFurnitureToRoom",
    value: function addFurnitureToRoom() {
      this.room.furniture = [];

      for (var key in this.furnitureAmount) {
        for (var i = 0; i < this.furnitureAmount[key]; i++) {
          var furniture = void 0;

          switch (key) {
            case 'modernChair':
              furniture = this.modernFurnitureFactory.createChair();
              break;

            case 'modernSofa':
              furniture = this.modernFurnitureFactory.createSofa();
              break;

            case 'modernTable':
              furniture = this.modernFurnitureFactory.createTable();
              break;

            case 'gothicChair':
              furniture = this.gothicFurnitureFactory.createChair();
              break;

            case 'gothicSofa':
              furniture = this.gothicFurnitureFactory.createSofa();
              break;

            case 'gothicTable':
              furniture = this.gothicFurnitureFactory.createTable();
              break;

            default:
              console.log(key);
              throw new Error('Invalid furniture');
          }

          this.room.addFurnitureToTheRoom(furniture);
          console.log(this.room.furniture);
          this.visualiseRoom();
        }
      }
    }
  }, {
    key: "visualiseRoom",
    value: function visualiseRoom() {
      var _this3 = this;

      var images = document.getElementById('images');
      images.innerHTML = '';
      this.room.furniture.forEach(function (furniture) {
        _this3.room.visualiseRoom(images, furniture);
      });
    }
  }]);

  return Dom;
}();

exports.Dom = Dom;
},{"../logic/Room":"src/logic/Room.js","../logic/GothicFurnitureFactory":"src/logic/GothicFurnitureFactory.js","../logic/ModernFurnitureFactory":"src/logic/ModernFurnitureFactory.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _Dom = require("./view/Dom");

new _Dom.Dom(); // const root = document.getElementById('root') as HTMLDivElement;
// const firstInput = document.getElementById('modernChairInput') as HTMLInputElement;
// firstInput.addEventListener('change', (e: Event): void => {
//     changeHTML(e.currentTarget as HTMLInputElement);
// })
// let val: HTMLSpanElement;
// if (firstInput.value) {
//     val = document.getElementById('modernChairValue') as HTMLSpanElement;
//     val.innerHTML = firstInput.value;
// }
// function changeHTML(el: HTMLInputElement) {
//     if(el.value) {
//         val.innerHTML = el.value;
//     }
// }
},{"./view/Dom":"src/view/Dom.js"}],"../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50590" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map