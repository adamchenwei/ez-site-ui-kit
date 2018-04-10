const INPUTS = [
  {
    name: 'transactionId',
    type: 'text',
    value: 'ABC123',
    erros: [],
    isRequired: true,
    field: 'id',
  },//... check the screenshot for detail info
]

export INPUTS;

onInputChange(event, customFormName) {
  const {
    updateField,
  } = this.props;

  let field = null;
  let value = null;

  if (customFormName) {
    field = customFormName;
    value = event ? event.value : get(this.defaultInputs, `[${customFormName}].value`);
  } else {
    field = event.target.name;
    const checkedValue = event.target.checked;
    const newValue = event.target.value;
    value = newValue;
    if (value === 'on') {
      value = checkedValue;
    }
  }

  updateField(field, value);
}


npm install --save braintree-web-drop-in-react
https://github.com/Cretezy/braintree-web-drop-in-react

npm install --save react-table
https://github.com/react-tools/react-table


