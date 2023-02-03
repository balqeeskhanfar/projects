import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    LoginBox,
    Title,
    TextInput,
    Button,
    OrLink,
    LoginGoogleButton,
    ErorMsg,
    Down,
} from "./loginStyle";

import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "./../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    const [user, loading, error] = useAuthState(auth);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <LoginBox>
            <Title>Log in</Title>
            <TextInput ref={emailRef} placeholder="Email"></TextInput>
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                type="password"
            ></TextInput>
            <Button
                onClick={() =>
                    logInWithEmailAndPassword(
                        emailRef.current.value,
                        passwordRef.current.value,
                        setErrorMsg
                    )
                }
            >
                Log in
            </Button>

            <LoginGoogleButton onClick={() => signInWithGoogle(setErrorMsg)}>
                Login with Google
            </LoginGoogleButton>

            <Down>
                <ErorMsg>{errorMsg}</ErorMsg>
                <OrLink>
                    or <Link to="/signup">Sign up</Link>
                </OrLink>
            </Down>
        </LoginBox>
    );
}

export default Login;
