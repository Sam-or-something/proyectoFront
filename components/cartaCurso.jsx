import { useRouter } from "next/navigation"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import React from "react";



const CartaCurso = (curso) => {
    return (
        <main>
            <div className="flex flex-col gap-10 p-10" >
                <div className="relative flex w-auto max-w-md flex-col items-start gap-2 overflow-hidden rounded-lg p-4 shadow-lg">
                    <h2 className="text-2xl font-semibold">{curso.name}</h2>
                    <ul className="text-base">
                        <li>{curso.anio}</li>
                        <li>{curso.materia}</li>
                    </ul>
                </div>
            </div>
        </main>


    )
}
export default CartaCurso