import { INCREMENT, DECREMENT, LOGIN, SAGA_LOGIN, GET_CDD_VALUES, FORM_LOGIN, CDD_VALUES } from "./actionTypes"
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
export function formDashboardAction(email, password, callbackFn) {
    return {
        type: FORM_LOGIN,
        payload: {
            email,
            password
        },
        callbackFn,
    };
}

// export function configAction() {
//     return {
//         type: CDD_VALUES,

//     };
// }
export function getconfigAction(login_Header, login_SubHeader) {
    return {
        type: CDD_VALUES,
        payload: {
            login_Header,
            login_SubHeader
        }
    };
}
















// export function form(firstName, lastName, email) {
//     return {
//         type: FORM_LOGIN,
//         payload: {
//             firstName,
//             lastName,
//             email
//         },

//         // same as callbackFn:callbackFn
//     };
// }

