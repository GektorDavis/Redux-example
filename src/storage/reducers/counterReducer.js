import { CHANGE_VIEW, DECREASE, INCREMENT } from '../types';

const initialState = {
  value: 0,
  show: true,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREASE:
      return { ...state, value: state.value - action.payload };
    case CHANGE_VIEW:
      return { ...state, show: !state.show };
    default:
      return state;
  }
}

export default counterReducer;
