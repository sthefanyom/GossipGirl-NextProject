import { useNavigate, useParams } from "react-router-dom"
import type Tema from "../../../models/Tema"
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { AuthContext } from "../../../contexts/AuthContext"
import { ClipLoader } from "react-spinners"
import { buscar, atualizar, cadastrar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function FormTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token 

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any){
            if (error.toString().includes('401')) {
                handleLogout()
                }
            }
        }

        useEffect(() => {
            if (token === '') {
                ToastAlerta("Você precisa estar logado!", "erro")
                navigate ('/')
            }
        }, [token])

        useEffect(() => {
            if (id !== undefined) {
                buscarPorId(id)
            }
        }, [id])

        function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
            setTema({
                ...tema,
                [e.target.name]: e.target.value
            })
        }

        function retornar () {
            navigate("/temas")
        }

        async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
            e.preventDefault()
            setIsLoading(true)

            if (id !== undefined) {
                try {
                    await atualizar (`/temas`, tema, setTema, {
                        headers: { 'Authorization': token}
                    })
                    ToastAlerta("O tema foi atualizado com sucesso!", "sucesso")
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error:any) {
                    if (error.toString().includes('401')) {
                        handleLogout()
                    } else {
                        ToastAlerta("Erro ao atualizar o tema.", "erro")
                    }
                }
            } else {
                try {
                    await cadastrar(`/temas`, tema, setTema, {
                        headers: { 'Authorization': token }
                    })
                    ToastAlerta("O tema foi cadastrado com sucesso!", "sucesso")
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    if (error.toString().includes('401')) {
                        handleLogout();
                    } else {
                        ToastAlerta("Erro ao cadastrar o tema.", "erro")
                    }
                }
            }
            setIsLoading(false)
            retornar()
        }

  return (

    <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4"
            onSubmit={gerarNovoTema}>
            <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição do Tema</label>
                <input type="text" placeholder="Descreva aqui seu tema" name='descricao' className="border-2 border-black rounded p-2"  value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            </div>

            <button className="rounded text-white bg-black hover:bg-[#4B0000] w-1/2 py-2 mx-auto flex justify-center" type="submit">

            { isLoading ?
                    <ClipLoader color="#ffffff" size={24} /> :
                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
            }

            </button>
        </form>
        
        </div> 
  )
}

export default FormTema
