import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps){
    return (
        <div className='border-black border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-[#4B0000] text-white py-2 px-4 items-center gap-4">
                    <img src={postagem.usuario?.foto}
                         className='h-12 rounded-full' alt="{postagem.usuario?.nome}" />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <div className= 'p-8 text-black bg-gray-100 h-full'>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao} </p>
                    <p>Data: {new Intl.DateTimeFormat("pt-BR", {dateStyle: 'full', timeStyle: 'medium',}).format(new Date(postagem.data))} </p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`} className='w-full text-white bg-black
                    hover:bg-[#565656] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} className='text-white bg-black
                    hover:bg-[#4B0000] w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem