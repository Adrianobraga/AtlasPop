import { createContext, useContext,useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

 const valores = {

 }

    return(
     <Context.Provider value={valores}>
        {children}
     </Context.Provider>
    )
}