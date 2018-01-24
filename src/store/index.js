import { createStore, combineReducers, applyMiddleware } from 'redux';
import inputs from './reducers';
import stateData from '../data/state.json';

const storeFactory = () =>
  applyMiddleware()(createStore)(
    combineReducers({ inputs }),
    stateData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default storeFactory;
