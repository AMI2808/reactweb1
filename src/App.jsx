import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Contact from "./Cotact";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {

   
    return (
        <>

        <Navbar/>
    

        <Routes>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/about"  element={<About/>}></Route>
            <Route path="/service"  element={<Service/>}></Route>
            <Route path="/contact"  element={<Contact/>}></Route>
            <Route path="*"  element={<Home/>}></Route>

        </Routes>

        <Footer/>
          

        </>
    )

}
export default App;
