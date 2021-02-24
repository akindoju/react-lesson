import { createStore } from 'redux';
import rootReducer from './rootReducer';

const middlewares = [];

const store = createStore(rootReducer, ...middlewares);

export default store;
