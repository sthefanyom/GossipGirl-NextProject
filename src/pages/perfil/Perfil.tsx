import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {
	const navigate = useNavigate()
	const { usuario } = useContext(AuthContext)

	useEffect(() => {
		if (usuario.token === "") {
			ToastAlerta("Você precisa estar logado!", "erro")
			navigate("/")
		}
	}, [usuario.token])

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
				{/* capa */}
				<img
					className="w-full h-72 object-cover border-b-8 border-white"
					src="https://i.imgur.com/kd9v7ys.jpeg"
					alt="Capa do Perfil"
				/>

				{/* foto de perfil redondinha */}
				<div className="flex justify-center">
				<img
					className="w-40 h-40 rounded-full object-cover border-4 border-[#4B0000] bg-black -mt-24 z-10 shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
					src={usuario.foto && usuario.foto.trim() !== "" ? usuario.foto : "https://i.imgur.com/FKTWWYp.png"}
					alt={`Foto de perfil de ${usuario.nome || "usuário"}`}
				/>
				</div>

					{/* informações */}
				<div
					className="mt-[-2rem] h-72 flex flex-col bg-[#4B0000] text-white 
					text-2xl items-center justify-center rounded-b-2xl"
				>
					<p>Nome: {usuario.nome}</p>
					<p>Email: {usuario.usuario}</p>
				</div>
			</div>
		</div>
	)
}

export default Perfil
