import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Send = ({ style, inputs, onUpdate = f => f }) => {
  const inputsType = ['surname', 'name', 'date', 'phone'];

  const ValidateForm = async () => {
    const isFormValid = await inputsType.reduce((acc, key) => {
      const isValid = Boolean(inputs[key].data.value);
      onUpdate(key, { isValid });
      return acc && isValid;
    }, true);

    if (isFormValid) {
      alert('Форма валидна, отправляется запрос');
    }
  };

  const defaultStyle = {
    id: 'send_button',
    className: 'form_button',
    labelPosition: 'after',
    backgroundColor: '#6EB877',
    labelColor: '#ffffff',
    buttonStyle: {
      height: '65px',

      borderRadius: '5px',
    },
    labelStyle: {
      fontSize: '20px',
    },
    fullWidth: true,
  };

  const componentStyle = style ? { ...style, ...defaultStyle } : defaultStyle;

  const data = {
    ...componentStyle,
    label: 'Сохранить',
    onClick: ValidateForm,
  };

  return <RaisedButton {...data} />;
};

export default Send;
