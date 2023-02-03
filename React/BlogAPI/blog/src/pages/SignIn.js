import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as RoutLink, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useState, createContext } from "react";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                blog API
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export const UserContext = createContext();

export default function SignIn() {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [alertContent, setAlertContent] = useState("");
    const [users, setUsers] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        let mail = data.get("mail");
        let password = data.get("password");
        getUser(mail, password);
    };

    async function getUser(mail, password) {
        let url = "http://127.0.0.1:8000/users";
        try {
            const response = await axios.get(url);
            setUsers(response.data);
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i]["mail"] === mail) {
                    if (response.data[i]["password"] === password) {
                        localStorage.setItem("name", response.data[i]["_id"]);
                        navigate("/dashboard");
                    }
                }
                setAlertContent("wrong email or password");
                setIsShown(true);
            }
        } catch (error) {
            console.error(error);
            setAlertContent(error);
            setIsShown(true);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <UserContext.Provider value={users}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="mail"
                                label="mail Address"
                                name="mail"
                                autoComplete="mail"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <RoutLink to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </RoutLink>
                                </Grid>
                            </Grid>
                            {isShown && (
                                <Alert severity="error">{alertContent}</Alert>
                            )}
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </UserContext.Provider>
            </Container>
        </ThemeProvider>
    );
}
