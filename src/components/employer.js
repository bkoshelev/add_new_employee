import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import renderHTML from 'react-render-html';
import React from 'react';
import getDataSource from './../utils';

const Employer = ({
  style, input, phone, onUpdate = f => f,
}) => {
  const onChange = async (searchText) => {
    const searchData = await getDataSource(searchText, 'employer');

    const newdataSourсe = searchData.map(item => ({
      value: item.value,
      address: item.data.address.value,
    }));

    const data = await {
      value: searchText,
      dataSource: newdataSourсe,
    };
    onUpdate('employer', data);
  };

  const defaultStyle = {
    inputStyle: {
      ...style.inputStyle,
    },
    menuStyle: {
      width: '400',
    },
    listStyle: {
      width: '400',
    },
    style: {
      ...style.style,
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

  const generateDataSourceValue = (item) => {
    const { length } = input.data.value;
    const pos = item.value.indexOf(input.data.value);
    const part1 = item.value.substring(0, pos);
    const part2 = item.value.substring(pos, pos + length);
    const part3 = item.value.substring(pos + length);
    return (
      <MenuItem
        width={'300px'}
        primaryText={renderHTML(`<font color='black'>${part1}<font color='green'>${part2}</font>${part3}</font>`)}
        secondaryText={renderHTML(`<font color="#a6a6a6" size=1>${item.address}</font>`)}
      />
    );
  };

  const data = {
    ...componentStyle,
    id: 'auto_employ',
    hintText: 'Название работодателя',
    floatingLabelText: 'Название работодателя',
    dataSource: input.data.dataSource.map(item => ({
      text: item.value,
      value: generateDataSourceValue(item),
    })),

    value: input.data.value,
    onUpdateInput: onChange,
  };

  return <AutoComplete {...data} />;
};

export default Employer;
