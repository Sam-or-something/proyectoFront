
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';

const curso = {
    anio: "12",
    name: "5tF",
    materia: "matematica"
}




export default function cursos() {
    

    

    return (
        <main className={`grid grid-cols-4 gap-3`}>
            {CartaCurso(curso)}
        </main>
    )
}




//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio