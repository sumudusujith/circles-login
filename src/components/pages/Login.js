import React, { useState } from "react";
import { Box, Heading, Button } from 'rebass'
import { Label, Input } from '@rebass/forms'


export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
    // }

    function loginClicked() {
        console.log("Login Clicked");
        console.log("Email : " + email);
        console.log("Password : " + password);
    }

    return (
        <div>
            <Heading fontFamily='Verdana' fontSize={[4]} color='primary'>
                Ready to take  a Challenge?
            </Heading>

            <Box
                sx={{
                    px: 3,
                    py: 5,
                    backgroundColor: "grey",
                    backgroundSize: 'cover',
                    borderRadius: 8,
                    color: 'black',
                    bg: 'gray',
                }}>
                <Heading fontFamily='Verdana' fontSize={[3]} color="primary">
                    Login to pick a Challenge!
                </Heading>




                <Label fontFamily='Candara' htmlFor='email'>Email </Label>
                <Input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email Address'


                />
                <Box width={[1, 1, 1 / 2]}>
                    <Label fontFamily='Candara' htmlFor='password'>Password</Label>
                    <Input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        id='password'
                        name='password'
                        type='password'
                        placeholder='password'


                    />
                </Box>
                <Box>

                    <Button bg="#1a75ff" onClick={loginClicked}>
                        Login
                    </Button>
                </Box>
            </Box>


        </div>

    );
};