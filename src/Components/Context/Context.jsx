import { createContext, useContext,useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [Buscar,setBuscar] = useState([]);
    const [Filter,setFilter] = useState("");
    const [Nome,setNome] = useState();
    const [Like, setLike] = useState({});
 
 function toggleLike(index) {
    setLike((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
 }
    return(
     <Context.Provider value={valores}>
        {children}
     </Context.Provider>
    )
}