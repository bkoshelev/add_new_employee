import C from './constants';

const updateInputData = (inputType, data) => ({
  type: C.UPDATE_INPUT_DATA,
  inputType,
  data,
});

export default updateInputData;
