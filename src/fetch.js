import { routesClass } from "./routesClass";

const axios = require("axios");

export const getData = (email, password) => {
  return axios
    .post(routesClass.user_url + "/user-service/login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};





// import { routesClass } from "./routesClass";

// const axios = require("axios");

// export const getData = (email, password) => {
//   return axios
//     .get(routesClass.BASE_URL + `/user-service/login/${email}/${password}`)
//     .then(function (response) {
//       console.log(response);
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const getDataUserData = () => {
//   return axios
//     .get(routesClass.BASE_URL + "/user-service/user-details")
//     .then(function (response) {
//       console.log("EMAIL", response.email);

//       let userObj = {
//         email: response.email,
//         name: response.name,
//         origin: response.origin,
//       };

//       return userObj;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };



// import React from "react";
// import { routesClass } from "./routesClass";

// //const [responseMessage, setResponseMessage] = useState("");

  
//  export const getData = (email,password) => {
     
//     //const history = useHistory();
// //debugger

//   return fetch(routesClass.user_url + `/user-service/login/${email}/${password}`, {
//     method: 'post', // or 'PUT'
//     // headers: {
//     //   'Content-Type': 'application/json',
//     // },
//   //  body: JSON.stringify(),
//   }) //servce file
//       .then((response) => response.json())
//       .then(function setValues(response) {
          
//         //  if (response.token === "A_guid") {
//               console.log(response);
//               return response;
//               //props.up
//         //       history.push("/dashboard");
//         //  // } else {
//         //       console.log(response);
//         //      // setResponseMessage(routesClass.errorMessage);
//         //   }
//       });

  
// };
// export const getFormData = (email,password,firstName,lastName) => {
     
//   //const history = useHistory();
// //debugger

// return fetch(routesClass.user_url + `/user-service/user-details/${email}/${password}`) //servce file
//     .then((response) => response.json())
//     .then(function setValues(response) {
        
//       //  if (response.token === "A_guid") {
//             console.log(response);
//             return response;
//             //props.up
//       //       history.push("/dashboard");
//       //  // } else {
//       //       console.log(response);
//       //      // setResponseMessage(routesClass.errorMessage);
//       //   }
//     });


// };
//export default getData;
