import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


const info = {
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
}

const alumnosData = info.alumnos


export default function cursos() {
    const Router = useRouter()
    const cursoId = Router.query.cursoId
    const alumnos = info.alumnos

    return (
        <main className="" >
            <Navbar></Navbar>
            <div className="flex min-h-screen flex-col items-center justify-between p-24" id="container">
                <div className="absolute inset-0 bg-grid-slate-100not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
                        <table className="table- bg-white shadow-md rounded border-collapse table-auto w-full text-sm" border={3} id="tabla">
                            <caption>Información Sobre los Alumnos</caption>
                            <thead className="table-header-group">
                                <tr >
                                    <th className="py-2 px-4 border border-slate-300">Alumno</th>
                                    <th className="py-2 px-4 border border-slate-300">Trabajos Prácticos</th>
                                    <th className="py-2 px-4 border border-slate-300">Notas</th>
                                    <th className="py-2 px-4 border border-slate-300">Comentarios</th>
                                </tr>
                            </thead>
                            <tbody className="" >
                                {alumnosData.map((alumno) => (
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
const jwtToken =""

export const getStaticProps = (async (_cursoId) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , authorization : `bearer ${jwtToken}`}
    })
    const info = await res.json()
    return { props: { info } }
  }) satisfies GetStaticProps<{
    info: Info
  }>