import Navbar from "@/components/Navbar";
import { useRouter } from "next/dist/client/router";
import type { InferGetServerSidePropsType, GetServerSideProps, } from 'next'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from "react";
import Link from "next/link";


/*const info = {
    "alumnos": [
        {
            "id": 40,
            "Name": "Sam",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 9,
                    "idMod": 9,
                    "nota": "10",
                    "comentario": "excelente"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 13,
                    "idMod": 10,
                    "nota": "9",
                    "comentario": "muy bien"
                }
            ]
        },
        {
            "id": 41,
            "Name": "Sofia",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 10,
                    "idMod": 9,
                    "nota": "6",
                    "comentario": "suficiente, falto desarrollar"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 14,
                    "idMod": 10,
                    "nota": "8",
                    "comentario": "bien"
                }
            ]
        },
        {
            "id": 42,
            "Name": "Juan",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 11,
                    "idMod": 9,
                    "nota": "2",
                    "comentario": "sin terminar"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 15,
                    "idMod": 10,
                    "nota": "1",
                    "comentario": "hablar sobre falta de comprension de consigna"
                }
            ]
        },
        {
            "id": 43,
            "Name": "Santiago",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 12,
                    "idMod": 9,
                    "nota": "0",
                    "comentario": "sin completar"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 16,
                    "idMod": 10,
                    "nota": "0",
                    "comentario": "sin comentario disponible"
                }

            ]
        }
    ]
} */


export const getServerSideProps = (async (context) => {

    const cursoId = context.query.cursoId
    const authToken = context.req.headers.cookie?.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

    const res = await fetch(`https://proyecto-jade-eta.vercel.app/cursos/${cursoId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', authorization: `bearer ${authToken}`,
        }
    })
    const info = await res.json()
    return { props: { info } }
}) satisfies GetServerSideProps<{
    info: Info
}>



export default function CursosId({ info }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const alumnosData = info.alumnos
    const Router = useRouter()
    const cursoId = Router.query.cursoId

    return (
        <main className="" >
            <Navbar></Navbar>

            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Información del Curso</h1>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <div className="absolute inset-0 bg-grid-slate-100not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">

                        <table className="table- bg-white shadow-md rounded border-collapse table-auto w-full text-sm" border={2} id="tabla">
                            <thead className="table-header-group">
                                <tr >
                                    <th className="py-2 px-4 border border-slate-300">Alumno</th>
                                    <th className="py-2 px-4 border border-slate-300">Trabajos Prácticos</th>
                                    <th className="py-2 px-4 border border-slate-300">Notas</th>
                                    <th className="py-2 px-4 border border-slate-300">Comentarios</th>
                                </tr>
                            </thead>
                            <tbody className="" >
                                {alumnosData.map((alumno: { id: Key | null | undefined; Name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; trabajos: any[]; }) => (
                                    <tr className="border border-slate-300" key={alumno.id}>
                                        <td className="py-2 px-4 border border-slate-300">{alumno.Name}</td>
                                        <td className="">
                                            {alumno.trabajos.map((trabajo) => (
                                                <div className="py-2 px-4 border border-slate-300 " key={trabajo.idTrabajo}>
                                                    {trabajo.Name}
                                                </div>
                                            ))}
                                        </td>
                                        <td className="items-center border border-slate-300 ">
                                            {alumno.trabajos.map((trabajo) => (
                                                <div className="py-2 px-4 text-center border border-slate-300" key={trabajo.idTrabajo}>
                                                    {trabajo.nota}
                                                </div>
                                            ))}
                                        </td>
                                        <td >
                                            {alumno.trabajos.map((trabajo) => (
                                                <div className="py-2 px-4 border border-slate-300 border-collapse items-center" key={trabajo.idTrabajo}>
                                                    {trabajo.comentario}
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <Link href={`/cursos/${cursoId}/crear-trabajos`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Crear Trabajos</Link>

                        <Link href={`/cursos/${cursoId}/editar`} className="flex ml-auto bg-blue-500 hover:bg-blue-700 text-white border-0 py-2 px-6 focus:outline-none rounded">Editar</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}


type Info = {
    alumnos: {
        id: number;
        Name: string;
        trabajos: {
            Name: string;
            idTrabajo: number;
            idMod: number;
            nota: string;
            comentario: string;
        }[];
    }[];
}

