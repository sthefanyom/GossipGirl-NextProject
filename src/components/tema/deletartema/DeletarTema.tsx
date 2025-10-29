import { useNavigate, useParams } from "react-router-dom"
import type Tema from "../../../models/Tema"
import { AuthContext } from "../../../contexts/AuthContext"
import { useContext, useEffect, useState } from "react"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"


function DeletarTema() {

  const navigate = useNavigate()

const [tema, setTema] = useState<Tema>({} as Tema)
const [isLoading, setIsLoading] = useState<boolean>(false)

const { usuario, handleLogout } = useContext(AuthContext)
const token = usuario.token

const { id } = useParams<{ id: string }>()

async function buscarPorId(id: string) {
  try {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.toString().includes('401')) {
      handleLogout()
    }
  }
}

useEffect(() => {
  if (token === '') {
    alert('Você precisa estar logado')
    navigate('/')
  }
}, [token])

useEffect(() => {
  if (id !== undefined) {
    buscarPorId(id)
  }
}, [id])

async function deletarTema() {
  setIsLoading(true)

  try {
    await deletar(`/temas/${id}`, {
      headers: {
        'Authorization': token
      }
    })

    alert('Tema apagado com sucesso!')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.toString().includes('401')) {
      handleLogout()
    } else {
      alert('Erro ao deletar o tema.')
    }
  }

  setIsLoading(false)
  retornar()
}

function retornar() {
  navigate("/temas")
}


  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-black text-white font-bold text-2xl'>
          Tema
        </header>
        <p className='p-8 text-black bg-gray-100 h-full'>{tema.descricao}</p>
        <div className='flex'>
          <button className='text-white bg-black hover:bg-[#4B0000] w-full flex items-center justify-center'
          onClick={retornar}>
            Não
          </button>
          <button className='w-full text-white bg-black hover:bg-[#565656] flex items-center justify-center py-2'
          onClick={deletarTema}>
            { isLoading ?
            <ClipLoader
              color="#ffffff"
              size={24}
              /> :
              <span>Sim</span>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarTema
