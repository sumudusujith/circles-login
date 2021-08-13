import React from "react";
import { routesClass } from "./routesClass";
//  const email = "admin@circles.asia" ;
//   const password = "circles111";
// const fData = { email,password};

  
  export const getData = (email,password) => {
    return fetch(routesClass.user_url + `/user-service/login/${email}/${password}`, {     
       //  POST request using fetch()
      method: 'post', // or 'PUT'
      headers: {// Adding headers to the request
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password})
    
    //password:password// Adding body or contents to send
  }) //servce file
    .then((response) => response.json())// Converting received data to JSON
    .then(function setValues(response) {
      console.log(response);// Displaying results to console
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};










