
import CartaCurso from '@/components/cartaCurso';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

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


export default function Cursos({ curso }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <main className="">
            <Navbar></Navbar>
            <div className='flex min-h-screen flex-col  justify-between p-2 mb-24'>
                <div className="grid grid-cols-4" >
                    {curso.map((curso: any) => (
                        CartaCurso(curso)
                    ))}
                </div>
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
    const authToken = context.req.headers.cookie?.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

    const res = await fetch('http://localhost:9000/cursos', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', authorization: `bearer ${authToken}` }
    })
    const curso = await res.json()
    return { props: { curso } }
}) satisfies GetServerSideProps<{
    curso: Curso
}>

//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio