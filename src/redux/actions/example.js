import { INCREMENT, DECREMENT, LOGIN, SAGA_LOGIN } from "./actionTypes"
//actions
export function incrementBy(payload) {
    return { type: INCREMENT, payload }
}

export function decrementBy(payload) {
    return { type: DECREMENT, payload }
}

export function login(email, password) {
    return {
        type: LOGIN,
        payload: {
            email,
            password
        }
    }
}

export function sagalogin(email, password, callbackFn) {
    return {
        type: SAGA_LOGIN,
        payload: {
            email,
            password
        },
        callbackFn,
        // same as callbackFn:callbackFn
    };
}

