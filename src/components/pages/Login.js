
import React, { useState } from "react";
import { Box, Heading, Button, Flex, Link } from "rebass";
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

    const BASE_URL = "http://localhost:5000";

    // Function to execute when login button is clicked
    // function loginClicked() {
    //   console.log("Login Clicked");
    //   console.log("Email : " + userName);
    //   console.log("Password : " + passWord);

    function loginClicked() {
        console.log("Login Clicked");
        console.log("Email : " + email);
        console.log("Password : " + password);

        fetch(BASE_URL + `/user-service/login/${email}/${password}`)
            .then((response) => response.json())
            .then(function setValues(response) {
                if (response.status === "success") {
                    console.log(response);
                    history.push("/dashboard");
                } else {
                    console.log(response);
                    setResponseMessage("Please recheck your login credentials.");
                }
            });
    }

    //     fetch(BASE_URL + `/user-service/login/${email}/${password}`)
    //     .then((response) => response.json())
    //     // .then((data) => console.log(data));
    //     .then(function setValues(response) {
    //       if (response.status === "success") {
    //         console.log(response);
    //       } else {
    //         console.log(response);
    //       }
    //     });
    // }

    // export const Login = ({setToken}) => {
    //     const [email, setemail] = useState("");
    //     const [password, setpassword] = useState("");

    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
    // }
    // const loginClicked = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //       email,
    //       password
    //     });
    //     setToken(token);
    //   }
    // function loginClicked() {
    //     console.log("Login Clicked");
    //     console.log("Email : " + email);
    //     console.log("Password : " + password);
    // }

    return (
        <Router>
            {/* <div> */}
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


                {/* <Heading fontFamily='Verdana' fontSize={[4]} color='primary'>
                Ready to take  a Challenge?
            </Heading> */}

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
                </Box>
            </Flex>


            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>

        </Router>


        //     <div>
        //     <Heading fontSize={[6]} color="primary">
        //       Ready to take a challenge?
        //     </Heading>

        //     <Box>
        //       <Heading fontSize={[3]} color="primary">
        //         Login to pick a challenge
        //       </Heading>
        //       <Label htmlFor="email">Email</Label>
        //       <Input
        //         value={email}
        //         onChange={(e) => setemail(e.target.value)}
        //         id="email"
        //         name="email"
        //         type="email"
        //         placeholder="Email address"
        //       />
        //       <Box width={[1, 1, 1 / 2]}>
        //         <Label htmlFor="password">Password</Label>
        //         <Input
        //           value={password}
        //           onChange={(e) => setpassword(e.target.value)}
        //           id="password"
        //           name="password"
        //           type="password"
        //           placeholder="Password"
        //         />
        //       </Box>
        //       <Box>
        //         <Button bg="blue" onClick={loginClicked}>
        //           Login
        //         </Button>
        //       </Box>
        //     </Box>
        //   </div>
    );



    // Login.propTypes = {
    //     setToken: PropTypes.func.isRequired
};
