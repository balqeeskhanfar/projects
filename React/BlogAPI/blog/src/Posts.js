import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Posts({ currentItems }) {
    const name = localStorage.getItem("name");
    const navigate = useNavigate();

    const gridStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const cardActionAreaStyle = {
        margin: "10px",
        width: "auto",
        maxWidth: "50%",
        minWidth: "50%",
        "@media (max-width: 820px)": {
            maxWidth: "80%",
            minWidth: "80%",
        },
    };

    const cardStyle = { backgroundColor: "#1976d25e", display: "flex" };

    const handleClick = (post) => {
        navigate("/post", { state: { post: post } });
    };
    return (
        <>
            <Grid item xs={12} md={6} sx={gridStyle}>
                {currentItems &&
                    currentItems.map((post) => (
                        <CardActionArea
                            component="a"
                            href=""
                            key={post["_id"] + "_1111"}
                            onClick={() => handleClick(post)}
                            sx={cardActionAreaStyle}
                        >
                            <Card sx={cardStyle}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography
                                        component="h2"
                                        variant="h5"
                                        key={post["_id"]}
                                    >
                                        {post["title"]}
                                    </Typography>
                                    {name === post["author"] && (
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            key={post["_id"] + "_1"}
                                        >
                                            you are the auther
                                        </Typography>
                                    )}
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        key={post["_id"] + "_1_1"}
                                    >
                                        {post["publish"]}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        paragraph
                                        key={post["_id"] + "_2"}
                                    >
                                        {post["body"]}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    ))}
            </Grid>
        </>
    );
}
