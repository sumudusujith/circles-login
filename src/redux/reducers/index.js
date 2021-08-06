import { combineReducers } from "redux"; // first pakcge imoprt
import  exampleReducer,{ loginReducer ,sagaLoginReducer}  from "./exampleReducer";


const rootReducer= combineReducers({

    example: exampleReducer,
    login:loginReducer,
    sagaloginNew:sagaLoginReducer,
});

export default rootReducer;
