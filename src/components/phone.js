import React from 'react';
import TextField from 'material-ui/TextField';
import InputMask from 'react-input-mask';

const Phone = ({ style, input, onUpdate = f => f }) => {
  const onChange = (event, newValue) => {
    const data = {
      value: newValue,
    };

    onUpdate('phone', data);
  };

  const defaultStyle = {
    inputStyle: {
      ...style.inputStyle,
    },
    fullWidth: true,
    floatingLabelFixed: false,
    floatingLabelStyle: {
      paddingLeft: '20px',
    },
    style: {
      borderRadius: '10px',
    },
  };

  const componentStyle = style ? { ...style, ...defaultStyle } : defaultStyle;

  if (!input.data.isValid) {
    componentStyle.style = {
      ...componentStyle.style,
      borderColor: 'red',
      borderWidth: '1px',
      borderStyle: 'solid',

      marginTop: '15px',
    };
    componentStyle.errorText = 'Поле является обязательным';
    componentStyle.errorStyle = {
      top: '5px',
    };
    componentStyle.inputStyle = {
      ...componentStyle.inputStyle,

      marginTop: '0px',
    };
    componentStyle.floatingLabelStyle = {
      ...componentStyle.floatingLabelStyle,
      top: '25px',
    };
  }

  if (input.data.value) {
    componentStyle.floatingLabelFixed = true;
  }

  const data = {
    ...componentStyle,
    name: 'text_phone',
    hintText: 'Мобильный телефон',
    floatingLabelText: 'Мобильный телефон',
    id: 'text_phone',
    value: input.data.value,
    defaultValue: '+7(   )    -  -  ',
    onChange,
  };

  return (
    <TextField {...data}>
      <InputMask mask="+7(999) 999-99-99" maskChar=" " />
    </TextField>
  );
};

export default Phone;
