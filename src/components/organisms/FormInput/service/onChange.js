import ezlogger from '../../../../util/debug/ezlogger';

export default function onChange(event, config = {
  isState: true,
  callback: null,
}) {
  const {
    isState,
    callback,
  } = config;
  const { name, value, type } = event.target;
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
      if (isState) {
        this.setState(prevState => (
          {
            ...prevState,
            [name]: `${value}`,
          }
        ));
      } else {
        callback(event);
      }


      break;
    default:
      ezlogger(`
        EXCEPTION FOR INPUT!
      `);
      ezlogger(`
        name: ${name}
        value: ${value}
        type: ${type}
      `);
      if (isState) {
        this.setState(prevState => (
          {
            ...prevState,
          }
        ));
      } else {
        callback(event);
      }
  }
}
