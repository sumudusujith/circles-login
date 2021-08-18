import React from "react";
import { user_url } from "./routesClass";



export const getData = (email, password) => {
  return fetch(user_url + `/user-service/login`, {
    //  POST request using fetch()
    method: 'post', // or 'PUT'
    headers: {// Adding headers to the request
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })

    // Adding body or contents to send
  }) //servce file
    .then((response) => {
      if (response.status >= 200 && response.status <= 300) {
        response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(function setValues(response) {
      console.log(response);// Displaying results to console
      return response;
    })
  // .catch(function (error) {
  //   debugger
  //   console.log(error);
  // });
};
export const configFetchData = () => {
  return fetch(user_url + "/app-settings")
    .then((response) => response.json())
    .then(function (response) {
      console.log("Initial values : ", response);
      //console.log(response);
      let configObj = {
        login_Header: response.login?.login_Header,
        login_SubHeader: response.login?.login_SubHeader,
        dashboard_Header: response.dashboard?.dashboard_Header,
      };
      console.log("VALUES", configObj);
      return configObj;


    })
    .catch(function (error) {
      console.log(error);
      return {
        login_Header: "",
        login_SubHeader: "",
        dashboard_Header: "",
      };
    });
};


