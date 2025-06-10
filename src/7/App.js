import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Location from "./location";
import Footer from "./footer";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/location" element={<Location />}/>
            </Routes>
            <Footer />
            </BrowserRouter>
    )
}

export default App;
