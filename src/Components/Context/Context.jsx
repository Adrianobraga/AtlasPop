import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [Buscar, setBuscar] = useState([]);
  const [Filter, setFilter] = useState("");
  const [Nome, setNome] = useState("");
  const mostrarFavoritos = true;
  //Pega as informações do localstorage e guarda
  const [Like, setLike] = useState(() => {
    const stored = localStorage.getItem("likes");
    return stored ? JSON.parse(stored) : {};
  });
  //Função que limpa o nome e o filtro
  function Serasa() {
    setNome(""); 
    setFilter("");
  }

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(Like));
  }, [Like]);

  //Essa função filtra o pais de acordo com os favoritos
  const paisesFiltrados = mostrarFavoritos
    ? Buscar.filter((pais) => Like[pais.name.common] === true)
    : Buscar;

    //Essa função curte cada pais individualmente
  function toggleLike(nomePais) {
    setLike((prev) => ({
      ...prev,
      [nomePais]: !prev[nomePais],
    }));
  }

  const valores = {
    Buscar,
    setBuscar,
    Filter,
    setFilter,
    Nome,
    setNome,
    Like,
    setLike,
    toggleLike,
    mostrarFavoritos,
    paisesFiltrados,
    Serasa:Serasa,
  };

  return (
    <Context.Provider value={valores}>
      {children}
    </Context.Provider>
  );
};
