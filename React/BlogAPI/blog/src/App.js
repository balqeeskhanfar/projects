import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post" element={<Post />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
