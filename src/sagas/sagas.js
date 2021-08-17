import { call, put, takeLatest } from 'redux-saga/effects'

import { getData, configFetchData } from "../fetch";
import { formDashboardAction } from '../redux/actions';
import { CONFIG_RESPONSE_ACTION, CONFIG_SETTINGS_ACTION, FORM_RESPONSE_DATA_ACTION, FORM_LOGIN_DATA_ACTION } from '../redux/actions/actionTypes';

export function* cddSaga({ payload }) {
  try {
    const configData = yield call(configFetchData, payload.login_Header, payload.login_SubHeader,payload.dashboard_Header,payload.dashboard_SubHeader);
    yield put({ type: CONFIG_RESPONSE_ACTION, payload: configData });
  } catch (e) {
  }
}

export function* fetchUser({ payload, callbackFn }) {
  try {
    const response = yield call(getData, payload.email, payload.password);
    yield put({ type: FORM_RESPONSE_DATA_ACTION, payload: response });
    callbackFn();
  } catch (e) {
    yield put({ type: formDashboardAction, message: e.message });
    console.log('Error_invalid input ', e.massege);//error
  }
}

export function* mySaga() {
  yield takeLatest(FORM_LOGIN_DATA_ACTION, fetchUser);
  yield takeLatest(CONFIG_SETTINGS_ACTION, cddSaga);
}








