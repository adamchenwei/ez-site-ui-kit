import capToCamelCase from './../transform/capToCamelCase';

module.exports = function setComponentWrapperContainerClasses(componentName = '') {
  return capToCamelCase(componentName) || componentName || '';
};
