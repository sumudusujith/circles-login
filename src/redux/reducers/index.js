import { combineReducers } from "redux"; // first pakcge imoprt
import  exampleReducer,{ loginReducer }   from "./exampleReducer";


const rootReducer= combineReducers({

    example: exampleReducer,
    login:loginReducer
});

export default rootReducer;
