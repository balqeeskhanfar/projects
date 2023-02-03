import React, { useEffect, useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./../firebase";

import {
    SignUpBox,
    Title,
    TextInput,
    Button,
    OrLink,
    LoginGoogleButton,
    TextInputName,
    PasswordInput,
    ErorMsg,
    Down,
} from "./signupStyle";

function Signup() {
    const [errorMsg, setErrorMsg] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();

    const register = () => {
        if (!nameRef.current.value) {
            setErrorMsg("Please enter name");
            return;
        }
        registerWithEmailAndPassword(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            setErrorMsg
        );
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard", { replace: true });
    }, [user, loading]);

    return (
        <SignUpBox>
            <Title>Sign up</Title>
            <TextInputName
                ref={nameRef}
                type="text"
                placeholder="Full Name"
            ></TextInputName>
            <TextInput
                ref={emailRef}
                type="email"
                placeholder="Email"
            ></TextInput>
            <PasswordInput
                ref={passwordRef}
                placeholder="Password"
                type="password"
            ></PasswordInput>
            <Button onClick={register}>Sign up</Button>
            <LoginGoogleButton onClick={() => signInWithGoogle(setErrorMsg)}>
                Sign up with Google
            </LoginGoogleButton>

            <Down>
                <ErorMsg>{errorMsg}</ErorMsg>
                <OrLink>
                    or <Link to="/">Log in</Link>
                </OrLink>
            </Down>
        </SignUpBox>
    );
}

export default Signup;
