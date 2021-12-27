import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Text, Flex } from "rebass";
import { Header1 } from "../../constants/Header/RebassHeader";
import {  getconfigAction } from "../../redux/actions";
import { user_url } from "../../routesClass";

export const Dashboard = ({ configLogin, dashboard_Header, dashboard_SubHeader }) => {
  const [emailaddress, setEmailAddress1] = useState();
  const [name, setName] = useState();
  const [origin, setOrigin] = useState();



  useEffect(() => {    //perform side-effects in function components
    fetch(user_url + "/user-service/user-details")
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
        name={dashboard_Header}
      //name={" Hello! I see you got through the login"}


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
            //name={dashboard_SubHeader}
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
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    email: state.example.email,
    name: state.login.name,
    origin: state.login.origin,
    dashboard_Header: state.configValuesReducer.configResponse?.dashboard_Header,
    dashboard_SubHeader: state.configValuesReducer.configResponse?.dashboard_SubHeader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    configLogin: (login_Header, login_SubHeader) => {
      dispatch(getconfigAction(login_Header, login_SubHeader, () => {
        console.log("action works!");

      }));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);