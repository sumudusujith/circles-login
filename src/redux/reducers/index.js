import { combineReducers } from "redux"; // first pakcge imoprt
import  exampleReducer,{ loginReducer ,sagaLoginReducer,form_DashboardReducer}  from "./exampleReducer";
import { reducer as formReducer } from 'redux-form';


const rootReducer= combineReducers({

    example: exampleReducer,
    login:loginReducer,
    sagaloginNew:sagaLoginReducer,
    form: formReducer,
    form_DashboardReducer:form_DashboardReducer,
});

export default rootReducer;
