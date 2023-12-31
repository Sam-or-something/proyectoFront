import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function CartaCurso(curso) {
    return (
        <main key={curso.id}>
            <Link href={`/cursos/${curso.id}`} className=" flex flex-col gap-10 p-10" >
                <div className="bg-neutral-100 relative flex w-auto max-w-md flex-col items-start gap-2 overflow-hidden rounded-lg p-4 shadow-lg">
                    <h2 className="text-2xl font-semibold">{curso.Name}</h2>
                    <ul className="text-base">
                        <li>{curso.anio}</li>
                        <li>{curso.materia}</li>
                    </ul>
                </div>
            </Link>
        </main>


    )
}
export default CartaCurso