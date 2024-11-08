import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
