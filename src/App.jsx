import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Barreau from "./Components/Barreau";
import UpdateBarreau from "./Components/UpdateBarreau";

const App = ()=>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/barreaux" element={<Barreau/>}/>
                <Route path="/update" element={<UpdateBarreau/>}/>
            </Routes>
        </BrowserRouter>
    )
}   
export default App;