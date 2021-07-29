import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex } from "rebass";
import { routesClass } from "../../routesClass";

export const Dashboard = () => {
  const [emailaddress, setEmailAddress1] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();

  // const user = "http://localhost:5000";

  useEffect(() => {
    fetch(routesClass.user_url + "/user-service/user-details")
      .then((response) => response.json())
      .then(function setValues(response) {
        console.log(response);
        setEmailAddress1(response.emailaddress);
        setName(response.name);
        setOrigin(response.origin);
      });
  }, []);

  return (
    <Flex
      backgroundColor='#282c34'
      height='100vh'
      alignItems='center'
      pt='2rem'
      flexDirection='column'
    >
      <Heading
        fontFamily='Candara'
        color='#fff'
        fontSize='3rem'
        mb='2rem'
      >
        Hello! I see you got through the login
      </Heading>
      <Box m={[2, 3, 4]}>


        <Box
          sx={{
            px: 7,
            py: 5,
            backgroundColor: "white",
            backgroundSize: 'cover',
            border: '5px solid', borderColor: "darkblue",
            borderRadius: 8,
            color: 'black',
            bg: 'white',
          }}
        // bg="#E8E8E8"
        // mt={[2, 3, 4]}
        // mb={[2, 3, 4]}
        // p={[2, 3, 4]}
        // sx={{ border: '5px solid', borderColor: "darkblue", borderRadius: 8, }}
        >
          <Heading
            fontFamily="Verdana"
            alignItems='center'
            mt={[2, 3, 4]}
            mb={[2, 3, 4]}
            fontSize={[2]}
            color="primary"
          >
            Information
          </Heading>
          <Text fontSize={[2]} fontWeight="bold" fontFamily="Arial">
            Email address : {emailaddress} <br />
            Name : {name}
            <br />
            Origin Port : {origin}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};