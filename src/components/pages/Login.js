
import React, { useState, useEffect } from "react";
import { Box, Button, Flex } from "rebass";
import { Input } from "@rebass/forms";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { Label } from "../../constants/Header/Text";
import { errorMessage } from "../../routesClass";

import { incrementBy, sagalogin } from "../../redux/actions/";
import { Header1 } from "../../constants/Header/RebassHeader";


const Login = (props) => {
    console.log("Props", props); //q props
    const { loginResponse, saveLogin } = props;
    const [email, setemail] = useState("");//camelcase
    const [password, setpassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const history = useHistory();

    useEffect(() => {

        if (loginResponse === undefined) return;
        console.log("USEEFFECT", loginResponse);
        if (loginResponse === "success") {
            history.push("/dashboard");
        } else {
            setResponseMessage(errorMessage);
        }
    },
        [loginResponse]
    );

    async function loginClicked() {

        const user = saveLogin(email, password, (response) => { });

        console.log("USER", user);
        console.log("Login Clicked");
        console.log("EmailAddress : " + email);
        console.log("Password : " + password);
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
        password: state.login.password,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementBy10: () => {
            dispatch(incrementBy(10));
            console.log("Test");
        },
        saveLogin: (email, password, callbackFn) => {
            dispatch(sagalogin(email, password, callbackFn));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

