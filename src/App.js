// import react from "react"
import LoginPage from "./paginas/LoginPage"
import GlobalStyle from "./GlobalStyle"
import HomePage from "./paginas/HomePage"
import RegisterPage from "./paginas/RegisterPage"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EntradaValor from "./paginas/EntradaPage"
import SaidaValor from "./paginas/SaidaPage";




export default function App(){


    return(
        <>
            <GlobalStyle/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/addin" element={<EntradaValor/>}/>
                    <Route path="/addout" element={<SaidaValor/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};