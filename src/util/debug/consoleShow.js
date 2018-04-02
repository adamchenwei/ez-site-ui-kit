

export default function consoleShow(type, data, isDisabled) { //eslint-disable-line
  // const disabled = isDisabled;
  const disabled = true;
  if (disabled) return;
  switch (type) {
    case 'props':
      console.log(`----------------- ${data.componentName}  has PROPS-----------------`); //eslint-disable-line
      console.log(data.props); //eslint-disable-line
      break;
    case 'line':
      console.log(`.................... a line for ${data.name} ............`); //eslint-disable-line
      console.log(data.object); //eslint-disable-line
      break;
    default:
    console.log('==== default log ===='); //eslint-disable-line
    console.log(type); //eslint-disable-line
    console.log(data); //eslint-disable-line
      break;
  }
}
