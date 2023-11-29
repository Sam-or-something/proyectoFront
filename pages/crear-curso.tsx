'use client'
import { Cookie, Inter } from 'next/font/google'
import { FormEvent } from 'react'
import { useRouter } from "next/navigation"
import cookie from 'cookie'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function CrearCurso() {

    const Router = useRouter()

    // Manejar el envío del formulario
    const handleSubmit = async (event: FormEvent) => {
        //Prevenir que se refresque la pagina
        event.preventDefault()

// Extraer datos del formulario
        const form = event.target as HTMLFormElement
        const data = {
            Name: form.Name.value as string,
            materia: form.materia.value as string,
            anio: form.anio.value as number,
            alumnos: form.alumnos.value as string,
            profesores: form.profesores.value as string

        }

        // Obtener el token de autorización desde el almacenamiento de sesion
        const authToken = sessionStorage.getItem('authToken')

        //POST para crear un nuevo curso
        const response = await fetch(`https://proyecto-jade-eta.vercel.app/crear-curso`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `bearer ${authToken}`},
                body: JSON.stringify(data)
            })

        const devol = await response.json()

        // Redirigir a la página de cursos si es exitoso; de lo contrario, mostrar un mensaje de error
        if (devol.success == 'true') {
            Router.push('/cursos')
        } else {
            alert(`Ha ocourrido un error al crear curso. ${devol.comment} .Intente otra vez.`)
        }

    }
    return (
        <main>
            <Navbar></Navbar>
            <div className={`flex min-h-screen flex-col items-center justify-between p-24`} >
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl"  >
                    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-6">
                        Crear Curso
                    </label>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Name">
                                Nombre de Curso:
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" id="Name" name="Name" type="text" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="anio">
                                Seleccionar Año:
                            </label>
                            <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" name='anio' id='anio'>
                                <option value="1">1 grado</option>
                                <option value="2">2 grado</option>
                                <option value="3">3 grado</option>
                                <option value="4">4 grado</option>
                                <option value="5">5 grado</option>
                                <option value="6">6 grado</option>
                                <option value="7">7 grado</option>
                                <option value="8">1 año</option>
                                <option value="9">2 año</option>
                                <option value="10">3 año</option>
                                <option value="11">4 año</option>
                                <option value="12">5 año</option>
                                <option value="12">6 año</option>
                            </select>
                        </div>

                        <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="materia">
                                Nombre de la Materia:
                            </label>
                            <input className="appearaappearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="materia" name="Materia" type="text" />
                        </div>
                        <div className="w-full md:w-1/1 px-3 mb-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="alumnos">
                                Ingresar alumnos:
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-s text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Ej: Juan Perez;Maria Cruz; etc." id="alumnos" name="alumnos" type="text" />

                        </div><div className="w-full md:w-1/1 px-3 mb-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="alumnos">
                                Ingresar el correo de otros profesores:
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-s text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Ej: pepito@institucion.com;papita@institucion.com" id="profesores" name="profesores" type="text" />
                        </div>
                    </div>



                    <div className="flex items-center justify-end">
                        <button className="object-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}
