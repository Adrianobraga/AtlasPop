import { createContext, useContext,useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [Buscar,setBuscar] = useState([]);
    const valores = {
    Buscar:Buscar,
    setBuscar:setBuscar, 
 }

    return(
     <Context.Provider value={valores}>
        {children}
     </Context.Provider>
    )
}