import React from "react";
import Link from "next/link";


const NavbarInicio = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
                    <span className="ml-3 text-xl">Daskolar</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href="/">Home</Link> 
                    <Link className="mr-5 hover:text-gray-900" href="/register">Registrarse</Link>
                </nav>
                <Link className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-white mt-4 md:mt-0" href="/login">
                    Iniciar Sesión
                </Link>
            </div>
        </header>
    )
}
export default NavbarInicio;