import React, { useState } from "react";
import { Box, Heading, Text } from "rebass";


export const Dashboard = () => {
  const [email, setemail] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();
  const BASE_URL = "http://localhost:5000";

  fetch(BASE_URL + "/user-service/user-details")
    .then((response) => response.json())
    .then(function setValues(response) {
      console.log(response);
      setemail(response.email);
      setName(response.name);
      setOrigin(response.origin);
    });

  // export default function Dashboard() {
  return (
    <div>
      <Heading fontFamily="Candara" fontSize={[6]} color="primary">
        Hello! I see you got through the login
      </Heading>

      <Box>
        <Heading fontSize={[3]} color="primary">
          Information
        </Heading>
        <Text fontFamily="Candara" fontWeight="bold" >
          Email address : {email} <br />
          Name : {name}
          <br />
          Origin Port : {origin}
        </Text>
      </Box>
    </div>
  );
};