import { useState } from "react"


export function ListaDecompras() {
    const shop = [
      { id: 1, name: 'Calça' },
      { id: 2, name: 'Blusa' },
      { id: 3, name: 'Short' },
    ]
  
    const [listaDecompras, setListaDecompras] = useState(shop);
    const [novoItem, setNovoitem] = useState('');
  
    function adicionarItens() {
      if (novoItem.trim() !== '') {
        const EntradaNovoitem = {
          id: listaDecompras.length + 1,
          name: novoItem,
        };
        setListaDecompras([...listaDecompras, EntradaNovoitem]);
        setNovoitem('');
      }
  
    }
  
  
    return (
      <>
        <h1>Lista de compras</h1>
  
        <div>
          <ul>
            {listaDecompras.map((compras) => (
              <li key={compras.id}>{compras.name}</li>
            ))}
          </ul>
          <input
            type="text"
            value={novoItem}
            onChange={(e) => setNovoitem(e.target.value)}
            placeholder="Adicionar novo item"
          />
          <br />
          <br />
          <button onClick={adicionarItens}>Adicionar</button>
  
          
  
        </div>
      </>
    )
  }