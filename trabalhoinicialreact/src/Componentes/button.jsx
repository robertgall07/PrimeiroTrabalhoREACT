// botao - title, valor, onclick;
// import {style }from "../Componentes/buttoncss"

export function Button({ valor, onclick, title }) {
  return (
    <>
      <button
        title={title}
        id="button"
        // className={style.buttoncss}
        onClick={onclick}
      >
        {valor}
      </button>
    </>
  );

}

