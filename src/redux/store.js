import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

import { mySaga } from '../sagas/sagas';
import { composeWithDevTools } from "redux-devtools-extension";






const sagaMiddleWare = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleWare);
const composedEnhancers = composeWithDevTools(...[middlewareEnhancer]);  //enable devtools

export default createStore(rootReducer, composedEnhancers);
sagaMiddleWare.run(mySaga);
