import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import './index.css'

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
