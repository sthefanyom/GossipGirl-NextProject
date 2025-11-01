import { useContext, type ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)
    function logout() {
        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

     let component: ReactNode

     if (usuario.token !== "") {

        component = (
            <div className='w-full flex justify-center py-4 bg-black text-white'>
                <div className="container flex justify-between text-lg mx-8">
                    <Link 
                        to='/home' 
                        className='rounded-lg px-4 py-2 hover:bg-[#4B0000] transform hover:scale-110 transition-transform duration-300 font-semibold text-xl'
                    >
                        Gossip Girl
                    </Link>

                    <div className='flex gap-4'>
                        <Link to ='/postagens' className=' rounded-lg px-4 py-2 hover:bg-[#4B0000]'>Postagens</Link>
                        <Link to ='/temas' className=' rounded-lg px-4 py-2 hover:bg-[#4B0000]'>Temas</Link>
                        <Link to ='/cadastrartema' className=' rounded-lg px-4 py-2 hover:bg-[#4B0000]'>Cadastrar Tema</Link>
                        <Link to ='/perfil' className=' rounded-lg px-4 py-2 hover:bg-[#4B0000]'>Perfil</Link>
                        <Link to ='' onClick={logout} className=' rounded-lg px-4 py-2 hover:bg-[#4B0000]'>Sair</Link>
                    </div>
                </div>
            </div>

        )
     }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar
