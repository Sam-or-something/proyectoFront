import type { InferGetServerSidePropsType, GetServerSideProps, } from 'next'
import Navbar from '@/components/Navbar'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from 'react';
import { FormEvent } from 'react'
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';

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


    const res = await fetch(`http://localhost:9000/cursos/${cursoId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbW15QGhvbGEuY29tIiwiaWQiOiIxMCIsImlhdCI6MTcwMTAzNzE5NywiZXhwIjoxNzAxNjQxOTk3fQ.FfFe0O5gY19ZrR19IUlv2IXgJ8hG40dn8MsSWveyi1c`,
        }
    })
    const info = await res.json()
    return { props: { info } }
}) satisfies GetServerSideProps<{
    info: Info
}>


export default function CursosEditar({ info }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    
    const Router = useRouter();
    const cursoId = Router.query.cursoId
    const [alumnosInfo] = useState(info.alumnos);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formData = new FormData(event.currentTarget);
        console.log(formData)
        const updatedAlumnosInfo = alumnosInfo.map((alumno: { trabajos: any[]; id: any; }) => {
            const updatedTrabajos = alumno.trabajos.map((trabajo) => {
                const newNota = formData.get(`${trabajo.idTrabajo}${trabajo.nota}`) as string;
                const newComentario = formData.get(`${trabajo.idTrabajo}${trabajo.comentario}`) as string;
                

                return {
                    ...trabajo,
                    Name: trabajo.Name,
                    nota: newNota,
                    comentario: newComentario
                };
            });

            return {
                ...alumno,
                trabajos: updatedTrabajos,
            };
        });
        console.log(cursoId)
        console.log(updatedAlumnosInfo)

        const response = await fetch(`http://localhost:9000/cursos/${cursoId}/editar`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbW15QGhvbGEuY29tIiwiaWQiOiIxMCIsImlhdCI6MTcwMTAzNzE5NywiZXhwIjoxNzAxNjQxOTk3fQ.FfFe0O5gY19ZrR19IUlv2IXgJ8hG40dn8MsSWveyi1c`},
                body: JSON.stringify({alumnos: updatedAlumnosInfo})
            })


        const devol = await response.json()


        
        if(devol.success === true){
            Router.replace(`/cursos/${cursoId}`)
        }

    }
    return (
        <main className="" >
            <Navbar></Navbar>
            <div className="flex min-h-screen flex-col items-center justify-between p-24" id="container">
                <form onSubmit={handleSubmit}>
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
                                {info.alumnos.map((alumno: { id: Key | null; Name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null ; trabajos: any[]; }) => (
                                    <tr className="border border-slate-300" key={alumno.id}>
                                        <td className="py-2 px-4 border border-slate-300" >{alumno.Name}</td>
                                        <td className="">
                                            {alumno.trabajos.map((trabajo: { idTrabajo: Key | null ; Name: string; }) => (
                                                <div className="py-2 px-4 border border-slate-300 " key={trabajo.idTrabajo}>
                                                    {trabajo.Name}
                                                </div>
                                            ))}
                                        </td>
                                        <td className="items-center border border-slate-300 ">
                                            {
                                            alumno.trabajos.map((trabajo: { idTrabajo: Key | null ; nota: string ; }) => (
                                                
                                                <div className="py-2 px-4 text-center border border-slate-300" key={trabajo.idTrabajo}>
                                                    <input type="text" defaultValue={trabajo.nota} id={`${trabajo.idTrabajo}${trabajo.nota}`} name={`${trabajo.idTrabajo}${trabajo.nota}`} key={`${trabajo.idTrabajo}${trabajo.nota}`} />
                                                </div>
                                            ))}
                                        </td>
                                        <td >
                                            {alumno.trabajos.map((trabajo: { idTrabajo: Key | null ; comentario: string; }) => (
                                                <div className="py-2 px-4 border border-slate-300 border-collapse items-center" key={trabajo.idTrabajo}>
                                                    <input type="text" defaultValue={trabajo.comentario} id={`${trabajo.idTrabajo}${trabajo.comentario}`} name={`${trabajo.idTrabajo}${trabajo.comentario}`} key={`${trabajo.idTrabajo}${trabajo.comentario}`}/>
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex items-center justify-end">
                            <button className="object-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}