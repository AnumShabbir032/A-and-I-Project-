import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

import Home from "../screens/Home.jsx"
import Project from "../screens/Project.jsx";
import About from "../screens/About.jsx";
import Contact from "../screens/Contact.jsx";
import PageNotFound from "../screens/PageNotFound.jsx"

export default function RouterApp(){
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}