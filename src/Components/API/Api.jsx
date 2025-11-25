import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

function Api () {
    const {setBuscar} = useContext(Context);
     useEffect(() => {
    const Buscar = () => {
    axios
    .get("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies,borders")
    .then((res) => {
        setBuscar(res.data)
    })
    .catch((error) => {
        console.log(error)
    })
    }
        Buscar();
  }, [setBuscar]);

}

export default Api;