
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';

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


export default function cursos() {




    return (
        <main>
            <div className="grid grid-cols-4 gap-3">
                {curso.map((curso: any) => (
                    <CartaCurso curso={curso} key={curso.id} />
                ))}
            </div>
        </main>
    )
}




//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio