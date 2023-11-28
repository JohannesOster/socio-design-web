
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire35fc"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire35fc"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("gnwtP", function(module, exports) {

$parcel$export(module.exports, "Color", () => Color);
$parcel$export(module.exports, "darker", () => darker);
$parcel$export(module.exports, "brighter", () => brighter);
$parcel$export(module.exports, "default", () => color);
$parcel$export(module.exports, "hslConvert", () => hslConvert);
$parcel$export(module.exports, "Rgb", () => Rgb);
$parcel$export(module.exports, "rgbConvert", () => rgbConvert);
$parcel$export(module.exports, "rgb", () => rgb);
$parcel$export(module.exports, "hsl", () => hsl);

var $fa7EJ = parcelRequire("fa7EJ");
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, $fa7EJ.default)(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)(Rgb, rgb, (0, $fa7EJ.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)(Hsl, hsl, (0, $fa7EJ.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

});
parcelRegister("fa7EJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $b09dba7caff40201$export$2e2bcd8739ae039);
$parcel$export(module.exports, "extend", () => $b09dba7caff40201$export$8b58be045bf06082);
function $b09dba7caff40201$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $b09dba7caff40201$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

});




var $e5354b03ec801fa9$var$noop = {
    value: ()=>{}
};
function $e5354b03ec801fa9$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $e5354b03ec801fa9$var$Dispatch(_);
}
function $e5354b03ec801fa9$var$Dispatch(_) {
    this._ = _;
}
function $e5354b03ec801fa9$var$parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
$e5354b03ec801fa9$var$Dispatch.prototype = $e5354b03ec801fa9$var$dispatch.prototype = {
    constructor: $e5354b03ec801fa9$var$Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = $e5354b03ec801fa9$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $e5354b03ec801fa9$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $e5354b03ec801fa9$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $e5354b03ec801fa9$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new $e5354b03ec801fa9$var$Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $e5354b03ec801fa9$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $e5354b03ec801fa9$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $e5354b03ec801fa9$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $e5354b03ec801fa9$export$2e2bcd8739ae039 = $e5354b03ec801fa9$var$dispatch;



function $3febb52ed900509b$var$none() {}
function $3febb52ed900509b$export$2e2bcd8739ae039(selector) {
    return selector == null ? $3febb52ed900509b$var$none : function() {
        return this.querySelector(selector);
    };
}


function $dd899846e9437541$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = (0, $3febb52ed900509b$export$2e2bcd8739ae039)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(subgroups, this._parents);
}



// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function $9924e0fc36ffc89a$export$2e2bcd8739ae039(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


function $9b900e2cd17f235b$var$empty() {
    return [];
}
function $9b900e2cd17f235b$export$2e2bcd8739ae039(selector) {
    return selector == null ? $9b900e2cd17f235b$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}


function $ce679b51bd5464d2$var$arrayAll(select) {
    return function() {
        return (0, $9924e0fc36ffc89a$export$2e2bcd8739ae039)(select.apply(this, arguments));
    };
}
function $ce679b51bd5464d2$export$2e2bcd8739ae039(select) {
    if (typeof select === "function") select = $ce679b51bd5464d2$var$arrayAll(select);
    else select = (0, $9b900e2cd17f235b$export$2e2bcd8739ae039)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(subgroups, parents);
}


function $eaa0ec83d721630f$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}
function $eaa0ec83d721630f$export$90c2759c036528(selector) {
    return function(node) {
        return node.matches(selector);
    };
}


var $42aa38e209f238c1$var$find = Array.prototype.find;
function $42aa38e209f238c1$var$childFind(match) {
    return function() {
        return $42aa38e209f238c1$var$find.call(this.children, match);
    };
}
function $42aa38e209f238c1$var$childFirst() {
    return this.firstElementChild;
}
function $42aa38e209f238c1$export$2e2bcd8739ae039(match) {
    return this.select(match == null ? $42aa38e209f238c1$var$childFirst : $42aa38e209f238c1$var$childFind(typeof match === "function" ? match : (0, $eaa0ec83d721630f$export$90c2759c036528)(match)));
}



var $4c12ee8a296f36ec$var$filter = Array.prototype.filter;
function $4c12ee8a296f36ec$var$children() {
    return Array.from(this.children);
}
function $4c12ee8a296f36ec$var$childrenFilter(match) {
    return function() {
        return $4c12ee8a296f36ec$var$filter.call(this.children, match);
    };
}
function $4c12ee8a296f36ec$export$2e2bcd8739ae039(match) {
    return this.selectAll(match == null ? $4c12ee8a296f36ec$var$children : $4c12ee8a296f36ec$var$childrenFilter(typeof match === "function" ? match : (0, $eaa0ec83d721630f$export$90c2759c036528)(match)));
}




function $88836b32e0a275f2$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = (0, $eaa0ec83d721630f$export$2e2bcd8739ae039)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(subgroups, this._parents);
}



function $bebc9d4ed04eb46b$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}



function $e03a0d5478c8b267$export$2e2bcd8739ae039() {
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(this._enter || this._groups.map((0, $bebc9d4ed04eb46b$export$2e2bcd8739ae039)), this._parents);
}
function $e03a0d5478c8b267$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$e03a0d5478c8b267$export$67b01759a14cf6a4.prototype = {
    constructor: $e03a0d5478c8b267$export$67b01759a14cf6a4,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};


function $715212283e03896e$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $b85b5e6212be4dc5$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, $e03a0d5478c8b267$export$67b01759a14cf6a4)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $b85b5e6212be4dc5$var$bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new (0, $e03a0d5478c8b267$export$67b01759a14cf6a4)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function $b85b5e6212be4dc5$var$datum(node) {
    return node.__data__;
}
function $b85b5e6212be4dc5$export$2e2bcd8739ae039(value, key) {
    if (!arguments.length) return Array.from(this, $b85b5e6212be4dc5$var$datum);
    var bind = key ? $b85b5e6212be4dc5$var$bindKey : $b85b5e6212be4dc5$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, $715212283e03896e$export$2e2bcd8739ae039)(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = $b85b5e6212be4dc5$var$arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function $b85b5e6212be4dc5$var$arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}





function $f14031d948e1de43$export$2e2bcd8739ae039() {
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(this._exit || this._groups.map((0, $bebc9d4ed04eb46b$export$2e2bcd8739ae039)), this._parents);
}


function $27c8b63464c5fccf$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}



function $d025cfaea4c02a7b$export$2e2bcd8739ae039(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(merges, this._parents);
}


function $ed2e5735338611eb$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}



function $d181e4edf656ee7b$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $d181e4edf656ee7b$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)(sortgroups, this._parents).order();
}
function $d181e4edf656ee7b$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


function $685a4943ecd8030c$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}


function $dc1ee22dedcc6583$export$2e2bcd8739ae039() {
    return Array.from(this);
}


function $d64ac4b710b2ae64$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}


function $5b0e335430d66e8c$export$2e2bcd8739ae039() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}


function $de0eea0c2fcc5d98$export$2e2bcd8739ae039() {
    return !this.node();
}


function $258db6e928338846$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}


var $d669ad0760193831$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $d669ad0760193831$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $d669ad0760193831$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};


function $861077efbce665f7$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return (0, $d669ad0760193831$export$2e2bcd8739ae039).hasOwnProperty(prefix) ? {
        space: (0, $d669ad0760193831$export$2e2bcd8739ae039)[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}


function $4bce6365a3047be4$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $4bce6365a3047be4$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $4bce6365a3047be4$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $4bce6365a3047be4$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $4bce6365a3047be4$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $4bce6365a3047be4$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $4bce6365a3047be4$export$2e2bcd8739ae039(name, value) {
    var fullname = (0, $861077efbce665f7$export$2e2bcd8739ae039)(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $4bce6365a3047be4$var$attrRemoveNS : $4bce6365a3047be4$var$attrRemove : typeof value === "function" ? fullname.local ? $4bce6365a3047be4$var$attrFunctionNS : $4bce6365a3047be4$var$attrFunction : fullname.local ? $4bce6365a3047be4$var$attrConstantNS : $4bce6365a3047be4$var$attrConstant)(fullname, value));
}


function $bee90cff031655e0$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
}


function $f63d26255e0880d2$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $f63d26255e0880d2$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $f63d26255e0880d2$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $f63d26255e0880d2$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $f63d26255e0880d2$var$styleRemove : typeof value === "function" ? $f63d26255e0880d2$var$styleFunction : $f63d26255e0880d2$var$styleConstant)(name, value, priority == null ? "" : priority)) : $f63d26255e0880d2$export$5e3cec964f0b5efd(this.node(), name);
}
function $f63d26255e0880d2$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || (0, $bee90cff031655e0$export$2e2bcd8739ae039)(node).getComputedStyle(node, null).getPropertyValue(name);
}


function $3f952ead5b36195b$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $3f952ead5b36195b$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $3f952ead5b36195b$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $3f952ead5b36195b$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $3f952ead5b36195b$var$propertyRemove : typeof value === "function" ? $3f952ead5b36195b$var$propertyFunction : $3f952ead5b36195b$var$propertyConstant)(name, value)) : this.node()[name];
}


function $b9e3739b3c805413$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $b9e3739b3c805413$var$classList(node) {
    return node.classList || new $b9e3739b3c805413$var$ClassList(node);
}
function $b9e3739b3c805413$var$ClassList(node) {
    this._node = node;
    this._names = $b9e3739b3c805413$var$classArray(node.getAttribute("class") || "");
}
$b9e3739b3c805413$var$ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $b9e3739b3c805413$var$classedAdd(node, names) {
    var list = $b9e3739b3c805413$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $b9e3739b3c805413$var$classedRemove(node, names) {
    var list = $b9e3739b3c805413$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $b9e3739b3c805413$var$classedTrue(names) {
    return function() {
        $b9e3739b3c805413$var$classedAdd(this, names);
    };
}
function $b9e3739b3c805413$var$classedFalse(names) {
    return function() {
        $b9e3739b3c805413$var$classedRemove(this, names);
    };
}
function $b9e3739b3c805413$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $b9e3739b3c805413$var$classedAdd : $b9e3739b3c805413$var$classedRemove)(this, names);
    };
}
function $b9e3739b3c805413$export$2e2bcd8739ae039(name, value) {
    var names = $b9e3739b3c805413$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $b9e3739b3c805413$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $b9e3739b3c805413$var$classedFunction : value ? $b9e3739b3c805413$var$classedTrue : $b9e3739b3c805413$var$classedFalse)(names, value));
}


function $347db060a8c7c3eb$var$textRemove() {
    this.textContent = "";
}
function $347db060a8c7c3eb$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $347db060a8c7c3eb$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $347db060a8c7c3eb$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $347db060a8c7c3eb$var$textRemove : (typeof value === "function" ? $347db060a8c7c3eb$var$textFunction : $347db060a8c7c3eb$var$textConstant)(value)) : this.node().textContent;
}


function $b3b79ff9ba1fb838$var$htmlRemove() {
    this.innerHTML = "";
}
function $b3b79ff9ba1fb838$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $b3b79ff9ba1fb838$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $b3b79ff9ba1fb838$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $b3b79ff9ba1fb838$var$htmlRemove : (typeof value === "function" ? $b3b79ff9ba1fb838$var$htmlFunction : $b3b79ff9ba1fb838$var$htmlConstant)(value)) : this.node().innerHTML;
}


function $aede47313cb933bf$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $aede47313cb933bf$export$2e2bcd8739ae039() {
    return this.each($aede47313cb933bf$var$raise);
}


function $6a91847da45fb5be$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $6a91847da45fb5be$export$2e2bcd8739ae039() {
    return this.each($6a91847da45fb5be$var$lower);
}




function $dc2f8779cb428df3$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, $d669ad0760193831$export$201a3f7520ccc326) && document.documentElement.namespaceURI === (0, $d669ad0760193831$export$201a3f7520ccc326) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $dc2f8779cb428df3$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $dc2f8779cb428df3$export$2e2bcd8739ae039(name) {
    var fullname = (0, $861077efbce665f7$export$2e2bcd8739ae039)(name);
    return (fullname.local ? $dc2f8779cb428df3$var$creatorFixed : $dc2f8779cb428df3$var$creatorInherit)(fullname);
}


function $d4c69389a87234ad$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : (0, $dc2f8779cb428df3$export$2e2bcd8739ae039)(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}




function $b45d584a594f366b$var$constantNull() {
    return null;
}
function $b45d584a594f366b$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : (0, $dc2f8779cb428df3$export$2e2bcd8739ae039)(name), select = before == null ? $b45d584a594f366b$var$constantNull : typeof before === "function" ? before : (0, $3febb52ed900509b$export$2e2bcd8739ae039)(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}


function $8175e1977c26bbc5$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $8175e1977c26bbc5$export$2e2bcd8739ae039() {
    return this.each($8175e1977c26bbc5$var$remove);
}


function $ebacae28113199b6$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $ebacae28113199b6$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $ebacae28113199b6$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $ebacae28113199b6$var$selection_cloneDeep : $ebacae28113199b6$var$selection_cloneShallow);
}


function $d438a650732bc4d6$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}


function $6841aee9ad27fb37$var$contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function $6841aee9ad27fb37$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $6841aee9ad27fb37$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $6841aee9ad27fb37$var$onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = $6841aee9ad27fb37$var$contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function $6841aee9ad27fb37$export$2e2bcd8739ae039(typename, value, options) {
    var typenames = $6841aee9ad27fb37$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $6841aee9ad27fb37$var$onAdd : $6841aee9ad27fb37$var$onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}



function $f469efa9a81d117a$var$dispatchEvent(node, type, params) {
    var window = (0, $bee90cff031655e0$export$2e2bcd8739ae039)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $f469efa9a81d117a$var$dispatchConstant(type, params) {
    return function() {
        return $f469efa9a81d117a$var$dispatchEvent(this, type, params);
    };
}
function $f469efa9a81d117a$var$dispatchFunction(type, params) {
    return function() {
        return $f469efa9a81d117a$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $f469efa9a81d117a$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $f469efa9a81d117a$var$dispatchFunction : $f469efa9a81d117a$var$dispatchConstant)(type, params));
}


function* $585a118d7f67559e$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
}


var $7d24a0ccddd34d02$export$e8e78c978b129247 = [
    null
];
function $7d24a0ccddd34d02$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $7d24a0ccddd34d02$var$selection() {
    return new $7d24a0ccddd34d02$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $7d24a0ccddd34d02$export$e8e78c978b129247);
}
function $7d24a0ccddd34d02$var$selection_selection() {
    return this;
}
$7d24a0ccddd34d02$export$52baac22726c72bf.prototype = $7d24a0ccddd34d02$var$selection.prototype = {
    constructor: $7d24a0ccddd34d02$export$52baac22726c72bf,
    select: (0, $dd899846e9437541$export$2e2bcd8739ae039),
    selectAll: (0, $ce679b51bd5464d2$export$2e2bcd8739ae039),
    selectChild: (0, $42aa38e209f238c1$export$2e2bcd8739ae039),
    selectChildren: (0, $4c12ee8a296f36ec$export$2e2bcd8739ae039),
    filter: (0, $88836b32e0a275f2$export$2e2bcd8739ae039),
    data: (0, $b85b5e6212be4dc5$export$2e2bcd8739ae039),
    enter: (0, $e03a0d5478c8b267$export$2e2bcd8739ae039),
    exit: (0, $f14031d948e1de43$export$2e2bcd8739ae039),
    join: (0, $27c8b63464c5fccf$export$2e2bcd8739ae039),
    merge: (0, $d025cfaea4c02a7b$export$2e2bcd8739ae039),
    selection: $7d24a0ccddd34d02$var$selection_selection,
    order: (0, $ed2e5735338611eb$export$2e2bcd8739ae039),
    sort: (0, $d181e4edf656ee7b$export$2e2bcd8739ae039),
    call: (0, $685a4943ecd8030c$export$2e2bcd8739ae039),
    nodes: (0, $dc1ee22dedcc6583$export$2e2bcd8739ae039),
    node: (0, $d64ac4b710b2ae64$export$2e2bcd8739ae039),
    size: (0, $5b0e335430d66e8c$export$2e2bcd8739ae039),
    empty: (0, $de0eea0c2fcc5d98$export$2e2bcd8739ae039),
    each: (0, $258db6e928338846$export$2e2bcd8739ae039),
    attr: (0, $4bce6365a3047be4$export$2e2bcd8739ae039),
    style: (0, $f63d26255e0880d2$export$2e2bcd8739ae039),
    property: (0, $3f952ead5b36195b$export$2e2bcd8739ae039),
    classed: (0, $b9e3739b3c805413$export$2e2bcd8739ae039),
    text: (0, $347db060a8c7c3eb$export$2e2bcd8739ae039),
    html: (0, $b3b79ff9ba1fb838$export$2e2bcd8739ae039),
    raise: (0, $aede47313cb933bf$export$2e2bcd8739ae039),
    lower: (0, $6a91847da45fb5be$export$2e2bcd8739ae039),
    append: (0, $d4c69389a87234ad$export$2e2bcd8739ae039),
    insert: (0, $b45d584a594f366b$export$2e2bcd8739ae039),
    remove: (0, $8175e1977c26bbc5$export$2e2bcd8739ae039),
    clone: (0, $ebacae28113199b6$export$2e2bcd8739ae039),
    datum: (0, $d438a650732bc4d6$export$2e2bcd8739ae039),
    on: (0, $6841aee9ad27fb37$export$2e2bcd8739ae039),
    dispatch: (0, $f469efa9a81d117a$export$2e2bcd8739ae039),
    [Symbol.iterator]: (0, $585a118d7f67559e$export$2e2bcd8739ae039)
};
var $7d24a0ccddd34d02$export$2e2bcd8739ae039 = $7d24a0ccddd34d02$var$selection;


function $cba050cd9a732395$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)([
        [
            selector
        ]
    ], (0, $7d24a0ccddd34d02$export$e8e78c978b129247));
}


// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const $1dc5c35c53e70348$export$524615cd03e458cc = {
    passive: false
};
const $1dc5c35c53e70348$export$35431a0e47022de1 = {
    capture: true,
    passive: false
};
function $1dc5c35c53e70348$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $1dc5c35c53e70348$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


function $03ac00dfa1d6d210$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(view).on("dragstart.drag", (0, $1dc5c35c53e70348$export$2e2bcd8739ae039), (0, $1dc5c35c53e70348$export$35431a0e47022de1));
    if ("onselectstart" in root) selection.on("selectstart.drag", (0, $1dc5c35c53e70348$export$2e2bcd8739ae039), (0, $1dc5c35c53e70348$export$35431a0e47022de1));
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $03ac00dfa1d6d210$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", (0, $1dc5c35c53e70348$export$2e2bcd8739ae039), (0, $1dc5c35c53e70348$export$35431a0e47022de1));
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}



var $gnwtP = parcelRequire("gnwtP");

var $gnwtP = parcelRequire("gnwtP");
function $9122de3154a9264e$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $9122de3154a9264e$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $9122de3154a9264e$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}



function $e3ecae20e036876f$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, $9122de3154a9264e$export$4e41033bfeec1a4c)((t - i / n) * n, v0, v1, v2, v3);
    };
}


var $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039 = (x)=>()=>x;


function $2361b35e2e9e8f0b$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $2361b35e2e9e8f0b$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $2361b35e2e9e8f0b$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039)(isNaN(a) ? b : a);
}
function $2361b35e2e9e8f0b$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $2361b35e2e9e8f0b$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $2361b35e2e9e8f0b$var$exponential(a, b, y) : (0, $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039)(isNaN(a) ? b : a);
    };
}
function $2361b35e2e9e8f0b$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $2361b35e2e9e8f0b$var$linear(a, d) : (0, $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039)(isNaN(a) ? b : a);
}


var $9caa49edbd641456$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = (0, $2361b35e2e9e8f0b$export$a7ebe8cc6aaf8d37)(y);
    function rgb(start, end) {
        var r = color((start = (0, $gnwtP.rgb)(start)).r, (end = (0, $gnwtP.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function $9caa49edbd641456$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, $gnwtP.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var $9caa49edbd641456$export$2c0e28f2e2852d3f = $9caa49edbd641456$var$rgbSpline((0, $9122de3154a9264e$export$2e2bcd8739ae039));
var $9caa49edbd641456$export$53d5214f625ccd4c = $9caa49edbd641456$var$rgbSpline((0, $e3ecae20e036876f$export$2e2bcd8739ae039));



function $ecd95ef43299cd25$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $ecd95ef43299cd25$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


function $5b4e642470afdee0$export$2e2bcd8739ae039(a, b) {
    return ((0, $ecd95ef43299cd25$export$5cd576d1827d40c8)(b) ? (0, $ecd95ef43299cd25$export$2e2bcd8739ae039) : $5b4e642470afdee0$export$15d09067c6a5ee49)(a, b);
}
function $5b4e642470afdee0$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, $b6e2dec750af77c9$export$2e2bcd8739ae039)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}


function $93699ec421e96d53$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}


function $198300671d1ae521$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}



function $ab52d33e87c67a57$export$2e2bcd8739ae039(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = (0, $b6e2dec750af77c9$export$2e2bcd8739ae039)(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}



var $da7be60f84908e05$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $da7be60f84908e05$var$reB = new RegExp($da7be60f84908e05$var$reA.source, "g");
function $da7be60f84908e05$var$zero(b) {
    return function() {
        return b;
    };
}
function $da7be60f84908e05$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $da7be60f84908e05$export$2e2bcd8739ae039(a, b) {
    var bi = $da7be60f84908e05$var$reA.lastIndex = $da7be60f84908e05$var$reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $da7be60f84908e05$var$reA.exec(a)) && (bm = $da7be60f84908e05$var$reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(am, bm)
            });
        }
        bi = $da7be60f84908e05$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $da7be60f84908e05$var$one(q[0].x) : $da7be60f84908e05$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}




function $b6e2dec750af77c9$export$2e2bcd8739ae039(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, $6bc4ae0e1d8e8f2a$export$2e2bcd8739ae039)(b) : (t === "number" ? (0, $198300671d1ae521$export$2e2bcd8739ae039) : t === "string" ? (c = (0, $gnwtP.default)(b)) ? (b = c, $9caa49edbd641456$export$2e2bcd8739ae039) : (0, $da7be60f84908e05$export$2e2bcd8739ae039) : b instanceof (0, $gnwtP.default) ? (0, $9caa49edbd641456$export$2e2bcd8739ae039) : b instanceof Date ? (0, $93699ec421e96d53$export$2e2bcd8739ae039) : (0, $ecd95ef43299cd25$export$5cd576d1827d40c8)(b) ? (0, $ecd95ef43299cd25$export$2e2bcd8739ae039) : Array.isArray(b) ? (0, $5b4e642470afdee0$export$15d09067c6a5ee49) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, $ab52d33e87c67a57$export$2e2bcd8739ae039) : (0, $198300671d1ae521$export$2e2bcd8739ae039))(a, b);
}


function $02666d379292d09d$export$2e2bcd8739ae039(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}


function $f0bcd38abe17c1e0$export$2e2bcd8739ae039(event, node) {
    event = (0, $02666d379292d09d$export$2e2bcd8739ae039)(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}




var $f1f097b5a7611f55$var$frame = 0, $f1f097b5a7611f55$var$timeout = 0, $f1f097b5a7611f55$var$interval = 0, $f1f097b5a7611f55$var$pokeDelay = 1000, $f1f097b5a7611f55$var$taskHead, $f1f097b5a7611f55$var$taskTail, $f1f097b5a7611f55$var$clockLast = 0, $f1f097b5a7611f55$var$clockNow = 0, $f1f097b5a7611f55$var$clockSkew = 0, $f1f097b5a7611f55$var$clock = typeof performance === "object" && performance.now ? performance : Date, $f1f097b5a7611f55$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function $f1f097b5a7611f55$export$461939dd4422153() {
    return $f1f097b5a7611f55$var$clockNow || ($f1f097b5a7611f55$var$setFrame($f1f097b5a7611f55$var$clearNow), $f1f097b5a7611f55$var$clockNow = $f1f097b5a7611f55$var$clock.now() + $f1f097b5a7611f55$var$clockSkew);
}
function $f1f097b5a7611f55$var$clearNow() {
    $f1f097b5a7611f55$var$clockNow = 0;
}
function $f1f097b5a7611f55$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$f1f097b5a7611f55$export$c57e9b2d8b9e4de.prototype = $f1f097b5a7611f55$export$9dc4ecf953986f04.prototype = {
    constructor: $f1f097b5a7611f55$export$c57e9b2d8b9e4de,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $f1f097b5a7611f55$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $f1f097b5a7611f55$var$taskTail !== this) {
            if ($f1f097b5a7611f55$var$taskTail) $f1f097b5a7611f55$var$taskTail._next = this;
            else $f1f097b5a7611f55$var$taskHead = this;
            $f1f097b5a7611f55$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $f1f097b5a7611f55$var$sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $f1f097b5a7611f55$var$sleep();
        }
    }
};
function $f1f097b5a7611f55$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $f1f097b5a7611f55$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $f1f097b5a7611f55$export$d60154c1d7f3990e() {
    $f1f097b5a7611f55$export$461939dd4422153(); // Get the current time, if not already set.
    ++$f1f097b5a7611f55$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $f1f097b5a7611f55$var$taskHead, e;
    while(t){
        if ((e = $f1f097b5a7611f55$var$clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --$f1f097b5a7611f55$var$frame;
}
function $f1f097b5a7611f55$var$wake() {
    $f1f097b5a7611f55$var$clockNow = ($f1f097b5a7611f55$var$clockLast = $f1f097b5a7611f55$var$clock.now()) + $f1f097b5a7611f55$var$clockSkew;
    $f1f097b5a7611f55$var$frame = $f1f097b5a7611f55$var$timeout = 0;
    try {
        $f1f097b5a7611f55$export$d60154c1d7f3990e();
    } finally{
        $f1f097b5a7611f55$var$frame = 0;
        $f1f097b5a7611f55$var$nap();
        $f1f097b5a7611f55$var$clockNow = 0;
    }
}
function $f1f097b5a7611f55$var$poke() {
    var now = $f1f097b5a7611f55$var$clock.now(), delay = now - $f1f097b5a7611f55$var$clockLast;
    if (delay > $f1f097b5a7611f55$var$pokeDelay) $f1f097b5a7611f55$var$clockSkew -= delay, $f1f097b5a7611f55$var$clockLast = now;
}
function $f1f097b5a7611f55$var$nap() {
    var t0, t1 = $f1f097b5a7611f55$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $f1f097b5a7611f55$var$taskHead = t2;
    }
    $f1f097b5a7611f55$var$taskTail = t0;
    $f1f097b5a7611f55$var$sleep(time);
}
function $f1f097b5a7611f55$var$sleep(time) {
    if ($f1f097b5a7611f55$var$frame) return; // Soonest alarm already set, or will be.
    if ($f1f097b5a7611f55$var$timeout) $f1f097b5a7611f55$var$timeout = clearTimeout($f1f097b5a7611f55$var$timeout);
    var delay = time - $f1f097b5a7611f55$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $f1f097b5a7611f55$var$timeout = setTimeout($f1f097b5a7611f55$var$wake, time - $f1f097b5a7611f55$var$clock.now() - $f1f097b5a7611f55$var$clockSkew);
        if ($f1f097b5a7611f55$var$interval) $f1f097b5a7611f55$var$interval = clearInterval($f1f097b5a7611f55$var$interval);
    } else {
        if (!$f1f097b5a7611f55$var$interval) $f1f097b5a7611f55$var$clockLast = $f1f097b5a7611f55$var$clock.now(), $f1f097b5a7611f55$var$interval = setInterval($f1f097b5a7611f55$var$poke, $f1f097b5a7611f55$var$pokeDelay);
        $f1f097b5a7611f55$var$frame = 1, $f1f097b5a7611f55$var$setFrame($f1f097b5a7611f55$var$wake);
    }
}


function $c352a1d9fdabab23$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new (0, $f1f097b5a7611f55$export$c57e9b2d8b9e4de);
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}


var $6932ffa19d32f77c$var$emptyOn = (0, $e5354b03ec801fa9$export$2e2bcd8739ae039)("start", "end", "cancel", "interrupt");
var $6932ffa19d32f77c$var$emptyTween = [];
var $6932ffa19d32f77c$export$ff39ebd4bb12b718 = 0;
var $6932ffa19d32f77c$export$584530fe98d14a84 = 1;
var $6932ffa19d32f77c$export$a5d151aee16efd42 = 2;
var $6932ffa19d32f77c$export$fb935ab5849a0db9 = 3;
var $6932ffa19d32f77c$export$1573e22b087389af = 4;
var $6932ffa19d32f77c$export$a2e792214ded83b2 = 5;
var $6932ffa19d32f77c$export$9d38167254403955 = 6;
function $6932ffa19d32f77c$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    $6932ffa19d32f77c$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $6932ffa19d32f77c$var$emptyOn,
        tween: $6932ffa19d32f77c$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $6932ffa19d32f77c$export$ff39ebd4bb12b718
    });
}
function $6932ffa19d32f77c$export$2cd8252107eb640b(node, id) {
    var schedule = $6932ffa19d32f77c$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $6932ffa19d32f77c$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $6932ffa19d32f77c$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $6932ffa19d32f77c$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $6932ffa19d32f77c$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $6932ffa19d32f77c$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $6932ffa19d32f77c$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, $f1f097b5a7611f55$export$9dc4ecf953986f04)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $6932ffa19d32f77c$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $6932ffa19d32f77c$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $6932ffa19d32f77c$export$fb935ab5849a0db9) return (0, $c352a1d9fdabab23$export$2e2bcd8739ae039)(start);
            // Interrupt the active transition, if any.
            if (o.state === $6932ffa19d32f77c$export$1573e22b087389af) {
                o.state = $6932ffa19d32f77c$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $6932ffa19d32f77c$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, $c352a1d9fdabab23$export$2e2bcd8739ae039)(function() {
            if (self.state === $6932ffa19d32f77c$export$fb935ab5849a0db9) {
                self.state = $6932ffa19d32f77c$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $6932ffa19d32f77c$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $6932ffa19d32f77c$export$a5d151aee16efd42) return; // interrupted
        self.state = $6932ffa19d32f77c$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $6932ffa19d32f77c$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $6932ffa19d32f77c$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $6932ffa19d32f77c$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}


function $9d50172395a2d838$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > (0, $6932ffa19d32f77c$export$a5d151aee16efd42) && schedule.state < (0, $6932ffa19d32f77c$export$a2e792214ded83b2);
        schedule.state = (0, $6932ffa19d32f77c$export$9d38167254403955);
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}


function $3f9ca8bc79a65f2c$export$2e2bcd8739ae039(name) {
    return this.each(function() {
        (0, $9d50172395a2d838$export$2e2bcd8739ae039)(this, name);
    });
}




var $49135f07666a9139$var$degrees = 180 / Math.PI;
var $49135f07666a9139$export$f0954fd7d5368655 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function $49135f07666a9139$export$2e2bcd8739ae039(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * $49135f07666a9139$var$degrees,
        skewX: Math.atan(skewX) * $49135f07666a9139$var$degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}


var $ec66e06cd712857c$var$svgNode;
function $ec66e06cd712857c$export$59ad369bf4938177(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? (0, $49135f07666a9139$export$f0954fd7d5368655) : (0, $49135f07666a9139$export$2e2bcd8739ae039)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function $ec66e06cd712857c$export$f9ef43f9a1d89a18(value) {
    if (value == null) return 0, $49135f07666a9139$export$f0954fd7d5368655;
    if (!$ec66e06cd712857c$var$svgNode) $ec66e06cd712857c$var$svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    $ec66e06cd712857c$var$svgNode.setAttribute("transform", value);
    if (!(value = $ec66e06cd712857c$var$svgNode.transform.baseVal.consolidate())) return 0, $49135f07666a9139$export$f0954fd7d5368655;
    value = value.matrix;
    return (0, $49135f07666a9139$export$2e2bcd8739ae039)(value.a, value.b, value.c, value.d, value.e, value.f);
}


function $587593a2c8eab706$var$interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(xa, xb)
            }, {
                i: i - 2,
                x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(xa, xb)
            }, {
                i: i - 2,
                x: (0, $198300671d1ae521$export$2e2bcd8739ae039)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var $587593a2c8eab706$export$56bec7123bb3589a = $587593a2c8eab706$var$interpolateTransform((0, $ec66e06cd712857c$export$59ad369bf4938177), "px, ", "px)", "deg)");
var $587593a2c8eab706$export$da8cba906d64c082 = $587593a2c8eab706$var$interpolateTransform((0, $ec66e06cd712857c$export$f9ef43f9a1d89a18), ", ", ")", ")");




function $ff71e52c327b19a3$var$tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function $ff71e52c327b19a3$var$tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function $ff71e52c327b19a3$export$2e2bcd8739ae039(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? $ff71e52c327b19a3$var$tweenRemove : $ff71e52c327b19a3$var$tweenFunction)(id, name, value));
}
function $ff71e52c327b19a3$export$f78ce6ab10405d82(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(node, id).value[name];
    };
}



var $gnwtP = parcelRequire("gnwtP");

function $916d61421042cf35$export$2e2bcd8739ae039(a, b) {
    var c;
    return (typeof b === "number" ? (0, $198300671d1ae521$export$2e2bcd8739ae039) : b instanceof (0, $gnwtP.default) ? (0, $9caa49edbd641456$export$2e2bcd8739ae039) : (c = (0, $gnwtP.default)(b)) ? (b = c, $9caa49edbd641456$export$2e2bcd8739ae039) : (0, $da7be60f84908e05$export$2e2bcd8739ae039))(a, b);
}


function $aa6099204515e47b$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $aa6099204515e47b$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $aa6099204515e47b$var$attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $aa6099204515e47b$var$attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $aa6099204515e47b$var$attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $aa6099204515e47b$var$attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $aa6099204515e47b$export$2e2bcd8739ae039(name, value) {
    var fullname = (0, $861077efbce665f7$export$2e2bcd8739ae039)(name), i = fullname === "transform" ? (0, $587593a2c8eab706$export$da8cba906d64c082) : (0, $916d61421042cf35$export$2e2bcd8739ae039);
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? $aa6099204515e47b$var$attrFunctionNS : $aa6099204515e47b$var$attrFunction)(fullname, i, (0, $ff71e52c327b19a3$export$f78ce6ab10405d82)(this, "attr." + name, value)) : value == null ? (fullname.local ? $aa6099204515e47b$var$attrRemoveNS : $aa6099204515e47b$var$attrRemove)(fullname) : (fullname.local ? $aa6099204515e47b$var$attrConstantNS : $aa6099204515e47b$var$attrConstant)(fullname, i, value));
}



function $57b55e7d990c1d9e$var$attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function $57b55e7d990c1d9e$var$attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function $57b55e7d990c1d9e$var$attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $57b55e7d990c1d9e$var$attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $57b55e7d990c1d9e$var$attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $57b55e7d990c1d9e$var$attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $57b55e7d990c1d9e$export$2e2bcd8739ae039(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, $861077efbce665f7$export$2e2bcd8739ae039)(name);
    return this.tween(key, (fullname.local ? $57b55e7d990c1d9e$var$attrTweenNS : $57b55e7d990c1d9e$var$attrTween)(fullname, value));
}



function $36e5084d34193f2b$var$delayFunction(id, value) {
    return function() {
        (0, $6932ffa19d32f77c$export$2cd8252107eb640b)(this, id).delay = +value.apply(this, arguments);
    };
}
function $36e5084d34193f2b$var$delayConstant(id, value) {
    return value = +value, function() {
        (0, $6932ffa19d32f77c$export$2cd8252107eb640b)(this, id).delay = value;
    };
}
function $36e5084d34193f2b$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $36e5084d34193f2b$var$delayFunction : $36e5084d34193f2b$var$delayConstant)(id, value)) : (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(this.node(), id).delay;
}



function $9db210c00a1cb3bd$var$durationFunction(id, value) {
    return function() {
        (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id).duration = +value.apply(this, arguments);
    };
}
function $9db210c00a1cb3bd$var$durationConstant(id, value) {
    return value = +value, function() {
        (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id).duration = value;
    };
}
function $9db210c00a1cb3bd$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $9db210c00a1cb3bd$var$durationFunction : $9db210c00a1cb3bd$var$durationConstant)(id, value)) : (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(this.node(), id).duration;
}



function $77f8a9b4952c1103$var$easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id).ease = value;
    };
}
function $77f8a9b4952c1103$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each($77f8a9b4952c1103$var$easeConstant(id, value)) : (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(this.node(), id).ease;
}



function $dcb4acf3c2b94777$var$easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id).ease = v;
    };
}
function $dcb4acf3c2b94777$export$2e2bcd8739ae039(value) {
    if (typeof value !== "function") throw new Error;
    return this.each($dcb4acf3c2b94777$var$easeVarying(this._id, value));
}




function $5385d99add49b88e$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = (0, $eaa0ec83d721630f$export$2e2bcd8739ae039)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)(subgroups, this._parents, this._name, this._id);
}



function $b94999971c646dd3$export$2e2bcd8739ae039(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)(merges, this._parents, this._name, this._id);
}



function $317f39322da00c24$var$start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function $317f39322da00c24$var$onFunction(id, name, listener) {
    var on0, on1, sit = $317f39322da00c24$var$start(name) ? (0, $6932ffa19d32f77c$export$2cd8252107eb640b) : (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function $317f39322da00c24$export$2e2bcd8739ae039(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(this.node(), id).on.on(name) : this.each($317f39322da00c24$var$onFunction(id, name, listener));
}


function $10bfcc7fdd547fef$var$removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function $10bfcc7fdd547fef$export$2e2bcd8739ae039() {
    return this.on("end.remove", $10bfcc7fdd547fef$var$removeFunction(this._id));
}





function $083d858d7e781ce2$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, $3febb52ed900509b$export$2e2bcd8739ae039)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            (0, $6932ffa19d32f77c$export$2e2bcd8739ae039)(subgroup[i], name, id, i, subgroup, (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(node, id));
        }
    }
    return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)(subgroups, this._parents, name, id);
}





function $8dbc52fb106abc17$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, $9b900e2cd17f235b$export$2e2bcd8739ae039)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, $6932ffa19d32f77c$export$2e2bcd8739ae039)(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)(subgroups, parents, name, id);
}



var $4337b508dae82fdc$var$Selection = (0, $7d24a0ccddd34d02$export$2e2bcd8739ae039).prototype.constructor;
function $4337b508dae82fdc$export$2e2bcd8739ae039() {
    return new $4337b508dae82fdc$var$Selection(this._groups, this._parents);
}







function $3b78188d34b28d5f$var$styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, $f63d26255e0880d2$export$5e3cec964f0b5efd)(this, name), string1 = (this.style.removeProperty(name), (0, $f63d26255e0880d2$export$5e3cec964f0b5efd)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function $3b78188d34b28d5f$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $3b78188d34b28d5f$var$styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, $f63d26255e0880d2$export$5e3cec964f0b5efd)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $3b78188d34b28d5f$var$styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, $f63d26255e0880d2$export$5e3cec964f0b5efd)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, $f63d26255e0880d2$export$5e3cec964f0b5efd)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $3b78188d34b28d5f$var$styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = $3b78188d34b28d5f$var$styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function $3b78188d34b28d5f$export$2e2bcd8739ae039(name, value, priority) {
    var i = (name += "") === "transform" ? (0, $587593a2c8eab706$export$56bec7123bb3589a) : (0, $916d61421042cf35$export$2e2bcd8739ae039);
    return value == null ? this.styleTween(name, $3b78188d34b28d5f$var$styleNull(name, i)).on("end.style." + name, $3b78188d34b28d5f$var$styleRemove(name)) : typeof value === "function" ? this.styleTween(name, $3b78188d34b28d5f$var$styleFunction(name, i, (0, $ff71e52c327b19a3$export$f78ce6ab10405d82)(this, "style." + name, value))).each($3b78188d34b28d5f$var$styleMaybeRemove(this._id, name)) : this.styleTween(name, $3b78188d34b28d5f$var$styleConstant(name, i, value), priority).on("end.style." + name, null);
}


function $a5e1fe4d25f36dfe$var$styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function $a5e1fe4d25f36dfe$var$styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && $a5e1fe4d25f36dfe$var$styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function $a5e1fe4d25f36dfe$export$2e2bcd8739ae039(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $a5e1fe4d25f36dfe$var$styleTween(name, value, priority == null ? "" : priority));
}



function $a27f04ace08aa278$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $a27f04ace08aa278$var$textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function $a27f04ace08aa278$export$2e2bcd8739ae039(value) {
    return this.tween("text", typeof value === "function" ? $a27f04ace08aa278$var$textFunction((0, $ff71e52c327b19a3$export$f78ce6ab10405d82)(this, "text", value)) : $a27f04ace08aa278$var$textConstant(value == null ? "" : value + ""));
}


function $ecf20585fc9ee577$var$textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function $ecf20585fc9ee577$var$textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $ecf20585fc9ee577$var$textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $ecf20585fc9ee577$export$2e2bcd8739ae039(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $ecf20585fc9ee577$var$textTween(value));
}




function $4ca267cf162e1313$export$2e2bcd8739ae039() {
    var name = this._name, id0 = this._id, id1 = (0, $8903c5148cd9b6a2$export$9ffd10a3fbdc175b)();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = (0, $6932ffa19d32f77c$export$3988ae62b71be9a3)(node, id0);
            (0, $6932ffa19d32f77c$export$2e2bcd8739ae039)(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)(groups, this._parents, name, id1);
}




function $8bb6680985b00187$export$2e2bcd8739ae039() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, $6932ffa19d32f77c$export$adaa4cf7ef1b65be)(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}


var $8903c5148cd9b6a2$var$id = 0;
function $8903c5148cd9b6a2$export$be58926105124dd4(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function $8903c5148cd9b6a2$export$2e2bcd8739ae039(name) {
    return (0, $7d24a0ccddd34d02$export$2e2bcd8739ae039)().transition(name);
}
function $8903c5148cd9b6a2$export$9ffd10a3fbdc175b() {
    return ++$8903c5148cd9b6a2$var$id;
}
var $8903c5148cd9b6a2$var$selection_prototype = (0, $7d24a0ccddd34d02$export$2e2bcd8739ae039).prototype;
$8903c5148cd9b6a2$export$be58926105124dd4.prototype = $8903c5148cd9b6a2$export$2e2bcd8739ae039.prototype = {
    constructor: $8903c5148cd9b6a2$export$be58926105124dd4,
    select: (0, $083d858d7e781ce2$export$2e2bcd8739ae039),
    selectAll: (0, $8dbc52fb106abc17$export$2e2bcd8739ae039),
    selectChild: $8903c5148cd9b6a2$var$selection_prototype.selectChild,
    selectChildren: $8903c5148cd9b6a2$var$selection_prototype.selectChildren,
    filter: (0, $5385d99add49b88e$export$2e2bcd8739ae039),
    merge: (0, $b94999971c646dd3$export$2e2bcd8739ae039),
    selection: (0, $4337b508dae82fdc$export$2e2bcd8739ae039),
    transition: (0, $4ca267cf162e1313$export$2e2bcd8739ae039),
    call: $8903c5148cd9b6a2$var$selection_prototype.call,
    nodes: $8903c5148cd9b6a2$var$selection_prototype.nodes,
    node: $8903c5148cd9b6a2$var$selection_prototype.node,
    size: $8903c5148cd9b6a2$var$selection_prototype.size,
    empty: $8903c5148cd9b6a2$var$selection_prototype.empty,
    each: $8903c5148cd9b6a2$var$selection_prototype.each,
    on: (0, $317f39322da00c24$export$2e2bcd8739ae039),
    attr: (0, $aa6099204515e47b$export$2e2bcd8739ae039),
    attrTween: (0, $57b55e7d990c1d9e$export$2e2bcd8739ae039),
    style: (0, $3b78188d34b28d5f$export$2e2bcd8739ae039),
    styleTween: (0, $a5e1fe4d25f36dfe$export$2e2bcd8739ae039),
    text: (0, $a27f04ace08aa278$export$2e2bcd8739ae039),
    textTween: (0, $ecf20585fc9ee577$export$2e2bcd8739ae039),
    remove: (0, $10bfcc7fdd547fef$export$2e2bcd8739ae039),
    tween: (0, $ff71e52c327b19a3$export$2e2bcd8739ae039),
    delay: (0, $36e5084d34193f2b$export$2e2bcd8739ae039),
    duration: (0, $9db210c00a1cb3bd$export$2e2bcd8739ae039),
    ease: (0, $77f8a9b4952c1103$export$2e2bcd8739ae039),
    easeVarying: (0, $dcb4acf3c2b94777$export$2e2bcd8739ae039),
    end: (0, $8bb6680985b00187$export$2e2bcd8739ae039),
    [Symbol.iterator]: $8903c5148cd9b6a2$var$selection_prototype[Symbol.iterator]
};



function $e0f99efc6a5b6b82$export$b1a09cb1b71f86aa(t) {
    return t * t * t;
}
function $e0f99efc6a5b6b82$export$68d528839c701b6(t) {
    return --t * t * t + 1;
}
function $e0f99efc6a5b6b82$export$89238d3bc79d3ada(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}



var $fbab5fbb61d37a42$var$defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, $e0f99efc6a5b6b82$export$89238d3bc79d3ada)
};
function $fbab5fbb61d37a42$var$inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
function $fbab5fbb61d37a42$export$2e2bcd8739ae039(name) {
    var id, timing;
    if (name instanceof (0, $8903c5148cd9b6a2$export$be58926105124dd4)) id = name._id, name = name._name;
    else id = (0, $8903c5148cd9b6a2$export$9ffd10a3fbdc175b)(), (timing = $fbab5fbb61d37a42$var$defaultTiming).time = (0, $f1f097b5a7611f55$export$461939dd4422153)(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, $6932ffa19d32f77c$export$2e2bcd8739ae039)(node, name, id, i, group, timing || $fbab5fbb61d37a42$var$inherit(node, id));
    }
    return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)(groups, this._parents, name, id);
}


(0, $7d24a0ccddd34d02$export$2e2bcd8739ae039).prototype.interrupt = (0, $3f9ca8bc79a65f2c$export$2e2bcd8739ae039);
(0, $7d24a0ccddd34d02$export$2e2bcd8739ae039).prototype.transition = (0, $fbab5fbb61d37a42$export$2e2bcd8739ae039);







var $b2830f40aabafde2$export$2e2bcd8739ae039 = (x)=>()=>x;


function $a9462c89148412c0$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent, target: target, selection: selection, mode: mode, dispatch: dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        selection: {
            value: selection,
            enumerable: true,
            configurable: true
        },
        mode: {
            value: mode,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $202405f8e5f03d79$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $202405f8e5f03d79$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


var $b02666738bc96fde$var$MODE_DRAG = {
    name: "drag"
}, $b02666738bc96fde$var$MODE_SPACE = {
    name: "space"
}, $b02666738bc96fde$var$MODE_HANDLE = {
    name: "handle"
}, $b02666738bc96fde$var$MODE_CENTER = {
    name: "center"
};
const { abs: $b02666738bc96fde$var$abs, max: $b02666738bc96fde$var$max, min: $b02666738bc96fde$var$min } = Math;
function $b02666738bc96fde$var$number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function $b02666738bc96fde$var$number2(e) {
    return [
        $b02666738bc96fde$var$number1(e[0]),
        $b02666738bc96fde$var$number1(e[1])
    ];
}
var $b02666738bc96fde$var$X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map($b02666738bc96fde$var$type),
    input: function(x, e) {
        return x == null ? null : [
            [
                +x[0],
                e[0][1]
            ],
            [
                +x[1],
                e[1][1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var $b02666738bc96fde$var$Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map($b02666738bc96fde$var$type),
    input: function(y, e) {
        return y == null ? null : [
            [
                e[0][0],
                +y[0]
            ],
            [
                e[1][0],
                +y[1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var $b02666738bc96fde$var$XY = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map($b02666738bc96fde$var$type),
    input: function(xy) {
        return xy == null ? null : $b02666738bc96fde$var$number2(xy);
    },
    output: function(xy) {
        return xy;
    }
};
var $b02666738bc96fde$var$cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
};
var $b02666738bc96fde$var$flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var $b02666738bc96fde$var$flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var $b02666738bc96fde$var$signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
};
var $b02666738bc96fde$var$signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
};
function $b02666738bc96fde$var$type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function $b02666738bc96fde$var$defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function $b02666738bc96fde$var$defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
        svg = svg.viewBox.baseVal;
        return [
            [
                svg.x,
                svg.y
            ],
            [
                svg.x + svg.width,
                svg.y + svg.height
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            svg.width.baseVal.value,
            svg.height.baseVal.value
        ]
    ];
}
function $b02666738bc96fde$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function $b02666738bc96fde$var$local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function $b02666738bc96fde$var$empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function $b02666738bc96fde$export$69760394fc76f689(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function $b02666738bc96fde$export$979ace6c88860aa8() {
    return $b02666738bc96fde$var$brush($b02666738bc96fde$var$X);
}
function $b02666738bc96fde$export$468748b530991c54() {
    return $b02666738bc96fde$var$brush($b02666738bc96fde$var$Y);
}
function $b02666738bc96fde$export$2e2bcd8739ae039() {
    return $b02666738bc96fde$var$brush($b02666738bc96fde$var$XY);
}
function $b02666738bc96fde$var$brush(dim) {
    var extent = $b02666738bc96fde$var$defaultExtent, filter = $b02666738bc96fde$var$defaultFilter, touchable = $b02666738bc96fde$var$defaultTouchable, keys = true, listeners = (0, $e5354b03ec801fa9$export$2e2bcd8739ae039)("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            $b02666738bc96fde$var$type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $b02666738bc96fde$var$cursors.overlay).merge(overlay).each(function() {
            var extent = $b02666738bc96fde$var$local(this).extent;
            (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            $b02666738bc96fde$var$type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", $b02666738bc96fde$var$cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return $b02666738bc96fde$var$cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection, event) {
        if (group.tween) group.on("start.brush", function(event) {
            emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function(event) {
            emitter(this, arguments).end(event);
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = (0, $b6e2dec750af77c9$export$2e2bcd8739ae039)(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            (0, $9d50172395a2d838$export$2e2bcd8739ae039)(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
        });
    };
    brush.clear = function(group, event) {
        brush.move(group, null, event);
    };
    function redraw() {
        var group = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this), selection = $b02666738bc96fde$var$local(this).selection;
        if (selection) {
            group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function(d) {
                return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
            }).attr("y", function(d) {
                return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
            }).attr("width", function(d) {
                return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
            }).attr("height", function(d) {
                return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
            });
        } else group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
    function emitter(that, args, clean) {
        var emit = that.__brush.emitter;
        return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
        this.that = that;
        this.args = args;
        this.state = that.__brush;
        this.active = 0;
        this.clean = clean;
    }
    Emitter.prototype = {
        beforestart: function() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function(event, mode) {
            if (this.starting) this.starting = false, this.emit("start", event, mode);
            else this.emit("brush", event);
            return this;
        },
        brush: function(event, mode) {
            this.emit("brush", event, mode);
            return this;
        },
        end: function(event, mode) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
            return this;
        },
        emit: function(type, event, mode) {
            var d = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this.that).datum();
            listeners.call(type, this.that, new (0, $a9462c89148412c0$export$2e2bcd8739ae039)(type, {
                sourceEvent: event,
                target: brush,
                selection: dim.output(this.state.selection),
                mode: mode,
                dispatch: listeners
            }), d);
        }
    };
    function started(event) {
        if (touchending && !event.touches) return;
        if (!filter.apply(this, arguments)) return;
        var that = this, type = event.target.__data__.type, mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? $b02666738bc96fde$var$MODE_DRAG : keys && event.altKey ? $b02666738bc96fde$var$MODE_CENTER : $b02666738bc96fde$var$MODE_HANDLE, signX = dim === $b02666738bc96fde$var$Y ? null : $b02666738bc96fde$var$signsX[type], signY = dim === $b02666738bc96fde$var$X ? null : $b02666738bc96fde$var$signsY[type], state = $b02666738bc96fde$var$local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [
            event
        ], (t)=>{
            const i = t.identifier;
            t = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(t, that);
            t.point0 = t.slice();
            t.identifier = i;
            return t;
        });
        (0, $9d50172395a2d838$export$2e2bcd8739ae039)(that);
        var emit = emitter(that, arguments, true).beforestart();
        if (type === "overlay") {
            if (selection) moving = true;
            const pts = [
                points[0],
                points[1] || points[0]
            ];
            state.selection = selection = [
                [
                    w0 = dim === $b02666738bc96fde$var$Y ? W : $b02666738bc96fde$var$min(pts[0][0], pts[1][0]),
                    n0 = dim === $b02666738bc96fde$var$X ? N : $b02666738bc96fde$var$min(pts[0][1], pts[1][1])
                ],
                [
                    e0 = dim === $b02666738bc96fde$var$Y ? E : $b02666738bc96fde$var$max(pts[0][0], pts[1][0]),
                    s0 = dim === $b02666738bc96fde$var$X ? S : $b02666738bc96fde$var$max(pts[0][1], pts[1][1])
                ]
            ];
            if (points.length > 1) move(event);
        } else {
            w0 = selection[0][0];
            n0 = selection[0][1];
            e0 = selection[1][0];
            s0 = selection[1][1];
        }
        w1 = w0;
        n1 = n0;
        e1 = e0;
        s1 = s0;
        var group = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", $b02666738bc96fde$var$cursors[type]);
        if (event.touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            (0, $03ac00dfa1d6d210$export$2e2bcd8739ae039)(event.view);
        }
        redraw.call(that);
        emit.start(event, mode.name);
        function moved(event) {
            for (const p of event.changedTouches || [
                event
            ]){
                for (const d of points)if (d.identifier === p.identifier) d.cur = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(p, that);
            }
            if (shifting && !lockX && !lockY && points.length === 1) {
                const point = points[0];
                if ($b02666738bc96fde$var$abs(point.cur[0] - point[0]) > $b02666738bc96fde$var$abs(point.cur[1] - point[1])) lockY = true;
                else lockX = true;
            }
            for (const point of points)if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
            moving = true;
            (0, $202405f8e5f03d79$export$2e2bcd8739ae039)(event);
            move(event);
        }
        function move(event) {
            const point = points[0], point0 = point.point0;
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case $b02666738bc96fde$var$MODE_SPACE:
                case $b02666738bc96fde$var$MODE_DRAG:
                    if (signX) dx = $b02666738bc96fde$var$max(W - w0, $b02666738bc96fde$var$min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = $b02666738bc96fde$var$max(N - n0, $b02666738bc96fde$var$min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case $b02666738bc96fde$var$MODE_HANDLE:
                    if (points[1]) {
                        if (signX) w1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, points[0][0])), e1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, points[1][0])), signX = 1;
                        if (signY) n1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, points[0][1])), s1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, points[1][1])), signY = 1;
                    } else {
                        if (signX < 0) dx = $b02666738bc96fde$var$max(W - w0, $b02666738bc96fde$var$min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                        else if (signX > 0) dx = $b02666738bc96fde$var$max(W - e0, $b02666738bc96fde$var$min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                        if (signY < 0) dy = $b02666738bc96fde$var$max(N - n0, $b02666738bc96fde$var$min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                        else if (signY > 0) dy = $b02666738bc96fde$var$max(N - s0, $b02666738bc96fde$var$min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    }
                    break;
                case $b02666738bc96fde$var$MODE_CENTER:
                    if (signX) w1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, w0 - dx * signX)), e1 = $b02666738bc96fde$var$max(W, $b02666738bc96fde$var$min(E, e0 + dx * signX));
                    if (signY) n1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, n0 - dy * signY)), s1 = $b02666738bc96fde$var$max(N, $b02666738bc96fde$var$min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (type in $b02666738bc96fde$var$flipX) overlay.attr("cursor", $b02666738bc96fde$var$cursors[type = $b02666738bc96fde$var$flipX[type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (type in $b02666738bc96fde$var$flipY) overlay.attr("cursor", $b02666738bc96fde$var$cursors[type = $b02666738bc96fde$var$flipY[type]]);
            }
            if (state.selection) selection = state.selection; // May be set by brush.move!
            if (lockX) w1 = selection[0][0], e1 = selection[1][0];
            if (lockY) n1 = selection[0][1], s1 = selection[1][1];
            if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
                state.selection = [
                    [
                        w1,
                        n1
                    ],
                    [
                        e1,
                        s1
                    ]
                ];
                redraw.call(that);
                emit.brush(event, mode.name);
            }
        }
        function ended(event) {
            (0, $202405f8e5f03d79$export$2e2561858db9bf47)(event);
            if (event.touches) {
                if (event.touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                (0, $03ac00dfa1d6d210$export$833237748009e1e1)(event.view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", $b02666738bc96fde$var$cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if ($b02666738bc96fde$var$empty(selection)) state.selection = null, redraw.call(that);
            emit.end(event, mode.name);
        }
        function keydowned(event) {
            switch(event.keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === $b02666738bc96fde$var$MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = $b02666738bc96fde$var$MODE_CENTER;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $b02666738bc96fde$var$MODE_HANDLE || mode === $b02666738bc96fde$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = $b02666738bc96fde$var$MODE_SPACE;
                        overlay.attr("cursor", $b02666738bc96fde$var$cursors.selection);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            (0, $202405f8e5f03d79$export$2e2bcd8739ae039)(event);
        }
        function keyupped(event) {
            switch(event.keyCode){
                case 16:
                    if (shifting) {
                        lockX = lockY = shifting = false;
                        move(event);
                    }
                    break;
                case 18:
                    if (mode === $b02666738bc96fde$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = $b02666738bc96fde$var$MODE_HANDLE;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $b02666738bc96fde$var$MODE_SPACE) {
                        if (event.altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = $b02666738bc96fde$var$MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = $b02666738bc96fde$var$MODE_HANDLE;
                        }
                        overlay.attr("cursor", $b02666738bc96fde$var$cursors[type]);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            (0, $202405f8e5f03d79$export$2e2bcd8739ae039)(event);
        }
    }
    function touchmoved(event) {
        emitter(this, arguments).moved(event);
    }
    function touchended(event) {
        emitter(this, arguments).ended(event);
    }
    function initialize() {
        var state = this.__brush || {
            selection: null
        };
        state.extent = $b02666738bc96fde$var$number2(extent.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, $b2830f40aabafde2$export$2e2bcd8739ae039)($b02666738bc96fde$var$number2(_)), brush) : extent;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $b2830f40aabafde2$export$2e2bcd8739ae039)(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $b2830f40aabafde2$export$2e2bcd8739ae039)(!!_), brush) : touchable;
    };
    brush.handleSize = function(_) {
        return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function(_) {
        return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? brush : value;
    };
    return brush;
}













var $a90bdf9f55fb9ef1$export$2e2bcd8739ae039 = (x)=>()=>x;


function $71be72a1f80566f3$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent, subject: subject, target: target, identifier: identifier, active: active, x: x, y: y, dx: dx, dy: dy, dispatch: dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        subject: {
            value: subject,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        identifier: {
            value: identifier,
            enumerable: true,
            configurable: true
        },
        active: {
            value: active,
            enumerable: true,
            configurable: true
        },
        x: {
            value: x,
            enumerable: true,
            configurable: true
        },
        y: {
            value: y,
            enumerable: true,
            configurable: true
        },
        dx: {
            value: dx,
            enumerable: true,
            configurable: true
        },
        dy: {
            value: dy,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
$71be72a1f80566f3$export$2e2bcd8739ae039.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};


// Ignore right-click, since that should open the context menu.
function $e27dad7d95d3a37e$var$defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function $e27dad7d95d3a37e$var$defaultContainer() {
    return this.parentNode;
}
function $e27dad7d95d3a37e$var$defaultSubject(event, d) {
    return d == null ? {
        x: event.x,
        y: event.y
    } : d;
}
function $e27dad7d95d3a37e$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $e27dad7d95d3a37e$export$2e2bcd8739ae039() {
    var filter = $e27dad7d95d3a37e$var$defaultFilter, container = $e27dad7d95d3a37e$var$defaultContainer, subject = $e27dad7d95d3a37e$var$defaultSubject, touchable = $e27dad7d95d3a37e$var$defaultTouchable, gestures = {}, listeners = (0, $e5354b03ec801fa9$export$2e2bcd8739ae039)("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
        selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, (0, $1dc5c35c53e70348$export$524615cd03e458cc)).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
        if (touchending || !filter.call(this, event, d)) return;
        var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
        if (!gesture) return;
        (0, $cba050cd9a732395$export$2e2bcd8739ae039)(event.view).on("mousemove.drag", mousemoved, (0, $1dc5c35c53e70348$export$35431a0e47022de1)).on("mouseup.drag", mouseupped, (0, $1dc5c35c53e70348$export$35431a0e47022de1));
        (0, $03ac00dfa1d6d210$export$2e2bcd8739ae039)(event.view);
        (0, $1dc5c35c53e70348$export$2e2561858db9bf47)(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
    }
    function mousemoved(event) {
        (0, $1dc5c35c53e70348$export$2e2bcd8739ae039)(event);
        if (!mousemoving) {
            var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
            mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
    }
    function mouseupped(event) {
        (0, $cba050cd9a732395$export$2e2bcd8739ae039)(event.view).on("mousemove.drag mouseup.drag", null);
        (0, $03ac00dfa1d6d210$export$833237748009e1e1)(event.view, mousemoving);
        (0, $1dc5c35c53e70348$export$2e2bcd8739ae039)(event);
        gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
        if (!filter.call(this, event, d)) return;
        var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
        for(i = 0; i < n; ++i)if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
            (0, $1dc5c35c53e70348$export$2e2561858db9bf47)(event);
            gesture("start", event, touches[i]);
        }
    }
    function touchmoved(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
            (0, $1dc5c35c53e70348$export$2e2bcd8739ae039)(event);
            gesture("drag", event, touches[i]);
        }
    }
    function touchended(event) {
        var touches = event.changedTouches, n = touches.length, i, gesture;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, 500); // Ghost clicks are delayed!
        for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
            (0, $1dc5c35c53e70348$export$2e2561858db9bf47)(event);
            gesture("end", event, touches[i]);
        }
    }
    function beforestart(that, container, event, d, identifier, touch) {
        var dispatch = listeners.copy(), p = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(touch || event, container), dx, dy, s;
        if ((s = subject.call(that, new (0, $71be72a1f80566f3$export$2e2bcd8739ae039)("beforestart", {
            sourceEvent: event,
            target: drag,
            identifier: identifier,
            active: active,
            x: p[0],
            y: p[1],
            dx: 0,
            dy: 0,
            dispatch: dispatch
        }), d)) == null) return;
        dx = s.x - p[0] || 0;
        dy = s.y - p[1] || 0;
        return function gesture(type, event, touch) {
            var p0 = p, n;
            switch(type){
                case "start":
                    gestures[identifier] = gesture, n = active++;
                    break;
                case "end":
                    delete gestures[identifier], --active; // falls through
                case "drag":
                    p = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(touch || event, container), n = active;
                    break;
            }
            dispatch.call(type, that, new (0, $71be72a1f80566f3$export$2e2bcd8739ae039)(type, {
                sourceEvent: event,
                subject: s,
                target: drag,
                identifier: identifier,
                active: n,
                x: p[0] + dx,
                y: p[1] + dy,
                dx: p[0] - p0[0],
                dy: p[1] - p0[1],
                dispatch: dispatch
            }), d);
        };
    }
    drag.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $a90bdf9f55fb9ef1$export$2e2bcd8739ae039)(!!_), drag) : filter;
    };
    drag.container = function(_) {
        return arguments.length ? (container = typeof _ === "function" ? _ : (0, $a90bdf9f55fb9ef1$export$2e2bcd8739ae039)(_), drag) : container;
    };
    drag.subject = function(_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : (0, $a90bdf9f55fb9ef1$export$2e2bcd8739ae039)(_), drag) : subject;
    };
    drag.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $a90bdf9f55fb9ef1$export$2e2bcd8739ae039)(!!_), drag) : touchable;
    };
    drag.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
}
























var $3f985f05a3a921d2$var$epsilon2 = 1e-12;
function $3f985f05a3a921d2$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $3f985f05a3a921d2$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $3f985f05a3a921d2$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var $3f985f05a3a921d2$export$2e2bcd8739ae039 = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < $3f985f05a3a921d2$var$epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = $3f985f05a3a921d2$var$cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * $3f985f05a3a921d2$var$tanh(rho * s + r0) - $3f985f05a3a921d2$var$sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / $3f985f05a3a921d2$var$cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);




var $254fd64edb9057e6$export$2e2bcd8739ae039 = (x)=>()=>x;


function $62f4b58afb3e30f4$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent, target: target, transform: transform, dispatch: dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $de575e8833e6b55f$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$de575e8833e6b55f$export$563a914cafbdc389.prototype = {
    constructor: $de575e8833e6b55f$export$563a914cafbdc389,
    scale: function(k) {
        return k === 1 ? this : new $de575e8833e6b55f$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new $de575e8833e6b55f$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $de575e8833e6b55f$export$f0954fd7d5368655 = new $de575e8833e6b55f$export$563a914cafbdc389(1, 0, 0);
$de575e8833e6b55f$export$2e2bcd8739ae039.prototype = $de575e8833e6b55f$export$563a914cafbdc389.prototype;
function $de575e8833e6b55f$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $de575e8833e6b55f$export$f0954fd7d5368655;
    return node.__zoom;
}


function $bc434c8574512a26$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $bc434c8574512a26$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function $9e296e9f9c998da1$var$defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function $9e296e9f9c998da1$var$defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function $9e296e9f9c998da1$var$defaultTransform() {
    return this.__zoom || (0, $de575e8833e6b55f$export$f0954fd7d5368655);
}
function $9e296e9f9c998da1$var$defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function $9e296e9f9c998da1$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $9e296e9f9c998da1$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $9e296e9f9c998da1$export$2e2bcd8739ae039() {
    var filter = $9e296e9f9c998da1$var$defaultFilter, extent = $9e296e9f9c998da1$var$defaultExtent, constrain = $9e296e9f9c998da1$var$defaultConstrain, wheelDelta = $9e296e9f9c998da1$var$defaultWheelDelta, touchable = $9e296e9f9c998da1$var$defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = (0, $3f985f05a3a921d2$export$2e2bcd8739ae039), listeners = (0, $e5354b03ec801fa9$export$2e2bcd8739ae039)("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", $9e296e9f9c998da1$var$defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $9e296e9f9c998da1$var$defaultTransform);
        if (collection !== selection) schedule(collection, transform, point, event);
        else selection.interrupt().each(function() {
            gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain((0, $de575e8833e6b55f$export$f0954fd7d5368655).translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new (0, $de575e8833e6b55f$export$563a914cafbdc389)(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new (0, $de575e8833e6b55f$export$563a914cafbdc389)(transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new (0, $de575e8833e6b55f$export$563a914cafbdc389)(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this.that).datum();
            listeners.call(type, this.that, new (0, $62f4b58afb3e30f4$export$2e2bcd8739ae039)(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type: type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, $9d50172395a2d838$export$2e2bcd8739ae039)(this);
            g.start();
        }
        (0, $bc434c8574512a26$export$2e2bcd8739ae039)(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
        (0, $03ac00dfa1d6d210$export$2e2bcd8739ae039)(event.view);
        (0, $bc434c8574512a26$export$2e2561858db9bf47)(event);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, $9d50172395a2d838$export$2e2bcd8739ae039)(this);
        g.start();
        function mousemoved(event) {
            (0, $bc434c8574512a26$export$2e2bcd8739ae039)(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, $03ac00dfa1d6d210$export$833237748009e1e1)(event.view, g.moved);
            (0, $bc434c8574512a26$export$2e2bcd8739ae039)(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0, $bc434c8574512a26$export$2e2bcd8739ae039)(event);
        if (duration > 0) (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this).transition().duration(duration).call(schedule, t1, p0, event);
        else (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0, $bc434c8574512a26$export$2e2561858db9bf47)(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, $9d50172395a2d838$export$2e2bcd8739ae039)(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0, $bc434c8574512a26$export$2e2bcd8739ae039)(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0, $bc434c8574512a26$export$2e2561858db9bf47)(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = (0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0, $cba050cd9a732395$export$2e2bcd8739ae039)(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, $254fd64edb9057e6$export$2e2bcd8739ae039)(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $254fd64edb9057e6$export$2e2bcd8739ae039)(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $254fd64edb9057e6$export$2e2bcd8739ae039)(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, $254fd64edb9057e6$export$2e2bcd8739ae039)([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}







const $33bd6c1f0dbf059f$var$VERTEX_RADIUS = 20;
/* A network consists of a graph and additional information on the vertices or the lines of the graph.
 ** To keep the code simple, instead of using names we identify a vertex by its color. */ const $33bd6c1f0dbf059f$var$verticesColors = [
    "maroon",
    "navy",
    "darkcyan",
    "darkgrey",
    "darkorange",
    "darkseagreen",
    "sandybrown",
    "cornflowerblue",
    "mediumpurple",
    "slateblue",
    "peachpuff",
    "salmon",
    "peru"
];
const $33bd6c1f0dbf059f$var$getRandCoord = (upperBound, padding)=>{
    // random integer in range [0, upperBound - 2 x padding]
    const randCoord = Math.floor(Math.random() * (upperBound - 2 * padding));
    // shifted to [padding, upperBound - padding]
    return randCoord + padding;
};
const $33bd6c1f0dbf059f$export$4f734d517e496d2 = (yUpperBound, xUpperBound, padding)=>{
    const vertices = $33bd6c1f0dbf059f$var$verticesColors.map((c, idx)=>({
            id: idx,
            cx: $33bd6c1f0dbf059f$var$getRandCoord(xUpperBound, padding),
            cy: $33bd6c1f0dbf059f$var$getRandCoord(yUpperBound, padding),
            radius: $33bd6c1f0dbf059f$var$VERTEX_RADIUS,
            color: c
        }));
    const links = [
        {
            source: vertices[0],
            target: vertices[11]
        },
        {
            source: vertices[1],
            target: vertices[3]
        },
        {
            source: vertices[0],
            target: vertices[12]
        },
        {
            source: vertices[4],
            target: vertices[5]
        },
        {
            source: vertices[4],
            target: vertices[6]
        },
        {
            source: vertices[6],
            target: vertices[8]
        },
        {
            source: vertices[8],
            target: vertices[2]
        },
        {
            source: vertices[1],
            target: vertices[7]
        },
        {
            source: vertices[11],
            target: vertices[3]
        },
        {
            source: vertices[3],
            target: vertices[10]
        },
        {
            source: vertices[3],
            target: vertices[5]
        },
        {
            source: vertices[9],
            target: vertices[7]
        },
        {
            source: vertices[1],
            target: vertices[12]
        }
    ];
    return {
        vertices: vertices,
        links: links
    };
};


const $915c7ff9e95902f7$var$getDrawingAreaWithinContainer = (svg)=>{
    const { width: width, height: height } = svg.node().getBoundingClientRect();
    const padding = 50;
    const xUpperBound = width + 1;
    const yUpperBound = height + 1;
    return {
        yUpperBound: yUpperBound,
        xUpperBound: xUpperBound,
        padding: padding
    };
};
document.addEventListener("DOMContentLoaded", ()=>{
    const container = $725f1eb1aed1779e$exports.select("#d3-container");
    const svg = container.append("svg").attr("width", "100%").attr("height", "100%");
    const { yUpperBound: yUpperBound, xUpperBound: xUpperBound, padding: padding } = $915c7ff9e95902f7$var$getDrawingAreaWithinContainer(svg);
    const { vertices: vertices, links: linksData } = (0, $33bd6c1f0dbf059f$export$4f734d517e496d2)(yUpperBound, xUpperBound, padding);
    const g = svg.append("g");
    let offsetX = 0;
    let offsetY = 0;
    const links = g.selectAll("line").data(linksData).enter().append("line").attr("stroke", "black").attr("stroke-width", 2).attr("x1", (d)=>d.source.cx).attr("y1", (d)=>d.source.cy).attr("x2", (d)=>d.target.cx).attr("y2", (d)=>d.target.cy);
    g.selectAll("circle").data(vertices).enter().append("circle").attr("cx", (d)=>d.cx).attr("cy", (d)=>d.cy).attr("r", (d)=>d.radius).style("fill", (d)=>d.color).call($725f1eb1aed1779e$exports.drag().on("start", function(event) {
        const node = $725f1eb1aed1779e$exports.select(this);
        offsetX = parseFloat(node.attr("cx")) - event.x;
        offsetY = parseFloat(node.attr("cy")) - event.y;
        $725f1eb1aed1779e$exports.select(this).raise().classed("active", true);
    }).on("drag", function(event, d) {
        $725f1eb1aed1779e$exports.select(this).attr("cx", event.x + offsetX).attr("cy", event.y + offsetY);
        links.filter((l)=>l.source === d).attr("x1", event.x + offsetX).attr("y1", event.y + offsetY);
        links.filter((l)=>l.target === d).attr("x2", event.x + offsetX).attr("y2", event.y + offsetY);
    }));
    svg.call($9e296e9f9c998da1$export$2e2bcd8739ae039().on("zoom", ({ transform: transform })=>{
        g.attr("transform", transform);
    }));
});


//# sourceMappingURL=index.1100e652.js.map
