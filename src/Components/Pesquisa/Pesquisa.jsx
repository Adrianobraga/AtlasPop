function Pesquisa() {
    return (
        <div className="p-4 sm:p-10 m-5 bg-slate-700 max-w-3xl mx-auto rounded-lg">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                
                <input
                    type="text"
                    className="border-2 border-solid w-full px-3 py-2 rounded"
                    placeholder="Digite sua pesquisa..."
                />

                <select className="border-2 border-solid w-full sm:w-auto px-3 py-2 rounded">
                    <option hidden>Selecione algum continente</option>
                    <option>Todos</option>
                    <option>Ásia</option>
                </select>

                <button className="bg-blue-600 text-white w-full sm:w-auto px-4 py-2 rounded hover:bg-blue-700">
                    Buscar
                </button>

            </div>
        </div>
    );
}

export default Pesquisa;
