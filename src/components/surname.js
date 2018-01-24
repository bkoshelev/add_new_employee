import AutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';
import React from 'react';
import getDataSource from './../utils';

const SurName = ({ style, input, onUpdate = f => f }) => {
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
    const searchData = await getDataSource(searchText, 'surname');

    const newdataSourсe = searchData.map(item => item.value);

    const data = {
      value: searchText,
      dataSource: newdataSourсe,
    };
    onUpdate('surname', data);
  };

  const data = {
    ...componentStyle,
    id: 'text_surname',
    dataSource: input.data.dataSource,
    hintText: 'Фамилия',
    floatingLabelText: 'Фамилия',
    onUpdateInput: onChange,
    value: input.data.value,
  };

  return <AutoComplete {...data} />;
};

SurName.propTypes = {
  style: PropTypes.object,
  input: PropTypes.object,
  onUpdate: PropTypes.func,
};

export default SurName;
