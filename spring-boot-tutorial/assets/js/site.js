!function() {
    "use strict";
    var c, s, r, o = /^sect(\d)$/, n = document.querySelector(".nav-container"), i = document.querySelector(".nav-toggle"), l = (i.addEventListener("click", function(e) {
        if (i.classList.contains("is-active"))
            return u(e);
        var t = document.documentElement;
        t.classList.add("is-clipped--nav"),
        i.classList.add("is-active"),
        n.classList.add("is-active"),
        t.addEventListener("click", u),
        v(e)
    }),
    n.addEventListener("click", v),
    n.querySelector("[data-panel=menu]"));
    function e() {
        var e, t, n = window.location.hash;
        if (n && (n.indexOf("%") && (n = decodeURIComponent(n)),
        !(e = l.querySelector('.nav-link[href="' + n + '"]')))) {
            n = document.getElementById(n.slice(1));
            if (n)
                for (var i = n, a = document.querySelector("article.doc"); (i = i.parentNode) && i !== a; ) {
                    var c = i.id;
                    if ((c = !c && (c = i.className.match(o)) ? (i.firstElementChild || {}).id : c) && (e = l.querySelector('.nav-link[href="#' + c + '"]')))
                        break
                }
        }
        if (e)
            t = e.parentNode;
        else {
            if (!r)
                return;
            e = (t = r).querySelector(".nav-link")
        }
        t !== s && (f(l, ".nav-item.is-active").forEach(function(e) {
            e.classList.remove("is-active", "is-current-path", "is-current-page")
        }),
        t.classList.add("is-current-page"),
        d(s = t),
        m(l, e))
    }
    function d(e) {
        for (var t, n = e.parentNode; !(t = n.classList).contains("nav-menu"); )
            "LI" === n.tagName && t.contains("nav-item") && t.add("is-active", "is-current-path"),
            n = n.parentNode;
        e.classList.add("is-active")
    }
    function a() {
        this.classList.toggle("is-active")
    }
    function u(e) {
        var t = document.documentElement;
        t.classList.remove("is-clipped--nav"),
        i.classList.remove("is-active"),
        n.classList.remove("is-active"),
        t.removeEventListener("click", u),
        v(e)
    }
    function v(e) {
        e.stopPropagation()
    }
    function m(e, t) {
        var n = e.getBoundingClientRect()
          , i = n.height
          , a = window.getComputedStyle(c);
        "sticky" === a.position && (i -= n.top - parseFloat(a.top)),
        e.scrollTop = Math.max(0, .5 * (t.getBoundingClientRect().height - i) + t.offsetTop)
    }
    function f(e, t) {
        return [].slice.call(e.querySelectorAll(t))
    }
    l && (c = n.querySelector(".nav"),
    s = l.querySelector(".is-current-page"),
    (r = s) ? (d(s),
    m(l, s.querySelector(".nav-link"))) : l.scrollTop = 0,
    f(l, ".nav-item-toggle").forEach(function(e) {
        var t = e.parentElement
          , e = (e.addEventListener("click", a.bind(t)),
        function(e, t) {
            e = e.nextElementSibling;
            if (e)
                return (!t || e[e.matches ? "matches" : "msMatchesSelector"](t)) && e
        }(e, ".nav-text"));
        e && (e.style.cursor = "pointer",
        e.addEventListener("click", a.bind(t)))
    }),
    /*
    c.querySelector(".context").addEventListener("click", function() {
        var e = c.querySelector(".is-active[data-panel]")
          , t = "menu" === e.dataset.panel ? "explore" : "menu";
        e.classList.toggle("is-active"),
        c.querySelector("[data-panel=" + t + "]").classList.toggle("is-active")
    }),*/
    l.addEventListener("mousedown", function(e) {
        1 < e.detail && e.preventDefault()
    }),
    l.querySelector('.nav-link[href^="#"]') && (window.location.hash && e(),
    window.addEventListener("hashchange", e)))
}();
!function() {
    "use strict";
    var e = document.querySelector("aside.toc.sidebar");
    if (e) {
        if (document.querySelector("body.-toc"))
            return e.parentNode.removeChild(e);
        var t = parseInt(e.dataset.levels || 2);
        if (!(t < 0)) {
            for (var d, c, a = document.querySelector("article.doc"), n = [], o = 0; o <= t; o++)
                n.push(o ? ".sect" + o + ">h" + (o + 1) + "[id]" : "h1[id].sect0");
            if (i = n.join(","),
            !(d = [].slice.call((a || document).querySelectorAll(i))).length)
                return e.parentNode.removeChild(e);
            var s = {}
              , l = d.reduce(function(e, t) {
                var n = document.createElement("a")
                  , o = (n.textContent = t.textContent,
                s[n.href = "#" + t.id] = n,
                document.createElement("li"));
                return o.dataset.level = parseInt(t.nodeName.slice(1)) - 1,
                o.appendChild(n),
                e.appendChild(o),
                e
            }, document.createElement("ul"))
              , i = e.querySelector(".toc-menu")
              , r = (i || ((i = document.createElement("div")).className = "toc-menu"),
            document.createElement("h3"))
              , e = (r.textContent = e.dataset.title || "Contents",
            i.appendChild(r),
            i.appendChild(l),
            !document.getElementById("toc") && a.querySelector("h1.page ~ :not(.is-before-toc)"));
            e && ((r = document.createElement("aside")).className = "toc embedded",
            r.appendChild(i.cloneNode(!0)),
            e.parentNode.insertBefore(r, e)),
            window.addEventListener("load", function() {
                u(),
                window.addEventListener("scroll", u)
            })
        }
    }
    function u() {
        var o, i, t, e = window.pageYOffset, n = 1.15 * m(document.documentElement, "fontSize"), r = a.offsetTop;
        if (e && window.innerHeight + e + 2 >= document.documentElement.scrollHeight)
            return c = Array.isArray(c) ? c : Array(c || 0),
            o = [],
            i = d.length - 1,
            d.forEach(function(e, t) {
                var n = "#" + e.id;
                t === i || e.getBoundingClientRect().top + m(e, "paddingTop") > r ? (o.push(n),
                c.indexOf(n) < 0 && s[n].classList.add("is-active")) : ~c.indexOf(n) && s[c.shift()].classList.remove("is-active")
            }),
            l.scrollTop = l.scrollHeight - l.offsetHeight,
            void (c = 1 < o.length ? o : o[0]);
        Array.isArray(c) && (c.forEach(function(e) {
            s[e].classList.remove("is-active")
        }),
        c = void 0),
        d.some(function(e) {
            if (e.getBoundingClientRect().top + m(e, "paddingTop") - n > r)
                return !0;
            t = "#" + e.id
        }),
        t ? t !== c && (c && s[c].classList.remove("is-active"),
        (e = s[t]).classList.add("is-active"),
        l.scrollHeight > l.offsetHeight && (l.scrollTop = Math.max(0, e.offsetTop + e.offsetHeight - l.offsetHeight)),
        c = t) : c && (s[c].classList.remove("is-active"),
        c = void 0)
    }
    function m(e, t) {
        return parseFloat(window.getComputedStyle(e)[t])
    }
}();
!function() {
    "use strict";
    var o = document.querySelector("article.doc")
      , t = document.querySelector(".toolbar");
    function i(e) {
        return e && (~e.indexOf("%") ? decodeURIComponent(e) : e).slice(1)
    }
    function c(e) {
        e && (window.location.hash = "#" + this.id,
        e.preventDefault()),
        window.scrollTo(0, function e(t, n) {
            return o.contains(t) ? e(t.offsetParent, t.offsetTop + n) : n
        }(this, 0) - t.getBoundingClientRect().bottom)
    }
    window.addEventListener("load", function e(t) {
        var n;
        (n = i(window.location.hash)) && (n = document.getElementById(n)) && (c.bind(n)(),
        setTimeout(c.bind(n), 0)),
        window.removeEventListener("load", e)
    }),
    Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e) {
        var t;
        (t = i(e.hash)) && (t = document.getElementById(t)) && e.addEventListener("click", c.bind(t))
    })
}();
!function() {
    "use strict";
    var t, e = document.querySelector(".page-versions .version-menu-toggle");
    e && (t = document.querySelector(".page-versions"),
    e.addEventListener("click", function(e) {
        t.classList.toggle("is-active"),
        e.stopPropagation()
    }),
    document.documentElement.addEventListener("click", function() {
        t.classList.remove("is-active")
    }))
}();
document.addEventListener("DOMContentLoaded", function() {
    var t = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    0 !== t.length && t.forEach(function(e) {
        e.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.classList.toggle("is-active"),
            document.getElementById(e.dataset.target).classList.toggle("is-active"),
            document.documentElement.classList.toggle("is-clipped--navbar")
        })
    })
});
!function() {
    "use strict";
    var l = window.location.hash;
    function o(t, a) {
        return Array.prototype.slice.call((a || document).querySelectorAll(t))
    }
    o(".tabset").forEach(function(c) {
        var n, r, t = c.querySelector(".tabs");
        t && (o("li", t).forEach(function(t, a) {
            var e, i, s = (t.querySelector("a[id]") || t).id;
            s && (i = s,
            e = o(".tab-pane", c).find(function(t) {
                return t.getAttribute("aria-labelledby") === i
            }),
            a || (r = {
                tab: t,
                pane: e
            }),
            !n && l === "#" + s && (n = !0) ? (t.classList.add("is-active"),
            e && e.classList.add("is-active")) : a || (t.classList.remove("is-active"),
            e && e.classList.remove("is-active")),
            t.addEventListener("click", function(t) {
                var a = this.tab
                  , e = this.pane;
                o(".tabs li, .tab-pane", this.tabset).forEach(function(t) {
                    t === a || t === e ? t.classList.add("is-active") : t.classList.remove("is-active")
                }),
                t.preventDefault()
            }
            .bind({
                tabset: c,
                tab: t,
                pane: e
            })))
        }),
        !n && r && (r.tab.classList.add("is-active"),
        r.pane && r.pane.classList.add("is-active"))),
        c.classList.remove("is-loading")
    })
}();
document.addEventListener("DOMContentLoaded", function() {
    var o = new URLSearchParams(window.location.search);
    if (o.toString()) {
        for (var e of o.keys())
            !function e(r, n, o) {
                if (void 0 !== r.classList && r.classList.contains("no-query-replace"))
                    return;
                {
                    var a;
                    3 === r.nodeType && (a = r.data,
                    r.data = c(a, n, o))
                }
                if (1 === r.nodeType && "SCRIPT" !== r.nodeName) {
                    for (var t = 0; t < r.childNodes.length; t++)
                        e(r.childNodes[t], n, o);
                    r.href && (r.href = c(r.href, n, o))
                }
            }(document.body, e, o.get(e));
        var r = document.querySelectorAll(".query-params-link, .home-link, .params-link, .nav-link");
        r && r.forEach(n),
        (r = document.querySelectorAll(".breadcrumbs ul li a")) && r.forEach(n),
        (r = document.querySelectorAll("a.page")) && r.forEach(n)
    }
    function n(r) {
        if (o.toString())
            try {
                var e, n = new URL(r.href);
                for (e of o.keys())
                    n.searchParams.set(e, o.get(e));
                r.href = n.toString()
            } catch (e) {
                console.error("Unable to append query string to element [" + r.innerHTML + "]: " + e)
            }
    }
    function c(e, r, n) {
        r = new RegExp("(%25" + r + "%25|%" + r + "%)","gi");
        return e.replace(r, n)
    }
});
