import {GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Gossip Girl | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse as redes sociais do Desenvolvedor</p>
                    <div className='flex gap-2 text-white'>

                        <a 
                        href= "https://www.linkedin.com/in/sthefanyom/" 
                        target="_blank" 
                        className="hover:text-[#4B0000] transition-colors duration-300">
                            
                        <LinkedinLogoIcon size={40} weight='bold' />   </a>
                        
                        <a href = "https://www.instagram.com/quartzosollutions/" target="_blank"
                        className="hover:text-[#4B0000] transition-colors duration-300"
                        ><InstagramLogoIcon size={40} weight='bold' />
                        </a>
                        
                        <a href = "https://github.com/sthefanyom/" target="_blank"
                        className="hover:text-[#4B0000] transition-colors duration-300">
                        <GithubLogoIcon size={40} weight='bold' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
