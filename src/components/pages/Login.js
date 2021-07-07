import React, { useState } from "react";
import { Box, Heading, Button } from 'rebass'
import { Label, Input, } from '@rebass/forms'


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <Heading fontSize={[7]} color='primary'>
                Ready to take  a Challenge?
            </Heading>

            <Box
                sx={{
                    px: 4,
                    py: 6,
                    backgroundImage: 'url(https://source.unsplash.com/random/1024x768?sky)',
                    backgroundSize: 'cover',
                    borderRadius: 8,
                    color: 'white',
                    bg: 'gray',
                }}>
                <Heading fontSize={[3]} color="primary">
                    Login to pick a Challenge!
                </Heading>




                <Label htmlFor='email'>Email </Label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email Address'


                />
                <Label htmlFor='password'>Password</Label>
                <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />

                <Box>

                    <Button bg="blue" onClick={loginClicked}>
                        Login
                    </Button>
                </Box>
            </Box>


        </div>

    );
};