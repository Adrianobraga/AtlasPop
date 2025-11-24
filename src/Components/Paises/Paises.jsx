function Paises() {
    const paises = [
        { bandeira: "🇧🇷", nome: "Brasil", continente: "América do Sul" },
        { bandeira: "🇯🇵", nome: "Japão", continente: "Ásia" },
        { bandeira: "🇫🇷", nome: "França", continente: "Europa" },
        { bandeira: "🇨🇦", nome: "Canadá", continente: "América do Norte" },
        { bandeira: "🇩🇪", nome: "Alemanha", continente: "Europa" },
        { bandeira: "🇦🇺", nome: "Austrália", continente: "Oceania" },
    ];

    return (
        <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paises.map((pais, index) => (
                    <div
                        key={index}
                        className="bg-slate-800 text-white p-4 rounded-xl shadow-xl hover:scale-105 duration-300 cursor-pointer w-full"
                    >
                        <div className="w-full h-32 bg-slate-600 rounded-lg mb-3 flex items-center justify-center">
                            <span className="text-4xl">{pais.bandeira}</span>
                        </div>

                        <h2 className="text-xl font-semibold">{pais.nome}</h2>
                        <p className="text-sm text-slate-300">Continente: {pais.continente}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Paises;
