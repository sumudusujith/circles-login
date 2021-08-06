import { call, put, takeLatest } from 'redux-saga/effects'

import { getData } from "../fetch";
import { sagalogin } from '../redux/actions';




export function* fetchUser({ payload }) {
  try {
    console.log("payload");
    const user = yield call(getData, payload.email, payload.password);
    //console.log('object');
    yield put({ type: "LOGIN_RESPONSE", payload: user });   //check
  } catch (e) {
    yield put({ type: sagalogin, message: e.message });
  }
}
export function* getUserData() { }

export function* mySaga() {
  yield takeLatest("SAGA_LOGIN", fetchUser);
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
