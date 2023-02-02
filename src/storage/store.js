import { rootReducer } from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
