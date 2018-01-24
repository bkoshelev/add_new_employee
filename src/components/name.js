import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getDataSource from './../utils';

const Name = ({ style, input, onUpdate = f => f }) => {
  const defaultStyle = {
    inputStyle: {
      ...style.inputStyle,
    },
    fullWidth: true,
  };

  const componentStyle = style ? { ...style, ...defaultStyle } : defaultStyle;

  if (!input.data.isValid) {
    componentStyle.textFieldStyle = {
      ...componentStyle.textFieldStyle,
      borderColor: 'red',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '10px',
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

  const onChange = async (searchText) => {
    const searchData = await getDataSource(searchText, 'name');

    const newdataSourсe = searchData.map(item => item.value);

    const data = await {
      value: searchText,
      dataSource: newdataSourсe,
    };
    onUpdate('name', data);
  };

  const data = {
    ...componentStyle,
    value: input.data.value,
    id: 'text_name',
    dataSource: input.data.dataSource,
    hintText: 'Имя',
    floatingLabelText: 'Имя',
    onUpdateInput: onChange,
  };

  return <AutoComplete {...data} />;
};

export default Name;
