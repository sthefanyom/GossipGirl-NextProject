import { Link } from "react-router-dom"
import type Tema from '../../../models/Tema';

interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded-2x1 overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-black text-white font-bold text-2x1'>Tema</header>
        <p className='p-8 text-black bg-gray-100 h-full'>{tema.descricao}</p>

        <div className="flex">
            <Link to={`/editartema/${tema.id}`}
            className='w-full text-white bg-black hover:bg-[#565656] flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>

            <Link to='' className='text-white bg-black hover:bg-[#4B0000] w-full flex items-center justify-center'>
                <button>Deletar</button>
            </Link>
        </div>
    </div>
  )
}

export default CardTema