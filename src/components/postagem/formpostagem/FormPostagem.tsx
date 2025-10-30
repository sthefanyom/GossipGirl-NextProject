function FormPostagem() {
  return (
    <div className="container flex flex-col mx-auto items-center bg-gray-100 text-black p-8 rounded-2xl shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Cadastrar Postagem
      </h1>

      <form className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="font-semibold text-black">
            Título da Postagem
          </label>
          <input
            type="text"
            placeholder="Título"
            name="titulo"
            required
            className="border-2 border-gray-400 bg-gray-100 text-black rounded p-2 focus:outline-none focus:border-[#4B0000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="texto" className="font-semibold text-black">
            Texto da Postagem
          </label>
          <input
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-gray-400 bg-gray-100 text-black rounded p-2 focus:outline-none focus:border-[#4B0000]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-black">Tema da Postagem</p>
          <select
            name="tema"
            id="tema"
            className="border p-2 border-gray-400 rounded bg-gray-100 text-black focus:outline-none focus:border-[#4B0000]"
          >
            <option value="" selected disabled>
              Selecione um Tema
            </option>
            <option>tema1</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded bg-[#4B0000] hover:bg-black text-gray-100 font-bold w-1/2 mx-auto py-2 flex justify-center transition duration-300"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
