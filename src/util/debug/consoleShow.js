/* eslint-disable */
export default function consoleShow(type, data, isDisabled) {
  if (type && !data && !isDisabled) {
    const dataInstead = type;
    console.log(dataInstead);
  }
  // const disabled = isDisabled;
  const disabled = true;
  if (disabled) return;
  switch (type) {
    case 'props':
      console.log(`----------------- ${data.componentName}  has PROPS-----------------`); 
      console.log(data.props); 
      break;
    case 'line':
      console.log(`.................... a line for ${data.name} ............`); 
      console.log(data.object); 
      break;
    default:
    console.log('==== default log ===='); 
    console.log(type); 
    console.log(data); 
      break;
  }
}
/* eslint-enable */
