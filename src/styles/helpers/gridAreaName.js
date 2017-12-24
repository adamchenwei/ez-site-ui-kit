//import css from 'styled-components'

module.exports = function(componentName, gridAreaId) {
  return componentName || gridAreaId ?`
    grid-area: ${componentName ? `${componentName}` : 'component-container'}${componentName && gridAreaId ? '-' : ''}${gridAreaId ? `${gridAreaId}` : ''};
  ` : '';
}
