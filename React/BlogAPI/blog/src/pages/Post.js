import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Post() {
    let location = useLocation();
    const name = localStorage.getItem("name");
    const navigateor = useNavigate();

    const gridStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const commentCardActionAreaStyle = {
        backgroundColor: "#aaccee2b",
        margin: "10px",
        display: "flex",
        width: "auto",
        maxWidth: "50%",
        minWidth: "50%",
        "@media (max-width: 820px)": {
            maxWidth: "80%",
            minWidth: "80%",
        },
    };

    const cardStyle = {
        backgroundColor: "#1976d25e",
        display: "flex",
        margin: "10px",
        width: "auto",
        maxWidth: "50%",
        minWidth: "50%",
        "@media (maxWidth: 820px)": {
            maxWidth: "80%",
            minWidth: "80%",
        },
    };

    const [comments, setComments] = useState();

    useEffect(() => {
        async function getComments() {
            let url =
                "http://127.0.0.1:8000/comments/" + location.state.post["_id"];
            try {
                const response = await axios.get(url);
                setComments(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getComments();
    }, [location]);

    const handleClick = (commentName) => {
        navigateor("/about", { state: { name: commentName } });
    };
    //const post = location.state.post;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {location.state && (
                <>
                    <Card sx={cardStyle}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography
                                component="h2"
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                                key={location.state.post["_id"]}
                            >
                                {location.state.post["title"]}
                            </Typography>
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    color: "#2270be",
                                }}
                                onClick={() =>
                                    handleClick(location.state.post["author"])
                                }
                            >
                                about author
                            </Typography>
                            {name === location.state.post["author"] && (
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    key={location.state.post["_id"] + "_1"}
                                >
                                    you are the auther
                                </Typography>
                            )}
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                key={location.state.post["_id"] + "_1_1"}
                            >
                                {location.state.post["publish"]}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                paragraph
                                key={location.state.post["_id"] + "_2"}
                            >
                                {location.state.post["body"]}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                    <Grid item xs={12} md={6} sx={gridStyle}>
                        {comments &&
                            comments.map((comment) => (
                                <Card
                                    sx={commentCardActionAreaStyle}
                                    key={comment["_id"] + "_1111"}
                                >
                                    <CardContent sx={{ flex: 1 }}>
                                        {name === comment["name"] && (
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                                key={comment["_id"] + "_3"}
                                            >
                                                you are the auther
                                            </Typography>
                                        )}
                                        <Typography
                                            variant="subtitle2"
                                            key={comment["_id"] + "_3345"}
                                        >
                                            {comment["name"]}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            key={comment["_id"] + "_1_3"}
                                        >
                                            {comment["created"]}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            paragraph
                                            key={comment["_id"] + "_3"}
                                        >
                                            {comment["body"]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                    </Grid>
                </>
            )}
        </div>
    );
}

export default Post;
