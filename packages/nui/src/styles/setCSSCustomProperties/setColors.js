import { appendStyleElement, returnCSSContentByColors } from './utils';

/**
 *
 * @param {Object} colors
 * @param {String} id
 */
const setColors = (colors, id) => {
  const styleContent = `:root{${returnCSSContentByColors(colors)}}`;
  appendStyleElement(styleContent, id || null);
};

export default setColors;
