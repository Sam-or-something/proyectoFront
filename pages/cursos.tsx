
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';

export default function cursos() {
    
    return(
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <div className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl">
                <button type="button" id="boton" className="object-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" ></button>   
            </div>

            <div>

            </div>
        </main>
    )
}

/*async function handler() {

    const data = {
        token : localStorage.getItem('jwtToken') as string,
    }
    const res = await fetch('http://localhost:9000/cursos',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
    const respuesta = await res.json()
    
    console.log(respuesta)
    return(
        respuesta
    )
}
/*
export function listaCursos({ cursos } : {cursos: any}){
    return(
        <div>
            {cursos.map((curso: any) => (
                <div key={curso.id}>
                    <p>{curso.Name}</p>
                </div>
            ))}
        </div>
    )
}
*/


//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio