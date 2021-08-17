import { INCREMENT_ACTION, DECREMENT_ACTION, USER_LOGIN_ACTION, FORM_RESPONSE_DATA_ACTION, CDD_RESPONSE, SAGA_LOGIN_ACTION, FORM_LOGIN_DATA_ACTION, LOGIN_RESPONSE_ACTION, CONFIG_SETTINGS_ACTION, CONFIG_RESPONSE_ACTION } from "../actions/actionTypes";

const initialState = {
    total: 0,
    name: "Total",

}

const initialUser = {
    email: null,
    password: null
}
const sagaUser = {
    email: null,
    password: null
};

const formUser = {
    email: null,
    password: null

};

const configUser = {
    login_Header: null,
    login_SubHeader: null,
    dashboard_Header: null,
    dashboard_SubHeader: null,
};

export function configValuesReducer(state = configUser, action) {
    switch (action.type) {
        case CONFIG_SETTINGS_ACTION:
            return {
                ...state,
                login_Header: action.payload.login_Header,
                login_SubHeader: action.payload.login_SubHeader,
                dashboard_Header: action.payload.dashboard_Header,
                dashboard_SubHeader: action.payload.dashboard_SubHeader,
            };
        case CONFIG_RESPONSE_ACTION:
            return {
                ...state,
                configResponse: action.payload,
            };
        default:
            return state;
    }
}

export default function exampleReducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT_ACTION:

            return {
                ...state,
                total: state.total + action.payload,
            };

        case DECREMENT_ACTION:

            return {
                ...state,
                total: state.total - action.payload,
            };
        default: return state;
    }
}

export function loginReducer(state = initialUser, action) {

    switch (action.type) {
        case USER_LOGIN_ACTION:
            return {

                ...state,
                email: action.payload.email,
                password: action.payload.password

            }
        default:
            return state;
    }
}

export function sagaLoginReducer(state = sagaUser, action) {

    switch (action.type) {
        case SAGA_LOGIN_ACTION:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case LOGIN_RESPONSE_ACTION:
            return {
                ...state,

            };
        default:
            return state;
    }
}

export function form_DashboardReducer(state = formUser, action) {
    switch (action.type) {
        case FORM_LOGIN_DATA_ACTION:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case FORM_RESPONSE_DATA_ACTION:
            return {
                ...state,

                loginResponse: action.payload,
            };
        default:
            return state;
    }
}
