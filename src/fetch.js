import { user_url } from "./routesClass";

export const getData = (email, password) => {
  return fetch(user_url + `/user-service/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => {
      if (response.status >= 200 && response.status <= 300) {
        response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(function setValues(response) {
      console.log(response);
      return response;
    })
};

export const configFetchData = () => {
  return fetch(user_url + "/app-settings")
    .then((response) => {
      if (response.status >= 200 && response.status <= 300) {
        return response.json()
      }
      else {
        console.log(response.status)
        window.location.href = "http://localhost:3000/NotFoundPage";
      }
    })
    .then(function (response) {
      console.log("Initial values : ", response);
      let configObj = {
        login_Header: response.login?.login_Header,
        login_SubHeader: response.login?.login_SubHeader,
        dashboard_Header: response.dashboard?.dashboard_Header,
        isLoading: response.login?.isLoading,
      };
      console.log("VALUES", configObj);
      return configObj;
    })
    .catch((error) => {
      console.log(error.response.status);
      return;
    });
};

