import { combineReducers } from "redux"; // first pakcge imoprt
import  exampleReducer,{ loginReducer ,sagaLoginReducer}  from "./exampleReducer";
import { reducer as formReducer } from 'redux-form';


const rootReducer= combineReducers({

    example: exampleReducer,
    login:loginReducer,
    sagaloginNew:sagaLoginReducer,
    form: formReducer,
});

export default rootReducer;
