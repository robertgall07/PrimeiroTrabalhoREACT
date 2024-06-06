import React,{useState,useEffect} from "react";


export const Relogio = () => {
    const [hora,  setHora] =useState(new Date);

    useEffect(()=> {
      const Idhora = setInterval(() => setHora (new Date ()),1000);
      return ()=>   clearInterval(Idhora); 
    } , []);


return (


    <div>
        {hora.toLocaleTimeString()}
    </div>
    );
}

