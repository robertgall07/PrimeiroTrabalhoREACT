import { Routes, Route } from "react-router-dom";

import { Relogio } from "../exercicio2/Relogio";
import { Listar } from "../exercicio4/listadeDados";

import { ListaDecompras } from "../exercicio1/ListaDeRoupas";
import { HomePage } from "../Page/Homepage";
import { FormPage } from "../exercicio3/FormePage";

export function Rotas() {
    return (
        <Routes>
             <Route path="/" element={<HomePage/>} />
            <Route path="/ListaDecompras" element={<ListaDecompras />} />
            <Route path="/relogio" element={<Relogio />} />
            <Route path="/FormPage" element={<FormPage />} />
            <Route path="/Listar" element={<Listar />} />
        </Routes> 
    );
}
