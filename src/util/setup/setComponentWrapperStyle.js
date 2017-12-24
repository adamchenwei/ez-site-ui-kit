import capToCamelCase from './../transform/capToCamelCase';
const concatCssClasses = require('./../concat/concatCssClasses');
module.exports = function setComponentWrapperStyle(style = {}) {
   if (!style) {
    return {
      container: {
        classes: [],
      }
    };
  }
  if (style.container && style.container.classes) {
    return concatCssClasses(containerClasses);
  }
  return null;
}