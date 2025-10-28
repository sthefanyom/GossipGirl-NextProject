import React from 'react'


function Home() {
    return (
        <>
            <div className="bg-black flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">
                            Gossip Girl
                        </h2>
                        <p className="text-xl">
                            Conte aqui seu segredo, ou o dos outros
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded bg-black hover:bg-[#4B0000] text-white border-white border-solid border-2 py-2 px-4">
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src='https://i.imgur.com/jWwNNd8.jpeg'
                            alt="Imagem Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
