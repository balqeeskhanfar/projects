import * as React from "react";
import { useNavigate } from "react-router-dom";
import PaginatedItems from "./../PaginatedItems";
import Button from "@mui/material/Button";

function Dashboard() {
    const navigateor = useNavigate();
    const handleClick = () => {
        navigateor("/about", {
            state: { name: localStorage.getItem("name") },
        });
    };
    return (
        <>
            <Button onClick={handleClick}>about me</Button>
            <PaginatedItems itemsPerPage={5} />
        </>
    );
}

export default Dashboard;
