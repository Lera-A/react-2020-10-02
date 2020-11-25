import { applyMiddleware, createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extention'
import logger from './middleware/logger';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(logger));

export default store;
