import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

function Api () {
    const {setBuscar,Filter} = useContext(Context);
     useEffect(() => {
    const Buscar = (filtrar) => {
    axios
    .get(`https://restcountries.com/v3.1/${filtrar ? filtrar : "all"}?fields=name,flags,capital,region,population,languages,currencies,borders`)
    .then((res) => {
        setBuscar(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
    }
        Buscar(Filter);
  }, [Filter,setBuscar]);

}

export default Api;