import React from "react";
import { Login } from "./login";

import { Provider } from "react-redux";
import store from "../../redux/store";



// provide access to all of the component's attributes and properties as props on the React component
export const LoginWrapper = () => {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    );
};
