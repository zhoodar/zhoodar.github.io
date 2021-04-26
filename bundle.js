!function () {
    "use strict";
    var t = {
        226: function (t, r, e) {
            t.exports = e.p + "75371f53f06181df75f1.ttf"
        }, 296: function (t, r, e) {
            e(226);
            var n = JSON.parse('{"9739472974927934792347":"Jumabai","9374957239452937459723":"Arthur"}');
            document.getElementById("top").addEventListener("click", (function (t) {
                t.preventDefault(), window.scroll({top: 0, left: 0, behavior: "smooth"})
            })), function (t) {
                let r = location.search.split("=")[1];
                var e;
                e = n[r], document.getElementById("guest-name").innerHTML = e.trim()
            }()
        }
    }, r = {};

    function e(n) {
        var o = r[n];
        if (void 0 !== o) return o.exports;
        var i = r[n] = {exports: {}};
        return t[n](i, i.exports, e), i.exports
    }

    e.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), function () {
        var t;
        e.g.importScripts && (t = e.g.location + "");
        var r = e.g.document;
        if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) {
            var n = r.getElementsByTagName("script");
            n.length && (t = n[n.length - 1].src)
        }
        if (!t) throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), e.p = t
    }(), e(296)
}();