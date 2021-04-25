/**
 * 合并两个对象
 * @param {Object} preObject
 * @param {Object} customObject
 */
const mergeObject = (preObject, customObject) => {
  for (const key in customObject) {
    if (typeof preObject[key] !== typeof customObject[key]) {
      preObject[key] = customObject[key];
    } else {
      if (!preObject[key]) preObject[key] = {};
      if (typeof customObject[key] === 'object') {
        mergeObject(preObject[key], customObject[key]);
      } else {
        preObject[key] = customObject[key];
      }
    }
  }
};

export default (preObject, customObject) => {
  mergeObject(preObject, customObject);
  return preObject;
};
