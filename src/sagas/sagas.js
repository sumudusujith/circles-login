import { call, put, takeLatest } from 'redux-saga/effects'

import { getData, configFetchData } from "../fetch";
import { sagalogin, formDashboardAction ,getconfigAction} from '../redux/actions';
import { SAGA_LOGIN, CDD_RESPONSE, CDD_VALUES, FORM_RESPONSE, FORM_LOGIN } from '../redux/actions/actionTypes';

export function* cddSaga({payload}) {
  //debugger
  try {
    const configData = yield call(configFetchData,payload.login_Header,payload.login_SubHeader);
    yield put({ type:CDD_RESPONSE, payload: configData });
    
  } catch (e) {
  //  yield put({ type: getconfigAction, message: e.message });//saga will not continue to run to the next yield until the API call finishes
   // console.log('Not Working ',e.massege);
  }
}

export function* fetchUser({ payload, callbackFn }) {
  try {

    const response = yield call(getData, payload.email, payload.password);
    //debugger
    yield put({ type: FORM_RESPONSE, payload: response });

    callbackFn();
    //console.log('object');
    //check
  } catch (e) {
    yield put({ type: formDashboardAction, message: e.message });
    console.log('Error_invalid input ', e.massege);//error
  }
}



export function* mySaga() {
  yield takeLatest(FORM_LOGIN, fetchUser);
  yield takeLatest(CDD_VALUES, cddSaga);
}











//import {SAGA_LOGIN, LOGIN_RESPONSE} from "../redux/actions/actionTypes"
// worker Saga: will be fired on USER_FETCH_REQUESTED actions


// function* fetchUser({email, password}) {
//     const options = {
//       email: email,
//       password: password
//     };
//    try {
//       const user = yield call(Api.fetchUser, options);
//       yield put("LOGIN"(payload));
//      // yield put({type: "LOGIN", user: user});
//    } catch (e) {
//     yield put("LOGIN"(error));
//      // yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }


// function* mySaga() {
//     yield takeLatest("SAGA_LOGIN", fetchUser);
// }

// export default mySaga;


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//    try {
//       const user = yield call(Api.fetchUser, action.payload.email,password);
//       yield put({type: "LOGIN", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("LOGIN", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("LOGIN", fetchUser);
// }
// import { put, takeEvery } from 'redux-saga/effects'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// // ...

// // Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }
