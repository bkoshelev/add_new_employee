import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getDataSource from './../utils';

const MidName = ({ style, input, onUpdate = f => f }) => {
  const onChange = async (searchText) => {
    const searchData = await getDataSource(searchText, 'midname');

    const newdataSourсe = searchData.map(item => item.value);
    const data = await {
      value: searchText,
      dataSource: newdataSourсe,
    };
    onUpdate('midname', data);
  };

  const defaultStyle = {
    inputStyle: {
      ...style.inputStyle,
    },
    fullWidth: true,
  };

  const componentStyle = style ? { ...style, ...defaultStyle } : defaultStyle;

  const data = {
    ...componentStyle,
    id: 'text_midname',
    hintText: 'Отчество',
    floatingLabelText: 'Отчество',
    dataSource: input.data.dataSource,
    value: input.data.value,
    onUpdateInput: onChange,
  };

  return <AutoComplete {...data} />;
};

export default MidName;
