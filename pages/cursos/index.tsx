
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
//import { cookies } from 'next/headers'

 /*const curso = [{
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
 },] */
//const jwtToken =cookies().get("jwtToken")
    

/*const fetchInfo = async () => {
    const response = await fetch('http://localhost:9000/cursos',
{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' , authorization : `bearer `}
})


const curso = await response.json()
}*/


export default function ({ curso } : InferGetServerSidePropsType<typeof getServerSideProps>) {

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


type Curso = {
    id: number;
    anio: string;
    Name: string;
    materia: string;
}[]

export const getServerSideProps = (async (context) => {
    const {t} = context.query;
    
    const res = await fetch('http://localhost:9000/cursos', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , authorization : `bearer ${t}`}
 //      headers: { 'Content-Type': 'application/json' , authorization : `bearer 1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbW15QGhvbGEuY29tIiwiaWQiOiIxMCIsImlhdCI6MTcwMTAzNzE5NywiZXhwIjoxNzAxNjQxOTk3fQ.FfFe0O5gY19ZrR19IUlv2IXgJ8hG40dn8MsSWveyi1c`}
    })
    const curso = await res.json()
    return { props: { curso } }
  }) satisfies GetServerSideProps<{
    curso : Curso
  }>
//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio