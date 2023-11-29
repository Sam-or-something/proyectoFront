import type { InferGetServerSidePropsType, GetServerSideProps, } from 'next'
import Navbar from '@/components/Navbar'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from 'react';
import { FormEvent } from 'react'
import { useRouter } from 'next/router';

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
    const authToken = context.req.headers.cookie?.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

    const res = await fetch(`https://proyecto-jade-eta.vercel.app/cursos/${cursoId}/editar`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', authorization: `bearer ${authToken}`
//            'Content-Type': 'application/json', authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbW15QGhvbGEuY29tIiwiaWQiOiIxMCIsImlhdCI6MTcwMTAzNzE5NywiZXhwIjoxNzAxNjQxOTk3fQ.FfFe0O5gY19ZrR19IUlv2IXgJ8hG40dn8MsSWveyi1c`,
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

        const authToken = sessionStorage.getItem('authToken')

        const response = await fetch(`https://proyecto-jade-eta.vercel.app/cursos/${cursoId}/editar`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
                //headers: { 'Content-Type': 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbW15QGhvbGEuY29tIiwiaWQiOiIxMCIsImlhdCI6MTcwMTAzNzE5NywiZXhwIjoxNzAxNjQxOTk3fQ.FfFe0O5gY19ZrR19IUlv2IXgJ8hG40dn8MsSWveyi1c` },
                body: JSON.stringify({ alumnos: updatedAlumnosInfo })
            })


        const devol = await response.json()

        console.log(devol)

        if (devol.success == true) {
            Router.push(`/cursos/${cursoId}`)
        }else{
            alert(`No se ha logrado editar.`)
        }

    }
    return (
        <main className="" >
            <Navbar></Navbar>

            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Información del Curso</h1>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <form onSubmit={handleSubmit} >
                        <div className="absolute inset-0 bg-grid-slate-100not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">

                            <table className="table- bg-white shadow-md rounded border-collapse table-auto w-full text-sm" border={3} id="tabla">
                                
                                <thead className="table-header-group">
                                    <tr >
                                        <th className="py-2 px-4 border border-slate-300">Alumno</th>
                                        <th className="py-2 px-4 border border-slate-300">Trabajos Prácticos</th>
                                        <th className="py-2 px-4 border border-slate-300">Notas</th>
                                        <th className="py-2 px-4 border border-slate-300">Comentarios</th>
                                    </tr>
                                </thead>
                                <tbody className="" >
                                    {info.alumnos.map((alumno: { id: Key | null; Name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null; trabajos: any[]; }) => (
                                        <tr className="border border-slate-300" key={alumno.id}>
                                            <td className="py-2 px-4 border border-slate-300" >{alumno.Name}</td>
                                            <td className="">
                                                {alumno.trabajos.map((trabajo: { idTrabajo: Key | null; Name: string; }) => (
                                                    <div className="py-2 px-4 border border-slate-300 " key={trabajo.idTrabajo}>
                                                        {trabajo.Name}
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="items-center border border-slate-300 ">
                                                {
                                                    alumno.trabajos.map((trabajo: { idTrabajo: Key | null; nota: string; }) => (

                                                        <div className="py-2 px-4 text-center border border-slate-300" key={trabajo.idTrabajo}>
                                                            <input type="text" defaultValue={trabajo.nota} id={`${trabajo.idTrabajo}${trabajo.nota}`} name={`${trabajo.idTrabajo}${trabajo.nota}`} key={`${trabajo.idTrabajo}${trabajo.nota}`} />
                                                        </div>
                                                    ))}
                                            </td>
                                            <td >
                                                {alumno.trabajos.map((trabajo: { idTrabajo: Key | null; comentario: string; }) => (
                                                    <div className="py-2 px-4 border border-slate-300 border-collapse items-center" key={trabajo.idTrabajo}>
                                                        <input type="text" defaultValue={trabajo.comentario} id={`${trabajo.idTrabajo}${trabajo.comentario}`} name={`${trabajo.idTrabajo}${trabajo.comentario}`} key={`${trabajo.idTrabajo}${trabajo.comentario}`} />
                                                    </div>
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                            <button type='submit' className="flex ml-auto bg-blue-500 hover:bg-blue-700 text-white border-0 py-2 px-6 focus:outline-none rounded">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}