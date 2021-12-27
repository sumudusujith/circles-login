import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./redux/store";
//import history from './history'
//import { createStore, applyMiddleware } from 'redux'

//const action = type => store.dispatch({type})
ReactDOM.render(
  
  <React.StrictMode>

    <Provider store={store}>
      
      {/* <Container></Container> */}
      {/* <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />, */}
      {/* <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      //<loginForm onSubmit={showResults} />
      <Values form="simple" />
    </div> */}

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
