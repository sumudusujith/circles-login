import { INCREMENT, DECREMENT, LOGIN, FORM_RESPONSE, CDD_RESPONSE, SAGA_LOGIN, FORM_LOGIN, LOGIN_RESPONSE, CDD_VALUES } from "../actions/actionTypes";

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

export function cddValuesReducer(state = configUser, action) {
    switch (action.type) {
        case CDD_VALUES:
            return {
                ...state,
                login_Header: action.payload.login_Header,
                login_SubHeader: action.payload.login_SubHeader,
                dashboard_Header: action.payload.dashboard_Header,
                dashboard_SubHeader: action.payload.dashboard_SubHeader,
            };
        case CDD_RESPONSE:
            return {
                ...state,
                cddResponse: action.payload,
            };
        default:
            return state;
    }
}

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

// export function formReducer (state=formUser ,action){
//     switch (action.type) {
//         case FORM_LOGIN:
//             return {

//                 ...state,
//                 firstName: action.payload.firstName,
//                 lastName: action.payload.lastName,
//                 email: action.payload.email,


//             }
//         default:
//             return state;
//     }

// }


export function sagaLoginReducer(state = sagaUser, action) {

    switch (action.type) {
        case SAGA_LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case LOGIN_RESPONSE:
            return {
                ...state,
                //email: action.payload.email,
                // password: action.payload.password,
                // loginResponse: action.payload,

            };
        default:
            return state;
    }
}
export function form_DashboardReducer(state = formUser, action) {
    switch (action.type) {
        case FORM_LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        case FORM_RESPONSE:
            return {
                ...state,
                // email: action.payload.email,
                // password: action.payload.password,
                loginResponse: action.payload,
            };
        default:
            return state;
    }
}
