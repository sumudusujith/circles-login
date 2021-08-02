import React from "react";
import { routesClass } from "./routesClass";

//const [responseMessage, setResponseMessage] = useState("");

  
 const getData = (email,password) => {
     
    //const history = useHistory();
debugger

  return fetch(routesClass.user_url + `/user-service/login/${email}/${password}`) //servce file
      .then((response) => response.json())
      .then(function setValues(response) {
          
        //  if (response.token === "A_guid") {
              console.log(response);
              return response.status;
              //props.up
        //       history.push("/dashboard");
        //  // } else {
        //       console.log(response);
        //      // setResponseMessage(routesClass.errorMessage);
        //   }
      });

  
};
export default getData;
