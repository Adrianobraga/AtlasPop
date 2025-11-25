import { useContext } from "react";
import { Context } from "../Context/Context";

function Paises() {
    const { Buscar } = useContext(Context);
    console.log(Buscar);

    return (
        <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Buscar.map((pais, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 text-white p-4 rounded-xl shadow-xl hover:scale-105 duration-300 cursor-pointer w-full"
                    >
                        <div className="w-full h-40 bg-slate-600 rounded-lg mb-3 flex items-center justify-center">
                            <img src={pais.flags.png} className="w-full h-40" />
                        </div>

                        <h2 className="text-xl font-semibold">{pais.name.common}</h2>
                        <p className="text-sm text-slate-300">Continente: {pais.region}</p>
                        <p className="text-sm text-slate-300">Fronteira:{pais.borders && pais.borders.length > 0 ? pais.borders.join(", ") : "Nenhuma"}</p>
                        <p className="text-sm text-slate-300">Capital: {pais.capital}</p>
                        <p className="text-sm text-slate-300">Línguas: {pais.languages ? Object.values(pais.languages).join(", ") : "Não informado"}</p>
                        <p className="text-sm text-slate-300">População: {pais.population}</p>
                        <p className="text-sm text-slate-300">Moeda: {pais.currencies ? Object.values(pais.currencies).map(c => `${c.name} (${c.symbol})`).join(", "): "Não informado"}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Paises;
