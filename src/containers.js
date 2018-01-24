import { connect } from 'react-redux';
import {
  SurName,
  Name,
  MidName,
  RegAddress,
  Employer,
  Send,
  Phone,
  Sex,
  Email,
  BirthDate,
} from './components';

import updateInputData from './actions';

const SurNameInput = connect(
  state => ({
    input: state.inputs.surname,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(SurName);

const NameInput = connect(
  state => ({
    input: state.inputs.name,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(Name);

const MidNameInput = connect(
  state => ({
    input: state.inputs.midname,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(MidName);

const RegAddressInput = connect(
  state => ({
    input: state.inputs.reg_address,
    phone: state.inputs.phone,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(RegAddress);

const EmployerInput = connect(
  state => ({
    input: state.inputs.employer,
    phone: state.inputs.phone,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(Employer);

const PhoneInput = connect(
  state => ({
    input: state.inputs.phone,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(Phone);

const EmailInput = connect(
  state => ({
    input: state.inputs.email,
    phone: state.inputs.phone,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(Email);

const BirthDateInput = connect(
  state => ({
    input: state.inputs.date,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(BirthDate);

const SexInput = connect(
  state => ({
    input: state.inputs.sex,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(Sex);

const SendButton = connect(
  state => ({
    inputs: state.inputs,
  }),
  dispatch => ({
    onUpdate(inputType, data) {
      dispatch(updateInputData(inputType, data));
    },
  }),
)(Send);

export {
  SurNameInput,
  NameInput,
  MidNameInput,
  RegAddressInput,
  EmployerInput,
  SendButton,
  PhoneInput,
  SexInput,
  EmailInput,
  BirthDateInput,
};
