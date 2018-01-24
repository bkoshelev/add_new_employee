import React from 'react';
import TextField from 'material-ui/TextField';

const Email = ({
  style, input, phone, onUpdate = f => f,
}) => {
  const onChange = (event, newValue) => {
    const data = {
      value: newValue,
    };

    onUpdate('email', data);
  };

  const defaultStyle = {
    inputStyle: {
      ...style.inputStyle,
    },
    fullWidth: true,
  };

  const componentStyle = style ? { ...style, ...defaultStyle } : defaultStyle;

  if (!phone.data.isValid) {
    componentStyle.inputStyle = {
      ...componentStyle.inputStyle,
      marginTop: '0px',
    };

    componentStyle.floatingLabelStyle = {
      ...componentStyle.floatingLabelStyle,
      top: '25px',
    };
  }

  const data = {
    ...componentStyle,
    name: 'text_email',
    hintText: 'Email (необязательно)',
    floatingLabelText: 'Email (необязательно)',
    id: 'text_email',
    value: input.data.value,
    onChange,
  };

  return <TextField {...data} />;
};

export default Email;
