
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

import { mySaga } from '../sagas/sagas';
import { composeWithDevTools } from "redux-devtools-extension";

//import { mySaga}  from '../sagas';
//import mySaga from '../sagas/sagas';
//import rootReducer from './reducers';




 
  const sagaMiddleWare = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleWare);
  const composedEnhancers = composeWithDevTools(...[middlewareEnhancer]);  //enable devtools

  export default createStore(rootReducer,composedEnhancers);
  sagaMiddleWare.run(mySaga);

//export default configureStore;







// //import { createStore,  } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import { createStore ,applyMiddleware} from "redux";
// import rootReducer from "./reducers";
// import { mySaga } from '../sagas';
//   //import{ mySaga} from '../sagas/sagas';


//   const sagMiddleWare = createSagaMiddleware();

//   export default createStore(rootReducer, applyMiddleware(sagMiddleWare));
//   sagMiddleWare.run(mySaga);



// export default createStore(rootReducer);
// //export default configureStore;


// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "./reducers";

// import { mySaga } from "./sagas";

// const sagMiddleWare = createSagaMiddleware();

// export default createStore(rootReducer, applyMiddleware(sagMiddleWare));
// sagMiddleWare.run(mySaga);