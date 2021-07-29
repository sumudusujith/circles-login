import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
// import Store from "../../src/store/storeConfiguration/Store";




test("Check if initial values and components are loaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});