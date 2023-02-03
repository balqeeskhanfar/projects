import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./profile.css";

function About() {
    let location = useLocation();
    const [user, setUser] = useState();

    useEffect(() => {
        async function getUseres() {
            let url = "http://127.0.0.1:8000/users";
            try {
                const response = await axios.get(url);
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i]["_id"] === location.state.name) {
                        setUser(response.data[i]);
                        break;
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
        getUseres();
    }, [location]);

    const Box = styled.div`
        text-align: center;
        background-color: #aaccee;
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
        @media screen and (max-width: 820px) {
            box-shadow: none;
        }
    `;

    return (
        <div
            style={{
                marginTop: "10%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            {user && (
                <Box>
                    <h1>{user["name"]}</h1>
                    <h2>{user["username"]}</h2>
                    <h5>job: {user["job"]}</h5>
                    <h5>company: {user["company"]}</h5>
                    <h5>residence: {user["residence"]}</h5>
                    <h5>blood_group: {user["blood_group"]}</h5>
                    <h5>sex: {user["sex"]}</h5>
                    <h5>address: {user["address"]}</h5>
                    <h5>mail: {user["mail"]}</h5>
                    <h5>birthdate: {user["birthdate"]}</h5>
                </Box>
            )}
        </div>
    );
}

export default About;
