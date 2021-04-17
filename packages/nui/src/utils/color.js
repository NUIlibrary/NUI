/**
 * 格式化 16 进制的字符串
 * 对只有 1 位的 16 进制字符串
 * 在其前补 '0'
 * @param {String} hex
 * @returns String
 */
const formatHexString = (hex) => {
  if (hex.length === 1) {
    hex = '0' + hex;
  }
  return hex;
};

/**
 * RGBA 颜色 转 HSLA 颜色
 * @param {Number | String} r
 * @param {Number | String} g
 * @param {Number | String} b
 * @param {Number | String} a
 * @returns {Object} {h,s,l,a}
 */
const rgba2hsla = (options) => {
  let { r, g, b, a = 1 } = options;
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l,
    a,
  };
};

/**
 * HSLA 颜色 转 RGBA 颜色
 * @param {Number | String} h
 * @param {Number | String} s
 * @param {Number | String} l
 * @param {Number | String} a
 * @returns {Object} {r,g,b,a}
 */
const hsla2rgba = (options) => {
  let { h, s, l, a = 1 } = options;
  let r, g, b;
  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    let hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a,
  };
};

/**
 * 16 进制颜色 转 RGBA 颜色
 * @param {String} hex [#][0-9a-fA-f]{3|6|8}
 * @returns {Object} {r, g, b, a}
 */
const hex2rgba = (hex) => {
  const reg = /^#*([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
  if (!reg.test(hex)) {
    console.warn('[NUI] Illegal hexadecimal character.');
    return;
  }
  let hexValue = hex.replace('#', ''),
    r,
    g,
    b,
    a = 1;
  if (hexValue.length === 3) {
    r = parseInt(`0x${hexValue[0]}`);
    g = parseInt(`0x${hexValue[1]}`);
    b = parseInt(`0x${hexValue[2]}`);
  } else {
    r = parseInt(`0x${hexValue.slice(0, 2)}`);
    g = parseInt(`0x${hexValue.slice(2, 4)}`);
    b = parseInt(`0x${hexValue.slice(4, 6)}`);
    a = hexValue.slice(6, 8)
      ? Math.floor((parseInt(`0x${hexValue.slice(6, 8)}`) / 255) * 100) / 100
      : 1;
  }
  return {
    r,
    g,
    b,
    a,
  };
};

/**
 * RGBA 颜色 转 16 进制颜色
 * @param {Number | String} r [0,255]
 * @param {Number | String} g [0,255]
 * @param {Number | String} b [0,255]
 * @param {Number | String} a [0,1]
 * @returns {String}
 */
const rgba2hex = (options) => {
  let { r, g, b, a = 1 } = options;
  let hex = ((r << 16) | (g << 8) | b).toString(16);
  hex = new Array(Math.abs(hex.length - 7)).join('0') + hex;
  if (a >= 0 && a < 1) {
    const x = parseInt(255 * a).toString(16);
    hex += formatHexString(x);
  }
  return '#' + hex.toLocaleUpperCase();
};

/**
 * NUI 颜色族生成函数
 * @param {String} color 16 进制颜色
 * @param {Number} num 可选
 * @returns 
 */
const colorFamilyGenerator = (color, num = 0) => {
  const { r, g, b } = hex2rgba(color);
  const standardNum = 3;
  let { h, s, l } = rgba2hsla({ r, g, b });
  if (num) {
    let { r, g, b } = hsla2rgba(h, s, l + (num - standardNum) * 0.1);
    return rgba2hex(r, g, b);
  } else {
    let colorFamily = [];
    for (let i = 1; i < 6; i++) {
      let { r, g, b } = hsla2rgba({ h, s, l: l + (standardNum - i) * 0.1 });
      colorFamily.push(rgba2hex({ r, g, b }));
    }
    return colorFamily;
  }
};

export { colorFamilyGenerator };
