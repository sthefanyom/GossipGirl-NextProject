import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
                <div className="container flex justify-between text-lg mx-8">
                    <Link 
                        to='/home' 
                        className='rounded-lg px-4 py-2 hover:bg-indigo-700 transform hover:scale-110 transition-transform duration-300 font-semibold text-xl'
                    >
                        Gossip Girl
                    </Link>

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
