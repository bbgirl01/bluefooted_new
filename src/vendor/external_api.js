! function (t, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.JitsiMeetExternalAPI = n() : t.JitsiMeetExternalAPI = n()
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    var e = {};
    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return n.d(e, "a", e), e
    }, n.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }, n.p = "/libs/", n(n.s = 127)
  }([function (t, n, e) {
    var r = e(2),
      i = e(21),
      o = e(12),
      u = e(13),
      a = e(18),
      s = "prototype",
      c = function (t, n, e) {
        var f, l, h, v, p = t & c.F,
          d = t & c.G,
          g = t & c.S,
          y = t & c.P,
          m = t & c.B,
          b = d ? r : g ? r[n] || (r[n] = {}) : (r[n] || {})[s],
          _ = d ? i : i[n] || (i[n] = {}),
          w = _[s] || (_[s] = {});
        d && (e = n);
        for (f in e) h = ((l = !p && b && void 0 !== b[f]) ? b : e)[f], v = m && l ? a(h, r) : y && "function" == typeof h ? a(Function.call, h) : h, b && u(b, f, h, t & c.U), _[f] != h && o(_, f, v), y && w[f] != h && (w[f] = h)
      };
    r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
  }, function (t, n, e) {
    var r = e(4);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, function (t, n) {
    var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = e)
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, function (t, n) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, function (t, n, e) {
    var r = e(49)("wks"),
      i = e(32),
      o = e(2).Symbol,
      u = "function" == typeof o;
    (t.exports = function (t) {
      return r[t] || (r[t] = u && o[t] || (u ? o : i)("Symbol." + t))
    }).store = r
  }, function (t, n, e) {
    t.exports = !e(3)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n, e) {
    var r = e(1),
      i = e(91),
      o = e(22),
      u = Object.defineProperty;
    n.f = e(6) ? Object.defineProperty : function (t, n, e) {
      if (r(t), n = o(n, !0), r(e), i) try {
        return u(t, n, e)
      } catch (t) {}
      if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
      return "value" in e && (t[n] = e.value), t
    }
  }, function (t, n, e) {
    var r = e(24),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0
    }
  }, function (t, n, e) {
    var r = e(23);
    t.exports = function (t) {
      return Object(r(t))
    }
  }, function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, function (t, n) {
    var e = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return e.call(t, n)
    }
  }, function (t, n, e) {
    var r = e(7),
      i = e(31);
    t.exports = e(6) ? function (t, n, e) {
      return r.f(t, n, i(1, e))
    } : function (t, n, e) {
      return t[n] = e, t
    }
  }, function (t, n, e) {
    var r = e(2),
      i = e(12),
      o = e(11),
      u = e(32)("src"),
      a = "toString",
      s = Function[a],
      c = ("" + s).split(a);
    e(21).inspectSource = function (t) {
      return s.call(t)
    }, (t.exports = function (t, n, e, a) {
      var s = "function" == typeof e;
      s && (o(e, "name") || i(e, "name", n)), t[n] !== e && (s && (o(e, u) || i(e, u, t[n] ? "" + t[n] : c.join(String(n)))), t === r ? t[n] = e : a ? t[n] ? t[n] = e : i(t, n, e) : (delete t[n], i(t, n, e)))
    })(Function.prototype, a, function () {
      return "function" == typeof this && this[u] || s.call(this)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(3),
      o = e(23),
      u = /"/g,
      a = function (t, n, e, r) {
        var i = String(o(t)),
          a = "<" + n;
        return "" !== e && (a += " " + e + '="' + String(r).replace(u, "&quot;") + '"'), a + ">" + i + "</" + n + ">"
      };
    t.exports = function (t, n) {
      var e = {};
      e[t] = n(a), r(r.P + r.F * i(function () {
        var n = "" [t]('"');
        return n !== n.toLowerCase() || n.split('"').length > 3
      }), "String", e)
    }
  }, function (t, n, e) {
    var r = e(46),
      i = e(23);
    t.exports = function (t) {
      return r(i(t))
    }
  }, function (t, n, e) {
    var r = e(47),
      i = e(31),
      o = e(15),
      u = e(22),
      a = e(11),
      s = e(91),
      c = Object.getOwnPropertyDescriptor;
    n.f = e(6) ? c : function (t, n) {
      if (t = o(t), n = u(n, !0), s) try {
        return c(t, n)
      } catch (t) {}
      if (a(t, n)) return i(!r.f.call(t, n), t[n])
    }
  }, function (t, n, e) {
    var r = e(11),
      i = e(9),
      o = e(65)("IE_PROTO"),
      u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
  }, function (t, n, e) {
    var r = e(10);
    t.exports = function (t, n, e) {
      if (r(t), void 0 === n) return t;
      switch (e) {
        case 1:
          return function (e) {
            return t.call(n, e)
          };
        case 2:
          return function (e, r) {
            return t.call(n, e, r)
          };
        case 3:
          return function (e, r, i) {
            return t.call(n, e, r, i)
          }
      }
      return function () {
        return t.apply(n, arguments)
      }
    }
  }, function (t, n) {
    var e = {}.toString;
    t.exports = function (t) {
      return e.call(t).slice(8, -1)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(3);
    t.exports = function (t, n) {
      return !!t && r(function () {
        n ? t.call(null, function () {}, 1) : t.call(null)
      })
    }
  }, function (t, n) {
    var e = t.exports = {
      version: "2.5.3"
    };
    "number" == typeof __e && (__e = e)
  }, function (t, n, e) {
    var r = e(4);
    t.exports = function (t, n) {
      if (!r(t)) return t;
      var e, i;
      if (n && "function" == typeof (e = t.toString) && !r(i = e.call(t))) return i;
      if ("function" == typeof (e = t.valueOf) && !r(i = e.call(t))) return i;
      if (!n && "function" == typeof (e = t.toString) && !r(i = e.call(t))) return i;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (t, n) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, function (t, n) {
    var e = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
    }
  }, function (t, n, e) {
    var r = e(0),
      i = e(21),
      o = e(3);
    t.exports = function (t, n) {
      var e = (i.Object || {})[t] || Object[t],
        u = {};
      u[t] = n(e), r(r.S + r.F * o(function () {
        e(1)
      }), "Object", u)
    }
  }, function (t, n, e) {
    var r = e(18),
      i = e(46),
      o = e(9),
      u = e(8),
      a = e(82);
    t.exports = function (t, n) {
      var e = 1 == t,
        s = 2 == t,
        c = 3 == t,
        f = 4 == t,
        l = 6 == t,
        h = 5 == t || l,
        v = n || a;
      return function (n, a, p) {
        for (var d, g, y = o(n), m = i(y), b = r(a, p, 3), _ = u(m.length), w = 0, x = e ? v(n, _) : s ? v(n, 0) : void 0; _ > w; w++)
          if ((h || w in m) && (g = b(d = m[w], w, y), t))
            if (e) x[w] = g;
            else if (g) switch (t) {
          case 3:
            return !0;
          case 5:
            return d;
          case 6:
            return w;
          case 2:
            x.push(d)
        } else if (f) return !1;
        return l ? -1 : c || f ? f : x
      }
    }
  }, function (t, n, e) {
    "use strict";
    if (e(6)) {
      var r = e(33),
        i = e(2),
        o = e(3),
        u = e(0),
        a = e(59),
        s = e(88),
        c = e(18),
        f = e(39),
        l = e(31),
        h = e(12),
        v = e(41),
        p = e(24),
        d = e(8),
        g = e(117),
        y = e(35),
        m = e(22),
        b = e(11),
        _ = e(48),
        w = e(4),
        x = e(9),
        S = e(79),
        E = e(36),
        O = e(17),
        M = e(37).f,
        L = e(81),
        k = e(32),
        P = e(5),
        j = e(26),
        F = e(50),
        I = e(57),
        A = e(84),
        N = e(44),
        R = e(54),
        T = e(38),
        C = e(83),
        D = e(107),
        W = e(7),
        U = e(16),
        G = W.f,
        V = U.f,
        B = i.RangeError,
        q = i.TypeError,
        J = i.Uint8Array,
        z = "ArrayBuffer",
        Y = "Shared" + z,
        H = "BYTES_PER_ELEMENT",
        K = "prototype",
        X = Array[K],
        $ = s.ArrayBuffer,
        Z = s.DataView,
        Q = j(0),
        tt = j(2),
        nt = j(3),
        et = j(4),
        rt = j(5),
        it = j(6),
        ot = F(!0),
        ut = F(!1),
        at = A.values,
        st = A.keys,
        ct = A.entries,
        ft = X.lastIndexOf,
        lt = X.reduce,
        ht = X.reduceRight,
        vt = X.join,
        pt = X.sort,
        dt = X.slice,
        gt = X.toString,
        yt = X.toLocaleString,
        mt = P("iterator"),
        bt = P("toStringTag"),
        _t = k("typed_constructor"),
        wt = k("def_constructor"),
        xt = a.CONSTR,
        St = a.TYPED,
        Et = a.VIEW,
        Ot = "Wrong length!",
        Mt = j(1, function (t, n) {
          return Ft(I(t, t[wt]), n)
        }),
        Lt = o(function () {
          return 1 === new J(new Uint16Array([1]).buffer)[0]
        }),
        kt = !!J && !!J[K].set && o(function () {
          new J(1).set({})
        }),
        Pt = function (t, n) {
          var e = p(t);
          if (e < 0 || e % n) throw B("Wrong offset!");
          return e
        },
        jt = function (t) {
          if (w(t) && St in t) return t;
          throw q(t + " is not a typed array!")
        },
        Ft = function (t, n) {
          if (!(w(t) && _t in t)) throw q("It is not a typed array constructor!");
          return new t(n)
        },
        It = function (t, n) {
          return At(I(t, t[wt]), n)
        },
        At = function (t, n) {
          for (var e = 0, r = n.length, i = Ft(t, r); r > e;) i[e] = n[e++];
          return i
        },
        Nt = function (t, n, e) {
          G(t, n, {
            get: function () {
              return this._d[e]
            }
          })
        },
        Rt = function (t) {
          var n, e, r, i, o, u, a = x(t),
            s = arguments.length,
            f = s > 1 ? arguments[1] : void 0,
            l = void 0 !== f,
            h = L(a);
          if (void 0 != h && !S(h)) {
            for (u = h.call(a), r = [], n = 0; !(o = u.next()).done; n++) r.push(o.value);
            a = r
          }
          for (l && s > 2 && (f = c(f, arguments[2], 2)), n = 0, e = d(a.length), i = Ft(this, e); e > n; n++) i[n] = l ? f(a[n], n) : a[n];
          return i
        },
        Tt = function () {
          for (var t = 0, n = arguments.length, e = Ft(this, n); n > t;) e[t] = arguments[t++];
          return e
        },
        Ct = !!J && o(function () {
          yt.call(new J(1))
        }),
        Dt = function () {
          return yt.apply(Ct ? dt.call(jt(this)) : jt(this), arguments)
        },
        Wt = {
          copyWithin: function (t, n) {
            return D.call(jt(this), t, n, arguments.length > 2 ? arguments[2] : void 0)
          },
          every: function (t) {
            return et(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          fill: function (t) {
            return C.apply(jt(this), arguments)
          },
          filter: function (t) {
            return It(this, tt(jt(this), t, arguments.length > 1 ? arguments[1] : void 0))
          },
          find: function (t) {
            return rt(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          findIndex: function (t) {
            return it(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          forEach: function (t) {
            Q(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          indexOf: function (t) {
            return ut(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          includes: function (t) {
            return ot(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          join: function (t) {
            return vt.apply(jt(this), arguments)
          },
          lastIndexOf: function (t) {
            return ft.apply(jt(this), arguments)
          },
          map: function (t) {
            return Mt(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          reduce: function (t) {
            return lt.apply(jt(this), arguments)
          },
          reduceRight: function (t) {
            return ht.apply(jt(this), arguments)
          },
          reverse: function () {
            for (var t, n = jt(this).length, e = Math.floor(n / 2), r = 0; r < e;) t = this[r], this[r++] = this[--n], this[n] = t;
            return this
          },
          some: function (t) {
            return nt(jt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          },
          sort: function (t) {
            return pt.call(jt(this), t)
          },
          subarray: function (t, n) {
            var e = jt(this),
              r = e.length,
              i = y(t, r);
            return new(I(e, e[wt]))(e.buffer, e.byteOffset + i * e.BYTES_PER_ELEMENT, d((void 0 === n ? r : y(n, r)) - i))
          }
        },
        Ut = function (t, n) {
          return It(this, dt.call(jt(this), t, n))
        },
        Gt = function (t) {
          jt(this);
          var n = Pt(arguments[1], 1),
            e = this.length,
            r = x(t),
            i = d(r.length),
            o = 0;
          if (i + n > e) throw B(Ot);
          for (; o < i;) this[n + o] = r[o++]
        },
        Vt = {
          entries: function () {
            return ct.call(jt(this))
          },
          keys: function () {
            return st.call(jt(this))
          },
          values: function () {
            return at.call(jt(this))
          }
        },
        Bt = function (t, n) {
          return w(t) && t[St] && "symbol" != typeof n && n in t && String(+n) == String(n)
        },
        qt = function (t, n) {
          return Bt(t, n = m(n, !0)) ? l(2, t[n]) : V(t, n)
        },
        Jt = function (t, n, e) {
          return !(Bt(t, n = m(n, !0)) && w(e) && b(e, "value")) || b(e, "get") || b(e, "set") || e.configurable || b(e, "writable") && !e.writable || b(e, "enumerable") && !e.enumerable ? G(t, n, e) : (t[n] = e.value, t)
        };
      xt || (U.f = qt, W.f = Jt), u(u.S + u.F * !xt, "Object", {
        getOwnPropertyDescriptor: qt,
        defineProperty: Jt
      }), o(function () {
        gt.call({})
      }) && (gt = yt = function () {
        return vt.call(this)
      });
      var zt = v({}, Wt);
      v(zt, Vt), h(zt, mt, Vt.values), v(zt, {
        slice: Ut,
        set: Gt,
        constructor: function () {},
        toString: gt,
        toLocaleString: Dt
      }), Nt(zt, "buffer", "b"), Nt(zt, "byteOffset", "o"), Nt(zt, "byteLength", "l"), Nt(zt, "length", "e"), G(zt, bt, {
        get: function () {
          return this[St]
        }
      }), t.exports = function (t, n, e, s) {
        var c = t + ((s = !!s) ? "Clamped" : "") + "Array",
          l = "get" + t,
          v = "set" + t,
          p = i[c],
          y = p || {},
          m = p && O(p),
          b = !p || !a.ABV,
          x = {},
          S = p && p[K],
          L = function (t, e) {
            G(t, e, {
              get: function () {
                return function (t, e) {
                  var r = t._d;
                  return r.v[l](e * n + r.o, Lt)
                }(this, e)
              },
              set: function (t) {
                return function (t, e, r) {
                  var i = t._d;
                  s && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[v](e * n + i.o, r, Lt)
                }(this, e, t)
              },
              enumerable: !0
            })
          };
        b ? (p = e(function (t, e, r, i) {
          f(t, p, c, "_d");
          var o, u, a, s, l = 0,
            v = 0;
          if (w(e)) {
            if (!(e instanceof $ || (s = _(e)) == z || s == Y)) return St in e ? At(p, e) : Rt.call(p, e);
            o = e, v = Pt(r, n);
            var y = e.byteLength;
            if (void 0 === i) {
              if (y % n) throw B(Ot);
              if ((u = y - v) < 0) throw B(Ot)
            } else if ((u = d(i) * n) + v > y) throw B(Ot);
            a = u / n
          } else a = g(e), o = new $(u = a * n);
          for (h(t, "_d", {
              b: o,
              o: v,
              l: u,
              e: a,
              v: new Z(o)
            }); l < a;) L(t, l++)
        }), S = p[K] = E(zt), h(S, "constructor", p)) : o(function () {
          p(1)
        }) && o(function () {
          new p(-1)
        }) && R(function (t) {
          new p, new p(null), new p(1.5), new p(t)
        }, !0) || (p = e(function (t, e, r, i) {
          f(t, p, c);
          var o;
          return w(e) ? e instanceof $ || (o = _(e)) == z || o == Y ? void 0 !== i ? new y(e, Pt(r, n), i) : void 0 !== r ? new y(e, Pt(r, n)) : new y(e) : St in e ? At(p, e) : Rt.call(p, e) : new y(g(e))
        }), Q(m !== Function.prototype ? M(y).concat(M(m)) : M(y), function (t) {
          t in p || h(p, t, y[t])
        }), p[K] = S, r || (S.constructor = p));
        var k = S[mt],
          P = !!k && ("values" == k.name || void 0 == k.name),
          j = Vt.values;
        h(p, _t, !0), h(S, St, c), h(S, Et, !0), h(S, wt, p), (s ? new p(1)[bt] == c : bt in S) || G(S, bt, {
          get: function () {
            return c
          }
        }), x[c] = p, u(u.G + u.W + u.F * (p != y), x), u(u.S, c, {
          BYTES_PER_ELEMENT: n
        }), u(u.S + u.F * o(function () {
          y.of.call(p, 1)
        }), c, {
          from: Rt,
          of: Tt
        }), H in S || h(S, H, n), u(u.P, c, Wt), T(c), u(u.P + u.F * kt, c, {
          set: Gt
        }), u(u.P + u.F * !P, c, Vt), r || S.toString == gt || (S.toString = gt), u(u.P + u.F * o(function () {
          new p(1).slice()
        }), c, {
          slice: Ut
        }), u(u.P + u.F * (o(function () {
          return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
        }) || !o(function () {
          S.toLocaleString.call([1, 2])
        })), c, {
          toLocaleString: Dt
        }), N[c] = P ? k : j, r || P || h(S, mt, j)
      }
    } else t.exports = function () {}
  }, function (t, n, e) {
    var r = e(112),
      i = e(0),
      o = e(49)("metadata"),
      u = o.store || (o.store = new(e(115))),
      a = function (t, n, e) {
        var i = u.get(t);
        if (!i) {
          if (!e) return;
          u.set(t, i = new r)
        }
        var o = i.get(n);
        if (!o) {
          if (!e) return;
          i.set(n, o = new r)
        }
        return o
      };
    t.exports = {
      store: u,
      map: a,
      has: function (t, n, e) {
        var r = a(n, e, !1);
        return void 0 !== r && r.has(t)
      },
      get: function (t, n, e) {
        var r = a(n, e, !1);
        return void 0 === r ? void 0 : r.get(t)
      },
      set: function (t, n, e, r) {
        a(e, r, !0).set(t, n)
      },
      keys: function (t, n) {
        var e = a(t, n, !1),
          r = [];
        return e && e.forEach(function (t, n) {
          r.push(n)
        }), r
      },
      key: function (t) {
        return void 0 === t || "symbol" == typeof t ? t : String(t)
      },
      exp: function (t) {
        i(i.S, "Reflect", t)
      }
    }
  }, function (t, n, e) {
    var r = e(32)("meta"),
      i = e(4),
      o = e(11),
      u = e(7).f,
      a = 0,
      s = Object.isExtensible || function () {
        return !0
      },
      c = !e(3)(function () {
        return s(Object.preventExtensions({}))
      }),
      f = function (t) {
        u(t, r, {
          value: {
            i: "O" + ++a,
            w: {}
          }
        })
      },
      l = t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (t, n) {
          if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!o(t, r)) {
            if (!s(t)) return "F";
            if (!n) return "E";
            f(t)
          }
          return t[r].i
        },
        getWeak: function (t, n) {
          if (!o(t, r)) {
            if (!s(t)) return !0;
            if (!n) return !1;
            f(t)
          }
          return t[r].w
        },
        onFreeze: function (t) {
          return c && l.NEED && s(t) && !o(t, r) && f(t), t
        }
      }
  }, function (t, n, e) {
    var r = e(5)("unscopables"),
      i = Array.prototype;
    void 0 == i[r] && e(12)(i, r, {}), t.exports = function (t) {
      i[r][t] = !0
    }
  }, function (t, n) {
    t.exports = function (t, n) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n
      }
    }
  }, function (t, n) {
    var e = 0,
      r = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
    }
  }, function (t, n) {
    t.exports = !1
  }, function (t, n, e) {
    var r = e(93),
      i = e(66);
    t.exports = Object.keys || function (t) {
      return r(t, i)
    }
  }, function (t, n, e) {
    var r = e(24),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, n) {
      return (t = r(t)) < 0 ? i(t + n, 0) : o(t, n)
    }
  }, function (t, n, e) {
    var r = e(1),
      i = e(94),
      o = e(66),
      u = e(65)("IE_PROTO"),
      a = function () {},
      s = "prototype",
      c = function () {
        var t, n = e(63)("iframe"),
          r = o.length;
        for (n.style.display = "none", e(67).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c[s][o[r]];
        return c()
      };
    t.exports = Object.create || function (t, n) {
      var e;
      return null !== t ? (a[s] = r(t), e = new a, a[s] = null, e[u] = t) : e = c(), void 0 === n ? e : i(e, n)
    }
  }, function (t, n, e) {
    var r = e(93),
      i = e(66).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (t) {
      return r(t, i)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(2),
      i = e(7),
      o = e(6),
      u = e(5)("species");
    t.exports = function (t) {
      var n = r[t];
      o && n && !n[u] && i.f(n, u, {
        configurable: !0,
        get: function () {
          return this
        }
      })
    }
  }, function (t, n) {
    t.exports = function (t, n, e, r) {
      if (!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
      return t
    }
  }, function (t, n, e) {
    var r = e(18),
      i = e(105),
      o = e(79),
      u = e(1),
      a = e(8),
      s = e(81),
      c = {},
      f = {};
    (n = t.exports = function (t, n, e, l, h) {
      var v, p, d, g, y = h ? function () {
          return t
        } : s(t),
        m = r(e, l, n ? 2 : 1),
        b = 0;
      if ("function" != typeof y) throw TypeError(t + " is not iterable!");
      if (o(y)) {
        for (v = a(t.length); v > b; b++)
          if ((g = n ? m(u(p = t[b])[0], p[1]) : m(t[b])) === c || g === f) return g
      } else
        for (d = y.call(t); !(p = d.next()).done;)
          if ((g = i(d, m, p.value, n)) === c || g === f) return g
    }).BREAK = c, n.RETURN = f
  }, function (t, n, e) {
    var r = e(13);
    t.exports = function (t, n, e) {
      for (var i in n) r(t, i, n[i], e);
      return t
    }
  }, function (t, n, e) {
    var r = e(7).f,
      i = e(11),
      o = e(5)("toStringTag");
    t.exports = function (t, n, e) {
      t && !i(t = e ? t : t.prototype, o) && r(t, o, {
        configurable: !0,
        value: n
      })
    }
  }, function (t, n, e) {
    var r = e(0),
      i = e(23),
      o = e(3),
      u = e(69),
      a = "[" + u + "]",
      s = RegExp("^" + a + a + "*"),
      c = RegExp(a + a + "*$"),
      f = function (t, n, e) {
        var i = {},
          a = o(function () {
            return !!u[t]() || "âÂ" != "âÂ" [t]()
          }),
          s = i[t] = a ? n(l) : u[t];
        e && (i[e] = s), r(r.P + r.F * a, "String", i)
      },
      l = f.trim = function (t, n) {
        return t = String(i(t)), 1 & n && (t = t.replace(s, "")), 2 & n && (t = t.replace(c, "")), t
      };
    t.exports = f
  }, function (t, n) {
    t.exports = {}
  }, function (t, n, e) {
    var r = e(4);
    t.exports = function (t, n) {
      if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
      return t
    }
  }, function (t, n, e) {
    var r = e(19);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t)
    }
  }, function (t, n) {
    n.f = {}.propertyIsEnumerable
  }, function (t, n, e) {
    var r = e(19),
      i = e(5)("toStringTag"),
      o = "Arguments" == r(function () {
        return arguments
      }());
    t.exports = function (t) {
      var n, e, u;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
        try {
          return t[n]
        } catch (t) {}
      }(n = Object(t), i)) ? e : o ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
    }
  }, function (t, n, e) {
    var r = e(2),
      i = "__core-js_shared__",
      o = r[i] || (r[i] = {});
    t.exports = function (t) {
      return o[t] || (o[t] = {})
    }
  }, function (t, n, e) {
    var r = e(15),
      i = e(8),
      o = e(35);
    t.exports = function (t) {
      return function (n, e, u) {
        var a, s = r(n),
          c = i(s.length),
          f = o(u, c);
        if (t && e != e) {
          for (; c > f;)
            if ((a = s[f++]) != a) return !0
        } else
          for (; c > f; f++)
            if ((t || f in s) && s[f] === e) return t || f || 0;
        return !t && -1
      }
    }
  }, function (t, n) {
    n.f = Object.getOwnPropertySymbols
  }, function (t, n, e) {
    var r = e(19);
    t.exports = Array.isArray || function (t) {
      return "Array" == r(t)
    }
  }, function (t, n, e) {
    var r = e(4),
      i = e(19),
      o = e(5)("match");
    t.exports = function (t) {
      var n;
      return r(t) && (void 0 !== (n = t[o]) ? !!n : "RegExp" == i(t))
    }
  }, function (t, n, e) {
    var r = e(5)("iterator"),
      i = !1;
    try {
      var o = [7][r]();
      o.return = function () {
        i = !0
      }, Array.from(o, function () {
        throw 2
      })
    } catch (t) {}
    t.exports = function (t, n) {
      if (!n && !i) return !1;
      var e = !1;
      try {
        var o = [7],
          u = o[r]();
        u.next = function () {
          return {
            done: e = !0
          }
        }, o[r] = function () {
          return u
        }, t(o)
      } catch (t) {}
      return e
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(1);
    t.exports = function () {
      var t = r(this),
        n = "";
      return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(12),
      i = e(13),
      o = e(3),
      u = e(23),
      a = e(5);
    t.exports = function (t, n, e) {
      var s = a(t),
        c = e(u, s, "" [t]),
        f = c[0],
        l = c[1];
      o(function () {
        var n = {};
        return n[s] = function () {
          return 7
        }, 7 != "" [t](n)
      }) && (i(String.prototype, t, f), r(RegExp.prototype, s, 2 == n ? function (t, n) {
        return l.call(t, this, n)
      } : function (t) {
        return l.call(t, this)
      }))
    }
  }, function (t, n, e) {
    var r = e(1),
      i = e(10),
      o = e(5)("species");
    t.exports = function (t, n) {
      var e, u = r(t).constructor;
      return void 0 === u || void 0 == (e = r(u)[o]) ? n : i(e)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(2),
      i = e(0),
      o = e(13),
      u = e(41),
      a = e(29),
      s = e(40),
      c = e(39),
      f = e(4),
      l = e(3),
      h = e(54),
      v = e(42),
      p = e(70);
    t.exports = function (t, n, e, d, g, y) {
      var m = r[t],
        b = m,
        _ = g ? "set" : "add",
        w = b && b.prototype,
        x = {},
        S = function (t) {
          var n = w[t];
          o(w, t, "delete" == t ? function (t) {
            return !(y && !f(t)) && n.call(this, 0 === t ? 0 : t)
          } : "has" == t ? function (t) {
            return !(y && !f(t)) && n.call(this, 0 === t ? 0 : t)
          } : "get" == t ? function (t) {
            return y && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
          } : "add" == t ? function (t) {
            return n.call(this, 0 === t ? 0 : t), this
          } : function (t, e) {
            return n.call(this, 0 === t ? 0 : t, e), this
          })
        };
      if ("function" == typeof b && (y || w.forEach && !l(function () {
          (new b).entries().next()
        }))) {
        var E = new b,
          O = E[_](y ? {} : -0, 1) != E,
          M = l(function () {
            E.has(1)
          }),
          L = h(function (t) {
            new b(t)
          }),
          k = !y && l(function () {
            for (var t = new b, n = 5; n--;) t[_](n, n);
            return !t.has(-0)
          });
        L || ((b = n(function (n, e) {
          c(n, b, t);
          var r = p(new m, n, b);
          return void 0 != e && s(e, g, r[_], r), r
        })).prototype = w, w.constructor = b), (M || k) && (S("delete"), S("has"), g && S("get")), (k || O) && S(_), y && w.clear && delete w.clear
      } else b = d.getConstructor(n, t, g, _), u(b.prototype, e), a.NEED = !0;
      return v(b, t), x[t] = b, i(i.G + i.W + i.F * (b != m), x), y || d.setStrong(b, t, g), b
    }
  }, function (t, n, e) {
    for (var r, i = e(2), o = e(12), u = e(32), a = u("typed_array"), s = u("view"), c = !(!i.ArrayBuffer || !i.DataView), f = c, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;)(r = i[h[l++]]) ? (o(r.prototype, a, !0), o(r.prototype, s, !0)) : f = !1;
    t.exports = {
      ABV: c,
      CONSTR: f,
      TYPED: a,
      VIEW: s
    }
  }, function (t, n, e) {
    "use strict";
    t.exports = e(33) || !e(3)(function () {
      var t = Math.random();
      __defineSetter__.call(null, t, function () {}), delete e(2)[t]
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0);
    t.exports = function (t) {
      r(r.S, t, { of: function () {
          for (var t = arguments.length, n = new Array(t); t--;) n[t] = arguments[t];
          return new this(n)
        }
      })
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(10),
      o = e(18),
      u = e(40);
    t.exports = function (t) {
      r(r.S, t, {
        from: function (t) {
          var n, e, r, a, s = arguments[1];
          return i(this), (n = void 0 !== s) && i(s), void 0 == t ? new this : (e = [], n ? (r = 0, a = o(s, arguments[2], 2), u(t, !1, function (t) {
            e.push(a(t, r++))
          })) : u(t, !1, e.push, e), new this(e))
        }
      })
    }
  }, function (t, n, e) {
    var r = e(4),
      i = e(2).document,
      o = r(i) && r(i.createElement);
    t.exports = function (t) {
      return o ? i.createElement(t) : {}
    }
  }, function (t, n, e) {
    var r = e(2),
      i = e(21),
      o = e(33),
      u = e(92),
      a = e(7).f;
    t.exports = function (t) {
      var n = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == t.charAt(0) || t in n || a(n, t, {
        value: u.f(t)
      })
    }
  }, function (t, n, e) {
    var r = e(49)("keys"),
      i = e(32);
    t.exports = function (t) {
      return r[t] || (r[t] = i(t))
    }
  }, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (t, n, e) {
    var r = e(2).document;
    t.exports = r && r.documentElement
  }, function (t, n, e) {
    var r = e(4),
      i = e(1),
      o = function (t, n) {
        if (i(t), !r(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
      };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, r) {
        try {
          (r = e(18)(Function.call, e(16).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
        } catch (t) {
          n = !0
        }
        return function (t, e) {
          return o(t, e), n ? t.__proto__ = e : r(t, e), t
        }
      }({}, !1) : void 0),
      check: o
    }
  }, function (t, n) {
    t.exports = "\t\n\v\f\r Â áá ââââââââââââŻâă\u2028\u2029\ufeff"
  }, function (t, n, e) {
    var r = e(4),
      i = e(68).set;
    t.exports = function (t, n, e) {
      var o, u = n.constructor;
      return u !== e && "function" == typeof u && (o = u.prototype) !== e.prototype && r(o) && i && i(t, o), t
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(24),
      i = e(23);
    t.exports = function (t) {
      var n = String(i(this)),
        e = "",
        o = r(t);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; o > 0;
        (o >>>= 1) && (n += n)) 1 & o && (e += n);
      return e
    }
  }, function (t, n) {
    t.exports = Math.sign || function (t) {
      return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
  }, function (t, n) {
    var e = Math.expm1;
    t.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function (t) {
      return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : e
  }, function (t, n, e) {
    var r = e(24),
      i = e(23);
    t.exports = function (t) {
      return function (n, e) {
        var o, u, a = String(i(n)),
          s = r(e),
          c = a.length;
        return s < 0 || s >= c ? t ? "" : void 0 : (o = a.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === c || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? a.charAt(s) : o : t ? a.slice(s, s + 2) : u - 56320 + (o - 55296 << 10) + 65536
      }
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(33),
      i = e(0),
      o = e(13),
      u = e(12),
      a = e(11),
      s = e(44),
      c = e(76),
      f = e(42),
      l = e(17),
      h = e(5)("iterator"),
      v = !([].keys && "next" in [].keys()),
      p = function () {
        return this
      };
    t.exports = function (t, n, e, d, g, y, m) {
      c(e, n, d);
      var b, _, w, x = function (t) {
          if (!v && t in M) return M[t];
          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new e(this, t)
              }
          }
          return function () {
            return new e(this, t)
          }
        },
        S = n + " Iterator",
        E = "values" == g,
        O = !1,
        M = t.prototype,
        L = M[h] || M["@@iterator"] || g && M[g],
        k = !v && L || x(g),
        P = g ? E ? x("entries") : k : void 0,
        j = "Array" == n ? M.entries || L : L;
      if (j && (w = l(j.call(new t))) !== Object.prototype && w.next && (f(w, S, !0), r || a(w, h) || u(w, h, p)), E && L && "values" !== L.name && (O = !0, k = function () {
          return L.call(this)
        }), r && !m || !v && !O && M[h] || u(M, h, k), s[n] = k, s[S] = p, g)
        if (b = {
            values: E ? k : x("values"),
            keys: y ? k : x("keys"),
            entries: P
          }, m)
          for (_ in b) _ in M || o(M, _, b[_]);
        else i(i.P + i.F * (v || O), n, b);
      return b
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(36),
      i = e(31),
      o = e(42),
      u = {};
    e(12)(u, e(5)("iterator"), function () {
      return this
    }), t.exports = function (t, n, e) {
      t.prototype = r(u, {
        next: i(1, e)
      }), o(t, n + " Iterator")
    }
  }, function (t, n, e) {
    var r = e(53),
      i = e(23);
    t.exports = function (t, n, e) {
      if (r(n)) throw TypeError("String#" + e + " doesn't accept regex!");
      return String(i(t))
    }
  }, function (t, n, e) {
    var r = e(5)("match");
    t.exports = function (t) {
      var n = /./;
      try {
        "/./" [t](n)
      } catch (e) {
        try {
          return n[r] = !1, !"/./" [t](n)
        } catch (t) {}
      }
      return !0
    }
  }, function (t, n, e) {
    var r = e(44),
      i = e(5)("iterator"),
      o = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || o[i] === t)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(7),
      i = e(31);
    t.exports = function (t, n, e) {
      n in t ? r.f(t, n, i(0, e)) : t[n] = e
    }
  }, function (t, n, e) {
    var r = e(48),
      i = e(5)("iterator"),
      o = e(44);
    t.exports = e(21).getIteratorMethod = function (t) {
      if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
    }
  }, function (t, n, e) {
    var r = e(220);
    t.exports = function (t, n) {
      return new(r(t))(n)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(9),
      i = e(35),
      o = e(8);
    t.exports = function (t) {
      for (var n = r(this), e = o(n.length), u = arguments.length, a = i(u > 1 ? arguments[1] : void 0, e), s = u > 2 ? arguments[2] : void 0, c = void 0 === s ? e : i(s, e); c > a;) n[a++] = t;
      return n
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(30),
      i = e(108),
      o = e(44),
      u = e(15);
    t.exports = e(75)(Array, "Array", function (t, n) {
      this._t = u(t), this._i = 0, this._k = n
    }, function () {
      var t = this._t,
        n = this._k,
        e = this._i++;
      return !t || e >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
  }, function (t, n, e) {
    var r, i, o, u = e(18),
      a = e(98),
      s = e(67),
      c = e(63),
      f = e(2),
      l = f.process,
      h = f.setImmediate,
      v = f.clearImmediate,
      p = f.MessageChannel,
      d = f.Dispatch,
      g = 0,
      y = {},
      m = "onreadystatechange",
      b = function () {
        var t = +this;
        if (y.hasOwnProperty(t)) {
          var n = y[t];
          delete y[t], n()
        }
      },
      _ = function (t) {
        b.call(t.data)
      };
    h && v || (h = function (t) {
      for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
      return y[++g] = function () {
        a("function" == typeof t ? t : Function(t), n)
      }, r(g), g
    }, v = function (t) {
      delete y[t]
    }, "process" == e(19)(l) ? r = function (t) {
      l.nextTick(u(b, t, 1))
    } : d && d.now ? r = function (t) {
      d.now(u(b, t, 1))
    } : p ? (o = (i = new p).port2, i.port1.onmessage = _, r = u(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (t) {
      f.postMessage(t + "", "*")
    }, f.addEventListener("message", _, !1)) : r = m in c("script") ? function (t) {
      s.appendChild(c("script"))[m] = function () {
        s.removeChild(this), b.call(t)
      }
    } : function (t) {
      setTimeout(u(b, t, 1), 0)
    }), t.exports = {
      set: h,
      clear: v
    }
  }, function (t, n, e) {
    var r = e(2),
      i = e(85).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      u = r.process,
      a = r.Promise,
      s = "process" == e(19)(u);
    t.exports = function () {
      var t, n, e, c = function () {
        var r, i;
        for (s && (r = u.domain) && r.exit(); t;) {
          i = t.fn, t = t.next;
          try {
            i()
          } catch (r) {
            throw t ? e() : n = void 0, r
          }
        }
        n = void 0, r && r.enter()
      };
      if (s) e = function () {
        u.nextTick(c)
      };
      else if (!o || r.navigator && r.navigator.standalone)
        if (a && a.resolve) {
          var f = a.resolve();
          e = function () {
            f.then(c)
          }
        } else e = function () {
          i.call(r, c)
        };
      else {
        var l = !0,
          h = document.createTextNode("");
        new o(c).observe(h, {
          characterData: !0
        }), e = function () {
          h.data = l = !l
        }
      }
      return function (r) {
        var i = {
          fn: r,
          next: void 0
        };
        n && (n.next = i), t || (t = i, e()), n = i
      }
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(10);
    t.exports.f = function (t) {
      return new function (t) {
        var n, e;
        this.promise = new t(function (t, r) {
          if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
          n = t, e = r
        }), this.resolve = r(n), this.reject = r(e)
      }(t)
    }
  }, function (t, n, e) {
    "use strict";

    function r(t, n, e) {
      var r, i, o, u = new Array(e),
        a = 8 * e - n - 1,
        s = (1 << a) - 1,
        c = s >> 1,
        f = 23 === n ? U(2, -24) - U(2, -77) : 0,
        l = 0,
        h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
      for ((t = W(t)) != t || t === C ? (i = t != t ? 1 : 0, r = s) : (r = G(V(t) / B), t * (o = U(2, -r)) < 1 && (r--, o *= 2), (t += r + c >= 1 ? f / o : f * U(2, 1 - c)) * o >= 2 && (r++, o /= 2), r + c >= s ? (i = 0, r = s) : r + c >= 1 ? (i = (t * o - 1) * U(2, n), r += c) : (i = t * U(2, c - 1) * U(2, n), r = 0)); n >= 8; u[l++] = 255 & i, i /= 256, n -= 8);
      for (r = r << n | i, a += n; a > 0; u[l++] = 255 & r, r /= 256, a -= 8);
      return u[--l] |= 128 * h, u
    }

    function i(t, n, e) {
      var r, i = 8 * e - n - 1,
        o = (1 << i) - 1,
        u = o >> 1,
        a = i - 7,
        s = e - 1,
        c = t[s--],
        f = 127 & c;
      for (c >>= 7; a > 0; f = 256 * f + t[s], s--, a -= 8);
      for (r = f & (1 << -a) - 1, f >>= -a, a += n; a > 0; r = 256 * r + t[s], s--, a -= 8);
      if (0 === f) f = 1 - u;
      else {
        if (f === o) return r ? NaN : c ? -C : C;
        r += U(2, n), f -= u
      }
      return (c ? -1 : 1) * r * U(2, f - n)
    }

    function o(t) {
      return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function u(t) {
      return [255 & t]
    }

    function a(t) {
      return [255 & t, t >> 8 & 255]
    }

    function s(t) {
      return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function c(t) {
      return r(t, 52, 8)
    }

    function f(t) {
      return r(t, 23, 4)
    }

    function l(t, n, e) {
      M(t[F], n, {
        get: function () {
          return this[e]
        }
      })
    }

    function h(t, n, e, r) {
      var i = E(+e);
      if (i + n > t[z]) throw T(I);
      var o = t[J]._b,
        u = i + t[Y],
        a = o.slice(u, u + n);
      return r ? a : a.reverse()
    }

    function v(t, n, e, r, i, o) {
      var u = E(+e);
      if (u + n > t[z]) throw T(I);
      for (var a = t[J]._b, s = u + t[Y], c = r(+i), f = 0; f < n; f++) a[s + f] = c[o ? f : n - f - 1]
    }
    var p = e(2),
      d = e(6),
      g = e(33),
      y = e(59),
      m = e(12),
      b = e(41),
      _ = e(3),
      w = e(39),
      x = e(24),
      S = e(8),
      E = e(117),
      O = e(37).f,
      M = e(7).f,
      L = e(83),
      k = e(42),
      P = "ArrayBuffer",
      j = "DataView",
      F = "prototype",
      I = "Wrong index!",
      A = p[P],
      N = p[j],
      R = p.Math,
      T = p.RangeError,
      C = p.Infinity,
      D = A,
      W = R.abs,
      U = R.pow,
      G = R.floor,
      V = R.log,
      B = R.LN2,
      q = "byteLength",
      J = d ? "_b" : "buffer",
      z = d ? "_l" : q,
      Y = d ? "_o" : "byteOffset";
    if (y.ABV) {
      if (!_(function () {
          A(1)
        }) || !_(function () {
          new A(-1)
        }) || _(function () {
          return new A, new A(1.5), new A(NaN), A.name != P
        })) {
        for (var H, K = (A = function (t) {
            return w(this, A), new D(E(t))
          })[F] = D[F], X = O(D), $ = 0; X.length > $;)(H = X[$++]) in A || m(A, H, D[H]);
        g || (K.constructor = A)
      }
      var Z = new N(new A(2)),
        Q = N[F].setInt8;
      Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || b(N[F], {
        setInt8: function (t, n) {
          Q.call(this, t, n << 24 >> 24)
        },
        setUint8: function (t, n) {
          Q.call(this, t, n << 24 >> 24)
        }
      }, !0)
    } else A = function (t) {
      w(this, A, P);
      var n = E(t);
      this._b = L.call(new Array(n), 0), this[z] = n
    }, N = function (t, n, e) {
      w(this, N, j), w(t, A, j);
      var r = t[z],
        i = x(n);
      if (i < 0 || i > r) throw T("Wrong offset!");
      if (i + (e = void 0 === e ? r - i : S(e)) > r) throw T("Wrong length!");
      this[J] = t, this[Y] = i, this[z] = e
    }, d && (l(A, q, "_l"), l(N, "buffer", "_b"), l(N, q, "_l"), l(N, "byteOffset", "_o")), b(N[F], {
      getInt8: function (t) {
        return h(this, 1, t)[0] << 24 >> 24
      },
      getUint8: function (t) {
        return h(this, 1, t)[0]
      },
      getInt16: function (t) {
        var n = h(this, 2, t, arguments[1]);
        return (n[1] << 8 | n[0]) << 16 >> 16
      },
      getUint16: function (t) {
        var n = h(this, 2, t, arguments[1]);
        return n[1] << 8 | n[0]
      },
      getInt32: function (t) {
        return o(h(this, 4, t, arguments[1]))
      },
      getUint32: function (t) {
        return o(h(this, 4, t, arguments[1])) >>> 0
      },
      getFloat32: function (t) {
        return i(h(this, 4, t, arguments[1]), 23, 4)
      },
      getFloat64: function (t) {
        return i(h(this, 8, t, arguments[1]), 52, 8)
      },
      setInt8: function (t, n) {
        v(this, 1, t, u, n)
      },
      setUint8: function (t, n) {
        v(this, 1, t, u, n)
      },
      setInt16: function (t, n) {
        v(this, 2, t, a, n, arguments[2])
      },
      setUint16: function (t, n) {
        v(this, 2, t, a, n, arguments[2])
      },
      setInt32: function (t, n) {
        v(this, 4, t, s, n, arguments[2])
      },
      setUint32: function (t, n) {
        v(this, 4, t, s, n, arguments[2])
      },
      setFloat32: function (t, n) {
        v(this, 4, t, f, n, arguments[2])
      },
      setFloat64: function (t, n) {
        v(this, 8, t, c, n, arguments[2])
      }
    });
    k(A, P), k(N, j), m(N[F], y.VIEW, !0), n[P] = A, n[j] = N
  }, function (t, n, e) {
    var r = e(2).navigator;
    t.exports = r && r.userAgent || ""
  }, function (t, n) {
    var e;
    e = function () {
      return this
    }();
    try {
      e = e || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (e = window)
    }
    t.exports = e
  }, function (t, n, e) {
    t.exports = !e(6) && !e(3)(function () {
      return 7 != Object.defineProperty(e(63)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n, e) {
    n.f = e(5)
  }, function (t, n, e) {
    var r = e(11),
      i = e(15),
      o = e(50)(!1),
      u = e(65)("IE_PROTO");
    t.exports = function (t, n) {
      var e, a = i(t),
        s = 0,
        c = [];
      for (e in a) e != u && r(a, e) && c.push(e);
      for (; n.length > s;) r(a, e = n[s++]) && (~o(c, e) || c.push(e));
      return c
    }
  }, function (t, n, e) {
    var r = e(7),
      i = e(1),
      o = e(34);
    t.exports = e(6) ? Object.defineProperties : function (t, n) {
      i(t);
      for (var e, u = o(n), a = u.length, s = 0; a > s;) r.f(t, e = u[s++], n[e]);
      return t
    }
  }, function (t, n, e) {
    var r = e(15),
      i = e(37).f,
      o = {}.toString,
      u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return u && "[object Window]" == o.call(t) ? function (t) {
        try {
          return i(t)
        } catch (t) {
          return u.slice()
        }
      }(t) : i(r(t))
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(34),
      i = e(51),
      o = e(47),
      u = e(9),
      a = e(46),
      s = Object.assign;
    t.exports = !s || e(3)(function () {
      var t = {},
        n = {},
        e = Symbol(),
        r = "abcdefghijklmnopqrst";
      return t[e] = 7, r.split("").forEach(function (t) {
        n[t] = t
      }), 7 != s({}, t)[e] || Object.keys(s({}, n)).join("") != r
    }) ? function (t, n) {
      for (var e = u(t), s = arguments.length, c = 1, f = i.f, l = o.f; s > c;)
        for (var h, v = a(arguments[c++]), p = f ? r(v).concat(f(v)) : r(v), d = p.length, g = 0; d > g;) l.call(v, h = p[g++]) && (e[h] = v[h]);
      return e
    } : s
  }, function (t, n, e) {
    "use strict";
    var r = e(10),
      i = e(4),
      o = e(98),
      u = [].slice,
      a = {};
    t.exports = Function.bind || function (t) {
      var n = r(this),
        e = u.call(arguments, 1),
        s = function () {
          var r = e.concat(u.call(arguments));
          return this instanceof s ? function (t, n, e) {
            if (!(n in a)) {
              for (var r = [], i = 0; i < n; i++) r[i] = "a[" + i + "]";
              a[n] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return a[n](t, e)
          }(n, r.length, r) : o(n, r, t)
        };
      return i(n.prototype) && (s.prototype = n.prototype), s
    }
  }, function (t, n) {
    t.exports = function (t, n, e) {
      var r = void 0 === e;
      switch (n.length) {
        case 0:
          return r ? t() : t.call(e);
        case 1:
          return r ? t(n[0]) : t.call(e, n[0]);
        case 2:
          return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
        case 3:
          return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
        case 4:
          return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
      }
      return t.apply(e, n)
    }
  }, function (t, n, e) {
    var r = e(2).parseInt,
      i = e(43).trim,
      o = e(69),
      u = /^[-+]?0[xX]/;
    t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function (t, n) {
      var e = i(String(t), 3);
      return r(e, n >>> 0 || (u.test(e) ? 16 : 10))
    } : r
  }, function (t, n, e) {
    var r = e(2).parseFloat,
      i = e(43).trim;
    t.exports = 1 / r(e(69) + "-0") != -1 / 0 ? function (t) {
      var n = i(String(t), 3),
        e = r(n);
      return 0 === e && "-" == n.charAt(0) ? -0 : e
    } : r
  }, function (t, n, e) {
    var r = e(19);
    t.exports = function (t, n) {
      if ("number" != typeof t && "Number" != r(t)) throw TypeError(n);
      return +t
    }
  }, function (t, n, e) {
    var r = e(4),
      i = Math.floor;
    t.exports = function (t) {
      return !r(t) && isFinite(t) && i(t) === t
    }
  }, function (t, n) {
    t.exports = Math.log1p || function (t) {
      return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
  }, function (t, n, e) {
    var r = e(72),
      i = Math.pow,
      o = i(2, -52),
      u = i(2, -23),
      a = i(2, 127) * (2 - u),
      s = i(2, -126);
    t.exports = Math.fround || function (t) {
      var n, e, i = Math.abs(t),
        c = r(t);
      return i < s ? c * (i / s / u + 1 / o - 1 / o) * s * u : (e = (n = (1 + u / o) * i) - (n - i)) > a || e != e ? c * (1 / 0) : c * e
    }
  }, function (t, n, e) {
    var r = e(1);
    t.exports = function (t, n, e, i) {
      try {
        return i ? n(r(e)[0], e[1]) : n(e)
      } catch (n) {
        var o = t.return;
        throw void 0 !== o && r(o.call(t)), n
      }
    }
  }, function (t, n, e) {
    var r = e(10),
      i = e(9),
      o = e(46),
      u = e(8);
    t.exports = function (t, n, e, a, s) {
      r(n);
      var c = i(t),
        f = o(c),
        l = u(c.length),
        h = s ? l - 1 : 0,
        v = s ? -1 : 1;
      if (e < 2)
        for (;;) {
          if (h in f) {
            a = f[h], h += v;
            break
          }
          if (h += v, s ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value")
        }
      for (; s ? h >= 0 : l > h; h += v) h in f && (a = n(a, f[h], h, c));
      return a
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(9),
      i = e(35),
      o = e(8);
    t.exports = [].copyWithin || function (t, n) {
      var e = r(this),
        u = o(e.length),
        a = i(t, u),
        s = i(n, u),
        c = arguments.length > 2 ? arguments[2] : void 0,
        f = Math.min((void 0 === c ? u : i(c, u)) - s, u - a),
        l = 1;
      for (s < a && a < s + f && (l = -1, s += f - 1, a += f - 1); f-- > 0;) s in e ? e[a] = e[s] : delete e[a], a += l, s += l;
      return e
    }
  }, function (t, n) {
    t.exports = function (t, n) {
      return {
        value: n,
        done: !!t
      }
    }
  }, function (t, n, e) {
    e(6) && "g" != /./g.flags && e(7).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: e(55)
    })
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return {
          e: !1,
          v: t()
        }
      } catch (t) {
        return {
          e: !0,
          v: t
        }
      }
    }
  }, function (t, n, e) {
    var r = e(1),
      i = e(4),
      o = e(87);
    t.exports = function (t, n) {
      if (r(t), i(n) && n.constructor === t) return n;
      var e = o.f(t);
      return (0, e.resolve)(n), e.promise
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(113),
      i = e(45);
    t.exports = e(58)("Map", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      get: function (t) {
        var n = r.getEntry(i(this, "Map"), t);
        return n && n.v
      },
      set: function (t, n) {
        return r.def(i(this, "Map"), 0 === t ? 0 : t, n)
      }
    }, r, !0)
  }, function (t, n, e) {
    "use strict";
    var r = e(7).f,
      i = e(36),
      o = e(41),
      u = e(18),
      a = e(39),
      s = e(40),
      c = e(75),
      f = e(108),
      l = e(38),
      h = e(6),
      v = e(29).fastKey,
      p = e(45),
      d = h ? "_s" : "size",
      g = function (t, n) {
        var e, r = v(n);
        if ("F" !== r) return t._i[r];
        for (e = t._f; e; e = e.n)
          if (e.k == n) return e
      };
    t.exports = {
      getConstructor: function (t, n, e, c) {
        var f = t(function (t, r) {
          a(t, f, n, "_i"), t._t = n, t._i = i(null), t._f = void 0, t._l = void 0, t[d] = 0, void 0 != r && s(r, e, t[c], t)
        });
        return o(f.prototype, {
          clear: function () {
            for (var t = p(this, n), e = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i];
            t._f = t._l = void 0, t[d] = 0
          },
          delete: function (t) {
            var e = p(this, n),
              r = g(e, t);
            if (r) {
              var i = r.n,
                o = r.p;
              delete e._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), e._f == r && (e._f = i), e._l == r && (e._l = o), e[d]--
            }
            return !!r
          },
          forEach: function (t) {
            p(this, n);
            for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
              for (r(e.v, e.k, this); e && e.r;) e = e.p
          },
          has: function (t) {
            return !!g(p(this, n), t)
          }
        }), h && r(f.prototype, "size", {
          get: function () {
            return p(this, n)[d]
          }
        }), f
      },
      def: function (t, n, e) {
        var r, i, o = g(t, n);
        return o ? o.v = e : (t._l = o = {
          i: i = v(n, !0),
          k: n,
          v: e,
          p: r = t._l,
          n: void 0,
          r: !1
        }, t._f || (t._f = o), r && (r.n = o), t[d]++, "F" !== i && (t._i[i] = o)), t
      },
      getEntry: g,
      setStrong: function (t, n, e) {
        c(t, n, function (t, e) {
          this._t = p(t, n), this._k = e, this._l = void 0
        }, function () {
          for (var t = this._k, n = this._l; n && n.r;) n = n.p;
          return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0, f(1))
        }, e ? "entries" : "values", !e, !0), l(n)
      }
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(113),
      i = e(45);
    t.exports = e(58)("Set", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      add: function (t) {
        return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
      }
    }, r)
  }, function (t, n, e) {
    "use strict";
    var r, i = e(26)(0),
      o = e(13),
      u = e(29),
      a = e(96),
      s = e(116),
      c = e(4),
      f = e(3),
      l = e(45),
      h = u.getWeak,
      v = Object.isExtensible,
      p = s.ufstore,
      d = {},
      g = function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      },
      y = {
        get: function (t) {
          if (c(t)) {
            var n = h(t);
            return !0 === n ? p(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
          }
        },
        set: function (t, n) {
          return s.def(l(this, "WeakMap"), t, n)
        }
      },
      m = t.exports = e(58)("WeakMap", g, y, s, !0, !0);
    f(function () {
      return 7 != (new m).set((Object.freeze || Object)(d), 7).get(d)
    }) && (a((r = s.getConstructor(g, "WeakMap")).prototype, y), u.NEED = !0, i(["delete", "has", "get", "set"], function (t) {
      var n = m.prototype,
        e = n[t];
      o(n, t, function (n, i) {
        if (c(n) && !v(n)) {
          this._f || (this._f = new r);
          var o = this._f[t](n, i);
          return "set" == t ? this : o
        }
        return e.call(this, n, i)
      })
    }))
  }, function (t, n, e) {
    "use strict";
    var r = e(41),
      i = e(29).getWeak,
      o = e(1),
      u = e(4),
      a = e(39),
      s = e(40),
      c = e(26),
      f = e(11),
      l = e(45),
      h = c(5),
      v = c(6),
      p = 0,
      d = function (t) {
        return t._l || (t._l = new g)
      },
      g = function () {
        this.a = []
      },
      y = function (t, n) {
        return h(t.a, function (t) {
          return t[0] === n
        })
      };
    g.prototype = {
      get: function (t) {
        var n = y(this, t);
        if (n) return n[1]
      },
      has: function (t) {
        return !!y(this, t)
      },
      set: function (t, n) {
        var e = y(this, t);
        e ? e[1] = n : this.a.push([t, n])
      },
      delete: function (t) {
        var n = v(this.a, function (n) {
          return n[0] === t
        });
        return ~n && this.a.splice(n, 1), !!~n
      }
    }, t.exports = {
      getConstructor: function (t, n, e, o) {
        var c = t(function (t, r) {
          a(t, c, n, "_i"), t._t = n, t._i = p++, t._l = void 0, void 0 != r && s(r, e, t[o], t)
        });
        return r(c.prototype, {
          delete: function (t) {
            if (!u(t)) return !1;
            var e = i(t);
            return !0 === e ? d(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i]
          },
          has: function (t) {
            if (!u(t)) return !1;
            var e = i(t);
            return !0 === e ? d(l(this, n)).has(t) : e && f(e, this._i)
          }
        }), c
      },
      def: function (t, n, e) {
        var r = i(o(n), !0);
        return !0 === r ? d(t).set(n, e) : r[t._i] = e, t
      },
      ufstore: d
    }
  }, function (t, n, e) {
    var r = e(24),
      i = e(8);
    t.exports = function (t) {
      if (void 0 === t) return 0;
      var n = r(t),
        e = i(n);
      if (n !== e) throw RangeError("Wrong length!");
      return e
    }
  }, function (t, n, e) {
    var r = e(37),
      i = e(51),
      o = e(1),
      u = e(2).Reflect;
    t.exports = u && u.ownKeys || function (t) {
      var n = r.f(o(t)),
        e = i.f;
      return e ? n.concat(e(t)) : n
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(52),
      i = e(4),
      o = e(8),
      u = e(18),
      a = e(5)("isConcatSpreadable");
    t.exports = function t(n, e, s, c, f, l, h, v) {
      for (var p, d, g = f, y = 0, m = !!h && u(h, v, 3); y < c;) {
        if (y in s) {
          if (p = m ? m(s[y], y, e) : s[y], d = !1, i(p) && (d = void 0 !== (d = p[a]) ? !!d : r(p)), d && l > 0) g = t(n, e, p, o(p.length), g, l - 1) - 1;
          else {
            if (g >= 9007199254740991) throw TypeError();
            n[g] = p
          }
          g++
        }
        y++
      }
      return g
    }
  }, function (t, n, e) {
    var r = e(8),
      i = e(71),
      o = e(23);
    t.exports = function (t, n, e, u) {
      var a = String(o(t)),
        s = a.length,
        c = void 0 === e ? " " : String(e),
        f = r(n);
      if (f <= s || "" == c) return a;
      var l = f - s,
        h = i.call(c, Math.ceil(l / c.length));
      return h.length > l && (h = h.slice(0, l)), u ? h + a : a + h
    }
  }, function (t, n, e) {
    var r = e(34),
      i = e(15),
      o = e(47).f;
    t.exports = function (t) {
      return function (n) {
        for (var e, u = i(n), a = r(u), s = a.length, c = 0, f = []; s > c;) o.call(u, e = a[c++]) && f.push(t ? [e, u[e]] : u[e]);
        return f
      }
    }
  }, function (t, n, e) {
    var r = e(48),
      i = e(123);
    t.exports = function (t) {
      return function () {
        if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
        return i(this)
      }
    }
  }, function (t, n, e) {
    var r = e(40);
    t.exports = function (t, n) {
      var e = [];
      return r(t, !1, e.push, e, n), e
    }
  }, function (t, n) {
    t.exports = Math.scale || function (t, n, e, r, i) {
      return 0 === arguments.length || t != t || n != n || e != e || r != r || i != i ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - n) * (i - r) / (e - n) + r
    }
  }, function (t, n, e) {
    "use strict";

    function r(t) {
      var n = new RegExp("^" + f + "+", "gi"),
        e = n.exec(t);
      if (e) {
        var r = e[e.length - 1].toLowerCase();
        "http:" !== r && "https:" !== r && (r = "https:"), (t = t.substring(n.lastIndex)).startsWith("//") && (t = r + t)
      }
      return t
    }

    function i() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = [];
      for (var e in t) try {
        n.push(e + "=" + encodeURIComponent(JSON.stringify(t[e])))
      } catch (t) {
        console.warn("Error encoding " + e + ": " + t)
      }
      return n
    }

    function o(t) {
      var n = {
          toString: u
        },
        e = void 0,
        r = void 0;
      if (t = t.replace(/\s/g, ""), (r = (e = new RegExp("^" + f, "gi")).exec(t)) && (n.protocol = r[1].toLowerCase(), t = t.substring(e.lastIndex)), r = (e = new RegExp("^" + s, "gi")).exec(t)) {
        var i = r[1].substring(2);
        t = t.substring(e.lastIndex);
        var o = i.indexOf("@"); - 1 !== o && (i = i.substring(o + 1)), n.host = i;
        var a = i.lastIndexOf(":"); - 1 !== a && (n.port = i.substring(a + 1), i = i.substring(0, a)), n.hostname = i
      }
      var l = void 0;
      if ((r = (e = new RegExp("^" + c, "gi")).exec(t)) && (l = r[1], t = t.substring(e.lastIndex)), l ? l.startsWith("/") || (l = "/" + l) : l = "/", n.pathname = l, t.startsWith("?")) {
        var h = t.indexOf("#", 1); - 1 === h && (h = t.length), n.search = t.substring(0, h), t = t.substring(h)
      } else n.search = "";
      return n.hash = t.startsWith("#") ? t : "", n
    }

    function u(t) {
      var n = t || this,
        e = n.hash,
        r = n.host,
        i = n.pathname,
        o = n.protocol,
        u = n.search,
        a = "";
      return o && (a += o), r && (a += "//" + r), a += i || "/", u && (a += u), e && (a += e), a
    }

    function a(t) {
      var n = o(r(t.url || ""));
      if (!n.protocol) {
        var e = t.protocol || t.scheme;
        e && (e.endsWith(":") || (e += ":"), n.protocol = e)
      }
      var u = n.pathname;
      if (!n.host) {
        var a = t.domain || t.host || t.hostname;
        if (a) {
          var s = o(r("org.jitsi.meet://" + a)),
            c = s.host,
            f = s.hostname,
            l = s.pathname,
            h = s.port;
          c && (n.host = c, n.hostname = f, n.port = h), "/" === u && "/" !== l && (u = l)
        }
      }
      var v = t.roomName || t.room;
      !v || !n.pathname.endsWith("/") && n.pathname.endsWith("/" + v) || (u.endsWith("/") || (u += "/"), u += v), n.pathname = u;
      var p = t.jwt;
      if (p) {
        var d = n.search; - 1 === d.indexOf("?jwt=") && -1 === d.indexOf("&jwt=") && (d.startsWith("?") || (d = "?" + d), 1 === d.length || (d += "&"), d += "jwt=" + p, n.search = d)
      }
      for (var g = n.hash, y = ["config", "interfaceConfig"], m = 0; m < y.length; m++) {
        var b = y[m],
          _ = i(t[b + "Overwrite"] || t[b] || t[b + "Override"]);
        if (_.length) {
          var w = b + "." + _.join("&" + b + ".");
          g.length ? w = "&" + w : g = "#", g += w
        }
      }
      return n.hash = g, n.toString() || void 0
    }
    n.a = a, "function" == typeof Symbol && Symbol.iterator;
    var s = "(//[^/?#]+)",
      c = "([^?#]*)",
      f = "([a-z][a-z0-9\\.\\+-]*:)"
  }, function (t, n) {
    function e() {
      var t = arguments[0],
        n = arguments[1],
        e = Array.prototype.slice.call(arguments, 2);
      if (!(i[n] < t.level))
        for (var r = function () {
            var t = {
                methodName: "",
                fileLocation: "",
                line: null,
                column: null
              },
              n = new Error,
              e = n.stack ? n.stack.split("\n") : [];
            if (!e || e.length < 1) return t;
            var r = null;
            return e[3] && (r = e[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)), !r || r.length <= 4 ? (0 === e[2].indexOf("log@") ? t.methodName = e[3].substr(0, e[3].indexOf("@")) : t.methodName = e[2].substr(0, e[2].indexOf("@")), t) : (t.methodName = r[1], t.fileLocation = r[2], t.line = r[3], t.column = r[4], t)
          }(), u = o.concat(t.transports), a = 0; a < u.length; a++) {
          var s = u[a],
            c = s[n];
          c && "function" == typeof c && c.bind(s, t.id ? "[" + t.id + "]" : "", "<" + r.methodName + ">: ").apply(s, e)
        }
    }

    function r(t, n, r, o) {
      this.id = n, this.format = o, this.transports = r, this.transports || (this.transports = []), this.level = i[t];
      for (var u = Object.keys(i), a = 0; a < u.length; a++) this[u[a]] = e.bind(null, this, u[a])
    }
    var i = {
      trace: 0,
      debug: 1,
      info: 2,
      log: 3,
      warn: 4,
      error: 5
    };
    r.consoleTransport = console;
    var o = [r.consoleTransport];
    r.addGlobalTransport = function (t) {
      -1 === o.indexOf(t) && o.push(t)
    }, r.removeGlobalTransport = function (t) {
      var n = o.indexOf(t); - 1 !== n && o.splice(n, 1)
    }, r.prototype.setLevel = function (t) {
      this.level = i[t]
    }, t.exports = r, r.levels = {
      TRACE: "trace",
      DEBUG: "debug",
      INFO: "info",
      LOG: "log",
      WARN: "warn",
      ERROR: "error"
    }
  }, function (t, n, e) {
    e(128), t.exports = e(330)
  }, function (t, n, e) {
    "use strict";
    (function (t) {
      function n(t, n, e) {
        t[n] || Object[r](t, n, {
          writable: !0,
          configurable: !0,
          value: e
        })
      }
      if (e(129), e(326), e(327), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
      t._babelPolyfill = !0;
      var r = "defineProperty";
      n(String.prototype, "padLeft", "".padStart), n(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
        [][t] && n(Array, t, Function.call.bind([][t]))
      })
    }).call(n, e(90))
  }, function (t, n, e) {
    e(130), e(132), e(133), e(134), e(135), e(136), e(137), e(138), e(139), e(140), e(141), e(142), e(143), e(144), e(145), e(146), e(148), e(149), e(150), e(151), e(152), e(153), e(154), e(155), e(156), e(157), e(158), e(159), e(160), e(161), e(162), e(163), e(164), e(165), e(166), e(167), e(168), e(169), e(170), e(171), e(172), e(173), e(174), e(175), e(176), e(177), e(178), e(179), e(180), e(181), e(182), e(183), e(184), e(185), e(186), e(187), e(188), e(189), e(190), e(191), e(192), e(193), e(194), e(195), e(196), e(197), e(198), e(199), e(200), e(201), e(202), e(203), e(204), e(205), e(206), e(207), e(208), e(210), e(211), e(213), e(214), e(215), e(216), e(217), e(218), e(219), e(221), e(222), e(223), e(224), e(225), e(226), e(227), e(228), e(229), e(230), e(231), e(232), e(233), e(84), e(234), e(235), e(109), e(236), e(237), e(238), e(239), e(240), e(112), e(114), e(115), e(241), e(242), e(243), e(244), e(245), e(246), e(247), e(248), e(249), e(250), e(251), e(252), e(253), e(254), e(255), e(256), e(257), e(258), e(259), e(260), e(261), e(262), e(263), e(264), e(265), e(266), e(267), e(268), e(269), e(270), e(271), e(272), e(273), e(274), e(275), e(276), e(277), e(278), e(279), e(280), e(281), e(282), e(283), e(284), e(285), e(286), e(287), e(288), e(289), e(290), e(291), e(292), e(293), e(294), e(295), e(296), e(297), e(298), e(299), e(300), e(301), e(302), e(303), e(304), e(305), e(306), e(307), e(308), e(309), e(310), e(311), e(312), e(313), e(314), e(315), e(316), e(317), e(318), e(319), e(320), e(321), e(322), e(323), e(324), e(325), t.exports = e(21)
  }, function (t, n, e) {
    "use strict";
    var r = e(2),
      i = e(11),
      o = e(6),
      u = e(0),
      a = e(13),
      s = e(29).KEY,
      c = e(3),
      f = e(49),
      l = e(42),
      h = e(32),
      v = e(5),
      p = e(92),
      d = e(64),
      g = e(131),
      y = e(52),
      m = e(1),
      b = e(4),
      _ = e(15),
      w = e(22),
      x = e(31),
      S = e(36),
      E = e(95),
      O = e(16),
      M = e(7),
      L = e(34),
      k = O.f,
      P = M.f,
      j = E.f,
      F = r.Symbol,
      I = r.JSON,
      A = I && I.stringify,
      N = "prototype",
      R = v("_hidden"),
      T = v("toPrimitive"),
      C = {}.propertyIsEnumerable,
      D = f("symbol-registry"),
      W = f("symbols"),
      U = f("op-symbols"),
      G = Object[N],
      V = "function" == typeof F,
      B = r.QObject,
      q = !B || !B[N] || !B[N].findChild,
      J = o && c(function () {
        return 7 != S(P({}, "a", {
          get: function () {
            return P(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function (t, n, e) {
        var r = k(G, n);
        r && delete G[n], P(t, n, e), r && t !== G && P(G, n, r)
      } : P,
      z = function (t) {
        var n = W[t] = S(F[N]);
        return n._k = t, n
      },
      Y = V && "symbol" == typeof F.iterator ? function (t) {
        return "symbol" == typeof t
      } : function (t) {
        return t instanceof F
      },
      H = function (t, n, e) {
        return t === G && H(U, n, e), m(t), n = w(n, !0), m(e), i(W, n) ? (e.enumerable ? (i(t, R) && t[R][n] && (t[R][n] = !1), e = S(e, {
          enumerable: x(0, !1)
        })) : (i(t, R) || P(t, R, x(1, {})), t[R][n] = !0), J(t, n, e)) : P(t, n, e)
      },
      K = function (t, n) {
        m(t);
        for (var e, r = g(n = _(n)), i = 0, o = r.length; o > i;) H(t, e = r[i++], n[e]);
        return t
      },
      X = function (t) {
        var n = C.call(this, t = w(t, !0));
        return !(this === G && i(W, t) && !i(U, t)) && (!(n || !i(this, t) || !i(W, t) || i(this, R) && this[R][t]) || n)
      },
      $ = function (t, n) {
        if (t = _(t), n = w(n, !0), t !== G || !i(W, n) || i(U, n)) {
          var e = k(t, n);
          return !e || !i(W, n) || i(t, R) && t[R][n] || (e.enumerable = !0), e
        }
      },
      Z = function (t) {
        for (var n, e = j(_(t)), r = [], o = 0; e.length > o;) i(W, n = e[o++]) || n == R || n == s || r.push(n);
        return r
      },
      Q = function (t) {
        for (var n, e = t === G, r = j(e ? U : _(t)), o = [], u = 0; r.length > u;) !i(W, n = r[u++]) || e && !i(G, n) || o.push(W[n]);
        return o
      };
    V || (a((F = function () {
      if (this instanceof F) throw TypeError("Symbol is not a constructor!");
      var t = h(arguments.length > 0 ? arguments[0] : void 0),
        n = function (e) {
          this === G && n.call(U, e), i(this, R) && i(this[R], t) && (this[R][t] = !1), J(this, t, x(1, e))
        };
      return o && q && J(G, t, {
        configurable: !0,
        set: n
      }), z(t)
    })[N], "toString", function () {
      return this._k
    }), O.f = $, M.f = H, e(37).f = E.f = Z, e(47).f = X, e(51).f = Q, o && !e(33) && a(G, "propertyIsEnumerable", X, !0), p.f = function (t) {
      return z(v(t))
    }), u(u.G + u.W + u.F * !V, {
      Symbol: F
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; tt.length > nt;) v(tt[nt++]);
    for (var et = L(v.store), rt = 0; et.length > rt;) d(et[rt++]);
    u(u.S + u.F * !V, "Symbol", {
      for: function (t) {
        return i(D, t += "") ? D[t] : D[t] = F(t)
      },
      keyFor: function (t) {
        if (!Y(t)) throw TypeError(t + " is not a symbol!");
        for (var n in D)
          if (D[n] === t) return n
      },
      useSetter: function () {
        q = !0
      },
      useSimple: function () {
        q = !1
      }
    }), u(u.S + u.F * !V, "Object", {
      create: function (t, n) {
        return void 0 === n ? S(t) : K(S(t), n)
      },
      defineProperty: H,
      defineProperties: K,
      getOwnPropertyDescriptor: $,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: Q
    }), I && u(u.S + u.F * (!V || c(function () {
      var t = F();
      return "[null]" != A([t]) || "{}" != A({
        a: t
      }) || "{}" != A(Object(t))
    })), "JSON", {
      stringify: function (t) {
        for (var n, e, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
        if (e = n = r[1], (b(n) || void 0 !== t) && !Y(t)) return y(n) || (n = function (t, n) {
          if ("function" == typeof e && (n = e.call(this, t, n)), !Y(n)) return n
        }), r[1] = n, A.apply(I, r)
      }
    }), F[N][T] || e(12)(F[N], T, F[N].valueOf), l(F, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
  }, function (t, n, e) {
    var r = e(34),
      i = e(51),
      o = e(47);
    t.exports = function (t) {
      var n = r(t),
        e = i.f;
      if (e)
        for (var u, a = e(t), s = o.f, c = 0; a.length > c;) s.call(t, u = a[c++]) && n.push(u);
      return n
    }
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Object", {
      create: e(36)
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S + r.F * !e(6), "Object", {
      defineProperty: e(7).f
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S + r.F * !e(6), "Object", {
      defineProperties: e(94)
    })
  }, function (t, n, e) {
    var r = e(15),
      i = e(16).f;
    e(25)("getOwnPropertyDescriptor", function () {
      return function (t, n) {
        return i(r(t), n)
      }
    })
  }, function (t, n, e) {
    var r = e(9),
      i = e(17);
    e(25)("getPrototypeOf", function () {
      return function (t) {
        return i(r(t))
      }
    })
  }, function (t, n, e) {
    var r = e(9),
      i = e(34);
    e(25)("keys", function () {
      return function (t) {
        return i(r(t))
      }
    })
  }, function (t, n, e) {
    e(25)("getOwnPropertyNames", function () {
      return e(95).f
    })
  }, function (t, n, e) {
    var r = e(4),
      i = e(29).onFreeze;
    e(25)("freeze", function (t) {
      return function (n) {
        return t && r(n) ? t(i(n)) : n
      }
    })
  }, function (t, n, e) {
    var r = e(4),
      i = e(29).onFreeze;
    e(25)("seal", function (t) {
      return function (n) {
        return t && r(n) ? t(i(n)) : n
      }
    })
  }, function (t, n, e) {
    var r = e(4),
      i = e(29).onFreeze;
    e(25)("preventExtensions", function (t) {
      return function (n) {
        return t && r(n) ? t(i(n)) : n
      }
    })
  }, function (t, n, e) {
    var r = e(4);
    e(25)("isFrozen", function (t) {
      return function (n) {
        return !r(n) || !!t && t(n)
      }
    })
  }, function (t, n, e) {
    var r = e(4);
    e(25)("isSealed", function (t) {
      return function (n) {
        return !r(n) || !!t && t(n)
      }
    })
  }, function (t, n, e) {
    var r = e(4);
    e(25)("isExtensible", function (t) {
      return function (n) {
        return !!r(n) && (!t || t(n))
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S + r.F, "Object", {
      assign: e(96)
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Object", {
      is: e(147)
    })
  }, function (t, n) {
    t.exports = Object.is || function (t, n) {
      return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
    }
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Object", {
      setPrototypeOf: e(68).set
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(48),
      i = {};
    i[e(5)("toStringTag")] = "z", i + "" != "[object z]" && e(13)(Object.prototype, "toString", function () {
      return "[object " + r(this) + "]"
    }, !0)
  }, function (t, n, e) {
    var r = e(0);
    r(r.P, "Function", {
      bind: e(97)
    })
  }, function (t, n, e) {
    var r = e(7).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in i || e(6) && r(i, "name", {
      configurable: !0,
      get: function () {
        try {
          return ("" + this).match(o)[1]
        } catch (t) {
          return ""
        }
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(4),
      i = e(17),
      o = e(5)("hasInstance"),
      u = Function.prototype;
    o in u || e(7).f(u, o, {
      value: function (t) {
        if ("function" != typeof this || !r(t)) return !1;
        if (!r(this.prototype)) return t instanceof this;
        for (; t = i(t);)
          if (this.prototype === t) return !0;
        return !1
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(99);
    r(r.G + r.F * (parseInt != i), {
      parseInt: i
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(100);
    r(r.G + r.F * (parseFloat != i), {
      parseFloat: i
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(2),
      i = e(11),
      o = e(19),
      u = e(70),
      a = e(22),
      s = e(3),
      c = e(37).f,
      f = e(16).f,
      l = e(7).f,
      h = e(43).trim,
      v = r.Number,
      p = v,
      d = v.prototype,
      g = "Number" == o(e(36)(d)),
      y = "trim" in String.prototype,
      m = function (t) {
        var n = a(t, !1);
        if ("string" == typeof n && n.length > 2) {
          var e, r, i, o = (n = y ? n.trim() : h(n, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN
          } else if (48 === o) {
            switch (n.charCodeAt(1)) {
              case 66:
              case 98:
                r = 2, i = 49;
                break;
              case 79:
              case 111:
                r = 8, i = 55;
                break;
              default:
                return +n
            }
            for (var u, s = n.slice(2), c = 0, f = s.length; c < f; c++)
              if ((u = s.charCodeAt(c)) < 48 || u > i) return NaN;
            return parseInt(s, r)
          }
        }
        return +n
      };
    if (!v(" 0o1") || !v("0b1") || v("+0x1")) {
      v = function (t) {
        var n = arguments.length < 1 ? 0 : t,
          e = this;
        return e instanceof v && (g ? s(function () {
          d.valueOf.call(e)
        }) : "Number" != o(e)) ? u(new p(m(n)), e, v) : m(n)
      };
      for (var b, _ = e(6) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; _.length > w; w++) i(p, b = _[w]) && !i(v, b) && l(v, b, f(p, b));
      v.prototype = d, d.constructor = v, e(13)(r, "Number", v)
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(24),
      o = e(101),
      u = e(71),
      a = 1..toFixed,
      s = Math.floor,
      c = [0, 0, 0, 0, 0, 0],
      f = "Number.toFixed: incorrect invocation!",
      l = function (t, n) {
        for (var e = -1, r = n; ++e < 6;) r += t * c[e], c[e] = r % 1e7, r = s(r / 1e7)
      },
      h = function (t) {
        for (var n = 6, e = 0; --n >= 0;) e += c[n], c[n] = s(e / t), e = e % t * 1e7
      },
      v = function () {
        for (var t = 6, n = ""; --t >= 0;)
          if ("" !== n || 0 === t || 0 !== c[t]) {
            var e = String(c[t]);
            n = "" === n ? e : n + u.call("0", 7 - e.length) + e
          }
        return n
      },
      p = function (t, n, e) {
        return 0 === n ? e : n % 2 == 1 ? p(t, n - 1, e * t) : p(t * t, n / 2, e)
      };
    r(r.P + r.F * (!!a && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !e(3)(function () {
      a.call({})
    })), "Number", {
      toFixed: function (t) {
        var n, e, r, a, s = o(this, f),
          c = i(t),
          d = "",
          g = "0";
        if (c < 0 || c > 20) throw RangeError(f);
        if (s != s) return "NaN";
        if (s <= -1e21 || s >= 1e21) return String(s);
        if (s < 0 && (d = "-", s = -s), s > 1e-21)
          if (e = (n = function (t) {
              for (var n = 0, e = t; e >= 4096;) n += 12, e /= 4096;
              for (; e >= 2;) n += 1, e /= 2;
              return n
            }(s * p(2, 69, 1)) - 69) < 0 ? s * p(2, -n, 1) : s / p(2, n, 1), e *= 4503599627370496, (n = 52 - n) > 0) {
            for (l(0, e), r = c; r >= 7;) l(1e7, 0), r -= 7;
            for (l(p(10, r, 1), 0), r = n - 1; r >= 23;) h(1 << 23), r -= 23;
            h(1 << r), l(1, 1), h(2), g = v()
          } else l(0, e), l(1 << -n, 0), g = v() + u.call("0", c);
        return g = c > 0 ? d + ((a = g.length) <= c ? "0." + u.call("0", c - a) + g : g.slice(0, a - c) + "." + g.slice(a - c)) : d + g
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(3),
      o = e(101),
      u = 1..toPrecision;
    r(r.P + r.F * (i(function () {
      return "1" !== u.call(1, void 0)
    }) || !i(function () {
      u.call({})
    })), "Number", {
      toPrecision: function (t) {
        var n = o(this, "Number#toPrecision: incorrect invocation!");
        return void 0 === t ? u.call(n) : u.call(n, t)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Number", {
      EPSILON: Math.pow(2, -52)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(2).isFinite;
    r(r.S, "Number", {
      isFinite: function (t) {
        return "number" == typeof t && i(t)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Number", {
      isInteger: e(102)
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Number", {
      isNaN: function (t) {
        return t != t
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(102),
      o = Math.abs;
    r(r.S, "Number", {
      isSafeInteger: function (t) {
        return i(t) && o(t) <= 9007199254740991
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Number", {
      MAX_SAFE_INTEGER: 9007199254740991
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Number", {
      MIN_SAFE_INTEGER: -9007199254740991
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(100);
    r(r.S + r.F * (Number.parseFloat != i), "Number", {
      parseFloat: i
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(99);
    r(r.S + r.F * (Number.parseInt != i), "Number", {
      parseInt: i
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(103),
      o = Math.sqrt,
      u = Math.acosh;
    r(r.S + r.F * !(u && 710 == Math.floor(u(Number.MAX_VALUE)) && u(1 / 0) == 1 / 0), "Math", {
      acosh: function (t) {
        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function t(n) {
        return isFinite(n = +n) && 0 != n ? n < 0 ? -t(-n) : Math.log(n + Math.sqrt(n * n + 1)) : n
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function (t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(72);
    r(r.S, "Math", {
      cbrt: function (t) {
        return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      clz32: function (t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = Math.exp;
    r(r.S, "Math", {
      cosh: function (t) {
        return (i(t = +t) + i(-t)) / 2
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(73);
    r(r.S + r.F * (i != Math.expm1), "Math", {
      expm1: i
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      fround: e(104)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = Math.abs;
    r(r.S, "Math", {
      hypot: function (t, n) {
        for (var e, r, o = 0, u = 0, a = arguments.length, s = 0; u < a;) s < (e = i(arguments[u++])) ? (o = o * (r = s / e) * r + 1, s = e) : o += e > 0 ? (r = e / s) * r : e;
        return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(o)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = Math.imul;
    r(r.S + r.F * e(3)(function () {
      return -5 != i(4294967295, 5) || 2 != i.length
    }), "Math", {
      imul: function (t, n) {
        var e = +t,
          r = +n,
          i = 65535 & e,
          o = 65535 & r;
        return 0 | i * o + ((65535 & e >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      log10: function (t) {
        return Math.log(t) * Math.LOG10E
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      log1p: e(103)
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      log2: function (t) {
        return Math.log(t) / Math.LN2
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      sign: e(72)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(73),
      o = Math.exp;
    r(r.S + r.F * e(3)(function () {
      return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
      sinh: function (t) {
        return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(73),
      o = Math.exp;
    r(r.S, "Math", {
      tanh: function (t) {
        var n = i(t = +t),
          e = i(-t);
        return n == 1 / 0 ? 1 : e == 1 / 0 ? -1 : (n - e) / (o(t) + o(-t))
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      trunc: function (t) {
        return (t > 0 ? Math.floor : Math.ceil)(t)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(35),
      o = String.fromCharCode,
      u = String.fromCodePoint;
    r(r.S + r.F * (!!u && 1 != u.length), "String", {
      fromCodePoint: function (t) {
        for (var n, e = [], r = arguments.length, u = 0; r > u;) {
          if (n = +arguments[u++], i(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
          e.push(n < 65536 ? o(n) : o(55296 + ((n -= 65536) >> 10), n % 1024 + 56320))
        }
        return e.join("")
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(15),
      o = e(8);
    r(r.S, "String", {
      raw: function (t) {
        for (var n = i(t.raw), e = o(n.length), r = arguments.length, u = [], a = 0; e > a;) u.push(String(n[a++])), a < r && u.push(String(arguments[a]));
        return u.join("")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(43)("trim", function (t) {
      return function () {
        return t(this, 3)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(74)(!0);
    e(75)(String, "String", function (t) {
      this._t = String(t), this._i = 0
    }, function () {
      var t, n = this._t,
        e = this._i;
      return e >= n.length ? {
        value: void 0,
        done: !0
      } : (t = r(n, e), this._i += t.length, {
        value: t,
        done: !1
      })
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(74)(!1);
    r(r.P, "String", {
      codePointAt: function (t) {
        return i(this, t)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(8),
      o = e(77),
      u = "".endsWith;
    r(r.P + r.F * e(78)("endsWith"), "String", {
      endsWith: function (t) {
        var n = o(this, t, "endsWith"),
          e = arguments.length > 1 ? arguments[1] : void 0,
          r = i(n.length),
          a = void 0 === e ? r : Math.min(i(e), r),
          s = String(t);
        return u ? u.call(n, s, a) : n.slice(a - s.length, a) === s
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(77);
    r(r.P + r.F * e(78)("includes"), "String", {
      includes: function (t) {
        return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.P, "String", {
      repeat: e(71)
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(8),
      o = e(77),
      u = "startsWith",
      a = "" [u];
    r(r.P + r.F * e(78)(u), "String", {
      startsWith: function (t) {
        var n = o(this, t, u),
          e = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)),
          r = String(t);
        return a ? a.call(n, r, e) : n.slice(e, e + r.length) === r
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("anchor", function (t) {
      return function (n) {
        return t(this, "a", "name", n)
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("big", function (t) {
      return function () {
        return t(this, "big", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("blink", function (t) {
      return function () {
        return t(this, "blink", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("bold", function (t) {
      return function () {
        return t(this, "b", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("fixed", function (t) {
      return function () {
        return t(this, "tt", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("fontcolor", function (t) {
      return function (n) {
        return t(this, "font", "color", n)
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("fontsize", function (t) {
      return function (n) {
        return t(this, "font", "size", n)
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("italics", function (t) {
      return function () {
        return t(this, "i", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("link", function (t) {
      return function (n) {
        return t(this, "a", "href", n)
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("small", function (t) {
      return function () {
        return t(this, "small", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("strike", function (t) {
      return function () {
        return t(this, "strike", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("sub", function (t) {
      return function () {
        return t(this, "sub", "", "")
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(14)("sup", function (t) {
      return function () {
        return t(this, "sup", "", "")
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Date", {
      now: function () {
        return (new Date).getTime()
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(9),
      o = e(22);
    r(r.P + r.F * e(3)(function () {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function () {
          return 1
        }
      })
    }), "Date", {
      toJSON: function (t) {
        var n = i(this),
          e = o(n);
        return "number" != typeof e || isFinite(e) ? n.toISOString() : null
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(209);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(3),
      i = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      u = function (t) {
        return t > 9 ? t : "0" + t
      };
    t.exports = r(function () {
      return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
    }) || !r(function () {
      o.call(new Date(NaN))
    }) ? function () {
      if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
      var t = this.getUTCFullYear(),
        n = this.getUTCMilliseconds(),
        e = t < 0 ? "-" : t > 9999 ? "+" : "";
      return e + ("00000" + Math.abs(t)).slice(e ? -6 : -4) + "-" + u(this.getUTCMonth() + 1) + "-" + u(this.getUTCDate()) + "T" + u(this.getUTCHours()) + ":" + u(this.getUTCMinutes()) + ":" + u(this.getUTCSeconds()) + "." + (n > 99 ? n : "0" + u(n)) + "Z"
    } : o
  }, function (t, n, e) {
    var r = Date.prototype,
      i = r.toString,
      o = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && e(13)(r, "toString", function () {
      var t = o.call(this);
      return t == t ? i.call(this) : "Invalid Date"
    })
  }, function (t, n, e) {
    var r = e(5)("toPrimitive"),
      i = Date.prototype;
    r in i || e(12)(i, r, e(212))
  }, function (t, n, e) {
    "use strict";
    var r = e(1),
      i = e(22);
    t.exports = function (t) {
      if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
      return i(r(this), "number" != t)
    }
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Array", {
      isArray: e(52)
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(18),
      i = e(0),
      o = e(9),
      u = e(105),
      a = e(79),
      s = e(8),
      c = e(80),
      f = e(81);
    i(i.S + i.F * !e(54)(function (t) {
      Array.from(t)
    }), "Array", {
      from: function (t) {
        var n, e, i, l, h = o(t),
          v = "function" == typeof this ? this : Array,
          p = arguments.length,
          d = p > 1 ? arguments[1] : void 0,
          g = void 0 !== d,
          y = 0,
          m = f(h);
        if (g && (d = r(d, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || v == Array && a(m))
          for (e = new v(n = s(h.length)); n > y; y++) c(e, y, g ? d(h[y], y) : h[y]);
        else
          for (l = m.call(h), e = new v; !(i = l.next()).done; y++) c(e, y, g ? u(l, d, [i.value, y], !0) : i.value);
        return e.length = y, e
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(80);
    r(r.S + r.F * e(3)(function () {
      function t() {}
      return !(Array.of.call(t) instanceof t)
    }), "Array", { of: function () {
        for (var t = 0, n = arguments.length, e = new("function" == typeof this ? this : Array)(n); n > t;) i(e, t, arguments[t++]);
        return e.length = n, e
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(15),
      o = [].join;
    r(r.P + r.F * (e(46) != Object || !e(20)(o)), "Array", {
      join: function (t) {
        return o.call(i(this), void 0 === t ? "," : t)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(67),
      o = e(19),
      u = e(35),
      a = e(8),
      s = [].slice;
    r(r.P + r.F * e(3)(function () {
      i && s.call(i)
    }), "Array", {
      slice: function (t, n) {
        var e = a(this.length),
          r = o(this);
        if (n = void 0 === n ? e : n, "Array" == r) return s.call(this, t, n);
        for (var i = u(t, e), c = u(n, e), f = a(c - i), l = new Array(f), h = 0; h < f; h++) l[h] = "String" == r ? this.charAt(i + h) : this[i + h];
        return l
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(10),
      o = e(9),
      u = e(3),
      a = [].sort,
      s = [1, 2, 3];
    r(r.P + r.F * (u(function () {
      s.sort(void 0)
    }) || !u(function () {
      s.sort(null)
    }) || !e(20)(a)), "Array", {
      sort: function (t) {
        return void 0 === t ? a.call(o(this)) : a.call(o(this), i(t))
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(0),
      o = e(20)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
      forEach: function (t) {
        return i(this, t, arguments[1])
      }
    })
  }, function (t, n, e) {
    var r = e(4),
      i = e(52),
      o = e(5)("species");
    t.exports = function (t) {
      var n;
      return i(t) && ("function" != typeof (n = t.constructor) || n !== Array && !i(n.prototype) || (n = void 0), r(n) && null === (n = n[o]) && (n = void 0)), void 0 === n ? Array : n
    }
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(1);
    r(r.P + r.F * !e(20)([].map, !0), "Array", {
      map: function (t) {
        return i(this, t, arguments[1])
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(2);
    r(r.P + r.F * !e(20)([].filter, !0), "Array", {
      filter: function (t) {
        return i(this, t, arguments[1])
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(3);
    r(r.P + r.F * !e(20)([].some, !0), "Array", {
      some: function (t) {
        return i(this, t, arguments[1])
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(4);
    r(r.P + r.F * !e(20)([].every, !0), "Array", {
      every: function (t) {
        return i(this, t, arguments[1])
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(106);
    r(r.P + r.F * !e(20)([].reduce, !0), "Array", {
      reduce: function (t) {
        return i(this, t, arguments.length, arguments[1], !1)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(106);
    r(r.P + r.F * !e(20)([].reduceRight, !0), "Array", {
      reduceRight: function (t) {
        return i(this, t, arguments.length, arguments[1], !0)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(50)(!1),
      o = [].indexOf,
      u = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (u || !e(20)(o)), "Array", {
      indexOf: function (t) {
        return u ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(15),
      o = e(24),
      u = e(8),
      a = [].lastIndexOf,
      s = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (s || !e(20)(a)), "Array", {
      lastIndexOf: function (t) {
        if (s) return a.apply(this, arguments) || 0;
        var n = i(this),
          e = u(n.length),
          r = e - 1;
        for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = e + r); r >= 0; r--)
          if (r in n && n[r] === t) return r || 0;
        return -1
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.P, "Array", {
      copyWithin: e(107)
    }), e(30)("copyWithin")
  }, function (t, n, e) {
    var r = e(0);
    r(r.P, "Array", {
      fill: e(83)
    }), e(30)("fill")
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(5),
      o = !0;
    "find" in [] && Array(1).find(function () {
      o = !1
    }), r(r.P + r.F * o, "Array", {
      find: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), e(30)("find")
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(26)(6),
      o = !0;
    "findIndex" in [] && Array(1).findIndex(function () {
      o = !1
    }), r(r.P + r.F * o, "Array", {
      findIndex: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), e(30)("findIndex")
  }, function (t, n, e) {
    e(38)("Array")
  }, function (t, n, e) {
    var r = e(2),
      i = e(70),
      o = e(7).f,
      u = e(37).f,
      a = e(53),
      s = e(55),
      c = r.RegExp,
      f = c,
      l = c.prototype,
      h = /a/g,
      v = /a/g,
      p = new c(h) !== h;
    if (e(6) && (!p || e(3)(function () {
        return v[e(5)("match")] = !1, c(h) != h || c(v) == v || "/a/i" != c(h, "i")
      }))) {
      c = function (t, n) {
        var e = this instanceof c,
          r = a(t),
          o = void 0 === n;
        return !e && r && t.constructor === c && o ? t : i(p ? new f(r && !o ? t.source : t, n) : f((r = t instanceof c) ? t.source : t, r && o ? s.call(t) : n), e ? this : l, c)
      };
      for (var d = u(f), g = 0; d.length > g;) ! function (t) {
        t in c || o(c, t, {
          configurable: !0,
          get: function () {
            return f[t]
          },
          set: function (n) {
            f[t] = n
          }
        })
      }(d[g++]);
      l.constructor = c, c.prototype = l, e(13)(r, "RegExp", c)
    }
    e(38)("RegExp")
  }, function (t, n, e) {
    "use strict";
    e(109);
    var r = e(1),
      i = e(55),
      o = e(6),
      u = /./.toString,
      a = function (t) {
        e(13)(RegExp.prototype, "toString", t, !0)
      };
    e(3)(function () {
      return "/a/b" != u.call({
        source: "a",
        flags: "b"
      })
    }) ? a(function () {
      var t = r(this);
      return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
    }) : "toString" != u.name && a(function () {
      return u.call(this)
    })
  }, function (t, n, e) {
    e(56)("match", 1, function (t, n, e) {
      return [function (e) {
        "use strict";
        var r = t(this),
          i = void 0 == e ? void 0 : e[n];
        return void 0 !== i ? i.call(e, r) : new RegExp(e)[n](String(r))
      }, e]
    })
  }, function (t, n, e) {
    e(56)("replace", 2, function (t, n, e) {
      return [function (r, i) {
        "use strict";
        var o = t(this),
          u = void 0 == r ? void 0 : r[n];
        return void 0 !== u ? u.call(r, o, i) : e.call(String(o), r, i)
      }, e]
    })
  }, function (t, n, e) {
    e(56)("search", 1, function (t, n, e) {
      return [function (e) {
        "use strict";
        var r = t(this),
          i = void 0 == e ? void 0 : e[n];
        return void 0 !== i ? i.call(e, r) : new RegExp(e)[n](String(r))
      }, e]
    })
  }, function (t, n, e) {
    e(56)("split", 2, function (t, n, r) {
      "use strict";
      var i = e(53),
        o = r,
        u = [].push;
      if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
        var a = void 0 === /()??/.exec("")[1];
        r = function (t, n) {
          var e = String(this);
          if (void 0 === t && 0 === n) return [];
          if (!i(t)) return o.call(e, t, n);
          var r, s, c, f, l, h = [],
            v = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
            p = 0,
            d = void 0 === n ? 4294967295 : n >>> 0,
            g = new RegExp(t.source, v + "g");
          for (a || (r = new RegExp("^" + g.source + "$(?!\\s)", v));
            (s = g.exec(e)) && !((c = s.index + s[0].length) > p && (h.push(e.slice(p, s.index)), !a && s.length > 1 && s[0].replace(r, function () {
              for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0)
            }), s.length > 1 && s.index < e.length && u.apply(h, s.slice(1)), f = s[0].length, p = c, h.length >= d));) g.lastIndex === s.index && g.lastIndex++;
          return p === e.length ? !f && g.test("") || h.push("") : h.push(e.slice(p)), h.length > d ? h.slice(0, d) : h
        }
      } else "0".split(void 0, 0).length && (r = function (t, n) {
        return void 0 === t && 0 === n ? [] : o.call(this, t, n)
      });
      return [function (e, i) {
        var o = t(this),
          u = void 0 == e ? void 0 : e[n];
        return void 0 !== u ? u.call(e, o, i) : r.call(String(o), e, i)
      }, r]
    })
  }, function (t, n, e) {
    "use strict";
    var r, i, o, u, a = e(33),
      s = e(2),
      c = e(18),
      f = e(48),
      l = e(0),
      h = e(4),
      v = e(10),
      p = e(39),
      d = e(40),
      g = e(57),
      y = e(85).set,
      m = e(86)(),
      b = e(87),
      _ = e(110),
      w = e(111),
      x = "Promise",
      S = s.TypeError,
      E = s.process,
      O = s[x],
      M = "process" == f(E),
      L = function () {},
      k = i = b.f,
      P = !! function () {
        try {
          var t = O.resolve(1),
            n = (t.constructor = {})[e(5)("species")] = function (t) {
              t(L, L)
            };
          return (M || "function" == typeof PromiseRejectionEvent) && t.then(L) instanceof n
        } catch (t) {}
      }(),
      j = function (t) {
        var n;
        return !(!h(t) || "function" != typeof (n = t.then)) && n
      },
      F = function (t, n) {
        if (!t._n) {
          t._n = !0;
          var e = t._c;
          m(function () {
            for (var r = t._v, i = 1 == t._s, o = 0; e.length > o;) ! function (n) {
              var e, o, u = i ? n.ok : n.fail,
                a = n.resolve,
                s = n.reject,
                c = n.domain;
              try {
                u ? (i || (2 == t._h && N(t), t._h = 1), !0 === u ? e = r : (c && c.enter(), e = u(r), c && c.exit()), e === n.promise ? s(S("Promise-chain cycle")) : (o = j(e)) ? o.call(e, a, s) : a(e)) : s(r)
              } catch (t) {
                s(t)
              }
            }(e[o++]);
            t._c = [], t._n = !1, n && !t._h && I(t)
          })
        }
      },
      I = function (t) {
        y.call(s, function () {
          var n, e, r, i = t._v,
            o = A(t);
          if (o && (n = _(function () {
              M ? E.emit("unhandledRejection", i, t) : (e = s.onunhandledrejection) ? e({
                promise: t,
                reason: i
              }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", i)
            }), t._h = M || A(t) ? 2 : 1), t._a = void 0, o && n.e) throw n.v
        })
      },
      A = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
      },
      N = function (t) {
        y.call(s, function () {
          var n;
          M ? E.emit("rejectionHandled", t) : (n = s.onrejectionhandled) && n({
            promise: t,
            reason: t._v
          })
        })
      },
      R = function (t) {
        var n = this;
        n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), F(n, !0))
      },
      T = function (t) {
        var n, e = this;
        if (!e._d) {
          e._d = !0, e = e._w || e;
          try {
            if (e === t) throw S("Promise can't be resolved itself");
            (n = j(t)) ? m(function () {
              var r = {
                _w: e,
                _d: !1
              };
              try {
                n.call(t, c(T, r, 1), c(R, r, 1))
              } catch (t) {
                R.call(r, t)
              }
            }): (e._v = t, e._s = 1, F(e, !1))
          } catch (t) {
            R.call({
              _w: e,
              _d: !1
            }, t)
          }
        }
      };
    P || (O = function (t) {
      p(this, O, x, "_h"), v(t), r.call(this);
      try {
        t(c(T, this, 1), c(R, this, 1))
      } catch (t) {
        R.call(this, t)
      }
    }, (r = function (t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = e(41)(O.prototype, {
      then: function (t, n) {
        var e = k(g(this, O));
        return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = M ? E.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && F(this, !1), e.promise
      },
      catch: function (t) {
        return this.then(void 0, t)
      }
    }), o = function () {
      var t = new r;
      this.promise = t, this.resolve = c(T, t, 1), this.reject = c(R, t, 1)
    }, b.f = k = function (t) {
      return t === O || t === u ? new o(t) : i(t)
    }), l(l.G + l.W + l.F * !P, {
      Promise: O
    }), e(42)(O, x), e(38)(x), u = e(21)[x], l(l.S + l.F * !P, x, {
      reject: function (t) {
        var n = k(this);
        return (0, n.reject)(t), n.promise
      }
    }), l(l.S + l.F * (a || !P), x, {
      resolve: function (t) {
        return w(a && this === u ? O : this, t)
      }
    }), l(l.S + l.F * !(P && e(54)(function (t) {
      O.all(t).catch(L)
    })), x, {
      all: function (t) {
        var n = this,
          e = k(n),
          r = e.resolve,
          i = e.reject,
          o = _(function () {
            var e = [],
              o = 0,
              u = 1;
            d(t, !1, function (t) {
              var a = o++,
                s = !1;
              e.push(void 0), u++, n.resolve(t).then(function (t) {
                s || (s = !0, e[a] = t, --u || r(e))
              }, i)
            }), --u || r(e)
          });
        return o.e && i(o.v), e.promise
      },
      race: function (t) {
        var n = this,
          e = k(n),
          r = e.reject,
          i = _(function () {
            d(t, !1, function (t) {
              n.resolve(t).then(e.resolve, r)
            })
          });
        return i.e && r(i.v), e.promise
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(116),
      i = e(45);
    e(58)("WeakSet", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      add: function (t) {
        return r.def(i(this, "WeakSet"), t, !0)
      }
    }, r, !1, !0)
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(59),
      o = e(88),
      u = e(1),
      a = e(35),
      s = e(8),
      c = e(4),
      f = e(2).ArrayBuffer,
      l = e(57),
      h = o.ArrayBuffer,
      v = o.DataView,
      p = i.ABV && f.isView,
      d = h.prototype.slice,
      g = i.VIEW,
      y = "ArrayBuffer";
    r(r.G + r.W + r.F * (f !== h), {
      ArrayBuffer: h
    }), r(r.S + r.F * !i.CONSTR, y, {
      isView: function (t) {
        return p && p(t) || c(t) && g in t
      }
    }), r(r.P + r.U + r.F * e(3)(function () {
      return !new h(2).slice(1, void 0).byteLength
    }), y, {
      slice: function (t, n) {
        if (void 0 !== d && void 0 === n) return d.call(u(this), t);
        for (var e = u(this).byteLength, r = a(t, e), i = a(void 0 === n ? e : n, e), o = new(l(this, h))(s(i - r)), c = new v(this), f = new v(o), p = 0; r < i;) f.setUint8(p++, c.getUint8(r++));
        return o
      }
    }), e(38)(y)
  }, function (t, n, e) {
    var r = e(0);
    r(r.G + r.W + r.F * !e(59).ABV, {
      DataView: e(88).DataView
    })
  }, function (t, n, e) {
    e(27)("Int8", 1, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Uint8", 1, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Uint8", 1, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    }, !0)
  }, function (t, n, e) {
    e(27)("Int16", 2, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Uint16", 2, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Int32", 4, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Uint32", 4, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Float32", 4, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    e(27)("Float64", 8, function (t) {
      return function (n, e, r) {
        return t(this, n, e, r)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(10),
      o = e(1),
      u = (e(2).Reflect || {}).apply,
      a = Function.apply;
    r(r.S + r.F * !e(3)(function () {
      u(function () {})
    }), "Reflect", {
      apply: function (t, n, e) {
        var r = i(t),
          s = o(e);
        return u ? u(r, n, s) : a.call(r, n, s)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(36),
      o = e(10),
      u = e(1),
      a = e(4),
      s = e(3),
      c = e(97),
      f = (e(2).Reflect || {}).construct,
      l = s(function () {
        function t() {}
        return !(f(function () {}, [], t) instanceof t)
      }),
      h = !s(function () {
        f(function () {})
      });
    r(r.S + r.F * (l || h), "Reflect", {
      construct: function (t, n) {
        o(t), u(n);
        var e = arguments.length < 3 ? t : o(arguments[2]);
        if (h && !l) return f(t, n, e);
        if (t == e) {
          switch (n.length) {
            case 0:
              return new t;
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3])
          }
          var r = [null];
          return r.push.apply(r, n), new(c.apply(t, r))
        }
        var s = e.prototype,
          v = i(a(s) ? s : Object.prototype),
          p = Function.apply.call(t, v, n);
        return a(p) ? p : v
      }
    })
  }, function (t, n, e) {
    var r = e(7),
      i = e(0),
      o = e(1),
      u = e(22);
    i(i.S + i.F * e(3)(function () {
      Reflect.defineProperty(r.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      })
    }), "Reflect", {
      defineProperty: function (t, n, e) {
        o(t), n = u(n, !0), o(e);
        try {
          return r.f(t, n, e), !0
        } catch (t) {
          return !1
        }
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(16).f,
      o = e(1);
    r(r.S, "Reflect", {
      deleteProperty: function (t, n) {
        var e = i(o(t), n);
        return !(e && !e.configurable) && delete t[n]
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(1),
      o = function (t) {
        this._t = i(t), this._i = 0;
        var n, e = this._k = [];
        for (n in t) e.push(n)
      };
    e(76)(o, "Object", function () {
      var t, n = this._k;
      do {
        if (this._i >= n.length) return {
          value: void 0,
          done: !0
        }
      } while (!((t = n[this._i++]) in this._t));
      return {
        value: t,
        done: !1
      }
    }), r(r.S, "Reflect", {
      enumerate: function (t) {
        return new o(t)
      }
    })
  }, function (t, n, e) {
    var r = e(16),
      i = e(17),
      o = e(11),
      u = e(0),
      a = e(4),
      s = e(1);
    u(u.S, "Reflect", {
      get: function t(n, e) {
        var u, c, f = arguments.length < 3 ? n : arguments[2];
        return s(n) === f ? n[e] : (u = r.f(n, e)) ? o(u, "value") ? u.value : void 0 !== u.get ? u.get.call(f) : void 0 : a(c = i(n)) ? t(c, e, f) : void 0
      }
    })
  }, function (t, n, e) {
    var r = e(16),
      i = e(0),
      o = e(1);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function (t, n) {
        return r.f(o(t), n)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(17),
      o = e(1);
    r(r.S, "Reflect", {
      getPrototypeOf: function (t) {
        return i(o(t))
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Reflect", {
      has: function (t, n) {
        return n in t
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(1),
      o = Object.isExtensible;
    r(r.S, "Reflect", {
      isExtensible: function (t) {
        return i(t), !o || o(t)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Reflect", {
      ownKeys: e(118)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(1),
      o = Object.preventExtensions;
    r(r.S, "Reflect", {
      preventExtensions: function (t) {
        i(t);
        try {
          return o && o(t), !0
        } catch (t) {
          return !1
        }
      }
    })
  }, function (t, n, e) {
    var r = e(7),
      i = e(16),
      o = e(17),
      u = e(11),
      a = e(0),
      s = e(31),
      c = e(1),
      f = e(4);
    a(a.S, "Reflect", {
      set: function t(n, e, a) {
        var l, h, v = arguments.length < 4 ? n : arguments[3],
          p = i.f(c(n), e);
        if (!p) {
          if (f(h = o(n))) return t(h, e, a, v);
          p = s(0)
        }
        return u(p, "value") ? !(!1 === p.writable || !f(v) || ((l = i.f(v, e) || s(0)).value = a, r.f(v, e, l), 0)) : void 0 !== p.set && (p.set.call(v, a), !0)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(68);
    i && r(r.S, "Reflect", {
      setPrototypeOf: function (t, n) {
        i.check(t, n);
        try {
          return i.set(t, n), !0
        } catch (t) {
          return !1
        }
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(50)(!0);
    r(r.P, "Array", {
      includes: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), e(30)("includes")
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(119),
      o = e(9),
      u = e(8),
      a = e(10),
      s = e(82);
    r(r.P, "Array", {
      flatMap: function (t) {
        var n, e, r = o(this);
        return a(t), n = u(r.length), e = s(r, 0), i(e, r, r, n, 0, 1, t, arguments[1]), e
      }
    }), e(30)("flatMap")
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(119),
      o = e(9),
      u = e(8),
      a = e(24),
      s = e(82);
    r(r.P, "Array", {
      flatten: function () {
        var t = arguments[0],
          n = o(this),
          e = u(n.length),
          r = s(n, 0);
        return i(r, n, n, e, 0, void 0 === t ? 1 : a(t)), r
      }
    }), e(30)("flatten")
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(74)(!0);
    r(r.P, "String", {
      at: function (t) {
        return i(this, t)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(120),
      o = e(89);
    r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
      padStart: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(120),
      o = e(89);
    r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
      padEnd: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
      }
    })
  }, function (t, n, e) {
    "use strict";
    e(43)("trimLeft", function (t) {
      return function () {
        return t(this, 1)
      }
    }, "trimStart")
  }, function (t, n, e) {
    "use strict";
    e(43)("trimRight", function (t) {
      return function () {
        return t(this, 2)
      }
    }, "trimEnd")
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(23),
      o = e(8),
      u = e(53),
      a = e(55),
      s = RegExp.prototype,
      c = function (t, n) {
        this._r = t, this._s = n
      };
    e(76)(c, "RegExp String", function () {
      var t = this._r.exec(this._s);
      return {
        value: t,
        done: null === t
      }
    }), r(r.P, "String", {
      matchAll: function (t) {
        if (i(this), !u(t)) throw TypeError(t + " is not a regexp!");
        var n = String(this),
          e = "flags" in s ? String(t.flags) : a.call(t),
          r = new RegExp(t.source, ~e.indexOf("g") ? e : "g" + e);
        return r.lastIndex = o(t.lastIndex), new c(r, n)
      }
    })
  }, function (t, n, e) {
    e(64)("asyncIterator")
  }, function (t, n, e) {
    e(64)("observable")
  }, function (t, n, e) {
    var r = e(0),
      i = e(118),
      o = e(15),
      u = e(16),
      a = e(80);
    r(r.S, "Object", {
      getOwnPropertyDescriptors: function (t) {
        for (var n, e, r = o(t), s = u.f, c = i(r), f = {}, l = 0; c.length > l;) void 0 !== (e = s(r, n = c[l++])) && a(f, n, e);
        return f
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(121)(!1);
    r(r.S, "Object", {
      values: function (t) {
        return i(t)
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(121)(!0);
    r(r.S, "Object", {
      entries: function (t) {
        return i(t)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(9),
      o = e(10),
      u = e(7);
    e(6) && r(r.P + e(60), "Object", {
      __defineGetter__: function (t, n) {
        u.f(i(this), t, {
          get: o(n),
          enumerable: !0,
          configurable: !0
        })
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(9),
      o = e(10),
      u = e(7);
    e(6) && r(r.P + e(60), "Object", {
      __defineSetter__: function (t, n) {
        u.f(i(this), t, {
          set: o(n),
          enumerable: !0,
          configurable: !0
        })
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(9),
      o = e(22),
      u = e(17),
      a = e(16).f;
    e(6) && r(r.P + e(60), "Object", {
      __lookupGetter__: function (t) {
        var n, e = i(this),
          r = o(t, !0);
        do {
          if (n = a(e, r)) return n.get
        } while (e = u(e))
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(9),
      o = e(22),
      u = e(17),
      a = e(16).f;
    e(6) && r(r.P + e(60), "Object", {
      __lookupSetter__: function (t) {
        var n, e = i(this),
          r = o(t, !0);
        do {
          if (n = a(e, r)) return n.set
        } while (e = u(e))
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.P + r.R, "Map", {
      toJSON: e(122)("Map")
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.P + r.R, "Set", {
      toJSON: e(122)("Set")
    })
  }, function (t, n, e) {
    e(61)("Map")
  }, function (t, n, e) {
    e(61)("Set")
  }, function (t, n, e) {
    e(61)("WeakMap")
  }, function (t, n, e) {
    e(61)("WeakSet")
  }, function (t, n, e) {
    e(62)("Map")
  }, function (t, n, e) {
    e(62)("Set")
  }, function (t, n, e) {
    e(62)("WeakMap")
  }, function (t, n, e) {
    e(62)("WeakSet")
  }, function (t, n, e) {
    var r = e(0);
    r(r.G, {
      global: e(2)
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "System", {
      global: e(2)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(19);
    r(r.S, "Error", {
      isError: function (t) {
        return "Error" === i(t)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      clamp: function (t, n, e) {
        return Math.min(e, Math.max(n, t))
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      DEG_PER_RAD: Math.PI / 180
    })
  }, function (t, n, e) {
    var r = e(0),
      i = 180 / Math.PI;
    r(r.S, "Math", {
      degrees: function (t) {
        return t * i
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(124),
      o = e(104);
    r(r.S, "Math", {
      fscale: function (t, n, e, r, u) {
        return o(i(t, n, e, r, u))
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      iaddh: function (t, n, e, r) {
        var i = t >>> 0,
          o = e >>> 0;
        return (n >>> 0) + (r >>> 0) + ((i & o | (i | o) & ~(i + o >>> 0)) >>> 31) | 0
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      isubh: function (t, n, e, r) {
        var i = t >>> 0,
          o = e >>> 0;
        return (n >>> 0) - (r >>> 0) - ((~i & o | ~(i ^ o) & i - o >>> 0) >>> 31) | 0
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      imulh: function (t, n) {
        var e = +t,
          r = +n,
          i = 65535 & e,
          o = 65535 & r,
          u = e >> 16,
          a = r >> 16,
          s = (u * o >>> 0) + (i * o >>> 16);
        return u * a + (s >> 16) + ((i * a >>> 0) + (65535 & s) >> 16)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      RAD_PER_DEG: 180 / Math.PI
    })
  }, function (t, n, e) {
    var r = e(0),
      i = Math.PI / 180;
    r(r.S, "Math", {
      radians: function (t) {
        return t * i
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      scale: e(124)
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      umulh: function (t, n) {
        var e = +t,
          r = +n,
          i = 65535 & e,
          o = 65535 & r,
          u = e >>> 16,
          a = r >>> 16,
          s = (u * o >>> 0) + (i * o >>> 16);
        return u * a + (s >>> 16) + ((i * a >>> 0) + (65535 & s) >>> 16)
      }
    })
  }, function (t, n, e) {
    var r = e(0);
    r(r.S, "Math", {
      signbit: function (t) {
        return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(21),
      o = e(2),
      u = e(57),
      a = e(111);
    r(r.P + r.R, "Promise", {
      finally: function (t) {
        var n = u(this, i.Promise || o.Promise),
          e = "function" == typeof t;
        return this.then(e ? function (e) {
          return a(n, t()).then(function () {
            return e
          })
        } : t, e ? function (e) {
          return a(n, t()).then(function () {
            throw e
          })
        } : t)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(87),
      o = e(110);
    r(r.S, "Promise", {
      try: function (t) {
        var n = i.f(this),
          e = o(t);
        return (e.e ? n.reject : n.resolve)(e.v), n.promise
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = r.key,
      u = r.set;
    r.exp({
      defineMetadata: function (t, n, e, r) {
        u(t, n, i(e), o(r))
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = r.key,
      u = r.map,
      a = r.store;
    r.exp({
      deleteMetadata: function (t, n) {
        var e = arguments.length < 3 ? void 0 : o(arguments[2]),
          r = u(i(n), e, !1);
        if (void 0 === r || !r.delete(t)) return !1;
        if (r.size) return !0;
        var s = a.get(n);
        return s.delete(e), !!s.size || a.delete(n)
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = e(17),
      u = r.has,
      a = r.get,
      s = r.key,
      c = function (t, n, e) {
        if (u(t, n, e)) return a(t, n, e);
        var r = o(n);
        return null !== r ? c(t, r, e) : void 0
      };
    r.exp({
      getMetadata: function (t, n) {
        return c(t, i(n), arguments.length < 3 ? void 0 : s(arguments[2]))
      }
    })
  }, function (t, n, e) {
    var r = e(114),
      i = e(123),
      o = e(28),
      u = e(1),
      a = e(17),
      s = o.keys,
      c = o.key,
      f = function (t, n) {
        var e = s(t, n),
          o = a(t);
        if (null === o) return e;
        var u = f(o, n);
        return u.length ? e.length ? i(new r(e.concat(u))) : u : e
      };
    o.exp({
      getMetadataKeys: function (t) {
        return f(u(t), arguments.length < 2 ? void 0 : c(arguments[1]))
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = r.get,
      u = r.key;
    r.exp({
      getOwnMetadata: function (t, n) {
        return o(t, i(n), arguments.length < 3 ? void 0 : u(arguments[2]))
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = r.keys,
      u = r.key;
    r.exp({
      getOwnMetadataKeys: function (t) {
        return o(i(t), arguments.length < 2 ? void 0 : u(arguments[1]))
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = e(17),
      u = r.has,
      a = r.key,
      s = function (t, n, e) {
        if (u(t, n, e)) return !0;
        var r = o(n);
        return null !== r && s(t, r, e)
      };
    r.exp({
      hasMetadata: function (t, n) {
        return s(t, i(n), arguments.length < 3 ? void 0 : a(arguments[2]))
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = r.has,
      u = r.key;
    r.exp({
      hasOwnMetadata: function (t, n) {
        return o(t, i(n), arguments.length < 3 ? void 0 : u(arguments[2]))
      }
    })
  }, function (t, n, e) {
    var r = e(28),
      i = e(1),
      o = e(10),
      u = r.key,
      a = r.set;
    r.exp({
      metadata: function (t, n) {
        return function (e, r) {
          a(t, n, (void 0 !== r ? i : o)(e), u(r))
        }
      }
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(86)(),
      o = e(2).process,
      u = "process" == e(19)(o);
    r(r.G, {
      asap: function (t) {
        var n = u && o.domain;
        i(n ? n.bind(t) : t)
      }
    })
  }, function (t, n, e) {
    "use strict";
    var r = e(0),
      i = e(2),
      o = e(21),
      u = e(86)(),
      a = e(5)("observable"),
      s = e(10),
      c = e(1),
      f = e(39),
      l = e(41),
      h = e(12),
      v = e(40),
      p = v.RETURN,
      d = function (t) {
        return null == t ? void 0 : s(t)
      },
      g = function (t) {
        var n = t._c;
        n && (t._c = void 0, n())
      },
      y = function (t) {
        return void 0 === t._o
      },
      m = function (t) {
        y(t) || (t._o = void 0, g(t))
      },
      b = function (t, n) {
        c(t), this._c = void 0, this._o = t, t = new _(this);
        try {
          var e = n(t),
            r = e;
          null != e && ("function" == typeof e.unsubscribe ? e = function () {
            r.unsubscribe()
          } : s(e), this._c = e)
        } catch (n) {
          return void t.error(n)
        }
        y(this) && g(this)
      };
    b.prototype = l({}, {
      unsubscribe: function () {
        m(this)
      }
    });
    var _ = function (t) {
      this._s = t
    };
    _.prototype = l({}, {
      next: function (t) {
        var n = this._s;
        if (!y(n)) {
          var e = n._o;
          try {
            var r = d(e.next);
            if (r) return r.call(e, t)
          } catch (t) {
            try {
              m(n)
            } finally {
              throw t
            }
          }
        }
      },
      error: function (t) {
        var n = this._s;
        if (y(n)) throw t;
        var e = n._o;
        n._o = void 0;
        try {
          var r = d(e.error);
          if (!r) throw t;
          t = r.call(e, t)
        } catch (t) {
          try {
            g(n)
          } finally {
            throw t
          }
        }
        return g(n), t
      },
      complete: function (t) {
        var n = this._s;
        if (!y(n)) {
          var e = n._o;
          n._o = void 0;
          try {
            var r = d(e.complete);
            t = r ? r.call(e, t) : void 0
          } catch (t) {
            try {
              g(n)
            } finally {
              throw t
            }
          }
          return g(n), t
        }
      }
    });
    var w = function (t) {
      f(this, w, "Observable", "_f")._f = s(t)
    };
    l(w.prototype, {
      subscribe: function (t) {
        return new b(t, this._f)
      },
      forEach: function (t) {
        var n = this;
        return new(o.Promise || i.Promise)(function (e, r) {
          s(t);
          var i = n.subscribe({
            next: function (n) {
              try {
                return t(n)
              } catch (t) {
                r(t), i.unsubscribe()
              }
            },
            error: r,
            complete: e
          })
        })
      }
    }), l(w, {
      from: function (t) {
        var n = "function" == typeof this ? this : w,
          e = d(c(t)[a]);
        if (e) {
          var r = c(e.call(t));
          return r.constructor === n ? r : new n(function (t) {
            return r.subscribe(t)
          })
        }
        return new n(function (n) {
          var e = !1;
          return u(function () {
              if (!e) {
                try {
                  if (v(t, !1, function (t) {
                      if (n.next(t), e) return p
                    }) === p) return
                } catch (t) {
                  if (e) throw t;
                  return void n.error(t)
                }
                n.complete()
              }
            }),
            function () {
              e = !0
            }
        })
      },
      of: function () {
        for (var t = 0, n = arguments.length, e = new Array(n); t < n;) e[t] = arguments[t++];
        return new("function" == typeof this ? this : w)(function (t) {
          var n = !1;
          return u(function () {
              if (!n) {
                for (var r = 0; r < e.length; ++r)
                  if (t.next(e[r]), n) return;
                t.complete()
              }
            }),
            function () {
              n = !0
            }
        })
      }
    }), h(w.prototype, a, function () {
      return this
    }), r(r.G, {
      Observable: w
    }), e(38)("Observable")
  }, function (t, n, e) {
    var r = e(2),
      i = e(0),
      o = e(89),
      u = [].slice,
      a = /MSIE .\./.test(o),
      s = function (t) {
        return function (n, e) {
          var r = arguments.length > 2,
            i = !!r && u.call(arguments, 2);
          return t(r ? function () {
            ("function" == typeof n ? n : Function(n)).apply(this, i)
          } : n, e)
        }
      };
    i(i.G + i.B + i.F * a, {
      setTimeout: s(r.setTimeout),
      setInterval: s(r.setInterval)
    })
  }, function (t, n, e) {
    var r = e(0),
      i = e(85);
    r(r.G + r.B, {
      setImmediate: i.set,
      clearImmediate: i.clear
    })
  }, function (t, n, e) {
    for (var r = e(84), i = e(34), o = e(13), u = e(2), a = e(12), s = e(44), c = e(5), f = c("iterator"), l = c("toStringTag"), h = s.Array, v = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
      }, p = i(v), d = 0; d < p.length; d++) {
      var g, y = p[d],
        m = v[y],
        b = u[y],
        _ = b && b.prototype;
      if (_ && (_[f] || a(_, f, h), _[l] || a(_, l, y), s[y] = h, m))
        for (g in r) _[g] || o(_, g, r[g], !0)
    }
  }, function (t, n, e) {
    (function (n) {
      ! function (n) {
        "use strict";

        function e(t, n, e, o) {
          var u = n && n.prototype instanceof i ? n : i,
            a = Object.create(u.prototype),
            s = new h(o || []);
          return a._invoke = function (t, n, e) {
            var i = E;
            return function (o, u) {
              if (i === M) throw new Error("Generator is already running");
              if (i === L) {
                if ("throw" === o) throw u;
                return p()
              }
              for (e.method = o, e.arg = u;;) {
                var a = e.delegate;
                if (a) {
                  var s = c(a, e);
                  if (s) {
                    if (s === k) continue;
                    return s
                  }
                }
                if ("next" === e.method) e.sent = e._sent = e.arg;
                else if ("throw" === e.method) {
                  if (i === E) throw i = L, e.arg;
                  e.dispatchException(e.arg)
                } else "return" === e.method && e.abrupt("return", e.arg);
                i = M;
                var f = r(t, n, e);
                if ("normal" === f.type) {
                  if (i = e.done ? L : O, f.arg === k) continue;
                  return {
                    value: f.arg,
                    done: e.done
                  }
                }
                "throw" === f.type && (i = L, e.method = "throw", e.arg = f.arg)
              }
            }
          }(t, e, s), a
        }

        function r(t, n, e) {
          try {
            return {
              type: "normal",
              arg: t.call(n, e)
            }
          } catch (t) {
            return {
              type: "throw",
              arg: t
            }
          }
        }

        function i() {}

        function o() {}

        function u() {}

        function a(t) {
          ["next", "throw", "return"].forEach(function (n) {
            t[n] = function (t) {
              return this._invoke(n, t)
            }
          })
        }

        function s(t) {
          function e(n, i, o, u) {
            var a = r(t[n], t, i);
            if ("throw" !== a.type) {
              var s = a.arg,
                c = s.value;
              return c && "object" == typeof c && y.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                e("next", t, o, u)
              }, function (t) {
                e("throw", t, o, u)
              }) : Promise.resolve(c).then(function (t) {
                s.value = t, o(s)
              }, u)
            }
            u(a.arg)
          }
          "object" == typeof n.process && n.process.domain && (e = n.process.domain.bind(e));
          var i;
          this._invoke = function (t, n) {
            function r() {
              return new Promise(function (r, i) {
                e(t, n, r, i)
              })
            }
            return i = i ? i.then(r, r) : r()
          }
        }

        function c(t, n) {
          var e = t.iterator[n.method];
          if (e === d) {
            if (n.delegate = null, "throw" === n.method) {
              if (t.iterator.return && (n.method = "return", n.arg = d, c(t, n), "throw" === n.method)) return k;
              n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return k
          }
          var i = r(e, t.iterator, n.arg);
          if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, k;
          var o = i.arg;
          return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = d), n.delegate = null, k) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, k)
        }

        function f(t) {
          var n = {
            tryLoc: t[0]
          };
          1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
        }

        function l(t) {
          var n = t.completion || {};
          n.type = "normal", delete n.arg, t.completion = n
        }

        function h(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(f, this), this.reset(!0)
        }

        function v(t) {
          if (t) {
            var n = t[b];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var e = -1,
                r = function n() {
                  for (; ++e < t.length;)
                    if (y.call(t, e)) return n.value = t[e], n.done = !1, n;
                  return n.value = d, n.done = !0, n
                };
              return r.next = r
            }
          }
          return {
            next: p
          }
        }

        function p() {
          return {
            value: d,
            done: !0
          }
        }
        var d, g = Object.prototype,
          y = g.hasOwnProperty,
          m = "function" == typeof Symbol ? Symbol : {},
          b = m.iterator || "@@iterator",
          _ = m.asyncIterator || "@@asyncIterator",
          w = m.toStringTag || "@@toStringTag",
          x = "object" == typeof t,
          S = n.regeneratorRuntime;
        if (S) x && (t.exports = S);
        else {
          (S = n.regeneratorRuntime = x ? t.exports : {}).wrap = e;
          var E = "suspendedStart",
            O = "suspendedYield",
            M = "executing",
            L = "completed",
            k = {},
            P = {};
          P[b] = function () {
            return this
          };
          var j = Object.getPrototypeOf,
            F = j && j(j(v([])));
          F && F !== g && y.call(F, b) && (P = F);
          var I = u.prototype = i.prototype = Object.create(P);
          o.prototype = I.constructor = u, u.constructor = o, u[w] = o.displayName = "GeneratorFunction", S.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return !!n && (n === o || "GeneratorFunction" === (n.displayName || n.name))
          }, S.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, u) : (t.__proto__ = u, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(I), t
          }, S.awrap = function (t) {
            return {
              __await: t
            }
          }, a(s.prototype), s.prototype[_] = function () {
            return this
          }, S.AsyncIterator = s, S.async = function (t, n, r, i) {
            var o = new s(e(t, n, r, i));
            return S.isGeneratorFunction(n) ? o : o.next().then(function (t) {
              return t.done ? t.value : o.next()
            })
          }, a(I), I[w] = "Generator", I[b] = function () {
            return this
          }, I.toString = function () {
            return "[object Generator]"
          }, S.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return n.reverse(),
              function e() {
                for (; n.length;) {
                  var r = n.pop();
                  if (r in t) return e.value = r, e.done = !1, e
                }
                return e.done = !0, e
              }
          }, S.values = v, h.prototype = {
            constructor: h,
            reset: function (t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(l), !t)
                for (var n in this) "t" === n.charAt(0) && y.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = d)
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval
            },
            dispatchException: function (t) {
              function n(n, r) {
                return o.type = "throw", o.arg = t, e.next = n, r && (e.method = "next", e.arg = d), !!r
              }
              if (this.done) throw t;
              for (var e = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  o = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var u = y.call(i, "catchLoc"),
                    a = y.call(i, "finallyLoc");
                  if (u && a) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!a) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                  var i = r;
                  break
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
              var o = i ? i.completion : {};
              return o.type = t, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, k) : this.complete(o)
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), k
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), l(e), k
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    l(e)
                  }
                  return i
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function (t, n, e) {
              return this.delegate = {
                iterator: v(t),
                resultName: n,
                nextLoc: e
              }, "next" === this.method && (this.arg = d), k
            }
          }
        }
      }("object" == typeof n ? n : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(n, e(90))
  }, function (t, n, e) {
    e(328), t.exports = e(21).RegExp.escape
  }, function (t, n, e) {
    var r = e(0),
      i = e(329)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    r(r.S, "RegExp", {
      escape: function (t) {
        return i(t)
      }
    })
  }, function (t, n) {
    t.exports = function (t, n) {
      var e = n === Object(n) ? function (t) {
        return n[t]
      } : n;
      return function (n) {
        return String(n).replace(t, e)
      }
    }
  }, function (t, n, e) {
    t.exports = e(331).default
  }, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
      }),
      function (t) {
        function r(t, n) {
          t._numberOfParticipants += n
        }

        function i(t) {
          var n = void 0;
          return "string" == typeof t && null !== String(t).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/) ? n = t : "number" == typeof t && (n = t + "px"), n
        }
        var o = e(332),
          u = e.n(o),
          a = e(125),
          s = e(333),
          c = function () {
            function t(t, n) {
              for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
              }
            }
            return function (n, e, r) {
              return e && t(n.prototype, e), r && t(n, r), n
            }
          }(),
          f = function () {
            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return function (t, n) {
                var e = [],
                  r = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (e.push(u.value), !n || e.length !== n); r = !0);
                } catch (t) {
                  i = !0, o = t
                } finally {
                  try {
                    !r && a.return && a.return()
                  } finally {
                    if (i) throw o
                  }
                }
                return e
              }(t, n);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
          }(),
          l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          },
          h = Object.assign || function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
          },
          v = e(335).getLogger(t),
          p = ["css/all.css", "libs/alwaysontop.min.js"],
          d = {
            avatarUrl: "avatar-url",
            displayName: "display-name",
            email: "email",
            hangup: "video-hangup",
            submitFeedback: "submit-feedback",
            toggleAudio: "toggle-audio",
            toggleChat: "toggle-chat",
            toggleContactList: "toggle-contact-list",
            toggleFilmStrip: "toggle-film-strip",
            toggleShareScreen: "toggle-share-screen",
            toggleVideo: "toggle-video"
          },
          g = {
            "avatar-changed": "avatarChanged",
            "audio-availability-changed": "audioAvailabilityChanged",
            "audio-mute-status-changed": "audioMuteStatusChanged",
            "display-name-change": "displayNameChange",
            "feedback-submitted": "feedbackSubmitted",
            "incoming-message": "incomingMessage",
            "outgoing-message": "outgoingMessage",
            "participant-joined": "participantJoined",
            "participant-left": "participantLeft",
            "video-ready-to-close": "readyToClose",
            "video-conference-joined": "videoConferenceJoined",
            "video-conference-left": "videoConferenceLeft",
            "video-availability-changed": "videoAvailabilityChanged",
            "video-mute-status-changed": "videoMuteStatusChanged"
          },
          y = 0,
          m = function (t) {
            function n(t) {
              ! function (t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
              }(this, n);
              for (var e = function (t, n) {
                  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return !n || "object" != typeof n && "function" != typeof n ? t : n
                }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)), r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
              var u = function (t) {
                  if (!t.length) return {};
                  var n = t[0];
                  switch (void 0 === n ? "undefined" : l(n)) {
                    case "string":
                    case void 0:
                      var e = f(t, 9);
                      return {
                        roomName: e[0],
                        width: e[1],
                        height: e[2],
                        parentNode: e[3],
                        configOverwrite: e[4],
                        interfaceConfigOverwrite: e[5],
                        noSSL: e[6],
                        jwt: e[7],
                        onload: e[8]
                      };
                    case "object":
                      return t[0];
                    default:
                      throw new Error("Can't parse the arguments!")
                  }
                }(i),
                c = u.roomName,
                v = void 0 === c ? "" : c,
                p = u.width,
                d = void 0 === p ? "100%" : p,
                g = u.height,
                m = void 0 === g ? "100%" : g,
                b = u.parentNode,
                _ = void 0 === b ? document.body : b,
                w = u.configOverwrite,
                x = void 0 === w ? {} : w,
                S = u.interfaceConfigOverwrite,
                E = void 0 === S ? {} : S,
                O = u.noSSL,
                M = void 0 !== O && O,
                L = u.jwt,
                k = void 0 === L ? void 0 : L,
                P = u.onload,
                j = void 0 === P ? void 0 : P;
              return e._parentNode = _, e._url = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object(a.a)(h({}, n, {
                  url: (n.noSSL ? "http" : "https") + "://" + t + "/#jitsi_meet_external_api_id=" + y
                }))
              }(t, {
                configOverwrite: x,
                interfaceConfigOverwrite: E,
                jwt: k,
                noSSL: M,
                roomName: v
              }), e._createIFrame(m, d, j), e._transport = new s.b({
                backend: new s.a({
                  postisOptions: {
                    scope: "jitsi_meet_external_api_" + y,
                    window: e._frame.contentWindow
                  }
                })
              }), e._isLargeVideoVisible = !0, e._numberOfParticipants = 0, e._participants = {}, e._myUserID = void 0, e._onStageParticipant = void 0, e._setupListeners(), y++, e
            }
            return function (t, n) {
              if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
              t.prototype = Object.create(n && n.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
            }(n, u.a), c(n, [{
              key: "_createIFrame",
              value: function (t, n, e) {
                var r = "jitsiConferenceFrame" + y;
                this._frame = document.createElement("iframe"), this._frame.allow = "camera; microphone", this._frame.src = this._url, this._frame.name = r, this._frame.id = r, this._setSize(t, n), this._frame.setAttribute("allowFullScreen", "true"), this._frame.style.border = 0, e && (this._frame.onload = e), this._frame = this._parentNode.appendChild(this._frame)
              }
            }, {
              key: "_getAlwaysOnTopResources",
              value: function () {
                var t = this._frame.contentWindow,
                  n = "",
                  e = t.document.querySelector("base");
                if (e && e.href) n = e.href;
                else {
                  var r = t.location,
                    i = r.protocol,
                    o = r.host;
                  n = i + "//" + o
                }
                return p.map(function (t) {
                  return new URL(t, n).href
                })
              }
            }, {
              key: "_getOnStageParticipant",
              value: function () {
                return this._onStageParticipant
              }
            }, {
              key: "_getLargeVideo",
              value: function () {
                var t = this.getIFrame();
                if (this._isLargeVideoVisible && t && t.contentWindow && t.contentWindow.document) return t.contentWindow.document.getElementById("largeVideo")
              }
            }, {
              key: "_setSize",
              value: function (t, n) {
                var e = i(t),
                  r = i(n);
                void 0 !== e && (this._frame.style.height = e), void 0 !== r && (this._frame.style.width = r)
              }
            }, {
              key: "_setupListeners",
              value: function () {
                var t = this;
                this._transport.on("event", function (n) {
                  var e = n.name,
                    i = function (t, n) {
                      var e = {};
                      for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                      return e
                    }(n, ["name"]),
                    o = i.id;
                  switch (e) {
                    case "video-conference-joined":
                      t._myUserID = o, t._participants[o] = {
                        avatarURL: i.avatarURL
                      };
                    case "participant-joined":
                      t._participants[o] = t._participants[o] || {}, t._participants[o].displayName = i.displayName, t._participants[o].formattedDisplayName = i.formattedDisplayName, r(t, 1);
                      break;
                    case "participant-left":
                      r(t, -1), delete t._participants[o];
                      break;
                    case "display-name-change":
                      var u = t._participants[o];
                      u && (u.displayName = i.displayname, u.formattedDisplayName = i.formattedDisplayName);
                      break;
                    case "avatar-changed":
                      var a = t._participants[o];
                      a && (a.avatarURL = i.avatarURL);
                      break;
                    case "on-stage-participant-changed":
                      t._onStageParticipant = o, t.emit("largeVideoChanged");
                      break;
                    case "large-video-visibility-changed":
                      t._isLargeVideoVisible = i.isVisible, t.emit("largeVideoChanged");
                      break;
                    case "video-conference-left":
                      r(t, -1), delete t._participants[t._myUserID]
                  }
                  var s = g[e];
                  return !!s && (t.emit(s, i), !0)
                })
              }
            }, {
              key: "addEventListener",
              value: function (t, n) {
                this.on(t, n)
              }
            }, {
              key: "addEventListeners",
              value: function (t) {
                for (var n in t) this.addEventListener(n, t[n])
              }
            }, {
              key: "dispose",
              value: function () {
                this._transport.dispose(), this.removeAllListeners(), this._frame && this._frame.parentNode.removeChild(this._frame)
              }
            }, {
              key: "executeCommand",
              value: function (t) {
                for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
                t in d ? this._transport.sendEvent({
                  data: e,
                  name: d[t]
                }) : v.error("Not supported command name.")
              }
            }, {
              key: "executeCommands",
              value: function (t) {
                for (var n in t) this.executeCommand(n, t[n])
              }
            }, {
              key: "isAudioAvailable",
              value: function () {
                return this._transport.sendRequest({
                  name: "is-audio-available"
                })
              }
            }, {
              key: "isAudioMuted",
              value: function () {
                return this._transport.sendRequest({
                  name: "is-audio-muted"
                })
              }
            }, {
              key: "getAvatarURL",
              value: function (t) {
                return (this._participants[t] || {}).avatarURL
              }
            }, {
              key: "getDisplayName",
              value: function (t) {
                return (this._participants[t] || {}).displayName
              }
            }, {
              key: "_getFormattedDisplayName",
              value: function (t) {
                return (this._participants[t] || {}).formattedDisplayName
              }
            }, {
              key: "getIFrame",
              value: function () {
                return this._frame
              }
            }, {
              key: "getNumberOfParticipants",
              value: function () {
                return this._numberOfParticipants
              }
            }, {
              key: "isVideoAvailable",
              value: function () {
                return this._transport.sendRequest({
                  name: "is-video-available"
                })
              }
            }, {
              key: "isVideoMuted",
              value: function () {
                return this._transport.sendRequest({
                  name: "is-video-muted"
                })
              }
            }, {
              key: "removeEventListener",
              value: function (t) {
                this.removeAllListeners(t)
              }
            }, {
              key: "removeEventListeners",
              value: function (t) {
                var n = this;
                t.forEach(function (t) {
                  return n.removeEventListener(t)
                })
              }
            }]), n
          }();
        n.default = m
      }.call(n, "modules/API/external/external_api.js")
  }, function (t, n) {
    function e() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function r(t) {
      return "function" == typeof t
    }

    function i(t) {
      return "object" == typeof t && null !== t
    }

    function o(t) {
      return void 0 === t
    }
    t.exports = e, e.EventEmitter = e, e.prototype._events = void 0, e.prototype._maxListeners = void 0, e.defaultMaxListeners = 10, e.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
      return this._maxListeners = t, this
    }, e.prototype.emit = function (t) {
      var n, e, u, a, s, c;
      if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
        if ((n = arguments[1]) instanceof Error) throw n;
        var f = new Error('Uncaught, unspecified "error" event. (' + n + ")");
        throw f.context = n, f
      }
      if (o(e = this._events[t])) return !1;
      if (r(e)) switch (arguments.length) {
        case 1:
          e.call(this);
          break;
        case 2:
          e.call(this, arguments[1]);
          break;
        case 3:
          e.call(this, arguments[1], arguments[2]);
          break;
        default:
          a = Array.prototype.slice.call(arguments, 1), e.apply(this, a)
      } else if (i(e))
        for (a = Array.prototype.slice.call(arguments, 1), u = (c = e.slice()).length, s = 0; s < u; s++) c[s].apply(this, a);
      return !0
    }, e.prototype.addListener = function (t, n) {
      var u;
      if (!r(n)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(n.listener) ? n.listener : n), this._events[t] ? i(this._events[t]) ? this._events[t].push(n) : this._events[t] = [this._events[t], n] : this._events[t] = n, i(this._events[t]) && !this._events[t].warned && (u = o(this._maxListeners) ? e.defaultMaxListeners : this._maxListeners) && u > 0 && this._events[t].length > u && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
    }, e.prototype.on = e.prototype.addListener, e.prototype.once = function (t, n) {
      function e() {
        this.removeListener(t, e), i || (i = !0, n.apply(this, arguments))
      }
      if (!r(n)) throw TypeError("listener must be a function");
      var i = !1;
      return e.listener = n, this.on(t, e), this
    }, e.prototype.removeListener = function (t, n) {
      var e, o, u, a;
      if (!r(n)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[t]) return this;
      if (u = (e = this._events[t]).length, o = -1, e === n || r(e.listener) && e.listener === n) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, n);
      else if (i(e)) {
        for (a = u; a-- > 0;)
          if (e[a] === n || e[a].listener && e[a].listener === n) {
            o = a;
            break
          }
        if (o < 0) return this;
        1 === e.length ? (e.length = 0, delete this._events[t]) : e.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, n)
      }
      return this
    }, e.prototype.removeAllListeners = function (t) {
      var n, e;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
      if (0 === arguments.length) {
        for (n in this._events) "removeListener" !== n && this.removeAllListeners(n);
        return this.removeAllListeners("removeListener"), this._events = {}, this
      }
      if (r(e = this._events[t])) this.removeListener(t, e);
      else if (e)
        for (; e.length;) this.removeListener(t, e[e.length - 1]);
      return delete this._events[t], this
    }, e.prototype.listeners = function (t) {
      return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }, e.prototype.listenerCount = function (t) {
      if (this._events) {
        var n = this._events[t];
        if (r(n)) return 1;
        if (n) return n.length
      }
      return 0
    }, e.listenerCount = function (t, n) {
      return t.listenerCount(n)
    }
  }, function (t, n, e) {
    "use strict";
    var r = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = "search" === (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hash") ? t.search : t.hash,
        r = {};
      return e && e.substr(1).split("&").forEach(function (t) {
        var e = t.split("="),
          i = e[0];
        if (i) {
          var o = void 0;
          try {
            o = e[1], n || (o = JSON.parse(decodeURIComponent(o).replace(/\\&/, "&")))
          } catch (t) {
            var u = "Failed to parse URL parameter value: " + String(o);
            return console.warn(u, t), void(window.onerror && window.onerror(u, null, null, null, t))
          }
          r[i] = o
        }
      }), r
    }(window.location).jitsi_meet_external_api_id;
    e(125);
    var i = e(334),
      o = e.n(i),
      u = Object.assign || function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n];
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
      },
      a = function () {
        function t(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (n, e, r) {
          return e && t(n.prototype, e), r && t(n, r), n
        }
      }(),
      s = {
        window: window.opener || window.parent
      },
      c = ["avatar-url", "display-name", "email", "toggle-audio", "toggle-chat", "toggle-contact-list", "toggle-film-strip", "toggle-share-screen", "toggle-video", "video-hangup"],
      f = ["display-name-change", "incoming-message", "outgoing-message", "participant-joined", "participant-left", "video-conference-joined", "video-conference-left", "video-ready-to-close"],
      l = "message",
      h = function () {
        function t() {
          var n = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = e.enableLegacyFormat,
            i = e.postisOptions;
          ! function (t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.postis = o()(u({}, s, i)), this._enableLegacyFormat = r, this._enableLegacyFormat && c.forEach(function (t) {
            return n.postis.listen(t, function (e) {
              return n._legacyMessageReceivedCallback(t, e)
            })
          }), this._receiveCallback = function () {}, this.postis.listen(l, function (t) {
            return n._receiveCallback(t)
          })
        }
        return a(t, [{
          key: "_legacyMessageReceivedCallback",
          value: function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this._receiveCallback({
              data: {
                name: t,
                data: n
              }
            })
          }
        }, {
          key: "_sendLegacyMessage",
          value: function (t) {
            var n = t.name,
              e = function (t, n) {
                var e = {};
                for (var r in t) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
              }(t, ["name"]);
            n && -1 !== f.indexOf(n) && this.postis.send({
              method: n,
              params: e
            })
          }
        }, {
          key: "dispose",
          value: function () {
            this.postis.destroy()
          }
        }, {
          key: "send",
          value: function (t) {
            this.postis.send({
              method: l,
              params: t
            }), this._enableLegacyFormat && this._sendLegacyMessage(t.data || {})
          }
        }, {
          key: "setReceiveCallback",
          value: function (t) {
            this._receiveCallback = t
          }
        }]), t
      }(),
      v = function () {
        function t(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (n, e, r) {
          return e && t(n.prototype, e), r && t(n, r), n
        }
      }(),
      p = function () {
        function t() {
          var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).backend;
          ! function (t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this._listeners = new Map, this._requestID = 0, this._responseHandlers = new Map, this._unprocessedMessages = new Set, this.addListener = this.on, n && this.setBackend(n)
        }
        return v(t, [{
          key: "_disposeBackend",
          value: function () {
            this._backend && (this._backend.dispose(), this._backend = null)
          }
        }, {
          key: "_onMessageReceived",
          value: function (t) {
            var n = this;
            if ("response" === t.type) {
              var e = this._responseHandlers.get(t.id);
              e && (e(t), this._responseHandlers.delete(t.id))
            } else "request" === t.type ? this.emit("request", t.data, function (e, r) {
              n._backend.send({
                type: "response",
                error: r,
                id: t.id,
                result: e
              })
            }) : this.emit("event", t.data)
          }
        }, {
          key: "dispose",
          value: function () {
            this._responseHandlers.clear(), this._unprocessedMessages.clear(), this.removeAllListeners(), this._disposeBackend()
          }
        }, {
          key: "emit",
          value: function (t) {
            for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
            var i = this._listeners.get(t),
              o = !1;
            return i && i.size && i.forEach(function (t) {
              o = t.apply(void 0, e) || o
            }), o || this._unprocessedMessages.add(e), o
          }
        }, {
          key: "on",
          value: function (t, n) {
            var e = this,
              r = this._listeners.get(t);
            return r || (r = new Set, this._listeners.set(t, r)), r.add(n), this._unprocessedMessages.forEach(function (t) {
              n.apply(void 0, function (t) {
                if (Array.isArray(t)) {
                  for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
                  return e
                }
                return Array.from(t)
              }(t)) && e._unprocessedMessages.delete(t)
            }), this
          }
        }, {
          key: "removeAllListeners",
          value: function (t) {
            return t ? this._listeners.delete(t) : this._listeners.clear(), this
          }
        }, {
          key: "removeListener",
          value: function (t, n) {
            var e = this._listeners.get(t);
            return e && e.delete(n), this
          }
        }, {
          key: "sendEvent",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._backend && this._backend.send({
              type: "event",
              data: t
            })
          }
        }, {
          key: "sendRequest",
          value: function (t) {
            var n = this;
            if (!this._backend) return Promise.reject(new Error("No transport backend defined!"));
            this._requestID++;
            var e = this._requestID;
            return new Promise(function (r, i) {
              n._responseHandlers.set(e, function (t) {
                var n = t.error,
                  e = t.result;
                void 0 !== e ? r(e) : i(void 0 !== n ? n : new Error("Unexpected response format!"))
              }), n._backend.send({
                type: "request",
                data: t,
                id: e
              })
            })
          }
        }, {
          key: "setBackend",
          value: function (t) {
            this._disposeBackend(), this._backend = t, this._backend.setReceiveCallback(this._onMessageReceived.bind(this))
          }
        }]), t
      }();
    e.d(n, "a", function () {
      return h
    }), e.d(n, "b", function () {
      return p
    });
    var d = {};
    "number" == typeof r && (d.scope = "jitsi_meet_external_api_" + r), (window.JitsiMeetJS || (window.JitsiMeetJS = {}), window.JitsiMeetJS.app || (window.JitsiMeetJS.app = {}), window.JitsiMeetJS.app).setExternalTransportBackend = function (t) {
      return (void 0).setBackend(t)
    }
  }, function (t, n) {
    t.exports = function (t) {
      var n, e = t.scope,
        r = t.window,
        i = t.windowForEventListening || window,
        o = {},
        u = [],
        a = {},
        s = !1,
        c = "__ready__",
        f = function (t) {
          var n;
          try {
            n = JSON.parse(t.data)
          } catch (t) {
            return
          }
          if (n.postis && n.scope === e) {
            var r = o[n.method];
            if (r)
              for (var i = 0; i < r.length; i++) r[i].call(null, n.params);
            else a[n.method] = a[n.method] || [], a[n.method].push(n.params)
          }
        };
      i.addEventListener("message", f, !1);
      var l = {
          listen: function (t, n) {
            o[t] = o[t] || [], o[t].push(n);
            var e = a[t];
            if (e)
              for (var r = o[t], i = 0; i < r.length; i++)
                for (var u = 0; u < e.length; u++) r[i].call(null, e[u]);
            delete a[t]
          },
          send: function (t) {
            var n = t.method;
            (s || t.method === c) && r && "function" == typeof r.postMessage ? r.postMessage(JSON.stringify({
              postis: !0,
              scope: e,
              method: n,
              params: t.params
            }), "*") : u.push(t)
          },
          ready: function (t) {
            s ? t() : setTimeout(function () {
              l.ready(t)
            }, 50)
          },
          destroy: function (t) {
            clearInterval(n), s = !1, i && "function" == typeof i.removeEventListener && i.removeEventListener("message", f), t && t()
          }
        },
        h = +new Date + Math.random() + "";
      return n = setInterval(function () {
        l.send({
          method: c,
          params: h
        })
      }, 50), l.listen(c, function (t) {
        if (t === h) {
          clearInterval(n), s = !0;
          for (var e = 0; e < u.length; e++) l.send(u[e]);
          u = []
        } else l.send({
          method: c,
          params: t
        })
      }), l
    }
  }, function (t, n, e) {
    var r = e(126),
      i = e(336),
      o = {},
      u = [],
      a = r.levels.TRACE;
    t.exports = {
      addGlobalTransport: function (t) {
        r.addGlobalTransport(t)
      },
      removeGlobalTransport: function (t) {
        r.removeGlobalTransport(t)
      },
      getLogger: function (t, n, e) {
        var i = new r(a, t, n, e);
        return t ? (o[t] = o[t] || [], o[t].push(i)) : u.push(i), i
      },
      setLogLevelById: function (t, n) {
        for (var e = n ? o[n] || [] : u, r = 0; r < e.length; r++) e[r].setLevel(t)
      },
      setLogLevel: function (t) {
        a = t;
        for (var n = 0; n < u.length; n++) u[n].setLevel(t);
        for (var e in o) {
          var r = o[e] || [];
          for (n = 0; n < r.length; n++) r[n].setLevel(t)
        }
      },
      levels: r.levels,
      LogCollector: i
    }
  }, function (t, n, e) {
    function r(t, n) {
      this.logStorage = t, this.stringifyObjects = !(!n || !n.stringifyObjects) && n.stringifyObjects, this.storeInterval = n && n.storeInterval ? n.storeInterval : 3e4, this.maxEntryLength = n && n.maxEntryLength ? n.maxEntryLength : 1e4, Object.keys(i.levels).forEach(function (t) {
        this[i.levels[t]] = function (t) {
          this._log.apply(this, arguments)
        }.bind(this, t)
      }.bind(this)), this.storeLogsIntervalID = null, this.queue = [], this.totalLen = 0, this.outputCache = []
    }
    var i = e(126);
    r.prototype.stringify = function (t) {
      try {
        return JSON.stringify(t)
      } catch (t) {
        return "[object with circular refs?]"
      }
    }, r.prototype.formatLogMessage = function (t) {
      for (var n = "", e = 1, r = arguments.length; e < r; e++) {
        var o = arguments[e];
        !this.stringifyObjects && t !== i.levels.ERROR || "object" != typeof o || (o = this.stringify(o)), n += o, e != r - 1 && (n += " ")
      }
      return n.length ? n : null
    }, r.prototype._log = function () {
      var t = this.formatLogMessage.apply(this, arguments);
      if (t) {
        var n = this.queue.length ? this.queue[this.queue.length - 1] : void 0;
        ("object" == typeof n ? n.text : n) == t ? "object" == typeof n ? n.count += 1 : this.queue[this.queue.length - 1] = {
          text: t,
          count: 2
        } : (this.queue.push(t), this.totalLen += t.length)
      }
      this.totalLen >= this.maxEntryLength && this._flush(!0, !0)
    }, r.prototype.start = function () {
      this._reschedulePublishInterval()
    }, r.prototype._reschedulePublishInterval = function () {
      this.storeLogsIntervalID && (window.clearTimeout(this.storeLogsIntervalID), this.storeLogsIntervalID = null), this.storeLogsIntervalID = window.setTimeout(this._flush.bind(this, !1, !0), this.storeInterval)
    }, r.prototype.flush = function () {
      this._flush(!1, !0)
    }, r.prototype._flush = function (t, n) {
      this.totalLen > 0 && (this.logStorage.isReady() || t) && (this.logStorage.isReady() ? (this.outputCache.length && (this.outputCache.forEach(function (t) {
        this.logStorage.storeLogs(t)
      }.bind(this)), this.outputCache = []), this.logStorage.storeLogs(this.queue)) : this.outputCache.push(this.queue), this.queue = [], this.totalLen = 0), n && this._reschedulePublishInterval()
    }, r.prototype.stop = function () {
      this._flush(!1, !1)
    }, t.exports = r
  }])
});
//# sourceMappingURL=external_api.min.map
