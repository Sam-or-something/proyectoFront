
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

const curso = [{
    id: 1134,
    anio: "12",
    name: "5tF",
    materia: "matematica"
}, {
    id: 245,
    anio: "11",
    name: "4tc",
    materia: "ingles"
}, {
    id: 1,
    anio: "11",
    name: "4tf",
    materia: "ingles"
},]



export default function () {

    return (
        
        <main className = "">
            <Navbar></Navbar>
            <div className="grid grid-cols-4" >
                {curso.map((curso: any) => (
                    CartaCurso(curso)
                ))}
            </div>
        </main>
    )

}



//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio