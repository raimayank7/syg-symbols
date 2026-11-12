var CNAMES={"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkgrey":"#a9a9a9","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkslategrey":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dimgrey":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","grey":"#808080","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgray":"#d3d3d3","lightgreen":"#90ee90","lightgrey":"#d3d3d3","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightslategrey":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370db","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#db7093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","slategrey":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"};
/* symbols.shareyourgroup.com/colors: colour converter, palette maker, contrast checker. Pure functions first (checked by the build with Node against col.py).
   The named colours (W3C CSS Color Module Level 4) are added by the build as CNAMES. */
(function () {
  'use strict';
  var K = {}, NAMES = (typeof CNAMES !== 'undefined') ? CNAMES : {};
  K.setNames = function (n) { NAMES = n; };
  K.hex2rgb = function (h) { h = h.replace('#', ''); if (h.length === 3) h = h.replace(/./g, '$&$&'); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; };
  K.rgb2hex = function (c) { return '#' + c.map(function (x) { x = Math.max(0, Math.min(255, Math.round(x))); return (x < 16 ? '0' : '') + x.toString(16); }).join(''); };
  K.rgb2hsl = function (c) {
    var r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn, h, s;
    if (mx === mn) return [0, 0, Math.round(l * 100)];
    s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn);
    if (mx === r) h = (((g - b) / d) % 6 + 6) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4;
    return [Math.round(h * 60) % 360, Math.round(s * 100), Math.round(l * 100)];
  };
  K.hsl2rgb = function (h, s, l) {
    s /= 100; l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, t = [[c, x, 0], [x, c, 0], [0, c, x], [0, x, c], [x, 0, c], [c, 0, x]][Math.floor(h / 60) % 6];
    return t.map(function (v) { return Math.round((v + m) * 255); });
  };
  K.rgb2hsv = function (c) { var r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b); return [K.rgb2hsl(c)[0], Math.round(mx === 0 ? 0 : (mx - mn) / mx * 100), Math.round(mx * 100)]; };
  K.rgb2cmyk = function (c) { var r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, k = 1 - Math.max(r, g, b); if (k === 1) return [0, 0, 0, 100]; return [(1 - r - k) / (1 - k), (1 - g - k) / (1 - k), (1 - b - k) / (1 - k), k].map(function (v) { return Math.round(v * 100); }); };
  K.lum = function (c) { var f = function (v) { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
  K.contrast = function (a, b) { var la = K.lum(a), lb = K.lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
  K.mix = function (a, b, t) { return [0, 1, 2].map(function (i) { return Math.round(a[i] + (b[i] - a[i]) * t); }); };
  K.rotate = function (c, deg) { var h = K.rgb2hsl(c); return K.hsl2rgb((h[0] + deg) % 360, h[1], h[2]); };
  K.nearest = function (c, n) { var l = Object.keys(NAMES).map(function (k) { var d = K.hex2rgb(NAMES[k]); return [(c[0] - d[0]) * (c[0] - d[0]) + (c[1] - d[1]) * (c[1] - d[1]) + (c[2] - d[2]) * (c[2] - d[2]), k]; }); l.sort(function (a, b) { return a[0] - b[0] || (a[1] < b[1] ? -1 : 1); }); return l.slice(0, n || 1).map(function (x) { return x[1]; }); };
  /* read what someone typed: #hex, hex, rgb(...), "r, g, b", hsl(...), or a colour name. Returns [r,g,b] or null */
  K.parse = function (s) {
    s = String(s).trim().toLowerCase(); var m;
    if (NAMES[s.replace(/[\s-]/g, '')]) return K.hex2rgb(NAMES[s.replace(/[\s-]/g, '')]);
    if (s === 'grey') return K.hex2rgb(NAMES.gray);
    if ((m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(s))) return K.hex2rgb(m[1]);
    if ((m = /^hsla?\(?\s*(\d{1,3})(?:deg)?[\s,]+(\d{1,3})%?[\s,]+(\d{1,3})%?/.exec(s)) && +m[1] <= 360 && +m[2] <= 100 && +m[3] <= 100) return K.hsl2rgb(+m[1] % 360, +m[2], +m[3]);
    if ((m = /^(?:rgba?\(?)?\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})\s*\)?$/.exec(s)) && +m[1] < 256 && +m[2] < 256 && +m[3] < 256) return [+m[1], +m[2], +m[3]];
    return null;
  };
  K.harmonies = function (c) {
    return { complementary: [K.rotate(c, 180)], analogous: [K.rotate(c, 330), K.rotate(c, 30)], triadic: [K.rotate(c, 120), K.rotate(c, 240)], split: [K.rotate(c, 150), K.rotate(c, 210)], tetradic: [K.rotate(c, 90), K.rotate(c, 180), K.rotate(c, 270)] };
  };
  if (typeof module !== 'undefined') { module.exports = K; return; }

  var d = document, $ = function (s) { return d.querySelector(s); }, esc = SYG.esc;
  function ink(c) { return K.contrast(c, [0, 0, 0]) >= K.contrast(c, [255, 255, 255]) ? '#000' : '#fff'; }
  function sw(c, label) { var h = K.rgb2hex(c); return '<button type="button" class="sw" style="background:' + h + ';color:' + ink(c) + '" data-copy="' + h + '" title="Copy ' + h + '">' + (label ? '<b>' + esc(label) + '</b>' : '') + h + '</button>'; }
  function row(l, v) { return '<div class="nrow"><dt>' + l + '</dt><dd>' + esc(v) + '</dd><button class="btn sm ghost" type="button" data-copy="' + esc(v) + '">Copy</button></div>'; }
  function fmts(c) { var hs = K.rgb2hsl(c), hv = K.rgb2hsv(c), k = K.rgb2cmyk(c); return { hex: K.rgb2hex(c), rgb: 'rgb(' + c.join(', ') + ')', hsl: 'hsl(' + hs[0] + ', ' + hs[1] + '%, ' + hs[2] + '%)', hsv: 'hsv(' + hv[0] + ', ' + hv[1] + '%, ' + hv[2] + '%)', cmyk: 'cmyk(' + k.join('%, ') + '%)' }; }
  function nameOf(c) { var n = K.nearest(c, 1)[0], exact = NAMES[n] === K.rgb2hex(c); return (exact ? '' : 'closest to ') + n; }
  function ratio(x) { return (Math.floor(x * 100) / 100).toFixed(2).replace(/\.?0+$/, '') + ' : 1'; }

  /* converter (home) */
  var cf = $('#cc-form');
  if (cf) {
    var show = function (c) {
      var f = fmts(c), cw = K.contrast(c, [255, 255, 255]), cb = K.contrast(c, [0, 0, 0]), i, t = '', s = '';
      for (i = 1; i <= 5; i++) { t += sw(K.mix(c, [255, 255, 255], i / 6)); s += sw(K.mix(c, [0, 0, 0], i / 6)); }
      $('#cc-out').innerHTML = '<div class="result rise"><div class="bigsw" style="background:' + f.hex + ';color:' + ink(c) + '">' + f.hex + '<small>' + esc(nameOf(c)) + '</small></div><dl class="nlist">' +
        row('HEX', f.hex) + row('RGB', f.rgb) + row('HSL', f.hsl) + row('HSV', f.hsv) + row('CMYK', f.cmyk) + '</dl>' +
        '<h3>Lighter (tints)</h3><div class="sws">' + t + '</div><h3>Darker (shades)</h3><div class="sws">' + s + '</div>' +
        '<h3>Text on this colour</h3><p>White text: contrast ' + ratio(cw) + '. Black text: contrast ' + ratio(cb) + '. Use <b>' + (cb >= cw ? 'black' : 'white') + '</b> text on it.</p>' +
        '<div class="acts"><a class="btn sm" href="/colors/palette-generator/?c=' + f.hex.slice(1) + '">Make a palette from it</a><a class="btn sm ghost" href="/colors/contrast-checker/?a=' + f.hex.slice(1) + '">Check contrast</a></div></div>';
      $('#cc-pick').value = f.hex;
    };
    var go = function () { var c = K.parse($('#cc-in').value); if (!c) { $('#cc-out').innerHTML = '<p class="note">That is not a colour code we can read. Try a HEX code such as #ff7f50, RGB such as 255, 127, 80, HSL such as hsl(16, 100%, 66%), or a name such as coral.</p>'; return; } show(c); };
    cf.addEventListener('submit', function (e) { e.preventDefault(); go(); });
    $('#cc-pick').addEventListener('input', function () { $('#cc-in').value = this.value; show(K.hex2rgb(this.value)); });
    d.addEventListener('click', function (e) { var b = e.target.closest('[data-try]'); if (b) { $('#cc-in').value = b.getAttribute('data-try'); go(); } });
    var q = /[?&]c=([0-9a-f]{6})/i.exec(location.search); if (q) { $('#cc-in').value = '#' + q[1]; go(); }
  }

  /* palette maker */
  var pf = $('#pg-form');
  if (pf) {
    var names = { complementary: ['Complementary', 'The colour directly opposite on the wheel. Strongest contrast.'], analogous: ['Analogous', 'The neighbours on each side. Calm and natural.'], triadic: ['Triadic', 'Three colours evenly spaced. Lively but balanced.'],
      split: ['Split complementary', 'The two neighbours of the opposite colour. Contrast with less tension.'], tetradic: ['Tetradic (square)', 'Four colours evenly spaced. Rich, so let one lead.'] };
    var make = function () {
      var c = K.parse($('#pg-in').value); if (!c) { $('#pg-out').innerHTML = '<p class="note">Type a colour code or name, for example #1e90ff or teal.</p>'; return; }
      var h = K.harmonies(c), out = '', k, i, mono = '';
      for (k in names) { var l = [c].concat(h[k]); out += '<div class="pal"><h3>' + names[k][0] + '</h3><p class="hint">' + names[k][1] + '</p><div class="sws big">' + l.map(function (x) { return sw(x); }).join('') + '</div><button class="btn sm ghost" type="button" data-copy="' + l.map(K.rgb2hex).join(', ') + '">Copy all</button></div>'; }
      var ml = []; for (i = 4; i >= 1; i--) ml.push(K.mix(c, [255, 255, 255], i / 5)); ml.push(c); for (i = 1; i <= 3; i++) ml.push(K.mix(c, [0, 0, 0], i / 5));
      mono = '<div class="pal"><h3>Monochromatic</h3><p class="hint">One hue, from light to dark. Safe and tidy.</p><div class="sws big">' + ml.map(function (x) { return sw(x); }).join('') + '</div><button class="btn sm ghost" type="button" data-copy="' + ml.map(K.rgb2hex).join(', ') + '">Copy all</button></div>';
      $('#pg-out').innerHTML = out + mono; $('#pg-pick').value = K.rgb2hex(c);
    };
    pf.addEventListener('submit', function (e) { e.preventDefault(); make(); });
    $('#pg-pick').addEventListener('input', function () { $('#pg-in').value = this.value; make(); });
    $('#pg-rand').addEventListener('click', function () { $('#pg-in').value = K.rgb2hex(K.hsl2rgb(Math.floor(Math.random() * 360), 55 + Math.floor(Math.random() * 35), 40 + Math.floor(Math.random() * 20))); make(); });
    var pq = /[?&]c=([0-9a-f]{6})/i.exec(location.search); $('#pg-in').value = pq ? '#' + pq[1] : '#1e90ff'; make();
  }

  /* contrast checker */
  var xf = $('#cx-form');
  if (xf) {
    var chk = function () {
      var a = K.parse($('#cx-a').value), b = K.parse($('#cx-b').value), out = $('#cx-out');
      if (!a || !b) { out.innerHTML = '<p class="note">Type two colours, for example #333333 and #ffffff.</p>'; return; }
      var r = K.contrast(a, b), ha = K.rgb2hex(a), hb = K.rgb2hex(b), t = function (ok) { return '<span class="tag ' + (ok ? 'yes' : 'bad') + '">' + (ok ? 'Pass' : 'Fail') + '</span>'; };
      out.innerHTML = '<div class="result rise"><p class="big">' + ratio(r) + '</p><div class="demo" style="background:' + hb + ';color:' + ha + '"><p class="d1">Large text looks like this</p><p class="d2">Normal text looks like this. The quick brown fox jumps over the lazy dog.</p></div>' +
        '<div class="tbl"><table><thead><tr><th></th><th>AA</th><th>AAA</th></tr></thead><tbody><tr><td>Normal text</td><td>' + t(r >= 4.5) + ' needs 4.5 : 1</td><td>' + t(r >= 7) + ' needs 7 : 1</td></tr>' +
        '<tr><td>Large text</td><td>' + t(r >= 3) + ' needs 3 : 1</td><td>' + t(r >= 4.5) + ' needs 4.5 : 1</td></tr><tr><td>Icons and controls</td><td>' + t(r >= 3) + ' needs 3 : 1</td><td></td></tr></tbody></table></div>' +
        '<div class="acts"><button class="btn sm ghost" type="button" id="cx-swap">Swap the two colours</button></div></div>';
      $('#cx-pa').value = ha; $('#cx-pb').value = hb;
    };
    xf.addEventListener('submit', function (e) { e.preventDefault(); chk(); });
    $('#cx-pa').addEventListener('input', function () { $('#cx-a').value = this.value; chk(); });
    $('#cx-pb').addEventListener('input', function () { $('#cx-b').value = this.value; chk(); });
    d.addEventListener('click', function (e) { if (e.target.closest('#cx-swap')) { var v = $('#cx-a').value; $('#cx-a').value = $('#cx-b').value; $('#cx-b').value = v; chk(); } });
    var xq = /[?&]a=([0-9a-f]{6})/i.exec(location.search); $('#cx-a').value = xq ? '#' + xq[1] : '#333333'; $('#cx-b').value = '#ffffff'; chk();
  }

  /* filter the list of names */
  var fl = $('[data-filter]');
  if (fl) fl.addEventListener('input', function () { var q = fl.value.trim().toLowerCase().replace(/\s/g, ''), n = 0; [].forEach.call(d.querySelectorAll('[data-q]'), function (el) { var ok = !q || el.getAttribute('data-q').indexOf(q) > -1; el.hidden = !ok; if (ok) n++; }); var none = $('[data-none]'); if (none) none.hidden = n > 0; });
})();
