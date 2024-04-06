import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Home from "./Home";
import Users from './Users';
import AddUser from './AddUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()=>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
        </BrowserRouter>
    )
}   
export default App;