
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
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


parcelRegister("2TdSl", function(module, exports) {

$parcel$export(module.exports, "point", () => point);
$parcel$export(module.exports, "default", () => $21ab7b38b0bd553c$export$2e2bcd8739ae039);

var $cugGf = parcelRequire("cugGf");

var $fnxet = parcelRequire("fnxet");
function point(that, x, y) {
    var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
    if (that._l01_a > (0, $cugGf.epsilon)) {
        var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
        x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
        y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > (0, $cugGf.epsilon)) {
        var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
        x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
        y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
CatmullRom.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                point(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $21ab7b38b0bd553c$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new CatmullRom(context, alpha) : new (0, $fnxet.Cardinal)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});
parcelRegister("cugGf", function(module, exports) {

$parcel$export(module.exports, "abs", () => $917539beb16edf84$export$2335f513bbd82c6d);
$parcel$export(module.exports, "atan2", () => $917539beb16edf84$export$b8b770ee6a0d9760);
$parcel$export(module.exports, "cos", () => $917539beb16edf84$export$50d414a77b60d802);
$parcel$export(module.exports, "max", () => $917539beb16edf84$export$8960430cfd85939f);
$parcel$export(module.exports, "min", () => $917539beb16edf84$export$96ec731ed4dcb222);
$parcel$export(module.exports, "sin", () => $917539beb16edf84$export$5de3937cb4b592ed);
$parcel$export(module.exports, "sqrt", () => $917539beb16edf84$export$eba8049fb5020b81);
$parcel$export(module.exports, "epsilon", () => $917539beb16edf84$export$6c421550c66a327d);
$parcel$export(module.exports, "pi", () => $917539beb16edf84$export$18c7bea995a110f);
$parcel$export(module.exports, "halfPi", () => $917539beb16edf84$export$e51408a300e8929a);
$parcel$export(module.exports, "tau", () => $917539beb16edf84$export$a4b4b4d4d776fe92);
$parcel$export(module.exports, "acos", () => $917539beb16edf84$export$fd6306be3fde5b04);
$parcel$export(module.exports, "asin", () => $917539beb16edf84$export$41726bdb1fc63f);
const $917539beb16edf84$export$2335f513bbd82c6d = Math.abs;
const $917539beb16edf84$export$b8b770ee6a0d9760 = Math.atan2;
const $917539beb16edf84$export$50d414a77b60d802 = Math.cos;
const $917539beb16edf84$export$8960430cfd85939f = Math.max;
const $917539beb16edf84$export$96ec731ed4dcb222 = Math.min;
const $917539beb16edf84$export$5de3937cb4b592ed = Math.sin;
const $917539beb16edf84$export$eba8049fb5020b81 = Math.sqrt;
const $917539beb16edf84$export$6c421550c66a327d = 1e-12;
const $917539beb16edf84$export$18c7bea995a110f = Math.PI;
const $917539beb16edf84$export$e51408a300e8929a = $917539beb16edf84$export$18c7bea995a110f / 2;
const $917539beb16edf84$export$a4b4b4d4d776fe92 = 2 * $917539beb16edf84$export$18c7bea995a110f;
function $917539beb16edf84$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $917539beb16edf84$export$18c7bea995a110f : Math.acos(x);
}
function $917539beb16edf84$export$41726bdb1fc63f(x) {
    return x >= 1 ? $917539beb16edf84$export$e51408a300e8929a : x <= -1 ? -$917539beb16edf84$export$e51408a300e8929a : Math.asin(x);
}

});

parcelRegister("fnxet", function(module, exports) {

$parcel$export(module.exports, "point", () => $b322c846f4262d51$export$105684a3041cb6f3);
$parcel$export(module.exports, "Cardinal", () => $b322c846f4262d51$export$ee51ff373511cbeb);
$parcel$export(module.exports, "default", () => $b322c846f4262d51$export$2e2bcd8739ae039);
function $b322c846f4262d51$export$105684a3041cb6f3(that, x, y) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function $b322c846f4262d51$export$ee51ff373511cbeb(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$b322c846f4262d51$export$ee51ff373511cbeb.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                $b322c846f4262d51$export$105684a3041cb6f3(this, this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                this._x1 = x, this._y1 = y;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                $b322c846f4262d51$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $b322c846f4262d51$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $b322c846f4262d51$export$ee51ff373511cbeb(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});


var $725f1eb1aed1779e$exports = {};
var $f472393370ac652e$exports = {};

$parcel$export($f472393370ac652e$exports, "bisect", () => $c6baf87b76d1189b$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "bisectRight", () => $c6baf87b76d1189b$export$4d945ad3ad5751b0);
$parcel$export($f472393370ac652e$exports, "bisectLeft", () => $c6baf87b76d1189b$export$df7d25c84ebd12a5);
$parcel$export($f472393370ac652e$exports, "bisectCenter", () => $c6baf87b76d1189b$export$c1cb828b1117c77b);
$parcel$export($f472393370ac652e$exports, "ascending", () => $c68a91b20f361908$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "bisector", () => $100ef5a581ce35fe$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "blur", () => $0646a4896cc1e3c9$export$2cc7ff91bcacba5e);
$parcel$export($f472393370ac652e$exports, "blur2", () => $0646a4896cc1e3c9$export$7671911241d9460b);
$parcel$export($f472393370ac652e$exports, "blurImage", () => $0646a4896cc1e3c9$export$44bf2d4c3a4dda00);
$parcel$export($f472393370ac652e$exports, "count", () => $7dfbd18f2f67ee29$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "cross", () => $99163374af0c752d$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "cumsum", () => $4afb35dd89350820$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "descending", () => $95efe9fd814c2a9d$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "deviation", () => $bb4cec350a143e43$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "extent", () => $7eb08f14ace1fbef$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "Adder", () => $e31757e61e2f6bd4$export$bda7ba77fb86c375);
$parcel$export($f472393370ac652e$exports, "fsum", () => $e31757e61e2f6bd4$export$61cb83f1a93e9fae);
$parcel$export($f472393370ac652e$exports, "fcumsum", () => $e31757e61e2f6bd4$export$5a6391da70c130da);
$parcel$export($f472393370ac652e$exports, "group", () => $53f36c292a6c8e82$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "flatGroup", () => $53f36c292a6c8e82$export$4ed6fc79ae2c51b5);
$parcel$export($f472393370ac652e$exports, "flatRollup", () => $53f36c292a6c8e82$export$788c7294dbcd8e36);
$parcel$export($f472393370ac652e$exports, "groups", () => $53f36c292a6c8e82$export$d4abd167df80d226);
$parcel$export($f472393370ac652e$exports, "index", () => $53f36c292a6c8e82$export$b610b8812bbcded9);
$parcel$export($f472393370ac652e$exports, "indexes", () => $53f36c292a6c8e82$export$8b04ba635e5803cd);
$parcel$export($f472393370ac652e$exports, "rollup", () => $53f36c292a6c8e82$export$97e11c0b0230f130);
$parcel$export($f472393370ac652e$exports, "rollups", () => $53f36c292a6c8e82$export$24814875ed03194b);
$parcel$export($f472393370ac652e$exports, "groupSort", () => $3162b30114e61a10$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "bin", () => $f80e1da92b4f553d$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "histogram", () => $f80e1da92b4f553d$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "thresholdFreedmanDiaconis", () => $0f97ebdd7a2b49af$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "thresholdScott", () => $f437d37a135f70f1$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "thresholdSturges", () => $b2fd3319be99d760$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "max", () => $294276fe443af5f9$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "maxIndex", () => $753dc84cc1c818f1$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "mean", () => $35d2ae9a5cbc11af$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "median", () => $9379fdcb7e7647fe$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "medianIndex", () => $9379fdcb7e7647fe$export$57546ab4fd3c7a5e);
$parcel$export($f472393370ac652e$exports, "merge", () => $961a196a06e40be5$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "min", () => $d0327ad89fbe8d01$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "minIndex", () => $1c849d54903f48d6$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "mode", () => $758c80362c9a8053$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "nice", () => $84db00d2d0e4bb1e$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "pairs", () => $9bb5b215b66c6f34$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "permute", () => $a81dee5edaaa1ec8$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "quantile", () => $9d7a860f7743d54c$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "quantileIndex", () => $9d7a860f7743d54c$export$f1fcc854ecc6ce55);
$parcel$export($f472393370ac652e$exports, "quantileSorted", () => $9d7a860f7743d54c$export$f924a6cad778dddb);
$parcel$export($f472393370ac652e$exports, "quickselect", () => $9b168f882e54505c$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "range", () => $76bfd994379ae812$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "rank", () => $9703d58e159c6a39$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "least", () => $2919f991cf48f789$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "leastIndex", () => $4bb64caee7fd7668$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "greatest", () => $56e09332c9351df7$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "greatestIndex", () => $9de81001e9561b8d$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "scan", () => $7361b08e04c7ece1$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "shuffle", () => $0be835a1ddcd3763$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "shuffler", () => $0be835a1ddcd3763$export$a430ea578c95d356);
$parcel$export($f472393370ac652e$exports, "sum", () => $af8f393e927be101$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "ticks", () => $61a6aa10219c54a4$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "tickIncrement", () => $61a6aa10219c54a4$export$bc64d00cc98e7e95);
$parcel$export($f472393370ac652e$exports, "tickStep", () => $61a6aa10219c54a4$export$81087d9b915d4ede);
$parcel$export($f472393370ac652e$exports, "transpose", () => $6ad4c29945ad6445$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "variance", () => $1904078380ec6e3b$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "zip", () => $07b86715d51cd029$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "every", () => $959b7d9f305f6efc$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "some", () => $05d6c39d6fab3534$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "filter", () => $22d70cc5f4a662ad$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "map", () => $fbbc15a77ee649e4$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "reduce", () => $33f5e43c22fa6a9f$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "reverse", () => $1a8164e3bd07f6ae$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "sort", () => $e6e77d09e3a931c6$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "difference", () => $0cbfb2f74e7d3db7$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "disjoint", () => $ac9e89564cb4c258$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "intersection", () => $312754a7e169294a$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "subset", () => $17407d5b05f97a33$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "superset", () => $b7442016df5cee4e$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "union", () => $2a78a4c6ef9c3e4e$export$2e2bcd8739ae039);
$parcel$export($f472393370ac652e$exports, "InternMap", () => $4f005f9914ec0871$export$dcc6fb7d82b5bc7b);
$parcel$export($f472393370ac652e$exports, "InternSet", () => $4f005f9914ec0871$export$55278c3294239828);
function $c68a91b20f361908$export$2e2bcd8739ae039(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}



function $95efe9fd814c2a9d$export$2e2bcd8739ae039(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}


function $100ef5a581ce35fe$export$2e2bcd8739ae039(f) {
    let compare1, compare2, delta;
    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
        compare1 = (0, $c68a91b20f361908$export$2e2bcd8739ae039);
        compare2 = (d, x)=>(0, $c68a91b20f361908$export$2e2bcd8739ae039)(f(d), x);
        delta = (d, x)=>f(d) - x;
    } else {
        compare1 = f === (0, $c68a91b20f361908$export$2e2bcd8739ae039) || f === (0, $95efe9fd814c2a9d$export$2e2bcd8739ae039) ? f : $100ef5a581ce35fe$var$zero;
        compare2 = f;
        delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left: left,
        center: center,
        right: right
    };
}
function $100ef5a581ce35fe$var$zero() {
    return 0;
}


function $1b564a17597d92f6$export$2e2bcd8739ae039(x) {
    return x === null ? NaN : +x;
}
function* $1b564a17597d92f6$export$1f6c9cc012ebacae(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}


const $c6baf87b76d1189b$var$ascendingBisect = (0, $100ef5a581ce35fe$export$2e2bcd8739ae039)((0, $c68a91b20f361908$export$2e2bcd8739ae039));
const $c6baf87b76d1189b$export$4d945ad3ad5751b0 = $c6baf87b76d1189b$var$ascendingBisect.right;
const $c6baf87b76d1189b$export$df7d25c84ebd12a5 = $c6baf87b76d1189b$var$ascendingBisect.left;
const $c6baf87b76d1189b$export$c1cb828b1117c77b = (0, $100ef5a581ce35fe$export$2e2bcd8739ae039)((0, $1b564a17597d92f6$export$2e2bcd8739ae039)).center;
var $c6baf87b76d1189b$export$2e2bcd8739ae039 = $c6baf87b76d1189b$export$4d945ad3ad5751b0;




function $0646a4896cc1e3c9$export$2cc7ff91bcacba5e(values, r) {
    if (!((r = +r) >= 0)) throw new RangeError("invalid r");
    let length = values.length;
    if (!((length = Math.floor(length)) >= 0)) throw new RangeError("invalid length");
    if (!length || !r) return values;
    const blur = $0646a4896cc1e3c9$var$blurf(r);
    const temp = values.slice();
    blur(values, temp, 0, length, 1);
    blur(temp, values, 0, length, 1);
    blur(values, temp, 0, length, 1);
    return values;
}
const $0646a4896cc1e3c9$export$7671911241d9460b = $0646a4896cc1e3c9$var$Blur2($0646a4896cc1e3c9$var$blurf);
const $0646a4896cc1e3c9$export$44bf2d4c3a4dda00 = $0646a4896cc1e3c9$var$Blur2($0646a4896cc1e3c9$var$blurfImage);
function $0646a4896cc1e3c9$var$Blur2(blur) {
    return function(data, rx, ry = rx) {
        if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
        if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
        let { data: values, width: width, height: height } = data;
        if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
        if (!((height = Math.floor(height !== undefined ? height : values.length / width)) >= 0)) throw new RangeError("invalid height");
        if (!width || !height || !rx && !ry) return data;
        const blurx = rx && blur(rx);
        const blury = ry && blur(ry);
        const temp = values.slice();
        if (blurx && blury) {
            $0646a4896cc1e3c9$var$blurh(blurx, temp, values, width, height);
            $0646a4896cc1e3c9$var$blurh(blurx, values, temp, width, height);
            $0646a4896cc1e3c9$var$blurh(blurx, temp, values, width, height);
            $0646a4896cc1e3c9$var$blurv(blury, values, temp, width, height);
            $0646a4896cc1e3c9$var$blurv(blury, temp, values, width, height);
            $0646a4896cc1e3c9$var$blurv(blury, values, temp, width, height);
        } else if (blurx) {
            $0646a4896cc1e3c9$var$blurh(blurx, values, temp, width, height);
            $0646a4896cc1e3c9$var$blurh(blurx, temp, values, width, height);
            $0646a4896cc1e3c9$var$blurh(blurx, values, temp, width, height);
        } else if (blury) {
            $0646a4896cc1e3c9$var$blurv(blury, values, temp, width, height);
            $0646a4896cc1e3c9$var$blurv(blury, temp, values, width, height);
            $0646a4896cc1e3c9$var$blurv(blury, values, temp, width, height);
        }
        return data;
    };
}
function $0646a4896cc1e3c9$var$blurh(blur, T, S, w, h) {
    for(let y = 0, n = w * h; y < n;)blur(T, S, y, y += w, 1);
}
function $0646a4896cc1e3c9$var$blurv(blur, T, S, w, h) {
    for(let x = 0, n = w * h; x < w; ++x)blur(T, S, x, x + n, w);
}
function $0646a4896cc1e3c9$var$blurfImage(radius) {
    const blur = $0646a4896cc1e3c9$var$blurf(radius);
    return (T, S, start, stop, step)=>{
        start <<= 2, stop <<= 2, step <<= 2;
        blur(T, S, start + 0, stop + 0, step);
        blur(T, S, start + 1, stop + 1, step);
        blur(T, S, start + 2, stop + 2, step);
        blur(T, S, start + 3, stop + 3, step);
    };
}
// Given a target array T, a source array S, sets each value T[i] to the average
// of {S[i - r], …, S[i], …, S[i + r]}, where r = ⌊radius⌋, start <= i < stop,
// for each i, i + step, i + 2 * step, etc., and where S[j] is clamped between
// S[start] (inclusive) and S[stop] (exclusive). If the given radius is not an
// integer, S[i - r - 1] and S[i + r + 1] are added to the sum, each weighted
// according to r - ⌊radius⌋.
function $0646a4896cc1e3c9$var$blurf(radius) {
    const radius0 = Math.floor(radius);
    if (radius0 === radius) return $0646a4896cc1e3c9$var$bluri(radius);
    const t = radius - radius0;
    const w = 2 * radius + 1;
    return (T, S, start, stop, step)=>{
        if (!((stop -= step) >= start)) return; // inclusive stop
        let sum = radius0 * S[start];
        const s0 = step * radius0;
        const s1 = s0 + step;
        for(let i = start, j = start + s0; i < j; i += step)sum += S[Math.min(stop, i)];
        for(let i = start, j = stop; i <= j; i += step){
            sum += S[Math.min(stop, i + s0)];
            T[i] = (sum + t * (S[Math.max(start, i - s1)] + S[Math.min(stop, i + s1)])) / w;
            sum -= S[Math.max(start, i - s0)];
        }
    };
}
// Like blurf, but optimized for integer radius.
function $0646a4896cc1e3c9$var$bluri(radius) {
    const w = 2 * radius + 1;
    return (T, S, start, stop, step)=>{
        if (!((stop -= step) >= start)) return; // inclusive stop
        let sum = radius * S[start];
        const s = step * radius;
        for(let i = start, j = start + s; i < j; i += step)sum += S[Math.min(stop, i)];
        for(let i = start, j = stop; i <= j; i += step){
            sum += S[Math.min(stop, i + s)];
            T[i] = sum / w;
            sum -= S[Math.max(start, i - s)];
        }
    };
}


function $7dfbd18f2f67ee29$export$2e2bcd8739ae039(values, valueof) {
    let count = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count;
    }
    return count;
}


function $99163374af0c752d$var$length(array) {
    return array.length | 0;
}
function $99163374af0c752d$var$empty(length) {
    return !(length > 0);
}
function $99163374af0c752d$var$arrayify(values) {
    return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function $99163374af0c752d$var$reducer(reduce) {
    return (values)=>reduce(...values);
}
function $99163374af0c752d$export$2e2bcd8739ae039(...values) {
    const reduce = typeof values[values.length - 1] === "function" && $99163374af0c752d$var$reducer(values.pop());
    values = values.map($99163374af0c752d$var$arrayify);
    const lengths = values.map($99163374af0c752d$var$length);
    const j = values.length - 1;
    const index = new Array(j + 1).fill(0);
    const product = [];
    if (j < 0 || lengths.some($99163374af0c752d$var$empty)) return product;
    while(true){
        product.push(index.map((j, i)=>values[i][j]));
        let i = j;
        while(++index[i] === lengths[i]){
            if (i === 0) return reduce ? product.map(reduce) : product;
            index[i--] = 0;
        }
    }
}


function $4afb35dd89350820$export$2e2bcd8739ae039(values, valueof) {
    var sum = 0, index = 0;
    return Float64Array.from(values, valueof === undefined ? (v)=>sum += +v || 0 : (v)=>sum += +valueof(v, index++, values) || 0);
}



function $1904078380ec6e3b$export$2e2bcd8739ae039(values, valueof) {
    let count = 0;
    let delta;
    let mean = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
            delta = value - mean;
            mean += delta / ++count;
            sum += delta * (value - mean);
        }
    }
    if (count > 1) return sum / (count - 1);
}


function $bb4cec350a143e43$export$2e2bcd8739ae039(values, valueof) {
    const v = (0, $1904078380ec6e3b$export$2e2bcd8739ae039)(values, valueof);
    return v ? Math.sqrt(v) : v;
}


function $7eb08f14ace1fbef$export$2e2bcd8739ae039(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null) {
            if (min === undefined) {
                if (value >= value) min = max = value;
            } else {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    }
    return [
        min,
        max
    ];
}


// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class $e31757e61e2f6bd4$export$bda7ba77fb86c375 {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function $e31757e61e2f6bd4$export$61cb83f1a93e9fae(values, valueof) {
    const adder = new $e31757e61e2f6bd4$export$bda7ba77fb86c375();
    if (valueof === undefined) {
        for (let value of values)if (value = +value) adder.add(value);
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) adder.add(value);
    }
    return +adder;
}
function $e31757e61e2f6bd4$export$5a6391da70c130da(values, valueof) {
    const adder = new $e31757e61e2f6bd4$export$bda7ba77fb86c375();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0) : (v)=>adder.add(+valueof(v, ++index, values) || 0));
}


class $4f005f9914ec0871$export$dcc6fb7d82b5bc7b extends Map {
    constructor(entries, key = $4f005f9914ec0871$var$keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key, value] of entries)this.set(key, value);
    }
    get(key) {
        return super.get($4f005f9914ec0871$var$intern_get(this, key));
    }
    has(key) {
        return super.has($4f005f9914ec0871$var$intern_get(this, key));
    }
    set(key, value) {
        return super.set($4f005f9914ec0871$var$intern_set(this, key), value);
    }
    delete(key) {
        return super.delete($4f005f9914ec0871$var$intern_delete(this, key));
    }
}
class $4f005f9914ec0871$export$55278c3294239828 extends Set {
    constructor(values, key = $4f005f9914ec0871$var$keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has($4f005f9914ec0871$var$intern_get(this, value));
    }
    add(value) {
        return super.add($4f005f9914ec0871$var$intern_set(this, value));
    }
    delete(value) {
        return super.delete($4f005f9914ec0871$var$intern_delete(this, value));
    }
}
function $4f005f9914ec0871$var$intern_get({ _intern: _intern, _key: _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function $4f005f9914ec0871$var$intern_set({ _intern: _intern, _key: _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function $4f005f9914ec0871$var$intern_delete({ _intern: _intern, _key: _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
    }
    return value;
}
function $4f005f9914ec0871$var$keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}


function $f5f176ffbd432242$export$2e2bcd8739ae039(x) {
    return x;
}


function $53f36c292a6c8e82$export$2e2bcd8739ae039(values, ...keys) {
    return $53f36c292a6c8e82$var$nest(values, (0, $f5f176ffbd432242$export$2e2bcd8739ae039), (0, $f5f176ffbd432242$export$2e2bcd8739ae039), keys);
}
function $53f36c292a6c8e82$export$d4abd167df80d226(values, ...keys) {
    return $53f36c292a6c8e82$var$nest(values, Array.from, (0, $f5f176ffbd432242$export$2e2bcd8739ae039), keys);
}
function $53f36c292a6c8e82$var$flatten(groups, keys) {
    for(let i = 1, n = keys.length; i < n; ++i)groups = groups.flatMap((g)=>g.pop().map(([key, value])=>[
                ...g,
                key,
                value
            ]));
    return groups;
}
function $53f36c292a6c8e82$export$4ed6fc79ae2c51b5(values, ...keys) {
    return $53f36c292a6c8e82$var$flatten($53f36c292a6c8e82$export$d4abd167df80d226(values, ...keys), keys);
}
function $53f36c292a6c8e82$export$788c7294dbcd8e36(values, reduce, ...keys) {
    return $53f36c292a6c8e82$var$flatten($53f36c292a6c8e82$export$24814875ed03194b(values, reduce, ...keys), keys);
}
function $53f36c292a6c8e82$export$97e11c0b0230f130(values, reduce, ...keys) {
    return $53f36c292a6c8e82$var$nest(values, (0, $f5f176ffbd432242$export$2e2bcd8739ae039), reduce, keys);
}
function $53f36c292a6c8e82$export$24814875ed03194b(values, reduce, ...keys) {
    return $53f36c292a6c8e82$var$nest(values, Array.from, reduce, keys);
}
function $53f36c292a6c8e82$export$b610b8812bbcded9(values, ...keys) {
    return $53f36c292a6c8e82$var$nest(values, (0, $f5f176ffbd432242$export$2e2bcd8739ae039), $53f36c292a6c8e82$var$unique, keys);
}
function $53f36c292a6c8e82$export$8b04ba635e5803cd(values, ...keys) {
    return $53f36c292a6c8e82$var$nest(values, Array.from, $53f36c292a6c8e82$var$unique, keys);
}
function $53f36c292a6c8e82$var$unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
}
function $53f36c292a6c8e82$var$nest(values, map, reduce, keys) {
    return function regroup(values, i) {
        if (i >= keys.length) return reduce(values);
        const groups = new (0, $4f005f9914ec0871$export$dcc6fb7d82b5bc7b)();
        const keyof = keys[i++];
        let index = -1;
        for (const value of values){
            const key = keyof(value, ++index, values);
            const group = groups.get(key);
            if (group) group.push(value);
            else groups.set(key, [
                value
            ]);
        }
        for (const [key, values] of groups)groups.set(key, regroup(values, i));
        return map(groups);
    }(values, 0);
}





function $a81dee5edaaa1ec8$export$2e2bcd8739ae039(source, keys) {
    return Array.from(keys, (key)=>source[key]);
}


function $e6e77d09e3a931c6$export$2e2bcd8739ae039(values, ...F) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    let [f] = F;
    if (f && f.length !== 2 || F.length > 1) {
        const index = Uint32Array.from(values, (d, i)=>i);
        if (F.length > 1) {
            F = F.map((f)=>values.map(f));
            index.sort((i, j)=>{
                for (const f of F){
                    const c = $e6e77d09e3a931c6$export$686e14b8469efec4(f[i], f[j]);
                    if (c) return c;
                }
            });
        } else {
            f = values.map(f);
            index.sort((i, j)=>$e6e77d09e3a931c6$export$686e14b8469efec4(f[i], f[j]));
        }
        return (0, $a81dee5edaaa1ec8$export$2e2bcd8739ae039)(values, index);
    }
    return values.sort($e6e77d09e3a931c6$export$5708b2c031939e56(f));
}
function $e6e77d09e3a931c6$export$5708b2c031939e56(compare = (0, $c68a91b20f361908$export$2e2bcd8739ae039)) {
    if (compare === (0, $c68a91b20f361908$export$2e2bcd8739ae039)) return $e6e77d09e3a931c6$export$686e14b8469efec4;
    if (typeof compare !== "function") throw new TypeError("compare is not a function");
    return (a, b)=>{
        const x = compare(a, b);
        if (x || x === 0) return x;
        return (compare(b, b) === 0) - (compare(a, a) === 0);
    };
}
function $e6e77d09e3a931c6$export$686e14b8469efec4(a, b) {
    return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}


function $3162b30114e61a10$export$2e2bcd8739ae039(values, reduce, key) {
    return (reduce.length !== 2 ? (0, $e6e77d09e3a931c6$export$2e2bcd8739ae039)((0, $53f36c292a6c8e82$export$97e11c0b0230f130)(values, reduce, key), ([ak, av], [bk, bv])=>(0, $c68a91b20f361908$export$2e2bcd8739ae039)(av, bv) || (0, $c68a91b20f361908$export$2e2bcd8739ae039)(ak, bk)) : (0, $e6e77d09e3a931c6$export$2e2bcd8739ae039)((0, $53f36c292a6c8e82$export$2e2bcd8739ae039)(values, key), ([ak, av], [bk, bv])=>reduce(av, bv) || (0, $c68a91b20f361908$export$2e2bcd8739ae039)(ak, bk))).map(([key])=>key);
}


var $537d73c01291391d$var$array = Array.prototype;
var $537d73c01291391d$export$58adb3bec8346d0f = $537d73c01291391d$var$array.slice;
var $537d73c01291391d$export$871de8747c9eaa88 = $537d73c01291391d$var$array.map;



function $71997c52c7d2d921$export$2e2bcd8739ae039(x) {
    return ()=>x;
}




const $61a6aa10219c54a4$var$e10 = Math.sqrt(50), $61a6aa10219c54a4$var$e5 = Math.sqrt(10), $61a6aa10219c54a4$var$e2 = Math.sqrt(2);
function $61a6aa10219c54a4$var$tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= $61a6aa10219c54a4$var$e10 ? 10 : error >= $61a6aa10219c54a4$var$e5 ? 5 : error >= $61a6aa10219c54a4$var$e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
        inc = Math.pow(10, -power) / factor;
        i1 = Math.round(start * inc);
        i2 = Math.round(stop * inc);
        if (i1 / inc < start) ++i1;
        if (i2 / inc > stop) --i2;
        inc = -inc;
    } else {
        inc = Math.pow(10, power) * factor;
        i1 = Math.round(start / inc);
        i2 = Math.round(stop / inc);
        if (i1 * inc < start) ++i1;
        if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return $61a6aa10219c54a4$var$tickSpec(start, stop, count * 2);
    return [
        i1,
        i2,
        inc
    ];
}
function $61a6aa10219c54a4$export$2e2bcd8739ae039(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [
        start
    ];
    const reverse = stop < start, [i1, i2, inc] = reverse ? $61a6aa10219c54a4$var$tickSpec(stop, start, count) : $61a6aa10219c54a4$var$tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks = new Array(n);
    if (reverse) {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) * inc;
    } else {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) * inc;
    }
    return ticks;
}
function $61a6aa10219c54a4$export$bc64d00cc98e7e95(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return $61a6aa10219c54a4$var$tickSpec(start, stop, count)[2];
}
function $61a6aa10219c54a4$export$81087d9b915d4ede(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse = stop < start, inc = reverse ? $61a6aa10219c54a4$export$bc64d00cc98e7e95(stop, start, count) : $61a6aa10219c54a4$export$bc64d00cc98e7e95(start, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}


function $84db00d2d0e4bb1e$export$2e2bcd8739ae039(start, stop, count) {
    let prestep;
    while(true){
        const step = (0, $61a6aa10219c54a4$export$bc64d00cc98e7e95)(start, stop, count);
        if (step === prestep || step === 0 || !isFinite(step)) return [
            start,
            stop
        ];
        else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
        }
        prestep = step;
    }
}




function $b2fd3319be99d760$export$2e2bcd8739ae039(values) {
    return Math.max(1, Math.ceil(Math.log((0, $7dfbd18f2f67ee29$export$2e2bcd8739ae039)(values)) / Math.LN2) + 1);
}


function $f80e1da92b4f553d$export$2e2bcd8739ae039() {
    var value = (0, $f5f176ffbd432242$export$2e2bcd8739ae039), domain = (0, $7eb08f14ace1fbef$export$2e2bcd8739ae039), threshold = (0, $b2fd3319be99d760$export$2e2bcd8739ae039);
    function histogram(data) {
        if (!Array.isArray(data)) data = Array.from(data);
        var i, n = data.length, x, step, values = new Array(n);
        for(i = 0; i < n; ++i)values[i] = value(data[i], i, data);
        var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
        // Convert number of thresholds into uniform thresholds, and nice the
        // default domain accordingly.
        if (!Array.isArray(tz)) {
            const max = x1, tn = +tz;
            if (domain === (0, $7eb08f14ace1fbef$export$2e2bcd8739ae039)) [x0, x1] = (0, $84db00d2d0e4bb1e$export$2e2bcd8739ae039)(x0, x1, tn);
            tz = (0, $61a6aa10219c54a4$export$2e2bcd8739ae039)(x0, x1, tn);
            // If the domain is aligned with the first tick (which it will by
            // default), then we can use quantization rather than bisection to bin
            // values, which is substantially faster.
            if (tz[0] <= x0) step = (0, $61a6aa10219c54a4$export$bc64d00cc98e7e95)(x0, x1, tn);
            // If the last threshold is coincident with the domain’s upper bound, the
            // last bin will be zero-width. If the default domain is used, and this
            // last threshold is coincident with the maximum input value, we can
            // extend the niced upper bound by one tick to ensure uniform bin widths;
            // otherwise, we simply remove the last threshold. Note that we don’t
            // coerce values or the domain to numbers, and thus must be careful to
            // compare order (>=) rather than strict equality (===)!
            if (tz[tz.length - 1] >= x1) {
                if (max >= x1 && domain === (0, $7eb08f14ace1fbef$export$2e2bcd8739ae039)) {
                    const step = (0, $61a6aa10219c54a4$export$bc64d00cc98e7e95)(x0, x1, tn);
                    if (isFinite(step)) {
                        if (step > 0) x1 = (Math.floor(x1 / step) + 1) * step;
                        else if (step < 0) x1 = (Math.ceil(x1 * -step) + 1) / -step;
                    }
                } else tz.pop();
            }
        }
        // Remove any thresholds outside the domain.
        // Be careful not to mutate an array owned by the user!
        var m = tz.length, a = 0, b = m;
        while(tz[a] <= x0)++a;
        while(tz[b - 1] > x1)--b;
        if (a || b < m) tz = tz.slice(a, b), m = b - a;
        var bins = new Array(m + 1), bin;
        // Initialize bins.
        for(i = 0; i <= m; ++i){
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }
        // Assign data to bins by value, ignoring any outside the domain.
        if (isFinite(step)) {
            if (step > 0) {
                for(i = 0; i < n; ++i)if ((x = values[i]) != null && x0 <= x && x <= x1) bins[Math.min(m, Math.floor((x - x0) / step))].push(data[i]);
            } else if (step < 0) {
                for(i = 0; i < n; ++i)if ((x = values[i]) != null && x0 <= x && x <= x1) {
                    const j = Math.floor((x0 - x) * step);
                    bins[Math.min(m, j + (tz[j] <= x))].push(data[i]); // handle off-by-one due to rounding
                }
            }
        } else {
            for(i = 0; i < n; ++i)if ((x = values[i]) != null && x0 <= x && x <= x1) bins[(0, $c6baf87b76d1189b$export$2e2bcd8739ae039)(tz, x, 0, m)].push(data[i]);
        }
        return bins;
    }
    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $71997c52c7d2d921$export$2e2bcd8739ae039)(_), histogram) : value;
    };
    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : (0, $71997c52c7d2d921$export$2e2bcd8739ae039)([
            _[0],
            _[1]
        ]), histogram) : domain;
    };
    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : (0, $71997c52c7d2d921$export$2e2bcd8739ae039)(Array.isArray(_) ? (0, $537d73c01291391d$export$58adb3bec8346d0f).call(_) : _), histogram) : threshold;
    };
    return histogram;
}



function $294276fe443af5f9$export$2e2bcd8739ae039(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}


function $753dc84cc1c818f1$export$2e2bcd8739ae039(values, valueof) {
    let max;
    let maxIndex = -1;
    let index = -1;
    if (valueof === undefined) for (const value of values){
        ++index;
        if (value != null && (max < value || max === undefined && value >= value)) max = value, maxIndex = index;
    }
    else {
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value, maxIndex = index;
    }
    return maxIndex;
}


function $d0327ad89fbe8d01$export$2e2bcd8739ae039(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}


function $1c849d54903f48d6$export$2e2bcd8739ae039(values, valueof) {
    let min;
    let minIndex = -1;
    let index = -1;
    if (valueof === undefined) for (const value of values){
        ++index;
        if (value != null && (min > value || min === undefined && value >= value)) min = value, minIndex = index;
    }
    else {
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value, minIndex = index;
    }
    return minIndex;
}



function $9b168f882e54505c$export$2e2bcd8739ae039(array, k, left = 0, right = Infinity, compare) {
    k = Math.floor(k);
    left = Math.floor(Math.max(0, left));
    right = Math.floor(Math.min(array.length - 1, right));
    if (!(left <= k && k <= right)) return array;
    compare = compare === undefined ? (0, $e6e77d09e3a931c6$export$686e14b8469efec4) : (0, $e6e77d09e3a931c6$export$5708b2c031939e56)(compare);
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            $9b168f882e54505c$export$2e2bcd8739ae039(array, k, newLeft, newRight, compare);
        }
        const t = array[k];
        let i = left;
        let j = right;
        $9b168f882e54505c$var$swap(array, left, k);
        if (compare(array[right], t) > 0) $9b168f882e54505c$var$swap(array, left, right);
        while(i < j){
            $9b168f882e54505c$var$swap(array, i, j), ++i, --j;
            while(compare(array[i], t) < 0)++i;
            while(compare(array[j], t) > 0)--j;
        }
        if (compare(array[left], t) === 0) $9b168f882e54505c$var$swap(array, left, j);
        else ++j, $9b168f882e54505c$var$swap(array, j, right);
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
    return array;
}
function $9b168f882e54505c$var$swap(array, i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}





function $56e09332c9351df7$export$2e2bcd8739ae039(values, compare = (0, $c68a91b20f361908$export$2e2bcd8739ae039)) {
    let max;
    let defined = false;
    if (compare.length === 1) {
        let maxValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? (0, $c68a91b20f361908$export$2e2bcd8739ae039)(value, maxValue) > 0 : (0, $c68a91b20f361908$export$2e2bcd8739ae039)(value, value) === 0) {
                max = element;
                maxValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, max) > 0 : compare(value, value) === 0) {
            max = value;
            defined = true;
        }
    }
    return max;
}


function $9d7a860f7743d54c$export$2e2bcd8739ae039(values, p, valueof) {
    values = Float64Array.from((0, $1b564a17597d92f6$export$1f6c9cc012ebacae)(values, valueof));
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return (0, $d0327ad89fbe8d01$export$2e2bcd8739ae039)(values);
    if (p >= 1) return (0, $294276fe443af5f9$export$2e2bcd8739ae039)(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = (0, $294276fe443af5f9$export$2e2bcd8739ae039)((0, $9b168f882e54505c$export$2e2bcd8739ae039)(values, i0).subarray(0, i0 + 1)), value1 = (0, $d0327ad89fbe8d01$export$2e2bcd8739ae039)(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
}
function $9d7a860f7743d54c$export$f924a6cad778dddb(values, p, valueof = (0, $1b564a17597d92f6$export$2e2bcd8739ae039)) {
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}
function $9d7a860f7743d54c$export$f1fcc854ecc6ce55(values, p, valueof = (0, $1b564a17597d92f6$export$2e2bcd8739ae039)) {
    if (isNaN(p = +p)) return;
    numbers = Float64Array.from(values, (_, i)=>(0, $1b564a17597d92f6$export$2e2bcd8739ae039)(valueof(values[i], i, values)));
    if (p <= 0) return (0, $1c849d54903f48d6$export$2e2bcd8739ae039)(numbers);
    if (p >= 1) return (0, $753dc84cc1c818f1$export$2e2bcd8739ae039)(numbers);
    var numbers, index = Uint32Array.from(values, (_, i)=>i), j = numbers.length - 1, i = Math.floor(j * p);
    (0, $9b168f882e54505c$export$2e2bcd8739ae039)(index, i, 0, j, (i, j)=>(0, $e6e77d09e3a931c6$export$686e14b8469efec4)(numbers[i], numbers[j]));
    i = (0, $56e09332c9351df7$export$2e2bcd8739ae039)(index.subarray(0, i + 1), (i)=>numbers[i]);
    return i >= 0 ? i : -1;
}


function $0f97ebdd7a2b49af$export$2e2bcd8739ae039(values, min, max) {
    const c = (0, $7dfbd18f2f67ee29$export$2e2bcd8739ae039)(values), d = (0, $9d7a860f7743d54c$export$2e2bcd8739ae039)(values, 0.75) - (0, $9d7a860f7743d54c$export$2e2bcd8739ae039)(values, 0.25);
    return c && d ? Math.ceil((max - min) / (2 * d * Math.pow(c, -1 / 3))) : 1;
}




function $f437d37a135f70f1$export$2e2bcd8739ae039(values, min, max) {
    const c = (0, $7dfbd18f2f67ee29$export$2e2bcd8739ae039)(values), d = (0, $bb4cec350a143e43$export$2e2bcd8739ae039)(values);
    return c && d ? Math.ceil((max - min) * Math.cbrt(c) / (3.49 * d)) : 1;
}





function $35d2ae9a5cbc11af$export$2e2bcd8739ae039(values, valueof) {
    let count = 0;
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) ++count, sum += value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) ++count, sum += value;
    }
    if (count) return sum / count;
}



function $9379fdcb7e7647fe$export$2e2bcd8739ae039(values, valueof) {
    return (0, $9d7a860f7743d54c$export$2e2bcd8739ae039)(values, 0.5, valueof);
}
function $9379fdcb7e7647fe$export$57546ab4fd3c7a5e(values, valueof) {
    return (0, $9d7a860f7743d54c$export$f1fcc854ecc6ce55)(values, 0.5, valueof);
}


function* $961a196a06e40be5$var$flatten(arrays) {
    for (const array of arrays)yield* array;
}
function $961a196a06e40be5$export$2e2bcd8739ae039(arrays) {
    return Array.from($961a196a06e40be5$var$flatten(arrays));
}





function $758c80362c9a8053$export$2e2bcd8739ae039(values, valueof) {
    const counts = new (0, $4f005f9914ec0871$export$dcc6fb7d82b5bc7b)();
    if (valueof === undefined) {
        for (let value of values)if (value != null && value >= value) counts.set(value, (counts.get(value) || 0) + 1);
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && value >= value) counts.set(value, (counts.get(value) || 0) + 1);
    }
    let modeValue;
    let modeCount = 0;
    for (const [value, count] of counts)if (count > modeCount) {
        modeCount = count;
        modeValue = value;
    }
    return modeValue;
}



function $9bb5b215b66c6f34$export$2e2bcd8739ae039(values, pairof = $9bb5b215b66c6f34$export$a04cb3fe8b81dd) {
    const pairs = [];
    let previous;
    let first = false;
    for (const value of values){
        if (first) pairs.push(pairof(previous, value));
        previous = value;
        first = true;
    }
    return pairs;
}
function $9bb5b215b66c6f34$export$a04cb3fe8b81dd(a, b) {
    return [
        a,
        b
    ];
}





function $76bfd994379ae812$export$2e2bcd8739ae039(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
}




function $9703d58e159c6a39$export$2e2bcd8739ae039(values, valueof = (0, $c68a91b20f361908$export$2e2bcd8739ae039)) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    let V = Array.from(values);
    const R = new Float64Array(V.length);
    if (valueof.length !== 2) V = V.map(valueof), valueof = (0, $c68a91b20f361908$export$2e2bcd8739ae039);
    const compareIndex = (i, j)=>valueof(V[i], V[j]);
    let k, r;
    values = Uint32Array.from(V, (_, i)=>i);
    // Risky chaining due to Safari 14 https://github.com/d3/d3-array/issues/123
    values.sort(valueof === (0, $c68a91b20f361908$export$2e2bcd8739ae039) ? (i, j)=>(0, $e6e77d09e3a931c6$export$686e14b8469efec4)(V[i], V[j]) : (0, $e6e77d09e3a931c6$export$5708b2c031939e56)(compareIndex));
    values.forEach((j, i)=>{
        const c = compareIndex(j, k === undefined ? j : k);
        if (c >= 0) {
            if (k === undefined || c > 0) k = j, r = i;
            R[j] = r;
        } else R[j] = NaN;
    });
    return R;
}



function $2919f991cf48f789$export$2e2bcd8739ae039(values, compare = (0, $c68a91b20f361908$export$2e2bcd8739ae039)) {
    let min;
    let defined = false;
    if (compare.length === 1) {
        let minValue;
        for (const element of values){
            const value = compare(element);
            if (defined ? (0, $c68a91b20f361908$export$2e2bcd8739ae039)(value, minValue) < 0 : (0, $c68a91b20f361908$export$2e2bcd8739ae039)(value, value) === 0) {
                min = element;
                minValue = value;
                defined = true;
            }
        }
    } else {
        for (const value of values)if (defined ? compare(value, min) < 0 : compare(value, value) === 0) {
            min = value;
            defined = true;
        }
    }
    return min;
}




function $4bb64caee7fd7668$export$2e2bcd8739ae039(values, compare = (0, $c68a91b20f361908$export$2e2bcd8739ae039)) {
    if (compare.length === 1) return (0, $1c849d54903f48d6$export$2e2bcd8739ae039)(values, compare);
    let minValue;
    let min = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (min < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
            minValue = value;
            min = index;
        }
    }
    return min;
}





function $9de81001e9561b8d$export$2e2bcd8739ae039(values, compare = (0, $c68a91b20f361908$export$2e2bcd8739ae039)) {
    if (compare.length === 1) return (0, $753dc84cc1c818f1$export$2e2bcd8739ae039)(values, compare);
    let maxValue;
    let max = -1;
    let index = -1;
    for (const value of values){
        ++index;
        if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
            maxValue = value;
            max = index;
        }
    }
    return max;
}



function $7361b08e04c7ece1$export$2e2bcd8739ae039(values, compare) {
    const index = (0, $4bb64caee7fd7668$export$2e2bcd8739ae039)(values, compare);
    return index < 0 ? undefined : index;
}


var $0be835a1ddcd3763$export$2e2bcd8739ae039 = $0be835a1ddcd3763$export$a430ea578c95d356(Math.random);
function $0be835a1ddcd3763$export$a430ea578c95d356(random) {
    return function shuffle(array, i0 = 0, i1 = array.length) {
        let m = i1 - (i0 = +i0);
        while(m){
            const i = random() * m-- | 0, t = array[m + i0];
            array[m + i0] = array[i + i0];
            array[i + i0] = t;
        }
        return array;
    };
}


function $af8f393e927be101$export$2e2bcd8739ae039(values, valueof) {
    let sum = 0;
    if (valueof === undefined) {
        for (let value of values)if (value = +value) sum += value;
    } else {
        let index = -1;
        for (let value of values)if (value = +valueof(value, ++index, values)) sum += value;
    }
    return sum;
}




function $6ad4c29945ad6445$export$2e2bcd8739ae039(matrix) {
    if (!(n = matrix.length)) return [];
    for(var i = -1, m = (0, $d0327ad89fbe8d01$export$2e2bcd8739ae039)(matrix, $6ad4c29945ad6445$var$length), transpose = new Array(m); ++i < m;)for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;)row[j] = matrix[j][i];
    return transpose;
}
function $6ad4c29945ad6445$var$length(d) {
    return d.length;
}




function $07b86715d51cd029$export$2e2bcd8739ae039() {
    return (0, $6ad4c29945ad6445$export$2e2bcd8739ae039)(arguments);
}


function $959b7d9f305f6efc$export$2e2bcd8739ae039(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (!test(value, ++index, values)) return false;
    }
    return true;
}


function $05d6c39d6fab3534$export$2e2bcd8739ae039(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index = -1;
    for (const value of values){
        if (test(value, ++index, values)) return true;
    }
    return false;
}


function $22d70cc5f4a662ad$export$2e2bcd8739ae039(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    const array = [];
    let index = -1;
    for (const value of values)if (test(value, ++index, values)) array.push(value);
    return array;
}


function $fbbc15a77ee649e4$export$2e2bcd8739ae039(values, mapper) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
    return Array.from(values, (value, index)=>mapper(value, index, values));
}


function $33f5e43c22fa6a9f$export$2e2bcd8739ae039(values, reducer, value) {
    if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
    const iterator = values[Symbol.iterator]();
    let done, next, index = -1;
    if (arguments.length < 3) {
        ({ done: done, value: value } = iterator.next());
        if (done) return;
        ++index;
    }
    while({ done: done, value: next } = iterator.next(), !done)value = reducer(value, next, ++index, values);
    return value;
}


function $1a8164e3bd07f6ae$export$2e2bcd8739ae039(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
}




function $0cbfb2f74e7d3db7$export$2e2bcd8739ae039(values, ...others) {
    values = new (0, $4f005f9914ec0871$export$55278c3294239828)(values);
    for (const other of others)for (const value of other)values.delete(value);
    return values;
}



function $ac9e89564cb4c258$export$2e2bcd8739ae039(values, other) {
    const iterator = other[Symbol.iterator](), set = new (0, $4f005f9914ec0871$export$55278c3294239828)();
    for (const v of values){
        if (set.has(v)) return false;
        let value, done;
        while({ value: value, done: done } = iterator.next()){
            if (done) break;
            if (Object.is(v, value)) return false;
            set.add(value);
        }
    }
    return true;
}



function $312754a7e169294a$export$2e2bcd8739ae039(values, ...others) {
    values = new (0, $4f005f9914ec0871$export$55278c3294239828)(values);
    others = others.map($312754a7e169294a$var$set);
    out: for (const value of values){
        for (const other of others)if (!other.has(value)) {
            values.delete(value);
            continue out;
        }
    }
    return values;
}
function $312754a7e169294a$var$set(values) {
    return values instanceof (0, $4f005f9914ec0871$export$55278c3294239828) ? values : new (0, $4f005f9914ec0871$export$55278c3294239828)(values);
}


function $b7442016df5cee4e$export$2e2bcd8739ae039(values, other) {
    const iterator = values[Symbol.iterator](), set = new Set();
    for (const o of other){
        const io = $b7442016df5cee4e$var$intern(o);
        if (set.has(io)) continue;
        let value, done;
        while({ value: value, done: done } = iterator.next()){
            if (done) return false;
            const ivalue = $b7442016df5cee4e$var$intern(value);
            set.add(ivalue);
            if (Object.is(io, ivalue)) break;
        }
    }
    return true;
}
function $b7442016df5cee4e$var$intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}


function $17407d5b05f97a33$export$2e2bcd8739ae039(values, other) {
    return (0, $b7442016df5cee4e$export$2e2bcd8739ae039)(other, values);
}




function $2a78a4c6ef9c3e4e$export$2e2bcd8739ae039(...others) {
    const set = new (0, $4f005f9914ec0871$export$55278c3294239828)();
    for (const other of others)for (const o of other)set.add(o);
    return set;
}





var $f1348755dd98ee8e$exports = {};

$parcel$export($f1348755dd98ee8e$exports, "axisTop", () => $91e82ca345c58ea6$export$59b8cfab074bdeb1);
$parcel$export($f1348755dd98ee8e$exports, "axisRight", () => $91e82ca345c58ea6$export$b0d2e24dc4f898f0);
$parcel$export($f1348755dd98ee8e$exports, "axisBottom", () => $91e82ca345c58ea6$export$e5cb22533a15e72e);
$parcel$export($f1348755dd98ee8e$exports, "axisLeft", () => $91e82ca345c58ea6$export$2749afb169a520d2);
function $c45dcdcb74a5cae3$export$2e2bcd8739ae039(x) {
    return x;
}


var $91e82ca345c58ea6$var$top = 1, $91e82ca345c58ea6$var$right = 2, $91e82ca345c58ea6$var$bottom = 3, $91e82ca345c58ea6$var$left = 4, $91e82ca345c58ea6$var$epsilon = 1e-6;
function $91e82ca345c58ea6$var$translateX(x) {
    return "translate(" + x + ",0)";
}
function $91e82ca345c58ea6$var$translateY(y) {
    return "translate(0," + y + ")";
}
function $91e82ca345c58ea6$var$number(scale) {
    return (d)=>+scale(d);
}
function $91e82ca345c58ea6$var$center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round()) offset = Math.round(offset);
    return (d)=>+scale(d) + offset;
}
function $91e82ca345c58ea6$var$entering() {
    return !this.__axis;
}
function $91e82ca345c58ea6$var$axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === $91e82ca345c58ea6$var$top || orient === $91e82ca345c58ea6$var$left ? -1 : 1, x = orient === $91e82ca345c58ea6$var$left || orient === $91e82ca345c58ea6$var$right ? "x" : "y", transform = orient === $91e82ca345c58ea6$var$top || orient === $91e82ca345c58ea6$var$bottom ? $91e82ca345c58ea6$var$translateX : $91e82ca345c58ea6$var$translateY;
    function axis(context) {
        var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : (0, $c45dcdcb74a5cae3$export$2e2bcd8739ae039) : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? $91e82ca345c58ea6$var$center : $91e82ca345c58ea6$var$number)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([
            null
        ]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
        path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
        text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === $91e82ca345c58ea6$var$top ? "0em" : orient === $91e82ca345c58ea6$var$bottom ? "0.71em" : "0.32em"));
        if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context).attr("opacity", $91e82ca345c58ea6$var$epsilon).attr("transform", function(d) {
                return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
            });
            tickEnter.attr("opacity", $91e82ca345c58ea6$var$epsilon).attr("transform", function(d) {
                var p = this.parentNode.__axis;
                return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
            });
        }
        tickExit.remove();
        path.attr("d", orient === $91e82ca345c58ea6$var$left || orient === $91e82ca345c58ea6$var$right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
        tick.attr("opacity", 1).attr("transform", function(d) {
            return transform(position(d) + offset);
        });
        line.attr(x + "2", k * tickSizeInner);
        text.attr(x, k * spacing).text(format);
        selection.filter($91e82ca345c58ea6$var$entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === $91e82ca345c58ea6$var$right ? "start" : orient === $91e82ca345c58ea6$var$left ? "end" : "middle");
        selection.each(function() {
            this.__axis = position;
        });
    }
    axis.scale = function(_) {
        return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function() {
        return tickArguments = Array.from(arguments), axis;
    };
    axis.tickArguments = function(_) {
        return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function(_) {
        return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function(_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function(_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function(_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function(_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function(_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    axis.offset = function(_) {
        return arguments.length ? (offset = +_, axis) : offset;
    };
    return axis;
}
function $91e82ca345c58ea6$export$59b8cfab074bdeb1(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$top, scale);
}
function $91e82ca345c58ea6$export$b0d2e24dc4f898f0(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$right, scale);
}
function $91e82ca345c58ea6$export$e5cb22533a15e72e(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$bottom, scale);
}
function $91e82ca345c58ea6$export$2749afb169a520d2(scale) {
    return $91e82ca345c58ea6$var$axis($91e82ca345c58ea6$var$left, scale);
}




var $36bbe195d131a859$exports = {};

$parcel$export($36bbe195d131a859$exports, "brush", () => $b02666738bc96fde$export$2e2bcd8739ae039);
$parcel$export($36bbe195d131a859$exports, "brushX", () => $b02666738bc96fde$export$979ace6c88860aa8);
$parcel$export($36bbe195d131a859$exports, "brushY", () => $b02666738bc96fde$export$468748b530991c54);
$parcel$export($36bbe195d131a859$exports, "brushSelection", () => $b02666738bc96fde$export$69760394fc76f689);
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


var $579fea68b88fae2c$exports = {};

$parcel$export($579fea68b88fae2c$exports, "transition", () => $8903c5148cd9b6a2$export$2e2bcd8739ae039);
$parcel$export($579fea68b88fae2c$exports, "active", () => $8d7398e9e1fcbae2$export$2e2bcd8739ae039);
$parcel$export($579fea68b88fae2c$exports, "interrupt", () => $9d50172395a2d838$export$2e2bcd8739ae039);


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





var $8d7398e9e1fcbae2$var$root = [
    null
];
function $8d7398e9e1fcbae2$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).state > (0, $6932ffa19d32f77c$export$584530fe98d14a84) && schedule.name === name) return new (0, $8903c5148cd9b6a2$export$be58926105124dd4)([
                [
                    node
                ]
            ], $8d7398e9e1fcbae2$var$root, name, +i);
        }
    }
    return null;
}





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




var $a1e3d47cf0471c10$exports = {};

$parcel$export($a1e3d47cf0471c10$exports, "chord", () => $9de5e783b434dbbe$export$2e2bcd8739ae039);
$parcel$export($a1e3d47cf0471c10$exports, "chordTranspose", () => $9de5e783b434dbbe$export$ccf0fb804feeadb0);
$parcel$export($a1e3d47cf0471c10$exports, "chordDirected", () => $9de5e783b434dbbe$export$66e653ba9a7a4d8c);
$parcel$export($a1e3d47cf0471c10$exports, "ribbon", () => $b2e243a98d315b0f$export$2e2bcd8739ae039);
$parcel$export($a1e3d47cf0471c10$exports, "ribbonArrow", () => $b2e243a98d315b0f$export$63f6c8bb9e816a34);
var $ef387dbdce28e965$export$2335f513bbd82c6d = Math.abs;
var $ef387dbdce28e965$export$50d414a77b60d802 = Math.cos;
var $ef387dbdce28e965$export$5de3937cb4b592ed = Math.sin;
var $ef387dbdce28e965$export$18c7bea995a110f = Math.PI;
var $ef387dbdce28e965$export$e51408a300e8929a = $ef387dbdce28e965$export$18c7bea995a110f / 2;
var $ef387dbdce28e965$export$a4b4b4d4d776fe92 = $ef387dbdce28e965$export$18c7bea995a110f * 2;
var $ef387dbdce28e965$export$8960430cfd85939f = Math.max;
var $ef387dbdce28e965$export$6c421550c66a327d = 1e-12;


function $9de5e783b434dbbe$var$range(i, j) {
    return Array.from({
        length: j - i
    }, (_, k)=>i + k);
}
function $9de5e783b434dbbe$var$compareValue(compare) {
    return function(a, b) {
        return compare(a.source.value + a.target.value, b.source.value + b.target.value);
    };
}
function $9de5e783b434dbbe$export$2e2bcd8739ae039() {
    return $9de5e783b434dbbe$var$chord(false, false);
}
function $9de5e783b434dbbe$export$ccf0fb804feeadb0() {
    return $9de5e783b434dbbe$var$chord(false, true);
}
function $9de5e783b434dbbe$export$66e653ba9a7a4d8c() {
    return $9de5e783b434dbbe$var$chord(true, false);
}
function $9de5e783b434dbbe$var$chord(directed, transpose) {
    var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
    function chord(matrix) {
        var n = matrix.length, groupSums = new Array(n), groupIndex = $9de5e783b434dbbe$var$range(0, n), chords = new Array(n * n), groups = new Array(n), k = 0, dx;
        matrix = Float64Array.from({
            length: n * n
        }, transpose ? (_, i)=>matrix[i % n][i / n | 0] : (_, i)=>matrix[i / n | 0][i % n]);
        // Compute the scaling factor from value to angle in [0, 2pi].
        for(let i = 0; i < n; ++i){
            let x = 0;
            for(let j = 0; j < n; ++j)x += matrix[i * n + j] + directed * matrix[j * n + i];
            k += groupSums[i] = x;
        }
        k = (0, $ef387dbdce28e965$export$8960430cfd85939f)(0, (0, $ef387dbdce28e965$export$a4b4b4d4d776fe92) - padAngle * n) / k;
        dx = k ? padAngle : (0, $ef387dbdce28e965$export$a4b4b4d4d776fe92) / n;
        // Compute the angles for each group and constituent chord.
        {
            let x = 0;
            if (sortGroups) groupIndex.sort((a, b)=>sortGroups(groupSums[a], groupSums[b]));
            for (const i of groupIndex){
                const x0 = x;
                if (directed) {
                    const subgroupIndex = $9de5e783b434dbbe$var$range(~n + 1, n).filter((j)=>j < 0 ? matrix[~j * n + i] : matrix[i * n + j]);
                    if (sortSubgroups) subgroupIndex.sort((a, b)=>sortSubgroups(a < 0 ? -matrix[~a * n + i] : matrix[i * n + a], b < 0 ? -matrix[~b * n + i] : matrix[i * n + b]));
                    for (const j of subgroupIndex)if (j < 0) {
                        const chord = chords[~j * n + i] || (chords[~j * n + i] = {
                            source: null,
                            target: null
                        });
                        chord.target = {
                            index: i,
                            startAngle: x,
                            endAngle: x += matrix[~j * n + i] * k,
                            value: matrix[~j * n + i]
                        };
                    } else {
                        const chord = chords[i * n + j] || (chords[i * n + j] = {
                            source: null,
                            target: null
                        });
                        chord.source = {
                            index: i,
                            startAngle: x,
                            endAngle: x += matrix[i * n + j] * k,
                            value: matrix[i * n + j]
                        };
                    }
                    groups[i] = {
                        index: i,
                        startAngle: x0,
                        endAngle: x,
                        value: groupSums[i]
                    };
                } else {
                    const subgroupIndex = $9de5e783b434dbbe$var$range(0, n).filter((j)=>matrix[i * n + j] || matrix[j * n + i]);
                    if (sortSubgroups) subgroupIndex.sort((a, b)=>sortSubgroups(matrix[i * n + a], matrix[i * n + b]));
                    for (const j of subgroupIndex){
                        let chord;
                        if (i < j) {
                            chord = chords[i * n + j] || (chords[i * n + j] = {
                                source: null,
                                target: null
                            });
                            chord.source = {
                                index: i,
                                startAngle: x,
                                endAngle: x += matrix[i * n + j] * k,
                                value: matrix[i * n + j]
                            };
                        } else {
                            chord = chords[j * n + i] || (chords[j * n + i] = {
                                source: null,
                                target: null
                            });
                            chord.target = {
                                index: i,
                                startAngle: x,
                                endAngle: x += matrix[i * n + j] * k,
                                value: matrix[i * n + j]
                            };
                            if (i === j) chord.source = chord.target;
                        }
                        if (chord.source && chord.target && chord.source.value < chord.target.value) {
                            const source = chord.source;
                            chord.source = chord.target;
                            chord.target = source;
                        }
                    }
                    groups[i] = {
                        index: i,
                        startAngle: x0,
                        endAngle: x,
                        value: groupSums[i]
                    };
                }
                x += dx;
            }
        }
        // Remove empty chords.
        chords = Object.values(chords);
        chords.groups = groups;
        return sortChords ? chords.sort(sortChords) : chords;
    }
    chord.padAngle = function(_) {
        return arguments.length ? (padAngle = (0, $ef387dbdce28e965$export$8960430cfd85939f)(0, _), chord) : padAngle;
    };
    chord.sortGroups = function(_) {
        return arguments.length ? (sortGroups = _, chord) : sortGroups;
    };
    chord.sortSubgroups = function(_) {
        return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
    };
    chord.sortChords = function(_) {
        return arguments.length ? (_ == null ? sortChords = null : (sortChords = $9de5e783b434dbbe$var$compareValue(_))._ = _, chord) : sortChords && sortChords._;
    };
    return chord;
}


const $131a8512ae592f4d$var$pi = Math.PI, $131a8512ae592f4d$var$tau = 2 * $131a8512ae592f4d$var$pi, $131a8512ae592f4d$var$epsilon = 1e-6, $131a8512ae592f4d$var$tauEpsilon = $131a8512ae592f4d$var$tau - $131a8512ae592f4d$var$epsilon;
function $131a8512ae592f4d$var$append(strings) {
    this._ += strings[0];
    for(let i = 1, n = strings.length; i < n; ++i)this._ += arguments[i] + strings[i];
}
function $131a8512ae592f4d$var$appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return $131a8512ae592f4d$var$append;
    const k = 10 ** d;
    return function(strings) {
        this._ += strings[0];
        for(let i = 1, n = strings.length; i < n; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
    };
}
class $131a8512ae592f4d$export$4b2950bdac9b6ee9 {
    constructor(digits){
        this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
        this._append = digits == null ? $131a8512ae592f4d$var$append : $131a8512ae592f4d$var$appendRound(digits);
    }
    moveTo(x, y) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._append`Z`;
        }
    }
    lineTo(x, y) {
        this._append`L${this._x1 = +x},${this._y1 = +y}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
        this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
    }
    arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._append`M${this._x1 = x1},${this._y1 = y1}`;
        else if (!(l01_2 > $131a8512ae592f4d$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $131a8512ae592f4d$var$epsilon) || !r) this._append`L${this._x1 = x1},${this._y1 = y1}`;
        else {
            let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($131a8512ae592f4d$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $131a8512ae592f4d$var$epsilon) this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
            this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
        }
    }
    arc(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._append`M${x0},${y0}`;
        else if (Math.abs(this._x1 - x0) > $131a8512ae592f4d$var$epsilon || Math.abs(this._y1 - y0) > $131a8512ae592f4d$var$epsilon) this._append`L${x0},${y0}`;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $131a8512ae592f4d$var$tau + $131a8512ae592f4d$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $131a8512ae592f4d$var$tauEpsilon) this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
        else if (da > $131a8512ae592f4d$var$epsilon) this._append`A${r},${r},0,${+(da >= $131a8512ae592f4d$var$pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
    rect(x, y, w, h) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
        return this._;
    }
}
function $131a8512ae592f4d$export$bb654e07daaf8c3a() {
    return new $131a8512ae592f4d$export$4b2950bdac9b6ee9;
}
// Allow instanceof d3.path
$131a8512ae592f4d$export$bb654e07daaf8c3a.prototype = $131a8512ae592f4d$export$4b2950bdac9b6ee9.prototype;
function $131a8512ae592f4d$export$e181c6ece8d9cc5f(digits = 3) {
    return new $131a8512ae592f4d$export$4b2950bdac9b6ee9(+digits);
}


var $fe98145c44d133b2$export$58adb3bec8346d0f = Array.prototype.slice;


function $97e87668a0be8fe2$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}



function $b2e243a98d315b0f$var$defaultSource(d) {
    return d.source;
}
function $b2e243a98d315b0f$var$defaultTarget(d) {
    return d.target;
}
function $b2e243a98d315b0f$var$defaultRadius(d) {
    return d.radius;
}
function $b2e243a98d315b0f$var$defaultStartAngle(d) {
    return d.startAngle;
}
function $b2e243a98d315b0f$var$defaultEndAngle(d) {
    return d.endAngle;
}
function $b2e243a98d315b0f$var$defaultPadAngle() {
    return 0;
}
function $b2e243a98d315b0f$var$defaultArrowheadRadius() {
    return 10;
}
function $b2e243a98d315b0f$var$ribbon(headRadius) {
    var source = $b2e243a98d315b0f$var$defaultSource, target = $b2e243a98d315b0f$var$defaultTarget, sourceRadius = $b2e243a98d315b0f$var$defaultRadius, targetRadius = $b2e243a98d315b0f$var$defaultRadius, startAngle = $b2e243a98d315b0f$var$defaultStartAngle, endAngle = $b2e243a98d315b0f$var$defaultEndAngle, padAngle = $b2e243a98d315b0f$var$defaultPadAngle, context = null;
    function ribbon() {
        var buffer, s = source.apply(this, arguments), t = target.apply(this, arguments), ap = padAngle.apply(this, arguments) / 2, argv = (0, $fe98145c44d133b2$export$58adb3bec8346d0f).call(arguments), sr = +sourceRadius.apply(this, (argv[0] = s, argv)), sa0 = startAngle.apply(this, argv) - (0, $ef387dbdce28e965$export$e51408a300e8929a), sa1 = endAngle.apply(this, argv) - (0, $ef387dbdce28e965$export$e51408a300e8929a), tr = +targetRadius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - (0, $ef387dbdce28e965$export$e51408a300e8929a), ta1 = endAngle.apply(this, argv) - (0, $ef387dbdce28e965$export$e51408a300e8929a);
        if (!context) context = buffer = (0, $131a8512ae592f4d$export$bb654e07daaf8c3a)();
        if (ap > (0, $ef387dbdce28e965$export$6c421550c66a327d)) {
            if ((0, $ef387dbdce28e965$export$2335f513bbd82c6d)(sa1 - sa0) > ap * 2 + (0, $ef387dbdce28e965$export$6c421550c66a327d)) sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap);
            else sa0 = sa1 = (sa0 + sa1) / 2;
            if ((0, $ef387dbdce28e965$export$2335f513bbd82c6d)(ta1 - ta0) > ap * 2 + (0, $ef387dbdce28e965$export$6c421550c66a327d)) ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap);
            else ta0 = ta1 = (ta0 + ta1) / 2;
        }
        context.moveTo(sr * (0, $ef387dbdce28e965$export$50d414a77b60d802)(sa0), sr * (0, $ef387dbdce28e965$export$5de3937cb4b592ed)(sa0));
        context.arc(0, 0, sr, sa0, sa1);
        if (sa0 !== ta0 || sa1 !== ta1) {
            if (headRadius) {
                var hr = +headRadius.apply(this, arguments), tr2 = tr - hr, ta2 = (ta0 + ta1) / 2;
                context.quadraticCurveTo(0, 0, tr2 * (0, $ef387dbdce28e965$export$50d414a77b60d802)(ta0), tr2 * (0, $ef387dbdce28e965$export$5de3937cb4b592ed)(ta0));
                context.lineTo(tr * (0, $ef387dbdce28e965$export$50d414a77b60d802)(ta2), tr * (0, $ef387dbdce28e965$export$5de3937cb4b592ed)(ta2));
                context.lineTo(tr2 * (0, $ef387dbdce28e965$export$50d414a77b60d802)(ta1), tr2 * (0, $ef387dbdce28e965$export$5de3937cb4b592ed)(ta1));
            } else {
                context.quadraticCurveTo(0, 0, tr * (0, $ef387dbdce28e965$export$50d414a77b60d802)(ta0), tr * (0, $ef387dbdce28e965$export$5de3937cb4b592ed)(ta0));
                context.arc(0, 0, tr, ta0, ta1);
            }
        }
        context.quadraticCurveTo(0, 0, sr * (0, $ef387dbdce28e965$export$50d414a77b60d802)(sa0), sr * (0, $ef387dbdce28e965$export$5de3937cb4b592ed)(sa0));
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    if (headRadius) ribbon.headRadius = function(_) {
        return arguments.length ? (headRadius = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : headRadius;
    };
    ribbon.radius = function(_) {
        return arguments.length ? (sourceRadius = targetRadius = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : sourceRadius;
    };
    ribbon.sourceRadius = function(_) {
        return arguments.length ? (sourceRadius = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : sourceRadius;
    };
    ribbon.targetRadius = function(_) {
        return arguments.length ? (targetRadius = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : targetRadius;
    };
    ribbon.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : startAngle;
    };
    ribbon.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : endAngle;
    };
    ribbon.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $97e87668a0be8fe2$export$2e2bcd8739ae039)(+_), ribbon) : padAngle;
    };
    ribbon.source = function(_) {
        return arguments.length ? (source = _, ribbon) : source;
    };
    ribbon.target = function(_) {
        return arguments.length ? (target = _, ribbon) : target;
    };
    ribbon.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
    };
    return ribbon;
}
function $b2e243a98d315b0f$export$2e2bcd8739ae039() {
    return $b2e243a98d315b0f$var$ribbon();
}
function $b2e243a98d315b0f$export$63f6c8bb9e816a34() {
    return $b2e243a98d315b0f$var$ribbon($b2e243a98d315b0f$var$defaultArrowheadRadius);
}




var $ea36ec876f766d9a$exports = {};

$parcel$export($ea36ec876f766d9a$exports, "color", () => (parcelRequire("gnwtP")).default);
$parcel$export($ea36ec876f766d9a$exports, "rgb", () => (parcelRequire("gnwtP")).rgb);
$parcel$export($ea36ec876f766d9a$exports, "hsl", () => (parcelRequire("gnwtP")).hsl);
$parcel$export($ea36ec876f766d9a$exports, "lab", () => $747534271a8a1565$export$2e2bcd8739ae039);
$parcel$export($ea36ec876f766d9a$exports, "hcl", () => $747534271a8a1565$export$d0e870ba50062ff1);
$parcel$export($ea36ec876f766d9a$exports, "lch", () => $747534271a8a1565$export$5a21418738164530);
$parcel$export($ea36ec876f766d9a$exports, "gray", () => $747534271a8a1565$export$3e2c219d3ab79d01);
$parcel$export($ea36ec876f766d9a$exports, "cubehelix", () => $53ff683a5927702b$export$2e2bcd8739ae039);

var $gnwtP = parcelRequire("gnwtP");

var $fa7EJ = parcelRequire("fa7EJ");

var $gnwtP = parcelRequire("gnwtP");
const $b46cae0243dc3646$export$8449e153fbd325fc = Math.PI / 180;
const $b46cae0243dc3646$export$41fc368e1a942b97 = 180 / Math.PI;


// https://observablehq.com/@mbostock/lab-and-rgb
const $747534271a8a1565$var$K = 18, $747534271a8a1565$var$Xn = 0.96422, $747534271a8a1565$var$Yn = 1, $747534271a8a1565$var$Zn = 0.82521, $747534271a8a1565$var$t0 = 4 / 29, $747534271a8a1565$var$t1 = 6 / 29, $747534271a8a1565$var$t2 = 3 * $747534271a8a1565$var$t1 * $747534271a8a1565$var$t1, $747534271a8a1565$var$t3 = $747534271a8a1565$var$t1 * $747534271a8a1565$var$t1 * $747534271a8a1565$var$t1;
function $747534271a8a1565$var$labConvert(o) {
    if (o instanceof $747534271a8a1565$export$f2722c70a60257f7) return new $747534271a8a1565$export$f2722c70a60257f7(o.l, o.a, o.b, o.opacity);
    if (o instanceof $747534271a8a1565$export$d9397e094a5fbb9a) return $747534271a8a1565$var$hcl2lab(o);
    if (!(o instanceof (0, $gnwtP.Rgb))) o = (0, $gnwtP.rgbConvert)(o);
    var r = $747534271a8a1565$var$rgb2lrgb(o.r), g = $747534271a8a1565$var$rgb2lrgb(o.g), b = $747534271a8a1565$var$rgb2lrgb(o.b), y = $747534271a8a1565$var$xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / $747534271a8a1565$var$Yn), x, z;
    if (r === g && g === b) x = z = y;
    else {
        x = $747534271a8a1565$var$xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / $747534271a8a1565$var$Xn);
        z = $747534271a8a1565$var$xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / $747534271a8a1565$var$Zn);
    }
    return new $747534271a8a1565$export$f2722c70a60257f7(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function $747534271a8a1565$export$3e2c219d3ab79d01(l, opacity) {
    return new $747534271a8a1565$export$f2722c70a60257f7(l, 0, 0, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$2e2bcd8739ae039(l, a, b, opacity) {
    return arguments.length === 1 ? $747534271a8a1565$var$labConvert(l) : new $747534271a8a1565$export$f2722c70a60257f7(l, a, b, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$f2722c70a60257f7(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)($747534271a8a1565$export$f2722c70a60257f7, $747534271a8a1565$export$2e2bcd8739ae039, (0, $fa7EJ.extend)((0, $gnwtP.Color), {
    brighter (k) {
        return new $747534271a8a1565$export$f2722c70a60257f7(this.l + $747534271a8a1565$var$K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker (k) {
        return new $747534271a8a1565$export$f2722c70a60257f7(this.l - $747534271a8a1565$var$K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb () {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = $747534271a8a1565$var$Xn * $747534271a8a1565$var$lab2xyz(x);
        y = $747534271a8a1565$var$Yn * $747534271a8a1565$var$lab2xyz(y);
        z = $747534271a8a1565$var$Zn * $747534271a8a1565$var$lab2xyz(z);
        return new (0, $gnwtP.Rgb)($747534271a8a1565$var$lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), $747534271a8a1565$var$lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), $747534271a8a1565$var$lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function $747534271a8a1565$var$xyz2lab(t) {
    return t > $747534271a8a1565$var$t3 ? Math.pow(t, 1 / 3) : t / $747534271a8a1565$var$t2 + $747534271a8a1565$var$t0;
}
function $747534271a8a1565$var$lab2xyz(t) {
    return t > $747534271a8a1565$var$t1 ? t * t * t : $747534271a8a1565$var$t2 * (t - $747534271a8a1565$var$t0);
}
function $747534271a8a1565$var$lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function $747534271a8a1565$var$rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function $747534271a8a1565$var$hclConvert(o) {
    if (o instanceof $747534271a8a1565$export$d9397e094a5fbb9a) return new $747534271a8a1565$export$d9397e094a5fbb9a(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof $747534271a8a1565$export$f2722c70a60257f7)) o = $747534271a8a1565$var$labConvert(o);
    if (o.a === 0 && o.b === 0) return new $747534271a8a1565$export$d9397e094a5fbb9a(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * (0, $b46cae0243dc3646$export$41fc368e1a942b97);
    return new $747534271a8a1565$export$d9397e094a5fbb9a(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function $747534271a8a1565$export$5a21418738164530(l, c, h, opacity) {
    return arguments.length === 1 ? $747534271a8a1565$var$hclConvert(l) : new $747534271a8a1565$export$d9397e094a5fbb9a(h, c, l, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$d0e870ba50062ff1(h, c, l, opacity) {
    return arguments.length === 1 ? $747534271a8a1565$var$hclConvert(h) : new $747534271a8a1565$export$d9397e094a5fbb9a(h, c, l, opacity == null ? 1 : opacity);
}
function $747534271a8a1565$export$d9397e094a5fbb9a(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
function $747534271a8a1565$var$hcl2lab(o) {
    if (isNaN(o.h)) return new $747534271a8a1565$export$f2722c70a60257f7(o.l, 0, 0, o.opacity);
    var h = o.h * (0, $b46cae0243dc3646$export$8449e153fbd325fc);
    return new $747534271a8a1565$export$f2722c70a60257f7(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
(0, $fa7EJ.default)($747534271a8a1565$export$d9397e094a5fbb9a, $747534271a8a1565$export$d0e870ba50062ff1, (0, $fa7EJ.extend)((0, $gnwtP.Color), {
    brighter (k) {
        return new $747534271a8a1565$export$d9397e094a5fbb9a(this.h, this.c, this.l + $747534271a8a1565$var$K * (k == null ? 1 : k), this.opacity);
    },
    darker (k) {
        return new $747534271a8a1565$export$d9397e094a5fbb9a(this.h, this.c, this.l - $747534271a8a1565$var$K * (k == null ? 1 : k), this.opacity);
    },
    rgb () {
        return $747534271a8a1565$var$hcl2lab(this).rgb();
    }
}));



var $fa7EJ = parcelRequire("fa7EJ");

var $gnwtP = parcelRequire("gnwtP");

var $53ff683a5927702b$var$A = -0.14861, $53ff683a5927702b$var$B = 1.78277, $53ff683a5927702b$var$C = -0.29227, $53ff683a5927702b$var$D = -0.90649, $53ff683a5927702b$var$E = 1.97294, $53ff683a5927702b$var$ED = $53ff683a5927702b$var$E * $53ff683a5927702b$var$D, $53ff683a5927702b$var$EB = $53ff683a5927702b$var$E * $53ff683a5927702b$var$B, $53ff683a5927702b$var$BC_DA = $53ff683a5927702b$var$B * $53ff683a5927702b$var$C - $53ff683a5927702b$var$D * $53ff683a5927702b$var$A;
function $53ff683a5927702b$var$cubehelixConvert(o) {
    if (o instanceof $53ff683a5927702b$export$57ed4bde61a1e2f2) return new $53ff683a5927702b$export$57ed4bde61a1e2f2(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof (0, $gnwtP.Rgb))) o = (0, $gnwtP.rgbConvert)(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = ($53ff683a5927702b$var$BC_DA * b + $53ff683a5927702b$var$ED * r - $53ff683a5927702b$var$EB * g) / ($53ff683a5927702b$var$BC_DA + $53ff683a5927702b$var$ED - $53ff683a5927702b$var$EB), bl = b - l, k = ($53ff683a5927702b$var$E * (g - l) - $53ff683a5927702b$var$C * bl) / $53ff683a5927702b$var$D, s = Math.sqrt(k * k + bl * bl) / ($53ff683a5927702b$var$E * l * (1 - l)), h = s ? Math.atan2(k, bl) * (0, $b46cae0243dc3646$export$41fc368e1a942b97) - 120 : NaN;
    return new $53ff683a5927702b$export$57ed4bde61a1e2f2(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function $53ff683a5927702b$export$2e2bcd8739ae039(h, s, l, opacity) {
    return arguments.length === 1 ? $53ff683a5927702b$var$cubehelixConvert(h) : new $53ff683a5927702b$export$57ed4bde61a1e2f2(h, s, l, opacity == null ? 1 : opacity);
}
function $53ff683a5927702b$export$57ed4bde61a1e2f2(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, $fa7EJ.default)($53ff683a5927702b$export$57ed4bde61a1e2f2, $53ff683a5927702b$export$2e2bcd8739ae039, (0, $fa7EJ.extend)((0, $gnwtP.Color), {
    brighter (k) {
        k = k == null ? (0, $gnwtP.brighter) : Math.pow((0, $gnwtP.brighter), k);
        return new $53ff683a5927702b$export$57ed4bde61a1e2f2(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? (0, $gnwtP.darker) : Math.pow((0, $gnwtP.darker), k);
        return new $53ff683a5927702b$export$57ed4bde61a1e2f2(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * (0, $b46cae0243dc3646$export$8449e153fbd325fc), l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new (0, $gnwtP.Rgb)(255 * (l + a * ($53ff683a5927702b$var$A * cosh + $53ff683a5927702b$var$B * sinh)), 255 * (l + a * ($53ff683a5927702b$var$C * cosh + $53ff683a5927702b$var$D * sinh)), 255 * (l + a * ($53ff683a5927702b$var$E * cosh)), this.opacity);
    }
}));




var $9cd38c128b9ccd39$exports = {};

$parcel$export($9cd38c128b9ccd39$exports, "contours", () => $d7d3f940d451459e$export$2e2bcd8739ae039);
$parcel$export($9cd38c128b9ccd39$exports, "contourDensity", () => $0569a06a9ed6a46e$export$2e2bcd8739ae039);

var $0fc720af9c5faacd$var$array = Array.prototype;
var $0fc720af9c5faacd$export$58adb3bec8346d0f = $0fc720af9c5faacd$var$array.slice;


function $68ba7301f81821db$export$2e2bcd8739ae039(a, b) {
    return a - b;
}


function $2a8e2712597dc44e$export$2e2bcd8739ae039(ring) {
    var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
    while(++i < n)area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
    return area;
}


var $b171316d9965b1d0$export$2e2bcd8739ae039 = (x)=>()=>x;


function $97eb4f075ed69db1$export$2e2bcd8739ae039(ring, hole) {
    var i = -1, n = hole.length, c;
    while(++i < n)if (c = $97eb4f075ed69db1$var$ringContains(ring, hole[i])) return c;
    return 0;
}
function $97eb4f075ed69db1$var$ringContains(ring, point) {
    var x = point[0], y = point[1], contains = -1;
    for(var i = 0, n = ring.length, j = n - 1; i < n; j = i++){
        var pi = ring[i], xi = pi[0], yi = pi[1], pj = ring[j], xj = pj[0], yj = pj[1];
        if ($97eb4f075ed69db1$var$segmentContains(pi, pj, point)) return 0;
        if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
    }
    return contains;
}
function $97eb4f075ed69db1$var$segmentContains(a, b, c) {
    var i;
    return $97eb4f075ed69db1$var$collinear(a, b, c) && $97eb4f075ed69db1$var$within(a[i = +(a[0] === b[0])], c[i], b[i]);
}
function $97eb4f075ed69db1$var$collinear(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}
function $97eb4f075ed69db1$var$within(p, q, r) {
    return p <= q && q <= r || r <= q && q <= p;
}


function $68306800f530d87a$export$2e2bcd8739ae039() {}


var $d7d3f940d451459e$var$cases = [
    [],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                0.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.5,
                1.0
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    [
        [
            [
                1.5,
                1.0
            ],
            [
                0.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                0.5
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                0.5,
                1.0
            ]
        ],
        [
            [
                1.0,
                0.5
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                0.5
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    [
        [
            [
                1.0,
                0.5
            ],
            [
                0.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.0,
                0.5
            ]
        ]
    ],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                1.0,
                0.5
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.0,
                0.5
            ]
        ],
        [
            [
                1.5,
                1.0
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    [
        [
            [
                1.5,
                1.0
            ],
            [
                1.0,
                0.5
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    []
];
function $d7d3f940d451459e$export$2e2bcd8739ae039() {
    var dx = 1, dy = 1, threshold = (0, $b2fd3319be99d760$export$2e2bcd8739ae039), smooth = smoothLinear;
    function contours(values) {
        var tz = threshold(values);
        // Convert number of thresholds into uniform thresholds.
        if (!Array.isArray(tz)) {
            const e = (0, $7eb08f14ace1fbef$export$2e2bcd8739ae039)(values, $d7d3f940d451459e$var$finite);
            tz = (0, $61a6aa10219c54a4$export$2e2bcd8739ae039)(...(0, $84db00d2d0e4bb1e$export$2e2bcd8739ae039)(e[0], e[1], tz), tz);
            while(tz[tz.length - 1] >= e[1])tz.pop();
            while(tz[1] < e[0])tz.shift();
        } else tz = tz.slice().sort((0, $68ba7301f81821db$export$2e2bcd8739ae039));
        return tz.map((value)=>contour(values, value));
    }
    // Accumulate, smooth contour rings, assign holes to exterior rings.
    // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
    function contour(values, value) {
        const v = value == null ? NaN : +value;
        if (isNaN(v)) throw new Error(`invalid value: ${value}`);
        var polygons = [], holes = [];
        isorings(values, v, function(ring) {
            smooth(ring, values, v);
            if ((0, $2a8e2712597dc44e$export$2e2bcd8739ae039)(ring) > 0) polygons.push([
                ring
            ]);
            else holes.push(ring);
        });
        holes.forEach(function(hole) {
            for(var i = 0, n = polygons.length, polygon; i < n; ++i)if ((0, $97eb4f075ed69db1$export$2e2bcd8739ae039)((polygon = polygons[i])[0], hole) !== -1) {
                polygon.push(hole);
                return;
            }
        });
        return {
            type: "MultiPolygon",
            value: value,
            coordinates: polygons
        };
    }
    // Marching squares with isolines stitched into rings.
    // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
    function isorings(values, value, callback) {
        var fragmentByStart = new Array, fragmentByEnd = new Array, x, y, t0, t1, t2, t3;
        // Special case for the first row (y = -1, t2 = t3 = 0).
        x = y = -1;
        t1 = $d7d3f940d451459e$var$above(values[0], value);
        $d7d3f940d451459e$var$cases[t1 << 1].forEach(stitch);
        while(++x < dx - 1){
            t0 = t1, t1 = $d7d3f940d451459e$var$above(values[x + 1], value);
            $d7d3f940d451459e$var$cases[t0 | t1 << 1].forEach(stitch);
        }
        $d7d3f940d451459e$var$cases[t1 << 0].forEach(stitch);
        // General case for the intermediate rows.
        while(++y < dy - 1){
            x = -1;
            t1 = $d7d3f940d451459e$var$above(values[y * dx + dx], value);
            t2 = $d7d3f940d451459e$var$above(values[y * dx], value);
            $d7d3f940d451459e$var$cases[t1 << 1 | t2 << 2].forEach(stitch);
            while(++x < dx - 1){
                t0 = t1, t1 = $d7d3f940d451459e$var$above(values[y * dx + dx + x + 1], value);
                t3 = t2, t2 = $d7d3f940d451459e$var$above(values[y * dx + x + 1], value);
                $d7d3f940d451459e$var$cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
            }
            $d7d3f940d451459e$var$cases[t1 | t2 << 3].forEach(stitch);
        }
        // Special case for the last row (y = dy - 1, t0 = t1 = 0).
        x = -1;
        t2 = values[y * dx] >= value;
        $d7d3f940d451459e$var$cases[t2 << 2].forEach(stitch);
        while(++x < dx - 1){
            t3 = t2, t2 = $d7d3f940d451459e$var$above(values[y * dx + x + 1], value);
            $d7d3f940d451459e$var$cases[t2 << 2 | t3 << 3].forEach(stitch);
        }
        $d7d3f940d451459e$var$cases[t2 << 3].forEach(stitch);
        function stitch(line) {
            var start = [
                line[0][0] + x,
                line[0][1] + y
            ], end = [
                line[1][0] + x,
                line[1][1] + y
            ], startIndex = index(start), endIndex = index(end), f, g;
            if (f = fragmentByEnd[startIndex]) {
                if (g = fragmentByStart[endIndex]) {
                    delete fragmentByEnd[f.end];
                    delete fragmentByStart[g.start];
                    if (f === g) {
                        f.ring.push(end);
                        callback(f.ring);
                    } else fragmentByStart[f.start] = fragmentByEnd[g.end] = {
                        start: f.start,
                        end: g.end,
                        ring: f.ring.concat(g.ring)
                    };
                } else {
                    delete fragmentByEnd[f.end];
                    f.ring.push(end);
                    fragmentByEnd[f.end = endIndex] = f;
                }
            } else if (f = fragmentByStart[endIndex]) {
                if (g = fragmentByEnd[startIndex]) {
                    delete fragmentByStart[f.start];
                    delete fragmentByEnd[g.end];
                    if (f === g) {
                        f.ring.push(end);
                        callback(f.ring);
                    } else fragmentByStart[g.start] = fragmentByEnd[f.end] = {
                        start: g.start,
                        end: f.end,
                        ring: g.ring.concat(f.ring)
                    };
                } else {
                    delete fragmentByStart[f.start];
                    f.ring.unshift(start);
                    fragmentByStart[f.start = startIndex] = f;
                }
            } else fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {
                start: startIndex,
                end: endIndex,
                ring: [
                    start,
                    end
                ]
            };
        }
    }
    function index(point) {
        return point[0] * 2 + point[1] * (dx + 1) * 4;
    }
    function smoothLinear(ring, values, value) {
        ring.forEach(function(point) {
            var x = point[0], y = point[1], xt = x | 0, yt = y | 0, v1 = $d7d3f940d451459e$var$valid(values[yt * dx + xt]);
            if (x > 0 && x < dx && xt === x) point[0] = $d7d3f940d451459e$var$smooth1(x, $d7d3f940d451459e$var$valid(values[yt * dx + xt - 1]), v1, value);
            if (y > 0 && y < dy && yt === y) point[1] = $d7d3f940d451459e$var$smooth1(y, $d7d3f940d451459e$var$valid(values[(yt - 1) * dx + xt]), v1, value);
        });
    }
    contours.contour = contour;
    contours.size = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        var _0 = Math.floor(_[0]), _1 = Math.floor(_[1]);
        if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
        return dx = _0, dy = _1, contours;
    };
    contours.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, $b171316d9965b1d0$export$2e2bcd8739ae039)((0, $0fc720af9c5faacd$export$58adb3bec8346d0f).call(_)) : (0, $b171316d9965b1d0$export$2e2bcd8739ae039)(_), contours) : threshold;
    };
    contours.smooth = function(_) {
        return arguments.length ? (smooth = _ ? smoothLinear : (0, $68306800f530d87a$export$2e2bcd8739ae039), contours) : smooth === smoothLinear;
    };
    return contours;
}
// When computing the extent, ignore infinite values (as well as invalid ones).
function $d7d3f940d451459e$var$finite(x) {
    return isFinite(x) ? x : NaN;
}
// Is the (possibly invalid) x greater than or equal to the (known valid) value?
// Treat any invalid value as below negative infinity.
function $d7d3f940d451459e$var$above(x, value) {
    return x == null ? false : +x >= value;
}
// During smoothing, treat any invalid value as negative infinity.
function $d7d3f940d451459e$var$valid(v) {
    return v == null || isNaN(v = +v) ? -Infinity : v;
}
function $d7d3f940d451459e$var$smooth1(x, v0, v1, value) {
    const a = value - v0;
    const b = v1 - v0;
    const d = isFinite(a) || isFinite(b) ? a / b : Math.sign(a) / Math.sign(b);
    return isNaN(d) ? x : x + d - 0.5;
}






function $0569a06a9ed6a46e$var$defaultX(d) {
    return d[0];
}
function $0569a06a9ed6a46e$var$defaultY(d) {
    return d[1];
}
function $0569a06a9ed6a46e$var$defaultWeight() {
    return 1;
}
function $0569a06a9ed6a46e$export$2e2bcd8739ae039() {
    var x = $0569a06a9ed6a46e$var$defaultX, y = $0569a06a9ed6a46e$var$defaultY, weight = $0569a06a9ed6a46e$var$defaultWeight, dx = 960, dy = 500, r = 20, k = 2, o = r * 3, n = dx + o * 2 >> k, m = dy + o * 2 >> k, threshold = (0, $b171316d9965b1d0$export$2e2bcd8739ae039)(20);
    function grid(data) {
        var values = new Float32Array(n * m), pow2k = Math.pow(2, -k), i = -1;
        for (const d of data){
            var xi = (x(d, ++i, data) + o) * pow2k, yi = (y(d, i, data) + o) * pow2k, wi = +weight(d, i, data);
            if (wi && xi >= 0 && xi < n && yi >= 0 && yi < m) {
                var x0 = Math.floor(xi), y0 = Math.floor(yi), xt = xi - x0 - 0.5, yt = yi - y0 - 0.5;
                values[x0 + y0 * n] += (1 - xt) * (1 - yt) * wi;
                values[x0 + 1 + y0 * n] += xt * (1 - yt) * wi;
                values[x0 + 1 + (y0 + 1) * n] += xt * yt * wi;
                values[x0 + (y0 + 1) * n] += (1 - xt) * yt * wi;
            }
        }
        (0, $0646a4896cc1e3c9$export$7671911241d9460b)({
            data: values,
            width: n,
            height: m
        }, r * pow2k);
        return values;
    }
    function density(data) {
        var values = grid(data), tz = threshold(values), pow4k = Math.pow(2, 2 * k);
        // Convert number of thresholds into uniform thresholds.
        if (!Array.isArray(tz)) tz = (0, $61a6aa10219c54a4$export$2e2bcd8739ae039)(Number.MIN_VALUE, (0, $294276fe443af5f9$export$2e2bcd8739ae039)(values) / pow4k, tz);
        return (0, $d7d3f940d451459e$export$2e2bcd8739ae039)().size([
            n,
            m
        ]).thresholds(tz.map((d)=>d * pow4k))(values).map((c, i)=>(c.value = +tz[i], transform(c)));
    }
    density.contours = function(data) {
        var values = grid(data), contours = (0, $d7d3f940d451459e$export$2e2bcd8739ae039)().size([
            n,
            m
        ]), pow4k = Math.pow(2, 2 * k), contour = (value)=>{
            value = +value;
            var c = transform(contours.contour(values, value * pow4k));
            c.value = value; // preserve exact threshold value
            return c;
        };
        Object.defineProperty(contour, "max", {
            get: ()=>(0, $294276fe443af5f9$export$2e2bcd8739ae039)(values) / pow4k
        });
        return contour;
    };
    function transform(geometry) {
        geometry.coordinates.forEach(transformPolygon);
        return geometry;
    }
    function transformPolygon(coordinates) {
        coordinates.forEach(transformRing);
    }
    function transformRing(coordinates) {
        coordinates.forEach(transformPoint);
    }
    // TODO Optimize.
    function transformPoint(coordinates) {
        coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
        coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
    }
    function resize() {
        o = r * 3;
        n = dx + o * 2 >> k;
        m = dy + o * 2 >> k;
        return density;
    }
    density.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $b171316d9965b1d0$export$2e2bcd8739ae039)(+_), density) : x;
    };
    density.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $b171316d9965b1d0$export$2e2bcd8739ae039)(+_), density) : y;
    };
    density.weight = function(_) {
        return arguments.length ? (weight = typeof _ === "function" ? _ : (0, $b171316d9965b1d0$export$2e2bcd8739ae039)(+_), density) : weight;
    };
    density.size = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        var _0 = +_[0], _1 = +_[1];
        if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
        return dx = _0, dy = _1, resize();
    };
    density.cellSize = function(_) {
        if (!arguments.length) return 1 << k;
        if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
        return k = Math.floor(Math.log(_) / Math.LN2), resize();
    };
    density.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, $b171316d9965b1d0$export$2e2bcd8739ae039)((0, $0fc720af9c5faacd$export$58adb3bec8346d0f).call(_)) : (0, $b171316d9965b1d0$export$2e2bcd8739ae039)(_), density) : threshold;
    };
    density.bandwidth = function(_) {
        if (!arguments.length) return Math.sqrt(r * (r + 1));
        if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
        return r = (Math.sqrt(4 * _ * _ + 1) - 1) / 2, resize();
    };
    return density;
}




var $2589dffb12b10611$exports = {};

$parcel$export($2589dffb12b10611$exports, "Delaunay", () => $f728f0f083a62581$export$2e2bcd8739ae039);
$parcel$export($2589dffb12b10611$exports, "Voronoi", () => $602ce75d5a2acc90$export$2e2bcd8739ae039);
const $7086e40d6ef62e4f$export$6c421550c66a327d = 1.1102230246251565e-16;
const $7086e40d6ef62e4f$export$8cfde575cbd41e40 = 134217729;
const $7086e40d6ef62e4f$export$a4103c3ab16b06d7 = (3 + 8 * $7086e40d6ef62e4f$export$6c421550c66a327d) * $7086e40d6ef62e4f$export$6c421550c66a327d;
function $7086e40d6ef62e4f$export$8a63f25cc62965f1(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if (fnow > enow === fnow > -enow) {
        Q = enow;
        enow = e[++eindex];
    } else {
        Q = fnow;
        fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
        if (fnow > enow === fnow > -enow) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            enow = e[++eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) h[hindex++] = hh;
        while(eindex < elen && findex < flen){
            if (fnow > enow === fnow > -enow) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                enow = e[++eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                fnow = f[++findex];
            }
            Q = Qnew;
            if (hh !== 0) h[hindex++] = hh;
        }
    }
    while(eindex < elen){
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
        Q = Qnew;
        if (hh !== 0) h[hindex++] = hh;
    }
    while(findex < flen){
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
        Q = Qnew;
        if (hh !== 0) h[hindex++] = hh;
    }
    if (Q !== 0 || hindex === 0) h[hindex++] = Q;
    return hindex;
}
function $7086e40d6ef62e4f$export$195a93e4bd4d876f(alen, a, blen, b, clen, c, tmp, out) {
    return $7086e40d6ef62e4f$export$8a63f25cc62965f1($7086e40d6ef62e4f$export$8a63f25cc62965f1(alen, a, blen, b, tmp), tmp, clen, c, out);
}
function $7086e40d6ef62e4f$export$dcdf75081b88279d(elen, e, b, h) {
    let Q, sum, hh, product1, product0;
    let bvirt, c, ahi, alo, bhi, blo;
    c = $7086e40d6ef62e4f$export$8cfde575cbd41e40 * b;
    bhi = c - (c - b);
    blo = b - bhi;
    let enow = e[0];
    Q = enow * b;
    c = $7086e40d6ef62e4f$export$8cfde575cbd41e40 * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
    let hindex = 0;
    if (hh !== 0) h[hindex++] = hh;
    for(let i = 1; i < elen; i++){
        enow = e[i];
        product1 = enow * b;
        c = $7086e40d6ef62e4f$export$8cfde575cbd41e40 * enow;
        ahi = c - (c - enow);
        alo = enow - ahi;
        product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
        sum = Q + product0;
        bvirt = sum - Q;
        hh = Q - (sum - bvirt) + (product0 - bvirt);
        if (hh !== 0) h[hindex++] = hh;
        Q = product1 + sum;
        hh = sum - (Q - product1);
        if (hh !== 0) h[hindex++] = hh;
    }
    if (Q !== 0 || hindex === 0) h[hindex++] = Q;
    return hindex;
}
function $7086e40d6ef62e4f$export$aef51622e549b8b0(elen, e) {
    for(let i = 0; i < elen; i++)e[i] = -e[i];
    return elen;
}
function $7086e40d6ef62e4f$export$9f3a0795ca2cc944(elen, e) {
    let Q = e[0];
    for(let i = 1; i < elen; i++)Q += e[i];
    return Q;
}
function $7086e40d6ef62e4f$export$202e0172ed3c7be0(n) {
    return new Float64Array(n);
}


const $70ead2fda10d9ba3$var$ccwerrboundA = (3 + 16 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $70ead2fda10d9ba3$var$ccwerrboundB = (2 + 12 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $70ead2fda10d9ba3$var$ccwerrboundC = (9 + 64 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $70ead2fda10d9ba3$var$B = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $70ead2fda10d9ba3$var$C1 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $70ead2fda10d9ba3$var$C2 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(12);
const $70ead2fda10d9ba3$var$D = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(16);
const $70ead2fda10d9ba3$var$u = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
function $70ead2fda10d9ba3$var$orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;
    s1 = acx * bcy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $70ead2fda10d9ba3$var$B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $70ead2fda10d9ba3$var$B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $70ead2fda10d9ba3$var$B[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $70ead2fda10d9ba3$var$B[3] = u3;
    let det = (0, $7086e40d6ef62e4f$export$9f3a0795ca2cc944)(4, $70ead2fda10d9ba3$var$B);
    let errbound = $70ead2fda10d9ba3$var$ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) return det;
    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);
    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) return det;
    errbound = $70ead2fda10d9ba3$var$ccwerrboundC * detsum + (0, $7086e40d6ef62e4f$export$a4103c3ab16b06d7) * Math.abs(det);
    det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;
    s1 = acxtail * bcy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $70ead2fda10d9ba3$var$u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $70ead2fda10d9ba3$var$u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $70ead2fda10d9ba3$var$u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $70ead2fda10d9ba3$var$u[3] = u3;
    const C1len = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(4, $70ead2fda10d9ba3$var$B, 4, $70ead2fda10d9ba3$var$u, $70ead2fda10d9ba3$var$C1);
    s1 = acx * bcytail;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $70ead2fda10d9ba3$var$u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $70ead2fda10d9ba3$var$u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $70ead2fda10d9ba3$var$u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $70ead2fda10d9ba3$var$u[3] = u3;
    const C2len = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(C1len, $70ead2fda10d9ba3$var$C1, 4, $70ead2fda10d9ba3$var$u, $70ead2fda10d9ba3$var$C2);
    s1 = acxtail * bcytail;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $70ead2fda10d9ba3$var$u[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $70ead2fda10d9ba3$var$u[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $70ead2fda10d9ba3$var$u[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $70ead2fda10d9ba3$var$u[3] = u3;
    const Dlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(C2len, $70ead2fda10d9ba3$var$C2, 4, $70ead2fda10d9ba3$var$u, $70ead2fda10d9ba3$var$D);
    return $70ead2fda10d9ba3$var$D[Dlen - 1];
}
function $70ead2fda10d9ba3$export$bbb923599a46a7d8(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;
    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= $70ead2fda10d9ba3$var$ccwerrboundA * detsum) return det;
    return -$70ead2fda10d9ba3$var$orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}
function $70ead2fda10d9ba3$export$c42fd1bc0c0a7484(ax, ay, bx, by, cx, cy) {
    return (ay - cy) * (bx - cx) - (ax - cx) * (by - cy);
}



const $a0f2cc4727a2cd15$var$o3derrboundA = (7 + 56 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $a0f2cc4727a2cd15$var$o3derrboundB = (3 + 28 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $a0f2cc4727a2cd15$var$o3derrboundC = (26 + 288 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $a0f2cc4727a2cd15$var$bc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$ca = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$ab = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$at_b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$at_c = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$bt_c = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$bt_a = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$ct_a = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$ct_b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$bct = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $a0f2cc4727a2cd15$var$cat = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $a0f2cc4727a2cd15$var$abt = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $a0f2cc4727a2cd15$var$u = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $a0f2cc4727a2cd15$var$_8 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $a0f2cc4727a2cd15$var$_8b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $a0f2cc4727a2cd15$var$_16 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $a0f2cc4727a2cd15$var$_12 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(12);
let $a0f2cc4727a2cd15$var$fin = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(192);
let $a0f2cc4727a2cd15$var$fin2 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(192);
function $a0f2cc4727a2cd15$var$finadd(finlen, alen, a) {
    finlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(finlen, $a0f2cc4727a2cd15$var$fin, alen, a, $a0f2cc4727a2cd15$var$fin2);
    const tmp = $a0f2cc4727a2cd15$var$fin;
    $a0f2cc4727a2cd15$var$fin = $a0f2cc4727a2cd15$var$fin2;
    $a0f2cc4727a2cd15$var$fin2 = tmp;
    return finlen;
}
function $a0f2cc4727a2cd15$var$tailinit(xtail, ytail, ax, ay, bx, by, a, b) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3, negate;
    if (xtail === 0) {
        if (ytail === 0) {
            a[0] = 0;
            b[0] = 0;
            return 1;
        } else {
            negate = -ytail;
            s1 = negate * ax;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * negate;
            ahi = c - (c - negate);
            alo = negate - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ax;
            bhi = c - (c - ax);
            blo = ax - bhi;
            a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            a[1] = s1;
            s1 = ytail * bx;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ytail;
            ahi = c - (c - ytail);
            alo = ytail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bx;
            bhi = c - (c - bx);
            blo = bx - bhi;
            b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            b[1] = s1;
            return 2;
        }
    } else if (ytail === 0) {
        s1 = xtail * ay;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * xtail;
        ahi = c - (c - xtail);
        alo = xtail - ahi;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ay;
        bhi = c - (c - ay);
        blo = ay - bhi;
        a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        a[1] = s1;
        negate = -xtail;
        s1 = negate * by;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * negate;
        ahi = c - (c - negate);
        alo = negate - ahi;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * by;
        bhi = c - (c - by);
        blo = by - bhi;
        b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        b[1] = s1;
        return 2;
    } else {
        s1 = xtail * ay;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * xtail;
        ahi = c - (c - xtail);
        alo = xtail - ahi;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ay;
        bhi = c - (c - ay);
        blo = ay - bhi;
        s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        t1 = ytail * ax;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ytail;
        ahi = c - (c - ytail);
        alo = ytail - ahi;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ax;
        bhi = c - (c - ax);
        blo = ax - bhi;
        t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
        _i = s0 - t0;
        bvirt = s0 - _i;
        a[0] = s0 - (_i + bvirt) + (bvirt - t0);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 - t1;
        bvirt = _0 - _i;
        a[1] = _0 - (_i + bvirt) + (bvirt - t1);
        u3 = _j + _i;
        bvirt = u3 - _j;
        a[2] = _j - (u3 - bvirt) + (_i - bvirt);
        a[3] = u3;
        s1 = ytail * bx;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ytail;
        ahi = c - (c - ytail);
        alo = ytail - ahi;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bx;
        bhi = c - (c - bx);
        blo = bx - bhi;
        s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        t1 = xtail * by;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * xtail;
        ahi = c - (c - xtail);
        alo = xtail - ahi;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * by;
        bhi = c - (c - by);
        blo = by - bhi;
        t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
        _i = s0 - t0;
        bvirt = s0 - _i;
        b[0] = s0 - (_i + bvirt) + (bvirt - t0);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 - t1;
        bvirt = _0 - _i;
        b[1] = _0 - (_i + bvirt) + (bvirt - t1);
        u3 = _j + _i;
        bvirt = u3 - _j;
        b[2] = _j - (u3 - bvirt) + (_i - bvirt);
        b[3] = u3;
        return 4;
    }
}
function $a0f2cc4727a2cd15$var$tailadd(finlen, a, b, k, z) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, u3;
    s1 = a * b;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * a;
    ahi = c - (c - a);
    alo = a - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * b;
    bhi = c - (c - b);
    blo = b - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * k;
    bhi = c - (c - k);
    blo = k - bhi;
    _i = s0 * k;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * s0;
    ahi = c - (c - s0);
    alo = s0 - ahi;
    $a0f2cc4727a2cd15$var$u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
    _j = s1 * k;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * s1;
    ahi = c - (c - s1);
    alo = s1 - ahi;
    _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
    _k = _i + _0;
    bvirt = _k - _i;
    $a0f2cc4727a2cd15$var$u[1] = _i - (_k - bvirt) + (_0 - bvirt);
    u3 = _j + _k;
    $a0f2cc4727a2cd15$var$u[2] = _k - (u3 - _j);
    $a0f2cc4727a2cd15$var$u[3] = u3;
    finlen = $a0f2cc4727a2cd15$var$finadd(finlen, 4, $a0f2cc4727a2cd15$var$u);
    if (z !== 0) {
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * z;
        bhi = c - (c - z);
        blo = z - bhi;
        _i = s0 * z;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * s0;
        ahi = c - (c - s0);
        alo = s0 - ahi;
        $a0f2cc4727a2cd15$var$u[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
        _j = s1 * z;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * s1;
        ahi = c - (c - s1);
        alo = s1 - ahi;
        _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
        _k = _i + _0;
        bvirt = _k - _i;
        $a0f2cc4727a2cd15$var$u[1] = _i - (_k - bvirt) + (_0 - bvirt);
        u3 = _j + _k;
        $a0f2cc4727a2cd15$var$u[2] = _k - (u3 - _j);
        $a0f2cc4727a2cd15$var$u[3] = u3;
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, 4, $a0f2cc4727a2cd15$var$u);
    }
    return finlen;
}
function $a0f2cc4727a2cd15$var$orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail;
    let adytail, bdytail, cdytail;
    let adztail, bdztail, cdztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, t1, t0, u3;
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;
    s1 = bdx * cdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $a0f2cc4727a2cd15$var$bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $a0f2cc4727a2cd15$var$bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $a0f2cc4727a2cd15$var$bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $a0f2cc4727a2cd15$var$bc[3] = u3;
    s1 = cdx * ady;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $a0f2cc4727a2cd15$var$ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $a0f2cc4727a2cd15$var$ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $a0f2cc4727a2cd15$var$ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $a0f2cc4727a2cd15$var$ca[3] = u3;
    s1 = adx * bdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $a0f2cc4727a2cd15$var$ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $a0f2cc4727a2cd15$var$ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $a0f2cc4727a2cd15$var$ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $a0f2cc4727a2cd15$var$ab[3] = u3;
    finlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $a0f2cc4727a2cd15$var$bc, adz, $a0f2cc4727a2cd15$var$_8), $a0f2cc4727a2cd15$var$_8, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $a0f2cc4727a2cd15$var$ca, bdz, $a0f2cc4727a2cd15$var$_8b), $a0f2cc4727a2cd15$var$_8b, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $a0f2cc4727a2cd15$var$ab, cdz, $a0f2cc4727a2cd15$var$_8), $a0f2cc4727a2cd15$var$_8, $a0f2cc4727a2cd15$var$fin);
    let det = (0, $7086e40d6ef62e4f$export$9f3a0795ca2cc944)(finlen, $a0f2cc4727a2cd15$var$fin);
    let errbound = $a0f2cc4727a2cd15$var$o3derrboundB * permanent;
    if (det >= errbound || -det >= errbound) return det;
    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    bvirt = az - adz;
    adztail = az - (adz + bvirt) + (bvirt - dz);
    bvirt = bz - bdz;
    bdztail = bz - (bdz + bvirt) + (bvirt - dz);
    bvirt = cz - cdz;
    cdztail = cz - (cdz + bvirt) + (bvirt - dz);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0 && adztail === 0 && bdztail === 0 && cdztail === 0) return det;
    errbound = $a0f2cc4727a2cd15$var$o3derrboundC * permanent + (0, $7086e40d6ef62e4f$export$a4103c3ab16b06d7) * Math.abs(det);
    det += adz * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + adztail * (bdx * cdy - bdy * cdx) + bdz * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + bdztail * (cdx * ady - cdy * adx) + cdz * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + cdztail * (adx * bdy - ady * bdx);
    if (det >= errbound || -det >= errbound) return det;
    const at_len = $a0f2cc4727a2cd15$var$tailinit(adxtail, adytail, bdx, bdy, cdx, cdy, $a0f2cc4727a2cd15$var$at_b, $a0f2cc4727a2cd15$var$at_c);
    const bt_len = $a0f2cc4727a2cd15$var$tailinit(bdxtail, bdytail, cdx, cdy, adx, ady, $a0f2cc4727a2cd15$var$bt_c, $a0f2cc4727a2cd15$var$bt_a);
    const ct_len = $a0f2cc4727a2cd15$var$tailinit(cdxtail, cdytail, adx, ady, bdx, bdy, $a0f2cc4727a2cd15$var$ct_a, $a0f2cc4727a2cd15$var$ct_b);
    const bctlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(bt_len, $a0f2cc4727a2cd15$var$bt_c, ct_len, $a0f2cc4727a2cd15$var$ct_b, $a0f2cc4727a2cd15$var$bct);
    finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bctlen, $a0f2cc4727a2cd15$var$bct, adz, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16);
    const catlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(ct_len, $a0f2cc4727a2cd15$var$ct_a, at_len, $a0f2cc4727a2cd15$var$at_c, $a0f2cc4727a2cd15$var$cat);
    finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(catlen, $a0f2cc4727a2cd15$var$cat, bdz, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16);
    const abtlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(at_len, $a0f2cc4727a2cd15$var$at_b, bt_len, $a0f2cc4727a2cd15$var$bt_a, $a0f2cc4727a2cd15$var$abt);
    finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(abtlen, $a0f2cc4727a2cd15$var$abt, cdz, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16);
    if (adztail !== 0) {
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $a0f2cc4727a2cd15$var$bc, adztail, $a0f2cc4727a2cd15$var$_12), $a0f2cc4727a2cd15$var$_12);
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bctlen, $a0f2cc4727a2cd15$var$bct, adztail, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16);
    }
    if (bdztail !== 0) {
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $a0f2cc4727a2cd15$var$ca, bdztail, $a0f2cc4727a2cd15$var$_12), $a0f2cc4727a2cd15$var$_12);
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(catlen, $a0f2cc4727a2cd15$var$cat, bdztail, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16);
    }
    if (cdztail !== 0) {
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $a0f2cc4727a2cd15$var$ab, cdztail, $a0f2cc4727a2cd15$var$_12), $a0f2cc4727a2cd15$var$_12);
        finlen = $a0f2cc4727a2cd15$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(abtlen, $a0f2cc4727a2cd15$var$abt, cdztail, $a0f2cc4727a2cd15$var$_16), $a0f2cc4727a2cd15$var$_16);
    }
    if (adxtail !== 0) {
        if (bdytail !== 0) finlen = $a0f2cc4727a2cd15$var$tailadd(finlen, adxtail, bdytail, cdz, cdztail);
        if (cdytail !== 0) finlen = $a0f2cc4727a2cd15$var$tailadd(finlen, -adxtail, cdytail, bdz, bdztail);
    }
    if (bdxtail !== 0) {
        if (cdytail !== 0) finlen = $a0f2cc4727a2cd15$var$tailadd(finlen, bdxtail, cdytail, adz, adztail);
        if (adytail !== 0) finlen = $a0f2cc4727a2cd15$var$tailadd(finlen, -bdxtail, adytail, cdz, cdztail);
    }
    if (cdxtail !== 0) {
        if (adytail !== 0) finlen = $a0f2cc4727a2cd15$var$tailadd(finlen, cdxtail, adytail, bdz, bdztail);
        if (bdytail !== 0) finlen = $a0f2cc4727a2cd15$var$tailadd(finlen, -cdxtail, bdytail, adz, adztail);
    }
    return $a0f2cc4727a2cd15$var$fin[finlen - 1];
}
function $a0f2cc4727a2cd15$export$248ff23af2e93e3e(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;
    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const det = adz * (bdxcdy - cdxbdy) + bdz * (cdxady - adxcdy) + cdz * (adxbdy - bdxady);
    const permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz) + (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz) + (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz);
    const errbound = $a0f2cc4727a2cd15$var$o3derrboundA * permanent;
    if (det > errbound || -det > errbound) return det;
    return $a0f2cc4727a2cd15$var$orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent);
}
function $a0f2cc4727a2cd15$export$407220085d2c43a5(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;
    return adx * (bdy * cdz - bdz * cdy) + bdx * (cdy * adz - cdz * ady) + cdx * (ady * bdz - adz * bdy);
}



const $f89cae2510d954b7$var$iccerrboundA = (10 + 96 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $f89cae2510d954b7$var$iccerrboundB = (4 + 48 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $f89cae2510d954b7$var$iccerrboundC = (44 + 576 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $f89cae2510d954b7$var$bc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$ca = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$ab = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$aa = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$bb = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$cc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$u = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$v = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$axtbc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$aytbc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$bxtca = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$bytca = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$cxtab = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$cytab = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$abt = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$bct = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$cat = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$abtt = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$bctt = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$catt = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $f89cae2510d954b7$var$_8 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $f89cae2510d954b7$var$_16 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(16);
const $f89cae2510d954b7$var$_16b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(16);
const $f89cae2510d954b7$var$_16c = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(16);
const $f89cae2510d954b7$var$_32 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(32);
const $f89cae2510d954b7$var$_32b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(32);
const $f89cae2510d954b7$var$_48 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(48);
const $f89cae2510d954b7$var$_64 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(64);
let $f89cae2510d954b7$var$fin = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
let $f89cae2510d954b7$var$fin2 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
function $f89cae2510d954b7$var$finadd(finlen, a, alen) {
    finlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(finlen, $f89cae2510d954b7$var$fin, a, alen, $f89cae2510d954b7$var$fin2);
    const tmp = $f89cae2510d954b7$var$fin;
    $f89cae2510d954b7$var$fin = $f89cae2510d954b7$var$fin2;
    $f89cae2510d954b7$var$fin2 = tmp;
    return finlen;
}
function $f89cae2510d954b7$var$incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
    let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
    let abtlen, bctlen, catlen;
    let abttlen, bcttlen, cattlen;
    let n1, n0;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    s1 = bdx * cdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $f89cae2510d954b7$var$bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $f89cae2510d954b7$var$bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $f89cae2510d954b7$var$bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $f89cae2510d954b7$var$bc[3] = u3;
    s1 = cdx * ady;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $f89cae2510d954b7$var$ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $f89cae2510d954b7$var$ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $f89cae2510d954b7$var$ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $f89cae2510d954b7$var$ca[3] = u3;
    s1 = adx * bdy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $f89cae2510d954b7$var$ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $f89cae2510d954b7$var$ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $f89cae2510d954b7$var$ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $f89cae2510d954b7$var$ab[3] = u3;
    finlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bc, adx, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, adx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bc, ady, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, ady, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ca, bdx, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, bdx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ca, bdy, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, bdy, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, $f89cae2510d954b7$var$_32b), $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ab, cdx, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, cdx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ab, cdy, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, cdy, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$fin);
    let det = (0, $7086e40d6ef62e4f$export$9f3a0795ca2cc944)(finlen, $f89cae2510d954b7$var$fin);
    let errbound = $f89cae2510d954b7$var$iccerrboundB * permanent;
    if (det >= errbound || -det >= errbound) return det;
    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) return det;
    errbound = $f89cae2510d954b7$var$iccerrboundC * permanent + (0, $7086e40d6ef62e4f$export$a4103c3ab16b06d7) * Math.abs(det);
    det += (adx * adx + ady * ady) * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + 2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx) + ((bdx * bdx + bdy * bdy) * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + 2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) + ((cdx * cdx + cdy * cdy) * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + 2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));
    if (det >= errbound || -det >= errbound) return det;
    if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
        s1 = adx * adx;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
        ahi = c - (c - adx);
        alo = adx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = ady * ady;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ady;
        ahi = c - (c - ady);
        alo = ady - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        $f89cae2510d954b7$var$aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        $f89cae2510d954b7$var$aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        $f89cae2510d954b7$var$aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
        $f89cae2510d954b7$var$aa[3] = u3;
    }
    if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
        s1 = bdx * bdx;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
        ahi = c - (c - bdx);
        alo = bdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = bdy * bdy;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdy;
        ahi = c - (c - bdy);
        alo = bdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        $f89cae2510d954b7$var$bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        $f89cae2510d954b7$var$bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        $f89cae2510d954b7$var$bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
        $f89cae2510d954b7$var$bb[3] = u3;
    }
    if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
        s1 = cdx * cdx;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
        ahi = c - (c - cdx);
        alo = cdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = cdy * cdy;
        c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdy;
        ahi = c - (c - cdy);
        alo = cdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        $f89cae2510d954b7$var$cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        $f89cae2510d954b7$var$cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        $f89cae2510d954b7$var$cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
        $f89cae2510d954b7$var$cc[3] = u3;
    }
    if (adxtail !== 0) {
        axtbclen = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bc, adxtail, $f89cae2510d954b7$var$axtbc);
        finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(axtbclen, $f89cae2510d954b7$var$axtbc, 2 * adx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$cc, adxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, bdy, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bb, adxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, -cdy, $f89cae2510d954b7$var$_16c), $f89cae2510d954b7$var$_16c, $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
    }
    if (adytail !== 0) {
        aytbclen = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bc, adytail, $f89cae2510d954b7$var$aytbc);
        finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(aytbclen, $f89cae2510d954b7$var$aytbc, 2 * ady, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bb, adytail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, cdx, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$cc, adytail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, -bdx, $f89cae2510d954b7$var$_16c), $f89cae2510d954b7$var$_16c, $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
    }
    if (bdxtail !== 0) {
        bxtcalen = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ca, bdxtail, $f89cae2510d954b7$var$bxtca);
        finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bxtcalen, $f89cae2510d954b7$var$bxtca, 2 * bdx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$aa, bdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, cdy, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$cc, bdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, -ady, $f89cae2510d954b7$var$_16c), $f89cae2510d954b7$var$_16c, $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
    }
    if (bdytail !== 0) {
        bytcalen = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ca, bdytail, $f89cae2510d954b7$var$bytca);
        finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bytcalen, $f89cae2510d954b7$var$bytca, 2 * bdy, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$cc, bdytail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, adx, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$aa, bdytail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, -cdx, $f89cae2510d954b7$var$_16c), $f89cae2510d954b7$var$_16c, $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
    }
    if (cdxtail !== 0) {
        cxtablen = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ab, cdxtail, $f89cae2510d954b7$var$cxtab);
        finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(cxtablen, $f89cae2510d954b7$var$cxtab, 2 * cdx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bb, cdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, ady, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$aa, cdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, -bdy, $f89cae2510d954b7$var$_16c), $f89cae2510d954b7$var$_16c, $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
    }
    if (cdytail !== 0) {
        cytablen = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$ab, cdytail, $f89cae2510d954b7$var$cytab);
        finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(cytablen, $f89cae2510d954b7$var$cytab, 2 * cdy, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$aa, cdytail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, bdx, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bb, cdytail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, -adx, $f89cae2510d954b7$var$_16c), $f89cae2510d954b7$var$_16c, $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
    }
    if (adxtail !== 0 || adytail !== 0) {
        if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
            s1 = bdxtail * cdy;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdy;
            bhi = c - (c - cdy);
            blo = cdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * cdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            $f89cae2510d954b7$var$u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            $f89cae2510d954b7$var$u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$u[3] = u3;
            s1 = cdxtail * -bdy;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * -bdy;
            bhi = c - (c - -bdy);
            blo = -bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * -bdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * -bdytail;
            bhi = c - (c - -bdytail);
            blo = -bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            $f89cae2510d954b7$var$v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            $f89cae2510d954b7$var$v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$v[3] = u3;
            bctlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(4, $f89cae2510d954b7$var$u, 4, $f89cae2510d954b7$var$v, $f89cae2510d954b7$var$bct);
            s1 = bdxtail * cdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdxtail * bdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            $f89cae2510d954b7$var$bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            $f89cae2510d954b7$var$bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$bctt[3] = u3;
            bcttlen = 4;
        } else {
            $f89cae2510d954b7$var$bct[0] = 0;
            bctlen = 1;
            $f89cae2510d954b7$var$bctt[0] = 0;
            bcttlen = 1;
        }
        if (adxtail !== 0) {
            const len = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bctlen, $f89cae2510d954b7$var$bct, adxtail, $f89cae2510d954b7$var$_16c);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(axtbclen, $f89cae2510d954b7$var$axtbc, adxtail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, 2 * adx, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
            const len2 = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bcttlen, $f89cae2510d954b7$var$bctt, adxtail, $f89cae2510d954b7$var$_8);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, 2 * adx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, adxtail, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, adxtail, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64);
            if (bdytail !== 0) finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$cc, adxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, bdytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16);
            if (cdytail !== 0) finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bb, -adxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, cdytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16);
        }
        if (adytail !== 0) {
            const len = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bctlen, $f89cae2510d954b7$var$bct, adytail, $f89cae2510d954b7$var$_16c);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(aytbclen, $f89cae2510d954b7$var$aytbc, adytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, 2 * ady, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
            const len2 = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bcttlen, $f89cae2510d954b7$var$bctt, adytail, $f89cae2510d954b7$var$_8);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, 2 * ady, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, adytail, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, adytail, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64);
        }
    }
    if (bdxtail !== 0 || bdytail !== 0) {
        if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
            s1 = cdxtail * ady;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ady;
            bhi = c - (c - ady);
            blo = ady - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * adytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            $f89cae2510d954b7$var$u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            $f89cae2510d954b7$var$u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$u[3] = u3;
            n1 = -cdy;
            n0 = -cdytail;
            s1 = adxtail * n1;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * n0;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            $f89cae2510d954b7$var$v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            $f89cae2510d954b7$var$v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$v[3] = u3;
            catlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(4, $f89cae2510d954b7$var$u, 4, $f89cae2510d954b7$var$v, $f89cae2510d954b7$var$cat);
            s1 = cdxtail * adytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adxtail * cdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            $f89cae2510d954b7$var$catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            $f89cae2510d954b7$var$catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$catt[3] = u3;
            cattlen = 4;
        } else {
            $f89cae2510d954b7$var$cat[0] = 0;
            catlen = 1;
            $f89cae2510d954b7$var$catt[0] = 0;
            cattlen = 1;
        }
        if (bdxtail !== 0) {
            const len = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(catlen, $f89cae2510d954b7$var$cat, bdxtail, $f89cae2510d954b7$var$_16c);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bxtcalen, $f89cae2510d954b7$var$bxtca, bdxtail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, 2 * bdx, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
            const len2 = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(cattlen, $f89cae2510d954b7$var$catt, bdxtail, $f89cae2510d954b7$var$_8);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, 2 * bdx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, bdxtail, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, bdxtail, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64);
            if (cdytail !== 0) finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$aa, bdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, cdytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16);
            if (adytail !== 0) finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$cc, -bdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, adytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16);
        }
        if (bdytail !== 0) {
            const len = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(catlen, $f89cae2510d954b7$var$cat, bdytail, $f89cae2510d954b7$var$_16c);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(bytcalen, $f89cae2510d954b7$var$bytca, bdytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, 2 * bdy, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
            const len2 = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(cattlen, $f89cae2510d954b7$var$catt, bdytail, $f89cae2510d954b7$var$_8);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, 2 * bdy, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, bdytail, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, bdytail, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64);
        }
    }
    if (cdxtail !== 0 || cdytail !== 0) {
        if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
            s1 = adxtail * bdy;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdy;
            bhi = c - (c - bdy);
            blo = bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * bdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            $f89cae2510d954b7$var$u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            $f89cae2510d954b7$var$u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$u[3] = u3;
            n1 = -ady;
            n0 = -adytail;
            s1 = bdxtail * n1;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * n0;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            $f89cae2510d954b7$var$v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            $f89cae2510d954b7$var$v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$v[3] = u3;
            abtlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(4, $f89cae2510d954b7$var$u, 4, $f89cae2510d954b7$var$v, $f89cae2510d954b7$var$abt);
            s1 = adxtail * bdytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdxtail * adytail;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            $f89cae2510d954b7$var$abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            $f89cae2510d954b7$var$abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            $f89cae2510d954b7$var$abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            $f89cae2510d954b7$var$abtt[3] = u3;
            abttlen = 4;
        } else {
            $f89cae2510d954b7$var$abt[0] = 0;
            abtlen = 1;
            $f89cae2510d954b7$var$abtt[0] = 0;
            abttlen = 1;
        }
        if (cdxtail !== 0) {
            const len = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(abtlen, $f89cae2510d954b7$var$abt, cdxtail, $f89cae2510d954b7$var$_16c);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(cxtablen, $f89cae2510d954b7$var$cxtab, cdxtail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, 2 * cdx, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
            const len2 = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(abttlen, $f89cae2510d954b7$var$abtt, cdxtail, $f89cae2510d954b7$var$_8);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, 2 * cdx, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, cdxtail, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, cdxtail, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64);
            if (adytail !== 0) finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$bb, cdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, adytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16);
            if (bdytail !== 0) finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, $f89cae2510d954b7$var$aa, -cdxtail, $f89cae2510d954b7$var$_8), $f89cae2510d954b7$var$_8, bdytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16);
        }
        if (cdytail !== 0) {
            const len = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(abtlen, $f89cae2510d954b7$var$abt, cdytail, $f89cae2510d954b7$var$_16c);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(cytablen, $f89cae2510d954b7$var$cytab, cdytail, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, 2 * cdy, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_48), $f89cae2510d954b7$var$_48);
            const len2 = (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(abttlen, $f89cae2510d954b7$var$abtt, cdytail, $f89cae2510d954b7$var$_8);
            finlen = $f89cae2510d954b7$var$finadd(finlen, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, 2 * cdy, $f89cae2510d954b7$var$_16), $f89cae2510d954b7$var$_16, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len2, $f89cae2510d954b7$var$_8, cdytail, $f89cae2510d954b7$var$_16b), $f89cae2510d954b7$var$_16b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $f89cae2510d954b7$var$_16c, cdytail, $f89cae2510d954b7$var$_32), $f89cae2510d954b7$var$_32, $f89cae2510d954b7$var$_32b, $f89cae2510d954b7$var$_64), $f89cae2510d954b7$var$_64);
        }
    }
    return $f89cae2510d954b7$var$fin[finlen - 1];
}
function $f89cae2510d954b7$export$454d2cfe884d4dd6(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const alift = adx * adx + ady * ady;
    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const blift = bdx * bdx + bdy * bdy;
    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const clift = cdx * cdx + cdy * cdy;
    const det = alift * (bdxcdy - cdxbdy) + blift * (cdxady - adxcdy) + clift * (adxbdy - bdxady);
    const permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift + (Math.abs(cdxady) + Math.abs(adxcdy)) * blift + (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;
    const errbound = $f89cae2510d954b7$var$iccerrboundA * permanent;
    if (det > errbound || -det > errbound) return det;
    return $f89cae2510d954b7$var$incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
}
function $f89cae2510d954b7$export$f98e78581b4485e6(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const ady = ay - dy;
    const bdx = bx - dx;
    const bdy = by - dy;
    const cdx = cx - dx;
    const cdy = cy - dy;
    const abdet = adx * bdy - bdx * ady;
    const bcdet = bdx * cdy - cdx * bdy;
    const cadet = cdx * ady - adx * cdy;
    const alift = adx * adx + ady * ady;
    const blift = bdx * bdx + bdy * bdy;
    const clift = cdx * cdx + cdy * cdy;
    return alift * bcdet + blift * cadet + clift * abdet;
}



const $ee2a543f70132073$var$isperrboundA = (16 + 224 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $ee2a543f70132073$var$isperrboundB = (5 + 72 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $ee2a543f70132073$var$isperrboundC = (71 + 1408 * (0, $7086e40d6ef62e4f$export$6c421550c66a327d)) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d) * (0, $7086e40d6ef62e4f$export$6c421550c66a327d);
const $ee2a543f70132073$var$ab = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$bc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$cd = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$de = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$ea = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$ac = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$bd = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$ce = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$da = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$eb = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(4);
const $ee2a543f70132073$var$abc = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$bcd = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$cde = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$dea = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$eab = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$abd = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$bce = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$cda = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$deb = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$eac = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$adet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
const $ee2a543f70132073$var$bdet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
const $ee2a543f70132073$var$cdet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
const $ee2a543f70132073$var$ddet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
const $ee2a543f70132073$var$edet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
const $ee2a543f70132073$var$abdet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(2304);
const $ee2a543f70132073$var$cddet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(2304);
const $ee2a543f70132073$var$cdedet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(3456);
const $ee2a543f70132073$var$deter = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(5760);
const $ee2a543f70132073$var$_8 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $ee2a543f70132073$var$_8b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $ee2a543f70132073$var$_8c = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(8);
const $ee2a543f70132073$var$_16 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(16);
const $ee2a543f70132073$var$_24 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(24);
const $ee2a543f70132073$var$_48 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(48);
const $ee2a543f70132073$var$_48b = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(48);
const $ee2a543f70132073$var$_96 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(96);
const $ee2a543f70132073$var$_192 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(192);
const $ee2a543f70132073$var$_384x = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(384);
const $ee2a543f70132073$var$_384y = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(384);
const $ee2a543f70132073$var$_384z = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(384);
const $ee2a543f70132073$var$_768 = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(768);
function $ee2a543f70132073$var$sum_three_scale(a, b, c, az, bz, cz, out) {
    return (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, a, az, $ee2a543f70132073$var$_8), $ee2a543f70132073$var$_8, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, b, bz, $ee2a543f70132073$var$_8b), $ee2a543f70132073$var$_8b, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(4, c, cz, $ee2a543f70132073$var$_8c), $ee2a543f70132073$var$_8c, $ee2a543f70132073$var$_16, out);
}
function $ee2a543f70132073$var$liftexact(alen, a, blen, b, clen, c, dlen, d, x, y, z, out) {
    const len = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(alen, a, blen, b, $ee2a543f70132073$var$_48), $ee2a543f70132073$var$_48, (0, $7086e40d6ef62e4f$export$aef51622e549b8b0)((0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)(clen, c, dlen, d, $ee2a543f70132073$var$_48b), $ee2a543f70132073$var$_48b), $ee2a543f70132073$var$_48b, $ee2a543f70132073$var$_96);
    return (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $ee2a543f70132073$var$_96, x, $ee2a543f70132073$var$_192), $ee2a543f70132073$var$_192, x, $ee2a543f70132073$var$_384x), $ee2a543f70132073$var$_384x, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $ee2a543f70132073$var$_96, y, $ee2a543f70132073$var$_192), $ee2a543f70132073$var$_192, y, $ee2a543f70132073$var$_384y), $ee2a543f70132073$var$_384y, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $ee2a543f70132073$var$_96, z, $ee2a543f70132073$var$_192), $ee2a543f70132073$var$_192, z, $ee2a543f70132073$var$_384z), $ee2a543f70132073$var$_384z, $ee2a543f70132073$var$_768, out);
}
function $ee2a543f70132073$var$insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
    s1 = ax * by;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ay;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$ab[3] = u3;
    s1 = bx * cy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * by;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$bc[3] = u3;
    s1 = cx * dy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * cy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$cd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$cd[3] = u3;
    s1 = dx * ey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * dy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$de[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$de[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$de[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$de[3] = u3;
    s1 = ex * ay;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * ey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$ea[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$ea[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$ea[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$ea[3] = u3;
    s1 = ax * cy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cx * ay;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$ac[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$ac[3] = u3;
    s1 = bx * dy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dx * by;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$bd[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$bd[3] = u3;
    s1 = cx * ey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cx;
    ahi = c - (c - cx);
    alo = cx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ex * cy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cy;
    bhi = c - (c - cy);
    blo = cy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$ce[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$ce[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$ce[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$ce[3] = u3;
    s1 = dx * ay;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dx;
    ahi = c - (c - dx);
    alo = dx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ax * dy;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ax;
    ahi = c - (c - ax);
    alo = ax - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dy;
    bhi = c - (c - dy);
    blo = dy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$da[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$da[3] = u3;
    s1 = ex * by;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ex;
    ahi = c - (c - ex);
    alo = ex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * by;
    bhi = c - (c - by);
    blo = by - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bx * ey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bx;
    ahi = c - (c - bx);
    alo = bx - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * ey;
    bhi = c - (c - ey);
    blo = ey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$eb[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$eb[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    $ee2a543f70132073$var$eb[2] = _j - (u3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$eb[3] = u3;
    const abclen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$ab, $ee2a543f70132073$var$bc, $ee2a543f70132073$var$ac, cz, az, -bz, $ee2a543f70132073$var$abc);
    const bcdlen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$bc, $ee2a543f70132073$var$cd, $ee2a543f70132073$var$bd, dz, bz, -cz, $ee2a543f70132073$var$bcd);
    const cdelen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$cd, $ee2a543f70132073$var$de, $ee2a543f70132073$var$ce, ez, cz, -dz, $ee2a543f70132073$var$cde);
    const dealen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$de, $ee2a543f70132073$var$ea, $ee2a543f70132073$var$da, az, dz, -ez, $ee2a543f70132073$var$dea);
    const eablen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$ea, $ee2a543f70132073$var$ab, $ee2a543f70132073$var$eb, bz, ez, -az, $ee2a543f70132073$var$eab);
    const abdlen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$ab, $ee2a543f70132073$var$bd, $ee2a543f70132073$var$da, dz, az, bz, $ee2a543f70132073$var$abd);
    const bcelen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$bc, $ee2a543f70132073$var$ce, $ee2a543f70132073$var$eb, ez, bz, cz, $ee2a543f70132073$var$bce);
    const cdalen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$cd, $ee2a543f70132073$var$da, $ee2a543f70132073$var$ac, az, cz, dz, $ee2a543f70132073$var$cda);
    const deblen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$de, $ee2a543f70132073$var$eb, $ee2a543f70132073$var$bd, bz, dz, ez, $ee2a543f70132073$var$deb);
    const eaclen = $ee2a543f70132073$var$sum_three_scale($ee2a543f70132073$var$ea, $ee2a543f70132073$var$ac, $ee2a543f70132073$var$ce, cz, ez, az, $ee2a543f70132073$var$eac);
    const deterlen = (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)($ee2a543f70132073$var$liftexact(cdelen, $ee2a543f70132073$var$cde, bcelen, $ee2a543f70132073$var$bce, deblen, $ee2a543f70132073$var$deb, bcdlen, $ee2a543f70132073$var$bcd, ax, ay, az, $ee2a543f70132073$var$adet), $ee2a543f70132073$var$adet, $ee2a543f70132073$var$liftexact(dealen, $ee2a543f70132073$var$dea, cdalen, $ee2a543f70132073$var$cda, eaclen, $ee2a543f70132073$var$eac, cdelen, $ee2a543f70132073$var$cde, bx, by, bz, $ee2a543f70132073$var$bdet), $ee2a543f70132073$var$bdet, (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)($ee2a543f70132073$var$liftexact(eablen, $ee2a543f70132073$var$eab, deblen, $ee2a543f70132073$var$deb, abdlen, $ee2a543f70132073$var$abd, dealen, $ee2a543f70132073$var$dea, cx, cy, cz, $ee2a543f70132073$var$cdet), $ee2a543f70132073$var$cdet, $ee2a543f70132073$var$liftexact(abclen, $ee2a543f70132073$var$abc, eaclen, $ee2a543f70132073$var$eac, bcelen, $ee2a543f70132073$var$bce, eablen, $ee2a543f70132073$var$eab, dx, dy, dz, $ee2a543f70132073$var$ddet), $ee2a543f70132073$var$ddet, $ee2a543f70132073$var$liftexact(bcdlen, $ee2a543f70132073$var$bcd, abdlen, $ee2a543f70132073$var$abd, cdalen, $ee2a543f70132073$var$cda, abclen, $ee2a543f70132073$var$abc, ex, ey, ez, $ee2a543f70132073$var$edet), $ee2a543f70132073$var$edet, $ee2a543f70132073$var$cddet, $ee2a543f70132073$var$cdedet), $ee2a543f70132073$var$cdedet, $ee2a543f70132073$var$abdet, $ee2a543f70132073$var$deter);
    return $ee2a543f70132073$var$deter[deterlen - 1];
}
const $ee2a543f70132073$var$xdet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(96);
const $ee2a543f70132073$var$ydet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(96);
const $ee2a543f70132073$var$zdet = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(96);
const $ee2a543f70132073$var$fin = (0, $7086e40d6ef62e4f$export$202e0172ed3c7be0)(1152);
function $ee2a543f70132073$var$liftadapt(a, b, c, az, bz, cz, x, y, z, out) {
    const len = $ee2a543f70132073$var$sum_three_scale(a, b, c, az, bz, cz, $ee2a543f70132073$var$_24);
    return (0, $7086e40d6ef62e4f$export$195a93e4bd4d876f)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $ee2a543f70132073$var$_24, x, $ee2a543f70132073$var$_48), $ee2a543f70132073$var$_48, x, $ee2a543f70132073$var$xdet), $ee2a543f70132073$var$xdet, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $ee2a543f70132073$var$_24, y, $ee2a543f70132073$var$_48), $ee2a543f70132073$var$_48, y, $ee2a543f70132073$var$ydet), $ee2a543f70132073$var$ydet, (0, $7086e40d6ef62e4f$export$dcdf75081b88279d)((0, $7086e40d6ef62e4f$export$dcdf75081b88279d)(len, $ee2a543f70132073$var$_24, z, $ee2a543f70132073$var$_48), $ee2a543f70132073$var$_48, z, $ee2a543f70132073$var$zdet), $ee2a543f70132073$var$zdet, $ee2a543f70132073$var$_192, out);
}
function $ee2a543f70132073$var$insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent) {
    let ab3, bc3, cd3, da3, ac3, bd3;
    let aextail, bextail, cextail, dextail;
    let aeytail, beytail, ceytail, deytail;
    let aeztail, beztail, ceztail, deztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0;
    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;
    s1 = aex * bey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bex * aey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ab3 = _j + _i;
    bvirt = ab3 - _j;
    $ee2a543f70132073$var$ab[2] = _j - (ab3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$ab[3] = ab3;
    s1 = bex * cey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * bey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bc3 = _j + _i;
    bvirt = bc3 - _j;
    $ee2a543f70132073$var$bc[2] = _j - (bc3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$bc[3] = bc3;
    s1 = cex * dey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * cey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$cd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$cd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    cd3 = _j + _i;
    bvirt = cd3 - _j;
    $ee2a543f70132073$var$cd[2] = _j - (cd3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$cd[3] = cd3;
    s1 = dex * aey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = aex * dey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$da[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$da[1] = _0 - (_i + bvirt) + (bvirt - t1);
    da3 = _j + _i;
    bvirt = da3 - _j;
    $ee2a543f70132073$var$da[2] = _j - (da3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$da[3] = da3;
    s1 = aex * cey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * aex;
    ahi = c - (c - aex);
    alo = aex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cey;
    bhi = c - (c - cey);
    blo = cey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cex * aey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * cex;
    ahi = c - (c - cex);
    alo = cex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * aey;
    bhi = c - (c - aey);
    blo = aey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$ac[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$ac[1] = _0 - (_i + bvirt) + (bvirt - t1);
    ac3 = _j + _i;
    bvirt = ac3 - _j;
    $ee2a543f70132073$var$ac[2] = _j - (ac3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$ac[3] = ac3;
    s1 = bex * dey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bex;
    ahi = c - (c - bex);
    alo = bex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dey;
    bhi = c - (c - dey);
    blo = dey - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = dex * bey;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * dex;
    ahi = c - (c - dex);
    alo = dex - ahi;
    c = (0, $7086e40d6ef62e4f$export$8cfde575cbd41e40) * bey;
    bhi = c - (c - bey);
    blo = bey - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    $ee2a543f70132073$var$bd[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    $ee2a543f70132073$var$bd[1] = _0 - (_i + bvirt) + (bvirt - t1);
    bd3 = _j + _i;
    bvirt = bd3 - _j;
    $ee2a543f70132073$var$bd[2] = _j - (bd3 - bvirt) + (_i - bvirt);
    $ee2a543f70132073$var$bd[3] = bd3;
    const finlen = (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$aef51622e549b8b0)($ee2a543f70132073$var$liftadapt($ee2a543f70132073$var$bc, $ee2a543f70132073$var$cd, $ee2a543f70132073$var$bd, dez, bez, -cez, aex, aey, aez, $ee2a543f70132073$var$adet), $ee2a543f70132073$var$adet), $ee2a543f70132073$var$adet, $ee2a543f70132073$var$liftadapt($ee2a543f70132073$var$cd, $ee2a543f70132073$var$da, $ee2a543f70132073$var$ac, aez, cez, dez, bex, bey, bez, $ee2a543f70132073$var$bdet), $ee2a543f70132073$var$bdet, $ee2a543f70132073$var$abdet), $ee2a543f70132073$var$abdet, (0, $7086e40d6ef62e4f$export$8a63f25cc62965f1)((0, $7086e40d6ef62e4f$export$aef51622e549b8b0)($ee2a543f70132073$var$liftadapt($ee2a543f70132073$var$da, $ee2a543f70132073$var$ab, $ee2a543f70132073$var$bd, bez, dez, aez, cex, cey, cez, $ee2a543f70132073$var$cdet), $ee2a543f70132073$var$cdet), $ee2a543f70132073$var$cdet, $ee2a543f70132073$var$liftadapt($ee2a543f70132073$var$ab, $ee2a543f70132073$var$bc, $ee2a543f70132073$var$ac, cez, aez, -bez, dex, dey, dez, $ee2a543f70132073$var$ddet), $ee2a543f70132073$var$ddet, $ee2a543f70132073$var$cddet), $ee2a543f70132073$var$cddet, $ee2a543f70132073$var$fin);
    let det = (0, $7086e40d6ef62e4f$export$9f3a0795ca2cc944)(finlen, $ee2a543f70132073$var$fin);
    let errbound = $ee2a543f70132073$var$isperrboundB * permanent;
    if (det >= errbound || -det >= errbound) return det;
    bvirt = ax - aex;
    aextail = ax - (aex + bvirt) + (bvirt - ex);
    bvirt = ay - aey;
    aeytail = ay - (aey + bvirt) + (bvirt - ey);
    bvirt = az - aez;
    aeztail = az - (aez + bvirt) + (bvirt - ez);
    bvirt = bx - bex;
    bextail = bx - (bex + bvirt) + (bvirt - ex);
    bvirt = by - bey;
    beytail = by - (bey + bvirt) + (bvirt - ey);
    bvirt = bz - bez;
    beztail = bz - (bez + bvirt) + (bvirt - ez);
    bvirt = cx - cex;
    cextail = cx - (cex + bvirt) + (bvirt - ex);
    bvirt = cy - cey;
    ceytail = cy - (cey + bvirt) + (bvirt - ey);
    bvirt = cz - cez;
    ceztail = cz - (cez + bvirt) + (bvirt - ez);
    bvirt = dx - dex;
    dextail = dx - (dex + bvirt) + (bvirt - ex);
    bvirt = dy - dey;
    deytail = dy - (dey + bvirt) + (bvirt - ey);
    bvirt = dz - dez;
    deztail = dz - (dez + bvirt) + (bvirt - ez);
    if (aextail === 0 && aeytail === 0 && aeztail === 0 && bextail === 0 && beytail === 0 && beztail === 0 && cextail === 0 && ceytail === 0 && ceztail === 0 && dextail === 0 && deytail === 0 && deztail === 0) return det;
    errbound = $ee2a543f70132073$var$isperrboundC * permanent + (0, $7086e40d6ef62e4f$export$a4103c3ab16b06d7) * Math.abs(det);
    const abeps = aex * beytail + bey * aextail - (aey * bextail + bex * aeytail);
    const bceps = bex * ceytail + cey * bextail - (bey * cextail + cex * beytail);
    const cdeps = cex * deytail + dey * cextail - (cey * dextail + dex * ceytail);
    const daeps = dex * aeytail + aey * dextail - (dey * aextail + aex * deytail);
    const aceps = aex * ceytail + cey * aextail - (aey * cextail + cex * aeytail);
    const bdeps = bex * deytail + dey * bextail - (bey * dextail + dex * beytail);
    det += (bex * bex + bey * bey + bez * bez) * (cez * daeps + dez * aceps + aez * cdeps + (ceztail * da3 + deztail * ac3 + aeztail * cd3)) + (dex * dex + dey * dey + dez * dez) * (aez * bceps - bez * aceps + cez * abeps + (aeztail * bc3 - beztail * ac3 + ceztail * ab3)) - ((aex * aex + aey * aey + aez * aez) * (bez * cdeps - cez * bdeps + dez * bceps + (beztail * cd3 - ceztail * bd3 + deztail * bc3)) + (cex * cex + cey * cey + cez * cez) * (dez * abeps + aez * bdeps + bez * daeps + (deztail * ab3 + aeztail * bd3 + beztail * da3))) + 2 * ((bex * bextail + bey * beytail + bez * beztail) * (cez * da3 + dez * ac3 + aez * cd3) + (dex * dextail + dey * deytail + dez * deztail) * (aez * bc3 - bez * ac3 + cez * ab3) - ((aex * aextail + aey * aeytail + aez * aeztail) * (bez * cd3 - cez * bd3 + dez * bc3) + (cex * cextail + cey * ceytail + cez * ceztail) * (dez * ab3 + aez * bd3 + bez * da3)));
    if (det >= errbound || -det >= errbound) return det;
    return $ee2a543f70132073$var$insphereexact(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez);
}
function $ee2a543f70132073$export$7846ecd8d3a5d1ac(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez) {
    const aex = ax - ex;
    const bex = bx - ex;
    const cex = cx - ex;
    const dex = dx - ex;
    const aey = ay - ey;
    const bey = by - ey;
    const cey = cy - ey;
    const dey = dy - ey;
    const aez = az - ez;
    const bez = bz - ez;
    const cez = cz - ez;
    const dez = dz - ez;
    const aexbey = aex * bey;
    const bexaey = bex * aey;
    const ab = aexbey - bexaey;
    const bexcey = bex * cey;
    const cexbey = cex * bey;
    const bc = bexcey - cexbey;
    const cexdey = cex * dey;
    const dexcey = dex * cey;
    const cd = cexdey - dexcey;
    const dexaey = dex * aey;
    const aexdey = aex * dey;
    const da = dexaey - aexdey;
    const aexcey = aex * cey;
    const cexaey = cex * aey;
    const ac = aexcey - cexaey;
    const bexdey = bex * dey;
    const dexbey = dex * bey;
    const bd = bexdey - dexbey;
    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;
    const det = clift * (dez * ab + aez * bd + bez * da) - dlift * (aez * bc - bez * ac + cez * ab) + (alift * (bez * cd - cez * bd + dez * bc) - blift * (cez * da + dez * ac + aez * cd));
    const aezplus = Math.abs(aez);
    const bezplus = Math.abs(bez);
    const cezplus = Math.abs(cez);
    const dezplus = Math.abs(dez);
    const aexbeyplus = Math.abs(aexbey) + Math.abs(bexaey);
    const bexceyplus = Math.abs(bexcey) + Math.abs(cexbey);
    const cexdeyplus = Math.abs(cexdey) + Math.abs(dexcey);
    const dexaeyplus = Math.abs(dexaey) + Math.abs(aexdey);
    const aexceyplus = Math.abs(aexcey) + Math.abs(cexaey);
    const bexdeyplus = Math.abs(bexdey) + Math.abs(dexbey);
    const permanent = (cexdeyplus * bezplus + bexdeyplus * cezplus + bexceyplus * dezplus) * alift + (dexaeyplus * cezplus + aexceyplus * dezplus + cexdeyplus * aezplus) * blift + (aexbeyplus * dezplus + bexdeyplus * aezplus + dexaeyplus * bezplus) * clift + (bexceyplus * aezplus + aexceyplus * bezplus + aexbeyplus * cezplus) * dlift;
    const errbound = $ee2a543f70132073$var$isperrboundA * permanent;
    if (det > errbound || -det > errbound) return det;
    return -$ee2a543f70132073$var$insphereadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, ex, ey, ez, permanent);
}
function $ee2a543f70132073$export$11235b985c819946(pax, pay, paz, pbx, pby, pbz, pcx, pcy, pcz, pdx, pdy, pdz, pex, pey, pez) {
    const aex = pax - pex;
    const bex = pbx - pex;
    const cex = pcx - pex;
    const dex = pdx - pex;
    const aey = pay - pey;
    const bey = pby - pey;
    const cey = pcy - pey;
    const dey = pdy - pey;
    const aez = paz - pez;
    const bez = pbz - pez;
    const cez = pcz - pez;
    const dez = pdz - pez;
    const ab = aex * bey - bex * aey;
    const bc = bex * cey - cex * bey;
    const cd = cex * dey - dex * cey;
    const da = dex * aey - aex * dey;
    const ac = aex * cey - cex * aey;
    const bd = bex * dey - dex * bey;
    const abc = aez * bc - bez * ac + cez * ab;
    const bcd = bez * cd - cez * bd + dez * bc;
    const cda = cez * da + dez * ac + aez * cd;
    const dab = dez * ab + aez * bd + bez * da;
    const alift = aex * aex + aey * aey + aez * aez;
    const blift = bex * bex + bey * bey + bez * bez;
    const clift = cex * cex + cey * cey + cez * cez;
    const dlift = dex * dex + dey * dey + dez * dez;
    return clift * dab - dlift * abc + (alift * bcd - blift * cda);
}




const $876e320ff888d276$var$EPSILON = Math.pow(2, -52);
const $876e320ff888d276$var$EDGE_STACK = new Uint32Array(512);
class $876e320ff888d276$export$2e2bcd8739ae039 {
    static from(points, getX = $876e320ff888d276$var$defaultGetX, getY = $876e320ff888d276$var$defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);
        for(let i = 0; i < n; i++){
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }
        return new $876e320ff888d276$export$2e2bcd8739ae039(coords);
    }
    constructor(coords){
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
        this.coords = coords;
        // arrays that will store the triangulation graph
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);
        // temporary arrays for tracking the edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n); // edge to prev edge
        this._hullNext = new Uint32Array(n); // edge to next edge
        this._hullTri = new Uint32Array(n); // edge to adjacent triangle
        this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash
        // temporary arrays for sorting points
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);
        this.update();
    }
    update() {
        const { coords: coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
        const n = coords.length >> 1;
        // populate an array of point indices; calculate input data bbox
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        for(let i = 0; i < n; i++){
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        let minDist = Infinity;
        let i0, i1, i2;
        // pick a seed point close to the center
        for(let i = 0; i < n; i++){
            const d = $876e320ff888d276$var$dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];
        minDist = Infinity;
        // find the point closest to the seed
        for(let i = 0; i < n; i++){
            if (i === i0) continue;
            const d = $876e320ff888d276$var$dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];
        let minRadius = Infinity;
        // find the third point which forms the smallest circumcircle with the first two
        for(let i = 0; i < n; i++){
            if (i === i0 || i === i1) continue;
            const r = $876e320ff888d276$var$circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];
        if (minRadius === Infinity) {
            // order collinear points by dx (or dy if all x are identical)
            // and return the list as a hull
            for(let i = 0; i < n; i++)this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
            $876e320ff888d276$var$quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for(let i = 0, d0 = -Infinity; i < n; i++){
                const id = this._ids[i];
                if (this._dists[id] > d0) {
                    hull[j++] = id;
                    d0 = this._dists[id];
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
        }
        // swap the order of the seed points for counter-clockwise orientation
        if ((0, $70ead2fda10d9ba3$export$bbb923599a46a7d8)(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }
        const center = $876e320ff888d276$var$circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;
        for(let i = 0; i < n; i++)this._dists[i] = $876e320ff888d276$var$dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        // sort the points by distance from the seed triangle circumcenter
        $876e320ff888d276$var$quicksort(this._ids, this._dists, 0, n - 1);
        // set up the seed triangle as the starting hull
        this._hullStart = i0;
        let hullSize = 3;
        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;
        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;
        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;
        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);
        for(let k = 0, xp, yp; k < this._ids.length; k++){
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= $876e320ff888d276$var$EPSILON && Math.abs(y - yp) <= $876e320ff888d276$var$EPSILON) continue;
            xp = x;
            yp = y;
            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;
            // find a visible edge on the convex hull using edge hash
            let start = 0;
            for(let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++){
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }
            start = hullPrev[start];
            let e = start, q;
            while(q = hullNext[e], (0, $70ead2fda10d9ba3$export$bbb923599a46a7d8)(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0){
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue; // likely a near-duplicate point; skip it
            // add the first triangle from the point
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
            // recursively flip triangles from the point until they satisfy the Delaunay condition
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t; // keep track of boundary triangles on the hull
            hullSize++;
            // walk forward through the hull, adding more triangles and flipping recursively
            let n = hullNext[e];
            while(q = hullNext[n], (0, $70ead2fda10d9ba3$export$bbb923599a46a7d8)(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0){
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n; // mark as removed
                hullSize--;
                n = q;
            }
            // walk backward from the other side, adding more triangles and flipping
            if (e === start) while(q = hullPrev[e], (0, $70ead2fda10d9ba3$export$bbb923599a46a7d8)(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0){
                t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                this._legalize(t + 2);
                hullTri[q] = t;
                hullNext[e] = e; // mark as removed
                hullSize--;
                e = q;
            }
            // update the hull indices
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;
            // save the two new edges in the hash table
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }
        this.hull = new Uint32Array(hullSize);
        for(let i = 0, e = this._hullStart; i < hullSize; i++){
            this.hull[i] = e;
            e = hullNext[e];
        }
        // trim typed triangle mesh arrays
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    _hashKey(x, y) {
        return Math.floor($876e320ff888d276$var$pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }
    _legalize(a) {
        const { _triangles: triangles, _halfedges: halfedges, coords: coords } = this;
        let i = 0;
        let ar = 0;
        // recursion eliminated with a fixed-size stack
        while(true){
            const b = halfedges[a];
            /* if the pair of triangles doesn't satisfy the Delaunay condition
             * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
             * then do the same check/flip recursively for the new pair of triangles
             *
             *           pl                    pl
             *          /||\                  /  \
             *       al/ || \bl            al/    \a
             *        /  ||  \              /      \
             *       /  a||b  \    flip    /___ar___\
             *     p0\   ||   /p1   =>   p0\---bl---/p1
             *        \  ||  /              \      /
             *       ar\ || /br             b\    /br
             *          \||/                  \  /
             *           pr                    pr
             */ const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;
            if (b === -1) {
                if (i === 0) break;
                a = $876e320ff888d276$var$EDGE_STACK[--i];
                continue;
            }
            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;
            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];
            const illegal = $876e320ff888d276$var$inCircle(coords[2 * p0], coords[2 * p0 + 1], coords[2 * pr], coords[2 * pr + 1], coords[2 * pl], coords[2 * pl + 1], coords[2 * p1], coords[2 * p1 + 1]);
            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;
                const hbl = halfedges[bl];
                // edge swapped on the other side of the hull (rare); fix the halfedge reference
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    }while (e !== this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);
                const br = b0 + (b + 1) % 3;
                // don't worry about hitting the cap: it can only happen on extremely degenerate input
                if (i < $876e320ff888d276$var$EDGE_STACK.length) $876e320ff888d276$var$EDGE_STACK[i++] = br;
            } else {
                if (i === 0) break;
                a = $876e320ff888d276$var$EDGE_STACK[--i];
            }
        }
        return ar;
    }
    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }
    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;
        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;
        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);
        this.trianglesLen += 3;
        return t;
    }
}
// monotonically increases with real angle, but doesn't need expensive trigonometry
function $876e320ff888d276$var$pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}
function $876e320ff888d276$var$dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}
function $876e320ff888d276$var$inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;
    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;
    return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function $876e320ff888d276$var$circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;
    return x * x + y * y;
}
function $876e320ff888d276$var$circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;
    return {
        x: x,
        y: y
    };
}
function $876e320ff888d276$var$quicksort(ids, dists, left, right) {
    if (right - left <= 20) for(let i = left + 1; i <= right; i++){
        const temp = ids[i];
        const tempDist = dists[temp];
        let j = i - 1;
        while(j >= left && dists[ids[j]] > tempDist)ids[j + 1] = ids[j--];
        ids[j + 1] = temp;
    }
    else {
        const median = left + right >> 1;
        let i = left + 1;
        let j = right;
        $876e320ff888d276$var$swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) $876e320ff888d276$var$swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) $876e320ff888d276$var$swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) $876e320ff888d276$var$swap(ids, left, i);
        const temp = ids[i];
        const tempDist = dists[temp];
        while(true){
            do i++;
            while (dists[ids[i]] < tempDist);
            do j--;
            while (dists[ids[j]] > tempDist);
            if (j < i) break;
            $876e320ff888d276$var$swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;
        if (right - i + 1 >= j - left) {
            $876e320ff888d276$var$quicksort(ids, dists, i, right);
            $876e320ff888d276$var$quicksort(ids, dists, left, j - 1);
        } else {
            $876e320ff888d276$var$quicksort(ids, dists, left, j - 1);
            $876e320ff888d276$var$quicksort(ids, dists, i, right);
        }
    }
}
function $876e320ff888d276$var$swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function $876e320ff888d276$var$defaultGetX(p) {
    return p[0];
}
function $876e320ff888d276$var$defaultGetY(p) {
    return p[1];
}


const $fa0cd147a5e34176$var$epsilon = 1e-6;
class $fa0cd147a5e34176$export$2e2bcd8739ae039 {
    constructor(){
        this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
    }
    moveTo(x, y) {
        this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    }
    lineTo(x, y) {
        this._ += `L${this._x1 = +x},${this._y1 = +y}`;
    }
    arc(x, y, r) {
        x = +x, y = +y, r = +r;
        const x0 = x + r;
        const y0 = y;
        if (r < 0) throw new Error("negative radius");
        if (this._x1 === null) this._ += `M${x0},${y0}`;
        else if (Math.abs(this._x1 - x0) > $fa0cd147a5e34176$var$epsilon || Math.abs(this._y1 - y0) > $fa0cd147a5e34176$var$epsilon) this._ += "L" + x0 + "," + y0;
        if (!r) return;
        this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
    }
    rect(x, y, w, h) {
        this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
    }
    value() {
        return this._ || null;
    }
}


class $deda964913d55c4a$export$2e2bcd8739ae039 {
    constructor(){
        this._ = [];
    }
    moveTo(x, y) {
        this._.push([
            x,
            y
        ]);
    }
    closePath() {
        this._.push(this._[0].slice());
    }
    lineTo(x, y) {
        this._.push([
            x,
            y
        ]);
    }
    value() {
        return this._.length ? this._ : null;
    }
}




class $602ce75d5a2acc90$export$2e2bcd8739ae039 {
    constructor(delaunay, [xmin, ymin, xmax, ymax] = [
        0,
        0,
        960,
        500
    ]){
        if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
        this.delaunay = delaunay;
        this._circumcenters = new Float64Array(delaunay.points.length * 2);
        this.vectors = new Float64Array(delaunay.points.length * 2);
        this.xmax = xmax, this.xmin = xmin;
        this.ymax = ymax, this.ymin = ymin;
        this._init();
    }
    update() {
        this.delaunay.update();
        this._init();
        return this;
    }
    _init() {
        const { delaunay: { points: points, hull: hull, triangles: triangles }, vectors: vectors } = this;
        let bx, by; // lazily computed barycenter of the hull
        // Compute circumcenters.
        const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
        for(let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2){
            const t1 = triangles[i] * 2;
            const t2 = triangles[i + 1] * 2;
            const t3 = triangles[i + 2] * 2;
            const x1 = points[t1];
            const y1 = points[t1 + 1];
            const x2 = points[t2];
            const y2 = points[t2 + 1];
            const x3 = points[t3];
            const y3 = points[t3 + 1];
            const dx = x2 - x1;
            const dy = y2 - y1;
            const ex = x3 - x1;
            const ey = y3 - y1;
            const ab = (dx * ey - dy * ex) * 2;
            if (Math.abs(ab) < 1e-9) {
                // For a degenerate triangle, the circumcenter is at the infinity, in a
                // direction orthogonal to the halfedge and away from the “center” of
                // the diagram <bx, by>, defined as the hull’s barycenter.
                if (bx === undefined) {
                    bx = by = 0;
                    for (const i of hull)bx += points[i * 2], by += points[i * 2 + 1];
                    bx /= hull.length, by /= hull.length;
                }
                const a = 1e9 * Math.sign((bx - x1) * ey - (by - y1) * ex);
                x = (x1 + x3) / 2 - a * ey;
                y = (y1 + y3) / 2 + a * ex;
            } else {
                const d = 1 / ab;
                const bl = dx * dx + dy * dy;
                const cl = ex * ex + ey * ey;
                x = x1 + (ey * bl - dy * cl) * d;
                y = y1 + (dx * cl - ex * bl) * d;
            }
            circumcenters[j] = x;
            circumcenters[j + 1] = y;
        }
        // Compute exterior cell rays.
        let h = hull[hull.length - 1];
        let p0, p1 = h * 4;
        let x0, x1 = points[2 * h];
        let y0, y1 = points[2 * h + 1];
        vectors.fill(0);
        for(let i = 0; i < hull.length; ++i){
            h = hull[i];
            p0 = p1, x0 = x1, y0 = y1;
            p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
            vectors[p0 + 2] = vectors[p1] = y0 - y1;
            vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
        }
    }
    render(context) {
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        const { delaunay: { halfedges: halfedges, inedges: inedges, hull: hull }, circumcenters: circumcenters, vectors: vectors } = this;
        if (hull.length <= 1) return null;
        for(let i = 0, n = halfedges.length; i < n; ++i){
            const j = halfedges[i];
            if (j < i) continue;
            const ti = Math.floor(i / 3) * 2;
            const tj = Math.floor(j / 3) * 2;
            const xi = circumcenters[ti];
            const yi = circumcenters[ti + 1];
            const xj = circumcenters[tj];
            const yj = circumcenters[tj + 1];
            this._renderSegment(xi, yi, xj, yj, context);
        }
        let h0, h1 = hull[hull.length - 1];
        for(let i = 0; i < hull.length; ++i){
            h0 = h1, h1 = hull[i];
            const t = Math.floor(inedges[h1] / 3) * 2;
            const x = circumcenters[t];
            const y = circumcenters[t + 1];
            const v = h0 * 4;
            const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
            if (p) this._renderSegment(x, y, p[0], p[1], context);
        }
        return buffer && buffer.value();
    }
    renderBounds(context) {
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
        return buffer && buffer.value();
    }
    renderCell(i, context) {
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        const points = this._clip(i);
        if (points === null || !points.length) return;
        context.moveTo(points[0], points[1]);
        let n = points.length;
        while(points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1)n -= 2;
        for(let i = 2; i < n; i += 2)if (points[i] !== points[i - 2] || points[i + 1] !== points[i - 1]) context.lineTo(points[i], points[i + 1]);
        context.closePath();
        return buffer && buffer.value();
    }
    *cellPolygons() {
        const { delaunay: { points: points } } = this;
        for(let i = 0, n = points.length / 2; i < n; ++i){
            const cell = this.cellPolygon(i);
            if (cell) cell.index = i, yield cell;
        }
    }
    cellPolygon(i) {
        const polygon = new (0, $deda964913d55c4a$export$2e2bcd8739ae039);
        this.renderCell(i, polygon);
        return polygon.value();
    }
    _renderSegment(x0, y0, x1, y1, context) {
        let S;
        const c0 = this._regioncode(x0, y0);
        const c1 = this._regioncode(x1, y1);
        if (c0 === 0 && c1 === 0) {
            context.moveTo(x0, y0);
            context.lineTo(x1, y1);
        } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
            context.moveTo(S[0], S[1]);
            context.lineTo(S[2], S[3]);
        }
    }
    contains(i, x, y) {
        if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
        return this.delaunay._step(i, x, y) === i;
    }
    *neighbors(i) {
        const ci = this._clip(i);
        if (ci) for (const j of this.delaunay.neighbors(i)){
            const cj = this._clip(j);
            // find the common edge
            if (cj) loop: for(let ai = 0, li = ci.length; ai < li; ai += 2){
                for(let aj = 0, lj = cj.length; aj < lj; aj += 2)if (ci[ai] === cj[aj] && ci[ai + 1] === cj[aj + 1] && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
                    yield j;
                    break loop;
                }
            }
        }
    }
    _cell(i) {
        const { circumcenters: circumcenters, delaunay: { inedges: inedges, halfedges: halfedges, triangles: triangles } } = this;
        const e0 = inedges[i];
        if (e0 === -1) return null; // coincident point
        const points = [];
        let e = e0;
        do {
            const t = Math.floor(e / 3);
            points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
            e = e % 3 === 2 ? e - 2 : e + 1;
            if (triangles[e] !== i) break; // bad triangulation
            e = halfedges[e];
        }while (e !== e0 && e !== -1);
        return points;
    }
    _clip(i) {
        // degenerate case (1 valid point: return the box)
        if (i === 0 && this.delaunay.hull.length === 1) return [
            this.xmax,
            this.ymin,
            this.xmax,
            this.ymax,
            this.xmin,
            this.ymax,
            this.xmin,
            this.ymin
        ];
        const points = this._cell(i);
        if (points === null) return null;
        const { vectors: V } = this;
        const v = i * 4;
        return this._simplify(V[v] || V[v + 1] ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3]) : this._clipFinite(i, points));
    }
    _clipFinite(i, points) {
        const n = points.length;
        let P = null;
        let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
        let c0, c1 = this._regioncode(x1, y1);
        let e0, e1 = 0;
        for(let j = 0; j < n; j += 2){
            x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
            c0 = c1, c1 = this._regioncode(x1, y1);
            if (c0 === 0 && c1 === 0) {
                e0 = e1, e1 = 0;
                if (P) P.push(x1, y1);
                else P = [
                    x1,
                    y1
                ];
            } else {
                let S, sx0, sy0, sx1, sy1;
                if (c0 === 0) {
                    if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
                    [sx0, sy0, sx1, sy1] = S;
                } else {
                    if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
                    [sx1, sy1, sx0, sy0] = S;
                    e0 = e1, e1 = this._edgecode(sx0, sy0);
                    if (e0 && e1) this._edge(i, e0, e1, P, P.length);
                    if (P) P.push(sx0, sy0);
                    else P = [
                        sx0,
                        sy0
                    ];
                }
                e0 = e1, e1 = this._edgecode(sx1, sy1);
                if (e0 && e1) this._edge(i, e0, e1, P, P.length);
                if (P) P.push(sx1, sy1);
                else P = [
                    sx1,
                    sy1
                ];
            }
        }
        if (P) {
            e0 = e1, e1 = this._edgecode(P[0], P[1]);
            if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) return [
            this.xmax,
            this.ymin,
            this.xmax,
            this.ymax,
            this.xmin,
            this.ymax,
            this.xmin,
            this.ymin
        ];
        return P;
    }
    _clipSegment(x0, y0, x1, y1, c0, c1) {
        // for more robustness, always consider the segment in the same order
        const flip = c0 < c1;
        if (flip) [x0, y0, x1, y1, c0, c1] = [
            x1,
            y1,
            x0,
            y0,
            c1,
            c0
        ];
        while(true){
            if (c0 === 0 && c1 === 0) return flip ? [
                x1,
                y1,
                x0,
                y0
            ] : [
                x0,
                y0,
                x1,
                y1
            ];
            if (c0 & c1) return null;
            let x, y, c = c0 || c1;
            if (c & 8) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
            else if (c & 4) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
            else if (c & 2) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
            else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
            if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
            else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
        }
    }
    _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
        let P = Array.from(points), p;
        if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
        if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
        if (P = this._clipFinite(i, P)) for(let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2){
            c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
            if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
        }
        else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) P = [
            this.xmin,
            this.ymin,
            this.xmax,
            this.ymin,
            this.xmax,
            this.ymax,
            this.xmin,
            this.ymax
        ];
        return P;
    }
    _edge(i, e0, e1, P, j) {
        while(e0 !== e1){
            let x, y;
            switch(e0){
                case 5:
                    e0 = 4;
                    continue; // top-left
                case 4:
                    e0 = 6, x = this.xmax, y = this.ymin;
                    break; // top
                case 6:
                    e0 = 2;
                    continue; // top-right
                case 2:
                    e0 = 10, x = this.xmax, y = this.ymax;
                    break; // right
                case 10:
                    e0 = 8;
                    continue; // bottom-right
                case 8:
                    e0 = 9, x = this.xmin, y = this.ymax;
                    break; // bottom
                case 9:
                    e0 = 1;
                    continue; // bottom-left
                case 1:
                    e0 = 5, x = this.xmin, y = this.ymin;
                    break; // left
            }
            // Note: this implicitly checks for out of bounds: if P[j] or P[j+1] are
            // undefined, the conditional statement will be executed.
            if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) P.splice(j, 0, x, y), j += 2;
        }
        return j;
    }
    _project(x0, y0, vx, vy) {
        let t = Infinity, c, x, y;
        if (vy < 0) {
            if (y0 <= this.ymin) return null;
            if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
        } else if (vy > 0) {
            if (y0 >= this.ymax) return null;
            if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
        }
        if (vx > 0) {
            if (x0 >= this.xmax) return null;
            if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
        } else if (vx < 0) {
            if (x0 <= this.xmin) return null;
            if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
        }
        return [
            x,
            y
        ];
    }
    _edgecode(x, y) {
        return (x === this.xmin ? 1 : x === this.xmax ? 2 : 0) | (y === this.ymin ? 4 : y === this.ymax ? 8 : 0);
    }
    _regioncode(x, y) {
        return (x < this.xmin ? 1 : x > this.xmax ? 2 : 0) | (y < this.ymin ? 4 : y > this.ymax ? 8 : 0);
    }
    _simplify(P) {
        if (P && P.length > 4) {
            for(let i = 0; i < P.length; i += 2){
                const j = (i + 2) % P.length, k = (i + 4) % P.length;
                if (P[i] === P[j] && P[j] === P[k] || P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1]) P.splice(j, 2), i -= 2;
            }
            if (!P.length) P = null;
        }
        return P;
    }
}


const $f728f0f083a62581$var$tau = 2 * Math.PI, $f728f0f083a62581$var$pow = Math.pow;
function $f728f0f083a62581$var$pointX(p) {
    return p[0];
}
function $f728f0f083a62581$var$pointY(p) {
    return p[1];
}
// A triangulation is collinear if all its triangles have a non-null area
function $f728f0f083a62581$var$collinear(d) {
    const { triangles: triangles, coords: coords } = d;
    for(let i = 0; i < triangles.length; i += 3){
        const a = 2 * triangles[i], b = 2 * triangles[i + 1], c = 2 * triangles[i + 2], cross = (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1]) - (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
        if (cross > 1e-10) return false;
    }
    return true;
}
function $f728f0f083a62581$var$jitter(x, y, r) {
    return [
        x + Math.sin(x + y) * r,
        y + Math.cos(x - y) * r
    ];
}
class $f728f0f083a62581$export$2e2bcd8739ae039 {
    static from(points, fx = $f728f0f083a62581$var$pointX, fy = $f728f0f083a62581$var$pointY, that) {
        return new $f728f0f083a62581$export$2e2bcd8739ae039("length" in points ? $f728f0f083a62581$var$flatArray(points, fx, fy, that) : Float64Array.from($f728f0f083a62581$var$flatIterable(points, fx, fy, that)));
    }
    constructor(points){
        this._delaunator = new (0, $876e320ff888d276$export$2e2bcd8739ae039)(points);
        this.inedges = new Int32Array(points.length / 2);
        this._hullIndex = new Int32Array(points.length / 2);
        this.points = this._delaunator.coords;
        this._init();
    }
    update() {
        this._delaunator.update();
        this._init();
        return this;
    }
    _init() {
        const d = this._delaunator, points = this.points;
        // check for collinear
        if (d.hull && d.hull.length > 2 && $f728f0f083a62581$var$collinear(d)) {
            this.collinear = Int32Array.from({
                length: points.length / 2
            }, (_, i)=>i).sort((i, j)=>points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]); // for exact neighbors
            const e = this.collinear[0], f = this.collinear[this.collinear.length - 1], bounds = [
                points[2 * e],
                points[2 * e + 1],
                points[2 * f],
                points[2 * f + 1]
            ], r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
            for(let i = 0, n = points.length / 2; i < n; ++i){
                const p = $f728f0f083a62581$var$jitter(points[2 * i], points[2 * i + 1], r);
                points[2 * i] = p[0];
                points[2 * i + 1] = p[1];
            }
            this._delaunator = new (0, $876e320ff888d276$export$2e2bcd8739ae039)(points);
        } else delete this.collinear;
        const halfedges = this.halfedges = this._delaunator.halfedges;
        const hull = this.hull = this._delaunator.hull;
        const triangles = this.triangles = this._delaunator.triangles;
        const inedges = this.inedges.fill(-1);
        const hullIndex = this._hullIndex.fill(-1);
        // Compute an index from each point to an (arbitrary) incoming halfedge
        // Used to give the first neighbor of each point; for this reason,
        // on the hull we give priority to exterior halfedges
        for(let e = 0, n = halfedges.length; e < n; ++e){
            const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
            if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
        }
        for(let i = 0, n = hull.length; i < n; ++i)hullIndex[hull[i]] = i;
        // degenerate case: 1 or 2 (distinct) points
        if (hull.length <= 2 && hull.length > 0) {
            this.triangles = new Int32Array(3).fill(-1);
            this.halfedges = new Int32Array(3).fill(-1);
            this.triangles[0] = hull[0];
            inedges[hull[0]] = 1;
            if (hull.length === 2) {
                inedges[hull[1]] = 0;
                this.triangles[1] = hull[1];
                this.triangles[2] = hull[1];
            }
        }
    }
    voronoi(bounds) {
        return new (0, $602ce75d5a2acc90$export$2e2bcd8739ae039)(this, bounds);
    }
    *neighbors(i) {
        const { inedges: inedges, hull: hull, _hullIndex: _hullIndex, halfedges: halfedges, triangles: triangles, collinear: collinear } = this;
        // degenerate case with several collinear points
        if (collinear) {
            const l = collinear.indexOf(i);
            if (l > 0) yield collinear[l - 1];
            if (l < collinear.length - 1) yield collinear[l + 1];
            return;
        }
        const e0 = inedges[i];
        if (e0 === -1) return; // coincident point
        let e = e0, p0 = -1;
        do {
            yield p0 = triangles[e];
            e = e % 3 === 2 ? e - 2 : e + 1;
            if (triangles[e] !== i) return; // bad triangulation
            e = halfedges[e];
            if (e === -1) {
                const p = hull[(_hullIndex[i] + 1) % hull.length];
                if (p !== p0) yield p;
                return;
            }
        }while (e !== e0);
    }
    find(x, y, i = 0) {
        if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
        const i0 = i;
        let c;
        while((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0)i = c;
        return c;
    }
    _step(i, x, y) {
        const { inedges: inedges, hull: hull, _hullIndex: _hullIndex, halfedges: halfedges, triangles: triangles, points: points } = this;
        if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
        let c = i;
        let dc = $f728f0f083a62581$var$pow(x - points[i * 2], 2) + $f728f0f083a62581$var$pow(y - points[i * 2 + 1], 2);
        const e0 = inedges[i];
        let e = e0;
        do {
            let t = triangles[e];
            const dt = $f728f0f083a62581$var$pow(x - points[t * 2], 2) + $f728f0f083a62581$var$pow(y - points[t * 2 + 1], 2);
            if (dt < dc) dc = dt, c = t;
            e = e % 3 === 2 ? e - 2 : e + 1;
            if (triangles[e] !== i) break; // bad triangulation
            e = halfedges[e];
            if (e === -1) {
                e = hull[(_hullIndex[i] + 1) % hull.length];
                if (e !== t) {
                    if ($f728f0f083a62581$var$pow(x - points[e * 2], 2) + $f728f0f083a62581$var$pow(y - points[e * 2 + 1], 2) < dc) return e;
                }
                break;
            }
        }while (e !== e0);
        return c;
    }
    render(context) {
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        const { points: points, halfedges: halfedges, triangles: triangles } = this;
        for(let i = 0, n = halfedges.length; i < n; ++i){
            const j = halfedges[i];
            if (j < i) continue;
            const ti = triangles[i] * 2;
            const tj = triangles[j] * 2;
            context.moveTo(points[ti], points[ti + 1]);
            context.lineTo(points[tj], points[tj + 1]);
        }
        this.renderHull(context);
        return buffer && buffer.value();
    }
    renderPoints(context, r) {
        if (r === undefined && (!context || typeof context.moveTo !== "function")) r = context, context = null;
        r = r == undefined ? 2 : +r;
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        const { points: points } = this;
        for(let i = 0, n = points.length; i < n; i += 2){
            const x = points[i], y = points[i + 1];
            context.moveTo(x + r, y);
            context.arc(x, y, r, 0, $f728f0f083a62581$var$tau);
        }
        return buffer && buffer.value();
    }
    renderHull(context) {
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        const { hull: hull, points: points } = this;
        const h = hull[0] * 2, n = hull.length;
        context.moveTo(points[h], points[h + 1]);
        for(let i = 1; i < n; ++i){
            const h = 2 * hull[i];
            context.lineTo(points[h], points[h + 1]);
        }
        context.closePath();
        return buffer && buffer.value();
    }
    hullPolygon() {
        const polygon = new (0, $deda964913d55c4a$export$2e2bcd8739ae039);
        this.renderHull(polygon);
        return polygon.value();
    }
    renderTriangle(i, context) {
        const buffer = context == null ? context = new (0, $fa0cd147a5e34176$export$2e2bcd8739ae039) : undefined;
        const { points: points, triangles: triangles } = this;
        const t0 = triangles[i *= 3] * 2;
        const t1 = triangles[i + 1] * 2;
        const t2 = triangles[i + 2] * 2;
        context.moveTo(points[t0], points[t0 + 1]);
        context.lineTo(points[t1], points[t1 + 1]);
        context.lineTo(points[t2], points[t2 + 1]);
        context.closePath();
        return buffer && buffer.value();
    }
    *trianglePolygons() {
        const { triangles: triangles } = this;
        for(let i = 0, n = triangles.length / 3; i < n; ++i)yield this.trianglePolygon(i);
    }
    trianglePolygon(i) {
        const polygon = new (0, $deda964913d55c4a$export$2e2bcd8739ae039);
        this.renderTriangle(i, polygon);
        return polygon.value();
    }
}
function $f728f0f083a62581$var$flatArray(points, fx, fy, that) {
    const n = points.length;
    const array = new Float64Array(n * 2);
    for(let i = 0; i < n; ++i){
        const p = points[i];
        array[i * 2] = fx.call(that, p, i, points);
        array[i * 2 + 1] = fy.call(that, p, i, points);
    }
    return array;
}
function* $f728f0f083a62581$var$flatIterable(points, fx, fy, that) {
    let i = 0;
    for (const p of points){
        yield fx.call(that, p, i, points);
        yield fy.call(that, p, i, points);
        ++i;
    }
}





var $6c51ad0fde17f285$exports = {};

$parcel$export($6c51ad0fde17f285$exports, "dispatch", () => $e5354b03ec801fa9$export$2e2bcd8739ae039);



var $d652859119326841$exports = {};

$parcel$export($d652859119326841$exports, "drag", () => $e27dad7d95d3a37e$export$2e2bcd8739ae039);
$parcel$export($d652859119326841$exports, "dragDisable", () => $03ac00dfa1d6d210$export$2e2bcd8739ae039);
$parcel$export($d652859119326841$exports, "dragEnable", () => $03ac00dfa1d6d210$export$833237748009e1e1);




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





var $cd0c3413713816bd$exports = {};

$parcel$export($cd0c3413713816bd$exports, "dsvFormat", () => $1809286198792686$export$2e2bcd8739ae039);
$parcel$export($cd0c3413713816bd$exports, "csvParse", () => $70c50242d1da5ccc$export$289d25497b0f4c16);
$parcel$export($cd0c3413713816bd$exports, "csvParseRows", () => $70c50242d1da5ccc$export$c82550ca942d869);
$parcel$export($cd0c3413713816bd$exports, "csvFormat", () => $70c50242d1da5ccc$export$afe767551074aa08);
$parcel$export($cd0c3413713816bd$exports, "csvFormatBody", () => $70c50242d1da5ccc$export$b46fa59a5e3bc8a2);
$parcel$export($cd0c3413713816bd$exports, "csvFormatRows", () => $70c50242d1da5ccc$export$3f42a65843fbd1d9);
$parcel$export($cd0c3413713816bd$exports, "csvFormatRow", () => $70c50242d1da5ccc$export$c30212b87b2d080f);
$parcel$export($cd0c3413713816bd$exports, "csvFormatValue", () => $70c50242d1da5ccc$export$2771de09a60fc648);
$parcel$export($cd0c3413713816bd$exports, "tsvParse", () => $d22b3effba91b4f7$export$f913251db2f734ee);
$parcel$export($cd0c3413713816bd$exports, "tsvParseRows", () => $d22b3effba91b4f7$export$8de3b5abc40a067f);
$parcel$export($cd0c3413713816bd$exports, "tsvFormat", () => $d22b3effba91b4f7$export$77e754c4f8504293);
$parcel$export($cd0c3413713816bd$exports, "tsvFormatBody", () => $d22b3effba91b4f7$export$9d44987d460c9cb3);
$parcel$export($cd0c3413713816bd$exports, "tsvFormatRows", () => $d22b3effba91b4f7$export$ae461973f6adc981);
$parcel$export($cd0c3413713816bd$exports, "tsvFormatRow", () => $d22b3effba91b4f7$export$5d61cf35a4a738d2);
$parcel$export($cd0c3413713816bd$exports, "tsvFormatValue", () => $d22b3effba91b4f7$export$4280e6a416cd92a3);
$parcel$export($cd0c3413713816bd$exports, "autoType", () => $0865022e48c8f3e1$export$2e2bcd8739ae039);
var $1809286198792686$var$EOL = {}, $1809286198792686$var$EOF = {}, $1809286198792686$var$QUOTE = 34, $1809286198792686$var$NEWLINE = 10, $1809286198792686$var$RETURN = 13;
function $1809286198792686$var$objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function(name, i) {
        return JSON.stringify(name) + ": d[" + i + '] || ""';
    }).join(",") + "}");
}
function $1809286198792686$var$customConverter(columns, f) {
    var object = $1809286198792686$var$objectConverter(columns);
    return function(row, i) {
        return f(object(row), i, columns);
    };
}
// Compute unique columns in order of discovery.
function $1809286198792686$var$inferColumns(rows) {
    var columnSet = Object.create(null), columns = [];
    rows.forEach(function(row) {
        for(var column in row)if (!(column in columnSet)) columns.push(columnSet[column] = column);
    });
    return columns;
}
function $1809286198792686$var$pad(value, width) {
    var s = value + "", length = s.length;
    return length < width ? new Array(width - length + 1).join(0) + s : s;
}
function $1809286198792686$var$formatYear(year) {
    return year < 0 ? "-" + $1809286198792686$var$pad(-year, 6) : year > 9999 ? "+" + $1809286198792686$var$pad(year, 6) : $1809286198792686$var$pad(year, 4);
}
function $1809286198792686$var$formatDate(date) {
    var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds = date.getUTCSeconds(), milliseconds = date.getUTCMilliseconds();
    return isNaN(date) ? "Invalid Date" : $1809286198792686$var$formatYear(date.getUTCFullYear(), 4) + "-" + $1809286198792686$var$pad(date.getUTCMonth() + 1, 2) + "-" + $1809286198792686$var$pad(date.getUTCDate(), 2) + (milliseconds ? "T" + $1809286198792686$var$pad(hours, 2) + ":" + $1809286198792686$var$pad(minutes, 2) + ":" + $1809286198792686$var$pad(seconds, 2) + "." + $1809286198792686$var$pad(milliseconds, 3) + "Z" : seconds ? "T" + $1809286198792686$var$pad(hours, 2) + ":" + $1809286198792686$var$pad(minutes, 2) + ":" + $1809286198792686$var$pad(seconds, 2) + "Z" : minutes || hours ? "T" + $1809286198792686$var$pad(hours, 2) + ":" + $1809286198792686$var$pad(minutes, 2) + "Z" : "");
}
function $1809286198792686$export$2e2bcd8739ae039(delimiter) {
    var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
    function parse(text, f) {
        var convert, columns, rows = parseRows(text, function(row, i) {
            if (convert) return convert(row, i - 1);
            columns = row, convert = f ? $1809286198792686$var$customConverter(row, f) : $1809286198792686$var$objectConverter(row);
        });
        rows.columns = columns || [];
        return rows;
    }
    function parseRows(text, f) {
        var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false; // current token followed by EOL?
        // Strip the trailing newline.
        if (text.charCodeAt(N - 1) === $1809286198792686$var$NEWLINE) --N;
        if (text.charCodeAt(N - 1) === $1809286198792686$var$RETURN) --N;
        function token() {
            if (eof) return $1809286198792686$var$EOF;
            if (eol) return eol = false, $1809286198792686$var$EOL;
            // Unescape quotes.
            var i, j = I, c;
            if (text.charCodeAt(j) === $1809286198792686$var$QUOTE) {
                while(I++ < N && text.charCodeAt(I) !== $1809286198792686$var$QUOTE || text.charCodeAt(++I) === $1809286198792686$var$QUOTE);
                if ((i = I) >= N) eof = true;
                else if ((c = text.charCodeAt(I++)) === $1809286198792686$var$NEWLINE) eol = true;
                else if (c === $1809286198792686$var$RETURN) {
                    eol = true;
                    if (text.charCodeAt(I) === $1809286198792686$var$NEWLINE) ++I;
                }
                return text.slice(j + 1, i - 1).replace(/""/g, '"');
            }
            // Find next delimiter or newline.
            while(I < N){
                if ((c = text.charCodeAt(i = I++)) === $1809286198792686$var$NEWLINE) eol = true;
                else if (c === $1809286198792686$var$RETURN) {
                    eol = true;
                    if (text.charCodeAt(I) === $1809286198792686$var$NEWLINE) ++I;
                } else if (c !== DELIMITER) continue;
                return text.slice(j, i);
            }
            // Return last token before EOF.
            return eof = true, text.slice(j, N);
        }
        while((t = token()) !== $1809286198792686$var$EOF){
            var row = [];
            while(t !== $1809286198792686$var$EOL && t !== $1809286198792686$var$EOF)row.push(t), t = token();
            if (f && (row = f(row, n++)) == null) continue;
            rows.push(row);
        }
        return rows;
    }
    function preformatBody(rows, columns) {
        return rows.map(function(row) {
            return columns.map(function(column) {
                return formatValue(row[column]);
            }).join(delimiter);
        });
    }
    function format(rows, columns) {
        if (columns == null) columns = $1809286198792686$var$inferColumns(rows);
        return [
            columns.map(formatValue).join(delimiter)
        ].concat(preformatBody(rows, columns)).join("\n");
    }
    function formatBody(rows, columns) {
        if (columns == null) columns = $1809286198792686$var$inferColumns(rows);
        return preformatBody(rows, columns).join("\n");
    }
    function formatRows(rows) {
        return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
        return row.map(formatValue).join(delimiter);
    }
    function formatValue(value) {
        return value == null ? "" : value instanceof Date ? $1809286198792686$var$formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
    }
    return {
        parse: parse,
        parseRows: parseRows,
        format: format,
        formatBody: formatBody,
        formatRows: formatRows,
        formatRow: formatRow,
        formatValue: formatValue
    };
}



var $70c50242d1da5ccc$var$csv = (0, $1809286198792686$export$2e2bcd8739ae039)(",");
var $70c50242d1da5ccc$export$289d25497b0f4c16 = $70c50242d1da5ccc$var$csv.parse;
var $70c50242d1da5ccc$export$c82550ca942d869 = $70c50242d1da5ccc$var$csv.parseRows;
var $70c50242d1da5ccc$export$afe767551074aa08 = $70c50242d1da5ccc$var$csv.format;
var $70c50242d1da5ccc$export$b46fa59a5e3bc8a2 = $70c50242d1da5ccc$var$csv.formatBody;
var $70c50242d1da5ccc$export$3f42a65843fbd1d9 = $70c50242d1da5ccc$var$csv.formatRows;
var $70c50242d1da5ccc$export$c30212b87b2d080f = $70c50242d1da5ccc$var$csv.formatRow;
var $70c50242d1da5ccc$export$2771de09a60fc648 = $70c50242d1da5ccc$var$csv.formatValue;



var $d22b3effba91b4f7$var$tsv = (0, $1809286198792686$export$2e2bcd8739ae039)("	");
var $d22b3effba91b4f7$export$f913251db2f734ee = $d22b3effba91b4f7$var$tsv.parse;
var $d22b3effba91b4f7$export$8de3b5abc40a067f = $d22b3effba91b4f7$var$tsv.parseRows;
var $d22b3effba91b4f7$export$77e754c4f8504293 = $d22b3effba91b4f7$var$tsv.format;
var $d22b3effba91b4f7$export$9d44987d460c9cb3 = $d22b3effba91b4f7$var$tsv.formatBody;
var $d22b3effba91b4f7$export$ae461973f6adc981 = $d22b3effba91b4f7$var$tsv.formatRows;
var $d22b3effba91b4f7$export$5d61cf35a4a738d2 = $d22b3effba91b4f7$var$tsv.formatRow;
var $d22b3effba91b4f7$export$4280e6a416cd92a3 = $d22b3effba91b4f7$var$tsv.formatValue;


function $0865022e48c8f3e1$export$2e2bcd8739ae039(object) {
    for(var key in object){
        var value = object[key].trim(), number, m;
        if (!value) value = null;
        else if (value === "true") value = true;
        else if (value === "false") value = false;
        else if (value === "NaN") value = NaN;
        else if (!isNaN(number = +value)) value = number;
        else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
            if ($0865022e48c8f3e1$var$fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
            value = new Date(value);
        } else continue;
        object[key] = value;
    }
    return object;
}
// https://github.com/d3/d3-dsv/issues/45
const $0865022e48c8f3e1$var$fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();




var $7224514b6bcd4ae2$exports = {};

$parcel$export($7224514b6bcd4ae2$exports, "easeLinear", () => $75b49736111f19b7$export$45db2fc2f15997e7);
$parcel$export($7224514b6bcd4ae2$exports, "easeQuad", () => $7ea37cdae43478b6$export$d6ded66933892ed3);
$parcel$export($7224514b6bcd4ae2$exports, "easeQuadIn", () => $7ea37cdae43478b6$export$5118fc7a1e64441b);
$parcel$export($7224514b6bcd4ae2$exports, "easeQuadOut", () => $7ea37cdae43478b6$export$5be5f5e804d0b60c);
$parcel$export($7224514b6bcd4ae2$exports, "easeQuadInOut", () => $7ea37cdae43478b6$export$d6ded66933892ed3);
$parcel$export($7224514b6bcd4ae2$exports, "easeCubic", () => $e0f99efc6a5b6b82$export$89238d3bc79d3ada);
$parcel$export($7224514b6bcd4ae2$exports, "easeCubicIn", () => $e0f99efc6a5b6b82$export$b1a09cb1b71f86aa);
$parcel$export($7224514b6bcd4ae2$exports, "easeCubicOut", () => $e0f99efc6a5b6b82$export$68d528839c701b6);
$parcel$export($7224514b6bcd4ae2$exports, "easeCubicInOut", () => $e0f99efc6a5b6b82$export$89238d3bc79d3ada);
$parcel$export($7224514b6bcd4ae2$exports, "easePoly", () => $741ff001a36f8700$export$ae94c6a40058b429);
$parcel$export($7224514b6bcd4ae2$exports, "easePolyIn", () => $741ff001a36f8700$export$aa0b5c3ce2df9d7d);
$parcel$export($7224514b6bcd4ae2$exports, "easePolyOut", () => $741ff001a36f8700$export$e3d987a417dc6640);
$parcel$export($7224514b6bcd4ae2$exports, "easePolyInOut", () => $741ff001a36f8700$export$ae94c6a40058b429);
$parcel$export($7224514b6bcd4ae2$exports, "easeSin", () => $60b9f1d7dbc2c1df$export$ff58b604d3ba15ba);
$parcel$export($7224514b6bcd4ae2$exports, "easeSinIn", () => $60b9f1d7dbc2c1df$export$a83a280f8d31ba8d);
$parcel$export($7224514b6bcd4ae2$exports, "easeSinOut", () => $60b9f1d7dbc2c1df$export$62ec6410ca53f2a7);
$parcel$export($7224514b6bcd4ae2$exports, "easeSinInOut", () => $60b9f1d7dbc2c1df$export$ff58b604d3ba15ba);
$parcel$export($7224514b6bcd4ae2$exports, "easeExp", () => $2b0d4b55d5b055ae$export$ae4d4e77fab188ff);
$parcel$export($7224514b6bcd4ae2$exports, "easeExpIn", () => $2b0d4b55d5b055ae$export$fc3e95f15e1ef38e);
$parcel$export($7224514b6bcd4ae2$exports, "easeExpOut", () => $2b0d4b55d5b055ae$export$f3c9b2f85fbcf0ab);
$parcel$export($7224514b6bcd4ae2$exports, "easeExpInOut", () => $2b0d4b55d5b055ae$export$ae4d4e77fab188ff);
$parcel$export($7224514b6bcd4ae2$exports, "easeCircle", () => $c016abbc8358d3c5$export$2d757ff9ad09038f);
$parcel$export($7224514b6bcd4ae2$exports, "easeCircleIn", () => $c016abbc8358d3c5$export$9f82a71b0377c018);
$parcel$export($7224514b6bcd4ae2$exports, "easeCircleOut", () => $c016abbc8358d3c5$export$27989e665abef2c8);
$parcel$export($7224514b6bcd4ae2$exports, "easeCircleInOut", () => $c016abbc8358d3c5$export$2d757ff9ad09038f);
$parcel$export($7224514b6bcd4ae2$exports, "easeBounce", () => $275d83722a00586a$export$cccc9e04465dce11);
$parcel$export($7224514b6bcd4ae2$exports, "easeBounceIn", () => $275d83722a00586a$export$fccebd7948554554);
$parcel$export($7224514b6bcd4ae2$exports, "easeBounceOut", () => $275d83722a00586a$export$cccc9e04465dce11);
$parcel$export($7224514b6bcd4ae2$exports, "easeBounceInOut", () => $275d83722a00586a$export$41ad9e9849a703ce);
$parcel$export($7224514b6bcd4ae2$exports, "easeBack", () => $d33447eadf3151d7$export$ddc5fd596f6c71b2);
$parcel$export($7224514b6bcd4ae2$exports, "easeBackIn", () => $d33447eadf3151d7$export$b01116c84cdfe1a2);
$parcel$export($7224514b6bcd4ae2$exports, "easeBackOut", () => $d33447eadf3151d7$export$77edfce482316a60);
$parcel$export($7224514b6bcd4ae2$exports, "easeBackInOut", () => $d33447eadf3151d7$export$ddc5fd596f6c71b2);
$parcel$export($7224514b6bcd4ae2$exports, "easeElastic", () => $d1301f0c330638aa$export$ed1782b99e69bbc8);
$parcel$export($7224514b6bcd4ae2$exports, "easeElasticIn", () => $d1301f0c330638aa$export$41f42134872a5fa0);
$parcel$export($7224514b6bcd4ae2$exports, "easeElasticOut", () => $d1301f0c330638aa$export$ed1782b99e69bbc8);
$parcel$export($7224514b6bcd4ae2$exports, "easeElasticInOut", () => $d1301f0c330638aa$export$309de4f35f218bfd);
const $75b49736111f19b7$export$45db2fc2f15997e7 = (t)=>+t;


function $7ea37cdae43478b6$export$5118fc7a1e64441b(t) {
    return t * t;
}
function $7ea37cdae43478b6$export$5be5f5e804d0b60c(t) {
    return t * (2 - t);
}
function $7ea37cdae43478b6$export$d6ded66933892ed3(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}



var $741ff001a36f8700$var$exponent = 3;
var $741ff001a36f8700$export$aa0b5c3ce2df9d7d = function custom(e) {
    e = +e;
    function polyIn(t) {
        return Math.pow(t, e);
    }
    polyIn.exponent = custom;
    return polyIn;
}($741ff001a36f8700$var$exponent);
var $741ff001a36f8700$export$e3d987a417dc6640 = function custom(e) {
    e = +e;
    function polyOut(t) {
        return 1 - Math.pow(1 - t, e);
    }
    polyOut.exponent = custom;
    return polyOut;
}($741ff001a36f8700$var$exponent);
var $741ff001a36f8700$export$ae94c6a40058b429 = function custom(e) {
    e = +e;
    function polyInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut.exponent = custom;
    return polyInOut;
}($741ff001a36f8700$var$exponent);


var $60b9f1d7dbc2c1df$var$pi = Math.PI, $60b9f1d7dbc2c1df$var$halfPi = $60b9f1d7dbc2c1df$var$pi / 2;
function $60b9f1d7dbc2c1df$export$a83a280f8d31ba8d(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * $60b9f1d7dbc2c1df$var$halfPi);
}
function $60b9f1d7dbc2c1df$export$62ec6410ca53f2a7(t) {
    return Math.sin(t * $60b9f1d7dbc2c1df$var$halfPi);
}
function $60b9f1d7dbc2c1df$export$ff58b604d3ba15ba(t) {
    return (1 - Math.cos($60b9f1d7dbc2c1df$var$pi * t)) / 2;
}


// tpmt is two power minus ten times t scaled to [0,1]
function $1ee757b3f0dfeb4e$export$be3f0f7224794b88(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}


function $2b0d4b55d5b055ae$export$fc3e95f15e1ef38e(t) {
    return (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(1 - +t);
}
function $2b0d4b55d5b055ae$export$f3c9b2f85fbcf0ab(t) {
    return 1 - (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(t);
}
function $2b0d4b55d5b055ae$export$ae4d4e77fab188ff(t) {
    return ((t *= 2) <= 1 ? (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(1 - t) : 2 - (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(t - 1)) / 2;
}


function $c016abbc8358d3c5$export$9f82a71b0377c018(t) {
    return 1 - Math.sqrt(1 - t * t);
}
function $c016abbc8358d3c5$export$27989e665abef2c8(t) {
    return Math.sqrt(1 - --t * t);
}
function $c016abbc8358d3c5$export$2d757ff9ad09038f(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


var $275d83722a00586a$var$b1 = 4 / 11, $275d83722a00586a$var$b2 = 6 / 11, $275d83722a00586a$var$b3 = 8 / 11, $275d83722a00586a$var$b4 = 3 / 4, $275d83722a00586a$var$b5 = 9 / 11, $275d83722a00586a$var$b6 = 10 / 11, $275d83722a00586a$var$b7 = 15 / 16, $275d83722a00586a$var$b8 = 21 / 22, $275d83722a00586a$var$b9 = 63 / 64, $275d83722a00586a$var$b0 = 1 / $275d83722a00586a$var$b1 / $275d83722a00586a$var$b1;
function $275d83722a00586a$export$fccebd7948554554(t) {
    return 1 - $275d83722a00586a$export$cccc9e04465dce11(1 - t);
}
function $275d83722a00586a$export$cccc9e04465dce11(t) {
    return (t = +t) < $275d83722a00586a$var$b1 ? $275d83722a00586a$var$b0 * t * t : t < $275d83722a00586a$var$b3 ? $275d83722a00586a$var$b0 * (t -= $275d83722a00586a$var$b2) * t + $275d83722a00586a$var$b4 : t < $275d83722a00586a$var$b6 ? $275d83722a00586a$var$b0 * (t -= $275d83722a00586a$var$b5) * t + $275d83722a00586a$var$b7 : $275d83722a00586a$var$b0 * (t -= $275d83722a00586a$var$b8) * t + $275d83722a00586a$var$b9;
}
function $275d83722a00586a$export$41ad9e9849a703ce(t) {
    return ((t *= 2) <= 1 ? 1 - $275d83722a00586a$export$cccc9e04465dce11(1 - t) : $275d83722a00586a$export$cccc9e04465dce11(t - 1) + 1) / 2;
}


var $d33447eadf3151d7$var$overshoot = 1.70158;
var $d33447eadf3151d7$export$b01116c84cdfe1a2 = function custom(s) {
    s = +s;
    function backIn(t) {
        return (t = +t) * t * (s * (t - 1) + t);
    }
    backIn.overshoot = custom;
    return backIn;
}($d33447eadf3151d7$var$overshoot);
var $d33447eadf3151d7$export$77edfce482316a60 = function custom(s) {
    s = +s;
    function backOut(t) {
        return --t * t * ((t + 1) * s + t) + 1;
    }
    backOut.overshoot = custom;
    return backOut;
}($d33447eadf3151d7$var$overshoot);
var $d33447eadf3151d7$export$ddc5fd596f6c71b2 = function custom(s) {
    s = +s;
    function backInOut(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
    backInOut.overshoot = custom;
    return backInOut;
}($d33447eadf3151d7$var$overshoot);



var $d1301f0c330638aa$var$tau = 2 * Math.PI, $d1301f0c330638aa$var$amplitude = 1, $d1301f0c330638aa$var$period = 0.3;
var $d1301f0c330638aa$export$41f42134872a5fa0 = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= $d1301f0c330638aa$var$tau);
    function elasticIn(t) {
        return a * (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(- --t) * Math.sin((s - t) / p);
    }
    elasticIn.amplitude = function(a) {
        return custom(a, p * $d1301f0c330638aa$var$tau);
    };
    elasticIn.period = function(p) {
        return custom(a, p);
    };
    return elasticIn;
}($d1301f0c330638aa$var$amplitude, $d1301f0c330638aa$var$period);
var $d1301f0c330638aa$export$ed1782b99e69bbc8 = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= $d1301f0c330638aa$var$tau);
    function elasticOut(t) {
        return 1 - a * (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(t = +t) * Math.sin((t + s) / p);
    }
    elasticOut.amplitude = function(a) {
        return custom(a, p * $d1301f0c330638aa$var$tau);
    };
    elasticOut.period = function(p) {
        return custom(a, p);
    };
    return elasticOut;
}($d1301f0c330638aa$var$amplitude, $d1301f0c330638aa$var$period);
var $d1301f0c330638aa$export$309de4f35f218bfd = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= $d1301f0c330638aa$var$tau);
    function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a * (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(-t) * Math.sin((s - t) / p) : 2 - a * (0, $1ee757b3f0dfeb4e$export$be3f0f7224794b88)(t) * Math.sin((s + t) / p)) / 2;
    }
    elasticInOut.amplitude = function(a) {
        return custom(a, p * $d1301f0c330638aa$var$tau);
    };
    elasticInOut.period = function(p) {
        return custom(a, p);
    };
    return elasticInOut;
}($d1301f0c330638aa$var$amplitude, $d1301f0c330638aa$var$period);




var $f1ab2612140dd3f3$exports = {};

$parcel$export($f1ab2612140dd3f3$exports, "blob", () => $772a1ef8d227761c$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "buffer", () => $f17127b3c06a213c$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "dsv", () => $17656153ee0673f0$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "csv", () => $17656153ee0673f0$export$901ba78aa04f49da);
$parcel$export($f1ab2612140dd3f3$exports, "tsv", () => $17656153ee0673f0$export$580b2de76423ff18);
$parcel$export($f1ab2612140dd3f3$exports, "image", () => $192cb6148e5fc308$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "json", () => $54bf261b6c0527ed$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "text", () => $87ffe82740c8d951$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "xml", () => $8457d6ade3d1a149$export$2e2bcd8739ae039);
$parcel$export($f1ab2612140dd3f3$exports, "html", () => $8457d6ade3d1a149$export$c0bb0b647f701bb5);
$parcel$export($f1ab2612140dd3f3$exports, "svg", () => $8457d6ade3d1a149$export$7ed1367e7fa1ad68);
function $772a1ef8d227761c$var$responseBlob(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.blob();
}
function $772a1ef8d227761c$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($772a1ef8d227761c$var$responseBlob);
}


function $f17127b3c06a213c$var$responseArrayBuffer(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.arrayBuffer();
}
function $f17127b3c06a213c$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($f17127b3c06a213c$var$responseArrayBuffer);
}



function $87ffe82740c8d951$var$responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
}
function $87ffe82740c8d951$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($87ffe82740c8d951$var$responseText);
}


function $17656153ee0673f0$var$dsvParse(parse) {
    return function(input, init, row) {
        if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
        return (0, $87ffe82740c8d951$export$2e2bcd8739ae039)(input, init).then(function(response) {
            return parse(response, row);
        });
    };
}
function $17656153ee0673f0$export$2e2bcd8739ae039(delimiter, input, init, row) {
    if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
    var format = (0, $1809286198792686$export$2e2bcd8739ae039)(delimiter);
    return (0, $87ffe82740c8d951$export$2e2bcd8739ae039)(input, init).then(function(response) {
        return format.parse(response, row);
    });
}
var $17656153ee0673f0$export$901ba78aa04f49da = $17656153ee0673f0$var$dsvParse((0, $70c50242d1da5ccc$export$289d25497b0f4c16));
var $17656153ee0673f0$export$580b2de76423ff18 = $17656153ee0673f0$var$dsvParse((0, $d22b3effba91b4f7$export$f913251db2f734ee));


function $192cb6148e5fc308$export$2e2bcd8739ae039(input, init) {
    return new Promise(function(resolve, reject) {
        var image = new Image;
        for(var key in init)image[key] = init[key];
        image.onerror = reject;
        image.onload = function() {
            resolve(image);
        };
        image.src = input;
    });
}


function $54bf261b6c0527ed$var$responseJson(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    if (response.status === 204 || response.status === 205) return;
    return response.json();
}
function $54bf261b6c0527ed$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($54bf261b6c0527ed$var$responseJson);
}




function $8457d6ade3d1a149$var$parser(type) {
    return (input, init)=>(0, $87ffe82740c8d951$export$2e2bcd8739ae039)(input, init).then((text)=>(new DOMParser).parseFromString(text, type));
}
var $8457d6ade3d1a149$export$2e2bcd8739ae039 = $8457d6ade3d1a149$var$parser("application/xml");
var $8457d6ade3d1a149$export$c0bb0b647f701bb5 = $8457d6ade3d1a149$var$parser("text/html");
var $8457d6ade3d1a149$export$7ed1367e7fa1ad68 = $8457d6ade3d1a149$var$parser("image/svg+xml");




var $7d696246295d087f$exports = {};

$parcel$export($7d696246295d087f$exports, "forceCenter", () => $3f6442cf8fa7ab41$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceCollide", () => $73932b8f83272b58$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceLink", () => $5722a186e784cf73$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceManyBody", () => $80ce275c6e7a78e3$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceRadial", () => $ef4bd083a0843920$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceSimulation", () => $190a1cfcb85ad12a$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceX", () => $1b6c79bbf98e5321$export$2e2bcd8739ae039);
$parcel$export($7d696246295d087f$exports, "forceY", () => $c0e322e85f3019ca$export$2e2bcd8739ae039);
function $3f6442cf8fa7ab41$export$2e2bcd8739ae039(x, y) {
    var nodes, strength = 1;
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force() {
        var i, n = nodes.length, node, sx = 0, sy = 0;
        for(i = 0; i < n; ++i)node = nodes[i], sx += node.x, sy += node.y;
        for(sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i)node = nodes[i], node.x -= sx, node.y -= sy;
    }
    force.initialize = function(_) {
        nodes = _;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    return force;
}


function $98e5f905b1d90dd8$export$2e2bcd8739ae039(d) {
    const x = +this._x.call(null, d), y = +this._y.call(null, d);
    return $98e5f905b1d90dd8$var$add(this.cover(x, y), x, y, d);
}
function $98e5f905b1d90dd8$var$add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
    var parent, node = tree._root, leaf = {
        data: d
    }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;
    // Find the existing leaf for the new point, or add it.
    while(node.length){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
    }while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
    return parent[j] = node, parent[i] = leaf, tree;
}
function $98e5f905b1d90dd8$export$32ed0561867ec8a1(data) {
    var d, i, n = data.length, x, y, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // Compute the points and their extent.
    for(i = 0; i < n; ++i){
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);
    // Add the new points.
    for(i = 0; i < n; ++i)$98e5f905b1d90dd8$var$add(this, xz[i], yz[i], data[i]);
    return this;
}


function $ba700c7c4493a98b$export$2e2bcd8739ae039(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
    var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
    } else {
        var z = x1 - x0 || 1, node = this._root, parent, i;
        while(x0 > x || x >= x1 || y0 > y || y >= y1){
            i = (y < y0) << 1 | x < x0;
            parent = new Array(4), parent[i] = node, node = parent, z *= 2;
            switch(i){
                case 0:
                    x1 = x0 + z, y1 = y0 + z;
                    break;
                case 1:
                    x0 = x1 - z, y1 = y0 + z;
                    break;
                case 2:
                    x1 = x0 + z, y0 = y1 - z;
                    break;
                case 3:
                    x0 = x1 - z, y0 = y1 - z;
                    break;
            }
        }
        if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
}


function $e55db0d5e01fe9f7$export$2e2bcd8739ae039() {
    var data = [];
    this.visit(function(node) {
        if (!node.length) do data.push(node.data);
        while (node = node.next);
    });
    return data;
}


function $568378a4178f9c15$export$2e2bcd8739ae039(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [
        [
            this._x0,
            this._y0
        ],
        [
            this._x1,
            this._y1
        ]
    ];
}


function $d9667b079c0717fd$export$2e2bcd8739ae039(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
}


function $f91c5b79f8b324c0$export$2e2bcd8739ae039(x, y, radius) {
    var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
    }
    while(q = quads.pop()){
        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
        // Bisect the current quadrant.
        if (node.length) {
            var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
            quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(node[3], xm, ym, x2, y2), new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(node[2], x1, ym, xm, y2), new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(node[1], xm, y1, x2, ym), new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(node[0], x1, y1, xm, ym));
            // Visit the closest quadrant first.
            if (i = (y >= ym) << 1 | x >= xm) {
                q = quads[quads.length - 1];
                quads[quads.length - 1] = quads[quads.length - 1 - i];
                quads[quads.length - 1 - i] = q;
            }
        } else {
            var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
            if (d2 < radius) {
                var d = Math.sqrt(radius = d2);
                x0 = x - d, y0 = y - d;
                x3 = x + d, y3 = y + d;
                data = node.data;
            }
        }
    }
    return data;
}


function $2ee1b50502b12176$export$2e2bcd8739ae039(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
    var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;
    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while(true){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
    }
    // Find the point to remove.
    while(node.data !== d)if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    // If there are multiple coincident points, remove just the point.
    if (previous) return next ? previous.next = next : delete previous.next, this;
    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;
    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];
    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
    }
    return this;
}
function $2ee1b50502b12176$export$1cfc7aad5cb1833b(data) {
    for(var i = 0, n = data.length; i < n; ++i)this.remove(data[i]);
    return this;
}


function $70a9d370488c9189$export$2e2bcd8739ae039() {
    return this._root;
}


function $7b7c664d500e273e$export$2e2bcd8739ae039() {
    var size = 0;
    this.visit(function(node) {
        if (!node.length) do ++size;
        while (node = node.next);
    });
    return size;
}



function $93f8e3408cc34530$export$2e2bcd8739ae039(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(node, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop())if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, x0, y0, xm, ym));
    }
    return this;
}



function $2a4bb293f042550a$export$2e2bcd8739ae039(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(this._root, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop()){
        var node = q.node;
        if (node.length) {
            var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
            if (child = node[0]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, x0, y0, xm, ym));
            if (child = node[1]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, xm, y0, x1, ym));
            if (child = node[2]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, x0, ym, xm, y1));
            if (child = node[3]) quads.push(new (0, $d9667b079c0717fd$export$2e2bcd8739ae039)(child, xm, ym, x1, y1));
        }
        next.push(q);
    }
    while(q = next.pop())callback(q.node, q.x0, q.y0, q.x1, q.y1);
    return this;
}


function $d90e171efe7e5f70$export$e6fafc98131d2a44(d) {
    return d[0];
}
function $d90e171efe7e5f70$export$2e2bcd8739ae039(_) {
    return arguments.length ? (this._x = _, this) : this._x;
}


function $2dcd45477871abdc$export$6f0a21aeb844a64c(d) {
    return d[1];
}
function $2dcd45477871abdc$export$2e2bcd8739ae039(_) {
    return arguments.length ? (this._y = _, this) : this._y;
}


function $2ffd443656f1c56d$export$2e2bcd8739ae039(nodes, x, y) {
    var tree = new $2ffd443656f1c56d$var$Quadtree(x == null ? (0, $d90e171efe7e5f70$export$e6fafc98131d2a44) : x, y == null ? (0, $2dcd45477871abdc$export$6f0a21aeb844a64c) : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
function $2ffd443656f1c56d$var$Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
}
function $2ffd443656f1c56d$var$leaf_copy(leaf) {
    var copy = {
        data: leaf.data
    }, next = copy;
    while(leaf = leaf.next)next = next.next = {
        data: leaf.data
    };
    return copy;
}
var $2ffd443656f1c56d$var$treeProto = $2ffd443656f1c56d$export$2e2bcd8739ae039.prototype = $2ffd443656f1c56d$var$Quadtree.prototype;
$2ffd443656f1c56d$var$treeProto.copy = function() {
    var copy = new $2ffd443656f1c56d$var$Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = $2ffd443656f1c56d$var$leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(4)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 4; ++i)if (child = node.source[i]) {
            if (child.length) nodes.push({
                source: child,
                target: node.target[i] = new Array(4)
            });
            else node.target[i] = $2ffd443656f1c56d$var$leaf_copy(child);
        }
    }
    return copy;
};
$2ffd443656f1c56d$var$treeProto.add = (0, $98e5f905b1d90dd8$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.addAll = (0, $98e5f905b1d90dd8$export$32ed0561867ec8a1);
$2ffd443656f1c56d$var$treeProto.cover = (0, $ba700c7c4493a98b$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.data = (0, $e55db0d5e01fe9f7$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.extent = (0, $568378a4178f9c15$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.find = (0, $f91c5b79f8b324c0$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.remove = (0, $2ee1b50502b12176$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.removeAll = (0, $2ee1b50502b12176$export$1cfc7aad5cb1833b);
$2ffd443656f1c56d$var$treeProto.root = (0, $70a9d370488c9189$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.size = (0, $7b7c664d500e273e$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.visit = (0, $93f8e3408cc34530$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.visitAfter = (0, $2a4bb293f042550a$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.x = (0, $d90e171efe7e5f70$export$2e2bcd8739ae039);
$2ffd443656f1c56d$var$treeProto.y = (0, $2dcd45477871abdc$export$2e2bcd8739ae039);


function $81f9d39dde18f808$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $22644787cbdeaf42$export$2e2bcd8739ae039(random) {
    return (random() - 0.5) * 1e-6;
}


function $73932b8f83272b58$var$x(d) {
    return d.x + d.vx;
}
function $73932b8f83272b58$var$y(d) {
    return d.y + d.vy;
}
function $73932b8f83272b58$export$2e2bcd8739ae039(radius) {
    var nodes, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = (0, $2ffd443656f1c56d$export$2e2bcd8739ae039)(nodes, $73932b8f83272b58$var$x, $73932b8f83272b58$var$y).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                yi = node.y + node.vy;
                tree.visit(apply);
            }
        }
        function apply(quad, x0, y0, x1, y1) {
            var data = quad.data, rj = quad.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
                    if (l < r * r) {
                        if (x === 0) x = (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random), l += x * x;
                        if (y === 0) y = (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random), l += y * y;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        node.vy += (y *= l) * r;
                        data.vx -= x * (r = 1 - r);
                        data.vy -= y * r;
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
    }
    function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for(var i = quad.r = 0; i < 4; ++i)if (quad[i] && quad[i].r > quad.r) quad.r = quad[i].r;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : radius;
    };
    return force;
}




function $5722a186e784cf73$var$index(d) {
    return d.index;
}
function $5722a186e784cf73$var$find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
}
function $5722a186e784cf73$export$2e2bcd8739ae039(links) {
    var id = $5722a186e784cf73$var$index, strength = defaultStrength, strengths, distance = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(30), distances, nodes, count, bias, random, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
        for(var k = 0, n = links.length; k < iterations; ++k)for(var i = 0, link, source, target, x, y, l, b; i < n; ++i){
            link = links[i], source = link.source, target = link.target;
            x = target.x + target.vx - source.x - source.vx || (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random);
            y = target.y + target.vy - source.y - source.vy || (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random);
            l = Math.sqrt(x * x + y * y);
            l = (l - distances[i]) / l * alpha * strengths[i];
            x *= l, y *= l;
            target.vx -= x * (b = bias[i]);
            target.vy -= y * b;
            source.vx += x * (b = 1 - b);
            source.vy += y * b;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map((d, i)=>[
                id(d, i, nodes),
                d
            ])), link;
        for(i = 0, count = new Array(n); i < m; ++i){
            link = links[i], link.index = i;
            if (typeof link.source !== "object") link.source = $5722a186e784cf73$var$find(nodeById, link.source);
            if (typeof link.target !== "object") link.target = $5722a186e784cf73$var$find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for(i = 0, bias = new Array(m); i < m; ++i)link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)strengths[i] = +strength(links[i], i, links);
    }
    function initializeDistance() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)distances[i] = +distance(links[i], i, links);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initializeDistance(), force) : distance;
    };
    return force;
}







// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const $30fee22754ad9993$var$a = 1664525;
const $30fee22754ad9993$var$c = 1013904223;
const $30fee22754ad9993$var$m = 4294967296; // 2^32
function $30fee22754ad9993$export$2e2bcd8739ae039() {
    let s = 1;
    return ()=>(s = ($30fee22754ad9993$var$a * s + $30fee22754ad9993$var$c) % $30fee22754ad9993$var$m) / $30fee22754ad9993$var$m;
}


function $190a1cfcb85ad12a$export$d141bba7fdc215a3(d) {
    return d.x;
}
function $190a1cfcb85ad12a$export$4a5767248b18ef41(d) {
    return d.y;
}
var $190a1cfcb85ad12a$var$initialRadius = 10, $190a1cfcb85ad12a$var$initialAngle = Math.PI * (3 - Math.sqrt(5));
function $190a1cfcb85ad12a$export$2e2bcd8739ae039(nodes) {
    var simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = new Map(), stepper = (0, $f1f097b5a7611f55$export$9dc4ecf953986f04)(step), event = (0, $e5354b03ec801fa9$export$2e2bcd8739ae039)("tick", "end"), random = (0, $30fee22754ad9993$export$2e2bcd8739ae039)();
    if (nodes == null) nodes = [];
    function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
        }
    }
    function tick(iterations) {
        var i, n = nodes.length, node;
        if (iterations === undefined) iterations = 1;
        for(var k = 0; k < iterations; ++k){
            alpha += (alphaTarget - alpha) * alphaDecay;
            forces.forEach(function(force) {
                force(alpha);
            });
            for(i = 0; i < n; ++i){
                node = nodes[i];
                if (node.fx == null) node.x += node.vx *= velocityDecay;
                else node.x = node.fx, node.vx = 0;
                if (node.fy == null) node.y += node.vy *= velocityDecay;
                else node.y = node.fy, node.vy = 0;
            }
        }
        return simulation;
    }
    function initializeNodes() {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.index = i;
            if (node.fx != null) node.x = node.fx;
            if (node.fy != null) node.y = node.fy;
            if (isNaN(node.x) || isNaN(node.y)) {
                var radius = $190a1cfcb85ad12a$var$initialRadius * Math.sqrt(0.5 + i), angle = i * $190a1cfcb85ad12a$var$initialAngle;
                node.x = radius * Math.cos(angle);
                node.y = radius * Math.sin(angle);
            }
            if (isNaN(node.vx) || isNaN(node.vy)) node.vx = node.vy = 0;
        }
    }
    function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random);
        return force;
    }
    initializeNodes();
    return simulation = {
        tick: tick,
        restart: function() {
            return stepper.restart(step), simulation;
        },
        stop: function() {
            return stepper.stop(), simulation;
        },
        nodes: function(_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },
        alpha: function(_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
        },
        alphaMin: function(_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },
        alphaDecay: function(_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },
        alphaTarget: function(_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },
        velocityDecay: function(_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },
        randomSource: function(_) {
            return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },
        force: function(name, _) {
            return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
        },
        find: function(x, y, radius) {
            var i = 0, n = nodes.length, dx, dy, d2, node, closest;
            if (radius == null) radius = Infinity;
            else radius *= radius;
            for(i = 0; i < n; ++i){
                node = nodes[i];
                dx = x - node.x;
                dy = y - node.y;
                d2 = dx * dx + dy * dy;
                if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
        },
        on: function(name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
    };
}


function $80ce275c6e7a78e3$export$2e2bcd8739ae039() {
    var nodes, node, random, alpha, strength = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
        var i, n = nodes.length, tree = (0, $2ffd443656f1c56d$export$2e2bcd8739ae039)(nodes, (0, $190a1cfcb85ad12a$export$d141bba7fdc215a3), (0, $190a1cfcb85ad12a$export$4a5767248b18ef41)).visitAfter(accumulate);
        for(alpha = _, i = 0; i < n; ++i)node = nodes[i], tree.visit(apply);
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
    function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;
        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
            for(x = y = i = 0; i < 4; ++i)if ((q = quad[i]) && (c = Math.abs(q.value))) strength += q.value, weight += c, x += c * q.x, y += c * q.y;
            quad.x = x / weight;
            quad.y = y / weight;
        } else {
            q = quad;
            q.x = q.data.x;
            q.y = q.data.y;
            do strength += strengths[q.data.index];
            while (q = q.next);
        }
        quad.value = strength;
    }
    function apply(quad, x1, _, x2) {
        if (!quad.value) return true;
        var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
            if (l < distanceMax2) {
                if (x === 0) x = (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random), l += x * x;
                if (y === 0) y = (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random), l += y * y;
                if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
                node.vx += x * quad.value * alpha / l;
                node.vy += y * quad.value * alpha / l;
            }
            return true;
        } else if (quad.length || l >= distanceMax2) return;
        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
            if (x === 0) x = (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random), l += x * x;
            if (y === 0) y = (0, $22644787cbdeaf42$export$2e2bcd8739ae039)(random), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }
        do if (quad.data !== node) {
            w = strengths[quad.data.index] * alpha / l;
            node.vx += x * w;
            node.vy += y * w;
        }
        while (quad = quad.next);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : strength;
    };
    force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
}



function $ef4bd083a0843920$export$2e2bcd8739ae039(radius, x, y) {
    var nodes, strength = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(0.1), strengths, radiuses;
    if (typeof radius !== "function") radius = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+radius);
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force(alpha) {
        for(var i = 0, n = nodes.length; i < n; ++i){
            var node = nodes[i], dx = node.x - x || 1e-6, dy = node.y - y || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k = (radiuses[i] - r) * strengths[i] * alpha / r;
            node.vx += dx * k;
            node.vy += dy * k;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        radiuses = new Array(n);
        for(i = 0; i < n; ++i){
            radiuses[i] = +radius(nodes[i], i, nodes);
            strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
        }
    }
    force.initialize = function(_) {
        nodes = _, initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : radius;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    return force;
}




function $1b6c79bbf98e5321$export$2e2bcd8739ae039(x) {
    var strength = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(0.1), nodes, strengths, xz;
    if (typeof x !== "function") x = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(x == null ? 0 : +x);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        xz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : strength;
    };
    force.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : x;
    };
    return force;
}



function $c0e322e85f3019ca$export$2e2bcd8739ae039(y) {
    var strength = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(0.1), nodes, strengths, yz;
    if (typeof y !== "function") y = (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(y == null ? 0 : +y);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : strength;
    };
    force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $81f9d39dde18f808$export$2e2bcd8739ae039)(+_), initialize(), force) : y;
    };
    return force;
}




var $aa8b739c735e7d8a$exports = {};

$parcel$export($aa8b739c735e7d8a$exports, "formatDefaultLocale", () => $ad0595948e0b2f09$export$2e2bcd8739ae039);
$parcel$export($aa8b739c735e7d8a$exports, "format", () => $ad0595948e0b2f09$export$d9468344d3651243);
$parcel$export($aa8b739c735e7d8a$exports, "formatPrefix", () => $ad0595948e0b2f09$export$8d85692a469dde6f);
$parcel$export($aa8b739c735e7d8a$exports, "formatLocale", () => $bc36040bd58f8f35$export$2e2bcd8739ae039);
$parcel$export($aa8b739c735e7d8a$exports, "formatSpecifier", () => $6c61b78b0e12530a$export$2e2bcd8739ae039);
$parcel$export($aa8b739c735e7d8a$exports, "FormatSpecifier", () => $6c61b78b0e12530a$export$963aac351db36ed4);
$parcel$export($aa8b739c735e7d8a$exports, "precisionFixed", () => $75d060ea554f56fe$export$2e2bcd8739ae039);
$parcel$export($aa8b739c735e7d8a$exports, "precisionPrefix", () => $c2241512881c0f9b$export$2e2bcd8739ae039);
$parcel$export($aa8b739c735e7d8a$exports, "precisionRound", () => $326056e829ddcbb9$export$2e2bcd8739ae039);
function $71d3e206e38be17c$export$2e2bcd8739ae039(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function $71d3e206e38be17c$export$8f8e23dd27dc19f5(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}


function $3549c29bbb979bd6$export$2e2bcd8739ae039(x) {
    return x = (0, $71d3e206e38be17c$export$8f8e23dd27dc19f5)(Math.abs(x)), x ? x[1] : NaN;
}


function $15595778491b2c66$export$2e2bcd8739ae039(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}


function $159a648ba748ed7b$export$2e2bcd8739ae039(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
}


// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var $6c61b78b0e12530a$var$re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $6c61b78b0e12530a$export$2e2bcd8739ae039(specifier) {
    if (!(match = $6c61b78b0e12530a$var$re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new $6c61b78b0e12530a$export$963aac351db36ed4({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
$6c61b78b0e12530a$export$2e2bcd8739ae039.prototype = $6c61b78b0e12530a$export$963aac351db36ed4.prototype; // instanceof
function $6c61b78b0e12530a$export$963aac351db36ed4(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
$6c61b78b0e12530a$export$963aac351db36ed4.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};


// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function $175610b4804d1dc6$export$2e2bcd8739ae039(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}




var $e693075d65fe7764$export$6863724d9a42263;
function $e693075d65fe7764$export$2e2bcd8739ae039(x, p) {
    var d = (0, $71d3e206e38be17c$export$8f8e23dd27dc19f5)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - ($e693075d65fe7764$export$6863724d9a42263 = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, $71d3e206e38be17c$export$8f8e23dd27dc19f5)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}



function $b75e2c45d28a7bd1$export$2e2bcd8739ae039(x, p) {
    var d = (0, $71d3e206e38be17c$export$8f8e23dd27dc19f5)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}


var $796f73bd4d54868e$export$2e2bcd8739ae039 = {
    "%": (x, p)=>(x * 100).toFixed(p),
    "b": (x)=>Math.round(x).toString(2),
    "c": (x)=>x + "",
    "d": (0, $71d3e206e38be17c$export$2e2bcd8739ae039),
    "e": (x, p)=>x.toExponential(p),
    "f": (x, p)=>x.toFixed(p),
    "g": (x, p)=>x.toPrecision(p),
    "o": (x)=>Math.round(x).toString(8),
    "p": (x, p)=>(0, $b75e2c45d28a7bd1$export$2e2bcd8739ae039)(x * 100, p),
    "r": (0, $b75e2c45d28a7bd1$export$2e2bcd8739ae039),
    "s": (0, $e693075d65fe7764$export$2e2bcd8739ae039),
    "X": (x)=>Math.round(x).toString(16).toUpperCase(),
    "x": (x)=>Math.round(x).toString(16)
};



function $d5a03d7dd352ee71$export$2e2bcd8739ae039(x) {
    return x;
}


var $bc36040bd58f8f35$var$map = Array.prototype.map, $bc36040bd58f8f35$var$prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xb5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function $bc36040bd58f8f35$export$2e2bcd8739ae039(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? (0, $d5a03d7dd352ee71$export$2e2bcd8739ae039) : (0, $15595778491b2c66$export$2e2bcd8739ae039)($bc36040bd58f8f35$var$map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? (0, $d5a03d7dd352ee71$export$2e2bcd8739ae039) : (0, $159a648ba748ed7b$export$2e2bcd8739ae039)($bc36040bd58f8f35$var$map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "\u2212" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = (0, $6c61b78b0e12530a$export$2e2bcd8739ae039)(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!(0, $796f73bd4d54868e$export$2e2bcd8739ae039)[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = (0, $796f73bd4d54868e$export$2e2bcd8739ae039)[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = (0, $175610b4804d1dc6$export$2e2bcd8739ae039)(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? $bc36040bd58f8f35$var$prefixes[8 + (0, $e693075d65fe7764$export$6863724d9a42263) / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = (0, $6c61b78b0e12530a$export$2e2bcd8739ae039)(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, $3549c29bbb979bd6$export$2e2bcd8739ae039)(value) / 3))) * 3, k = Math.pow(10, -e), prefix = $bc36040bd58f8f35$var$prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}


var $ad0595948e0b2f09$var$locale;
var $ad0595948e0b2f09$export$d9468344d3651243;
var $ad0595948e0b2f09$export$8d85692a469dde6f;
$ad0595948e0b2f09$export$2e2bcd8739ae039({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function $ad0595948e0b2f09$export$2e2bcd8739ae039(definition) {
    $ad0595948e0b2f09$var$locale = (0, $bc36040bd58f8f35$export$2e2bcd8739ae039)(definition);
    $ad0595948e0b2f09$export$d9468344d3651243 = $ad0595948e0b2f09$var$locale.format;
    $ad0595948e0b2f09$export$8d85692a469dde6f = $ad0595948e0b2f09$var$locale.formatPrefix;
    return $ad0595948e0b2f09$var$locale;
}





function $75d060ea554f56fe$export$2e2bcd8739ae039(step) {
    return Math.max(0, -(0, $3549c29bbb979bd6$export$2e2bcd8739ae039)(Math.abs(step)));
}



function $c2241512881c0f9b$export$2e2bcd8739ae039(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, $3549c29bbb979bd6$export$2e2bcd8739ae039)(value) / 3))) * 3 - (0, $3549c29bbb979bd6$export$2e2bcd8739ae039)(Math.abs(step)));
}



function $326056e829ddcbb9$export$2e2bcd8739ae039(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, (0, $3549c29bbb979bd6$export$2e2bcd8739ae039)(max) - (0, $3549c29bbb979bd6$export$2e2bcd8739ae039)(step)) + 1;
}




var $7cebe8349b10a21c$exports = {};

$parcel$export($7cebe8349b10a21c$exports, "geoArea", () => $83af2e6def4c813b$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoBounds", () => $6d0031639b8f3d01$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoCentroid", () => $b1372c7b43fd8e24$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoCircle", () => $645e00104e33ab92$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoClipAntimeridian", () => $08876774f8010588$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoClipCircle", () => $2e2a8e97e3b7f602$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoClipExtent", () => $eadd3d21bbfdbefb$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoClipRectangle", () => $079ab3b5422c118d$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoContains", () => $4ae7d6f455934371$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoDistance", () => $948ab2f6c3c881e5$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoGraticule", () => $f41cd2934f9ed70e$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoGraticule10", () => $f41cd2934f9ed70e$export$b8db4e9403a5b6f1);
$parcel$export($7cebe8349b10a21c$exports, "geoInterpolate", () => $174a7fa81f46ec68$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoLength", () => $b2b33f014ebad653$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoPath", () => $1def6ef096f3a138$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoAlbers", () => $ad66be5f13c2274e$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoAlbersUsa", () => $b56415f1b8940fb1$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoAzimuthalEqualArea", () => $26b5b46263fee06c$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoAzimuthalEqualAreaRaw", () => $26b5b46263fee06c$export$5e11f94fc4a8d2c6);
$parcel$export($7cebe8349b10a21c$exports, "geoAzimuthalEquidistant", () => $3dda52ae786f503c$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoAzimuthalEquidistantRaw", () => $3dda52ae786f503c$export$b94a4d6aa3dd25c);
$parcel$export($7cebe8349b10a21c$exports, "geoConicConformal", () => $cb27732f4b386578$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoConicConformalRaw", () => $cb27732f4b386578$export$2b1bc913962ed170);
$parcel$export($7cebe8349b10a21c$exports, "geoConicEqualArea", () => $247d5672d419dc3a$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoConicEqualAreaRaw", () => $247d5672d419dc3a$export$75409dad1c406288);
$parcel$export($7cebe8349b10a21c$exports, "geoConicEquidistant", () => $c3c46b079ebb4bf6$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoConicEquidistantRaw", () => $c3c46b079ebb4bf6$export$24f604fe80e5f192);
$parcel$export($7cebe8349b10a21c$exports, "geoEqualEarth", () => $907387d92a4d10f5$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoEqualEarthRaw", () => $907387d92a4d10f5$export$a320734067e7a731);
$parcel$export($7cebe8349b10a21c$exports, "geoEquirectangular", () => $8f7d76a29f1a304d$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoEquirectangularRaw", () => $8f7d76a29f1a304d$export$f5fee52180f2f058);
$parcel$export($7cebe8349b10a21c$exports, "geoGnomonic", () => $9b81cb29fe536616$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoGnomonicRaw", () => $9b81cb29fe536616$export$dc8c6ddfc8b22c85);
$parcel$export($7cebe8349b10a21c$exports, "geoIdentity", () => $2a16c4d7e0e09e03$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoProjection", () => $7939cc7fef81cdd2$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoProjectionMutator", () => $7939cc7fef81cdd2$export$155d5a6fa6fddeba);
$parcel$export($7cebe8349b10a21c$exports, "geoMercator", () => $17661af7bd1d47ea$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoMercatorRaw", () => $17661af7bd1d47ea$export$94ff8a57e9b91cc3);
$parcel$export($7cebe8349b10a21c$exports, "geoNaturalEarth1", () => $9d5b9cc247724181$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoNaturalEarth1Raw", () => $9d5b9cc247724181$export$acb6def22fe878e6);
$parcel$export($7cebe8349b10a21c$exports, "geoOrthographic", () => $2e148fe3775c2a13$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoOrthographicRaw", () => $2e148fe3775c2a13$export$1cd9c2eb846182a);
$parcel$export($7cebe8349b10a21c$exports, "geoStereographic", () => $75116b47e18447d3$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoStereographicRaw", () => $75116b47e18447d3$export$f9ccbb0dcb3dcd2b);
$parcel$export($7cebe8349b10a21c$exports, "geoTransverseMercator", () => $77eca3c85abad8c7$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoTransverseMercatorRaw", () => $77eca3c85abad8c7$export$e84942adec6de533);
$parcel$export($7cebe8349b10a21c$exports, "geoRotation", () => $18c45c29f98b48c9$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoStream", () => $86c40d7621813f22$export$2e2bcd8739ae039);
$parcel$export($7cebe8349b10a21c$exports, "geoTransform", () => $2b15a5909b055d80$export$2e2bcd8739ae039);

var $5dea8ae1ded860af$export$6c421550c66a327d = 1e-6;
var $5dea8ae1ded860af$export$92c06fba281fe81b = 1e-12;
var $5dea8ae1ded860af$export$18c7bea995a110f = Math.PI;
var $5dea8ae1ded860af$export$e51408a300e8929a = $5dea8ae1ded860af$export$18c7bea995a110f / 2;
var $5dea8ae1ded860af$export$c39a5cba78ea0fc2 = $5dea8ae1ded860af$export$18c7bea995a110f / 4;
var $5dea8ae1ded860af$export$a4b4b4d4d776fe92 = $5dea8ae1ded860af$export$18c7bea995a110f * 2;
var $5dea8ae1ded860af$export$41fc368e1a942b97 = 180 / $5dea8ae1ded860af$export$18c7bea995a110f;
var $5dea8ae1ded860af$export$8449e153fbd325fc = $5dea8ae1ded860af$export$18c7bea995a110f / 180;
var $5dea8ae1ded860af$export$2335f513bbd82c6d = Math.abs;
var $5dea8ae1ded860af$export$628dc4eed22b0fbd = Math.atan;
var $5dea8ae1ded860af$export$b8b770ee6a0d9760 = Math.atan2;
var $5dea8ae1ded860af$export$50d414a77b60d802 = Math.cos;
var $5dea8ae1ded860af$export$803ce6b71a0a94b2 = Math.ceil;
var $5dea8ae1ded860af$export$b310ec824aaee37f = Math.exp;
var $5dea8ae1ded860af$export$a3fe094919f356fd = Math.floor;
var $5dea8ae1ded860af$export$f95c7888b62f8e9a = Math.hypot;
var $5dea8ae1ded860af$export$bef1f36f5486a6a3 = Math.log;
var $5dea8ae1ded860af$export$9c297f60e22e3389 = Math.pow;
var $5dea8ae1ded860af$export$5de3937cb4b592ed = Math.sin;
var $5dea8ae1ded860af$export$c5552dfdbc7cec71 = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var $5dea8ae1ded860af$export$eba8049fb5020b81 = Math.sqrt;
var $5dea8ae1ded860af$export$fcdd3b0b3246a325 = Math.tan;
function $5dea8ae1ded860af$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $5dea8ae1ded860af$export$18c7bea995a110f : Math.acos(x);
}
function $5dea8ae1ded860af$export$41726bdb1fc63f(x) {
    return x > 1 ? $5dea8ae1ded860af$export$e51408a300e8929a : x < -1 ? -$5dea8ae1ded860af$export$e51408a300e8929a : Math.asin(x);
}
function $5dea8ae1ded860af$export$e808712c2966e662(x) {
    return (x = $5dea8ae1ded860af$export$5de3937cb4b592ed(x / 2)) * x;
}


function $ec35045b1d8c5a34$export$2e2bcd8739ae039() {}


function $86c40d7621813f22$var$streamGeometry(geometry, stream) {
    if (geometry && $86c40d7621813f22$var$streamGeometryType.hasOwnProperty(geometry.type)) $86c40d7621813f22$var$streamGeometryType[geometry.type](geometry, stream);
}
var $86c40d7621813f22$var$streamObjectType = {
    Feature: function(object, stream) {
        $86c40d7621813f22$var$streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)$86c40d7621813f22$var$streamGeometry(features[i].geometry, stream);
    }
};
var $86c40d7621813f22$var$streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        $86c40d7621813f22$var$streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)$86c40d7621813f22$var$streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        $86c40d7621813f22$var$streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)$86c40d7621813f22$var$streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)$86c40d7621813f22$var$streamGeometry(geometries[i], stream);
    }
};
function $86c40d7621813f22$var$streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function $86c40d7621813f22$var$streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)$86c40d7621813f22$var$streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}
function $86c40d7621813f22$export$2e2bcd8739ae039(object, stream) {
    if (object && $86c40d7621813f22$var$streamObjectType.hasOwnProperty(object.type)) $86c40d7621813f22$var$streamObjectType[object.type](object, stream);
    else $86c40d7621813f22$var$streamGeometry(object, stream);
}


var $83af2e6def4c813b$export$bf8f994332070c7f = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
// hello?
var $83af2e6def4c813b$var$areaSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)(), $83af2e6def4c813b$var$lambda00, $83af2e6def4c813b$var$phi00, $83af2e6def4c813b$var$lambda0, $83af2e6def4c813b$var$cosPhi0, $83af2e6def4c813b$var$sinPhi0;
var $83af2e6def4c813b$export$cb67cfa750ae69dc = {
    point: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineStart: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    polygonStart: function() {
        $83af2e6def4c813b$export$bf8f994332070c7f = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
        $83af2e6def4c813b$export$cb67cfa750ae69dc.lineStart = $83af2e6def4c813b$var$areaRingStart;
        $83af2e6def4c813b$export$cb67cfa750ae69dc.lineEnd = $83af2e6def4c813b$var$areaRingEnd;
    },
    polygonEnd: function() {
        var areaRing = +$83af2e6def4c813b$export$bf8f994332070c7f;
        $83af2e6def4c813b$var$areaSum.add(areaRing < 0 ? (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92) + areaRing : areaRing);
        this.lineStart = this.lineEnd = this.point = (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039);
    },
    sphere: function() {
        $83af2e6def4c813b$var$areaSum.add((0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92));
    }
};
function $83af2e6def4c813b$var$areaRingStart() {
    $83af2e6def4c813b$export$cb67cfa750ae69dc.point = $83af2e6def4c813b$var$areaPointFirst;
}
function $83af2e6def4c813b$var$areaRingEnd() {
    $83af2e6def4c813b$var$areaPoint($83af2e6def4c813b$var$lambda00, $83af2e6def4c813b$var$phi00);
}
function $83af2e6def4c813b$var$areaPointFirst(lambda, phi) {
    $83af2e6def4c813b$export$cb67cfa750ae69dc.point = $83af2e6def4c813b$var$areaPoint;
    $83af2e6def4c813b$var$lambda00 = lambda, $83af2e6def4c813b$var$phi00 = phi;
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    $83af2e6def4c813b$var$lambda0 = lambda, $83af2e6def4c813b$var$cosPhi0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi = phi / 2 + (0, $5dea8ae1ded860af$export$c39a5cba78ea0fc2)), $83af2e6def4c813b$var$sinPhi0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi);
}
function $83af2e6def4c813b$var$areaPoint(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    phi = phi / 2 + (0, $5dea8ae1ded860af$export$c39a5cba78ea0fc2); // half the angular distance from south pole
    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - $83af2e6def4c813b$var$lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi), sinPhi = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), k = $83af2e6def4c813b$var$sinPhi0 * sinPhi, u = $83af2e6def4c813b$var$cosPhi0 * cosPhi + k * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(adLambda), v = k * sdLambda * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(adLambda);
    $83af2e6def4c813b$export$bf8f994332070c7f.add((0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(v, u));
    // Advance the previous points.
    $83af2e6def4c813b$var$lambda0 = lambda, $83af2e6def4c813b$var$cosPhi0 = cosPhi, $83af2e6def4c813b$var$sinPhi0 = sinPhi;
}
function $83af2e6def4c813b$export$2e2bcd8739ae039(object) {
    $83af2e6def4c813b$var$areaSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, $83af2e6def4c813b$export$cb67cfa750ae69dc);
    return $83af2e6def4c813b$var$areaSum * 2;
}





function $98abb30d5a123775$export$12f9ad44fe773943(cartesian) {
    return [
        (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(cartesian[1], cartesian[0]),
        (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(cartesian[2])
    ];
}
function $98abb30d5a123775$export$6e6697ef026a96(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi);
    return [
        cosPhi * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda),
        cosPhi * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda),
        (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi)
    ];
}
function $98abb30d5a123775$export$2ef80f51436a9de9(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function $98abb30d5a123775$export$4763f5351b14293f(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function $98abb30d5a123775$export$e62eba72fc898eae(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function $98abb30d5a123775$export$52d0ee3fc868d452(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function $98abb30d5a123775$export$6789498aec2cb34b(d) {
    var l = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}




var $6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$phi0, $6d0031639b8f3d01$var$lambda1, $6d0031639b8f3d01$var$phi1, $6d0031639b8f3d01$var$lambda2, $6d0031639b8f3d01$var$lambda00, $6d0031639b8f3d01$var$phi00, $6d0031639b8f3d01$var$p0, $6d0031639b8f3d01$var$deltaSum, $6d0031639b8f3d01$var$ranges, $6d0031639b8f3d01$var$range;
var $6d0031639b8f3d01$var$boundsStream = {
    point: $6d0031639b8f3d01$var$boundsPoint,
    lineStart: $6d0031639b8f3d01$var$boundsLineStart,
    lineEnd: $6d0031639b8f3d01$var$boundsLineEnd,
    polygonStart: function() {
        $6d0031639b8f3d01$var$boundsStream.point = $6d0031639b8f3d01$var$boundsRingPoint;
        $6d0031639b8f3d01$var$boundsStream.lineStart = $6d0031639b8f3d01$var$boundsRingStart;
        $6d0031639b8f3d01$var$boundsStream.lineEnd = $6d0031639b8f3d01$var$boundsRingEnd;
        $6d0031639b8f3d01$var$deltaSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
        (0, $83af2e6def4c813b$export$cb67cfa750ae69dc).polygonStart();
    },
    polygonEnd: function() {
        (0, $83af2e6def4c813b$export$cb67cfa750ae69dc).polygonEnd();
        $6d0031639b8f3d01$var$boundsStream.point = $6d0031639b8f3d01$var$boundsPoint;
        $6d0031639b8f3d01$var$boundsStream.lineStart = $6d0031639b8f3d01$var$boundsLineStart;
        $6d0031639b8f3d01$var$boundsStream.lineEnd = $6d0031639b8f3d01$var$boundsLineEnd;
        if ((0, $83af2e6def4c813b$export$bf8f994332070c7f) < 0) $6d0031639b8f3d01$var$lambda0 = -($6d0031639b8f3d01$var$lambda1 = 180), $6d0031639b8f3d01$var$phi0 = -($6d0031639b8f3d01$var$phi1 = 90);
        else if ($6d0031639b8f3d01$var$deltaSum > (0, $5dea8ae1ded860af$export$6c421550c66a327d)) $6d0031639b8f3d01$var$phi1 = 90;
        else if ($6d0031639b8f3d01$var$deltaSum < -(0, $5dea8ae1ded860af$export$6c421550c66a327d)) $6d0031639b8f3d01$var$phi0 = -90;
        $6d0031639b8f3d01$var$range[0] = $6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$range[1] = $6d0031639b8f3d01$var$lambda1;
    },
    sphere: function() {
        $6d0031639b8f3d01$var$lambda0 = -($6d0031639b8f3d01$var$lambda1 = 180), $6d0031639b8f3d01$var$phi0 = -($6d0031639b8f3d01$var$phi1 = 90);
    }
};
function $6d0031639b8f3d01$var$boundsPoint(lambda, phi) {
    $6d0031639b8f3d01$var$ranges.push($6d0031639b8f3d01$var$range = [
        $6d0031639b8f3d01$var$lambda0 = lambda,
        $6d0031639b8f3d01$var$lambda1 = lambda
    ]);
    if (phi < $6d0031639b8f3d01$var$phi0) $6d0031639b8f3d01$var$phi0 = phi;
    if (phi > $6d0031639b8f3d01$var$phi1) $6d0031639b8f3d01$var$phi1 = phi;
}
function $6d0031639b8f3d01$var$linePoint(lambda, phi) {
    var p = (0, $98abb30d5a123775$export$6e6697ef026a96)([
        lambda * (0, $5dea8ae1ded860af$export$8449e153fbd325fc),
        phi * (0, $5dea8ae1ded860af$export$8449e153fbd325fc)
    ]);
    if ($6d0031639b8f3d01$var$p0) {
        var normal = (0, $98abb30d5a123775$export$4763f5351b14293f)($6d0031639b8f3d01$var$p0, p), equatorial = [
            normal[1],
            -normal[0],
            0
        ], inflection = (0, $98abb30d5a123775$export$4763f5351b14293f)(equatorial, normal);
        (0, $98abb30d5a123775$export$6789498aec2cb34b)(inflection);
        inflection = (0, $98abb30d5a123775$export$12f9ad44fe773943)(inflection);
        var delta = lambda - $6d0031639b8f3d01$var$lambda2, sign = delta > 0 ? 1 : -1, lambdai = inflection[0] * (0, $5dea8ae1ded860af$export$41fc368e1a942b97) * sign, phii, antimeridian = (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(delta) > 180;
        if (antimeridian ^ (sign * $6d0031639b8f3d01$var$lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = inflection[1] * (0, $5dea8ae1ded860af$export$41fc368e1a942b97);
            if (phii > $6d0031639b8f3d01$var$phi1) $6d0031639b8f3d01$var$phi1 = phii;
        } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * $6d0031639b8f3d01$var$lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = -inflection[1] * (0, $5dea8ae1ded860af$export$41fc368e1a942b97);
            if (phii < $6d0031639b8f3d01$var$phi0) $6d0031639b8f3d01$var$phi0 = phii;
        } else {
            if (phi < $6d0031639b8f3d01$var$phi0) $6d0031639b8f3d01$var$phi0 = phi;
            if (phi > $6d0031639b8f3d01$var$phi1) $6d0031639b8f3d01$var$phi1 = phi;
        }
        if (antimeridian) {
            if (lambda < $6d0031639b8f3d01$var$lambda2) {
                if ($6d0031639b8f3d01$var$angle($6d0031639b8f3d01$var$lambda0, lambda) > $6d0031639b8f3d01$var$angle($6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$lambda1)) $6d0031639b8f3d01$var$lambda1 = lambda;
            } else if ($6d0031639b8f3d01$var$angle(lambda, $6d0031639b8f3d01$var$lambda1) > $6d0031639b8f3d01$var$angle($6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$lambda1)) $6d0031639b8f3d01$var$lambda0 = lambda;
        } else if ($6d0031639b8f3d01$var$lambda1 >= $6d0031639b8f3d01$var$lambda0) {
            if (lambda < $6d0031639b8f3d01$var$lambda0) $6d0031639b8f3d01$var$lambda0 = lambda;
            if (lambda > $6d0031639b8f3d01$var$lambda1) $6d0031639b8f3d01$var$lambda1 = lambda;
        } else {
            if (lambda > $6d0031639b8f3d01$var$lambda2) {
                if ($6d0031639b8f3d01$var$angle($6d0031639b8f3d01$var$lambda0, lambda) > $6d0031639b8f3d01$var$angle($6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$lambda1)) $6d0031639b8f3d01$var$lambda1 = lambda;
            } else if ($6d0031639b8f3d01$var$angle(lambda, $6d0031639b8f3d01$var$lambda1) > $6d0031639b8f3d01$var$angle($6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$lambda1)) $6d0031639b8f3d01$var$lambda0 = lambda;
        }
    } else $6d0031639b8f3d01$var$ranges.push($6d0031639b8f3d01$var$range = [
        $6d0031639b8f3d01$var$lambda0 = lambda,
        $6d0031639b8f3d01$var$lambda1 = lambda
    ]);
    if (phi < $6d0031639b8f3d01$var$phi0) $6d0031639b8f3d01$var$phi0 = phi;
    if (phi > $6d0031639b8f3d01$var$phi1) $6d0031639b8f3d01$var$phi1 = phi;
    $6d0031639b8f3d01$var$p0 = p, $6d0031639b8f3d01$var$lambda2 = lambda;
}
function $6d0031639b8f3d01$var$boundsLineStart() {
    $6d0031639b8f3d01$var$boundsStream.point = $6d0031639b8f3d01$var$linePoint;
}
function $6d0031639b8f3d01$var$boundsLineEnd() {
    $6d0031639b8f3d01$var$range[0] = $6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$range[1] = $6d0031639b8f3d01$var$lambda1;
    $6d0031639b8f3d01$var$boundsStream.point = $6d0031639b8f3d01$var$boundsPoint;
    $6d0031639b8f3d01$var$p0 = null;
}
function $6d0031639b8f3d01$var$boundsRingPoint(lambda, phi) {
    if ($6d0031639b8f3d01$var$p0) {
        var delta = lambda - $6d0031639b8f3d01$var$lambda2;
        $6d0031639b8f3d01$var$deltaSum.add((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else $6d0031639b8f3d01$var$lambda00 = lambda, $6d0031639b8f3d01$var$phi00 = phi;
    (0, $83af2e6def4c813b$export$cb67cfa750ae69dc).point(lambda, phi);
    $6d0031639b8f3d01$var$linePoint(lambda, phi);
}
function $6d0031639b8f3d01$var$boundsRingStart() {
    (0, $83af2e6def4c813b$export$cb67cfa750ae69dc).lineStart();
}
function $6d0031639b8f3d01$var$boundsRingEnd() {
    $6d0031639b8f3d01$var$boundsRingPoint($6d0031639b8f3d01$var$lambda00, $6d0031639b8f3d01$var$phi00);
    (0, $83af2e6def4c813b$export$cb67cfa750ae69dc).lineEnd();
    if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)($6d0031639b8f3d01$var$deltaSum) > (0, $5dea8ae1ded860af$export$6c421550c66a327d)) $6d0031639b8f3d01$var$lambda0 = -($6d0031639b8f3d01$var$lambda1 = 180);
    $6d0031639b8f3d01$var$range[0] = $6d0031639b8f3d01$var$lambda0, $6d0031639b8f3d01$var$range[1] = $6d0031639b8f3d01$var$lambda1;
    $6d0031639b8f3d01$var$p0 = null;
}
// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function $6d0031639b8f3d01$var$angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}
function $6d0031639b8f3d01$var$rangeCompare(a, b) {
    return a[0] - b[0];
}
function $6d0031639b8f3d01$var$rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}
function $6d0031639b8f3d01$export$2e2bcd8739ae039(feature) {
    var i, n, a, b, merged, deltaMax, delta;
    $6d0031639b8f3d01$var$phi1 = $6d0031639b8f3d01$var$lambda1 = -($6d0031639b8f3d01$var$lambda0 = $6d0031639b8f3d01$var$phi0 = Infinity);
    $6d0031639b8f3d01$var$ranges = [];
    (0, $86c40d7621813f22$export$2e2bcd8739ae039)(feature, $6d0031639b8f3d01$var$boundsStream);
    // First, sort ranges by their minimum longitudes.
    if (n = $6d0031639b8f3d01$var$ranges.length) {
        $6d0031639b8f3d01$var$ranges.sort($6d0031639b8f3d01$var$rangeCompare);
        // Then, merge any ranges that overlap.
        for(i = 1, a = $6d0031639b8f3d01$var$ranges[0], merged = [
            a
        ]; i < n; ++i){
            b = $6d0031639b8f3d01$var$ranges[i];
            if ($6d0031639b8f3d01$var$rangeContains(a, b[0]) || $6d0031639b8f3d01$var$rangeContains(a, b[1])) {
                if ($6d0031639b8f3d01$var$angle(a[0], b[1]) > $6d0031639b8f3d01$var$angle(a[0], a[1])) a[1] = b[1];
                if ($6d0031639b8f3d01$var$angle(b[0], a[1]) > $6d0031639b8f3d01$var$angle(a[0], a[1])) a[0] = b[0];
            } else merged.push(a = b);
        }
        // Finally, find the largest gap between the merged ranges.
        // The final bounding box will be the inverse of this gap.
        for(deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i){
            b = merged[i];
            if ((delta = $6d0031639b8f3d01$var$angle(a[1], b[0])) > deltaMax) deltaMax = delta, $6d0031639b8f3d01$var$lambda0 = b[0], $6d0031639b8f3d01$var$lambda1 = a[1];
        }
    }
    $6d0031639b8f3d01$var$ranges = $6d0031639b8f3d01$var$range = null;
    return $6d0031639b8f3d01$var$lambda0 === Infinity || $6d0031639b8f3d01$var$phi0 === Infinity ? [
        [
            NaN,
            NaN
        ],
        [
            NaN,
            NaN
        ]
    ] : [
        [
            $6d0031639b8f3d01$var$lambda0,
            $6d0031639b8f3d01$var$phi0
        ],
        [
            $6d0031639b8f3d01$var$lambda1,
            $6d0031639b8f3d01$var$phi1
        ]
    ];
}






var $b1372c7b43fd8e24$var$W0, $b1372c7b43fd8e24$var$W1, $b1372c7b43fd8e24$var$X0, $b1372c7b43fd8e24$var$Y0, $b1372c7b43fd8e24$var$Z0, $b1372c7b43fd8e24$var$X1, $b1372c7b43fd8e24$var$Y1, $b1372c7b43fd8e24$var$Z1, $b1372c7b43fd8e24$var$X2, $b1372c7b43fd8e24$var$Y2, $b1372c7b43fd8e24$var$Z2, $b1372c7b43fd8e24$var$lambda00, $b1372c7b43fd8e24$var$phi00, $b1372c7b43fd8e24$var$x0, $b1372c7b43fd8e24$var$y0, $b1372c7b43fd8e24$var$z0; // previous point
var $b1372c7b43fd8e24$var$centroidStream = {
    sphere: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    point: $b1372c7b43fd8e24$var$centroidPoint,
    lineStart: $b1372c7b43fd8e24$var$centroidLineStart,
    lineEnd: $b1372c7b43fd8e24$var$centroidLineEnd,
    polygonStart: function() {
        $b1372c7b43fd8e24$var$centroidStream.lineStart = $b1372c7b43fd8e24$var$centroidRingStart;
        $b1372c7b43fd8e24$var$centroidStream.lineEnd = $b1372c7b43fd8e24$var$centroidRingEnd;
    },
    polygonEnd: function() {
        $b1372c7b43fd8e24$var$centroidStream.lineStart = $b1372c7b43fd8e24$var$centroidLineStart;
        $b1372c7b43fd8e24$var$centroidStream.lineEnd = $b1372c7b43fd8e24$var$centroidLineEnd;
    }
};
// Arithmetic mean of Cartesian vectors.
function $b1372c7b43fd8e24$var$centroidPoint(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi);
    $b1372c7b43fd8e24$var$centroidPointCartesian(cosPhi * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda), cosPhi * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda), (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi));
}
function $b1372c7b43fd8e24$var$centroidPointCartesian(x, y, z) {
    ++$b1372c7b43fd8e24$var$W0;
    $b1372c7b43fd8e24$var$X0 += (x - $b1372c7b43fd8e24$var$X0) / $b1372c7b43fd8e24$var$W0;
    $b1372c7b43fd8e24$var$Y0 += (y - $b1372c7b43fd8e24$var$Y0) / $b1372c7b43fd8e24$var$W0;
    $b1372c7b43fd8e24$var$Z0 += (z - $b1372c7b43fd8e24$var$Z0) / $b1372c7b43fd8e24$var$W0;
}
function $b1372c7b43fd8e24$var$centroidLineStart() {
    $b1372c7b43fd8e24$var$centroidStream.point = $b1372c7b43fd8e24$var$centroidLinePointFirst;
}
function $b1372c7b43fd8e24$var$centroidLinePointFirst(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi);
    $b1372c7b43fd8e24$var$x0 = cosPhi * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda);
    $b1372c7b43fd8e24$var$y0 = cosPhi * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda);
    $b1372c7b43fd8e24$var$z0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi);
    $b1372c7b43fd8e24$var$centroidStream.point = $b1372c7b43fd8e24$var$centroidLinePoint;
    $b1372c7b43fd8e24$var$centroidPointCartesian($b1372c7b43fd8e24$var$x0, $b1372c7b43fd8e24$var$y0, $b1372c7b43fd8e24$var$z0);
}
function $b1372c7b43fd8e24$var$centroidLinePoint(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi), x = cosPhi * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda), y = cosPhi * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda), z = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), w = (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)((0, $5dea8ae1ded860af$export$eba8049fb5020b81)((w = $b1372c7b43fd8e24$var$y0 * z - $b1372c7b43fd8e24$var$z0 * y) * w + (w = $b1372c7b43fd8e24$var$z0 * x - $b1372c7b43fd8e24$var$x0 * z) * w + (w = $b1372c7b43fd8e24$var$x0 * y - $b1372c7b43fd8e24$var$y0 * x) * w), $b1372c7b43fd8e24$var$x0 * x + $b1372c7b43fd8e24$var$y0 * y + $b1372c7b43fd8e24$var$z0 * z);
    $b1372c7b43fd8e24$var$W1 += w;
    $b1372c7b43fd8e24$var$X1 += w * ($b1372c7b43fd8e24$var$x0 + ($b1372c7b43fd8e24$var$x0 = x));
    $b1372c7b43fd8e24$var$Y1 += w * ($b1372c7b43fd8e24$var$y0 + ($b1372c7b43fd8e24$var$y0 = y));
    $b1372c7b43fd8e24$var$Z1 += w * ($b1372c7b43fd8e24$var$z0 + ($b1372c7b43fd8e24$var$z0 = z));
    $b1372c7b43fd8e24$var$centroidPointCartesian($b1372c7b43fd8e24$var$x0, $b1372c7b43fd8e24$var$y0, $b1372c7b43fd8e24$var$z0);
}
function $b1372c7b43fd8e24$var$centroidLineEnd() {
    $b1372c7b43fd8e24$var$centroidStream.point = $b1372c7b43fd8e24$var$centroidPoint;
}
// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function $b1372c7b43fd8e24$var$centroidRingStart() {
    $b1372c7b43fd8e24$var$centroidStream.point = $b1372c7b43fd8e24$var$centroidRingPointFirst;
}
function $b1372c7b43fd8e24$var$centroidRingEnd() {
    $b1372c7b43fd8e24$var$centroidRingPoint($b1372c7b43fd8e24$var$lambda00, $b1372c7b43fd8e24$var$phi00);
    $b1372c7b43fd8e24$var$centroidStream.point = $b1372c7b43fd8e24$var$centroidPoint;
}
function $b1372c7b43fd8e24$var$centroidRingPointFirst(lambda, phi) {
    $b1372c7b43fd8e24$var$lambda00 = lambda, $b1372c7b43fd8e24$var$phi00 = phi;
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    $b1372c7b43fd8e24$var$centroidStream.point = $b1372c7b43fd8e24$var$centroidRingPoint;
    var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi);
    $b1372c7b43fd8e24$var$x0 = cosPhi * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda);
    $b1372c7b43fd8e24$var$y0 = cosPhi * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda);
    $b1372c7b43fd8e24$var$z0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi);
    $b1372c7b43fd8e24$var$centroidPointCartesian($b1372c7b43fd8e24$var$x0, $b1372c7b43fd8e24$var$y0, $b1372c7b43fd8e24$var$z0);
}
function $b1372c7b43fd8e24$var$centroidRingPoint(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi), x = cosPhi * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda), y = cosPhi * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda), z = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), cx = $b1372c7b43fd8e24$var$y0 * z - $b1372c7b43fd8e24$var$z0 * y, cy = $b1372c7b43fd8e24$var$z0 * x - $b1372c7b43fd8e24$var$x0 * z, cz = $b1372c7b43fd8e24$var$x0 * y - $b1372c7b43fd8e24$var$y0 * x, m = (0, $5dea8ae1ded860af$export$f95c7888b62f8e9a)(cx, cy, cz), w = (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(m), v = m && -w / m; // area weight multiplier
    $b1372c7b43fd8e24$var$X2.add(v * cx);
    $b1372c7b43fd8e24$var$Y2.add(v * cy);
    $b1372c7b43fd8e24$var$Z2.add(v * cz);
    $b1372c7b43fd8e24$var$W1 += w;
    $b1372c7b43fd8e24$var$X1 += w * ($b1372c7b43fd8e24$var$x0 + ($b1372c7b43fd8e24$var$x0 = x));
    $b1372c7b43fd8e24$var$Y1 += w * ($b1372c7b43fd8e24$var$y0 + ($b1372c7b43fd8e24$var$y0 = y));
    $b1372c7b43fd8e24$var$Z1 += w * ($b1372c7b43fd8e24$var$z0 + ($b1372c7b43fd8e24$var$z0 = z));
    $b1372c7b43fd8e24$var$centroidPointCartesian($b1372c7b43fd8e24$var$x0, $b1372c7b43fd8e24$var$y0, $b1372c7b43fd8e24$var$z0);
}
function $b1372c7b43fd8e24$export$2e2bcd8739ae039(object) {
    $b1372c7b43fd8e24$var$W0 = $b1372c7b43fd8e24$var$W1 = $b1372c7b43fd8e24$var$X0 = $b1372c7b43fd8e24$var$Y0 = $b1372c7b43fd8e24$var$Z0 = $b1372c7b43fd8e24$var$X1 = $b1372c7b43fd8e24$var$Y1 = $b1372c7b43fd8e24$var$Z1 = 0;
    $b1372c7b43fd8e24$var$X2 = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    $b1372c7b43fd8e24$var$Y2 = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    $b1372c7b43fd8e24$var$Z2 = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, $b1372c7b43fd8e24$var$centroidStream);
    var x = +$b1372c7b43fd8e24$var$X2, y = +$b1372c7b43fd8e24$var$Y2, z = +$b1372c7b43fd8e24$var$Z2, m = (0, $5dea8ae1ded860af$export$f95c7888b62f8e9a)(x, y, z);
    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < (0, $5dea8ae1ded860af$export$92c06fba281fe81b)) {
        x = $b1372c7b43fd8e24$var$X1, y = $b1372c7b43fd8e24$var$Y1, z = $b1372c7b43fd8e24$var$Z1;
        // If the feature has zero length, fall back to arithmetic mean of point vectors.
        if ($b1372c7b43fd8e24$var$W1 < (0, $5dea8ae1ded860af$export$6c421550c66a327d)) x = $b1372c7b43fd8e24$var$X0, y = $b1372c7b43fd8e24$var$Y0, z = $b1372c7b43fd8e24$var$Z0;
        m = (0, $5dea8ae1ded860af$export$f95c7888b62f8e9a)(x, y, z);
        // If the feature still has an undefined ccentroid, then return.
        if (m < (0, $5dea8ae1ded860af$export$92c06fba281fe81b)) return [
            NaN,
            NaN
        ];
    }
    return [
        (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(y, x) * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
        (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(z / m) * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
    ];
}



function $70b543bbaf997a46$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}



function $4e8285a3097e4648$export$2e2bcd8739ae039(a, b) {
    function compose(x, y) {
        return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
        return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
}



function $18c45c29f98b48c9$var$rotationIdentity(lambda, phi) {
    if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda) > (0, $5dea8ae1ded860af$export$18c7bea995a110f)) lambda -= Math.round(lambda / (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92)) * (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92);
    return [
        lambda,
        phi
    ];
}
$18c45c29f98b48c9$var$rotationIdentity.invert = $18c45c29f98b48c9$var$rotationIdentity;
function $18c45c29f98b48c9$export$a2ba89726971a90f(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92)) ? deltaPhi || deltaGamma ? (0, $4e8285a3097e4648$export$2e2bcd8739ae039)($18c45c29f98b48c9$var$rotationLambda(deltaLambda), $18c45c29f98b48c9$var$rotationPhiGamma(deltaPhi, deltaGamma)) : $18c45c29f98b48c9$var$rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? $18c45c29f98b48c9$var$rotationPhiGamma(deltaPhi, deltaGamma) : $18c45c29f98b48c9$var$rotationIdentity;
}
function $18c45c29f98b48c9$var$forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        lambda += deltaLambda;
        if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda) > (0, $5dea8ae1ded860af$export$18c7bea995a110f)) lambda -= Math.round(lambda / (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92)) * (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92);
        return [
            lambda,
            phi
        ];
    };
}
function $18c45c29f98b48c9$var$rotationLambda(deltaLambda) {
    var rotation = $18c45c29f98b48c9$var$forwardRotationLambda(deltaLambda);
    rotation.invert = $18c45c29f98b48c9$var$forwardRotationLambda(-deltaLambda);
    return rotation;
}
function $18c45c29f98b48c9$var$rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(deltaPhi), sinDeltaPhi = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(deltaPhi), cosDeltaGamma = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(deltaGamma), sinDeltaGamma = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi), x = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda) * cosPhi, y = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda) * cosPhi, z = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi), x = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda) * cosPhi, y = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda) * cosPhi, z = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}
function $18c45c29f98b48c9$export$2e2bcd8739ae039(rotate) {
    rotate = $18c45c29f98b48c9$export$a2ba89726971a90f(rotate[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), rotate[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), rotate.length > 2 ? rotate[2] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc) : 0);
    function forward(coordinates) {
        coordinates = rotate(coordinates[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), coordinates[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc));
        return coordinates[0] *= (0, $5dea8ae1ded860af$export$41fc368e1a942b97), coordinates[1] *= (0, $5dea8ae1ded860af$export$41fc368e1a942b97), coordinates;
    }
    forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), coordinates[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc));
        return coordinates[0] *= (0, $5dea8ae1ded860af$export$41fc368e1a942b97), coordinates[1] *= (0, $5dea8ae1ded860af$export$41fc368e1a942b97), coordinates;
    };
    return forward;
}


function $645e00104e33ab92$export$b5441eb324cd8d4e(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(radius), sinRadius = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92);
        t1 = radius - step / 2;
    } else {
        t0 = $645e00104e33ab92$var$circleRadius(cosRadius, t0);
        t1 = $645e00104e33ab92$var$circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92);
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = (0, $98abb30d5a123775$export$12f9ad44fe773943)([
            cosRadius,
            -sinRadius * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(t),
            -sinRadius * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function $645e00104e33ab92$var$circleRadius(cosRadius, point) {
    point = (0, $98abb30d5a123775$export$6e6697ef026a96)(point), point[0] -= cosRadius;
    (0, $98abb30d5a123775$export$6789498aec2cb34b)(point);
    var radius = (0, $5dea8ae1ded860af$export$fd6306be3fde5b04)(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92) - (0, $5dea8ae1ded860af$export$6c421550c66a327d)) % (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92);
}
function $645e00104e33ab92$export$2e2bcd8739ae039() {
    var center = (0, $70b543bbaf997a46$export$2e2bcd8739ae039)([
        0,
        0
    ]), radius = (0, $70b543bbaf997a46$export$2e2bcd8739ae039)(90), precision = (0, $70b543bbaf997a46$export$2e2bcd8739ae039)(6), ring, rotate, stream = {
        point: point
    };
    function point(x, y) {
        ring.push(x = rotate(x, y));
        x[0] *= (0, $5dea8ae1ded860af$export$41fc368e1a942b97), x[1] *= (0, $5dea8ae1ded860af$export$41fc368e1a942b97);
    }
    function circle() {
        var c = center.apply(this, arguments), r = radius.apply(this, arguments) * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), p = precision.apply(this, arguments) * (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
        ring = [];
        rotate = (0, $18c45c29f98b48c9$export$a2ba89726971a90f)(-c[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), -c[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), 0).invert;
        $645e00104e33ab92$export$b5441eb324cd8d4e(stream, r, p, 1);
        c = {
            type: "Polygon",
            coordinates: [
                ring
            ]
        };
        ring = rotate = null;
        return c;
    }
    circle.center = function(_) {
        return arguments.length ? (center = typeof _ === "function" ? _ : (0, $70b543bbaf997a46$export$2e2bcd8739ae039)([
            +_[0],
            +_[1]
        ]), circle) : center;
    };
    circle.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $70b543bbaf997a46$export$2e2bcd8739ae039)(+_), circle) : radius;
    };
    circle.precision = function(_) {
        return arguments.length ? (precision = typeof _ === "function" ? _ : (0, $70b543bbaf997a46$export$2e2bcd8739ae039)(+_), circle) : precision;
    };
    return circle;
}



function $155e93ac7b200df5$export$2e2bcd8739ae039() {
    var lines = [], line;
    return {
        point: function(x, y, m) {
            line.push([
                x,
                y,
                m
            ]);
        },
        lineStart: function() {
            lines.push(line = []);
        },
        lineEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
        rejoin: function() {
            if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
        },
        result: function() {
            var result = lines;
            lines = [];
            line = null;
            return result;
        }
    };
}



function $0aeccea59e6f8be1$export$2e2bcd8739ae039(a, b) {
    return (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(a[0] - b[0]) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) && (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(a[1] - b[1]) < (0, $5dea8ae1ded860af$export$6c421550c66a327d);
}



function $530780b98408591d$var$Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
}
function $530780b98408591d$export$2e2bcd8739ae039(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n;
    segments.forEach(function(segment) {
        if ((n = segment.length - 1) <= 0) return;
        var n, p0 = segment[0], p1 = segment[n], x;
        if ((0, $0aeccea59e6f8be1$export$2e2bcd8739ae039)(p0, p1)) {
            if (!p0[2] && !p1[2]) {
                stream.lineStart();
                for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                stream.lineEnd();
                return;
            }
            // handle degenerate cases by moving the point
            p1[0] += 2 * (0, $5dea8ae1ded860af$export$6c421550c66a327d);
        }
        subject.push(x = new $530780b98408591d$var$Intersection(p0, segment, null, true));
        clip.push(x.o = new $530780b98408591d$var$Intersection(p0, null, x, false));
        subject.push(x = new $530780b98408591d$var$Intersection(p1, segment, null, false));
        clip.push(x.o = new $530780b98408591d$var$Intersection(p1, null, x, true));
    });
    if (!subject.length) return;
    clip.sort(compareIntersection);
    $530780b98408591d$var$link(subject);
    $530780b98408591d$var$link(clip);
    for(i = 0, n = clip.length; i < n; ++i)clip[i].e = startInside = !startInside;
    var start = subject[0], points, point;
    while(true){
        // Find first unvisited intersection.
        var current = start, isSubject = true;
        while(current.v)if ((current = current.n) === start) return;
        points = current.z;
        stream.lineStart();
        do {
            current.v = current.o.v = true;
            if (current.e) {
                if (isSubject) for(i = 0, n = points.length; i < n; ++i)stream.point((point = points[i])[0], point[1]);
                else interpolate(current.x, current.n.x, 1, stream);
                current = current.n;
            } else {
                if (isSubject) {
                    points = current.p.z;
                    for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                } else interpolate(current.x, current.p.x, -1, stream);
                current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
        }while (!current.v);
        stream.lineEnd();
    }
}
function $530780b98408591d$var$link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while(++i < n){
        a.n = b = array[i];
        b.p = a;
        a = b;
    }
    a.n = b = array[0];
    b.p = a;
}






function $a5e67a8beed7ccba$var$longitude(point) {
    return (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(point[0]) <= (0, $5dea8ae1ded860af$export$18c7bea995a110f) ? point[0] : (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(point[0]) * (((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(point[0]) + (0, $5dea8ae1ded860af$export$18c7bea995a110f)) % (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92) - (0, $5dea8ae1ded860af$export$18c7bea995a110f));
}
function $a5e67a8beed7ccba$export$2e2bcd8739ae039(polygon, point) {
    var lambda = $a5e67a8beed7ccba$var$longitude(point), phi = point[1], sinPhi = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), normal = [
        (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda),
        -(0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda),
        0
    ], angle = 0, winding = 0;
    var sum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    if (sinPhi === 1) phi = (0, $5dea8ae1ded860af$export$e51408a300e8929a) + (0, $5dea8ae1ded860af$export$6c421550c66a327d);
    else if (sinPhi === -1) phi = -(0, $5dea8ae1ded860af$export$e51408a300e8929a) - (0, $5dea8ae1ded860af$export$6c421550c66a327d);
    for(var i = 0, n = polygon.length; i < n; ++i){
        if (!(m = (ring = polygon[i]).length)) continue;
        var ring, m, point0 = ring[m - 1], lambda0 = $a5e67a8beed7ccba$var$longitude(point0), phi0 = point0[1] / 2 + (0, $5dea8ae1ded860af$export$c39a5cba78ea0fc2), sinPhi0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi0), cosPhi0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi0);
        for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
            var point1 = ring[j], lambda1 = $a5e67a8beed7ccba$var$longitude(point1), phi1 = point1[1] / 2 + (0, $5dea8ae1ded860af$export$c39a5cba78ea0fc2), sinPhi1 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi1), cosPhi1 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > (0, $5dea8ae1ded860af$export$18c7bea995a110f), k = sinPhi0 * sinPhi1;
            sum.add((0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(k * sign * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(absDelta), cosPhi0 * cosPhi1 + k * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(absDelta)));
            angle += antimeridian ? delta + sign * (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92) : delta;
            // Are the longitudes either side of the point’s meridian (lambda),
            // and are the latitudes smaller than the parallel (phi)?
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = (0, $98abb30d5a123775$export$4763f5351b14293f)((0, $98abb30d5a123775$export$6e6697ef026a96)(point0), (0, $98abb30d5a123775$export$6e6697ef026a96)(point1));
                (0, $98abb30d5a123775$export$6789498aec2cb34b)(arc);
                var intersection = (0, $98abb30d5a123775$export$4763f5351b14293f)(normal, arc);
                (0, $98abb30d5a123775$export$6789498aec2cb34b)(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(intersection[2]);
                if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
            }
        }
    }
    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.
    return (angle < -(0, $5dea8ae1ded860af$export$6c421550c66a327d) || angle < (0, $5dea8ae1ded860af$export$6c421550c66a327d) && sum < -(0, $5dea8ae1ded860af$export$92c06fba281fe81b)) ^ winding & 1;
}



function $764773aaaffc525d$export$2e2bcd8739ae039(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
        var line = clipLine(sink), ringBuffer = (0, $155e93ac7b200df5$export$2e2bcd8739ae039)(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
        var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
            },
            polygonEnd: function() {
                clip.point = point;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = (0, $961a196a06e40be5$export$2e2bcd8739ae039)(segments);
                var startInside = (0, $a5e67a8beed7ccba$export$2e2bcd8739ae039)(polygon, start);
                if (segments.length) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    (0, $530780b98408591d$export$2e2bcd8739ae039)(segments, $764773aaaffc525d$var$compareIntersection, startInside, interpolate, sink);
                } else if (startInside) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                }
                if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
            },
            sphere: function() {
                sink.polygonStart();
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
                sink.polygonEnd();
            }
        };
        function point(lambda, phi) {
            if (pointVisible(lambda, phi)) sink.point(lambda, phi);
        }
        function pointLine(lambda, phi) {
            line.point(lambda, phi);
        }
        function lineStart() {
            clip.point = pointLine;
            line.lineStart();
        }
        function lineEnd() {
            clip.point = point;
            line.lineEnd();
        }
        function pointRing(lambda, phi) {
            ring.push([
                lambda,
                phi
            ]);
            ringSink.point(lambda, phi);
        }
        function ringStart() {
            ringSink.lineStart();
            ring = [];
        }
        function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringSink.lineEnd();
            var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n) return;
            // No intersections.
            if (clean & 1) {
                segment = ringSegments[0];
                if ((m = segment.length - 1) > 0) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                    sink.lineEnd();
                }
                return;
            }
            // Rejoin connected segments.
            // TODO reuse ringBuffer.rejoin()?
            if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter($764773aaaffc525d$var$validSegment));
        }
        return clip;
    };
}
function $764773aaaffc525d$var$validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function $764773aaaffc525d$var$compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - (0, $5dea8ae1ded860af$export$e51408a300e8929a) - (0, $5dea8ae1ded860af$export$6c421550c66a327d) : (0, $5dea8ae1ded860af$export$e51408a300e8929a) - a[1]) - ((b = b.x)[0] < 0 ? b[1] - (0, $5dea8ae1ded860af$export$e51408a300e8929a) - (0, $5dea8ae1ded860af$export$6c421550c66a327d) : (0, $5dea8ae1ded860af$export$e51408a300e8929a) - b[1]);
}



var $08876774f8010588$export$2e2bcd8739ae039 = (0, $764773aaaffc525d$export$2e2bcd8739ae039)(function() {
    return true;
}, $08876774f8010588$var$clipAntimeridianLine, $08876774f8010588$var$clipAntimeridianInterpolate, [
    -(0, $5dea8ae1ded860af$export$18c7bea995a110f),
    -(0, $5dea8ae1ded860af$export$e51408a300e8929a)
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function $08876774f8010588$var$clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function() {
            stream.lineStart();
            clean = 1;
        },
        point: function(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? (0, $5dea8ae1ded860af$export$18c7bea995a110f) : -(0, $5dea8ae1ded860af$export$18c7bea995a110f), delta = (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda1 - lambda0);
            if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(delta - (0, $5dea8ae1ded860af$export$18c7bea995a110f)) < (0, $5dea8ae1ded860af$export$6c421550c66a327d)) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? (0, $5dea8ae1ded860af$export$e51408a300e8929a) : -(0, $5dea8ae1ded860af$export$e51408a300e8929a));
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= (0, $5dea8ae1ded860af$export$18c7bea995a110f)) {
                if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda0 - sign0) < (0, $5dea8ae1ded860af$export$6c421550c66a327d)) lambda0 -= sign0 * (0, $5dea8ae1ded860af$export$6c421550c66a327d); // handle degeneracies
                if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda1 - sign1) < (0, $5dea8ae1ded860af$export$6c421550c66a327d)) lambda1 -= sign1 * (0, $5dea8ae1ded860af$export$6c421550c66a327d);
                phi0 = $08876774f8010588$var$clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function $08876774f8010588$var$clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda0 - lambda1);
    return (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(sinLambda0Lambda1) > (0, $5dea8ae1ded860af$export$6c421550c66a327d) ? (0, $5dea8ae1ded860af$export$628dc4eed22b0fbd)(((0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi0) * (cosPhi1 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi1)) * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda1) - (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi1) * (cosPhi0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi0)) * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function $08876774f8010588$var$clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * (0, $5dea8ae1ded860af$export$e51408a300e8929a);
        stream.point(-(0, $5dea8ae1ded860af$export$18c7bea995a110f), phi);
        stream.point(0, phi);
        stream.point((0, $5dea8ae1ded860af$export$18c7bea995a110f), phi);
        stream.point((0, $5dea8ae1ded860af$export$18c7bea995a110f), 0);
        stream.point((0, $5dea8ae1ded860af$export$18c7bea995a110f), -phi);
        stream.point(0, -phi);
        stream.point(-(0, $5dea8ae1ded860af$export$18c7bea995a110f), -phi);
        stream.point(-(0, $5dea8ae1ded860af$export$18c7bea995a110f), 0);
        stream.point(-(0, $5dea8ae1ded860af$export$18c7bea995a110f), phi);
    } else if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(from[0] - to[0]) > (0, $5dea8ae1ded860af$export$6c421550c66a327d)) {
        var lambda = from[0] < to[0] ? (0, $5dea8ae1ded860af$export$18c7bea995a110f) : -(0, $5dea8ae1ded860af$export$18c7bea995a110f);
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}







function $2e2a8e97e3b7f602$export$2e2bcd8739ae039(radius) {
    var cr = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(radius), delta = 6 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), smallRadius = cr > 0, notHemisphere = (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(cr) > (0, $5dea8ae1ded860af$export$6c421550c66a327d); // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
        (0, $645e00104e33ab92$export$b5441eb324cd8d4e)(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi) {
        return (0, $5dea8ae1ded860af$export$50d414a77b60d802)(lambda) * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi) > cr;
    }
    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
        var point0, c0, v0, v00, clean; // no intersections
        return {
            lineStart: function() {
                v00 = v0 = false;
                clean = 1;
            },
            point: function(lambda, phi) {
                var point1 = [
                    lambda,
                    phi
                ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? (0, $5dea8ae1ded860af$export$18c7bea995a110f) : -(0, $5dea8ae1ded860af$export$18c7bea995a110f)), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                    point2 = intersect(point0, point1);
                    if (!point2 || (0, $0aeccea59e6f8be1$export$2e2bcd8739ae039)(point0, point2) || (0, $0aeccea59e6f8be1$export$2e2bcd8739ae039)(point1, point2)) point1[2] = 1;
                }
                if (v !== v0) {
                    clean = 0;
                    if (v) {
                        // outside going in
                        stream.lineStart();
                        point2 = intersect(point1, point0);
                        stream.point(point2[0], point2[1]);
                    } else {
                        // inside going out
                        point2 = intersect(point0, point1);
                        stream.point(point2[0], point2[1], 2);
                        stream.lineEnd();
                    }
                    point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                    var t;
                    // If the codes for two points are different, or are both zero,
                    // and there this segment intersects with the small circle.
                    if (!(c & c0) && (t = intersect(point1, point0, true))) {
                        clean = 0;
                        if (smallRadius) {
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1]);
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                        } else {
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1], 3);
                        }
                    }
                }
                if (v && (!point0 || !(0, $0aeccea59e6f8be1$export$2e2bcd8739ae039)(point0, point1))) stream.point(point1[0], point1[1]);
                point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
                if (v0) stream.lineEnd();
                point0 = null;
            },
            // Rejoin first and last segments if there were intersections and the first
            // and last points were visible.
            clean: function() {
                return clean | (v00 && v0) << 1;
            }
        };
    }
    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
        var pa = (0, $98abb30d5a123775$export$6e6697ef026a96)(a), pb = (0, $98abb30d5a123775$export$6e6697ef026a96)(b);
        // We have two planes, n1.p = d1 and n2.p = d2.
        // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
        var n1 = [
            1,
            0,
            0
        ], n2 = (0, $98abb30d5a123775$export$4763f5351b14293f)(pa, pb), n2n2 = (0, $98abb30d5a123775$export$2ef80f51436a9de9)(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        // Two polar points.
        if (!determinant) return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = (0, $98abb30d5a123775$export$4763f5351b14293f)(n1, n2), A = (0, $98abb30d5a123775$export$52d0ee3fc868d452)(n1, c1), B = (0, $98abb30d5a123775$export$52d0ee3fc868d452)(n2, c2);
        (0, $98abb30d5a123775$export$e62eba72fc898eae)(A, B);
        // Solve |p(t)|^2 = 1.
        var u = n1xn2, w = (0, $98abb30d5a123775$export$2ef80f51436a9de9)(A, u), uu = (0, $98abb30d5a123775$export$2ef80f51436a9de9)(u, u), t2 = w * w - uu * ((0, $98abb30d5a123775$export$2ef80f51436a9de9)(A, A) - 1);
        if (t2 < 0) return;
        var t = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(t2), q = (0, $98abb30d5a123775$export$52d0ee3fc868d452)(u, (-w - t) / uu);
        (0, $98abb30d5a123775$export$e62eba72fc898eae)(q, A);
        q = (0, $98abb30d5a123775$export$12f9ad44fe773943)(q);
        if (!two) return q;
        // Two intersection points.
        var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
        if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
        var delta = lambda1 - lambda0, polar = (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(delta - (0, $5dea8ae1ded860af$export$18c7bea995a110f)) < (0, $5dea8ae1ded860af$export$6c421550c66a327d), meridian = polar || delta < (0, $5dea8ae1ded860af$export$6c421550c66a327d);
        if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
        // Check that the first point is between a and b.
        if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(q[0] - lambda0) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > (0, $5dea8ae1ded860af$export$18c7bea995a110f) ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = (0, $98abb30d5a123775$export$52d0ee3fc868d452)(u, (-w + t) / uu);
            (0, $98abb30d5a123775$export$e62eba72fc898eae)(q1, A);
            return [
                q,
                (0, $98abb30d5a123775$export$12f9ad44fe773943)(q1)
            ];
        }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
        var r = smallRadius ? radius : (0, $5dea8ae1ded860af$export$18c7bea995a110f) - radius, code = 0;
        if (lambda < -r) code |= 1; // left
        else if (lambda > r) code |= 2; // right
        if (phi < -r) code |= 4; // below
        else if (phi > r) code |= 8; // above
        return code;
    }
    return (0, $764773aaaffc525d$export$2e2bcd8739ae039)(visible, clipLine, interpolate, smallRadius ? [
        0,
        -radius
    ] : [
        -(0, $5dea8ae1ded860af$export$18c7bea995a110f),
        radius - (0, $5dea8ae1ded860af$export$18c7bea995a110f)
    ]);
}




function $73f0efe0a2ffa981$export$2e2bcd8739ae039(a, b, x0, y0, x1, y1) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
}




var $079ab3b5422c118d$var$clipMax = 1e9, $079ab3b5422c118d$var$clipMin = -$079ab3b5422c118d$var$clipMax;
function $079ab3b5422c118d$export$2e2bcd8739ae039(x0, y0, x1, y1) {
    function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(p[0] - x0) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) ? direction > 0 ? 0 : 3 : (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(p[0] - x1) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) ? direction > 0 ? 2 : 1 : (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(p[1] - y0) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = (0, $155e93ac7b200df5$export$2e2bcd8739ae039)(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point(x, y) {
            if (visible(x, y)) activeStream.point(x, y);
        }
        function polygonInside() {
            var winding = 0;
            for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
            return winding;
        }
        // Buffer geometry within a polygon and then clip it en masse.
        function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
        }
        function polygonEnd() {
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = (0, $961a196a06e40be5$export$2e2bcd8739ae039)(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) (0, $530780b98408591d$export$2e2bcd8739ae039)(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
        }
        // TODO rather than special-case polygons, simply handle them separately.
        // Ideally, coincident intersection points should be jittered to avoid
        // clipping issues.
        function lineEnd() {
            if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
            }
            clipStream.point = point;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible(x, y);
            if (polygon) ring.push([
                x,
                y
            ]);
            if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                }
            } else if (v && v_) activeStream.point(x, y);
            else {
                var a = [
                    x_ = Math.max($079ab3b5422c118d$var$clipMin, Math.min($079ab3b5422c118d$var$clipMax, x_)),
                    y_ = Math.max($079ab3b5422c118d$var$clipMin, Math.min($079ab3b5422c118d$var$clipMax, y_))
                ], b = [
                    x = Math.max($079ab3b5422c118d$var$clipMin, Math.min($079ab3b5422c118d$var$clipMax, x)),
                    y = Math.max($079ab3b5422c118d$var$clipMin, Math.min($079ab3b5422c118d$var$clipMax, y))
                ];
                if ((0, $73f0efe0a2ffa981$export$2e2bcd8739ae039)(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                        activeStream.lineStart();
                        activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                }
            }
            x_ = x, y_ = y, v_ = v;
        }
        return clipStream;
    };
}


function $eadd3d21bbfdbefb$export$2e2bcd8739ae039() {
    var x0 = 0, y0 = 0, x1 = 960, y1 = 500, cache, cacheStream, clip;
    return clip = {
        stream: function(stream) {
            return cache && cacheStream === stream ? cache : cache = (0, $079ab3b5422c118d$export$2e2bcd8739ae039)(x0, y0, x1, y1)(cacheStream = stream);
        },
        extent: function(_) {
            return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [
                [
                    x0,
                    y0
                ],
                [
                    x1,
                    y1
                ]
            ];
        }
    };
}








var $b2b33f014ebad653$var$lengthSum, $b2b33f014ebad653$var$lambda0, $b2b33f014ebad653$var$sinPhi0, $b2b33f014ebad653$var$cosPhi0;
var $b2b33f014ebad653$var$lengthStream = {
    sphere: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    point: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineStart: $b2b33f014ebad653$var$lengthLineStart,
    lineEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    polygonStart: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    polygonEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039)
};
function $b2b33f014ebad653$var$lengthLineStart() {
    $b2b33f014ebad653$var$lengthStream.point = $b2b33f014ebad653$var$lengthPointFirst;
    $b2b33f014ebad653$var$lengthStream.lineEnd = $b2b33f014ebad653$var$lengthLineEnd;
}
function $b2b33f014ebad653$var$lengthLineEnd() {
    $b2b33f014ebad653$var$lengthStream.point = $b2b33f014ebad653$var$lengthStream.lineEnd = (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039);
}
function $b2b33f014ebad653$var$lengthPointFirst(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    $b2b33f014ebad653$var$lambda0 = lambda, $b2b33f014ebad653$var$sinPhi0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), $b2b33f014ebad653$var$cosPhi0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi);
    $b2b33f014ebad653$var$lengthStream.point = $b2b33f014ebad653$var$lengthPoint;
}
function $b2b33f014ebad653$var$lengthPoint(lambda, phi) {
    lambda *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi *= (0, $5dea8ae1ded860af$export$8449e153fbd325fc);
    var sinPhi = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi), cosPhi = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi), delta = (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda - $b2b33f014ebad653$var$lambda0), cosDelta = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(delta), sinDelta = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(delta), x = cosPhi * sinDelta, y = $b2b33f014ebad653$var$cosPhi0 * sinPhi - $b2b33f014ebad653$var$sinPhi0 * cosPhi * cosDelta, z = $b2b33f014ebad653$var$sinPhi0 * sinPhi + $b2b33f014ebad653$var$cosPhi0 * cosPhi * cosDelta;
    $b2b33f014ebad653$var$lengthSum.add((0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)((0, $5dea8ae1ded860af$export$eba8049fb5020b81)(x * x + y * y), z));
    $b2b33f014ebad653$var$lambda0 = lambda, $b2b33f014ebad653$var$sinPhi0 = sinPhi, $b2b33f014ebad653$var$cosPhi0 = cosPhi;
}
function $b2b33f014ebad653$export$2e2bcd8739ae039(object) {
    $b2b33f014ebad653$var$lengthSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, $b2b33f014ebad653$var$lengthStream);
    return +$b2b33f014ebad653$var$lengthSum;
}


var $948ab2f6c3c881e5$var$coordinates = [
    null,
    null
], $948ab2f6c3c881e5$var$object = {
    type: "LineString",
    coordinates: $948ab2f6c3c881e5$var$coordinates
};
function $948ab2f6c3c881e5$export$2e2bcd8739ae039(a, b) {
    $948ab2f6c3c881e5$var$coordinates[0] = a;
    $948ab2f6c3c881e5$var$coordinates[1] = b;
    return (0, $b2b33f014ebad653$export$2e2bcd8739ae039)($948ab2f6c3c881e5$var$object);
}



var $4ae7d6f455934371$var$containsObjectType = {
    Feature: function(object, point) {
        return $4ae7d6f455934371$var$containsGeometry(object.geometry, point);
    },
    FeatureCollection: function(object, point) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)if ($4ae7d6f455934371$var$containsGeometry(features[i].geometry, point)) return true;
        return false;
    }
};
var $4ae7d6f455934371$var$containsGeometryType = {
    Sphere: function() {
        return true;
    },
    Point: function(object, point) {
        return $4ae7d6f455934371$var$containsPoint(object.coordinates, point);
    },
    MultiPoint: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if ($4ae7d6f455934371$var$containsPoint(coordinates[i], point)) return true;
        return false;
    },
    LineString: function(object, point) {
        return $4ae7d6f455934371$var$containsLine(object.coordinates, point);
    },
    MultiLineString: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if ($4ae7d6f455934371$var$containsLine(coordinates[i], point)) return true;
        return false;
    },
    Polygon: function(object, point) {
        return $4ae7d6f455934371$var$containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if ($4ae7d6f455934371$var$containsPolygon(coordinates[i], point)) return true;
        return false;
    },
    GeometryCollection: function(object, point) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)if ($4ae7d6f455934371$var$containsGeometry(geometries[i], point)) return true;
        return false;
    }
};
function $4ae7d6f455934371$var$containsGeometry(geometry, point) {
    return geometry && $4ae7d6f455934371$var$containsGeometryType.hasOwnProperty(geometry.type) ? $4ae7d6f455934371$var$containsGeometryType[geometry.type](geometry, point) : false;
}
function $4ae7d6f455934371$var$containsPoint(coordinates, point) {
    return (0, $948ab2f6c3c881e5$export$2e2bcd8739ae039)(coordinates, point) === 0;
}
function $4ae7d6f455934371$var$containsLine(coordinates, point) {
    var ao, bo, ab;
    for(var i = 0, n = coordinates.length; i < n; i++){
        bo = (0, $948ab2f6c3c881e5$export$2e2bcd8739ae039)(coordinates[i], point);
        if (bo === 0) return true;
        if (i > 0) {
            ab = (0, $948ab2f6c3c881e5$export$2e2bcd8739ae039)(coordinates[i], coordinates[i - 1]);
            if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < (0, $5dea8ae1ded860af$export$92c06fba281fe81b) * ab) return true;
        }
        ao = bo;
    }
    return false;
}
function $4ae7d6f455934371$var$containsPolygon(coordinates, point) {
    return !!(0, $a5e67a8beed7ccba$export$2e2bcd8739ae039)(coordinates.map($4ae7d6f455934371$var$ringRadians), $4ae7d6f455934371$var$pointRadians(point));
}
function $4ae7d6f455934371$var$ringRadians(ring) {
    return ring = ring.map($4ae7d6f455934371$var$pointRadians), ring.pop(), ring;
}
function $4ae7d6f455934371$var$pointRadians(point) {
    return [
        point[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc),
        point[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc)
    ];
}
function $4ae7d6f455934371$export$2e2bcd8739ae039(object, point) {
    return (object && $4ae7d6f455934371$var$containsObjectType.hasOwnProperty(object.type) ? $4ae7d6f455934371$var$containsObjectType[object.type] : $4ae7d6f455934371$var$containsGeometry)(object, point);
}





function $f41cd2934f9ed70e$var$graticuleX(y0, y1, dy) {
    var y = (0, $76bfd994379ae812$export$2e2bcd8739ae039)(y0, y1 - (0, $5dea8ae1ded860af$export$6c421550c66a327d), dy).concat(y1);
    return function(x) {
        return y.map(function(y) {
            return [
                x,
                y
            ];
        });
    };
}
function $f41cd2934f9ed70e$var$graticuleY(x0, x1, dx) {
    var x = (0, $76bfd994379ae812$export$2e2bcd8739ae039)(x0, x1 - (0, $5dea8ae1ded860af$export$6c421550c66a327d), dx).concat(x1);
    return function(y) {
        return x.map(function(x) {
            return [
                x,
                y
            ];
        });
    };
}
function $f41cd2934f9ed70e$export$2e2bcd8739ae039() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
        return {
            type: "MultiLineString",
            coordinates: lines()
        };
    }
    function lines() {
        return (0, $76bfd994379ae812$export$2e2bcd8739ae039)((0, $5dea8ae1ded860af$export$803ce6b71a0a94b2)(X0 / DX) * DX, X1, DX).map(X).concat((0, $76bfd994379ae812$export$2e2bcd8739ae039)((0, $5dea8ae1ded860af$export$803ce6b71a0a94b2)(Y0 / DY) * DY, Y1, DY).map(Y)).concat((0, $76bfd994379ae812$export$2e2bcd8739ae039)((0, $5dea8ae1ded860af$export$803ce6b71a0a94b2)(x0 / dx) * dx, x1, dx).filter(function(x) {
            return (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(x % DX) > (0, $5dea8ae1ded860af$export$6c421550c66a327d);
        }).map(x)).concat((0, $76bfd994379ae812$export$2e2bcd8739ae039)((0, $5dea8ae1ded860af$export$803ce6b71a0a94b2)(y0 / dy) * dy, y1, dy).filter(function(y) {
            return (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(y % DY) > (0, $5dea8ae1ded860af$export$6c421550c66a327d);
        }).map(y));
    }
    graticule.lines = function() {
        return lines().map(function(coordinates) {
            return {
                type: "LineString",
                coordinates: coordinates
            };
        });
    };
    graticule.outline = function() {
        return {
            type: "Polygon",
            coordinates: [
                X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))
            ]
        };
    };
    graticule.extent = function(_) {
        if (!arguments.length) return graticule.extentMinor();
        return graticule.extentMajor(_).extentMinor(_);
    };
    graticule.extentMajor = function(_) {
        if (!arguments.length) return [
            [
                X0,
                Y0
            ],
            [
                X1,
                Y1
            ]
        ];
        X0 = +_[0][0], X1 = +_[1][0];
        Y0 = +_[0][1], Y1 = +_[1][1];
        if (X0 > X1) _ = X0, X0 = X1, X1 = _;
        if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
        return graticule.precision(precision);
    };
    graticule.extentMinor = function(_) {
        if (!arguments.length) return [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x0 = +_[0][0], x1 = +_[1][0];
        y0 = +_[0][1], y1 = +_[1][1];
        if (x0 > x1) _ = x0, x0 = x1, x1 = _;
        if (y0 > y1) _ = y0, y0 = y1, y1 = _;
        return graticule.precision(precision);
    };
    graticule.step = function(_) {
        if (!arguments.length) return graticule.stepMinor();
        return graticule.stepMajor(_).stepMinor(_);
    };
    graticule.stepMajor = function(_) {
        if (!arguments.length) return [
            DX,
            DY
        ];
        DX = +_[0], DY = +_[1];
        return graticule;
    };
    graticule.stepMinor = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        dx = +_[0], dy = +_[1];
        return graticule;
    };
    graticule.precision = function(_) {
        if (!arguments.length) return precision;
        precision = +_;
        x = $f41cd2934f9ed70e$var$graticuleX(y0, y1, 90);
        y = $f41cd2934f9ed70e$var$graticuleY(x0, x1, precision);
        X = $f41cd2934f9ed70e$var$graticuleX(Y0, Y1, 90);
        Y = $f41cd2934f9ed70e$var$graticuleY(X0, X1, precision);
        return graticule;
    };
    return graticule.extentMajor([
        [
            -180,
            -90 + (0, $5dea8ae1ded860af$export$6c421550c66a327d)
        ],
        [
            180,
            90 - (0, $5dea8ae1ded860af$export$6c421550c66a327d)
        ]
    ]).extentMinor([
        [
            -180,
            -80 - (0, $5dea8ae1ded860af$export$6c421550c66a327d)
        ],
        [
            180,
            80 + (0, $5dea8ae1ded860af$export$6c421550c66a327d)
        ]
    ]);
}
function $f41cd2934f9ed70e$export$b8db4e9403a5b6f1() {
    return $f41cd2934f9ed70e$export$2e2bcd8739ae039()();
}



function $174a7fa81f46ec68$export$2e2bcd8739ae039(a, b) {
    var x0 = a[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), y0 = a[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), x1 = b[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), y1 = b[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), cy0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y0), sy0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y0), cy1 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y1), sy1 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y1), kx0 = cy0 * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(x0), ky0 = cy0 * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x0), kx1 = cy1 * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(x1), ky1 = cy1 * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x1), d = 2 * (0, $5dea8ae1ded860af$export$41726bdb1fc63f)((0, $5dea8ae1ded860af$export$eba8049fb5020b81)((0, $5dea8ae1ded860af$export$e808712c2966e662)(y1 - y0) + cy0 * cy1 * (0, $5dea8ae1ded860af$export$e808712c2966e662)(x1 - x0))), k = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(d);
    var interpolate = d ? function(t) {
        var B = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(t *= d) / k, A = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
        return [
            (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(y, x) * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(z, (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(x * x + y * y)) * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
        ];
    } : function() {
        return [
            x0 * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            y0 * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
        ];
    };
    interpolate.distance = d;
    return interpolate;
}



var $d9f8fbe6b8a6e552$export$2e2bcd8739ae039 = (x)=>x;






var $0921d6efe28cd38f$var$areaSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)(), $0921d6efe28cd38f$var$areaRingSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)(), $0921d6efe28cd38f$var$x00, $0921d6efe28cd38f$var$y00, $0921d6efe28cd38f$var$x0, $0921d6efe28cd38f$var$y0;
var $0921d6efe28cd38f$var$areaStream = {
    point: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineStart: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    polygonStart: function() {
        $0921d6efe28cd38f$var$areaStream.lineStart = $0921d6efe28cd38f$var$areaRingStart;
        $0921d6efe28cd38f$var$areaStream.lineEnd = $0921d6efe28cd38f$var$areaRingEnd;
    },
    polygonEnd: function() {
        $0921d6efe28cd38f$var$areaStream.lineStart = $0921d6efe28cd38f$var$areaStream.lineEnd = $0921d6efe28cd38f$var$areaStream.point = (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039);
        $0921d6efe28cd38f$var$areaSum.add((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)($0921d6efe28cd38f$var$areaRingSum));
        $0921d6efe28cd38f$var$areaRingSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
    },
    result: function() {
        var area = $0921d6efe28cd38f$var$areaSum / 2;
        $0921d6efe28cd38f$var$areaSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
        return area;
    }
};
function $0921d6efe28cd38f$var$areaRingStart() {
    $0921d6efe28cd38f$var$areaStream.point = $0921d6efe28cd38f$var$areaPointFirst;
}
function $0921d6efe28cd38f$var$areaPointFirst(x, y) {
    $0921d6efe28cd38f$var$areaStream.point = $0921d6efe28cd38f$var$areaPoint;
    $0921d6efe28cd38f$var$x00 = $0921d6efe28cd38f$var$x0 = x, $0921d6efe28cd38f$var$y00 = $0921d6efe28cd38f$var$y0 = y;
}
function $0921d6efe28cd38f$var$areaPoint(x, y) {
    $0921d6efe28cd38f$var$areaRingSum.add($0921d6efe28cd38f$var$y0 * x - $0921d6efe28cd38f$var$x0 * y);
    $0921d6efe28cd38f$var$x0 = x, $0921d6efe28cd38f$var$y0 = y;
}
function $0921d6efe28cd38f$var$areaRingEnd() {
    $0921d6efe28cd38f$var$areaPoint($0921d6efe28cd38f$var$x00, $0921d6efe28cd38f$var$y00);
}
var $0921d6efe28cd38f$export$2e2bcd8739ae039 = $0921d6efe28cd38f$var$areaStream;



var $27dc7f00db575680$var$x0 = Infinity, $27dc7f00db575680$var$y0 = $27dc7f00db575680$var$x0, $27dc7f00db575680$var$x1 = -$27dc7f00db575680$var$x0, $27dc7f00db575680$var$y1 = $27dc7f00db575680$var$x1;
var $27dc7f00db575680$var$boundsStream = {
    point: $27dc7f00db575680$var$boundsPoint,
    lineStart: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    polygonStart: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    polygonEnd: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    result: function() {
        var bounds = [
            [
                $27dc7f00db575680$var$x0,
                $27dc7f00db575680$var$y0
            ],
            [
                $27dc7f00db575680$var$x1,
                $27dc7f00db575680$var$y1
            ]
        ];
        $27dc7f00db575680$var$x1 = $27dc7f00db575680$var$y1 = -($27dc7f00db575680$var$y0 = $27dc7f00db575680$var$x0 = Infinity);
        return bounds;
    }
};
function $27dc7f00db575680$var$boundsPoint(x, y) {
    if (x < $27dc7f00db575680$var$x0) $27dc7f00db575680$var$x0 = x;
    if (x > $27dc7f00db575680$var$x1) $27dc7f00db575680$var$x1 = x;
    if (y < $27dc7f00db575680$var$y0) $27dc7f00db575680$var$y0 = y;
    if (y > $27dc7f00db575680$var$y1) $27dc7f00db575680$var$y1 = y;
}
var $27dc7f00db575680$export$2e2bcd8739ae039 = $27dc7f00db575680$var$boundsStream;



// TODO Enforce positive area for exterior, negative area for interior?
var $5505193685d49c20$var$X0 = 0, $5505193685d49c20$var$Y0 = 0, $5505193685d49c20$var$Z0 = 0, $5505193685d49c20$var$X1 = 0, $5505193685d49c20$var$Y1 = 0, $5505193685d49c20$var$Z1 = 0, $5505193685d49c20$var$X2 = 0, $5505193685d49c20$var$Y2 = 0, $5505193685d49c20$var$Z2 = 0, $5505193685d49c20$var$x00, $5505193685d49c20$var$y00, $5505193685d49c20$var$x0, $5505193685d49c20$var$y0;
var $5505193685d49c20$var$centroidStream = {
    point: $5505193685d49c20$var$centroidPoint,
    lineStart: $5505193685d49c20$var$centroidLineStart,
    lineEnd: $5505193685d49c20$var$centroidLineEnd,
    polygonStart: function() {
        $5505193685d49c20$var$centroidStream.lineStart = $5505193685d49c20$var$centroidRingStart;
        $5505193685d49c20$var$centroidStream.lineEnd = $5505193685d49c20$var$centroidRingEnd;
    },
    polygonEnd: function() {
        $5505193685d49c20$var$centroidStream.point = $5505193685d49c20$var$centroidPoint;
        $5505193685d49c20$var$centroidStream.lineStart = $5505193685d49c20$var$centroidLineStart;
        $5505193685d49c20$var$centroidStream.lineEnd = $5505193685d49c20$var$centroidLineEnd;
    },
    result: function() {
        var centroid = $5505193685d49c20$var$Z2 ? [
            $5505193685d49c20$var$X2 / $5505193685d49c20$var$Z2,
            $5505193685d49c20$var$Y2 / $5505193685d49c20$var$Z2
        ] : $5505193685d49c20$var$Z1 ? [
            $5505193685d49c20$var$X1 / $5505193685d49c20$var$Z1,
            $5505193685d49c20$var$Y1 / $5505193685d49c20$var$Z1
        ] : $5505193685d49c20$var$Z0 ? [
            $5505193685d49c20$var$X0 / $5505193685d49c20$var$Z0,
            $5505193685d49c20$var$Y0 / $5505193685d49c20$var$Z0
        ] : [
            NaN,
            NaN
        ];
        $5505193685d49c20$var$X0 = $5505193685d49c20$var$Y0 = $5505193685d49c20$var$Z0 = $5505193685d49c20$var$X1 = $5505193685d49c20$var$Y1 = $5505193685d49c20$var$Z1 = $5505193685d49c20$var$X2 = $5505193685d49c20$var$Y2 = $5505193685d49c20$var$Z2 = 0;
        return centroid;
    }
};
function $5505193685d49c20$var$centroidPoint(x, y) {
    $5505193685d49c20$var$X0 += x;
    $5505193685d49c20$var$Y0 += y;
    ++$5505193685d49c20$var$Z0;
}
function $5505193685d49c20$var$centroidLineStart() {
    $5505193685d49c20$var$centroidStream.point = $5505193685d49c20$var$centroidPointFirstLine;
}
function $5505193685d49c20$var$centroidPointFirstLine(x, y) {
    $5505193685d49c20$var$centroidStream.point = $5505193685d49c20$var$centroidPointLine;
    $5505193685d49c20$var$centroidPoint($5505193685d49c20$var$x0 = x, $5505193685d49c20$var$y0 = y);
}
function $5505193685d49c20$var$centroidPointLine(x, y) {
    var dx = x - $5505193685d49c20$var$x0, dy = y - $5505193685d49c20$var$y0, z = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(dx * dx + dy * dy);
    $5505193685d49c20$var$X1 += z * ($5505193685d49c20$var$x0 + x) / 2;
    $5505193685d49c20$var$Y1 += z * ($5505193685d49c20$var$y0 + y) / 2;
    $5505193685d49c20$var$Z1 += z;
    $5505193685d49c20$var$centroidPoint($5505193685d49c20$var$x0 = x, $5505193685d49c20$var$y0 = y);
}
function $5505193685d49c20$var$centroidLineEnd() {
    $5505193685d49c20$var$centroidStream.point = $5505193685d49c20$var$centroidPoint;
}
function $5505193685d49c20$var$centroidRingStart() {
    $5505193685d49c20$var$centroidStream.point = $5505193685d49c20$var$centroidPointFirstRing;
}
function $5505193685d49c20$var$centroidRingEnd() {
    $5505193685d49c20$var$centroidPointRing($5505193685d49c20$var$x00, $5505193685d49c20$var$y00);
}
function $5505193685d49c20$var$centroidPointFirstRing(x, y) {
    $5505193685d49c20$var$centroidStream.point = $5505193685d49c20$var$centroidPointRing;
    $5505193685d49c20$var$centroidPoint($5505193685d49c20$var$x00 = $5505193685d49c20$var$x0 = x, $5505193685d49c20$var$y00 = $5505193685d49c20$var$y0 = y);
}
function $5505193685d49c20$var$centroidPointRing(x, y) {
    var dx = x - $5505193685d49c20$var$x0, dy = y - $5505193685d49c20$var$y0, z = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(dx * dx + dy * dy);
    $5505193685d49c20$var$X1 += z * ($5505193685d49c20$var$x0 + x) / 2;
    $5505193685d49c20$var$Y1 += z * ($5505193685d49c20$var$y0 + y) / 2;
    $5505193685d49c20$var$Z1 += z;
    z = $5505193685d49c20$var$y0 * x - $5505193685d49c20$var$x0 * y;
    $5505193685d49c20$var$X2 += z * ($5505193685d49c20$var$x0 + x);
    $5505193685d49c20$var$Y2 += z * ($5505193685d49c20$var$y0 + y);
    $5505193685d49c20$var$Z2 += z * 3;
    $5505193685d49c20$var$centroidPoint($5505193685d49c20$var$x0 = x, $5505193685d49c20$var$y0 = y);
}
var $5505193685d49c20$export$2e2bcd8739ae039 = $5505193685d49c20$var$centroidStream;




function $23dc4807e20568b9$export$2e2bcd8739ae039(context) {
    this._context = context;
}
$23dc4807e20568b9$export$2e2bcd8739ae039.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
        return this._radius = _, this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._context.moveTo(x, y);
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(x, y);
                break;
            default:
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92));
                break;
        }
    },
    result: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039)
};





var $3ee85a89eadadb7d$var$lengthSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)(), $3ee85a89eadadb7d$var$lengthRing, $3ee85a89eadadb7d$var$x00, $3ee85a89eadadb7d$var$y00, $3ee85a89eadadb7d$var$x0, $3ee85a89eadadb7d$var$y0;
var $3ee85a89eadadb7d$var$lengthStream = {
    point: (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039),
    lineStart: function() {
        $3ee85a89eadadb7d$var$lengthStream.point = $3ee85a89eadadb7d$var$lengthPointFirst;
    },
    lineEnd: function() {
        if ($3ee85a89eadadb7d$var$lengthRing) $3ee85a89eadadb7d$var$lengthPoint($3ee85a89eadadb7d$var$x00, $3ee85a89eadadb7d$var$y00);
        $3ee85a89eadadb7d$var$lengthStream.point = (0, $ec35045b1d8c5a34$export$2e2bcd8739ae039);
    },
    polygonStart: function() {
        $3ee85a89eadadb7d$var$lengthRing = true;
    },
    polygonEnd: function() {
        $3ee85a89eadadb7d$var$lengthRing = null;
    },
    result: function() {
        var length = +$3ee85a89eadadb7d$var$lengthSum;
        $3ee85a89eadadb7d$var$lengthSum = new (0, $e31757e61e2f6bd4$export$bda7ba77fb86c375)();
        return length;
    }
};
function $3ee85a89eadadb7d$var$lengthPointFirst(x, y) {
    $3ee85a89eadadb7d$var$lengthStream.point = $3ee85a89eadadb7d$var$lengthPoint;
    $3ee85a89eadadb7d$var$x00 = $3ee85a89eadadb7d$var$x0 = x, $3ee85a89eadadb7d$var$y00 = $3ee85a89eadadb7d$var$y0 = y;
}
function $3ee85a89eadadb7d$var$lengthPoint(x, y) {
    $3ee85a89eadadb7d$var$x0 -= x, $3ee85a89eadadb7d$var$y0 -= y;
    $3ee85a89eadadb7d$var$lengthSum.add((0, $5dea8ae1ded860af$export$eba8049fb5020b81)($3ee85a89eadadb7d$var$x0 * $3ee85a89eadadb7d$var$x0 + $3ee85a89eadadb7d$var$y0 * $3ee85a89eadadb7d$var$y0));
    $3ee85a89eadadb7d$var$x0 = x, $3ee85a89eadadb7d$var$y0 = y;
}
var $3ee85a89eadadb7d$export$2e2bcd8739ae039 = $3ee85a89eadadb7d$var$lengthStream;


// Simple caching for constant-radius points.
let $aa01a0fadfe8bf92$var$cacheDigits, $aa01a0fadfe8bf92$var$cacheAppend, $aa01a0fadfe8bf92$var$cacheRadius, $aa01a0fadfe8bf92$var$cacheCircle;
class $aa01a0fadfe8bf92$export$2e2bcd8739ae039 {
    constructor(digits){
        this._append = digits == null ? $aa01a0fadfe8bf92$var$append : $aa01a0fadfe8bf92$var$appendRound(digits);
        this._radius = 4.5;
        this._ = "";
    }
    pointRadius(_) {
        this._radius = +_;
        return this;
    }
    polygonStart() {
        this._line = 0;
    }
    polygonEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line === 0) this._ += "Z";
        this._point = NaN;
    }
    point(x, y) {
        switch(this._point){
            case 0:
                this._append`M${x},${y}`;
                this._point = 1;
                break;
            case 1:
                this._append`L${x},${y}`;
                break;
            default:
                this._append`M${x},${y}`;
                if (this._radius !== $aa01a0fadfe8bf92$var$cacheRadius || this._append !== $aa01a0fadfe8bf92$var$cacheAppend) {
                    const r = this._radius;
                    const s = this._;
                    this._ = ""; // stash the old string so we can cache the circle path fragment
                    this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
                    $aa01a0fadfe8bf92$var$cacheRadius = r;
                    $aa01a0fadfe8bf92$var$cacheAppend = this._append;
                    $aa01a0fadfe8bf92$var$cacheCircle = this._;
                    this._ = s;
                }
                this._ += $aa01a0fadfe8bf92$var$cacheCircle;
                break;
        }
    }
    result() {
        const result = this._;
        this._ = "";
        return result.length ? result : null;
    }
}
function $aa01a0fadfe8bf92$var$append(strings) {
    let i = 1;
    this._ += strings[0];
    for(const j = strings.length; i < j; ++i)this._ += arguments[i] + strings[i];
}
function $aa01a0fadfe8bf92$var$appendRound(digits) {
    const d = Math.floor(digits);
    if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
    if (d > 15) return $aa01a0fadfe8bf92$var$append;
    if (d !== $aa01a0fadfe8bf92$var$cacheDigits) {
        const k = 10 ** d;
        $aa01a0fadfe8bf92$var$cacheDigits = d;
        $aa01a0fadfe8bf92$var$cacheAppend = function append(strings) {
            let i = 1;
            this._ += strings[0];
            for(const j = strings.length; i < j; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
        };
    }
    return $aa01a0fadfe8bf92$var$cacheAppend;
}


function $1def6ef096f3a138$export$2e2bcd8739ae039(projection, context) {
    let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
        if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, projectionStream(contextStream));
        }
        return contextStream.result();
    }
    path.area = function(object) {
        (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, projectionStream((0, $0921d6efe28cd38f$export$2e2bcd8739ae039)));
        return (0, $0921d6efe28cd38f$export$2e2bcd8739ae039).result();
    };
    path.measure = function(object) {
        (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, projectionStream((0, $3ee85a89eadadb7d$export$2e2bcd8739ae039)));
        return (0, $3ee85a89eadadb7d$export$2e2bcd8739ae039).result();
    };
    path.bounds = function(object) {
        (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, projectionStream((0, $27dc7f00db575680$export$2e2bcd8739ae039)));
        return (0, $27dc7f00db575680$export$2e2bcd8739ae039).result();
    };
    path.centroid = function(object) {
        (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, projectionStream((0, $5505193685d49c20$export$2e2bcd8739ae039)));
        return (0, $5505193685d49c20$export$2e2bcd8739ae039).result();
    };
    path.projection = function(_) {
        if (!arguments.length) return projection;
        projectionStream = _ == null ? (projection = null, $d9f8fbe6b8a6e552$export$2e2bcd8739ae039) : (projection = _).stream;
        return path;
    };
    path.context = function(_) {
        if (!arguments.length) return context;
        contextStream = _ == null ? (context = null, new (0, $aa01a0fadfe8bf92$export$2e2bcd8739ae039)(digits)) : new (0, $23dc4807e20568b9$export$2e2bcd8739ae039)(context = _);
        if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
        return path;
    };
    path.pointRadius = function(_) {
        if (!arguments.length) return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
    };
    path.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) digits = null;
        else {
            const d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
            digits = d;
        }
        if (context === null) contextStream = new (0, $aa01a0fadfe8bf92$export$2e2bcd8739ae039)(digits);
        return path;
    };
    return path.projection(projection).digits(digits).context(context);
}











function $2b15a5909b055d80$export$2e2bcd8739ae039(methods) {
    return {
        stream: $2b15a5909b055d80$export$6b468dcfb64c653c(methods)
    };
}
function $2b15a5909b055d80$export$6b468dcfb64c653c(methods) {
    return function(stream) {
        var s = new $2b15a5909b055d80$var$TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function $2b15a5909b055d80$var$TransformStream() {}
$2b15a5909b055d80$var$TransformStream.prototype = {
    constructor: $2b15a5909b055d80$var$TransformStream,
    point: function(x, y) {
        this.stream.point(x, y);
    },
    sphere: function() {
        this.stream.sphere();
    },
    lineStart: function() {
        this.stream.lineStart();
    },
    lineEnd: function() {
        this.stream.lineEnd();
    },
    polygonStart: function() {
        this.stream.polygonStart();
    },
    polygonEnd: function() {
        this.stream.polygonEnd();
    }
};




function $350dfbb40721af7e$var$fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, $86c40d7621813f22$export$2e2bcd8739ae039)(object, projection.stream((0, $27dc7f00db575680$export$2e2bcd8739ae039)));
    fitBounds((0, $27dc7f00db575680$export$2e2bcd8739ae039).result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function $350dfbb40721af7e$export$e450184041869e7f(projection, extent, object) {
    return $350dfbb40721af7e$var$fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function $350dfbb40721af7e$export$33a367fa1728c3ba(projection, size, object) {
    return $350dfbb40721af7e$export$e450184041869e7f(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function $350dfbb40721af7e$export$7d8f2192ef31c5a7(projection, width, object) {
    return $350dfbb40721af7e$var$fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function $350dfbb40721af7e$export$7069bab0d2ced675(projection, height, object) {
    return $350dfbb40721af7e$var$fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}





var $3b8efe74ff32794d$var$maxDepth = 16, $3b8efe74ff32794d$var$cosMinDistance = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(30 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc)); // cos(minimum angular distance)
function $3b8efe74ff32794d$export$2e2bcd8739ae039(project, delta2) {
    return +delta2 ? $3b8efe74ff32794d$var$resample(project, delta2) : $3b8efe74ff32794d$var$resampleNone(project);
}
function $3b8efe74ff32794d$var$resampleNone(project) {
    return (0, $2b15a5909b055d80$export$6b468dcfb64c653c)({
        point: function(x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
        }
    });
}
function $3b8efe74ff32794d$var$resample(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(a * a + b * b + c * c), phi2 = (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(c /= m), lambda2 = (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(c) - 1) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) || (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(lambda0 - lambda1) < (0, $5dea8ae1ded860af$export$6c421550c66a327d) ? (lambda0 + lambda1) / 2 : (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
             || a0 * a1 + b0 * b1 + c0 * c1 < $3b8efe74ff32794d$var$cosMinDistance) {
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
        }
    }
    return function(stream) {
        var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0; // previous point
        var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
            },
            polygonEnd: function() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
            }
        };
        function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
        }
        function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
        }
        function linePoint(lambda, phi) {
            var c = (0, $98abb30d5a123775$export$6e6697ef026a96)([
                lambda,
                phi
            ]), p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], $3b8efe74ff32794d$var$maxDepth, stream);
            stream.point(x0, y0);
        }
        function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
        }
        function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
        }
        function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
        }
        function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, $3b8efe74ff32794d$var$maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
        }
        return resampleStream;
    };
}


var $7939cc7fef81cdd2$var$transformRadians = (0, $2b15a5909b055d80$export$6b468dcfb64c653c)({
    point: function(x, y) {
        this.stream.point(x * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), y * (0, $5dea8ae1ded860af$export$8449e153fbd325fc));
    }
});
function $7939cc7fef81cdd2$var$transformRotate(rotate) {
    return (0, $2b15a5909b055d80$export$6b468dcfb64c653c)({
        point: function(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function $7939cc7fef81cdd2$var$scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function $7939cc7fef81cdd2$var$scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return $7939cc7fef81cdd2$var$scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(alpha), sinAlpha = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function $7939cc7fef81cdd2$export$2e2bcd8739ae039(project) {
    return $7939cc7fef81cdd2$export$155d5a6fa6fddeba(function() {
        return project;
    })();
}
function $7939cc7fef81cdd2$export$155d5a6fa6fddeba(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = (0, $08876774f8010588$export$2e2bcd8739ae039), x0 = null, y0, x1, y1, postclip = (0, $d9f8fbe6b8a6e552$export$2e2bcd8739ae039), delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), point[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc));
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            point[1] * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
        ];
    }
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = $7939cc7fef81cdd2$var$transformRadians($7939cc7fef81cdd2$var$transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? (0, $2e2a8e97e3b7f602$export$2e2bcd8739ae039)(theta = _ * (0, $5dea8ae1ded860af$export$8449e153fbd325fc)) : (theta = null, $08876774f8010588$export$2e2bcd8739ae039), reset()) : theta * (0, $5dea8ae1ded860af$export$41fc368e1a942b97);
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, $d9f8fbe6b8a6e552$export$2e2bcd8739ae039) : (0, $079ab3b5422c118d$export$2e2bcd8739ae039)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi = _[1] % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), recenter()) : [
            lambda * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            phi * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), deltaPhi = _[1] % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), deltaGamma = _.length > 2 ? _[2] % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc) : 0, recenter()) : [
            deltaLambda * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            deltaPhi * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            deltaGamma * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), recenter()) : alpha * (0, $5dea8ae1ded860af$export$41fc368e1a942b97);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = (0, $3b8efe74ff32794d$export$2e2bcd8739ae039)(projectTransform, delta2 = _ * _), reset()) : (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return (0, $350dfbb40721af7e$export$e450184041869e7f)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, $350dfbb40721af7e$export$33a367fa1728c3ba)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, $350dfbb40721af7e$export$7d8f2192ef31c5a7)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, $350dfbb40721af7e$export$7069bab0d2ced675)(projection, height, object);
    };
    function recenter() {
        var center = $7939cc7fef81cdd2$var$scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = $7939cc7fef81cdd2$var$scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = (0, $18c45c29f98b48c9$export$a2ba89726971a90f)(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = (0, $4e8285a3097e4648$export$2e2bcd8739ae039)(project, transform);
        projectRotateTransform = (0, $4e8285a3097e4648$export$2e2bcd8739ae039)(rotate, projectTransform);
        projectResample = (0, $3b8efe74ff32794d$export$2e2bcd8739ae039)(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return recenter();
    };
}


function $cb0d5fe7b532b70f$export$228272587c4d24d8(projectAt) {
    var phi0 = 0, phi1 = (0, $5dea8ae1ded860af$export$18c7bea995a110f) / 3, m = (0, $7939cc7fef81cdd2$export$155d5a6fa6fddeba)(projectAt), p = m(phi0, phi1);
    p.parallels = function(_) {
        return arguments.length ? m(phi0 = _[0] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), phi1 = _[1] * (0, $5dea8ae1ded860af$export$8449e153fbd325fc)) : [
            phi0 * (0, $5dea8ae1ded860af$export$41fc368e1a942b97),
            phi1 * (0, $5dea8ae1ded860af$export$41fc368e1a942b97)
        ];
    };
    return p;
}



function $73dcce3c194739a5$export$ae68c6db8b65046a(phi0) {
    var cosPhi0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(y * cosPhi0)
        ];
    };
    return forward;
}


function $247d5672d419dc3a$export$75409dad1c406288(y0, y1) {
    var sy0 = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y0), n = (sy0 + (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(n) < (0, $5dea8ae1ded860af$export$6c421550c66a327d)) return (0, $73dcce3c194739a5$export$ae68c6db8b65046a)(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(c) / n;
    function project(x, y) {
        var r = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(c - 2 * n * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y)) / n;
        return [
            r * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x *= n),
            r0 - r * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(x)
        ];
    }
    project.invert = function(x, y) {
        var r0y = r0 - y, l = (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(x, (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(r0y)) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(r0y);
        if (r0y * n < 0) l -= (0, $5dea8ae1ded860af$export$18c7bea995a110f) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(x) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(r0y);
        return [
            l / n,
            (0, $5dea8ae1ded860af$export$41726bdb1fc63f)((c - (x * x + r0y * r0y) * n * n) / (2 * n))
        ];
    };
    return project;
}
function $247d5672d419dc3a$export$2e2bcd8739ae039() {
    return (0, $cb0d5fe7b532b70f$export$228272587c4d24d8)($247d5672d419dc3a$export$75409dad1c406288).scale(155.424).center([
        0,
        33.6442
    ]);
}


function $ad66be5f13c2274e$export$2e2bcd8739ae039() {
    return (0, $247d5672d419dc3a$export$2e2bcd8739ae039)().parallels([
        29.5,
        45.5
    ]).scale(1070).translate([
        480,
        250
    ]).rotate([
        96,
        0
    ]).center([
        -0.6,
        38.7
    ]);
}






// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function $b56415f1b8940fb1$var$multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}
function $b56415f1b8940fb1$export$2e2bcd8739ae039() {
    var cache, cacheStream, lower48 = (0, $ad66be5f13c2274e$export$2e2bcd8739ae039)(), lower48Point, alaska = (0, $247d5672d419dc3a$export$2e2bcd8739ae039)().rotate([
        154,
        0
    ]).center([
        -2,
        58.5
    ]).parallels([
        55,
        65
    ]), alaskaPoint, hawaii = (0, $247d5672d419dc3a$export$2e2bcd8739ae039)().rotate([
        157,
        0
    ]).center([
        -3,
        19.9
    ]).parallels([
        8,
        18
    ]), hawaiiPoint, point, pointStream = {
        point: function(x, y) {
            point = [
                x,
                y
            ];
        }
    };
    function albersUsa(coordinates) {
        var x = coordinates[0], y = coordinates[1];
        return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
    }
    albersUsa.invert = function(coordinates) {
        var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
        return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = $b56415f1b8940fb1$var$multiplex([
            lower48.stream(cacheStream = stream),
            alaska.stream(stream),
            hawaii.stream(stream)
        ]);
    };
    albersUsa.precision = function(_) {
        if (!arguments.length) return lower48.precision();
        lower48.precision(_), alaska.precision(_), hawaii.precision(_);
        return reset();
    };
    albersUsa.scale = function(_) {
        if (!arguments.length) return lower48.scale();
        lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
        return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
        if (!arguments.length) return lower48.translate();
        var k = lower48.scale(), x = +_[0], y = +_[1];
        lower48Point = lower48.translate(_).clipExtent([
            [
                x - 0.455 * k,
                y - 0.238 * k
            ],
            [
                x + 0.455 * k,
                y + 0.238 * k
            ]
        ]).stream(pointStream);
        alaskaPoint = alaska.translate([
            x - 0.307 * k,
            y + 0.201 * k
        ]).clipExtent([
            [
                x - 0.425 * k + (0, $5dea8ae1ded860af$export$6c421550c66a327d),
                y + 0.120 * k + (0, $5dea8ae1ded860af$export$6c421550c66a327d)
            ],
            [
                x - 0.214 * k - (0, $5dea8ae1ded860af$export$6c421550c66a327d),
                y + 0.234 * k - (0, $5dea8ae1ded860af$export$6c421550c66a327d)
            ]
        ]).stream(pointStream);
        hawaiiPoint = hawaii.translate([
            x - 0.205 * k,
            y + 0.212 * k
        ]).clipExtent([
            [
                x - 0.214 * k + (0, $5dea8ae1ded860af$export$6c421550c66a327d),
                y + 0.166 * k + (0, $5dea8ae1ded860af$export$6c421550c66a327d)
            ],
            [
                x - 0.115 * k - (0, $5dea8ae1ded860af$export$6c421550c66a327d),
                y + 0.234 * k - (0, $5dea8ae1ded860af$export$6c421550c66a327d)
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUsa.fitExtent = function(extent, object) {
        return (0, $350dfbb40721af7e$export$e450184041869e7f)(albersUsa, extent, object);
    };
    albersUsa.fitSize = function(size, object) {
        return (0, $350dfbb40721af7e$export$33a367fa1728c3ba)(albersUsa, size, object);
    };
    albersUsa.fitWidth = function(width, object) {
        return (0, $350dfbb40721af7e$export$7d8f2192ef31c5a7)(albersUsa, width, object);
    };
    albersUsa.fitHeight = function(height, object) {
        return (0, $350dfbb40721af7e$export$7069bab0d2ced675)(albersUsa, height, object);
    };
    function reset() {
        cache = cacheStream = null;
        return albersUsa;
    }
    return albersUsa.scale(1070);
}




function $879039b753fff047$export$f1211ac1bdb0796(scale) {
    return function(x, y) {
        var cx = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(x), cy = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y), k = scale(cx * cy);
        if (k === Infinity) return [
            2,
            0
        ];
        return [
            k * cy * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x),
            k * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y)
        ];
    };
}
function $879039b753fff047$export$3cee429f13e44eac(angle) {
    return function(x, y) {
        var z = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(x * x + y * y), c = angle(z), sc = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(c), cc = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(c);
        return [
            (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(x * sc, z * cc),
            (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(z && y * sc / z)
        ];
    };
}



var $26b5b46263fee06c$export$5e11f94fc4a8d2c6 = (0, $879039b753fff047$export$f1211ac1bdb0796)(function(cxcy) {
    return (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(2 / (1 + cxcy));
});
$26b5b46263fee06c$export$5e11f94fc4a8d2c6.invert = (0, $879039b753fff047$export$3cee429f13e44eac)(function(z) {
    return 2 * (0, $5dea8ae1ded860af$export$41726bdb1fc63f)(z / 2);
});
function $26b5b46263fee06c$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($26b5b46263fee06c$export$5e11f94fc4a8d2c6).scale(124.75).clipAngle(179.999);
}





var $3dda52ae786f503c$export$b94a4d6aa3dd25c = (0, $879039b753fff047$export$f1211ac1bdb0796)(function(c) {
    return (c = (0, $5dea8ae1ded860af$export$fd6306be3fde5b04)(c)) && c / (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(c);
});
$3dda52ae786f503c$export$b94a4d6aa3dd25c.invert = (0, $879039b753fff047$export$3cee429f13e44eac)(function(z) {
    return z;
});
function $3dda52ae786f503c$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($3dda52ae786f503c$export$b94a4d6aa3dd25c).scale(79.4188).clipAngle(179.999);
}







function $17661af7bd1d47ea$export$94ff8a57e9b91cc3(lambda, phi) {
    return [
        lambda,
        (0, $5dea8ae1ded860af$export$bef1f36f5486a6a3)((0, $5dea8ae1ded860af$export$fcdd3b0b3246a325)(((0, $5dea8ae1ded860af$export$e51408a300e8929a) + phi) / 2))
    ];
}
$17661af7bd1d47ea$export$94ff8a57e9b91cc3.invert = function(x, y) {
    return [
        x,
        2 * (0, $5dea8ae1ded860af$export$628dc4eed22b0fbd)((0, $5dea8ae1ded860af$export$b310ec824aaee37f)(y)) - (0, $5dea8ae1ded860af$export$e51408a300e8929a)
    ];
};
function $17661af7bd1d47ea$export$2e2bcd8739ae039() {
    return $17661af7bd1d47ea$export$44b9b66a01f2127b($17661af7bd1d47ea$export$94ff8a57e9b91cc3).scale(961 / (0, $5dea8ae1ded860af$export$a4b4b4d4d776fe92));
}
function $17661af7bd1d47ea$export$44b9b66a01f2127b(project) {
    var m = (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1; // clip extent
    m.scale = function(_) {
        return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function(_) {
        return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function(_) {
        return arguments.length ? (center(_), reclip()) : center();
    };
    m.clipExtent = function(_) {
        return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    function reclip() {
        var k = (0, $5dea8ae1ded860af$export$18c7bea995a110f) * scale(), t = m((0, $18c45c29f98b48c9$export$2e2bcd8739ae039)(m.rotate()).invert([
            0,
            0
        ]));
        return clipExtent(x0 == null ? [
            [
                t[0] - k,
                t[1] - k
            ],
            [
                t[0] + k,
                t[1] + k
            ]
        ] : project === $17661af7bd1d47ea$export$94ff8a57e9b91cc3 ? [
            [
                Math.max(t[0] - k, x0),
                y0
            ],
            [
                Math.min(t[0] + k, x1),
                y1
            ]
        ] : [
            [
                x0,
                Math.max(t[1] - k, y0)
            ],
            [
                x1,
                Math.min(t[1] + k, y1)
            ]
        ]);
    }
    return reclip();
}


function $cb27732f4b386578$var$tany(y) {
    return (0, $5dea8ae1ded860af$export$fcdd3b0b3246a325)(((0, $5dea8ae1ded860af$export$e51408a300e8929a) + y) / 2);
}
function $cb27732f4b386578$export$2b1bc913962ed170(y0, y1) {
    var cy0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y0), n = y0 === y1 ? (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y0) : (0, $5dea8ae1ded860af$export$bef1f36f5486a6a3)(cy0 / (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y1)) / (0, $5dea8ae1ded860af$export$bef1f36f5486a6a3)($cb27732f4b386578$var$tany(y1) / $cb27732f4b386578$var$tany(y0)), f = cy0 * (0, $5dea8ae1ded860af$export$9c297f60e22e3389)($cb27732f4b386578$var$tany(y0), n) / n;
    if (!n) return 0, $17661af7bd1d47ea$export$94ff8a57e9b91cc3;
    function project(x, y) {
        if (f > 0) {
            if (y < -(0, $5dea8ae1ded860af$export$e51408a300e8929a) + (0, $5dea8ae1ded860af$export$6c421550c66a327d)) y = -(0, $5dea8ae1ded860af$export$e51408a300e8929a) + (0, $5dea8ae1ded860af$export$6c421550c66a327d);
        } else if (y > (0, $5dea8ae1ded860af$export$e51408a300e8929a) - (0, $5dea8ae1ded860af$export$6c421550c66a327d)) y = (0, $5dea8ae1ded860af$export$e51408a300e8929a) - (0, $5dea8ae1ded860af$export$6c421550c66a327d);
        var r = f / (0, $5dea8ae1ded860af$export$9c297f60e22e3389)($cb27732f4b386578$var$tany(y), n);
        return [
            r * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(n * x),
            f - r * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(n * x)
        ];
    }
    project.invert = function(x, y) {
        var fy = f - y, r = (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(n) * (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(x * x + fy * fy), l = (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(x, (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(fy)) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(fy);
        if (fy * n < 0) l -= (0, $5dea8ae1ded860af$export$18c7bea995a110f) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(x) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(fy);
        return [
            l / n,
            2 * (0, $5dea8ae1ded860af$export$628dc4eed22b0fbd)((0, $5dea8ae1ded860af$export$9c297f60e22e3389)(f / r, 1 / n)) - (0, $5dea8ae1ded860af$export$e51408a300e8929a)
        ];
    };
    return project;
}
function $cb27732f4b386578$export$2e2bcd8739ae039() {
    return (0, $cb0d5fe7b532b70f$export$228272587c4d24d8)($cb27732f4b386578$export$2b1bc913962ed170).scale(109.5).parallels([
        30,
        30
    ]);
}






function $8f7d76a29f1a304d$export$f5fee52180f2f058(lambda, phi) {
    return [
        lambda,
        phi
    ];
}
$8f7d76a29f1a304d$export$f5fee52180f2f058.invert = $8f7d76a29f1a304d$export$f5fee52180f2f058;
function $8f7d76a29f1a304d$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($8f7d76a29f1a304d$export$f5fee52180f2f058).scale(152.63);
}


function $c3c46b079ebb4bf6$export$24f604fe80e5f192(y0, y1) {
    var cy0 = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y0), n = y0 === y1 ? (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y0) : (cy0 - (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y1)) / (y1 - y0), g = cy0 / n + y0;
    if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(n) < (0, $5dea8ae1ded860af$export$6c421550c66a327d)) return 0, $8f7d76a29f1a304d$export$f5fee52180f2f058;
    function project(x, y) {
        var gy = g - y, nx = n * x;
        return [
            gy * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(nx),
            g - gy * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(nx)
        ];
    }
    project.invert = function(x, y) {
        var gy = g - y, l = (0, $5dea8ae1ded860af$export$b8b770ee6a0d9760)(x, (0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(gy)) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(gy);
        if (gy * n < 0) l -= (0, $5dea8ae1ded860af$export$18c7bea995a110f) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(x) * (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(gy);
        return [
            l / n,
            g - (0, $5dea8ae1ded860af$export$c5552dfdbc7cec71)(n) * (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(x * x + gy * gy)
        ];
    };
    return project;
}
function $c3c46b079ebb4bf6$export$2e2bcd8739ae039() {
    return (0, $cb0d5fe7b532b70f$export$228272587c4d24d8)($c3c46b079ebb4bf6$export$24f604fe80e5f192).scale(131.154).center([
        0,
        13.9389
    ]);
}




var $907387d92a4d10f5$var$A1 = 1.340264, $907387d92a4d10f5$var$A2 = -0.081106, $907387d92a4d10f5$var$A3 = 0.000893, $907387d92a4d10f5$var$A4 = 0.003796, $907387d92a4d10f5$var$M = (0, $5dea8ae1ded860af$export$eba8049fb5020b81)(3) / 2, $907387d92a4d10f5$var$iterations = 12;
function $907387d92a4d10f5$export$a320734067e7a731(lambda, phi) {
    var l = (0, $5dea8ae1ded860af$export$41726bdb1fc63f)($907387d92a4d10f5$var$M * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(phi)), l2 = l * l, l6 = l2 * l2 * l2;
    return [
        lambda * (0, $5dea8ae1ded860af$export$50d414a77b60d802)(l) / ($907387d92a4d10f5$var$M * ($907387d92a4d10f5$var$A1 + 3 * $907387d92a4d10f5$var$A2 * l2 + l6 * (7 * $907387d92a4d10f5$var$A3 + 9 * $907387d92a4d10f5$var$A4 * l2))),
        l * ($907387d92a4d10f5$var$A1 + $907387d92a4d10f5$var$A2 * l2 + l6 * ($907387d92a4d10f5$var$A3 + $907387d92a4d10f5$var$A4 * l2))
    ];
}
$907387d92a4d10f5$export$a320734067e7a731.invert = function(x, y) {
    var l = y, l2 = l * l, l6 = l2 * l2 * l2;
    for(var i = 0, delta, fy, fpy; i < $907387d92a4d10f5$var$iterations; ++i){
        fy = l * ($907387d92a4d10f5$var$A1 + $907387d92a4d10f5$var$A2 * l2 + l6 * ($907387d92a4d10f5$var$A3 + $907387d92a4d10f5$var$A4 * l2)) - y;
        fpy = $907387d92a4d10f5$var$A1 + 3 * $907387d92a4d10f5$var$A2 * l2 + l6 * (7 * $907387d92a4d10f5$var$A3 + 9 * $907387d92a4d10f5$var$A4 * l2);
        l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
        if ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(delta) < (0, $5dea8ae1ded860af$export$92c06fba281fe81b)) break;
    }
    return [
        $907387d92a4d10f5$var$M * x * ($907387d92a4d10f5$var$A1 + 3 * $907387d92a4d10f5$var$A2 * l2 + l6 * (7 * $907387d92a4d10f5$var$A3 + 9 * $907387d92a4d10f5$var$A4 * l2)) / (0, $5dea8ae1ded860af$export$50d414a77b60d802)(l),
        (0, $5dea8ae1ded860af$export$41726bdb1fc63f)((0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(l) / $907387d92a4d10f5$var$M)
    ];
};
function $907387d92a4d10f5$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($907387d92a4d10f5$export$a320734067e7a731).scale(177.158);
}






function $9b81cb29fe536616$export$dc8c6ddfc8b22c85(x, y) {
    var cy = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y), k = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(x) * cy;
    return [
        cy * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x) / k,
        (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y) / k
    ];
}
$9b81cb29fe536616$export$dc8c6ddfc8b22c85.invert = (0, $879039b753fff047$export$3cee429f13e44eac)((0, $5dea8ae1ded860af$export$628dc4eed22b0fbd));
function $9b81cb29fe536616$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($9b81cb29fe536616$export$dc8c6ddfc8b22c85).scale(144.049).clipAngle(60);
}







function $2a16c4d7e0e09e03$export$2e2bcd8739ae039() {
    var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x0 = null, y0, x1, y1, kx = 1, ky = 1, transform = (0, $2b15a5909b055d80$export$6b468dcfb64c653c)({
        point: function(x, y) {
            var p = projection([
                x,
                y
            ]);
            this.stream.point(p[0], p[1]);
        }
    }), postclip = (0, $d9f8fbe6b8a6e552$export$2e2bcd8739ae039), cache, cacheStream;
    function reset() {
        kx = k * sx;
        ky = k * sy;
        cache = cacheStream = null;
        return projection;
    }
    function projection(p) {
        var x = p[0] * kx, y = p[1] * ky;
        if (alpha) {
            var t = y * ca - x * sa;
            x = x * ca + y * sa;
            y = t;
        }
        return [
            x + tx,
            y + ty
        ];
    }
    projection.invert = function(p) {
        var x = p[0] - tx, y = p[1] - ty;
        if (alpha) {
            var t = y * ca + x * sa;
            x = x * ca - y * sa;
            y = t;
        }
        return [
            x / kx,
            y / ky
        ];
    };
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, $d9f8fbe6b8a6e552$export$2e2bcd8739ae039) : (0, $079ab3b5422c118d$export$2e2bcd8739ae039)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, reset()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [
            tx,
            ty
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, $5dea8ae1ded860af$export$8449e153fbd325fc), sa = (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(alpha), ca = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(alpha), reset()) : alpha * (0, $5dea8ae1ded860af$export$41fc368e1a942b97);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
    };
    projection.fitExtent = function(extent, object) {
        return (0, $350dfbb40721af7e$export$e450184041869e7f)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, $350dfbb40721af7e$export$33a367fa1728c3ba)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, $350dfbb40721af7e$export$7d8f2192ef31c5a7)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, $350dfbb40721af7e$export$7069bab0d2ced675)(projection, height, object);
    };
    return projection;
}






function $9d5b9cc247724181$export$acb6def22fe878e6(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    return [
        lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
        phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
    ];
}
$9d5b9cc247724181$export$acb6def22fe878e6.invert = function(x, y) {
    var phi = y, i = 25, delta;
    do {
        var phi2 = phi * phi, phi4 = phi2 * phi2;
        phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.045255 + phi4 * (-0.311325 + 0.259866 * phi2 - 0.005916 * 11 * phi4)));
    }while ((0, $5dea8ae1ded860af$export$2335f513bbd82c6d)(delta) > (0, $5dea8ae1ded860af$export$6c421550c66a327d) && --i > 0);
    return [
        x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
        phi
    ];
};
function $9d5b9cc247724181$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($9d5b9cc247724181$export$acb6def22fe878e6).scale(175.295);
}





function $2e148fe3775c2a13$export$1cd9c2eb846182a(x, y) {
    return [
        (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y) * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x),
        (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y)
    ];
}
$2e148fe3775c2a13$export$1cd9c2eb846182a.invert = (0, $879039b753fff047$export$3cee429f13e44eac)((0, $5dea8ae1ded860af$export$41726bdb1fc63f));
function $2e148fe3775c2a13$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($2e148fe3775c2a13$export$1cd9c2eb846182a).scale(249.5).clipAngle(90 + (0, $5dea8ae1ded860af$export$6c421550c66a327d));
}





function $75116b47e18447d3$export$f9ccbb0dcb3dcd2b(x, y) {
    var cy = (0, $5dea8ae1ded860af$export$50d414a77b60d802)(y), k = 1 + (0, $5dea8ae1ded860af$export$50d414a77b60d802)(x) * cy;
    return [
        cy * (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(x) / k,
        (0, $5dea8ae1ded860af$export$5de3937cb4b592ed)(y) / k
    ];
}
$75116b47e18447d3$export$f9ccbb0dcb3dcd2b.invert = (0, $879039b753fff047$export$3cee429f13e44eac)(function(z) {
    return 2 * (0, $5dea8ae1ded860af$export$628dc4eed22b0fbd)(z);
});
function $75116b47e18447d3$export$2e2bcd8739ae039() {
    return (0, $7939cc7fef81cdd2$export$2e2bcd8739ae039)($75116b47e18447d3$export$f9ccbb0dcb3dcd2b).scale(250).clipAngle(142);
}




function $77eca3c85abad8c7$export$e84942adec6de533(lambda, phi) {
    return [
        (0, $5dea8ae1ded860af$export$bef1f36f5486a6a3)((0, $5dea8ae1ded860af$export$fcdd3b0b3246a325)(((0, $5dea8ae1ded860af$export$e51408a300e8929a) + phi) / 2)),
        -lambda
    ];
}
$77eca3c85abad8c7$export$e84942adec6de533.invert = function(x, y) {
    return [
        -y,
        2 * (0, $5dea8ae1ded860af$export$628dc4eed22b0fbd)((0, $5dea8ae1ded860af$export$b310ec824aaee37f)(x)) - (0, $5dea8ae1ded860af$export$e51408a300e8929a)
    ];
};
function $77eca3c85abad8c7$export$2e2bcd8739ae039() {
    var m = (0, $17661af7bd1d47ea$export$44b9b66a01f2127b)($77eca3c85abad8c7$export$e84942adec6de533), center = m.center, rotate = m.rotate;
    m.center = function(_) {
        return arguments.length ? center([
            -_[1],
            _[0]
        ]) : (_ = center(), [
            _[1],
            -_[0]
        ]);
    };
    m.rotate = function(_) {
        return arguments.length ? rotate([
            _[0],
            _[1],
            _.length > 2 ? _[2] + 90 : 90
        ]) : (_ = rotate(), [
            _[0],
            _[1],
            _[2] - 90
        ]);
    };
    return rotate([
        0,
        0,
        90
    ]).scale(159.155);
}







var $36968d736655ff46$exports = {};

$parcel$export($36968d736655ff46$exports, "cluster", () => $39c7100d4d12d0b9$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "hierarchy", () => $e78fbd219558c3f4$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "Node", () => $e78fbd219558c3f4$export$85c928794f8d04d4);
$parcel$export($36968d736655ff46$exports, "pack", () => $951c134ff402cff4$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "packSiblings", () => $9617e720c818cf1f$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "packEnclose", () => $f7d535be6663aff4$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "partition", () => $574c1be1de567628$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "stratify", () => $ab9333668ad55743$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "tree", () => $5246666f3dd85838$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemap", () => $00bfb66349df5856$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemapBinary", () => $91cb0f791101a3aa$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemapDice", () => $76af0eac27ab3eae$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemapSlice", () => $1fb63ce1782d45f0$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemapSliceDice", () => $89827f4599edd418$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemapSquarify", () => $7dc09930ade9799f$export$2e2bcd8739ae039);
$parcel$export($36968d736655ff46$exports, "treemapResquarify", () => $e83f4a7fc71f7e4e$export$2e2bcd8739ae039);
function $39c7100d4d12d0b9$var$defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
}
function $39c7100d4d12d0b9$var$meanX(children) {
    return children.reduce($39c7100d4d12d0b9$var$meanXReduce, 0) / children.length;
}
function $39c7100d4d12d0b9$var$meanXReduce(x, c) {
    return x + c.x;
}
function $39c7100d4d12d0b9$var$maxY(children) {
    return 1 + children.reduce($39c7100d4d12d0b9$var$maxYReduce, 0);
}
function $39c7100d4d12d0b9$var$maxYReduce(y, c) {
    return Math.max(y, c.y);
}
function $39c7100d4d12d0b9$var$leafLeft(node) {
    var children;
    while(children = node.children)node = children[0];
    return node;
}
function $39c7100d4d12d0b9$var$leafRight(node) {
    var children;
    while(children = node.children)node = children[children.length - 1];
    return node;
}
function $39c7100d4d12d0b9$export$2e2bcd8739ae039() {
    var separation = $39c7100d4d12d0b9$var$defaultSeparation, dx = 1, dy = 1, nodeSize = false;
    function cluster(root) {
        var previousNode, x = 0;
        // First walk, computing the initial x & y values.
        root.eachAfter(function(node) {
            var children = node.children;
            if (children) {
                node.x = $39c7100d4d12d0b9$var$meanX(children);
                node.y = $39c7100d4d12d0b9$var$maxY(children);
            } else {
                node.x = previousNode ? x += separation(node, previousNode) : 0;
                node.y = 0;
                previousNode = node;
            }
        });
        var left = $39c7100d4d12d0b9$var$leafLeft(root), right = $39c7100d4d12d0b9$var$leafRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
        // Second walk, normalizing x & y to the desired size.
        return root.eachAfter(nodeSize ? function(node) {
            node.x = (node.x - root.x) * dx;
            node.y = (root.y - node.y) * dy;
        } : function(node) {
            node.x = (node.x - x0) / (x1 - x0) * dx;
            node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
        });
    }
    cluster.separation = function(x) {
        return arguments.length ? (separation = x, cluster) : separation;
    };
    cluster.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [
            dx,
            dy
        ];
    };
    cluster.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [
            dx,
            dy
        ] : null;
    };
    return cluster;
}


function $bbc02e00581d57a4$var$count(node) {
    var sum = 0, children = node.children, i = children && children.length;
    if (!i) sum = 1;
    else while(--i >= 0)sum += children[i].value;
    node.value = sum;
}
function $bbc02e00581d57a4$export$2e2bcd8739ae039() {
    return this.eachAfter($bbc02e00581d57a4$var$count);
}


function $93ac4b2af2ae1e71$export$2e2bcd8739ae039(callback, that) {
    let index = -1;
    for (const node of this)callback.call(that, node, ++index, this);
    return this;
}


function $7d502190f318036a$export$2e2bcd8739ae039(callback, that) {
    var node = this, nodes = [
        node
    ], children, i, index = -1;
    while(node = nodes.pop()){
        callback.call(that, node, ++index, this);
        if (children = node.children) for(i = children.length - 1; i >= 0; --i)nodes.push(children[i]);
    }
    return this;
}


function $bfd2654f6466a686$export$2e2bcd8739ae039(callback, that) {
    var node = this, nodes = [
        node
    ], next = [], children, i, n, index = -1;
    while(node = nodes.pop()){
        next.push(node);
        if (children = node.children) for(i = 0, n = children.length; i < n; ++i)nodes.push(children[i]);
    }
    while(node = next.pop())callback.call(that, node, ++index, this);
    return this;
}


function $0fc020dda98ca237$export$2e2bcd8739ae039(callback, that) {
    let index = -1;
    for (const node of this){
        if (callback.call(that, node, ++index, this)) return node;
    }
}


function $0d68989ece047661$export$2e2bcd8739ae039(value) {
    return this.eachAfter(function(node) {
        var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
        while(--i >= 0)sum += children[i].value;
        node.value = sum;
    });
}


function $787092715da7ca6c$export$2e2bcd8739ae039(compare) {
    return this.eachBefore(function(node) {
        if (node.children) node.children.sort(compare);
    });
}


function $250e0562c42e4f4f$export$2e2bcd8739ae039(end) {
    var start = this, ancestor = $250e0562c42e4f4f$var$leastCommonAncestor(start, end), nodes = [
        start
    ];
    while(start !== ancestor){
        start = start.parent;
        nodes.push(start);
    }
    var k = nodes.length;
    while(end !== ancestor){
        nodes.splice(k, 0, end);
        end = end.parent;
    }
    return nodes;
}
function $250e0562c42e4f4f$var$leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while(a === b){
        c = a;
        a = aNodes.pop();
        b = bNodes.pop();
    }
    return c;
}


function $961eedf35fec6634$export$2e2bcd8739ae039() {
    var node = this, nodes = [
        node
    ];
    while(node = node.parent)nodes.push(node);
    return nodes;
}


function $c7c6921332177839$export$2e2bcd8739ae039() {
    return Array.from(this);
}


function $31961ed10e788299$export$2e2bcd8739ae039() {
    var leaves = [];
    this.eachBefore(function(node) {
        if (!node.children) leaves.push(node);
    });
    return leaves;
}


function $33e011adcb1eeaf0$export$2e2bcd8739ae039() {
    var root = this, links = [];
    root.each(function(node) {
        if (node !== root) links.push({
            source: node.parent,
            target: node
        });
    });
    return links;
}


function* $d4d075691d7b951c$export$2e2bcd8739ae039() {
    var node = this, current, next = [
        node
    ], children, i, n;
    do {
        current = next.reverse(), next = [];
        while(node = current.pop()){
            yield node;
            if (children = node.children) for(i = 0, n = children.length; i < n; ++i)next.push(children[i]);
        }
    }while (next.length);
}


function $e78fbd219558c3f4$export$2e2bcd8739ae039(data, children) {
    if (data instanceof Map) {
        data = [
            undefined,
            data
        ];
        if (children === undefined) children = $e78fbd219558c3f4$var$mapChildren;
    } else if (children === undefined) children = $e78fbd219558c3f4$var$objectChildren;
    var root = new $e78fbd219558c3f4$export$85c928794f8d04d4(data), node, nodes = [
        root
    ], child, childs, i, n;
    while(node = nodes.pop())if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for(i = n - 1; i >= 0; --i){
            nodes.push(child = childs[i] = new $e78fbd219558c3f4$export$85c928794f8d04d4(childs[i]));
            child.parent = node;
            child.depth = node.depth + 1;
        }
    }
    return root.eachBefore($e78fbd219558c3f4$export$5af32d52ab5dfd57);
}
function $e78fbd219558c3f4$var$node_copy() {
    return $e78fbd219558c3f4$export$2e2bcd8739ae039(this).eachBefore($e78fbd219558c3f4$var$copyData);
}
function $e78fbd219558c3f4$var$objectChildren(d) {
    return d.children;
}
function $e78fbd219558c3f4$var$mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
}
function $e78fbd219558c3f4$var$copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
}
function $e78fbd219558c3f4$export$5af32d52ab5dfd57(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && node.height < ++height);
}
function $e78fbd219558c3f4$export$85c928794f8d04d4(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
}
$e78fbd219558c3f4$export$85c928794f8d04d4.prototype = $e78fbd219558c3f4$export$2e2bcd8739ae039.prototype = {
    constructor: $e78fbd219558c3f4$export$85c928794f8d04d4,
    count: (0, $bbc02e00581d57a4$export$2e2bcd8739ae039),
    each: (0, $93ac4b2af2ae1e71$export$2e2bcd8739ae039),
    eachAfter: (0, $bfd2654f6466a686$export$2e2bcd8739ae039),
    eachBefore: (0, $7d502190f318036a$export$2e2bcd8739ae039),
    find: (0, $0fc020dda98ca237$export$2e2bcd8739ae039),
    sum: (0, $0d68989ece047661$export$2e2bcd8739ae039),
    sort: (0, $787092715da7ca6c$export$2e2bcd8739ae039),
    path: (0, $250e0562c42e4f4f$export$2e2bcd8739ae039),
    ancestors: (0, $961eedf35fec6634$export$2e2bcd8739ae039),
    descendants: (0, $c7c6921332177839$export$2e2bcd8739ae039),
    leaves: (0, $31961ed10e788299$export$2e2bcd8739ae039),
    links: (0, $33e011adcb1eeaf0$export$2e2bcd8739ae039),
    copy: $e78fbd219558c3f4$var$node_copy,
    [Symbol.iterator]: (0, $d4d075691d7b951c$export$2e2bcd8739ae039)
};


function $e5241dce729ec9c6$export$516e28dec6a4b6d4(f) {
    return f == null ? null : $e5241dce729ec9c6$export$a7a0278c004aac3f(f);
}
function $e5241dce729ec9c6$export$a7a0278c004aac3f(f) {
    if (typeof f !== "function") throw new Error;
    return f;
}


function $00a6e88d508079f0$export$99e2e371aa6a9db() {
    return 0;
}
function $00a6e88d508079f0$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const $1cc81d68f67add23$var$a = 1664525;
const $1cc81d68f67add23$var$c = 1013904223;
const $1cc81d68f67add23$var$m = 4294967296; // 2^32
function $1cc81d68f67add23$export$2e2bcd8739ae039() {
    let s = 1;
    return ()=>(s = ($1cc81d68f67add23$var$a * s + $1cc81d68f67add23$var$c) % $1cc81d68f67add23$var$m) / $1cc81d68f67add23$var$m;
}


function $315b65b5d4c717ce$export$2e2bcd8739ae039(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}
function $315b65b5d4c717ce$export$448332262467e042(array, random) {
    let m = array.length, t, i;
    while(m){
        i = random() * m-- | 0;
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}





function $f7d535be6663aff4$export$2e2bcd8739ae039(circles) {
    return $f7d535be6663aff4$export$55712536b4d8ce73(circles, (0, $1cc81d68f67add23$export$2e2bcd8739ae039)());
}
function $f7d535be6663aff4$export$55712536b4d8ce73(circles, random) {
    var i = 0, n = (circles = (0, $315b65b5d4c717ce$export$448332262467e042)(Array.from(circles), random)).length, B = [], p, e;
    while(i < n){
        p = circles[i];
        if (e && $f7d535be6663aff4$var$enclosesWeak(e, p)) ++i;
        else e = $f7d535be6663aff4$var$encloseBasis(B = $f7d535be6663aff4$var$extendBasis(B, p)), i = 0;
    }
    return e;
}
function $f7d535be6663aff4$var$extendBasis(B, p) {
    var i, j;
    if ($f7d535be6663aff4$var$enclosesWeakAll(p, B)) return [
        p
    ];
    // If we get here then B must have at least one element.
    for(i = 0; i < B.length; ++i){
        if ($f7d535be6663aff4$var$enclosesNot(p, B[i]) && $f7d535be6663aff4$var$enclosesWeakAll($f7d535be6663aff4$var$encloseBasis2(B[i], p), B)) return [
            B[i],
            p
        ];
    }
    // If we get here then B must have at least two elements.
    for(i = 0; i < B.length - 1; ++i)for(j = i + 1; j < B.length; ++j){
        if ($f7d535be6663aff4$var$enclosesNot($f7d535be6663aff4$var$encloseBasis2(B[i], B[j]), p) && $f7d535be6663aff4$var$enclosesNot($f7d535be6663aff4$var$encloseBasis2(B[i], p), B[j]) && $f7d535be6663aff4$var$enclosesNot($f7d535be6663aff4$var$encloseBasis2(B[j], p), B[i]) && $f7d535be6663aff4$var$enclosesWeakAll($f7d535be6663aff4$var$encloseBasis3(B[i], B[j], p), B)) return [
            B[i],
            B[j],
            p
        ];
    }
    // If we get here then something is very wrong.
    throw new Error;
}
function $f7d535be6663aff4$var$enclosesNot(a, b) {
    var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function $f7d535be6663aff4$var$enclosesWeak(a, b) {
    var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function $f7d535be6663aff4$var$enclosesWeakAll(a, B) {
    for(var i = 0; i < B.length; ++i){
        if (!$f7d535be6663aff4$var$enclosesWeak(a, B[i])) return false;
    }
    return true;
}
function $f7d535be6663aff4$var$encloseBasis(B) {
    switch(B.length){
        case 1:
            return $f7d535be6663aff4$var$encloseBasis1(B[0]);
        case 2:
            return $f7d535be6663aff4$var$encloseBasis2(B[0], B[1]);
        case 3:
            return $f7d535be6663aff4$var$encloseBasis3(B[0], B[1], B[2]);
    }
}
function $f7d535be6663aff4$var$encloseBasis1(a) {
    return {
        x: a.x,
        y: a.y,
        r: a.r
    };
}
function $f7d535be6663aff4$var$encloseBasis2(a, b) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
        x: (x1 + x2 + x21 / l * r21) / 2,
        y: (y1 + y2 + y21 / l * r21) / 2,
        r: (l + r1 + r2) / 2
    };
}
function $f7d535be6663aff4$var$encloseBasis3(a, b, c) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x3 = c.x, y3 = c.y, r3 = c.r, a2 = x1 - x2, a3 = x1 - x3, b2 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b2 - a2 * b3, xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1, xb = (b3 * c2 - b2 * c3) / ab, ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1, yb = (a2 * c3 - a3 * c2) / ab, A = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C = xa * xa + ya * ya - r1 * r1, r = -(Math.abs(A) > 1e-6 ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
    return {
        x: x1 + xa + xb * r,
        y: y1 + ya + yb * r,
        r: r
    };
}


function $9617e720c818cf1f$var$place(b, a, c) {
    var dx = b.x - a.x, x, a2, dy = b.y - a.y, y, b2, d2 = dx * dx + dy * dy;
    if (d2) {
        a2 = a.r + c.r, a2 *= a2;
        b2 = b.r + c.r, b2 *= b2;
        if (a2 > b2) {
            x = (d2 + b2 - a2) / (2 * d2);
            y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
            c.x = b.x - x * dx - y * dy;
            c.y = b.y - x * dy + y * dx;
        } else {
            x = (d2 + a2 - b2) / (2 * d2);
            y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
            c.x = a.x + x * dx - y * dy;
            c.y = a.y + x * dy + y * dx;
        }
    } else {
        c.x = a.x + c.r;
        c.y = a.y;
    }
}
function $9617e720c818cf1f$var$intersects(a, b) {
    var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function $9617e720c818cf1f$var$score(node) {
    var a = node._, b = node.next._, ab = a.r + b.r, dx = (a.x * b.r + b.x * a.r) / ab, dy = (a.y * b.r + b.y * a.r) / ab;
    return dx * dx + dy * dy;
}
function $9617e720c818cf1f$var$Node(circle) {
    this._ = circle;
    this.next = null;
    this.previous = null;
}
function $9617e720c818cf1f$export$5390336473d877c8(circles, random) {
    if (!(n = (circles = (0, $315b65b5d4c717ce$export$2e2bcd8739ae039)(circles)).length)) return 0;
    var a, b, c, n, aa, ca, i, j, k, sj, sk;
    // Place the first circle.
    a = circles[0], a.x = 0, a.y = 0;
    if (!(n > 1)) return a.r;
    // Place the second circle.
    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
    if (!(n > 2)) return a.r + b.r;
    // Place the third circle.
    $9617e720c818cf1f$var$place(b, a, c = circles[2]);
    // Initialize the front-chain using the first three circles a, b and c.
    a = new $9617e720c818cf1f$var$Node(a), b = new $9617e720c818cf1f$var$Node(b), c = new $9617e720c818cf1f$var$Node(c);
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;
    // Attempt to place each remaining circle…
    pack: for(i = 3; i < n; ++i){
        $9617e720c818cf1f$var$place(a._, b._, c = circles[i]), c = new $9617e720c818cf1f$var$Node(c);
        // Find the closest intersecting circle on the front-chain, if any.
        // “Closeness” is determined by linear distance along the front-chain.
        // “Ahead” or “behind” is likewise determined by linear distance.
        j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
        do if (sj <= sk) {
            if ($9617e720c818cf1f$var$intersects(j._, c._)) {
                b = j, a.next = b, b.previous = a, --i;
                continue pack;
            }
            sj += j._.r, j = j.next;
        } else {
            if ($9617e720c818cf1f$var$intersects(k._, c._)) {
                a = k, a.next = b, b.previous = a, --i;
                continue pack;
            }
            sk += k._.r, k = k.previous;
        }
        while (j !== k.next);
        // Success! Insert the new circle c between a and b.
        c.previous = a, c.next = b, a.next = b.previous = b = c;
        // Compute the new closest circle pair to the centroid.
        aa = $9617e720c818cf1f$var$score(a);
        while((c = c.next) !== b)if ((ca = $9617e720c818cf1f$var$score(c)) < aa) a = c, aa = ca;
        b = a.next;
    }
    // Compute the enclosing circle of the front chain.
    a = [
        b._
    ], c = b;
    while((c = c.next) !== b)a.push(c._);
    c = (0, $f7d535be6663aff4$export$55712536b4d8ce73)(a, random);
    // Translate the circles to put the enclosing circle around the origin.
    for(i = 0; i < n; ++i)a = circles[i], a.x -= c.x, a.y -= c.y;
    return c.r;
}
function $9617e720c818cf1f$export$2e2bcd8739ae039(circles) {
    $9617e720c818cf1f$export$5390336473d877c8(circles, (0, $1cc81d68f67add23$export$2e2bcd8739ae039)());
    return circles;
}


function $951c134ff402cff4$var$defaultRadius(d) {
    return Math.sqrt(d.value);
}
function $951c134ff402cff4$export$2e2bcd8739ae039() {
    var radius = null, dx = 1, dy = 1, padding = (0, $00a6e88d508079f0$export$99e2e371aa6a9db);
    function pack(root) {
        const random = (0, $1cc81d68f67add23$export$2e2bcd8739ae039)();
        root.x = dx / 2, root.y = dy / 2;
        if (radius) root.eachBefore($951c134ff402cff4$var$radiusLeaf(radius)).eachAfter($951c134ff402cff4$var$packChildrenRandom(padding, 0.5, random)).eachBefore($951c134ff402cff4$var$translateChild(1));
        else root.eachBefore($951c134ff402cff4$var$radiusLeaf($951c134ff402cff4$var$defaultRadius)).eachAfter($951c134ff402cff4$var$packChildrenRandom((0, $00a6e88d508079f0$export$99e2e371aa6a9db), 1, random)).eachAfter($951c134ff402cff4$var$packChildrenRandom(padding, root.r / Math.min(dx, dy), random)).eachBefore($951c134ff402cff4$var$translateChild(Math.min(dx, dy) / (2 * root.r)));
        return root;
    }
    pack.radius = function(x) {
        return arguments.length ? (radius = (0, $e5241dce729ec9c6$export$516e28dec6a4b6d4)(x), pack) : radius;
    };
    pack.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [
            dx,
            dy
        ];
    };
    pack.padding = function(x) {
        return arguments.length ? (padding = typeof x === "function" ? x : (0, $00a6e88d508079f0$export$2e2bcd8739ae039)(+x), pack) : padding;
    };
    return pack;
}
function $951c134ff402cff4$var$radiusLeaf(radius) {
    return function(node) {
        if (!node.children) node.r = Math.max(0, +radius(node) || 0);
    };
}
function $951c134ff402cff4$var$packChildrenRandom(padding, k, random) {
    return function(node) {
        if (children = node.children) {
            var children, i, n = children.length, r = padding(node) * k || 0, e;
            if (r) for(i = 0; i < n; ++i)children[i].r += r;
            e = (0, $9617e720c818cf1f$export$5390336473d877c8)(children, random);
            if (r) for(i = 0; i < n; ++i)children[i].r -= r;
            node.r = e + r;
        }
    };
}
function $951c134ff402cff4$var$translateChild(k) {
    return function(node) {
        var parent = node.parent;
        node.r *= k;
        if (parent) {
            node.x = parent.x + k * node.x;
            node.y = parent.y + k * node.y;
        }
    };
}




function $03ec1b566eb9b92b$export$2e2bcd8739ae039(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
}


function $76af0eac27ab3eae$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value;
    while(++i < n){
        node = nodes[i], node.y0 = y0, node.y1 = y1;
        node.x0 = x0, node.x1 = x0 += node.value * k;
    }
}


function $574c1be1de567628$export$2e2bcd8739ae039() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root) {
        var n = root.height + 1;
        root.x0 = root.y0 = padding;
        root.x1 = dx;
        root.y1 = dy / n;
        root.eachBefore(positionNode(dy, n));
        if (round) root.eachBefore((0, $03ec1b566eb9b92b$export$2e2bcd8739ae039));
        return root;
    }
    function positionNode(dy, n) {
        return function(node) {
            if (node.children) (0, $76af0eac27ab3eae$export$2e2bcd8739ae039)(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
            var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            node.x0 = x0;
            node.y0 = y0;
            node.x1 = x1;
            node.y1 = y1;
        };
    }
    partition.round = function(x) {
        return arguments.length ? (round = !!x, partition) : round;
    };
    partition.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [
            dx,
            dy
        ];
    };
    partition.padding = function(x) {
        return arguments.length ? (padding = +x, partition) : padding;
    };
    return partition;
}




var $ab9333668ad55743$var$preroot = {
    depth: -1
}, $ab9333668ad55743$var$ambiguous = {}, $ab9333668ad55743$var$imputed = {};
function $ab9333668ad55743$var$defaultId(d) {
    return d.id;
}
function $ab9333668ad55743$var$defaultParentId(d) {
    return d.parentId;
}
function $ab9333668ad55743$export$2e2bcd8739ae039() {
    var id = $ab9333668ad55743$var$defaultId, parentId = $ab9333668ad55743$var$defaultParentId, path;
    function stratify(data) {
        var nodes = Array.from(data), currentId = id, currentParentId = parentId, n, d, i, root, parent, node, nodeId, nodeKey, nodeByKey = new Map;
        if (path != null) {
            const I = nodes.map((d, i)=>$ab9333668ad55743$var$normalize(path(d, i, data)));
            const P = I.map($ab9333668ad55743$var$parentof);
            const S = new Set(I).add("");
            for (const i of P)if (!S.has(i)) {
                S.add(i);
                I.push(i);
                P.push($ab9333668ad55743$var$parentof(i));
                nodes.push($ab9333668ad55743$var$imputed);
            }
            currentId = (_, i)=>I[i];
            currentParentId = (_, i)=>P[i];
        }
        for(i = 0, n = nodes.length; i < n; ++i){
            d = nodes[i], node = nodes[i] = new (0, $e78fbd219558c3f4$export$85c928794f8d04d4)(d);
            if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
                nodeKey = node.id = nodeId;
                nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? $ab9333668ad55743$var$ambiguous : node);
            }
            if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) node.parent = nodeId;
        }
        for(i = 0; i < n; ++i){
            node = nodes[i];
            if (nodeId = node.parent) {
                parent = nodeByKey.get(nodeId);
                if (!parent) throw new Error("missing: " + nodeId);
                if (parent === $ab9333668ad55743$var$ambiguous) throw new Error("ambiguous: " + nodeId);
                if (parent.children) parent.children.push(node);
                else parent.children = [
                    node
                ];
                node.parent = parent;
            } else {
                if (root) throw new Error("multiple roots");
                root = node;
            }
        }
        if (!root) throw new Error("no root");
        // When imputing internal nodes, only introduce roots if needed.
        // Then replace the imputed marker data with null.
        if (path != null) {
            while(root.data === $ab9333668ad55743$var$imputed && root.children.length === 1)root = root.children[0], --n;
            for(let i = nodes.length - 1; i >= 0; --i){
                node = nodes[i];
                if (node.data !== $ab9333668ad55743$var$imputed) break;
                node.data = null;
            }
        }
        root.parent = $ab9333668ad55743$var$preroot;
        root.eachBefore(function(node) {
            node.depth = node.parent.depth + 1;
            --n;
        }).eachBefore((0, $e78fbd219558c3f4$export$5af32d52ab5dfd57));
        root.parent = null;
        if (n > 0) throw new Error("cycle");
        return root;
    }
    stratify.id = function(x) {
        return arguments.length ? (id = (0, $e5241dce729ec9c6$export$516e28dec6a4b6d4)(x), stratify) : id;
    };
    stratify.parentId = function(x) {
        return arguments.length ? (parentId = (0, $e5241dce729ec9c6$export$516e28dec6a4b6d4)(x), stratify) : parentId;
    };
    stratify.path = function(x) {
        return arguments.length ? (path = (0, $e5241dce729ec9c6$export$516e28dec6a4b6d4)(x), stratify) : path;
    };
    return stratify;
}
// To normalize a path, we coerce to a string, strip the trailing slash if any
// (as long as the trailing slash is not immediately preceded by another slash),
// and add leading slash if missing.
function $ab9333668ad55743$var$normalize(path) {
    path = `${path}`;
    let i = path.length;
    if ($ab9333668ad55743$var$slash(path, i - 1) && !$ab9333668ad55743$var$slash(path, i - 2)) path = path.slice(0, -1);
    return path[0] === "/" ? path : `/${path}`;
}
// Walk backwards to find the first slash that is not the leading slash, e.g.:
// "/foo/bar" ⇥ "/foo", "/foo" ⇥ "/", "/" ↦ "". (The root is special-cased
// because the id of the root must be a truthy value.)
function $ab9333668ad55743$var$parentof(path) {
    let i = path.length;
    if (i < 2) return "";
    while(--i > 1)if ($ab9333668ad55743$var$slash(path, i)) break;
    return path.slice(0, i);
}
// Slashes can be escaped; to determine whether a slash is a path delimiter, we
// count the number of preceding backslashes escaping the forward slash: an odd
// number indicates an escaped forward slash.
function $ab9333668ad55743$var$slash(path, i) {
    if (path[i] === "/") {
        let k = 0;
        while(i > 0 && path[--i] === "\\")++k;
        if ((k & 1) === 0) return true;
    }
    return false;
}



function $5246666f3dd85838$var$defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
}
// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }
// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function $5246666f3dd85838$var$nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
}
// This function works analogously to nextLeft.
function $5246666f3dd85838$var$nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
}
// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function $5246666f3dd85838$var$moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
}
// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function $5246666f3dd85838$var$executeShifts(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while(--i >= 0){
        w = children[i];
        w.z += shift;
        w.m += shift;
        shift += w.s + (change += w.c);
    }
}
// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function $5246666f3dd85838$var$nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
}
function $5246666f3dd85838$var$TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null; // default ancestor
    this.a = this; // ancestor
    this.z = 0; // prelim
    this.m = 0; // mod
    this.c = 0; // change
    this.s = 0; // shift
    this.t = null; // thread
    this.i = i; // number
}
$5246666f3dd85838$var$TreeNode.prototype = Object.create((0, $e78fbd219558c3f4$export$85c928794f8d04d4).prototype);
function $5246666f3dd85838$var$treeRoot(root) {
    var tree = new $5246666f3dd85838$var$TreeNode(root, 0), node, nodes = [
        tree
    ], child, children, i, n;
    while(node = nodes.pop())if (children = node._.children) {
        node.children = new Array(n = children.length);
        for(i = n - 1; i >= 0; --i){
            nodes.push(child = node.children[i] = new $5246666f3dd85838$var$TreeNode(children[i], i));
            child.parent = node;
        }
    }
    (tree.parent = new $5246666f3dd85838$var$TreeNode(null, 0)).children = [
        tree
    ];
    return tree;
}
function $5246666f3dd85838$export$2e2bcd8739ae039() {
    var separation = $5246666f3dd85838$var$defaultSeparation, dx = 1, dy = 1, nodeSize = null;
    function tree(root) {
        var t = $5246666f3dd85838$var$treeRoot(root);
        // Compute the layout using Buchheim et al.’s algorithm.
        t.eachAfter(firstWalk), t.parent.m = -t.z;
        t.eachBefore(secondWalk);
        // If a fixed node size is specified, scale x and y.
        if (nodeSize) root.eachBefore(sizeNode);
        else {
            var left = root, right = root, bottom = root;
            root.eachBefore(function(node) {
                if (node.x < left.x) left = node;
                if (node.x > right.x) right = node;
                if (node.depth > bottom.depth) bottom = node;
            });
            var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
            root.eachBefore(function(node) {
                node.x = (node.x + tx) * kx;
                node.y = node.depth * ky;
            });
        }
        return root;
    }
    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
    // applied recursively to the children of v, as well as the function
    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
    // node v is placed to the midpoint of its outermost children.
    function firstWalk(v) {
        var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
        if (children) {
            $5246666f3dd85838$var$executeShifts(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
                v.z = w.z + separation(v._, w._);
                v.m = v.z - midpoint;
            } else v.z = midpoint;
        } else if (w) v.z = w.z + separation(v._, w._);
        v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    // Computes all real x-coordinates by summing up the modifiers recursively.
    function secondWalk(v) {
        v._.x = v.z + v.parent.m;
        v.m += v.parent.m;
    }
    // The core of the algorithm. Here, a new subtree is combined with the
    // previous subtrees. Threads are used to traverse the inside and outside
    // contours of the left and right subtree up to the highest common level. The
    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
    // superscript o means outside and i means inside, the subscript - means left
    // subtree and + means right subtree. For summing up the modifiers along the
    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
    // nodes of the inside contours conflict, we compute the left one of the
    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
    // Finally, we add a new thread (if necessary).
    function apportion(v, w, ancestor) {
        if (w) {
            var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
            while(vim = $5246666f3dd85838$var$nextRight(vim), vip = $5246666f3dd85838$var$nextLeft(vip), vim && vip){
                vom = $5246666f3dd85838$var$nextLeft(vom);
                vop = $5246666f3dd85838$var$nextRight(vop);
                vop.a = v;
                shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
                if (shift > 0) {
                    $5246666f3dd85838$var$moveSubtree($5246666f3dd85838$var$nextAncestor(vim, v, ancestor), v, shift);
                    sip += shift;
                    sop += shift;
                }
                sim += vim.m;
                sip += vip.m;
                som += vom.m;
                sop += vop.m;
            }
            if (vim && !$5246666f3dd85838$var$nextRight(vop)) {
                vop.t = vim;
                vop.m += sim - sop;
            }
            if (vip && !$5246666f3dd85838$var$nextLeft(vom)) {
                vom.t = vip;
                vom.m += sip - som;
                ancestor = v;
            }
        }
        return ancestor;
    }
    function sizeNode(node) {
        node.x *= dx;
        node.y = node.depth * dy;
    }
    tree.separation = function(x) {
        return arguments.length ? (separation = x, tree) : separation;
    };
    tree.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [
            dx,
            dy
        ];
    };
    tree.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [
            dx,
            dy
        ] : null;
    };
    return tree;
}




function $1fb63ce1782d45f0$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value;
    while(++i < n){
        node = nodes[i], node.x0 = x0, node.x1 = x1;
        node.y0 = y0, node.y1 = y0 += node.value * k;
    }
}


var $7dc09930ade9799f$export$324943737027944a = (1 + Math.sqrt(5)) / 2;
function $7dc09930ade9799f$export$9ff1217655212093(ratio, parent, x0, y0, x1, y1) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while(i0 < n){
        dx = x1 - x0, dy = y1 - y0;
        // Find the next non-empty node.
        do sumValue = nodes[i1++].value;
        while (!sumValue && i1 < n);
        minValue = maxValue = sumValue;
        alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
        beta = sumValue * sumValue * alpha;
        minRatio = Math.max(maxValue / beta, beta / minValue);
        // Keep adding nodes while the aspect ratio maintains or improves.
        for(; i1 < n; ++i1){
            sumValue += nodeValue = nodes[i1].value;
            if (nodeValue < minValue) minValue = nodeValue;
            if (nodeValue > maxValue) maxValue = nodeValue;
            beta = sumValue * sumValue * alpha;
            newRatio = Math.max(maxValue / beta, beta / minValue);
            if (newRatio > minRatio) {
                sumValue -= nodeValue;
                break;
            }
            minRatio = newRatio;
        }
        // Position and record the row orientation.
        rows.push(row = {
            value: sumValue,
            dice: dx < dy,
            children: nodes.slice(i0, i1)
        });
        if (row.dice) (0, $76af0eac27ab3eae$export$2e2bcd8739ae039)(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
        else (0, $1fb63ce1782d45f0$export$2e2bcd8739ae039)(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
        value -= sumValue, i0 = i1;
    }
    return rows;
}
var $7dc09930ade9799f$export$2e2bcd8739ae039 = function custom(ratio) {
    function squarify(parent, x0, y0, x1, y1) {
        $7dc09930ade9799f$export$9ff1217655212093(ratio, parent, x0, y0, x1, y1);
    }
    squarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return squarify;
}($7dc09930ade9799f$export$324943737027944a);




function $00bfb66349df5856$export$2e2bcd8739ae039() {
    var tile = (0, $7dc09930ade9799f$export$2e2bcd8739ae039), round = false, dx = 1, dy = 1, paddingStack = [
        0
    ], paddingInner = (0, $00a6e88d508079f0$export$99e2e371aa6a9db), paddingTop = (0, $00a6e88d508079f0$export$99e2e371aa6a9db), paddingRight = (0, $00a6e88d508079f0$export$99e2e371aa6a9db), paddingBottom = (0, $00a6e88d508079f0$export$99e2e371aa6a9db), paddingLeft = (0, $00a6e88d508079f0$export$99e2e371aa6a9db);
    function treemap(root) {
        root.x0 = root.y0 = 0;
        root.x1 = dx;
        root.y1 = dy;
        root.eachBefore(positionNode);
        paddingStack = [
            0
        ];
        if (round) root.eachBefore((0, $03ec1b566eb9b92b$export$2e2bcd8739ae039));
        return root;
    }
    function positionNode(node) {
        var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
        if (node.children) {
            p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
            x0 += paddingLeft(node) - p;
            y0 += paddingTop(node) - p;
            x1 -= paddingRight(node) - p;
            y1 -= paddingBottom(node) - p;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            tile(node, x0, y0, x1, y1);
        }
    }
    treemap.round = function(x) {
        return arguments.length ? (round = !!x, treemap) : round;
    };
    treemap.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [
            dx,
            dy
        ];
    };
    treemap.tile = function(x) {
        return arguments.length ? (tile = (0, $e5241dce729ec9c6$export$a7a0278c004aac3f)(x), treemap) : tile;
    };
    treemap.padding = function(x) {
        return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
    };
    treemap.paddingInner = function(x) {
        return arguments.length ? (paddingInner = typeof x === "function" ? x : (0, $00a6e88d508079f0$export$2e2bcd8739ae039)(+x), treemap) : paddingInner;
    };
    treemap.paddingOuter = function(x) {
        return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
    };
    treemap.paddingTop = function(x) {
        return arguments.length ? (paddingTop = typeof x === "function" ? x : (0, $00a6e88d508079f0$export$2e2bcd8739ae039)(+x), treemap) : paddingTop;
    };
    treemap.paddingRight = function(x) {
        return arguments.length ? (paddingRight = typeof x === "function" ? x : (0, $00a6e88d508079f0$export$2e2bcd8739ae039)(+x), treemap) : paddingRight;
    };
    treemap.paddingBottom = function(x) {
        return arguments.length ? (paddingBottom = typeof x === "function" ? x : (0, $00a6e88d508079f0$export$2e2bcd8739ae039)(+x), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function(x) {
        return arguments.length ? (paddingLeft = typeof x === "function" ? x : (0, $00a6e88d508079f0$export$2e2bcd8739ae039)(+x), treemap) : paddingLeft;
    };
    return treemap;
}


function $91cb0f791101a3aa$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    var nodes = parent.children, i, n = nodes.length, sum, sums = new Array(n + 1);
    for(sums[0] = sum = i = 0; i < n; ++i)sums[i + 1] = sum += nodes[i].value;
    partition(0, n, parent.value, x0, y0, x1, y1);
    function partition(i, j, value, x0, y0, x1, y1) {
        if (i >= j - 1) {
            var node = nodes[i];
            node.x0 = x0, node.y0 = y0;
            node.x1 = x1, node.y1 = y1;
            return;
        }
        var valueOffset = sums[i], valueTarget = value / 2 + valueOffset, k = i + 1, hi = j - 1;
        while(k < hi){
            var mid = k + hi >>> 1;
            if (sums[mid] < valueTarget) k = mid + 1;
            else hi = mid;
        }
        if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;
        var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
        if (x1 - x0 > y1 - y0) {
            var xk = value ? (x0 * valueRight + x1 * valueLeft) / value : x1;
            partition(i, k, valueLeft, x0, y0, xk, y1);
            partition(k, j, valueRight, xk, y0, x1, y1);
        } else {
            var yk = value ? (y0 * valueRight + y1 * valueLeft) / value : y1;
            partition(i, k, valueLeft, x0, y0, x1, yk);
            partition(k, j, valueRight, x0, yk, x1, y1);
        }
    }
}






function $89827f4599edd418$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    (parent.depth & 1 ? (0, $1fb63ce1782d45f0$export$2e2bcd8739ae039) : (0, $76af0eac27ab3eae$export$2e2bcd8739ae039))(parent, x0, y0, x1, y1);
}






var $e83f4a7fc71f7e4e$export$2e2bcd8739ae039 = function custom(ratio) {
    function resquarify(parent, x0, y0, x1, y1) {
        if ((rows = parent._squarify) && rows.ratio === ratio) {
            var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
            while(++j < m){
                row = rows[j], nodes = row.children;
                for(i = row.value = 0, n = nodes.length; i < n; ++i)row.value += nodes[i].value;
                if (row.dice) (0, $76af0eac27ab3eae$export$2e2bcd8739ae039)(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);
                else (0, $1fb63ce1782d45f0$export$2e2bcd8739ae039)(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
                value -= row.value;
            }
        } else {
            parent._squarify = rows = (0, $7dc09930ade9799f$export$9ff1217655212093)(ratio, parent, x0, y0, x1, y1);
            rows.ratio = ratio;
        }
    }
    resquarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return resquarify;
}((0, $7dc09930ade9799f$export$324943737027944a));




var $4dd2c135f647be17$exports = {};

$parcel$export($4dd2c135f647be17$exports, "interpolate", () => $b6e2dec750af77c9$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateArray", () => $5b4e642470afdee0$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateBasis", () => $9122de3154a9264e$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateBasisClosed", () => $e3ecae20e036876f$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateDate", () => $93699ec421e96d53$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateDiscrete", () => $86b42556c9d28b2f$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateHue", () => $e3ca66e202912089$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateNumber", () => $198300671d1ae521$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateNumberArray", () => $ecd95ef43299cd25$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateObject", () => $ab52d33e87c67a57$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateRound", () => $abcc3697e9133f9f$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateString", () => $da7be60f84908e05$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateTransformCss", () => $587593a2c8eab706$export$56bec7123bb3589a);
$parcel$export($4dd2c135f647be17$exports, "interpolateTransformSvg", () => $587593a2c8eab706$export$da8cba906d64c082);
$parcel$export($4dd2c135f647be17$exports, "interpolateZoom", () => $3f985f05a3a921d2$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateRgb", () => $9caa49edbd641456$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateRgbBasis", () => $9caa49edbd641456$export$2c0e28f2e2852d3f);
$parcel$export($4dd2c135f647be17$exports, "interpolateRgbBasisClosed", () => $9caa49edbd641456$export$53d5214f625ccd4c);
$parcel$export($4dd2c135f647be17$exports, "interpolateHsl", () => $dd1c04511dc66eb1$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateHslLong", () => $dd1c04511dc66eb1$export$a2c535e270a59256);
$parcel$export($4dd2c135f647be17$exports, "interpolateLab", () => $43ffbf84ceb30219$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateHcl", () => $9131ddedd9dbc8f9$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateHclLong", () => $9131ddedd9dbc8f9$export$5aaa50f7615f9b70);
$parcel$export($4dd2c135f647be17$exports, "interpolateCubehelix", () => $5d78404db675e71e$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "interpolateCubehelixLong", () => $5d78404db675e71e$export$934fa09ad474a1b4);
$parcel$export($4dd2c135f647be17$exports, "piecewise", () => $19b313f6b540088d$export$2e2bcd8739ae039);
$parcel$export($4dd2c135f647be17$exports, "quantize", () => $8f59dc338f9d1232$export$2e2bcd8739ae039);





function $86b42556c9d28b2f$export$2e2bcd8739ae039(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}



function $e3ca66e202912089$export$2e2bcd8739ae039(a, b) {
    var i = (0, $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf)(+a, +b);
    return function(t) {
        var x = i(t);
        return x - 360 * Math.floor(x / 360);
    };
}





function $abcc3697e9133f9f$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
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




var $gnwtP = parcelRequire("gnwtP");

function $dd1c04511dc66eb1$var$hsl(hue) {
    return function(start, end) {
        var h = hue((start = (0, $gnwtP.hsl)(start)).h, (end = (0, $gnwtP.hsl)(end)).h), s = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.s, end.s), l = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.l, end.l), opacity = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $dd1c04511dc66eb1$export$2e2bcd8739ae039 = $dd1c04511dc66eb1$var$hsl((0, $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf));
var $dd1c04511dc66eb1$export$a2c535e270a59256 = $dd1c04511dc66eb1$var$hsl((0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039));




function $43ffbf84ceb30219$export$2e2bcd8739ae039(start, end) {
    var l = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)((start = (0, $747534271a8a1565$export$2e2bcd8739ae039)(start)).l, (end = (0, $747534271a8a1565$export$2e2bcd8739ae039)(end)).l), a = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.a, end.a), b = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.b, end.b), opacity = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.opacity, end.opacity);
    return function(t) {
        start.l = l(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
    };
}




function $9131ddedd9dbc8f9$var$hcl(hue) {
    return function(start, end) {
        var h = hue((start = (0, $747534271a8a1565$export$d0e870ba50062ff1)(start)).h, (end = (0, $747534271a8a1565$export$d0e870ba50062ff1)(end)).h), c = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.c, end.c), l = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.l, end.l), opacity = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $9131ddedd9dbc8f9$export$2e2bcd8739ae039 = $9131ddedd9dbc8f9$var$hcl((0, $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf));
var $9131ddedd9dbc8f9$export$5aaa50f7615f9b70 = $9131ddedd9dbc8f9$var$hcl((0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039));




function $5d78404db675e71e$var$cubehelix(hue) {
    return function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = (0, $53ff683a5927702b$export$2e2bcd8739ae039)(start)).h, (end = (0, $53ff683a5927702b$export$2e2bcd8739ae039)(end)).h), s = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.s, end.s), l = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.l, end.l), opacity = (0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039)(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
    }(1);
}
var $5d78404db675e71e$export$2e2bcd8739ae039 = $5d78404db675e71e$var$cubehelix((0, $2361b35e2e9e8f0b$export$97d7b0c7ddb78dcf));
var $5d78404db675e71e$export$934fa09ad474a1b4 = $5d78404db675e71e$var$cubehelix((0, $2361b35e2e9e8f0b$export$2e2bcd8739ae039));



function $19b313f6b540088d$export$2e2bcd8739ae039(interpolate, values) {
    if (values === undefined) values = interpolate, interpolate = (0, $b6e2dec750af77c9$export$2e2bcd8739ae039);
    var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while(i < n)I[i] = interpolate(v, v = values[++i]);
    return function(t) {
        var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
        return I[i](t - i);
    };
}


function $8f59dc338f9d1232$export$2e2bcd8739ae039(interpolator, n) {
    var samples = new Array(n);
    for(var i = 0; i < n; ++i)samples[i] = interpolator(i / (n - 1));
    return samples;
}




var $156bc7881be70dd0$exports = {};

$parcel$export($156bc7881be70dd0$exports, "Path", () => $131a8512ae592f4d$export$4b2950bdac9b6ee9);
$parcel$export($156bc7881be70dd0$exports, "path", () => $131a8512ae592f4d$export$bb654e07daaf8c3a);
$parcel$export($156bc7881be70dd0$exports, "pathRound", () => $131a8512ae592f4d$export$e181c6ece8d9cc5f);



var $5007f1a1a7eef490$exports = {};

$parcel$export($5007f1a1a7eef490$exports, "polygonArea", () => $67e4eaaf9799695b$export$2e2bcd8739ae039);
$parcel$export($5007f1a1a7eef490$exports, "polygonCentroid", () => $64a88a34bca7105c$export$2e2bcd8739ae039);
$parcel$export($5007f1a1a7eef490$exports, "polygonHull", () => $38ef40c858b24b99$export$2e2bcd8739ae039);
$parcel$export($5007f1a1a7eef490$exports, "polygonContains", () => $8df49177dc7b3f21$export$2e2bcd8739ae039);
$parcel$export($5007f1a1a7eef490$exports, "polygonLength", () => $61b08a0ed1fb8d4b$export$2e2bcd8739ae039);
function $67e4eaaf9799695b$export$2e2bcd8739ae039(polygon) {
    var i = -1, n = polygon.length, a, b = polygon[n - 1], area = 0;
    while(++i < n){
        a = b;
        b = polygon[i];
        area += a[1] * b[0] - a[0] * b[1];
    }
    return area / 2;
}


function $64a88a34bca7105c$export$2e2bcd8739ae039(polygon) {
    var i = -1, n = polygon.length, x = 0, y = 0, a, b = polygon[n - 1], c, k = 0;
    while(++i < n){
        a = b;
        b = polygon[i];
        k += c = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * c;
        y += (a[1] + b[1]) * c;
    }
    return k *= 3, [
        x / k,
        y / k
    ];
}


// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
function $e273e089b17abfc3$export$2e2bcd8739ae039(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}


function $38ef40c858b24b99$var$lexicographicOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
}
// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function $38ef40c858b24b99$var$computeUpperHullIndexes(points) {
    const n = points.length, indexes = [
        0,
        1
    ];
    let size = 2, i;
    for(i = 2; i < n; ++i){
        while(size > 1 && (0, $e273e089b17abfc3$export$2e2bcd8739ae039)(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0)--size;
        indexes[size++] = i;
    }
    return indexes.slice(0, size); // remove popped points
}
function $38ef40c858b24b99$export$2e2bcd8739ae039(points) {
    if ((n = points.length) < 3) return null;
    var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
    for(i = 0; i < n; ++i)sortedPoints[i] = [
        +points[i][0],
        +points[i][1],
        i
    ];
    sortedPoints.sort($38ef40c858b24b99$var$lexicographicOrder);
    for(i = 0; i < n; ++i)flippedPoints[i] = [
        sortedPoints[i][0],
        -sortedPoints[i][1]
    ];
    var upperIndexes = $38ef40c858b24b99$var$computeUpperHullIndexes(sortedPoints), lowerIndexes = $38ef40c858b24b99$var$computeUpperHullIndexes(flippedPoints);
    // Construct the hull polygon, removing possible duplicate endpoints.
    var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
    // Add upper hull in right-to-l order.
    // Then add lower hull in left-to-right order.
    for(i = upperIndexes.length - 1; i >= 0; --i)hull.push(points[sortedPoints[upperIndexes[i]][2]]);
    for(i = +skipLeft; i < lowerIndexes.length - skipRight; ++i)hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
    return hull;
}


function $8df49177dc7b3f21$export$2e2bcd8739ae039(polygon, point) {
    var n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], x1, y1, inside = false;
    for(var i = 0; i < n; ++i){
        p = polygon[i], x1 = p[0], y1 = p[1];
        if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
        x0 = x1, y0 = y1;
    }
    return inside;
}


function $61b08a0ed1fb8d4b$export$2e2bcd8739ae039(polygon) {
    var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
    while(++i < n){
        xa = xb;
        ya = yb;
        b = polygon[i];
        xb = b[0];
        yb = b[1];
        xa -= xb;
        ya -= yb;
        perimeter += Math.hypot(xa, ya);
    }
    return perimeter;
}




var $9278144dba97060a$exports = {};

$parcel$export($9278144dba97060a$exports, "quadtree", () => $2ffd443656f1c56d$export$2e2bcd8739ae039);



var $8aedd0efdb3879bc$exports = {};

$parcel$export($8aedd0efdb3879bc$exports, "randomUniform", () => $5d6a230cf38daa86$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomInt", () => $9d63ab322eaf527b$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomNormal", () => $efd95590ecffec49$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomLogNormal", () => $95e9b680d7d6fbdf$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomBates", () => $8f545d1e9e0a443b$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomIrwinHall", () => $454b34a414c2df72$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomExponential", () => $cea2a5c687ff666f$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomPareto", () => $d8b6f6f2616a15bf$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomBernoulli", () => $9d0810e7fb8a3929$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomGeometric", () => $e733985601502955$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomBinomial", () => $adf5119baf6a488e$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomGamma", () => $fae6fdcb1f2466bb$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomBeta", () => $910543f2fe296709$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomWeibull", () => $9cb1ce64162e6b33$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomCauchy", () => $31bee3dc9f422ca0$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomLogistic", () => $04f6f5e6c791a929$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomPoisson", () => $a470034900bff9f2$export$2e2bcd8739ae039);
$parcel$export($8aedd0efdb3879bc$exports, "randomLcg", () => $f732c7117cc0a749$export$2e2bcd8739ae039);
var $e54077a5aabd7331$export$2e2bcd8739ae039 = Math.random;


var $5d6a230cf38daa86$export$2e2bcd8739ae039 = function sourceRandomUniform(source) {
    function randomUniform(min, max) {
        min = min == null ? 0 : +min;
        max = max == null ? 1 : +max;
        if (arguments.length === 1) max = min, min = 0;
        else max -= min;
        return function() {
            return source() * max + min;
        };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $9d63ab322eaf527b$export$2e2bcd8739ae039 = function sourceRandomInt(source) {
    function randomInt(min, max) {
        if (arguments.length < 2) max = min, min = 0;
        min = Math.floor(min);
        max = Math.floor(max) - min;
        return function() {
            return Math.floor(source() * max + min);
        };
    }
    randomInt.source = sourceRandomInt;
    return randomInt;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $efd95590ecffec49$export$2e2bcd8739ae039 = function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
        var x, r;
        mu = mu == null ? 0 : +mu;
        sigma = sigma == null ? 1 : +sigma;
        return function() {
            var y;
            // If available, use the second previously-generated uniform random.
            if (x != null) y = x, x = null;
            else do {
                x = source() * 2 - 1;
                y = source() * 2 - 1;
                r = x * x + y * y;
            }while (!r || r > 1);
            return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
        };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));




var $95e9b680d7d6fbdf$export$2e2bcd8739ae039 = function sourceRandomLogNormal(source) {
    var N = (0, $efd95590ecffec49$export$2e2bcd8739ae039).source(source);
    function randomLogNormal() {
        var randomNormal = N.apply(this, arguments);
        return function() {
            return Math.exp(randomNormal());
        };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));




var $454b34a414c2df72$export$2e2bcd8739ae039 = function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
        if ((n = +n) <= 0) return ()=>0;
        return function() {
            for(var sum = 0, i = n; i > 1; --i)sum += source();
            return sum + i * source();
        };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));


var $8f545d1e9e0a443b$export$2e2bcd8739ae039 = function sourceRandomBates(source) {
    var I = (0, $454b34a414c2df72$export$2e2bcd8739ae039).source(source);
    function randomBates(n) {
        // use limiting distribution at n === 0
        if ((n = +n) === 0) return source;
        var randomIrwinHall = I(n);
        return function() {
            return randomIrwinHall() / n;
        };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));




var $cea2a5c687ff666f$export$2e2bcd8739ae039 = function sourceRandomExponential(source) {
    function randomExponential(lambda) {
        return function() {
            return -Math.log1p(-source()) / lambda;
        };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $d8b6f6f2616a15bf$export$2e2bcd8739ae039 = function sourceRandomPareto(source) {
    function randomPareto(alpha) {
        if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
        alpha = 1 / -alpha;
        return function() {
            return Math.pow(1 - source(), alpha);
        };
    }
    randomPareto.source = sourceRandomPareto;
    return randomPareto;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $9d0810e7fb8a3929$export$2e2bcd8739ae039 = function sourceRandomBernoulli(source) {
    function randomBernoulli(p) {
        if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
        return function() {
            return Math.floor(source() + p);
        };
    }
    randomBernoulli.source = sourceRandomBernoulli;
    return randomBernoulli;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $e733985601502955$export$2e2bcd8739ae039 = function sourceRandomGeometric(source) {
    function randomGeometric(p) {
        if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
        if (p === 0) return ()=>Infinity;
        if (p === 1) return ()=>1;
        p = Math.log1p(-p);
        return function() {
            return 1 + Math.floor(Math.log1p(-source()) / p);
        };
    }
    randomGeometric.source = sourceRandomGeometric;
    return randomGeometric;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));






var $fae6fdcb1f2466bb$export$2e2bcd8739ae039 = function sourceRandomGamma(source) {
    var randomNormal = (0, $efd95590ecffec49$export$2e2bcd8739ae039).source(source)();
    function randomGamma(k, theta) {
        if ((k = +k) < 0) throw new RangeError("invalid k");
        // degenerate distribution if k === 0
        if (k === 0) return ()=>0;
        theta = theta == null ? 1 : +theta;
        // exponential distribution if k === 1
        if (k === 1) return ()=>-Math.log1p(-source()) * theta;
        var d = (k < 1 ? k + 1 : k) - 1 / 3, c = 1 / (3 * Math.sqrt(d)), multiplier = k < 1 ? ()=>Math.pow(source(), 1 / k) : ()=>1;
        return function() {
            do {
                do var x = randomNormal(), v = 1 + c * x;
                while (v <= 0);
                v *= v * v;
                var u = 1 - source();
            }while (u >= 1 - 0.0331 * x * x * x * x && Math.log(u) >= 0.5 * x * x + d * (1 - v + Math.log(v)));
            return d * v * multiplier() * theta;
        };
    }
    randomGamma.source = sourceRandomGamma;
    return randomGamma;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));


var $910543f2fe296709$export$2e2bcd8739ae039 = function sourceRandomBeta(source) {
    var G = (0, $fae6fdcb1f2466bb$export$2e2bcd8739ae039).source(source);
    function randomBeta(alpha, beta) {
        var X = G(alpha), Y = G(beta);
        return function() {
            var x = X();
            return x === 0 ? 0 : x / (x + Y());
        };
    }
    randomBeta.source = sourceRandomBeta;
    return randomBeta;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $adf5119baf6a488e$export$2e2bcd8739ae039 = function sourceRandomBinomial(source) {
    var G = (0, $e733985601502955$export$2e2bcd8739ae039).source(source), B = (0, $910543f2fe296709$export$2e2bcd8739ae039).source(source);
    function randomBinomial(n, p) {
        n = +n;
        if ((p = +p) >= 1) return ()=>n;
        if (p <= 0) return ()=>0;
        return function() {
            var acc = 0, nn = n, pp = p;
            while(nn * pp > 16 && nn * (1 - pp) > 16){
                var i = Math.floor((nn + 1) * pp), y = B(i, nn - i + 1)();
                if (y <= pp) {
                    acc += i;
                    nn -= i;
                    pp = (pp - y) / (1 - y);
                } else {
                    nn = i - 1;
                    pp /= y;
                }
            }
            var sign = pp < 0.5, pFinal = sign ? pp : 1 - pp, g = G(pFinal);
            for(var s = g(), k = 0; s <= nn; ++k)s += g();
            return acc + (sign ? k : nn - k);
        };
    }
    randomBinomial.source = sourceRandomBinomial;
    return randomBinomial;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));





var $9cb1ce64162e6b33$export$2e2bcd8739ae039 = function sourceRandomWeibull(source) {
    function randomWeibull(k, a, b) {
        var outerFunc;
        if ((k = +k) === 0) outerFunc = (x)=>-Math.log(x);
        else {
            k = 1 / k;
            outerFunc = (x)=>Math.pow(x, k);
        }
        a = a == null ? 0 : +a;
        b = b == null ? 1 : +b;
        return function() {
            return a + b * outerFunc(-Math.log1p(-source()));
        };
    }
    randomWeibull.source = sourceRandomWeibull;
    return randomWeibull;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $31bee3dc9f422ca0$export$2e2bcd8739ae039 = function sourceRandomCauchy(source) {
    function randomCauchy(a, b) {
        a = a == null ? 0 : +a;
        b = b == null ? 1 : +b;
        return function() {
            return a + b * Math.tan(Math.PI * source());
        };
    }
    randomCauchy.source = sourceRandomCauchy;
    return randomCauchy;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));



var $04f6f5e6c791a929$export$2e2bcd8739ae039 = function sourceRandomLogistic(source) {
    function randomLogistic(a, b) {
        a = a == null ? 0 : +a;
        b = b == null ? 1 : +b;
        return function() {
            var u = source();
            return a + b * Math.log(u / (1 - u));
        };
    }
    randomLogistic.source = sourceRandomLogistic;
    return randomLogistic;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));





var $a470034900bff9f2$export$2e2bcd8739ae039 = function sourceRandomPoisson(source) {
    var G = (0, $fae6fdcb1f2466bb$export$2e2bcd8739ae039).source(source), B = (0, $adf5119baf6a488e$export$2e2bcd8739ae039).source(source);
    function randomPoisson(lambda) {
        return function() {
            var acc = 0, l = lambda;
            while(l > 16){
                var n = Math.floor(0.875 * l), t = G(n)();
                if (t > l) return acc + B(n - 1, l / t)();
                acc += n;
                l -= t;
            }
            for(var s = -Math.log1p(-source()), k = 0; s <= l; ++k)s -= Math.log1p(-source());
            return acc + k;
        };
    }
    randomPoisson.source = sourceRandomPoisson;
    return randomPoisson;
}((0, $e54077a5aabd7331$export$2e2bcd8739ae039));


// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const $f732c7117cc0a749$var$mul = 0x19660D;
const $f732c7117cc0a749$var$inc = 0x3C6EF35F;
const $f732c7117cc0a749$var$eps = 1 / 0x100000000;
function $f732c7117cc0a749$export$2e2bcd8739ae039(seed = Math.random()) {
    let state = (0 <= seed && seed < 1 ? seed / $f732c7117cc0a749$var$eps : Math.abs(seed)) | 0;
    return ()=>(state = $f732c7117cc0a749$var$mul * state + $f732c7117cc0a749$var$inc | 0, $f732c7117cc0a749$var$eps * (state >>> 0));
}




var $8fbf317e793afeee$exports = {};

$parcel$export($8fbf317e793afeee$exports, "scaleBand", () => $5bcc2db2c635ec1b$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scalePoint", () => $5bcc2db2c635ec1b$export$105684a3041cb6f3);
$parcel$export($8fbf317e793afeee$exports, "scaleIdentity", () => $7508548d39a0e487$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleLinear", () => $6feed068debd21fb$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleLog", () => $afba12b46b827e56$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleSymlog", () => $61e9bd44c37fd38d$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleOrdinal", () => $022f84c797360b68$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleImplicit", () => $022f84c797360b68$export$e4f898ab14d9d460);
$parcel$export($8fbf317e793afeee$exports, "scalePow", () => $327d4e9e3b94b565$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleSqrt", () => $327d4e9e3b94b565$export$eba8049fb5020b81);
$parcel$export($8fbf317e793afeee$exports, "scaleRadial", () => $ab6597bb2b5a63ee$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleQuantile", () => $4744589eab0a3cc0$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleQuantize", () => $c0df4be0b654a770$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleThreshold", () => $32fe106700fffeb1$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleTime", () => $373e622e81809fb2$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleUtc", () => $00ae5eac260a3910$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleSequential", () => $4a06e872f4f7b230$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleSequentialLog", () => $4a06e872f4f7b230$export$6843e08bf2ff981f);
$parcel$export($8fbf317e793afeee$exports, "scaleSequentialPow", () => $4a06e872f4f7b230$export$de9f78581b4f2405);
$parcel$export($8fbf317e793afeee$exports, "scaleSequentialSqrt", () => $4a06e872f4f7b230$export$413d935127ed466e);
$parcel$export($8fbf317e793afeee$exports, "scaleSequentialSymlog", () => $4a06e872f4f7b230$export$9d4af4de62c81941);
$parcel$export($8fbf317e793afeee$exports, "scaleSequentialQuantile", () => $e69eda6cc0579012$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleDiverging", () => $a253cf302564a52d$export$2e2bcd8739ae039);
$parcel$export($8fbf317e793afeee$exports, "scaleDivergingLog", () => $a253cf302564a52d$export$5f0266a9159c47fb);
$parcel$export($8fbf317e793afeee$exports, "scaleDivergingPow", () => $a253cf302564a52d$export$d6cedcc63bf26e7e);
$parcel$export($8fbf317e793afeee$exports, "scaleDivergingSqrt", () => $a253cf302564a52d$export$33ddefb5c4ab9e9c);
$parcel$export($8fbf317e793afeee$exports, "scaleDivergingSymlog", () => $a253cf302564a52d$export$50b3da713cf557c6);
$parcel$export($8fbf317e793afeee$exports, "tickFormat", () => $376b07f19e5dfcfe$export$2e2bcd8739ae039);

function $2cd7bdc78666648b$export$23c7bb9e6558da2a(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function $2cd7bdc78666648b$export$7d6b419e59e83f3d(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}




const $022f84c797360b68$export$e4f898ab14d9d460 = Symbol("implicit");
function $022f84c797360b68$export$2e2bcd8739ae039() {
    var index = new (0, $4f005f9914ec0871$export$dcc6fb7d82b5bc7b)(), domain = [], range = [], unknown = $022f84c797360b68$export$e4f898ab14d9d460;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== $022f84c797360b68$export$e4f898ab14d9d460) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new (0, $4f005f9914ec0871$export$dcc6fb7d82b5bc7b)();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $022f84c797360b68$export$2e2bcd8739ae039(domain, range).unknown(unknown);
    };
    (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
    return scale;
}


function $5bcc2db2c635ec1b$export$2e2bcd8739ae039() {
    var scale = (0, $022f84c797360b68$export$2e2bcd8739ae039)().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = (0, $76bfd994379ae812$export$2e2bcd8739ae039)(n).map(function(i) {
            return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
        return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [
            r0,
            r1
        ];
    };
    scale.rangeRound = function(_) {
        return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
    };
    scale.bandwidth = function() {
        return bandwidth;
    };
    scale.step = function() {
        return step;
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
        return $5bcc2db2c635ec1b$export$2e2bcd8739ae039(domain(), [
            r0,
            r1
        ]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(rescale(), arguments);
}
function $5bcc2db2c635ec1b$var$pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
        return $5bcc2db2c635ec1b$var$pointish(copy());
    };
    return scale;
}
function $5bcc2db2c635ec1b$export$105684a3041cb6f3() {
    return $5bcc2db2c635ec1b$var$pointish($5bcc2db2c635ec1b$export$2e2bcd8739ae039.apply(null, arguments).paddingInner(1));
}





function $1075419c505a1ba9$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $fba2e8bbd8c1f530$export$2e2bcd8739ae039(x) {
    return +x;
}


var $b3fabe7b2dfe3262$var$unit = [
    0,
    1
];
function $b3fabe7b2dfe3262$export$f0954fd7d5368655(x) {
    return x;
}
function $b3fabe7b2dfe3262$var$normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, $1075419c505a1ba9$export$2e2bcd8739ae039)(isNaN(b) ? NaN : 0.5);
}
function $b3fabe7b2dfe3262$var$clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function $b3fabe7b2dfe3262$var$bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = $b3fabe7b2dfe3262$var$normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = $b3fabe7b2dfe3262$var$normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function $b3fabe7b2dfe3262$var$polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = $b3fabe7b2dfe3262$var$normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, $c6baf87b76d1189b$export$2e2bcd8739ae039)(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function $b3fabe7b2dfe3262$export$784d13d8ee351f07(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function $b3fabe7b2dfe3262$export$6b468dcfb64c653c() {
    var domain = $b3fabe7b2dfe3262$var$unit, range = $b3fabe7b2dfe3262$var$unit, interpolate = (0, $b6e2dec750af77c9$export$2e2bcd8739ae039), transform, untransform, unknown, clamp = $b3fabe7b2dfe3262$export$f0954fd7d5368655, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== $b3fabe7b2dfe3262$export$f0954fd7d5368655) clamp = $b3fabe7b2dfe3262$var$clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? $b3fabe7b2dfe3262$var$polymap : $b3fabe7b2dfe3262$var$bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), (0, $198300671d1ae521$export$2e2bcd8739ae039))))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, (0, $fba2e8bbd8c1f530$export$2e2bcd8739ae039)), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = (0, $abcc3697e9133f9f$export$2e2bcd8739ae039), rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : $b3fabe7b2dfe3262$export$f0954fd7d5368655, rescale()) : clamp !== $b3fabe7b2dfe3262$export$f0954fd7d5368655;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function $b3fabe7b2dfe3262$export$2e2bcd8739ae039() {
    return $b3fabe7b2dfe3262$export$6b468dcfb64c653c()($b3fabe7b2dfe3262$export$f0954fd7d5368655, $b3fabe7b2dfe3262$export$f0954fd7d5368655);
}





function $376b07f19e5dfcfe$export$2e2bcd8739ae039(start, stop, count, specifier) {
    var step = (0, $61a6aa10219c54a4$export$81087d9b915d4ede)(start, stop, count), precision;
    specifier = (0, $6c61b78b0e12530a$export$2e2bcd8739ae039)(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = (0, $c2241512881c0f9b$export$2e2bcd8739ae039)(step, value))) specifier.precision = precision;
            return (0, $ad0595948e0b2f09$export$8d85692a469dde6f)(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = (0, $326056e829ddcbb9$export$2e2bcd8739ae039)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = (0, $75d060ea554f56fe$export$2e2bcd8739ae039)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return (0, $ad0595948e0b2f09$export$d9468344d3651243)(specifier);
}


function $6feed068debd21fb$export$16a5d4b4a61a274d(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, $61a6aa10219c54a4$export$2e2bcd8739ae039)(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, $376b07f19e5dfcfe$export$2e2bcd8739ae039)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = (0, $61a6aa10219c54a4$export$bc64d00cc98e7e95)(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function $6feed068debd21fb$export$2e2bcd8739ae039() {
    var scale = (0, $b3fabe7b2dfe3262$export$2e2bcd8739ae039)();
    scale.copy = function() {
        return (0, $b3fabe7b2dfe3262$export$784d13d8ee351f07)(scale, $6feed068debd21fb$export$2e2bcd8739ae039());
    };
    (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
    return $6feed068debd21fb$export$16a5d4b4a61a274d(scale);
}



function $7508548d39a0e487$export$2e2bcd8739ae039(domain) {
    var unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = Array.from(_, (0, $fba2e8bbd8c1f530$export$2e2bcd8739ae039)), scale) : domain.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $7508548d39a0e487$export$2e2bcd8739ae039(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, (0, $fba2e8bbd8c1f530$export$2e2bcd8739ae039)) : [
        0,
        1
    ];
    return (0, $6feed068debd21fb$export$16a5d4b4a61a274d)(scale);
}





function $6f71f7d57b1895e1$export$2e2bcd8739ae039(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}




function $afba12b46b827e56$var$transformLog(x) {
    return Math.log(x);
}
function $afba12b46b827e56$var$transformExp(x) {
    return Math.exp(x);
}
function $afba12b46b827e56$var$transformLogn(x) {
    return -Math.log(-x);
}
function $afba12b46b827e56$var$transformExpn(x) {
    return -Math.exp(-x);
}
function $afba12b46b827e56$var$pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function $afba12b46b827e56$var$powp(base) {
    return base === 10 ? $afba12b46b827e56$var$pow10 : base === Math.E ? Math.exp : (x)=>Math.pow(base, x);
}
function $afba12b46b827e56$var$logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x)=>Math.log(x) / base);
}
function $afba12b46b827e56$var$reflect(f) {
    return (x, k)=>-f(-x, k);
}
function $afba12b46b827e56$export$860836db074028f0(transform) {
    const scale = transform($afba12b46b827e56$var$transformLog, $afba12b46b827e56$var$transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
        logs = $afba12b46b827e56$var$logp(base), pows = $afba12b46b827e56$var$powp(base);
        if (domain()[0] < 0) {
            logs = $afba12b46b827e56$var$reflect(logs), pows = $afba12b46b827e56$var$reflect(pows);
            transform($afba12b46b827e56$var$transformLogn, $afba12b46b827e56$var$transformExpn);
        } else transform($afba12b46b827e56$var$transformLog, $afba12b46b827e56$var$transformExp);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count)=>{
        const d = domain();
        let u = d[0];
        let v = d[d.length - 1];
        const r = v < u;
        if (r) [u, v] = [
            v,
            u
        ];
        let i = logs(u);
        let j = logs(v);
        let k;
        let t;
        const n = count == null ? 10 : +count;
        let z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i)for(k = 1; k < base; ++k){
                t = i < 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i <= j; ++i)for(k = base - 1; k >= 1; --k){
                t = i > 0 ? k / pows(-i) : k * pows(i);
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            if (z.length * 2 < n) z = (0, $61a6aa10219c54a4$export$2e2bcd8739ae039)(u, v, n);
        } else z = (0, $61a6aa10219c54a4$export$2e2bcd8739ae039)(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier)=>{
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = (0, $6c61b78b0e12530a$export$2e2bcd8739ae039)(specifier)).precision == null) specifier.trim = true;
            specifier = (0, $ad0595948e0b2f09$export$d9468344d3651243)(specifier);
        }
        if (count === Infinity) return specifier;
        const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return (d)=>{
            let i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = ()=>{
        return domain((0, $6f71f7d57b1895e1$export$2e2bcd8739ae039)(domain(), {
            floor: (x)=>pows(Math.floor(logs(x))),
            ceil: (x)=>pows(Math.ceil(logs(x)))
        }));
    };
    return scale;
}
function $afba12b46b827e56$export$2e2bcd8739ae039() {
    const scale = $afba12b46b827e56$export$860836db074028f0((0, $b3fabe7b2dfe3262$export$6b468dcfb64c653c)()).domain([
        1,
        10
    ]);
    scale.copy = ()=>(0, $b3fabe7b2dfe3262$export$784d13d8ee351f07)(scale, $afba12b46b827e56$export$2e2bcd8739ae039()).base(scale.base());
    (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
    return scale;
}





function $61e9bd44c37fd38d$var$transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function $61e9bd44c37fd38d$var$transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function $61e9bd44c37fd38d$export$4602684e614eba38(transform) {
    var c = 1, scale = transform($61e9bd44c37fd38d$var$transformSymlog(c), $61e9bd44c37fd38d$var$transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform($61e9bd44c37fd38d$var$transformSymlog(c = +_), $61e9bd44c37fd38d$var$transformSymexp(c)) : c;
    };
    return (0, $6feed068debd21fb$export$16a5d4b4a61a274d)(scale);
}
function $61e9bd44c37fd38d$export$2e2bcd8739ae039() {
    var scale = $61e9bd44c37fd38d$export$4602684e614eba38((0, $b3fabe7b2dfe3262$export$6b468dcfb64c653c)());
    scale.copy = function() {
        return (0, $b3fabe7b2dfe3262$export$784d13d8ee351f07)(scale, $61e9bd44c37fd38d$export$2e2bcd8739ae039()).constant(scale.constant());
    };
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
}






function $327d4e9e3b94b565$var$transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function $327d4e9e3b94b565$var$transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function $327d4e9e3b94b565$var$transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function $327d4e9e3b94b565$export$34695211ec403a46(transform) {
    var scale = transform((0, $b3fabe7b2dfe3262$export$f0954fd7d5368655), (0, $b3fabe7b2dfe3262$export$f0954fd7d5368655)), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform((0, $b3fabe7b2dfe3262$export$f0954fd7d5368655), (0, $b3fabe7b2dfe3262$export$f0954fd7d5368655)) : exponent === 0.5 ? transform($327d4e9e3b94b565$var$transformSqrt, $327d4e9e3b94b565$var$transformSquare) : transform($327d4e9e3b94b565$var$transformPow(exponent), $327d4e9e3b94b565$var$transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return (0, $6feed068debd21fb$export$16a5d4b4a61a274d)(scale);
}
function $327d4e9e3b94b565$export$2e2bcd8739ae039() {
    var scale = $327d4e9e3b94b565$export$34695211ec403a46((0, $b3fabe7b2dfe3262$export$6b468dcfb64c653c)());
    scale.copy = function() {
        return (0, $b3fabe7b2dfe3262$export$784d13d8ee351f07)(scale, $327d4e9e3b94b565$export$2e2bcd8739ae039()).exponent(scale.exponent());
    };
    (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
    return scale;
}
function $327d4e9e3b94b565$export$eba8049fb5020b81() {
    return $327d4e9e3b94b565$export$2e2bcd8739ae039.apply(null, arguments).exponent(0.5);
}






function $ab6597bb2b5a63ee$var$square(x) {
    return Math.sign(x) * x * x;
}
function $ab6597bb2b5a63ee$var$unsquare(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
}
function $ab6597bb2b5a63ee$export$2e2bcd8739ae039() {
    var squared = (0, $b3fabe7b2dfe3262$export$2e2bcd8739ae039)(), range = [
        0,
        1
    ], round = false, unknown;
    function scale(x) {
        var y = $ab6597bb2b5a63ee$var$unsquare(squared(x));
        return isNaN(y) ? unknown : round ? Math.round(y) : y;
    }
    scale.invert = function(y) {
        return squared.invert($ab6597bb2b5a63ee$var$square(y));
    };
    scale.domain = function(_) {
        return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function(_) {
        return arguments.length ? (squared.range((range = Array.from(_, (0, $fba2e8bbd8c1f530$export$2e2bcd8739ae039))).map($ab6597bb2b5a63ee$var$square)), scale) : range.slice();
    };
    scale.rangeRound = function(_) {
        return scale.range(_).round(true);
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, scale) : round;
    };
    scale.clamp = function(_) {
        return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $ab6597bb2b5a63ee$export$2e2bcd8739ae039(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
    return (0, $6feed068debd21fb$export$16a5d4b4a61a274d)(scale);
}




function $4744589eab0a3cc0$export$2e2bcd8739ae039() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = (0, $9d7a860f7743d54c$export$f924a6cad778dddb)(domain, i / n);
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : range[(0, $c6baf87b76d1189b$export$2e2bcd8739ae039)(thresholds, x)];
    }
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : [
            i > 0 ? thresholds[i - 1] : domain[0],
            i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
        ];
    };
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort((0, $c68a91b20f361908$export$2e2bcd8739ae039));
        return rescale();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function() {
        return thresholds.slice();
    };
    scale.copy = function() {
        return $4744589eab0a3cc0$export$2e2bcd8739ae039().domain(domain).range(range).unknown(unknown);
    };
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
}





function $c0df4be0b654a770$export$2e2bcd8739ae039() {
    var x0 = 0, x1 = 1, n = 1, domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown;
    function scale(x) {
        return x != null && x <= x ? range[(0, $c6baf87b76d1189b$export$2e2bcd8739ae039)(domain, x, 0, n)] : unknown;
    }
    function rescale() {
        var i = -1;
        domain = new Array(n);
        while(++i < n)domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [
            x0,
            x1
        ];
    };
    scale.range = function(_) {
        return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : i < 1 ? [
            x0,
            domain[0]
        ] : i >= n ? [
            domain[n - 1],
            x1
        ] : [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function() {
        return domain.slice();
    };
    scale.copy = function() {
        return $c0df4be0b654a770$export$2e2bcd8739ae039().domain([
            x0,
            x1
        ]).range(range).unknown(unknown);
    };
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply((0, $6feed068debd21fb$export$16a5d4b4a61a274d)(scale), arguments);
}




function $32fe106700fffeb1$export$2e2bcd8739ae039() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown, n = 1;
    function scale(x) {
        return x != null && x <= x ? range[(0, $c6baf87b76d1189b$export$2e2bcd8739ae039)(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $32fe106700fffeb1$export$2e2bcd8739ae039().domain(domain).range(range).unknown(unknown);
    };
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply(scale, arguments);
}


const $2bf79513bffd6706$var$t0 = new Date, $2bf79513bffd6706$var$t1 = new Date;
function $2bf79513bffd6706$export$1a539c8b2950ab40(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = (date)=>{
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = (date)=>{
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = (date)=>{
        const d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = (date, step)=>{
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = (start, stop, step)=>{
        const range = [];
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        let previous;
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
    };
    interval.filter = (test)=>{
        return $2bf79513bffd6706$export$1a539c8b2950ab40((date)=>{
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, (date, step)=>{
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)); // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, 1), !test(date)); // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = (start, end)=>{
            $2bf79513bffd6706$var$t0.setTime(+start), $2bf79513bffd6706$var$t1.setTime(+end);
            floori($2bf79513bffd6706$var$t0), floori($2bf79513bffd6706$var$t1);
            return Math.floor(count($2bf79513bffd6706$var$t0, $2bf79513bffd6706$var$t1));
        };
        interval.every = (step)=>{
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d)=>field(d) % step === 0 : (d)=>interval.count(0, d) % step === 0);
        };
    }
    return interval;
}


const $7f35bdd33c787c64$export$79ef0e34099623dc = 1000;
const $7f35bdd33c787c64$export$683905d551c33fa9 = $7f35bdd33c787c64$export$79ef0e34099623dc * 60;
const $7f35bdd33c787c64$export$4157bf0c8e241659 = $7f35bdd33c787c64$export$683905d551c33fa9 * 60;
const $7f35bdd33c787c64$export$353686095f4fbf45 = $7f35bdd33c787c64$export$4157bf0c8e241659 * 24;
const $7f35bdd33c787c64$export$c241eb88520d5016 = $7f35bdd33c787c64$export$353686095f4fbf45 * 7;
const $7f35bdd33c787c64$export$ab95684df7020b26 = $7f35bdd33c787c64$export$353686095f4fbf45 * 30;
const $7f35bdd33c787c64$export$61f8ee2d834c6959 = $7f35bdd33c787c64$export$353686095f4fbf45 * 365;


const $4409f242a2e3a2a1$export$8888529b966033e5 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>date.setHours(0, 0, 0, 0), (date, step)=>date.setDate(date.getDate() + step), (start, end)=>(end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, $7f35bdd33c787c64$export$683905d551c33fa9)) / (0, $7f35bdd33c787c64$export$353686095f4fbf45), (date)=>date.getDate() - 1);
const $4409f242a2e3a2a1$export$6657a54f3034cf45 = $4409f242a2e3a2a1$export$8888529b966033e5.range;
const $4409f242a2e3a2a1$export$c8cbc42cefd47140 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCDate(date.getUTCDate() + step);
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$353686095f4fbf45);
}, (date)=>{
    return date.getUTCDate() - 1;
});
const $4409f242a2e3a2a1$export$d277e198508549a1 = $4409f242a2e3a2a1$export$c8cbc42cefd47140.range;
const $4409f242a2e3a2a1$export$fb065be2d7ea4a71 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCDate(date.getUTCDate() + step);
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$353686095f4fbf45);
}, (date)=>{
    return Math.floor(date / (0, $7f35bdd33c787c64$export$353686095f4fbf45));
});
const $4409f242a2e3a2a1$export$a491caaf5e9481aa = $4409f242a2e3a2a1$export$fb065be2d7ea4a71.range;



const $00f993d5e60ac102$export$46c68a5833bc315b = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, $7f35bdd33c787c64$export$79ef0e34099623dc) - date.getMinutes() * (0, $7f35bdd33c787c64$export$683905d551c33fa9));
}, (date, step)=>{
    date.setTime(+date + step * (0, $7f35bdd33c787c64$export$4157bf0c8e241659));
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$4157bf0c8e241659);
}, (date)=>{
    return date.getHours();
});
const $00f993d5e60ac102$export$fb843f9087cd5235 = $00f993d5e60ac102$export$46c68a5833bc315b.range;
const $00f993d5e60ac102$export$31f6f2b3c63ac75e = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setUTCMinutes(0, 0, 0);
}, (date, step)=>{
    date.setTime(+date + step * (0, $7f35bdd33c787c64$export$4157bf0c8e241659));
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$4157bf0c8e241659);
}, (date)=>{
    return date.getUTCHours();
});
const $00f993d5e60ac102$export$6e7a76cd5f50b719 = $00f993d5e60ac102$export$31f6f2b3c63ac75e.range;



const $b8d233baf96c62cb$export$a7e4c34a52f0576 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, $7f35bdd33c787c64$export$79ef0e34099623dc));
}, (date, step)=>{
    date.setTime(+date + step * (0, $7f35bdd33c787c64$export$683905d551c33fa9));
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$683905d551c33fa9);
}, (date)=>{
    return date.getMinutes();
});
const $b8d233baf96c62cb$export$186d65358374c0a2 = $b8d233baf96c62cb$export$a7e4c34a52f0576.range;
const $b8d233baf96c62cb$export$efe6712d6003761b = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setUTCSeconds(0, 0);
}, (date, step)=>{
    date.setTime(+date + step * (0, $7f35bdd33c787c64$export$683905d551c33fa9));
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$683905d551c33fa9);
}, (date)=>{
    return date.getUTCMinutes();
});
const $b8d233baf96c62cb$export$cedd563624e8ee50 = $b8d233baf96c62cb$export$efe6712d6003761b.range;


const $10532164eb1568d5$export$7e1084fb688591c1 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setMonth(date.getMonth() + step);
}, (start, end)=>{
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date)=>{
    return date.getMonth();
});
const $10532164eb1568d5$export$3e24aa839cd0f1c4 = $10532164eb1568d5$export$7e1084fb688591c1.range;
const $10532164eb1568d5$export$cd49b3d2bcfe50d5 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end)=>{
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date)=>{
    return date.getUTCMonth();
});
const $10532164eb1568d5$export$49159f585997498 = $10532164eb1568d5$export$cd49b3d2bcfe50d5.range;



const $183f8449d1fe2a51$export$3d3c77ce7df7d30d = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setTime(date - date.getMilliseconds());
}, (date, step)=>{
    date.setTime(+date + step * (0, $7f35bdd33c787c64$export$79ef0e34099623dc));
}, (start, end)=>{
    return (end - start) / (0, $7f35bdd33c787c64$export$79ef0e34099623dc);
}, (date)=>{
    return date.getUTCSeconds();
});
const $183f8449d1fe2a51$export$4792e48abc550fa1 = $183f8449d1fe2a51$export$3d3c77ce7df7d30d.range;




const $695c6a9dcf1e3327$export$edc5e5cb87280477 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)(()=>{
// noop
}, (date, step)=>{
    date.setTime(+date + step);
}, (start, end)=>{
    return end - start;
});
// An optimized implementation for this simple case.
$695c6a9dcf1e3327$export$edc5e5cb87280477.every = (k)=>{
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return $695c6a9dcf1e3327$export$edc5e5cb87280477;
    return (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
        date.setTime(Math.floor(date / k) * k);
    }, (date, step)=>{
        date.setTime(+date + step * k);
    }, (start, end)=>{
        return (end - start) / k;
    });
};
const $695c6a9dcf1e3327$export$9a27fac83d67afd3 = $695c6a9dcf1e3327$export$edc5e5cb87280477.range;








function $374b91dc1c90dd87$var$timeWeekday(i) {
    return (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setDate(date.getDate() + step * 7);
    }, (start, end)=>{
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, $7f35bdd33c787c64$export$683905d551c33fa9)) / (0, $7f35bdd33c787c64$export$c241eb88520d5016);
    });
}
const $374b91dc1c90dd87$export$22ee6205b762968c = $374b91dc1c90dd87$var$timeWeekday(0);
const $374b91dc1c90dd87$export$e79bbe0177cf1b01 = $374b91dc1c90dd87$var$timeWeekday(1);
const $374b91dc1c90dd87$export$57c0658c29f77708 = $374b91dc1c90dd87$var$timeWeekday(2);
const $374b91dc1c90dd87$export$3fbeef226c256e43 = $374b91dc1c90dd87$var$timeWeekday(3);
const $374b91dc1c90dd87$export$608689422d5cf9f4 = $374b91dc1c90dd87$var$timeWeekday(4);
const $374b91dc1c90dd87$export$548e5227aa183dca = $374b91dc1c90dd87$var$timeWeekday(5);
const $374b91dc1c90dd87$export$c56a3ad248908e19 = $374b91dc1c90dd87$var$timeWeekday(6);
const $374b91dc1c90dd87$export$eac514c8a8674eba = $374b91dc1c90dd87$export$22ee6205b762968c.range;
const $374b91dc1c90dd87$export$f7219b1481948356 = $374b91dc1c90dd87$export$e79bbe0177cf1b01.range;
const $374b91dc1c90dd87$export$77e22b12c5bed05b = $374b91dc1c90dd87$export$57c0658c29f77708.range;
const $374b91dc1c90dd87$export$b85d407a471809e8 = $374b91dc1c90dd87$export$3fbeef226c256e43.range;
const $374b91dc1c90dd87$export$c1bc1c49254c8855 = $374b91dc1c90dd87$export$608689422d5cf9f4.range;
const $374b91dc1c90dd87$export$3691a1557fff46f1 = $374b91dc1c90dd87$export$548e5227aa183dca.range;
const $374b91dc1c90dd87$export$b755452d02cba8d2 = $374b91dc1c90dd87$export$c56a3ad248908e19.range;
function $374b91dc1c90dd87$var$utcWeekday(i) {
    return (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, (start, end)=>{
        return (end - start) / (0, $7f35bdd33c787c64$export$c241eb88520d5016);
    });
}
const $374b91dc1c90dd87$export$4898b06303a92011 = $374b91dc1c90dd87$var$utcWeekday(0);
const $374b91dc1c90dd87$export$9cfc53b9cfafd080 = $374b91dc1c90dd87$var$utcWeekday(1);
const $374b91dc1c90dd87$export$2a6d545f77eceb15 = $374b91dc1c90dd87$var$utcWeekday(2);
const $374b91dc1c90dd87$export$a5c25d8ed64433c4 = $374b91dc1c90dd87$var$utcWeekday(3);
const $374b91dc1c90dd87$export$1db08111baec2f53 = $374b91dc1c90dd87$var$utcWeekday(4);
const $374b91dc1c90dd87$export$29265e34dd5921f7 = $374b91dc1c90dd87$var$utcWeekday(5);
const $374b91dc1c90dd87$export$85b74dad05049604 = $374b91dc1c90dd87$var$utcWeekday(6);
const $374b91dc1c90dd87$export$6f3e1c2b0f7d7880 = $374b91dc1c90dd87$export$4898b06303a92011.range;
const $374b91dc1c90dd87$export$1d2d8b858bb366f9 = $374b91dc1c90dd87$export$9cfc53b9cfafd080.range;
const $374b91dc1c90dd87$export$1d5f6785fc7f30f8 = $374b91dc1c90dd87$export$2a6d545f77eceb15.range;
const $374b91dc1c90dd87$export$7a75faf0e37ef4af = $374b91dc1c90dd87$export$a5c25d8ed64433c4.range;
const $374b91dc1c90dd87$export$417eb959611b2f2f = $374b91dc1c90dd87$export$1db08111baec2f53.range;
const $374b91dc1c90dd87$export$59d308db7af08c64 = $374b91dc1c90dd87$export$29265e34dd5921f7.range;
const $374b91dc1c90dd87$export$a124108a0a7f34c8 = $374b91dc1c90dd87$export$85b74dad05049604.range;




const $7ebdeb72f8eadd37$export$cd17cfe45df0c046 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setFullYear(date.getFullYear() + step);
}, (start, end)=>{
    return end.getFullYear() - start.getFullYear();
}, (date)=>{
    return date.getFullYear();
});
// An optimized implementation for this simple case.
$7ebdeb72f8eadd37$export$cd17cfe45df0c046.every = (k)=>{
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setFullYear(date.getFullYear() + step * k);
    });
};
const $7ebdeb72f8eadd37$export$69a4e90dd2cc3bd1 = $7ebdeb72f8eadd37$export$cd17cfe45df0c046.range;
const $7ebdeb72f8eadd37$export$d5c3802e389714c4 = (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step)=>{
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end)=>{
    return end.getUTCFullYear() - start.getUTCFullYear();
}, (date)=>{
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
$7ebdeb72f8eadd37$export$d5c3802e389714c4.every = (k)=>{
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, $2bf79513bffd6706$export$1a539c8b2950ab40)((date)=>{
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, (date, step)=>{
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
const $7ebdeb72f8eadd37$export$3e24d311e17f5802 = $7ebdeb72f8eadd37$export$d5c3802e389714c4.range;


function $3d2d1560e489ccaa$var$ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
        [
            (0, $183f8449d1fe2a51$export$3d3c77ce7df7d30d),
            1,
            (0, $7f35bdd33c787c64$export$79ef0e34099623dc)
        ],
        [
            (0, $183f8449d1fe2a51$export$3d3c77ce7df7d30d),
            5,
            5 * (0, $7f35bdd33c787c64$export$79ef0e34099623dc)
        ],
        [
            (0, $183f8449d1fe2a51$export$3d3c77ce7df7d30d),
            15,
            15 * (0, $7f35bdd33c787c64$export$79ef0e34099623dc)
        ],
        [
            (0, $183f8449d1fe2a51$export$3d3c77ce7df7d30d),
            30,
            30 * (0, $7f35bdd33c787c64$export$79ef0e34099623dc)
        ],
        [
            minute,
            1,
            (0, $7f35bdd33c787c64$export$683905d551c33fa9)
        ],
        [
            minute,
            5,
            5 * (0, $7f35bdd33c787c64$export$683905d551c33fa9)
        ],
        [
            minute,
            15,
            15 * (0, $7f35bdd33c787c64$export$683905d551c33fa9)
        ],
        [
            minute,
            30,
            30 * (0, $7f35bdd33c787c64$export$683905d551c33fa9)
        ],
        [
            hour,
            1,
            (0, $7f35bdd33c787c64$export$4157bf0c8e241659)
        ],
        [
            hour,
            3,
            3 * (0, $7f35bdd33c787c64$export$4157bf0c8e241659)
        ],
        [
            hour,
            6,
            6 * (0, $7f35bdd33c787c64$export$4157bf0c8e241659)
        ],
        [
            hour,
            12,
            12 * (0, $7f35bdd33c787c64$export$4157bf0c8e241659)
        ],
        [
            day,
            1,
            (0, $7f35bdd33c787c64$export$353686095f4fbf45)
        ],
        [
            day,
            2,
            2 * (0, $7f35bdd33c787c64$export$353686095f4fbf45)
        ],
        [
            week,
            1,
            (0, $7f35bdd33c787c64$export$c241eb88520d5016)
        ],
        [
            month,
            1,
            (0, $7f35bdd33c787c64$export$ab95684df7020b26)
        ],
        [
            month,
            3,
            3 * (0, $7f35bdd33c787c64$export$ab95684df7020b26)
        ],
        [
            year,
            1,
            (0, $7f35bdd33c787c64$export$61f8ee2d834c6959)
        ]
    ];
    function ticks(start, stop, count) {
        const reverse = stop < start;
        if (reverse) [start, stop] = [
            stop,
            start
        ];
        const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
        const target = Math.abs(stop - start) / count;
        const i = (0, $100ef5a581ce35fe$export$2e2bcd8739ae039)(([, , step])=>step).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every((0, $61a6aa10219c54a4$export$81087d9b915d4ede)(start / (0, $7f35bdd33c787c64$export$61f8ee2d834c6959), stop / (0, $7f35bdd33c787c64$export$61f8ee2d834c6959), count));
        if (i === 0) return (0, $695c6a9dcf1e3327$export$edc5e5cb87280477).every(Math.max((0, $61a6aa10219c54a4$export$81087d9b915d4ede)(start, stop, count), 1));
        const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step);
    }
    return [
        ticks,
        tickInterval
    ];
}
const [$3d2d1560e489ccaa$export$826ba5ae907e9767, $3d2d1560e489ccaa$export$6262d8d056ea44c4] = $3d2d1560e489ccaa$var$ticker((0, $7ebdeb72f8eadd37$export$d5c3802e389714c4), (0, $10532164eb1568d5$export$cd49b3d2bcfe50d5), (0, $374b91dc1c90dd87$export$4898b06303a92011), (0, $4409f242a2e3a2a1$export$fb065be2d7ea4a71), (0, $00f993d5e60ac102$export$31f6f2b3c63ac75e), (0, $b8d233baf96c62cb$export$efe6712d6003761b));
const [$3d2d1560e489ccaa$export$60c76498552d28a6, $3d2d1560e489ccaa$export$69511150134dd174] = $3d2d1560e489ccaa$var$ticker((0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046), (0, $10532164eb1568d5$export$7e1084fb688591c1), (0, $374b91dc1c90dd87$export$22ee6205b762968c), (0, $4409f242a2e3a2a1$export$8888529b966033e5), (0, $00f993d5e60ac102$export$46c68a5833bc315b), (0, $b8d233baf96c62cb$export$a7e4c34a52f0576));



function $7bdc349069fba8bd$var$localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function $7bdc349069fba8bd$var$utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function $7bdc349069fba8bd$var$newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function $7bdc349069fba8bd$export$2e2bcd8739ae039(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = $7bdc349069fba8bd$var$formatRe(locale_periods), periodLookup = $7bdc349069fba8bd$var$formatLookup(locale_periods), weekdayRe = $7bdc349069fba8bd$var$formatRe(locale_weekdays), weekdayLookup = $7bdc349069fba8bd$var$formatLookup(locale_weekdays), shortWeekdayRe = $7bdc349069fba8bd$var$formatRe(locale_shortWeekdays), shortWeekdayLookup = $7bdc349069fba8bd$var$formatLookup(locale_shortWeekdays), monthRe = $7bdc349069fba8bd$var$formatRe(locale_months), monthLookup = $7bdc349069fba8bd$var$formatLookup(locale_months), shortMonthRe = $7bdc349069fba8bd$var$formatRe(locale_shortMonths), shortMonthLookup = $7bdc349069fba8bd$var$formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": $7bdc349069fba8bd$var$formatDayOfMonth,
        "e": $7bdc349069fba8bd$var$formatDayOfMonth,
        "f": $7bdc349069fba8bd$var$formatMicroseconds,
        "g": $7bdc349069fba8bd$var$formatYearISO,
        "G": $7bdc349069fba8bd$var$formatFullYearISO,
        "H": $7bdc349069fba8bd$var$formatHour24,
        "I": $7bdc349069fba8bd$var$formatHour12,
        "j": $7bdc349069fba8bd$var$formatDayOfYear,
        "L": $7bdc349069fba8bd$var$formatMilliseconds,
        "m": $7bdc349069fba8bd$var$formatMonthNumber,
        "M": $7bdc349069fba8bd$var$formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": $7bdc349069fba8bd$var$formatUnixTimestamp,
        "s": $7bdc349069fba8bd$var$formatUnixTimestampSeconds,
        "S": $7bdc349069fba8bd$var$formatSeconds,
        "u": $7bdc349069fba8bd$var$formatWeekdayNumberMonday,
        "U": $7bdc349069fba8bd$var$formatWeekNumberSunday,
        "V": $7bdc349069fba8bd$var$formatWeekNumberISO,
        "w": $7bdc349069fba8bd$var$formatWeekdayNumberSunday,
        "W": $7bdc349069fba8bd$var$formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": $7bdc349069fba8bd$var$formatYear,
        "Y": $7bdc349069fba8bd$var$formatFullYear,
        "Z": $7bdc349069fba8bd$var$formatZone,
        "%": $7bdc349069fba8bd$var$formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": $7bdc349069fba8bd$var$formatUTCDayOfMonth,
        "e": $7bdc349069fba8bd$var$formatUTCDayOfMonth,
        "f": $7bdc349069fba8bd$var$formatUTCMicroseconds,
        "g": $7bdc349069fba8bd$var$formatUTCYearISO,
        "G": $7bdc349069fba8bd$var$formatUTCFullYearISO,
        "H": $7bdc349069fba8bd$var$formatUTCHour24,
        "I": $7bdc349069fba8bd$var$formatUTCHour12,
        "j": $7bdc349069fba8bd$var$formatUTCDayOfYear,
        "L": $7bdc349069fba8bd$var$formatUTCMilliseconds,
        "m": $7bdc349069fba8bd$var$formatUTCMonthNumber,
        "M": $7bdc349069fba8bd$var$formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": $7bdc349069fba8bd$var$formatUnixTimestamp,
        "s": $7bdc349069fba8bd$var$formatUnixTimestampSeconds,
        "S": $7bdc349069fba8bd$var$formatUTCSeconds,
        "u": $7bdc349069fba8bd$var$formatUTCWeekdayNumberMonday,
        "U": $7bdc349069fba8bd$var$formatUTCWeekNumberSunday,
        "V": $7bdc349069fba8bd$var$formatUTCWeekNumberISO,
        "w": $7bdc349069fba8bd$var$formatUTCWeekdayNumberSunday,
        "W": $7bdc349069fba8bd$var$formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": $7bdc349069fba8bd$var$formatUTCYear,
        "Y": $7bdc349069fba8bd$var$formatUTCFullYear,
        "Z": $7bdc349069fba8bd$var$formatUTCZone,
        "%": $7bdc349069fba8bd$var$formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": $7bdc349069fba8bd$var$parseDayOfMonth,
        "e": $7bdc349069fba8bd$var$parseDayOfMonth,
        "f": $7bdc349069fba8bd$var$parseMicroseconds,
        "g": $7bdc349069fba8bd$var$parseYear,
        "G": $7bdc349069fba8bd$var$parseFullYear,
        "H": $7bdc349069fba8bd$var$parseHour24,
        "I": $7bdc349069fba8bd$var$parseHour24,
        "j": $7bdc349069fba8bd$var$parseDayOfYear,
        "L": $7bdc349069fba8bd$var$parseMilliseconds,
        "m": $7bdc349069fba8bd$var$parseMonthNumber,
        "M": $7bdc349069fba8bd$var$parseMinutes,
        "p": parsePeriod,
        "q": $7bdc349069fba8bd$var$parseQuarter,
        "Q": $7bdc349069fba8bd$var$parseUnixTimestamp,
        "s": $7bdc349069fba8bd$var$parseUnixTimestampSeconds,
        "S": $7bdc349069fba8bd$var$parseSeconds,
        "u": $7bdc349069fba8bd$var$parseWeekdayNumberMonday,
        "U": $7bdc349069fba8bd$var$parseWeekNumberSunday,
        "V": $7bdc349069fba8bd$var$parseWeekNumberISO,
        "w": $7bdc349069fba8bd$var$parseWeekdayNumberSunday,
        "W": $7bdc349069fba8bd$var$parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": $7bdc349069fba8bd$var$parseYear,
        "Y": $7bdc349069fba8bd$var$parseFullYear,
        "Z": $7bdc349069fba8bd$var$parseZone,
        "%": $7bdc349069fba8bd$var$parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = $7bdc349069fba8bd$var$pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = $7bdc349069fba8bd$var$newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = $7bdc349069fba8bd$var$utcDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? (0, $374b91dc1c90dd87$export$9cfc53b9cfafd080).ceil(week) : (0, $374b91dc1c90dd87$export$9cfc53b9cfafd080)(week);
                    week = (0, $4409f242a2e3a2a1$export$c8cbc42cefd47140).offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = $7bdc349069fba8bd$var$localDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? (0, $374b91dc1c90dd87$export$e79bbe0177cf1b01).ceil(week) : (0, $374b91dc1c90dd87$export$e79bbe0177cf1b01)(week);
                    week = (0, $4409f242a2e3a2a1$export$8888529b966033e5).offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? $7bdc349069fba8bd$var$utcDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)).getUTCDay() : $7bdc349069fba8bd$var$localDate($7bdc349069fba8bd$var$newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return $7bdc349069fba8bd$var$utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return $7bdc349069fba8bd$var$localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in $7bdc349069fba8bd$var$pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) return -1;
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
var $7bdc349069fba8bd$var$pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, $7bdc349069fba8bd$var$numberRe = /^\s*\d+/, $7bdc349069fba8bd$var$percentRe = /^%/, $7bdc349069fba8bd$var$requoteRe = /[\\^$*+?|[\]().{}]/g;
function $7bdc349069fba8bd$var$pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function $7bdc349069fba8bd$var$requote(s) {
    return s.replace($7bdc349069fba8bd$var$requoteRe, "\\$&");
}
function $7bdc349069fba8bd$var$formatRe(names) {
    return new RegExp("^(?:" + names.map($7bdc349069fba8bd$var$requote).join("|") + ")", "i");
}
function $7bdc349069fba8bd$var$formatLookup(names) {
    return new Map(names.map((name, i)=>[
            name.toLowerCase(),
            i
        ]));
}
function $7bdc349069fba8bd$var$parseWeekdayNumberSunday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekdayNumberMonday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekNumberSunday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekNumberISO(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseWeekNumberMonday(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseFullYear(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseYear(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseQuarter(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMonthNumber(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseDayOfMonth(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseDayOfYear(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseHour24(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMinutes(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseSeconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMilliseconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseMicroseconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseLiteralPercent(d, string, i) {
    var n = $7bdc349069fba8bd$var$percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function $7bdc349069fba8bd$var$parseUnixTimestamp(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$parseUnixTimestampSeconds(d, string, i) {
    var n = $7bdc349069fba8bd$var$numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function $7bdc349069fba8bd$var$formatDayOfMonth(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getDate(), p, 2);
}
function $7bdc349069fba8bd$var$formatHour24(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getHours(), p, 2);
}
function $7bdc349069fba8bd$var$formatHour12(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getHours() % 12 || 12, p, 2);
}
function $7bdc349069fba8bd$var$formatDayOfYear(d, p) {
    return $7bdc349069fba8bd$var$pad(1 + (0, $4409f242a2e3a2a1$export$8888529b966033e5).count((0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046)(d), d), p, 3);
}
function $7bdc349069fba8bd$var$formatMilliseconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getMilliseconds(), p, 3);
}
function $7bdc349069fba8bd$var$formatMicroseconds(d, p) {
    return $7bdc349069fba8bd$var$formatMilliseconds(d, p) + "000";
}
function $7bdc349069fba8bd$var$formatMonthNumber(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getMonth() + 1, p, 2);
}
function $7bdc349069fba8bd$var$formatMinutes(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getMinutes(), p, 2);
}
function $7bdc349069fba8bd$var$formatSeconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getSeconds(), p, 2);
}
function $7bdc349069fba8bd$var$formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function $7bdc349069fba8bd$var$formatWeekNumberSunday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $374b91dc1c90dd87$export$22ee6205b762968c).count((0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? (0, $374b91dc1c90dd87$export$608689422d5cf9f4)(d) : (0, $374b91dc1c90dd87$export$608689422d5cf9f4).ceil(d);
}
function $7bdc349069fba8bd$var$formatWeekNumberISO(d, p) {
    d = $7bdc349069fba8bd$var$dISO(d);
    return $7bdc349069fba8bd$var$pad((0, $374b91dc1c90dd87$export$608689422d5cf9f4).count((0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046)(d), d) + ((0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046)(d).getDay() === 4), p, 2);
}
function $7bdc349069fba8bd$var$formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function $7bdc349069fba8bd$var$formatWeekNumberMonday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $374b91dc1c90dd87$export$e79bbe0177cf1b01).count((0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$formatYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatYearISO(d, p) {
    d = $7bdc349069fba8bd$var$dISO(d);
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatFullYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? (0, $374b91dc1c90dd87$export$608689422d5cf9f4)(d) : (0, $374b91dc1c90dd87$export$608689422d5cf9f4).ceil(d);
    return $7bdc349069fba8bd$var$pad(d.getFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + $7bdc349069fba8bd$var$pad(z / 60 | 0, "0", 2) + $7bdc349069fba8bd$var$pad(z % 60, "0", 2);
}
function $7bdc349069fba8bd$var$formatUTCDayOfMonth(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCDate(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCHour24(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCHours(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCHour12(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCHours() % 12 || 12, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCDayOfYear(d, p) {
    return $7bdc349069fba8bd$var$pad(1 + (0, $4409f242a2e3a2a1$export$c8cbc42cefd47140).count((0, $7ebdeb72f8eadd37$export$d5c3802e389714c4)(d), d), p, 3);
}
function $7bdc349069fba8bd$var$formatUTCMilliseconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCMilliseconds(), p, 3);
}
function $7bdc349069fba8bd$var$formatUTCMicroseconds(d, p) {
    return $7bdc349069fba8bd$var$formatUTCMilliseconds(d, p) + "000";
}
function $7bdc349069fba8bd$var$formatUTCMonthNumber(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCMonth() + 1, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCMinutes(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCMinutes(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCSeconds(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCSeconds(), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function $7bdc349069fba8bd$var$formatUTCWeekNumberSunday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $374b91dc1c90dd87$export$4898b06303a92011).count((0, $7ebdeb72f8eadd37$export$d5c3802e389714c4)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? (0, $374b91dc1c90dd87$export$1db08111baec2f53)(d) : (0, $374b91dc1c90dd87$export$1db08111baec2f53).ceil(d);
}
function $7bdc349069fba8bd$var$formatUTCWeekNumberISO(d, p) {
    d = $7bdc349069fba8bd$var$UTCdISO(d);
    return $7bdc349069fba8bd$var$pad((0, $374b91dc1c90dd87$export$1db08111baec2f53).count((0, $7ebdeb72f8eadd37$export$d5c3802e389714c4)(d), d) + ((0, $7ebdeb72f8eadd37$export$d5c3802e389714c4)(d).getUTCDay() === 4), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function $7bdc349069fba8bd$var$formatUTCWeekNumberMonday(d, p) {
    return $7bdc349069fba8bd$var$pad((0, $374b91dc1c90dd87$export$9cfc53b9cfafd080).count((0, $7ebdeb72f8eadd37$export$d5c3802e389714c4)(d) - 1, d), p, 2);
}
function $7bdc349069fba8bd$var$formatUTCYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCYearISO(d, p) {
    d = $7bdc349069fba8bd$var$UTCdISO(d);
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 100, p, 2);
}
function $7bdc349069fba8bd$var$formatUTCFullYear(d, p) {
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? (0, $374b91dc1c90dd87$export$1db08111baec2f53)(d) : (0, $374b91dc1c90dd87$export$1db08111baec2f53).ceil(d);
    return $7bdc349069fba8bd$var$pad(d.getUTCFullYear() % 10000, p, 4);
}
function $7bdc349069fba8bd$var$formatUTCZone() {
    return "+0000";
}
function $7bdc349069fba8bd$var$formatLiteralPercent() {
    return "%";
}
function $7bdc349069fba8bd$var$formatUnixTimestamp(d) {
    return +d;
}
function $7bdc349069fba8bd$var$formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}


var $55b060da6b737205$var$locale;
var $55b060da6b737205$export$94f4d87fad5dcf9a;
var $55b060da6b737205$export$32b9cd16e1b8c8d2;
var $55b060da6b737205$export$1a08fe38f63ebbbb;
var $55b060da6b737205$export$3edae9cf8e233729;
$55b060da6b737205$export$2e2bcd8739ae039({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function $55b060da6b737205$export$2e2bcd8739ae039(definition) {
    $55b060da6b737205$var$locale = (0, $7bdc349069fba8bd$export$2e2bcd8739ae039)(definition);
    $55b060da6b737205$export$94f4d87fad5dcf9a = $55b060da6b737205$var$locale.format;
    $55b060da6b737205$export$32b9cd16e1b8c8d2 = $55b060da6b737205$var$locale.parse;
    $55b060da6b737205$export$1a08fe38f63ebbbb = $55b060da6b737205$var$locale.utcFormat;
    $55b060da6b737205$export$3edae9cf8e233729 = $55b060da6b737205$var$locale.utcParse;
    return $55b060da6b737205$var$locale;
}





function $373e622e81809fb2$var$date(t) {
    return new Date(t);
}
function $373e622e81809fb2$var$number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function $373e622e81809fb2$export$56bbcdb8aca31149(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = (0, $b3fabe7b2dfe3262$export$2e2bcd8739ae039)(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain(Array.from(_, $373e622e81809fb2$var$number)) : domain().map($373e622e81809fb2$var$date);
    };
    scale.ticks = function(interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain((0, $6f71f7d57b1895e1$export$2e2bcd8739ae039)(d, interval)) : scale;
    };
    scale.copy = function() {
        return (0, $b3fabe7b2dfe3262$export$784d13d8ee351f07)(scale, $373e622e81809fb2$export$56bbcdb8aca31149(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
}
function $373e622e81809fb2$export$2e2bcd8739ae039() {
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply($373e622e81809fb2$export$56bbcdb8aca31149((0, $3d2d1560e489ccaa$export$60c76498552d28a6), (0, $3d2d1560e489ccaa$export$69511150134dd174), (0, $7ebdeb72f8eadd37$export$cd17cfe45df0c046), (0, $10532164eb1568d5$export$7e1084fb688591c1), (0, $374b91dc1c90dd87$export$22ee6205b762968c), (0, $4409f242a2e3a2a1$export$8888529b966033e5), (0, $00f993d5e60ac102$export$46c68a5833bc315b), (0, $b8d233baf96c62cb$export$a7e4c34a52f0576), (0, $183f8449d1fe2a51$export$3d3c77ce7df7d30d), (0, $55b060da6b737205$export$94f4d87fad5dcf9a)).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}






function $00ae5eac260a3910$export$2e2bcd8739ae039() {
    return (0, $2cd7bdc78666648b$export$23c7bb9e6558da2a).apply((0, $373e622e81809fb2$export$56bbcdb8aca31149)((0, $3d2d1560e489ccaa$export$826ba5ae907e9767), (0, $3d2d1560e489ccaa$export$6262d8d056ea44c4), (0, $7ebdeb72f8eadd37$export$d5c3802e389714c4), (0, $10532164eb1568d5$export$cd49b3d2bcfe50d5), (0, $374b91dc1c90dd87$export$4898b06303a92011), (0, $4409f242a2e3a2a1$export$c8cbc42cefd47140), (0, $00f993d5e60ac102$export$31f6f2b3c63ac75e), (0, $b8d233baf96c62cb$export$efe6712d6003761b), (0, $183f8449d1fe2a51$export$3d3c77ce7df7d30d), (0, $55b060da6b737205$export$1a08fe38f63ebbbb)).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
}









function $4a06e872f4f7b230$var$transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = (0, $b3fabe7b2dfe3262$export$f0954fd7d5368655), clamp = false, unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1;
            return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [
                interpolator(0),
                interpolator(1)
            ];
        };
    }
    scale.range = range((0, $b6e2dec750af77c9$export$2e2bcd8739ae039));
    scale.rangeRound = range((0, $abcc3697e9133f9f$export$2e2bcd8739ae039));
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function $4a06e872f4f7b230$export$784d13d8ee351f07(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function $4a06e872f4f7b230$export$2e2bcd8739ae039() {
    var scale = (0, $6feed068debd21fb$export$16a5d4b4a61a274d)($4a06e872f4f7b230$var$transformer()((0, $b3fabe7b2dfe3262$export$f0954fd7d5368655)));
    scale.copy = function() {
        return $4a06e872f4f7b230$export$784d13d8ee351f07(scale, $4a06e872f4f7b230$export$2e2bcd8739ae039());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $4a06e872f4f7b230$export$6843e08bf2ff981f() {
    var scale = (0, $afba12b46b827e56$export$860836db074028f0)($4a06e872f4f7b230$var$transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return $4a06e872f4f7b230$export$784d13d8ee351f07(scale, $4a06e872f4f7b230$export$6843e08bf2ff981f()).base(scale.base());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $4a06e872f4f7b230$export$9d4af4de62c81941() {
    var scale = (0, $61e9bd44c37fd38d$export$4602684e614eba38)($4a06e872f4f7b230$var$transformer());
    scale.copy = function() {
        return $4a06e872f4f7b230$export$784d13d8ee351f07(scale, $4a06e872f4f7b230$export$9d4af4de62c81941()).constant(scale.constant());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $4a06e872f4f7b230$export$de9f78581b4f2405() {
    var scale = (0, $327d4e9e3b94b565$export$34695211ec403a46)($4a06e872f4f7b230$var$transformer());
    scale.copy = function() {
        return $4a06e872f4f7b230$export$784d13d8ee351f07(scale, $4a06e872f4f7b230$export$de9f78581b4f2405()).exponent(scale.exponent());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $4a06e872f4f7b230$export$413d935127ed466e() {
    return $4a06e872f4f7b230$export$de9f78581b4f2405.apply(null, arguments).exponent(0.5);
}





function $e69eda6cc0579012$export$2e2bcd8739ae039() {
    var domain = [], interpolator = (0, $b3fabe7b2dfe3262$export$f0954fd7d5368655);
    function scale(x) {
        if (x != null && !isNaN(x = +x)) return interpolator(((0, $c6baf87b76d1189b$export$2e2bcd8739ae039)(domain, x, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort((0, $c68a91b20f361908$export$2e2bcd8739ae039));
        return scale;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function() {
        return domain.map((d, i)=>interpolator(i / (domain.length - 1)));
    };
    scale.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (_, i)=>(0, $9d7a860f7743d54c$export$2e2bcd8739ae039)(domain, i / n));
    };
    scale.copy = function() {
        return $e69eda6cc0579012$export$2e2bcd8739ae039(interpolator).domain(domain);
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}










function $a253cf302564a52d$var$transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, s = 1, t0, t1, t2, k10, k21, interpolator = (0, $b3fabe7b2dfe3262$export$f0954fd7d5368655), transform, clamp = false, unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [
            x0,
            x1,
            x2
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1, r2;
            return arguments.length ? ([r0, r1, r2] = _, interpolator = (0, $19b313f6b540088d$export$2e2bcd8739ae039)(interpolate, [
                r0,
                r1,
                r2
            ]), scale) : [
                interpolator(0),
                interpolator(0.5),
                interpolator(1)
            ];
        };
    }
    scale.range = range((0, $b6e2dec750af77c9$export$2e2bcd8739ae039));
    scale.rangeRound = range((0, $abcc3697e9133f9f$export$2e2bcd8739ae039));
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
        return scale;
    };
}
function $a253cf302564a52d$export$2e2bcd8739ae039() {
    var scale = (0, $6feed068debd21fb$export$16a5d4b4a61a274d)($a253cf302564a52d$var$transformer()((0, $b3fabe7b2dfe3262$export$f0954fd7d5368655)));
    scale.copy = function() {
        return (0, $4a06e872f4f7b230$export$784d13d8ee351f07)(scale, $a253cf302564a52d$export$2e2bcd8739ae039());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $a253cf302564a52d$export$5f0266a9159c47fb() {
    var scale = (0, $afba12b46b827e56$export$860836db074028f0)($a253cf302564a52d$var$transformer()).domain([
        0.1,
        1,
        10
    ]);
    scale.copy = function() {
        return (0, $4a06e872f4f7b230$export$784d13d8ee351f07)(scale, $a253cf302564a52d$export$5f0266a9159c47fb()).base(scale.base());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $a253cf302564a52d$export$50b3da713cf557c6() {
    var scale = (0, $61e9bd44c37fd38d$export$4602684e614eba38)($a253cf302564a52d$var$transformer());
    scale.copy = function() {
        return (0, $4a06e872f4f7b230$export$784d13d8ee351f07)(scale, $a253cf302564a52d$export$50b3da713cf557c6()).constant(scale.constant());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $a253cf302564a52d$export$d6cedcc63bf26e7e() {
    var scale = (0, $327d4e9e3b94b565$export$34695211ec403a46)($a253cf302564a52d$var$transformer());
    scale.copy = function() {
        return (0, $4a06e872f4f7b230$export$784d13d8ee351f07)(scale, $a253cf302564a52d$export$d6cedcc63bf26e7e()).exponent(scale.exponent());
    };
    return (0, $2cd7bdc78666648b$export$7d6b419e59e83f3d).apply(scale, arguments);
}
function $a253cf302564a52d$export$33ddefb5c4ab9e9c() {
    return $a253cf302564a52d$export$d6cedcc63bf26e7e.apply(null, arguments).exponent(0.5);
}





var $526aa4e313b6feb4$exports = {};

$parcel$export($526aa4e313b6feb4$exports, "schemeCategory10", () => $57b47b58985c46c1$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeAccent", () => $ea7ddece6dee86f6$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeDark2", () => $d970e380c303288c$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePaired", () => $7a52fd054773d69f$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePastel1", () => $42d6c3748c5e2501$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePastel2", () => $4e2ee5516585bd7c$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeSet1", () => $48d11645e668b562$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeSet2", () => $0b855dddc55eac0a$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeSet3", () => $9ae9582900067fbd$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeTableau10", () => $20f1a90d60ecae63$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateBrBG", () => $e9c9af959cb89dd2$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeBrBG", () => $e9c9af959cb89dd2$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePRGn", () => $7bb7a4ac81d2ae59$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePRGn", () => $7bb7a4ac81d2ae59$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePiYG", () => $133ae05da4ecb681$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePiYG", () => $133ae05da4ecb681$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePuOr", () => $147044a779991dd9$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePuOr", () => $147044a779991dd9$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateRdBu", () => $776da48f727a9922$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeRdBu", () => $776da48f727a9922$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateRdGy", () => $e275f7d4ad59bc99$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeRdGy", () => $e275f7d4ad59bc99$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateRdYlBu", () => $fd63b578dda0859d$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeRdYlBu", () => $fd63b578dda0859d$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateRdYlGn", () => $11b409ad69274bed$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeRdYlGn", () => $11b409ad69274bed$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateSpectral", () => $1e3e199029698fec$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeSpectral", () => $1e3e199029698fec$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateBuGn", () => $f5eea09347263e23$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeBuGn", () => $f5eea09347263e23$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateBuPu", () => $6d0bf68a4f38c729$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeBuPu", () => $6d0bf68a4f38c729$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateGnBu", () => $039b66d84b8f219f$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeGnBu", () => $039b66d84b8f219f$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateOrRd", () => $36acea99019a5d00$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeOrRd", () => $36acea99019a5d00$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePuBuGn", () => $b080ff1861f2a7e6$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePuBuGn", () => $b080ff1861f2a7e6$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePuBu", () => $530febdeeb2e9111$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePuBu", () => $530febdeeb2e9111$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePuRd", () => $b4be567774796d51$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePuRd", () => $b4be567774796d51$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateRdPu", () => $507564893bef3fd0$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeRdPu", () => $507564893bef3fd0$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateYlGnBu", () => $251aa7363d551751$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeYlGnBu", () => $251aa7363d551751$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateYlGn", () => $155ffc36e1fa1006$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeYlGn", () => $155ffc36e1fa1006$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateYlOrBr", () => $82dfd26a92608295$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeYlOrBr", () => $82dfd26a92608295$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateYlOrRd", () => $36b7d53cdb88f077$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeYlOrRd", () => $36b7d53cdb88f077$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateBlues", () => $233b063f50ff2a5e$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeBlues", () => $233b063f50ff2a5e$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateGreens", () => $d34bd673da4e0c1e$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeGreens", () => $d34bd673da4e0c1e$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateGreys", () => $ab5cab14529d5aa6$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeGreys", () => $ab5cab14529d5aa6$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePurples", () => $be60071faad67441$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemePurples", () => $be60071faad67441$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateReds", () => $797f714779d16d84$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeReds", () => $797f714779d16d84$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateOranges", () => $812a43bd8158af9e$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "schemeOranges", () => $812a43bd8158af9e$export$3005042704f95a69);
$parcel$export($526aa4e313b6feb4$exports, "interpolateCividis", () => $50ba81b708620077$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateCubehelixDefault", () => $dfb355a85b6d3142$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateRainbow", () => $6afcbc6e681aeecc$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateWarm", () => $6afcbc6e681aeecc$export$fc70efcec537be98);
$parcel$export($526aa4e313b6feb4$exports, "interpolateCool", () => $6afcbc6e681aeecc$export$c5cedbc1ab3be2c3);
$parcel$export($526aa4e313b6feb4$exports, "interpolateSinebow", () => $91aac01c2a3785da$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateTurbo", () => $afd5a72891041caa$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateViridis", () => $5ce785251b26432d$export$2e2bcd8739ae039);
$parcel$export($526aa4e313b6feb4$exports, "interpolateMagma", () => $5ce785251b26432d$export$c41e69203f572e8d);
$parcel$export($526aa4e313b6feb4$exports, "interpolateInferno", () => $5ce785251b26432d$export$ad0c8285c8ea6dbd);
$parcel$export($526aa4e313b6feb4$exports, "interpolatePlasma", () => $5ce785251b26432d$export$6664860a633d9daf);
function $dd22a53980831318$export$2e2bcd8739ae039(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while(i < n)colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
}


var $57b47b58985c46c1$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");



var $ea7ddece6dee86f6$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");



var $d970e380c303288c$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");



var $7a52fd054773d69f$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");



var $42d6c3748c5e2501$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");



var $4e2ee5516585bd7c$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");



var $48d11645e668b562$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");



var $0b855dddc55eac0a$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");



var $9ae9582900067fbd$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");



var $20f1a90d60ecae63$export$2e2bcd8739ae039 = (0, $dd22a53980831318$export$2e2bcd8739ae039)("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");




var $31a7d1a372e19a56$export$2e2bcd8739ae039 = (scheme)=>(0, $9caa49edbd641456$export$2c0e28f2e2852d3f)(scheme[scheme.length - 1]);


var $e9c9af959cb89dd2$export$3005042704f95a69 = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $e9c9af959cb89dd2$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($e9c9af959cb89dd2$export$3005042704f95a69);




var $7bb7a4ac81d2ae59$export$3005042704f95a69 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $7bb7a4ac81d2ae59$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($7bb7a4ac81d2ae59$export$3005042704f95a69);




var $133ae05da4ecb681$export$3005042704f95a69 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $133ae05da4ecb681$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($133ae05da4ecb681$export$3005042704f95a69);




var $147044a779991dd9$export$3005042704f95a69 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $147044a779991dd9$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($147044a779991dd9$export$3005042704f95a69);




var $776da48f727a9922$export$3005042704f95a69 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $776da48f727a9922$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($776da48f727a9922$export$3005042704f95a69);




var $e275f7d4ad59bc99$export$3005042704f95a69 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $e275f7d4ad59bc99$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($e275f7d4ad59bc99$export$3005042704f95a69);




var $fd63b578dda0859d$export$3005042704f95a69 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $fd63b578dda0859d$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($fd63b578dda0859d$export$3005042704f95a69);




var $11b409ad69274bed$export$3005042704f95a69 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $11b409ad69274bed$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($11b409ad69274bed$export$3005042704f95a69);




var $1e3e199029698fec$export$3005042704f95a69 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $1e3e199029698fec$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($1e3e199029698fec$export$3005042704f95a69);




var $f5eea09347263e23$export$3005042704f95a69 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $f5eea09347263e23$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($f5eea09347263e23$export$3005042704f95a69);




var $6d0bf68a4f38c729$export$3005042704f95a69 = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $6d0bf68a4f38c729$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($6d0bf68a4f38c729$export$3005042704f95a69);




var $039b66d84b8f219f$export$3005042704f95a69 = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $039b66d84b8f219f$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($039b66d84b8f219f$export$3005042704f95a69);




var $36acea99019a5d00$export$3005042704f95a69 = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $36acea99019a5d00$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($36acea99019a5d00$export$3005042704f95a69);




var $b080ff1861f2a7e6$export$3005042704f95a69 = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $b080ff1861f2a7e6$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($b080ff1861f2a7e6$export$3005042704f95a69);




var $530febdeeb2e9111$export$3005042704f95a69 = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $530febdeeb2e9111$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($530febdeeb2e9111$export$3005042704f95a69);




var $b4be567774796d51$export$3005042704f95a69 = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $b4be567774796d51$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($b4be567774796d51$export$3005042704f95a69);




var $507564893bef3fd0$export$3005042704f95a69 = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $507564893bef3fd0$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($507564893bef3fd0$export$3005042704f95a69);




var $251aa7363d551751$export$3005042704f95a69 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $251aa7363d551751$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($251aa7363d551751$export$3005042704f95a69);




var $155ffc36e1fa1006$export$3005042704f95a69 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $155ffc36e1fa1006$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($155ffc36e1fa1006$export$3005042704f95a69);




var $82dfd26a92608295$export$3005042704f95a69 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $82dfd26a92608295$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($82dfd26a92608295$export$3005042704f95a69);




var $36b7d53cdb88f077$export$3005042704f95a69 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $36b7d53cdb88f077$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($36b7d53cdb88f077$export$3005042704f95a69);




var $233b063f50ff2a5e$export$3005042704f95a69 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $233b063f50ff2a5e$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($233b063f50ff2a5e$export$3005042704f95a69);




var $d34bd673da4e0c1e$export$3005042704f95a69 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $d34bd673da4e0c1e$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($d34bd673da4e0c1e$export$3005042704f95a69);




var $ab5cab14529d5aa6$export$3005042704f95a69 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $ab5cab14529d5aa6$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($ab5cab14529d5aa6$export$3005042704f95a69);




var $be60071faad67441$export$3005042704f95a69 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $be60071faad67441$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($be60071faad67441$export$3005042704f95a69);




var $797f714779d16d84$export$3005042704f95a69 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $797f714779d16d84$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($797f714779d16d84$export$3005042704f95a69);




var $812a43bd8158af9e$export$3005042704f95a69 = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map((0, $dd22a53980831318$export$2e2bcd8739ae039));
var $812a43bd8158af9e$export$2e2bcd8739ae039 = (0, $31a7d1a372e19a56$export$2e2bcd8739ae039)($812a43bd8158af9e$export$3005042704f95a69);


function $50ba81b708620077$export$2e2bcd8739ae039(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}




var $dfb355a85b6d3142$export$2e2bcd8739ae039 = (0, $5d78404db675e71e$export$934fa09ad474a1b4)((0, $53ff683a5927702b$export$2e2bcd8739ae039)(300, 0.5, 0.0), (0, $53ff683a5927702b$export$2e2bcd8739ae039)(-240, 0.5, 1.0));




var $6afcbc6e681aeecc$export$fc70efcec537be98 = (0, $5d78404db675e71e$export$934fa09ad474a1b4)((0, $53ff683a5927702b$export$2e2bcd8739ae039)(-100, 0.75, 0.35), (0, $53ff683a5927702b$export$2e2bcd8739ae039)(80, 1.50, 0.8));
var $6afcbc6e681aeecc$export$c5cedbc1ab3be2c3 = (0, $5d78404db675e71e$export$934fa09ad474a1b4)((0, $53ff683a5927702b$export$2e2bcd8739ae039)(260, 0.75, 0.35), (0, $53ff683a5927702b$export$2e2bcd8739ae039)(80, 1.50, 0.8));
var $6afcbc6e681aeecc$var$c = (0, $53ff683a5927702b$export$2e2bcd8739ae039)();
function $6afcbc6e681aeecc$export$2e2bcd8739ae039(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    $6afcbc6e681aeecc$var$c.h = 360 * t - 100;
    $6afcbc6e681aeecc$var$c.s = 1.5 - 1.5 * ts;
    $6afcbc6e681aeecc$var$c.l = 0.8 - 0.9 * ts;
    return $6afcbc6e681aeecc$var$c + "";
}



var $gnwtP = parcelRequire("gnwtP");
var $91aac01c2a3785da$var$c = (0, $gnwtP.rgb)(), $91aac01c2a3785da$var$pi_1_3 = Math.PI / 3, $91aac01c2a3785da$var$pi_2_3 = Math.PI * 2 / 3;
function $91aac01c2a3785da$export$2e2bcd8739ae039(t) {
    var x;
    t = (0.5 - t) * Math.PI;
    $91aac01c2a3785da$var$c.r = 255 * (x = Math.sin(t)) * x;
    $91aac01c2a3785da$var$c.g = 255 * (x = Math.sin(t + $91aac01c2a3785da$var$pi_1_3)) * x;
    $91aac01c2a3785da$var$c.b = 255 * (x = Math.sin(t + $91aac01c2a3785da$var$pi_2_3)) * x;
    return $91aac01c2a3785da$var$c + "";
}


function $afd5a72891041caa$export$2e2bcd8739ae039(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}



function $5ce785251b26432d$var$ramp(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
var $5ce785251b26432d$export$2e2bcd8739ae039 = $5ce785251b26432d$var$ramp((0, $dd22a53980831318$export$2e2bcd8739ae039)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var $5ce785251b26432d$export$c41e69203f572e8d = $5ce785251b26432d$var$ramp((0, $dd22a53980831318$export$2e2bcd8739ae039)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var $5ce785251b26432d$export$ad0c8285c8ea6dbd = $5ce785251b26432d$var$ramp((0, $dd22a53980831318$export$2e2bcd8739ae039)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var $5ce785251b26432d$export$6664860a633d9daf = $5ce785251b26432d$var$ramp((0, $dd22a53980831318$export$2e2bcd8739ae039)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));




var $9b6c74dff7315fa5$exports = {};

$parcel$export($9b6c74dff7315fa5$exports, "create", () => $fa27edb63715fa7d$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "creator", () => $dc2f8779cb428df3$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "local", () => $28a0a230e76b17c8$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "matcher", () => $eaa0ec83d721630f$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "namespace", () => $861077efbce665f7$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "namespaces", () => $d669ad0760193831$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "pointer", () => $f0bcd38abe17c1e0$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "pointers", () => $062e01727ffcb915$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "select", () => $cba050cd9a732395$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "selectAll", () => $29997f62f51a083b$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "selection", () => $7d24a0ccddd34d02$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "selector", () => $3febb52ed900509b$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "selectorAll", () => $9b900e2cd17f235b$export$2e2bcd8739ae039);
$parcel$export($9b6c74dff7315fa5$exports, "style", () => $f63d26255e0880d2$export$5e3cec964f0b5efd);
$parcel$export($9b6c74dff7315fa5$exports, "window", () => $bee90cff031655e0$export$2e2bcd8739ae039);


function $fa27edb63715fa7d$export$2e2bcd8739ae039(name) {
    return (0, $cba050cd9a732395$export$2e2bcd8739ae039)((0, $dc2f8779cb428df3$export$2e2bcd8739ae039)(name).call(document.documentElement));
}



var $28a0a230e76b17c8$var$nextId = 0;
function $28a0a230e76b17c8$export$2e2bcd8739ae039() {
    return new $28a0a230e76b17c8$var$Local;
}
function $28a0a230e76b17c8$var$Local() {
    this._ = "@" + (++$28a0a230e76b17c8$var$nextId).toString(36);
}
$28a0a230e76b17c8$var$Local.prototype = $28a0a230e76b17c8$export$2e2bcd8739ae039.prototype = {
    constructor: $28a0a230e76b17c8$var$Local,
    get: function(node) {
        var id = this._;
        while(!(id in node))if (!(node = node.parentNode)) return;
        return node[id];
    },
    set: function(node, value) {
        return node[this._] = value;
    },
    remove: function(node) {
        return this._ in node && delete node[this._];
    },
    toString: function() {
        return this._;
    }
};








function $062e01727ffcb915$export$2e2bcd8739ae039(events, node) {
    if (events.target) {
        events = (0, $02666d379292d09d$export$2e2bcd8739ae039)(events);
        if (node === undefined) node = events.currentTarget;
        events = events.touches || [
            events
        ];
    }
    return Array.from(events, (event)=>(0, $f0bcd38abe17c1e0$export$2e2bcd8739ae039)(event, node));
}





function $29997f62f51a083b$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new (0, $7d24a0ccddd34d02$export$52baac22726c72bf)([
        (0, $9924e0fc36ffc89a$export$2e2bcd8739ae039)(selector)
    ], (0, $7d24a0ccddd34d02$export$e8e78c978b129247));
}









var $25f0b67c2abadefe$exports = {};

$parcel$export($25f0b67c2abadefe$exports, "arc", () => $693d000215afaae2$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "area", () => $8a3b71f5a7ddbc77$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "line", () => $b17b9d20ce229ebe$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "pie", () => $f01e75d67f263f2b$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "areaRadial", () => $d8f461eb6f492fe0$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "radialArea", () => $d8f461eb6f492fe0$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "lineRadial", () => $18a7f8633bf7a9d6$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "radialLine", () => $18a7f8633bf7a9d6$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "pointRadial", () => $3504cb8bdc4d7a5e$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "link", () => $412a8eacf363f39f$export$9c30223ca0a664fb);
$parcel$export($25f0b67c2abadefe$exports, "linkHorizontal", () => $412a8eacf363f39f$export$e7c381889b2cd14d);
$parcel$export($25f0b67c2abadefe$exports, "linkVertical", () => $412a8eacf363f39f$export$75de4c8c66884e04);
$parcel$export($25f0b67c2abadefe$exports, "linkRadial", () => $412a8eacf363f39f$export$7739cfe68d4e0799);
$parcel$export($25f0b67c2abadefe$exports, "symbol", () => $f7552f90fb5a34e1$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolsStroke", () => $f7552f90fb5a34e1$export$915e06de6acf8fe);
$parcel$export($25f0b67c2abadefe$exports, "symbolsFill", () => $f7552f90fb5a34e1$export$19158c96a6700c15);
$parcel$export($25f0b67c2abadefe$exports, "symbols", () => $f7552f90fb5a34e1$export$19158c96a6700c15);
$parcel$export($25f0b67c2abadefe$exports, "symbolAsterisk", () => $ad0d278dc1275dd4$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolCircle", () => $5b533485014e5889$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolCross", () => $b9966af6ed819d8e$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolDiamond", () => $21137dc970e086df$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolDiamond2", () => $0af3e589d04739c3$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolPlus", () => $b081f4efcf570f1d$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolSquare", () => $812d04628e149ca7$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolSquare2", () => $c66af55cab20b63c$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolStar", () => $83654b41605db4a6$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolTriangle", () => $500d5c6db630c96d$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolTriangle2", () => $a8c98f2b341418bc$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolWye", () => $69b3a6297890999f$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolTimes", () => $c1b02cae5e873b64$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "symbolX", () => $c1b02cae5e873b64$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveBasisClosed", () => $67dd894ef45dd03b$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveBasisOpen", () => $25e9b78984c1db6f$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveBasis", () => $12ae96f3046263e2$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveBumpX", () => $f11476ab3bfc0da0$export$2c099b5096f70ce6);
$parcel$export($25f0b67c2abadefe$exports, "curveBumpY", () => $f11476ab3bfc0da0$export$908da9dfa54cbed6);
$parcel$export($25f0b67c2abadefe$exports, "curveBundle", () => $8b9ff247be85c8ec$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveCardinalClosed", () => $46a50880c0319f7f$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveCardinalOpen", () => $28f366a2c0840f32$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveCardinal", () => (parcelRequire("fnxet")).default);
$parcel$export($25f0b67c2abadefe$exports, "curveCatmullRomClosed", () => $506780ff99c00318$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveCatmullRomOpen", () => $d50f79aee6d1db61$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveCatmullRom", () => (parcelRequire("2TdSl")).default);
$parcel$export($25f0b67c2abadefe$exports, "curveLinearClosed", () => $3721a21b90f7c149$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveLinear", () => $376b66ab5ebb2301$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveMonotoneX", () => $2baa80d9d433735d$export$99563b5420dbdc55);
$parcel$export($25f0b67c2abadefe$exports, "curveMonotoneY", () => $2baa80d9d433735d$export$8b5360456d6bdb88);
$parcel$export($25f0b67c2abadefe$exports, "curveNatural", () => $294bae45c0b0abb6$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveStep", () => $72cdb48bfe4699b0$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "curveStepAfter", () => $72cdb48bfe4699b0$export$793b3db073781cbb);
$parcel$export($25f0b67c2abadefe$exports, "curveStepBefore", () => $72cdb48bfe4699b0$export$10eafa5b7478b343);
$parcel$export($25f0b67c2abadefe$exports, "stack", () => $4c99f7ed671763f9$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOffsetExpand", () => $72ce2e7c3c6089a3$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOffsetDiverging", () => $b5c95711bc700354$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOffsetNone", () => $1115c2e1e7108bf5$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOffsetSilhouette", () => $a776f1e64ac71c69$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOffsetWiggle", () => $72fe9979dccee65b$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOrderAppearance", () => $5090739d84b95c50$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOrderAscending", () => $7ec8332494e74923$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOrderDescending", () => $74171cb63c30f4cd$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOrderInsideOut", () => $35a1092a441802c7$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOrderNone", () => $673e2100932ce064$export$2e2bcd8739ae039);
$parcel$export($25f0b67c2abadefe$exports, "stackOrderReverse", () => $d32efea63c0ead35$export$2e2bcd8739ae039);
function $423139cc125b403c$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}



var $cugGf = parcelRequire("cugGf");

function $870e5b57a9fe27e6$export$fb6e83118a5dcd45(shape) {
    let digits = 3;
    shape.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) digits = null;
        else {
            const d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
            digits = d;
        }
        return shape;
    };
    return ()=>new (0, $131a8512ae592f4d$export$4b2950bdac9b6ee9)(digits);
}


function $693d000215afaae2$var$arcInnerRadius(d) {
    return d.innerRadius;
}
function $693d000215afaae2$var$arcOuterRadius(d) {
    return d.outerRadius;
}
function $693d000215afaae2$var$arcStartAngle(d) {
    return d.startAngle;
}
function $693d000215afaae2$var$arcEndAngle(d) {
    return d.endAngle;
}
function $693d000215afaae2$var$arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function $693d000215afaae2$var$intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < (0, $cugGf.epsilon)) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [
        x0 + t * x10,
        y0 + t * y10
    ];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function $693d000215afaae2$var$cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / (0, $cugGf.sqrt)(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * (0, $cugGf.sqrt)((0, $cugGf.max)(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
    };
}
function $693d000215afaae2$export$2e2bcd8739ae039() {
    var innerRadius = $693d000215afaae2$var$arcInnerRadius, outerRadius = $693d000215afaae2$var$arcOuterRadius, cornerRadius = (0, $423139cc125b403c$export$2e2bcd8739ae039)(0), padRadius = null, startAngle = $693d000215afaae2$var$arcStartAngle, endAngle = $693d000215afaae2$var$arcEndAngle, padAngle = $693d000215afaae2$var$arcPadAngle, context = null, path = (0, $870e5b57a9fe27e6$export$fb6e83118a5dcd45)(arc);
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - (0, $cugGf.halfPi), a1 = endAngle.apply(this, arguments) - (0, $cugGf.halfPi), da = (0, $cugGf.abs)(a1 - a0), cw = a1 > a0;
        if (!context) context = buffer = path();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > (0, $cugGf.epsilon))) context.moveTo(0, 0);
        else if (da > (0, $cugGf.tau) - (0, $cugGf.epsilon)) {
            context.moveTo(r1 * (0, $cugGf.cos)(a0), r1 * (0, $cugGf.sin)(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > (0, $cugGf.epsilon)) {
                context.moveTo(r0 * (0, $cugGf.cos)(a1), r0 * (0, $cugGf.sin)(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        } else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > (0, $cugGf.epsilon) && (padRadius ? +padRadius.apply(this, arguments) : (0, $cugGf.sqrt)(r0 * r0 + r1 * r1)), rc = (0, $cugGf.min)((0, $cugGf.abs)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > (0, $cugGf.epsilon)) {
                var p0 = (0, $cugGf.asin)(rp / r0 * (0, $cugGf.sin)(ap)), p1 = (0, $cugGf.asin)(rp / r1 * (0, $cugGf.sin)(ap));
                if ((da0 -= p0 * 2) > (0, $cugGf.epsilon)) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
                else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > (0, $cugGf.epsilon)) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
                else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * (0, $cugGf.cos)(a01), y01 = r1 * (0, $cugGf.sin)(a01), x10 = r0 * (0, $cugGf.cos)(a10), y10 = r0 * (0, $cugGf.sin)(a10);
            // Apply rounded corners?
            if (rc > (0, $cugGf.epsilon)) {
                var x11 = r1 * (0, $cugGf.cos)(a11), y11 = r1 * (0, $cugGf.sin)(a11), x00 = r0 * (0, $cugGf.cos)(a00), y00 = r0 * (0, $cugGf.sin)(a00), oc;
                // Restrict the corner radius according to the sector angle. If this
                // intersection fails, it’s probably because the arc is too small, so
                // disable the corner radius entirely.
                if (da < (0, $cugGf.pi)) {
                    if (oc = $693d000215afaae2$var$intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
                        var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / (0, $cugGf.sin)((0, $cugGf.acos)((ax * bx + ay * by) / ((0, $cugGf.sqrt)(ax * ax + ay * ay) * (0, $cugGf.sqrt)(bx * bx + by * by))) / 2), lc = (0, $cugGf.sqrt)(oc[0] * oc[0] + oc[1] * oc[1]);
                        rc0 = (0, $cugGf.min)(rc, (r0 - lc) / (kc - 1));
                        rc1 = (0, $cugGf.min)(rc, (r1 - lc) / (kc + 1));
                    } else rc0 = rc1 = 0;
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > (0, $cugGf.epsilon))) context.moveTo(x01, y01);
            else if (rc1 > (0, $cugGf.epsilon)) {
                t0 = $693d000215afaae2$var$cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = $693d000215afaae2$var$cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc1, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, (0, $cugGf.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, $cugGf.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, (0, $cugGf.atan2)(t1.y11, t1.x11), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > (0, $cugGf.epsilon)) || !(da0 > (0, $cugGf.epsilon))) context.lineTo(x10, y10);
            else if (rc0 > (0, $cugGf.epsilon)) {
                t0 = $693d000215afaae2$var$cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = $693d000215afaae2$var$cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc0, (0, $cugGf.atan2)(t0.y01, t0.x01), (0, $cugGf.atan2)(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, (0, $cugGf.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, $cugGf.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, (0, $cugGf.atan2)(t1.y11, t1.x11), (0, $cugGf.atan2)(t1.y01, t1.x01), !cw);
                }
            } else context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - (0, $cugGf.pi) / 2;
        return [
            (0, $cugGf.cos)(a) * r,
            (0, $cugGf.sin)(a) * r
        ];
    };
    arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), arc) : padAngle;
    };
    arc.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
}


var $1faebcae8b69a45b$export$58adb3bec8346d0f = Array.prototype.slice;
function $1faebcae8b69a45b$export$2e2bcd8739ae039(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}



function $376b66ab5ebb2301$var$Linear(context) {
    this._context = context;
}
$376b66ab5ebb2301$var$Linear.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function $376b66ab5ebb2301$export$2e2bcd8739ae039(context) {
    return new $376b66ab5ebb2301$var$Linear(context);
}






function $dc9d2366e295a716$export$d141bba7fdc215a3(p) {
    return p[0];
}
function $dc9d2366e295a716$export$4a5767248b18ef41(p) {
    return p[1];
}


function $b17b9d20ce229ebe$export$2e2bcd8739ae039(x, y) {
    var defined = (0, $423139cc125b403c$export$2e2bcd8739ae039)(true), context = null, curve = (0, $376b66ab5ebb2301$export$2e2bcd8739ae039), output = null, path = (0, $870e5b57a9fe27e6$export$fb6e83118a5dcd45)(line);
    x = typeof x === "function" ? x : x === undefined ? (0, $dc9d2366e295a716$export$d141bba7fdc215a3) : (0, $423139cc125b403c$export$2e2bcd8739ae039)(x);
    y = typeof y === "function" ? y : y === undefined ? (0, $dc9d2366e295a716$export$4a5767248b18ef41) : (0, $423139cc125b403c$export$2e2bcd8739ae039)(y);
    function line(data) {
        var i, n = (data = (0, $1faebcae8b69a45b$export$2e2bcd8739ae039)(data)).length, d, defined0 = false, buffer;
        if (context == null) output = curve(buffer = path());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) output.lineStart();
                else output.lineEnd();
            }
            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), line) : x;
    };
    line.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), line) : y;
    };
    line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(!!_), line) : defined;
    };
    line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
}




function $8a3b71f5a7ddbc77$export$2e2bcd8739ae039(x0, y0, y1) {
    var x1 = null, defined = (0, $423139cc125b403c$export$2e2bcd8739ae039)(true), context = null, curve = (0, $376b66ab5ebb2301$export$2e2bcd8739ae039), output = null, path = (0, $870e5b57a9fe27e6$export$fb6e83118a5dcd45)(area);
    x0 = typeof x0 === "function" ? x0 : x0 === undefined ? (0, $dc9d2366e295a716$export$d141bba7fdc215a3) : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+x0);
    y0 = typeof y0 === "function" ? y0 : y0 === undefined ? (0, $423139cc125b403c$export$2e2bcd8739ae039)(0) : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+y0);
    y1 = typeof y1 === "function" ? y1 : y1 === undefined ? (0, $dc9d2366e295a716$export$4a5767248b18ef41) : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+y1);
    function area(data) {
        var i, j, k, n = (data = (0, $1faebcae8b69a45b$export$2e2bcd8739ae039)(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
        if (context == null) output = curve(buffer = path());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) {
                    j = i;
                    output.areaStart();
                    output.lineStart();
                } else {
                    output.lineEnd();
                    output.lineStart();
                    for(k = i - 1; k >= j; --k)output.point(x0z[k], y0z[k]);
                    output.lineEnd();
                    output.areaEnd();
                }
            }
            if (defined0) {
                x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
                output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    function arealine() {
        return (0, $b17b9d20ce229ebe$export$2e2bcd8739ae039)().defined(defined).curve(curve).context(context);
    }
    area.x = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), x1 = null, area) : x0;
    };
    area.x0 = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), area) : x0;
    };
    area.x1 = function(_) {
        return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), area) : x1;
    };
    area.y = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), y1 = null, area) : y0;
    };
    area.y0 = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), area) : y0;
    };
    area.y1 = function(_) {
        return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), area) : y1;
    };
    area.lineX0 = area.lineY0 = function() {
        return arealine().x(x0).y(y0);
    };
    area.lineY1 = function() {
        return arealine().x(x0).y(y1);
    };
    area.lineX1 = function() {
        return arealine().x(x1).y(y0);
    };
    area.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(!!_), area) : defined;
    };
    area.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
}





function $67f018fd145fba88$export$2e2bcd8739ae039(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}


function $5909098779c28c4f$export$2e2bcd8739ae039(d) {
    return d;
}



var $cugGf = parcelRequire("cugGf");
function $f01e75d67f263f2b$export$2e2bcd8739ae039() {
    var value = (0, $5909098779c28c4f$export$2e2bcd8739ae039), sortValues = (0, $67f018fd145fba88$export$2e2bcd8739ae039), sort = null, startAngle = (0, $423139cc125b403c$export$2e2bcd8739ae039)(0), endAngle = (0, $423139cc125b403c$export$2e2bcd8739ae039)((0, $cugGf.tau)), padAngle = (0, $423139cc125b403c$export$2e2bcd8739ae039)(0);
    function pie(data) {
        var i, n = (data = (0, $1faebcae8b69a45b$export$2e2bcd8739ae039)(data)).length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min((0, $cugGf.tau), Math.max(-(0, $cugGf.tau), endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
        for(i = 0; i < n; ++i)if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) sum += v;
        // Optionally sort the arcs by previously-computed values or by data.
        if (sortValues != null) index.sort(function(i, j) {
            return sortValues(arcs[i], arcs[j]);
        });
        else if (sort != null) index.sort(function(i, j) {
            return sort(data[i], data[j]);
        });
        // Compute the arcs! They are stored in the original data's order.
        for(i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1)j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
            data: data[j],
            index: i,
            value: v,
            startAngle: a0,
            endAngle: a1,
            padAngle: p
        };
        return arcs;
    }
    pie.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), pie) : value;
    };
    pie.sortValues = function(_) {
        return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
    pie.sort = function(_) {
        return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
    pie.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), pie) : startAngle;
    };
    pie.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), pie) : endAngle;
    };
    pie.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), pie) : padAngle;
    };
    return pie;
}



var $9e755091b8e1a1a6$export$22d25ffb9fb15b6f = $9e755091b8e1a1a6$export$2e2bcd8739ae039((0, $376b66ab5ebb2301$export$2e2bcd8739ae039));
function $9e755091b8e1a1a6$var$Radial(curve) {
    this._curve = curve;
}
$9e755091b8e1a1a6$var$Radial.prototype = {
    areaStart: function() {
        this._curve.areaStart();
    },
    areaEnd: function() {
        this._curve.areaEnd();
    },
    lineStart: function() {
        this._curve.lineStart();
    },
    lineEnd: function() {
        this._curve.lineEnd();
    },
    point: function(a, r) {
        this._curve.point(r * Math.sin(a), r * -Math.cos(a));
    }
};
function $9e755091b8e1a1a6$export$2e2bcd8739ae039(curve) {
    function radial(context) {
        return new $9e755091b8e1a1a6$var$Radial(curve(context));
    }
    radial._curve = curve;
    return radial;
}





function $18a7f8633bf7a9d6$export$4d8815a75dc8cd4d(l) {
    var c = l.curve;
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    l.curve = function(_) {
        return arguments.length ? c((0, $9e755091b8e1a1a6$export$2e2bcd8739ae039)(_)) : c()._curve;
    };
    return l;
}
function $18a7f8633bf7a9d6$export$2e2bcd8739ae039() {
    return $18a7f8633bf7a9d6$export$4d8815a75dc8cd4d((0, $b17b9d20ce229ebe$export$2e2bcd8739ae039)().curve((0, $9e755091b8e1a1a6$export$22d25ffb9fb15b6f)));
}


function $d8f461eb6f492fe0$export$2e2bcd8739ae039() {
    var a = (0, $8a3b71f5a7ddbc77$export$2e2bcd8739ae039)().curve((0, $9e755091b8e1a1a6$export$22d25ffb9fb15b6f)), c = a.curve, x0 = a.lineX0, x1 = a.lineX1, y0 = a.lineY0, y1 = a.lineY1;
    a.angle = a.x, delete a.x;
    a.startAngle = a.x0, delete a.x0;
    a.endAngle = a.x1, delete a.x1;
    a.radius = a.y, delete a.y;
    a.innerRadius = a.y0, delete a.y0;
    a.outerRadius = a.y1, delete a.y1;
    a.lineStartAngle = function() {
        return (0, $18a7f8633bf7a9d6$export$4d8815a75dc8cd4d)(x0());
    }, delete a.lineX0;
    a.lineEndAngle = function() {
        return (0, $18a7f8633bf7a9d6$export$4d8815a75dc8cd4d)(x1());
    }, delete a.lineX1;
    a.lineInnerRadius = function() {
        return (0, $18a7f8633bf7a9d6$export$4d8815a75dc8cd4d)(y0());
    }, delete a.lineY0;
    a.lineOuterRadius = function() {
        return (0, $18a7f8633bf7a9d6$export$4d8815a75dc8cd4d)(y1());
    }, delete a.lineY1;
    a.curve = function(_) {
        return arguments.length ? c((0, $9e755091b8e1a1a6$export$2e2bcd8739ae039)(_)) : c()._curve;
    };
    return a;
}



function $3504cb8bdc4d7a5e$export$2e2bcd8739ae039(x, y) {
    return [
        (y = +y) * Math.cos(x -= Math.PI / 2),
        y * Math.sin(x)
    ];
}





class $f11476ab3bfc0da0$var$Bump {
    constructor(context, x){
        this._context = context;
        this._x = x;
    }
    areaStart() {
        this._line = 0;
    }
    areaEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    }
    point(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) this._context.lineTo(x, y);
                else this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
                else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
                break;
        }
        this._x0 = x, this._y0 = y;
    }
}
class $f11476ab3bfc0da0$var$BumpRadial {
    constructor(context){
        this._context = context;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {}
    point(x, y) {
        x = +x, y = +y;
        if (this._point === 0) this._point = 1;
        else {
            const p0 = (0, $3504cb8bdc4d7a5e$export$2e2bcd8739ae039)(this._x0, this._y0);
            const p1 = (0, $3504cb8bdc4d7a5e$export$2e2bcd8739ae039)(this._x0, this._y0 = (this._y0 + y) / 2);
            const p2 = (0, $3504cb8bdc4d7a5e$export$2e2bcd8739ae039)(x, this._y0);
            const p3 = (0, $3504cb8bdc4d7a5e$export$2e2bcd8739ae039)(x, y);
            this._context.moveTo(...p0);
            this._context.bezierCurveTo(...p1, ...p2, ...p3);
        }
        this._x0 = x, this._y0 = y;
    }
}
function $f11476ab3bfc0da0$export$2c099b5096f70ce6(context) {
    return new $f11476ab3bfc0da0$var$Bump(context, true);
}
function $f11476ab3bfc0da0$export$908da9dfa54cbed6(context) {
    return new $f11476ab3bfc0da0$var$Bump(context, false);
}
function $f11476ab3bfc0da0$export$8c82a77a5061b331(context) {
    return new $f11476ab3bfc0da0$var$BumpRadial(context);
}




function $412a8eacf363f39f$var$linkSource(d) {
    return d.source;
}
function $412a8eacf363f39f$var$linkTarget(d) {
    return d.target;
}
function $412a8eacf363f39f$export$9c30223ca0a664fb(curve) {
    let source = $412a8eacf363f39f$var$linkSource, target = $412a8eacf363f39f$var$linkTarget, x = (0, $dc9d2366e295a716$export$d141bba7fdc215a3), y = (0, $dc9d2366e295a716$export$4a5767248b18ef41), context = null, output = null, path = (0, $870e5b57a9fe27e6$export$fb6e83118a5dcd45)(link);
    function link() {
        let buffer;
        const argv = (0, $1faebcae8b69a45b$export$58adb3bec8346d0f).call(arguments);
        const s = source.apply(this, argv);
        const t = target.apply(this, argv);
        if (context == null) output = curve(buffer = path());
        output.lineStart();
        argv[0] = s, output.point(+x.apply(this, argv), +y.apply(this, argv));
        argv[0] = t, output.point(+x.apply(this, argv), +y.apply(this, argv));
        output.lineEnd();
        if (buffer) return output = null, buffer + "" || null;
    }
    link.source = function(_) {
        return arguments.length ? (source = _, link) : source;
    };
    link.target = function(_) {
        return arguments.length ? (target = _, link) : target;
    };
    link.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), link) : x;
    };
    link.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), link) : y;
    };
    link.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link) : context;
    };
    return link;
}
function $412a8eacf363f39f$export$e7c381889b2cd14d() {
    return $412a8eacf363f39f$export$9c30223ca0a664fb((0, $f11476ab3bfc0da0$export$2c099b5096f70ce6));
}
function $412a8eacf363f39f$export$75de4c8c66884e04() {
    return $412a8eacf363f39f$export$9c30223ca0a664fb((0, $f11476ab3bfc0da0$export$908da9dfa54cbed6));
}
function $412a8eacf363f39f$export$7739cfe68d4e0799() {
    const l = $412a8eacf363f39f$export$9c30223ca0a664fb((0, $f11476ab3bfc0da0$export$8c82a77a5061b331));
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    return l;
}





var $cugGf = parcelRequire("cugGf");
const $ad0d278dc1275dd4$var$sqrt3 = (0, $cugGf.sqrt)(3);
var $ad0d278dc1275dd4$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size + (0, $cugGf.min)(size / 28, 0.75)) * 0.59436;
        const t = r / 2;
        const u = t * $ad0d278dc1275dd4$var$sqrt3;
        context.moveTo(0, r);
        context.lineTo(0, -r);
        context.moveTo(-u, -t);
        context.lineTo(u, t);
        context.moveTo(-u, t);
        context.lineTo(u, -t);
    }
};



var $cugGf = parcelRequire("cugGf");
var $5b533485014e5889$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size / (0, $cugGf.pi));
        context.moveTo(r, 0);
        context.arc(0, 0, r, 0, (0, $cugGf.tau));
    }
};



var $cugGf = parcelRequire("cugGf");
var $b9966af6ed819d8e$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size / 5) / 2;
        context.moveTo(-3 * r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, -3 * r);
        context.lineTo(r, -3 * r);
        context.lineTo(r, -r);
        context.lineTo(3 * r, -r);
        context.lineTo(3 * r, r);
        context.lineTo(r, r);
        context.lineTo(r, 3 * r);
        context.lineTo(-r, 3 * r);
        context.lineTo(-r, r);
        context.lineTo(-3 * r, r);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
const $21137dc970e086df$var$tan30 = (0, $cugGf.sqrt)(1 / 3);
const $21137dc970e086df$var$tan30_2 = $21137dc970e086df$var$tan30 * 2;
var $21137dc970e086df$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const y = (0, $cugGf.sqrt)(size / $21137dc970e086df$var$tan30_2);
        const x = y * $21137dc970e086df$var$tan30;
        context.moveTo(0, -y);
        context.lineTo(x, 0);
        context.lineTo(0, y);
        context.lineTo(-x, 0);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
var $0af3e589d04739c3$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size) * 0.62625;
        context.moveTo(0, -r);
        context.lineTo(r, 0);
        context.lineTo(0, r);
        context.lineTo(-r, 0);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
var $b081f4efcf570f1d$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size - (0, $cugGf.min)(size / 7, 2)) * 0.87559;
        context.moveTo(-r, 0);
        context.lineTo(r, 0);
        context.moveTo(0, r);
        context.lineTo(0, -r);
    }
};



var $cugGf = parcelRequire("cugGf");
var $812d04628e149ca7$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const w = (0, $cugGf.sqrt)(size);
        const x = -w / 2;
        context.rect(x, x, w, w);
    }
};



var $cugGf = parcelRequire("cugGf");
var $c66af55cab20b63c$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size) * 0.4431;
        context.moveTo(r, r);
        context.lineTo(r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, r);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
const $83654b41605db4a6$var$ka = 0.89081309152928522810;
const $83654b41605db4a6$var$kr = (0, $cugGf.sin)((0, $cugGf.pi) / 10) / (0, $cugGf.sin)(7 * (0, $cugGf.pi) / 10);
const $83654b41605db4a6$var$kx = (0, $cugGf.sin)((0, $cugGf.tau) / 10) * $83654b41605db4a6$var$kr;
const $83654b41605db4a6$var$ky = -(0, $cugGf.cos)((0, $cugGf.tau) / 10) * $83654b41605db4a6$var$kr;
var $83654b41605db4a6$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size * $83654b41605db4a6$var$ka);
        const x = $83654b41605db4a6$var$kx * r;
        const y = $83654b41605db4a6$var$ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for(let i = 1; i < 5; ++i){
            const a = (0, $cugGf.tau) * i / 5;
            const c = (0, $cugGf.cos)(a);
            const s = (0, $cugGf.sin)(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
const $500d5c6db630c96d$var$sqrt3 = (0, $cugGf.sqrt)(3);
var $500d5c6db630c96d$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const y = -(0, $cugGf.sqrt)(size / ($500d5c6db630c96d$var$sqrt3 * 3));
        context.moveTo(0, y * 2);
        context.lineTo(-$500d5c6db630c96d$var$sqrt3 * y, -y);
        context.lineTo($500d5c6db630c96d$var$sqrt3 * y, -y);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
const $a8c98f2b341418bc$var$sqrt3 = (0, $cugGf.sqrt)(3);
var $a8c98f2b341418bc$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const s = (0, $cugGf.sqrt)(size) * 0.6824;
        const t = s / 2;
        const u = s * $a8c98f2b341418bc$var$sqrt3 / 2; // cos(Math.PI / 6)
        context.moveTo(0, -s);
        context.lineTo(u, t);
        context.lineTo(-u, t);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
const $69b3a6297890999f$var$c = -0.5;
const $69b3a6297890999f$var$s = (0, $cugGf.sqrt)(3) / 2;
const $69b3a6297890999f$var$k = 1 / (0, $cugGf.sqrt)(12);
const $69b3a6297890999f$var$a = ($69b3a6297890999f$var$k / 2 + 1) * 3;
var $69b3a6297890999f$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size / $69b3a6297890999f$var$a);
        const x0 = r / 2, y0 = r * $69b3a6297890999f$var$k;
        const x1 = x0, y1 = r * $69b3a6297890999f$var$k + r;
        const x2 = -x1, y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo($69b3a6297890999f$var$c * x0 - $69b3a6297890999f$var$s * y0, $69b3a6297890999f$var$s * x0 + $69b3a6297890999f$var$c * y0);
        context.lineTo($69b3a6297890999f$var$c * x1 - $69b3a6297890999f$var$s * y1, $69b3a6297890999f$var$s * x1 + $69b3a6297890999f$var$c * y1);
        context.lineTo($69b3a6297890999f$var$c * x2 - $69b3a6297890999f$var$s * y2, $69b3a6297890999f$var$s * x2 + $69b3a6297890999f$var$c * y2);
        context.lineTo($69b3a6297890999f$var$c * x0 + $69b3a6297890999f$var$s * y0, $69b3a6297890999f$var$c * y0 - $69b3a6297890999f$var$s * x0);
        context.lineTo($69b3a6297890999f$var$c * x1 + $69b3a6297890999f$var$s * y1, $69b3a6297890999f$var$c * y1 - $69b3a6297890999f$var$s * x1);
        context.lineTo($69b3a6297890999f$var$c * x2 + $69b3a6297890999f$var$s * y2, $69b3a6297890999f$var$c * y2 - $69b3a6297890999f$var$s * x2);
        context.closePath();
    }
};



var $cugGf = parcelRequire("cugGf");
var $c1b02cae5e873b64$export$2e2bcd8739ae039 = {
    draw (context, size) {
        const r = (0, $cugGf.sqrt)(size - (0, $cugGf.min)(size / 6, 1.7)) * 0.6189;
        context.moveTo(-r, -r);
        context.lineTo(r, r);
        context.moveTo(-r, r);
        context.lineTo(r, -r);
    }
};


const $f7552f90fb5a34e1$export$19158c96a6700c15 = [
    (0, $5b533485014e5889$export$2e2bcd8739ae039),
    (0, $b9966af6ed819d8e$export$2e2bcd8739ae039),
    (0, $21137dc970e086df$export$2e2bcd8739ae039),
    (0, $812d04628e149ca7$export$2e2bcd8739ae039),
    (0, $83654b41605db4a6$export$2e2bcd8739ae039),
    (0, $500d5c6db630c96d$export$2e2bcd8739ae039),
    (0, $69b3a6297890999f$export$2e2bcd8739ae039)
];
const $f7552f90fb5a34e1$export$915e06de6acf8fe = [
    (0, $5b533485014e5889$export$2e2bcd8739ae039),
    (0, $b081f4efcf570f1d$export$2e2bcd8739ae039),
    (0, $c1b02cae5e873b64$export$2e2bcd8739ae039),
    (0, $a8c98f2b341418bc$export$2e2bcd8739ae039),
    (0, $ad0d278dc1275dd4$export$2e2bcd8739ae039),
    (0, $c66af55cab20b63c$export$2e2bcd8739ae039),
    (0, $0af3e589d04739c3$export$2e2bcd8739ae039)
];
function $f7552f90fb5a34e1$export$2e2bcd8739ae039(type, size) {
    let context = null, path = (0, $870e5b57a9fe27e6$export$fb6e83118a5dcd45)(symbol);
    type = typeof type === "function" ? type : (0, $423139cc125b403c$export$2e2bcd8739ae039)(type || (0, $5b533485014e5889$export$2e2bcd8739ae039));
    size = typeof size === "function" ? size : (0, $423139cc125b403c$export$2e2bcd8739ae039)(size === undefined ? 64 : +size);
    function symbol() {
        let buffer;
        if (!context) context = buffer = path();
        type.apply(this, arguments).draw(context, +size.apply(this, arguments));
        if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_) {
        return arguments.length ? (type = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(_), symbol) : type;
    };
    symbol.size = function(_) {
        return arguments.length ? (size = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), symbol) : size;
    };
    symbol.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
}















function $59ec507c353b2795$export$2e2bcd8739ae039() {}


function $12ae96f3046263e2$export$105684a3041cb6f3(that, x, y) {
    that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function $12ae96f3046263e2$export$957f7263e89bedd2(context) {
    this._context = context;
}
$12ae96f3046263e2$export$957f7263e89bedd2.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 3:
                $12ae96f3046263e2$export$105684a3041cb6f3(this, this._x1, this._y1); // falls through
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
            default:
                $12ae96f3046263e2$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $12ae96f3046263e2$export$2e2bcd8739ae039(context) {
    return new $12ae96f3046263e2$export$957f7263e89bedd2(context);
}


function $67dd894ef45dd03b$var$BasisClosed(context) {
    this._context = context;
}
$67dd894ef45dd03b$var$BasisClosed.prototype = {
    areaStart: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    areaEnd: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x2, this._y2);
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x2 = x, this._y2 = y;
                break;
            case 1:
                this._point = 2;
                this._x3 = x, this._y3 = y;
                break;
            case 2:
                this._point = 3;
                this._x4 = x, this._y4 = y;
                this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
                break;
            default:
                (0, $12ae96f3046263e2$export$105684a3041cb6f3)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $67dd894ef45dd03b$export$2e2bcd8739ae039(context) {
    return new $67dd894ef45dd03b$var$BasisClosed(context);
}



function $25e9b78984c1db6f$var$BasisOpen(context) {
    this._context = context;
}
$25e9b78984c1db6f$var$BasisOpen.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
                this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
                break;
            case 3:
                this._point = 4; // falls through
            default:
                (0, $12ae96f3046263e2$export$105684a3041cb6f3)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $25e9b78984c1db6f$export$2e2bcd8739ae039(context) {
    return new $25e9b78984c1db6f$var$BasisOpen(context);
}





function $8b9ff247be85c8ec$var$Bundle(context, beta) {
    this._basis = new (0, $12ae96f3046263e2$export$957f7263e89bedd2)(context);
    this._beta = beta;
}
$8b9ff247be85c8ec$var$Bundle.prototype = {
    lineStart: function() {
        this._x = [];
        this._y = [];
        this._basis.lineStart();
    },
    lineEnd: function() {
        var x = this._x, y = this._y, j = x.length - 1;
        if (j > 0) {
            var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
            while(++i <= j){
                t = i / j;
                this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
            }
        }
        this._x = this._y = null;
        this._basis.lineEnd();
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
var $8b9ff247be85c8ec$export$2e2bcd8739ae039 = function custom(beta) {
    function bundle(context) {
        return beta === 1 ? new (0, $12ae96f3046263e2$export$957f7263e89bedd2)(context) : new $8b9ff247be85c8ec$var$Bundle(context, beta);
    }
    bundle.beta = function(beta) {
        return custom(+beta);
    };
    return bundle;
}(0.85);




var $fnxet = parcelRequire("fnxet");
function $46a50880c0319f7f$export$da3940d7e9162858(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$46a50880c0319f7f$export$da3940d7e9162858.prototype = {
    areaStart: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    areaEnd: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = x, this._y3 = y;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = x, this._y4 = y);
                break;
            case 2:
                this._point = 3;
                this._x5 = x, this._y5 = y;
                break;
            default:
                (0, $fnxet.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $46a50880c0319f7f$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $46a50880c0319f7f$export$da3940d7e9162858(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);



var $fnxet = parcelRequire("fnxet");
function $28f366a2c0840f32$export$cd7d1a617282f2f1(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$28f366a2c0840f32$export$cd7d1a617282f2f1.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4; // falls through
            default:
                (0, $fnxet.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $28f366a2c0840f32$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $28f366a2c0840f32$export$cd7d1a617282f2f1(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);



var $fnxet = parcelRequire("fnxet");



var $2TdSl = parcelRequire("2TdSl");
function $506780ff99c00318$var$CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$506780ff99c00318$var$CatmullRomClosed.prototype = {
    areaStart: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    areaEnd: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = x, this._y3 = y;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = x, this._y4 = y);
                break;
            case 2:
                this._point = 3;
                this._x5 = x, this._y5 = y;
                break;
            default:
                (0, $2TdSl.point)(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $506780ff99c00318$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $506780ff99c00318$var$CatmullRomClosed(context, alpha) : new (0, $46a50880c0319f7f$export$da3940d7e9162858)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);




var $2TdSl = parcelRequire("2TdSl");
function $d50f79aee6d1db61$var$CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$d50f79aee6d1db61$var$CatmullRomOpen.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4; // falls through
            default:
                (0, $2TdSl.point)(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $d50f79aee6d1db61$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $d50f79aee6d1db61$var$CatmullRomOpen(context, alpha) : new (0, $28f366a2c0840f32$export$cd7d1a617282f2f1)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);



var $2TdSl = parcelRequire("2TdSl");

function $3721a21b90f7c149$var$LinearClosed(context) {
    this._context = context;
}
$3721a21b90f7c149$var$LinearClosed.prototype = {
    areaStart: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    areaEnd: (0, $59ec507c353b2795$export$2e2bcd8739ae039),
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._point) this._context.closePath();
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) this._context.lineTo(x, y);
        else this._point = 1, this._context.moveTo(x, y);
    }
};
function $3721a21b90f7c149$export$2e2bcd8739ae039(context) {
    return new $3721a21b90f7c149$var$LinearClosed(context);
}



function $2baa80d9d433735d$var$sign(x) {
    return x < 0 ? -1 : 1;
}
// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function $2baa80d9d433735d$var$slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return ($2baa80d9d433735d$var$sign(s0) + $2baa80d9d433735d$var$sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
// Calculate a one-sided slope.
function $2baa80d9d433735d$var$slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function $2baa80d9d433735d$var$point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function $2baa80d9d433735d$var$MonotoneX(context) {
    this._context = context;
}
$2baa80d9d433735d$var$MonotoneX.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                $2baa80d9d433735d$var$point(this, this._t0, $2baa80d9d433735d$var$slope2(this, this._t0));
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        var t1 = NaN;
        x = +x, y = +y;
        if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                $2baa80d9d433735d$var$point(this, $2baa80d9d433735d$var$slope2(this, t1 = $2baa80d9d433735d$var$slope3(this, x, y)), t1);
                break;
            default:
                $2baa80d9d433735d$var$point(this, this._t0, t1 = $2baa80d9d433735d$var$slope3(this, x, y));
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
    }
};
function $2baa80d9d433735d$var$MonotoneY(context) {
    this._context = new $2baa80d9d433735d$var$ReflectContext(context);
}
($2baa80d9d433735d$var$MonotoneY.prototype = Object.create($2baa80d9d433735d$var$MonotoneX.prototype)).point = function(x, y) {
    $2baa80d9d433735d$var$MonotoneX.prototype.point.call(this, y, x);
};
function $2baa80d9d433735d$var$ReflectContext(context) {
    this._context = context;
}
$2baa80d9d433735d$var$ReflectContext.prototype = {
    moveTo: function(x, y) {
        this._context.moveTo(y, x);
    },
    closePath: function() {
        this._context.closePath();
    },
    lineTo: function(x, y) {
        this._context.lineTo(y, x);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
    }
};
function $2baa80d9d433735d$export$99563b5420dbdc55(context) {
    return new $2baa80d9d433735d$var$MonotoneX(context);
}
function $2baa80d9d433735d$export$8b5360456d6bdb88(context) {
    return new $2baa80d9d433735d$var$MonotoneY(context);
}


function $294bae45c0b0abb6$var$Natural(context) {
    this._context = context;
}
$294bae45c0b0abb6$var$Natural.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = [];
        this._y = [];
    },
    lineEnd: function() {
        var x = this._x, y = this._y, n = x.length;
        if (n) {
            this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
            if (n === 2) this._context.lineTo(x[1], y[1]);
            else {
                var px = $294bae45c0b0abb6$var$controlPoints(x), py = $294bae45c0b0abb6$var$controlPoints(y);
                for(var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1)this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
            }
        }
        if (this._line || this._line !== 0 && n === 1) this._context.closePath();
        this._line = 1 - this._line;
        this._x = this._y = null;
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function $294bae45c0b0abb6$var$controlPoints(x) {
    var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
    for(i = 1; i < n - 1; ++i)a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
    for(i = 1; i < n; ++i)m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a[n - 1] = r[n - 1] / b[n - 1];
    for(i = n - 2; i >= 0; --i)a[i] = (r[i] - a[i + 1]) / b[i];
    b[n - 1] = (x[n] + a[n - 1]) / 2;
    for(i = 0; i < n - 1; ++i)b[i] = 2 * x[i + 1] - a[i + 1];
    return [
        a,
        b
    ];
}
function $294bae45c0b0abb6$export$2e2bcd8739ae039(context) {
    return new $294bae45c0b0abb6$var$Natural(context);
}


function $72cdb48bfe4699b0$var$Step(context, t) {
    this._context = context;
    this._t = t;
}
$72cdb48bfe4699b0$var$Step.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = this._y = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                if (this._t <= 0) {
                    this._context.lineTo(this._x, y);
                    this._context.lineTo(x, y);
                } else {
                    var x1 = this._x * (1 - this._t) + x * this._t;
                    this._context.lineTo(x1, this._y);
                    this._context.lineTo(x1, y);
                }
                break;
        }
        this._x = x, this._y = y;
    }
};
function $72cdb48bfe4699b0$export$2e2bcd8739ae039(context) {
    return new $72cdb48bfe4699b0$var$Step(context, 0.5);
}
function $72cdb48bfe4699b0$export$10eafa5b7478b343(context) {
    return new $72cdb48bfe4699b0$var$Step(context, 0);
}
function $72cdb48bfe4699b0$export$793b3db073781cbb(context) {
    return new $72cdb48bfe4699b0$var$Step(context, 1);
}




function $1115c2e1e7108bf5$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 1)) return;
    for(var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i){
        s0 = s1, s1 = series[order[i]];
        for(j = 0; j < m; ++j)s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
}


function $673e2100932ce064$export$2e2bcd8739ae039(series) {
    var n = series.length, o = new Array(n);
    while(--n >= 0)o[n] = n;
    return o;
}


function $4c99f7ed671763f9$var$stackValue(d, key) {
    return d[key];
}
function $4c99f7ed671763f9$var$stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
}
function $4c99f7ed671763f9$export$2e2bcd8739ae039() {
    var keys = (0, $423139cc125b403c$export$2e2bcd8739ae039)([]), order = (0, $673e2100932ce064$export$2e2bcd8739ae039), offset = (0, $1115c2e1e7108bf5$export$2e2bcd8739ae039), value = $4c99f7ed671763f9$var$stackValue;
    function stack(data) {
        var sz = Array.from(keys.apply(this, arguments), $4c99f7ed671763f9$var$stackSeries), i, n = sz.length, j = -1, oz;
        for (const d of data)for(i = 0, ++j; i < n; ++i)(sz[i][j] = [
            0,
            +value(d, sz[i].key, j, data)
        ]).data = d;
        for(i = 0, oz = (0, $1faebcae8b69a45b$export$2e2bcd8739ae039)(order(sz)); i < n; ++i)sz[oz[i]].index = i;
        offset(sz, oz);
        return sz;
    }
    stack.keys = function(_) {
        return arguments.length ? (keys = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(Array.from(_)), stack) : keys;
    };
    stack.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(+_), stack) : value;
    };
    stack.order = function(_) {
        return arguments.length ? (order = _ == null ? (0, $673e2100932ce064$export$2e2bcd8739ae039) : typeof _ === "function" ? _ : (0, $423139cc125b403c$export$2e2bcd8739ae039)(Array.from(_)), stack) : order;
    };
    stack.offset = function(_) {
        return arguments.length ? (offset = _ == null ? (0, $1115c2e1e7108bf5$export$2e2bcd8739ae039) : _, stack) : offset;
    };
    return stack;
}



function $72ce2e7c3c6089a3$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, n, j = 0, m = series[0].length, y; j < m; ++j){
        for(y = i = 0; i < n; ++i)y += series[i][j][1] || 0;
        if (y) for(i = 0; i < n; ++i)series[i][j][1] /= y;
    }
    (0, $1115c2e1e7108bf5$export$2e2bcd8739ae039)(series, order);
}


function $b5c95711bc700354$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j)for(yp = yn = 0, i = 0; i < n; ++i){
        if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) d[0] = yp, d[1] = yp += dy;
        else if (dy < 0) d[1] = yn, d[0] = yn += dy;
        else d[0] = 0, d[1] = dy;
    }
}




function $a776f1e64ac71c69$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j){
        for(var i = 0, y = 0; i < n; ++i)y += series[i][j][1] || 0;
        s0[j][1] += s0[j][0] = -y / 2;
    }
    (0, $1115c2e1e7108bf5$export$2e2bcd8739ae039)(series, order);
}



function $72fe9979dccee65b$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for(var y = 0, j = 1, s0, m, n; j < m; ++j){
        for(var i = 0, s1 = 0, s2 = 0; i < n; ++i){
            var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
            for(var k = 0; k < i; ++k){
                var sk = series[order[k]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
                s3 += skj0 - skj1;
            }
            s1 += sij0, s2 += s3 * sij0;
        }
        s0[j - 1][1] += s0[j - 1][0] = y;
        if (s1) y -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    (0, $1115c2e1e7108bf5$export$2e2bcd8739ae039)(series, order);
}



function $5090739d84b95c50$export$2e2bcd8739ae039(series) {
    var peaks = series.map($5090739d84b95c50$var$peak);
    return (0, $673e2100932ce064$export$2e2bcd8739ae039)(series).sort(function(a, b) {
        return peaks[a] - peaks[b];
    });
}
function $5090739d84b95c50$var$peak(series) {
    var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
    while(++i < n)if ((vi = +series[i][1]) > vj) vj = vi, j = i;
    return j;
}



function $7ec8332494e74923$export$2e2bcd8739ae039(series) {
    var sums = series.map($7ec8332494e74923$export$8a63f25cc62965f1);
    return (0, $673e2100932ce064$export$2e2bcd8739ae039)(series).sort(function(a, b) {
        return sums[a] - sums[b];
    });
}
function $7ec8332494e74923$export$8a63f25cc62965f1(series) {
    var s = 0, i = -1, n = series.length, v;
    while(++i < n)if (v = +series[i][1]) s += v;
    return s;
}



function $74171cb63c30f4cd$export$2e2bcd8739ae039(series) {
    return (0, $7ec8332494e74923$export$2e2bcd8739ae039)(series).reverse();
}




function $35a1092a441802c7$export$2e2bcd8739ae039(series) {
    var n = series.length, i, j, sums = series.map((0, $7ec8332494e74923$export$8a63f25cc62965f1)), order = (0, $5090739d84b95c50$export$2e2bcd8739ae039)(series), top = 0, bottom = 0, tops = [], bottoms = [];
    for(i = 0; i < n; ++i){
        j = order[i];
        if (top < bottom) {
            top += sums[j];
            tops.push(j);
        } else {
            bottom += sums[j];
            bottoms.push(j);
        }
    }
    return bottoms.reverse().concat(tops);
}




function $d32efea63c0ead35$export$2e2bcd8739ae039(series) {
    return (0, $673e2100932ce064$export$2e2bcd8739ae039)(series).reverse();
}




var $4d1037e65b252e6d$exports = {};

$parcel$export($4d1037e65b252e6d$exports, "timeInterval", () => $2bf79513bffd6706$export$1a539c8b2950ab40);
$parcel$export($4d1037e65b252e6d$exports, "utcMillisecond", () => $695c6a9dcf1e3327$export$edc5e5cb87280477);
$parcel$export($4d1037e65b252e6d$exports, "utcMilliseconds", () => $695c6a9dcf1e3327$export$9a27fac83d67afd3);
$parcel$export($4d1037e65b252e6d$exports, "timeMillisecond", () => $695c6a9dcf1e3327$export$edc5e5cb87280477);
$parcel$export($4d1037e65b252e6d$exports, "timeMilliseconds", () => $695c6a9dcf1e3327$export$9a27fac83d67afd3);
$parcel$export($4d1037e65b252e6d$exports, "utcSecond", () => $183f8449d1fe2a51$export$3d3c77ce7df7d30d);
$parcel$export($4d1037e65b252e6d$exports, "utcSeconds", () => $183f8449d1fe2a51$export$4792e48abc550fa1);
$parcel$export($4d1037e65b252e6d$exports, "timeSecond", () => $183f8449d1fe2a51$export$3d3c77ce7df7d30d);
$parcel$export($4d1037e65b252e6d$exports, "timeSeconds", () => $183f8449d1fe2a51$export$4792e48abc550fa1);
$parcel$export($4d1037e65b252e6d$exports, "timeMinute", () => $b8d233baf96c62cb$export$a7e4c34a52f0576);
$parcel$export($4d1037e65b252e6d$exports, "timeMinutes", () => $b8d233baf96c62cb$export$186d65358374c0a2);
$parcel$export($4d1037e65b252e6d$exports, "utcMinute", () => $b8d233baf96c62cb$export$efe6712d6003761b);
$parcel$export($4d1037e65b252e6d$exports, "utcMinutes", () => $b8d233baf96c62cb$export$cedd563624e8ee50);
$parcel$export($4d1037e65b252e6d$exports, "timeHour", () => $00f993d5e60ac102$export$46c68a5833bc315b);
$parcel$export($4d1037e65b252e6d$exports, "timeHours", () => $00f993d5e60ac102$export$fb843f9087cd5235);
$parcel$export($4d1037e65b252e6d$exports, "utcHour", () => $00f993d5e60ac102$export$31f6f2b3c63ac75e);
$parcel$export($4d1037e65b252e6d$exports, "utcHours", () => $00f993d5e60ac102$export$6e7a76cd5f50b719);
$parcel$export($4d1037e65b252e6d$exports, "timeDay", () => $4409f242a2e3a2a1$export$8888529b966033e5);
$parcel$export($4d1037e65b252e6d$exports, "timeDays", () => $4409f242a2e3a2a1$export$6657a54f3034cf45);
$parcel$export($4d1037e65b252e6d$exports, "utcDay", () => $4409f242a2e3a2a1$export$c8cbc42cefd47140);
$parcel$export($4d1037e65b252e6d$exports, "utcDays", () => $4409f242a2e3a2a1$export$d277e198508549a1);
$parcel$export($4d1037e65b252e6d$exports, "unixDay", () => $4409f242a2e3a2a1$export$fb065be2d7ea4a71);
$parcel$export($4d1037e65b252e6d$exports, "unixDays", () => $4409f242a2e3a2a1$export$a491caaf5e9481aa);
$parcel$export($4d1037e65b252e6d$exports, "timeWeek", () => $374b91dc1c90dd87$export$22ee6205b762968c);
$parcel$export($4d1037e65b252e6d$exports, "timeWeeks", () => $374b91dc1c90dd87$export$eac514c8a8674eba);
$parcel$export($4d1037e65b252e6d$exports, "timeSunday", () => $374b91dc1c90dd87$export$22ee6205b762968c);
$parcel$export($4d1037e65b252e6d$exports, "timeSundays", () => $374b91dc1c90dd87$export$eac514c8a8674eba);
$parcel$export($4d1037e65b252e6d$exports, "timeMonday", () => $374b91dc1c90dd87$export$e79bbe0177cf1b01);
$parcel$export($4d1037e65b252e6d$exports, "timeMondays", () => $374b91dc1c90dd87$export$f7219b1481948356);
$parcel$export($4d1037e65b252e6d$exports, "timeTuesday", () => $374b91dc1c90dd87$export$57c0658c29f77708);
$parcel$export($4d1037e65b252e6d$exports, "timeTuesdays", () => $374b91dc1c90dd87$export$77e22b12c5bed05b);
$parcel$export($4d1037e65b252e6d$exports, "timeWednesday", () => $374b91dc1c90dd87$export$3fbeef226c256e43);
$parcel$export($4d1037e65b252e6d$exports, "timeWednesdays", () => $374b91dc1c90dd87$export$b85d407a471809e8);
$parcel$export($4d1037e65b252e6d$exports, "timeThursday", () => $374b91dc1c90dd87$export$608689422d5cf9f4);
$parcel$export($4d1037e65b252e6d$exports, "timeThursdays", () => $374b91dc1c90dd87$export$c1bc1c49254c8855);
$parcel$export($4d1037e65b252e6d$exports, "timeFriday", () => $374b91dc1c90dd87$export$548e5227aa183dca);
$parcel$export($4d1037e65b252e6d$exports, "timeFridays", () => $374b91dc1c90dd87$export$3691a1557fff46f1);
$parcel$export($4d1037e65b252e6d$exports, "timeSaturday", () => $374b91dc1c90dd87$export$c56a3ad248908e19);
$parcel$export($4d1037e65b252e6d$exports, "timeSaturdays", () => $374b91dc1c90dd87$export$b755452d02cba8d2);
$parcel$export($4d1037e65b252e6d$exports, "utcWeek", () => $374b91dc1c90dd87$export$4898b06303a92011);
$parcel$export($4d1037e65b252e6d$exports, "utcWeeks", () => $374b91dc1c90dd87$export$6f3e1c2b0f7d7880);
$parcel$export($4d1037e65b252e6d$exports, "utcSunday", () => $374b91dc1c90dd87$export$4898b06303a92011);
$parcel$export($4d1037e65b252e6d$exports, "utcSundays", () => $374b91dc1c90dd87$export$6f3e1c2b0f7d7880);
$parcel$export($4d1037e65b252e6d$exports, "utcMonday", () => $374b91dc1c90dd87$export$9cfc53b9cfafd080);
$parcel$export($4d1037e65b252e6d$exports, "utcMondays", () => $374b91dc1c90dd87$export$1d2d8b858bb366f9);
$parcel$export($4d1037e65b252e6d$exports, "utcTuesday", () => $374b91dc1c90dd87$export$2a6d545f77eceb15);
$parcel$export($4d1037e65b252e6d$exports, "utcTuesdays", () => $374b91dc1c90dd87$export$1d5f6785fc7f30f8);
$parcel$export($4d1037e65b252e6d$exports, "utcWednesday", () => $374b91dc1c90dd87$export$a5c25d8ed64433c4);
$parcel$export($4d1037e65b252e6d$exports, "utcWednesdays", () => $374b91dc1c90dd87$export$7a75faf0e37ef4af);
$parcel$export($4d1037e65b252e6d$exports, "utcThursday", () => $374b91dc1c90dd87$export$1db08111baec2f53);
$parcel$export($4d1037e65b252e6d$exports, "utcThursdays", () => $374b91dc1c90dd87$export$417eb959611b2f2f);
$parcel$export($4d1037e65b252e6d$exports, "utcFriday", () => $374b91dc1c90dd87$export$29265e34dd5921f7);
$parcel$export($4d1037e65b252e6d$exports, "utcFridays", () => $374b91dc1c90dd87$export$59d308db7af08c64);
$parcel$export($4d1037e65b252e6d$exports, "utcSaturday", () => $374b91dc1c90dd87$export$85b74dad05049604);
$parcel$export($4d1037e65b252e6d$exports, "utcSaturdays", () => $374b91dc1c90dd87$export$a124108a0a7f34c8);
$parcel$export($4d1037e65b252e6d$exports, "timeMonth", () => $10532164eb1568d5$export$7e1084fb688591c1);
$parcel$export($4d1037e65b252e6d$exports, "timeMonths", () => $10532164eb1568d5$export$3e24aa839cd0f1c4);
$parcel$export($4d1037e65b252e6d$exports, "utcMonth", () => $10532164eb1568d5$export$cd49b3d2bcfe50d5);
$parcel$export($4d1037e65b252e6d$exports, "utcMonths", () => $10532164eb1568d5$export$49159f585997498);
$parcel$export($4d1037e65b252e6d$exports, "timeYear", () => $7ebdeb72f8eadd37$export$cd17cfe45df0c046);
$parcel$export($4d1037e65b252e6d$exports, "timeYears", () => $7ebdeb72f8eadd37$export$69a4e90dd2cc3bd1);
$parcel$export($4d1037e65b252e6d$exports, "utcYear", () => $7ebdeb72f8eadd37$export$d5c3802e389714c4);
$parcel$export($4d1037e65b252e6d$exports, "utcYears", () => $7ebdeb72f8eadd37$export$3e24d311e17f5802);
$parcel$export($4d1037e65b252e6d$exports, "utcTicks", () => $3d2d1560e489ccaa$export$826ba5ae907e9767);
$parcel$export($4d1037e65b252e6d$exports, "utcTickInterval", () => $3d2d1560e489ccaa$export$6262d8d056ea44c4);
$parcel$export($4d1037e65b252e6d$exports, "timeTicks", () => $3d2d1560e489ccaa$export$60c76498552d28a6);
$parcel$export($4d1037e65b252e6d$exports, "timeTickInterval", () => $3d2d1560e489ccaa$export$69511150134dd174);












var $3f364390f60a03b2$exports = {};

$parcel$export($3f364390f60a03b2$exports, "timeFormatDefaultLocale", () => $55b060da6b737205$export$2e2bcd8739ae039);
$parcel$export($3f364390f60a03b2$exports, "timeFormat", () => $55b060da6b737205$export$94f4d87fad5dcf9a);
$parcel$export($3f364390f60a03b2$exports, "timeParse", () => $55b060da6b737205$export$32b9cd16e1b8c8d2);
$parcel$export($3f364390f60a03b2$exports, "utcFormat", () => $55b060da6b737205$export$1a08fe38f63ebbbb);
$parcel$export($3f364390f60a03b2$exports, "utcParse", () => $55b060da6b737205$export$3edae9cf8e233729);
$parcel$export($3f364390f60a03b2$exports, "timeFormatLocale", () => $7bdc349069fba8bd$export$2e2bcd8739ae039);
$parcel$export($3f364390f60a03b2$exports, "isoFormat", () => $6ea1788530bbdde3$export$2e2bcd8739ae039);
$parcel$export($3f364390f60a03b2$exports, "isoParse", () => $a7ac7e469568202d$export$2e2bcd8739ae039);



var $6ea1788530bbdde3$export$491f7bf2e88d83ce = "%Y-%m-%dT%H:%M:%S.%LZ";
function $6ea1788530bbdde3$var$formatIsoNative(date) {
    return date.toISOString();
}
var $6ea1788530bbdde3$var$formatIso = Date.prototype.toISOString ? $6ea1788530bbdde3$var$formatIsoNative : (0, $55b060da6b737205$export$1a08fe38f63ebbbb)($6ea1788530bbdde3$export$491f7bf2e88d83ce);
var $6ea1788530bbdde3$export$2e2bcd8739ae039 = $6ea1788530bbdde3$var$formatIso;




function $a7ac7e469568202d$var$parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
}
var $a7ac7e469568202d$var$parseIso = +new Date("2000-01-01T00:00:00.000Z") ? $a7ac7e469568202d$var$parseIsoNative : (0, $55b060da6b737205$export$3edae9cf8e233729)((0, $6ea1788530bbdde3$export$491f7bf2e88d83ce));
var $a7ac7e469568202d$export$2e2bcd8739ae039 = $a7ac7e469568202d$var$parseIso;




var $21f4f824b1b742d7$exports = {};

$parcel$export($21f4f824b1b742d7$exports, "now", () => $f1f097b5a7611f55$export$461939dd4422153);
$parcel$export($21f4f824b1b742d7$exports, "timer", () => $f1f097b5a7611f55$export$9dc4ecf953986f04);
$parcel$export($21f4f824b1b742d7$exports, "timerFlush", () => $f1f097b5a7611f55$export$d60154c1d7f3990e);
$parcel$export($21f4f824b1b742d7$exports, "timeout", () => $c352a1d9fdabab23$export$2e2bcd8739ae039);
$parcel$export($21f4f824b1b742d7$exports, "interval", () => $a7396805fe2a294b$export$2e2bcd8739ae039);



function $a7396805fe2a294b$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new (0, $f1f097b5a7611f55$export$c57e9b2d8b9e4de), total = delay;
    if (delay == null) return t.restart(callback, delay, time), t;
    t._restart = t.restart;
    t.restart = function(callback, delay, time) {
        delay = +delay, time = time == null ? (0, $f1f097b5a7611f55$export$461939dd4422153)() : +time;
        t._restart(function tick(elapsed) {
            elapsed += total;
            t._restart(tick, total += delay, time);
            callback(elapsed);
        }, delay, time);
    };
    t.restart(callback, delay, time);
    return t;
}





var $af791323c0416cda$exports = {};

$parcel$export($af791323c0416cda$exports, "zoom", () => $9e296e9f9c998da1$export$2e2bcd8739ae039);
$parcel$export($af791323c0416cda$exports, "zoomTransform", () => $de575e8833e6b55f$export$2e2bcd8739ae039);
$parcel$export($af791323c0416cda$exports, "zoomIdentity", () => $de575e8833e6b55f$export$f0954fd7d5368655);
$parcel$export($af791323c0416cda$exports, "ZoomTransform", () => $de575e8833e6b55f$export$563a914cafbdc389);





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





$parcel$exportWildcard($725f1eb1aed1779e$exports, $f472393370ac652e$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $f1348755dd98ee8e$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $36bbe195d131a859$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $a1e3d47cf0471c10$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $ea36ec876f766d9a$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $9cd38c128b9ccd39$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $2589dffb12b10611$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $6c51ad0fde17f285$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $d652859119326841$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $cd0c3413713816bd$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $7224514b6bcd4ae2$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $f1ab2612140dd3f3$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $7d696246295d087f$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $aa8b739c735e7d8a$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $7cebe8349b10a21c$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $36968d736655ff46$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $4dd2c135f647be17$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $156bc7881be70dd0$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $5007f1a1a7eef490$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $9278144dba97060a$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $8aedd0efdb3879bc$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $8fbf317e793afeee$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $526aa4e313b6feb4$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $9b6c74dff7315fa5$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $25f0b67c2abadefe$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $4d1037e65b252e6d$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $3f364390f60a03b2$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $21f4f824b1b742d7$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $579fea68b88fae2c$exports);
$parcel$exportWildcard($725f1eb1aed1779e$exports, $af791323c0416cda$exports);


const $33bd6c1f0dbf059f$export$78078170dbc3a228 = 20;
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
            radius: $33bd6c1f0dbf059f$export$78078170dbc3a228,
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


function $05ffc10ba51c6f6e$export$cfcfaad700010be7(vertices, links, width, height, iterations) {
    const area = width * height;
    const k = Math.sqrt(area / vertices.length); // Ideal edge length
    const minDist = 0.01; // Minimum distance to prevent instability
    const repulsiveForce = (distance)=>k * k / Math.max(distance, minDist);
    const attractiveForce = (distance)=>distance * distance / k;
    let t = width / 10; // Initial temperature
    const dt = t / (iterations + 1); // Temperature decrement
    for(let i = 0; i < iterations; i++){
        // Calculate repulsive forces
        for (let v of vertices){
            v.disp = {
                x: 0,
                y: 0
            };
            for (let u of vertices)if (v !== u) {
                let dx = v.cx - u.cx;
                let dy = v.cy - u.cy;
                let distance = Math.max(Math.sqrt(dx * dx + dy * dy), minDist);
                let force = repulsiveForce(distance);
                v.disp.x += dx / distance * force;
                v.disp.y += dy / distance * force;
            }
        }
        // Calculate attractive forces
        for (let link of links){
            let source = link.source;
            let target = link.target;
            let dx = source.cx - target.cx;
            let dy = source.cy - target.cy;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let force = attractiveForce(distance);
            source.disp.x -= dx / distance * force;
            source.disp.y -= dy / distance * force;
            target.disp.x += dx / distance * force;
            target.disp.y += dy / distance * force;
        }
        // Limit the maximum displacement to the temperature t
        // and then prevent from being displaced outside the frame
        for (let v of vertices){
            let dispLength = Math.sqrt(v.disp.x * v.disp.x + v.disp.y * v.disp.y);
            v.cx += v.disp.x / dispLength * Math.min(dispLength, t);
            v.cy += v.disp.y / dispLength * Math.min(dispLength, t);
            // Keep within bounds
            v.cx = Math.min(width, Math.max(0, v.cx));
            v.cy = Math.min(height, Math.max(0, v.cy));
        }
        // Reduce the temperature as the layout improves
        t -= dt;
    }
    return vertices;
}


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
    $725f1eb1aed1779e$exports; // For some reason if d3 is not "called" before the select statement the next line throws a reference error
    const container = $725f1eb1aed1779e$exports.select("#d3-container");
    const svg = container.append("svg").attr("width", "100%").attr("height", "100%");
    const { yUpperBound: yUpperBound, xUpperBound: xUpperBound, padding: padding } = $915c7ff9e95902f7$var$getDrawingAreaWithinContainer(svg);
    let { vertices: vertices, links: linksData } = (0, $33bd6c1f0dbf059f$export$4f734d517e496d2)(yUpperBound, xUpperBound, padding);
    vertices = (0, $05ffc10ba51c6f6e$export$cfcfaad700010be7)(vertices, linksData, xUpperBound - 2 * padding, yUpperBound - 2 * padding, 50);
    // shift vertices
    vertices.forEach((v)=>{
        v.cx += padding;
        v.cy += padding;
    });
    const g = svg.append("g");
    let offsetX = 0;
    let offsetY = 0;
    // line direction arrows
    svg.append("defs").append("marker").attr("id", "arrowhead").attr("viewBox", "-0 -5 10 10").attr("refX", (0, $33bd6c1f0dbf059f$export$78078170dbc3a228)).attr("refY", 0).attr("orient", "auto").attr("markerWidth", (0, $33bd6c1f0dbf059f$export$78078170dbc3a228) * 0.5).attr("markerHeight", (0, $33bd6c1f0dbf059f$export$78078170dbc3a228) * 0.5).attr("xoverflow", "visible").append("svg:path").attr("d", "M 0,-5 L 10 ,0 L 0,5").attr("fill", "black").style("stroke", "none");
    const links = g.selectAll("line").data(linksData).enter().append("line").attr("stroke", "black").attr("stroke-width", 2).attr("x1", (d)=>d.source.cx).attr("y1", (d)=>d.source.cy).attr("x2", (d)=>d.target.cx).attr("y2", (d)=>d.target.cy).attr("marker-end", "url(#arrowhead)");
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
    svg.call($725f1eb1aed1779e$exports.zoom().on("zoom", ({ transform: transform })=>{
        g.attr("transform", transform);
    }));
});


//# sourceMappingURL=index.b2adb695.js.map
