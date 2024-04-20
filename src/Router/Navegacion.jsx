import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FichasRick from '../Componentes/FichasRick';
import PrincipalRick from '../Componentes/PrincipalRick';

function Navegacion() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PrincipalRick />} />
                    <Route path="/character" element={<FichasRick />} />
                    <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navegacion

