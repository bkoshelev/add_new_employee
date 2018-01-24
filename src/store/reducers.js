import C from '../constants';

const input = (state = {}, action) => {
  switch (action.type) {
    case C.UPDATE_INPUT_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
      };
    default:
      return state;
  }
};

const inputs = (state = {}, action) => {
  switch (action.type) {
    case C.UPDATE_INPUT_DATA: {
      const type = action.inputType;

      return {
        ...state,
        [type]: input(state[type], action),
      };
    }
    default:
      return state;
  }
};

export default inputs;
