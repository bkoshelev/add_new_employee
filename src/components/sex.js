import React from 'react';

import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Sex = ({ style, input, onUpdate = f => f }) => {
  const onChange = (event, key) => {
    const data = {
      value: key,
    };

    onUpdate('sex', data);
  };

  const defaultStyle = {
    selectedMenuItemStyle: {
      backgroundColor: '#97CC9D',
      color: '#ffffff',
    },
    dropDownMenuProps: {
      iconButton: (
        <FontIcon id="up_down_icon" className="material-icons" color="#B1B1B1">
          code
        </FontIcon>
      ),
    },
    menuItemStyle: {
      backgroundColor: '#ffffff',
      color: 'black',
    },
    floatingLabelStyle: {
      color: '#97CC9D',
      paddingLeft: '20px',
    },
    inputStyle: {
      ...style.inputStyle,
    },
    fullWidth: true,
  };

  const componentStyle = style ? { ...style, ...defaultStyle } : defaultStyle;

  const data = {
    ...componentStyle,
    id: 'select_sex',
    value: input.data.value,
    floatingLabelText: 'Пол',
    onChange,
  };

  return (
    <SelectField {...data}>
      <MenuItem value={0} primaryText="Мужской" />
      <MenuItem value={1} primaryText="Женский" />
    </SelectField>
  );
};

export default Sex;
