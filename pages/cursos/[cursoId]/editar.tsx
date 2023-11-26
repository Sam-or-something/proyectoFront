import type { InferGetServerSidePropsType, GetServerSideProps, } from 'next'
import Navbar from '@/components/Navbar'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
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


export const getServerSideProps = (async (context) => {
    
    const cursoId = context.query.cursoId
    
    console.log(cursoId)
    
    const res = await fetch(`http://localhost:9000/cursos/${cursoId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , authorization : `bearer `,
    }
    })
    const info = await res.json()
    return { props: { info } }
  }) satisfies GetServerSideProps<{
    info: Info
  }>


export default function cursosEditar({info} : InferGetServerSidePropsType<typeof getServerSideProps>){
    const alumnosData = info.alumnos
    return (
        <main className="" >
            <Navbar></Navbar>
            <div className="flex min-h-screen flex-col items-center justify-between p-24" id="container">
                <div className="absolute inset-0 bg-grid-slate-100not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
                    <form action="">
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
                                {alumnosData.map((alumno: { id: Key | null | undefined; Name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; trabajos: any[]; }) => (
                                    <tr className="border border-slate-300" key={alumno.id}>
                                        <td className="py-2 px-4 border border-slate-300">{alumno.Name}</td>
                                        <td className="">
                                            {alumno.trabajos.map((trabajo) => (
                                                <div className="py-2 px-4 border border-slate-300 " key={trabajo.idTrabajo}>
                                                    <input type="text" value={trabajo.Name}/>
                                                </div>
                                            ))}
                                        </td>
                                        <td className="items-center border border-slate-300 ">
                                            {alumno.trabajos.map((trabajo) => (
                                                <div className="py-2 px-4 text-center border border-slate-300" key={trabajo.idTrabajo}>
                                                    <input type="text" value={trabajo.nota}/>
                                                </div>
                                            ))}
                                        </td>
                                        <td >
                                            {alumno.trabajos.map((trabajo) => (
                                                <div className="py-2 px-4 border border-slate-300 border-collapse items-center" key={trabajo.idTrabajo}>
                                                    <input type="text" value={trabajo.comentario} />
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </main>
    )
}