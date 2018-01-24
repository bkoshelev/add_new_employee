import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Event from 'material-ui-icons/Event';

const BirthDate = ({ style, input, onUpdate = f => f }) => {
  const onChange = (event, date) => {
    const data = {
      value: date,
    };

    onUpdate('date', data);
  };

  const defaultStyle = {
    textFieldStyle: {
      backgroundColor: '#F0F0F1',
      height: '71px',
      borderRadius: '10px',
      top: '27px',
      icon: <Event />,
    },
    underlineStyle: { display: 'none' },
    hintStyle: {
      ...style.hintStyle,
      paddingLeft: '20px',
      paddingBottom: '15px',
    },
    autoOk: true,
    container: 'inline',
    hideCalendarDate: true,
    fullWidth: true,
    cancelLabel: ' ',
    dialogContainerStyle: {
      borderRadius: '20px',
    },
    inputStyle: {
      paddingLeft: '20px',
      backgroundColor: '#00000000',
    },
  };

  const componentStyle = defaultStyle;

  if (!input.data.isValid) {
    componentStyle.textFieldStyle = {
      ...componentStyle.textFieldStyle,
      borderColor: 'red',
      borderWidth: '1px',
      borderStyle: 'solid',
      top: '30px',
    };
    componentStyle.errorText = 'Поле является обязательным';
    componentStyle.errorStyle = {
      top: '5px',
    };
  }

  const { DateTimeFormat } = global.Intl;

  let $ref;

  const callDateDialog = () => {
    $ref.openDialog();
  };

  const data = {
    ...componentStyle,
    id: 'date_calendar',
    onChange,
    selected: input.data.value,
    hintText: 'Дата рождения',
    locale: 'ru',
    DateTimeFormat,
    formatDate: new DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }).format,
    ref: (ref) => {
      $ref = ref;
    },
  };

  const className = `button_icon ${!input.data.isValid ? 'invalid' : 'simple'}`;

  return (
    <div>
      <DatePicker {...data} />
      <Event className={className} onClick={callDateDialog} />
    </div>
  );
};

export default BirthDate;
