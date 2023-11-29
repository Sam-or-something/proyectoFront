import React from "react";
import Link from "next/link";
import Image from 'next/image'

function CerrarSesion(){
    document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
    sessionStorage.clear()
}

function Navbar() {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Image src={"/images/DaskolarLogo.png"} width={80} height={80} alt="logo"/>
                
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href={`/crear-curso`}>Crear Cursos</Link>
                    <Link className="mr-5 hover:text-gray-900" href={`/cursos`}>Mis Cursos</Link>
                    <Link href={`/index`} className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-white mt-4 md:mt-0" onClick={CerrarSesion}>Cerrar Sesión</Link>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;