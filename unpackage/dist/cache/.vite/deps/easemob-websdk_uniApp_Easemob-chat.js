var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../../PROJECTS/uniapp/TerrainTies/node_modules/easemob-websdk/uniApp/Easemob-chat.js
var require_Easemob_chat = __commonJS({
  "../../../../PROJECTS/uniapp/TerrainTies/node_modules/easemob-websdk/uniApp/Easemob-chat.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.websdk = t() : e.websdk = t();
    }(self, function() {
      return function() {
        var e = { 188: function(e2, t2, r2) {
          var o2, n, i;
          !function(a) {
            "use strict";
            if (null != t2 && "number" != typeof t2.nodeType)
              e2.exports = a();
            else if (null != r2.amdO)
              n = [], void 0 === (i = "function" == typeof (o2 = a) ? o2.apply(t2, n) : o2) || (e2.exports = i);
            else {
              var s = a(), c = "undefined" != typeof self ? self : $.global;
              "function" != typeof c.btoa && (c.btoa = s.btoa), "function" != typeof c.atob && (c.atob = s.atob);
            }
          }(function() {
            "use strict";
            var e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            function t3(e4) {
              this.message = e4;
            }
            return t3.prototype = new Error(), t3.prototype.name = "InvalidCharacterError", { btoa: function(r3) {
              for (var o3, n2, i2 = String(r3), a = 0, s = e3, c = ""; i2.charAt(0 | a) || (s = "=", a % 1); c += s.charAt(63 & o3 >> 8 - a % 1 * 8)) {
                if ((n2 = i2.charCodeAt(a += 3 / 4)) > 255)
                  throw new t3("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                o3 = o3 << 8 | n2;
              }
              return c;
            }, atob: function(r3) {
              var o3 = String(r3).replace(/[=]+$/, "");
              if (o3.length % 4 == 1)
                throw new t3("'atob' failed: The string to be decoded is not correctly encoded.");
              for (var n2, i2, a = 0, s = 0, c = ""; i2 = o3.charAt(s++); ~i2 && (n2 = a % 4 ? 64 * n2 + i2 : i2, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0)
                i2 = e3.indexOf(i2);
              return c;
            } };
          });
        }, 720: function(e2) {
          e2.exports = r2;
          var t2 = null;
          try {
            t2 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
          } catch (e3) {
          }
          function r2(e3, t3, r3) {
            this.low = 0 | e3, this.high = 0 | t3, this.unsigned = !!r3;
          }
          function o2(e3) {
            return true === (e3 && e3.__isLong__);
          }
          r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = o2;
          var n = {}, i = {};
          function a(e3, t3) {
            var r3, o3, a2;
            return t3 ? (a2 = 0 <= (e3 >>>= 0) && e3 < 256) && (o3 = i[e3]) ? o3 : (r3 = c(e3, (0 | e3) < 0 ? -1 : 0, true), a2 && (i[e3] = r3), r3) : (a2 = -128 <= (e3 |= 0) && e3 < 128) && (o3 = n[e3]) ? o3 : (r3 = c(e3, e3 < 0 ? -1 : 0, false), a2 && (n[e3] = r3), r3);
          }
          function s(e3, t3) {
            if (isNaN(e3))
              return t3 ? E : g;
            if (t3) {
              if (e3 < 0)
                return E;
              if (e3 >= h)
                return R;
            } else {
              if (e3 <= -f)
                return O;
              if (e3 + 1 >= f)
                return _;
            }
            return e3 < 0 ? s(-e3, t3).neg() : c(e3 % p | 0, e3 / p | 0, t3);
          }
          function c(e3, t3, o3) {
            return new r2(e3, t3, o3);
          }
          r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
          var u = Math.pow;
          function l(e3, t3, r3) {
            if (0 === e3.length)
              throw Error("empty string");
            if ("NaN" === e3 || "Infinity" === e3 || "+Infinity" === e3 || "-Infinity" === e3)
              return g;
            if ("number" == typeof t3 ? (r3 = t3, t3 = false) : t3 = !!t3, (r3 = r3 || 10) < 2 || 36 < r3)
              throw RangeError("radix");
            var o3;
            if ((o3 = e3.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (0 === o3)
              return l(e3.substring(1), t3, r3).neg();
            for (var n2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e3.length; a2 += 8) {
              var c2 = Math.min(8, e3.length - a2), d2 = parseInt(e3.substring(a2, a2 + c2), r3);
              if (c2 < 8) {
                var p2 = s(u(r3, c2));
                i2 = i2.mul(p2).add(s(d2));
              } else
                i2 = (i2 = i2.mul(n2)).add(s(d2));
            }
            return i2.unsigned = t3, i2;
          }
          function d(e3, t3) {
            return "number" == typeof e3 ? s(e3, t3) : "string" == typeof e3 ? l(e3, t3) : c(e3.low, e3.high, "boolean" == typeof t3 ? t3 : e3.unsigned);
          }
          r2.fromString = l, r2.fromValue = d;
          var p = 4294967296, h = p * p, f = h / 2, m = a(1 << 24), g = a(0);
          r2.ZERO = g;
          var E = a(0, true);
          r2.UZERO = E;
          var y = a(1);
          r2.ONE = y;
          var v = a(1, true);
          r2.UONE = v;
          var T = a(-1);
          r2.NEG_ONE = T;
          var _ = c(-1, 2147483647, false);
          r2.MAX_VALUE = _;
          var R = c(-1, -1, true);
          r2.MAX_UNSIGNED_VALUE = R;
          var O = c(0, -2147483648, false);
          r2.MIN_VALUE = O;
          var I = r2.prototype;
          I.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, I.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * p + (this.low >>> 0) : this.high * p + (this.low >>> 0);
          }, I.toString = function(e3) {
            if ((e3 = e3 || 10) < 2 || 36 < e3)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(O)) {
                var t3 = s(e3), r3 = this.div(t3), o3 = r3.mul(t3).sub(this);
                return r3.toString(e3) + o3.toInt().toString(e3);
              }
              return "-" + this.neg().toString(e3);
            }
            for (var n2 = s(u(e3, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
              var c2 = i2.div(n2), l2 = (i2.sub(c2.mul(n2)).toInt() >>> 0).toString(e3);
              if ((i2 = c2).isZero())
                return l2 + a2;
              for (; l2.length < 6; )
                l2 = "0" + l2;
              a2 = "" + l2 + a2;
            }
          }, I.getHighBits = function() {
            return this.high;
          }, I.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, I.getLowBits = function() {
            return this.low;
          }, I.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, I.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
            for (var e3 = 0 != this.high ? this.high : this.low, t3 = 31; t3 > 0 && 0 == (e3 & 1 << t3); t3--)
              ;
            return 0 != this.high ? t3 + 33 : t3 + 1;
          }, I.isZero = function() {
            return 0 === this.high && 0 === this.low;
          }, I.eqz = I.isZero, I.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, I.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, I.isOdd = function() {
            return 1 == (1 & this.low);
          }, I.isEven = function() {
            return 0 == (1 & this.low);
          }, I.equals = function(e3) {
            return o2(e3) || (e3 = d(e3)), (this.unsigned === e3.unsigned || this.high >>> 31 != 1 || e3.high >>> 31 != 1) && this.high === e3.high && this.low === e3.low;
          }, I.eq = I.equals, I.notEquals = function(e3) {
            return !this.eq(e3);
          }, I.neq = I.notEquals, I.ne = I.notEquals, I.lessThan = function(e3) {
            return this.comp(e3) < 0;
          }, I.lt = I.lessThan, I.lessThanOrEqual = function(e3) {
            return this.comp(e3) <= 0;
          }, I.lte = I.lessThanOrEqual, I.le = I.lessThanOrEqual, I.greaterThan = function(e3) {
            return this.comp(e3) > 0;
          }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(e3) {
            return this.comp(e3) >= 0;
          }, I.gte = I.greaterThanOrEqual, I.ge = I.greaterThanOrEqual, I.compare = function(e3) {
            if (o2(e3) || (e3 = d(e3)), this.eq(e3))
              return 0;
            var t3 = this.isNegative(), r3 = e3.isNegative();
            return t3 && !r3 ? -1 : !t3 && r3 ? 1 : this.unsigned ? e3.high >>> 0 > this.high >>> 0 || e3.high === this.high && e3.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e3).isNegative() ? -1 : 1;
          }, I.comp = I.compare, I.negate = function() {
            return !this.unsigned && this.eq(O) ? O : this.not().add(y);
          }, I.neg = I.negate, I.add = function(e3) {
            o2(e3) || (e3 = d(e3));
            var t3 = this.high >>> 16, r3 = 65535 & this.high, n2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e3.high >>> 16, s2 = 65535 & e3.high, u2 = e3.low >>> 16, l2 = 0, p2 = 0, h2 = 0, f2 = 0;
            return h2 += (f2 += i2 + (65535 & e3.low)) >>> 16, p2 += (h2 += n2 + u2) >>> 16, l2 += (p2 += r3 + s2) >>> 16, l2 += t3 + a2, c((h2 &= 65535) << 16 | (f2 &= 65535), (l2 &= 65535) << 16 | (p2 &= 65535), this.unsigned);
          }, I.subtract = function(e3) {
            return o2(e3) || (e3 = d(e3)), this.add(e3.neg());
          }, I.sub = I.subtract, I.multiply = function(e3) {
            if (this.isZero())
              return g;
            if (o2(e3) || (e3 = d(e3)), t2)
              return c(t2.mul(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned);
            if (e3.isZero())
              return g;
            if (this.eq(O))
              return e3.isOdd() ? O : g;
            if (e3.eq(O))
              return this.isOdd() ? O : g;
            if (this.isNegative())
              return e3.isNegative() ? this.neg().mul(e3.neg()) : this.neg().mul(e3).neg();
            if (e3.isNegative())
              return this.mul(e3.neg()).neg();
            if (this.lt(m) && e3.lt(m))
              return s(this.toNumber() * e3.toNumber(), this.unsigned);
            var r3 = this.high >>> 16, n2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e3.high >>> 16, l2 = 65535 & e3.high, p2 = e3.low >>> 16, h2 = 65535 & e3.low, f2 = 0, E2 = 0, y2 = 0, v2 = 0;
            return y2 += (v2 += a2 * h2) >>> 16, E2 += (y2 += i2 * h2) >>> 16, y2 &= 65535, E2 += (y2 += a2 * p2) >>> 16, f2 += (E2 += n2 * h2) >>> 16, E2 &= 65535, f2 += (E2 += i2 * p2) >>> 16, E2 &= 65535, f2 += (E2 += a2 * l2) >>> 16, f2 += r3 * h2 + n2 * p2 + i2 * l2 + a2 * u2, c((y2 &= 65535) << 16 | (v2 &= 65535), (f2 &= 65535) << 16 | (E2 &= 65535), this.unsigned);
          }, I.mul = I.multiply, I.divide = function(e3) {
            if (o2(e3) || (e3 = d(e3)), e3.isZero())
              throw Error("division by zero");
            var r3, n2, i2;
            if (t2)
              return this.unsigned || -2147483648 !== this.high || -1 !== e3.low || -1 !== e3.high ? c((this.unsigned ? t2.div_u : t2.div_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this;
            if (this.isZero())
              return this.unsigned ? E : g;
            if (this.unsigned) {
              if (e3.unsigned || (e3 = e3.toUnsigned()), e3.gt(this))
                return E;
              if (e3.gt(this.shru(1)))
                return v;
              i2 = E;
            } else {
              if (this.eq(O))
                return e3.eq(y) || e3.eq(T) ? O : e3.eq(O) ? y : (r3 = this.shr(1).div(e3).shl(1)).eq(g) ? e3.isNegative() ? y : T : (n2 = this.sub(e3.mul(r3)), i2 = r3.add(n2.div(e3)));
              if (e3.eq(O))
                return this.unsigned ? E : g;
              if (this.isNegative())
                return e3.isNegative() ? this.neg().div(e3.neg()) : this.neg().div(e3).neg();
              if (e3.isNegative())
                return this.div(e3.neg()).neg();
              i2 = g;
            }
            for (n2 = this; n2.gte(e3); ) {
              r3 = Math.max(1, Math.floor(n2.toNumber() / e3.toNumber()));
              for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), p2 = s(r3), h2 = p2.mul(e3); h2.isNegative() || h2.gt(n2); )
                h2 = (p2 = s(r3 -= l2, this.unsigned)).mul(e3);
              p2.isZero() && (p2 = y), i2 = i2.add(p2), n2 = n2.sub(h2);
            }
            return i2;
          }, I.div = I.divide, I.modulo = function(e3) {
            return o2(e3) || (e3 = d(e3)), t2 ? c((this.unsigned ? t2.rem_u : t2.rem_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this.sub(this.div(e3).mul(e3));
          }, I.mod = I.modulo, I.rem = I.modulo, I.not = function() {
            return c(~this.low, ~this.high, this.unsigned);
          }, I.and = function(e3) {
            return o2(e3) || (e3 = d(e3)), c(this.low & e3.low, this.high & e3.high, this.unsigned);
          }, I.or = function(e3) {
            return o2(e3) || (e3 = d(e3)), c(this.low | e3.low, this.high | e3.high, this.unsigned);
          }, I.xor = function(e3) {
            return o2(e3) || (e3 = d(e3)), c(this.low ^ e3.low, this.high ^ e3.high, this.unsigned);
          }, I.shiftLeft = function(e3) {
            return o2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? c(this.low << e3, this.high << e3 | this.low >>> 32 - e3, this.unsigned) : c(0, this.low << e3 - 32, this.unsigned);
          }, I.shl = I.shiftLeft, I.shiftRight = function(e3) {
            return o2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? c(this.low >>> e3 | this.high << 32 - e3, this.high >> e3, this.unsigned) : c(this.high >> e3 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(e3) {
            if (o2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63))
              return this;
            var t3 = this.high;
            return e3 < 32 ? c(this.low >>> e3 | t3 << 32 - e3, t3 >>> e3, this.unsigned) : c(32 === e3 ? t3 : t3 >>> e3 - 32, 0, this.unsigned);
          }, I.shru = I.shiftRightUnsigned, I.shr_u = I.shiftRightUnsigned, I.toSigned = function() {
            return this.unsigned ? c(this.low, this.high, false) : this;
          }, I.toUnsigned = function() {
            return this.unsigned ? this : c(this.low, this.high, true);
          }, I.toBytes = function(e3) {
            return e3 ? this.toBytesLE() : this.toBytesBE();
          }, I.toBytesLE = function() {
            var e3 = this.high, t3 = this.low;
            return [255 & t3, t3 >>> 8 & 255, t3 >>> 16 & 255, t3 >>> 24, 255 & e3, e3 >>> 8 & 255, e3 >>> 16 & 255, e3 >>> 24];
          }, I.toBytesBE = function() {
            var e3 = this.high, t3 = this.low;
            return [e3 >>> 24, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3, t3 >>> 24, t3 >>> 16 & 255, t3 >>> 8 & 255, 255 & t3];
          }, r2.fromBytes = function(e3, t3, o3) {
            return o3 ? r2.fromBytesLE(e3, t3) : r2.fromBytesBE(e3, t3);
          }, r2.fromBytesLE = function(e3, t3) {
            return new r2(e3[0] | e3[1] << 8 | e3[2] << 16 | e3[3] << 24, e3[4] | e3[5] << 8 | e3[6] << 16 | e3[7] << 24, t3);
          }, r2.fromBytesBE = function(e3, t3) {
            return new r2(e3[4] << 24 | e3[5] << 16 | e3[6] << 8 | e3[7], e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], t3);
          };
        }, 969: function(e2) {
          "use strict";
          function t2() {
            this._listeners = {};
          }
          e2.exports = t2, t2.prototype.on = function(e3, t3, r2) {
            return (this._listeners[e3] || (this._listeners[e3] = [])).push({ fn: t3, ctx: r2 || this }), this;
          }, t2.prototype.off = function(e3, t3) {
            if (void 0 === e3)
              this._listeners = {};
            else if (void 0 === t3)
              this._listeners[e3] = [];
            else
              for (var r2 = this._listeners[e3], o2 = 0; o2 < r2.length; )
                r2[o2].fn === t3 ? r2.splice(o2, 1) : ++o2;
            return this;
          }, t2.prototype.emit = function(e3) {
            var t3 = this._listeners[e3];
            if (t3) {
              for (var r2 = [], o2 = 1; o2 < arguments.length; )
                r2.push(arguments[o2++]);
              for (o2 = 0; o2 < t3.length; )
                t3[o2].fn.apply(t3[o2++].ctx, r2);
            }
            return this;
          };
        }, 728: function(e2) {
          "use strict";
          e2.exports = function(e3, t2) {
            for (var r2 = new Array(arguments.length - 1), o2 = 0, n = 2, i = true; n < arguments.length; )
              r2[o2++] = arguments[n++];
            return new Promise(function(n2, a) {
              r2[o2] = function(e4) {
                if (i)
                  if (i = false, e4)
                    a(e4);
                  else {
                    for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; )
                      t3[r3++] = arguments[r3];
                    n2.apply(null, t3);
                  }
              };
              try {
                e3.apply(t2 || null, r2);
              } catch (e4) {
                i && (i = false, a(e4));
              }
            });
          };
        }, 440: function(e2) {
          "use strict";
          var t2 = e2.exports;
          t2.length = function(e3) {
            var t3 = e3.length;
            if (!t3)
              return 0;
            for (var r3 = 0; --t3 % 4 > 1 && "=" === e3.charAt(t3); )
              ++r3;
            return Math.ceil(3 * e3.length) / 4 - r3;
          };
          for (var r2 = new Array(64), o2 = new Array(123), n = 0; n < 64; )
            o2[r2[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
          t2.encode = function(e3, t3, o3) {
            for (var n2, i2 = null, a = [], s = 0, c = 0; t3 < o3; ) {
              var u = e3[t3++];
              switch (c) {
                case 0:
                  a[s++] = r2[u >> 2], n2 = (3 & u) << 4, c = 1;
                  break;
                case 1:
                  a[s++] = r2[n2 | u >> 4], n2 = (15 & u) << 2, c = 2;
                  break;
                case 2:
                  a[s++] = r2[n2 | u >> 6], a[s++] = r2[63 & u], c = 0;
              }
              s > 8191 && ((i2 || (i2 = [])).push(String.fromCharCode.apply(String, a)), s = 0);
            }
            return c && (a[s++] = r2[n2], a[s++] = 61, 1 === c && (a[s++] = 61)), i2 ? (s && i2.push(String.fromCharCode.apply(String, a.slice(0, s))), i2.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
          };
          var i = "invalid encoding";
          t2.decode = function(e3, t3, r3) {
            for (var n2, a = r3, s = 0, c = 0; c < e3.length; ) {
              var u = e3.charCodeAt(c++);
              if (61 === u && s > 1)
                break;
              if (void 0 === (u = o2[u]))
                throw Error(i);
              switch (s) {
                case 0:
                  n2 = u, s = 1;
                  break;
                case 1:
                  t3[r3++] = n2 << 2 | (48 & u) >> 4, n2 = u, s = 2;
                  break;
                case 2:
                  t3[r3++] = (15 & n2) << 4 | (60 & u) >> 2, n2 = u, s = 3;
                  break;
                case 3:
                  t3[r3++] = (3 & n2) << 6 | u, s = 0;
              }
            }
            if (1 === s)
              throw Error(i);
            return r3 - a;
          }, t2.test = function(e3) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e3);
          };
        }, 72: function(e2) {
          e2.exports = o2;
          var t2, r2 = /\/|\./;
          function o2(e3, t3) {
            r2.test(e3) || (e3 = "google/protobuf/" + e3 + ".proto", t3 = { nested: { google: { nested: { protobuf: { nested: t3 } } } } }), o2[e3] = t3;
          }
          o2("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), o2("duration", { Duration: t2 = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), o2("timestamp", { Timestamp: t2 }), o2("empty", { Empty: { fields: {} } }), o2("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), o2("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), o2("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), o2.get = function(e3) {
            return o2[e3] || null;
          };
        }, 525: function(e2, t2, r2) {
          var o2, n, i = e2.exports;
          function a(e3, t3, r3, i2) {
            var a2 = i2.m, s2 = i2.d, c = i2.types, u = i2.ksi, l = void 0 !== u;
            if (e3.resolvedType)
              if (e3.resolvedType instanceof o2) {
                for (var d = l ? s2[r3][u] : s2[r3], p = e3.resolvedType.values, h = Object.keys(p), f = 0; f < h.length; f++)
                  if (!(e3.repeated && p[h[f]] === e3.typeDefault || h[f] != d && p[h[f]] != d)) {
                    l ? a2[r3][u] = p[h[f]] : a2[r3] = p[h[f]];
                    break;
                  }
              } else {
                if ("object" != typeof (l ? s2[r3][u] : s2[r3]))
                  throw TypeError(e3.fullName + ": object expected");
                l ? a2[r3][u] = c[t3].fromObject(s2[r3][u]) : a2[r3] = c[t3].fromObject(s2[r3]);
              }
            else {
              var m = false;
              switch (e3.type) {
                case "double":
                case "float":
                  l ? a2[r3][u] = Number(s2[r3][u]) : a2[r3] = Number(s2[r3]);
                  break;
                case "uint32":
                case "fixed32":
                  l ? a2[r3][u] = s2[r3][u] >>> 0 : a2[r3] = s2[r3] >>> 0;
                  break;
                case "int32":
                case "sint32":
                case "sfixed32":
                  l ? a2[r3][u] = 0 | s2[r3][u] : a2[r3] = 0 | s2[r3];
                  break;
                case "uint64":
                  m = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  n.Long ? l ? a2[r3][u] = n.Long.fromValue(s2[r3][u]).unsigned = m : a2[r3] = n.Long.fromValue(s2[r3]).unsigned = m : "string" == typeof (l ? s2[r3][u] : s2[r3]) ? l ? a2[r3][u] = parseInt(s2[r3][u], 10) : a2[r3] = parseInt(s2[r3], 10) : "number" == typeof (l ? s2[r3][u] : s2[r3]) ? l ? a2[r3][u] = s2[r3][u] : a2[r3] = s2[r3] : "object" == typeof (l ? s2[r3][u] : s2[r3]) && (l ? a2[r3][u] = new n.LongBits(s2[r3][u].low >>> 0, s2[r3][u].high >>> 0).toNumber(m) : a2[r3] = new n.LongBits(s2[r3].low >>> 0, s2[r3].high >>> 0).toNumber(m));
                  break;
                case "bytes":
                  "string" == typeof (l ? s2[r3][u] : s2[r3]) ? l ? n.base64.decode(s2[r3][u], a2[r3][u] = n.newBuffer(n.base64.length(s2[r3][u])), 0) : n.base64.decode(s2[r3], a2[r3] = n.newBuffer(n.base64.length(s2[r3])), 0) : (l ? s2[r3][u] : s2[r3]).length && (l ? a2[r3][u] = s2[r3][u] : a2[r3] = s2[r3]);
                  break;
                case "string":
                  l ? a2[r3][u] = String(s2[r3][u]) : a2[r3] = String(s2[r3]);
                  break;
                case "bool":
                  l ? a2[r3][u] = Boolean(s2[r3][u]) : a2[r3] = Boolean(s2[r3]);
              }
            }
          }
          function s(e3, t3, r3, i2) {
            var a2 = i2.m, s2 = i2.d, c = i2.types, u = i2.ksi, l = i2.o, d = void 0 !== u;
            if (e3.resolvedType)
              e3.resolvedType instanceof o2 ? d ? s2[r3][u] = l.enums === String ? c[t3].values[a2[r3][u]] : a2[r3][u] : s2[r3] = l.enums === String ? c[t3].values[a2[r3]] : a2[r3] : d ? s2[r3][u] = c[t3].toObject(a2[r3][u], l) : s2[r3] = c[t3].toObject(a2[r3], l);
            else {
              var p = false;
              switch (e3.type) {
                case "double":
                case "float":
                  d ? s2[r3][u] = l.json && !isFinite(a2[r3][u]) ? String(a2[r3][u]) : a2[r3][u] : s2[r3] = l.json && !isFinite(a2[r3]) ? String(a2[r3]) : a2[r3];
                  break;
                case "uint64":
                  p = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  "number" == typeof a2[r3][u] ? d ? s2[r3][u] = l.longs === String ? String(a2[r3][u]) : a2[r3][u] : s2[r3] = l.longs === String ? String(a2[r3]) : a2[r3] : d ? s2[r3][u] = l.longs === String ? n.Long.prototype.toString.call(a2[r3][u]) : l.longs === Number ? new n.LongBits(a2[r3][u].low >>> 0, a2[r3][u].high >>> 0).toNumber(p) : a2[r3][u] : s2[r3] = l.longs === String ? n.Long.prototype.toString.call(a2[r3]) : l.longs === Number ? new n.LongBits(a2[r3].low >>> 0, a2[r3].high >>> 0).toNumber(p) : a2[r3];
                  break;
                case "bytes":
                  d ? s2[r3][u] = l.bytes === String ? n.base64.encode(a2[r3][u], 0, a2[r3][u].length) : l.bytes === Array ? Array.prototype.slice.call(a2[r3][u]) : a2[r3][u] : s2[r3] = l.bytes === String ? n.base64.encode(a2[r3], 0, a2[r3].length) : l.bytes === Array ? Array.prototype.slice.call(a2[r3]) : a2[r3];
                  break;
                default:
                  d ? s2[r3][u] = a2[r3][u] : s2[r3] = a2[r3];
              }
            }
          }
          i._configure = function() {
            o2 = r2(582), n = r2(935);
          }, i.fromObject = function(e3) {
            var t3 = e3.fieldsArray;
            return function(e4) {
              return function(r3) {
                if (r3 instanceof this.ctor)
                  return r3;
                if (!t3.length)
                  return new this.ctor();
                for (var i2 = new this.ctor(), s2 = 0; s2 < t3.length; ++s2) {
                  var c, u = t3[s2].resolve(), l = u.name;
                  if (u.map) {
                    if (r3[l]) {
                      if ("object" != typeof r3[l])
                        throw TypeError(u.fullName + ": object expected");
                      i2[l] = {};
                    }
                    var d = Object.keys(r3[l]);
                    for (c = 0; c < d.length; ++c)
                      a(u, s2, l, n.merge(n.copy(e4), { m: i2, d: r3, ksi: d[c] }));
                  } else if (u.repeated) {
                    if (r3[l]) {
                      if (!Array.isArray(r3[l]))
                        throw TypeError(u.fullName + ": array expected");
                      for (i2[l] = [], c = 0; c < r3[l].length; ++c)
                        a(u, s2, l, n.merge(n.copy(e4), { m: i2, d: r3, ksi: c }));
                    }
                  } else
                    (u.resolvedType instanceof o2 || null != r3[l]) && a(u, s2, l, n.merge(n.copy(e4), { m: i2, d: r3 }));
                }
                return i2;
              };
            };
          }, i.toObject = function(e3) {
            var t3 = e3.fieldsArray.slice().sort(n.compareFieldsById);
            return function(r3) {
              return t3.length ? function(i2, a2) {
                a2 = a2 || {};
                for (var c, u, l = {}, d = [], p = [], h = [], f = 0; f < t3.length; ++f)
                  t3[f].partOf || (t3[f].resolve().repeated ? d : t3[f].map ? p : h).push(t3[f]);
                if (d.length && (a2.arrays || a2.defaults))
                  for (f = 0; f < d.length; ++f)
                    l[d[f].name] = [];
                if (p.length && (a2.objects || a2.defaults))
                  for (f = 0; f < p.length; ++f)
                    l[p[f].name] = {};
                if (h.length && a2.defaults)
                  for (f = 0; f < h.length; ++f)
                    if (u = (c = h[f]).name, c.resolvedType instanceof o2)
                      l[u] = a2.enums = String ? c.resolvedType.valuesById[c.typeDefault] : c.typeDefault;
                    else if (c.long)
                      if (n.Long) {
                        var m = new n.Long(c.typeDefault.low, c.typeDefault.high, c.typeDefault.unsigned);
                        l[u] = a2.longs === String ? m.toString() : a2.longs === Number ? m.toNumber() : m;
                      } else
                        l[u] = a2.longs === String ? c.typeDefault.toString() : c.typeDefault.toNumber();
                    else
                      c.bytes ? l[u] = a2.bytes === String ? String.fromCharCode.apply(String, c.typeDefault) : Array.prototype.slice.call(c.typeDefault).join("*..*").split("*..*") : l[u] = c.typeDefault;
                var g = false;
                for (f = 0; f < t3.length; ++f) {
                  u = (c = t3[f]).name;
                  var E, y, v = e3._fieldsArray.indexOf(c);
                  if (c.map) {
                    if (g || (g = true), i2[u] && (E = Object.keys(i2[u]).length))
                      for (l[u] = {}, y = 0; y < E.length; ++y)
                        s(c, v, u, n.merge(n.copy(r3), { m: i2, d: l, ksi: E[y], o: a2 }));
                  } else if (c.repeated) {
                    if (i2[u] && i2[u].length)
                      for (l[u] = [], y = 0; y < i2[u].length; ++y)
                        s(c, v, u, n.merge(n.copy(r3), { m: i2, d: l, ksi: y, o: a2 }));
                  } else
                    null != i2[u] && i2.hasOwnProperty(u) && s(c, v, u, n.merge(n.copy(r3), { m: i2, d: l, o: a2 })), c.partOf && a2.oneofs && (l[c.partOf.name] = u);
                }
                return l;
              } : function() {
                return {};
              };
            };
          };
        }, 888: function(e2, t2, r2) {
          var o2, n, i;
          function a(e3) {
            return "missing required '" + e3.name + "'";
          }
          function s(e3) {
            return function(t3) {
              var r3 = t3.Reader, s2 = t3.types, c = t3.util;
              return function(t4, u) {
                t4 instanceof r3 || (t4 = r3.create(t4));
                for (var l, d = void 0 === u ? t4.len : t4.pos + u, p = new this.ctor(); t4.pos < d; ) {
                  var h = t4.uint32();
                  if (e3.group && 4 == (7 & h))
                    break;
                  for (var f = h >>> 3, m = 0, g = false; m < e3.fieldsArray.length; ++m) {
                    var E = e3._fieldsArray[m].resolve(), y = E.name, v = E.resolvedType instanceof o2 ? "int32" : E.type;
                    if (f == E.id) {
                      if (g = true, E.map)
                        t4.skip().pos++, p[y] === c.emptyObject && (p[y] = {}), l = t4[E.keyType](), t4.pos++, null != n.long[E.keyType] ? null == n.basic[v] ? p[y]["object" == typeof l ? c.longToHash(l) : l] = s2[m].decode(t4, t4.uint32()) : p[y]["object" == typeof l ? c.longToHash(l) : l] = t4[v]() : null == n.basic[v] ? p[y] = s2[m].decode(t4, t4.uint32()) : p[y] = t4[v]();
                      else if (E.repeated)
                        if (p[y] && p[y].length || (p[y] = []), null != n.packed[v] && 2 == (7 & h))
                          for (var T = t4.uint32() + t4.pos; t4.pos < T; )
                            p[y].push(t4[v]());
                        else
                          null == n.basic[v] ? E.resolvedType.group ? p[y].push(s2[m].decode(t4)) : p[y].push(s2[m].decode(t4, t4.uint32())) : p[y].push(t4[v]());
                      else
                        null == n.basic[v] ? E.resolvedType.group ? p[y] = s2[m].decode(t4) : p[y] = s2[m].decode(t4, t4.uint32()) : p[y] = t4[v]();
                      break;
                    }
                  }
                  g || (console.log("t", h), t4.skipType(7 & h));
                }
                for (m = 0; m < e3._fieldsArray.length; ++m) {
                  var _ = e3._fieldsArray[m];
                  if (_.required && !p.hasOwnProperty(_.name))
                    throw i.ProtocolError(a(_), { instance: p });
                }
                return p;
              };
            };
          }
          e2.exports = s, s._configure = function() {
            o2 = r2(582), n = r2(696), i = r2(935);
          };
        }, 929: function(e2, t2, r2) {
          var o2, n;
          function i(e3) {
            return function(t3) {
              var r3 = t3.Writer, i2 = t3.types, a = t3.util;
              return function(t4, s) {
                s = s || r3.create();
                for (var c = e3.fieldsArray.slice().sort(a.compareFieldsById), u = 0; u < c.length; u++) {
                  var l = c[u], d = e3._fieldsArray.indexOf(l), p = l.resolvedType instanceof o2 ? "uint32" : l.type, h = n.basic[p], f = t4[l.name];
                  if (l.resolvedType instanceof o2 && "string" == typeof f && (f = i2[d].values[f]), l.map) {
                    if (null != f && t4.hasOwnProperty(l.name))
                      for (var m = Object.keys(f), g = 0; g < m.length; ++g)
                        s.uint32((l.id << 3 | 2) >>> 0).fork().uint32(8 | n.mapKey[l.keyType])[l.keyType](m[g]), void 0 === h ? i2[d].encode(f[m[g]], s.uint32(18).fork()).ldelim().ldelim() : s.uint32(16 | h)[p](f[m[g]]).ldelim();
                  } else if (l.repeated) {
                    if (f && f.length)
                      if (l.packed && void 0 !== n.packed[p]) {
                        s.uint32((l.id << 3 | 2) >>> 0).fork();
                        for (var E = 0; E < f.length; E++)
                          s[p](f[E]);
                        s.ldelim();
                      } else
                        for (var y = 0; y < f.length; y++)
                          void 0 === h ? l.resolvedType.group ? i2[d].encode(f[y], s.uint32((l.id << 3 | 3) >>> 0)).uint32((l.id << 3 | 4) >>> 0) : i2[d].encode(f[y], s.uint32((l.id << 3 | 2) >>> 0).fork()).ldelim() : s.uint32((l.id << 3 | h) >>> 0)[p](f[y]);
                  } else
                    (!l.optional || null != f && t4.hasOwnProperty(l.name)) && (l.optional || null != f && t4.hasOwnProperty(l.name) || console.warn("注意啦!!!很大概率会报错 类型:", t4.$type ? t4.$type.name : "不晓得", "没有设置对应的属性:", l.name, "检查是不是proto文件属性设置为了required"), void 0 === h ? l.resolvedType.group ? i2[d].encode(f, s.uint32((l.id << 3 | 3) >>> 0)).uint32((l.id << 3 | 4) >>> 0) : i2[d].encode(f, s.uint32((l.id << 3 | 2) >>> 0).fork()).ldelim() : s.uint32((l.id << 3 | h) >>> 0)[p](f));
                }
                return s;
              };
            };
          }
          e2.exports = i, i._configure = function() {
            o2 = r2(582), n = r2(696);
          };
        }, 582: function(e2, t2, r2) {
          e2.exports = i;
          var o2 = r2(998);
          ((i.prototype = Object.create(o2.prototype)).constructor = i).className = "Enum";
          var n = r2(476);
          function i(e3, t3, r3, n2, i2) {
            if (o2.call(this, e3, r3), t3 && "object" != typeof t3)
              throw TypeError("values must be an object");
            if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = n2, this.comments = i2 || {}, this.reserved = void 0, t3)
              for (var a = Object.keys(t3), s = 0; s < a.length; ++s)
                "number" == typeof t3[a[s]] && (this.valuesById[this.values[a[s]] = t3[a[s]]] = a[s]);
          }
          i.fromJSON = function(e3, t3) {
            var r3 = new i(e3, t3.values, t3.options, t3.comment, t3.comments);
            return r3.reserved = t3.reserved, r3;
          }, i.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t3 ? this.comment : void 0, "comments", t3 ? this.comments : void 0]);
          }, i.prototype.add = function(e3, t3, r3) {
            if (!util.isString(e3))
              throw TypeError("name must be a string");
            if (!util.isInteger(t3))
              throw TypeError("id must be an integer");
            if (void 0 !== this.values[e3])
              throw Error("duplicate name '" + e3 + "' in " + this);
            if (this.isReservedId(t3))
              throw Error("id " + t3 + " is reserved in " + this);
            if (this.isReservedName(e3))
              throw Error("name '" + e3 + "' is reserved in " + this);
            if (void 0 !== this.valuesById[t3]) {
              if (!this.options || !this.options.allow_alias)
                throw Error("duplicate id " + t3 + " in " + this);
              this.values[e3] = t3;
            } else
              this.valuesById[this.values[e3] = t3] = e3;
            return this.comments[e3] = r3 || null, this;
          }, i.prototype.remove = function(e3) {
            if (!util.isString(e3))
              throw TypeError("name must be a string");
            var t3 = this.values[e3];
            if (null == t3)
              throw Error("name '" + e3 + "' does not exist in " + this);
            return delete this.valuesById[t3], delete this.values[e3], delete this.comments[e3], this;
          }, i.prototype.isReservedId = function(e3) {
            return n.isReservedId(this.reserved, e3);
          }, i.prototype.isReservedName = function(e3) {
            return n.isReservedName(this.reserved, e3);
          };
        }, 286: function(e2, t2, r2) {
          e2.exports = u;
          var o2, n, i, a, s = r2(998);
          ((u.prototype = Object.create(s.prototype)).constructor = u).className = "Field";
          var c = /^required|optional|repeated$/;
          function u(e3, t3, r3, o3, a2, u2, l) {
            if (i.isObject(o3) ? (l = a2, u2 = o3, o3 = a2 = void 0) : i.isObject(a2) && (l = u2, u2 = a2, a2 = void 0), s.call(this, e3, u2), !i.isInteger(t3) || t3 < 0)
              throw TypeError("id must be a non-negative integer");
            if (!i.isString(r3))
              throw TypeError("type must be a string");
            if (void 0 !== o3 && !c.test(o3 = o3.toString().toLowerCase()))
              throw TypeError("rule must be a string rule");
            if (void 0 !== a2 && !i.isString(a2))
              throw TypeError("extend must be a string");
            this.rule = o3 && "optional" !== o3 ? o3 : void 0, this.type = r3, this.id = t3, this.extend = a2 || void 0, this.required = "required" === o3, this.optional = !this.required, this.repeated = "repeated" === o3, this.map = false, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!i.Long && void 0 !== n.long[r3], this.bytes = "bytes" === r3, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = l;
          }
          u.fromJSON = function(e3, t3) {
            return new u(e3, t3.id, t3.type, t3.rule, t3.extend, t3.options, t3.comment);
          }, Object.defineProperty(u.prototype, "packed", { get: function() {
            return null === this._packed && (this._packed = false !== this.getOption("packed")), this._packed;
          } }), u.prototype.setOption = function(e3, t3, r3) {
            return "packed" === e3 && (this._packed = null), s.prototype.setOption.call(this, e3, t3, r3);
          }, u.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return i.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, u.prototype.resolve = function() {
            if (this.resolved)
              return this;
            if (void 0 === (this.typeDefault = n.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof o2 && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (true !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o2) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)
              this.typeDefault = i.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
            else if (this.bytes && "string" == typeof this.typeDefault) {
              var e3;
              i.utf8.write(this.typeDefault, e3 = i.newBuffer(i.utf8.length(this.typeDefault)), 0), this.typeDefault = e3;
            }
            return this.map ? this.defaultValue = i.emptyObject : this.repeated ? this.defaultValue = i.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), s.prototype.resolve.call(this);
          }, u.d = function(e3, t3, r3, o3) {
            return "function" == typeof t3 ? t3 = i.decorateType(t3).name : t3 && "object" == typeof t3 && (t3 = i.decorateEnum(t3).name), function(n2, a2) {
              i.decorateType(n2.constructor).add(new u(a2, e3, t3, r3, { default: o3 }));
            };
          }, u._configure = function() {
            a = r2(192), o2 = r2(582), n = r2(696), i = r2(935);
          };
        }, 283: function(e2) {
          function t2(e3) {
            return "undefined" != typeof Float32Array ? function() {
              var t3 = new Float32Array([-0]), r3 = new Uint8Array(t3.buffer), o3 = 128 === r3[3];
              function n2(e4, o4, n3) {
                t3[0] = e4, o4[n3] = r3[0], o4[n3 + 1] = r3[1], o4[n3 + 2] = r3[2], o4[n3 + 3] = r3[3];
              }
              function i2(e4, o4, n3) {
                t3[0] = e4, o4[n3] = r3[3], o4[n3 + 1] = r3[2], o4[n3 + 2] = r3[1], o4[n3 + 3] = r3[0];
              }
              function a(e4, o4) {
                return r3[0] = e4[o4], r3[1] = e4[o4 + 1], r3[2] = e4[o4 + 2], r3[3] = e4[o4 + 3], t3[0];
              }
              function s(e4, o4) {
                return r3[3] = e4[o4], r3[2] = e4[o4 + 1], r3[1] = e4[o4 + 2], r3[0] = e4[o4 + 3], t3[0];
              }
              e3.writeFloatLE = o3 ? n2 : i2, e3.writeFloatBE = o3 ? i2 : n2, e3.readFloatLE = o3 ? a : s, e3.readFloatBE = o3 ? s : a;
            }() : function() {
              function t3(e4, t4, r3, o3) {
                var n2 = t4 < 0 ? 1 : 0;
                if (n2 && (t4 = -t4), 0 === t4)
                  e4(1 / t4 > 0 ? 0 : 2147483648, r3, o3);
                else if (isNaN(t4))
                  e4(2143289344, r3, o3);
                else if (t4 > 34028234663852886e22)
                  e4((n2 << 31 | 2139095040) >>> 0, r3, o3);
                else if (t4 < 11754943508222875e-54)
                  e4((n2 << 31 | Math.round(t4 / 1401298464324817e-60)) >>> 0, r3, o3);
                else {
                  var i2 = Math.floor(Math.log(t4) / Math.LN2);
                  e4((n2 << 31 | i2 + 127 << 23 | 8388607 & Math.round(t4 * Math.pow(2, -i2) * 8388608)) >>> 0, r3, o3);
                }
              }
              function a(e4, t4, r3) {
                var o3 = e4(t4, r3), n2 = 2 * (o3 >> 31) + 1, i2 = o3 >>> 23 & 255, a2 = 8388607 & o3;
                return 255 === i2 ? a2 ? NaN : n2 * (1 / 0) : 0 === i2 ? 1401298464324817e-60 * n2 * a2 : n2 * Math.pow(2, i2 - 150) * (a2 + 8388608);
              }
              e3.writeFloatLE = t3.bind(null, r2), e3.writeFloatBE = t3.bind(null, o2), e3.readFloatLE = a.bind(null, n), e3.readFloatBE = a.bind(null, i);
            }(), "undefined" != typeof Float64Array ? function() {
              var t3 = new Float64Array([-0]), r3 = new Uint8Array(t3.buffer), o3 = 128 === r3[7];
              function n2(e4, o4, n3) {
                t3[0] = e4, o4[n3] = r3[0], o4[n3 + 1] = r3[1], o4[n3 + 2] = r3[2], o4[n3 + 3] = r3[3], o4[n3 + 4] = r3[4], o4[n3 + 5] = r3[5], o4[n3 + 6] = r3[6], o4[n3 + 7] = r3[7];
              }
              function i2(e4, o4, n3) {
                t3[0] = e4, o4[n3] = r3[7], o4[n3 + 1] = r3[6], o4[n3 + 2] = r3[5], o4[n3 + 3] = r3[4], o4[n3 + 4] = r3[3], o4[n3 + 5] = r3[2], o4[n3 + 6] = r3[1], o4[n3 + 7] = r3[0];
              }
              function a(e4, o4) {
                return r3[0] = e4[o4], r3[1] = e4[o4 + 1], r3[2] = e4[o4 + 2], r3[3] = e4[o4 + 3], r3[4] = e4[o4 + 4], r3[5] = e4[o4 + 5], r3[6] = e4[o4 + 6], r3[7] = e4[o4 + 7], t3[0];
              }
              function s(e4, o4) {
                return r3[7] = e4[o4], r3[6] = e4[o4 + 1], r3[5] = e4[o4 + 2], r3[4] = e4[o4 + 3], r3[3] = e4[o4 + 4], r3[2] = e4[o4 + 5], r3[1] = e4[o4 + 6], r3[0] = e4[o4 + 7], t3[0];
              }
              e3.writeDoubleLE = o3 ? n2 : i2, e3.writeDoubleBE = o3 ? i2 : n2, e3.readDoubleLE = o3 ? a : s, e3.readDoubleBE = o3 ? s : a;
            }() : function() {
              function t3(e4, t4, r3, o3, n2, i2) {
                var a2 = o3 < 0 ? 1 : 0;
                if (a2 && (o3 = -o3), 0 === o3)
                  e4(0, n2, i2 + t4), e4(1 / o3 > 0 ? 0 : 2147483648, n2, i2 + r3);
                else if (isNaN(o3))
                  e4(0, n2, i2 + t4), e4(2146959360, n2, i2 + r3);
                else if (o3 > 17976931348623157e292)
                  e4(0, n2, i2 + t4), e4((a2 << 31 | 2146435072) >>> 0, n2, i2 + r3);
                else {
                  var s;
                  if (o3 < 22250738585072014e-324)
                    e4((s = o3 / 5e-324) >>> 0, n2, i2 + t4), e4((a2 << 31 | s / 4294967296) >>> 0, n2, i2 + r3);
                  else {
                    var c = Math.floor(Math.log(o3) / Math.LN2);
                    1024 === c && (c = 1023), e4(4503599627370496 * (s = o3 * Math.pow(2, -c)) >>> 0, n2, i2 + t4), e4((a2 << 31 | c + 1023 << 20 | 1048576 * s & 1048575) >>> 0, n2, i2 + r3);
                  }
                }
              }
              function a(e4, t4, r3, o3, n2) {
                var i2 = e4(o3, n2 + t4), a2 = e4(o3, n2 + r3), s = 2 * (a2 >> 31) + 1, c = a2 >>> 20 & 2047, u = 4294967296 * (1048575 & a2) + i2;
                return 2047 === c ? u ? NaN : s * (1 / 0) : 0 === c ? 5e-324 * s * u : s * Math.pow(2, c - 1075) * (u + 4503599627370496);
              }
              e3.writeDoubleLE = t3.bind(null, r2, 0, 4), e3.writeDoubleBE = t3.bind(null, o2, 4, 0), e3.readDoubleLE = a.bind(null, n, 0, 4), e3.readDoubleBE = a.bind(null, i, 4, 0);
            }(), e3;
          }
          function r2(e3, t3, r3) {
            t3[r3] = 255 & e3, t3[r3 + 1] = e3 >>> 8 & 255, t3[r3 + 2] = e3 >>> 16 & 255, t3[r3 + 3] = e3 >>> 24;
          }
          function o2(e3, t3, r3) {
            t3[r3] = e3 >>> 24, t3[r3 + 1] = e3 >>> 16 & 255, t3[r3 + 2] = e3 >>> 8 & 255, t3[r3 + 3] = 255 & e3;
          }
          function n(e3, t3) {
            return (e3[t3] | e3[t3 + 1] << 8 | e3[t3 + 2] << 16 | e3[t3 + 3] << 24) >>> 0;
          }
          function i(e3, t3) {
            return (e3[t3] << 24 | e3[t3 + 1] << 16 | e3[t3 + 2] << 8 | e3[t3 + 3]) >>> 0;
          }
          e2.exports = t2(t2);
        }, 939: function(e2) {
          e2.exports = r2;
          var t2 = null;
          try {
            t2 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
          } catch (e3) {
          }
          function r2(e3, t3, r3) {
            this.low = 0 | e3, this.high = 0 | t3, this.unsigned = !!r3;
          }
          function o2(e3) {
            return true === (e3 && e3.__isLong__);
          }
          r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = o2;
          var n = {}, i = {};
          function a(e3, t3) {
            var r3, o3, a2;
            return t3 ? (a2 = 0 <= (e3 >>>= 0) && e3 < 256) && (o3 = i[e3]) ? o3 : (r3 = c(e3, (0 | e3) < 0 ? -1 : 0, true), a2 && (i[e3] = r3), r3) : (a2 = -128 <= (e3 |= 0) && e3 < 128) && (o3 = n[e3]) ? o3 : (r3 = c(e3, e3 < 0 ? -1 : 0, false), a2 && (n[e3] = r3), r3);
          }
          function s(e3, t3) {
            if (isNaN(e3))
              return t3 ? E : g;
            if (t3) {
              if (e3 < 0)
                return E;
              if (e3 >= h)
                return R;
            } else {
              if (e3 <= -f)
                return O;
              if (e3 + 1 >= f)
                return _;
            }
            return e3 < 0 ? s(-e3, t3).neg() : c(e3 % p | 0, e3 / p | 0, t3);
          }
          function c(e3, t3, o3) {
            return new r2(e3, t3, o3);
          }
          r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
          var u = Math.pow;
          function l(e3, t3, r3) {
            if (0 === e3.length)
              throw Error("empty string");
            if ("NaN" === e3 || "Infinity" === e3 || "+Infinity" === e3 || "-Infinity" === e3)
              return g;
            if ("number" == typeof t3 ? (r3 = t3, t3 = false) : t3 = !!t3, (r3 = r3 || 10) < 2 || 36 < r3)
              throw RangeError("radix");
            var o3;
            if ((o3 = e3.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (0 === o3)
              return l(e3.substring(1), t3, r3).neg();
            for (var n2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e3.length; a2 += 8) {
              var c2 = Math.min(8, e3.length - a2), d2 = parseInt(e3.substring(a2, a2 + c2), r3);
              if (c2 < 8) {
                var p2 = s(u(r3, c2));
                i2 = i2.mul(p2).add(s(d2));
              } else
                i2 = (i2 = i2.mul(n2)).add(s(d2));
            }
            return i2.unsigned = t3, i2;
          }
          function d(e3, t3) {
            return "number" == typeof e3 ? s(e3, t3) : "string" == typeof e3 ? l(e3, t3) : c(e3.low, e3.high, "boolean" == typeof t3 ? t3 : e3.unsigned);
          }
          r2.fromString = l, r2.fromValue = d;
          var p = 4294967296, h = p * p, f = h / 2, m = a(1 << 24), g = a(0);
          r2.ZERO = g;
          var E = a(0, true);
          r2.UZERO = E;
          var y = a(1);
          r2.ONE = y;
          var v = a(1, true);
          r2.UONE = v;
          var T = a(-1);
          r2.NEG_ONE = T;
          var _ = c(-1, 2147483647, false);
          r2.MAX_VALUE = _;
          var R = c(-1, -1, true);
          r2.MAX_UNSIGNED_VALUE = R;
          var O = c(0, -2147483648, false);
          r2.MIN_VALUE = O;
          var I = r2.prototype;
          I.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, I.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * p + (this.low >>> 0) : this.high * p + (this.low >>> 0);
          }, I.toString = function(e3) {
            if ((e3 = e3 || 10) < 2 || 36 < e3)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(O)) {
                var t3 = s(e3), r3 = this.div(t3), o3 = r3.mul(t3).sub(this);
                return r3.toString(e3) + o3.toInt().toString(e3);
              }
              return "-" + this.neg().toString(e3);
            }
            for (var n2 = s(u(e3, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
              var c2 = i2.div(n2), l2 = (i2.sub(c2.mul(n2)).toInt() >>> 0).toString(e3);
              if ((i2 = c2).isZero())
                return l2 + a2;
              for (; l2.length < 6; )
                l2 = "0" + l2;
              a2 = "" + l2 + a2;
            }
          }, I.getHighBits = function() {
            return this.high;
          }, I.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, I.getLowBits = function() {
            return this.low;
          }, I.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, I.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
            for (var e3 = 0 != this.high ? this.high : this.low, t3 = 31; t3 > 0 && 0 == (e3 & 1 << t3); t3--)
              ;
            return 0 != this.high ? t3 + 33 : t3 + 1;
          }, I.isZero = function() {
            return 0 === this.high && 0 === this.low;
          }, I.eqz = I.isZero, I.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, I.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, I.isOdd = function() {
            return 1 == (1 & this.low);
          }, I.isEven = function() {
            return 0 == (1 & this.low);
          }, I.equals = function(e3) {
            return o2(e3) || (e3 = d(e3)), (this.unsigned === e3.unsigned || this.high >>> 31 != 1 || e3.high >>> 31 != 1) && this.high === e3.high && this.low === e3.low;
          }, I.eq = I.equals, I.notEquals = function(e3) {
            return !this.eq(e3);
          }, I.neq = I.notEquals, I.ne = I.notEquals, I.lessThan = function(e3) {
            return this.comp(e3) < 0;
          }, I.lt = I.lessThan, I.lessThanOrEqual = function(e3) {
            return this.comp(e3) <= 0;
          }, I.lte = I.lessThanOrEqual, I.le = I.lessThanOrEqual, I.greaterThan = function(e3) {
            return this.comp(e3) > 0;
          }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(e3) {
            return this.comp(e3) >= 0;
          }, I.gte = I.greaterThanOrEqual, I.ge = I.greaterThanOrEqual, I.compare = function(e3) {
            if (o2(e3) || (e3 = d(e3)), this.eq(e3))
              return 0;
            var t3 = this.isNegative(), r3 = e3.isNegative();
            return t3 && !r3 ? -1 : !t3 && r3 ? 1 : this.unsigned ? e3.high >>> 0 > this.high >>> 0 || e3.high === this.high && e3.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e3).isNegative() ? -1 : 1;
          }, I.comp = I.compare, I.negate = function() {
            return !this.unsigned && this.eq(O) ? O : this.not().add(y);
          }, I.neg = I.negate, I.add = function(e3) {
            o2(e3) || (e3 = d(e3));
            var t3 = this.high >>> 16, r3 = 65535 & this.high, n2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e3.high >>> 16, s2 = 65535 & e3.high, u2 = e3.low >>> 16, l2 = 0, p2 = 0, h2 = 0, f2 = 0;
            return h2 += (f2 += i2 + (65535 & e3.low)) >>> 16, p2 += (h2 += n2 + u2) >>> 16, l2 += (p2 += r3 + s2) >>> 16, l2 += t3 + a2, c((h2 &= 65535) << 16 | (f2 &= 65535), (l2 &= 65535) << 16 | (p2 &= 65535), this.unsigned);
          }, I.subtract = function(e3) {
            return o2(e3) || (e3 = d(e3)), this.add(e3.neg());
          }, I.sub = I.subtract, I.multiply = function(e3) {
            if (this.isZero())
              return g;
            if (o2(e3) || (e3 = d(e3)), t2)
              return c(t2.mul(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned);
            if (e3.isZero())
              return g;
            if (this.eq(O))
              return e3.isOdd() ? O : g;
            if (e3.eq(O))
              return this.isOdd() ? O : g;
            if (this.isNegative())
              return e3.isNegative() ? this.neg().mul(e3.neg()) : this.neg().mul(e3).neg();
            if (e3.isNegative())
              return this.mul(e3.neg()).neg();
            if (this.lt(m) && e3.lt(m))
              return s(this.toNumber() * e3.toNumber(), this.unsigned);
            var r3 = this.high >>> 16, n2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e3.high >>> 16, l2 = 65535 & e3.high, p2 = e3.low >>> 16, h2 = 65535 & e3.low, f2 = 0, E2 = 0, y2 = 0, v2 = 0;
            return y2 += (v2 += a2 * h2) >>> 16, E2 += (y2 += i2 * h2) >>> 16, y2 &= 65535, E2 += (y2 += a2 * p2) >>> 16, f2 += (E2 += n2 * h2) >>> 16, E2 &= 65535, f2 += (E2 += i2 * p2) >>> 16, E2 &= 65535, f2 += (E2 += a2 * l2) >>> 16, f2 += r3 * h2 + n2 * p2 + i2 * l2 + a2 * u2, c((y2 &= 65535) << 16 | (v2 &= 65535), (f2 &= 65535) << 16 | (E2 &= 65535), this.unsigned);
          }, I.mul = I.multiply, I.divide = function(e3) {
            if (o2(e3) || (e3 = d(e3)), e3.isZero())
              throw Error("division by zero");
            var r3, n2, i2;
            if (t2)
              return this.unsigned || -2147483648 !== this.high || -1 !== e3.low || -1 !== e3.high ? c((this.unsigned ? t2.div_u : t2.div_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this;
            if (this.isZero())
              return this.unsigned ? E : g;
            if (this.unsigned) {
              if (e3.unsigned || (e3 = e3.toUnsigned()), e3.gt(this))
                return E;
              if (e3.gt(this.shru(1)))
                return v;
              i2 = E;
            } else {
              if (this.eq(O))
                return e3.eq(y) || e3.eq(T) ? O : e3.eq(O) ? y : (r3 = this.shr(1).div(e3).shl(1)).eq(g) ? e3.isNegative() ? y : T : (n2 = this.sub(e3.mul(r3)), i2 = r3.add(n2.div(e3)));
              if (e3.eq(O))
                return this.unsigned ? E : g;
              if (this.isNegative())
                return e3.isNegative() ? this.neg().div(e3.neg()) : this.neg().div(e3).neg();
              if (e3.isNegative())
                return this.div(e3.neg()).neg();
              i2 = g;
            }
            for (n2 = this; n2.gte(e3); ) {
              r3 = Math.max(1, Math.floor(n2.toNumber() / e3.toNumber()));
              for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), p2 = s(r3), h2 = p2.mul(e3); h2.isNegative() || h2.gt(n2); )
                h2 = (p2 = s(r3 -= l2, this.unsigned)).mul(e3);
              p2.isZero() && (p2 = y), i2 = i2.add(p2), n2 = n2.sub(h2);
            }
            return i2;
          }, I.div = I.divide, I.modulo = function(e3) {
            return o2(e3) || (e3 = d(e3)), t2 ? c((this.unsigned ? t2.rem_u : t2.rem_s)(this.low, this.high, e3.low, e3.high), t2.get_high(), this.unsigned) : this.sub(this.div(e3).mul(e3));
          }, I.mod = I.modulo, I.rem = I.modulo, I.not = function() {
            return c(~this.low, ~this.high, this.unsigned);
          }, I.and = function(e3) {
            return o2(e3) || (e3 = d(e3)), c(this.low & e3.low, this.high & e3.high, this.unsigned);
          }, I.or = function(e3) {
            return o2(e3) || (e3 = d(e3)), c(this.low | e3.low, this.high | e3.high, this.unsigned);
          }, I.xor = function(e3) {
            return o2(e3) || (e3 = d(e3)), c(this.low ^ e3.low, this.high ^ e3.high, this.unsigned);
          }, I.shiftLeft = function(e3) {
            return o2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? c(this.low << e3, this.high << e3 | this.low >>> 32 - e3, this.unsigned) : c(0, this.low << e3 - 32, this.unsigned);
          }, I.shl = I.shiftLeft, I.shiftRight = function(e3) {
            return o2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63) ? this : e3 < 32 ? c(this.low >>> e3 | this.high << 32 - e3, this.high >> e3, this.unsigned) : c(this.high >> e3 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(e3) {
            if (o2(e3) && (e3 = e3.toInt()), 0 == (e3 &= 63))
              return this;
            var t3 = this.high;
            return e3 < 32 ? c(this.low >>> e3 | t3 << 32 - e3, t3 >>> e3, this.unsigned) : c(32 === e3 ? t3 : t3 >>> e3 - 32, 0, this.unsigned);
          }, I.shru = I.shiftRightUnsigned, I.shr_u = I.shiftRightUnsigned, I.toSigned = function() {
            return this.unsigned ? c(this.low, this.high, false) : this;
          }, I.toUnsigned = function() {
            return this.unsigned ? this : c(this.low, this.high, true);
          }, I.toBytes = function(e3) {
            return e3 ? this.toBytesLE() : this.toBytesBE();
          }, I.toBytesLE = function() {
            var e3 = this.high, t3 = this.low;
            return [255 & t3, t3 >>> 8 & 255, t3 >>> 16 & 255, t3 >>> 24, 255 & e3, e3 >>> 8 & 255, e3 >>> 16 & 255, e3 >>> 24];
          }, I.toBytesBE = function() {
            var e3 = this.high, t3 = this.low;
            return [e3 >>> 24, e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3, t3 >>> 24, t3 >>> 16 & 255, t3 >>> 8 & 255, 255 & t3];
          }, r2.fromBytes = function(e3, t3, o3) {
            return o3 ? r2.fromBytesLE(e3, t3) : r2.fromBytesBE(e3, t3);
          }, r2.fromBytesLE = function(e3, t3) {
            return new r2(e3[0] | e3[1] << 8 | e3[2] << 16 | e3[3] << 24, e3[4] | e3[5] << 8 | e3[6] << 16 | e3[7] << 24, t3);
          }, r2.fromBytesBE = function(e3, t3) {
            return new r2(e3[4] << 24 | e3[5] << 16 | e3[6] << 8 | e3[7], e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], t3);
          };
        }, 365: function(e2, t2, r2) {
          e2.exports = n;
          var o2 = r2(935);
          function n(e3, t3) {
            this.lo = e3 >>> 0, this.hi = t3 >>> 0;
          }
          var i = n.zero = new n(0, 0);
          i.toNumber = function() {
            return 0;
          }, i.zzEncode = i.zzDecode = function() {
            return this;
          }, i.length = function() {
            return 1;
          };
          var a = n.zeroHash = "\0\0\0\0\0\0\0\0";
          n.fromNumber = function(e3) {
            if (0 === e3)
              return i;
            var t3 = e3 < 0;
            t3 && (e3 = -e3);
            var r3 = e3 >>> 0, o3 = (e3 - r3) / 4294967296 >>> 0;
            return t3 && (o3 = ~o3 >>> 0, r3 = ~r3 >>> 0, ++r3 > 4294967295 && (r3 = 0, ++o3 > 4294967295 && (o3 = 0))), new n(r3, o3);
          }, n.from = function(e3) {
            if ("number" == typeof e3)
              return n.fromNumber(e3);
            if ("string" == typeof e3 || e3 instanceof String) {
              if (!o2.Long)
                return n.fromNumber(parseInt(e3, 10));
              e3 = o2.Long.fromString(e3);
            }
            return e3.low || e3.high ? new n(e3.low >>> 0, e3.high >>> 0) : i;
          }, n.prototype.toNumber = function(e3) {
            if (!e3 && this.hi >>> 31) {
              var t3 = 1 + ~this.lo >>> 0, r3 = ~this.hi >>> 0;
              return t3 || (r3 = r3 + 1 >>> 0), -(t3 + 4294967296 * r3);
            }
            return this.lo + 4294967296 * this.hi;
          }, n.prototype.toLong = function(e3) {
            return o2.Long ? new o2.Long(0 | this.lo, 0 | this.hi, Boolean(e3)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e3) };
          };
          var s = String.prototype.charCodeAt;
          n.fromHash = function(e3) {
            return e3 === a ? i : new n((s.call(e3, 0) | s.call(e3, 1) << 8 | s.call(e3, 2) << 16 | s.call(e3, 3) << 24) >>> 0, (s.call(e3, 4) | s.call(e3, 5) << 8 | s.call(e3, 6) << 16 | s.call(e3, 7) << 24) >>> 0);
          }, n.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
          }, n.prototype.zzEncode = function() {
            var e3 = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e3) >>> 0, this.lo = (this.lo << 1 ^ e3) >>> 0, this;
          }, n.prototype.zzDecode = function() {
            var e3 = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e3) >>> 0, this.hi = (this.hi >>> 1 ^ e3) >>> 0, this;
          }, n.prototype.length = function() {
            var e3 = this.lo, t3 = (this.lo >>> 28 | this.hi << 4) >>> 0, r3 = this.hi >>> 24;
            return 0 === r3 ? 0 === t3 ? e3 < 16384 ? e3 < 128 ? 1 : 2 : e3 < 2097152 ? 3 : 4 : t3 < 16384 ? t3 < 128 ? 5 : 6 : t3 < 2097152 ? 7 : 8 : r3 < 128 ? 9 : 10;
          };
        }, 435: function(e2, t2, r2) {
          e2.exports = a;
          var o2, n, i = r2(286);
          function a(e3, t3, r3, o3, a2, s) {
            if (i.call(this, e3, t3, o3, void 0, void 0, a2, s), !n.isString(r3))
              throw TypeError("keyType must be a string");
            this.keyType = r3, this.resolvedKeyType = null, this.map = true;
          }
          ((a.prototype = Object.create(i.prototype)).constructor = a).className = "MapField", a.fromJSON = function(e3, t3) {
            return new a(e3, t3.id, t3.keyType, t3.type, t3.options, t3.comment);
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return n.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, a.prototype.resolve = function() {
            if (this.resolved)
              return this;
            if (void 0 === o2.mapKey[this.keyType])
              throw Error("invalid key type: " + this.keyType);
            return i.prototype.resolve.call(this);
          }, a.d = function(e3, t3, r3) {
            return "function" == typeof r3 ? r3 = n.decorateType(r3).name : r3 && "object" == typeof r3 && (r3 = n.decorateEnum(r3).name), function(o3, i2) {
              n.decorateType(o3.constructor).add(new a(i2, e3, t3, r3));
            };
          }, a._configure = function() {
            o2 = r2(696), n = r2(935);
          };
        }, 339: function(e2, t2, r2) {
          "use strict";
          var o2;
          function n(e3) {
            if (e3)
              for (var t3 = Object.keys(e3), r3 = 0; r3 < t3.length; ++r3)
                this[t3[r3]] = e3[t3[r3]];
          }
          e2.exports = n, n.create = function(e3) {
            return this.$type.create(e3);
          }, n.encode = function(e3, t3) {
            return arguments.length ? 1 == arguments.length ? this.$type.encode(arguments[0]) : this.$type.encode(arguments[0], arguments[1]) : this.$type.encode(this);
          }, n.encodeDelimited = function(e3, t3) {
            return this.$type.encodeDelimited(e3, t3);
          }, n.decode = function(e3) {
            return this.$type.decode(e3);
          }, n.decodeDelimited = function(e3) {
            return this.$type.decodeDelimited(e3);
          }, n.verify = function(e3) {
            return this.$type.verify(e3);
          }, n.fromObject = function(e3) {
            return this.$type.fromObject(e3);
          }, n.toObject = function(e3, t3) {
            return e3 = e3 || this, this.$type.toObject(e3, t3);
          }, n.prototype.toJSON = function() {
            return this.$type.toObject(this, o2.toJSONOptions);
          }, n.set = function(e3, t3) {
            n[e3] = t3;
          }, n.get = function(e3) {
            return n[e3];
          }, n._configure = function() {
            o2 = r2(935);
          };
        }, 484: function(e2, t2, r2) {
          "use strict";
          e2.exports = i;
          var o2, n = r2(998);
          function i(e3, t3, r3, i2, a, s, c, u) {
            if (o2.isObject(a) ? (c = a, a = s = void 0) : o2.isObject(s) && (c = s, s = void 0), void 0 !== t3 && !o2.isString(t3))
              throw TypeError("type must be a string");
            if (!o2.isString(r3))
              throw TypeError("requestType must be a string");
            if (!o2.isString(i2))
              throw TypeError("responseType must be a string");
            n.call(this, e3, c), this.type = t3 || "rpc", this.requestType = r3, this.requestStream = !!a || void 0, this.responseType = i2, this.responseStream = !!s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = u;
          }
          ((i.prototype = Object.create(n.prototype)).constructor = i).className = "Method", i.fromJSON = function(e3, t3) {
            return new i(e3, t3.type, t3.requestType, t3.responseType, t3.requestStream, t3.responseStream, t3.options, t3.comment);
          }, i.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return o2.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t3 ? this.comment : void 0]);
          }, i.prototype.resolve = function() {
            return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), n.prototype.resolve.call(this));
          }, i._configure = function() {
            o2 = r2(935);
          };
        }, 476: function(e2, t2, r2) {
          e2.exports = l;
          var o2, n, i, a, s, c = r2(998);
          function u(e3, t3) {
            if (e3 && e3.length) {
              for (var r3 = {}, o3 = 0; o3 < e3.length; ++o3)
                r3[e3[o3].name] = e3[o3].toJSON(t3);
              return r3;
            }
          }
          function l(e3, t3) {
            c.call(this, e3, t3), this.nested = void 0, this._nestedArray = null;
          }
          function d(e3) {
            return e3._nestedArray = null, e3;
          }
          ((l.prototype = Object.create(c.prototype)).constructor = l).className = "Namespace", l.fromJSON = function(e3, t3) {
            return new l(e3, t3.options).addJSON(t3.nested);
          }, l.arrayToJSON = u, l.isReservedId = function(e3, t3) {
            if (e3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                if ("string" != typeof e3[r3] && e3[r3][0] <= t3 && e3[r3][1] >= t3)
                  return true;
            }
            return false;
          }, l.isReservedName = function(e3, t3) {
            if (e3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                if (e3[r3] === t3)
                  return true;
            }
            return false;
          }, Object.defineProperty(l.prototype, "nestedArray", { get: function() {
            return this._nestedArray || (this._nestedArray = i.toArray(this.nested));
          } }), l.prototype.toJSON = function(e3) {
            return i.toObject(["options", this.options, "nested", u(this.nestedArray, e3)]);
          }, l.prototype.addJSON = function(e3) {
            if (e3)
              for (var t3, r3 = Object.keys(e3), i2 = 0; i2 < r3.length; ++i2)
                t3 = e3[r3[i2]], this.add((void 0 !== t3.fields ? a.fromJSON : void 0 !== t3.values ? o2.fromJSON : void 0 !== t3.methods ? s.fromJSON : void 0 !== t3.id ? n.fromJSON : l.fromJSON)(r3[i2], t3));
            return this;
          }, l.prototype.get = function(e3) {
            return this.nested && this.nested[e3] || null;
          }, l.prototype.getEnum = function(e3) {
            if (this.nested && this.nested[e3] instanceof o2)
              return this.nested[e3].values;
            throw Error("no such enum: " + e3);
          }, l.prototype.add = function(e3) {
            if (!(e3 instanceof n && void 0 !== e3.extend || e3 instanceof a || e3 instanceof o2 || e3 instanceof s || e3 instanceof l))
              throw TypeError("object must be a valid nested object");
            if (this.nested) {
              var t3 = this.get(e3.name);
              if (t3) {
                if (!(t3 instanceof l && e3 instanceof l) || t3 instanceof a || t3 instanceof s)
                  throw Error("duplicate name '" + e3.name + "' in " + this);
                for (var r3 = t3.nestedArray, i2 = 0; i2 < r3.length; ++i2)
                  e3.add(r3[i2]);
                this.remove(t3), this.nested || (this.nested = {}), e3.setOptions(t3.options, true);
              }
            } else
              this.nested = {};
            return this.nested[e3.name] = e3, e3.onAdd(this), d(this);
          }, l.prototype.remove = function(e3) {
            if (!(e3 instanceof c))
              throw TypeError("object must be a ReflectionObject");
            if (e3.parent !== this)
              throw Error(e3 + " is not a member of " + this);
            return delete this.nested[e3.name], Object.keys(this.nested).length || (this.nested = void 0), e3.onRemove(this), d(this);
          }, l.prototype.define = function(e3, t3) {
            if (i.isString(e3))
              e3 = e3.split(".");
            else if (!Array.isArray(e3))
              throw TypeError("illegal path");
            if (e3 && e3.length && "" === e3[0])
              throw Error("path must be relative");
            for (var r3 = this; e3.length > 0; ) {
              var o3 = e3.shift();
              if (r3.nested && r3.nested[o3]) {
                if (!((r3 = r3.nested[o3]) instanceof l))
                  throw Error("path conflicts with non-namespace objects");
              } else
                r3.add(r3 = new l(o3));
            }
            return t3 && r3.addJSON(t3), r3;
          }, l.prototype.resolveAll = function() {
            for (var e3 = this.nestedArray, t3 = 0; t3 < e3.length; )
              e3[t3] instanceof l ? e3[t3++].resolveAll() : e3[t3++].resolve();
            return this.resolve();
          }, l.prototype.lookup = function(e3, t3, r3) {
            if ("boolean" == typeof t3 ? (r3 = t3, t3 = void 0) : t3 && !Array.isArray(t3) && (t3 = [t3]), i.isString(e3) && e3.length) {
              if ("." === e3)
                return this.root;
              e3 = e3.split(".");
            } else if (!e3.length)
              return this;
            if ("" === e3[0])
              return this.root.lookup(e3.slice(1), t3);
            var o3 = this.get(e3[0]);
            if (o3) {
              if (1 === e3.length) {
                if (!t3 || t3.indexOf(o3.constructor) > -1)
                  return o3;
              } else if (o3 instanceof l && (o3 = o3.lookup(e3.slice(1), t3, true)))
                return o3;
            } else
              for (var n2 = 0; n2 < this.nestedArray.length; ++n2)
                if (this._nestedArray[n2] instanceof l && (o3 = this._nestedArray[n2].lookup(e3, t3, true)))
                  return o3;
            return null === this.parent || r3 ? null : this.parent.lookup(e3, t3);
          }, l.prototype.lookupType = function(e3) {
            var t3 = this.lookup(e3, [a]);
            if (!t3)
              throw Error("no such type: " + e3);
            return t3;
          }, l.prototype.lookupEnum = function(e3) {
            var t3 = this.lookup(e3, [o2]);
            if (!t3)
              throw Error("no such Enum '" + e3 + "' in " + this);
            return t3;
          }, l.prototype.lookupTypeOrEnum = function(e3) {
            var t3 = this.lookup(e3, [a, o2]);
            if (!t3)
              throw Error("no such Type or Enum '" + e3 + "' in " + this);
            return t3;
          }, l.prototype.lookupService = function(e3) {
            var t3 = this.lookup(e3, [s]);
            if (!t3)
              throw Error("no such Service '" + e3 + "' in " + this);
            return t3;
          }, l._configure = function() {
            o2 = r2(582), n = r2(286), i = r2(935), a = r2(192), s = r2(447);
          };
        }, 998: function(e2, t2, r2) {
          "use strict";
          var o2, n;
          function i(e3, t3) {
            if (!o2.isString(e3))
              throw TypeError("name must be a string");
            if (t3 && !o2.isObject(t3))
              throw TypeError("options must be an object");
            this.options = t3, this.name = e3, this.parent = null, this.resolved = false, this.comment = null, this.filename = null;
          }
          e2.exports = i, i.className = "ReflectionObject", Object.defineProperties(i.prototype, { root: { get: function() {
            for (var e3 = this; null !== e3.parent; )
              e3 = e3.parent;
            return e3;
          } }, fullName: { get: function() {
            for (var e3 = [this.name], t3 = this.parent; t3; )
              e3.unshift(t3.name), t3 = t3.parent;
            return e3.join(".");
          } } }), i.prototype.toJSON = function() {
            throw Error();
          }, i.prototype.onAdd = function(e3) {
            this.parent && this.parent !== e3 && this.parent.remove(this), this.parent = e3, this.resolved = false;
            var t3 = e3.root;
            t3 instanceof n && t3._handleAdd(this);
          }, i.prototype.onRemove = function(e3) {
            var t3 = e3.root;
            t3 instanceof n && t3._handleRemove(this), this.parent = null, this.resolved = false;
          }, i.prototype.resolve = function() {
            return this.resolved || this.root instanceof n && (this.resolved = true), this;
          }, i.prototype.getOption = function(e3) {
            if (this.options)
              return this.options[e3];
          }, i.prototype.setOption = function(e3, t3, r3) {
            return r3 && this.options && void 0 !== this.options[e3] || ((this.options || (this.options = {}))[e3] = t3), this;
          }, i.prototype.setOptions = function(e3, t3) {
            if (e3)
              for (var r3 = Object.keys(e3), o3 = 0; o3 < r3.length; ++o3)
                this.setOption(r3[o3], e3[r3[o3]], t3);
            return this;
          }, i.prototype.toString = function() {
            var e3 = this.constructor.className, t3 = this.fullName;
            return t3.length ? e3 + " " + t3 : e3;
          }, i._configure = function(e3) {
            n = r2(685), o2 = r2(935);
          };
        }, 735: function(e2, t2, r2) {
          e2.exports = a;
          var o2, n, i = r2(998);
          function a(e3, t3, r3, o3) {
            if (Array.isArray(t3) || (r3 = t3, t3 = void 0), i.call(this, e3, r3), void 0 !== t3 && !Array.isArray(t3))
              throw TypeError("fieldNames must be an Array");
            this.oneof = t3 || [], this.fieldsArray = [], this.comment = o3;
          }
          function s(e3) {
            if (e3.parent)
              for (var t3 = 0; t3 < e3.fieldsArray.length; ++t3)
                e3.fieldsArray[t3].parent || e3.parent.add(e3.fieldsArray[t3]);
          }
          ((a.prototype = Object.create(i.prototype)).constructor = a).className = "OneOf", a.fromJSON = function(e3, t3) {
            return new a(e3, t3.oneof, t3.options, t3.comment);
          }, a.prototype.toJSON = function(e3) {
            var t3 = !!e3 && Boolean(e3.keepComments);
            return n.toObject(["options", this.options, "oneof", this.oneof, "comment", t3 ? this.comment : void 0]);
          }, a.prototype.add = function(e3) {
            if (!(e3 instanceof o2))
              throw TypeError("field must be a Field");
            return e3.parent && e3.parent !== this.parent && e3.parent.remove(e3), this.oneof.push(e3.name), this.fieldsArray.push(e3), e3.partOf = this, s(this), this;
          }, a.prototype.remove = function(e3) {
            if (!(e3 instanceof o2))
              throw TypeError("field must be a Field");
            var t3 = this.fieldsArray.indexOf(e3);
            if (t3 < 0)
              throw Error(e3 + " is not a member of " + this);
            return this.fieldsArray.splice(t3, 1), (t3 = this.oneof.indexOf(e3.name)) > -1 && this.oneof.splice(t3, 1), e3.partOf = null, this;
          }, a.prototype.onAdd = function(e3) {
            i.prototype.onAdd.call(this, e3);
            for (var t3 = 0; t3 < this.oneof.length; ++t3) {
              var r3 = e3.get(this.oneof[t3]);
              r3 && !r3.partOf && (r3.partOf = this, this.fieldsArray.push(r3));
            }
            s(this);
          }, a.prototype.onRemove = function(e3) {
            for (var t3, r3 = 0; r3 < this.fieldsArray.length; ++r3)
              (t3 = this.fieldsArray[r3]).parent && t3.parent.remove(t3);
            i.prototype.onRemove.call(this, e3);
          }, a.d = function() {
            for (var e3 = new Array(arguments.length), t3 = 0; t3 < arguments.length; )
              e3[t3] = arguments[t3++];
            return function(t4, r3) {
              n.decorateType(t4.constructor).add(new a(r3, e3)), Object.defineProperty(t4, r3, { get: n.oneOfGetter(e3), set: n.oneOfSetter(e3) });
            };
          }, a._configure = function() {
            o2 = r2(286), n = r2(935);
          };
        }, 845: function(e2, t2, r2) {
          "use strict";
          var o2, n, i, a, s, c, u, l, d, p, h;
          e2.exports = I, I.filename = null, I.defaults = { keepCase: false };
          var f = /^[1-9][0-9]*$/, m = /^-?[1-9][0-9]*$/, g = /^0[x][0-9a-fA-F]+$/, E = /^-?0[x][0-9a-fA-F]+$/, y = /^0[0-7]+$/, v = /^-?0[0-7]+$/, T = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, _ = /^[a-zA-Z_][a-zA-Z_0-9]*$/, R = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, O = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
          function I(e3, t3, r3) {
            t3 instanceof n || (r3 = t3, t3 = new n()), r3 || (r3 = I.defaults);
            var S, C, N, A, M, b = o2(e3, r3.alternateCommentMode || false), U = b.next, P = b.push, w = b.peek, k = b.skip, L = b.cmnt, D = true, x = false, G = t3, B = r3.keepCase ? function(e4) {
              return e4;
            } : h.camelCase;
            function H(e4, t4, r4) {
              var o3 = I.filename;
              return r4 || (I.filename = null), Error("illegal " + (t4 || "token") + " '" + e4 + "' (" + (o3 ? o3 + ", " : "") + "line " + b.line + ")");
            }
            function j() {
              var e4, t4 = [];
              do {
                if ('"' !== (e4 = U()) && "'" !== e4)
                  throw H(e4);
                t4.push(U()), k(e4), e4 = w();
              } while ('"' === e4 || "'" === e4);
              return t4.join("");
            }
            function F(e4) {
              var t4 = U();
              switch (t4) {
                case "'":
                case '"':
                  return P(t4), j();
                case "true":
                case "TRUE":
                  return true;
                case "false":
                case "FALSE":
                  return false;
              }
              try {
                return function(e5, t5) {
                  var r4 = 1;
                  switch ("-" === e5.charAt(0) && (r4 = -1, e5 = e5.substring(1)), e5) {
                    case "inf":
                    case "INF":
                    case "Inf":
                      return r4 * (1 / 0);
                    case "nan":
                    case "NAN":
                    case "Nan":
                    case "NaN":
                      return NaN;
                    case "0":
                      return 0;
                  }
                  if (f.test(e5))
                    return r4 * parseInt(e5, 10);
                  if (g.test(e5))
                    return r4 * parseInt(e5, 16);
                  if (y.test(e5))
                    return r4 * parseInt(e5, 8);
                  if (T.test(e5))
                    return r4 * parseFloat(e5);
                  throw H(e5, "number", true);
                }(t4);
              } catch (r4) {
                if (e4 && R.test(t4))
                  return t4;
                throw H(t4, "value");
              }
            }
            function W(e4, t4) {
              var r4, o3;
              do {
                !t4 || '"' !== (r4 = w()) && "'" !== r4 ? e4.push([o3 = K(U()), k("to", true) ? K(U()) : o3]) : e4.push(j());
              } while (k(",", true));
              k(";");
            }
            function K(e4, t4) {
              switch (e4) {
                case "max":
                case "MAX":
                case "Max":
                  return 536870911;
                case "0":
                  return 0;
              }
              if (!t4 && "-" === e4.charAt(0))
                throw H(e4, "id");
              if (m.test(e4))
                return parseInt(e4, 10);
              if (E.test(e4))
                return parseInt(e4, 16);
              if (v.test(e4))
                return parseInt(e4, 8);
              throw H(e4, "id");
            }
            function q() {
              if (void 0 !== S)
                throw H("package");
              if (S = U(), !R.test(S))
                throw H(S, "name");
              G = G.define(S), k(";");
            }
            function z() {
              var e4, t4 = w();
              switch (t4) {
                case "weak":
                  e4 = N || (N = []), U();
                  break;
                case "public":
                  U();
                default:
                  e4 = C || (C = []);
              }
              t4 = j(), k(";"), e4.push(t4);
            }
            function V() {
              if (k("="), A = j(), !(x = "proto3" === A) && "proto2" !== A)
                throw H(A, "syntax");
              k(";");
            }
            function J(e4, t4) {
              switch (t4) {
                case "option":
                  return Q(e4, t4), k(";"), true;
                case "message":
                  return function(e5, t5) {
                    if (!_.test(t5 = U()))
                      throw H(t5, "type name");
                    var r4 = new i(t5);
                    X(r4, function(e6) {
                      if (!J(r4, e6))
                        switch (e6) {
                          case "map":
                            !function(e7) {
                              k("<");
                              var t6 = U();
                              if (void 0 === p.mapKey[t6])
                                throw H(t6, "type");
                              k(",");
                              var r5 = U();
                              if (!R.test(r5))
                                throw H(r5, "type");
                              k(">");
                              var o3 = U();
                              if (!_.test(o3))
                                throw H(o3, "name");
                              k("=");
                              var n2 = new s(B(o3), K(U()), t6, r5);
                              X(n2, function(e8) {
                                if ("option" !== e8)
                                  throw H(e8);
                                Q(n2, e8), k(";");
                              }, function() {
                                ee(n2);
                              }), e7.add(n2);
                            }(r4);
                            break;
                          case "required":
                          case "optional":
                          case "repeated":
                            Y(r4, e6);
                            break;
                          case "oneof":
                            !function(e7, t6) {
                              if (!_.test(t6 = U()))
                                throw H(t6, "name");
                              var r5 = new c(B(t6));
                              X(r5, function(e8) {
                                "option" === e8 ? (Q(r5, e8), k(";")) : (P(e8), Y(r5, "optional"));
                              }), e7.add(r5);
                            }(r4, e6);
                            break;
                          case "extensions":
                            W(r4.extensions || (r4.extensions = []));
                            break;
                          case "reserved":
                            W(r4.reserved || (r4.reserved = []), true);
                            break;
                          default:
                            if (!x || !R.test(e6))
                              throw H(e6);
                            P(e6), Y(r4, "optional");
                        }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "enum":
                  return function(e5, t5) {
                    if (!_.test(t5 = U()))
                      throw H(t5, "name");
                    var r4 = new u(t5);
                    X(r4, function(e6) {
                      switch (e6) {
                        case "option":
                          Q(r4, e6), k(";");
                          break;
                        case "reserved":
                          W(r4.reserved || (r4.reserved = []), true);
                          break;
                        default:
                          !function(e7, t6) {
                            if (!_.test(t6))
                              throw H(t6, "name");
                            k("=");
                            var r5 = K(U(), true), o3 = {};
                            X(o3, function(e8) {
                              if ("option" !== e8)
                                throw H(e8);
                              Q(o3, e8), k(";");
                            }, function() {
                              ee(o3);
                            }), e7.add(t6, r5, o3.comment);
                          }(r4, e6);
                      }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "service":
                  return function(e5, t5) {
                    if (!_.test(t5 = U()))
                      throw H(t5, "service name");
                    var r4 = new l(t5);
                    X(r4, function(e6) {
                      if (!J(r4, e6)) {
                        if ("rpc" !== e6)
                          throw H(e6);
                        !function(e7, t6) {
                          var r5 = t6;
                          if (!_.test(t6 = U()))
                            throw H(t6, "name");
                          var o3, n2, i2, a2, s2 = t6;
                          if (k("("), k("stream", true) && (n2 = true), !R.test(t6 = U()))
                            throw H(t6);
                          if (o3 = t6, k(")"), k("returns"), k("("), k("stream", true) && (a2 = true), !R.test(t6 = U()))
                            throw H(t6);
                          i2 = t6, k(")");
                          var c2 = new d(s2, r5, o3, i2, n2, a2);
                          X(c2, function(e8) {
                            if ("option" !== e8)
                              throw H(e8);
                            Q(c2, e8), k(";");
                          }), e7.add(c2);
                        }(r4, e6);
                      }
                    }), e5.add(r4);
                  }(e4, t4), true;
                case "extend":
                  return function(e5, t5) {
                    if (!R.test(t5 = U()))
                      throw H(t5, "reference");
                    var r4 = t5;
                    X(null, function(t6) {
                      switch (t6) {
                        case "required":
                        case "repeated":
                        case "optional":
                          Y(e5, t6, r4);
                          break;
                        default:
                          if (!x || !R.test(t6))
                            throw H(t6);
                          P(t6), Y(e5, "optional", r4);
                      }
                    });
                  }(e4, t4), true;
              }
              return false;
            }
            function X(e4, t4, r4) {
              var o3 = b.line;
              if (e4 && (e4.comment = L(), e4.filename = I.filename), k("{", true)) {
                for (var n2; "}" !== (n2 = U()); )
                  t4(n2);
                k(";", true);
              } else
                r4 && r4(), k(";"), e4 && "string" != typeof e4.comment && (e4.comment = L(o3));
            }
            function Y(e4, t4, r4) {
              var o3 = U();
              if ("group" !== o3) {
                if (!R.test(o3))
                  throw H(o3, "type");
                var n2 = U();
                if (!_.test(n2))
                  throw H(n2, "name");
                n2 = B(n2), k("=");
                var s2 = new a(n2, K(U()), o3, t4, r4);
                X(s2, function(e5) {
                  if ("option" !== e5)
                    throw H(e5);
                  Q(s2, e5), k(";");
                }, function() {
                  ee(s2);
                }), e4.add(s2), x || !s2.repeated || void 0 === p.packed[o3] && void 0 !== p.basic[o3] || s2.setOption("packed", false, true);
              } else
                !function(e5, t5) {
                  var r5 = U();
                  if (!_.test(r5))
                    throw H(r5, "name");
                  var o4 = h.lcFirst(r5);
                  r5 === o4 && (r5 = h.ucFirst(r5)), k("=");
                  var n3 = K(U()), s3 = new i(r5);
                  s3.group = true;
                  var c2 = new a(o4, n3, r5, t5);
                  c2.filename = I.filename, X(s3, function(e6) {
                    switch (e6) {
                      case "option":
                        Q(s3, e6), k(";");
                        break;
                      case "required":
                      case "optional":
                      case "repeated":
                        Y(s3, e6);
                        break;
                      default:
                        throw H(e6);
                    }
                  }), e5.add(s3).add(c2);
                }(e4, t4);
            }
            function Q(e4, t4) {
              var r4 = k("(", true);
              if (!R.test(t4 = U()))
                throw H(t4, "name");
              var o3 = t4;
              r4 && (k(")"), o3 = "(" + o3 + ")", t4 = w(), O.test(t4) && (o3 += t4, U())), k("="), Z(e4, o3);
            }
            function Z(e4, t4) {
              if (k("{", true))
                do {
                  if (!_.test(M = U()))
                    throw H(M, "name");
                  "{" === w() ? Z(e4, t4 + "." + M) : (k(":"), "{" === w() ? Z(e4, t4 + "." + M) : $2(e4, t4 + "." + M, F(true)));
                } while (!k("}", true));
              else
                $2(e4, t4, F(true));
            }
            function $2(e4, t4, r4) {
              e4.setOption && e4.setOption(t4, r4);
            }
            function ee(e4) {
              if (k("[", true)) {
                do {
                  Q(e4, "option");
                } while (k(",", true));
                k("]");
              }
              return e4;
            }
            for (; null !== (M = U()); )
              switch (M) {
                case "package":
                  if (!D)
                    throw H(M);
                  q();
                  break;
                case "import":
                  if (!D)
                    throw H(M);
                  z();
                  break;
                case "syntax":
                  if (!D)
                    throw H(M);
                  V();
                  break;
                case "option":
                  if (!D)
                    throw H(M);
                  Q(G, M), k(";");
                  break;
                default:
                  if (J(G, M)) {
                    D = false;
                    continue;
                  }
                  throw H(M);
              }
            return I.filename = null, { package: S, imports: C, weakImports: N, syntax: A, root: t3 };
          }
          I._configure = function() {
            o2 = r2(869), n = r2(685), i = r2(192), a = r2(286), s = r2(435), c = r2(735), u = r2(582), l = r2(447), d = r2(484), p = r2(696), h = r2(935);
          };
        }, 444: function(e2) {
          var t2 = e2.exports, r2 = t2.isAbsolute = function(e3) {
            return /^(?:\/|\w+:)/.test(e3);
          }, o2 = t2.normalize = function(e3) {
            var t3 = (e3 = e3.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), o3 = r2(e3), n = "";
            o3 && (n = t3.shift() + "/");
            for (var i = 0; i < t3.length; )
              ".." === t3[i] ? i > 0 && ".." !== t3[i - 1] ? t3.splice(--i, 2) : o3 ? t3.splice(i, 1) : ++i : "." === t3[i] ? t3.splice(i, 1) : ++i;
            return n + t3.join("/");
          };
          t2.resolve = function(e3, t3, n) {
            return n || (t3 = o2(t3)), r2(t3) ? t3 : (n || (e3 = o2(e3)), (e3 = e3.replace(/(?:\/|^)[^/]+$/, "")).length ? o2(e3 + "/" + t3) : t3);
          };
        }, 997: function(e2) {
          e2.exports = function(e3, t2, r2) {
            var o2 = r2 || 8192, n = o2 >>> 1, i = null, a = o2;
            return function(r3) {
              if (r3 < 1 || r3 > n)
                return e3(r3);
              a + r3 > o2 && (i = e3(o2), a = 0);
              var s = t2.call(i, a, a += r3);
              return 7 & a && (a = 1 + (7 | a)), s;
            };
          };
        }, 494: function(e2, t2, r2) {
          e2.exports = s;
          var o2, n, i = r2(935);
          function a(e3, t3) {
            return RangeError("index out of range: " + e3.pos + " + " + (t3 || 1) + " > " + e3.len);
          }
          function s(e3) {
            this.buf = e3, this.pos = 0, this.len = e3.length;
          }
          var c, u = "undefined" != typeof Uint8Array ? function(e3) {
            return e3 instanceof Uint8Array || Array.isArray(e3) ? new s(e3) : ("undefined" != typeof ArrayBuffer && e3 instanceof ArrayBuffer && console.warn(""), new s(new Uint8Array(e3)));
          } : function(e3) {
            if (Array.isArray(e3))
              return new s(e3);
          };
          function l() {
            var e3 = new o2(0, 0), t3 = 0;
            if (!(this.len - this.pos > 4)) {
              for (; t3 < 3; ++t3) {
                if (this.pos >= this.len)
                  throw a(this);
                if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 7 * t3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
              }
              return e3.lo = (e3.lo | (127 & this.buf[this.pos++]) << 7 * t3) >>> 0, e3;
            }
            for (; t3 < 4; ++t3)
              if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 7 * t3) >>> 0, this.buf[this.pos++] < 128)
                return e3;
            if (e3.lo = (e3.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e3.hi = (e3.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
              return e3;
            if (t3 = 0, this.len - this.pos > 4) {
              for (; t3 < 5; ++t3)
                if (e3.hi = (e3.hi | (127 & this.buf[this.pos]) << 7 * t3 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
            } else
              for (; t3 < 5; ++t3) {
                if (this.pos >= this.len)
                  throw a(this);
                if (e3.hi = (e3.hi | (127 & this.buf[this.pos]) << 7 * t3 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return e3;
              }
            throw Error("invalid varint encoding");
          }
          function d(e3, t3) {
            return (e3[t3 - 4] | e3[t3 - 3] << 8 | e3[t3 - 2] << 16 | e3[t3 - 1] << 24) >>> 0;
          }
          function p() {
            if (this.pos + 8 > this.len)
              throw a(this, 8);
            return new o2(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
          }
          s.create = i.Buffer ? function(e3) {
            return (s.create = function(e4) {
              return i.Buffer.isBuffer(e4) ? new (void 0)(e4) : u(e4);
            })(e3);
          } : u, s.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, s.prototype.uint32 = (c = 4294967295, function() {
            if (c = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if ((this.pos += 5) > this.len)
              throw this.pos = this.len, a(this, 10);
            return c;
          }), s.prototype.int32 = function() {
            return 0 | this.uint32();
          }, s.prototype.sint32 = function() {
            var e3 = this.uint32();
            return e3 >>> 1 ^ -(1 & e3) | 0;
          }, s.prototype.bool = function() {
            return 0 !== this.uint32();
          }, s.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len)
              throw a(this, 4);
            return d(this.buf, this.pos += 4);
          }, s.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len)
              throw a(this, 4);
            return 0 | d(this.buf, this.pos += 4);
          }, s.prototype.float = function() {
            if (this.pos + 4 > this.len)
              throw a(this, 4);
            var e3 = i.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, e3;
          }, s.prototype.double = function() {
            if (this.pos + 8 > this.len)
              throw a(this, 4);
            var e3 = i.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, e3;
          }, s.prototype.bytes = function() {
            var e3 = this.uint32(), t3 = this.pos, r3 = this.pos + e3;
            if (r3 > this.len)
              throw a(this, e3);
            return this.pos += e3, Array.isArray(this.buf) ? this.buf.slice(t3, r3) : t3 === r3 ? new this.buf.constructor(0) : this._slice.call(this.buf, t3, r3);
          }, s.prototype.string = function() {
            var e3 = this.bytes();
            return n.read(e3, 0, e3.length);
          }, s.prototype.skip = function(e3) {
            if ("number" == typeof e3) {
              if (this.pos + e3 > this.len)
                throw a(this, e3);
              this.pos += e3;
            } else
              do {
                if (this.pos >= this.len)
                  throw a(this);
              } while (128 & this.buf[this.pos++]);
            return this;
          }, s.prototype.skipType = function(e3) {
            switch (e3) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; 4 != (e3 = 7 & this.uint32()); )
                  this.skipType(e3);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error("invalid wire type " + e3 + " at offset " + this.pos);
            }
            return this;
          }, s._configure = function() {
            o2 = r2(365), n = r2(498);
            var e3 = i.Long ? "toLong" : "toNumber";
            i.merge(s.prototype, { int64: function() {
              return l.call(this)[e3](false);
            }, uint64: function() {
              return l.call(this)[e3](true);
            }, sint64: function() {
              return l.call(this).zzDecode()[e3](false);
            }, fixed64: function() {
              return p.call(this)[e3](true);
            }, sfixed64: function() {
              return p.call(this)[e3](false);
            } });
          };
        }, 685: function(e2, t2, r2) {
          e2.exports = d;
          var o2 = r2(476);
          ((d.prototype = Object.create(o2.prototype)).constructor = d).className = "Root";
          var n, i, a, s = r2(286), c = r2(582), u = r2(735), l = r2(935);
          function d(e3) {
            o2.call(this, "", e3), this.deferred = [], this.files = [], this.names = [];
          }
          function p() {
          }
          d.fromJSON = function(e3, t3) {
            return e3 = "string" == typeof e3 ? JSON.parse(e3) : e3, t3 || (t3 = new d()), e3.options && t3.setOptions(e3.options), t3.addJSON(e3.nested);
          }, d.prototype.resolvePath = l.path.resolve, d.prototype.parseFromPbString = function e3(t3, r3, o3) {
            "function" == typeof r3 && (o3 = r3, r3 = void 0);
            var n2 = this;
            if (!o3)
              return l.asPromise(e3, n2, t3, r3);
            var s2 = null;
            if ("string" == typeof t3)
              s2 = JSON.parse(t3);
            else {
              if ("object" != typeof t3)
                return void console.log("pb格式转化失败");
              s2 = t3;
            }
            function c2(e4, t4) {
              if (o3) {
                var r4 = o3;
                o3 = null, r4(e4, t4);
              }
            }
            function u2(e4, t4) {
              try {
                if (l.isString(t4) && "{" === t4.charAt(0) && (t4 = JSON.parse(t4)), l.isString(t4)) {
                  i.filename = e4;
                  var o4, a2 = i(t4, n2, r3), s3 = 0;
                  if (a2.imports)
                    for (; s3 < a2.imports.length; ++s3)
                      d2(o4 = a2.imports[s3]);
                  if (a2.weakImports) {
                    for (s3 = 0; s3 < a2.weakImports.length; ++s3)
                      o4 = a2.weakImports[s3];
                    d2(o4);
                  }
                } else
                  n2.setOptions(t4.options).addJSON(t4.nested);
              } catch (e5) {
                c2(e5);
              }
              c2(null, n2);
            }
            function d2(e4) {
              n2.names.indexOf(e4) > -1 || (n2.names.push(e4), e4 in a && u2(e4, a[e4]));
            }
            u2(s2.name, s2.pbJsonStr);
          }, d.prototype.load = function e3(t3, r3, o3) {
            "function" == typeof r3 && (o3 = r3, r3 = void 0);
            var n2 = this;
            if (!o3)
              return l.asPromise(e3, n2, t3, r3);
            var s2 = o3 === p;
            function c2(e4, t4) {
              if (o3) {
                var r4 = o3;
                if (o3 = null, s2)
                  throw e4;
                r4(e4, t4);
              }
            }
            function u2(e4, t4) {
              try {
                if (l.isString(t4) && "{" === t4.charAt(0) && (t4 = JSON.parse(t4)), l.isString(t4)) {
                  i.filename = e4;
                  var o4, a2 = i(t4, n2, r3), u3 = 0;
                  if (a2.imports)
                    for (; u3 < a2.imports.length; ++u3)
                      (o4 = n2.resolvePath(e4, a2.imports[u3])) && d2(o4);
                  if (a2.weakImports)
                    for (u3 = 0; u3 < a2.weakImports.length; ++u3)
                      (o4 = n2.resolvePath(e4, a2.weakImports[u3])) && d2(o4, true);
                } else
                  n2.setOptions(t4.options).addJSON(t4.nested);
              } catch (e5) {
                c2(e5);
              }
              s2 || h2 || c2(null, n2);
            }
            function d2(e4, t4) {
              var r4 = e4.lastIndexOf("google/protobuf/");
              if (r4 > -1) {
                var i2 = e4.substring(r4);
                i2 in a && (e4 = i2);
              }
              if (!(n2.files.indexOf(e4) > -1))
                if (n2.files.push(e4), e4 in a)
                  s2 ? u2(e4, a[e4]) : (++h2, setTimeout(function() {
                    --h2, u2(e4, a[e4]);
                  }));
                else if (s2) {
                  var d3;
                  try {
                    d3 = l.fs.readFileSync(e4).toString("utf8");
                  } catch (e5) {
                    return void (t4 || c2(e5));
                  }
                  u2(e4, d3);
                } else
                  ++h2, l.fetch(e4, function(r5, i3) {
                    --h2, o3 && (r5 ? t4 ? h2 || c2(null, n2) : c2(r5) : u2(e4, i3));
                  });
            }
            var h2 = 0;
            l.isString(t3) && (t3 = [t3]);
            for (var f2, m = 0; m < t3.length; ++m)
              (f2 = n2.resolvePath("", t3[m])) && d2(f2);
            if (s2)
              return n2;
            h2 || c2(null, n2);
          }, d.prototype.loadSync = function(e3, t3) {
            if (!l.isNode)
              throw Error("not supported");
            return this.load(e3, t3, p);
          }, d.prototype.resolveAll = function() {
            if (this.deferred.length)
              throw Error("unresolvable extensions: " + this.deferred.map(function(e3) {
                return "'extend " + e3.extend + "' in " + e3.parent.fullName;
              }).join(", "));
            return o2.prototype.resolveAll.call(this);
          };
          var h = /^[A-Z]/;
          function f(e3, t3) {
            var r3 = t3.parent.lookup(t3.extend);
            if (r3) {
              var o3 = new s(t3.fullName, t3.id, t3.type, t3.rule, void 0, t3.options);
              return o3.declaringField = t3, t3.extensionField = o3, r3.add(o3), true;
            }
            return false;
          }
          d.prototype._handleAdd = function(e3) {
            if (e3 instanceof s)
              void 0 === e3.extend || e3.extensionField || f(0, e3) || this.deferred.push(e3);
            else if (e3 instanceof c)
              h.test(e3.name) && (e3.parent[e3.name] = e3.values);
            else if (!(e3 instanceof u)) {
              if (e3 instanceof n)
                for (var t3 = 0; t3 < this.deferred.length; )
                  f(0, this.deferred[t3]) ? this.deferred.splice(t3, 1) : ++t3;
              for (var r3 = 0; r3 < e3.nestedArray.length; ++r3)
                this._handleAdd(e3._nestedArray[r3]);
              h.test(e3.name) && (e3.parent[e3.name] = e3);
            }
          }, d.prototype._handleRemove = function(e3) {
            if (e3 instanceof s) {
              if (void 0 !== e3.extend)
                if (e3.extensionField)
                  e3.extensionField.parent.remove(e3.extensionField), e3.extensionField = null;
                else {
                  var t3 = this.deferred.indexOf(e3);
                  t3 > -1 && this.deferred.splice(t3, 1);
                }
            } else if (e3 instanceof c)
              h.test(e3.name) && delete e3.parent[e3.name];
            else if (e3 instanceof o2) {
              for (var r3 = 0; r3 < e3.nestedArray.length; ++r3)
                this._handleRemove(e3._nestedArray[r3]);
              h.test(e3.name) && delete e3.parent[e3.name];
            }
          }, d._configure = function() {
            n = r2(192), i = r2(845), a = r2(72), s = r2(286), c = r2(582), u = r2(735), l = r2(935);
          };
        }, 889: function(e2) {
          e2.exports = {};
        }, 325: function(e2, t2, r2) {
          "use strict";
          e2.exports = n;
          var o2 = r2(935);
          function n(e3, t3, r3) {
            if ("function" != typeof e3)
              throw TypeError("rpcImpl must be a function");
            o2.EventEmitter.call(this), this.rpcImpl = e3, this.requestDelimited = Boolean(t3), this.responseDelimited = Boolean(r3);
          }
          (n.prototype = Object.create(o2.EventEmitter.prototype)).constructor = n, n.prototype.rpcCall = function e3(t3, r3, n2, i, a) {
            if (!i)
              throw TypeError("request must be specified");
            var s = this;
            if (!a)
              return o2.asPromise(e3, s, t3, r3, n2, i);
            if (s.rpcImpl)
              try {
                return s.rpcImpl(t3, r3[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(e4, r4) {
                  if (e4)
                    return s.emit("error", e4, t3), a(e4);
                  if (null !== r4) {
                    if (!(r4 instanceof n2))
                      try {
                        r4 = n2[s.responseDelimited ? "decodeDelimited" : "decode"](r4);
                      } catch (e5) {
                        return s.emit("error", e5, t3), a(e5);
                      }
                    return s.emit("data", r4, t3), a(null, r4);
                  }
                  s.end(true);
                });
              } catch (e4) {
                return s.emit("error", e4, t3), void setTimeout(function() {
                  a(e4);
                }, 0);
              }
            else
              setTimeout(function() {
                a(Error("already ended"));
              }, 0);
          }, n.prototype.end = function(e3) {
            return this.rpcImpl && (e3 || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
          };
        }, 447: function(e2, t2, r2) {
          "use strict";
          e2.exports = s;
          var o2, n, i, a = r2(476);
          function s(e3, t3) {
            a.call(this, e3, t3), this.methods = {}, this._methodsArray = null;
          }
          function c(e3) {
            return e3._methodsArray = null, e3;
          }
          ((s.prototype = Object.create(a.prototype)).constructor = s).className = "Service", s.fromJSON = function(e3, t3) {
            var r3 = new s(e3, t3.options);
            if (t3.methods)
              for (var n2 = Object.keys(t3.methods), i2 = 0; i2 < n2.length; ++i2)
                r3.add(o2.fromJSON(n2[i2], t3.methods[n2[i2]]));
            return t3.nested && r3.addJSON(t3.nested), r3.comment = t3.comment, r3;
          }, s.prototype.toJSON = function(e3) {
            var t3 = a.prototype.toJSON.call(this, e3), r3 = !!e3 && Boolean(e3.keepComments);
            return n.toObject(["options", t3 && t3.options || void 0, "methods", a.arrayToJSON(this.methodsArray, e3) || {}, "nested", t3 && t3.nested || void 0, "comment", r3 ? this.comment : void 0]);
          }, Object.defineProperty(s.prototype, "methodsArray", { get: function() {
            return this._methodsArray || (this._methodsArray = n.toArray(this.methods));
          } }), s.prototype.get = function(e3) {
            return this.methods[e3] || a.prototype.get.call(this, e3);
          }, s.prototype.resolveAll = function() {
            for (var e3 = this.methodsArray, t3 = 0; t3 < e3.length; ++t3)
              e3[t3].resolve();
            return a.prototype.resolve.call(this);
          }, s.prototype.add = function(e3) {
            if (this.get(e3.name))
              throw Error("duplicate name '" + e3.name + "' in " + this);
            return e3 instanceof o2 ? (this.methods[e3.name] = e3, e3.parent = this, c(this)) : a.prototype.add.call(this, e3);
          }, s.prototype.remove = function(e3) {
            if (e3 instanceof o2) {
              if (this.methods[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.methods[e3.name], e3.parent = null, c(this);
            }
            return a.prototype.remove.call(this, e3);
          }, s.prototype.create = function(e3, t3, r3) {
            for (var o3, a2 = new i.Service(e3, t3, r3), s2 = 0; s2 < this.methodsArray.length; ++s2) {
              var c2 = n.lcFirst((o3 = this._methodsArray[s2]).resolve().name).replace(/[^$\w_]/g, "");
              a2[c2] = n.codegen(["r", "c"], n.isReserved(c2) ? c2 + "_" : c2)("return this.rpcCall(m,q,s,r,c)")({ m: o3, q: o3.resolvedRequestType.ctor, s: o3.resolvedResponseType.ctor });
            }
            return a2;
          }, s._configure = function() {
            o2 = r2(484), n = r2(935), i = r2(325);
          };
        }, 869: function(e2) {
          e2.exports = d;
          var t2 = /[\s{}=;:[\],'"()<>]/g, r2 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, o2 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, n = /^ *[*/]+ */, i = /^\s*\*?\/*/, a = /\n/g, s = /\s/, c = /\\(.?)/g, u = { 0: "\0", r: "\r", n: "\n", t: "	" };
          function l(e3) {
            return e3.replace(c, function(e4, t3) {
              switch (t3) {
                case "\\":
                case "":
                  return t3;
                default:
                  return u[t3] || "";
              }
            });
          }
          function d(e3, c2) {
            e3 = e3.toString();
            var u2 = 0, d2 = e3.length, p = 1, h = null, f = null, m = 0, g = false, E = [], y = null;
            function v(e4) {
              return Error("illegal " + e4 + " (line " + p + ")");
            }
            function T(t3) {
              return e3.charAt(t3);
            }
            function _(t3, r3) {
              h = e3.charAt(t3++), m = p, g = false;
              var o3, s2 = t3 - (c2 ? 2 : 3);
              do {
                if (--s2 < 0 || "\n" === (o3 = e3.charAt(s2))) {
                  g = true;
                  break;
                }
              } while (" " === o3 || "	" === o3);
              for (var u3 = e3.substring(t3, r3).split(a), l2 = 0; l2 < u3.length; ++l2)
                u3[l2] = u3[l2].replace(c2 ? i : n, "").trim();
              f = u3.join("\n").trim();
            }
            function R(t3) {
              var r3 = O(t3), o3 = e3.substring(t3, r3);
              return /^\s*\/{1,2}/.test(o3);
            }
            function O(e4) {
              for (var t3 = e4; t3 < d2 && "\n" !== T(t3); )
                t3++;
              return t3;
            }
            function I() {
              if (E.length > 0)
                return E.shift();
              if (y)
                return function() {
                  var t3 = "'" === y ? o2 : r2;
                  t3.lastIndex = u2 - 1;
                  var n3 = t3.exec(e3);
                  if (!n3)
                    throw v("string");
                  return u2 = t3.lastIndex, S(y), y = null, l(n3[1]);
                }();
              var n2, i2, a2, h2, f2;
              do {
                if (u2 === d2)
                  return null;
                for (n2 = false; s.test(a2 = T(u2)); )
                  if ("\n" === a2 && ++p, ++u2 === d2)
                    return null;
                if ("/" === T(u2)) {
                  if (++u2 === d2)
                    throw v("comment");
                  if ("/" === T(u2))
                    if (c2) {
                      if (h2 = u2, f2 = false, R(u2)) {
                        f2 = true;
                        do {
                          if ((u2 = O(u2)) === d2)
                            break;
                          u2++;
                        } while (R(u2));
                      } else
                        u2 = Math.min(d2, O(u2) + 1);
                      f2 && _(h2, u2), p++, n2 = true;
                    } else {
                      for (f2 = "/" === T(h2 = u2 + 1); "\n" !== T(++u2); )
                        if (u2 === d2)
                          return null;
                      ++u2, f2 && _(h2, u2 - 1), ++p, n2 = true;
                    }
                  else {
                    if ("*" !== (a2 = T(u2)))
                      return "/";
                    h2 = u2 + 1, f2 = c2 || "*" === T(h2);
                    do {
                      if ("\n" === a2 && ++p, ++u2 === d2)
                        throw v("comment");
                      i2 = a2, a2 = T(u2);
                    } while ("*" !== i2 || "/" !== a2);
                    ++u2, f2 && _(h2, u2 - 2), n2 = true;
                  }
                }
              } while (n2);
              var m2 = u2;
              if (t2.lastIndex = 0, !t2.test(T(m2++)))
                for (; m2 < d2 && !t2.test(T(m2)); )
                  ++m2;
              var g2 = e3.substring(u2, u2 = m2);
              return '"' !== g2 && "'" !== g2 || (y = g2), g2;
            }
            function S(e4) {
              E.push(e4);
            }
            function C() {
              if (!E.length) {
                var e4 = I();
                if (null === e4)
                  return null;
                S(e4);
              }
              return E[0];
            }
            return Object.defineProperty({ next: I, peek: C, push: S, skip: function(e4, t3) {
              var r3 = C();
              if (r3 === e4)
                return I(), true;
              if (!t3)
                throw v("token '" + r3 + "', '" + e4 + "' expected");
              return false;
            }, cmnt: function(e4) {
              var t3 = null;
              return void 0 === e4 ? m === p - 1 && (c2 || "*" === h || g) && (t3 = f) : (m < e4 && C(), m !== e4 || g || !c2 && "/" !== h || (t3 = f)), t3;
            } }, "line", { get: function() {
              return p;
            } });
          }
          d.unescape = l;
        }, 192: function(e2, t2, r2) {
          e2.exports = y;
          var o2, n, i, a, s, c, u, l, d, p, h, f, m, g, E = r2(476);
          function y(e3, t3) {
            E.call(this, e3, t3), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
          }
          function v(e3) {
            return e3._fieldsById = e3._fieldsArray = e3._oneofsArray = null, delete e3.encode, delete e3.decode, delete e3.verify, e3;
          }
          ((y.prototype = Object.create(E.prototype)).constructor = y).className = "Type", Object.defineProperties(y.prototype, { fieldsById: { get: function() {
            if (this._fieldsById)
              return this._fieldsById;
            this._fieldsById = {};
            for (var e3 = Object.keys(this.fields), t3 = 0; t3 < e3.length; ++t3) {
              var r3 = this.fields[e3[t3]], o3 = r3.id;
              if (this._fieldsById[o3])
                throw Error("duplicate id " + o3 + " in " + this);
              this._fieldsById[o3] = r3;
            }
            return this._fieldsById;
          } }, fieldsArray: { get: function() {
            return this._fieldsArray || (this._fieldsArray = u.toArray(this.fields));
          } }, oneofsArray: { get: function() {
            return this._oneofsArray || (this._oneofsArray = u.toArray(this.oneofs));
          } }, ctor: { get: function() {
            return this._ctor || (this.ctor = y.generateConstructor(this));
          }, set: function(e3) {
            var t3 = e3.prototype;
            t3 instanceof i || ((e3.prototype = new i()).constructor = e3, u.merge(e3.prototype, t3)), e3.$type = e3.prototype.$type = this, u.merge(e3, i, true), u.merge(e3.prototype, i, true), this._ctor = e3;
            for (var r3 = 0; r3 < this.fieldsArray.length; ++r3)
              this._fieldsArray[r3].resolve();
            var o3 = {};
            for (r3 = 0; r3 < this.oneofsArray.length; ++r3) {
              var n2 = this._oneofsArray[r3].resolve().name, a2 = function(e4) {
                for (var t4 = {}, r4 = 0; r4 < e4.length; ++r4)
                  t4[e4[r4]] = 0;
                return { setter: function(r5) {
                  if (!(e4.indexOf(r5) < 0)) {
                    t4[r5] = 1;
                    for (var o4 = 0; o4 < e4.length; ++o4)
                      e4[o4] !== r5 && delete this[e4[o4]];
                  }
                }, getter: function() {
                  for (var e5 = Object.keys(this), r5 = e5.length - 1; r5 > -1; --r5)
                    if (1 === t4[e5[r5]] && void 0 !== this[e5[r5]] && null !== this[e5[r5]])
                      return e5[r5];
                } };
              }(this._oneofsArray[r3].oneof);
              o3[n2] = { get: a2.getter, set: a2.setter };
            }
            r3 && Object.defineProperties(e3.prototype, o3);
          } } }), y.generateConstructor = function(e3) {
            return function(t3) {
              for (var r3, o3 = 0; o3 < e3.fieldsArray.length; o3++)
                (r3 = e3._fieldsArray[o3]).map ? this[r3.name] = {} : r3.repeated && (this[r3.name] = []);
              if (t3)
                for (var n2 = Object.keys(t3), i2 = 0; i2 < n2.length; ++i2)
                  null != t3[n2[i2]] && (this[n2[i2]] = t3[n2[i2]]);
            };
          }, y.fromJSON = function(e3, t3) {
            var r3 = new y(e3, t3.options);
            r3.extensions = t3.extensions, r3.reserved = t3.reserved;
            for (var i2 = Object.keys(t3.fields), s2 = 0; s2 < i2.length; ++s2)
              r3.add((void 0 !== t3.fields[i2[s2]].keyType ? g.fromJSON : n.fromJSON)(i2[s2], t3.fields[i2[s2]]));
            if (t3.oneofs)
              for (i2 = Object.keys(t3.oneofs), s2 = 0; s2 < i2.length; ++s2)
                r3.add(a.fromJSON(i2[s2], t3.oneofs[i2[s2]]));
            if (t3.nested)
              for (i2 = Object.keys(t3.nested), s2 = 0; s2 < i2.length; ++s2) {
                var c2 = t3.nested[i2[s2]];
                r3.add((void 0 !== c2.id ? n.fromJSON : void 0 !== c2.fields ? y.fromJSON : void 0 !== c2.values ? o2.fromJSON : void 0 !== c2.methods ? h.fromJSON : E.fromJSON)(i2[s2], c2));
              }
            return t3.extensions && t3.extensions.length && (r3.extensions = t3.extensions), t3.reserved && t3.reserved.length && (r3.reserved = t3.reserved), t3.group && (r3.group = true), t3.comment && (r3.comment = t3.comment), r3;
          }, y.prototype.toJSON = function(e3) {
            var t3 = E.prototype.toJSON.call(this, e3), r3 = !!e3 && Boolean(e3.keepComments);
            return { options: t3 && t3.options || void 0, oneofs: E.arrayToJSON(this.oneofsArray, e3), fields: E.arrayToJSON(this.fieldsArray.filter(function(e4) {
              return !e4.declaringField;
            }), e3) || {}, extensions: this.extensions && this.extensions.length ? this.extensions : void 0, reserved: this.reserved && this.reserved.length ? this.reserved : void 0, group: this.group || void 0, nested: t3 && t3.nested || void 0, comment: r3 ? this.comment : void 0 };
          }, y.prototype.resolveAll = function() {
            for (var e3 = this.fieldsArray, t3 = 0; t3 < e3.length; )
              e3[t3++].resolve();
            var r3 = this.oneofsArray;
            for (t3 = 0; t3 < r3.length; )
              r3[t3++].resolve();
            return E.prototype.resolveAll.call(this);
          }, y.prototype.get = function(e3) {
            return this.fields[e3] || this.oneofs && this.oneofs[e3] || this.nested && this.nested[e3] || null;
          }, y.prototype.add = function(e3) {
            if (this.get(e3.name))
              throw Error("duplicate name '" + e3.name + "' in " + this);
            if (e3 instanceof n && void 0 === e3.extend) {
              if (this._fieldsById && this._fieldsById[e3.id])
                throw Error("duplicate id " + e3.id + " in " + this);
              if (this.isReservedId(e3.id))
                throw Error("id " + e3.id + " is reserved in " + this);
              if (this.isReservedName(e3.name))
                throw Error("name '" + e3.name + "' is reserved in " + this);
              return e3.parent && e3.parent.remove(e3), this.fields[e3.name] = e3, e3.message = this, e3.onAdd(this), v(this);
            }
            return e3 instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[e3.name] = e3, e3.onAdd(this), v(this)) : E.prototype.add.call(this, e3);
          }, y.prototype.remove = function(e3) {
            if (e3 instanceof n && void 0 === e3.extend) {
              if (!this.fields || this.fields[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.fields[e3.name], e3.parent = null, e3.onRemove(this), v(this);
            }
            if (e3 instanceof a) {
              if (!this.oneofs || this.oneofs[e3.name] !== e3)
                throw Error(e3 + " is not a member of " + this);
              return delete this.oneofs[e3.name], e3.parent = null, e3.onRemove(this), v(this);
            }
            return E.prototype.remove.call(this, e3);
          }, y.prototype.isReservedId = function(e3) {
            return E.isReservedId(this.reserved, e3);
          }, y.prototype.isReservedName = function(e3) {
            return E.isReservedName(this.reserved, e3);
          }, y.prototype.create = function(e3) {
            return new this.ctor(e3);
          }, y.prototype.setup = function() {
            for (var e3 = this.fullName, t3 = [], r3 = 0; r3 < this.fieldsArray.length; ++r3)
              t3.push(this._fieldsArray[r3].resolve().resolvedType);
            this.encode = d(this)({ Writer: s, types: t3, util: u }), this.decode = p(this)({ Reader: c, types: t3, util: u }), this.verify = l(this)({ types: t3, util: u }), this.fromObject = m.fromObject(this)({ types: t3, util: u }), this.toObject = m.toObject(this)({ types: t3, util: u });
            var o3 = f[e3];
            if (o3) {
              var n2 = Object.create(this);
              n2.fromObject = this.fromObject, this.fromObject = o3.fromObject.bind(n2), n2.toObject = this.toObject, this.toObject = o3.toObject.bind(n2);
            }
            return this;
          }, y.prototype.encode = function(e3, t3) {
            return this.setup().encode(e3, t3);
          }, y.prototype.encodeDelimited = function(e3, t3) {
            return this.encode(e3, t3 && t3.len ? t3.fork() : t3).ldelim();
          }, y.prototype.decode = function(e3, t3) {
            return this.setup().decode(e3, t3);
          }, y.prototype.decodeDelimited = function(e3) {
            return e3 instanceof c || (e3 = c.create(e3)), this.decode(e3, e3.uint32());
          }, y.prototype.verify = function(e3) {
            return this.setup().verify(e3);
          }, y.prototype.fromObject = function(e3) {
            return this.setup().fromObject(e3);
          }, y.prototype.toObject = function(e3, t3) {
            return this.setup().toObject(e3, t3);
          }, y.d = function(e3) {
            return function(t3) {
              u.decorateType(t3, e3);
            };
          }, y._configure = function() {
            o2 = r2(582), n = r2(286), i = r2(339), a = r2(735), s = r2(244), c = r2(494), u = r2(935), l = r2(216), d = r2(929), p = r2(888), h = r2(447), f = r2(834), m = r2(525), g = r2(435);
          };
        }, 696: function(e2, t2, r2) {
          "use strict";
          var o2 = e2.exports, n = r2(935), i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
          function a(e3, t3) {
            var r3 = 0, o3 = {};
            for (t3 |= 0; r3 < e3.length; )
              o3[i[r3 + t3]] = e3[r3++];
            return o3;
          }
          o2.basic = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), o2.defaults = a([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", n.emptyArray, null]), o2.long = a([0, 0, 0, 1, 1], 7), o2.mapKey = a([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), o2.packed = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]), o2._configure = function() {
            n = r2(935);
          };
        }, 498: function(e2) {
          "use strict";
          var t2 = e2.exports;
          t2.length = function(e3) {
            for (var t3 = 0, r2 = 0, o2 = 0; o2 < e3.length; ++o2)
              (r2 = e3.charCodeAt(o2)) < 128 ? t3 += 1 : r2 < 2048 ? t3 += 2 : 55296 == (64512 & r2) && 56320 == (64512 & e3.charCodeAt(o2 + 1)) ? (++o2, t3 += 4) : t3 += 3;
            return t3;
          }, t2.read = function(e3, t3, r2) {
            if (r2 - t3 < 1)
              return "";
            for (var o2, n = null, i = [], a = 0; t3 < r2; )
              (o2 = e3[t3++]) < 128 ? i[a++] = o2 : o2 > 191 && o2 < 224 ? i[a++] = (31 & o2) << 6 | 63 & e3[t3++] : o2 > 239 && o2 < 365 ? (o2 = ((7 & o2) << 18 | (63 & e3[t3++]) << 12 | (63 & e3[t3++]) << 6 | 63 & e3[t3++]) - 65536, i[a++] = 55296 + (o2 >> 10), i[a++] = 56320 + (1023 & o2)) : i[a++] = (15 & o2) << 12 | (63 & e3[t3++]) << 6 | 63 & e3[t3++], a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, i)), a = 0);
            return n ? (a && n.push(String.fromCharCode.apply(String, i.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, i.slice(0, a));
          }, t2.write = function(e3, t3, r2) {
            for (var o2, n, i = r2, a = 0; a < e3.length; ++a)
              (o2 = e3.charCodeAt(a)) < 128 ? t3[r2++] = o2 : o2 < 2048 ? (t3[r2++] = o2 >> 6 | 192, t3[r2++] = 63 & o2 | 128) : 55296 == (64512 & o2) && 56320 == (64512 & (n = e3.charCodeAt(a + 1))) ? (o2 = 65536 + ((1023 & o2) << 10) + (1023 & n), ++a, t3[r2++] = o2 >> 18 | 240, t3[r2++] = o2 >> 12 & 63 | 128, t3[r2++] = o2 >> 6 & 63 | 128, t3[r2++] = 63 & o2 | 128) : (t3[r2++] = o2 >> 12 | 224, t3[r2++] = o2 >> 6 & 63 | 128, t3[r2++] = 63 & o2 | 128);
            return r2 - i;
          };
        }, 935: function(e2, t2, r2) {
          var o2 = e2.exports, n = r2(889);
          o2.LongBits = r2(365), o2.Long = r2(939), o2.pool = r2(997), o2.float = r2(283), o2.asPromise = r2(728), o2.EventEmitter = r2(969), o2.path = r2(444), o2.base64 = r2(440), o2.utf8 = r2(498), o2.compareFieldsById = function(e3, t3) {
            return e3.id - t3.id;
          }, o2.toArray = function(e3) {
            if (e3) {
              for (var t3 = Object.keys(e3), r3 = new Array(t3.length), o3 = 0; o3 < t3.length; )
                r3[o3] = e3[t3[o3++]];
              return r3;
            }
            return [];
          }, o2.toObject = function(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; ) {
              var o3 = e3[r3++], n2 = e3[r3++];
              void 0 !== n2 && (t3[o3] = n2);
            }
            return t3;
          }, o2.isString = function(e3) {
            return "string" == typeof e3 || e3 instanceof String;
          }, o2.isReserved = function(e3) {
            return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e3);
          }, o2.isObject = function(e3) {
            return e3 && "object" == typeof e3;
          }, o2.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, o2.oneOfGetter = function(e3) {
            for (var t3 = {}, r3 = 0; r3 < e3.length; ++r3)
              t3[e3[r3]] = 1;
            return function() {
              for (var e4 = Object.keys(this), r4 = e4.length - 1; r4 > -1; --r4)
                if (1 === t3[e4[r4]] && void 0 !== this[e4[r4]] && null !== this[e4[r4]])
                  return e4[r4];
            };
          }, o2.oneOfSetter = function(e3) {
            return function(t3) {
              for (var r3 = 0; r3 < e3.length; ++r3)
                e3[r3] !== t3 && delete this[e3[r3]];
            };
          }, o2.merge = function(e3, t3, r3) {
            for (var o3 = Object.keys(t3), n2 = 0; n2 < o3.length; ++n2)
              void 0 !== e3[o3[n2]] && r3 || (e3[o3[n2]] = t3[o3[n2]]);
            return e3;
          }, o2.decorateType = function(e3, t3) {
            if (e3.$type)
              return t3 && e3.$type.name !== t3 && (o2.decorateRoot.remove(e3.$type), e3.$type.name = t3, o2.decorateRoot.add(e3.$type)), e3.$type;
            Type || (Type = r2(192));
            var n2 = new Type(t3 || e3.name);
            return o2.decorateRoot.add(n2), n2.ctor = e3, Object.defineProperty(e3, "$type", { value: n2, enumerable: false }), Object.defineProperty(e3.prototype, "$type", { value: n2, enumerable: false }), n2;
          }, o2.emptyArray = Object.freeze ? Object.freeze([]) : [], o2.emptyObject = Object.freeze ? Object.freeze({}) : {}, o2.longToHash = function(e3) {
            return e3 ? o2.LongBits.from(e3).toHash() : o2.LongBits.zeroHash;
          }, o2.copy = function(e3) {
            if ("object" != typeof e3)
              return e3;
            var t3 = {};
            for (var r3 in e3)
              t3[r3] = e3[r3];
            return t3;
          }, o2.deepCopy = function e3(t3) {
            if ("object" != typeof t3)
              return t3;
            var r3 = {};
            for (var o3 in t3)
              r3[o3] = e3(t3[o3]);
            return r3;
          }, o2.ProtocolError = function(e3) {
            function t3(e4, r3) {
              if (!(this instanceof t3))
                return new t3(e4, r3);
              Object.defineProperty(this, "message", { get: function() {
                return e4;
              } }), Error.captureStackTrace ? Error.captureStackTrace(this, t3) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), r3 && merge(this, r3);
            }
            return (t3.prototype = Object.create(Error.prototype)).constructor = t3, Object.defineProperty(t3.prototype, "name", { get: function() {
              return e3;
            } }), t3.prototype.toString = function() {
              return this.name + ": " + this.message;
            }, t3;
          }, o2.toJSONOptions = { longs: String, enums: String, bytes: String, json: true }, o2.Buffer = null, o2.newBuffer = function(e3) {
            return "number" == typeof e3 ? new o2.Array(e3) : "undefined" == typeof Uint8Array ? e3 : new Uint8Array(e3);
          }, o2.stringToBytes = function(e3) {
            var t3, r3, o3 = [];
            t3 = e3.length;
            for (var n2 = 0; n2 < t3; n2++)
              (r3 = e3.charCodeAt(n2)) >= 65536 && r3 <= 1114111 ? (o3.push(r3 >> 18 & 7 | 240), o3.push(r3 >> 12 & 63 | 128), o3.push(r3 >> 6 & 63 | 128), o3.push(63 & r3 | 128)) : r3 >= 2048 && r3 <= 65535 ? (o3.push(r3 >> 12 & 15 | 224), o3.push(r3 >> 6 & 63 | 128), o3.push(63 & r3 | 128)) : r3 >= 128 && r3 <= 2047 ? (o3.push(r3 >> 6 & 31 | 192), o3.push(63 & r3 | 128)) : o3.push(255 & r3);
            return o3;
          }, o2.byteToString = function(e3) {
            if ("string" == typeof e3)
              return e3;
            for (var t3 = "", r3 = e3, o3 = 0; o3 < r3.length; o3++) {
              var n2 = r3[o3].toString(2), i = n2.match(/^1+?(?=0)/);
              if (i && 8 == n2.length) {
                for (var a = i[0].length, s = r3[o3].toString(2).slice(7 - a), c = 1; c < a; c++)
                  s += r3[c + o3].toString(2).slice(2);
                t3 += String.fromCharCode(parseInt(s, 2)), o3 += a - 1;
              } else
                t3 += String.fromCharCode(r3[o3]);
            }
            return t3;
          }, o2.isInteger = Number.isInteger || function(e3) {
            return "number" == typeof e3 && isFinite(e3) && Math.floor(e3) === e3;
          }, Object.defineProperty(o2, "decorateRoot", { get: function() {
            return n.decorated || (n.decorated = new (r2(685))());
          } });
        }, 216: function(e2, t2, r2) {
          var o2, n;
          function i(e3, t3) {
            return e3.name + ": " + t3 + (e3.repeated && "array" !== t3 ? "[]" : e3.map && "object" !== t3 ? "{k:" + e3.keyType + "}" : "") + " expected";
          }
          function a(e3, t3, r3, a2) {
            var s2 = a2.types;
            if (e3.resolvedType)
              if (e3.resolvedType instanceof o2) {
                if (Object.keys(e3.resolvedType.values).indexOf(r3) < 0)
                  return i(e3, "enum value");
              } else {
                var c2 = s2[t3].verify(r3);
                if (c2)
                  return e3.name + "." + c2;
              }
            else
              switch (e3.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  if (!n.isInteger(r3))
                    return i(e3, "integer");
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  if (!(n.isInteger(r3) || r3 && n.isInteger(r3.low) && n.isInteger(r3.high)))
                    return i(e3, "integer|Long");
                  break;
                case "float":
                case "double":
                  if ("number" != typeof r3)
                    return i(e3, "number");
                  break;
                case "bool":
                  if ("boolean" != typeof r3)
                    return i(e3, "boolean");
                  break;
                case "string":
                  if (!n.isString(r3))
                    return i(e3, "string");
                  break;
                case "bytes":
                  if (!(r3 && "number" == typeof r3.length || n.isString(r3)))
                    return i(e3, "buffer");
              }
          }
          function s(e3, t3) {
            switch (e3.keyType) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                if (!n.key32Re.test(t3))
                  return i(e3, "integer key");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                if (!n.key64Re.test(t3))
                  return i(e3, "integer|Long key");
                break;
              case "bool":
                if (!n.key2Re.test(t3))
                  return i(e3, "boolean key");
            }
          }
          function c(e3) {
            return function(t3) {
              return function(r3) {
                var o3;
                if ("object" != typeof r3 || null === r3)
                  return "object expected";
                var c2, u = {};
                e3.oneofsArray.length && (c2 = {});
                for (var l = 0; l < e3.fieldsArray.length; ++l) {
                  var d, p = e3._fieldsArray[l].resolve(), h = r3[p.name];
                  if (!p.optional || null != h && r3.hasOwnProperty(p.name))
                    if (p.map) {
                      if (!n.isObject(h))
                        return i(p, "object");
                      var f = Object.keys(h);
                      for (d = 0; d < f.length; ++d) {
                        if (o3 = s(p, f[d]))
                          return o3;
                        if (o3 = a(p, l, h[f[d]], t3))
                          return o3;
                      }
                    } else if (p.repeated) {
                      if (!Array.isArray(h))
                        return i(p, "array");
                      for (d = 0; d < h.length; ++d)
                        if (o3 = a(p, l, h[d], t3))
                          return o3;
                    } else {
                      if (p.partOf) {
                        var m = p.partOf.name;
                        if (1 === u[p.partOf.name] && 1 === c2[m])
                          return p.partOf.name + ": multiple values";
                        c2[m] = 1;
                      }
                      if (o3 = a(p, l, h, t3))
                        return o3;
                    }
                }
              };
            };
          }
          e2.exports = c, c._configure = function() {
            o2 = r2(582), n = r2(935);
          };
        }, 834: function(e2, t2, r2) {
          var o2, n = t2;
          n[".google.protobuf.Any"] = { fromObject: function(e3) {
            if (e3 && e3["@type"]) {
              var t3 = this.lookup(e3["@type"]);
              if (t3) {
                var r3 = "." === e3["@type"].charAt(0) ? e3["@type"].substr(1) : e3["@type"];
                return this.create({ type_url: "/" + r3, value: t3.encode(t3.fromObject(e3)).finish() });
              }
            }
            return this.fromObject(e3);
          }, toObject: function(e3, t3) {
            if (t3 && t3.json && e3.type_url && e3.value) {
              var r3 = e3.type_url.substring(e3.type_url.lastIndexOf("/") + 1), n2 = this.lookup(r3);
              n2 && (e3 = n2.decode(e3.value));
            }
            if (!(e3 instanceof this.ctor) && e3 instanceof o2) {
              var i = e3.$type.toObject(e3, t3);
              return i["@type"] = e3.$type.fullName, i;
            }
            return this.toObject(e3, t3);
          } }, n._configure = function() {
            o2 = r2(339);
          };
        }, 244: function(e2, t2, r2) {
          e2.exports = u;
          var o2, n = r2(935), i = r2(498);
          function a(e3, t3, r3) {
            this.fn = e3, this.len = t3, this.next = void 0, this.val = r3;
          }
          function s() {
          }
          function c(e3) {
            this.head = e3.head, this.tail = e3.tail, this.len = e3.len, this.next = e3.states;
          }
          function u() {
            this.len = 0, this.head = new a(s, 0, 0), this.tail = this.head, this.states = null;
          }
          function l(e3, t3, r3) {
            t3[r3] = 255 & e3;
          }
          function d(e3, t3) {
            this.len = e3, this.next = void 0, this.val = t3;
          }
          function p(e3, t3, r3) {
            for (; e3.hi; )
              t3[r3++] = 127 & e3.lo | 128, e3.lo = (e3.lo >>> 7 | e3.hi << 25) >>> 0, e3.hi >>>= 7;
            for (; e3.lo > 127; )
              t3[r3++] = 127 & e3.lo | 128, e3.lo = e3.lo >>> 7;
            t3[r3++] = e3.lo;
          }
          function h(e3, t3, r3) {
            t3[r3] = 255 & e3, t3[r3 + 1] = e3 >>> 8 & 255, t3[r3 + 2] = e3 >>> 16 & 255, t3[r3 + 3] = e3 >>> 24;
          }
          u.create = n.Buffer ? function() {
            return (u.create = function() {
              return new (void 0)();
            })();
          } : function() {
            return new u();
          }, u.alloc = function(e3) {
            return new n.Array(e3);
          }, n.Array !== Array && (u.alloc = n.pool(u.alloc, n.Array.prototype.subarray)), u.prototype._push = function(e3, t3, r3) {
            return this.tail = this.tail.next = new a(e3, t3, r3), this.len += t3, this;
          }, d.prototype = Object.create(a.prototype), d.prototype.fn = function(e3, t3, r3) {
            for (; e3 > 127; )
              t3[r3++] = 127 & e3 | 128, e3 >>>= 7;
            t3[r3] = e3;
          }, u.prototype.uint32 = function(e3) {
            return this.len += (this.tail = this.tail.next = new d((e3 >>>= 0) < 128 ? 1 : e3 < 16384 ? 2 : e3 < 2097152 ? 3 : e3 < 268435456 ? 4 : 5, e3)).len, this;
          }, u.prototype.int32 = function(e3) {
            return e3 < 0 ? this._push(p, 10, o2.fromNumber(e3)) : this.uint32(e3);
          }, u.prototype.sint32 = function(e3) {
            return this.uint32((e3 << 1 ^ e3 >> 31) >>> 0);
          }, u.prototype.uint64 = function(e3) {
            var t3 = o2.from(e3);
            return this._push(p, t3.length(), t3);
          }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(e3) {
            var t3 = o2.from(e3).zzEncode();
            return this._push(p, t3.length(), t3);
          }, u.prototype.bool = function(e3) {
            return this._push(l, 1, e3 ? 1 : 0);
          }, u.prototype.fixed32 = function(e3) {
            return this._push(h, 4, e3 >>> 0);
          }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(e3) {
            var t3 = o2.from(e3);
            return this._push(h, 4, t3.lo)._push(h, 4, t3.hi);
          }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(e3) {
            return this._push(n.float.writeFloatLE, 4, e3);
          }, u.prototype.double = function(e3) {
            return this._push(n.float.writeDoubleLE, 8, e3);
          };
          var f = n.Array.prototype.set ? function(e3, t3, r3) {
            t3.set(e3, r3);
          } : function(e3, t3, r3) {
            for (var o3 = 0; o3 < e3.length; ++o3)
              t3[r3 + o3] = e3[o3];
          };
          u.prototype.bytes = function(e3) {
            var t3 = e3.length >>> 0;
            if (!t3)
              return this._push(l, 1, 0);
            if (n.isString(e3)) {
              var r3 = u.alloc(t3 = i.length(e3));
              i.write(e3, r3, 0), e3 = r3;
            }
            return this.uint32(t3)._push(f, t3, e3);
          }, u.prototype.string = function(e3) {
            var t3 = i.length(e3);
            return t3 ? this.uint32(t3)._push(i.write, t3, e3) : this._push(l, 1, 0);
          }, u.prototype.fork = function() {
            return this.states = new c(this), this.head = this.tail = new a(s, 0, 0), this.len = 0, this;
          }, u.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new a(s, 0, 0), this.len = 0), this;
          }, u.prototype.ldelim = function() {
            var e3 = this.head, t3 = this.tail, r3 = this.len;
            return this.reset().uint32(r3), r3 && (this.tail.next = e3.next, this.tail = t3, this.len += r3), this;
          }, u.prototype.finish = function() {
            for (var e3 = this.head.next, t3 = this.constructor.alloc(this.len), r3 = 0; e3; )
              e3.fn(e3.val, t3, r3), r3 += e3.len, e3 = e3.next;
            return t3;
          }, u._configure = function() {
            o2 = r2(365), r2(440), i = r2(498);
          };
        } }, t = {};
        function r(o2) {
          var n = t[o2];
          if (void 0 !== n)
            return n.exports;
          var i = t[o2] = { exports: {} };
          return e[o2](i, i.exports, r), i.exports;
        }
        r.amdO = {}, r.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return r.d(t2, { a: t2 }), t2;
        }, r.d = function(e2, t2) {
          for (var o2 in t2)
            r.o(t2, o2) && !r.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
        }, r.g = function() {
          if ("object" == typeof globalThis)
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window)
              return window;
          }
        }(), r.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, r.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var o = {};
        return function() {
          "use strict";
          r.r(o), r.d(o, { default: function() {
            return As;
          } });
          var e2 = {};
          r.r(e2), r.d(e2, { acceptContactInvite: function() {
            return ao;
          }, acceptInvitation: function() {
            return io;
          }, addContact: function() {
            return ro;
          }, addConversationMark: function() {
            return wo;
          }, addReaction: function() {
            return yo;
          }, addToBlackList: function() {
            return uo;
          }, addUsersToBlacklist: function() {
            return lo;
          }, addUsersToBlocklist: function() {
            return po;
          }, declineContactInvite: function() {
            return co;
          }, declineInvitation: function() {
            return so;
          }, deleteAllMessagesAndConversations: function() {
            return xo;
          }, deleteContact: function() {
            return no;
          }, deleteConversation: function() {
            return Vr;
          }, deleteReaction: function() {
            return vo;
          }, deleteSession: function() {
            return zr;
          }, fetchHistoryMessages: function() {
            return $r;
          }, fetchUserInfoById: function() {
            return Yr;
          }, getAllContacts: function() {
            return bo;
          }, getBlacklist: function() {
            return xr;
          }, getBlocklist: function() {
            return Gr;
          }, getContacts: function() {
            return Hr;
          }, getContactsWithCursor: function() {
            return Uo;
          }, getConversationlist: function() {
            return Kr;
          }, getHistoryMessages: function() {
            return to;
          }, getReactionDetail: function() {
            return Ro;
          }, getReactionList: function() {
            return To;
          }, getReactionlist: function() {
            return _o;
          }, getRoster: function() {
            return Br;
          }, getSelfIdsOnOtherPlatform: function() {
            return Do;
          }, getServerConversations: function() {
            return So;
          }, getServerConversationsByFilter: function() {
            return Lo;
          }, getServerPinnedConversations: function() {
            return No;
          }, getServerPinnedMessages: function() {
            return jo;
          }, getSessionList: function() {
            return Wr;
          }, getTokenExpireTimestamp: function() {
            return Zr;
          }, modifyMessage: function() {
            return Eo;
          }, pinConversation: function() {
            return Ao;
          }, pinMessage: function() {
            return Bo;
          }, recallMessage: function() {
            return go;
          }, removeConversationMark: function() {
            return ko;
          }, removeFromBlackList: function() {
            return ho;
          }, removeHistoryMessages: function() {
            return Io;
          }, removeRoster: function() {
            return oo;
          }, removeUserFromBlackList: function() {
            return fo;
          }, removeUserFromBlocklist: function() {
            return mo;
          }, reportMessage: function() {
            return Oo;
          }, setContactRemark: function() {
            return Mo;
          }, unbindPushToken: function() {
            return Fo;
          }, unpinMessage: function() {
            return Ho;
          }, updateCurrentUserNick: function() {
            return Qr;
          }, updateOwnUserInfo: function() {
            return Jr;
          }, updateUserInfo: function() {
            return Xr;
          }, uploadPushToken: function() {
            return Fr;
          }, uploadToken: function() {
            return jr;
          } });
          var t2 = {};
          r.r(t2), r.d(t2, { acceptGroupInvite: function() {
            return On;
          }, acceptGroupJoinRequest: function() {
            return vn;
          }, addUsersToGroupAllowlist: function() {
            return Qn;
          }, addUsersToGroupWhitelist: function() {
            return Yn;
          }, agreeInviteIntoGroup: function() {
            return Rn;
          }, agreeJoinGroup: function() {
            return yn;
          }, blockGroup: function() {
            return Vo;
          }, blockGroupMember: function() {
            return Gn;
          }, blockGroupMembers: function() {
            return Hn;
          }, blockGroupMessages: function() {
            return Jo;
          }, changeGroupOwner: function() {
            return en;
          }, changeOwner: function() {
            return $o;
          }, createGroup: function() {
            return zo;
          }, createGroupNew: function() {
            return qo;
          }, deleteGroupSharedFile: function() {
            return di;
          }, destroyGroup: function() {
            return pn;
          }, disableSendGroupMsg: function() {
            return Jn;
          }, dissolveGroup: function() {
            return dn;
          }, downloadGroupSharedFile: function() {
            return fi;
          }, enableSendGroupMsg: function() {
            return Xn;
          }, fetchGroupAnnouncement: function() {
            return ci;
          }, fetchGroupSharedFileList: function() {
            return pi;
          }, getGroup: function() {
            return Qo;
          }, getGroupAdmin: function() {
            return an;
          }, getGroupAllowlist: function() {
            return ri;
          }, getGroupBlacklist: function() {
            return zn;
          }, getGroupBlacklistNew: function() {
            return qn;
          }, getGroupBlocklist: function() {
            return Vn;
          }, getGroupInfo: function() {
            return tn;
          }, getGroupMemberAttributes: function() {
            return gi;
          }, getGroupMembersAttributes: function() {
            return Ei;
          }, getGroupMsgReadUser: function() {
            return si;
          }, getGroupMuteList: function() {
            return Ln;
          }, getGroupMutelist: function() {
            return Dn;
          }, getGroupSharedFilelist: function() {
            return hi;
          }, getGroupWhitelist: function() {
            return ti;
          }, getJoinedGroups: function() {
            return Zo;
          }, getMuted: function() {
            return kn;
          }, getPublicGroups: function() {
            return Yo;
          }, groupBlockMulti: function() {
            return Bn;
          }, groupBlockSingle: function() {
            return xn;
          }, inviteToGroup: function() {
            return mn;
          }, inviteUsersToGroup: function() {
            return gn;
          }, isGroupWhiteUser: function() {
            return oi;
          }, isInGroupAllowlist: function() {
            return ii;
          }, isInGroupMutelist: function() {
            return ai;
          }, isInGroupWhiteList: function() {
            return ni;
          }, joinGroup: function() {
            return En;
          }, leaveGroup: function() {
            return fn;
          }, listGroupMember: function() {
            return on;
          }, listGroupMembers: function() {
            return nn;
          }, listGroups: function() {
            return Xo;
          }, modifyGroup: function() {
            return rn;
          }, mute: function() {
            return bn;
          }, muteGroupMember: function() {
            return Un;
          }, quitGroup: function() {
            return hn;
          }, rejectGroupInvite: function() {
            return Sn;
          }, rejectGroupJoinRequest: function() {
            return _n;
          }, rejectInviteIntoGroup: function() {
            return In;
          }, rejectJoinGroup: function() {
            return Tn;
          }, removeAdmin: function() {
            return un;
          }, removeGroupAdmin: function() {
            return ln;
          }, removeGroupAllowlistMember: function() {
            return ei;
          }, removeGroupBlockMulti: function() {
            return Wn;
          }, removeGroupBlockSingle: function() {
            return jn;
          }, removeGroupMember: function() {
            return Nn;
          }, removeGroupMembers: function() {
            return Mn;
          }, removeGroupWhitelistMember: function() {
            return $n;
          }, removeMultiGroupMember: function() {
            return An;
          }, removeMute: function() {
            return Pn;
          }, removeSingleGroupMember: function() {
            return Cn;
          }, rmUsersFromGroupWhitelist: function() {
            return Zn;
          }, setAdmin: function() {
            return sn;
          }, setGroupAdmin: function() {
            return cn;
          }, setGroupMemberAttributes: function() {
            return mi;
          }, unblockGroupMember: function() {
            return Fn;
          }, unblockGroupMembers: function() {
            return Kn;
          }, unmuteGroupMember: function() {
            return wn;
          }, updateGroupAnnouncement: function() {
            return ui;
          }, uploadGroupSharedFile: function() {
            return li;
          } });
          var n = {};
          r.r(n), r.d(n, { addUsersToChatRoom: function() {
            return Ni;
          }, addUsersToChatRoomAllowlist: function() {
            return ra;
          }, addUsersToChatRoomWhitelist: function() {
            return ta;
          }, blockChatRoomMember: function() {
            return Wi;
          }, blockChatRoomMembers: function() {
            return qi;
          }, chatRoomBlockMulti: function() {
            return Ki;
          }, chatRoomBlockSingle: function() {
            return Fi;
          }, createChatRoom: function() {
            return vi;
          }, deleteChatRoomSharedFile: function() {
            return fa;
          }, destroyChatRoom: function() {
            return Ti;
          }, disableSendChatRoomMsg: function() {
            return $i;
          }, enableSendChatRoomMsg: function() {
            return ea;
          }, fetchChatRoomAnnouncement: function() {
            return da;
          }, fetchChatRoomSharedFileList: function() {
            return ma;
          }, getChatRoomAdmin: function() {
            return wi;
          }, getChatRoomAllowlist: function() {
            return sa;
          }, getChatRoomAttributes: function() {
            return Ea;
          }, getChatRoomBlacklist: function() {
            return Qi;
          }, getChatRoomBlacklistNew: function() {
            return Yi;
          }, getChatRoomBlocklist: function() {
            return Zi;
          }, getChatRoomDetails: function() {
            return _i;
          }, getChatRoomMuteList: function() {
            return Hi;
          }, getChatRoomMuted: function() {
            return Bi;
          }, getChatRoomMutelist: function() {
            return ji;
          }, getChatRoomSharedFilelist: function() {
            return ga;
          }, getChatRoomWhitelist: function() {
            return aa;
          }, getChatRooms: function() {
            return yi;
          }, getJoinedChatRooms: function() {
            return Ra;
          }, isChatRoomWhiteUser: function() {
            return ca;
          }, isInChatRoomAllowlist: function() {
            return ua;
          }, isInChatRoomMutelist: function() {
            return la;
          }, joinChatRoom: function() {
            return Ai;
          }, leaveChatRoom: function() {
            return bi;
          }, listChatRoomMember: function() {
            return Ui;
          }, listChatRoomMembers: function() {
            return Pi;
          }, modifyChatRoom: function() {
            return Ri;
          }, muteChatRoomMember: function() {
            return Di;
          }, quitChatRoom: function() {
            return Mi;
          }, removeChatRoomAdmin: function() {
            return Li;
          }, removeChatRoomAllowlistMember: function() {
            return ia;
          }, removeChatRoomAttribute: function() {
            return _a;
          }, removeChatRoomAttributes: function() {
            return Ta;
          }, removeChatRoomBlockMulti: function() {
            return Ji;
          }, removeChatRoomBlockSingle: function() {
            return zi;
          }, removeChatRoomMember: function() {
            return Ii;
          }, removeChatRoomMembers: function() {
            return Ci;
          }, removeChatRoomWhitelistMember: function() {
            return na;
          }, removeMultiChatRoomMember: function() {
            return Si;
          }, removeMuteChatRoomMember: function() {
            return xi;
          }, removeSingleChatRoomMember: function() {
            return Oi;
          }, rmUsersFromChatRoomWhitelist: function() {
            return oa;
          }, setChatRoomAdmin: function() {
            return ki;
          }, setChatRoomAttribute: function() {
            return va;
          }, setChatRoomAttributes: function() {
            return ya;
          }, unblockChatRoomMember: function() {
            return Vi;
          }, unblockChatRoomMembers: function() {
            return Xi;
          }, unmuteChatRoomMember: function() {
            return Gi;
          }, updateChatRoomAnnouncement: function() {
            return pa;
          }, uploadChatRoomSharedFile: function() {
            return ha;
          } });
          var i = {};
          r.r(i), r.d(i, { getPresenceStatus: function() {
            return ba;
          }, getSubscribedPresenceList: function() {
            return Aa;
          }, getSubscribedPresencelist: function() {
            return Ma;
          }, publishPresence: function() {
            return Sa;
          }, subscribePresence: function() {
            return Ca;
          }, unsubscribePresence: function() {
            return Na;
          } });
          var a = {};
          r.r(a), r.d(a, { clearRemindTypeForConversation: function() {
            return ka;
          }, getPushPerformLanguage: function() {
            return Ga;
          }, getSilentModeForAll: function() {
            return Pa;
          }, getSilentModeForConversation: function() {
            return La;
          }, getSilentModeForConversations: function() {
            return Da;
          }, getSilentModeRemindTypeConversations: function() {
            return Ba;
          }, setPushPerformLanguage: function() {
            return xa;
          }, setSilentModeForAll: function() {
            return Ua;
          }, setSilentModeForConversation: function() {
            return wa;
          } });
          var s = {};
          r.r(s), r.d(s, { changeChatThreadName: function() {
            return za;
          }, createChatThread: function() {
            return Fa;
          }, destroyChatThread: function() {
            return qa;
          }, getChatThreadDetail: function() {
            return $a;
          }, getChatThreadLastMessage: function() {
            return Qa;
          }, getChatThreadMembers: function() {
            return Va;
          }, getChatThreads: function() {
            return Ya;
          }, getJoinedChatThreads: function() {
            return Xa;
          }, joinChatThread: function() {
            return Wa;
          }, leaveChatThread: function() {
            return Ka;
          }, removeChatThreadMember: function() {
            return Ja;
          } });
          var c = {};
          r.r(c), r.d(c, { getSupportedLanguages: function() {
            return es;
          }, translateMessage: function() {
            return ts;
          } });
          var u = {};
          function l() {
            u.converter._configure(), u.decoder._configure(), u.encoder._configure(), u.Field._configure(), u.MapField._configure(), u.Message._configure(), u.Namespace._configure(), u.Method._configure(), u.ReflectionObject._configure(), u.OneOf._configure(), u.parse._configure(), u.Reader._configure(), u.Root._configure(), u.Service._configure(), u.verifier._configure(), u.Type._configure(), u.types._configure(), u.wrappers._configure(), u.Writer._configure();
          }
          u.build = "minimal", u.Writer = r(244), u.encoder = r(929), u.Reader = r(494), u.util = r(935), u.rpc = r(325), u.roots = r(889), u.verifier = r(216), u.tokenize = r(869), u.parse = r(845), u.common = r(72), u.ReflectionObject = r(998), u.Namespace = r(476), u.Root = r(685), u.Enum = r(582), u.Type = r(192), u.Field = r(286), u.OneOf = r(735), u.MapField = r(435), u.Service = r(447), u.Method = r(484), u.converter = r(525), u.decoder = r(888), u.Message = r(339), u.wrappers = r(834), u.types = r(696), u.util = r(935), u.configure = l, u.load = function(e3, t3, r2) {
            return "function" == typeof t3 ? (r2 = t3, t3 = new u.Root()) : t3 || (t3 = new u.Root()), t3.load(e3, r2);
          }, u.loadSync = function(e3, t3) {
            return t3 || (t3 = new u.Root()), t3.loadSync(e3);
          }, u.parseFromPbString = function(e3, t3, r2) {
            return "function" == typeof t3 ? (r2 = t3, t3 = new u.Root()) : t3 || (t3 = new u.Root()), t3.parseFromPbString(e3, r2);
          }, l();
          var d, p = u, h = r(720), f = r.n(h), m = function() {
            function e3(e4) {
              this.type = e4.type, this.message = e4.message, this.data = e4.data;
            }
            return e3.create = function(t3) {
              return new e3(t3);
            }, e3;
          }();
          !function(e3) {
            e3[e3.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", e3[e3.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", e3[e3.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", e3[e3.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", e3[e3.REQUEST_ABORT = -4] = "REQUEST_ABORT", e3[e3.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", e3[e3.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", e3[e3.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", e3[e3.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", e3[e3.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", e3[e3.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", e3[e3.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", e3[e3.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", e3[e3.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", e3[e3.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", e3[e3.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", e3[e3.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", e3[e3.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", e3[e3.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", e3[e3.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", e3[e3.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", e3[e3.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", e3[e3.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", e3[e3.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", e3[e3.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", e3[e3.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", e3[e3.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", e3[e3.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", e3[e3.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", e3[e3.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", e3[e3.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", e3[e3.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", e3[e3.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", e3[e3.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", e3[e3.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", e3[e3.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", e3[e3.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", e3[e3.MAX_LIMIT = 50] = "MAX_LIMIT", e3[e3.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", e3[e3.NO_PERMISSION = 52] = "NO_PERMISSION", e3[e3.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", e3[e3.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", e3[e3.WEBIM_TOKEN_EXPIRED = 56] = "WEBIM_TOKEN_EXPIRED", e3[e3.WEBIM_SERVER_SERVING_DISABLED = 57] = "WEBIM_SERVER_SERVING_DISABLED", e3[e3.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", e3[e3.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", e3[e3.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", e3[e3.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", e3[e3.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", e3[e3.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", e3[e3.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", e3[e3.PARSE_FILE_ERROR = 203] = "PARSE_FILE_ERROR", e3[e3.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", e3[e3.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", e3[e3.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", e3[e3.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", e3[e3.WEBIM_USER_ALREADY_LOGIN = 208] = "WEBIM_USER_ALREADY_LOGIN", e3[e3.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", e3[e3.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", e3[e3.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", e3[e3.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", e3[e3.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", e3[e3.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", e3[e3.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", e3[e3.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", e3[e3.SERVER_GET_DNSLIST_FAILED = 304] = "SERVER_GET_DNSLIST_FAILED", e3[e3.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", e3[e3.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", e3[e3.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", e3[e3.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", e3[e3.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", e3[e3.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", e3[e3.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", e3[e3.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", e3[e3.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", e3[e3.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", e3[e3.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", e3[e3.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", e3[e3.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", e3[e3.STATUS_INIT = 400] = "STATUS_INIT", e3[e3.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", e3[e3.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", e3[e3.STATUS_OPENED = 403] = "STATUS_OPENED", e3[e3.STATUS_CLOSING = 404] = "STATUS_CLOSING", e3[e3.STATUS_CLOSED = 405] = "STATUS_CLOSED", e3[e3.STATUS_ERROR = 406] = "STATUS_ERROR", e3[e3.SERVER_BUSY = 500] = "SERVER_BUSY", e3[e3.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", e3[e3.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", e3[e3.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", e3[e3.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", e3[e3.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", e3[e3.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", e3[e3.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", e3[e3.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", e3[e3.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", e3[e3.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", e3[e3.MESSAGE_SIZE_LIMIT = 511] = "MESSAGE_SIZE_LIMIT", e3[e3.MESSAGE_SEND_TIMEOUT = 512] = "MESSAGE_SEND_TIMEOUT", e3[e3.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", e3[e3.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", e3[e3.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", e3[e3.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", e3[e3.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", e3[e3.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", e3[e3.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", e3[e3.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", e3[e3.GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609] = "GROUP_MEMBER_ATTRIBUTES_SET_FAILED", e3[e3.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", e3[e3.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", e3[e3.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", e3[e3.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", e3[e3.LOCAL_DB_OPERATION_FAILED = 800] = "LOCAL_DB_OPERATION_FAILED", e3[e3.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", e3[e3.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", e3[e3.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", e3[e3.REACTION_CREATING = 1102] = "REACTION_CREATING", e3[e3.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", e3[e3.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", e3[e3.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", e3[e3.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", e3[e3.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", e3[e3.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST", e3[e3.MODIFY_MESSAGE_NOT_EXIST = 1302] = "MODIFY_MESSAGE_NOT_EXIST", e3[e3.MODIFY_MESSAGE_FORMAT_ERROR = 1303] = "MODIFY_MESSAGE_FORMAT_ERROR", e3[e3.MODIFY_MESSAGE_FAILED = 1304] = "MODIFY_MESSAGE_FAILED", e3[e3.CONVERSATION_NOT_EXIST = 1400] = "CONVERSATION_NOT_EXIST";
          }(d || (d = {}));
          var g, E, y, v, T, _, R = function() {
            return R = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, R.apply(this, arguments);
          }, O = function(e3, t3, r2, o2) {
            var n2, i2, a2, s2, c2, u2, l2, p2, h2, f2, m2, g2, E2, y2, v2, T2, _2, O2, I2, S2, C2, N2, A2, M2, b2 = e3.response;
            b2 && "string" == typeof b2 && (b2 = JSON.parse(b2));
            var U2 = e3.status, P2 = { elapse: o2, httpCode: U2, errDesc: null == b2 ? void 0 : b2.error_description };
            if (400 === U2) {
              if (40002 === b2.error_code)
                return void t3({ type: d.THREAD_ALREADY_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
              if (40009 === b2.error_code)
                return void t3({ type: d.OPERATION_UNSUPPORTED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
              if (60005 === b2.error_code)
                return void t3({ type: d.GROUP_MEMBER_ATTRIBUTES_SET_FAILED, message: (null == b2 ? void 0 : b2.desc) || (null == b2 ? void 0 : b2.error_description), extraInfo: P2 });
              if (60010 === b2.error_code)
                return void ((null == b2 ? void 0 : b2.error_description.includes("exceeds chatgroup user metadata single value limit")) ? t3({ type: d.MAX_LIMIT, message: (null == b2 ? void 0 : b2.desc) || b2.error_description, extraInfo: P2 }) : t3({ type: d.NO_PERMISSION, message: (null == b2 ? void 0 : b2.desc) || b2.error_description, extraInfo: P2 }));
              if (60011 === b2.error_code)
                return void t3({ type: d.CHATROOM_NOT_JOINED, message: null == b2 ? void 0 : b2.desc, extraInfo: P2 });
              if (14403 === b2.error_code)
                return void t3({ type: d.WEBIM_UPLOADFILE_ERROR, message: null == b2 ? void 0 : b2.error_description, data: b2, extraInfo: P2 });
              if (60006 === b2.error_code || 60007 === b2.error_code || 60009 === b2.error_code || 60012 === b2.error_code)
                return void t3({ type: d.MAX_LIMIT, message: (null == b2 ? void 0 : b2.desc) || (null == b2 ? void 0 : b2.error_description), extraInfo: P2 });
              if (91104 === b2.error_code)
                return void t3({ type: d.NO_PERMISSION, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
              if (null === (n2 = b2.error_description) || void 0 === n2 ? void 0 : n2.includes("are not members of this group"))
                return (null === (i2 = e3.responseURL) || void 0 === i2 ? void 0 : i2.includes("chatgroups")) ? t3({ type: d.GROUP_NOT_JOINED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : t3({ type: d.CHATROOM_NOT_JOINED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }), void r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: null == b2 ? void 0 : b2.error_description, data: e3.responseText, extraInfo: P2 });
              if ("the app not open presence" === (null == b2 ? void 0 : b2.result))
                return void t3({ type: d.SERVICE_NOT_ENABLED, message: null == b2 ? void 0 : b2.result, extraInfo: P2 });
              if (null == b2 ? void 0 : b2.error_description.includes("remark length must less"))
                return void t3({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
              switch (null == b2 ? void 0 : b2.error_description) {
                case "the user is already operation this message":
                  t3({ type: d.REACTION_ALREADY_ADDED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "The quantity has exceeded the limit!":
                  t3({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "The user not in this group!":
                  t3({ type: d.GROUP_NOT_JOINED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "the user operation is illegal!":
                  t3({ type: d.REACTION_OPERATION_IS_ILLEGAL, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "this appKey is not open reaction service!":
                case "this appKey not open message roaming":
                  t3({ type: d.SERVICE_NOT_ENABLED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "this message is creating reaction, please try again.":
                  t3({ type: d.REACTION_CREATING, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "groupId can not be null!":
                  t3({ type: d.GROUP_NOT_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "The input text is too long.":
                  t3({ type: d.TRANSLATION_TEXT_TOO_LONG, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "The target language is not valid.":
                  t3({ type: d.TRANSLATION_NOT_VALID, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "report failed, get message by id failed":
                  t3({ type: d.MESSAGE_NOT_FOUND, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "ext is too big ":
                  t3({ type: d.PRESENCE_PARAM_EXCEED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "Request body not readable.Please check content type is correct!":
                case "param mark must be not empty, please check!":
                case "param mark illegal, please check it!":
                case "param pin_msg_id illegal, please check it!":
                  t3({ type: d.REQUEST_PARAMETER_ERROR, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                case "updateRemark | they are not friends, please add as a friend first.":
                  t3({ type: d.USER_NOT_FRIEND, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                  break;
                default:
                  t3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: null == b2 ? void 0 : b2.error_description, data: e3.responseText, extraInfo: P2 }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: null == b2 ? void 0 : b2.error_description, data: e3.responseText, extraInfo: P2 });
              }
            } else if (401 === U2)
              40001 === b2.error_code || 60001 === b2.error_code || "Unable to authenticate (OAuth)" === b2.error_description ? t3({ type: d.NO_PERMISSION, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : (r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: P2 }), t3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: P2 }));
            else if (403 === U2)
              4e4 === b2.error_code || 60004 === b2.error_code || 15002 === b2.error_code ? t3({ type: d.SERVICE_NOT_ENABLED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 40003 === b2.error_code || 40004 === b2.error_code ? t3({ type: d.THREAD_ALREADY_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 40005 === b2.error_code || 40007 === b2.error_code || 91002 === b2.error_code ? t3({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 60002 === b2.error_code ? t3({ type: d.PERMISSION_DENIED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 91101 === b2.error_code ? t3({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 91102 === b2.error_code && t3({ type: d.REQUEST_PARAMETER_ERROR, message: b2.error_description, extraInfo: P2 }), "group member list is full!" === b2.error_description ? (null === (a2 = e3.responseURL) || void 0 === a2 ? void 0 : a2.includes("chatgroups")) ? t3({ type: d.GROUP_MEMBERS_FULL, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : t3({ type: d.CHATROOM_MEMBERS_FULL, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (s2 = b2.error_description) || void 0 === s2 ? void 0 : s2.includes(b2.error_description.includes("already in group"))) ? (null === (c2 = e3.responseURL) || void 0 === c2 ? void 0 : c2.includes("chatgroups")) && t3({ type: d.GROUP_ALREADY_JOINED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (u2 = b2.error_description) || void 0 === u2 ? void 0 : u2.includes("are not members of this group")) ? (null === (l2 = e3.responseURL) || void 0 === l2 ? void 0 : l2.includes("chatgroups")) ? t3({ type: d.GROUP_NOT_JOINED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : t3({ type: d.CHATROOM_NOT_JOINED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (p2 = b2.error_description) || void 0 === p2 ? void 0 : p2.includes("service not open!")) || (null === (h2 = b2.error_description) || void 0 === h2 ? void 0 : h2.includes("message report not open")) || (null === (f2 = b2.error_description) || void 0 === f2 ? void 0 : f2.includes("messageroaming function not open")) ? t3({ type: d.SERVICE_NOT_ENABLED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (m2 = b2.error_description) || void 0 === m2 ? void 0 : m2.includes("members size is greater than max user size !")) ? t3({ type: d.GROUP_MEMBERS_LIMIT, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (g2 = b2.error_description) || void 0 === g2 ? void 0 : g2.includes("can not operate this group, reason: group is disabled")) ? t3({ type: d.GROUP_IS_DISABLED, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (E2 = b2.error_description) || void 0 === E2 ? void 0 : E2.includes("Invitee's contact max count")) || (null === (y2 = b2.error_description) || void 0 === y2 ? void 0 : y2.includes("Inviter's contact max count")) ? t3({ type: d.MAX_LIMIT, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : t3({ type: d.PERMISSION_DENIED, data: e3.response || e3.responseText, message: "permission denied", extraInfo: R(R({}, P2), { errDesc: "permission denied" }) }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: P2 });
            else if (404 === U2)
              40011 === b2.error_code ? t3({ type: d.THREAD_NOT_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 40012 === b2.error_code ? t3({ type: d.NO_PERMISSION, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 60003 === b2.error_code || 20004 === b2.error_code ? t3({ type: d.GROUP_NOT_JOINED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 91001 === b2.error_code && t3({ type: d.CONVERSATION_NOT_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }), (null === (v2 = b2.error_description) || void 0 === v2 ? void 0 : v2.includes("do not find this group")) || (null === (T2 = b2.error_description) || void 0 === T2 ? void 0 : T2.includes("does not exist")) ? (null === (_2 = e3.responseURL) || void 0 === _2 ? void 0 : _2.includes("chatgroups")) ? t3({ type: d.GROUP_NOT_EXIST, data: e3.response || e3.responseText, message: "The chat room dose not exist.", extraInfo: R(R({}, P2), { errDesc: "The chat room dose not exist." }) }) : t3({ type: d.CHATROOM_NOT_EXIST, data: e3.response || e3.responseText, message: "The chat room dose not exist.", extraInfo: R(R({}, P2), { errDesc: "The chat room dose not exist." }) }) : (null === (O2 = b2.error_description) || void 0 === O2 ? void 0 : O2.includes("username")) && (null === (I2 = b2.error_description) || void 0 === I2 ? void 0 : I2.includes("doesn't exist!'")) || (null === (S2 = b2.error_description) || void 0 === S2 ? void 0 : S2.includes("user not found")) || (null === (C2 = b2.error_description) || void 0 === C2 ? void 0 : C2.includes("Service resource not found")) && "UserNotFoundException" === (null == b2 ? void 0 : b2.exception) ? t3({ type: d.USER_NOT_FOUND, data: e3.response || e3.responseText, message: b2.error_description, extraInfo: P2 }) : b2.error_description.includes("user session pin message not exist") ? t3({ type: d.MESSAGE_NOT_FOUND, message: b2.error_description, extraInfo: P2 }) : t3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.response || e3.responseText, message: e3.responseText, extraInfo: P2 }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.response || e3.responseText, message: e3.responseText, extraInfo: P2 });
            else if (406 === U2)
              90004 === b2.error_code && t3({ type: d.OPERATION_NOT_ALLOWED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            else if (429 === U2 || 503 === U2) {
              if (null === (N2 = b2.error_description) || void 0 === N2 ? void 0 : N2.includes("The request has reached the maximum limit"))
                return void t3({ type: d.MAX_LIMIT, message: e3.responseText, extraInfo: P2 });
              if (null === (A2 = b2.error_description) || void 0 === A2 ? void 0 : A2.includes("upload client logs reached limit"))
                return void t3({ type: d.MAX_LIMIT, message: e3.responseText });
              t3({ type: d.SERVER_BUSY, data: e3.response || e3.responseText, message: "Server is busy.", extraInfo: R(R({}, P2), { errDesc: "Server is busy." }) }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: "Server is busy.", extraInfo: R(R({}, P2), { errDesc: "Server is busy." }) });
            } else if (500 === U2) {
              if (40006 === b2.error_code || 40008 === b2.error_code || 40010 === b2.error_code)
                return void t3({ type: d.SERVER_UNKNOWN_ERROR, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
              if (90005 === b2.error_code || 99999 === b2.error_code)
                return void t3({ type: d.REQUEST_UNKNOWN, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
              if (null === (M2 = b2.error_description) || void 0 === M2 ? void 0 : M2.includes("translte failed!"))
                return void t3({ type: d.TRANSLATION_FAILED, message: e3.responseText, extraInfo: P2 });
              t3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: "", extraInfo: P2 }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: "", extraInfo: P2 });
            } else
              t3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: R(R({}, P2), { errDesc: "ajax error" }) }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e3.responseText, message: e3.responseText, extraInfo: R(R({}, P2), { errDesc: "ajax error" }) });
          };
          !function(e3) {
            e3[e3.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", e3[e3.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", e3[e3.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", e3[e3.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", e3[e3.REST_PIN_CONVERSATION = 4] = "REST_PIN_CONVERSATION", e3[e3.REST_MARK_CONVERSATION = 5] = "REST_MARK_CONVERSATION", e3[e3.REST_UPLOAD_FILE_IN_PARTS = 6] = "REST_UPLOAD_FILE_IN_PARTS", e3[e3.REST_DELETE_MESSAGES_CONVERSATIONS = 7] = "REST_DELETE_MESSAGES_CONVERSATIONS", e3[e3.REST_PIN_MESSAGE = 8] = "REST_PIN_MESSAGE", e3[e3.REST_FETCH_PINMESSAGES = 9] = "REST_FETCH_PINMESSAGES", e3[e3.REST_OPERATE = 100] = "REST_OPERATE", e3[e3.MSYNC_SENDMESSAGE = 101] = "MSYNC_SENDMESSAGE", e3[e3.MSYNC_RECALLMESSAGE = 102] = "MSYNC_RECALLMESSAGE", e3[e3.MSYNC_MODIFYMESSAGE = 103] = "MSYNC_MODIFYMESSAGE", e3[e3.MSYNC_OPERATE = 200] = "MSYNC_OPERATE", e3[e3.ROSTER_ADD = 201] = "ROSTER_ADD", e3[e3.ROSTER_REMOVE = 202] = "ROSTER_REMOVE", e3[e3.ROSTER_ACCEPT = 203] = "ROSTER_ACCEPT", e3[e3.ROSTER_DECLINE = 204] = "ROSTER_DECLINE", e3[e3.ROSTER_BAN = 205] = "ROSTER_BAN", e3[e3.ROSTER_ALLOW = 206] = "ROSTER_ALLOW", e3[e3.ROSTER_BLACKLIST = 207] = "ROSTER_BLACKLIST", e3[e3.ROSTER_CONTACTS = 208] = "ROSTER_CONTACTS", e3[e3.ROSTER_GET_ALL_CONTACTS_REMARKS = 209] = "ROSTER_GET_ALL_CONTACTS_REMARKS", e3[e3.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = 210] = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e3[e3.ROSTER_SET_CONTACT_REMARK = 211] = "ROSTER_SET_CONTACT_REMARK", e3[e3.ROSTER_OPERATE = 300] = "ROSTER_OPERATE", e3[e3.USER_LOGIN = 301] = "USER_LOGIN", e3[e3.USER_CREATE = 302] = "USER_CREATE", e3[e3.USER_UPDATE_USERINFO = 303] = "USER_UPDATE_USERINFO", e3[e3.USER_FETCH_USERINFO = 304] = "USER_FETCH_USERINFO", e3[e3.USER_UPDATE_NICK = 305] = "USER_UPDATE_NICK", e3[e3.USER_UPLOAD_PUSH_TOKEN = 306] = "USER_UPLOAD_PUSH_TOKEN", e3[e3.USER_LOGGEDIN_OTHER_PLATFORM = 307] = "USER_LOGGEDIN_OTHER_PLATFORM", e3[e3.USER_OPERATE = 400] = "USER_OPERATE", e3[e3.GROUP_CREATEGROUP = 401] = "GROUP_CREATEGROUP", e3[e3.GROUP_BLOCK_MESSAGE = 402] = "GROUP_BLOCK_MESSAGE", e3[e3.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 403] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e3[e3.GROUP_FETCH_USERS_GROUP = 404] = "GROUP_FETCH_USERS_GROUP", e3[e3.GROUP_CHANGE_OWNER = 405] = "GROUP_CHANGE_OWNER", e3[e3.GROUP_FETCH_SPECIFICATION = 406] = "GROUP_FETCH_SPECIFICATION", e3[e3.GROUP_CHANGE_GROUPATTRIBUTE = 407] = "GROUP_CHANGE_GROUPATTRIBUTE", e3[e3.GROUP_FETCH_MEMEBERS = 408] = "GROUP_FETCH_MEMEBERS", e3[e3.GROUP_GET_ADMIN = 409] = "GROUP_GET_ADMIN", e3[e3.GROUP_SET_ADMIN = 410] = "GROUP_SET_ADMIN", e3[e3.GROUP_REMOVE_ADMIN = 411] = "GROUP_REMOVE_ADMIN", e3[e3.GROUP_DESTOTYGROUP = 412] = "GROUP_DESTOTYGROUP", e3[e3.GROUP_LEAVEGROUP = 413] = "GROUP_LEAVEGROUP", e3[e3.GROUP_INVITE_TO_GROUP = 414] = "GROUP_INVITE_TO_GROUP", e3[e3.GROUP_JOIN_PUBLICGROUP = 415] = "GROUP_JOIN_PUBLICGROUP", e3[e3.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 416] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e3[e3.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 417] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e3[e3.GROUP_ACCEPT_INVITATION = 418] = "GROUP_ACCEPT_INVITATION", e3[e3.GROUP_DECLINE_INVITATION = 419] = "GROUP_DECLINE_INVITATION", e3[e3.GROUP_REMOVE_MEMBER = 420] = "GROUP_REMOVE_MEMBER", e3[e3.GROUP_REMOVE_MEMBERS = 421] = "GROUP_REMOVE_MEMBERS", e3[e3.GROUP_MUTE_MEMBERS = 422] = "GROUP_MUTE_MEMBERS", e3[e3.GROUP_UNMUTE_MEMBERS = 423] = "GROUP_UNMUTE_MEMBERS", e3[e3.GROUP_FETCH_MUTES = 424] = "GROUP_FETCH_MUTES", e3[e3.GROUP_BLOCK_MEMBER = 425] = "GROUP_BLOCK_MEMBER", e3[e3.GROUP_BLOCK_MEMBERS = 426] = "GROUP_BLOCK_MEMBERS", e3[e3.GROUP_UNBLOCK_MEMBER = 427] = "GROUP_UNBLOCK_MEMBER", e3[e3.GROUP_UNBLOCK_MEMBERS = 428] = "GROUP_UNBLOCK_MEMBERS", e3[e3.GROUP_GET_BLOCK_LIST = 429] = "GROUP_GET_BLOCK_LIST", e3[e3.GROUP_MUTE_ALLMEMBERS = 430] = "GROUP_MUTE_ALLMEMBERS", e3[e3.GROUP_UNMUTE_ALLMEMBERS = 431] = "GROUP_UNMUTE_ALLMEMBERS", e3[e3.GROUP_ADD_WHITELIST = 432] = "GROUP_ADD_WHITELIST", e3[e3.GROUP_REMOVE_WHITELIST = 433] = "GROUP_REMOVE_WHITELIST", e3[e3.GROUP_FETCH_WHITELIST = 434] = "GROUP_FETCH_WHITELIST", e3[e3.GROUP_IS_IN_WHITELIST = 435] = "GROUP_IS_IN_WHITELIST", e3[e3.GROUP_GET_READ_USERS = 436] = "GROUP_GET_READ_USERS", e3[e3.GROUP_FETCH_ANNOUNCEMENT = 437] = "GROUP_FETCH_ANNOUNCEMENT", e3[e3.GROUP_UPDATE_ANNOUNCEMENT = 438] = "GROUP_UPDATE_ANNOUNCEMENT", e3[e3.GROUP_UPLOAD_SHAREDFILE = 439] = "GROUP_UPLOAD_SHAREDFILE", e3[e3.GROUP_DELETE_SHAREDFILE = 440] = "GROUP_DELETE_SHAREDFILE", e3[e3.GROUP_FETCH_SHAREDFILE = 441] = "GROUP_FETCH_SHAREDFILE", e3[e3.GROUP_DOWNLOAD_SHAREDFILE = 442] = "GROUP_DOWNLOAD_SHAREDFILE", e3[e3.GROUP_MEMBER_SET_META_DATA = 443] = "GROUP_MEMBER_SET_META_DATA", e3[e3.GROUP_MEMBER_FETCH_META_DATA = 444] = "GROUP_MEMBER_FETCH_META_DATA", e3[e3.GROUP_OPERATE = 500] = "GROUP_OPERATE", e3[e3.CHATROOM_FETCH_CHATROOMSWITHPAGE = 501] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e3[e3.CHATROOM_CREATECHATROOM = 502] = "CHATROOM_CREATECHATROOM", e3[e3.CHATROOM_DESTORYCHATROOM = 503] = "CHATROOM_DESTORYCHATROOM", e3[e3.CHATROOM_FETCH_SPECIFICATION = 504] = "CHATROOM_FETCH_SPECIFICATION", e3[e3.CHATROOM_CHANGE_ATTRIBUTE = 505] = "CHATROOM_CHANGE_ATTRIBUTE", e3[e3.CHATROOM_REMOVE_MEMBER = 506] = "CHATROOM_REMOVE_MEMBER", e3[e3.CHATROOM_REMOVE_MEMBERS = 507] = "CHATROOM_REMOVE_MEMBERS", e3[e3.CHATROOM_ADD_MEMBERS = 508] = "CHATROOM_ADD_MEMBERS", e3[e3.CHATROOM_JOINCAHTROOM = 509] = "CHATROOM_JOINCAHTROOM", e3[e3.CHATROOM_LEAVECAHTROOM = 510] = "CHATROOM_LEAVECAHTROOM", e3[e3.CHATROOM_FETCH_MEMBERS = 511] = "CHATROOM_FETCH_MEMBERS", e3[e3.CHATROOM_GET_ADMIN = 512] = "CHATROOM_GET_ADMIN", e3[e3.CHATROOM_SET_ADMIN = 513] = "CHATROOM_SET_ADMIN", e3[e3.CHATROOM_REMOVE_ADMIN = 514] = "CHATROOM_REMOVE_ADMIN", e3[e3.CHATROOM_MUTE_USER = 515] = "CHATROOM_MUTE_USER", e3[e3.CHATROOM_UNMUTE_USER = 516] = "CHATROOM_UNMUTE_USER", e3[e3.CHATROOM_FETCH_MUTES = 517] = "CHATROOM_FETCH_MUTES", e3[e3.CHATROOM_BLOCK_USER = 518] = "CHATROOM_BLOCK_USER", e3[e3.CHATROOM_BLOCK_USERS = 519] = "CHATROOM_BLOCK_USERS", e3[e3.CHATROOM_UNBLOCK_USER = 520] = "CHATROOM_UNBLOCK_USER", e3[e3.CHATROOM_UNBLOCK_USERS = 521] = "CHATROOM_UNBLOCK_USERS", e3[e3.CHATROOM_FETCH_BANS = 522] = "CHATROOM_FETCH_BANS", e3[e3.CHATROOM_MUTE_ALLMEMEBERS = 523] = "CHATROOM_MUTE_ALLMEMEBERS", e3[e3.CHATROOM_UNMUTE_ALLMEMEBERS = 524] = "CHATROOM_UNMUTE_ALLMEMEBERS", e3[e3.CHATROOM_ADD_WHITELIST = 525] = "CHATROOM_ADD_WHITELIST", e3[e3.CHATROOM_REMOVE_WHITELIST = 526] = "CHATROOM_REMOVE_WHITELIST", e3[e3.CHATROOM_FETCH_WHITELIST = 527] = "CHATROOM_FETCH_WHITELIST", e3[e3.CHATROOM_FETCH_MEMBERIN_WHITELIST = 528] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e3[e3.CHATROOM_FETCH_ANNOUNCEMENT = 529] = "CHATROOM_FETCH_ANNOUNCEMENT", e3[e3.CHATROOM_UPDATE_ANNOUNCEMENT = 530] = "CHATROOM_UPDATE_ANNOUNCEMENT", e3[e3.CHATROOM_REMOVE_SHARE_FILE = 531] = "CHATROOM_REMOVE_SHARE_FILE", e3[e3.CHATROOM_GET_SHARE_FILE_LIST = 532] = "CHATROOM_GET_SHARE_FILE_LIST", e3[e3.CHATROOM_UPLOAD_FILE = 533] = "CHATROOM_UPLOAD_FILE", e3[e3.CHATROOM_SET_META_DATA = 534] = "CHATROOM_SET_META_DATA", e3[e3.CHATROOM_DELETE_META_DATA = 535] = "CHATROOM_DELETE_META_DATA", e3[e3.CHATROOM_FETCH_META_DATA = 536] = "CHATROOM_FETCH_META_DATA", e3[e3.CHATROOM_FETCH_USER_JOINED_CHATROOM = 537] = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e3[e3.CHATROOM_OPERATE = 600] = "CHATROOM_OPERATE";
          }(g || (g = {})), function(e3) {
            e3.SDK_INTERNAL = "SDK_INTERNAL", e3.LOGIN = "USER_LOGIN", e3.REGISTER = "USER_CREATE", e3.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e3.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", e3.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", e3.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", e3.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", e3.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", e3.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", e3.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", e3.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", e3.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", e3.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", e3.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", e3.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", e3.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", e3.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", e3.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", e3.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", e3.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", e3.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", e3.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", e3.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", e3.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", e3.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", e3.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", e3.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", e3.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", e3.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", e3.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e3.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", e3.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", e3.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", e3.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", e3.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", e3.SET_CHATROOM_ATTR = "CHATROOM_SET_META_DATA", e3.DELETE_CHATROOM_ATTR = "CHATROOM_DELETE_META_DATA", e3.GET_CHATROOM_ATTR = "CHATROOM_FETCH_META_DATA", e3.GET_USER_JOINED_CHATROOM = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e3.CREATE_GROUP = "GROUP_CREATEGROUP", e3.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", e3.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e3.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", e3.CHANGE_OWNER = "GROUP_CHANGE_OWNER", e3.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", e3.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", e3.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", e3.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", e3.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", e3.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", e3.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", e3.QUIT_GROUP = "GROUP_LEAVEGROUP", e3.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", e3.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", e3.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e3.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e3.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", e3.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", e3.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", e3.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", e3.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", e3.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", e3.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", e3.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", e3.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", e3.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", e3.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", e3.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", e3.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", e3.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", e3.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", e3.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", e3.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", e3.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", e3.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", e3.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", e3.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", e3.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", e3.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", e3.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", e3.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", e3.SET_GROUP_MEMBER_ATTRS = "GROUP_MEMBER_SET_META_DATA", e3.GET_GROUP_MEMBER_ATTR = "GROUP_MEMBER_FETCH_META_DATA", e3.GET_SESSION_LIST = "REST_GET_SESSION_LIST", e3.DELETE_SESSION = "REST_DEL_SESSION", e3.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", e3.PIN_CONVERSATION = "REST_PIN_CONVERSATION", e3.REST_UPLOAD_FILE_IN_PARTS = "REST_UPLOAD_FILE_IN_PARTS", e3.REST_DELETE_MESSAGES_CONVERSATIONS = "REST_DELETE_MESSAGES_CONVERSATIONS", e3.MARK_CONVERSATION = "REST_MARK_CONVERSATION", e3.REST_FETCH_PINMESSAGES = "REST_FETCH_PINMESSAGES", e3.REST_PIN_MESSAGE = "REST_PIN_MESSAGE", e3.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", e3.GET_USER_INFO = "USER_FETCH_USERINFO", e3.UPDATE_USER_NICK = "USER_UPDATE_NICK", e3.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", e3.USER_LOGGEDIN_OTHER_PLATFORM = "USER_LOGGEDIN_OTHER_PLATFORM", e3.GET_BLACK_LIST = "ROSTER_BLACKLIST", e3.GET_CONTACTS = "ROSTER_CONTACTS", e3.ROSTER_GET_ALL_CONTACTS_REMARKS = "ROSTER_GET_ALL_CONTACTS_REMARKS", e3.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e3.ROSTER_SET_CONTACT_REMARK = "ROSTER_SET_CONTACT_REMARK", e3.ROSTER_ADD = "ROSTER_ADD", e3.ROSTER_REMOVE = "ROSTER_REMOVE", e3.ROSTER_ACCEPT = "ROSTER_ACCEPT", e3.ROSTER_DECLINE = "ROSTER_DECLINE", e3.ROSTER_BAN = "ROSTER_BAN", e3.ROSTER_ALLOW = "ROSTER_ALLOW", e3.SEND_MSG = "MSYNC_SENDMESSAGE", e3.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", e3.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE", e3.MODIFY_MESSAGE = "MSYNC_MODIFYMESSAGE";
          }(E || (E = {})), function(e3) {
            e3.GET_DNS = "REST_DNSLIST", e3.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", e3.LOGIN_BY_PWD = "LOGIN_BY_PWD", e3.RESISTER = "REGISTER", e3.REST_INIT_UPLOAD_TASK_IN_PARTS = "REST_INIT_UPLOAD_TASK_IN_PARTS", e3.REST_UPLOAD_PART = "REST_UPLOAD_PART", e3.REST_COMPLETE_UPLOAD_PART = "REST_COMPLETE_UPLOAD_PART", e3.REST_ABORT_UPLOAD_PART = "REST_ABORT_UPLOAD_PART", e3.CONNECT_WEBSOCKET = "CONNECT_WEBSOCKET";
          }(y || (y = {})), function(e3) {
            e3[e3["5G"] = 7] = "5G", e3[e3["4G"] = 7] = "4G", e3[e3["3G"] = 7] = "3G", e3[e3["2G"] = 7] = "2G", e3[e3["SLOW-2G"] = 7] = "SLOW-2G", e3[e3.WIFI = 2] = "WIFI", e3[e3.LAN = 1] = "LAN", e3[e3.DISCONNECTED = 0] = "DISCONNECTED", e3[e3.NONE = 0] = "NONE", e3[e3.UNKNOWN = -1] = "UNKNOWN", e3[e3["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
          }(v || (v = {})), function(e3) {
            e3[e3.success = 200] = "success", e3[e3.failed = 500] = "failed", e3[e3.disconnect = -1] = "disconnect", e3[e3.closed = 401] = "closed", e3[e3.notFound = 404] = "notFound", e3[e3.reachLimit = 429] = "reachLimit";
          }(T || (T = {})), function(e3) {
            e3[e3.web = 0] = "web", e3[e3.native = 1] = "native";
          }(_ || (_ = {}));
          var I = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), C = 1e3, N = 9675, A = -1;
          function M() {
            console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
          }
          var b, U = "undefined" != typeof window && void 0 !== window.navigator && /Trident\/|MSIE /.test(window.navigator.userAgent), P = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, w = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, k = function() {
          }, L = {};
          !function(e3) {
            e3[e3.TRACE = 0] = "TRACE", e3[e3.DEBUG = 1] = "DEBUG", e3[e3.INFO = 2] = "INFO", e3[e3.WARN = 3] = "WARN", e3[e3.ERROR = 4] = "ERROR", e3[e3.SILENT = 5] = "SILENT";
          }(b || (b = {}));
          var D = function() {
            function e3(e4, t3, r2) {
              this.name = e4 || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = false, this.storageLogLevelKey = "loglevel", this.levels = b, this.consoleLogVisibility = true, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = r2 || this.defaultMethodFactory, this.report = false;
              var o2 = this._getPersistedLevel();
              null == o2 && (o2 = null === t3 ? "WARN" : t3), this.logs = [], this.reportLogs = [], this.reportInterval = 3e5, this.timer = null, this.config = { useCache: false, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(o2, false, "");
            }
            return e3.prototype.reportLog = function() {
              var e4, t3, r2;
              return P(this, void 0, void 0, function() {
                var o2, n2, i2, a2, s2, c2, u2, l2;
                return w(this, function(d2) {
                  switch (d2.label) {
                    case 0:
                      if (0 === (null === (e4 = this.reportLogs) || void 0 === e4 ? void 0 : e4.length))
                        return [2];
                      for (o2 = 2097152, n2 = this.reportLogs.join("\n") + "\n", i2 = n2.length, a2 = []; i2 > o2; )
                        a2.push(n2.substring(0, o2)), i2 -= o2, n2 = n2.substring(o2);
                      a2.push(n2), s2 = 0, c2 = a2, d2.label = 1;
                    case 1:
                      if (!(s2 < c2.length))
                        return [3, 8];
                      if (u2 = c2[s2], this.reportLogs = [], !(null === (r2 = null === (t3 = this.connection) || void 0 === t3 ? void 0 : t3.context) || void 0 === r2 ? void 0 : r2.accessToken))
                        return [2];
                      d2.label = 2;
                    case 2:
                      return d2.trys.push([2, 4, , 5]), [4, this.reportData(u2)];
                    case 3:
                      return "ok" !== (null == (l2 = d2.sent()) ? void 0 : l2.status) && this.reportLogs.unshift(u2), [3, 5];
                    case 4:
                      return d2.sent(), this.reportLogs.unshift(u2), [3, 5];
                    case 5:
                      return [4, _e.delay(3e3)];
                    case 6:
                      d2.sent(), d2.label = 7;
                    case 7:
                      return s2++, [3, 1];
                    case 8:
                      return [2];
                  }
                });
              });
            }, e3.prototype.reportData = function(e4) {
              var t3, r2 = this;
              if (this.connection) {
                var o2 = this.connection.context || {}, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.userId, c2 = { url: "".concat(null === (t3 = this.connection) || void 0 === t3 ? void 0 : t3.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/users/").concat(s2, "/client/logs"), type: "POST", data: JSON.stringify({ resource: this.connection.clientResource || "random_".concat(Date.now()), logContent: e4 }), dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
                return se.call(this.connection, c2).then(function(e5) {
                  return r2.log("report log success", e5), e5;
                }).catch(function(e5) {
                  r2.error("report log error", e5);
                });
              }
              this.error("report log error", "connection is null");
            }, e3.prototype._regularlyReportLogs = function() {
              var e4, t3 = this;
              this.timer && clearInterval(this.timer), (null !== (e4 = this.reportInterval) && void 0 !== e4 ? e4 : 0) < 6e4 && (this.reportInterval = 6e4), this.timer = setInterval(function() {
                t3.reportLog();
              }, this.reportInterval || 3e5);
            }, e3.prototype._stopReportLogs = function() {
              return P(this, void 0, void 0, function() {
                return w(this, function(e4) {
                  switch (e4.label) {
                    case 0:
                      return e4.trys.push([0, 2, , 3]), [4, this.reportLog()];
                    case 1:
                      return e4.sent(), [3, 3];
                    case 2:
                      return e4.sent(), this.error("report log error when stopping upload"), [3, 3];
                    case 3:
                      return this.reportLogs = [], clearInterval(this.timer), [2];
                  }
                });
              });
            }, e3.prototype.setConfig = function(e4) {
              this.config = e4;
            }, e3.prototype.getLevel = function() {
              return this.currentLevel;
            }, e3.prototype.setLevel = function(e4, t3, r2) {
              if ("string" == typeof e4 && (e4 = b[e4]), void 0 === e4 && (e4 = 0), !("number" == typeof e4 && e4 >= 0 && e4 <= this.levels.SILENT))
                throw Error("log.setLevel() called with invalid level: " + e4);
              if (this.currentLevel = e4, false !== t3 && this._persistLevel(e4), this.replaceLoggingMethods(e4, r2 || ""), "undefined" == typeof console && e4 < b.SILENT)
                throw Error("No console available for logging");
            }, e3.prototype.setDefaultLevel = function(e4) {
              this._getPersistedLevel() || this.setLevel(e4, false, "");
            }, e3.prototype.enableAll = function(e4) {
              this.setLevel(this.levels.TRACE, true, "");
            }, e3.prototype.disableAll = function(e4) {
              this.setLevel(this.levels.SILENT, true, "");
            }, e3.prototype.getLogs = function() {
              return this.logs;
            }, e3.prototype.download = function() {
              if ("undefined" != typeof window && "undefined" != typeof document) {
                var e4 = this.getLogs().join("\n"), t3 = new Blob([e4], { type: "text/plain;charset=UTF-8" }), r2 = window.URL.createObjectURL(t3), o2 = document.createElement("a");
                o2.style.display = "none", o2.href = r2, o2.setAttribute("download", "sdklog"), document.body.appendChild(o2), o2.click();
              }
            }, e3.prototype.setConsoleLogVisibility = function(e4) {
              this.consoleLogVisibility = e4;
            }, e3.prototype._bindMethod = function(e4, t3, r2) {
              var o2 = this, n2 = e4[t3], i2 = this.getTime();
              if (r2)
                return this._cacheLog;
              if ("function" == typeof n2.bind)
                return function() {
                  for (var r3 = [], i3 = 0; i3 < arguments.length; i3++)
                    r3[i3] = arguments[i3];
                  var a2 = o2.getTime();
                  o2.consoleLogVisibility && n2.call.apply(n2, function(e5, t4, r4) {
                    if (r4 || 2 === arguments.length)
                      for (var o3, n3 = 0, i4 = t4.length; n3 < i4; n3++)
                        !o3 && n3 in t4 || (o3 || (o3 = Array.prototype.slice.call(t4, 0, n3)), o3[n3] = t4[n3]);
                    return e5.concat(o3 || Array.prototype.slice.call(t4));
                  }([e4, "".concat(a2, " IM SDK [").concat("log" === t3 ? "debug" : t3, "]: ")], r3, false)), o2.onLog && o2.onLog({ time: a2, level: "log" === t3 ? "debug" : t3, logs: r3 }), o2._cacheReportLogs.apply(o2, r3);
                };
              try {
                return Function.prototype.bind.call(n2, e4, "".concat(i2, " IM SDK [").concat("log" === t3 ? "debug" : t3, "]: "));
              } catch (t4) {
                return function() {
                  return Function.prototype.apply.apply(n2, [e4, arguments]);
                };
              }
            }, e3.prototype.getTime = function() {
              var e4 = /* @__PURE__ */ new Date();
              return e4.toTimeString().split(" ")[0] + ":" + e4.getMilliseconds();
            }, e3.prototype._cacheLog = function() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              var r2 = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", o2 = "";
              e4.forEach(function(e5) {
                o2 += "object" == typeof e5 ? JSON.stringify(e5) + " " : e5 + " ";
              }), this._cacheLogCall(r2 + o2), this._cacheReportLogs.apply(this, e4);
            }, e3.prototype._cacheLogCall = function(e4) {
              var t3 = e4.length, r2 = this.logBytes + t3, o2 = this.config.maxCache;
              if (!(t3 >= o2)) {
                if (r2 < o2)
                  this.logBytes += t3;
                else
                  for (var n2 = r2 - o2, i2 = 0; i2 < n2; ) {
                    var a2 = this.logs.shift();
                    void 0 !== a2 && (i2 += a2.length);
                  }
                this.logs.push(e4);
              }
            }, e3.prototype._cacheReportLogs = function() {
              for (var e4 = [], t3 = 0; t3 < arguments.length; t3++)
                e4[t3] = arguments[t3];
              if (this.report) {
                var r2 = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", o2 = "";
                e4.forEach(function(e5) {
                  o2 += "object" == typeof e5 ? JSON.stringify(e5) + " " : e5 + " ";
                }), this.reportLogs.push(r2 + o2);
              }
            }, e3.prototype._getPersistedLevel = function() {
              var e4;
              if ("undefined" == typeof window)
                return 5;
              if ("undefined" === (e4 = window && window.localStorage && window.localStorage[this.storageLogLevelKey])) {
                var t3 = window.document.cookie, r2 = t3.indexOf(encodeURIComponent(this.storageLogLevelKey));
                -1 !== r2 && (e4 = /^([^;]+)/.exec(t3.slice(r2))[1]);
              }
              return e4 || 5;
            }, e3.prototype._persistLevel = function(e4) {
              var t3 = this.logMethods[e4] || "SILENT";
              "undefined" != typeof window && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = t3), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + t3 + ";"));
            }, e3.prototype.replaceLoggingMethods = function(e4, t3) {
              for (var r2 = this, o2 = 0; o2 < this.logMethods.length; o2++) {
                var n2 = this.logMethods[o2];
                this[n2] = o2 < e4 ? function() {
                  for (var e5 = [], t4 = 0; t4 < arguments.length; t4++)
                    e5[t4] = arguments[t4];
                  r2.report && r2._cacheReportLogs.apply(r2, e5);
                } : this.methodFactory(n2, e4, t3);
              }
              this.log = this.debug;
            }, e3.prototype.defaultMethodFactory = function(e4, t3, r2) {
              return this.realMethod(e4) || this.enableLoggingWhenConsoleArrives.apply(this, [e4, t3, r2]);
            }, e3.prototype.realMethod = function(e4) {
              return "debug" === e4 && (e4 = "log"), "undefined" != typeof console && ("trace" === e4 && U ? M : void 0 !== console[e4] ? this._bindMethod(console, e4, this.config.useCache) : void 0 !== console.log ? this._bindMethod(console, "log", this.config.useCache) : k);
            }, e3.prototype.enableLoggingWhenConsoleArrives = function(e4, t3, r2) {
              return (function() {
                "undefined" != typeof console && (this.replaceLoggingMethods.call(this, t3, r2), this[e4].apply(this, arguments));
              }).bind(this);
            }, e3;
          }(), x = new D();
          x.getLogger = function(e3) {
            if ("string" != typeof e3 || "" === e3)
              throw new TypeError("You must supply a name when creating a logger.");
            return this;
          };
          var G = "undefined" != typeof window ? window.log : void 0;
          x.noConflict = function() {
            return "undefined" != typeof window && window.log === x && (window.log = G), x;
          }, x.getLoggers = function() {
            return L;
          }, x.initReport = function(e3) {
            var t3 = e3.report, r2 = e3.reportInterval, o2 = e3.connection;
            x.report = t3, x.reportInterval = r2, x.connection = o2, t3 && x._regularlyReportLogs();
          };
          var B = x, H = 5242880, j = 5242880, F = { size: 0 }, W = 15e3, K = 15e3, q = 3e5, z = 1e4, V = 1e4, J = 3e5, X = [d.MAX_LIMIT, d.WEBIM_TOKEN_EXPIRED, d.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, d.USER_NOT_FOUND, d.WEBIM_CONNCTION_AUTH_ERROR, d.REQUEST_PARAMETER_ERROR, d.WEBIM_CONNCTION_AUTH_ERROR, d.WEBIM_SERVER_SERVING_DISABLED], Y = function() {
            return Y = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, Y.apply(this, arguments);
          };
          function Q() {
            var e3 = this.context, t3 = e3.orgName, r2 = e3.appName, o2 = e3.accessToken, n2 = { url: "".concat(this.apiUrl, "/").concat(t3, "/").concat(r2, "/sdk/chatfiles/part-upload"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + o2 } };
            return B.debug("Call multipartInit"), se.call(this, n2, E.SDK_INTERNAL).then(function(e4) {
              var t4 = e4.entities[0];
              return { data: { fileMaxSize: t4.file_upper_limit, partMinSize: t4.part_lower_limit, uuid: t4.uuid }, extraInfo: e4.extraInfo, type: e4.type };
            });
          }
          function Z(e3) {
            var t3 = this;
            return new Promise(function(r2, o2) {
              var n2, i2, a2 = (/* @__PURE__ */ new Date()).getTime(), s2 = t3.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p2 = e3.uuid, h2 = e3.partNumber, f2 = e3.part, m2 = e3.onProgress, g2 = "".concat(t3.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/chatfiles/part-upload/").concat(p2), E2 = new XMLHttpRequest();
              B.debug("Call multipartUpload"), E2.upload && (null === (i2 = (n2 = E2.upload).addEventListener) || void 0 === i2 || i2.call(n2, "progress", function(e4) {
                null == m2 || m2(e4);
              }, false)), E2.addEventListener("abort", function() {
                o2({ type: d.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: E2, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, errDesc: "Request Abort", url: g2 } });
              }, false), E2.addEventListener("error", function() {
                o2({ type: d.WEBIM_UPLOADFILE_ERROR, data: E2, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, errDesc: "request error", url: g2 } });
              }, false), E2.addEventListener("load", function() {
                try {
                  var e4 = JSON.parse(E2.responseText);
                  if (200 !== E2.status)
                    return o2({ type: d.WEBIM_UPLOADFILE_ERROR, data: e4, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, errDesc: "part upload failed", url: g2 } }), false;
                  try {
                    r2(Y(Y({}, e4), { extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, url: g2 } }));
                  } catch (e5) {
                    o2({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: e5, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, errDesc: "part upload failed", url: g2 } });
                  }
                } catch (e5) {
                  o2({ type: d.WEBIM_UPLOADFILE_ERROR, data: E2.responseText, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, errDesc: "part upload failed", url: g2 } });
                }
              }, false), E2.addEventListener("timeout", function() {
                o2({ type: d.REQUEST_TIMEOUT, message: "request timeout", extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E2.status || -1, errDesc: "request timeout", url: g2 } });
              }, false);
              var y2 = new FormData();
              y2.append("part_file", f2), y2.append("part_number", h2), E2.timeout = q, E2.open("PUT", g2), E2.setRequestHeader("restrict-access", "true"), E2.setRequestHeader("Accept", "*/*"), E2.setRequestHeader("Authorization", "Bearer " + l2), E2.send(y2);
            });
          }
          function $2(e3) {
            var t3 = e3.uuid, r2 = e3.thumbnailHeight, o2 = e3.thumbnailWidth, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/sdk/chatfiles/part-upload/").concat(t3, "?restrict-access=true");
            o2 && (c2 += "&thumbnail-width=".concat(o2)), r2 && (c2 += "&thumbnail-height=".concat(r2));
            var u2 = { url: c2, dataType: "json", type: "POST", headers: { Authorization: "Bearer " + s2 } };
            return B.debug("Call multipartComplete"), se.call(this, u2, E.SDK_INTERNAL);
          }
          function ee(e3) {
            var t3 = e3.uuid, r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/sdk/chatfiles/part-upload/").concat(t3), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2 } };
            return B.debug("Call multipartAbort"), se.call(this, a2, E.SDK_INTERNAL);
          }
          var te = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, re = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, oe = function() {
            function e3(e4, t3) {
              var r2 = this;
              this.handleUploadProgress = function(e5, t4) {
                var o2, n2;
                if (e5.total) {
                  r2.progressArr[t4] = e5.loaded;
                  var i2 = r2.progressArr.reduce(function(e6, t5) {
                    return e6 + t5;
                  }, 0);
                  null === (n2 = (o2 = r2.options).onFileUploadProgress) || void 0 === n2 || n2.call(o2, { isTrusted: e5.isTrusted, type: e5.type, loaded: i2 > r2.file.size ? r2.file.size : i2, total: r2.file.size, lengthComputable: e5.lengthComputable });
                }
              }, this.uuid = "", this.pool = [], this.progressArr = [], this.connection = e4, this.options = t3, this.partSize = H, this.file = t3.file, this.init(), this.rpt = this.connection.dataReport.geOperateFun({ operationName: E.REST_UPLOAD_FILE_IN_PARTS });
            }
            return e3.prototype.init = function() {
              var e4, t3, r2, o2;
              return te(this, void 0, void 0, function() {
                var n2, i2, a2, s2, c2, u2, l2, p2, h2, f2, m2, g2, E2, v2, T2;
                return re(this, function(_2) {
                  switch (_2.label) {
                    case 0:
                      return _2.trys.push([0, 4, , 6]), [4, Q.call(this.connection)];
                    case 1:
                      return n2 = _2.sent(), i2 = n2.data || {}, a2 = i2.fileMaxSize, s2 = void 0 === a2 ? 0 : a2, c2 = i2.partMinSize, u2 = void 0 === c2 ? H : c2, l2 = i2.uuid, p2 = void 0 === l2 ? "" : l2, h2 = n2.extraInfo, g2 = h2.elapse, E2 = h2.httpCode, T2 = h2.url, this.partSize = u2, this.uuid = p2, F.size = u2, B.debug("multipartInit success", "uuid: ".concat(p2), "fileMaxSize: ".concat(s2), "partMinSize: ".concat(u2)), this.file.size > s2 ? [4, this.multipartAbort()] : [3, 3];
                    case 2:
                      return _2.sent(), null === (t3 = (e4 = this.options).onFileUploadError) || void 0 === t3 || t3.call(e4, { code: d.WEBIM_UPLOADFILE_ERROR, message: "The file size exceeds the maximum limit" }), [2];
                    case 3:
                      return this.rpt({ data: { requestUrl: T2, requestName: y.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: g2, requestMethod: "POST", isSuccess: 1, code: E2 } }), this.upload(), [3, 6];
                    case 4:
                      return f2 = _2.sent(), m2 = (null == f2 ? void 0 : f2.extraInfo) || {}, g2 = m2.elapse, E2 = m2.httpCode, v2 = m2.errDesc, T2 = m2.url, this.rpt({ data: { requestUrl: T2, requestName: y.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: g2, requestMethod: "POST", isSuccess: 0, codeDesc: v2, code: E2 } }), [4, this.multipartAbort()];
                    case 5:
                      return _2.sent(), null === (o2 = null === (r2 = this.options) || void 0 === r2 ? void 0 : r2.onInitFail) || void 0 === o2 || o2.call(r2), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }, e3.prototype.upload = function() {
              var e4, t3, r2;
              return te(this, void 0, void 0, function() {
                var o2, n2, i2, a2, s2, c2, u2 = this;
                return re(this, function(l2) {
                  switch (l2.label) {
                    case 0:
                      new FileReader().readAsArrayBuffer(this.file), o2 = this.file.size, n2 = Math.ceil(o2 / this.partSize), l2.label = 1;
                    case 1:
                      l2.trys.push([1, 7, , 9]), i2 = function(t4) {
                        var r3, n3, i3, s3;
                        return re(this, function(c3) {
                          switch (c3.label) {
                            case 0:
                              return r3 = t4 * a2.partSize, n3 = Math.min(o2, r3 + a2.partSize), i3 = null === (e4 = a2.file) || void 0 === e4 ? void 0 : e4.slice(r3, n3), (s3 = Z.call(a2.connection, { uuid: a2.uuid, partNumber: "".concat(t4 + 1), part: i3, onProgress: function(e5) {
                                u2.handleUploadProgress(e5, t4);
                              } })).then(function(e5) {
                                var t5 = (null == e5 ? void 0 : e5.extraInfo) || {}, r4 = t5.elapse, o3 = t5.httpCode, n4 = t5.url;
                                u2.rpt({ data: { requestUrl: n4, requestName: y.REST_UPLOAD_PART, requestElapse: r4, isSuccess: 1, requestMethod: "PUT", code: o3 } }), u2.handleTask(s3);
                              }), s3.catch(function(e5) {
                                var t5 = (null == e5 ? void 0 : e5.extraInfo) || {}, r4 = t5.elapse, o3 = t5.httpCode, n4 = t5.url, i4 = t5.errDesc;
                                u2.rpt({ data: { requestUrl: n4, requestName: y.REST_UPLOAD_PART, requestElapse: r4, isSuccess: 0, requestMethod: "PUT", code: o3, codeDesc: i4 } }), delete e5.extraInfo;
                              }), a2.pool.push(s3), 4 !== a2.pool.length ? [3, 2] : [4, Promise.race(a2.pool)];
                            case 1:
                              c3.sent(), c3.label = 2;
                            case 2:
                              return [2];
                          }
                        });
                      }, a2 = this, s2 = 0, l2.label = 2;
                    case 2:
                      return s2 < n2 ? [5, i2(s2)] : [3, 5];
                    case 3:
                      l2.sent(), l2.label = 4;
                    case 4:
                      return s2++, [3, 2];
                    case 5:
                      return [4, Promise.all(this.pool)];
                    case 6:
                      return l2.sent(), this.multipartComplete(), [3, 9];
                    case 7:
                      return c2 = l2.sent(), [4, this.multipartAbort()];
                    case 8:
                      return l2.sent(), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), null === (r2 = (t3 = this.options).onFileUploadError) || void 0 === r2 || r2.call(t3, c2), [3, 9];
                    case 9:
                      return [2];
                  }
                });
              });
            }, e3.prototype.multipartComplete = function() {
              var e4, t3, r2, o2;
              return te(this, void 0, void 0, function() {
                var n2, i2, a2, s2, c2, u2, l2, d2, p2, h2, f2;
                return re(this, function(m2) {
                  switch (m2.label) {
                    case 0:
                      return m2.trys.push([0, 2, , 3]), n2 = this.options.thumbnailInfo || {}, i2 = n2.width, a2 = n2.height, [4, $2.call(this.connection, { uuid: this.uuid, thumbnailHeight: a2, thumbnailWidth: i2 })];
                    case 1:
                      return s2 = m2.sent(), c2 = (null == s2 ? void 0 : s2.extraInfo) || {}, d2 = c2.elapse, p2 = c2.httpCode, f2 = c2.url, this.rpt({ data: { requestUrl: f2, requestName: y.REST_COMPLETE_UPLOAD_PART, requestElapse: d2, requestMethod: "POST", isSuccess: 1, code: p2 } }), this.rpt({ data: { isLastApi: 1, isSuccess: 1 } }), null === (t3 = (e4 = this.options).onFileUploadComplete) || void 0 === t3 || t3.call(e4, s2), [3, 3];
                    case 2:
                      return u2 = m2.sent(), l2 = (null == u2 ? void 0 : u2.extraInfo) || {}, d2 = l2.elapse, p2 = l2.httpCode, h2 = l2.errDesc, f2 = l2.url, this.rpt({ data: { requestUrl: f2, requestName: y.REST_COMPLETE_UPLOAD_PART, requestElapse: d2, requestMethod: "POST", isSuccess: 0, codeDesc: h2, code: p2 } }), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), null === (o2 = (r2 = this.options).onFileUploadError) || void 0 === o2 || o2.call(r2, u2), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            }, e3.prototype.multipartAbort = function() {
              return te(this, void 0, void 0, function() {
                var e4, t3, r2, o2, n2, i2, a2, s2;
                return re(this, function(c2) {
                  switch (c2.label) {
                    case 0:
                      if (!this.uuid)
                        return [2];
                      c2.label = 1;
                    case 1:
                      return c2.trys.push([1, 3, , 4]), [4, ee.call(this.connection, { uuid: this.uuid })];
                    case 2:
                      return e4 = c2.sent(), t3 = (null == e4 ? void 0 : e4.extraInfo) || {}, n2 = t3.elapse, i2 = t3.httpCode, s2 = t3.url, this.rpt({ data: { requestUrl: s2, requestName: y.REST_ABORT_UPLOAD_PART, requestElapse: n2, requestMethod: "DELETE", isSuccess: 1, code: i2 } }), [3, 4];
                    case 3:
                      return r2 = c2.sent(), o2 = (null == r2 ? void 0 : r2.extraInfo) || {}, n2 = o2.elapse, i2 = o2.httpCode, a2 = o2.errDesc, s2 = o2.url, this.rpt({ data: { requestUrl: s2, requestName: y.REST_ABORT_UPLOAD_PART, requestElapse: n2, requestMethod: "DELETE", isSuccess: 0, codeDesc: a2, code: i2 } }), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            }, e3.prototype.handleTask = function(e4) {
              var t3 = this.pool.findIndex(function(t4) {
                return t4 === e4;
              });
              this.pool.splice(t3, 1);
            }, e3;
          }(), ne = function(e3) {
            var t3, r2, o2 = this, n2 = (/* @__PURE__ */ new Date()).getTime(), i2 = e3.apiUrl, a2 = e3.orgName, s2 = e3.appName, c2 = e3.operateName, u2 = e3.accessToken, l2 = e3.uploadUrl || "".concat(i2, "/").concat(a2, "/").concat(s2, "/chatfiles"), p2 = function(t4) {
              var r3 = (/* @__PURE__ */ new Date()).getTime() - n2;
              o2.dataReport && c2 && [E.UPLOAD_MSG_ATTACH, E.UPLOAD_CHATROOM_FILE, E.UPLOAD_GROUP_FILE].includes(c2) && o2.dataReport.geOperateFun({ operationName: c2 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: c2, requestElapse: r3, requestUrl: l2, code: (null == f2 ? void 0 : f2.status) || 0, codeDesc: "upload file error" } }), e3.onFileUploadError && e3.onFileUploadError(t4);
            };
            function h2(e4) {
              p2({ type: d.WEBIM_UPLOADFILE_ERROR, data: f2 });
            }
            var f2 = new XMLHttpRequest();
            f2.upload && (null === (r2 = (t3 = f2.upload).addEventListener) || void 0 === r2 || r2.call(t3, "progress", e3.onFileUploadProgress || ae, false)), f2.addEventListener("abort", e3.onFileUploadCanceled || ae, false), f2.addEventListener("error", h2, false), f2.addEventListener("load", function(t4) {
              try {
                var r3 = JSON.parse(f2.responseText);
                if (400 === f2.status)
                  return p2({ type: d.WEBIM_UPLOADFILE_ERROR, data: r3 }), false;
                try {
                  !function(t5) {
                    var r4 = (/* @__PURE__ */ new Date()).getTime() - n2;
                    o2.dataReport && c2 && [E.UPLOAD_MSG_ATTACH, E.UPLOAD_CHATROOM_FILE, E.UPLOAD_GROUP_FILE].includes(c2) && o2.dataReport.geOperateFun({ operationName: c2 })({ isEndApi: true, data: { isSuccess: (null == t5 ? void 0 : t5.error) ? 0 : 1, requestMethod: "POST", requestName: c2, requestElapse: r4, requestUrl: l2, code: f2.status, codeDesc: (null == t5 ? void 0 : t5.error_description) || "" } }), e3.onFileUploadComplete && e3.onFileUploadComplete(t5);
                  }(r3);
                } catch (t5) {
                  p2({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: t5 });
                }
              } catch (t5) {
                p2({ type: d.WEBIM_UPLOADFILE_ERROR, data: f2.responseText });
              }
            }, false), f2.addEventListener("timeout", h2, false), f2.timeout = q, f2.open("POST", l2), f2.setRequestHeader("restrict-access", "true"), f2.setRequestHeader("Accept", "*/*"), f2.setRequestHeader("Authorization", "Bearer " + u2);
            var m2 = new FormData();
            m2.append("file", e3.file.data), e3.thumbnailWidth && m2.append("thumbnail-width", e3.thumbnailWidth + ""), e3.thumbnailHeight && m2.append("thumbnail-height", e3.thumbnailHeight + ""), f2.send(m2);
          }, ie = function() {
            return ie = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, ie.apply(this, arguments);
          }, ae = function() {
          };
          function se(e3, t3) {
            var r2, o2 = this;
            return fe().platform === de.WEB ? new Promise(function(t4, o3) {
              var n2 = e3.dataType || "text", i2 = e3.success || ae, a2 = e3.error || ae, s2 = new XMLHttpRequest();
              s2.timeout = K;
              var c2 = false;
              s2.ontimeout = function() {
                B.warn("request timeout"), c2 = true;
                var e4 = { type: d.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: s2 };
                a2(e4), o3(e4);
              }, s2.onerror = function() {
                o3({ type: d.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: s2 });
              }, s2.onabort = function() {
                o3({ type: d.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: s2 });
              }, s2.onreadystatechange = function() {
                if (4 === s2.readyState) {
                  var e4 = (/* @__PURE__ */ new Date()).getTime() - r2, u3 = s2.status || 0, l3 = { elapse: e4, httpCode: u3 };
                  if (200 === u3) {
                    _e.ajaxUnconventionalErrorTimes = 0;
                    try {
                      switch (n2) {
                        case "text":
                          return i2(s2.responseText), void t4(s2.responseText);
                        case "json":
                          var p3 = JSON.parse(s2.responseText);
                          return p3.extraInfo = l3, i2(p3), void t4(p3);
                        case "xml":
                          return s2.responseXML && s2.responseXML.documentElement ? (i2(s2.responseXML.documentElement), void t4(s2.responseXML.documentElement)) : (a2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void o3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                        default:
                          a2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Invalid dataType" }), o3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Invalid dataType" });
                      }
                      return t4(s2.response || s2.responseText), void i2(s2.response || s2.responseText, s2);
                    } catch (e5) {
                      o3(e5);
                    }
                    return;
                  }
                  0 === u3 ? setTimeout(function() {
                    B.debug("request timeout:", c2), !c2 && O(s2, o3, a2, e4);
                  }, 0) : ([400, 401, 403, 404, 429, 500, 503].includes(u3) || (B.debug("rest api request fail status:", u3), _e.ajaxUnconventionalErrorTimes++), O(s2, o3, a2, e4));
                }
                0 === s2.readyState && (a2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Request not initialized" }), o3({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Request not initialized" }));
              }, e3.responseType && s2.responseType && (s2.responseType = e3.responseType), e3.mimeType && s2.overrideMimeType(e3.mimeType);
              var u2 = e3.type || "POST", l2 = e3.data || null, p2 = "";
              if ("get" === u2.toLowerCase() && l2) {
                for (var h2 in l2)
                  l2.hasOwnProperty(h2) && (p2 += h2 + "=" + l2[h2] + "&");
                p2 = p2 ? p2.slice(0, -1) : p2, e3.url += (e3.url.indexOf("?") > 0 ? "&" : "?") + (p2 ? p2 + "&" : p2) + "_v=" + (/* @__PURE__ */ new Date()).getTime(), l2 = null, p2 = "";
              }
              r2 = (/* @__PURE__ */ new Date()).getTime(), s2.open(u2, e3.url);
              var f2 = e3.headers || {};
              for (var m2 in f2["Content-Type"] || (f2["Content-Type"] = "application/json"), f2)
                f2.hasOwnProperty(m2) && s2.setRequestHeader(m2, f2[m2]);
              s2.send(l2);
            }).then(function(r3) {
              return o2.dataReport && t3 && t3 !== E.SDK_INTERNAL && o2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: ie({ isSuccess: 1, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, ye(r3.extraInfo)) }), t3 === E.SDK_INTERNAL && (r3.extraInfo.url = e3.url), t3 !== E.SDK_INTERNAL && delete r3.extraInfo, "Object" === ce(r3) ? ie(ie({}, r3), { type: d.REQUEST_SUCCESS }) : { data: r3, type: d.REQUEST_SUCCESS };
            }).catch(function(n2) {
              var i2, a2;
              if (o2.dataReport && t3 && t3 !== E.SDK_INTERNAL && o2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: ie({ isSuccess: 0, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, ye(n2.extraInfo)) }), t3 === E.SDK_INTERNAL)
                if (n2.extraInfo)
                  n2.extraInfo.url = e3.url;
                else {
                  var s2 = { elapse: (/* @__PURE__ */ new Date()).getTime() - r2, httpCode: null !== (a2 = null === (i2 = n2.xhr) || void 0 === i2 ? void 0 : i2.status) && void 0 !== a2 ? a2 : 0, url: e3.url };
                  n2.extraInfo = s2;
                }
              throw t3 !== E.SDK_INTERNAL && delete n2.extraInfo, n2;
            }) : ue.call(this, e3, t3);
          }
          function ce(e3) {
            return Object.prototype.toString.call(e3).slice(8, -1);
          }
          function ue(e3, t3) {
            var r2 = this;
            return new Promise(function(r3, o2) {
              var n2 = e3.success || ae, i2 = e3.error || ae, a2 = e3.type || "POST", s2 = e3.data || null, c2 = "", u2 = (/* @__PURE__ */ new Date()).getTime(), l2 = _e.getEnvInfo();
              if ("get" === a2.toLowerCase() && s2) {
                for (var p2 in s2)
                  s2.hasOwnProperty(p2) && (c2 += p2 + "=" + s2[p2] + "&");
                c2 = c2 ? c2.slice(0, -1) : c2, e3.url += (e3.url.indexOf("?") > 0 ? "&" : "?") + (c2 ? c2 + "&" : c2) + "_v=" + (/* @__PURE__ */ new Date()).getTime(), s2 = null, c2 = "";
              }
              var h2 = { url: e3.url, data: e3.data, method: a2, headers: {}, timeout: K, success: function(e4) {
                var a3, s3, c3, l3, d2, p3 = { elapse: (/* @__PURE__ */ new Date()).getTime() - u2, httpCode: Number((null === (a3 = e4.statusCode) || void 0 === a3 ? void 0 : a3.toString()) || (null === (s3 = e4.status) || void 0 === s3 ? void 0 : s3.toString())), errDesc: (null === (c3 = null == e4 ? void 0 : e4.data) || void 0 === c3 ? void 0 : c3.error_description) || "" };
                if ("200" === (null === (l3 = e4.statusCode) || void 0 === l3 ? void 0 : l3.toString()) || "200" === (null === (d2 = e4.status) || void 0 === d2 ? void 0 : d2.toString())) {
                  e4.data.extraInfo = p3;
                  var h3 = e4.data;
                  n2(h3), r3(h3);
                } else
                  e4.extraInfo = p3, i2(h3 = e4), o2(h3), B.debug(t3, "reject reason: ", h3);
              }, complete: function() {
              }, fail: function(e4) {
                var r4 = { elapse: (/* @__PURE__ */ new Date()).getTime() - u2, httpCode: A, errDesc: "request:fail" };
                if (e4.extraInfo = r4, e4.data = { error: "request:fail", error_description: "request:fail" }, "request:fail timeout" === e4.errMsg)
                  return o2({ type: d.REQUEST_TIMEOUT, message: "Request Timeout", extraInfo: r4 }), void i2({ type: d.REQUEST_TIMEOUT, message: "Request Timeout", extraInfo: r4 });
                i2(e4), o2(e4), B.error(t3, "fail reason:", e4);
              } };
              if ("zfb" === l2.platform || "dd" === l2.platform ? h2.headers = e3.headers : h2.header = e3.headers, "dd" === l2.platform)
                return dd.httpRequest(h2);
              l2.global.request(h2);
            }).then(function(o2) {
              return r2.dataReport && t3 && t3 !== E.SDK_INTERNAL && r2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: ie({ isSuccess: 1, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, ye(o2.extraInfo)) }), t3 !== E.SDK_INTERNAL && delete o2.extraInfo, "Object" === ce(o2) ? ie(ie({}, o2), { type: d.REQUEST_SUCCESS }) : { data: o2, type: d.REQUEST_SUCCESS };
            }).catch(function(o2) {
              throw r2.dataReport && t3 && t3 !== E.SDK_INTERNAL && r2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: ie({ isSuccess: 0, requestUrl: e3.url, requestName: t3, requestMethod: e3.type }, ye(o2.extraInfo)) }), t3 !== E.SDK_INTERNAL && delete o2.extraInfo, o2;
            });
          }
          function le(e3, t3) {
            var r2;
            return function() {
              for (var o2 = [], n2 = 0; n2 < arguments.length; n2++)
                o2[n2] = arguments[n2];
              if (!e3)
                return r2;
              r2 = t3 ? e3.apply(t3, o2) : e3.apply(void 0, o2), e3 = null;
            };
          }
          var de, pe = le(function(e3, t3) {
            var r2 = fe();
            if (r2.platform !== de.WEB) {
              var o2 = r2.global, n2 = function(r3) {
                r3.isConnected ? e3() : t3();
              };
              o2.offNetworkStatusChange && o2.offNetworkStatusChange(n2), o2.onNetworkStatusChange && o2.onNetworkStatusChange(n2);
            } else
              "undefined" != typeof addEventListener && (window.addEventListener("online", e3), window.addEventListener("offline", t3));
          }), he = le(function(e3, t3) {
            var r2, o2, n2 = fe();
            if (n2.platform === de.WEB)
              document && document.addEventListener("visibilitychange", function() {
                document.hidden ? null == t3 || t3() : null == e3 || e3();
              }, false);
            else {
              var i2 = n2.global;
              i2.onAppShow && (null === (r2 = i2.onAppShow) || void 0 === r2 || r2.call(i2, e3)), i2.onAppHide && (null === (o2 = i2.onAppHide) || void 0 === o2 || o2.call(i2, t3));
            }
          });
          function fe() {
            return "undefined" != typeof swan && me(swan) ? { platform: de.BAIDU, global: swan } : "undefined" != typeof tt && me(tt) ? { platform: de.TT, global: tt } : "undefined" != typeof dd && me(dd) ? { platform: de.DD, global: dd } : "undefined" != typeof my && me(my) ? { platform: de.ZFB, global: my } : "undefined" != typeof wx && me(wx) ? { platform: de.WX, global: wx } : "undefined" != typeof qq && me(qq) ? { platform: de.QQ, global: qq } : "undefined" != typeof uni && me(uni) ? { platform: de.UNI, global: uni } : "undefined" != typeof window && window.WebSocket ? { platform: de.WEB, global: window } : { platform: de.NODE, global: r.g || {} };
          }
          function me(e3) {
            for (var t3 = ["canIUse", "getSystemInfo"], r2 = 0, o2 = t3.length; r2 < o2; r2++)
              if (!e3[t3[r2]])
                return false;
            return true;
          }
          function ge(e3, t3) {
            var r2, o2, n2, i2 = this, a2 = e3.accessToken, s2 = e3.appKey, c2 = null === (o2 = null === (r2 = null == e3 ? void 0 : e3.file) || void 0 === r2 ? void 0 : r2.data) || void 0 === o2 ? void 0 : o2.size, u2 = [], l2 = "", p2 = "";
            if (a2)
              if (s2 && (u2 = s2.split("#"), l2 = u2[0], p2 = u2[1]), l2 || p2)
                if (c2 <= 0)
                  e3.onFileUploadError && e3.onFileUploadError({ type: d.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
                else if (e3.uploadUrl)
                  ne.call(this, ie(ie({}, e3), { orgName: l2, appName: p2, operateName: t3 }));
                else {
                  var h2 = F.size || j;
                  this.uploadPartEnable && c2 > 1.5 * h2 ? new oe(this, { file: null === (n2 = null == e3 ? void 0 : e3.file) || void 0 === n2 ? void 0 : n2.data, onFileUploadProgress: e3.onFileUploadProgress || ae, onFileUploadComplete: e3.onFileUploadComplete || ae, onFileUploadError: e3.onFileUploadError || ae, onFileUploadCanceled: e3.onFileUploadCanceled || ae, onInitFail: function() {
                    ne.call(i2, ie(ie({}, e3), { orgName: l2, appName: p2, operateName: t3 }));
                  }, thumbnailInfo: { width: e3.thumbnailWidth, height: e3.thumbnailHeight } }) : ne.call(this, ie(ie({}, e3), { orgName: l2, appName: p2, operateName: t3 }));
                }
              else
                e3.onFileUploadError && e3.onFileUploadError({ type: d.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
            else
              e3.onFileUploadError && e3.onFileUploadError({ type: d.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
          }
          function Ee(e3, t3) {
            e3.onFileDownloadComplete = e3.onFileDownloadComplete || ae, e3.onFileDownloadError = e3.onFileDownloadError || ae;
            var r2 = (/* @__PURE__ */ new Date()).getTime(), o2 = new XMLHttpRequest(), n2 = this;
            o2.addEventListener("load", function(i3) {
              var a3 = (/* @__PURE__ */ new Date()).getTime() - r2;
              n2.dataReport && t3 && t3 === E.DOWN_GROUP_FILE && n2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: 200 === o2.status ? 1 : 0, requestMethod: "POST", requestName: t3, requestElapse: a3, requestUrl: null == e3 ? void 0 : e3.url, code: o2.status, codeDesc: 200 === o2.status ? "" : "download file error" } }), e3.onFileDownloadComplete && e3.onFileDownloadComplete(o2.response);
            }, false), o2.addEventListener("error", function(i3) {
              var a3 = (/* @__PURE__ */ new Date()).getTime() - r2;
              n2.dataReport && t3 && t3 === E.DOWN_GROUP_FILE && n2.dataReport.geOperateFun({ operationName: t3 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: t3, requestElapse: a3, requestUrl: null == e3 ? void 0 : e3.url, code: (null == o2 ? void 0 : o2.status) || 0, codeDesc: "download file error" } }), e3.onFileDownloadError && e3.onFileDownloadError({ type: d.WEBIM_DOWNLOADFILE_ERROR, id: e3.id, xhr: o2 });
            }, false);
            var i2 = e3.method || "GET", a2 = e3.responseType || "blob", s2 = e3.mimeType || "text/plain; charset=x-user-defined";
            o2.open(i2, e3.url), "undefined" != typeof Blob ? o2.responseType = a2 : o2.overrideMimeType(s2);
            var c2 = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": e3.secret, Authorization: "Bearer " + this.context.accessToken }, u2 = e3.headers || {};
            for (var l2 in u2)
              c2[l2] = u2[l2];
            for (var l2 in c2)
              c2[l2] && o2.setRequestHeader(l2, c2[l2]);
            o2.send(null);
          }
          function ye(e3) {
            void 0 === e3 && (e3 = {});
            var t3 = e3.elapse, r2 = void 0 === t3 ? 0 : t3, o2 = e3.httpCode, n2 = void 0 === o2 ? 0 : o2, i2 = e3.errDesc;
            return { requestElapse: r2, code: n2, codeDesc: void 0 === i2 ? "" : i2 };
          }
          !function(e3) {
            e3.WEB = "web", e3.WX = "wx", e3.QQ = "qq", e3.ZFB = "zfb", e3.DD = "dd", e3.TT = "tt", e3.BAIDU = "baidu", e3.QUICK_APP = "quick_app", e3.UNI = "uni", e3.NODE = "node";
          }(de || (de = {}));
          var ve, Te = "localDeviceInfo", _e = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: se, getUniqueId: function() {
            this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
            var e3 = /* @__PURE__ */ new Date(), t3 = new Date(2010, 1, 1);
            return (e3.getTime() - t3.getTime() + this.autoIncrement).toString();
          }, getFileUrl: function(e3) {
            var t3 = { url: "", filename: "", filetype: "", data: {} }, r2 = "string" == typeof e3 ? document.getElementById(e3) : e3;
            if (window.URL.createObjectURL) {
              if (!r2.files)
                throw Error("this is not HTMLInputElement");
              var o2 = r2.files;
              if (o2.length > 0) {
                var n2 = o2.item(0);
                t3.data = n2, t3.url = window.URL.createObjectURL(n2), t3.filename = (null == n2 ? void 0 : n2.name) || "";
              }
            } else {
              if ("string" != typeof e3)
                throw Error("in IE fileInputId must be string");
              n2 = document.getElementById(e3).value, t3.url = n2;
              var i2 = n2.lastIndexOf("/"), a2 = n2.lastIndexOf("\\"), s2 = Math.max(i2, a2);
              t3.filename = s2 < 0 ? n2 : n2.substring(s2 + 1);
            }
            var c2 = t3.filename.lastIndexOf(".");
            return -1 !== c2 && (t3.filetype = t3.filename.substring(c2 + 1).toLowerCase()), t3;
          }, uploadFile: ge, flow: function(e3) {
            for (var t3 = e3.length, r2 = t3; r2--; )
              if ("function" != typeof e3[r2])
                throw new TypeError("Expected a function");
            return function() {
              for (var r3 = [], o2 = 0; o2 < arguments.length; o2++)
                r3[o2] = arguments[o2];
              for (var n2 = 0, i2 = t3 ? e3[n2].apply(this, r3) : r3[0]; ++n2 < t3; )
                i2 = e3[n2].call(this, i2);
              return i2;
            };
          }, listenNetwork: pe, listenBrowserVisibility: he, getEnvInfo: fe, wxRequest: ue, parseDownloadResponse: function(e3) {
            if (!window || !window.URL)
              throw Error("parseDownloadResponse can be used in broswer only");
            return e3 && e3.type && "application/json" === e3.type || 0 > Object.prototype.toString.call(e3).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e3);
          }, download: Ee, parseNotify: function(e3) {
            for (var t3 = "", r2 = 0; r2 < e3.length; r2++)
              t3 += "%" + e3[r2].toString(16);
            return JSON.parse(decodeURIComponent(t3));
          }, getExtraData: ye, retryPromise: function(e3, t3, r2) {
            return new Promise(function(o2, n2) {
              var i2 = function(t4) {
                e3().then(o2).catch(function(e4) {
                  t4 > 0 ? setTimeout(function() {
                    i2(t4 - 1);
                  }, r2 || 1e3) : n2(e4);
                });
              };
              i2(t3 || 3);
            });
          }, formatAttachUrl: function(e3) {
            return e3 && "string" == typeof e3 ? "".concat(this.apiUrl).concat(e3.substr(e3.indexOf("/", 9))) : "";
          }, Uint8ArrayToString: function(e3) {
            for (var t3 = "", r2 = 0; r2 < e3.length; r2++)
              t3 += String.fromCharCode(e3[r2]);
            return t3;
          }, getLocalDeviceInfo: function() {
            return function(e3) {
              var t3, r2 = _e.getEnvInfo(), o2 = r2.platform, n2 = "";
              o2 !== de.NODE && o2 !== de.QUICK_APP || (n2 = "");
              try {
                o2 === de.WEB ? n2 = localStorage.getItem(e3) || "" : o2 === de.WX || o2 === de.QQ || o2 === de.TT || o2 === de.BAIDU || o2 === de.UNI ? n2 = r2.global.getStorageSync(e3) || "" : o2 !== de.ZFB && o2 !== de.DD || (n2 = (null === (t3 = r2.global.getStorageSync({ key: e3 })) || void 0 === t3 ? void 0 : t3.data) || "");
              } catch (t4) {
                B.debug("get local ".concat(e3, " failed: "), t4);
              }
              return B.debug("".concat(e3, " "), n2), n2;
            }(Te);
          }, setLocalDeviceInfo: function(e3) {
            var t3, r2, o2, n2;
            t3 = Te, r2 = e3, (n2 = (o2 = _e.getEnvInfo()).platform) !== de.NODE && n2 !== de.QUICK_APP && (n2 === de.WEB ? localStorage.setItem(t3, r2) : o2.global.setStorage({ key: t3, data: r2, success: function(e4) {
              B.debug("set local ".concat(t3, " success: "), e4);
            }, fail: function(e4) {
              B.error("set local ".concat(t3, " failed: "), e4);
            } }));
          }, detectBrowser: function() {
            if ("undefined" == typeof navigator)
              return "unknown";
            var e3 = navigator.userAgent;
            return /MicroMessenger/i.test(e3) ? "WeChat" : /QQBrowser/i.test(e3) ? "QQ" : !/Chrome/i.test(e3) || /Edg/i.test(e3) || /OPR/i.test(e3) ? !/Safari/i.test(e3) || /Chrome/i.test(e3) || /CriOS/i.test(e3) ? /Firefox/i.test(e3) ? "Firefox" : /MSIE/i.test(e3) || /Trident/i.test(e3) ? "IE" : /Edg/i.test(e3) ? "Edge" : "unknown" : "Safari" : "Chrome";
          }, getDevicePlatform: function(e3) {
            return e3.platform === de.WX && "undefined" != typeof uni && me(uni) ? de.UNI : e3.platform;
          }, delay: function(e3) {
            return new Promise(function(t3) {
              return setTimeout(t3, e3);
            });
          } };
          !function(e3) {
            e3[e3.SYNC_INIT = 0] = "SYNC_INIT", e3[e3.SYNC_START = 1] = "SYNC_START", e3[e3.SYNC_FINISH = 2] = "SYNC_FINISH";
          }(ve || (ve = {}));
          var Re = r(188), Oe = r.n(Re), Ie = function() {
            return Ie = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, Ie.apply(this, arguments);
          }, Se = { chat: "singleChat", chatroom: "chatRoom", groupchat: "groupChat", singleChat: "singleChat", chatRoom: "chatRoom", groupChat: "groupChat" };
          function Ce(e3, t3) {
            var r2, o2, n2, i2 = t3 || {}, a2 = i2.formatCustomExts, s2 = void 0 === a2 || a2, c2 = i2.formatChatType, u2 = void 0 !== c2 && c2, l2 = e3.id, d2 = e3.payload, p2 = e3.timestamp, h2 = e3.to, f2 = d2.bodies && d2.bodies.length > 0 ? d2.bodies[0] : {}, m2 = {}, g2 = {}, E2 = d2.type ? d2.type : h2.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
            E2 = "chat" === E2 ? "singleChat" : E2, u2 && d2.type && (E2 = Se[d2.type]);
            var y2 = "";
            switch (f2.type) {
              case "txt":
                if (Object.prototype.hasOwnProperty.call(f2, "subType") && "sub_combine" === f2.subType)
                  y2 = Xe.call(this, { remotePath: null == f2 ? void 0 : f2.url, secret: null == f2 ? void 0 : f2.secret }), m2 = { id: l2, type: "combine", chatType: E2, to: d2.to, from: d2.from, ext: d2.ext, time: p2, title: f2.title || "", summary: f2.summary || "", url: y2 || "", secret: f2.secret || "", file_length: f2.file_length || 0, filename: f2.filename || "", compatibleText: f2.msg, combineLevel: f2.combineLevel || 0 };
                else {
                  var v2 = null === (r2 = null == d2 ? void 0 : d2.meta) || void 0 === r2 ? void 0 : r2.edit_msg;
                  if (m2 = { id: l2, type: "txt", chatType: E2, msg: f2.msg || "", to: d2.to || "", from: d2.from, time: p2, ext: d2.ext }, v2) {
                    var T2 = v2.edit_time, _2 = v2.operator, R2 = v2.count;
                    m2.modifiedInfo = { operationTime: T2, operatorId: _2, operationCount: R2 };
                  }
                }
                break;
              case "img":
                y2 = this.useOwnUploadFun ? null == f2 ? void 0 : f2.url : Xe.call(this, { remotePath: null == f2 ? void 0 : f2.url, secret: null == f2 ? void 0 : f2.secret }), m2 = { id: l2, type: "img", chatType: E2, to: d2.to, from: d2.from, time: p2, ext: d2.ext, width: (null === (o2 = f2.size) || void 0 === o2 ? void 0 : o2.width) || 0, height: (null === (n2 = f2.size) || void 0 === n2 ? void 0 : n2.height) || 0, thumb: this.useOwnUploadFun ? "" : "".concat(y2, "&thumbnail=true"), thumb_secret: f2.secret, secret: f2.secret || "", url: y2 || "", file_length: f2.file_length || 0, file: {} };
                break;
              case "video":
                y2 = this.useOwnUploadFun ? null == f2 ? void 0 : f2.url : Xe.call(this, { remotePath: null == f2 ? void 0 : f2.url, secret: null == f2 ? void 0 : f2.secret }), m2 = { id: l2, type: "video", chatType: E2, from: d2.from, to: d2.to, thumb: _e.formatAttachUrl.call(this, f2.thumb), thumb_secret: f2.thumb_secret || "", url: y2 || "", secret: f2.secret || "", filename: f2.filename, length: f2.length || 0, file: {}, file_length: f2.file_length || 0, filetype: d2.ext.file_type || "", ext: d2.ext, time: p2 };
                break;
              case "loc":
                m2 = { id: l2, type: "loc", chatType: E2, from: d2.from, to: d2.to, buildingName: f2.buildingName || "", addr: f2.addr, lat: f2.lat, lng: f2.lng, ext: d2.ext, time: p2 };
                break;
              case "audio":
                y2 = this.useOwnUploadFun ? null == f2 ? void 0 : f2.url : Xe.call(this, { remotePath: null == f2 ? void 0 : f2.url, secret: null == f2 ? void 0 : f2.secret }), m2 = { id: l2, type: "audio", chatType: E2, from: d2.from, to: d2.to, secret: f2.secret || "", ext: d2.ext, time: p2, url: y2 || "", file: {}, filename: f2.filename, length: f2.length || 0, file_length: f2.file_length || 0, filetype: d2.ext.file_type || "" };
                break;
              case "file":
                y2 = this.useOwnUploadFun ? null == f2 ? void 0 : f2.url : Xe.call(this, { remotePath: null == f2 ? void 0 : f2.url, secret: null == f2 ? void 0 : f2.secret }), m2 = { id: l2, type: "file", chatType: E2, from: d2.from, to: d2.to, ext: d2.ext, time: p2, url: y2 || "", secret: f2.secret || "", file: {}, filename: f2.filename || "", file_length: f2.file_length || 0, filetype: d2.ext.file_type || "" };
                break;
              case "cmd":
                m2 = { id: l2, type: "cmd", chatType: E2, from: d2.from, to: d2.to, ext: d2.ext, time: p2, action: f2.action || "" };
                break;
              case "custom":
                var O2 = f2.customExts || {};
                s2 && f2.customExts && (O2 = {}, f2.customExts.map(function(e4) {
                  O2 = Ie(Ie({}, O2), e4);
                })), m2 = { id: l2, type: "custom", chatType: E2, from: d2.from, to: d2.to, ext: d2.ext, time: p2, customEvent: f2.customEvent || "", customExts: O2 };
                break;
              case "combine":
                y2 = Xe.call(this, { remotePath: null == f2 ? void 0 : f2.url, secret: null == f2 ? void 0 : f2.secret }), m2 = { id: l2, type: "combine", chatType: E2, msg: f2.msg || "", to: d2.to || "", from: d2.from, time: p2, ext: d2.ext, title: f2.title || "", summary: f2.summary || "", url: y2 || "", compatibleText: f2.text, combineLevel: f2.combineLevel || 0, secret: f2.secret || "", filename: f2.filename || "", file_length: f2.file_length || 0 };
                break;
              default:
                B.error("unexpected message: ".concat(e3));
            }
            if (d2.msgConfig && (g2.msgConfig = d2.msgConfig), null == d2 ? void 0 : d2.meta) {
              var I2 = d2.meta;
              I2.thread && (g2.chatThread = { messageId: I2.thread.msg_parent_id, parentId: I2.thread.muc_parent_id, chatThreadName: I2.thread.thread_name }), I2.reaction && (g2.reactions = I2.reaction), I2.translations && (g2.translations = I2.translations);
            }
            return Ie(Ie({}, m2), g2);
          }
          var Ne, Ae = function(e3) {
            return "".concat(e3.conversationType, "-").concat(e3.conversationId);
          }, Me = function(e3) {
            var t3 = e3.isRecallSelfMsg, r2 = e3.conversation, o2 = e3.recalledMsgTime, n2 = r2.unReadCount, i2 = void 0 === n2 ? 0 : n2, a2 = r2.unreadCountClearTimestamp;
            return t3 || (void 0 === a2 ? 0 : a2) > o2 ? i2 : i2 && i2 > 0 ? i2 - 1 : 0;
          }, be = function(e3) {
            var t3, r2 = 0;
            if (0 === e3.length)
              return r2;
            for (t3 = 0; t3 < e3.length; t3++)
              r2 = (r2 << 5) - r2 + e3.charCodeAt(t3), r2 |= 0;
            return r2;
          }, Ue = function() {
            function e3(e4) {
              var t3 = e4.id;
              this.id = t3, this.type = e4.type;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, ackId: e4.id, type: "read", to: e4.to, from: e4.from || "", chatType: e4.chatType };
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType, ackId: e4.id, type: "read", to: e4.to, from: e4.from || "", ackContent: e4.ackContent, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly };
            }, e3;
          }(), Pe = function() {
            function e3(e4) {
              this.id = e4.id, this.type = e4.type;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, ackId: e4.ackId, type: "delivery", to: e4.to, from: e4.from || "" };
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), ackId: e4.ackId, type: "delivery", to: e4.to, from: e4.from || "", isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly };
            }, e3;
          }(), we = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id;
              this.id = r2, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "channel", to: e4.to, from: e4.from || "", time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), type: "channel", chatType: e4.chatType || "singleChat", to: e4.to, from: e4.from || "", time: Date.now(), isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly };
            }, e3;
          }(), ke = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id || _e.getUniqueId();
              this.id = r2, this.type = t3, this.value = "";
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "txt", to: e4.to, msg: e4.msg, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), isChatThread: e4.isChatThread }, this.value = e4.msg;
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              var t3, r2;
              return (null === (t3 = e4.msgConfig) || void 0 === t3 ? void 0 : t3.languages) && Array.isArray(null === (r2 = e4.msgConfig) || void 0 === r2 ? void 0 : r2.languages), { type: "txt", id: _e.getUniqueId(), msg: e4.msg, to: e4.to, from: e4.from || "", chatType: e4.chatType, ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), Le = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id;
              this.id = r2 || _e.getUniqueId(), this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "cmd", to: e4.to, action: e4.action, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), type: "cmd", to: e4.to, from: e4.from || "", chatType: e4.chatType || "singleChat", action: e4.action, time: Date.now(), ext: e4.ext, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), De = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id || _e.getUniqueId();
              this.id = r2, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "custom", to: e4.to, customEvent: e4.customEvent, customExts: e4.customExts, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType || "singleChat", type: "custom", to: e4.to, customEvent: e4.customEvent, customExts: e4.customExts, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), xe = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id;
              this.id = r2 || _e.getUniqueId(), this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "loc", to: e4.to, addr: e4.addr, buildingName: e4.buildingName, lat: e4.lat, lng: e4.lng, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now() };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType || "singleChat", type: "loc", to: e4.to, addr: e4.addr, buildingName: e4.buildingName, lat: e4.lat, lng: e4.lng, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), Ge = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id || _e.getUniqueId();
              this.id = r2, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && _e.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "img", file: e4.file, width: e4.width, height: e4.height, to: e4.to, from: e4.from || "", roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType, type: "img", url: e4.url, width: e4.width, height: e4.height, file: e4.file, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, file_length: e4.file_length, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList, thumbnailWidth: e4.thumbnailWidth, thumbnailHeight: e4.thumbnailHeight };
            }, e3;
          }(), Be = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id || _e.getUniqueId();
              this.id = r2, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && _e.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "audio", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType, type: "audio", filename: e4.filename, length: e4.length, file: e4.file, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, file_length: e4.file_length, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), He = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id;
              this.id = r2, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && _e.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "video", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), apiUrl: e4.apiUrl, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType || "singleChat", type: "video", file: e4.file, filename: e4.filename, length: e4.length, file_length: e4.file_length, fileInputId: e4.fileInputId, to: e4.to, from: e4.from || "", ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), je = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id;
              this.id = r2, this.type = t3;
            }
            return e3.prototype.set = function(e4) {
              e4.file = e4.file || e4.fileInputId && _e.getFileUrl(e4.fileInputId), this.body = { id: this.id, chatType: e4.chatType || "singleChat", type: "file", file: e4.file, filename: e4.filename, fileInputId: e4.fileInputId, to: e4.to, from: e4.from, roomType: e4.roomType, success: e4.success, fail: e4.fail, ext: e4.ext, time: Date.now(), onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, isChatThread: e4.isChatThread };
            }, e3.prototype.setChatType = function(e4) {
              return !!this.body && (this.body.chatType = e4, true);
            }, e3.prototype.setGroup = function(e4) {
              return !!this.body && (this.body.group = e4, true);
            }, e3.create = function(e4) {
              return { id: _e.getUniqueId(), chatType: e4.chatType || "singleChat", type: "file", file: e4.file, filename: e4.filename, fileInputId: e4.fileInputId, file_length: e4.file_length, to: e4.to, from: e4.from || "", ext: e4.ext, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadProgress: e4.onFileUploadProgress, body: e4.body, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList };
            }, e3;
          }(), Fe = function() {
            function e3(e4) {
              var t3 = e4.type, r2 = e4.id || _e.getUniqueId();
              this.id = r2, this.type = t3, this.value = "";
            }
            return e3.create = function(e4) {
              return { type: "combine", id: _e.getUniqueId(), to: e4.to, from: e4.from || "", chatType: e4.chatType, ext: e4.ext, time: Date.now(), msgConfig: e4.msgConfig, isChatThread: e4.isChatThread, priority: e4.priority, deliverOnlineOnly: e4.deliverOnlineOnly, receiverList: e4.receiverList, compatibleText: e4.compatibleText, title: e4.title, summary: e4.summary, messageList: e4.messageList, onFileUploadError: e4.onFileUploadError, onFileUploadComplete: e4.onFileUploadComplete };
            }, e3;
          }(), We = function() {
            function e3(t3, r2) {
              return this.type = t3, this.id = r2 || _e.getUniqueId(), e3.createOldMsg({ type: t3, id: this.id });
            }
            return e3.createOldMsg = function(e4) {
              switch (e4.type) {
                case "read":
                  return new Ue({ type: "read", id: e4.id });
                case "delivery":
                  return new Pe({ type: "delivery", id: e4.id });
                case "channel":
                  return new we({ type: "channel", id: e4.id });
                case "txt":
                  return new ke({ type: "txt", id: e4.id });
                case "cmd":
                  return new Le({ type: "cmd", id: e4.id });
                case "custom":
                  return new De({ type: "custom", id: e4.id });
                case "loc":
                  return new xe({ type: "loc", id: e4.id });
                case "img":
                  return new Ge({ type: "img", id: e4.id });
                case "audio":
                  return new Be({ type: "audio", id: e4.id });
                case "video":
                  return new He({ type: "video", id: e4.id });
                case "file":
                  return new je({ type: "file", id: e4.id });
              }
            }, e3.create = function(e4) {
              return "txt" !== (t3 = e4).type || "version" in t3 ? function(e5) {
                return "img" === e5.type && !("version" in e5);
              }(e4) ? Ge.create(e4) : function(e5) {
                return "cmd" === e5.type && !("version" in e5);
              }(e4) ? Le.create(e4) : function(e5) {
                return "file" === e5.type && !("version" in e5);
              }(e4) ? je.create(e4) : function(e5) {
                return "audio" === e5.type && !("version" in e5);
              }(e4) ? Be.create(e4) : function(e5) {
                return "video" === e5.type && !("version" in e5);
              }(e4) ? He.create(e4) : function(e5) {
                return "custom" === e5.type && !("version" in e5);
              }(e4) ? De.create(e4) : function(e5) {
                return "loc" === e5.type && !("version" in e5);
              }(e4) ? xe.create(e4) : function(e5) {
                return "channel" === e5.type && !("version" in e5);
              }(e4) ? we.create(e4) : function(e5) {
                return "delivery" === e5.type && !("version" in e5);
              }(e4) ? Pe.create(e4) : function(e5) {
                return "read" === e5.type && !("version" in e5);
              }(e4) ? Ue.create(e4) : function(e5) {
                return "combine" === e5.type && !("version" in e5);
              }(e4) ? Fe.create(e4) : {} : ke.create(e4);
              var t3;
            }, e3.prototype.set = function(e4) {
            }, e3.getFileUrl = _e.getFileUrl, e3;
          }();
          !function(e3) {
            e3[e3.CREATE = 0] = "CREATE", e3[e3.FAIL = 1] = "FAIL", e3[e3.INPROGRESS = 2] = "INPROGRESS", e3[e3.SUCCESS = 3] = "SUCCESS";
          }(Ne || (Ne = {}));
          var Ke = function() {
            return Ke = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, Ke.apply(this, arguments);
          }, qe = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, ze = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, Ve = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM", 8: "COMBINE" };
          function Je(e3) {
            for (var t3 = {}, r2 = 0; r2 < e3.length; r2++)
              if (8 === e3[r2].type)
                t3[e3[r2].key] = JSON.parse(e3[r2].stringValue);
              else if (7 === e3[r2].type)
                t3[e3[r2].key] = e3[r2].stringValue;
              else if (6 === e3[r2].type)
                t3[e3[r2].key] = e3[r2].doubleValue;
              else if (5 === e3[r2].type)
                t3[e3[r2].key] = e3[r2].floatValue;
              else if (1 === e3[r2].type) {
                var o2 = e3[r2].varintValue, n2 = new (f())(o2.low, o2.high, o2.unsigned).toString();
                t3[e3[r2].key] = 0 !== Number(n2);
              } else
                2 !== e3[r2].type && 3 !== e3[r2].type && 4 !== e3[r2].type || (o2 = e3[r2].varintValue, n2 = new (f())(o2.low, o2.high, o2.unsigned).toString(), t3[e3[r2].key] = Number(n2));
            return t3;
          }
          function Xe(e3) {
            var t3 = "";
            return e3.remotePath && (t3 = _e.formatAttachUrl.call(this, e3.remotePath), e3.remotePath.includes("?em-redirect") || (t3 = "".concat(t3, "?em-redirect=true"), e3.secretKey && (t3 = "".concat(t3, "&share-secret=").concat(e3.secretKey)))), t3;
          }
          function Ye(e3, t3) {
            var r2, o2, n2 = t3.from && t3.from.name;
            if (n2 === this.context.userId) {
              var i2 = null === (r2 = null == e3 ? void 0 : e3.from) || void 0 === r2 ? void 0 : r2.clientResource;
              n2 === (null === (o2 = null == t3 ? void 0 : t3.to) || void 0 === o2 ? void 0 : o2.name) && i2 && i2 !== this.clientResource && (n2 = "".concat(n2, "/").concat(i2));
            }
            return n2;
          }
          function Qe(e3, t3) {
            var r2, o2 = t3.to && t3.to.name;
            return (null === (r2 = null == e3 ? void 0 : e3.to) || void 0 === r2 ? void 0 : r2.clientResource) && (o2 = "".concat(o2, "/").concat(e3.to.clientResource)), o2;
          }
          function Ze(e3) {
            var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, d2, p2, h2, f2, m2, g2, E2, y2, v2, T2, _2, R2, O2, I2, S2, C2, N2;
            return qe(this, void 0, void 0, function() {
              var A2, M2, b2, U2, P2, w2, k2, L2, D2, x2, G2, H2, j2, F2, W2, K2, q2, z2, V2, J2, X2, Y2, Q2, Z2, $3, ee2, te2, re2, oe2, ne2, ie2, ae2, se2, ce2, ue2, le2, de2, pe2, he2, fe2, me2, ge2, Ee2, ye2, ve2, Te2, Re2, Oe2, Ie2, Se2, Ae2, Me2;
              return ze(this, function(be2) {
                switch (be2.label) {
                  case 0:
                    switch (A2 = e3.status, M2 = e3.thirdMessage, b2 = e3.msgBody, U2 = e3.msgId, P2 = e3.type, w2 = e3.from, k2 = e3.to, L2 = e3.time, D2 = e3.onlineState, x2 = e3.chatType, G2 = e3.ignoreCallback, H2 = e3.priority, j2 = e3.format, F2 = e3.broadcast, W2 = void 0 !== F2 && F2, K2 = e3.isContentReplaced, q2 = void 0 !== K2 && K2, z2 = {}, V2 = {}, J2 = A2.errorCode > 0, X2 = A2.errorCode, Y2 = A2.reason, Q2 = {}, Z2 = [], $3 = [], ee2 = {}, te2 = "", re2 = 0, oe2 = null, ne2 = null, M2.ext && (Q2 = Je(M2.ext)), M2.meta && "string" == typeof M2.meta && ((ae2 = JSON.parse(M2.meta)).reaction && (Z2 = ae2.reaction).forEach(function(e4) {
                      e4.isAddedBySelf = e4.state, delete e4.state;
                    }), ae2.translations && ($3 = ae2.translations), ae2.edit_msg && (se2 = ae2.edit_msg, ce2 = se2.count, ue2 = se2.operator, le2 = se2.edit_time, de2 = se2.sender, pe2 = se2.send_time, ee2 = { operationTime: le2, operatorId: ue2, operationCount: ce2 }, te2 = de2, re2 = pe2), ae2.thread && "{}" !== JSON.stringify(ae2.thread) && (oe2 = { messageId: ae2.thread.msg_parent_id, parentId: ae2.thread.muc_parent_id, chatThreadName: ae2.thread.thread_name }), ae2.thread_overview && "{}" !== JSON.stringify(ae2.thread_overview) && (ne2 = { id: ae2.thread_overview.id, parentId: ae2.thread_overview.muc_parent_id, name: ae2.thread_overview.name, lastMessage: ae2.thread_overview.last_message && "{}" !== JSON.stringify(ae2.thread_overview.last_message) ? Ce.call(this, ae2.thread_overview.last_message) : null, createTimestamp: ae2.thread_overview.create_timestamp, updateTimestamp: ae2.thread_overview.update_timestamp, messageCount: ae2.thread_overview.message_count || 0 })), b2.type) {
                      case 0:
                        return [3, 1];
                      case 1:
                        return [3, 7];
                      case 2:
                        return [3, 10];
                      case 3:
                        return [3, 13];
                      case 4:
                        return [3, 16];
                      case 5:
                        return [3, 19];
                      case 6:
                        return [3, 22];
                      case 7:
                        return [3, 23];
                      case 8:
                        return [3, 26];
                    }
                    return [3, 27];
                  case 1:
                    return Object.prototype.hasOwnProperty.call(b2, "subType") && 0 === b2.subType ? (ie2 = Xe.call(this, b2), he2 = { id: U2, type: "combine", chatType: x2, to: k2, from: w2, ext: Q2, time: Number(L2), onlineState: D2, title: b2.title || "", summary: b2.summary || "", url: ie2 || "", secret: b2.secretKey || "", file_length: b2.fileLength || 0, filename: b2.displayName || "", compatibleText: b2.text, combineLevel: b2.combineLevel || 0 }, z2.msgConfig && (he2.msgConfig = z2.msgConfig), Z2.length > 0 && (he2.reactions = Z2), oe2 && (he2.chatThread = oe2), ne2 && (he2.chatThreadOverview = ne2), "chatRoom" === x2 && (he2.priority = H2, he2.broadcast = W2), q2 && (he2.isContentReplaced = q2), V2 = he2, G2 ? [3, 3] : [4, null === (r2 = null === (t3 = this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) || void 0 === r2 ? void 0 : r2.storeMessage(he2, Ne.SUCCESS)]) : [3, 4];
                  case 2:
                    be2.sent(), null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onCombineMessage", he2), be2.label = 3;
                  case 3:
                    return [3, 28];
                  case 4:
                    return !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, data: b2.text, ext: Q2, sourceMsg: b2.text, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onTextMessage && this.onTextMessage(z2), fe2 = { id: U2, type: "txt", chatType: x2, msg: b2.text, to: k2, from: w2, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (fe2.msgConfig = z2.msgConfig), Z2.length > 0 && (fe2.reactions = Z2), oe2 && (fe2.chatThread = oe2), ne2 && (fe2.chatThreadOverview = ne2), $3.length > 0 && (fe2.translations = $3), ee2.operationCount > 0 && (fe2.modifiedInfo = ee2, M2.type === Ot.EDIT && (fe2.from = te2, fe2.time = re2)), "chatRoom" === x2 && (fe2.priority = H2, fe2.broadcast = W2), q2 && (fe2.isContentReplaced = q2), V2 = fe2, G2 ? [3, 6] : [4, null === (i2 = null === (n2 = this._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 ? void 0 : i2.storeMessage(fe2, Ne.SUCCESS)];
                  case 5:
                    be2.sent(), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onTextMessage", fe2), be2.label = 6;
                  case 6:
                    return [3, 28];
                  case 7:
                    return me2 = (null === (s2 = null == b2 ? void 0 : b2.size) || void 0 === s2 ? void 0 : s2.width) || 0, ge2 = (null === (c2 = null == b2 ? void 0 : b2.size) || void 0 === c2 ? void 0 : c2.height) || 0, ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(ie2, "&thumbnail=true"), thumb_secret: b2.secretKey, file_length: b2.fileLength || "", width: me2, height: ge2, filetype: b2.filetype || "", accessToken: this.token, ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onPictureMessage && this.onPictureMessage(z2), Ee2 = { id: U2, type: "img", chatType: x2, from: w2, to: k2, url: ie2 || "", width: me2, height: ge2, secret: b2.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(ie2, "&thumbnail=true"), thumb_secret: b2.secretKey, file_length: b2.fileLength || 0, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Ee2.msgConfig = z2.msgConfig), Z2.length > 0 && (Ee2.reactions = Z2), oe2 && (Ee2.chatThread = oe2), ne2 && (Ee2.chatThreadOverview = ne2), "chatRoom" === x2 && (Ee2.priority = H2, Ee2.broadcast = W2), q2 && (Ee2.isContentReplaced = q2), V2 = Ee2, G2 ? [3, 9] : [4, null === (l2 = null === (u2 = this._localCache) || void 0 === u2 ? void 0 : u2.getInstance()) || void 0 === l2 ? void 0 : l2.storeMessage(Ee2, Ne.SUCCESS)];
                  case 8:
                    be2.sent(), null === (d2 = this.eventHandler) || void 0 === d2 || d2.dispatch("onImageMessage", Ee2), be2.label = 9;
                  case 9:
                    return [3, 28];
                  case 10:
                    return ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, length: b2.duration || "", file_length: b2.fileLength || "", filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onVideoMessage && this.onVideoMessage(z2), ye2 = { id: U2, type: "video", chatType: x2, from: w2, to: k2, url: ie2, secret: b2.secretKey, thumb: _e.formatAttachUrl.call(this, b2.thumbnailRemotePath), thumb_secret: b2.thumbnailSecretKey, filename: b2.displayName, length: b2.duration || 0, file: {}, file_length: b2.fileLength || 0, filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (ye2.msgConfig = z2.msgConfig), Z2.length > 0 && (ye2.reactions = Z2), oe2 && (ye2.chatThread = oe2), ne2 && (ye2.chatThreadOverview = ne2), "chatRoom" === x2 && (ye2.priority = H2, ye2.broadcast = W2), q2 && (ye2.isContentReplaced = q2), V2 = ye2, G2 ? [3, 12] : [4, null === (h2 = null === (p2 = this._localCache) || void 0 === p2 ? void 0 : p2.getInstance()) || void 0 === h2 ? void 0 : h2.storeMessage(ye2, Ne.SUCCESS)];
                  case 11:
                    be2.sent(), null === (f2 = this.eventHandler) || void 0 === f2 || f2.dispatch("onVideoMessage", ye2), be2.label = 12;
                  case 12:
                    return [3, 28];
                  case 13:
                    return !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, addr: b2.address, buildingName: b2.buildingName, lat: b2.latitude, lng: b2.longitude, ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onLocationMessage && this.onLocationMessage(z2), ve2 = { id: U2, type: "loc", chatType: x2, from: w2, to: k2, buildingName: b2.buildingName, addr: b2.address, lat: b2.latitude, lng: b2.longitude, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (ve2.msgConfig = z2.msgConfig), Z2.length > 0 && (ve2.reactions = Z2), oe2 && (ve2.chatThread = oe2), ne2 && (ve2.chatThreadOverview = ne2), "chatRoom" === x2 && (ve2.priority = H2, ve2.broadcast = W2), q2 && (ve2.isContentReplaced = q2), V2 = ve2, G2 ? [3, 15] : [4, null === (g2 = null === (m2 = this._localCache) || void 0 === m2 ? void 0 : m2.getInstance()) || void 0 === g2 ? void 0 : g2.storeMessage(ve2, Ne.SUCCESS)];
                  case 14:
                    be2.sent(), null === (E2 = this.eventHandler) || void 0 === E2 || E2.dispatch("onLocationMessage", ve2), be2.label = 15;
                  case 15:
                    return [3, 28];
                  case 16:
                    return ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, file_length: b2.fileLength || "", accessToken: this.token || "", ext: Q2, length: b2.duration, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onAudioMessage && this.onAudioMessage(z2), Te2 = { id: U2, type: "audio", chatType: x2, from: w2, to: k2, url: ie2, secret: b2.secretKey, file: {}, filename: b2.displayName, length: b2.duration || 0, file_length: b2.fileLength || 0, filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Te2.msgConfig = z2.msgConfig), Z2.length > 0 && (Te2.reactions = Z2), oe2 && (Te2.chatThread = oe2), ne2 && (Te2.chatThreadOverview = ne2), "chatRoom" === x2 && (Te2.priority = H2, Te2.broadcast = W2), q2 && (Te2.isContentReplaced = q2), V2 = Te2, G2 ? [3, 18] : [4, null === (v2 = null === (y2 = this._localCache) || void 0 === y2 ? void 0 : y2.getInstance()) || void 0 === v2 ? void 0 : v2.storeMessage(Te2, Ne.SUCCESS)];
                  case 17:
                    be2.sent(), null === (T2 = this.eventHandler) || void 0 === T2 || T2.dispatch("onAudioMessage", Te2), be2.label = 18;
                  case 18:
                    return [3, 28];
                  case 19:
                    return ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, file_length: b2.fileLength, accessToken: this.token || "", ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onFileMessage && this.onFileMessage(z2), Re2 = { id: U2, type: "file", chatType: x2, from: w2, to: k2, url: ie2, secret: b2.secretKey, file: {}, filename: b2.displayName, length: b2.duration || 0, file_length: b2.fileLength || 0, filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Re2.msgConfig = z2.msgConfig), Z2.length > 0 && (Re2.reactions = Z2), oe2 && (Re2.chatThread = oe2), ne2 && (Re2.chatThreadOverview = ne2), "chatRoom" === x2 && (Re2.priority = H2, Re2.broadcast = W2), q2 && (Re2.isContentReplaced = q2), V2 = Re2, G2 ? [3, 21] : [4, null === (R2 = null === (_2 = this._localCache) || void 0 === _2 ? void 0 : _2.getInstance()) || void 0 === R2 ? void 0 : R2.storeMessage(Re2, Ne.SUCCESS)];
                  case 20:
                    be2.sent(), null === (O2 = this.eventHandler) || void 0 === O2 || O2.dispatch("onFileMessage", Re2), be2.label = 21;
                  case 21:
                    return [3, 28];
                  case 22:
                    return !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, action: b2.action, ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onCmdMessage && this.onCmdMessage(z2), Oe2 = { id: U2, type: "cmd", chatType: x2, from: w2, to: k2, action: b2.action, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Oe2.msgConfig = z2.msgConfig), Z2.length > 0 && (Oe2.reactions = Z2), oe2 && (Oe2.chatThread = oe2), ne2 && (Oe2.chatThreadOverview = ne2), "chatRoom" === x2 && (Oe2.priority = H2, Oe2.broadcast = W2), q2 && (Oe2.isContentReplaced = q2), V2 = Oe2, G2 || null === (I2 = this.eventHandler) || void 0 === I2 || I2.dispatch("onCmdMessage", Oe2), [3, 28];
                  case 23:
                    return Ie2 = {}, Se2 = {}, M2.contents[0].customExts && (Ie2 = Je(M2.contents[0].customExts)), M2.contents[0].params && (Se2 = Je(M2.contents[0].params)), z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, customEvent: b2.customEvent, params: Se2, customExts: Ie2, ext: Q2, time: L2, onlineState: D2 }, !G2 && this.onCustomMessage && this.onCustomMessage(z2), Ae2 = { id: U2, type: "custom", chatType: x2, from: w2, to: k2, customEvent: b2.customEvent, params: Se2, customExts: Ie2, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Ae2.msgConfig = z2.msgConfig), Z2.length > 0 && (Ae2.reactions = Z2), oe2 && (Ae2.chatThread = oe2), ne2 && (Ae2.chatThreadOverview = ne2), ee2.operationCount > 0 && (Ae2.modifiedInfo = ee2, M2.type === Ot.EDIT && (Ae2.from = te2, Ae2.time = re2)), "chatRoom" === x2 && (Ae2.priority = H2, Ae2.broadcast = W2), q2 && (Ae2.isContentReplaced = q2), V2 = Ae2, G2 ? [3, 25] : [4, null === (C2 = null === (S2 = this._localCache) || void 0 === S2 ? void 0 : S2.getInstance()) || void 0 === C2 ? void 0 : C2.storeMessage(Ae2, Ne.SUCCESS)];
                  case 24:
                    be2.sent(), null === (N2 = this.eventHandler) || void 0 === N2 || N2.dispatch("onCustomMessage", Ae2), be2.label = 25;
                  case 25:
                    return [3, 28];
                  case 26:
                    return ie2 = Xe.call(this, b2), Me2 = { id: U2, type: "combine", chatType: x2, to: k2, from: w2, ext: Q2, time: Number(L2), onlineState: D2, title: b2.title || "", summary: b2.summary || "", url: ie2 || "", secret: b2.secretKey || "", file_length: b2.fileLength || 0, filename: b2.displayName || "", compatibleText: b2.text, combineLevel: b2.combineLevel || 0 }, z2.msgConfig && (Me2.msgConfig = z2.msgConfig), Z2.length > 0 && (Me2.reactions = Z2), oe2 && (Me2.chatThread = oe2), ne2 && (Me2.chatThreadOverview = ne2), "chatRoom" === x2 && (Me2.priority = H2, Me2.broadcast = W2), q2 && (Me2.isContentReplaced = q2), V2 = Me2, !G2 && this.eventHandler && this.eventHandler.dispatch("onCombineMessage", Me2), [3, 28];
                  case 27:
                    return B.error("Unknow message type, message:", b2), [3, 28];
                  case 28:
                    return j2 ? [2, V2] : [2, z2];
                }
              });
            });
          }
          function $e(e3, t3, r2) {
            if (this.delivery && e3 !== t3) {
              var o2 = this.getUniqueId(), n2 = new We("delivery", o2);
              n2.set({ ackId: r2, to: e3 }), B.debug("send delivery ack"), this.send(n2.body);
            }
          }
          var et = function(e3, t3, r2, o2, n2) {
            var i2, a2, s2, c2, u2, l2, d2, p2, h2, m2, g2, E2, y2, v2, T2, _2, R2, O2, I2, S2, C2, N2, A2, M2, b2, U2;
            return qe(this, void 0, void 0, function() {
              var P2, w2, k2, L2, D2, x2, G2, H2, j2, F2, W2, K2, q2, z2, V2, J2, X2, Y2, Q2, Z2, $3, ee2, te2, re2, oe2, ne2, ie2, ae2, se2, ce2, ue2, le2, de2, pe2, he2, fe2, me2, ge2, Ee2, ye2;
              return ze(this, function(ve2) {
                switch (ve2.label) {
                  case 0:
                    if (P2 = new (f())(e3.timestamp.low, e3.timestamp.high, e3.timestamp.unsigned).toString(), w2 = this.root.lookup("easemob.pb.MessageBody"), k2 = w2.decode(e3.payload), L2 = 3, D2 = false, x2 = new (f())(e3.id.low, e3.id.high, e3.id.unsigned).toString(), n2 && e3.from && e3.from.name === this.context.userId && e3.from.clientResource === this.clientResource && k2.type === Ot.CHATROOM)
                      return [2, B.debug("Discard your own chat room message:", x2)];
                    if (e3.meta && e3.meta.length) {
                      if (G2 = _e.parseNotify(e3.meta), H2 = G2.is_online, j2 = G2.callback_replace, this.useReplacedMessageContents && j2 && (D2 = true), H2 || 0 === H2)
                        switch (H2) {
                          case 0:
                            L2 = 0;
                            break;
                          case 1:
                            L2 = 1;
                            break;
                          default:
                            L2 = 2;
                        }
                    } else
                      L2 = 3;
                    switch (F2 = k2.ackMessageId ? new (f())(k2.ackMessageId.low, k2.ackMessageId.high, k2.ackMessageId.unsigned).toString() : "", W2 = "", K2 = Ye.call(this, e3, k2), q2 = Qe.call(this, e3, k2), B.debug("meta thirdMessage:", { metaId: x2, metaNs: e3.ns, type: k2.type, from: K2, to: q2, contentType: null === (a2 = null === (i2 = k2.contents) || void 0 === i2 ? void 0 : i2[0]) || void 0 === a2 ? void 0 : a2.type, contentLen: null === (s2 = k2.contents) || void 0 === s2 ? void 0 : s2.length }), k2.type) {
                      case Ot.SINGLECHAT:
                        return [3, 1];
                      case Ot.GROUPCHAT:
                        return [3, 2];
                      case Ot.CHATROOM:
                        return [3, 3];
                      case Ot.READ_ACK:
                        return [3, 4];
                      case Ot.DELIVER_ACK:
                        return [3, 5];
                      case Ot.RECALL:
                        return [3, 6];
                      case Ot.CHANNEL_ACK:
                        return [3, 15];
                      case Ot.EDIT:
                        return [3, 16];
                    }
                    return [3, 20];
                  case 1:
                    return W2 = "chat", "agoraToken" === this.grantType && (W2 = "singleChat"), this.delivery && !r2 && K2 !== this.context.userId && $e.call(this, K2, q2, x2), [3, 21];
                  case 2:
                    return W2 = "groupchat", "agoraToken" === this.grantType && (W2 = "groupChat"), [3, 21];
                  case 3:
                    return W2 = "chatroom", "agoraToken" === this.grantType && (W2 = "chatRoom"), L2 = 1, [3, 21];
                  case 4:
                    return W2 = "read_ack", z2 = void 0, k2.ext[0] && JSON.parse(k2.ext[0].stringValue) ? (z2 = { id: x2, type: "read", from: K2, to: q2, mid: F2, groupReadCount: k2.ext[0] && JSON.parse(k2.ext[0].stringValue), ackContent: k2.ackContent, onlineState: L2 }, this.onReadMessage && this.onReadMessage(z2), null === (c2 = this.eventHandler) || void 0 === c2 || c2.dispatch("onReadMessage", z2), [2]) : (z2 = { id: x2, type: "read", from: K2, to: q2, mid: F2, onlineState: L2 }, this.onReadMessage && this.onReadMessage(z2), null === (u2 = this.eventHandler) || void 0 === u2 || u2.dispatch("onReadMessage", z2), [2]);
                  case 5:
                    return W2 = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: x2, type: "delivery", from: K2, to: q2, mid: F2, onlineState: L2 }), V2 = { id: x2, type: "delivery", from: K2, to: q2, mid: F2, onlineState: L2 }, null === (l2 = this.eventHandler) || void 0 === l2 || l2.dispatch("onDeliveredMessage", V2), [2];
                  case 6:
                    return W2 = "recall", J2 = "", e3.ext && (J2 = (null === (d2 = Je(e3.ext)) || void 0 === d2 ? void 0 : d2.recallMessageExtensionInfo) || ""), X2 = { id: x2, from: K2 || "admin", to: q2, mid: F2, ext: J2, onlineState: L2 }, Y2 = q2 === this.user ? K2 : q2, [4, null === (h2 = null === (p2 = this._localCache) || void 0 === p2 ? void 0 : p2.getInstance()) || void 0 === h2 ? void 0 : h2.getMessageByServerMsgId(X2.mid)];
                  case 7:
                    return (Q2 = ve2.sent()) ? [4, null === (g2 = null === (m2 = this._localCache) || void 0 === m2 ? void 0 : m2.getInstance()) || void 0 === g2 ? void 0 : g2.removeMsgByServerMsgId(X2.mid)] : [3, 9];
                  case 8:
                    ve2.sent(), ve2.label = 9;
                  case 9:
                    return "singleChat" !== (null == Q2 ? void 0 : Q2.chatType) && "groupChat" !== (null == Q2 ? void 0 : Q2.chatType) ? [3, 14] : (Z2 = (null == Q2 ? void 0 : Q2.from) === this.user || "" === (null == Q2 ? void 0 : Q2.from), [4, null === (y2 = null === (E2 = this._localCache) || void 0 === E2 ? void 0 : E2.getInstance()) || void 0 === y2 ? void 0 : y2.getConversationLastMessage(Y2, Q2.chatType)]);
                  case 10:
                    return $3 = ve2.sent(), [4, null === (T2 = null === (v2 = this._localCache) || void 0 === v2 ? void 0 : v2.getInstance()) || void 0 === T2 ? void 0 : T2.getConversationBySessionId(Ae({ conversationId: Y2, conversationType: Q2.chatType }))];
                  case 11:
                    return (ee2 = ve2.sent()) ? [4, null === (R2 = null === (_2 = this._localCache) || void 0 === _2 ? void 0 : _2.getInstance()) || void 0 === R2 ? void 0 : R2.updateLocalConversation(Ae({ conversationId: Y2, conversationType: Q2.chatType }), { lastMessageId: null == $3 ? void 0 : $3.serverMsgId, unReadCount: Me({ conversation: ee2, isRecallSelfMsg: Z2, recalledMsgTime: Q2.time }) })] : [3, 13];
                  case 12:
                    ve2.sent(), ve2.label = 13;
                  case 13:
                    ve2.label = 14;
                  case 14:
                    return this.onRecallMessage && this.onRecallMessage(X2), null === (O2 = this.eventHandler) || void 0 === O2 || O2.dispatch("onRecallMessage", X2), [2];
                  case 15:
                    return this.onChannelMessage && this.onChannelMessage({ id: x2, type: "channel", chatType: "singleChat", from: K2, to: q2, time: Number(P2), onlineState: L2 }), te2 = { id: x2, type: "channel", chatType: "singleChat", from: K2, to: q2, time: Number(P2), onlineState: L2 }, null === (I2 = this.eventHandler) || void 0 === I2 || I2.dispatch("onChannelMessage", te2), [2];
                  case 16:
                    return re2 = { errorCode: 0, reason: "" }, [4, Ze.call(this, { status: re2, thirdMessage: k2, msgBody: k2.contents[0], msgId: x2, type: W2, from: K2, to: q2, time: P2, onlineState: L2, ignoreCallback: true, format: true, isContentReplaced: D2 })];
                  case 17:
                    return oe2 = ve2.sent(), ne2 = !!e3.to && -1 !== e3.to.domain.indexOf("conference"), oe2.chatType = ne2 ? "groupChat" : "singleChat", ie2 = k2.editMessageId && new (f())(k2.editMessageId.low, k2.editMessageId.high, k2.editMessageId.unsigned).toString(), ae2 = {}, "txt" === oe2.type ? (se2 = oe2.type, ce2 = oe2.chatType, ue2 = oe2.to, le2 = oe2.from, de2 = oe2.time, pe2 = oe2.modifiedInfo, ae2 = { id: ie2, type: se2, chatType: ce2, to: ue2, from: le2, time: de2, modifiedInfo: pe2, msg: oe2.msg }, oe2.translations && (ae2.translations = oe2.translations)) : "custom" === oe2.type && ((ae2 = oe2).id = ie2, delete ae2.onlineState), ae2 ? [4, null === (C2 = null === (S2 = this._localCache) || void 0 === S2 ? void 0 : S2.getInstance()) || void 0 === C2 ? void 0 : C2.getMessageByServerMsgId(ie2)] : [3, 19];
                  case 18:
                    "txt" === (null == (he2 = ve2.sent()) ? void 0 : he2.type) && "txt" === ae2.type ? null === (A2 = null === (N2 = this._localCache) || void 0 === N2 ? void 0 : N2.getInstance()) || void 0 === A2 || A2.putMessageToDB(Ke(Ke({}, he2), { msg: ae2.msg, modifiedInfo: ae2.modifiedInfo, translations: ae2.translations })) : "custom" === (null == he2 ? void 0 : he2.type) && "custom" === ae2.type && (null === (b2 = null === (M2 = this._localCache) || void 0 === M2 ? void 0 : M2.getInstance()) || void 0 === b2 || b2.putMessageToDB(Ke(Ke({}, he2), { modifiedInfo: ae2.modifiedInfo, customEvent: ae2.customEvent, customExts: ae2.customExts, ext: ae2.ext }))), ve2.label = 19;
                  case 19:
                    return "txt" !== oe2.type && "custom" !== oe2.type || null === (U2 = this.eventHandler) || void 0 === U2 || U2.dispatch("onModifiedMessage", ae2), [2];
                  case 20:
                    return B.error("unexpected message type: ".concat(k2.type)), [2];
                  case 21:
                    fe2 = "normal", ge2 = false, "chat" === W2.toLowerCase() || "singleChat" === W2 ? me2 = "singleChat" : "groupchat" === W2.toLowerCase() || "groupChat" === W2 ? me2 = "groupChat" : (me2 = "chatRoom", L2 = 1, e3.ext && (Ee2 = Je(e3.ext), ge2 = !!(null == Ee2 ? void 0 : Ee2.is_broadcast), fe2 = 0 === Ee2.chatroom_msg_tag ? "high" : 2 === Ee2.chatroom_msg_tag ? "low" : "normal")), ye2 = 0, ve2.label = 22;
                  case 22:
                    return ye2 < k2.contents.length ? [4, Ze.call(this, { status: t3, thirdMessage: k2, msgBody: k2.contents[ye2], msgId: x2, type: W2, from: K2, to: q2, time: P2, onlineState: L2, chatType: me2, ignoreCallback: r2, priority: fe2, format: o2, broadcast: ge2, isContentReplaced: D2 })] : [3, 25];
                  case 23:
                    return [2, ve2.sent()];
                  case 24:
                    return ye2++, [3, 22];
                  case 25:
                    return [2];
                }
              });
            });
          }, rt = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], ot = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" };
          function nt(e3, t3) {
            var r2, o2, n2, i2, a2, s2, c2 = this, u2 = this.context, l2 = u2.userId, d2 = u2.jid, p2 = t3.from.name === l2 && d2.clientResource !== t3.from.clientResource;
            return t3.isThread ? (n2 = { id: t3.mucId.name, name: t3.mucName, operation: "", parentId: t3.mucParentId.name, operator: t3.from.name, userName: t3.to.length ? t3.to[0].name : "" }, i2 = { chatThreadId: t3.mucId.name, chatThreadName: t3.mucName, operation: "", parentId: t3.mucParentId.name }) : (o2 = { type: "", owner: t3.from.name, gid: t3.mucId.name, from: t3.from.name, fromJid: t3.from, to: t3.to.length ? t3.to[0].name : "", toJid: t3.to, chatroom: t3.isChatroom, status: t3.status }, a2 = { operation: "", id: t3.mucId.name, from: t3.from.name }, t3.isChatroom && (null === (r2 = null == t3 ? void 0 : t3.eventInfo) || void 0 === r2 ? void 0 : r2.ext) && (s2 = JSON.parse(t3.eventInfo.ext))), ({ 45: function() {
              var e4, r3, o3;
              a2.operation = "memberAttributesUpdate";
              var n3 = JSON.parse(null === (e4 = null == t3 ? void 0 : t3.eventInfo) || void 0 === e4 ? void 0 : e4.ext) || {};
              a2.attributes = n3.properties || {}, a2.userId = n3.username || "", p2 ? null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onMultiDeviceEvent", a2) : null === (o3 = c2.eventHandler) || void 0 === o3 || o3.dispatch("onGroupEvent", a2);
            }, 44: function() {
              var e4;
              a2.operation = "removeChatRoomAttributes", a2.attributes = s2.result.successKeys, s2.result.successKeys.length > 0 && (null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomEvent", a2));
            }, 43: function() {
              var e4;
              a2.operation = "updateChatRoomAttributes";
              var t4 = {};
              s2.result.successKeys.forEach(function(e5) {
                t4[e5] = s2.properties[e5];
              }), a2.attributes = t4, s2.result.successKeys.length > 0 && (null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomEvent", a2));
            }, 42: function() {
            }, 41: function() {
            }, 40: function() {
            }, 39: function() {
            }, 38: function() {
              var e4;
              i2.operation = "chatThreadNameUpdate", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 37: function() {
              var e4;
              n2.operation = "userRemove", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatThreadChange", n2);
            }, 36: function() {
              var e4;
              i2.operation = "chatThreadLeave", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 35: function() {
              var e4;
              i2.operation = "chatThreadJoin", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 34: function() {
              var e4;
              i2.operation = "chatThreadDestroy", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 33: function() {
              var e4;
              i2.operation = "chatThreadCreate", null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onMultiDeviceEvent", i2);
            }, 32: function() {
              var e4, r3, n3, i3;
              o2.type = t3.isChatroom ? "rmChatRoomMute" : "rmGroupMute", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "unmuteAllMembers", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 31: function() {
              var e4, r3, n3, i3;
              o2.type = t3.isChatroom ? "muteChatRoom" : "muteGroup", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "muteAllMembers", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 30: function() {
              var e4, r3, n3, i3;
              o2.type = t3.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "removeAllowlistMember", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 29: function() {
              var e4, r3, n3, i3;
              o2.type = t3.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "addUserToAllowlist", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 28: function() {
              var e4, r3, n3, i3;
              o2.type = "deleteFile", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "deleteFile", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 27: function() {
              var e4, r3, n3, i3;
              o2.type = "uploadFile", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "uploadFile", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 26: function() {
              var e4, r3, n3, i3;
              o2.type = "deleteAnnouncement", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "deleteAnnouncement", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 25: function() {
              var e4, r3, n3, i3;
              o2.type = "updateAnnouncement", o2.announcement = t3.reason, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "updateAnnouncement", a2.announcement = t3.reason, t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 24: function() {
              var e4, r3, n3, i3;
              o2.type = "removeMute", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "unmuteMember", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 23: function() {
              var e4, r3, n3, i3;
              o2.type = "addMute", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "muteMember", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 22: function() {
              var e4, r3, n3, i3;
              o2.type = "removeAdmin", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "removeAdmin", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 21: function() {
              var e4, r3, n3, i3;
              o2.type = "addAdmin", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "setAdmin", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 20: function() {
              var e4, r3, n3, i3;
              o2.type = "changeOwner", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "changeOwner", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 19: function() {
              var e4, r3, n3, i3;
              o2.type = "direct_joined", o2.groupName = t3.mucName, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "directJoined", a2.name = t3.mucName, t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 18: function() {
              var e4, r3, n3, i3;
              o2.type = t3.isChatroom ? "leaveChatRoom" : "leaveGroup", c2.onPresence && c2.onPresence(o2);
              var s3 = t3.mucMemberCount;
              s3 && (a2.memberCount = s3), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "memberAbsence", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 17: function() {
              var e4, r3, n3, i3;
              t3.isChatroom && t3.ext && (a2.ext = t3.ext, o2.ext = t3.ext), o2.type = t3.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", c2.onPresence && c2.onPresence(o2);
              var s3 = t3.mucMemberCount;
              t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "memberPresence", s3 && (a2.memberCount = s3), t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 16: function() {
              var e4, r3;
              o2.type = "unblock", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2);
            }, 15: function() {
              var e4, r3;
              o2.type = "block", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2);
            }, 14: function() {
              var e4, r3, n3, i3, s3, u3 = t3.isChatroom;
              if (!u3) {
                var l3 = JSON.parse((null === (e4 = null == t3 ? void 0 : t3.eventInfo) || void 0 === e4 ? void 0 : e4.ext) || "{}", function(e5, t4) {
                  return "last_modified" === e5 ? Number(t4) : rt.includes(e5) ? "true" === t4 || true === t4 : t4;
                });
                a2.detail = o2.detail = {}, Object.keys(l3).forEach(function(e5) {
                  var t4 = ot[e5];
                  if (t4) {
                    var r4 = l3[e5];
                    a2.detail && (a2.detail[t4] = r4), o2.detail && (o2.detail[t4] = r4);
                  }
                });
              }
              o2.type = "update", c2.onPresence && c2.onPresence(o2), u3 ? null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onChatroomChange", o2) : null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onGroupChange", o2), a2.operation = "updateInfo", u3 ? null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onChatroomEvent", a2) : null === (s3 = c2.eventHandler) || void 0 === s3 || s3.dispatch("onGroupEvent", a2);
            }, 13: function() {
              var e4, r3, n3, i3;
              o2.type = "allow", o2.reason = t3.reason, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), t3.reason && (a2.reason = t3.reason), a2.operation = "unblockMember", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 12: function() {
              var e4, r3;
              o2.type = "ban", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2);
            }, 11: function() {
              var e4, r3;
              o2.type = "getBlackList", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2);
            }, 10: function() {
              var e4, r3, n3, i3;
              o2.type = "removedFromGroup", o2.kicked = o2.to, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "removeMember", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 9: function() {
              var e4, r3, n3, i3;
              o2.type = "invite_decline", o2.kicked = o2.to, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "rejectInvite", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 8: function() {
              var e4, r3, n3, i3;
              o2.type = "invite_accept", o2.kicked = o2.to, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "acceptInvite", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 7: function() {
              var e4, r3, n3, i3;
              o2.type = "invite", o2.kicked = o2.to, o2.groupName = t3.mucName, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "inviteToJoin", a2.name = t3.mucName, t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 6: function() {
              var e4, r3, n3, i3;
              o2.type = "joinPublicGroupDeclined", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "joinPublicGroupDeclined", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : (a2.userId = t3.to.length ? t3.to[0].name : "", null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2));
            }, 5: function() {
              var e4, r3, n3, i3;
              o2.type = "joinPublicGroupSuccess", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "acceptRequest", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 4: function() {
              var e4, r3, n3, i3;
              o2.type = "joinGroupNotifications", o2.reason = t3.reason, c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), t3.reason && (a2.reason = t3.reason), a2.operation = "requestToJoin", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 3: function() {
              var e4, r3;
              o2.type = "leave", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2);
            }, 2: function() {
              var e4, r3;
              o2.type = "join", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2);
            }, 1: function() {
              var e4, r3, n3, i3;
              o2.type = "deleteGroupChat", c2.onPresence && c2.onPresence(o2), t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomChange", o2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o2), a2.operation = "destroy", t3.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
            }, 0: function() {
              var e4, r3;
              a2.operation = "create", t3.isChatroom ? null === (e4 = c2.eventHandler) || void 0 === e4 || e4.dispatch("onChatroomEvent", a2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupEvent", a2);
            } }[e3] || function() {
              console.error("No match operation ".concat(e3));
            })();
          }
          var it, at = function(e3) {
            var t3 = this.root.lookup("easemob.pb.MUCBody").decode(e3.payload), r2 = t3.operation;
            B.debug("onMucMessage", t3), nt.call(this, r2, t3);
          }, st = { handleRosterMsg: function(e3) {
            var t3, r2, o2, n2, i2, a2, s2 = this.root.lookup("easemob.pb.RosterBody").decode(e3.payload), c2 = { type: "", to: s2.to[0].name, from: s2.from.name, status: s2.reason };
            switch (s2.operation) {
              case 2:
                c2.type = "subscribe", this.onContactInvited && this.onContactInvited(c2), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onContactInvited", c2);
                break;
              case 3:
                c2.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(c2), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onContactDeleted", c2);
                break;
              case 4:
                c2.type = "subscribed", this.onContactAdded && this.onContactAdded(c2), null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onContactAdded", c2);
                break;
              case 5:
                c2.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c2), null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onContactRefuse", c2);
                break;
              case 6:
              case 7:
                break;
              case 8:
                c2.type = "subscribed", this.onContactAgreed && this.onContactAgreed(c2), null === (i2 = this.eventHandler) || void 0 === i2 || i2.dispatch("onContactAgreed", c2);
                break;
              case 9:
                c2.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c2), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onContactRefuse", c2);
                break;
              default:
                B.error("handleRosterMsg:", s2);
            }
            this.onPresence && c2.type && this.onPresence(c2);
          } }, ct = function(e3) {
            var t3, r2, o2, n2, i2, a2, s2 = this.root.lookup("easemob.pb.StatisticsBody").decode(e3.payload), c2 = s2.operation, u2 = s2.reason;
            switch (c2) {
              case 0:
                this.onStatisticMessage && this.onStatisticMessage(s2), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onStatisticMessage", s2);
                break;
              case 1:
                a2 = m.create({ type: d.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onError", a2);
                break;
              case 2:
                a2 = m.create({ type: d.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), u2 && (a2.data = { loginInfoCustomExt: s2.reason }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onError", a2);
                break;
              case 3:
                a2 = m.create({ type: d.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onError", a2);
                break;
              case 4:
                a2 = m.create({ type: d.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (i2 = this.eventHandler) || void 0 === i2 || i2.dispatch("onError", a2);
                break;
              default:
                B.error("handleStatisticsMsg:", s2);
            }
          };
          function ut(e3) {
            var t3, r2 = [], o2 = [], n2 = e3.data;
            n2 && n2.values && n2.values.forEach(function(e4) {
              Object.entries(e4.status).forEach(function(e5) {
                o2.push({ device: e5[0], status: Number(e5[1]) });
              }), r2.push({ userId: e4.uid, lastTime: Number(e4.last_time), expire: Number(e4.expiry), ext: e4.ext, statusDetails: o2 });
            }), this.onPresenceStatusChange && this.onPresenceStatusChange(r2), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onPresenceStatusChange", r2);
          }
          function lt(e3) {
            var t3 = this;
            e3.data.forEach(function(e4) {
              var r2, o2 = { from: e4.from, to: e4.to, chatType: "chat" === e4.channel_type ? "singleChat" : "groupChat", messageId: e4.messageId, reactions: e4.reactions, ts: e4.ts };
              null === (r2 = t3.eventHandler) || void 0 === r2 || r2.dispatch("onReactionChange", o2);
            });
          }
          function dt(e3) {
            var t3, r2, o2, n2;
            if (e3.data) {
              var i2 = e3.data, a2 = { id: i2.id || "", name: i2.name || "", parentId: i2.muc_parent_id || "", messageId: i2.msg_parent_id || "", timestamp: i2.timestamp || 0, operator: i2.from || "", operation: "" };
              switch (i2.operation) {
                case "create":
                  a2.operation = "create", a2.createTimestamp = a2.timestamp, a2.messageCount = 0, null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onChatThreadChange", a2);
                  break;
                case "update_msg":
                  a2.operation = "update", a2.messageCount = i2.message_count, i2.last_message && "{}" !== JSON.stringify(i2.last_message) ? a2.lastMessage = Ce.call(this, i2.last_message) : "{}" === JSON.stringify(i2.last_message) && (a2.lastMessage = {}), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onChatThreadChange", a2);
                  break;
                case "update":
                  a2.operation = "update", a2.messageCount = i2.message_count, null === (o2 = this.eventHandler) || void 0 === o2 || o2.dispatch("onChatThreadChange", a2);
                  break;
                case "delete":
                  a2.operation = "destroy", null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onChatThreadChange", a2);
              }
            }
          }
          function pt(e3) {
            var t3, r2 = e3.data;
            if (r2.resource !== this.clientResource) {
              var o2 = { operation: "deleteRoaming", conversationId: r2.to, chatType: "chat" === r2.chatType ? "singleChat" : "groupChat", resource: r2.resource };
              null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onMultiDeviceEvent", o2);
            }
          }
          function ht(e3) {
            var t3, r2, o2 = e3.data, n2 = "";
            if (this.clientResource !== o2.res) {
              switch (o2.op) {
                case "del":
                  n2 = "deleteConversation";
                  break;
                case "top":
                  n2 = "pinnedConversation";
                  break;
                case "not_top":
                  n2 = "unpinnedConversation";
                  break;
                case "mark":
                  n2 = "markConversation";
                  break;
                case "mark_delete":
                  n2 = "unMarkConversation";
                  break;
                case "pin":
                  n2 = "pin";
                  break;
                case "pin_delete":
                  n2 = "unpin";
                  break;
                default:
                  return void B.error("unexpected conversation op:", o2.op);
              }
              if ("pin" !== n2 && "unpin" !== n2) {
                var i2 = { operation: n2, conversationId: o2.id, conversationType: "chat" === o2.type ? "singleChat" : "groupChat", timestamp: o2.ts };
                "markConversation" !== i2.operation && "unMarkConversation" !== i2.operation || o2.ext && (i2.conversationMark = it[o2.ext]), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onMultiDeviceEvent", i2);
              } else {
                var a2 = o2.ext, s2 = o2.from, c2 = o2.id, u2 = o2.type, l2 = o2.ts, d2 = { messageId: a2 || "", conversationId: s2 === this.user ? c2 : s2, conversationType: Se[u2], operation: n2, operatorId: s2, time: l2 };
                null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onMessagePinEvent", d2);
              }
            }
          }
          function ft(e3) {
            var t3, r2 = this;
            null === (t3 = e3.values) || void 0 === t3 || t3.forEach(function(e4) {
              var t4, o2, n2, i2, a2;
              if (e4.operator_resource !== r2.clientResource)
                if ("ignoreInterval" in e4.data) {
                  var s2 = { operation: "setSilentModeForUser", resource: e4.operator_resource, data: e4.data };
                  null === (t4 = r2.eventHandler) || void 0 === t4 || t4.dispatch("onMultiDeviceEvent", s2);
                } else
                  "group" in e4 ? (s2 = { operation: 0 === Object.keys(null !== (o2 = e4.data) && void 0 !== o2 ? o2 : {}).length ? "removeSilentModeForConversation" : "setSilentModeForConversation", resource: e4.operator_resource, conversationId: e4.group, type: "groupChat", data: e4.data }, null === (n2 = r2.eventHandler) || void 0 === n2 || n2.dispatch("onMultiDeviceEvent", s2)) : (s2 = { operation: 0 === Object.keys(null !== (i2 = e4.data) && void 0 !== i2 ? i2 : {}).length ? "removeSilentModeForConversation" : "setSilentModeForConversation", resource: e4.operator_resource, conversationId: e4.user, type: "singleChat", data: e4.data }, null === (a2 = r2.eventHandler) || void 0 === a2 || a2.dispatch("onMultiDeviceEvent", s2));
            });
          }
          !function(e3) {
            e3[e3.mark_0 = 0] = "mark_0", e3[e3.mark_1 = 1] = "mark_1", e3[e3.mark_2 = 2] = "mark_2", e3[e3.mark_3 = 3] = "mark_3", e3[e3.mark_4 = 4] = "mark_4", e3[e3.mark_5 = 5] = "mark_5", e3[e3.mark_6 = 6] = "mark_6", e3[e3.mark_7 = 7] = "mark_7", e3[e3.mark_8 = 8] = "mark_8", e3[e3.mark_9 = 9] = "mark_9", e3[e3.mark_10 = 10] = "mark_10", e3[e3.mark_11 = 11] = "mark_11", e3[e3.mark_12 = 12] = "mark_12", e3[e3.mark_13 = 13] = "mark_13", e3[e3.mark_14 = 14] = "mark_14", e3[e3.mark_15 = 15] = "mark_15", e3[e3.mark_16 = 16] = "mark_16", e3[e3.mark_17 = 17] = "mark_17", e3[e3.mark_18 = 18] = "mark_18", e3[e3.mark_19 = 19] = "mark_19";
          }(it || (it = {}));
          var mt = function(e3) {
            var t3 = _e.parseNotify(e3.payload);
            switch (t3.type) {
              case "presence":
                ut.call(this, t3);
                break;
              case "reaction":
                lt.call(this, t3);
                break;
              case "thread":
                dt.call(this, t3);
                break;
              case "roaming_delete":
                pt.call(this, t3);
                break;
              case "conv":
                ht.call(this, t3);
                break;
              case "user_notification_mute":
                ft.call(this, t3);
                break;
              default:
                B.error("unexpected notify type: ".concat(t3.type));
            }
          }, gt = 2;
          function Et() {
            var e3 = this.context.appName, t3 = this.context.orgName;
            return !(!e3 || !t3) || (this.onError && this.onError({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), false);
          }
          function yt() {
            var e3, t3 = this.context.accessToken;
            if (!t3) {
              var r2 = m.create({ type: d.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
              return B.debug("token not assign error", t3), this.onError && this.onError(r2), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onError", r2), false;
            }
            return true;
          }
          function vt() {
            return yt.call(this) && Et.call(this);
          }
          function Tt(e3) {
            var t3 = e3.data, r2 = e3.type;
            return { data: { status: Object.keys(t3.errorKeys).length > 0 ? "fail" : "success", errorKeys: t3.errorKeys, successKeys: t3.successKeys }, type: r2 };
          }
          function _t(e3) {
            var t3 = e3.data, r2 = void 0;
            return Object.keys(t3.errorKeys).length > 0 && Object.keys(t3.errorKeys).forEach(function(e4) {
              var o2 = t3.errorKeys[e4];
              r2 = o2.includes("is not part of you") ? m.create({ type: d.NO_PERMISSION, message: o2 }) : o2.includes("size of metadata for this single chatroom exceeds the user defined limit") || o2.includes("total size of chatroom metadata for this app exceeds the user defined limit") || o2.includes("is exceeding maximum limit") ? m.create({ type: d.MAX_LIMIT, message: o2 }) : o2.includes("is not Legal") ? m.create({ type: d.REQUEST_PARAMETER_ERROR, message: o2 }) : o2.includes("Failed to update userMetadata. Concurrent updates not allowed") ? m.create({ type: d.OPERATION_NOT_ALLOWED, message: o2 }) : m.create({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: o2 });
            }), r2;
          }
          function Rt(e3) {
            if ("string" != typeof e3.deviceId || "" === e3.deviceId)
              throw Error('Invalid parameter: "deviceId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: e3.deviceId, device_token: e3.deviceToken, notifier_name: e3.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            B.debug("Call uploadPushTokenToServer", e3);
            var s2 = se.bind(this, a2, E.UPLOAD_PUSH_TOKEN);
            return _e.retryPromise(s2).then(function(e4) {
              var t4 = e4.entities[0] || {};
              return { type: e4.type, data: t4 };
            });
          }
          var Ot, It, St, Ct = function() {
            return Ct = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, Ct.apply(this, arguments);
          }, Nt = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, At = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, Mt = function(e3, t3, r2) {
            if (r2 || 2 === arguments.length)
              for (var o2, n2 = 0, i2 = t3.length; n2 < i2; n2++)
                !o2 && n2 in t3 || (o2 || (o2 = Array.prototype.slice.call(t3, 0, n2)), o2[n2] = t3[n2]);
            return e3.concat(o2 || Array.prototype.slice.call(t3));
          };
          !function(e3) {
            e3[e3.NORMAL = 0] = "NORMAL", e3[e3.SINGLECHAT = 1] = "SINGLECHAT", e3[e3.GROUPCHAT = 2] = "GROUPCHAT", e3[e3.CHATROOM = 3] = "CHATROOM", e3[e3.READ_ACK = 4] = "READ_ACK", e3[e3.DELIVER_ACK = 5] = "DELIVER_ACK", e3[e3.RECALL = 6] = "RECALL", e3[e3.CHANNEL_ACK = 7] = "CHANNEL_ACK", e3[e3.EDIT = 8] = "EDIT";
          }(Ot || (Ot = {})), function(e3) {
            e3[e3.APNs = 0] = "APNs", e3[e3.FCM = 1] = "FCM", e3[e3.HMSPUSH = 2] = "HMSPUSH", e3[e3.MIPUSH = 3] = "MIPUSH", e3[e3.MEIZUPUSH = 4] = "MEIZUPUSH", e3[e3.VIVOPUSH = 5] = "VIVOPUSH", e3[e3.OPPOPUSH = 6] = "OPPOPUSH", e3[e3.HONORPUSH = 7] = "HONORPUSH";
          }(It || (It = {})), function(e3) {
            e3[e3.OK = 0] = "OK", e3[e3.FAIL = 1] = "FAIL", e3[e3.UNAUTHORIZED = 2] = "UNAUTHORIZED", e3[e3.MISSING_PARAMETER = 3] = "MISSING_PARAMETER", e3[e3.WRONG_PARAMETER = 4] = "WRONG_PARAMETER", e3[e3.REDIRECT = 5] = "REDIRECT", e3[e3.TOKEN_EXPIRED = 6] = "TOKEN_EXPIRED", e3[e3.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e3[e3.NO_ROUTE = 8] = "NO_ROUTE", e3[e3.UNKNOWN_COMMAND = 9] = "UNKNOWN_COMMAND", e3[e3.PB_PARSER_ERROR = 10] = "PB_PARSER_ERROR", e3[e3.BIND_ANOTHER_DEVICE = 11] = "BIND_ANOTHER_DEVICE", e3[e3.IM_FORBIDDEN = 12] = "IM_FORBIDDEN", e3[e3.TOO_MANY_DEVICES = 13] = "TOO_MANY_DEVICES", e3[e3.PLATFORM_LIMIT = 14] = "PLATFORM_LIMIT", e3[e3.USER_MUTED = 15] = "USER_MUTED", e3[e3.ENCRYPT_DISABLE = 16] = "ENCRYPT_DISABLE", e3[e3.ENCRYPT_ENABLE = 17] = "ENCRYPT_ENABLE", e3[e3.DECRYPT_FAILURE = 18] = "DECRYPT_FAILURE", e3[e3.PERMISSION_DENIED_EXTERNAL = 19] = "PERMISSION_DENIED_EXTERNAL";
          }(St || (St = {}));
          var bt = ["txt", "img", "video", "audio", "file", "loc", "custom", "cmd", "combine"], Ut = _e.getEnvInfo();
          function Pt() {
            var e3 = "webim", t3 = "", r2 = "", o2 = [], n2 = (/* @__PURE__ */ new Date()).valueOf(), i2 = _e.getDevicePlatform(Ut);
            if (this.isFixedDeviceId) {
              var a2 = _e.getLocalDeviceInfo();
              if (a2) {
                var s2 = JSON.parse(a2);
                e3 = s2.deviceId, t3 = s2.deviceName, r2 = s2.deviceUuid;
              } else
                "webim" === this.deviceId ? (r2 = "".concat(i2, "_").concat(n2.toString()), e3 = "".concat(this.deviceId, "_").concat(r2), t3 = this.deviceId) : e3 = t3 = r2 = "webim_".concat(i2, "_").concat(this.deviceId), _e.setLocalDeviceInfo(JSON.stringify({ deviceId: e3, deviceName: t3, deviceUuid: r2 }));
            } else
              "webim" === this.deviceId ? (r2 = "random_".concat(i2, "_").concat(n2.toString()), e3 = "".concat(this.deviceId, "_").concat(r2), t3 = this.deviceId) : e3 = t3 = r2 = "webim_".concat(i2, "_").concat(this.deviceId);
            this.context.jid && (this.context.jid.clientResource = e3);
            var c2 = this.root.lookup("easemob.pb.Provision"), u2 = c2.decode(o2);
            u2.compressType = this.compressType, u2.encryptType = this.encryptType, u2.osType = this.osType, u2.version = this.version, u2.deviceName = t3, u2.resource = e3, u2.deviceUuid = r2, u2.authToken = '{"token":"$t$' + this.token + '"}', u2.sessionId = Date.now().toString() + ":", this.loginInfoCustomExt && (u2.reason = this.loginInfoCustomExt), B.debug("provision info", { version: this.version, resource: e3, isFixedDeviceId: this.isFixedDeviceId, loginInfoCustomExt: !!this.loginInfoCustomExt, token: !!this.token }), u2.actionVersion = "v5.0", u2 = c2.encode(u2).finish();
            var l2 = this.root.lookup("easemob.pb.MSync"), d2 = l2.decode(o2);
            return d2.version = this.version, d2.guid = this.context.jid, d2.auth = "$t$" + this.token, d2.command = 3, d2.deviceId = t3, d2.serviceId = this.dataReport.getServiceId(), d2.encryptType = this.encryptType, d2.payload = u2, l2.encode(d2).finish();
          }
          function wt(e3, t3) {
            var r2 = this, o2 = _e.getEnvInfo();
            if ("web" === o2.platform || "zfb" === o2.platform || "dd" === o2.platform) {
              for (var n2 = "", i2 = 0; i2 < e3.length; i2++)
                n2 += String.fromCharCode(e3[i2]);
              return n2 = Oe().btoa(n2), "web" === o2.platform ? n2 : { data: n2, isBuffer: false, complete: function() {
              }, fail: function(e4) {
                "sendSocketMessage:fail taskID not exist" !== e4.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e4.errMsg || (B.debug("send message fail and reconnect"), r2.reconnecting || r2.reconnect()), t3 && r2._msgHash && r2._msgHash[t3] && r2._msgHash[t3].fail({ id: t3 });
              } };
            }
            var a2 = e3;
            return { data: a2.buffer.slice(a2.byteOffset, a2.byteOffset + a2.byteLength), fail: function(e4) {
              "sendSocketMessage:fail taskID not exist" !== e4.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e4.errMsg || r2.reconnecting || r2.reconnect(), t3 && r2._msgHash && r2._msgHash[t3] && r2._msgHash[t3].fail({ id: t3 });
            } };
          }
          function kt(e3, t3) {
            var r2;
            return Nt(this, void 0, void 0, function() {
              var o2, n2, i2, a2, s2, c2;
              return At(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    for (B.debug("distributeMeta, metas length: ", e3.length), o2 = [], n2 = function(r3) {
                      var n3 = e3[r3], a3 = new (f())(n3.id.low, n3.id.high, n3.id.unsigned).toString(), s3 = n3.from.name, c3 = n3.to ? n3.to.name : "", u3 = !!n3.to && -1 !== n3.to.domain.indexOf("conference");
                      if (i2._load_msg_cache.some(function(e4) {
                        return e4.msgId === a3;
                      }))
                        return "continue";
                      switch (i2._load_msg_cache.length <= i2.max_cache_length || i2._load_msg_cache.shift(), i2._load_msg_cache.push({ msgId: a3, from: s3, to: c3, isGroup: u3 }), n3.ns) {
                        case 0:
                          ct.call(i2, n3);
                          break;
                        case 1:
                          o2.push(et.call(i2, n3, t3, false, true, true));
                          break;
                        case 2:
                          at.call(i2, n3);
                          break;
                        case 3:
                          st.handleRosterMsg.call(i2, n3);
                          break;
                        case 4:
                          i2.registerConfrIQHandler && i2.registerConfrIQHandler(n3, t3, i2);
                          break;
                        case 5:
                          mt.call(i2, n3);
                          break;
                        default:
                          B.error("distributeMeta", n3);
                      }
                    }, i2 = this, a2 = 0; a2 < e3.length; a2++)
                      n2(a2);
                    return [4, Promise.all(o2)];
                  case 1:
                    return s2 = u2.sent(), (c2 = s2.filter(function(e4) {
                      return e4 && "cmd" !== e4.type;
                    })).length > 0 && (null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onMessage", c2)), [2];
                }
              });
            });
          }
          function Lt(e3, t3) {
            kt.call(this, e3, t3);
          }
          function Dt(e3) {
            var t3;
            this._offlineMessagePullState === ve.SYNC_INIT && (this._offlineMessagePullState = ve.SYNC_START, this._offlineMessagePullQueue = e3.unread.reduce(function(e4, t4) {
              return e4.find(function(e5) {
                return e5.name === t4.queue.name;
              }) || e4.push(t4.queue), e4;
            }, []), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onOfflineMessageSyncStart"));
          }
          function xt(e3) {
            var t3;
            if (this._offlineMessagePullState === ve.SYNC_START) {
              var r2 = this._offlineMessagePullQueue.findIndex(function(t4) {
                return t4.name === e3.queue.name;
              });
              r2 > -1 && this._offlineMessagePullQueue.splice(r2, 1), 0 === this._offlineMessagePullQueue.length && (this._offlineMessagePullState = ve.SYNC_FINISH, null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onOfflineMessageSyncFinish"));
            }
          }
          function Gt(e3) {
            var t3 = this.root.lookup("easemob.pb.CommUnreadDL");
            t3 = t3.decode(e3.payload);
            var r2 = new (f())(t3.timestamp.low, t3.timestamp.high, t3.timestamp.unsigned).toString();
            if (this.expirationTime && this.compareTokenExpireTime(Number(r2), this.expirationTime), 0 === t3.unread.length)
              Jt.call(this);
            else {
              Dt.call(this, t3), B.debug("pull unread message", t3.unread);
              for (var o2 = 0; o2 < t3.unread.length; o2++) {
                var n2 = $t(this._queues, t3.unread[o2].queue), i2 = $t(this.unSyncQueue, t3.unread[o2].queue);
                n2 || i2 ? B.warn("receive unread message and already in queue") : this.unSyncQueue.push(t3.unread[o2].queue);
              }
              for (o2 = 0; o2 < this.unSyncQueue.length; o2++)
                this.unSyncQueue[o2].hasSync || jt.call(this, this.unSyncQueue[o2]), this.unSyncQueue[o2].hasSync = true;
            }
            Jt.call(this);
          }
          function Bt() {
            var e3 = [], t3 = this.root.lookup("easemob.pb.StatisticsBody"), r2 = t3.decode(e3);
            r2.operation = 0, r2 = t3.encode(r2).finish();
            var o2 = this.root.lookup("easemob.pb.Meta").decode(e3);
            o2.id = (/* @__PURE__ */ new Date()).valueOf(), o2.ns = 0, o2.payload = r2;
            var n2 = this.root.lookup("easemob.pb.CommSyncUL"), i2 = n2.decode(e3);
            i2.meta = o2, i2 = n2.encode(i2).finish();
            var a2 = this.root.lookup("easemob.pb.MSync"), s2 = a2.decode(e3);
            return s2.version = this.version, s2.encryptType = [0], s2.command = 0, s2.payload = i2, a2.encode(s2).finish();
          }
          function Ht(e3) {
            var t3 = [], r2 = this.root.lookup("easemob.pb.CommSyncUL"), o2 = r2.decode(t3);
            o2.queue = e3, o2 = r2.encode(o2).finish();
            var n2 = this.root.lookup("easemob.pb.MSync"), i2 = n2.decode(t3);
            return i2.version = this.version, i2.encryptType = this.encryptType, i2.command = 0, i2.payload = o2, n2.encode(i2).finish();
          }
          function jt(e3) {
            B.debug("sendBackqueue");
            var t3 = Ht.call(this, e3);
            pr.call(this, t3);
          }
          function Ft(e3, t3) {
            var r2 = [], o2 = this.root.lookup("easemob.pb.CommSyncUL"), n2 = o2.decode(r2);
            n2.queue = t3, n2.key = new (f())(e3.low, e3.high, e3.unsigned).toString(), n2 = o2.encode(n2).finish();
            var i2 = this.root.lookup("easemob.pb.MSync"), a2 = i2.decode(r2);
            return a2.version = this.version, a2.encryptType = this.encryptType, a2.command = 0, a2.payload = n2, i2.encode(a2).finish();
          }
          function Wt() {
            var e3 = this;
            this.uniPush && false === this.isRegisterPush && (this.isRegisterPush = true, this.uniPush.onRegister(function(t3) {
              B.debug("push token onRegister", t3);
              var r2 = e3.uniPushConfig || {}, o2 = r2.APNsCertificateName, n2 = void 0 === o2 ? "" : o2, i2 = r2.HMSCertificateName, a2 = void 0 === i2 ? "" : i2, s2 = r2.HONORCertificateName, c2 = void 0 === s2 ? "" : s2, u2 = r2.MEIZUCertificateName, l2 = void 0 === u2 ? "" : u2, d2 = r2.MICertificateName, p2 = void 0 === d2 ? "" : d2, h2 = r2.OPPOCertificateName, f2 = void 0 === h2 ? "" : h2, m2 = r2.VIVOCertificateName, g2 = void 0 === m2 ? "" : m2;
              switch (t3.push_type) {
                case It.APNs:
                  e3.pushCertificateName = n2;
                  break;
                case It.HMSPUSH:
                  e3.pushCertificateName = a2;
                  break;
                case It.HONORPUSH:
                  e3.pushCertificateName = c2;
                  break;
                case It.MEIZUPUSH:
                  e3.pushCertificateName = l2;
                  break;
                case It.MIPUSH:
                  e3.pushCertificateName = p2;
                  break;
                case It.OPPOPUSH:
                  e3.pushCertificateName = f2;
                  break;
                case It.VIVOPUSH:
                  e3.pushCertificateName = g2;
                  break;
                default:
                  B.error("unexpected push type", t3.push_type);
              }
              e3.pushCertificateName && t3.push_token && Rt.call(e3, { deviceId: e3.clientResource, deviceToken: t3.push_token, notifierName: e3.pushCertificateName }).then(function() {
                B.debug("uploadPushToken success");
              }).catch(function(e4) {
                B.debug("uploadPushToken failed", e4);
              });
            }));
          }
          function Kt() {
            var e3;
            this._offlineMessagePullState = ve.SYNC_INIT, this._offlineMessagePullQueue = [], this.times = 1, this.autoReconnectNumTotal = 0, this.onOpened && this.onOpened(), Wt.call(this), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onConnected"), Vt.call(this), Yt.call(this), Xt.call(this), Jt.call(this);
          }
          function qt(e3, t3) {
            B.debug("sendLastSession", e3);
            var r2 = Ft.call(this, e3, t3);
            pr.call(this, r2);
          }
          function zt(e3) {
            var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2, h2, f2, g2, E2 = this, y2 = this.root.lookup("easemob.pb.Provision").decode(e3.payload);
            if (this.context.jid && (this.context.jid.clientResource = y2.resource), this.clientResource = y2.resource, this.provisionTimer && clearTimeout(this.provisionTimer), B.debug("receiveProvisionResult", y2.status), this._isLogging = false, y2.status.errorCode === St.OK) {
              if (this.disconnectedReason = void 0, y2.authToken) {
                var v2 = JSON.parse(y2.authToken).expires_in;
                if (!this.tokenExpiredTimer && !this.tokenWillExpireTimer) {
                  var T2 = Date.now();
                  this.expirationTime = v2;
                  var _2 = this.expirationTime - T2;
                  this.expiresIn = _2 < 0 ? 0 : _2, this.tokenExpireTimeCountDown(this.expiresIn);
                }
              }
              this.reconnecting = false, this.logOut = false, "zfb" !== Ut.platform && "dd" !== Ut.platform || (this.sock.readyState = 1), this._localCache ? (null === (t3 = this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) ? Kt.call(this) : this._localCache && new this._localCache({ user: this.user, dbName: "cache_".concat(Math.abs(be(this.appKey)), "_").concat(this.user), version: gt, onInit: function() {
                return Nt(E2, void 0, void 0, function() {
                  return At(this, function(e4) {
                    return B.debug("localCache init success"), Kt.call(this), [2];
                  });
                });
              } }) : Kt.call(this), null === (r2 = this.connectionResolve) || void 0 === r2 || r2.call(this);
            } else {
              var R2 = void 0, O2 = y2.status, I2 = O2.reason, S2 = O2.errorCode;
              switch (B.debug("provision errorCode: ", S2), B.debug("provision reason: ", I2), S2) {
                case St.FAIL:
                  R2 = "Sorry, user register limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the number of user registrations limit has been reached" }) : "Sorry, user register rate limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, user register rate limit" }) : "Sorry, token expired" === I2 ? m.create({ type: d.WEBIM_TOKEN_EXPIRED, message: "Sorry, token expired" }) : "Sorry, token or password does not match login info" === I2 ? m.create({ type: d.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "INVALID_TOKEN" }) : "Sorry, user not found" === I2 ? m.create({ type: d.USER_NOT_FOUND, message: "User not found" }) : m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (o2 = this.connectionReject) || void 0 === o2 || o2.call(this, R2), null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onError", R2);
                  break;
                case St.WRONG_PARAMETER:
                  R2 = m.create({ type: d.REQUEST_PARAMETER_ERROR, message: "Invalid parameter" }), null === (i2 = this.connectionReject) || void 0 === i2 || i2.call(this, R2), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onError", R2);
                  break;
                case St.UNAUTHORIZED:
                  R2 = m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (s2 = this.connectionReject) || void 0 === s2 || s2.call(this, R2), null === (c2 = this.eventHandler) || void 0 === c2 || c2.dispatch("onError", R2);
                  break;
                case St.IM_FORBIDDEN:
                  R2 = m.create({ type: d.WEBIM_SERVER_SERVING_DISABLED, message: "Server serving disabled." }), null === (u2 = this.connectionReject) || void 0 === u2 || u2.call(this, R2), null === (l2 = this.eventHandler) || void 0 === l2 || l2.dispatch("onError", R2);
                  break;
                case St.PERMISSION_DENIED:
                  R2 = "Sorry, the app month live count limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the monthly active user limit for this app has been reached" }) : "Sorry, the app day live count limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the daily active user limit for this app has been reached" }) : "Sorry, the app online count limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the maximum number limit of online users for this app has been reached" }) : m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (p2 = this.connectionReject) || void 0 === p2 || p2.call(this, R2), null === (h2 = this.eventHandler) || void 0 === h2 || h2.dispatch("onError", R2);
                  break;
                default:
                  R2 = m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: I2 }), null === (f2 = this.connectionReject) || void 0 === f2 || f2.call(this, R2), null === (g2 = this.eventHandler) || void 0 === g2 || g2.dispatch("onError", R2);
              }
              this.disconnectedReason = R2;
            }
          }
          function Vt() {
            var e3, t3;
            if ((null === (e3 = this.unMSyncSendMsgMap) || void 0 === e3 ? void 0 : e3.size) > 0) {
              for (var r2 = Array.from(this.unMSyncSendMsgMap.keys()), o2 = 0; o2 < r2.length; o2++) {
                var n2 = this.unMSyncSendMsgMap.get(r2[o2]);
                pr.call(this, n2, r2[o2]);
              }
              null === (t3 = this.unMSyncSendMsgMap) || void 0 === t3 || t3.clear();
            }
          }
          function Jt() {
            var e3 = Bt.call(this);
            pr.call(this, e3);
          }
          function Xt() {
            B.debug("sendUnreadDeal");
            var e3 = Zt.call(this);
            pr.call(this, e3);
          }
          function Yt() {
            var e3 = this;
            Qt.call(this), this.heartBeatID = setInterval(function() {
              (Date.now() - e3.lastHeartbeat) / 1e3 >= 30 && (B.debug("send heart beat"), Xt.call(e3), e3.lastHeartbeat = Date.now());
            }, this.heartBeatWait);
          }
          function Qt() {
            clearInterval(this.heartBeatID);
          }
          function Zt() {
            var e3 = this.root.lookup("easemob.pb.MSync"), t3 = e3.decode([]);
            return t3.version = this.version, t3.encryptType = this.encryptType, t3.command = 1, e3.encode(t3).finish();
          }
          function $t(e3, t3) {
            return e3.some(function(e4) {
              return e4.name === t3.name;
            });
          }
          function er(e3) {
            var t3 = this.root.lookup("easemob.pb.CommNotice"), r2 = t3.decode(e3.payload), o2 = $t(this._queues, r2.queue);
            B.debug("receive notice", t3, this._queues);
            var n2 = $t(this.unSyncQueue, r2.queue);
            o2 || n2 || this.clientResource === r2.queue.clientResource && r2.queue.name === this.context.userId || (this._queues.push(r2.queue), 1 === this._queues.length && jt.call(this, r2.queue));
          }
          function tr(e3) {
            return Nt(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2;
              return At(this, function(u2) {
                if (t3 = _e.getEnvInfo(), r2 = this.root.lookup("easemob.pb.MSync"), "miniCore" === this.name) {
                  try {
                    n2 = new Uint8Array(e3.data), o2 = r2.decode(n2);
                  } catch (e4) {
                    throw new Error("decode message fail.");
                  }
                  return [2, o2];
                }
                if ("web" === t3.platform || "zfb" === t3.platform || "dd" === t3.platform) {
                  for (i2 = Oe().atob(e3.data), a2 = [], s2 = 0, c2 = i2.length; s2 < c2; ++s2)
                    a2.push(i2.charCodeAt(s2));
                  return [2, r2.decode(a2)];
                }
                try {
                  o2 = r2.decode(e3.data);
                } catch (e4) {
                  throw new Error("decode message fail.");
                }
                return [2, o2];
              });
            });
          }
          function rr(e3) {
            var t3 = this;
            this.lastHeartbeat = Date.now(), this.probingTimer && clearTimeout(this.probingTimer), e3.then(function(e4) {
              if (e4)
                switch (e4.command) {
                  case 0:
                    or.call(t3, e4);
                    break;
                  case 1:
                    Gt.call(t3, e4);
                    break;
                  case 2:
                    er.call(t3, e4);
                    break;
                  case 3:
                    zt.call(t3, e4);
                    break;
                  default:
                    B.error("unexpected msync command: ".concat(e4.command));
                }
              else
                B.error("unexpected msync result: ".concat(e4));
            });
          }
          function or(e3) {
            var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2, h2, g2, E2, y2, v2, _2, R2, O2, C2, N2, A2, M2, b2, U2, P2, w2, k2, L2, D2, x2, G2, H2, j2, F2, W2, K2, q2, z2, V2, J2, X2, Y2, Q2, Z2, $3;
            return Nt(this, void 0, void 0, function() {
              var ee2, te2, re2, oe2, ne2, ie2, ae2, se2, ce2, ue2, le2, de2, pe2, he2, fe2, me2, ge2, Ee2, ye2, ve2, Te2, Re2, Oe2, Ie2, Se2, Ce2, Ae2, Me2, be2, Ue2, Pe2, we2, ke2, Le2, De2, xe2, Ge2, Be2, He2, je2, Fe2, We2, Ke2, qe2 = this;
              return At(this, function(ze2) {
                switch (ze2.label) {
                  case 0:
                    if (ee2 = (ee2 = this.root.lookup("easemob.pb.CommSyncDL")).decode(e3.payload), te2 = new (f())(ee2.serverId.low, ee2.serverId.high, ee2.serverId.unsigned).toString(), re2 = new (f())(ee2.metaId.low, ee2.metaId.high, ee2.metaId.unsigned).toString(), !(Number(re2) > 0))
                      return [3, 23];
                    if (clearTimeout(null === (t3 = this._msgHash[re2]) || void 0 === t3 ? void 0 : t3.messageTimer), !ee2.status)
                      return [3, 22];
                    if (0 !== ee2.status.errorCode)
                      return [3, 21];
                    if (null == (oe2 = this._msgHash[re2]) ? void 0 : oe2.isHandleChatroom) {
                      try {
                        ne2 = "join" === (null === (r2 = this._msgHash[re2]) || void 0 === r2 ? void 0 : r2.operation), (null === (o2 = this._msgHash[re2]) || void 0 === o2 ? void 0 : o2.resolve) instanceof Function && ne2 && this._msgHash[re2].resolve({ type: 0, data: { action: "apply", id: this._msgHash[re2].roomId, result: true, user: this.context.userId } }), (null === (n2 = this._msgHash[re2]) || void 0 === n2 ? void 0 : n2.success) instanceof Function && ne2 && this._msgHash[re2].success({ type: 0, data: { action: "apply", id: this._msgHash[re2].roomId, result: true, user: this.context.userId } }), (null === (i2 = this._msgHash[re2]) || void 0 === i2 ? void 0 : i2.resolve) instanceof Function && !ne2 && this._msgHash[re2].resolve({ type: 0, data: { result: true } }), (null === (a2 = this._msgHash[re2]) || void 0 === a2 ? void 0 : a2.success) instanceof Function && !ne2 && this._msgHash[re2].success({ type: 0, data: { result: true } }), S.has(re2) && (ie2 = S.get(re2), De2 = ie2.rpt, xe2 = ie2.requestName, De2({ isEndApi: true, data: { isSuccess: 1, requestName: xe2, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.success } }), S.delete(re2));
                      } catch (e4) {
                        S.has(re2) && (ae2 = S.get(re2), De2 = ae2.rpt, xe2 = ae2.requestName, De2({ isEndApi: true, data: { isSuccess: 0, requestName: xe2, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.failed, codeDesc: "when executing success function error" } }), S.delete(re2)), Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: e4 }), this.onError && this.onError(Be2), null === (s2 = this.eventHandler) || void 0 === s2 || s2.dispatch("onError", Be2);
                      }
                      delete this._msgHash[re2];
                    }
                    return !oe2 || oe2.isHandleChatroom ? [3, 20] : (se2 = null, ce2 = "", ue2 = 0, le2 = null, this._msgHash[re2].thirdMessage ? (this._msgHash[re2].thirdMessage.id = ee2.serverId, this._msgHash[re2].thirdMessage.timestamp = ee2.timestamp, [4, et.call(this, this._msgHash[re2].thirdMessage, ee2.status, true, true)]) : [3, 2]);
                  case 1:
                    le2 = ze2.sent(), ze2.label = 2;
                  case 2:
                    if (0 === ee2.metas.length)
                      return [3, 13];
                    ze2.label = 3;
                  case 3:
                    switch (ze2.trys.push([3, 12, , 13]), de2 = ee2.metas[0], pe2 = ee2.status, de2.ns) {
                      case 1:
                        return [3, 4];
                      case 5:
                        return [3, 9];
                    }
                    return [3, 10];
                  case 4:
                    return this.useReplacedMessageContents ? [4, et.call(this, de2, pe2, true, true)] : [3, 8];
                  case 5:
                    return le2 = ze2.sent(), [4, null === (u2 = null === (c2 = this._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 ? void 0 : u2.getMessageByServerMsgId(re2)];
                  case 6:
                    return (he2 = ze2.sent()) ? [4, null === (p2 = null === (l2 = this._localCache) || void 0 === l2 ? void 0 : l2.getInstance()) || void 0 === p2 ? void 0 : p2.putMessageToDB(Ct(Ct(Ct({}, he2), le2), { id: re2 }))] : [3, 8];
                  case 7:
                    ze2.sent(), ze2.label = 8;
                  case 8:
                    return [3, 11];
                  case 9:
                    return (fe2 = _e.parseNotify(ee2.metas[0].payload)).edit_msg && (me2 = fe2.edit_msg, ge2 = me2.count, Ee2 = me2.operator, ye2 = me2.edit_time, ve2 = me2.sender, Te2 = me2.send_time, se2 = { operationTime: ye2, operatorId: Ee2, operationCount: ge2 }, ce2 = ve2, ue2 = Number(Te2)), [3, 11];
                  case 10:
                    return B.error("decode local meta error", de2), [3, 11];
                  case 11:
                    return [3, 13];
                  case 12:
                    return Re2 = ze2.sent(), Be2 = m.create({ type: d.WEBIM_LOAD_MSG_ERROR, message: "decode local meta message error", data: Re2 }), this.onError && this.onError(Be2), null === (h2 = this.eventHandler) || void 0 === h2 || h2.dispatch("onError", Be2), [3, 13];
                  case 13:
                    I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.success, msgId: te2 } }), I.delete(re2)), ze2.label = 14;
                  case 14:
                    return ze2.trys.push([14, 18, , 19]), Oe2 = { localMsgId: re2, serverMsgId: te2 }, se2 && (this._msgHash[re2].modifiedInfo = se2, Ie2 = this._msgHash[re2], Se2 = Ie2.editMessageId, we2 = Ie2.type, Ce2 = Ie2.chatType, Ae2 = Ie2.msg, Me2 = Ie2.to, be2 = Ie2.translations, Ue2 = { id: Se2, type: we2, chatType: Ce2, msg: Ae2, modifiedInfo: se2, to: Me2, from: ce2, time: Number(ue2) }, be2 && (Ue2.translations = be2), Oe2.message = Ue2, null === (y2 = null === (E2 = null === (g2 = this._localCache) || void 0 === g2 ? void 0 : g2.getInstance()) || void 0 === E2 ? void 0 : E2.getMessageByServerMsgId(Se2)) || void 0 === y2 || y2.then(function(e4) {
                      var t4, r3;
                      e4 && "txt" === e4.type && (null === (r3 = null === (t4 = qe2._localCache) || void 0 === t4 ? void 0 : t4.getInstance()) || void 0 === r3 || r3.putMessageToDB(Ct(Ct({}, e4), { msg: Ue2.msg, modifiedInfo: Ue2.modifiedInfo, translations: Ue2.translations })));
                    })), le2 && (Oe2.message = le2), [4, null === (_2 = null === (v2 = this._localCache) || void 0 === v2 ? void 0 : v2.getInstance()) || void 0 === _2 ? void 0 : _2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.SUCCESS })];
                  case 15:
                    return ze2.sent(), (null === (R2 = this._msgHash[re2]) || void 0 === R2 ? void 0 : R2.success) instanceof Function ? [4, this._msgHash[re2].success(re2, te2)] : [3, 17];
                  case 16:
                    ze2.sent(), ze2.label = 17;
                  case 17:
                    return (null === (O2 = this._msgHash[re2]) || void 0 === O2 ? void 0 : O2.resolve) instanceof Function && this._msgHash[re2].resolve(Oe2), [3, 19];
                  case 18:
                    return Pe2 = ze2.sent(), Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: Pe2 }), this.onError && this.onError(Be2), null === (C2 = this.eventHandler) || void 0 === C2 || C2.dispatch("onError", Be2), [3, 19];
                  case 19:
                    this.onReceivedMessage && this.onReceivedMessage({ id: re2, mid: te2, to: this._msgHash[re2].to, time: 0 }), null === (N2 = this.eventHandler) || void 0 === N2 || N2.dispatch("onReceivedMessage", { id: re2, mid: te2, to: this._msgHash[re2].to }), delete this._msgHash[re2], ze2.label = 20;
                  case 20:
                    return [3, 22];
                  case 21:
                    if (15 === ee2.status.errorCode)
                      (null === (A2 = this._msgHash[re2]) || void 0 === A2 ? void 0 : A2.fail) instanceof Function && this._msgHash[re2].fail({ type: d.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject({ type: d.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), null === (b2 = null === (M2 = this._localCache) || void 0 === M2 ? void 0 : M2.getInstance()) || void 0 === b2 || b2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL });
                    else if (1 === ee2.status.errorCode) {
                      switch (we2 = void 0, ee2.status.reason) {
                        case "blocked":
                          we2 = d.PERMISSION_DENIED;
                          break;
                        case "group not found":
                          we2 = d.GROUP_NOT_EXIST;
                          break;
                        case "not in group or chatroom":
                          we2 = d.GROUP_NOT_JOINED;
                          break;
                        case "exceed recall time limit":
                          we2 = d.MESSAGE_RECALL_TIME_LIMIT;
                          break;
                        case "message recall disabled":
                          we2 = d.SERVICE_NOT_ENABLED;
                          break;
                        case "not in group or chatroom white list":
                          we2 = d.SERVICE_NOT_ALLOW_MESSAGING;
                          break;
                        case "nonroster":
                          we2 = d.USER_NOT_FRIEND, ee2.status.reason = "not contact";
                          break;
                        case "group is disabled":
                          we2 = d.GROUP_IS_DISABLED, ee2.status.reason = "group is disabled";
                          break;
                        case "limit directed users":
                          we2 = d.MAX_LIMIT;
                          break;
                        case "Sorry, edit limit reached":
                          we2 = d.MAX_LIMIT, ee2.status.reason = "Modify message limit reached";
                          break;
                        case "Sorry, message does not exist":
                          we2 = d.MODIFY_MESSAGE_NOT_EXIST, ee2.status.reason = "The message does not exist.";
                          break;
                        case "Sorry, You do not have permission":
                          we2 = d.PERMISSION_DENIED, ee2.status.reason = "You do not have the modified permission.";
                          break;
                        case "Sorry, format is incorrect":
                          we2 = d.MODIFY_MESSAGE_FORMAT_ERROR, ee2.status.reason = "The modify messaged format error.";
                          break;
                        case "Sorry, edit is not available":
                          we2 = d.SERVICE_NOT_ENABLED, ee2.status.reason = "The message modify function is not activated.";
                          break;
                        case "Sorry, edit fail":
                          we2 = d.MODIFY_MESSAGE_FAILED, ee2.status.reason = "Modify message failed.";
                          break;
                        default:
                          ee2.status.reason.includes("grpID") && ee2.status.reason.includes("does not exist!") ? (we2 = d.CHATROOM_NOT_EXIST, ee2.status.reason = "The chat room dose not exist.") : ee2.status.reason.includes("username") && ee2.status.reason.includes("doesn't exist!") ? we2 = d.USER_NOT_FOUND : "group member list is full!" === ee2.status.reason ? we2 = d.CHATROOM_MEMBERS_FULL : ee2.status.reason.includes("can not join this group") && ee2.status.reason.includes("is in the blacklist") ? (we2 = d.PERMISSION_DENIED, ee2.status.reason = "permission denied") : "can not operate this group, reason: group is disabled" === ee2.status.reason ? we2 = d.GROUP_IS_DISABLED : ee2.status.reason.includes("moderation") ? we2 = d.MESSAGE_MODERATION_BLOCKED : ee2.status.reason.includes("group ID illegal, please check it") ? (we2 = d.REQUEST_PARAMETER_ERROR, ee2.status.reason = "Invalid parameter") : we2 = ee2.status.reason.includes("has create too many chatrooms") || ee2.status.reason.includes("has joined too many chatrooms") ? d.MAX_LIMIT : ee2.status.reason.includes("auto create failed") ? d.SERVER_BUSY : d.SERVER_UNKNOWN_ERROR;
                      }
                      this._msgHash[re2] && ((null === (U2 = this._msgHash[re2]) || void 0 === U2 ? void 0 : U2.isHandleChatroom) ? (Ge2 = m.create({ type: we2, message: ee2.status.reason || "", data: "" }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].error instanceof Function && this._msgHash[re2].error(Ge2), S.has(re2) && (ke2 = T.failed, we2 === d.CHATROOM_NOT_EXIST ? ke2 = T.notFound : we2 === d.CHATROOM_MEMBERS_FULL && (ke2 = T.reachLimit), Le2 = S.get(re2), De2 = Le2.rpt, xe2 = Le2.requestName, De2({ isEndApi: true, data: { isSuccess: 0, requestName: xe2, requestMethod: "WEBSOCKET", requestUrl: this.url, code: ke2, codeDesc: ee2.status.reason } }), S.delete(re2))) : (Ge2 = m.create({ type: we2, message: ee2.status.reason || "", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: we2, reason: ee2.status.reason ? ee2.status.reason : "", data: { id: re2, mid: te2 } }), null === (w2 = null === (P2 = this._localCache) || void 0 === P2 ? void 0 : P2.getInstance()) || void 0 === w2 || w2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })), delete this._msgHash[re2]);
                    } else if (7 === ee2.status.errorCode)
                      "sensitive words" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: re2, mid: te2, reason: "sensitive words" } }), null === (L2 = null === (k2 = this._localCache) || void 0 === k2 ? void 0 : k2.getInstance()) || void 0 === L2 || L2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "blocked by mod_antispam" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: re2, mid: te2, reason: "blocked by mod_antispam" } }), null === (x2 = null === (D2 = this._localCache) || void 0 === D2 ? void 0 : D2.getInstance()) || void 0 === x2 || x2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "user is mute" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail(Ge2), null === (H2 = null === (G2 = this._localCache) || void 0 === G2 ? void 0 : G2.getInstance()) || void 0 === H2 || H2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "traffic limit" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail(Ge2), null === (F2 = null === (j2 = this._localCache) || void 0 === j2 ? void 0 : j2.getInstance()) || void 0 === F2 || F2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "Sorry, data is too large" === ee2.status.reason && this._msgHash[re2] && (Ge2 = m.create({ type: d.MESSAGE_SIZE_LIMIT, message: "Sorry, data is too large", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail(Ge2), null === (K2 = null === (W2 = this._localCache) || void 0 === W2 ? void 0 : W2.getInstance()) || void 0 === K2 || K2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL }));
                    else if (19 === ee2.status.errorCode)
                      this._msgHash[re2] && (I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: d.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: ee2.status.reason || "", msgId: te2 } }), I.delete(re2)), Ge2 = m.create({ type: d.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: ee2.status.reason || "", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: re2, mid: te2, reason: ee2.status.reason } }), null === (z2 = null === (q2 = this._localCache) || void 0 === q2 ? void 0 : q2.getInstance()) || void 0 === z2 || z2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL }));
                    else if (this._msgHash[re2]) {
                      I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: d.WEBIM_LOAD_MSG_ERROR, codeDesc: (null === (V2 = ee2.status) || void 0 === V2 ? void 0 : V2.reason) || "", msgId: te2 } }), I.delete(re2));
                      try {
                        Ge2 = m.create({ type: d.WEBIM_LOAD_MSG_ERROR, message: (null === (J2 = ee2.status) || void 0 === J2 ? void 0 : J2.reason) || "", data: { id: re2, mid: te2, reason: ee2.status && ee2.status.reason } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), null === (Y2 = null === (X2 = this._localCache) || void 0 === X2 ? void 0 : X2.getInstance()) || void 0 === Y2 || Y2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL }), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.WEBIM_LOAD_MSG_ERROR, data: { errorCode: ee2.status && ee2.status.errorCode, reason: ee2.status && ee2.status.reason } });
                      } catch (e4) {
                        Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: e4 }), this.onError && this.onError(Be2), null === (Q2 = this.eventHandler) || void 0 === Q2 || Q2.dispatch("onError", Be2);
                      }
                      delete this._msgHash[re2];
                    } else
                      I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: te2 } }), I.delete(re2)), Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(Be2), null === (Z2 = this.eventHandler) || void 0 === Z2 || Z2.dispatch("onError", Be2);
                    ze2.label = 22;
                  case 22:
                    return [2];
                  case 23:
                    if (ee2.metas && 0 !== ee2.metas.length)
                      try {
                        Lt.call(this, ee2.metas, ee2.status);
                      } catch (e4) {
                        Be2 = m.create({ type: d.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: e4 }), B.error("decode message error", e4), this.onError && this.onError(Be2), null === ($3 = this.eventHandler) || void 0 === $3 || $3.dispatch("onError", Be2);
                      } finally {
                        ee2.isLast ? (B.debug("metas & CommSyncDLMessage.isLast", ee2.isLast), He2 = -1, this._queues.some(function(e4, t4) {
                          return e4.name === ee2.name && (He2 = t4, true);
                        }) && He2 > 0 && this._queues.splice(He2, 1), this._queues.length > 0 && jt.call(this, this._queues[0]), je2 = -1, this.unSyncQueue.some(function(e4, t4) {
                          return e4.name === ee2.queue.name && (je2 = t4, true);
                        }) && this.unSyncQueue.splice(je2, 1), xt.call(this, ee2)) : ee2.nextKey && (Ke2 = new (f())(ee2.nextKey.low, ee2.nextKey.high, ee2.nextKey.unsigned).toString(), B.debug("nexKey:", Ke2, "this.nextKey:", this.nexKey), Ke2 !== this.nexKey && (this.nexKey = Ke2, qt.call(this, ee2.nextKey, ee2.queue)));
                      }
                    else
                      ee2.isLast ? (B.debug("CommSyncDLMessage.isLast", ee2.isLast), Fe2 = -1, this._queues.some(function(e4, t4) {
                        return e4.name === ee2.queue.name && (Fe2 = t4, true);
                      }) && this._queues.splice(Fe2, 1), this._queues.length > 0 && jt.call(this, this._queues[0]), We2 = -1, this.unSyncQueue.some(function(e4, t4) {
                        return e4.name === ee2.queue.name && (We2 = t4, true);
                      }) && this.unSyncQueue.splice(We2, 1), xt.call(this, ee2)) : ee2.nextKey && (Ke2 = new (f())(ee2.nextKey.low, ee2.nextKey.high, ee2.nextKey.unsigned).toString(), B.debug("nexKey:", Ke2, "this.nextKey:", this.nexKey), Ke2 !== this.nexKey && (this.nexKey = Ke2, qt.call(this, ee2.nextKey, ee2.queue)));
                    return [2];
                }
              });
            });
          }
          function nr(e3) {
            var t3 = [], r2 = this.root.lookup("easemob.pb.KeyValue"), o2 = [];
            for (var n2 in e3) {
              var i2 = r2.decode(t3);
              if (i2.key = n2, void 0 !== e3[n2]) {
                if ("object" == typeof e3[n2])
                  i2.type = 8, i2.stringValue = JSON.stringify(e3[n2]);
                else if ("string" == typeof e3[n2])
                  i2.type = 7, i2.stringValue = e3[n2];
                else if ("boolean" == typeof e3[n2])
                  i2.type = 1, i2.varintValue = true === e3[n2] ? 1 : 0;
                else if (Number.isInteger(e3[n2]))
                  i2.type = 2, i2.varintValue = e3[n2];
                else if ("bigint" == typeof e3[n2] || "symbol" == typeof e3[n2] || "function" == typeof e3[n2] || Number.isNaN(e3[n2]))
                  i2.type = 7, i2.stringValue = e3[n2].toString();
                else {
                  if ("number" != typeof e3[n2] || Number.isInteger(e3[n2]))
                    continue;
                  i2.type = 6, i2.doubleValue = e3[n2];
                }
                o2.push(i2);
              }
            }
            return o2;
          }
          function ir(e3) {
            var t3, r2, o2, n2 = [];
            if (this.root) {
              var i2, a2 = this.root.lookup("easemob.pb.MessageBody.Content").decode(n2);
              switch (i2 = !e3.group && "groupchat" !== (null === (t3 = null == e3 ? void 0 : e3.chatType) || void 0 === t3 ? void 0 : t3.toLowerCase()) || e3.roomType ? e3.group && e3.roomType || "chatroom" === (null === (r2 = null == e3 ? void 0 : e3.chatType) || void 0 === r2 ? void 0 : r2.toLowerCase()) ? "chatRoom" : "singleChat" : "groupChat", e3.type) {
                case "txt":
                  a2.type = 0, a2.text = e3.msg;
                  break;
                case "img":
                  a2.type = 1, e3.body ? (a2.displayName = e3.body.filename, a2.remotePath = e3.body.url, a2.secretKey = e3.body.secret, a2.fileLength = e3.body.file_length, a2.size = e3.body.size, a2.thumbnailDisplayName = e3.body.filename) : e3.file ? (a2.displayName = e3.file.filename, a2.remotePath = e3.file.url, a2.secretKey = e3.file.secret, a2.fileLength = e3.file.file_length, a2.size = e3.file.size, a2.thumbnailDisplayName = e3.file.filename) : (a2.displayName = e3.filename, a2.remotePath = e3.url, a2.secretKey = e3.secret, a2.fileLength = e3.file_length, a2.size = e3.size, a2.thumbnailDisplayName = e3.filename), e3.isBuildCombinedMsg && (a2.remotePath = e3.url, a2.secretKey = e3.secret, a2.size = { height: e3.height, width: e3.width });
                  break;
                case "video":
                  a2.type = 2, e3.body ? (a2.displayName = e3.body.filename, a2.remotePath = e3.body.url, a2.secretKey = e3.body.secret, a2.fileLength = e3.body.file_length, a2.duration = e3.body.length, a2.thumbnailDisplayName = e3.body.filename, a2.thumbnailRemotePath = this.useOwnUploadFun ? "" : "".concat(e3.body.url, "?vframe=true"), a2.thumbnailSecretKey = this.useOwnUploadFun ? "" : e3.body.secret) : e3.isBuildCombinedMsg && (a2.displayName = e3.filename, a2.remotePath = e3.url, a2.secretKey = e3.secret, a2.fileLength = e3.file_length, a2.duration = e3.length, a2.thumbnailDisplayName = e3.filename, a2.thumbnailRemotePath = e3.thumb, a2.thumbnailSecretKey = e3.thumb_secret);
                  break;
                case "loc":
                  a2.type = 3, a2.latitude = e3.lat, a2.longitude = e3.lng, a2.address = e3.addr, a2.buildingName = e3.buildingName, a2.latitude = e3.lat;
                  break;
                case "audio":
                  a2.type = 4, e3.body ? (a2.displayName = e3.body.filename, a2.remotePath = e3.body.url, a2.secretKey = e3.body.secret, a2.fileLength = e3.body.file_length, a2.duration = e3.body.length, a2.thumbnailDisplayName = e3.body.filename) : e3.isBuildCombinedMsg && (a2.displayName = e3.filename, a2.remotePath = e3.url, a2.secretKey = e3.secret, a2.fileLength = e3.file_length, a2.duration = e3.length, a2.thumbnailDisplayName = e3.filename);
                  break;
                case "file":
                  a2.type = 5, e3.body ? (a2.displayName = e3.body.filename, a2.remotePath = e3.body.url, a2.secretKey = e3.body.secret, a2.fileLength = e3.body.file_length, a2.thumbnailDisplayName = e3.body.filename) : e3.isBuildCombinedMsg && (a2.displayName = e3.filename, a2.remotePath = e3.url, a2.secretKey = e3.secret, a2.fileLength = e3.file_length, a2.thumbnailDisplayName = e3.filename);
                  break;
                case "cmd":
                  a2.type = 6, a2.action = e3.action;
                  break;
                case "custom":
                  a2.type = 7, a2.customEvent = e3.customEvent, a2.customExts = nr.call(this, e3.customExts);
                  break;
                case "combine":
                  a2.type = 0, a2.subType = 0, a2.text = e3.compatibleText, a2.displayName = e3.filename, a2.remotePath = e3.url, a2.secretKey = e3.secret, a2.fileLength = e3.file_length, a2.title = e3.title, a2.summary = e3.summary, a2.combineLevel = e3.combineLevel;
              }
              var s2 = [];
              e3.ext && (s2 = nr.call(this, e3.ext));
              var c2 = this.root.lookup("easemob.pb.MessageBody"), u2 = c2.decode(n2), l2 = e3.from || this.context.jid.name;
              u2.from = { name: e3.isBuildCombinedMsg ? l2 : this.context.jid.name };
              var p2 = e3.to.indexOf("/"), h2 = p2 > -1 ? e3.to.substring(0, p2) : e3.to;
              if (u2.to = { name: h2 }, "channel" === e3.type)
                u2.type = Ot.CHANNEL_ACK;
              else if ("recall" === e3.type)
                u2.type = Ot.RECALL, u2.ackMessageId = e3.ackId;
              else if ("delivery" === e3.type)
                u2.type = Ot.DELIVER_ACK, u2.ackMessageId = e3.ackId;
              else if ("read" === e3.type)
                u2.type = Ot.READ_ACK, u2.ackMessageId = e3.ackId, "groupChat" === i2 && (u2.msgConfig = { allowGroupAck: true }, u2.ackContent = e3.ackContent);
              else if ("chatRoom" === i2)
                u2.type = Ot.CHATROOM;
              else if ("groupChat" === i2) {
                if (u2.type = Ot.GROUPCHAT, e3.msgConfig) {
                  var m2 = e3.msgConfig.allowGroupAck;
                  u2.msgConfig = { allowGroupAck: !!m2 };
                }
              } else
                "singleChat" === i2 && (u2.type = Ot.SINGLECHAT);
              e3.editMessageId && (u2.type = Ot.EDIT, u2.editMessageId = e3.editMessageId), u2.contents = [a2], u2.ext = s2;
              var g2 = function(e4) {
                var t4 = {};
                return "translations" in e4 && (t4.translations = e4.translations), "isChatThread" in e4 && e4.isChatThread && (t4.thread = {}), Object.keys(t4).length > 0 ? JSON.stringify(t4) : "";
              }(e3);
              g2 && (u2.meta = g2), u2 = c2.encode(u2).finish();
              var E2 = this.root.lookup("easemob.pb.Meta"), y2 = E2.decode(n2);
              y2.id = e3.id;
              var v2 = "easemob.com";
              if ("chatRoom" !== i2 && "groupChat" !== i2 || (v2 = "conference.easemob.com"), y2.to = { appKey: this.appKey, name: h2, domain: v2 }, p2 > -1 && (y2.to.clientResource = e3.to.substring(p2 + 1, e3.to.length)), "chatRoom" === i2 && (y2.ext = nr.call(this, function(e4) {
                return { chatroom_msg_tag: "high" === e4.priority ? 0 : "low" === e4.priority ? 2 : 1 };
              }(e3))), "recall" === e3.type && e3.metaExt && (y2.ext = nr.call(this, { recallMessageExtensionInfo: e3.metaExt })), y2.ns = 1, y2.payload = u2, y2.routetype = e3.deliverOnlineOnly ? 1 : 0, "singleChat" !== i2 && Array.isArray(e3.receiverList) && (null === (o2 = e3.receiverList) || void 0 === o2 ? void 0 : o2.length) > 0 && (y2.directedUsers = e3.receiverList, y2.routetype = 2), e3.isBuildCombinedMsg)
                return y2.timestamp = f().fromValue(e3.time), E2.encode(y2).finish();
              var T2 = this.root.lookup("easemob.pb.CommSyncUL"), _2 = T2.decode(n2);
              _2.meta = y2, !e3.isPing && sr.call(this, e3, y2), _2 = T2.encode(_2).finish();
              var R2 = this.root.lookup("easemob.pb.MSync"), O2 = R2.decode(n2);
              return O2.version = this.version, O2.encryptType = this.encryptType, O2.command = 0, O2.payload = _2, R2.encode(O2).finish();
            }
            e3.fail && e3.fail({ type: d.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
          }
          function ar(e3) {
            var t3, r2, o2 = this, n2 = Ct({}, e3);
            if (e3.file)
              return n2.accessToken = this.token, n2.appKey = this.appKey, n2.apiUrl = this.apiUrl, n2.body && n2.body.url ? ir.call(this, n2) : new Promise(function(t4, r3) {
                var i3 = n2.onFileUploadComplete;
                n2.onFileUploadComplete = function(t5) {
                  var r4, a3, s3, c2, u2, l2;
                  if (t5.entities[0]["file-metadata"]) {
                    var d2 = t5.entities[0]["file-metadata"]["content-length"];
                    n2.file_length = d2, n2.filetype = t5.entities[0]["file-metadata"]["content-type"], d2 > 204800 && (n2.thumbnail = true);
                  }
                  var p2 = "".concat(o2.apiUrl, "/").concat(o2.orgName, "/").concat(o2.appName, "/chatfiles/").concat(t5.entities[0].uuid);
                  n2.body = { type: n2.type || "file", secret: t5.entities[0]["share-secret"], filename: n2.file.filename || n2.filename, url: p2, length: n2.length || 0, filetype: n2.filetype || n2.file.filetype, file_length: (null === (a3 = null === (r4 = n2.file) || void 0 === r4 ? void 0 : r4.data) || void 0 === a3 ? void 0 : a3.size) || 0, size: { width: n2.width || 0, height: n2.height || 0 } }, n2.file.url = t5.uri, e3.secret = t5.entities[0]["share-secret"], t5.url = e3.url = "".concat(p2, "?em-redirect=true&share-secret=").concat(t5.entities[0]["share-secret"]), e3.file_length = n2.file_length = (null === (c2 = null === (s3 = n2.file) || void 0 === s3 ? void 0 : s3.data) || void 0 === c2 ? void 0 : c2.size) || 0, "img" === n2.type && (e3.thumb = "".concat(e3.url, "&thumbnail=true"), t5.thumb = "".concat(t5.url, "&thumbnail=true")), "video" === n2.type && (e3.thumb = "".concat(e3.url, "&vframe=true"), e3.thumb_secret = t5.entities[0]["share-secret"], t5.thumb = "".concat(t5.url, "&vframe=true")), i3 instanceof Function && i3(t5, n2.id);
                  var h2 = ir.call(o2, n2);
                  I.size <= C && I.set(n2.id, { rpt: o2.dataReport.geOperateFun({ operationName: E.SEND_MSG }) }), null === (l2 = null === (u2 = o2._localCache) || void 0 === u2 ? void 0 : u2.getInstance()) || void 0 === l2 || l2.storeMessage(e3, Ne.INPROGRESS), pr.call(o2, h2);
                }, _e.uploadFile.call(o2, n2, E.UPLOAD_MSG_ATTACH);
              });
            if ("combine" === e3.type) {
              n2.accessToken = this.token, n2.appKey = this.appKey, n2.apiUrl = this.apiUrl;
              var i2 = n2.onFileUploadComplete, a2 = n2.onFileUploadError;
              return new Promise(function(t4, r3) {
                var s3, c2, u2, l2;
                if ((null === (s3 = e3.messageList) || void 0 === s3 ? void 0 : s3.length) > 300 || 0 === (null === (c2 = e3.messageList) || void 0 === c2 ? void 0 : c2.length))
                  return o2._msgHash[n2.id].reject({ type: d.MAX_LIMIT, message: "The number of combined messages exceeded the limit." });
                var p2 = Mt([], e3.messageList, true), h2 = 0;
                if (p2.forEach(function(e4) {
                  (null == e4 ? void 0 : e4.combineLevel) > h2 && (h2 = null == e4 ? void 0 : e4.combineLevel);
                }), n2.combineLevel = h2 + 1, n2.combineLevel > 10)
                  return o2._msgHash[n2.id].reject({ type: d.MAX_LIMIT, message: "The level of the merged message exceeded the limit." });
                var f2 = cr.call(o2, p2), m2 = function(t5, r4) {
                  var a3, s4, c3, u3, l3, d2, p3 = "".concat(o2.apiUrl, "/").concat(o2.orgName, "/").concat(o2.appName, "/chatfiles/").concat(t5.entities[0].uuid), h3 = null === (a3 = t5.entities[0]) || void 0 === a3 ? void 0 : a3["share-secret"], f3 = p3 + "?em-redirect=true";
                  h3 && (f3 = "".concat(f3, "&share-secret=").concat(h3)), i2 instanceof Function && i2({ url: f3, secret: h3 }), e3.url = f3, e3.secret = h3, n2.url = f3, n2.secret = t5.entities[0]["share-secret"], n2.filename = (null === (s4 = n2.file) || void 0 === s4 ? void 0 : s4.filename) || (null == r4 ? void 0 : r4.fileName), n2.file_length = (null === (u3 = null === (c3 = n2.file) || void 0 === c3 ? void 0 : c3.data) || void 0 === u3 ? void 0 : u3.size) || (null == r4 ? void 0 : r4.fileLength) || 0, null === (d2 = null === (l3 = o2._localCache) || void 0 === l3 ? void 0 : l3.getInstance()) || void 0 === d2 || d2.storeMessage(e3, Ne.INPROGRESS);
                  var m3 = ir.call(o2, n2);
                  pr.call(o2, m3);
                }, g2 = _e.getEnvInfo();
                if ("web" !== g2.platform && "node" !== g2.platform && "quick_app" !== g2.platform && (null === (l2 = null === (u2 = g2.global) || void 0 === u2 ? void 0 : u2.canIUse) || void 0 === l2 ? void 0 : l2.call(u2, "getFileSystemManager"))) {
                  var y2 = g2.global.getFileSystemManager(), v2 = "".concat(o2.apiUrl, "/").concat(o2.orgName, "/").concat(o2.appName, "/chatfiles");
                  y2.writeFile({ filePath: "".concat(g2.global.env.USER_DATA_PATH, "/combine"), data: f2.buffer, encoding: "binary", success: function(e4) {
                    g2.global.uploadFile({ url: v2, filePath: "".concat(g2.global.env.USER_DATA_PATH, "/combine"), name: "file", header: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + n2.accessToken }, success: function(e5) {
                      if (200 === e5.statusCode) {
                        B.debug("upload success", e5);
                        var t5 = JSON.parse(e5.data);
                        m2(t5, { fileName: "combine", fileLength: f2.length });
                      } else
                        B.debug("upload fail"), n2.onFileUploadError instanceof Function && n2.onFileUploadError(e5), this._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e5 });
                    }, fail: function(t5) {
                      B.debug("upload fail"), n2.onFileUploadError instanceof Function && n2.onFileUploadError(e4), this._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: t5 });
                    } });
                  }, fail: function(e4) {
                    B.debug("write file fail", e4), this._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e4 });
                  } });
                } else {
                  var T2 = new File([f2], "combine", { type: "application/octet-stream" }), _2 = { url: URL.createObjectURL(T2), filename: n2.id, data: T2 };
                  n2.file = _2, n2.onFileUploadComplete = function(e4) {
                    m2(e4);
                  }, n2.onFileUploadError = function(e4) {
                    a2 instanceof Function && a2(e4), o2._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e4 });
                  }, _e.uploadFile.call(o2, n2, E.UPLOAD_MSG_ATTACH);
                }
              });
            }
            "img" === e3.type && (n2.body || (n2.body = Ct(Ct({}, n2), { size: { width: n2.width || 0, height: n2.height || 0 } }))), null === (r2 = null === (t3 = this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) || void 0 === r2 || r2.storeMessage(e3, Ne.INPROGRESS);
            var s2 = ir.call(this, n2);
            pr.call(this, s2);
          }
          function sr(e3, t3) {
            e3.editMessageId || bt.includes(e3.type) && (this._msgHash[e3.id].thirdMessage = t3);
          }
          function cr(e3) {
            for (var t3 = Uint8Array.from("cm", function(e4) {
              return e4.charCodeAt(0);
            }), r2 = 0; r2 < e3.length; r2++) {
              for (var o2 = e3[r2], n2 = Ct(Ct({}, o2), { isBuildCombinedMsg: true }), i2 = this.mSync.encodeChatMsg.call(this, n2), a2 = i2.length, s2 = new Uint8Array(4), c2 = 0; c2 < 4; c2++)
                s2[c2] = a2 >> 8 * (3 - c2) & 255;
              B.debug("message length:", s2);
              var u2 = new Uint8Array(t3.length + s2.length + i2.length);
              u2.set(t3), u2.set(s2, t3.length), u2.set(i2, t3.length + s2.length), t3 = u2;
            }
            var l2 = new Uint8Array(t3.length + 1), d2 = 0;
            for (r2 = 2; r2 < t3.length; r2++)
              r2 % 2 == 1 && (d2 ^= t3[r2]);
            return l2.set(t3), B.debug("checkResult:", d2), l2[t3.length] = d2, l2;
          }
          function ur(e3, t3, r2) {
            var o2 = [], n2 = this.root.lookup("easemob.pb.MUCBody"), i2 = e3.roomId, a2 = e3.ext, s2 = void 0 === a2 ? "" : a2, c2 = e3.leaveOtherRooms, u2 = void 0 !== c2 && c2, l2 = n2.decode(o2);
            l2.mucId = { appKey: this.appKey, name: i2, domain: "conference.easemob.com" }, l2.operation = "join" === r2 ? 2 : 3, l2.from = { name: this.context.userId }, l2.isChatroom = true, "join" === r2 && (l2.ext = s2, l2.leaveOtherRooms = u2), l2 = n2.encode(l2).finish();
            var d2 = this.root.lookup("easemob.pb.Meta").decode(o2);
            d2.id = t3, d2.from = { appKey: this.appKey, name: this.context.userId, domain: "easemob.com", client_resource: this.context.jid.clientResource }, d2.to = { domain: "easemob.com" }, d2.ns = 2, d2.payload = l2;
            var p2 = this.root.lookup("easemob.pb.CommSyncUL"), h2 = p2.decode(o2);
            h2.meta = d2, h2 = p2.encode(h2).finish();
            var f2 = this.root.lookup("easemob.pb.MSync"), m2 = f2.decode(o2);
            return m2.version = this.version, m2.encryptType = this.encryptType, m2.command = 0, m2.payload = h2, f2.encode(m2).finish();
          }
          function lr(e3, t3) {
            var r2 = _e.getUniqueId(), o2 = ur.call(this, e3, r2, t3), n2 = "join" === t3 ? E.JOIN_CHATROOM : E.QUIT_CHATROOM, i2 = this.dataReport.geOperateFun({ operationName: n2 });
            return S.size <= C && S.set(r2, { rpt: i2, requestName: n2 }), pr.call(this, Ct(Ct({}, e3), { isHandleChatroom: true, joinMsg: o2, id: r2, operation: t3 }), r2);
          }
          function dr(e3) {
            var t3 = this;
            return new Promise(function(r2, o2) {
              var n2, i2, a2, s2, c2, u2;
              if (B.debug("call send"), t3.logOut)
                return B.debug("send message failed", d.WEBIM_CONNECTION_CLOSED), o2({ type: d.WEBIM_CONNECTION_CLOSED, message: "not login" });
              if (!e3.id || "string" != typeof e3.id || "" === e3.id)
                return o2({ type: d.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
              if (!e3.to || "string" != typeof e3.to || "" === e3.to)
                return o2({ type: d.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
              var l2 = "file" === e3.type || "img" === e3.type || "audio" === e3.type || "video" === e3.type, p2 = "delivery" === e3.type || "read" === e3.type || "channel" === e3.type, h2 = "cmd" === e3.type, f2 = "recall" === e3.type, m2 = null == e3 ? void 0 : e3.editMessageId, g2 = !(p2 || f2 || h2 || m2);
              if (e3.id) {
                if (!l2 && !p2 || l2 && t3.useOwnUploadFun) {
                  var y2 = "recall" === e3.type ? E.SEND_RECALL_MSG : E.SEND_MSG;
                  m2 && (y2 = E.MODIFY_MESSAGE), I.size <= C && I.set(e3.id, { rpt: t3.dataReport.geOperateFun({ operationName: y2 }) });
                }
                g2 && (null === (i2 = null === (n2 = t3._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 || i2.storeMessage(e3, Ne.CREATE)), t3._msgHash[e3.id] = Ct(Ct({}, e3), { resolve: r2, reject: o2 });
              }
              if (l2 || "combine" === e3.type)
                return ar.call(t3, e3);
              if ("txt" === e3.type && (null === (a2 = e3.msgConfig) || void 0 === a2 ? void 0 : a2.languages) && Array.isArray(null === (s2 = e3.msgConfig) || void 0 === s2 ? void 0 : s2.languages) && e3.msgConfig.languages.length > 0) {
                var v2 = t3.translateMessage || t3.translation.translateMessage;
                if (!v2)
                  throw new Error("there is no method to translate message");
                v2.call(t3, { text: e3.msg, languages: e3.msgConfig.languages }).then(function(r3) {
                  var o3, n3, i3, a3 = null === (o3 = r3.data[0]) || void 0 === o3 ? void 0 : o3.translations;
                  a3 = a3.map(function(e4) {
                    return { code: e4.to, text: e4.text };
                  }), e3.translations = a3, t3._msgHash[e3.id].translations = a3, null === (i3 = null === (n3 = t3._localCache) || void 0 === n3 ? void 0 : n3.getInstance()) || void 0 === i3 || i3.storeMessage(e3, Ne.INPROGRESS);
                  var s3 = ir.call(t3, e3);
                  pr.call(t3, s3, e3.id);
                }).catch(function(e4) {
                  o2(e4);
                });
              } else {
                g2 && (null === (u2 = null === (c2 = t3._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 || u2.storeMessage(e3, Ne.INPROGRESS));
                var T2 = ir.call(t3, e3);
                pr.call(t3, T2, e3.id);
              }
            });
          }
          function pr(e3, t3) {
            var r2, o2 = this;
            if (e3.isHandleChatroom) {
              if (!this.isOpened()) {
                var n2 = { data: "", type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                if (S.has(e3.id)) {
                  var i2 = S.get(e3.id);
                  (0, i2.rpt)({ isEndApi: true, data: { isSuccess: 0, requestName: i2.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.disconnect, codeDesc: "websocket has been disconnected" } }), S.delete(e3.id);
                }
                return Promise.reject(n2);
              }
              return new Promise(function(r3, n3) {
                var i3;
                o2._msgHash[e3.id] = Ct(Ct({}, e3), { resolve: r3, reject: n3 }), i3 = "miniCore" === o2.name ? e3.joinMsg : wt.call(o2, e3.joinMsg, t3);
                var a3 = t3 && setTimeout(function() {
                  var t4, r4, n4;
                  if (o2._msgHash[e3.id]) {
                    var i4 = { type: d.REQUEST_TIMEOUT, message: "request timeout" };
                    null === (r4 = (t4 = o2._msgHash[e3.id]).reject) || void 0 === r4 || r4.call(t4, i4), clearTimeout(null === (n4 = o2._msgHash[e3.id]) || void 0 === n4 ? void 0 : n4.messageTimer), delete o2._msgHash[e3.id], o2.reconnecting || o2.reconnect(true);
                  }
                }, W);
                o2._msgHash[e3.id].messageTimer = a3, o2.sock.send(i3);
              });
            }
            if (!this.isOpened())
              return null === (r2 = this.unMSyncSendMsgMap) || void 0 === r2 || r2.set(t3, e3), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (B.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = true, this.reconnecting || this.reconnect()), void (this.onError && this.onError({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
            var a2, s2 = t3 && setTimeout(function() {
              var e4, r3, n3;
              if (o2._msgHash[null != t3 ? t3 : ""]) {
                var i3 = { type: d.MESSAGE_SEND_TIMEOUT, message: "send message timeout" };
                null === (r3 = (e4 = o2._msgHash[null != t3 ? t3 : ""]).reject) || void 0 === r3 || r3.call(e4, i3), clearTimeout(null === (n3 = o2._msgHash[null != t3 ? t3 : ""]) || void 0 === n3 ? void 0 : n3.messageTimer), delete o2._msgHash[null != t3 ? t3 : ""], o2.reconnecting || o2.reconnect(true);
              }
            }, W);
            this._msgHash[null != t3 ? t3 : ""] && (this._msgHash[null != t3 ? t3 : ""].messageTimer = s2), a2 = "miniCore" === this.name ? e3 : wt.call(this, e3, t3), this.sock.send(a2);
          }
          var hr = function(e3, t3) {
            return e3.send = dr, e3.sendMsg = dr, B.debug("init Msync by ".concat(e3.name)), { generateProvision: Pt.bind(e3), base64transform: wt.bind(e3), distributeMeta: kt.bind(e3), decodeMeta: Lt.bind(e3), decodeUnreadDL: Gt.bind(e3), _rebuild: Bt.bind(e3), _lastsession: Ft.bind(e3), receiveProvision: zt.bind(e3), isInQueue: $t.bind(e3), decodeNotice: er.bind(e3), decodeMSync: tr.bind(e3), distributeMSync: rr.bind(e3), encodeChatMsg: ir.bind(e3), upLoadFile: ar.bind(e3), send: dr.bind(e3), stopHeartBeat: Qt.bind(e3), handleChatRoom: lr.bind(e3), sendUnreadDeal: Xt.bind(e3) };
          }, fr = ["onTextMessage", "onFileMessage", "onAudioMessage", "onVideoMessage", "onImageMessage", "onLocationMessage", "onCustomMessage", "onCMDMessage"], mr = function() {
            function e3(e4, t3, r2) {
              this.handlerData = {}, this.handlerData = {}, e4.addEventHandler = this.addEventHandler.bind(this), e4.removeEventHandler = this.removeEventHandler.bind(this);
            }
            return e3.prototype.addEventHandler = function(e4, t3) {
              this.handlerData[e4] = t3;
            }, e3.prototype.removeEventHandler = function(e4) {
              delete this.handlerData[e4];
            }, e3.prototype.dispatch = function(e4, t3) {
              for (var r2 in fr.includes(e4) && t3 ? B.debug("dispatch event: " + e4, { id: t3.id, type: t3.type, time: t3.time, from: t3.from, to: t3.to, chatType: t3.chatType }) : "onMessage" === e4 ? B.debug("dispatch event: " + e4, null == t3 ? void 0 : t3.length) : B.debug("dispatch event: " + e4, t3 || ""), this.handlerData) {
                var o2 = this.handlerData[r2][e4];
                o2 && o2(t3);
              }
            }, e3;
          }(), gr = function() {
          };
          function Er(e3) {
            this.onOpened = e3.onOpened || gr, this.onPresence = e3.onPresence || gr, this.onTextMessage = e3.onTextMessage || gr, this.onPictureMessage = e3.onPictureMessage || gr, this.onAudioMessage = e3.onAudioMessage || gr, this.onVideoMessage = e3.onVideoMessage || gr, this.onFileMessage = e3.onFileMessage || gr, this.onLocationMessage = e3.onLocationMessage || gr, this.onCmdMessage = e3.onCmdMessage || gr, this.onCustomMessage = e3.onCustomMessage || gr, this.onReceivedMessage = e3.onReceivedMessage || gr, this.onDeliveredMessage = e3.onDeliveredMessage || gr, this.onReadMessage = e3.onReadMessage || gr, this.onRecallMessage = e3.onRecallMessage || gr, this.onChannelMessage = e3.onChannelMessage || gr, this.onError = e3.onError || gr, this.onOffline = e3.onOffline || gr, this.onOnline = e3.onOnline || gr, this.onStatisticMessage = e3.onStatisticMessage || gr, this.onContactInvited = e3.onContactInvited || gr, this.onContactAgreed = e3.onContactAgreed || gr, this.onContactRefuse = e3.onContactRefuse || gr, this.onContactDeleted = e3.onContactDeleted || gr, this.onContactAdded = e3.onContactAdded || gr, this.onTokenWillExpire = e3.onTokenWillExpire || gr, this.onTokenExpired = e3.onTokenExpired || gr, this.onClosed = e3.onClosed || gr, this.onPresenceStatusChange = e3.onPresenceStatusChange || gr;
          }
          var yr = { biz: "", debug: false, token: "" }, vr = "https://data-reporting.agora.io/report", Tr = "https://data-reporting.sh.agoralab.co/report", _r = function(e3) {
            var t3 = Number(g[e3]);
            return t3 === g.USER_LOGIN ? "MANUALLOGIN" : t3 === g.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : t3 > g.UNKNOWOPERATION && t3 < g.REST_OPERATE ? "REST" : t3 > g.REST_OPERATE && t3 < g.MSYNC_OPERATE ? "MESSAGE" : t3 > g.MSYNC_OPERATE && t3 < g.ROSTER_OPERATE ? "ROSTER" : t3 > g.ROSTER_OPERATE && t3 < g.USER_OPERATE ? "USER" : t3 > g.USER_OPERATE && t3 < g.GROUP_OPERATE ? "GROUP" : t3 > g.GROUP_OPERATE && t3 < g.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
          }, Rr = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, Or = function(e3) {
            return [de.BAIDU, de.WX, de.DD, de.ZFB, de.TT, de.QUICK_APP, de.UNI].includes(e3.platform);
          }, Ir = function() {
            return e3 = 1, t3 = 99999, e3 = Math.ceil(e3), t3 = Math.floor(t3), Math.floor(Math.random() * (t3 - e3)) + e3;
            var e3, t3;
          }, Sr = {}, Cr = 1e3, Nr = function() {
            function e3(e4) {
              this.eventQueue = [], this.stock = Cr, this.config = e4, this.governor();
            }
            return e3.prototype.add = function(e4) {
              this.stock <= 0 ? console.warn("Event Report limit ".concat(Cr, " per minute")) : (this.eventQueue.push(e4), this.consume(), this.stock -= 1);
            }, e3.prototype.consume = function() {
              var e4 = this;
              0 !== this.eventQueue.length && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
                var t3, r2 = e4.eventQueue.splice(0, 10), o2 = r2.filter(function(e5) {
                  return e5.appId === r2[0].appId;
                }), n2 = r2.filter(function(e5) {
                  return e5.appId !== r2[0].appId;
                });
                (t3 = e4.eventQueue).unshift.apply(t3, n2), e4.batchSend(o2);
              }, 1e3));
            }, e3.prototype.governor = function() {
              var e4 = this, t3 = setInterval(function() {
                e4.stock = Cr;
              }, 6e4);
              "undefined" != typeof addEventListener && addEventListener("beforeunload", function() {
                clearInterval(t3);
              });
            }, e3.prototype.batchSend = function(e4) {
              var t3, r2;
              if (void 0 === e4 && (e4 = []), 0 !== e4.length)
                try {
                  var o2 = e4.map(function(e5) {
                    e5.biz, e5.appId;
                    var t4 = e5.eventId, r3 = function(e6, t5) {
                      var r4 = {};
                      for (var o3 in e6)
                        Object.prototype.hasOwnProperty.call(e6, o3) && t5.indexOf(o3) < 0 && (r4[o3] = e6[o3]);
                      if (null != e6 && "function" == typeof Object.getOwnPropertySymbols) {
                        var n2 = 0;
                        for (o3 = Object.getOwnPropertySymbols(e6); n2 < o3.length; n2++)
                          t5.indexOf(o3[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, o3[n2]) && (r4[o3[n2]] = e6[o3[n2]]);
                      }
                      return r4;
                    }(e5, ["biz", "appId", "eventId"]);
                    return { eventId: Number(t4), body: r3 };
                  });
                  !function(e5, t4) {
                    try {
                      var r3 = t4.biz, o3 = t4.appId, n2 = t4.data, i2 = t4.debug, a2 = t4.onSuccess;
                      if (!r3)
                        throw new Error("biz is not defined");
                      Sr.global || (Sr = _e.getEnvInfo());
                      var s2 = Sr;
                      if (Or(s2)) {
                        var c2 = { url: i2 ? Tr : vr, data: n2, method: "POST", timeout: q, success: function() {
                          null == a2 || a2();
                        }, fail: function() {
                        }, complete: function() {
                        } }, u2 = { token: e5, appid: null != o3 ? o3 : "", sendts: "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), biz: r3, debug: "".concat(i2) };
                        if ("zfb" === s2.platform || "dd" === s2.platform ? c2.headers = u2 : c2.header = u2, "dd" === s2.platform)
                          return s2.global.httpRequest(c2);
                        s2.global.request(c2);
                      } else {
                        var l2 = new XMLHttpRequest();
                        l2.onreadystatechange = function() {
                          2 === l2.readyState && (null == a2 || a2());
                        }, l2.open("POST", i2 ? Tr : vr), l2.setRequestHeader("Content-Type", "application/json"), l2.setRequestHeader("token", e5), l2.setRequestHeader("appid", null != o3 ? o3 : ""), l2.setRequestHeader("sendts", "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3))), l2.setRequestHeader("biz", r3), l2.setRequestHeader("debug", "".concat(i2)), l2.send(JSON.stringify(n2));
                      }
                    } catch (e6) {
                      console.error(e6);
                    }
                  }(this.config.token, { biz: null === (t3 = e4[0]) || void 0 === t3 ? void 0 : t3.biz, appId: null === (r2 = e4[0]) || void 0 === r2 ? void 0 : r2.appId, data: o2, debug: this.config.debug, onSuccess: this.consume.bind(this) });
                } catch (e5) {
                  console.error(e5);
                }
            }, e3;
          }(), Ar = function() {
            return Ar = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, Ar.apply(this, arguments);
          }, Mr = new (function() {
            function e3(e4) {
              this.inited = false, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = yr, e4 && this.init(e4);
            }
            return e3.prototype.init = function(e4) {
              var t3;
              if (void 0 === e4 && (e4 = {}), !e4.biz || !e4.token)
                throw new Error("Event Report: biz or token is not defined");
              try {
                this.appId = null !== (t3 = e4.appId) && void 0 !== t3 ? t3 : "", this.biz = e4.biz, this.config = Ar(Ar({}, yr), e4), this.eventQueue = new Nr(this.config), this.log(e4), this.inited = true;
              } catch (e5) {
                console.error(e5);
              }
            }, e3.prototype.send = function(e4, t3, r2) {
              var o2;
              if (void 0 === t3 && (t3 = {}), this.inited) {
                var n2 = Ar(Ar({}, t3), { eventId: Number(e4), biz: this.biz, appId: null !== (o2 = null == r2 ? void 0 : r2.appId) && void 0 !== o2 ? o2 : this.appId });
                this.eventQueue.add(n2), this.log(n2);
              } else
                console.error("Event Report: init is not called");
            }, e3.prototype.log = function(e4) {
              try {
                if (this.config.debug) {
                  var t3 = e4.payload, r2 = function(e5, t4) {
                    var r3 = {};
                    for (var o2 in e5)
                      Object.prototype.hasOwnProperty.call(e5, o2) && t4.indexOf(o2) < 0 && (r3[o2] = e5[o2]);
                    if (null != e5 && "function" == typeof Object.getOwnPropertySymbols) {
                      var n2 = 0;
                      for (o2 = Object.getOwnPropertySymbols(e5); n2 < o2.length; n2++)
                        t4.indexOf(o2[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e5, o2[n2]) && (r3[o2[n2]] = e5[o2[n2]]);
                    }
                    return r3;
                  }(e4, ["payload"]);
                  console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(r2), t3 && (console.info("payload:"), console.table(t3));
                }
              } catch (e5) {
                console.error(e5);
              }
            }, e3;
          }())(), br = function() {
            return br = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, br.apply(this, arguments);
          }, Ur = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, Pr = function() {
            function e3(e4) {
              this.platform = _e.getEnvInfo(), this.isReportDt = e4.isReport || false, this.isCollectDt = true, Or(this.platform) && !this.isReportDt && (this.isCollectDt = false), this.eventQueue = [], this.accessChannel = "direct", this.options = function(e5, t3) {
                t3.platform || (t3 = _e.getEnvInfo());
                var r2 = e5.org, o2 = e5.appkey, n2 = e5.deviceId, i2 = e5.sdkVersion, a2 = (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || "".concat(t3.platform, "_mini_program");
                return { org: r2, appkey: o2, deviceId: n2, sdkServiceId: "sid_".concat(_e.getUniqueId(), "_").concat(Ir()), did: a2, sdkVersion: i2, os: 7, sdkProduct: _.web };
              }(e4, this.platform), this.sid = this.options.sdkServiceId, this.init(e4);
            }
            return e3.getInstance = function() {
              return e3.instance;
            }, e3.prototype.getServiceId = function() {
              return this.sid || "sid_0";
            }, e3.prototype.setIsReportDt = function(e4) {
              this.isReportDt = e4, e4 && this.rptEventQueue();
            }, e3.prototype.setIsCollectDt = function(e4) {
              this.isCollectDt = e4, e4 || (this.eventQueue = []);
            }, e3.prototype.rptEventQueue = function() {
              var e4 = this;
              this.eventQueue.length && this.eventQueue.forEach(function(t3, r2) {
                Mr.send(t3.eventId, t3.dt), r2 >= e4.eventQueue.length - 1 && (e4.eventQueue = []);
              });
            }, e3.prototype.init = function(t3) {
              e3.instance || (e3.instance = this, Mr.init({ biz: "im", token: "32f24ab2ddb74f508aa9286c356cec84", appId: t3.appkey, debug: false }), this.reportInit());
            }, e3.prototype.reportInit = function() {
              if (this.isCollectDt) {
                var e4 = this.options, t3 = e4.did, r2 = e4.os, o2 = e4.sdkVersion, n2 = e4.deviceId;
                this.reportData(9674, { did: t3, os: r2, sdkVersion: o2, deviceId: n2 });
              }
            }, e3.prototype.geOperateFun = function(e4) {
              var t3 = this;
              if (!this.isCollectDt)
                return function() {
                };
              var r2 = 1, o2 = 0, n2 = "", i2 = Rr(), a2 = e4.uid, s2 = e4.operationName;
              a2 && (this.uid = a2);
              var c2 = { uid: this.uid, operationId: "opr_".concat(_e.getUniqueId(), "_").concat(Ir()), requestid: "req_".concat(_e.getUniqueId(), "_").concat(Ir()), operationName: s2 };
              return function(e5) {
                var a3, u2, l2, d2;
                if (e5.data.isSuccess ? (o2 = 0, n2 = "") : (0 === e5.data.code && (e5.data.code = A), o2 = null !== (a3 = e5.data.code) && void 0 !== a3 ? a3 : o2, n2 = null !== (u2 = e5.data.codeDesc) && void 0 !== u2 ? u2 : n2), (null === (l2 = e5.data) || void 0 === l2 ? void 0 : l2.accessChannel) && (t3.accessChannel = null === (d2 = e5.data) || void 0 === d2 ? void 0 : d2.accessChannel), e5.isRetry ? (r2++, e5.data.subrequestid = "".concat(r2)) : (c2.requestid = "req_".concat(_e.getUniqueId(), "_").concat(Ir()), r2 = 1), e5.data.isLastApi) {
                  var p2 = Rr();
                  e5.data.requestElapse = p2 - i2, e5.data.requestMethod = "", e5.data.subrequestid = "0", e5.data.code = 200 === o2 ? 0 : o2, e5.data.codeDesc = n2;
                } else
                  e5.data.requestName || (e5.data.requestName = s2);
                e5.data.requestElapse || (e5.data.requestElapse = Rr() - i2), t3.reportData.call(t3, N, br(br(br(br({}, Ur), c2), e5.data), { accessChannel: t3.accessChannel, operationType: _r(s2) })), e5.isEndApi && t3.reportData.call(t3, N, br(br(br({}, c2), Ur), { isSuccess: e5.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: 200 === o2 ? 0 : o2, codeDesc: n2, requestElapse: e5.data.requestElapse, accessChannel: t3.accessChannel, operationType: _r(s2) }));
              };
            }, e3.prototype.reportData = function(e4, t3) {
              return r2 = this, o2 = void 0, i2 = function() {
                var r3, o3, n3, i3, a2, s2, c2, u2;
                return function(e5, t4) {
                  var r4, o4, n4, i4, a3 = { label: 0, sent: function() {
                    if (1 & n4[0])
                      throw n4[1];
                    return n4[1];
                  }, trys: [], ops: [] };
                  return i4 = { next: s3(0), throw: s3(1), return: s3(2) }, "function" == typeof Symbol && (i4[Symbol.iterator] = function() {
                    return this;
                  }), i4;
                  function s3(i5) {
                    return function(s4) {
                      return function(i6) {
                        if (r4)
                          throw new TypeError("Generator is already executing.");
                        for (; a3; )
                          try {
                            if (r4 = 1, o4 && (n4 = 2 & i6[0] ? o4.return : i6[0] ? o4.throw || ((n4 = o4.return) && n4.call(o4), 0) : o4.next) && !(n4 = n4.call(o4, i6[1])).done)
                              return n4;
                            switch (o4 = 0, n4 && (i6 = [2 & i6[0], n4.value]), i6[0]) {
                              case 0:
                              case 1:
                                n4 = i6;
                                break;
                              case 4:
                                return a3.label++, { value: i6[1], done: false };
                              case 5:
                                a3.label++, o4 = i6[1], i6 = [0];
                                continue;
                              case 7:
                                i6 = a3.ops.pop(), a3.trys.pop();
                                continue;
                              default:
                                if (!((n4 = (n4 = a3.trys).length > 0 && n4[n4.length - 1]) || 6 !== i6[0] && 2 !== i6[0])) {
                                  a3 = 0;
                                  continue;
                                }
                                if (3 === i6[0] && (!n4 || i6[1] > n4[0] && i6[1] < n4[3])) {
                                  a3.label = i6[1];
                                  break;
                                }
                                if (6 === i6[0] && a3.label < n4[1]) {
                                  a3.label = n4[1], n4 = i6;
                                  break;
                                }
                                if (n4 && a3.label < n4[2]) {
                                  a3.label = n4[2], a3.ops.push(i6);
                                  break;
                                }
                                n4[2] && a3.ops.pop(), a3.trys.pop();
                                continue;
                            }
                            i6 = t4.call(e5, a3);
                          } catch (e6) {
                            i6 = [6, e6], o4 = 0;
                          } finally {
                            r4 = n4 = 0;
                          }
                        if (5 & i6[0])
                          throw i6[1];
                        return { value: i6[0] ? i6[1] : void 0, done: true };
                      }([i5, s4]);
                    };
                  }
                }(this, function(l2) {
                  switch (l2.label) {
                    case 0:
                      return l2.trys.push([0, 3, , 4]), r3 = Rr(), o3 = 0, e4 !== N ? [3, 2] : [4, (d2 = this.platform, new Promise(function(e5) {
                        var t4;
                        d2.platform || (d2 = _e.getEnvInfo());
                        var r4 = "";
                        if (d2.platform === de.WEB) {
                          var o4 = navigator.connection;
                          (null == o4 ? void 0 : o4.type) ? (null == o4 || o4.type, r4 = v.WIFI) : (null == o4 ? void 0 : o4.effectiveType) && (r4 = v[o4.effectiveType.toLocaleUpperCase()]), e5(r4);
                        } else
                          d2.platform === de.NODE ? (r4 = v.UNKNOWN, e5(r4)) : null === (t4 = d2.global) || void 0 === t4 || t4.getNetworkType({ success: function(t5) {
                            r4 = v[t5.networkType.toLocaleUpperCase()], e5(r4);
                          } });
                      }))];
                    case 1:
                      o3 = l2.sent(), l2.label = 2;
                    case 2:
                      return n3 = this.options, i3 = n3.appkey, a2 = n3.sdkServiceId, s2 = n3.sdkProduct, c2 = br({ lts: r3, net: o3, appkey: i3, sdkServiceId: a2, sdkProduct: s2 }, t3), this.isReportDt ? Mr.send(e4, c2) : this.isCollectDt && this.eventQueue.push({ eventId: e4, dt: c2 }), [3, 4];
                    case 3:
                      return u2 = l2.sent(), console.warn(u2), [3, 4];
                    case 4:
                      return [2];
                  }
                  var d2;
                });
              }, new ((n2 = void 0) || (n2 = Promise))(function(e5, t4) {
                function a2(e6) {
                  try {
                    c2(i2.next(e6));
                  } catch (e7) {
                    t4(e7);
                  }
                }
                function s2(e6) {
                  try {
                    c2(i2.throw(e6));
                  } catch (e7) {
                    t4(e7);
                  }
                }
                function c2(t5) {
                  var r3;
                  t5.done ? e5(t5.value) : (r3 = t5.value, r3 instanceof n2 ? r3 : new n2(function(e6) {
                    e6(r3);
                  })).then(a2, s2);
                }
                c2((i2 = i2.apply(r2, o2 || [])).next());
              });
              var r2, o2, n2, i2;
            }, e3;
          }(), wr = function() {
            return wr = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, wr.apply(this, arguments);
          }, kr = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, Lr = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, Dr = { singleChat: "chat", chatRoom: "chatroom", groupChat: "groupchat" };
          function xr(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2 }, success: function(t4) {
              var r3 = {};
              t4.data.forEach(function(e4) {
                r3[e4] = { name: e4 };
              }), "function" == typeof (null == e3 ? void 0 : e3.success) && e3.success(t4);
            }, error: function(t4) {
              "function" == typeof (null == e3 ? void 0 : e3.error) && e3.error(t4);
            } };
            return B.debug("Call getBlocklist"), se.call(this, a2, E.GET_BLACK_LIST);
          }
          var Gr = xr, Br = Hr;
          function Hr(e3) {
            var t3 = this;
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = { url: this.apiUrl + "/" + n2 + "/" + i2 + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + a2 }, success: function(r3) {
              var o3 = [];
              r3.data.forEach(function(e4) {
                o3.push({ name: e4, subscription: "both", jid: t3.context.jid });
              }), "function" == typeof (null == e3 ? void 0 : e3.success) && e3.success(o3);
            }, error: function(t4) {
              "function" == typeof (null == e3 ? void 0 : e3.error) && e3.error(t4);
            } };
            return B.debug("Call getContacts"), se.call(this, s2, E.GET_CONTACTS);
          }
          function jr(e3) {
            return B.debug("Call uploadPushToken"), Rt.call(this, e3);
          }
          var Fr = jr;
          function Wr(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return B.debug("Call getSessionList"), se.call(this, a2, E.GET_SESSION_LIST);
          }
          function Kr(e3) {
            var t3 = this;
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = !!(e3 && "number" == typeof e3.pageNum && "number" == typeof e3.pageSize && e3.pageNum > 0 && e3.pageSize > 0), c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(this.user, "/user_channels").concat(s2 ? "/page" : ""), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return s2 && (c2.data = { pageNum: e3.pageNum, pageSize: e3.pageSize }), B.debug("Call getConversationlist"), se.call(this, c2, E.GET_SESSION_LIST).then(function(e4) {
              return qr.call(t3, e4);
            });
          }
          function qr(e3) {
            var t3 = this, r2 = e3.data.channel_infos;
            return null == r2 || r2.forEach(function(e4) {
              e4.meta && "{}" !== JSON.stringify(e4.meta) ? (e4.meta.payload = JSON.parse(e4.meta.payload), e4.lastMessage = Ce.call(t3, e4.meta, { formatCustomExts: false })) : e4.lastMessage = e4.meta, delete e4.meta;
            }), e3;
          }
          function zr(e3) {
            if (e3 && "string" != typeof e3.channel)
              throw Error("Invalid parameter channel: ".concat(e3.channel));
            if (e3 && "singleChat" !== e3.chatType && "groupChat" !== e3.chatType)
              throw Error("Invalid parameter chatType: ".concat(e3.chatType));
            if (e3 && "boolean" != typeof e3.deleteRoam)
              throw Error("Invalid parameter deleteRoam: ".concat(e3.deleteRoam));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2, o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.jid;
            r2 = "singleChat" === e3.chatType ? "chat" : "groupChat";
            var c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/user/").concat(this.user, "/user_channel?resource=").concat(s2.clientResource), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: e3.channel, type: r2, delete_roam: e3.deleteRoam }), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call deleteSession", e3), se.call(this, c2, E.DELETE_SESSION);
          }
          var Vr = zr;
          function Jr(e3, t3) {
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], c2 = {}, u2 = _e.getEnvInfo();
            if ("wx" === u2.platform || "qq" === u2.platform)
              if ("string" == typeof e3 && void 0 !== t3) {
                if (!s2.includes(e3))
                  throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
                c2[e3] = t3;
              } else {
                if ("[object Object]" !== Object.prototype.toString.call(e3))
                  throw new Error("illegal params");
                s2.forEach(function(t4) {
                  s2.includes(t4) && void 0 !== e3[t4] && (c2[t4] = e3[t4]);
                });
              }
            else if ("string" == typeof e3) {
              if (!s2.includes(e3))
                throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
              c2 = e3 + "=" + t3;
            } else {
              if ("[object Object]" !== Object.prototype.toString.call(e3))
                throw new Error("illegal params");
              var l2 = [];
              s2.forEach(function(t4) {
                if (s2.includes(t4) && void 0 !== e3[t4]) {
                  var r3 = encodeURIComponent(t4), o3 = encodeURIComponent(e3[t4]);
                  l2.push(r3 + "=" + o3);
                }
              }), c2 = l2.join("&");
            }
            var p2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/metadata/user/").concat(this.user), type: "PUT", data: c2, dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/x-www-form-urlencoded" } };
            return B.debug("Call updateOwnUserInfo", e3), se.call(this, p2, E.UPDATE_USER_INFO);
          }
          var Xr = Jr;
          function Yr(e3, t3) {
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = [];
            if ("string" == typeof e3)
              c2 = [e3];
            else {
              if ("[object Array]" !== Object.prototype.toString.call(e3))
                throw new Error("illegal params");
              c2 = e3;
            }
            o2 = "string" == typeof t3 ? [t3] : t3 && "[object Array]" === Object.prototype.toString.call(t3) ? t3 : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
            var u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: c2, properties: o2 }), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } };
            return B.debug("Call fetchUserInfoById", e3), se.call(this, u2, E.GET_USER_INFO);
          }
          function Qr(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: e3 }), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return B.debug("Call updateCurrentUserNick", e3), se.call(this, a2);
          }
          function Zr(e3) {
            if ("string" != typeof e3 || "" === e3)
              throw Error('Invalid parameter: "token"');
            var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o2, "/sdk/users/").concat(this.user, "/token/expires"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + e3, "Content-Type": "application/json" } };
            return B.debug("Call getTokenExpireTimestamp", e3), se.call(this, n2, E.SDK_INTERNAL);
          }
          function $r(e3) {
            var t3 = this;
            return new Promise(function(r2, o2) {
              if (!e3.queue)
                throw Error('Invalid parameter: "specified"');
              if (!vt.call(t3)) {
                var n2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
                return Promise.reject(n2);
              }
              (function e4(t4) {
                var n3 = this, i2 = t4.count || 20;
                eo.call(this, { count: i2, isGroup: !!t4.isGroup, queue: t4.queue, start: t4.start, format: t4.format, success: function(o3) {
                  if (o3.msgs.length >= i2 || o3.is_last) {
                    var a2 = o3.msgs.splice(0, i2).reverse();
                    t4.success && t4.success(a2), r2(a2);
                  } else
                    e4.call(n3, wr(wr({}, t4), { start: null }));
                }, fail: function(e5) {
                  o2(e5), t4.fail && t4.fail(e5);
                } });
              }).call(t3, e3), B.debug("Call fetchHistoryMessages", e3);
            });
          }
          function eo(e3) {
            var t3 = this, r2 = e3.queue, o2 = this.mr_cache[r2] || (this.mr_cache[r2] = { msgs: [] }), n2 = this.context.userId, i2 = e3.start || -1, a2 = e3.count || 20;
            if (o2.msgs.length >= a2 || o2.is_last)
              "function" == typeof e3.success && e3.success(o2);
            else {
              o2 && o2.next_key && (i2 = o2.next_key), e3.start && (i2 = e3.start);
              var s2 = { queue: r2 + (e3.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: i2, end: -1 }, c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(n2, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(s2), success: function(r3) {
                return kr(t3, void 0, void 0, function() {
                  var t4, n3, i3, a3, s3, c3, u3 = this;
                  return Lr(this, function(l3) {
                    switch (l3.label) {
                      case 0:
                        if (t4 = null == r3 ? void 0 : r3.data, !r3.data.msgs)
                          return "function" == typeof e3.success && e3.success(o2), o2.is_last = true, o2.next_key = "", [2];
                        n3 = t4.msgs, i3 = n3.length, o2.is_last = t4.is_last, o2.next_key = t4.next_key, a3 = function(t5) {
                          return kr(u3, void 0, void 0, function() {
                            var r4, o3, n4, i4, a4;
                            return Lr(this, function(s4) {
                              switch (s4.label) {
                                case 0:
                                  for (r4 = [], t5 = Oe().atob(t5), o3 = 0, n4 = t5.length; o3 < n4; ++o3)
                                    r4.push(t5.charCodeAt(o3));
                                  return i4 = (i4 = this.context.root.lookup("easemob.pb.Meta")).decode(r4), a4 = { errorCode: 0, reason: "" }, 1 !== i4.ns ? [3, 2] : [4, et.call(this, i4, a4, true, e3.format)];
                                case 1:
                                  return [2, s4.sent()];
                                case 2:
                                  return [2];
                              }
                            });
                          });
                        }, s3 = 0, l3.label = 1;
                      case 1:
                        return s3 < i3 ? [4, a3(n3[s3].msg)] : [3, 4];
                      case 2:
                        (c3 = l3.sent()) && o2.msgs.push(c3), l3.label = 3;
                      case 3:
                        return s3++, [3, 1];
                      case 4:
                        return "function" == typeof e3.success && e3.success(o2), [2];
                    }
                  });
                });
              }, error: function(e4) {
                if (e4.error && e4.error_description) {
                  var r3 = m.create({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: "fetch history messages error", data: e4 });
                  t3.onError && t3.onError(r3);
                }
              } };
              se.call(this, p2, E.GET_HISTORY_MSG).catch(function(t4) {
                "function" == typeof e3.fail && e3.fail(t4);
              });
            }
          }
          function to(e3) {
            var t3 = this;
            return new Promise(function(r2, o2) {
              var n2 = e3.targetId, i2 = e3.cursor, a2 = void 0 === i2 ? -1 : i2, s2 = e3.pageSize, c2 = void 0 === s2 ? 20 : s2, u2 = e3.chatType, l2 = e3.searchDirection, p2 = e3.searchOptions, h2 = void 0 === p2 ? {} : p2, f2 = h2.msgTypes, g2 = void 0 === f2 ? [] : f2, E2 = h2.startTime, y2 = void 0 === E2 ? null : E2, v2 = h2.endTime, T2 = void 0 === v2 ? null : v2, _2 = h2.from, R2 = void 0 === _2 ? null : _2;
              if ("string" != typeof n2 || "" === n2)
                throw Error('"Invalid parameter": "targetId"');
              if (R2 && "string" != typeof R2)
                throw Error('"Invalid parameter": "searchOptions.from"');
              if (g2 && !Array.isArray(g2))
                throw Error('"Invalid parameter": "searchOptions.msgTypes"');
              if (y2 && "number" != typeof y2)
                throw Error('"Invalid parameter": "searchOptions.startTime"');
              if (T2 && "number" != typeof y2)
                throw Error('"Invalid parameter": "searchOptions.endTime"');
              if (!vt.call(t3)) {
                var O2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
                return o2(O2);
              }
              var I2 = t3.context, S2 = I2.orgName, C2 = I2.appName, N2 = I2.userId, A2 = "singleChat" === e3.chatType ? "@easemob.com" : "@conference.easemob.com", M2 = { queue: "".concat(n2).concat(A2), start: a2, pull_number: c2, is_positive: "down" === l2, msgType: g2.join(",") || "", end: -1, startTime: y2, endTime: T2, userId: "singleChat" === u2 ? null : R2 }, b2 = { url: "".concat(t3.apiUrl, "/").concat(S2, "/").concat(C2, "/users/").concat(N2, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + t3.token, "Content-Type": "application/json" }, data: JSON.stringify(M2), success: function(o3) {
                return kr(t3, void 0, void 0, function() {
                  var t4, n3, i3, a3, s3, c3, u3, l3, d2 = this;
                  return Lr(this, function(p3) {
                    switch (p3.label) {
                      case 0:
                        t4 = null == o3 ? void 0 : o3.data, n3 = t4.msgs || [], i3 = function(e4) {
                          return kr(d2, void 0, void 0, function() {
                            var t5, r3, o4, n4, i4;
                            return Lr(this, function(a4) {
                              switch (a4.label) {
                                case 0:
                                  for (t5 = [], e4 = Oe().atob(e4), r3 = 0, o4 = e4.length; r3 < o4; ++r3)
                                    t5.push(e4.charCodeAt(r3));
                                  return n4 = (n4 = this.context.root.lookup("easemob.pb.Meta")).decode(t5), i4 = { errorCode: 0, reason: "" }, 1 !== n4.ns ? [3, 2] : [4, et.call(this, n4, i4, true, true)];
                                case 1:
                                  return [2, a4.sent()];
                                case 2:
                                  return [2];
                              }
                            });
                          });
                        }, a3 = [], s3 = 0, p3.label = 1;
                      case 1:
                        return s3 < n3.length ? [4, i3(n3[s3].msg)] : [3, 4];
                      case 2:
                        (c3 = p3.sent()) && a3.push(c3), p3.label = 3;
                      case 3:
                        return s3++, [3, 1];
                      case 4:
                        return t4.msgs = a3, u3 = { cursor: t4.next_key, messages: a3, isLast: t4.is_last }, null === (l3 = e3.success) || void 0 === l3 || l3.call(e3, u3), r2(u3), [2];
                    }
                  });
                });
              }, error: e3.fail };
              se.call(t3, b2).catch(function(e4) {
                o2(e4);
              }), B.debug("Call getHistoryMessages", e3);
            });
          }
          function ro(e3, t3) {
            return kr(this, void 0, void 0, function() {
              var r2, o2, n2, i2, a2, s2, c2;
              return Lr(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if (!vt.call(this))
                      return r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r2)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return B.debug("Call addContact", e3, t3), o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.jid, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(this.user, "/contacts/apply?resource=").concat(s2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: [e3], reason: t3 }), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } }, [4, se.call(this, c2, E.ROSTER_ADD)];
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          var oo = no;
          function no(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2;
              return Lr(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return B.debug("Call deleteContact", e3), r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user, "/contacts/users/").concat(e3, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2, E.ROSTER_REMOVE)];
                  case 1:
                    return c2.sent(), [2];
                }
              });
            });
          }
          function io(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2;
              return Lr(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return B.debug("Call acceptInvitation", e3), r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user, "/contacts/accept/users/").concat(e3, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2, E.ROSTER_ACCEPT)];
                  case 1:
                    return c2.sent(), [2];
                }
              });
            });
          }
          var ao = io;
          function so(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2;
              return Lr(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if ("string" != typeof e3 || "" === e3)
                      throw Error('"Invalid parameter": "to"');
                    return B.debug("Call declineInvitation", e3), r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user, "/contacts/decline/users/").concat(e3, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2, E.ROSTER_DECLINE)];
                  case 1:
                    return c2.sent(), [2];
                }
              });
            });
          }
          var co = so;
          function uo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2;
              return Lr(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (r2 = e3.name, o2 = [], "string" == typeof r2) {
                      if ("" === r2)
                        throw Error('"Invalid parameter": "name"');
                      o2 = [r2];
                    } else {
                      if (!Array.isArray(r2))
                        throw Error('"Invalid parameter": "name"');
                      o2 = r2;
                    }
                    return B.debug("Call addToBlockList", e3), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(c2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: o2 }), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } }, [4, se.call(this, u2, E.ROSTER_BAN).then(function(e4) {
                      return { type: e4.type, data: { userIds: (null == e4 ? void 0 : e4.data) || [] } };
                    })];
                  case 1:
                    return [2, l2.sent()];
                }
              });
            });
          }
          var lo = uo, po = uo;
          function ho(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2;
              return Lr(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (r2 = e3.name, o2 = [], "string" == typeof r2) {
                      if ("" === r2)
                        throw Error('"Invalid parameter": "name"');
                      o2 = [r2];
                    } else {
                      if (!Array.isArray(r2))
                        throw Error('"Invalid parameter": "name"');
                      o2 = r2;
                    }
                    return B.debug("Call removeFromBlockList", e3), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(c2.clientResource), type: "DELETE", dataType: "json", data: JSON.stringify({ usernames: o2 }), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } }, [4, se.call(this, u2, E.ROSTER_ALLOW)];
                  case 1:
                    return l2.sent(), [2];
                }
              });
            });
          }
          var fo = ho, mo = ho;
          function go(e3) {
            var t3 = this, r2 = (null == e3 ? void 0 : e3.ext) || "";
            if ("string" != typeof r2)
              throw Error('"Invalid parameter": "ext"', r2);
            var o2 = this.getUniqueId(), n2 = { id: o2, to: e3.to };
            this._msgHash[o2] = wr({}, n2);
            var i2 = "";
            void 0 !== e3.chatType ? i2 = e3.chatType : void 0 !== e3.type && (i2 = "chat" === e3.type ? "singleChat" : e3.type);
            var a2 = { id: o2, type: "recall", chatType: i2, ackId: e3.mid, to: e3.to, isChatThread: e3.isChatThread || false, metaExt: r2, success: function(r3) {
              return kr(t3, void 0, void 0, function() {
                var t4, o3, n3, a3, s2, c2, u2, l2, d2;
                return Lr(this, function(p2) {
                  switch (p2.label) {
                    case 0:
                      return p2.trys.push([0, 5, , 6]), "singleChat" !== i2 && "groupChat" !== i2 ? [3, 4] : [4, null === (n3 = null === (o3 = this._localCache) || void 0 === o3 ? void 0 : o3.getInstance()) || void 0 === n3 ? void 0 : n3.removeMsgByServerMsgId(e3.mid)];
                    case 1:
                      return p2.sent(), [4, null === (s2 = null === (a3 = this._localCache) || void 0 === a3 ? void 0 : a3.getInstance()) || void 0 === s2 ? void 0 : s2.getConversationLastMessage(e3.to, i2)];
                    case 2:
                      return t4 = p2.sent(), [4, null === (u2 = null === (c2 = this._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 ? void 0 : u2.updateLocalConversation(Ae({ conversationId: e3.to, conversationType: i2 }), { lastMessageId: null == t4 ? void 0 : t4.serverMsgId })];
                    case 3:
                      p2.sent(), p2.label = 4;
                    case 4:
                      return null === (l2 = null == e3 ? void 0 : e3.success) || void 0 === l2 || l2.call(e3, r3), [3, 6];
                    case 5:
                      return p2.sent(), null === (d2 = null == e3 ? void 0 : e3.success) || void 0 === d2 || d2.call(e3, r3), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            }, fail: e3.fail };
            return B.debug("Call recallMessage", e3), this.mSync.send(a2, this);
          }
          function Eo(e3) {
            var t3 = e3 || {}, r2 = t3.messageId, o2 = t3.modifiedMessage;
            if (B.debug("Call modifyMessage", r2, o2), "" === r2)
              throw Error('Invalid parameter: "messageId"');
            if ("txt" !== o2.type)
              throw Error('Invalid parameter: "modifiedMessage.type"');
            return this.mSync.send(wr({ editMessageId: r2 }, o2));
          }
          function yo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2;
              return Lr(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    if ("string" != typeof e3.messageId || !e3.messageId)
                      throw Error("Invalid parameter messageId: ".concat(e3.messageId));
                    if ("string" != typeof e3.reaction || !e3.reaction)
                      throw Error("Invalid parameter reaction: ".concat(e3.reaction));
                    return vt.call(this) ? (r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.reaction, s2 = e3.messageId, c2 = { msgId: s2, message: a2 }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, u2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return l2.sent(), [2];
                }
              });
            });
          }
          function vo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2;
              return Lr(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    if ("string" != typeof e3.reaction || !e3.reaction)
                      throw Error("Invalid parameter reactionId: ".concat(e3.reaction));
                    return vt.call(this) ? (r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.messageId, s2 = e3.reaction, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/reaction/user/").concat(this.user, "?msgId=").concat(a2, "&message=").concat(s2), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, c2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          }
          function To(e3) {
            if ("string" != typeof e3.chatType || !e3.chatType)
              throw Error("Invalid parameter chatType: ".concat(e3.chatType));
            if (!e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.chatType, s2 = e3.messageId, c2 = { msgIdList: "string" == typeof s2 ? [s2] : s2, msgType: "singleChat" === a2 ? "chat" : "groupchat", groupId: e3.groupId || null }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/reaction/user/").concat(this.user), type: "GET", data: c2, dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, u2).then(function(e4) {
              var t4 = e4.data;
              return null == t4 || t4.forEach(function(e5) {
                null == e5 || e5.reactionList.forEach(function(e6) {
                  e6.isAddedBySelf = e6.state, delete e6.state, delete e6.reactionId;
                });
              }), e4;
            });
          }
          var _o = To;
          function Ro(e3) {
            if ("string" != typeof e3.reaction || !e3.reaction)
              throw Error("Invalid parameter reaction: ".concat(e3.reaction));
            if ("string" != typeof e3.messageId || !e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.cursor, s2 = e3.pageSize, c2 = { msgId: e3.messageId, message: e3.reaction, currentPage: a2 || null, pageSize: s2 || 20 }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: c2, dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, u2).then(function(e4) {
              return e4.data.isAddedBySelf = e4.data.state, delete e4.data.state, delete e4.data.reactionId, e4;
            });
          }
          function Oo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2;
              return Lr(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    if ("string" != typeof e3.reportType || !e3.reportType)
                      throw Error("Invalid parameter reportType: ".concat(e3.reportType));
                    if ("string" != typeof e3.messageId || !e3.messageId)
                      throw Error("Invalid parameter messageId: ".concat(e3.messageId));
                    if ("string" != typeof e3.reportReason || !e3.reportReason)
                      throw Error("Invalid parameter messageId: ".concat(e3.reportReason));
                    return vt.call(this) ? (r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.reportType, s2 = e3.reportReason, c2 = e3.messageId, u2 = { username: this.user, reportType: a2, reportReason: s2 }, l2 = "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/user/").concat(this.user, "/moderation/report/message/").concat(c2), p2 = { url: l2, type: "POST", data: JSON.stringify(u2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, p2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return h2.sent(), [2];
                }
              });
            });
          }
          function Io(e3) {
            var t3;
            return kr(this, void 0, void 0, function() {
              var r2, o2, n2, i2, a2, s2, c2, u2, l2;
              return Lr(this, function(p2) {
                switch (p2.label) {
                  case 0:
                    if ("string" != typeof e3.targetId || "" === e3.targetId)
                      throw Error('"Invalid parameter targetId": ' + e3.targetId);
                    if (!["singleChat", "groupChat", "chatRoom"].includes(e3.chatType))
                      throw Error('"Invalid parameter chatType": ' + e3.chatType);
                    if (e3.beforeTimeStamp && ("number" != typeof e3.beforeTimeStamp || e3.beforeTimeStamp < 0 || (null === (t3 = e3.beforeTimeStamp) || void 0 === t3 ? void 0 : t3.toString().length) > 18))
                      throw Error('"Invalid parameter beforeTimeStamp": ' + e3.beforeTimeStamp);
                    if (e3.messageIds && !(Array.isArray(e3.messageIds) && e3.messageIds.length > 0 && e3.messageIds.length <= 20))
                      throw Error('"Invalid parameter messageIds": ' + e3.messageIds);
                    if (!e3.messageIds && !e3.beforeTimeStamp)
                      throw Error("messageIds or beforeTimeStamp field is required.");
                    return vt.call(this) ? (o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.userId, s2 = "singleChat" === e3.chatType ? "userId" : "groupId", c2 = "singleChat" === e3.chatType ? "chat" : "group", u2 = e3.messageIds ? "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/message/roaming/").concat(c2, "/user/").concat(a2, "?").concat(s2, "=").concat(e3.targetId, "&msgIdList=").concat(e3.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/message/roaming/").concat(c2, "/user/").concat(a2, "/time?").concat(s2, "=").concat(e3.targetId, "&delTime=").concat(e3.beforeTimeStamp, "&&resource=").concat(this.clientResource), l2 = { url: u2, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, B.debug("Call removeHistoryMessages", e3), [4, se.call(this, l2)]) : (r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r2)]);
                  case 1:
                    return p2.sent(), [2];
                }
              });
            });
          }
          function So(e3) {
            var t3 = this;
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            if ((null == e3 ? void 0 : e3.pageSize) && "number" != typeof e3.pageSize)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            if ((null == e3 ? void 0 : e3.cursor) && "string" != typeof e3.cursor)
              throw Error("Invalid parameter cursor: ".concat(e3.cursor));
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (null == e3 ? void 0 : e3.pageSize) || 20, cursor: (null == e3 ? void 0 : e3.cursor) || "", need_mark: true }, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
            return B.debug("Call getServerConversations", e3), new Promise(function(e4, r3) {
              se.call(t3, s2, E.GET_SESSION_LIST).then(function(r4) {
                return kr(t3, void 0, void 0, function() {
                  var t4, o3, n3 = this;
                  return Lr(this, function(i3) {
                    switch (i3.label) {
                      case 0:
                        return t4 = Co.call(this, r4), this._localCache ? (o3 = t4.data.conversations.map(function(e5) {
                          return kr(n3, void 0, void 0, function() {
                            var t5, r5, o4, n4;
                            return Lr(this, function(i4) {
                              switch (i4.label) {
                                case 0:
                                  return [4, null === (r5 = null === (t5 = this._localCache) || void 0 === t5 ? void 0 : t5.getInstance()) || void 0 === r5 ? void 0 : r5.storeMessage(e5.lastMessage, Ne.SUCCESS, true)];
                                case 1:
                                  return i4.sent(), [4, null === (n4 = null === (o4 = this._localCache) || void 0 === o4 ? void 0 : o4.getInstance()) || void 0 === n4 ? void 0 : n4.updateLocalConversation(Ae({ conversationId: e5.conversationId, conversationType: e5.conversationType }), { unReadCount: e5.unReadCount })];
                                case 2:
                                  return i4.sent(), [2];
                              }
                            });
                          });
                        }), [4, Promise.all(o3)]) : [3, 2];
                      case 1:
                        i3.sent(), i3.label = 2;
                      case 2:
                        return e4(t4), [2];
                    }
                  });
                });
              }).catch(function(e5) {
                r3(e5);
              });
            });
          }
          function Co(e3) {
            var t3 = this, r2 = e3.data, o2 = r2.cursor, n2 = r2.channel_infos, i2 = [];
            null == n2 || n2.forEach(function(e4) {
              var r3 = null;
              (null == e4 ? void 0 : e4.meta) && "{}" !== JSON.stringify(e4.meta) && (e4.meta.payload = JSON.parse(e4.meta.payload), "delivery" !== (r3 = Ce.call(t3, e4.meta)).type && "read" !== r3.type && "channel" !== r3.type && (r3.chatType = Se[r3.chatType]));
              var o3 = { conversationId: e4.session_to, conversationType: "chat" === e4.session_type ? "singleChat" : "groupChat", isPinned: e4.is_top, pinnedTime: e4.is_top ? e4.update_top_status_time : 0, unReadCount: e4.unread_num, lastMessage: r3 };
              e4.marks && (o3.marks = e4.marks.map(function(e5) {
                return it[e5];
              })), i2.push(o3);
            });
            var a2 = { conversations: i2, cursor: o2 || "" };
            return { type: e3.type, data: a2 };
          }
          function No(e3) {
            var t3 = this;
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            if ((null == e3 ? void 0 : e3.pageSize) && "number" != typeof e3.pageSize)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            if ((null == e3 ? void 0 : e3.cursor) && "string" != typeof e3.cursor)
              throw Error("Invalid parameter cursor: ".concat(e3.cursor));
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (null == e3 ? void 0 : e3.pageSize) || 20, cursor: (null == e3 ? void 0 : e3.cursor) || "", is_top: true, need_mark: true }, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
            return B.debug("Call getServerPinnedConversations", e3), se.call(this, s2, E.GET_SESSION_LIST).then(function(e4) {
              return Co.call(t3, e4);
            });
          }
          function Ao(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2, h2, f2, g2;
              return Lr(this, function(y2) {
                if (!vt.call(this))
                  return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                if (r2 = e3.conversationId, o2 = e3.conversationType, n2 = e3.isPinned, i2 = "singleChat" === o2 ? "chat" : "groupChat", "string" != typeof r2 || "" === r2)
                  throw Error("Invalid parameter conversationId: ".concat(r2));
                if (!["singleChat", "groupChat"].includes(o2))
                  throw Error("Invalid parameter conversationType: ".concat(o2));
                if ("boolean" != typeof n2)
                  throw Error("Invalid parameter isPinned: ".concat(n2));
                return a2 = this.context, s2 = a2.orgName, c2 = a2.appName, u2 = a2.accessToken, l2 = a2.jid, p2 = { type: i2, to: r2 }, h2 = n2 ? "" : "type=".concat(i2, "&to=").concat(r2, "&"), f2 = "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/sdk/user/").concat(this.user, "/user_channel/top?").concat(h2, "resource=").concat(l2.clientResource), g2 = { url: f2, type: n2 ? "POST" : "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, n2 && (g2.data = JSON.stringify(p2)), B.debug("Call pinConversation", e3), [2, se.call(this, g2, E.PIN_CONVERSATION).then(function(e4) {
                  var t4 = e4.type, r3 = e4.data;
                  return { type: t4, data: { isPinned: r3.is_top || false, pinnedTime: r3.is_top ? r3.update_top_status_time : 0 } };
                })];
              });
            });
          }
          function Mo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2;
              return Lr(this, function(p2) {
                switch (p2.label) {
                  case 0:
                    if (t3 = e3.userId, r2 = e3.remark, !vt.call(this))
                      return o2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(o2)];
                    if ("string" != typeof t3 || "" === t3)
                      throw Error('Invalid parameter: "userId"');
                    if ("string" != typeof r2)
                      throw Error('Invalid parameter: "remark"');
                    return B.debug("Call setContactRemark", e3), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/users/").concat(this.context.userId, "/contacts/users/").concat(t3, "?resource=").concat(c2.clientResource), l2 = { url: u2, type: "PUT", data: JSON.stringify({ remark: r2 }), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } }, [4, se.call(this, l2, E.ROSTER_SET_CONTACT_REMARK)];
                  case 1:
                    return p2.sent(), [2];
                }
              });
            });
          }
          function bo() {
            if (!vt.call(this)) {
              var e3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = t3.accessToken, i2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o2, "/users/").concat(this.user, "/contacts/users?needReturnRemark=true"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + n2 } };
            return B.debug("Call getAllContacts"), se.call(this, i2, E.ROSTER_GET_ALL_CONTACTS_REMARKS).then(function(e4) {
              var t4 = ((null == e4 ? void 0 : e4.entities) || []).map(function(e5) {
                return { userId: e5.username, remark: e5.remark };
              });
              return { type: e4.type, data: t4 };
            });
          }
          function Uo(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            B.debug("Call getContactsWithCursor", e3);
            var r2 = e3 || {}, o2 = r2.pageSize, n2 = void 0 === o2 ? 20 : o2, i2 = r2.cursor, a2 = void 0 === i2 ? "" : i2;
            if (n2 && "number" != typeof n2)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/contacts?needReturnRemark=true&limit=").concat(n2, "&cursor=").concat(a2), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + l2 } };
            return se.call(this, p2, E.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE).then(function(e4) {
              var t4, r3, o3 = (null === (t4 = null == e4 ? void 0 : e4.data) || void 0 === t4 ? void 0 : t4.contacts) || [], n3 = (null === (r3 = null == e4 ? void 0 : e4.data) || void 0 === r3 ? void 0 : r3.cursor) || "", i3 = o3.map(function(e5) {
                return { userId: e5.username, remark: e5.remark };
              });
              return { type: e4.type, data: { cursor: n3, contacts: i3 } };
            });
          }
          function Po(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2, h2, f2, g2, y2;
              return Lr(this, function(v2) {
                switch (v2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (B.debug("Call markConversation", e3), o2 = (r2 = e3 || {}).conversations, n2 = void 0 === o2 ? [] : o2, i2 = r2.mark, a2 = r2.isMarked, !Array.isArray(n2))
                      throw Error("Invalid parameter conversations");
                    if (s2 = n2.map(function(e4) {
                      if (!e4.conversationId || !["singleChat", "groupChat"].includes(e4.conversationType))
                        throw Error("Invalid parameter conversations");
                      return { to: e4.conversationId, type: Dr[e4.conversationType] };
                    }), "boolean" != typeof a2)
                      throw Error("Invalid parameter isMarked: ".concat(a2));
                    if ("number" != typeof i2)
                      throw Error("Invalid parameter mark: ".concat(i2));
                    return c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p2 = c2.accessToken, h2 = c2.userId, f2 = c2.jid, g2 = { mark: it[i2], targets: s2 }, y2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/sdk/user/").concat(h2, "/user_channels/mark?resource=").concat(f2.clientResource), dataType: "json", data: JSON.stringify(g2), type: a2 ? "Post" : "Delete", headers: { Authorization: "Bearer " + p2 } }, [4, se.call(this, y2, E.MARK_CONVERSATION).then(function(e4) {
                      var t4, r3 = (null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4.ignore) || [];
                      r3 && Array.isArray(r3) && r3.length > 0 && B.debug("markConversation has ignored conversations", r3.map(function(e5) {
                        return { conversationId: e5.to, conversationType: Se[e5.type] };
                      }));
                    })];
                  case 1:
                    return v2.sent(), [2];
                }
              });
            });
          }
          function wo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2;
              return Lr(this, function(o2) {
                return B.debug("Call addConversationMark", e3), t3 = e3.conversations, r2 = e3.mark, [2, Po.call(this, { conversations: t3, mark: r2, isMarked: true })];
              });
            });
          }
          function ko(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2;
              return Lr(this, function(o2) {
                return B.debug("Call removeConversationMark", e3), t3 = e3.conversations, r2 = e3.mark, [2, Po.call(this, { conversations: t3, mark: r2, isMarked: false })];
              });
            });
          }
          function Lo(e3) {
            var t3, r2, o2 = this;
            if (!vt.call(this)) {
              var n2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(n2);
            }
            if (B.debug("Call getServerConversationsByFilter", e3), (null == e3 ? void 0 : e3.pageSize) && "number" != typeof e3.pageSize)
              throw Error("Invalid parameter pageSize: ".concat(e3.pageSize));
            if ((null == e3 ? void 0 : e3.cursor) && "string" != typeof e3.cursor)
              throw Error("Invalid parameter cursor: ".concat(e3.cursor));
            if ("number" != typeof (null === (t3 = null == e3 ? void 0 : e3.filter) || void 0 === t3 ? void 0 : t3.mark))
              throw Error("Invalid parameter mark: ".concat(null === (r2 = null == e3 ? void 0 : e3.filter) || void 0 === r2 ? void 0 : r2.mark));
            var i2 = this.context, a2 = i2.orgName, s2 = i2.appName, c2 = i2.accessToken, u2 = "".concat(this.apiUrl, "/").concat(a2, "/").concat(s2, "/sdk/user/").concat(this.user, "/user_channels/mark/search?"), l2 = e3.pageSize, p2 = e3.cursor, h2 = ((null == e3 ? void 0 : e3.filter) || {}).mark, f2 = { url: u2, type: "GET", dataType: "json", data: { limit: l2 || 10, cursor: p2 || "", need_mark: true, mark: it[h2] }, headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" } };
            return se.call(this, f2, E.GET_SESSION_LIST).then(function(e4) {
              return Co.call(o2, e4);
            });
          }
          function Do() {
            if (!vt.call(this)) {
              var e3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            B.debug("Call getSelfIdsOnOtherPlatform");
            var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = t3.accessToken, i2 = t3.userId, a2 = t3.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o2, "/users/").concat(i2, "/resources"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + n2, "Content-Type": "application/json" } };
            return se.call(this, s2, E.USER_LOGGEDIN_OTHER_PLATFORM).then(function(e4) {
              var t4, r3 = null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4.filter(function(e5) {
                return e5.res !== a2.clientResource;
              }), o3 = null == r3 ? void 0 : r3.map(function(e5) {
                return "".concat(i2, "/").concat(e5.res);
              });
              return { type: e4.type, data: o3 };
            });
          }
          function xo() {
            var e3, t3, r2, o2, n2, i2;
            return kr(this, void 0, void 0, function() {
              var a2, s2, c2, u2, l2, p2, h2, f2, g2;
              return Lr(this, function(y2) {
                switch (y2.label) {
                  case 0:
                    return vt.call(this) ? (B.debug("Call deleteAllMessagesAndConversations"), s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p2 = s2.userId, h2 = s2.jid, f2 = "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/message/roaming/user/").concat(p2, "/delete/all?resource=").concat(h2.clientResource), g2 = { url: f2, type: "POST", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, se.call(this, g2, E.REST_DELETE_MESSAGES_CONVERSATIONS)]) : (a2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(a2)]);
                  case 1:
                    return y2.sent(), null === (t3 = null === (e3 = this._localCache) || void 0 === e3 ? void 0 : e3.getInstance()) || void 0 === t3 || t3.clearConversationMap(), [4, null === (o2 = null === (r2 = this._localCache) || void 0 === r2 ? void 0 : r2.getInstance()) || void 0 === o2 ? void 0 : o2.clearStoreData("conversationList")];
                  case 2:
                    return y2.sent(), [4, null === (i2 = null === (n2 = this._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 ? void 0 : i2.clearStoreData("message")];
                  case 3:
                    return y2.sent(), [2];
                }
              });
            });
          }
          function Go(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2, h2, f2, g2, y2;
              return Lr(this, function(v2) {
                switch (v2.label) {
                  case 0:
                    if (!vt.call(this))
                      return t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)];
                    if (B.debug("Call setMessagePinStatus", e3), o2 = (r2 = e3 || {}).conversationId, n2 = void 0 === o2 ? "" : o2, i2 = r2.conversationType, a2 = r2.messageId, s2 = r2.isPinned, "string" != typeof n2 || "" === n2)
                      throw Error("Invalid parameter conversationId");
                    if ("string" != typeof a2 || "" === a2)
                      throw Error("Invalid parameter messageId");
                    if ("boolean" != typeof s2)
                      throw Error("Invalid parameter isPinned");
                    return c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p2 = c2.accessToken, h2 = c2.userId, f2 = c2.jid, g2 = { to: n2, type: Dr[i2], pin_msg_id: a2 }, y2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/sdk/user/").concat(h2, "/user_channel/pin?resource=").concat(f2.clientResource), dataType: "json", data: JSON.stringify(g2), type: s2 ? "Post" : "Delete", headers: { Authorization: "Bearer " + p2 } }, [4, se.call(this, y2, E.REST_PIN_MESSAGE)];
                  case 1:
                    return v2.sent(), [2];
                }
              });
            });
          }
          function Bo(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2;
              return Lr(this, function(i2) {
                return B.debug("Call pinMessage", e3), r2 = (t3 = e3 || {}).conversationType, o2 = t3.conversationId, n2 = t3.messageId, [2, Go.call(this, { conversationId: o2, conversationType: r2, messageId: n2, isPinned: true })];
              });
            });
          }
          function Ho(e3) {
            return kr(this, void 0, void 0, function() {
              var t3, r2, o2, n2;
              return Lr(this, function(i2) {
                return B.debug("Call unpinMessage", e3), r2 = (t3 = e3 || {}).conversationType, o2 = t3.conversationId, n2 = t3.messageId, [2, Go.call(this, { conversationId: o2, conversationType: r2, messageId: n2, isPinned: false })];
              });
            });
          }
          function jo(e3) {
            var t3 = this;
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            B.debug("Call getServerPinnedMessages", e3);
            var o2 = e3.conversationId, n2 = e3.conversationType, i2 = e3.pageSize, a2 = e3.cursor;
            if ("string" != typeof o2 || "" === o2)
              throw Error("Invalid parameter conversationId");
            if (i2 && "number" != typeof i2)
              throw Error("Invalid parameter pageSize: ".concat(i2));
            if (a2 && "string" != typeof a2)
              throw Error("Invalid parameter cursor: ".concat(a2));
            var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/user/").concat(this.user, "/user_channel/pin"), type: "GET", dataType: "json", data: { to: o2, type: Dr[n2], limit: i2 || 10, cursor: a2 || "" }, headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return se.call(this, p2, E.GET_SESSION_LIST).then(function(e4) {
              return { type: 0, data: { list: e4.data.msg_infos.map(function(e5) {
                e5.message.payload = JSON.parse(e5.message.payload);
                var r3 = e5.message, o3 = e5.pin_opt_at, n3 = e5.pin_operator;
                return { message: Ce.call(t3, r3, { formatChatType: true }), pinTime: o3, operatorId: n3 };
              }), cursor: e4.data.cursor || "" } };
            });
          }
          function Fo() {
            var e3 = this;
            B.debug("Call unbindPushToken");
            var t3 = { deviceId: this.clientResource, deviceToken: "", notifierName: this.pushCertificateName };
            return Rt.call(this, t3).then(function(t4) {
              return e3.isRegisterPush = false, t4;
            });
          }
          var Wo = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, Ko = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function qo(e3) {
            if (!e3 || !e3.data)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups?resource=").concat(a2.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: e3.data.groupname, desc: e3.data.desc, members: e3.data.members, public: e3.data.public, approval: e3.data.approval, allowinvites: e3.data.allowinvites, invite_need_confirm: e3.data.inviteNeedConfirm, maxusers: e3.data.maxusers, custom: e3.data.ext }), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: function(t4) {
              e3.success && e3.success(t4);
            }, error: e3.error };
            return B.debug("Call createGroup:", e3), se.call(this, s2, E.CREATE_GROUP);
          }
          var zo = qo;
          function Vo(e3) {
            var t3;
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.jid, c2 = { entities: [(t3 = {}, t3["notification_ignore_" + e3.groupId] = true, t3)] }, u2 = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(this.user, "?resource=").concat(s2.clientResource), data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call blockGroupMessages", e3), se.call(this, u2, E.BLOCK_GROUP);
          }
          var Jo = Vo;
          function Xo(e3) {
            if ("number" != typeof e3.limit)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { limit: e3.limit, cursor: e3.cursor };
            e3.cursor || delete a2.cursor;
            var s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/publicchatgroups", type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call listGroups", e3), se.call(this, s2, E.LIST_GROUP);
          }
          var Yo = Xo;
          function Qo(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return B.debug("Call getJoinedGroups", e3), se.call(this, a2, E.GET_USER_GROUP);
          }
          function Zo(e3) {
            if ("number" != typeof e3.pageNum || "number" != typeof e3.pageSize)
              throw Error('Invalid parameter: "pageNum or pageSize"');
            if (e3.pageNum < 0 || e3.pageSize < 0)
              throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.needAffiliations || e3.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(e3.pageNum, "&pagesize=").concat(e3.pageSize, "&needAffiliations=").concat(e3.needAffiliations, "&needRole=").concat(e3.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(e3.pageNum, "&pagesize=").concat(e3.pageSize), s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + a2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3 && (null == e3 ? void 0 : e3.success), error: e3 && (null == e3 ? void 0 : e3.error) };
            return B.debug("Call getGroup", e3), se.call(this, s2, E.GET_USER_GROUP).then(function(e4) {
              var t4 = e4.uri, r3 = e4.entities, o3 = [];
              return t4.includes("joined_chatgroups") || (r3.forEach(function(e5) {
                var t5 = { affiliationsCount: e5.affiliations_count, groupName: e5.name, groupId: e5.groupId, role: e5.permission, disabled: e5.disabled, approval: e5.membersonly, allowInvites: e5.allowinvites, description: e5.description, maxUsers: e5.maxusers, public: e5.public };
                o3.push(t5);
              }), e4.entities = o3), e4;
            });
          }
          function $o(e3) {
            if ("string" != typeof e3.groupId || "string" != typeof e3.newOwner)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = { newowner: e3.newOwner }, o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.jid, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/chatgroups/").concat(e3.groupId, "?resource=").concat(s2.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, data: JSON.stringify(r2), success: e3.success, error: e3.error };
            return B.debug("Call changeOwner", e3), se.call(this, c2, E.CHANGE_OWNER);
          }
          var en = $o;
          function tn(e3) {
            if ("string" != typeof e3.groupId && !Array.isArray(e3.groupId))
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + e3.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupInfo", e3), se.call(this, a2, E.GET_GROUP_INFO);
          }
          function rn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { groupname: e3.groupName, description: e3.description, custom: e3.ext }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "?resource=").concat(a2.clientResource), type: "PUT", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call modifyGroup", e3), se.call(this, u2, E.MODIFY_GROUP);
          }
          function on(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (isNaN(e3.pageNum) || e3.pageNum <= 0)
              throw Error('The parameter "pageNum" should be a positive number');
            if (isNaN(e3.pageSize) || e3.pageSize <= 0)
              throw Error('The parameter "pageSize" should be a positive number');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = { pagenum: e3.pageNum, pagesize: e3.pageSize }, o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = { url: this.apiUrl + "/" + n2 + "/" + i2 + "/chatgroups/" + e3.groupId + "/users", dataType: "json", type: "GET", data: r2, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call listGroupMember", e3), se.call(this, s2, E.LIST_GROUP_MEMBER);
          }
          var nn = on;
          function an(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.groupId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + a2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupAdmin", e3), se.call(this, s2, E.GET_GROUP_ADMIN);
          }
          function sn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { newadmin: e3.username }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/admin?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call setGroupAdmin", e3), se.call(this, u2, E.SET_GROUP_ADMIN);
          }
          var cn = sn;
          function un(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/admin/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeAdmin", e3), se.call(this, u2, E.REMOVE_GROUP_ADMIN);
          }
          var ln = un;
          function dn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "?version=v3&resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call destroyGroup", e3), se.call(this, c2, E.DISSOLVE_GROUP);
          }
          var pn = dn;
          function hn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/quit?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call quitGroup", e3), se.call(this, c2, E.QUIT_GROUP);
          }
          var fn = hn;
          function mn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = e3.groupId, o2 = { usernames: e3.users }, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatgroups/").concat(r2, "/invite?resource=").concat(c2.clientResource), type: "POST", data: JSON.stringify(o2), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call inviteUsersToGroup", e3), se.call(this, u2, E.INVITE_TO_GROUP);
          }
          var gn = mn;
          function En(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(e3.groupId, "/apply?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: e3.message || "" }), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call joinGroup", e3), se.call(this, s2, E.JOIN_GROUP);
          }
          function yn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.applicant || "" === e3.applicant)
              throw Error('Invalid parameter: "applicant"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { applicant: e3.applicant, verifyResult: true, reason: "no clue" }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/apply_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call agreeJoinGroup", e3), se.call(this, u2, E.AGREE_JOIN_GROUP);
          }
          var vn = yn;
          function Tn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.applicant || "" === e3.applicant)
              throw Error('Invalid parameter: "applicant"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { applicant: e3.applicant, verifyResult: false, reason: e3.reason || "" }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/apply_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call rejectGroupJoinRequest", e3), se.call(this, u2, E.REJECT_JOIN_GROUP);
          }
          var _n = Tn;
          function Rn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.invitee || "" === e3.invitee)
              throw Error('Invalid parameter: "invitee"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { invitee: e3.invitee, verifyResult: true }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/invite_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call acceptGroupInvite", e3), se.call(this, u2, E.AGREE_INVITE_GROUP);
          }
          var On = Rn;
          function In(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.invitee || "" === e3.invitee)
              throw Error('Invalid parameter: "invitee"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { invitee: e3.invitee, verifyResult: false }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/invite_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call rejectGroupInvite", e3), se.call(this, u2, E.REJECT_INVITE_GROUP);
          }
          var Sn = In;
          function Cn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = e3.groupId, o2 = e3.username, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatgroups/").concat(r2, "/users/").concat(o2, "?resource=").concat(c2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeGroupMember", e3), se.call(this, u2, E.REMOVE_GROUP_MEMBER);
          }
          var Nn = Cn;
          function An(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.users.join(","), u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeGroupMembers", e3), se.call(this, u2, E.MULTI_REMOVE_GROUP_MEMBER);
          }
          var Mn = An;
          function bn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!(Array.isArray(e3.username) || "string" == typeof e3.username && "" !== e3.username))
              throw Error('Invalid parameter: "username"');
            if ("number" != typeof e3.muteDuration)
              throw Error('Invalid parameter: "muteDuration"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { usernames: "string" == typeof e3.username ? [e3.username] : e3.username, mute_duration: e3.muteDuration }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/mute?resource=").concat(a2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, data: JSON.stringify(c2), success: e3.success, error: e3.error };
            return B.debug("Call muteGroupMember", e3), se.call(this, u2, E.MUTE_GROUP_MEMBER);
          }
          var Un = bn;
          function Pn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!(Array.isArray(e3.username) || "string" == typeof e3.username && "" !== e3.username))
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/mute/").concat(c2, "?resource=").concat(a2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call unmuteGroupMember", e3), se.call(this, u2, E.UNMUTE_GROUP_MEMBER);
          }
          var wn = Pn;
          function kn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.groupId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + a2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupMuteList", e3), se.call(this, s2, E.GET_GROUP_MUTE_LIST);
          }
          var Ln = kn, Dn = kn;
          function xn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call blockGroupMember", e3), se.call(this, u2, E.BLOCK_GROUP_MEMBER);
          }
          var Gn = xn;
          function Bn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { usernames: e3.usernames }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users?resource=").concat(a2.clientResource), data: JSON.stringify(c2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call blockGroupMembers", e3), se.call(this, u2, E.BLOCK_GROUP_MEMBERS);
          }
          var Hn = Bn;
          function jn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call unblockGroupMember", e3), se.call(this, u2, E.UNBLOCK_GROUP_MEMBER);
          }
          var Fn = jn;
          function Wn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.usernames.join(","), u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call unblockGroupMembers", e3), se.call(this, u2, E.UNBLOCK_GROUP_MEMBERS);
          }
          var Kn = Wn;
          function qn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.groupId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + a2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupBlacklist", e3), se.call(this, s2, E.GET_GROUP_BLACK_LIST);
          }
          var zn = qn, Vn = qn;
          function Jn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call disableSendGroupMsg", e3), se.call(this, c2, E.DISABLED_SEND_GROUP_MSG);
          }
          function Xn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call enableSendGroupMsg", e3), se.call(this, c2, E.ENABLE_SEND_GROUP_MSG);
          }
          function Yn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { usernames: e3.users }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/white/users?resource=").concat(a2.clientResource), type: "POST", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call addUsersToGroupWhitelist", e3), se.call(this, u2, E.ADD_USERS_TO_GROUP_WHITE);
          }
          var Qn = Yn;
          function Zn(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/white/users/").concat(e3.userName, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeGroupAllowlistMember", e3), se.call(this, c2, E.REMOVE_GROUP_WHITE_MEMBER);
          }
          var $n = Zn, ei = Zn;
          function ti(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.groupId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + a2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupAllowlist", e3), se.call(this, s2, E.GET_GROUP_WHITE_LIST);
          }
          var ri = ti;
          function oi(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.groupId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + a2 + "/white/users/" + e3.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call isInGroupAllowlist", e3), se.call(this, s2, E.IS_IN_GROUP_WHITE_LIST);
          }
          var ni = oi, ii = oi;
          function ai(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/sdk/chatgroups/" + e3.groupId + "/mute/" + a2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2 } };
            return B.debug("Call isInGroupMutelist", e3), se.call(this, s2).then(function(e4) {
              return { type: e4.type, data: e4.data };
            });
          }
          function si(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.msgId || "" === e3.msgId)
              throw Error('Invalid parameter: "msgId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatgroups/" + e3.groupId + "/acks/" + e3.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + i2 }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupMsgReadUser", e3), se.call(this, a2, E.GET_GROUP_MSG_READ_USER);
          }
          function ci(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.groupId, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(a2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call fetchGroupAnnouncement", e3), se.call(this, s2, E.GET_GROUP_ANN);
          }
          function ui(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.announcement)
              throw Error('Invalid parameter: "announcement"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = { announcement: e3.announcement }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/announcement?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call updateGroupAnnouncement", e3), se.call(this, u2, E.UPDATE_GROUP_ANN);
          }
          function li(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("object" != typeof e3.file)
              throw Error('Invalid parameter: "file"');
            if (vt.call(this)) {
              var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = t3.accessToken, i2 = t3.jid, a2 = e3.groupId;
              ge.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o2, "/chatgroups/").concat(a2, "/share_files?resource=").concat(i2.clientResource), onFileUploadProgress: e3.onFileUploadProgress, onFileUploadComplete: e3.onFileUploadComplete, onFileUploadError: e3.onFileUploadError, onFileUploadCanceled: e3.onFileUploadCanceled, accessToken: n2, apiUrl: this.apiUrl, file: e3.file, appKey: this.context.appKey }, E.UPLOAD_GROUP_FILE), B.debug("Call uploadGroupSharedFile", e3);
            }
          }
          function di(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.fileId || "" === e3.fileId)
              throw Error('Invalid parameter: "file"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.groupId, c2 = e3.fileId, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(s2, "/share_files/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call deleteGroupSharedFile", e3), se.call(this, u2, E.DELETE_GROUP_FILE);
          }
          function pi(e3) {
            if ("string" != typeof e3.groupId || "" === e3.groupId)
              throw Error('Invalid parameter: "groupId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.pageNum || 1, s2 = e3.pageSize || 10, c2 = e3.groupId, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatgroups/").concat(c2, "/share_files?pagenum=").concat(a2, "&pagesize=").concat(s2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getGroupSharedFilelist", e3), se.call(this, u2, E.GET_GROUP_FILE_LIST);
          }
          var hi = pi;
          function fi(e3) {
            var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = t3.accessToken, i2 = this.apiUrl, a2 = e3.groupId, s2 = e3.fileId;
            Ee.call(this, { url: "".concat(i2, "/").concat(r2, "/").concat(o2, "/chatgroups/").concat(a2, "/share_files/").concat(s2), onFileDownloadComplete: e3.onFileDownloadComplete, onFileDownloadError: e3.onFileDownloadError, accessToken: n2, id: s2, secret: e3.secret }, E.DOWN_GROUP_FILE), B.debug("Call downloadGroupSharedFile", e3);
          }
          function mi(e3) {
            return Wo(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2, l2, p2;
              return Ko(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    if (t3 = e3.groupId, r2 = e3.userId, o2 = e3.memberAttributes, "string" != typeof t3 || "" === t3)
                      throw Error('Invalid parameter: "groupId"');
                    if ("string" != typeof r2 || "" === r2)
                      throw Error('Invalid parameter: "userId"');
                    if ("object" != typeof o2)
                      throw Error('Invalid parameter: "memberAttributes"');
                    return vt.call(this) ? (i2 = this.context, a2 = i2.orgName, s2 = i2.appName, c2 = i2.accessToken, u2 = i2.jid, l2 = { metaData: o2 }, p2 = { url: "".concat(this.apiUrl, "/").concat(a2, "/").concat(s2, "/sdk/metadata/chatgroup/").concat(t3, "/user/").concat(r2, "?resource=").concat(u2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" } }, B.debug("Call setGroupMemberAttributes", e3), [4, se.call(this, p2, E.SET_GROUP_MEMBER_ATTRS)]) : (n2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(n2)]);
                  case 1:
                    return h2.sent(), [2];
                }
              });
            });
          }
          function gi(e3) {
            var t3 = e3.groupId, r2 = e3.userId;
            return Ei.call(this, { groupId: t3, userIds: [r2] }).then(function(e4) {
              var t4;
              return { type: e4.type, data: null === (t4 = e4.data) || void 0 === t4 ? void 0 : t4[r2] };
            });
          }
          function Ei(e3) {
            var t3 = e3.groupId, r2 = e3.userIds, o2 = e3.keys, n2 = void 0 === o2 ? [] : o2;
            if ("string" != typeof t3 || "" === t3)
              throw Error('Invalid parameter: "groupId"');
            if (!Array.isArray(r2) || (null == r2 ? void 0 : r2.length) <= 0)
              throw Error('Invalid parameter: "userIds"');
            if (!Array.isArray(n2))
              throw Error('Invalid parameter: "keys"');
            if (!vt.call(this)) {
              var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(i2);
            }
            var a2 = this.context, s2 = a2.orgName, c2 = a2.appName, u2 = a2.accessToken, l2 = { targets: r2, properties: n2 }, p2 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/sdk/metadata/chatgroup/").concat(t3, "/get"), type: "POST", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
            return B.debug("Call getGroupMembersAttributes", e3), se.call(this, p2, E.GET_GROUP_MEMBER_ATTR).then(function(e4) {
              return { type: e4.type, data: (null == e4 ? void 0 : e4.data) || {} };
            });
          }
          function yi(e3) {
            var t3 = this;
            if ("number" != typeof e3.pagenum || "number" != typeof e3.pagesize)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = { pagenum: e3.pagenum || 1, pagesize: e3.pagesize || 20 }, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = { url: this.apiUrl + "/" + i2 + "/" + a2 + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + s2 }, data: o2, success: function(t4) {
              "function" == typeof e3.success && e3.success(t4);
            }, error: function(r3) {
              r3.error && r3.error_description && t3.onError && t3.onError({ type: d.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: r3.error_description, data: r3 }), "function" == typeof e3.error && e3.error(r3);
            } };
            return B.debug("Call getChatRooms", e3), se.call(this, c2, E.GET_CHATROOM_LIST);
          }
          function vi(e3) {
            if ("string" != typeof e3.name)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = { name: e3.name, description: e3.description, maxusers: e3.maxusers, owner: this.user, members: e3.members }, o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.jid, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/chatrooms?resource=").concat(s2.clientResource), dataType: "json", type: "POST", data: JSON.stringify(r2), headers: { Authorization: "Bearer " + (e3.token || a2), "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call createChatRoom", e3), se.call(this, c2, E.CREATE_CHATROOM);
          }
          function Ti(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(e3.chatRoomId, "?resource=").concat(a2.clientResource, "&version=v3"), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + (e3.token || i2) }, success: e3.success, error: e3.error };
            return B.debug("Call destroyChatRoom", e3), se.call(this, s2, E.DESTROY_CHATROOM);
          }
          function _i(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatrooms/" + e3.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getChatRoomDetails", e3), se.call(this, a2, E.GET_CHATROOM_DETAIL);
          }
          function Ri(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { groupname: e3.chatRoomName, description: e3.description, maxusers: e3.maxusers }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "?resource=").concat(a2.clientResource), type: "PUT", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call modifyChatRoom", e3), se.call(this, u2, E.MODIFY_CHATROOM);
          }
          function Oi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId || "string" != typeof e3.username)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeChatRoomMember", e3), se.call(this, u2, E.REMOVE_CHATROOM_MEMBER);
          }
          var Ii = Oi;
          function Si(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId || !Array.isArray(e3.users))
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = e3.chatRoomId, o2 = e3.users.join(","), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatrooms/").concat(r2, "/users/").concat(o2, "?resource=").concat(c2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeChatRoomMembers", e3), se.call(this, u2, E.MULTI_REMOVE_CHATROOM_MEMBER);
          }
          var Ci = Si;
          function Ni(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId || !Array.isArray(e3.users))
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = e3.chatRoomId, o2 = { usernames: e3.users }, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatrooms/").concat(r2, "/users?resource=").concat(c2.clientResource), type: "POST", data: JSON.stringify(o2), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call addUsersToChatRoom", e3), se.call(this, u2, E.ADD_USERS_TO_CHATROOM);
          }
          function Ai(e3) {
            var t3 = e3.roomId, r2 = e3.message, o2 = void 0 === r2 ? "" : r2, n2 = e3.ext, i2 = void 0 === n2 ? "" : n2, a2 = e3.leaveOtherRooms, s2 = void 0 !== a2 && a2, c2 = e3.success, u2 = e3.error;
            if ("string" != typeof t3 || "" === t3)
              throw Error("Invalid parameter roomId");
            if ("string" != typeof i2)
              throw Error("Invalid parameter ext");
            if ("boolean" != typeof s2)
              throw Error("Invalid parameter leaveOtherRooms");
            if (!vt.call(this)) {
              var l2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(l2);
            }
            return B.debug("Call joinChatRoom", e3), this.logOut ? Promise.reject({ type: d.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom({ roomId: t3, ext: i2, leaveOtherRooms: s2, message: o2, success: c2, error: u2 }, "join");
          }
          function Mi(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error("Invalid parameter");
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            return B.debug("Call leaveChatRoom", e3), this.logOut ? Promise.reject({ type: d.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom(e3, "leave");
          }
          var bi = Mi;
          function Ui(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (isNaN(e3.pageNum) || e3.pageNum <= 0)
              throw Error('The parameter "pageNum" should be a positive number');
            if (isNaN(e3.pageSize) || e3.pageSize <= 0)
              throw Error('The parameter "pageSize" should be a positive number');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = { pagenum: e3.pageNum, pagesize: e3.pageSize }, o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = { url: this.apiUrl + "/" + n2 + "/" + i2 + "/chatrooms/" + e3.chatRoomId + "/users", dataType: "json", type: "GET", data: r2, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call listChatRoomMembers", e3), se.call(this, s2, E.LIST_CHATROOM_MEMBERS);
          }
          var Pi = Ui;
          function wi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.chatRoomId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatrooms/" + a2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getChatRoomAdmin", e3), se.call(this, s2, E.GET_CHATROOM_ADMIN);
          }
          function ki(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { newadmin: e3.username }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/admin?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call setChatRoomAdmin", e3), se.call(this, u2, E.SET_CHATROOM_ADMIN);
          }
          function Li(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/admin/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeChatRoomAdmin", e3), se.call(this, u2, E.REMOVE_CHATROOM_ADMIN);
          }
          function Di(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "groupId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if ("number" != typeof e3.muteDuration)
              throw Error('Invalid parameter: "muteDuration"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { usernames: [e3.username], mute_duration: e3.muteDuration }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/mute?resource=").concat(a2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, data: JSON.stringify(c2), success: e3.success, error: e3.error };
            return B.debug("Call muteChatRoomMember", e3), se.call(this, u2, E.MUTE_CHATROOM_MEMBER);
          }
          function xi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/mute/").concat(c2, "?resource=").concat(a2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call unmuteChatRoomMember", e3), se.call(this, u2, E.REMOVE_MUTE_CHATROOM_MEMBER);
          }
          var Gi = xi;
          function Bi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.chatRoomId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatrooms/" + a2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getChatRoomMutelist", e3), se.call(this, s2, E.GET_MUTE_CHATROOM_MEMBERS);
          }
          var Hi = Bi, ji = Bi;
          function Fi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call blockChatRoomMember", e3), se.call(this, u2, E.SET_CHATROOM_MEMBER_TO_BLACK);
          }
          var Wi = Fi;
          function Ki(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { usernames: e3.usernames }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users?resource=").concat(a2.clientResource), data: JSON.stringify(c2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Chat blockChatRoomMembers:", u2), se.call(this, u2, E.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
          }
          var qi = Ki;
          function zi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error('Invalid parameter: "username"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = e3.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call unblockChatRoomMember", e3), se.call(this, u2, E.REMOVE_CHATROOM_MEMBER_BLACK);
          }
          var Vi = zi;
          function Ji(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = e3.usernames.join(","), u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call unblockChatRoomMembers", e3), se.call(this, u2, E.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
          }
          var Xi = Ji;
          function Yi(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.chatRoomId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatrooms/" + a2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getChatRoomBlocklist", e3), se.call(this, s2, E.GET_CHATROOM_BLOCK_MEMBERS);
          }
          var Qi = Yi, Zi = Yi;
          function $i(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call disableSendChatRoomMsg", e3), se.call(this, c2, E.DISABLED_CHATROOM_SEND_MSG);
          }
          function ea(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call enableSendChatRoomMsg", e3), se.call(this, c2, E.ENABLE_CHATROOM_SEND_MSG);
          }
          function ta(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!Array.isArray(e3.users))
              throw Error('Invalid parameter: "users"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { usernames: e3.users }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/white/users?resource=").concat(a2.clientResource), type: "POST", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call addUsersToChatRoomWhitelist", e3), se.call(this, u2, E.ADD_USERS_TO_CHATROOM);
          }
          var ra = ta;
          function oa(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.chatRoomId, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/white/users/").concat(e3.userName, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call removeChatRoomAllowlistMember", e3), se.call(this, c2, E.REMOVE_CHATROOM_WHITE_USERS);
          }
          var na = oa, ia = oa;
          function aa(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.chatRoomId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatrooms/" + a2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getChatRoomAllowlist", e3), se.call(this, s2, E.GET_CHATROOM_WHITE_USERS);
          }
          var sa = aa;
          function ca(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if ("string" != typeof e3.userName || "" === e3.userName)
              throw Error('Invalid parameter: "userName"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.chatRoomId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/chatrooms/" + a2 + "/white/users/" + e3.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call isInChatRoomAllowlist", e3), se.call(this, s2, E.CHECK_CHATROOM_WHITE_USER);
          }
          var ua = ca;
          function la(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error('Invalid parameter: "chatRoomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = { url: this.apiUrl + "/" + o2 + "/" + n2 + "/sdk/chatrooms/" + e3.chatRoomId + "/mute/" + a2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2 } };
            return B.debug("Call isInChatRoomMutelist", e3), se.call(this, s2).then(function(e4) {
              return { type: e4.type, data: e4.data };
            });
          }
          function da(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.roomId, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(a2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call fetchChatRoomAnnouncement", e3), se.call(this, s2, E.GET_CHATROOM_ANN);
          }
          function pa(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if ("string" != typeof e3.announcement)
              throw Error('Invalid parameter: "announcement"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.roomId, c2 = { announcement: e3.announcement }, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/announcement?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call updateChatRoomAnnouncement:", e3), se.call(this, u2, E.UPDATE_CHATROOM_ANN);
          }
          function ha(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if ("object" != typeof e3.file)
              throw Error('Invalid parameter: "file"');
            if (vt.call(this)) {
              var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = t3.accessToken, i2 = t3.jid, a2 = e3.roomId;
              ge.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o2, "/chatrooms/").concat(a2, "/share_files?resource=").concat(i2.clientResource), onFileUploadProgress: e3.onFileUploadProgress, onFileUploadComplete: e3.onFileUploadComplete, onFileUploadError: e3.onFileUploadError, onFileUploadCanceled: e3.onFileUploadCanceled, accessToken: n2, apiUrl: this.apiUrl, file: e3.file, appKey: this.context.appKey }, E.UPLOAD_CHATROOM_FILE), B.debug("Call uploadChatRoomSharedFile", e3);
            }
          }
          function fa(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if ("string" != typeof e3.fileId || "" === e3.fileId)
              throw Error('Invalid parameter: "fileId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e3.roomId, c2 = e3.fileId, u2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(s2, "/share_files/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call deleteChatRoomSharedFile", e3), se.call(this, u2, E.DELETE_CHATROOM_FILE);
          }
          function ma(e3) {
            if ("string" != typeof e3.roomId || "" === e3.roomId)
              throw Error('Invalid parameter: "roomId"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e3.roomId, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/chatrooms/").concat(a2, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json", accept: "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call fetchChatRoomSharedFileList", e3), se.call(this, s2, E.GET_CHATROOM_FILES);
          }
          var ga = ma;
          function Ea(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (e3.attributeKeys && !Array.isArray(e3.attributeKeys))
              throw Error('"Invalid parameter attributeKeys": ' + e3.attributeKeys);
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = (r2.jid, e3.chatRoomId), s2 = { keys: e3.attributeKeys }, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/metadata/chatroom/").concat(a2), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return B.debug("Call getChatRoomAttributes:", e3), se.call(this, c2, E.GET_CHATROOM_ATTR).then(function(e4) {
              return { data: e4.data, type: e4.type };
            });
          }
          function ya(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if ("object" != typeof e3.attributes)
              throw Error("Invalid parameter attributes: " + e3.attributes);
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = e3.chatRoomId, c2 = e3.attributes, u2 = e3.autoDelete, l2 = void 0 === u2 || u2, p2 = e3.isForced ? "/forced" : "", h2 = { metaData: c2, autoDelete: l2 ? "DELETE" : "NO_DELETE" }, f2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/metadata/chatroom/").concat(s2, "/user/").concat(a2) + p2, type: "PUT", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return B.debug("Call setChatRoomAttributes:", e3), se.call(this, f2, E.SET_CHATROOM_ATTR).then(function(e4) {
              return Tt(e4);
            });
          }
          function va(e3) {
            var t3;
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if ("string" != typeof e3.attributeKey || "" === e3.attributeKey)
              throw Error("Invalid parameter attributeKey: " + e3.attributeKey);
            if ("string" != typeof e3.attributeValue || "" === e3.attributeValue)
              throw Error("Invalid parameter attributeValue: " + e3.attributeValue);
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = o2.userId, c2 = e3.chatRoomId, u2 = e3.attributeKey, l2 = e3.attributeValue, p2 = e3.autoDelete, h2 = void 0 === p2 || p2, f2 = e3.isForced ? "/forced" : "", g2 = { metaData: (t3 = {}, t3[u2] = l2, t3), autoDelete: h2 ? "DELETE" : "NO_DELETE" }, y2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/metadata/chatroom/").concat(c2, "/user/").concat(s2) + f2, type: "PUT", dataType: "json", data: JSON.stringify(g2), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
            return B.debug("Call setChatRoomAttribute:", e3), se.call(this, y2, E.SET_CHATROOM_ATTR).then(function(e4) {
              var t4 = _t(e4);
              if (t4)
                throw t4;
            });
          }
          function Ta(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if (!Array.isArray(e3.attributeKeys))
              throw Error('"Invalid parameter attributes": ' + e3.attributeKeys);
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = e3.chatRoomId, c2 = e3.attributeKeys, u2 = e3.isForced ? "/forced" : "", l2 = { keys: c2 }, p2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/metadata/chatroom/").concat(s2, "/user/").concat(a2) + u2, type: "DELETE", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return B.debug("Call removeChatRoomAttributes:", e3), se.call(this, p2, E.DELETE_CHATROOM_ATTR).then(function(e4) {
              return Tt(e4);
            });
          }
          function _a(e3) {
            if ("string" != typeof e3.chatRoomId || "" === e3.chatRoomId)
              throw Error("Invalid parameter chatRoomId: " + e3.chatRoomId);
            if ("string" != typeof e3.attributeKey || "" === e3.attributeKey)
              throw Error('"Invalid parameter attributeKey": ' + e3.attributeKey);
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = e3.chatRoomId, c2 = e3.attributeKey, u2 = e3.isForced ? "/forced" : "", l2 = { keys: [c2] }, p2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/metadata/chatroom/").concat(s2, "/user/").concat(a2) + u2, type: "DELETE", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return B.debug("Call removeChatRoomAttribute:", e3), se.call(this, p2, E.DELETE_CHATROOM_ATTR).then(function(e4) {
              var t4 = _t(e4);
              if (t4)
                throw t4;
            });
          }
          function Ra(e3) {
            var t3 = this, r2 = e3 || {}, o2 = r2.pageNum, n2 = r2.pageSize;
            if (isNaN(o2) || o2 <= 0)
              throw Error("Invalid parameter pageNum:".concat(o2));
            if (isNaN(n2) || n2 <= 0)
              throw Error("Invalid parameter pageSize:".concat(n2));
            if (!vt.call(this)) {
              var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(i2);
            }
            var a2 = { pagenum: o2, pagesize: n2, detail: true }, s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/joined_chatrooms"), dataType: "json", type: "GET", data: a2, headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
            return B.debug("Call getJoinedChatRooms", e3), se.call(this, p2, E.GET_USER_JOINED_CHATROOM).then(function(e4) {
              var r3 = (e4.data || []).map(function(e5) {
                var r4 = e5.id, o3 = e5.title, n3 = e5.owner, i3 = e5.created, a3 = e5.description, s3 = e5.max_users;
                return { id: r4, name: o3, owner: n3.split("".concat(t3.appKey, "_"))[1], created: i3, description: a3, maxusers: s3 };
              });
              return { type: e4.type, data: r3 };
            });
          }
          var Oa = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, Ia = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function Sa(e3) {
            return Oa(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2, c2, u2;
              return Ia(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    if ("string" != typeof e3.description)
                      throw Error('Invalid parameter: "description"');
                    return vt.call(this) ? (r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = this.context.jid.clientResource, c2 = { ext: e3.description }, u2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/presence/").concat(s2, "/1"), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" }, success: e3.success, error: e3.error }, B.debug("Call publishPresence:", e3), [4, se.call(this, u2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return l2.sent(), [2];
                }
              });
            });
          }
          function Ca(e3) {
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!e3.usernames.length)
              throw Error('"usernames" can not be empty');
            if ("number" != typeof e3.expiry)
              throw Error('Invalid parameter: "expiry"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.userId, a2 = r2.accessToken, s2 = { usernames: e3.usernames }, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(i2, "/presence/").concat(e3.expiry), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call subscribePresence:", e3), se.call(this, c2).then(function(e4) {
              return e4.data = { result: null == e4 ? void 0 : e4.result }, e4;
            });
          }
          function Na(e3) {
            return Oa(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2;
              return Ia(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (!Array.isArray(e3.usernames))
                      throw Error('Invalid parameter: "usernames"');
                    if (!e3.usernames.length)
                      throw Error('"usernames" can not be empty');
                    return vt.call(this) ? (r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.userId, a2 = r2.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(i2, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(e3.usernames), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error }, B.debug("Call unsubscribePresence:", e3), [4, se.call(this, s2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return c2.sent(), [2];
                }
              });
            });
          }
          function Aa(e3) {
            if ("number" != typeof e3.pageNum || "number" != typeof e3.pageSize)
              throw Error('Invalid parameter: "pageNum or pageSize"');
            if (e3.pageNum < 0 || e3.pageSize < 0)
              throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.userId, a2 = r2.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(i2, "/presence/sublist?pageNum=").concat(e3.pageNum, "&pageSize=").concat(e3.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getSubscribedPresenceList:", e3), se.call(this, s2).then(function(e4) {
              return e4.data = { result: null == e4 ? void 0 : e4.result }, e4;
            });
          }
          var Ma = Aa;
          function ba(e3) {
            if (!Array.isArray(e3.usernames))
              throw Error('Invalid parameter: "usernames"');
            if (!e3.usernames.length)
              throw Error('"usernames" can not be empty');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = { usernames: e3.usernames }, o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.userId, s2 = o2.accessToken, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(r2), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getPresenceStatus:", e3), se.call(this, c2).then(function(e4) {
              return e4.data = { result: null == e4 ? void 0 : e4.result }, e4;
            });
          }
          function Ua(e3) {
            if (!(e3.options instanceof Object))
              throw Error('Invalid parameter: "options"');
            var t3 = e3.options.paramType;
            if ("number" != typeof t3 || t3 < 0 || t3 > 2)
              throw Error('Invalid parameter: "options of paramType"');
            if (0 === t3) {
              if ("string" != typeof e3.options.remindType)
                throw Error('Invalid parameter: "options of remindType"');
            } else if (1 === t3) {
              if ("number" != typeof e3.options.duration)
                throw Error('Invalid parameter: "options of duration"');
            } else if (2 === t3) {
              var r2 = e3.options, o2 = r2.startTime, n2 = r2.endTime;
              if (!(o2 instanceof Object && Object.keys(o2).length))
                throw Error('Invalid parameter: "options of startTime"');
              if (!o2.hours || "number" != typeof o2.hours || !o2.minutes || "number" != typeof o2.minutes)
                throw Error('Invalid parameter: "options of startTime of hours or minutes"');
              if (!(n2 instanceof Object && Object.keys(n2).length))
                throw Error('Invalid parameter: "options of endTime"');
              if (!n2.hours || "number" != typeof n2.hours || !n2.minutes || "number" != typeof n2.minutes)
                throw Error('Invalid parameter: "options of endTime of hours or minutes"');
            }
            if (!vt.call(this)) {
              var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(i2);
            }
            var a2 = this.context, s2 = a2.accessToken, c2 = a2.orgName, u2 = a2.appName, l2 = a2.userId, p2 = a2.jid, h2 = {};
            switch (t3) {
              case 0:
                h2 = { type: e3.options.remindType };
                break;
              case 1:
                h2 = { ignoreDuration: e3.options.duration };
                break;
              case 2:
                var f2 = e3.options;
                o2 = f2.startTime, n2 = f2.endTime, h2 = { ignoreInterval: "".concat(o2.hours, ":").concat(o2.minutes, "-").concat(n2.hours, ":").concat(n2.minutes) };
            }
            var g2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/notification/user/").concat(l2, "?resource=").concat(p2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call setSilentModeForAll:", e3), se.call(this, g2);
          }
          function Pa(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/user/").concat(a2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" }, success: null == e3 ? void 0 : e3.success, error: null == e3 ? void 0 : e3.error };
            return B.debug("Call getSilentModeForAll:", e3), se.call(this, s2);
          }
          function wa(e3) {
            if ("string" != typeof e3.conversationId || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if ("string" != typeof e3.type || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!(e3.options instanceof Object))
              throw Error('Invalid parameter: "options"');
            var t3 = e3.options.paramType;
            if ("number" != typeof t3 || t3 < 0 || t3 > 2)
              throw Error('Invalid parameter: "options of paramType"');
            if (0 === t3) {
              if ("string" != typeof e3.options.remindType)
                throw Error('Invalid parameter: "options of remindType"');
            } else if (1 === t3) {
              if ("number" != typeof e3.options.duration)
                throw Error('Invalid parameter: "options of duration"');
            } else if (2 === t3) {
              var r2 = e3.options, o2 = r2.startTime, n2 = r2.endTime;
              if (!(o2 instanceof Object && Object.keys(o2).length))
                throw Error('Invalid parameter: "options of startTime"');
              if (!o2.hours || "number" != typeof o2.hours || !o2.minutes || "number" != typeof o2.minutes)
                throw Error('Invalid parameter: "options of startTime of hours or minutes"');
              if (!(n2 instanceof Object && Object.keys(n2).length))
                throw Error('Invalid parameter: "options of endTime"');
              if (!n2.hours || "number" != typeof n2.hours || !n2.minutes || "number" != typeof n2.minutes)
                throw Error('Invalid parameter: "options of endTime of hours or minutes"');
            }
            if (!vt.call(this)) {
              var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(i2);
            }
            var a2 = this.context, s2 = a2.accessToken, c2 = a2.orgName, u2 = a2.appName, l2 = a2.userId, p2 = a2.jid, h2 = "chatgroup", f2 = {};
            switch (t3) {
              case 0:
                f2 = { type: e3.options.remindType };
                break;
              case 1:
                f2 = { ignoreDuration: e3.options.duration };
                break;
              case 2:
                var g2 = e3.options;
                o2 = g2.startTime, n2 = g2.endTime, f2 = { ignoreInterval: "".concat(o2.hours, ":").concat(o2.minutes, "-").concat(n2.hours, ":").concat(n2.minutes) };
            }
            "singleChat" === e3.type && (h2 = "user");
            var E2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/notification/").concat(h2, "/").concat(e3.conversationId, "?resource=").concat(p2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(f2), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call setSilentModeForConversation:", e3), se.call(this, E2);
          }
          function ka(e3) {
            if ("string" != typeof e3.conversationId || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if ("string" != typeof e3.type || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = r2.jid, c2 = "chatgroup";
            "singleChat" === e3.type && (c2 = "user");
            var u2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/").concat(c2, "/").concat(e3.conversationId, "?resource=").concat(s2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call clearRemindTypeForConversation:", e3), se.call(this, u2);
          }
          function La(e3) {
            if ("string" != typeof e3.conversationId || !e3.conversationId)
              throw Error('Invalid parameter: "conversationId"');
            if ("string" != typeof e3.type || !e3.type)
              throw Error('Invalid parameter: "type"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = "chatgroup";
            "singleChat" === e3.type && (s2 = "user");
            var c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/").concat(s2, "/").concat(e3.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getSilentModeForConversation:", e3), se.call(this, c2);
          }
          function Da(e3) {
            if (!Array.isArray(e3.conversationList))
              throw Error('Invalid parameter: "conversationList"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = [], c2 = [];
            e3.conversationList.forEach(function(e4) {
              "singleChat" === e4.type ? s2.push(e4.id) : c2.push(e4.id);
            });
            var u2 = s2.length ? s2.join(",") : "", l2 = c2.length ? c2.join(",") : "", p2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification?user=").concat(u2, "&group=").concat(l2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call getSilentModeForConversations:", e3), se.call(this, p2);
          }
          function xa(e3) {
            if ("string" != typeof e3.language || !e3.language)
              throw Error('Invalid parameter: "language"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = { translationLanguage: e3.language }, o2 = this.context, n2 = o2.accessToken, i2 = o2.orgName, a2 = o2.appName, s2 = o2.userId, c2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/users/").concat(s2, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(r2), headers: { Authorization: "Bearer " + n2, "Content-Type": "application/json" }, success: e3.success, error: e3.error };
            return B.debug("Call setPushPerformLanguage:", e3), se.call(this, c2);
          }
          function Ga(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" }, success: null == e3 ? void 0 : e3.success, error: null == e3 ? void 0 : e3.error };
            return B.debug("Call getPushPerformLanguage:", e3), se.call(this, s2);
          }
          function Ba(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            if ("number" != typeof e3.pageSize)
              throw Error('Invalid parameter: "pageSize"');
            var r2 = this.context, o2 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = { limit: e3.pageSize || 10, cursor: e3.cursor };
            e3.cursor || delete s2.cursor;
            var c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/mute/type"), type: "GET", dataType: "json", data: s2, headers: { Authorization: "Bearer " + o2, "Content-Type": "application/json" } };
            return B.debug("Call getSilentModeRemindTypeConversations:", e3), se.call(this, c2).then(function(e4) {
              return e4.data ? { data: { conversations: e4.data.map(function(e5) {
                return "user" in e5 ? { conversationId: e5.user, type: "singleChat", remindType: e5.value } : { conversationId: e5.group, type: "groupChat", remindType: e5.value };
              }), cursor: e4.cursor }, type: e4.type } : e4;
            });
          }
          var Ha = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, ja = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          };
          function Fa(e3) {
            if ("string" != typeof e3.name || "" === e3.name)
              throw Error("Invalid parameter name: ".concat(e3.name));
            if ("string" != typeof e3.messageId || "" === e3.messageId)
              throw Error("Invalid parameter messageId: ".concat(e3.messageId));
            if ("string" != typeof e3.parentId || "" === e3.parentId)
              throw Error("Invalid parameter parentId: ".concat(e3.parentId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { name: e3.name, msg_id: e3.messageId, group_id: e3.parentId, owner: this.user }, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, c2).then(function(e4) {
              var t4 = e4.data.thread_id;
              return e4.data = { chatThreadId: t4 }, e4;
            });
          }
          function Wa(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, s2).then(function(e4) {
              var t4 = e4.data.detail;
              return t4.messageId = t4.msgId, t4.parentId = t4.groupId, delete t4.msgId, delete t4.groupId, e4;
            });
          }
          function Ka(e3) {
            return Ha(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2;
              return ja(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
                      throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
                    return vt.call(this) ? (r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return c2.sent(), [2];
                }
              });
            });
          }
          function qa(e3) {
            return Ha(this, void 0, void 0, function() {
              var t3, r2, o2, n2, i2, a2, s2;
              return ja(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
                      throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
                    return vt.call(this) ? (r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2)]) : (t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t3)]);
                  case 1:
                    return c2.sent(), [2];
                }
              });
            });
          }
          function za(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if ("string" != typeof e3.name || "" === e3.name)
              throw Error("Invalid parameter name: ".concat(e3.name));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { name: e3.name }, c2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId, "?resource=").concat(a2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, c2);
          }
          function Va(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { limit: e3.pageSize || 20, cursor: e3.cursor || "" }, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId, "/users"), type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, s2);
          }
          function Ja(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if ("string" != typeof e3.username || "" === e3.username)
              throw Error("Invalid parameter username: ".concat(e3.username));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId, "/users/").concat(e3.username, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, s2);
          }
          function Xa(e3) {
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { limit: e3.pageSize || 20, cursor: e3.cursor || "" }, s2 = { url: e3.parentId ? "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/threads/chatgroups/").concat(e3.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, s2).then(function(e4) {
              var t4 = e4.entities;
              return null == t4 || t4.forEach(function(e5) {
                e5.parentId = e5.groupId, e5.messageId = e5.msgId, delete e5.groupId, delete e5.msgId;
              }), e4;
            });
          }
          function Ya(e3) {
            if ("string" != typeof e3.parentId || "" === e3.parentId)
              throw Error("Invalid parameter parentId: ".concat(e3.parentId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { cursor: e3.cursor || "", limit: e3.pageSize || 20 }, s2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/threads/chatgroups/").concat(e3.parentId), type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, s2).then(function(e4) {
              var t4 = e4.entities;
              return null == t4 || t4.forEach(function(e5) {
                e5.parentId = e5.groupId, e5.messageId = e5.msgId, delete e5.groupId, delete e5.msgId;
              }), e4;
            });
          }
          function Qa(e3) {
            var t3 = this;
            if (!Array.isArray(e3.chatThreadIds))
              throw Error("Invalid parameter chatThreadIds: ".concat(e3.chatThreadIds));
            if (!vt.call(this)) {
              var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(r2);
            }
            var o2 = this.context, n2 = o2.orgName, i2 = o2.appName, a2 = o2.accessToken, s2 = { threadIds: e3.chatThreadIds }, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
            return se.call(this, c2).then(function(e4) {
              return Za.call(t3, e4);
            });
          }
          function Za(e3) {
            var t3 = this, r2 = e3.entities;
            return null == r2 || r2.forEach(function(e4) {
              e4.chatThreadId = e4.thread_id, e4.last_message && "{}" !== JSON.stringify(e4.last_message) ? e4.lastMessage = Ce.call(t3, e4.last_message) : e4.lastMessage = e4.last_message, delete e4.thread_id, delete e4.last_message;
            }), e3;
          }
          function $a(e3) {
            if ("string" != typeof e3.chatThreadId || "" === e3.chatThreadId)
              throw Error("Invalid parameter chatThreadId: ".concat(e3.chatThreadId));
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/thread/").concat(e3.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
            return se.call(this, a2).then(function(e4) {
              return e4.data.affiliationsCount = e4.data.affiliations_count, e4.data.messageId = e4.data.msgId, e4.data.parentId = e4.data.groupId, delete e4.data.affiliations_count, delete e4.data.msgId, delete e4.data.groupId, e4;
            });
          }
          function es() {
            if (!vt.call(this)) {
              var e3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(e3);
            }
            var t3 = this.context, r2 = t3.orgName, o2 = t3.appName, n2 = t3.accessToken, i2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o2, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + n2 } };
            return B.debug("Call getSupportedLanguages"), se.call(this, i2);
          }
          function ts(e3) {
            if ("string" != typeof e3.text || "" === e3.text)
              throw Error('Invalid parameter: "text"');
            if (!Array.isArray(e3.languages))
              throw Error('Invalid parameter: "language"');
            if (!vt.call(this)) {
              var t3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(t3);
            }
            var r2 = this.context, o2 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = "".concat(this.apiUrl, "/").concat(o2, "/").concat(n2, "/users/").concat(this.user, "/translate"), s2 = { text: e3.text, to: e3.languages }, c2 = { url: a2, dataType: "json", type: "POST", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2 } };
            return B.debug("Call translateMessage"), se.call(this, c2);
          }
          var rs = function() {
            return rs = Object.assign || function(e3) {
              for (var t3, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
                for (var n2 in t3 = arguments[r2])
                  Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
              return e3;
            }, rs.apply(this, arguments);
          }, os = function(e3, t3, r2, o2) {
            return new (r2 || (r2 = Promise))(function(n2, i2) {
              function a2(e4) {
                try {
                  c2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                try {
                  c2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? n2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                  e5(t4);
                })).then(a2, s2);
              }
              c2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, ns = function(e3, t3) {
            var r2, o2, n2, i2, a2 = { label: 0, sent: function() {
              if (1 & n2[0])
                throw n2[1];
              return n2[1];
            }, trys: [], ops: [] };
            return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function s2(i3) {
              return function(s3) {
                return function(i4) {
                  if (r2)
                    throw new TypeError("Generator is already executing.");
                  for (; a2; )
                    try {
                      if (r2 = 1, o2 && (n2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((n2 = o2.return) && n2.call(o2), 0) : o2.next) && !(n2 = n2.call(o2, i4[1])).done)
                        return n2;
                      switch (o2 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                        case 0:
                        case 1:
                          n2 = i4;
                          break;
                        case 4:
                          return a2.label++, { value: i4[1], done: false };
                        case 5:
                          a2.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                            a2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a2.label < n2[1]) {
                            a2.label = n2[1], n2 = i4;
                            break;
                          }
                          if (n2 && a2.label < n2[2]) {
                            a2.label = n2[2], a2.ops.push(i4);
                            break;
                          }
                          n2[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a2);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      r2 = n2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, s3]);
              };
            }
          }, is = _e.getEnvInfo(), as = "web" === is.platform, ss = { CLOSED: 3, CLOSING: 2, CONNECTING: 0, OPEN: 1 }, cs = function() {
            function r2(o2) {
              var u2, l2;
              if (this.name = "connection", this.max_cache_length = 100, this.enableReportLogs = false, this._reportLogs = false, this._reportInterval = J, this._isLogging = false, this.unSyncQueue = [], this.lastHeartbeat = Date.now(), this.isDebug = o2.isDebug || false, this.isReport = false, this.enableReportLogs = o2.enableReportLogs || false, this.uploadPartEnable = true, this.isHttpDNS = void 0 === o2.isHttpDNS ? as : o2.isHttpDNS, this.heartBeatWait = o2.heartBeatWait || 3e4, this.autoReconnectNumMax = o2.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = o2.delivery || false, this.disconnectedReason = void 0, this.loginInfoCustomExt = void 0, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = o2.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = o2.apiUrl || "", this.url = o2.url || "", this.https = o2.https || "undefined" != typeof window && "https:" === (null === (u2 = window.location) || void 0 === u2 ? void 0 : u2.protocol), this.version = "4.10.0", this.deviceId = o2.deviceId || "webim", this.isFixedDeviceId = null === (l2 = o2.isFixedDeviceId) || void 0 === l2 || l2, this.osType = 16, this.useOwnUploadFun = o2.useOwnUploadFun || false, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.useReplacedMessageContents = o2.useReplacedMessageContents || false, this.logOut = true, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unMSyncSendMsgMap = /* @__PURE__ */ new Map(), this.mr_cache = {}, this.reconnecting = false, this._offlineMessagePullState = ve.SYNC_INIT, this._offlineMessagePullQueue = [], this.uniPushConfig = {}, this.uniPush = null, this.isRegisterPush = false, this.pushCertificateName = "", "string" != typeof this.appKey || 2 !== this.appKey.split("#").length)
                throw Error("Illegal appKey: ".concat(this.appKey));
              this.devInfos = this.appKey.split("#"), this.orgName = this.devInfos[0], this.appName = this.devInfos[1], this.listen = Er.bind(this), this.mSync = this.usePlugin(hr), this.eventHandler = this.usePlugin(mr), Object.assign(r2.prototype, e2), Object.assign(r2.prototype, t2), Object.assign(r2.prototype, n), Object.assign(r2.prototype, i), Object.assign(r2.prototype, a), Object.assign(r2.prototype, s), Object.assign(r2.prototype, c), this.dataReport = new Pr({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
              var d2 = 0, p2 = this;
              if (Object.defineProperty(_e, "ajaxUnconventionalErrorTimes", { set: function(e3) {
                0 !== e3 && (B.debug("rest api request fail times: ".concat(e3)), (d2 = e3) % 5 == 0 && p2.isHttpDNS && (B.debug("refresh dns config when rest request fail."), Ts.call(p2, function() {
                })));
              }, get: function() {
                return d2;
              } }), this.isFixedDeviceId) {
                var h2 = _e.getLocalDeviceInfo();
                h2 && (this.clientResource = JSON.parse(h2).deviceId);
              }
              B.debug("init SDK: Conn ".concat(this.version, " ").concat(is.platform));
            }
            return r2.prototype.usePlugin = function(e3, t3) {
              if ("push" !== t3)
                return t3 ? void (this[t3] = new e3(this)) : new e3(this);
              e3.config && e3.emPush ? (this.uniPushConfig = e3.config, this.uniPush = e3.emPush) : B.error("use push plugin failed", "emPush", this.uniPush, "config", this.uniPushConfig);
            }, r2.prototype.listen = function(e3) {
            }, r2.prototype.addEventHandler = function(e3, t3) {
            }, r2.prototype.removeEventHandler = function(e3) {
            }, r2.prototype.registerUser = function(e3) {
              return os(this, void 0, void 0, function() {
                var t3, r3;
                return ns(this, function(o2) {
                  switch (o2.label) {
                    case 0:
                      if (!e3.username || !e3.password)
                        throw Error("Invalid parameter");
                      o2.label = 1;
                    case 1:
                      if (o2.trys.push([1, 5, , 6]), !this.orgName && !this.appName)
                        throw m.create({ type: d.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
                      return t3 = this.dataReport.geOperateFun({ uid: e3.username, operationName: E.REGISTER }), this.isHttpDNS ? (this.dnsIndex = 0, [4, Ts.call(this, t3)]) : [3, 3];
                    case 2:
                      o2.sent(), o2.label = 3;
                    case 3:
                      return [4, ls.call(this, e3, { rpt: t3 })];
                    case 4:
                      return [2, o2.sent()];
                    case 5:
                      throw r3 = o2.sent(), e3.error && e3.error(r3), r3;
                    case 6:
                      return [2];
                  }
                });
              });
            }, r2.prototype.open = function(e3) {
              var t3;
              return os(this, void 0, void 0, function() {
                var r3, o2, n2, i2, a2, s2;
                return ns(this, function(c2) {
                  switch (c2.label) {
                    case 0:
                      if (B.debug("open", e3.user, "isLogout:", this.logOut), this._isLogging)
                        throw o2 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "Currently logging in, please wait." });
                      if (!this.logOut)
                        throw o2 = m.create({ type: d.WEBIM_USER_ALREADY_LOGIN, message: "The user has logged in." });
                      this.retryConnectTimes = 0, this._isLogging = true, c2.label = 1;
                    case 1:
                      if (c2.trys.push([1, 8, 9, 10]), "web" === is.platform && (r3 = _e.detectBrowser(), B.debug("browser", r3)), o2 = Es.call(this, e3))
                        throw null === (t3 = this.onError) || void 0 === t3 || t3.call(this, o2), o2;
                      return e3.accessToken && (this.token = e3.accessToken), n2 = rs({}, e3), i2 = this.dataReport.geOperateFun({ uid: e3.user, operationName: E.LOGIN }), this.dnsIndex = 0, this.isHttpDNS ? [4, Ts.call(this, i2)] : [3, 3];
                    case 2:
                      return c2.sent(), [3, 5];
                    case 3:
                      return "web" !== is.platform && this.enableReportLogs ? [4, Ts.call(this, i2)] : [3, 5];
                    case 4:
                      c2.sent(), c2.label = 5;
                    case 5:
                      return B.initReport({ report: this._reportLogs, reportInterval: this._reportInterval, connection: this }), [4, ps.call(this, n2, { rpt: i2 })];
                    case 6:
                      return a2 = c2.sent(), [4, ms.call(this, i2)];
                    case 7:
                      return c2.sent(), B.debug("grantType", this.grantType), _e.listenNetwork(hs.bind(this), fs.bind(this)), _e.listenBrowserVisibility(function() {
                        B.debug("visibility: true");
                      }, function() {
                        B.debug("visibility: false");
                      }), [2, a2];
                    case 8:
                      throw s2 = c2.sent(), this._isLogging = false, e3.error && e3.error(s2), s2;
                    case 9:
                      return B.reportLog(), [7];
                    case 10:
                      return [2];
                  }
                });
              });
            }, r2.prototype.isOpened = function() {
              return this.sock && this.sock.readyState === ss.OPEN || false;
            }, r2.prototype.close = function() {
              var e3, t3, r3;
              B.debug("call close"), B._stopReportLogs(), this.logOut = true, this.disconnectedReason = void 0, this.reconnecting = false, this.context.status = d.STATUS_CLOSING, this.sock && this.sock.close(), null === (e3 = this.unMSyncSendMsgMap) || void 0 === e3 || e3.clear(), this.stopHeartBeat(), this.rejectMessage(), this.context.status = d.STATUS_CLOSED, this._load_msg_cache = [], this._queues = [], this.unSyncQueue = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "", this.isRegisterPush = false, this.clearTokenTimeout(), null === (r3 = null === (t3 = null == this ? void 0 : this._localCache) || void 0 === t3 ? void 0 : t3.getInstance()) || void 0 === r3 || r3.close(), this.connectionTimer && clearTimeout(this.connectionTimer), this.provisionTimer && clearTimeout(this.provisionTimer), this.probingTimer && clearTimeout(this.probingTimer);
            }, r2.prototype.downloadAndParseCombineMessage = function(e3) {
              var t3 = this, r3 = e3.url, o2 = e3.secret;
              return new Promise(function(e4, n2) {
                var i2, a2, s2 = _e.getEnvInfo(), c2 = "web" !== s2.platform && "node" !== s2.platform && "quick_app" !== s2.platform && (null === (a2 = null === (i2 = s2.global) || void 0 === i2 ? void 0 : i2.canIUse) || void 0 === a2 ? void 0 : a2.call(i2, "getFileSystemManager")), u2 = function(r4) {
                  var o3 = function(e5) {
                    n2({ type: d.PARSE_FILE_ERROR, message: "Read file failed", data: e5 });
                  }, i3 = function(r5) {
                    return os(t3, void 0, void 0, function() {
                      var t4, o4, i4, a4, s3, u4, l4, p2, h2, f2, m2, g2, E2;
                      return ns(this, function(y2) {
                        switch (y2.label) {
                          case 0:
                            for (t4 = c2 ? new Uint8Array(r5.data) : new Uint8Array(r5.target.result), o4 = 0, i4 = 0, a4 = 2, s3 = t4.subarray(o4, o4 + a4), u4 = _e.Uint8ArrayToString(s3), B.debug("file header:", u4), i4 += a4, l4 = 0, p2 = 2; p2 < t4.length - 1; p2++)
                              p2 % 2 == 1 && (l4 ^= t4[p2]);
                            if (h2 = t4.subarray(t4.length - 1, t4.length), B.debug("checkResult:", l4, h2[0] === l4), h2[0] !== l4)
                              return [2, n2({ type: d.PARSE_FILE_ERROR, message: "File verification failed" })];
                            if ("cm" !== u4)
                              return [3, 7];
                            y2.label = 1;
                          case 1:
                            y2.trys.push([1, 5, , 6]), f2 = [], m2 = function() {
                              var e5, r6, n3, s4;
                              return ns(this, function(c3) {
                                switch (c3.label) {
                                  case 0:
                                    return o4 += a4, i4 += a4 = 4, e5 = t4.subarray(o4, o4 + a4), o4 += a4, a4 = e5.reduce(function(t5, r7, o5) {
                                      return t5 + (r7 << 8 * (e5.length - o5 - 1));
                                    }, 0), i4 += a4, r6 = t4.subarray(o4, o4 + a4), n3 = (n3 = g2.root.lookup("easemob.pb.Meta")).decode(r6), [4, et.call(g2, n3, 0, true, true)];
                                  case 1:
                                    return s4 = c3.sent(), f2.push(s4), [2];
                                }
                              });
                            }, g2 = this, y2.label = 2;
                          case 2:
                            return i4 < t4.length - 1 ? [5, m2()] : [3, 4];
                          case 3:
                            return y2.sent(), [3, 2];
                          case 4:
                            return [2, e4(f2)];
                          case 5:
                            return E2 = y2.sent(), n2({ type: d.PARSE_FILE_ERROR, message: "Parse file failed", data: E2 }), [3, 6];
                          case 6:
                            return [3, 8];
                          case 7:
                            return [2, n2({ type: d.PARSE_FILE_ERROR, message: "File verification failed" })];
                          case 8:
                            return [2];
                        }
                      });
                    });
                  };
                  if (c2) {
                    var a3 = s2.global.getFileSystemManager(), u3 = r4.tempFilePath;
                    a3.readFile({ filePath: u3, success: i3, fail: o3 });
                  } else if (r4 instanceof Blob) {
                    var l3 = new FileReader();
                    l3.readAsArrayBuffer(r4), l3.onerror = o3, l3.onload = i3;
                  }
                }, l2 = function(e5) {
                  n2({ type: d.WEBIM_DOWNLOADFILE_ERROR, message: "Download failed, please try again", data: e5 });
                };
                c2 ? s2.global.downloadFile({ url: r3, success: u2, fail: l2 }) : _e.download.call(t3, { url: r3, headers: { Accept: "application/json" }, onFileDownloadComplete: u2, onFileDownloadError: l2, secret: o2, accessToken: t3.context.accessToken });
              });
            }, r2.prototype.stopHeartBeat = function() {
              clearInterval(this.heartBeatID);
            }, r2.prototype.clear = function() {
              this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
            }, r2.prototype.heartBeat = function() {
            }, r2.prototype.renewToken = function(e3) {
              var t3 = this;
              return this.isOpened() ? this.getTokenExpireTimestamp(e3).then(function(r3) {
                var o2 = r3.expire_timestamp, n2 = Date.now();
                return t3.expirationTime = o2, t3.expiresIn = o2 - n2, t3.token = e3, t3.context.accessToken = e3, t3.clearTokenTimeout(), t3.tokenExpireTimeCountDown(t3.expiresIn), { status: true, token: e3, expire: o2 };
              }) : Promise.reject({ status: false });
            }, r2.prototype.clearTokenTimeout = function() {
              B.info("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer), this.tokenWillExpireTimer = null, this.tokenExpiredTimer = null;
            }, r2.prototype.tokenExpireTimeCountDown = function(e3) {
              var t3 = this;
              B.info("tokenExpireTimeCountDown", e3), e3 > Math.pow(2, 31) - 1 && (e3 = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
                var r3;
                t3.onTokenWillExpire && t3.onTokenWillExpire(), null === (r3 = t3.eventHandler) || void 0 === r3 || r3.dispatch("onTokenWillExpire"), B.info("onTokenWillExpire", Math.floor(e3 / 2));
              }, e3 / 2), this.tokenExpiredTimer = setTimeout(function() {
                var e4;
                B.info("onTokenExpired", 0), t3.onTokenExpired && t3.onTokenExpired(), null === (e4 = t3.eventHandler) || void 0 === e4 || e4.dispatch("onTokenExpired"), t3.close();
              }, e3);
            }, r2.prototype.compareTokenExpireTime = function(e3, t3) {
              var r3, o2 = Number(t3) - Number(e3);
              B.debug("compareTokenExpireTime", o2), o2 <= this.expiresIn / 2 && o2 > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onTokenWillExpire"), B.info("onTokenWillExpire", o2)) : o2 <= 0 && (this.closeByTokenExpired(), B.info("closeByTokenExpired", o2));
            }, r2.prototype.closeByTokenExpired = function() {
              var e3;
              B.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onTokenExpired"), this.close();
            }, r2.prototype.rejectMessage = function() {
              var e3 = this, t3 = Object.keys(this._msgHash);
              if (t3.length > 0) {
                var r3 = m.create({ type: d.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
                t3.forEach(function(t4) {
                  var o2, n2, i2;
                  (null === (o2 = e3.unMSyncSendMsgMap) || void 0 === o2 ? void 0 : o2.has(t4)) || (e3._msgHash[t4].reject instanceof Function && e3._msgHash[t4].reject(r3), null === (i2 = null === (n2 = e3._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 || i2.updateLocalMessage(t4, { serverMsgId: t4, status: Ne.FAIL }), e3._msgHash[t4].fail instanceof Function && e3._msgHash[t4].fail(r3), e3._msgHash[t4].messageTimer && clearTimeout(e3._msgHash[t4].messageTimer), delete e3._msgHash[t4]);
                });
              }
            }, r2.prototype.resetConnState = function() {
              this.mSync.stopHeartBeat(), this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0;
            }, r2.prototype.reconnect = function(e3) {
              var t3, r3 = this;
              if (this.logout)
                return B.warn("The user has already logged out when reconnecting");
              B.debug("socket reconnect readyState", this.sock.readyState), (this.sock.readyState !== ss.CONNECTING || e3) && (this.sock.readyState !== ss.OPEN || e3) && (B.info("reconnect: time", this.times), B.info("reconnect sock.readyState: ", this.sock.readyState), false === this.reconnecting && (this.reconnecting = true), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onReconnecting"), this.rejectMessage(), this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
                (r3.sock.readyState !== ss.OPEN || e3) && (B.info("login sock.readyState: ", r3.sock.readyState), r3.sock.close(), gs.call(r3).catch(function(e4) {
                  B.error("reconnect websocket failed", e4);
                }), r3.times++);
              }, 500 * this.times), this.autoReconnectNumTotal++);
            }, r2.prototype.send = function(e3) {
              return Promise.resolve(null);
            }, r2.prototype.setLoginInfoCustomExt = function(e3) {
              if (B.debug("setLoginInfoCustomExt", "params:", e3), e3) {
                if ("string" != typeof e3)
                  throw new Error("ext must be a string");
                if (e3.length > 1024)
                  throw new Error("ext length must be less than 1024");
              }
              this.loginInfoCustomExt = e3;
            }, r2.prototype.onShow = function() {
              var e3 = this;
              B.debug("execute onshow callback", this.lastHeartbeat), !this.logOut && !this.reconnecting && Date.now() - this.lastHeartbeat > 2e3 && (B.debug("send ping"), this.mSync.sendUnreadDeal(), this.probingTimer && clearTimeout(this.probingTimer), this.probingTimer = setTimeout(function() {
                B.error("Websocket connection timeout"), e3.logOut || e3.reconnecting || e3.reconnect(true);
              }, 8e3));
            }, r2._getSock = function() {
            }, r2;
          }();
          function us(e3, t3) {
            var r2 = t3.rpt, o2 = t3.isRetry, n2 = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", i2 = { requestName: y.RESISTER, requestUrl: n2 }, a2 = { headers: { "Content-type": "application/json" }, url: n2, dataType: "json", data: JSON.stringify({ username: e3.username, password: e3.password, nickname: e3.nickname || "" }) };
            return _e.ajax(a2, E.SDK_INTERNAL).then(function(e4) {
              var t4 = rs(rs({}, e4), { type: d.REQUEST_SUCCESS }), n3 = e4.extraInfo, a3 = n3.httpCode, s2 = n3.elapse;
              return r2({ isEndApi: true, isRetry: o2, data: rs(rs({}, { requestElapse: s2, isSuccess: 1, code: a3 }), i2) }), t4;
            }).catch(function(e4) {
              var t4 = e4.extraInfo, n3 = t4.elapse, a3 = t4.httpCode, s2 = t4.errDesc;
              throw r2({ isRetry: o2, data: rs(rs({}, { requestElapse: n3, isSuccess: 0, code: a3, codeDesc: s2 }), i2) }), e4;
            });
          }
          function ls(e3, t3) {
            return os(this, void 0, void 0, function() {
              var r2, o2;
              return ns(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    r2 = t3.rpt, n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 3, , 7]), [4, us.call(this, e3, t3)];
                  case 2:
                    return [2, n2.sent()];
                  case 3:
                    return !((o2 = n2.sent()).message.includes("Open registration doesn't allow") || o2.message.includes("username be unique") || o2.message.includes("is not legal")) && this.isHttpDNS && this.restIndex + 1 < this.restTotal ? (this.restIndex++, Rs.call(this), [4, ls.call(this, e3, { rpt: r2 })]) : [3, 5];
                  case 4:
                    return [2, n2.sent()];
                  case 5:
                    throw B.error("retry signup failed", o2), r2({ data: { isLastApi: 1, isSuccess: 0 } }), o2;
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }
          function ds(e3, t3) {
            var r2;
            return os(this, void 0, void 0, function() {
              var o2, n2, i2, a2, s2, c2, u2, l2, d2, p2 = this;
              return ns(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    if (o2 = Es.call(this, e3))
                      throw o2;
                    return B.debug("socket readyState", null === (r2 = this.sock) || void 0 === r2 ? void 0 : r2.readyState), n2 = t3.rpt, i2 = t3.isRetry, ys.call(this, e3), this.user = e3.user, a2 = this.context.appName, s2 = this.context.orgName, c2 = this.apiUrl + "/" + s2 + "/" + a2 + "/token", e3.accessToken ? (B.debug("login with accessToken"), this.grantType = "accessToken", this.token = e3.accessToken, this.context.accessToken = e3.accessToken, this.context.restTokenData = e3.accessToken, [2, { accessToken: e3.accessToken }]) : [3, 1];
                  case 1:
                    return e3.agoraToken ? (B.debug("login with agoraToken"), this.grantType = "agoraToken", this.token = e3.agoraToken, this.context.accessToken = e3.agoraToken, this.context.restTokenData = e3.agoraToken, [2, { accessToken: e3.agoraToken }]) : [3, 2];
                  case 2:
                    return B.debug("login with password"), this.grantType = "password", u2 = { grant_type: "password", username: e3.user, password: e3.pwd, timestamp: +/* @__PURE__ */ new Date() }, l2 = JSON.stringify(u2), d2 = { headers: { "Content-type": "application/json" }, url: c2, dataType: "json", data: l2, version: this.version }, B.debug("start get token"), [4, _e.ajax(d2, E.SDK_INTERNAL).then(function(e4) {
                      B.debug("get token success", e4), p2.token = e4.access_token, p2.context.restTokenData = e4.access_token, p2.context.accessToken = e4.access_token, p2.expiresIn = e4.expires_in;
                      var t4 = e4.extraInfo, r3 = t4.httpCode, o3 = t4.elapse, a3 = { requestName: y.LOGIN_BY_PWD, requestElapse: o3, requestUrl: c2, isSuccess: 1, code: r3 };
                      return n2({ isRetry: i2, data: a3 }), { accessToken: e4.access_token, duration: e4.expires_in };
                    }).catch(function(e4) {
                      var t4 = e4.extraInfo, r3 = t4.elapse, o3 = t4.httpCode, a3 = t4.errDesc, s3 = { requestName: y.LOGIN_BY_PWD, requestElapse: r3, requestUrl: c2, isSuccess: 0, code: o3, codeDesc: a3 };
                      throw n2({ isRetry: i2, data: s3 }), e4;
                    })];
                  case 3:
                    return [2, h2.sent()];
                }
              });
            });
          }
          function ps(e3, t3) {
            var r2;
            return os(this, void 0, void 0, function() {
              var o2, n2, i2;
              return ns(this, function(a2) {
                switch (a2.label) {
                  case 0:
                    o2 = t3.rpt, a2.label = 1;
                  case 1:
                    return a2.trys.push([1, 3, , 7]), [4, ds.call(this, e3, t3)];
                  case 2:
                    return [2, a2.sent()];
                  case 3:
                    return "invalid password" !== (n2 = a2.sent()).message && "user not found" !== n2.message && this.isHttpDNS && this.restIndex + 1 < this.restTotal ? (this.restIndex++, Rs.call(this), [4, ps.call(this, e3, { rpt: o2, isRetry: true })]) : [3, 5];
                  case 4:
                    return [2, a2.sent()];
                  case 5:
                    throw B.error("retry login failed", n2), o2({ data: { isLastApi: 1, isSuccess: 0 } }), this.clear(), i2 = void 0, n2.error && n2.error_description ? (i2 = m.create({ type: d.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: n2.error_description, data: n2 }), this.onError && this.onError(i2), i2) : (i2 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: null !== (r2 = n2.message) && void 0 !== r2 ? r2 : "login failed", data: n2 }), this.onError && this.onError(i2), i2);
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }
          function hs() {
            var e3;
            B.debug("online"), this.onOnline && this.onOnline(), null === (e3 = this.eventHandler) || void 0 === e3 || e3.dispatch("onOnline"), this.sock && 1 !== this.sock.readyState && (B.debug("sock.readyState:", this.sock.readyState), this.logOut || this.reconnecting || this.reconnect());
          }
          function fs() {
            var e3, t3;
            B.debug("offline"), null === (e3 = this.sock) || void 0 === e3 || e3.close(), this.onOffline && this.onOffline(), null === (t3 = this.eventHandler) || void 0 === t3 || t3.dispatch("onOffline");
          }
          function ms(e3) {
            var t3, r2, o2;
            return os(this, void 0, void 0, function() {
              var n2, i2, a2, s2;
              return ns(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    n2 = (/* @__PURE__ */ new Date()).getTime(), c2.label = 1;
                  case 1:
                    return c2.trys.push([1, 3, , 7]), [4, gs.call(this, e3)];
                  case 2:
                    return i2 = c2.sent(), e3 && e3({ data: { isLastApi: 1, isSuccess: 1, accessChannel: null === (t3 = this.socketHost[this.hostIndex]) || void 0 === t3 ? void 0 : t3.channel } }), [2, i2];
                  case 3:
                    if (a2 = c2.sent(), B.error("connect to msync failed times:", this.retryConnectTimes, a2), X.includes(a2.type))
                      throw e3 && e3({ data: { isLastApi: 1, isSuccess: 0, accessChannel: null === (r2 = this.socketHost[this.hostIndex]) || void 0 === r2 ? void 0 : r2.channel, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || a2.message } }), a2;
                    return this.retryConnectTimes++, this.retryConnectTimes < 3 ? (this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1, _s.call(this)), a2.type === d.REQUEST_TIMEOUT && "provision timeout" === a2.message || (s2 = (/* @__PURE__ */ new Date()).getTime() - n2, null == e3 || e3({ isRetry: 1 !== this.retryConnectTimes, data: { requestUrl: this.url, requestName: y.CONNECT_WEBSOCKET, isSuccess: 0, code: T.closed, requestElapse: s2, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || "websocket close" } })), [4, ms.call(this, e3)]) : [3, 5];
                  case 4:
                    return c2.sent(), [3, 6];
                  case 5:
                    throw B.error("connect failed three times", a2), e3 && e3({ data: { isLastApi: 1, isSuccess: 0, accessChannel: null === (o2 = this.socketHost[this.hostIndex]) || void 0 === o2 ? void 0 : o2.channel, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || a2.message } }), a2;
                  case 6:
                    return [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }
          function gs(e3) {
            var t3 = this, r2 = (/* @__PURE__ */ new Date()).getTime(), o2 = "pending";
            return new Promise(function(n2, i2) {
              var a2;
              t3._getSock ? a2 = t3._getSock() : (a2 = new WebSocket(t3.url)).binaryType = "arraybuffer", t3.sock = a2, t3.connectionTimer && clearTimeout(t3.connectionTimer), t3.connectionTimer = setTimeout(function() {
                t3.disconnectedReason = { type: d.REQUEST_TIMEOUT, message: "connection timeout" }, o2 = "rejected", a2.close(), null == i2 || i2(t3.disconnectedReason);
              }, z), B.debug("start connect ws"), t3.connectionResolve = n2, t3.connectionReject = i2;
              var s2 = function() {
                if (t3.connectionTimer && clearTimeout(t3.connectionTimer), B.debug("websocket onOpen"), e3) {
                  var o3 = (/* @__PURE__ */ new Date()).getTime() - r2;
                  e3({ isRetry: 0 !== t3.retryConnectTimes, data: { requestUrl: t3.url, requestName: y.CONNECT_WEBSOCKET, isSuccess: 1, code: T.success, requestElapse: o3 } });
                }
                var n3;
                n3 = t3._getSock ? _e.flow([t3.mSync.generateProvision, t3.mSync.base64transform])() : t3.mSync.generateProvision();
                try {
                  t3.provisionTimer && clearTimeout(t3.provisionTimer), t3.provisionTimer = setTimeout(function() {
                    B.debug("provision timeout"), t3.disconnectedReason = m.create({ type: d.REQUEST_TIMEOUT, message: "provision timeout" }), a2.close(), null == i2 || i2(t3.disconnectedReason);
                  }, V), a2.send(n3);
                } catch (e4) {
                  var s3 = m.create({ type: d.SDK_RUNTIME_ERROR, message: "send message error", data: e4 });
                  t3.onError && t3.onError(s3);
                }
              }, c2 = function(e4) {
                t3.connectionTimer && clearTimeout(t3.connectionTimer), setTimeout(function() {
                  var r3, n3, a3, s3, c3, u3, l2;
                  if (B.debug("websocket onClose, isLogging:", t3._isLogging, e4), "zfb" !== is.platform && "dd" !== is.platform || (t3.sock.readyState = ss.CLOSED), t3._isLogging)
                    return null == i2 || i2({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }), void (o2 = "rejected");
                  if ("rejected" !== o2)
                    if (o2 = "rejected", t3.logOut)
                      t3.clear(), t3.resetConnState(), null === (n3 = null === (r3 = null == t3 ? void 0 : t3._localCache) || void 0 === r3 ? void 0 : r3.getInstance()) || void 0 === n3 || n3.close(), t3.onClosed && t3.onClosed(), null === (a3 = t3.eventHandler) || void 0 === a3 || a3.dispatch("onDisconnected", t3.disconnectedReason), null == i2 || i2(t3.disconnectedReason || { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" });
                    else if (t3.autoReconnectNumTotal < t3.autoReconnectNumMax) {
                      t3.reconnect();
                      var p2 = { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                      t3.onError && t3.onError(p2), t3.autoReconnectNumTotal % t3.refreshDNSIntervals == 0 && "web" === is.platform && t3.isHttpDNS && (B.debug("refresh dns config when websocket close"), Ts.call(t3, function() {
                      }));
                    } else
                      null === (s3 = t3.unMSyncSendMsgMap) || void 0 === s3 || s3.clear(), t3.rejectMessage(), p2 = { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, t3.disconnectedReason = m.create({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), t3.onError && t3.onError(p2), null === (u3 = null === (c3 = null == t3 ? void 0 : t3._localCache) || void 0 === c3 ? void 0 : c3.getInstance()) || void 0 === u3 || u3.close(), t3.onClosed && t3.onClosed(), null === (l2 = t3.eventHandler) || void 0 === l2 || l2.dispatch("onDisconnected", t3.disconnectedReason), t3.resetConnState(), t3.reconnecting = false, null == i2 || i2(p2), B.debug("reconnect fail");
                  else
                    B.debug("reject is null");
                }, 0);
              }, u2 = function(e4) {
                var r3 = t3.mSync, o3 = r3.decodeMSync, n3 = r3.distributeMSync;
                _e.flow([o3, n3])(e4);
              };
              "web" === is.platform ? (a2.onopen = s2, a2.onclose = c2, a2.onmessage = u2) : (a2.onOpen(s2), a2.onMessage(u2), a2.onClose(c2), "undefined" != typeof window && window.WebSocket || a2.onError(function(e4) {
                var r3, n3, a3, s3;
                if (t3.connectionTimer && clearTimeout(t3.connectionTimer), B.debug("websocket onerror, isLogging:", t3._isLogging, e4), t3.sock.readyState !== ss.CLOSED && (t3.sock = rs(rs({}, t3.sock), { close: t3.sock.close, send: t3.sock.send, readyState: ss.CLOSED })), t3.onError && t3.onError({ type: d.WEBIM_CONNECTION_ERROR, message: "on socket error", data: e4 }), t3._isLogging)
                  return null == i2 || i2({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }), void (o2 = "rejected");
                if ("rejected" !== o2) {
                  if (o2 = "rejected", !t3.logOut)
                    if (t3.autoReconnectNumTotal < t3.autoReconnectNumMax)
                      B.debug("sock.onError reconnect", t3.autoReconnectNumTotal, t3.autoReconnectNumMax), t3.reconnect(), t3.autoReconnectNumTotal % t3.refreshDNSIntervals == 0 && "web" === is.platform && t3.isHttpDNS && (B.debug("refresh dns config when websocket error"), Ts.call(t3, function() {
                      }));
                    else {
                      var c3 = { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                      t3.disconnectedReason = m.create({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), null === (r3 = t3.unMSyncSendMsgMap) || void 0 === r3 || r3.clear(), t3.rejectMessage(), t3.onError && t3.onError(c3), null === (a3 = null === (n3 = null == t3 ? void 0 : t3._localCache) || void 0 === n3 ? void 0 : n3.getInstance()) || void 0 === a3 || a3.close(), t3.onClosed && t3.onClosed(), null === (s3 = t3.eventHandler) || void 0 === s3 || s3.dispatch("onDisconnected", t3.disconnectedReason), t3.resetConnState(), t3.reconnecting = false, null == i2 || i2(c3), B.debug("reconnect fail");
                    }
                } else
                  B.debug("reject is null");
              }));
            });
          }
          function Es(e3) {
            if ("object" != typeof e3 || null === e3)
              return m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the param is illegal" });
            if (!e3.user || "string" != typeof e3.user) {
              var t3 = m.create({ type: d.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user is empty or type is not string" });
              return B.debug("open params error", t3), t3;
            }
            return !("agoraToken" in e3) || e3.agoraToken && "string" == typeof e3.agoraToken ? !("accessToken" in e3) || e3.accessToken && "string" == typeof e3.accessToken ? "accessToken" in e3 || "agoraToken" in e3 || e3.pwd ? void 0 : (t3 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the accessToken or pwd is illegal" }), B.debug("open params error", t3), t3) : (t3 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the accessToken is illegal" }), B.debug("open params error", t3), t3) : (t3 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the agoraToken is illegal" }), B.debug("open params error", t3), console.warn("agoraToken is deprecated, please use accessToken instead"), t3);
          }
          function ys(e3) {
            this.context.jid = { appKey: this.appKey, name: e3.user, domain: this.domain, clientResource: this.clientResource }, this.context.root = this.root, this.context.userId = e3.user, this.context.appKey = this.appKey, this.context.appName = this.appName, this.context.orgName = this.orgName;
          }
          function vs(e3) {
            var t3 = this, r2 = e3.rpt, o2 = e3.isRetry, n2 = this.dnsIndex < this.dnsTotal ? this.dnsIndex : 0, i2 = this.dnsArr[n2] + "/easemob/server.json";
            B.debug("call getHttpDNS: " + this.dnsIndex);
            var a2 = { url: i2, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) } };
            return _e.ajax(a2, E.SDK_INTERNAL).then(function(e4) {
              if (!e4)
                throw m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "get DNS failed" });
              B.debug("getHttpDNS success");
              var n3 = e4.rest.hosts, a3 = t3.https ? "https" : "http";
              if (B.info("httpType: " + a3), !n3)
                throw m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "DNS hosts resolution failed", data: e4.rest });
              var s2 = n3.filter(function(e5) {
                if (e5.protocol === a3)
                  return e5;
              });
              t3.restHosts = s2, t3.restTotal = s2.length;
              var c2 = e4["msync-ws"].hosts;
              if (!c2)
                throw m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "DNS msync-ws resolution failed", data: e4["msync-ws"] });
              var u2 = c2.filter(function(e5) {
                if (e5.protocol === a3)
                  return e5;
              });
              if (t3.socketHost = u2, t3.hostTotal = u2.length, t3.isHttpDNS && Rs.call(t3), t3.isHttpDNS && _s.call(t3), t3._reportLogs = "true" === e4.enableReportLogs, t3._reportInterval = Number(e4.reportInterval || J), "true" === (null == e4 ? void 0 : e4.enableDataReport) ? (t3.dataReport.setIsCollectDt(true), t3.dataReport.setIsReportDt(true)) : (t3.dataReport.setIsReportDt(false), t3.dataReport.setIsCollectDt(false)), "false" === (null == e4 ? void 0 : e4.uploadinparts_enable) && (t3.uploadPartEnable = false), e4.extraInfo) {
                var l2 = e4.extraInfo, p2 = l2.elapse, h2 = l2.httpCode, f2 = { requestUrl: i2, requestName: y.GET_DNS, requestElapse: p2, isSuccess: 1, code: h2 };
                r2 && r2({ isRetry: o2, data: f2 });
              }
            }).catch(function(e4) {
              var t4 = e4.extraInfo, n3 = t4.elapse, a3 = t4.httpCode, s2 = t4.errDesc, c2 = { requestUrl: i2, requestName: y.GET_DNS, isSuccess: 0, code: a3, codeDesc: s2, requestElapse: n3 };
              throw r2 && r2({ isRetry: o2, data: c2 }), m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: e4.message, data: e4 });
            });
          }
          function Ts(e3, t3) {
            return os(this, void 0, void 0, function() {
              var r2;
              return ns(this, function(o2) {
                switch (o2.label) {
                  case 0:
                    return o2.trys.push([0, 2, , 6]), [4, vs.call(this, { rpt: e3, isRetry: t3 })];
                  case 1:
                  case 3:
                    return [2, o2.sent()];
                  case 2:
                    return r2 = o2.sent(), B.error("get DNS failed", r2, "times:", this.dnsIndex), this.dnsIndex++, this.dnsIndex < this.dnsTotal ? [4, Ts.call(this, e3, true)] : [3, 4];
                  case 4:
                    throw B.error("retryRequestDNS failed"), m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "get DNS failed", data: r2 });
                  case 5:
                    return [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }
          function _s() {
            var e3 = this.socketHost[this.hostIndex], t3 = e3.domain, r2 = e3.ip, o2 = e3.port, n2 = "";
            n2 = t3 || r2, o2 && "80" !== o2 && "443" !== o2 && (n2 += ":" + o2), n2 && (this.url = "//" + n2 + "/websocket");
            var i2 = this.https ? "wss:" : "ws:";
            this.url = i2 + this.url;
          }
          function Rs() {
            var e3, t3;
            if (this.restIndex > this.restTotal)
              return B.debug("restIndex > restTotal"), "";
            var r2 = "", o2 = this.restHosts[this.restIndex], n2 = o2.domain, i2 = o2.ip, a2 = o2.port, s2 = this.https ? "https:" : "http:";
            return i2 && "undefined" != typeof window && "http:" === (null === (e3 = null === window || void 0 === window ? void 0 : window.location) || void 0 === e3 ? void 0 : e3.protocol) ? r2 = s2 + "//" + i2 + ":" + a2 : (r2 = s2 + "//" + n2, a2 && "80" !== a2 && "443" !== a2 && (r2 += ":".concat(a2)), "undefined" == typeof window || window.location || (r2 = "https://" + n2), "undefined" != typeof window && window.location && "file:" === (null === (t3 = window.location) || void 0 === t3 ? void 0 : t3.protocol) && (r2 = "https://" + n2)), "undefined" == typeof window && (r2 = s2 + "//" + n2), this.apiUrl = r2, r2;
          }
          var Os = _e.getEnvInfo(), Is = Os.global;
          p.util.Long = f(), p.configure();
          var Ss = p.Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 }, editMessageId: { type: "uint64", id: 11 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 }, subType: { type: "SubType", id: 22 }, title: { type: "string", id: 23 }, summary: { type: "string", id: 24 }, combineLevel: { type: "int32", id: 25 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7, COMBINE: 8 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } }, SubType: { values: { COMBINE: 0 } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7, EDIT: 8 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: false } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { rule: "repeated", type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 }, directedUsers: { rule: "repeated", type: "string", id: 10 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1, ROUTE_DIRECT: 2 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: false } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: false } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 }, authToken: { type: "string", id: 18 }, sessionId: { type: "string", id: 20 }, reason: { type: "string", id: 21 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 }, mucMemberCount: { type: "int32", id: 13 }, ext: { type: "string", id: 14 }, leaveOtherRooms: { type: "bool", id: 15 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44, GROUP_MEMBER_METADATA_UPDATE: 45 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 }, reason: { type: "string", id: 10 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
          cs.prototype.root = Ss;
          var Cs = function(e3) {
            this.onOpen = Is.onSocketOpen, this.onClose = Is.onSocketClose, this.onMessage = Is.onSocketMessage, this.onError = Is.onSocketError, this.close = Is.closeSocket, this.send = Is.sendSocketMessage, this.connectSocket = Is.connectSocket, this.readyState = 3, this.offSocketOpen = Is.offSocketOpen, this.offSocketMessage = Is.offSocketMessage, this.offSocketError = Is.offSocketError, this.offSocketClose = Is.offSocketClose, this.connect = function() {
              this.offSocketOpen(), this.offSocketMessage(), this.offSocketClose(), this.offSocketError(), Is.connectSocket({ url: e3.url, header: { "content-type": "application/json" }, success: function(e4) {
              }, fail: function() {
              } });
            };
          };
          cs.prototype._getSock = function() {
            var e3, t3 = this;
            return this.sock && this.sock.close && this.sock.close(), (e3 = "zfb" === Os.platform || "dd" === Os.platform ? new Cs(this) : Is.connectSocket({ url: this.url, header: { "content-type": "application/json" }, success: function(e4) {
              B.debug("socket connect success", e4);
            }, fail: function(e4) {
              B.debug("socket connect fail", e4), t3.reconnecting = false, e4.errMsg.indexOf("suspend");
            }, complete: function() {
            } })).connect && e3.connect(), e3;
          }, cs.prototype.getUniqueId = _e.getUniqueId, cs.prototype.deviceId = "miniProgram_" + Os.platform, cs.prototype._localCache = void 0;
          var Ns = B.getLogger("defaultLogger");
          Ns.setConfig({ useCache: false, maxCache: 3145728 }), Ns.enableAll(), _e.ajax = _e.wxRequest;
          var As = { connection: cs, message: We, utils: _e, logger: Ns, statusCode: d };
        }(), o;
      }();
    });
  }
});
export default require_Easemob_chat();
//# sourceMappingURL=easemob-websdk_uniApp_Easemob-chat.js.map
