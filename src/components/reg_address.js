import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getDataSource from './../utils';

const RegAddress = ({
  style, input, phone, onUpdate = f => f,
}) => {
  const onChange = async (searchText) => {
    const searchData = await getDataSource(searchText, 'address');

    const newdataSourсe = searchData.map(item => item.value);

    const data = await {
      value: searchText,
      dataSource: newdataSourсe,
    };
    onUpdate('reg_address', data);
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
    id: 'auto_address',
    hintText: 'Адрес постоянной регистрации',
    floatingLabelText: 'Адрес постоянной регистрации',
    dataSource: input.data.dataSource,
    value: input.data.value,
    onUpdateInput: onChange,
  };

  return <AutoComplete {...data} />;
};

export default RegAddress;
