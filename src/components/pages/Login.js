
import React, { useState } from "react";
import { Box, Heading, Button, Flex } from "rebass";
import { Label as Text, Input } from "@rebass/forms";
import {
    BrowserRouter as Router, Route, Switch, useHistory,
} from "react-router-dom";
import { Dashboard } from "./Dashboard";

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }
export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [responseMessage, setResponseMessage] = useState("");

    const history = useHistory();

    const user = "http://localhost:5000";



    function loginClicked() {
        console.log("Login Clicked");
        console.log("Email : " + email);
        console.log("Password : " + password);


        //fetch('http://localhost:5000/user-service/login/',{email:email.value,password:password.value})

        fetch(user + `/user-service/login/${email}/${password}`)
            .then((response) => response.json())
            .then(function setValues(response) {
                if (response.token === "A_guid") {
                    console.log(response);
                    history.push("/dashboard");
                } else {
                    console.log(response);
                    setResponseMessage("Invalid login credentials.");
                }
            });


    }

    // class Form extends React.Component {
    //     handleChange = e => {
    //       this.form.validateFields(e.target);
    //     }

    //     contactSubmit = e => {
    //       e.preventDefault();

    //       this.form.validateFields();

    //       if (!this.form.isValid()) {
    //         console.log('form is invalid: do not submit');
    //       } else {
    //         console.log('form is valid: submit');
    //       }
    //     }}



    // export const Login = ({setToken}) => {
    //     const [email, setemail] = useState("");
    //     const [password, setpassword] = useState("");

    //  function validateForm() {
    //    return email.length > 0 && password.length > 0;
    //  }
    // const loginClicked = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //       email,
    //       password
    //     });
    //     setToken(token);
    //   }

    return (
        <Router>

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
                    fontSize='4rem'
                    mb='2rem'
                >
                    Ready to take  a Challenge?
                </Heading>



                <Box
                    sx={{
                        px: 5,
                        py: 5,
                        backgroundColor: "white",
                        backgroundSize: 'cover',
                        border: '5px solid', borderColor: "darkblue",
                        borderRadius: 8,
                        color: 'black',
                        bg: 'white',
                    }}>
                    <Heading fontFamily='Verdana' fontSize={[3]} color="primary">
                        Login to pick a Challenge!
                    </Heading>




                    <Text fontFamily='Candara' htmlFor='email'>Email </Text>
                    <Input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Email Address'


                    />
                    <Box >
                        <Text fontFamily='Candara' htmlFor='password'>Password</Text>
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
            </Flex>


            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>

        </Router>


    );



    // Login.propTypes = {
    //     setToken: PropTypes.func.isRequired
};
