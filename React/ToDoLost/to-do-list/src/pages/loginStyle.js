import styled from "styled-components";

export const LoginBox = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 25.6% 11% 11% 13% 14% 11%;
    grid-column: 2;
    grid-row: 2;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;

    @media screen and (max-width: 480px) {
        padding: 45px;
        box-shadow: none;
    }
    @media screen and (min-height: 1936px) {
        grid-template-rows: 25.6% 8% 8% 8% 8% 8%;
    }

    @media screen and (width: 540px) and (height: 720px) {
        grid-template-rows: 20.6% 16% 16% 16% 18% 11%;
    }
`;

export const Title = styled.h1`
    grid-row: 1;
    font-size: 2em;
    text-align: center;
    align-self: center;
    color: #16a3b7;
`;

export const TextInput = styled.input`
    color: black;
    font-size: 1em;
    border: 2px solid #595959;
    border-radius: 3px;
    margin: 15px;

    &:focus {
        border-color: #0066cc;
    }

    ::placeholder {
        color: #b3b3b3;
    }

    @media screen and (min-width: 480px) {
        margin-right: 85px;
        margin-left: 85px;
    }
    @media screen and (max-width: 480px) {
        max-width: 100vh;
        height: 59%;
        margin-bottom: 60px;
    }
`;

export const Button = styled.button`
    background-color: #4caf50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 3px solid #008cba;
    border-radius: 3px;
    margin: 15px;
    &:hover {
        background-color: #008cba;
        color: white;
    }
    @media screen and (min-width: 480px) {
        margin-right: 85px;
        margin-left: 85px;
    }
`;

export const OrLink = styled.h4`
    text-align: center;
    border: 0px;
    color: #595959;
    width: fit-content;
    justify-self: center;
`;

export const LoginGoogleButton = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: #4285f4;

    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 3px;
    margin: 15px;

    @media screen and (min-width: 480px) {
        margin-right: 85px;
        margin-left: 85px;
    }
`;

export const ErorMsg = styled.h4`
    color: red;
    align-self: center;
`;

export const Down = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
