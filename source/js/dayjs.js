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
  })({"3qy7":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.REGEX_FORMAT = exports.REGEX_PARSE = exports.INVALID_DATE_STRING = exports.FORMAT_DEFAULT = exports.DATE = exports.Y = exports.Q = exports.M = exports.W = exports.D = exports.H = exports.MIN = exports.S = exports.MS = exports.MILLISECONDS_A_WEEK = exports.MILLISECONDS_A_DAY = exports.MILLISECONDS_A_HOUR = exports.MILLISECONDS_A_MINUTE = exports.MILLISECONDS_A_SECOND = exports.SECONDS_A_WEEK = exports.SECONDS_A_DAY = exports.SECONDS_A_HOUR = exports.SECONDS_A_MINUTE = void 0;
  var SECONDS_A_MINUTE = 60;
  exports.SECONDS_A_MINUTE = SECONDS_A_MINUTE;
  var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
  exports.SECONDS_A_HOUR = SECONDS_A_HOUR;
  var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
  exports.SECONDS_A_DAY = SECONDS_A_DAY;
  var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
  exports.SECONDS_A_WEEK = SECONDS_A_WEEK;
  var MILLISECONDS_A_SECOND = 1e3;
  exports.MILLISECONDS_A_SECOND = MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
  exports.MILLISECONDS_A_MINUTE = MILLISECONDS_A_MINUTE;
  var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
  exports.MILLISECONDS_A_HOUR = MILLISECONDS_A_HOUR;
  var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
  exports.MILLISECONDS_A_DAY = MILLISECONDS_A_DAY;
  var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales
  
  exports.MILLISECONDS_A_WEEK = MILLISECONDS_A_WEEK;
  var MS = 'millisecond';
  exports.MS = MS;
  var S = 'second';
  exports.S = S;
  var MIN = 'minute';
  exports.MIN = MIN;
  var H = 'hour';
  exports.H = H;
  var D = 'day';
  exports.D = D;
  var W = 'week';
  exports.W = W;
  var M = 'month';
  exports.M = M;
  var Q = 'quarter';
  exports.Q = Q;
  var Y = 'year';
  exports.Y = Y;
  var DATE = 'date';
  exports.DATE = DATE;
  var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
  exports.FORMAT_DEFAULT = FORMAT_DEFAULT;
  var INVALID_DATE_STRING = 'Invalid Date'; // regex
  
  exports.INVALID_DATE_STRING = INVALID_DATE_STRING;
  var REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/;
  exports.REGEX_PARSE = REGEX_PARSE;
  var REGEX_FORMAT = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  exports.REGEX_FORMAT = REGEX_FORMAT;
  },{}],"K0yk":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var C = _interopRequireWildcard(require("./constant"));
  
  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  
  var padStart = function padStart(string, length, pad) {
    var s = String(string);
    if (!s || s.length >= length) return string;
    return "".concat(Array(length + 1 - s.length).join(pad)).concat(string);
  };
  
  var padZoneStr = function padZoneStr(instance) {
    var negMinuts = -instance.utcOffset();
    var minutes = Math.abs(negMinuts);
    var hourOffset = Math.floor(minutes / 60);
    var minuteOffset = minutes % 60;
    return "".concat(negMinuts <= 0 ? '+' : '-').concat(padStart(hourOffset, 2, '0'), ":").concat(padStart(minuteOffset, 2, '0'));
  };
  
  var monthDiff = function monthDiff(a, b) {
    // function from moment.js in order to keep the same result
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
    var anchor = a.clone().add(wholeMonthDiff, C.M);
    var c = b - anchor < 0;
    var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), C.M);
    return Number(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
  };
  
  var absFloor = function absFloor(n) {
    return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
  };
  
  var prettyUnit = function prettyUnit(u) {
    var special = {
      M: C.M,
      y: C.Y,
      w: C.W,
      d: C.D,
      h: C.H,
      m: C.MIN,
      s: C.S,
      ms: C.MS,
      Q: C.Q
    };
    return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
  };
  
  var isUndefined = function isUndefined(s) {
    return s === undefined;
  };
  
  var _default = {
    s: padStart,
    z: padZoneStr,
    m: monthDiff,
    a: absFloor,
    p: prettyUnit,
    u: isUndefined
  };
  exports.default = _default;
  },{"./constant":"3qy7"}],"BnDe":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  // We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
  var _default = {
    name: 'en',
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
  };
  exports.default = _default;
  },{}],"H99C":[function(require,module,exports) {
  "use strict";
  
  var C = _interopRequireWildcard(require("./constant"));
  
  var _utils = _interopRequireDefault(require("./utils"));
  
  var _en = _interopRequireDefault(require("./locale/en"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  var L = 'en'; // global locale
  
  var Ls = {}; // global loaded locale
  
  Ls[L] = _en.default;
  
  var isDayjs = function isDayjs(d) {
    return d instanceof Dayjs;
  }; // eslint-disable-line no-use-before-define
  
  
  var parseLocale = function parseLocale(preset, object, isLocal) {
    var l;
    if (!preset) return L;
  
    if (typeof preset === 'string') {
      if (Ls[preset]) {
        l = preset;
      }
  
      if (object) {
        Ls[preset] = object;
        l = preset;
      }
    } else {
      var name = preset.name;
      Ls[name] = preset;
      l = name;
    }
  
    if (!isLocal) L = l;
    return l;
  };
  
  var dayjs = function dayjs(date, c, pl) {
    if (isDayjs(date)) {
      return date.clone();
    } // eslint-disable-next-line no-nested-ternary
  
  
    var cfg = c ? typeof c === 'string' ? {
      format: c,
      pl: pl
    } : c : {};
    cfg.date = date;
    return new Dayjs(cfg); // eslint-disable-line no-use-before-define
  };
  
  var wrapper = function wrapper(date, instance) {
    return dayjs(date, {
      locale: instance.$L,
      utc: instance.$u,
      $offset: instance.$offset
    });
  };
  
  var Utils = _utils.default; // for plugin use
  
  Utils.l = parseLocale;
  Utils.i = isDayjs;
  Utils.w = wrapper;
  
  var parseDate = function parseDate(cfg) {
    var date = cfg.date,
        utc = cfg.utc;
    if (date === null) return new Date(NaN); // null is invalid
  
    if (Utils.u(date)) return new Date(); // today
  
    if (date instanceof Date) return new Date(date);
  
    if (typeof date === 'string' && !/Z$/i.test(date)) {
      var d = date.match(C.REGEX_PARSE);
  
      if (d) {
        if (utc) {
          return new Date(Date.UTC(d[1], d[2] - 1, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0));
        }
  
        return new Date(d[1], d[2] - 1, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0);
      }
    }
  
    return new Date(date); // everything else
  };
  
  var Dayjs =
  /*#__PURE__*/
  function () {
    function Dayjs(cfg) {
      _classCallCheck(this, Dayjs);
  
      this.$L = this.$L || parseLocale(cfg.locale, null, true);
      this.parse(cfg); // for plugin
    }
  
    _createClass(Dayjs, [{
      key: "parse",
      value: function parse(cfg) {
        this.$d = parseDate(cfg);
        this.init();
      }
    }, {
      key: "init",
      value: function init() {
        var $d = this.$d;
        this.$y = $d.getFullYear();
        this.$M = $d.getMonth();
        this.$D = $d.getDate();
        this.$W = $d.getDay();
        this.$H = $d.getHours();
        this.$m = $d.getMinutes();
        this.$s = $d.getSeconds();
        this.$ms = $d.getMilliseconds();
      } // eslint-disable-next-line class-methods-use-this
  
    }, {
      key: "$utils",
      value: function $utils() {
        return Utils;
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return !(this.$d.toString() === C.INVALID_DATE_STRING);
      }
    }, {
      key: "isSame",
      value: function isSame(that, units) {
        var other = dayjs(that);
        return this.startOf(units) <= other && other <= this.endOf(units);
      }
    }, {
      key: "isAfter",
      value: function isAfter(that, units) {
        return dayjs(that) < this.startOf(units);
      }
    }, {
      key: "isBefore",
      value: function isBefore(that, units) {
        return this.endOf(units) < dayjs(that);
      }
    }, {
      key: "$g",
      value: function $g(input, get, set) {
        if (Utils.u(input)) return this[get];
        return this.set(set, input);
      }
    }, {
      key: "year",
      value: function year(input) {
        return this.$g(input, '$y', C.Y);
      }
    }, {
      key: "month",
      value: function month(input) {
        return this.$g(input, '$M', C.M);
      }
    }, {
      key: "day",
      value: function day(input) {
        return this.$g(input, '$W', C.D);
      }
    }, {
      key: "date",
      value: function date(input) {
        return this.$g(input, '$D', C.DATE);
      }
    }, {
      key: "hour",
      value: function hour(input) {
        return this.$g(input, '$H', C.H);
      }
    }, {
      key: "minute",
      value: function minute(input) {
        return this.$g(input, '$m', C.MIN);
      }
    }, {
      key: "second",
      value: function second(input) {
        return this.$g(input, '$s', C.S);
      }
    }, {
      key: "millisecond",
      value: function millisecond(input) {
        return this.$g(input, '$ms', C.MS);
      }
    }, {
      key: "unix",
      value: function unix() {
        return Math.floor(this.valueOf() / 1000);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        // timezone(hour) * 60 * 60 * 1000 => ms
        return this.$d.getTime();
      }
    }, {
      key: "startOf",
      value: function startOf(units, _startOf) {
        var _this = this;
  
        // startOf -> endOf
        var isStartOf = !Utils.u(_startOf) ? _startOf : true;
        var unit = Utils.p(units);
  
        var instanceFactory = function instanceFactory(d, m) {
          var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
          return isStartOf ? ins : ins.endOf(C.D);
        };
  
        var instanceFactorySet = function instanceFactorySet(method, slice) {
          var argumentStart = [0, 0, 0, 0];
          var argumentEnd = [23, 59, 59, 999];
          return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
          _this.toDate(), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
        };
  
        var $W = this.$W,
            $M = this.$M,
            $D = this.$D;
        var utcPad = "set".concat(this.$u ? 'UTC' : '');
  
        switch (unit) {
          case C.Y:
            return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
  
          case C.M:
            return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
  
          case C.W:
            {
              var weekStart = this.$locale().weekStart || 0;
              var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
              return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
            }
  
          case C.D:
          case C.DATE:
            return instanceFactorySet("".concat(utcPad, "Hours"), 0);
  
          case C.H:
            return instanceFactorySet("".concat(utcPad, "Minutes"), 1);
  
          case C.MIN:
            return instanceFactorySet("".concat(utcPad, "Seconds"), 2);
  
          case C.S:
            return instanceFactorySet("".concat(utcPad, "Milliseconds"), 3);
  
          default:
            return this.clone();
        }
      }
    }, {
      key: "endOf",
      value: function endOf(arg) {
        return this.startOf(arg, false);
      }
    }, {
      key: "$set",
      value: function $set(units, int) {
        var _C$D$C$DATE$C$M$C$Y$C;
  
        // private set
        var unit = Utils.p(units);
        var utcPad = "set".concat(this.$u ? 'UTC' : '');
        var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.D, "".concat(utcPad, "Date")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.DATE, "".concat(utcPad, "Date")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.M, "".concat(utcPad, "Month")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.Y, "".concat(utcPad, "FullYear")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.H, "".concat(utcPad, "Hours")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.MIN, "".concat(utcPad, "Minutes")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.S, "".concat(utcPad, "Seconds")), _defineProperty(_C$D$C$DATE$C$M$C$Y$C, C.MS, "".concat(utcPad, "Milliseconds")), _C$D$C$DATE$C$M$C$Y$C)[unit];
        var arg = unit === C.D ? this.$D + (int - this.$W) : int;
  
        if (unit === C.M || unit === C.Y) {
          // clone is for badMutable plugin
          var date = this.clone().set(C.DATE, 1);
          date.$d[name](arg);
          date.init();
          this.$d = date.set(C.DATE, Math.min(this.$D, date.daysInMonth())).toDate();
        } else if (name) this.$d[name](arg);
  
        this.init();
        return this;
      }
    }, {
      key: "set",
      value: function set(string, int) {
        return this.clone().$set(string, int);
      }
    }, {
      key: "get",
      value: function get(unit) {
        return this[Utils.p(unit)]();
      }
    }, {
      key: "add",
      value: function add(number, units) {
        var _this2 = this,
            _C$MIN$C$H$C$S$unit;
  
        number = Number(number); // eslint-disable-line no-param-reassign
  
        var unit = Utils.p(units);
  
        var instanceFactorySet = function instanceFactorySet(n) {
          var d = dayjs(_this2);
          return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
        };
  
        if (unit === C.M) {
          return this.set(C.M, this.$M + number);
        }
  
        if (unit === C.Y) {
          return this.set(C.Y, this.$y + number);
        }
  
        if (unit === C.D) {
          return instanceFactorySet(1);
        }
  
        if (unit === C.W) {
          return instanceFactorySet(7);
        }
  
        var step = (_C$MIN$C$H$C$S$unit = {}, _defineProperty(_C$MIN$C$H$C$S$unit, C.MIN, C.MILLISECONDS_A_MINUTE), _defineProperty(_C$MIN$C$H$C$S$unit, C.H, C.MILLISECONDS_A_HOUR), _defineProperty(_C$MIN$C$H$C$S$unit, C.S, C.MILLISECONDS_A_SECOND), _C$MIN$C$H$C$S$unit)[unit] || 1; // ms
  
        var nextTimeStamp = this.$d.getTime() + number * step;
        return Utils.w(nextTimeStamp, this);
      }
    }, {
      key: "subtract",
      value: function subtract(number, string) {
        return this.add(number * -1, string);
      }
    }, {
      key: "format",
      value: function format(formatStr) {
        var _this3 = this;
  
        if (!this.isValid()) return C.INVALID_DATE_STRING;
        var str = formatStr || C.FORMAT_DEFAULT;
        var zoneStr = Utils.z(this);
        var locale = this.$locale();
        var $H = this.$H,
            $m = this.$m,
            $M = this.$M;
        var weekdays = locale.weekdays,
            months = locale.months,
            meridiem = locale.meridiem;
  
        var getShort = function getShort(arr, index, full, length) {
          return arr && (arr[index] || arr(_this3, str)) || full[index].substr(0, length);
        };
  
        var get$H = function get$H(num) {
          return Utils.s($H % 12 || 12, num, '0');
        };
  
        var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
          var m = hour < 12 ? 'AM' : 'PM';
          return isLowercase ? m.toLowerCase() : m;
        };
  
        var matches = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: $M + 1,
          MM: Utils.s($M + 1, 2, '0'),
          MMM: getShort(locale.monthsShort, $M, months, 3),
          MMMM: months[$M] || months(this, str),
          D: this.$D,
          DD: Utils.s(this.$D, 2, '0'),
          d: String(this.$W),
          dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
          ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
          dddd: weekdays[this.$W],
          H: String($H),
          HH: Utils.s($H, 2, '0'),
          h: get$H(1),
          hh: get$H(2),
          a: meridiemFunc($H, $m, true),
          A: meridiemFunc($H, $m, false),
          m: String($m),
          mm: Utils.s($m, 2, '0'),
          s: String(this.$s),
          ss: Utils.s(this.$s, 2, '0'),
          SSS: Utils.s(this.$ms, 3, '0'),
          Z: zoneStr // 'ZZ' logic below
  
        };
        return str.replace(C.REGEX_FORMAT, function (match, $1) {
          return $1 || matches[match] || zoneStr.replace(':', '');
        }); // 'ZZ'
      }
    }, {
      key: "utcOffset",
      value: function utcOffset() {
        // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
        // https://github.com/moment/moment/pull/1871
        return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
      }
    }, {
      key: "diff",
      value: function diff(input, units, float) {
        var _C$Y$C$M$C$Q$C$W$C$D$;
  
        var unit = Utils.p(units);
        var that = dayjs(input);
        var zoneDelta = (that.utcOffset() - this.utcOffset()) * C.MILLISECONDS_A_MINUTE;
        var diff = this - that;
        var result = Utils.m(this, that);
        result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.Y, result / 12), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.M, result), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.Q, result / 3), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.W, (diff - zoneDelta) / C.MILLISECONDS_A_WEEK), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.D, (diff - zoneDelta) / C.MILLISECONDS_A_DAY), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.H, diff / C.MILLISECONDS_A_HOUR), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.MIN, diff / C.MILLISECONDS_A_MINUTE), _defineProperty(_C$Y$C$M$C$Q$C$W$C$D$, C.S, diff / C.MILLISECONDS_A_SECOND), _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds
  
        return float ? result : Utils.a(result);
      }
    }, {
      key: "daysInMonth",
      value: function daysInMonth() {
        return this.endOf(C.M).$D;
      }
    }, {
      key: "$locale",
      value: function $locale() {
        // get locale object
        return Ls[this.$L];
      }
    }, {
      key: "locale",
      value: function locale(preset, object) {
        if (!preset) return this.$L;
        var that = this.clone();
        that.$L = parseLocale(preset, object, true);
        return that;
      }
    }, {
      key: "clone",
      value: function clone() {
        return Utils.w(this.$d, this);
      }
    }, {
      key: "toDate",
      value: function toDate() {
        return new Date(this.valueOf());
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
    }, {
      key: "toISOString",
      value: function toISOString() {
        // ie 8 return
        // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
        // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
        return this.$d.toISOString();
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.$d.toUTCString();
      }
    }]);
  
    return Dayjs;
  }();
  
  dayjs.prototype = Dayjs.prototype;
  
  dayjs.extend = function (plugin, option) {
    plugin(option, Dayjs, dayjs);
    return dayjs;
  };
  
  dayjs.locale = parseLocale;
  dayjs.isDayjs = isDayjs;
  
  dayjs.unix = function (timestamp) {
    return dayjs(timestamp * 1e3);
  };
  
  dayjs.en = Ls[L];
  dayjs.Ls = Ls;
  window.dayjs = dayjs;
  },{"./constant":"3qy7","./utils":"K0yk","./locale/en":"BnDe"}]},{},["H99C"], null)
  //# sourceMappingURL=/src.48928d69.js.map