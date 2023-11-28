import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";


function Navbar() {
    return (
        <header className="bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Image src={"/images/DaskolarLogo.png"} width={80} height={80} alt="logo"/>
                
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href={`/crear-curso`}>Crear Cursos</Link>
                    <Link className="mr-5 hover:text-gray-900" href={`/cursos`}>Mis Cursos</Link>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;