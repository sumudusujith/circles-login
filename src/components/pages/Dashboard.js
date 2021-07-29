import React, { useState, useEffect } from "react";
import { Box,  Text, Flex } from "rebass";
import { Header1 } from "../../constants/Header/Header1";
import { routesClass } from "../../routesClass";

export const Dashboard = () => {
  const [emailaddress, setEmailAddress1] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();



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
      <Header1
        fontFamily='Candara'
        color='#fff'
        fontSize='3rem'
        mb='2rem'
        name={" Hello! I see you got through the login"}


      />
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

        >
          <Header1
            fontFamily="Verdana"
            alignItems='center'
            mt={[2, 2, 2]}
            mb={[2, 3, 3]}
            fontSize={[3]}
            color="primary"

            name={"Information"}
          />
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