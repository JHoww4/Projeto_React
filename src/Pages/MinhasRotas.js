import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade1 from "./Atividade1/Atividade1"; 

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/Atividade1" element={<Atividade1 />} /> 
            </Routes>
        </BrowserRouter>
    )
}
