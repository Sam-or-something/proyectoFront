
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { cookies } from 'next/headers'

// const curso = [{
//     id: 1134,
//     anio: "12",
//     name: "5tF",
//     materia: "matematica"
// }, {
//     id: 245,
//     anio: "11",
//     name: "4tc",
//     materia: "ingles"
// }, {
//     id: 1,
//     anio: "11",
//     name: "4tf",
//     materia: "ingles"
// },]
const jwtToken =cookies().get("jwtToken")
let curso: any[]

const fetchInfo = async () => {
    const response = await fetch('http://localhost:9000/cursos',
{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' , authorization : `bearer ${jwtToken}`}
})


curso = await response.json()
}


export default function () {

    return (
        <main onLoad={fetchInfo} className = "">
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