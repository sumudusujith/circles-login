import { INCREMENT_ACTION, DECREMENT_ACTION, USER_LOGIN_ACTION,SAGA_LOGIN_ACTION,FORM_LOGIN_DATA_ACTION, CONFIG_SETTINGS_ACTION } from "./actionTypes"
//actions
export function incrementBy(payload) {
    return { type: INCREMENT_ACTION, payload }
}

export function decrementBy(payload) {
    return { type:  DECREMENT_ACTION, payload }
}

export function login(email, password) {
    return {
        type: USER_LOGIN_ACTION,
        payload: {
            email,
            password
        }
    }
}

export function sagalogin(email, password, callbackFn) {
    return {
        type: SAGA_LOGIN_ACTION,
        payload: {
            email,
            password
        },
        callbackFn,
        // same as callbackFn:callbackFn
    };
}
export function formDashboardAction(email, password, callbackFn) {
    return {
        type: FORM_LOGIN_DATA_ACTION,
        payload: {
            email,
            password
        },
        callbackFn,
    };
}

export function getconfigAction(login_Header, login_SubHeader) {
    return {
        type: CONFIG_SETTINGS_ACTION,
        payload: {
            login_Header,
            login_SubHeader
        }
    };
}















