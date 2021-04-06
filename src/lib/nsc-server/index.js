(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nsc"] = factory();
	else
		root["nsc"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@luigi-project/core/luigi.js":
/*!***************************************************!*\
  !*** ./node_modules/@luigi-project/core/luigi.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e120) { throw _e120; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e121) { didErr = true; err = _e121; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(i, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 141);
}([function (e, t, n) {
  var i = n(2),
      r = n(16).f,
      o = n(13),
      a = n(14),
      s = n(81),
      l = n(104),
      c = n(54);

  e.exports = function (e, t) {
    var n,
        d,
        u,
        p,
        f,
        g = e.target,
        h = e.global,
        m = e.stat;
    if (n = h ? i : m ? i[g] || s(g, {}) : (i[g] || {}).prototype) for (d in t) {
      if (p = t[d], u = e.noTargetGet ? (f = r(n, d)) && f.value : n[d], !c(h ? d : g + (m ? "." : "#") + d, e.forced) && void 0 !== u) {
        if (_typeof(p) == _typeof(u)) continue;
        l(p, u);
      }

      (e.sham || u && u.sham) && o(p, "sham", !0), a(n, d, p, e);
    }
  };
}, function (e, t) {
  e.exports = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  };
}, function (e, t, n) {
  (function (t) {
    var n = function n(e) {
      return e && e.Math == Math && e;
    };

    e.exports = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || n("object" == _typeof(t) && t) || Function("return this")();
  }).call(this, n(176));
}, function (e, t) {
  e.exports = function (e) {
    return "object" == _typeof(e) ? null !== e : "function" == typeof e;
  };
}, function (e, t, n) {
  var i = n(3);

  e.exports = function (e) {
    if (!i(e)) throw TypeError(String(e) + " is not an object");
    return e;
  };
}, function (e, t, n) {
  "use strict";

  var i,
      r = n(6),
      o = n(2),
      a = n(3),
      s = n(11),
      l = n(60),
      c = n(13),
      d = n(14),
      u = n(9).f,
      p = n(27),
      f = n(45),
      g = n(7),
      h = n(51),
      m = o.DataView,
      v = m && m.prototype,
      b = o.Int8Array,
      w = b && b.prototype,
      S = o.Uint8ClampedArray,
      y = S && S.prototype,
      _ = b && p(b),
      C = w && p(w),
      x = Object.prototype,
      k = x.isPrototypeOf,
      I = g("toStringTag"),
      T = h("TYPED_ARRAY_TAG"),
      N = !(!o.ArrayBuffer || !m),
      $ = N && !!f && "Opera" !== l(o.opera),
      P = !1,
      E = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
      L = function L(e) {
    return a(e) && s(E, l(e));
  };

  for (i in E) {
    o[i] || ($ = !1);
  }

  if ((!$ || "function" != typeof _ || _ === Function.prototype) && (_ = function _() {
    throw TypeError("Incorrect invocation");
  }, $)) for (i in E) {
    o[i] && f(o[i], _);
  }
  if ((!$ || !C || C === x) && (C = _.prototype, $)) for (i in E) {
    o[i] && f(o[i].prototype, C);
  }
  if ($ && p(y) !== C && f(y, C), r && !s(C, I)) for (i in P = !0, u(C, I, {
    get: function get() {
      return a(this) ? this[T] : void 0;
    }
  }), E) {
    o[i] && c(o[i], T, i);
  }
  N && f && p(v) !== x && f(v, x), e.exports = {
    NATIVE_ARRAY_BUFFER: N,
    NATIVE_ARRAY_BUFFER_VIEWS: $,
    TYPED_ARRAY_TAG: P && T,
    aTypedArray: function aTypedArray(e) {
      if (L(e)) return e;
      throw TypeError("Target is not a typed array");
    },
    aTypedArrayConstructor: function aTypedArrayConstructor(e) {
      if (f) {
        if (k.call(_, e)) return e;
      } else for (var t in E) {
        if (s(E, i)) {
          var n = o[t];
          if (n && (e === n || k.call(n, e))) return e;
        }
      }

      throw TypeError("Target is not a typed array constructor");
    },
    exportProto: function exportProto(e, t, n) {
      if (r) {
        if (n) for (var i in E) {
          var a = o[i];
          a && s(a.prototype, e) && delete a.prototype[e];
        }
        C[e] && !n || d(C, e, n ? t : $ && w[e] || t);
      }
    },
    exportStatic: function exportStatic(e, t, n) {
      var i, a;

      if (r) {
        if (f) {
          if (n) for (i in E) {
            (a = o[i]) && s(a, e) && delete a[e];
          }
          if (_[e] && !n) return;

          try {
            return d(_, e, n ? t : $ && b[e] || t);
          } catch (e) {}
        }

        for (i in E) {
          !(a = o[i]) || a[e] && !n || d(a, e, t);
        }
      }
    },
    isView: function isView(e) {
      var t = l(e);
      return "DataView" === t || s(E, t);
    },
    isTypedArray: L,
    TypedArray: _,
    TypedArrayPrototype: C
  };
}, function (e, t, n) {
  var i = n(1);
  e.exports = !i(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (e, t, n) {
  var i = n(2),
      r = n(50),
      o = n(51),
      a = n(106),
      s = i.Symbol,
      l = r("wks");

  e.exports = function (e) {
    return l[e] || (l[e] = a && s[e] || (a ? s : o)("Symbol." + e));
  };
}, function (e, t, n) {
  var i = n(23),
      r = Math.min;

  e.exports = function (e) {
    return e > 0 ? r(i(e), 9007199254740991) : 0;
  };
}, function (e, t, n) {
  var i = n(6),
      r = n(101),
      o = n(4),
      a = n(25),
      s = Object.defineProperty;
  t.f = i ? s : function (e, t, n) {
    if (o(e), t = a(t, !0), o(n), r) try {
      return s(e, t, n);
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
    return "value" in n && (e[t] = n.value), e;
  };
}, function (e, t, n) {
  var i = n(15);

  e.exports = function (e) {
    return Object(i(e));
  };
}, function (e, t) {
  var n = {}.hasOwnProperty;

  e.exports = function (e, t) {
    return n.call(e, t);
  };
}, function (e, t, n) {
  var i = n(35),
      r = n(49),
      o = n(10),
      a = n(8),
      s = n(56),
      l = [].push,
      c = function c(e) {
    var t = 1 == e,
        n = 2 == e,
        c = 3 == e,
        d = 4 == e,
        u = 6 == e,
        p = 5 == e || u;
    return function (f, g, h, m) {
      for (var v, b, w = o(f), S = r(w), y = i(g, h, 3), _ = a(S.length), C = 0, x = m || s, k = t ? x(f, _) : n ? x(f, 0) : void 0; _ > C; C++) {
        if ((p || C in S) && (b = y(v = S[C], C, w), e)) if (t) k[C] = b;else if (b) switch (e) {
          case 3:
            return !0;

          case 5:
            return v;

          case 6:
            return C;

          case 2:
            l.call(k, v);
        } else if (d) return !1;
      }

      return u ? -1 : c || d ? d : k;
    };
  };

  e.exports = {
    forEach: c(0),
    map: c(1),
    filter: c(2),
    some: c(3),
    every: c(4),
    find: c(5),
    findIndex: c(6)
  };
}, function (e, t, n) {
  var i = n(6),
      r = n(9),
      o = n(38);
  e.exports = i ? function (e, t, n) {
    return r.f(e, t, o(1, n));
  } : function (e, t, n) {
    return e[t] = n, e;
  };
}, function (e, t, n) {
  var i = n(2),
      r = n(50),
      o = n(13),
      a = n(11),
      s = n(81),
      l = n(102),
      c = n(20),
      d = c.get,
      u = c.enforce,
      p = String(l).split("toString");
  r("inspectSource", function (e) {
    return l.call(e);
  }), (e.exports = function (e, t, n, r) {
    var l = !!r && !!r.unsafe,
        c = !!r && !!r.enumerable,
        d = !!r && !!r.noTargetGet;
    "function" == typeof n && ("string" != typeof t || a(n, "name") || o(n, "name", t), u(n).source = p.join("string" == typeof t ? t : "")), e !== i ? (l ? !d && e[t] && (c = !0) : delete e[t], c ? e[t] = n : o(e, t, n)) : c ? e[t] = n : s(t, n);
  })(Function.prototype, "toString", function () {
    return "function" == typeof this && d(this).source || l.call(this);
  });
}, function (e, t) {
  e.exports = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  };
}, function (e, t, n) {
  var i = n(6),
      r = n(64),
      o = n(38),
      a = n(19),
      s = n(25),
      l = n(11),
      c = n(101),
      d = Object.getOwnPropertyDescriptor;
  t.f = i ? d : function (e, t) {
    if (e = a(e), t = s(t, !0), c) try {
      return d(e, t);
    } catch (e) {}
    if (l(e, t)) return o(!r.f.call(e, t), e[t]);
  };
}, function (e, t, n) {
  var i = n(43),
      r = n(11),
      o = n(109),
      a = n(9).f;

  e.exports = function (e) {
    var t = i.Symbol || (i.Symbol = {});
    r(t, e) || a(t, e, {
      value: o.f(e)
    });
  };
}, function (e, t) {
  e.exports = function (e) {
    if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
    return e;
  };
}, function (e, t, n) {
  var i = n(49),
      r = n(15);

  e.exports = function (e) {
    return i(r(e));
  };
}, function (e, t, n) {
  var i,
      r,
      o,
      a = n(103),
      s = n(2),
      l = n(3),
      c = n(13),
      d = n(11),
      u = n(65),
      p = n(52),
      f = s.WeakMap;

  if (a) {
    var g = new f(),
        h = g.get,
        m = g.has,
        v = g.set;
    i = function i(e, t) {
      return v.call(g, e, t), t;
    }, r = function r(e) {
      return h.call(g, e) || {};
    }, o = function o(e) {
      return m.call(g, e);
    };
  } else {
    var b = u("state");
    p[b] = !0, i = function i(e, t) {
      return c(e, b, t), t;
    }, r = function r(e) {
      return d(e, b) ? e[b] : {};
    }, o = function o(e) {
      return d(e, b);
    };
  }

  e.exports = {
    set: i,
    get: r,
    has: o,
    enforce: function enforce(e) {
      return o(e) ? r(e) : i(e, {});
    },
    getterFor: function getterFor(e) {
      return function (t) {
        var n;
        if (!l(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
        return n;
      };
    }
  };
}, function (e, t, n) {
  var i = n(15),
      r = /"/g;

  e.exports = function (e, t, n, o) {
    var a = String(i(e)),
        s = "<" + t;
    return "" !== n && (s += " " + n + '="' + String(o).replace(r, "&quot;") + '"'), s + ">" + a + "</" + t + ">";
  };
}, function (e, t, n) {
  var i = n(1);

  e.exports = function (e) {
    return i(function () {
      var t = ""[e]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3;
    });
  };
}, function (e, t) {
  var n = Math.ceil,
      i = Math.floor;

  e.exports = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e);
  };
}, function (e, t) {
  var n = {}.toString;

  e.exports = function (e) {
    return n.call(e).slice(8, -1);
  };
}, function (e, t, n) {
  var i = n(3);

  e.exports = function (e, t) {
    if (!i(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
    if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
    if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
    throw TypeError("Can't convert object to primitive value");
  };
}, function (e, t, n) {
  var i = n(9).f,
      r = n(11),
      o = n(7)("toStringTag");

  e.exports = function (e, t, n) {
    e && !r(e = n ? e : e.prototype, o) && i(e, o, {
      configurable: !0,
      value: t
    });
  };
}, function (e, t, n) {
  var i = n(11),
      r = n(10),
      o = n(65),
      a = n(87),
      s = o("IE_PROTO"),
      l = Object.prototype;
  e.exports = a ? Object.getPrototypeOf : function (e) {
    return e = r(e), i(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null;
  };
}, function (e, t) {
  e.exports = !1;
}, function (e, t, n) {
  "use strict";

  var i = n(1);

  e.exports = function (e, t) {
    var n = [][e];
    return !n || !i(function () {
      n.call(null, t || function () {
        throw 1;
      }, 1);
    });
  };
}, function (e, t, n) {
  var i = n(4),
      r = n(18),
      o = n(7)("species");

  e.exports = function (e, t) {
    var n,
        a = i(e).constructor;
    return void 0 === a || null == (n = i(a)[o]) ? t : r(n);
  };
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(2),
      o = n(6),
      a = n(100),
      s = n(5),
      l = n(79),
      c = n(37),
      d = n(38),
      u = n(13),
      p = n(8),
      f = n(135),
      g = n(136),
      h = n(25),
      m = n(11),
      v = n(60),
      b = n(3),
      w = n(34),
      S = n(45),
      y = n(39).f,
      _ = n(137),
      C = n(12).forEach,
      x = n(46),
      k = n(9),
      I = n(16),
      T = n(20),
      N = T.get,
      $ = T.set,
      P = k.f,
      E = I.f,
      L = Math.round,
      R = r.RangeError,
      A = l.ArrayBuffer,
      D = l.DataView,
      O = s.NATIVE_ARRAY_BUFFER_VIEWS,
      V = s.TYPED_ARRAY_TAG,
      M = s.TypedArray,
      F = s.TypedArrayPrototype,
      U = s.aTypedArrayConstructor,
      j = s.isTypedArray,
      B = function B(e, t) {
    for (var n = 0, i = t.length, r = new (U(e))(i); i > n;) {
      r[n] = t[n++];
    }

    return r;
  },
      G = function G(e, t) {
    P(e, t, {
      get: function get() {
        return N(this)[t];
      }
    });
  },
      z = function z(e) {
    var t;
    return e instanceof A || "ArrayBuffer" == (t = v(e)) || "SharedArrayBuffer" == t;
  },
      W = function W(e, t) {
    return j(e) && "symbol" != _typeof(t) && t in e && String(+t) == String(t);
  },
      H = function H(e, t) {
    return W(e, t = h(t, !0)) ? d(2, e[t]) : E(e, t);
  },
      q = function q(e, t, n) {
    return !(W(e, t = h(t, !0)) && b(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? P(e, t, n) : (e[t] = n.value, e);
  };

  o ? (O || (I.f = H, k.f = q, G(F, "buffer"), G(F, "byteOffset"), G(F, "byteLength"), G(F, "length")), i({
    target: "Object",
    stat: !0,
    forced: !O
  }, {
    getOwnPropertyDescriptor: H,
    defineProperty: q
  }), e.exports = function (e, t, n, o) {
    var s = e + (o ? "Clamped" : "") + "Array",
        l = "get" + e,
        d = "set" + e,
        h = r[s],
        m = h,
        v = m && m.prototype,
        k = {},
        I = function I(e, n) {
      P(e, n, {
        get: function get() {
          return function (e, n) {
            var i = N(e);
            return i.view[l](n * t + i.byteOffset, !0);
          }(this, n);
        },
        set: function set(e) {
          return function (e, n, i) {
            var r = N(e);
            o && (i = (i = L(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.view[d](n * t + r.byteOffset, i, !0);
          }(this, n, e);
        },
        enumerable: !0
      });
    };

    O ? a && (m = n(function (e, n, i, r) {
      return c(e, m, s), b(n) ? z(n) ? void 0 !== r ? new h(n, g(i, t), r) : void 0 !== i ? new h(n, g(i, t)) : new h(n) : j(n) ? B(m, n) : _.call(m, n) : new h(f(n));
    }), S && S(m, M), C(y(h), function (e) {
      e in m || u(m, e, h[e]);
    }), m.prototype = v) : (m = n(function (e, n, i, r) {
      c(e, m, s);
      var o,
          a,
          l,
          d = 0,
          u = 0;

      if (b(n)) {
        if (!z(n)) return j(n) ? B(m, n) : _.call(m, n);
        o = n, u = g(i, t);
        var h = n.byteLength;

        if (void 0 === r) {
          if (h % t) throw R("Wrong length");
          if ((a = h - u) < 0) throw R("Wrong length");
        } else if ((a = p(r) * t) + u > h) throw R("Wrong length");

        l = a / t;
      } else l = f(n), o = new A(a = l * t);

      for ($(e, {
        buffer: o,
        byteOffset: u,
        byteLength: a,
        length: l,
        view: new D(o)
      }); d < l;) {
        I(e, d++);
      }
    }), S && S(m, M), v = m.prototype = w(F)), v.constructor !== m && u(v, "constructor", m), V && u(v, V, s), k[s] = m, i({
      global: !0,
      forced: m != h,
      sham: !O
    }, k), "BYTES_PER_ELEMENT" in m || u(m, "BYTES_PER_ELEMENT", t), "BYTES_PER_ELEMENT" in v || u(v, "BYTES_PER_ELEMENT", t), x(s);
  }) : e.exports = function () {};
}, function (e, t, n) {
  var i = n(43),
      r = n(2),
      o = function o(e) {
    return "function" == typeof e ? e : void 0;
  };

  e.exports = function (e, t) {
    return arguments.length < 2 ? o(i[e]) || o(r[e]) : i[e] && i[e][t] || r[e] && r[e][t];
  };
}, function (e, t, n) {
  var i = n(23),
      r = Math.max,
      o = Math.min;

  e.exports = function (e, t) {
    var n = i(e);
    return n < 0 ? r(n + t, 0) : o(n, t);
  };
}, function (e, t, n) {
  var i = n(4),
      r = n(85),
      o = n(83),
      a = n(52),
      s = n(107),
      l = n(80),
      c = n(65)("IE_PROTO"),
      d = function d() {},
      _u = function u() {
    var e,
        t = l("iframe"),
        n = o.length;

    for (t.style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _u = e.F; n--;) {
      delete _u.prototype[o[n]];
    }

    return _u();
  };

  e.exports = Object.create || function (e, t) {
    var n;
    return null !== e ? (d.prototype = i(e), n = new d(), d.prototype = null, n[c] = e) : n = _u(), void 0 === t ? n : r(n, t);
  }, a[c] = !0;
}, function (e, t, n) {
  var i = n(18);

  e.exports = function (e, t, n) {
    if (i(e), void 0 === t) return e;

    switch (n) {
      case 0:
        return function () {
          return e.call(t);
        };

      case 1:
        return function (n) {
          return e.call(t, n);
        };

      case 2:
        return function (n, i) {
          return e.call(t, n, i);
        };

      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };
    }

    return function () {
      return e.apply(t, arguments);
    };
  };
}, function (e, t, n) {
  var i = n(7),
      r = n(34),
      o = n(13),
      a = i("unscopables"),
      s = Array.prototype;
  null == s[a] && o(s, a, r(null)), e.exports = function (e) {
    s[a][e] = !0;
  };
}, function (e, t) {
  e.exports = function (e, t, n) {
    if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
    return e;
  };
}, function (e, t) {
  e.exports = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  };
}, function (e, t, n) {
  var i = n(105),
      r = n(83).concat("length", "prototype");

  t.f = Object.getOwnPropertyNames || function (e) {
    return i(e, r);
  };
}, function (e, t, n) {
  var i = n(24);

  e.exports = Array.isArray || function (e) {
    return "Array" == i(e);
  };
}, function (e, t, n) {
  var i = n(52),
      r = n(3),
      o = n(11),
      a = n(9).f,
      s = n(51),
      l = n(57),
      c = s("meta"),
      d = 0,
      u = Object.isExtensible || function () {
    return !0;
  },
      p = function p(e) {
    a(e, c, {
      value: {
        objectID: "O" + ++d,
        weakData: {}
      }
    });
  },
      f = e.exports = {
    REQUIRED: !1,
    fastKey: function fastKey(e, t) {
      if (!r(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;

      if (!o(e, c)) {
        if (!u(e)) return "F";
        if (!t) return "E";
        p(e);
      }

      return e[c].objectID;
    },
    getWeakData: function getWeakData(e, t) {
      if (!o(e, c)) {
        if (!u(e)) return !0;
        if (!t) return !1;
        p(e);
      }

      return e[c].weakData;
    },
    onFreeze: function onFreeze(e) {
      return l && f.REQUIRED && u(e) && !o(e, c) && p(e), e;
    }
  };

  i[c] = !0;
}, function (e, t, n) {
  "use strict";

  var i = n(25),
      r = n(9),
      o = n(38);

  e.exports = function (e, t, n) {
    var a = i(t);
    a in e ? r.f(e, a, o(0, n)) : e[a] = n;
  };
}, function (e, t, n) {
  e.exports = n(2);
}, function (e, t, n) {
  var i = n(4),
      r = n(86),
      o = n(8),
      a = n(35),
      s = n(59),
      l = n(112),
      c = function c(e, t) {
    this.stopped = e, this.result = t;
  };

  (e.exports = function (e, t, n, d, u) {
    var p,
        f,
        g,
        h,
        m,
        v,
        b,
        w = a(t, n, d ? 2 : 1);
    if (u) p = e;else {
      if ("function" != typeof (f = s(e))) throw TypeError("Target is not iterable");

      if (r(f)) {
        for (g = 0, h = o(e.length); h > g; g++) {
          if ((m = d ? w(i(b = e[g])[0], b[1]) : w(e[g])) && m instanceof c) return m;
        }

        return new c(!1);
      }

      p = f.call(e);
    }

    for (v = p.next; !(b = v.call(p)).done;) {
      if ("object" == _typeof(m = l(p, w, b.value, d)) && m && m instanceof c) return m;
    }

    return new c(!1);
  }).stop = function (e) {
    return new c(!0, e);
  };
}, function (e, t, n) {
  var i = n(4),
      r = n(114);
  e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e,
        t = !1,
        n = {};

    try {
      (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
    } catch (e) {}

    return function (n, o) {
      return i(n), r(o), t ? e.call(n, o) : n.__proto__ = o, n;
    };
  }() : void 0);
}, function (e, t, n) {
  "use strict";

  var i = n(32),
      r = n(9),
      o = n(7),
      a = n(6),
      s = o("species");

  e.exports = function (e) {
    var t = i(e),
        n = r.f;
    a && t && !t[s] && n(t, s, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  };
}, function (e, t, n) {
  var i = n(15),
      r = "[" + n(76) + "]",
      o = RegExp("^" + r + r + "*"),
      a = RegExp(r + r + "*$"),
      s = function s(e) {
    return function (t) {
      var n = String(i(t));
      return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n;
    };
  };

  e.exports = {
    start: s(1),
    end: s(2),
    trim: s(3)
  };
}, function (e, t, n) {
  var i = n(14);

  e.exports = function (e, t, n) {
    for (var r in t) {
      i(e, r, t[r], n);
    }

    return e;
  };
}, function (e, t, n) {
  var i = n(1),
      r = n(24),
      o = "".split;
  e.exports = i(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (e) {
    return "String" == r(e) ? o.call(e, "") : Object(e);
  } : Object;
}, function (e, t, n) {
  var i = n(28),
      r = n(177);
  (e.exports = function (e, t) {
    return r[e] || (r[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: "3.3.2",
    mode: i ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  });
}, function (e, t) {
  var n = 0,
      i = Math.random();

  e.exports = function (e) {
    return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + i).toString(36);
  };
}, function (e, t) {
  e.exports = {};
}, function (e, t, n) {
  var i = n(19),
      r = n(8),
      o = n(33),
      a = function a(e) {
    return function (t, n, a) {
      var s,
          l = i(t),
          c = r(l.length),
          d = o(a, c);

      if (e && n != n) {
        for (; c > d;) {
          if ((s = l[d++]) != s) return !0;
        }
      } else for (; c > d; d++) {
        if ((e || d in l) && l[d] === n) return e || d || 0;
      }

      return !e && -1;
    };
  };

  e.exports = {
    includes: a(!0),
    indexOf: a(!1)
  };
}, function (e, t, n) {
  var i = n(1),
      r = /#|\.prototype\./,
      o = function o(e, t) {
    var n = s[a(e)];
    return n == c || n != l && ("function" == typeof t ? i(t) : !!t);
  },
      a = o.normalize = function (e) {
    return String(e).replace(r, ".").toLowerCase();
  },
      s = o.data = {},
      l = o.NATIVE = "N",
      c = o.POLYFILL = "P";

  e.exports = o;
}, function (e, t, n) {
  var i = n(105),
      r = n(83);

  e.exports = Object.keys || function (e) {
    return i(e, r);
  };
}, function (e, t, n) {
  var i = n(3),
      r = n(40),
      o = n(7)("species");

  e.exports = function (e, t) {
    var n;
    return r(e) && ("function" != typeof (n = e.constructor) || n !== Array && !r(n.prototype) ? i(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
  };
}, function (e, t, n) {
  var i = n(1);
  e.exports = !i(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}, function (e, t) {
  e.exports = {};
}, function (e, t, n) {
  var i = n(60),
      r = n(58),
      o = n(7)("iterator");

  e.exports = function (e) {
    if (null != e) return e[o] || e["@@iterator"] || r[i(e)];
  };
}, function (e, t, n) {
  var i = n(24),
      r = n(7)("toStringTag"),
      o = "Arguments" == i(function () {
    return arguments;
  }());

  e.exports = function (e) {
    var t, n, a;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a;
  };
}, function (e, t, n) {
  var i = n(1),
      r = n(7)("species");

  e.exports = function (e) {
    return !i(function () {
      var t = [];
      return (t.constructor = {})[r] = function () {
        return {
          foo: 1
        };
      }, 1 !== t[e](Boolean).foo;
    });
  };
}, function (e, t, n) {
  "use strict";

  var i = n(4);

  e.exports = function () {
    var e = i(this),
        t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
  };
}, function (e, t, n) {
  var i = n(32);
  e.exports = i("navigator", "userAgent") || "";
}, function (e, t, n) {
  "use strict";

  var i = {}.propertyIsEnumerable,
      r = Object.getOwnPropertyDescriptor,
      o = r && !i.call({
    1: 2
  }, 1);
  t.f = o ? function (e) {
    var t = r(this, e);
    return !!t && t.enumerable;
  } : i;
}, function (e, t, n) {
  var i = n(50),
      r = n(51),
      o = i("keys");

  e.exports = function (e) {
    return o[e] || (o[e] = r(e));
  };
}, function (e, t, n) {
  "use strict";

  var i = n(28),
      r = n(2),
      o = n(1);
  e.exports = i || !o(function () {
    var e = Math.random();
    __defineSetter__.call(null, e, function () {}), delete r[e];
  });
}, function (e, t, n) {
  var i = n(7)("iterator"),
      r = !1;

  try {
    var o = 0,
        a = {
      next: function next() {
        return {
          done: !!o++
        };
      },
      "return": function _return() {
        r = !0;
      }
    };
    a[i] = function () {
      return this;
    }, Array.from(a, function () {
      throw 2;
    });
  } catch (e) {}

  e.exports = function (e, t) {
    if (!t && !r) return !1;
    var n = !1;

    try {
      var o = {};
      o[i] = function () {
        return {
          next: function next() {
            return {
              done: n = !0
            };
          }
        };
      }, e(o);
    } catch (e) {}

    return n;
  };
}, function (e, t, n) {
  var i = n(18),
      r = n(10),
      o = n(49),
      a = n(8),
      s = function s(e) {
    return function (t, n, s, l) {
      i(n);
      var c = r(t),
          d = o(c),
          u = a(c.length),
          p = e ? u - 1 : 0,
          f = e ? -1 : 1;
      if (s < 2) for (;;) {
        if (p in d) {
          l = d[p], p += f;
          break;
        }

        if (p += f, e ? p < 0 : u <= p) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; e ? p >= 0 : u > p; p += f) {
        p in d && (l = n(l, d[p], p, c));
      }

      return l;
    };
  };

  e.exports = {
    left: s(!1),
    right: s(!0)
  };
}, function (e, t, n) {
  "use strict";

  var i = n(19),
      r = n(36),
      o = n(58),
      a = n(20),
      s = n(89),
      l = a.set,
      c = a.getterFor("Array Iterator");
  e.exports = s(Array, "Array", function (e, t) {
    l(this, {
      type: "Array Iterator",
      target: i(e),
      index: 0,
      kind: t
    });
  }, function () {
    var e = c(this),
        t = e.target,
        n = e.kind,
        i = e.index++;
    return !t || i >= t.length ? (e.target = void 0, {
      value: void 0,
      done: !0
    }) : "keys" == n ? {
      value: i,
      done: !1
    } : "values" == n ? {
      value: t[i],
      done: !1
    } : {
      value: [i, t[i]],
      done: !1
    };
  }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
}, function (e, t, n) {
  var i = n(23),
      r = n(15),
      o = function o(e) {
    return function (t, n) {
      var o,
          a,
          s = String(r(t)),
          l = i(n),
          c = s.length;
      return l < 0 || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536;
    };
  };

  e.exports = {
    codeAt: o(!1),
    charAt: o(!0)
  };
}, function (e, t, n) {
  var i = n(3),
      r = n(24),
      o = n(7)("match");

  e.exports = function (e) {
    var t;
    return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e));
  };
}, function (e, t, n) {
  "use strict";

  var i = n(13),
      r = n(14),
      o = n(1),
      a = n(7),
      s = n(73),
      l = a("species"),
      c = !o(function () {
    var e = /./;
    return e.exec = function () {
      var e = [];
      return e.groups = {
        a: "7"
      }, e;
    }, "7" !== "".replace(e, "$<a>");
  }),
      d = !o(function () {
    var e = /(?:)/,
        t = e.exec;

    e.exec = function () {
      return t.apply(this, arguments);
    };

    var n = "ab".split(e);
    return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
  });

  e.exports = function (e, t, n, u) {
    var p = a(e),
        f = !o(function () {
      var t = {};
      return t[p] = function () {
        return 7;
      }, 7 != ""[e](t);
    }),
        g = f && !o(function () {
      var t = !1,
          n = /a/;
      return n.exec = function () {
        return t = !0, null;
      }, "split" === e && (n.constructor = {}, n.constructor[l] = function () {
        return n;
      }), n[p](""), !t;
    });

    if (!f || !g || "replace" === e && !c || "split" === e && !d) {
      var h = /./[p],
          m = n(p, ""[e], function (e, t, n, i, r) {
        return t.exec === s ? f && !r ? {
          done: !0,
          value: h.call(t, n, i)
        } : {
          done: !0,
          value: e.call(n, t, i)
        } : {
          done: !1
        };
      }),
          v = m[0],
          b = m[1];
      r(String.prototype, e, v), r(RegExp.prototype, p, 2 == t ? function (e, t) {
        return b.call(e, this, t);
      } : function (e) {
        return b.call(e, this);
      }), u && i(RegExp.prototype[p], "sham", !0);
    }
  };
}, function (e, t, n) {
  "use strict";

  var i,
      r,
      o = n(62),
      a = RegExp.prototype.exec,
      s = String.prototype.replace,
      l = a,
      c = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
      d = void 0 !== /()??/.exec("")[1];
  (c || d) && (l = function l(e) {
    var t,
        n,
        i,
        r,
        l = this;
    return d && (n = new RegExp("^" + l.source + "$(?!\\s)", o.call(l))), c && (t = l.lastIndex), i = a.call(l, e), c && i && (l.lastIndex = l.global ? i.index + i[0].length : t), d && i && i.length > 1 && s.call(i[0], n, function () {
      for (r = 1; r < arguments.length - 2; r++) {
        void 0 === arguments[r] && (i[r] = void 0);
      }
    }), i;
  }), e.exports = l;
}, function (e, t, n) {
  "use strict";

  var i = n(70).charAt;

  e.exports = function (e, t, n) {
    return t + (n ? i(e, t).length : 1);
  };
}, function (e, t, n) {
  var i = n(24),
      r = n(73);

  e.exports = function (e, t) {
    var n = e.exec;

    if ("function" == typeof n) {
      var o = n.call(e, t);
      if ("object" != _typeof(o)) throw TypeError("RegExp exec method returned something other than an Object or null");
      return o;
    }

    if ("RegExp" !== i(e)) throw TypeError("RegExp#exec called on incompatible receiver");
    return r.call(e, t);
  };
}, function (e, t) {
  e.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
}, function (e, t) {
  var n = Math.expm1,
      i = Math.exp;
  e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (e) {
    return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : i(e) - 1;
  } : n;
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(2),
      o = n(54),
      a = n(14),
      s = n(41),
      l = n(44),
      c = n(37),
      d = n(3),
      u = n(1),
      p = n(67),
      f = n(26),
      g = n(96);

  e.exports = function (e, t, n, h, m) {
    var v = r[e],
        b = v && v.prototype,
        w = v,
        S = h ? "set" : "add",
        y = {},
        _ = function _(e) {
      var t = b[e];
      a(b, e, "add" == e ? function (e) {
        return t.call(this, 0 === e ? 0 : e), this;
      } : "delete" == e ? function (e) {
        return !(m && !d(e)) && t.call(this, 0 === e ? 0 : e);
      } : "get" == e ? function (e) {
        return m && !d(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
      } : "has" == e ? function (e) {
        return !(m && !d(e)) && t.call(this, 0 === e ? 0 : e);
      } : function (e, n) {
        return t.call(this, 0 === e ? 0 : e, n), this;
      });
    };

    if (o(e, "function" != typeof v || !(m || b.forEach && !u(function () {
      new v().entries().next();
    })))) w = n.getConstructor(t, e, h, S), s.REQUIRED = !0;else if (o(e, !0)) {
      var C = new w(),
          x = C[S](m ? {} : -0, 1) != C,
          k = u(function () {
        C.has(1);
      }),
          I = p(function (e) {
        new v(e);
      }),
          T = !m && u(function () {
        for (var e = new v(), t = 5; t--;) {
          e[S](t, t);
        }

        return !e.has(-0);
      });
      I || ((w = t(function (t, n) {
        c(t, w, e);
        var i = g(new v(), t, w);
        return null != n && l(n, i[S], i, h), i;
      })).prototype = b, b.constructor = w), (k || T) && (_("delete"), _("has"), h && _("get")), (T || x) && _(S), m && b.clear && delete b.clear;
    }
    return y[e] = w, i({
      global: !0,
      forced: w != v
    }, y), f(w, e), m || n.setStrong(w, e, h), w;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(2),
      r = n(6),
      o = n(5).NATIVE_ARRAY_BUFFER,
      a = n(13),
      s = n(48),
      l = n(1),
      c = n(37),
      d = n(23),
      u = n(8),
      p = n(135),
      f = n(39).f,
      g = n(9).f,
      h = n(88),
      m = n(26),
      v = n(20),
      b = v.get,
      w = v.set,
      S = i.ArrayBuffer,
      _y2 = S,
      _2 = i.DataView,
      C = i.Math,
      x = i.RangeError,
      k = C.abs,
      I = C.pow,
      T = C.floor,
      N = C.log,
      $ = C.LN2,
      P = function P(e, t, n) {
    var i,
        r,
        o,
        a = new Array(n),
        s = 8 * n - t - 1,
        l = (1 << s) - 1,
        c = l >> 1,
        d = 23 === t ? I(2, -24) - I(2, -77) : 0,
        u = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
        p = 0;

    for ((e = k(e)) != e || e === 1 / 0 ? (r = e != e ? 1 : 0, i = l) : (i = T(N(e) / $), e * (o = I(2, -i)) < 1 && (i--, o *= 2), (e += i + c >= 1 ? d / o : d * I(2, 1 - c)) * o >= 2 && (i++, o /= 2), i + c >= l ? (r = 0, i = l) : i + c >= 1 ? (r = (e * o - 1) * I(2, t), i += c) : (r = e * I(2, c - 1) * I(2, t), i = 0)); t >= 8; a[p++] = 255 & r, r /= 256, t -= 8) {
      ;
    }

    for (i = i << t | r, s += t; s > 0; a[p++] = 255 & i, i /= 256, s -= 8) {
      ;
    }

    return a[--p] |= 128 * u, a;
  },
      E = function E(e, t) {
    var n,
        i = e.length,
        r = 8 * i - t - 1,
        o = (1 << r) - 1,
        a = o >> 1,
        s = r - 7,
        l = i - 1,
        c = e[l--],
        d = 127 & c;

    for (c >>= 7; s > 0; d = 256 * d + e[l], l--, s -= 8) {
      ;
    }

    for (n = d & (1 << -s) - 1, d >>= -s, s += t; s > 0; n = 256 * n + e[l], l--, s -= 8) {
      ;
    }

    if (0 === d) d = 1 - a;else {
      if (d === o) return n ? NaN : c ? -1 / 0 : 1 / 0;
      n += I(2, t), d -= a;
    }
    return (c ? -1 : 1) * n * I(2, d - t);
  },
      L = function L(e) {
    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
  },
      R = function R(e) {
    return [255 & e];
  },
      A = function A(e) {
    return [255 & e, e >> 8 & 255];
  },
      D = function D(e) {
    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
  },
      O = function O(e) {
    return P(e, 23, 4);
  },
      V = function V(e) {
    return P(e, 52, 8);
  },
      M = function M(e, t) {
    g(e.prototype, t, {
      get: function get() {
        return b(this)[t];
      }
    });
  },
      F = function F(e, t, n, i) {
    var r = p(+n),
        o = b(e);
    if (r + t > o.byteLength) throw x("Wrong index");
    var a = b(o.buffer).bytes,
        s = r + o.byteOffset,
        l = a.slice(s, s + t);
    return i ? l : l.reverse();
  },
      U = function U(e, t, n, i, r, o) {
    var a = p(+n),
        s = b(e);
    if (a + t > s.byteLength) throw x("Wrong index");

    for (var l = b(s.buffer).bytes, c = a + s.byteOffset, d = i(+r), u = 0; u < t; u++) {
      l[c + u] = d[o ? u : t - u - 1];
    }
  };

  if (o) {
    if (!l(function () {
      S(1);
    }) || !l(function () {
      new S(-1);
    }) || l(function () {
      return new S(), new S(1.5), new S(NaN), "ArrayBuffer" != S.name;
    })) {
      for (var j, B = (_y2 = function y(e) {
        return c(this, _y2), new S(p(e));
      }).prototype = S.prototype, G = f(S), z = 0; G.length > z;) {
        (j = G[z++]) in _y2 || a(_y2, j, S[j]);
      }

      B.constructor = _y2;
    }

    var W = new _2(new _y2(2)),
        H = _2.prototype.setInt8;
    W.setInt8(0, 2147483648), W.setInt8(1, 2147483649), !W.getInt8(0) && W.getInt8(1) || s(_2.prototype, {
      setInt8: function setInt8(e, t) {
        H.call(this, e, t << 24 >> 24);
      },
      setUint8: function setUint8(e, t) {
        H.call(this, e, t << 24 >> 24);
      }
    }, {
      unsafe: !0
    });
  } else _y2 = function _y(e) {
    c(this, _y2, "ArrayBuffer");
    var t = p(e);
    w(this, {
      bytes: h.call(new Array(t), 0),
      byteLength: t
    }), r || (this.byteLength = t);
  }, _2 = function _(e, t, n) {
    c(this, _2, "DataView"), c(e, _y2, "DataView");
    var i = b(e).byteLength,
        o = d(t);
    if (o < 0 || o > i) throw x("Wrong offset");
    if (o + (n = void 0 === n ? i - o : u(n)) > i) throw x("Wrong length");
    w(this, {
      buffer: e,
      byteLength: n,
      byteOffset: o
    }), r || (this.buffer = e, this.byteLength = n, this.byteOffset = o);
  }, r && (M(_y2, "byteLength"), M(_2, "buffer"), M(_2, "byteLength"), M(_2, "byteOffset")), s(_2.prototype, {
    getInt8: function getInt8(e) {
      return F(this, 1, e)[0] << 24 >> 24;
    },
    getUint8: function getUint8(e) {
      return F(this, 1, e)[0];
    },
    getInt16: function getInt16(e) {
      var t = F(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
      return (t[1] << 8 | t[0]) << 16 >> 16;
    },
    getUint16: function getUint16(e) {
      var t = F(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
      return t[1] << 8 | t[0];
    },
    getInt32: function getInt32(e) {
      return L(F(this, 4, e, arguments.length > 1 ? arguments[1] : void 0));
    },
    getUint32: function getUint32(e) {
      return L(F(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
    },
    getFloat32: function getFloat32(e) {
      return E(F(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23);
    },
    getFloat64: function getFloat64(e) {
      return E(F(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52);
    },
    setInt8: function setInt8(e, t) {
      U(this, 1, e, R, t);
    },
    setUint8: function setUint8(e, t) {
      U(this, 1, e, R, t);
    },
    setInt16: function setInt16(e, t) {
      U(this, 2, e, A, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint16: function setUint16(e, t) {
      U(this, 2, e, A, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setInt32: function setInt32(e, t) {
      U(this, 4, e, D, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint32: function setUint32(e, t) {
      U(this, 4, e, D, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat32: function setFloat32(e, t) {
      U(this, 4, e, O, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat64: function setFloat64(e, t) {
      U(this, 8, e, V, t, arguments.length > 2 ? arguments[2] : void 0);
    }
  });

  m(_y2, "ArrayBuffer"), m(_2, "DataView"), e.exports = {
    ArrayBuffer: _y2,
    DataView: _2
  };
}, function (e, t, n) {
  var i = n(2),
      r = n(3),
      o = i.document,
      a = r(o) && r(o.createElement);

  e.exports = function (e) {
    return a ? o.createElement(e) : {};
  };
}, function (e, t, n) {
  var i = n(2),
      r = n(13);

  e.exports = function (e, t) {
    try {
      r(i, e, t);
    } catch (n) {
      i[e] = t;
    }

    return t;
  };
}, function (e, t, n) {
  var i = n(32),
      r = n(39),
      o = n(84),
      a = n(4);

  e.exports = i("Reflect", "ownKeys") || function (e) {
    var t = r.f(a(e)),
        n = o.f;
    return n ? t.concat(n(e)) : t;
  };
}, function (e, t) {
  e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
}, function (e, t) {
  t.f = Object.getOwnPropertySymbols;
}, function (e, t, n) {
  var i = n(6),
      r = n(9),
      o = n(4),
      a = n(55);
  e.exports = i ? Object.defineProperties : function (e, t) {
    o(e);

    for (var n, i = a(t), s = i.length, l = 0; s > l;) {
      r.f(e, n = i[l++], t[n]);
    }

    return e;
  };
}, function (e, t, n) {
  var i = n(7),
      r = n(58),
      o = i("iterator"),
      a = Array.prototype;

  e.exports = function (e) {
    return void 0 !== e && (r.Array === e || a[o] === e);
  };
}, function (e, t, n) {
  var i = n(1);
  e.exports = !i(function () {
    function e() {}

    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  });
}, function (e, t, n) {
  "use strict";

  var i = n(10),
      r = n(33),
      o = n(8);

  e.exports = function (e) {
    for (var t = i(this), n = o(t.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;) {
      t[s++] = e;
    }

    return t;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(90),
      o = n(27),
      a = n(45),
      s = n(26),
      l = n(13),
      c = n(14),
      d = n(7),
      u = n(28),
      p = n(58),
      f = n(121),
      g = f.IteratorPrototype,
      h = f.BUGGY_SAFARI_ITERATORS,
      m = d("iterator"),
      v = function v() {
    return this;
  };

  e.exports = function (e, t, n, d, f, b, w) {
    r(n, t, d);

    var S,
        y,
        _,
        C = function C(e) {
      if (e === f && N) return N;
      if (!h && e in I) return I[e];

      switch (e) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new n(this, e);
          };
      }

      return function () {
        return new n(this);
      };
    },
        x = t + " Iterator",
        k = !1,
        I = e.prototype,
        T = I[m] || I["@@iterator"] || f && I[f],
        N = !h && T || C(f),
        $ = "Array" == t && I.entries || T;

    if ($ && (S = o($.call(new e())), g !== Object.prototype && S.next && (u || o(S) === g || (a ? a(S, g) : "function" != typeof S[m] && l(S, m, v)), s(S, x, !0, !0), u && (p[x] = v))), "values" == f && T && "values" !== T.name && (k = !0, N = function N() {
      return T.call(this);
    }), u && !w || I[m] === N || l(I, m, N), p[t] = N, f) if (y = {
      values: C("values"),
      keys: b ? N : C("keys"),
      entries: C("entries")
    }, w) for (_ in y) {
      !h && !k && _ in I || c(I, _, y[_]);
    } else i({
      target: t,
      proto: !0,
      forced: h || k
    }, y);
    return y;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(121).IteratorPrototype,
      r = n(34),
      o = n(38),
      a = n(26),
      s = n(58),
      l = function l() {
    return this;
  };

  e.exports = function (e, t, n) {
    var c = t + " Iterator";
    return e.prototype = r(i, {
      next: o(1, n)
    }), a(e, c, !1, !0), s[c] = l, e;
  };
}, function (e, t, n) {
  var i = n(71);

  e.exports = function (e) {
    if (i(e)) throw TypeError("The method doesn't accept regular expressions");
    return e;
  };
}, function (e, t, n) {
  var i = n(7)("match");

  e.exports = function (e) {
    var t = /./;

    try {
      "/./"[e](t);
    } catch (n) {
      try {
        return t[i] = !1, "/./"[e](t);
      } catch (e) {}
    }

    return !1;
  };
}, function (e, t, n) {
  var i = n(8),
      r = n(94),
      o = n(15),
      a = Math.ceil,
      s = function s(e) {
    return function (t, n, s) {
      var l,
          c,
          d = String(o(t)),
          u = d.length,
          p = void 0 === s ? " " : String(s),
          f = i(n);
      return f <= u || "" == p ? d : (l = f - u, (c = r.call(p, a(l / p.length))).length > l && (c = c.slice(0, l)), e ? d + c : c + d);
    };
  };

  e.exports = {
    start: s(!1),
    end: s(!0)
  };
}, function (e, t, n) {
  "use strict";

  var i = n(23),
      r = n(15);

  e.exports = "".repeat || function (e) {
    var t = String(r(this)),
        n = "",
        o = i(e);
    if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");

    for (; o > 0; (o >>>= 1) && (t += t)) {
      1 & o && (n += t);
    }

    return n;
  };
}, function (e, t, n) {
  var i = n(1),
      r = n(76);

  e.exports = function (e) {
    return i(function () {
      return !!r[e]() || "​᠎" != "​᠎"[e]() || r[e].name !== e;
    });
  };
}, function (e, t, n) {
  var i = n(3),
      r = n(45);

  e.exports = function (e, t, n) {
    var o, a;
    return r && "function" == typeof (o = t.constructor) && o !== n && i(a = o.prototype) && a !== n.prototype && r(e, a), e;
  };
}, function (e, t) {
  e.exports = Math.sign || function (e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
  };
}, function (e, t, n) {
  var i,
      r,
      o,
      a = n(2),
      s = n(1),
      l = n(24),
      c = n(35),
      d = n(107),
      u = n(80),
      p = n(63),
      f = a.location,
      g = a.setImmediate,
      h = a.clearImmediate,
      m = a.process,
      v = a.MessageChannel,
      b = a.Dispatch,
      w = 0,
      S = {},
      y = function y(e) {
    if (S.hasOwnProperty(e)) {
      var t = S[e];
      delete S[e], t();
    }
  },
      _ = function _(e) {
    return function () {
      y(e);
    };
  },
      C = function C(e) {
    y(e.data);
  },
      x = function x(e) {
    a.postMessage(e + "", f.protocol + "//" + f.host);
  };

  g && h || (g = function g(e) {
    for (var t = [], n = 1; arguments.length > n;) {
      t.push(arguments[n++]);
    }

    return S[++w] = function () {
      ("function" == typeof e ? e : Function(e)).apply(void 0, t);
    }, i(w), w;
  }, h = function h(e) {
    delete S[e];
  }, "process" == l(m) ? i = function i(e) {
    m.nextTick(_(e));
  } : b && b.now ? i = function i(e) {
    b.now(_(e));
  } : v && !/(iphone|ipod|ipad).*applewebkit/i.test(p) ? (o = (r = new v()).port2, r.port1.onmessage = C, i = c(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || s(x) ? i = "onreadystatechange" in u("script") ? function (e) {
    d.appendChild(u("script")).onreadystatechange = function () {
      d.removeChild(this), y(e);
    };
  } : function (e) {
    setTimeout(_(e), 0);
  } : (i = x, a.addEventListener("message", C, !1))), e.exports = {
    set: g,
    clear: h
  };
}, function (e, t, n) {
  "use strict";

  var i = n(18),
      r = function r(e) {
    var t, n;
    this.promise = new e(function (e, i) {
      if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
      t = e, n = i;
    }), this.resolve = i(t), this.reject = i(n);
  };

  e.exports.f = function (e) {
    return new r(e);
  };
}, function (e, t, n) {
  var i = n(2),
      r = n(1),
      o = n(67),
      a = n(5).NATIVE_ARRAY_BUFFER_VIEWS,
      s = i.ArrayBuffer,
      l = i.Int8Array;
  e.exports = !a || !r(function () {
    l(1);
  }) || !r(function () {
    new l(-1);
  }) || !o(function (e) {
    new l(), new l(null), new l(1.5), new l(e);
  }, !0) || r(function () {
    return 1 !== new l(new s(2), 1, void 0).length;
  });
}, function (e, t, n) {
  var i = n(6),
      r = n(1),
      o = n(80);
  e.exports = !i && !r(function () {
    return 7 != Object.defineProperty(o("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (e, t, n) {
  var i = n(50);
  e.exports = i("native-function-to-string", Function.toString);
}, function (e, t, n) {
  var i = n(2),
      r = n(102),
      o = i.WeakMap;
  e.exports = "function" == typeof o && /native code/.test(r.call(o));
}, function (e, t, n) {
  var i = n(11),
      r = n(82),
      o = n(16),
      a = n(9);

  e.exports = function (e, t) {
    for (var n = r(t), s = a.f, l = o.f, c = 0; c < n.length; c++) {
      var d = n[c];
      i(e, d) || s(e, d, l(t, d));
    }
  };
}, function (e, t, n) {
  var i = n(11),
      r = n(19),
      o = n(53).indexOf,
      a = n(52);

  e.exports = function (e, t) {
    var n,
        s = r(e),
        l = 0,
        c = [];

    for (n in s) {
      !i(a, n) && i(s, n) && c.push(n);
    }

    for (; t.length > l;) {
      i(s, n = t[l++]) && (~o(c, n) || c.push(n));
    }

    return c;
  };
}, function (e, t, n) {
  var i = n(1);
  e.exports = !!Object.getOwnPropertySymbols && !i(function () {
    return !String(Symbol());
  });
}, function (e, t, n) {
  var i = n(32);
  e.exports = i("document", "documentElement");
}, function (e, t, n) {
  var i = n(19),
      r = n(39).f,
      o = {}.toString,
      a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  e.exports.f = function (e) {
    return a && "[object Window]" == o.call(e) ? function (e) {
      try {
        return r(e);
      } catch (e) {
        return a.slice();
      }
    }(e) : r(i(e));
  };
}, function (e, t, n) {
  t.f = n(7);
}, function (e, t, n) {
  "use strict";

  var i = n(6),
      r = n(1),
      o = n(55),
      a = n(84),
      s = n(64),
      l = n(10),
      c = n(49),
      d = Object.assign;
  e.exports = !d || r(function () {
    var e = {},
        t = {},
        n = Symbol();
    return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (e) {
      t[e] = e;
    }), 7 != d({}, e)[n] || "abcdefghijklmnopqrst" != o(d({}, t)).join("");
  }) ? function (e, t) {
    for (var n = l(e), r = arguments.length, d = 1, u = a.f, p = s.f; r > d;) {
      for (var f, g = c(arguments[d++]), h = u ? o(g).concat(u(g)) : o(g), m = h.length, v = 0; m > v;) {
        f = h[v++], i && !p.call(g, f) || (n[f] = g[f]);
      }
    }

    return n;
  } : d;
}, function (e, t, n) {
  var i = n(6),
      r = n(55),
      o = n(19),
      a = n(64).f,
      s = function s(e) {
    return function (t) {
      for (var n, s = o(t), l = r(s), c = l.length, d = 0, u = []; c > d;) {
        n = l[d++], i && !a.call(s, n) || u.push(e ? [n, s[n]] : s[n]);
      }

      return u;
    };
  };

  e.exports = {
    entries: s(!0),
    values: s(!1)
  };
}, function (e, t, n) {
  var i = n(4);

  e.exports = function (e, t, n, r) {
    try {
      return r ? t(i(n)[0], n[1]) : t(n);
    } catch (t) {
      var o = e["return"];
      throw void 0 !== o && i(o.call(e)), t;
    }
  };
}, function (e, t) {
  e.exports = Object.is || function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  };
}, function (e, t, n) {
  var i = n(3);

  e.exports = function (e) {
    if (!i(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
    return e;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(18),
      r = n(3),
      o = [].slice,
      a = {},
      s = function s(e, t, n) {
    if (!(t in a)) {
      for (var i = [], r = 0; r < t; r++) {
        i[r] = "a[" + r + "]";
      }

      a[t] = Function("C,a", "return new C(" + i.join(",") + ")");
    }

    return a[t](e, n);
  };

  e.exports = Function.bind || function (e) {
    var t = i(this),
        n = o.call(arguments, 1),
        a = function a() {
      var i = n.concat(o.call(arguments));
      return this instanceof a ? s(t, i.length, i) : t.apply(e, i);
    };

    return r(t.prototype) && (a.prototype = t.prototype), a;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(35),
      r = n(10),
      o = n(112),
      a = n(86),
      s = n(8),
      l = n(42),
      c = n(59);

  e.exports = function (e) {
    var t,
        n,
        d,
        u,
        p,
        f = r(e),
        g = "function" == typeof this ? this : Array,
        h = arguments.length,
        m = h > 1 ? arguments[1] : void 0,
        v = void 0 !== m,
        b = 0,
        w = c(f);
    if (v && (m = i(m, h > 2 ? arguments[2] : void 0, 2)), null == w || g == Array && a(w)) for (n = new g(t = s(f.length)); t > b; b++) {
      l(n, b, v ? m(f[b], b) : f[b]);
    } else for (p = (u = w.call(f)).next, n = new g(); !(d = p.call(u)).done; b++) {
      l(n, b, v ? o(u, m, [d.value, b], !0) : d.value);
    }
    return n.length = b, n;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(10),
      r = n(33),
      o = n(8),
      a = Math.min;

  e.exports = [].copyWithin || function (e, t) {
    var n = i(this),
        s = o(n.length),
        l = r(e, s),
        c = r(t, s),
        d = arguments.length > 2 ? arguments[2] : void 0,
        u = a((void 0 === d ? s : r(d, s)) - c, s - l),
        p = 1;

    for (c < l && l < c + u && (p = -1, c += u - 1, l += u - 1); u-- > 0;) {
      c in n ? n[l] = n[c] : delete n[l], l += p, c += p;
    }

    return n;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(40),
      r = n(8),
      o = n(35),
      a = function a(e, t, n, s, l, c, d, u) {
    for (var p, f = l, g = 0, h = !!d && o(d, u, 3); g < s;) {
      if (g in n) {
        if (p = h ? h(n[g], g, t) : n[g], c > 0 && i(p)) f = a(e, t, p, r(p.length), f, c - 1) - 1;else {
          if (f >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
          e[f] = p;
        }
        f++;
      }

      g++;
    }

    return f;
  };

  e.exports = a;
}, function (e, t, n) {
  "use strict";

  var i = n(12).forEach,
      r = n(29);
  e.exports = r("forEach") ? function (e) {
    return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
  } : [].forEach;
}, function (e, t, n) {
  "use strict";

  var i = n(19),
      r = n(23),
      o = n(8),
      a = n(29),
      s = Math.min,
      l = [].lastIndexOf,
      c = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
      d = a("lastIndexOf");
  e.exports = c || d ? function (e) {
    if (c) return l.apply(this, arguments) || 0;
    var t = i(this),
        n = o(t.length),
        a = n - 1;

    for (arguments.length > 1 && (a = s(a, r(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--) {
      if (a in t && t[a] === e) return a || 0;
    }

    return -1;
  } : l;
}, function (e, t, n) {
  "use strict";

  var i,
      r,
      o,
      a = n(27),
      s = n(13),
      l = n(11),
      c = n(7),
      d = n(28),
      u = c("iterator"),
      p = !1;
  [].keys && ("next" in (o = [].keys()) ? (r = a(a(o))) !== Object.prototype && (i = r) : p = !0), null == i && (i = {}), d || l(i, u) || s(i, u, function () {
    return this;
  }), e.exports = {
    IteratorPrototype: i,
    BUGGY_SAFARI_ITERATORS: p
  };
}, function (e, t, n) {
  var i = n(63);
  e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
}, function (e, t, n) {
  "use strict";

  var i = n(70).charAt,
      r = n(20),
      o = n(89),
      a = r.set,
      s = r.getterFor("String Iterator");
  o(String, "String", function (e) {
    a(this, {
      type: "String Iterator",
      string: String(e),
      index: 0
    });
  }, function () {
    var e,
        t = s(this),
        n = t.string,
        r = t.index;
    return r >= n.length ? {
      value: void 0,
      done: !0
    } : (e = i(n, r), t.index += e.length, {
      value: e,
      done: !1
    });
  });
}, function (e, t, n) {
  var i = n(2),
      r = n(47).trim,
      o = n(76),
      a = i.parseInt,
      s = /^[+-]?0[Xx]/,
      l = 8 !== a(o + "08") || 22 !== a(o + "0x16");
  e.exports = l ? function (e, t) {
    var n = r(String(e));
    return a(n, t >>> 0 || (s.test(n) ? 16 : 10));
  } : a;
}, function (e, t, n) {
  var i = n(2),
      r = n(47).trim,
      o = n(76),
      a = i.parseFloat,
      s = 1 / a(o + "-0") != -1 / 0;
  e.exports = s ? function (e) {
    var t = r(String(e)),
        n = a(t);
    return 0 === n && "-" == t.charAt(0) ? -0 : n;
  } : a;
}, function (e, t, n) {
  var i = n(3),
      r = Math.floor;

  e.exports = function (e) {
    return !i(e) && isFinite(e) && r(e) === e;
  };
}, function (e, t, n) {
  var i = n(24);

  e.exports = function (e) {
    if ("number" != typeof e && "Number" != i(e)) throw TypeError("Incorrect invocation");
    return +e;
  };
}, function (e, t) {
  var n = Math.log;

  e.exports = Math.log1p || function (e) {
    return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : n(1 + e);
  };
}, function (e, t, n) {
  var i = n(2);
  e.exports = i.Promise;
}, function (e, t, n) {
  var i,
      r,
      o,
      a,
      s,
      l,
      c,
      d,
      u = n(2),
      p = n(16).f,
      f = n(24),
      g = n(98).set,
      h = n(63),
      m = u.MutationObserver || u.WebKitMutationObserver,
      v = u.process,
      b = u.Promise,
      w = "process" == f(v),
      S = p(u, "queueMicrotask"),
      y = S && S.value;
  y || (i = function i() {
    var e, t;

    for (w && (e = v.domain) && e.exit(); r;) {
      t = r.fn, r = r.next;

      try {
        t();
      } catch (e) {
        throw r ? a() : o = void 0, e;
      }
    }

    o = void 0, e && e.enter();
  }, w ? a = function a() {
    v.nextTick(i);
  } : m && !/(iphone|ipod|ipad).*applewebkit/i.test(h) ? (s = !0, l = document.createTextNode(""), new m(i).observe(l, {
    characterData: !0
  }), a = function a() {
    l.data = s = !s;
  }) : b && b.resolve ? (c = b.resolve(void 0), d = c.then, a = function a() {
    d.call(c, i);
  }) : a = function a() {
    g.call(u, i);
  }), e.exports = y || function (e) {
    var t = {
      fn: e,
      next: void 0
    };
    o && (o.next = t), r || (r = t, a()), o = t;
  };
}, function (e, t, n) {
  var i = n(4),
      r = n(3),
      o = n(99);

  e.exports = function (e, t) {
    if (i(e), r(t) && t.constructor === e) return t;
    var n = o.f(e);
    return (0, n.resolve)(t), n.promise;
  };
}, function (e, t) {
  e.exports = function (e) {
    try {
      return {
        error: !1,
        value: e()
      };
    } catch (e) {
      return {
        error: !0,
        value: e
      };
    }
  };
}, function (e, t, n) {
  "use strict";

  var i = n(9).f,
      r = n(34),
      o = n(48),
      a = n(35),
      s = n(37),
      l = n(44),
      c = n(89),
      d = n(46),
      u = n(6),
      p = n(41).fastKey,
      f = n(20),
      g = f.set,
      h = f.getterFor;
  e.exports = {
    getConstructor: function getConstructor(e, t, n, c) {
      var d = e(function (e, i) {
        s(e, d, t), g(e, {
          type: t,
          index: r(null),
          first: void 0,
          last: void 0,
          size: 0
        }), u || (e.size = 0), null != i && l(i, e[c], e, n);
      }),
          f = h(t),
          m = function m(e, t, n) {
        var i,
            r,
            o = f(e),
            a = v(e, t);
        return a ? a.value = n : (o.last = a = {
          index: r = p(t, !0),
          key: t,
          value: n,
          previous: i = o.last,
          next: void 0,
          removed: !1
        }, o.first || (o.first = a), i && (i.next = a), u ? o.size++ : e.size++, "F" !== r && (o.index[r] = a)), e;
      },
          v = function v(e, t) {
        var n,
            i = f(e),
            r = p(t);
        if ("F" !== r) return i.index[r];

        for (n = i.first; n; n = n.next) {
          if (n.key == t) return n;
        }
      };

      return o(d.prototype, {
        clear: function clear() {
          for (var e = f(this), t = e.index, n = e.first; n;) {
            n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
          }

          e.first = e.last = void 0, u ? e.size = 0 : this.size = 0;
        },
        "delete": function _delete(e) {
          var t = f(this),
              n = v(this, e);

          if (n) {
            var i = n.next,
                r = n.previous;
            delete t.index[n.index], n.removed = !0, r && (r.next = i), i && (i.previous = r), t.first == n && (t.first = i), t.last == n && (t.last = r), u ? t.size-- : this.size--;
          }

          return !!n;
        },
        forEach: function forEach(e) {
          for (var t, n = f(this), i = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) {
            for (i(t.value, t.key, this); t && t.removed;) {
              t = t.previous;
            }
          }
        },
        has: function has(e) {
          return !!v(this, e);
        }
      }), o(d.prototype, n ? {
        get: function get(e) {
          var t = v(this, e);
          return t && t.value;
        },
        set: function set(e, t) {
          return m(this, 0 === e ? 0 : e, t);
        }
      } : {
        add: function add(e) {
          return m(this, e = 0 === e ? 0 : e, e);
        }
      }), u && i(d.prototype, "size", {
        get: function get() {
          return f(this).size;
        }
      }), d;
    },
    setStrong: function setStrong(e, t, n) {
      var i = t + " Iterator",
          r = h(t),
          o = h(i);
      c(e, t, function (e, t) {
        g(this, {
          type: i,
          target: e,
          state: r(e),
          kind: t,
          last: void 0
        });
      }, function () {
        for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) {
          n = n.previous;
        }

        return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
          value: n.key,
          done: !1
        } : "values" == t ? {
          value: n.value,
          done: !1
        } : {
          value: [n.key, n.value],
          done: !1
        } : (e.target = void 0, {
          value: void 0,
          done: !0
        });
      }, n ? "entries" : "values", !n, !0), d(t);
    }
  };
}, function (e, t, n) {
  "use strict";

  var i = n(48),
      r = n(41).getWeakData,
      o = n(4),
      a = n(3),
      s = n(37),
      l = n(44),
      c = n(12),
      d = n(11),
      u = n(20),
      p = u.set,
      f = u.getterFor,
      g = c.find,
      h = c.findIndex,
      m = 0,
      v = function v(e) {
    return e.frozen || (e.frozen = new b());
  },
      b = function b() {
    this.entries = [];
  },
      w = function w(e, t) {
    return g(e.entries, function (e) {
      return e[0] === t;
    });
  };

  b.prototype = {
    get: function get(e) {
      var t = w(this, e);
      if (t) return t[1];
    },
    has: function has(e) {
      return !!w(this, e);
    },
    set: function set(e, t) {
      var n = w(this, e);
      n ? n[1] = t : this.entries.push([e, t]);
    },
    "delete": function _delete(e) {
      var t = h(this.entries, function (t) {
        return t[0] === e;
      });
      return ~t && this.entries.splice(t, 1), !!~t;
    }
  }, e.exports = {
    getConstructor: function getConstructor(e, t, n, c) {
      var u = e(function (e, i) {
        s(e, u, t), p(e, {
          type: t,
          id: m++,
          frozen: void 0
        }), null != i && l(i, e[c], e, n);
      }),
          g = f(t),
          h = function h(e, t, n) {
        var i = g(e),
            a = r(o(t), !0);
        return !0 === a ? v(i).set(t, n) : a[i.id] = n, e;
      };

      return i(u.prototype, {
        "delete": function _delete(e) {
          var t = g(this);
          if (!a(e)) return !1;
          var n = r(e);
          return !0 === n ? v(t)["delete"](e) : n && d(n, t.id) && delete n[t.id];
        },
        has: function has(e) {
          var t = g(this);
          if (!a(e)) return !1;
          var n = r(e);
          return !0 === n ? v(t).has(e) : n && d(n, t.id);
        }
      }), i(u.prototype, n ? {
        get: function get(e) {
          var t = g(this);

          if (a(e)) {
            var n = r(e);
            return !0 === n ? v(t).get(e) : n ? n[t.id] : void 0;
          }
        },
        set: function set(e, t) {
          return h(this, e, t);
        }
      } : {
        add: function add(e) {
          return h(this, e, !0);
        }
      }), u;
    }
  };
}, function (e, t, n) {
  var i = n(23),
      r = n(8);

  e.exports = function (e) {
    if (void 0 === e) return 0;
    var t = i(e),
        n = r(t);
    if (t !== n) throw RangeError("Wrong length or index");
    return n;
  };
}, function (e, t, n) {
  var i = n(339);

  e.exports = function (e, t) {
    var n = i(e);
    if (n % t) throw RangeError("Wrong offset");
    return n;
  };
}, function (e, t, n) {
  var i = n(10),
      r = n(8),
      o = n(59),
      a = n(86),
      s = n(35),
      l = n(5).aTypedArrayConstructor;

  e.exports = function (e) {
    var t,
        n,
        c,
        d,
        u,
        p,
        f = i(e),
        g = arguments.length,
        h = g > 1 ? arguments[1] : void 0,
        m = void 0 !== h,
        v = o(f);
    if (null != v && !a(v)) for (p = (u = v.call(f)).next, f = []; !(d = p.call(u)).done;) {
      f.push(d.value);
    }

    for (m && g > 2 && (h = s(h, arguments[2], 2)), n = r(f.length), c = new (l(this))(n), t = 0; n > t; t++) {
      c[t] = m ? h(f[t], t) : f[t];
    }

    return c;
  };
}, function (e, t) {
  e.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
}, function (e, t, n) {
  var i = n(1),
      r = n(7),
      o = n(28),
      a = r("iterator");
  e.exports = !i(function () {
    var e = new URL("b?a=1&b=2&c=3", "http://a"),
        t = e.searchParams,
        n = "";
    return e.pathname = "c%20d", t.forEach(function (e, i) {
      t["delete"]("b"), n += i + e;
    }), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host;
  });
}, function (e, t, n) {
  "use strict";

  n(69);

  var i = n(0),
      r = n(139),
      o = n(14),
      a = n(48),
      s = n(26),
      l = n(90),
      c = n(20),
      d = n(37),
      u = n(11),
      p = n(35),
      f = n(4),
      g = n(3),
      h = n(394),
      m = n(59),
      v = n(7)("iterator"),
      b = c.set,
      w = c.getterFor("URLSearchParams"),
      S = c.getterFor("URLSearchParamsIterator"),
      y = /\+/g,
      _ = Array(4),
      C = function C(e) {
    return _[e - 1] || (_[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
  },
      x = function x(e) {
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e;
    }
  },
      k = function k(e) {
    var t = e.replace(y, " "),
        n = 4;

    try {
      return decodeURIComponent(t);
    } catch (e) {
      for (; n;) {
        t = t.replace(C(n--), x);
      }

      return t;
    }
  },
      I = /[!'()~]|%20/g,
      T = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
      N = function N(e) {
    return T[e];
  },
      $ = function $(e) {
    return encodeURIComponent(e).replace(I, N);
  },
      P = function P(e, t) {
    if (t) for (var n, i, r = t.split("&"), o = 0; o < r.length;) {
      (n = r[o++]).length && (i = n.split("="), e.push({
        key: k(i.shift()),
        value: k(i.join("="))
      }));
    }
  },
      E = function E(e) {
    this.entries.length = 0, P(this.entries, e);
  },
      L = function L(e, t) {
    if (e < t) throw TypeError("Not enough arguments");
  },
      R = l(function (e, t) {
    b(this, {
      type: "URLSearchParamsIterator",
      iterator: h(w(e).entries),
      kind: t
    });
  }, "Iterator", function () {
    var e = S(this),
        t = e.kind,
        n = e.iterator.next(),
        i = n.value;
    return n.done || (n.value = "keys" === t ? i.key : "values" === t ? i.value : [i.key, i.value]), n;
  }),
      A = function A() {
    d(this, A, "URLSearchParams");
    var e,
        t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c = arguments.length > 0 ? arguments[0] : void 0,
        p = this,
        v = [];
    if (b(p, {
      type: "URLSearchParams",
      entries: v,
      updateURL: function updateURL() {},
      updateSearchParams: E
    }), void 0 !== c) if (g(c)) {
      if ("function" == typeof (e = m(c))) for (n = (t = e.call(c)).next; !(i = n.call(t)).done;) {
        if ((a = (o = (r = h(f(i.value))).next).call(r)).done || (s = o.call(r)).done || !o.call(r).done) throw TypeError("Expected sequence with length 2");
        v.push({
          key: a.value + "",
          value: s.value + ""
        });
      } else for (l in c) {
        u(c, l) && v.push({
          key: l,
          value: c[l] + ""
        });
      }
    } else P(v, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "");
  },
      D = A.prototype;

  a(D, {
    append: function append(e, t) {
      L(arguments.length, 2);
      var n = w(this);
      n.entries.push({
        key: e + "",
        value: t + ""
      }), n.updateURL();
    },
    "delete": function _delete(e) {
      L(arguments.length, 1);

      for (var t = w(this), n = t.entries, i = e + "", r = 0; r < n.length;) {
        n[r].key === i ? n.splice(r, 1) : r++;
      }

      t.updateURL();
    },
    get: function get(e) {
      L(arguments.length, 1);

      for (var t = w(this).entries, n = e + "", i = 0; i < t.length; i++) {
        if (t[i].key === n) return t[i].value;
      }

      return null;
    },
    getAll: function getAll(e) {
      L(arguments.length, 1);

      for (var t = w(this).entries, n = e + "", i = [], r = 0; r < t.length; r++) {
        t[r].key === n && i.push(t[r].value);
      }

      return i;
    },
    has: function has(e) {
      L(arguments.length, 1);

      for (var t = w(this).entries, n = e + "", i = 0; i < t.length;) {
        if (t[i++].key === n) return !0;
      }

      return !1;
    },
    set: function set(e, t) {
      L(arguments.length, 1);

      for (var n, i = w(this), r = i.entries, o = !1, a = e + "", s = t + "", l = 0; l < r.length; l++) {
        (n = r[l]).key === a && (o ? r.splice(l--, 1) : (o = !0, n.value = s));
      }

      o || r.push({
        key: a,
        value: s
      }), i.updateURL();
    },
    sort: function sort() {
      var e,
          t,
          n,
          i = w(this),
          r = i.entries,
          o = r.slice();

      for (r.length = 0, n = 0; n < o.length; n++) {
        for (e = o[n], t = 0; t < n; t++) {
          if (r[t].key > e.key) {
            r.splice(t, 0, e);
            break;
          }
        }

        t === n && r.push(e);
      }

      i.updateURL();
    },
    forEach: function forEach(e) {
      for (var t, n = w(this).entries, i = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), r = 0; r < n.length;) {
        i((t = n[r++]).value, t.key, this);
      }
    },
    keys: function keys() {
      return new R(this, "keys");
    },
    values: function values() {
      return new R(this, "values");
    },
    entries: function entries() {
      return new R(this, "entries");
    }
  }, {
    enumerable: !0
  }), o(D, v, D.entries), o(D, "toString", function () {
    for (var e, t = w(this).entries, n = [], i = 0; i < t.length;) {
      e = t[i++], n.push($(e.key) + "=" + $(e.value));
    }

    return n.join("&");
  }, {
    enumerable: !0
  }), s(A, "URLSearchParams"), i({
    global: !0,
    forced: !r
  }, {
    URLSearchParams: A
  }), e.exports = {
    URLSearchParams: A,
    getState: w
  };
}, function (e, t, n) {
  n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(396), e.exports = n(417);
}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {
  n(174), n(386), e.exports = n(43);
}, function (e, t, n) {
  n(175), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(69), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(123), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(322), n(323), n(325), n(326), n(328), n(329), n(330), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(340), n(341), n(342), n(343), n(344), n(345), n(346), n(347), n(348), n(349), n(350), n(351), n(352), n(353), n(354), n(355), n(356), n(357), n(358), n(359), n(360), n(361), n(362), n(363), n(364), n(365), n(366), n(367), n(368), n(369), n(370), n(371), n(372), n(373), n(374), n(375), n(376), n(377), n(378), n(379), n(380), n(381), n(382), n(383), n(384), n(385), e.exports = n(43);
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(2),
      o = n(28),
      a = n(6),
      s = n(106),
      l = n(1),
      c = n(11),
      d = n(40),
      u = n(3),
      p = n(4),
      f = n(10),
      g = n(19),
      h = n(25),
      m = n(38),
      v = n(34),
      b = n(55),
      w = n(39),
      S = n(108),
      y = n(84),
      _ = n(16),
      C = n(9),
      x = n(64),
      k = n(13),
      I = n(14),
      T = n(50),
      N = n(65),
      $ = n(52),
      P = n(51),
      E = n(7),
      L = n(109),
      R = n(17),
      A = n(26),
      D = n(20),
      O = n(12).forEach,
      V = N("hidden"),
      M = E("toPrimitive"),
      F = D.set,
      U = D.getterFor("Symbol"),
      j = Object.prototype,
      _B = r.Symbol,
      G = r.JSON,
      z = G && G.stringify,
      W = _.f,
      H = C.f,
      q = S.f,
      K = x.f,
      J = T("symbols"),
      Y = T("op-symbols"),
      Q = T("string-to-symbol-registry"),
      X = T("symbol-to-string-registry"),
      Z = T("wks"),
      ee = r.QObject,
      te = !ee || !ee.prototype || !ee.prototype.findChild,
      ne = a && l(function () {
    return 7 != v(H({}, "a", {
      get: function get() {
        return H(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (e, t, n) {
    var i = W(j, t);
    i && delete j[t], H(e, t, n), i && e !== j && H(j, t, i);
  } : H,
      ie = function ie(e, t) {
    var n = J[e] = v(_B.prototype);
    return F(n, {
      type: "Symbol",
      tag: e,
      description: t
    }), a || (n.description = t), n;
  },
      re = s && "symbol" == _typeof(_B.iterator) ? function (e) {
    return "symbol" == _typeof(e);
  } : function (e) {
    return Object(e) instanceof _B;
  },
      oe = function oe(e, t, n) {
    e === j && oe(Y, t, n), p(e);
    var i = h(t, !0);
    return p(n), c(J, i) ? (n.enumerable ? (c(e, V) && e[V][i] && (e[V][i] = !1), n = v(n, {
      enumerable: m(0, !1)
    })) : (c(e, V) || H(e, V, m(1, {})), e[V][i] = !0), ne(e, i, n)) : H(e, i, n);
  },
      ae = function ae(e, t) {
    p(e);
    var n = g(t),
        i = b(n).concat(de(n));
    return O(i, function (t) {
      a && !se.call(n, t) || oe(e, t, n[t]);
    }), e;
  },
      se = function se(e) {
    var t = h(e, !0),
        n = K.call(this, t);
    return !(this === j && c(J, t) && !c(Y, t)) && (!(n || !c(this, t) || !c(J, t) || c(this, V) && this[V][t]) || n);
  },
      le = function le(e, t) {
    var n = g(e),
        i = h(t, !0);

    if (n !== j || !c(J, i) || c(Y, i)) {
      var r = W(n, i);
      return !r || !c(J, i) || c(n, V) && n[V][i] || (r.enumerable = !0), r;
    }
  },
      ce = function ce(e) {
    var t = q(g(e)),
        n = [];
    return O(t, function (e) {
      c(J, e) || c($, e) || n.push(e);
    }), n;
  },
      de = function de(e) {
    var t = e === j,
        n = q(t ? Y : g(e)),
        i = [];
    return O(n, function (e) {
      !c(J, e) || t && !c(j, e) || i.push(J[e]);
    }), i;
  };

  s || (I((_B = function B() {
    if (this instanceof _B) throw TypeError("Symbol is not a constructor");

    var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
        t = P(e),
        n = function n(e) {
      this === j && n.call(Y, e), c(this, V) && c(this[V], t) && (this[V][t] = !1), ne(this, t, m(1, e));
    };

    return a && te && ne(j, t, {
      configurable: !0,
      set: n
    }), ie(t, e);
  }).prototype, "toString", function () {
    return U(this).tag;
  }), x.f = se, C.f = oe, _.f = le, w.f = S.f = ce, y.f = de, a && (H(_B.prototype, "description", {
    configurable: !0,
    get: function get() {
      return U(this).description;
    }
  }), o || I(j, "propertyIsEnumerable", se, {
    unsafe: !0
  })), L.f = function (e) {
    return ie(E(e), e);
  }), i({
    global: !0,
    wrap: !0,
    forced: !s,
    sham: !s
  }, {
    Symbol: _B
  }), O(b(Z), function (e) {
    R(e);
  }), i({
    target: "Symbol",
    stat: !0,
    forced: !s
  }, {
    "for": function _for(e) {
      var t = String(e);
      if (c(Q, t)) return Q[t];

      var n = _B(t);

      return Q[t] = n, X[n] = t, n;
    },
    keyFor: function keyFor(e) {
      if (!re(e)) throw TypeError(e + " is not a symbol");
      if (c(X, e)) return X[e];
    },
    useSetter: function useSetter() {
      te = !0;
    },
    useSimple: function useSimple() {
      te = !1;
    }
  }), i({
    target: "Object",
    stat: !0,
    forced: !s,
    sham: !a
  }, {
    create: function create(e, t) {
      return void 0 === t ? v(e) : ae(v(e), t);
    },
    defineProperty: oe,
    defineProperties: ae,
    getOwnPropertyDescriptor: le
  }), i({
    target: "Object",
    stat: !0,
    forced: !s
  }, {
    getOwnPropertyNames: ce,
    getOwnPropertySymbols: de
  }), i({
    target: "Object",
    stat: !0,
    forced: l(function () {
      y.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(e) {
      return y.f(f(e));
    }
  }), G && i({
    target: "JSON",
    stat: !0,
    forced: !s || l(function () {
      var e = _B();

      return "[null]" != z([e]) || "{}" != z({
        a: e
      }) || "{}" != z(Object(e));
    })
  }, {
    stringify: function stringify(e) {
      for (var t, n, i = [e], r = 1; arguments.length > r;) {
        i.push(arguments[r++]);
      }

      if (n = t = i[1], (u(t) || void 0 !== e) && !re(e)) return d(t) || (t = function t(e, _t2) {
        if ("function" == typeof n && (_t2 = n.call(this, e, _t2)), !re(_t2)) return _t2;
      }), i[1] = t, z.apply(G, i);
    }
  }), _B.prototype[M] || k(_B.prototype, M, _B.prototype.valueOf), A(_B, "Symbol"), $[V] = !0;
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t, n) {
  var i = n(2),
      r = n(81),
      o = i["__core-js_shared__"] || r("__core-js_shared__", {});
  e.exports = o;
}, function (e, t, n) {
  n(17)("asyncIterator");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(6),
      o = n(2),
      a = n(11),
      s = n(3),
      l = n(9).f,
      c = n(104),
      d = o.Symbol;

  if (r && "function" == typeof d && (!("description" in d.prototype) || void 0 !== d().description)) {
    var u = {},
        p = function p() {
      var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
          t = this instanceof p ? new d(e) : void 0 === e ? d() : d(e);
      return "" === e && (u[t] = !0), t;
    };

    c(p, d);
    var f = p.prototype = d.prototype;
    f.constructor = p;
    var g = f.toString,
        h = "Symbol(test)" == String(d("test")),
        m = /^Symbol\((.*)\)[^)]+$/;
    l(f, "description", {
      configurable: !0,
      get: function get() {
        var e = s(this) ? this.valueOf() : this,
            t = g.call(e);
        if (a(u, e)) return "";
        var n = h ? t.slice(7, -1) : t.replace(m, "$1");
        return "" === n ? void 0 : n;
      }
    }), i({
      global: !0,
      forced: !0
    }, {
      Symbol: p
    });
  }
}, function (e, t, n) {
  n(17)("hasInstance");
}, function (e, t, n) {
  n(17)("isConcatSpreadable");
}, function (e, t, n) {
  n(17)("iterator");
}, function (e, t, n) {
  n(17)("match");
}, function (e, t, n) {
  n(17)("matchAll");
}, function (e, t, n) {
  n(17)("replace");
}, function (e, t, n) {
  n(17)("search");
}, function (e, t, n) {
  n(17)("species");
}, function (e, t, n) {
  n(17)("split");
}, function (e, t, n) {
  n(17)("toPrimitive");
}, function (e, t, n) {
  n(17)("toStringTag");
}, function (e, t, n) {
  n(17)("unscopables");
}, function (e, t, n) {
  var i = n(0),
      r = n(110);
  i({
    target: "Object",
    stat: !0,
    forced: Object.assign !== r
  }, {
    assign: r
  });
}, function (e, t, n) {
  n(0)({
    target: "Object",
    stat: !0,
    sham: !n(6)
  }, {
    create: n(34)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(6);
  i({
    target: "Object",
    stat: !0,
    forced: !r,
    sham: !r
  }, {
    defineProperty: n(9).f
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(6);
  i({
    target: "Object",
    stat: !0,
    forced: !r,
    sham: !r
  }, {
    defineProperties: n(85)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(111).entries;
  i({
    target: "Object",
    stat: !0
  }, {
    entries: function entries(e) {
      return r(e);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(57),
      o = n(1),
      a = n(3),
      s = n(41).onFreeze,
      l = Object.freeze;
  i({
    target: "Object",
    stat: !0,
    forced: o(function () {
      l(1);
    }),
    sham: !r
  }, {
    freeze: function freeze(e) {
      return l && a(e) ? l(s(e)) : e;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(44),
      o = n(42);
  i({
    target: "Object",
    stat: !0
  }, {
    fromEntries: function fromEntries(e) {
      var t = {};
      return r(e, function (e, n) {
        o(t, e, n);
      }, void 0, !0), t;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(19),
      a = n(16).f,
      s = n(6),
      l = r(function () {
    a(1);
  });
  i({
    target: "Object",
    stat: !0,
    forced: !s || l,
    sham: !s
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
      return a(o(e), t);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(6),
      o = n(82),
      a = n(19),
      s = n(16),
      l = n(42);
  i({
    target: "Object",
    stat: !0,
    sham: !r
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
      for (var t, n, i = a(e), r = s.f, c = o(i), d = {}, u = 0; c.length > u;) {
        void 0 !== (n = r(i, t = c[u++])) && l(d, t, n);
      }

      return d;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(108).f;
  i({
    target: "Object",
    stat: !0,
    forced: r(function () {
      return !Object.getOwnPropertyNames(1);
    })
  }, {
    getOwnPropertyNames: o
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(10),
      a = n(27),
      s = n(87);
  i({
    target: "Object",
    stat: !0,
    forced: r(function () {
      a(1);
    }),
    sham: !s
  }, {
    getPrototypeOf: function getPrototypeOf(e) {
      return a(o(e));
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Object",
    stat: !0
  }, {
    is: n(113)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(3),
      a = Object.isExtensible;
  i({
    target: "Object",
    stat: !0,
    forced: r(function () {
      a(1);
    })
  }, {
    isExtensible: function isExtensible(e) {
      return !!o(e) && (!a || a(e));
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(3),
      a = Object.isFrozen;
  i({
    target: "Object",
    stat: !0,
    forced: r(function () {
      a(1);
    })
  }, {
    isFrozen: function isFrozen(e) {
      return !o(e) || !!a && a(e);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(3),
      a = Object.isSealed;
  i({
    target: "Object",
    stat: !0,
    forced: r(function () {
      a(1);
    })
  }, {
    isSealed: function isSealed(e) {
      return !o(e) || !!a && a(e);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(10),
      o = n(55);
  i({
    target: "Object",
    stat: !0,
    forced: n(1)(function () {
      o(1);
    })
  }, {
    keys: function keys(e) {
      return o(r(e));
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(3),
      o = n(41).onFreeze,
      a = n(57),
      s = n(1),
      l = Object.preventExtensions;
  i({
    target: "Object",
    stat: !0,
    forced: s(function () {
      l(1);
    }),
    sham: !a
  }, {
    preventExtensions: function preventExtensions(e) {
      return l && r(e) ? l(o(e)) : e;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(3),
      o = n(41).onFreeze,
      a = n(57),
      s = n(1),
      l = Object.seal;
  i({
    target: "Object",
    stat: !0,
    forced: s(function () {
      l(1);
    }),
    sham: !a
  }, {
    seal: function seal(e) {
      return l && r(e) ? l(o(e)) : e;
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Object",
    stat: !0
  }, {
    setPrototypeOf: n(45)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(111).values;
  i({
    target: "Object",
    stat: !0
  }, {
    values: function values(e) {
      return r(e);
    }
  });
}, function (e, t, n) {
  var i = n(14),
      r = n(213),
      o = Object.prototype;
  r !== o.toString && i(o, "toString", r, {
    unsafe: !0
  });
}, function (e, t, n) {
  "use strict";

  var i = n(60),
      r = {};
  r[n(7)("toStringTag")] = "z", e.exports = "[object z]" !== String(r) ? function () {
    return "[object " + i(this) + "]";
  } : r.toString;
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(6),
      o = n(66),
      a = n(10),
      s = n(18),
      l = n(9);
  r && i({
    target: "Object",
    proto: !0,
    forced: o
  }, {
    __defineGetter__: function __defineGetter__(e, t) {
      l.f(a(this), e, {
        get: s(t),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(6),
      o = n(66),
      a = n(10),
      s = n(18),
      l = n(9);
  r && i({
    target: "Object",
    proto: !0,
    forced: o
  }, {
    __defineSetter__: function __defineSetter__(e, t) {
      l.f(a(this), e, {
        set: s(t),
        enumerable: !0,
        configurable: !0
      });
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(6),
      o = n(66),
      a = n(10),
      s = n(25),
      l = n(27),
      c = n(16).f;
  r && i({
    target: "Object",
    proto: !0,
    forced: o
  }, {
    __lookupGetter__: function __lookupGetter__(e) {
      var t,
          n = a(this),
          i = s(e, !0);

      do {
        if (t = c(n, i)) return t.get;
      } while (n = l(n));
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(6),
      o = n(66),
      a = n(10),
      s = n(25),
      l = n(27),
      c = n(16).f;
  r && i({
    target: "Object",
    proto: !0,
    forced: o
  }, {
    __lookupSetter__: function __lookupSetter__(e) {
      var t,
          n = a(this),
          i = s(e, !0);

      do {
        if (t = c(n, i)) return t.set;
      } while (n = l(n));
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Function",
    proto: !0
  }, {
    bind: n(115)
  });
}, function (e, t, n) {
  var i = n(6),
      r = n(9).f,
      o = Function.prototype,
      a = o.toString,
      s = /^\s*function ([^ (]*)/;
  !i || "name" in o || r(o, "name", {
    configurable: !0,
    get: function get() {
      try {
        return a.call(this).match(s)[1];
      } catch (e) {
        return "";
      }
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(3),
      r = n(9),
      o = n(27),
      a = n(7)("hasInstance"),
      s = Function.prototype;
  a in s || r.f(s, a, {
    value: function value(e) {
      if ("function" != typeof this || !i(e)) return !1;
      if (!i(this.prototype)) return e instanceof this;

      for (; e = o(e);) {
        if (this.prototype === e) return !0;
      }

      return !1;
    }
  });
}, function (e, t, n) {
  n(0)({
    global: !0
  }, {
    globalThis: n(2)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(116);
  i({
    target: "Array",
    stat: !0,
    forced: !n(67)(function (e) {
      Array.from(e);
    })
  }, {
    from: r
  });
}, function (e, t, n) {
  n(0)({
    target: "Array",
    stat: !0
  }, {
    isArray: n(40)
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(1),
      o = n(42);
  i({
    target: "Array",
    stat: !0,
    forced: r(function () {
      function e() {}

      return !(Array.of.call(e) instanceof e);
    })
  }, {
    of: function of() {
      for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e;) {
        o(n, e, arguments[e++]);
      }

      return n.length = t, n;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(1),
      o = n(40),
      a = n(3),
      s = n(10),
      l = n(8),
      c = n(42),
      d = n(56),
      u = n(61),
      p = n(7)("isConcatSpreadable"),
      f = !r(function () {
    var e = [];
    return e[p] = !1, e.concat()[0] !== e;
  }),
      g = u("concat"),
      h = function h(e) {
    if (!a(e)) return !1;
    var t = e[p];
    return void 0 !== t ? !!t : o(e);
  };

  i({
    target: "Array",
    proto: !0,
    forced: !f || !g
  }, {
    concat: function concat(e) {
      var t,
          n,
          i,
          r,
          o,
          a = s(this),
          u = d(a, 0),
          p = 0;

      for (t = -1, i = arguments.length; t < i; t++) {
        if (o = -1 === t ? a : arguments[t], h(o)) {
          if (p + (r = l(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");

          for (n = 0; n < r; n++, p++) {
            n in o && c(u, p, o[n]);
          }
        } else {
          if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
          c(u, p++, o);
        }
      }

      return u.length = p, u;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(117),
      o = n(36);
  i({
    target: "Array",
    proto: !0
  }, {
    copyWithin: r
  }), o("copyWithin");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(12).every;
  i({
    target: "Array",
    proto: !0,
    forced: n(29)("every")
  }, {
    every: function every(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(88),
      o = n(36);
  i({
    target: "Array",
    proto: !0
  }, {
    fill: r
  }), o("fill");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(12).filter;
  i({
    target: "Array",
    proto: !0,
    forced: !n(61)("filter")
  }, {
    filter: function filter(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(12).find,
      o = n(36),
      a = !0;
  "find" in [] && Array(1).find(function () {
    a = !1;
  }), i({
    target: "Array",
    proto: !0,
    forced: a
  }, {
    find: function find(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), o("find");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(12).findIndex,
      o = n(36),
      a = !0;
  "findIndex" in [] && Array(1).findIndex(function () {
    a = !1;
  }), i({
    target: "Array",
    proto: !0,
    forced: a
  }, {
    findIndex: function findIndex(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), o("findIndex");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(118),
      o = n(10),
      a = n(8),
      s = n(23),
      l = n(56);
  i({
    target: "Array",
    proto: !0
  }, {
    flat: function flat() {
      var e = arguments.length ? arguments[0] : void 0,
          t = o(this),
          n = a(t.length),
          i = l(t, 0);
      return i.length = r(i, t, t, n, 0, void 0 === e ? 1 : s(e)), i;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(118),
      o = n(10),
      a = n(8),
      s = n(18),
      l = n(56);
  i({
    target: "Array",
    proto: !0
  }, {
    flatMap: function flatMap(e) {
      var t,
          n = o(this),
          i = a(n.length);
      return s(e), (t = l(n, 0)).length = r(t, n, n, i, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(119);
  i({
    target: "Array",
    proto: !0,
    forced: [].forEach != r
  }, {
    forEach: r
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(53).includes,
      o = n(36);
  i({
    target: "Array",
    proto: !0
  }, {
    includes: function includes(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), o("includes");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(53).indexOf,
      o = n(29),
      a = [].indexOf,
      s = !!a && 1 / [1].indexOf(1, -0) < 0,
      l = o("indexOf");
  i({
    target: "Array",
    proto: !0,
    forced: s || l
  }, {
    indexOf: function indexOf(e) {
      return s ? a.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(49),
      o = n(19),
      a = n(29),
      s = [].join,
      l = r != Object,
      c = a("join", ",");
  i({
    target: "Array",
    proto: !0,
    forced: l || c
  }, {
    join: function join(e) {
      return s.call(o(this), void 0 === e ? "," : e);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(120);
  i({
    target: "Array",
    proto: !0,
    forced: r !== [].lastIndexOf
  }, {
    lastIndexOf: r
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(12).map;
  i({
    target: "Array",
    proto: !0,
    forced: !n(61)("map")
  }, {
    map: function map(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(68).left;
  i({
    target: "Array",
    proto: !0,
    forced: n(29)("reduce")
  }, {
    reduce: function reduce(e) {
      return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(68).right;
  i({
    target: "Array",
    proto: !0,
    forced: n(29)("reduceRight")
  }, {
    reduceRight: function reduceRight(e) {
      return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(40),
      o = [].reverse,
      a = [1, 2];
  i({
    target: "Array",
    proto: !0,
    forced: String(a) === String(a.reverse())
  }, {
    reverse: function reverse() {
      return r(this) && (this.length = this.length), o.call(this);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(3),
      o = n(40),
      a = n(33),
      s = n(8),
      l = n(19),
      c = n(42),
      d = n(61),
      u = n(7)("species"),
      p = [].slice,
      f = Math.max;
  i({
    target: "Array",
    proto: !0,
    forced: !d("slice")
  }, {
    slice: function slice(e, t) {
      var n,
          i,
          d,
          g = l(this),
          h = s(g.length),
          m = a(e, h),
          v = a(void 0 === t ? h : t, h);
      if (o(g) && ("function" != typeof (n = g.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[u]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return p.call(g, m, v);

      for (i = new (void 0 === n ? Array : n)(f(v - m, 0)), d = 0; m < v; m++, d++) {
        m in g && c(i, d, g[m]);
      }

      return i.length = d, i;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(12).some;
  i({
    target: "Array",
    proto: !0,
    forced: n(29)("some")
  }, {
    some: function some(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(18),
      o = n(10),
      a = n(1),
      s = n(29),
      l = [].sort,
      c = [1, 2, 3],
      d = a(function () {
    c.sort(void 0);
  }),
      u = a(function () {
    c.sort(null);
  }),
      p = s("sort");
  i({
    target: "Array",
    proto: !0,
    forced: d || !u || p
  }, {
    sort: function sort(e) {
      return void 0 === e ? l.call(o(this)) : l.call(o(this), r(e));
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(33),
      o = n(23),
      a = n(8),
      s = n(10),
      l = n(56),
      c = n(42),
      d = n(61),
      u = Math.max,
      p = Math.min;
  i({
    target: "Array",
    proto: !0,
    forced: !d("splice")
  }, {
    splice: function splice(e, t) {
      var n,
          i,
          d,
          f,
          g,
          h,
          m = s(this),
          v = a(m.length),
          b = r(e, v),
          w = arguments.length;
      if (0 === w ? n = i = 0 : 1 === w ? (n = 0, i = v - b) : (n = w - 2, i = p(u(o(t), 0), v - b)), v + n - i > 9007199254740991) throw TypeError("Maximum allowed length exceeded");

      for (d = l(m, i), f = 0; f < i; f++) {
        (g = b + f) in m && c(d, f, m[g]);
      }

      if (d.length = i, n < i) {
        for (f = b; f < v - i; f++) {
          h = f + n, (g = f + i) in m ? m[h] = m[g] : delete m[h];
        }

        for (f = v; f > v - i + n; f--) {
          delete m[f - 1];
        }
      } else if (n > i) for (f = v - i; f > b; f--) {
        h = f + n - 1, (g = f + i - 1) in m ? m[h] = m[g] : delete m[h];
      }

      for (f = 0; f < n; f++) {
        m[f + b] = arguments[f + 2];
      }

      return m.length = v - i + n, d;
    }
  });
}, function (e, t, n) {
  n(46)("Array");
}, function (e, t, n) {
  n(36)("flat");
}, function (e, t, n) {
  n(36)("flatMap");
}, function (e, t, n) {
  var i = n(0),
      r = n(33),
      o = String.fromCharCode,
      a = String.fromCodePoint;
  i({
    target: "String",
    stat: !0,
    forced: !!a && 1 != a.length
  }, {
    fromCodePoint: function fromCodePoint(e) {
      for (var t, n = [], i = arguments.length, a = 0; i > a;) {
        if (t = +arguments[a++], r(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
        n.push(t < 65536 ? o(t) : o(55296 + ((t -= 65536) >> 10), t % 1024 + 56320));
      }

      return n.join("");
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(19),
      o = n(8);
  i({
    target: "String",
    stat: !0
  }, {
    raw: function raw(e) {
      for (var t = r(e.raw), n = o(t.length), i = arguments.length, a = [], s = 0; n > s;) {
        a.push(String(t[s++])), s < i && a.push(String(arguments[s]));
      }

      return a.join("");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(70).codeAt;
  i({
    target: "String",
    proto: !0
  }, {
    codePointAt: function codePointAt(e) {
      return r(this, e);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(8),
      o = n(91),
      a = n(15),
      s = n(92),
      l = "".endsWith,
      c = Math.min;
  i({
    target: "String",
    proto: !0,
    forced: !s("endsWith")
  }, {
    endsWith: function endsWith(e) {
      var t = String(a(this));
      o(e);
      var n = arguments.length > 1 ? arguments[1] : void 0,
          i = r(t.length),
          s = void 0 === n ? i : c(r(n), i),
          d = String(e);
      return l ? l.call(t, d, s) : t.slice(s - d.length, s) === d;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(91),
      o = n(15);
  i({
    target: "String",
    proto: !0,
    forced: !n(92)("includes")
  }, {
    includes: function includes(e) {
      return !!~String(o(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(72),
      r = n(4),
      o = n(8),
      a = n(15),
      s = n(74),
      l = n(75);
  i("match", 1, function (e, t, n) {
    return [function (t) {
      var n = a(this),
          i = null == t ? void 0 : t[e];
      return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
    }, function (e) {
      var i = n(t, e, this);
      if (i.done) return i.value;
      var a = r(e),
          c = String(this);
      if (!a.global) return l(a, c);
      var d = a.unicode;
      a.lastIndex = 0;

      for (var u, p = [], f = 0; null !== (u = l(a, c));) {
        var g = String(u[0]);
        p[f] = g, "" === g && (a.lastIndex = s(c, o(a.lastIndex), d)), f++;
      }

      return 0 === f ? null : p;
    }];
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(90),
      o = n(15),
      a = n(8),
      s = n(18),
      l = n(4),
      c = n(60),
      d = n(71),
      u = n(62),
      p = n(13),
      f = n(1),
      g = n(7),
      h = n(30),
      m = n(74),
      v = n(20),
      b = n(28),
      w = g("matchAll"),
      S = v.set,
      y = v.getterFor("RegExp String Iterator"),
      _ = RegExp.prototype,
      C = _.exec,
      x = "".matchAll,
      k = !!x && !f(function () {
    "a".matchAll(/./);
  }),
      I = r(function (e, t, n, i) {
    S(this, {
      type: "RegExp String Iterator",
      regexp: e,
      string: t,
      global: n,
      unicode: i,
      done: !1
    });
  }, "RegExp String", function () {
    var e = y(this);
    if (e.done) return {
      value: void 0,
      done: !0
    };

    var t = e.regexp,
        n = e.string,
        i = function (e, t) {
      var n,
          i = e.exec;

      if ("function" == typeof i) {
        if ("object" != _typeof(n = i.call(e, t))) throw TypeError("Incorrect exec result");
        return n;
      }

      return C.call(e, t);
    }(t, n);

    return null === i ? {
      value: void 0,
      done: e.done = !0
    } : e.global ? ("" == String(i[0]) && (t.lastIndex = m(n, a(t.lastIndex), e.unicode)), {
      value: i,
      done: !1
    }) : (e.done = !0, {
      value: i,
      done: !1
    });
  }),
      T = function T(e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        c = l(this),
        d = String(e);
    return t = h(c, RegExp), void 0 === (n = c.flags) && c instanceof RegExp && !("flags" in _) && (n = u.call(c)), i = void 0 === n ? "" : String(n), r = new t(t === RegExp ? c.source : c, i), o = !!~i.indexOf("g"), s = !!~i.indexOf("u"), r.lastIndex = a(c.lastIndex), new I(r, d, o, s);
  };

  i({
    target: "String",
    proto: !0,
    forced: k
  }, {
    matchAll: function matchAll(e) {
      var t,
          n,
          i,
          r = o(this);

      if (null != e) {
        if (d(e) && !~String(o("flags" in _ ? e.flags : u.call(e))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
        if (k) return x.apply(r, arguments);
        if (void 0 === (n = e[w]) && b && "RegExp" == c(e) && (n = T), null != n) return s(n).call(e, r);
      } else if (k) return x.apply(r, arguments);

      return t = String(r), i = new RegExp(e, "g"), b ? T.call(i, t) : i[w](t);
    }
  }), b || w in _ || p(_, w, T);
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(93).end;
  i({
    target: "String",
    proto: !0,
    forced: n(122)
  }, {
    padEnd: function padEnd(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(93).start;
  i({
    target: "String",
    proto: !0,
    forced: n(122)
  }, {
    padStart: function padStart(e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "String",
    proto: !0
  }, {
    repeat: n(94)
  });
}, function (e, t, n) {
  "use strict";

  var i = n(72),
      r = n(4),
      o = n(10),
      a = n(8),
      s = n(23),
      l = n(15),
      c = n(74),
      d = n(75),
      u = Math.max,
      p = Math.min,
      f = Math.floor,
      g = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      h = /\$([$&'`]|\d\d?)/g;
  i("replace", 2, function (e, t, n) {
    return [function (n, i) {
      var r = l(this),
          o = null == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, r, i) : t.call(String(r), n, i);
    }, function (e, o) {
      var l = n(t, e, this, o);
      if (l.done) return l.value;
      var f = r(e),
          g = String(this),
          h = "function" == typeof o;
      h || (o = String(o));
      var m = f.global;

      if (m) {
        var v = f.unicode;
        f.lastIndex = 0;
      }

      for (var b = [];;) {
        var w = d(f, g);
        if (null === w) break;
        if (b.push(w), !m) break;
        "" === String(w[0]) && (f.lastIndex = c(g, a(f.lastIndex), v));
      }

      for (var S, y = "", _ = 0, C = 0; C < b.length; C++) {
        w = b[C];

        for (var x = String(w[0]), k = u(p(s(w.index), g.length), 0), I = [], T = 1; T < w.length; T++) {
          I.push(void 0 === (S = w[T]) ? S : String(S));
        }

        var N = w.groups;

        if (h) {
          var $ = [x].concat(I, k, g);
          void 0 !== N && $.push(N);
          var P = String(o.apply(void 0, $));
        } else P = i(x, g, k, I, N, o);

        k >= _ && (y += g.slice(_, k) + P, _ = k + x.length);
      }

      return y + g.slice(_);
    }];

    function i(e, n, i, r, a, s) {
      var l = i + e.length,
          c = r.length,
          d = h;
      return void 0 !== a && (a = o(a), d = g), t.call(s, d, function (t, o) {
        var s;

        switch (o.charAt(0)) {
          case "$":
            return "$";

          case "&":
            return e;

          case "`":
            return n.slice(0, i);

          case "'":
            return n.slice(l);

          case "<":
            s = a[o.slice(1, -1)];
            break;

          default:
            var d = +o;
            if (0 === d) return t;

            if (d > c) {
              var u = f(d / 10);
              return 0 === u ? t : u <= c ? void 0 === r[u - 1] ? o.charAt(1) : r[u - 1] + o.charAt(1) : t;
            }

            s = r[d - 1];
        }

        return void 0 === s ? "" : s;
      });
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(72),
      r = n(4),
      o = n(15),
      a = n(113),
      s = n(75);
  i("search", 1, function (e, t, n) {
    return [function (t) {
      var n = o(this),
          i = null == t ? void 0 : t[e];
      return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
    }, function (e) {
      var i = n(t, e, this);
      if (i.done) return i.value;
      var o = r(e),
          l = String(this),
          c = o.lastIndex;
      a(c, 0) || (o.lastIndex = 0);
      var d = s(o, l);
      return a(o.lastIndex, c) || (o.lastIndex = c), null === d ? -1 : d.index;
    }];
  });
}, function (e, t, n) {
  "use strict";

  var i = n(72),
      r = n(71),
      o = n(4),
      a = n(15),
      s = n(30),
      l = n(74),
      c = n(8),
      d = n(75),
      u = n(73),
      p = n(1),
      f = [].push,
      g = Math.min,
      h = !p(function () {
    return !RegExp(4294967295, "y");
  });
  i("split", 2, function (e, t, n) {
    var i;
    return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
      var i = String(a(this)),
          o = void 0 === n ? 4294967295 : n >>> 0;
      if (0 === o) return [];
      if (void 0 === e) return [i];
      if (!r(e)) return t.call(i, e, o);

      for (var s, l, c, d = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), g = 0, h = new RegExp(e.source, p + "g"); (s = u.call(h, i)) && !((l = h.lastIndex) > g && (d.push(i.slice(g, s.index)), s.length > 1 && s.index < i.length && f.apply(d, s.slice(1)), c = s[0].length, g = l, d.length >= o));) {
        h.lastIndex === s.index && h.lastIndex++;
      }

      return g === i.length ? !c && h.test("") || d.push("") : d.push(i.slice(g)), d.length > o ? d.slice(0, o) : d;
    } : "0".split(void 0, 0).length ? function (e, n) {
      return void 0 === e && 0 === n ? [] : t.call(this, e, n);
    } : t, [function (t, n) {
      var r = a(this),
          o = null == t ? void 0 : t[e];
      return void 0 !== o ? o.call(t, r, n) : i.call(String(r), t, n);
    }, function (e, r) {
      var a = n(i, e, this, r, i !== t);
      if (a.done) return a.value;
      var u = o(e),
          p = String(this),
          f = s(u, RegExp),
          m = u.unicode,
          v = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (h ? "y" : "g"),
          b = new f(h ? u : "^(?:" + u.source + ")", v),
          w = void 0 === r ? 4294967295 : r >>> 0;
      if (0 === w) return [];
      if (0 === p.length) return null === d(b, p) ? [p] : [];

      for (var S = 0, y = 0, _ = []; y < p.length;) {
        b.lastIndex = h ? y : 0;
        var C,
            x = d(b, h ? p : p.slice(y));
        if (null === x || (C = g(c(b.lastIndex + (h ? 0 : y)), p.length)) === S) y = l(p, y, m);else {
          if (_.push(p.slice(S, y)), _.length === w) return _;

          for (var k = 1; k <= x.length - 1; k++) {
            if (_.push(x[k]), _.length === w) return _;
          }

          y = S = C;
        }
      }

      return _.push(p.slice(S)), _;
    }];
  }, !h);
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(8),
      o = n(91),
      a = n(15),
      s = n(92),
      l = "".startsWith,
      c = Math.min;
  i({
    target: "String",
    proto: !0,
    forced: !s("startsWith")
  }, {
    startsWith: function startsWith(e) {
      var t = String(a(this));
      o(e);
      var n = r(c(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          i = String(e);
      return l ? l.call(t, i, n) : t.slice(n, n + i.length) === i;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(47).trim;
  i({
    target: "String",
    proto: !0,
    forced: n(95)("trim")
  }, {
    trim: function trim() {
      return r(this);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(47).start,
      o = n(95)("trimStart"),
      a = o ? function () {
    return r(this);
  } : "".trimStart;
  i({
    target: "String",
    proto: !0,
    forced: o
  }, {
    trimStart: a,
    trimLeft: a
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(47).end,
      o = n(95)("trimEnd"),
      a = o ? function () {
    return r(this);
  } : "".trimEnd;
  i({
    target: "String",
    proto: !0,
    forced: o
  }, {
    trimEnd: a,
    trimRight: a
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("anchor")
  }, {
    anchor: function anchor(e) {
      return r(this, "a", "name", e);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("big")
  }, {
    big: function big() {
      return r(this, "big", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("blink")
  }, {
    blink: function blink() {
      return r(this, "blink", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("bold")
  }, {
    bold: function bold() {
      return r(this, "b", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("fixed")
  }, {
    fixed: function fixed() {
      return r(this, "tt", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("fontcolor")
  }, {
    fontcolor: function fontcolor(e) {
      return r(this, "font", "color", e);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("fontsize")
  }, {
    fontsize: function fontsize(e) {
      return r(this, "font", "size", e);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("italics")
  }, {
    italics: function italics() {
      return r(this, "i", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("link")
  }, {
    link: function link(e) {
      return r(this, "a", "href", e);
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("small")
  }, {
    small: function small() {
      return r(this, "small", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("strike")
  }, {
    strike: function strike() {
      return r(this, "strike", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("sub")
  }, {
    sub: function sub() {
      return r(this, "sub", "", "");
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(21);
  i({
    target: "String",
    proto: !0,
    forced: n(22)("sup")
  }, {
    sup: function sup() {
      return r(this, "sup", "", "");
    }
  });
}, function (e, t, n) {
  var i = n(6),
      r = n(2),
      o = n(54),
      a = n(96),
      s = n(9).f,
      l = n(39).f,
      c = n(71),
      d = n(62),
      u = n(14),
      p = n(1),
      f = n(46),
      g = n(7)("match"),
      h = r.RegExp,
      m = h.prototype,
      v = /a/g,
      b = /a/g,
      w = new h(v) !== v;

  if (i && o("RegExp", !w || p(function () {
    return b[g] = !1, h(v) != v || h(b) == b || "/a/i" != h(v, "i");
  }))) {
    for (var S = function S(e, t) {
      var n = this instanceof S,
          i = c(e),
          r = void 0 === t;
      return !n && i && e.constructor === S && r ? e : a(w ? new h(i && !r ? e.source : e, t) : h((i = e instanceof S) ? e.source : e, i && r ? d.call(e) : t), n ? this : m, S);
    }, y = function y(e) {
      (e in S) || s(S, e, {
        configurable: !0,
        get: function get() {
          return h[e];
        },
        set: function set(t) {
          h[e] = t;
        }
      });
    }, _ = l(h), C = 0; _.length > C;) {
      y(_[C++]);
    }

    m.constructor = S, S.prototype = m, u(r, "RegExp", S);
  }

  f("RegExp");
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(73);
  i({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== r
  }, {
    exec: r
  });
}, function (e, t, n) {
  var i = n(6),
      r = n(9),
      o = n(62);
  i && "g" != /./g.flags && r.f(RegExp.prototype, "flags", {
    configurable: !0,
    get: o
  });
}, function (e, t, n) {
  "use strict";

  var i = n(14),
      r = n(4),
      o = n(1),
      a = n(62),
      s = RegExp.prototype,
      l = s.toString,
      c = o(function () {
    return "/a/b" != l.call({
      source: "a",
      flags: "b"
    });
  }),
      d = "toString" != l.name;
  (c || d) && i(RegExp.prototype, "toString", function () {
    var e = r(this),
        t = String(e.source),
        n = e.flags;
    return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in s) ? a.call(e) : n);
  }, {
    unsafe: !0
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(124);
  i({
    global: !0,
    forced: parseInt != r
  }, {
    parseInt: r
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(125);
  i({
    global: !0,
    forced: parseFloat != r
  }, {
    parseFloat: r
  });
}, function (e, t, n) {
  "use strict";

  var i = n(6),
      r = n(2),
      o = n(54),
      a = n(14),
      s = n(11),
      l = n(24),
      c = n(96),
      d = n(25),
      u = n(1),
      p = n(34),
      f = n(39).f,
      g = n(16).f,
      h = n(9).f,
      m = n(47).trim,
      v = r.Number,
      b = v.prototype,
      w = "Number" == l(p(b)),
      S = function S(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c = d(e, !1);
    if ("string" == typeof c && c.length > 2) if (43 === (t = (c = m(c)).charCodeAt(0)) || 45 === t) {
      if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN;
    } else if (48 === t) {
      switch (c.charCodeAt(1)) {
        case 66:
        case 98:
          i = 2, r = 49;
          break;

        case 79:
        case 111:
          i = 8, r = 55;
          break;

        default:
          return +c;
      }

      for (a = (o = c.slice(2)).length, s = 0; s < a; s++) {
        if ((l = o.charCodeAt(s)) < 48 || l > r) return NaN;
      }

      return parseInt(o, i);
    }
    return +c;
  };

  if (o("Number", !v(" 0o1") || !v("0b1") || v("+0x1"))) {
    for (var y, _ = function _(e) {
      var t = arguments.length < 1 ? 0 : e,
          n = this;
      return n instanceof _ && (w ? u(function () {
        b.valueOf.call(n);
      }) : "Number" != l(n)) ? c(new v(S(t)), n, _) : S(t);
    }, C = i ? f(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; C.length > x; x++) {
      s(v, y = C[x]) && !s(_, y) && h(_, y, g(v, y));
    }

    _.prototype = b, b.constructor = _, a(r, "Number", _);
  }
}, function (e, t, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    EPSILON: Math.pow(2, -52)
  });
}, function (e, t, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    isFinite: n(289)
  });
}, function (e, t, n) {
  var i = n(2).isFinite;

  e.exports = Number.isFinite || function (e) {
    return "number" == typeof e && i(e);
  };
}, function (e, t, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    isInteger: n(126)
  });
}, function (e, t, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    isNaN: function isNaN(e) {
      return e != e;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(126),
      o = Math.abs;
  i({
    target: "Number",
    stat: !0
  }, {
    isSafeInteger: function isSafeInteger(e) {
      return r(e) && o(e) <= 9007199254740991;
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    MAX_SAFE_INTEGER: 9007199254740991
  });
}, function (e, t, n) {
  n(0)({
    target: "Number",
    stat: !0
  }, {
    MIN_SAFE_INTEGER: -9007199254740991
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(125);
  i({
    target: "Number",
    stat: !0,
    forced: Number.parseFloat != r
  }, {
    parseFloat: r
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(124);
  i({
    target: "Number",
    stat: !0,
    forced: Number.parseInt != r
  }, {
    parseInt: r
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(23),
      o = n(127),
      a = n(94),
      s = n(1),
      l = 1..toFixed,
      c = Math.floor,
      d = function d(e, t, n) {
    return 0 === t ? n : t % 2 == 1 ? d(e, t - 1, n * e) : d(e * e, t / 2, n);
  };

  i({
    target: "Number",
    proto: !0,
    forced: l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !s(function () {
      l.call({});
    })
  }, {
    toFixed: function toFixed(e) {
      var t,
          n,
          i,
          s,
          l = o(this),
          u = r(e),
          p = [0, 0, 0, 0, 0, 0],
          f = "",
          g = "0",
          h = function h(e, t) {
        for (var n = -1, i = t; ++n < 6;) {
          i += e * p[n], p[n] = i % 1e7, i = c(i / 1e7);
        }
      },
          m = function m(e) {
        for (var t = 6, n = 0; --t >= 0;) {
          n += p[t], p[t] = c(n / e), n = n % e * 1e7;
        }
      },
          v = function v() {
        for (var e = 6, t = ""; --e >= 0;) {
          if ("" !== t || 0 === e || 0 !== p[e]) {
            var n = String(p[e]);
            t = "" === t ? n : t + a.call("0", 7 - n.length) + n;
          }
        }

        return t;
      };

      if (u < 0 || u > 20) throw RangeError("Incorrect fraction digits");
      if (l != l) return "NaN";
      if (l <= -1e21 || l >= 1e21) return String(l);
      if (l < 0 && (f = "-", l = -l), l > 1e-21) if (n = (t = function (e) {
        for (var t = 0, n = e; n >= 4096;) {
          t += 12, n /= 4096;
        }

        for (; n >= 2;) {
          t += 1, n /= 2;
        }

        return t;
      }(l * d(2, 69, 1)) - 69) < 0 ? l * d(2, -t, 1) : l / d(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
        for (h(0, n), i = u; i >= 7;) {
          h(1e7, 0), i -= 7;
        }

        for (h(d(10, i, 1), 0), i = t - 1; i >= 23;) {
          m(1 << 23), i -= 23;
        }

        m(1 << i), h(1, 1), m(2), g = v();
      } else h(0, n), h(1 << -t, 0), g = v() + a.call("0", u);
      return g = u > 0 ? f + ((s = g.length) <= u ? "0." + a.call("0", u - s) + g : g.slice(0, s - u) + "." + g.slice(s - u)) : f + g;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(1),
      o = n(127),
      a = 1..toPrecision;
  i({
    target: "Number",
    proto: !0,
    forced: r(function () {
      return "1" !== a.call(1, void 0);
    }) || !r(function () {
      a.call({});
    })
  }, {
    toPrecision: function toPrecision(e) {
      return void 0 === e ? a.call(o(this)) : a.call(o(this), e);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(128),
      o = Math.acosh,
      a = Math.log,
      s = Math.sqrt,
      l = Math.LN2;
  i({
    target: "Math",
    stat: !0,
    forced: !o || 710 != Math.floor(o(Number.MAX_VALUE)) || o(1 / 0) != 1 / 0
  }, {
    acosh: function acosh(e) {
      return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? a(e) + l : r(e - 1 + s(e - 1) * s(e + 1));
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = Math.asinh,
      o = Math.log,
      a = Math.sqrt;
  i({
    target: "Math",
    stat: !0,
    forced: !(r && 1 / r(0) > 0)
  }, {
    asinh: function e(t) {
      return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : o(t + a(t * t + 1)) : t;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = Math.atanh,
      o = Math.log;
  i({
    target: "Math",
    stat: !0,
    forced: !(r && 1 / r(-0) < 0)
  }, {
    atanh: function atanh(e) {
      return 0 == (e = +e) ? e : o((1 + e) / (1 - e)) / 2;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(97),
      o = Math.abs,
      a = Math.pow;
  i({
    target: "Math",
    stat: !0
  }, {
    cbrt: function cbrt(e) {
      return r(e = +e) * a(o(e), 1 / 3);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = Math.floor,
      o = Math.log,
      a = Math.LOG2E;
  i({
    target: "Math",
    stat: !0
  }, {
    clz32: function clz32(e) {
      return (e >>>= 0) ? 31 - r(o(e + .5) * a) : 32;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(77),
      o = Math.cosh,
      a = Math.abs,
      s = Math.E;
  i({
    target: "Math",
    stat: !0,
    forced: !o || o(710) === 1 / 0
  }, {
    cosh: function cosh(e) {
      var t = r(a(e) - 1) + 1;
      return (t + 1 / (t * s * s)) * (s / 2);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(77);
  i({
    target: "Math",
    stat: !0,
    forced: r != Math.expm1
  }, {
    expm1: r
  });
}, function (e, t, n) {
  n(0)({
    target: "Math",
    stat: !0
  }, {
    fround: n(307)
  });
}, function (e, t, n) {
  var i = n(97),
      r = Math.abs,
      o = Math.pow,
      a = o(2, -52),
      s = o(2, -23),
      l = o(2, 127) * (2 - s),
      c = o(2, -126);

  e.exports = Math.fround || function (e) {
    var t,
        n,
        o = r(e),
        d = i(e);
    return o < c ? d * (o / c / s + 1 / a - 1 / a) * c * s : (n = (t = (1 + s / a) * o) - (t - o)) > l || n != n ? d * (1 / 0) : d * n;
  };
}, function (e, t, n) {
  var i = n(0),
      r = Math.hypot,
      o = Math.abs,
      a = Math.sqrt;
  i({
    target: "Math",
    stat: !0,
    forced: !!r && r(1 / 0, NaN) !== 1 / 0
  }, {
    hypot: function hypot(e, t) {
      for (var n, i, r = 0, s = 0, l = arguments.length, c = 0; s < l;) {
        c < (n = o(arguments[s++])) ? (r = r * (i = c / n) * i + 1, c = n) : r += n > 0 ? (i = n / c) * i : n;
      }

      return c === 1 / 0 ? 1 / 0 : c * a(r);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = Math.imul;
  i({
    target: "Math",
    stat: !0,
    forced: r(function () {
      return -5 != o(4294967295, 5) || 2 != o.length;
    })
  }, {
    imul: function imul(e, t) {
      var n = +e,
          i = +t,
          r = 65535 & n,
          o = 65535 & i;
      return 0 | r * o + ((65535 & n >>> 16) * o + r * (65535 & i >>> 16) << 16 >>> 0);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = Math.log,
      o = Math.LOG10E;
  i({
    target: "Math",
    stat: !0
  }, {
    log10: function log10(e) {
      return r(e) * o;
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Math",
    stat: !0
  }, {
    log1p: n(128)
  });
}, function (e, t, n) {
  var i = n(0),
      r = Math.log,
      o = Math.LN2;
  i({
    target: "Math",
    stat: !0
  }, {
    log2: function log2(e) {
      return r(e) / o;
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Math",
    stat: !0
  }, {
    sign: n(97)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(1),
      o = n(77),
      a = Math.abs,
      s = Math.exp,
      l = Math.E;
  i({
    target: "Math",
    stat: !0,
    forced: r(function () {
      return -2e-17 != Math.sinh(-2e-17);
    })
  }, {
    sinh: function sinh(e) {
      return a(e = +e) < 1 ? (o(e) - o(-e)) / 2 : (s(e - 1) - s(-e - 1)) * (l / 2);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(77),
      o = Math.exp;
  i({
    target: "Math",
    stat: !0
  }, {
    tanh: function tanh(e) {
      var t = r(e = +e),
          n = r(-e);
      return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (o(e) + o(-e));
    }
  });
}, function (e, t, n) {
  n(26)(Math, "Math", !0);
}, function (e, t, n) {
  var i = n(0),
      r = Math.ceil,
      o = Math.floor;
  i({
    target: "Math",
    stat: !0
  }, {
    trunc: function trunc(e) {
      return (e > 0 ? o : r)(e);
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Date",
    stat: !0
  }, {
    now: function now() {
      return new Date().getTime();
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(1),
      o = n(10),
      a = n(25);
  i({
    target: "Date",
    proto: !0,
    forced: r(function () {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function toISOString() {
          return 1;
        }
      });
    })
  }, {
    toJSON: function toJSON(e) {
      var t = o(this),
          n = a(t);
      return "number" != typeof n || isFinite(n) ? t.toISOString() : null;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(321);
  i({
    target: "Date",
    proto: !0,
    forced: Date.prototype.toISOString !== r
  }, {
    toISOString: r
  });
}, function (e, t, n) {
  "use strict";

  var i = n(1),
      r = n(93).start,
      o = Math.abs,
      a = Date.prototype,
      s = a.getTime,
      l = a.toISOString;
  e.exports = i(function () {
    return "0385-07-25T07:06:39.999Z" != l.call(new Date(-5e13 - 1));
  }) || !i(function () {
    l.call(new Date(NaN));
  }) ? function () {
    if (!isFinite(s.call(this))) throw RangeError("Invalid time value");
    var e = this.getUTCFullYear(),
        t = this.getUTCMilliseconds(),
        n = e < 0 ? "-" : e > 9999 ? "+" : "";
    return n + r(o(e), n ? 6 : 4, 0) + "-" + r(this.getUTCMonth() + 1, 2, 0) + "-" + r(this.getUTCDate(), 2, 0) + "T" + r(this.getUTCHours(), 2, 0) + ":" + r(this.getUTCMinutes(), 2, 0) + ":" + r(this.getUTCSeconds(), 2, 0) + "." + r(t, 3, 0) + "Z";
  } : l;
}, function (e, t, n) {
  var i = n(14),
      r = Date.prototype,
      o = r.toString,
      a = r.getTime;
  new Date(NaN) + "" != "Invalid Date" && i(r, "toString", function () {
    var e = a.call(this);
    return e == e ? o.call(this) : "Invalid Date";
  });
}, function (e, t, n) {
  var i = n(13),
      r = n(324),
      o = n(7)("toPrimitive"),
      a = Date.prototype;
  o in a || i(a, o, r);
}, function (e, t, n) {
  "use strict";

  var i = n(4),
      r = n(25);

  e.exports = function (e) {
    if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
    return r(i(this), "number" !== e);
  };
}, function (e, t, n) {
  var i = n(2);
  n(26)(i.JSON, "JSON", !0);
}, function (e, t, n) {
  "use strict";

  var i,
      r,
      o,
      a,
      s = n(0),
      l = n(28),
      c = n(2),
      d = n(43),
      u = n(129),
      p = n(14),
      f = n(48),
      g = n(26),
      h = n(46),
      m = n(3),
      v = n(18),
      b = n(37),
      w = n(24),
      S = n(44),
      y = n(67),
      _ = n(30),
      C = n(98).set,
      x = n(130),
      k = n(131),
      I = n(327),
      T = n(99),
      N = n(132),
      $ = n(63),
      P = n(20),
      E = n(54),
      L = n(7)("species"),
      R = "Promise",
      A = P.get,
      D = P.set,
      O = P.getterFor(R),
      _V = u,
      M = c.TypeError,
      F = c.document,
      U = c.process,
      j = c.fetch,
      B = U && U.versions,
      G = B && B.v8 || "",
      z = T.f,
      W = z,
      H = "process" == w(U),
      q = !!(F && F.createEvent && c.dispatchEvent),
      K = E(R, function () {
    var e = _V.resolve(1),
        t = function t() {},
        n = (e.constructor = {})[L] = function (e) {
      e(t, t);
    };

    return !((H || "function" == typeof PromiseRejectionEvent) && (!l || e["finally"]) && e.then(t) instanceof n && 0 !== G.indexOf("6.6") && -1 === $.indexOf("Chrome/66"));
  }),
      J = K || !y(function (e) {
    _V.all(e)["catch"](function () {});
  }),
      Y = function Y(e) {
    var t;
    return !(!m(e) || "function" != typeof (t = e.then)) && t;
  },
      Q = function Q(e, t, n) {
    if (!t.notified) {
      t.notified = !0;
      var i = t.reactions;
      x(function () {
        for (var r = t.value, o = 1 == t.state, a = 0; i.length > a;) {
          var s,
              l,
              c,
              d = i[a++],
              u = o ? d.ok : d.fail,
              p = d.resolve,
              f = d.reject,
              g = d.domain;

          try {
            u ? (o || (2 === t.rejection && te(e, t), t.rejection = 1), !0 === u ? s = r : (g && g.enter(), s = u(r), g && (g.exit(), c = !0)), s === d.promise ? f(M("Promise-chain cycle")) : (l = Y(s)) ? l.call(s, p, f) : p(s)) : f(r);
          } catch (e) {
            g && !c && g.exit(), f(e);
          }
        }

        t.reactions = [], t.notified = !1, n && !t.rejection && Z(e, t);
      });
    }
  },
      X = function X(e, t, n) {
    var i, r;
    q ? ((i = F.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), c.dispatchEvent(i)) : i = {
      promise: t,
      reason: n
    }, (r = c["on" + e]) ? r(i) : "unhandledrejection" === e && I("Unhandled promise rejection", n);
  },
      Z = function Z(e, t) {
    C.call(c, function () {
      var n,
          i = t.value;
      if (ee(t) && (n = N(function () {
        H ? U.emit("unhandledRejection", i, e) : X("unhandledrejection", e, i);
      }), t.rejection = H || ee(t) ? 2 : 1, n.error)) throw n.value;
    });
  },
      ee = function ee(e) {
    return 1 !== e.rejection && !e.parent;
  },
      te = function te(e, t) {
    C.call(c, function () {
      H ? U.emit("rejectionHandled", e) : X("rejectionhandled", e, t.value);
    });
  },
      ne = function ne(e, t, n, i) {
    return function (r) {
      e(t, n, r, i);
    };
  },
      ie = function ie(e, t, n, i) {
    t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, Q(e, t, !0));
  },
      re = function re(e, t, n, i) {
    if (!t.done) {
      t.done = !0, i && (t = i);

      try {
        if (e === n) throw M("Promise can't be resolved itself");
        var r = Y(n);
        r ? x(function () {
          var i = {
            done: !1
          };

          try {
            r.call(n, ne(re, e, i, t), ne(ie, e, i, t));
          } catch (n) {
            ie(e, i, n, t);
          }
        }) : (t.value = n, t.state = 1, Q(e, t, !1));
      } catch (n) {
        ie(e, {
          done: !1
        }, n, t);
      }
    }
  };

  K && (_V = function V(e) {
    b(this, _V, R), v(e), i.call(this);
    var t = A(this);

    try {
      e(ne(re, this, t), ne(ie, this, t));
    } catch (e) {
      ie(this, t, e);
    }
  }, (i = function i(e) {
    D(this, {
      type: R,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0
    });
  }).prototype = f(_V.prototype, {
    then: function then(e, t) {
      var n = O(this),
          i = z(_(this, _V));
      return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = H ? U.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && Q(this, n, !1), i.promise;
    },
    "catch": function _catch(e) {
      return this.then(void 0, e);
    }
  }), r = function r() {
    var e = new i(),
        t = A(e);
    this.promise = e, this.resolve = ne(re, e, t), this.reject = ne(ie, e, t);
  }, T.f = z = function z(e) {
    return e === _V || e === o ? new r(e) : W(e);
  }, l || "function" != typeof u || (a = u.prototype.then, p(u.prototype, "then", function (e, t) {
    var n = this;
    return new _V(function (e, t) {
      a.call(n, e, t);
    }).then(e, t);
  }, {
    unsafe: !0
  }), "function" == typeof j && s({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function fetch(e) {
      return k(_V, j.apply(c, arguments));
    }
  }))), s({
    global: !0,
    wrap: !0,
    forced: K
  }, {
    Promise: _V
  }), g(_V, R, !1, !0), h(R), o = d.Promise, s({
    target: R,
    stat: !0,
    forced: K
  }, {
    reject: function reject(e) {
      var t = z(this);
      return t.reject.call(void 0, e), t.promise;
    }
  }), s({
    target: R,
    stat: !0,
    forced: l || K
  }, {
    resolve: function resolve(e) {
      return k(l && this === o ? _V : this, e);
    }
  }), s({
    target: R,
    stat: !0,
    forced: J
  }, {
    all: function all(e) {
      var t = this,
          n = z(t),
          i = n.resolve,
          r = n.reject,
          o = N(function () {
        var n = v(t.resolve),
            o = [],
            a = 0,
            s = 1;
        S(e, function (e) {
          var l = a++,
              c = !1;
          o.push(void 0), s++, n.call(t, e).then(function (e) {
            c || (c = !0, o[l] = e, --s || i(o));
          }, r);
        }), --s || i(o);
      });
      return o.error && r(o.value), n.promise;
    },
    race: function race(e) {
      var t = this,
          n = z(t),
          i = n.reject,
          r = N(function () {
        var r = v(t.resolve);
        S(e, function (e) {
          r.call(t, e).then(n.resolve, i);
        });
      });
      return r.error && i(r.value), n.promise;
    }
  });
}, function (e, t, n) {
  var i = n(2);

  e.exports = function (e, t) {
    var n = i.console;
    n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
  };
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(18),
      o = n(99),
      a = n(132),
      s = n(44);
  i({
    target: "Promise",
    stat: !0
  }, {
    allSettled: function allSettled(e) {
      var t = this,
          n = o.f(t),
          i = n.resolve,
          l = n.reject,
          c = a(function () {
        var n = r(t.resolve),
            o = [],
            a = 0,
            l = 1;
        s(e, function (e) {
          var r = a++,
              s = !1;
          o.push(void 0), l++, n.call(t, e).then(function (e) {
            s || (s = !0, o[r] = {
              status: "fulfilled",
              value: e
            }, --l || i(o));
          }, function (e) {
            s || (s = !0, o[r] = {
              status: "rejected",
              reason: e
            }, --l || i(o));
          });
        }), --l || i(o);
      });
      return c.error && l(c.value), n.promise;
    }
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(28),
      o = n(129),
      a = n(32),
      s = n(30),
      l = n(131),
      c = n(14);
  i({
    target: "Promise",
    proto: !0,
    real: !0
  }, {
    "finally": function _finally(e) {
      var t = s(this, a("Promise")),
          n = "function" == typeof e;
      return this.then(n ? function (n) {
        return l(t, e()).then(function () {
          return n;
        });
      } : e, n ? function (n) {
        return l(t, e()).then(function () {
          throw n;
        });
      } : e);
    }
  }), r || "function" != typeof o || o.prototype["finally"] || c(o.prototype, "finally", a("Promise").prototype["finally"]);
}, function (e, t, n) {
  "use strict";

  var i = n(78),
      r = n(133);
  e.exports = i("Map", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, r, !0);
}, function (e, t, n) {
  "use strict";

  var i = n(78),
      r = n(133);
  e.exports = i("Set", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, r);
}, function (e, t, n) {
  "use strict";

  var i,
      r = n(2),
      o = n(48),
      a = n(41),
      s = n(78),
      l = n(134),
      c = n(3),
      d = n(20).enforce,
      u = n(103),
      p = !r.ActiveXObject && "ActiveXObject" in r,
      f = Object.isExtensible,
      g = function g(e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
      h = e.exports = s("WeakMap", g, l, !0, !0);

  if (u && p) {
    i = l.getConstructor(g, "WeakMap", !0), a.REQUIRED = !0;
    var m = h.prototype,
        v = m["delete"],
        b = m.has,
        w = m.get,
        S = m.set;
    o(m, {
      "delete": function _delete(e) {
        if (c(e) && !f(e)) {
          var t = d(this);
          return t.frozen || (t.frozen = new i()), v.call(this, e) || t.frozen["delete"](e);
        }

        return v.call(this, e);
      },
      has: function has(e) {
        if (c(e) && !f(e)) {
          var t = d(this);
          return t.frozen || (t.frozen = new i()), b.call(this, e) || t.frozen.has(e);
        }

        return b.call(this, e);
      },
      get: function get(e) {
        if (c(e) && !f(e)) {
          var t = d(this);
          return t.frozen || (t.frozen = new i()), b.call(this, e) ? w.call(this, e) : t.frozen.get(e);
        }

        return w.call(this, e);
      },
      set: function set(e, t) {
        if (c(e) && !f(e)) {
          var n = d(this);
          n.frozen || (n.frozen = new i()), b.call(this, e) ? S.call(this, e, t) : n.frozen.set(e, t);
        } else S.call(this, e, t);

        return this;
      }
    });
  }
}, function (e, t, n) {
  "use strict";

  n(78)("WeakSet", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, n(134), !1, !0);
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(2),
      o = n(79),
      a = n(46),
      s = o.ArrayBuffer;
  i({
    global: !0,
    forced: r.ArrayBuffer !== s
  }, {
    ArrayBuffer: s
  }), a("ArrayBuffer");
}, function (e, t, n) {
  var i = n(0),
      r = n(5);
  i({
    target: "ArrayBuffer",
    stat: !0,
    forced: !r.NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    isView: r.isView
  });
}, function (e, t, n) {
  "use strict";

  var i = n(0),
      r = n(1),
      o = n(79),
      a = n(4),
      s = n(33),
      l = n(8),
      c = n(30),
      d = o.ArrayBuffer,
      u = o.DataView,
      p = d.prototype.slice;
  i({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: r(function () {
      return !new d(2).slice(1, void 0).byteLength;
    })
  }, {
    slice: function slice(e, t) {
      if (void 0 !== p && void 0 === t) return p.call(a(this), e);

      for (var n = a(this).byteLength, i = s(e, n), r = s(void 0 === t ? n : t, n), o = new (c(this, d))(l(r - i)), f = new u(this), g = new u(o), h = 0; i < r;) {
        g.setUint8(h++, f.getUint8(i++));
      }

      return o;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(79);
  i({
    global: !0,
    forced: !n(5).NATIVE_ARRAY_BUFFER
  }, {
    DataView: r.DataView
  });
}, function (e, t, n) {
  n(31)("Int8", 1, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  var i = n(23);

  e.exports = function (e) {
    var t = i(e);
    if (t < 0) throw RangeError("The argument can't be less than 0");
    return t;
  };
}, function (e, t, n) {
  n(31)("Uint8", 1, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  n(31)("Uint8", 1, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  }, !0);
}, function (e, t, n) {
  n(31)("Int16", 2, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  n(31)("Uint16", 2, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  n(31)("Int32", 4, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  n(31)("Uint32", 4, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  n(31)("Float32", 4, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  n(31)("Float64", 8, function (e) {
    return function (t, n, i) {
      return e(this, t, n, i);
    };
  });
}, function (e, t, n) {
  "use strict";

  var i = n(100),
      r = n(5),
      o = n(137);
  r.exportStatic("from", o, i);
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(100),
      o = i.aTypedArrayConstructor;
  i.exportStatic("of", function () {
    for (var e = 0, t = arguments.length, n = new (o(this))(t); t > e;) {
      n[e] = arguments[e++];
    }

    return n;
  }, r);
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(117),
      o = i.aTypedArray;
  i.exportProto("copyWithin", function (e, t) {
    return r.call(o(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).every,
      o = i.aTypedArray;
  i.exportProto("every", function (e) {
    return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(88),
      o = i.aTypedArray;
  i.exportProto("fill", function (e) {
    return r.apply(o(this), arguments);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).filter,
      o = n(30),
      a = i.aTypedArray,
      s = i.aTypedArrayConstructor;
  i.exportProto("filter", function (e) {
    for (var t = r(a(this), e, arguments.length > 1 ? arguments[1] : void 0), n = o(this, this.constructor), i = 0, l = t.length, c = new (s(n))(l); l > i;) {
      c[i] = t[i++];
    }

    return c;
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).find,
      o = i.aTypedArray;
  i.exportProto("find", function (e) {
    return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).findIndex,
      o = i.aTypedArray;
  i.exportProto("findIndex", function (e) {
    return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).forEach,
      o = i.aTypedArray;
  i.exportProto("forEach", function (e) {
    r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(53).includes,
      o = i.aTypedArray;
  i.exportProto("includes", function (e) {
    return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(53).indexOf,
      o = i.aTypedArray;
  i.exportProto("indexOf", function (e) {
    return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(2),
      r = n(5),
      o = n(69),
      a = n(7)("iterator"),
      s = i.Uint8Array,
      l = o.values,
      c = o.keys,
      d = o.entries,
      u = r.aTypedArray,
      p = r.exportProto,
      f = s && s.prototype[a],
      g = !!f && ("values" == f.name || null == f.name),
      h = function h() {
    return l.call(u(this));
  };

  p("entries", function () {
    return d.call(u(this));
  }), p("keys", function () {
    return c.call(u(this));
  }), p("values", h, !g), p(a, h, !g);
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = i.aTypedArray,
      o = [].join;
  i.exportProto("join", function (e) {
    return o.apply(r(this), arguments);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(120),
      o = i.aTypedArray;
  i.exportProto("lastIndexOf", function (e) {
    return r.apply(o(this), arguments);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).map,
      o = n(30),
      a = i.aTypedArray,
      s = i.aTypedArrayConstructor;
  i.exportProto("map", function (e) {
    return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0, function (e, t) {
      return new (s(o(e, e.constructor)))(t);
    });
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(68).left,
      o = i.aTypedArray;
  i.exportProto("reduce", function (e) {
    return r(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(68).right,
      o = i.aTypedArray;
  i.exportProto("reduceRight", function (e) {
    return r(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = i.aTypedArray,
      o = Math.floor;
  i.exportProto("reverse", function () {
    for (var e, t = r(this).length, n = o(t / 2), i = 0; i < n;) {
      e = this[i], this[i++] = this[--t], this[t] = e;
    }

    return this;
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(8),
      o = n(136),
      a = n(10),
      s = n(1),
      l = i.aTypedArray,
      c = s(function () {
    new Int8Array(1).set({});
  });
  i.exportProto("set", function (e) {
    l(this);
    var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
        n = this.length,
        i = a(e),
        s = r(i.length),
        c = 0;
    if (s + t > n) throw RangeError("Wrong length");

    for (; c < s;) {
      this[t + c] = i[c++];
    }
  }, c);
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(30),
      o = n(1),
      a = i.aTypedArray,
      s = i.aTypedArrayConstructor,
      l = [].slice,
      c = o(function () {
    new Int8Array(1).slice();
  });
  i.exportProto("slice", function (e, t) {
    for (var n = l.call(a(this), e, t), i = r(this, this.constructor), o = 0, c = n.length, d = new (s(i))(c); c > o;) {
      d[o] = n[o++];
    }

    return d;
  }, c);
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(12).some,
      o = i.aTypedArray;
  i.exportProto("some", function (e) {
    return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = i.aTypedArray,
      o = [].sort;
  i.exportProto("sort", function (e) {
    return o.call(r(this), e);
  });
}, function (e, t, n) {
  "use strict";

  var i = n(5),
      r = n(8),
      o = n(33),
      a = n(30),
      s = i.aTypedArray;
  i.exportProto("subarray", function (e, t) {
    var n = s(this),
        i = n.length,
        l = o(e, i);
    return new (a(n, n.constructor))(n.buffer, n.byteOffset + l * n.BYTES_PER_ELEMENT, r((void 0 === t ? i : o(t, i)) - l));
  });
}, function (e, t, n) {
  "use strict";

  var i = n(2),
      r = n(5),
      o = n(1),
      a = i.Int8Array,
      s = r.aTypedArray,
      l = [].toLocaleString,
      c = [].slice,
      d = !!a && o(function () {
    l.call(new a(1));
  }),
      u = o(function () {
    return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
  }) || !o(function () {
    a.prototype.toLocaleString.call([1, 2]);
  });
  r.exportProto("toLocaleString", function () {
    return l.apply(d ? c.call(s(this)) : s(this), arguments);
  }, u);
}, function (e, t, n) {
  "use strict";

  var i = n(2),
      r = n(5),
      o = n(1),
      a = i.Uint8Array,
      s = a && a.prototype,
      l = [].toString,
      c = [].join;
  o(function () {
    l.call({});
  }) && (l = function l() {
    return c.call(this);
  }), r.exportProto("toString", l, (s || {}).toString != l);
}, function (e, t, n) {
  var i = n(0),
      r = n(32),
      o = n(18),
      a = n(4),
      s = n(1),
      l = r("Reflect", "apply"),
      c = Function.apply;
  i({
    target: "Reflect",
    stat: !0,
    forced: !s(function () {
      l(function () {});
    })
  }, {
    apply: function apply(e, t, n) {
      return o(e), a(n), l ? l(e, t, n) : c.call(e, t, n);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(32),
      o = n(18),
      a = n(4),
      s = n(3),
      l = n(34),
      c = n(115),
      d = n(1),
      u = r("Reflect", "construct"),
      p = d(function () {
    function e() {}

    return !(u(function () {}, [], e) instanceof e);
  }),
      f = !d(function () {
    u(function () {});
  }),
      g = p || f;
  i({
    target: "Reflect",
    stat: !0,
    forced: g,
    sham: g
  }, {
    construct: function construct(e, t) {
      o(e), a(t);
      var n = arguments.length < 3 ? e : o(arguments[2]);
      if (f && !p) return u(e, t, n);

      if (e == n) {
        switch (t.length) {
          case 0:
            return new e();

          case 1:
            return new e(t[0]);

          case 2:
            return new e(t[0], t[1]);

          case 3:
            return new e(t[0], t[1], t[2]);

          case 4:
            return new e(t[0], t[1], t[2], t[3]);
        }

        var i = [null];
        return i.push.apply(i, t), new (c.apply(e, i))();
      }

      var r = n.prototype,
          d = l(s(r) ? r : Object.prototype),
          g = Function.apply.call(e, d, t);
      return s(g) ? g : d;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(6),
      o = n(4),
      a = n(25),
      s = n(9);
  i({
    target: "Reflect",
    stat: !0,
    forced: n(1)(function () {
      Reflect.defineProperty(s.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }),
    sham: !r
  }, {
    defineProperty: function defineProperty(e, t, n) {
      o(e);
      var i = a(t, !0);
      o(n);

      try {
        return s.f(e, i, n), !0;
      } catch (e) {
        return !1;
      }
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(4),
      o = n(16).f;
  i({
    target: "Reflect",
    stat: !0
  }, {
    deleteProperty: function deleteProperty(e, t) {
      var n = o(r(e), t);
      return !(n && !n.configurable) && delete e[t];
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(3),
      o = n(4),
      a = n(11),
      s = n(16),
      l = n(27);
  i({
    target: "Reflect",
    stat: !0
  }, {
    get: function e(t, n) {
      var i,
          c,
          d = arguments.length < 3 ? t : arguments[2];
      return o(t) === d ? t[n] : (i = s.f(t, n)) ? a(i, "value") ? i.value : void 0 === i.get ? void 0 : i.get.call(d) : r(c = l(t)) ? e(c, n, d) : void 0;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(6),
      o = n(4),
      a = n(16);
  i({
    target: "Reflect",
    stat: !0,
    sham: !r
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
      return a.f(o(e), t);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(4),
      o = n(27);
  i({
    target: "Reflect",
    stat: !0,
    sham: !n(87)
  }, {
    getPrototypeOf: function getPrototypeOf(e) {
      return o(r(e));
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Reflect",
    stat: !0
  }, {
    has: function has(e, t) {
      return t in e;
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(4),
      o = Object.isExtensible;
  i({
    target: "Reflect",
    stat: !0
  }, {
    isExtensible: function isExtensible(e) {
      return r(e), !o || o(e);
    }
  });
}, function (e, t, n) {
  n(0)({
    target: "Reflect",
    stat: !0
  }, {
    ownKeys: n(82)
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(32),
      o = n(4);
  i({
    target: "Reflect",
    stat: !0,
    sham: !n(57)
  }, {
    preventExtensions: function preventExtensions(e) {
      o(e);

      try {
        var t = r("Object", "preventExtensions");
        return t && t(e), !0;
      } catch (e) {
        return !1;
      }
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(4),
      o = n(3),
      a = n(11),
      s = n(9),
      l = n(16),
      c = n(27),
      d = n(38);
  i({
    target: "Reflect",
    stat: !0
  }, {
    set: function e(t, n, i) {
      var u,
          p,
          f = arguments.length < 4 ? t : arguments[3],
          g = l.f(r(t), n);

      if (!g) {
        if (o(p = c(t))) return e(p, n, i, f);
        g = d(0);
      }

      if (a(g, "value")) {
        if (!1 === g.writable || !o(f)) return !1;

        if (u = l.f(f, n)) {
          if (u.get || u.set || !1 === u.writable) return !1;
          u.value = i, s.f(f, n, u);
        } else s.f(f, n, d(0, i));

        return !0;
      }

      return void 0 !== g.set && (g.set.call(f, i), !0);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(4),
      o = n(114),
      a = n(45);
  a && i({
    target: "Reflect",
    stat: !0
  }, {
    setPrototypeOf: function setPrototypeOf(e, t) {
      r(e), o(t);

      try {
        return a(e, t), !0;
      } catch (e) {
        return !1;
      }
    }
  });
}, function (e, t, n) {
  n(387), n(388), n(389), n(390), n(391), n(392), n(395), n(140), e.exports = n(43);
}, function (e, t, n) {
  var i = n(2),
      r = n(138),
      o = n(119),
      a = n(13);

  for (var s in r) {
    var l = i[s],
        c = l && l.prototype;
    if (c && c.forEach !== o) try {
      a(c, "forEach", o);
    } catch (e) {
      c.forEach = o;
    }
  }
}, function (e, t, n) {
  var i = n(2),
      r = n(138),
      o = n(69),
      a = n(13),
      s = n(7),
      l = s("iterator"),
      c = s("toStringTag"),
      d = o.values;

  for (var u in r) {
    var p = i[u],
        f = p && p.prototype;

    if (f) {
      if (f[l] !== d) try {
        a(f, l, d);
      } catch (e) {
        f[l] = d;
      }
      if (f[c] || a(f, c, u), r[u]) for (var g in o) {
        if (f[g] !== o[g]) try {
          a(f, g, o[g]);
        } catch (e) {
          f[g] = o[g];
        }
      }
    }
  }
}, function (e, t, n) {
  var i = n(2),
      r = n(98),
      o = !i.setImmediate || !i.clearImmediate;
  n(0)({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: o
  }, {
    setImmediate: r.set,
    clearImmediate: r.clear
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(2),
      o = n(130),
      a = n(24),
      s = r.process,
      l = "process" == a(s);
  i({
    global: !0,
    enumerable: !0,
    noTargetGet: !0
  }, {
    queueMicrotask: function queueMicrotask(e) {
      var t = l && s.domain;
      o(t ? t.bind(e) : e);
    }
  });
}, function (e, t, n) {
  var i = n(0),
      r = n(2),
      o = n(63),
      a = [].slice,
      s = function s(e) {
    return function (t, n) {
      var i = arguments.length > 2,
          r = i ? a.call(arguments, 2) : void 0;
      return e(i ? function () {
        ("function" == typeof t ? t : Function(t)).apply(this, r);
      } : t, n);
    };
  };

  i({
    global: !0,
    bind: !0,
    forced: /MSIE .\./.test(o)
  }, {
    setTimeout: s(r.setTimeout),
    setInterval: s(r.setInterval)
  });
}, function (e, t, n) {
  "use strict";

  n(123);

  var i,
      r = n(0),
      o = n(6),
      a = n(139),
      s = n(2),
      l = n(85),
      c = n(14),
      d = n(37),
      u = n(11),
      p = n(110),
      f = n(116),
      g = n(70).codeAt,
      h = n(393),
      m = n(26),
      v = n(140),
      b = n(20),
      w = s.URL,
      S = v.URLSearchParams,
      y = v.getState,
      _ = b.set,
      C = b.getterFor("URL"),
      x = Math.floor,
      k = Math.pow,
      I = /[A-Za-z]/,
      T = /[\d+\-.A-Za-z]/,
      N = /\d/,
      $ = /^(0x|0X)/,
      P = /^[0-7]+$/,
      E = /^\d+$/,
      L = /^[\dA-Fa-f]+$/,
      R = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      A = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      D = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      O = /[\u0009\u000A\u000D]/g,
      V = function V(e, t) {
    var n, i, r;

    if ("[" == t.charAt(0)) {
      if ("]" != t.charAt(t.length - 1)) return "Invalid host";
      if (!(n = F(t.slice(1, -1)))) return "Invalid host";
      e.host = n;
    } else if (q(e)) {
      if (t = h(t), R.test(t)) return "Invalid host";
      if (null === (n = M(t))) return "Invalid host";
      e.host = n;
    } else {
      if (A.test(t)) return "Invalid host";

      for (n = "", i = f(t), r = 0; r < i.length; r++) {
        n += W(i[r], j);
      }

      e.host = n;
    }
  },
      M = function M(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.split(".");
    if (l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4) return e;

    for (n = [], i = 0; i < t; i++) {
      if ("" == (r = l[i])) return e;
      if (o = 10, r.length > 1 && "0" == r.charAt(0) && (o = $.test(r) ? 16 : 8, r = r.slice(8 == o ? 1 : 2)), "" === r) a = 0;else {
        if (!(10 == o ? E : 8 == o ? P : L).test(r)) return e;
        a = parseInt(r, o);
      }
      n.push(a);
    }

    for (i = 0; i < t; i++) {
      if (a = n[i], i == t - 1) {
        if (a >= k(256, 5 - t)) return null;
      } else if (a > 255) return null;
    }

    for (s = n.pop(), i = 0; i < n.length; i++) {
      s += n[i] * k(256, 3 - i);
    }

    return s;
  },
      F = function F(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = [0, 0, 0, 0, 0, 0, 0, 0],
        c = 0,
        d = null,
        u = 0,
        p = function p() {
      return e.charAt(u);
    };

    if (":" == p()) {
      if (":" != e.charAt(1)) return;
      u += 2, d = ++c;
    }

    for (; p();) {
      if (8 == c) return;

      if (":" != p()) {
        for (t = n = 0; n < 4 && L.test(p());) {
          t = 16 * t + parseInt(p(), 16), u++, n++;
        }

        if ("." == p()) {
          if (0 == n) return;
          if (u -= n, c > 6) return;

          for (i = 0; p();) {
            if (r = null, i > 0) {
              if (!("." == p() && i < 4)) return;
              u++;
            }

            if (!N.test(p())) return;

            for (; N.test(p());) {
              if (o = parseInt(p(), 10), null === r) r = o;else {
                if (0 == r) return;
                r = 10 * r + o;
              }
              if (r > 255) return;
              u++;
            }

            l[c] = 256 * l[c] + r, 2 != ++i && 4 != i || c++;
          }

          if (4 != i) return;
          break;
        }

        if (":" == p()) {
          if (u++, !p()) return;
        } else if (p()) return;

        l[c++] = t;
      } else {
        if (null !== d) return;
        u++, d = ++c;
      }
    }

    if (null !== d) for (a = c - d, c = 7; 0 != c && a > 0;) {
      s = l[c], l[c--] = l[d + a - 1], l[d + --a] = s;
    } else if (8 != c) return;
    return l;
  },
      U = function U(e) {
    var t, n, i, r;

    if ("number" == typeof e) {
      for (t = [], n = 0; n < 4; n++) {
        t.unshift(e % 256), e = x(e / 256);
      }

      return t.join(".");
    }

    if ("object" == _typeof(e)) {
      for (t = "", i = function (e) {
        for (var t = null, n = 1, i = null, r = 0, o = 0; o < 8; o++) {
          0 !== e[o] ? (r > n && (t = i, n = r), i = null, r = 0) : (null === i && (i = o), ++r);
        }

        return r > n && (t = i, n = r), t;
      }(e), n = 0; n < 8; n++) {
        r && 0 === e[n] || (r && (r = !1), i === n ? (t += n ? ":" : "::", r = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
      }

      return "[" + t + "]";
    }

    return e;
  },
      j = {},
      B = p({}, j, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
      G = p({}, B, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
      z = p({}, G, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
      W = function W(e, t) {
    var n = g(e, 0);
    return n > 32 && n < 127 && !u(t, e) ? e : encodeURIComponent(e);
  },
      H = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
      q = function q(e) {
    return u(H, e.scheme);
  },
      K = function K(e) {
    return "" != e.username || "" != e.password;
  },
      J = function J(e) {
    return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
  },
      Y = function Y(e, t) {
    var n;
    return 2 == e.length && I.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n);
  },
      Q = function Q(e) {
    var t;
    return e.length > 1 && Y(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t);
  },
      X = function X(e) {
    var t = e.path,
        n = t.length;
    !n || "file" == e.scheme && 1 == n && Y(t[0], !0) || t.pop();
  },
      Z = function Z(e) {
    return "." === e || "%2e" === e.toLowerCase();
  },
      ee = {},
      te = {},
      ne = {},
      ie = {},
      re = {},
      oe = {},
      ae = {},
      se = {},
      le = {},
      ce = {},
      de = {},
      ue = {},
      pe = {},
      fe = {},
      ge = {},
      he = {},
      me = {},
      ve = {},
      be = {},
      we = {},
      Se = {},
      ye = function ye(e, t, n, r) {
    var o,
        a,
        s,
        l,
        c,
        d = n || ee,
        p = 0,
        g = "",
        h = !1,
        m = !1,
        v = !1;

    for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(D, "")), t = t.replace(O, ""), o = f(t); p <= o.length;) {
      switch (a = o[p], d) {
        case ee:
          if (!a || !I.test(a)) {
            if (n) return "Invalid scheme";
            d = ne;
            continue;
          }

          g += a.toLowerCase(), d = te;
          break;

        case te:
          if (a && (T.test(a) || "+" == a || "-" == a || "." == a)) g += a.toLowerCase();else {
            if (":" != a) {
              if (n) return "Invalid scheme";
              g = "", d = ne, p = 0;
              continue;
            }

            if (n && (q(e) != u(H, g) || "file" == g && (K(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
            if (e.scheme = g, n) return void (q(e) && H[e.scheme] == e.port && (e.port = null));
            g = "", "file" == e.scheme ? d = fe : q(e) && r && r.scheme == e.scheme ? d = ie : q(e) ? d = se : "/" == o[p + 1] ? (d = re, p++) : (e.cannotBeABaseURL = !0, e.path.push(""), d = be);
          }
          break;

        case ne:
          if (!r || r.cannotBeABaseURL && "#" != a) return "Invalid scheme";

          if (r.cannotBeABaseURL && "#" == a) {
            e.scheme = r.scheme, e.path = r.path.slice(), e.query = r.query, e.fragment = "", e.cannotBeABaseURL = !0, d = Se;
            break;
          }

          d = "file" == r.scheme ? fe : oe;
          continue;

        case ie:
          if ("/" != a || "/" != o[p + 1]) {
            d = oe;
            continue;
          }

          d = le, p++;
          break;

        case re:
          if ("/" == a) {
            d = ce;
            break;
          }

          d = ve;
          continue;

        case oe:
          if (e.scheme = r.scheme, a == i) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query;else if ("/" == a || "\\" == a && q(e)) d = ae;else if ("?" == a) e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = "", d = we;else {
            if ("#" != a) {
              e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.path.pop(), d = ve;
              continue;
            }

            e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, e.path = r.path.slice(), e.query = r.query, e.fragment = "", d = Se;
          }
          break;

        case ae:
          if (!q(e) || "/" != a && "\\" != a) {
            if ("/" != a) {
              e.username = r.username, e.password = r.password, e.host = r.host, e.port = r.port, d = ve;
              continue;
            }

            d = ce;
          } else d = le;

          break;

        case se:
          if (d = le, "/" != a || "/" != g.charAt(p + 1)) continue;
          p++;
          break;

        case le:
          if ("/" != a && "\\" != a) {
            d = ce;
            continue;
          }

          break;

        case ce:
          if ("@" == a) {
            h && (g = "%40" + g), h = !0, s = f(g);

            for (var b = 0; b < s.length; b++) {
              var w = s[b];

              if (":" != w || v) {
                var S = W(w, z);
                v ? e.password += S : e.username += S;
              } else v = !0;
            }

            g = "";
          } else if (a == i || "/" == a || "?" == a || "#" == a || "\\" == a && q(e)) {
            if (h && "" == g) return "Invalid authority";
            p -= f(g).length + 1, g = "", d = de;
          } else g += a;

          break;

        case de:
        case ue:
          if (n && "file" == e.scheme) {
            d = he;
            continue;
          }

          if (":" != a || m) {
            if (a == i || "/" == a || "?" == a || "#" == a || "\\" == a && q(e)) {
              if (q(e) && "" == g) return "Invalid host";
              if (n && "" == g && (K(e) || null !== e.port)) return;
              if (l = V(e, g)) return l;
              if (g = "", d = me, n) return;
              continue;
            }

            "[" == a ? m = !0 : "]" == a && (m = !1), g += a;
          } else {
            if ("" == g) return "Invalid host";
            if (l = V(e, g)) return l;
            if (g = "", d = pe, n == ue) return;
          }

          break;

        case pe:
          if (!N.test(a)) {
            if (a == i || "/" == a || "?" == a || "#" == a || "\\" == a && q(e) || n) {
              if ("" != g) {
                var y = parseInt(g, 10);
                if (y > 65535) return "Invalid port";
                e.port = q(e) && y === H[e.scheme] ? null : y, g = "";
              }

              if (n) return;
              d = me;
              continue;
            }

            return "Invalid port";
          }

          g += a;
          break;

        case fe:
          if (e.scheme = "file", "/" == a || "\\" == a) d = ge;else {
            if (!r || "file" != r.scheme) {
              d = ve;
              continue;
            }

            if (a == i) e.host = r.host, e.path = r.path.slice(), e.query = r.query;else if ("?" == a) e.host = r.host, e.path = r.path.slice(), e.query = "", d = we;else {
              if ("#" != a) {
                Q(o.slice(p).join("")) || (e.host = r.host, e.path = r.path.slice(), X(e)), d = ve;
                continue;
              }

              e.host = r.host, e.path = r.path.slice(), e.query = r.query, e.fragment = "", d = Se;
            }
          }
          break;

        case ge:
          if ("/" == a || "\\" == a) {
            d = he;
            break;
          }

          r && "file" == r.scheme && !Q(o.slice(p).join("")) && (Y(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host), d = ve;
          continue;

        case he:
          if (a == i || "/" == a || "\\" == a || "?" == a || "#" == a) {
            if (!n && Y(g)) d = ve;else if ("" == g) {
              if (e.host = "", n) return;
              d = me;
            } else {
              if (l = V(e, g)) return l;
              if ("localhost" == e.host && (e.host = ""), n) return;
              g = "", d = me;
            }
            continue;
          }

          g += a;
          break;

        case me:
          if (q(e)) {
            if (d = ve, "/" != a && "\\" != a) continue;
          } else if (n || "?" != a) {
            if (n || "#" != a) {
              if (a != i && (d = ve, "/" != a)) continue;
            } else e.fragment = "", d = Se;
          } else e.query = "", d = we;

          break;

        case ve:
          if (a == i || "/" == a || "\\" == a && q(e) || !n && ("?" == a || "#" == a)) {
            if (".." === (c = (c = g).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (X(e), "/" == a || "\\" == a && q(e) || e.path.push("")) : Z(g) ? "/" == a || "\\" == a && q(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Y(g) && (e.host && (e.host = ""), g = g.charAt(0) + ":"), e.path.push(g)), g = "", "file" == e.scheme && (a == i || "?" == a || "#" == a)) for (; e.path.length > 1 && "" === e.path[0];) {
              e.path.shift();
            }
            "?" == a ? (e.query = "", d = we) : "#" == a && (e.fragment = "", d = Se);
          } else g += W(a, G);

          break;

        case be:
          "?" == a ? (e.query = "", d = we) : "#" == a ? (e.fragment = "", d = Se) : a != i && (e.path[0] += W(a, j));
          break;

        case we:
          n || "#" != a ? a != i && ("'" == a && q(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : W(a, j)) : (e.fragment = "", d = Se);
          break;

        case Se:
          a != i && (e.fragment += W(a, B));
      }

      p++;
    }
  },
      _e = function _e(e) {
    var t,
        n,
        i = d(this, _e, "URL"),
        r = arguments.length > 1 ? arguments[1] : void 0,
        a = String(e),
        s = _(i, {
      type: "URL"
    });

    if (void 0 !== r) if (r instanceof _e) t = C(r);else if (n = ye(t = {}, String(r))) throw TypeError(n);
    if (n = ye(s, a, null, t)) throw TypeError(n);
    var l = s.searchParams = new S(),
        c = y(l);
    c.updateSearchParams(s.query), c.updateURL = function () {
      s.query = String(l) || null;
    }, o || (i.href = xe.call(i), i.origin = ke.call(i), i.protocol = Ie.call(i), i.username = Te.call(i), i.password = Ne.call(i), i.host = $e.call(i), i.hostname = Pe.call(i), i.port = Ee.call(i), i.pathname = Le.call(i), i.search = Re.call(i), i.searchParams = Ae.call(i), i.hash = De.call(i));
  },
      Ce = _e.prototype,
      xe = function xe() {
    var e = C(this),
        t = e.scheme,
        n = e.username,
        i = e.password,
        r = e.host,
        o = e.port,
        a = e.path,
        s = e.query,
        l = e.fragment,
        c = t + ":";
    return null !== r ? (c += "//", K(e) && (c += n + (i ? ":" + i : "") + "@"), c += U(r), null !== o && (c += ":" + o)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (c += "?" + s), null !== l && (c += "#" + l), c;
  },
      ke = function ke() {
    var e = C(this),
        t = e.scheme,
        n = e.port;
    if ("blob" == t) try {
      return new URL(t.path[0]).origin;
    } catch (e) {
      return "null";
    }
    return "file" != t && q(e) ? t + "://" + U(e.host) + (null !== n ? ":" + n : "") : "null";
  },
      Ie = function Ie() {
    return C(this).scheme + ":";
  },
      Te = function Te() {
    return C(this).username;
  },
      Ne = function Ne() {
    return C(this).password;
  },
      $e = function $e() {
    var e = C(this),
        t = e.host,
        n = e.port;
    return null === t ? "" : null === n ? U(t) : U(t) + ":" + n;
  },
      Pe = function Pe() {
    var e = C(this).host;
    return null === e ? "" : U(e);
  },
      Ee = function Ee() {
    var e = C(this).port;
    return null === e ? "" : String(e);
  },
      Le = function Le() {
    var e = C(this),
        t = e.path;
    return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
  },
      Re = function Re() {
    var e = C(this).query;
    return e ? "?" + e : "";
  },
      Ae = function Ae() {
    return C(this).searchParams;
  },
      De = function De() {
    var e = C(this).fragment;
    return e ? "#" + e : "";
  },
      Oe = function Oe(e, t) {
    return {
      get: e,
      set: t,
      configurable: !0,
      enumerable: !0
    };
  };

  if (o && l(Ce, {
    href: Oe(xe, function (e) {
      var t = C(this),
          n = String(e),
          i = ye(t, n);
      if (i) throw TypeError(i);
      y(t.searchParams).updateSearchParams(t.query);
    }),
    origin: Oe(ke),
    protocol: Oe(Ie, function (e) {
      var t = C(this);
      ye(t, String(e) + ":", ee);
    }),
    username: Oe(Te, function (e) {
      var t = C(this),
          n = f(String(e));

      if (!J(t)) {
        t.username = "";

        for (var i = 0; i < n.length; i++) {
          t.username += W(n[i], z);
        }
      }
    }),
    password: Oe(Ne, function (e) {
      var t = C(this),
          n = f(String(e));

      if (!J(t)) {
        t.password = "";

        for (var i = 0; i < n.length; i++) {
          t.password += W(n[i], z);
        }
      }
    }),
    host: Oe($e, function (e) {
      var t = C(this);
      t.cannotBeABaseURL || ye(t, String(e), de);
    }),
    hostname: Oe(Pe, function (e) {
      var t = C(this);
      t.cannotBeABaseURL || ye(t, String(e), ue);
    }),
    port: Oe(Ee, function (e) {
      var t = C(this);
      J(t) || ("" == (e = String(e)) ? t.port = null : ye(t, e, pe));
    }),
    pathname: Oe(Le, function (e) {
      var t = C(this);
      t.cannotBeABaseURL || (t.path = [], ye(t, e + "", me));
    }),
    search: Oe(Re, function (e) {
      var t = C(this);
      "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", ye(t, e, we)), y(t.searchParams).updateSearchParams(t.query);
    }),
    searchParams: Oe(Ae),
    hash: Oe(De, function (e) {
      var t = C(this);
      "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", ye(t, e, Se)) : t.fragment = null;
    })
  }), c(Ce, "toJSON", function () {
    return xe.call(this);
  }, {
    enumerable: !0
  }), c(Ce, "toString", function () {
    return xe.call(this);
  }, {
    enumerable: !0
  }), w) {
    var Ve = w.createObjectURL,
        Me = w.revokeObjectURL;
    Ve && c(_e, "createObjectURL", function (e) {
      return Ve.apply(w, arguments);
    }), Me && c(_e, "revokeObjectURL", function (e) {
      return Me.apply(w, arguments);
    });
  }

  m(_e, "URL"), r({
    global: !0,
    forced: !a,
    sham: !o
  }, {
    URL: _e
  });
}, function (e, t, n) {
  "use strict";

  var i = /[^\0-\u007E]/,
      r = /[.\u3002\uFF0E\uFF61]/g,
      o = "Overflow: input needs wider integers to process",
      a = Math.floor,
      s = String.fromCharCode,
      l = function l(e) {
    return e + 22 + 75 * (e < 26);
  },
      c = function c(e, t, n) {
    var i = 0;

    for (e = n ? a(e / 700) : e >> 1, e += a(e / t); e > 455; i += 36) {
      e = a(e / 35);
    }

    return a(i + 36 * e / (e + 38));
  },
      d = function d(e) {
    var t,
        n,
        i = [],
        r = (e = function (e) {
      for (var t = [], n = 0, i = e.length; n < i;) {
        var r = e.charCodeAt(n++);

        if (r >= 55296 && r <= 56319 && n < i) {
          var o = e.charCodeAt(n++);
          56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r), n--);
        } else t.push(r);
      }

      return t;
    }(e)).length,
        d = 128,
        u = 0,
        p = 72;

    for (t = 0; t < e.length; t++) {
      (n = e[t]) < 128 && i.push(s(n));
    }

    var f = i.length,
        g = f;

    for (f && i.push("-"); g < r;) {
      var h = 2147483647;

      for (t = 0; t < e.length; t++) {
        (n = e[t]) >= d && n < h && (h = n);
      }

      var m = g + 1;
      if (h - d > a((2147483647 - u) / m)) throw RangeError(o);

      for (u += (h - d) * m, d = h, t = 0; t < e.length; t++) {
        if ((n = e[t]) < d && ++u > 2147483647) throw RangeError(o);

        if (n == d) {
          for (var v = u, b = 36;; b += 36) {
            var w = b <= p ? 1 : b >= p + 26 ? 26 : b - p;
            if (v < w) break;
            var S = v - w,
                y = 36 - w;
            i.push(s(l(w + S % y))), v = a(S / y);
          }

          i.push(s(l(v))), p = c(u, m, g == f), u = 0, ++g;
        }
      }

      ++u, ++d;
    }

    return i.join("");
  };

  e.exports = function (e) {
    var t,
        n,
        o = [],
        a = e.toLowerCase().replace(r, ".").split(".");

    for (t = 0; t < a.length; t++) {
      n = a[t], o.push(i.test(n) ? "xn--" + d(n) : n);
    }

    return o.join(".");
  };
}, function (e, t, n) {
  var i = n(4),
      r = n(59);

  e.exports = function (e) {
    var t = r(e);
    if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
    return i(t.call(e));
  };
}, function (e, t, n) {
  "use strict";

  n(0)({
    target: "URL",
    proto: !0,
    enumerable: !0
  }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  });
}, function (e, t, n) {
  var i = function (e) {
    "use strict";

    var t,
        n = Object.prototype,
        i = n.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        o = r.iterator || "@@iterator",
        a = r.asyncIterator || "@@asyncIterator",
        s = r.toStringTag || "@@toStringTag";

    function l(e, t, n, i) {
      var r = t && t.prototype instanceof h ? t : h,
          o = Object.create(r.prototype),
          a = new T(i || []);
      return o._invoke = function (e, t, n) {
        var i = d;
        return function (r, o) {
          if (i === p) throw new Error("Generator is already running");

          if (i === f) {
            if ("throw" === r) throw o;
            return $();
          }

          for (n.method = r, n.arg = o;;) {
            var a = n.delegate;

            if (a) {
              var s = x(a, n);

              if (s) {
                if (s === g) continue;
                return s;
              }
            }

            if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
              if (i === d) throw i = f, n.arg;
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = p;
            var l = c(e, t, n);

            if ("normal" === l.type) {
              if (i = n.done ? f : u, l.arg === g) continue;
              return {
                value: l.arg,
                done: n.done
              };
            }

            "throw" === l.type && (i = f, n.method = "throw", n.arg = l.arg);
          }
        };
      }(e, n, a), o;
    }

    function c(e, t, n) {
      try {
        return {
          type: "normal",
          arg: e.call(t, n)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }

    e.wrap = l;
    var d = "suspendedStart",
        u = "suspendedYield",
        p = "executing",
        f = "completed",
        g = {};

    function h() {}

    function m() {}

    function v() {}

    var b = {};

    b[o] = function () {
      return this;
    };

    var w = Object.getPrototypeOf,
        S = w && w(w(N([])));
    S && S !== n && i.call(S, o) && (b = S);
    var y = v.prototype = h.prototype = Object.create(b);

    function _(e) {
      ["next", "throw", "return"].forEach(function (t) {
        e[t] = function (e) {
          return this._invoke(t, e);
        };
      });
    }

    function C(e) {
      var t;

      this._invoke = function (n, r) {
        function o() {
          return new Promise(function (t, o) {
            !function t(n, r, o, a) {
              var s = c(e[n], e, r);

              if ("throw" !== s.type) {
                var l = s.arg,
                    d = l.value;
                return d && "object" == _typeof(d) && i.call(d, "__await") ? Promise.resolve(d.__await).then(function (e) {
                  t("next", e, o, a);
                }, function (e) {
                  t("throw", e, o, a);
                }) : Promise.resolve(d).then(function (e) {
                  l.value = e, o(l);
                }, function (e) {
                  return t("throw", e, o, a);
                });
              }

              a(s.arg);
            }(n, r, t, o);
          });
        }

        return t = t ? t.then(o, o) : o();
      };
    }

    function x(e, n) {
      var i = e.iterator[n.method];

      if (i === t) {
        if (n.delegate = null, "throw" === n.method) {
          if (e.iterator["return"] && (n.method = "return", n.arg = t, x(e, n), "throw" === n.method)) return g;
          n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return g;
      }

      var r = c(i, e.iterator, n.arg);
      if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, g;
      var o = r.arg;
      return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g);
    }

    function k(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }

    function I(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t;
    }

    function T(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(k, this), this.reset(!0);
    }

    function N(e) {
      if (e) {
        var n = e[o];
        if (n) return n.call(e);
        if ("function" == typeof e.next) return e;

        if (!isNaN(e.length)) {
          var r = -1,
              a = function n() {
            for (; ++r < e.length;) {
              if (i.call(e, r)) return n.value = e[r], n.done = !1, n;
            }

            return n.value = t, n.done = !0, n;
          };

          return a.next = a;
        }
      }

      return {
        next: $
      };
    }

    function $() {
      return {
        value: t,
        done: !0
      };
    }

    return m.prototype = y.constructor = v, v.constructor = m, v[s] = m.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
    }, e.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(y), e;
    }, e.awrap = function (e) {
      return {
        __await: e
      };
    }, _(C.prototype), C.prototype[a] = function () {
      return this;
    }, e.AsyncIterator = C, e.async = function (t, n, i, r) {
      var o = new C(l(t, n, i, r));
      return e.isGeneratorFunction(n) ? o : o.next().then(function (e) {
        return e.done ? e.value : o.next();
      });
    }, _(y), y[s] = "Generator", y[o] = function () {
      return this;
    }, y.toString = function () {
      return "[object Generator]";
    }, e.keys = function (e) {
      var t = [];

      for (var n in e) {
        t.push(n);
      }

      return t.reverse(), function n() {
        for (; t.length;) {
          var i = t.pop();
          if (i in e) return n.value = i, n.done = !1, n;
        }

        return n.done = !0, n;
      };
    }, e.values = N, T.prototype = {
      constructor: T,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(I), !e) for (var n in this) {
          "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
        }
      },
      stop: function stop() {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var n = this;

        function r(i, r) {
          return s.type = "throw", s.arg = e, n.next = i, r && (n.method = "next", n.arg = t), !!r;
        }

        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var a = this.tryEntries[o],
              s = a.completion;
          if ("root" === a.tryLoc) return r("end");

          if (a.tryLoc <= this.prev) {
            var l = i.call(a, "catchLoc"),
                c = i.call(a, "finallyLoc");

            if (l && c) {
              if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return r(a.finallyLoc);
            } else if (l) {
              if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return r(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var r = this.tryEntries[n];

          if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
            var o = r;
            break;
          }
        }

        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
        var a = o ? o.completion : {};
        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(a);
      },
      complete: function complete(e, t) {
        if ("throw" === e.type) throw e.arg;
        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
      },
      finish: function finish(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), g;
        }
      },
      "catch": function _catch(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];

          if (n.tryLoc === e) {
            var i = n.completion;

            if ("throw" === i.type) {
              var r = i.arg;
              I(n);
            }

            return r;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, n, i) {
        return this.delegate = {
          iterator: N(e),
          resultName: n,
          nextLoc: i
        }, "next" === this.method && (this.arg = t), g;
      }
    }, e;
  }(e.exports);

  try {
    regeneratorRuntime = i;
  } catch (e) {
    Function("r", "regeneratorRuntime = r")(i);
  }
}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {
  "use strict";

  function i() {}

  n.r(t), n.d(t, "store", function () {
    return Hl;
  }), n.d(t, "getTranslation", function () {
    return ql;
  });

  var r = function r(e) {
    return e;
  };

  function o(e, t) {
    for (var _n2 in t) {
      e[_n2] = t[_n2];
    }

    return e;
  }

  function a(e) {
    return e();
  }

  function s() {
    return Object.create(null);
  }

  function l(e) {
    e.forEach(a);
  }

  function c(e) {
    return "function" == typeof e;
  }

  function d(e, t) {
    return e != e ? t == t : e !== t || e && "object" == _typeof(e) || "function" == typeof e;
  }

  function u(e, t) {
    var n = e.subscribe(t);
    return n.unsubscribe ? function () {
      return n.unsubscribe();
    } : n;
  }

  function p(e) {
    var t;
    return u(e, function (e) {
      return t = e;
    })(), t;
  }

  function f(e, t, n) {
    e.$$.on_destroy.push(u(t, n));
  }

  function g(e, t, n) {
    if (e) {
      var _i2 = h(e, t, n);

      return e[0](_i2);
    }
  }

  function h(e, t, n) {
    return e[1] ? o({}, o(t.$$scope.ctx, e[1](n ? n(t) : {}))) : t.$$scope.ctx;
  }

  function m(e, t, n, i) {
    return e[1] ? o({}, o(t.$$scope.changed || {}, e[1](i ? i(n) : {}))) : t.$$scope.changed || {};
  }

  function v(e) {
    return null == e ? "" : e;
  }

  var b = "undefined" != typeof window;
  var w = b ? function () {
    return window.performance.now();
  } : function () {
    return Date.now();
  },
      S = b ? function (e) {
    return requestAnimationFrame(e);
  } : i;
  var y = new Set();

  var _,
      C = !1;

  function x() {
    y.forEach(function (e) {
      e[0](w()) || (y["delete"](e), e[1]());
    }), (C = y.size > 0) && S(x);
  }

  function k(e) {
    var t;
    return C || (C = !0, S(x)), {
      promise: new Promise(function (n) {
        y.add(t = [e, n]);
      }),
      abort: function abort() {
        y["delete"](t);
      }
    };
  }

  function I(e, t) {
    e.appendChild(t);
  }

  function T(e, t, n) {
    e.insertBefore(t, n || null);
  }

  function N(e) {
    e.parentNode.removeChild(e);
  }

  function $(e, t) {
    for (var _n3 = 0; _n3 < e.length; _n3 += 1) {
      e[_n3] && e[_n3].d(t);
    }
  }

  function P(e) {
    return document.createElement(e);
  }

  function E(e) {
    return document.createTextNode(e);
  }

  function L() {
    return E(" ");
  }

  function R() {
    return E("");
  }

  function A(e, t, n, i) {
    return e.addEventListener(t, n, i), function () {
      return e.removeEventListener(t, n, i);
    };
  }

  function D(e) {
    return function (t) {
      return t.preventDefault(), e.call(this, t);
    };
  }

  function O(e) {
    return function (t) {
      return t.stopPropagation(), e.call(this, t);
    };
  }

  function V(e, t, n) {
    null == n ? e.removeAttribute(t) : e.setAttribute(t, n);
  }

  function M(e, t) {
    t = "" + t, e.data !== t && (e.data = t);
  }

  function F(e, t) {
    (null != t || e.value) && (e.value = t);
  }

  function U(e, t, n, i) {
    e.style.setProperty(t, n, i ? "important" : "");
  }

  function j(e, t) {
    var n = document.createEvent("CustomEvent");
    return n.initCustomEvent(e, !1, !1, t), n;
  }

  var B = /*#__PURE__*/function () {
    function B(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, B);

      this.e = P("div"), this.a = t, this.u(e);
    }

    _createClass(B, [{
      key: "m",
      value: function m(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        for (var _n4 = 0; _n4 < this.n.length; _n4 += 1) {
          T(e, this.n[_n4], t);
        }

        this.t = e;
      }
    }, {
      key: "u",
      value: function u(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
      }
    }, {
      key: "p",
      value: function p(e) {
        this.d(), this.u(e), this.m(this.t, this.a);
      }
    }, {
      key: "d",
      value: function d() {
        this.n.forEach(N);
      }
    }]);

    return B;
  }();

  var G,
      z = 0,
      W = {};

  function H(e, t, n, i, r, o, a) {
    var s = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var l = 16.666 / i;
    var c = "{\n";

    for (var _e2 = 0; _e2 <= 1; _e2 += l) {
      var _i3 = t + (n - t) * o(_e2);

      c += 100 * _e2 + "%{".concat(a(_i3, 1 - _i3), "}\n");
    }

    var d = c + "100% {".concat(a(n, 1 - n), "}\n}"),
        u = "__svelte_".concat(function (e) {
      var t = 5381,
          n = e.length;

      for (; n--;) {
        t = (t << 5) - t ^ e.charCodeAt(n);
      }

      return t >>> 0;
    }(d), "_").concat(s);

    if (!W[u]) {
      if (!_) {
        var _e3 = P("style");

        document.head.appendChild(_e3), _ = _e3.sheet;
      }

      W[u] = !0, _.insertRule("@keyframes ".concat(u, " ").concat(d), _.cssRules.length);
    }

    var p = e.style.animation || "";
    return e.style.animation = "".concat(p ? "".concat(p, ", ") : "").concat(u, " ").concat(i, "ms linear ").concat(r, "ms 1 both"), z += 1, u;
  }

  function q(e, t) {
    e.style.animation = (e.style.animation || "").split(", ").filter(t ? function (e) {
      return e.indexOf(t) < 0;
    } : function (e) {
      return -1 === e.indexOf("__svelte");
    }).join(", "), t && ! --z && S(function () {
      if (z) return;
      var e = _.cssRules.length;

      for (; e--;) {
        _.deleteRule(e);
      }

      W = {};
    });
  }

  function K(e) {
    G = e;
  }

  function J() {
    if (!G) throw new Error("Function called outside component initialization");
    return G;
  }

  function Y(e) {
    J().$$.before_update.push(e);
  }

  function Q(e) {
    J().$$.on_mount.push(e);
  }

  function X(e) {
    J().$$.after_update.push(e);
  }

  function Z(e) {
    J().$$.on_destroy.push(e);
  }

  function ee() {
    var e = G;
    return function (t, n) {
      var i = e.$$.callbacks[t];

      if (i) {
        var _r2 = j(t, n);

        i.slice().forEach(function (t) {
          t.call(e, _r2);
        });
      }
    };
  }

  function te(e, t) {
    J().$$.context.set(e, t);
  }

  function ne(e) {
    return J().$$.context.get(e);
  }

  function ie(e, t) {
    var n = e.$$.callbacks[t.type];
    n && n.slice().forEach(function (e) {
      return e(t);
    });
  }

  var re = [],
      oe = [],
      ae = [],
      se = [],
      le = Promise.resolve();
  var ce,
      de = !1;

  function ue() {
    de || (de = !0, le.then(ge));
  }

  function pe(e) {
    ae.push(e);
  }

  function fe(e) {
    se.push(e);
  }

  function ge() {
    var e = new Set();

    do {
      for (; re.length;) {
        var _e4 = re.shift();

        K(_e4), he(_e4.$$);
      }

      for (; oe.length;) {
        oe.pop()();
      }

      for (var _t3 = 0; _t3 < ae.length; _t3 += 1) {
        var _n5 = ae[_t3];
        e.has(_n5) || (_n5(), e.add(_n5));
      }

      ae.length = 0;
    } while (re.length);

    for (; se.length;) {
      se.pop()();
    }

    de = !1;
  }

  function he(e) {
    e.fragment && (e.update(e.dirty), l(e.before_update), e.fragment.p(e.dirty, e.ctx), e.dirty = null, e.after_update.forEach(pe));
  }

  function me() {
    return ce || (ce = Promise.resolve()).then(function () {
      ce = null;
    }), ce;
  }

  function ve(e, t, n) {
    e.dispatchEvent(j("".concat(t ? "intro" : "outro").concat(n)));
  }

  var be = new Set();
  var we;

  function Se() {
    we = {
      r: 0,
      c: [],
      p: we
    };
  }

  function ye() {
    we.r || l(we.c), we = we.p;
  }

  function _e(e, t) {
    e && e.i && (be["delete"](e), e.i(t));
  }

  function Ce(e, t, n, i) {
    if (e && e.o) {
      if (be.has(e)) return;
      be.add(e), we.c.push(function () {
        be["delete"](e), i && (n && e.d(1), i());
      }), e.o(t);
    }
  }

  var xe = {
    duration: 0
  };

  function ke(e, t, n) {
    var o,
        a,
        s = t(e, n),
        l = !1,
        d = 0;

    function u() {
      o && q(e, o);
    }

    function p() {
      var _ref = s || xe,
          _ref$delay = _ref.delay,
          t = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          n = _ref$duration === void 0 ? 300 : _ref$duration,
          _ref$easing = _ref.easing,
          c = _ref$easing === void 0 ? r : _ref$easing,
          _ref$tick = _ref.tick,
          p = _ref$tick === void 0 ? i : _ref$tick,
          f = _ref.css;

      f && (o = H(e, 0, 1, n, t, c, f, d++)), p(0, 1);
      var g = w() + t,
          h = g + n;
      a && a.abort(), l = !0, pe(function () {
        return ve(e, !0, "start");
      }), a = k(function (t) {
        if (l) {
          if (t >= h) return p(1, 0), ve(e, !0, "end"), u(), l = !1;

          if (t >= g) {
            var _e5 = c((t - g) / n);

            p(_e5, 1 - _e5);
          }
        }

        return l;
      });
    }

    var f = !1;
    return {
      start: function start() {
        f || (q(e), c(s) ? (s = s(), me().then(p)) : p());
      },
      invalidate: function invalidate() {
        f = !1;
      },
      end: function end() {
        l && (u(), l = !1);
      }
    };
  }

  function Ie(e, t, n) {
    var o,
        a = t(e, n),
        s = !0;
    var d = we;

    function u() {
      var _ref2 = a || xe,
          _ref2$delay = _ref2.delay,
          t = _ref2$delay === void 0 ? 0 : _ref2$delay,
          _ref2$duration = _ref2.duration,
          n = _ref2$duration === void 0 ? 300 : _ref2$duration,
          _ref2$easing = _ref2.easing,
          c = _ref2$easing === void 0 ? r : _ref2$easing,
          _ref2$tick = _ref2.tick,
          u = _ref2$tick === void 0 ? i : _ref2$tick,
          p = _ref2.css;

      p && (o = H(e, 1, 0, n, t, c, p));
      var f = w() + t,
          g = f + n;
      pe(function () {
        return ve(e, !1, "start");
      }), k(function (t) {
        if (s) {
          if (t >= g) return u(0, 1), ve(e, !1, "end"), --d.r || l(d.c), !1;

          if (t >= f) {
            var _e6 = c((t - f) / n);

            u(1 - _e6, _e6);
          }
        }

        return s;
      });
    }

    return d.r += 1, c(a) ? me().then(function () {
      a = a(), u();
    }) : u(), {
      end: function end(t) {
        t && a.tick && a.tick(1, 0), s && (o && q(e, o), s = !1);
      }
    };
  }

  function Te(e, t) {
    var n = t.token = {};

    function i(e, i, r, a) {
      if (t.token !== n) return;
      t.resolved = r && _defineProperty({}, r, a);
      var s = o(o({}, t.ctx), t.resolved),
          l = e && (t.current = e)(s);
      t.block && (t.blocks ? t.blocks.forEach(function (e, n) {
        n !== i && e && (Se(), Ce(e, 1, 1, function () {
          t.blocks[n] = null;
        }), ye());
      }) : t.block.d(1), l.c(), _e(l, 1), l.m(t.mount(), t.anchor), ge()), t.block = l, t.blocks && (t.blocks[i] = l);
    }

    if ((r = e) && "object" == _typeof(r) && "function" == typeof r.then) {
      var _n6 = J();

      if (e.then(function (e) {
        K(_n6), i(t.then, 1, t.value, e), K(null);
      }, function (e) {
        K(_n6), i(t["catch"], 2, t.error, e), K(null);
      }), t.current !== t.pending) return i(t.pending, 0), !0;
    } else {
      if (t.current !== t.then) return i(t.then, 1, t.value, e), !0;
      t.resolved = _defineProperty({}, t.value, e);
    }

    var r;
  }

  var Ne = "undefined" != typeof window ? window : __webpack_require__.g;
  var $e;

  function Pe(e, t, n) {
    -1 !== e.$$.props.indexOf(t) && (e.$$.bound[t] = n, n(e.$$.ctx[t]));
  }

  function Ee(e, t, n) {
    var _e$$$ = e.$$,
        i = _e$$$.fragment,
        r = _e$$$.on_mount,
        o = _e$$$.on_destroy,
        s = _e$$$.after_update;
    i.m(t, n), pe(function () {
      var t = r.map(a).filter(c);
      o ? o.push.apply(o, _toConsumableArray(t)) : l(t), e.$$.on_mount = [];
    }), s.forEach(pe);
  }

  function Le(e, t) {
    e.$$.fragment && (l(e.$$.on_destroy), e.$$.fragment.d(t), e.$$.on_destroy = e.$$.fragment = null, e.$$.ctx = {});
  }

  function Re(e, t, n, r, o, a) {
    var c = G;
    K(e);
    var d = t.props || {},
        u = e.$$ = {
      fragment: null,
      ctx: null,
      props: a,
      update: i,
      not_equal: o,
      bound: s(),
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(c ? c.$$.context : []),
      callbacks: s(),
      dirty: null
    };
    var p = !1;
    var f;
    u.ctx = n ? n(e, d, function (t, n) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
      return u.ctx && o(u.ctx[t], u.ctx[t] = i) && (u.bound[t] && u.bound[t](i), p && function (e, t) {
        e.$$.dirty || (re.push(e), ue(), e.$$.dirty = s()), e.$$.dirty[t] = !0;
      }(e, t)), n;
    }) : d, u.update(), p = !0, l(u.before_update), u.fragment = r(u.ctx), t.target && (t.hydrate ? u.fragment.l((f = t.target, Array.from(f.childNodes))) : u.fragment.c(), t.intro && _e(e.$$.fragment), Ee(e, t.target, t.anchor), ge()), K(c);
  }

  "undefined" != typeof HTMLElement && ($e = /*#__PURE__*/function (_HTMLElement) {
    _inherits($e, _HTMLElement);

    var _super = _createSuper($e);

    function $e() {
      var _this;

      _classCallCheck(this, $e);

      _this = _super.call(this), _this.attachShadow({
        mode: "open"
      });
      return _this;
    }

    _createClass($e, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        for (var _e7 in this.$$.slotted) {
          this.appendChild(this.$$.slotted[_e7]);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(e, t, n) {
        this[e] = n;
      }
    }, {
      key: "$destroy",
      value: function $destroy() {
        Le(this, 1), this.$destroy = i;
      }
    }, {
      key: "$on",
      value: function $on(e, t) {
        var n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return n.push(t), function () {
          var e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {}
    }]);

    return $e;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));

  var Ae = /*#__PURE__*/function () {
    function Ae() {
      _classCallCheck(this, Ae);
    }

    _createClass(Ae, [{
      key: "$destroy",
      value: function $destroy() {
        Le(this, 1), this.$destroy = i;
      }
    }, {
      key: "$on",
      value: function $on(e, t) {
        var n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return n.push(t), function () {
          var e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {}
    }]);

    return Ae;
  }();

  var De = new ( /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.handles = {}, this.keyExistencyTimeout = 2e4, this.keyExistencyCheckInterval = 50;
    }

    _createClass(_class, [{
      key: "waitForKeyExistency",
      value: function waitForKeyExistency(e, t) {
        var _this2 = this;

        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.keyExistencyTimeout;
        var i = Date.now();
        return new Promise(function (r, o) {
          _this2.handles[t] = setInterval(function () {
            return e[t] ? r(!0) : Date.now() - i > n ? (clearInterval(_this2.handles[t]), o("".concat(t, " did not appear in object within ").concat(n / 1e3, " seconds."))) : void 0;
          }, _this2.keyExistencyCheckInterval);
        });
      }
    }, {
      key: "wrapAsPromise",
      value: function wrapAsPromise(e) {
        return new Promise(function (t) {
          t(e);
        });
      }
    }, {
      key: "applyFunctionPromisified",
      value: function applyFunctionPromisified(e, t) {
        return e = e.apply(this, t), Lt.isPromise(e) ? e : this.wrapAsPromise(e);
      }
    }, {
      key: "getConfigValueFromObjectAsync",
      value: function getConfigValueFromObjectAsync(e, t) {
        var i = Lt.getConfigValueFromObject(e, t);

        for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          n[_key - 2] = arguments[_key];
        }

        return Lt.isFunction(i) ? this.applyFunctionPromisified(i, n) : this.wrapAsPromise(i);
      }
    }]);

    return _class;
  }())();
  var Oe = new ( /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }

    _createClass(_class2, [{
      key: "convertCustomMessageInternalToUser",
      value: function convertCustomMessageInternalToUser(e) {
        return e.data;
      }
    }, {
      key: "convertCustomMessageUserToInternal",
      value: function convertCustomMessageUserToInternal(e) {
        return {
          msg: "custom",
          data: e
        };
      }
    }]);

    return _class2;
  }())();
  var Ve = new ( /*#__PURE__*/function () {
    function _class3() {
      _classCallCheck(this, _class3);

      this.configReadyCallback = function () {}, this.initialized = !1, this.USER_SETTINGS_KEY = "luigi.preferences.userSettings";
    }

    _createClass(_class3, [{
      key: "setConfigCallbacks",
      value: function setConfigCallbacks(e) {
        this.configReadyCallback = e;
      }
    }, {
      key: "setConfig",
      value: function () {
        var _setConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var _this3 = this;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.config = e, window.Luigi._store.update(function () {
                    return {
                      config: e
                    };
                  }), this._configModificationTimestamp = new Date(), this.initialized || (this.initialized = !0, this.configReadyCallback().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            It.luigiAfterInit();
                            _context.next = 3;
                            return _this3.executeConfigFnAsync("lifecycleHooks.luigiAfterInit");

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }))));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function setConfig(_x) {
          return _setConfig.apply(this, arguments);
        }

        return setConfig;
      }()
    }, {
      key: "getConfig",
      value: function getConfig() {
        return this.config;
      }
    }, {
      key: "configChanged",
      value: function configChanged() {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        var t = Ot.optimizeScope(e);
        t.length > 0 ? t.forEach(function (e) {
          window.Luigi._store.fire(e, {
            current: window.Luigi._store
          });
        }) : window.Luigi._store.update(function (e) {
          return e;
        });
      }
    }, {
      key: "setErrorMessage",
      value: function setErrorMessage(e) {
        var t = document.createTextNode(e),
            n = document.createElement("div");
        n.setAttribute("class", "fd-ui"), n.setAttribute("style", "text-align: center;");
        var i = document.createElement("div");
        i.setAttribute("class", "fd-message-strip fd-message-strip--error"), i.setAttribute("style", "max-width: 800px; display: inline-block; margin-top: 40px;"), i.appendChild(t), n.appendChild(i), at.getLuigiContainer().appendChild(n);
      }
    }, {
      key: "getConfigValue",
      value: function getConfigValue(e) {
        return Lt.getConfigValueFromObject(this.getConfig(), e);
      }
    }, {
      key: "getConfigBooleanValue",
      value: function getConfigBooleanValue(e) {
        var t = Lt.getConfigValueFromObject(this.getConfig(), e);
        return !0 === t || "true" === t;
      }
    }, {
      key: "getConfigValueAsync",
      value: function getConfigValueAsync(e) {
        for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          t[_key3 - 1] = arguments[_key3];
        }

        return De.getConfigValueFromObjectAsync(this.getConfig(), e, t);
      }
    }, {
      key: "executeConfigFnAsync",
      value: function () {
        var _executeConfigFnAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
          var t,
              i,
              _len4,
              n,
              _key4,
              _args3 = arguments;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  t = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : !1;
                  i = this.getConfigValue(e);

                  if (!Lt.isFunction(i)) {
                    _context3.next = 14;
                    break;
                  }

                  _context3.prev = 3;

                  for (_len4 = _args3.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                    n[_key4 - 2] = _args3[_key4];
                  }

                  _context3.next = 7;
                  return De.applyFunctionPromisified(i, n);

                case 7:
                  return _context3.abrupt("return", _context3.sent);

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](3);

                  if (!t) {
                    _context3.next = 14;
                    break;
                  }

                  return _context3.abrupt("return", Promise.reject(_context3.t0));

                case 14:
                  return _context3.abrupt("return", Promise.resolve(void 0));

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[3, 10]]);
        }));

        function executeConfigFnAsync(_x2) {
          return _executeConfigFnAsync.apply(this, arguments);
        }

        return executeConfigFnAsync;
      }()
    }, {
      key: "isAuthorizationEnabled",
      value: function isAuthorizationEnabled() {
        return ot.isAuthorizationEnabled();
      }
    }, {
      key: "unload",
      value: function unload() {
        this.initialized = !1, Nt.unload(), Vt.removeAllEventListeners();
        var e = at.getLuigiContainer();

        for (; e.firstChild;) {
          e.removeChild(e.lastChild);
        }
      }
    }, {
      key: "readUserSettings",
      value: function () {
        var _readUserSettings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var e, t, n;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.getConfigValueAsync("userSettings");

                case 2:
                  e = _context4.sent;
                  _context4.t0 = e;

                  if (_context4.t0) {
                    _context4.next = 8;
                    break;
                  }

                  _context4.next = 7;
                  return this.getConfigValueAsync("settings.userSettings");

                case 7:
                  _context4.t0 = _context4.sent;

                case 8:
                  t = _context4.t0;

                  if (!(t && Lt.isFunction(t.readUserSettings))) {
                    _context4.next = 11;
                    break;
                  }

                  return _context4.abrupt("return", t.readUserSettings());

                case 11:
                  n = localStorage.getItem(this.USER_SETTINGS_KEY);
                  return _context4.abrupt("return", n && JSON.parse(n));

                case 13:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function readUserSettings() {
          return _readUserSettings.apply(this, arguments);
        }

        return readUserSettings;
      }()
    }, {
      key: "storeUserSettings",
      value: function () {
        var _storeUserSettings = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t) {
          var n, i;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.getConfigValueAsync("userSettings");

                case 2:
                  n = _context5.sent;
                  _context5.t0 = n;

                  if (_context5.t0) {
                    _context5.next = 8;
                    break;
                  }

                  _context5.next = 7;
                  return this.getConfigValueAsync("settings.userSettings");

                case 7:
                  _context5.t0 = _context5.sent;

                case 8:
                  i = _context5.t0;

                  if (!(i && Lt.isFunction(i.storeUserSettings))) {
                    _context5.next = 11;
                    break;
                  }

                  return _context5.abrupt("return", i.storeUserSettings(e, t));

                case 11:
                  localStorage.setItem(this.USER_SETTINGS_KEY, JSON.stringify(e)), this.configChanged();

                case 12:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function storeUserSettings(_x3, _x4) {
          return _storeUserSettings.apply(this, arguments);
        }

        return storeUserSettings;
      }()
    }]);

    return _class3;
  }())();
  var Me = new ( /*#__PURE__*/function () {
    function _class4() {
      _classCallCheck(this, _class4);
    }

    _createClass(_class4, [{
      key: "isAuthorizationEnabled",
      value: function isAuthorizationEnabled() {
        return !!rt.getConfigValue("auth.use");
      }
    }, {
      key: "login",
      value: function login() {
        this.isAuthorizationEnabled() && Nt.startAuthorization();
      }
    }, {
      key: "logout",
      value: function logout() {
        this.isAuthorizationEnabled() && Nt.logout();
      }
    }, {
      key: "handleAuthEvent",
      value: function () {
        var _handleAuthEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e, t, n, i) {
          var r, o;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return rt.executeConfigFnAsync("auth.events." + e, !1, t, n);

                case 2:
                  r = _context6.sent;
                  o = void 0 === r || !!r;

                  if (!(!o || !i)) {
                    _context6.next = 6;
                    break;
                  }

                  return _context6.abrupt("return", o);

                case 6:
                  window.location.href = i;

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        function handleAuthEvent(_x5, _x6, _x7, _x8) {
          return _handleAuthEvent.apply(this, arguments);
        }

        return handleAuthEvent;
      }()
    }, {
      key: "store",
      get: function get() {
        return rt.initialized || console.warn("Luigi Core is not initialized yet. Consider moving your code to the luigiAfterInit lifecycle hook. Documentation: https://docs.luigi-project.io/docs/lifecycle-hooks"), {
          getStorageKey: function getStorageKey() {
            return Tt.getStorageKey();
          },
          getStorageType: function getStorageType() {
            return Tt.getStorageType();
          },
          getAuthData: function getAuthData() {
            return Tt.getAuthData();
          },
          setAuthData: function setAuthData(e) {
            return Tt.setAuthData(e);
          },
          removeAuthData: function removeAuthData() {
            return Tt.removeAuthData();
          },
          setNewlyAuthorized: function setNewlyAuthorized() {
            return Tt.setNewlyAuthorized();
          }
        };
      }
    }]);

    return _class4;
  }())(),
      Fe = {
    desktopMinWidth: 600
  },
      Ue = [{
    type: "main",
    selector: ".iframeContainer iframe"
  }, {
    type: "split-view",
    selector: ".iframeSplitViewCnt iframe"
  }, {
    type: "modal",
    selector: ".iframeModalCtn._modal iframe"
  }, {
    type: "drawer",
    selector: ".iframeModalCtn._drawer iframe"
  }, {
    type: "user-settings",
    selector: ".iframeUserSettingsCtn iframe"
  }],
      je = {
    cssSelector: "[luigi-app-root]"
  },
      Be = {
    cssSelector: "[luigi-app-loading-indicator]"
  };
  var Ge = new ( /*#__PURE__*/function () {
    function _class5() {
      _classCallCheck(this, _class5);
    }

    _createClass(_class5, [{
      key: "getLuigiContainer",
      value: function getLuigiContainer() {
        return this.getCustomLuigiContainer() || this.getDefaultLuigiContainer();
      }
    }, {
      key: "isCustomLuigiContainer",
      value: function isCustomLuigiContainer() {
        return Boolean(this.getLuigiContainer() === this.getCustomLuigiContainer());
      }
    }, {
      key: "getCustomLuigiContainer",
      value: function getCustomLuigiContainer() {
        return document.querySelector(je.cssSelector);
      }
    }, {
      key: "getDefaultLuigiContainer",
      value: function getDefaultLuigiContainer() {
        return document.querySelector("body");
      }
    }, {
      key: "getShellbar",
      value: function getShellbar() {
        return document.getElementsByClassName("fd-shellbar")[0];
      }
    }, {
      key: "getShellbarActions",
      value: function getShellbarActions() {
        return document.getElementsByClassName("fd-shellbar__group--actions")[0];
      }
    }, {
      key: "getMicrofrontends",
      value: function getMicrofrontends() {
        return Rt.getMicrofrontendsInDom();
      }
    }, {
      key: "getMicrofrontendIframes",
      value: function getMicrofrontendIframes() {
        return Rt.getMicrofrontendIframes();
      }
    }, {
      key: "getCurrentMicrofrontendIframe",
      value: function getCurrentMicrofrontendIframe() {
        return Rt.getCurrentMicrofrontendIframe();
      }
    }]);

    return _class5;
  }())();

  var ze = /*#__PURE__*/function () {
    function ze() {
      _classCallCheck(this, ze);

      this.promises = {};
    }

    _createClass(ze, [{
      key: "setPromise",
      value: function setPromise(e, t) {
        this.promises[e] = t;
      }
    }, {
      key: "getPromise",
      value: function getPromise(e) {
        return this.promises[e];
      }
    }]);

    return ze;
  }();

  var We = /*#__PURE__*/function (_ze) {
    _inherits(We, _ze);

    var _super2 = _createSuper(We);

    function We(e) {
      var _this4;

      _classCallCheck(this, We);

      _this4 = _super2.call(this), Object.assign(_assertThisInitialized(_this4), e), _this4.options = {
        preserveView: !1,
        nodeParams: {},
        errorSkipNavigation: !1,
        fromContext: null,
        fromClosestContext: !1,
        relative: !1,
        link: ""
      };
      return _this4;
    }

    _createClass(We, [{
      key: "navigate",
      value: function navigate(e, t, n, i, r) {
        if (this.options.errorSkipNavigation) return void (this.options.errorSkipNavigation = !1);
        this.options.preserveView = t;
        var o = "/" !== e[0],
            a = {
          msg: "luigi.navigation.open",
          params: Object.assign(this.options, {
            link: e,
            relative: o,
            modal: n,
            splitView: i,
            drawer: r
          })
        };
        this.sendPostMessageToLuigiCore(a);
      }
    }, {
      key: "openAsModal",
      value: function openAsModal(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.navigate(e, !0, t);
      }
    }, {
      key: "openAsDrawer",
      value: function openAsDrawer(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.navigate(e, !0, void 0, void 0, t);
      }
    }, {
      key: "fromContext",
      value: function fromContext(e) {
        return this.options.fromContext = e, this;
      }
    }, {
      key: "fromClosestContext",
      value: function fromClosestContext() {
        return this.options.fromContext = null, this.options.fromClosestContext = !0, this;
      }
    }, {
      key: "fromVirtualTreeRoot",
      value: function fromVirtualTreeRoot() {
        return this.options.fromContext = null, this.options.fromClosestContext = !1, this.options.fromVirtualTreeRoot = !0, this;
      }
    }, {
      key: "withParams",
      value: function withParams(e) {
        return e && Object.assign(this.options.nodeParams, e), this;
      }
    }, {
      key: "pathExists",
      value: function pathExists(e) {
        if (Lt.isFunction(Luigi.pathExists)) return Luigi.pathExists(e);
        console.error("Luigi.navigation().pathExists(path) is only available inside your configuration, after the configuration was initialized with Luigi.setConfig().");
      }
    }, {
      key: "hasBack",
      value: function hasBack() {
        return Luigi.hasBack();
      }
    }, {
      key: "goBack",
      value: function goBack(e) {
        this.sendPostMessageToLuigiCore({
          msg: "luigi.navigation.back",
          goBackContext: e && JSON.stringify(e)
        });
      }
    }, {
      key: "sendPostMessageToLuigiCore",
      value: function sendPostMessageToLuigiCore(e) {
        window.postMessage(e, "*");
      }
    }]);

    return We;
  }(ze);

  var He = new ( /*#__PURE__*/function () {
    function _class6() {
      _classCallCheck(this, _class6);
    }

    _createClass(_class6, [{
      key: "updateTopNavigation",
      value: function updateTopNavigation() {
        window.postMessage({
          msg: "luigi.navigation.update-badge-counters"
        }, "*");
      }
    }, {
      key: "navigate",
      value: function navigate(e, t, n, i, r) {
        return new We().navigate(e, t, n, i, r);
      }
    }, {
      key: "openAsModal",
      value: function openAsModal(e, t) {
        return new We().openAsModal(e, t);
      }
    }, {
      key: "openAsSplitView",
      value: function openAsSplitView(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Luigi.splitView.openAsSplitView(e, t), Luigi.splitView.splitViewHandle;
      }
    }, {
      key: "openAsDrawer",
      value: function openAsDrawer(e, t) {
        return new We().openAsDrawer(e, t);
      }
    }, {
      key: "fromContext",
      value: function fromContext(e) {
        return new We().fromContext(e);
      }
    }, {
      key: "fromClosestContext",
      value: function fromClosestContext() {
        return new We().fromClosestContext();
      }
    }, {
      key: "fromVirtualTreeRoot",
      value: function fromVirtualTreeRoot() {
        return new We().fromVirtualTreeRoot();
      }
    }, {
      key: "withParams",
      value: function withParams(e) {
        return new We().withParams(e);
      }
    }, {
      key: "pathExists",
      value: function pathExists(e) {
        return new We().pathExists(e);
      }
    }, {
      key: "hasBack",
      value: function hasBack() {
        return new We().hasBack();
      }
    }, {
      key: "goBack",
      value: function goBack(e) {
        return new We().goBack(e);
      }
    }]);

    return _class6;
  }())(),
      qe = {
    luigi: {
      unsavedChangesAlert: {
        header: "Unsaved changes detected",
        body: "Unsaved changes will be lost. Do you want to continue?"
      },
      confirmationModal: {
        header: "Confirmation",
        body: "Are you sure you want to do this?"
      },
      button: {
        dismiss: "No",
        confirm: "Yes"
      },
      requestedRouteNotFound: "Could not find the requested route {route}.",
      notExactTargetNode: "Could not map the exact target node for the requested route {route}."
    }
  };
  var Ke = new ( /*#__PURE__*/function () {
    function _class7() {
      _classCallCheck(this, _class7);

      this.currentLocaleStorageKey = "luigi.currentLocale", this.defaultLocale = "en", this.translationTable = qe, this.listeners = {};
    }

    _createClass(_class7, [{
      key: "_init",
      value: function _init() {
        var _this5 = this;

        Ot.doOnStoreChange(window.Luigi._store, function () {
          _this5._initCustomImplementation();
        }, ["settings"]);
      }
    }, {
      key: "getCurrentLocale",
      value: function getCurrentLocale() {
        return sessionStorage.getItem(this.currentLocaleStorageKey) || this.defaultLocale;
      }
    }, {
      key: "setCurrentLocale",
      value: function setCurrentLocale(e) {
        e && (sessionStorage.setItem(this.currentLocaleStorageKey, e), this._notifyLocaleChange(e));
      }
    }, {
      key: "addCurrentLocaleChangeListener",
      value: function addCurrentLocaleChangeListener(e) {
        if (Lt.isFunction(e)) {
          var _t4 = Lt.getRandomId();

          return this.listeners[_t4] = e, _t4;
        }

        console.error("Provided locale change listener is not a function.");
      }
    }, {
      key: "removeCurrentLocaleChangeListener",
      value: function removeCurrentLocaleChangeListener(e) {
        e && this.listeners[e] ? delete this.listeners[e] : console.error("Unable to remove locale change listener - no listener registered for given ID.");
      }
    }, {
      key: "_notifyLocaleChange",
      value: function _notifyLocaleChange(e) {
        var _this6 = this;

        Object.getOwnPropertyNames(this.listeners).forEach(function (t) {
          _this6.listeners[t](e);
        }), Ve.configChanged();
      }
    }, {
      key: "_initCustomImplementation",
      value: function _initCustomImplementation() {
        this.translationImpl = Ve.getConfigValue("settings.customTranslationImplementation"), Lt.isFunction(this.translationImpl) && (this.translationImpl = this.translationImpl());
      }
    }, {
      key: "getTranslation",
      value: function getTranslation(e, t, n) {
        if (!e) return "";

        if (this.translationImpl) {
          var _i4 = this.translationImpl.getTranslation(e, t, n);

          if (_i4 !== e) return _i4;
        }

        var i = this.findTranslation(e, this.translationTable, t);
        return i || e;
      }
    }, {
      key: "findTranslation",
      value: function findTranslation(e, t, n) {
        var i = e.split(".");

        for (var _e8 = 0; _e8 < i.length; _e8++) {
          var _r3 = i[_e8];
          if (!t.hasOwnProperty(_r3) || "object" != _typeof(t[_r3])) return n ? this.findInterpolations(t[_r3], n) : t[_r3];
          t = t[_r3];
        }
      }
    }, {
      key: "findInterpolations",
      value: function findInterpolations(e, t) {
        return Object.keys(t).forEach(function (n) {
          e = e.replace(new RegExp("{" + Et.escapeKeyForRegexp(n) + "}", "gi"), t[n]);
        }), e;
      }
    }]);

    return _class7;
  }())();
  var Je = new ( /*#__PURE__*/function () {
    function _class8() {
      _classCallCheck(this, _class8);
    }

    _createClass(_class8, [{
      key: "sendToAll",
      value: function sendToAll(e) {
        var t = Oe.convertCustomMessageUserToInternal(e);
        Rt.getMicrofrontendsInDom().map(function (e) {
          return e.container;
        }).map(function (e) {
          return Rt.sendMessageToIframe(e, t);
        });
      }
    }, {
      key: "send",
      value: function send(e, t) {
        var n = Oe.convertCustomMessageUserToInternal(t);
        Rt.getMicrofrontendsInDom().filter(function (t) {
          return t.id === e;
        }).map(function (e) {
          return e.container;
        }).map(function (e) {
          return Rt.sendMessageToIframe(e, n);
        });
      }
    }]);

    return _class8;
  }())(),
      Ye = [];

  function Qe(e, t) {
    return {
      subscribe: Xe(e, t).subscribe
    };
  }

  function Xe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i;
    var n;
    var r = [];

    function o(t) {
      if (d(e, t) && (e = t, n)) {
        var _t5 = !Ye.length;

        for (var _t6 = 0; _t6 < r.length; _t6 += 1) {
          var _n7 = r[_t6];
          _n7[1](), Ye.push(_n7, e);
        }

        if (_t5) {
          for (var _e9 = 0; _e9 < Ye.length; _e9 += 2) {
            Ye[_e9][0](Ye[_e9 + 1]);
          }

          Ye.length = 0;
        }
      }
    }

    return {
      set: o,
      update: function update(t) {
        o(t(e));
      },
      subscribe: function subscribe(a) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i;
        var l = [a, s];
        return r.push(l), 1 === r.length && (n = t(o) || i), a(e), function () {
          var e = r.indexOf(l);
          -1 !== e && r.splice(e, 1), 0 === r.length && (n(), n = null);
        };
      }
    };
  }

  var Ze = new ( /*#__PURE__*/function () {
    function _class9() {
      _classCallCheck(this, _class9);
    }

    _createClass(_class9, [{
      key: "initial",
      value: function initial() {
        this.responsiveNavSetting = rt.getConfigValue("settings.responsiveNavigation");
        var e = "semiCollapsible" === this.responsiveNavSetting || "Fiori3" === this.responsiveNavSetting;
        !1 !== JSON.parse(localStorage.getItem(At.COL_NAV_KEY)) && e && (this.isSemiCollapsed = this.getCollapsed()), this.semiCollapsible = !!e;
        var t = void 0 === this.isSemiCollapsed;
        return this.semiCollapsible && 0 !== window.innerWidth && window.innerWidth < Fe.desktopMinWidth ? this.isSemiCollapsed = !!t || this.getCollapsed() : this.isSemiCollapsed = !t && this.getCollapsed(), this.setCollapsed(this.isSemiCollapsed), this.previousWindowWidth = window.innerWidth, {
          isSemiCollapsed: this.isSemiCollapsed,
          semiCollapsible: this.semiCollapsible
        };
      }
    }, {
      key: "onValueChanged",
      value: function onValueChanged(e) {
        this.valueChangedFns ? this.valueChangedFns.push(e) : this.valueChangedFns = [e];
      }
    }, {
      key: "onResize",
      value: function onResize(e) {
        var t = 0 !== window.innerWidth && window.innerWidth < Fe.desktopMinWidth && this.previousWindowWidth >= Fe.desktopMinWidth,
            n = 0 !== window.innerWidth && window.innerWidth > Fe.desktopMinWidth && this.previousWindowWidth >= Fe.desktopMinWidth;
        return t && this.setCollapsed(!0, !1), !this.isStoredCollapsed() && n && this.setCollapsed(!1, !1), e = this.closePopupMenu(e), {
          isSemiCollapsed: this.isSemiCollapsed,
          selectedCategory: e
        };
      }
    }, {
      key: "setCollapsed",
      value: function setCollapsed(e) {
        var _this7 = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        document.body.classList.remove("semiCollapsed"), e && document.body.classList.add("semiCollapsed"), this.isSemiCollapsed = e, t && localStorage.setItem(At.COL_NAV_KEY, e), this.valueChangedFns instanceof Array && this.valueChangedFns.forEach(function (e) {
          return e({
            isSemiCollapsed: _this7.isSemiCollapsed
          });
        });
      }
    }, {
      key: "isStoredCollapsed",
      value: function isStoredCollapsed() {
        return JSON.parse(localStorage.getItem(At.COL_NAV_KEY));
      }
    }, {
      key: "getCollapsed",
      value: function getCollapsed() {
        return !!this.isStoredCollapsed() || this.isSemiCollapsed;
      }
    }, {
      key: "closePopupMenu",
      value: function closePopupMenu(e) {
        return e && (e = null, document.getElementsByClassName("fd-app__sidebar")[0].classList.remove("isBlocked")), e;
      }
    }, {
      key: "buttonClicked",
      value: function buttonClicked(e) {
        return this.closePopupMenu(), this.getCollapsed() ? this.setCollapsed(!1) : (this.setCollapsed(!0), document.getElementsByClassName("lui-fd-side-nav-wrapper")[0].setAttribute("style", "overflow-y:hidden;"), window.setTimeout(function () {
          document.getElementsByClassName("lui-fd-side-nav-wrapper")[0].setAttribute("style", "overflow-y:auto;");
        })), this.isSemiCollapsed;
      }
    }]);

    return _class9;
  }())();
  var et = new ( /*#__PURE__*/function () {
    function _class10() {
      _classCallCheck(this, _class10);

      this.documentTitle = Xe();
    }

    _createClass(_class10, [{
      key: "hideAppLoadingIndicator",
      value: function hideAppLoadingIndicator() {
        var e = document.querySelector(Be.cssSelector);
        e && (e.classList.add("hidden"), setTimeout(function () {
          e.parentNode && e.parentNode.removeChild(e);
        }, 500));
      }
    }, {
      key: "showAlert",
      value: function showAlert(e) {
        if (Lt.isFunction(Luigi.showAlert)) return Luigi.showAlert(e);
        console.error("Luigi.ux().showAlert() is only available inside your configuration, after the configuration was initialized with Luigi.setConfig().");
      }
    }, {
      key: "showConfirmationModal",
      value: function showConfirmationModal(e) {
        if (Lt.isFunction(Luigi.showConfirmationModal)) return Luigi.showConfirmationModal(e);
        console.error("Luigi.ux().showConfirmationModal() is only available inside your configuration, after the configuration was initialized with Luigi.setConfig().");
      }
    }, {
      key: "setDocumentTitle",
      value: function setDocumentTitle(e) {
        this.documentTitle.set(e), Luigi.configChanged("settings.header");
      }
    }, {
      key: "getDocumentTitle",
      value: function getDocumentTitle() {
        return p(this.documentTitle);
      }
    }, {
      key: "collapseLeftSideNav",
      value: function collapseLeftSideNav(e) {
        Ze.setCollapsed(e);
      }
    }, {
      key: "openUserSettings",
      value: function openUserSettings() {
        Luigi.openUserSettings();
      }
    }, {
      key: "closeUserSettings",
      value: function closeUserSettings() {
        Luigi.closeUserSettings();
      }
    }]);

    return _class10;
  }())();
  var tt = new ( /*#__PURE__*/function () {
    function _class11() {
      _classCallCheck(this, _class11);
    }

    _createClass(_class11, [{
      key: "openSearchField",
      value: function openSearchField() {
        Luigi.openSearchField();
      }
    }, {
      key: "closeSearchField",
      value: function closeSearchField() {
        Luigi.closeSearchField();
      }
    }, {
      key: "clearSearchField",
      value: function clearSearchField() {
        Luigi.clearSearchField();
      }
    }, {
      key: "showSearchResult",
      value: function showSearchResult(e) {
        Luigi.showSearchResult(e);
      }
    }, {
      key: "closeSearchResult",
      value: function closeSearchResult() {
        Luigi.closeSearchResult();
      }
    }, {
      key: "getSearchString",
      value: function getSearchString() {
        return Luigi.getGlobalSearchString();
      }
    }, {
      key: "setSearchString",
      value: function setSearchString(e) {
        Luigi.setGlobalSearchString(e);
      }
    }, {
      key: "setSearchInputPlaceholder",
      value: function setSearchInputPlaceholder(e) {
        Luigi.setSearchInputPlaceholder(e);
      }
    }]);

    return _class11;
  }())();
  var nt = new ( /*#__PURE__*/function () {
    function _class12() {
      _classCallCheck(this, _class12);

      this.currentTheme;
    }

    _createClass(_class12, [{
      key: "getAvailableThemes",
      value: function () {
        var _getAvailableThemes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return rt.getConfigValueAsync("settings.theming.themes");

                case 2:
                  return _context7.abrupt("return", _context7.sent);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        function getAvailableThemes() {
          return _getAvailableThemes.apply(this, arguments);
        }

        return getAvailableThemes;
      }()
    }, {
      key: "setCurrentTheme",
      value: function setCurrentTheme(e) {
        this.currentTheme = e;
      }
    }, {
      key: "getThemeObject",
      value: function () {
        var _getThemeObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.getAvailableThemes();

                case 2:
                  t = _context8.sent;
                  return _context8.abrupt("return", t && t.find(function (t) {
                    return t.id === e;
                  }));

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function getThemeObject(_x9) {
          return _getThemeObject.apply(this, arguments);
        }

        return getThemeObject;
      }()
    }, {
      key: "getCurrentTheme",
      value: function getCurrentTheme() {
        if (!this.isThemingAvailable()) return !1;
        if (this.currentTheme) return this.currentTheme;
        var e = rt.getConfigValue("settings.theming");
        return e.defaultTheme || console.error("[Theming] getCurrentTheme() error. No theme set and no defaultTheme found in configuration", e), e.defaultTheme;
      }
    }, {
      key: "isThemingAvailable",
      value: function isThemingAvailable() {
        return !!rt.getConfigValue("settings.theming");
      }
    }, {
      key: "_init",
      value: function _init() {
        var _this8 = this;

        var e = function e() {
          var e = rt.getConfigValue("settings.theming");
          e && e.nodeViewURLDecorator && e.nodeViewURLDecorator.queryStringParameter && $t.add({
            type: "queryString",
            uid: "theming",
            key: e.nodeViewURLDecorator.queryStringParameter.keyName,
            valueFn: function valueFn() {
              var t = _this8.getCurrentTheme(),
                  n = e.nodeViewURLDecorator.queryStringParameter.value;

              return n ? n(t) : t;
            }
          });
        };

        Ot.doOnStoreChange(window.Luigi._store, function () {
          e();
        }, ["settings.theming"]);
      }
    }]);

    return _class12;
  }())();
  var it = new ( /*#__PURE__*/function () {
    function _class13() {
      _classCallCheck(this, _class13);

      this.featureToggleList = Xe([]);
    }

    _createClass(_class13, [{
      key: "setFeatureToggle",
      value: function setFeatureToggle(e) {
        e && "string" == typeof e ? p(this.featureToggleList).includes(e) ? console.warn("Feature toggle name already exists") : p(this.featureToggleList).push(e) : console.warn("Feature toggle name is empty or not a type of string");
      }
    }, {
      key: "unsetFeatureToggle",
      value: function unsetFeatureToggle(e) {
        if (e && "string" == typeof e) {
          if (p(this.featureToggleList).includes(e)) {
            var _t7 = p(this.featureToggleList).indexOf(e);

            _t7 > -1 && p(this.featureToggleList).splice(_t7, 1);
          } else console.warn("Feature toggle name is not in the list.");
        } else console.warn("Feature toggle name is empty or not a type of string");
      }
    }, {
      key: "getActiveFeatureToggleList",
      value: function getActiveFeatureToggleList() {
        return _toConsumableArray(p(this.featureToggleList));
      }
    }]);

    return _class13;
  }())(),
      rt = Ve,
      ot = Me,
      at = Ge,
      st = Ke,
      lt = et,
      ct = tt,
      dt = nt,
      ut = it;
  window.Luigi = Ve, window.Luigi.auth = function () {
    return Me;
  }, window.Luigi.elements = function () {
    return Ge;
  }, window.Luigi.navigation = function () {
    return He;
  }, window.Luigi.i18n = function () {
    return Ke;
  }, window.Luigi.customMessages = function () {
    return Je;
  }, window.Luigi.ux = function () {
    return et;
  }, window.Luigi.globalSearch = function () {
    return tt;
  }, window.Luigi.theming = function () {
    return nt;
  }, window.Luigi.featureToggles = function () {
    return it;
  };
  var pt = new ( /*#__PURE__*/function () {
    function _class14() {
      _classCallCheck(this, _class14);

      this.iframeNavFallbackTimeout = 2e3, this.timeoutHandle;
    }

    _createClass(_class14, [{
      key: "getActiveIframe",
      value: function getActiveIframe(e) {
        return _toConsumableArray(e.children).filter(function (e) {
          return "IFRAME" === e.tagName;
        }).find(Lt.isElementVisible);
      }
    }, {
      key: "setActiveIframeToPrevious",
      value: function setActiveIframeToPrevious(e) {
        var t = Rt.getMainIframes(),
            n = this.getPreservedViewsInDom(t);
        if (0 === n.length) return;
        var i = this.getActiveIframe(e);
        Rt.hideElementChildren(e), i && e.removeChild(i), n[0].pv = void 0, n[0].style.display = "block";
      }
    }, {
      key: "removeInactiveIframes",
      value: function removeInactiveIframes(e) {
        Array.from(e.children).forEach(function (t) {
          Lt.isElementVisible(t) || t.vg || "IFRAME" !== t.tagName || e.removeChild(t);
        });
      }
    }, {
      key: "hasIsolatedView",
      value: function hasIsolatedView(e, t, n) {
        return e || n && !(!1 === e) && !t;
      }
    }, {
      key: "getPreservedViewsInDom",
      value: function getPreservedViewsInDom(e) {
        return e.filter(function (e) {
          return e.pv;
        });
      }
    }, {
      key: "getAllViewGroupSettings",
      value: function getAllViewGroupSettings() {
        return rt.getConfigValue("navigation.viewGroupSettings");
      }
    }, {
      key: "getViewGroupSettings",
      value: function getViewGroupSettings(e) {
        var t = this.getAllViewGroupSettings();
        return e && t && t[e] ? t[e] : {};
      }
    }, {
      key: "canCache",
      value: function canCache(e) {
        var t = this.getViewGroupSettings(e);
        return t && t.preloadUrl;
      }
    }, {
      key: "notifyInactiveIframes",
      value: function notifyInactiveIframes() {
        var e = {
          msg: "luigi-client.inactive-microfrontend",
          context: JSON.stringify({}),
          nodeParams: JSON.stringify({}),
          pathParams: JSON.stringify({}),
          internal: JSON.stringify({
            currentLocale: st.getCurrentLocale()
          })
        };
        Rt.sendMessageToVisibleIframes(e);
      }
    }, {
      key: "switchActiveIframe",
      value: function switchActiveIframe(e, t, n) {
        var _this9 = this;

        var i = this.getActiveIframe(e);

        if (i !== t) {
          var _r4 = !1;

          Array.from(e.children).forEach(function (o) {
            if (o === i) if (n) e.removeChild(o);else {
              var _e10 = _this9.getViewGroupSettings(o.vg);

              if (_e10 && _this9.notifyInactiveIframes(), o.style.display = "none", _e10.preloadUrl) {
                var _t8 = {
                  msg: "luigi.navigate",
                  viewUrl: _e10.preloadUrl,
                  context: JSON.stringify({}),
                  nodeParams: JSON.stringify({}),
                  pathParams: JSON.stringify({}),
                  internal: JSON.stringify({
                    currentLocale: st.getCurrentLocale()
                  })
                };
                Rt.sendMessageToIframe(o, _t8);
              }
            }
            o === t && (_r4 = !0);
          }), t && (t.style.display = "block", _r4 || e.insertBefore(t, e.firstChild));
        }

        return t;
      }
    }, {
      key: "setOkResponseHandler",
      value: function setOkResponseHandler(e, t, n) {
        var _this10 = this;

        this.timeoutHandle = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  if (!e.navigateOk) {
                    _context9.next = 4;
                    break;
                  }

                  e.navigateOk = void 0;
                  _context9.next = 10;
                  break;

                case 4:
                  Rt.removeIframe(e.iframe, n);
                  e.iframe = void 0;
                  e.isFallbackFrame = !0;
                  console.info("navigate: luigi-client did not respond, using fallback by replacing iframe");
                  _context9.next = 10;
                  return _this10.navigateIframe(e, t, n);

                case 10:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })), this.iframeNavFallbackTimeout);
      }
    }, {
      key: "checkIframe",
      value: function checkIframe(e, t, n, i, r) {
        var _this11 = this;

        this.timeoutHandle = setTimeout(function () {
          t.get().showLoadingIndicator && (e.viewUrl ? (n = e.viewUrl, t.set({
            viewUrl: n
          }), _this11.iframeNavFallbackTimeout = 0, _this11.setOkResponseHandler(i, t, r)) : At.handleUnresponsiveClient(e));
        }, e.timeout);
      }
    }, {
      key: "initHandshakeFailed",
      value: function initHandshakeFailed(e) {
        if (!(e && e.iframe && e.iframe.luigi)) return !0;
        var t = e.iframe.luigi.clientVersion;
        return void 0 === e.iframe.luigi.initOk || !(!t || -1 !== Lt.semverCompare("1.1.1", t)) && !e.iframe.luigi.initOk;
      }
    }, {
      key: "navigateIframe",
      value: function () {
        var _navigateIframe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e, t, n) {
          var i, r, o, a, s, l, c, d, u, p, f, _t9, _e11, _o2, _a2, _o3, _a3, _s2;

          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  clearTimeout(this.timeoutHandle);
                  i = t.get();
                  r = i.viewUrl;
                  r && (r = Dt.substituteViewUrl(r, i));
                  o = Rt.isSameViewGroup(e, t), a = this.hasIsolatedView(i.previousNodeValues.isolateView, o, e.isolateAllViews), s = this.hasIsolatedView(i.isolateView, o, e.isolateAllViews), l = Rt.canReuseIframe(e, t);
                  c = this.getActiveIframe(n);
                  d = Rt.getMainIframes(), u = this.getPreservedViewsInDom(d);
                  p = void 0, f = !1;

                  if (u.length > 0 && (p = u.shift()) === c && (f = !0, c = void 0, e.iframe = void 0), !f && !t.get().isNavigateBack) {
                    if (c && a && (c = this.switchActiveIframe(n, void 0, !0)), c && s && (c = this.switchActiveIframe(n, void 0, !c.vg)), !s && i.viewGroup) {
                      _e11 = Rt.getMainIframes().filter(function (e) {
                        return e.vg === i.viewGroup;
                      });
                      _e11.length > 0 && (_t9 = _e11[0], c = this.switchActiveIframe(n, _t9, c && !c.vg));
                    }

                    c && !_t9 && (c.vg ? c = this.switchActiveIframe(n, void 0, !1) : l || (c = this.switchActiveIframe(n, void 0, !0))), e.iframe = c;
                  }

                  if (!(!e.iframe || this.initHandshakeFailed(e))) {
                    _context10.next = 13;
                    break;
                  }

                  if (e.iframe && n.removeChild(e.iframe), f ? (this.notifyInactiveIframes(), Rt.hideElementChildren(n)) : Rt.removeElementChildren(n), i.viewUrl) {
                    !1 !== Lt.getConfigValueFromObject(i, "currentNode.loadingIndicator.enabled") ? t.set({
                      showLoadingIndicator: !0
                    }) : t.set({
                      showLoadingIndicator: !1
                    }), e.navigateOk = void 0;
                    _o2 = i.viewGroup && !s && this.canCache(i.viewGroup);
                    e.iframe = Rt.createIframe(r, _o2 ? i.viewGroup : void 0, t.get().currentNode, "main"), n.insertBefore(e.iframe, n.firstChild), e.builderCompatibilityMode ? e.iframe.addEventListener("load", function () {
                      e.iframe._ready = !0;
                      var t = ["init", JSON.stringify(i.context)];
                      Rt.sendMessageToIframe(e.iframe, t);
                    }) : e.iframe.addEventListener("load", function () {
                      e.iframe._ready = !0;
                    });
                    _a2 = i.currentNode.pageErrorHandler;
                    _a2 ? this.checkIframe(_a2, t, r, e, n) : e.defaultPageErrorHandler && this.checkIframe(e.defaultPageErrorHandler, t, r, e, n);
                  }

                  _context10.next = 21;
                  break;

                case 13:
                  t.set({
                    showLoadingIndicator: !1
                  });
                  _o3 = t.get().goBackContext;
                  e.iframe.style.display = "block", e.iframe.luigi.nextViewUrl = r, e.iframe.luigi.nextClientPermissions = t.get().currentNode.clientPermissions, e.iframe.vg = this.canCache(i.viewGroup) ? i.viewGroup : void 0, e.iframe.luigi.currentNode = i.currentNode;
                  _context10.next = 18;
                  return t.prepareInternalData(e);

                case 18:
                  _a3 = _context10.sent;
                  _s2 = {
                    msg: "luigi.navigate",
                    viewUrl: r,
                    context: JSON.stringify(Object.assign({}, i.context, {
                      goBackContext: _o3
                    })),
                    nodeParams: JSON.stringify(Object.assign({}, i.nodeParams)),
                    pathParams: JSON.stringify(Object.assign({}, i.pathParams)),
                    internal: JSON.stringify(_a3)
                  };
                  i.isNavigationSyncEnabled ? (Rt.sendMessageToIframe(e.iframe, _s2), this.setOkResponseHandler(e, t, n)) : t.set({
                    isNavigationSyncEnabled: !0
                  }), t.set({
                    goBackContext: void 0,
                    isNavigateBack: !1
                  });

                case 21:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        function navigateIframe(_x10, _x11, _x12) {
          return _navigateIframe.apply(this, arguments);
        }

        return navigateIframe;
      }()
    }]);

    return _class14;
  }())();
  var ft = new ( /*#__PURE__*/function () {
    function _class15() {
      _classCallCheck(this, _class15);

      this.preloadBatchSize = 1, this.shouldPreload = !1;
    }

    _createClass(_class15, [{
      key: "preloadViewGroups",
      value: function preloadViewGroups() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        if (!1 === rt.getConfigValue("navigation.preloadViewGroups")) return;
        var t = pt.getAllViewGroupSettings();
        if (!t) return;
        var n = Rt.getIframeContainer(),
            i = Rt.getMainIframes(),
            r = new Date().getTime();
        if (i.filter(function (e) {
          return e.luigi && e.luigi.preloading && r - e.luigi.createdAt < 3e4;
        }).length > 0) return void console.debug("skipping view group preloading (busy)");
        var o = i.map(function (e) {
          return e.vg;
        }).filter(Boolean);
        Object.entries(t).filter(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              e = _ref7[0],
              t = _ref7[1];

          return !o.includes(e);
        }).filter(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              e = _ref9[0],
              t = _ref9[1];

          return t && t.preloadUrl;
        }).filter(function (t, n) {
          return n < e;
        }).forEach(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              e = _ref11[0],
              t = _ref11[1];

          console.debug("preloading view group " + e + " - " + t.preloadUrl);
          var i = Rt.createIframe(t.preloadUrl, e, null, "main");
          i.style.display = "none", i.luigi.preloading = !0, n.appendChild(i);
        });
      }
    }, {
      key: "preload",
      value: function preload() {
        var _this12 = this;

        this.shouldPreload && setTimeout(function () {
          _this12.preloadViewGroups(_this12.preloadBatchSize);
        }), this.shouldPreload = !0;
      }
    }, {
      key: "viewGroupLoaded",
      value: function viewGroupLoaded(e) {
        if (e.luigi.preloading) {
          var _t10 = new Date().getTime() - e.luigi.createdAt;

          var _n8 = 1;
          _t10 < 500 ? _n8 = 3 : _t10 < 1e3 && (_n8 = 2), this.preloadBatchSize = _n8, console.debug("preload batch size: " + this.preloadBatchSize), setTimeout(function () {
            e.luigi.preloading = !1;
          }, this.preloadBatchSize > 2 ? 500 : 1e3);
        }
      }
    }]);

    return _class15;
  }())();
  var gt = new ( /*#__PURE__*/function () {
    function _class16() {
      _classCallCheck(this, _class16);

      this.dataManagement = new Map();
    }

    _createClass(_class16, [{
      key: "setChildren",
      value: function setChildren(e, t) {
        this.dataManagement.set(e, t), this.navPath = "";
      }
    }, {
      key: "getChildren",
      value: function getChildren(e) {
        return e ? this.dataManagement.get(e) : {};
      }
    }, {
      key: "hasChildren",
      value: function hasChildren(e) {
        var t = this.getChildren(e);
        return t && t.hasOwnProperty("children");
      }
    }, {
      key: "setRootNode",
      value: function setRootNode(e) {
        this.dataManagement.set("_luigiRootNode", {
          node: e
        });
      }
    }, {
      key: "getRootNode",
      value: function getRootNode() {
        return this.dataManagement.get("_luigiRootNode");
      }
    }, {
      key: "hasRootNode",
      value: function hasRootNode() {
        return !!this.getRootNode();
      }
    }, {
      key: "deleteCache",
      value: function deleteCache() {
        this.dataManagement.clear();
      }
    }, {
      key: "deleteNodesRecursively",
      value: function deleteNodesRecursively(e) {
        if (this.hasChildren(e)) {
          var _t11 = this.getChildren(e).children;

          for (var _e12 = 0; _e12 < _t11.length; _e12++) {
            this.deleteNodesRecursively(_t11[_e12]);
          }
        }

        this.dataManagement["delete"](e);
      }
    }]);

    return _class16;
  }())();
  var ht = new ( /*#__PURE__*/function () {
    function _class17() {
      _classCallCheck(this, _class17);
    }

    _createClass(_class17, [{
      key: "getNavigationPath",
      value: function () {
        var _getNavigationPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
          var t,
              _n9,
              _i5,
              _t12,
              _r5,
              _o4,
              _a4,
              _s3,
              _args11 = arguments;

          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : "";
                  _context11.prev = 1;
                  _n9 = Lt.getTrimmedUrl(t);

                  if (e) {
                    _context11.next = 5;
                    break;
                  }

                  return _context11.abrupt("return", (console.error("No navigation nodes provided in the configuration."), [{}]));

                case 5:
                  if (!(gt.hasRootNode() && (_i5 = gt.getRootNode().node), !_i5)) {
                    _context11.next = 13;
                    break;
                  }

                  _context11.next = 8;
                  return e;

                case 8:
                  _t12 = _context11.sent;
                  Lt.isObject(_t12) ? (_i5 = _t12).pathSegment && (_i5.pathSegment = "", console.warn("Root node must have an empty path segment. Provided path segment will be ignored.")) : _i5 = {
                    children: _t12
                  };
                  _context11.next = 12;
                  return this.getChildren(_i5);

                case 12:
                  gt.setRootNode(_i5);

                case 13:
                  _r5 = _n9.split("/");
                  _context11.next = 16;
                  return this.buildNode(_r5, [_i5], _i5.children, _i5.context || {});

                case 16:
                  _o4 = _context11.sent;
                  _a4 = _o4.navigationPath.filter(function (e) {
                    return e.pathSegment;
                  }).map(function (e) {
                    return e.pathSegment;
                  });
                  _o4.isExistingRoute = !_n9 || _r5.length === _a4.length;
                  _s3 = _n9.split("/");
                  return _context11.abrupt("return", (_o4.matchedPath = _s3.filter(function (e, t) {
                    return _a4[t] && _a4[t].startsWith(":") || _a4[t] === e;
                  }).join("/"), _o4));

                case 23:
                  _context11.prev = 23;
                  _context11.t0 = _context11["catch"](1);
                  console.error("Failed to load top navigation nodes.", _context11.t0);

                case 26:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this, [[1, 23]]);
        }));

        function getNavigationPath(_x13) {
          return _getNavigationPath.apply(this, arguments);
        }

        return getNavigationPath;
      }()
    }, {
      key: "getChildren",
      value: function () {
        var _getChildren = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e, t) {
          var _this13 = this;

          var n, _t13, i;

          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if (e) {
                    _context12.next = 2;
                    break;
                  }

                  return _context12.abrupt("return", []);

                case 2:
                  n = [];

                  if (!gt.hasChildren(e)) {
                    _context12.next = 8;
                    break;
                  }

                  _t13 = gt.getChildren(e);
                  _t13 && (n = _t13.children);
                  _context12.next = 22;
                  break;

                case 8:
                  _context12.prev = 8;
                  _context12.t0 = void 0;
                  _context12.next = 12;
                  return De.getConfigValueFromObjectAsync(e, "children", t || e.context);

                case 12:
                  _context12.t1 = n = _context12.sent;
                  _context12.t2 = _context12.t0 === _context12.t1;

                  if (!_context12.t2) {
                    _context12.next = 16;
                    break;
                  }

                  n = [];

                case 16:
                  n = n.map(function (e) {
                    return _this13.getExpandStructuralPathSegment(e);
                  }).map(function (t) {
                    return _this13.bindChildToParent(t, e);
                  }) || [];
                  _context12.next = 22;
                  break;

                case 19:
                  _context12.prev = 19;
                  _context12.t3 = _context12["catch"](8);
                  console.error("Could not lazy-load children for node", _context12.t3);

                case 22:
                  i = this.getAccessibleNodes(e, n, t);
                  return _context12.abrupt("return", (gt.setChildren(e, {
                    children: n,
                    filteredChildren: i
                  }), i));

                case 24:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this, [[8, 19]]);
        }));

        function getChildren(_x14, _x15) {
          return _getChildren.apply(this, arguments);
        }

        return getChildren;
      }()
    }, {
      key: "getFilteredChildren",
      value: function () {
        var _getFilteredChildren = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  if (!gt.hasChildren(e)) {
                    _context13.next = 4;
                    break;
                  }

                  _context13.t0 = ht.getChildrenFromCache(e);
                  _context13.next = 7;
                  break;

                case 4:
                  _context13.next = 6;
                  return ht.getChildren(e);

                case 6:
                  _context13.t0 = _context13.sent;

                case 7:
                  return _context13.abrupt("return", _context13.t0);

                case 8:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        function getFilteredChildren(_x16) {
          return _getFilteredChildren.apply(this, arguments);
        }

        return getFilteredChildren;
      }()
    }, {
      key: "getChildrenFromCache",
      value: function getChildrenFromCache(e) {
        var t = gt.getChildren(e);
        return t ? t.filteredChildren : [];
      }
    }, {
      key: "getAccessibleNodes",
      value: function getAccessibleNodes(e, t, n) {
        return t ? t.filter(function (t) {
          return At.isNodeAccessPermitted(t, e, n);
        }) : [];
      }
    }, {
      key: "bindChildToParent",
      value: function bindChildToParent(e, t) {
        return t && t.pathSegment && (e.parent = t), e;
      }
    }, {
      key: "getExpandStructuralPathSegment",
      value: function getExpandStructuralPathSegment(e) {
        if (e && e.pathSegment && -1 !== e.pathSegment.indexOf("/")) {
          var _t14 = e.pathSegment.split("/"),
              _n10 = _objectSpread({}, e),
              _i6 = function _i6(e, t) {
            var r = e.shift();
            var o = {};
            return e.length ? (o.pathSegment = r, t.hideFromNav && (o.hideFromNav = t.hideFromNav), o.children = [_i6(e, t)]) : (o = _n10).pathSegment = r, o;
          };

          return _i6(_t14, e);
        }

        return e;
      }
    }, {
      key: "buildNode",
      value: function () {
        var _buildNode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e, t, n, i) {
          var r,
              o,
              _a5,
              _s4,
              _n11,
              _i7,
              _a6,
              _args14 = arguments;

          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  r = _args14.length > 4 && _args14[4] !== undefined ? _args14[4] : {};
                  i.parentNavigationContexts || (i.parentNavigationContexts = []);
                  o = {
                    navigationPath: t,
                    context: i,
                    pathParams: r
                  };

                  if (!(e.length > 0 && n && n.length > 0)) {
                    _context14.next = 21;
                    break;
                  }

                  _a5 = e[0], _s4 = this.findMatchingNode(_a5, n);

                  if (!_s4) {
                    _context14.next = 21;
                    break;
                  }

                  t.push(_s4);
                  _n11 = At.applyContext(i, _s4.context, _s4.navigationContext);
                  _s4.pathSegment.startsWith(":") && (r[_s4.pathSegment.replace(":", "")] = Et.sanitizeParam(_a5)), _n11 = Dt.substituteDynamicParamsInObject(_n11, r);
                  _context14.prev = 9;
                  this.buildVirtualTree(_s4, e, r);
                  _context14.next = 13;
                  return this.getChildren(_s4, _n11);

                case 13:
                  _i7 = _context14.sent;
                  _a6 = e.slice(1);
                  o = this.buildNode(_a6, t, _i7, _n11, r);
                  _context14.next = 21;
                  break;

                case 18:
                  _context14.prev = 18;
                  _context14.t0 = _context14["catch"](9);
                  console.error("Error getting nodes children", _context14.t0);

                case 21:
                  return _context14.abrupt("return", o);

                case 22:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this, [[9, 18]]);
        }));

        function buildNode(_x17, _x18, _x19, _x20) {
          return _buildNode.apply(this, arguments);
        }

        return buildNode;
      }()
    }, {
      key: "buildVirtualViewUrl",
      value: function buildVirtualViewUrl(e, t, n) {
        var i = "";

        for (var _e13 in t) {
          _e13.startsWith("virtualSegment") && (i += ":" + _e13 + "/");
        }

        return n ? e + "/" + (i += ":virtualSegment_" + n + "/") : e;
      }
    }, {
      key: "buildVirtualTree",
      value: function buildVirtualTree(e, t, n) {
        var i = e.virtualTree,
            r = e._virtualTree,
            o = e._virtualViewUrl || e.viewUrl;

        if ((i || r) && t[0]) {
          var _t15 = e._virtualPathIndex;
          if (i && (_t15 = 0, e.keepSelectedForChildren = !0), _t15 > 50) return;
          _t15++;

          var _r6 = ["_*", "virtualTree", "parent", "children", "keepSelectedForChildren", "navigationContext"],
              _a7 = Lt.removeProperties(e, _r6);

          Object.assign(_a7, {
            pathSegment: ":virtualSegment_" + _t15,
            label: ":virtualSegment_" + _t15,
            viewUrl: Lt.trimTrailingSlash(this.buildVirtualViewUrl(o, n, _t15)),
            _virtualTree: !0,
            _virtualPathIndex: _t15,
            _virtualViewUrl: o
          }), e.children = [_a7];
        }
      }
    }, {
      key: "findMatchingNode",
      value: function findMatchingNode(e, t) {
        var n = null;
        var i = t.filter(function (e) {
          return !!e.pathSegment;
        }).length,
            r = t.filter(function (e) {
          return e.pathSegment && e.pathSegment.startsWith(":");
        }).length;
        return i > 1 && (1 === r && (console.warn("Invalid node setup detected. \nStatic and dynamic nodes cannot be used together on the same level. Static node gets cleaned up. \nRemove the static node from the configuration to resolve this warning. \nAffected pathSegment:", e, "Children:", t), t = t.filter(function (e) {
          return e.pathSegment && e.pathSegment.startsWith(":");
        })), r > 1) ? (console.error("Invalid node setup detected. \nMultiple dynamic nodes are not allowed on the same level. Stopped navigation. \nInvalid Children:", t), null) : (t.some(function (t) {
          if (t.pathSegment === e || t.pathSegment && t.pathSegment.startsWith(":")) return n = t, !0;
        }), n);
      }
    }, {
      key: "onNodeChange",
      value: function onNodeChange(e, t) {
        var n = rt.getConfigValue("navigation.nodeChangeHook");
        "function" == typeof n ? n(e, t) : void 0 !== n && console.warn("nodeChangeHook is not a function!");
      }
    }, {
      key: "getNodesToDisplay",
      value: function getNodesToDisplay(e, t) {
        if (e && e.length > 0) return e;

        if (t.length > 2) {
          var _e14 = t[t.length - 2];
          if (gt.hasChildren(_e14)) return this.getChildrenFromCache(_e14);
        }

        return [];
      }
    }, {
      key: "getGroupedChildren",
      value: function getGroupedChildren(e, t) {
        var n = this.getNodesToDisplay(e, t.pathData);
        return At.groupNodesBy(n, "category", !0);
      }
    }, {
      key: "getTruncatedChildren",
      value: function getTruncatedChildren(e) {
        var t = !1,
            n = [];
        return e.slice().reverse().forEach(function (e) {
          t && !e.tabNav || (!1 === e.keepSelectedForChildren ? t = !0 : (e.keepSelectedForChildren || e.tabNav) && (t = !0, n = [])), n.push(e);
        }), n.reverse();
      }
    }, {
      key: "getLeftNavData",
      value: function () {
        var _getLeftNavData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, t) {
          var n, _i8, _r7, _o5, _a8, _s5;

          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  n = {};

                  if (!(e.pathData && 1 < e.pathData.length)) {
                    _context15.next = 10;
                    break;
                  }

                  _i8 = this.getTruncatedChildren(t.pathData);
                  _o5 = _toConsumableArray(_i8).pop();
                  (_o5.keepSelectedForChildren || _o5.tabNav) && (_r7 = _o5, _i8.pop(), _o5 = _toConsumableArray(_i8).pop());
                  _context15.next = 7;
                  return this.getChildren(_o5, t.context);

                case 7:
                  _a8 = _context15.sent;
                  _s5 = this.getGroupedChildren(_a8, e);
                  n.hasCategoriesWithIcon = !1, Object.values(_s5).forEach(function (e) {
                    !n.hasCategoriesWithIcon && e && e.metaInfo && e.metaInfo.icon && (n.hasCategoriesWithIcon = !0);
                  }), n.selectedNode = _r7 || _o5, n.children = _s5;

                case 10:
                  return _context15.abrupt("return", n);

                case 11:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        function getLeftNavData(_x21, _x22) {
          return _getLeftNavData.apply(this, arguments);
        }

        return getLeftNavData;
      }()
    }, {
      key: "getTruncatedChildrenForTabNav",
      value: function getTruncatedChildrenForTabNav(e) {
        var t = [];

        for (var _n12 = 0; _n12 < e.length; _n12++) {
          if (t.push(e[_n12]), e[_n12].tabNav) {
            _n12 < e.length - 1 && t.push(e[_n12 + 1]);
            break;
          }
        }

        return t;
      }
    }, {
      key: "getTabNavData",
      value: function () {
        var _getTabNavData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e, t) {
          var n, _i9, _r8, _o6;

          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  n = {};

                  if (!(e.pathData && 1 < e.pathData.length)) {
                    _context16.next = 8;
                    break;
                  }

                  _i9 = _toConsumableArray(this.getTruncatedChildrenForTabNav(t.pathData)).pop();
                  _context16.next = 5;
                  return this.getChildren(_i9.tabNav ? _i9 : _i9.parent, t.context);

                case 5:
                  _r8 = _context16.sent;
                  _o6 = this.getGroupedChildren(_r8, e);
                  n.selectedNode = _i9, n.selectedNodeForTabNav = _i9, n.children = _o6;

                case 8:
                  return _context16.abrupt("return", n);

                case 9:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        function getTabNavData(_x23, _x24) {
          return _getTabNavData.apply(this, arguments);
        }

        return getTabNavData;
      }()
    }, {
      key: "extractDataFromPath",
      value: function () {
        var _extractDataFromPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return this.getNavigationPath(rt.getConfigValueAsync("navigation.nodes"), e);

                case 2:
                  t = _context17.sent;
                  return _context17.abrupt("return", {
                    nodeObject: Dt.getLastNodeObject(t),
                    pathData: t
                  });

                case 4:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17, this);
        }));

        function extractDataFromPath(_x25) {
          return _extractDataFromPath.apply(this, arguments);
        }

        return extractDataFromPath;
      }()
    }, {
      key: "shouldPreventNavigation",
      value: function () {
        var _shouldPreventNavigation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.t0 = !e || !Lt.isFunction(e.onNodeActivation);

                  if (_context18.t0) {
                    _context18.next = 7;
                    break;
                  }

                  _context18.t1 = !1;
                  _context18.next = 5;
                  return e.onNodeActivation(e);

                case 5:
                  _context18.t2 = _context18.sent;
                  _context18.t0 = _context18.t1 !== _context18.t2;

                case 7:
                  return _context18.abrupt("return", !_context18.t0);

                case 8:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        function shouldPreventNavigation(_x26) {
          return _shouldPreventNavigation.apply(this, arguments);
        }

        return shouldPreventNavigation;
      }()
    }]);

    return _class17;
  }())(),
      mt = {
    logout: {
      label: "Sign Out",
      icon: "log"
    },
    userSettingsProfileMenuEntry: {
      label: "Settings",
      icon: "settings"
    },
    userSettingsDialog: {
      dialogHeader: "User Settings",
      saveBtn: "Save",
      dismissBtn: "Cancel"
    }
  },
      vt = {
    externalLink: {
      sameWindow: !1
    }
  };

  var bt = /*#__PURE__*/function () {
    function bt(e) {
      _classCallCheck(this, bt);

      e ? (this.rendererObject = e, this.config = e.config || {}) : this.config = {};
    }

    _createClass(bt, [{
      key: "createCompoundContainer",
      value: function createCompoundContainer() {
        return document.createElement("div");
      }
    }, {
      key: "createCompoundItemContainer",
      value: function createCompoundItemContainer() {
        return document.createElement("div");
      }
    }, {
      key: "attachCompoundItem",
      value: function attachCompoundItem(e, t) {
        e.appendChild(t);
      }
    }]);

    return bt;
  }();

  var wt = /*#__PURE__*/function (_bt) {
    _inherits(wt, _bt);

    var _super3 = _createSuper(wt);

    function wt(e) {
      var _this14;

      _classCallCheck(this, wt);

      _this14 = _super3.call(this, e || {
        use: {}
      }), e && e.use && e.use["extends"] && (_this14.superRenderer = yt({
        use: e.use["extends"],
        config: e.config
      }));
      return _this14;
    }

    _createClass(wt, [{
      key: "createCompoundContainer",
      value: function createCompoundContainer() {
        return this.rendererObject.use.createCompoundContainer ? this.rendererObject.use.createCompoundContainer(this.config, this.superRenderer) : this.superRenderer ? this.superRenderer.createCompoundContainer() : _get(_getPrototypeOf(wt.prototype), "createCompoundContainer", this).call(this);
      }
    }, {
      key: "createCompoundItemContainer",
      value: function createCompoundItemContainer(e) {
        return this.rendererObject.use.createCompoundItemContainer ? this.rendererObject.use.createCompoundItemContainer(e, this.config, this.superRenderer) : this.superRenderer ? this.superRenderer.createCompoundItemContainer(e) : _get(_getPrototypeOf(wt.prototype), "createCompoundItemContainer", this).call(this, e);
      }
    }, {
      key: "attachCompoundItem",
      value: function attachCompoundItem(e, t) {
        this.rendererObject.use.attachCompoundItem ? this.rendererObject.use.attachCompoundItem(e, t, this.superRenderer) : this.superRenderer ? this.superRenderer.attachCompoundItem(e, t) : _get(_getPrototypeOf(wt.prototype), "attachCompoundItem", this).call(this, e, t);
      }
    }]);

    return wt;
  }(bt);

  var St = /*#__PURE__*/function (_bt2) {
    _inherits(St, _bt2);

    var _super4 = _createSuper(St);

    function St() {
      _classCallCheck(this, St);

      return _super4.apply(this, arguments);
    }

    _createClass(St, [{
      key: "createCompoundContainer",
      value: function createCompoundContainer() {
        var e = "__lui_compound_" + new Date().getTime(),
            t = document.createElement("div");
        t.classList.add(e);
        var n = "";
        return this.config.layouts && this.config.layouts.forEach(function (t) {
          if (t.minWidth || t.maxWidth) {
            var _i10 = "@media only screen ";
            null != t.minWidth && (_i10 += "and (min-width: ".concat(t.minWidth, "px) ")), null != t.maxWidth && (_i10 += "and (max-width: ".concat(t.maxWidth, "px) ")), _i10 += "{\n            .".concat(e, " {\n              grid-template-columns: ").concat(t.columns || "auto", ";\n              grid-template-rows: ").concat(t.rows || "auto", ";\n              grid-gap: ").concat(t.gap || "0", ";\n            }\n          }\n          "), n += _i10;
          }
        }), t.innerHTML = "\n        <style scoped>\n          .".concat(e, " {\n            display: grid;\n            grid-template-columns: ").concat(this.config.columns || "auto", ";\n            grid-template-rows: ").concat(this.config.rows || "auto", ";\n            grid-gap: ").concat(this.config.gap || "0", ";\n            min-height: ").concat(this.config.minHeight || "auto", ";\n          }\n          ").concat(n, "\n        </style>\n    "), t;
      }
    }, {
      key: "createCompoundItemContainer",
      value: function createCompoundItemContainer(e) {
        var t = e || {},
            n = document.createElement("div");
        return n.setAttribute("style", "grid-row: ".concat(t.row || "auto", "; grid-column: ").concat(t.column || "auto")), n;
      }
    }]);

    return St;
  }(bt);

  var yt = function yt(e) {
    var t = e.use;
    return t ? "grid" === t ? new St(e) : t.createCompoundContainer || t.createCompoundItemContainer || t.attachCompoundItem ? new wt(e) : new bt(e) : new bt(e);
  },
      _t = function _t(e, t, n, i) {
    t.eventListeners && t.eventListeners.forEach(function (t) {
      var r = t.source + "." + t.name,
          o = e[r],
          a = {
        wcElementId: n,
        wcElement: i,
        action: t.action,
        converter: t.dataConverter
      };
      o ? o.push(a) : e[r] = [a];
    });
  };

  var Ct = new ( /*#__PURE__*/function () {
    function _class18() {
      _classCallCheck(this, _class18);
    }

    _createClass(_class18, [{
      key: "dynamicImport",
      value: function dynamicImport(e) {
        return import(
        /* webpackIgnore: true */
        e);
      }
    }, {
      key: "attachWC",
      value: function attachWC(e, t, n, i, r, o) {
        if (n && n.contains(t)) {
          var _a9 = document.createElement(e);

          o && _a9.setAttribute("nodeId", o);
          var _s6 = {
            linkManager: window.Luigi.navigation,
            uxManager: window.Luigi.ux,
            publishEvent: function publishEvent(t) {
              n.eventBus && n.eventBus.onPublishEvent(t, o, e);
            }
          };

          if (_a9.__postProcess) {
            var _e15 = new URL("./", r);

            _a9.__postProcess(i, _s6, _e15.origin + _e15.pathname);
          } else _a9.context = i, _a9.LuigiClient = _s6;

          n.replaceChild(_a9, t);
        }
      }
    }, {
      key: "generateWCId",
      value: function generateWCId(e) {
        var t = "";

        for (var _n13 = 0; _n13 < e.length; _n13++) {
          t += e.charCodeAt(_n13).toString(16);
        }

        return "luigi-wc-" + t;
      }
    }, {
      key: "registerWCFromUrl",
      value: function registerWCFromUrl(e, t) {
        var _this15 = this;

        return new Promise(function (n, i) {
          _this15.checkWCUrl(e) ? _this15.dynamicImport(e).then(function (e) {
            try {
              if (!window.customElements.get(t)) {
                var _n14 = e["default"];

                if (!HTMLElement.isPrototypeOf(_n14)) {
                  var _t16 = Object.keys(e);

                  for (var _i11 = 0; _i11 < _t16.length && (_n14 = e[_t16[_i11]], !HTMLElement.isPrototypeOf(_n14)); _i11++) {
                    ;
                  }
                }

                window.customElements.define(t, _n14);
              }

              n();
            } catch (e) {
              i(e);
            }
          })["catch"](function (e) {
            return i(e);
          }) : (console.warn("View URL '".concat(e, "' not allowed to be included")), i("View URL '".concat(e, "' not allowed")));
        });
      }
    }, {
      key: "includeSelfRegisteredWCFromUrl",
      value: function includeSelfRegisteredWCFromUrl(e, t, n) {
        var _this16 = this;

        if (this.checkWCUrl(t)) {
          window.Luigi._registerWebcomponent || (window.Luigi._registerWebcomponent = function (e, t) {
            window.customElements.define(_this16.generateWCId(e), t);
          });

          var _i12 = document.createElement("script");

          _i12.setAttribute("src", t), "module" === e.webcomponent.type && _i12.setAttribute("type", "module"), _i12.setAttribute("defer", !0), _i12.addEventListener("load", function () {
            n();
          }), document.body.appendChild(_i12);
        } else console.warn("View URL '".concat(t, "' not allowed to be included"));
      }
    }, {
      key: "checkWCUrl",
      value: function checkWCUrl(e) {
        if (e.indexOf("://") > 0 || 0 === e.trim().indexOf("//")) {
          if (new URL(e).host === window.location.host) return !0;

          var _t17 = rt.getConfigValue("navigation.validWebcomponentUrls");

          if (_t17 && _t17.length > 0) {
            var _iterator = _createForOfIteratorHelper(_t17),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _n15 = _step.value;

                try {
                  if (new RegExp(_n15).test(e)) return !0;
                } catch (e) {
                  console.error(e);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          return !1;
        }

        return !0;
      }
    }, {
      key: "renderWebComponent",
      value: function renderWebComponent(e, t, n, i, r) {
        var _this17 = this;

        var o = i.webcomponent && i.webcomponent.tagName ? i.webcomponent.tagName : this.generateWCId(e),
            a = document.createElement("div");
        t.appendChild(a), window.customElements.get(o) ? this.attachWC(o, a, t, n, e, r) : window.luigiWCFn ? window.luigiWCFn(e, o, a, function () {
          _this17.attachWC(o, a, t, n, e, r);
        }) : i.webcomponent && i.webcomponent.selfRegistered ? this.includeSelfRegisteredWCFromUrl(i, e, function () {
          _this17.attachWC(o, a, t, n, e, r);
        }) : this.registerWCFromUrl(e, o).then(function () {
          _this17.attachWC(o, a, t, n, e, r);
        });
      }
    }, {
      key: "createCompoundContainerAsync",
      value: function createCompoundContainerAsync(e) {
        var _this18 = this;

        return new Promise(function (t) {
          if (e.viewUrl) {
            var _n16 = _this18.generateWCId(e.viewUrl);

            _this18.registerWCFromUrl(e.viewUrl, _n16).then(function () {
              t(document.createElement(_n16));
            });
          } else t(e.createCompoundContainer());
        });
      }
    }, {
      key: "renderWebComponentCompound",
      value: function renderWebComponentCompound(e, t, n) {
        var _this19 = this;

        var i;
        return e.webcomponent && e.viewUrl ? ((i = new bt()).viewUrl = e.viewUrl, i.createCompoundItemContainer = function (e) {
          var t = document.createElement("div");
          return e && e.slot && t.setAttribute("slot", e.slot), t;
        }) : e.compound.renderer && (i = yt(e.compound.renderer)), i = i || new bt(), new Promise(function (r) {
          _this19.createCompoundContainerAsync(i).then(function (o) {
            var a = {};
            o.eventBus = {
              listeners: a,
              onPublishEvent: function onPublishEvent(e, t, n) {
                var i = a[t + "." + e.type] || [];
                i.push.apply(i, _toConsumableArray(a["*." + e.type] || [])), i.forEach(function (t) {
                  var n = t.wcElement || o.querySelector("[nodeId=" + t.wcElementId + "]");
                  n ? n.dispatchEvent(new CustomEvent(t.action, {
                    detail: t.converter ? t.converter(e.detail) : e.detail
                  })) : console.debug("Could not find event target", t);
                });
              }
            }, e.compound.children.forEach(function (e, t) {
              var r = _objectSpread(_objectSpread({}, n), e.context),
                  s = i.createCompoundItemContainer(e.layoutConfig);

              s.eventBus = o.eventBus, i.attachCompoundItem(o, s);
              var l = e.id || "gen_" + t;
              _this19.renderWebComponent(e.viewUrl, s, r, e, l), _t(a, e, l);
            }), t.appendChild(o), _t(a, e.compound, void 0, o), r(o);
          });
        });
      }
    }]);

    return _class18;
  }())();
  var xt = new ( /*#__PURE__*/function () {
    function _class19() {
      _classCallCheck(this, _class19);
    }

    _createClass(_class19, [{
      key: "getNodePath",
      value: function getNodePath(e, t) {
        return e ? Dt.buildRoute(e, e.pathSegment ? "/" + e.pathSegment : "", t) : "";
      }
    }, {
      key: "concatenatePath",
      value: function concatenatePath(e, t) {
        var n = Lt.getPathWithoutHash(e);
        return n ? t ? (n.endsWith("/") && (n = n.substring(0, n.length - 1)), t.startsWith("/") || (n += "/"), n += t) : n : t;
      }
    }, {
      key: "navigateTo",
      value: function () {
        var _navigateTo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
          var t,
              n,
              _yield$ht$extractData,
              i,
              r,
              o,
              _args19 = arguments;

          return regeneratorRuntime.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  t = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : !0;
                  n = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : !0;
                  _context19.next = 4;
                  return ht.extractDataFromPath(e);

                case 4:
                  _yield$ht$extractData = _context19.sent;
                  i = _yield$ht$extractData.nodeObject;
                  _context19.next = 8;
                  return ht.shouldPreventNavigation(i);

                case 8:
                  if (!_context19.sent) {
                    _context19.next = 10;
                    break;
                  }

                  return _context19.abrupt("return");

                case 10:
                  if (!(Lt.trimLeadingSlash(this.getWindowPath()) === Lt.trimLeadingSlash(e))) {
                    _context19.next = 12;
                    break;
                  }

                  return _context19.abrupt("return");

                case 12:
                  if (!rt.getConfigValue("routing.useHashRouting")) {
                    _context19.next = 14;
                    break;
                  }

                  return _context19.abrupt("return", void (window.location.hash = e));

                case 14:
                  r = t ? "pushState" : "replaceState";
                  window.history[r]({
                    path: e
                  }, "", e), Lt.isIE() ? (o = document.createEvent("Event")).initEvent("popstate", !0, !0) : o = n ? new CustomEvent("popstate") : new CustomEvent("popstate", {
                    detail: {
                      withoutSync: !0
                    }
                  }), window.dispatchEvent(o);

                case 16:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19, this);
        }));

        function navigateTo(_x27) {
          return _navigateTo.apply(this, arguments);
        }

        return navigateTo;
      }()
    }, {
      key: "getWindowPath",
      value: function getWindowPath() {
        return rt.getConfigValue("routing.useHashRouting") ? Lt.getPathWithoutHash(window.location.hash) : window.location.pathname.concat(window.location.search);
      }
    }, {
      key: "buildFromRelativePath",
      value: function buildFromRelativePath(e) {
        var t = this.getWindowPath();

        if (e.parent && e.parent.pathSegment) {
          var _n17 = Lt.trimLeadingSlash(this.getNodePath(e.parent)).split("/"),
              _i13 = Lt.trimLeadingSlash(t).split("/");

          _i13.length > _n17.length && (t = _i13.slice(0, _n17.length).join("/"));
        }

        return Lt.addLeadingSlash(this.concatenatePath(t, e.link));
      }
    }, {
      key: "getHashPath",
      value: function getHashPath() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hash;

        if (e && /\?intent=/i.test(e)) {
          var _t18 = e.replace("#/#", "#"),
              _n18 = Dt.getIntentPath(_t18.split("#")[1]);

          if (_n18) return _n18;
        }

        return e.split("#/")[1];
      }
    }, {
      key: "getModifiedPathname",
      value: function getModifiedPathname() {
        if (window.location.hash && /\?intent=/i.test(window.location.hash)) {
          var _e16 = window.location.hash.replace("#/#", "").replace("#", ""),
              _t19 = Dt.getIntentPath(_e16);

          return _t19 || "/";
        }

        return (window.history.state && window.history.state.path || window.location.pathname).split("/").slice(1).join("/");
      }
    }, {
      key: "getCurrentPath",
      value: function getCurrentPath() {
        if (/\?intent=/i.test(window.location.hash)) {
          var _e17 = window.location.hash.replace("#/#", "").replace("#", ""),
              _t20 = Dt.getIntentPath(_e17);

          if (_t20) return _t20;
        }

        return rt.getConfigValue("routing.useHashRouting") ? window.location.hash.replace("#", "") : window.location.search ? Lt.trimLeadingSlash(window.location.pathname) + window.location.search : Lt.trimLeadingSlash(window.location.pathname);
      }
    }, {
      key: "handleRouteChange",
      value: function () {
        var _handleRouteChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e, t, n, i, r) {
          var _this20 = this;

          var _r9, _o7, o, _a10, _s7, _yield$ht$extractData2, _l2, _c, _d2, _n19, _i14, _e18, _i15, _u2, _p, _f, _g, _h, _m, _v, _b, _w, _S, _y3, _3, _t21, _yield$ht$extractData3, _e19, _n20, _i16;

          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  if (0 !== (rt.getConfigValue("routing.skipRoutingForUrlPatterns") || [/access_token=/, /id_token=/]).filter(function (e) {
                    return window.location.href.match(e);
                  }).length) {
                    _context21.next = 91;
                    break;
                  }

                  _context21.prev = 1;

                  if (!t.shouldShowUnsavedChangesModal()) {
                    _context21.next = 5;
                    break;
                  }

                  _r9 = window.location.href, _o7 = t.get().unsavedChanges.persistUrl;
                  return _context21.abrupt("return", (_o7 && history.replaceState(window.state, "", _o7), void t.showUnsavedChangesModal().then(function () {
                    e && _this20.handleRouteChange(e, t, n, i) && history.replaceState(window.state, "", _r9);
                  }, function () {})));

                case 5:
                  o = rt.getConfigValue("settings.featureToggles.queryStringParam") ? rt.getConfigValue("settings.featureToggles.queryStringParam") : void 0;
                  o && Dt.setFeatureToggles(o, e);
                  _a10 = t.get();
                  this.checkInvalidateCache(_a10, e);
                  _s7 = e && e.length ? Lt.getPathWithoutHash(e) : "";
                  _context21.next = 12;
                  return ht.extractDataFromPath(e);

                case 12:
                  _yield$ht$extractData2 = _context21.sent;
                  _l2 = _yield$ht$extractData2.nodeObject;
                  _c = _yield$ht$extractData2.pathData;
                  _d2 = _l2.viewUrl || "";

                  if (!(!_d2 && !_l2.compound)) {
                    _context21.next = 35;
                    break;
                  }

                  _context21.next = 19;
                  return Dt.getDefaultChildNode(_c, /*#__PURE__*/function () {
                    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e, t) {
                      return regeneratorRuntime.wrap(function _callee20$(_context20) {
                        while (1) {
                          switch (_context20.prev = _context20.next) {
                            case 0:
                              _context20.next = 2;
                              return ht.getChildren(e, t);

                            case 2:
                              return _context20.abrupt("return", _context20.sent);

                            case 3:
                            case "end":
                              return _context20.stop();
                          }
                        }
                      }, _callee20);
                    }));

                    return function (_x33, _x34) {
                      return _ref12.apply(this, arguments);
                    };
                  }());

                case 19:
                  _n19 = _context21.sent;

                  if (!_c.isExistingRoute) {
                    _context21.next = 25;
                    break;
                  }

                  _i14 = Lt.getTrimmedUrl(e);
                  this.navigateTo("".concat(_i14 ? "/".concat(_i14) : "", "/").concat(_n19), !1), t.set({
                    navigationPath: []
                  });
                  _context21.next = 34;
                  break;

                case 25:
                  if (!(_n19 && _c.navigationPath.length > 1)) {
                    _context21.next = 27;
                    break;
                  }

                  return _context21.abrupt("return", void this.showPageNotFoundError(t, Lt.trimTrailingSlash(_c.matchedPath) + "/" + _n19, _s7, !0));

                case 27:
                  _context21.next = 29;
                  return ht.getNavigationPath(rt.getConfigValueAsync("navigation.nodes"), "/");

                case 29:
                  _e18 = _context21.sent;
                  _context21.next = 32;
                  return Dt.getDefaultChildNode(_e18);

                case 32:
                  _i15 = _context21.sent;
                  this.showPageNotFoundError(t, _i15, _s7);

                case 34:
                  return _context21.abrupt("return");

                case 35:
                  if (_c.isExistingRoute) {
                    _context21.next = 37;
                    break;
                  }

                  return _context21.abrupt("return", void this.showPageNotFoundError(t, _c.matchedPath, _s7, !0));

                case 37:
                  _u2 = rt.getConfigBooleanValue("settings.hideNavigation"), _p = Dt.parseParams(_s7.split("?")[1]), _f = Dt.getNodeParams(_p), _g = Dt.findViewGroup(_l2), _h = decodeURIComponent(_s7.split("?")[1] || ""), _m = _c.navigationPath && _c.navigationPath.length > 0 ? _c.navigationPath[_c.navigationPath.length - 1] : null;
                  _v = !1, _b = _m;

                case 39:
                  if (!_b) {
                    _context21.next = 49;
                    break;
                  }

                  if (!(!0 === _b.tabNav)) {
                    _context21.next = 43;
                    break;
                  }

                  _v = !0;
                  return _context21.abrupt("break", 49);

                case 43:
                  if (!(!1 === _b.tabNav)) {
                    _context21.next = 46;
                    break;
                  }

                  _v = !1;
                  return _context21.abrupt("break", 49);

                case 46:
                  _b = _b.parent;

                case 47:
                  _context21.next = 39;
                  break;

                case 49:
                  _w = _m, _S = _l2.hideSideNav;

                case 50:
                  if (!_w) {
                    _context21.next = 60;
                    break;
                  }

                  if (!(_w.tabNav && !0 === _w.hideSideNav)) {
                    _context21.next = 54;
                    break;
                  }

                  _S = !0;
                  return _context21.abrupt("break", 60);

                case 54:
                  if (!(!1 === _w.hideSideNav)) {
                    _context21.next = 57;
                    break;
                  }

                  _S = !1;
                  return _context21.abrupt("break", 60);

                case 57:
                  _w = _w.parent;

                case 58:
                  _context21.next = 50;
                  break;

                case 60:
                  _y3 = {
                    hideNav: _u2,
                    viewUrl: _d2,
                    nodeParams: _f,
                    viewGroup: _g,
                    urlParamsRaw: _h,
                    currentNode: _m,
                    navigationPath: _c.navigationPath,
                    context: Dt.substituteDynamicParamsInObject(Object.assign({}, _c.context, _m.context), _c.pathParams),
                    pathParams: _c.pathParams,
                    hideSideNav: _S || !1,
                    isolateView: _l2.isolateView || !1,
                    tabNav: _v
                  };
                  t.set(Object.assign({}, _y3, {
                    previousNodeValues: _a10 ? {
                      viewUrl: _a10.viewUrl,
                      isolateView: _a10.isolateView,
                      viewGroup: _a10.viewGroup
                    } : {}
                  }));
                  _3 = document.getElementsByClassName("iframeContainer")[0];

                  if (!(_3 && (_v ? _3.classList.add("iframeContainerTabNav") : _3.classList.contains("iframeContainerTabNav") && _3.classList.remove("iframeContainerTabNav")), null !== i.iframe)) {
                    _context21.next = 73;
                    break;
                  }

                  _t21 = i.iframe.luigi.viewUrl.split("/").pop();

                  if (!(e !== _t21)) {
                    _context21.next = 73;
                    break;
                  }

                  _context21.next = 68;
                  return ht.extractDataFromPath(_t21);

                case 68:
                  _yield$ht$extractData3 = _context21.sent;
                  _e19 = _yield$ht$extractData3.nodeObject;
                  _n20 = _yield$ht$extractData3.pathData;
                  _i16 = _e19;
                  ht.onNodeChange(_i16, _m);

                case 73:
                  if (!(_l2.compound && Lt.requestExperimentalFeature("webcomponents", !0))) {
                    _context21.next = 77;
                    break;
                  }

                  _3 && _3.classList.add("lui-webComponent"), this.navigateWebComponentCompound(i, t, n, _l2, _3);
                  _context21.next = 86;
                  break;

                case 77:
                  if (!(_l2.webcomponent && Lt.requestExperimentalFeature("webcomponents", !0))) {
                    _context21.next = 81;
                    break;
                  }

                  _3 && _3.classList.add("lui-webComponent"), this.navigateWebComponent(i, t, n, _l2, _3);
                  _context21.next = 86;
                  break;

                case 81:
                  _3 && _3.classList.remove("lui-webComponent");
                  _context21.t0 = r;

                  if (_context21.t0) {
                    _context21.next = 86;
                    break;
                  }

                  _context21.next = 86;
                  return pt.navigateIframe(i, t, n);

                case 86:
                  _context21.next = 91;
                  break;

                case 88:
                  _context21.prev = 88;
                  _context21.t1 = _context21["catch"](1);
                  console.info("Could not handle route change", _context21.t1);

                case 91:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21, this, [[1, 88]]);
        }));

        function handleRouteChange(_x28, _x29, _x30, _x31, _x32) {
          return _handleRouteChange.apply(this, arguments);
        }

        return handleRouteChange;
      }()
    }, {
      key: "checkInvalidateCache",
      value: function checkInvalidateCache(e, t) {
        var n = t.split("/");

        if (e.navigationPath && e.navigationPath.length > 0) {
          var _t22 = e.navigationPath.slice(1),
              _i17 = !0;

          for (var _r10 = 0; _r10 < _t22.length; _r10++) {
            var o = n.length > _r10 ? n[_r10] : void 0,
                _a11 = _t22[_r10];
            if (o !== _a11.pathSegment || !_i17) if (Dt.isDynamicNode(_a11)) {
              if (!_i17 || o !== Dt.getDynamicNodeValue(_a11, e.pathParams)) {
                gt.deleteNodesRecursively(_a11);
                break;
              }
            } else _i17 = !1;
          }
        }
      }
    }, {
      key: "handleRouteClick",
      value: function handleRouteClick(e, t) {
        var n = Dt.getRouteLink(e, t.get().pathParams);
        if (e.externalLink && e.externalLink.url) this.navigateToExternalLink(n);else if (e.link) this.navigateTo(n);else {
          if (Lt.trimLeadingSlash(this.getWindowPath()) === Lt.trimLeadingSlash(n)) {
            var _e20 = Rt.getIframeContainer(),
                _t23 = pt.getActiveIframe(_e20);

            _t23 && _t23.vg && pt.canCache(_t23.vg) ? (pt.switchActiveIframe(Rt.getIframeContainer(), void 0, !1), setTimeout(function () {
              pt.switchActiveIframe(Rt.getIframeContainer(), _t23, !1), window.postMessage({
                msg: "refreshRoute"
              }, "*");
            })) : (_t23 && _e20.removeChild(_t23), window.postMessage({
              msg: "refreshRoute"
            }, "*"));
          } else this.navigateTo(n);
        }
      }
    }, {
      key: "showPageNotFoundError",
      value: function () {
        var _showPageNotFoundError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(e, t, n) {
          var i,
              r,
              _e21,
              o,
              _args22 = arguments;

          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  i = _args22.length > 3 && _args22[3] !== undefined ? _args22[3] : !1;
                  r = rt.getConfigValue("routing.pageNotFoundHandler");

                  if (!("function" == typeof r)) {
                    _context22.next = 5;
                    break;
                  }

                  _e21 = r(n, i);
                  return _context22.abrupt("return", void (_e21 && _e21.redirectTo && this.navigateTo(_e21.redirectTo)));

                case 5:
                  o = {
                    text: st.getTranslation(i ? "luigi.notExactTargetNode" : "luigi.requestedRouteNotFound", {
                      route: n
                    }),
                    type: "error",
                    ttl: 1
                  };
                  e.showAlert(o, !1), this.navigateTo(Lt.addLeadingSlash(t));

                case 7:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22, this);
        }));

        function showPageNotFoundError(_x35, _x36, _x37) {
          return _showPageNotFoundError.apply(this, arguments);
        }

        return showPageNotFoundError;
      }()
    }, {
      key: "navigateToLink",
      value: function navigateToLink(e) {
        e.externalLink && e.externalLink.url ? this.navigateToExternalLink(e.externalLink) : this.navigateTo(e.link);
      }
    }, {
      key: "navigateToExternalLink",
      value: function navigateToExternalLink(e) {
        var t = _objectSpread(_objectSpread({}, vt.externalLink), e);

        window.open(t.url, t.sameWindow ? "_self" : "_blank").focus();
      }
    }, {
      key: "navigateWebComponent",
      value: function navigateWebComponent(e, t, n, i, r) {
        var o = t.get(),
            a = document.querySelector(".wcContainer");

        for (; a.lastChild;) {
          a.lastChild.remove();
        }

        Ct.renderWebComponent(o.viewUrl, a, o.context, i);
      }
    }, {
      key: "navigateWebComponentCompound",
      value: function navigateWebComponentCompound(e, t, n, i, r) {
        var o = t.get(),
            a = document.querySelector(".wcContainer");

        for (; a.lastChild;) {
          a.lastChild.remove();
        }

        Ct.renderWebComponentCompound(i, a, o.context);
      }
    }]);

    return _class19;
  }())();
  var kt = new ( /*#__PURE__*/function () {
    function _class20() {
      _classCallCheck(this, _class20);

      this.splitViewValues, this.internalValues = {
        innerHeight: null,
        rightContentHeight: null,
        thresholdTop: null,
        thresholdBottom: null,
        m_pos_prev: null
      };
    }

    _createClass(_class20, [{
      key: "getContainer",
      value: function getContainer() {
        return document.getElementById("splitViewContainer");
      }
    }, {
      key: "getDragger",
      value: function getDragger() {
        return document.getElementById("splitViewDragger");
      }
    }, {
      key: "getDraggerButton",
      value: function getDraggerButton() {
        return document.querySelector("#splitViewDragger>.lui-collapse-btn");
      }
    }, {
      key: "getCollapsedDraggerButton",
      value: function getCollapsedDraggerButton() {
        return document.querySelector("#splitViewDraggerCollapsed>.lui-collapse-btn");
      }
    }, {
      key: "getDraggerBackdrop",
      value: function getDraggerBackdrop() {
        return document.getElementById("splitViewDraggerBackdrop");
      }
    }, {
      key: "getDefaultData",
      value: function getDefaultData() {
        return {
          mfSplitView: {
            displayed: !1,
            settings: {}
          }
        };
      }
    }, {
      key: "setIframe",
      value: function setIframe(e, t, n) {
        e && (e = Dt.substituteViewUrl(e, t));
        var i = Rt.createIframe(e, void 0, n.get().lastNode, "split-view");
        return document.querySelector(".iframeSplitViewCnt").appendChild(i), i;
      }
    }, {
      key: "prepareSplitViewData",
      value: function () {
        var _prepareSplitViewData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(e, t) {
          var n, i, r, o, a, s, l;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  n = t && t.length ? Lt.getPathWithoutHash(t) : "";
                  _context23.next = 3;
                  return ht.getNavigationPath(rt.getConfigValueAsync("navigation.nodes"), t);

                case 3:
                  i = _context23.sent;
                  r = Dt.parseParams(n.split("?")[1]);
                  o = Dt.getNodeParams(r);
                  a = Dt.getLastNodeObject(i);
                  s = e.get().splitViewSettings;
                  s.title || (s.title = a.label);
                  l = s.collapsed || !1;
                  e.set({
                    splitViewSettings: s,
                    lastNode: a,
                    pathData: i,
                    nodeParams: o,
                    collapsed: l,
                    isDataPrepared: !0
                  });

                case 11:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23);
        }));

        function prepareSplitViewData(_x38, _x39) {
          return _prepareSplitViewData.apply(this, arguments);
        }

        return prepareSplitViewData;
      }()
    }, {
      key: "createAndSetView",
      value: function createAndSetView(e) {
        var _e$get = e.get(),
            t = _e$get.nodeParams,
            n = _e$get.lastNode,
            i = _e$get.pathData;

        if (n.webcomponent) {
          Ct.renderWebComponent(n.viewUrl, document.querySelector(".iframeSplitViewCnt"), i.context, n);
          var _r11 = {
            splitViewWC: document.querySelector(".iframeSplitViewCnt"),
            splitViewWCData: _objectSpread(_objectSpread({}, i), {}, {
              nodeParams: t
            })
          };
          e.set(_r11), e.dispatch("wcCreated", _objectSpread(_objectSpread({}, _r11), {}, {
            collapsed: !1
          }));
        } else {
          var _r12 = {
            splitViewIframe: this.setIframe(n.viewUrl, {
              context: i.context,
              pathParams: i.pathParams,
              nodeParams: t
            }, e),
            splitViewIframeData: _objectSpread(_objectSpread({}, i), {}, {
              nodeParams: t
            })
          };
          e.set(_r12), e.dispatch("iframeCreated", _objectSpread(_objectSpread({}, _r12), {}, {
            collapsed: !1
          }));
        }

        this.fixIOSscroll();
      }
    }, {
      key: "fixIOSscroll",
      value: function fixIOSscroll() {
        if (!(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) return;
        var e = document.querySelector(".iframeSplitViewCnt iframe");
        e && e.addEventListener("load", function () {
          document.querySelector(".iframeSplitViewCnt").style.overflow = "hidden", setTimeout(function () {
            document.querySelector(".iframeSplitViewCnt").style.overflow = "auto";
          });
        });
      }
    }, {
      key: "calculateInitialValues",
      value: function calculateInitialValues(e, t) {
        if (t) {
          var _n21 = e || 40,
              _i18 = e ? 100 - e : 60;

          return {
            percent: _n21,
            bottom: parseInt(Lt.computePxFromPercent(t, _n21)),
            top: parseInt(Lt.computePxFromPercent(t, _i18))
          };
        }
      }
    }, {
      key: "calculateAndSetSplitViewValues",
      value: function calculateAndSetSplitViewValues(e, t) {
        var n = parseInt(Lt.computePxFromPercent(t.rightContentHeight, 100 - e)) + at.getShellbar().clientHeight;
        this.splitViewValues = this.enforceTresholds(n, t.innerHeight - n, t);
      }
    }, {
      key: "enforceTresholds",
      value: function enforceTresholds(e, t) {
        var n = this.internalValues;
        return e <= n.thresholdTop ? (e = n.thresholdTop, t = n.innerHeight - n.thresholdTop) : t <= n.thresholdBottom && (e = n.innerHeight - n.thresholdBottom, t = n.thresholdBottom), {
          top: e,
          bottom: t,
          percent: Lt.computePercentFromPx(n.rightContentHeight, t)
        };
      }
    }, {
      key: "open",
      value: function open(e, t, n) {
        var i = {
          displayed: !0,
          collapsed: !0 === n.collapsed,
          nodepath: t,
          settings: n
        };
        this.splitViewValues = this.calculateInitialValues(i.settings && i.settings.size, Lt.getContentAreaHeight()), this.sendMessageToClients("internal", {
          exists: !0,
          size: this.splitViewValues.percent,
          collapsed: i.collapsed
        }), e.set({
          mfSplitView: i,
          splitViewValues: this.splitViewValues
        });
      }
    }, {
      key: "close",
      value: function close(e) {
        e.get().splitViewIframe || e.get().splitViewWC ? e.getUnsavedChangesModalPromise(e.get().splitViewWC ? e.get().splitViewWC : e.get().splitViewIframe.contentWindow).then(function () {
          e.get().mfSplitView && (e.get().mfSplitView.displayed = !1, e.get().mfSplitView.collapsed = !1, e.set({
            mfSplitView: e.get().mfSplitView
          })), e.dispatch("statusChanged", {
            displayed: !1
          }), Rt.getIframeContainer().style.paddingBottom = "", kt.sendMessageToClients("close.ok");
        }) : e.get().mfSplitView.displayed && (e.get().mfSplitView.displayed = !1, e.set({
          mfSplitView: e.get().mfSplitView
        }));
      }
    }, {
      key: "expand",
      value: function () {
        var _expand = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e) {
          var _this21 = this;

          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  this.sendMessageToClients("internal", {
                    exists: !0,
                    size: this.splitViewValues.percent,
                    collapsed: !1
                  }), this.sendMessageToClients("expand.ok"), e.dispatch("statusChanged", {
                    displayed: !0,
                    collapsed: !1
                  }), this.getContainer().style.top = "".concat(this.splitViewValues.top, "px"), Rt.getIframeContainer().style.paddingBottom = "".concat(this.splitViewValues.bottom, "px"), setTimeout(function () {
                    _this21.getDragger().style.top = "".concat(_this21.splitViewValues.top, "px");
                  });

                case 1:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24, this);
        }));

        function expand(_x40) {
          return _expand.apply(this, arguments);
        }

        return expand;
      }()
    }, {
      key: "collapse",
      value: function collapse(e) {
        var _this22 = this;

        (e.get().splitViewIframe || e.get().splitViewWC) && e.getUnsavedChangesModalPromise(e.get().splitViewWC ? e.get().splitViewWC : e.get().splitViewIframe.contentWindow).then(function () {
          _this22.sendMessageToClients("internal", {
            exists: !0,
            size: _this22.splitViewValues.percent,
            collapsed: !0
          }), _this22.sendMessageToClients("collapse.ok"), e.dispatch("statusChanged", {
            displayed: !0,
            collapsed: !0
          }), _this22.getContainer().style.top = "", Rt.getIframeContainer().style.paddingBottom = "";
        });
      }
    }, {
      key: "sendMessageToClients",
      value: function sendMessageToClients(e, t) {
        Rt.sendMessageToVisibleIframes({
          msg: "luigi.navigation.splitview.".concat(e),
          data: t
        });
      }
    }]);

    return _class20;
  }())();
  var It = new ( /*#__PURE__*/function () {
    function _class21() {
      _classCallCheck(this, _class21);
    }

    _createClass(_class21, [{
      key: "luigiAfterInit",
      value: function luigiAfterInit() {
        rt.getConfigBooleanValue("settings.appLoadingIndicator.hideAutomatically") && setTimeout(function () {
          lt.hideAppLoadingIndicator();
        }, 0);
      }
    }]);

    return _class21;
  }())();
  var Tt = new ( /*#__PURE__*/function () {
    function _class22() {
      _classCallCheck(this, _class22);

      this._defaultStorage = "localStorage", this._authKey = "luigi.auth", this._newlyAuthorizedKey = "luigi.newlyAuthorized", this._invalidStorageMsg = "Configuration Error: Invalid auth.storage value defined. Must be one of localStorage, sessionStorage or none.";
    }

    _createClass(_class22, [{
      key: "getStorageKey",
      value: function getStorageKey() {
        return this._authKey;
      }
    }, {
      key: "getStorageType",
      value: function getStorageType() {
        return this._storageType || (this._storageType = rt.getConfigValue("auth.storage") || this._defaultStorage), this._storageType;
      }
    }, {
      key: "getAuthData",
      value: function getAuthData() {
        return this._getStore(this.getStorageKey());
      }
    }, {
      key: "setAuthData",
      value: function setAuthData(e) {
        this._setStore(this.getStorageKey(), e);
      }
    }, {
      key: "removeAuthData",
      value: function removeAuthData() {
        this._setStore(this.getStorageKey(), void 0);
      }
    }, {
      key: "isNewlyAuthorized",
      value: function isNewlyAuthorized() {
        return !!this._getStore(this._newlyAuthorizedKey);
      }
    }, {
      key: "setNewlyAuthorized",
      value: function setNewlyAuthorized() {
        this._setStore(this._newlyAuthorizedKey, !0);
      }
    }, {
      key: "removeNewlyAuthorized",
      value: function removeNewlyAuthorized() {
        this._setStore(this._newlyAuthorizedKey, void 0);
      }
    }, {
      key: "_setStore",
      value: function _setStore(e, t) {
        switch (this.getStorageType()) {
          case "localStorage":
          case "sessionStorage":
            void 0 !== t ? window[this.getStorageType()].setItem(e, JSON.stringify(t)) : window[this.getStorageType()].removeItem(e);
            break;

          case "none":
            this[e] = t;
            break;

          default:
            console.error(this._invalidStorageMsg);
        }
      }
    }, {
      key: "_getStore",
      value: function _getStore(e) {
        try {
          switch (this.getStorageType()) {
            case "localStorage":
            case "sessionStorage":
              return JSON.parse(window[this.getStorageType()].getItem(e));

            case "none":
              return this[e];

            default:
              console.error(this._invalidStorageMsg);
          }
        } catch (e) {
          console.warn("Error parsing authorization data. Auto-logout might not work!");
        }
      }
    }]);

    return _class22;
  }())();
  var Nt = new ( /*#__PURE__*/function () {
    function _class23() {
      _classCallCheck(this, _class23);

      return this._userInfoStore = Xe({}), this._loggedInStore = Xe(!1), this;
    }

    _createClass(_class23, [{
      key: "setUserInfo",
      value: function setUserInfo(e) {
        this._userInfoStore.set(e);
      }
    }, {
      key: "setLoggedIn",
      value: function setLoggedIn(e) {
        this._loggedInStore.set(e);
      }
    }, {
      key: "getUserInfoStore",
      value: function getUserInfoStore() {
        return this._userInfoStore;
      }
    }, {
      key: "getLoggedInStore",
      value: function getLoggedInStore() {
        return this._loggedInStore;
      }
    }, {
      key: "setProfileLogoutFn",
      value: function setProfileLogoutFn(e) {
        this._profileLogoutFn = e;
      }
    }, {
      key: "init",
      value: function () {
        var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
          var _this23 = this;

          var e, t, n;
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  e = rt.getConfigValue("auth.use");

                  if (e) {
                    _context25.next = 3;
                    break;
                  }

                  return _context25.abrupt("return", Promise.resolve(!0));

                case 3:
                  t = rt.getConfigValue("auth.".concat(e)), n = Pt.parseUrlAuthErrors() || {};
                  _context25.next = 6;
                  return Pt.handleUrlAuthErrors(t, n.error, n.errorDescription);

                case 6:
                  if (!_context25.sent) {
                    _context25.next = 10;
                    break;
                  }

                  _context25.t0 = (this.idpProviderInstance = this.getIdpProviderInstance(e, t), Lt.isPromise(this.idpProviderInstance) ? this.idpProviderInstance.then(function (e) {
                    return _this23.idpProviderInstance = e, _this23.checkAuth(t);
                  })["catch"](function (e) {
                    var t = "Error: ".concat(e.message || e);
                    console.error(t, e.message && e), rt.setErrorMessage(t);
                  }) : this.checkAuth(t));
                  _context25.next = 11;
                  break;

                case 10:
                  _context25.t0 = void 0;

                case 11:
                  return _context25.abrupt("return", _context25.t0);

                case 12:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25, this);
        }));

        function init() {
          return _init2.apply(this, arguments);
        }

        return init;
      }()
    }, {
      key: "checkAuth",
      value: function () {
        var _checkAuth = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e) {
          var _this24 = this;

          var t, _n22;

          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  t = Pt.getStoredAuthData();

                  if (!(!t || !Pt.isLoggedIn())) {
                    _context26.next = 11;
                    break;
                  }

                  if (!rt.getConfigValue("auth.disableAutoLogin")) {
                    _context26.next = 4;
                    break;
                  }

                  return _context26.abrupt("return");

                case 4:
                  _n22 = !0;
                  _context26.t0 = t;

                  if (!_context26.t0) {
                    _context26.next = 10;
                    break;
                  }

                  _context26.next = 9;
                  return ot.handleAuthEvent("onAuthExpired", e);

                case 9:
                  _n22 = _context26.sent;

                case 10:
                  return _context26.abrupt("return", _n22 ? this.startAuthorization() : void 0);

                case 11:
                  this.idpProviderInstance.settings && Lt.isFunction(this.idpProviderInstance.settings.userInfoFn) ? this.idpProviderInstance.settings.userInfoFn(this.idpProviderInstance.settings, t).then(function (e) {
                    _this24.setUserInfo(e), _this24.setLoggedIn(!0);
                  }) : Lt.isFunction(this.idpProviderInstance.userInfo) ? this.idpProviderInstance.userInfo(e).then(function (e) {
                    _this24.setUserInfo(e), _this24.setLoggedIn(!0);
                  }) : (this.setLoggedIn(!0), this.setUserInfo(p(this._userInfoStore)));
                  _context26.t1 = Lt.isFunction(rt.getConfigValue("auth.events.onAuthSuccessful")) && Tt.isNewlyAuthorized();

                  if (!_context26.t1) {
                    _context26.next = 16;
                    break;
                  }

                  _context26.next = 16;
                  return ot.handleAuthEvent("onAuthSuccessful", e, t);

                case 16:
                  Tt.removeNewlyAuthorized();
                  Lt.isFunction(this.idpProviderInstance.setTokenExpirationAction) && this.idpProviderInstance.setTokenExpirationAction();
                  Lt.isFunction(this.idpProviderInstance.setTokenExpireSoonAction) && this.idpProviderInstance.setTokenExpireSoonAction();

                case 19:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26, this);
        }));

        function checkAuth(_x41) {
          return _checkAuth.apply(this, arguments);
        }

        return checkAuth;
      }()
    }, {
      key: "startAuthorization",
      value: function () {
        var _startAuthorization = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  if (!this.idpProviderInstance) {
                    _context27.next = 2;
                    break;
                  }

                  return _context27.abrupt("return", this.idpProviderInstance.login().then(function (e) {
                    Tt.setNewlyAuthorized(), e && console.error(e);
                  }));

                case 2:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27, this);
        }));

        function startAuthorization() {
          return _startAuthorization.apply(this, arguments);
        }

        return startAuthorization;
      }()
    }, {
      key: "logout",
      value: function logout() {
        var _this25 = this;

        var e = Pt.getStoredAuthData(),
            t = /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e) {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return ot.handleAuthEvent("onLogout", _this25.idpProviderInstance.settings, void 0, e);

                  case 2:
                    Tt.removeAuthData();

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28);
          }));

          return function t(_x42) {
            return _ref13.apply(this, arguments);
          };
        }(),
            n = rt.getConfigValue("auth.".concat(rt.getConfigValue("auth.use"), ".logoutFn"));

        Lt.isFunction(n) ? n(this.idpProviderInstance.settings, e, t) : Lt.isFunction(this.idpProviderInstance.logout) ? this.idpProviderInstance.logout(e, t) : this._profileLogoutFn ? this._profileLogoutFn(e, t) : t(this.idpProviderInstance.settings.logoutUrl);
      }
    }, {
      key: "IdpProviderException",
      value: function IdpProviderException(e) {
        return {
          message: e,
          name: "IdpProviderException"
        };
      }
    }, {
      key: "getIdpProviderInstance",
      value: function () {
        var _getIdpProviderInstance = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e, t) {
          var _this26 = this;

          var n, _i19;

          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  n = Lt.getConfigValueFromObject(t, "idpProvider");

                  if (!n) {
                    _context29.next = 6;
                    break;
                  }

                  _context29.next = 4;
                  return new n(t);

                case 4:
                  _i19 = _context29.sent;
                  return _context29.abrupt("return", (["login"].forEach(function (t) {
                    if (!Lt.isFunction(_i19[t])) throw _this26.IdpProviderException("".concat(t, " function does not exist in custom IDP Provider ").concat(e));
                  }), _i19));

                case 6:
                  if (Lt.isFunction(rt.getConfigValue("auth.events.onAuthConfigError"))) {
                    _context29.next = 8;
                    break;
                  }

                  throw this.IdpProviderException("IDP Provider ".concat(e, " does not exist."));

                case 8:
                  _context29.next = 10;
                  return ot.handleAuthEvent("onAuthConfigError", {
                    idpProviderName: e,
                    type: "IdpProviderException"
                  });

                case 10:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29, this);
        }));

        function getIdpProviderInstance(_x43, _x44) {
          return _getIdpProviderInstance.apply(this, arguments);
        }

        return getIdpProviderInstance;
      }()
    }, {
      key: "unload",
      value: function unload() {
        this.idpProviderInstance && Lt.isFunction(this.idpProviderInstance.unload) && this.idpProviderInstance.unload();
      }
    }]);

    return _class23;
  }())();
  var $t = new ( /*#__PURE__*/function () {
    function _class24() {
      _classCallCheck(this, _class24);

      this.decorators = [];
    }

    _createClass(_class24, [{
      key: "hasDecorators",
      value: function hasDecorators() {
        return this.decorators.length > 0;
      }
    }, {
      key: "add",
      value: function add(e) {
        this.decorators = this.decorators.filter(function (t) {
          return t.uid !== e.uid;
        }).concat(e);
      }
    }, {
      key: "applyDecorators",
      value: function applyDecorators(e) {
        var t = new URL(Lt.prependOrigin(e)),
            n = this.decorators.filter(function (e) {
          return "queryString" === e.type;
        });

        for (var _e22 = 0; _e22 < n.length; _e22++) {
          var _i20 = n[_e22];
          t.searchParams.has(_i20.key) && t.searchParams["delete"](_i20.key);

          var _r13 = _i20.valueFn();

          t.searchParams.append(_i20.key, _r13);
        }

        return t.href;
      }
    }]);

    return _class24;
  }())();
  var Pt = new ( /*#__PURE__*/function () {
    function _class25() {
      _classCallCheck(this, _class25);
    }

    _createClass(_class25, [{
      key: "getStoredAuthData",
      value: function getStoredAuthData() {
        return Tt.getAuthData();
      }
    }, {
      key: "isLoggedIn",
      value: function isLoggedIn() {
        var e = this.getStoredAuthData();
        return e && function () {
          return e.accessTokenExpirationDate > Number(new Date());
        }();
      }
    }, {
      key: "parseUrlAuthErrors",
      value: function parseUrlAuthErrors() {
        var e = Lt.getUrlParameter("error"),
            t = Lt.getUrlParameter("errorDescription");
        if (e) return {
          error: e,
          errorDescription: t
        };
      }
    }, {
      key: "handleUrlAuthErrors",
      value: function () {
        var _handleUrlAuthErrors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e, t, n) {
          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.t0 = !t;

                  if (_context30.t0) {
                    _context30.next = 5;
                    break;
                  }

                  _context30.next = 4;
                  return ot.handleAuthEvent("onAuthError", e, {
                    error: t,
                    errorDescription: n
                  }, e.logoutUrl + "?post_logout_redirect_uri=" + e.post_logout_redirect_uri + "&error=" + t + "&errorDescription=" + n);

                case 4:
                  _context30.t0 = _context30.sent;

                case 5:
                  return _context30.abrupt("return", _context30.t0);

                case 6:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30);
        }));

        function handleUrlAuthErrors(_x45, _x46, _x47) {
          return _handleUrlAuthErrors.apply(this, arguments);
        }

        return handleUrlAuthErrors;
      }()
    }]);

    return _class25;
  }())();
  var Et = new ( /*#__PURE__*/function () {
    function _class26() {
      _classCallCheck(this, _class26);
    }

    _createClass(_class26, [{
      key: "sanitizeHtml",
      value: function sanitizeHtml(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/javascript:/g, "");
      }
    }, {
      key: "restoreSanitizedBrs",
      value: function restoreSanitizedBrs(e) {
        return e.replace(/&lt;br\/&gt;/g, "<br>").replace(/&lt;br \/&gt;/g, "<br>").replace(/&lt;br&gt;/g, "<br>").replace(/&lt;br &gt;/g, "<br>");
      }
    }, {
      key: "restoreSanitizedElements",
      value: function restoreSanitizedElements(e) {
        var t = e;
        var n = ["i", "b", "br", "mark", "strong", "em", "small", "del", "ins", "sub", "sup"];

        for (var _e23 = 0; _e23 < n.length; _e23++) {
          var _i21 = new RegExp("&lt;".concat(n[_e23], "/&gt;"), "g"),
              _r14 = new RegExp("&lt;".concat(n[_e23], " /&gt;"), "g"),
              o = new RegExp("&lt;".concat(n[_e23], "&gt;"), "g"),
              _a12 = new RegExp("&lt;".concat(n[_e23], " &gt;"), "g"),
              _s8 = new RegExp("&lt;/".concat(n[_e23], "[/]&gt;"), "g"),
              _l3 = new RegExp("&lt;/".concat(n[_e23], " [/]&gt;"), "g"),
              _c2 = new RegExp("&lt;[/]".concat(n[_e23], "&gt;"), "g"),
              _d3 = new RegExp("&lt;[/]".concat(n[_e23], " &gt;"), "g");

          t = t.replace(_i21, "<".concat(n[_e23], ">")).replace(_r14, "<".concat(n[_e23], ">")).replace(o, "<".concat(n[_e23], ">")).replace(_a12, "<".concat(n[_e23], ">")).replace(_s8, "</".concat(n[_e23], ">")).replace(_l3, "</".concat(n[_e23], ">")).replace(_c2, "</".concat(n[_e23], ">")).replace(_d3, "</".concat(n[_e23], ">"));
        }

        return t;
      }
    }, {
      key: "sanatizeHtmlExceptTextFormatting",
      value: function sanatizeHtmlExceptTextFormatting(e) {
        return this.restoreSanitizedElements(this.sanitizeHtml(e));
      }
    }, {
      key: "sanitizeParam",
      value: function sanitizeParam(e) {
        return String(e).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&sol;");
      }
    }, {
      key: "escapeKeyForRegexp",
      value: function escapeKeyForRegexp(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
    }, {
      key: "processTextAndLinks",
      value: function processTextAndLinks(e, t, n) {
        var _this27 = this;

        var i = {
          sanitizedText: this.restoreSanitizedBrs(this.sanitizeHtml(e)),
          links: []
        };
        return t ? Object.entries(t).reduce(function (e, _ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              t = _ref15[0],
              i = _ref15[1];

          var r = "_luigi_alert_".concat(n, "_link_").concat(_this27.sanitizeParam(t)),
              o = "<a id=\"".concat(r, "\">").concat(_this27.restoreSanitizedBrs(_this27.sanitizeHtml(i.text)), "</a>"),
              a = _this27.escapeKeyForRegexp(t),
              s = new RegExp("({".concat(a, "})"), "g");

          return {
            sanitizedText: e.sanitizedText.replace(s, o),
            links: e.links.concat({
              elemId: r,
              url: encodeURI(_this27.sanitizeHtml(i.url))
            })
          };
        }, i) : i;
      }
    }]);

    return _class26;
  }())();
  var Lt = new ( /*#__PURE__*/function () {
    function _class27() {
      _classCallCheck(this, _class27);
    }

    _createClass(_class27, [{
      key: "getRandomId",
      value: function getRandomId() {
        return (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0];
      }
    }, {
      key: "isFunction",
      value: function isFunction(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }
    }, {
      key: "isPromise",
      value: function isPromise(e) {
        return e && this.isFunction(e.then);
      }
    }, {
      key: "isIE",
      value: function isIE() {
        var e = navigator.userAgent;
        return Boolean(e.includes("MSIE ") || e.includes("Trident/"));
      }
    }, {
      key: "isObject",
      value: function isObject(e) {
        return e && "object" == _typeof(e) && !Array.isArray(e);
      }
    }, {
      key: "deepMerge",
      value: function deepMerge(e) {
        for (var _len5 = arguments.length, t = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          t[_key5 - 1] = arguments[_key5];
        }

        if (!t.length) return e;
        var n = t.shift();
        if (this.isObject(e) && this.isObject(n)) for (var _t24 in n) {
          this.isObject(n[_t24]) ? (e[_t24] || Object.assign(e, _defineProperty({}, _t24, {})), this.deepMerge(e[_t24], n[_t24])) : Object.assign(e, _defineProperty({}, _t24, n[_t24]));
        }
        return this.deepMerge.apply(this, [e].concat(t));
      }
    }, {
      key: "getUrlWithoutHash",
      value: function getUrlWithoutHash(e) {
        if (!e) return !1;
        var t = e.split("#")[0];
        return t.startsWith("http") ? t : window.location.origin + (t.startsWith("/") ? "" : "/") + t;
      }
    }, {
      key: "hasHash",
      value: function hasHash(e) {
        return e && 0 === e.search(/^[#\/].*$/);
      }
    }, {
      key: "getPathWithoutHash",
      value: function getPathWithoutHash(e) {
        for (; this.hasHash(e);) {
          e = e.substr(1);
        }

        return e;
      }
    }, {
      key: "getUrlParameter",
      value: function getUrlParameter(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
        return t && decodeURIComponent(t[1].replace(/\+/g, " ")) || "";
      }
    }, {
      key: "prependOrigin",
      value: function prependOrigin(e) {
        if (e.startsWith("http")) return e;
        var t = e.startsWith("/");
        return e.length ? window.location.origin + (t ? "" : "/") + e : window.location.origin;
      }
    }, {
      key: "addLeadingSlash",
      value: function addLeadingSlash(e) {
        return (e.startsWith("/") ? "" : "/") + e;
      }
    }, {
      key: "addTrailingSlash",
      value: function addTrailingSlash(e) {
        return "string" != typeof e ? e : e.replace(/\/?$/, "/");
      }
    }, {
      key: "trimLeadingSlash",
      value: function trimLeadingSlash(e) {
        return e.replace(/^\/+/g, "");
      }
    }, {
      key: "trimTrailingSlash",
      value: function trimTrailingSlash(e) {
        return e.replace(/\/+$/, "");
      }
    }, {
      key: "getTrimmedUrl",
      value: function getTrimmedUrl(e) {
        var t = 0 < e.length ? this.getPathWithoutHash(e) : e;
        return this.trimTrailingSlash(t.split("?")[0]);
      }
    }, {
      key: "normalizePath",
      value: function normalizePath(e) {
        return "string" != typeof e ? e : this.addLeadingSlash(this.addTrailingSlash(e));
      }
    }, {
      key: "getConfigValueFromObject",
      value: function getConfigValueFromObject(e, t) {
        var n = 0,
            i = e;
        var r = t.split(".");

        for (; i && n < r.length;) {
          i = i[r[n++]];
        }

        return i;
      }
    }, {
      key: "canComponentHandleModal",
      value: function canComponentHandleModal(e) {
        return e && "function" == typeof e.get;
      }
    }, {
      key: "escapeRegExp",
      value: function escapeRegExp(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }, {
      key: "replaceVars",
      value: function replaceVars(e, t, n) {
        var _this28 = this;

        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var r = e;
        return t && Object.entries(t).forEach(function (e) {
          r = r.replace(new RegExp(_this28.escapeRegExp((i ? "{" : "") + n + e[0] + (i ? "}" : "")), "g"), encodeURIComponent(e[1]));
        }), i && (r = r.replace(new RegExp("\\{" + this.escapeRegExp(n) + "[^\\}]+\\}", "g"), "")), r;
      }
    }, {
      key: "getInnerHeight",
      value: function getInnerHeight() {
        return at.isCustomLuigiContainer() ? at.getLuigiContainer().clientHeight : window.innerHeight;
      }
    }, {
      key: "getContentAreaHeight",
      value: function getContentAreaHeight() {
        return this.getInnerHeight() - at.getShellbar().clientHeight;
      }
    }, {
      key: "computePxFromPercent",
      value: function computePxFromPercent(e, t) {
        return e / 100 * t;
      }
    }, {
      key: "computePercentFromPx",
      value: function computePercentFromPx(e, t) {
        return Math.floor(100 * t / e);
      }
    }, {
      key: "isElementVisible",
      value: function isElementVisible(e) {
        return "none" !== window.getComputedStyle(e, null).getPropertyValue("display");
      }
    }, {
      key: "removeInternalProperties",
      value: function removeInternalProperties(e) {
        return e && Object.keys(e).filter(function (e) {
          return !e.startsWith("_");
        }).reduce(function (t, n) {
          return t[n] = e[n], t;
        }, {}) || e;
      }
    }, {
      key: "removeProperties",
      value: function removeProperties(e, t) {
        var n = {};
        if (!t instanceof Array || !t.length) return console.error("[ERROR] removeProperties requires second parameter: array of keys to remove from object."), e;

        var _loop = function _loop(_i22) {
          if (e.hasOwnProperty(_i22)) {
            var _r15 = 0 === t.filter(function (e) {
              return _i22.includes(e);
            }).length,
                o = 0 === t.filter(function (e) {
              return e.endsWith("*");
            }).map(function (e) {
              return e.slice(0, -1);
            }).filter(function (e) {
              return _i22.startsWith(e);
            }).length;

            _r15 && o && (n[_i22] = e[_i22]);
          }
        };

        for (var _i22 in e) {
          _loop(_i22);
        }

        return n;
      }
    }, {
      key: "semverCompare",
      value: function semverCompare(e, t) {
        for (var n = e.split("-")[0].split("."), i = t.split("-")[0].split("."), r = 0; r < 3; r++) {
          var o = Number(n[r]),
              a = Number(i[r]);
          if (o > a) return 1;
          if (a > o) return -1;
          if (!isNaN(o) && isNaN(a)) return 1;
          if (isNaN(o) && !isNaN(a)) return -1;
        }

        return 0;
      }
    }, {
      key: "requestExperimentalFeature",
      value: function requestExperimentalFeature(e, t) {
        var n = rt.getConfigValue("settings.experimental." + e);
        return t && !n && console.warn("Experimental feature not enabled: ", e), n;
      }
    }]);

    return _class27;
  }())();
  var Rt = new ( /*#__PURE__*/function () {
    function _class28() {
      _classCallCheck(this, _class28);
    }

    _createClass(_class28, [{
      key: "specialIframeTypes",
      get: function get() {
        return [{
          iframeKey: "modalIframe",
          dataKey: "modalIframeData",
          iframeConfigKey: "modal"
        }, {
          iframeKey: "drawerIframe",
          dataKey: "drawerIframeData",
          iframeConfigKey: "drawer"
        }, {
          iframeKey: "splitViewIframe",
          dataKey: "splitViewIframeData",
          iframeConfigKey: "splitView"
        }];
      }
    }, {
      key: "hideElementChildren",
      value: function hideElementChildren(e) {
        e.children && Array.from(e.children).forEach(function (e) {
          "IFRAME" === e.tagName && (e.style.display = "none");
        });
      }
    }, {
      key: "removeElementChildren",
      value: function removeElementChildren(e) {
        _toConsumableArray(e.children).forEach(function (t) {
          t.vg || "IFRAME" !== t.tagName || e.removeChild(t);
        });
      }
    }, {
      key: "removeIframe",
      value: function removeIframe(e, t) {
        Array.from(t.children).forEach(function (n) {
          n === e && t.removeChild(n);
        });
      }
    }, {
      key: "replaceVars",
      value: function replaceVars(e, t, n) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var r = e;
        return t && Object.entries(t).forEach(function (e) {
          r = r.replace(new RegExp(Lt.escapeRegExp((i ? "{" : "") + n + e[0] + (i ? "}" : "")), "g"), encodeURIComponent(e[1]));
        }), i && (r = r.replace(new RegExp("\\{" + Lt.escapeRegExp(n) + "[^\\}]+\\}", "g"), "")), r;
      }
    }, {
      key: "isSameDomain",
      value: function isSameDomain(e, t) {
        if (e.iframe) {
          var _e24 = t.get(),
              _n23 = Lt.getUrlWithoutHash(_e24.previousNodeValues.viewUrl),
              _i23 = Lt.getUrlWithoutHash(_e24.viewUrl),
              _r16 = _e24.previousNodeValues.viewGroup,
              o = _e24.viewGroup;

          if (_n23 === _i23 && !_r16 && !o) return !0;
        }

        return !1;
      }
    }, {
      key: "isSameViewGroup",
      value: function isSameViewGroup(e, t) {
        if (e.iframe) {
          var _e25 = t.get(),
              _n24 = Lt.getUrlWithoutHash(_e25.previousNodeValues.viewUrl),
              _i24 = Lt.getUrlWithoutHash(_e25.viewUrl);

          if (this.getLocation(_n24) === this.getLocation(_i24)) {
            var _t25 = _e25.previousNodeValues.viewGroup,
                _n25 = _e25.viewGroup;
            if (_t25 && _n25 && _t25 === _n25) return !0;
          }
        }

        return !1;
      }
    }, {
      key: "canReuseIframe",
      value: function canReuseIframe(e, t) {
        return this.isSameDomain(e, t) || this.isSameViewGroup(e, t);
      }
    }, {
      key: "getLocation",
      value: function getLocation(e) {
        var t = document.createElement("a");
        return t.href = e, t.origin ? t.origin : t.protocol && t.host ? "".concat(t.protocol, "//").concat(t.host) : window.location.origin;
      }
    }, {
      key: "urlMatchesTheDomain",
      value: function urlMatchesTheDomain() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var t = arguments.length > 1 ? arguments[1] : undefined;
        return this.getLocation(e) === this.getLocation(t);
      }
    }, {
      key: "iframeIsSameDomain",
      value: function iframeIsSameDomain(e, t) {
        return this.urlMatchesTheDomain(e, t);
      }
    }, {
      key: "getIframeContainer",
      value: function getIframeContainer() {
        var e = Array.from(document.querySelectorAll(".iframeContainer"));
        return e.length > 0 ? e[0] : void 0;
      }
    }, {
      key: "getMicrofrontendsInDom",
      value: function getMicrofrontendsInDom() {
        return Ue.map(function (_ref16) {
          var e = _ref16.type,
              t = _ref16.selector;
          return Array.from(document.querySelectorAll(t)).map(function (t) {
            return {
              id: t.luigi.id,
              container: t,
              active: Lt.isElementVisible(t),
              type: e
            };
          });
        }).reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
    }, {
      key: "getMicrofrontendIframes",
      value: function getMicrofrontendIframes() {
        return this.getMicrofrontendsInDom().map(function (e) {
          return e.container;
        });
      }
    }, {
      key: "getCurrentMicrofrontendIframe",
      value: function getCurrentMicrofrontendIframe() {
        var e = this.getModalIframes(),
            t = this.getMainIframes().filter(Lt.isElementVisible);
        return e[0] || t[0] || null;
      }
    }, {
      key: "getIframesWithType",
      value: function getIframesWithType(e) {
        return this.getMicrofrontendsInDom().filter(function (t) {
          return t.type === e;
        }).map(function (e) {
          return e.container;
        });
      }
    }, {
      key: "getMainIframes",
      value: function getMainIframes() {
        return this.getIframesWithType("main");
      }
    }, {
      key: "getModalIframes",
      value: function getModalIframes() {
        return this.getIframesWithType("modal");
      }
    }, {
      key: "getVisibleIframes",
      value: function getVisibleIframes() {
        return this.getMicrofrontendsInDom().filter(function (e) {
          return e.active;
        }).map(function (e) {
          return e.container;
        });
      }
    }, {
      key: "sendMessageToIframe",
      value: function sendMessageToIframe(e, t) {
        if (!(e.luigi && e.luigi.viewUrl && e._ready)) return;
        var n = this.getLocation(e.luigi.viewUrl);
        "" !== n && e.contentWindow && e.contentWindow.postMessage(t, n);
      }
    }, {
      key: "sendMessageToVisibleIframes",
      value: function sendMessageToVisibleIframes(e) {
        var _this29 = this;

        this.getVisibleIframes().forEach(function (t) {
          return _this29.sendMessageToIframe(t, e);
        });
      }
    }, {
      key: "broadcastMessageToAllIframes",
      value: function broadcastMessageToAllIframes(e) {
        var _this30 = this;

        Rt.getMicrofrontendIframes().forEach(function (t) {
          return _this30.sendMessageToIframe(t, e);
        });
      }
    }, {
      key: "createIframe",
      value: function createIframe(e, t, n, i) {
        var r = ["allow-forms", "allow-modals", "allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin", "allow-scripts"],
            o = rt.getConfigValue("settings.customSandboxRules"),
            a = rt.getConfigValue("settings.allowRules"),
            s = o ? _toConsumableArray(new Set([].concat(r, _toConsumableArray(o)))) : r,
            l = document.createElement("iframe");
        l.src = $t.hasDecorators() ? $t.applyDecorators(e) : e, a && (l.allow = a.join(" ")), l.sandbox = s.join(" "), l.luigi = {
          viewUrl: e,
          currentNode: n,
          createdAt: new Date().getTime(),
          id: Lt.getRandomId()
        }, t && (l.vg = t), n && n.clientPermissions && (l.luigi.clientPermissions = n.clientPermissions);
        var c = rt.getConfigValue("settings.iframeCreationInterceptor");
        if (Lt.isFunction(c)) try {
          c(l, t, n, i);
        } catch (e) {
          console.error("Error applying iframe creation interceptor: ", e);
        }
        return l;
      }
    }, {
      key: "isMessageSource",
      value: function isMessageSource(e, t) {
        return t && t.contentWindow === e.source;
      }
    }, {
      key: "getValidMessageSource",
      value: function getValidMessageSource(e) {
        var _this31 = this;

        var t = [].concat(_toConsumableArray(Rt.getMicrofrontendIframes()), [{
          contentWindow: window,
          luigi: {
            viewUrl: window.location.href
          }
        }]).find(function (t) {
          return _this31.isMessageSource(e, t);
        });
        if (!t || !t.luigi || !t.luigi.viewUrl) return;
        var n = "luigi.navigate.ok" === e.data.msg;
        if (n && !t.luigi.nextViewUrl) return;
        var i = n ? t.luigi.nextViewUrl : t.luigi.viewUrl;
        return this.iframeIsSameDomain(i, e.origin) ? t : void 0;
      }
    }]);

    return _class28;
  }())();
  var At = new ( /*#__PURE__*/function () {
    function _class29() {
      _classCallCheck(this, _class29);

      this.EXP_CAT_KEY = "luigi.preferences.navigation.expandedCategories", this.COL_NAV_KEY = "luigi.preferences.navigation.collapsedNavigation", this.virtualGroupPrefix = "___";
    }

    _createClass(_class29, [{
      key: "getProductSwitcherConfig",
      value: function getProductSwitcherConfig() {
        var e = rt.getConfigValue("navigation.productSwitcher");
        return Object.assign({
          icon: "grid",
          label: "My Products"
        }, e);
      }
    }, {
      key: "getProductSwitcherColumnsNumber",
      value: function getProductSwitcherColumnsNumber() {
        return 3 === this.getProductSwitcherConfig().columns ? 3 : 4;
      }
    }, {
      key: "prepareForTests",
      value: function prepareForTests() {
        var t = "";

        for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          e[_key6] = arguments[_key6];
        }

        return e.forEach(function (e) {
          e && (t += (t ? "_" : "") + encodeURIComponent(e.toLowerCase().split(" ").join("")));
        }), t;
      }
    }, {
      key: "isNodeAccessPermitted",
      value: function isNodeAccessPermitted(e, t, n) {
        if (ot.isAuthorizationEnabled()) {
          var _t26 = Pt.isLoggedIn(),
              _n26 = e.anonymousAccess;

          if (_t26 && "exclusive" === _n26 || !_t26 && "exclusive" !== _n26 && !0 !== _n26) return !1;
        }

        if (e && e.visibleForFeatureToggles) {
          var _t27 = ut.getActiveFeatureToggleList();

          var _iterator2 = _createForOfIteratorHelper(e.visibleForFeatureToggles),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _n27 = _step2.value;

              if (_n27.startsWith("!")) {
                if (_t27.includes(_n27.slice(1))) return !1;
              } else if (!_t27.includes(_n27)) return !1;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        var i = rt.getConfigValue("navigation.nodeAccessibilityResolver");
        return "function" != typeof i || i(e, t, n);
      }
    }, {
      key: "applyContext",
      value: function applyContext(e, t, n) {
        if (t) for (var i in t) {
          e[i] = t[i];
        }
        return n && e.parentNavigationContexts.unshift(n), e;
      }
    }, {
      key: "getNodePath",
      value: function getNodePath(e) {
        return e.parent ? this.getNodePath(e.parent) + "/" + e.pathSegment : e.pathSegment;
      }
    }, {
      key: "groupNodesBy",
      value: function groupNodesBy(e, t, n) {
        var _this32 = this;

        var i = {};
        var r = 0,
            o = 0;
        return e.forEach(function (e) {
          var a, s;
          var l = e[t];
          l && "object" == _typeof(l) ? (a = l.label, s = Object.assign({}, l)) : (a = l, n && !l && (a = _this32.virtualGroupPrefix + o), s = {
            label: a
          });
          var c = i[a];
          c || (n && l && o++, void 0 !== s.order && null !== s.order && "" !== s.order || (s.order = a ? r++ : -1), c = [], i[a] = c), c.metaInfo || (c.metaInfo = s), !c.metaInfo.categoryUid && a && c.metaInfo.collapsible && (c.metaInfo.categoryUid = e.parent ? _this32.getNodePath(e.parent) + ":" + a : a), e.hideFromNav || c.push(e);
        }), Object.keys(i).forEach(function (e) {
          (function (e) {
            e.sort(function (e, t) {
              return (e.order || 0) - (t.order || 0);
            });
          })(i[e]), 0 === i[e].length && delete i[e];
        }), i;
      }
    }, {
      key: "generateTopNavNodes",
      value: function () {
        var _generateTopNavNodes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(e) {
          var t, n, i, r, o, a, _iterator3, _step3, _loop2, s, _e26;

          return regeneratorRuntime.wrap(function _callee31$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return ht.getFilteredChildren(e[0]);

                case 2:
                  t = _context32.sent;
                  n = null, i = 0, r = {};
                  o = [];
                  a = [];
                  _iterator3 = _createForOfIteratorHelper(t);
                  _context32.prev = 7;
                  _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2() {
                    var s, t, l, _e27, _n28;

                    return regeneratorRuntime.wrap(function _loop2$(_context31) {
                      while (1) {
                        switch (_context31.prev = _context31.next) {
                          case 0:
                            s = _step3.value;
                            t = void 0;
                            e.forEach(function (e) {
                              n || e !== s || (n = s);
                            }), s.hideFromNav || i++;
                            l = !!s.badgeCounter;
                            _context31.t0 = l;

                            if (!_context31.t0) {
                              _context31.next = 9;
                              break;
                            }

                            _context31.next = 8;
                            return s.badgeCounter.count();

                          case 8:
                            t = _context31.sent;

                          case 9:
                            if (!s.category) {
                              _context31.next = 15;
                              break;
                            }

                            _e27 = s.category.label || s.category;

                            if (r[_e27]) {
                              if (r[_e27].icon || (r[_e27].icon = s.category.icon, r[_e27].altText = s.category.altText), l && !r[_e27].badgeCounter) r[_e27].badgeCounter = {
                                label: "",
                                count: function count() {
                                  return t;
                                }
                              };else if (l) {
                                _n28 = r[_e27].badgeCounter.count() + t;

                                r[_e27].badgeCounter.count = function () {
                                  return _n28;
                                };
                              }
                            } else r[_e27] = {
                              isCat: !0,
                              label: _e27,
                              icon: s.category.icon,
                              altText: s.category.altText,
                              children: [],
                              badgeCounter: l && {
                                label: "",
                                count: function count() {
                                  return t;
                                }
                              }
                            }, o.push(r[_e27]);

                            r[_e27].children.push(s);

                            _context31.next = 16;
                            break;

                          case 15:
                            o.push(s);

                          case 16:
                            t && a.push(t);

                          case 17:
                          case "end":
                            return _context31.stop();
                        }
                      }
                    }, _loop2);
                  });

                  _iterator3.s();

                case 10:
                  if ((_step3 = _iterator3.n()).done) {
                    _context32.next = 14;
                    break;
                  }

                  return _context32.delegateYield(_loop2(), "t0", 12);

                case 12:
                  _context32.next = 10;
                  break;

                case 14:
                  _context32.next = 19;
                  break;

                case 16:
                  _context32.prev = 16;
                  _context32.t1 = _context32["catch"](7);

                  _iterator3.e(_context32.t1);

                case 19:
                  _context32.prev = 19;

                  _iterator3.f();

                  return _context32.finish(19);

                case 22:
                  s = {
                    children: o,
                    selectedNode: n,
                    visibleNodeCount: i
                  };

                  if (a.length) {
                    _e26 = a.reduce(function (e, t) {
                      return e + t;
                    });
                    s.totalBadgeNode = {
                      badgeCounter: {
                        count: function count() {
                          return _e26;
                        },
                        label: ""
                      }
                    };
                  }

                  return _context32.abrupt("return", s);

                case 25:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee31, null, [[7, 16, 19, 22]]);
        }));

        function generateTopNavNodes(_x48) {
          return _generateTopNavNodes.apply(this, arguments);
        }

        return generateTopNavNodes;
      }()
    }, {
      key: "loadExpandedCategories",
      value: function loadExpandedCategories() {
        var e = [];
        var t = localStorage.getItem(this.EXP_CAT_KEY);
        if (t) try {
          e = JSON.parse(t);
        } catch (e) {
          console.warn("Preference data corrupted, using default");
        }
        return e;
      }
    }, {
      key: "storeExpandedState",
      value: function storeExpandedState(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var i = this.loadExpandedCategories(),
            r = e.split(":")[0];
        if (t) n && (i = i.filter(function (e) {
          return -1 === e.indexOf(r + ":");
        })), i.indexOf(e) < 0 && i.push(e);else {
          var _t28 = i.indexOf(e);

          _t28 >= 0 && i.splice(_t28, 1);
        }
        return localStorage.setItem(this.EXP_CAT_KEY, JSON.stringify(i)), i;
      }
    }, {
      key: "isOpenUIiconName",
      value: function isOpenUIiconName(e) {
        return /^[a-z0-9\-]+$/i.test(e);
      }
    }, {
      key: "handleUnresponsiveClient",
      value: function handleUnresponsiveClient(e) {
        if (e.errorFn) e.errorFn();else {
          console.warn("Something went wrong with a client! You will be redirected to another page.");

          var _t29 = e.redirectPath || "/";

          xt.navigateTo(_t29);
        }
      }
    }]);

    return _class29;
  }())();
  var Dt = new ( /*#__PURE__*/function () {
    function _class30() {
      _classCallCheck(this, _class30);

      this.defaultContentViewParamPrefix = "~";
    }

    _createClass(_class30, [{
      key: "getLastNodeObject",
      value: function getLastNodeObject(e) {
        var t = _toConsumableArray(e.navigationPath).pop();

        return t || {};
      }
    }, {
      key: "getDefaultChildNode",
      value: function () {
        var _getDefaultChildNode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(e, t) {
          var n, i, r, _e28, _t30;

          return regeneratorRuntime.wrap(function _callee32$(_context33) {
            while (1) {
              switch (_context33.prev = _context33.next) {
                case 0:
                  n = e.navigationPath[e.navigationPath.length - 1];

                  if (!t) {
                    _context33.next = 7;
                    break;
                  }

                  _context33.next = 4;
                  return t(n, e.context);

                case 4:
                  _context33.t0 = _context33.sent;
                  _context33.next = 10;
                  break;

                case 7:
                  _context33.next = 9;
                  return De.getConfigValueFromObjectAsync(n, "children", e.context);

                case 9:
                  _context33.t0 = _context33.sent;

                case 10:
                  i = _context33.t0;
                  r = i.find(function (e) {
                    return e.pathSegment === n.defaultChildNode;
                  });

                  if (!(n.defaultChildNode && r)) {
                    _context33.next = 14;
                    break;
                  }

                  return _context33.abrupt("return", n.defaultChildNode);

                case 14:
                  if (!(i && i.length)) {
                    _context33.next = 21;
                    break;
                  }

                  if (!(1 === e.navigationPath.length)) {
                    _context33.next = 18;
                    break;
                  }

                  _e28 = i.find(function (e) {
                    return e.pathSegment;
                  });
                  return _context33.abrupt("return", _e28 && _e28.pathSegment || console.error("At least one navigation node in the root hierarchy must have a pathSegment."));

                case 18:
                  _t30 = i.find(function (e) {
                    return e.pathSegment && (e.viewUrl || e.externalLink && e.externalLink.url);
                  });

                  if (!_t30) {
                    _context33.next = 21;
                    break;
                  }

                  return _context33.abrupt("return", _t30.pathSegment);

                case 21:
                  return _context33.abrupt("return", "");

                case 22:
                case "end":
                  return _context33.stop();
              }
            }
          }, _callee32);
        }));

        function getDefaultChildNode(_x49, _x50) {
          return _getDefaultChildNode.apply(this, arguments);
        }

        return getDefaultChildNode;
      }()
    }, {
      key: "parseParams",
      value: function parseParams(e) {
        var t = {},
            n = e ? e.split("&") : null;
        return n && n.forEach(function (e) {
          var n = e.split("=");
          n && n.length > 0 && (t[decodeURIComponent(n[0])] = decodeURIComponent(n[1]));
        }), t;
      }
    }, {
      key: "getNodeParams",
      value: function getNodeParams(e) {
        var t = {},
            n = this.getContentViewParamPrefix();
        return e && Object.entries(e).forEach(function (e) {
          if (e[0].startsWith(n)) {
            var _i25 = e[0].substr(n.length);

            t[_i25] = e[1];
          }
        }), this.sanitizeParamsMap(t);
      }
    }, {
      key: "applyPathParams",
      value: function applyPathParams(e, t) {
        var n = e;
        return t && Object.entries(t).forEach(function (_ref17) {
          var _ref18 = _slicedToArray(_ref17, 2),
              e = _ref18[0],
              t = _ref18[1];

          n = n.replace(new RegExp(":" + e, "g"), t);
        }), n;
      }
    }, {
      key: "findViewGroup",
      value: function findViewGroup(e) {
        return e.viewGroup ? e.viewGroup : e.parent ? this.findViewGroup(e.parent) : void 0;
      }
    }, {
      key: "getContentViewParamPrefix",
      value: function getContentViewParamPrefix() {
        var e = rt.getConfigValue("routing.nodeParamPrefix");
        return !1 === e ? e = "" : e || (e = this.defaultContentViewParamPrefix), e;
      }
    }, {
      key: "addRouteChangeListener",
      value: function addRouteChangeListener(e) {
        var t = rt.getConfigValue("routing.useHashRouting");
        if (Vt.addEventListener("message", function (n) {
          if ("refreshRoute" === n.data.msg && n.origin === window.origin) {
            var _n29 = t ? xt.getHashPath() : xt.getModifiedPathname();

            e(_n29);
          }
        }), t) return Vt.addEventListener("hashchange", function (t) {
          e(xt.getHashPath(t.newURL));
        });
        Vt.addEventListener("popstate", function (t) {
          e(xt.getModifiedPathname(), t.detail && t.detail.withoutSync);
        });
      }
    }, {
      key: "buildRoute",
      value: function buildRoute(e, t, n) {
        return e.parent ? this.buildRoute(e.parent, "/".concat(e.parent.pathSegment).concat(t), n) : t + (n ? "?" + n : "");
      }
    }, {
      key: "getRouteLink",
      value: function getRouteLink(e, t, n) {
        var i = n || "";
        if (e.externalLink && e.externalLink.url) return e.externalLink;

        if (e.link) {
          return i + (e.link.startsWith("/") ? e.link : xt.buildFromRelativePath(e));
        }

        var r = Dt.buildRoute(e, "/".concat(e.pathSegment));
        return i + Lt.replaceVars(r, t, ":", !1);
      }
    }, {
      key: "getNodeHref",
      value: function getNodeHref(e, t) {
        if (rt.getConfigBooleanValue("navigation.addNavHrefs")) {
          var _n30 = Dt.getRouteLink(e, t, rt.getConfigValue("routing.useHashRouting") ? "#" : "");

          return _n30.url || _n30;
        }

        return "javascript:void(0)";
      }
    }, {
      key: "substituteDynamicParamsInObject",
      value: function substituteDynamicParamsInObject(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ":";
        return Object.entries(e).map(function (_ref19) {
          var _ref20 = _slicedToArray(_ref19, 2),
              e = _ref20[0],
              i = _ref20[1];

          var r = Object.keys(t).find(function (e) {
            return i === n + e;
          });
          return [e, r ? t[r] : i];
        }).reduce(function (e, _ref21) {
          var _ref22 = _slicedToArray(_ref21, 2),
              t = _ref22[0],
              n = _ref22[1];

          return Object.assign(e, _defineProperty({}, t, n));
        }, {});
      }
    }, {
      key: "isDynamicNode",
      value: function isDynamicNode(e) {
        return e.pathSegment && e.pathSegment.length > 0 && ":" === e.pathSegment[0];
      }
    }, {
      key: "getDynamicNodeValue",
      value: function getDynamicNodeValue(e, t) {
        return this.isDynamicNode(e) ? t[e.pathSegment.substring(1)] : void 0;
      }
    }, {
      key: "substituteViewUrl",
      value: function substituteViewUrl(e, t) {
        return e = Lt.replaceVars(e, t.pathParams, ":", !1), e = Lt.replaceVars(e, t.context, "context."), e = Lt.replaceVars(e, t.nodeParams, "nodeParams.");
      }
    }, {
      key: "sanitizeParamsMap",
      value: function sanitizeParamsMap(e) {
        return Object.entries(e).reduce(function (e, t) {
          return e[Et.sanitizeParam(t[0])] = Et.sanitizeParam(t[1]), e;
        }, {});
      }
    }, {
      key: "setFeatureToggles",
      value: function setFeatureToggles(e, t) {
        var n,
            i = this.sanitizeParamsMap(this.parseParams(t.split("?")[1]));
        if (i[e] && (n = i[e]), !n) return;
        var r = n.split(",");
        r.length > 0 && "" !== r[0] && r.forEach(function (e) {
          return ut.setFeatureToggle(e);
        });
      }
    }, {
      key: "getIntentObject",
      value: function getIntentObject(e) {
        var t = e.split("?intent=")[1];

        if (t) {
          var _e29 = t.split("-");

          if (2 === _e29.length) {
            var _t31 = _e29[0],
                _n31 = _e29[1].split("?");

            if (2 === _n31.length || 1 === _n31.length) {
              var _e30 = _n31[0],
                  _i26 = _n31[1];

              if (_i26) {
                _i26 = _i26.split("&");
                var _e31 = [];
                _i26.forEach(function (t) {
                  var n = t.split("=");
                  2 === n.length && _e31.push(_defineProperty({}, n[0], n[1]));
                }), _i26 = _e31;
              }

              var _r17 = /^[0-9a-zA-Z]+$/,
                  o = /^[0-9a-zA-Z_]+$/;
              if (_t31.match(_r17) && _e30.match(o)) return {
                semanticObject: _t31,
                action: _e30,
                params: _i26
              };
              console.warn("Intent found contains illegal characters. Semantic object must be alphanumeric, action must be (alphanumeric+underscore)");
            }
          }
        }

        return !1;
      }
    }, {
      key: "getIntentPath",
      value: function getIntentPath(e) {
        var t = rt.getConfigValue("navigation.intentMapping");

        if (t && t.length > 0) {
          var _n32 = e.replace(/\?intent=/i, "?intent="),
              _i27 = this.getIntentObject(_n32);

          if (_i27) {
            var _e32 = t.find(function (e) {
              return e.semanticObject === _i27.semanticObject && e.action === _i27.action;
            });

            if (!_e32) return !1;

            if (_e32 = _e32.pathSegment, _i27.params) {
              var _t32 = rt.getConfigValue("routing.nodeParamPrefix");

              _t32 = _t32 || "~", _e32 = _e32.concat("?".concat(_t32)), _i27.params.forEach(function (n) {
                _e32 = (_e32 = (_e32 = _e32.concat(Object.keys(n)[0])).concat("=")).concat(n[Object.keys(n)[0]]).concat("&".concat(_t32));
              }), _e32 = _e32.slice(0, -(_t32.length + 1));
            }

            return _e32;
          }

          console.warn("Could not parse given intent link.");
        } else console.warn("No intent mappings are defined in Luigi configuration.");

        return !1;
      }
    }]);

    return _class30;
  }())();
  var Ot = new ( /*#__PURE__*/function () {
    function _class31() {
      _classCallCheck(this, _class31);
    }

    _createClass(_class31, [{
      key: "optimizeScope",
      value: function optimizeScope(e) {
        var t = "";
        var n = [];
        return _toConsumableArray(e).sort().forEach(function (e) {
          e && !n.includes(e) && (t && 0 === e.indexOf(t) || (n.push(e), t = e));
        }), n;
      }
    }, {
      key: "expandScope",
      value: function expandScope(e) {
        var t = [];
        return e.forEach(function (e) {
          var n = "";
          e.split(".").forEach(function (e) {
            n = n + (n ? "." : "") + e, t.push(n);
          });
        }), _toConsumableArray(new Set(t));
      }
    }, {
      key: "doOnStoreChange",
      value: function doOnStoreChange(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        e.subscribe(t), this.expandScope(n).forEach(function (n) {
          e.subscribeToScope(t, n);
        });
      }
    }]);

    return _class31;
  }())();
  var Vt = new ( /*#__PURE__*/function () {
    function _class32() {
      var _this33 = this;

      _classCallCheck(this, _class32);

      this.listeners = [], window.onunload = function () {
        return _this33.removeAllEventListeners();
      };
    }

    _createClass(_class32, [{
      key: "addEventListener",
      value: function addEventListener(e, t) {
        this.listeners.push({
          type: e,
          listenerFn: t
        }), window.addEventListener(e, t);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(e, t) {
        this.listeners = this.listeners.filter(function (n) {
          return !(n.type === e && n.listenerFn === t);
        }), window.removeEventListener(e, t);
      }
    }, {
      key: "removeAllEventListeners",
      value: function removeAllEventListeners() {
        this.listeners.forEach(function (e) {
          window.removeEventListener(e.type, e.listenerFn);
        }), this.listeners = [];
      }
    }]);

    return _class32;
  }())();
  var Mt = new ( /*#__PURE__*/function () {
    function _class33() {
      _classCallCheck(this, _class33);

      this.init = !1, this.storage = void 0, this.browseSupported = void 0;
    }

    _createClass(_class33, [{
      key: "checkInit",
      value: function checkInit() {
        this.init || (this.storage = window.localStorage, this.browseSupported = this.supportLocalStorage(), this.init = !0);
      }
    }, {
      key: "supportLocalStorage",
      value: function supportLocalStorage() {
        try {
          return "localStorage" in window && null !== window.localStorage;
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "checkStorageBrowserSupport",
      value: function checkStorageBrowserSupport() {
        if (!this.browseSupported) throw "Browser does not support local storage";
      }
    }, {
      key: "process",
      value: function process(e, t, n, i, r) {
        try {
          this.checkInit(), this.checkStorageBrowserSupport();
          var o = this[i];
          if ("function" != typeof o) throw i + " is not a supported operation for the storage";

          var _a13 = o.bind(this, this.cleanHostname(t), r)();

          this.sendBackOperation(e, n, "OK", _a13);
        } catch (t) {
          console.log(t), this.sendBackOperation(e, n, "ERROR", t);
        }
      }
    }, {
      key: "cleanHostname",
      value: function cleanHostname(e) {
        return e.replace("http://", "").replace("https://", "");
      }
    }, {
      key: "setItem",
      value: function setItem(e, t) {
        this.checkKey(t);
        var n = this.stringifyValue(t.value),
            i = this.buildKey(e, t.key);
        this.storage.setItem(i, n);
      }
    }, {
      key: "getItem",
      value: function getItem(e, t) {
        this.checkKey(t);
        var n = this.buildKey(e, t.key),
            i = this.storage.getItem(n);
        return i ? this.parseJsonIfPossible(i) : void 0;
      }
    }, {
      key: "buildKey",
      value: function buildKey(e, t) {
        return this.buildPrefix(e) + t.trim();
      }
    }, {
      key: "buildPrefix",
      value: function buildPrefix(e) {
        return "Luigi#" + e + "#";
      }
    }, {
      key: "removeItem",
      value: function removeItem(e, t) {
        this.checkKey(t);
        var n = this.buildKey(e, t.key),
            i = this.storage.getItem(n);
        return i ? (this.storage.removeItem(n), i) : void 0;
      }
    }, {
      key: "clear",
      value: function clear(e, t) {
        var _this34 = this;

        var n = this.buildPrefix(e);
        Object.keys(this.storage).filter(function (e) {
          return e.startsWith(n);
        }).forEach(function (e) {
          return _this34.storage.removeItem(e);
        });
      }
    }, {
      key: "has",
      value: function has(e, t) {
        this.checkKey(t);
        var n = this.buildKey(e, t.key);
        return !!this.storage.getItem(n);
      }
    }, {
      key: "getAllKeys",
      value: function getAllKeys(e, t) {
        var n = this.buildPrefix(e);
        return Object.keys(this.storage).filter(function (e) {
          return e.startsWith(n);
        }).map(function (e) {
          return e.substring(n.length);
        });
      }
    }, {
      key: "checkKey",
      value: function checkKey(e) {
        if (!e.key || 0 === e.key.trim().length) throw "Missing key, we cannot execute storage operation";
      }
    }, {
      key: "parseJsonIfPossible",
      value: function parseJsonIfPossible(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      }
    }, {
      key: "stringifyValue",
      value: function stringifyValue(e) {
        if (!e) throw "Value is empty";
        if ("string" == typeof e || e instanceof String) return e;

        try {
          return JSON.stringify(e);
        } catch (e) {
          throw "Value cannot be stringify, error: " + e;
        }
      }
    }, {
      key: "sendBackOperation",
      value: function sendBackOperation(e, t, n, i) {
        var r = {
          msg: "storage",
          data: {
            id: t,
            status: n,
            result: i
          }
        };
        Rt.getMicrofrontendsInDom().filter(function (t) {
          return t.id === e;
        }).map(function (e) {
          return e.container;
        }).map(function (e) {
          return Rt.sendMessageToIframe(e, r);
        });
      }
    }]);

    return _class33;
  }())();
  var Ft = new ( /*#__PURE__*/function () {
    function _class34() {
      _classCallCheck(this, _class34);
    }

    _createClass(_class34, [{
      key: "processUserSettingGroups",
      value: function processUserSettingGroups() {
        var e = [],
            t = rt.getConfigValue("userSettings.userSettingGroups"),
            n = rt.getConfigValue("settings.userSettings.userSettingGroups"),
            i = t || n;

        if (Lt.isObject(i)) {
          for (var _t33 in i) {
            var _n33 = {};
            _n33[_t33] = i[_t33], e.push(_n33);
          }

          return e;
        }

        return e;
      }
    }, {
      key: "createIframe",
      value: function createIframe(e, t) {
        var n = Rt.createIframe(e, void 0, void 0, "usersettings"),
            i = document.querySelector(".iframeUserSettingsCtn");
        return n.setAttribute("userSettingsGroup", t), n.userSettingsGroup = t, i.appendChild(n), n;
      }
    }, {
      key: "getUserSettingsIframesInDom",
      value: function getUserSettingsIframesInDom() {
        var e = document.querySelector(".iframeUserSettingsCtn");
        return e ? e.children : [];
      }
    }, {
      key: "hideUserSettingsIframe",
      value: function hideUserSettingsIframe() {
        this.getUserSettingsIframesInDom().forEach(function (e) {
          e.style.display = "none";
        });
      }
    }, {
      key: "findActiveCustomUserSettingsIframe",
      value: function findActiveCustomUserSettingsIframe(e) {
        var t = document.querySelectorAll("[userSettingsGroup]");

        for (var _n34 = 0; _n34 < t.length; _n34++) {
          if (t[_n34].contentWindow === e) return t[_n34];
        }

        return null;
      }
    }]);

    return _class34;
  }())();
  n(397);

  function Ut(e, t, n) {
    var i = Object.create(e);
    return i.al = t[n], i;
  }

  function jt(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.al.dataSanitized ? e.al.settings.text : "";

    function _c3() {
      return e.click_handler(e);
    }

    return {
      c: function c() {
        t = P("div"), n = P("p"), i = L(), (r = P("button")).innerHTML = '<i class="sap-icon sap-icon--decline"></i>', o = L(), V(n, "class", "fd-message-strip__text svelte-19jsgtz"), V(r, "class", "fd-button fd-button--transparent fd-message"), V(r, "aria-label", "Close"), V(r, "aria-controls", "j2ALl423"), V(r, "data-testid", "luigi-alert-dismiss"), V(t, "class", a = "fd-message-strip fd-message-strip--" + e.alertTypeMap[e.al.settings.type] + " fd-message-strip--dismissible svelte-19jsgtz"), V(t, "role", "alert"), V(t, "id", "j2ALl423"), V(t, "data-testid", "luigi-alert"), s = A(r, "click", _c3);
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), n.innerHTML = l, I(t, i), I(t, r), I(t, o);
      },
      p: function p(i, r) {
        e = r, i.alertQueue && l !== (l = e.al.dataSanitized ? e.al.settings.text : "") && (n.innerHTML = l), (i.alertTypeMap || i.alertQueue) && a !== (a = "fd-message-strip fd-message-strip--" + e.alertTypeMap[e.al.settings.type] + " fd-message-strip--dismissible svelte-19jsgtz") && V(t, "class", a);
      },
      d: function d(e) {
        e && N(t), s();
      }
    };
  }

  function Bt(e) {
    var t;
    var n = e.alertQueue,
        r = [];

    for (var _t34 = 0; _t34 < n.length; _t34 += 1) {
      r[_t34] = jt(Ut(e, n, _t34));
    }

    return {
      c: function c() {
        t = P("div");

        for (var _e33 = 0; _e33 < r.length; _e33 += 1) {
          r[_e33].c();
        }

        V(t, "class", "fd-shell__overlay luigi-alert--overlay svelte-19jsgtz"), V(t, "aria-hidden", "false");
      },
      m: function m(e, n) {
        T(e, t, n);

        for (var _e34 = 0; _e34 < r.length; _e34 += 1) {
          r[_e34].m(t, null);
        }
      },
      p: function p(e, i) {
        if (e.alertTypeMap || e.alertQueue) {
          var o;

          for (n = i.alertQueue, o = 0; o < n.length; o += 1) {
            var _a14 = Ut(i, n, o);

            r[o] ? r[o].p(e, _a14) : (r[o] = jt(_a14), r[o].c(), r[o].m(t, null));
          }

          for (; o < r.length; o += 1) {
            r[o].d(1);
          }

          r.length = n.length;
        }
      },
      i: i,
      o: i,
      d: function d(e) {
        e && N(t), $(r, e);
      }
    };
  }

  function Gt(e, t, n) {
    var i = ee();
    var r = t.alertQueue,
        _t$alertTypeMap = t.alertTypeMap,
        o = _t$alertTypeMap === void 0 ? {
      info: "information",
      success: "success",
      warning: "warning",
      error: "error"
    } : _t$alertTypeMap;
    var a = ne("getUnsavedChangesModalPromise"),
        s = ne("handleNavigation");

    function l(e, t) {
      try {
        document.getElementById(t).addEventListener("click", function (t) {
          var n = !e.startsWith("/");
          t.stopPropagation(), a().then(function () {
            s({
              params: {
                link: e,
                relative: n
              }
            });
          });
        });
      } catch (e) {
        console.error("Error on Alert::addClickListener", e);
      }
    }

    Y(function () {
      if (!r || !r.length) return void console.warn("There are no alerts to display");
      if (r.processed) return;
      var e = r.map(function (e) {
        var _e$settings = e.settings,
            t = _e$settings.text,
            n = _e$settings.links,
            i = _e$settings.closeAfter,
            r = Et.processTextAndLinks(t, n, e.settings.id);
        return setTimeout(function () {
          r.links.forEach(function (e) {
            l(e.url, e.elemId);
          });
        }), {
          settings: _objectSpread(_objectSpread({}, e.settings), {}, {
            text: r.sanitizedText
          }),
          dataSanitized: !0
        };
      });
      e.processed = !0, n("alertQueue", r = e);
    }), Q(function () {});
    return e.$set = function (e) {
      "alertQueue" in e && n("alertQueue", r = e.alertQueue), "alertTypeMap" in e && n("alertTypeMap", o = e.alertTypeMap);
    }, {
      dispatch: i,
      alertQueue: r,
      alertTypeMap: o,
      addClickListener: l,
      click_handler: function click_handler(_ref23) {
        var e = _ref23.al;
        return i("alertDismiss", {
          id: e.settings.id
        });
      }
    };
  }

  var zt = /*#__PURE__*/function (_Ae) {
    _inherits(zt, _Ae);

    var _super5 = _createSuper(zt);

    function zt(e) {
      var _this35;

      _classCallCheck(this, zt);

      _this35 = _super5.call(this), Re(_assertThisInitialized(_this35), e, Gt, Bt, d, ["alertQueue", "alertTypeMap", "addClickListener"]);
      return _this35;
    }

    _createClass(zt, [{
      key: "addClickListener",
      get: function get() {
        return this.$$.ctx.addClickListener;
      }
    }]);

    return zt;
  }(Ae);

  var Wt = 38,
      Ht = 40,
      qt = 13,
      Kt = 27;
  n(398);

  function Jt(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "sap-icon--" + e.settings.icon + " svelte-1fgo0os");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.settings && n !== (n = "sap-icon--" + i.settings.icon + " svelte-1fgo0os") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Yt(e) {
    var t,
        n,
        i,
        r,
        o = e.settings.buttonConfirm + "";
    return {
      c: function c() {
        t = P("div"), n = P("button"), i = E(o), V(n, "data-testid", "luigi-modal-confirm"), V(n, "class", "fd-button fd-button--emphasized fd-button--compact fd-message-box__decisive-button confirm-button"), V(t, "class", "fd-bar__element"), r = A(n, "click", e.click_handler);
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i);
      },
      p: function p(e, t) {
        e.settings && o !== (o = t.settings.buttonConfirm + "") && M(i, o);
      },
      d: function d(e) {
        e && N(t), r();
      }
    };
  }

  function Qt(e) {
    var t,
        n,
        r,
        o,
        a,
        s,
        _c4,
        d,
        u,
        _p2,
        f,
        g,
        h,
        _m2,
        v,
        b,
        w,
        S,
        y,
        _,
        C = e.settings.header + "",
        x = e.settings.body + "",
        k = e.settings.buttonDismiss + "",
        $ = e.settings.type && Jt(e),
        R = !1 !== e.settings.buttonConfirm && Yt(e);

    return {
      c: function c() {
        t = P("div"), n = P("section"), r = P("header"), o = P("div"), a = P("div"), $ && $.c(), s = L(), _c4 = P("h2"), d = E(C), u = L(), _p2 = P("div"), f = L(), g = P("footer"), h = P("div"), R && R.c(), _m2 = L(), v = P("div"), b = P("button"), w = E(k), V(_c4, "class", "fd-title fd-title--h5"), V(a, "class", "fd-bar__element"), V(o, "class", "fd-bar__left"), V(r, "class", "fd-bar fd-bar--header fd-message-box__header"), V(_p2, "class", "fd-message-box__body svelte-1fgo0os"), V(b, "data-testid", "luigi-modal-dismiss"), V(b, "class", S = "fd-button " + (!1 === e.settings.buttonConfirm ? "fd-button--emphasized" : "fd-button--transparent") + " fd-button--compact fd-message-box__decisive-button dismiss-button svelte-1fgo0os"), V(v, "class", "fd-bar__element"), V(h, "class", "fd-bar__right"), V(g, "class", "fd-bar fd-bar--footer fd-message-box__footer"), V(n, "class", "fd-message-box__content svelte-1fgo0os"), V(t, "class", y = "fd-message-box-docs-static fd-message-box fd-message-box--" + e.settings.type + " fd-message-box--active svelte-1fgo0os"), V(t, "data-testid", "luigi-confirmation-modal"), _ = [A(window, "keydown", e.handleKeydown), A(b, "click", e.click_handler_1)];
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n), I(n, r), I(r, o), I(o, a), $ && $.m(a, null), I(a, s), I(a, _c4), I(_c4, d), I(n, u), I(n, _p2), _p2.innerHTML = x, I(n, f), I(n, g), I(g, h), R && R.m(h, null), I(h, _m2), I(h, v), I(v, b), I(b, w);
      },
      p: function p(e, n) {
        n.settings.type ? $ ? $.p(e, n) : (($ = Jt(n)).c(), $.m(a, s)) : $ && ($.d(1), $ = null), e.settings && C !== (C = n.settings.header + "") && M(d, C), e.settings && x !== (x = n.settings.body + "") && (_p2.innerHTML = x), !1 !== n.settings.buttonConfirm ? R ? R.p(e, n) : ((R = Yt(n)).c(), R.m(h, _m2)) : R && (R.d(1), R = null), e.settings && k !== (k = n.settings.buttonDismiss + "") && M(w, k), e.settings && S !== (S = "fd-button " + (!1 === n.settings.buttonConfirm ? "fd-button--emphasized" : "fd-button--transparent") + " fd-button--compact fd-message-box__decisive-button dismiss-button svelte-1fgo0os") && V(b, "class", S), e.settings && y !== (y = "fd-message-box-docs-static fd-message-box fd-message-box--" + n.settings.type + " fd-message-box--active svelte-1fgo0os") && V(t, "class", y);
      },
      i: i,
      o: i,
      d: function d(e) {
        e && N(t), $ && $.d(), R && R.d(), l(_);
      }
    };
  }

  function Xt(e, t, n) {
    var i = ee();
    var r = t.settings;
    var o = {
      confirmation: "question-mark",
      information: "message-information",
      warning: "message-warning",
      error: "message-error",
      success: "message-success"
    };
    Q(function () {
      var e = {
        icon: o[r.type],
        header: st.getTranslation("luigi.confirmationModal.header"),
        body: st.getTranslation("luigi.confirmationModal.body"),
        buttonDismiss: st.getTranslation("luigi.button.dismiss"),
        buttonConfirm: st.getTranslation("luigi.button.confirm")
      };
      n("settings", r = _objectSpread(_objectSpread({}, r), {}, {
        body: Et.sanatizeHtmlExceptTextFormatting(r.body)
      })), n("settings", r = Object.assign(e, r));
      var t = r.buttonConfirm ? "confirm-button" : "dismiss-button";

      try {
        document.querySelector(".".concat(t)).focus();
      } catch (e) {
        console.warn("Couldn't focus ".concat(t, " in modal"));
      }
    });
    return e.$set = function (e) {
      "settings" in e && n("settings", r = e.settings);
    }, {
      dispatch: i,
      settings: r,
      handleKeydown: function handleKeydown(e) {
        e.keyCode === Kt && i("modalDismiss");
      },
      click_handler: function click_handler() {
        return i("modalConfirm");
      },
      click_handler_1: function click_handler_1() {
        return i("modalDismiss");
      }
    };
  }

  var Zt = /*#__PURE__*/function (_Ae2) {
    _inherits(Zt, _Ae2);

    var _super6 = _createSuper(Zt);

    function Zt(e) {
      var _this36;

      _classCallCheck(this, Zt);

      _this36 = _super6.call(this), Re(_assertThisInitialized(_this36), e, Xt, Qt, d, ["settings", "handleKeydown"]);
      return _this36;
    }

    _createClass(Zt, [{
      key: "handleKeydown",
      get: function get() {
        return this.$$.ctx.handleKeydown;
      }
    }]);

    return Zt;
  }(Ae);

  n(399);

  function en(e) {
    var t, n, i, r;
    var o = e.$$slots["default"],
        a = g(o, e, null);
    return {
      c: function c() {
        t = P("div"), a && a.c(), V(t, "class", n = v(e.backdropClass) + " svelte-vthf9s"), V(t, "aria-hidden", "false"), V(t, "style", i = "main" === e.area ? "z-index: 0;" : "");
      },
      l: function l(e) {
        a && a.l(div_nodes);
      },
      m: function m(e, n) {
        T(e, t, n), a && a.m(t, null), r = !0;
      },
      p: function p(e, s) {
        a && a.p && e.$$scope && a.p(m(o, s, e, null), h(o, s, null)), r && !e.backdropClass || n === (n = v(s.backdropClass) + " svelte-vthf9s") || V(t, "class", n), r && !e.area || i === (i = "main" === s.area ? "z-index: 0;" : "") || V(t, "style", i);
      },
      i: function i(e) {
        r || (_e(a, e), r = !0);
      },
      o: function o(e) {
        Ce(a, e), r = !1;
      },
      d: function d(e) {
        e && N(t), a && a.d(e);
      }
    };
  }

  function tn(e, t, n) {
    var i = ee();
    var _t$backdropClass = t.backdropClass,
        r = _t$backdropClass === void 0 ? "" : _t$backdropClass,
        _t$backdropActive = t.backdropActive,
        o = _t$backdropActive === void 0 ? !1 : _t$backdropActive,
        a = !1,
        s = {},
        l = t.area,
        c = t.disable;

    var d = function d() {
      o ? s.data && s.data.heightCssClass ? n("backdropClass", r = "lui-backdrop " + s.data.heightCssClass) : n("backdropClass", r = "lui-backdrop height-auto") : n("backdropClass", r = "");
    };

    Q(function () {
      rt.getConfigValue("settings.backdropDisabled") || (d(), Vt.addEventListener("message", function (e) {
        Rt.getValidMessageSource(e) && !0 !== c && ("luigi.add-backdrop" === e.data.msg && (function (e) {
          if (!l) return !0;
          var t = [].concat(_toConsumableArray(Rt.getMicrofrontendsInDom()), [{
            contentWindow: window,
            luigi: {
              viewUrl: window.location.href
            }
          }]).find(function (t) {
            return t.container && t.container.contentWindow === e.source;
          });
          return !t || l !== t.type;
        }(e) ? n("backdropActive", o = !0) : n("backdropActive", o = !1), i("stateChanged", {
          backdropActive: !0
        })), "luigi.remove-backdrop" === e.data.msg && (n("backdropActive", o = !1), i("stateChanged", {
          backdropActive: !1
        })));
      }));
    }), Y(function () {
      o !== a && (a = o, d());
    });
    var _t$$$slots = t.$$slots,
        u = _t$$$slots === void 0 ? {} : _t$$$slots,
        p = t.$$scope;
    return e.$set = function (e) {
      "backdropClass" in e && n("backdropClass", r = e.backdropClass), "backdropActive" in e && n("backdropActive", o = e.backdropActive), "area" in e && n("area", l = e.area), "disable" in e && n("disable", c = e.disable), "$$scope" in e && n("$$scope", p = e.$$scope);
    }, {
      backdropClass: r,
      backdropActive: o,
      area: l,
      disable: c,
      $$slots: u,
      $$scope: p
    };
  }

  var nn = /*#__PURE__*/function (_Ae3) {
    _inherits(nn, _Ae3);

    var _super7 = _createSuper(nn);

    function nn(e) {
      var _this37;

      _classCallCheck(this, nn);

      _this37 = _super7.call(this), Re(_assertThisInitialized(_this37), e, tn, en, d, ["backdropClass", "backdropActive", "area", "disable"]);
      return _this37;
    }

    return nn;
  }(Ae);

  function rn(e, _ref24) {
    var _ref24$delay = _ref24.delay,
        t = _ref24$delay === void 0 ? 0 : _ref24$delay,
        _ref24$duration = _ref24.duration,
        n = _ref24$duration === void 0 ? 400 : _ref24$duration;
    var i = +getComputedStyle(e).opacity;
    return {
      delay: t,
      duration: n,
      css: function css(e) {
        return "opacity: ".concat(e * i);
      }
    };
  }

  n(400);

  function on(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        _d4,
        u = new nn({});

    u.$on("stateChanged", e.backdropStateChanged);

    var _p3 = e.settings.title && an(e);

    return {
      c: function c() {
        t = P("div"), u.$$.fragment.c(), n = L(), i = P("div"), r = P("div"), _p3 && _p3.c(), o = L(), a = P("div"), s = P("div"), (l = P("button")).innerHTML = '<i class="sap-icon sap-icon--decline"></i>', V(r, "class", "fd-bar__element"), V(i, "class", "fd-bar__left"), V(l, "class", "fd-button fd-button--transparent fd-button--compact"), V(l, "aria-label", "close"), V(s, "class", "fd-bar__element"), V(a, "class", "fd-bar__right"), V(t, "class", "fd-dialog__header fd-bar fd-bar--header"), _d4 = A(l, "click", e.click_handler);
      },
      m: function m(e, d) {
        T(e, t, d), Ee(u, t, null), I(t, n), I(t, i), I(i, r), _p3 && _p3.m(r, null), I(t, o), I(t, a), I(a, s), I(s, l), c = !0;
      },
      p: function p(e, t) {
        t.settings.title ? _p3 ? _p3.p(e, t) : ((_p3 = an(t)).c(), _p3.m(r, null)) : _p3 && (_p3.d(1), _p3 = null);
      },
      i: function i(e) {
        c || (_e(u.$$.fragment, e), c = !0);
      },
      o: function o(e) {
        Ce(u.$$.fragment, e), c = !1;
      },
      d: function d(e) {
        e && N(t), Le(u), _p3 && _p3.d(), _d4();
      }
    };
  }

  function an(e) {
    var t,
        n,
        i = e.settings.title + "";
    return {
      c: function c() {
        t = P("h3"), n = E(i), V(t, "class", "fd-dialog__title");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.settings && i !== (i = t.settings.title + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function sn(e) {
    var t;

    var n = e.$$slots["default"],
        _i28 = g(n, e, null);

    return {
      c: function c() {
        _i28 && _i28.c();
      },
      l: function l(e) {
        _i28 && _i28.l(e);
      },
      m: function m(e, n) {
        _i28 && _i28.m(e, n), t = !0;
      },
      p: function p(e, t) {
        _i28 && _i28.p && e.$$scope && _i28.p(m(n, t, e, null), h(n, t, null));
      },
      i: function i(e) {
        t || (_e(_i28, e), t = !0);
      },
      o: function o(e) {
        Ce(_i28, e), t = !1;
      },
      d: function d(e) {
        _i28 && _i28.d(e);
      }
    };
  }

  function ln(e) {
    var t, n, _i29, r;

    return {
      c: function c() {
        (t = P("div")).innerHTML = '<div class="fd-busy-indicator--m" aria-hidden="false" aria-label="Loading" data-testid="luigi-loading-spinner"><div class="fd-busy-indicator--circle-0"></div> <div class="fd-busy-indicator--circle-1"></div> <div class="fd-busy-indicator--circle-2"></div></div>', V(t, "class", "fd-page spinnerContainer svelte-1icsj7b"), V(t, "aria-hidden", "false"), V(t, "aria-label", "Loading");
      },
      m: function m(e, n) {
        T(e, t, n), r = !0;
      },
      i: function i(e) {
        r || (pe(function () {
          _i29 && _i29.end(1), n || (n = ke(t, rn, {
            delay: 250,
            duration: 250
          })), n.start();
        }), r = !0);
      },
      o: function o(e) {
        n && n.invalidate(), _i29 = Ie(t, rn, {
          duration: 250
        }), r = !1;
      },
      d: function d(e) {
        e && (N(t), _i29 && _i29.end());
      }
    };
  }

  function cn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c5,
        d,
        u,
        _p4,
        f,
        g = (e.isModal || e.isDrawer && e.settings.header) && on(e),
        h = e.isDrawer && sn(e),
        _m3 = e.showLoadingIndicator && ln();

    return {
      c: function c() {
        t = P("div"), n = P("div"), g && g.c(), i = L(), r = P("div"), h && h.c(), o = L(), a = P("div"), l = L(), _m3 && _m3.c(), V(a, "class", s = "iframeModalCtn " + (e.isDrawer ? "_drawer" : "_modal") + " svelte-1icsj7b"), V(r, "class", "fd-dialog__body svelte-1icsj7b"), V(n, "class", _c5 = "fd-dialog__content " + (e.isDrawer ? e.settings.backdrop ? "drawer drawer-dialog__content drawer__backdrop" : "drawer drawer-dialog__content" : "lui-modal-mf") + " svelte-1icsj7b"), V(n, "data-testid", "modal-mf"), V(t, "class", d = v(e.isModal || e.isDrawer && e.settings.backdrop ? "fd-dialog fd-dialog--active" : "drawer-dialog") + " svelte-1icsj7b"), V(t, "style", u = e.isModal ? "z-index:1001" : ""), f = A(window, "keydown", e.handleKeydown);
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), g && g.m(n, null), I(n, i), I(n, r), h && h.m(r, null), I(r, o), I(r, a), I(n, l), _m3 && _m3.m(n, null), _p4 = !0;
      },
      p: function p(e, l) {
        l.isModal || l.isDrawer && l.settings.header ? g ? (g.p(e, l), _e(g, 1)) : ((g = on(l)).c(), _e(g, 1), g.m(n, i)) : g && (Se(), Ce(g, 1, 1, function () {
          g = null;
        }), ye()), l.isDrawer ? h ? (h.p(e, l), _e(h, 1)) : ((h = sn(l)).c(), _e(h, 1), h.m(r, o)) : h && (Se(), Ce(h, 1, 1, function () {
          h = null;
        }), ye()), _p4 && !e.isDrawer || s === (s = "iframeModalCtn " + (l.isDrawer ? "_drawer" : "_modal") + " svelte-1icsj7b") || V(a, "class", s), l.showLoadingIndicator ? _m3 ? _e(_m3, 1) : ((_m3 = ln()).c(), _e(_m3, 1), _m3.m(n, null)) : _m3 && (Se(), Ce(_m3, 1, 1, function () {
          _m3 = null;
        }), ye()), _p4 && !e.isDrawer && !e.settings || _c5 === (_c5 = "fd-dialog__content " + (l.isDrawer ? l.settings.backdrop ? "drawer drawer-dialog__content drawer__backdrop" : "drawer drawer-dialog__content" : "lui-modal-mf") + " svelte-1icsj7b") || V(n, "class", _c5), (!_p4 || e.isModal || e.isDrawer || e.settings) && d !== (d = v(l.isModal || l.isDrawer && l.settings.backdrop ? "fd-dialog fd-dialog--active" : "drawer-dialog") + " svelte-1icsj7b") && V(t, "class", d), _p4 && !e.isModal || u === (u = l.isModal ? "z-index:1001" : "") || V(t, "style", u);
      },
      i: function i(e) {
        _p4 || (_e(g), _e(h), _e(_m3), _p4 = !0);
      },
      o: function o(e) {
        Ce(g), Ce(h), Ce(_m3), _p4 = !1;
      },
      d: function d(e) {
        e && N(t), g && g.d(), h && h.d(), _m3 && _m3.d(), f();
      }
    };
  }

  function dn(e, t, n) {
    var i = ee();
    var r,
        o,
        a,
        s = t.settings,
        _t$isDataPrepared = t.isDataPrepared,
        l = _t$isDataPrepared === void 0 ? !1 : _t$isDataPrepared,
        c = t.nodepath,
        d = !1,
        u = !1,
        p = !0,
        f = !1,
        g = !0;

    var h = /*#__PURE__*/function () {
      var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(e) {
        var _e35;

        return regeneratorRuntime.wrap(function _callee34$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(!d && !u)) {
                  _context35.next = 19;
                  break;
                }

                if (!l) {
                  _context35.next = 17;
                  break;
                }

                if (!r.webcomponent) {
                  _context35.next = 11;
                  break;
                }

                n("showLoadingIndicator", p = !1);
                _context35.next = 6;
                return m();

              case 6:
                Ct.renderWebComponent(r.viewUrl, document.querySelector(".iframeModalCtn"), o.context, r);
                i("wcCreated", {
                  modalWC: document.querySelector(".iframeModalCtn"),
                  modalWCData: _objectSpread(_objectSpread({}, o), {}, {
                    nodeParams: a
                  })
                });
                u = !0;
                _context35.next = 15;
                break;

              case 11:
                _context35.next = 13;
                return v(r.viewUrl, {
                  context: o.context,
                  pathParams: o.pathParams,
                  nodeParams: a
                });

              case 13:
                _e35 = _context35.sent;
                i("iframeCreated", {
                  modalIframe: _e35,
                  modalIframeData: _objectSpread(_objectSpread({}, o), {}, {
                    nodeParams: a
                  })
                }), d = !0;

              case 15:
                _context35.next = 19;
                break;

              case 17:
                _context35.next = 19;
                return function () {
                  var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(e) {
                    var t, c, d;
                    return regeneratorRuntime.wrap(function _callee33$(_context34) {
                      while (1) {
                        switch (_context34.prev = _context34.next) {
                          case 0:
                            t = e && e.length ? Lt.getPathWithoutHash(e) : "", c = Dt.parseParams(t.split("?")[1]);
                            a = Dt.getNodeParams(c);
                            _context34.next = 4;
                            return ht.extractDataFromPath(e);

                          case 4:
                            d = _context34.sent;
                            r = d.nodeObject, n("isDrawer", f = s.isDrawer || "object" == _typeof(r.drawer)), f ? (n("isModal", g = !1), void 0 === s.header ? (n("settings", s.header = !0, s), n("settings", s.title = r.label, s)) : s.header && s.header.title && n("settings", s.title = s.header.title, s), void 0 !== s.backdrop && s.backdrop || (n("settings", s.backdrop = !1, s), i("drawerState", {
                              activeDrawer: !0
                            })), s.size || n("settings", s.size = "s", s)) : s.title || n("settings", s.title = r.label, s), o = d.pathData, n("isDataPrepared", l = !0);

                          case 6:
                          case "end":
                            return _context34.stop();
                        }
                      }
                    }, _callee33);
                  }));

                  return function (_x52) {
                    return _ref26.apply(this, arguments);
                  };
                }()(e);

              case 19:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee34);
      }));

      return function h(_x51) {
        return _ref25.apply(this, arguments);
      };
    }(),
        m = /*#__PURE__*/function () {
      var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
        var e, t;
        return regeneratorRuntime.wrap(function _callee35$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                e = document.getElementsByClassName("lui-modal-mf");
                t = "80%";
                s.size && ("l" === s.size ? t = "80%" : "m" === s.size ? t = "60%" : "s" === s.size && (t = "40%")), e[0].setAttribute("style", "width:".concat(t, ";height:").concat(t));

              case 3:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee35);
      }));

      return function m() {
        return _ref27.apply(this, arguments);
      };
    }(),
        v = /*#__PURE__*/function () {
      var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(e, t) {
        var n;
        return regeneratorRuntime.wrap(function _callee37$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                if (!f) {
                  _context38.next = 5;
                  break;
                }

                _context38.next = 3;
                return function () {
                  var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(e) {
                    var t, n, i;
                    return regeneratorRuntime.wrap(function _callee36$(_context37) {
                      while (1) {
                        switch (_context37.prev = _context37.next) {
                          case 0:
                            t = "";
                            n = document.getElementsByClassName("drawer"), i = document.getElementsByClassName("drawer-dialog");
                            s.size && ("l" === s.size ? t = "width:75%;" : "m" === s.size ? t = "width:50%;" : "s" === s.size ? t = "width:25%;" : "xs" === s.size && (t = "width:15.5%;"));
                            s.backdrop ? n[0].setAttribute("style", t) : (i[0].setAttribute("style", t), n[0].setAttribute("style", "width:100%"));

                          case 4:
                          case "end":
                            return _context37.stop();
                        }
                      }
                    }, _callee36);
                  }));

                  return function (_x55) {
                    return _ref29.apply(this, arguments);
                  };
                }()();

              case 3:
                _context38.next = 7;
                break;

              case 5:
                _context38.next = 7;
                return m();

              case 7:
                e && (e = Dt.substituteViewUrl(e, t));
                _context38.next = 10;
                return Rt.createIframe(e, void 0, r, "modal");

              case 10:
                n = _context38.sent;
                return _context38.abrupt("return", (document.querySelector(".iframeModalCtn").appendChild(n), n));

              case 12:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee37);
      }));

      return function v(_x53, _x54) {
        return _ref28.apply(this, arguments);
      };
    }();

    X(function () {
      h(c);
    });

    var b = /*#__PURE__*/function () {
      var _ref30 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(e) {
        return regeneratorRuntime.wrap(function _callee38$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if ("luigi.show-loading-indicator" === e.data.msg && n("showLoadingIndicator", p = !0), "luigi.hide-loading-indicator" === e.data.msg && n("showLoadingIndicator", p = !1), "luigi.get-context" === e.data.msg) {
                  (!r || !r.loadingIndicator || !1 !== r.loadingIndicator.hideAutomatically) && n("showLoadingIndicator", p = !1);
                }

                "luigi.close-modal" === e.data.msg && i("close", {
                  type: "modal"
                });

              case 2:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee38);
      }));

      return function b(_x56) {
        return _ref30.apply(this, arguments);
      };
    }();

    Q(function () {
      Vt.addEventListener("message", b);
    }), Z(function () {
      Vt.removeEventListener("message", b);
    });
    var _t$$$slots2 = t.$$slots,
        w = _t$$$slots2 === void 0 ? {} : _t$$$slots2,
        S = t.$$scope;
    return e.$set = function (e) {
      "settings" in e && n("settings", s = e.settings), "isDataPrepared" in e && n("isDataPrepared", l = e.isDataPrepared), "nodepath" in e && n("nodepath", c = e.nodepath), "$$scope" in e && n("$$scope", S = e.$$scope);
    }, {
      dispatch: i,
      settings: s,
      isDataPrepared: l,
      nodepath: c,
      showLoadingIndicator: p,
      isDrawer: f,
      isModal: g,
      backdropStateChanged: function backdropStateChanged(e) {
        e && e.detail && e.detail.backdropActive && e.detail.drawer;
      },
      handleKeydown: function handleKeydown(e) {
        e.keyCode === Kt && i("close");
      },
      click_handler: function click_handler() {
        return i("close", {
          activeDrawer: !1
        });
      },
      $$slots: w,
      $$scope: S
    };
  }

  var un = /*#__PURE__*/function (_Ae4) {
    _inherits(un, _Ae4);

    var _super8 = _createSuper(un);

    function un(e) {
      var _this38;

      _classCallCheck(this, un);

      _this38 = _super8.call(this), Re(_assertThisInitialized(_this38), e, dn, cn, d, ["settings", "isDataPrepared", "nodepath", "handleKeydown"]);
      return _this38;
    }

    _createClass(un, [{
      key: "handleKeydown",
      get: function get() {
        return this.$$.ctx.handleKeydown;
      }
    }]);

    return un;
  }(Ae);

  n(401);

  function pn(e, t, n) {
    var i = Object.create(e);
    return i.option = t[n], i.optionIndex = n, i;
  }

  function fn(e, t, n) {
    var i = Object.create(e);
    return i.option = t[n], i.optionIndex = n, i;
  }

  function gn(e, t, n) {
    var i = Object.create(e);
    return i.key = t[n][0], i.schemaItem = t[n][1], i.i = n, i;
  }

  function hn(e) {
    var t,
        n = e.userSettingGroup[1].settings && mn(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.userSettingGroup[1].settings ? n ? n.p(e, i) : ((n = mn(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function mn(e) {
    var t, n;
    var i = Object.entries(e.userSettingGroup[1].settings),
        r = [];

    for (var _t35 = 0; _t35 < i.length; _t35 += 1) {
      r[_t35] = Tn(gn(e, i, _t35));
    }

    return {
      c: function c() {
        t = P("div"), n = P("div");

        for (var _e36 = 0; _e36 < r.length; _e36 += 1) {
          r[_e36].c();
        }

        V(n, "class", "fd-container lui-form-grid svelte-13wytku"), V(t, "class", "fd-page__content");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);

        for (var _e37 = 0; _e37 < r.length; _e37 += 1) {
          r[_e37].m(n, null);
        }
      },
      p: function p(e, t) {
        if (e.userSettingGroup || e.undefined || e.storedUserSettingData || e.$getTranslation) {
          var o;

          for (i = Object.entries(t.userSettingGroup[1].settings), o = 0; o < i.length; o += 1) {
            var _a15 = gn(t, i, o);

            r[o] ? r[o].p(e, _a15) : (r[o] = Tn(_a15), r[o].c(), r[o].m(n, null));
          }

          for (; o < r.length; o += 1) {
            r[o].d(1);
          }

          r.length = i.length;
        }
      },
      d: function d(e) {
        e && N(t), $(r, e);
      }
    };
  }

  function vn(e) {
    var t;

    function n(e, t) {
      return t.schemaItem.isEditable || t.schemaItem.isEditable === t.undefined ? wn : bn;
    }

    var i = n(0, e),
        r = i(e);
    return {
      c: function c() {
        r.c(), t = R();
      },
      m: function m(e, n) {
        r.m(e, n), T(e, t, n);
      },
      p: function p(e, o) {
        i === (i = n(0, o)) && r ? r.p(e, o) : (r.d(1), (r = i(o)) && (r.c(), r.m(t.parentNode, t)));
      },
      d: function d(e) {
        r.d(e), e && N(t);
      }
    };
  }

  function bn(e) {
    var t,
        n,
        i = e.storedUserSettingData[e.userSettingGroup[0]][e.key] + "";
    return {
      c: function c() {
        t = P("label"), n = E(i), V(t, "class", "lui-form-text svelte-13wytku"), V(t, "data-testid", "lui-us-input" + e.i);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        (e.storedUserSettingData || e.userSettingGroup) && i !== (i = t.storedUserSettingData[t.userSettingGroup[0]][t.key] + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function wn(e) {
    var t, n;

    function i() {
      e.input_input_handler.call(t, e);
    }

    return {
      c: function c() {
        V(t = P("input"), "class", "fd-input"), V(t, "type", "text"), V(t, "placeholder", "Field placeholder text"), V(t, "aria-label", "Image label"), V(t, "data-testid", "lui-us-input" + e.i), n = A(t, "input", i);
      },
      m: function m(n, i) {
        T(n, t, i), F(t, e.storedUserSettingData[e.userSettingGroup[0]][e.key]);
      },
      p: function p(n, i) {
        e = i, (n.storedUserSettingData || n.userSettingGroup) && t.value !== e.storedUserSettingData[e.userSettingGroup[0]][e.key] && F(t, e.storedUserSettingData[e.userSettingGroup[0]][e.key]);
      },
      d: function d(e) {
        e && N(t), n();
      }
    };
  }

  function Sn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c6,
        d,
        u,
        p,
        f,
        g,
        h,
        m,
        v = Array.isArray(e.schemaItem.options);

    function b() {
      return e.click_handler(e);
    }

    var w = v && yn(e);
    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("div"), a = P("input"), _c6 = L(), d = P("span"), u = P("button"), p = P("i"), g = L(), h = P("div"), w && w.c(), V(a, "type", "text"), V(a, "class", "fd-input fd-input-group__input"), V(a, "placeholder", s = e.$getTranslation(e.storedUserSettingData[e.userSettingGroup[0]][e.key])), V(a, "data-testid", "lui-us-input" + e.i), a.disabled = l = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable, V(p, "class", "sap-icon--navigation-down-arrow"), V(u, "aria-label", "show/hide fruit options"), V(u, "aria-expanded", "false"), V(u, "aria-haspopup", "true"), V(u, "class", "fd-input-group__button fd-button fd-button--transparent"), u.disabled = f = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable, V(d, "class", "fd-input-group__addon fd-input-group__addon--button"), V(o, "class", "fd-input-group fd-input-group--control"), V(r, "class", "fd-popover__control"), V(r, "aria-expanded", "false"), V(r, "aria-haspopup", "true"), V(h, "class", "fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill"), V(h, "aria-hidden", "true"), V(i, "class", "fd-popover"), V(n, "class", "fd-form-item"), m = A(r, "click", O(b));
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), I(o, _c6), I(o, d), I(d, u), I(u, p), I(i, g), I(i, h), w && w.m(h, null);
      },
      p: function p(t, n) {
        e = n, (t.$getTranslation || t.storedUserSettingData || t.userSettingGroup) && s !== (s = e.$getTranslation(e.storedUserSettingData[e.userSettingGroup[0]][e.key])) && V(a, "placeholder", s), t.userSettingGroup && l !== (l = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable) && (a.disabled = l), t.userSettingGroup && f !== (f = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable) && (u.disabled = f), t.userSettingGroup && (v = Array.isArray(e.schemaItem.options)), v ? w ? w.p(t, e) : ((w = yn(e)).c(), w.m(h, null)) : w && (w.d(1), w = null);
      },
      d: function d(e) {
        e && N(t), w && w.d(), m();
      }
    };
  }

  function yn(e) {
    var t, n;
    var i = e.schemaItem.options,
        r = [];

    for (var _t36 = 0; _t36 < i.length; _t36 += 1) {
      r[_t36] = _n(fn(e, i, _t36));
    }

    return {
      c: function c() {
        t = P("div"), n = P("ul");

        for (var _e38 = 0; _e38 < r.length; _e38 += 1) {
          r[_e38].c();
        }

        V(n, "class", "fd-list fd-list--dropdown"), V(n, "role", "listbox"), V(t, "class", "fd-popover__wrapper docs-max-height");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);

        for (var _e39 = 0; _e39 < r.length; _e39 += 1) {
          r[_e39].m(n, null);
        }
      },
      p: function p(e, t) {
        if (e.$getTranslation || e.userSettingGroup) {
          var o;

          for (i = t.schemaItem.options, o = 0; o < i.length; o += 1) {
            var _a16 = fn(t, i, o);

            r[o] ? r[o].p(e, _a16) : (r[o] = _n(_a16), r[o].c(), r[o].m(n, null));
          }

          for (; o < r.length; o += 1) {
            r[o].d(1);
          }

          r.length = i.length;
        }
      },
      d: function d(e) {
        e && N(t), $(r, e);
      }
    };
  }

  function _n(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s = e.$getTranslation(e.option) + "";

    function l() {
      return e.click_handler_1(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("span"), i = P("span"), r = E(s), o = L(), V(i, "class", "fd-list__bold"), V(n, "class", "fd-list__title"), V(t, "role", "option"), V(t, "tabindex", "0"), V(t, "class", "fd-list__item"), V(t, "data-testid", "lui-us-option" + e.i + "_" + e.optionIndex), a = A(t, "click", l);
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), I(n, i), I(i, r), I(t, o);
      },
      p: function p(t, n) {
        e = n, (t.$getTranslation || t.userSettingGroup) && s !== (s = e.$getTranslation(e.option) + "") && M(r, s);
      },
      d: function d(e) {
        e && N(t), a();
      }
    };
  }

  function Cn(e) {
    var t, n, i, r;
    var o = e.schemaItem.options,
        a = [];

    for (var _t37 = 0; _t37 < o.length; _t37 += 1) {
      a[_t37] = xn(pn(e, o, _t37));
    }

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div");

        for (var _e40 = 0; _e40 < a.length; _e40 += 1) {
          a[_e40].c();
        }

        V(i, "class", r = "fd-segmented-button enum-buttons-container-" + e.key + " svelte-13wytku"), V(i, "role", "group"), V(i, "aria-label", "Group label"), V(n, "class", "fd-form-item");
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i);

        for (var _e41 = 0; _e41 < a.length; _e41 += 1) {
          a[_e41].m(i, null);
        }
      },
      p: function p(e, t) {
        if (e.storedUserSettingData || e.userSettingGroup || e.undefined || e.$getTranslation) {
          var _n35;

          for (o = t.schemaItem.options, _n35 = 0; _n35 < o.length; _n35 += 1) {
            var _r18 = pn(t, o, _n35);

            a[_n35] ? a[_n35].p(e, _r18) : (a[_n35] = xn(_r18), a[_n35].c(), a[_n35].m(i, null));
          }

          for (; _n35 < a.length; _n35 += 1) {
            a[_n35].d(1);
          }

          a.length = o.length;
        }

        e.userSettingGroup && r !== (r = "fd-segmented-button enum-buttons-container-" + t.key + " svelte-13wytku") && V(i, "class", r);
      },
      d: function d(e) {
        e && N(t), $(a, e);
      }
    };
  }

  function xn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.$getTranslation(e.option) + "";

    function _c7() {
      return e.click_handler_2(e);
    }

    return {
      c: function c() {
        t = P("button"), n = E(l), V(t, "class", i = "lui-fd-enum-button fd-button fd-button--compact " + (e.storedUserSettingData[e.userSettingGroup[0]][e.key] === e.option ? "is-selected" : "") + " svelte-13wytku"), V(t, "id", r = "lui-us-enum_button_" + e.key + "_" + e.option), V(t, "data-testid", o = "lui-us-enum_button_" + e.key + "_" + e.option), t.disabled = a = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable, s = A(t, "click", _c7);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(s, c) {
        e = c, (s.$getTranslation || s.userSettingGroup) && l !== (l = e.$getTranslation(e.option) + "") && M(n, l), (s.storedUserSettingData || s.userSettingGroup) && i !== (i = "lui-fd-enum-button fd-button fd-button--compact " + (e.storedUserSettingData[e.userSettingGroup[0]][e.key] === e.option ? "is-selected" : "") + " svelte-13wytku") && V(t, "class", i), s.userSettingGroup && r !== (r = "lui-us-enum_button_" + e.key + "_" + e.option) && V(t, "id", r), s.userSettingGroup && o !== (o = "lui-us-enum_button_" + e.key + "_" + e.option) && V(t, "data-testid", o), s.userSettingGroup && a !== (a = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable) && (t.disabled = a);
      },
      d: function d(e) {
        e && N(t), s();
      }
    };
  }

  function kn(e) {
    var t, n, i, r, o, a, s, l, _c8;

    function d() {
      e.input_change_handler.call(i, e);
    }

    return {
      c: function c() {
        t = P("label"), n = P("span"), i = P("input"), a = L(), (s = P("div")).innerHTML = '<div class="fd-switch__track"><span class="fd-switch__handle" role="presentation"></span></div>', V(i, "class", "fd-switch__input"), V(i, "type", "checkbox"), V(i, "aria-labelledby", "label1"), V(i, "data-testid", r = "lui-us-checkbox-switch_" + e.key), i.disabled = o = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable, V(s, "class", "fd-switch__slider"), V(n, "class", "fd-switch__control"), V(t, "class", "fd-switch fd-switch--compact"), V(t, "data-testid", l = "lui-us-label-switch_" + e.key), _c8 = A(i, "change", d);
      },
      m: function m(r, o) {
        T(r, t, o), I(t, n), I(n, i), i.checked = e.storedUserSettingData[e.userSettingGroup[0]][e.key], I(n, a), I(n, s);
      },
      p: function p(n, a) {
        e = a, (n.storedUserSettingData || n.userSettingGroup) && (i.checked = e.storedUserSettingData[e.userSettingGroup[0]][e.key]), n.userSettingGroup && r !== (r = "lui-us-checkbox-switch_" + e.key) && V(i, "data-testid", r), n.userSettingGroup && o !== (o = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable) && (i.disabled = o), n.userSettingGroup && l !== (l = "lui-us-label-switch_" + e.key) && V(t, "data-testid", l);
      },
      d: function d(e) {
        e && N(t), _c8();
      }
    };
  }

  function In(e) {
    var t, n, i;

    function r() {
      e.input_change_handler_1.call(t, e);
    }

    return {
      c: function c() {
        V(t = P("input"), "type", "checkbox"), V(t, "class", "fd-checkbox svelte-13wytku"), t.disabled = n = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable, i = A(t, "change", r);
      },
      m: function m(n, i) {
        T(n, t, i), t.checked = e.storedUserSettingData[e.userSettingGroup[0]][e.key];
      },
      p: function p(i, r) {
        e = r, (i.storedUserSettingData || i.userSettingGroup) && (t.checked = e.storedUserSettingData[e.userSettingGroup[0]][e.key]), i.userSettingGroup && n !== (n = e.schemaItem.isEditable !== e.undefined && !e.schemaItem.isEditable) && (t.disabled = n);
      },
      d: function d(e) {
        e && N(t), i();
      }
    };
  }

  function Tn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c9,
        d,
        u,
        _p5 = e.$getTranslation(e.schemaItem.label) + "",
        f = "enum" === e.schemaItem.type && "button" === e.schemaItem.style && Array.isArray(e.schemaItem.options),
        g = "string" === e.schemaItem.type && vn(e),
        h = "enum" === e.schemaItem.type && (e.schemaItem.style === e.undefined || "list" === e.schemaItem.style) && Sn(e),
        _m4 = f && Cn(e),
        v = "boolean" === e.schemaItem.type && (!e.schemaItem.style || "switch" === e.schemaItem.style) && kn(e),
        b = "boolean" === e.schemaItem.type && "checkbox" === e.schemaItem.style && In(e);

    return {
      c: function c() {
        t = P("div"), n = P("label"), i = E(_p5), r = E(":"), o = L(), a = P("div"), g && g.c(), s = L(), h && h.c(), l = L(), _m4 && _m4.c(), _c9 = L(), v && v.c(), d = L(), b && b.c(), u = L(), V(n, "class", "fd-form-label svelte-13wytku"), V(t, "class", "lui-form-label svelte-13wytku"), V(a, "class", "lui-value-container svelte-13wytku");
      },
      m: function m(e, p) {
        T(e, t, p), I(t, n), I(n, i), I(n, r), T(e, o, p), T(e, a, p), g && g.m(a, null), I(a, s), h && h.m(a, null), I(a, l), _m4 && _m4.m(a, null), I(a, _c9), v && v.m(a, null), I(a, d), b && b.m(a, null), I(a, u);
      },
      p: function p(e, t) {
        (e.$getTranslation || e.userSettingGroup) && _p5 !== (_p5 = t.$getTranslation(t.schemaItem.label) + "") && M(i, _p5), "string" === t.schemaItem.type ? g ? g.p(e, t) : ((g = vn(t)).c(), g.m(a, s)) : g && (g.d(1), g = null), "enum" !== t.schemaItem.type || t.schemaItem.style !== t.undefined && "list" !== t.schemaItem.style ? h && (h.d(1), h = null) : h ? h.p(e, t) : ((h = Sn(t)).c(), h.m(a, l)), e.userSettingGroup && (f = "enum" === t.schemaItem.type && "button" === t.schemaItem.style && Array.isArray(t.schemaItem.options)), f ? _m4 ? _m4.p(e, t) : ((_m4 = Cn(t)).c(), _m4.m(a, _c9)) : _m4 && (_m4.d(1), _m4 = null), "boolean" !== t.schemaItem.type || t.schemaItem.style && "switch" !== t.schemaItem.style ? v && (v.d(1), v = null) : v ? v.p(e, t) : ((v = kn(t)).c(), v.m(a, d)), "boolean" === t.schemaItem.type && "checkbox" === t.schemaItem.style ? b ? b.p(e, t) : ((b = In(t)).c(), b.m(a, u)) : b && (b.d(1), b = null);
      },
      d: function d(e) {
        e && (N(t), N(o), N(a)), g && g.d(), h && h.d(), _m4 && _m4.d(), v && v.d(), b && b.d();
      }
    };
  }

  function Nn(e) {
    var t,
        n,
        r = e.userSettingGroup && e.userSettingGroup[0] && e.userSettingGroup[1] && hn(e);
    return {
      c: function c() {
        t = P("div"), r && r.c(), V(t, "class", "lui-usersettings-content"), n = [A(window, "click", $n), A(window, "blur", $n)];
      },
      m: function m(e, n) {
        T(e, t, n), r && r.m(t, null);
      },
      p: function p(e, n) {
        n.userSettingGroup && n.userSettingGroup[0] && n.userSettingGroup[1] ? r ? r.p(e, n) : ((r = hn(n)).c(), r.m(t, null)) : r && (r.d(1), r = null);
      },
      i: i,
      o: i,
      d: function d(e) {
        e && N(t), r && r.d(), l(n);
      }
    };
  }

  function $n(e) {
    document.querySelectorAll(".lui-usersettings-content .fd-popover__control").forEach(function (e) {
      En(e, !1);
    });
  }

  function Pn(e, t) {
    if (t || void 0 === t) {
      var _t38 = function e(t, n, i) {
        return t && i > 0 ? Lt.isIE() ? t.msMatchesSelector(n) ? t : e(t.parentNode, n, i - 1) : t.matches(n) ? t : e(t.parentNode, n, i - 1) : void 0;
      }(e.target, ".fd-popover__control", 20);

      $n();

      var _n36 = "true" === _t38.getAttribute("aria-expanded");

      En(_t38, !_n36);
    }
  }

  function En(e, t) {
    var n = e.querySelector(".fd-input-group__button"),
        i = e.parentNode.querySelector(".fd-popover__body");
    e.setAttribute("aria-expanded", t), i.setAttribute("aria-hidden", !t), n.setAttribute("aria-expanded", t);
  }

  function Ln(e, t, n) {
    var i,
        r = t.userSettingGroup,
        o = t.userSettingsGroupKey,
        a = t.storedUserSettingData;
    var s = ee();
    var l = ne("getTranslation");

    function c(e, t) {
      n("storedUserSettingData", a[r[0]][e] = t, a);
    }

    function d(e, t) {
      document.querySelectorAll(".enum-buttons-container-" + e + " button").forEach(function (t) {
        t.getAttribute("id") === "lui-us-enum_button_".concat(e, "_option") ? t.classList.add("fd-button--emphasized") : t.classList.remove("fd-button--emphasized");
      }), n("storedUserSettingData", a[r[0]][e] = t, a);
    }

    f(e, l, function (e) {
      n("$getTranslation", i = e);
    });
    return e.$set = function (e) {
      "userSettingGroup" in e && n("userSettingGroup", r = e.userSettingGroup), "userSettingsGroupKey" in e && n("userSettingsGroupKey", o = e.userSettingsGroupKey), "storedUserSettingData" in e && n("storedUserSettingData", a = e.storedUserSettingData);
    }, {
      userSettingGroup: r,
      userSettingsGroupKey: o,
      storedUserSettingData: a,
      getTranslation: l,
      updateSettingsObject: function updateSettingsObject() {
        s("updateSettingsObject", {
          storedUserSettingData: a
        });
      },
      updateComboBox: c,
      updateEnumButton: d,
      undefined: void 0,
      $getTranslation: i,
      input_input_handler: function input_input_handler(_ref31) {
        var e = _ref31.key;
        a[r[0]][e] = this.value, n("storedUserSettingData", a), n("userSettingGroup", r);
      },
      click_handler: function click_handler(_ref32) {
        var e = _ref32.schemaItem;
        return Pn(event, e.isEditable);
      },
      click_handler_1: function click_handler_1(_ref33) {
        var e = _ref33.key,
            t = _ref33.option;
        return c(e, t);
      },
      click_handler_2: function click_handler_2(_ref34) {
        var e = _ref34.key,
            t = _ref34.option;
        return d(e, t);
      },
      input_change_handler: function input_change_handler(_ref35) {
        var e = _ref35.key;
        a[r[0]][e] = this.checked, n("storedUserSettingData", a), n("userSettingGroup", r);
      },
      input_change_handler_1: function input_change_handler_1(_ref36) {
        var e = _ref36.key;
        a[r[0]][e] = this.checked, n("storedUserSettingData", a), n("userSettingGroup", r);
      }
    };
  }

  var Rn = /*#__PURE__*/function (_Ae5) {
    _inherits(Rn, _Ae5);

    var _super9 = _createSuper(Rn);

    function Rn(e) {
      var _this39;

      _classCallCheck(this, Rn);

      _this39 = _super9.call(this), Re(_assertThisInitialized(_this39), e, Ln, Nn, d, ["userSettingGroup", "userSettingsGroupKey", "storedUserSettingData", "updateSettingsObject"]);
      return _this39;
    }

    _createClass(Rn, [{
      key: "updateSettingsObject",
      get: function get() {
        return this.$$.ctx.updateSettingsObject;
      }
    }]);

    return Rn;
  }(Ae);

  n(402);
  var An = Ne.Object,
      Dn = Ne.window;

  function On(e, t, n) {
    var i = An.create(e);
    return i.userSettingsGroupProperty = t[n], i;
  }

  function Vn(e, t, n) {
    var i = An.create(e);
    return i.key = t[n][0], i.userSettingGroup = t[n][1], i.index = n, i;
  }

  function Mn(e) {
    var t;
    return {
      c: function c() {
        V(t = P("i"), "class", "fd-nested-list__icon sap-icon svelte-1dg7gy6");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: i,
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Fn(e) {
    var t, n;

    function i(e, n) {
      var i;
      return (null == t || e.userSettingGroups) && (i = n.userSettingsGroupProperty[1], t = !!At.isOpenUIiconName(i.icon)), t ? jn : Un;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function Un(e) {
    var t, n, i, r;
    return {
      c: function c() {
        t = P("span"), V(n = P("img"), "src", i = e.userSettingsGroupProperty[1].icon), V(n, "alt", r = e.userSettingsGroupProperty[1].altText ? e.userSettingsGroupProperty[1].altText : ""), V(n, "class", "svelte-1dg7gy6"), V(t, "class", "fd-nested-list__icon sap-icon svelte-1dg7gy6");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.userSettingGroups && i !== (i = t.userSettingsGroupProperty[1].icon) && V(n, "src", i), e.userSettingGroups && r !== (r = t.userSettingsGroupProperty[1].altText ? t.userSettingsGroupProperty[1].altText : "") && V(n, "alt", r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function jn(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-nested-list__icon sap-icon sap-icon--" + e.userSettingsGroupProperty[1].icon + " svelte-1dg7gy6");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.userSettingGroups && n !== (n = "fd-nested-list__icon sap-icon sap-icon--" + i.userSettingsGroupProperty[1].icon + " svelte-1dg7gy6") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Bn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c10,
        d,
        u,
        p,
        f = e.$getTranslation(e.userSettingsGroupProperty[1].label ? e.userSettingsGroupProperty[1].label : "") + "",
        g = e.$getTranslation(e.userSettingsGroupProperty[1].sublabel ? e.userSettingsGroupProperty[1].sublabel : "") + "";

    function h(e, t) {
      return t.userSettingsGroupProperty[1].icon ? Fn : Mn;
    }

    var m = h(0, e),
        v = m(e);

    function b() {
      return e.click_handler(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("div"), v.c(), r = L(), o = P("div"), a = P("span"), s = E(f), l = L(), _c10 = P("span"), d = E(g), u = L(), V(a, "class", "lui-usersettings-list-item__title svelte-1dg7gy6"), V(_c10, "class", "lui-usersettings-list-item__subtitle svelte-1dg7gy6"), V(o, "class", "lui-usersettings-list-item__title-container svelte-1dg7gy6"), V(i, "class", "lui-usersettings-list-item__info-container svelte-1dg7gy6"), V(n, "class", "fd-nested-list__link svelte-1dg7gy6"), V(t, "class", "fd-nested-list__item svelte-1dg7gy6"), p = A(n, "click", D(b));
      },
      m: function m(e, p) {
        T(e, t, p), I(t, n), I(n, i), v.m(i, null), I(i, r), I(i, o), I(o, a), I(a, s), I(o, l), I(o, _c10), I(_c10, d), I(t, u);
      },
      p: function p(t, n) {
        m === (m = h(0, e = n)) && v ? v.p(t, e) : (v.d(1), (v = m(e)) && (v.c(), v.m(i, r))), (t.$getTranslation || t.userSettingGroups) && f !== (f = e.$getTranslation(e.userSettingsGroupProperty[1].label ? e.userSettingsGroupProperty[1].label : "") + "") && M(s, f), (t.$getTranslation || t.userSettingGroups) && g !== (g = e.$getTranslation(e.userSettingsGroupProperty[1].sublabel ? e.userSettingsGroupProperty[1].sublabel : "") + "") && M(d, g);
      },
      d: function d(e) {
        e && N(t), v.d(), p();
      }
    };
  }

  function Gn(e) {
    var t;
    var n = e.Object.entries(e.userSettingGroup),
        i = [];

    for (var _t39 = 0; _t39 < n.length; _t39 += 1) {
      i[_t39] = Bn(On(e, n, _t39));
    }

    return {
      c: function c() {
        for (var _e42 = 0; _e42 < i.length; _e42 += 1) {
          i[_e42].c();
        }

        t = R();
      },
      m: function m(e, n) {
        for (var _t40 = 0; _t40 < i.length; _t40 += 1) {
          i[_t40].m(e, n);
        }

        T(e, t, n);
      },
      p: function p(e, r) {
        if (e.$getTranslation || e.Object || e.userSettingGroups || e.hasOpenUIicon) {
          var o;

          for (n = r.Object.entries(r.userSettingGroup), o = 0; o < n.length; o += 1) {
            var _a17 = On(r, n, o);

            i[o] ? i[o].p(e, _a17) : (i[o] = Bn(_a17), i[o].c(), i[o].m(t.parentNode, t));
          }

          for (; o < i.length; o += 1) {
            i[o].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        $(i, e), e && N(t);
      }
    };
  }

  function zn(e) {
    var t,
        n = new Rn({
      props: {
        storedUserSettingData: e.storedUserSettings,
        userSettingGroup: e.userSettingGroup
      }
    });
    return n.$on("updateSettingsObject", e.updateSettingsObject), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.storedUserSettings && (i.storedUserSettingData = t.storedUserSettings), e.userSettingGroup && (i.userSettingGroup = t.userSettingGroup), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Wn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c11,
        d,
        u,
        _p6,
        f,
        g,
        h,
        _m5,
        v,
        b,
        w,
        S,
        y,
        _,
        C,
        x,
        k,
        R,
        D,
        O,
        F,
        U,
        j,
        B,
        G,
        z,
        W,
        H = e.$getTranslation(e.dialogHeader) + "",
        q = e.$getTranslation(e.userSettingsGroupTitle) + "",
        K = e.$getTranslation(e.saveBtn) + "",
        J = e.$getTranslation(e.dismissBtn) + "";

    var Y = e.Object.entries(e.userSettingGroups),
        Q = [];

    for (var _t41 = 0; _t41 < Y.length; _t41 += 1) {
      Q[_t41] = Gn(Vn(e, Y, _t41));
    }

    var X = e.userSettingGroup && zn(e);
    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("div"), a = P("div"), s = P("h2"), _c11 = E(H), d = L(), u = P("div"), _p6 = P("ul");

        for (var _e43 = 0; _e43 < Q.length; _e43 += 1) {
          Q[_e43].c();
        }

        f = L(), g = P("div"), (h = P("button")).innerHTML = '<i class="sap-icon--navigation-left-arrow svelte-1dg7gy6"></i>', _m5 = L(), v = P("h2"), b = E(q), w = L(), S = P("div"), y = P("div"), X && X.c(), _ = L(), C = P("div"), x = L(), k = P("footer"), R = P("div"), D = P("div"), O = P("button"), F = E(K), U = L(), j = P("div"), B = P("button"), G = E(J), V(s, "class", "fd-title fd-title--h5 svelte-1dg7gy6"), V(a, "class", "fd-side-nav__group-header svelte-1dg7gy6"), V(_p6, "class", "fd-nested-list lui-us-list svelte-1dg7gy6"), V(u, "class", "fd-side-nav__main-navigation lui-fd-side-nav__main-navigation svelte-1dg7gy6"), V(o, "class", "fd-side-nav svelte-1dg7gy6"), V(r, "class", "lui-usersettings-left-nav svelte-1dg7gy6"), V(h, "class", "fd-button fd-button--transparent lui-usersettings-content-header__back-btn svelte-1dg7gy6"), V(v, "class", "fd-title fd-title--h5 svelte-1dg7gy6"), V(g, "class", "fd-side-nav__group-header lui-usersettings-dialog-sub-header svelte-1dg7gy6"), V(y, "class", "usersettingseditor mf-wrapper svelte-1dg7gy6"), V(C, "class", "iframeUserSettingsCtn iframe-wrapper svelte-1dg7gy6"), V(S, "class", "lui-usersettings-content svelte-1dg7gy6"), V(i, "class", "fd-dialog__body lui-usersettings-body svelte-1dg7gy6"), V(O, "data-testid", "lui-us-saveBtn"), V(O, "class", "fd-dialog__decisive-button fd-button fd-button--emphasized fd-button--compact confirm-button svelte-1dg7gy6"), V(D, "class", "fd-bar__element svelte-1dg7gy6"), V(B, "data-testid", "lui-us-dismissBtn"), V(B, "class", "fd-dialog__decisive-button fd-button fd-button--transparent fd-button--compact svelte-1dg7gy6"), V(j, "class", "fd-bar__element svelte-1dg7gy6"), V(R, "class", "fd-bar__right svelte-1dg7gy6"), V(k, "class", "fd-dialog__footer fd-bar fd-bar--footer svelte-1dg7gy6"), V(n, "class", "fd-dialog__content lui-usersettings-dialog-size svelte-1dg7gy6"), V(t, "class", "fd-dialog fd-dialog--active lui-usersettings-dialog svelte-1dg7gy6"), W = [A(Dn, "keydown", e.handleKeydown), A(Dn, "resize", e.onResize), A(h, "click", Kn), A(O, "click", e.click_handler_1), A(B, "click", e.click_handler_2)];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), I(a, s), I(s, _c11), I(o, d), I(o, u), I(u, _p6);

        for (var _e44 = 0; _e44 < Q.length; _e44 += 1) {
          Q[_e44].m(_p6, null);
        }

        I(i, f), I(i, g), I(g, h), I(g, _m5), I(g, v), I(v, b), I(i, w), I(i, S), I(S, y), X && X.m(y, null), I(S, _), I(S, C), I(n, x), I(n, k), I(k, R), I(R, D), I(D, O), I(O, F), I(R, U), I(R, j), I(j, B), I(B, G), z = !0;
      },
      p: function p(e, t) {
        if (z && !e.$getTranslation && !e.dialogHeader || H === (H = t.$getTranslation(t.dialogHeader) + "") || M(_c11, H), e.Object || e.userSettingGroups || e.$getTranslation || e.hasOpenUIicon) {
          var _n37;

          for (Y = t.Object.entries(t.userSettingGroups), _n37 = 0; _n37 < Y.length; _n37 += 1) {
            var _i30 = Vn(t, Y, _n37);

            Q[_n37] ? Q[_n37].p(e, _i30) : (Q[_n37] = Gn(_i30), Q[_n37].c(), Q[_n37].m(_p6, null));
          }

          for (; _n37 < Q.length; _n37 += 1) {
            Q[_n37].d(1);
          }

          Q.length = Y.length;
        }

        z && !e.$getTranslation && !e.userSettingsGroupTitle || q === (q = t.$getTranslation(t.userSettingsGroupTitle) + "") || M(b, q), t.userSettingGroup ? X ? (X.p(e, t), _e(X, 1)) : ((X = zn(t)).c(), _e(X, 1), X.m(y, null)) : X && (Se(), Ce(X, 1, 1, function () {
          X = null;
        }), ye()), z && !e.$getTranslation && !e.saveBtn || K === (K = t.$getTranslation(t.saveBtn) + "") || M(F, K), z && !e.$getTranslation && !e.dismissBtn || J === (J = t.$getTranslation(t.dismissBtn) + "") || M(G, J);
      },
      i: function i(e) {
        z || (_e(X), z = !0);
      },
      o: function o(e) {
        Ce(X), z = !1;
      },
      d: function d(e) {
        e && N(t), $(Q, e), X && X.d(), l(W);
      }
    };
  }

  function Hn(e, t) {
    var n = {};
    return e.forEach(function (e) {
      for (var _i31 in e) {
        for (var _t42 in e[_i31].settings) {
          e[_i31].settings[_t42] = "";
        }

        n[_i31] = _objectSpread(_objectSpread({}, e[_i31].settings), t[_i31]);
      }
    }), n;
  }

  function qn() {
    document.querySelector(".usersettings-leftNavVisible") ? document.querySelector(".confirm-button").style.display = "block" : document.querySelector(".confirm-button").style.display = "none";
  }

  function Kn() {
    document.querySelector(".lui-usersettings-dialog").classList.toggle("usersettings-leftNavVisible"), 0 !== window.innerWidth && window.innerWidth < Fe.desktopMinWidth && qn();
  }

  function Jn(e, t, n) {
    var i,
        r = t.schemaObj,
        o = t.userSettingGroups;
    var a = ee();
    var s,
        _t$storedUserSettings = t.storedUserSettings,
        l = _t$storedUserSettings === void 0 ? {} : _t$storedUserSettings,
        c = {},
        d = ne("getTranslation");
    f(e, d, function (e) {
      n("$getTranslation", i = e);
    });
    var u,
        p,
        g = mt.userSettingsDialog.dialogHeader,
        h = mt.userSettingsDialog.saveBtn,
        m = mt.userSettingsDialog.dismissBtn,
        v = {};

    function b(e, t) {
      n("userSettingGroup", s = e);
      var i = e[0],
          r = e[1];

      if (function (e) {
        if (n("userSettingsGroupTitle", p = e.title ? e.title : ""), Lt.isObject(e.settings)) for (var _t43 in e.settings) {
          var _n38 = e.settings[_t43];
          "enum" === _n38.type ? Array.isArray(_n38.options) || console.error("There is no options array for '".concat(_t43, "' defined in the Luigi userSettings config.")) : void 0 === _n38.type && console.error("There is no data type defined for '".concat(_t43, "' in the Luigi userSettings config."));
        }
      }(r), t) {
        document.querySelectorAll(".lui-us-list .fd-nested-list__link").forEach(function (e) {
          e.classList.remove("is-selected");
        }), function e(t, n, i) {
          return t && i > 0 ? Lt.isIE() ? t.msMatchesSelector(n) ? t : e(t.parentNode, n, i - 1) : t.matches(n) ? t : e(t.parentNode, n, i - 1) : void 0;
        }(t.target, ".fd-nested-list__link", 20).classList.add("is-selected"), window.innerWidth < Fe.desktopMinWidth && Kn();
      } else document.querySelectorAll(".lui-us-list .fd-nested-list__link")[0].classList.add("is-selected"), 0 !== window.innerWidth && window.innerWidth < Fe.desktopMinWidth && qn();

      if (r.viewUrl) {
        if (Ft.hideUserSettingsIframe(), v.hasOwnProperty(i)) Ft.getUserSettingsIframesInDom().forEach(function (e) {
          e.userSettingsGroup === i && (e.style.display = "block");
        });else {
          var _e45 = $t.hasDecorators() ? $t.applyDecorators(r.viewUrl) : r.viewUrl;

          var _t44 = Ft.createIframe(_e45, i);

          v[i] = _t44;
        }
        document.querySelector(".iframeUserSettingsCtn").style.display = "block", document.querySelector(".usersettingseditor").style.display = "none";
      } else document.querySelector(".iframeUserSettingsCtn").style.display = "none", document.querySelector(".usersettingseditor").style.display = "block";
    }

    Q(function () {
      var e = rt.getConfigValue("userSettings.userSettingsDialog"),
          t = e || rt.getConfigValue("settings.userSettings.userSettingsDialog");
      t && (n("dialogHeader", g = t.dialogHeader ? t.dialogHeader : g), n("saveBtn", h = t.saveBtn ? t.saveBtn : h), n("dismissBtn", m = t.dismissBtn ? t.dismissBtn : m)), u = Object.keys(o[0]).length > 0 ? Object.keys(o[0])[0] : void 0, Vt.addEventListener("message", function (e) {
        var t = Rt.getValidMessageSource(e);
        if (!t || "custom" !== e.data.msg) return;
        t._ready = !0;
        var i = Oe.convertCustomMessageInternalToUser(e.data);

        if ("luigi.updateUserSettings" === i.id) {
          var _t45 = Ft.findActiveCustomUserSettingsIframe(e.source);

          if (_t45) {
            var _e46 = _t45.getAttribute("userSettingsGroup");

            n("storedUserSettings", l[_e46] = i.data, l);
          }
        }

        "luigi.navBackMobile" === i.id && 0 !== window.window.innerWidth && window.innerWidth < Fe.desktopMinWidth && Kn();
      }), rt.readUserSettings().then(function (e) {
        c = JSON.parse(JSON.stringify(e)), n("storedUserSettings", l = Hn(JSON.parse(JSON.stringify(o)), null === e ? {} : e)), b([u, o[0][u]]);
      })["catch"](function (e) {
        e && e.message && console.error(e.message), e && e.closeDialog && a("close");
      });
    });

    function w() {
      rt.storeUserSettings(l, c).then(function () {
        a("close");
      })["catch"](function (e) {
        e && e.message && console.error(e.message), e && e.closeDialog && a("close");
      });
    }

    var S;
    return e.$set = function (e) {
      "schemaObj" in e && n("schemaObj", r = e.schemaObj), "userSettingGroups" in e && n("userSettingGroups", o = e.userSettingGroups), "storedUserSettings" in e && n("storedUserSettings", l = e.storedUserSettings);
    }, {
      schemaObj: r,
      userSettingGroups: o,
      dispatch: a,
      userSettingGroup: s,
      storedUserSettings: l,
      getTranslation: d,
      dialogHeader: g,
      saveBtn: h,
      dismissBtn: m,
      userSettingsGroupTitle: p,
      openEditor: b,
      updateSettingsObject: function updateSettingsObject(e) {
        n("storedUserSettings", l = e.detail.userSettings);
      },
      storeUserSettings: w,
      onResize: function onResize() {
        var e = window.innerWidth >= Fe.desktopMinWidth && S < Fe.desktopMinWidth;

        if (window.innerWidth < Fe.desktopMinWidth && S >= Fe.desktopMinWidth && (document.querySelector(".lui-usersettings-dialog").classList.toggle("usersettings-leftNavVisible"), document.querySelector(".usersettings-leftNavVisible") ? document.querySelector(".confirm-button").style.display = "block" : document.querySelector(".confirm-button").style.display = "none"), e && (document.querySelector(".confirm-button").style.display = "block"), !S) {
          var _e47 = document.querySelector(".confirm-button");

          window.innerWidth < Fe.desktopMinWidth ? _e47.style.display = "none" : _e47.style.display = "block";
        }

        S = window.innerWidth;
      },
      handleKeydown: function handleKeydown(e) {
        e.keyCode === Kt && a("close");
      },
      Object: Object,
      $getTranslation: i,
      click_handler: function click_handler(_ref37) {
        var e = _ref37.userSettingsGroupProperty;
        return b(e, event);
      },
      click_handler_1: function click_handler_1() {
        return w();
      },
      click_handler_2: function click_handler_2() {
        return a("close");
      }
    };
  }

  var Yn = /*#__PURE__*/function (_Ae6) {
    _inherits(Yn, _Ae6);

    var _super10 = _createSuper(Yn);

    function Yn(e) {
      var _this40;

      _classCallCheck(this, Yn);

      _this40 = _super10.call(this), Re(_assertThisInitialized(_this40), e, Jn, Wn, d, ["schemaObj", "userSettingGroups", "storedUserSettings", "handleKeydown"]);
      return _this40;
    }

    _createClass(Yn, [{
      key: "handleKeydown",
      get: function get() {
        return this.$$.ctx.handleKeydown;
      }
    }]);

    return Yn;
  }(Ae);

  n(403);
  var Qn = Ne.window;

  function Xn(e) {
    var t;
    return {
      c: function c() {
        V(t = P("div"), "class", "iframeSplitViewCnt svelte-y6nqff");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: i,
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Zn(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s = e.splitViewSettings.title + "";
    return {
      c: function c() {
        t = P("div"), (n = P("a")).innerHTML = '<i class="sap-icon sap-icon--navigation-up-arrow"></i>', i = L(), r = P("h1"), o = E(s), V(n, "class", "lui-collapse-btn svelte-y6nqff"), V(t, "id", "splitViewDraggerCollapsed"), V(t, "class", "splitViewSeparator isCollapsed svelte-y6nqff"), V(r, "class", "fd-splitView__title svelte-y6nqff"), a = A(n, "click", O(D(e.expand)));
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), T(e, i, a), T(e, r, a), I(r, o);
      },
      p: function p(e, t) {
        e.splitViewSettings && s !== (s = t.splitViewSettings.title + "") && M(o, s);
      },
      d: function d(e) {
        e && (N(t), N(i), N(r)), a();
      }
    };
  }

  function ei(e) {
    var t, n, i, r, o, a, s;
    return {
      c: function c() {
        t = P("div"), n = L(), i = P("div"), r = P("div"), o = L(), (a = P("a")).innerHTML = '<i class="sap-icon sap-icon--navigation-down-arrow"></i>', V(t, "id", "splitViewDraggerBackdrop"), V(r, "class", "splitViewSeparator"), V(a, "class", "lui-collapse-btn svelte-y6nqff"), V(i, "id", "splitViewDragger"), s = [A(a, "click", O(D(e.collapse))), A(i, "mousedown", O(e.onDragStart))];
      },
      m: function m(e, s) {
        T(e, t, s), T(e, n, s), T(e, i, s), I(i, r), I(i, o), I(i, a);
      },
      d: function d(e) {
        e && (N(t), N(n), N(i)), l(s);
      }
    };
  }

  function ti(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c12 = new nn({
      props: {
        area: "split-view",
        disable: e.disableBackdrop
      }
    });

    function d(e, t) {
      return t.collapsed ? Zn : Xn;
    }

    _c12.$on("stateChanged", e.backdropStateChanged);

    var u = d(0, e),
        _p7 = u(e),
        f = !e.collapsed && ei(e);

    return {
      c: function c() {
        t = P("div"), _c12.$$.fragment.c(), n = L(), i = P("div"), _p7.c(), o = L(), f && f.c(), a = R(), V(i, "class", "lui-split-view svelte-y6nqff"), V(t, "id", "splitViewContainer"), V(t, "class", r = "splitViewContainer " + (e.collapsed ? "lui-collapsed" : "") + " svelte-y6nqff"), l = A(Qn, "resize", e.updateSizes);
      },
      m: function m(e, r) {
        T(e, t, r), Ee(_c12, t, null), I(t, n), I(t, i), _p7.m(i, null), T(e, o, r), f && f.m(e, r), T(e, a, r), s = !0;
      },
      p: function p(e, n) {
        var o = {};
        e.disableBackdrop && (o.disable = n.disableBackdrop), _c12.$set(o), u === (u = d(0, n)) && _p7 ? _p7.p(e, n) : (_p7.d(1), (_p7 = u(n)) && (_p7.c(), _p7.m(i, null))), s && !e.collapsed || r === (r = "splitViewContainer " + (n.collapsed ? "lui-collapsed" : "") + " svelte-y6nqff") || V(t, "class", r), n.collapsed ? f && (f.d(1), f = null) : f || ((f = ei(n)).c(), f.m(a.parentNode, a));
      },
      i: function i(e) {
        s || (_e(_c12.$$.fragment, e), s = !0);
      },
      o: function o(e) {
        Ce(_c12.$$.fragment, e), s = !1;
      },
      d: function d(e) {
        e && N(t), Le(_c12), _p7.d(), e && N(o), f && f.d(e), e && N(a), l();
      }
    };
  }

  function ni(e, t, n) {
    var _this41 = this;

    var i = ee();
    var r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        p,
        f = {
      draggable: null,
      iframe: null,
      split: null
    },
        g = t.nodepath,
        h = t.collapsed,
        _t$splitViewSettings = t.splitViewSettings,
        m = _t$splitViewSettings === void 0 ? {} : _t$splitViewSettings,
        _t$isDataPrepared2 = t.isDataPrepared,
        v = _t$isDataPrepared2 === void 0 ? !1 : _t$isDataPrepared2,
        b = t.disableBackdrop,
        w = !1,
        S = ne("getUnsavedChangesModalPromise");

    var y = function y() {
      return {
        get: function get() {
          return {
            collapsed: h,
            splitViewSettings: m,
            isDataPrepared: v,
            lastNode: r,
            pathData: o,
            nodeParams: a,
            currentNode: s,
            splitViewIframe: c,
            splitViewIframeData: d,
            splitViewWC: u,
            splitViewWCData: p
          };
        },
        set: function set(e) {
          e && Object.getOwnPropertyNames(e).forEach(function (t) {
            "splitViewSettings" === t ? n("splitViewSettings", m = e.splitViewSettings) : "lastNode" === t ? r = e.lastNode : "pathData" === t ? o = e.pathData : "nodeParams" === t ? a = e.nodeParams : "collapsed" === t ? n("collapsed", h = e.collapsed) : "isDataPrepared" === t ? n("isDataPrepared", v = e.isDataPrepared) : "currentNode" === t ? s = e.currentNode : "splitViewIframe" === t ? c = e.splitViewIframe : "splitViewIframeData" === t ? d = e.splitViewIframeData : "splitViewWC" === t ? u = e.splitViewWC : "splitViewWCData" === t && (p = e.splitViewWCData);
          });
        },
        dispatch: i,
        getUnsavedChangesModalPromise: S
      };
    },
        _ = function _() {
      f.split = kt.getContainer(), f.iframe = Rt.getIframeContainer(), f.draggable = kt.getDragger();
    },
        C = function C() {
      var e = kt.getDraggerBackdrop();
      e && (e.style.display = "none"), _(), f.draggable && (f.draggable.style.top = "".concat(kt.splitViewValues.top, "px")), f.split.style.top = "".concat(kt.splitViewValues.top, "px"), f.iframe.style.paddingBottom = "".concat(kt.splitViewValues.bottom, "px");
    };

    function x(e) {
      if (Rt.getValidMessageSource(e) && ("luigi.navigation.splitview.close" === e.data.msg && kt.close(y()), "luigi.navigation.splitview.collapse" === e.data.msg && k(), "luigi.navigation.splitview.expand" === e.data.msg && I(), "luigi.navigation.splitview.resize" === e.data.msg)) {
        var _t46 = parseInt(e.data.data);

        if (kt.calculateAndSetSplitViewValues(_t46, kt.internalValues), h) return;
        C(), kt.sendMessageToClients("resize.ok", kt.splitViewValues.percent);
      }
    }

    function k() {
      kt.collapse(y());
    }

    function I() {
      return _I.apply(this, arguments);
    }

    function _I() {
      _I = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
        return regeneratorRuntime.wrap(function _callee40$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return kt.expand(y());

              case 2:
                f.draggerBackdrop && (f.draggerBackdrop.style.display = "none");

              case 3:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee40);
      }));
      return _I.apply(this, arguments);
    }

    function T() {
      var e = at.getShellbar().clientHeight;
      kt.internalValues.innerHeight = Lt.getInnerHeight(), kt.internalValues.rightContentHeight = kt.internalValues.innerHeight - e, kt.internalValues.thresholdBottom = 30, kt.internalValues.thresholdTop = e + 30, kt.calculateAndSetSplitViewValues(kt.splitViewValues.percent, kt.internalValues), h || C();
    }

    Q(function () {
      T(), l = x.bind(_this41), Vt.addEventListener("message", l);
    }), X(function () {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
        return regeneratorRuntime.wrap(function _callee39$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (!v) {
                  _context40.next = 4;
                  break;
                }

                h || kt.createAndSetView(y());
                _context40.next = 6;
                break;

              case 4:
                _context40.next = 6;
                return kt.prepareSplitViewData(y(), g);

              case 6:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee39);
      }))(), w === v || h || (w = v, C());
    }), Z(function () {
      window.removeEventListener("message", l);
    });
    return e.$set = function (e) {
      "nodepath" in e && n("nodepath", g = e.nodepath), "collapsed" in e && n("collapsed", h = e.collapsed), "splitViewSettings" in e && n("splitViewSettings", m = e.splitViewSettings), "isDataPrepared" in e && n("isDataPrepared", v = e.isDataPrepared), "disableBackdrop" in e && n("disableBackdrop", b = e.disableBackdrop);
    }, {
      nodepath: g,
      collapsed: h,
      splitViewSettings: m,
      isDataPrepared: v,
      disableBackdrop: b,
      collapse: k,
      expand: I,
      updateSizes: T,
      onDragStart: function onDragStart(e) {
        var t = e.y,
            n = {};

        var i = function i(e) {
          var i = t - e.y,
              r = parseInt(getComputedStyle(f.draggable, "").top);
          if (isNaN(r) || 0 === i) return;
          var o = r - i,
              a = kt.internalValues.innerHeight - o,
              s = kt.enforceTresholds(o, a);
          o < s.top || a < s.bottom || (n = s, t = e.y, f.draggable.style.top = "".concat(n.top, "px"));
        },
            r = function r() {
          o(), n.top && n.bottom && n.top != kt.internalValues.m_pos_prev ? (kt.internalValues.m_pos_prev = n.top, kt.splitViewValues = n, C(), kt.sendMessageToClients("resize.ok", n.percent)) : kt.getDraggerBackdrop().style.display = "none";
        },
            o = function o() {
          document.removeEventListener("mouseup", r), document.removeEventListener("mousemove", i);
        };

        _(), o(), document.addEventListener("mouseup", r), document.addEventListener("mousemove", i), kt.getDraggerBackdrop().style.display = "block";
      },
      backdropStateChanged: function backdropStateChanged(e) {
        (function (e) {
          var t = kt.getDraggerButton();
          t && (t.style.display = e ? "block" : "none"), (t = kt.getCollapsedDraggerButton()) && (t.style.display = e ? "block" : "none");
        })(!e.detail || !0 !== e.detail.backdropActive);
      }
    };
  }

  var ii = /*#__PURE__*/function (_Ae7) {
    _inherits(ii, _Ae7);

    var _super11 = _createSuper(ii);

    function ii(e) {
      var _this42;

      _classCallCheck(this, ii);

      _this42 = _super11.call(this), Re(_assertThisInitialized(_this42), e, ni, ti, d, ["nodepath", "collapsed", "splitViewSettings", "isDataPrepared", "disableBackdrop", "collapse", "expand", "updateSizes", "onDragStart"]);
      return _this42;
    }

    _createClass(ii, [{
      key: "collapse",
      get: function get() {
        return this.$$.ctx.collapse;
      }
    }, {
      key: "expand",
      get: function get() {
        return this.$$.ctx.expand;
      }
    }, {
      key: "updateSizes",
      get: function get() {
        return this.$$.ctx.updateSizes;
      }
    }, {
      key: "onDragStart",
      get: function get() {
        return this.$$.ctx.onDragStart;
      }
    }]);

    return ii;
  }(Ae);

  n(404);

  function ri(e) {
    var t, n;
    var i = {
      ctx: e,
      current: null,
      token: null,
      pending: li,
      then: ai,
      "catch": oi,
      value: "count",
      error: "error"
    };
    return Te(n = e.node.badgeCounter.count(), i), {
      c: function c() {
        t = R(), i.block.c();
      },
      m: function m(e, n) {
        T(e, t, n), i.block.m(e, i.anchor = n), i.mount = function () {
          return t.parentNode;
        }, i.anchor = t;
      },
      p: function p(t, r) {
        e = r, i.ctx = e, "node" in t && n !== (n = e.node.badgeCounter.count()) && Te(n, i) || i.block.p(t, o(o({}, e), i.resolved));
      },
      d: function d(e) {
        e && N(t), i.block.d(e), i.token = null, i = null;
      }
    };
  }

  function oi(e) {
    return {
      c: i,
      m: i,
      p: i,
      d: i
    };
  }

  function ai(e) {
    var t,
        n = e.count > 0 && si(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.count > 0 ? n ? n.p(e, i) : ((n = si(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function si(e) {
    var t,
        n,
        i,
        r = e.count + "";
    return {
      c: function c() {
        t = P("span"), n = E(r), V(t, "class", "fd-counter fd-counter--notification svelte-1qmy1bw"), V(t, "aria-label", i = e.node.badgeCounter.label);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, o) {
        e.node && r !== (r = o.count + "") && M(n, r), e.node && i !== (i = o.node.badgeCounter.label) && V(t, "aria-label", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function li(e) {
    return {
      c: i,
      m: i,
      p: i,
      d: i
    };
  }

  function ci(e) {
    var t,
        n = e.node && e.node.badgeCounter && ri(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.node && i.node.badgeCounter ? n ? n.p(e, i) : ((n = ri(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      i: i,
      o: i,
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function di(e, t, n) {
    var i = t.node;
    return e.$set = function (e) {
      "node" in e && n("node", i = e.node);
    }, {
      node: i
    };
  }

  var ui = /*#__PURE__*/function (_Ae8) {
    _inherits(ui, _Ae8);

    var _super12 = _createSuper(ui);

    function ui(e) {
      var _this43;

      _classCallCheck(this, ui);

      _this43 = _super12.call(this), Re(_assertThisInitialized(_this43), e, di, ci, d, ["node"]);
      return _this43;
    }

    return ui;
  }(Ae);

  n(405);
  var pi = Ne.Boolean,
      fi = Ne.Object,
      gi = Ne.window;

  function hi(e, t, n) {
    var i = fi.create(e);
    return i.node = t[n], i;
  }

  function mi(e, t, n) {
    var i = fi.create(e);
    return i.node = t[n], i;
  }

  function vi(e, t, n) {
    var i = fi.create(e);
    return i.node = t[n], i;
  }

  function bi(e, t, n) {
    var i = fi.create(e);
    return i.node = t[n], i;
  }

  function wi(e, t, n) {
    var i = fi.create(e);
    return i.key = t[n][0], i.nodes = t[n][1], i.index = n, i;
  }

  function Si(e) {
    var t, n, i, r, o;
    var a = e.sortedChildrenEntries,
        s = [];

    for (var _t47 = 0; _t47 < a.length; _t47 += 1) {
      s[_t47] = or(wi(e, a, _t47));
    }

    var l = function l(e) {
      return Ce(s[e], 1, 1, function () {
        s[e] = null;
      });
    };

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("ul");

        for (var _e48 = 0; _e48 < s.length; _e48 += 1) {
          s[_e48].c();
        }

        V(i, "class", r = "fd-nested-list " + e.sideNavClass + " svelte-sigym8"), V(n, "class", "lui-fd-side-nav-wrapper svelte-sigym8"), V(t, "class", "fd-side-nav__main-navigation svelte-sigym8");
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i);

        for (var _e49 = 0; _e49 < s.length; _e49 += 1) {
          s[_e49].m(i, null);
        }

        o = !0;
      },
      p: function p(e, t) {
        if (e.sortedChildrenEntries || e.virtualGroupPrefix || e.getRouteLink || e.$getTranslation || e.selectedNode || e.getTestId || e.isOpenUIiconName || e.isSemiCollapsed || e.getTestIdForCat || e.selectedCategory || e.isExpanded || e.expandedCategories || e.hasCategoriesWithIcon) {
          var _n39;

          for (a = t.sortedChildrenEntries, _n39 = 0; _n39 < a.length; _n39 += 1) {
            var _r19 = wi(t, a, _n39);

            s[_n39] ? (s[_n39].p(e, _r19), _e(s[_n39], 1)) : (s[_n39] = or(_r19), s[_n39].c(), _e(s[_n39], 1), s[_n39].m(i, null));
          }

          for (Se(), _n39 = a.length; _n39 < s.length; _n39 += 1) {
            l(_n39);
          }

          ye();
        }

        o && !e.sideNavClass || r === (r = "fd-nested-list " + t.sideNavClass + " svelte-sigym8") || V(i, "class", r);
      },
      i: function i(e) {
        if (!o) {
          for (var _e50 = 0; _e50 < a.length; _e50 += 1) {
            _e(s[_e50]);
          }

          o = !0;
        }
      },
      o: function (_o8) {
        function o(_x57) {
          return _o8.apply(this, arguments);
        }

        o.toString = function () {
          return _o8.toString();
        };

        return o;
      }(function (e) {
        s = s.filter(pi);

        for (var _e51 = 0; _e51 < s.length; _e51 += 1) {
          Ce(s[_e51]);
        }

        o = !1;
      }),
      d: function d(e) {
        e && N(t), $(s, e);
      }
    };
  }

  function yi(e) {
    var t,
        n,
        i,
        r,
        o = [xi, Ci],
        a = [];

    function s(e, t) {
      return t.nodes.metaInfo.collapsible ? 0 : 1;
    }

    return t = s(0, e), n = a[t] = o[t](e), {
      c: function c() {
        n.c(), i = R();
      },
      m: function m(e, n) {
        a[t].m(e, n), T(e, i, n), r = !0;
      },
      p: function p(e, r) {
        var l = t;
        (t = s(0, r)) === l ? a[t].p(e, r) : (Se(), Ce(a[l], 1, 1, function () {
          a[l] = null;
        }), ye(), (n = a[t]) || (n = a[t] = o[t](r)).c(), _e(n, 1), n.m(i.parentNode, i));
      },
      i: function i(e) {
        r || (_e(n), r = !0);
      },
      o: function o(e) {
        Ce(n), r = !1;
      },
      d: function d(e) {
        a[t].d(e), e && N(i);
      }
    };
  }

  function _i(e) {
    var t, n;
    var _i32 = e.nodes,
        r = [];

    for (var _t48 = 0; _t48 < _i32.length; _t48 += 1) {
      r[_t48] = rr(bi(e, _i32, _t48));
    }

    var o = function o(e) {
      return Ce(r[e], 1, 1, function () {
        r[e] = null;
      });
    };

    return {
      c: function c() {
        for (var _e52 = 0; _e52 < r.length; _e52 += 1) {
          r[_e52].c();
        }

        t = R();
      },
      m: function m(e, i) {
        for (var _t49 = 0; _t49 < r.length; _t49 += 1) {
          r[_t49].m(e, i);
        }

        T(e, t, i), n = !0;
      },
      p: function p(e, n) {
        if (e.sortedChildrenEntries || e.getRouteLink || e.$getTranslation || e.selectedNode || e.getTestId || e.isOpenUIiconName || e.isSemiCollapsed) {
          var _a18;

          for (_i32 = n.nodes, _a18 = 0; _a18 < _i32.length; _a18 += 1) {
            var _o9 = bi(n, _i32, _a18);

            r[_a18] ? (r[_a18].p(e, _o9), _e(r[_a18], 1)) : (r[_a18] = rr(_o9), r[_a18].c(), _e(r[_a18], 1), r[_a18].m(t.parentNode, t));
          }

          for (Se(), _a18 = _i32.length; _a18 < r.length; _a18 += 1) {
            o(_a18);
          }

          ye();
        }
      },
      i: function i(e) {
        if (!n) {
          for (var _e53 = 0; _e53 < _i32.length; _e53 += 1) {
            _e(r[_e53]);
          }

          n = !0;
        }
      },
      o: function o(e) {
        r = r.filter(pi);

        for (var _e54 = 0; _e54 < r.length; _e54 += 1) {
          Ce(r[_e54]);
        }

        n = !1;
      },
      d: function d(e) {
        $(r, e), e && N(t);
      }
    };
  }

  function Ci(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c13 = e.$getTranslation(e.key) + "",
        _d5 = e.hasCategoriesWithIcon && e.nodes.metaInfo.icon && ki(e);

    var u = e.nodes,
        _p8 = [];

    for (var _t50 = 0; _t50 < u.length; _t50 += 1) {
      _p8[_t50] = Oi(hi(e, u, _t50));
    }

    var f = function f(e) {
      return Ce(_p8[e], 1, 1, function () {
        _p8[e] = null;
      });
    };

    return {
      c: function c() {
        t = P("li"), _d5 && _d5.c(), n = L(), i = E(_c13), a = L();

        for (var _e55 = 0; _e55 < _p8.length; _e55 += 1) {
          _p8[_e55].c();
        }

        s = R(), V(t, "class", "fd-nested-list__group-header lui-category svelte-sigym8"), V(t, "title", r = e.$getTranslation(e.key)), V(t, "data-testid", o = pr(e.nodes.metaInfo, e.key)), V(t, "id", "category_list_level1_" + e.index);
      },
      m: function m(e, r) {
        T(e, t, r), _d5 && _d5.m(t, null), I(t, n), I(t, i), T(e, a, r);

        for (var _t51 = 0; _t51 < _p8.length; _t51 += 1) {
          _p8[_t51].m(e, r);
        }

        T(e, s, r), l = !0;
      },
      p: function p(e, a) {
        if (a.hasCategoriesWithIcon && a.nodes.metaInfo.icon ? _d5 ? _d5.p(e, a) : ((_d5 = ki(a)).c(), _d5.m(t, n)) : _d5 && (_d5.d(1), _d5 = null), l && !e.$getTranslation && !e.sortedChildrenEntries || _c13 === (_c13 = a.$getTranslation(a.key) + "") || M(i, _c13), l && !e.$getTranslation && !e.sortedChildrenEntries || r === (r = a.$getTranslation(a.key)) || V(t, "title", r), l && !e.sortedChildrenEntries || o === (o = pr(a.nodes.metaInfo, a.key)) || V(t, "data-testid", o), e.sortedChildrenEntries || e.$getTranslation || e.getRouteLink || e.selectedNode || e.getTestId || e.isOpenUIiconName || e.isSemiCollapsed) {
          var _t52;

          for (u = a.nodes, _t52 = 0; _t52 < u.length; _t52 += 1) {
            var _n40 = hi(a, u, _t52);

            _p8[_t52] ? (_p8[_t52].p(e, _n40), _e(_p8[_t52], 1)) : (_p8[_t52] = Oi(_n40), _p8[_t52].c(), _e(_p8[_t52], 1), _p8[_t52].m(s.parentNode, s));
          }

          for (Se(), _t52 = u.length; _t52 < _p8.length; _t52 += 1) {
            f(_t52);
          }

          ye();
        }
      },
      i: function i(e) {
        if (!l) {
          for (var _e56 = 0; _e56 < u.length; _e56 += 1) {
            _e(_p8[_e56]);
          }

          l = !0;
        }
      },
      o: function o(e) {
        _p8 = _p8.filter(pi);

        for (var _e57 = 0; _e57 < _p8.length; _e57 += 1) {
          Ce(_p8[_e57]);
        }

        l = !1;
      },
      d: function d(e) {
        e && N(t), _d5 && _d5.d(), e && N(a), $(_p8, e), e && N(s);
      }
    };
  }

  function xi(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c14,
        d,
        u,
        p,
        f,
        g,
        h,
        m,
        b,
        w,
        S,
        y,
        _,
        C,
        x,
        k,
        R = e.$getTranslation(e.key) + "";

    function F(e, t) {
      return (null == r || e.sortedChildrenEntries) && (r = !!cr(t.nodes.metaInfo.icon)), r ? Mi : Vi;
    }

    var U = F(null, e),
        j = U(e);

    function B() {
      return e.click_handler_1(e);
    }

    function G() {
      return e.click_handler_2(e);
    }

    var z = e.nodes,
        W = [];

    for (var _t53 = 0; _t53 < z.length; _t53 += 1) {
      W[_t53] = Gi(vi(e, z, _t53));
    }

    var H = function H(e) {
      return Ce(W[e], 1, 1, function () {
        W[e] = null;
      });
    };

    var q = e.nodes.metaInfo && e.nodes.metaInfo.label === e.selectedCategory && zi(e);

    function K() {
      return e.click_handler_5(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("div"), i = P("a"), j.c(), o = L(), a = P("span"), s = E(R), p = L(), f = P("button"), g = P("i"), b = L(), w = P("ul");

        for (var _e58 = 0; _e58 < W.length; _e58 += 1) {
          W[_e58].c();
        }

        y = L(), q && q.c(), _ = L(), V(a, "class", "fd-nested-list__title svelte-sigym8"), V(i, "href", "javascript:void(null)"), V(i, "title", _c14 = e.$getTranslation(e.key)), V(i, "class", d = "fd-nested-list__link " + (dr(e.nodes, e.expandedCategories) ? "is-expanded" : "") + " svelte-sigym8"), V(i, "tabindex", "-1"), V(i, "id", "collapsible_listnode_" + e.index), V(i, "aria-haspopup", "true"), V(i, "aria-expanded", u = dr(e.nodes, e.expandedCategories)), V(g, "class", h = v(dr(e.nodes, e.expandedCategories) ? "sap-icon--navigation-down-arrow" : "sap-icon--navigation-right-arrow") + " svelte-sigym8"), V(g, "role", "presentation"), V(f, "class", "fd-button fd-nested-list__button svelte-sigym8"), V(f, "href", "#"), V(f, "tabindex", "-1"), V(f, "aria-label", "Expand categories"), V(f, "aria-haspopup", "true"), V(f, "aria-expanded", m = dr(e.nodes, e.expandedCategories)), V(n, "class", "fd-nested-list__content has-child svelte-sigym8"), V(n, "tabindex", "0"), V(w, "class", "fd-nested-list fd-nested-list--text-only level-2 svelte-sigym8"), V(w, "aria-hidden", S = !dr(e.nodes, e.expandedCategories)), V(t, "class", "fd-nested-list__item lui-collapsible-item svelte-sigym8"), V(t, "data-testid", C = pr(e.nodes.metaInfo, e.key)), k = [A(i, "click", D(B)), A(f, "click", D(G)), A(t, "click", O(K))];
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i), j.m(i, null), I(i, o), I(i, a), I(a, s), I(n, p), I(n, f), I(f, g), I(t, b), I(t, w);

        for (var _e59 = 0; _e59 < W.length; _e59 += 1) {
          W[_e59].m(w, null);
        }

        I(t, y), q && q.m(t, null), I(t, _), x = !0;
      },
      p: function p(n, r) {
        if (U === (U = F(n, e = r)) && j ? j.p(n, e) : (j.d(1), (j = U(e)) && (j.c(), j.m(i, o))), x && !n.$getTranslation && !n.sortedChildrenEntries || R === (R = e.$getTranslation(e.key) + "") || M(s, R), x && !n.$getTranslation && !n.sortedChildrenEntries || _c14 === (_c14 = e.$getTranslation(e.key)) || V(i, "title", _c14), x && !n.sortedChildrenEntries && !n.expandedCategories || d === (d = "fd-nested-list__link " + (dr(e.nodes, e.expandedCategories) ? "is-expanded" : "") + " svelte-sigym8") || V(i, "class", d), x && !n.sortedChildrenEntries && !n.expandedCategories || u === (u = dr(e.nodes, e.expandedCategories)) || V(i, "aria-expanded", u), x && !n.sortedChildrenEntries && !n.expandedCategories || h === (h = v(dr(e.nodes, e.expandedCategories) ? "sap-icon--navigation-down-arrow" : "sap-icon--navigation-right-arrow") + " svelte-sigym8") || V(g, "class", h), x && !n.sortedChildrenEntries && !n.expandedCategories || m === (m = dr(e.nodes, e.expandedCategories)) || V(f, "aria-expanded", m), n.sortedChildrenEntries || n.getRouteLink || n.selectedNode || n.getTestId || n.$getTranslation) {
          var _t54;

          for (z = e.nodes, _t54 = 0; _t54 < z.length; _t54 += 1) {
            var _i33 = vi(e, z, _t54);

            W[_t54] ? (W[_t54].p(n, _i33), _e(W[_t54], 1)) : (W[_t54] = Gi(_i33), W[_t54].c(), _e(W[_t54], 1), W[_t54].m(w, null));
          }

          for (Se(), _t54 = z.length; _t54 < W.length; _t54 += 1) {
            H(_t54);
          }

          ye();
        }

        x && !n.sortedChildrenEntries && !n.expandedCategories || S === (S = !dr(e.nodes, e.expandedCategories)) || V(w, "aria-hidden", S), e.nodes.metaInfo && e.nodes.metaInfo.label === e.selectedCategory ? q ? (q.p(n, e), _e(q, 1)) : ((q = zi(e)).c(), _e(q, 1), q.m(t, _)) : q && (Se(), Ce(q, 1, 1, function () {
          q = null;
        }), ye()), x && !n.sortedChildrenEntries || C === (C = pr(e.nodes.metaInfo, e.key)) || V(t, "data-testid", C);
      },
      i: function i(e) {
        if (!x) {
          for (var _e60 = 0; _e60 < z.length; _e60 += 1) {
            _e(W[_e60]);
          }

          _e(q), x = !0;
        }
      },
      o: function o(e) {
        W = W.filter(pi);

        for (var _e61 = 0; _e61 < W.length; _e61 += 1) {
          Ce(W[_e61]);
        }

        Ce(q), x = !1;
      },
      d: function d(e) {
        e && N(t), j.d(), $(W, e), q && q.d(), l(k);
      }
    };
  }

  function ki(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.sortedChildrenEntries) && (t = !!cr(n.nodes.metaInfo.icon)), t ? Ti : Ii;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function Ii(e) {
    var t, n, i, r;
    return {
      c: function c() {
        t = P("span"), V(n = P("img"), "src", i = e.nodes.metaInfo.icon), V(n, "alt", r = e.nodes.metaInfo.altText ? e.nodes.metaInfo.altText : ""), V(n, "class", "svelte-sigym8"), V(t, "class", "fd-nested-list__icon sap-icon svelte-sigym8");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.sortedChildrenEntries && i !== (i = t.nodes.metaInfo.icon) && V(n, "src", i), e.sortedChildrenEntries && r !== (r = t.nodes.metaInfo.altText ? t.nodes.metaInfo.altText : "") && V(n, "alt", r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ti(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-nested-list__icon sap-icon " + (e.nodes.metaInfo.icon ? "sap-icon--" + e.nodes.metaInfo.icon : "") + " svelte-sigym8"), V(t, "role", "presentation");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.sortedChildrenEntries && n !== (n = "fd-nested-list__icon sap-icon " + (i.nodes.metaInfo.icon ? "sap-icon--" + i.nodes.metaInfo.icon : "") + " svelte-sigym8") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ni(e) {
    var t,
        n,
        _i34 = e.node.label && $i(e);

    return {
      c: function c() {
        _i34 && _i34.c(), t = R();
      },
      m: function m(e, r) {
        _i34 && _i34.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.label ? _i34 ? (_i34.p(e, n), _e(_i34, 1)) : ((_i34 = $i(n)).c(), _e(_i34, 1), _i34.m(t.parentNode, t)) : _i34 && (Se(), Ce(_i34, 1, 1, function () {
          _i34 = null;
        }), ye());
      },
      i: function i(e) {
        n || (_e(_i34), n = !0);
      },
      o: function o(e) {
        Ce(_i34), n = !1;
      },
      d: function d(e) {
        _i34 && _i34.d(e), e && N(t);
      }
    };
  }

  function $i(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c15,
        d,
        u,
        _p9,
        f,
        g,
        h = e.$getTranslation(e.node.label) + "";

    function m(e, t) {
      return t.node.icon ? Ei : Pi;
    }

    var v = m(0, e),
        b = v(e),
        w = e.node.externalLink && e.node.externalLink.url && Ai(e),
        S = e.node.badgeCounter && Di(e);

    function y() {
      return e.click_handler_6(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), b.c(), i = L(), r = P("span"), o = E(h), a = L(), w && w.c(), s = L(), S && S.c(), u = L(), V(r, "class", "fd-nested-list__title svelte-sigym8"), V(n, "href", l = e.getRouteLink(e.node)), V(n, "class", _c15 = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8"), V(n, "data-testid", d = ur(e.node)), V(t, "class", "fd-nested-list__item svelte-sigym8"), V(t, "title", _p9 = e.$getTranslation(e.node.label)), V(t, "aria-labelledby", "category_list_level1_" + e.index), g = A(n, "click", D(y));
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), b.m(n, null), I(n, i), I(n, r), I(r, o), I(n, a), w && w.m(n, null), I(n, s), S && S.m(n, null), I(t, u), f = !0;
      },
      p: function p(r, a) {
        v === (v = m(0, e = a)) && b ? b.p(r, e) : (b.d(1), (b = v(e)) && (b.c(), b.m(n, i))), f && !r.$getTranslation && !r.sortedChildrenEntries || h === (h = e.$getTranslation(e.node.label) + "") || M(o, h), e.node.externalLink && e.node.externalLink.url ? w || ((w = Ai(e)).c(), w.m(n, s)) : w && (w.d(1), w = null), e.node.badgeCounter ? S ? (S.p(r, e), _e(S, 1)) : ((S = Di(e)).c(), _e(S, 1), S.m(n, null)) : S && (Se(), Ce(S, 1, 1, function () {
          S = null;
        }), ye()), f && !r.sortedChildrenEntries || l === (l = e.getRouteLink(e.node)) || V(n, "href", l), f && !r.sortedChildrenEntries && !r.selectedNode || _c15 === (_c15 = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8") || V(n, "class", _c15), f && !r.sortedChildrenEntries || d === (d = ur(e.node)) || V(n, "data-testid", d), f && !r.$getTranslation && !r.sortedChildrenEntries || _p9 === (_p9 = e.$getTranslation(e.node.label)) || V(t, "title", _p9);
      },
      i: function i(e) {
        f || (_e(S), f = !0);
      },
      o: function o(e) {
        Ce(S), f = !1;
      },
      d: function d(e) {
        e && N(t), b.d(), w && w.d(), S && S.d(), g();
      }
    };
  }

  function Pi(e) {
    var t,
        n,
        i,
        r,
        o,
        a = e.isSemiCollapsed ? "sap-icon--rhombus-milestone-2" : "";
    return {
      c: function c() {
        t = P("i"), i = L(), r = P("span"), o = E(a), V(t, "class", n = "fd-nested-list__icon sap-icon " + (e.isSemiCollapsed ? "sap-icon--rhombus-milestone-2" : "") + " svelte-sigym8"), V(r, "class", "svelte-sigym8");
      },
      m: function m(e, n) {
        T(e, t, n), T(e, i, n), T(e, r, n), I(r, o);
      },
      p: function p(e, i) {
        e.isSemiCollapsed && n !== (n = "fd-nested-list__icon sap-icon " + (i.isSemiCollapsed ? "sap-icon--rhombus-milestone-2" : "") + " svelte-sigym8") && V(t, "class", n), e.isSemiCollapsed && a !== (a = i.isSemiCollapsed ? "sap-icon--rhombus-milestone-2" : "") && M(o, a);
      },
      d: function d(e) {
        e && (N(t), N(i), N(r));
      }
    };
  }

  function Ei(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.sortedChildrenEntries) && (t = !!cr(n.node.icon)), t ? Ri : Li;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function Li(e) {
    var t, n, i, r;
    return {
      c: function c() {
        t = P("span"), V(n = P("img"), "src", i = e.node.icon), V(n, "alt", r = e.node.altText ? e.node.altText : ""), V(n, "class", "svelte-sigym8"), V(t, "class", "fd-nested-list__icon sap-icon svelte-sigym8");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.sortedChildrenEntries && i !== (i = t.node.icon) && V(n, "src", i), e.sortedChildrenEntries && r !== (r = t.node.altText ? t.node.altText : "") && V(n, "alt", r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ri(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-nested-list__icon sap-icon sap-icon--" + e.node.icon + " svelte-sigym8");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.sortedChildrenEntries && n !== (n = "fd-nested-list__icon sap-icon sap-icon--" + i.node.icon + " svelte-sigym8") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ai(e) {
    var t;
    return {
      c: function c() {
        V(t = P("i"), "class", "sap-icon--action svelte-sigym8");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Di(e) {
    var t,
        n = new ui({
      props: {
        node: e.node
      }
    });
    return {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.sortedChildrenEntries && (i.node = t.node), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Oi(e) {
    var t,
        n,
        _i35 = !e.node.hideFromNav && Ni(e);

    return {
      c: function c() {
        _i35 && _i35.c(), t = R();
      },
      m: function m(e, r) {
        _i35 && _i35.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.hideFromNav ? _i35 && (Se(), Ce(_i35, 1, 1, function () {
          _i35 = null;
        }), ye()) : _i35 ? (_i35.p(e, n), _e(_i35, 1)) : ((_i35 = Ni(n)).c(), _e(_i35, 1), _i35.m(t.parentNode, t));
      },
      i: function i(e) {
        n || (_e(_i35), n = !0);
      },
      o: function o(e) {
        Ce(_i35), n = !1;
      },
      d: function d(e) {
        _i35 && _i35.d(e), e && N(t);
      }
    };
  }

  function Vi(e) {
    var t, n, i, r;
    return {
      c: function c() {
        t = P("span"), V(n = P("img"), "src", i = e.nodes.metaInfo.icon), V(n, "alt", r = e.nodes.metaInfo.altText ? e.nodes.metaInfo.altText : ""), V(n, "class", "svelte-sigym8"), V(t, "class", "fd-nested-list__icon sap-icon svelte-sigym8");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.sortedChildrenEntries && i !== (i = t.nodes.metaInfo.icon) && V(n, "src", i), e.sortedChildrenEntries && r !== (r = t.nodes.metaInfo.altText ? t.nodes.metaInfo.altText : "") && V(n, "alt", r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Mi(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-nested-list__icon sap-icon sap-icon--" + e.nodes.metaInfo.icon + " " + (e.isSemiCollapsed && !e.nodes.metaInfo.icon ? "sap-icon--rhombus-milestone-2" : "") + " svelte-sigym8"), V(t, "role", "presentation");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        (e.sortedChildrenEntries || e.isSemiCollapsed) && n !== (n = "fd-nested-list__icon sap-icon sap-icon--" + i.nodes.metaInfo.icon + " " + (i.isSemiCollapsed && !i.nodes.metaInfo.icon ? "sap-icon--rhombus-milestone-2" : "") + " svelte-sigym8") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Fi(e) {
    var t,
        n,
        _i36 = e.node.label && Ui(e);

    return {
      c: function c() {
        _i36 && _i36.c(), t = R();
      },
      m: function m(e, r) {
        _i36 && _i36.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.label ? _i36 ? (_i36.p(e, n), _e(_i36, 1)) : ((_i36 = Ui(n)).c(), _e(_i36, 1), _i36.m(t.parentNode, t)) : _i36 && (Se(), Ce(_i36, 1, 1, function () {
          _i36 = null;
        }), ye());
      },
      i: function i(e) {
        n || (_e(_i36), n = !0);
      },
      o: function o(e) {
        Ce(_i36), n = !1;
      },
      d: function d(e) {
        _i36 && _i36.d(e), e && N(t);
      }
    };
  }

  function Ui(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c16,
        d,
        u,
        _p10,
        f,
        g = e.$getTranslation(e.node.label) + "",
        h = e.node.externalLink && e.node.externalLink.url && ji(e),
        _m6 = e.node.badgeCounter && Bi(e);

    function v() {
      return e.click_handler_3(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(g), o = L(), h && h.c(), a = L(), _m6 && _m6.c(), u = L(), V(i, "class", "fd-nested-list__title svelte-sigym8"), V(n, "href", s = e.getRouteLink(e.node)), V(n, "class", l = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8"), V(n, "data-testid", _c16 = ur(e.node)), V(n, "title", d = e.$getTranslation(e.node.label)), V(t, "class", "fd-nested-list__item svelte-sigym8"), V(t, "aria-labelledby", "collapsible_listnode_" + e.index), f = A(n, "click", D(v));
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(i, r), I(n, o), h && h.m(n, null), I(n, a), _m6 && _m6.m(n, null), I(t, u), _p10 = !0;
      },
      p: function p(t, i) {
        e = i, _p10 && !t.$getTranslation && !t.sortedChildrenEntries || g === (g = e.$getTranslation(e.node.label) + "") || M(r, g), e.node.externalLink && e.node.externalLink.url ? h || ((h = ji(e)).c(), h.m(n, a)) : h && (h.d(1), h = null), e.node.badgeCounter ? _m6 ? (_m6.p(t, e), _e(_m6, 1)) : ((_m6 = Bi(e)).c(), _e(_m6, 1), _m6.m(n, null)) : _m6 && (Se(), Ce(_m6, 1, 1, function () {
          _m6 = null;
        }), ye()), _p10 && !t.sortedChildrenEntries || s === (s = e.getRouteLink(e.node)) || V(n, "href", s), _p10 && !t.sortedChildrenEntries && !t.selectedNode || l === (l = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8") || V(n, "class", l), _p10 && !t.sortedChildrenEntries || _c16 === (_c16 = ur(e.node)) || V(n, "data-testid", _c16), _p10 && !t.$getTranslation && !t.sortedChildrenEntries || d === (d = e.$getTranslation(e.node.label)) || V(n, "title", d);
      },
      i: function i(e) {
        _p10 || (_e(_m6), _p10 = !0);
      },
      o: function o(e) {
        Ce(_m6), _p10 = !1;
      },
      d: function d(e) {
        e && N(t), h && h.d(), _m6 && _m6.d(), f();
      }
    };
  }

  function ji(e) {
    var t;
    return {
      c: function c() {
        V(t = P("i"), "class", "sap-icon--action svelte-sigym8");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Bi(e) {
    var t,
        n = new ui({
      props: {
        node: e.node
      }
    });
    return {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.sortedChildrenEntries && (i.node = t.node), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Gi(e) {
    var t,
        n,
        _i37 = !e.node.hideFromNav && Fi(e);

    return {
      c: function c() {
        _i37 && _i37.c(), t = R();
      },
      m: function m(e, r) {
        _i37 && _i37.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.hideFromNav ? _i37 && (Se(), Ce(_i37, 1, 1, function () {
          _i37 = null;
        }), ye()) : _i37 ? (_i37.p(e, n), _e(_i37, 1)) : ((_i37 = Fi(n)).c(), _e(_i37, 1), _i37.m(t.parentNode, t));
      },
      i: function i(e) {
        n || (_e(_i37), n = !0);
      },
      o: function o(e) {
        Ce(_i37), n = !1;
      },
      d: function d(e) {
        _i37 && _i37.d(e), e && N(t);
      }
    };
  }

  function zi(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.$getTranslation(e.key) + "";
    var c = e.nodes,
        _d6 = [];

    for (var _t55 = 0; _t55 < c.length; _t55 += 1) {
      _d6[_t55] = Ji(mi(e, c, _t55));
    }

    var u = function u(e) {
      return Ce(_d6[e], 1, 1, function () {
        _d6[e] = null;
      });
    };

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("h5"), r = E(l), o = L(), a = P("ul");

        for (var _e62 = 0; _e62 < _d6.length; _e62 += 1) {
          _d6[_e62].c();
        }

        V(i, "class", "lui-flyout-sublist__title fd-has-type-minus-1 fd-has-color-text-4 svelte-sigym8"), V(a, "class", "fd-nested-list fd-nested-list--text-only svelte-sigym8"), V(n, "class", "lui-flyout-sublist__wrapper svelte-sigym8"), V(t, "class", "lui-flyout-sublist svelte-sigym8");
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(n, o), I(n, a);

        for (var _e63 = 0; _e63 < _d6.length; _e63 += 1) {
          _d6[_e63].m(a, null);
        }

        s = !0;
      },
      p: function p(e, t) {
        if (s && !e.$getTranslation && !e.sortedChildrenEntries || l === (l = t.$getTranslation(t.key) + "") || M(r, l), e.sortedChildrenEntries || e.getRouteLink || e.selectedNode || e.getTestId || e.$getTranslation) {
          var _n41;

          for (c = t.nodes, _n41 = 0; _n41 < c.length; _n41 += 1) {
            var _i38 = mi(t, c, _n41);

            _d6[_n41] ? (_d6[_n41].p(e, _i38), _e(_d6[_n41], 1)) : (_d6[_n41] = Ji(_i38), _d6[_n41].c(), _e(_d6[_n41], 1), _d6[_n41].m(a, null));
          }

          for (Se(), _n41 = c.length; _n41 < _d6.length; _n41 += 1) {
            u(_n41);
          }

          ye();
        }
      },
      i: function i(e) {
        if (!s) {
          for (var _e64 = 0; _e64 < c.length; _e64 += 1) {
            _e(_d6[_e64]);
          }

          s = !0;
        }
      },
      o: function o(e) {
        _d6 = _d6.filter(pi);

        for (var _e65 = 0; _e65 < _d6.length; _e65 += 1) {
          Ce(_d6[_e65]);
        }

        s = !1;
      },
      d: function d(e) {
        e && N(t), $(_d6, e);
      }
    };
  }

  function Wi(e) {
    var t,
        n,
        _i39 = e.node.label && Hi(e);

    return {
      c: function c() {
        _i39 && _i39.c(), t = R();
      },
      m: function m(e, r) {
        _i39 && _i39.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.label ? _i39 ? (_i39.p(e, n), _e(_i39, 1)) : ((_i39 = Hi(n)).c(), _e(_i39, 1), _i39.m(t.parentNode, t)) : _i39 && (Se(), Ce(_i39, 1, 1, function () {
          _i39 = null;
        }), ye());
      },
      i: function i(e) {
        n || (_e(_i39), n = !0);
      },
      o: function o(e) {
        Ce(_i39), n = !1;
      },
      d: function d(e) {
        _i39 && _i39.d(e), e && N(t);
      }
    };
  }

  function Hi(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c17,
        d,
        u,
        _p11,
        f,
        g = e.$getTranslation(e.node.label) + "",
        h = e.node.externalLink && e.node.externalLink.url && qi(e),
        _m7 = e.node.badgeCounter && Ki(e);

    function v() {
      return e.click_handler_4(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(g), o = L(), h && h.c(), a = L(), _m7 && _m7.c(), u = L(), V(i, "class", "fd-nested-list__title svelte-sigym8"), V(n, "href", s = e.getRouteLink(e.node)), V(n, "class", l = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8"), V(n, "data-testid", _c17 = ur(e.node)), V(n, "title", d = e.$getTranslation(e.node.label)), V(t, "class", "fd-nested-list__item svelte-sigym8"), f = A(n, "click", D(v));
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(i, r), I(n, o), h && h.m(n, null), I(n, a), _m7 && _m7.m(n, null), I(t, u), _p11 = !0;
      },
      p: function p(t, i) {
        e = i, _p11 && !t.$getTranslation && !t.sortedChildrenEntries || g === (g = e.$getTranslation(e.node.label) + "") || M(r, g), e.node.externalLink && e.node.externalLink.url ? h || ((h = qi(e)).c(), h.m(n, a)) : h && (h.d(1), h = null), e.node.badgeCounter ? _m7 ? (_m7.p(t, e), _e(_m7, 1)) : ((_m7 = Ki(e)).c(), _e(_m7, 1), _m7.m(n, null)) : _m7 && (Se(), Ce(_m7, 1, 1, function () {
          _m7 = null;
        }), ye()), _p11 && !t.sortedChildrenEntries || s === (s = e.getRouteLink(e.node)) || V(n, "href", s), _p11 && !t.sortedChildrenEntries && !t.selectedNode || l === (l = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8") || V(n, "class", l), _p11 && !t.sortedChildrenEntries || _c17 === (_c17 = ur(e.node)) || V(n, "data-testid", _c17), _p11 && !t.$getTranslation && !t.sortedChildrenEntries || d === (d = e.$getTranslation(e.node.label)) || V(n, "title", d);
      },
      i: function i(e) {
        _p11 || (_e(_m7), _p11 = !0);
      },
      o: function o(e) {
        Ce(_m7), _p11 = !1;
      },
      d: function d(e) {
        e && N(t), h && h.d(), _m7 && _m7.d(), f();
      }
    };
  }

  function qi(e) {
    var t;
    return {
      c: function c() {
        V(t = P("i"), "class", "sap-icon--action svelte-sigym8");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ki(e) {
    var t,
        n = new ui({
      props: {
        node: e.node
      }
    });
    return {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.sortedChildrenEntries && (i.node = t.node), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Ji(e) {
    var t,
        n,
        _i40 = !e.node.hideFromNav && Wi(e);

    return {
      c: function c() {
        _i40 && _i40.c(), t = R();
      },
      m: function m(e, r) {
        _i40 && _i40.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.hideFromNav ? _i40 && (Se(), Ce(_i40, 1, 1, function () {
          _i40 = null;
        }), ye()) : _i40 ? (_i40.p(e, n), _e(_i40, 1)) : ((_i40 = Wi(n)).c(), _e(_i40, 1), _i40.m(t.parentNode, t));
      },
      i: function i(e) {
        n || (_e(_i40), n = !0);
      },
      o: function o(e) {
        Ce(_i40), n = !1;
      },
      d: function d(e) {
        _i40 && _i40.d(e), e && N(t);
      }
    };
  }

  function Yi(e) {
    var t,
        n,
        _i41 = e.node.label && Qi(e);

    return {
      c: function c() {
        _i41 && _i41.c(), t = R();
      },
      m: function m(e, r) {
        _i41 && _i41.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.label ? _i41 ? (_i41.p(e, n), _e(_i41, 1)) : ((_i41 = Qi(n)).c(), _e(_i41, 1), _i41.m(t.parentNode, t)) : _i41 && (Se(), Ce(_i41, 1, 1, function () {
          _i41 = null;
        }), ye());
      },
      i: function i(e) {
        n || (_e(_i41), n = !0);
      },
      o: function o(e) {
        Ce(_i41), n = !1;
      },
      d: function d(e) {
        _i41 && _i41.d(e), e && N(t);
      }
    };
  }

  function Qi(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c18,
        d,
        u,
        p,
        f,
        g,
        h = e.$getTranslation(e.node.label) + "";

    function m(e, t) {
      return t.node.icon ? Zi : Xi;
    }

    var v = m(0, e),
        b = v(e),
        w = e.node.externalLink && e.node.externalLink.url && nr(e),
        S = e.node.badgeCounter && ir(e);

    function y() {
      return e.click_handler(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), b.c(), i = L(), r = P("span"), o = E(h), a = L(), w && w.c(), s = L(), S && S.c(), p = L(), V(r, "class", "fd-nested-list__title svelte-sigym8"), V(n, "href", l = e.getRouteLink(e.node)), V(n, "title", _c18 = e.$getTranslation(e.node.label)), V(n, "class", d = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8"), V(n, "data-testid", u = ur(e.node)), V(t, "class", "fd-nested-list__item svelte-sigym8"), g = A(n, "click", D(y));
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), b.m(n, null), I(n, i), I(n, r), I(r, o), I(n, a), w && w.m(n, null), I(n, s), S && S.m(n, null), I(t, p), f = !0;
      },
      p: function p(t, r) {
        v === (v = m(0, e = r)) && b ? b.p(t, e) : (b.d(1), (b = v(e)) && (b.c(), b.m(n, i))), f && !t.$getTranslation && !t.sortedChildrenEntries || h === (h = e.$getTranslation(e.node.label) + "") || M(o, h), e.node.externalLink && e.node.externalLink.url ? w || ((w = nr(e)).c(), w.m(n, s)) : w && (w.d(1), w = null), e.node.badgeCounter ? S ? (S.p(t, e), _e(S, 1)) : ((S = ir(e)).c(), _e(S, 1), S.m(n, null)) : S && (Se(), Ce(S, 1, 1, function () {
          S = null;
        }), ye()), f && !t.sortedChildrenEntries || l === (l = e.getRouteLink(e.node)) || V(n, "href", l), f && !t.$getTranslation && !t.sortedChildrenEntries || _c18 === (_c18 = e.$getTranslation(e.node.label)) || V(n, "title", _c18), f && !t.sortedChildrenEntries && !t.selectedNode || d === (d = "fd-nested-list__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-sigym8") || V(n, "class", d), f && !t.sortedChildrenEntries || u === (u = ur(e.node)) || V(n, "data-testid", u);
      },
      i: function i(e) {
        f || (_e(S), f = !0);
      },
      o: function o(e) {
        Ce(S), f = !1;
      },
      d: function d(e) {
        e && N(t), b.d(), w && w.d(), S && S.d(), g();
      }
    };
  }

  function Xi(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-nested-list__icon sap-icon " + (e.isSemiCollapsed ? "sap-icon--rhombus-milestone-2" : "") + " svelte-sigym8"), V(t, "role", "presentation");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.isSemiCollapsed && n !== (n = "fd-nested-list__icon sap-icon " + (i.isSemiCollapsed ? "sap-icon--rhombus-milestone-2" : "") + " svelte-sigym8") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Zi(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.sortedChildrenEntries) && (t = !!cr(n.node.icon)), t ? tr : er;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function er(e) {
    var t, n, i, r;
    return {
      c: function c() {
        t = P("span"), V(n = P("img"), "src", i = e.node.icon), V(n, "alt", r = e.node.altText ? e.node.altText : ""), V(n, "class", "svelte-sigym8"), V(t, "class", "fd-nested-list__icon sap-icon svelte-sigym8");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.sortedChildrenEntries && i !== (i = t.node.icon) && V(n, "src", i), e.sortedChildrenEntries && r !== (r = t.node.altText ? t.node.altText : "") && V(n, "alt", r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function tr(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-nested-list__icon sap-icon sap-icon--" + e.node.icon + " svelte-sigym8"), V(t, "role", "presentation");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.sortedChildrenEntries && n !== (n = "fd-nested-list__icon sap-icon sap-icon--" + i.node.icon + " svelte-sigym8") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function nr(e) {
    var t;
    return {
      c: function c() {
        V(t = P("i"), "class", "fd-nested-list__icon sap-icon sap-icon--action svelte-sigym8"), V(t, "role", "presentation");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ir(e) {
    var t,
        n = new ui({
      props: {
        node: e.node
      }
    });
    return {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.sortedChildrenEntries && (i.node = t.node), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function rr(e) {
    var t,
        n,
        _i42 = !e.node.hideFromNav && Yi(e);

    return {
      c: function c() {
        _i42 && _i42.c(), t = R();
      },
      m: function m(e, r) {
        _i42 && _i42.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.hideFromNav ? _i42 && (Se(), Ce(_i42, 1, 1, function () {
          _i42 = null;
        }), ye()) : _i42 ? (_i42.p(e, n), _e(_i42, 1)) : ((_i42 = Yi(n)).c(), _e(_i42, 1), _i42.m(t.parentNode, t));
      },
      i: function i(e) {
        n || (_e(_i42), n = !0);
      },
      o: function o(e) {
        Ce(_i42), n = !1;
      },
      d: function d(e) {
        _i42 && _i42.d(e), e && N(t);
      }
    };
  }

  function or(e) {
    var t,
        n,
        _i43,
        r,
        o,
        a = [_i, yi],
        s = [];

    function l(e, n) {
      return (null == t || e.sortedChildrenEntries || e.virtualGroupPrefix) && (t = !("undefined" !== n.key && !n.key.startsWith(n.virtualGroupPrefix))), t ? 0 : 1;
    }

    return n = l(null, e), _i43 = s[n] = a[n](e), {
      c: function c() {
        _i43.c(), r = R();
      },
      m: function m(e, t) {
        s[n].m(e, t), T(e, r, t), o = !0;
      },
      p: function p(e, t) {
        var o = n;
        (n = l(e, t)) === o ? s[n].p(e, t) : (Se(), Ce(s[o], 1, 1, function () {
          s[o] = null;
        }), ye(), (_i43 = s[n]) || (_i43 = s[n] = a[n](t)).c(), _e(_i43, 1), _i43.m(r.parentNode, r));
      },
      i: function i(e) {
        o || (_e(_i43), o = !0);
      },
      o: function (_o10) {
        function o(_x58) {
          return _o10.apply(this, arguments);
        }

        o.toString = function () {
          return _o10.toString();
        };

        return o;
      }(function (e) {
        Ce(_i43), o = !1;
      }),
      d: function d(e) {
        s[n].d(e), e && N(r);
      }
    };
  }

  function ar(e) {
    var t,
        n,
        i,
        r,
        o,
        a = e.footerText ? e.footerText : "",
        s = e.semiCollapsibleButton && sr(e);
    return {
      c: function c() {
        t = P("div"), n = P("span"), i = P("span"), r = E(a), o = L(), s && s.c(), V(i, "class", "lui-side-nav__footer--text fd-has-type-minus-1 svelte-sigym8"), V(n, "class", "lui-side-nav__footer svelte-sigym8"), V(t, "class", "fd-side-nav__utility svelte-sigym8");
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), I(n, i), I(i, r), I(n, o), s && s.m(n, null);
      },
      p: function p(e, t) {
        e.footerText && a !== (a = t.footerText ? t.footerText : "") && M(r, a), t.semiCollapsibleButton ? s ? s.p(e, t) : ((s = sr(t)).c(), s.m(n, null)) : s && (s.d(1), s = null);
      },
      d: function d(e) {
        e && N(t), s && s.d();
      }
    };
  }

  function sr(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "lui-side-nav__footer--icon " + (e.isSemiCollapsed ? "sap-icon--open-command-field" : "sap-icon--close-command-field") + " svelte-sigym8"), V(t, "data-testid", "semiCollapsibleButton"), i = A(t, "click", e.click_handler_7);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.isSemiCollapsed && n !== (n = "lui-side-nav__footer--icon " + (i.isSemiCollapsed ? "sap-icon--open-command-field" : "sap-icon--close-command-field") + " svelte-sigym8") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t), i();
      }
    };
  }

  function lr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c19 = e.children && e.pathData.length > 1 && Si(e),
        _d7 = (e.footerText || e.semiCollapsibleButton) && ar(e);

    return {
      c: function c() {
        t = P("div"), n = P("nav"), _c19 && _c19.c(), i = L(), _d7 && _d7.c(), V(n, "class", r = "fd-side-nav " + (e.isSemiCollapsed ? "fd-side-nav--condensed" : "") + " svelte-sigym8"), V(n, "data-testid", "semiCollapsibleLeftNav"), V(t, "class", o = "fd-app__sidebar " + (e.hideNavComponent ? "hideNavComponent" : "") + " " + (e.footerText || e.semiCollapsibleButton ? "hasFooter" : "") + " " + (e.footerText && !e.semiCollapsibleButton ? "hasOnlyFooterText" : "") + " svelte-sigym8"), s = [A(gi, "resize", e.onResize), A(gi, "click", e.closePopupMenu), A(gi, "blur", e.closePopupMenu), A(n, "keyup", gr)];
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), _c19 && _c19.m(n, null), I(n, i), _d7 && _d7.m(n, null), a = !0;
      },
      p: function p(e, s) {
        s.children && s.pathData.length > 1 ? _c19 ? (_c19.p(e, s), _e(_c19, 1)) : ((_c19 = Si(s)).c(), _e(_c19, 1), _c19.m(n, i)) : _c19 && (Se(), Ce(_c19, 1, 1, function () {
          _c19 = null;
        }), ye()), s.footerText || s.semiCollapsibleButton ? _d7 ? _d7.p(e, s) : ((_d7 = ar(s)).c(), _d7.m(n, null)) : _d7 && (_d7.d(1), _d7 = null), a && !e.isSemiCollapsed || r === (r = "fd-side-nav " + (s.isSemiCollapsed ? "fd-side-nav--condensed" : "") + " svelte-sigym8") || V(n, "class", r), (!a || e.hideNavComponent || e.footerText || e.semiCollapsibleButton) && o !== (o = "fd-app__sidebar " + (s.hideNavComponent ? "hideNavComponent" : "") + " " + (s.footerText || s.semiCollapsibleButton ? "hasFooter" : "") + " " + (s.footerText && !s.semiCollapsibleButton ? "hasOnlyFooterText" : "") + " svelte-sigym8") && V(t, "class", o);
      },
      i: function i(e) {
        a || (_e(_c19), a = !0);
      },
      o: function o(e) {
        Ce(_c19), a = !1;
      },
      d: function d(e) {
        e && N(t), _c19 && _c19.d(), _d7 && _d7.d(), l(s);
      }
    };
  }

  function cr(e) {
    return At.isOpenUIiconName(e);
  }

  function dr(e, t) {
    return t && t.indexOf(e.metaInfo.categoryUid) >= 0;
  }

  function ur(e) {
    return e.testId ? e.testId : At.prepareForTests(e.pathSegment, e.label);
  }

  function pr(e, t) {
    return e && e.testId ? e.testId : At.prepareForTests(t || e.label);
  }

  function fr(e) {
    var t = e.closest(".fd-nested-list__item"),
        n = t.offsetTop,
        i = at.getShellbar().offsetHeight;
    var r;
    r = at.isCustomLuigiContainer() ? at.getCustomLuigiContainer().clientHeight : window.innerHeight, setTimeout(function () {
      var o = t.getElementsByClassName("lui-flyout-sublist")[0],
          a = e.closest(".lui-fd-side-nav-wrapper").scrollTop,
          s = n + i - a,
          l = r - n - t.offsetHeight + a - i;
      s + o.offsetHeight >= r ? (o.style.bottom = l + "px", o.className += " has-bottom-position") : o.style.top = s - i + "px";
    });
  }

  function gr(e) {
    if ("ArrowRight" === e.code) {
      var _e66 = Rt.getCurrentMicrofrontendIframe();

      _e66 && _e66.contentWindow && _e66.contentWindow.focus();
    }
  }

  function hr(e, t, n) {
    var i;

    var r = function r() {
      return {
        children: d,
        hideNavComponent: u,
        footerText: p,
        semiCollapsible: g,
        pathData: m,
        virtualGroupPrefix: b,
        isSemiCollapsed: w,
        selectedNode: S,
        sideNavAccordionMode: k,
        selectedCategory: y,
        expandedCategories: _,
        hasCategoriesWithIcon: C
      };
    },
        o = function o(e) {
      if (e) {
        Object.getOwnPropertyNames(e).forEach(function (t) {
          "pathData" === t ? n("pathData", m = e.pathData) : "context" === t ? l = e.context : "children" === t ? n("children", d = e.children) : "selectedNode" === t ? n("selectedNode", S = e.selectedNode) : "hasCategoriesWithIcon" === t && n("hasCategoriesWithIcon", C = e.hasCategoriesWithIcon);
        });

        var _t56 = S && S.sideNavAccordionMode || S && S.parent && S.parent.sideNavAccordionMode;

        n("sideNavAccordionMode", k = void 0 !== _t56 ? _t56 : rt.getConfigBooleanValue("navigation.defaults.sideNavAccordionMode"));
      }
    },
        a = ee();

    var s,
        l,
        c,
        d = t.children,
        u = t.hideNavComponent,
        p = t.footerText,
        g = t.semiCollapsible,
        h = t.semiCollapsibleButton,
        m = t.pathData,
        v = t.pathParams,
        _t$virtualGroupPrefix = t.virtualGroupPrefix,
        b = _t$virtualGroupPrefix === void 0 ? At.virtualGroupPrefix : _t$virtualGroupPrefix,
        w = t.isSemiCollapsed,
        S = t.selectedNode,
        _t$selectedCategory = t.selectedCategory,
        y = _t$selectedCategory === void 0 ? null : _t$selectedCategory,
        _ = t.expandedCategories,
        C = t.hasCategoriesWithIcon,
        x = t.sideNavClass,
        k = t.sideNavAccordionMode,
        I = ne("store"),
        T = ne("getTranslation");
    f(e, T, function (e) {
      n("$getTranslation", i = e);
    });

    var N = /*#__PURE__*/function () {
      var _ref39 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
        var e, t;
        return regeneratorRuntime.wrap(function _callee41$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                e = r();
                _context42.next = 3;
                return ht.getLeftNavData(_objectSpread({}, e), e);

              case 3:
                t = _context42.sent;
                t && (o(t), s = m, window.LEFTNAVDATA = t.children);

              case 5:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee41);
      }));

      return function N() {
        return _ref39.apply(this, arguments);
      };
    }();

    Q(function () {
      n("semiCollapsibleButton", h = "semiCollapsible" === rt.getConfigValue("settings.responsiveNavigation")), n("hideNavComponent", u = rt.getConfigBooleanValue("settings.hideNavigation")), c = rt.getConfigBooleanValue("settings.sideNavCompactMode"), n("expandedCategories", _ = At.loadExpandedCategories()), Ot.doOnStoreChange(I, function () {
        n("footerText", p = rt.getConfigValue("settings.sideNavFooterText"));
      }, ["settings.footer"]), Boolean(c) ? n("sideNavClass", x = "fd-nested-list fd-nested-list--compact") : n("sideNavClass", x = "fd-nested-list");
      var e = Ze.initial();
      n("isSemiCollapsed", w = e.isSemiCollapsed), n("semiCollapsible", g = e.semiCollapsible), Ze.onValueChanged(function (e) {
        n("isSemiCollapsed", w = e.isSemiCollapsed);
      }), Vt.addEventListener("message", function (e) {
        "luigi.navigation.update-badge-counters" === e.data.msg && N();
      });
    }), Y(function () {
      s && s == m || N();
    });
    var $ = t.sortedChildrenEntries;

    function P(e) {
      a("handleClick", {
        node: e
      });
    }

    function E(e, t) {
      if (Ze.getCollapsed()) {
        var _i44,
            _r20 = document.getElementsByClassName("fd-app__sidebar")[0];

        if (_i44 = e.metaInfo && e.metaInfo.label ? e.metaInfo.label : e.category && e.category.label || e.category, _r20.classList.contains("isBlocked") || (_r20.className += " isBlocked"), _i44 === y) return void n("selectedCategory", y = Ze.closePopupMenu(y));
        n("selectedCategory", y = _i44), fr(t);
      }
    }

    function L(e, t) {
      Ze.getCollapsed() || n("expandedCategories", _ = At.storeExpandedState(e.metaInfo.categoryUid, t, k));
    }

    function R(e) {
      n("isSemiCollapsed", w = Ze.buttonClicked()), document.getElementsByClassName("fd-tabs").length > 0 && a("resizeTabNav", {});
    }

    return e.$set = function (e) {
      "children" in e && n("children", d = e.children), "hideNavComponent" in e && n("hideNavComponent", u = e.hideNavComponent), "footerText" in e && n("footerText", p = e.footerText), "semiCollapsible" in e && n("semiCollapsible", g = e.semiCollapsible), "semiCollapsibleButton" in e && n("semiCollapsibleButton", h = e.semiCollapsibleButton), "pathData" in e && n("pathData", m = e.pathData), "pathParams" in e && n("pathParams", v = e.pathParams), "virtualGroupPrefix" in e && n("virtualGroupPrefix", b = e.virtualGroupPrefix), "isSemiCollapsed" in e && n("isSemiCollapsed", w = e.isSemiCollapsed), "selectedNode" in e && n("selectedNode", S = e.selectedNode), "selectedCategory" in e && n("selectedCategory", y = e.selectedCategory), "expandedCategories" in e && n("expandedCategories", _ = e.expandedCategories), "hasCategoriesWithIcon" in e && n("hasCategoriesWithIcon", C = e.hasCategoriesWithIcon), "sideNavClass" in e && n("sideNavClass", x = e.sideNavClass), "sideNavAccordionMode" in e && n("sideNavAccordionMode", k = e.sideNavAccordionMode), "sortedChildrenEntries" in e && n("sortedChildrenEntries", $ = e.sortedChildrenEntries);
    }, e.$$.update = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        children: 1
      };

      if (e.children && d) {
        var _e67 = Object.entries(d);

        _e67.sort(function (e, t) {
          return e[1].metaInfo.order - t[1].metaInfo.order;
        }), n("sortedChildrenEntries", $ = _e67);
      }
    }, {
      children: d,
      hideNavComponent: u,
      footerText: p,
      semiCollapsible: g,
      semiCollapsibleButton: h,
      pathData: m,
      pathParams: v,
      virtualGroupPrefix: b,
      isSemiCollapsed: w,
      selectedNode: S,
      selectedCategory: y,
      expandedCategories: _,
      hasCategoriesWithIcon: C,
      sideNavClass: x,
      sideNavAccordionMode: k,
      getTranslation: T,
      sortedChildrenEntries: $,
      getRouteLink: function getRouteLink(e) {
        return Dt.getNodeHref(e, v);
      },
      handleClick: P,
      handleIconClick: E,
      onResize: function onResize() {
        if (g) {
          var _e68 = Ze.onResize(y);

          n("isSemiCollapsed", w = _e68.isSemiCollapsed), n("selectedCategory", y = _e68.selectedCategory);
        }
      },
      setExpandedState: L,
      closePopupMenu: function closePopupMenu() {
        n("selectedCategory", y = Ze.closePopupMenu(y));
      },
      semiCollapsibleButtonClicked: R,
      $getTranslation: i,
      click_handler: function click_handler(_ref40) {
        var e = _ref40.node;
        return P(e);
      },
      click_handler_1: function click_handler_1(_ref41) {
        var e = _ref41.nodes;
        return L(e, !dr(e, _));
      },
      click_handler_2: function click_handler_2(_ref42) {
        var e = _ref42.nodes;
        return L(e, !dr(e, _));
      },
      click_handler_3: function click_handler_3(_ref43) {
        var e = _ref43.node;
        return P(e);
      },
      click_handler_4: function click_handler_4(_ref44) {
        var e = _ref44.node;
        return P(e);
      },
      click_handler_5: function click_handler_5(_ref45) {
        var e = _ref45.nodes;
        return E(e, event.currentTarget);
      },
      click_handler_6: function click_handler_6(_ref46) {
        var e = _ref46.node;
        return P(e);
      },
      click_handler_7: function click_handler_7() {
        return R();
      }
    };
  }

  var mr = /*#__PURE__*/function (_Ae9) {
    _inherits(mr, _Ae9);

    var _super13 = _createSuper(mr);

    function mr(e) {
      var _this44;

      _classCallCheck(this, mr);

      _this44 = _super13.call(this), Re(_assertThisInitialized(_this44), e, hr, lr, d, ["children", "hideNavComponent", "footerText", "semiCollapsible", "semiCollapsibleButton", "pathData", "pathParams", "virtualGroupPrefix", "isSemiCollapsed", "selectedNode", "selectedCategory", "expandedCategories", "hasCategoriesWithIcon", "sideNavClass", "sideNavAccordionMode", "sortedChildrenEntries", "handleClick", "handleIconClick", "calculateFlyoutPosition", "onResize", "handleKey", "setExpandedState", "closePopupMenu"]);
      return _this44;
    }

    _createClass(mr, [{
      key: "handleClick",
      get: function get() {
        return this.$$.ctx.handleClick;
      }
    }, {
      key: "handleIconClick",
      get: function get() {
        return this.$$.ctx.handleIconClick;
      }
    }, {
      key: "calculateFlyoutPosition",
      get: function get() {
        return fr;
      }
    }, {
      key: "onResize",
      get: function get() {
        return this.$$.ctx.onResize;
      }
    }, {
      key: "handleKey",
      get: function get() {
        return gr;
      }
    }, {
      key: "setExpandedState",
      get: function get() {
        return this.$$.ctx.setExpandedState;
      }
    }, {
      key: "closePopupMenu",
      get: function get() {
        return this.$$.ctx.closePopupMenu;
      }
    }]);

    return mr;
  }(Ae);

  var vr = function vr(e) {
    Ot.doOnStoreChange(e.store, function () {
      var t = rt.getConfigValue("navigation.appSwitcher");
      return t && (e.set({
        appSwitcherItems: t.items
      }), e.set({
        showMainAppEntry: t.showMainAppEntry
      })), e.set({
        hasApps: e.get().showMainAppEntry || e.get().appSwitcherItems && e.get().appSwitcherItems.length > 0
      }), rt.getConfigValueAsync("settings.header").then(function (t) {
        if (!t) return;
        t.title && (e.set({
          defaultTitle: t.title || ""
        }), e.set({
          defaultSubTitle: t.subTitle || ""
        }), br(e));
        var n = Boolean(t.logo);

        if (e.set({
          hasLogo: n
        }), setTimeout(function () {
          n && e.get().logo && (e.get().logo.src = t.logo, t.altText && (e.get().logo.alt = t.altText));
        }), t.favicon) {
          !t.favicon.split("?")[0].endsWith(".ico") && !t.favicon.startsWith("data:image") && console.warn("Favicon is not an .ico filetype and might get displayed wrong.");

          var _e69 = Object.assign(document.createElement("link"), {
            type: "image/x-icon",
            rel: "shortcut icon",
            href: t.favicon
          }),
              _n42 = document.getElementsByTagName("head")[0];

          var _iterator4 = _createForOfIteratorHelper(_n42.childNodes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _e70 = _step4.value;
              "shortcut icon" === _e70.rel && _e70.remove();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          _n42.appendChild(_e69);
        }
      });
    }, ["settings.header"]);
  },
      br = function br(e) {
    var t = e.get().appSwitcherItems,
        n = e.get().pathData,
        i = e.get().pathParams;
    var r;
    t && n && _toConsumableArray(t).sort(function (e, t) {
      return (t.link || "").localeCompare(e.link || "");
    }).some(function (e) {
      var t = !0;
      return Lt.trimTrailingSlash(Lt.trimLeadingSlash(e.link)).split("/").forEach(function (e, r) {
        t && (r + 1 >= n.length ? t = !1 : n[r + 1].pathSegment && function (e, t, n) {
          return e === t || !(!t.startsWith(":") || !n || n[t.substr(1)] !== e);
        }(e, n[r + 1].pathSegment, i) || (t = !1));
      }), t && (r = e), t;
    }), e.set({
      selectedItem: r
    });
    var o = r && r.title ? r.title : e.get().defaultTitle,
        a = lt.getDocumentTitle() || o;
    e.set({
      title: o
    }), document.title = st.getTranslation(a);
    var s = r ? r.subTitle || "" : e.get().defaultSubTitle;
    e.set({
      subTitle: s
    });
  };

  n(406);
  var wr = Ne.Object;

  function Sr(e, t, n) {
    var i = wr.create(e);
    return i.item = t[n], i;
  }

  function yr(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("img"), "data-testid", "luigi-topnav-logo"), V(t, "alt", "SAP"), V(t, "class", "svelte-1wb6qrg"), n = A(t, "click", e.click_handler);
      },
      m: function m(n, i) {
        T(n, t, i), e.img_binding(t);
      },
      p: i,
      d: function d(i) {
        i && N(t), e.img_binding(null), n();
      }
    };
  }

  function _r(e) {
    var t, n;

    function i(e, t) {
      return t.hasApps ? Cr : xr;
    }

    var r = i(0, e),
        o = r(e),
        a = e.subTitle && $r(e);
    return {
      c: function c() {
        o.c(), t = L(), a && a.c(), n = R();
      },
      m: function m(e, i) {
        o.m(e, i), T(e, t, i), a && a.m(e, i), T(e, n, i);
      },
      p: function p(e, s) {
        r === (r = i(0, s)) && o ? o.p(e, s) : (o.d(1), (o = r(s)) && (o.c(), o.m(t.parentNode, t))), s.subTitle ? a ? a.p(e, s) : ((a = $r(s)).c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
      },
      d: function d(e) {
        o.d(e), e && N(t), a && a.d(e), e && N(n);
      }
    };
  }

  function Cr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c20,
        d,
        u,
        p,
        f,
        g,
        h,
        m,
        v = e.$getTranslation(e.title) + "",
        b = e.showMainAppEntry && e.selectedItem && kr(e),
        w = e.appSwitcherItems && e.appSwitcherItems.length > 0 && Ir(e);

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("button"), r = P("span"), o = E(v), a = L(), s = P("i"), d = L(), u = P("div"), p = P("nav"), f = P("ul"), b && b.c(), g = L(), w && w.c(), V(r, "class", "fd-shellbar__title svelte-1wb6qrg"), V(r, "data-testid", "luigi-topnav-title"), V(s, "class", "sap-icon sap-icon--megamenu fd-shellbar__button--icon"), V(i, "class", "fd-button fd-button--transparent fd-button--menu fd-shellbar__button--menu"), V(i, "aria-haspopup", "true"), V(i, "aria-expanded", _c20 = e.dropDownStates.appSwitcherPopover || !1), V(i, "data-testid", "app-switcher"), V(n, "class", "fd-popover__control"), V(f, "class", "fd-menu__list fd-menu__list--no-shadow"), V(p, "class", "fd-menu"), V(u, "class", "fd-popover__body fd-popover__body--left"), V(u, "aria-hidden", h = !e.dropDownStates.appSwitcherPopover), V(u, "id", "appSwitcherPopover"), V(t, "class", "fd-popover"), m = [A(i, "click", O(e.click_handler_2)), A(n, "click", O(Ar))];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(r, o), I(i, a), I(i, s), I(t, d), I(t, u), I(u, p), I(p, f), b && b.m(f, null), I(f, g), w && w.m(f, null);
      },
      p: function p(e, t) {
        (e.$getTranslation || e.title) && v !== (v = t.$getTranslation(t.title) + "") && M(o, v), e.dropDownStates && _c20 !== (_c20 = t.dropDownStates.appSwitcherPopover || !1) && V(i, "aria-expanded", _c20), t.showMainAppEntry && t.selectedItem ? b ? b.p(e, t) : ((b = kr(t)).c(), b.m(f, g)) : b && (b.d(1), b = null), t.appSwitcherItems && t.appSwitcherItems.length > 0 ? w ? w.p(e, t) : ((w = Ir(t)).c(), w.m(f, null)) : w && (w.d(1), w = null), e.dropDownStates && h !== (h = !t.dropDownStates.appSwitcherPopover) && V(u, "aria-hidden", h);
      },
      d: function d(e) {
        e && N(t), b && b.d(), w && w.d(), l(m);
      }
    };
  }

  function xr(e) {
    var t,
        n,
        i,
        r = e.$getTranslation(e.title) + "";
    return {
      c: function c() {
        t = P("span"), n = E(r), V(t, "class", "fd-shellbar__title svelte-1wb6qrg"), V(t, "data-testid", "luigi-topnav-title"), i = A(t, "click", e.click_handler_1);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        (e.$getTranslation || e.title) && r !== (r = t.$getTranslation(t.title) + "") && M(n, r);
      },
      d: function d(e) {
        e && N(t), i();
      }
    };
  }

  function kr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s = e.$getTranslation(e.defaultTitle) + "";
    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(s), V(i, "class", "fd-menu__title"), V(n, "role", "button"), V(n, "class", "fd-menu__link"), V(n, "href", "/"), V(n, "data-testid", o = Er(e.defaultTitle)), V(t, "class", "fd-menu__item"), a = A(n, "click", D(e.goToRoot));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r);
      },
      p: function p(e, t) {
        (e.$getTranslation || e.defaultTitle) && s !== (s = t.$getTranslation(t.defaultTitle) + "") && M(r, s), e.defaultTitle && o !== (o = Er(t.defaultTitle)) && V(n, "data-testid", o);
      },
      d: function d(e) {
        e && N(t), a();
      }
    };
  }

  function Ir(e) {
    var t;
    var n = e.appSwitcherItems,
        i = [];

    for (var _t57 = 0; _t57 < n.length; _t57 += 1) {
      i[_t57] = Nr(Sr(e, n, _t57));
    }

    return {
      c: function c() {
        for (var _e71 = 0; _e71 < i.length; _e71 += 1) {
          i[_e71].c();
        }

        t = R();
      },
      m: function m(e, n) {
        for (var _t58 = 0; _t58 < i.length; _t58 += 1) {
          i[_t58].m(e, n);
        }

        T(e, t, n);
      },
      p: function p(e, r) {
        if (e.appSwitcherItems || e.selectedItem || e.hasValidLink || e.pathParams || e.getRouteLink || e.getTestId || e.$getTranslation) {
          var _o11;

          for (n = r.appSwitcherItems, _o11 = 0; _o11 < n.length; _o11 += 1) {
            var _a19 = Sr(r, n, _o11);

            i[_o11] ? i[_o11].p(e, _a19) : (i[_o11] = Nr(_a19), i[_o11].c(), i[_o11].m(t.parentNode, t));
          }

          for (; _o11 < i.length; _o11 += 1) {
            i[_o11].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        $(i, e), e && N(t);
      }
    };
  }

  function Tr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c21 = e.$getTranslation(e.item.title) + "";

    function d() {
      return e.click_handler_4(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(_c21), s = L(), V(i, "class", "fd-menu__title"), V(n, "role", "button"), V(n, "class", "fd-menu__link"), V(n, "href", o = Rr(e.item, e.pathParams)), V(n, "data-testid", a = Er(e.item)), V(t, "class", "fd-menu__item"), l = A(n, "click", D(d));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, s);
      },
      p: function p(t, i) {
        e = i, (t.$getTranslation || t.appSwitcherItems) && _c21 !== (_c21 = e.$getTranslation(e.item.title) + "") && M(r, _c21), (t.appSwitcherItems || t.pathParams) && o !== (o = Rr(e.item, e.pathParams)) && V(n, "href", o), t.appSwitcherItems && a !== (a = Er(e.item)) && V(n, "data-testid", a);
      },
      d: function d(e) {
        e && N(t), l();
      }
    };
  }

  function Nr(e) {
    var t,
        n = e.item !== e.selectedItem && Lr(e.item, e.pathParams),
        i = n && Tr(e);
    return {
      c: function c() {
        i && i.c(), t = R();
      },
      m: function m(e, n) {
        i && i.m(e, n), T(e, t, n);
      },
      p: function p(e, r) {
        (e.appSwitcherItems || e.selectedItem || e.pathParams) && (n = r.item !== r.selectedItem && Lr(r.item, r.pathParams)), n ? i ? i.p(e, r) : ((i = Tr(r)).c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null);
      },
      d: function d(e) {
        i && i.d(e), e && N(t);
      }
    };
  }

  function $r(e) {
    var t,
        n,
        i = e.$getTranslation(e.subTitle) + "";
    return {
      c: function c() {
        t = P("div"), n = E(i), V(t, "class", "fd-shellbar__subtitle svelte-1wb6qrg");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        (e.$getTranslation || e.subTitle) && i !== (i = t.$getTranslation(t.subTitle) + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Pr(e) {
    var t,
        n,
        r,
        o,
        a = e.hasLogo && yr(e),
        s = e.title && _r(e);

    return {
      c: function c() {
        t = P("span"), a && a.c(), r = L(), s && s.c(), o = R(), V(t, "class", n = "fd-shellbar__logo " + (e.hasLogo ? "" : "fd-shellbar__logo--image-replaced") + " " + (e.hasLogo ? "lui-customlogo" : "") + " svelte-1wb6qrg"), V(t, "aria-label", "SAP");
      },
      m: function m(e, n) {
        T(e, t, n), a && a.m(t, null), T(e, r, n), s && s.m(e, n), T(e, o, n);
      },
      p: function p(e, i) {
        i.hasLogo ? a ? a.p(e, i) : ((a = yr(i)).c(), a.m(t, null)) : a && (a.d(1), a = null), e.hasLogo && n !== (n = "fd-shellbar__logo " + (i.hasLogo ? "" : "fd-shellbar__logo--image-replaced") + " " + (i.hasLogo ? "lui-customlogo" : "") + " svelte-1wb6qrg") && V(t, "class", n), i.title ? s ? s.p(e, i) : ((s = _r(i)).c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
      },
      i: i,
      o: i,
      d: function d(e) {
        e && N(t), a && a.d(), e && N(r), s && s.d(e), e && N(o);
      }
    };
  }

  function Er(e) {
    return e.testId ? e.testId : At.prepareForTests(e.title || e);
  }

  function Lr(e, t) {
    if (e.link) {
      var _n43 = Dt.applyPathParams(e.link, t);

      if (0 !== _n43.indexOf(":") && -1 === _n43.indexOf("/:")) return !0;
    }

    return !1;
  }

  function Rr(e) {
    return Dt.getNodeHref(e);
  }

  var Ar = function Ar() {};

  function Dr(e, t, n) {
    var i;
    var r = ee();
    var o,
        a = t.logo,
        s = t.hasLogo,
        l = t.title,
        c = t.hasApps,
        _t$dropDownStates = t.dropDownStates,
        d = _t$dropDownStates === void 0 ? {} : _t$dropDownStates,
        u = t.showMainAppEntry,
        p = t.selectedItem,
        g = t.defaultTitle,
        h = t.appSwitcherItems,
        m = t.pathParams,
        v = t.subTitle,
        b = t.defaultSubTitle,
        w = t.pathData,
        S = ne("getUnsavedChangesModalPromise"),
        y = ne("getTranslation");
    f(e, y, function (e) {
      n("$getTranslation", i = e);
    });

    var _ = ne("store");

    var C = function C() {
      return {
        get: function get() {
          return {
            pathData: w,
            pathParams: m,
            appSwitcherItems: h,
            selectedItem: p,
            defaultTitle: g,
            title: l,
            subTitle: v,
            defaultSubTitle: b,
            showMainAppEntry: u,
            hasApps: c,
            hasLogo: s,
            logo: a
          };
        },
        set: function set(e) {
          e && Object.getOwnPropertyNames(e).forEach(function (t) {
            "pathData" === t ? n("pathData", w = e.pathData) : "appSwitcherItems" === t ? n("appSwitcherItems", h = e.appSwitcherItems) : "pathParams" === t ? n("pathParams", m = e.pathParams) : "selectedItem" === t ? n("selectedItem", p = e.selectedItem) : "title" === t ? n("title", l = e.title) : "defaultSubTitle" === t ? n("defaultSubTitle", b = e.defaultSubTitle) : "subTitle" === t ? n("subTitle", v = e.subTitle) : "defaultTitle" === t ? n("defaultTitle", g = e.defaultTitle) : "subTitle" === t ? n("subTitle", v = e.subTitle) : "showMainAppEntry" === t ? n("showMainAppEntry", u = e.showMainAppEntry) : "hasApps" === t ? n("hasApps", c = e.hasApps) : "hasLogo" === t && n("hasLogo", s = e.hasLogo);
          });
        },
        store: _
      };
    };

    function x(e) {
      S().then(function () {
        xt.navigateTo(Dt.applyPathParams(e, m));
      });
    }

    function k(e) {
      r("toggleDropdownState", {
        name: e
      });
    }

    Q(function () {
      vr(C());
    }), Y(function () {
      o && o == w || (br(C()), o = w);
    });
    return e.$set = function (e) {
      "logo" in e && n("logo", a = e.logo), "hasLogo" in e && n("hasLogo", s = e.hasLogo), "title" in e && n("title", l = e.title), "hasApps" in e && n("hasApps", c = e.hasApps), "dropDownStates" in e && n("dropDownStates", d = e.dropDownStates), "showMainAppEntry" in e && n("showMainAppEntry", u = e.showMainAppEntry), "selectedItem" in e && n("selectedItem", p = e.selectedItem), "defaultTitle" in e && n("defaultTitle", g = e.defaultTitle), "appSwitcherItems" in e && n("appSwitcherItems", h = e.appSwitcherItems), "pathParams" in e && n("pathParams", m = e.pathParams), "subTitle" in e && n("subTitle", v = e.subTitle), "defaultSubTitle" in e && n("defaultSubTitle", b = e.defaultSubTitle), "pathData" in e && n("pathData", w = e.pathData);
    }, {
      logo: a,
      hasLogo: s,
      title: l,
      hasApps: c,
      dropDownStates: d,
      showMainAppEntry: u,
      selectedItem: p,
      defaultTitle: g,
      appSwitcherItems: h,
      pathParams: m,
      subTitle: v,
      defaultSubTitle: b,
      pathData: w,
      getTranslation: y,
      goTo: x,
      goToRoot: function goToRoot() {
        S().then(function () {
          xt.navigateTo("/");
        });
      },
      handleClick: function handleClick(e) {
        r("handleClick", {
          node: e
        }), k("appSwitcherPopover");
      },
      toggleDropdownState: k,
      $getTranslation: i,
      img_binding: function img_binding(e) {
        oe[e ? "unshift" : "push"](function () {
          n("logo", a = e);
        });
      },
      click_handler: function click_handler() {
        return x("/");
      },
      click_handler_1: function click_handler_1() {
        return x("/");
      },
      click_handler_2: function click_handler_2() {
        return k("appSwitcherPopover");
      },
      click_handler_4: function click_handler_4(_ref47) {
        var e = _ref47.item;
        return x(e.link);
      }
    };
  }

  var Or = /*#__PURE__*/function (_Ae10) {
    _inherits(Or, _Ae10);

    var _super14 = _createSuper(Or);

    function Or(e) {
      var _this45;

      _classCallCheck(this, Or);

      _this45 = _super14.call(this), Re(_assertThisInitialized(_this45), e, Dr, Pr, d, ["logo", "hasLogo", "title", "hasApps", "dropDownStates", "showMainAppEntry", "selectedItem", "defaultTitle", "appSwitcherItems", "pathParams", "subTitle", "defaultSubTitle", "pathData", "goTo", "goToRoot", "handleClick", "toggleDropdownState"]);
      return _this45;
    }

    _createClass(Or, [{
      key: "goTo",
      get: function get() {
        return this.$$.ctx.goTo;
      }
    }, {
      key: "goToRoot",
      get: function get() {
        return this.$$.ctx.goToRoot;
      }
    }, {
      key: "handleClick",
      get: function get() {
        return this.$$.ctx.handleClick;
      }
    }, {
      key: "toggleDropdownState",
      get: function get() {
        return this.$$.ctx.toggleDropdownState;
      }
    }]);

    return Or;
  }(Ae);

  n(407);

  function Vr(e, t, n) {
    var i = Object.create(e);
    return i.profileItem = t[n], i;
  }

  function Mr(e) {
    var t,
        n,
        i,
        r,
        o,
        a = e.showUserInfo && Fr(e);
    var s = e.profileNav.items,
        l = [];

    for (var _t59 = 0; _t59 < s.length; _t59 += 1) {
      l[_t59] = Gr(Vr(e, s, _t59));
    }

    var _c22 = e.hasUserSettings && zr(e),
        _d8 = (e.isAuthorizationEnabled || e.isProfileLogoutItem) && Kr(e);

    return {
      c: function c() {
        t = P("nav"), n = P("ul"), a && a.c(), i = L();

        for (var _e72 = 0; _e72 < l.length; _e72 += 1) {
          l[_e72].c();
        }

        r = L(), _c22 && _c22.c(), o = L(), _d8 && _d8.c(), V(n, "class", "fd-menu__list fd-menu__list--no-shadow"), V(t, "class", "fd-menu");
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), a && a.m(n, null), I(n, i);

        for (var _e73 = 0; _e73 < l.length; _e73 += 1) {
          l[_e73].m(n, null);
        }

        I(n, r), _c22 && _c22.m(n, null), I(n, o), _d8 && _d8.m(n, null);
      },
      p: function p(e, t) {
        if (t.showUserInfo ? a ? a.p(e, t) : ((a = Fr(t)).c(), a.m(n, i)) : a && (a.d(1), a = null), e.getTestId || e.profileNav || e.getRouteLink || e.$getTranslation || e.hasOpenUIicon) {
          var _i45;

          for (s = t.profileNav.items, _i45 = 0; _i45 < s.length; _i45 += 1) {
            var _o12 = Vr(t, s, _i45);

            l[_i45] ? l[_i45].p(e, _o12) : (l[_i45] = Gr(_o12), l[_i45].c(), l[_i45].m(n, r));
          }

          for (; _i45 < l.length; _i45 += 1) {
            l[_i45].d(1);
          }

          l.length = s.length;
        }

        t.hasUserSettings ? _c22 ? _c22.p(e, t) : ((_c22 = zr(t)).c(), _c22.m(n, o)) : _c22 && (_c22.d(1), _c22 = null), t.isAuthorizationEnabled || t.isProfileLogoutItem ? _d8 ? _d8.p(e, t) : ((_d8 = Kr(t)).c(), _d8.m(n, null)) : _d8 && (_d8.d(1), _d8 = null);
      },
      d: function d(e) {
        e && N(t), a && a.d(), $(l, e), _c22 && _c22.d(), _d8 && _d8.d();
      }
    };
  }

  function Fr(e) {
    var t,
        n,
        i,
        r = e.userInfo.name ? e.userInfo.name : e.userInfo.email + "";
    return {
      c: function c() {
        t = P("li"), n = P("span"), i = E(r), V(n, "aria-label", "Username"), V(n, "id", "username"), V(n, "class", "lui-username fd-has-type-1 svelte-yfds2b"), V(n, "data-testid", "luigi-topnav-profile-username"), V(t, "class", "fd-menu__item");
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i);
      },
      p: function p(e, t) {
        e.userInfo && r !== (r = t.userInfo.name ? t.userInfo.name : t.userInfo.email + "") && M(i, r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ur(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.profileNav) && (t = !!no(n.profileItem)), t ? Br : jr;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function jr(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "class", "fd-top-nav__icon nav-icon svelte-yfds2b"), V(t, "src", n = e.profileItem.icon), V(t, "alt", i = e.profileItem.altText ? e.profileItem.altText : "");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.profileNav && n !== (n = r.profileItem.icon) && V(t, "src", n), e.profileNav && i !== (i = r.profileItem.altText ? r.profileItem.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Br(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("span"), "class", n = "fd-top-nav__icon sap-icon--" + e.profileItem.icon + " svelte-yfds2b");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.profileNav && n !== (n = "fd-top-nav__icon sap-icon--" + i.profileItem.icon + " svelte-yfds2b") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Gr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c23,
        d = e.$getTranslation(e.profileItem.label) + "",
        u = e.profileItem.icon && Ur(e);

    function p() {
      return e.click_handler_1(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), u && u.c(), i = L(), r = P("span"), o = E(d), V(r, "class", "fd-menu__title"), V(n, "class", "fd-menu__link"), V(n, "data-testid", "luigi-topnav-profile-item"), V(n, "href", a = ro(e.profileItem)), V(t, "class", "fd-menu__item"), V(t, "data-testid", s = io(e.profileItem)), _c23 = [A(n, "click", D(ao)), A(t, "click", p)];
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), u && u.m(n, null), I(n, i), I(n, r), I(r, o);
      },
      p: function p(r, l) {
        (e = l).profileItem.icon ? u ? u.p(r, e) : ((u = Ur(e)).c(), u.m(n, i)) : u && (u.d(1), u = null), (r.$getTranslation || r.profileNav) && d !== (d = e.$getTranslation(e.profileItem.label) + "") && M(o, d), r.profileNav && a !== (a = ro(e.profileItem)) && V(n, "href", a), r.profileNav && s !== (s = io(e.profileItem)) && V(t, "data-testid", s);
      },
      d: function d(e) {
        e && N(t), u && u.d(), l(_c23);
      }
    };
  }

  function zr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.$getTranslation(e.profileNav.settings.label) + "",
        _c24 = e.profileNav.settings.icon && Wr(e);

    return {
      c: function c() {
        t = P("li"), n = P("a"), _c24 && _c24.c(), i = L(), r = P("span"), o = E(l), V(r, "class", "fd-menu__title"), V(n, "aria-label", "User Settings"), V(n, "class", "fd-menu__link"), V(n, "data-testid", "settings-link"), V(t, "class", "fd-menu__item"), V(t, "data-testid", a = io(e.profileNav.settings)), s = A(t, "click", e.onUserSettingsClick);
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), _c24 && _c24.m(n, null), I(n, i), I(n, r), I(r, o);
      },
      p: function p(e, r) {
        r.profileNav.settings.icon ? _c24 ? _c24.p(e, r) : ((_c24 = Wr(r)).c(), _c24.m(n, i)) : _c24 && (_c24.d(1), _c24 = null), (e.$getTranslation || e.profileNav) && l !== (l = r.$getTranslation(r.profileNav.settings.label) + "") && M(o, l), e.profileNav && a !== (a = io(r.profileNav.settings)) && V(t, "data-testid", a);
      },
      d: function d(e) {
        e && N(t), _c24 && _c24.d(), s();
      }
    };
  }

  function Wr(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.profileNav) && (t = !!no(n.profileNav.settings)), t ? qr : Hr;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function Hr(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "class", "fd-top-nav__icon nav-icon svelte-yfds2b"), V(t, "src", n = e.profileNav.settings.icon), V(t, "alt", i = e.profileNav.settings.altText ? e.profileNav.settings.altText : "");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.profileNav && n !== (n = r.profileNav.settings.icon) && V(t, "src", n), e.profileNav && i !== (i = r.profileNav.settings.altText ? r.profileNav.settings.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function qr(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-top-nav__icon sap-icon--" + e.profileNav.settings.icon + " svelte-yfds2b");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.profileNav && n !== (n = "fd-top-nav__icon sap-icon--" + i.profileNav.settings.icon + " svelte-yfds2b") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Kr(e) {
    var t,
        n,
        i = (e.isLoggedIn || !e.isAuthorizationEnabled && e.isProfileLogoutItem) && Jr(e),
        r = e.isAuthorizationEnabled && !e.isLoggedIn && Zr(e);
    return {
      c: function c() {
        i && i.c(), t = L(), r && r.c(), n = R();
      },
      m: function m(e, o) {
        i && i.m(e, o), T(e, t, o), r && r.m(e, o), T(e, n, o);
      },
      p: function p(e, o) {
        o.isLoggedIn || !o.isAuthorizationEnabled && o.isProfileLogoutItem ? i ? i.p(e, o) : ((i = Jr(o)).c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null), o.isAuthorizationEnabled && !o.isLoggedIn ? r || ((r = Zr(o)).c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
      },
      d: function d(e) {
        i && i.d(e), e && N(t), r && r.d(e), e && N(n);
      }
    };
  }

  function Jr(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.$getTranslation(e.profileNav.logout.label) + "",
        _c25 = e.profileNav.logout.icon && Yr(e);

    return {
      c: function c() {
        t = P("li"), n = P("a"), _c25 && _c25.c(), i = L(), r = P("span"), o = E(l), V(r, "class", "fd-menu__title"), V(n, "aria-label", "Logout"), V(n, "class", "fd-menu__link"), V(n, "data-testid", "logout-link"), V(t, "class", "fd-menu__item"), V(t, "data-testid", a = io(e.profileNav.logout)), s = A(t, "click", e.onLogoutClick);
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), _c25 && _c25.m(n, null), I(n, i), I(n, r), I(r, o);
      },
      p: function p(e, r) {
        r.profileNav.logout.icon ? _c25 ? _c25.p(e, r) : ((_c25 = Yr(r)).c(), _c25.m(n, i)) : _c25 && (_c25.d(1), _c25 = null), (e.$getTranslation || e.profileNav) && l !== (l = r.$getTranslation(r.profileNav.logout.label) + "") && M(o, l), e.profileNav && a !== (a = io(r.profileNav.logout)) && V(t, "data-testid", a);
      },
      d: function d(e) {
        e && N(t), _c25 && _c25.d(), s();
      }
    };
  }

  function Yr(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.profileNav) && (t = !!no(n.profileNav.logout)), t ? Xr : Qr;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function Qr(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "class", "fd-top-nav__icon nav-icon svelte-yfds2b"), V(t, "src", n = e.profileNav.logout.icon), V(t, "alt", i = e.profileNav.logout.altText ? e.profileNav.logout.altText : "");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.profileNav && n !== (n = r.profileNav.logout.icon) && V(t, "src", n), e.profileNav && i !== (i = r.profileNav.logout.altText ? r.profileNav.logout.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Xr(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-top-nav__icon sap-icon--" + e.profileNav.logout.icon + " svelte-yfds2b");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.profileNav && n !== (n = "fd-top-nav__icon sap-icon--" + i.profileNav.logout.icon + " svelte-yfds2b") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Zr(e) {
    var t, n;
    return {
      c: function c() {
        (t = P("li")).innerHTML = '<a aria-label="Login" class="fd-menu__link" data-testid="login-link"><span class="fd-menu__title">Login</span></a>', V(t, "class", "fd-menu__item"), n = A(t, "click", to);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t), n();
      }
    };
  }

  function eo(e) {
    var t,
        n = !e.isHidden && Mr(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.isHidden ? n && (n.d(1), n = null) : n ? n.p(e, i) : ((n = Mr(i)).c(), n.m(t.parentNode, t));
      },
      i: i,
      o: i,
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function to() {
    Nt.startAuthorization();
  }

  function no(e) {
    return At.isOpenUIiconName(e.icon);
  }

  function io(e) {
    return e.testId ? e.testId : At.prepareForTests(e.label);
  }

  function ro(e) {
    return Dt.getNodeHref(e);
  }

  function oo() {
    Nt.logout();
  }

  var ao = function ao() {};

  function so(e, t, n) {
    var i;
    var r = ee();
    var o,
        a,
        s,
        l,
        c,
        d,
        u,
        _t$isHidden = t.isHidden,
        p = _t$isHidden === void 0 ? !1 : _t$isHidden,
        g = {
      logout: {},
      items: [],
      settings: {}
    },
        h = ne("store"),
        m = ne("getTranslation");
    f(e, m, function (e) {
      n("$getTranslation", i = e);
    });
    var v = ne("getUnsavedChangesModalPromise"),
        b = ne("openViewInModal");

    function w() {
      d || (Ot.doOnStoreChange(h, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
        var e, t, i, r, _e74;

        return regeneratorRuntime.wrap(function _callee42$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return rt.getConfigValueAsync("navigation.profile.logout");

              case 2:
                e = _context43.sent;
                _context43.next = 5;
                return rt.getConfigValueAsync("userSettings");

              case 5:
                t = _context43.sent;
                _context43.t0 = t;

                if (_context43.t0) {
                  _context43.next = 11;
                  break;
                }

                _context43.next = 10;
                return rt.getConfigValueAsync("settings.userSettings");

              case 10:
                _context43.t0 = _context43.sent;

              case 11:
                i = _context43.t0;
                n("hasUserSettings", c = Boolean(i));
                _context43.next = 15;
                return rt.getConfigValueAsync("navigation.profile.items");

              case 15:
                _context43.t1 = _context43.sent;

                if (_context43.t1) {
                  _context43.next = 18;
                  break;
                }

                _context43.t1 = [];

              case 18:
                _context43.t2 = _context43.t1;
                r = {
                  items: _context43.t2
                };

                if (c) {
                  _e74 = i.userSettingsProfileMenuEntry;
                  r.settings = _objectSpread(_objectSpread({}, mt.userSettingsProfileMenuEntry), _e74);
                }

                r.logout = _objectSpread(_objectSpread({}, mt.logout), e), n("isProfileLogoutItem", l = Boolean(e)), u = !1, Nt.setProfileLogoutFn(null), e && Lt.isFunction(e.customLogoutFn) && (u = !0, Nt.setProfileLogoutFn(e.customLogoutFn)), n("profileNav", g = r);

              case 22:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee42);
      })), ["navigation.profile"]), d = !0);
    }

    function S() {
      return _S2.apply(this, arguments);
    }

    function _S2() {
      _S2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
        var e;
        return regeneratorRuntime.wrap(function _callee44$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return rt.getConfigValueAsync("navigation.profile.staticUserInfoFn");

              case 2:
                e = _context45.sent;
                e && (Nt.setUserInfo(o), n("userInfo", o = e), r("userInfoUpdated", o));

              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee44);
      }));
      return _S2.apply(this, arguments);
    }

    function y(e) {
      v().then(function () {
        if (e.openNodeInModal) {
          var _t60 = Dt.buildRoute(e, "".concat(e.link));

          b(_t60, !0 === e.openNodeInModal ? {} : e.openNodeInModal);
        } else xt.navigateToLink(e);
      }), r("toggleDropdownState");
    }

    Q( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
      return regeneratorRuntime.wrap(function _callee43$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              ot.isAuthorizationEnabled() ? n("isAuthorizationEnabled", s = !0) : (n("isAuthorizationEnabled", s = !1), S()), w(), Nt.getLoggedInStore().subscribe(function (e) {
                n("isLoggedIn", a = e);
              }), Nt.getUserInfoStore().subscribe(function (e) {
                n("userInfo", o = e), r("userInfoUpdated", o);
              });

            case 1:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee43);
    })));
    var _ = t.showUserInfo;
    return e.$set = function (e) {
      "isHidden" in e && n("isHidden", p = e.isHidden), "showUserInfo" in e && n("showUserInfo", _ = e.showUserInfo);
    }, e.$$.update = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        userInfo: 1
      };
      e.userInfo && n("showUserInfo", _ = Boolean(o && (o.name || o.email)));
    }, {
      isHidden: p,
      userInfo: o,
      isLoggedIn: a,
      profileNav: g,
      isAuthorizationEnabled: s,
      isProfileLogoutItem: l,
      hasUserSettings: c,
      getTranslation: m,
      setProfileNavData: w,
      setProfileUserData: S,
      onActionClick: y,
      onLogoutClick: function onLogoutClick() {
        v().then(function () {
          s ? oo() : l && u ? g.logout.customLogoutFn() : console.error("No IDP provider or profile.customLogoutFn is defined.");
        });
      },
      onUserSettingsClick: function onUserSettingsClick() {
        lt.openUserSettings(), r("toggleDropdownState");
      },
      showUserInfo: _,
      $getTranslation: i,
      click_handler_1: function click_handler_1(_ref50) {
        var e = _ref50.profileItem;
        return y(e);
      }
    };
  }

  var lo = /*#__PURE__*/function (_Ae11) {
    _inherits(lo, _Ae11);

    var _super15 = _createSuper(lo);

    function lo(e) {
      var _this46;

      _classCallCheck(this, lo);

      _this46 = _super15.call(this), Re(_assertThisInitialized(_this46), e, so, eo, d, ["isHidden", "setProfileNavData", "setProfileUserData", "onActionClick", "onLogoutClick", "onUserSettingsClick", "logout", "showUserInfo"]);
      return _this46;
    }

    _createClass(lo, [{
      key: "setProfileNavData",
      get: function get() {
        return this.$$.ctx.setProfileNavData;
      }
    }, {
      key: "setProfileUserData",
      get: function get() {
        return this.$$.ctx.setProfileUserData;
      }
    }, {
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }, {
      key: "onLogoutClick",
      get: function get() {
        return this.$$.ctx.onLogoutClick;
      }
    }, {
      key: "onUserSettingsClick",
      get: function get() {
        return this.$$.ctx.onUserSettingsClick;
      }
    }, {
      key: "logout",
      get: function get() {
        return oo;
      }
    }]);

    return lo;
  }(Ae);

  n(408);

  function co(e, t, n) {
    var i = Object.create(e);
    return i.node = t[n], i;
  }

  function uo(e) {
    var t, n;
    var _i46 = e.nodes,
        r = [];

    for (var _t61 = 0; _t61 < _i46.length; _t61 += 1) {
      r[_t61] = ho(co(e, _i46, _t61));
    }

    var o = function o(e) {
      return Ce(r[e], 1, 1, function () {
        r[e] = null;
      });
    };

    return {
      c: function c() {
        for (var _e75 = 0; _e75 < r.length; _e75 += 1) {
          r[_e75].c();
        }

        t = R();
      },
      m: function m(e, i) {
        for (var _t62 = 0; _t62 < r.length; _t62 += 1) {
          r[_t62].m(e, i);
        }

        T(e, t, i), n = !0;
      },
      p: function p(e, n) {
        if (e.noSubTitle || e.nodes || e.getTestId || e.getNodeSubtitle || e.getNodeLabel || e.hasOpenUIicon) {
          var _a20;

          for (_i46 = n.nodes, _a20 = 0; _a20 < _i46.length; _a20 += 1) {
            var _o13 = co(n, _i46, _a20);

            r[_a20] ? (r[_a20].p(e, _o13), _e(r[_a20], 1)) : (r[_a20] = ho(_o13), r[_a20].c(), _e(r[_a20], 1), r[_a20].m(t.parentNode, t));
          }

          for (Se(), _a20 = _i46.length; _a20 < r.length; _a20 += 1) {
            o(_a20);
          }

          ye();
        }
      },
      i: function i(e) {
        if (!n) {
          for (var _e76 = 0; _e76 < _i46.length; _e76 += 1) {
            _e(r[_e76]);
          }

          n = !0;
        }
      },
      o: function o(e) {
        r = r.filter(Boolean);

        for (var _e77 = 0; _e77 < r.length; _e77 += 1) {
          Ce(r[_e77]);
        }

        n = !1;
      },
      d: function d(e) {
        $(r, e), e && N(t);
      }
    };
  }

  function po(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "src", n = e.node.icon), V(t, "alt", i = e.node.altText ? e.node.altText : ""), V(t, "class", "svelte-1sa23mz");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.nodes && n !== (n = r.node.icon) && V(t, "src", n), e.nodes && i !== (i = r.node.altText ? r.node.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function fo(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "sap-icon " + (e.node.icon && e.hasOpenUIicon(e.node) ? "sap-icon--" + e.node.icon : "") + " svelte-1sa23mz");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        (e.nodes || e.hasOpenUIicon) && n !== (n = "sap-icon " + (i.node.icon && i.hasOpenUIicon(i.node) ? "sap-icon--" + i.node.icon : "") + " svelte-1sa23mz") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function go(e) {
    var t,
        n,
        i = e.getNodeSubtitle(e.node) + "";
    return {
      c: function c() {
        t = P("div"), n = E(i), V(t, "class", "fd-product-switch__subtitle");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        (e.getNodeSubtitle || e.nodes) && i !== (i = t.getNodeSubtitle(t.node) + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ho(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c26,
        d,
        u,
        _p12,
        f,
        g,
        h = e.getNodeLabel(e.node) + "",
        m = e.getNodeSubtitle(e.node);

    function v(e, t) {
      return (null == i || e.hasOpenUIicon || e.nodes) && (i = !!t.hasOpenUIicon(t.node)), i ? fo : po;
    }

    var b = v(null, e),
        w = b(e),
        S = new ui({
      props: {
        node: e.node
      }
    }),
        y = m && go(e);

    function _() {
      return e.click_handler_1(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("div"), w.c(), r = L(), S.$$.fragment.c(), o = L(), a = P("div"), s = P("div"), l = E(h), _c26 = L(), y && y.c(), d = L(), V(n, "class", "lui-product-switch__icon svelte-1sa23mz"), V(s, "class", "fd-product-switch__title svelte-1sa23mz"), V(a, "class", "fd-product-switch__text svelte-1sa23mz"), V(t, "class", u = "fd-product-switch__item " + ("true" == e.noSubTitle ? "y-has-no-subtitle" : "") + " " + (e.node.selected ? "selected" : "") + " svelte-1sa23mz"), V(t, "data-e2e", "mobile-topnav-item"), V(t, "data-testid", _p12 = e.getTestId(e.node)), g = A(t, "click", _);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n), w.m(n, null), I(n, r), Ee(S, n, null), I(t, o), I(t, a), I(a, s), I(s, l), I(a, _c26), y && y.m(a, null), I(t, d), f = !0;
      },
      p: function p(i, o) {
        b === (b = v(i, e = o)) && w ? w.p(i, e) : (w.d(1), (w = b(e)) && (w.c(), w.m(n, r)));
        var s = {};
        i.nodes && (s.node = e.node), S.$set(s), f && !i.getNodeLabel && !i.nodes || h === (h = e.getNodeLabel(e.node) + "") || M(l, h), (i.getNodeSubtitle || i.nodes) && (m = e.getNodeSubtitle(e.node)), m ? y ? y.p(i, e) : ((y = go(e)).c(), y.m(a, null)) : y && (y.d(1), y = null), f && !i.noSubTitle && !i.nodes || u === (u = "fd-product-switch__item " + ("true" == e.noSubTitle ? "y-has-no-subtitle" : "") + " " + (e.node.selected ? "selected" : "") + " svelte-1sa23mz") || V(t, "class", u), f && !i.getTestId && !i.nodes || _p12 === (_p12 = e.getTestId(e.node)) || V(t, "data-testid", _p12);
      },
      i: function i(e) {
        f || (_e(S.$$.fragment, e), f = !0);
      },
      o: function o(e) {
        Ce(S.$$.fragment, e), f = !1;
      },
      d: function d(e) {
        e && N(t), w.d(), Le(S), y && y.d(), g();
      }
    };
  }

  function mo(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c27,
        d,
        u,
        _p13,
        f,
        g,
        h,
        _m8,
        v,
        b,
        w,
        S = e.nodes && uo(e);

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("div"), a = P("h3"), s = E(e.label), _c27 = L(), d = P("div"), u = P("div"), _p13 = P("ul"), S && S.c(), f = L(), g = P("footer"), h = P("div"), _m8 = P("div"), (v = P("button")).textContent = "Cancel", V(a, "class", "fd-dialog__title"), V(o, "class", "fd-bar__element"), V(r, "class", "fd-bar__left"), V(i, "class", "fd-dialog__header fd-bar fd-bar--header"), V(_p13, "class", "fd-product-switch__list"), V(u, "class", "fd-product-switch__body fd-product-switch__body--mobile svelte-1sa23mz"), V(d, "class", "fd-dialog__body fd-dialog__body--no-vertical-padding"), V(v, "class", "fd-button fd-button--light fd-dialog__decisive-button"), V(v, "data-testid", "mobile-topnav-close"), V(_m8, "class", "fd-bar__element"), V(h, "class", "fd-bar__right"), V(g, "class", "fd-dialog__footer fd-bar fd-bar--cosy fd-bar--footer"), V(n, "class", "fd-dialog__content fd-dialog__content--mobile"), V(t, "class", "fd-dialog fd-dialog--active"), w = [A(v, "click", e.click_handler), A(t, "click", O(vo))];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), I(a, s), I(n, _c27), I(n, d), I(d, u), I(u, _p13), S && S.m(_p13, null), I(n, f), I(n, g), I(g, h), I(h, _m8), I(_m8, v), b = !0;
      },
      p: function p(e, t) {
        b && !e.label || M(s, t.label), t.nodes ? S ? (S.p(e, t), _e(S, 1)) : ((S = uo(t)).c(), _e(S, 1), S.m(_p13, null)) : S && (Se(), Ce(S, 1, 1, function () {
          S = null;
        }), ye());
      },
      i: function i(e) {
        b || (_e(S), b = !0);
      },
      o: function o(e) {
        Ce(S), b = !1;
      },
      d: function d(e) {
        e && N(t), S && S.d(), l(w);
      }
    };
  }

  var vo = function vo() {};

  function bo(e, t, n) {
    var i = ee();
    var r = t.label,
        o = t.nodes,
        a = t.getTestId,
        s = t.hasOpenUIicon,
        l = t.getNodeLabel,
        c = t.getNodeSubtitle,
        d = t.noSubTitle;

    function u(e) {
      i("listClick", e);
    }

    return e.$set = function (e) {
      "label" in e && n("label", r = e.label), "nodes" in e && n("nodes", o = e.nodes), "getTestId" in e && n("getTestId", a = e.getTestId), "hasOpenUIicon" in e && n("hasOpenUIicon", s = e.hasOpenUIicon), "getNodeLabel" in e && n("getNodeLabel", l = e.getNodeLabel), "getNodeSubtitle" in e && n("getNodeSubtitle", c = e.getNodeSubtitle), "noSubTitle" in e && n("noSubTitle", d = e.noSubTitle);
    }, {
      label: r,
      nodes: o,
      getTestId: a,
      hasOpenUIicon: s,
      getNodeLabel: l,
      getNodeSubtitle: c,
      noSubTitle: d,
      onActionClick: u,
      click_handler: function click_handler(t) {
        ie(e, t);
      },
      click_handler_1: function click_handler_1(_ref51) {
        var e = _ref51.node;
        return u(e);
      }
    };
  }

  var wo = /*#__PURE__*/function (_Ae12) {
    _inherits(wo, _Ae12);

    var _super16 = _createSuper(wo);

    function wo(e) {
      var _this47;

      _classCallCheck(this, wo);

      _this47 = _super16.call(this), Re(_assertThisInitialized(_this47), e, bo, mo, d, ["label", "nodes", "getTestId", "hasOpenUIicon", "getNodeLabel", "getNodeSubtitle", "noSubTitle", "onActionClick"]);
      return _this47;
    }

    _createClass(wo, [{
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }]);

    return wo;
  }(Ae);

  n(409);
  var So = Ne.window;

  function yo(e, t, n) {
    var i = Object.create(e);
    return i.node = t[n], i;
  }

  function _o(e) {
    var t,
        n,
        _i47,
        r = e.children && Co(e);

    return {
      c: function c() {
        t = P("nav"), n = P("ul"), r && r.c(), V(n, "class", "fd-menu__list fd-menu__list--top fd-menu__list--no-shadow"), V(t, "class", "fd-menu");
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), r && r.m(n, null), _i47 = !0;
      },
      p: function p(e, t) {
        t.children ? r ? (r.p(e, t), _e(r, 1)) : ((r = Co(t)).c(), _e(r, 1), r.m(n, null)) : r && (Se(), Ce(r, 1, 1, function () {
          r = null;
        }), ye());
      },
      i: function i(e) {
        _i47 || (_e(r), _i47 = !0);
      },
      o: function o(e) {
        Ce(r), _i47 = !1;
      },
      d: function d(e) {
        e && N(t), r && r.d();
      }
    };
  }

  function Co(e) {
    var t, n;
    var _i48 = e.children,
        r = [];

    for (var _t63 = 0; _t63 < _i48.length; _t63 += 1) {
      r[_t63] = ko(yo(e, _i48, _t63));
    }

    var o = function o(e) {
      return Ce(r[e], 1, 1, function () {
        r[e] = null;
      });
    };

    return {
      c: function c() {
        for (var _e78 = 0; _e78 < r.length; _e78 += 1) {
          r[_e78].c();
        }

        t = R();
      },
      m: function m(e, i) {
        for (var _t64 = 0; _t64 < r.length; _t64 += 1) {
          r[_t64].m(e, i);
        }

        T(e, t, i), n = !0;
      },
      p: function p(e, n) {
        if (e.getTestId || e.children || e.getRouteLink || e.getNodeLabel || e.hasOpenUIicon) {
          var _a21;

          for (_i48 = n.children, _a21 = 0; _a21 < _i48.length; _a21 += 1) {
            var _o14 = yo(n, _i48, _a21);

            r[_a21] ? (r[_a21].p(e, _o14), _e(r[_a21], 1)) : (r[_a21] = ko(_o14), r[_a21].c(), _e(r[_a21], 1), r[_a21].m(t.parentNode, t));
          }

          for (Se(), _a21 = _i48.length; _a21 < r.length; _a21 += 1) {
            o(_a21);
          }

          ye();
        }
      },
      i: function i(e) {
        if (!n) {
          for (var _e79 = 0; _e79 < _i48.length; _e79 += 1) {
            _e(r[_e79]);
          }

          n = !0;
        }
      },
      o: function o(e) {
        r = r.filter(Boolean);

        for (var _e80 = 0; _e80 < r.length; _e80 += 1) {
          Ce(r[_e80]);
        }

        n = !1;
      },
      d: function d(e) {
        $(r, e), e && N(t);
      }
    };
  }

  function xo(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "src", n = e.node.icon), V(t, "alt", i = e.node.altText ? e.node.altText : ""), V(t, "class", "svelte-1rq7dhj");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.children && n !== (n = r.node.icon) && V(t, "src", n), e.children && i !== (i = r.node.altText ? r.node.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ko(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c28,
        d,
        u,
        _p14,
        f,
        g,
        h = !$o(e.node),
        m = Po(e.node) + "",
        v = h && xo(e),
        b = new ui({
      props: {
        node: e.node
      }
    });

    function w() {
      return e.click_handler_1(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), v && v.c(), r = L(), b.$$.fragment.c(), a = L(), s = P("span"), _c28 = E(m), u = L(), V(i, "class", o = "fd-top-nav__icon " + (e.node.icon && $o(e.node) ? "sap-icon--" + e.node.icon : "") + " svelte-1rq7dhj"), V(s, "class", "fd-menu__title"), V(n, "href", d = e.getRouteLink(e.node)), V(n, "class", "fd-menu__link"), V(t, "class", "fd-menu__item"), V(t, "data-testid", _p14 = Eo(e.node)), g = [A(n, "click", D(Lo)), A(t, "click", w)];
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), v && v.m(i, null), I(i, r), Ee(b, i, null), I(n, a), I(n, s), I(s, _c28), I(t, u), f = !0;
      },
      p: function p(a, s) {
        e = s, a.children && (h = !$o(e.node)), h ? v ? v.p(a, e) : ((v = xo(e)).c(), v.m(i, r)) : v && (v.d(1), v = null);
        var l = {};
        a.children && (l.node = e.node), b.$set(l), f && !a.children || o === (o = "fd-top-nav__icon " + (e.node.icon && $o(e.node) ? "sap-icon--" + e.node.icon : "") + " svelte-1rq7dhj") || V(i, "class", o), f && !a.children || m === (m = Po(e.node) + "") || M(_c28, m), f && !a.children || d === (d = e.getRouteLink(e.node)) || V(n, "href", d), f && !a.children || _p14 === (_p14 = Eo(e.node)) || V(t, "data-testid", _p14);
      },
      i: function i(e) {
        f || (_e(b.$$.fragment, e), f = !0);
      },
      o: function o(e) {
        Ce(b.$$.fragment, e), f = !1;
      },
      d: function d(e) {
        e && N(t), v && v.d(), Le(b), l(g);
      }
    };
  }

  function Io(e) {
    var t,
        n = new wo({
      props: {
        nodes: e.node.children,
        label: Po(e.node),
        hasOpenUIicon: $o,
        getNodeLabel: Po,
        getNodeSubtitle: e.getNodeSubtitle,
        getTestId: Eo,
        noSubTitle: "true"
      }
    });
    return n.$on("click", e.closeSubNav), n.$on("listClick", e.onActionClickExternal), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.node && (i.nodes = t.node.children), e.node && (i.label = Po(t.node)), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function To(e) {
    var t,
        n,
        _i49,
        r,
        o = !e.isMobile && _o(e),
        a = e.isMobile && Io(e);

    return {
      c: function c() {
        o && o.c(), t = L(), a && a.c(), n = R(), r = A(So, "resize", No);
      },
      m: function m(e, r) {
        o && o.m(e, r), T(e, t, r), a && a.m(e, r), T(e, n, r), _i49 = !0;
      },
      p: function p(e, i) {
        i.isMobile ? o && (Se(), Ce(o, 1, 1, function () {
          o = null;
        }), ye()) : o ? (o.p(e, i), _e(o, 1)) : ((o = _o(i)).c(), _e(o, 1), o.m(t.parentNode, t)), i.isMobile ? a ? (a.p(e, i), _e(a, 1)) : ((a = Io(i)).c(), _e(a, 1), a.m(n.parentNode, n)) : a && (Se(), Ce(a, 1, 1, function () {
          a = null;
        }), ye());
      },
      i: function i(e) {
        _i49 || (_e(o), _e(a), _i49 = !0);
      },
      o: function (_o15) {
        function o(_x59) {
          return _o15.apply(this, arguments);
        }

        o.toString = function () {
          return _o15.toString();
        };

        return o;
      }(function (e) {
        Ce(o), Ce(a), _i49 = !1;
      }),
      d: function d(e) {
        o && o.d(e), e && N(t), a && a.d(e), e && N(n), r();
      }
    };
  }

  function No() {
    var e = .01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", "".concat(e, "px"));
  }

  function $o(e) {
    return At.isOpenUIiconName(e.icon);
  }

  function Po(e) {
    return st.getTranslation(e.label);
  }

  function Eo(e) {
    return e.testId ? e.testId : At.prepareForTests(e.pathSegment, e.label);
  }

  var Lo = function Lo() {};

  function Ro(e, t, n) {
    var i = ee();
    var r,
        o = t.isMobile,
        a = t.children,
        s = t.node,
        l = ne("getUnsavedChangesModalPromise"),
        c = ne("openViewInModal");

    var d = function d() {
      return {
        get: function get() {
          return {
            pathParams: r
          };
        },
        set: function set(e) {}
      };
    };

    function u(e) {
      l().then(function () {
        if (e.openNodeInModal) {
          var _t65 = Dt.buildRoute(e, "/".concat(e.pathSegment));

          c(_t65, !0 === e.openNodeInModal ? {} : e.openNodeInModal);
        } else xt.handleRouteClick(e, d());
      }), p();
    }

    function p() {
      i("close");
    }

    Q( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
      return regeneratorRuntime.wrap(function _callee45$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              No();

            case 1:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee45);
    }))), Y( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
      return regeneratorRuntime.wrap(function _callee46$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              _context47.t0 = a;

              if (_context47.t0) {
                _context47.next = 7;
                break;
              }

              _context47.t1 = n;
              _context47.next = 5;
              return ht.getChildren(s);

            case 5:
              _context47.t2 = a = _context47.sent;
              (0, _context47.t1)("children", _context47.t2);

            case 7:
              n("children", a);

            case 8:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee46);
    })));
    return e.$set = function (e) {
      "isMobile" in e && n("isMobile", o = e.isMobile), "children" in e && n("children", a = e.children), "node" in e && n("node", s = e.node);
    }, {
      isMobile: o,
      children: a,
      node: s,
      getNodeSubtitle: function getNodeSubtitle() {},
      onActionClick: u,
      onActionClickExternal: function onActionClickExternal(e) {
        u(e.detail);
      },
      closeSubNav: p,
      getRouteLink: function getRouteLink(e) {
        return Dt.getNodeHref(e, r);
      },
      click_handler_1: function click_handler_1(_ref54) {
        var e = _ref54.node;
        return u(e);
      }
    };
  }

  var Ao = /*#__PURE__*/function (_Ae13) {
    _inherits(Ao, _Ae13);

    var _super17 = _createSuper(Ao);

    function Ao(e) {
      var _this48;

      _classCallCheck(this, Ao);

      _this48 = _super17.call(this), Re(_assertThisInitialized(_this48), e, Ro, To, d, ["isMobile", "children", "node", "onActionClick", "onActionClickExternal", "closeSubNav", "setViewportHeightVariable"]);
      return _this48;
    }

    _createClass(Ao, [{
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }, {
      key: "onActionClickExternal",
      get: function get() {
        return this.$$.ctx.onActionClickExternal;
      }
    }, {
      key: "closeSubNav",
      get: function get() {
        return this.$$.ctx.closeSubNav;
      }
    }, {
      key: "setViewportHeightVariable",
      get: function get() {
        return No;
      }
    }]);

    return Ao;
  }(Ae);

  var Do = {
    _fallbackLabels: new Map(),
    resetFallbackLabelCache: function resetFallbackLabelCache() {
      this._fallbackLabels.clear();
    },
    getPreparedParentNodePath: function getPreparedParentNodePath(e) {
      return e.parentNodePath && e.parentNodePath.startsWith("/") || console.error("Luigi Config Error: navigation.contextSwitcher.parentNodePath must be defined as an absolute path."), e.parentNodePath ? Lt.addTrailingSlash(e.parentNodePath) : e.parentNodePath;
    },
    generateSwitcherNav: function generateSwitcherNav(e, t) {
      var n = this.getPreparedParentNodePath(e);
      return t.map(function (e) {
        return {
          label: e.label,
          link: (n || "/") + e.pathValue,
          id: e.pathValue,
          testId: e.testId,
          customRendererCategory: e.customRendererCategory
        };
      });
    },
    getNodePathFromCurrentPath: function getNodePathFromCurrentPath(e, t) {
      var n = Lt.addLeadingSlash(xt.getCurrentPath()),
          i = Lt.addLeadingSlash(t.link);
      return n.startsWith(i) ? e.link + Lt.addLeadingSlash(n.substring(i.length)) : e.link;
    },
    getOptionById: function getOptionById(e, t) {
      return e.find(function (e) {
        return e.id === t;
      });
    },
    getLabelFromOptions: function getLabelFromOptions(e, t) {
      var n = e.find(function (e) {
        return e.id === t;
      });
      return n && n.label;
    },
    isContextSwitcherDetailsView: function isContextSwitcherDetailsView(e, t) {
      var n = Lt.normalizePath(e),
          i = Lt.normalizePath(t);
      return Boolean(t && n && n.startsWith(i) && n !== i);
    },
    getFallbackLabel: function getFallbackLabel(e, t) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
        var n, i, r;
        return regeneratorRuntime.wrap(function _callee47$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                if (e) {
                  _context48.next = 2;
                  break;
                }

                return _context48.abrupt("return", t);

              case 2:
                n = rt.getConfigBooleanValue("navigation.contextSwitcher.useFallbackLabelCache"), i = Do._fallbackLabels;

                if (!(n && i.has(t))) {
                  _context48.next = 5;
                  break;
                }

                return _context48.abrupt("return", i.get(t));

              case 5:
                _context48.next = 7;
                return e(t);

              case 7:
                r = _context48.sent;
                return _context48.abrupt("return", (n && i.set(t, r), r));

              case 9:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee47);
      }))();
    },
    getSelectedId: function getSelectedId(e, t, n) {
      if (e = Lt.normalizePath(e), n = Lt.normalizePath(n), Do.isContextSwitcherDetailsView(e, n)) return e.replace(n, "").split("/")[0].split("?")[0];
    },
    getSelectedOption: function getSelectedOption(e, t, n) {
      var _this49 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
        var i, r;
        return regeneratorRuntime.wrap(function _callee48$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                r = _this49.getSelectedId(e, t, n);
                return _context49.abrupt("return", (r && t && (i = Do.getOptionById(t, r)), i));

              case 2:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee48);
      }))();
    },
    getSelectedLabel: function getSelectedLabel(e, t, n, i) {
      var _this50 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
        var r, o;
        return regeneratorRuntime.wrap(function _callee49$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                r = _this50.getSelectedId(e, t, n);

                if (r) {
                  _context50.next = 3;
                  break;
                }

                return _context50.abrupt("return");

              case 3:
                _context50.next = 5;
                return _this50.getSelectedOption(e, t, n);

              case 5:
                o = _context50.sent;
                _context50.t0 = o ? o.label : void 0;

                if (_context50.t0) {
                  _context50.next = 11;
                  break;
                }

                _context50.next = 10;
                return Do.getFallbackLabel(i, r);

              case 10:
                _context50.t0 = _context50.sent;

              case 11:
                return _context50.abrupt("return", _context50.t0);

              case 12:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee49);
      }))();
    },
    fetchOptions: function fetchOptions() {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
        var e, t, n;
        return regeneratorRuntime.wrap(function _callee50$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                e = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : [];
                t = rt.getConfigValue("navigation.contextSwitcher");

                if (!(!t.lazyloadOptions && e.length)) {
                  _context51.next = 4;
                  break;
                }

                return _context51.abrupt("return", e);

              case 4:
                _context51.next = 6;
                return rt.getConfigValueAsync("navigation.contextSwitcher.options");

              case 6:
                n = _context51.sent;
                _context51.next = 9;
                return Do.generateSwitcherNav(t, n);

              case 9:
                return _context51.abrupt("return", _context51.sent);

              case 10:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee50);
      }))();
    }
  };
  n(410);

  function Oo(e, t, n) {
    var i = Object.create(e);
    return i.node = t[n], i;
  }

  function Vo(e, t, n) {
    var i = Object.create(e);
    return i.node = t[n], i;
  }

  function Mo(e, t, n) {
    var i = Object.create(e);
    return i.node = t[n], i;
  }

  function Fo(e) {
    var t;
    var n = e.actions,
        i = [];

    for (var _t66 = 0; _t66 < n.length; _t66 += 1) {
      i[_t66] = jo(Mo(e, n, _t66));
    }

    return {
      c: function c() {
        t = P("ul");

        for (var _e81 = 0; _e81 < i.length; _e81 += 1) {
          i[_e81].c();
        }

        V(t, "class", "fd-menu__list fd-menu__list--top svelte-syxx60");
      },
      m: function m(e, n) {
        T(e, t, n);

        for (var _e82 = 0; _e82 < i.length; _e82 += 1) {
          i[_e82].m(t, null);
        }
      },
      p: function p(e, r) {
        if (e.actions || e.getTestId || e.getRouteLink || e.$getTranslation) {
          var _o16;

          for (n = r.actions, _o16 = 0; _o16 < n.length; _o16 += 1) {
            var _a22 = Mo(r, n, _o16);

            i[_o16] ? i[_o16].p(e, _a22) : (i[_o16] = jo(_a22), i[_o16].c(), i[_o16].m(t, null));
          }

          for (; _o16 < i.length; _o16 += 1) {
            i[_o16].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        e && N(t), $(i, e);
      }
    };
  }

  function Uo(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c29,
        d = e.$getTranslation(e.node.label) + "";

    function u() {
      return e.click_handler_1(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(d), a = L(), V(i, "class", "fd-menu__title"), V(n, "href", o = e.getRouteLink(e.node)), V(n, "class", "fd-menu__link"), V(t, "class", "fd-menu__item"), V(t, "data-testid", s = e.getTestId(e.node)), _c29 = [A(n, "click", D(ea)), A(t, "click", u)];
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, a);
      },
      p: function p(i, a) {
        e = a, (i.$getTranslation || i.actions) && d !== (d = e.$getTranslation(e.node.label) + "") && M(r, d), (i.getRouteLink || i.actions) && o !== (o = e.getRouteLink(e.node)) && V(n, "href", o), (i.getTestId || i.actions) && s !== (s = e.getTestId(e.node)) && V(t, "data-testid", s);
      },
      d: function d(e) {
        e && N(t), l(_c29);
      }
    };
  }

  function jo(e) {
    var t,
        n = "top" === e.node.position || !["top", "bottom"].includes(e.node.position),
        i = n && Uo(e);
    return {
      c: function c() {
        i && i.c(), t = R();
      },
      m: function m(e, n) {
        i && i.m(e, n), T(e, t, n);
      },
      p: function p(e, r) {
        e.actions && (n = "top" === r.node.position || !["top", "bottom"].includes(r.node.position)), n ? i ? i.p(e, r) : ((i = Uo(r)).c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null);
      },
      d: function d(e) {
        i && i.d(e), e && N(t);
      }
    };
  }

  function Bo(e) {
    var t;
    return {
      c: function c() {
        (t = P("li")).innerHTML = '<div class="fd-busy-indicator" aria-hidden="false" aria-label="Loading"><div class="fd-busy-indicator--circle-0"></div> <div class="fd-busy-indicator--circle-1"></div> <div class="fd-busy-indicator--circle-2"></div></div>', V(t, "class", "lui-contextswitcher-indicator");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Go(e) {
    var t;
    var n = e.options,
        i = [];

    for (var _t67 = 0; _t67 < n.length; _t67 += 1) {
      i[_t67] = Jo(Vo(e, n, _t67));
    }

    return {
      c: function c() {
        for (var _e83 = 0; _e83 < i.length; _e83 += 1) {
          i[_e83].c();
        }

        t = R();
      },
      m: function m(e, n) {
        for (var _t68 = 0; _t68 < i.length; _t68 += 1) {
          i[_t68].m(e, n);
        }

        T(e, t, n);
      },
      p: function p(e, r) {
        if (e.getNodeName || e.options || e.config || e.getTestId || e.customOptionsRenderer || e.selectedLabel || e.getRouteLink) {
          var _o17;

          for (n = r.options, _o17 = 0; _o17 < n.length; _o17 += 1) {
            var _a23 = Vo(r, n, _o17);

            i[_o17] ? i[_o17].p(e, _a23) : (i[_o17] = Jo(_a23), i[_o17].c(), i[_o17].m(t.parentNode, t));
          }

          for (; _o17 < i.length; _o17 += 1) {
            i[_o17].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        $(i, e), e && N(t);
      }
    };
  }

  function zo(e) {
    return {
      c: i,
      m: i,
      p: i,
      d: i
    };
  }

  function Wo(e) {
    var t, n, i, r;

    function o(e, t) {
      return t.customOptionsRenderer ? qo : Ho;
    }

    var a = o(0, e),
        s = a(e);

    function l() {
      return e.click_handler_3(e);
    }

    return {
      c: function c() {
        t = P("li"), s.c(), i = L(), V(t, "class", "fd-menu__item"), V(t, "data-testid", n = e.getTestId(e.node)), r = A(t, "click", l);
      },
      m: function m(e, n) {
        T(e, t, n), s.m(t, null), T(e, i, n);
      },
      p: function p(i, r) {
        a === (a = o(0, e = r)) && s ? s.p(i, e) : (s.d(1), (s = a(e)) && (s.c(), s.m(t, null))), (i.getTestId || i.options) && n !== (n = e.getTestId(e.node)) && V(t, "data-testid", n);
      },
      d: function d(e) {
        e && N(t), s.d(), e && N(i), r();
      }
    };
  }

  function Ho(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.label + "";
    return {
      c: function c() {
        t = P("a"), n = P("span"), i = E(l), V(n, "class", "fd-menu__title"), V(t, "href", r = e.getRouteLink(e.node)), V(t, "class", o = "fd-menu__link " + (e.label === e.selectedLabel ? "is-selected" : "") + " svelte-syxx60"), V(t, "title", a = e.label), s = A(t, "click", D(ta));
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i);
      },
      p: function p(e, n) {
        (e.getNodeName || e.options || e.config) && l !== (l = n.label + "") && M(i, l), (e.getRouteLink || e.options) && r !== (r = n.getRouteLink(n.node)) && V(t, "href", r), (e.getNodeName || e.options || e.config || e.selectedLabel) && o !== (o = "fd-menu__link " + (n.label === n.selectedLabel ? "is-selected" : "") + " svelte-syxx60") && V(t, "class", o), (e.getNodeName || e.options || e.config) && a !== (a = n.label) && V(t, "title", a);
      },
      d: function d(e) {
        e && N(t), s();
      }
    };
  }

  function qo(e) {
    var t,
        n = e.customOptionsRenderer(e.node, e.label === e.selectedLabel) + "";
    return {
      c: function c() {
        t = new B(n, null);
      },
      m: function m(e, n) {
        t.m(e, n);
      },
      p: function p(e, i) {
        (e.customOptionsRenderer || e.options || e.getNodeName || e.config || e.selectedLabel) && n !== (n = i.customOptionsRenderer(i.node, i.label === i.selectedLabel) + "") && t.p(n);
      },
      d: function d(e) {
        e && t.d();
      }
    };
  }

  function Ko(e) {
    return {
      c: i,
      m: i,
      p: i,
      d: i
    };
  }

  function Jo(e) {
    var t, n;
    var i = {
      ctx: e,
      current: null,
      token: null,
      pending: Ko,
      then: Wo,
      "catch": zo,
      value: "label",
      error: "null"
    };
    return Te(n = e.getNodeName(e.node.label, e.config.fallbackLabelResolver, e.node.id), i), {
      c: function c() {
        t = R(), i.block.c();
      },
      m: function m(e, n) {
        T(e, t, n), i.block.m(e, i.anchor = n), i.mount = function () {
          return t.parentNode;
        }, i.anchor = t;
      },
      p: function p(t, r) {
        e = r, i.ctx = e, ("getNodeName" in t || "options" in t || "config" in t) && n !== (n = e.getNodeName(e.node.label, e.config.fallbackLabelResolver, e.node.id)) && Te(n, i) || i.block.p(t, o(o({}, e), i.resolved));
      },
      d: function d(e) {
        e && N(t), i.block.d(e), i.token = null, i = null;
      }
    };
  }

  function Yo(e) {
    var t;
    var n = e.actions,
        i = [];

    for (var _t69 = 0; _t69 < n.length; _t69 += 1) {
      i[_t69] = Xo(Oo(e, n, _t69));
    }

    return {
      c: function c() {
        t = P("ul");

        for (var _e84 = 0; _e84 < i.length; _e84 += 1) {
          i[_e84].c();
        }

        V(t, "class", "fd-menu__list fd-menu__list--bottom svelte-syxx60");
      },
      m: function m(e, n) {
        T(e, t, n);

        for (var _e85 = 0; _e85 < i.length; _e85 += 1) {
          i[_e85].m(t, null);
        }
      },
      p: function p(e, r) {
        if (e.actions || e.getTestId || e.getRouteLink || e.$getTranslation) {
          var _o18;

          for (n = r.actions, _o18 = 0; _o18 < n.length; _o18 += 1) {
            var _a24 = Oo(r, n, _o18);

            i[_o18] ? i[_o18].p(e, _a24) : (i[_o18] = Xo(_a24), i[_o18].c(), i[_o18].m(t, null));
          }

          for (; _o18 < i.length; _o18 += 1) {
            i[_o18].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        e && N(t), $(i, e);
      }
    };
  }

  function Qo(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c30,
        d = e.$getTranslation(e.node.label) + "";

    function u() {
      return e.click_handler_5(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(d), a = L(), V(i, "class", "fd-menu__title"), V(n, "href", o = e.getRouteLink(e.node)), V(n, "class", "fd-menu__link"), V(t, "class", "fd-menu__item"), V(t, "data-testid", s = e.getTestId(e.node)), _c30 = [A(n, "click", D(na)), A(t, "click", u)];
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, a);
      },
      p: function p(i, a) {
        e = a, (i.$getTranslation || i.actions) && d !== (d = e.$getTranslation(e.node.label) + "") && M(r, d), (i.getRouteLink || i.actions) && o !== (o = e.getRouteLink(e.node)) && V(n, "href", o), (i.getTestId || i.actions) && s !== (s = e.getTestId(e.node)) && V(t, "data-testid", s);
      },
      d: function d(e) {
        e && N(t), l(_c30);
      }
    };
  }

  function Xo(e) {
    var t,
        n = "bottom" === e.node.position && Qo(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        "bottom" === i.node.position ? n ? n.p(e, i) : ((n = Qo(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function Zo(e) {
    var t,
        n,
        r,
        o,
        a,
        s,
        l = e.actions && e.actions.length && Fo(e),
        _c31 = e.options && 0 === e.options.length && Bo(),
        _d9 = e.options && e.options.length && Go(e),
        u = e.actions && e.actions.length && Yo(e);

    return {
      c: function c() {
        t = P("nav"), l && l.c(), n = L(), r = P("ul"), _c31 && _c31.c(), o = L(), _d9 && _d9.c(), a = L(), u && u.c(), V(r, "class", "fd-menu__list"), V(r, "id", "context_menu_middle"), V(t, "class", s = "fd-menu lui-ctx-switch-nav " + (e.isMobile ? "fd-menu--mobile" : "") + " svelte-syxx60");
      },
      m: function m(e, i) {
        T(e, t, i), l && l.m(t, null), I(t, n), I(t, r), _c31 && _c31.m(r, null), I(r, o), _d9 && _d9.m(r, null), I(t, a), u && u.m(t, null);
      },
      p: function p(e, i) {
        i.actions && i.actions.length ? l ? l.p(e, i) : ((l = Fo(i)).c(), l.m(t, n)) : l && (l.d(1), l = null), i.options && 0 === i.options.length ? _c31 || ((_c31 = Bo()).c(), _c31.m(r, o)) : _c31 && (_c31.d(1), _c31 = null), i.options && i.options.length ? _d9 ? _d9.p(e, i) : ((_d9 = Go(i)).c(), _d9.m(r, null)) : _d9 && (_d9.d(1), _d9 = null), i.actions && i.actions.length ? u ? u.p(e, i) : ((u = Yo(i)).c(), u.m(t, null)) : u && (u.d(1), u = null), e.isMobile && s !== (s = "fd-menu lui-ctx-switch-nav " + (i.isMobile ? "fd-menu--mobile" : "") + " svelte-syxx60") && V(t, "class", s);
      },
      i: i,
      o: i,
      d: function d(e) {
        e && N(t), l && l.d(), _c31 && _c31.d(), _d9 && _d9.d(), u && u.d();
      }
    };
  }

  var ea = function ea() {},
      ta = function ta() {},
      na = function na() {};

  function ia(e, t, n) {
    var i;
    var r = ee();
    var _t$actions = t.actions,
        o = _t$actions === void 0 ? [] : _t$actions,
        _t$config = t.config,
        a = _t$config === void 0 ? {} : _t$config,
        s = t.customOptionsRenderer,
        _t$options = t.options,
        l = _t$options === void 0 ? [] : _t$options,
        c = t.selectedLabel,
        d = t.selectedOption,
        u = t.isMobile,
        p = t.getNodeName,
        g = t.getRouteLink,
        h = t.getTestId,
        m = t.getTranslation;

    function v(e) {
      r("onActionClick", {
        node: e
      });
    }

    function b(e, t) {
      r("goToOption", {
        option: e,
        selectedOption: t
      });
    }

    f(e, m, function (e) {
      n("$getTranslation", i = e);
    });
    return e.$set = function (e) {
      "actions" in e && n("actions", o = e.actions), "config" in e && n("config", a = e.config), "customOptionsRenderer" in e && n("customOptionsRenderer", s = e.customOptionsRenderer), "options" in e && n("options", l = e.options), "selectedLabel" in e && n("selectedLabel", c = e.selectedLabel), "selectedOption" in e && n("selectedOption", d = e.selectedOption), "isMobile" in e && n("isMobile", u = e.isMobile), "getNodeName" in e && n("getNodeName", p = e.getNodeName), "getRouteLink" in e && n("getRouteLink", g = e.getRouteLink), "getTestId" in e && n("getTestId", h = e.getTestId), "getTranslation" in e && n("getTranslation", m = e.getTranslation);
    }, {
      actions: o,
      config: a,
      customOptionsRenderer: s,
      options: l,
      selectedLabel: c,
      selectedOption: d,
      isMobile: u,
      getNodeName: p,
      getRouteLink: g,
      getTestId: h,
      getTranslation: m,
      onActionClick: v,
      goToOption: b,
      $getTranslation: i,
      click_handler_1: function click_handler_1(_ref55) {
        var e = _ref55.node;
        return v(e);
      },
      click_handler_3: function click_handler_3(_ref56) {
        var e = _ref56.node;
        return b(e, d);
      },
      click_handler_5: function click_handler_5(_ref57) {
        var e = _ref57.node;
        return v(e);
      }
    };
  }

  var ra = /*#__PURE__*/function (_Ae14) {
    _inherits(ra, _Ae14);

    var _super18 = _createSuper(ra);

    function ra(e) {
      var _this51;

      _classCallCheck(this, ra);

      _this51 = _super18.call(this), Re(_assertThisInitialized(_this51), e, ia, Zo, d, ["actions", "config", "customOptionsRenderer", "options", "selectedLabel", "selectedOption", "isMobile", "getNodeName", "getRouteLink", "getTestId", "getTranslation", "onActionClick", "goToOption"]);
      return _this51;
    }

    _createClass(ra, [{
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }, {
      key: "goToOption",
      get: function get() {
        return this.$$.ctx.goToOption;
      }
    }]);

    return ra;
  }(Ae);

  n(411);

  function oa(e) {
    var t,
        n,
        _i50,
        r = !e.isMobile && aa(e),
        o = e.isMobile && e.dropDownStates.contextSwitcherPopover && e.renderAsDropdown && ua(e);

    return {
      c: function c() {
        r && r.c(), t = L(), o && o.c(), n = R();
      },
      m: function m(e, a) {
        r && r.m(e, a), T(e, t, a), o && o.m(e, a), T(e, n, a), _i50 = !0;
      },
      p: function p(e, i) {
        i.isMobile ? r && (Se(), Ce(r, 1, 1, function () {
          r = null;
        }), ye()) : r ? (r.p(e, i), _e(r, 1)) : ((r = aa(i)).c(), _e(r, 1), r.m(t.parentNode, t)), i.isMobile && i.dropDownStates.contextSwitcherPopover && i.renderAsDropdown ? o ? (o.p(e, i), _e(o, 1)) : ((o = ua(i)).c(), _e(o, 1), o.m(n.parentNode, n)) : o && (Se(), Ce(o, 1, 1, function () {
          o = null;
        }), ye());
      },
      i: function i(e) {
        _i50 || (_e(r), _e(o), _i50 = !0);
      },
      o: function (_o19) {
        function o(_x60) {
          return _o19.apply(this, arguments);
        }

        o.toString = function () {
          return _o19.toString();
        };

        return o;
      }(function (e) {
        Ce(r), Ce(o), _i50 = !1;
      }),
      d: function d(e) {
        r && r.d(e), e && N(t), o && o.d(e), e && N(n);
      }
    };
  }

  function aa(e) {
    var t, n, i, r, o, a, s, _c32, d, u, _p15, f;

    function g(e, t) {
      return t.selectedOption && t.customSelectedOptionRenderer ? la : sa;
    }

    var h = g(0, e),
        _m9 = h(e),
        v = new ra({
      props: {
        actions: e.actions,
        config: e.config,
        customOptionsRenderer: e.customOptionsRenderer,
        options: e.options,
        selectedLabel: e.selectedLabel,
        selectedOption: e.selectedOption,
        getNodeName: ha,
        getRouteLink: e.getRouteLink,
        getTestId: ma,
        getTranslation: e.getTranslation,
        isMobile: e.isMobile
      }
    });

    return v.$on("onActionClick", e.onActionClick), v.$on("goToOption", e.goToOption), {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("button"), _m9.c(), _c32 = L(), d = P("div"), v.$$.fragment.c(), V(r, "class", "fd-button fd-button--transparent fd-button--menu fd-shellbar__button--menu lui-ctx-switch-menu svelte-aes46x"), V(r, "aria-expanded", o = e.dropDownStates.contextSwitcherPopover || !1), V(r, "aria-haspopup", "true"), V(r, "title", a = e.selectedLabel ? e.selectedLabel : e.config.defaultLabel), V(r, "aria-disabled", s = !e.renderAsDropdown), V(r, "data-testid", "luigi-contextswitcher-button"), V(i, "class", "fd-popover__control"), V(d, "class", "fd-popover__body fd-popover__body--right svelte-aes46x"), V(d, "aria-hidden", u = !e.dropDownStates.contextSwitcherPopover), V(d, "id", "contextSwitcherPopover"), V(d, "data-testid", "luigi-contextswitcher-popover"), V(n, "class", "fd-popover fd-popover--right svelte-aes46x"), V(t, "class", "fd-shellbar__action fd-shellbar__action--desktop"), f = [A(r, "click", e.click_handler), A(i, "click", O(va))];
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), _m9.m(r, null), I(n, _c32), I(n, d), Ee(v, d, null), _p15 = !0;
      },
      p: function p(e, t) {
        h === (h = g(0, t)) && _m9 ? _m9.p(e, t) : (_m9.d(1), (_m9 = h(t)) && (_m9.c(), _m9.m(r, null))), _p15 && !e.dropDownStates || o === (o = t.dropDownStates.contextSwitcherPopover || !1) || V(r, "aria-expanded", o), _p15 && !e.selectedLabel && !e.config || a === (a = t.selectedLabel ? t.selectedLabel : t.config.defaultLabel) || V(r, "title", a), _p15 && !e.renderAsDropdown || s === (s = !t.renderAsDropdown) || V(r, "aria-disabled", s);
        var n = {};
        e.actions && (n.actions = t.actions), e.config && (n.config = t.config), e.customOptionsRenderer && (n.customOptionsRenderer = t.customOptionsRenderer), e.options && (n.options = t.options), e.selectedLabel && (n.selectedLabel = t.selectedLabel), e.selectedOption && (n.selectedOption = t.selectedOption), e.isMobile && (n.isMobile = t.isMobile), v.$set(n), _p15 && !e.dropDownStates || u === (u = !t.dropDownStates.contextSwitcherPopover) || V(d, "aria-hidden", u);
      },
      i: function i(e) {
        _p15 || (_e(v.$$.fragment, e), _p15 = !0);
      },
      o: function o(e) {
        Ce(v.$$.fragment, e), _p15 = !1;
      },
      d: function d(e) {
        e && N(t), _m9.d(), Le(v), l(f);
      }
    };
  }

  function sa(e) {
    var t, n;

    function i(e, t) {
      return t.selectedLabel ? ca : da;
    }

    var r = i(0, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), t = L(), V(n = P("i"), "class", "sap-icon--megamenu fd-shellbar__button--icon");
      },
      m: function m(e, i) {
        o.m(e, i), T(e, t, i), T(e, n, i);
      },
      p: function p(e, n) {
        r === (r = i(0, n)) && o ? o.p(e, n) : (o.d(1), (o = r(n)) && (o.c(), o.m(t.parentNode, t)));
      },
      d: function d(e) {
        o.d(e), e && (N(t), N(n));
      }
    };
  }

  function la(e) {
    var t,
        n = e.customSelectedOptionRenderer(e.selectedOption) + "";
    return {
      c: function c() {
        t = new B(n, null);
      },
      m: function m(e, n) {
        t.m(e, n);
      },
      p: function p(e, i) {
        (e.customSelectedOptionRenderer || e.selectedOption) && n !== (n = i.customSelectedOptionRenderer(i.selectedOption) + "") && t.p(n);
      },
      d: function d(e) {
        e && t.d();
      }
    };
  }

  function ca(e) {
    var t;
    return {
      c: function c() {
        t = E(e.selectedLabel);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, n) {
        e.selectedLabel && M(t, n.selectedLabel);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function da(e) {
    var t,
        n = e.$getTranslation(e.config.defaultLabel) + "";
    return {
      c: function c() {
        t = E(n);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        (e.$getTranslation || e.config) && n !== (n = i.$getTranslation(i.config.defaultLabel) + "") && M(t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ua(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c33,
        d,
        u,
        p,
        f,
        g,
        h,
        _m10,
        v,
        b = !e.selectedLabel && pa(e),
        w = e.selectedLabel && fa(e),
        S = new ra({
      props: {
        actions: e.actions,
        config: e.config,
        customOptionsRenderer: e.customOptionsRenderer,
        options: e.options,
        selectedLabel: e.selectedLabel,
        selectedOption: e.selectedOption,
        getNodeName: ha,
        getRouteLink: e.getRouteLink,
        getTestId: ma,
        getTranslation: e.getTranslation,
        isMobile: e.isMobile
      }
    });

    return S.$on("onActionClick", e.onActionClick), S.$on("goToOption", e.goToOption), {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("div"), a = P("h3"), b && b.c(), s = L(), w && w.c(), _c33 = L(), d = P("div"), S.$$.fragment.c(), u = L(), p = P("footer"), f = P("div"), g = P("div"), (h = P("button")).textContent = "Cancel", V(a, "class", "fd-dialog__title"), V(o, "class", "fd-bar__element"), V(r, "class", "fd-bar__left"), V(i, "class", "fd-dialog__header fd-bar fd-bar--header"), V(d, "class", "fd-dialog__body fd-dialog__body--no-vertical-padding"), V(h, "class", "fd-button fd-button--light fd-dialog__decisive-button"), V(h, "data-testid", "mobile-topnav-close"), V(g, "class", "fd-bar__element"), V(f, "class", "fd-bar__right"), V(p, "class", "fd-dialog__footer fd-bar fd-bar--cosy fd-bar--footer"), V(n, "class", "fd-dialog__content fd-dialog__content--mobile"), V(t, "class", "fd-dialog fd-dialog--active"), v = [A(h, "click", e.toggleDropdownState), A(t, "click", O(ba))];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), b && b.m(a, null), I(a, s), w && w.m(a, null), I(n, _c33), I(n, d), Ee(S, d, null), I(n, u), I(n, p), I(p, f), I(f, g), I(g, h), _m10 = !0;
      },
      p: function p(e, t) {
        t.selectedLabel ? b && (b.d(1), b = null) : b ? b.p(e, t) : ((b = pa(t)).c(), b.m(a, s)), t.selectedLabel ? w ? w.p(e, t) : ((w = fa(t)).c(), w.m(a, null)) : w && (w.d(1), w = null);
        var n = {};
        e.actions && (n.actions = t.actions), e.config && (n.config = t.config), e.customOptionsRenderer && (n.customOptionsRenderer = t.customOptionsRenderer), e.options && (n.options = t.options), e.selectedLabel && (n.selectedLabel = t.selectedLabel), e.selectedOption && (n.selectedOption = t.selectedOption), e.isMobile && (n.isMobile = t.isMobile), S.$set(n);
      },
      i: function i(e) {
        _m10 || (_e(S.$$.fragment, e), _m10 = !0);
      },
      o: function o(e) {
        Ce(S.$$.fragment, e), _m10 = !1;
      },
      d: function d(e) {
        e && N(t), b && b.d(), w && w.d(), Le(S), l(v);
      }
    };
  }

  function pa(e) {
    var t,
        n = e.$getTranslation(e.config.defaultLabel) + "";
    return {
      c: function c() {
        t = E(n);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        (e.$getTranslation || e.config) && n !== (n = i.$getTranslation(i.config.defaultLabel) + "") && M(t, n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function fa(e) {
    var t;
    return {
      c: function c() {
        t = E(e.selectedLabel);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, n) {
        e.selectedLabel && M(t, n.selectedLabel);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ga(e) {
    var t,
        n,
        _i51 = e.contextSwitcherEnabled && oa(e);

    return {
      c: function c() {
        _i51 && _i51.c(), t = R();
      },
      m: function m(e, r) {
        _i51 && _i51.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.contextSwitcherEnabled ? _i51 ? (_i51.p(e, n), _e(_i51, 1)) : ((_i51 = oa(n)).c(), _e(_i51, 1), _i51.m(t.parentNode, t)) : _i51 && (Se(), Ce(_i51, 1, 1, function () {
          _i51 = null;
        }), ye());
      },
      i: function i(e) {
        n || (_e(_i51), n = !0);
      },
      o: function o(e) {
        Ce(_i51), n = !1;
      },
      d: function d(e) {
        _i51 && _i51.d(e), e && N(t);
      }
    };
  }

  function ha(e, t, n) {
    return e ? Promise.resolve(e) : Do.getFallbackLabel(t, n);
  }

  function ma(e) {
    return e.testId ? e.testId : At.prepareForTests(e.pathSegment, e.label);
  }

  var va = function va() {},
      ba = function ba() {};

  function wa(e, t, n) {
    var i;
    var r = ee();

    var o,
        _t$contextSwitcherEna = t.contextSwitcherEnabled,
        a = _t$contextSwitcherEna === void 0 ? !1 : _t$contextSwitcherEna,
        _t$dropDownStates2 = t.dropDownStates,
        s = _t$dropDownStates2 === void 0 ? {} : _t$dropDownStates2,
        _t$selectedLabel = t.selectedLabel,
        l = _t$selectedLabel === void 0 ? null : _t$selectedLabel,
        _t$config2 = t.config,
        c = _t$config2 === void 0 ? {} : _t$config2,
        _t$actions2 = t.actions,
        d = _t$actions2 === void 0 ? [] : _t$actions2,
        _t$options2 = t.options,
        u = _t$options2 === void 0 ? null : _t$options2,
        p = !0,
        g = t.selectedOption,
        _t$fallbackLabelResol = t.fallbackLabelResolver,
        h = _t$fallbackLabelResol === void 0 ? null : _t$fallbackLabelResol,
        m = t.pathParams,
        v = t.customOptionsRenderer,
        b = t.customSelectedOptionRenderer,
        w = t.isMobile,
        _t$contextSwitcherTog = t.contextSwitcherToggle,
        S = _t$contextSwitcherTog === void 0 ? !1 : _t$contextSwitcherTog,
        y = t.defaultLabel,
        _ = ne("getUnsavedChangesModalPromise"),
        C = ne("store"),
        x = ne("getTranslation");

    f(e, x, function (e) {
      n("$getTranslation", i = e);
    });
    var k = !1;

    function I() {
      return _I2.apply(this, arguments);
    }

    function _I2() {
      _I2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
        var e, t, i, r;
        return regeneratorRuntime.wrap(function _callee54$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.t0 = n;
                _context55.next = 3;
                return Do.fetchOptions(u);

              case 3:
                _context55.t1 = u = _context55.sent;
                (0, _context55.t0)("options", _context55.t1);
                e = c || {}, t = e.parentNodePath, i = e.fallbackLabelResolver, r = xt.getCurrentPath();
                _context55.t2 = n;
                _context55.next = 9;
                return Do.getSelectedOption(r, u, t);

              case 9:
                _context55.t3 = g = _context55.sent;
                (0, _context55.t2)("selectedOption", _context55.t3);
                _context55.t4 = n;
                _context55.next = 14;
                return Do.getSelectedLabel(r, u, t, i);

              case 14:
                _context55.t5 = l = _context55.sent;
                (0, _context55.t4)("selectedLabel", _context55.t5);
                o = e.preserveSubPathOnSwitch;

              case 17:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee54);
      }));
      return _I2.apply(this, arguments);
    }

    function T(_x61) {
      return _T.apply(this, arguments);
    }

    function _T() {
      _T = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55(e) {
        var t, i, r;
        return regeneratorRuntime.wrap(function _callee55$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                t = c || {}, i = t.parentNodePath, r = t.fallbackLabelResolver;
                _context56.t0 = n;
                _context56.next = 4;
                return Do.getSelectedOption(e, u, i);

              case 4:
                _context56.t1 = g = _context56.sent;
                (0, _context56.t0)("selectedOption", _context56.t1);
                _context56.t2 = n;
                _context56.next = 9;
                return Do.getSelectedLabel(e, u, i, r);

              case 9:
                _context56.t3 = l = _context56.sent;
                (0, _context56.t2)("selectedLabel", _context56.t3);

              case 11:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee55);
      }));
      return _T.apply(this, arguments);
    }

    function N(e) {
      _().then(function () {
        xt.navigateTo(e);
      });
    }

    function $() {
      r("toggleDropdownState");
      var e = s || {};
      JSON.parse(e.contextSwitcherPopover) && I();
    }

    Q( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
      return regeneratorRuntime.wrap(function _callee52$(_context53) {
        while (1) {
          switch (_context53.prev = _context53.next) {
            case 0:
              Ot.doOnStoreChange(C, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
                var e, _t70;

                return regeneratorRuntime.wrap(function _callee51$(_context52) {
                  while (1) {
                    switch (_context52.prev = _context52.next) {
                      case 0:
                        e = rt.getConfigValue("navigation.contextSwitcher");

                        if (!(n("contextSwitcherEnabled", a = !!e), a && (n("customOptionsRenderer", v = Lt.isFunction(e.customOptionsRenderer) ? e.customOptionsRenderer : void 0), n("customSelectedOptionRenderer", b = Lt.isFunction(e.customSelectedOptionRenderer) ? e.customSelectedOptionRenderer : void 0), n("config", c = e), n("options", u = void 0), e))) {
                          _context52.next = 19;
                          break;
                        }

                        n("alwaysShowDropdown", p = !1 !== e.alwaysShowDropdown);
                        _context52.t0 = n;
                        _context52.next = 6;
                        return rt.getConfigValueAsync("navigation.contextSwitcher.actions");

                      case 6:
                        _context52.t1 = d = _context52.sent;
                        (0, _context52.t0)("actions", _context52.t1);
                        _t70 = xt.getCurrentPath();
                        n("fallbackLabelResolver", h = e.fallbackLabelResolver);
                        Do.resetFallbackLabelCache();
                        _context52.t2 = e.lazyloadOptions;

                        if (_context52.t2) {
                          _context52.next = 15;
                          break;
                        }

                        _context52.next = 15;
                        return I();

                      case 15:
                        _context52.t3 = Do.isContextSwitcherDetailsView(_t70, e.parentNodePath);

                        if (!_context52.t3) {
                          _context52.next = 19;
                          break;
                        }

                        _context52.next = 19;
                        return T(_t70);

                      case 19:
                      case "end":
                        return _context52.stop();
                    }
                  }
                }, _callee51);
              })), ["navigation.contextSwitcher"]), Dt.addRouteChangeListener(function (e) {
                return T(e);
              }), Vt.addEventListener("message", function (e) {
                Rt.getValidMessageSource(e) && e.data && "luigi.refresh-context-switcher" === e.data.msg && (n("options", u = null), I());
              }), n("defaultLabel", y = c.defaultLabel);

            case 1:
            case "end":
              return _context53.stop();
          }
        }
      }, _callee52);
    }))), Y(function () {
      k !== S && (k = S, I());
    });
    var P;
    return e.$set = function (e) {
      "contextSwitcherEnabled" in e && n("contextSwitcherEnabled", a = e.contextSwitcherEnabled), "dropDownStates" in e && n("dropDownStates", s = e.dropDownStates), "selectedLabel" in e && n("selectedLabel", l = e.selectedLabel), "config" in e && n("config", c = e.config), "actions" in e && n("actions", d = e.actions), "options" in e && n("options", u = e.options), "selectedOption" in e && n("selectedOption", g = e.selectedOption), "fallbackLabelResolver" in e && n("fallbackLabelResolver", h = e.fallbackLabelResolver), "pathParams" in e && n("pathParams", m = e.pathParams), "customOptionsRenderer" in e && n("customOptionsRenderer", v = e.customOptionsRenderer), "customSelectedOptionRenderer" in e && n("customSelectedOptionRenderer", b = e.customSelectedOptionRenderer), "isMobile" in e && n("isMobile", w = e.isMobile), "contextSwitcherToggle" in e && n("contextSwitcherToggle", S = e.contextSwitcherToggle), "defaultLabel" in e && n("defaultLabel", y = e.defaultLabel);
    }, e.$$.update = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        alwaysShowDropdown: 1,
        actions: 1,
        options: 1,
        selectedOption: 1
      };
      (e.alwaysShowDropdown || e.actions || e.options || e.selectedOption) && n("renderAsDropdown", P = p || d && d.length > 0 || u && u.length > 1 || !g);
    }, {
      contextSwitcherEnabled: a,
      dropDownStates: s,
      selectedLabel: l,
      config: c,
      actions: d,
      options: u,
      selectedOption: g,
      fallbackLabelResolver: h,
      pathParams: m,
      customOptionsRenderer: v,
      customSelectedOptionRenderer: b,
      isMobile: w,
      contextSwitcherToggle: S,
      defaultLabel: y,
      getTranslation: x,
      getRouteLink: function getRouteLink(e) {
        return Dt.getNodeHref(e, m);
      },
      fetchOptions: I,
      setSelectedContext: T,
      onActionClick: function () {
        var _onActionClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee53(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee53$(_context54) {
            while (1) {
              switch (_context54.prev = _context54.next) {
                case 0:
                  t = e.detail.node;

                  if (!t.clickHandler) {
                    _context54.next = 6;
                    break;
                  }

                  _context54.next = 4;
                  return t.clickHandler(t);

                case 4:
                  if (_context54.sent) {
                    _context54.next = 6;
                    break;
                  }

                  return _context54.abrupt("return");

                case 6:
                  setTimeout(function () {
                    N(t.link);
                  }), w && r("toggleDropdownState");

                case 7:
                case "end":
                  return _context54.stop();
              }
            }
          }, _callee53);
        }));

        function onActionClick(_x62) {
          return _onActionClick.apply(this, arguments);
        }

        return onActionClick;
      }(),
      goToPath: N,
      goToOption: function goToOption(e) {
        var t = e.detail.option,
            n = e.detail.selectedOption;

        _().then(function () {
          o && n ? xt.navigateTo(Do.getNodePathFromCurrentPath(t, n)) : xt.navigateTo(t.link), w && r("toggleDropdownState");
        });
      },
      toggleDropdownState: $,
      renderAsDropdown: P,
      $getTranslation: i,
      click_handler: function click_handler() {
        P && $();
      }
    };
  }

  var Sa = /*#__PURE__*/function (_Ae15) {
    _inherits(Sa, _Ae15);

    var _super19 = _createSuper(Sa);

    function Sa(e) {
      var _this52;

      _classCallCheck(this, Sa);

      _this52 = _super19.call(this), Re(_assertThisInitialized(_this52), e, wa, ga, d, ["contextSwitcherEnabled", "dropDownStates", "selectedLabel", "config", "actions", "options", "selectedOption", "fallbackLabelResolver", "pathParams", "customOptionsRenderer", "customSelectedOptionRenderer", "isMobile", "contextSwitcherToggle", "defaultLabel", "fetchOptions", "setSelectedContext", "onActionClick", "goToPath", "goToOption", "toggleDropdownState"]);
      return _this52;
    }

    _createClass(Sa, [{
      key: "fetchOptions",
      get: function get() {
        return this.$$.ctx.fetchOptions;
      }
    }, {
      key: "setSelectedContext",
      get: function get() {
        return this.$$.ctx.setSelectedContext;
      }
    }, {
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }, {
      key: "goToPath",
      get: function get() {
        return this.$$.ctx.goToPath;
      }
    }, {
      key: "goToOption",
      get: function get() {
        return this.$$.ctx.goToOption;
      }
    }, {
      key: "toggleDropdownState",
      get: function get() {
        return this.$$.ctx.toggleDropdownState;
      }
    }]);

    return Sa;
  }(Ae);

  n(412);
  var ya = Ne.window;

  function _a(e, t, n) {
    var i = Object.create(e);
    return i.productSwitcherItem = t[n], i;
  }

  function Ca(e) {
    var t,
        n,
        _i52,
        r = !e.isMobile && xa(e),
        o = e.isMobile && e.dropDownStates.productSwitcherPopover && La(e);

    return {
      c: function c() {
        r && r.c(), t = L(), o && o.c(), n = R();
      },
      m: function m(e, a) {
        r && r.m(e, a), T(e, t, a), o && o.m(e, a), T(e, n, a), _i52 = !0;
      },
      p: function p(e, i) {
        i.isMobile ? r && (r.d(1), r = null) : r ? r.p(e, i) : ((r = xa(i)).c(), r.m(t.parentNode, t)), i.isMobile && i.dropDownStates.productSwitcherPopover ? o ? (o.p(e, i), _e(o, 1)) : ((o = La(i)).c(), _e(o, 1), o.m(n.parentNode, n)) : o && (Se(), Ce(o, 1, 1, function () {
          o = null;
        }), ye());
      },
      i: function i(e) {
        _i52 || (_e(o), _i52 = !0);
      },
      o: function (_o20) {
        function o(_x63) {
          return _o20.apply(this, arguments);
        }

        o.toString = function () {
          return _o20.toString();
        };

        return o;
      }(function (e) {
        Ce(o), _i52 = !1;
      }),
      d: function d(e) {
        r && r.d(e), e && N(t), o && o.d(e), e && N(n);
      }
    };
  }

  function xa(e) {
    var t, n, i, r, o, a, s, _c34, d, u, p, f, g, h, m, b, w;

    function S(e, t) {
      return (null == s || e.config) && (s = !!Da(t.config)), s ? Ia : ka;
    }

    var y = S(null, e),
        _ = y(e);

    var C = e.productSwitcherItems,
        x = [];

    for (var _t71 = 0; _t71 < C.length; _t71 += 1) {
      x[_t71] = Ea(_a(e, C, _t71));
    }

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("button"), a = P("div"), _.c(), p = L(), f = P("div"), g = P("div"), h = P("ul");

        for (var _e86 = 0; _e86 < x.length; _e86 += 1) {
          x[_e86].c();
        }

        V(a, "class", "lui-product-switch__icon svelte-1kbwpcm"), V(o, "class", "fd-button fd-button--transparent fd-product-switch__control"), V(o, "aria-expanded", _c34 = e.dropDownStates.productSwitcherPopover || !1), V(o, "aria-haspopup", "true"), V(o, "title", d = e.config.label), V(o, "data-testid", u = Ma(e.config)), V(r, "class", "fd-popover__control"), V(h, "class", "fd-product-switch__list"), V(g, "class", m = v(e.columnsClass) + " svelte-1kbwpcm"), V(f, "class", "fd-popover__body fd-popover__body--right"), V(f, "aria-hidden", b = !e.dropDownStates.productSwitcherPopover), V(f, "id", "productSwitcherPopover"), V(i, "class", "fd-popover fd-popover--right"), V(n, "class", "fd-product-switch"), V(t, "class", "fd-shellbar__action fd-shellbar__action--desktop"), w = [A(o, "click", O(e.toggleDropdownState)), A(r, "click", O(Fa))];
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), _.m(a, null), I(i, p), I(i, f), I(f, g), I(g, h);

        for (var _e87 = 0; _e87 < x.length; _e87 += 1) {
          x[_e87].m(h, null);
        }
      },
      p: function p(e, t) {
        if (y === (y = S(e, t)) && _ ? _.p(e, t) : (_.d(1), (_ = y(t)) && (_.c(), _.m(a, null))), e.dropDownStates && _c34 !== (_c34 = t.dropDownStates.productSwitcherPopover || !1) && V(o, "aria-expanded", _c34), e.config && d !== (d = t.config.label) && V(o, "title", d), e.config && u !== (u = Ma(t.config)) && V(o, "data-testid", u), e.productSwitcherItems || e.getTestId || e.getNodeSubtitle || e.getNodeLabel || e.hasOpenUIicon) {
          var _n44;

          for (C = t.productSwitcherItems, _n44 = 0; _n44 < C.length; _n44 += 1) {
            var _i53 = _a(t, C, _n44);

            x[_n44] ? x[_n44].p(e, _i53) : (x[_n44] = Ea(_i53), x[_n44].c(), x[_n44].m(h, null));
          }

          for (; _n44 < x.length; _n44 += 1) {
            x[_n44].d(1);
          }

          x.length = C.length;
        }

        e.columnsClass && m !== (m = v(t.columnsClass) + " svelte-1kbwpcm") && V(g, "class", m), e.dropDownStates && b !== (b = !t.dropDownStates.productSwitcherPopover) && V(f, "aria-hidden", b);
      },
      d: function d(e) {
        e && N(t), _.d(), $(x, e), l(w);
      }
    };
  }

  function ka(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "src", n = e.config.icon), V(t, "alt", i = e.config.altText ? e.config.altText : ""), V(t, "class", "svelte-1kbwpcm");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.config && n !== (n = r.config.icon) && V(t, "src", n), e.config && i !== (i = r.config.altText ? r.config.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ia(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "sap-icon sap-icon--" + e.config.icon + " svelte-1kbwpcm");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.config && n !== (n = "sap-icon sap-icon--" + i.config.icon + " svelte-1kbwpcm") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ta(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c35,
        d,
        u,
        p,
        f = Oa(e.productSwitcherItem) + "",
        g = Va(e.productSwitcherItem);

    function h(e, t) {
      return (null == i || e.productSwitcherItems) && (i = !!Da(t.productSwitcherItem)), i ? $a : Na;
    }

    var m = h(null, e),
        v = m(e),
        b = g && Pa(e);

    function w() {
      return e.click_handler_1(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("div"), v.c(), r = L(), o = P("div"), a = P("div"), s = E(f), l = L(), b && b.c(), _c35 = L(), V(n, "class", "lui-product-switch__icon svelte-1kbwpcm"), V(a, "class", "fd-product-switch__title"), V(o, "class", "fd-product-switch__text"), V(t, "class", d = "fd-product-switch__item " + (e.productSwitcherItem.selected ? "selected" : "") + " svelte-1kbwpcm"), V(t, "data-testid", u = Ma(e.productSwitcherItem)), p = A(t, "click", w);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n), v.m(n, null), I(t, r), I(t, o), I(o, a), I(a, s), I(o, l), b && b.m(o, null), I(t, _c35);
      },
      p: function p(i, r) {
        m === (m = h(i, e = r)) && v ? v.p(i, e) : (v.d(1), (v = m(e)) && (v.c(), v.m(n, null))), i.productSwitcherItems && f !== (f = Oa(e.productSwitcherItem) + "") && M(s, f), i.productSwitcherItems && (g = Va(e.productSwitcherItem)), g ? b ? b.p(i, e) : ((b = Pa(e)).c(), b.m(o, null)) : b && (b.d(1), b = null), i.productSwitcherItems && d !== (d = "fd-product-switch__item " + (e.productSwitcherItem.selected ? "selected" : "") + " svelte-1kbwpcm") && V(t, "class", d), i.productSwitcherItems && u !== (u = Ma(e.productSwitcherItem)) && V(t, "data-testid", u);
      },
      d: function d(e) {
        e && N(t), v.d(), b && b.d(), p();
      }
    };
  }

  function Na(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "src", n = e.productSwitcherItem.icon), V(t, "alt", i = e.productSwitcherItem.altText ? e.productSwitcherItem.altText : ""), V(t, "class", "svelte-1kbwpcm");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.productSwitcherItems && n !== (n = r.productSwitcherItem.icon) && V(t, "src", n), e.productSwitcherItems && i !== (i = r.productSwitcherItem.altText ? r.productSwitcherItem.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function $a(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "sap-icon " + (e.productSwitcherItem.icon && Da(e.productSwitcherItem) ? "sap-icon--" + e.productSwitcherItem.icon : "") + " svelte-1kbwpcm");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.productSwitcherItems && n !== (n = "sap-icon " + (i.productSwitcherItem.icon && Da(i.productSwitcherItem) ? "sap-icon--" + i.productSwitcherItem.icon : "") + " svelte-1kbwpcm") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Pa(e) {
    var t,
        n,
        i = Va(e.productSwitcherItem) + "";
    return {
      c: function c() {
        t = P("div"), n = E(i), V(t, "class", "fd-product-switch__subtitle");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.productSwitcherItems && i !== (i = Va(t.productSwitcherItem) + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ea(e) {
    var t,
        n = e.productSwitcherItem.label && Ta(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.productSwitcherItem.label ? n ? n.p(e, i) : ((n = Ta(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function La(e) {
    var t,
        n = new wo({
      props: {
        nodes: e.productSwitcherItems,
        label: e.config.label,
        hasOpenUIicon: Da,
        getNodeLabel: Oa,
        getNodeSubtitle: Va,
        getTestId: Ma
      }
    });
    return n.$on("click", e.toggleDropdownState), n.$on("listClick", e.onActionClickExternal), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.productSwitcherItems && (i.nodes = t.productSwitcherItems), e.config && (i.label = t.config.label), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Ra(e) {
    var t,
        n,
        i,
        r = e.productSwitcherItems && e.productSwitcherItems.length && Object.keys(e.productSwitcherItems[0]).length,
        o = r && Ca(e);
    return {
      c: function c() {
        o && o.c(), t = R(), i = A(ya, "resize", Aa);
      },
      m: function m(e, i) {
        o && o.m(e, i), T(e, t, i), n = !0;
      },
      p: function p(e, n) {
        e.productSwitcherItems && (r = n.productSwitcherItems && n.productSwitcherItems.length && Object.keys(n.productSwitcherItems[0]).length), r ? o ? (o.p(e, n), _e(o, 1)) : ((o = Ca(n)).c(), _e(o, 1), o.m(t.parentNode, t)) : o && (Se(), Ce(o, 1, 1, function () {
          o = null;
        }), ye());
      },
      i: function i(e) {
        n || (_e(o), n = !0);
      },
      o: function (_o21) {
        function o(_x64) {
          return _o21.apply(this, arguments);
        }

        o.toString = function () {
          return _o21.toString();
        };

        return o;
      }(function (e) {
        Ce(o), n = !1;
      }),
      d: function d(e) {
        o && o.d(e), e && N(t), i();
      }
    };
  }

  function Aa() {
    var e = .01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", "".concat(e, "px"));
  }

  function Da(e) {
    return At.isOpenUIiconName(e.icon);
  }

  function Oa(e) {
    return st.getTranslation(e.label);
  }

  function Va(e) {
    return st.getTranslation(e.subTitle);
  }

  function Ma(e) {
    return e.testId ? e.testId : At.prepareForTests(e.label);
  }

  var Fa = function Fa() {};

  function Ua(e, t, n) {
    var i = ee();
    var r,
        o = t.productSwitcherItems,
        a = t.isMobile,
        s = t.config,
        l = t.dropDownStates,
        c = ne("store"),
        d = ne("getUnsavedChangesModalPromise");

    function u(e) {
      d().then(function () {
        xt.navigateToLink(e);
      }), p();
    }

    function p() {
      i("toggleDropdownState");
    }

    Q( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
      return regeneratorRuntime.wrap(function _callee57$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              Ot.doOnStoreChange(c, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
                return regeneratorRuntime.wrap(function _callee56$(_context57) {
                  while (1) {
                    switch (_context57.prev = _context57.next) {
                      case 0:
                        n("config", s = At.getProductSwitcherConfig());
                        _context57.t0 = s;

                        if (!_context57.t0) {
                          _context57.next = 9;
                          break;
                        }

                        _context57.t1 = n;
                        _context57.next = 6;
                        return rt.getConfigValueAsync("navigation.productSwitcher.items");

                      case 6:
                        _context57.t2 = o = _context57.sent;
                        (0, _context57.t1)("productSwitcherItems", _context57.t2);
                        3 === At.getProductSwitcherColumnsNumber() ? n("columnsClass", r = "fd-product-switch__body fd-product-switch__body--col-3") : n("columnsClass", r = "fd-product-switch__body");

                      case 9:
                        Aa();

                      case 10:
                      case "end":
                        return _context57.stop();
                    }
                  }
                }, _callee56);
              })), ["navigation.productSwitcher"]);

            case 1:
            case "end":
              return _context58.stop();
          }
        }
      }, _callee57);
    })));
    return e.$set = function (e) {
      "productSwitcherItems" in e && n("productSwitcherItems", o = e.productSwitcherItems), "isMobile" in e && n("isMobile", a = e.isMobile), "config" in e && n("config", s = e.config), "dropDownStates" in e && n("dropDownStates", l = e.dropDownStates);
    }, {
      productSwitcherItems: o,
      isMobile: a,
      config: s,
      dropDownStates: l,
      columnsClass: r,
      onActionClick: u,
      onActionClickExternal: function onActionClickExternal(e) {
        u(e.detail);
      },
      toggleDropdownState: p,
      click_handler_1: function click_handler_1(_ref62) {
        var e = _ref62.productSwitcherItem;
        return u(e);
      }
    };
  }

  var ja = /*#__PURE__*/function (_Ae16) {
    _inherits(ja, _Ae16);

    var _super20 = _createSuper(ja);

    function ja(e) {
      var _this53;

      _classCallCheck(this, ja);

      _this53 = _super20.call(this), Re(_assertThisInitialized(_this53), e, Ua, Ra, d, ["productSwitcherItems", "isMobile", "config", "dropDownStates", "onActionClick", "onActionClickExternal", "toggleDropdownState", "setViewportHeightVariable"]);
      return _this53;
    }

    _createClass(ja, [{
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }, {
      key: "onActionClickExternal",
      get: function get() {
        return this.$$.ctx.onActionClickExternal;
      }
    }, {
      key: "toggleDropdownState",
      get: function get() {
        return this.$$.ctx.toggleDropdownState;
      }
    }, {
      key: "setViewportHeightVariable",
      get: function get() {
        return Aa;
      }
    }]);

    return ja;
  }(Ae);

  n(413);

  function Ba(e, t, n) {
    var i = Object.create(e);
    return i.result = t[n], i.index = n, i;
  }

  function Ga(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("input"), "type", "text"), V(t, "class", "fd-input fd-input-group__input fd-shellbar__input-group__input luigi-search__input svelte-1i1w6fs"), V(t, "data-testid", "luigi-search-input"), t.autofocus = !0, n = A(t, "keyup", e.keyup_handler);
      },
      m: function m(n, i) {
        T(n, t, i), e.input_binding(t), t.focus();
      },
      p: i,
      d: function d(i) {
        i && N(t), e.input_binding(null), n();
      }
    };
  }

  function za(e) {
    var t;
    return {
      c: function c() {
        V(t = P("input"), "type", "text"), V(t, "class", "fd-input fd-input-group__input fd-shellbar__input-group__input luigi-search__input svelte-1i1w6fs"), V(t, "data-testid", "luigi-search-input__no-handlers"), t.autofocus = !0;
      },
      m: function m(e, n) {
        T(e, t, n), t.focus();
      },
      p: i,
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Wa(e) {
    var t;
    return {
      c: function c() {
        t = P("div");
      },
      m: function m(n, i) {
        T(n, t, i), e.div_binding(t);
      },
      p: i,
      d: function d(n) {
        n && N(t), e.div_binding(null);
      }
    };
  }

  function Ha(e) {
    var t,
        n,
        i,
        r = e.searchResult && qa(e);
    return {
      c: function c() {
        t = P("div"), n = P("nav"), r && r.c(), V(n, "class", "fd-menu svelte-1i1w6fs"), V(t, "class", "fd-popover__body fd-popover__body--right luigi-search-popover__body svelte-1i1w6fs"), V(t, "aria-hidden", i = !e.displaySearchResult);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n), r && r.m(n, null);
      },
      p: function p(e, o) {
        o.searchResult ? r ? r.p(e, o) : ((r = qa(o)).c(), r.m(n, null)) : r && (r.d(1), r = null), e.displaySearchResult && i !== (i = !o.displaySearchResult) && V(t, "aria-hidden", i);
      },
      d: function d(e) {
        e && N(t), r && r.d();
      }
    };
  }

  function qa(e) {
    var t;
    var n = e.searchResult,
        i = [];

    for (var _t72 = 0; _t72 < n.length; _t72 += 1) {
      i[_t72] = Ya(Ba(e, n, _t72));
    }

    return {
      c: function c() {
        t = P("ul");

        for (var _e88 = 0; _e88 < i.length; _e88 += 1) {
          i[_e88].c();
        }

        V(t, "class", "fd-menu__list fd-menu__list--top");
      },
      m: function m(n, r) {
        T(n, t, r);

        for (var _e89 = 0; _e89 < i.length; _e89 += 1) {
          i[_e89].m(t, null);
        }

        e.ul_binding(t);
      },
      p: function p(e, r) {
        if (e.isCustomSearchResultItemRenderer || e.searchResult || e.renderCustomSearchItem || e.luigiCustomSearchItemRenderer__slotContainer) {
          var _o22;

          for (n = r.searchResult, _o22 = 0; _o22 < n.length; _o22 += 1) {
            var _a25 = Ba(r, n, _o22);

            i[_o22] ? i[_o22].p(e, _a25) : (i[_o22] = Ya(_a25), i[_o22].c(), i[_o22].m(t, null));
          }

          for (; _o22 < i.length; _o22 += 1) {
            i[_o22].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(n) {
        n && N(t), $(i, n), e.ul_binding(null);
      }
    };
  }

  function Ka(e) {
    var t,
        n = e.renderCustomSearchItem(e.result, e.luigiCustomSearchItemRenderer__slotContainer, e.index) + "";
    return {
      c: function c() {
        t = new B(n, null);
      },
      m: function m(e, n) {
        t.m(e, n);
      },
      p: function p(e, i) {
        (e.searchResult || e.luigiCustomSearchItemRenderer__slotContainer) && n !== (n = i.renderCustomSearchItem(i.result, i.luigiCustomSearchItemRenderer__slotContainer, i.index) + "") && t.p(n);
      },
      d: function d(e) {
        e && t.d();
      }
    };
  }

  function Ja(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c36 = e.result.label + "",
        d = e.result.description + "";

    return {
      c: function c() {
        t = P("a"), n = P("div"), i = P("div"), r = E(_c36), o = L(), a = P("div"), s = E(d), V(i, "class", "fd-product-switch__title svelte-1i1w6fs"), V(a, "class", "fd-product-switch__subtitle"), V(n, "class", "fd-product-switch__text"), V(t, "class", "fd-menu__link svelte-1i1w6fs"), l = A(t, "click", D(Xa));
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(n, o), I(n, a), I(a, s);
      },
      p: function p(e, t) {
        e.searchResult && _c36 !== (_c36 = t.result.label + "") && M(r, _c36), e.searchResult && d !== (d = t.result.description + "") && M(s, d);
      },
      d: function d(e) {
        e && N(t), l();
      }
    };
  }

  function Ya(e) {
    var t, n, i;

    function r(e, t) {
      return t.isCustomSearchResultItemRenderer ? Ka : Ja;
    }

    var o = r(0, e),
        a = o(e);

    function s() {
      var _e90;

      for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        t[_key7] = arguments[_key7];
      }

      return (_e90 = e).click_handler_1.apply(_e90, [e].concat(t));
    }

    function _c37() {
      var _e91;

      for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        t[_key8] = arguments[_key8];
      }

      return (_e91 = e).keyup_handler_1.apply(_e91, [e].concat(t));
    }

    return {
      c: function c() {
        t = P("li"), a.c(), n = L(), V(t, "class", "fd-menu__item luigi-search-result-item__" + e.index + " svelte-1i1w6fs"), V(t, "tabindex", "0"), i = [A(t, "click", s), A(t, "keyup", _c37)];
      },
      m: function m(e, i) {
        T(e, t, i), a.m(t, null), I(t, n);
      },
      p: function p(i, s) {
        o === (o = r(0, e = s)) && a ? a.p(i, e) : (a.d(1), (a = o(e)) && (a.c(), a.m(t, n)));
      },
      d: function d(e) {
        e && N(t), a.d(), l(i);
      }
    };
  }

  function Qa(e) {
    var t, n, r, o, a, s, _c38, _d10, u, p, f, g, h, m;

    function v(e, t) {
      return t.search && t.search.disableInputHandlers ? za : Ga;
    }

    var b = v(0, e),
        w = b(e);

    function S(e, t) {
      return t.isCustomSearchRenderer ? Wa : Ha;
    }

    var y = S(0, e),
        _ = y(e);

    return {
      c: function c() {
        t = P("div"), n = P("div"), r = P("div"), o = P("div"), w.c(), a = L(), _.c(), _d10 = L(), u = P("div"), p = P("div"), f = P("button"), g = P("i"), V(o, "class", "fd-input-group fd-shellbar__input-group"), V(r, "class", "fd-popover__control luigi-search svelte-1i1w6fs"), V(r, "aria-hidden", s = !e.isSearchFieldVisible), V(r, "aria-haspopup", "true"), V(n, "class", "fd-popover svelte-1i1w6fs"), V(t, "class", _c38 = "fd-shellbar__action " + (e.isSearchFieldVisible ? "luigi-search-shell__mobile" : "") + " svelte-1i1w6fs"), V(g, "class", "sap-icon sap-icon--search"), V(f, "class", "fd-button fd-shellbar__button"), V(f, "aria-haspopup", "true"), V(f, "aria-expanded", h = !e.isSearchFieldVisible), V(f, "data-testid", "luigi-search-btn-desktop"), V(u, "class", "fd-shellbar__action fd-shellbar__action--desktop"), m = [A(window, "click", e.closeSearchResult), A(window, "blur", e.closeSearchResult), A(r, "click", O(Za)), A(f, "click", e.toggleSearch), A(p, "click", O(es))];
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n), I(n, r), I(r, o), w.m(o, null), I(r, a), _.m(r, null), T(e, _d10, i), T(e, u, i), I(u, p), I(p, f), I(f, g);
      },
      p: function p(e, n) {
        b === (b = v(0, n)) && w ? w.p(e, n) : (w.d(1), (w = b(n)) && (w.c(), w.m(o, null))), y === (y = S(0, n)) && _ ? _.p(e, n) : (_.d(1), (_ = y(n)) && (_.c(), _.m(r, null))), e.isSearchFieldVisible && s !== (s = !n.isSearchFieldVisible) && V(r, "aria-hidden", s), e.isSearchFieldVisible && _c38 !== (_c38 = "fd-shellbar__action " + (n.isSearchFieldVisible ? "luigi-search-shell__mobile" : "") + " svelte-1i1w6fs") && V(t, "class", _c38), e.isSearchFieldVisible && h !== (h = !n.isSearchFieldVisible) && V(f, "aria-expanded", h);
      },
      i: i,
      o: i,
      d: function d(e) {
        e && N(t), w.d(), _.d(), e && (N(_d10), N(u)), l(m);
      }
    };
  }

  var Xa = function Xa() {},
      Za = function Za() {},
      es = function es() {};

  function ts(e, t, n) {
    var i = t.isSearchFieldVisible,
        _t$searchResult = t.searchResult,
        r = _t$searchResult === void 0 ? [] : _t$searchResult,
        o = t.displaySearchResult,
        a = t.displayCustomSearchResult,
        s = t.inputElem,
        l = t.luigiCustomSearchRenderer__slot,
        c = t.luigiCustomSearchItemRenderer__slotContainer;
    var d = ee(),
        u = {
      fireItemSelected: function fireItemSelected(e) {
        p.searchProvider.onSearchResultItemSelected(e);
      }
    };
    var p, f, g;

    function h(_ref63) {
      var e = _ref63.keyCode;
      p ? Lt.isFunction(p.searchProvider.onEnter) && e === qt ? p.searchProvider.onEnter() : Lt.isFunction(p.searchProvider.onEscape) && e === Kt ? p.searchProvider.onEscape() : e === Ht ? o && (document.querySelector(".luigi-search-result-item__0").childNodes[0].setAttribute("aria-selected", "true"), document.querySelector(".luigi-search-result-item__0").focus()) : Lt.isFunction(p.searchProvider.onInput) && p.searchProvider.onInput() : console.warn("GlobalSearch is not available.");
    }

    function m(e) {
      p && Lt.isFunction(p.searchProvider.onSearchResultItemSelected) ? p.searchProvider.onSearchResultItemSelected(e) : Lt.isFunction(p.searchProvider.onEscape) && event.keyCode === Kt && p.searchProvider.onEscape();
    }

    function v(e, _ref64) {
      var t = _ref64.keyCode;
      t === qt && p.searchProvider.onSearchResultItemSelected(e), t === Wt || t === Ht ? function (e) {
        var t = c.children;
        if (t) for (var _n45 = 0; _n45 < t.length; _n45++) {
          var _i54 = void 0,
              _t$_n = t[_n45],
              _r21 = _t$_n.childNodes,
              _o23 = _t$_n.nextSibling,
              _a26 = _t$_n.previousSibling;

          if ("true" === _r21[0].getAttribute("aria-selected")) {
            e === Ht && (_i54 = null !== _o23 ? _o23 : t[0]), e === Wt && (_i54 = null !== _a26 ? _a26 : t[t.length - 1]), _r21[0].setAttribute("aria-selected", "false"), _i54.childNodes[0].setAttribute("aria-selected", "true"), _i54.focus();
            break;
          }
        }
      }(t) : Lt.isFunction(p.searchProvider.onEscape) && t === Kt && (!function () {
        var e = c.children;
        if (e) for (var _t73 = 0; _t73 < e.length; _t73++) {
          var _n46 = e[_t73];
          "true" === _n46.childNodes[0].getAttribute("aria-selected") && _n46.childNodes[0].setAttribute("aria-selected", "false");
        }
      }(), setTimeout(function () {
        s.focus();
      }), p.searchProvider.onEscape());
    }

    Q( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
      var e, t;
      return regeneratorRuntime.wrap(function _callee58$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              _context59.t0 = n;
              _context59.next = 3;
              return rt.getConfigValueAsync("globalSearch");

            case 3:
              _context59.t1 = p = _context59.sent;
              (0, _context59.t0)("search", _context59.t1);
              e = s;

              t = function (e) {
                if (!e || !e.inputPlaceholder) return;
                var t = st.getCurrentLocale();
                if (Lt.isFunction(e.inputPlaceholder)) return e.inputPlaceholder();

                if ("string" == typeof e.inputPlaceholder) {
                  var _t74 = st.getTranslation(e.inputPlaceholder);

                  return _t74 && _t74.trim().length > 0 ? _t74 : e.inputPlaceholder;
                }

                return "object" == _typeof(e.inputPlaceholder) ? e.inputPlaceholder[t] : void 0;
              }(p.searchProvider);

              t && (e.placeholder = t), n("isCustomSearchRenderer", f = Lt.isFunction(p.searchProvider.customSearchResultRenderer)), n("isCustomSearchResultItemRenderer", g = Lt.isFunction(p.searchProvider.customSearchResultItemRenderer));

            case 8:
            case "end":
              return _context59.stop();
          }
        }
      }, _callee58);
    })));
    return e.$set = function (e) {
      "isSearchFieldVisible" in e && n("isSearchFieldVisible", i = e.isSearchFieldVisible), "searchResult" in e && n("searchResult", r = e.searchResult), "displaySearchResult" in e && n("displaySearchResult", o = e.displaySearchResult), "displayCustomSearchResult" in e && n("displayCustomSearchResult", a = e.displayCustomSearchResult), "inputElem" in e && n("inputElem", s = e.inputElem), "luigiCustomSearchRenderer__slot" in e && n("luigiCustomSearchRenderer__slot", l = e.luigiCustomSearchRenderer__slot), "luigiCustomSearchItemRenderer__slotContainer" in e && n("luigiCustomSearchItemRenderer__slotContainer", c = e.luigiCustomSearchItemRenderer__slotContainer);
    }, {
      isSearchFieldVisible: i,
      searchResult: r,
      displaySearchResult: o,
      displayCustomSearchResult: a,
      inputElem: s,
      luigiCustomSearchRenderer__slot: l,
      luigiCustomSearchItemRenderer__slotContainer: c,
      search: p,
      isCustomSearchRenderer: f,
      isCustomSearchResultItemRenderer: g,
      renderCustomSearchItem: function renderCustomSearchItem(e, t, n) {
        return setTimeout(function () {
          p.searchProvider.customSearchResultItemRenderer(e, t.children[n], u);
        }), "";
      },
      closeSearchResult: function closeSearchResult() {
        d("closeSearchResult");
      },
      onKeyUp: h,
      onSearchResultItemSelected: m,
      handleKeydown: v,
      onActionClick: function onActionClick(e) {
        var t = e.pathObject;
        t.externalLink ? xt.navigateToLink(t) : d("handleSearchNavigation", {
          node: t
        });
      },
      toggleSearch: function toggleSearch() {
        if (i ? n("displaySearchResult", o = !1) : setTimeout(function () {
          s && s.focus();
        }), d("toggleSearch", {
          isSearchFieldVisible: i,
          inputElem: s,
          luigiCustomSearchRenderer__slot: l
        }), Lt.isFunction(p.searchProvider.toggleSearch)) {
          var _e92 = void 0 === i || !i;

          p.searchProvider.toggleSearch(s, _e92);
        }
      },
      input_binding: function input_binding(e) {
        oe[e ? "unshift" : "push"](function () {
          n("inputElem", s = e);
        });
      },
      keyup_handler: function keyup_handler(e) {
        return h(e);
      },
      click_handler_1: function click_handler_1(_ref66, t) {
        var e = _ref66.result;
        return m(e);
      },
      keyup_handler_1: function keyup_handler_1(_ref67, t) {
        var e = _ref67.result;
        return v(e, t);
      },
      ul_binding: function ul_binding(e) {
        oe[e ? "unshift" : "push"](function () {
          n("luigiCustomSearchItemRenderer__slotContainer", c = e);
        });
      },
      div_binding: function div_binding(e) {
        oe[e ? "unshift" : "push"](function () {
          n("luigiCustomSearchRenderer__slot", l = e);
        });
      }
    };
  }

  var ns = /*#__PURE__*/function (_Ae17) {
    _inherits(ns, _Ae17);

    var _super21 = _createSuper(ns);

    function ns(e) {
      var _this54;

      _classCallCheck(this, ns);

      _this54 = _super21.call(this), Re(_assertThisInitialized(_this54), e, ts, Qa, d, ["isSearchFieldVisible", "searchResult", "displaySearchResult", "displayCustomSearchResult", "inputElem", "luigiCustomSearchRenderer__slot", "luigiCustomSearchItemRenderer__slotContainer", "onActionClick", "toggleSearch"]);
      return _this54;
    }

    _createClass(ns, [{
      key: "onActionClick",
      get: function get() {
        return this.$$.ctx.onActionClick;
      }
    }, {
      key: "toggleSearch",
      get: function get() {
        return this.$$.ctx.toggleSearch;
      }
    }]);

    return ns;
  }(Ae);

  n(414);
  var is = Ne.Boolean,
      rs = Ne.Object,
      os = Ne.window;

  function as(e, t, n) {
    var i = rs.create(e);
    return i.node = t[n], i.i = n, i;
  }

  function ss(e, t, n) {
    var i = rs.create(e);
    return i.node = t[n], i.i = n, i;
  }

  function ls(e) {
    var t,
        n = new lo({
      props: {
        isHidden: !0
      }
    });
    return n.$on("toggleDropdownState", e.toggleDropdownState_handler_5), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: i,
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function cs(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c39,
        d,
        u,
        _p16 = ("simple" === e.responsiveNavSetting || "simpleMobileOnly" === e.responsiveNavSetting || "Fiori3" === e.responsiveNavSetting) && ds(e);

    function f(t) {
      e.logotitle_dropDownStates_binding.call(null, t), r = !0, fe(function () {
        return r = !1;
      });
    }

    var g = {
      pathData: e.pathData,
      pathParams: e.pathParams
    };
    void 0 !== e.dropDownStates && (g.dropDownStates = e.dropDownStates);
    var h = new Or({
      props: g
    });
    oe.push(function () {
      return Pe(h, "dropDownStates", f);
    }), h.$on("toggleDropdownState", e.toggleDropdownStateExternal), h.$on("handleClick", e.handleClickExternal);

    var _m11 = (!e.authorizationEnabled || e.isLoggedIn) && us(e),
        v = e.children && e.pathData.length > 0 && fs(e),
        b = (e.authorizationEnabled || e.profileItemsAvailable) && Bs(e),
        w = e.isProductSwitcherAvailable && Ws(e);

    return {
      c: function c() {
        t = P("div"), n = P("div"), _p16 && _p16.c(), i = L(), h.$$.fragment.c(), o = L(), a = P("div"), _m11 && _m11.c(), s = L(), v && v.c(), l = L(), b && b.c(), _c39 = L(), w && w.c(), V(n, "class", "fd-shellbar__group fd-shellbar__group--product"), V(a, "class", "fd-shellbar__group fd-shellbar__group--actions"), V(t, "class", d = "fd-shellbar " + (e.hideNavComponent ? "hideNavComponent" : "") + " svelte-trl5ws"), V(t, "tabindex", "0");
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), _p16 && _p16.m(n, null), I(n, i), Ee(h, n, null), I(t, o), I(t, a), _m11 && _m11.m(a, null), I(a, s), v && v.m(a, null), I(a, l), b && b.m(a, null), I(a, _c39), w && w.m(a, null), u = !0;
      },
      p: function p(e, o) {
        "simple" === o.responsiveNavSetting || "simpleMobileOnly" === o.responsiveNavSetting || "Fiori3" === o.responsiveNavSetting ? _p16 || ((_p16 = ds(o)).c(), _p16.m(n, i)) : _p16 && (_p16.d(1), _p16 = null);
        var f = {};
        e.pathData && (f.pathData = o.pathData), e.pathParams && (f.pathParams = o.pathParams), !r && e.dropDownStates && (f.dropDownStates = o.dropDownStates), h.$set(f), !o.authorizationEnabled || o.isLoggedIn ? _m11 ? (_m11.p(e, o), _e(_m11, 1)) : ((_m11 = us(o)).c(), _e(_m11, 1), _m11.m(a, s)) : _m11 && (Se(), Ce(_m11, 1, 1, function () {
          _m11 = null;
        }), ye()), o.children && o.pathData.length > 0 ? v ? (v.p(e, o), _e(v, 1)) : ((v = fs(o)).c(), _e(v, 1), v.m(a, l)) : v && (Se(), Ce(v, 1, 1, function () {
          v = null;
        }), ye()), o.authorizationEnabled || o.profileItemsAvailable ? b ? (b.p(e, o), _e(b, 1)) : ((b = Bs(o)).c(), _e(b, 1), b.m(a, _c39)) : b && (Se(), Ce(b, 1, 1, function () {
          b = null;
        }), ye()), o.isProductSwitcherAvailable ? w ? (w.p(e, o), _e(w, 1)) : ((w = Ws(o)).c(), _e(w, 1), w.m(a, null)) : w && (Se(), Ce(w, 1, 1, function () {
          w = null;
        }), ye()), u && !e.hideNavComponent || d === (d = "fd-shellbar " + (o.hideNavComponent ? "hideNavComponent" : "") + " svelte-trl5ws") || V(t, "class", d);
      },
      i: function i(e) {
        u || (_e(h.$$.fragment, e), _e(_m11), _e(v), _e(b), _e(w), u = !0);
      },
      o: function o(e) {
        Ce(h.$$.fragment, e), Ce(_m11), Ce(v), Ce(b), Ce(w), u = !1;
      },
      d: function d(e) {
        e && N(t), _p16 && _p16.d(), Le(h), _m11 && _m11.d(), v && v.d(), b && b.d(), w && w.d();
      }
    };
  }

  function ds(e) {
    var t, n;
    return {
      c: function c() {
        (t = P("button")).innerHTML = '<i class="sap-icon sap-icon--menu2"></i>', V(t, "class", "fd-shellbar__button fd-button lui-burger svelte-trl5ws"), V(t, "tabindex", "0"), n = A(t, "click", e.burgerClickHandler);
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      d: function d(e) {
        e && N(t), n();
      }
    };
  }

  function us(e) {
    var t,
        n,
        _i55,
        r = e.isGlobalSearchAvailable && ps(e);

    function o(t) {
      e.contextswitcher_dropDownStates_binding.call(null, t), n = !0, fe(function () {
        return n = !1;
      });
    }

    var a = {
      isMobile: !1
    };
    void 0 !== e.dropDownStates && (a.dropDownStates = e.dropDownStates);
    var s = new Sa({
      props: a
    });
    return oe.push(function () {
      return Pe(s, "dropDownStates", o);
    }), s.$on("toggleDropdownState", e.toggleDropdownState_handler), {
      c: function c() {
        r && r.c(), t = L(), s.$$.fragment.c();
      },
      m: function m(e, n) {
        r && r.m(e, n), T(e, t, n), Ee(s, e, n), _i55 = !0;
      },
      p: function p(e, i) {
        i.isGlobalSearchAvailable ? r ? (r.p(e, i), _e(r, 1)) : ((r = ps(i)).c(), _e(r, 1), r.m(t.parentNode, t)) : r && (Se(), Ce(r, 1, 1, function () {
          r = null;
        }), ye());
        var o = {};
        !n && e.dropDownStates && (o.dropDownStates = i.dropDownStates), s.$set(o);
      },
      i: function i(e) {
        _i55 || (_e(r), _e(s.$$.fragment, e), _i55 = !0);
      },
      o: function o(e) {
        Ce(r), Ce(s.$$.fragment, e), _i55 = !1;
      },
      d: function d(e) {
        r && r.d(e), e && N(t), Le(s, e);
      }
    };
  }

  function ps(e) {
    var t, n, i, r, o, a, s;

    function l(n) {
      e.globalsearch_isSearchFieldVisible_binding.call(null, n), t = !0, fe(function () {
        return t = !1;
      });
    }

    function c(t) {
      e.globalsearch_searchResult_binding.call(null, t), n = !0, fe(function () {
        return n = !1;
      });
    }

    function d(t) {
      e.globalsearch_displaySearchResult_binding.call(null, t), i = !0, fe(function () {
        return i = !1;
      });
    }

    function u(t) {
      e.globalsearch_displayCustomSearchResult_binding.call(null, t), r = !0, fe(function () {
        return r = !1;
      });
    }

    function p(t) {
      e.globalsearch_inputElem_binding.call(null, t), o = !0, fe(function () {
        return o = !1;
      });
    }

    function f(t) {
      e.globalsearch_luigiCustomSearchRenderer__slot_binding.call(null, t), a = !0, fe(function () {
        return a = !1;
      });
    }

    var g = {};
    void 0 !== e.isSearchFieldVisible && (g.isSearchFieldVisible = e.isSearchFieldVisible), void 0 !== e.searchResult && (g.searchResult = e.searchResult), void 0 !== e.displaySearchResult && (g.displaySearchResult = e.displaySearchResult), void 0 !== e.displayCustomSearchResult && (g.displayCustomSearchResult = e.displayCustomSearchResult), void 0 !== e.inputElem && (g.inputElem = e.inputElem), void 0 !== e.luigiCustomSearchRenderer__slot && (g.luigiCustomSearchRenderer__slot = e.luigiCustomSearchRenderer__slot);
    var h = new ns({
      props: g
    });
    return oe.push(function () {
      return Pe(h, "isSearchFieldVisible", l);
    }), oe.push(function () {
      return Pe(h, "searchResult", c);
    }), oe.push(function () {
      return Pe(h, "displaySearchResult", d);
    }), oe.push(function () {
      return Pe(h, "displayCustomSearchResult", u);
    }), oe.push(function () {
      return Pe(h, "inputElem", p);
    }), oe.push(function () {
      return Pe(h, "luigiCustomSearchRenderer__slot", f);
    }), h.$on("toggleSearch", e.toggleSearch_handler), h.$on("handleSearchNavigation", e.handleSearchNavigation_handler), h.$on("closeSearchResult", e.closeSearchResult_handler), {
      c: function c() {
        h.$$.fragment.c();
      },
      m: function m(e, t) {
        Ee(h, e, t), s = !0;
      },
      p: function p(e, s) {
        var l = {};
        !t && e.isSearchFieldVisible && (l.isSearchFieldVisible = s.isSearchFieldVisible), !n && e.searchResult && (l.searchResult = s.searchResult), !i && e.displaySearchResult && (l.displaySearchResult = s.displaySearchResult), !r && e.displayCustomSearchResult && (l.displayCustomSearchResult = s.displayCustomSearchResult), !o && e.inputElem && (l.inputElem = s.inputElem), !a && e.luigiCustomSearchRenderer__slot && (l.luigiCustomSearchRenderer__slot = s.luigiCustomSearchRenderer__slot), h.$set(l);
      },
      i: function i(e) {
        s || (_e(h.$$.fragment, e), s = !0);
      },
      o: function o(e) {
        Ce(h.$$.fragment, e), s = !1;
      },
      d: function d(e) {
        Le(h, e);
      }
    };
  }

  function fs(e) {
    var t, n, _i56;

    var r = e.children,
        o = [];

    for (var _t75 = 0; _t75 < r.length; _t75 += 1) {
      o[_t75] = ks(ss(e, r, _t75));
    }

    var a = function a(e) {
      return Ce(o[e], 1, 1, function () {
        o[e] = null;
      });
    };

    var s = (e.visibleNodeCount > 0 || e.isProductSwitcherAvailable || e.contextSwitcherConfig) && Is(e);
    return {
      c: function c() {
        for (var _e93 = 0; _e93 < o.length; _e93 += 1) {
          o[_e93].c();
        }

        t = L(), s && s.c(), n = R();
      },
      m: function m(e, r) {
        for (var _t76 = 0; _t76 < o.length; _t76 += 1) {
          o[_t76].m(e, r);
        }

        T(e, t, r), s && s.m(e, r), T(e, n, r), _i56 = !0;
      },
      p: function p(e, i) {
        if (e.children || e.dropDownStates || e.pathParams || e.getNodeLabel || e.selectedNode || e.getTestId || e.hasOpenUIicon) {
          var _n47;

          for (r = i.children, _n47 = 0; _n47 < r.length; _n47 += 1) {
            var _a27 = ss(i, r, _n47);

            o[_n47] ? (o[_n47].p(e, _a27), _e(o[_n47], 1)) : (o[_n47] = ks(_a27), o[_n47].c(), _e(o[_n47], 1), o[_n47].m(t.parentNode, t));
          }

          for (Se(), _n47 = r.length; _n47 < o.length; _n47 += 1) {
            a(_n47);
          }

          ye();
        }

        i.visibleNodeCount > 0 || i.isProductSwitcherAvailable || i.contextSwitcherConfig ? s ? (s.p(e, i), _e(s, 1)) : ((s = Is(i)).c(), _e(s, 1), s.m(n.parentNode, n)) : s && (Se(), Ce(s, 1, 1, function () {
          s = null;
        }), ye());
      },
      i: function i(e) {
        if (!_i56) {
          for (var _e94 = 0; _e94 < r.length; _e94 += 1) {
            _e(o[_e94]);
          }

          _e(s), _i56 = !0;
        }
      },
      o: function (_o24) {
        function o(_x65) {
          return _o24.apply(this, arguments);
        }

        o.toString = function () {
          return _o24.toString();
        };

        return o;
      }(function (e) {
        o = o.filter(is);

        for (var _e95 = 0; _e95 < o.length; _e95 += 1) {
          Ce(o[_e95]);
        }

        Ce(s), _i56 = !1;
      }),
      d: function d(e) {
        $(o, e), e && N(t), s && s.d(e), e && N(n);
      }
    };
  }

  function gs(e) {
    var t,
        n,
        i,
        r,
        o = [ms, hs],
        a = [];

    function s(e, t) {
      return t.node.isCat ? 0 : 1;
    }

    return t = s(0, e), n = a[t] = o[t](e), {
      c: function c() {
        n.c(), i = R();
      },
      m: function m(e, n) {
        a[t].m(e, n), T(e, i, n), r = !0;
      },
      p: function p(e, r) {
        var l = t;
        (t = s(0, r)) === l ? a[t].p(e, r) : (Se(), Ce(a[l], 1, 1, function () {
          a[l] = null;
        }), ye(), (n = a[t]) || (n = a[t] = o[t](r)).c(), _e(n, 1), n.m(i.parentNode, i));
      },
      i: function i(e) {
        r || (_e(n), r = !0);
      },
      o: function o(e) {
        Ce(n), r = !1;
      },
      d: function d(e) {
        a[t].d(e), e && N(i);
      }
    };
  }

  function hs(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        _d11,
        u = e.node.icon && vs(e),
        _p17 = (!e.node.icon || e.node.showLabel) && Ss(e),
        f = new ui({
      props: {
        node: e.node
      }
    });

    function g() {
      return e.click_handler_2(e);
    }

    return {
      c: function c() {
        t = P("div"), n = P("button"), u && u.c(), i = L(), _p17 && _p17.c(), r = L(), f.$$.fragment.c(), l = L(), V(n, "title", o = Ks(e.node)), V(n, "class", a = "fd-shellbar__button fd-button " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-trl5ws"), V(n, "aria-expanded", "false"), V(n, "aria-haspopup", "true"), V(n, "data-testid", s = Js(e.node)), V(t, "class", "fd-shellbar__action fd-shellbar__action--hide fd-shellbar__action--desktop"), _d11 = A(n, "click", g);
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), u && u.m(n, null), I(n, i), _p17 && _p17.m(n, null), I(n, r), Ee(f, n, null), I(t, l), c = !0;
      },
      p: function p(t, l) {
        (e = l).node.icon ? u ? u.p(t, e) : ((u = vs(e)).c(), u.m(n, i)) : u && (u.d(1), u = null), !e.node.icon || e.node.showLabel ? _p17 ? _p17.p(t, e) : ((_p17 = Ss(e)).c(), _p17.m(n, r)) : _p17 && (_p17.d(1), _p17 = null);
        var d = {};
        t.children && (d.node = e.node), f.$set(d), c && !t.children || o === (o = Ks(e.node)) || V(n, "title", o), c && !t.children && !t.selectedNode || a === (a = "fd-shellbar__button fd-button " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-trl5ws") || V(n, "class", a), c && !t.children || s === (s = Js(e.node)) || V(n, "data-testid", s);
      },
      i: function i(e) {
        c || (_e(f.$$.fragment, e), c = !0);
      },
      o: function o(e) {
        Ce(f.$$.fragment, e), c = !1;
      },
      d: function d(e) {
        e && N(t), u && u.d(), _p17 && _p17.d(), Le(f), _d11();
      }
    };
  }

  function ms(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c40,
        d,
        u,
        p,
        f,
        g,
        h,
        _m12,
        v,
        b = e.node.icon && ys(e),
        w = (!e.node.icon || e.node.showLabel) && xs(e),
        S = new ui({
      props: {
        node: e.node
      }
    });

    function y() {
      return e.click_handler(e);
    }

    var _ = new Ao({
      props: {
        node: e.node,
        isMobile: !1,
        pathParams: e.pathParams
      }
    });

    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("button"), b && b.c(), o = L(), w && w.c(), a = L(), S.$$.fragment.c(), p = L(), f = P("div"), _.$$.fragment.c(), h = L(), V(r, "title", s = Ks(e.node)), V(r, "class", _c40 = "fd-shellbar__button fd-button " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-trl5ws"), V(r, "aria-controls", "dropDownPopover-" + e.i), V(r, "aria-expanded", d = e.dropDownStates["dropDownPopover-".concat(e.i)] || !1), V(r, "aria-haspopup", "true"), V(r, "data-testid", u = Js(e.node)), V(i, "class", "fd-popover__control"), V(f, "class", "fd-popover__body fd-popover__body--right svelte-trl5ws"), V(f, "aria-hidden", g = !e.dropDownStates["dropDownPopover-".concat(e.i)]), V(f, "id", "dropDownPopover-" + e.i), V(n, "class", "fd-popover fd-popover--right svelte-trl5ws"), V(t, "class", "fd-shellbar__action fd-shellbar__action--hide fd-shellbar__action--desktop"), v = [A(r, "click", y), A(i, "click", O(Ys))];
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(i, r), b && b.m(r, null), I(r, o), w && w.m(r, null), I(r, a), Ee(S, r, null), I(n, p), I(n, f), Ee(_, f, null), I(t, h), _m12 = !0;
      },
      p: function p(t, n) {
        (e = n).node.icon ? b ? b.p(t, e) : ((b = ys(e)).c(), b.m(r, o)) : b && (b.d(1), b = null), !e.node.icon || e.node.showLabel ? w ? w.p(t, e) : ((w = xs(e)).c(), w.m(r, a)) : w && (w.d(1), w = null);
        var i = {};
        t.children && (i.node = e.node), S.$set(i), _m12 && !t.children || s === (s = Ks(e.node)) || V(r, "title", s), _m12 && !t.children && !t.selectedNode || _c40 === (_c40 = "fd-shellbar__button fd-button " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-trl5ws") || V(r, "class", _c40), _m12 && !t.dropDownStates || d === (d = e.dropDownStates["dropDownPopover-".concat(e.i)] || !1) || V(r, "aria-expanded", d), _m12 && !t.children || u === (u = Js(e.node)) || V(r, "data-testid", u);
        var l = {};
        t.children && (l.node = e.node), t.pathParams && (l.pathParams = e.pathParams), _.$set(l), _m12 && !t.dropDownStates || g === (g = !e.dropDownStates["dropDownPopover-".concat(e.i)]) || V(f, "aria-hidden", g);
      },
      i: function i(e) {
        _m12 || (_e(S.$$.fragment, e), _e(_.$$.fragment, e), _m12 = !0);
      },
      o: function o(e) {
        Ce(S.$$.fragment, e), Ce(_.$$.fragment, e), _m12 = !1;
      },
      d: function d(e) {
        e && N(t), b && b.d(), w && w.d(), Le(S), Le(_), l(v);
      }
    };
  }

  function vs(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.children) && (t = !!qs(n.node)), t ? ws : bs;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function bs(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "class", "fd-top-nav__icon nav-icon svelte-trl5ws"), V(t, "src", n = e.node.icon), V(t, "alt", i = e.node.altText ? e.node.altText : "");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.children && n !== (n = r.node.icon) && V(t, "src", n), e.children && i !== (i = r.node.altText ? r.node.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ws(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("span"), "class", n = "fd-top-nav__icon sap-icon sap-icon--" + e.node.icon + " svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.children && n !== (n = "fd-top-nav__icon sap-icon sap-icon--" + i.node.icon + " svelte-trl5ws") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ss(e) {
    var t,
        n,
        i = Ks(e.node) + "";
    return {
      c: function c() {
        t = P("span"), n = E(i);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.children && i !== (i = Ks(t.node) + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ys(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.children) && (t = !!qs(n.node)), t ? Cs : _s;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function _s(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "class", "fd-top-nav__icon nav-icon svelte-trl5ws"), V(t, "src", n = e.node.icon), V(t, "alt", i = e.node.altText ? e.node.altText : "");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.children && n !== (n = r.node.icon) && V(t, "src", n), e.children && i !== (i = r.node.altText ? r.node.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Cs(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("span"), "class", n = "sap-icon sap-icon--" + e.node.icon + " fd-top-nav__icon svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.children && n !== (n = "sap-icon sap-icon--" + i.node.icon + " fd-top-nav__icon svelte-trl5ws") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function xs(e) {
    var t,
        n,
        i = Ks(e.node) + "";
    return {
      c: function c() {
        t = P("span"), n = E(i);
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.children && i !== (i = Ks(t.node) + "") && M(n, i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function ks(e) {
    var t,
        n,
        _i57 = !e.node.hideFromNav && gs(e);

    return {
      c: function c() {
        _i57 && _i57.c(), t = R();
      },
      m: function m(e, r) {
        _i57 && _i57.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.hideFromNav ? _i57 && (Se(), Ce(_i57, 1, 1, function () {
          _i57 = null;
        }), ye()) : _i57 ? (_i57.p(e, n), _e(_i57, 1)) : ((_i57 = gs(n)).c(), _e(_i57, 1), _i57.m(t.parentNode, t));
      },
      i: function i(e) {
        n || (_e(_i57), n = !0);
      },
      o: function o(e) {
        Ce(_i57), n = !1;
      },
      d: function d(e) {
        _i57 && _i57.d(e), e && N(t);
      }
    };
  }

  function Is(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c41,
        d,
        u,
        _p18,
        f,
        g,
        h,
        _m13,
        v,
        b,
        w,
        S,
        y,
        _,
        C,
        x = new ui({
      props: {
        node: e.totalBadgeNode,
        special: "true"
      }
    }),
        k = e.isGlobalSearchAvailable && Ts(e),
        E = e.contextSwitcherConfig && (!e.authorizationEnabled || e.isLoggedIn) && Ns(e);

    var R = e.children,
        D = [];

    for (var _t77 = 0; _t77 < R.length; _t77 += 1) {
      D[_t77] = Ds(as(e, R, _t77));
    }

    var M = function M(e) {
      return Ce(D[e], 1, 1, function () {
        D[e] = null;
      });
    };

    var F = e.isProductSwitcherAvailable && Os(e),
        U = e.isProductSwitcherAvailable && Fs(e),
        j = e.openMobileDropDown && Us(e),
        B = (!e.authorizationEnabled || e.isLoggedIn) && js(e);
    return {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("div"), a = P("button"), s = P("i"), _c41 = L(), x.$$.fragment.c(), u = L(), _p18 = P("div"), f = P("nav"), g = P("ul"), k && k.c(), h = L(), E && E.c(), _m13 = L();

        for (var _e96 = 0; _e96 < D.length; _e96 += 1) {
          D[_e96].c();
        }

        v = L(), F && F.c(), w = L(), U && U.c(), S = L(), j && j.c(), y = L(), B && B.c(), V(s, "class", "sap-icon sap-icon--overflow"), V(a, "class", "fd-shellbar__button fd-button"), V(a, "aria-controls", "overflowPopover"), V(a, "aria-expanded", d = e.dropDownStates.overflowPopover || !1), V(a, "aria-haspopup", "true"), V(a, "data-testid", "mobile-menu"), V(o, "class", "fd-shellbar-collapse--control svelte-trl5ws"), V(o, "aria-controls", "eYVEJ960"), V(o, "aria-expanded", "false"), V(o, "aria-haspopup", "true"), V(o, "role", "button"), V(r, "class", "fd-popover__control"), V(g, "class", "fd-menu__list fd-menu__list--no-shadow"), V(f, "class", "fd-menu"), V(_p18, "class", "fd-popover__body fd-popover__body--right svelte-trl5ws"), V(_p18, "aria-hidden", b = !e.dropDownStates.overflowPopover), V(_p18, "id", "overflowPopover"), V(i, "class", "fd-popover fd-popover--right svelte-trl5ws"), V(n, "class", "fd-shellbar-collapse svelte-trl5ws"), V(t, "class", "fd-shellbar__action fd-shellbar__action--mobile"), C = [A(a, "click", e.click_handler_3), A(r, "click", O(Qs))];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), I(a, s), I(a, _c41), Ee(x, a, null), I(i, u), I(i, _p18), I(_p18, f), I(f, g), k && k.m(g, null), I(g, h), E && E.m(g, null), I(g, _m13);

        for (var _e97 = 0; _e97 < D.length; _e97 += 1) {
          D[_e97].m(g, null);
        }

        I(g, v), F && F.m(g, null), I(i, w), U && U.m(i, null), I(i, S), j && j.m(i, null), I(i, y), B && B.m(i, null), _ = !0;
      },
      p: function p(e, t) {
        var n = {};

        if (e.totalBadgeNode && (n.node = t.totalBadgeNode), x.$set(n), _ && !e.dropDownStates || d === (d = t.dropDownStates.overflowPopover || !1) || V(a, "aria-expanded", d), t.isGlobalSearchAvailable ? k || ((k = Ts(t)).c(), k.m(g, h)) : k && (k.d(1), k = null), !t.contextSwitcherConfig || t.authorizationEnabled && !t.isLoggedIn ? E && (E.d(1), E = null) : E ? E.p(e, t) : ((E = Ns(t)).c(), E.m(g, _m13)), e.children || e.getRouteLink || e.selectedNode || e.getTestId || e.getNodeLabel || e.hasOpenUIicon) {
          var _n48;

          for (R = t.children, _n48 = 0; _n48 < R.length; _n48 += 1) {
            var _i58 = as(t, R, _n48);

            D[_n48] ? (D[_n48].p(e, _i58), _e(D[_n48], 1)) : (D[_n48] = Ds(_i58), D[_n48].c(), _e(D[_n48], 1), D[_n48].m(g, v));
          }

          for (Se(), _n48 = R.length; _n48 < D.length; _n48 += 1) {
            M(_n48);
          }

          ye();
        }

        t.isProductSwitcherAvailable ? F ? F.p(e, t) : ((F = Os(t)).c(), F.m(g, null)) : F && (F.d(1), F = null), _ && !e.dropDownStates || b === (b = !t.dropDownStates.overflowPopover) || V(_p18, "aria-hidden", b), t.isProductSwitcherAvailable ? U ? (U.p(e, t), _e(U, 1)) : ((U = Fs(t)).c(), _e(U, 1), U.m(i, S)) : U && (Se(), Ce(U, 1, 1, function () {
          U = null;
        }), ye()), t.openMobileDropDown ? j ? (j.p(e, t), _e(j, 1)) : ((j = Us(t)).c(), _e(j, 1), j.m(i, y)) : j && (Se(), Ce(j, 1, 1, function () {
          j = null;
        }), ye()), !t.authorizationEnabled || t.isLoggedIn ? B ? (B.p(e, t), _e(B, 1)) : ((B = js(t)).c(), _e(B, 1), B.m(i, null)) : B && (Se(), Ce(B, 1, 1, function () {
          B = null;
        }), ye());
      },
      i: function i(e) {
        if (!_) {
          _e(x.$$.fragment, e);

          for (var _e98 = 0; _e98 < R.length; _e98 += 1) {
            _e(D[_e98]);
          }

          _e(U), _e(j), _e(B), _ = !0;
        }
      },
      o: function o(e) {
        Ce(x.$$.fragment, e), D = D.filter(is);

        for (var _e99 = 0; _e99 < D.length; _e99 += 1) {
          Ce(D[_e99]);
        }

        Ce(U), Ce(j), Ce(B), _ = !1;
      },
      d: function d(e) {
        e && N(t), Le(x), k && k.d(), E && E.d(), $(D, e), F && F.d(), U && U.d(), j && j.d(), B && B.d(), l(C);
      }
    };
  }

  function Ts(e) {
    var t, n, i;
    return {
      c: function c() {
        t = P("li"), (n = P("a")).innerHTML = '<i class="sap-icon sap-icon--search fd-top-nav__icon svelte-trl5ws"></i> <span class="fd-menu__title">Search</span>', V(n, "class", "fd-menu__link"), V(n, "data-testid", "luigi-search-btn-mobile"), V(t, "class", "fd-menu__item"), i = A(n, "click", O(e.click_handler_5));
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      d: function d(e) {
        e && N(t), i();
      }
    };
  }

  function Ns(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.selectedLabel ? e.selectedLabel : e.defaultLabelContextSwitcher + "";
    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("i"), r = L(), o = P("span"), a = E(l), V(i, "class", "sap-icon fd-top-nav__icon " + (e.contextSwitcherConfig.icon && qs(e.contextSwitcherConfig) ? "sap-icon--" + e.contextSwitcherConfig.icon : "sap-icon--switch-views") + " svelte-trl5ws"), V(o, "class", "fd-menu__title"), V(n, "class", "fd-menu__link"), V(t, "class", "fd-menu__item"), s = A(n, "click", O(e.openMobileContextSwitcher));
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(n, r), I(n, o), I(o, a);
      },
      p: function p(e, t) {
        (e.selectedLabel || e.defaultLabelContextSwitcher) && l !== (l = t.selectedLabel ? t.selectedLabel : t.defaultLabelContextSwitcher + "") && M(a, l);
      },
      d: function d(e) {
        e && N(t), s();
      }
    };
  }

  function $s(e) {
    var t,
        n,
        i,
        r,
        o = [Es, Ps],
        a = [];

    function s(e, t) {
      return t.node.isCat ? 1 : 0;
    }

    return t = s(0, e), n = a[t] = o[t](e), {
      c: function c() {
        n.c(), i = R();
      },
      m: function m(e, n) {
        a[t].m(e, n), T(e, i, n), r = !0;
      },
      p: function p(e, r) {
        var l = t;
        (t = s(0, r)) === l ? a[t].p(e, r) : (Se(), Ce(a[l], 1, 1, function () {
          a[l] = null;
        }), ye(), (n = a[t]) || (n = a[t] = o[t](r)).c(), _e(n, 1), n.m(i.parentNode, i));
      },
      i: function i(e) {
        r || (_e(n), r = !0);
      },
      o: function o(e) {
        Ce(n), r = !1;
      },
      d: function d(e) {
        a[t].d(e), e && N(i);
      }
    };
  }

  function Ps(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c42,
        d,
        u,
        p,
        f = Ks(e.node) + "";

    function g(e, t) {
      return (null == r || e.children) && (r = !!qs(t.node)), r ? Rs : Ls;
    }

    var h = g(null, e),
        _m14 = h(e),
        v = new ui({
      props: {
        node: e.node
      }
    });

    function b() {
      return e.click_handler_7(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), _m14.c(), o = L(), v.$$.fragment.c(), a = L(), s = P("span"), l = E(f), V(i, "class", "fd-top-nav__icon svelte-trl5ws"), V(s, "class", "fd-list__title"), V(n, "href", _c42 = e.getRouteLink(e.node)), V(n, "title", d = Ks(e.node)), V(n, "class", "fd-menu__link"), V(n, "data-e2e", "mobile-topnav-dropdown-category"), V(t, "class", "fd-menu__item"), p = A(n, "click", D(b));
      },
      m: function m(e, r) {
        T(e, t, r), I(t, n), I(n, i), _m14.m(i, null), I(i, o), Ee(v, i, null), I(n, a), I(n, s), I(s, l), u = !0;
      },
      p: function p(t, r) {
        h === (h = g(t, e = r)) && _m14 ? _m14.p(t, e) : (_m14.d(1), (_m14 = h(e)) && (_m14.c(), _m14.m(i, o)));
        var a = {};
        t.children && (a.node = e.node), v.$set(a), u && !t.children || f === (f = Ks(e.node) + "") || M(l, f), u && !t.children || _c42 === (_c42 = e.getRouteLink(e.node)) || V(n, "href", _c42), u && !t.children || d === (d = Ks(e.node)) || V(n, "title", d);
      },
      i: function i(e) {
        u || (_e(v.$$.fragment, e), u = !0);
      },
      o: function o(e) {
        Ce(v.$$.fragment, e), u = !1;
      },
      d: function d(e) {
        e && N(t), _m14.d(), Le(v), p();
      }
    };
  }

  function Es(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c43,
        d,
        u,
        _p19,
        f,
        g = !qs(e.node),
        h = Ks(e.node) + "",
        _m15 = g && As(e),
        v = new ui({
      props: {
        node: e.node
      }
    });

    function b() {
      return e.click_handler_6(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), _m15 && _m15.c(), r = L(), v.$$.fragment.c(), a = L(), s = P("span"), l = E(h), V(i, "class", o = "fd-top-nav__icon sap-icon " + (e.node.icon && qs(e.node) ? "sap-icon--" + e.node.icon : "") + " svelte-trl5ws"), V(s, "class", "fd-menu__title"), V(n, "href", _c43 = e.getRouteLink(e.node)), V(n, "class", d = "fd-menu__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-trl5ws"), V(n, "data-testid", u = Js(e.node)), V(t, "class", "fd-menu__item"), f = A(n, "click", D(b));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), _m15 && _m15.m(i, null), I(i, r), Ee(v, i, null), I(n, a), I(n, s), I(s, l), _p19 = !0;
      },
      p: function p(t, a) {
        e = a, t.children && (g = !qs(e.node)), g ? _m15 ? _m15.p(t, e) : ((_m15 = As(e)).c(), _m15.m(i, r)) : _m15 && (_m15.d(1), _m15 = null);
        var s = {};
        t.children && (s.node = e.node), v.$set(s), _p19 && !t.children || o === (o = "fd-top-nav__icon sap-icon " + (e.node.icon && qs(e.node) ? "sap-icon--" + e.node.icon : "") + " svelte-trl5ws") || V(i, "class", o), _p19 && !t.children || h === (h = Ks(e.node) + "") || M(l, h), _p19 && !t.children || _c43 === (_c43 = e.getRouteLink(e.node)) || V(n, "href", _c43), _p19 && !t.children && !t.selectedNode || d === (d = "fd-menu__link " + (e.node === e.selectedNode ? "is-selected" : "") + " svelte-trl5ws") || V(n, "class", d), _p19 && !t.children || u === (u = Js(e.node)) || V(n, "data-testid", u);
      },
      i: function i(e) {
        _p19 || (_e(v.$$.fragment, e), _p19 = !0);
      },
      o: function o(e) {
        Ce(v.$$.fragment, e), _p19 = !1;
      },
      d: function d(e) {
        e && N(t), _m15 && _m15.d(), Le(v), f();
      }
    };
  }

  function Ls(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "src", n = e.node.icon), V(t, "alt", i = e.node.altText ? e.node.altText : ""), V(t, "class", "svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.children && n !== (n = r.node.icon) && V(t, "src", n), e.children && i !== (i = r.node.altText ? r.node.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Rs(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "sap-icon " + (e.node.icon && qs(e.node) ? "sap-icon--" + e.node.icon : "") + " svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.children && n !== (n = "sap-icon " + (i.node.icon && qs(i.node) ? "sap-icon--" + i.node.icon : "") + " svelte-trl5ws") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function As(e) {
    var t, n, i;
    return {
      c: function c() {
        V(t = P("img"), "src", n = e.node.icon), V(t, "alt", i = e.node.altText ? e.node.altText : ""), V(t, "class", "svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, r) {
        e.children && n !== (n = r.node.icon) && V(t, "src", n), e.children && i !== (i = r.node.altText ? r.node.altText : "") && V(t, "alt", i);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ds(e) {
    var t,
        n,
        _i59 = !e.node.hideFromNav && $s(e);

    return {
      c: function c() {
        _i59 && _i59.c(), t = R();
      },
      m: function m(e, r) {
        _i59 && _i59.m(e, r), T(e, t, r), n = !0;
      },
      p: function p(e, n) {
        n.node.hideFromNav ? _i59 && (Se(), Ce(_i59, 1, 1, function () {
          _i59 = null;
        }), ye()) : _i59 ? (_i59.p(e, n), _e(_i59, 1)) : ((_i59 = $s(n)).c(), _e(_i59, 1), _i59.m(t.parentNode, t));
      },
      i: function i(e) {
        n || (_e(_i59), n = !0);
      },
      o: function o(e) {
        Ce(_i59), n = !1;
      },
      d: function d(e) {
        _i59 && _i59.d(e), e && N(t);
      }
    };
  }

  function Os(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = e.productSwitcherConfig.label + "";

    function c(e, t) {
      return (null == i || e.productSwitcherConfig) && (i = !(!qs(t.productSwitcherConfig) && t.productSwitcherConfig.icon)), i ? Ms : Vs;
    }

    var d = c(null, e),
        u = d(e);
    return {
      c: function c() {
        t = P("li"), n = P("a"), u.c(), r = L(), o = P("span"), a = E(l), V(o, "class", "fd-menu__title"), V(n, "class", "fd-menu__link"), V(n, "data-testid", "mobile-product-switcher"), V(t, "class", "fd-menu__item"), s = A(n, "click", O(e.openMobileProductSwitcher));
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n), u.m(n, null), I(n, r), I(n, o), I(o, a);
      },
      p: function p(e, t) {
        d === (d = c(e, t)) && u ? u.p(e, t) : (u.d(1), (u = d(t)) && (u.c(), u.m(n, r))), e.productSwitcherConfig && l !== (l = t.productSwitcherConfig.label + "") && M(a, l);
      },
      d: function d(e) {
        e && N(t), u.d(), s();
      }
    };
  }

  function Vs(e) {
    var t, n, i, r;
    return {
      c: function c() {
        t = P("span"), V(n = P("img"), "src", i = e.productSwitcherConfig.icon), V(n, "alt", r = e.productSwitcherConfig.altText ? e.productSwitcherConfig.altText : ""), V(n, "class", "svelte-trl5ws"), V(t, "class", "fd-top-nav__icon svelte-trl5ws");
      },
      m: function m(e, i) {
        T(e, t, i), I(t, n);
      },
      p: function p(e, t) {
        e.productSwitcherConfig && i !== (i = t.productSwitcherConfig.icon) && V(n, "src", i), e.productSwitcherConfig && r !== (r = t.productSwitcherConfig.altText ? t.productSwitcherConfig.altText : "") && V(n, "alt", r);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ms(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "fd-top-nav__icon sap-icon sap-icon--" + (e.productSwitcherConfig.icon || "grid") + " svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.productSwitcherConfig && n !== (n = "fd-top-nav__icon sap-icon sap-icon--" + (i.productSwitcherConfig.icon || "grid") + " svelte-trl5ws") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Fs(e) {
    var t, n;

    function i(n) {
      e.productswitcher_dropDownStates_binding.call(null, n), t = !0, fe(function () {
        return t = !1;
      });
    }

    var r = {
      isMobile: !0
    };
    void 0 !== e.dropDownStates && (r.dropDownStates = e.dropDownStates);
    var o = new ja({
      props: r
    });
    return oe.push(function () {
      return Pe(o, "dropDownStates", i);
    }), o.$on("toggleDropdownState", e.toggleDropdownState_handler_1), {
      c: function c() {
        o.$$.fragment.c();
      },
      m: function m(e, t) {
        Ee(o, e, t), n = !0;
      },
      p: function p(e, n) {
        var i = {};
        !t && e.dropDownStates && (i.dropDownStates = n.dropDownStates), o.$set(i);
      },
      i: function i(e) {
        n || (_e(o.$$.fragment, e), n = !0);
      },
      o: function (_o25) {
        function o(_x66) {
          return _o25.apply(this, arguments);
        }

        o.toString = function () {
          return _o25.toString();
        };

        return o;
      }(function (e) {
        Ce(o.$$.fragment, e), n = !1;
      }),
      d: function d(e) {
        Le(o, e);
      }
    };
  }

  function Us(e) {
    var t,
        n = new Ao({
      props: {
        node: e.nodeForMobile,
        isMobile: !0,
        pathParams: e.pathParams
      }
    });
    return n.$on("close", e.closeMobileTopNavDropDown), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.nodeForMobile && (i.node = t.nodeForMobile), e.pathParams && (i.pathParams = t.pathParams), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function js(e) {
    var t, n, i, r;

    function o(n) {
      e.contextswitcher_dropDownStates_binding_1.call(null, n), t = !0, fe(function () {
        return t = !1;
      });
    }

    function a(t) {
      e.contextswitcher_selectedLabel_binding.call(null, t), n = !0, fe(function () {
        return n = !1;
      });
    }

    function s(t) {
      e.contextswitcher_defaultLabel_binding.call(null, t), i = !0, fe(function () {
        return i = !1;
      });
    }

    var l = {
      isMobile: !0,
      contextSwitcherToggle: e.contextSwitcherToggle
    };
    void 0 !== e.dropDownStates && (l.dropDownStates = e.dropDownStates), void 0 !== e.selectedLabel && (l.selectedLabel = e.selectedLabel), void 0 !== e.defaultLabelContextSwitcher && (l.defaultLabel = e.defaultLabelContextSwitcher);

    var _c44 = new Sa({
      props: l
    });

    return oe.push(function () {
      return Pe(_c44, "dropDownStates", o);
    }), oe.push(function () {
      return Pe(_c44, "selectedLabel", a);
    }), oe.push(function () {
      return Pe(_c44, "defaultLabel", s);
    }), _c44.$on("toggleDropdownState", e.toggleDropdownState_handler_2), {
      c: function c() {
        _c44.$$.fragment.c();
      },
      m: function m(e, t) {
        Ee(_c44, e, t), r = !0;
      },
      p: function p(e, r) {
        var o = {};
        e.contextSwitcherToggle && (o.contextSwitcherToggle = r.contextSwitcherToggle), !t && e.dropDownStates && (o.dropDownStates = r.dropDownStates), !n && e.selectedLabel && (o.selectedLabel = r.selectedLabel), !i && e.defaultLabelContextSwitcher && (o.defaultLabel = r.defaultLabelContextSwitcher), _c44.$set(o);
      },
      i: function i(e) {
        r || (_e(_c44.$$.fragment, e), r = !0);
      },
      o: function o(e) {
        Ce(_c44.$$.fragment, e), r = !1;
      },
      d: function d(e) {
        Le(_c44, e);
      }
    };
  }

  function Bs(e) {
    var t, n, i, r, o, a, s, _c45, d, u, _p20, f, g, h;

    function m(e, t) {
      return t.userInfo.picture ? zs : Gs;
    }

    var v = m(0, e),
        b = v(e),
        w = new lo({});
    return w.$on("toggleDropdownState", e.toggleDropdownState_handler_3), w.$on("userInfoUpdated", e.userInfoUpdate), {
      c: function c() {
        t = P("div"), n = P("div"), i = P("div"), r = P("div"), o = P("div"), a = P("div"), b.c(), u = L(), _p20 = P("div"), w.$$.fragment.c(), V(a, "class", "fd-button fd-shellbar__button svelte-trl5ws"), V(a, "aria-expanded", s = e.dropDownStates.profilePopover || !1), V(a, "aria-haspopup", "true"), V(a, "title", _c45 = e.userInfo.name ? e.userInfo.name : e.userInfo.email), V(a, "role", "button"), V(a, "data-testid", "luigi-topnav-profile-btn"), V(o, "class", d = e.userInfo.picture ? "fd-shellbar__button--user-menu" : ""), V(_p20, "class", "fd-popover__body fd-popover__body--right fd-popover__body--no-arrow svelte-trl5ws"), V(_p20, "aria-hidden", f = !e.dropDownStates.profilePopover), V(_p20, "id", "profilePopover"), V(r, "class", "fd-popover__control"), V(i, "class", "fd-popover svelte-trl5ws"), V(n, "class", "fd-user-menu"), V(t, "class", "fd-shellbar__action fd-shellbar__action--show-always"), V(t, "data-testid", "luigi-topnav-profile"), h = [A(a, "click", e.click_handler_8), A(r, "click", O(Xs))];
      },
      m: function m(e, s) {
        T(e, t, s), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), b.m(a, null), I(r, u), I(r, _p20), Ee(w, _p20, null), g = !0;
      },
      p: function p(e, t) {
        v === (v = m(0, t)) && b ? b.p(e, t) : (b.d(1), (b = v(t)) && (b.c(), b.m(a, null))), g && !e.dropDownStates || s === (s = t.dropDownStates.profilePopover || !1) || V(a, "aria-expanded", s), g && !e.userInfo || _c45 === (_c45 = t.userInfo.name ? t.userInfo.name : t.userInfo.email) || V(a, "title", _c45), g && !e.userInfo || d === (d = t.userInfo.picture ? "fd-shellbar__button--user-menu" : "") || V(o, "class", d), g && !e.dropDownStates || f === (f = !t.dropDownStates.profilePopover) || V(_p20, "aria-hidden", f);
      },
      i: function i(e) {
        g || (_e(w.$$.fragment, e), g = !0);
      },
      o: function o(e) {
        Ce(w.$$.fragment, e), g = !1;
      },
      d: function d(e) {
        e && N(t), b.d(), Le(w), l(h);
      }
    };
  }

  function Gs(e) {
    var t, n;
    return {
      c: function c() {
        V(t = P("i"), "class", n = "sap-icon " + (e.userInfo.picture ? "fd-identifier fd-identifier--xs fd-identifier--circle" : "sap-icon--customer") + " svelte-trl5ws");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, i) {
        e.userInfo && n !== (n = "sap-icon " + (i.userInfo.picture ? "fd-identifier fd-identifier--xs fd-identifier--circle" : "sap-icon--customer") + " svelte-trl5ws") && V(t, "class", n);
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function zs(e) {
    var t;
    return {
      c: function c() {
        V(t = P("span"), "class", "fd-avatar fd-avatar--xs fd-avatar--circle"), U(t, "background-image", "url('" + e.userInfo.picture + "')");
      },
      m: function m(e, n) {
        T(e, t, n);
      },
      p: function p(e, n) {
        e.userInfo && U(t, "background-image", "url('" + n.userInfo.picture + "')");
      },
      d: function d(e) {
        e && N(t);
      }
    };
  }

  function Ws(e) {
    var t, n;

    function i(n) {
      e.productswitcher_dropDownStates_binding_1.call(null, n), t = !0, fe(function () {
        return t = !1;
      });
    }

    var r = {
      isMobile: !1
    };
    void 0 !== e.dropDownStates && (r.dropDownStates = e.dropDownStates);
    var o = new ja({
      props: r
    });
    return oe.push(function () {
      return Pe(o, "dropDownStates", i);
    }), o.$on("toggleDropdownState", e.toggleDropdownState_handler_4), {
      c: function c() {
        o.$$.fragment.c();
      },
      m: function m(e, t) {
        Ee(o, e, t), n = !0;
      },
      p: function p(e, n) {
        var i = {};
        !t && e.dropDownStates && (i.dropDownStates = n.dropDownStates), o.$set(i);
      },
      i: function i(e) {
        n || (_e(o.$$.fragment, e), n = !0);
      },
      o: function (_o26) {
        function o(_x67) {
          return _o26.apply(this, arguments);
        }

        o.toString = function () {
          return _o26.toString();
        };

        return o;
      }(function (e) {
        Ce(o.$$.fragment, e), n = !1;
      }),
      d: function d(e) {
        Le(o, e);
      }
    };
  }

  function Hs(e) {
    var t,
        n,
        i,
        r,
        o,
        a = [cs, ls],
        s = [];

    function c(e, t) {
      return t.showTopNav ? 0 : 1;
    }

    return t = c(0, e), n = s[t] = a[t](e), {
      c: function c() {
        n.c(), i = R(), o = [A(os, "click", e.closeAllDropdowns), A(os, "blur", e.closeAllDropdowns)];
      },
      m: function m(e, n) {
        s[t].m(e, n), T(e, i, n), r = !0;
      },
      p: function p(e, r) {
        var o = t;
        (t = c(0, r)) === o ? s[t].p(e, r) : (Se(), Ce(s[o], 1, 1, function () {
          s[o] = null;
        }), ye(), (n = s[t]) || (n = s[t] = a[t](r)).c(), _e(n, 1), n.m(i.parentNode, i));
      },
      i: function i(e) {
        r || (_e(n), r = !0);
      },
      o: function o(e) {
        Ce(n), r = !1;
      },
      d: function d(e) {
        s[t].d(e), e && N(i), l(o);
      }
    };
  }

  function qs(e) {
    return At.isOpenUIiconName(e.icon);
  }

  function Ks(e) {
    return st.getTranslation(e.label);
  }

  function Js(e) {
    return e.testId ? e.testId : At.prepareForTests(e.pathSegment, e.label);
  }

  var Ys = function Ys() {},
      Qs = function Qs() {},
      Xs = function Xs() {};

  function Zs(e, t, n) {
    var i = ee();
    var r,
        o,
        a,
        s = t.authorizationEnabled,
        l = t.autologinEnabled,
        _t$isLoggedIn = t.isLoggedIn,
        c = _t$isLoggedIn === void 0 ? !1 : _t$isLoggedIn,
        d = t.hideNavComponent,
        u = t.responsiveNavSetting,
        p = t.pathData,
        f = t.pathParams,
        _t$dropDownStates3 = t.dropDownStates,
        g = _t$dropDownStates3 === void 0 ? {} : _t$dropDownStates3,
        h = t.children,
        m = t.selectedNode,
        v = t.visibleNodeCount,
        b = t.totalBadgeNode,
        w = t.isProductSwitcherAvailable,
        S = t.productSwitcherConfig,
        y = t.openMobileDropDown,
        _ = t.nodeForMobile,
        C = t.profileItemsAvailable,
        _t$userInfo = t.userInfo,
        x = _t$userInfo === void 0 ? {} : _t$userInfo,
        k = t.urlAuthError,
        I = t.isGlobalSearchAvailable,
        T = t.isSearchFieldVisible,
        N = t.inputElem,
        $ = t.luigiCustomSearchRenderer__slot,
        P = t.displaySearchResult,
        E = t.displayCustomSearchResult,
        L = t.searchResult,
        R = ne("store"),
        A = !1,
        D = rt.getConfigValue("navigation.contextSwitcher");

    var O = /*#__PURE__*/function () {
      var _ref68 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
        var _e100;

        return regeneratorRuntime.wrap(function _callee59$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                if (!(p && 0 < p.length)) {
                  _context60.next = 5;
                  break;
                }

                _context60.next = 3;
                return At.generateTopNavNodes(p);

              case 3:
                _e100 = _context60.sent;
                n("children", h = _e100.children), n("selectedNode", m = _e100.selectedNode), n("visibleNodeCount", v = _e100.visibleNodeCount), n("totalBadgeNode", b = _e100.totalBadgeNode), window.TOPNAVDATA = _e100.children, r = p;

              case 5:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee59);
      }));

      return function O() {
        return _ref68.apply(this, arguments);
      };
    }();

    Q(function () {
      Ot.doOnStoreChange(R, function () {
        n("authorizationEnabled", s = ot.isAuthorizationEnabled()), n("profileItemsAvailable", C = rt.getConfigValue("navigation.profile")), n("autologinEnabled", l = !Boolean(rt.getConfigValue("auth.disableAutoLogin"))), n("isProductSwitcherAvailable", w = rt.getConfigValue("navigation.productSwitcher")), n("hideNavComponent", d = rt.getConfigBooleanValue("settings.hideNavigation")), n("responsiveNavSetting", u = rt.getConfigValue("settings.responsiveNavigation")), n("productSwitcherConfig", S = At.getProductSwitcherConfig()), n("isGlobalSearchAvailable", I = rt.getConfigValue("globalSearch"));
      }, ["navigation"]), Vt.addEventListener("message", function (e) {
        "luigi.navigation.update-badge-counters" === e.data.msg && O();
      });
    }), Y(function () {
      r && r == p || O(), n("isLoggedIn", c = Pt.isLoggedIn());
    });
    var V = t.showTopNav;

    function M(e) {
      n("openMobileDropDown", y = !0), n("nodeForMobile", _ = e);
    }

    function F() {
      n("openMobileDropDown", y = !1);
    }

    function U(e) {
      i("handleClick", {
        node: e
      });
    }

    function j(e) {
      var t = g || {},
          i = !t[e];
      G(), F(), t[e] = i, n("dropDownStates", g = t);
    }

    function B() {
      T || setTimeout(function () {
        N && N.focus();
      }), i("toggleSearch", {
        isSearchFieldVisible: T,
        inputElem: N,
        luigiCustomSearchRenderer__slot: $
      });
    }

    function G() {
      var e = g || {},
          t = Object.keys(e);
      t && t.length > 0 && t.forEach(function (t) {
        e[t] = !1, n("dropDownStates", g = e);
      });
    }

    function z() {
      document.body.classList.toggle("lui-leftNavToggle"), document.getElementsByClassName("fd-tabs").length > 0 && i("resizeTabNav", {});
    }

    function W() {
      Ze.buttonClicked(), document.getElementsByClassName("fd-tabs").length > 0 && i("resizeTabNav", {});
    }

    return e.$set = function (e) {
      "authorizationEnabled" in e && n("authorizationEnabled", s = e.authorizationEnabled), "autologinEnabled" in e && n("autologinEnabled", l = e.autologinEnabled), "isLoggedIn" in e && n("isLoggedIn", c = e.isLoggedIn), "hideNavComponent" in e && n("hideNavComponent", d = e.hideNavComponent), "responsiveNavSetting" in e && n("responsiveNavSetting", u = e.responsiveNavSetting), "pathData" in e && n("pathData", p = e.pathData), "pathParams" in e && n("pathParams", f = e.pathParams), "dropDownStates" in e && n("dropDownStates", g = e.dropDownStates), "children" in e && n("children", h = e.children), "selectedNode" in e && n("selectedNode", m = e.selectedNode), "visibleNodeCount" in e && n("visibleNodeCount", v = e.visibleNodeCount), "totalBadgeNode" in e && n("totalBadgeNode", b = e.totalBadgeNode), "isProductSwitcherAvailable" in e && n("isProductSwitcherAvailable", w = e.isProductSwitcherAvailable), "productSwitcherConfig" in e && n("productSwitcherConfig", S = e.productSwitcherConfig), "openMobileDropDown" in e && n("openMobileDropDown", y = e.openMobileDropDown), "nodeForMobile" in e && n("nodeForMobile", _ = e.nodeForMobile), "profileItemsAvailable" in e && n("profileItemsAvailable", C = e.profileItemsAvailable), "userInfo" in e && n("userInfo", x = e.userInfo), "urlAuthError" in e && n("urlAuthError", k = e.urlAuthError), "isGlobalSearchAvailable" in e && n("isGlobalSearchAvailable", I = e.isGlobalSearchAvailable), "isSearchFieldVisible" in e && n("isSearchFieldVisible", T = e.isSearchFieldVisible), "inputElem" in e && n("inputElem", N = e.inputElem), "luigiCustomSearchRenderer__slot" in e && n("luigiCustomSearchRenderer__slot", $ = e.luigiCustomSearchRenderer__slot), "displaySearchResult" in e && n("displaySearchResult", P = e.displaySearchResult), "displayCustomSearchResult" in e && n("displayCustomSearchResult", E = e.displayCustomSearchResult), "searchResult" in e && n("searchResult", L = e.searchResult), "showTopNav" in e && n("showTopNav", V = e.showTopNav);
    }, e.$$.update = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        authorizationEnabled: 1,
        autologinEnabled: 1,
        isLoggedIn: 1
      };
      (e.authorizationEnabled || e.autologinEnabled || e.isLoggedIn) && n("showTopNav", V = s && (!l || c) || !s);
    }, {
      authorizationEnabled: s,
      autologinEnabled: l,
      isLoggedIn: c,
      hideNavComponent: d,
      responsiveNavSetting: u,
      pathData: p,
      pathParams: f,
      dropDownStates: g,
      children: h,
      selectedNode: m,
      visibleNodeCount: v,
      totalBadgeNode: b,
      isProductSwitcherAvailable: w,
      productSwitcherConfig: S,
      openMobileDropDown: y,
      nodeForMobile: _,
      profileItemsAvailable: C,
      userInfo: x,
      urlAuthError: k,
      isGlobalSearchAvailable: I,
      isSearchFieldVisible: T,
      inputElem: N,
      luigiCustomSearchRenderer__slot: $,
      displaySearchResult: P,
      displayCustomSearchResult: E,
      searchResult: L,
      contextSwitcherToggle: A,
      selectedLabel: o,
      defaultLabelContextSwitcher: a,
      contextSwitcherConfig: D,
      showTopNav: V,
      getRouteLink: function getRouteLink(e) {
        return Dt.getNodeHref(e, f);
      },
      openMobileProductSwitcher: function openMobileProductSwitcher() {
        j("productSwitcherPopover");
      },
      openMobileContextSwitcher: function openMobileContextSwitcher() {
        n("contextSwitcherToggle", A = !A), j("contextSwitcherPopover");
      },
      openMobileTopNavDropDown: M,
      closeMobileTopNavDropDown: F,
      handleClick: U,
      handleSearchNavigation: function handleSearchNavigation(e) {
        i("handleSearchNavigation", {
          node: e
        });
      },
      handleClickExternal: function handleClickExternal(e) {
        U(e.detail.node);
      },
      toggleDropdownState: j,
      toggleDropdownStateExternal: function toggleDropdownStateExternal(e) {
        j(e.detail.name);
      },
      toggleSearch: B,
      closeAllDropdowns: G,
      burgerClickHandler: function burgerClickHandler() {
        "simple" === u || "simpleMobileOnly" === u ? z() : W();
      },
      simpleNav: z,
      semicollapsedNav: W,
      userInfoUpdate: function userInfoUpdate(e) {
        var t = e.detail;
        n("userInfo", x = t || {});
      },
      toggleSearch_handler: function toggleSearch_handler(t) {
        ie(e, t);
      },
      handleSearchNavigation_handler: function handleSearchNavigation_handler(t) {
        ie(e, t);
      },
      closeSearchResult_handler: function closeSearchResult_handler(t) {
        ie(e, t);
      },
      logotitle_dropDownStates_binding: function logotitle_dropDownStates_binding(e) {
        n("dropDownStates", g = e);
      },
      globalsearch_isSearchFieldVisible_binding: function globalsearch_isSearchFieldVisible_binding(e) {
        n("isSearchFieldVisible", T = e);
      },
      globalsearch_searchResult_binding: function globalsearch_searchResult_binding(e) {
        n("searchResult", L = e);
      },
      globalsearch_displaySearchResult_binding: function globalsearch_displaySearchResult_binding(e) {
        n("displaySearchResult", P = e);
      },
      globalsearch_displayCustomSearchResult_binding: function globalsearch_displayCustomSearchResult_binding(e) {
        n("displayCustomSearchResult", E = e);
      },
      globalsearch_inputElem_binding: function globalsearch_inputElem_binding(e) {
        n("inputElem", N = e);
      },
      globalsearch_luigiCustomSearchRenderer__slot_binding: function globalsearch_luigiCustomSearchRenderer__slot_binding(e) {
        n("luigiCustomSearchRenderer__slot", $ = e);
      },
      contextswitcher_dropDownStates_binding: function contextswitcher_dropDownStates_binding(e) {
        n("dropDownStates", g = e);
      },
      toggleDropdownState_handler: function toggleDropdownState_handler() {
        return j("contextSwitcherPopover");
      },
      click_handler: function click_handler(_ref69) {
        var e = _ref69.i;
        return j("dropDownPopover-".concat(e));
      },
      click_handler_2: function click_handler_2(_ref70) {
        var e = _ref70.node;
        return U(e);
      },
      click_handler_3: function click_handler_3() {
        return j("overflowPopover");
      },
      click_handler_5: function click_handler_5() {
        B(), j("overflowPopover");
      },
      click_handler_6: function click_handler_6(_ref71) {
        var e = _ref71.node;
        return U(e);
      },
      click_handler_7: function click_handler_7(_ref72) {
        var e = _ref72.node;
        return M(e);
      },
      productswitcher_dropDownStates_binding: function productswitcher_dropDownStates_binding(e) {
        n("dropDownStates", g = e);
      },
      toggleDropdownState_handler_1: function toggleDropdownState_handler_1() {
        return j("productSwitcherPopover");
      },
      contextswitcher_dropDownStates_binding_1: function contextswitcher_dropDownStates_binding_1(e) {
        n("dropDownStates", g = e);
      },
      contextswitcher_selectedLabel_binding: function contextswitcher_selectedLabel_binding(e) {
        n("selectedLabel", o = e);
      },
      contextswitcher_defaultLabel_binding: function contextswitcher_defaultLabel_binding(e) {
        n("defaultLabelContextSwitcher", a = e);
      },
      toggleDropdownState_handler_2: function toggleDropdownState_handler_2() {
        return j("contextSwitcherPopover");
      },
      click_handler_8: function click_handler_8() {
        return j("profilePopover");
      },
      toggleDropdownState_handler_3: function toggleDropdownState_handler_3() {
        return j("profilePopover");
      },
      productswitcher_dropDownStates_binding_1: function productswitcher_dropDownStates_binding_1(e) {
        n("dropDownStates", g = e);
      },
      toggleDropdownState_handler_4: function toggleDropdownState_handler_4() {
        return j("productSwitcherPopover");
      },
      toggleDropdownState_handler_5: function toggleDropdownState_handler_5() {
        return j("profilePopover");
      }
    };
  }

  var el = /*#__PURE__*/function (_Ae18) {
    _inherits(el, _Ae18);

    var _super22 = _createSuper(el);

    function el(e) {
      var _this55;

      _classCallCheck(this, el);

      _this55 = _super22.call(this), Re(_assertThisInitialized(_this55), e, Zs, Hs, d, ["authorizationEnabled", "autologinEnabled", "isLoggedIn", "hideNavComponent", "responsiveNavSetting", "pathData", "pathParams", "dropDownStates", "children", "selectedNode", "visibleNodeCount", "totalBadgeNode", "isProductSwitcherAvailable", "productSwitcherConfig", "openMobileDropDown", "nodeForMobile", "profileItemsAvailable", "userInfo", "urlAuthError", "isGlobalSearchAvailable", "isSearchFieldVisible", "inputElem", "luigiCustomSearchRenderer__slot", "displaySearchResult", "displayCustomSearchResult", "searchResult", "showTopNav", "openMobileProductSwitcher", "openMobileContextSwitcher", "openMobileTopNavDropDown", "closeMobileTopNavDropDown", "handleClick", "handleSearchNavigation", "handleClickExternal", "toggleDropdownState", "toggleDropdownStateExternal", "toggleSearch", "closeAllDropdowns", "simpleNav", "semicollapsedNav", "userInfoUpdate"]);
      return _this55;
    }

    _createClass(el, [{
      key: "openMobileProductSwitcher",
      get: function get() {
        return this.$$.ctx.openMobileProductSwitcher;
      }
    }, {
      key: "openMobileContextSwitcher",
      get: function get() {
        return this.$$.ctx.openMobileContextSwitcher;
      }
    }, {
      key: "openMobileTopNavDropDown",
      get: function get() {
        return this.$$.ctx.openMobileTopNavDropDown;
      }
    }, {
      key: "closeMobileTopNavDropDown",
      get: function get() {
        return this.$$.ctx.closeMobileTopNavDropDown;
      }
    }, {
      key: "handleClick",
      get: function get() {
        return this.$$.ctx.handleClick;
      }
    }, {
      key: "handleSearchNavigation",
      get: function get() {
        return this.$$.ctx.handleSearchNavigation;
      }
    }, {
      key: "handleClickExternal",
      get: function get() {
        return this.$$.ctx.handleClickExternal;
      }
    }, {
      key: "toggleDropdownState",
      get: function get() {
        return this.$$.ctx.toggleDropdownState;
      }
    }, {
      key: "toggleDropdownStateExternal",
      get: function get() {
        return this.$$.ctx.toggleDropdownStateExternal;
      }
    }, {
      key: "toggleSearch",
      get: function get() {
        return this.$$.ctx.toggleSearch;
      }
    }, {
      key: "closeAllDropdowns",
      get: function get() {
        return this.$$.ctx.closeAllDropdowns;
      }
    }, {
      key: "simpleNav",
      get: function get() {
        return this.$$.ctx.simpleNav;
      }
    }, {
      key: "semicollapsedNav",
      get: function get() {
        return this.$$.ctx.semicollapsedNav;
      }
    }, {
      key: "userInfoUpdate",
      get: function get() {
        return this.$$.ctx.userInfoUpdate;
      }
    }]);

    return el;
  }(Ae);

  n(415);
  var tl = Ne.Object,
      nl = Ne.window;

  function il(e, t, n) {
    var i = tl.create(e);
    return i.node = t[n], i;
  }

  function rl(e, t, n) {
    var i = tl.create(e);
    return i.node = t[n], i.index2 = n, i;
  }

  function ol(e, t, n) {
    var i = tl.create(e);
    return i.key = t[n][0], i.nodes = t[n][1], i.index = n, i;
  }

  function al(e, t, n) {
    var i = tl.create(e);
    return i.node = t[n], i;
  }

  function sl(e, t, n) {
    var i = tl.create(e);
    return i.node = t[n], i.index2 = n, i;
  }

  function ll(e, t, n) {
    var i = tl.create(e);
    return i.key = t[n][0], i.nodes = t[n][1], i.index = n, i;
  }

  function cl(e) {
    var t, n, i, r, o, a, s, _c46, d, u, _p21, f, g;

    var h = e.Object.entries(e.children),
        _m16 = [];

    for (var _t78 = 0; _t78 < h.length; _t78 += 1) {
      _m16[_t78] = bl(ll(e, h, _t78));
    }

    var v = e.Object.entries(e.children),
        b = [];

    for (var _t79 = 0; _t79 < v.length; _t79 += 1) {
      b[_t79] = Cl(ol(e, v, _t79));
    }

    return {
      c: function c() {
        t = P("nav"), n = P("div"), i = P("div");

        for (var _e101 = 0; _e101 < _m16.length; _e101 += 1) {
          _m16[_e101].c();
        }

        r = L(), o = P("div"), a = P("span"), s = P("div"), (_c46 = P("a")).innerHTML = '<span class="label fd-tabs__tag svelte-194k4id">More</span> <span class="sap-icon--dropdown luigi-icon--dropdown svelte-194k4id"></span>', d = L(), u = P("div"), _p21 = P("ul");

        for (var _e102 = 0; _e102 < b.length; _e102 += 1) {
          b[_e102].c();
        }

        V(i, "class", "tabsContainer luigi-tabsContainer svelte-194k4id"), V(n, "class", "tabsContainerWrapper svelte-194k4id"), V(_c46, "class", "fd-tabs__link fd-popover__control has-child luigi__more svelte-194k4id"), V(_c46, "aria-expanded", "false"), V(_c46, "role", "tab"), V(_p21, "class", "fd-nested-list fd-nested-list--compact fd-nested-list--text-only svelte-194k4id"), V(u, "class", "fd-popover__body fd-popover__body--right fd-popover__body--no-arrow"), V(u, "aria-hidden", f = !e.isMoreBtnExpanded), V(s, "class", "fd-popover fd-popover--right"), V(a, "class", "fd-tabs__item svelte-194k4id"), V(o, "class", "luigi-tabsMoreButton svelte-194k4id"), V(t, "class", "fd-tabs fd-tabs--l svelte-194k4id"), V(t, "role", "tablist"), V(t, "id", "tabsContainer"), g = [A(_c46, "click", D(e.toggleMoreBtn)), A(a, "click", Tl), A(t, "toggleDropdownState", e.toggleDropdownState_handler)];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i);

        for (var _e103 = 0; _e103 < _m16.length; _e103 += 1) {
          _m16[_e103].m(i, null);
        }

        I(t, r), I(t, o), I(o, a), I(a, s), I(s, _c46), I(s, d), I(s, u), I(u, _p21);

        for (var _e104 = 0; _e104 < b.length; _e104 += 1) {
          b[_e104].m(_p21, null);
        }
      },
      p: function p(e, t) {
        if (e.Object || e.children || e.virtualGroupPrefix || e.selectedNodeForTabNav || e.getRouteLink || e.$getTranslation || e.isSelectedCat || e.dropDownStates) {
          var _n49;

          for (h = t.Object.entries(t.children), _n49 = 0; _n49 < h.length; _n49 += 1) {
            var _r22 = ll(t, h, _n49);

            _m16[_n49] ? _m16[_n49].p(e, _r22) : (_m16[_n49] = bl(_r22), _m16[_n49].c(), _m16[_n49].m(i, null));
          }

          for (; _n49 < _m16.length; _n49 += 1) {
            _m16[_n49].d(1);
          }

          _m16.length = h.length;
        }

        if (e.Object || e.children || e.virtualGroupPrefix || e.getRouteLink || e.selectedNodeForTabNav || e.$getTranslation || e.dropDownStates || e.isSelectedCat) {
          var _n50;

          for (v = t.Object.entries(t.children), _n50 = 0; _n50 < v.length; _n50 += 1) {
            var _i60 = ol(t, v, _n50);

            b[_n50] ? b[_n50].p(e, _i60) : (b[_n50] = Cl(_i60), b[_n50].c(), b[_n50].m(_p21, null));
          }

          for (; _n50 < b.length; _n50 += 1) {
            b[_n50].d(1);
          }

          b.length = v.length;
        }

        e.isMoreBtnExpanded && f !== (f = !t.isMoreBtnExpanded) && V(u, "aria-hidden", f);
      },
      d: function d(e) {
        e && N(t), $(_m16, e), $(b, e), l(g);
      }
    };
  }

  function dl(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c47,
        d,
        u,
        _p22,
        f,
        g,
        h,
        _m17,
        v,
        b,
        w = e.$getTranslation(e.key) + "";

    function S() {
      return e.click_handler_1(e);
    }

    var y = e.nodes,
        _ = [];

    for (var _t80 = 0; _t80 < y.length; _t80 += 1) {
      _[_t80] = gl(al(e, y, _t80));
    }

    return {
      c: function c() {
        t = P("span"), n = P("div"), i = P("div"), r = P("a"), o = P("span"), a = E(w), s = L(), _c47 = P("span"), u = L(), _p22 = P("div"), f = P("nav"), g = P("ul");

        for (var _e105 = 0; _e105 < _.length; _e105 += 1) {
          _[_e105].c();
        }

        _m17 = L(), V(o, "class", "label fd-tabs__tag svelte-194k4id"), V(_c47, "class", "sap-icon--dropdown luigi-icon--dropdown svelte-194k4id"), V(r, "class", "fd-tabs__link has-child svelte-194k4id"), V(r, "aria-expanded", "false"), V(r, "role", "tab"), V(r, "aria-selected", d = kl(e.key, e.selectedNodeForTabNav)), V(i, "class", "fd-popover__control"), V(g, "class", "fd-menu__list fd-menu__list--no-shadow"), V(f, "class", "fd-menu"), V(_p22, "class", "fd-popover__body fd-popover__body--no-arrow"), V(_p22, "aria-hidden", h = !e.dropDownStates[e.key]), V(n, "class", "fd-popover"), V(t, "class", "fd-tabs__item svelte-194k4id"), V(t, "uid", e.index + "-0"), V(t, "isselected", v = kl(e.key, e.selectedNodeForTabNav)), b = [A(r, "click", D(S)), A(t, "click", Il)];
      },
      m: function m(e, l) {
        T(e, t, l), I(t, n), I(n, i), I(i, r), I(r, o), I(o, a), I(r, s), I(r, _c47), I(n, u), I(n, _p22), I(_p22, f), I(f, g);

        for (var _e106 = 0; _e106 < _.length; _e106 += 1) {
          _[_e106].m(g, null);
        }

        I(t, _m17);
      },
      p: function p(n, i) {
        if (e = i, (n.$getTranslation || n.children) && w !== (w = e.$getTranslation(e.key) + "") && M(a, w), (n.children || n.selectedNodeForTabNav) && d !== (d = kl(e.key, e.selectedNodeForTabNav)) && V(r, "aria-selected", d), n.Object || n.children || n.getRouteLink || n.selectedNodeForTabNav || n.$getTranslation) {
          var _t81;

          for (y = e.nodes, _t81 = 0; _t81 < y.length; _t81 += 1) {
            var _i61 = al(e, y, _t81);

            _[_t81] ? _[_t81].p(n, _i61) : (_[_t81] = gl(_i61), _[_t81].c(), _[_t81].m(g, null));
          }

          for (; _t81 < _.length; _t81 += 1) {
            _[_t81].d(1);
          }

          _.length = y.length;
        }

        (n.dropDownStates || n.children) && h !== (h = !e.dropDownStates[e.key]) && V(_p22, "aria-hidden", h), (n.children || n.selectedNodeForTabNav) && v !== (v = kl(e.key, e.selectedNodeForTabNav)) && V(t, "isselected", v);
      },
      d: function d(e) {
        e && N(t), $(_, e), l(b);
      }
    };
  }

  function ul(e) {
    var t;
    var n = e.nodes,
        i = [];

    for (var _t82 = 0; _t82 < n.length; _t82 += 1) {
      i[_t82] = vl(sl(e, n, _t82));
    }

    return {
      c: function c() {
        for (var _e107 = 0; _e107 < i.length; _e107 += 1) {
          i[_e107].c();
        }

        t = R();
      },
      m: function m(e, n) {
        for (var _t83 = 0; _t83 < i.length; _t83 += 1) {
          i[_t83].m(e, n);
        }

        T(e, t, n);
      },
      p: function p(e, r) {
        if (e.Object || e.children || e.selectedNodeForTabNav || e.getRouteLink || e.$getTranslation) {
          var _o27;

          for (n = r.nodes, _o27 = 0; _o27 < n.length; _o27 += 1) {
            var _a28 = sl(r, n, _o27);

            i[_o27] ? i[_o27].p(e, _a28) : (i[_o27] = vl(_a28), i[_o27].c(), i[_o27].m(t.parentNode, t));
          }

          for (; _o27 < i.length; _o27 += 1) {
            i[_o27].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        $(i, e), e && N(t);
      }
    };
  }

  function pl(e) {
    var t,
        n = e.node.label && fl(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.node.label ? n ? n.p(e, i) : ((n = fl(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function fl(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c48 = e.$getTranslation(e.node.label) + "";

    function d() {
      return e.click_handler_2(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(_c48), s = L(), V(i, "class", "fd-menu__title"), V(n, "href", o = e.getRouteLink(e.node)), V(n, "class", "fd-menu__link"), V(n, "aria-selected", a = e.node === e.selectedNodeForTabNav), V(t, "class", "fd-menu__item"), l = A(n, "click", D(d));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, s);
      },
      p: function p(t, i) {
        e = i, (t.$getTranslation || t.children) && _c48 !== (_c48 = e.$getTranslation(e.node.label) + "") && M(r, _c48), t.children && o !== (o = e.getRouteLink(e.node)) && V(n, "href", o), (t.children || t.selectedNodeForTabNav) && a !== (a = e.node === e.selectedNodeForTabNav) && V(n, "aria-selected", a);
      },
      d: function d(e) {
        e && N(t), l();
      }
    };
  }

  function gl(e) {
    var t,
        n = !e.node.hideFromNav && pl(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.node.hideFromNav ? n && (n.d(1), n = null) : n ? n.p(e, i) : ((n = pl(i)).c(), n.m(t.parentNode, t));
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function hl(e) {
    var t,
        n = e.node.label && ml(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.node.label ? n ? n.p(e, i) : ((n = ml(i)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function ml(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c49,
        d = e.$getTranslation(e.node.label) + "";

    function u() {
      return e.click_handler(e);
    }

    return {
      c: function c() {
        t = P("span"), n = P("a"), i = P("span"), r = E(d), s = L(), V(i, "class", "fd-tabs__tag"), V(n, "class", "fd-tabs__link"), V(n, "href", o = e.getRouteLink(e.node)), V(n, "role", "tab"), V(n, "aria-selected", a = e.node === e.selectedNodeForTabNav), V(t, "class", "fd-tabs__item svelte-194k4id"), V(t, "uid", e.index + "-" + e.index2), V(t, "isselected", l = e.node === e.selectedNodeForTabNav), _c49 = A(n, "click", D(u));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, s);
      },
      p: function p(i, s) {
        e = s, (i.$getTranslation || i.children) && d !== (d = e.$getTranslation(e.node.label) + "") && M(r, d), i.children && o !== (o = e.getRouteLink(e.node)) && V(n, "href", o), (i.children || i.selectedNodeForTabNav) && a !== (a = e.node === e.selectedNodeForTabNav) && V(n, "aria-selected", a), (i.children || i.selectedNodeForTabNav) && l !== (l = e.node === e.selectedNodeForTabNav) && V(t, "isselected", l);
      },
      d: function d(e) {
        e && N(t), _c49();
      }
    };
  }

  function vl(e) {
    var t,
        n = !e.node.hideFromNav && hl(e);
    return {
      c: function c() {
        n && n.c(), t = R();
      },
      m: function m(e, i) {
        n && n.m(e, i), T(e, t, i);
      },
      p: function p(e, i) {
        i.node.hideFromNav ? n && (n.d(1), n = null) : n ? n.p(e, i) : ((n = hl(i)).c(), n.m(t.parentNode, t));
      },
      d: function d(e) {
        n && n.d(e), e && N(t);
      }
    };
  }

  function bl(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.children || e.virtualGroupPrefix) && (t = !("undefined" !== n.key && 0 !== n.key.indexOf(n.virtualGroupPrefix))), t ? ul : dl;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function wl(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        _c50,
        d,
        u,
        _p23,
        f,
        g,
        h,
        m,
        v,
        b,
        w = e.$getTranslation(e.key) + "";

    function S() {
      return e.click_handler_5(e);
    }

    function y() {
      return e.click_handler_6(e);
    }

    var _ = e.nodes,
        C = [];

    for (var _t84 = 0; _t84 < _.length; _t84 += 1) {
      C[_t84] = yl(il(e, _, _t84));
    }

    return {
      c: function c() {
        t = P("li"), n = P("div"), i = P("a"), r = P("span"), o = E(w), _c50 = L(), d = P("button"), u = P("i"), g = L(), h = P("ul");

        for (var _e108 = 0; _e108 < C.length; _e108 += 1) {
          C[_e108].c();
        }

        v = L(), V(r, "class", "fd-nested-list__title"), V(i, "href", "javascript:void(null)"), V(i, "tabindex", "-1"), V(i, "class", "fd-nested-list__link"), V(i, "id", "tabnav_list_level1_" + e.index), V(i, "aria-haspopup", "true"), V(i, "aria-expanded", a = e.dropDownStates[e.key + e.index]), V(i, "aria-selected", s = kl(e.key, e.selectedNodeForTabNav)), V(u, "class", _p23 = e.dropDownStates[e.key + e.index] ? "sap-icon--navigation-down-arrow" : "sap-icon--navigation-right-arrow"), V(u, "role", "presentation"), V(d, "class", "fd-button fd-nested-list__button"), V(d, "href", "#"), V(d, "tabindex", "-1"), V(d, "aria-label", "Expand submenu"), V(d, "aria-haspopup", "true"), V(d, "aria-expanded", f = e.dropDownStates[e.key + e.index]), V(n, "class", "fd-nested-list__content has-child svelte-194k4id"), V(n, "tabindex", "0"), V(h, "class", "fd-nested-list level-2"), V(h, "aria-hidden", m = !e.dropDownStates[e.key + e.index]), V(t, "class", "fd-nested-list__item"), V(t, "uid", e.index + "-0"), b = [A(i, "click", D(S)), A(d, "click", D(y))];
      },
      m: function m(e, a) {
        T(e, t, a), I(t, n), I(n, i), I(i, r), I(r, o), I(n, _c50), I(n, d), I(d, u), I(t, g), I(t, h);

        for (var _e109 = 0; _e109 < C.length; _e109 += 1) {
          C[_e109].m(h, null);
        }

        I(t, v);
      },
      p: function p(t, n) {
        if (e = n, (t.$getTranslation || t.children) && w !== (w = e.$getTranslation(e.key) + "") && M(o, w), (t.dropDownStates || t.children) && a !== (a = e.dropDownStates[e.key + e.index]) && V(i, "aria-expanded", a), (t.children || t.selectedNodeForTabNav) && s !== (s = kl(e.key, e.selectedNodeForTabNav)) && V(i, "aria-selected", s), (t.dropDownStates || t.children) && _p23 !== (_p23 = e.dropDownStates[e.key + e.index] ? "sap-icon--navigation-down-arrow" : "sap-icon--navigation-right-arrow") && V(u, "class", _p23), (t.dropDownStates || t.children) && f !== (f = e.dropDownStates[e.key + e.index]) && V(d, "aria-expanded", f), t.getRouteLink || t.Object || t.children || t.selectedNodeForTabNav || t.$getTranslation) {
          var _n51;

          for (_ = e.nodes, _n51 = 0; _n51 < _.length; _n51 += 1) {
            var _i62 = il(e, _, _n51);

            C[_n51] ? C[_n51].p(t, _i62) : (C[_n51] = yl(_i62), C[_n51].c(), C[_n51].m(h, null));
          }

          for (; _n51 < C.length; _n51 += 1) {
            C[_n51].d(1);
          }

          C.length = _.length;
        }

        (t.dropDownStates || t.children) && m !== (m = !e.dropDownStates[e.key + e.index]) && V(h, "aria-hidden", m);
      },
      d: function d(e) {
        e && N(t), $(C, e), l(b);
      }
    };
  }

  function Sl(e) {
    var t;
    var n = e.nodes,
        i = [];

    for (var _t85 = 0; _t85 < n.length; _t85 += 1) {
      i[_t85] = _l(rl(e, n, _t85));
    }

    return {
      c: function c() {
        for (var _e110 = 0; _e110 < i.length; _e110 += 1) {
          i[_e110].c();
        }

        t = R();
      },
      m: function m(e, n) {
        for (var _t86 = 0; _t86 < i.length; _t86 += 1) {
          i[_t86].m(e, n);
        }

        T(e, t, n);
      },
      p: function p(e, r) {
        if (e.getRouteLink || e.Object || e.children || e.selectedNodeForTabNav || e.$getTranslation) {
          var _o28;

          for (n = r.nodes, _o28 = 0; _o28 < n.length; _o28 += 1) {
            var _a29 = rl(r, n, _o28);

            i[_o28] ? i[_o28].p(e, _a29) : (i[_o28] = _l(_a29), i[_o28].c(), i[_o28].m(t.parentNode, t));
          }

          for (; _o28 < i.length; _o28 += 1) {
            i[_o28].d(1);
          }

          i.length = n.length;
        }
      },
      d: function d(e) {
        $(i, e), e && N(t);
      }
    };
  }

  function yl(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c51 = e.$getTranslation(e.node.label) + "";

    function d() {
      return e.click_handler_7(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(_c51), s = L(), V(i, "class", "fd-nested-list__title"), V(n, "class", "fd-nested-list__link"), V(n, "href", o = e.getRouteLink(e.node)), V(n, "aria-selected", a = e.node === e.selectedNodeForTabNav), V(t, "class", "fd-nested-list__item"), V(t, "aria-labelledby", "tabnav_list_level1_" + e.index), l = A(n, "click", D(d));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, s);
      },
      p: function p(t, i) {
        e = i, (t.$getTranslation || t.children) && _c51 !== (_c51 = e.$getTranslation(e.node.label) + "") && M(r, _c51), t.children && o !== (o = e.getRouteLink(e.node)) && V(n, "href", o), (t.children || t.selectedNodeForTabNav) && a !== (a = e.node === e.selectedNodeForTabNav) && V(n, "aria-selected", a);
      },
      d: function d(e) {
        e && N(t), l();
      }
    };
  }

  function _l(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c52 = e.$getTranslation(e.node.label) + "";

    function d() {
      return e.click_handler_4(e);
    }

    return {
      c: function c() {
        t = P("li"), n = P("a"), i = P("span"), r = E(_c52), s = L(), V(i, "class", "fd-nested-list__title"), V(n, "href", o = e.getRouteLink(e.node)), V(n, "class", "fd-nested-list__link"), V(n, "aria-selected", a = e.node === e.selectedNodeForTabNav), V(t, "class", "fd-nested-list__item"), V(t, "uid", e.index + "-" + e.index2), l = A(n, "click", D(d));
      },
      m: function m(e, o) {
        T(e, t, o), I(t, n), I(n, i), I(i, r), I(t, s);
      },
      p: function p(t, i) {
        e = i, (t.$getTranslation || t.children) && _c52 !== (_c52 = e.$getTranslation(e.node.label) + "") && M(r, _c52), t.children && o !== (o = e.getRouteLink(e.node)) && V(n, "href", o), (t.children || t.selectedNodeForTabNav) && a !== (a = e.node === e.selectedNodeForTabNav) && V(n, "aria-selected", a);
      },
      d: function d(e) {
        e && N(t), l();
      }
    };
  }

  function Cl(e) {
    var t, n;

    function i(e, n) {
      return (null == t || e.children || e.virtualGroupPrefix) && (t = !("undefined" !== n.key && 0 !== n.key.indexOf(n.virtualGroupPrefix))), t ? Sl : wl;
    }

    var r = i(null, e),
        o = r(e);
    return {
      c: function c() {
        o.c(), n = R();
      },
      m: function m(e, t) {
        o.m(e, t), T(e, n, t);
      },
      p: function p(e, t) {
        r === (r = i(e, t)) && o ? o.p(e, t) : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
      },
      d: function d(e) {
        o.d(e), e && N(n);
      }
    };
  }

  function xl(e) {
    var t,
        n,
        r = e.children && e.pathData.length > 1 && cl(e);
    return {
      c: function c() {
        r && r.c(), t = R(), n = [A(nl, "click", e.closeAllDropdowns), A(nl, "blur", e.closeAllDropdowns), A(nl, "resize", e.onResize)];
      },
      m: function m(e, n) {
        r && r.m(e, n), T(e, t, n);
      },
      p: function p(e, n) {
        n.children && n.pathData.length > 1 ? r ? r.p(e, n) : ((r = cl(n)).c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
      },
      i: i,
      o: i,
      d: function d(e) {
        r && r.d(e), e && N(t), l(n);
      }
    };
  }

  function kl(e, t) {
    return t && t.category && (t.category === e || t.category.label === e);
  }

  var Il = function Il(e) {
    return e.stopPropagation();
  },
      Tl = function Tl(e) {
    return e.stopPropagation();
  };

  function Nl(e, t, n) {
    var i,
        r,
        o,
        a,
        s = t.children,
        l = t.pathData,
        c = t.pathParams,
        d = t.hideNavComponent,
        _t$virtualGroupPrefix2 = t.virtualGroupPrefix,
        u = _t$virtualGroupPrefix2 === void 0 ? At.virtualGroupPrefix : _t$virtualGroupPrefix2,
        p = t.selectedNodeForTabNav,
        _t$dropDownStates4 = t.dropDownStates,
        g = _t$dropDownStates4 === void 0 ? {} : _t$dropDownStates4,
        _t$isMoreBtnExpanded = t.isMoreBtnExpanded,
        h = _t$isMoreBtnExpanded === void 0 ? !1 : _t$isMoreBtnExpanded,
        m = t.resizeTabNavToggle,
        v = ne("getTranslation");
    f(e, v, function (e) {
      n("$getTranslation", i = e);
    });

    var b = function b() {
      return {
        children: s,
        pathData: l,
        hideNavComponent: d,
        virtualGroupPrefix: u,
        selectedNode: o,
        selectedNodeForTabNav: p,
        dropDownStates: g,
        isMoreBtnExpanded: h
      };
    },
        w = function w(e) {
      e && Object.getOwnPropertyNames(e).forEach(function (t) {
        "pathData" === t ? n("pathData", l = e.pathData) : "context" === t ? context = e.context : "children" === t ? n("children", s = e.children) : "selectedNode" === t ? o = e.selectedNode : "selectedNodeForTabNav" === t && n("selectedNodeForTabNav", p = e.selectedNodeForTabNav);
      });
    },
        S = ee(),
        y = /*#__PURE__*/function () {
      var _ref73 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
        var e, t;
        return regeneratorRuntime.wrap(function _callee60$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                e = b();

                _toConsumableArray(l).pop();

                _context61.next = 4;
                return ht.getTabNavData(_objectSpread({}, e), e);

              case 4:
                t = _context61.sent;
                t && (w(_objectSpread({}, t)), r = l, window.LEFTNAVDATA = t.groupedChildren, setTimeout(_));

              case 6:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee60);
      }));

      return function y() {
        return _ref73.apply(this, arguments);
      };
    }(),
        _ = function _() {
      C();
      var e,
          t,
          n,
          i = document.getElementsByClassName("luigi-tabsContainer")[0],
          r = document.getElementsByClassName("luigi-tabsMoreButton")[0],
          o = document.getElementsByClassName("luigi__more")[0],
          a = 0,
          s = !1,
          l = b();
      l.pathData[l.pathData.length - 1];

      if (o.setAttribute("aria-selected", "false"), i) {
        e = i.offsetWidth, _toConsumableArray(i.children).forEach(function (i) {
          t = i.currentStyle || window.getComputedStyle(i), n = parseFloat(t.marginLeft) + parseFloat(t.marginRight), a += i.offsetWidth + n;
          var r = i.getAttribute("uid");
          a >= e ? (i.classList.add("hide_element"), "true" === i.getAttribute("isSelected") && o.setAttribute("aria-selected", "true"), document.querySelector('li[uid="' + r + '"]').classList.remove("hide_element"), s = !0) : document.querySelector('li[uid="' + r + '"]').classList.add("hide_element");
        }), s ? r.classList.remove("hide_element") : r.classList.add("hide_element");
      }
    },
        C = function C() {
      var e = document.getElementsByClassName("luigi-tabsContainer")[0];
      document.getElementsByClassName("luigi__more")[0];

      _toConsumableArray(e.children).forEach(function (e) {
        e.classList.remove("hide_element");
      });
    };

    function x(e) {
      I(), S("handleClick", {
        node: e
      });
    }

    function k(e) {
      var t = {};
      g[e] || (t[e] = !0), n("dropDownStates", g = t);
    }

    function I() {
      n("dropDownStates", g = {}), n("isMoreBtnExpanded", h = !1);
    }

    Q(function () {
      n("hideNavComponent", d = rt.getConfigBooleanValue("settings.hideNavigation"));
    }), Y(function () {
      r && r == l || y(), void 0 !== a && a === m || (a = m, y());
    });
    return e.$set = function (e) {
      "children" in e && n("children", s = e.children), "pathData" in e && n("pathData", l = e.pathData), "pathParams" in e && n("pathParams", c = e.pathParams), "hideNavComponent" in e && n("hideNavComponent", d = e.hideNavComponent), "virtualGroupPrefix" in e && n("virtualGroupPrefix", u = e.virtualGroupPrefix), "selectedNodeForTabNav" in e && n("selectedNodeForTabNav", p = e.selectedNodeForTabNav), "dropDownStates" in e && n("dropDownStates", g = e.dropDownStates), "isMoreBtnExpanded" in e && n("isMoreBtnExpanded", h = e.isMoreBtnExpanded), "resizeTabNavToggle" in e && n("resizeTabNavToggle", m = e.resizeTabNavToggle);
    }, {
      children: s,
      pathData: l,
      pathParams: c,
      hideNavComponent: d,
      virtualGroupPrefix: u,
      selectedNodeForTabNav: p,
      dropDownStates: g,
      isMoreBtnExpanded: h,
      resizeTabNavToggle: m,
      getTranslation: v,
      getRouteLink: function getRouteLink(e) {
        return Dt.getNodeHref(e, c);
      },
      handleClick: x,
      toggleDropdownState: k,
      closeAllDropdowns: I,
      onResize: function onResize() {
        C(), _();
      },
      toggleMoreBtn: function toggleMoreBtn() {
        n("isMoreBtnExpanded", h = !h);
      },
      Object: Object,
      $getTranslation: i,
      click_handler: function click_handler(_ref74) {
        var e = _ref74.node;
        return x(e);
      },
      click_handler_1: function click_handler_1(_ref75) {
        var e = _ref75.key;
        return k(e);
      },
      click_handler_2: function click_handler_2(_ref76) {
        var e = _ref76.node;
        return x(e);
      },
      click_handler_4: function click_handler_4(_ref77) {
        var e = _ref77.node;
        return x(e);
      },
      click_handler_5: function click_handler_5(_ref78) {
        var e = _ref78.key,
            t = _ref78.index;
        return k(e + t);
      },
      click_handler_6: function click_handler_6(_ref79) {
        var e = _ref79.key,
            t = _ref79.index;
        return k(e + t);
      },
      click_handler_7: function click_handler_7(_ref80) {
        var e = _ref80.node;
        return x(e);
      },
      toggleDropdownState_handler: function toggleDropdownState_handler(e) {
        return k(e.name);
      }
    };
  }

  var $l = /*#__PURE__*/function (_Ae19) {
    _inherits($l, _Ae19);

    var _super23 = _createSuper($l);

    function $l(e) {
      var _this56;

      _classCallCheck(this, $l);

      _this56 = _super23.call(this), Re(_assertThisInitialized(_this56), e, Nl, xl, d, ["children", "pathData", "pathParams", "hideNavComponent", "virtualGroupPrefix", "selectedNodeForTabNav", "dropDownStates", "isMoreBtnExpanded", "resizeTabNavToggle", "handleClick", "toggleDropdownState", "closeAllDropdowns", "onResize", "toggleMoreBtn"]);
      return _this56;
    }

    _createClass($l, [{
      key: "handleClick",
      get: function get() {
        return this.$$.ctx.handleClick;
      }
    }, {
      key: "toggleDropdownState",
      get: function get() {
        return this.$$.ctx.toggleDropdownState;
      }
    }, {
      key: "closeAllDropdowns",
      get: function get() {
        return this.$$.ctx.closeAllDropdowns;
      }
    }, {
      key: "onResize",
      get: function get() {
        return this.$$.ctx.onResize;
      }
    }, {
      key: "toggleMoreBtn",
      get: function get() {
        return this.$$.ctx.toggleMoreBtn;
      }
    }]);

    return $l;
  }(Ae);

  var Pl = "not_checked";
  Vt.addEventListener("message", function (e) {
    "luigi.tpcDisabled" === e.data ? (console.warn("Third party cookies are not supported! Silent token renewal might not work!"), Pl = "disabled") : "luigi.tpcEnabled" === e.data && (Pl = "enabled");
  }, !1);
  n(416);
  var El = Ne.window;

  function Ll(e) {
    var t,
        n = new zt({
      props: {
        alertQueue: e.alerts
      }
    });
    return n.$on("alertDismiss", e.handleAlertDismissExternal), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.alerts && (i.alertQueue = t.alerts), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Rl(e) {
    var t,
        n = new un({
      props: {
        settings: e.mfModal.settings,
        nodepath: e.mfModal.nodepath
      }
    });
    return n.$on("close", e.closeModal), n.$on("iframeCreated", e.modalIframeCreated), n.$on("wcCreated", e.modalWCCreated), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.mfModal && (i.settings = t.mfModal.settings), e.mfModal && (i.nodepath = t.mfModal.nodepath), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Al(e) {
    var t,
        n = new un({
      props: {
        settings: e.mfDrawer.settings,
        nodepath: e.mfDrawer.nodepath,
        $$slots: {
          "default": [Dl]
        },
        $$scope: {
          ctx: e
        }
      }
    });
    return n.$on("close", e.closeDrawer), n.$on("drawerState", e.setDrawerState), n.$on("iframeCreated", e.drawerIframeCreated), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.mfDrawer && (i.settings = t.mfDrawer.settings), e.mfDrawer && (i.nodepath = t.mfDrawer.nodepath), (e.$$scope || e.disableBackdrop) && (i.$$scope = {
          changed: e,
          ctx: t
        }), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Dl(e) {
    var t,
        n = new nn({
      props: {
        area: "drawer",
        disable: e.disableBackdrop
      }
    });
    return {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.disableBackdrop && (i.disable = t.disableBackdrop), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Ol(e) {
    var t,
        n = new Zt({
      props: {
        settings: e.confirmationModal.settings
      }
    });
    return n.$on("modalConfirm", e.modalConfirm_handler), n.$on("modalDismiss", e.modalDismiss_handler), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.confirmationModal && (i.settings = t.confirmationModal.settings), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Vl(e) {
    var t, n;

    function i(n) {
      e.usersettingsdialog_storedUserSettings_binding.call(null, n), t = !0, fe(function () {
        return t = !1;
      });
    }

    var r = {
      userSettingGroups: e.internalUserSettingsObject.userSettingGroups
    };
    void 0 !== e.storedUserSettings && (r.storedUserSettings = e.storedUserSettings);
    var o = new Yn({
      props: r
    });
    return oe.push(function () {
      return Pe(o, "storedUserSettings", i);
    }), o.$on("close", e.closeUserSettings), {
      c: function c() {
        o.$$.fragment.c();
      },
      m: function m(e, t) {
        Ee(o, e, t), n = !0;
      },
      p: function p(e, n) {
        var i = {};
        e.internalUserSettingsObject && (i.userSettingGroups = n.internalUserSettingsObject.userSettingGroups), !t && e.storedUserSettings && (i.storedUserSettings = n.storedUserSettings), o.$set(i);
      },
      i: function i(e) {
        n || (_e(o.$$.fragment, e), n = !0);
      },
      o: function (_o29) {
        function o(_x68) {
          return _o29.apply(this, arguments);
        }

        o.toString = function () {
          return _o29.toString();
        };

        return o;
      }(function (e) {
        Ce(o.$$.fragment, e), n = !1;
      }),
      d: function d(e) {
        Le(o, e);
      }
    };
  }

  function Ml(e) {
    var t,
        n = new ii({
      props: {
        splitViewSettings: e.mfSplitView.settings,
        collapsed: e.mfSplitView.collapsed,
        nodepath: e.mfSplitView.nodepath,
        disableBackdrop: e.disableBackdrop
      }
    });
    return n.$on("iframeCreated", e.splitViewIframeCreated), n.$on("statusChanged", e.splitViewStatusChanged), n.$on("wcCreated", e.splitViewWCCreated), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.mfSplitView && (i.splitViewSettings = t.mfSplitView.settings), e.mfSplitView && (i.collapsed = t.mfSplitView.collapsed), e.mfSplitView && (i.nodepath = t.mfSplitView.nodepath), e.disableBackdrop && (i.disableBackdrop = t.disableBackdrop), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Fl(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        _c53 = new nn({
      props: {
        area: "main",
        disable: e.disableBackdrop
      }
    }),
        _d12 = e.mfSplitView.displayed && Ml(e);

    return {
      c: function c() {
        t = P("div"), _c53.$$.fragment.c(), n = L(), i = P("div"), a = L(), _d12 && _d12.c(), s = R(), V(i, "class", "wcContainer svelte-1m6bnzt"), V(t, "class", r = "fd-page iframeContainer " + (e.mfSplitView.displayed ? "lui-split-view" : "") + " " + (e.mfSplitView.collapsed ? "lui-collapsed" : "") + " svelte-1m6bnzt"), V(t, "tabindex", "0");
      },
      m: function m(r, u) {
        T(r, t, u), Ee(_c53, t, null), I(t, n), I(t, i), o = e.init.call(null, t) || {}, T(r, a, u), _d12 && _d12.m(r, u), T(r, s, u), l = !0;
      },
      p: function p(e, n) {
        var i = {};
        e.disableBackdrop && (i.disable = n.disableBackdrop), _c53.$set(i), l && !e.mfSplitView || r === (r = "fd-page iframeContainer " + (n.mfSplitView.displayed ? "lui-split-view" : "") + " " + (n.mfSplitView.collapsed ? "lui-collapsed" : "") + " svelte-1m6bnzt") || V(t, "class", r), n.mfSplitView.displayed ? _d12 ? (_d12.p(e, n), _e(_d12, 1)) : ((_d12 = Ml(n)).c(), _e(_d12, 1), _d12.m(s.parentNode, s)) : _d12 && (Se(), Ce(_d12, 1, 1, function () {
          _d12 = null;
        }), ye());
      },
      i: function i(e) {
        l || (_e(_c53.$$.fragment, e), _e(_d12), l = !0);
      },
      o: function o(e) {
        Ce(_c53.$$.fragment, e), Ce(_d12), l = !1;
      },
      d: function d(e) {
        e && N(t), Le(_c53), o && "function" == typeof o.destroy && o.destroy(), e && N(a), _d12 && _d12.d(e), e && N(s);
      }
    };
  }

  function Ul(e) {
    var t, n, _i63, r;

    return {
      c: function c() {
        (t = P("div")).innerHTML = '<div class="fd-busy-indicator--m svelte-1m6bnzt" aria-hidden="false" aria-label="Loading" data-testid="luigi-loading-spinner"><div class="fd-busy-indicator--circle-0 svelte-1m6bnzt"></div> <div class="fd-busy-indicator--circle-1 svelte-1m6bnzt"></div> <div class="fd-busy-indicator--circle-2 svelte-1m6bnzt"></div></div>', V(t, "class", "fd-page spinnerContainer svelte-1m6bnzt"), V(t, "aria-hidden", "false"), V(t, "aria-label", "Loading");
      },
      m: function m(e, n) {
        T(e, t, n), r = !0;
      },
      i: function i(e) {
        r || (pe(function () {
          _i63 && _i63.end(1), n || (n = ke(t, rn, {
            delay: 250,
            duration: 250
          })), n.start();
        }), r = !0);
      },
      o: function o(e) {
        n && n.invalidate(), _i63 = Ie(t, rn, {
          duration: 250
        }), r = !1;
      },
      d: function d(e) {
        e && (N(t), _i63 && _i63.end());
      }
    };
  }

  function jl(e) {
    var t,
        n = new mr({
      props: {
        pathData: e.navigationPath,
        pathParams: e.pathParams
      }
    });
    return n.$on("handleClick", e.handleNavClick), n.$on("resizeTabNav", e.onResizeTabNav), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.navigationPath && (i.pathData = t.navigationPath), e.pathParams && (i.pathParams = t.pathParams), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Bl(e) {
    var t,
        n = new $l({
      props: {
        pathData: e.navigationPath,
        pathParams: e.pathParams,
        resizeTabNavToggle: e.resizeTabNavToggle
      }
    });
    return n.$on("handleClick", e.handleNavClick), {
      c: function c() {
        n.$$.fragment.c();
      },
      m: function m(e, i) {
        Ee(n, e, i), t = !0;
      },
      p: function p(e, t) {
        var i = {};
        e.navigationPath && (i.pathData = t.navigationPath), e.pathParams && (i.pathParams = t.pathParams), e.resizeTabNavToggle && (i.resizeTabNavToggle = t.resizeTabNavToggle), n.$set(i);
      },
      i: function i(e) {
        t || (_e(n.$$.fragment, e), t = !0);
      },
      o: function o(e) {
        Ce(n.$$.fragment, e), t = !1;
      },
      d: function d(e) {
        Le(n, e);
      }
    };
  }

  function Gl(e) {
    var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        _p24,
        f,
        g,
        h,
        _m18,
        v,
        b,
        w,
        S = e.alerts && e.alerts.length && Ll(e),
        y = e.mfModal.displayed && Rl(e),
        _ = e.mfDrawer.displayed && e.mfDrawer.settings.isDrawer && Al(e),
        C = e.confirmationModal.displayed && Ol(e),
        x = e.internalUserSettingsObject.displayed && Vl(e),
        k = new nn({
      props: {
        disable: e.disableBackdrop,
        $$slots: {
          "default": [Fl]
        },
        $$scope: {
          ctx: e
        }
      }
    }),
        $ = e.showLoadingIndicator && Ul();

    function E(t) {
      e.topnav_isSearchFieldVisible_binding.call(null, t), c = !0, fe(function () {
        return c = !1;
      });
    }

    function R(t) {
      e.topnav_displaySearchResult_binding.call(null, t), d = !0, fe(function () {
        return d = !1;
      });
    }

    function D(t) {
      e.topnav_displayCustomSearchResult_binding.call(null, t), u = !0, fe(function () {
        return u = !1;
      });
    }

    function O(t) {
      e.topnav_searchResult_binding.call(null, t), _p24 = !0, fe(function () {
        return _p24 = !1;
      });
    }

    function M(t) {
      e.topnav_inputElem_binding.call(null, t), f = !0, fe(function () {
        return f = !1;
      });
    }

    function F(t) {
      e.topnav_luigiCustomSearchRenderer__slot_binding.call(null, t), g = !0, fe(function () {
        return g = !1;
      });
    }

    var U = {
      pathData: e.navigationPath,
      pathParams: e.pathParams
    };
    void 0 !== e.isSearchFieldVisible && (U.isSearchFieldVisible = e.isSearchFieldVisible), void 0 !== e.displaySearchResult && (U.displaySearchResult = e.displaySearchResult), void 0 !== e.displayCustomSearchResult && (U.displayCustomSearchResult = e.displayCustomSearchResult), void 0 !== e.searchResult && (U.searchResult = e.searchResult), void 0 !== e.inputElem && (U.inputElem = e.inputElem), void 0 !== e.luigiCustomSearchRenderer__slot && (U.luigiCustomSearchRenderer__slot = e.luigiCustomSearchRenderer__slot);
    var j = new el({
      props: U
    });
    oe.push(function () {
      return Pe(j, "isSearchFieldVisible", E);
    }), oe.push(function () {
      return Pe(j, "displaySearchResult", R);
    }), oe.push(function () {
      return Pe(j, "displayCustomSearchResult", D);
    }), oe.push(function () {
      return Pe(j, "searchResult", O);
    }), oe.push(function () {
      return Pe(j, "inputElem", M);
    }), oe.push(function () {
      return Pe(j, "luigiCustomSearchRenderer__slot", F);
    }), j.$on("handleClick", e.handleNavClick), j.$on("resizeTabNav", e.onResizeTabNav), j.$on("toggleSearch", e.toggleSearch), j.$on("closeSearchResult", e.closeSearchResult), j.$on("handleSearchNavigation", e.handleSearchNavigation);
    var B = !(e.hideNav || e.hideSideNav) && jl(e),
        G = e.tabNav && !e.hideNav && Bl(e);
    return {
      c: function c() {
        t = P("div"), S && S.c(), n = L(), y && y.c(), i = L(), _ && _.c(), r = L(), C && C.c(), o = L(), x && x.c(), a = L(), k.$$.fragment.c(), s = L(), $ && $.c(), l = L(), j.$$.fragment.c(), h = L(), B && B.c(), _m18 = L(), G && G.c(), V(t, "id", "app"), V(t, "class", v = (e.hideNav ? "no-nav" : "") + " " + (e.hideSideNav ? "no-side-nav" : "") + " svelte-1m6bnzt"), w = A(El, "resize", e.onResize);
      },
      m: function m(e, c) {
        T(e, t, c), S && S.m(t, null), I(t, n), y && y.m(t, null), I(t, i), _ && _.m(t, null), I(t, r), C && C.m(t, null), I(t, o), x && x.m(t, null), I(t, a), Ee(k, t, null), I(t, s), $ && $.m(t, null), I(t, l), Ee(j, t, null), I(t, h), B && B.m(t, null), I(t, _m18), G && G.m(t, null), b = !0;
      },
      p: function p(e, s) {
        s.alerts && s.alerts.length ? S ? (S.p(e, s), _e(S, 1)) : ((S = Ll(s)).c(), _e(S, 1), S.m(t, n)) : S && (Se(), Ce(S, 1, 1, function () {
          S = null;
        }), ye()), s.mfModal.displayed ? y ? (y.p(e, s), _e(y, 1)) : ((y = Rl(s)).c(), _e(y, 1), y.m(t, i)) : y && (Se(), Ce(y, 1, 1, function () {
          y = null;
        }), ye()), s.mfDrawer.displayed && s.mfDrawer.settings.isDrawer ? _ ? (_.p(e, s), _e(_, 1)) : ((_ = Al(s)).c(), _e(_, 1), _.m(t, r)) : _ && (Se(), Ce(_, 1, 1, function () {
          _ = null;
        }), ye()), s.confirmationModal.displayed ? C ? (C.p(e, s), _e(C, 1)) : ((C = Ol(s)).c(), _e(C, 1), C.m(t, o)) : C && (Se(), Ce(C, 1, 1, function () {
          C = null;
        }), ye()), s.internalUserSettingsObject.displayed ? x ? (x.p(e, s), _e(x, 1)) : ((x = Vl(s)).c(), _e(x, 1), x.m(t, a)) : x && (Se(), Ce(x, 1, 1, function () {
          x = null;
        }), ye());
        var h = {};
        e.disableBackdrop && (h.disable = s.disableBackdrop), (e.$$scope || e.mfSplitView || e.disableBackdrop) && (h.$$scope = {
          changed: e,
          ctx: s
        }), k.$set(h), s.showLoadingIndicator ? $ ? _e($, 1) : (($ = Ul()).c(), _e($, 1), $.m(t, l)) : $ && (Se(), Ce($, 1, 1, function () {
          $ = null;
        }), ye());
        var w = {};
        e.navigationPath && (w.pathData = s.navigationPath), e.pathParams && (w.pathParams = s.pathParams), !c && e.isSearchFieldVisible && (w.isSearchFieldVisible = s.isSearchFieldVisible), !d && e.displaySearchResult && (w.displaySearchResult = s.displaySearchResult), !u && e.displayCustomSearchResult && (w.displayCustomSearchResult = s.displayCustomSearchResult), !_p24 && e.searchResult && (w.searchResult = s.searchResult), !f && e.inputElem && (w.inputElem = s.inputElem), !g && e.luigiCustomSearchRenderer__slot && (w.luigiCustomSearchRenderer__slot = s.luigiCustomSearchRenderer__slot), j.$set(w), s.hideNav || s.hideSideNav ? B && (Se(), Ce(B, 1, 1, function () {
          B = null;
        }), ye()) : B ? (B.p(e, s), _e(B, 1)) : ((B = jl(s)).c(), _e(B, 1), B.m(t, _m18)), s.tabNav && !s.hideNav ? G ? (G.p(e, s), _e(G, 1)) : ((G = Bl(s)).c(), _e(G, 1), G.m(t, null)) : G && (Se(), Ce(G, 1, 1, function () {
          G = null;
        }), ye()), b && !e.hideNav && !e.hideSideNav || v === (v = (s.hideNav ? "no-nav" : "") + " " + (s.hideSideNav ? "no-side-nav" : "") + " svelte-1m6bnzt") || V(t, "class", v);
      },
      i: function i(e) {
        b || (_e(S), _e(y), _e(_), _e(C), _e(x), _e(k.$$.fragment, e), _e($), _e(j.$$.fragment, e), _e(B), _e(G), b = !0);
      },
      o: function o(e) {
        Ce(S), Ce(y), Ce(_), Ce(C), Ce(x), Ce(k.$$.fragment, e), Ce($), Ce(j.$$.fragment, e), Ce(B), Ce(G), b = !1;
      },
      d: function d(e) {
        e && N(t), S && S.d(), y && y.d(), _ && _.d(), C && C.d(), x && x.d(), Le(k), $ && $.d(), Le(j), B && B.d(), G && G.d(), w();
      }
    };
  }

  function zl(e, t, n) {
    var i = ee();

    var r,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        p,
        f,
        g,
        h,
        m,
        v,
        b,
        w,
        S,
        y,
        _,
        C,
        x,
        k,
        I,
        T,
        N,
        $,
        P,
        E,
        L,
        R,
        A,
        D,
        O,
        V,
        M = t.store,
        F = t.getTranslation,
        U = !1,
        j = {
      displayed: !1
    },
        B = !1,
        G = !0,
        z = !1,
        W = [],
        H = {
      isDirty: !1,
      persistUrl: null
    },
        q = !1,
        K = {},
        J = t.isSearchFieldVisible,
        Y = t.inputElem,
        Z = t.luigiCustomSearchRenderer__slot,
        ne = t.displaySearchResult,
        _t$displayCustomSearc = t.displayCustomSearchResult,
        ie = _t$displayCustomSearc === void 0 ? !0 : _t$displayCustomSearc,
        re = t.searchResult,
        oe = t.storedUserSettings;

    var ae = /*#__PURE__*/function () {
      var _ref81 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee61(e) {
        var t, n, i, r, o;
        return regeneratorRuntime.wrap(function _callee61$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                t = e.iframe.luigi;
                V = ut.getActiveFeatureToggleList();
                n = t.currentNode && t.currentNode.userSettingsGroup;
                _context62.next = 5;
                return rt.readUserSettings();

              case 5:
                i = _context62.sent;
                r = n && "object" == _typeof(i) && null !== i;
                o = {
                  isNavigateBack: z,
                  viewStackSize: W.length,
                  activeFeatureToggleList: V,
                  currentLocale: st.getCurrentLocale(),
                  currentTheme: dt.getCurrentTheme(),
                  clientPermissions: t.nextViewUrl ? t.nextClientPermissions : t.clientPermissions,
                  userSettings: r ? i[n] : null
                };
                return _context62.abrupt("return", (Rt.specialIframeTypes.map(function (e) {
                  return e.iframeConfigKey;
                }).forEach(function (t) {
                  o[t] = e[t] || !1;
                }), o));

              case 9:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee61);
      }));

      return function ae(_x69) {
        return _ref81.apply(this, arguments);
      };
    }(),
        se = /*#__PURE__*/function () {
      var _ref82 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee62(e) {
        var t,
            n,
            _args63 = arguments;
        return regeneratorRuntime.wrap(function _callee62$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                t = _args63.length > 1 && _args63[1] !== undefined ? _args63[1] : {};

                if (e.iframe) {
                  _context63.next = 3;
                  break;
                }

                return _context63.abrupt("return", void console.info("iframe does not exist, not able to send context."));

              case 3:
                _context63.t0 = JSON.stringify(Object.assign({}, e.context || w, t));
                _context63.t1 = JSON.stringify(Object.assign({}, e.nodeParams || S));
                _context63.t2 = JSON.stringify(Object.assign({}, e.pathParams || y));
                _context63.t3 = JSON;
                _context63.next = 9;
                return ae(e);

              case 9:
                _context63.t4 = _context63.sent;
                _context63.t5 = _context63.t3.stringify.call(_context63.t3, _context63.t4);
                _context63.t6 = Pt.getStoredAuthData();
                n = {
                  msg: "luigi.init",
                  context: _context63.t0,
                  nodeParams: _context63.t1,
                  pathParams: _context63.t2,
                  internal: _context63.t5,
                  authData: _context63.t6
                };
                Rt.sendMessageToIframe(e.iframe, n);

              case 14:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee62);
      }));

      return function se(_x70) {
        return _ref82.apply(this, arguments);
      };
    }(),
        le = function le(e) {
      var t = {
        msg: "luigi.auth.tokenIssued",
        authData: e
      };
      Rt.broadcastMessageToAllIframes(t);
    },
        ce = function ce(e, t) {
      var n = he(e.params);
      n = Lt.addLeadingSlash(n), function (e, t) {
        if (e.params.preserveView || e.params.viewgroup) {
          var _n52 = he(e.params);

          W.push({
            path: xt.getNodePath(C, _),
            nextPath: _n52.startsWith("/") ? _n52 : "/" + _n52,
            context: w
          }), t.iframe.pv = "pv";
        }
      }(e, t), xt.navigateTo(n, !0, G);
    },
        de = function de(e) {
      return e.split("?")[0];
    },
        ue = function ue(e) {
      return new Promise(function (t) {
        Le(e) ? Re().then(function () {
          H && H.dirtySet && (e ? H.dirtySet["delete"](e) : H.dirtySet.clear()), t();
        }, function () {}) : t();
      });
    },
        pe = function pe() {
      return {
        get: function get() {
          return {
            unsavedChanges: H,
            hideNav: Se,
            viewUrl: x,
            nodeParams: S,
            viewGroup: k,
            urlParamsRaw: _,
            currentNode: C,
            navigationPath: P,
            context: w,
            pathParams: y,
            hideSideNav: ye,
            isolateView: I,
            pageErrorHandler: T,
            previousNodeValues: N,
            mfSplitView: j,
            splitViewValues: r,
            splitViewIframe: g,
            splitViewWC: m,
            showLoadingIndicator: U,
            tabNav: A,
            isNavigateBack: z,
            goBackContext: $,
            isNavigationSyncEnabled: G
          };
        },
        set: function set(e) {
          e && Object.getOwnPropertyNames(e).forEach(function (t) {
            "hideNav" === t ? n("hideNav", Se = e.hideNav) : "viewUrl" === t ? x = e.viewUrl : "nodeParams" === t ? S = e.nodeParams : "viewGroup" === t ? k = e.viewGroup : "urlParamsRaw" === t ? _ = e.urlParamsRaw : "currentNode" === t ? C = e.currentNode : "navigationPath" === t ? n("navigationPath", P = e.navigationPath) : "context" === t ? w = e.context : "pathParams" === t ? n("pathParams", y = e.pathParams) : "hideSideNav" === t ? n("hideSideNav", ye = e.hideSideNav) : "isolateView" === t ? I = e.isolateView : "pageErrorHandler" === t ? T = e.pageErrorHandler : "previousNodeValues" === t ? N = e.previousNodeValues : "mfSplitView" === t ? n("mfSplitView", j = e.mfSplitView) : "splitViewValues" === t ? r = e.splitViewValues : "splitViewIframe" === t ? g = e.splitViewIframe : "splitViewWC" == t ? m = e.splitViewWC : "showLoadingIndicator" === t ? n("showLoadingIndicator", U = e.showLoadingIndicator) : "tabNav" === t ? n("tabNav", A = e.tabNav) : "isNavigateBack" === t ? z = e.isNavigateBack : "goBackContext" === t ? $ = e.goBackContext : "isNavigationSyncEnabled" === t && (G = e.isNavigationSyncEnabled);
          });
        },
        shouldShowUnsavedChangesModal: Le,
        getUnsavedChangesModalPromise: ue,
        showUnsavedChangesModal: Re,
        showAlert: Ie,
        prepareInternalData: ae,
        dispatch: i
      };
    },
        fe = function fe(e, t) {
      Ot.doOnStoreChange(M, function () {
        gt.deleteCache();
        var n = xt.getCurrentPath();
        xt.handleRouteChange(n, pe(), e, t);
      }, ["navigation.nodes"]), Dt.addRouteChangeListener(function (n, i) {
        (function (e, t) {
          if (0 === e.length) return !1;

          var n = t.startsWith("/") ? t : "/".concat(t),
              i = _toConsumableArray(e).pop();

          return [de(i.path), de(i.nextPath)].includes(de(n));
        })(W, n) || (W = [], pt.removeInactiveIframes(e)), Me(), we(), xt.handleRouteChange(n, pe(), e, t, i);
      });
    },
        ge = function ge(e) {
      return Lt.replaceVars(xt.getNodePath(e), y, ":", !1);
    },
        he = function he(e) {
      var t = e.link;

      if (e.fromVirtualTreeRoot) {
        var _n53 = _toConsumableArray(P).reverse().find(function (e) {
          return e.virtualTree;
        });

        if (!_n53) return void console.error("LuigiClient Error: fromVirtualTreeRoot() is not possible, not inside a virtualTree navigation. Docs: https://docs.luigi-project.io/docs/navigation-parameters-reference/?section=virtualtree");
        t = xt.concatenatePath(ge(_n53), e.link);
      } else if (e.fromParent) t = xt.concatenatePath(ge(C.parent), e.link);else if (e.fromClosestContext) {
        var _n54 = _toConsumableArray(P).reverse().find(function (e) {
          return e.navigationContext && e.navigationContext.length > 0;
        });

        t = xt.concatenatePath(ge(_n54), e.link);
      } else if (e.fromContext) {
        var _n55 = e.fromContext,
            _i64 = P.find(function (e) {
          return _n55 === e.navigationContext;
        });

        t = xt.concatenatePath(ge(_i64), e.link);
      } else if (e.intent) {
        var _n56 = Dt.getIntentPath(e.link);

        t = _n56 || t;
      } else e.relative && (t = xt.concatenatePath(ge(C), e.link));

      return e.nodeParams && Object.keys(e.nodeParams).length && (t += t.includes("?") ? "&" : "?", Object.entries(e.nodeParams).forEach(function (n, i) {
        t += encodeURIComponent(Dt.getContentViewParamPrefix() + n[0]) + "=" + encodeURIComponent(n[1]) + (i < Object.keys(e.nodeParams).length - 1 ? "&" : "");
      })), t;
    };

    te("handleNavigation", ce);

    var me = function me(e) {
      return !!e || (console.warn("No search provider defined."), !1);
    },
        ve = function ve() {
      if (me(O) && (n("displaySearchResult", ne = !1), n("searchResult", re = []), Z)) for (; Z.lastElementChild;) {
        Z.removeChild(Z.lastElementChild);
      }
    },
        be = function be(e, t) {
      j.displayed ? console.warn("Only one splitview can be opened at a time") : (n("mfSplitView", j = kt.getDefaultData().mfSplitView), kt.open(pe(), e, t));
    },
        we = function we() {
      kt.close(pe());
    };

    var Se, ye, _e;

    var Ce = function Ce() {
      document.body.classList.remove("lui-leftNavToggle");
    };

    var xe = [];

    var ke = function ke(e, t) {
      if (e && e.length) return e.filter(function (e) {
        return e.settings.id === t;
      })[0];
    },
        Ie = function Ie(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var i = xe;
      return e.id || (e.id = Lt.getRandomId()), e.id && i && ke(i, e.id) ? (console.error("The alert with id '".concat(e.id, "' already exists in a queue, therefore it won't be displayed ")), Promise.reject()) : (e.closeAfter && setTimeout(function () {
        ke(xe, e.id) && Te(e.id);
      }, e.closeAfter), new Promise(function (r, o) {
        n("alerts", xe = [].concat(_toConsumableArray(i || []), [{
          displayed: !0,
          settings: e,
          openFromClient: t,
          promise: {
            resolve: r
          }
        }]));
      }));
    },
        Te = function Te(e) {
      var t = ke(xe, e);
      if (!t) return void console.error("An unexisting alert has been dismissed.", xe, e);
      var i = t.openFromClient;

      if (n("alerts", xe = xe.filter(function (t) {
        return t.settings.id !== e;
      })), i) {
        var _t87 = pt.getActiveIframe(E),
            _n57 = {
          msg: "luigi.ux.alert.hide",
          id: e
        };

        Rt.sendMessageToIframe(_t87, _n57);
      }
    };

    var Ne;

    var $e = function $e() {
      n("confirmationModal", Ne = {
        displayed: !1,
        content: {},
        openFromClient: !1,
        promise: null
      });
    };

    $e();

    var Pe = function Pe(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return new Promise(function (i, r) {
        n("confirmationModal", Ne = {
          displayed: !0,
          settings: e,
          openFromClient: t,
          promise: {
            resolve: i,
            reject: r
          }
        });
      });
    },
        Ee = function Ee(e) {
      var _Ne = Ne,
          t = _Ne.promise,
          n = _Ne.openFromClient;

      if ($e(), e ? t.resolve() : t.reject(), n) {
        var _t88 = pt.getActiveIframe(E),
            _n58 = {
          msg: "luigi.ux.confirmationModal.hide",
          data: {
            confirmed: e
          }
        };

        Rt.sendMessageToIframe(_t88, _n58);
      }
    },
        Le = function Le(e) {
      if (H.dirtySet) {
        if (e) return H.dirtySet.has(e);
        if (H.dirtySet.size > 0) return !0;
      }

      return !1;
    },
        Re = function Re() {
      return Pe({
        header: st.getTranslation("luigi.unsavedChangesAlert.header"),
        body: st.getTranslation("luigi.unsavedChangesAlert.body"),
        buttonDismiss: st.getTranslation("luigi.button.dismiss"),
        buttonConfirm: st.getTranslation("luigi.button.confirm")
      });
    };

    te("getUnsavedChangesModalPromise", ue);
    var Ae = {};

    var De = function De() {
      n("mfModal", Ae.displayed = !1, Ae), n("mfModal", Ae.nodepath = void 0, Ae), n("mfModal", Ae.settings = {}, Ae);
    };

    De();

    var Ve = /*#__PURE__*/function () {
      var _ref83 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee63(e, t) {
        var _yield$ht$extractData4, i;

        return regeneratorRuntime.wrap(function _callee63$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                _context64.next = 2;
                return ht.extractDataFromPath(e);

              case 2:
                _yield$ht$extractData4 = _context64.sent;
                i = _yield$ht$extractData4.nodeObject;
                _context64.next = 6;
                return ht.shouldPreventNavigation(i);

              case 6:
                _context64.t0 = _context64.sent;

                if (_context64.t0) {
                  _context64.next = 9;
                  break;
                }

                n("mfModal", Ae.displayed = !0, Ae), n("mfModal", Ae.nodepath = e, Ae), n("mfModal", Ae.settings = t, Ae);

              case 9:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee63);
      }));

      return function Ve(_x71, _x72) {
        return _ref83.apply(this, arguments);
      };
    }(),
        Me = function Me(e) {
      o ? ue(o.contentWindow).then(function () {
        De();
      }) : s && De();
    };

    te("openViewInModal", Ve);
    var Ue = {};

    var je = function je() {
      n("mfDrawer", Ue.displayed = !1, Ue), n("mfDrawer", Ue.nodepath = void 0, Ue), n("mfDrawer", Ue.settings = {}, Ue), n("disableBackdrop", d = !1);
    };

    je();

    var Be = /*#__PURE__*/function () {
      var _ref84 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee64(e, t) {
        var _yield$ht$extractData5, i;

        return regeneratorRuntime.wrap(function _callee64$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                _context65.next = 2;
                return ht.extractDataFromPath(e);

              case 2:
                _yield$ht$extractData5 = _context65.sent;
                i = _yield$ht$extractData5.nodeObject;
                _context65.next = 6;
                return ht.shouldPreventNavigation(i);

              case 6:
                _context65.t0 = _context65.sent;

                if (_context65.t0) {
                  _context65.next = 9;
                  break;
                }

                n("mfDrawer", Ue.displayed = !0, Ue), n("mfDrawer", Ue.nodepath = e, Ue), n("mfDrawer", Ue.settings = t, Ue), Ue.settings && Ue.settings.backdrop && n("disableBackdrop", d = !0);

              case 9:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee64);
      }));

      return function Be(_x73, _x74) {
        return _ref84.apply(this, arguments);
      };
    }(),
        Ge = function Ge(e) {
      e && e.detail && void 0 !== e.detail.activeDrawer && (B = e.detail.activeDrawer), (!B || e && e.detail && "modal" !== e.detail.type) && u && ue(u.contentWindow).then(function () {
        je();
      });
    };

    te("store", M), te("getTranslation", F);

    var ze = function ze(e) {
      D && D.thirdPartyCookieErrorHandling && Lt.isFunction(D.thirdPartyCookieErrorHandling) && D.thirdPartyCookieErrorHandling();
    };

    Q(function () {
      dt._init(), O = rt.getConfigValue("globalSearch.searchProvider"), R = rt.getConfigValue("settings.responsiveNavigation"), _e = window.innerWidth, "simple" === R ? (document.body.classList.add("lui-simpleSlideInNav"), L = !0) : "simpleMobileOnly" === R ? (document.body.classList.add("lui-simpleSlideInNav", "lui-mobileOnly"), L = !0) : document.body.classList.add("lui-semiCollapsible"), (D = rt.getConfigValue("settings.thirdPartyCookieCheck")) && D.thirdPartyCookieScriptLocation && setTimeout(function () {
        var e = document.createElement("iframe");
        e.width = "0px", e.height = "0px", e.src = D.thirdPartyCookieScriptLocation, document.body.appendChild(e), e.onload = function () {
          setTimeout(function () {
            "disabled" === Pl && ze(D);
          }), document.body.removeChild(e);
        };
      });
    }), X(function () {});
    return e.$set = function (e) {
      "store" in e && n("store", M = e.store), "getTranslation" in e && n("getTranslation", F = e.getTranslation), "isSearchFieldVisible" in e && n("isSearchFieldVisible", J = e.isSearchFieldVisible), "inputElem" in e && n("inputElem", Y = e.inputElem), "luigiCustomSearchRenderer__slot" in e && n("luigiCustomSearchRenderer__slot", Z = e.luigiCustomSearchRenderer__slot), "displaySearchResult" in e && n("displaySearchResult", ne = e.displaySearchResult), "displayCustomSearchResult" in e && n("displayCustomSearchResult", ie = e.displayCustomSearchResult), "searchResult" in e && n("searchResult", re = e.searchResult), "storedUserSettings" in e && n("storedUserSettings", oe = e.storedUserSettings);
    }, {
      store: M,
      getTranslation: F,
      showLoadingIndicator: U,
      mfSplitView: j,
      disableBackdrop: d,
      pathParams: y,
      navigationPath: P,
      tabNav: A,
      resizeTabNavToggle: q,
      internalUserSettingsObject: K,
      isSearchFieldVisible: J,
      inputElem: Y,
      luigiCustomSearchRenderer__slot: Z,
      displaySearchResult: ne,
      displayCustomSearchResult: ie,
      searchResult: re,
      storedUserSettings: oe,
      handleNavClick: function handleNavClick(e) {
        var t = e.detail.node;
        ue().then(function () {
          if (Ce(), t.openNodeInModal) {
            var _e111 = Dt.buildRoute(t, "/".concat(t.pathSegment));

            Ve(_e111, !0 === t.openNodeInModal ? {} : t.openNodeInModal);
          } else if (t.drawer) {
            var _e112 = Dt.buildRoute(t, "/".concat(t.pathSegment));

            t.drawer.isDrawer = !0, Be(_e112, t.drawer);
          } else pe().set({
            isNavigationSyncEnabled: !0
          }), xt.handleRouteClick(t, pe());
        });
      },
      onResizeTabNav: function onResizeTabNav() {
        n("resizeTabNavToggle", q = !q);
      },
      closeSearchField: function closeSearchField() {
        me(O) && n("isSearchFieldVisible", J = !1);
      },
      openSearchField: function openSearchField() {
        me(O) && Y && (n("isSearchFieldVisible", J = !0), Y.focus());
      },
      clearSearchField: function clearSearchField() {
        me(O) && Y && (n("inputElem", Y.value = "", Y), ve());
      },
      toggleSearch: function toggleSearch() {
        n("isSearchFieldVisible", J = !J), ct.clearSearchField();
      },
      getGlobalSearchString: function getGlobalSearchString() {
        if (me(O) && Y) return Y.value;
      },
      setGlobalSearchString: function setGlobalSearchString(e) {
        me(O) && Y && (n("inputElem", Y.value = e, Y), Lt.isFunction(O.onInput) ? O.onInput() : console.error("onInput is not a function. Please check the global search configuration."));
      },
      setSearchInputPlaceholder: function setSearchInputPlaceholder(e) {
        me(O) && Y && n("inputElem", Y.placeholder = e, Y);
      },
      showSearchResult: function showSearchResult(e) {
        if (me(O)) if (e && e.length > 0) {
          if (Lt.isFunction(O.customSearchResultRenderer)) {
            n("displayCustomSearchResult", ie = !0);
            var _t89 = {
              fireItemSelected: function fireItemSelected(e) {
                O.onSearchResultItemSelected(e);
              }
            };
            O.customSearchResultRenderer(e, Z, _t89);
          } else n("displaySearchResult", ne = !0), n("searchResult", re = e);
        } else console.warn("Search result array is empty.");
      },
      closeSearchResult: ve,
      handleSearchNavigation: function handleSearchNavigation(e) {
        var t = e.detail.node,
            n = {
          params: {
            link: t.link,
            nodeParams: t.params
          }
        };
        ce(n);
      },
      openSplitView: be,
      closeSplitView: we,
      collapseSplitView: function collapseSplitView() {
        kt.collapse(pe()), n("mfSplitView", j.collapsed = !0, j);
      },
      expandSplitView: function expandSplitView() {
        kt.expand(pe()), n("mfSplitView", j.collapsed = !1, j);
      },
      isSplitViewCollapsed: function isSplitViewCollapsed() {
        return !!j.displayed && j.collapsed;
      },
      isSplitViewExpanded: function isSplitViewExpanded() {
        return !!j.displayed && !j.collapsed;
      },
      existsSplitView: function existsSplitView() {
        return j.displayed;
      },
      splitViewIframeCreated: function splitViewIframeCreated(e) {
        g = e.detail.splitViewIframe, h = e.detail.splitViewIframeData, n("mfSplitView", j.collapsed = e.detail.collapsed, j);
      },
      splitViewStatusChanged: function splitViewStatusChanged(e) {
        void 0 !== e.detail.displayed && n("mfSplitView", j.displayed = e.detail.displayed, j), void 0 !== e.detail.collapsed && n("mfSplitView", j.collapsed = e.detail.collapsed, j);
      },
      splitViewWCCreated: function splitViewWCCreated(e) {
        m = e.detail.splitViewWC, v = e.detail.splitViewWCData, n("mfSplitView", j.collapsed = e.detail.collapsed, j);
      },
      hideNav: Se,
      hideSideNav: ye,
      onResize: function onResize() {
        var e = window.innerWidth >= Fe.desktopMinWidth && _e < Fe.desktopMinWidth,
            t = window.innerWidth < Fe.desktopMinWidth && _e >= Fe.desktopMinWidth;
        (e || t) && Ce(), _e = window.innerWidth;
      },
      alerts: xe,
      showAlert: Ie,
      handleAlertDismissExternal: function handleAlertDismissExternal(e) {
        Te(e.detail.id);
      },
      confirmationModal: Ne,
      showModal: Pe,
      handleModalResult: Ee,
      mfModal: Ae,
      modalIframeCreated: function modalIframeCreated(e) {
        o = e.detail.modalIframe, a = e.detail.modalIframeData;
      },
      modalWCCreated: function modalWCCreated(e) {
        s = e.detail.modalWC, l = e.detail.modalWCData;
      },
      closeModal: Me,
      mfDrawer: Ue,
      drawerIframeCreated: function drawerIframeCreated(e) {
        u = e.detail.modalIframe, p = e.detail.modalIframeData;
      },
      setDrawerState: function setDrawerState(e) {
        B = e.detail.activeDrawer;
      },
      closeDrawer: Ge,
      openUserSettings: function openUserSettings() {
        var e = Ft.processUserSettingGroups();
        Array.isArray(e) && e.length ? (n("internalUserSettingsObject", K.userSettingGroups = _toConsumableArray(e), K), n("internalUserSettingsObject", K.displayed = !0, K)) : console.info("There are no user setting groups in the settings section of the luigi config defined.");
      },
      closeUserSettings: function closeUserSettings() {
        n("internalUserSettingsObject", K.displayed = !1, K);
      },
      init: function init(e) {
        var t = rt.getConfigValue("navigation.defaults.isolateView"),
            i = rt.getConfigValue("navigation.defaults.pageErrorHandler"),
            r = {
          iframe: null,
          navigateOk: null,
          builderCompatibilityMode: Boolean(window.builderCompatibilityMode),
          isolateAllViews: t,
          defaultPageErrorHandler: i
        };
        st.addCurrentLocaleChangeListener(function (e) {
          var t = {
            msg: "luigi.current-locale-changed",
            currentLocale: e
          };
          Rt.broadcastMessageToAllIframes(t);
        }), Vt.addEventListener("popstate", /*#__PURE__*/function () {
          var _ref85 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee65(e) {
            var t, i;
            return regeneratorRuntime.wrap(function _callee65$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    t = xe;

                    if (!(!t || !t.length)) {
                      _context66.next = 3;
                      break;
                    }

                    return _context66.abrupt("return");

                  case 3:
                    i = t.map(function (e) {
                      if (e && !e.openFromClient && "number" == typeof e.settings.ttl) {
                        if (0 === e.settings.ttl) return null;
                        e.settings.ttl--;
                      }

                      return e;
                    }).filter(function (e) {
                      return e;
                    });
                    n("alerts", xe = i);

                  case 5:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee65);
          }));

          return function (_x75) {
            return _ref85.apply(this, arguments);
          };
        }()), Vt.addEventListener("message", /*#__PURE__*/function () {
          var _ref86 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee67(t) {
            var i, _e113, _n59, _r23, _o30, _e114, _s9, _e115, _t90, _n60, _n61, _n62, _n63, _e116, _n64, _r24, _o31, _e117, _n65, _n66, _e118, _e119;

            return regeneratorRuntime.wrap(function _callee67$(_context68) {
              while (1) {
                switch (_context68.prev = _context68.next) {
                  case 0:
                    i = Rt.getValidMessageSource(t);

                    if (!i) {
                      _context68.next = 73;
                      break;
                    }

                    if (!(i._ready = !0, "custom" === t.data.msg)) {
                      _context68.next = 7;
                      break;
                    }

                    _e113 = rt.getConfigValue("communication.customMessagesListeners") || {}, _n59 = Oe.convertCustomMessageInternalToUser(t.data), _r23 = _e113[_n59.id], _o30 = "luigi.updateUserSettings";

                    if (!(K && _n59.id === _o30)) {
                      _context68.next = 6;
                      break;
                    }

                    return _context68.abrupt("return", void (_r23 && console.warn("The key \"".concat(_o30, "\" is not allowed to use for custom messages."))));

                  case 6:
                    if ("function" == typeof _r23) {
                      _r23(_n59, at.getMicrofrontends().find(function (e) {
                        return Rt.isMessageSource(t, e.container);
                      }), Lt.removeInternalProperties(i.luigi.currentNode));
                    } else console.warn("Warning: Custom message with id: '".concat(_n59.id, "' does not exist. Make sure you provided the same id as in the config file. Documentation: https://docs.luigi-project.io/docs/communication?section=custom-messages"));

                  case 7:
                    if (!("luigi.init.ok" === t.data.msg && (r.iframe.luigi.initOk = !0), "luigi.navigate.ok" === t.data.msg && (i.luigi.viewUrl = i.luigi.nextViewUrl, i.luigi.nextViewUrl = "", i.luigi.clientPermissions = i.luigi.nextClientPermissions, delete i.luigi.nextClientPermissions, r.navigateOk = !0, ft.preload()), "luigi.get-context" === t.data.msg)) {
                      _context68.next = 32;
                      break;
                    }

                    r.iframe.luigi.clientVersion = t.data.clientVersion, r.iframe.luigi.initOk = !1;
                    _e114 = {
                      modalIframe: o,
                      modalIframeData: a,
                      drawerIframe: u,
                      drawerIframeData: p,
                      drawer: f,
                      modal: c,
                      splitViewIframe: g,
                      splitViewIframeData: h,
                      splitView: b
                    }, _s9 = Rt.specialIframeTypes.filter(function (n) {
                      return Rt.isMessageSource(t, _e114[n.iframeKey]);
                    });

                    if (!_s9.length) {
                      _context68.next = 14;
                      break;
                    }

                    _s9.forEach( /*#__PURE__*/function () {
                      var _ref87 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee66(t) {
                        var n, i;
                        return regeneratorRuntime.wrap(function _callee66$(_context67) {
                          while (1) {
                            switch (_context67.prev = _context67.next) {
                              case 0:
                                n = _e114[t.dataKey].context;
                                i = _objectSpread(_objectSpread({}, r), {}, {
                                  iframe: _e114[t.iframeKey],
                                  context: n,
                                  pathParams: _e114[t.dataKey].pathParams,
                                  nodeParams: _e114[t.dataKey].nodeParams,
                                  modal: t.iframeKey.startsWith("modal"),
                                  drawer: t.iframeKey.startsWith("drawer"),
                                  splitView: t.iframeKey.startsWith("splitView")
                                });
                                _context67.next = 4;
                                return se(i, {});

                              case 4:
                              case "end":
                                return _context67.stop();
                            }
                          }
                        }, _callee66);
                      }));

                      return function (_x77) {
                        return _ref87.apply(this, arguments);
                      };
                    }());

                    _context68.next = 31;
                    break;

                  case 14:
                    if (!(r.iframe && Rt.isMessageSource(t, r.iframe))) {
                      _context68.next = 21;
                      break;
                    }

                    _context68.next = 17;
                    return se(r, {});

                  case 17:
                    (!C || !C.loadingIndicator || !1 !== C.loadingIndicator.hideAutomatically) && n("showLoadingIndicator", U = !1);
                    ft.preload();
                    _context68.next = 31;
                    break;

                  case 21:
                    if (!i.luigi.preloading) {
                      _context68.next = 26;
                      break;
                    }

                    _context68.next = 24;
                    return se({
                      iframe: i,
                      context: {},
                      nodeParams: {},
                      pathParams: {},
                      internal: {}
                    }, {});

                  case 24:
                    _context68.next = 31;
                    break;

                  case 26:
                    _e115 = Ft.findActiveCustomUserSettingsIframe(t.source);

                    if (!_e115) {
                      _context68.next = 31;
                      break;
                    }

                    _t90 = _e115.getAttribute("userSettingsGroup"), _n60 = {
                      context: {
                        userSettingsData: oe[_t90]
                      },
                      iframe: _e115
                    };
                    _context68.next = 31;
                    return se(_n60);

                  case 31:
                    ft.viewGroupLoaded(i);

                  case 32:
                    if ("luigi.show-loading-indicator" === t.data.msg && n("showLoadingIndicator", U = !0), "luigi.hide-loading-indicator" === t.data.msg && n("showLoadingIndicator", U = !1), "luigi.navigation.open" === t.data.msg) if (z = !1, void 0 !== t.data.params.modal) {
                      _n61 = he(t.data.params);
                      _n61 = Lt.addLeadingSlash(_n61), E = e, De(), Ve(_n61, t.data.params.modal);
                    } else if (void 0 !== t.data.params.splitView) {
                      _n62 = he(t.data.params);
                      _n62 = Lt.addLeadingSlash(_n62), E = e, be(_n62, t.data.params.splitView);
                    } else if (void 0 !== t.data.params.drawer) {
                      _n63 = he(t.data.params);
                      _n63 = Lt.addLeadingSlash(_n63), E = e, je(), t.data.params.drawer.isDrawer = !0, Be(_n63, t.data.params.drawer);
                    } else ue().then(function () {
                      G = !t.data.params.withoutSync, ce(t.data, r), Me(), we(), Ge(), G = !0;
                    });
                    _context68.t0 = "luigi.navigation.back" === t.data.msg;

                    if (!_context68.t0) {
                      _context68.next = 55;
                      break;
                    }

                    if (!Rt.isMessageSource(t, o)) {
                      _context68.next = 41;
                      break;
                    }

                    Me();
                    _context68.next = 39;
                    return se(r, {
                      goBackContext: t.data.goBackContext && JSON.parse(t.data.goBackContext)
                    });

                  case 39:
                    _context68.next = 55;
                    break;

                  case 41:
                    if (!Rt.isMessageSource(t, g)) {
                      _context68.next = 47;
                      break;
                    }

                    we();
                    _context68.next = 45;
                    return se(r, {
                      goBackContext: t.data.goBackContext && JSON.parse(t.data.goBackContext)
                    });

                  case 45:
                    _context68.next = 55;
                    break;

                  case 47:
                    if (!Rt.isMessageSource(t, u)) {
                      _context68.next = 54;
                      break;
                    }

                    B && (B = !B);
                    Ge();
                    _context68.next = 52;
                    return se(r, {
                      goBackContext: t.data.goBackContext && JSON.parse(t.data.goBackContext)
                    });

                  case 52:
                    _context68.next = 55;
                    break;

                  case 54:
                    W && W.length ? ue().then(function () {
                      pt.setActiveIframeToPrevious(e);
                      var n = W.pop();
                      r.iframe = pt.getActiveIframe(e), z = !0, W = W, $ = t.data.goBackContext && JSON.parse(t.data.goBackContext), ce({
                        params: {
                          link: n.path
                        }
                      }, r);
                    }) : (t.data.goBackContext && console.warn("Warning: goBack() does not support goBackContext value. This is available only when using preserved views feature. Documentation: https://docs.luigi-project.io/docs/luigi-client-api.md#navigate"), window.history.back());

                  case 55:
                    "luigi.auth.tokenIssued" === t.data.msg && le(t.data.authData);

                    if (!("luigi.navigation.pathExists" === t.data.msg)) {
                      _context68.next = 64;
                      break;
                    }

                    _e116 = t.data.data;
                    _n64 = he(_e116);
                    _context68.next = 61;
                    return ht.getNavigationPath(rt.getConfigValueAsync("navigation.nodes"), _n64);

                  case 61:
                    _r24 = _context68.sent;
                    _o31 = {
                      msg: "luigi.navigation.pathExists.answer",
                      data: {
                        correlationId: _e116.id,
                        pathExists: _r24.isExistingRoute
                      }
                    };
                    Rt.sendMessageToIframe(i, _o31);

                  case 64:
                    if ("luigi.set-page-dirty" === t.data.msg) {
                      if (!H.dirtySet) {
                        _e117 = new Set();
                        _e117.add(t.source), H = {
                          dirtySet: _e117
                        };
                      }

                      H.persistUrl = window.location.href, t.data.dirty ? H.dirtySet.add(t.source) : H.dirtySet["delete"](t.source);
                    }

                    if ("luigi.ux.confirmationModal.show" === t.data.msg) {
                      _n65 = t.data.data.settings;
                      E = e, $e(), Pe(_n65, !0)["catch"](function () {});
                    }

                    if (!("luigi.ux.alert.show" === t.data.msg)) {
                      _context68.next = 71;
                      break;
                    }

                    _n66 = t.data.data.settings;

                    if (_n66.text) {
                      _context68.next = 70;
                      break;
                    }

                    return _context68.abrupt("return", void console.error("Luigi Client alert: 'text' field for alert is empty or not present, therefore alert will not be displayed"));

                  case 70:
                    E = e, Ie(_n66, !0)["catch"](function () {});

                  case 71:
                    if ("luigi.ux.set-current-locale" === t.data.msg) if (i.luigi.clientPermissions && i.luigi.clientPermissions.changeCurrentLocale) {
                      _e118 = t.data.data.currentLocale;
                      _e118 && st.setCurrentLocale(_e118);
                    } else console.error("Current local change from client declined because client permission changeCurrentLocale is not set for this view.");

                    if (D && !D.thirdPartyCookieScriptLocation && "luigi.third-party-cookie" === t.data.msg && "disabled" === t.data.tpc && ze(D), "storage" === t.data.msg) {
                      _e119 = Rt.getValidMessageSource(t).luigi.id;
                      Mt.process(_e119, t.origin, t.data.data.id, t.data.data.operation, t.data.data.params);
                    }

                  case 73:
                  case "end":
                    return _context68.stop();
                }
              }
            }, _callee67);
          }));

          return function (_x76) {
            return _ref86.apply(this, arguments);
          };
        }()), fe(e, r);
      },
      pathExists: function () {
        var _pathExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee68(e) {
          var t, n;
          return regeneratorRuntime.wrap(function _callee68$(_context69) {
            while (1) {
              switch (_context69.prev = _context69.next) {
                case 0:
                  t = {
                    link: e,
                    relative: "/" !== e[0]
                  }, n = he(t);
                  _context69.next = 3;
                  return ht.getNavigationPath(rt.getConfigValueAsync("navigation.nodes"), n);

                case 3:
                  return _context69.abrupt("return", _context69.sent.isExistingRoute);

                case 4:
                case "end":
                  return _context69.stop();
              }
            }
          }, _callee68);
        }));

        function pathExists(_x78) {
          return _pathExists.apply(this, arguments);
        }

        return pathExists;
      }(),
      hasBack: function hasBack() {
        return Ae && Ae.displayed || 0 !== W.length;
      },
      modalConfirm_handler: function modalConfirm_handler() {
        return Ee(!0);
      },
      modalDismiss_handler: function modalDismiss_handler() {
        return Ee(!1);
      },
      usersettingsdialog_storedUserSettings_binding: function usersettingsdialog_storedUserSettings_binding(e) {
        n("storedUserSettings", oe = e);
      },
      topnav_isSearchFieldVisible_binding: function topnav_isSearchFieldVisible_binding(e) {
        n("isSearchFieldVisible", J = e);
      },
      topnav_displaySearchResult_binding: function topnav_displaySearchResult_binding(e) {
        n("displaySearchResult", ne = e);
      },
      topnav_displayCustomSearchResult_binding: function topnav_displayCustomSearchResult_binding(e) {
        n("displayCustomSearchResult", ie = e);
      },
      topnav_searchResult_binding: function topnav_searchResult_binding(e) {
        n("searchResult", re = e);
      },
      topnav_inputElem_binding: function topnav_inputElem_binding(e) {
        n("inputElem", Y = e);
      },
      topnav_luigiCustomSearchRenderer__slot_binding: function topnav_luigiCustomSearchRenderer__slot_binding(e) {
        n("luigiCustomSearchRenderer__slot", Z = e);
      }
    };
  }

  var Wl = /*#__PURE__*/function (_Ae20) {
    _inherits(Wl, _Ae20);

    var _super24 = _createSuper(Wl);

    function Wl(e) {
      var _this57;

      _classCallCheck(this, Wl);

      _this57 = _super24.call(this), Re(_assertThisInitialized(_this57), e, zl, Gl, d, ["store", "getTranslation", "isSearchFieldVisible", "inputElem", "luigiCustomSearchRenderer__slot", "displaySearchResult", "displayCustomSearchResult", "searchResult", "storedUserSettings", "closeSearchField", "openSearchField", "clearSearchField", "toggleSearch", "getGlobalSearchString", "setGlobalSearchString", "setSearchInputPlaceholder", "showSearchResult", "closeSearchResult", "handleSearchNavigation", "openSplitView", "closeSplitView", "collapseSplitView", "expandSplitView", "isSplitViewCollapsed", "isSplitViewExpanded", "existsSplitView", "showAlert", "showModal", "openUserSettings", "closeUserSettings", "pathExists", "hasBack"]);
      return _this57;
    }

    _createClass(Wl, [{
      key: "closeSearchField",
      get: function get() {
        return this.$$.ctx.closeSearchField;
      }
    }, {
      key: "openSearchField",
      get: function get() {
        return this.$$.ctx.openSearchField;
      }
    }, {
      key: "clearSearchField",
      get: function get() {
        return this.$$.ctx.clearSearchField;
      }
    }, {
      key: "toggleSearch",
      get: function get() {
        return this.$$.ctx.toggleSearch;
      }
    }, {
      key: "getGlobalSearchString",
      get: function get() {
        return this.$$.ctx.getGlobalSearchString;
      }
    }, {
      key: "setGlobalSearchString",
      get: function get() {
        return this.$$.ctx.setGlobalSearchString;
      }
    }, {
      key: "setSearchInputPlaceholder",
      get: function get() {
        return this.$$.ctx.setSearchInputPlaceholder;
      }
    }, {
      key: "showSearchResult",
      get: function get() {
        return this.$$.ctx.showSearchResult;
      }
    }, {
      key: "closeSearchResult",
      get: function get() {
        return this.$$.ctx.closeSearchResult;
      }
    }, {
      key: "handleSearchNavigation",
      get: function get() {
        return this.$$.ctx.handleSearchNavigation;
      }
    }, {
      key: "openSplitView",
      get: function get() {
        return this.$$.ctx.openSplitView;
      }
    }, {
      key: "closeSplitView",
      get: function get() {
        return this.$$.ctx.closeSplitView;
      }
    }, {
      key: "collapseSplitView",
      get: function get() {
        return this.$$.ctx.collapseSplitView;
      }
    }, {
      key: "expandSplitView",
      get: function get() {
        return this.$$.ctx.expandSplitView;
      }
    }, {
      key: "isSplitViewCollapsed",
      get: function get() {
        return this.$$.ctx.isSplitViewCollapsed;
      }
    }, {
      key: "isSplitViewExpanded",
      get: function get() {
        return this.$$.ctx.isSplitViewExpanded;
      }
    }, {
      key: "existsSplitView",
      get: function get() {
        return this.$$.ctx.existsSplitView;
      }
    }, {
      key: "showAlert",
      get: function get() {
        return this.$$.ctx.showAlert;
      }
    }, {
      key: "showModal",
      get: function get() {
        return this.$$.ctx.showModal;
      }
    }, {
      key: "openUserSettings",
      get: function get() {
        return this.$$.ctx.openUserSettings;
      }
    }, {
      key: "closeUserSettings",
      get: function get() {
        return this.$$.ctx.closeUserSettings;
      }
    }, {
      key: "pathExists",
      get: function get() {
        return this.$$.ctx.pathExists;
      }
    }, {
      key: "hasBack",
      get: function get() {
        return this.$$.ctx.hasBack;
      }
    }]);

    return Wl;
  }(Ae);

  var Hl = function () {
    var _Xe = Xe({}),
        e = _Xe.subscribe,
        t = _Xe.update,
        n = _Xe.reset,
        i = {};

    return {
      subscribe: e,
      update: t,
      reset: n,
      subscribeToScope: function subscribeToScope(e, t) {
        var n = i[t];
        n || (n = new Set(), i[t] = n), n.add(e);
      },
      fire: function fire(e, t) {
        var n = i[e];
        n && _toConsumableArray(n).forEach(function (e) {
          e(t);
        });
      }
    };
  }(),
      ql = Qe(function (e, t, n) {
    return st.getTranslation(e, t, n);
  });

  Luigi._store = Hl;
  rt.setConfigCallbacks(function () {
    return new Promise(function (e) {
      st._init(), Nt.init().then(function () {
        setTimeout(function () {
          var t;
          at.isCustomLuigiContainer() && document.getElementsByTagName("html")[0].classList.add("luigi-app-in-custom-container"), t = new Wl({
            target: at.getLuigiContainer(),
            props: {
              store: Hl,
              getTranslation: ql
            }
          }), Luigi.showAlert = function (e) {
            return t.$$.ctx.showAlert(e);
          }, Luigi.showConfirmationModal = function (e) {
            return t.$$.ctx.showModal(e);
          }, Luigi.closeSearchField = function () {
            return t.$$.ctx.closeSearchField();
          }, Luigi.openSearchField = function () {
            return t.$$.ctx.openSearchField();
          }, Luigi.getGlobalSearchString = function () {
            return t.$$.ctx.getGlobalSearchString();
          }, Luigi.setGlobalSearchString = function (e) {
            t.$$.ctx.setGlobalSearchString(e);
          }, Luigi.showSearchResult = function (e) {
            return t.$$.ctx.showSearchResult(e);
          }, Luigi.closeSearchResult = function () {
            t.$$.ctx.closeSearchResult();
          }, Luigi.clearSearchField = function () {
            t.$$.ctx.clearSearchField();
          }, Luigi.splitView = {
            openAsSplitView: function openAsSplitView(e, n) {
              return t.$$.ctx.openSplitView(e, n);
            },
            splitViewHandle: {
              close: function close() {
                return t.$$.ctx.closeSplitView();
              },
              collapse: function collapse() {
                return t.$$.ctx.collapseSplitView();
              },
              expand: function expand() {
                return t.$$.ctx.expandSplitView();
              },
              isCollapsed: function isCollapsed() {
                return t.$$.ctx.isSplitViewCollapsed();
              },
              isExpanded: function isExpanded() {
                return t.$$.ctx.isSplitViewExpanded();
              },
              exists: function exists() {
                return t.$$.ctx.existsSplitView();
              }
            }
          }, Luigi.pathExists = function (e) {
            return t.$$.ctx.pathExists(e);
          }, Luigi.hasBack = function () {
            return t.$$.ctx.hasBack();
          }, Luigi.openUserSettings = function () {
            t.$$.ctx.openUserSettings();
          }, Luigi.closeUserSettings = function () {
            t.$$.ctx.closeUserSettings();
          }, e();
        });
      });
    });
  });
}]);

/***/ }),

/***/ "./src/MessageManager.ts":
/*!*******************************!*\
  !*** ./src/MessageManager.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageManager": () => (/* binding */ MessageManager)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO: Standardize the naming convention for message id
var MessageManager = /*#__PURE__*/function () {
  function MessageManager() {
    _classCallCheck(this, MessageManager);
  }

  _createClass(MessageManager, [{
    key: "sendCenterAction",
    value: function sendCenterAction() {
      this.sendCustomMessages({
        id: 'mfe-map-center'
      });
    }
  }, {
    key: "sendZoomInAction",
    value: function sendZoomInAction() {
      this.sendCustomMessages({
        id: 'mfe-map-zoom-in'
      });
    }
  }, {
    key: "sendZoomOutAction",
    value: function sendZoomOutAction() {
      this.sendCustomMessages({
        id: 'mfe-map-zoom-out'
      });
    }
  }, {
    key: "sendGeometries",
    value: function sendGeometries(geometries) {
      this.sendCustomMessages({
        id: 'mfe-map-geometries',
        geometries: geometries
      });
    }
  }, {
    key: "sendConfig",
    value: function sendConfig(config) {
      this.sendCustomMessages(_objectSpread({
        id: 'mfe-configuration'
      }, config));
    }
  }, {
    key: "sendCustomMessages",
    value: function sendCustomMessages(data) {
      Luigi.customMessages().send(Luigi.elements().getMicrofrontends()[0].id, {
        id: data.id,
        data: data
      });
    }
  }]);

  return MessageManager;
}();

/***/ }),

/***/ "./src/Server.ts":
/*!***********************!*\
  !*** ./src/Server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Server": () => (/* binding */ Server)
/* harmony export */ });
/* harmony import */ var _luigi_project_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @luigi-project/core */ "./node_modules/@luigi-project/core/luigi.js");
/* harmony import */ var _luigi_project_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_luigi_project_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageManager */ "./src/MessageManager.ts");
/* harmony import */ var _constant_ActionType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant/ActionType */ "./src/constant/ActionType.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Server = /*#__PURE__*/function () {
  function Server(selector) {
    var _this = this;

    _classCallCheck(this, Server);

    _defineProperty(this, "messageManager", new _MessageManager__WEBPACK_IMPORTED_MODULE_1__.MessageManager());

    _defineProperty(this, "luigiCoreEl", void 0);

    _defineProperty(this, "initialUrl", void 0);

    this.luigiCoreEl = document.createElement('DIV'); // TODO: clean up once Luigi Core Component is ready

    this.luigiCoreEl.style.width = 'var(--_nsc_container_width)';
    this.luigiCoreEl.style.height = 'var(--_nsc_container_height)';
    this.luigiCoreEl.style.position = 'var(--_nsc_container_position)';
    this.luigiCoreEl.setAttribute('luigi-app-root', '');
    setTimeout(function () {
      var _document$querySelect;

      return (_document$querySelect = document.querySelector(selector)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.appendChild(_this.luigiCoreEl);
    }, 0);
    this.loadConfig();
    this.initialUrl = location.href;
    setTimeout(function () {
      return history.replaceState(null, "", _this.initialUrl);
    }, 0);
  }

  _createClass(Server, [{
    key: "navigate",
    value: function navigate(nodePath) {
      Luigi.navigation().navigate(nodePath);
    }
  }, {
    key: "fetchConfig",
    value: function () {
      var _fetchConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getConfig();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchConfig() {
        return _fetchConfig.apply(this, arguments);
      }

      return fetchConfig;
    }()
  }, {
    key: "onClientLoaded",
    value: function onClientLoaded(callback) {
      addEventListener('clientLoaded', function () {
        return callback();
      });
    }
  }, {
    key: "onClientInitialized",
    value: function onClientInitialized(callback) {
      addEventListener('clientInitialized', function () {
        return callback();
      });
    }
  }, {
    key: "onSemanticObjectNavigation",
    value: function onSemanticObjectNavigation(callback) {
      addEventListener('semanticObjectNavigation', function (event) {
        return callback(event.detail.semanticObject, event.detail.action, event.detail.params);
      });
    }
  }, {
    key: "fireCenter",
    value: function fireCenter() {
      this.messageManager.sendCenterAction();
    }
  }, {
    key: "fireZoomIn",
    value: function fireZoomIn() {
      this.messageManager.sendZoomInAction();
    }
  }, {
    key: "fireZoomOut",
    value: function fireZoomOut() {
      this.messageManager.sendZoomOutAction();
    }
  }, {
    key: "fireLoadGeometries",
    value: function fireLoadGeometries(geometries) {
      this.messageManager.sendGeometries(geometries);
    }
  }, {
    key: "getConfig",
    value: function () {
      var _getConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url, response, _yield$response$json, config;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "/nsc/config";
                _context2.next = 3;
                return fetch(url);

              case 3:
                response = _context2.sent;
                _context2.prev = 4;
                _context2.t0 = JSON;
                _context2.next = 8;
                return response.json();

              case 8:
                _context2.t2 = _yield$response$json = _context2.sent;
                _context2.t1 = _context2.t2 === null;

                if (_context2.t1) {
                  _context2.next = 12;
                  break;
                }

                _context2.t1 = _yield$response$json === void 0;

              case 12:
                if (!_context2.t1) {
                  _context2.next = 16;
                  break;
                }

                _context2.t3 = void 0;
                _context2.next = 17;
                break;

              case 16:
                _context2.t3 = _yield$response$json.value;

              case 17:
                _context2.t4 = _context2.t3;
                config = _context2.t0.parse.call(_context2.t0, _context2.t4);
                return _context2.abrupt("return", {
                  layers: config === null || config === void 0 ? void 0 : config.layers,
                  actions: this.constructAction(config === null || config === void 0 ? void 0 : config.actions),
                  scenarios: config === null || config === void 0 ? void 0 : config.scenarios,
                  boTypes: config === null || config === void 0 ? void 0 : config.boTypes
                });

              case 22:
                _context2.prev = 22;
                _context2.t5 = _context2["catch"](4);
                console.log(_context2.t5);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 22]]);
      }));

      function getConfig() {
        return _getConfig.apply(this, arguments);
      }

      return getConfig;
    }() // TODO: extract the hardcodings

  }, {
    key: "loadConfig",
    value: function loadConfig() {
      var _this2 = this;

      Luigi.setConfig({
        navigation: {
          nodes: function nodes() {
            return [{
              pathSegment: 'mapbox',
              label: 'Map (Mapbox)',
              hideFromNav: true,
              hideSideNav: true,
              viewUrl: 'http://localhost:8082',
              onNodeActivation: function onNodeActivation(node) {
                if (node) {
                  setTimeout(function () {
                    return history.replaceState(null, "", _this2.initialUrl);
                  }, 0);
                  dispatchEvent(new CustomEvent('clientLoaded'));
                }
              }
            }];
          }
        },
        routing: {
          useHashRouting: false
        },
        settings: {
          hideNavigation: true,
          appLoadingIndicator: {
            hideAutomatically: true
          }
        },
        communication: {
          // TODO: standardize the namespace prefix for listeners
          customMessagesListeners: {
            'host-action-navigate': function hostActionNavigate(event) {
              _this2.actionNavigate({
                actionType: event.config.actionType_ID,
                url: event.config.url,
                semanticObject: event.config.semanticObject_ID,
                action: event.config.action,
                parameters: event.config.parameters,
                geoJsonProperties: event.data.properties
              });
            },
            'mfe-client-initialized': function () {
              var _mfeClientInitialized = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.t0 = _this2.messageManager;
                        _context3.next = 3;
                        return _this2.fetchConfig();

                      case 3:
                        _context3.t1 = _context3.sent;

                        _context3.t0.sendConfig.call(_context3.t0, _context3.t1);

                        dispatchEvent(new CustomEvent('clientInitialized'));

                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              function mfeClientInitialized() {
                return _mfeClientInitialized.apply(this, arguments);
              }

              return mfeClientInitialized;
            }(),
            'mfe-fetch-config': function () {
              var _mfeFetchConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.t0 = _this2.messageManager;
                        _context4.next = 3;
                        return _this2.fetchConfig();

                      case 3:
                        _context4.t1 = _context4.sent;

                        _context4.t0.sendConfig.call(_context4.t0, _context4.t1);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              function mfeFetchConfig() {
                return _mfeFetchConfig.apply(this, arguments);
              }

              return mfeFetchConfig;
            }()
          }
        }
      });
    }
  }, {
    key: "constructAction",
    value: function constructAction(actions) {
      var actionItems = actions.map(function (action) {
        return {
          text: action.name,
          description: action.description,
          config: action.config,
          fn: function fn(event) {
            event.postMessage({
              id: 'host-action-navigate',
              config: event.config,
              data: event.data
            });
          }
        };
      });
      return JSON.stringify(actionItems, function (key, value) {
        if (typeof value === 'function') {
          return '/Function(' + value.toString() + ')/';
        }

        return value;
      });
    }
  }, {
    key: "actionNavigate",
    value: function actionNavigate(props) {
      switch (props.actionType) {
        case _constant_ActionType__WEBPACK_IMPORTED_MODULE_2__.ActionType.SEMATIC_OBJECT:
          dispatchEvent(new CustomEvent('semanticObjectNavigation', {
            detail: {
              semanticObject: props.semanticObject,
              action: props.action,
              params: this.contructSemanticObjectParameters(props.parameters, props.geoJsonProperties)
            }
          }));
          break;

        case _constant_ActionType__WEBPACK_IMPORTED_MODULE_2__.ActionType.URL:
          history.pushState(null, '', location.href);
          location.href = this.initialUrl;
          setTimeout(function () {
            return location.href = props.url;
          }, 0);
          break;

        default: // do nothing

      }
    }
  }, {
    key: "contructSemanticObjectParameters",
    value: function contructSemanticObjectParameters(parameters, data) {
      var _this3 = this;

      if (!parameters || !data) return;
      return parameters.reduce(function (obj, item) {
        var key = _this3.handlebarReplacement(item.key, data);

        var value = _this3.handlebarReplacement(item.value, data);

        obj[key] = value;
        return obj;
      }, {});
    }
  }, {
    key: "handlebarReplacement",
    value: function handlebarReplacement(value, data) {
      return value.replace(/\{\{([^}]+)\}\}/g, function (match) {
        return data[match.slice(2, -2)];
      });
    }
  }]);

  return Server;
}();

/***/ }),

/***/ "./src/constant/ActionType.ts":
/*!************************************!*\
  !*** ./src/constant/ActionType.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionType": () => (/* binding */ ActionType)
/* harmony export */ });
var ActionType;

(function (ActionType) {
  ActionType["SEMATIC_OBJECT"] = "semanticNavigation";
  ActionType["URL"] = "urlNavigation";
})(ActionType || (ActionType = {}));

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _Server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server */ "./src/Server.ts");


function initialize(selector) {
  return new _Server__WEBPACK_IMPORTED_MODULE_0__.Server(selector);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Server__WEBPACK_IMPORTED_MODULE_0__.Server);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map