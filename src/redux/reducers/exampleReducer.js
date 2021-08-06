import { INCREMENT, DECREMENT, LOGIN, SAGA_LOGIN } from "../actions/actionTypes";

const initialState = {
    total: 0,
    name: "Total",
    //total: result
}

const initialUser = {
    email: null,
    password: null //comma q
}
const sagaUser = {
    email: null,
    password: null
};

export default function exampleReducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:

            return {
                ...state,
                total: state.total + action.payload,
            };

        case DECREMENT:

            return {
                ...state,
                total: state.total - action.payload,
            };
        default: return state;
    }
}

export function loginReducer(state = initialUser, action) {

    switch (action.type) {
        case LOGIN:
            return {

                ...state,
                email: action.payload.email,
                password: action.payload.password

            }
        default:
            return state;
    }
}

export function sagaLoginReducer(state =sagaUser, action) {

    switch (action.type) {
        case SAGA_LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,

            }; //semi colon q
        case "LOGIN_RESPONSE": //double quotes
            return {
                ...state,
                //email: action.payload.email,
                //password: action.payload.password,
                loginResponse: action.payload,

            };
        default:
            return state;
    }
}
