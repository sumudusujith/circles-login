
import React, { useState } from "react";
import { Box, Button, Flex } from "rebass";
import { Input } from "@rebass/forms";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { Header1 } from "../../constants/Header/Header1";
import { Label } from "../../constants/Header/Text";
//import { RebassInput } from "../../constants/Header/Input";

import { routesClass } from "../../routesClass";


import { incrementBy, login } from "../../redux/actions/";
//import { getData } from "../../fetch";






const Login = (props) => {
    console.log("Props", props);
    const [email, setemail] = useState("");//camelcase
    const [password, setpassword] = useState("");

    const [responseMessage, setResponseMessage] = useState("");

    const history = useHistory();





    function loginClicked() {
        props.incrementBy10();
        props.saveLogin(email, password);

        console.log("Login Clicked");
        console.log("EmailAddress : " + email);
        console.log("Password : " + password);



        fetch(routesClass.user_url + `/user-service/login/${email}/${password}`) //servce file
            .then((response) => response.json())
            .then(function setValues(response) {
                if (response.token === "A_guid") {
                    console.log(response);
                    //props.up
                    history.push("/dashboard");
                } else {
                    console.log(response);
                    setResponseMessage(routesClass.errorMessage);
                }
            });
    }



    return (


        <Flex
            backgroundColor='#282c34'
            height='100vh'
            alignItems='center'
            pt='2rem'
            flexDirection='column'
        >

            <Header1
                name={"Ready to take a challenge?"}
                fontSize="4rem"
                textAlign="center"
                color='#fff'
                fontFamily="Candara"
                mb='2rem'
            />



            <Box
                sx={{
                    px: 3,
                    py: 5,
                    backgroundColor: "white",
                    backgroundSize: 'cover',
                    border: '5px solid', borderColor: "darkblue",
                    borderRadius: 8,
                    color: 'black',
                    bg: 'white',
                }}>
                <Header1

                    name={"Login to pick a Challenge!"}
                    fontSize="3rem"
                    textAlign="center"
                    color='#fff'
                    fontFamily="Verdana"

                />




                <Label

                    name={"Emailaddresss"}
                    htmlFor="emailaddresss"
                    fontFamily='Candara' />
                <Input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id='emailAddress'
                    name='emailAddress'
                    type='emailAddress'
                    placeholder='EmailAddress'


                />
                <Box >
                    <Label
                        name={"Password"}
                        htmlFor="password"
                        fontFamily='Candara'
                    />
                    <Input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'


                    />
                </Box>
                <Box
                    sx={{
                        px: 85,
                        py: 25,

                    }}>

                    <Button width='100px'
                        height='34px'
                        bg='#282c34' onClick={loginClicked}>
                        Login
                    </Button>

                </Box>
                {/* login validation */}
                <Box px={5} py={2} fontFamily='Candara' color="red">

                    {responseMessage}
                </Box>
            </Box>
            <Box color="red">
                <div >
                    {props.grandTotal}

                </div>
            </Box>
        </Flex>





    );




};

function mapStateToProps(state) {
    console.log("state", state);
    return {
        grandTotal: state.example.total,
        email: state.login.email,
        password: state.login.password
    }

}
function mapDispatchToProps(dispatch) {
    return {
        incrementBy10: () => {
            dispatch(
                incrementBy(10)
            )
            console.log("test");
        },
        saveLogin: (email, password) => {
            dispatch(
                login(email, password))
        }

    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
//npm test -- --coverage