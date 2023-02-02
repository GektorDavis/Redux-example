import { CHANGE_VIEW, DECREASE, INCREMENT } from '../types';

export function incrementAction(data) {
  return {
    type: INCREMENT,
    payload: data,
  };
}

export function decreaseAction(data) {
  return {
    type: DECREASE,
    payload: data,
  };
}

export function changeViewAction(data) {
  return {
    type: CHANGE_VIEW,
    payload: data,
  };
}
