import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  SurNameInput,
  NameInput,
  MidNameInput,
  RegAddressInput,
  EmployerInput,
  PhoneInput,
  SexInput,
  EmailInput,
  BirthDateInput,
  SendButton,
} from '../../containers';

import './index.css';

export default class Form extends React.Component {
  componentTypeStyles = {
    common: {
      floatingLabelFixed: false,
      underlineShow: false,
      floatingLabelFocusStyle: {
        color: '#a3d2a9',
      },
      floatingLabelStyle: {
        paddingLeft: '20px',
        paddingBottom: '10px',
      },
      hintStyle: {
        color: '#929292',
      },
      inputStyle: {
        backgroundColor: '#F0F0F1',
        borderRadius: '10px',
        paddingLeft: '20px',
      },
      floatinglabel: {
        color: '#a3d2a9',
      },
    },
  };

  muiTheme = getMuiTheme({
    datePicker: {
      color: '#B3B3B3',
      selectColor: '#97CC9D',
      pickerHeaderColor: '#97CC9D',
      headerColor: '#B3B3B3',
    },
  });

  render() {
    const style = this.componentTypeStyles.common;
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div className="form">
          <div id={'surname'}>
            <SurNameInput style={style} />
          </div>
          <div id={'name'}>
            <NameInput style={style} />
          </div>
          <div id={'midname'}>
            <MidNameInput style={style} />
          </div>
          <div id={'sex'}>
            <SexInput style={style} />
          </div>
          <div id={'date'}>
            <BirthDateInput style={style} />
          </div>
          <div id={'phone'}>
            <PhoneInput style={style} />
          </div>
          <div id={'email'}>
            <EmailInput style={style} />
          </div>
          <div id={'reg_address'}>
            <RegAddressInput style={style} />
          </div>
          <div id={'employer'}>
            <EmployerInput style={style} />
          </div>
          <div id={'send'}>
            <SendButton />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
