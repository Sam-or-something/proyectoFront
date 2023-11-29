import React from "react";
import Link from "next/link";
import Image from 'next/image'


function CartaCrearCurso() {
   return (
       <main key="crearCurso">
           <Link href={`/crear-curso`} className="items-center flex flex-col gap-10 p-10" >
               <div className="bg-neutral-100 relative flex w-auto max-w-md flex-col items-start gap-2 overflow-hidden rounded-lg p-4 shadow-lg">
                   <Image className="justify-between" src={"/images/plus.png"} width={48} height={48} alt="simbolo de +"/>
                   <h2 className="text-xl font-semibold">Crear Nuevo Curso</h2>
               </div>
           </Link>
       </main>




   )
}
export default CartaCrearCurso