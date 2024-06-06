
    import React, { useEffect, useState } from 'react';

    export function Listar() {
      const [items, setItems] = useState([
        { id: 1, nome: 'calça' },
        { id: 2, nome: 'camisa' },
        { id: 3, nome: 'casaco' },
        { id: 4, nome: 'Blusa'},
        { id: 5, nome: 'Tenis'},
        { id: 6, nome: 'Touca'},
        { id: 7, nome: 'Rasteirinha'},
        { id: 8, nome: 'Macaquinho'},
        { id: 9, nome: 'Macacão'},
        { id: 10, nome: 'Vestido'},
        { id: 11, nome: 'Sobre-Tudo'},
        { id: 12, nome: 'Tamanco'},
        { id: 13, nome: 'Japona'},
        { id: 14, nome: 'Bone'}
      ]);
    
      const [coisas, setCoisas] = useState('');
      const [dadosFiltrados, setDadosFiltrados] = useState([]);
    
      useEffect(() => {
        const dadosFiltrados = items.filter(item =>
          item.nome.toLowerCase().includes(coisas.toLowerCase())
        );
    
        setDadosFiltrados(dadosFiltrados);
      }, [coisas, items]);
    
      return (
        <div>
          <input
            type="search"
            value={coisas}
            onChange={(e) => setCoisas(e.target.value)}
            placeholder="Buscar..."
          />
          <ul>
            {dadosFiltrados.map((item) => (
              <li key={item.id}>{item.nome}</li>
            ))}
          </ul>
        </div>
      );
    }
    