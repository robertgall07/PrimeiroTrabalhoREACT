import { useNavigate } from "react-router-dom";
import {Button} from "../Componentes/button";
import { Relogio } from "../exercicio2/Relogio";
import { Carrosel} from "../Componentes/Carrocel";

export function HomePage() {
  const navigate = useNavigate();

  function handleNavigateToFormulario() {
    navigate("/FormPage"); 
  }

  function handleNavigateTonListaDeRoupas() {
    navigate("/ListaDeCompras"); 
  }
  function handleNavigateToListar() {
    navigate("/Listar"); 
  }

  return (
    <>
    < Relogio/>

     
     
     
      < Carrosel/>
      <br />
      <br /> 
      <Button onclick={handleNavigateToFormulario} valor={"Formulario"} />
      <br />
      <br />
      <Button onclick={handleNavigateTonListaDeRoupas} valor={"Lista de Compras"} />
      <br />
      <br />
      <Button onclick={handleNavigateToListar} valor={ "Sua lista de preferencias"} />
      <br />
      <br />

    </>
  );
}
