// import React, { Component } from 'react'; import PropTypes from 'prop-types';
// import ComponentWrapper from './../ComponentWrapper/index';

// import setComponentWrapperContainerClasses from './../../util/setup/setComponentWrapperContainerClasses';
// import setComponentWrapperStyle from './../../util/setup/s';

// export default class FormInput extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const {
//       content,
//       style,
//       type,
//       name,
//     } = this.props;
//     const COMPONENT_NAME = 'FormInput';
//     const inlineStyle = setComponentWrapperStyle(style);
//     const containerLevelStyle = setComponentWrapperContainerClasses(COMPONENT_NAME);
//     return (
//       <ComponentWrapper
//         containerLevelClass={containerLevelStyle}
//         style={inlineStyle}
//       >
//         <input type="text" name="name" />
//       </ComponentWrapper>
//     );
//   }
// }

// FormInput.propTypes = {
//   content: PropTypes.object,
//   style: PropTypes.object,
//   type: PropTypes.string,
//   name: PropTypes.string,
// };
