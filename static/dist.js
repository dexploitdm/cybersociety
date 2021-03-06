function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
    return t + t + i + i + n + n
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null
}

function clamp(e, t, i) {
  return Math.min(Math.max(e, t), i)
}

function isInArray(e, t) {
  return -1 < t.indexOf(e)
}
window.Modernizr = function(n, d, s) {
  var e, r, o, a = {},
    f = d.documentElement,
    p = "modernizr",
    t = d.createElement(p),
    l = t.style,
    c = d.createElement("input"),
    u = ":)",
    i = {}.toString,
    h = " -webkit- -moz- -o- -ms- ".split(" "),
    m = "Webkit Moz O ms",
    g = m.split(" "),
    v = m.toLowerCase().split(" "),
    y = "http://www.w3.org/2000/svg",
    b = {},
    w = {},
    _ = {},
    k = [],
    x = k.slice,
    C = function(e, t, i, n) {
      var r, o, s, a, l = d.createElement("div"),
        c = d.body,
        u = c || d.createElement("body");
      if (parseInt(i, 10))
        for (; i--;)(s = d.createElement("div")).id = n ? n[i] : p + (i + 1), l.appendChild(s);
      return r = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""), l.id = p, (c ? l : u).innerHTML += r, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = f.style.overflow, f.style.overflow = "hidden", f.appendChild(u)), o = t(l, e), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), f.style.overflow = a), !!o
    },
    S = (o = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    }, function(e, t) {
      t = t || d.createElement(o[e] || "div");
      var i = (e = "on" + e) in t;
      return i || (t.setAttribute || (t = d.createElement("div")), t.setAttribute && t.removeAttribute && (t.setAttribute(e, ""), i = O(t[e], "function"), O(t[e], "undefined") || (t[e] = s), t.removeAttribute(e))), t = null, i
    }),
    T = {}.hasOwnProperty;

  function $(e) {
    l.cssText = e
  }

  function O(e, t) {
    return typeof e === t
  }

  function z(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function j(e, t) {
    for (var i in e) {
      var n = e[i];
      if (!z(n, "-") && l[n] !== s) return "pfx" != t || n
    }
    return !1
  }

  function M(e, t, i) {
    var n = e.charAt(0).toUpperCase() + e.slice(1),
      r = (e + " " + g.join(n + " ") + n).split(" ");
    return O(t, "string") || O(t, "undefined") ? j(r, t) : function(e, t, i) {
      for (var n in e) {
        var r = t[e[n]];
        if (r !== s) return !1 === i ? e[n] : O(r, "function") ? r.bind(i || t) : r
      }
      return !1
    }(r = (e + " " + v.join(n + " ") + n).split(" "), t, i)
  }
  for (var L in r = O(T, "undefined") || O(T.call, "undefined") ? function(e, t) {
    return t in e && O(e.constructor.prototype[t], "undefined")
  } : function(e, t) {
    return T.call(e, t)
  }, Function.prototype.bind || (Function.prototype.bind = function(n) {
    var r = this;
    if ("function" != typeof r) throw new TypeError;
    var o = x.call(arguments, 1),
      s = function() {
        if (this instanceof s) {
          var e = function() {};
          e.prototype = r.prototype;
          var t = new e,
            i = r.apply(t, o.concat(x.call(arguments)));
          return Object(i) === i ? i : t
        }
        return r.apply(n, o.concat(x.call(arguments)))
      };
    return s
  }), b.flexbox = function() {
    return M("flexWrap")
  }, b.flexboxlegacy = function() {
    return M("boxDirection")
  }, b.canvas = function() {
    var e = d.createElement("canvas");
    return !(!e.getContext || !e.getContext("2d"))
  }, b.canvastext = function() {
    return !(!a.canvas || !O(d.createElement("canvas").getContext("2d").fillText, "function"))
  }, b.webgl = function() {
    return !!n.WebGLRenderingContext
  }, b.touch = function() {
    var t;
    return "ontouchstart" in n || n.DocumentTouch && d instanceof DocumentTouch ? t = !0 : C(["@media (", h.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
      t = 9 === e.offsetTop
    }), t
  }, b.geolocation = function() {
    return "geolocation" in navigator
  }, b.postmessage = function() {
    return !!n.postMessage
  }, b.websqldatabase = function() {
    return !!n.openDatabase
  }, b.indexedDB = function() {
    return !!M("indexedDB", n)
  }, b.hashchange = function() {
    return S("hashchange", n) && (d.documentMode === s || 7 < d.documentMode)
  }, b.history = function() {
    return !(!n.history || !history.pushState)
  }, b.draganddrop = function() {
    var e = d.createElement("div");
    return "draggable" in e || "ondragstart" in e && "ondrop" in e
  }, b.websockets = function() {
    return "WebSocket" in n || "MozWebSocket" in n
  }, b.rgba = function() {
    return $("background-color:rgba(150,255,150,.5)"), z(l.backgroundColor, "rgba")
  }, b.hsla = function() {
    return $("background-color:hsla(120,40%,100%,.5)"), z(l.backgroundColor, "rgba") || z(l.backgroundColor, "hsla")
  }, b.multiplebgs = function() {
    return $("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(l.background)
  }, b.backgroundsize = function() {
    return M("backgroundSize")
  }, b.borderimage = function() {
    return M("borderImage")
  }, b.borderradius = function() {
    return M("borderRadius")
  }, b.boxshadow = function() {
    return M("boxShadow")
  }, b.textshadow = function() {
    return "" === d.createElement("div").style.textShadow
  }, b.opacity = function() {
    var e, t;
    return e = "opacity:.55", $(h.join(e + ";") + (t || "")), /^0.55$/.test(l.opacity)
  }, b.cssanimations = function() {
    return M("animationName")
  }, b.csscolumns = function() {
    return M("columnCount")
  }, b.cssgradients = function() {
    var e = "background-image:";
    return $((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + h.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), z(l.backgroundImage, "gradient")
  }, b.cssreflections = function() {
    return M("boxReflect")
  }, b.csstransforms = function() {
    return !!M("transform")
  }, b.csstransforms3d = function() {
    var i = !!M("perspective");
    return i && "webkitPerspective" in f.style && C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, t) {
      i = 9 === e.offsetLeft && 3 === e.offsetHeight
    }), i
  }, b.csstransitions = function() {
    return M("transition")
  }, b.fontface = function() {
    var o;
    return C('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
      var i = d.getElementById("smodernizr"),
        n = i.sheet || i.styleSheet,
        r = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
      o = /src/i.test(r) && 0 === r.indexOf(t.split(" ")[0])
    }), o
  }, b.generatedcontent = function() {
    var t;
    return C(["#", p, "{font:0/0 a}#", p, ':after{content:"', u, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
      t = 3 <= e.offsetHeight
    }), t
  }, b.video = function() {
    var e = d.createElement("video"),
      t = !1;
    try {
      (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
    } catch (e) {}
    return t
  }, b.audio = function() {
    var e = d.createElement("audio"),
      t = !1;
    try {
      (t = !!e.canPlayType) && ((t = new Boolean(t)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
    } catch (e) {}
    return t
  }, b.localstorage = function() {
    try {
      return localStorage.setItem(p, p), localStorage.removeItem(p), !0
    } catch (e) {
      return !1
    }
  }, b.sessionstorage = function() {
    try {
      return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
    } catch (e) {
      return !1
    }
  }, b.webworkers = function() {
    return !!n.Worker
  }, b.applicationcache = function() {
    return !!n.applicationCache
  }, b.svg = function() {
    return !!d.createElementNS && !!d.createElementNS(y, "svg").createSVGRect
  }, b.inlinesvg = function() {
    var e = d.createElement("div");
    return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == y
  }, b.smil = function() {
    return !!d.createElementNS && /SVGAnimate/.test(i.call(d.createElementNS(y, "animate")))
  }, b.svgclippaths = function() {
    return !!d.createElementNS && /SVGClipPath/.test(i.call(d.createElementNS(y, "clipPath")))
  }, b) r(b, L) && (e = L.toLowerCase(), a[e] = b[L](), k.push((a[e] ? "" : "no-") + e));
  return a.input || (a.input = function(e) {
    for (var t = 0, i = e.length; t < i; t++) _[e[t]] = !!(e[t] in c);
    return _.list && (_.list = !(!d.createElement("datalist") || !n.HTMLDataListElement)), _
  }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), a.inputtypes = function(e) {
    for (var t, i, n, r = 0, o = e.length; r < o; r++) c.setAttribute("type", i = e[r]), (t = "text" !== c.type) && (c.value = u, c.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && c.style.WebkitAppearance !== s ? (f.appendChild(c), t = (n = d.defaultView).getComputedStyle && "textfield" !== n.getComputedStyle(c, null).WebkitAppearance && 0 !== c.offsetHeight, f.removeChild(c)) : /^(search|tel)$/.test(i) || (t = /^(url|email)$/.test(i) ? c.checkValidity && !1 === c.checkValidity() : c.value != u)), w[e[r]] = !!t;
    return w
  }("search tel url email datetime date month week time datetime-local number range color".split(" "))), a.addTest = function(e, t) {
    if ("object" == typeof e)
      for (var i in e) r(e, i) && a.addTest(i, e[i]);
    else {
      if (e = e.toLowerCase(), a[e] !== s) return a;
      t = "function" == typeof t ? t() : t, f.className += " " + (t ? "" : "no-") + e, a[e] = t
    }
    return a
  }, $(""), t = c = null,
    function(e, l) {
      var c, u, t = e.html5 || {},
        r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        i = "_html5shiv",
        n = 0,
        s = {};

      function d() {
        var e = h.elements;
        return "string" == typeof e ? e.split(" ") : e
      }

      function f(e) {
        var t = s[e[i]];
        return t || (t = {}, n++, e[i] = n, s[n] = t), t
      }

      function p(e, t, i) {
        return t || (t = l), u ? t.createElement(e) : (i || (i = f(t)), !(n = i.cache[e] ? i.cache[e].cloneNode() : o.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || r.test(e) || n.tagUrn ? n : i.frag.appendChild(n));
        var n
      }

      function a(e) {
        e || (e = l);
        var t, i, n, r, o, s, a = f(e);
        return !h.shivCSS || c || a.hasCSS || (a.hasCSS = (i = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", n = (t = e).createElement("p"), r = t.getElementsByTagName("head")[0] || t.documentElement, n.innerHTML = "x<style>" + i + "</style>", !!r.insertBefore(n.lastChild, r.firstChild))), u || (o = e, (s = a).cache || (s.cache = {}, s.createElem = o.createElement, s.createFrag = o.createDocumentFragment, s.frag = s.createFrag()), o.createElement = function(e) {
          return h.shivMethods ? p(e, o, s) : s.createElem(e)
        }, o.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(e) {
          return s.createElem(e), s.frag.createElement(e), 'c("' + e + '")'
        }) + ");return n}")(h, s.frag)), e
      }! function() {
        try {
          var e = l.createElement("a");
          e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
            l.createElement("a");
            var e = l.createDocumentFragment();
            return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
          }()
        } catch (e) {
          u = c = !0
        }
      }();
      var h = {
        elements: t.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== t.shivCSS,
        supportsUnknownElements: u,
        shivMethods: !1 !== t.shivMethods,
        type: "default",
        shivDocument: a,
        createElement: p,
        createDocumentFragment: function(e, t) {
          if (e || (e = l), u) return e.createDocumentFragment();
          for (var i = (t = t || f(e)).frag.cloneNode(), n = 0, r = d(), o = r.length; n < o; n++) i.createElement(r[n]);
          return i
        }
      };
      e.html5 = h, a(l)
    }(this, d), a._version = "2.8.3", a._prefixes = h, a._domPrefixes = v, a._cssomPrefixes = g, a.mq = function(e) {
    var t, i = n.matchMedia || n.msMatchMedia;
    return i ? i(e) && i(e).matches || !1 : (C("@media " + e + " { #" + p + " { position: absolute; } }", function(e) {
      t = "absolute" == (n.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
    }), t)
  }, a.hasEvent = S, a.testProp = function(e) {
    return j([e])
  }, a.testAllProps = M, a.testStyles = C, a.prefixed = function(e, t, i) {
    return t ? M(e, t, i) : M(e, "pfx")
  }, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + k.join(" "), a
}(this, this.document),
  function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jquery"));
    else if ("function" == typeof define && define.amd) define(["jquery"], t);
    else {
      var i = "object" == typeof exports ? t(require("jquery")) : t(e.jQuery);
      for (var n in i)("object" == typeof exports ? exports : e)[n] = i[n]
    }
  }(window, function(i) {
    return function(i) {
      var n = {};

      function r(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return i[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
      }
      return r.m = i, r.c = n, r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: i
        })
      }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
          for (var n in t) r.d(i, n, function(e) {
            return t[e]
          }.bind(null, n));
        return i
      }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e.default
        } : function() {
          return e
        };
        return r.d(t, "a", t), t
      }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, r.p = "", r(r.s = 0)
    }({
      "./js/entries/foundation.js": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("jquery"),
          r = i.n(n),
          o = i("./js/foundation.core.js");
        i.d(t, "Foundation", function() {
          return o.Foundation
        });
        var s = i("./js/foundation.core.utils.js");
        i.d(t, "CoreUtils", function() {
          return s
        });
        var a = i("./js/foundation.util.box.js");
        i.d(t, "Box", function() {
          return a.Box
        });
        var l = i("./js/foundation.util.imageLoader.js");
        i.d(t, "onImagesLoaded", function() {
          return l.onImagesLoaded
        });
        var c = i("./js/foundation.util.keyboard.js");
        i.d(t, "Keyboard", function() {
          return c.Keyboard
        });
        var u = i("./js/foundation.util.mediaQuery.js");
        i.d(t, "MediaQuery", function() {
          return u.MediaQuery
        });
        var d = i("./js/foundation.util.motion.js");
        i.d(t, "Motion", function() {
          return d.Motion
        });
        var f = i("./js/foundation.util.nest.js");
        i.d(t, "Nest", function() {
          return f.Nest
        });
        var p = i("./js/foundation.util.timer.js");
        i.d(t, "Timer", function() {
          return p.Timer
        });
        var h = i("./js/foundation.util.touch.js");
        i.d(t, "Touch", function() {
          return h.Touch
        });
        var m = i("./js/foundation.util.triggers.js");
        i.d(t, "Triggers", function() {
          return m.Triggers
        });
        var g = i("./js/foundation.abide.js");
        i.d(t, "Abide", function() {
          return g.Abide
        });
        var v = i("./js/foundation.accordion.js");
        i.d(t, "Accordion", function() {
          return v.Accordion
        });
        var y = i("./js/foundation.accordionMenu.js");
        i.d(t, "AccordionMenu", function() {
          return y.AccordionMenu
        });
        var b = i("./js/foundation.drilldown.js");
        i.d(t, "Drilldown", function() {
          return b.Drilldown
        });
        var w = i("./js/foundation.dropdown.js");
        i.d(t, "Dropdown", function() {
          return w.Dropdown
        });
        var _ = i("./js/foundation.dropdownMenu.js");
        i.d(t, "DropdownMenu", function() {
          return _.DropdownMenu
        });
        var k = i("./js/foundation.equalizer.js");
        i.d(t, "Equalizer", function() {
          return k.Equalizer
        });
        var x = i("./js/foundation.interchange.js");
        i.d(t, "Interchange", function() {
          return x.Interchange
        });
        var C = i("./js/foundation.magellan.js");
        i.d(t, "Magellan", function() {
          return C.Magellan
        });
        var S = i("./js/foundation.offcanvas.js");
        i.d(t, "OffCanvas", function() {
          return S.OffCanvas
        });
        var T = i("./js/foundation.orbit.js");
        i.d(t, "Orbit", function() {
          return T.Orbit
        });
        var $ = i("./js/foundation.responsiveMenu.js");
        i.d(t, "ResponsiveMenu", function() {
          return $.ResponsiveMenu
        });
        var O = i("./js/foundation.responsiveToggle.js");
        i.d(t, "ResponsiveToggle", function() {
          return O.ResponsiveToggle
        });
        var z = i("./js/foundation.reveal.js");
        i.d(t, "Reveal", function() {
          return z.Reveal
        });
        var j = i("./js/foundation.slider.js");
        i.d(t, "Slider", function() {
          return j.Slider
        });
        var M = i("./js/foundation.smoothScroll.js");
        i.d(t, "SmoothScroll", function() {
          return M.SmoothScroll
        });
        var L = i("./js/foundation.sticky.js");
        i.d(t, "Sticky", function() {
          return L.Sticky
        });
        var A = i("./js/foundation.tabs.js");
        i.d(t, "Tabs", function() {
          return A.Tabs
        });
        var E = i("./js/foundation.toggler.js");
        i.d(t, "Toggler", function() {
          return E.Toggler
        });
        var P = i("./js/foundation.tooltip.js");
        i.d(t, "Tooltip", function() {
          return P.Tooltip
        });
        var q = i("./js/foundation.responsiveAccordionTabs.js");
        i.d(t, "ResponsiveAccordionTabs", function() {
          return q.ResponsiveAccordionTabs
        }), o.Foundation.addToJquery(r.a), o.Foundation.rtl = s.rtl, o.Foundation.GetYoDigits = s.GetYoDigits, o.Foundation.transitionend = s.transitionend, o.Foundation.RegExpEscape = s.RegExpEscape, o.Foundation.onLoad = s.onLoad, o.Foundation.Box = a.Box, o.Foundation.onImagesLoaded = l.onImagesLoaded, o.Foundation.Keyboard = c.Keyboard, o.Foundation.MediaQuery = u.MediaQuery, o.Foundation.Motion = d.Motion, o.Foundation.Move = d.Move, o.Foundation.Nest = f.Nest, o.Foundation.Timer = p.Timer, h.Touch.init(r.a), m.Triggers.init(r.a, o.Foundation), u.MediaQuery._init(), o.Foundation.plugin(g.Abide, "Abide"), o.Foundation.plugin(v.Accordion, "Accordion"), o.Foundation.plugin(y.AccordionMenu, "AccordionMenu"), o.Foundation.plugin(b.Drilldown, "Drilldown"), o.Foundation.plugin(w.Dropdown, "Dropdown"), o.Foundation.plugin(_.DropdownMenu, "DropdownMenu"), o.Foundation.plugin(k.Equalizer, "Equalizer"), o.Foundation.plugin(x.Interchange, "Interchange"), o.Foundation.plugin(C.Magellan, "Magellan"), o.Foundation.plugin(S.OffCanvas, "OffCanvas"), o.Foundation.plugin(T.Orbit, "Orbit"), o.Foundation.plugin($.ResponsiveMenu, "ResponsiveMenu"), o.Foundation.plugin(O.ResponsiveToggle, "ResponsiveToggle"), o.Foundation.plugin(z.Reveal, "Reveal"), o.Foundation.plugin(j.Slider, "Slider"), o.Foundation.plugin(M.SmoothScroll, "SmoothScroll"), o.Foundation.plugin(L.Sticky, "Sticky"), o.Foundation.plugin(A.Tabs, "Tabs"), o.Foundation.plugin(E.Toggler, "Toggler"), o.Foundation.plugin(P.Tooltip, "Tooltip"), o.Foundation.plugin(q.ResponsiveAccordionTabs, "ResponsiveAccordionTabs"), t.default = o.Foundation
      },
      "./js/foundation.abide.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Abide", function() {
          return f
        });
        var n = i("jquery"),
          u = i.n(n),
          o = i("./js/foundation.core.plugin.js"),
          s = i("./js/foundation.core.utils.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function a(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function l(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function d(e, t) {
          return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var f = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), l(this, c(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && d(e, t)
          }(i, o["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e) {
              var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
              this.$element = e, this.options = u.a.extend(!0, {}, i.defaults, this.$element.data(), t), this.className = "Abide", this._init()
            }
          }, {
            key: "_init",
            value: function() {
              var i = this;
              this.$inputs = u.a.merge(this.$element.find("input").not("[type=submit]"), this.$element.find("textarea, select"));
              var e = this.$element.find("[data-abide-error]");
              this.options.a11yAttributes && (this.$inputs.each(function(e, t) {
                return i.addA11yAttributes(u()(t))
              }), e.each(function(e, t) {
                return i.addGlobalErrorA11yAttributes(u()(t))
              })), this._events()
            }
          }, {
            key: "_events",
            value: function() {
              var t = this;
              this.$element.off(".abide").on("reset.zf.abide", function() {
                t.resetForm()
              }).on("submit.zf.abide", function() {
                return t.validateForm()
              }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                t.validateInput(u()(e.target))
              }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                t.validateInput(u()(e.target))
              }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
                t.validateInput(u()(e.target))
              })
            }
          }, {
            key: "_reflow",
            value: function() {
              this._init()
            }
          }, {
            key: "requiredCheck",
            value: function(e) {
              if (!e.attr("required")) return !0;
              var t = !0;
              switch (e[0].type) {
                case "checkbox":
                  t = e[0].checked;
                  break;
                case "select":
                case "select-one":
                case "select-multiple":
                  var i = e.find("option:selected");
                  i.length && i.val() || (t = !1);
                  break;
                default:
                  e.val() && e.val().length || (t = !1)
              }
              return t
            }
          }, {
            key: "findFormError",
            value: function(e) {
              var t = e[0].id,
                i = e.siblings(this.options.formErrorSelector);
              return i.length || (i = e.parent().find(this.options.formErrorSelector)), t && (i = i.add(this.$element.find('[data-form-error-for="'.concat(t, '"]')))), i
            }
          }, {
            key: "findLabel",
            value: function(e) {
              var t = e[0].id,
                i = this.$element.find('label[for="'.concat(t, '"]'));
              return i.length ? i : e.closest("label")
            }
          }, {
            key: "findRadioLabels",
            value: function(e) {
              var r = this,
                t = e.map(function(e, t) {
                  var i = t.id,
                    n = r.$element.find('label[for="'.concat(i, '"]'));
                  return n.length || (n = u()(t).closest("label")), n[0]
                });
              return u()(t)
            }
          }, {
            key: "addErrorClasses",
            value: function(e) {
              var t = this.findLabel(e),
                i = this.findFormError(e);
              t.length && t.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), e.addClass(this.options.inputErrorClass).attr({
                "data-invalid": "",
                "aria-invalid": !0
              })
            }
          }, {
            key: "addA11yAttributes",
            value: function(e) {
              var t = this.findFormError(e),
                i = t.filter("label"),
                n = t.first();
              if (t.length) {
                if (void 0 === e.attr("aria-describedby")) {
                  var r = n.attr("id");
                  void 0 === r && (r = Object(s.GetYoDigits)(6, "abide-error"), n.attr("id", r)), e.attr("aria-describedby", r)
                }
                if (i.filter("[for]").length < i.length) {
                  var o = e.attr("id");
                  void 0 === o && (o = Object(s.GetYoDigits)(6, "abide-input"), e.attr("id", o)), i.each(function(e, t) {
                    var i = u()(t);
                    void 0 === i.attr("for") && i.attr("for", o)
                  })
                }
                t.each(function(e, t) {
                  var i = u()(t);
                  void 0 === i.attr("role") && i.attr("role", "alert")
                }).end()
              }
            }
          }, {
            key: "addGlobalErrorA11yAttributes",
            value: function(e) {
              void 0 === e.attr("aria-live") && e.attr("aria-live", this.options.a11yErrorLevel)
            }
          }, {
            key: "removeRadioErrorClasses",
            value: function(e) {
              var t = this.$element.find(':radio[name="'.concat(e, '"]')),
                i = this.findRadioLabels(t),
                n = this.findFormError(t);
              i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).attr({
                "data-invalid": null,
                "aria-invalid": null
              })
            }
          }, {
            key: "removeErrorClasses",
            value: function(e) {
              if ("radio" == e[0].type) return this.removeRadioErrorClasses(e.attr("name"));
              var t = this.findLabel(e),
                i = this.findFormError(e);
              t.length && t.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).attr({
                "data-invalid": null,
                "aria-invalid": null
              })
            }
          }, {
            key: "validateInput",
            value: function(e) {
              var t = this.requiredCheck(e),
                i = !1,
                n = !0,
                r = e.attr("data-validator"),
                o = !0;
              if (e.is("[data-abide-ignore]") || e.is('[type="hidden"]') || e.is("[disabled]")) return !0;
              switch (e[0].type) {
                case "radio":
                  i = this.validateRadio(e.attr("name"));
                  break;
                case "checkbox":
                  i = t;
                  break;
                case "select":
                case "select-one":
                case "select-multiple":
                  i = t;
                  break;
                default:
                  i = this.validateText(e)
              }
              r && (n = this.matchValidation(e, r, e.attr("required"))), e.attr("data-equalto") && (o = this.options.validators.equalTo(e));
              var s = -1 === [t, i, n, o].indexOf(!1),
                a = (s ? "valid" : "invalid") + ".zf.abide";
              if (s) {
                var l = this.$element.find('[data-equalto="'.concat(e.attr("id"), '"]'));
                if (l.length) {
                  var c = this;
                  l.each(function() {
                    u()(this).val() && c.validateInput(u()(this))
                  })
                }
              }
              return this[s ? "removeErrorClasses" : "addErrorClasses"](e), e.trigger(a, [e]), s
            }
          }, {
            key: "validateForm",
            value: function() {
              var n = this,
                e = [],
                t = this;
              this.$inputs.each(function() {
                e.push(t.validateInput(u()(this)))
              });
              var r = -1 === e.indexOf(!1);
              return this.$element.find("[data-abide-error]").each(function(e, t) {
                var i = u()(t);
                n.options.a11yAttributes && n.addGlobalErrorA11yAttributes(i), i.css("display", r ? "none" : "block")
              }), this.$element.trigger((r ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), r
            }
          }, {
            key: "validateText",
            value: function(e, t) {
              t = t || e.attr("pattern") || e.attr("type");
              var i = e.val(),
                n = !1;
              return i.length ? n = this.options.patterns.hasOwnProperty(t) ? this.options.patterns[t].test(i) : t === e.attr("type") || new RegExp(t).test(i) : e.prop("required") || (n = !0), n
            }
          }, {
            key: "validateRadio",
            value: function(e) {
              var t = this.$element.find(':radio[name="'.concat(e, '"]')),
                i = !1,
                n = !1;
              return t.each(function(e, t) {
                u()(t).attr("required") && (n = !0)
              }), n || (i = !0), i || t.each(function(e, t) {
                u()(t).prop("checked") && (i = !0)
              }), i
            }
          }, {
            key: "matchValidation",
            value: function(t, e, i) {
              var n = this;
              return i = !!i, -1 === e.split(" ").map(function(e) {
                return n.options.validators[e](t, i, t.parent())
              }).indexOf(!1)
            }
          }, {
            key: "resetForm",
            value: function() {
              var e = this.$element,
                t = this.options;
              u()(".".concat(t.labelErrorClass), e).not("small").removeClass(t.labelErrorClass), u()(".".concat(t.inputErrorClass), e).not("small").removeClass(t.inputErrorClass), u()("".concat(t.formErrorSelector, ".").concat(t.formErrorClass)).removeClass(t.formErrorClass), e.find("[data-abide-error]").css("display", "none"), u()(":input", e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({
                "data-invalid": null,
                "aria-invalid": null
              }), u()(":input:radio", e).not("[data-abide-ignore]").prop("checked", !1).attr({
                "data-invalid": null,
                "aria-invalid": null
              }), u()(":input:checkbox", e).not("[data-abide-ignore]").prop("checked", !1).attr({
                "data-invalid": null,
                "aria-invalid": null
              }), e.trigger("formreset.zf.abide", [e])
            }
          }, {
            key: "_destroy",
            value: function() {
              var e = this;
              this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                e.removeErrorClasses(u()(this))
              })
            }
          }]) && a(t.prototype, n), r && a(t, r), i
        }();
        f.defaults = {
          validateOn: "fieldChange",
          labelErrorClass: "is-invalid-label",
          inputErrorClass: "is-invalid-input",
          formErrorSelector: ".form-error",
          formErrorClass: "is-visible",
          a11yAttributes: !0,
          a11yErrorLevel: "assertive",
          liveValidate: !1,
          validateOnBlur: !1,
          patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            website: {
              test: function(e) {
                return f.defaults.patterns.domain.test(e) || f.defaults.patterns.url.test(e)
              }
            }
          },
          validators: {
            equalTo: function(e, t, i) {
              return u()("#".concat(e.attr("data-equalto"))).val() === e.val()
            }
          }
        }
      },
      "./js/foundation.accordion.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Accordion", function() {
          return p
        });
        var n = i("jquery"),
          s = i.n(n),
          a = i("./js/foundation.core.utils.js"),
          o = i("./js/foundation.util.keyboard.js"),
          l = i("./js/foundation.core.plugin.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function c(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function u(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function f(e, t) {
          return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var p = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), u(this, d(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && f(e, t)
          }(i, l["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = s.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Accordion", this._init(), o.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
              })
            }
          }, {
            key: "_init",
            value: function() {
              var r = this;
              this._isInitializing = !0, this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(e, t) {
                var i = s()(t),
                  n = i.children("[data-tab-content]"),
                  r = n[0].id || Object(a.GetYoDigits)(6, "accordion"),
                  o = t.id ? "".concat(t.id, "-label") : "".concat(r, "-label");
                i.find("a:first").attr({
                  "aria-controls": r,
                  role: "tab",
                  id: o,
                  "aria-expanded": !1,
                  "aria-selected": !1
                }), n.attr({
                  role: "tabpanel",
                  "aria-labelledby": o,
                  "aria-hidden": !0,
                  id: r
                })
              });
              var e = this.$element.find(".is-active").children("[data-tab-content]");
              e.length && (this._initialAnchor = e.prev("a").attr("href"), this._openSingleTab(e)), this._checkDeepLink = function() {
                var e = window.location.hash;
                if (!e.length) {
                  if (r._isInitializing) return;
                  r._initialAnchor && (e = r._initialAnchor)
                }
                var t = e && s()(e),
                  i = e && r.$element.find('[href$="'.concat(e, '"]')),
                  n = !(!t.length || !i.length);
                t && i && i.length ? i.parent("[data-accordion-item]").hasClass("is-active") || r._openSingleTab(t) : r._closeAllTabs(), n && (r.options.deepLinkSmudge && Object(a.onLoad)(s()(window), function() {
                  var e = r.$element.offset();
                  s()("html, body").animate({
                    scrollTop: e.top
                  }, r.options.deepLinkSmudgeDelay)
                }), r.$element.trigger("deeplink.zf.accordion", [i, t]))
              }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
            }
          }, {
            key: "_events",
            value: function() {
              var n = this;
              this.$tabs.each(function() {
                var t = s()(this),
                  i = t.children("[data-tab-content]");
                i.length && t.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                  e.preventDefault(), n.toggle(i)
                }).on("keydown.zf.accordion", function(e) {
                  o.Keyboard.handleKey(e, "Accordion", {
                    toggle: function() {
                      n.toggle(i)
                    },
                    next: function() {
                      var e = t.next().find("a").focus();
                      n.options.multiExpand || e.trigger("click.zf.accordion")
                    },
                    previous: function() {
                      var e = t.prev().find("a").focus();
                      n.options.multiExpand || e.trigger("click.zf.accordion")
                    },
                    handled: function() {
                      e.preventDefault(), e.stopPropagation()
                    }
                  })
                })
              }), this.options.deepLink && s()(window).on("hashchange", this._checkDeepLink)
            }
          }, {
            key: "toggle",
            value: function(e) {
              if (e.closest("[data-accordion]").is("[disabled]")) console.info("Cannot toggle an accordion that is disabled.");
              else if (e.parent().hasClass("is-active") ? this.up(e) : this.down(e), this.options.deepLink) {
                var t = e.prev("a").attr("href");
                this.options.updateHistory ? history.pushState({}, "", t) : history.replaceState({}, "", t)
              }
            }
          }, {
            key: "down",
            value: function(e) {
              e.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot call down on an accordion that is disabled.") : this.options.multiExpand ? this._openTab(e) : this._openSingleTab(e)
            }
          }, {
            key: "up",
            value: function(e) {
              if (this.$element.is("[disabled]")) console.info("Cannot call up on an accordion that is disabled.");
              else {
                var t = e.parent();
                if (t.hasClass("is-active")) {
                  var i = t.siblings();
                  (this.options.allowAllClosed || i.hasClass("is-active")) && this._closeTab(e)
                }
              }
            }
          }, {
            key: "_openSingleTab",
            value: function(e) {
              var t = this.$element.children(".is-active").children("[data-tab-content]");
              t.length && this._closeTab(t.not(e)), this._openTab(e)
            }
          }, {
            key: "_openTab",
            value: function(e) {
              var t = this,
                i = e.parent(),
                n = e.attr("aria-labelledby");
              e.attr("aria-hidden", !1), i.addClass("is-active"), s()("#".concat(n)).attr({
                "aria-expanded": !0,
                "aria-selected": !0
              }), e.slideDown(this.options.slideSpeed, function() {
                t.$element.trigger("down.zf.accordion", [e])
              })
            }
          }, {
            key: "_closeTab",
            value: function(e) {
              var t = this,
                i = e.parent(),
                n = e.attr("aria-labelledby");
              e.attr("aria-hidden", !0), i.removeClass("is-active"), s()("#".concat(n)).attr({
                "aria-expanded": !1,
                "aria-selected": !1
              }), e.slideUp(this.options.slideSpeed, function() {
                t.$element.trigger("up.zf.accordion", [e])
              })
            }
          }, {
            key: "_closeAllTabs",
            value: function() {
              var e = this.$element.children(".is-active").children("[data-tab-content]");
              e.length && this._closeTab(e)
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), this.options.deepLink && s()(window).off("hashchange", this._checkDeepLink)
            }
          }]) && c(t.prototype, n), r && c(t, r), i
        }();
        p.defaults = {
          slideSpeed: 250,
          multiExpand: !1,
          allowAllClosed: !1,
          deepLink: !1,
          deepLinkSmudge: !1,
          deepLinkSmudgeDelay: 300,
          updateHistory: !1
        }
      },
      "./js/foundation.accordionMenu.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "AccordionMenu", function() {
          return h
        });
        var n = i("jquery"),
          a = i.n(n),
          l = i("./js/foundation.util.keyboard.js"),
          s = i("./js/foundation.util.nest.js"),
          c = i("./js/foundation.core.utils.js"),
          o = i("./js/foundation.core.plugin.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function u(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function d(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function p(e, t) {
          return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var h = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), d(this, f(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && p(e, t)
          }(i, o["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = a.a.extend({}, i.defaults, this.$element.data(), t), this.className = "AccordionMenu", this._init(), l.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
              })
            }
          }, {
            key: "_init",
            value: function() {
              s.Nest.Feather(this.$element, "accordion");
              var o = this;
              this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                role: "tree",
                "aria-multiselectable": this.options.multiOpen
              }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                var e = this.id || Object(c.GetYoDigits)(6, "acc-menu-link"),
                  t = a()(this),
                  i = t.children("[data-submenu]"),
                  n = i[0].id || Object(c.GetYoDigits)(6, "acc-menu"),
                  r = i.hasClass("is-active");
                o.options.parentLink && t.children("a").clone().prependTo(i).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
                o.options.submenuToggle ? (t.addClass("has-submenu-toggle"), t.children("a").after('<button id="' + e + '" class="submenu-toggle" aria-controls="' + n + '" aria-expanded="' + r + '" title="' + o.options.submenuToggleText + '"><span class="submenu-toggle-text">' + o.options.submenuToggleText + "</span></button>")) : t.attr({
                  "aria-controls": n,
                  "aria-expanded": r,
                  id: e
                }), i.attr({
                  "aria-labelledby": e,
                  "aria-hidden": !r,
                  role: "group",
                  id: n
                })
              }), this.$element.find("li").attr({
                role: "treeitem"
              });
              var e = this.$element.find(".is-active");
              if (e.length) {
                o = this;
                e.each(function() {
                  o.down(a()(this))
                })
              }
              this._events()
            }
          }, {
            key: "_events",
            value: function() {
              var s = this;
              this.$element.find("li").each(function() {
                var t = a()(this).children("[data-submenu]");
                t.length && (s.options.submenuToggle ? a()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                  s.toggle(t)
                }) : a()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                  e.preventDefault(), s.toggle(t)
                }))
              }).on("keydown.zf.accordionmenu", function(t) {
                var i, n, r = a()(this),
                  o = r.parent("ul").children("li"),
                  e = r.children("[data-submenu]");
                o.each(function(e) {
                  if (a()(this).is(r)) return i = o.eq(Math.max(0, e - 1)).find("a").first(), n = o.eq(Math.min(e + 1, o.length - 1)).find("a").first(), a()(this).children("[data-submenu]:visible").length && (n = r.find("li:first-child").find("a").first()), a()(this).is(":first-child") ? i = r.parents("li").first().find("a").first() : i.parents("li").first().children("[data-submenu]:visible").length && (i = i.parents("li").find("li:last-child").find("a").first()), void(a()(this).is(":last-child") && (n = r.parents("li").first().next("li").find("a").first()))
                }), l.Keyboard.handleKey(t, "AccordionMenu", {
                  open: function() {
                    e.is(":hidden") && (s.down(e), e.find("li").first().find("a").first().focus())
                  },
                  close: function() {
                    e.length && !e.is(":hidden") ? s.up(e) : r.parent("[data-submenu]").length && (s.up(r.parent("[data-submenu]")), r.parents("li").first().find("a").first().focus())
                  },
                  up: function() {
                    return i.focus(), !0
                  },
                  down: function() {
                    return n.focus(), !0
                  },
                  toggle: function() {
                    return !s.options.submenuToggle && (r.children("[data-submenu]").length ? (s.toggle(r.children("[data-submenu]")), !0) : void 0)
                  },
                  closeAll: function() {
                    s.hideAll()
                  },
                  handled: function(e) {
                    e && t.preventDefault(), t.stopImmediatePropagation()
                  }
                })
              })
            }
          }, {
            key: "hideAll",
            value: function() {
              this.up(this.$element.find("[data-submenu]"))
            }
          }, {
            key: "showAll",
            value: function() {
              this.down(this.$element.find("[data-submenu]"))
            }
          }, {
            key: "toggle",
            value: function(e) {
              e.is(":animated") || (e.is(":hidden") ? this.down(e) : this.up(e))
            }
          }, {
            key: "down",
            value: function(e) {
              var t = this;
              this.options.multiOpen || this.up(this.$element.find(".is-active").not(e.parentsUntil(this.$element).add(e))), e.addClass("is-active").attr({
                "aria-hidden": !1
              }), this.options.submenuToggle ? e.prev(".submenu-toggle").attr({
                "aria-expanded": !0
              }) : e.parent(".is-accordion-submenu-parent").attr({
                "aria-expanded": !0
              }), e.slideDown(t.options.slideSpeed, function() {
                t.$element.trigger("down.zf.accordionMenu", [e])
              })
            }
          }, {
            key: "up",
            value: function(e) {
              var t = this;
              e.slideUp(t.options.slideSpeed, function() {
                t.$element.trigger("up.zf.accordionMenu", [e])
              });
              var i = e.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
              this.options.submenuToggle ? i.prev(".submenu-toggle").attr("aria-expanded", !1) : i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), this.$element.find("[data-is-parent-link]").detach(), this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"), this.$element.find(".submenu-toggle").remove()), s.Nest.Burn(this.$element, "accordion")
            }
          }]) && u(t.prototype, n), r && u(t, r), i
        }();
        h.defaults = {
          parentLink: !1,
          slideSpeed: 250,
          submenuToggle: !1,
          submenuToggleText: "Toggle menu",
          multiOpen: !0
        }
      },
      "./js/foundation.core.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Foundation", function() {
          return l
        });
        var n = i("jquery"),
          o = i.n(n),
          r = i("./js/foundation.core.utils.js"),
          s = i("./js/foundation.util.mediaQuery.js");

        function a(e) {
          return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }
        var l = {
          version: "6.5.0-rc.4",
          _plugins: {},
          _uuids: [],
          plugin: function(e, t) {
            var i = t || c(e),
              n = u(i);
            this._plugins[n] = this[i] = e
          },
          registerPlugin: function(e, t) {
            var i = t ? u(t) : c(e.constructor).toLowerCase();
            e.uuid = Object(r.GetYoDigits)(6, i), e.$element.attr("data-".concat(i)) || e.$element.attr("data-".concat(i), e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf.".concat(i)), this._uuids.push(e.uuid)
          },
          unregisterPlugin: function(e) {
            var t = u(c(e.$element.data("zfPlugin").constructor));
            for (var i in this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t)), e) e[i] = null
          },
          reInit: function(e) {
            var t = e instanceof o.a;
            try {
              if (t) e.each(function() {
                o()(this).data("zfPlugin")._init()
              });
              else {
                var i = a(e),
                  n = this;
                ({
                  object: function(e) {
                    e.forEach(function(e) {
                      e = u(e), o()("[data-" + e + "]").foundation("_init")
                    })
                  },
                  string: function() {
                    e = u(e), o()("[data-" + e + "]").foundation("_init")
                  },
                  undefined: function() {
                    this.object(Object.keys(n._plugins))
                  }
                })[i](e)
              }
            } catch (e) {
              console.error(e)
            } finally {
              return e
            }
          },
          reflow: function(n, e) {
            void 0 === e ? e = Object.keys(this._plugins) : "string" == typeof e && (e = [e]);
            var r = this;
            o.a.each(e, function(e, t) {
              var i = r._plugins[t];
              o()(n).find("[data-" + t + "]").addBack("[data-" + t + "]").each(function() {
                var e = o()(this),
                  n = {};
                if (e.data("zfPlugin")) console.warn("Tried to initialize " + t + " on an element that already has a Foundation plugin.");
                else {
                  if (e.attr("data-options")) e.attr("data-options").split(";").forEach(function(e, t) {
                    var i = e.split(":").map(function(e) {
                      return e.trim()
                    });
                    i[0] && (n[i[0]] = function(e) {
                      {
                        if ("true" === e) return !0;
                        if ("false" === e) return !1;
                        if (!isNaN(1 * e)) return parseFloat(e)
                      }
                      return e
                    }(i[1]))
                  });
                  try {
                    e.data("zfPlugin", new i(o()(this), n))
                  } catch (e) {
                    console.error(e)
                  } finally {
                    return
                  }
                }
              })
            })
          },
          getFnName: c,
          addToJquery: function(o) {
            return o.fn.foundation = function(i) {
              var e = a(i),
                t = o(".no-js");
              if (t.length && t.removeClass("no-js"), "undefined" === e) s.MediaQuery._init(), l.reflow(this);
              else {
                if ("string" !== e) throw new TypeError("We're sorry, ".concat(e, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
                var n = Array.prototype.slice.call(arguments, 1),
                  r = this.data("zfPlugin");
                if (void 0 === r || void 0 === r[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (r ? c(r) : "this element") + ".");
                1 === this.length ? r[i].apply(r, n) : this.each(function(e, t) {
                  r[i].apply(o(t).data("zfPlugin"), n)
                })
              }
              return this
            }, o
          }
        };

        function c(e) {
          if (void 0 !== Function.prototype.name) return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name;
          var t = /function\s([^(]{1,})\(/.exec(e.toString());
          return t && 1 < t.length ? t[1].trim() : ""
        }

        function u(e) {
          return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        l.util = {
          throttle: function(i, n) {
            var r = null;
            return function() {
              var e = this,
                t = arguments;
              null === r && (r = setTimeout(function() {
                i.apply(e, t), r = null
              }, n))
            }
          }
        }, window.Foundation = l,
          function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
              return (new Date).getTime()
            });
            for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
              var i = e[t];
              window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
              var n = 0;
              window.requestAnimationFrame = function(e) {
                var t = Date.now(),
                  i = Math.max(n + 16, t);
                return setTimeout(function() {
                  e(n = i)
                }, i - t)
              }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
              start: Date.now(),
              now: function() {
                return Date.now() - this.start
              }
            })
          }(), Function.prototype.bind || (Function.prototype.bind = function(e) {
          if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          var t = Array.prototype.slice.call(arguments, 1),
            i = this,
            n = function() {},
            r = function() {
              return i.apply(this instanceof n ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
          return this.prototype && (n.prototype = this.prototype), r.prototype = new n, r
        })
      },
      "./js/foundation.core.plugin.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Plugin", function() {
          return n
        });
        i("jquery");
        var r = i("./js/foundation.core.utils.js");

        function o(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        var n = function() {
          function n(e, t) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), this._setup(e, t);
            var i = a(this);
            this.uuid = Object(r.GetYoDigits)(6, i), this.$element.attr("data-".concat(i)) || this.$element.attr("data-".concat(i), this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf.".concat(i))
          }
          var e, t, i;
          return e = n, (t = [{
            key: "destroy",
            value: function() {
              this._destroy();
              var e = a(this);
              for (var t in this.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e)), this) this[t] = null
            }
          }]) && o(e.prototype, t), i && o(e, i), n
        }();

        function s(e) {
          return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }

        function a(e) {
          return void 0 !== e.constructor.name ? s(e.constructor.name) : s(e.className)
        }
      },
      "./js/foundation.core.utils.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "rtl", function() {
          return r
        }), i.d(t, "GetYoDigits", function() {
          return o
        }), i.d(t, "RegExpEscape", function() {
          return s
        }), i.d(t, "transitionend", function() {
          return a
        }), i.d(t, "onLoad", function() {
          return c
        }), i.d(t, "onLeaveElement", function() {
          return u
        });
        var n = i("jquery"),
          l = i.n(n);

        function r() {
          return "rtl" === l()("html").attr("dir")
        }

        function o(e, t) {
          return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-".concat(t) : "")
        }

        function s(e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }

        function a(e) {
          var t, i = {
              transition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "otransitionend"
            },
            n = document.createElement("div");
          for (var r in i) void 0 !== n.style[r] && (t = i[r]);
          return t || (t = setTimeout(function() {
            e.triggerHandler("transitionend", [e])
          }, 1), "transitionend")
        }

        function c(e, t) {
          var i = "complete" === document.readyState,
            n = (i ? "_didLoad" : "load") + ".zf.util.onLoad",
            r = function() {
              return e.triggerHandler(n)
            };
          return e && (t && e.one(n, t), i ? setTimeout(r) : l()(window).one("load", r)), n
        }

        function u(o, s) {
          var e = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).leaveWindow,
            a = void 0 === e || e,
            t = "mouseleave.zf.util.onLeaveElement";
          return o && s && o.on(t, function(t) {
            for (var e = arguments.length, i = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
            var r = this;
            setTimeout(function() {
              if (null === t.relatedTarget && a && document.hasFocus && document.hasFocus()) return l()(document).one("mouseenter", function(e) {
                if (o.has(e.target).length) return !1;
                t.relatedTarget = e.target, s.call.apply(s, [r, t].concat(i))
              }), !1;
              s.call.apply(s, [r, t].concat(i))
            })
          }), t
        }
      },
      "./js/foundation.drilldown.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Drilldown", function() {
          return m
        });
        var n = i("jquery"),
          s = i.n(n),
          a = i("./js/foundation.util.keyboard.js"),
          o = i("./js/foundation.util.nest.js"),
          l = i("./js/foundation.core.utils.js"),
          c = i("./js/foundation.util.box.js"),
          u = i("./js/foundation.core.plugin.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function d(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function f(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function p(e) {
          return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var m = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), f(this, p(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(i, u["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = s.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Drilldown", this._init(), a.Keyboard.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
              })
            }
          }, {
            key: "_init",
            value: function() {
              o.Nest.Feather(this.$element, "drilldown"), this.options.autoApplyClass && this.$element.addClass("drilldown"), this.$element.attr({
                role: "tree",
                "aria-multiselectable": !1
              }), this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a"), this.$currentMenu = this.$element, this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || Object(l.GetYoDigits)(6, "drilldown")), this._prepareMenu(), this._registerEvents(), this._keyboardEvents()
            }
          }, {
            key: "_prepareMenu",
            value: function() {
              var i = this;
              this.$submenuAnchors.each(function() {
                var e = s()(this),
                  t = e.parent();
                i.options.parentLink && e.clone().prependTo(t.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'), e.data("savedHref", e.attr("href")).removeAttr("href").attr("tabindex", 0), e.children("[data-submenu]").attr({
                  "aria-hidden": !0,
                  tabindex: 0,
                  role: "group"
                }), i._events(e)
              }), this.$submenus.each(function() {
                var e = s()(this);
                if (!e.find(".js-drilldown-back").length) switch (i.options.backButtonPosition) {
                  case "bottom":
                    e.append(i.options.backButton);
                    break;
                  case "top":
                    e.prepend(i.options.backButton);
                    break;
                  default:
                    console.error("Unsupported backButtonPosition value '" + i.options.backButtonPosition + "'")
                }
                i._back(e)
              }), this.$submenus.addClass("invisible"), this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = s()(this.options.wrapper).addClass("is-drilldown"), this.options.animateHeight && this.$wrapper.addClass("animate-height"), this.$element.wrap(this.$wrapper)), this.$wrapper = this.$element.parent(), this.$wrapper.css(this._getMaxDims())
            }
          }, {
            key: "_resize",
            value: function() {
              this.$wrapper.css({
                "max-width": "none",
                "min-height": "none"
              }), this.$wrapper.css(this._getMaxDims())
            }
          }, {
            key: "_events",
            value: function(i) {
              var n = this;
              i.off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                if (s()(e.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (e.stopImmediatePropagation(), e.preventDefault()), n._show(i.parent("li")), n.options.closeOnClick) {
                  var t = s()("body");
                  t.off(".zf.drilldown").on("click.zf.drilldown", function(e) {
                    e.target === n.$element[0] || s.a.contains(n.$element[0], e.target) || (e.preventDefault(), n._hideAll(), t.off(".zf.drilldown"))
                  })
                }
              })
            }
          }, {
            key: "_registerEvents",
            value: function() {
              this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this), this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler)), this.$element.on("mutateme.zf.trigger", this._resize.bind(this))
            }
          }, {
            key: "_scrollTop",
            value: function() {
              var e = this,
                t = "" != e.options.scrollTopElement ? s()(e.options.scrollTopElement) : e.$element,
                i = parseInt(t.offset().top + e.options.scrollTopOffset, 10);
              s()("html, body").stop(!0).animate({
                scrollTop: i
              }, e.options.animationDuration, e.options.animationEasing, function() {
                this === s()("html")[0] && e.$element.trigger("scrollme.zf.drilldown")
              })
            }
          }, {
            key: "_keyboardEvents",
            value: function() {
              var e = this;
              this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(t) {
                var i, n, r = s()(this),
                  o = r.parent("li").parent("ul").children("li").children("a");
                o.each(function(e) {
                  if (s()(this).is(r)) return i = o.eq(Math.max(0, e - 1)), void(n = o.eq(Math.min(e + 1, o.length - 1)))
                }), a.Keyboard.handleKey(t, "Drilldown", {
                  next: function() {
                    if (r.is(e.$submenuAnchors)) return e._show(r.parent("li")), r.parent("li").one(Object(l.transitionend)(r), function() {
                      r.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                    }), !0
                  },
                  previous: function() {
                    return e._hide(r.parent("li").parent("ul")), r.parent("li").parent("ul").one(Object(l.transitionend)(r), function() {
                      setTimeout(function() {
                        r.parent("li").parent("ul").parent("li").children("a").first().focus()
                      }, 1)
                    }), !0
                  },
                  up: function() {
                    return i.focus(), !r.is(e.$element.find("> li:first-child > a"))
                  },
                  down: function() {
                    return n.focus(), !r.is(e.$element.find("> li:last-child > a"))
                  },
                  close: function() {
                    r.is(e.$element.find("> li > a")) || (e._hide(r.parent().parent()), r.parent().parent().siblings("a").focus())
                  },
                  open: function() {
                    return (!e.options.parentLink || !r.attr("href")) && (r.is(e.$menuItems) ? r.is(e.$submenuAnchors) ? (e._show(r.parent("li")), r.parent("li").one(Object(l.transitionend)(r), function() {
                      r.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                    }), !0) : void 0 : (e._hide(r.parent("li").parent("ul")), r.parent("li").parent("ul").one(Object(l.transitionend)(r), function() {
                      setTimeout(function() {
                        r.parent("li").parent("ul").parent("li").children("a").first().focus()
                      }, 1)
                    }), !0))
                  },
                  handled: function(e) {
                    e && t.preventDefault(), t.stopImmediatePropagation()
                  }
                })
              })
            }
          }, {
            key: "_hideAll",
            value: function() {
              var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
              this.options.autoHeight && this.$wrapper.css({
                height: t.parent().closest("ul").data("calcHeight")
              }), t.one(Object(l.transitionend)(t), function(e) {
                t.removeClass("is-active is-closing")
              }), this.$element.trigger("closed.zf.drilldown")
            }
          }, {
            key: "_back",
            value: function(i) {
              var n = this;
              i.off("click.zf.drilldown"), i.children(".js-drilldown-back").on("click.zf.drilldown", function(e) {
                e.stopImmediatePropagation(), n._hide(i);
                var t = i.parent("li").parent("ul").parent("li");
                t.length && n._show(t)
              })
            }
          }, {
            key: "_menuLinkEvents",
            value: function() {
              var t = this;
              this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                setTimeout(function() {
                  t._hideAll()
                }, 0)
              })
            }
          }, {
            key: "_setShowSubMenuClasses",
            value: function(e, t) {
              e.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), e.parent("li").attr("aria-expanded", !0), !0 === t && this.$element.trigger("open.zf.drilldown", [e])
            }
          }, {
            key: "_setHideSubMenuClasses",
            value: function(e, t) {
              e.removeClass("is-active").addClass("invisible").attr("aria-hidden", !0), e.parent("li").attr("aria-expanded", !1), !0 === t && e.trigger("hide.zf.drilldown", [e])
            }
          }, {
            key: "_showMenu",
            value: function(i, n) {
              var r = this;
              if (this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(e) {
                r._setHideSubMenuClasses(s()(this))
              }), (this.$currentMenu = i).is("[data-drilldown]")) return !0 === n && i.find('li[role="treeitem"] > a').first().focus(), void(this.options.autoHeight && this.$wrapper.css("height", i.data("calcHeight")));
              var o = i.children().first().parentsUntil("[data-drilldown]", "[data-submenu]");
              o.each(function(e) {
                0 === e && r.options.autoHeight && r.$wrapper.css("height", s()(this).data("calcHeight"));
                var t = e == o.length - 1;
                !0 === t && s()(this).one(Object(l.transitionend)(s()(this)), function() {
                  !0 === n && i.find('li[role="treeitem"] > a').first().focus()
                }), r._setShowSubMenuClasses(s()(this), t)
              })
            }
          }, {
            key: "_show",
            value: function(e) {
              var t = e.children("[data-submenu]");
              e.attr("aria-expanded", !0), (this.$currentMenu = t).addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), this.options.autoHeight && this.$wrapper.css({
                height: t.data("calcHeight")
              }), this.$element.trigger("open.zf.drilldown", [e])
            }
          }, {
            key: "_hide",
            value: function(e) {
              this.options.autoHeight && this.$wrapper.css({
                height: e.parent().closest("ul").data("calcHeight")
              });
              e.parent("li").attr("aria-expanded", !1), e.attr("aria-hidden", !0), e.addClass("is-closing").one(Object(l.transitionend)(e), function() {
                e.removeClass("is-active is-closing"), e.blur().addClass("invisible")
              }), e.trigger("hide.zf.drilldown", [e])
            }
          }, {
            key: "_getMaxDims",
            value: function() {
              var t = 0,
                e = {},
                i = this;
              return this.$submenus.add(this.$element).each(function() {
                s()(this).children("li").length;
                var e = c.Box.GetDimensions(this).height;
                t = t < e ? e : t, i.options.autoHeight && s()(this).data("calcHeight", e)
              }), this.options.autoHeight ? e.height = this.$currentMenu.data("calcHeight") : e["min-height"] = "".concat(t, "px"), e["max-width"] = "".concat(this.$element[0].getBoundingClientRect().width, "px"), e
            }
          }, {
            key: "_destroy",
            value: function() {
              this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler), this._hideAll(), this.$element.off("mutateme.zf.trigger"), o.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                s()(this).off(".zf.drilldown")
              }), this.$element.find("[data-is-parent-link]").detach(), this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"), this.$element.find("a").each(function() {
                var e = s()(this);
                e.removeAttr("tabindex"), e.data("savedHref") && e.attr("href", e.data("savedHref")).removeData("savedHref")
              })
            }
          }]) && d(t.prototype, n), r && d(t, r), i
        }();
        m.defaults = {
          autoApplyClass: !0,
          backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
          backButtonPosition: "top",
          wrapper: "<div></div>",
          parentLink: !1,
          closeOnClick: !1,
          autoHeight: !1,
          animateHeight: !1,
          scrollTop: !1,
          scrollTopElement: "",
          scrollTopOffset: 0,
          animationDuration: 500,
          animationEasing: "swing"
        }
      },
      "./js/foundation.dropdown.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Dropdown", function() {
          return m
        });
        var n = i("jquery"),
          o = i.n(n),
          s = i("./js/foundation.util.keyboard.js"),
          a = i("./js/foundation.core.utils.js"),
          l = i("./js/foundation.positionable.js"),
          c = i("./js/foundation.util.triggers.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function u(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function d(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e, t, i) {
          return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var n = function(e, t) {
              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
              return e
            }(e, t);
            if (n) {
              var r = Object.getOwnPropertyDescriptor(n, t);
              return r.get ? r.get.call(i) : r.value
            }
          })(e, t, i || e)
        }

        function p(e) {
          return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var m = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), d(this, p(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(i, l["Positionable"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = o.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Dropdown", c.Triggers.init(o.a), this._init(), s.Keyboard.register("Dropdown", {
                ENTER: "toggle",
                SPACE: "toggle",
                ESCAPE: "close"
              })
            }
          }, {
            key: "_init",
            value: function() {
              var e = this.$element.attr("id");
              this.$anchors = o()('[data-toggle="'.concat(e, '"]')).length ? o()('[data-toggle="'.concat(e, '"]')) : o()('[data-open="'.concat(e, '"]')), this.$anchors.attr({
                "aria-controls": e,
                "data-is-focus": !1,
                "data-yeti-box": e,
                "aria-haspopup": !0,
                "aria-expanded": !1
              }), this._setCurrentAnchor(this.$anchors.first()), this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null;
              var t = this.$element.attr("aria-labelledby") || this.$currentAnchor.attr("id") || Object(a.GetYoDigits)(6, "dd-anchor");
              this.$element.attr({
                "aria-hidden": "true",
                "data-yeti-box": e,
                "data-resize": e,
                "aria-labelledby": t
              }), f(p(i.prototype), "_init", this).call(this), this._events()
            }
          }, {
            key: "_getDefaultPosition",
            value: function() {
              var e = this.$element[0].className.match(/(top|left|right|bottom)/g);
              return e ? e[0] : "bottom"
            }
          }, {
            key: "_getDefaultAlignment",
            value: function() {
              var e = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
              return e ? e[1] : f(p(i.prototype), "_getDefaultAlignment", this).call(this)
            }
          }, {
            key: "_setPosition",
            value: function() {
              this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment)), f(p(i.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent), this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment))
            }
          }, {
            key: "_setCurrentAnchor",
            value: function(e) {
              this.$currentAnchor = o()(e)
            }
          }, {
            key: "_events",
            value: function() {
              var i = this;
              this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": this.close.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this),
                "resizeme.zf.trigger": this._setPosition.bind(this)
              }), this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function() {
                i._setCurrentAnchor(this)
              }), this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                i._setCurrentAnchor(this);
                var e = o()("body").data();
                void 0 !== e.whatinput && "mouse" !== e.whatinput || (clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                  i.open(), i.$anchors.data("hover", !0)
                }, i.options.hoverDelay))
              }).on("mouseleave.zf.dropdown", function() {
                clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                  i.close(), i.$anchors.data("hover", !1)
                }, i.options.hoverDelay)
              }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                clearTimeout(i.timeout)
              }).on("mouseleave.zf.dropdown", function() {
                clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                  i.close(), i.$anchors.data("hover", !1)
                }, i.options.hoverDelay)
              })), this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(e) {
                var t = o()(this);
                s.Keyboard.findFocusable(i.$element);
                s.Keyboard.handleKey(e, "Dropdown", {
                  open: function() {
                    t.is(i.$anchors) && !t.is("input, textarea") && (i.open(), i.$element.attr("tabindex", -1).focus(), e.preventDefault())
                  },
                  close: function() {
                    i.close(), i.$anchors.focus()
                  }
                })
              })
            }
          }, {
            key: "_addBodyHandler",
            value: function() {
              var t = o()(document.body).not(this.$element),
                i = this;
              t.off("click.zf.dropdown").on("click.zf.dropdown", function(e) {
                i.$anchors.is(e.target) || i.$anchors.find(e.target).length || i.$element.is(e.target) || i.$element.find(e.target).length || (i.close(), t.off("click.zf.dropdown"))
              })
            }
          }, {
            key: "open",
            value: function() {
              if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchors.addClass("hover").attr({
                "aria-expanded": !0
              }), this.$element.addClass("is-opening"), this._setPosition(), this.$element.removeClass("is-opening").addClass("is-open").attr({
                "aria-hidden": !1
              }), this.options.autoFocus) {
                var e = s.Keyboard.findFocusable(this.$element);
                e.length && e.eq(0).focus()
              }
              this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && s.Keyboard.trapFocus(this.$element), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
          }, {
            key: "close",
            value: function() {
              if (!this.$element.hasClass("is-open")) return !1;
              this.$element.removeClass("is-open").attr({
                "aria-hidden": !0
              }), this.$anchors.removeClass("hover").attr("aria-expanded", !1), this.$element.trigger("hide.zf.dropdown", [this.$element]), this.options.trapFocus && s.Keyboard.releaseFocus(this.$element)
            }
          }, {
            key: "toggle",
            value: function() {
              if (this.$element.hasClass("is-open")) {
                if (this.$anchors.data("hover")) return;
                this.close()
              } else this.open()
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.off(".zf.trigger").hide(), this.$anchors.off(".zf.dropdown"), o()(document.body).off("click.zf.dropdown")
            }
          }]) && u(t.prototype, n), r && u(t, r), i
        }();
        m.defaults = {
          parentClass: null,
          hoverDelay: 250,
          hover: !1,
          hoverPane: !1,
          vOffset: 0,
          hOffset: 0,
          position: "auto",
          alignment: "auto",
          allowOverlap: !1,
          allowBottomOverlap: !0,
          trapFocus: !1,
          autoFocus: !1,
          closeOnClick: !1
        }
      },
      "./js/foundation.dropdownMenu.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "DropdownMenu", function() {
          return m
        });
        var n = i("jquery"),
          f = i.n(n),
          o = i("./js/foundation.core.plugin.js"),
          a = i("./js/foundation.core.utils.js"),
          p = i("./js/foundation.util.keyboard.js"),
          s = i("./js/foundation.util.nest.js"),
          l = i("./js/foundation.util.box.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function c(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function u(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var m = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), u(this, d(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(i, o["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = f.a.extend({}, i.defaults, this.$element.data(), t), this.className = "DropdownMenu", this._init(), p.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
              })
            }
          }, {
            key: "_init",
            value: function() {
              s.Nest.Feather(this.$element, "dropdown");
              var e = this.$element.find("li.is-dropdown-submenu-parent");
              this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || Object(a.rtl)() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", e.addClass("opens-left")) : (this.options.alignment = "left", e.addClass("opens-right")) : "right" === this.options.alignment ? e.addClass("opens-left") : e.addClass("opens-right"), this.changed = !1, this._events()
            }
          }, {
            key: "_isVertical",
            value: function() {
              return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction")
            }
          }, {
            key: "_isRtl",
            value: function() {
              return this.$element.hasClass("align-right") || Object(a.rtl)() && !this.$element.hasClass("align-left")
            }
          }, {
            key: "_events",
            value: function() {
              var d = this,
                o = "ontouchstart" in window || void 0 !== window.ontouchstart,
                s = "is-dropdown-submenu-parent";
              (this.options.clickOpen || o) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(e) {
                var t = f()(e.target).parentsUntil("ul", ".".concat(s)),
                  i = t.hasClass(s),
                  n = "true" === t.attr("data-is-click"),
                  r = t.children(".is-dropdown-submenu");
                if (i)
                  if (n) {
                    if (!d.options.closeOnClick || !d.options.clickOpen && !o || d.options.forceFollow && o) return;
                    e.stopImmediatePropagation(), e.preventDefault(), d._hide(t)
                  } else e.preventDefault(), e.stopImmediatePropagation(), d._show(r), t.add(t.parentsUntil(d.$element, ".".concat(s))).attr("data-is-click", !0)
              }), d.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(e) {
                f()(this).hasClass(s) || d._hide()
              }), this.options.disableHover || (this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                var t = f()(this);
                t.hasClass(s) && (clearTimeout(t.data("_delay")), t.data("_delay", setTimeout(function() {
                  d._show(t.children(".is-dropdown-submenu"))
                }, d.options.hoverDelay)))
              }), Object(a.onLeaveElement)(this.$menuItems, function(e) {
                var t = f()(this);
                if (t.hasClass(s) && d.options.autoclose) {
                  if ("true" === t.attr("data-is-click") && d.options.clickOpen) return !1;
                  clearTimeout(t.data("_delay")), t.data("_delay", setTimeout(function() {
                    d._hide(t)
                  }, d.options.closingTime))
                }
              })), this.$menuItems.on("keydown.zf.dropdownmenu", function(t) {
                var i, n, r = f()(t.target).parentsUntil("ul", '[role="menuitem"]'),
                  e = -1 < d.$tabs.index(r),
                  o = e ? d.$tabs : r.siblings("li").add(r);
                o.each(function(e) {
                  if (f()(this).is(r)) return i = o.eq(e - 1), void(n = o.eq(e + 1))
                });
                var s = function() {
                    n.children("a:first").focus(), t.preventDefault()
                  },
                  a = function() {
                    i.children("a:first").focus(), t.preventDefault()
                  },
                  l = function() {
                    var e = r.children("ul.is-dropdown-submenu");
                    e.length && (d._show(e), r.find("li > a:first").focus(), t.preventDefault())
                  },
                  c = function() {
                    var e = r.parent("ul").parent("li");
                    e.children("a:first").focus(), d._hide(e), t.preventDefault()
                  },
                  u = {
                    open: l,
                    close: function() {
                      d._hide(d.$element), d.$menuItems.eq(0).children("a").focus(), t.preventDefault()
                    },
                    handled: function() {
                      t.stopImmediatePropagation()
                    }
                  };
                e ? d._isVertical() ? d._isRtl() ? f.a.extend(u, {
                  down: s,
                  up: a,
                  next: c,
                  previous: l
                }) : f.a.extend(u, {
                  down: s,
                  up: a,
                  next: l,
                  previous: c
                }) : d._isRtl() ? f.a.extend(u, {
                  next: a,
                  previous: s,
                  down: l,
                  up: c
                }) : f.a.extend(u, {
                  next: s,
                  previous: a,
                  down: l,
                  up: c
                }) : d._isRtl() ? f.a.extend(u, {
                  next: c,
                  previous: l,
                  down: s,
                  up: a
                }) : f.a.extend(u, {
                  next: l,
                  previous: c,
                  down: s,
                  up: a
                }), p.Keyboard.handleKey(t, "DropdownMenu", u)
              })
            }
          }, {
            key: "_addBodyHandler",
            value: function() {
              var t = f()(document.body),
                i = this;
              t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
                i.$element.find(e.target).length || (i._hide(), t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
              })
            }
          }, {
            key: "_show",
            value: function(i) {
              var e = this.$tabs.index(this.$tabs.filter(function(e, t) {
                  return 0 < f()(t).find(i).length
                })),
                t = i.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
              this._hide(t, e), i.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
              var n = l.Box.ImNotTouchingYou(i, null, !0);
              if (!n) {
                var r = "left" === this.options.alignment ? "-right" : "-left",
                  o = i.parent(".is-dropdown-submenu-parent");
                o.removeClass("opens".concat(r)).addClass("opens-".concat(this.options.alignment)), (n = l.Box.ImNotTouchingYou(i, null, !0)) || o.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"), this.changed = !0
              }
              i.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [i])
            }
          }, {
            key: "_hide",
            value: function(e, i) {
              var t;
              if ((t = e && e.length ? e : void 0 !== i ? this.$tabs.not(function(e, t) {
                return e === i
              }) : this.$element).hasClass("is-active") || 0 < t.find(".is-active").length) {
                if (t.find("li.is-active").add(t).attr({
                  "data-is-click": !1
                }).removeClass("is-active"), t.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), this.changed || t.find("opens-inner").length) {
                  var n = "left" === this.options.alignment ? "right" : "left";
                  t.find("li.is-dropdown-submenu-parent").add(t).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(n)), this.changed = !1
                }
                this.$element.trigger("hide.zf.dropdownmenu", [t])
              }
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), f()(document.body).off(".zf.dropdownmenu"), s.Nest.Burn(this.$element, "dropdown")
            }
          }]) && c(t.prototype, n), r && c(t, r), i
        }();
        m.defaults = {
          disableHover: !1,
          autoclose: !0,
          hoverDelay: 50,
          clickOpen: !1,
          closingTime: 500,
          alignment: "auto",
          closeOnClick: !0,
          closeOnClickInside: !0,
          verticalClass: "vertical",
          rightClass: "align-right",
          forceFollow: !0
        }
      },
      "./js/foundation.equalizer.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Equalizer", function() {
          return h
        });
        var n = i("jquery"),
          d = i.n(n),
          o = i("./js/foundation.util.mediaQuery.js"),
          s = i("./js/foundation.util.imageLoader.js"),
          a = i("./js/foundation.core.utils.js"),
          l = i("./js/foundation.core.plugin.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function c(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function u(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function p(e, t) {
          return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var h = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), u(this, f(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && p(e, t)
          }(i, l["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = d.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Equalizer", this._init()
            }
          }, {
            key: "_init",
            value: function() {
              var e = this.$element.attr("data-equalizer") || "",
                t = this.$element.find('[data-equalizer-watch="'.concat(e, '"]'));
              o.MediaQuery._init(), this.$watched = t.length ? t : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", e || Object(a.GetYoDigits)(6, "eq")), this.$element.attr("data-mutate", e || Object(a.GetYoDigits)(6, "eq")), this.hasNested = 0 < this.$element.find("[data-equalizer]").length, this.isNested = 0 < this.$element.parentsUntil(document.body, "[data-equalizer]").length, this.isOn = !1, this._bindHandler = {
                onResizeMeBound: this._onResizeMe.bind(this),
                onPostEqualizedBound: this._onPostEqualized.bind(this)
              };
              var i, n = this.$element.find("img");
              this.options.equalizeOn ? (i = this._checkMQ(), d()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== i && !1 === i || void 0 === i) && (n.length ? Object(s.onImagesLoaded)(n, this._reflow.bind(this)) : this._reflow())
            }
          }, {
            key: "_pauseEvents",
            value: function() {
              this.isOn = !1, this.$element.off({
                ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
              })
            }
          }, {
            key: "_onResizeMe",
            value: function(e) {
              this._reflow()
            }
          }, {
            key: "_onPostEqualized",
            value: function(e) {
              e.target !== this.$element[0] && this._reflow()
            }
          }, {
            key: "_events",
            value: function() {
              this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0
            }
          }, {
            key: "_checkMQ",
            value: function() {
              var e = !o.MediaQuery.is(this.options.equalizeOn);
              return e ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), e
            }
          }, {
            key: "_killswitch",
            value: function() {}
          }, {
            key: "_reflow",
            value: function() {
              if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
              this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))
            }
          }, {
            key: "_isStacked",
            value: function() {
              return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
          }, {
            key: "getHeights",
            value: function(e) {
              for (var t = [], i = 0, n = this.$watched.length; i < n; i++) this.$watched[i].style.height = "auto", t.push(this.$watched[i].offsetHeight);
              e(t)
            }
          }, {
            key: "getHeightsByRow",
            value: function(e) {
              var t = this.$watched.length ? this.$watched.first().offset().top : 0,
                i = [],
                n = 0;
              i[n] = [];
              for (var r = 0, o = this.$watched.length; r < o; r++) {
                this.$watched[r].style.height = "auto";
                var s = d()(this.$watched[r]).offset().top;
                s != t && (i[++n] = [], t = s), i[n].push([this.$watched[r], this.$watched[r].offsetHeight])
              }
              for (var a = 0, l = i.length; a < l; a++) {
                var c = d()(i[a]).map(function() {
                    return this[1]
                  }).get(),
                  u = Math.max.apply(null, c);
                i[a].push(u)
              }
              e(i)
            }
          }, {
            key: "applyHeight",
            value: function(e) {
              var t = Math.max.apply(null, e);
              this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", t), this.$element.trigger("postequalized.zf.equalizer")
            }
          }, {
            key: "applyHeightByRow",
            value: function(e) {
              this.$element.trigger("preequalized.zf.equalizer");
              for (var t = 0, i = e.length; t < i; t++) {
                var n = e[t].length,
                  r = e[t][n - 1];
                if (n <= 2) d()(e[t][0][0]).css({
                  height: "auto"
                });
                else {
                  this.$element.trigger("preequalizedrow.zf.equalizer");
                  for (var o = 0, s = n - 1; o < s; o++) d()(e[t][o][0]).css({
                    height: r
                  });
                  this.$element.trigger("postequalizedrow.zf.equalizer")
                }
              }
              this.$element.trigger("postequalized.zf.equalizer")
            }
          }, {
            key: "_destroy",
            value: function() {
              this._pauseEvents(), this.$watched.css("height", "auto")
            }
          }]) && c(t.prototype, n), r && c(t, r), i
        }();
        h.defaults = {
          equalizeOnStack: !1,
          equalizeByRow: !1,
          equalizeOn: ""
        }
      },
      "./js/foundation.interchange.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Interchange", function() {
          return p
        });
        var n = i("jquery"),
          r = i.n(n),
          o = i("./js/foundation.util.mediaQuery.js"),
          s = i("./js/foundation.core.plugin.js"),
          l = i("./js/foundation.core.utils.js");

        function a(e) {
          return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function c(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function u(e, t) {
          return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function f(e, t) {
          return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var p = function(e) {
          function a() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, a), u(this, d(a).apply(this, arguments))
          }
          var t, i, n;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && f(e, t)
          }(a, s["Plugin"]), t = a, (i = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = r.a.extend({}, a.defaults, t), this.rules = [], this.currentPath = "", this.className = "Interchange", this._init(), this._events()
            }
          }, {
            key: "_init",
            value: function() {
              o.MediaQuery._init();
              var e = this.$element[0].id || Object(l.GetYoDigits)(6, "interchange");
              this.$element.attr({
                "data-resize": e,
                id: e
              }), this._addBreakpoints(), this._generateRules(), this._reflow()
            }
          }, {
            key: "_events",
            value: function() {
              var e = this;
              this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                return e._reflow()
              })
            }
          }, {
            key: "_reflow",
            value: function() {
              var e;
              for (var t in this.rules)
                if (this.rules.hasOwnProperty(t)) {
                  var i = this.rules[t];
                  window.matchMedia(i.query).matches && (e = i)
                }
              e && this.replace(e.path)
            }
          }, {
            key: "_addBreakpoints",
            value: function() {
              for (var e in o.MediaQuery.queries)
                if (o.MediaQuery.queries.hasOwnProperty(e)) {
                  var t = o.MediaQuery.queries[e];
                  a.SPECIAL_QUERIES[t.name] = t.value
                }
            }
          }, {
            key: "_generateRules",
            value: function(e) {
              var t, i = [];
              for (var n in t = "string" == typeof(t = this.options.rules ? this.options.rules : this.$element.data("interchange")) ? t.match(/\[.*?, .*?\]/g) : t)
                if (t.hasOwnProperty(n)) {
                  var r = t[n].slice(1, -1).split(", "),
                    o = r.slice(0, -1).join(""),
                    s = r[r.length - 1];
                  a.SPECIAL_QUERIES[s] && (s = a.SPECIAL_QUERIES[s]), i.push({
                    path: o,
                    query: s
                  })
                }
              this.rules = i
            }
          }, {
            key: "replace",
            value: function(t) {
              if (this.currentPath !== t) {
                var i = this,
                  n = "replaced.zf.interchange";
                "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function() {
                  i.currentPath = t
                }).trigger(n) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? (t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"), this.$element.css({
                  "background-image": "url(" + t + ")"
                }).trigger(n)) : r.a.get(t, function(e) {
                  i.$element.html(e).trigger(n), r()(e).foundation(), i.currentPath = t
                })
              }
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.off("resizeme.zf.trigger")
            }
          }]) && c(t.prototype, i), n && c(t, n), a
        }();
        p.defaults = {
          rules: null
        }, p.SPECIAL_QUERIES = {
          landscape: "screen and (orientation: landscape)",
          portrait: "screen and (orientation: portrait)",
          retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
        }
      },
      "./js/foundation.magellan.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Magellan", function() {
          return p
        });
        var n = i("jquery"),
          u = i.n(n),
          o = i("./js/foundation.core.utils.js"),
          s = i("./js/foundation.core.plugin.js"),
          a = i("./js/foundation.smoothScroll.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function l(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function c(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function f(e, t) {
          return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var p = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), c(this, d(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && f(e, t)
          }(i, s["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = u.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Magellan", this._init(), this.calcPoints()
            }
          }, {
            key: "_init",
            value: function() {
              var e = this.$element[0].id || Object(o.GetYoDigits)(6, "magellan");
              this.$targets = u()("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                "data-resize": e,
                "data-scroll": e,
                id: e
              }), this.$active = u()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
          }, {
            key: "calcPoints",
            value: function() {
              var i = this,
                e = document.body,
                t = document.documentElement;
              this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, t.clientHeight)), this.docHeight = Math.round(Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)), this.$targets.each(function() {
                var e = u()(this),
                  t = Math.round(e.offset().top - i.options.threshold);
                e.targetPoint = t, i.points.push(t)
              })
            }
          }, {
            key: "_events",
            value: function() {
              var i = this;
              u()("html, body"), i.options.animationDuration, i.options.animationEasing;
              u()(window).one("load", function() {
                i.options.deepLinking && location.hash && i.scrollToLoc(location.hash), i.calcPoints(), i._updateActive()
              }), i.onLoadListener = Object(o.onLoad)(u()(window), function() {
                i.$element.on({
                  "resizeme.zf.trigger": i.reflow.bind(i),
                  "scrollme.zf.trigger": i._updateActive.bind(i)
                }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
                  e.preventDefault();
                  var t = this.getAttribute("href");
                  i.scrollToLoc(t)
                })
              }), this._deepLinkScroll = function(e) {
                i.options.deepLinking && i.scrollToLoc(window.location.hash)
              }, u()(window).on("hashchange", this._deepLinkScroll)
            }
          }, {
            key: "scrollToLoc",
            value: function(e) {
              this._inTransition = !0;
              var t = this,
                i = {
                  animationEasing: this.options.animationEasing,
                  animationDuration: this.options.animationDuration,
                  threshold: this.options.threshold,
                  offset: this.options.offset
                };
              a.SmoothScroll.scrollToLoc(e, i, function() {
                t._inTransition = !1
              })
            }
          }, {
            key: "reflow",
            value: function() {
              this.calcPoints(), this._updateActive()
            }
          }, {
            key: "_updateActive",
            value: function() {
              var i = this;
              if (!this._inTransition) {
                var e, n = parseInt(window.pageYOffset, 10),
                  r = this.scrollPos > n;
                if ((this.scrollPos = n) < this.points[0]);
                else if (n + this.winHeight === this.docHeight) e = this.points.length - 1;
                else {
                  var t = this.points.filter(function(e, t) {
                    return e - i.options.offset - (r ? i.options.threshold : 0) <= n
                  });
                  e = t.length ? t.length - 1 : 0
                }
                var o = this.$active,
                  s = "";
                void 0 !== e ? (this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]'), this.$active.length && (s = this.$active[0].getAttribute("href"))) : this.$active = u()();
                var a = !(!this.$active.length && !o.length || this.$active.is(o)),
                  l = s !== window.location.hash;
                if (a && (o.removeClass(this.options.activeClass), this.$active.addClass(this.options.activeClass)), this.options.deepLinking && l)
                  if (window.history.pushState) {
                    var c = s || window.location.pathname + window.location.search;
                    window.history.pushState(null, null, c)
                  } else window.location.hash = s;
                a && this.$element.trigger("update.zf.magellan", [this.$active])
              }
            }
          }, {
            key: "_destroy",
            value: function() {
              if (this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass), this.options.deepLinking) {
                var e = this.$active[0].getAttribute("href");
                window.location.hash.replace(e, "")
              }
              u()(window).off("hashchange", this._deepLinkScroll), this.onLoadListener && u()(window).off(this.onLoadListener)
            }
          }]) && l(t.prototype, n), r && l(t, r), i
        }();
        p.defaults = {
          animationDuration: 500,
          animationEasing: "linear",
          threshold: 50,
          activeClass: "is-active",
          deepLinking: !1,
          offset: 0
        }
      },
      "./js/foundation.offcanvas.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "OffCanvas", function() {
          return m
        });
        var n = i("jquery"),
          o = i.n(n),
          s = i("./js/foundation.core.utils.js"),
          a = i("./js/foundation.util.keyboard.js"),
          l = i("./js/foundation.util.mediaQuery.js"),
          c = i("./js/foundation.core.plugin.js"),
          u = i("./js/foundation.util.triggers.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function d(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function f(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function p(e) {
          return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var m = function(e) {
          function n() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, n), f(this, p(n).apply(this, arguments))
          }
          var t, i, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(n, c["Plugin"]), t = n, (i = [{
            key: "_setup",
            value: function(e, t) {
              var i = this;
              this.className = "OffCanvas", this.$element = e, this.options = o.a.extend({}, n.defaults, this.$element.data(), t), this.contentClasses = {
                base: [],
                reveal: []
              }, this.$lastTrigger = o()(), this.$triggers = o()(), this.position = "left", this.$content = o()(), this.nested = !!this.options.nested, o()(["push", "overlap"]).each(function(e, t) {
                i.contentClasses.base.push("has-transition-" + t)
              }), o()(["left", "right", "top", "bottom"]).each(function(e, t) {
                i.contentClasses.base.push("has-position-" + t), i.contentClasses.reveal.push("has-reveal-" + t)
              }), u.Triggers.init(o.a), l.MediaQuery._init(), this._init(), this._events(), a.Keyboard.register("OffCanvas", {
                ESCAPE: "close"
              })
            }
          }, {
            key: "_init",
            value: function() {
              var e = this.$element.attr("id");
              if (this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = o()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")), this.$triggers = o()(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay) {
                var t = document.createElement("div"),
                  i = "fixed" === o()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                t.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = o()(t), "is-overlay-fixed" === i ? o()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay)
              }
              var n = new RegExp(Object(s.RegExpEscape)(this.options.revealClass) + "([^\\s]+)", "g").exec(this.$element[0].className);
              n && (this.options.isRevealed = !0, this.options.revealOn = this.options.revealOn || n[1]), !0 === this.options.isRevealed && this.options.revealOn && (this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)), this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this._removeContentClasses()
            }
          }, {
            key: "_events",
            value: function() {
              (this.$element.off(".zf.trigger .zf.offcanvas").on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": this.close.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this),
                "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
              }), !0 === this.options.closeOnClick) && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                "click.zf.offcanvas": this.close.bind(this)
              })
            }
          }, {
            key: "_setMQChecker",
            value: function() {
              var e = this;
              this.onLoadListener = Object(s.onLoad)(o()(window), function() {
                l.MediaQuery.atLeast(e.options.revealOn) && e.reveal(!0)
              }), o()(window).on("changed.zf.mediaquery", function() {
                l.MediaQuery.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1)
              })
            }
          }, {
            key: "_removeContentClasses",
            value: function(e) {
              "boolean" != typeof e ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === e && this.$content.removeClass("has-reveal-".concat(this.position))
            }
          }, {
            key: "_addContentClasses",
            value: function(e) {
              this._removeContentClasses(e), "boolean" != typeof e ? this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position)) : !0 === e && this.$content.addClass("has-reveal-".concat(this.position))
            }
          }, {
            key: "reveal",
            value: function(e) {
              e ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                "open.zf.trigger": this.open.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this)
              }), this.$element.addClass("is-closed")), this._addContentClasses(e)
            }
          }, {
            key: "_stopScrolling",
            value: function(e) {
              return !1
            }
          }, {
            key: "_recordScrollable",
            value: function(e) {
              var t = this;
              t.scrollHeight !== t.clientHeight && (0 === t.scrollTop && (t.scrollTop = 1), t.scrollTop === t.scrollHeight - t.clientHeight && (t.scrollTop = t.scrollHeight - t.clientHeight - 1)), t.allowUp = 0 < t.scrollTop, t.allowDown = t.scrollTop < t.scrollHeight - t.clientHeight, t.lastY = e.originalEvent.pageY
            }
          }, {
            key: "_stopScrollPropagation",
            value: function(e) {
              var t = e.pageY < this.lastY,
                i = !t;
              this.lastY = e.pageY, t && this.allowUp || i && this.allowDown ? e.stopPropagation() : e.preventDefault()
            }
          }, {
            key: "open",
            value: function(e, t) {
              if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                var i = this;
                t && (this.$lastTrigger = t), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && (o()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one(Object(s.transitionend)(this.$element), function() {
                  if (i.$element.hasClass("is-open")) {
                    var e = i.$element.find("[data-autofocus]");
                    e.length ? e.eq(0).focus() : i.$element.find("a, button").eq(0).focus()
                  }
                }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), a.Keyboard.trapFocus(this.$element)), this._addContentClasses(), this.$element.trigger("opened.zf.offcanvas")
              }
            }
          }, {
            key: "close",
            value: function(e) {
              if (this.$element.hasClass("is-open") && !this.isRevealed) {
                var t = this;
                this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !1 === this.options.contentScroll && (o()("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), !0 === this.options.trapFocus && (this.$content.removeAttr("tabindex"), a.Keyboard.releaseFocus(this.$element)), this.$element.one(Object(s.transitionend)(this.$element), function(e) {
                  t.$element.addClass("is-closed"), t._removeContentClasses()
                })
              }
            }
          }, {
            key: "toggle",
            value: function(e, t) {
              this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t)
            }
          }, {
            key: "_handleKeyboard",
            value: function(e) {
              var t = this;
              a.Keyboard.handleKey(e, "OffCanvas", {
                close: function() {
                  return t.close(), t.$lastTrigger.focus(), !0
                },
                handled: function() {
                  e.stopPropagation(), e.preventDefault()
                }
              })
            }
          }, {
            key: "_destroy",
            value: function() {
              this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas"), this.onLoadListener && o()(window).off(this.onLoadListener)
            }
          }]) && d(t.prototype, i), r && d(t, r), n
        }();
        m.defaults = {
          closeOnClick: !0,
          contentOverlay: !0,
          contentId: null,
          nested: null,
          contentScroll: !0,
          transitionTime: null,
          transition: "push",
          forceTo: null,
          isRevealed: !1,
          revealOn: null,
          autoFocus: !0,
          revealClass: "reveal-for-",
          trapFocus: !1
        }
      },
      "./js/foundation.orbit.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Orbit", function() {
          return v
        });
        var n = i("jquery"),
          o = i.n(n),
          s = i("./js/foundation.util.keyboard.js"),
          u = i("./js/foundation.util.motion.js"),
          a = i("./js/foundation.util.timer.js"),
          l = i("./js/foundation.util.imageLoader.js"),
          c = i("./js/foundation.core.utils.js"),
          d = i("./js/foundation.core.plugin.js"),
          f = i("./js/foundation.util.touch.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function p(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function h(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function m(e) {
          return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function g(e, t) {
          return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var v = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), h(this, m(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && g(e, t)
          }(i, d["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = o.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Orbit", f.Touch.init(o.a), this._init(), s.Keyboard.register("Orbit", {
                ltr: {
                  ARROW_RIGHT: "next",
                  ARROW_LEFT: "previous"
                },
                rtl: {
                  ARROW_LEFT: "next",
                  ARROW_RIGHT: "previous"
                }
              })
            }
          }, {
            key: "_init",
            value: function() {
              this._reset(), this.$wrapper = this.$element.find(".".concat(this.options.containerClass)), this.$slides = this.$element.find(".".concat(this.options.slideClass));
              var e = this.$element.find("img"),
                t = this.$slides.filter(".is-active"),
                i = this.$element[0].id || Object(c.GetYoDigits)(6, "orbit");
              this.$element.attr({
                "data-resize": i,
                id: i
              }), t.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), e.length ? Object(l.onImagesLoaded)(e, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && 1 < this.$slides.length && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
          }, {
            key: "_loadBullets",
            value: function() {
              this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find("button")
            }
          }, {
            key: "geoSync",
            value: function() {
              var e = this;
              this.timer = new a.Timer(this.$element, {
                duration: this.options.timerDelay,
                infinite: !1
              }, function() {
                e.changeSlide(!0)
              }), this.timer.start()
            }
          }, {
            key: "_prepareForOrbit",
            value: function() {
              this._setWrapperHeight()
            }
          }, {
            key: "_setWrapperHeight",
            value: function(e) {
              var t, i = 0,
                n = 0,
                r = this;
              this.$slides.each(function() {
                t = this.getBoundingClientRect().height, o()(this).attr("data-slide", n), /mui/g.test(o()(this)[0].className) || r.$slides.filter(".is-active")[0] === r.$slides.eq(n)[0] || o()(this).css({
                  display: "none"
                }), i = i < t ? t : i, n++
              }), n === this.$slides.length && (this.$wrapper.css({
                height: i
              }), e && e(i))
            }
          }, {
            key: "_setSlideHeight",
            value: function(e) {
              this.$slides.each(function() {
                o()(this).css("max-height", e)
              })
            }
          }, {
            key: "_events",
            value: function() {
              var n = this;
              if (this.$element.off(".resizeme.zf.trigger").on({
                "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
              }), 1 < this.$slides.length) {
                if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                  e.preventDefault(), n.changeSlide(!0)
                }).on("swiperight.zf.orbit", function(e) {
                  e.preventDefault(), n.changeSlide(!1)
                }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                  n.$element.data("clickedOn", !n.$element.data("clickedOn")), n.timer[n.$element.data("clickedOn") ? "pause" : "start"]()
                }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                  n.timer.pause()
                }).on("mouseleave.zf.orbit", function() {
                  n.$element.data("clickedOn") || n.timer.start()
                })), this.options.navButtons) this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass)).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(e) {
                  e.preventDefault(), n.changeSlide(o()(this).hasClass(n.options.nextClass))
                });
                this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                  if (/is-active/g.test(this.className)) return !1;
                  var e = o()(this).data("slide"),
                    t = e > n.$slides.filter(".is-active").data("slide"),
                    i = n.$slides.eq(e);
                  n.changeSlide(t, i, e)
                }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
                  s.Keyboard.handleKey(e, "Orbit", {
                    next: function() {
                      n.changeSlide(!0)
                    },
                    previous: function() {
                      n.changeSlide(!1)
                    },
                    handled: function() {
                      o()(e.target).is(n.$bullets) && n.$bullets.filter(".is-active").focus()
                    }
                  })
                })
              }
            }
          }, {
            key: "_reset",
            value: function() {
              void 0 !== this.$slides && 1 < this.$slides.length && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"), this.options.autoPlay && this.timer.restart(), this.$slides.each(function(e) {
                o()(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()
              }), this.$slides.first().addClass("is-active").show(), this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]), this.options.bullets && this._updateBullets(0))
            }
          }, {
            key: "changeSlide",
            value: function(e, t, i) {
              if (this.$slides) {
                var n = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(n[0].className)) return !1;
                var r, o = this.$slides.first(),
                  s = this.$slides.last(),
                  a = e ? "Right" : "Left",
                  l = e ? "Left" : "Right",
                  c = this;
                (r = t || (e ? this.options.infiniteWrap ? n.next(".".concat(this.options.slideClass)).length ? n.next(".".concat(this.options.slideClass)) : o : n.next(".".concat(this.options.slideClass)) : this.options.infiniteWrap ? n.prev(".".concat(this.options.slideClass)).length ? n.prev(".".concat(this.options.slideClass)) : s : n.prev(".".concat(this.options.slideClass)))).length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, r]), this.options.bullets && (i = i || this.$slides.index(r), this._updateBullets(i)), this.options.useMUI && !this.$element.is(":hidden") ? (u.Motion.animateIn(r.addClass("is-active"), this.options["animInFrom".concat(a)], function() {
                  r.css({
                    display: "block"
                  }).attr("aria-live", "polite")
                }), u.Motion.animateOut(n.removeClass("is-active"), this.options["animOutTo".concat(l)], function() {
                  n.removeAttr("aria-live"), c.options.autoPlay && !c.timer.isPaused && c.timer.restart()
                })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), r.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [r]))
              }
            }
          }, {
            key: "_updateBullets",
            value: function(e) {
              var t = this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach();
              this.$bullets.eq(e).addClass("is-active").append(t)
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()
            }
          }]) && p(t.prototype, n), r && p(t, r), i
        }();
        v.defaults = {
          bullets: !0,
          navButtons: !0,
          animInFromRight: "slide-in-right",
          animOutToRight: "slide-out-right",
          animInFromLeft: "slide-in-left",
          animOutToLeft: "slide-out-left",
          autoPlay: !0,
          timerDelay: 5e3,
          infiniteWrap: !0,
          swipe: !0,
          pauseOnHover: !0,
          accessible: !0,
          containerClass: "orbit-container",
          slideClass: "orbit-slide",
          boxOfBullets: "orbit-bullets",
          nextClass: "orbit-next",
          prevClass: "orbit-previous",
          useMUI: !0
        }
      },
      "./js/foundation.positionable.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Positionable", function() {
          return g
        });
        var s = i("./js/foundation.util.box.js"),
          o = i("./js/foundation.core.plugin.js"),
          a = i("./js/foundation.core.utils.js");

        function n(e) {
          return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function l(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function c(e, t) {
          return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function u(e) {
          return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function d(e, t) {
          return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var f = ["left", "right", "top", "bottom"],
          r = ["top", "bottom", "center"],
          p = ["left", "right", "center"],
          h = {
            left: r,
            right: r,
            top: p,
            bottom: p
          };

        function m(e, t) {
          var i = t.indexOf(e);
          return i === t.length - 1 ? t[0] : t[i + 1]
        }
        var g = function(e) {
          function t() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), c(this, u(t).apply(this, arguments))
          }
          var i, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && d(e, t)
          }(t, o["Plugin"]), i = t, (n = [{
            key: "_init",
            value: function() {
              this.triedPositions = {}, this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position, this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment, this.originalPosition = this.position, this.originalAlignment = this.alignment
            }
          }, {
            key: "_getDefaultPosition",
            value: function() {
              return "bottom"
            }
          }, {
            key: "_getDefaultAlignment",
            value: function() {
              switch (this.position) {
                case "bottom":
                case "top":
                  return Object(a.rtl)() ? "right" : "left";
                case "left":
                case "right":
                  return "bottom"
              }
            }
          }, {
            key: "_reposition",
            value: function() {
              this._alignmentsExhausted(this.position) ? (this.position = m(this.position, f), this.alignment = h[this.position][0]) : this._realign()
            }
          }, {
            key: "_realign",
            value: function() {
              this._addTriedPosition(this.position, this.alignment), this.alignment = m(this.alignment, h[this.position])
            }
          }, {
            key: "_addTriedPosition",
            value: function(e, t) {
              this.triedPositions[e] = this.triedPositions[e] || [], this.triedPositions[e].push(t)
            }
          }, {
            key: "_positionsExhausted",
            value: function() {
              for (var e = !0, t = 0; t < f.length; t++) e = e && this._alignmentsExhausted(f[t]);
              return e
            }
          }, {
            key: "_alignmentsExhausted",
            value: function(e) {
              return this.triedPositions[e] && this.triedPositions[e].length == h[e].length
            }
          }, {
            key: "_getVOffset",
            value: function() {
              return this.options.vOffset
            }
          }, {
            key: "_getHOffset",
            value: function() {
              return this.options.hOffset
            }
          }, {
            key: "_setPosition",
            value: function(e, t, i) {
              if ("false" === e.attr("aria-expanded")) return !1;
              s.Box.GetDimensions(t), s.Box.GetDimensions(e);
              if (this.options.allowOverlap || (this.position = this.originalPosition, this.alignment = this.originalAlignment), t.offset(s.Box.GetExplicitOffsets(t, e, this.position, this.alignment, this._getVOffset(), this._getHOffset())), !this.options.allowOverlap) {
                for (var n = 1e8, r = {
                  position: this.position,
                  alignment: this.alignment
                }; !this._positionsExhausted();) {
                  var o = s.Box.OverlapArea(t, i, !1, !1, this.options.allowBottomOverlap);
                  if (0 === o) return;
                  o < n && (n = o, r = {
                    position: this.position,
                    alignment: this.alignment
                  }), this._reposition(), t.offset(s.Box.GetExplicitOffsets(t, e, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                }
                this.position = r.position, this.alignment = r.alignment, t.offset(s.Box.GetExplicitOffsets(t, e, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
              }
            }
          }]) && l(i.prototype, n), r && l(i, r), t
        }();
        g.defaults = {
          position: "auto",
          alignment: "auto",
          allowOverlap: !1,
          allowBottomOverlap: !0,
          vOffset: 0,
          hOffset: 0
        }
      },
      "./js/foundation.responsiveAccordionTabs.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "ResponsiveAccordionTabs", function() {
          return m
        });
        var n = i("jquery"),
          u = i.n(n),
          s = i("./js/foundation.util.mediaQuery.js"),
          d = i("./js/foundation.core.utils.js"),
          o = i("./js/foundation.core.plugin.js"),
          r = i("./js/foundation.accordion.js");

        function a(e) {
          return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function l(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function c(e, t) {
          return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function p(e, t) {
          return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var h = {
            tabs: {
              cssClass: "tabs",
              plugin: i("./js/foundation.tabs.js").Tabs
            },
            accordion: {
              cssClass: "accordion",
              plugin: r.Accordion
            }
          },
          m = function(e) {
            function t() {
              return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, t), c(this, f(t).apply(this, arguments))
            }
            var i, n, r;
            return function(e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && p(e, t)
            }(t, o["Plugin"]), i = t, (n = [{
              key: "_setup",
              value: function(e, t) {
                this.$element = u()(e), this.options = u.a.extend({}, this.$element.data(), t), this.rules = this.$element.data("responsive-accordion-tabs"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveAccordionTabs", this.$element.attr("id") || this.$element.attr("id", Object(d.GetYoDigits)(6, "responsiveaccordiontabs")), this._init(), this._events()
              }
            }, {
              key: "_init",
              value: function() {
                if (s.MediaQuery._init(), "string" == typeof this.rules) {
                  for (var e = {}, t = this.rules.split(" "), i = 0; i < t.length; i++) {
                    var n = t[i].split("-"),
                      r = 1 < n.length ? n[0] : "small",
                      o = 1 < n.length ? n[1] : n[0];
                    null !== h[o] && (e[r] = h[o])
                  }
                  this.rules = e
                }
                this._getAllOptions(), u.a.isEmptyObject(this.rules) || this._checkMediaQueries()
              }
            }, {
              key: "_getAllOptions",
              value: function() {
                for (var e in this.allOptions = {}, h)
                  if (h.hasOwnProperty(e)) {
                    var t = h[e];
                    try {
                      var i = u()("<ul></ul>"),
                        n = new t.plugin(i, this.options);
                      for (var r in n.options)
                        if (n.options.hasOwnProperty(r) && "zfPlugin" !== r) {
                          var o = n.options[r];
                          this.allOptions[r] = o
                        }
                      n.destroy()
                    } catch (e) {}
                  }
              }
            }, {
              key: "_events",
              value: function() {
                this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this), u()(window).on("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
              }
            }, {
              key: "_checkMediaQueries",
              value: function() {
                var t, i = this;
                u.a.each(this.rules, function(e) {
                  s.MediaQuery.atLeast(e) && (t = e)
                }), t && (this.currentPlugin instanceof this.rules[t].plugin || (u.a.each(h, function(e, t) {
                  i.$element.removeClass(t.cssClass)
                }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData), this.currentPlugin.destroy()), this._handleMarkup(this.rules[t].cssClass), this.currentPlugin = new this.rules[t].plugin(this.$element, {}), this.storezfData = this.currentPlugin.$element.data("zfPlugin")))
              }
            }, {
              key: "_handleMarkup",
              value: function(e) {
                var i = this,
                  t = "accordion",
                  n = u()("[data-tabs-content=" + this.$element.attr("id") + "]");
                if (n.length && (t = "tabs"), t !== e) {
                  var r = i.allOptions.linkClass ? i.allOptions.linkClass : "tabs-title",
                    o = i.allOptions.panelClass ? i.allOptions.panelClass : "tabs-panel";
                  this.$element.removeAttr("role");
                  var s = this.$element.children("." + r + ",[data-accordion-item]").removeClass(r).removeClass("accordion-item").removeAttr("data-accordion-item"),
                    a = s.children("a").removeClass("accordion-title");
                  if ("tabs" === t ? (n = n.children("." + o).removeClass(o).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected") : n = s.children("[data-tab-content]").removeClass("accordion-content"), n.css({
                    display: "",
                    visibility: ""
                  }), s.css({
                    display: "",
                    visibility: ""
                  }), "accordion" === e) n.each(function(e, t) {
                    u()(t).appendTo(s.get(e)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                      height: ""
                    }), u()("[data-tabs-content=" + i.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + i.$element.attr("id") + '"></div>').detach(), s.addClass("accordion-item").attr("data-accordion-item", ""), a.addClass("accordion-title")
                  });
                  else if ("tabs" === e) {
                    var l = u()("[data-tabs-content=" + i.$element.attr("id") + "]"),
                      c = u()("#tabs-placeholder-" + i.$element.attr("id"));
                    c.length ? (l = u()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content", i.$element.attr("id")), c.remove()) : l = u()('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content", i.$element.attr("id")), n.each(function(e, t) {
                      var i = u()(t).appendTo(l).addClass(o),
                        n = a.get(e).hash.slice(1),
                        r = u()(t).attr("id") || Object(d.GetYoDigits)(6, "accordion");
                      n !== r && ("" !== n ? u()(t).attr("id", n) : (n = r, u()(t).attr("id", n), u()(a.get(e)).attr("href", u()(a.get(e)).attr("href").replace("#", "") + "#" + n))), u()(s.get(e)).hasClass("is-active") && i.addClass("is-active")
                    }), s.addClass(r)
                  }
                }
              }
            }, {
              key: "_destroy",
              value: function() {
                this.currentPlugin && this.currentPlugin.destroy(), u()(window).off("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
              }
            }]) && l(i.prototype, n), r && l(i, r), t
          }();
        m.defaults = {}
      },
      "./js/foundation.responsiveMenu.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "ResponsiveMenu", function() {
          return v
        });
        var n = i("jquery"),
          s = i.n(n),
          a = i("./js/foundation.util.mediaQuery.js"),
          l = i("./js/foundation.core.utils.js"),
          o = i("./js/foundation.core.plugin.js"),
          r = i("./js/foundation.dropdownMenu.js"),
          c = i("./js/foundation.drilldown.js"),
          u = i("./js/foundation.accordionMenu.js");

        function d(e) {
          return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function f(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function p(e, t) {
          return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function h(e) {
          return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function m(e, t) {
          return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var g = {
            dropdown: {
              cssClass: "dropdown",
              plugin: r.DropdownMenu
            },
            drilldown: {
              cssClass: "drilldown",
              plugin: c.Drilldown
            },
            accordion: {
              cssClass: "accordion-menu",
              plugin: u.AccordionMenu
            }
          },
          v = function(e) {
            function t() {
              return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, t), p(this, h(t).apply(this, arguments))
            }
            var i, n, r;
            return function(e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), t && m(e, t)
            }(t, o["Plugin"]), i = t, (n = [{
              key: "_setup",
              value: function(e, t) {
                this.$element = s()(e), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveMenu", this._init(), this._events()
              }
            }, {
              key: "_init",
              value: function() {
                if (a.MediaQuery._init(), "string" == typeof this.rules) {
                  for (var e = {}, t = this.rules.split(" "), i = 0; i < t.length; i++) {
                    var n = t[i].split("-"),
                      r = 1 < n.length ? n[0] : "small",
                      o = 1 < n.length ? n[1] : n[0];
                    null !== g[o] && (e[r] = g[o])
                  }
                  this.rules = e
                }
                s.a.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || Object(l.GetYoDigits)(6, "responsive-menu"))
              }
            }, {
              key: "_events",
              value: function() {
                var e = this;
                s()(window).on("changed.zf.mediaquery", function() {
                  e._checkMediaQueries()
                })
              }
            }, {
              key: "_checkMediaQueries",
              value: function() {
                var t, i = this;
                s.a.each(this.rules, function(e) {
                  a.MediaQuery.atLeast(e) && (t = e)
                }), t && (this.currentPlugin instanceof this.rules[t].plugin || (s.a.each(g, function(e, t) {
                  i.$element.removeClass(t.cssClass)
                }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(this.$element, {})))
              }
            }, {
              key: "_destroy",
              value: function() {
                this.currentPlugin.destroy(), s()(window).off(".zf.ResponsiveMenu")
              }
            }]) && f(i.prototype, n), r && f(i, r), t
          }();
        v.defaults = {}
      },
      "./js/foundation.responsiveToggle.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "ResponsiveToggle", function() {
          return p
        });
        var n = i("jquery"),
          o = i.n(n),
          s = i("./js/foundation.util.mediaQuery.js"),
          a = i("./js/foundation.util.motion.js"),
          l = i("./js/foundation.core.plugin.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function c(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function u(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function f(e, t) {
          return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var p = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), u(this, d(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && f(e, t)
          }(i, l["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = o()(e), this.options = o.a.extend({}, i.defaults, this.$element.data(), t), this.className = "ResponsiveToggle", this._init(), this._events()
            }
          }, {
            key: "_init",
            value: function() {
              s.MediaQuery._init();
              var t = this.$element.data("responsive-toggle");
              if (t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = o()("#".concat(t)), this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                var e = o()(this).data("toggle");
                return e === t || "" === e
              }), this.options = o.a.extend({}, this.options, this.$targetMenu.data()), this.options.animate) {
                var e = this.options.animate.split(" ");
                this.animationIn = e[0], this.animationOut = e[1] || null
              }
              this._update()
            }
          }, {
            key: "_events",
            value: function() {
              this._updateMqHandler = this._update.bind(this), o()(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
          }, {
            key: "_update",
            value: function() {
              s.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
            }
          }, {
            key: "toggleMenu",
            value: function() {
              var e = this;
              s.MediaQuery.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? a.Motion.animateIn(this.$targetMenu, this.animationIn, function() {
                e.$element.trigger("toggled.zf.responsiveToggle"), e.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")
              }) : a.Motion.animateOut(this.$targetMenu, this.animationOut, function() {
                e.$element.trigger("toggled.zf.responsiveToggle")
              }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), this.$element.trigger("toggled.zf.responsiveToggle")))
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), o()(window).off("changed.zf.mediaquery", this._updateMqHandler)
            }
          }]) && c(t.prototype, n), r && c(t, r), i
        }();
        p.defaults = {
          hideFor: "medium",
          animate: !1
        }
      },
      "./js/foundation.reveal.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Reveal", function() {
          return g
        });
        var n = i("jquery"),
          s = i.n(n),
          o = i("./js/foundation.core.utils.js"),
          a = i("./js/foundation.util.keyboard.js"),
          l = i("./js/foundation.util.mediaQuery.js"),
          c = i("./js/foundation.util.motion.js"),
          u = i("./js/foundation.core.plugin.js"),
          d = i("./js/foundation.util.triggers.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function f(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function p(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function h(e) {
          return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function m(e, t) {
          return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var g = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), p(this, h(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && m(e, t)
          }(i, u["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = s.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Reveal", this._init(), d.Triggers.init(s.a), a.Keyboard.register("Reveal", {
                ESCAPE: "close"
              })
            }
          }, {
            key: "_init",
            value: function() {
              var e = this;
              l.MediaQuery._init(), this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                mq: l.MediaQuery.current
              }, this.$anchor = s()('[data-open="'.concat(this.id, '"]')).length ? s()('[data-open="'.concat(this.id, '"]')) : s()('[data-toggle="'.concat(this.id, '"]')), this.$anchor.attr({
                "aria-controls": this.id,
                "aria-haspopup": !0,
                tabindex: 0
              }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                role: "dialog",
                "aria-hidden": !0,
                "data-yeti-box": this.id,
                "data-resize": this.id
              }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(s()(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#".concat(this.id) && (this.onLoadListener = Object(o.onLoad)(s()(window), function() {
                return e.open()
              }))
            }
          }, {
            key: "_makeOverlay",
            value: function() {
              var e = "";
              return this.options.additionalOverlayClasses && (e = " " + this.options.additionalOverlayClasses), s()("<div></div>").addClass("reveal-overlay" + e).appendTo(this.options.appendTo)
            }
          }, {
            key: "_updatePosition",
            value: function() {
              var e, t = this.$element.outerWidth(),
                i = s()(window).width(),
                n = this.$element.outerHeight(),
                r = s()(window).height(),
                o = null;
              e = "auto" === this.options.hOffset ? parseInt((i - t) / 2, 10) : parseInt(this.options.hOffset, 10), "auto" === this.options.vOffset ? o = r < n ? parseInt(Math.min(100, r / 10), 10) : parseInt((r - n) / 4, 10) : null !== this.options.vOffset && (o = parseInt(this.options.vOffset, 10)), null !== o && this.$element.css({
                top: o + "px"
              }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                left: e + "px"
              }), this.$element.css({
                margin: "0px"
              }))
            }
          }, {
            key: "_events",
            value: function() {
              var i = this,
                n = this;
              this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": function(e, t) {
                  if (e.target === n.$element[0] || s()(e.target).parents("[data-closable]")[0] === t) return i.close.apply(i)
                },
                "toggle.zf.trigger": this.toggle.bind(this),
                "resizeme.zf.trigger": function() {
                  n._updatePosition()
                }
              }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                e.target !== n.$element[0] && !s.a.contains(n.$element[0], e.target) && s.a.contains(document, e.target) && n.close()
              }), this.options.deepLink && s()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this))
            }
          }, {
            key: "_handleState",
            value: function(e) {
              window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
          }, {
            key: "_disableScroll",
            value: function(e) {
              e = e || s()(window).scrollTop(), s()(document).height() > s()(window).height() && s()("html").css("top", -e)
            }
          }, {
            key: "_enableScroll",
            value: function(e) {
              e = e || parseInt(s()("html").css("top")), s()(document).height() > s()(window).height() && (s()("html").css("top", ""), s()(window).scrollTop(-e))
            }
          }, {
            key: "open",
            value: function() {
              var e = this,
                t = "#".concat(this.id);
              this.options.deepLink && window.location.hash !== t && (window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", t) : window.history.replaceState({}, "", t) : window.location.hash = t), this.$activeAnchor = s()(document.activeElement).is(this.$anchor) ? s()(document.activeElement) : this.$anchor, this.isActive = !0, this.$element.css({
                visibility: "hidden"
              }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                visibility: "hidden"
              }).show(), this._updatePosition(), this.$element.hide().css({
                visibility: ""
              }), this.$overlay && (this.$overlay.css({
                visibility: ""
              }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this._disableScroll();
              var i = this;
              if (this.options.animationIn) {
                this.options.overlay && c.Motion.animateIn(this.$overlay, "fade-in"), c.Motion.animateIn(this.$element, this.options.animationIn, function() {
                  e.$element && (e.focusableElements = a.Keyboard.findFocusable(e.$element), i.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                  }).focus(), i._addGlobalClasses(), a.Keyboard.trapFocus(i.$element))
                })
              } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
              this.$element.attr({
                "aria-hidden": !1,
                tabindex: -1
              }).focus(), a.Keyboard.trapFocus(this.$element), this._addGlobalClasses(), this._addGlobalListeners(), this.$element.trigger("open.zf.reveal")
            }
          }, {
            key: "_addGlobalClasses",
            value: function() {
              var e = function() {
                s()("html").toggleClass("zf-has-scroll", !!(s()(document).height() > s()(window).height()))
              };
              this.$element.on("resizeme.zf.trigger.revealScrollbarListener", function() {
                return e()
              }), e(), s()("html").addClass("is-reveal-open")
            }
          }, {
            key: "_removeGlobalClasses",
            value: function() {
              this.$element.off("resizeme.zf.trigger.revealScrollbarListener"), s()("html").removeClass("is-reveal-open"), s()("html").removeClass("zf-has-scroll")
            }
          }, {
            key: "_addGlobalListeners",
            value: function() {
              var t = this;
              this.$element && (this.focusableElements = a.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || s()("body").on("click.zf.reveal", function(e) {
                e.target !== t.$element[0] && !s.a.contains(t.$element[0], e.target) && s.a.contains(document, e.target) && t.close()
              }), this.options.closeOnEsc && s()(window).on("keydown.zf.reveal", function(e) {
                a.Keyboard.handleKey(e, "Reveal", {
                  close: function() {
                    t.options.closeOnEsc && t.close()
                  }
                })
              }))
            }
          }, {
            key: "close",
            value: function() {
              if (!this.isActive || !this.$element.is(":visible")) return !1;
              var t = this;

              function e() {
                var e = parseInt(s()("html").css("top"));
                0 === s()(".reveal:visible").length && t._removeGlobalClasses(), a.Keyboard.releaseFocus(t.$element), t.$element.attr("aria-hidden", !0), t._enableScroll(e), t.$element.trigger("closed.zf.reveal")
              }
              if (this.options.animationOut ? (this.options.overlay && c.Motion.animateOut(this.$overlay, "fade-out"), c.Motion.animateOut(this.$element, this.options.animationOut, e)) : (this.$element.hide(this.options.hideDelay), this.options.overlay ? this.$overlay.hide(0, e) : e()), this.options.closeOnEsc && s()(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && s()("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, t.options.deepLink && window.location.hash === "#".concat(this.id))
                if (window.history.replaceState) {
                  var i = window.location.pathname + window.location.search;
                  this.options.updateHistory ? window.history.pushState({}, "", i) : window.history.replaceState("", document.title, i)
                } else window.location.hash = "";
              this.$activeAnchor.focus()
            }
          }, {
            key: "toggle",
            value: function() {
              this.isActive ? this.close() : this.open()
            }
          }, {
            key: "_destroy",
            value: function() {
              this.options.overlay && (this.$element.appendTo(s()(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), s()(window).off(".zf.reveal:".concat(this.id)), this.onLoadListener && s()(window).off(this.onLoadListener), 0 === s()(".reveal:visible").length && this._removeGlobalClasses()
            }
          }]) && f(t.prototype, n), r && f(t, r), i
        }();
        g.defaults = {
          animationIn: "",
          animationOut: "",
          showDelay: 0,
          hideDelay: 0,
          closeOnClick: !0,
          closeOnEsc: !0,
          multipleOpened: !1,
          vOffset: "auto",
          hOffset: "auto",
          fullScreen: !1,
          overlay: !0,
          resetOnClose: !1,
          deepLink: !1,
          updateHistory: !1,
          appendTo: "body",
          additionalOverlayClasses: ""
        }
      },
      "./js/foundation.slider.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Slider", function() {
          return p
        });
        var n = i("jquery"),
          m = i.n(n),
          s = i("./js/foundation.util.keyboard.js"),
          _ = i("./js/foundation.util.motion.js"),
          g = i("./js/foundation.core.utils.js"),
          o = i("./js/foundation.core.plugin.js"),
          a = i("./js/foundation.util.touch.js"),
          l = i("./js/foundation.util.triggers.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function c(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function u(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function d(e) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function f(e, t) {
          return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var p = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), u(this, d(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && f(e, t)
          }(i, o["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = m.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Slider", a.Touch.init(m.a), l.Triggers.init(m.a), this._init(), s.Keyboard.register("Slider", {
                ltr: {
                  ARROW_RIGHT: "increase",
                  ARROW_UP: "increase",
                  ARROW_DOWN: "decrease",
                  ARROW_LEFT: "decrease",
                  SHIFT_ARROW_RIGHT: "increase_fast",
                  SHIFT_ARROW_UP: "increase_fast",
                  SHIFT_ARROW_DOWN: "decrease_fast",
                  SHIFT_ARROW_LEFT: "decrease_fast",
                  HOME: "min",
                  END: "max"
                },
                rtl: {
                  ARROW_LEFT: "increase",
                  ARROW_RIGHT: "decrease",
                  SHIFT_ARROW_LEFT: "increase_fast",
                  SHIFT_ARROW_RIGHT: "decrease_fast"
                }
              })
            }
          }, {
            key: "_init",
            value: function() {
              this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : m()("#".concat(this.$handle.attr("aria-controls"))), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
              (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = m()().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = 1 < this.inputs.length ? this.inputs.eq(1) : m()("#".concat(this.$handle2.attr("aria-controls"))), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), !0, this._setInitAttr(1)), this.setHandles(), this._events()
            }
          }, {
            key: "setHandles",
            value: function() {
              var e = this;
              this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0, function() {
                e._setHandlePos(e.$handle2, e.inputs.eq(1).val(), !0)
              }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0)
            }
          }, {
            key: "_reflow",
            value: function() {
              this.setHandles()
            }
          }, {
            key: "_pctOfBar",
            value: function(e) {
              var t = k(e - this.options.start, this.options.end - this.options.start);
              switch (this.options.positionValueFunction) {
                case "pow":
                  t = this._logTransform(t);
                  break;
                case "log":
                  t = this._powTransform(t)
              }
              return t.toFixed(2)
            }
          }, {
            key: "_value",
            value: function(e) {
              switch (this.options.positionValueFunction) {
                case "pow":
                  e = this._powTransform(e);
                  break;
                case "log":
                  e = this._logTransform(e)
              }
              return (this.options.end - this.options.start) * e + parseFloat(this.options.start)
            }
          }, {
            key: "_logTransform",
            value: function(e) {
              return t = this.options.nonLinearBase, i = e * (this.options.nonLinearBase - 1) + 1, Math.log(i) / Math.log(t);
              var t, i
            }
          }, {
            key: "_powTransform",
            value: function(e) {
              return (Math.pow(this.options.nonLinearBase, e) - 1) / (this.options.nonLinearBase - 1)
            }
          }, {
            key: "_setHandlePos",
            value: function(e, t, i, n) {
              if (!this.$element.hasClass(this.options.disabledClass)) {
                (t = parseFloat(t)) < this.options.start ? t = this.options.start : t > this.options.end && (t = this.options.end);
                var r = this.options.doubleSided;
                if (this.options.vertical && !i && (t = this.options.end - t), r)
                  if (0 === this.handles.index(e)) {
                    var o = parseFloat(this.$handle2.attr("aria-valuenow"));
                    t = o <= t ? o - this.options.step : t
                  } else {
                    var s = parseFloat(this.$handle.attr("aria-valuenow"));
                    t = t <= s ? s + this.options.step : t
                  }
                var a = this,
                  l = this.options.vertical,
                  c = l ? "height" : "width",
                  u = l ? "top" : "left",
                  d = e[0].getBoundingClientRect()[c],
                  f = this.$element[0].getBoundingClientRect()[c],
                  p = this._pctOfBar(t),
                  h = (100 * k((f - d) * p, f)).toFixed(this.options.decimal);
                t = parseFloat(t.toFixed(this.options.decimal));
                var m = {};
                if (this._setValues(e, t), r) {
                  var g, v = 0 === this.handles.index(e),
                    y = ~~(100 * k(d, f));
                  if (v) m[u] = "".concat(h, "%"), g = parseFloat(this.$handle2[0].style[u]) - h + y, n && "function" == typeof n && n();
                  else {
                    var b = parseFloat(this.$handle[0].style[u]);
                    g = h - (isNaN(b) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : b) + y
                  }
                  m["min-".concat(c)] = "".concat(g, "%")
                }
                this.$element.one("finished.zf.animate", function() {
                  a.$element.trigger("moved.zf.slider", [e])
                });
                var w = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                Object(_.Move)(w, e, function() {
                  isNaN(h) ? e.css(u, "".concat(100 * p, "%")) : e.css(u, "".concat(h, "%")), a.options.doubleSided ? a.$fill.css(m) : a.$fill.css(c, "".concat(100 * p, "%"))
                }), clearTimeout(a.timeout), a.timeout = setTimeout(function() {
                  a.$element.trigger("changed.zf.slider", [e])
                }, a.options.changedDelay)
              }
            }
          }, {
            key: "_setInitAttr",
            value: function(e) {
              var t = 0 === e ? this.options.initialStart : this.options.initialEnd,
                i = this.inputs.eq(e).attr("id") || Object(g.GetYoDigits)(6, "slider");
              this.inputs.eq(e).attr({
                id: i,
                max: this.options.end,
                min: this.options.start,
                step: this.options.step
              }), this.inputs.eq(e).val(t), this.handles.eq(e).attr({
                role: "slider",
                "aria-controls": i,
                "aria-valuemax": this.options.end,
                "aria-valuemin": this.options.start,
                "aria-valuenow": t,
                "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                tabindex: 0
              })
            }
          }, {
            key: "_setValues",
            value: function(e, t) {
              var i = this.options.doubleSided ? this.handles.index(e) : 0;
              this.inputs.eq(i).val(t), e.attr("aria-valuenow", t)
            }
          }, {
            key: "_handleEvent",
            value: function(e, t, i) {
              var n, r;
              if (i) n = this._adjustValue(null, i), r = !0;
              else {
                e.preventDefault();
                var o = this.options.vertical,
                  s = o ? "height" : "width",
                  a = o ? "top" : "left",
                  l = o ? e.pageY : e.pageX,
                  c = (this.$handle[0].getBoundingClientRect()[s], this.$element[0].getBoundingClientRect()[s]),
                  u = o ? m()(window).scrollTop() : m()(window).scrollLeft(),
                  d = this.$element.offset()[a];
                e.clientY === e.pageY && (l += u);
                var f, p = l - d,
                  h = k(f = p < 0 ? 0 : c < p ? c : p, c);
                if (n = this._value(h), Object(g.rtl)() && !this.options.vertical && (n = this.options.end - n), n = this._adjustValue(null, n), r = !1, !t) t = v(this.$handle, a, f, s) <= v(this.$handle2, a, f, s) ? this.$handle : this.$handle2
              }
              this._setHandlePos(t, n, r)
            }
          }, {
            key: "_adjustValue",
            value: function(e, t) {
              var i, n, r, o = this.options.step,
                s = parseFloat(o / 2);
              return 0 === (n = 0 <= (i = e ? parseFloat(e.attr("aria-valuenow")) : t) ? i % o : o + i % o) ? i : i = (r = i - n) + s <= i ? r + o : r
            }
          }, {
            key: "_events",
            value: function() {
              this._eventsForHandle(this.$handle), this.handles[1] && this._eventsForHandle(this.$handle2)
            }
          }, {
            key: "_eventsForHandle",
            value: function(t) {
              var i, o = this,
                n = function(e) {
                  var t = o.inputs.index(m()(this));
                  o._handleEvent(e, o.handles.eq(t), m()(this).val())
                };
              if (this.inputs.off("keyup.zf.slider").on("keyup.zf.slider", function(e) {
                13 == e.keyCode && n.call(this, e)
              }), this.inputs.off("change.zf.slider").on("change.zf.slider", n), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
                if (o.$element.data("dragging")) return !1;
                m()(e.target).is("[data-slider-handle]") || (o.options.doubleSided ? o._handleEvent(e) : o._handleEvent(e, o.$handle))
              }), this.options.draggable) {
                this.handles.addTouch();
                var r = m()("body");
                t.off("mousedown.zf.slider").on("mousedown.zf.slider", function(e) {
                  t.addClass("is-dragging"), o.$fill.addClass("is-dragging"), o.$element.data("dragging", !0), i = m()(e.currentTarget), r.on("mousemove.zf.slider", function(e) {
                    e.preventDefault(), o._handleEvent(e, i)
                  }).on("mouseup.zf.slider", function(e) {
                    o._handleEvent(e, i), t.removeClass("is-dragging"), o.$fill.removeClass("is-dragging"), o.$element.data("dragging", !1), r.off("mousemove.zf.slider mouseup.zf.slider")
                  })
                }).on("selectstart.zf.slider touchmove.zf.slider", function(e) {
                  e.preventDefault()
                })
              }
              t.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
                var t, i = m()(this),
                  n = o.options.doubleSided ? o.handles.index(i) : 0,
                  r = parseFloat(o.inputs.eq(n).val());
                s.Keyboard.handleKey(e, "Slider", {
                  decrease: function() {
                    t = r - o.options.step
                  },
                  increase: function() {
                    t = r + o.options.step
                  },
                  decrease_fast: function() {
                    t = r - 10 * o.options.step
                  },
                  increase_fast: function() {
                    t = r + 10 * o.options.step
                  },
                  min: function() {
                    t = o.options.start
                  },
                  max: function() {
                    t = o.options.end
                  },
                  handled: function() {
                    e.preventDefault(), o._setHandlePos(i, t, !0)
                  }
                })
              })
            }
          }, {
            key: "_destroy",
            value: function() {
              this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), clearTimeout(this.timeout)
            }
          }]) && c(t.prototype, n), r && c(t, r), i
        }();

        function k(e, t) {
          return e / t
        }

        function v(e, t, i, n) {
          return Math.abs(e.position()[t] + e[n]() / 2 - i)
        }
        p.defaults = {
          start: 0,
          end: 100,
          step: 1,
          initialStart: 0,
          initialEnd: 100,
          binding: !1,
          clickSelect: !0,
          vertical: !1,
          draggable: !0,
          disabled: !1,
          doubleSided: !1,
          decimal: 2,
          moveTime: 200,
          disabledClass: "disabled",
          invertVertical: !1,
          changedDelay: 500,
          nonLinearBase: 5,
          positionValueFunction: "linear"
        }
      },
      "./js/foundation.smoothScroll.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "SmoothScroll", function() {
          return f
        });
        var n = i("jquery"),
          s = i.n(n),
          r = i("./js/foundation.core.utils.js"),
          a = i("./js/foundation.core.plugin.js");

        function o(e) {
          return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function l(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function c(e, t) {
          return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function u(e) {
          return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function d(e, t) {
          return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var f = function(e) {
          function o() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, o), c(this, u(o).apply(this, arguments))
          }
          var t, i, n;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && d(e, t)
          }(o, a["Plugin"]), t = o, n = [{
            key: "scrollToLoc",
            value: function(e) {
              var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : o.defaults,
                i = 2 < arguments.length ? arguments[2] : void 0,
                n = s()(e);
              if (!n.length) return !1;
              var r = Math.round(n.offset().top - t.threshold / 2 - t.offset);
              s()("html, body").stop(!0).animate({
                scrollTop: r
              }, t.animationDuration, t.animationEasing, function() {
                "function" == typeof i && i()
              })
            }
          }], (i = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = s.a.extend({}, o.defaults, this.$element.data(), t), this.className = "SmoothScroll", this._init()
            }
          }, {
            key: "_init",
            value: function() {
              var e = this.$element[0].id || Object(r.GetYoDigits)(6, "smooth-scroll");
              this.$element.attr({
                id: e
              }), this._events()
            }
          }, {
            key: "_events",
            value: function() {
              this.$element.on("click.zf.smoothScroll", this._handleLinkClick), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._handleLinkClick)
            }
          }, {
            key: "_handleLinkClick",
            value: function(e) {
              var t = this;
              if (s()(e.currentTarget).is('a[href^="#"]')) {
                var i = e.currentTarget.getAttribute("href");
                this._inTransition = !0, o.scrollToLoc(i, this.options, function() {
                  t._inTransition = !1
                }), e.preventDefault()
              }
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.off("click.zf.smoothScroll", this._handleLinkClick), this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._handleLinkClick)
            }
          }]) && l(t.prototype, i), n && l(t, n), o
        }();
        f.defaults = {
          animationDuration: 500,
          animationEasing: "linear",
          threshold: 50,
          offset: 0
        }
      },
      "./js/foundation.sticky.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Sticky", function() {
          return h
        });
        var n = i("jquery"),
          a = i.n(n),
          o = i("./js/foundation.core.utils.js"),
          l = i("./js/foundation.util.mediaQuery.js"),
          s = i("./js/foundation.core.plugin.js"),
          c = i("./js/foundation.util.triggers.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function u(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function d(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function p(e, t) {
          return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var h = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), d(this, f(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && p(e, t)
          }(i, s["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = a.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Sticky", c.Triggers.init(a.a), this._init()
            }
          }, {
            key: "_init",
            value: function() {
              l.MediaQuery._init();
              var e = this.$element.parent("[data-sticky-container]"),
                t = this.$element[0].id || Object(o.GetYoDigits)(6, "sticky"),
                i = this;
              e.length ? this.$container = e : (this.wasWrapped = !0, this.$element.wrap(this.options.container), this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                "data-resize": t,
                "data-mutate": t
              }), "" !== this.options.anchor && a()("#" + i.options.anchor).attr({
                "data-mutate": t
              }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, this.onLoadListener = Object(o.onLoad)(a()(window), function() {
                i.containerHeight = "none" == i.$element.css("display") ? 0 : i.$element[0].getBoundingClientRect().height, i.$container.css("height", i.containerHeight), i.elemHeight = i.containerHeight, "" !== i.options.anchor ? i.$anchor = a()("#" + i.options.anchor) : i._parsePoints(), i._setSizes(function() {
                  var e = window.pageYOffset;
                  i._calc(!1, e), i.isStuck || i._removeSticky(!(e >= i.topPoint))
                }), i._events(t.split("-").reverse().join("-"))
              })
            }
          }, {
            key: "_parsePoints",
            value: function() {
              for (var e = ["" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor], t = {}, i = 0, n = e.length; i < n && e[i]; i++) {
                var r;
                if ("number" == typeof e[i]) r = e[i];
                else {
                  var o = e[i].split(":"),
                    s = a()("#".concat(o[0]));
                  r = s.offset().top, o[1] && "bottom" === o[1].toLowerCase() && (r += s[0].getBoundingClientRect().height)
                }
                t[i] = r
              }
              this.points = t
            }
          }, {
            key: "_events",
            value: function(i) {
              var n = this,
                e = this.scrollListener = "scroll.zf.".concat(i);
              this.isOn || (this.canStick && (this.isOn = !0, a()(window).off(e).on(e, function(e) {
                0 === n.scrollCount ? (n.scrollCount = n.options.checkEvery, n._setSizes(function() {
                  n._calc(!1, window.pageYOffset)
                })) : (n.scrollCount--, n._calc(!1, window.pageYOffset))
              })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(e, t) {
                n._eventsHandler(i)
              }), this.$element.on("mutateme.zf.trigger", function(e, t) {
                n._eventsHandler(i)
              }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function(e, t) {
                n._eventsHandler(i)
              }))
            }
          }, {
            key: "_eventsHandler",
            value: function(e) {
              var t = this,
                i = this.scrollListener = "scroll.zf.".concat(e);
              t._setSizes(function() {
                t._calc(!1), t.canStick ? t.isOn || t._events(e) : t.isOn && t._pauseListeners(i)
              })
            }
          }, {
            key: "_pauseListeners",
            value: function(e) {
              this.isOn = !1, a()(window).off(e), this.$element.trigger("pause.zf.sticky")
            }
          }, {
            key: "_calc",
            value: function(e, t) {
              if (e && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), !1;
              t || (t = window.pageYOffset), t >= this.topPoint ? t <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
            }
          }, {
            key: "_setSticky",
            value: function() {
              var e = this,
                t = this.options.stickTo,
                i = "top" === t ? "marginTop" : "marginBottom",
                n = "top" === t ? "bottom" : "top",
                r = {};
              r[i] = "".concat(this.options[i], "em"), r[t] = 0, r[n] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-".concat(n)).addClass("is-stuck is-at-".concat(t)).css(r).trigger("sticky.zf.stuckto:".concat(t)), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                e._setSizes()
              })
            }
          }, {
            key: "_removeSticky",
            value: function(e) {
              var t = this.options.stickTo,
                i = "top" === t,
                n = {},
                r = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                o = e ? "top" : "bottom";
              n[i ? "marginTop" : "marginBottom"] = 0, n.bottom = "auto", n.top = e ? 0 : r, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-".concat(t)).addClass("is-anchored is-at-".concat(o)).css(n).trigger("sticky.zf.unstuckfrom:".concat(o))
            }
          }, {
            key: "_setSizes",
            value: function(e) {
              this.canStick = l.MediaQuery.is(this.options.stickyOn), this.canStick || e && "function" == typeof e && e();
              var t = this.$container[0].getBoundingClientRect().width,
                i = window.getComputedStyle(this.$container[0]),
                n = parseInt(i["padding-left"], 10),
                r = parseInt(i["padding-right"], 10);
              this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                "max-width": "".concat(t - n - r, "px")
              });
              var o = this.$element[0].getBoundingClientRect().height || this.containerHeight;
              if ("none" == this.$element.css("display") && (o = 0), this.containerHeight = o, this.$container.css({
                height: o
              }), this.elemHeight = o, !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                var s = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                this.$element.css("top", s)
              }
              this._setBreakPoints(o, function() {
                e && "function" == typeof e && e()
              })
            }
          }, {
            key: "_setBreakPoints",
            value: function(e, t) {
              if (!this.canStick) {
                if (!t || "function" != typeof t) return !1;
                t()
              }
              var i = m(this.options.marginTop),
                n = m(this.options.marginBottom),
                r = this.points ? this.points[0] : this.$anchor.offset().top,
                o = this.points ? this.points[1] : r + this.anchorHeight,
                s = window.innerHeight;
              "top" === this.options.stickTo ? (r -= i, o -= e + i) : "bottom" === this.options.stickTo && (r -= s - (e + n), o -= s - n), this.topPoint = r, this.bottomPoint = o, t && "function" == typeof t && t()
            }
          }, {
            key: "_destroy",
            value: function() {
              this._removeSticky(!0), this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                height: "",
                top: "",
                bottom: "",
                "max-width": ""
              }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), this.scrollListener && a()(window).off(this.scrollListener), this.onLoadListener && a()(window).off(this.onLoadListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                height: ""
              })
            }
          }]) && u(t.prototype, n), r && u(t, r), i
        }();

        function m(e) {
          return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * e
        }
        h.defaults = {
          container: "<div data-sticky-container></div>",
          stickTo: "top",
          anchor: "",
          topAnchor: "",
          btmAnchor: "",
          marginTop: 1,
          marginBottom: 1,
          stickyOn: "medium",
          stickyClass: "sticky",
          containerClass: "sticky-container",
          checkEvery: -1
        }
      },
      "./js/foundation.tabs.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Tabs", function() {
          return r
        });
        var n = i("jquery"),
          a = i.n(n),
          l = i("./js/foundation.core.utils.js"),
          s = i("./js/foundation.util.keyboard.js"),
          c = i("./js/foundation.util.imageLoader.js"),
          o = i("./js/foundation.core.plugin.js");

        function u(e) {
          return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function d(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function f(e, t) {
          return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function p(e) {
          return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var r = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), f(this, p(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(i, o["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = a.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Tabs", this._init(), s.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
              })
            }
          }, {
            key: "_init",
            value: function() {
              var o = this,
                s = this;
              if (this._isInitializing = !0, this.$element.attr({
                role: "tablist"
              }), this.$tabTitles = this.$element.find(".".concat(this.options.linkClass)), this.$tabContent = a()('[data-tabs-content="'.concat(this.$element[0].id, '"]')), this.$tabTitles.each(function() {
                var e = a()(this),
                  t = e.find("a"),
                  i = e.hasClass("".concat(s.options.linkActiveClass)),
                  n = t.attr("data-tabs-target") || t[0].hash.slice(1),
                  r = t[0].id ? t[0].id : "".concat(n, "-label"),
                  o = a()("#".concat(n));
                e.attr({
                  role: "presentation"
                }), t.attr({
                  role: "tab",
                  "aria-controls": n,
                  "aria-selected": i,
                  id: r,
                  tabindex: i ? "0" : "-1"
                }), o.attr({
                  role: "tabpanel",
                  "aria-labelledby": r
                }), i && (s._initialAnchor = "#".concat(n)), i || o.attr("aria-hidden", "true"), i && s.options.autoFocus && (s.onLoadListener = Object(l.onLoad)(a()(window), function() {
                  a()("html, body").animate({
                    scrollTop: e.offset().top
                  }, s.options.deepLinkSmudgeDelay, function() {
                    t.focus()
                  })
                }))
              }), this.options.matchHeight) {
                var e = this.$tabContent.find("img");
                e.length ? Object(c.onImagesLoaded)(e, this._setHeight.bind(this)) : this._setHeight()
              }
              this._checkDeepLink = function() {
                var e = window.location.hash;
                if (!e.length) {
                  if (o._isInitializing) return;
                  o._initialAnchor && (e = o._initialAnchor)
                }
                var t = e && a()(e),
                  i = e && o.$element.find('[href$="' + e + '"]'),
                  n = !(!t.length || !i.length);
                if (t && t.length && i && i.length ? o.selectTab(t, !0) : o._collapse(), n) {
                  if (o.options.deepLinkSmudge) {
                    var r = o.$element.offset();
                    a()("html, body").animate({
                      scrollTop: r.top
                    }, o.options.deepLinkSmudgeDelay)
                  }
                  o.$element.trigger("deeplink.zf.tabs", [i, t])
                }
              }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
            }
          }, {
            key: "_events",
            value: function() {
              this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), a()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && a()(window).on("hashchange", this._checkDeepLink)
            }
          }, {
            key: "_addClickHandler",
            value: function() {
              var t = this;
              this.$element.off("click.zf.tabs").on("click.zf.tabs", ".".concat(this.options.linkClass), function(e) {
                e.preventDefault(), e.stopPropagation(), t._handleTabChange(a()(this))
              })
            }
          }, {
            key: "_addKeyHandler",
            value: function() {
              var o = this;
              this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                if (9 !== e.which) {
                  var t, i, n = a()(this),
                    r = n.parent("ul").children("li");
                  r.each(function(e) {
                    a()(this).is(n) && (i = o.options.wrapOnKeys ? (t = 0 === e ? r.last() : r.eq(e - 1), e === r.length - 1 ? r.first() : r.eq(e + 1)) : (t = r.eq(Math.max(0, e - 1)), r.eq(Math.min(e + 1, r.length - 1))))
                  }), s.Keyboard.handleKey(e, "Tabs", {
                    open: function() {
                      n.find('[role="tab"]').focus(), o._handleTabChange(n)
                    },
                    previous: function() {
                      t.find('[role="tab"]').focus(), o._handleTabChange(t)
                    },
                    next: function() {
                      i.find('[role="tab"]').focus(), o._handleTabChange(i)
                    },
                    handled: function() {
                      e.stopPropagation(), e.preventDefault()
                    }
                  })
                }
              })
            }
          }, {
            key: "_handleTabChange",
            value: function(e, t) {
              if (e.hasClass("".concat(this.options.linkActiveClass))) this.options.activeCollapse && this._collapse();
              else {
                var i = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
                  n = e.find('[role="tab"]'),
                  r = n.attr("data-tabs-target"),
                  o = r && r.length ? "#".concat(r) : n[0].hash,
                  s = this.$tabContent.find(o);
                this._collapseTab(i), this._openTab(e), this.options.deepLink && !t && (this.options.updateHistory ? history.pushState({}, "", o) : history.replaceState({}, "", o)), this.$element.trigger("change.zf.tabs", [e, s]), s.find("[data-mutate]").trigger("mutateme.zf.trigger")
              }
            }
          }, {
            key: "_openTab",
            value: function(e) {
              var t = e.find('[role="tab"]'),
                i = t.attr("data-tabs-target") || t[0].hash.slice(1),
                n = this.$tabContent.find("#".concat(i));
              e.addClass("".concat(this.options.linkActiveClass)), t.attr({
                "aria-selected": "true",
                tabindex: "0"
              }), n.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")
            }
          }, {
            key: "_collapseTab",
            value: function(e) {
              var t = e.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
                "aria-selected": "false",
                tabindex: -1
              });
              a()("#".concat(t.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({
                "aria-hidden": "true"
              })
            }
          }, {
            key: "_collapse",
            value: function() {
              var e = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
              e.length && (this._collapseTab(e), this.$element.trigger("collapse.zf.tabs", [e]))
            }
          }, {
            key: "selectTab",
            value: function(e, t) {
              var i;
              (i = "object" === u(e) ? e[0].id : e).indexOf("#") < 0 && (i = "#".concat(i));
              var n = this.$tabTitles.has('[href$="'.concat(i, '"]'));
              this._handleTabChange(n, t)
            }
          }, {
            key: "_setHeight",
            value: function() {
              var n = 0,
                r = this;
              this.$tabContent.find(".".concat(this.options.panelClass)).css("height", "").each(function() {
                var e = a()(this),
                  t = e.hasClass("".concat(r.options.panelActiveClass));
                t || e.css({
                  visibility: "hidden",
                  display: "block"
                });
                var i = this.getBoundingClientRect().height;
                t || e.css({
                  visibility: "",
                  display: ""
                }), n = n < i ? i : n
              }).css("height", "".concat(n, "px"))
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(), this.options.matchHeight && null != this._setHeightMqHandler && a()(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && a()(window).off("hashchange", this._checkDeepLink), this.onLoadListener && a()(window).off(this.onLoadListener)
            }
          }]) && d(t.prototype, n), r && d(t, r), i
        }();
        r.defaults = {
          deepLink: !1,
          deepLinkSmudge: !1,
          deepLinkSmudgeDelay: 300,
          updateHistory: !1,
          autoFocus: !1,
          wrapOnKeys: !0,
          matchHeight: !1,
          activeCollapse: !1,
          linkClass: "tabs-title",
          linkActiveClass: "is-active",
          panelClass: "tabs-panel",
          panelActiveClass: "is-active"
        }
      },
      "./js/foundation.toggler.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Toggler", function() {
          return h
        });
        var n = i("jquery"),
          o = i.n(n),
          s = i("./js/foundation.util.motion.js"),
          a = i("./js/foundation.core.plugin.js"),
          l = i("./js/foundation.core.utils.js"),
          c = i("./js/foundation.util.triggers.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function u(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function d(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e) {
          return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function p(e, t) {
          return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var h = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), d(this, f(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && p(e, t)
          }(i, a["Plugin"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = o.a.extend({}, i.defaults, e.data(), t), this.className = "", this.className = "Toggler", c.Triggers.init(o.a), this._init(), this._events()
            }
          }, {
            key: "_init",
            value: function() {
              var e;
              this.options.animate ? (e = this.options.animate.split(" "), this.animationIn = e[0], this.animationOut = e[1] || null) : (e = this.$element.data("toggler"), this.className = "." === e[0] ? e.slice(1) : e);
              var r = this.$element[0].id,
                t = o()('[data-open~="'.concat(r, '"], [data-close~="').concat(r, '"], [data-toggle~="').concat(r, '"]'));
              t.attr("aria-expanded", !this.$element.is(":hidden")), t.each(function(e, t) {
                var i = o()(t),
                  n = i.attr("aria-controls") || "";
                new RegExp("\\b".concat(Object(l.RegExpEscape)(r), "\\b")).test(n) || i.attr("aria-controls", n ? "".concat(n, " ").concat(r) : r)
              })
            }
          }, {
            key: "_events",
            value: function() {
              this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
          }, {
            key: "toggle",
            value: function() {
              this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
          }, {
            key: "_toggleClass",
            value: function() {
              this.$element.toggleClass(this.className);
              var e = this.$element.hasClass(this.className);
              e ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(e), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
          }, {
            key: "_toggleAnimate",
            value: function() {
              var e = this;
              this.$element.is(":hidden") ? s.Motion.animateIn(this.$element, this.animationIn, function() {
                e._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
              }) : s.Motion.animateOut(this.$element, this.animationOut, function() {
                e._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
              })
            }
          }, {
            key: "_updateARIA",
            value: function(e) {
              var t = this.$element[0].id;
              o()('[data-open="'.concat(t, '"], [data-close="').concat(t, '"], [data-toggle="').concat(t, '"]')).attr({
                "aria-expanded": !!e
              })
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.off(".zf.toggler")
            }
          }]) && u(t.prototype, n), r && u(t, r), i
        }();
        h.defaults = {
          animate: !1
        }
      },
      "./js/foundation.tooltip.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Tooltip", function() {
          return m
        });
        var n = i("jquery"),
          o = i.n(n),
          s = i("./js/foundation.core.utils.js"),
          a = i("./js/foundation.util.mediaQuery.js"),
          l = i("./js/foundation.util.triggers.js"),
          c = i("./js/foundation.positionable.js");

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function u(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }

        function d(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 !== e) return e;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }(e) : t
        }

        function f(e, t, i) {
          return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var n = function(e, t) {
              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
              return e
            }(e, t);
            if (n) {
              var r = Object.getOwnPropertyDescriptor(n, t);
              return r.get ? r.get.call(i) : r.value
            }
          })(e, t, i || e)
        }

        function p(e) {
          return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function h(e, t) {
          return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }
        var m = function(e) {
          function i() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, i), d(this, p(i).apply(this, arguments))
          }
          var t, n, r;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(i, c["Positionable"]), t = i, (n = [{
            key: "_setup",
            value: function(e, t) {
              this.$element = e, this.options = o.a.extend({}, i.defaults, this.$element.data(), t), this.className = "Tooltip", this.isActive = !1, this.isClick = !1, l.Triggers.init(o.a), this._init()
            }
          }, {
            key: "_init",
            value: function() {
              a.MediaQuery._init();
              var e = this.$element.attr("aria-describedby") || Object(s.GetYoDigits)(6, "tooltip");
              this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? o()(this.options.template) : this._buildTemplate(e), this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                title: "",
                "aria-describedby": e,
                "data-yeti-box": e,
                "data-toggle": e,
                "data-resize": e
              }).addClass(this.options.triggerClass), f(p(i.prototype), "_init", this).call(this), this._events()
            }
          }, {
            key: "_getDefaultPosition",
            value: function() {
              var e = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
              return e ? e[0] : "top"
            }
          }, {
            key: "_getDefaultAlignment",
            value: function() {
              return "center"
            }
          }, {
            key: "_getHOffset",
            value: function() {
              return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset
            }
          }, {
            key: "_getVOffset",
            value: function() {
              return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset
            }
          }, {
            key: "_buildTemplate",
            value: function(e) {
              var t = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
              return o()("<div></div>").addClass(t).attr({
                role: "tooltip",
                "aria-hidden": !0,
                "data-is-active": !1,
                "data-is-focus": !1,
                id: e
              })
            }
          }, {
            key: "_setPosition",
            value: function() {
              f(p(i.prototype), "_setPosition", this).call(this, this.$element, this.template)
            }
          }, {
            key: "show",
            value: function() {
              if ("all" !== this.options.showOn && !a.MediaQuery.is(this.options.showOn)) return !1;
              this.template.css("visibility", "hidden").show(), this._setPosition(), this.template.removeClass("top bottom left right").addClass(this.position), this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                "data-is-active": !0,
                "aria-hidden": !1
              }), this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
            }
          }, {
            key: "hide",
            value: function() {
              var e = this;
              this.template.stop().attr({
                "aria-hidden": !0,
                "data-is-active": !1
              }).fadeOut(this.options.fadeOutDuration, function() {
                e.isActive = !1, e.isClick = !1
              }), this.$element.trigger("hide.zf.tooltip")
            }
          }, {
            key: "_events",
            value: function() {
              var t = this,
                i = (this.template, !1);
              this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                t.isActive || (t.timeout = setTimeout(function() {
                  t.show()
                }, t.options.hoverDelay))
              }).on("mouseleave.zf.tooltip", function(e) {
                clearTimeout(t.timeout), (!i || t.isClick && !t.options.clickOpen) && t.hide()
              }), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                e.stopImmediatePropagation(), t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
              }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                e.stopImmediatePropagation(), t.isClick = !0
              }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                t.isActive ? t.hide() : t.show()
              }), this.$element.on({
                "close.zf.trigger": this.hide.bind(this)
              }), this.$element.on("focus.zf.tooltip", function(e) {
                if (i = !0, t.isClick) return t.options.clickOpen || (i = !1), !1;
                t.show()
              }).on("focusout.zf.tooltip", function(e) {
                i = !1, t.isClick = !1, t.hide()
              }).on("resizeme.zf.trigger", function() {
                t.isActive && t._setPosition()
              })
            }
          }, {
            key: "toggle",
            value: function() {
              this.isActive ? this.hide() : this.show()
            }
          }, {
            key: "_destroy",
            value: function() {
              this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), this.template.remove()
            }
          }]) && u(t.prototype, n), r && u(t, r), i
        }();
        m.defaults = {
          disableForTouch: !1,
          hoverDelay: 200,
          fadeInDuration: 150,
          fadeOutDuration: 150,
          disableHover: !1,
          templateClasses: "",
          tooltipClass: "tooltip",
          triggerClass: "has-tip",
          showOn: "small",
          template: "",
          tipText: "",
          touchCloseText: "Tap to close.",
          clickOpen: !0,
          position: "auto",
          alignment: "auto",
          allowOverlap: !1,
          allowBottomOverlap: !1,
          vOffset: 0,
          hOffset: 0,
          tooltipHeight: 14,
          tooltipWidth: 12,
          allowHtml: !1
        }
      },
      "./js/foundation.util.box.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Box", function() {
          return n
        });
        var s = i("./js/foundation.core.utils.js"),
          n = {
            ImNotTouchingYou: function(e, t, i, n, r) {
              return 0 === o(e, t, i, n, r)
            },
            OverlapArea: o,
            GetDimensions: d,
            GetOffsets: function(e, t, i, n, r, o) {
              switch (console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"), i) {
                case "top":
                  return Object(s.rtl)() ? a(e, t, "top", "left", n, r, o) : a(e, t, "top", "right", n, r, o);
                case "bottom":
                  return Object(s.rtl)() ? a(e, t, "bottom", "left", n, r, o) : a(e, t, "bottom", "right", n, r, o);
                case "center top":
                  return a(e, t, "top", "center", n, r, o);
                case "center bottom":
                  return a(e, t, "bottom", "center", n, r, o);
                case "center left":
                  return a(e, t, "left", "center", n, r, o);
                case "center right":
                  return a(e, t, "right", "center", n, r, o);
                case "left bottom":
                  return a(e, t, "bottom", "left", n, r, o);
                case "right bottom":
                  return a(e, t, "bottom", "right", n, r, o);
                case "center":
                  return {
                    left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + r,
                    top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + n)
                  };
                case "reveal":
                  return {
                    left: ($eleDims.windowDims.width - $eleDims.width) / 2 + r,
                    top: $eleDims.windowDims.offset.top + n
                  };
                case "reveal full":
                  return {
                    left: $eleDims.windowDims.offset.left,
                    top: $eleDims.windowDims.offset.top
                  };
                default:
                  return {
                    left: Object(s.rtl)() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - r : $anchorDims.offset.left + r,
                    top: $anchorDims.offset.top + $anchorDims.height + n
                  }
              }
            },
            GetExplicitOffsets: a
          };

        function o(e, t, i, n, r) {
          var o, s, a, l, c = d(e);
          if (t) {
            var u = d(t);
            s = u.height + u.offset.top - (c.offset.top + c.height), o = c.offset.top - u.offset.top, a = c.offset.left - u.offset.left, l = u.width + u.offset.left - (c.offset.left + c.width)
          } else s = c.windowDims.height + c.windowDims.offset.top - (c.offset.top + c.height), o = c.offset.top - c.windowDims.offset.top, a = c.offset.left - c.windowDims.offset.left, l = c.windowDims.width - (c.offset.left + c.width);
          return s = r ? 0 : Math.min(s, 0), o = Math.min(o, 0), a = Math.min(a, 0), l = Math.min(l, 0), i ? a + l : n ? o + s : Math.sqrt(o * o + s * s + a * a + l * l)
        }

        function d(e) {
          if ((e = e.length ? e[0] : e) === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
          var t = e.getBoundingClientRect(),
            i = e.parentNode.getBoundingClientRect(),
            n = document.body.getBoundingClientRect(),
            r = window.pageYOffset,
            o = window.pageXOffset;
          return {
            width: t.width,
            height: t.height,
            offset: {
              top: t.top + r,
              left: t.left + o
            },
            parentDims: {
              width: i.width,
              height: i.height,
              offset: {
                top: i.top + r,
                left: i.left + o
              }
            },
            windowDims: {
              width: n.width,
              height: n.height,
              offset: {
                top: r,
                left: o
              }
            }
          }
        }

        function a(e, t, i, n, r, o, s) {
          var a, l, c = d(e),
            u = t ? d(t) : null;
          switch (i) {
            case "top":
              a = u.offset.top - (c.height + r);
              break;
            case "bottom":
              a = u.offset.top + u.height + r;
              break;
            case "left":
              l = u.offset.left - (c.width + o);
              break;
            case "right":
              l = u.offset.left + u.width + o
          }
          switch (i) {
            case "top":
            case "bottom":
              switch (n) {
                case "left":
                  l = u.offset.left + o;
                  break;
                case "right":
                  l = u.offset.left - c.width + u.width - o;
                  break;
                case "center":
                  l = s ? o : u.offset.left + u.width / 2 - c.width / 2 + o
              }
              break;
            case "right":
            case "left":
              switch (n) {
                case "bottom":
                  a = u.offset.top - r + u.height - c.height;
                  break;
                case "top":
                  a = u.offset.top + r;
                  break;
                case "center":
                  a = u.offset.top + r + u.height / 2 - c.height / 2
              }
          }
          return {
            top: a,
            left: l
          }
        }
      },
      "./js/foundation.util.imageLoader.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "onImagesLoaded", function() {
          return o
        });
        var n = i("jquery"),
          r = i.n(n);

        function o(e, t) {
          var i = e.length;

          function n() {
            0 === --i && t()
          }
          0 === i && t(), e.each(function() {
            if (this.complete && void 0 !== this.naturalWidth) n();
            else {
              var e = new Image,
                i = "load.zf.images error.zf.images";
              r()(e).one(i, function e(t) {
                r()(this).off(i, e), n()
              }), e.src = r()(this).attr("src")
            }
          })
        }
      },
      "./js/foundation.util.keyboard.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Keyboard", function() {
          return u
        });
        var n = i("jquery"),
          a = i.n(n),
          l = i("./js/foundation.core.utils.js"),
          r = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
          },
          c = {};

        function o(e) {
          return !!e && e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            return !(!a()(this).is(":visible") || a()(this).attr("tabindex") < 0)
          })
        }

        function s(e) {
          var t = r[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();
          return t = t.replace(/\W+/, ""), e.shiftKey && (t = "SHIFT_".concat(t)), e.ctrlKey && (t = "CTRL_".concat(t)), e.altKey && (t = "ALT_".concat(t)), t = t.replace(/_$/, "")
        }
        var u = {
          keys: function(e) {
            var t = {};
            for (var i in e) t[e[i]] = e[i];
            return t
          }(r),
          parseKey: s,
          handleKey: function(e, t, i) {
            var n, r = c[t],
              o = this.parseKey(e);
            if (!r) return console.warn("Component not defined!");
            if ((n = i[(void 0 === r.ltr ? r : Object(l.rtl)() ? a.a.extend({}, r.ltr, r.rtl) : a.a.extend({}, r.rtl, r.ltr))[o]]) && "function" == typeof n) {
              var s = n.apply();
              (i.handled || "function" == typeof i.handled) && i.handled(s)
            } else(i.unhandled || "function" == typeof i.unhandled) && i.unhandled()
          },
          findFocusable: o,
          register: function(e, t) {
            c[e] = t
          },
          trapFocus: function(e) {
            var t = o(e),
              i = t.eq(0),
              n = t.eq(-1);
            e.on("keydown.zf.trapfocus", function(e) {
              e.target === n[0] && "TAB" === s(e) ? (e.preventDefault(), i.focus()) : e.target === i[0] && "SHIFT_TAB" === s(e) && (e.preventDefault(), n.focus())
            })
          },
          releaseFocus: function(e) {
            e.off("keydown.zf.trapfocus")
          }
        }
      },
      "./js/foundation.util.mediaQuery.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "MediaQuery", function() {
          return s
        });
        var n = i("jquery"),
          o = i.n(n);

        function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }
        window.matchMedia || (window.matchMedia = function() {
          var t = window.styleMedia || window.media;
          if (!t) {
            var i, n = document.createElement("style"),
              e = document.getElementsByTagName("script")[0];
            n.type = "text/css", n.id = "matchmediajs-test", e ? e.parentNode.insertBefore(n, e) : document.head.appendChild(n), i = "getComputedStyle" in window && window.getComputedStyle(n, null) || n.currentStyle, t = {
              matchMedium: function(e) {
                var t = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                return n.styleSheet ? n.styleSheet.cssText = t : n.textContent = t, "1px" === i.width
              }
            }
          }
          return function(e) {
            return {
              matches: t.matchMedium(e || "all"),
              media: e || "all"
            }
          }
        }());
        var s = {
          queries: [],
          current: "",
          _init: function() {
            o()("meta.foundation-mq").length || o()('<meta class="foundation-mq">').appendTo(document.head);
            var e, t, i, n = o()(".foundation-mq").css("font-family");
            for (var r in i = {}, e = "string" == typeof(t = n) && (t = t.trim().slice(1, -1)) ? i = t.split("&").reduce(function(e, t) {
              var i = t.replace(/\+/g, " ").split("="),
                n = i[0],
                r = i[1];
              return n = decodeURIComponent(n), r = void 0 === r ? null : decodeURIComponent(r), e.hasOwnProperty(n) ? Array.isArray(e[n]) ? e[n].push(r) : e[n] = [e[n], r] : e[n] = r, e
            }, {}) : i) e.hasOwnProperty(r) && this.queries.push({
              name: r,
              value: "only screen and (min-width: ".concat(e[r], ")")
            });
            this.current = this._getCurrentSize(), this._watcher()
          },
          atLeast: function(e) {
            var t = this.get(e);
            return !!t && window.matchMedia(t).matches
          },
          is: function(e) {
            return 1 < (e = e.trim().split(" ")).length && "only" === e[1] ? e[0] === this._getCurrentSize() : this.atLeast(e[0])
          },
          get: function(e) {
            for (var t in this.queries)
              if (this.queries.hasOwnProperty(t)) {
                var i = this.queries[t];
                if (e === i.name) return i.value
              }
            return null
          },
          _getCurrentSize: function() {
            for (var e, t = 0; t < this.queries.length; t++) {
              var i = this.queries[t];
              window.matchMedia(i.value).matches && (e = i)
            }
            return "object" === r(e) ? e.name : e
          },
          _watcher: function() {
            var i = this;
            o()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
              var e = i._getCurrentSize(),
                t = i.current;
              e !== t && (i.current = e, o()(window).trigger("changed.zf.mediaquery", [e, t]))
            })
          }
        }
      },
      "./js/foundation.util.motion.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Move", function() {
          return o
        }), i.d(t, "Motion", function() {
          return r
        });
        var n = i("jquery"),
          a = i.n(n),
          l = i("./js/foundation.core.utils.js"),
          c = ["mui-enter", "mui-leave"],
          u = ["mui-enter-active", "mui-leave-active"],
          r = {
            animateIn: function(e, t, i) {
              s(!0, e, t, i)
            },
            animateOut: function(e, t, i) {
              s(!1, e, t, i)
            }
          };

        function o(i, n, r) {
          var o, s, a = null;
          if (0 === i) return r.apply(n), void n.trigger("finished.zf.animate", [n]).triggerHandler("finished.zf.animate", [n]);
          o = window.requestAnimationFrame(function e(t) {
            a || (a = t), s = t - a, r.apply(n), s < i ? o = window.requestAnimationFrame(e, n) : (window.cancelAnimationFrame(o), n.trigger("finished.zf.animate", [n]).triggerHandler("finished.zf.animate", [n]))
          })
        }

        function s(e, t, i, n) {
          if ((t = a()(t).eq(0)).length) {
            var r = e ? c[0] : c[1],
              o = e ? u[0] : u[1];
            s(), t.addClass(i).css("transition", "none"), requestAnimationFrame(function() {
              t.addClass(r), e && t.show()
            }), requestAnimationFrame(function() {
              t[0].offsetWidth, t.css("transition", "").addClass(o)
            }), t.one(Object(l.transitionend)(t), function() {
              e || t.hide();
              s(), n && n.apply(t)
            })
          }

          function s() {
            t[0].style.transitionDuration = 0, t.removeClass("".concat(r, " ").concat(o, " ").concat(i))
          }
        }
      },
      "./js/foundation.util.nest.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Nest", function() {
          return r
        });
        var n = i("jquery"),
          a = i.n(n),
          r = {
            Feather: function(e) {
              var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "zf";
              e.attr("role", "menubar");
              var t = e.find("li").attr({
                  role: "menuitem"
                }),
                n = "is-".concat(i, "-submenu"),
                r = "".concat(n, "-item"),
                o = "is-".concat(i, "-submenu-parent"),
                s = "accordion" !== i;
              t.each(function() {
                var e = a()(this),
                  t = e.children("ul");
                t.length && (e.addClass(o), t.addClass("submenu ".concat(n)).attr({
                  "data-submenu": ""
                }), s && (e.attr({
                  "aria-haspopup": !0,
                  "aria-label": e.children("a:first").text()
                }), "drilldown" === i && e.attr({
                  "aria-expanded": !1
                })), t.addClass("submenu ".concat(n)).attr({
                  "data-submenu": "",
                  role: "menubar"
                }), "drilldown" === i && t.attr({
                  "aria-hidden": !0
                })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item ".concat(r))
              })
            },
            Burn: function(e, t) {
              var i = "is-".concat(t, "-submenu"),
                n = "".concat(i, "-item"),
                r = "is-".concat(t, "-submenu-parent");
              e.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i, " ").concat(n, " ").concat(r, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "")
            }
          }
      },
      "./js/foundation.util.timer.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Timer", function() {
          return n
        });
        i("jquery");

        function n(t, e, i) {
          var n, r, o = this,
            s = e.duration,
            a = Object.keys(t.data())[0] || "timer",
            l = -1;
          this.isPaused = !1, this.restart = function() {
            l = -1, clearTimeout(r), this.start()
          }, this.start = function() {
            this.isPaused = !1, clearTimeout(r), l = l <= 0 ? s : l, t.data("paused", !1), n = Date.now(), r = setTimeout(function() {
              e.infinite && o.restart(), i && "function" == typeof i && i()
            }, l), t.trigger("timerstart.zf.".concat(a))
          }, this.pause = function() {
            this.isPaused = !0, clearTimeout(r), t.data("paused", !0);
            var e = Date.now();
            l -= e - n, t.trigger("timerpaused.zf.".concat(a))
          }
        }
      },
      "./js/foundation.util.touch.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Touch", function() {
          return u
        });
        var n = i("jquery"),
          r = i.n(n);

        function o(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        var s, a, l, c, u = {},
          d = !1,
          f = !1;

        function p(e) {
          if (this.removeEventListener("touchmove", h), this.removeEventListener("touchend", p), !f) {
            var t = r.a.Event("tap", c || e);
            r()(this).trigger(t)
          }
          c = null, f = d = !1
        }

        function h(e) {
          if (r.a.spotSwipe.preventDefault && e.preventDefault(), d) {
            var t, i = e.touches[0].pageX,
              n = (e.touches[0].pageY, s - i);
            f = !0, l = (new Date).getTime() - a, Math.abs(n) >= r.a.spotSwipe.moveThreshold && l <= r.a.spotSwipe.timeThreshold && (t = 0 < n ? "left" : "right"), t && (e.preventDefault(), p.apply(this, arguments), r()(this).trigger(r.a.Event("swipe", e), t).trigger(r.a.Event("swipe".concat(t), e)))
          }
        }

        function m(e) {
          1 == e.touches.length && (s = e.touches[0].pageX, e.touches[0].pageY, c = e, f = !(d = !0), a = (new Date).getTime(), this.addEventListener("touchmove", h, !1), this.addEventListener("touchend", p, !1))
        }

        function g() {
          this.addEventListener && this.addEventListener("touchstart", m, !1)
        }
        var v = function() {
          function t(e) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = e, this._init()
          }
          var e, i, n;
          return e = t, (i = [{
            key: "_init",
            value: function() {
              var e = this.$;
              e.event.special.swipe = {
                setup: g
              }, e.event.special.tap = {
                setup: g
              }, e.each(["left", "up", "down", "right"], function() {
                e.event.special["swipe".concat(this)] = {
                  setup: function() {
                    e(this).on("swipe", e.noop)
                  }
                }
              })
            }
          }]) && o(e.prototype, i), n && o(e, n), t
        }();
        u.setupSpotSwipe = function(e) {
          e.spotSwipe = new v(e)
        }, u.setupTouchHandler = function(n) {
          n.fn.addTouch = function() {
            this.each(function(e, t) {
              n(t).bind("touchstart touchmove touchend touchcancel", function(e) {
                i(e)
              })
            });
            var i = function(e) {
              var t, i = e.changedTouches[0],
                n = {
                  touchstart: "mousedown",
                  touchmove: "mousemove",
                  touchend: "mouseup"
                }[e.type];
              "MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(n, {
                bubbles: !0,
                cancelable: !0,
                screenX: i.screenX,
                screenY: i.screenY,
                clientX: i.clientX,
                clientY: i.clientY
              }) : (t = document.createEvent("MouseEvent")).initMouseEvent(n, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(t)
            }
          }
        }, u.init = function(e) {
          void 0 === e.spotSwipe && (u.setupSpotSwipe(e), u.setupTouchHandler(e))
        }
      },
      "./js/foundation.util.triggers.js": function(e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Triggers", function() {
          return u
        });
        var n = i("jquery"),
          o = i.n(n),
          r = i("./js/foundation.core.utils.js"),
          s = i("./js/foundation.util.motion.js");

        function a(e) {
          return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }
        var l = function() {
            for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
              if ("".concat(e[t], "MutationObserver") in window) return window["".concat(e[t], "MutationObserver")];
            return !1
          }(),
          c = function(t, i) {
            t.data(i).split(" ").forEach(function(e) {
              o()("#".concat(e))["close" === i ? "trigger" : "triggerHandler"]("".concat(i, ".zf.trigger"), [t])
            })
          },
          u = {
            Listeners: {
              Basic: {},
              Global: {}
            },
            Initializers: {}
          };

        function d(t, e, i) {
          var n, r = Array.prototype.slice.call(arguments, 3);
          o()(window).off(e).on(e, function(e) {
            n && clearTimeout(n), n = setTimeout(function() {
              i.apply(null, r)
            }, t || 10)
          })
        }
        u.Listeners.Basic = {
          openListener: function() {
            c(o()(this), "open")
          },
          closeListener: function() {
            o()(this).data("close") ? c(o()(this), "close") : o()(this).trigger("close.zf.trigger")
          },
          toggleListener: function() {
            o()(this).data("toggle") ? c(o()(this), "toggle") : o()(this).trigger("toggle.zf.trigger")
          },
          closeableListener: function(e) {
            e.stopPropagation();
            var t = o()(this).data("closable");
            "" !== t ? s.Motion.animateOut(o()(this), t, function() {
              o()(this).trigger("closed.zf")
            }) : o()(this).fadeOut().trigger("closed.zf")
          },
          toggleFocusListener: function() {
            var e = o()(this).data("toggle-focus");
            o()("#".concat(e)).triggerHandler("toggle.zf.trigger", [o()(this)])
          }
        }, u.Initializers.addOpenListener = function(e) {
          e.off("click.zf.trigger", u.Listeners.Basic.openListener), e.on("click.zf.trigger", "[data-open]", u.Listeners.Basic.openListener)
        }, u.Initializers.addCloseListener = function(e) {
          e.off("click.zf.trigger", u.Listeners.Basic.closeListener), e.on("click.zf.trigger", "[data-close]", u.Listeners.Basic.closeListener)
        }, u.Initializers.addToggleListener = function(e) {
          e.off("click.zf.trigger", u.Listeners.Basic.toggleListener), e.on("click.zf.trigger", "[data-toggle]", u.Listeners.Basic.toggleListener)
        }, u.Initializers.addCloseableListener = function(e) {
          e.off("close.zf.trigger", u.Listeners.Basic.closeableListener), e.on("close.zf.trigger", "[data-closeable], [data-closable]", u.Listeners.Basic.closeableListener)
        }, u.Initializers.addToggleFocusListener = function(e) {
          e.off("focus.zf.trigger blur.zf.trigger", u.Listeners.Basic.toggleFocusListener), e.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", u.Listeners.Basic.toggleFocusListener)
        }, u.Listeners.Global = {
          resizeListener: function(e) {
            l || e.each(function() {
              o()(this).triggerHandler("resizeme.zf.trigger")
            }), e.attr("data-events", "resize")
          },
          scrollListener: function(e) {
            l || e.each(function() {
              o()(this).triggerHandler("scrollme.zf.trigger")
            }), e.attr("data-events", "scroll")
          },
          closeMeListener: function(e, t) {
            var i = e.namespace.split(".")[0];
            o()("[data-".concat(i, "]")).not('[data-yeti-box="'.concat(t, '"]')).each(function() {
              var e = o()(this);
              e.triggerHandler("close.zf.trigger", [e])
            })
          }
        }, u.Initializers.addClosemeListener = function(e) {
          var t = o()("[data-yeti-box]"),
            i = ["dropdown", "tooltip", "reveal"];
          if (e && ("string" == typeof e ? i.push(e) : "object" === a(e) && "string" == typeof e[0] ? i.concat(e) : console.error("Plugin names must be strings")), t.length) {
            var n = i.map(function(e) {
              return "closeme.zf.".concat(e)
            }).join(" ");
            o()(window).off(n).on(n, u.Listeners.Global.closeMeListener)
          }
        }, u.Initializers.addResizeListener = function(e) {
          var t = o()("[data-resize]");
          t.length && d(e, "resize.zf.trigger", u.Listeners.Global.resizeListener, t)
        }, u.Initializers.addScrollListener = function(e) {
          var t = o()("[data-scroll]");
          t.length && d(e, "scroll.zf.trigger", u.Listeners.Global.scrollListener, t)
        }, u.Initializers.addMutationEventsListener = function(e) {
          if (!l) return !1;
          var t = e.find("[data-resize], [data-scroll], [data-mutate]"),
            i = function(e) {
              var t = o()(e[0].target);
              switch (e[0].type) {
                case "attributes":
                  "scroll" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("scrollme.zf.trigger", [t, window.pageYOffset]), "resize" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("resizeme.zf.trigger", [t]), "style" === e[0].attributeName && (t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [t.closest("[data-mutate]")]));
                  break;
                case "childList":
                  t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [t.closest("[data-mutate]")]);
                  break;
                default:
                  return !1
              }
            };
          if (t.length)
            for (var n = 0; n <= t.length - 1; n++) {
              new l(i).observe(t[n], {
                attributes: !0,
                childList: !0,
                characterData: !1,
                subtree: !0,
                attributeFilter: ["data-events", "style"]
              })
            }
        }, u.Initializers.addSimpleListeners = function() {
          var e = o()(document);
          u.Initializers.addOpenListener(e), u.Initializers.addCloseListener(e), u.Initializers.addToggleListener(e), u.Initializers.addCloseableListener(e), u.Initializers.addToggleFocusListener(e)
        }, u.Initializers.addGlobalListeners = function() {
          var e = o()(document);
          u.Initializers.addMutationEventsListener(e), u.Initializers.addResizeListener(), u.Initializers.addScrollListener(), u.Initializers.addClosemeListener()
        }, u.init = function(e, t) {
          Object(r.onLoad)(e(window), function() {
            !0 !== e.triggersInitialized && (u.Initializers.addSimpleListeners(), u.Initializers.addGlobalListeners(), e.triggersInitialized = !0)
          }), t && (t.Triggers = u, t.IHearYou = u.Initializers.addGlobalListeners)
        }
      },
      0: function(e, t, i) {
        e.exports = i("./js/entries/foundation.js")
      },
      jquery: function(e, t) {
        e.exports = i
      }
    })
  }),
  function(s, o, r, a) {
    function l(e, t) {
      var i = this;
      "object" == typeof t && (delete t.refresh, delete t.render, s.extend(this, t)), this.$element = s(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
      var n = (this.position + "").toLowerCase().match(/\S+/g) || [];
      if (n.length < 1 && n.push("center"), 1 == n.length && n.push(n[0]), ("top" == n[0] || "bottom" == n[0] || "left" == n[1] || "right" == n[1]) && (n = [n[1], n[0]]), this.positionX != a && (n[0] = this.positionX.toLowerCase()), this.positionY != a && (n[1] = this.positionY.toLowerCase()), i.positionX = n[0], i.positionY = n[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
        backgroundImage: "url(" + this.imageSrc + ")",
        backgroundSize: "cover",
        backgroundPosition: this.position
      }), this;
      if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
        backgroundImage: "url(" + this.imageSrc + ")",
        backgroundSize: "cover",
        backgroundPosition: this.position
      }), this;
      this.$mirror = s("<div />").prependTo("body");
      var r = this.$element.find(">.parallax-slider"),
        o = !1;
      0 == r.length ? this.$slider = s("<img />").prependTo(this.$mirror) : (this.$slider = r.prependTo(this.$mirror), o = !0), this.$mirror.addClass("parallax-mirror").css({
        visibility: "hidden",
        zIndex: this.zIndex,
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden"
      }), this.$slider.addClass("parallax-slider").one("load", function() {
        i.naturalHeight && i.naturalWidth || (i.naturalHeight = this.naturalHeight || this.height || 1, i.naturalWidth = this.naturalWidth || this.width || 1), i.aspectRatio = i.naturalWidth / i.naturalHeight, l.isSetup || l.setup(), l.sliders.push(i), l.isFresh = !1, l.requestRender()
      }), o || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < r.length) && this.$slider.trigger("load")
    }! function() {
      for (var r = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !o.requestAnimationFrame; ++t) o.requestAnimationFrame = o[e[t] + "RequestAnimationFrame"], o.cancelAnimationFrame = o[e[t] + "CancelAnimationFrame"] || o[e[t] + "CancelRequestAnimationFrame"];
      o.requestAnimationFrame || (o.requestAnimationFrame = function(e) {
        var t = (new Date).getTime(),
          i = Math.max(0, 16 - (t - r)),
          n = o.setTimeout(function() {
            e(t + i)
          }, i);
        return r = t + i, n
      }), o.cancelAnimationFrame || (o.cancelAnimationFrame = function(e) {
        clearTimeout(e)
      })
    }(), s.extend(l.prototype, {
      speed: .2,
      bleed: 0,
      zIndex: -100,
      iosFix: !0,
      androidFix: !0,
      position: "center",
      overScrollFix: !1,
      refresh: function() {
        this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
        var e = l.winHeight,
          t = l.docHeight,
          i = Math.min(this.boxOffsetTop, t - e),
          n = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
          r = this.boxHeight + (i - n) * (1 - this.speed) | 0,
          o = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
        if (r * this.aspectRatio >= this.boxWidth) {
          this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = o;
          var s = this.imageWidth - this.boxWidth;
          this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -s : isNaN(this.positionX) ? -s / 2 | 0 : Math.max(this.positionX, -s)
        } else {
          this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
          s = this.imageHeight - r;
          this.offsetBaseTop = "top" == this.positionY ? o : "bottom" == this.positionY ? o - s : isNaN(this.positionY) ? o - s / 2 | 0 : o + Math.max(this.positionY, -s)
        }
      },
      render: function() {
        var e = l.scrollTop,
          t = l.scrollLeft,
          i = this.overScrollFix ? l.overScroll : 0,
          n = e + l.winHeight;
        this.boxOffsetBottom > e && this.boxOffsetTop <= n ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - e, this.mirrorLeft = this.boxOffsetLeft - t, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
          transform: "translate3d(0px, 0px, 0px)",
          visibility: this.visibility,
          top: this.mirrorTop - i,
          left: this.mirrorLeft,
          height: this.boxHeight,
          width: this.boxWidth
        }), this.$slider.css({
          transform: "translate3d(0px, 0px, 0px)",
          position: "absolute",
          top: this.offsetTop,
          left: this.offsetLeft,
          height: this.imageHeight,
          width: this.imageWidth,
          maxWidth: "none"
        })
      }
    }), s.extend(l, {
      scrollTop: 0,
      scrollLeft: 0,
      winHeight: 0,
      winWidth: 0,
      docHeight: 1 << 30,
      docWidth: 1 << 30,
      sliders: [],
      isReady: !1,
      isFresh: !1,
      isBusy: !1,
      setup: function() {
        if (!this.isReady) {
          var e = s(r),
            n = s(o),
            t = function() {
              l.winHeight = n.height(), l.winWidth = n.width(), l.docHeight = e.height(), l.docWidth = e.width()
            },
            i = function() {
              var e = n.scrollTop(),
                t = l.docHeight - l.winHeight,
                i = l.docWidth - l.winWidth;
              l.scrollTop = Math.max(0, Math.min(t, e)), l.scrollLeft = Math.max(0, Math.min(i, n.scrollLeft())), l.overScroll = Math.max(e - t, Math.min(e, 0))
            };
          n.on("resize.px.parallax load.px.parallax", function() {
            t(), l.isFresh = !1, l.requestRender()
          }).on("scroll.px.parallax load.px.parallax", function() {
            i(), l.requestRender()
          }), t(), i(), this.isReady = !0
        }
      },
      configure: function(e) {
        "object" == typeof e && (delete e.refresh, delete e.render, s.extend(this.prototype, e))
      },
      refresh: function() {
        s.each(this.sliders, function() {
          this.refresh()
        }), this.isFresh = !0
      },
      render: function() {
        this.isFresh || this.refresh(), s.each(this.sliders, function() {
          this.render()
        })
      },
      requestRender: function() {
        var e = this;
        this.isBusy || (this.isBusy = !0, o.requestAnimationFrame(function() {
          e.render(), e.isBusy = !1
        }))
      },
      destroy: function(e) {
        var t, i = s(e).data("px.parallax");
        for (i.$mirror.remove(), t = 0; t < this.sliders.length; t += 1) this.sliders[t] == i && this.sliders.splice(t, 1);
        s(e).data("px.parallax", !1), 0 === this.sliders.length && (s(o).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, l.isSetup = !1)
      }
    });
    var e = s.fn.parallax;
    s.fn.parallax = function(i) {
      return this.each(function() {
        var e = s(this),
          t = "object" == typeof i && i;
        this == o || this == r || e.is("body") ? l.configure(t) : e.data("px.parallax") ? "object" == typeof i && s.extend(e.data("px.parallax"), t) : (t = s.extend({}, e.data(), t), e.data("px.parallax", new l(this, t))), "string" == typeof i && ("destroy" == i ? l.destroy(this) : l[i]())
      })
    }, s.fn.parallax.Constructor = l, s.fn.parallax.noConflict = function() {
      return s.fn.parallax = e, this
    }, s(r).on("ready.px.parallax.data-api", function() {
      s('[data-parallax="scroll"]').parallax()
    })
  }(jQuery, window, document),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.CodeMirror = t()
  }(this, function() {
    "use strict";

    function a(e) {
      return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
    }

    function b(e) {
      for (var t = e.childNodes.length; 0 < t; --t) e.removeChild(e.firstChild);
      return e
    }

    function _(e, t) {
      return b(e).appendChild(t)
    }

    function k(e, t, i, n) {
      var r = document.createElement(e);
      if (i && (r.className = i), n && (r.style.cssText = n), "string" == typeof t) r.appendChild(document.createTextNode(t));
      else if (t)
        for (var o = 0; o < t.length; ++o) r.appendChild(t[o]);
      return r
    }

    function d(e, t, i, n) {
      var r = k(e, t, i, n);
      return r.setAttribute("role", "presentation"), r
    }

    function g(e, t) {
      if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
      do {
        if (11 == t.nodeType && (t = t.host), t == e) return !0
      } while (t = t.parentNode)
    }

    function C() {
      var t;
      try {
        t = document.activeElement
      } catch (e) {
        t = document.body || null
      }
      for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
      return t
    }

    function n(e, t) {
      var i = e.className;
      a(t).test(i) || (e.className += (i ? " " : "") + t)
    }

    function l(e, t) {
      for (var i = e.split(" "), n = 0; n < i.length; n++) i[n] && !a(i[n]).test(t) && (t += " " + i[n]);
      return t
    }

    function v(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function() {
        return e.apply(null, t)
      }
    }

    function f(e, t, i) {
      for (var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === i && t.hasOwnProperty(n) || (t[n] = e[n]);
      return t
    }

    function S(e, t, i, n, r) {
      null == t && (-1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length));
      for (var o = n || 0, s = r || 0;;) {
        var a = e.indexOf("\t", o);
        if (a < 0 || t <= a) return s + (t - o);
        s += a - o, s += i - s % i, o = a + 1
      }
    }

    function w(e, t) {
      for (var i = 0; i < e.length; ++i)
        if (e[i] == t) return i;
      return -1
    }

    function T(e, t, i) {
      for (var n = 0, r = 0;;) {
        var o = e.indexOf("\t", n); - 1 == o && (o = e.length);
        var s = o - n;
        if (o == e.length || t <= r + s) return n + Math.min(s, t - r);
        if (r += o - n, n = o + 1, t <= (r += i - r % i)) return n
      }
    }

    function x(e) {
      for (; jo.length <= e;) jo.push(U(jo) + " ");
      return jo[e]
    }

    function U(e) {
      return e[e.length - 1]
    }

    function y(e, t) {
      for (var i = [], n = 0; n < e.length; n++) i[n] = t(e[n], n);
      return i
    }

    function r() {}

    function i(e, t) {
      var i;
      return i = Object.create ? Object.create(e) : (r.prototype = e, new r), t && f(t, i), i
    }

    function o(e) {
      return /\w/.test(e) || "Â€" < e && (e.toUpperCase() != e.toLowerCase() || Mo.test(e))
    }

    function $(e, t) {
      return t ? !!(-1 < t.source.indexOf("\\w") && o(e)) || t.test(e) : o(e)
    }

    function s(e) {
      for (var t in e)
        if (e.hasOwnProperty(t) && e[t]) return !1;
      return !0
    }

    function O(e) {
      return 768 <= e.charCodeAt(0) && Lo.test(e)
    }

    function z(e, t, i) {
      for (;
        (i < 0 ? 0 < t : t < e.length) && O(e.charAt(t));) t += i;
      return t
    }

    function j(e, t, i) {
      for (var n = i < t ? -1 : 1;;) {
        if (t == i) return t;
        var r = (t + i) / 2,
          o = n < 0 ? Math.ceil(r) : Math.floor(r);
        if (o == t) return e(o) ? t : i;
        e(o) ? i = o : t = o + n
      }
    }

    function M(e, t, i) {
      var n;
      Ao = null;
      for (var r = 0; r < e.length; ++r) {
        var o = e[r];
        if (o.from < t && o.to > t) return r;
        o.to == t && (o.from != o.to && "before" == i ? n = r : Ao = r), o.from == t && (o.from != o.to && "before" != i ? n = r : Ao = r)
      }
      return null != n ? n : Ao
    }

    function L(e, t) {
      var i = e.order;
      return null == i && (i = e.order = Eo(e.text, t)), i
    }

    function c(e, t) {
      return e._handlers && e._handlers[t] || Po
    }

    function A(e, t, i) {
      if (e.removeEventListener) e.removeEventListener(t, i, !1);
      else if (e.detachEvent) e.detachEvent("on" + t, i);
      else {
        var n = e._handlers,
          r = n && n[t];
        if (r) {
          var o = w(r, i); - 1 < o && (n[t] = r.slice(0, o).concat(r.slice(o + 1)))
        }
      }
    }

    function p(e, t) {
      var i = c(e, t);
      if (i.length)
        for (var n = Array.prototype.slice.call(arguments, 2), r = 0; r < i.length; ++r) i[r].apply(null, n)
    }

    function m(e, t, i) {
      return "string" == typeof t && (t = {
        type: t,
        preventDefault: function() {
          this.defaultPrevented = !0
        }
      }), p(e, i || t.type, e, t), u(t) || t.codemirrorIgnore
    }

    function h(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t)
        for (var i = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) - 1 == w(i, t[n]) && i.push(t[n])
    }

    function E(e, t) {
      return 0 < c(e, t).length
    }

    function e(e) {
      e.prototype.on = function(e, t) {
        qo(this, e, t)
      }, e.prototype.off = function(e, t) {
        A(this, e, t)
      }
    }

    function P(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function t(e) {
      e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }

    function u(e) {
      return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }

    function q(e) {
      P(e), t(e)
    }

    function D(e) {
      return e.target || e.srcElement
    }

    function I(e) {
      var t = e.which;
      return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), fo && e.ctrlKey && 1 == t && (t = 3), t
    }

    function N(e) {
      if (null == ko) {
        var t = k("span", "â€‹");
        _(e, k("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (ko = t.offsetWidth <= 1 && 2 < t.offsetHeight && !(Jr && eo < 8))
      }
      var i = ko ? k("span", "â€‹") : k("span", "Â ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return i.setAttribute("cm-text", ""), i
    }

    function R(e) {
      if (null != xo) return xo;
      var t = _(e, document.createTextNode("AØ®A")),
        i = go(t, 0, 1).getBoundingClientRect(),
        n = go(t, 1, 2).getBoundingClientRect();
      return b(e), !(!i || i.left == i.right) && (xo = n.right - i.right < 3)
    }

    function F(e) {
      if ("string" == typeof e && Wo.hasOwnProperty(e)) e = Wo[e];
      else if (e && "string" == typeof e.name && Wo.hasOwnProperty(e.name)) {
        var t = Wo[e.name];
        "string" == typeof t && (t = {
          name: t
        }), (e = i(t, e)).name = t.name
      } else {
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return F("application/xml");
        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return F("application/json")
      }
      return "string" == typeof e ? {
        name: e
      } : e || {
        name: "null"
      }
    }

    function H(e, t) {
      t = F(t);
      var i = Ho[t.name];
      if (!i) return H(e, "text/plain");
      var n = i(e, t);
      if (Bo.hasOwnProperty(t.name)) {
        var r = Bo[t.name];
        for (var o in r) r.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = r[o])
      }
      if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps)
        for (var s in t.modeProps) n[s] = t.modeProps[s];
      return n
    }

    function W(e, t) {
      f(t, Bo.hasOwnProperty(e) ? Bo[e] : Bo[e] = {})
    }

    function B(e, t) {
      if (!0 === t) return t;
      if (e.copyState) return e.copyState(t);
      var i = {};
      for (var n in t) {
        var r = t[n];
        r instanceof Array && (r = r.concat([])), i[n] = r
      }
      return i
    }

    function G(e, t) {
      for (var i; e.innerMode && ((i = e.innerMode(t)) && i.mode != e);) t = i.state, e = i.mode;
      return i || {
        mode: e,
        state: t
      }
    }

    function K(e, t, i) {
      return !e.startState || e.startState(t, i)
    }

    function Y(e, t) {
      if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
      for (var i = e; !i.lines;)
        for (var n = 0;; ++n) {
          var r = i.children[n],
            o = r.chunkSize();
          if (t < o) {
            i = r;
            break
          }
          t -= o
        }
      return i.lines[t]
    }

    function V(e, i, n) {
      var r = [],
        o = i.line;
      return e.iter(i.line, n.line + 1, function(e) {
        var t = e.text;
        o == n.line && (t = t.slice(0, n.ch)), o == i.line && (t = t.slice(i.ch)), r.push(t), ++o
      }), r
    }

    function Q(e, t, i) {
      var n = [];
      return e.iter(t, i, function(e) {
        n.push(e.text)
      }), n
    }

    function X(e, t) {
      var i = t - e.height;
      if (i)
        for (var n = e; n; n = n.parent) n.height += i
    }

    function Z(e) {
      if (null == e.parent) return null;
      for (var t = e.parent, i = w(t.lines, e), n = t.parent; n; n = (t = n).parent)
        for (var r = 0; n.children[r] != t; ++r) i += n.children[r].chunkSize();
      return i + t.first
    }

    function J(e, t) {
      var i = e.first;
      e: do {
        for (var n = 0; n < e.children.length; ++n) {
          var r = e.children[n],
            o = r.height;
          if (t < o) {
            e = r;
            continue e
          }
          t -= o, i += r.chunkSize()
        }
        return i
      } while (!e.lines);
      for (var s = 0; s < e.lines.length; ++s) {
        var a = e.lines[s].height;
        if (t < a) break;
        t -= a
      }
      return i + s
    }

    function ee(e, t) {
      return t >= e.first && t < e.first + e.size
    }

    function te(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }

    function ie(e, t, i) {
      return void 0 === i && (i = null), this instanceof ie ? (this.line = e, this.ch = t, void(this.sticky = i)) : new ie(e, t, i)
    }

    function ne(e, t) {
      return e.line - t.line || e.ch - t.ch
    }

    function re(e, t) {
      return e.sticky == t.sticky && 0 == ne(e, t)
    }

    function oe(e) {
      return ie(e.line, e.ch)
    }

    function se(e, t) {
      return ne(e, t) < 0 ? t : e
    }

    function ae(e, t) {
      return ne(e, t) < 0 ? e : t
    }

    function le(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }

    function ce(e, t) {
      if (t.line < e.first) return ie(e.first, 0);
      var i, n, r, o = e.first + e.size - 1;
      return t.line > o ? ie(o, Y(e, o).text.length) : (n = Y(e, (i = t).line).text.length, null == (r = i.ch) || n < r ? ie(i.line, n) : r < 0 ? ie(i.line, 0) : i)
    }

    function ue(e, t) {
      for (var i = [], n = 0; n < t.length; n++) i[n] = ce(e, t[n]);
      return i
    }

    function de(t, i, n, e) {
      var l = [t.state.modeGen],
        r = {};
      be(t, i.text, t.doc.mode, n, function(e, t) {
        return l.push(e, t)
      }, r, e);
      for (var c = n.state, o = function(e) {
        n.baseTokens = l;
        var o = t.state.overlays[e],
          s = 1,
          a = 0;
        n.state = !0, be(t, i.text, o.mode, n, function(e, t) {
          for (var i = s; a < e;) {
            var n = l[s];
            e < n && l.splice(s, 1, e, l[s + 1], n), s += 2, a = Math.min(e, n)
          }
          if (t)
            if (o.opaque) l.splice(i, s - i, e, "overlay " + t), s = i + 2;
            else
              for (; i < s; i += 2) {
                var r = l[i + 1];
                l[i + 1] = (r ? r + " " : "") + "overlay " + t
              }
        }, r), n.state = c, n.baseTokens = null, n.baseTokenPos = 1
      }, s = 0; s < t.state.overlays.length; ++s) o(s);
      return {
        styles: l,
        classes: r.bgClass || r.textClass ? r : null
      }
    }

    function fe(e, t, i) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var n = pe(e, Z(t)),
          r = t.text.length > e.options.maxHighlightLength && B(e.doc.mode, n.state),
          o = de(e, t, n);
        r && (n.state = r), t.stateAfter = n.save(!r), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), i === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
      }
      return t.styles
    }

    function pe(i, n, e) {
      var t = i.doc,
        r = i.display;
      if (!t.mode.startState) return new Ko(t, !0, n);
      var o = function(e, t, i) {
          for (var n, r, o = e.doc, s = i ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; s < a; --a) {
            if (a <= o.first) return o.first;
            var l = Y(o, a - 1),
              c = l.stateAfter;
            if (c && (!i || a + (c instanceof Go ? c.lookAhead : 0) <= o.modeFrontier)) return a;
            var u = S(l.text, null, e.options.tabSize);
            (null == r || u < n) && (r = a - 1, n = u)
          }
          return r
        }(i, n, e),
        s = o > t.first && Y(t, o - 1).stateAfter,
        a = s ? Ko.fromSaved(t, s, o) : new Ko(t, K(t.mode), o);
      return t.iter(o, n, function(e) {
        he(i, e.text, a);
        var t = a.line;
        e.stateAfter = t == n - 1 || t % 5 == 0 || t >= r.viewFrom && t < r.viewTo ? a.save() : null, a.nextLine()
      }), e && (t.modeFrontier = a.line), a
    }

    function he(e, t, i, n) {
      var r = e.doc.mode,
        o = new Uo(t, e.options.tabSize, i);
      for (o.start = o.pos = n || 0, "" == t && me(r, i.state); !o.eol();) ge(r, o, i.state), o.start = o.pos
    }

    function me(e, t) {
      if (e.blankLine) return e.blankLine(t);
      if (e.innerMode) {
        var i = G(e, t);
        return i.mode.blankLine ? i.mode.blankLine(i.state) : void 0
      }
    }

    function ge(e, t, i, n) {
      for (var r = 0; r < 10; r++) {
        n && (n[0] = G(e, i).mode);
        var o = e.token(t, i);
        if (t.pos > t.start) return o
      }
      throw new Error("Mode " + e.name + " failed to advance stream.")
    }

    function ve(e, t, i, n) {
      var r, o, s = e.doc,
        a = s.mode,
        l = Y(s, (t = ce(s, t)).line),
        c = pe(e, t.line, i),
        u = new Uo(l.text, e.options.tabSize, c);
      for (n && (o = []);
           (n || u.pos < t.ch) && !u.eol();) u.start = u.pos, r = ge(a, u, c.state), n && o.push(new Yo(u, r, B(s.mode, c.state)));
      return n ? o : new Yo(u, r, c.state)
    }

    function ye(e, t) {
      if (e)
        for (;;) {
          var i = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!i) break;
          e = e.slice(0, i.index) + e.slice(i.index + i[0].length);
          var n = i[1] ? "bgClass" : "textClass";
          null == t[n] ? t[n] = i[2] : new RegExp("(?:^|s)" + i[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + i[2])
        }
      return e
    }

    function be(e, t, i, n, r, o, s) {
      var a = i.flattenSpans;
      null == a && (a = e.options.flattenSpans);
      var l, c = 0,
        u = null,
        d = new Uo(t, e.options.tabSize, n),
        f = e.options.addModeClass && [null];
      for ("" == t && ye(me(i, n.state), o); !d.eol();) {
        if (l = d.pos > e.options.maxHighlightLength ? (a = !1, s && he(e, t, n, d.pos), d.pos = t.length, null) : ye(ge(i, d, n.state, f), o), f) {
          var p = f[0].name;
          p && (l = "m-" + (l ? p + " " + l : p))
        }
        if (!a || u != l) {
          for (; c < d.start;) r(c = Math.min(d.start, c + 5e3), u);
          u = l
        }
        d.start = d.pos
      }
      for (; c < d.pos;) {
        var h = Math.min(d.pos, c + 5e3);
        r(h, u), c = h
      }
    }

    function we(e, t, i) {
      this.marker = e, this.from = t, this.to = i
    }

    function _e(e, t) {
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var n = e[i];
          if (n.marker == t) return n
        }
    }

    function ke(e, t) {
      for (var i, n = 0; n < e.length; ++n) e[n] != t && (i || (i = [])).push(e[n]);
      return i
    }

    function xe(e, t) {
      if (t.full) return null;
      var i = ee(e, t.from.line) && Y(e, t.from.line).markedSpans,
        n = ee(e, t.to.line) && Y(e, t.to.line).markedSpans;
      if (!i && !n) return null;
      var r = t.from.ch,
        o = t.to.ch,
        s = 0 == ne(t.from, t.to),
        a = function(e, t, i) {
          var n;
          if (e)
            for (var r = 0; r < e.length; ++r) {
              var o = e[r],
                s = o.marker;
              if (null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == s.type && (!i || !o.marker.insertLeft)) {
                var a = null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                (n || (n = [])).push(new we(s, o.from, a ? null : o.to))
              }
            }
          return n
        }(i, r, s),
        l = function(e, t, i) {
          var n;
          if (e)
            for (var r = 0; r < e.length; ++r) {
              var o = e[r],
                s = o.marker;
              if (null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == s.type && (!i || o.marker.insertLeft)) {
                var a = null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t);
                (n || (n = [])).push(new we(s, a ? null : o.from - t, null == o.to ? null : o.to - t))
              }
            }
          return n
        }(n, o, s),
        c = 1 == t.text.length,
        u = U(t.text).length + (c ? r : 0);
      if (a)
        for (var d = 0; d < a.length; ++d) {
          var f = a[d];
          if (null == f.to) {
            var p = _e(l, f.marker);
            p ? c && (f.to = null == p.to ? null : p.to + u) : f.to = r
          }
        }
      if (l)
        for (var h = 0; h < l.length; ++h) {
          var m = l[h];
          if (null != m.to && (m.to += u), null == m.from) _e(a, m.marker) || (m.from = u, c && (a || (a = [])).push(m));
          else m.from += u, c && (a || (a = [])).push(m)
        }
      a && (a = Ce(a)), l && l != a && (l = Ce(l));
      var g = [a];
      if (!c) {
        var v, y = t.text.length - 2;
        if (0 < y && a)
          for (var b = 0; b < a.length; ++b) null == a[b].to && (v || (v = [])).push(new we(a[b].marker, null, null));
        for (var w = 0; w < y; ++w) g.push(v);
        g.push(l)
      }
      return g
    }

    function Ce(e) {
      for (var t = 0; t < e.length; ++t) {
        var i = e[t];
        null != i.from && i.from == i.to && !1 !== i.marker.clearWhenEmpty && e.splice(t--, 1)
      }
      return e.length ? e : null
    }

    function Se(e) {
      var t = e.markedSpans;
      if (t) {
        for (var i = 0; i < t.length; ++i) t[i].marker.detachLine(e);
        e.markedSpans = null
      }
    }

    function Te(e, t) {
      if (t) {
        for (var i = 0; i < t.length; ++i) t[i].marker.attachLine(e);
        e.markedSpans = t
      }
    }

    function $e(e) {
      return e.inclusiveLeft ? -1 : 0
    }

    function Oe(e) {
      return e.inclusiveRight ? 1 : 0
    }

    function ze(e, t) {
      var i = e.lines.length - t.lines.length;
      if (0 != i) return i;
      var n = e.find(),
        r = t.find(),
        o = ne(n.from, r.from) || $e(e) - $e(t);
      if (o) return -o;
      var s = ne(n.to, r.to) || Oe(e) - Oe(t);
      return s || t.id - e.id
    }

    function je(e, t) {
      var i, n = Qo && e.markedSpans;
      if (n)
        for (var r = void 0, o = 0; o < n.length; ++o)(r = n[o]).marker.collapsed && null == (t ? r.from : r.to) && (!i || ze(i, r.marker) < 0) && (i = r.marker);
      return i
    }

    function Me(e) {
      return je(e, !0)
    }

    function Le(e) {
      return je(e, !1)
    }

    function Ae(e, t) {
      var i, n = Qo && e.markedSpans;
      if (n)
        for (var r = 0; r < n.length; ++r) {
          var o = n[r];
          o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!i || ze(i, o.marker) < 0) && (i = o.marker)
        }
      return i
    }

    function Ee(e, t, i, n, r) {
      var o = Y(e, t),
        s = Qo && o.markedSpans;
      if (s)
        for (var a = 0; a < s.length; ++a) {
          var l = s[a];
          if (l.marker.collapsed) {
            var c = l.marker.find(0),
              u = ne(c.from, i) || $e(l.marker) - $e(r),
              d = ne(c.to, n) || Oe(l.marker) - Oe(r);
            if (!(0 <= u && d <= 0 || u <= 0 && 0 <= d) && (u <= 0 && (l.marker.inclusiveRight && r.inclusiveLeft ? 0 <= ne(c.to, i) : 0 < ne(c.to, i)) || 0 <= u && (l.marker.inclusiveRight && r.inclusiveLeft ? ne(c.from, n) <= 0 : ne(c.from, n) < 0))) return !0
          }
        }
    }

    function Pe(e) {
      for (var t; t = Me(e);) e = t.find(-1, !0).line;
      return e
    }

    function qe(e, t) {
      var i = Y(e, t),
        n = Pe(i);
      return i == n ? t : Z(n)
    }

    function De(e, t) {
      if (t > e.lastLine()) return t;
      var i, n = Y(e, t);
      if (!Ie(e, n)) return t;
      for (; i = Le(n);) n = i.find(1, !0).line;
      return Z(n) + 1
    }

    function Ie(e, t) {
      var i = Qo && t.markedSpans;
      if (i)
        for (var n = void 0, r = 0; r < i.length; ++r)
          if ((n = i[r]).marker.collapsed) {
            if (null == n.from) return !0;
            if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && Ne(e, t, n)) return !0
          }
    }

    function Ne(e, t, i) {
      if (null == i.to) {
        var n = i.marker.find(1, !0);
        return Ne(e, n.line, _e(n.line.markedSpans, i.marker))
      }
      if (i.marker.inclusiveRight && i.to == t.text.length) return !0;
      for (var r = void 0, o = 0; o < t.markedSpans.length; ++o)
        if ((r = t.markedSpans[o]).marker.collapsed && !r.marker.widgetNode && r.from == i.to && (null == r.to || r.to != i.from) && (r.marker.inclusiveLeft || i.marker.inclusiveRight) && Ne(e, t, r)) return !0
    }

    function Re(e) {
      for (var t = 0, i = (e = Pe(e)).parent, n = 0; n < i.lines.length; ++n) {
        var r = i.lines[n];
        if (r == e) break;
        t += r.height
      }
      for (var o = i.parent; o; o = (i = o).parent)
        for (var s = 0; s < o.children.length; ++s) {
          var a = o.children[s];
          if (a == i) break;
          t += a.height
        }
      return t
    }

    function Fe(e) {
      if (0 == e.height) return 0;
      for (var t, i = e.text.length, n = e; t = Me(n);) {
        var r = t.find(0, !0);
        n = r.from.line, i += r.from.ch - r.to.ch
      }
      for (n = e; t = Le(n);) {
        var o = t.find(0, !0);
        i -= n.text.length - o.from.ch, i += (n = o.to.line).text.length - o.to.ch
      }
      return i
    }

    function He(e) {
      var i = e.display,
        t = e.doc;
      i.maxLine = Y(t, t.first), i.maxLineLength = Fe(i.maxLine), i.maxLineChanged = !0, t.iter(function(e) {
        var t = Fe(e);
        t > i.maxLineLength && (i.maxLineLength = t, i.maxLine = e)
      })
    }

    function We(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var i = t.addModeClass ? es : Jo;
      return i[e] || (i[e] = e.replace(/\S+/g, "cm-$&"))
    }

    function Be(e, t) {
      var i = d("span", null, null, to ? "padding-right: .1px" : null),
        n = {
          pre: d("pre", [i], "CodeMirror-line"),
          content: i,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
      t.measure = {};
      for (var r = 0; r <= (t.rest ? t.rest.length : 0); r++) {
        var o = r ? t.rest[r - 1] : t.line,
          s = void 0;
        n.pos = 0, n.addToken = Ge, R(e.display.measure) && (s = L(o, e.doc.direction)) && (n.addToken = Ke(n.addToken, s)), n.map = [], Ve(o, n, fe(e, o, t != e.display.externalMeasured && Z(o))), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = l(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = l(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(N(e.display.measure))), 0 == r ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}))
      }
      if (to) {
        var a = n.content.lastChild;
        (/\bcm-tab\b/.test(a.className) || a.querySelector && a.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
      }
      return p(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = l(n.pre.className, n.textClass || "")), n
    }

    function Ue(e) {
      var t = k("span", "â€¢", "cm-invalidchar");
      return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
    }

    function Ge(e, t, i, n, r, o, s) {
      if (t) {
        var a, l = e.splitSpaces ? function(e, t) {
            if (1 < e.length && !/  /.test(e)) return e;
            for (var i = t, n = "", r = 0; r < e.length; r++) {
              var o = e.charAt(r);
              " " != o || !i || r != e.length - 1 && 32 != e.charCodeAt(r + 1) || (o = "Â "), n += o, i = " " == o
            }
            return n
          }(t, e.trailingSpace) : t,
          c = e.cm.state.specialChars,
          u = !1;
        if (c.test(t)) {
          a = document.createDocumentFragment();
          for (var d = 0;;) {
            c.lastIndex = d;
            var f = c.exec(t),
              p = f ? f.index - d : t.length - d;
            if (p) {
              var h = document.createTextNode(l.slice(d, d + p));
              Jr && eo < 9 ? a.appendChild(k("span", [h])) : a.appendChild(h), e.map.push(e.pos, e.pos + p, h), e.col += p, e.pos += p
            }
            if (!f) break;
            d += p + 1;
            var m = void 0;
            if ("\t" == f[0]) {
              var g = e.cm.options.tabSize,
                v = g - e.col % g;
              (m = a.appendChild(k("span", x(v), "cm-tab"))).setAttribute("role", "presentation"), m.setAttribute("cm-text", "\t"), e.col += v
            } else "\r" == f[0] || "\n" == f[0] ? (m = a.appendChild(k("span", "\r" == f[0] ? "â" : "â¤", "cm-invalidchar"))).setAttribute("cm-text", f[0]) : ((m = e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text", f[0]), Jr && eo < 9 ? a.appendChild(k("span", [m])) : a.appendChild(m)), e.col += 1;
            e.map.push(e.pos, e.pos + 1, m), e.pos++
          }
        } else e.col += t.length, a = document.createTextNode(l), e.map.push(e.pos, e.pos + t.length, a), Jr && eo < 9 && (u = !0), e.pos += t.length;
        if (e.trailingSpace = 32 == l.charCodeAt(t.length - 1), i || n || r || u || o) {
          var y = i || "";
          n && (y += n), r && (y += r);
          var b = k("span", [a], y, o);
          if (s)
            for (var w in s) s.hasOwnProperty(w) && "style" != w && "class" != w && b.setAttribute(w, s[w]);
          return e.content.appendChild(b)
        }
        e.content.appendChild(a)
      }
    }

    function Ke(d, f) {
      return function(e, t, i, n, r, o, s) {
        i = i ? i + " cm-force-border" : "cm-force-border";
        for (var a = e.pos, l = a + t.length;;) {
          for (var c = void 0, u = 0; u < f.length && !((c = f[u]).to > a && c.from <= a); u++);
          if (c.to >= l) return d(e, t, i, n, r, o, s);
          d(e, t.slice(0, c.to - a), i, n, null, o, s), n = null, t = t.slice(c.to - a), a = c.to
        }
      }
    }

    function Ye(e, t, i, n) {
      var r = !n && i.widgetNode;
      r && e.map.push(e.pos, e.pos + t, r), !n && e.cm.display.input.needsContentAttribute && (r || (r = e.content.appendChild(document.createElement("span"))), r.setAttribute("cm-marker", i.id)), r && (e.cm.display.input.setUneditable(r), e.content.appendChild(r)), e.pos += t, e.trailingSpace = !1
    }

    function Ve(e, t, i) {
      var n = e.markedSpans,
        r = e.text,
        o = 0;
      if (n)
        for (var s, a, l, c, u, d, f, p = r.length, h = 0, m = 1, g = "", v = 0;;) {
          if (v == h) {
            l = c = u = a = "", d = f = null, v = 1 / 0;
            for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
              var _ = n[w],
                k = _.marker;
              if ("bookmark" == k.type && _.from == h && k.widgetNode) y.push(k);
              else if (_.from <= h && (null == _.to || _.to > h || k.collapsed && _.to == h && _.from == h)) {
                if (null != _.to && _.to != h && v > _.to && (v = _.to, c = ""), k.className && (l += " " + k.className), k.css && (a = (a ? a + ";" : "") + k.css), k.startStyle && _.from == h && (u += " " + k.startStyle), k.endStyle && _.to == v && (b || (b = [])).push(k.endStyle, _.to), k.title && ((f || (f = {})).title = k.title), k.attributes)
                  for (var x in k.attributes)(f || (f = {}))[x] = k.attributes[x];
                k.collapsed && (!d || ze(d.marker, k) < 0) && (d = _)
              } else _.from > h && v > _.from && (v = _.from)
            }
            if (b)
              for (var C = 0; C < b.length; C += 2) b[C + 1] == v && (c += " " + b[C]);
            if (!d || d.from == h)
              for (var S = 0; S < y.length; ++S) Ye(t, 0, y[S]);
            if (d && (d.from || 0) == h) {
              if (Ye(t, (null == d.to ? p + 1 : d.to) - h, d.marker, null == d.from), null == d.to) return;
              d.to == h && (d = !1)
            }
          }
          if (p <= h) break;
          for (var T = Math.min(p, v);;) {
            if (g) {
              var $ = h + g.length;
              if (!d) {
                var O = T < $ ? g.slice(0, T - h) : g;
                t.addToken(t, O, s ? s + l : l, u, h + O.length == v ? c : "", a, f)
              }
              if (T <= $) {
                g = g.slice(T - h), h = T;
                break
              }
              h = $, u = ""
            }
            g = r.slice(o, o = i[m++]), s = We(i[m++], t.cm.options)
          }
        } else
        for (var z = 1; z < i.length; z += 2) t.addToken(t, r.slice(o, o = i[z]), We(i[z + 1], t.cm.options))
    }

    function Qe(e, t, i) {
      this.line = t, this.rest = function(e) {
        for (var t, i; t = Le(e);) e = t.find(1, !0).line, (i || (i = [])).push(e);
        return i
      }(t), this.size = this.rest ? Z(U(this.rest)) - i + 1 : 1, this.node = this.text = null, this.hidden = Ie(e, t)
    }

    function Xe(e, t, i) {
      for (var n, r = [], o = t; o < i; o = n) {
        var s = new Qe(e.doc, Y(e.doc, o), o);
        n = o + s.size, r.push(s)
      }
      return r
    }

    function Ze(e, t) {
      var i = c(e, t);
      if (i.length) {
        var n, r = Array.prototype.slice.call(arguments, 2);
        ts ? n = ts.delayedCallbacks : is ? n = is : (n = is = [], setTimeout(Je, 0));
        for (var o = function(e) {
          n.push(function() {
            return i[e].apply(null, r)
          })
        }, s = 0; s < i.length; ++s) o(s)
      }
    }

    function Je() {
      var e = is;
      is = null;
      for (var t = 0; t < e.length; ++t) e[t]()
    }

    function et(e, t, i, n) {
      for (var r = 0; r < t.changes.length; r++) {
        var o = t.changes[r];
        "text" == o ? (s = e, void 0, l = (a = t).text.className, c = it(s, a), a.text == a.node && (a.node = c.pre), a.text.parentNode.replaceChild(c.pre, a.text), a.text = c.pre, c.bgClass != a.bgClass || c.textClass != a.textClass ? (a.bgClass = c.bgClass, a.textClass = c.textClass, nt(s, a)) : l && (a.text.className = l)) : "gutter" == o ? rt(e, t, i, n) : "class" == o ? nt(e, t) : "widget" == o && ot(e, t, n)
      }
      var s, a, l, c;
      t.changes = null
    }

    function tt(e) {
      return e.node == e.text && (e.node = k("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), Jr && eo < 8 && (e.node.style.zIndex = 2)), e.node
    }

    function it(e, t) {
      var i = e.display.externalMeasured;
      return i && i.line == t.line ? (e.display.externalMeasured = null, t.measure = i.measure, i.built) : Be(e, t)
    }

    function nt(e, t) {
      (function(e, t) {
        var i = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (i && (i += " CodeMirror-linebackground"), t.background) i ? t.background.className = i : (t.background.parentNode.removeChild(t.background), t.background = null);
        else if (i) {
          var n = tt(t);
          t.background = n.insertBefore(k("div", null, i), n.firstChild), e.display.input.setUneditable(t.background)
        }
      })(e, t), t.line.wrapClass ? tt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
      var i = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
      t.text.className = i || ""
    }

    function rt(e, t, i, n) {
      if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
        var r = tt(t);
        t.gutterBackground = k("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), r.insertBefore(t.gutterBackground, t.text)
      }
      var o = t.line.gutterMarkers;
      if (e.options.lineNumbers || o) {
        var s = tt(t),
          a = t.gutter = k("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
        if (e.display.input.setUneditable(a), s.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(k("div", te(e.options, i), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
          for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
            var c = e.display.gutterSpecs[l].className,
              u = o.hasOwnProperty(c) && o[c];
            u && a.appendChild(k("div", [u], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[c] + "px; width: " + n.gutterWidth[c] + "px"))
          }
      }
    }

    function ot(e, t, i) {
      t.alignable && (t.alignable = null);
      for (var n = t.node.firstChild, r = void 0; n; n = r) r = n.nextSibling, "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
      st(e, t, i)
    }

    function st(e, t, i) {
      if (at(e, t.line, t, i, !0), t.rest)
        for (var n = 0; n < t.rest.length; n++) at(e, t.rest[n], t, i, !1)
    }

    function at(e, t, i, n, r) {
      if (t.widgets)
        for (var o = tt(i), s = 0, a = t.widgets; s < a.length; ++s) {
          var l = a[s],
            c = k("div", [l.node], "CodeMirror-linewidget");
          l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), lt(l, c, i, n), e.display.input.setUneditable(c), r && l.above ? o.insertBefore(c, i.gutter || i.text) : o.appendChild(c), Ze(l, "redraw")
        }
    }

    function lt(e, t, i, n) {
      if (e.noHScroll) {
        (i.alignable || (i.alignable = [])).push(t);
        var r = n.wrapperWidth;
        t.style.left = n.fixedPos + "px", e.coverGutter || (r -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = r + "px"
      }
      e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
    }

    function ct(e) {
      if (null != e.height) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;
      if (!g(document.body, e.node)) {
        var i = "position: relative;";
        e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"), _(t.display.measure, k("div", [e.node], null, i))
      }
      return e.height = e.node.parentNode.offsetHeight
    }

    function ut(e, t) {
      for (var i = D(t); i != e.wrapper; i = i.parentNode)
        if (!i || 1 == i.nodeType && "true" == i.getAttribute("cm-ignore-events") || i.parentNode == e.sizer && i != e.mover) return !0
    }

    function dt(e) {
      return e.lineSpace.offsetTop
    }

    function ft(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }

    function pt(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = _(e.measure, k("pre", "x")),
        i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
        n = {
          left: parseInt(i.paddingLeft),
          right: parseInt(i.paddingRight)
        };
      return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
    }

    function ht(e) {
      return So - e.display.nativeBarWidth
    }

    function mt(e) {
      return e.display.scroller.clientWidth - ht(e) - e.display.barWidth
    }

    function gt(e) {
      return e.display.scroller.clientHeight - ht(e) - e.display.barHeight
    }

    function vt(e, t, i) {
      if (e.line == t) return {
        map: e.measure.map,
        cache: e.measure.cache
      };
      for (var n = 0; n < e.rest.length; n++)
        if (e.rest[n] == t) return {
          map: e.measure.maps[n],
          cache: e.measure.caches[n]
        };
      for (var r = 0; r < e.rest.length; r++)
        if (Z(e.rest[r]) > i) return {
          map: e.measure.maps[r],
          cache: e.measure.caches[r],
          before: !0
        }
    }

    function yt(e, t, i, n) {
      return _t(e, wt(e, t), i, n)
    }

    function bt(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Yt(e, t)];
      var i = e.display.externalMeasured;
      return i && t >= i.lineN && t < i.lineN + i.size ? i : void 0
    }

    function wt(e, t) {
      var i = Z(t),
        n = bt(e, i);
      n && !n.text ? n = null : n && n.changes && (et(e, n, i, Wt(e)), e.curOp.forceUpdate = !0), n || (n = function(e, t) {
        var i = Z(t = Pe(t)),
          n = e.display.externalMeasured = new Qe(e.doc, t, i);
        n.lineN = i;
        var r = n.built = Be(e, n);
        return n.text = r.pre, _(e.display.lineMeasure, r.pre), n
      }(e, t));
      var r = vt(n, t, i);
      return {
        line: t,
        view: n,
        rect: null,
        map: r.map,
        cache: r.cache,
        before: r.before,
        hasHeights: !1
      }
    }

    function _t(e, t, i, n, r) {
      t.before && (i = -1);
      var o, s = i + (n || "");
      return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function(e, t, i) {
        var n = e.options.lineWrapping,
          r = n && mt(e);
        if (!t.measure.heights || n && t.measure.width != r) {
          var o = t.measure.heights = [];
          if (n) {
            t.measure.width = r;
            for (var s = t.text.firstChild.getClientRects(), a = 0; a < s.length - 1; a++) {
              var l = s[a],
                c = s[a + 1];
              2 < Math.abs(l.bottom - c.bottom) && o.push((l.bottom + c.top) / 2 - i.top)
            }
          }
          o.push(i.bottom - i.top)
        }
      }(e, t.view, t.rect), t.hasHeights = !0), (o = function(e, t, i, n) {
        var r, o = kt(t.map, i, n),
          s = o.node,
          a = o.start,
          l = o.end,
          c = o.collapse;
        if (3 == s.nodeType) {
          for (var u = 0; u < 4; u++) {
            for (; a && O(t.line.text.charAt(o.coverStart + a));) --a;
            for (; o.coverStart + l < o.coverEnd && O(t.line.text.charAt(o.coverStart + l));) ++l;
            if ((r = Jr && eo < 9 && 0 == a && l == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : xt(go(s, a, l).getClientRects(), n)).left || r.right || 0 == a) break;
            l = a, a -= 1, c = "right"
          }
          Jr && eo < 11 && (r = function(e, t) {
            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || ! function(e) {
              if (null != Fo) return Fo;
              var t = _(e, k("span", "x")),
                i = t.getBoundingClientRect(),
                n = go(t, 0, 1).getBoundingClientRect();
              return Fo = 1 < Math.abs(i.left - n.left)
            }(e)) return t;
            var i = screen.logicalXDPI / screen.deviceXDPI,
              n = screen.logicalYDPI / screen.deviceYDPI;
            return {
              left: t.left * i,
              right: t.right * i,
              top: t.top * n,
              bottom: t.bottom * n
            }
          }(e.display.measure, r))
        } else {
          var d;
          0 < a && (c = n = "right"), r = e.options.lineWrapping && 1 < (d = s.getClientRects()).length ? d["right" == n ? d.length - 1 : 0] : s.getBoundingClientRect()
        }
        if (Jr && eo < 9 && !a && (!r || !r.left && !r.right)) {
          var f = s.parentNode.getClientRects()[0];
          r = f ? {
            left: f.left,
            right: f.left + Ht(e.display),
            top: f.top,
            bottom: f.bottom
          } : ns
        }
        for (var p = r.top - t.rect.top, h = r.bottom - t.rect.top, m = (p + h) / 2, g = t.view.measure.heights, v = 0; v < g.length - 1 && !(m < g[v]); v++);
        var y = v ? g[v - 1] : 0,
          b = g[v],
          w = {
            left: ("right" == c ? r.right : r.left) - t.rect.left,
            right: ("left" == c ? r.left : r.right) - t.rect.left,
            top: y,
            bottom: b
          };
        return r.left || r.right || (w.bogus = !0), e.options.singleCursorHeightPerLine || (w.rtop = p, w.rbottom = h), w
      }(e, t, i, n)).bogus || (t.cache[s] = o)), {
        left: o.left,
        right: o.right,
        top: r ? o.rtop : o.top,
        bottom: r ? o.rbottom : o.bottom
      }
    }

    function kt(e, t, i) {
      for (var n, r, o, s, a, l, c = 0; c < e.length; c += 3)
        if (a = e[c], l = e[c + 1], t < a ? (r = 0, o = 1, s = "left") : t < l ? o = (r = t - a) + 1 : (c == e.length - 3 || t == l && e[c + 3] > t) && (r = (o = l - a) - 1, l <= t && (s = "right")), null != r) {
          if (n = e[c + 2], a == l && i == (n.insertLeft ? "left" : "right") && (s = i), "left" == i && 0 == r)
            for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) n = e[2 + (c -= 3)], s = "left";
          if ("right" == i && r == l - a)
            for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) n = e[(c += 3) + 2], s = "right";
          break
        }
      return {
        node: n,
        start: r,
        end: o,
        collapse: s,
        coverStart: a,
        coverEnd: l
      }
    }

    function xt(e, t) {
      var i = ns;
      if ("left" == t)
        for (var n = 0; n < e.length && (i = e[n]).left == i.right; n++);
      else
        for (var r = e.length - 1; 0 <= r && (i = e[r]).left == i.right; r--);
      return i
    }

    function Ct(e) {
      if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
    }

    function St(e) {
      e.display.externalMeasure = null, b(e.display.lineMeasure);
      for (var t = 0; t < e.display.view.length; t++) Ct(e.display.view[t])
    }

    function Tt(e) {
      St(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
    }

    function $t() {
      return no && co ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }

    function Ot() {
      return no && co ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function zt(e) {
      var t = 0;
      if (e.widgets)
        for (var i = 0; i < e.widgets.length; ++i) e.widgets[i].above && (t += ct(e.widgets[i]));
      return t
    }

    function jt(e, t, i, n, r) {
      if (!r) {
        var o = zt(t);
        i.top += o, i.bottom += o
      }
      if ("line" == n) return i;
      n || (n = "local");
      var s = Re(t);
      if ("local" == n ? s += dt(e.display) : s -= e.display.viewOffset, "page" == n || "window" == n) {
        var a = e.display.lineSpace.getBoundingClientRect();
        s += a.top + ("window" == n ? 0 : Ot());
        var l = a.left + ("window" == n ? 0 : $t());
        i.left += l, i.right += l
      }
      return i.top += s, i.bottom += s, i
    }

    function Mt(e, t, i) {
      if ("div" == i) return t;
      var n = t.left,
        r = t.top;
      if ("page" == i) n -= $t(), r -= Ot();
      else if ("local" == i || !i) {
        var o = e.display.sizer.getBoundingClientRect();
        n += o.left, r += o.top
      }
      var s = e.display.lineSpace.getBoundingClientRect();
      return {
        left: n - s.left,
        top: r - s.top
      }
    }

    function Lt(e, t, i, n, r) {
      return n || (n = Y(e.doc, t.line)), jt(e, n, yt(e, n, t.ch, r), i)
    }

    function At(n, e, r, o, s, a) {
      function l(e, t) {
        var i = _t(n, s, e, t ? "right" : "left", a);
        return t ? i.left = i.right : i.right = i.left, jt(n, o, i, r)
      }

      function t(e, t, i) {
        return l(i ? e - 1 : e, 1 == c[t].level != i)
      }
      o = o || Y(n.doc, e.line), s || (s = wt(n, o));
      var c = L(o, n.doc.direction),
        i = e.ch,
        u = e.sticky;
      if (i >= o.text.length ? (i = o.text.length, u = "before") : i <= 0 && (i = 0, u = "after"), !c) return l("before" == u ? i - 1 : i, "before" == u);
      var d = M(c, i, u),
        f = Ao,
        p = t(i, d, "before" == u);
      return null != f && (p.other = t(i, f, "before" != u)), p
    }

    function Et(e, t) {
      var i = 0;
      t = ce(e.doc, t), e.options.lineWrapping || (i = Ht(e.display) * t.ch);
      var n = Y(e.doc, t.line),
        r = Re(n) + dt(e.display);
      return {
        left: i,
        right: i,
        top: r,
        bottom: r + n.height
      }
    }

    function Pt(e, t, i, n, r) {
      var o = ie(e, t, i);
      return o.xRel = r, n && (o.outside = !0), o
    }

    function qt(e, t, i) {
      var n = e.doc;
      if ((i += e.display.viewOffset) < 0) return Pt(n.first, 0, null, !0, -1);
      var r = J(n, i),
        o = n.first + n.size - 1;
      if (o < r) return Pt(n.first + n.size - 1, Y(n, o).text.length, null, !0, 1);
      t < 0 && (t = 0);
      for (var s = Y(n, r);;) {
        var a = Rt(e, s, r, t, i),
          l = Ae(s, a.ch + (0 < a.xRel ? 1 : 0));
        if (!l) return a;
        var c = l.find(1);
        if (c.line == r) return c;
        s = Y(n, r = c.line)
      }
    }

    function Dt(t, e, i, n) {
      n -= zt(e);
      var r = e.text.length,
        o = j(function(e) {
          return _t(t, i, e - 1).bottom <= n
        }, r, 0);
      return {
        begin: o,
        end: r = j(function(e) {
          return _t(t, i, e).top > n
        }, o, r)
      }
    }

    function It(e, t, i, n) {
      return i || (i = wt(e, t)), Dt(e, t, i, jt(e, t, _t(e, i, n), "line").top)
    }

    function Nt(e, t, i, n) {
      return !(e.bottom <= i) && (e.top > i || (n ? e.left : e.right) > t)
    }

    function Rt(i, e, t, n, r) {
      r -= Re(e);
      var o = wt(i, e),
        s = zt(e),
        a = 0,
        l = e.text.length,
        c = !0,
        u = L(e, i.doc.direction);
      if (u) {
        var d = (i.options.lineWrapping ? function(e, t, i, n, r, o, s) {
          var a = Dt(e, t, n, s),
            l = a.begin,
            c = a.end;
          /\s/.test(t.text.charAt(c - 1)) && c--;
          for (var u = null, d = null, f = 0; f < r.length; f++) {
            var p = r[f];
            if (!(p.from >= c || p.to <= l)) {
              var h = 1 != p.level,
                m = _t(e, n, h ? Math.min(c, p.to) - 1 : Math.max(l, p.from)).right,
                g = m < o ? o - m + 1e9 : m - o;
              (!u || g < d) && (u = p, d = g)
            }
          }
          return u || (u = r[r.length - 1]), u.from < l && (u = {
            from: l,
            to: u.to,
            level: u.level
          }), u.to > c && (u = {
            from: u.from,
            to: c,
            level: u.level
          }), u
        } : function(n, r, o, s, a, l, c) {
          var e = j(function(e) {
              var t = a[e],
                i = 1 != t.level;
              return Nt(At(n, ie(o, i ? t.to : t.from, i ? "before" : "after"), "line", r, s), l, c, !0)
            }, 0, a.length - 1),
            t = a[e];
          if (0 < e) {
            var i = 1 != t.level,
              u = At(n, ie(o, i ? t.from : t.to, i ? "after" : "before"), "line", r, s);
            Nt(u, l, c, !0) && u.top > c && (t = a[e - 1])
          }
          return t
        })(i, e, t, o, u, n, r);
        a = (c = 1 != d.level) ? d.from : d.to - 1, l = c ? d.to : d.from - 1
      }
      var f, p, h = null,
        m = null,
        g = j(function(e) {
          var t = _t(i, o, e);
          return t.top += s, t.bottom += s, !!Nt(t, n, r, !1) && (t.top <= r && t.left <= n && (h = e, m = t), !0)
        }, a, l),
        v = !1;
      if (m) {
        var y = n - m.left < m.right - n,
          b = y == c;
        g = h + (b ? 0 : 1), p = b ? "after" : "before", f = y ? m.left : m.right
      } else {
        c || g != l && g != a || g++, p = 0 == g ? "after" : g == e.text.length ? "before" : _t(i, o, g - (c ? 1 : 0)).bottom + s <= r == c ? "after" : "before";
        var w = At(i, ie(t, g, p), "line", e, o);
        f = w.left, v = r < w.top || r >= w.bottom
      }
      return Pt(t, g = z(e.text, g, 1), p, v, n - f)
    }

    function Ft(e) {
      if (null != e.cachedTextHeight) return e.cachedTextHeight;
      if (null == Zo) {
        Zo = k("pre");
        for (var t = 0; t < 49; ++t) Zo.appendChild(document.createTextNode("x")), Zo.appendChild(k("br"));
        Zo.appendChild(document.createTextNode("x"))
      }
      _(e.measure, Zo);
      var i = Zo.offsetHeight / 50;
      return 3 < i && (e.cachedTextHeight = i), b(e.measure), i || 1
    }

    function Ht(e) {
      if (null != e.cachedCharWidth) return e.cachedCharWidth;
      var t = k("span", "xxxxxxxxxx"),
        i = k("pre", [t]);
      _(e.measure, i);
      var n = t.getBoundingClientRect(),
        r = (n.right - n.left) / 10;
      return 2 < r && (e.cachedCharWidth = r), r || 10
    }

    function Wt(e) {
      for (var t = e.display, i = {}, n = {}, r = t.gutters.clientLeft, o = t.gutters.firstChild, s = 0; o; o = o.nextSibling, ++s) {
        var a = e.display.gutterSpecs[s].className;
        i[a] = o.offsetLeft + o.clientLeft + r, n[a] = o.clientWidth
      }
      return {
        fixedPos: Bt(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: i,
        gutterWidth: n,
        wrapperWidth: t.wrapper.clientWidth
      }
    }

    function Bt(e) {
      return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }

    function Ut(n) {
      var r = Ft(n.display),
        o = n.options.lineWrapping,
        s = o && Math.max(5, n.display.scroller.clientWidth / Ht(n.display) - 3);
      return function(e) {
        if (Ie(n.doc, e)) return 0;
        var t = 0;
        if (e.widgets)
          for (var i = 0; i < e.widgets.length; i++) e.widgets[i].height && (t += e.widgets[i].height);
        return o ? t + (Math.ceil(e.text.length / s) || 1) * r : t + r
      }
    }

    function Gt(e) {
      var t = e.doc,
        i = Ut(e);
      t.iter(function(e) {
        var t = i(e);
        t != e.height && X(e, t)
      })
    }

    function Kt(e, t, i, n) {
      var r = e.display;
      if (!i && "true" == D(t).getAttribute("cm-not-content")) return null;
      var o, s, a = r.lineSpace.getBoundingClientRect();
      try {
        o = t.clientX - a.left, s = t.clientY - a.top
      } catch (t) {
        return null
      }
      var l, c = qt(e, o, s);
      if (n && 1 == c.xRel && (l = Y(e.doc, c.line).text).length == c.ch) {
        var u = S(l, l.length, e.options.tabSize) - l.length;
        c = ie(c.line, Math.max(0, Math.round((o - pt(e.display).left) / Ht(e.display)) - u))
      }
      return c
    }

    function Yt(e, t) {
      if (t >= e.display.viewTo) return null;
      if ((t -= e.display.viewFrom) < 0) return null;
      for (var i = e.display.view, n = 0; n < i.length; n++)
        if ((t -= i[n].size) < 0) return n
    }

    function Vt(e, t, i, n) {
      null == t && (t = e.doc.first), null == i && (i = e.doc.first + e.doc.size), n || (n = 0);
      var r = e.display;
      if (n && i < r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers > t) && (r.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= r.viewTo) Qo && qe(e.doc, t) < r.viewTo && Xt(e);
      else if (i <= r.viewFrom) Qo && De(e.doc, i + n) > r.viewFrom ? Xt(e) : (r.viewFrom += n, r.viewTo += n);
      else if (t <= r.viewFrom && i >= r.viewTo) Xt(e);
      else if (t <= r.viewFrom) {
        var o = Zt(e, i, i + n, 1);
        o ? (r.view = r.view.slice(o.index), r.viewFrom = o.lineN, r.viewTo += n) : Xt(e)
      } else if (i >= r.viewTo) {
        var s = Zt(e, t, t, -1);
        s ? (r.view = r.view.slice(0, s.index), r.viewTo = s.lineN) : Xt(e)
      } else {
        var a = Zt(e, t, t, -1),
          l = Zt(e, i, i + n, 1);
        a && l ? (r.view = r.view.slice(0, a.index).concat(Xe(e, a.lineN, l.lineN)).concat(r.view.slice(l.index)), r.viewTo += n) : Xt(e)
      }
      var c = r.externalMeasured;
      c && (i < c.lineN ? c.lineN += n : t < c.lineN + c.size && (r.externalMeasured = null))
    }

    function Qt(e, t, i) {
      e.curOp.viewChanged = !0;
      var n = e.display,
        r = e.display.externalMeasured;
      if (r && t >= r.lineN && t < r.lineN + r.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
        var o = n.view[Yt(e, t)];
        if (null != o.node) {
          var s = o.changes || (o.changes = []); - 1 == w(s, i) && s.push(i)
        }
      }
    }

    function Xt(e) {
      e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
    }

    function Zt(e, t, i, n) {
      var r, o = Yt(e, t),
        s = e.display.view;
      if (!Qo || i == e.doc.first + e.doc.size) return {
        index: o,
        lineN: i
      };
      for (var a = e.display.viewFrom, l = 0; l < o; l++) a += s[l].size;
      if (a != t) {
        if (0 < n) {
          if (o == s.length - 1) return null;
          r = a + s[o].size - t, o++
        } else r = a - t;
        t += r, i += r
      }
      for (; qe(e.doc, i) != i;) {
        if (o == (n < 0 ? 0 : s.length - 1)) return null;
        i += n * s[o - (n < 0 ? 1 : 0)].size, o += n
      }
      return {
        index: o,
        lineN: i
      }
    }

    function Jt(e) {
      for (var t = e.display.view, i = 0, n = 0; n < t.length; n++) {
        var r = t[n];
        r.hidden || r.node && !r.changes || ++i
      }
      return i
    }

    function ei(e) {
      e.display.input.showSelection(e.display.input.prepareSelection())
    }

    function ti(e, t) {
      void 0 === t && (t = !0);
      for (var i = e.doc, n = {}, r = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), s = 0; s < i.sel.ranges.length; s++)
        if (t || s != i.sel.primIndex) {
          var a = i.sel.ranges[s];
          if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
            var l = a.empty();
            (l || e.options.showCursorWhenSelecting) && ii(e, a.head, r), l || ri(e, a, o)
          }
        }
      return n
    }

    function ii(e, t, i) {
      var n = At(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
        r = i.appendChild(k("div", "Â ", "CodeMirror-cursor"));
      if (r.style.left = n.left + "px", r.style.top = n.top + "px", r.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
        var o = i.appendChild(k("div", "Â ", "CodeMirror-cursor CodeMirror-secondarycursor"));
        o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
      }
    }

    function ni(e, t) {
      return e.top - t.top || e.left - t.left
    }

    function ri(s, e, t) {
      function T(e, t, i, n) {
        t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(k("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == i ? O - e : i) + "px;\n                             height: " + (n - t) + "px"))
      }

      function i(i, y, b) {
        function w(e, t) {
          return Lt(s, ie(i, e), "div", o, t)
        }

        function _(e, t, i) {
          var n = It(s, o, null, e),
            r = "ltr" == t == ("after" == i) ? "left" : "right";
          return w("after" == i ? n.begin : n.end - (/\s/.test(o.text.charAt(n.end - 1)) ? 2 : 1), r)[r]
        }
        var k, x, o = Y(r, i),
          C = o.text.length,
          S = L(o, r.direction);
        return function(e, t, i, n) {
          if (!e) return n(t, i, "ltr", 0);
          for (var r = !1, o = 0; o < e.length; ++o) {
            var s = e[o];
            (s.from < i && s.to > t || t == i && s.to == t) && (n(Math.max(s.from, t), Math.min(s.to, i), 1 == s.level ? "rtl" : "ltr", o), r = !0)
          }
          r || n(t, i, "ltr")
        }(S, y || 0, null == b ? C : b, function(e, t, i, n) {
          var r = "ltr" == i,
            o = w(e, r ? "left" : "right"),
            s = w(t - 1, r ? "right" : "left"),
            a = null == y && 0 == e,
            l = null == b && t == C,
            c = 0 == n,
            u = !S || n == S.length - 1;
          if (s.top - o.top <= 3) {
            var d = (z ? l : a) && u,
              f = (z ? a : l) && c ? $ : (r ? o : s).left,
              p = d ? O : (r ? s : o).right;
            T(f, o.top, p - f, o.bottom)
          } else {
            var h, m, g, v;
            v = r ? (h = z && a && c ? $ : o.left, m = z ? O : _(e, i, "before"), g = z ? $ : _(t, i, "after"), z && l && u ? O : s.right) : (h = z ? _(e, i, "before") : $, m = !z && a && c ? O : o.right, g = !z && l && u ? $ : s.left, z ? _(t, i, "after") : O), T(h, o.top, m - h, o.bottom), o.bottom < s.top && T($, o.bottom, null, s.top), T(g, s.top, v - g, s.bottom)
          }(!k || ni(o, k) < 0) && (k = o), ni(s, k) < 0 && (k = s), (!x || ni(o, x) < 0) && (x = o), ni(s, x) < 0 && (x = s)
        }), {
          start: k,
          end: x
        }
      }
      var n = s.display,
        r = s.doc,
        o = document.createDocumentFragment(),
        a = pt(s.display),
        $ = a.left,
        O = Math.max(n.sizerWidth, mt(s) - n.sizer.offsetLeft) - a.right,
        z = "ltr" == r.direction,
        l = e.from(),
        c = e.to();
      if (l.line == c.line) i(l.line, l.ch, c.ch);
      else {
        var u = Y(r, l.line),
          d = Y(r, c.line),
          f = Pe(u) == Pe(d),
          p = i(l.line, l.ch, f ? u.text.length + 1 : null).end,
          h = i(c.line, f ? 0 : null, c.ch).start;
        f && (p.top < h.top - 2 ? (T(p.right, p.top, null, p.bottom), T($, h.top, h.left, h.bottom)) : T(p.right, p.top, h.left - p.right, p.bottom)), p.bottom < h.top && T($, p.bottom, null, h.top)
      }
      t.appendChild(o)
    }

    function oi(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var i = !0;
        t.cursorDiv.style.visibility = "", 0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function() {
          return t.cursorDiv.style.visibility = (i = !i) ? "" : "hidden"
        }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
      }
    }

    function si(e) {
      e.state.focused || (e.display.input.focus(), li(e))
    }

    function ai(e) {
      e.state.delayingBlurEvent = !0, setTimeout(function() {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, ci(e))
      }, 100)
    }

    function li(e, t) {
      e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (p(e, "focus", e, t), e.state.focused = !0, n(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), to && setTimeout(function() {
        return e.display.input.reset(!0)
      }, 20)), e.display.input.receivedFocus()), oi(e))
    }

    function ci(e, t) {
      e.state.delayingBlurEvent || (e.state.focused && (p(e, "blur", e, t), e.state.focused = !1, bo(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
        e.state.focused || (e.display.shift = !1)
      }, 150))
    }

    function ui(e) {
      for (var t = e.display, i = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
        var r = t.view[n],
          o = e.options.lineWrapping,
          s = void 0,
          a = 0;
        if (!r.hidden) {
          if (Jr && eo < 8) {
            var l = r.node.offsetTop + r.node.offsetHeight;
            s = l - i, i = l
          } else {
            var c = r.node.getBoundingClientRect();
            s = c.bottom - c.top, !o && r.text.firstChild && (a = r.text.firstChild.getBoundingClientRect().right - c.left - 1)
          }
          var u = r.line.height - s;
          if ((.005 < u || u < -.005) && (X(r.line, s), di(r.line), r.rest))
            for (var d = 0; d < r.rest.length; d++) di(r.rest[d]);
          if (a > e.display.sizerWidth) {
            var f = Math.ceil(a / Ht(e.display));
            f > e.display.maxLineLength && (e.display.maxLineLength = f, e.display.maxLine = r.line, e.display.maxLineChanged = !0)
          }
        }
      }
    }

    function di(e) {
      if (e.widgets)
        for (var t = 0; t < e.widgets.length; ++t) {
          var i = e.widgets[t],
            n = i.node.parentNode;
          n && (i.height = n.offsetHeight)
        }
    }

    function fi(e, t, i) {
      var n = i && null != i.top ? Math.max(0, i.top) : e.scroller.scrollTop;
      n = Math.floor(n - dt(e));
      var r = i && null != i.bottom ? i.bottom : n + e.wrapper.clientHeight,
        o = J(t, n),
        s = J(t, r);
      if (i && i.ensure) {
        var a = i.ensure.from.line,
          l = i.ensure.to.line;
        a < o ? s = J(t, Re(Y(t, o = a)) + e.wrapper.clientHeight) : Math.min(l, t.lastLine()) >= s && (o = J(t, Re(Y(t, l)) - e.wrapper.clientHeight), s = l)
      }
      return {
        from: o,
        to: Math.max(s, o + 1)
      }
    }

    function pi(e, t) {
      var i = e.display,
        n = Ft(e.display);
      t.top < 0 && (t.top = 0);
      var r = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : i.scroller.scrollTop,
        o = gt(e),
        s = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var a = e.doc.height + ft(i),
        l = t.top < n,
        c = t.bottom > a - n;
      if (t.top < r) s.scrollTop = l ? 0 : t.top;
      else if (t.bottom > r + o) {
        var u = Math.min(t.top, (c ? a : t.bottom) - o);
        u != r && (s.scrollTop = u)
      }
      var d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : i.scroller.scrollLeft,
        f = mt(e) - (e.options.fixedGutter ? i.gutters.offsetWidth : 0),
        p = t.right - t.left > f;
      return p && (t.right = t.left + f), t.left < 10 ? s.scrollLeft = 0 : t.left < d ? s.scrollLeft = Math.max(0, t.left - (p ? 0 : 10)) : t.right > f + d - 3 && (s.scrollLeft = t.right + (p ? 0 : 10) - f), s
    }

    function hi(e, t) {
      null != t && (vi(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
    }

    function mi(e) {
      vi(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
        from: t,
        to: t,
        margin: e.options.cursorScrollMargin
      }
    }

    function gi(e, t, i) {
      (null != t || null != i) && vi(e), null != t && (e.curOp.scrollLeft = t), null != i && (e.curOp.scrollTop = i)
    }

    function vi(e) {
      var t = e.curOp.scrollToPos;
      t && (e.curOp.scrollToPos = null, yi(e, Et(e, t.from), Et(e, t.to), t.margin))
    }

    function yi(e, t, i, n) {
      var r = pi(e, {
        left: Math.min(t.left, i.left),
        top: Math.min(t.top, i.top) - n,
        right: Math.max(t.right, i.right),
        bottom: Math.max(t.bottom, i.bottom) + n
      });
      gi(e, r.scrollLeft, r.scrollTop)
    }

    function bi(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 || (Vr || Ii(e, {
        top: t
      }), wi(e, t, !0), Vr && Ii(e), Ei(e, 100))
    }

    function wi(e, t, i) {
      t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || i) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
    }

    function _i(e, t, i, n) {
      t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (!(i ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || n) && (e.doc.scrollLeft = t, Fi(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
    }

    function ki(e) {
      var t = e.display,
        i = t.gutters.offsetWidth,
        n = Math.round(e.doc.height + ft(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? i : 0,
        docHeight: n,
        scrollHeight: n + ht(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: i
      }
    }

    function xi(e, t) {
      t || (t = ki(e));
      var i = e.display.barWidth,
        n = e.display.barHeight;
      Ci(e, t);
      for (var r = 0; r < 4 && i != e.display.barWidth || n != e.display.barHeight; r++) i != e.display.barWidth && e.options.lineWrapping && ui(e), Ci(e, ki(e)), i = e.display.barWidth, n = e.display.barHeight
    }

    function Ci(e, t) {
      var i = e.display,
        n = i.scrollbars.update(t);
      i.sizer.style.paddingRight = (i.barWidth = n.right) + "px", i.sizer.style.paddingBottom = (i.barHeight = n.bottom) + "px", i.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (i.scrollbarFiller.style.display = "block", i.scrollbarFiller.style.height = n.bottom + "px", i.scrollbarFiller.style.width = n.right + "px") : i.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (i.gutterFiller.style.display = "block", i.gutterFiller.style.height = n.bottom + "px", i.gutterFiller.style.width = t.gutterWidth + "px") : i.gutterFiller.style.display = ""
    }

    function Si(i) {
      i.display.scrollbars && (i.display.scrollbars.clear(), i.display.scrollbars.addClass && bo(i.display.wrapper, i.display.scrollbars.addClass)), i.display.scrollbars = new ss[i.options.scrollbarStyle](function(e) {
        i.display.wrapper.insertBefore(e, i.display.scrollbarFiller), qo(e, "mousedown", function() {
          i.state.focused && setTimeout(function() {
            return i.display.input.focus()
          }, 0)
        }), e.setAttribute("cm-not-content", "true")
      }, function(e, t) {
        "horizontal" == t ? _i(i, e) : bi(i, e)
      }, i), i.display.scrollbars.addClass && n(i.display.wrapper, i.display.scrollbars.addClass)
    }

    function Ti(e) {
      var t;
      e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++as
      }, t = e.curOp, ts ? ts.ops.push(t) : t.ownsGroup = ts = {
        ops: [t],
        delayedCallbacks: []
      }
    }

    function $i(e) {
      var t = e.curOp;
      t && function(e, t) {
        var i = e.ownsGroup;
        if (i) try {
          ! function(e) {
            var t = e.delayedCallbacks,
              i = 0;
            do {
              for (; i < t.length; i++) t[i].call(null);
              for (var n = 0; n < e.ops.length; n++) {
                var r = e.ops[n];
                if (r.cursorActivityHandlers)
                  for (; r.cursorActivityCalled < r.cursorActivityHandlers.length;) r.cursorActivityHandlers[r.cursorActivityCalled++].call(null, r.cm)
              }
            } while (i < t.length)
          }(i)
        } finally {
          ts = null, t(i)
        }
      }(t, function(e) {
        for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
        ! function(e) {
          for (var t = e.ops, i = 0; i < t.length; i++) o = t[i], void 0, void 0, s = o.cm, a = s.display, n = s, r = void 0, r = n.display, !r.scrollbarsClipped && r.scroller.offsetWidth && (r.nativeBarWidth = r.scroller.offsetWidth - r.scroller.clientWidth, r.heightForcer.style.height = ht(n) + "px", r.sizer.style.marginBottom = -r.nativeBarWidth + "px", r.sizer.style.borderRightWidth = ht(n) + "px", r.scrollbarsClipped = !0), o.updateMaxLine && He(s), o.mustUpdate = o.viewChanged || o.forceUpdate || null != o.scrollTop || o.scrollToPos && (o.scrollToPos.from.line < a.viewFrom || o.scrollToPos.to.line >= a.viewTo) || a.maxLineChanged && s.options.lineWrapping, o.update = o.mustUpdate && new ls(s, o.mustUpdate && {
            top: o.scrollTop,
            ensure: o.scrollToPos
          }, o.forceUpdate);
          var n, r;
          var o, s, a;
          for (var l = 0; l < t.length; l++) c = t[l], c.updatedDisplay = c.mustUpdate && qi(c.cm, c.update);
          var c;
          for (var u = 0; u < t.length; u++) d = t[u], f = void 0, p = void 0, f = d.cm, p = f.display, d.updatedDisplay && ui(f), d.barMeasure = ki(f), p.maxLineChanged && !f.options.lineWrapping && (d.adjustWidthTo = yt(f, p.maxLine, p.maxLine.text.length).left + 3, f.display.sizerWidth = d.adjustWidthTo, d.barMeasure.scrollWidth = Math.max(p.scroller.clientWidth, p.sizer.offsetLeft + d.adjustWidthTo + ht(f) + f.display.barWidth), d.maxScrollLeft = Math.max(0, p.sizer.offsetLeft + d.adjustWidthTo - mt(f))), (d.updatedDisplay || d.selectionChanged) && (d.preparedSelection = p.input.prepareSelection());
          var d, f, p;
          for (var h = 0; h < t.length; h++) Oi(t[h]);
          for (var m = 0; m < t.length; m++) zi(t[m])
        }(e)
      })
    }

    function Oi(e) {
      var t = e.cm;
      null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && _i(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
      var i = e.focus && e.focus == C();
      e.preparedSelection && t.display.input.showSelection(e.preparedSelection, i), (e.updatedDisplay || e.startHeight != t.doc.height) && xi(t, e.barMeasure), e.updatedDisplay && Ri(t, e.barMeasure), e.selectionChanged && oi(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), i && si(e.cm)
    }

    function zi(e) {
      var t = e.cm,
        i = t.display,
        n = t.doc;
      (e.updatedDisplay && Di(t, e.update), null == i.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (i.wheelStartX = i.wheelStartY = null), null != e.scrollTop && wi(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && _i(t, e.scrollLeft, !0, !0), e.scrollToPos) && function(e, t) {
        if (!m(e, "scrollCursorIntoView")) {
          var i = e.display,
            n = i.sizer.getBoundingClientRect(),
            r = null;
          if (t.top + n.top < 0 ? r = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (r = !1), null != r && !ao) {
            var o = k("div", "â€‹", null, "position: absolute;\n                         top: " + (t.top - i.viewOffset - dt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + ht(e) + i.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
            e.display.lineSpace.appendChild(o), o.scrollIntoView(r), e.display.lineSpace.removeChild(o)
          }
        }
      }(t, function(e, t, i, n) {
        var r;
        null == n && (n = 0), e.options.lineWrapping || t != i || (i = "before" == (t = t.ch ? ie(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? ie(t.line, t.ch + 1, "before") : t);
        for (var o = 0; o < 5; o++) {
          var s = !1,
            a = At(e, t),
            l = i && i != t ? At(e, i) : a,
            c = pi(e, r = {
              left: Math.min(a.left, l.left),
              top: Math.min(a.top, l.top) - n,
              right: Math.max(a.left, l.left),
              bottom: Math.max(a.bottom, l.bottom) + n
            }),
            u = e.doc.scrollTop,
            d = e.doc.scrollLeft;
          if (null != c.scrollTop && (bi(e, c.scrollTop), 1 < Math.abs(e.doc.scrollTop - u) && (s = !0)), null != c.scrollLeft && (_i(e, c.scrollLeft), 1 < Math.abs(e.doc.scrollLeft - d) && (s = !0)), !s) break
        }
        return r
      }(t, ce(n, e.scrollToPos.from), ce(n, e.scrollToPos.to), e.scrollToPos.margin));
      var r = e.maybeHiddenMarkers,
        o = e.maybeUnhiddenMarkers;
      if (r)
        for (var s = 0; s < r.length; ++s) r[s].lines.length || p(r[s], "hide");
      if (o)
        for (var a = 0; a < o.length; ++a) o[a].lines.length && p(o[a], "unhide");
      i.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && p(t, "changes", t, e.changeObjs), e.update && e.update.finish()
    }

    function ji(e, t) {
      if (e.curOp) return t();
      Ti(e);
      try {
        return t()
      } finally {
        $i(e)
      }
    }

    function Mi(e, t) {
      return function() {
        if (e.curOp) return t.apply(e, arguments);
        Ti(e);
        try {
          return t.apply(e, arguments)
        } finally {
          $i(e)
        }
      }
    }

    function Li(e) {
      return function() {
        if (this.curOp) return e.apply(this, arguments);
        Ti(this);
        try {
          return e.apply(this, arguments)
        } finally {
          $i(this)
        }
      }
    }

    function Ai(t) {
      return function() {
        var e = this.cm;
        if (!e || e.curOp) return t.apply(this, arguments);
        Ti(e);
        try {
          return t.apply(this, arguments)
        } finally {
          $i(e)
        }
      }
    }

    function Ei(e, t) {
      e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, v(Pi, e))
    }

    function Pi(l) {
      var c = l.doc;
      if (!(c.highlightFrontier >= l.display.viewTo)) {
        var u = +new Date + l.options.workTime,
          d = pe(l, c.highlightFrontier),
          f = [];
        c.iter(d.line, Math.min(c.first + c.size, l.display.viewTo + 500), function(e) {
          if (d.line >= l.display.viewFrom) {
            var t = e.styles,
              i = e.text.length > l.options.maxHighlightLength ? B(c.mode, d.state) : null,
              n = de(l, e, d, !0);
            i && (d.state = i), e.styles = n.styles;
            var r = e.styleClasses,
              o = n.classes;
            o ? e.styleClasses = o : r && (e.styleClasses = null);
            for (var s = !t || t.length != e.styles.length || r != o && (!r || !o || r.bgClass != o.bgClass || r.textClass != o.textClass), a = 0; !s && a < t.length; ++a) s = t[a] != e.styles[a];
            s && f.push(d.line), e.stateAfter = d.save(), d.nextLine()
          } else e.text.length <= l.options.maxHighlightLength && he(l, e.text, d), e.stateAfter = d.line % 5 == 0 ? d.save() : null, d.nextLine();
          return +new Date > u ? (Ei(l, l.options.workDelay), !0) : void 0
        }), c.highlightFrontier = d.line, c.modeFrontier = Math.max(c.modeFrontier, d.line), f.length && ji(l, function() {
          for (var e = 0; e < f.length; e++) Qt(l, f[e], "text")
        })
      }
    }

    function qi(e, t) {
      var i = e.display,
        n = e.doc;
      if (t.editorIsHidden) return Xt(e), !1;
      if (!t.force && t.visible.from >= i.viewFrom && t.visible.to <= i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && 0 == Jt(e)) return !1;
      Hi(e) && (Xt(e), t.dims = Wt(e));
      var r = n.first + n.size,
        o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
        s = Math.min(r, t.visible.to + e.options.viewportMargin);
      i.viewFrom < o && o - i.viewFrom < 20 && (o = Math.max(n.first, i.viewFrom)), i.viewTo > s && i.viewTo - s < 20 && (s = Math.min(r, i.viewTo)), Qo && (o = qe(e.doc, o), s = De(e.doc, s));
      var a, l, c, u, d = o != i.viewFrom || s != i.viewTo || i.lastWrapHeight != t.wrapperHeight || i.lastWrapWidth != t.wrapperWidth;
      l = o, c = s, 0 == (u = (a = e).display).view.length || l >= u.viewTo || c <= u.viewFrom ? (u.view = Xe(a, l, c), u.viewFrom = l) : (u.viewFrom > l ? u.view = Xe(a, l, u.viewFrom).concat(u.view) : u.viewFrom < l && (u.view = u.view.slice(Yt(a, l))), u.viewFrom = l, u.viewTo < c ? u.view = u.view.concat(Xe(a, u.viewTo, c)) : u.viewTo > c && (u.view = u.view.slice(0, Yt(a, c)))), u.viewTo = c, i.viewOffset = Re(Y(e.doc, i.viewFrom)), e.display.mover.style.top = i.viewOffset + "px";
      var f = Jt(e);
      if (!d && 0 == f && !t.force && i.renderedView == i.view && (null == i.updateLineNumbers || i.updateLineNumbers >= i.viewTo)) return !1;
      var p = function(e) {
        if (e.hasFocus()) return null;
        var t = C();
        if (!t || !g(e.display.lineDiv, t)) return null;
        var i = {
          activeElt: t
        };
        if (window.getSelection) {
          var n = window.getSelection();
          n.anchorNode && n.extend && g(e.display.lineDiv, n.anchorNode) && (i.anchorNode = n.anchorNode, i.anchorOffset = n.anchorOffset, i.focusNode = n.focusNode, i.focusOffset = n.focusOffset)
        }
        return i
      }(e);
      return 4 < f && (i.lineDiv.style.display = "none"),
        function(i, e, t) {
          function n(e) {
            var t = e.nextSibling;
            return to && fo && i.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e), t
          }
          for (var r = i.display, o = i.options.lineNumbers, s = r.lineDiv, a = s.firstChild, l = r.view, c = r.viewFrom, u = 0; u < l.length; u++) {
            var d = l[u];
            if (d.hidden);
            else if (d.node && d.node.parentNode == s) {
              for (; a != d.node;) a = n(a);
              var f = o && null != e && e <= c && d.lineNumber;
              d.changes && (-1 < w(d.changes, "gutter") && (f = !1), et(i, d, c, t)), f && (b(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(te(i.options, c)))), a = d.node.nextSibling
            } else {
              var p = (g = c, v = t, void 0, y = it(h = i, m = d), m.text = m.node = y.pre, y.bgClass && (m.bgClass = y.bgClass), y.textClass && (m.textClass = y.textClass), nt(h, m), rt(h, m, g, v), st(h, m, v), m.node);
              s.insertBefore(p, a)
            }
            c += d.size
          }
          var h, m, g, v, y;
          for (; a;) a = n(a)
        }(e, i.updateLineNumbers, t.dims), 4 < f && (i.lineDiv.style.display = ""), i.renderedView = i.view,
        function(e) {
          if (e && e.activeElt && e.activeElt != C() && (e.activeElt.focus(), e.anchorNode && g(document.body, e.anchorNode) && g(document.body, e.focusNode))) {
            var t = window.getSelection(),
              i = document.createRange();
            i.setEnd(e.anchorNode, e.anchorOffset), i.collapse(!1), t.removeAllRanges(), t.addRange(i), t.extend(e.focusNode, e.focusOffset)
          }
        }(p), b(i.cursorDiv), b(i.selectionDiv), i.gutters.style.height = i.sizer.style.minHeight = 0, d && (i.lastWrapHeight = t.wrapperHeight, i.lastWrapWidth = t.wrapperWidth, Ei(e, 400)), !(i.updateLineNumbers = null)
    }

    function Di(e, t) {
      for (var i = t.viewport, n = !0;
           (n && e.options.lineWrapping && t.oldDisplayWidth != mt(e) || (i && null != i.top && (i = {
             top: Math.min(e.doc.height + ft(e.display) - gt(e), i.top)
           }), t.visible = fi(e.display, e.doc, i), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && qi(e, t); n = !1) {
        ui(e);
        var r = ki(e);
        ei(e), xi(e, r), Ri(e, r), t.force = !1
      }
      t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
    }

    function Ii(e, t) {
      var i = new ls(e, t);
      if (qi(e, i)) {
        ui(e), Di(e, i);
        var n = ki(e);
        ei(e), xi(e, n), Ri(e, n), i.finish()
      }
    }

    function Ni(e) {
      var t = e.gutters.offsetWidth;
      e.sizer.style.marginLeft = t + "px"
    }

    function Ri(e, t) {
      e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + ht(e) + "px"
    }

    function Fi(e) {
      var t = e.display,
        i = t.view;
      if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
        for (var n = Bt(t) - t.scroller.scrollLeft + e.doc.scrollLeft, r = t.gutters.offsetWidth, o = n + "px", s = 0; s < i.length; s++)
          if (!i[s].hidden) {
            e.options.fixedGutter && (i[s].gutter && (i[s].gutter.style.left = o), i[s].gutterBackground && (i[s].gutterBackground.style.left = o));
            var a = i[s].alignable;
            if (a)
              for (var l = 0; l < a.length; l++) a[l].style.left = o
          }
        e.options.fixedGutter && (t.gutters.style.left = n + r + "px")
      }
    }

    function Hi(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc,
        i = te(e.options, t.first + t.size - 1),
        n = e.display;
      if (i.length == n.lineNumChars) return !1;
      var r = n.measure.appendChild(k("div", [k("div", i)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
        o = r.firstChild.offsetWidth,
        s = r.offsetWidth - o;
      return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - s) + 1, n.lineNumWidth = n.lineNumInnerWidth + s, n.lineNumChars = n.lineNumInnerWidth ? i.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", Ni(e.display), !0
    }

    function Wi(e, t) {
      for (var i = [], n = !1, r = 0; r < e.length; r++) {
        var o = e[r],
          s = null;
        if ("string" != typeof o && (s = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
          if (!t) continue;
          n = !0
        }
        i.push({
          className: o,
          style: s
        })
      }
      return t && !n && i.push({
        className: "CodeMirror-linenumbers",
        style: null
      }), i
    }

    function Bi(e) {
      var t = e.gutters,
        i = e.gutterSpecs;
      b(t), e.lineGutter = null;
      for (var n = 0; n < i.length; ++n) {
        var r = i[n],
          o = r.className,
          s = r.style,
          a = t.appendChild(k("div", null, "CodeMirror-gutter " + o));
        s && (a.style.cssText = s), "CodeMirror-linenumbers" == o && ((e.lineGutter = a).style.width = (e.lineNumWidth || 1) + "px")
      }
      t.style.display = i.length ? "" : "none", Ni(e)
    }

    function Ui(e) {
      Bi(e.display), Vt(e), Fi(e)
    }

    function Gi(e, t, i, n) {
      var r = this;
      this.input = i, r.scrollbarFiller = k("div", null, "CodeMirror-scrollbar-filler"), r.scrollbarFiller.setAttribute("cm-not-content", "true"), r.gutterFiller = k("div", null, "CodeMirror-gutter-filler"), r.gutterFiller.setAttribute("cm-not-content", "true"), r.lineDiv = d("div", null, "CodeMirror-code"), r.selectionDiv = k("div", null, null, "position: relative; z-index: 1"), r.cursorDiv = k("div", null, "CodeMirror-cursors"), r.measure = k("div", null, "CodeMirror-measure"), r.lineMeasure = k("div", null, "CodeMirror-measure"), r.lineSpace = d("div", [r.measure, r.lineMeasure, r.selectionDiv, r.cursorDiv, r.lineDiv], null, "position: relative; outline: none");
      var o = d("div", [r.lineSpace], "CodeMirror-lines");
      r.mover = k("div", [o], null, "position: relative"), r.sizer = k("div", [r.mover], "CodeMirror-sizer"), r.sizerWidth = null, r.heightForcer = k("div", null, null, "position: absolute; height: " + So + "px; width: 1px;"), r.gutters = k("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = k("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = k("div", [r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), Jr && eo < 8 && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0), to || Vr && uo || (r.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper)), r.viewFrom = r.viewTo = t.first, r.reportedViewFrom = r.reportedViewTo = t.first, r.view = [], r.renderedView = null, r.externalMeasured = null, r.viewOffset = 0, r.lastWrapHeight = r.lastWrapWidth = 0, r.updateLineNumbers = null, r.nativeBarWidth = r.barHeight = r.barWidth = 0, r.scrollbarsClipped = !1, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.alignWidgets = !1, r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged = !1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r.shift = !1, r.selForContextMenu = null, r.activeTouch = null, r.gutterSpecs = Wi(n.gutters, n.lineNumbers), Bi(r), i.init(r)
    }

    function Ki(e) {
      var t = e.wheelDeltaX,
        i = e.wheelDeltaY;
      return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == i && e.detail && e.axis == e.VERTICAL_AXIS ? i = e.detail : null == i && (i = e.wheelDelta), {
        x: t,
        y: i
      }
    }

    function Yi(e) {
      var t = Ki(e);
      return t.x *= us, t.y *= us, t
    }

    function Vi(e, t) {
      var i = Ki(t),
        n = i.x,
        r = i.y,
        o = e.display,
        s = o.scroller,
        a = s.scrollWidth > s.clientWidth,
        l = s.scrollHeight > s.clientHeight;
      if (n && a || r && l) {
        if (r && fo && to) e: for (var c = t.target, u = o.view; c != s; c = c.parentNode)
          for (var d = 0; d < u.length; d++)
            if (u[d].node == c) {
              e.display.currentWheelTarget = c;
              break e
            }
        if (n && !Vr && !ro && null != us) return r && l && bi(e, Math.max(0, s.scrollTop + r * us)), _i(e, Math.max(0, s.scrollLeft + n * us)), (!r || r && l) && P(t), void(o.wheelStartX = null);
        if (r && null != us) {
          var f = r * us,
            p = e.doc.scrollTop,
            h = p + o.wrapper.clientHeight;
          f < 0 ? p = Math.max(0, p + f - 50) : h = Math.min(e.doc.height, h + f + 50), Ii(e, {
            top: p,
            bottom: h
          })
        }
        cs < 20 && (null == o.wheelStartX ? (o.wheelStartX = s.scrollLeft, o.wheelStartY = s.scrollTop, o.wheelDX = n, o.wheelDY = r, setTimeout(function() {
          if (null != o.wheelStartX) {
            var e = s.scrollLeft - o.wheelStartX,
              t = s.scrollTop - o.wheelStartY,
              i = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
            o.wheelStartX = o.wheelStartY = null, i && (us = (us * cs + i) / (cs + 1), ++cs)
          }
        }, 200)) : (o.wheelDX += n, o.wheelDY += r))
      }
    }

    function Qi(e, t, i) {
      var n = e && e.options.selectionsMayTouch,
        r = t[i];
      t.sort(function(e, t) {
        return ne(e.from(), t.from())
      }), i = w(t, r);
      for (var o = 1; o < t.length; o++) {
        var s = t[o],
          a = t[o - 1],
          l = ne(a.to(), s.from());
        if (n && !s.empty() ? 0 < l : 0 <= l) {
          var c = ae(a.from(), s.from()),
            u = se(a.to(), s.to()),
            d = a.empty() ? s.from() == s.head : a.from() == a.head;
          o <= i && --i, t.splice(--o, 2, new fs(d ? u : c, d ? c : u))
        }
      }
      return new ds(t, i)
    }

    function Xi(e, t) {
      return new ds([new fs(e, t || e)], 0)
    }

    function Zi(e) {
      return e.text ? ie(e.from.line + e.text.length - 1, U(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
    }

    function Ji(e, t) {
      if (ne(e, t.from) < 0) return e;
      if (ne(e, t.to) <= 0) return Zi(t);
      var i = e.line + t.text.length - (t.to.line - t.from.line) - 1,
        n = e.ch;
      return e.line == t.to.line && (n += Zi(t).ch - t.to.ch), ie(i, n)
    }

    function en(e, t) {
      for (var i = [], n = 0; n < e.sel.ranges.length; n++) {
        var r = e.sel.ranges[n];
        i.push(new fs(Ji(r.anchor, t), Ji(r.head, t)))
      }
      return Qi(e.cm, i, e.sel.primIndex)
    }

    function tn(e, t, i) {
      return e.line == t.line ? ie(i.line, e.ch - t.ch + i.ch) : ie(i.line + (e.line - t.line), e.ch)
    }

    function nn(e) {
      e.doc.mode = H(e.options, e.doc.modeOption), rn(e)
    }

    function rn(e) {
      e.doc.iter(function(e) {
        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
      }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Ei(e, 100), e.state.modeGen++, e.curOp && Vt(e)
    }

    function on(e, t) {
      return 0 == t.from.ch && 0 == t.to.ch && "" == U(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }

    function sn(e, n, t, r) {
      function o(e) {
        return t ? t[e] : null
      }

      function i(e, t, i) {
        (function(e, t, i, n) {
          e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Se(e), Te(e, i);
          var r = n ? n(e) : 1;
          r != e.height && X(e, r)
        })(e, t, i, r), Ze(e, "change", e, n)
      }

      function s(e, t) {
        for (var i = [], n = e; n < t; ++n) i.push(new Xo(c[n], o(n), r));
        return i
      }
      var a = n.from,
        l = n.to,
        c = n.text,
        u = Y(e, a.line),
        d = Y(e, l.line),
        f = U(c),
        p = o(c.length - 1),
        h = l.line - a.line;
      if (n.full) e.insert(0, s(0, c.length)), e.remove(c.length, e.size - c.length);
      else if (on(e, n)) {
        var m = s(0, c.length - 1);
        i(d, d.text, p), h && e.remove(a.line, h), m.length && e.insert(a.line, m)
      } else if (u == d)
        if (1 == c.length) i(u, u.text.slice(0, a.ch) + f + u.text.slice(l.ch), p);
        else {
          var g = s(1, c.length - 1);
          g.push(new Xo(f + u.text.slice(l.ch), p, r)), i(u, u.text.slice(0, a.ch) + c[0], o(0)), e.insert(a.line + 1, g)
        } else if (1 == c.length) i(u, u.text.slice(0, a.ch) + c[0] + d.text.slice(l.ch), o(0)), e.remove(a.line + 1, h);
      else {
        i(u, u.text.slice(0, a.ch) + c[0], o(0)), i(d, f + d.text.slice(l.ch), p);
        var v = s(1, c.length - 1);
        1 < h && e.remove(a.line + 1, h - 1), e.insert(a.line + 1, v)
      }
      Ze(e, "change", e, n)
    }

    function an(e, a, l) {
      ! function e(t, i, n) {
        if (t.linked)
          for (var r = 0; r < t.linked.length; ++r) {
            var o = t.linked[r];
            if (o.doc != i) {
              var s = n && o.sharedHist;
              (!l || s) && (a(o.doc, s), e(o.doc, t, s))
            }
          }
      }(e, null, !0)
    }

    function ln(e, t) {
      if (t.cm) throw new Error("This document is already in use.");
      Gt((e.doc = t).cm = e), nn(e), cn(e), e.options.lineWrapping || He(e), e.options.mode = t.modeOption, Vt(e)
    }

    function cn(e) {
      ("rtl" == e.doc.direction ? n : bo)(e.display.lineDiv, "CodeMirror-rtl")
    }

    function un(e) {
      this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
    }

    function dn(e, t) {
      var i = {
        from: oe(t.from),
        to: Zi(t),
        text: V(e, t.from, t.to)
      };
      return gn(e, i, t.from.line, t.to.line + 1), an(e, function(e) {
        return gn(e, i, t.from.line, t.to.line + 1)
      }, !0), i
    }

    function fn(e) {
      for (; e.length;) {
        if (!U(e).ranges) break;
        e.pop()
      }
    }

    function pn(e, t, i, n) {
      var r = e.history;
      r.undone.length = 0;
      var o, s, a, l = +new Date;
      if ((r.lastOp == n || r.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && r.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = (a = r).lastOp == n ? (fn(a.done), U(a.done)) : a.done.length && !U(a.done).ranges ? U(a.done) : 1 < a.done.length && !a.done[a.done.length - 2].ranges ? (a.done.pop(), U(a.done)) : void 0)) s = U(o.changes), 0 == ne(t.from, t.to) && 0 == ne(t.from, s.to) ? s.to = Zi(t) : o.changes.push(dn(e, t));
      else {
        var c = U(r.done);
        for (c && c.ranges || mn(e.sel, r.done), o = {
          changes: [dn(e, t)],
          generation: r.generation
        }, r.done.push(o); r.done.length > r.undoDepth;) r.done.shift(), r.done[0].ranges || r.done.shift()
      }
      r.done.push(i), r.generation = ++r.maxGeneration, r.lastModTime = r.lastSelTime = l, r.lastOp = r.lastSelOp = n, r.lastOrigin = r.lastSelOrigin = t.origin, s || p(e, "historyAdded")
    }

    function hn(e, t, i, n) {
      var r, o, s, a, l, c = e.history,
        u = n && n.origin;
      i == c.lastSelOp || u && c.lastSelOrigin == u && (c.lastModTime == c.lastSelTime && c.lastOrigin == u || (r = e, o = u, s = U(c.done), a = t, "*" == (l = o.charAt(0)) || "+" == l && s.ranges.length == a.ranges.length && s.somethingSelected() == a.somethingSelected() && new Date - r.history.lastSelTime <= (r.cm ? r.cm.options.historyEventDelay : 500))) ? c.done[c.done.length - 1] = t : mn(t, c.done), c.lastSelTime = +new Date, c.lastSelOrigin = u, c.lastSelOp = i, n && !1 !== n.clearRedo && fn(c.undone)
    }

    function mn(e, t) {
      var i = U(t);
      i && i.ranges && i.equals(e) || t.push(e)
    }

    function gn(t, i, e, n) {
      var r = i["spans_" + t.id],
        o = 0;
      t.iter(Math.max(t.first, e), Math.min(t.first + t.size, n), function(e) {
        e.markedSpans && ((r || (r = i["spans_" + t.id] = {}))[o] = e.markedSpans), ++o
      })
    }

    function vn(e) {
      if (!e) return null;
      for (var t, i = 0; i < e.length; ++i) e[i].marker.explicitlyCleared ? t || (t = e.slice(0, i)) : t && t.push(e[i]);
      return t ? t.length ? t : null : e
    }

    function yn(e, t) {
      var i = function(e, t) {
          var i = t["spans_" + e.id];
          if (!i) return null;
          for (var n = [], r = 0; r < t.text.length; ++r) n.push(vn(i[r]));
          return n
        }(e, t),
        n = xe(e, t);
      if (!i) return n;
      if (!n) return i;
      for (var r = 0; r < i.length; ++r) {
        var o = i[r],
          s = n[r];
        if (o && s) e: for (var a = 0; a < s.length; ++a) {
          for (var l = s[a], c = 0; c < o.length; ++c)
            if (o[c].marker == l.marker) continue e;
          o.push(l)
        } else s && (i[r] = s)
      }
      return i
    }

    function bn(e, t, i) {
      for (var n = [], r = 0; r < e.length; ++r) {
        var o = e[r];
        if (o.ranges) n.push(i ? ds.prototype.deepCopy.call(o) : o);
        else {
          var s = o.changes,
            a = [];
          n.push({
            changes: a
          });
          for (var l = 0; l < s.length; ++l) {
            var c = s[l],
              u = void 0;
            if (a.push({
              from: c.from,
              to: c.to,
              text: c.text
            }), t)
              for (var d in c)(u = d.match(/^spans_(\d+)$/)) && -1 < w(t, Number(u[1])) && (U(a)[d] = c[d], delete c[d])
          }
        }
      }
      return n
    }

    function wn(e, t, i, n) {
      if (n) {
        var r = e.anchor;
        if (i) {
          var o = ne(t, r) < 0;
          o != ne(i, r) < 0 ? (r = t, t = i) : o != ne(t, i) < 0 && (t = i)
        }
        return new fs(r, t)
      }
      return new fs(i || t, t)
    }

    function _n(e, t, i, n, r) {
      null == r && (r = e.cm && (e.cm.display.shift || e.extend)), Tn(e, new ds([wn(e.sel.primary(), t, i, r)], 0), n)
    }

    function kn(e, t, i) {
      for (var n = [], r = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = wn(e.sel.ranges[o], t[o], null, r);
      Tn(e, Qi(e.cm, n, e.sel.primIndex), i)
    }

    function xn(e, t, i, n) {
      var r = e.sel.ranges.slice(0);
      r[t] = i, Tn(e, Qi(e.cm, r, e.sel.primIndex), n)
    }

    function Cn(e, t, i, n) {
      Tn(e, Xi(t, i), n)
    }

    function Sn(e, t, i) {
      var n = e.history.done,
        r = U(n);
      r && r.ranges ? $n(e, n[n.length - 1] = t, i) : Tn(e, t, i)
    }

    function Tn(e, t, i) {
      $n(e, t, i), hn(e, e.sel, e.cm ? e.cm.curOp.id : NaN, i)
    }

    function $n(e, t, i) {
      var n, r, o, s;
      (E(e, "beforeSelectionChange") || e.cm && E(e.cm, "beforeSelectionChange")) && (n = e, o = i, s = {
        ranges: (r = t).ranges,
        update: function(e) {
          this.ranges = [];
          for (var t = 0; t < e.length; t++) this.ranges[t] = new fs(ce(n, e[t].anchor), ce(n, e[t].head))
        },
        origin: o && o.origin
      }, p(n, "beforeSelectionChange", n, s), n.cm && p(n.cm, "beforeSelectionChange", n.cm, s), t = s.ranges != r.ranges ? Qi(n.cm, s.ranges, s.ranges.length - 1) : r), On(e, jn(e, t, i && i.bias || (ne(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), i && !1 === i.scroll || !e.cm || mi(e.cm)
    }

    function On(e, t) {
      t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, h(e.cm)), Ze(e, "cursorActivity", e))
    }

    function zn(e) {
      On(e, jn(e, e.sel, null, !1))
    }

    function jn(e, t, i, n) {
      for (var r, o = 0; o < t.ranges.length; o++) {
        var s = t.ranges[o],
          a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
          l = Ln(e, s.anchor, a && a.anchor, i, n),
          c = Ln(e, s.head, a && a.head, i, n);
        (r || l != s.anchor || c != s.head) && (r || (r = t.ranges.slice(0, o)), r[o] = new fs(l, c))
      }
      return r ? Qi(e.cm, r, t.primIndex) : t
    }

    function Mn(e, t, i, n, r) {
      var o = Y(e, t.line);
      if (o.markedSpans)
        for (var s = 0; s < o.markedSpans.length; ++s) {
          var a = o.markedSpans[s],
            l = a.marker;
          if ((null == a.from || (l.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (l.inclusiveRight ? a.to >= t.ch : a.to > t.ch))) {
            if (r && (p(l, "beforeCursorEnter"), l.explicitlyCleared)) {
              if (o.markedSpans) {
                --s;
                continue
              }
              break
            }
            if (!l.atomic) continue;
            if (i) {
              var c = l.find(n < 0 ? 1 : -1),
                u = void 0;
              if ((n < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = An(e, c, -n, c && c.line == t.line ? o : null)), c && c.line == t.line && (u = ne(c, i)) && (n < 0 ? u < 0 : 0 < u)) return Mn(e, c, t, n, r)
            }
            var d = l.find(n < 0 ? -1 : 1);
            return (n < 0 ? l.inclusiveLeft : l.inclusiveRight) && (d = An(e, d, n, d.line == t.line ? o : null)), d ? Mn(e, d, t, n, r) : null
          }
        }
      return t
    }

    function Ln(e, t, i, n, r) {
      var o = n || 1,
        s = Mn(e, t, i, o, r) || !r && Mn(e, t, i, o, !0) || Mn(e, t, i, -o, r) || !r && Mn(e, t, i, -o, !0);
      return s || (e.cantEdit = !0, ie(e.first, 0))
    }

    function An(e, t, i, n) {
      return i < 0 && 0 == t.ch ? t.line > e.first ? ce(e, ie(t.line - 1)) : null : 0 < i && t.ch == (n || Y(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? ie(t.line + 1, 0) : null : new ie(t.line, t.ch + i)
    }

    function En(e) {
      e.setSelection(ie(e.firstLine(), 0), ie(e.lastLine()), $o)
    }

    function Pn(r, e, t) {
      var o = {
        canceled: !1,
        from: e.from,
        to: e.to,
        text: e.text,
        origin: e.origin,
        cancel: function() {
          return o.canceled = !0
        }
      };
      return t && (o.update = function(e, t, i, n) {
        e && (o.from = ce(r, e)), t && (o.to = ce(r, t)), i && (o.text = i), void 0 !== n && (o.origin = n)
      }), p(r, "beforeChange", r, o), r.cm && p(r.cm, "beforeChange", r.cm, o), o.canceled ? (r.cm && (r.cm.curOp.updateInput = 2), null) : {
        from: o.from,
        to: o.to,
        text: o.text,
        origin: o.origin
      }
    }

    function qn(e, t, i) {
      if (e.cm) {
        if (!e.cm.curOp) return Mi(e.cm, qn)(e, t, i);
        if (e.cm.state.suppressEdits) return
      }
      if (!(E(e, "beforeChange") || e.cm && E(e.cm, "beforeChange")) || (t = Pn(e, t, !0))) {
        var n = Vo && !i && function(e, t, i) {
          var n = null;
          if (e.iter(t.line, i.line + 1, function(e) {
            if (e.markedSpans)
              for (var t = 0; t < e.markedSpans.length; ++t) {
                var i = e.markedSpans[t].marker;
                !i.readOnly || n && -1 != w(n, i) || (n || (n = [])).push(i)
              }
          }), !n) return null;
          for (var r = [{
            from: t,
            to: i
          }], o = 0; o < n.length; ++o)
            for (var s = n[o], a = s.find(0), l = 0; l < r.length; ++l) {
              var c = r[l];
              if (!(ne(c.to, a.from) < 0 || 0 < ne(c.from, a.to))) {
                var u = [l, 1],
                  d = ne(c.from, a.from),
                  f = ne(c.to, a.to);
                (d < 0 || !s.inclusiveLeft && !d) && u.push({
                  from: c.from,
                  to: a.from
                }), (0 < f || !s.inclusiveRight && !f) && u.push({
                  from: a.to,
                  to: c.to
                }), r.splice.apply(r, u), l += u.length - 3
              }
            }
          return r
        }(e, t.from, t.to);
        if (n)
          for (var r = n.length - 1; 0 <= r; --r) Dn(e, {
            from: n[r].from,
            to: n[r].to,
            text: r ? [""] : t.text,
            origin: t.origin
          });
        else Dn(e, t)
      }
    }

    function Dn(e, i) {
      if (1 != i.text.length || "" != i.text[0] || 0 != ne(i.from, i.to)) {
        var t = en(e, i);
        pn(e, i, t, e.cm ? e.cm.curOp.id : NaN), Rn(e, i, t, xe(e, i));
        var n = [];
        an(e, function(e, t) {
          t || -1 != w(n, e.history) || (Bn(e.history, i), n.push(e.history)), Rn(e, i, null, xe(e, i))
        })
      }
    }

    function In(r, o, e) {
      var t = r.cm && r.cm.state.suppressEdits;
      if (!t || e) {
        for (var s, i = r.history, n = r.sel, a = "undo" == o ? i.done : i.undone, l = "undo" == o ? i.undone : i.done, c = 0; c < a.length && (s = a[c], e ? !s.ranges || s.equals(r.sel) : s.ranges); c++);
        if (c != a.length) {
          for (i.lastOrigin = i.lastSelOrigin = null;;) {
            if (!(s = a.pop()).ranges) {
              if (t) return void a.push(s);
              break
            }
            if (mn(s, l), e && !s.equals(r.sel)) return void Tn(r, s, {
              clearRedo: !1
            });
            n = s
          }
          var u = [];
          mn(n, l), l.push({
            changes: u,
            generation: i.generation
          }), i.generation = s.generation || ++i.maxGeneration;
          for (var d = E(r, "beforeChange") || r.cm && E(r.cm, "beforeChange"), f = function(e) {
            var i = s.changes[e];
            if (i.origin = o, d && !Pn(r, i, !1)) return a.length = 0, {};
            u.push(dn(r, i));
            var t = e ? en(r, i) : U(a);
            Rn(r, i, t, yn(r, i)), !e && r.cm && r.cm.scrollIntoView({
              from: i.from,
              to: Zi(i)
            });
            var n = [];
            an(r, function(e, t) {
              t || -1 != w(n, e.history) || (Bn(e.history, i), n.push(e.history)), Rn(e, i, null, yn(e, i))
            })
          }, p = s.changes.length - 1; 0 <= p; --p) {
            var h = f(p);
            if (h) return h.v
          }
        }
      }
    }

    function Nn(e, t) {
      if (0 != t && (e.first += t, e.sel = new ds(y(e.sel.ranges, function(e) {
        return new fs(ie(e.anchor.line + t, e.anchor.ch), ie(e.head.line + t, e.head.ch))
      }), e.sel.primIndex), e.cm)) {
        Vt(e.cm, e.first, e.first - t, t);
        for (var i = e.cm.display, n = i.viewFrom; n < i.viewTo; n++) Qt(e.cm, n, "gutter")
      }
    }

    function Rn(e, t, i, n) {
      if (e.cm && !e.cm.curOp) return Mi(e.cm, Rn)(e, t, i, n);
      if (t.to.line < e.first) Nn(e, t.text.length - 1 - (t.to.line - t.from.line));
      else if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var r = t.text.length - 1 - (e.first - t.from.line);
          Nn(e, r), t = {
            from: ie(e.first, 0),
            to: ie(t.to.line + r, t.to.ch),
            text: [U(t.text)],
            origin: t.origin
          }
        }
        var o = e.lastLine();
        t.to.line > o && (t = {
          from: t.from,
          to: ie(o, Y(e, o).text.length),
          text: [t.text[0]],
          origin: t.origin
        }), t.removed = V(e, t.from, t.to), i || (i = en(e, t)), e.cm ? function(e, t, i) {
          var n = e.doc,
            r = e.display,
            o = t.from,
            s = t.to,
            a = !1,
            l = o.line;
          e.options.lineWrapping || (l = Z(Pe(Y(n, o.line))), n.iter(l, s.line + 1, function(e) {
            return e == r.maxLine ? a = !0 : void 0
          })), -1 < n.sel.contains(t.from, t.to) && h(e), sn(n, t, i, Ut(e)), e.options.lineWrapping || (n.iter(l, o.line + t.text.length, function(e) {
            var t = Fe(e);
            t > r.maxLineLength && (r.maxLine = e, r.maxLineLength = t, r.maxLineChanged = !0, a = !1)
          }), a && (e.curOp.updateMaxLine = !0)),
            function(e, t) {
              if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                for (var i = e.first, n = t - 1; i < n; n--) {
                  var r = Y(e, n).stateAfter;
                  if (r && (!(r instanceof Go) || n + r.lookAhead < t)) {
                    i = n + 1;
                    break
                  }
                }
                e.highlightFrontier = Math.min(e.highlightFrontier, i)
              }
            }(n, o.line), Ei(e, 400);
          var c = t.text.length - (s.line - o.line) - 1;
          t.full ? Vt(e) : o.line != s.line || 1 != t.text.length || on(e.doc, t) ? Vt(e, o.line, s.line + 1, c) : Qt(e, o.line, "text");
          var u = E(e, "changes"),
            d = E(e, "change");
          if (d || u) {
            var f = {
              from: o,
              to: s,
              text: t.text,
              removed: t.removed,
              origin: t.origin
            };
            d && Ze(e, "change", e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
          }
          e.display.selForContextMenu = null
        }(e.cm, t, n) : sn(e, t, n), $n(e, i, $o)
      }
    }

    function Fn(e, t, i, n, r) {
      var o;
      n || (n = i), ne(n, i) < 0 && (i = (o = [n, i])[0], n = o[1]), "string" == typeof t && (t = e.splitLines(t)), qn(e, {
        from: i,
        to: n,
        text: t,
        origin: r
      })
    }

    function Hn(e, t, i, n) {
      i < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
    }

    function Wn(e, t, i, n) {
      for (var r = 0; r < e.length; ++r) {
        var o = e[r],
          s = !0;
        if (o.ranges) {
          o.copied || ((o = e[r] = o.deepCopy()).copied = !0);
          for (var a = 0; a < o.ranges.length; a++) Hn(o.ranges[a].anchor, t, i, n), Hn(o.ranges[a].head, t, i, n)
        } else {
          for (var l = 0; l < o.changes.length; ++l) {
            var c = o.changes[l];
            if (i < c.from.line) c.from = ie(c.from.line + n, c.from.ch), c.to = ie(c.to.line + n, c.to.ch);
            else if (t <= c.to.line) {
              s = !1;
              break
            }
          }
          s || (e.splice(0, r + 1), r = 0)
        }
      }
    }

    function Bn(e, t) {
      var i = t.from.line,
        n = t.to.line,
        r = t.text.length - (n - i) - 1;
      Wn(e.done, i, n, r), Wn(e.undone, i, n, r)
    }

    function Un(e, t, i, n) {
      var r = t,
        o = t;
      return "number" == typeof t ? o = Y(e, le(e, t)) : r = Z(t), null == r ? null : (n(o, r) && e.cm && Qt(e.cm, r, i), o)
    }

    function Gn(e) {
      this.lines = e, this.parent = null;
      for (var t = 0, i = 0; i < e.length; ++i) e[i].parent = this, t += e[i].height;
      this.height = t
    }

    function Kn(e) {
      this.children = e;
      for (var t = 0, i = 0, n = 0; n < e.length; ++n) {
        var r = e[n];
        t += r.chunkSize(), i += r.height, r.parent = this
      }
      this.size = t, this.height = i, this.parent = null
    }

    function Yn(e, t, i) {
      Re(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && hi(e, i)
    }

    function Vn(t, n, r, e, i) {
      if (e && e.shared) return function(e, i, n, r, o) {
        (r = f(r)).shared = !1;
        var s = [Vn(e, i, n, r, o)],
          a = s[0],
          l = r.widgetNode;
        return an(e, function(e) {
          l && (r.widgetNode = l.cloneNode(!0)), s.push(Vn(e, ce(e, i), ce(e, n), r, o));
          for (var t = 0; t < e.linked.length; ++t)
            if (e.linked[t].isParent) return;
          a = U(s)
        }), new gs(s, a)
      }(t, n, r, e, i);
      if (t.cm && !t.cm.curOp) return Mi(t.cm, Vn)(t, n, r, e, i);
      var o = new ms(t, i),
        s = ne(n, r);
      if (e && f(e, o, !1), 0 < s || 0 == s && !1 !== o.clearWhenEmpty) return o;
      if (o.replacedWith && (o.collapsed = !0, o.widgetNode = d("span", [o.replacedWith], "CodeMirror-widget"), e.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), e.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
        if (Ee(t, n.line, n, r, o) || n.line != r.line && Ee(t, r.line, n, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
        Qo = !0
      }
      o.addToHistory && pn(t, {
        from: n,
        to: r,
        origin: "markText"
      }, t.sel, NaN);
      var a, l = n.line,
        c = t.cm;
      if (t.iter(l, r.line + 1, function(e) {
        var t, i;
        c && o.collapsed && !c.options.lineWrapping && Pe(e) == c.display.maxLine && (a = !0), o.collapsed && l != n.line && X(e, 0), t = e, i = new we(o, l == n.line ? n.ch : null, l == r.line ? r.ch : null), t.markedSpans = t.markedSpans ? t.markedSpans.concat([i]) : [i], i.marker.attachLine(t), ++l
      }), o.collapsed && t.iter(n.line, r.line + 1, function(e) {
        Ie(t, e) && X(e, 0)
      }), o.clearOnEnter && qo(o, "beforeCursorEnter", function() {
        return o.clear()
      }), o.readOnly && (Vo = !0, (t.history.done.length || t.history.undone.length) && t.clearHistory()), o.collapsed && (o.id = ++hs, o.atomic = !0), c) {
        if (a && (c.curOp.updateMaxLine = !0), o.collapsed) Vt(c, n.line, r.line + 1);
        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
          for (var u = n.line; u <= r.line; u++) Qt(c, u, "text");
        o.atomic && zn(c.doc), Ze(c, "markerAdded", c, o)
      }
      return o
    }

    function Qn(e) {
      return e.findMarks(ie(e.first, 0), e.clipPos(ie(e.lastLine())), function(e) {
        return e.parent
      })
    }

    function Xn(o) {
      for (var e = function(e) {
        var t = o[e],
          i = [t.primary.doc];
        an(t.primary.doc, function(e) {
          return i.push(e)
        });
        for (var n = 0; n < t.markers.length; n++) {
          var r = t.markers[n]; - 1 == w(i, r.doc) && (r.parent = null, t.markers.splice(n--, 1))
        }
      }, t = 0; t < o.length; t++) e(t)
    }

    function Zn(e) {
      var r = this;
      if (Jn(r), !m(r, e) && !ut(r.display, e)) {
        P(e), Jr && (bs = +new Date);
        var o = Kt(r, e, !0),
          t = e.dataTransfer.files;
        if (o && !r.isReadOnly())
          if (t && t.length && window.FileReader && window.File)
            for (var s = t.length, a = Array(s), l = 0, i = function(e, i) {
              if (!r.options.allowDropFileTypes || -1 != w(r.options.allowDropFileTypes, e.type)) {
                var n = new FileReader;
                n.onload = Mi(r, function() {
                  var e = n.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), a[i] = e, ++l == s) {
                    var t = {
                      from: o = ce(r.doc, o),
                      to: o,
                      text: r.doc.splitLines(a.join(r.doc.lineSeparator())),
                      origin: "paste"
                    };
                    qn(r.doc, t), Sn(r.doc, Xi(o, Zi(t)))
                  }
                }), n.readAsText(e)
              }
            }, n = 0; n < s; ++n) i(t[n], n);
          else {
            if (r.state.draggingText && -1 < r.doc.sel.contains(o)) return r.state.draggingText(e), void setTimeout(function() {
              return r.display.input.focus()
            }, 20);
            try {
              var c = e.dataTransfer.getData("Text");
              if (c) {
                var u;
                if (r.state.draggingText && !r.state.draggingText.copy && (u = r.listSelections()), $n(r.doc, Xi(o, o)), u)
                  for (var d = 0; d < u.length; ++d) Fn(r.doc, "", u[d].anchor, u[d].head, "drag");
                r.replaceSelection(c, "around", "paste"), r.display.input.focus()
              }
            } catch (e) {}
          }
      }
    }

    function Jn(e) {
      e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
    }

    function er(t) {
      if (document.getElementsByClassName) {
        for (var e = document.getElementsByClassName("CodeMirror"), i = [], n = 0; n < e.length; n++) {
          var r = e[n].CodeMirror;
          r && i.push(r)
        }
        i.length && i[0].operation(function() {
          for (var e = 0; e < i.length; e++) t(i[e])
        })
      }
    }

    function tr() {
      var e;
      ws || (qo(window, "resize", function() {
        null == e && (e = setTimeout(function() {
          e = null, er(ir)
        }, 100))
      }), qo(window, "blur", function() {
        return er(ci)
      }), ws = !0)
    }

    function ir(e) {
      var t = e.display;
      t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
    }

    function nr(e) {
      var t = e.split(/-(?!$)/);
      e = t[t.length - 1];
      for (var i, n, r, o, s = 0; s < t.length - 1; s++) {
        var a = t[s];
        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
        else if (/^a(lt)?$/i.test(a)) i = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) n = !0;
        else {
          if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
          r = !0
        }
      }
      return i && (e = "Alt-" + e), n && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
    }

    function rr(e) {
      var t = {};
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var n = e[i];
          if (/^(name|fallthrough|(de|at)tach)$/.test(i)) continue;
          if ("..." == n) {
            delete e[i];
            continue
          }
          for (var r = y(i.split(" "), nr), o = 0; o < r.length; o++) {
            var s = void 0,
              a = void 0;
            s = o == r.length - 1 ? (a = r.join(" "), n) : (a = r.slice(0, o + 1).join(" "), "...");
            var l = t[a];
            if (l) {
              if (l != s) throw new Error("Inconsistent bindings for " + a)
            } else t[a] = s
          }
          delete e[i]
        }
      for (var c in t) e[c] = t[c];
      return e
    }

    function or(e, t, i, n) {
      var r = (t = cr(t)).call ? t.call(e, n) : t[e];
      if (!1 === r) return "nothing";
      if ("..." === r) return "multi";
      if (null != r && i(r)) return "handled";
      if (t.fallthrough) {
        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return or(e, t.fallthrough, i, n);
        for (var o = 0; o < t.fallthrough.length; o++) {
          var s = or(e, t.fallthrough[o], i, n);
          if (s) return s
        }
      }
    }

    function sr(e) {
      var t = "string" == typeof e ? e : _s[e.keyCode];
      return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }

    function ar(e, t, i) {
      var n = e;
      return t.altKey && "Alt" != n && (e = "Alt-" + e), (vo ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (vo ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e), !i && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e
    }

    function lr(e, t) {
      if (ro && 34 == e.keyCode && e.char) return !1;
      var i = _s[e.keyCode];
      return null != i && !e.altGraphKey && (3 == e.keyCode && e.code && (i = e.code), ar(i, e, t))
    }

    function cr(e) {
      return "string" == typeof e ? Ss[e] : e
    }

    function ur(t, e) {
      for (var i = t.doc.sel.ranges, n = [], r = 0; r < i.length; r++) {
        for (var o = e(i[r]); n.length && ne(o.from, U(n).to) <= 0;) {
          var s = n.pop();
          if (ne(s.from, o.from) < 0) {
            o.from = s.from;
            break
          }
        }
        n.push(o)
      }
      ji(t, function() {
        for (var e = n.length - 1; 0 <= e; e--) Fn(t.doc, "", n[e].from, n[e].to, "+delete");
        mi(t)
      })
    }

    function dr(e, t, i) {
      var n = z(e.text, t + i, i);
      return n < 0 || n > e.text.length ? null : n
    }

    function fr(e, t, i) {
      var n = dr(e, t.ch, i);
      return null == n ? null : new ie(t.line, n, i < 0 ? "after" : "before")
    }

    function pr(e, t, i, n, r) {
      if (e) {
        var o = L(i, t.doc.direction);
        if (o) {
          var s, a = r < 0 ? U(o) : o[0],
            l = r < 0 == (1 == a.level) ? "after" : "before";
          if (0 < a.level || "rtl" == t.doc.direction) {
            var c = wt(t, i);
            s = r < 0 ? i.text.length - 1 : 0;
            var u = _t(t, c, s).top;
            s = j(function(e) {
              return _t(t, c, e).top == u
            }, r < 0 == (1 == a.level) ? a.from : a.to - 1, s), "before" == l && (s = dr(i, s, 1))
          } else s = r < 0 ? a.to : a.from;
          return new ie(n, s, l)
        }
      }
      return new ie(n, r < 0 ? i.text.length : 0, r < 0 ? "before" : "after")
    }

    function hr(e, t) {
      var i = Y(e.doc, t),
        n = Pe(i);
      return n != i && (t = Z(n)), pr(!0, e, n, t, 1)
    }

    function mr(e, t) {
      var i = Y(e.doc, t),
        n = function(e) {
          for (var t; t = Le(e);) e = t.find(1, !0).line;
          return e
        }(i);
      return n != i && (t = Z(n)), pr(!0, e, i, t, -1)
    }

    function gr(e, t) {
      var i = hr(e, t.line),
        n = Y(e.doc, i.line),
        r = L(n, e.doc.direction);
      if (r && 0 != r[0].level) return i;
      var o = Math.max(0, n.text.search(/\S/)),
        s = t.line == i.line && t.ch <= o && t.ch;
      return ie(i.line, s ? 0 : o, i.sticky)
    }

    function vr(e, t, i) {
      if ("string" == typeof t && !(t = Ts[t])) return !1;
      e.display.input.ensurePolled();
      var n = e.display.shift,
        r = !1;
      try {
        e.isReadOnly() && (e.state.suppressEdits = !0), i && (e.display.shift = !1), r = t(e) != To
      } finally {
        e.display.shift = n, e.state.suppressEdits = !1
      }
      return r
    }

    function yr(e, t, i, n) {
      var r = e.state.keySeq;
      if (r) {
        if (sr(t)) return "handled";
        if (/\'$/.test(t) ? e.state.keySeq = null : $s.set(50, function() {
          e.state.keySeq == r && (e.state.keySeq = null, e.display.input.reset())
        }), br(e, r + " " + t, i, n)) return !0
      }
      return br(e, t, i, n)
    }

    function br(e, t, i, n) {
      var r = function(e, t, i) {
        for (var n = 0; n < e.state.keyMaps.length; n++) {
          var r = or(t, e.state.keyMaps[n], i, e);
          if (r) return r
        }
        return e.options.extraKeys && or(t, e.options.extraKeys, i, e) || or(t, e.options.keyMap, i, e)
      }(e, t, n);
      return "multi" == r && (e.state.keySeq = t), "handled" == r && Ze(e, "keyHandled", e, t, i), ("handled" == r || "multi" == r) && (P(i), oi(e)), !!r
    }

    function wr(t, e) {
      var i = lr(e, !0);
      return !!i && (e.shiftKey && !t.state.keySeq ? yr(t, "Shift-" + i, e, function(e) {
        return vr(t, e, !0)
      }) || yr(t, i, e, function(e) {
        return ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion) ? vr(t, e) : void 0
      }) : yr(t, i, e, function(e) {
        return vr(t, e)
      }))
    }

    function _r(e) {
      if (this.curOp.focus = C(), !m(this, e)) {
        Jr && eo < 11 && 27 == e.keyCode && (e.returnValue = !1);
        var t = e.keyCode;
        this.display.shift = 16 == t || e.shiftKey;
        var i = wr(this, e);
        ro && (Os = i ? t : null, !i && 88 == t && !Ro && (fo ? e.metaKey : e.ctrlKey) && this.replaceSelection("", null, "cut")), 18 != t || /\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className) || function(e) {
          function t(e) {
            18 != e.keyCode && e.altKey || (bo(i, "CodeMirror-crosshair"), A(document, "keyup", t), A(document, "mouseover", t))
          }
          var i = e.display.lineDiv;
          n(i, "CodeMirror-crosshair"), qo(document, "keyup", t), qo(document, "mouseover", t)
        }(this)
      }
    }

    function kr(e) {
      16 == e.keyCode && (this.doc.sel.shift = !1), m(this, e)
    }

    function xr(e) {
      var t;
      if (!(ut(this.display, e) || m(this, e) || e.ctrlKey && !e.altKey || fo && e.metaKey)) {
        var i = e.keyCode,
          n = e.charCode;
        if (ro && i == Os) return Os = null, void P(e);
        if (!ro || e.which && !(e.which < 10) || !wr(this, e)) {
          var r = String.fromCharCode(null == n ? i : n);
          "\b" != r && (yr(t = this, "'" + r + "'", e, function(e) {
            return vr(t, e, !0)
          }) || this.display.input.onKeyPress(e))
        }
      }
    }

    function Cr(e) {
      var i, t, n, r, o, s, a, l, c, u = this,
        d = u.display;
      if (!(m(u, e) || d.activeTouch && d.input.supportsTouch())) {
        if (d.input.ensurePolled(), d.shift = e.shiftKey, ut(d, e)) return void(to || (d.scroller.draggable = !1, setTimeout(function() {
          return d.scroller.draggable = !0
        }, 100)));
        if (!$r(u, e)) {
          var f = Kt(u, e),
            p = I(e),
            h = f ? (a = f, l = p, c = +new Date, Ms && Ms.compare(c, a, l) ? (js = Ms = null, "triple") : js && js.compare(c, a, l) ? (Ms = new zs(c, a, l), js = null, "double") : (js = new zs(c, a, l), Ms = null, "single")) : "single";
          window.focus(), 1 == p && u.state.selectingText && u.state.selectingText(e), f && (n = f, s = "Click", "double" == (r = h) ? s = "Double" + s : "triple" == r && (s = "Triple" + s), yr(i = u, ar(s = (1 == (t = p) ? "Left" : 2 == t ? "Middle" : "Right") + s, o = e), o, function(e) {
            if ("string" == typeof e && (e = Ts[e]), !e) return !1;
            var t = !1;
            try {
              i.isReadOnly() && (i.state.suppressEdits = !0), t = e(i, n) != To
            } finally {
              i.state.suppressEdits = !1
            }
            return t
          })) || (1 == p ? f ? function(e, t, i, n) {
            Jr ? setTimeout(v(si, e), 0) : e.curOp.focus = C();
            var r, o = function(e, t, i) {
                var n = e.getOption("configureMouse"),
                  r = n ? n(e, t, i) : {};
                if (null == r.unit) {
                  var o = po ? i.shiftKey && i.metaKey : i.altKey;
                  r.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                }
                return (null == r.extend || e.doc.extend) && (r.extend = e.doc.extend || i.shiftKey), null == r.addNew && (r.addNew = fo ? i.metaKey : i.ctrlKey), null == r.moveOnDrag && (r.moveOnDrag = !(fo ? i.altKey : i.ctrlKey)), r
              }(e, i, n),
              s = e.doc.sel;
            e.options.dragDrop && Do && !e.isReadOnly() && "single" == i && -1 < (r = s.contains(t)) && (ne((r = s.ranges[r]).from(), t) < 0 || 0 < t.xRel) && (0 < ne(r.to(), t) || t.xRel < 0) ? (a = e, l = n, c = t, u = o, d = a.display, f = !1, p = Mi(a, function(e) {
              to && (d.scroller.draggable = !1), a.state.draggingText = !1, A(d.wrapper.ownerDocument, "mouseup", p), A(d.wrapper.ownerDocument, "mousemove", h), A(d.scroller, "dragstart", m), A(d.scroller, "drop", p), f || (P(e), u.addNew || _n(a.doc, c, null, null, u.extend), to || Jr && 9 == eo ? setTimeout(function() {
                d.wrapper.ownerDocument.body.focus(), d.input.focus()
              }, 20) : d.input.focus())
            }), h = function(e) {
              f = f || 10 <= Math.abs(l.clientX - e.clientX) + Math.abs(l.clientY - e.clientY)
            }, m = function() {
              return f = !0
            }, to && (d.scroller.draggable = !0), (a.state.draggingText = p).copy = !u.moveOnDrag, d.scroller.dragDrop && d.scroller.dragDrop(), qo(d.wrapper.ownerDocument, "mouseup", p), qo(d.wrapper.ownerDocument, "mousemove", h), qo(d.scroller, "dragstart", m), qo(d.scroller, "drop", p), ai(a), setTimeout(function() {
              return d.input.focus()
            }, 20)) : function(g, e, v, y) {
              function s(e) {
                if (0 != ne(x, e))
                  if (x = e, "rectangle" == y.unit) {
                    for (var t = [], i = g.options.tabSize, n = S(Y(b, v.line).text, v.ch, i), r = S(Y(b, e.line).text, e.ch, i), o = Math.min(n, r), s = Math.max(n, r), a = Math.min(v.line, e.line), l = Math.min(g.lastLine(), Math.max(v.line, e.line)); a <= l; a++) {
                      var c = Y(b, a).text,
                        u = T(c, o, i);
                      o == s ? t.push(new fs(ie(a, u), ie(a, u))) : c.length > u && t.push(new fs(ie(a, u), ie(a, T(c, s, i))))
                    }
                    t.length || t.push(new fs(v, v)), Tn(b, Qi(g, k.ranges.slice(0, _).concat(t), _), {
                      origin: "*mouse",
                      scroll: !1
                    }), g.scrollIntoView(e)
                  } else {
                    var d, f = w,
                      p = Sr(g, e, y.unit),
                      h = f.anchor;
                    h = 0 < ne(p.anchor, h) ? (d = p.head, ae(f.from(), p.anchor)) : (d = p.anchor, se(f.to(), p.head));
                    var m = k.ranges.slice(0);
                    m[_] = function(e, t) {
                      var i = t.anchor,
                        n = t.head,
                        r = Y(e.doc, i.line);
                      if (0 == ne(i, n) && i.sticky == n.sticky) return t;
                      var o = L(r);
                      if (!o) return t;
                      var s = M(o, i.ch, i.sticky),
                        a = o[s];
                      if (a.from != i.ch && a.to != i.ch) return t;
                      var l, c = s + (a.from == i.ch == (1 != a.level) ? 0 : 1);
                      if (0 == c || c == o.length) return t;
                      if (n.line != i.line) l = 0 < (n.line - i.line) * ("ltr" == e.doc.direction ? 1 : -1);
                      else {
                        var u = M(o, n.ch, n.sticky),
                          d = u - s || (n.ch - i.ch) * (1 == a.level ? -1 : 1);
                        l = u == c - 1 || u == c ? d < 0 : 0 < d
                      }
                      var f = o[c + (l ? -1 : 0)],
                        p = l == (1 == f.level),
                        h = p ? f.from : f.to,
                        m = p ? "after" : "before";
                      return i.ch == h && i.sticky == m ? t : new fs(new ie(i.line, h, m), n)
                    }(g, new fs(ce(b, h), d)), Tn(b, Qi(g, m, _), Oo)
                  }
              }

              function t(e) {
                g.state.selectingText = !1, c = 1 / 0, e && (P(e), a.input.focus()), A(a.wrapper.ownerDocument, "mousemove", r), A(a.wrapper.ownerDocument, "mouseup", o), b.history.lastSelOrigin = null
              }
              var a = g.display,
                b = g.doc;
              P(e);
              var w, _, k = b.sel,
                i = k.ranges;
              if (y.addNew && !y.extend ? (_ = b.sel.contains(v), w = -1 < _ ? i[_] : new fs(v, v)) : (w = b.sel.primary(), _ = b.sel.primIndex), "rectangle" == y.unit) y.addNew || (w = new fs(v, v)), v = Kt(g, e, !0, !0), _ = -1;
              else {
                var n = Sr(g, v, y.unit);
                w = y.extend ? wn(w, n.anchor, n.head, y.extend) : n
              }
              y.addNew ? -1 == _ ? (_ = i.length, Tn(b, Qi(g, i.concat([w]), _), {
                scroll: !1,
                origin: "*mouse"
              })) : 1 < i.length && i[_].empty() && "char" == y.unit && !y.extend ? (Tn(b, Qi(g, i.slice(0, _).concat(i.slice(_ + 1)), 0), {
                scroll: !1,
                origin: "*mouse"
              }), k = b.sel) : xn(b, _, w, Oo) : (Tn(b, new ds([w], _ = 0), Oo), k = b.sel);
              var x = v,
                l = a.wrapper.getBoundingClientRect(),
                c = 0,
                r = Mi(g, function(e) {
                  0 !== e.buttons && I(e) ? function e(t) {
                    var i = ++c,
                      n = Kt(g, t, !0, "rectangle" == y.unit);
                    if (n)
                      if (0 != ne(n, x)) {
                        g.curOp.focus = C(), s(n);
                        var r = fi(a, b);
                        (n.line >= r.to || n.line < r.from) && setTimeout(Mi(g, function() {
                          c == i && e(t)
                        }), 150)
                      } else {
                        var o = t.clientY < l.top ? -20 : t.clientY > l.bottom ? 20 : 0;
                        o && setTimeout(Mi(g, function() {
                          c == i && (a.scroller.scrollTop += o, e(t))
                        }), 50)
                      }
                  }(e) : t(e)
                }),
                o = Mi(g, t);
              g.state.selectingText = o, qo(a.wrapper.ownerDocument, "mousemove", r), qo(a.wrapper.ownerDocument, "mouseup", o)
            }(e, n, t, o);
            var a, l, c, u, d, f, p, h, m
          }(u, f, h, e) : D(e) == d.scroller && P(e) : 2 == p ? (f && _n(u.doc, f), setTimeout(function() {
            return d.input.focus()
          }, 20)) : 3 == p && (yo ? u.display.input.onContextMenu(e) : ai(u)))
        }
      }
    }

    function Sr(e, t, i) {
      if ("char" == i) return new fs(t, t);
      if ("word" == i) return e.findWordAt(t);
      if ("line" == i) return new fs(ie(t.line, 0), ce(e.doc, ie(t.line + 1, 0)));
      var n = i(e, t);
      return new fs(n.from, n.to)
    }

    function Tr(e, t, i, n) {
      var r, o;
      if (t.touches) r = t.touches[0].clientX, o = t.touches[0].clientY;
      else try {
        r = t.clientX, o = t.clientY
      } catch (t) {
        return !1
      }
      if (r >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
      n && P(t);
      var s = e.display,
        a = s.lineDiv.getBoundingClientRect();
      if (o > a.bottom || !E(e, i)) return u(t);
      o -= a.top - s.viewOffset;
      for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
        var c = s.gutters.childNodes[l];
        if (c && c.getBoundingClientRect().right >= r) return p(e, i, e, J(e.doc, o), e.display.gutterSpecs[l].className, t), u(t)
      }
    }

    function $r(e, t) {
      return Tr(e, t, "gutterClick", !0)
    }

    function Or(e, t) {
      var i, n;
      ut(e.display, t) || (n = t, E(i = e, "gutterContextMenu") && Tr(i, n, "gutterContextMenu", !1)) || m(e, t, "contextmenu") || yo || e.display.input.onContextMenu(t)
    }

    function zr(e) {
      e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Tt(e)
    }

    function jr(e, t, i) {
      if (!t != !(i && i != Ls)) {
        var n = e.display.dragFunctions,
          r = t ? qo : A;
        r(e.display.scroller, "dragstart", n.start), r(e.display.scroller, "dragenter", n.enter), r(e.display.scroller, "dragover", n.over), r(e.display.scroller, "dragleave", n.leave), r(e.display.scroller, "drop", n.drop)
      }
    }

    function Mr(e) {
      e.options.lineWrapping ? (n(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (bo(e.display.wrapper, "CodeMirror-wrap"), He(e)), Gt(e), Vt(e), Tt(e), setTimeout(function() {
        return xi(e)
      }, 100)
    }

    function Lr(e, t) {
      var i = this;
      if (!(this instanceof Lr)) return new Lr(e, t);
      this.options = t = t ? f(t) : {}, f(As, t, !1);
      var n = t.value;
      "string" == typeof n ? n = new ys(n, t.mode, null, t.lineSeparator, t.direction) : t.mode && (n.modeOption = t.mode), this.doc = n;
      var r = new Lr.inputStyles[t.inputStyle](this),
        o = this.display = new Gi(e, n, r, t);
      for (var s in zr(o.wrapper.CodeMirror = this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Si(this), this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: !1,
        delayingBlurEvent: !1,
        focused: !1,
        suppressEdits: !1,
        pasteIncoming: -1,
        cutIncoming: -1,
        selectingText: !1,
        draggingText: !1,
        highlight: new _o,
        keySeq: null,
        specialChars: null
      }, t.autofocus && !uo && o.input.focus(), Jr && eo < 11 && setTimeout(function() {
        return i.display.input.reset(!0)
      }, 20),
        function(r) {
          function o() {
            a.activeTouch && (i = setTimeout(function() {
              return a.activeTouch = null
            }, 1e3), (n = a.activeTouch).end = +new Date)
          }

          function s(e, t) {
            if (null == t.left) return !0;
            var i = t.left - e.left,
              n = t.top - e.top;
            return 400 < i * i + n * n
          }
          var a = r.display;
          qo(a.scroller, "mousedown", Mi(r, Cr)), qo(a.scroller, "dblclick", Jr && eo < 11 ? Mi(r, function(e) {
            if (!m(r, e)) {
              var t = Kt(r, e);
              if (t && !$r(r, e) && !ut(r.display, e)) {
                P(e);
                var i = r.findWordAt(t);
                _n(r.doc, i.anchor, i.head)
              }
            }
          }) : function(e) {
            return m(r, e) || P(e)
          }), qo(a.scroller, "contextmenu", function(e) {
            return Or(r, e)
          });
          var i, n = {
            end: 0
          };
          qo(a.scroller, "touchstart", function(e) {
            if (!m(r, e) && ! function(e) {
              if (1 != e.touches.length) return !1;
              var t = e.touches[0];
              return t.radiusX <= 1 && t.radiusY <= 1
            }(e) && !$r(r, e)) {
              a.input.ensurePolled(), clearTimeout(i);
              var t = +new Date;
              a.activeTouch = {
                start: t,
                moved: !1,
                prev: t - n.end <= 300 ? n : null
              }, 1 == e.touches.length && (a.activeTouch.left = e.touches[0].pageX, a.activeTouch.top = e.touches[0].pageY)
            }
          }), qo(a.scroller, "touchmove", function() {
            a.activeTouch && (a.activeTouch.moved = !0)
          }), qo(a.scroller, "touchend", function(e) {
            var t = a.activeTouch;
            if (t && !ut(a, e) && null != t.left && !t.moved && new Date - t.start < 300) {
              var i, n = r.coordsChar(a.activeTouch, "page");
              i = !t.prev || s(t, t.prev) ? new fs(n, n) : !t.prev.prev || s(t, t.prev.prev) ? r.findWordAt(n) : new fs(ie(n.line, 0), ce(r.doc, ie(n.line + 1, 0))), r.setSelection(i.anchor, i.head), r.focus(), P(e)
            }
            o()
          }), qo(a.scroller, "touchcancel", o), qo(a.scroller, "scroll", function() {
            a.scroller.clientHeight && (bi(r, a.scroller.scrollTop), _i(r, a.scroller.scrollLeft, !0), p(r, "scroll", r))
          }), qo(a.scroller, "mousewheel", function(e) {
            return Vi(r, e)
          }), qo(a.scroller, "DOMMouseScroll", function(e) {
            return Vi(r, e)
          }), qo(a.wrapper, "scroll", function() {
            return a.wrapper.scrollTop = a.wrapper.scrollLeft = 0
          }), a.dragFunctions = {
            enter: function(e) {
              m(r, e) || q(e)
            },
            over: function(e) {
              m(r, e) || (function(e, t) {
                var i = Kt(e, t);
                if (i) {
                  var n = document.createDocumentFragment();
                  ii(e, i, n), e.display.dragCursor || (e.display.dragCursor = k("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), _(e.display.dragCursor, n)
                }
              }(r, e), q(e))
            },
            start: function(e) {
              return function(e, t) {
                if (Jr && (!e.state.draggingText || +new Date - bs < 100)) q(t);
                else if (!m(e, t) && !ut(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !oo)) {
                  var i = k("img", null, null, "position: fixed; left: 0; top: 0;");
                  i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ro && (i.width = i.height = 1, e.display.wrapper.appendChild(i), i._top = i.offsetTop), t.dataTransfer.setDragImage(i, 0, 0), ro && i.parentNode.removeChild(i)
                }
              }(r, e)
            },
            drop: Mi(r, Zn),
            leave: function(e) {
              m(r, e) || Jn(r)
            }
          };
          var e = a.input.getField();
          qo(e, "keyup", function(e) {
            return kr.call(r, e)
          }), qo(e, "keydown", Mi(r, _r)), qo(e, "keypress", Mi(r, xr)), qo(e, "focus", function(e) {
            return li(r, e)
          }), qo(e, "blur", function(e) {
            return ci(r, e)
          })
        }(this), tr(), Ti(this), this.curOp.forceUpdate = !0, ln(this, n), t.autofocus && !uo || this.hasFocus() ? setTimeout(v(li, this), 20) : ci(this), Es) Es.hasOwnProperty(s) && Es[s](i, t[s], Ls);
      Hi(this), t.finishInit && t.finishInit(this);
      for (var a = 0; a < Ps.length; ++a) Ps[a](i);
      $i(this), to && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
    }

    function Ar(e, t, i, n) {
      var r, o = e.doc;
      null == i && (i = "add"), "smart" == i && (o.mode.indent ? r = pe(e, t).state : i = "prev");
      var s = e.options.tabSize,
        a = Y(o, t),
        l = S(a.text, null, s);
      a.stateAfter && (a.stateAfter = null);
      var c, u = a.text.match(/^\s*/)[0];
      if (n || /\S/.test(a.text)) {
        if ("smart" == i && ((c = o.mode.indent(r, a.text.slice(u.length), a.text)) == To || 150 < c)) {
          if (!n) return;
          i = "prev"
        }
      } else c = 0, i = "not";
      "prev" == i ? c = t > o.first ? S(Y(o, t - 1).text, null, s) : 0 : "add" == i ? c = l + e.options.indentUnit : "subtract" == i ? c = l - e.options.indentUnit : "number" == typeof i && (c = l + i), c = Math.max(0, c);
      var d = "",
        f = 0;
      if (e.options.indentWithTabs)
        for (var p = Math.floor(c / s); p; --p) f += s, d += "\t";
      if (f < c && (d += x(c - f)), d != u) return Fn(o, d, ie(t, 0), ie(t, u.length), "+input"), !(a.stateAfter = null);
      for (var h = 0; h < o.sel.ranges.length; h++) {
        var m = o.sel.ranges[h];
        if (m.head.line == t && m.head.ch < u.length) {
          var g = ie(t, u.length);
          xn(o, h, new fs(g, g));
          break
        }
      }
    }

    function Er(e) {
      qs = e
    }

    function Pr(e, t, i, n, r) {
      var o = e.doc;
      e.display.shift = !1, n || (n = o.sel);
      var s = +new Date - 200,
        a = "paste" == r || e.state.pasteIncoming > s,
        l = Io(t),
        c = null;
      if (a && 1 < n.ranges.length)
        if (qs && qs.text.join("\n") == t) {
          if (n.ranges.length % qs.text.length == 0) {
            c = [];
            for (var u = 0; u < qs.text.length; u++) c.push(o.splitLines(qs.text[u]))
          }
        } else l.length == n.ranges.length && e.options.pasteLinesPerSelection && (c = y(l, function(e) {
          return [e]
        }));
      for (var d = e.curOp.updateInput, f = n.ranges.length - 1; 0 <= f; f--) {
        var p = n.ranges[f],
          h = p.from(),
          m = p.to();
        p.empty() && (i && 0 < i ? h = ie(h.line, h.ch - i) : e.state.overwrite && !a ? m = ie(m.line, Math.min(Y(o, m.line).text.length, m.ch + U(l).length)) : a && qs && qs.lineWise && qs.text.join("\n") == t && (h = m = ie(h.line, 0)));
        var g = {
          from: h,
          to: m,
          text: c ? c[f % c.length] : l,
          origin: r || (a ? "paste" : e.state.cutIncoming > s ? "cut" : "+input")
        };
        qn(e.doc, g), Ze(e, "inputRead", e, g)
      }
      t && !a && Dr(e, t), mi(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
    }

    function qr(e, t) {
      var i = e.clipboardData && e.clipboardData.getData("Text");
      return i ? (e.preventDefault(), t.isReadOnly() || t.options.disableInput || ji(t, function() {
        return Pr(t, i, 0, null, "paste")
      }), !0) : void 0
    }

    function Dr(e, t) {
      if (e.options.electricChars && e.options.smartIndent)
        for (var i = e.doc.sel, n = i.ranges.length - 1; 0 <= n; n--) {
          var r = i.ranges[n];
          if (!(100 < r.head.ch || n && i.ranges[n - 1].head.line == r.head.line)) {
            var o = e.getModeAt(r.head),
              s = !1;
            if (o.electricChars) {
              for (var a = 0; a < o.electricChars.length; a++)
                if (-1 < t.indexOf(o.electricChars.charAt(a))) {
                  s = Ar(e, r.head.line, "smart");
                  break
                }
            } else o.electricInput && o.electricInput.test(Y(e.doc, r.head.line).text.slice(0, r.head.ch)) && (s = Ar(e, r.head.line, "smart"));
            s && Ze(e, "electricInput", e, r.head.line)
          }
        }
    }

    function Ir(e) {
      for (var t = [], i = [], n = 0; n < e.doc.sel.ranges.length; n++) {
        var r = e.doc.sel.ranges[n].head.line,
          o = {
            anchor: ie(r, 0),
            head: ie(r + 1, 0)
          };
        i.push(o), t.push(e.getRange(o.anchor, o.head))
      }
      return {
        text: t,
        ranges: i
      }
    }

    function Nr(e, t, i, n) {
      e.setAttribute("autocorrect", i ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t)
    }

    function Rr() {
      var e = k("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
        t = k("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return to ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), lo && (e.style.border = "1px solid black"), Nr(e), t
    }

    function Fr(n, r, o, e, s) {
      function t(e) {
        var t, i;
        if (null == (t = s ? function(t, i, a, e) {
          var l = L(i, t.doc.direction);
          if (!l) return fr(i, a, e);
          a.ch >= i.text.length ? (a.ch = i.text.length, a.sticky = "before") : a.ch <= 0 && (a.ch = 0, a.sticky = "after");
          var n = M(l, a.ch, a.sticky),
            r = l[n];
          if ("ltr" == t.doc.direction && r.level % 2 == 0 && (0 < e ? r.to > a.ch : r.from < a.ch)) return fr(i, a, e);
          var o, c = function(e, t) {
              return dr(i, e instanceof ie ? e.ch : e, t)
            },
            s = function(e) {
              return t.options.lineWrapping ? (o = o || wt(t, i), It(t, i, o, e)) : {
                begin: 0,
                end: i.text.length
              }
            },
            u = s("before" == a.sticky ? c(a, -1) : a.ch);
          if ("rtl" == t.doc.direction || 1 == r.level) {
            var d = 1 == r.level == e < 0,
              f = c(a, d ? 1 : -1);
            if (null != f && (d ? f <= r.to && f <= u.end : f >= r.from && f >= u.begin)) {
              var p = d ? "before" : "after";
              return new ie(a.line, f, p)
            }
          }
          var h = function(e, t, i) {
              for (var n = function(e, t) {
                return t ? new ie(a.line, c(e, 1), "before") : new ie(a.line, e, "after")
              }; 0 <= e && e < l.length; e += t) {
                var r = l[e],
                  o = 0 < t == (1 != r.level),
                  s = o ? i.begin : c(i.end, -1);
                if (r.from <= s && s < r.to) return n(s, o);
                if (s = o ? r.from : c(r.to, -1), i.begin <= s && s < i.end) return n(s, o)
              }
            },
            m = h(n + e, e, u);
          if (m) return m;
          var g = 0 < e ? u.end : c(u.begin, -1);
          return null == g || 0 < e && g == i.text.length || !(m = h(0 < e ? 0 : l.length - 1, e, s(g))) ? null : m
        }(n.cm, l, r, o) : fr(l, r, o))) {
          if (e || ((i = r.line + o) < n.first || i >= n.first + n.size || (r = new ie(i, r.ch, r.sticky), !(l = Y(n, i))))) return !1;
          r = pr(s, n.cm, l, r.line, o)
        } else r = t;
        return !0
      }
      var i = r,
        a = o,
        l = Y(n, r.line);
      if ("char" == e) t();
      else if ("column" == e) t(!0);
      else if ("word" == e || "group" == e)
        for (var c = null, u = "group" == e, d = n.cm && n.cm.getHelper(r, "wordChars"), f = !0; !(o < 0) || t(!f); f = !1) {
          var p = l.text.charAt(r.ch) || "\n",
            h = $(p, d) ? "w" : u && "\n" == p ? "n" : !u || /\s/.test(p) ? null : "p";
          if (!u || f || h || (h = "s"), c && c != h) {
            o < 0 && (o = 1, t(), r.sticky = "after");
            break
          }
          if (h && (c = h), 0 < o && !t(!f)) break
        }
      var m = Ln(n, r, i, a, !0);
      return re(i, m) && (m.hitSide = !0), m
    }

    function Hr(e, t, i, n) {
      var r, o, s = e.doc,
        a = t.left;
      if ("page" == n) {
        var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
          c = Math.max(l - .5 * Ft(e.display), 3);
        r = (0 < i ? t.bottom : t.top) + i * c
      } else "line" == n && (r = 0 < i ? t.bottom + 3 : t.top - 3);
      for (;
        (o = qt(e, a, r)).outside;) {
        if (i < 0 ? r <= 0 : r >= s.height) {
          o.hitSide = !0;
          break
        }
        r += 5 * i
      }
      return o
    }

    function Wr(e, t) {
      var i = bt(e, t.line);
      if (!i || i.hidden) return null;
      var n = Y(e.doc, t.line),
        r = vt(i, n, t.line),
        o = L(n, e.doc.direction),
        s = "left";
      o && (s = M(o, t.ch) % 2 ? "right" : "left");
      var a = kt(r.map, t.ch, s);
      return a.offset = "right" == a.collapse ? a.end : a.start, a
    }

    function Br(e, t) {
      return t && (e.bad = !0), e
    }

    function Ur(e, t, i) {
      var n;
      if (t == e.display.lineDiv) {
        if (!(n = e.display.lineDiv.childNodes[i])) return Br(e.clipPos(ie(e.display.viewTo - 1)), !0);
        t = null, i = 0
      } else
        for (n = t;; n = n.parentNode) {
          if (!n || n == e.display.lineDiv) return null;
          if (n.parentNode && n.parentNode == e.display.lineDiv) break
        }
      for (var r = 0; r < e.display.view.length; r++) {
        var o = e.display.view[r];
        if (o.node == n) return Gr(o, t, i)
      }
    }

    function Gr(c, e, t) {
      function i(e, t, i) {
        for (var n = -1; n < (d ? d.length : 0); n++)
          for (var r = n < 0 ? u.map : d[n], o = 0; o < r.length; o += 3) {
            var s = r[o + 2];
            if (s == e || s == t) {
              var a = Z(n < 0 ? c.line : c.rest[n]),
                l = r[o] + i;
              return (i < 0 || s != e) && (l = r[o + (i ? 1 : 0)]), ie(a, l)
            }
          }
      }
      var n = c.text.firstChild,
        r = !1;
      if (!e || !g(n, e)) return Br(ie(Z(c.line), 0), !0);
      if (e == n && (r = !0, e = n.childNodes[t], t = 0, !e)) {
        var o = c.rest ? U(c.rest) : c.line;
        return Br(ie(Z(o), o.text.length), r)
      }
      var s = 3 == e.nodeType ? e : null,
        a = e;
      for (s || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (s = e.firstChild, t && (t = s.nodeValue.length)); a.parentNode != n;) a = a.parentNode;
      var u = c.measure,
        d = u.maps,
        l = i(s, a, t);
      if (l) return Br(l, r);
      for (var f = a.nextSibling, p = s ? s.nodeValue.length - t : 0; f; f = f.nextSibling) {
        if (l = i(f, f.firstChild, 0)) return Br(ie(l.line, l.ch - p), r);
        p += f.textContent.length
      }
      for (var h = a.previousSibling, m = t; h; h = h.previousSibling) {
        if (l = i(h, h.firstChild, -1)) return Br(ie(l.line, l.ch + m), r);
        m += h.textContent.length
      }
    }
    var Kr = navigator.userAgent,
      Yr = navigator.platform,
      Vr = /gecko\/\d/i.test(Kr),
      Qr = /MSIE \d/.test(Kr),
      Xr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Kr),
      Zr = /Edge\/(\d+)/.exec(Kr),
      Jr = Qr || Xr || Zr,
      eo = Jr && (Qr ? document.documentMode || 6 : +(Zr || Xr)[1]),
      to = !Zr && /WebKit\//.test(Kr),
      io = to && /Qt\/\d+\.\d+/.test(Kr),
      no = !Zr && /Chrome\//.test(Kr),
      ro = /Opera\//.test(Kr),
      oo = /Apple Computer/.test(navigator.vendor),
      so = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Kr),
      ao = /PhantomJS/.test(Kr),
      lo = !Zr && /AppleWebKit/.test(Kr) && /Mobile\/\w+/.test(Kr),
      co = /Android/.test(Kr),
      uo = lo || co || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Kr),
      fo = lo || /Mac/.test(Yr),
      po = /\bCrOS\b/.test(Kr),
      ho = /win/i.test(Yr),
      mo = ro && Kr.match(/Version\/(\d*\.\d*)/);
    mo && (mo = Number(mo[1])), mo && 15 <= mo && (to = !(ro = !1));
    var go, vo = fo && (io || ro && (null == mo || mo < 12.11)),
      yo = Vr || Jr && 9 <= eo,
      bo = function(e, t) {
        var i = e.className,
          n = a(t).exec(i);
        if (n) {
          var r = i.slice(n.index + n[0].length);
          e.className = i.slice(0, n.index) + (r ? n[1] + r : "")
        }
      };
    go = document.createRange ? function(e, t, i, n) {
      var r = document.createRange();
      return r.setEnd(n || e, i), r.setStart(e, t), r
    } : function(e, t, i) {
      var n = document.body.createTextRange();
      try {
        n.moveToElementText(e.parentNode)
      } catch (e) {
        return n
      }
      return n.collapse(!0), n.moveEnd("character", i), n.moveStart("character", t), n
    };
    var wo = function(e) {
      e.select()
    };
    lo ? wo = function(e) {
      e.selectionStart = 0, e.selectionEnd = e.value.length
    } : Jr && (wo = function(e) {
      try {
        e.select()
      } catch (e) {}
    });
    var _o = function() {
      this.id = null
    };
    _o.prototype.set = function(e, t) {
      clearTimeout(this.id), this.id = setTimeout(t, e)
    };
    var ko, xo, Co, So = 30,
      To = {
        toString: function() {
          return "CodeMirror.Pass"
        }
      },
      $o = {
        scroll: !1
      },
      Oo = {
        origin: "*mouse"
      },
      zo = {
        origin: "+move"
      },
      jo = [""],
      Mo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
      Lo = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
      Ao = null,
      Eo = function() {
        function D(e, t, i) {
          this.level = e, this.from = t, this.to = i
        }
        var I = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          N = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
          R = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          F = /[stwN]/,
          H = /[LRr]/,
          W = /[Lb1n]/,
          B = /[1n]/;
        return function(e, t) {
          var i, n = "ltr" == t ? "L" : "R";
          if (0 == e.length || "ltr" == t && !R.test(e)) return !1;
          for (var r = e.length, o = [], s = 0; s < r; ++s) o.push((i = e.charCodeAt(s)) <= 247 ? I.charAt(i) : 1424 <= i && i <= 1524 ? "R" : 1536 <= i && i <= 1785 ? N.charAt(i - 1536) : 1774 <= i && i <= 2220 ? "r" : 8192 <= i && i <= 8203 ? "w" : 8204 == i ? "b" : "L");
          for (var a = 0, l = n; a < r; ++a) {
            var c = o[a];
            "m" == c ? o[a] = l : l = c
          }
          for (var u = 0, d = n; u < r; ++u) {
            var f = o[u];
            "1" == f && "r" == d ? o[u] = "n" : H.test(f) && ("r" == (d = f) && (o[u] = "R"))
          }
          for (var p = 1, h = o[0]; p < r - 1; ++p) {
            var m = o[p];
            "+" == m && "1" == h && "1" == o[p + 1] ? o[p] = "1" : "," != m || h != o[p + 1] || "1" != h && "n" != h || (o[p] = h), h = m
          }
          for (var g = 0; g < r; ++g) {
            var v = o[g];
            if ("," == v) o[g] = "N";
            else if ("%" == v) {
              var y = void 0;
              for (y = g + 1; y < r && "%" == o[y]; ++y);
              for (var b = g && "!" == o[g - 1] || y < r && "1" == o[y] ? "1" : "N", w = g; w < y; ++w) o[w] = b;
              g = y - 1
            }
          }
          for (var _ = 0, k = n; _ < r; ++_) {
            var x = o[_];
            "L" == k && "1" == x ? o[_] = "L" : H.test(x) && (k = x)
          }
          for (var C = 0; C < r; ++C)
            if (F.test(o[C])) {
              var S = void 0;
              for (S = C + 1; S < r && F.test(o[S]); ++S);
              for (var T = "L" == (C ? o[C - 1] : n), $ = T == ("L" == (S < r ? o[S] : n)) ? T ? "L" : "R" : n, O = C; O < S; ++O) o[O] = $;
              C = S - 1
            }
          for (var z, j = [], M = 0; M < r;)
            if (W.test(o[M])) {
              var L = M;
              for (++M; M < r && W.test(o[M]); ++M);
              j.push(new D(0, L, M))
            } else {
              var A = M,
                E = j.length;
              for (++M; M < r && "L" != o[M]; ++M);
              for (var P = A; P < M;)
                if (B.test(o[P])) {
                  A < P && j.splice(E, 0, new D(1, A, P));
                  var q = P;
                  for (++P; P < M && B.test(o[P]); ++P);
                  j.splice(E, 0, new D(2, q, P)), A = P
                } else ++P;
              A < M && j.splice(E, 0, new D(1, A, M))
            }
          return "ltr" == t && (1 == j[0].level && (z = e.match(/^\s+/)) && (j[0].from = z[0].length, j.unshift(new D(0, 0, z[0].length))), 1 == U(j).level && (z = e.match(/\s+$/)) && (U(j).to -= z[0].length, j.push(new D(0, r - z[0].length, r)))), "rtl" == t ? j.reverse() : j
        }
      }(),
      Po = [],
      qo = function(e, t, i) {
        if (e.addEventListener) e.addEventListener(t, i, !1);
        else if (e.attachEvent) e.attachEvent("on" + t, i);
        else {
          var n = e._handlers || (e._handlers = {});
          n[t] = (n[t] || Po).concat(i)
        }
      },
      Do = function() {
        if (Jr && eo < 9) return !1;
        var e = k("div");
        return "draggable" in e || "dragDrop" in e
      }(),
      Io = 3 != "\n\nb".split(/\n/).length ? function(e) {
        for (var t = 0, i = [], n = e.length; t <= n;) {
          var r = e.indexOf("\n", t); - 1 == r && (r = e.length);
          var o = e.slice(t, "\r" == e.charAt(r - 1) ? r - 1 : r),
            s = o.indexOf("\r"); - 1 != s ? (i.push(o.slice(0, s)), t += s + 1) : (i.push(o), t = r + 1)
        }
        return i
      } : function(e) {
        return e.split(/\r\n?|\n/)
      },
      No = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd
        } catch (e) {
          return !1
        }
      } : function(e) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange()
        } catch (e) {}
        return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
      },
      Ro = "oncopy" in (Co = k("div")) || (Co.setAttribute("oncopy", "return;"), "function" == typeof Co.oncopy),
      Fo = null,
      Ho = {},
      Wo = {},
      Bo = {},
      Uo = function(e, t, i) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = i
      };
    Uo.prototype.eol = function() {
      return this.pos >= this.string.length
    }, Uo.prototype.sol = function() {
      return this.pos == this.lineStart
    }, Uo.prototype.peek = function() {
      return this.string.charAt(this.pos) || void 0
    }, Uo.prototype.next = function() {
      return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
    }, Uo.prototype.eat = function(e) {
      var t = this.string.charAt(this.pos);
      return ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) ? (++this.pos, t) : void 0
    }, Uo.prototype.eatWhile = function(e) {
      for (var t = this.pos; this.eat(e););
      return this.pos > t
    }, Uo.prototype.eatSpace = function() {
      for (var e = this.pos;
           /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
      return this.pos > e
    }, Uo.prototype.skipToEnd = function() {
      this.pos = this.string.length
    }, Uo.prototype.skipTo = function(e) {
      var t = this.string.indexOf(e, this.pos);
      return -1 < t ? (this.pos = t, !0) : void 0
    }, Uo.prototype.backUp = function(e) {
      this.pos -= e
    }, Uo.prototype.column = function() {
      return this.lastColumnPos < this.start && (this.lastColumnValue = S(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? S(this.string, this.lineStart, this.tabSize) : 0)
    }, Uo.prototype.indentation = function() {
      return S(this.string, null, this.tabSize) - (this.lineStart ? S(this.string, this.lineStart, this.tabSize) : 0)
    }, Uo.prototype.match = function(e, t, i) {
      if ("string" != typeof e) {
        var n = this.string.slice(this.pos).match(e);
        return n && 0 < n.index ? null : (n && !1 !== t && (this.pos += n[0].length), n)
      }
      var r = function(e) {
        return i ? e.toLowerCase() : e
      };
      return r(this.string.substr(this.pos, e.length)) == r(e) ? (!1 !== t && (this.pos += e.length), !0) : void 0
    }, Uo.prototype.current = function() {
      return this.string.slice(this.start, this.pos)
    }, Uo.prototype.hideFirstChars = function(e, t) {
      this.lineStart += e;
      try {
        return t()
      } finally {
        this.lineStart -= e
      }
    }, Uo.prototype.lookAhead = function(e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e)
    }, Uo.prototype.baseToken = function() {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos)
    };
    var Go = function(e, t) {
        this.state = e, this.lookAhead = t
      },
      Ko = function(e, t, i, n) {
        this.state = t, this.doc = e, this.line = i, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1
      };
    Ko.prototype.lookAhead = function(e) {
      var t = this.doc.getLine(this.line + e);
      return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
    }, Ko.prototype.baseToken = function(e) {
      if (!this.baseTokens) return null;
      for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
      var t = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: t && t.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - e
      }
    }, Ko.prototype.nextLine = function() {
      this.line++, 0 < this.maxLookAhead && this.maxLookAhead--
    }, Ko.fromSaved = function(e, t, i) {
      return t instanceof Go ? new Ko(e, B(e.mode, t.state), i, t.lookAhead) : new Ko(e, B(e.mode, t), i)
    }, Ko.prototype.save = function(e) {
      var t = !1 !== e ? B(this.doc.mode, this.state) : this.state;
      return 0 < this.maxLookAhead ? new Go(t, this.maxLookAhead) : t
    };
    var Yo = function(e, t, i) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = i
      },
      Vo = !1,
      Qo = !1,
      Xo = function(e, t, i) {
        this.text = e, Te(this, t), this.height = i ? i(this) : 1
      };
    Xo.prototype.lineNo = function() {
      return Z(this)
    }, e(Xo);
    var Zo, Jo = {},
      es = {},
      ts = null,
      is = null,
      ns = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      rs = function(e, t, i) {
        this.cm = i;
        var n = this.vert = k("div", [k("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
          r = this.horiz = k("div", [k("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        n.tabIndex = r.tabIndex = -1, e(n), e(r), qo(n, "scroll", function() {
          n.clientHeight && t(n.scrollTop, "vertical")
        }), qo(r, "scroll", function() {
          r.clientWidth && t(r.scrollLeft, "horizontal")
        }), this.checkedZeroWidth = !1, Jr && eo < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
      };
    rs.prototype.update = function(e) {
      var t = e.scrollWidth > e.clientWidth + 1,
        i = e.scrollHeight > e.clientHeight + 1,
        n = e.nativeBarWidth;
      if (i) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
        var r = e.viewHeight - (t ? n : 0);
        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + r) + "px"
      } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
      if (t) {
        this.horiz.style.display = "block", this.horiz.style.right = i ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
        var o = e.viewWidth - e.barLeft - (i ? n : 0);
        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
      return !this.checkedZeroWidth && 0 < e.clientHeight && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
        right: i ? n : 0,
        bottom: t ? n : 0
      }
    }, rs.prototype.setScrollLeft = function(e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
    }, rs.prototype.setScrollTop = function(e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
    }, rs.prototype.zeroWidthHack = function() {
      var e = fo && !so ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new _o, this.disableVert = new _o
    }, rs.prototype.enableZeroWidthBar = function(i, n, r) {
      i.style.pointerEvents = "auto", n.set(1e3, function e() {
        var t = i.getBoundingClientRect();
        ("vert" == r ? document.elementFromPoint(t.right - 1, (t.top + t.bottom) / 2) : document.elementFromPoint((t.right + t.left) / 2, t.bottom - 1)) != i ? i.style.pointerEvents = "none" : n.set(1e3, e)
      })
    }, rs.prototype.clear = function() {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert)
    };
    var os = function() {};
    os.prototype.update = function() {
      return {
        bottom: 0,
        right: 0
      }
    }, os.prototype.setScrollLeft = function() {}, os.prototype.setScrollTop = function() {}, os.prototype.clear = function() {};
    var ss = {
        native: rs,
        null: os
      },
      as = 0,
      ls = function(e, t, i) {
        var n = e.display;
        this.viewport = t, this.visible = fi(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = mt(e), this.force = i, this.dims = Wt(e), this.events = []
      };
    ls.prototype.signal = function(e, t) {
      E(e, t) && this.events.push(arguments)
    }, ls.prototype.finish = function() {
      for (var e = 0; e < this.events.length; e++) p.apply(null, this.events[e])
    };
    var cs = 0,
      us = null;
    Jr ? us = -.53 : Vr ? us = 15 : no ? us = -.7 : oo && (us = -1 / 3);
    var ds = function(e, t) {
      this.ranges = e, this.primIndex = t
    };
    ds.prototype.primary = function() {
      return this.ranges[this.primIndex]
    }, ds.prototype.equals = function(e) {
      if (e == this) return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
      for (var t = 0; t < this.ranges.length; t++) {
        var i = this.ranges[t],
          n = e.ranges[t];
        if (!re(i.anchor, n.anchor) || !re(i.head, n.head)) return !1
      }
      return !0
    }, ds.prototype.deepCopy = function() {
      for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new fs(oe(this.ranges[t].anchor), oe(this.ranges[t].head));
      return new ds(e, this.primIndex)
    }, ds.prototype.somethingSelected = function() {
      for (var e = 0; e < this.ranges.length; e++)
        if (!this.ranges[e].empty()) return !0;
      return !1
    }, ds.prototype.contains = function(e, t) {
      t || (t = e);
      for (var i = 0; i < this.ranges.length; i++) {
        var n = this.ranges[i];
        if (0 <= ne(t, n.from()) && ne(e, n.to()) <= 0) return i
      }
      return -1
    };
    var fs = function(e, t) {
      this.anchor = e, this.head = t
    };
    fs.prototype.from = function() {
      return ae(this.anchor, this.head)
    }, fs.prototype.to = function() {
      return se(this.anchor, this.head)
    }, fs.prototype.empty = function() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
    }, Gn.prototype = {
      chunkSize: function() {
        return this.lines.length
      },
      removeInner: function(e, t) {
        for (var i = e, n = e + t; i < n; ++i) {
          var r = this.lines[i];
          this.height -= r.height, (o = r).parent = null, Se(o), Ze(r, "delete")
        }
        var o;
        this.lines.splice(e, t)
      },
      collapse: function(e) {
        e.push.apply(e, this.lines)
      },
      insertInner: function(e, t, i) {
        this.height += i, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
        for (var n = 0; n < t.length; ++n) t[n].parent = this
      },
      iterN: function(e, t, i) {
        for (var n = e + t; e < n; ++e)
          if (i(this.lines[e])) return !0
      }
    }, Kn.prototype = {
      chunkSize: function() {
        return this.size
      },
      removeInner: function(e, t) {
        this.size -= t;
        for (var i = 0; i < this.children.length; ++i) {
          var n = this.children[i],
            r = n.chunkSize();
          if (e < r) {
            var o = Math.min(t, r - e),
              s = n.height;
            if (n.removeInner(e, o), this.height -= s - n.height, r == o && (this.children.splice(i--, 1), n.parent = null), 0 == (t -= o)) break;
            e = 0
          } else e -= r
        }
        if (this.size - t < 25 && (1 < this.children.length || !(this.children[0] instanceof Gn))) {
          var a = [];
          this.collapse(a), this.children = [new Gn(a)], this.children[0].parent = this
        }
      },
      collapse: function(e) {
        for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
      },
      insertInner: function(e, t, i) {
        this.size += t.length, this.height += i;
        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
            o = r.chunkSize();
          if (e <= o) {
            if (r.insertInner(e, t, i), r.lines && 50 < r.lines.length) {
              for (var s = r.lines.length % 25 + 25, a = s; a < r.lines.length;) {
                var l = new Gn(r.lines.slice(a, a += 25));
                r.height -= l.height, this.children.splice(++n, 0, l), l.parent = this
              }
              r.lines = r.lines.slice(0, s), this.maybeSpill()
            }
            break
          }
          e -= o
        }
      },
      maybeSpill: function() {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t = new Kn(e.children.splice(e.children.length - 5, 5));
            if (e.parent) {
              e.size -= t.size, e.height -= t.height;
              var i = w(e.parent.children, e);
              e.parent.children.splice(i + 1, 0, t)
            } else {
              var n = new Kn(e.children);
              (n.parent = e).children = [n, t], e = n
            }
            t.parent = e.parent
          } while (10 < e.children.length);
          e.parent.maybeSpill()
        }
      },
      iterN: function(e, t, i) {
        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
            o = r.chunkSize();
          if (e < o) {
            var s = Math.min(t, o - e);
            if (r.iterN(e, s, i)) return !0;
            if (0 == (t -= s)) break;
            e = 0
          } else e -= o
        }
      }
    };
    var ps = function(e, t, i) {
      if (i)
        for (var n in i) i.hasOwnProperty(n) && (this[n] = i[n]);
      this.doc = e, this.node = t
    };
    ps.prototype.clear = function() {
      var e = this.doc.cm,
        t = this.line.widgets,
        i = this.line,
        n = Z(i);
      if (null != n && t) {
        for (var r = 0; r < t.length; ++r) t[r] == this && t.splice(r--, 1);
        t.length || (i.widgets = null);
        var o = ct(this);
        X(i, Math.max(0, i.height - o)), e && (ji(e, function() {
          Yn(e, i, -o), Qt(e, n, "widget")
        }), Ze(e, "lineWidgetCleared", e, this, n))
      }
    }, ps.prototype.changed = function() {
      var e = this,
        t = this.height,
        i = this.doc.cm,
        n = this.line;
      this.height = null;
      var r = ct(this) - t;
      r && (Ie(this.doc, n) || X(n, n.height + r), i && ji(i, function() {
        i.curOp.forceUpdate = !0, Yn(i, n, r), Ze(i, "lineWidgetChanged", i, e, Z(n))
      }))
    }, e(ps);
    var hs = 0,
      ms = function(e, t) {
        this.lines = [], this.type = t, this.doc = e, this.id = ++hs
      };
    ms.prototype.clear = function() {
      if (!this.explicitlyCleared) {
        var e = this.doc.cm,
          t = e && !e.curOp;
        if (t && Ti(e), E(this, "clear")) {
          var i = this.find();
          i && Ze(this, "clear", i.from, i.to)
        }
        for (var n = null, r = null, o = 0; o < this.lines.length; ++o) {
          var s = this.lines[o],
            a = _e(s.markedSpans, this);
          e && !this.collapsed ? Qt(e, Z(s), "text") : e && (null != a.to && (r = Z(s)), null != a.from && (n = Z(s))), s.markedSpans = ke(s.markedSpans, a), null == a.from && this.collapsed && !Ie(this.doc, s) && e && X(s, Ft(e.display))
        }
        if (e && this.collapsed && !e.options.lineWrapping)
          for (var l = 0; l < this.lines.length; ++l) {
            var c = Pe(this.lines[l]),
              u = Fe(c);
            u > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = u, e.display.maxLineChanged = !0)
          }
        null != n && e && this.collapsed && Vt(e, n, r + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && zn(e.doc)), e && Ze(e, "markerCleared", e, this, n, r), t && $i(e), this.parent && this.parent.clear()
      }
    }, ms.prototype.find = function(e, t) {
      null == e && "bookmark" == this.type && (e = 1);
      for (var i, n, r = 0; r < this.lines.length; ++r) {
        var o = this.lines[r],
          s = _e(o.markedSpans, this);
        if (null != s.from && (i = ie(t ? o : Z(o), s.from), -1 == e)) return i;
        if (null != s.to && (n = ie(t ? o : Z(o), s.to), 1 == e)) return n
      }
      return i && {
        from: i,
        to: n
      }
    }, ms.prototype.changed = function() {
      var o = this,
        s = this.find(-1, !0),
        a = this,
        l = this.doc.cm;
      s && l && ji(l, function() {
        var e = s.line,
          t = Z(s.line),
          i = bt(l, t);
        if (i && (Ct(i), l.curOp.selectionChanged = l.curOp.forceUpdate = !0), l.curOp.updateMaxLine = !0, !Ie(a.doc, e) && null != a.height) {
          var n = a.height;
          a.height = null;
          var r = ct(a) - n;
          r && X(e, e.height + r)
        }
        Ze(l, "markerChanged", l, o)
      })
    }, ms.prototype.attachLine = function(e) {
      if (!this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        t.maybeHiddenMarkers && -1 != w(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
      }
      this.lines.push(e)
    }, ms.prototype.detachLine = function(e) {
      if (this.lines.splice(w(this.lines, e), 1), !this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
      }
    }, e(ms);
    var gs = function(e, t) {
      this.markers = e, this.primary = t;
      for (var i = 0; i < e.length; ++i) e[i].parent = this
    };
    gs.prototype.clear = function() {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
        Ze(this, "clear")
      }
    }, gs.prototype.find = function(e, t) {
      return this.primary.find(e, t)
    }, e(gs);
    var vs = 0,
      ys = function(e, t, i, n, r) {
        if (!(this instanceof ys)) return new ys(e, t, i, n, r);
        null == i && (i = 0), Kn.call(this, [new Gn([new Xo("", null)])]), this.first = i, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = i;
        var o = ie(i, 0);
        this.sel = Xi(o), this.history = new un(null), this.id = ++vs, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == r ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), sn(this, {
          from: o,
          to: o,
          text: e
        }), Tn(this, Xi(o), $o)
      };
    ys.prototype = i(Kn.prototype, {
      constructor: ys,
      iter: function(e, t, i) {
        i ? this.iterN(e - this.first, t - e, i) : this.iterN(this.first, this.first + this.size, e)
      },
      insert: function(e, t) {
        for (var i = 0, n = 0; n < t.length; ++n) i += t[n].height;
        this.insertInner(e - this.first, t, i)
      },
      remove: function(e, t) {
        this.removeInner(e - this.first, t)
      },
      getValue: function(e) {
        var t = Q(this, this.first, this.first + this.size);
        return !1 === e ? t : t.join(e || this.lineSeparator())
      },
      setValue: Ai(function(e) {
        var t = ie(this.first, 0),
          i = this.first + this.size - 1;
        qn(this, {
          from: t,
          to: ie(i, Y(this, i).text.length),
          text: this.splitLines(e),
          origin: "setValue",
          full: !0
        }, !0), this.cm && gi(this.cm, 0, 0), Tn(this, Xi(t), $o)
      }),
      replaceRange: function(e, t, i, n) {
        Fn(this, e, t = ce(this, t), i = i ? ce(this, i) : t, n)
      },
      getRange: function(e, t, i) {
        var n = V(this, ce(this, e), ce(this, t));
        return !1 === i ? n : n.join(i || this.lineSeparator())
      },
      getLine: function(e) {
        var t = this.getLineHandle(e);
        return t && t.text
      },
      getLineHandle: function(e) {
        return ee(this, e) ? Y(this, e) : void 0
      },
      getLineNumber: function(e) {
        return Z(e)
      },
      getLineHandleVisualStart: function(e) {
        return "number" == typeof e && (e = Y(this, e)), Pe(e)
      },
      lineCount: function() {
        return this.size
      },
      firstLine: function() {
        return this.first
      },
      lastLine: function() {
        return this.first + this.size - 1
      },
      clipPos: function(e) {
        return ce(this, e)
      },
      getCursor: function(e) {
        var t = this.sel.primary();
        return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
      },
      listSelections: function() {
        return this.sel.ranges
      },
      somethingSelected: function() {
        return this.sel.somethingSelected()
      },
      setCursor: Ai(function(e, t, i) {
        Cn(this, ce(this, "number" == typeof e ? ie(e, t || 0) : e), null, i)
      }),
      setSelection: Ai(function(e, t, i) {
        Cn(this, ce(this, e), ce(this, t || e), i)
      }),
      extendSelection: Ai(function(e, t, i) {
        _n(this, ce(this, e), t && ce(this, t), i)
      }),
      extendSelections: Ai(function(e, t) {
        kn(this, ue(this, e), t)
      }),
      extendSelectionsBy: Ai(function(e, t) {
        kn(this, ue(this, y(this.sel.ranges, e)), t)
      }),
      setSelections: Ai(function(e, t, i) {
        if (e.length) {
          for (var n = [], r = 0; r < e.length; r++) n[r] = new fs(ce(this, e[r].anchor), ce(this, e[r].head));
          null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Tn(this, Qi(this.cm, n, t), i)
        }
      }),
      addSelection: Ai(function(e, t, i) {
        var n = this.sel.ranges.slice(0);
        n.push(new fs(ce(this, e), ce(this, t || e))), Tn(this, Qi(this.cm, n, n.length - 1), i)
      }),
      getSelection: function(e) {
        for (var t, i = this.sel.ranges, n = 0; n < i.length; n++) {
          var r = V(this, i[n].from(), i[n].to());
          t = t ? t.concat(r) : r
        }
        return !1 === e ? t : t.join(e || this.lineSeparator())
      },
      getSelections: function(e) {
        for (var t = [], i = this.sel.ranges, n = 0; n < i.length; n++) {
          var r = V(this, i[n].from(), i[n].to());
          !1 !== e && (r = r.join(e || this.lineSeparator())), t[n] = r
        }
        return t
      },
      replaceSelection: function(e, t, i) {
        for (var n = [], r = 0; r < this.sel.ranges.length; r++) n[r] = e;
        this.replaceSelections(n, t, i || "+input")
      },
      replaceSelections: Ai(function(e, t, i) {
        for (var n = [], r = this.sel, o = 0; o < r.ranges.length; o++) {
          var s = r.ranges[o];
          n[o] = {
            from: s.from(),
            to: s.to(),
            text: this.splitLines(e[o]),
            origin: i
          }
        }
        for (var a = t && "end" != t && function(e, t, i) {
          for (var n = [], r = ie(e.first, 0), o = r, s = 0; s < t.length; s++) {
            var a = t[s],
              l = tn(a.from, r, o),
              c = tn(Zi(a), r, o);
            if (r = a.to, o = c, "around" == i) {
              var u = e.sel.ranges[s],
                d = ne(u.head, u.anchor) < 0;
              n[s] = new fs(d ? c : l, d ? l : c)
            } else n[s] = new fs(l, l)
          }
          return new ds(n, e.sel.primIndex)
        }(this, n, t), l = n.length - 1; 0 <= l; l--) qn(this, n[l]);
        a ? Sn(this, a) : this.cm && mi(this.cm)
      }),
      undo: Ai(function() {
        In(this, "undo")
      }),
      redo: Ai(function() {
        In(this, "redo")
      }),
      undoSelection: Ai(function() {
        In(this, "undo", !0)
      }),
      redoSelection: Ai(function() {
        In(this, "redo", !0)
      }),
      setExtending: function(e) {
        this.extend = e
      },
      getExtending: function() {
        return this.extend
      },
      historySize: function() {
        for (var e = this.history, t = 0, i = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
        for (var r = 0; r < e.undone.length; r++) e.undone[r].ranges || ++i;
        return {
          undo: t,
          redo: i
        }
      },
      clearHistory: function() {
        this.history = new un(this.history.maxGeneration)
      },
      markClean: function() {
        this.cleanGeneration = this.changeGeneration(!0)
      },
      changeGeneration: function(e) {
        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
      },
      isClean: function(e) {
        return this.history.generation == (e || this.cleanGeneration)
      },
      getHistory: function() {
        return {
          done: bn(this.history.done),
          undone: bn(this.history.undone)
        }
      },
      setHistory: function(e) {
        var t = this.history = new un(this.history.maxGeneration);
        t.done = bn(e.done.slice(0), null, !0), t.undone = bn(e.undone.slice(0), null, !0)
      },
      setGutterMarker: Ai(function(e, i, n) {
        return Un(this, e, "gutter", function(e) {
          var t = e.gutterMarkers || (e.gutterMarkers = {});
          return !(t[i] = n) && s(t) && (e.gutterMarkers = null), !0
        })
      }),
      clearGutter: Ai(function(t) {
        var i = this;
        this.iter(function(e) {
          e.gutterMarkers && e.gutterMarkers[t] && Un(i, e, "gutter", function() {
            return e.gutterMarkers[t] = null, s(e.gutterMarkers) && (e.gutterMarkers = null), !0
          })
        })
      }),
      lineInfo: function(e) {
        var t;
        if ("number" == typeof e) {
          if (!ee(this, e)) return null;
          if (!(e = Y(this, t = e))) return null
        } else if (null == (t = Z(e))) return null;
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets
        }
      },
      addLineClass: Ai(function(e, i, n) {
        return Un(this, e, "gutter" == i ? "gutter" : "class", function(e) {
          var t = "text" == i ? "textClass" : "background" == i ? "bgClass" : "gutter" == i ? "gutterClass" : "wrapClass";
          if (e[t]) {
            if (a(n).test(e[t])) return !1;
            e[t] += " " + n
          } else e[t] = n;
          return !0
        })
      }),
      removeLineClass: Ai(function(e, o, s) {
        return Un(this, e, "gutter" == o ? "gutter" : "class", function(e) {
          var t = "text" == o ? "textClass" : "background" == o ? "bgClass" : "gutter" == o ? "gutterClass" : "wrapClass",
            i = e[t];
          if (!i) return !1;
          if (null == s) e[t] = null;
          else {
            var n = i.match(a(s));
            if (!n) return !1;
            var r = n.index + n[0].length;
            e[t] = i.slice(0, n.index) + (n.index && r != i.length ? " " : "") + i.slice(r) || null
          }
          return !0
        })
      }),
      addLineWidget: Ai(function(e, t, i) {
        return r = e, o = new ps(n = this, t, i), (s = n.cm) && o.noHScroll && (s.display.alignWidgets = !0), Un(n, r, "widget", function(e) {
          var t = e.widgets || (e.widgets = []);
          if (null == o.insertAt ? t.push(o) : t.splice(Math.min(t.length - 1, Math.max(0, o.insertAt)), 0, o), o.line = e, s && !Ie(n, e)) {
            var i = Re(e) < n.scrollTop;
            X(e, e.height + ct(o)), i && hi(s, o.height), s.curOp.forceUpdate = !0
          }
          return !0
        }), s && Ze(s, "lineWidgetAdded", s, o, "number" == typeof r ? r : Z(r)), o;
        var n, r, o, s
      }),
      removeLineWidget: function(e) {
        e.clear()
      },
      markText: function(e, t, i) {
        return Vn(this, ce(this, e), ce(this, t), i, i && i.type || "range")
      },
      setBookmark: function(e, t) {
        var i = {
          replacedWith: t && (null == t.nodeType ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents
        };
        return Vn(this, e = ce(this, e), e, i, "bookmark")
      },
      findMarksAt: function(e) {
        var t = [],
          i = Y(this, (e = ce(this, e)).line).markedSpans;
        if (i)
          for (var n = 0; n < i.length; ++n) {
            var r = i[n];
            (null == r.from || r.from <= e.ch) && (null == r.to || r.to >= e.ch) && t.push(r.marker.parent || r.marker)
          }
        return t
      },
      findMarks: function(r, o, s) {
        r = ce(this, r), o = ce(this, o);
        var a = [],
          l = r.line;
        return this.iter(r.line, o.line + 1, function(e) {
          var t = e.markedSpans;
          if (t)
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              null != n.to && l == r.line && r.ch >= n.to || null == n.from && l != r.line || null != n.from && l == o.line && n.from >= o.ch || s && !s(n.marker) || a.push(n.marker.parent || n.marker)
            }++l
        }), a
      },
      getAllMarks: function() {
        var n = [];
        return this.iter(function(e) {
          var t = e.markedSpans;
          if (t)
            for (var i = 0; i < t.length; ++i) null != t[i].from && n.push(t[i].marker)
        }), n
      },
      posFromIndex: function(i) {
        var n, r = this.first,
          o = this.lineSeparator().length;
        return this.iter(function(e) {
          var t = e.text.length + o;
          return i < t ? (n = i, !0) : (i -= t, void++r)
        }), ce(this, ie(r, n))
      },
      indexFromPos: function(e) {
        var t = (e = ce(this, e)).ch;
        if (e.line < this.first || e.ch < 0) return 0;
        var i = this.lineSeparator().length;
        return this.iter(this.first, e.line, function(e) {
          t += e.text.length + i
        }), t
      },
      copy: function(e) {
        var t = new ys(Q(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
      },
      linkedDoc: function(e) {
        e || (e = {});
        var t = this.first,
          i = this.first + this.size;
        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < i && (i = e.to);
        var n = new ys(Q(this, t, i), e.mode || this.modeOption, t, this.lineSep, this.direction);
        return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
          doc: n,
          sharedHist: e.sharedHist
        }), n.linked = [{
          doc: this,
          isParent: !0,
          sharedHist: e.sharedHist
        }],
          function(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i],
                r = n.find(),
                o = e.clipPos(r.from),
                s = e.clipPos(r.to);
              if (ne(o, s)) {
                var a = Vn(e, o, s, n.primary, n.primary.type);
                n.markers.push(a), a.parent = n
              }
            }
          }(n, Qn(this)), n
      },
      unlinkDoc: function(e) {
        if (e instanceof Lr && (e = e.doc), this.linked)
          for (var t = 0; t < this.linked.length; ++t) {
            if (this.linked[t].doc == e) {
              this.linked.splice(t, 1), e.unlinkDoc(this), Xn(Qn(this));
              break
            }
          }
        if (e.history == this.history) {
          var i = [e.id];
          an(e, function(e) {
            return i.push(e.id)
          }, !0), e.history = new un(null), e.history.done = bn(this.history.done, i), e.history.undone = bn(this.history.undone, i)
        }
      },
      iterLinkedDocs: function(e) {
        an(this, e)
      },
      getMode: function() {
        return this.mode
      },
      getEditor: function() {
        return this.cm
      },
      splitLines: function(e) {
        return this.lineSep ? e.split(this.lineSep) : Io(e)
      },
      lineSeparator: function() {
        return this.lineSep || "\n"
      },
      setDirection: Ai(function(e) {
        var t;
        "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(e) {
          return e.order = null
        }), this.cm && ji(t = this.cm, function() {
          cn(t), Vt(t)
        }))
      })
    }), ys.prototype.eachLine = ys.prototype.iter;
    for (var bs = 0, ws = !1, _s = {
      3: "Pause",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Esc",
      32: "Space",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      145: "ScrollLock",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'",
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
    }, ks = 0; ks < 10; ks++) _s[ks + 48] = _s[ks + 96] = String(ks);
    for (var xs = 65; xs <= 90; xs++) _s[xs] = String.fromCharCode(xs);
    for (var Cs = 1; Cs <= 12; Cs++) _s[Cs + 111] = _s[Cs + 63235] = "F" + Cs;
    var Ss = {
      basic: {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      },
      pcDefault: {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      },
      emacsy: {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      },
      macDefault: {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }
    };
    Ss.default = fo ? Ss.macDefault : Ss.pcDefault;
    var Ts = {
        selectAll: En,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), $o)
        },
        killLine: function(i) {
          return ur(i, function(e) {
            if (e.empty()) {
              var t = Y(i.doc, e.head.line).text.length;
              return e.head.ch == t && e.head.line < i.lastLine() ? {
                from: e.head,
                to: ie(e.head.line + 1, 0)
              } : {
                from: e.head,
                to: ie(e.head.line, t)
              }
            }
            return {
              from: e.from(),
              to: e.to()
            }
          })
        },
        deleteLine: function(t) {
          return ur(t, function(e) {
            return {
              from: ie(e.from().line, 0),
              to: ce(t.doc, ie(e.to().line + 1, 0))
            }
          })
        },
        delLineLeft: function(e) {
          return ur(e, function(e) {
            return {
              from: ie(e.from().line, 0),
              to: e.from()
            }
          })
        },
        delWrappedLineLeft: function(i) {
          return ur(i, function(e) {
            var t = i.charCoords(e.head, "div").top + 5;
            return {
              from: i.coordsChar({
                left: 0,
                top: t
              }, "div"),
              to: e.from()
            }
          })
        },
        delWrappedLineRight: function(n) {
          return ur(n, function(e) {
            var t = n.charCoords(e.head, "div").top + 5,
              i = n.coordsChar({
                left: n.display.lineDiv.offsetWidth + 100,
                top: t
              }, "div");
            return {
              from: e.from(),
              to: i
            }
          })
        },
        undo: function(e) {
          return e.undo()
        },
        redo: function(e) {
          return e.redo()
        },
        undoSelection: function(e) {
          return e.undoSelection()
        },
        redoSelection: function(e) {
          return e.redoSelection()
        },
        goDocStart: function(e) {
          return e.extendSelection(ie(e.firstLine(), 0))
        },
        goDocEnd: function(e) {
          return e.extendSelection(ie(e.lastLine()))
        },
        goLineStart: function(t) {
          return t.extendSelectionsBy(function(e) {
            return hr(t, e.head.line)
          }, {
            origin: "+move",
            bias: 1
          })
        },
        goLineStartSmart: function(t) {
          return t.extendSelectionsBy(function(e) {
            return gr(t, e.head)
          }, {
            origin: "+move",
            bias: 1
          })
        },
        goLineEnd: function(t) {
          return t.extendSelectionsBy(function(e) {
            return mr(t, e.head.line)
          }, {
            origin: "+move",
            bias: -1
          })
        },
        goLineRight: function(i) {
          return i.extendSelectionsBy(function(e) {
            var t = i.cursorCoords(e.head, "div").top + 5;
            return i.coordsChar({
              left: i.display.lineDiv.offsetWidth + 100,
              top: t
            }, "div")
          }, zo)
        },
        goLineLeft: function(i) {
          return i.extendSelectionsBy(function(e) {
            var t = i.cursorCoords(e.head, "div").top + 5;
            return i.coordsChar({
              left: 0,
              top: t
            }, "div")
          }, zo)
        },
        goLineLeftSmart: function(n) {
          return n.extendSelectionsBy(function(e) {
            var t = n.cursorCoords(e.head, "div").top + 5,
              i = n.coordsChar({
                left: 0,
                top: t
              }, "div");
            return i.ch < n.getLine(i.line).search(/\S/) ? gr(n, e.head) : i
          }, zo)
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line")
        },
        goLineDown: function(e) {
          return e.moveV(1, "line")
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page")
        },
        goPageDown: function(e) {
          return e.moveV(1, "page")
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char")
        },
        goCharRight: function(e) {
          return e.moveH(1, "char")
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column")
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column")
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word")
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group")
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group")
        },
        goWordRight: function(e) {
          return e.moveH(1, "word")
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "char")
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char")
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word")
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word")
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group")
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group")
        },
        indentAuto: function(e) {
          return e.indentSelection("smart")
        },
        indentMore: function(e) {
          return e.indentSelection("add")
        },
        indentLess: function(e) {
          return e.indentSelection("subtract")
        },
        insertTab: function(e) {
          return e.replaceSelection("\t")
        },
        insertSoftTab: function(e) {
          for (var t = [], i = e.listSelections(), n = e.options.tabSize, r = 0; r < i.length; r++) {
            var o = i[r].from(),
              s = S(e.getLine(o.line), o.ch, n);
            t.push(x(n - s % n))
          }
          e.replaceSelections(t)
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
        },
        transposeChars: function(s) {
          return ji(s, function() {
            for (var e = s.listSelections(), t = [], i = 0; i < e.length; i++)
              if (e[i].empty()) {
                var n = e[i].head,
                  r = Y(s.doc, n.line).text;
                if (r)
                  if (n.ch == r.length && (n = new ie(n.line, n.ch - 1)), 0 < n.ch) n = new ie(n.line, n.ch + 1), s.replaceRange(r.charAt(n.ch - 1) + r.charAt(n.ch - 2), ie(n.line, n.ch - 2), n, "+transpose");
                  else if (n.line > s.doc.first) {
                    var o = Y(s.doc, n.line - 1).text;
                    o && (n = new ie(n.line, 1), s.replaceRange(r.charAt(0) + s.doc.lineSeparator() + o.charAt(o.length - 1), ie(n.line - 1, o.length - 1), n, "+transpose"))
                  }
                t.push(new fs(n, n))
              }
            s.setSelections(t)
          })
        },
        newlineAndIndent: function(n) {
          return ji(n, function() {
            for (var e = n.listSelections(), t = e.length - 1; 0 <= t; t--) n.replaceRange(n.doc.lineSeparator(), e[t].anchor, e[t].head, "+input");
            e = n.listSelections();
            for (var i = 0; i < e.length; i++) n.indentLine(e[i].from().line, null, !0);
            mi(n)
          })
        },
        openLine: function(e) {
          return e.replaceSelection("\n", "start")
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite()
        }
      },
      $s = new _o,
      Os = null,
      zs = function(e, t, i) {
        this.time = e, this.pos = t, this.button = i
      };
    zs.prototype.compare = function(e, t, i) {
      return this.time + 400 > e && 0 == ne(t, this.pos) && i == this.button
    };
    var js, Ms, Ls = {
        toString: function() {
          return "CodeMirror.Init"
        }
      },
      As = {},
      Es = {};
    Lr.defaults = As, Lr.optionHandlers = Es;
    var Ps = [];
    Lr.defineInitHook = function(e) {
      return Ps.push(e)
    };
    var qs = null,
      Ds = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new _o, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
      };
    Ds.prototype.init = function(e) {
      function t(e) {
        if (!m(a, e)) {
          if (a.somethingSelected()) Er({
            lineWise: !1,
            text: a.getSelections()
          }), "cut" == e.type && a.replaceSelection("", null, "cut");
          else {
            if (!a.options.lineWiseCopyCut) return;
            var t = Ir(a);
            Er({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type && a.operation(function() {
              a.setSelections(t.ranges, 0, $o), a.replaceSelection("", null, "cut")
            })
          }
          if (e.clipboardData) {
            e.clipboardData.clearData();
            var i = qs.text.join("\n");
            if (e.clipboardData.setData("Text", i), e.clipboardData.getData("Text") == i) return void e.preventDefault()
          }
          var n = Rr(),
            r = n.firstChild;
          a.display.lineSpace.insertBefore(n, a.display.lineSpace.firstChild), r.value = qs.text.join("\n");
          var o = document.activeElement;
          wo(r), setTimeout(function() {
            a.display.lineSpace.removeChild(n), o.focus(), o == l && s.showPrimarySelection()
          }, 50)
        }
      }
      var i = this,
        s = this,
        a = s.cm,
        l = s.div = e.lineDiv;
      Nr(l, a.options.spellcheck, a.options.autocorrect, a.options.autocapitalize), qo(l, "paste", function(e) {
        m(a, e) || qr(e, a) || eo <= 11 && setTimeout(Mi(a, function() {
          return i.updateFromDOM()
        }), 20)
      }), qo(l, "compositionstart", function(e) {
        i.composing = {
          data: e.data,
          done: !1
        }
      }), qo(l, "compositionupdate", function(e) {
        i.composing || (i.composing = {
          data: e.data,
          done: !1
        })
      }), qo(l, "compositionend", function(e) {
        i.composing && (e.data != i.composing.data && i.readFromDOMSoon(), i.composing.done = !0)
      }), qo(l, "touchstart", function() {
        return s.forceCompositionEnd()
      }), qo(l, "input", function() {
        i.composing || i.readFromDOMSoon()
      }), qo(l, "copy", t), qo(l, "cut", t)
    }, Ds.prototype.prepareSelection = function() {
      var e = ti(this.cm, !1);
      return e.focus = this.cm.state.focused, e
    }, Ds.prototype.showSelection = function(e, t) {
      e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
    }, Ds.prototype.getSelection = function() {
      return this.cm.display.wrapper.ownerDocument.getSelection()
    }, Ds.prototype.showPrimarySelection = function() {
      var e = this.getSelection(),
        t = this.cm,
        i = t.doc.sel.primary(),
        n = i.from(),
        r = i.to();
      if (t.display.viewTo == t.display.viewFrom || n.line >= t.display.viewTo || r.line < t.display.viewFrom) e.removeAllRanges();
      else {
        var o = Ur(t, e.anchorNode, e.anchorOffset),
          s = Ur(t, e.focusNode, e.focusOffset);
        if (!o || o.bad || !s || s.bad || 0 != ne(ae(o, s), n) || 0 != ne(se(o, s), r)) {
          var a = t.display.view,
            l = n.line >= t.display.viewFrom && Wr(t, n) || {
              node: a[0].measure.map[2],
              offset: 0
            },
            c = r.line < t.display.viewTo && Wr(t, r);
          if (!c) {
            var u = a[a.length - 1].measure,
              d = u.maps ? u.maps[u.maps.length - 1] : u.map;
            c = {
              node: d[d.length - 1],
              offset: d[d.length - 2] - d[d.length - 3]
            }
          }
          if (!l || !c) return void e.removeAllRanges();
          var f, p = e.rangeCount && e.getRangeAt(0);
          try {
            f = go(l.node, l.offset, c.offset, c.node)
          } catch (e) {}
          f && (!Vr && t.state.focused ? (e.collapse(l.node, l.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), p && null == e.anchorNode ? e.addRange(p) : Vr && this.startGracePeriod()), this.rememberSelection()
        }
      }
    }, Ds.prototype.startGracePeriod = function() {
      var e = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
          return e.cm.curOp.selectionChanged = !0
        })
      }, 20)
    }, Ds.prototype.showMultipleSelections = function(e) {
      _(this.cm.display.cursorDiv, e.cursors), _(this.cm.display.selectionDiv, e.selection)
    }, Ds.prototype.rememberSelection = function() {
      var e = this.getSelection();
      this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
    }, Ds.prototype.selectionInEditor = function() {
      var e = this.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return g(this.div, t)
    }, Ds.prototype.focus = function() {
      "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
    }, Ds.prototype.blur = function() {
      this.div.blur()
    }, Ds.prototype.getField = function() {
      return this.div
    }, Ds.prototype.supportsTouch = function() {
      return !0
    }, Ds.prototype.receivedFocus = function() {
      var t = this;
      this.selectionInEditor() ? this.pollSelection() : ji(this.cm, function() {
        return t.cm.curOp.selectionChanged = !0
      }), this.polling.set(this.cm.options.pollInterval, function e() {
        t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
      })
    }, Ds.prototype.selectionChanged = function() {
      var e = this.getSelection();
      return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
    }, Ds.prototype.pollSelection = function() {
      if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
        var e = this.getSelection(),
          t = this.cm;
        if (co && no && this.cm.display.gutterSpecs.length && function(e) {
          for (var t = e; t; t = t.parentNode)
            if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
          return !1
        }(e.anchorNode)) return this.cm.triggerOnKeyDown({
          type: "keydown",
          keyCode: 8,
          preventDefault: Math.abs
        }), this.blur(), void this.focus();
        if (!this.composing) {
          this.rememberSelection();
          var i = Ur(t, e.anchorNode, e.anchorOffset),
            n = Ur(t, e.focusNode, e.focusOffset);
          i && n && ji(t, function() {
            Tn(t.doc, Xi(i, n), $o), (i.bad || n.bad) && (t.curOp.selectionChanged = !0)
          })
        }
      }
    }, Ds.prototype.pollContent = function() {
      null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
      var e, t, i, n = this.cm,
        r = n.display,
        o = n.doc.sel.primary(),
        s = o.from(),
        a = o.to();
      if (0 == s.ch && s.line > n.firstLine() && (s = ie(s.line - 1, Y(n.doc, s.line - 1).length)), a.ch == Y(n.doc, a.line).text.length && a.line < n.lastLine() && (a = ie(a.line + 1, 0)), s.line < r.viewFrom || a.line > r.viewTo - 1) return !1;
      i = s.line == r.viewFrom || 0 == (e = Yt(n, s.line)) ? (t = Z(r.view[0].line), r.view[0].node) : (t = Z(r.view[e].line), r.view[e - 1].node.nextSibling);
      var l, c, u = Yt(n, a.line);
      if (c = u == r.view.length - 1 ? (l = r.viewTo - 1, r.lineDiv.lastChild) : (l = Z(r.view[u + 1].line) - 1, r.view[u + 1].node.previousSibling), !i) return !1;
      for (var d = n.doc.splitLines(function(l, e, t, c, u) {
        function d() {
          h && (i += m, g && (i += m), h = g = !1)
        }

        function f(e) {
          e && (d(), i += e)
        }

        function p(e) {
          if (1 == e.nodeType) {
            var t = e.getAttribute("cm-text");
            if (t) return void f(t);
            var i, n = e.getAttribute("cm-marker");
            if (n) {
              var r = l.findMarks(ie(c, 0), ie(u + 1, 0), (a = +n, function(e) {
                return e.id == a
              }));
              return void(r.length && (i = r[0].find(0)) && f(V(l.doc, i.from, i.to).join(m)))
            }
            if ("false" == e.getAttribute("contenteditable")) return;
            var o = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
            if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length) return;
            o && d();
            for (var s = 0; s < e.childNodes.length; s++) p(e.childNodes[s]);
            /^(pre|p)$/i.test(e.nodeName) && (g = !0), o && (h = !0)
          } else 3 == e.nodeType && f(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
          var a
        }
        for (var i = "", h = !1, m = l.doc.lineSeparator(), g = !1; p(e), e != t;) e = e.nextSibling, g = !1;
        return i
      }(n, i, c, t, l)), f = V(n.doc, ie(t, 0), ie(l, Y(n.doc, l).text.length)); 1 < d.length && 1 < f.length;)
        if (U(d) == U(f)) d.pop(), f.pop(), l--;
        else {
          if (d[0] != f[0]) break;
          d.shift(), f.shift(), t++
        }
      for (var p = 0, h = 0, m = d[0], g = f[0], v = Math.min(m.length, g.length); p < v && m.charCodeAt(p) == g.charCodeAt(p);) ++p;
      for (var y = U(d), b = U(f), w = Math.min(y.length - (1 == d.length ? p : 0), b.length - (1 == f.length ? p : 0)); h < w && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1);) ++h;
      if (1 == d.length && 1 == f.length && t == s.line)
        for (; p && p > s.ch && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1);) p--, h++;
      d[d.length - 1] = y.slice(0, y.length - h).replace(/^\u200b+/, ""), d[0] = d[0].slice(p).replace(/\u200b+$/, "");
      var _ = ie(t, p),
        k = ie(l, f.length ? U(f).length - h : 0);
      return 1 < d.length || d[0] || ne(_, k) ? (Fn(n.doc, d, _, k, "+input"), !0) : void 0
    }, Ds.prototype.ensurePolled = function() {
      this.forceCompositionEnd()
    }, Ds.prototype.reset = function() {
      this.forceCompositionEnd()
    }, Ds.prototype.forceCompositionEnd = function() {
      this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
    }, Ds.prototype.readFromDOMSoon = function() {
      var e = this;
      null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
        if (e.readDOMTimeout = null, e.composing) {
          if (!e.composing.done) return;
          e.composing = null
        }
        e.updateFromDOM()
      }, 80))
    }, Ds.prototype.updateFromDOM = function() {
      var e = this;
      (this.cm.isReadOnly() || !this.pollContent()) && ji(this.cm, function() {
        return Vt(e.cm)
      })
    }, Ds.prototype.setUneditable = function(e) {
      e.contentEditable = "false"
    }, Ds.prototype.onKeyPress = function(e) {
      0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Mi(this.cm, Pr)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
    }, Ds.prototype.readOnlyChanged = function(e) {
      this.div.contentEditable = String("nocursor" != e)
    }, Ds.prototype.onContextMenu = function() {}, Ds.prototype.resetPosition = function() {}, Ds.prototype.needsContentAttribute = !0;
    var Is, Ns, Rs, Fs = function(e) {
      this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new _o, this.hasSelection = !1, this.composing = null
    };
    Fs.prototype.init = function(i) {
      function e(e) {
        if (!m(r, e)) {
          if (r.somethingSelected()) Er({
            lineWise: !1,
            text: r.getSelections()
          });
          else {
            if (!r.options.lineWiseCopyCut) return;
            var t = Ir(r);
            Er({
              lineWise: !0,
              text: t.text
            }), "cut" == e.type ? r.setSelections(t.ranges, null, $o) : (n.prevInput = "", o.value = t.text.join("\n"), wo(o))
          }
          "cut" == e.type && (r.state.cutIncoming = +new Date)
        }
      }
      var t = this,
        n = this,
        r = this.cm;
      this.createField(i);
      var o = this.textarea;
      i.wrapper.insertBefore(this.wrapper, i.wrapper.firstChild), lo && (o.style.width = "0px"), qo(o, "input", function() {
        Jr && 9 <= eo && t.hasSelection && (t.hasSelection = null), n.poll()
      }), qo(o, "paste", function(e) {
        m(r, e) || qr(e, r) || (r.state.pasteIncoming = +new Date, n.fastPoll())
      }), qo(o, "cut", e), qo(o, "copy", e), qo(i.scroller, "paste", function(e) {
        if (!ut(i, e) && !m(r, e)) {
          if (!o.dispatchEvent) return r.state.pasteIncoming = +new Date, void n.focus();
          var t = new Event("paste");
          t.clipboardData = e.clipboardData, o.dispatchEvent(t)
        }
      }), qo(i.lineSpace, "selectstart", function(e) {
        ut(i, e) || P(e)
      }), qo(o, "compositionstart", function() {
        var e = r.getCursor("from");
        n.composing && n.composing.range.clear(), n.composing = {
          start: e,
          range: r.markText(e, r.getCursor("to"), {
            className: "CodeMirror-composing"
          })
        }
      }), qo(o, "compositionend", function() {
        n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
      })
    }, Fs.prototype.createField = function(e) {
      this.wrapper = Rr(), this.textarea = this.wrapper.firstChild
    }, Fs.prototype.prepareSelection = function() {
      var e = this.cm,
        t = e.display,
        i = e.doc,
        n = ti(e);
      if (e.options.moveInputWithCursor) {
        var r = At(e, i.sel.primary().head, "div"),
          o = t.wrapper.getBoundingClientRect(),
          s = t.lineDiv.getBoundingClientRect();
        n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, r.top + s.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, r.left + s.left - o.left))
      }
      return n
    }, Fs.prototype.showSelection = function(e) {
      var t = this.cm.display;
      _(t.cursorDiv, e.cursors), _(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
    }, Fs.prototype.reset = function(e) {
      if (!this.contextMenuPending && !this.composing) {
        var t = this.cm;
        if (t.somethingSelected()) {
          this.prevInput = "";
          var i = t.getSelection();
          this.textarea.value = i, t.state.focused && wo(this.textarea), Jr && 9 <= eo && (this.hasSelection = i)
        } else e || (this.prevInput = this.textarea.value = "", Jr && 9 <= eo && (this.hasSelection = null))
      }
    }, Fs.prototype.getField = function() {
      return this.textarea
    }, Fs.prototype.supportsTouch = function() {
      return !1
    }, Fs.prototype.focus = function() {
      if ("nocursor" != this.cm.options.readOnly && (!uo || C() != this.textarea)) try {
        this.textarea.focus()
      } catch (e) {}
    }, Fs.prototype.blur = function() {
      this.textarea.blur()
    }, Fs.prototype.resetPosition = function() {
      this.wrapper.style.top = this.wrapper.style.left = 0
    }, Fs.prototype.receivedFocus = function() {
      this.slowPoll()
    }, Fs.prototype.slowPoll = function() {
      var e = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
        e.poll(), e.cm.state.focused && e.slowPoll()
      })
    }, Fs.prototype.fastPoll = function() {
      var t = !1,
        i = this;
      i.pollingFast = !0, i.polling.set(20, function e() {
        i.poll() || t ? (i.pollingFast = !1, i.slowPoll()) : (t = !0, i.polling.set(60, e))
      })
    }, Fs.prototype.poll = function() {
      var e = this,
        t = this.cm,
        i = this.textarea,
        n = this.prevInput;
      if (this.contextMenuPending || !t.state.focused || No(i) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
      var r = i.value;
      if (r == n && !t.somethingSelected()) return !1;
      if (Jr && 9 <= eo && this.hasSelection === r || fo && /[\uf700-\uf7ff]/.test(r)) return t.display.input.reset(), !1;
      if (t.doc.sel == t.display.selForContextMenu) {
        var o = r.charCodeAt(0);
        if (8203 != o || n || (n = "â€‹"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
      }
      for (var s = 0, a = Math.min(n.length, r.length); s < a && n.charCodeAt(s) == r.charCodeAt(s);) ++s;
      return ji(t, function() {
        Pr(t, r.slice(s), n.length - s, null, e.composing ? "*compose" : null), 1e3 < r.length || -1 < r.indexOf("\n") ? i.value = e.prevInput = "" : e.prevInput = r, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
          className: "CodeMirror-composing"
        }))
      }), !0
    }, Fs.prototype.ensurePolled = function() {
      this.pollingFast && this.poll() && (this.pollingFast = !1)
    }, Fs.prototype.onKeyPress = function() {
      Jr && 9 <= eo && (this.hasSelection = null), this.fastPoll()
    }, Fs.prototype.onContextMenu = function(e) {
      function i() {
        if (null != a.selectionStart) {
          var e = o.somethingSelected(),
            t = "â€‹" + (e ? a.value : "");
          a.value = "â‡š", a.value = t, r.prevInput = e ? "" : "â€‹", a.selectionStart = 1, a.selectionEnd = t.length, s.selForContextMenu = o.doc.sel
        }
      }

      function n() {
        if (r.contextMenuPending == n && (r.contextMenuPending = !1, r.wrapper.style.cssText = d, a.style.cssText = u, Jr && eo < 9 && s.scrollbars.setScrollTop(s.scroller.scrollTop = l), null != a.selectionStart)) {
          (!Jr || Jr && eo < 9) && i();
          var e = 0,
            t = function() {
              s.selForContextMenu == o.doc.sel && 0 == a.selectionStart && 0 < a.selectionEnd && "â€‹" == r.prevInput ? Mi(o, En)(o) : e++ < 10 ? s.detectingSelectAll = setTimeout(t, 500) : (s.selForContextMenu = null, s.input.reset())
            };
          s.detectingSelectAll = setTimeout(t, 200)
        }
      }
      var r = this,
        o = r.cm,
        s = o.display,
        a = r.textarea;
      r.contextMenuPending && r.contextMenuPending();
      var t = Kt(o, e),
        l = s.scroller.scrollTop;
      if (t && !ro) {
        o.options.resetSelectionOnContextMenu && -1 == o.doc.sel.contains(t) && Mi(o, Tn)(o.doc, Xi(t), $o);
        var c, u = a.style.cssText,
          d = r.wrapper.style.cssText,
          f = r.wrapper.offsetParent.getBoundingClientRect();
        if (r.wrapper.style.cssText = "position: static", a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - f.top - 5) + "px; left: " + (e.clientX - f.left - 5) + "px;\n      z-index: 1000; background: " + (Jr ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", to && (c = window.scrollY), s.input.focus(), to && window.scrollTo(null, c), s.input.reset(), o.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = n, s.selForContextMenu = o.doc.sel, clearTimeout(s.detectingSelectAll), Jr && 9 <= eo && i(), yo) {
          q(e);
          var p = function() {
            A(window, "mouseup", p), setTimeout(n, 20)
          };
          qo(window, "mouseup", p)
        } else setTimeout(n, 50)
      }
    }, Fs.prototype.readOnlyChanged = function(e) {
      e || this.reset(), this.textarea.disabled = "nocursor" == e
    }, Fs.prototype.setUneditable = function() {}, Fs.prototype.needsContentAttribute = !1,
      function(r) {
        function e(e, t, n, i) {
          r.defaults[e] = t, n && (o[e] = i ? function(e, t, i) {
            i != Ls && n(e, t, i)
          } : n)
        }
        var o = r.optionHandlers;
        r.defineOption = e, r.Init = Ls, e("value", "", function(e, t) {
          return e.setValue(t)
        }, !0), e("mode", null, function(e, t) {
          e.doc.modeOption = t, nn(e)
        }, !0), e("indentUnit", 2, nn, !0), e("indentWithTabs", !1), e("smartIndent", !0), e("tabSize", 4, function(e) {
          rn(e), Tt(e), Vt(e)
        }, !0), e("lineSeparator", null, function(e, n) {
          if (e.doc.lineSep = n) {
            var r = [],
              o = e.doc.first;
            e.doc.iter(function(e) {
              for (var t = 0;;) {
                var i = e.text.indexOf(n, t);
                if (-1 == i) break;
                t = i + n.length, r.push(ie(o, i))
              }
              o++
            });
            for (var t = r.length - 1; 0 <= t; t--) Fn(e.doc, n, r[t], ie(r[t].line, r[t].ch + n.length))
          }
        }), e("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, i) {
          e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), i != Ls && e.refresh()
        }), e("specialCharPlaceholder", Ue, function(e) {
          return e.refresh()
        }, !0), e("electricChars", !0), e("inputStyle", uo ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor")
        }, !0), e("spellcheck", !1, function(e, t) {
          return e.getInputField().spellcheck = t
        }, !0), e("autocorrect", !1, function(e, t) {
          return e.getInputField().autocorrect = t
        }, !0), e("autocapitalize", !1, function(e, t) {
          return e.getInputField().autocapitalize = t
        }, !0), e("rtlMoveVisually", !ho), e("wholeLineUpdateBefore", !0), e("theme", "default", function(e) {
          zr(e), Ui(e)
        }, !0), e("keyMap", "default", function(e, t, i) {
          var n = cr(t),
            r = i != Ls && cr(i);
          r && r.detach && r.detach(e, n), n.attach && n.attach(e, r || null)
        }), e("extraKeys", null), e("configureMouse", null), e("lineWrapping", !1, Mr, !0), e("gutters", [], function(e, t) {
          e.display.gutterSpecs = Wi(t, e.options.lineNumbers), Ui(e)
        }, !0), e("fixedGutter", !0, function(e, t) {
          e.display.gutters.style.left = t ? Bt(e.display) + "px" : "0", e.refresh()
        }, !0), e("coverGutterNextToScrollbar", !1, function(e) {
          return xi(e)
        }, !0), e("scrollbarStyle", "native", function(e) {
          Si(e), xi(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
        }, !0), e("lineNumbers", !1, function(e, t) {
          e.display.gutterSpecs = Wi(e.options.gutters, t), Ui(e)
        }, !0), e("firstLineNumber", 1, Ui, !0), e("lineNumberFormatter", function(e) {
          return e
        }, Ui, !0), e("showCursorWhenSelecting", !1, ei, !0), e("resetSelectionOnContextMenu", !0), e("lineWiseCopyCut", !0), e("pasteLinesPerSelection", !0), e("selectionsMayTouch", !1), e("readOnly", !1, function(e, t) {
          "nocursor" == t && (ci(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
        }), e("disableInput", !1, function(e, t) {
          t || e.display.input.reset()
        }, !0), e("dragDrop", !0, jr), e("allowDropFileTypes", null), e("cursorBlinkRate", 530), e("cursorScrollMargin", 0), e("cursorHeight", 1, ei, !0), e("singleCursorHeightPerLine", !0, ei, !0), e("workTime", 100), e("workDelay", 100), e("flattenSpans", !0, rn, !0), e("addModeClass", !1, rn, !0), e("pollInterval", 100), e("undoDepth", 200, function(e, t) {
          return e.doc.history.undoDepth = t
        }), e("historyEventDelay", 1250), e("viewportMargin", 10, function(e) {
          return e.refresh()
        }, !0), e("maxHighlightLength", 1e4, rn, !0), e("moveInputWithCursor", !0, function(e, t) {
          t || e.display.input.resetPosition()
        }), e("tabindex", null, function(e, t) {
          return e.display.input.getField().tabIndex = t || ""
        }), e("autofocus", null), e("direction", "ltr", function(e, t) {
          return e.doc.setDirection(t)
        }, !0), e("phrases", null)
      }(Lr), Ns = (Is = Lr).optionHandlers, Rs = Is.helpers = {}, Is.prototype = {
      constructor: Is,
      focus: function() {
        window.focus(), this.display.input.focus()
      },
      setOption: function(e, t) {
        var i = this.options,
          n = i[e];
        (i[e] != t || "mode" == e) && (i[e] = t, Ns.hasOwnProperty(e) && Mi(this, Ns[e])(this, t, n), p(this, "optionChange", this, e))
      },
      getOption: function(e) {
        return this.options[e]
      },
      getDoc: function() {
        return this.doc
      },
      addKeyMap: function(e, t) {
        this.state.keyMaps[t ? "push" : "unshift"](cr(e))
      },
      removeKeyMap: function(e) {
        for (var t = this.state.keyMaps, i = 0; i < t.length; ++i)
          if (t[i] == e || t[i].name == e) return t.splice(i, 1), !0
      },
      addOverlay: Li(function(e, t) {
        var i = e.token ? e : Is.getMode(this.options, e);
        if (i.startState) throw new Error("Overlays may not be stateful.");
        (function(e, t, i) {
          for (var n = 0, r = i(t); n < e.length && i(e[n]) <= r;) n++;
          e.splice(n, 0, t)
        })(this.state.overlays, {
          mode: i,
          modeSpec: e,
          opaque: t && t.opaque,
          priority: t && t.priority || 0
        }, function(e) {
          return e.priority
        }), this.state.modeGen++, Vt(this)
      }),
      removeOverlay: Li(function(e) {
        for (var t = this.state.overlays, i = 0; i < t.length; ++i) {
          var n = t[i].modeSpec;
          if (n == e || "string" == typeof e && n.name == e) return t.splice(i, 1), this.state.modeGen++, void Vt(this)
        }
      }),
      indentLine: Li(function(e, t, i) {
        "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), ee(this.doc, e) && Ar(this, e, t, i)
      }),
      indentSelection: Li(function(e) {
        for (var t = this.doc.sel.ranges, i = -1, n = 0; n < t.length; n++) {
          var r = t[n];
          if (r.empty()) r.head.line > i && (Ar(this, r.head.line, e, !0), i = r.head.line, n == this.doc.sel.primIndex && mi(this));
          else {
            var o = r.from(),
              s = r.to(),
              a = Math.max(i, o.line);
            i = Math.min(this.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
            for (var l = a; l < i; ++l) Ar(this, l, e);
            var c = this.doc.sel.ranges;
            0 == o.ch && t.length == c.length && 0 < c[n].from().ch && xn(this.doc, n, new fs(o, c[n].to()), $o)
          }
        }
      }),
      getTokenAt: function(e, t) {
        return ve(this, e, t)
      },
      getLineTokens: function(e, t) {
        return ve(this, ie(e), t, !0)
      },
      getTokenTypeAt: function(e) {
        e = ce(this.doc, e);
        var t, i = fe(this, Y(this.doc, e.line)),
          n = 0,
          r = (i.length - 1) / 2,
          o = e.ch;
        if (0 == o) t = i[2];
        else
          for (;;) {
            var s = n + r >> 1;
            if ((s ? i[2 * s - 1] : 0) >= o) r = s;
            else {
              if (!(i[2 * s + 1] < o)) {
                t = i[2 * s + 2];
                break
              }
              n = s + 1
            }
          }
        var a = t ? t.indexOf("overlay ") : -1;
        return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1)
      },
      getModeAt: function(e) {
        var t = this.doc.mode;
        return t.innerMode ? Is.innerMode(t, this.getTokenAt(e).state).mode : t
      },
      getHelper: function(e, t) {
        return this.getHelpers(e, t)[0]
      },
      getHelpers: function(e, t) {
        var i = [];
        if (!Rs.hasOwnProperty(t)) return i;
        var n = Rs[t],
          r = this.getModeAt(e);
        if ("string" == typeof r[t]) n[r[t]] && i.push(n[r[t]]);
        else if (r[t])
          for (var o = 0; o < r[t].length; o++) {
            var s = n[r[t][o]];
            s && i.push(s)
          } else r.helperType && n[r.helperType] ? i.push(n[r.helperType]) : n[r.name] && i.push(n[r.name]);
        for (var a = 0; a < n._global.length; a++) {
          var l = n._global[a];
          l.pred(r, this) && -1 == w(i, l.val) && i.push(l.val)
        }
        return i
      },
      getStateAfter: function(e, t) {
        var i = this.doc;
        return pe(this, (e = le(i, null == e ? i.first + i.size - 1 : e)) + 1, t).state
      },
      cursorCoords: function(e, t) {
        var i = this.doc.sel.primary();
        return At(this, null == e ? i.head : "object" == typeof e ? ce(this.doc, e) : e ? i.from() : i.to(), t || "page")
      },
      charCoords: function(e, t) {
        return Lt(this, ce(this.doc, e), t || "page")
      },
      coordsChar: function(e, t) {
        return qt(this, (e = Mt(this, e, t || "page")).left, e.top)
      },
      lineAtHeight: function(e, t) {
        return e = Mt(this, {
          top: e,
          left: 0
        }, t || "page").top, J(this.doc, e + this.display.viewOffset)
      },
      heightAtLine: function(e, t, i) {
        var n, r = !1;
        if ("number" == typeof e) {
          var o = this.doc.first + this.doc.size - 1;
          e < this.doc.first ? e = this.doc.first : o < e && (e = o, r = !0), n = Y(this.doc, e)
        } else n = e;
        return jt(this, n, {
          top: 0,
          left: 0
        }, t || "page", i || r).top + (r ? this.doc.height - Re(n) : 0)
      },
      defaultTextHeight: function() {
        return Ft(this.display)
      },
      defaultCharWidth: function() {
        return Ht(this.display)
      },
      getViewport: function() {
        return {
          from: this.display.viewFrom,
          to: this.display.viewTo
        }
      },
      addWidget: function(e, t, i, n, r) {
        var o, s, a, l = this.display,
          c = (e = At(this, ce(this.doc, e))).bottom,
          u = e.left;
        if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), l.sizer.appendChild(t), "over" == n) c = e.top;
        else if ("above" == n || "near" == n) {
          var d = Math.max(l.wrapper.clientHeight, this.doc.height),
            f = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
          ("above" == n || e.bottom + t.offsetHeight > d) && e.top > t.offsetHeight ? c = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= d && (c = e.bottom), u + t.offsetWidth > f && (u = f - t.offsetWidth)
        }
        t.style.top = c + "px", t.style.left = t.style.right = "", "right" == r ? (u = l.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == r ? u = 0 : "middle" == r && (u = (l.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), i && (o = this, s = {
          left: u,
          top: c,
          right: u + t.offsetWidth,
          bottom: c + t.offsetHeight
        }, null != (a = pi(o, s)).scrollTop && bi(o, a.scrollTop), null != a.scrollLeft && _i(o, a.scrollLeft))
      },
      triggerOnKeyDown: Li(_r),
      triggerOnKeyPress: Li(xr),
      triggerOnKeyUp: kr,
      triggerOnMouseDown: Li(Cr),
      execCommand: function(e) {
        return Ts.hasOwnProperty(e) ? Ts[e].call(null, this) : void 0
      },
      triggerElectric: Li(function(e) {
        Dr(this, e)
      }),
      findPosH: function(e, t, i, n) {
        var r = 1;
        t < 0 && (r = -1, t = -t);
        for (var o = ce(this.doc, e), s = 0; s < t && !(o = Fr(this.doc, o, r, i, n)).hitSide; ++s);
        return o
      },
      moveH: Li(function(t, i) {
        var n = this;
        this.extendSelectionsBy(function(e) {
          return n.display.shift || n.doc.extend || e.empty() ? Fr(n.doc, e.head, t, i, n.options.rtlMoveVisually) : t < 0 ? e.from() : e.to()
        }, zo)
      }),
      deleteH: Li(function(i, n) {
        var e = this.doc.sel,
          r = this.doc;
        e.somethingSelected() ? r.replaceSelection("", null, "+delete") : ur(this, function(e) {
          var t = Fr(r, e.head, i, n, !1);
          return i < 0 ? {
            from: t,
            to: e.head
          } : {
            from: e.head,
            to: t
          }
        })
      }),
      findPosV: function(e, t, i, n) {
        var r = 1,
          o = n;
        t < 0 && (r = -1, t = -t);
        for (var s = ce(this.doc, e), a = 0; a < t; ++a) {
          var l = At(this, s, "div");
          if (null == o ? o = l.left : l.left = o, (s = Hr(this, l, r, i)).hitSide) break
        }
        return s
      },
      moveV: Li(function(n, r) {
        var o = this,
          s = this.doc,
          a = [],
          l = !this.display.shift && !s.extend && s.sel.somethingSelected();
        if (s.extendSelectionsBy(function(e) {
          if (l) return n < 0 ? e.from() : e.to();
          var t = At(o, e.head, "div");
          null != e.goalColumn && (t.left = e.goalColumn), a.push(t.left);
          var i = Hr(o, t, n, r);
          return "page" == r && e == s.sel.primary() && hi(o, Lt(o, i, "div").top - t.top), i
        }, zo), a.length)
          for (var e = 0; e < s.sel.ranges.length; e++) s.sel.ranges[e].goalColumn = a[e]
      }),
      findWordAt: function(e) {
        var t = Y(this.doc, e.line).text,
          i = e.ch,
          n = e.ch;
        if (t) {
          var r = this.getHelper(e, "wordChars");
          "before" != e.sticky && n != t.length || !i ? ++n : --i;
          for (var o = t.charAt(i), s = $(o, r) ? function(e) {
            return $(e, r)
          } : /\s/.test(o) ? function(e) {
            return /\s/.test(e)
          } : function(e) {
            return !/\s/.test(e) && !$(e)
          }; 0 < i && s(t.charAt(i - 1));) --i;
          for (; n < t.length && s(t.charAt(n));) ++n
        }
        return new fs(ie(e.line, i), ie(e.line, n))
      },
      toggleOverwrite: function(e) {
        (null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? n(this.display.cursorDiv, "CodeMirror-overwrite") : bo(this.display.cursorDiv, "CodeMirror-overwrite"), p(this, "overwriteToggle", this, this.state.overwrite))
      },
      hasFocus: function() {
        return this.display.input.getField() == C()
      },
      isReadOnly: function() {
        return !(!this.options.readOnly && !this.doc.cantEdit)
      },
      scrollTo: Li(function(e, t) {
        gi(this, e, t)
      }),
      getScrollInfo: function() {
        var e = this.display.scroller;
        return {
          left: e.scrollLeft,
          top: e.scrollTop,
          height: e.scrollHeight - ht(this) - this.display.barHeight,
          width: e.scrollWidth - ht(this) - this.display.barWidth,
          clientHeight: gt(this),
          clientWidth: mt(this)
        }
      },
      scrollIntoView: Li(function(e, t) {
        var i, n;
        null == e ? (e = {
          from: this.doc.sel.primary().head,
          to: null
        }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
          from: ie(e, 0),
          to: null
        } : null == e.from && (e = {
          from: e,
          to: null
        }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? (n = e, vi(i = this), i.curOp.scrollToPos = n) : yi(this, e.from, e.to, e.margin)
      }),
      setSize: Li(function(e, t) {
        var i = this,
          n = function(e) {
            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
          };
        null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && St(this);
        var r = this.display.viewFrom;
        this.doc.iter(r, this.display.viewTo, function(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; t++)
              if (e.widgets[t].noHScroll) {
                Qt(i, r, "widget");
                break
              }++r
        }), this.curOp.forceUpdate = !0, p(this, "refresh", this)
      }),
      operation: function(e) {
        return ji(this, e)
      },
      startOperation: function() {
        return Ti(this)
      },
      endOperation: function() {
        return $i(this)
      },
      refresh: Li(function() {
        var e = this.display.cachedTextHeight;
        Vt(this), this.curOp.forceUpdate = !0, Tt(this), gi(this, this.doc.scrollLeft, this.doc.scrollTop), Ni(this.display), (null == e || .5 < Math.abs(e - Ft(this.display))) && Gt(this), p(this, "refresh", this)
      }),
      swapDoc: Li(function(e) {
        var t = this.doc;
        return t.cm = null, this.state.selectingText && this.state.selectingText(), ln(this, e), Tt(this), this.display.input.reset(), gi(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Ze(this, "swapDoc", this, t), t
      }),
      phrase: function(e) {
        var t = this.options.phrases;
        return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
      },
      getInputField: function() {
        return this.display.input.getField()
      },
      getWrapperElement: function() {
        return this.display.wrapper
      },
      getScrollerElement: function() {
        return this.display.scroller
      },
      getGutterElement: function() {
        return this.display.gutters
      }
    }, e(Is), Is.registerHelper = function(e, t, i) {
      Rs.hasOwnProperty(e) || (Rs[e] = Is[e] = {
        _global: []
      }), Rs[e][t] = i
    }, Is.registerGlobalHelper = function(e, t, i, n) {
      Is.registerHelper(e, t, n), Rs[e]._global.push({
        pred: i,
        val: n
      })
    };
    var Hs, Ws = "iter insert remove copy getEditor constructor".split(" ");
    for (var Bs in ys.prototype) ys.prototype.hasOwnProperty(Bs) && w(Ws, Bs) < 0 && (Lr.prototype[Bs] = function(e) {
      return function() {
        return e.apply(this.doc, arguments)
      }
    }(ys.prototype[Bs]));
    return e(ys), Lr.inputStyles = {
      textarea: Fs,
      contenteditable: Ds
    }, Lr.defineMode = function(e) {
      Lr.defaults.mode || "null" == e || (Lr.defaults.mode = e),
        function(e, t) {
          2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ho[e] = t
        }.apply(this, arguments)
    }, Lr.defineMIME = function(e, t) {
      Wo[e] = t
    }, Lr.defineMode("null", function() {
      return {
        token: function(e) {
          return e.skipToEnd()
        }
      }
    }), Lr.defineMIME("text/plain", "null"), Lr.defineExtension = function(e, t) {
      Lr.prototype[e] = t
    }, Lr.defineDocExtension = function(e, t) {
      ys.prototype[e] = t
    }, Lr.fromTextArea = function(t, e) {
      function i() {
        t.value = a.getValue()
      }
      if ((e = e ? f(e) : {}).value = t.value, !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex), !e.placeholder && t.placeholder && (e.placeholder = t.placeholder), null == e.autofocus) {
        var n = C();
        e.autofocus = n == t || null != t.getAttribute("autofocus") && n == document.body
      }
      var r;
      if (t.form && (qo(t.form, "submit", i), !e.leaveSubmitMethodAlone)) {
        var o = t.form;
        r = o.submit;
        try {
          var s = o.submit = function() {
            i(), o.submit = r, o.submit(), o.submit = s
          }
        } catch (e) {}
      }
      e.finishInit = function(e) {
        e.save = i, e.getTextArea = function() {
          return t
        }, e.toTextArea = function() {
          e.toTextArea = isNaN, i(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (A(t.form, "submit", i), "function" == typeof t.form.submit && (t.form.submit = r))
        }
      }, t.style.display = "none";
      var a = Lr(function(e) {
        return t.parentNode.insertBefore(e, t.nextSibling)
      }, e);
      return a
    }, (Hs = Lr).off = A, Hs.on = qo, Hs.wheelEventPixels = Yi, Hs.Doc = ys, Hs.splitLines = Io, Hs.countColumn = S, Hs.findColumn = T, Hs.isWordChar = o, Hs.Pass = To, Hs.signal = p, Hs.Line = Xo, Hs.changeEnd = Zi, Hs.scrollbarModel = ss, Hs.Pos = ie, Hs.cmpPos = ne, Hs.modes = Ho, Hs.mimeModes = Wo, Hs.resolveMode = F, Hs.getMode = H, Hs.modeExtensions = Bo, Hs.extendMode = W, Hs.copyState = B, Hs.startState = K, Hs.innerMode = G, Hs.commands = Ts, Hs.keyMap = Ss, Hs.keyName = lr, Hs.isModifierKey = sr, Hs.lookupKey = or, Hs.normalizeKeyMap = rr, Hs.StringStream = Uo, Hs.SharedTextMarker = gs, Hs.TextMarker = ms, Hs.LineWidget = ps, Hs.e_preventDefault = P, Hs.e_stopPropagation = t, Hs.e_stop = q, Hs.addClass = n, Hs.contains = g, Hs.rmClass = bo, Hs.keyNames = _s, Lr.version = "5.47.0", Lr
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(j) {
    "use strict";

    function M(e, t, i, n, r, o) {
      this.indented = e, this.column = t, this.type = i, this.info = n, this.align = r, this.prev = o
    }

    function L(e, t, i, n) {
      var r = e.indented;
      return e.context && "statement" == e.context.type && "statement" != i && (r = e.context.indented), e.context = new M(r, t, i, n, null, e.context)
    }

    function A(e) {
      var t = e.context.type;
      return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented), e.context = e.context.prev
    }

    function E(e, t, i) {
      return "variable" == t.prevToken || "type" == t.prevToken || (!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, i)) || (!(!t.typeAtEndOfLine || e.column() != e.indentation()) || void 0))
    }

    function P(e) {
      for (;;) {
        if (!e || "top" == e.type) return !0;
        if ("}" == e.type && "namespace" != e.prev.info) return !1;
        e = e.prev
      }
    }

    function e(e) {
      for (var t = {}, i = e.split(" "), n = 0; n < i.length; ++n) t[i[n]] = !0;
      return t
    }

    function q(e, t) {
      return "function" == typeof e ? e(t) : e.propertyIsEnumerable(t)
    }

    function t(e) {
      return q(f, e) || /.+_t$/.test(e)
    }

    function r(e, t) {
      if (!t.startOfLine) return !1;
      for (var i, n = null; i = e.peek();) {
        if ("\\" == i && e.match(/^.$/)) {
          n = r;
          break
        }
        if ("/" == i && e.match(/^\/[\/\*]/, !1)) break;
        e.next()
      }
      return t.tokenize = n, "meta"
    }

    function i(e, t) {
      return "type" == t.prevToken && "type"
    }

    function n(e) {
      return !(!e || e.length < 2) && ("_" == e[0] && ("_" == e[1] || e[1] !== e[1].toLowerCase()))
    }

    function o(e) {
      return e.eatWhile(/[\w\.']/), "number"
    }

    function s(e, t) {
      if (e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/)) {
        var i = e.match(/"([^\s\\()]{0,16})\(/);
        return !!i && (t.cpp11RawStringDelim = i[1], (t.tokenize = l)(e, t))
      }
      return e.match(/(u8|u|U|L)/) ? !!e.match(/["']/, !1) && "string" : (e.next(), !1)
    }

    function a(e, t) {
      for (var i; null != (i = e.next());)
        if ('"' == i && !e.eat('"')) {
          t.tokenize = null;
          break
        }
      return "string"
    }

    function l(e, t) {
      var i = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
      return e.match(new RegExp(".*?\\)" + i + '"')) ? t.tokenize = null : e.skipToEnd(), "string"
    }

    function c(e, t) {
      function i(e) {
        if (e)
          for (var t in e) e.hasOwnProperty(t) && n.push(t)
      }
      "string" == typeof e && (e = [e]);
      var n = [];
      i(t.keywords), i(t.types), i(t.builtin), i(t.atoms), n.length && (t.helperType = e[0], j.registerHelper("hintWords", e[0], n));
      for (var r = 0; r < e.length; ++r) j.defineMIME(e[r], t)
    }

    function u(e, t) {
      for (var i = !1; !e.eol();) {
        if (!i && e.match('"""')) {
          t.tokenize = null;
          break
        }
        i = "\\" == e.next() && !i
      }
      return "string"
    }
    j.defineMode("clike", function(e, a) {
      function l(e, t) {
        var o, i = e.next();
        if (w[i]) {
          var n = w[i](e, t);
          if (!1 !== n) return n
        }
        if ('"' == i || "'" == i) return t.tokenize = (o = i, function(e, t) {
          for (var i, n = !1, r = !1; null != (i = e.next());) {
            if (i == o && !n) {
              r = !0;
              break
            }
            n = !n && "\\" == i
          }
          return (r || !n && !_) && (t.tokenize = null), "string"
        }), t.tokenize(e, t);
        if (C.test(i)) return c = i, null;
        if (S.test(i)) {
          if (e.backUp(1), e.match(T)) return "number";
          e.next()
        }
        if ("/" == i) {
          if (e.eat("*")) return (t.tokenize = s)(e, t);
          if (e.eat("/")) return e.skipToEnd(), "comment"
        }
        if ($.test(i)) {
          for (; !e.match(/^\/[\/*]/, !1) && e.eat($););
          return "operator"
        }
        if (e.eatWhile(O), x)
          for (; e.match(x);) e.eatWhile(O);
        var r = e.current();
        return q(h, r) ? (q(v, r) && (c = "newstatement"), q(y, r) && (u = !0), "keyword") : q(m, r) ? "type" : q(g, r) || z && z(r) ? (q(v, r) && (c = "newstatement"), "builtin") : q(b, r) ? "atom" : "variable"
      }

      function s(e, t) {
        for (var i, n = !1; i = e.next();) {
          if ("/" == i && n) {
            t.tokenize = null;
            break
          }
          n = "*" == i
        }
        return "comment"
      }

      function o(e, t) {
        a.typeFirstDefinitions && e.eol() && P(t.context) && (t.typeAtEndOfLine = E(e, t, e.pos))
      }
      var c, u, d = e.indentUnit,
        f = a.statementIndentUnit || d,
        p = a.dontAlignCalls,
        h = a.keywords || {},
        m = a.types || {},
        g = a.builtin || {},
        v = a.blockKeywords || {},
        y = a.defKeywords || {},
        b = a.atoms || {},
        w = a.hooks || {},
        _ = a.multiLineStrings,
        k = !1 !== a.indentStatements,
        t = !1 !== a.indentSwitch,
        x = a.namespaceSeparator,
        C = a.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
        S = a.numberStart || /[\d\.]/,
        T = a.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
        $ = a.isOperatorChar || /[+\-*&%=<>!?|\/]/,
        O = a.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
        z = a.isReservedIdentifier || !1;
      return {
        startState: function(e) {
          return {
            tokenize: null,
            context: new M((e || 0) - d, 0, "top", null, !1),
            indented: 0,
            startOfLine: !0,
            prevToken: null
          }
        },
        token: function(e, t) {
          var i = t.context;
          if (e.sol() && (null == i.align && (i.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return o(e, t), null;
          c = u = null;
          var n = (t.tokenize || l)(e, t);
          if ("comment" == n || "meta" == n) return n;
          if (null == i.align && (i.align = !0), ";" == c || ":" == c || "," == c && e.match(/^\s*(?:\/\/.*)?$/, !1))
            for (;
              "statement" == t.context.type;) A(t);
          else if ("{" == c) L(t, e.column(), "}");
          else if ("[" == c) L(t, e.column(), "]");
          else if ("(" == c) L(t, e.column(), ")");
          else if ("}" == c) {
            for (;
              "statement" == i.type;) i = A(t);
            for ("}" == i.type && (i = A(t));
                 "statement" == i.type;) i = A(t)
          } else c == i.type ? A(t) : k && (("}" == i.type || "top" == i.type) && ";" != c || "statement" == i.type && "newstatement" == c) && L(t, e.column(), "statement", e.current());
          if ("variable" == n && ("def" == t.prevToken || a.typeFirstDefinitions && E(e, t, e.start) && P(t.context) && e.match(/^\s*\(/, !1)) && (n = "def"), w.token) {
            var r = w.token(e, t, n);
            void 0 !== r && (n = r)
          }
          return "def" == n && !1 === a.styleDefs && (n = "variable"), t.startOfLine = !1, t.prevToken = u ? "def" : n || c, o(e, t), n
        },
        indent: function(e, t) {
          if (e.tokenize != l && null != e.tokenize || e.typeAtEndOfLine) return j.Pass;
          var i = e.context,
            n = t && t.charAt(0),
            r = n == i.type;
          if ("statement" == i.type && "}" == n && (i = i.prev), a.dontIndentStatements)
            for (;
              "statement" == i.type && a.dontIndentStatements.test(i.info);) i = i.prev;
          if (w.indent) {
            var o = w.indent(e, i, t, d);
            if ("number" == typeof o) return o
          }
          var s = i.prev && "switch" == i.prev.info;
          if (a.allmanIndentation && /[{(]/.test(n)) {
            for (;
              "top" != i.type && "}" != i.type;) i = i.prev;
            return i.indented
          }
          return "statement" == i.type ? i.indented + ("{" == n ? 0 : f) : !i.align || p && ")" == i.type ? ")" != i.type || r ? i.indented + (r ? 0 : d) + (r || !s || /^(?:case|default)\b/.test(t) ? 0 : d) : i.indented + f : i.column + (r ? 0 : 1)
        },
        electricInput: t ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
        blockCommentStart: "/*",
        blockCommentEnd: "*/",
        blockCommentContinue: " * ",
        lineComment: "//",
        fold: "brace"
      }
    });
    var d = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",
      f = e("int long char short double float unsigned signed void bool"),
      p = e("SEL instancetype id Class Protocol BOOL"),
      h = "case do else for if switch while struct enum union",
      m = "struct enum union";
    c(["text/x-csrc", "text/x-c", "text/x-chdr"], {
      name: "clike",
      keywords: e(d),
      types: t,
      blockKeywords: e(h),
      defKeywords: e(m),
      typeFirstDefinitions: !0,
      atoms: e("NULL true false"),
      isReservedIdentifier: n,
      hooks: {
        "#": r,
        "*": i
      },
      modeProps: {
        fold: ["brace", "include"]
      }
    }), c(["text/x-c++src", "text/x-c++hdr"], {
      name: "clike",
      keywords: e(d + "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq"),
      types: t,
      blockKeywords: e(h + " class try catch"),
      defKeywords: e(m + " class namespace"),
      typeFirstDefinitions: !0,
      atoms: e("true false NULL nullptr"),
      dontIndentStatements: /^template$/,
      isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
      isReservedIdentifier: n,
      hooks: {
        "#": r,
        "*": i,
        u: s,
        U: s,
        L: s,
        R: s,
        0: o,
        1: o,
        2: o,
        3: o,
        4: o,
        5: o,
        6: o,
        7: o,
        8: o,
        9: o,
        token: function(e, t, i) {
          return "variable" != i || "(" != e.peek() || ";" != t.prevToken && null != t.prevToken && "}" != t.prevToken || (n = e.current(), !(r = /(\w+)::~?(\w+)$/.exec(n)) || r[1] != r[2]) ? void 0 : "def";
          var n, r
        }
      },
      namespaceSeparator: "::",
      modeProps: {
        fold: ["brace", "include"]
      }
    }), c("text/x-java", {
      name: "clike",
      keywords: e("abstract assert break case catch class const continue default do else enum extends final finally float for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
      types: e("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
      blockKeywords: e("catch class do else finally for if switch try while"),
      defKeywords: e("class interface enum @interface"),
      typeFirstDefinitions: !0,
      atoms: e("true false null"),
      number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
      hooks: {
        "@": function(e) {
          return !e.match("interface", !1) && (e.eatWhile(/[\w\$_]/), "meta")
        }
      },
      modeProps: {
        fold: ["brace", "import"]
      }
    }), c("text/x-csharp", {
      name: "clike",
      keywords: e("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
      types: e("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
      blockKeywords: e("catch class do else finally for foreach if struct switch try while"),
      defKeywords: e("class interface namespace struct var"),
      typeFirstDefinitions: !0,
      atoms: e("true false null"),
      hooks: {
        "@": function(e, t) {
          return e.eat('"') ? (t.tokenize = a)(e, t) : (e.eatWhile(/[\w\$_]/), "meta")
        }
      }
    }), c("text/x-scala", {
      name: "clike",
      keywords: e("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),
      types: e("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
      multiLineStrings: !0,
      blockKeywords: e("catch class enum do else finally for forSome if match switch try while"),
      defKeywords: e("class enum def object package trait type val var"),
      atoms: e("true false null"),
      indentStatements: !1,
      indentSwitch: !1,
      isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
      hooks: {
        "@": function(e) {
          return e.eatWhile(/[\w\$_]/), "meta"
        },
        '"': function(e, t) {
          return !!e.match('""') && (t.tokenize = u, t.tokenize(e, t))
        },
        "'": function(e) {
          return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom"
        },
        "=": function(e, t) {
          var i = t.context;
          return !("}" != i.type || !i.align || !e.eat(">")) && (t.context = new M(i.indented, i.column, i.type, i.info, null, i.prev), "operator")
        },
        "/": function(e, t) {
          return !!e.eat("*") && (t.tokenize = function n(r) {
            return function(e, t) {
              for (var i; i = e.next();) {
                if ("*" == i && e.eat("/")) {
                  if (1 != r) return t.tokenize = n(r - 1), t.tokenize(e, t);
                  t.tokenize = null;
                  break
                }
                if ("/" == i && e.eat("*")) return t.tokenize = n(r + 1), t.tokenize(e, t)
              }
              return "comment"
            }
          }(1), t.tokenize(e, t))
        }
      },
      modeProps: {
        closeBrackets: {
          pairs: '()[]{}""',
          triples: '"'
        }
      }
    }), c("text/x-kotlin", {
      name: "clike",
      keywords: e("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),
      types: e("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),
      intendSwitch: !1,
      indentStatements: !1,
      multiLineStrings: !0,
      number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
      blockKeywords: e("catch class do else finally for if where try while enum"),
      defKeywords: e("class val var object interface fun"),
      atoms: e("true false null this"),
      hooks: {
        "@": function(e) {
          return e.eatWhile(/[\w\$_]/), "meta"
        },
        "*": function(e, t) {
          return "." == t.prevToken ? "variable" : "operator"
        },
        '"': function(e, t) {
          return t.tokenize = (o = e.match('""'), function(e, t) {
            for (var i, n = !1, r = !1; !e.eol();) {
              if (!o && !n && e.match('"')) {
                r = !0;
                break
              }
              if (o && e.match('"""')) {
                r = !0;
                break
              }
              i = e.next(), !n && "$" == i && e.match("{") && e.skipTo("}"), n = !n && "\\" == i && !o
            }
            return (r || !o) && (t.tokenize = null), "string"
          }), t.tokenize(e, t);
          var o
        },
        indent: function(e, t, i, n) {
          var r = i && i.charAt(0);
          return "}" != e.prevToken && ")" != e.prevToken || "" != i ? "operator" == e.prevToken && "}" != i || "variable" == e.prevToken && "." == r || ("}" == e.prevToken || ")" == e.prevToken) && "." == r ? 2 * n + t.indented : t.align && "}" == t.type ? t.indented + (e.context.type == (i || "").charAt(0) ? 0 : n) : void 0 : e.indented
        }
      },
      modeProps: {
        closeBrackets: {
          triples: '"'
        }
      }
    }), c(["x-shader/x-vertex", "x-shader/x-fragment"], {
      name: "clike",
      keywords: e("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
      types: e("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
      blockKeywords: e("for while do if else struct"),
      builtin: e("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
      atoms: e("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
      indentSwitch: !1,
      hooks: {
        "#": r
      },
      modeProps: {
        fold: ["brace", "include"]
      }
    }), c("text/x-nesc", {
      name: "clike",
      keywords: e(d + " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
      types: t,
      blockKeywords: e(h),
      atoms: e("null true false"),
      hooks: {
        "#": r
      },
      modeProps: {
        fold: ["brace", "include"]
      }
    }), c("text/x-objectivec", {
      name: "clike",
      keywords: e(d + " bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available"),
      types: function(e) {
        return t(e) || q(p, e)
      },
      builtin: e("FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION NS_RETURNS_RETAINED NS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT"),
      blockKeywords: e(h + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
      defKeywords: e(m + " @interface @implementation @protocol @class"),
      dontIndentStatements: /^@.*$/,
      typeFirstDefinitions: !0,
      atoms: e("YES NO NULL Nil nil true false nullptr"),
      isReservedIdentifier: n,
      hooks: {
        "#": r,
        "*": i
      },
      modeProps: {
        fold: ["brace", "include"]
      }
    }), c("text/x-squirrel", {
      name: "clike",
      keywords: e("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
      types: t,
      blockKeywords: e("case catch class else for foreach if switch try while"),
      defKeywords: e("function local class"),
      typeFirstDefinitions: !0,
      atoms: e("true false null"),
      hooks: {
        "#": r
      },
      modeProps: {
        fold: ["brace", "include"]
      }
    });
    var g = null;
    c("text/x-ceylon", {
      name: "clike",
      keywords: e("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
      types: function(e) {
        var t = e.charAt(0);
        return t === t.toUpperCase() && t !== t.toLowerCase()
      },
      blockKeywords: e("case catch class dynamic else finally for function if interface module new object switch try while"),
      defKeywords: e("class dynamic function interface module object package value"),
      builtin: e("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
      isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
      isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
      numberStart: /[\d#$]/,
      number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
      multiLineStrings: !0,
      typeFirstDefinitions: !0,
      atoms: e("true false null larger smaller equal empty finished"),
      indentSwitch: !1,
      styleDefs: !1,
      hooks: {
        "@": function(e) {
          return e.eatWhile(/[\w\$_]/), "meta"
        },
        '"': function(e, t) {
          return t.tokenize = function o(s) {
            return function(e, t) {
              for (var i, n = !1, r = !1; !e.eol();) {
                if (!n && e.match('"') && ("single" == s || e.match('""'))) {
                  r = !0;
                  break
                }
                if (!n && e.match("``")) {
                  g = o(s), r = !0;
                  break
                }
                i = e.next(), n = "single" == s && !n && "\\" == i
              }
              return r && (t.tokenize = null), "string"
            }
          }(e.match('""') ? "triple" : "single"), t.tokenize(e, t)
        },
        "`": function(e, t) {
          return !(!g || !e.match("`")) && (t.tokenize = g, g = null, t.tokenize(e, t))
        },
        "'": function(e) {
          return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom"
        },
        token: function(e, t, i) {
          return "variable" != i && "type" != i || "." != t.prevToken ? void 0 : "variable-2"
        }
      },
      modeProps: {
        fold: ["brace", "import"],
        closeBrackets: {
          triples: '"'
        }
      }
    })
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(d) {
    "use strict";
    var i = function(e) {
      return new RegExp("^(?:" + e.join("|") + ")$", "i")
    };
    d.defineMode("cypher", function(e) {
      var n, t = function(e) {
          var t = e.next();
          if ('"' === t) return e.match(/.*?"/), "string";
          if ("'" === t) return e.match(/.*?'/), "string";
          if (/[{}\(\),\.;\[\]]/.test(t)) return n = t, "node";
          if ("/" === t && e.eat("/")) return e.skipToEnd(), "comment";
          if (u.test(t)) return e.eatWhile(u), null;
          if (e.eatWhile(/[_\w\d]/), e.eat(":")) return e.eatWhile(/[\w\d_\-]/), "atom";
          var i = e.current();
          return a.test(i) ? "builtin" : l.test(i) ? "def" : c.test(i) ? "keyword" : "variable"
        },
        r = function(e, t, i) {
          return e.context = {
            prev: e.context,
            indent: e.indent,
            col: i,
            type: t
          }
        },
        o = function(e) {
          return e.indent = e.context.indent, e.context = e.context.prev
        },
        s = e.indentUnit,
        a = i(["abs", "acos", "allShortestPaths", "asin", "atan", "atan2", "avg", "ceil", "coalesce", "collect", "cos", "cot", "count", "degrees", "e", "endnode", "exp", "extract", "filter", "floor", "haversin", "head", "id", "keys", "labels", "last", "left", "length", "log", "log10", "lower", "ltrim", "max", "min", "node", "nodes", "percentileCont", "percentileDisc", "pi", "radians", "rand", "range", "reduce", "rel", "relationship", "relationships", "replace", "reverse", "right", "round", "rtrim", "shortestPath", "sign", "sin", "size", "split", "sqrt", "startnode", "stdev", "stdevp", "str", "substring", "sum", "tail", "tan", "timestamp", "toFloat", "toInt", "toString", "trim", "type", "upper"]),
        l = i(["all", "and", "any", "contains", "exists", "has", "in", "none", "not", "or", "single", "xor"]),
        c = i(["as", "asc", "ascending", "assert", "by", "case", "commit", "constraint", "create", "csv", "cypher", "delete", "desc", "descending", "detach", "distinct", "drop", "else", "end", "ends", "explain", "false", "fieldterminator", "foreach", "from", "headers", "in", "index", "is", "join", "limit", "load", "match", "merge", "null", "on", "optional", "order", "periodic", "profile", "remove", "return", "scan", "set", "skip", "start", "starts", "then", "true", "union", "unique", "unwind", "using", "when", "where", "with", "call", "yield"]),
        u = /[*+\-<>=&|~%^]/;
      return {
        startState: function() {
          return {
            tokenize: t,
            context: null,
            indent: 0,
            col: 0
          }
        },
        token: function(e, t) {
          if (e.sol() && (t.context && null == t.context.align && (t.context.align = !1), t.indent = e.indentation()), e.eatSpace()) return null;
          var i = t.tokenize(e, t);
          if ("comment" !== i && t.context && null == t.context.align && "pattern" !== t.context.type && (t.context.align = !0), "(" === n) r(t, ")", e.column());
          else if ("[" === n) r(t, "]", e.column());
          else if ("{" === n) r(t, "}", e.column());
          else if (/[\]\}\)]/.test(n)) {
            for (; t.context && "pattern" === t.context.type;) o(t);
            t.context && n === t.context.type && o(t)
          } else "." === n && t.context && "pattern" === t.context.type ? o(t) : /atom|string|variable/.test(i) && t.context && (/[\}\]]/.test(t.context.type) ? r(t, "pattern", e.column()) : "pattern" !== t.context.type || t.context.align || (t.context.align = !0, t.context.col = e.column()));
          return i
        },
        indent: function(e, t) {
          var i = t && t.charAt(0),
            n = e.context;
          if (/[\]\}]/.test(i))
            for (; n && "pattern" === n.type;) n = n.prev;
          var r = n && i === n.type;
          return n ? "keywords" === n.type ? d.commands.newlineAndIndent : n.align ? n.col + (r ? 0 : 1) : n.indent + (r ? 0 : s) : 0
        }
      }
    }), d.modeExtensions.cypher = {
      autoFormatLineBreaks: function(e) {
        for (var t = e.split("\n"), i = /\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g, n = 0; n < t.length; n++) t[n] = t[n].replace(i, " \n$1 ").trim();
        return t.join("\n")
      }
    }, d.defineMIME("application/x-cypher-query", "cypher")
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(Ke) {
    "use strict";
    Ke.defineMode("javascript", function(e, d) {
      function s(e, t, i) {
        return Le = e, Ae = i, t
      }

      function f(e, t) {
        var r, i = e.next();
        if ('"' == i || "'" == i) return t.tokenize = (r = i, function(e, t) {
          var i, n = !1;
          if (qe && "@" == e.peek() && e.match(He)) return t.tokenize = f, s("jsonld-keyword", "meta");
          for (; null != (i = e.next()) && (i != r || n);) n = !n && "\\" == i;
          return n || (t.tokenize = f), s("string", "string")
        }), t.tokenize(e, t);
        if ("." == i && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return s("number", "number");
        if ("." == i && e.match("..")) return s("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(i)) return s(i);
        if ("=" == i && e.eat(">")) return s("=>", "operator");
        if ("0" == i && e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)) return s("number", "number");
        if (/\d/.test(i)) return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/), s("number", "number");
        if ("/" == i) return e.eat("*") ? (t.tokenize = p)(e, t) : e.eat("/") ? (e.skipToEnd(), s("comment", "comment")) : Me(e, t, 1) ? (function(e) {
          for (var t, i = !1, n = !1; null != (t = e.next());) {
            if (!i) {
              if ("/" == t && !n) return;
              "[" == t ? n = !0 : n && "]" == t && (n = !1)
            }
            i = !i && "\\" == t
          }
        }(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), s("regexp", "string-2")) : (e.eat("="), s("operator", "operator", e.current()));
        if ("`" == i) return (t.tokenize = a)(e, t);
        if ("#" == i) return e.skipToEnd(), s("error", "error");
        if (Fe.test(i)) return ">" == i && t.lexical && ">" == t.lexical.type || (e.eat("=") ? ("!" == i || "=" == i) && e.eat("=") : /[<>*+\-]/.test(i) && (e.eat(i), ">" == i && e.eat(i))), s("operator", "operator", e.current());
        if (Ne.test(i)) {
          e.eatWhile(Ne);
          var n = e.current();
          if ("." != t.lastType) {
            if (Re.propertyIsEnumerable(n)) {
              var o = Re[n];
              return s(o.type, o.style, n)
            }
            if ("async" == n && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return s("async", "keyword", n)
          }
          return s("variable", "variable", n)
        }
      }

      function p(e, t) {
        for (var i, n = !1; i = e.next();) {
          if ("/" == i && n) {
            t.tokenize = f;
            break
          }
          n = "*" == i
        }
        return s("comment", "comment")
      }

      function a(e, t) {
        for (var i, n = !1; null != (i = e.next());) {
          if (!n && ("`" == i || "$" == i && e.eat("{"))) {
            t.tokenize = f;
            break
          }
          n = !n && "\\" == i
        }
        return s("quasi", "string-2", e.current())
      }

      function n(e, t) {
        t.fatArrowAt && (t.fatArrowAt = null);
        var i = e.string.indexOf("=>", e.start);
        if (!(i < 0)) {
          if (Ie) {
            var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, i));
            n && (i = n.index)
          }
          for (var r = 0, o = !1, s = i - 1; 0 <= s; --s) {
            var a = e.string.charAt(s),
              l = We.indexOf(a);
            if (0 <= l && l < 3) {
              if (!r) {
                ++s;
                break
              }
              if (0 == --r) {
                "(" == a && (o = !0);
                break
              }
            } else if (3 <= l && l < 6) ++r;
            else if (Ne.test(a)) o = !0;
            else {
              if (/["'\/]/.test(a)) return;
              if (o && !r) {
                ++s;
                break
              }
            }
          }
          o && !r && (t.fatArrowAt = s)
        }
      }

      function o(e, t, i, n, r, o) {
        this.indented = e, this.column = t, this.type = i, this.prev = r, this.info = o, null != n && (this.align = n)
      }

      function l(e, t) {
        for (var i = e.localVars; i; i = i.next)
          if (i.name == t) return !0;
        for (var n = e.context; n; n = n.prev)
          for (i = n.vars; i; i = i.next)
            if (i.name == t) return !0
      }

      function c() {
        for (var e = arguments.length - 1; 0 <= e; e--) Ue.cc.push(arguments[e])
      }

      function u() {
        return c.apply(null, arguments), !0
      }

      function r(e, t) {
        for (var i = t; i; i = i.next)
          if (i.name == e) return !0;
        return !1
      }

      function i(e) {
        var t = Ue.state;
        if (Ue.marked = "def", t.context)
          if ("var" == t.lexical.info && t.context && t.context.block) {
            var i = function e(t, i) {
              if (i) {
                if (i.block) {
                  var n = e(t, i.prev);
                  return n ? n == i.prev ? i : new m(n, i.vars, !0) : null
                }
                return r(t, i.vars) ? i : new m(i.prev, new g(t, i.vars), !1)
              }
              return null
            }(e, t.context);
            if (null != i) return void(t.context = i)
          } else if (!r(e, t.localVars)) return void(t.localVars = new g(e, t.localVars));
        d.globalVars && !r(e, t.globalVars) && (t.globalVars = new g(e, t.globalVars))
      }

      function h(e) {
        return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
      }

      function m(e, t, i) {
        this.prev = e, this.vars = t, this.block = i
      }

      function g(e, t) {
        this.name = e, this.next = t
      }

      function v() {
        Ue.state.context = new m(Ue.state.context, Ue.state.localVars, !1), Ue.state.localVars = Ge
      }

      function y() {
        Ue.state.context = new m(Ue.state.context, Ue.state.localVars, !0), Ue.state.localVars = null
      }

      function b() {
        Ue.state.localVars = Ue.state.context.vars, Ue.state.context = Ue.state.context.prev
      }

      function w(n, r) {
        var e = function() {
          var e = Ue.state,
            t = e.indented;
          if ("stat" == e.lexical.type) t = e.lexical.indented;
          else
            for (var i = e.lexical; i && ")" == i.type && i.align; i = i.prev) t = i.indented;
          e.lexical = new o(t, Ue.stream.column(), n, null, e.lexical, r)
        };
        return e.lex = !0, e
      }

      function _() {
        var e = Ue.state;
        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
      }

      function k(i) {
        return function e(t) {
          return t == i ? u() : ";" == i || "}" == t || ")" == t || "]" == t ? c() : u(e)
        }
      }

      function x(e, t) {
        return "var" == e ? u(w("vardef", t), ie, k(";"), _) : "keyword a" == e ? u(w("form"), $, x, _) : "keyword b" == e ? u(w("form"), x, _) : "keyword d" == e ? Ue.stream.match(/^\s*$/, !1) ? u() : u(w("stat"), z, k(";"), _) : "debugger" == e ? u(k(";")) : "{" == e ? u(w("}"), y, U, _, b) : ";" == e ? u() : "if" == e ? ("else" == Ue.state.lexical.info && Ue.state.cc[Ue.state.cc.length - 1] == _ && Ue.state.cc.pop()(), u(w("form"), $, x, _, le)) : "function" == e ? u(fe) : "for" == e ? u(w("form"), ce, x, _) : "class" == e || Ie && "interface" == t ? (Ue.marked = "keyword", u(w("form", "class" == e ? e : t), ve, _)) : "variable" == e ? Ie && "declare" == t ? (Ue.marked = "keyword", u(x)) : Ie && ("module" == t || "enum" == t || "type" == t) && Ue.stream.match(/^\s*\w/, !1) ? (Ue.marked = "keyword", "enum" == t ? u(ze) : "type" == t ? u(he, k("operator"), Y, k(";")) : u(w("form"), ne, k("{"), w("}"), U, _, _)) : Ie && "namespace" == t ? (Ue.marked = "keyword", u(w("form"), S, x, _)) : Ie && "abstract" == t ? (Ue.marked = "keyword", u(x)) : u(w("stat"), I) : "switch" == e ? u(w("form"), $, k("{"), w("}", "switch"), y, U, _, _, b) : "case" == e ? u(S, k(":")) : "default" == e ? u(k(":")) : "catch" == e ? u(w("form"), v, C, x, _, b) : "export" == e ? u(w("stat"), _e, _) : "import" == e ? u(w("stat"), xe, _) : "async" == e ? u(x) : "@" == t ? u(S, x) : c(w("stat"), S, k(";"), _)
      }

      function C(e) {
        return "(" == e ? u(me, k(")")) : void 0
      }

      function S(e, t) {
        return O(e, t, !1)
      }

      function T(e, t) {
        return O(e, t, !0)
      }

      function $(e) {
        return "(" != e ? c() : u(w(")"), S, k(")"), _)
      }

      function O(e, t, i) {
        if (Ue.state.fatArrowAt == Ue.stream.start) {
          var n = i ? P : E;
          if ("(" == e) return u(v, w(")"), W(me, ")"), _, k("=>"), n, b);
          if ("variable" == e) return c(v, ne, k("=>"), n, b)
        }
        var r, o = i ? M : j;
        return Be.hasOwnProperty(e) ? u(o) : "function" == e ? u(fe, o) : "class" == e || Ie && "interface" == t ? (Ue.marked = "keyword", u(w("form"), ge, _)) : "keyword c" == e || "async" == e ? u(i ? T : S) : "(" == e ? u(w(")"), z, k(")"), _, o) : "operator" == e || "spread" == e ? u(i ? T : S) : "[" == e ? u(w("]"), Oe, _, o) : "{" == e ? B(R, "}", null, o) : "quasi" == e ? c(L, o) : "new" == e ? u((r = i, function(e) {
          return "." == e ? u(r ? D : q) : "variable" == e && Ie ? u(J, r ? M : j) : c(r ? T : S)
        })) : "import" == e ? u(S) : u()
      }

      function z(e) {
        return e.match(/[;\}\)\],]/) ? c() : c(S)
      }

      function j(e, t) {
        return "," == e ? u(S) : M(e, t, !1)
      }

      function M(e, t, i) {
        var n = 0 == i ? j : M,
          r = 0 == i ? S : T;
        return "=>" == e ? u(v, i ? P : E, b) : "operator" == e ? /\+\+|--/.test(t) || Ie && "!" == t ? u(n) : Ie && "<" == t && Ue.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? u(w(">"), W(Y, ">"), _, n) : "?" == t ? u(S, k(":"), r) : u(r) : "quasi" == e ? c(L, n) : ";" != e ? "(" == e ? B(T, ")", "call", n) : "." == e ? u(N, n) : "[" == e ? u(w("]"), z, k("]"), _, n) : Ie && "as" == t ? (Ue.marked = "keyword", u(Y, n)) : "regexp" == e ? (Ue.state.lastType = Ue.marked = "operator", Ue.stream.backUp(Ue.stream.pos - Ue.stream.start - 1), u(r)) : void 0 : void 0
      }

      function L(e, t) {
        return "quasi" != e ? c() : "${" != t.slice(t.length - 2) ? u(L) : u(S, A)
      }

      function A(e) {
        return "}" == e ? (Ue.marked = "string-2", Ue.state.tokenize = a, u(L)) : void 0
      }

      function E(e) {
        return n(Ue.stream, Ue.state), c("{" == e ? x : S)
      }

      function P(e) {
        return n(Ue.stream, Ue.state), c("{" == e ? x : T)
      }

      function q(e, t) {
        return "target" == t ? (Ue.marked = "keyword", u(j)) : void 0
      }

      function D(e, t) {
        return "target" == t ? (Ue.marked = "keyword", u(M)) : void 0
      }

      function I(e) {
        return ":" == e ? u(_, x) : c(j, k(";"), _)
      }

      function N(e) {
        return "variable" == e ? (Ue.marked = "property", u()) : void 0
      }

      function R(e, t) {
        return "async" == e ? (Ue.marked = "property", u(R)) : "variable" == e || "keyword" == Ue.style ? (Ue.marked = "property", "get" == t || "set" == t ? u(F) : (Ie && Ue.state.fatArrowAt == Ue.stream.start && (i = Ue.stream.match(/^\s*:\s*/, !1)) && (Ue.state.fatArrowAt = Ue.stream.pos + i[0].length), u(H))) : "number" == e || "string" == e ? (Ue.marked = qe ? "property" : Ue.style + " property", u(H)) : "jsonld-keyword" == e ? u(H) : Ie && h(t) ? (Ue.marked = "keyword", u(R)) : "[" == e ? u(S, G, k("]"), H) : "spread" == e ? u(T, H) : "*" == t ? (Ue.marked = "keyword", u(R)) : ":" == e ? c(H) : void 0;
        var i
      }

      function F(e) {
        return "variable" != e ? c(H) : (Ue.marked = "property", u(fe))
      }

      function H(e) {
        return ":" == e ? u(T) : "(" == e ? c(fe) : void 0
      }

      function W(n, r, o) {
        function s(e, t) {
          if (o ? -1 < o.indexOf(e) : "," == e) {
            var i = Ue.state.lexical;
            return "call" == i.info && (i.pos = (i.pos || 0) + 1), u(function(e, t) {
              return e == r || t == r ? c() : c(n)
            }, s)
          }
          return e == r || t == r ? u() : o && -1 < o.indexOf(";") ? c(n) : u(k(r))
        }
        return function(e, t) {
          return e == r || t == r ? u() : c(n, s)
        }
      }

      function B(e, t, i) {
        for (var n = 3; n < arguments.length; n++) Ue.cc.push(arguments[n]);
        return u(w(t, i), W(e, t), _)
      }

      function U(e) {
        return "}" == e ? u() : c(x, U)
      }

      function G(e, t) {
        if (Ie) {
          if (":" == e || "in" == t) return u(Y);
          if ("?" == t) return u(G)
        }
      }

      function K(e) {
        return Ie && ":" == e ? Ue.stream.match(/^\s*\w+\s+is\b/, !1) ? u(S, t, Y) : u(Y) : void 0
      }

      function t(e, t) {
        return "is" == t ? (Ue.marked = "keyword", u()) : void 0
      }

      function Y(e, t) {
        return "keyof" == t || "typeof" == t || "infer" == t ? (Ue.marked = "keyword", u("typeof" == t ? T : Y)) : "variable" == e || "void" == t ? (Ue.marked = "type", u(Z)) : "|" == t || "&" == t ? u(Y) : "string" == e || "number" == e || "atom" == e ? u(Z) : "[" == e ? u(w("]"), W(Y, "]", ","), _, Z) : "{" == e ? u(w("}"), W(Q, "}", ",;"), _, Z) : "(" == e ? u(W(X, ")"), V, Z) : "<" == e ? u(W(Y, ">"), Y) : void 0
      }

      function V(e) {
        return "=>" == e ? u(Y) : void 0
      }

      function Q(e, t) {
        return "variable" == e || "keyword" == Ue.style ? (Ue.marked = "property", u(Q)) : "?" == t || "number" == e || "string" == e ? u(Q) : ":" == e ? u(Y) : "[" == e ? u(k("variable"), G, k("]"), Q) : "(" == e ? c(pe, Q) : void 0
      }

      function X(e, t) {
        return "variable" == e && Ue.stream.match(/^\s*[?:]/, !1) || "?" == t ? u(X) : ":" == e ? u(Y) : "spread" == e ? u(X) : c(Y)
      }

      function Z(e, t) {
        return "<" == t ? u(w(">"), W(Y, ">"), _, Z) : "|" == t || "." == e || "&" == t ? u(Y) : "[" == e ? u(Y, k("]"), Z) : "extends" == t || "implements" == t ? (Ue.marked = "keyword", u(Y)) : "?" == t ? u(Y, k(":"), Y) : void 0
      }

      function J(e, t) {
        return "<" == t ? u(w(">"), W(Y, ">"), _, Z) : void 0
      }

      function ee() {
        return c(Y, te)
      }

      function te(e, t) {
        return "=" == t ? u(Y) : void 0
      }

      function ie(e, t) {
        return "enum" == t ? (Ue.marked = "keyword", u(ze)) : c(ne, G, se, ae)
      }

      function ne(e, t) {
        return Ie && h(t) ? (Ue.marked = "keyword", u(ne)) : "variable" == e ? (i(t), u()) : "spread" == e ? u(ne) : "[" == e ? B(oe, "]") : "{" == e ? B(re, "}") : void 0
      }

      function re(e, t) {
        return "variable" != e || Ue.stream.match(/^\s*:/, !1) ? ("variable" == e && (Ue.marked = "property"), "spread" == e ? u(ne) : "}" == e ? c() : "[" == e ? u(S, k("]"), k(":"), re) : u(k(":"), ne, se)) : (i(t), u(se))
      }

      function oe() {
        return c(ne, se)
      }

      function se(e, t) {
        return "=" == t ? u(T) : void 0
      }

      function ae(e) {
        return "," == e ? u(ie) : void 0
      }

      function le(e, t) {
        return "keyword b" == e && "else" == t ? u(w("form", "else"), x, _) : void 0
      }

      function ce(e, t) {
        return "await" == t ? u(ce) : "(" == e ? u(w(")"), ue, _) : void 0
      }

      function ue(e) {
        return "var" == e ? u(ie, de) : "variable" == e ? u(de) : c(de)
      }

      function de(e, t) {
        return ")" == e ? u() : ";" == e ? u(de) : "in" == t || "of" == t ? (Ue.marked = "keyword", u(S, de)) : c(S, de)
      }

      function fe(e, t) {
        return "*" == t ? (Ue.marked = "keyword", u(fe)) : "variable" == e ? (i(t), u(fe)) : "(" == e ? u(v, w(")"), W(me, ")"), _, K, x, b) : Ie && "<" == t ? u(w(">"), W(ee, ">"), _, fe) : void 0
      }

      function pe(e, t) {
        return "*" == t ? (Ue.marked = "keyword", u(pe)) : "variable" == e ? (i(t), u(pe)) : "(" == e ? u(v, w(")"), W(me, ")"), _, K, b) : Ie && "<" == t ? u(w(">"), W(ee, ">"), _, pe) : void 0
      }

      function he(e, t) {
        return "keyword" == e || "variable" == e ? (Ue.marked = "type", u(he)) : "<" == t ? u(w(">"), W(ee, ">"), _) : void 0
      }

      function me(e, t) {
        return "@" == t && u(S, me), "spread" == e ? u(me) : Ie && h(t) ? (Ue.marked = "keyword", u(me)) : Ie && "this" == e ? u(G, se) : c(ne, G, se)
      }

      function ge(e, t) {
        return "variable" == e ? ve(e, t) : ye(e, t)
      }

      function ve(e, t) {
        return "variable" == e ? (i(t), u(ye)) : void 0
      }

      function ye(e, t) {
        return "<" == t ? u(w(">"), W(ee, ">"), _, ye) : "extends" == t || "implements" == t || Ie && "," == e ? ("implements" == t && (Ue.marked = "keyword"), u(Ie ? Y : S, ye)) : "{" == e ? u(w("}"), be, _) : void 0
      }

      function be(e, t) {
        return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || Ie && h(t)) && Ue.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (Ue.marked = "keyword", u(be)) : "variable" == e || "keyword" == Ue.style ? (Ue.marked = "property", u(Ie ? we : fe, be)) : "number" == e || "string" == e ? u(Ie ? we : fe, be) : "[" == e ? u(S, G, k("]"), Ie ? we : fe, be) : "*" == t ? (Ue.marked = "keyword", u(be)) : Ie && "(" == e ? c(pe, be) : ";" == e || "," == e ? u(be) : "}" == e ? u() : "@" == t ? u(S, be) : void 0
      }

      function we(e, t) {
        if ("?" == t) return u(we);
        if (":" == e) return u(Y, se);
        if ("=" == t) return u(T);
        var i = Ue.state.lexical.prev;
        return c(i && "interface" == i.info ? pe : fe)
      }

      function _e(e, t) {
        return "*" == t ? (Ue.marked = "keyword", u($e, k(";"))) : "default" == t ? (Ue.marked = "keyword", u(S, k(";"))) : "{" == e ? u(W(ke, "}"), $e, k(";")) : c(x)
      }

      function ke(e, t) {
        return "as" == t ? (Ue.marked = "keyword", u(k("variable"))) : "variable" == e ? c(T, ke) : void 0
      }

      function xe(e) {
        return "string" == e ? u() : "(" == e ? c(S) : c(Ce, Se, $e)
      }

      function Ce(e, t) {
        return "{" == e ? B(Ce, "}") : ("variable" == e && i(t), "*" == t && (Ue.marked = "keyword"), u(Te))
      }

      function Se(e) {
        return "," == e ? u(Ce, Se) : void 0
      }

      function Te(e, t) {
        return "as" == t ? (Ue.marked = "keyword", u(Ce)) : void 0
      }

      function $e(e, t) {
        return "from" == t ? (Ue.marked = "keyword", u(S)) : void 0
      }

      function Oe(e) {
        return "]" == e ? u() : c(W(T, "]"))
      }

      function ze() {
        return c(w("form"), ne, k("{"), w("}"), W(je, "}"), _, _)
      }

      function je() {
        return c(ne, se)
      }

      function Me(e, t, i) {
        return t.tokenize == f && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (i || 0)))
      }
      var Le, Ae, Ee = e.indentUnit,
        Pe = d.statementIndent,
        qe = d.jsonld,
        De = d.json || qe,
        Ie = d.typescript,
        Ne = d.wordCharacters || /[\w$\xa1-\uffff]/,
        Re = function() {
          function e(e) {
            return {
              type: e,
              style: "keyword"
            }
          }
          var t = e("keyword a"),
            i = e("keyword b"),
            n = e("keyword c"),
            r = e("keyword d"),
            o = e("operator"),
            s = {
              type: "atom",
              style: "atom"
            };
          return {
            if: e("if"),
            while: t,
            with: t,
            else: i,
            do: i,
            try: i,
            finally: i,
            return: r,
            break: r,
            continue: r,
            new: e("new"),
            delete: n,
            void: n,
            throw: n,
            debugger: e("debugger"),
            var: e("var"),
            const: e("var"),
            let: e("var"),
            function: e("function"),
            catch: e("catch"),
            for: e("for"),
            switch: e("switch"),
            case: e("case"),
            default: e("default"),
            in : o,
            typeof: o,
            instanceof: o,
            true: s,
            false: s,
            null: s,
            undefined: s,
            NaN: s,
            Infinity: s,
            this: e("this"),
            class: e("class"),
            super: e("atom"),
            yield: n,
            export: e("export"),
            import: e("import"),
            extends: n,
            await: n
          }
        }(),
        Fe = /[+\-*&%=<>!?|~^@]/,
        He = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
        We = "([{}])",
        Be = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          "jsonld-keyword": !0
        },
        Ue = {
          state: null,
          column: null,
          marked: null,
          cc: null
        },
        Ge = new g("this", new g("arguments", null));
      return _.lex = b.lex = !0, {
        startState: function(e) {
          var t = {
            tokenize: f,
            lastType: "sof",
            cc: [],
            lexical: new o((e || 0) - Ee, 0, "block", !1),
            localVars: d.localVars,
            context: d.localVars && new m(null, null, !1),
            indented: e || 0
          };
          return d.globalVars && "object" == typeof d.globalVars && (t.globalVars = d.globalVars), t
        },
        token: function(e, t) {
          if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), n(e, t)), t.tokenize != p && e.eatSpace()) return null;
          var i = t.tokenize(e, t);
          return "comment" == Le ? i : (t.lastType = "operator" != Le || "++" != Ae && "--" != Ae ? Le : "incdec", function(e, t, i, n, r) {
            var o = e.cc;
            for (Ue.state = e, Ue.stream = r, Ue.marked = null, Ue.cc = o, Ue.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;)
              if ((o.length ? o.pop() : De ? S : x)(i, n)) {
                for (; o.length && o[o.length - 1].lex;) o.pop()();
                return Ue.marked ? Ue.marked : "variable" == i && l(e, n) ? "variable-2" : t
              }
          }(t, i, Le, Ae, e))
        },
        indent: function(e, t) {
          if (e.tokenize == p) return Ke.Pass;
          if (e.tokenize != f) return 0;
          var i, n = t && t.charAt(0),
            r = e.lexical;
          if (!/^\s*else\b/.test(t))
            for (var o = e.cc.length - 1; 0 <= o; --o) {
              var s = e.cc[o];
              if (s == _) r = r.prev;
              else if (s != le) break
            }
          for (;
            ("stat" == r.type || "form" == r.type) && ("}" == n || (i = e.cc[e.cc.length - 1]) && (i == j || i == M) && !/^[,\.=+\-*:?[\(]/.test(t));) r = r.prev;
          Pe && ")" == r.type && "stat" == r.prev.type && (r = r.prev);
          var a, l, c = r.type,
            u = n == c;
          return "vardef" == c ? r.indented + ("operator" == e.lastType || "," == e.lastType ? r.info.length + 1 : 0) : "form" == c && "{" == n ? r.indented : "form" == c ? r.indented + Ee : "stat" == c ? r.indented + (l = t, "operator" == (a = e).lastType || "," == a.lastType || Fe.test(l.charAt(0)) || /[,.]/.test(l.charAt(0)) ? Pe || Ee : 0) : "switch" != r.info || u || 0 == d.doubleIndentSwitch ? r.align ? r.column + (u ? 0 : 1) : r.indented + (u ? 0 : Ee) : r.indented + (/^(?:case|default)\b/.test(t) ? Ee : 2 * Ee)
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: De ? null : "/*",
        blockCommentEnd: De ? null : "*/",
        blockCommentContinue: De ? null : " * ",
        lineComment: De ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: De ? "json" : "javascript",
        jsonldMode: qe,
        jsonMode: De,
        expressionAllowed: Me,
        skipExpression: function(e) {
          var t = e.cc[e.cc.length - 1];
          (t == S || t == T) && e.cc.pop()
        }
      }
    }), Ke.registerHelper("wordChars", "javascript", /[\w$]/), Ke.defineMIME("text/javascript", "javascript"), Ke.defineMIME("text/ecmascript", "javascript"), Ke.defineMIME("application/javascript", "javascript"), Ke.defineMIME("application/x-javascript", "javascript"), Ke.defineMIME("application/ecmascript", "javascript"), Ke.defineMIME("application/json", {
      name: "javascript",
      json: !0
    }), Ke.defineMIME("application/x-json", {
      name: "javascript",
      json: !0
    }), Ke.defineMIME("application/ld+json", {
      name: "javascript",
      jsonld: !0
    }), Ke.defineMIME("text/typescript", {
      name: "javascript",
      typescript: !0
    }), Ke.defineMIME("application/typescript", {
      name: "javascript",
      typescript: !0
    })
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(r) {
    "use strict";
    r.defineMode("shell", function() {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) o[t[i]] = e
      }

      function a(r, o) {
        var s = "(" == r ? ")" : "{" == r ? "}" : r;
        return function(e, t) {
          for (var i, n = !1; null != (i = e.next());) {
            if (i === s && !n) {
              t.tokens.shift();
              break
            }
            if ("$" === i && !n && "'" !== r && e.peek() != s) {
              n = !0, e.backUp(1), t.tokens.unshift(u);
              break
            }
            if (!n && r !== s && i === r) return t.tokens.unshift(a(r, o)), c(e, t);
            if (!n && /['"]/.test(i) && !/['"]/.test(r)) {
              t.tokens.unshift(l(i, "string")), e.backUp(1);
              break
            }
            n = !n && "\\" === i
          }
          return o
        }
      }

      function l(i, n) {
        return function(e, t) {
          return t.tokens[0] = a(i, n), e.next(), c(e, t)
        }
      }

      function c(e, t) {
        return (t.tokens[0] || function(e, t) {
          if (e.eatSpace()) return null;
          var i = e.sol(),
            n = e.next();
          if ("\\" === n) return e.next(), null;
          if ("'" === n || '"' === n || "`" === n) return t.tokens.unshift(a(n, "`" === n ? "quote" : "string")), c(e, t);
          if ("#" === n) return i && e.eat("!") ? (e.skipToEnd(), "meta") : (e.skipToEnd(), "comment");
          if ("$" === n) return t.tokens.unshift(u), c(e, t);
          if ("+" === n || "=" === n) return "operator";
          if ("-" === n) return e.eat("-"), e.eatWhile(/\w/), "attribute";
          if (/\d/.test(n) && (e.eatWhile(/\d/), e.eol() || !/\w/.test(e.peek()))) return "number";
          e.eatWhile(/[\w-]/);
          var r = e.current();
          return "=" === e.peek() && /\w+/.test(r) ? "def" : o.hasOwnProperty(r) ? o[r] : null
        })(e, t)
      }
      var o = {},
        t = ["true", "false"],
        i = ["if", "then", "do", "else", "elif", "while", "until", "for", "in", "esac", "fi", "fin", "fil", "done", "exit", "set", "unset", "export", "function"],
        n = ["ab", "awk", "bash", "beep", "cat", "cc", "cd", "chown", "chmod", "chroot", "clear", "cp", "curl", "cut", "diff", "echo", "find", "gawk", "gcc", "get", "git", "grep", "hg", "kill", "killall", "ln", "ls", "make", "mkdir", "openssl", "mv", "nc", "nl", "node", "npm", "ping", "ps", "restart", "rm", "rmdir", "sed", "service", "sh", "shopt", "shred", "source", "sort", "sleep", "ssh", "start", "stop", "su", "sudo", "svn", "tee", "telnet", "top", "touch", "vi", "vim", "wall", "wc", "wget", "who", "write", "yes", "zsh"];
      r.registerHelper("hintWords", "shell", t.concat(i, n)), e("atom", t), e("keyword", i), e("builtin", n);
      var u = function(e, t) {
        1 < t.tokens.length && e.eat("$");
        var i = e.next();
        return /['"({]/.test(i) ? (t.tokens[0] = a(i, "(" == i ? "quote" : "{" == i ? "def" : "string"), c(e, t)) : (/\d/.test(i) || e.eatWhile(/\w/), t.tokens.shift(), "def")
      };
      return {
        startState: function() {
          return {
            tokens: []
          }
        },
        token: function(e, t) {
          return c(e, t)
        },
        closeBrackets: "()[]{}''\"\"``",
        lineComment: "#",
        fold: "brace"
      }
    }), r.defineMIME("text/x-sh", "shell"), r.defineMIME("application/x-sh", "shell")
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(x) {
    "use strict";
    var C = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0
        },
        contextGrabbers: {
          dd: {
            dd: !0,
            dt: !0
          },
          dt: {
            dd: !0,
            dt: !0
          },
          li: {
            li: !0
          },
          option: {
            option: !0,
            optgroup: !0
          },
          optgroup: {
            optgroup: !0
          },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0
          },
          rp: {
            rp: !0,
            rt: !0
          },
          rt: {
            rp: !0,
            rt: !0
          },
          tbody: {
            tbody: !0,
            tfoot: !0
          },
          td: {
            td: !0,
            th: !0
          },
          tfoot: {
            tbody: !0
          },
          th: {
            td: !0,
            th: !0
          },
          thead: {
            tbody: !0,
            tfoot: !0
          },
          tr: {
            tr: !0
          }
        },
        doNotIndent: {
          pre: !0
        },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0
      },
      S = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1
      };
    x.defineMode("xml", function(e, t) {
      function s(t, i) {
        function e(e) {
          return (i.tokenize = e)(t, i)
        }
        var n = t.next();
        return "<" == n ? t.eat("!") ? t.eat("[") ? t.match("CDATA[") ? e(r("atom", "]]>")) : null : t.match("--") ? e(r("comment", "--\x3e")) : t.match("DOCTYPE", !0, !0) ? (t.eatWhile(/[\w\._\-]/), e(function n(r) {
          return function(e, t) {
            for (var i; null != (i = e.next());) {
              if ("<" == i) return t.tokenize = n(r + 1), t.tokenize(e, t);
              if (">" == i) {
                if (1 != r) return t.tokenize = n(r - 1), t.tokenize(e, t);
                t.tokenize = s;
                break
              }
            }
            return "meta"
          }
        }(1))) : null : t.eat("?") ? (t.eatWhile(/[\w\._\-]/), i.tokenize = r("meta", "?>"), "meta") : (y = t.eat("/") ? "closeTag" : "openTag", i.tokenize = a, "tag bracket") : "&" != n ? (t.eatWhile(/[^&<]/), null) : (t.eat("#") ? t.eat("x") ? t.eatWhile(/[a-fA-F\d]/) && t.eat(";") : t.eatWhile(/[\d]/) && t.eat(";") : t.eatWhile(/[\w\.\-:]/) && t.eat(";")) ? "atom" : "error"
      }

      function a(e, t) {
        var i, n, r = e.next();
        if (">" == r || "/" == r && e.eat(">")) return t.tokenize = s, y = ">" == r ? "endTag" : "selfcloseTag", "tag bracket";
        if ("=" == r) return y = "equals", null;
        if ("<" != r) return /[\'\"]/.test(r) ? (t.tokenize = (i = r, (n = function(e, t) {
          for (; !e.eol();)
            if (e.next() == i) {
              t.tokenize = a;
              break
            }
          return "string"
        }).isInAttribute = !0, n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
        t.tokenize = s, t.state = u, t.tagName = t.tagStart = null;
        var o = t.tokenize(e, t);
        return o ? o + " tag error" : "tag error"
      }

      function r(i, n) {
        return function(e, t) {
          for (; !e.eol();) {
            if (e.match(n)) {
              t.tokenize = s;
              break
            }
            e.next()
          }
          return i
        }
      }

      function o(e, t, i) {
        this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = i, (_.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
      }

      function l(e) {
        e.context && (e.context = e.context.prev)
      }

      function c(e, t) {
        for (var i;;) {
          if (!e.context) return;
          if (i = e.context.tagName, !_.contextGrabbers.hasOwnProperty(i) || !_.contextGrabbers[i].hasOwnProperty(t)) return;
          l(e)
        }
      }

      function u(e, t, i) {
        return "openTag" == e ? (i.tagStart = t.column(), n) : "closeTag" == e ? d : u
      }

      function n(e, t, i) {
        return "word" == e ? (i.tagName = t.current(), b = "tag", h) : _.allowMissingTagName && "endTag" == e ? (b = "tag bracket", h(e, t, i)) : (b = "error", n)
      }

      function d(e, t, i) {
        if ("word" != e) return _.allowMissingTagName && "endTag" == e ? (b = "tag bracket", f(e, t, i)) : (b = "error", p);
        var n = t.current();
        return i.context && i.context.tagName != n && _.implicitlyClosed.hasOwnProperty(i.context.tagName) && l(i), i.context && i.context.tagName == n || !1 === _.matchClosing ? (b = "tag", f) : (b = "tag error", p)
      }

      function f(e, t, i) {
        return "endTag" != e ? (b = "error", f) : (l(i), u)
      }

      function p(e, t, i) {
        return b = "error", f(e, 0, i)
      }

      function h(e, t, i) {
        if ("word" == e) return b = "attribute", m;
        if ("endTag" != e && "selfcloseTag" != e) return b = "error", h;
        var n = i.tagName,
          r = i.tagStart;
        return i.tagName = i.tagStart = null, "selfcloseTag" == e || _.autoSelfClosers.hasOwnProperty(n) ? c(i, n) : (c(i, n), i.context = new o(i, n, r == i.indented)), u
      }

      function m(e, t, i) {
        return "equals" == e ? g : (_.allowMissing || (b = "error"), h(e, 0, i))
      }

      function g(e, t, i) {
        return "string" == e ? v : "word" == e && _.allowUnquoted ? (b = "string", h) : (b = "error", h(e, 0, i))
      }

      function v(e, t, i) {
        return "string" == e ? v : h(e, 0, i)
      }
      var y, b, w = e.indentUnit,
        _ = {},
        i = t.htmlMode ? C : S;
      for (var k in i) _[k] = i[k];
      for (var k in t) _[k] = t[k];
      return s.isInText = !0, {
        startState: function(e) {
          var t = {
            tokenize: s,
            state: u,
            indented: e || 0,
            tagName: null,
            tagStart: null,
            context: null
          };
          return null != e && (t.baseIndent = e), t
        },
        token: function(e, t) {
          if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
          y = null;
          var i = t.tokenize(e, t);
          return (i || y) && "comment" != i && (b = null, t.state = t.state(y || i, e, t), b && (i = "error" == b ? i + " error" : b)), i
        },
        indent: function(e, t, i) {
          var n = e.context;
          if (e.tokenize.isInAttribute) return e.tagStart == e.indented ? e.stringStartCol + 1 : e.indented + w;
          if (n && n.noIndent) return x.Pass;
          if (e.tokenize != a && e.tokenize != s) return i ? i.match(/^(\s*)/)[0].length : 0;
          if (e.tagName) return !1 !== _.multilineTagIndentPastTag ? e.tagStart + e.tagName.length + 2 : e.tagStart + w * (_.multilineTagIndentFactor || 1);
          if (_.alignCDATA && /<!\[CDATA\[/.test(t)) return 0;
          var r = t && /^<(\/)?([\w_:\.-]*)/.exec(t);
          if (r && r[1])
            for (; n;) {
              if (n.tagName == r[2]) {
                n = n.prev;
                break
              }
              if (!_.implicitlyClosed.hasOwnProperty(n.tagName)) break;
              n = n.prev
            } else if (r)
            for (; n;) {
              var o = _.contextGrabbers[n.tagName];
              if (!o || !o.hasOwnProperty(r[2])) break;
              n = n.prev
            }
          for (; n && n.prev && !n.startOfLine;) n = n.prev;
          return n ? n.indent + w : e.baseIndent || 0
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "\x3c!--",
        blockCommentEnd: "--\x3e",
        configuration: _.htmlMode ? "html" : "xml",
        helperType: _.htmlMode ? "html" : "xml",
        skipAttribute: function(e) {
          e.state == g && (e.state = h)
        }
      }
    }), x.defineMIME("text/xml", "xml"), x.defineMIME("application/xml", "xml"), x.mimeModes.hasOwnProperty("text/html") || x.defineMIME("text/html", {
      name: "xml",
      htmlMode: !0
    })
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(m) {
    "use strict";
    m.runMode = function(e, t, i, n) {
      var r = m.getMode(m.defaults, t),
        l = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 9);
      if (i.appendChild) {
        var c = n && n.tabSize || m.defaults.tabSize,
          u = i,
          d = 0;
        u.innerHTML = "", i = function(e, t) {
          if ("\n" == e) return u.appendChild(document.createTextNode(l ? "\r" : e)), void(d = 0);
          for (var i = "", n = 0;;) {
            var r = e.indexOf("\t", n);
            if (-1 == r) {
              i += e.slice(n), d += e.length - n;
              break
            }
            d += r - n, i += e.slice(n, r);
            var o = c - d % c;
            d += o;
            for (var s = 0; s < o; ++s) i += " ";
            n = r + 1
          }
          if (t) {
            var a = u.appendChild(document.createElement("span"));
            a.className = "cm-" + t.replace(/ +/g, " cm-"), a.appendChild(document.createTextNode(i))
          } else u.appendChild(document.createTextNode(i))
        }
      }
      for (var o = m.splitLines(e), s = n && n.state || m.startState(r), a = 0, f = o.length; a < f; ++a) {
        a && i("\n");
        var p = new m.StringStream(o[a]);
        for (!p.string && r.blankLine && r.blankLine(s); !p.eol();) {
          var h = r.token(p, s);
          i(p.current(), h, a, p.start, s), p.start = p.pos
        }
      }
    }
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(y) {
    "use strict";

    function e(e) {
      for (var t; null != (t = e.next());)
        if ("`" == t && !e.eat("`")) return "variable-2";
      return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? "variable-2" : null
    }

    function t(e) {
      return e.eat("@") && (e.match(/^session\./), e.match(/^local\./), e.match(/^global\./)), e.eat("'") ? (e.match(/^.*'/), "variable-2") : e.eat('"') ? (e.match(/^.*"/), "variable-2") : e.eat("`") ? (e.match(/^.*`/), "variable-2") : e.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null
    }

    function i(e) {
      return e.eat("N") ? "atom" : e.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null
    }

    function n(e) {
      for (var t = {}, i = e.split(" "), n = 0; n < i.length; ++n) t[i[n]] = !0;
      return t
    }
    y.defineMode("sql", function(r, e) {
      function s(e, t) {
        var r, i = e.next();
        if (p[i]) {
          var n = p[i](e, t);
          if (!1 !== n) return n
        }
        if (f.hexNumber && ("0" == i && e.match(/^[xX][0-9a-fA-F]+/) || ("x" == i || "X" == i) && e.match(/^'[0-9a-fA-F]+'/))) return "number";
        if (f.binaryNumber && (("b" == i || "B" == i) && e.match(/^'[01]+'/) || "0" == i && e.match(/^b[01]+/))) return "number";
        if (47 < i.charCodeAt(0) && i.charCodeAt(0) < 58) return e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/), f.decimallessFloat && e.match(/^\.(?!\.)/), "number";
        if ("?" == i && (e.eatSpace() || e.eol() || e.eat(";"))) return "variable-3";
        if ("'" == i || '"' == i && f.doubleQuote) return t.tokenize = (r = i, function(e, t) {
          for (var i, n = !1; null != (i = e.next());) {
            if (i == r && !n) {
              t.tokenize = s;
              break
            }
            n = m && !n && "\\" == i
          }
          return "string"
        }), t.tokenize(e, t);
        if ((f.nCharCast && ("n" == i || "N" == i) || f.charsetCast && "_" == i && e.match(/[a-z][a-z0-9]*/i)) && ("'" == e.peek() || '"' == e.peek())) return "keyword";
        if (f.commentSlashSlash && "/" == i && e.eat("/")) return e.skipToEnd(), "comment";
        if (f.commentHash && "#" == i || "-" == i && e.eat("-") && (!f.commentSpaceRequired || e.eat(" "))) return e.skipToEnd(), "comment";
        if ("/" == i && e.eat("*")) return t.tokenize = function n(r) {
          return function(e, t) {
            var i = e.match(/^.*?(\/\*|\*\/)/);
            return i ? "/*" == i[1] ? t.tokenize = n(r + 1) : t.tokenize = 1 < r ? n(r - 1) : s : e.skipToEnd(), "comment"
          }
        }(1), t.tokenize(e, t);
        if ("." == i) return f.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number" : e.match(/^\.+/) ? null : f.ODBCdotTable && e.match(/^[\w\d_]+/) ? "variable-2" : void 0;
        if (d.test(i)) return e.eatWhile(d), "operator";
        if (g.test(i)) return "bracket";
        if (v.test(i)) return e.eatWhile(v), "punctuation";
        if ("{" == i && (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) return "number";
        e.eatWhile(/^[_\w\d]/);
        var o = e.current().toLowerCase();
        return h.hasOwnProperty(o) && (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/)) ? "number" : l.hasOwnProperty(o) ? "atom" : c.hasOwnProperty(o) ? "builtin" : u.hasOwnProperty(o) ? "keyword" : a.hasOwnProperty(o) ? "string-2" : null
      }

      function o(e, t, i) {
        t.context = {
          prev: t.context,
          indent: e.indentation(),
          col: e.column(),
          type: i
        }
      }
      var a = e.client || {},
        l = e.atoms || {
          false: !0,
          true: !0,
          null: !0
        },
        c = e.builtin || n(w),
        u = e.keywords || n(b),
        d = e.operatorChars || /^[*+\-%<>!=&|~^\/]/,
        f = e.support || {},
        p = e.hooks || {},
        h = e.dateSQL || {
          date: !0,
          time: !0,
          timestamp: !0
        },
        m = !1 !== e.backslashStringEscapes,
        g = e.brackets || /^[\{}\(\)\[\]]/,
        v = e.punctuation || /^[;.,:]/;
      return {
        startState: function() {
          return {
            tokenize: s,
            context: null
          }
        },
        token: function(e, t) {
          if (e.sol() && t.context && null == t.context.align && (t.context.align = !1), t.tokenize == s && e.eatSpace()) return null;
          var i = t.tokenize(e, t);
          if ("comment" == i) return i;
          t.context && null == t.context.align && (t.context.align = !0);
          var n, r = e.current();
          return "(" == r ? o(e, t, ")") : "[" == r ? o(e, t, "]") : t.context && t.context.type == r && ((n = t).indent = n.context.indent, n.context = n.context.prev), i
        },
        indent: function(e, t) {
          var i = e.context;
          if (!i) return y.Pass;
          var n = t.charAt(0) == i.type;
          return i.align ? i.col + (n ? 0 : 1) : i.indent + (n ? 0 : r.indentUnit)
        },
        blockCommentStart: "/*",
        blockCommentEnd: "*/",
        lineComment: f.commentSlashSlash ? "//" : f.commentHash ? "#" : "--",
        closeBrackets: "()[]{}''\"\"``"
      }
    });
    var b = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ",
      w = "bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
    y.defineMIME("text/x-sql", {
      name: "sql",
      keywords: n(b + "begin"),
      builtin: n(w),
      atoms: n("false true null unknown"),
      dateSQL: n("date time timestamp"),
      support: n("ODBCdotTable doubleQuote binaryNumber hexNumber")
    }), y.defineMIME("text/x-mssql", {
      name: "sql",
      client: n("$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id"),
      keywords: n(b + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with"),
      builtin: n("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
      atoms: n("is not null like and or in left right between inner outer join all any some cross unpivot pivot exists"),
      operatorChars: /^[*+\-%<>!=^\&|\/]/,
      brackets: /^[\{}\(\)]/,
      punctuation: /^[;.,:\/]/,
      backslashStringEscapes: !1,
      dateSQL: n("date datetimeoffset datetime2 smalldatetime datetime time"),
      hooks: {
        "@": t
      }
    }), y.defineMIME("text/x-mysql", {
      name: "sql",
      client: n("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
      keywords: n(b + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
      builtin: n("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
      atoms: n("false true null unknown"),
      operatorChars: /^[*+\-%<>!=&|^]/,
      dateSQL: n("date time timestamp"),
      support: n("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
      hooks: {
        "@": t,
        "`": e,
        "\\": i
      }
    }), y.defineMIME("text/x-mariadb", {
      name: "sql",
      client: n("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
      keywords: n(b + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
      builtin: n("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
      atoms: n("false true null unknown"),
      operatorChars: /^[*+\-%<>!=&|^]/,
      dateSQL: n("date time timestamp"),
      support: n("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
      hooks: {
        "@": t,
        "`": e,
        "\\": i
      }
    }), y.defineMIME("text/x-sqlite", {
      name: "sql",
      client: n("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),
      keywords: n(b + "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),
      builtin: n("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),
      atoms: n("null current_date current_time current_timestamp"),
      operatorChars: /^[*+\-%<>!=&|\/~]/,
      dateSQL: n("date time timestamp datetime"),
      support: n("decimallessFloat zerolessFloat"),
      identifierQuote: '"',
      hooks: {
        "@": t,
        ":": t,
        "?": t,
        $: t,
        '"': function(e) {
          for (var t; null != (t = e.next());)
            if ('"' == t && !e.eat('"')) return "variable-2";
          return e.backUp(e.current().length - 1), e.eatWhile(/\w/) ? "variable-2" : null
        },
        "`": e
      }
    }), y.defineMIME("text/x-cassandra", {
      name: "sql",
      client: {},
      keywords: n("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
      builtin: n("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
      atoms: n("false true infinity NaN"),
      operatorChars: /^[<>=]/,
      dateSQL: {},
      support: n("commentSlashSlash decimallessFloat"),
      hooks: {}
    }), y.defineMIME("text/x-plsql", {
      name: "sql",
      client: n("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
      keywords: n("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
      builtin: n("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
      operatorChars: /^[*\/+\-%<>!=~]/,
      dateSQL: n("date time timestamp"),
      support: n("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
    }), y.defineMIME("text/x-hive", {
      name: "sql",
      keywords: n("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year"),
      builtin: n("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar"),
      atoms: n("false true null unknown"),
      operatorChars: /^[*+\-%<>!=]/,
      dateSQL: n("date timestamp"),
      support: n("ODBCdotTable doubleQuote binaryNumber hexNumber")
    }), y.defineMIME("text/x-pgsql", {
      name: "sql",
      client: n("source"),
      keywords: n(b + "a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone"),
      builtin: n("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
      atoms: n("false true null unknown"),
      operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
      dateSQL: n("date time timestamp"),
      support: n("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
    }), y.defineMIME("text/x-gql", {
      name: "sql",
      keywords: n("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
      atoms: n("false true"),
      builtin: n("blob datetime first key __key__ string integer double boolean null"),
      operatorChars: /^[*+\-%<>!=]/
    }), y.defineMIME("text/x-gpsql", {
      name: "sql",
      client: n("source"),
      keywords: n("abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone"),
      builtin: n("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
      atoms: n("false true null unknown"),
      operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
      dateSQL: n("date time timestamp"),
      support: n("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
    }), y.defineMIME("text/x-sparksql", {
      name: "sql",
      keywords: n("add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with"),
      builtin: n("tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat"),
      atoms: n("false true null"),
      operatorChars: /^[*\/+\-%<>!=~&|^]/,
      dateSQL: n("date time timestamp"),
      support: n("ODBCdotTable doubleQuote zerolessFloat")
    }), y.defineMIME("text/x-esper", {
      name: "sql",
      client: n("source"),
      keywords: n("alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window"),
      builtin: {},
      atoms: n("false true null"),
      operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
      dateSQL: n("time"),
      support: n("decimallessFloat zerolessFloat binaryNumber hexNumber")
    })
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(p) {
    "use strict";
    p.defineMode("go", function(e) {
      function s(e, t) {
        var o, i = e.next();
        if ('"' == i || "'" == i || "`" == i) return t.tokenize = (o = i, function(e, t) {
          for (var i, n = !1, r = !1; null != (i = e.next());) {
            if (i == o && !n) {
              r = !0;
              break
            }
            n = !n && "`" != o && "\\" == i
          }
          return (r || !n && "`" != o) && (t.tokenize = s), "string"
        }), t.tokenize(e, t);
        if (/[\d\.]/.test(i)) return "." == i ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/) : "0" == i ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/) : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/), "number";
        if (/[\[\]{}\(\),;\:\.]/.test(i)) return l = i, null;
        if ("/" == i) {
          if (e.eat("*")) return (t.tokenize = r)(e, t);
          if (e.eat("/")) return e.skipToEnd(), "comment"
        }
        if (f.test(i)) return e.eatWhile(f), "operator";
        e.eatWhile(/[\w\$_\xa1-\uffff]/);
        var n = e.current();
        return u.propertyIsEnumerable(n) ? (("case" == n || "default" == n) && (l = "case"), "keyword") : d.propertyIsEnumerable(n) ? "atom" : "variable"
      }

      function r(e, t) {
        for (var i, n = !1; i = e.next();) {
          if ("/" == i && n) {
            t.tokenize = s;
            break
          }
          n = "*" == i
        }
        return "comment"
      }

      function n(e, t, i, n, r) {
        this.indented = e, this.column = t, this.type = i, this.align = n, this.prev = r
      }

      function o(e, t, i) {
        return e.context = new n(e.indented, t, i, null, e.context)
      }

      function a(e) {
        if (e.context.prev) {
          var t = e.context.type;
          return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented), e.context = e.context.prev
        }
      }
      var l, c = e.indentUnit,
        u = {
          break: !0,
          case: !0,
          chan: !0,
          const: !0,
          continue: !0,
          default: !0,
          defer: !0,
          else: !0,
          fallthrough: !0,
          for: !0,
          func: !0,
          go: !0,
          goto: !0,
          if: !0,
          import: !0,
          interface: !0,
          map: !0,
          package: !0,
          range: !0,
          return: !0,
          select: !0,
          struct: !0,
          switch: !0,
          type: !0,
          var: !0,
          bool: !0,
          byte: !0,
          complex64: !0,
          complex128: !0,
          float32: !0,
          float64: !0,
          int8: !0,
          int16: !0,
          int32: !0,
          int64: !0,
          string: !0,
          uint8: !0,
          uint16: !0,
          uint32: !0,
          uint64: !0,
          int: !0,
          uint: !0,
          uintptr: !0,
          error: !0,
          rune: !0
        },
        d = {
          true: !0,
          false: !0,
          iota: !0,
          nil: !0,
          append: !0,
          cap: !0,
          close: !0,
          complex: !0,
          copy: !0,
          delete: !0,
          imag: !0,
          len: !0,
          make: !0,
          new: !0,
          panic: !0,
          print: !0,
          println: !0,
          real: !0,
          recover: !0
        },
        f = /[+\-*&^%:=<>!|\/]/;
      return {
        startState: function(e) {
          return {
            tokenize: null,
            context: new n((e || 0) - c, 0, "top", !1),
            indented: 0,
            startOfLine: !0
          }
        },
        token: function(e, t) {
          var i = t.context;
          if (e.sol() && (null == i.align && (i.align = !1), t.indented = e.indentation(), t.startOfLine = !0, "case" == i.type && (i.type = "}")), e.eatSpace()) return null;
          l = null;
          var n = (t.tokenize || s)(e, t);
          return "comment" == n || (null == i.align && (i.align = !0), "{" == l ? o(t, e.column(), "}") : "[" == l ? o(t, e.column(), "]") : "(" == l ? o(t, e.column(), ")") : "case" == l ? i.type = "case" : "}" == l && "}" == i.type ? a(t) : l == i.type && a(t), t.startOfLine = !1), n
        },
        indent: function(e, t) {
          if (e.tokenize != s && null != e.tokenize) return p.Pass;
          var i = e.context,
            n = t && t.charAt(0);
          if ("case" == i.type && /^(?:case|default)\b/.test(t)) return e.context.type = "}", i.indented;
          var r = n == i.type;
          return i.align ? i.column + (r ? 0 : 1) : i.indented + (r ? 0 : c)
        },
        electricChars: "{}):",
        closeBrackets: "()[]{}''\"\"``",
        fold: "brace",
        blockCommentStart: "/*",
        blockCommentEnd: "*/",
        lineComment: "//"
      }
    }), p.defineMIME("text/x-go", "go")
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(b) {
    "use strict";

    function w(e) {
      return new RegExp("^((" + e.join(")|(") + "))\\b")
    }

    function _(e) {
      return e.scopes[e.scopes.length - 1]
    }
    var k = w(["and", "or", "not", "is"]),
      x = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"],
      C = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
    b.registerHelper("hintWords", "python", x.concat(C)), b.defineMode("python", function(t, l) {
      function r(e, t) {
        var i = e.sol() && "\\" != t.lastToken;
        if (i && (t.indent = e.indentation()), i && "py" == _(t).type) {
          var n = _(t).offset;
          if (e.eatSpace()) {
            var r = e.indentation();
            return n < r ? u(t) : r < n && s(e, t) && "#" != e.peek() && (t.errorToken = !0), null
          }
          var o = c(e, t);
          return 0 < n && s(e, t) && (o += " " + d), o
        }
        return c(e, t)
      }

      function c(e, t) {
        if (e.eatSpace()) return null;
        if (e.match(/^#.*/)) return "comment";
        if (e.match(/^[0-9\.]/, !1)) {
          var i = !1;
          if (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i = !0), e.match(/^[\d_]+\.\d*/) && (i = !0), e.match(/^\.\d+/) && (i = !0), i) return e.eat(/J/i), "number";
          var n = !1;
          if (e.match(/^0x[0-9a-f_]+/i) && (n = !0), e.match(/^0b[01_]+/i) && (n = !0), e.match(/^0o[0-7_]+/i) && (n = !0), e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (e.eat(/J/i), n = !0), e.match(/^0(?![\dx])/i) && (n = !0), n) return e.eat(/L/i), "number"
        }
        if (e.match(g)) {
          var r = -1 !== e.current().toLowerCase().indexOf("f");
          return t.tokenize = r ? function(i, n) {
            function r(n) {
              return function(e, t) {
                var i = c(e, t);
                return "punctuation" == i && ("{" == e.current() ? t.tokenize = r(n + 1) : "}" == e.current() && (t.tokenize = 1 < n ? r(n - 1) : o)), i
              }
            }

            function o(e, t) {
              for (; !e.eol();)
                if (e.eatWhile(/[^'"\{\}\\]/), e.eat("\\")) {
                  if (e.next(), s && e.eol()) return a
                } else {
                  if (e.match(i)) return t.tokenize = n, a;
                  if (e.match("{{")) return a;
                  if (e.match("{", !1)) return t.tokenize = r(0), e.current() ? a : t.tokenize(e, t);
                  if (e.match("}}")) return a;
                  if (e.match("}")) return d;
                  e.eat(/['"]/)
                }
              if (s) {
                if (l.singleLineStringErrors) return d;
                t.tokenize = n
              }
              return a
            }
            for (; 0 <= "rubf".indexOf(i.charAt(0).toLowerCase());) i = i.substr(1);
            var s = 1 == i.length,
              a = "string";
            return o.isString = !0, o
          }(e.current(), t.tokenize) : function(i, n) {
            function e(e, t) {
              for (; !e.eol();)
                if (e.eatWhile(/[^'"\\]/), e.eat("\\")) {
                  if (e.next(), r && e.eol()) return o
                } else {
                  if (e.match(i)) return t.tokenize = n, o;
                  e.eat(/['"]/)
                }
              if (r) {
                if (l.singleLineStringErrors) return d;
                t.tokenize = n
              }
              return o
            }
            for (; 0 <= "rubf".indexOf(i.charAt(0).toLowerCase());) i = i.substr(1);
            var r = 1 == i.length,
              o = "string";
            return e.isString = !0, e
          }(e.current(), t.tokenize), t.tokenize(e, t)
        }
        for (var o = 0; o < f.length; o++)
          if (e.match(f[o])) return "operator";
        return e.match(a) ? "punctuation" : "." == t.lastToken && e.match(m) ? "property" : e.match(v) || e.match(k) ? "keyword" : e.match(y) ? "builtin" : e.match(/^(self|cls)\b/) ? "variable-2" : e.match(m) ? "def" == t.lastToken || "class" == t.lastToken ? "def" : "variable" : (e.next(), d)
      }

      function u(e) {
        for (;
          "py" != _(e).type;) e.scopes.pop();
        e.scopes.push({
          offset: _(e).offset + t.indentUnit,
          type: "py",
          align: null
        })
      }

      function s(e, t) {
        for (var i = e.indentation(); 1 < t.scopes.length && _(t).offset > i;) {
          if ("py" != _(t).type) return !0;
          t.scopes.pop()
        }
        return _(t).offset != i
      }

      function o(e, t) {
        e.sol() && (t.beginningOfLine = !0);
        var i, n, r, o, s = t.tokenize(e, t),
          a = e.current();
        if (t.beginningOfLine && "@" == a) return e.match(m, !1) ? "meta" : h ? "operator" : d;
        if (/\S/.test(a) && (t.beginningOfLine = !1), "variable" != s && "builtin" != s || "meta" != t.lastToken || (s = "meta"), ("pass" == a || "return" == a) && (t.dedent += 1), "lambda" == a && (t.lambda = !0), ":" != a || t.lambda || "py" != _(t).type || u(t), 1 == a.length && !/string|comment/.test(s)) {
          var l = "[({".indexOf(a);
          if (-1 != l && (i = e, n = t, r = "])}".slice(l, l + 1), o = i.match(/^([\s\[\{\(]|#.*)*$/, !1) ? null : i.column() + 1, n.scopes.push({
            offset: n.indent + p,
            type: r,
            align: o
          })), -1 != (l = "])}".indexOf(a))) {
            if (_(t).type != a) return d;
            t.indent = t.scopes.pop().offset - p
          }
        }
        return 0 < t.dedent && e.eol() && "py" == _(t).type && (1 < t.scopes.length && t.scopes.pop(), t.dedent -= 1), s
      }
      for (var d = "error", a = l.delimiters || l.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, f = [l.singleOperators, l.doubleOperators, l.doubleDelimiters, l.tripleDelimiters, l.operators || /^([-+*\/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/], e = 0; e < f.length; e++) f[e] || f.splice(e--, 1);
      var p = l.hangingIndent || t.indentUnit,
        i = x,
        n = C;
      null != l.extra_keywords && (i = i.concat(l.extra_keywords)), null != l.extra_builtins && (n = n.concat(l.extra_builtins));
      var h = !(l.version && Number(l.version) < 3);
      if (h) {
        var m = l.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        i = i.concat(["nonlocal", "False", "True", "None", "async", "await"]), n = n.concat(["ascii", "bytes", "exec", "print"]);
        var g = new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))", "i")
      } else {
        m = l.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        i = i.concat(["exec", "print"]), n = n.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"]);
        g = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i")
      }
      var v = w(i),
        y = w(n);
      return {
        startState: function(e) {
          return {
            tokenize: r,
            scopes: [{
              offset: e || 0,
              type: "py",
              align: null
            }],
            indent: e || 0,
            lastToken: null,
            lambda: !1,
            dedent: 0
          }
        },
        token: function(e, t) {
          var i = t.errorToken;
          i && (t.errorToken = !1);
          var n = o(e, t);
          return n && "comment" != n && (t.lastToken = "keyword" == n || "punctuation" == n ? e.current() : n), "punctuation" == n && (n = null), e.eol() && t.lambda && (t.lambda = !1), i ? n + " " + d : n
        },
        indent: function(e, t) {
          if (e.tokenize != r) return e.tokenize.isString ? b.Pass : 0;
          var i = _(e),
            n = i.type == t.charAt(0);
          return null != i.align ? i.align - (n ? 1 : 0) : i.offset - (n ? p : 0)
        },
        electricInput: /^\s*[\}\]\)]$/,
        closeBrackets: {
          triples: "'\""
        },
        lineComment: "#",
        fold: "indent"
      }
    }), b.defineMIME("text/x-python", "python");
    var e;
    b.defineMIME("text/x-cython", {
      name: "python",
      extra_keywords: (e = "by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE", e.split(" "))
    })
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../clike/clike")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../clike/clike"], e) : e(CodeMirror)
  }(function(c) {
    "use strict";

    function e(e) {
      for (var t = {}, i = e.split(" "), n = 0; n < i.length; ++n) t[i[n]] = !0;
      return t
    }

    function a(r, o, s) {
      return 0 == r.length ? l(o) : function(e, t) {
        for (var i = r[0], n = 0; n < i.length; n++)
          if (e.match(i[n][0])) return t.tokenize = a(r.slice(1), o), i[n][1];
        return t.tokenize = l(o, s), "string"
      }
    }

    function l(i, n) {
      return function(e, t) {
        return function(e, t, i, n) {
          if (!1 !== n && e.match("${", !1) || e.match("{$", !1)) return t.tokenize = null, "string";
          if (!1 !== n && e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/)) return e.match("[", !1) && (t.tokenize = a([
            [
              ["[", null]
            ],
            [
              [/\d[\w\.]*/, "number"],
              [/\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2"],
              [/[\w\$]+/, "variable"]
            ],
            [
              ["]", null]
            ]
          ], i, n)), e.match(/\-\>\w/, !1) && (t.tokenize = a([
            [
              ["->", null]
            ],
            [
              [/[\w]+/, "variable"]
            ]
          ], i, n)), "variable-2";
          for (var r = !1; !e.eol() && (r || !1 === n || !e.match("{$", !1) && !e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1));) {
            if (!r && e.match(i)) {
              t.tokenize = null, t.tokStack.pop(), t.tokStack.pop();
              break
            }
            r = "\\" == e.next() && !r
          }
          return "string"
        }(e, t, i, n)
      }
    }
    var t = "abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",
      i = "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",
      n = "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";
    c.registerHelper("hintWords", "php", [t, i, n].join(" ").split(" ")), c.registerHelper("wordChars", "php", /[\w$]/);
    var r = {
      name: "clike",
      helperType: "php",
      keywords: e(t),
      blockKeywords: e("catch do else elseif for foreach if switch try while finally"),
      defKeywords: e("class function interface namespace trait"),
      atoms: e(i),
      builtin: e(n),
      multiLineStrings: !0,
      hooks: {
        $: function(e) {
          return e.eatWhile(/[\w\$_]/), "variable-2"
        },
        "<": function(e, t) {
          var i;
          if (i = e.match(/<<\s*/)) {
            var n = e.eat(/['"]/);
            e.eatWhile(/[\w\.]/);
            var r = e.current().slice(i[0].length + (n ? 2 : 1));
            if (n && e.eat(n), r) return (t.tokStack || (t.tokStack = [])).push(r, 0), t.tokenize = l(r, "'" != n), "string"
          }
          return !1
        },
        "#": function(e) {
          for (; !e.eol() && !e.match("?>", !1);) e.next();
          return "comment"
        },
        "/": function(e) {
          if (e.eat("/")) {
            for (; !e.eol() && !e.match("?>", !1);) e.next();
            return "comment"
          }
          return !1
        },
        '"': function(e, t) {
          return (t.tokStack || (t.tokStack = [])).push('"', 0), t.tokenize = l('"'), "string"
        },
        "{": function(e, t) {
          return t.tokStack && t.tokStack.length && t.tokStack[t.tokStack.length - 1]++, !1
        },
        "}": function(e, t) {
          return t.tokStack && 0 < t.tokStack.length && !--t.tokStack[t.tokStack.length - 1] && (t.tokenize = l(t.tokStack[t.tokStack.length - 2])), !1
        }
      }
    };
    c.defineMode("php", function(e, i) {
      var a = c.getMode(e, i && i.htmlMode || "text/html"),
        l = c.getMode(e, r);
      return {
        startState: function() {
          var e = c.startState(a),
            t = i.startOpen ? c.startState(l) : null;
          return {
            html: e,
            php: t,
            curMode: i.startOpen ? l : a,
            curState: i.startOpen ? t : e,
            pending: null
          }
        },
        copyState: function(e) {
          var t, i = e.html,
            n = c.copyState(a, i),
            r = e.php,
            o = r && c.copyState(l, r);
          return t = e.curMode == a ? n : o, {
            html: n,
            php: o,
            curMode: e.curMode,
            curState: t,
            pending: e.pending
          }
        },
        token: function(e, t) {
          var i = t.curMode == l;
          if (e.sol() && t.pending && '"' != t.pending && "'" != t.pending && (t.pending = null), i) return i && null == t.php.tokenize && e.match("?>") ? (t.curMode = a, t.curState = t.html, t.php.context.prev || (t.php = null), "meta") : l.token(e, t.curState);
          if (e.match(/^<\?\w*/)) return t.curMode = l, t.php || (t.php = c.startState(l, a.indent(t.html, "", ""))), t.curState = t.php, "meta";
          if ('"' == t.pending || "'" == t.pending) {
            for (; !e.eol() && e.next() != t.pending;);
            var n = "string"
          } else n = t.pending && e.pos < t.pending.end ? (e.pos = t.pending.end, t.pending.style) : a.token(e, t.curState);
          t.pending && (t.pending = null);
          var r, o = e.current(),
            s = o.search(/<\?/);
          return -1 != s && ("string" == n && (r = o.match(/[\'\"]$/)) && !/\?>/.test(o) ? t.pending = r[0] : t.pending = {
            end: e.pos,
            style: n
          }, e.backUp(o.length - s)), n
        },
        indent: function(e, t, i) {
          return e.curMode != l && /^\s*<\//.test(t) || e.curMode == l && /^\?>/.test(t) ? a.indent(e.html, t, i) : e.curMode.indent(e.curState, t, i)
        },
        blockCommentStart: "/*",
        blockCommentEnd: "*/",
        lineComment: "//",
        innerMode: function(e) {
          return {
            state: e.curState,
            mode: e.curMode
          }
        }
      }
    }, "htmlmixed", "clike"), c.defineMIME("application/x-httpd-php", "php"), c.defineMIME("application/x-httpd-php-open", {
      name: "php",
      startOpen: !0
    }), c.defineMIME("text/x-php", r)
  }),
  function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
  }(function(y) {
    "use strict";
    y.defineMode("ruby", function(o) {
      function e(e) {
        for (var t = {}, i = 0, n = e.length; i < n; ++i) t[e[i]] = !0;
        return t
      }

      function u(e, t, i) {
        return i.tokenize.push(e), e(t, i)
      }

      function s(e, t) {
        if (e.sol() && e.match("=begin") && e.eol()) return t.tokenize.push(f), "comment";
        if (e.eatSpace()) return null;
        var i, n, r, o = e.next();
        if ("`" == o || "'" == o || '"' == o) return u(d(o, "string", '"' == o || "`" == o), e, t);
        if ("/" == o) return function(e) {
          for (var t, i = e.pos, n = 0, r = !1, o = !1; null != (t = e.next());)
            if (o) o = !1;
            else {
              if (-1 < "[{(".indexOf(t)) n++;
              else if (-1 < "]})".indexOf(t)) {
                if (--n < 0) break
              } else if ("/" == t && 0 == n) {
                r = !0;
                break
              }
              o = "\\" == t
            }
          return e.backUp(e.pos - i), r
        }(e) ? u(d(o, "string-2", !0), e, t) : "operator";
        if ("%" == o) {
          var s = "string",
            a = !0;
          e.eat("s") ? s = "atom" : e.eat(/[WQ]/) ? s = "string" : e.eat(/[r]/) ? s = "string-2" : e.eat(/[wxq]/) && (a = !(s = "string"));
          var l = e.eat(/[^\w\s=]/);
          return l ? (g.propertyIsEnumerable(l) && (l = g[l]), u(d(l, s, a, !0), e, t)) : "operator"
        }
        if ("#" == o) return e.skipToEnd(), "comment";
        if ("<" == o && (i = e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) return u((n = i[2], r = i[1], function(e, t) {
          return r && e.eatSpace(), e.match(n) ? t.tokenize.pop() : e.skipToEnd(), "string"
        }), e, t);
        if ("0" == o) return e.eat("x") ? e.eatWhile(/[\da-fA-F]/) : e.eat("b") ? e.eatWhile(/[01]/) : e.eatWhile(/[0-7]/), "number";
        if (/\d/.test(o)) return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
        if ("?" == o) {
          for (; e.match(/^\\[CM]-/););
          return e.eat("\\") ? e.eatWhile(/\w/) : e.next(), "string"
        }
        if (":" == o) return e.eat("'") ? u(d("'", "atom", !1), e, t) : e.eat('"') ? u(d('"', "atom", !0), e, t) : e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), "atom") : e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom" : e.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e.eatWhile(/[\w$\xa1-\uffff]/), e.eat(/[\?\!\=]/), "atom") : "operator";
        if ("@" == o && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) return e.eat("@"), e.eatWhile(/[\w\xa1-\uffff]/), "variable-2";
        if ("$" == o) return e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) : e.eat(/\d/) ? e.eat(/\d/) : e.next(), "variable-3";
        if (/[a-zA-Z_\xa1-\uffff]/.test(o)) return e.eatWhile(/[\w\xa1-\uffff]/), e.eat(/[\?\!]/), e.eat(":") ? "atom" : "ident";
        if ("|" != o || !t.varList && "{" != t.lastTok && "do" != t.lastTok) {
          if (/[\(\)\[\]{}\\;]/.test(o)) return p = o, null;
          if ("-" == o && e.eat(">")) return "arrow";
          if (/[=+\-\/*:\.^%<>~|]/.test(o)) {
            var c = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
            return "." != o || c || (p = "."), "operator"
          }
          return null
        }
        return p = "|", null
      }

      function l(i) {
        return i || (i = 1),
          function(e, t) {
            if ("}" == e.peek()) {
              if (1 == i) return t.tokenize.pop(), t.tokenize[t.tokenize.length - 1](e, t);
              t.tokenize[t.tokenize.length - 1] = l(i - 1)
            } else "{" == e.peek() && (t.tokenize[t.tokenize.length - 1] = l(i + 1));
            return s(e, t)
          }
      }

      function c() {
        var i = !1;
        return function(e, t) {
          return i ? (t.tokenize.pop(), t.tokenize[t.tokenize.length - 1](e, t)) : (i = !0, s(e, t))
        }
      }

      function d(r, o, s, a) {
        return function(e, t) {
          var i, n = !1;
          for ("read-quoted-paused" === t.context.type && (t.context = t.context.prev, e.eat("}")); null != (i = e.next());) {
            if (i == r && (a || !n)) {
              t.tokenize.pop();
              break
            }
            if (s && "#" == i && !n) {
              if (e.eat("{")) {
                "}" == r && (t.context = {
                  prev: t.context,
                  type: "read-quoted-paused"
                }), t.tokenize.push(l());
                break
              }
              if (/[@\$]/.test(e.peek())) {
                t.tokenize.push(c());
                break
              }
            }
            n = !n && "\\" == i
          }
          return o
        }
      }

      function f(e, t) {
        return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(), e.skipToEnd(), "comment"
      }
      var p, a = e(["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__"]),
        h = e(["def", "class", "case", "for", "while", "until", "module", "then", "catch", "loop", "proc", "begin"]),
        m = e(["end", "until"]),
        g = {
          "[": "]",
          "{": "}",
          "(": ")"
        },
        v = {
          "]": "[",
          "}": "{",
          ")": "("
        };
      return {
        startState: function() {
          return {
            tokenize: [s],
            indented: 0,
            context: {
              type: "top",
              indented: -o.indentUnit
            },
            continuedLine: !1,
            lastTok: null,
            varList: !1
          }
        },
        token: function(e, t) {
          p = null, e.sol() && (t.indented = e.indentation());
          var i, n = t.tokenize[t.tokenize.length - 1](e, t),
            r = p;
          if ("ident" == n) {
            var o = e.current();
            "keyword" == (n = "." == t.lastTok ? "property" : a.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(o) ? "tag" : "def" == t.lastTok || "class" == t.lastTok || t.varList ? "def" : "variable") && (r = o, h.propertyIsEnumerable(o) ? i = "indent" : m.propertyIsEnumerable(o) ? i = "dedent" : "if" != o && "unless" != o || e.column() != e.indentation() ? "do" == o && t.context.indented < t.indented && (i = "indent") : i = "indent")
          }
          return (p || n && "comment" != n) && (t.lastTok = r), "|" == p && (t.varList = !t.varList), "indent" == i || /[\(\[\{]/.test(p) ? t.context = {
            prev: t.context,
            type: p || n,
            indented: t.indented
          } : ("dedent" == i || /[\)\]\}]/.test(p)) && t.context.prev && (t.context = t.context.prev), e.eol() && (t.continuedLine = "\\" == p || "operator" == n), n
        },
        indent: function(e, t) {
          if (e.tokenize[e.tokenize.length - 1] != s) return y.Pass;
          var i = t && t.charAt(0),
            n = e.context,
            r = n.type == v[i] || "keyword" == n.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(t);
          return n.indented + (r ? 0 : o.indentUnit) + (e.continuedLine ? o.indentUnit : 0)
        },
        electricInput: /^\s*(?:end|rescue|elsif|else|\})$/,
        lineComment: "#",
        fold: "indent"
      }
    }), y.defineMIME("text/x-ruby", "ruby")
  }),
  function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
      var i = window.Cookies,
        n = window.Cookies = e();
      n.noConflict = function() {
        return window.Cookies = i, n
      }
    }
  }(function() {
    function p() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) t[n] = i[n]
      }
      return t
    }
    return function e(d) {
      function f(e, t, i) {
        var n;
        if ("undefined" != typeof document) {
          if (1 < arguments.length) {
            if ("number" == typeof(i = p({
              path: "/"
            }, f.defaults, i)).expires) {
              var r = new Date;
              r.setMilliseconds(r.getMilliseconds() + 864e5 * i.expires), i.expires = r
            }
            try {
              n = JSON.stringify(t), /^[\{\[]/.test(n) && (t = n)
            } catch (e) {}
            return t = d.write ? d.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [e, "=", t, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
          }
          e || (n = {});
          for (var o = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, a = 0; a < o.length; a++) {
            var l = o[a].split("="),
              c = l.slice(1).join("=");
            '"' === c.charAt(0) && (c = c.slice(1, -1));
            try {
              var u = l[0].replace(s, decodeURIComponent);
              if (c = d.read ? d.read(c, u) : d(c, u) || c.replace(s, decodeURIComponent), this.json) try {
                c = JSON.parse(c)
              } catch (e) {}
              if (e === u) {
                n = c;
                break
              }
              e || (n[u] = c)
            } catch (e) {}
          }
          return n
        }
      }
      return (f.set = f).get = function(e) {
        return f.call(f, e)
      }, f.getJSON = function() {
        return f.apply({
          json: !0
        }, [].slice.call(arguments))
      }, f.defaults = {}, f.remove = function(e, t) {
        f(e, "", p(t, {
          expires: -1
        }))
      }, f.withConverter = e, f
    }(function() {})
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
  }(function(c) {
    "use strict";
    var r, o = window.Slick || {};
    r = 0, (o = function(e, t) {
      var i, n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(e),
        appendDots: c(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, t) {
          return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = r++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
      }).find("a, input, button, select").attr({
        tabindex: "0"
      })
    }, o.prototype.addSlide = o.prototype.slickAdd = function(e, t, i) {
      var n = this;
      if ("boolean" == typeof t) i = t, t = null;
      else if (t < 0 || t >= n.slideCount) return !1;
      n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
        c(t).attr("data-slick-index", e)
      }), n.$slidesCache = n.$slides, n.reinit()
    }, o.prototype.animateHeight = function() {
      if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
        var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
        this.$list.animate({
          height: e
        }, this.options.speed)
      }
    }, o.prototype.animateSlide = function(e, t) {
      var i = {},
        n = this;
      n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
        left: e
      }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
        top: e
      }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
        animStart: n.currentLeft
      }).animate({
        animStart: e
      }, {
        duration: n.options.speed,
        easing: n.options.easing,
        step: function(e) {
          e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
        },
        complete: function() {
          t && t.call()
        }
      })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
        n.disableTransition(), t.call()
      }, n.options.speed))
    }, o.prototype.getNavTarget = function() {
      var e = this.options.asNavFor;
      return e && null !== e && (e = c(e).not(this.$slider)), e
    }, o.prototype.asNavFor = function(t) {
      var e = this.getNavTarget();
      null !== e && "object" == typeof e && e.each(function() {
        var e = c(this).slick("getSlick");
        e.unslicked || e.slideHandler(t, !0)
      })
    }, o.prototype.applyTransition = function(e) {
      var t = this,
        i = {};
      !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, o.prototype.autoPlay = function() {
      this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
    }, o.prototype.autoPlayClear = function() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, o.prototype.autoPlayIterator = function() {
      var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, o.prototype.buildArrows = function() {
      var e = this;
      !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
      }))
    }, o.prototype.buildDots = function() {
      var e, t, i = this;
      if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
        for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
        i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
      }
    }, o.prototype.buildOut = function() {
      var e = this;
      e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
        c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
      }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, o.prototype.buildRows = function() {
      var e, t, i, n, r, o, s, a = this;
      if (n = document.createDocumentFragment(), o = a.$slider.children(), 1 < a.options.rows) {
        for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
          var l = document.createElement("div");
          for (t = 0; t < a.options.rows; t++) {
            var c = document.createElement("div");
            for (i = 0; i < a.options.slidesPerRow; i++) {
              var u = e * s + (t * a.options.slidesPerRow + i);
              o.get(u) && c.appendChild(o.get(u))
            }
            l.appendChild(c)
          }
          n.appendChild(l)
        }
        a.$slider.empty().append(n), a.$slider.children().children().children().css({
          width: 100 / a.options.slidesPerRow + "%",
          display: "inline-block"
        })
      }
    }, o.prototype.checkResponsive = function(e, t) {
      var i, n, r, o = this,
        s = !1,
        a = o.$slider.width(),
        l = window.innerWidth || c(window).width();
      if ("window" === o.respondTo ? r = l : "slider" === o.respondTo ? r = a : "min" === o.respondTo && (r = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
        for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? r < o.breakpoints[i] && (n = o.breakpoints[i]) : r > o.breakpoints[i] && (n = o.breakpoints[i]));
        null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || t) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), s = n), e || !1 === s || o.$slider.trigger("breakpoint", [o, s])
      }
    }, o.prototype.changeSlide = function(e, t) {
      var i, n, r = this,
        o = c(e.currentTarget);
      switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
        case "previous":
          n = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, t);
          break;
        case "next":
          n = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, t);
          break;
        case "index":
          var s = 0 === e.data.index ? 0 : e.data.index || o.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(s), !1, t), o.children().trigger("focus");
          break;
        default:
          return
      }
    }, o.prototype.checkNavigable = function(e) {
      var t, i;
      if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
      else
        for (var n in t) {
          if (e < t[n]) {
            e = i;
            break
          }
          i = t[n]
        }
      return e
    }, o.prototype.cleanUpEvents = function() {
      var e = this;
      e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, o.prototype.cleanUpSlideEvents = function() {
      this.$list.off("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", c.proxy(this.interrupt, this, !1))
    }, o.prototype.cleanUpRows = function() {
      var e;
      1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, o.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, o.prototype.destroy = function(e) {
      var t = this;
      t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        c(this).attr("style", c(this).data("originalStyling"))
      }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, o.prototype.disableTransition = function(e) {
      var t = {};
      t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, o.prototype.fadeSlide = function(e, t) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(e).css({
        zIndex: i.options.zIndex
      }), i.$slides.eq(e).animate({
        opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
        opacity: 1,
        zIndex: i.options.zIndex
      }), t && setTimeout(function() {
        i.disableTransition(e), t.call()
      }, i.options.speed))
    }, o.prototype.fadeSlideOut = function(e) {
      !1 === this.cssTransitions ? this.$slides.eq(e).animate({
        opacity: 0,
        zIndex: this.options.zIndex - 2
      }, this.options.speed, this.options.easing) : (this.applyTransition(e), this.$slides.eq(e).css({
        opacity: 0,
        zIndex: this.options.zIndex - 2
      }))
    }, o.prototype.filterSlides = o.prototype.slickFilter = function(e) {
      null !== e && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(e).appendTo(this.$slideTrack), this.reinit())
    }, o.prototype.focusHandler = function() {
      var i = this;
      i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
        e.stopImmediatePropagation();
        var t = c(this);
        setTimeout(function() {
          i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
        }, 0)
      })
    }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function() {
      return this.currentSlide
    }, o.prototype.getDotCount = function() {
      var e = this,
        t = 0,
        i = 0,
        n = 0;
      if (!0 === e.options.infinite)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode) n = e.slideCount;
      else if (e.options.asNavFor)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return n - 1
    }, o.prototype.getLeft = function(e) {
      var t, i, n, r = this,
        o = 0;
      return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (o = e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (o = r.slideOffset = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + o, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
    }, o.prototype.getOption = o.prototype.slickGetOption = function(e) {
      return this.options[e]
    }, o.prototype.getNavigableIndexes = function() {
      var e, t = this,
        i = 0,
        n = 0,
        r = [];
      for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return r
    }, o.prototype.getSlick = function() {
      return this
    }, o.prototype.getSlideCount = function() {
      var i, n, r = this;
      return n = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function(e, t) {
        return t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * r.swipeLeft ? (i = t, !1) : void 0
      }), Math.abs(c(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
    }, o.prototype.goTo = o.prototype.slickGoTo = function(e, t) {
      this.changeSlide({
        data: {
          message: "index",
          index: parseInt(e)
        }
      }, t)
    }, o.prototype.init = function(e) {
      var t = this;
      c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, o.prototype.initADA = function() {
      var t = this;
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
      }).find("a, input, button, select").attr({
        tabindex: "-1"
      }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
        c(this).attr({
          role: "option",
          "aria-describedby": "slick-slide" + t.instanceUid + e
        })
      }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
        c(this).attr({
          role: "presentation",
          "aria-selected": "false",
          "aria-controls": "navigation" + t.instanceUid + e,
          id: "slick-slide" + t.instanceUid + e
        })
      }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, o.prototype.initArrowEvents = function() {
      !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, this.changeSlide))
    }, o.prototype.initDotEvents = function() {
      var e = this;
      !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
        message: "index"
      }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, o.prototype.initSlideEvents = function() {
      this.options.pauseOnHover && (this.$list.on("mouseenter.slick", c.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", c.proxy(this.interrupt, this, !1)))
    }, o.prototype.initializeEvents = function() {
      var e = this;
      e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, o.prototype.initUI = function() {
      !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
    }, o.prototype.keyHandler = function(e) {
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
        data: {
          message: !0 === this.options.rtl ? "next" : "previous"
        }
      }) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
        data: {
          message: !0 === this.options.rtl ? "previous" : "next"
        }
      }))
    }, o.prototype.lazyLoad = function() {
      function e(e) {
        c("img[data-lazy]", e).each(function() {
          var e = c(this),
            t = c(this).attr("data-lazy"),
            i = document.createElement("img");
          i.onload = function() {
            e.animate({
              opacity: 0
            }, 100, function() {
              e.attr("src", t).animate({
                opacity: 1
              }, 200, function() {
                e.removeAttr("data-lazy").removeClass("slick-loading")
              }), n.$slider.trigger("lazyLoaded", [n, e, t])
            })
          }, i.onerror = function() {
            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
          }, i.src = t
        })
      }
      var t, i, n = this;
      !0 === n.options.centerMode ? i = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(t, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, o.prototype.loadSlider = function() {
      this.setPosition(), this.$slideTrack.css({
        opacity: 1
      }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
    }, o.prototype.next = o.prototype.slickNext = function() {
      this.changeSlide({
        data: {
          message: "next"
        }
      })
    }, o.prototype.orientationChange = function() {
      this.checkResponsive(), this.setPosition()
    }, o.prototype.pause = o.prototype.slickPause = function() {
      this.autoPlayClear(), this.paused = !0
    }, o.prototype.play = o.prototype.slickPlay = function() {
      this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
    }, o.prototype.postSlide = function(e) {
      var t = this;
      t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, o.prototype.prev = o.prototype.slickPrev = function() {
      this.changeSlide({
        data: {
          message: "previous"
        }
      })
    }, o.prototype.preventDefault = function(e) {
      e.preventDefault()
    }, o.prototype.progressiveLazyLoad = function(e) {
      e = e || 1;
      var t, i, n, r = this,
        o = c("img[data-lazy]", r.$slider);
      o.length ? (t = o.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
        t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, i]), r.progressiveLazyLoad()
      }, n.onerror = function() {
        e < 3 ? setTimeout(function() {
          r.progressiveLazyLoad(e + 1)
        }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i]), r.progressiveLazyLoad())
      }, n.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, o.prototype.refresh = function(e) {
      var t, i, n = this;
      i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
        currentSlide: t
      }), n.init(), e || n.changeSlide({
        data: {
          message: "index",
          index: t
        }
      }, !1)
    }, o.prototype.registerBreakpoints = function() {
      var e, t, i, n = this,
        r = n.options.responsive || null;
      if ("array" === c.type(r) && r.length) {
        for (e in n.respondTo = n.options.respondTo || "window", r)
          if (i = n.breakpoints.length - 1, t = r[e].breakpoint, r.hasOwnProperty(e)) {
            for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
            n.breakpoints.push(t), n.breakpointSettings[t] = r[e].settings
          }
        n.breakpoints.sort(function(e, t) {
          return n.options.mobileFirst ? e - t : t - e
        })
      }
    }, o.prototype.reinit = function() {
      var e = this;
      e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, o.prototype.resize = function() {
      var e = this;
      c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
        e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
      }, 50))
    }, o.prototype.removeSlide = o.prototype.slickRemove = function(e, t, i) {
      var n = this;
      return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, o.prototype.setCSS = function(e) {
      var t, i, n = this,
        r = {};
      !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, !1 === n.transformsEnabled || (!(r = {}) === n.cssTransitions ? r[n.animType] = "translate(" + t + ", " + i + ")" : r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(r)
    }, o.prototype.setDimensions = function() {
      var e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
      })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, o.prototype.setFade = function() {
      var i, n = this;
      n.$slides.each(function(e, t) {
        i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
          position: "relative",
          right: i,
          top: 0,
          zIndex: n.options.zIndex - 2,
          opacity: 0
        }) : c(t).css({
          position: "relative",
          left: i,
          top: 0,
          zIndex: n.options.zIndex - 2,
          opacity: 0
        })
      }), n.$slides.eq(n.currentSlide).css({
        zIndex: n.options.zIndex - 1,
        opacity: 1
      })
    }, o.prototype.setHeight = function() {
      if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
        var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
        this.$list.css("height", e)
      }
    }, o.prototype.setOption = o.prototype.slickSetOption = function() {
      var e, t, i, n, r, o = this,
        s = !1;
      if ("object" === c.type(arguments[0]) ? (i = arguments[0], s = arguments[1], r = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) o.options[i] = n;
      else if ("multiple" === r) c.each(i, function(e, t) {
        o.options[e] = t
      });
      else if ("responsive" === r)
        for (t in n)
          if ("array" !== c.type(o.options.responsive)) o.options.responsive = [n[t]];
          else {
            for (e = o.options.responsive.length - 1; 0 <= e;) o.options.responsive[e].breakpoint === n[t].breakpoint && o.options.responsive.splice(e, 1), e--;
            o.options.responsive.push(n[t])
          }
      s && (o.unload(), o.reinit())
    }, o.prototype.setPosition = function() {
      this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
    }, o.prototype.setProps = function() {
      var e = this,
        t = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, o.prototype.setSlideClasses = function(e) {
      var t, i, n, r, o = this;
      i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode ? (t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t <= e && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
    }, o.prototype.setupInfinite = function() {
      var e, t, i, n = this;
      if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
        for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
        for (e = 0; e < i; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
        n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          c(this).attr("id", "")
        })
      }
    }, o.prototype.interrupt = function(e) {
      e || this.autoPlay(), this.interrupted = e
    }, o.prototype.selectHandler = function(e) {
      var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
        i = parseInt(t.attr("data-slick-index"));
      return i || (i = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(i), void this.asNavFor(i)) : void this.slideHandler(i)
    }, o.prototype.slideHandler = function(e, t, i) {
      var n, r, o, s, a, l = null,
        c = this;
      return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
        c.postSlide(n)
      }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(s, function() {
        c.postSlide(n)
      }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), o = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(r, function() {
        c.postSlide(r)
      })) : c.postSlide(r), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function() {
        c.postSlide(r)
      }) : c.postSlide(r))))
    }, o.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, o.prototype.swipeDirection = function() {
      var e, t, i, n;
      return e = this.touchObject.startX - this.touchObject.curX, t = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === this.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === this.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }, o.prototype.swipeEnd = function(e) {
      var t, i, n = this;
      if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
      if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
        switch (i = n.swipeDirection()) {
          case "left":
          case "down":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
            break;
          case "right":
          case "up":
            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
        }
        "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
      } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, o.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
          t.swipeStart(e);
          break;
        case "move":
          t.swipeMove(e);
          break;
        case "end":
          t.swipeEnd(e)
      }
    }, o.prototype.swipeMove = function(e) {
      var t, i, n, r, o, s = this;
      return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (i = s.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < s.touchObject.swipeLength && e.preventDefault(), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, (s.touchObject.edgeHit = !1) === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + n * r : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = t + n * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, o.prototype.swipeStart = function(e) {
      var t, i = this;
      return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
    }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function() {
      null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
    }, o.prototype.unload = function() {
      var e = this;
      c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, o.prototype.unslick = function(e) {
      this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, o.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, o.prototype.updateDots = function() {
      null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, o.prototype.visibility = function() {
      this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function() {
      var e, t, i = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = this.length;
      for (e = 0; e < r; e++)
        if ("object" == typeof i || void 0 === i ? this[e].slick = new o(this[e], i) : t = this[e].slick[i].apply(this[e].slick, n), void 0 !== t) return t;
      return this
    }
  });
var pJS = function(e, t) {
  var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: i,
      w: i.offsetWidth,
      h: i.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var p = this.pJS;
  t && Object.deepExtend(p, t), p.tmp.obj = {
    size_value: p.particles.size.value,
    size_anim_speed: p.particles.size.anim.speed,
    move_speed: p.particles.move.speed,
    line_linked_distance: p.particles.line_linked.distance,
    line_linked_width: p.particles.line_linked.width,
    mode_grab_distance: p.interactivity.modes.grab.distance,
    mode_bubble_distance: p.interactivity.modes.bubble.distance,
    mode_bubble_size: p.interactivity.modes.bubble.size,
    mode_repulse_distance: p.interactivity.modes.repulse.distance
  }, p.fn.retinaInit = function() {
    p.retina_detect && 1 < window.devicePixelRatio ? (p.canvas.pxratio = window.devicePixelRatio, p.tmp.retina = !0) : (p.canvas.pxratio = 1, p.tmp.retina = !1), p.canvas.w = p.canvas.el.offsetWidth * p.canvas.pxratio, p.canvas.h = p.canvas.el.offsetHeight * p.canvas.pxratio, p.particles.size.value = p.tmp.obj.size_value * p.canvas.pxratio, p.particles.size.anim.speed = p.tmp.obj.size_anim_speed * p.canvas.pxratio, p.particles.move.speed = p.tmp.obj.move_speed * p.canvas.pxratio, p.particles.line_linked.distance = p.tmp.obj.line_linked_distance * p.canvas.pxratio, p.interactivity.modes.grab.distance = p.tmp.obj.mode_grab_distance * p.canvas.pxratio, p.interactivity.modes.bubble.distance = p.tmp.obj.mode_bubble_distance * p.canvas.pxratio, p.particles.line_linked.width = p.tmp.obj.line_linked_width * p.canvas.pxratio, p.interactivity.modes.bubble.size = p.tmp.obj.mode_bubble_size * p.canvas.pxratio, p.interactivity.modes.repulse.distance = p.tmp.obj.mode_repulse_distance * p.canvas.pxratio
  }, p.fn.canvasInit = function() {
    p.canvas.ctx = p.canvas.el.getContext("2d")
  }, p.fn.canvasSize = function() {
    p.canvas.el.width = p.canvas.w, p.canvas.el.height = p.canvas.h, p && p.interactivity.events.resize && window.addEventListener("resize", function() {
      p.canvas.w = p.canvas.el.offsetWidth, p.canvas.h = p.canvas.el.offsetHeight, p.tmp.retina && (p.canvas.w *= p.canvas.pxratio, p.canvas.h *= p.canvas.pxratio), p.canvas.el.width = p.canvas.w, p.canvas.el.height = p.canvas.h, p.particles.move.enable || (p.fn.particlesEmpty(), p.fn.particlesCreate(), p.fn.particlesDraw(), p.fn.vendors.densityAutoParticles()), p.fn.vendors.densityAutoParticles()
    })
  }, p.fn.canvasPaint = function() {
    p.canvas.ctx.fillRect(0, 0, p.canvas.w, p.canvas.h)
  }, p.fn.canvasClear = function() {
    p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h)
  }, p.fn.particle = function(e, t, i) {
    if (this.radius = (p.particles.size.random ? Math.random() : 1) * p.particles.size.value, p.particles.size.anim.enable && (this.size_status = !1, this.vs = p.particles.size.anim.speed / 100, p.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * p.canvas.w, this.y = i ? i.y : Math.random() * p.canvas.h, this.x > p.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > p.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), p.particles.move.bounce && p.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof e.value)
      if (e.value instanceof Array) {
        var n = e.value[Math.floor(Math.random() * p.particles.color.value.length)];
        this.color.rgb = hexToRgb(n)
      } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (p.particles.opacity.random ? Math.random() : 1) * p.particles.opacity.value, p.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = p.particles.opacity.anim.speed / 100, p.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var r = {};
    switch (p.particles.move.direction) {
      case "top":
        r = {
          x: 0,
          y: -1
        };
        break;
      case "top-right":
        r = {
          x: .5,
          y: -.5
        };
        break;
      case "right":
        r = {
          x: 1,
          y: -0
        };
        break;
      case "bottom-right":
        r = {
          x: .5,
          y: .5
        };
        break;
      case "bottom":
        r = {
          x: 0,
          y: 1
        };
        break;
      case "bottom-left":
        r = {
          x: -.5,
          y: 1
        };
        break;
      case "left":
        r = {
          x: -1,
          y: 0
        };
        break;
      case "top-left":
        r = {
          x: -.5,
          y: -.5
        };
        break;
      default:
        r = {
          x: 0,
          y: 0
        }
    }
    p.particles.move.straight ? (this.vx = r.x, this.vy = r.y, p.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var o = p.particles.shape.type;
    if ("object" == typeof o) {
      if (o instanceof Array) {
        var s = o[Math.floor(Math.random() * o.length)];
        this.shape = s
      }
    } else this.shape = o;
    if ("image" == this.shape) {
      var a = p.particles.shape;
      this.img = {
        src: a.image.src,
        ratio: a.image.width / a.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == p.tmp.img_type && null != p.tmp.source_svg && (p.fn.vendors.createSvgImg(this), p.tmp.pushing && (this.img.loaded = !1))
    }
  }, p.fn.particle.prototype.draw = function() {
    var e = this;
    if (null != e.radius_bubble) var t = e.radius_bubble;
    else t = e.radius;
    if (null != e.opacity_bubble) var i = e.opacity_bubble;
    else i = e.opacity;
    if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
    else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
    switch (p.canvas.ctx.fillStyle = n, p.canvas.ctx.beginPath(), e.shape) {
      case "circle":
        p.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
        break;
      case "edge":
        p.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
        break;
      case "triangle":
        p.fn.vendors.drawShape(p.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
        break;
      case "polygon":
        p.fn.vendors.drawShape(p.canvas.ctx, e.x - t / (p.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (p.particles.shape.polygon.nb_sides / 3), p.particles.shape.polygon.nb_sides, 1);
        break;
      case "star":
        p.fn.vendors.drawShape(p.canvas.ctx, e.x - 2 * t / (p.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (p.particles.shape.polygon.nb_sides / 3), p.particles.shape.polygon.nb_sides, 2);
        break;
      case "image":
        if ("svg" == p.tmp.img_type) var r = e.img.obj;
        else r = p.tmp.img_obj;
        r && p.canvas.ctx.drawImage(r, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
    }
    p.canvas.ctx.closePath(), 0 < p.particles.shape.stroke.width && (p.canvas.ctx.strokeStyle = p.particles.shape.stroke.color, p.canvas.ctx.lineWidth = p.particles.shape.stroke.width, p.canvas.ctx.stroke()), p.canvas.ctx.fill()
  }, p.fn.particlesCreate = function() {
    for (var e = 0; e < p.particles.number.value; e++) p.particles.array.push(new p.fn.particle(p.particles.color, p.particles.opacity.value))
  }, p.fn.particlesUpdate = function() {
    for (var e = 0; e < p.particles.array.length; e++) {
      var t = p.particles.array[e];
      if (p.particles.move.enable) {
        var i = p.particles.move.speed / 2;
        t.x += t.vx * i, t.y += t.vy * i
      }
      if (p.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= p.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= p.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), p.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= p.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= p.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == p.particles.move.out_mode) var n = {
        x_left: t.radius,
        x_right: p.canvas.w,
        y_top: t.radius,
        y_bottom: p.canvas.h
      };
      else n = {
        x_left: -t.radius,
        x_right: p.canvas.w + t.radius,
        y_top: -t.radius,
        y_bottom: p.canvas.h + t.radius
      };
      switch (t.x - t.radius > p.canvas.w ? (t.x = n.x_left, t.y = Math.random() * p.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * p.canvas.h), t.y - t.radius > p.canvas.h ? (t.y = n.y_top, t.x = Math.random() * p.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * p.canvas.w), p.particles.move.out_mode) {
        case "bounce":
          t.x + t.radius > p.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > p.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
      }
      if (isInArray("grab", p.interactivity.events.onhover.mode) && p.fn.modes.grabParticle(t), (isInArray("bubble", p.interactivity.events.onhover.mode) || isInArray("bubble", p.interactivity.events.onclick.mode)) && p.fn.modes.bubbleParticle(t), (isInArray("repulse", p.interactivity.events.onhover.mode) || isInArray("repulse", p.interactivity.events.onclick.mode)) && p.fn.modes.repulseParticle(t), p.particles.line_linked.enable || p.particles.move.attract.enable)
        for (var r = e + 1; r < p.particles.array.length; r++) {
          var o = p.particles.array[r];
          p.particles.line_linked.enable && p.fn.interact.linkParticles(t, o), p.particles.move.attract.enable && p.fn.interact.attractParticles(t, o), p.particles.move.bounce && p.fn.interact.bounceParticles(t, o)
        }
    }
  }, p.fn.particlesDraw = function() {
    p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h), p.fn.particlesUpdate();
    for (var e = 0; e < p.particles.array.length; e++) {
      p.particles.array[e].draw()
    }
  }, p.fn.particlesEmpty = function() {
    p.particles.array = []
  }, p.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(p.fn.checkAnimFrame), cancelRequestAnimFrame(p.fn.drawAnimFrame), p.tmp.source_svg = void 0, p.tmp.img_obj = void 0, p.tmp.count_svg = 0, p.fn.particlesEmpty(), p.fn.canvasClear(), p.fn.vendors.start()
  }, p.fn.interact.linkParticles = function(e, t) {
    var i = e.x - t.x,
      n = e.y - t.y,
      r = Math.sqrt(i * i + n * n);
    if (r <= p.particles.line_linked.distance) {
      var o = p.particles.line_linked.opacity - r / (1 / p.particles.line_linked.opacity) / p.particles.line_linked.distance;
      if (0 < o) {
        var s = p.particles.line_linked.color_rgb_line;
        p.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", p.canvas.ctx.lineWidth = p.particles.line_linked.width, p.canvas.ctx.beginPath(), p.canvas.ctx.moveTo(e.x, e.y), p.canvas.ctx.lineTo(t.x, t.y), p.canvas.ctx.stroke(), p.canvas.ctx.closePath()
      }
    }
  }, p.fn.interact.attractParticles = function(e, t) {
    var i = e.x - t.x,
      n = e.y - t.y;
    if (Math.sqrt(i * i + n * n) <= p.particles.line_linked.distance) {
      var r = i / (1e3 * p.particles.move.attract.rotateX),
        o = n / (1e3 * p.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= o, t.vx += r, t.vy += o
    }
  }, p.fn.interact.bounceParticles = function(e, t) {
    var i = e.x - t.x,
      n = e.y - t.y;
    Math.sqrt(i * i + n * n) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
  }, p.fn.modes.pushParticles = function(e, t) {
    p.tmp.pushing = !0;
    for (var i = 0; i < e; i++) p.particles.array.push(new p.fn.particle(p.particles.color, p.particles.opacity.value, {
      x: t ? t.pos_x : Math.random() * p.canvas.w,
      y: t ? t.pos_y : Math.random() * p.canvas.h
    })), i == e - 1 && (p.particles.move.enable || p.fn.particlesDraw(), p.tmp.pushing = !1)
  }, p.fn.modes.removeParticles = function(e) {
    p.particles.array.splice(0, e), p.particles.move.enable || p.fn.particlesDraw()
  }, p.fn.modes.bubbleParticle = function(a) {
    function e() {
      a.opacity_bubble = a.opacity, a.radius_bubble = a.radius
    }

    function t(e, t, i, n, r) {
      if (e != t)
        if (p.tmp.bubble_duration_end) {
          if (null != i) s = e + (e - (n - u * (n - e) / p.interactivity.modes.bubble.duration)), "size" == r && (a.radius_bubble = s), "opacity" == r && (a.opacity_bubble = s)
        } else if (c <= p.interactivity.modes.bubble.distance) {
          if (null != i) var o = i;
          else o = n;
          if (o != e) {
            var s = n - u * (n - e) / p.interactivity.modes.bubble.duration;
            "size" == r && (a.radius_bubble = s), "opacity" == r && (a.opacity_bubble = s)
          }
        } else "size" == r && (a.radius_bubble = void 0), "opacity" == r && (a.opacity_bubble = void 0)
    }
    if (p.interactivity.events.onhover.enable && isInArray("bubble", p.interactivity.events.onhover.mode)) {
      var i = a.x - p.interactivity.mouse.pos_x,
        n = a.y - p.interactivity.mouse.pos_y,
        r = 1 - (c = Math.sqrt(i * i + n * n)) / p.interactivity.modes.bubble.distance;
      if (c <= p.interactivity.modes.bubble.distance) {
        if (0 <= r && "mousemove" == p.interactivity.status) {
          if (p.interactivity.modes.bubble.size != p.particles.size.value)
            if (p.interactivity.modes.bubble.size > p.particles.size.value) {
              0 <= (s = a.radius + p.interactivity.modes.bubble.size * r) && (a.radius_bubble = s)
            } else {
              var o = a.radius - p.interactivity.modes.bubble.size,
                s = a.radius - o * r;
              a.radius_bubble = 0 < s ? s : 0
            }
          if (p.interactivity.modes.bubble.opacity != p.particles.opacity.value)
            if (p.interactivity.modes.bubble.opacity > p.particles.opacity.value) {
              (l = p.interactivity.modes.bubble.opacity * r) > a.opacity && l <= p.interactivity.modes.bubble.opacity && (a.opacity_bubble = l)
            } else {
              var l;
              (l = a.opacity - (p.particles.opacity.value - p.interactivity.modes.bubble.opacity) * r) < a.opacity && l >= p.interactivity.modes.bubble.opacity && (a.opacity_bubble = l)
            }
        }
      } else e();
      "mouseleave" == p.interactivity.status && e()
    } else if (p.interactivity.events.onclick.enable && isInArray("bubble", p.interactivity.events.onclick.mode)) {
      if (p.tmp.bubble_clicking) {
        i = a.x - p.interactivity.mouse.click_pos_x, n = a.y - p.interactivity.mouse.click_pos_y;
        var c = Math.sqrt(i * i + n * n),
          u = ((new Date).getTime() - p.interactivity.mouse.click_time) / 1e3;
        u > p.interactivity.modes.bubble.duration && (p.tmp.bubble_duration_end = !0), u > 2 * p.interactivity.modes.bubble.duration && (p.tmp.bubble_clicking = !1, p.tmp.bubble_duration_end = !1)
      }
      p.tmp.bubble_clicking && (t(p.interactivity.modes.bubble.size, p.particles.size.value, a.radius_bubble, a.radius, "size"), t(p.interactivity.modes.bubble.opacity, p.particles.opacity.value, a.opacity_bubble, a.opacity, "opacity"))
    }
  }, p.fn.modes.repulseParticle = function(n) {
    if (p.interactivity.events.onhover.enable && isInArray("repulse", p.interactivity.events.onhover.mode) && "mousemove" == p.interactivity.status) {
      var e = n.x - p.interactivity.mouse.pos_x,
        t = n.y - p.interactivity.mouse.pos_y,
        i = Math.sqrt(e * e + t * t),
        r = e / i,
        o = t / i,
        s = clamp(1 / (l = p.interactivity.modes.repulse.distance) * (-1 * Math.pow(i / l, 2) + 1) * l * 100, 0, 50),
        a = {
          x: n.x + r * s,
          y: n.y + o * s
        };
      "bounce" == p.particles.move.out_mode ? (0 < a.x - n.radius && a.x + n.radius < p.canvas.w && (n.x = a.x), 0 < a.y - n.radius && a.y + n.radius < p.canvas.h && (n.y = a.y)) : (n.x = a.x, n.y = a.y)
    } else if (p.interactivity.events.onclick.enable && isInArray("repulse", p.interactivity.events.onclick.mode))
      if (p.tmp.repulse_finish || (p.tmp.repulse_count++, p.tmp.repulse_count == p.particles.array.length && (p.tmp.repulse_finish = !0)), p.tmp.repulse_clicking) {
        var l = Math.pow(p.interactivity.modes.repulse.distance / 6, 3),
          c = p.interactivity.mouse.click_pos_x - n.x,
          u = p.interactivity.mouse.click_pos_y - n.y,
          d = c * c + u * u,
          f = -l / d * 1;
        d <= l && function() {
          var e = Math.atan2(u, c);
          if (n.vx = f * Math.cos(e), n.vy = f * Math.sin(e), "bounce" == p.particles.move.out_mode) {
            var t = n.x + n.vx,
              i = n.y + n.vy;
            t + n.radius > p.canvas.w ? n.vx = -n.vx : t - n.radius < 0 && (n.vx = -n.vx), i + n.radius > p.canvas.h ? n.vy = -n.vy : i - n.radius < 0 && (n.vy = -n.vy)
          }
        }()
      } else 0 == p.tmp.repulse_clicking && (n.vx = n.vx_i, n.vy = n.vy_i)
  }, p.fn.modes.grabParticle = function(e) {
    if (p.interactivity.events.onhover.enable && "mousemove" == p.interactivity.status) {
      var t = e.x - p.interactivity.mouse.pos_x,
        i = e.y - p.interactivity.mouse.pos_y,
        n = Math.sqrt(t * t + i * i);
      if (n <= p.interactivity.modes.grab.distance) {
        var r = p.interactivity.modes.grab.line_linked.opacity - n / (1 / p.interactivity.modes.grab.line_linked.opacity) / p.interactivity.modes.grab.distance;
        if (0 < r) {
          var o = p.particles.line_linked.color_rgb_line;
          p.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", p.canvas.ctx.lineWidth = p.particles.line_linked.width, p.canvas.ctx.beginPath(), p.canvas.ctx.moveTo(e.x, e.y), p.canvas.ctx.lineTo(p.interactivity.mouse.pos_x, p.interactivity.mouse.pos_y), p.canvas.ctx.stroke(), p.canvas.ctx.closePath()
        }
      }
    }
  }, p.fn.vendors.eventsListeners = function() {
    "window" == p.interactivity.detect_on ? p.interactivity.el = window : p.interactivity.el = p.canvas.el, (p.interactivity.events.onhover.enable || p.interactivity.events.onclick.enable) && (p.interactivity.el.addEventListener("mousemove", function(e) {
      if (p.interactivity.el == window) var t = e.clientX,
        i = e.clientY;
      else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
      p.interactivity.mouse.pos_x = t, p.interactivity.mouse.pos_y = i, p.tmp.retina && (p.interactivity.mouse.pos_x *= p.canvas.pxratio, p.interactivity.mouse.pos_y *= p.canvas.pxratio), p.interactivity.status = "mousemove"
    }), p.interactivity.el.addEventListener("mouseleave", function(e) {
      p.interactivity.mouse.pos_x = null, p.interactivity.mouse.pos_y = null, p.interactivity.status = "mouseleave"
    })), p.interactivity.events.onclick.enable && p.interactivity.el.addEventListener("click", function() {
      if (p.interactivity.mouse.click_pos_x = p.interactivity.mouse.pos_x, p.interactivity.mouse.click_pos_y = p.interactivity.mouse.pos_y, p.interactivity.mouse.click_time = (new Date).getTime(), p.interactivity.events.onclick.enable) switch (p.interactivity.events.onclick.mode) {
        case "push":
          p.particles.move.enable ? p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb, p.interactivity.mouse) : 1 == p.interactivity.modes.push.particles_nb ? p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb, p.interactivity.mouse) : 1 < p.interactivity.modes.push.particles_nb && p.fn.modes.pushParticles(p.interactivity.modes.push.particles_nb);
          break;
        case "remove":
          p.fn.modes.removeParticles(p.interactivity.modes.remove.particles_nb);
          break;
        case "bubble":
          p.tmp.bubble_clicking = !0;
          break;
        case "repulse":
          p.tmp.repulse_clicking = !0, p.tmp.repulse_count = 0, p.tmp.repulse_finish = !1, setTimeout(function() {
            p.tmp.repulse_clicking = !1
          }, 1e3 * p.interactivity.modes.repulse.duration)
      }
    })
  }, p.fn.vendors.densityAutoParticles = function() {
    if (p.particles.number.density.enable) {
      var e = p.canvas.el.width * p.canvas.el.height / 1e3;
      p.tmp.retina && (e /= 2 * p.canvas.pxratio);
      var t = e * p.particles.number.value / p.particles.number.density.value_area,
        i = p.particles.array.length - t;
      i < 0 ? p.fn.modes.pushParticles(Math.abs(i)) : p.fn.modes.removeParticles(i)
    }
  }, p.fn.vendors.checkOverlap = function(e, t) {
    for (var i = 0; i < p.particles.array.length; i++) {
      var n = p.particles.array[i],
        r = e.x - n.x,
        o = e.y - n.y;
      Math.sqrt(r * r + o * o) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * p.canvas.w, e.y = t ? t.y : Math.random() * p.canvas.h, p.fn.vendors.checkOverlap(e))
    }
  }, p.fn.vendors.createSvgImg = function(o) {
    var e = p.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, i, n) {
        if (o.color.rgb) var r = "rgba(" + o.color.rgb.r + "," + o.color.rgb.g + "," + o.color.rgb.b + "," + o.opacity + ")";
        else r = "hsla(" + o.color.hsl.h + "," + o.color.hsl.s + "%," + o.color.hsl.l + "%," + o.opacity + ")";
        return r
      }),
      t = new Blob([e], {
        type: "image/svg+xml;charset=utf-8"
      }),
      i = window.URL || window.webkitURL || window,
      n = i.createObjectURL(t),
      r = new Image;
    r.addEventListener("load", function() {
      o.img.obj = r, o.img.loaded = !0, i.revokeObjectURL(n), p.tmp.count_svg++
    }), r.src = n
  }, p.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(p.fn.drawAnimFrame), i.remove(), pJSDom = null
  }, p.fn.vendors.drawShape = function(e, t, i, n, r, o) {
    var s = r * o,
      a = r / o,
      l = 180 * (a - 2) / a,
      c = Math.PI - Math.PI * l / 180;
    e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
    for (var u = 0; u < s; u++) e.lineTo(n, 0), e.translate(n, 0), e.rotate(c);
    e.fill(), e.restore()
  }, p.fn.vendors.exportImg = function() {
    window.open(p.canvas.el.toDataURL("image/png"), "_blank")
  }, p.fn.vendors.loadImg = function(e) {
    if (p.tmp.img_error = void 0, "" != p.particles.shape.image.src)
      if ("svg" == e) {
        var t = new XMLHttpRequest;
        t.open("GET", p.particles.shape.image.src), t.onreadystatechange = function(e) {
          4 == t.readyState && (200 == t.status ? (p.tmp.source_svg = e.currentTarget.response, p.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), p.tmp.img_error = !0))
        }, t.send()
      } else {
        var i = new Image;
        i.addEventListener("load", function() {
          p.tmp.img_obj = i, p.fn.vendors.checkBeforeDraw()
        }), i.src = p.particles.shape.image.src
      } else console.log("Error pJS - No image.src"), p.tmp.img_error = !0
  }, p.fn.vendors.draw = function() {
    "image" == p.particles.shape.type ? "svg" == p.tmp.img_type ? p.tmp.count_svg >= p.particles.number.value ? (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw) : cancelRequestAnimFrame(p.fn.drawAnimFrame)) : p.tmp.img_error || (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw)) : null != p.tmp.img_obj ? (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw) : cancelRequestAnimFrame(p.fn.drawAnimFrame)) : p.tmp.img_error || (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw)) : (p.fn.particlesDraw(), p.particles.move.enable ? p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw) : cancelRequestAnimFrame(p.fn.drawAnimFrame))
  }, p.fn.vendors.checkBeforeDraw = function() {
    "image" == p.particles.shape.type ? "svg" == p.tmp.img_type && null == p.tmp.source_svg ? p.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(p.tmp.checkAnimFrame), p.tmp.img_error || (p.fn.vendors.init(), p.fn.vendors.draw())) : (p.fn.vendors.init(), p.fn.vendors.draw())
  }, p.fn.vendors.init = function() {
    p.fn.retinaInit(), p.fn.canvasInit(), p.fn.canvasSize(), p.fn.canvasPaint(), p.fn.particlesCreate(), p.fn.vendors.densityAutoParticles(), p.particles.line_linked.color_rgb_line = hexToRgb(p.particles.line_linked.color)
  }, p.fn.vendors.start = function() {
    isInArray("image", p.particles.shape.type) ? (p.tmp.img_type = p.particles.shape.image.src.substr(p.particles.shape.image.src.length - 3), p.fn.vendors.loadImg(p.tmp.img_type)) : p.fn.vendors.checkBeforeDraw()
  }, p.fn.vendors.eventsListeners(), p.fn.vendors.start()
};
Object.deepExtend = function(e, t) {
  for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
  return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
  window.setTimeout(e, 1e3 / 60)
}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
  "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
  var i = document.getElementById(e),
    n = "particles-js-canvas-el",
    r = i.getElementsByClassName(n);
  if (r.length)
    for (; 0 < r.length;) i.removeChild(r[0]);
  var o = document.createElement("canvas");
  o.className = n, o.style.width = "100%", o.style.height = "100%", null != document.getElementById(e).appendChild(o) && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function(i, e, n) {
  var r = new XMLHttpRequest;
  r.open("GET", e), r.onreadystatechange = function(e) {
    if (4 == r.readyState)
      if (200 == r.status) {
        var t = JSON.parse(e.currentTarget.response);
        window.particlesJS(i, t), n && n()
      } else console.log("Error pJS - XMLHttpRequest status: " + r.status), console.log("Error pJS - File config not found")
  }, r.send()
},
  function o(s, a, l) {
    function c(t, e) {
      if (!a[t]) {
        if (!s[t]) {
          var i = "function" == typeof require && require;
          if (!e && i) return i(t, !0);
          if (u) return u(t, !0);
          var n = new Error("Cannot find module '" + t + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        var r = a[t] = {
          exports: {}
        };
        s[t][0].call(r.exports, function(e) {
          return c(s[t][1][e] || e)
        }, r, r.exports, o, s, a, l)
      }
      return a[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < l.length; e++) c(l[e]);
    return c
  }({
    1: [function(e, t, i) {
      var n = jQuery,
        r = e("./components/nav.js"),
        o = e("./components/tabs.js"),
        s = e("./components/timeline-effects.js"),
        a = e("./components/home-events.js"),
        l = e("./components/slick-sliders.js"),
        c = e("./components/particles-setup.js"),
        u = e("./components/home-animations.js"),
        d = e("./components/video-modals.js"),
        f = e("./components/swiftypeAutocomplete");
      e("./exports.js"), n(function() {
        r.init(), f.init(), o.init(), s.init(), a.init(), l.init(), c.init(), u.init(), d.init()
      })
    }, {
      "./components/home-animations.js": 3,
      "./components/home-events.js": 4,
      "./components/nav.js": 5,
      "./components/particles-setup.js": 6,
      "./components/slick-sliders.js": 7,
      "./components/swiftypeAutocomplete": 8,
      "./components/tabs.js": 9,
      "./components/timeline-effects.js": 10,
      "./components/video-modals.js": 11,
      "./exports.js": 12
    }],
    2: [function(e, t, i) {
      jQuery;
      var l = function(e) {
        return e * (Math.PI / 180)
      };
      i.getDistanceFromLatLonInKm = function(e, t, i, n) {
        var r = l(i - e),
          o = l(n - t),
          s = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(l(e)) * Math.cos(l(i)) * Math.sin(o / 2) * Math.sin(o / 2),
          a = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)) * 6371;
        return Math.round(a)
      }, i.getLocalCoords = function(e) {
        var t = {
          lat: null,
          lon: null
        };
        return e.getResponseHeader("X-geo-long") && (t.lon = e.getResponseHeader("X-geo-long")), e.getResponseHeader("X-geo-lat") && (t.lat = e.getResponseHeader("X-geo-lat")), !(!t.lat || !t.lon) && t
      }
    }, {}],
    3: [function(e, t, i) {
      var n = jQuery,
        r = function(e, t) {
          t = void 0 !== t ? t : 0;
          var i = n(window).scrollTop() + n(window).height();
          return n(e).offset().top + t <= i
        };
      i.init = function() {
        n(".home-4up-animation, .case-study-slider-group").each(function(e) {
          var t = this;
          n(window).on("scroll", function() {
            r(t, 200) && n(t).addClass("visible")
          })
        })
      }
    }, {}],
    4: [function(e, t, i) {
      var n = jQuery;
      i.init = function() {
        var d = n(".js-events-home");
        0 != d.length && n.get("/api/events.json", function(e) {
          var t = JSON.parse(e),
            c = Date.now() + 26784e5,
            u = 0;
          t.forEach(function(e) {
            var t = e.Description ? e.Description.substring(0, 40) + "..." : "Click for more for details",
              i = Date.parse(e.Date.split(" ")[0]);
            if (!(c < i || 2 < u)) {
              var n, r = new Date(i).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              });
              switch (e.Type) {
                case "Conference":
                  n = "conference";
                  break;
                case "Training":
                  n = "training";
                  break;
                case "Meetup":
                  n = "meetup";
                  break;
                case "Webinar":
                  n = "webinar"
              }
              var o = "<div class='event-item " + n + "'><a href='" + e.Url + "'>",
                s = "<div class='date'>" + r + "</div>",
                a = "";
              e.City && (a = "<div class='location'>" + e.City + "</div>"), e.Type;
              var l = o + s + "<h4 class='event-title'>" + e.SourceTitle + "</h4>" + a + "<div class='description'>" + t + "</div></a></div>";
              d.append(l), u++
            }
          })
        }).done(function() {
          Foundation.reInit("equalizer")
        })
      }
    }, {}],
    5: [function(e, t, i) {
      var l = jQuery,
        n = function() {
          l("#mega-menu-menu-2 li.mega-menu-item").on("open_panel", function() {
            l("#mega-menu-menu-1").data("maxmegamenu").hideAllPanels()
          }), l("#mega-menu-menu-1 li.mega-menu-item").on("open_panel", function() {
            l("#mega-menu-menu-2").data("maxmegamenu").hideAllPanels()
          })
        },
        r = function(e, t, i) {
          var n = document.documentElement.clientWidth,
            r = (i = void 0 !== i && i, l(e)),
            o = l(t),
            s = o.offset(),
            a = (parseFloat(o.css("padding-left")), s.left);
          l(".testimonial_rotator_prev"), l(".testimonial_rotator_next");
          910 < l(window).width() ? (r.css({
            width: n,
            left: -a,
            "padding-left": a,
            "padding-right": a
          }), !0 === i && r.css({
            "margin-left": -s,
            "padding-left": 0,
            "padding-right": 0
          })) : r.attr("style", "")
        };
      i.init = function() {
        0 < l(".submenu-wrapper").length && (r(".submenu-wrapper", "#responsive-menu"), l(window).on("resize", Foundation.util.throttle(function() {
          r(".submenu-wrapper", "#responsive-menu")
        }, 300)));
        var e = l(".title-bar button");
        0 < e.length && e.on("click", function() {
          l("html, body").animate({
            scrollTop: 0
          }, "fast"), l(this).toggleClass("is-opened")
        }), n()
      }
    }, {}],
    6: [function(e, t, i) {
      var n = jQuery;
      i.init = function() {
        0 !== n("#js-particles-home-hero").length && particlesJS("js-particles-home-hero", {
          particles: {
            number: {
              value: 60,
              density: {
                enable: !0,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: !1,
              anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
              }
            },
            size: {
              value: 8,
              random: !0,
              anim: {
                enable: !1,
                speed: 35,
                size_min: 1,
                sync: !1
              }
            },
            line_linked: {
              enable: !0,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2
            },
            move: {
              enable: !0,
              speed: 5,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !0,
                mode: "grab"
              },
              onclick: {
                enable: !1,
                mode: "push"
              },
              resize: !0
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: .4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: !0
        })
      }
    }, {}],
    7: [function(e, t, i) {
      var n = jQuery;
      i.init = function() {
        n(".slick-slider").not(".slick-initialized").slick({
          autoplay: !0,
          speed: 1e3,
          arrows: !1
        }), n(".logo-strip .gallery-grid").not(".slick-initialized").slick({
          slidesToShow: 5,
          slidesToScroll: 5,
          autoplay: !0,
          arrows: !1,
          speed: 500,
          responsive: [{
            breakpoint: 640,
            settings: {
              slidesToShow: 3
            }
          }]
        }), n(".js-slider--neo-staff-leadership").not(".slick-initialized").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: !0,
          speed: 800,
          dots: !0,
          arrows: !0,
          responsive: [{
            breakpoint: 1140,
            settings: {
              arrows: !1
            }
          }, {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: !1
            }
          }]
        }), n(".js-slider--neo-staff-benefits").not(".slick-initialized").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: !0,
          speed: 800,
          dots: !0,
          arrows: !1,
          variableWidth: !0,
          centerMode: !0
        })
      }
    }, {}],
    8: [function(e, t, i) {
      var n = jQuery;
      e("../vendor/jquery.swiftype.autocomplete.js");
      i.init = function() {
        "undefined" != typeof neo_sts_params && n('#s, .js-search-nav, .mega-search input[type="text"]').swiftype({
          engineKey: neo_sts_params.engineKey
        })
      }
    }, {
      "../vendor/jquery.swiftype.autocomplete.js": 13
    }],
    9: [function(e, t, i) {
      var n = jQuery,
        r = function() {
          n(".made-of-row-1 a").click(function() {
            n(".made-of-row-2 .is-active").removeClass("is-active"), n(".made-of-row-2 .tabs-title a").attr("aria-selected", "false").attr("tabindex", -1)
          }), n(".made-of-row-2 a").click(function() {
            n(".made-of-row-1 .is-active").removeClass("is-active").attr("aria-hidden", "true"), n(".made-of-row-1 .tabs-title a").attr("aria-selected", "false").attr("tabindex", -1)
          })
        };
      i.init = function() {
        r()
      }
    }, {}],
    10: [function(e, t, i) {
      var o = jQuery,
        n = function(e) {
          var t = o(window).scrollTop(),
            i = t + o(window).height(),
            n = o(e).offset().top,
            r = n + o(e).height() + 100;
          return t <= r && n <= i && r <= i && t <= n
        };
      i.init = function() {
        o(".cards--timeline .card").each(function(e) {
          var t = this;
          o(window).on("scroll", Foundation.util.throttle(function() {
            n(t) && o(t).addClass("visible")
          }, 150))
        })
      }
    }, {}],
    11: [function(e, t, i) {
      var o = jQuery;
      i.init = function() {
        o(".reveal").on("open.zf.reveal", function() {
          var e = o(this),
            t = e.find("iframe").eq(0),
            i = t.attr("data-src");
          t.attr("src", i);
          var n = e.find("iframe.slideshare-embed"),
            r = n.attr("data-src");
          n.attr("src", r)
        }), o(".reveal").on("closed.zf.reveal", function() {
          var e = o(this);
          setTimeout(function() {
            e.find("iframe").eq(0).attr("src", ""), e.find("iframe.slideshare-embed").attr("src", "")
          }, 1e3)
        })
      }
    }, {}],
    12: [function(i, e, t) {
      (function(e) {
        var t = e.neo || {};
        t.geoIP = i("./components/geoip.js"), e.neo = t
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
      "./components/geoip.js": 2
    }],
    13: [function(e, t, i) {
      ! function(d) {
        var e = function(e) {
          var t, i, n = {};
          if ("" === e) return {};
          for (t = 0; t < e.length; t += 1) 2 === (i = e[t].split("=")).length && (n[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
          return n
        };
        d.queryParams = function() {
          return e(window.location.search.substr(1).split("&"))
        }, d.hashParams = function() {
          return e(window.location.hash.substr(1).split("&"))
        };
        var f = 0;
        window.Swiftype = window.Swiftype || {}, Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com", Swiftype.pingUrl = function(e, t) {
          var i = setTimeout(t, 350),
            n = new Image;
          return n.onload = n.onerror = function() {
            clearTimeout(i), t()
          }, n.src = e, !1
        }, Swiftype.pingAutoSelection = function(e, t, i, n) {
          var r = {
              t: (new Date).getTime(),
              engine_key: e,
              doc_id: t,
              prefix: i
            },
            o = Swiftype.root_url + "/api/v1/public/analytics/pas?" + d.param(r);
          Swiftype.pingUrl(o, n)
        }, Swiftype.findSelectedSection = function() {
          var t = d.hashParams().sts;

          function i(e) {
            var t = e.replace(/\s+/g, "");
            return t = t.toLowerCase()
          }
          t && (t = i(t), d("h1, h2, h3, h4, h5, h6").each(function(e) {
            if ($this = d(this), 0 <= i($this.text()).indexOf(t)) return this.scrollIntoView(!0), !1
          }))
        }, Swiftype.htmlEscape = Swiftype.htmlEscape || function(e) {
          return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }, d.fn.swiftype = function(u) {
          Swiftype.findSelectedSection();
          u = d.extend({}, d.fn.swiftype.defaults, u);
          return this.each(function() {
            var n = d(this),
              r = d.meta ? d.extend({}, u, n.data()) : u;
            n.attr("autocomplete", "off"), n.data("swiftype-config-autocomplete", r), n.submitted = !1, n.cache = new g(10), n.emptyQueries = [], n.isEmpty = function(e) {
              return 0 <= d.inArray(p(e), this.emptyQueries)
            }, n.addEmpty = function(e) {
              n.emptyQueries.unshift(p(e))
            };
            var e = r.dropdownStylesFunction(n),
              t = d('<div class="' + r.widgetContainerClass + '" />'),
              i = d("<div />").addClass(r.suggestionListClass).appendTo(t).css(e).hide();
            t.appendTo(r.autocompleteContainingElement);
            var o, s = d("<" + r.suggestionListType + " />").appendTo(i);
            n.data("swiftype-list", s), n.abortCurrent = function() {
              n.currentRequest && n.currentRequest.abort()
            }, n.showList = function() {
              !1 === m(r.disableAutocomplete) && i.show()
            }, n.hideList = function(e) {
              e ? i.hide() : setTimeout(function() {
                i.hide()
              }, 10)
            }, n.showNoResults = function() {
              s.empty(), void 0 === r.noResultsMessage ? n.hideList() : (s.append(d("<li />", {
                class: r.noResultsClass
              }).text(r.noResultsMessage)), n.showList())
            }, n.focused = function() {
              return n.is(":focus")
            }, n.submitting = function() {
              n.submitted = !0
            }, n.listResults = function() {
              return d(r.resultListSelector, s).filter(":not(." + r.noResultsClass + ")")
            }, n.activeResult = function() {
              return n.listResults().filter("." + r.activeItemClass).first()
            }, n.prevResult = function() {
              var e = n.listResults(),
                t = e.index(n.activeResult()) - 1,
                i = e.eq(t);
              n.listResults().removeClass(r.activeItemClass), 0 <= t && i.addClass(r.activeItemClass)
            }, n.nextResult = function() {
              var e = n.listResults(),
                t = e.index(n.activeResult()) + 1,
                i = e.eq(t);
              n.listResults().removeClass(r.activeItemClass), 0 <= t && i.addClass(r.activeItemClass)
            }, n.selectedCallback = function(t) {
              return function() {
                var e = n.val();
                Swiftype.pingAutoSelection(r.engineKey, t.id, e, function() {
                  r.onComplete(t, e)
                })
              }
            }, n.registerResult = function(e, t) {
              e.data("swiftype-item", t), e.click(n.selectedCallback(t)).mouseover(function() {
                n.listResults().removeClass(r.activeItemClass), e.addClass(r.activeItemClass)
              })
            };
            var a = !(n.getContext = function() {
              return {
                config: r,
                list: s,
                registerResult: n.registerResult
              }
            });
            n.lastValue = "", n.keyup(function(e) {
              a ? a = !1 : 36 < e.which && e.which < 41 || 16 == e.which || (0 < r.typingDelay ? (clearTimeout(o), o = setTimeout(function() {
                h(n)
              }, r.typingDelay)) : h(n))
            }), n.styleDropdown = function() {
              i.css(r.dropdownStylesFunction(n))
            }, d(window).resize(function(e) {
              n.styleDropdown()
            }), n.keydown(function(e) {
              n.styleDropdown();
              var t = n.activeResult();
              switch (e.which) {
                case 13:
                  0 !== t.length && s.is(":visible") ? (e.preventDefault(), n.selectedCallback(t.data("swiftype-item"))()) : n.currentRequest && n.submitting(), n.hideList(), a = !0;
                  break;
                case 38:
                  e.preventDefault(), 0 === t.length ? n.listResults().last().addClass(r.activeItemClass) : n.prevResult();
                  break;
                case 40:
                  e.preventDefault(), 0 === t.length ? n.listResults().first().addClass(r.activeItemClass) : t != n.listResults().last() && n.nextResult();
                  break;
                case 27:
                  n.hideList(), a = !0;
                  break;
                default:
                  n.submitted = !1
              }
            }), n.keypress(function(e) {
              13 == e.which && 0 < n.activeResult().length && e.preventDefault()
            });
            var l = !1,
              c = !1;
            d(document).bind("mousedown.swiftype" + ++f, function() {
              l = !0
            }), d(document).bind("mouseup.swiftype" + f, function() {
              l = !1, c && (c = !1, n.hideList())
            }), n.blur(function() {
              l ? c = !0 : n.hideList()
            }), n.focus(function() {
              setTimeout(function() {
                n.select()
              }, 10), 0 < n.listResults().length && n.showList()
            })
          })
        };
        var p = function(e) {
            return d.trim(e).toLowerCase()
          },
          i = function(e, t) {
            var i = p(t);
            if (e.isEmpty(i)) e.showNoResults();
            else {
              var n = e.cache.get(i);
              n ? o(e, n, t) : function(i, n) {
                i.abortCurrent();
                var e = {},
                  t = i.data("swiftype-config-autocomplete");
                e.q = n, e.engine_key = t.engineKey, e.search_fields = m(t.searchFields), e.fetch_fields = m(t.fetchFields), e.filters = m(t.filters), e.document_types = m(t.documentTypes), e.functional_boosts = m(t.functionalBoosts), e.sort_field = m(t.sortField), e.sort_direction = m(t.sortDirection), e.per_page = t.resultLimit, e.highlight_fields = t.highlightFields;
                var r = Swiftype.root_url + "/api/v1/public/engines/suggest.json";
                i.currentRequest = d.ajax({
                  type: "GET",
                  dataType: "jsonp",
                  url: r,
                  data: e
                }).done(function(e) {
                  var t = p(n);
                  if (!(0 < e.record_count)) return i.addEmpty(t), void i.showNoResults();
                  i.cache.put(t, e.records), o(i, e.records, n)
                })
              }(e, t)
            }
          },
          h = function(e) {
            var t = e.val();
            if (t !== e.lastValue) {
              if (e.lastValue = t, "" === d.trim(t)) return e.data("swiftype-list").empty(), void e.hideList();
              void 0 !== e.data("swiftype-config-autocomplete").engineKey && i(e, t)
            }
          },
          o = function(e, t, i) {
            var n = e.data("swiftype-list"),
              r = e.data("swiftype-config-autocomplete");
            n.empty(), e.hideList(!0), r.resultRenderFunction(e.getContext(), t), (0 < e.listResults().length && e.focused() || void 0 !== r.noResultsMessage) && (e.submitted ? e.submitted = !1 : e.showList())
          },
          m = function(e) {
            if (void 0 !== e) {
              var t = e;
              return "function" == typeof t && (t = t.call()), t
            }
          };

        function g(e) {
          this.size = 0, this.limit = e, this._keymap = {}
        }
        g.prototype.put = function(e, t) {
          var i = {
            key: e,
            value: t
          };
          if (this._keymap[e] = i, this.tail ? (this.tail.newer = i).older = this.tail : this.head = i, this.tail = i, this.size === this.limit) return this.shift();
          this.size++
        }, g.prototype.shift = function() {
          var e = this.head;
          return e && (this.head.newer ? (this.head = this.head.newer, this.head.older = void 0) : this.head = void 0, e.newer = e.older = void 0, delete this._keymap[e.key]), e
        }, g.prototype.get = function(e, t) {
          var i = this._keymap[e];
          if (void 0 !== i) return i === this.tail ? i.value : (i.newer && (i === this.head && (this.head = i.newer), i.newer.older = i.older), i.older && (i.older.newer = i.newer), i.newer = void 0, i.older = this.tail, this.tail && (this.tail.newer = i), this.tail = i, t ? i : i.value)
        }, g.prototype.remove = function(e) {
          var t = this._keymap[e];
          if (t) return delete this._keymap[t.key], t.newer && t.older ? (t.older.newer = t.newer, t.newer.older = t.older) : t.newer ? (t.newer.older = void 0, this.head = t.newer) : t.older ? (t.older.newer = void 0, this.tail = t.older) : this.head = this.tail = void 0, this.size--, t.value
        }, g.prototype.clear = function() {
          this.head = this.tail = void 0, this.size = 0, this._keymap = {}
        }, g.prototype.keys = "function" == typeof Object.keys ? function() {
          return Object.keys(this._keymap)
        } : function() {
          var e = [];
          for (var t in this._keymap) e.push(t);
          return e
        }, d.fn.swiftype.defaults = {
          activeItemClass: "active",
          attachTo: void 0,
          documentTypes: void 0,
          filters: void 0,
          engineKey: void 0,
          searchFields: void 0,
          functionalBoosts: void 0,
          sortField: void 0,
          sortDirection: void 0,
          fetchFields: void 0,
          highlightFields: void 0,
          noResultsClass: "noResults",
          noResultsMessage: void 0,
          onComplete: function(e, t) {
            window.location = e.url
          },
          resultRenderFunction: function(n, e) {
            var r = n.list,
              o = n.config;
            d.each(e, function(i, e) {
              d.each(e, function(e, t) {
                n.registerResult(d("<li>" + o.renderFunction(i, t) + "</li>").appendTo(r), t)
              })
            })
          },
          renderFunction: function(e, t) {
            return '<p class="title">' + Swiftype.htmlEscape(t.title) + "</p>"
          },
          dropdownStylesFunction: function(e) {
            var t = e.data("swiftype-config-autocomplete"),
              i = t.attachTo ? d(t.attachTo) : e,
              n = i.offset(),
              r = {
                position: "absolute",
                "z-index": 9997,
                top: n.top + i.outerHeight() - 1,
                left: n.left + 1
              };
            return t.setWidth && (r.width = i.outerWidth() - 2), r
          },
          resultLimit: void 0,
          suggestionListType: "ul",
          suggestionListClass: "autocomplete",
          resultListSelector: "li",
          setWidth: !0,
          typingDelay: 80,
          disableAutocomplete: !1,
          autocompleteContainingElement: "body",
          widgetContainerClass: "swiftype-widget"
        }
      }(jQuery)
    }, {}]
  }, {}, [1]), CodeMirror.colorize = function() {
  var n = /^(p|li|div|h\\d|pre|blockquote|td)$/;

  function s(e, t) {
    if (3 == e.nodeType) return t.push(e.nodeValue);
    for (var i = e.firstChild; i; i = i.nextSibling) s(i, t), n.test(e.nodeType) && t.push("\n")
  }
  return function(e, t) {
    e || (e = document.body.getElementsByTagName("pre"));
    for (var i = 0; i < e.length; ++i) {
      var n = e[i],
        r = n.getAttribute("data-lang") || t;
      if (r) {
        var o = [];
        s(n, o), n.innerHTML = "", CodeMirror.runMode(o.join(""), r, n), n.className += " cm-s-default"
      }
    }
  }
}(),
  function(n) {
    n(document).foundation().ready(function() {
      var e = n(window).width(),
        i = n(window).height();

      function t(e) {
        var t = n(e).find(".fixed-cta");
        t.toggleClass("fixed", n(window).scrollTop() + i - t.height() < n(e).data("top"))
      }
      n(".single-use_cases") && (n(".use-case-footer-cta").each(function() {
        var e;
        n(e = this).data("top", n(e).offset().top), t(this)
      }), n(window).scroll(function() {
        768 < e && n(".use-case-footer-cta").each(function() {
          t(this)
        })
      }), n(".toggle-extra-items .toggle-arrow").click(function(e) {
        e.preventDefault(), n(this).toggleClass("on", 1e3, "easeOutSine"), n(this).closest(".toggle-extra-items").find(".extra-item").slideToggle("slow"), n(this).prev(".button.more").fadeToggle(500)
      }))
    })
  }(jQuery);
try {
  Typekit.load()
} catch (e) {}
