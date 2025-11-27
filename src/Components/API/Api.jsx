import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";

function Api() {
  const { setBuscar, Filter, Nome } = useContext(Context);

  useEffect(() => {
    const Buscar = (filtrar) => {
      axios
        .get(
          `https://restcountries.com/v3.1/${filtrar ? filtrar : "all"}?fields=name,flags,capital,region,population,languages,currencies,borders`
        )
        .then((res) => {
          if (Nome) {
            const Pais = res.data.find(
              (country) =>
                country.name.common.toLowerCase() === Nome.toLowerCase()
            );
            setBuscar(Pais ? [Pais] : []);
          } else {
            setBuscar(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
          setBuscar([]);
        });
    };

    Buscar(Filter);
  }, [Filter, Nome, setBuscar]);
}

export default Api;
