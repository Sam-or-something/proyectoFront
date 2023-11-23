import React from "react";
import Link from "next/link";


const Navbar = () => {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <h2 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
                    <span className="ml-3 text-xl">Daskolar</span>
                </h2>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href="/">Home</Link> 
                    <Link className="mr-5 hover:text-gray-900" href="/crear-curso">Crear Cursos</Link>
                    <Link className="mr-5 hover:text-gray-900" href="/cursos">Mis Cursos</Link>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;