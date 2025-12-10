import { createContext, useContext,useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [Buscar,setBuscar] = useState([]);
    const [Filter,setFilter] = useState("");
    const [Nome,setNome] = useState();
    const [Like, setLike] = useState({});
    const mostrarFavoritos = true;

    const paisesFiltrados = mostrarFavoritos
    ? Buscar.filter((pais) => Like[pais.name.common] === true)
    : Buscar;

 function toggleLike(index) {
    setLike((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    
  const stored = JSON.parse(localStorage.getItem("id")) || [];

  if (stored.includes(index)) {
    const filtered = stored.filter(item => item !== index);
    localStorage.setItem("id", JSON.stringify(filtered));
  } else {
    stored.push(index);
    localStorage.setItem("id", JSON.stringify(stored));
  }
     
}
    const valores = {
    Buscar:Buscar,
    setBuscar:setBuscar, 
    Filter:Filter,
    setFilter:setFilter,
    Nome:Nome,
    setNome:setNome,
    Like:Like,
    setLike:setLike,
    toggleLike:toggleLike,
    mostrarFavoritos:mostrarFavoritos,
    paisesFiltrados:paisesFiltrados,
 }
    return(
     <Context.Provider value={valores}>
        {children}
     </Context.Provider>
    )
}