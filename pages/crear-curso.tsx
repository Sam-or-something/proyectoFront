'use client'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FormEvent } from 'react'
import logIn from './login'
import { useRouter } from "next/navigation"



const inter = Inter({ subsets: ['latin'] })

export default function crearCurso() {

    const router = useRouter()

    const handleSubmit = async (event: FormEvent) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Cast the event target to an html form
        const form = event.target as HTMLFormElement

        // Get data from the form.
        const data = {
            Name: form.Name.value as string,
            materia: form.materia.value as string,
            anio: form.anio.value as string,
            alumnos: form.alumnos.value as string,
            token: localStorage.getItem('jwtToken') as string,
        }
        
        const response = await fetch('http://localhost:9000/crear-curso',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })


        const devol = await response.json()


        if (devol.success) {
            router.push('/cursos')
        } else {
            alert("Ha ocourrido un error al crear curso. Intente otra vez.")
        }

        console.log(devol)
    }
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
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
                            <option value="1">1˚ año</option>
                            <option value="2">2˚ año</option>
                            <option value="3">3˚ año</option>
                            <option value="4">4˚ año</option>
                            <option value="5">5˚ año</option>
                            <option value="6">6˚ año</option>
                            <option value="7">7˚ año</option>
                            <option value="8">8˚ año</option>
                            <option value="9">9˚ año</option>
                            <option value="10">10˚ año</option>
                            <option value="11">11˚ año</option>
                            <option value="12">12˚ año</option>
                            <option value="12">13˚ año</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="materia">
                            Nombre de la Materia:
                        </label>
                        <input className="appearaappearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="materia" name="materia" type="text" />
                    </div>
                    <div className="w-full md:w-1/1 px-3 mb-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="alumnos">
                        Ingresar alumnos:
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-s text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Ej: Juan Perez; Maria Cruz; etc." id="alumnos" name="alumnos" type="text"/>
                    </div>
                </div>

                

                <div className="flex items-center justify-end">
                    <button className="object-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </main>
        // anio, materia, Name, prof -> pide el token. Ninguno con requirement. Name si o si (nombre de curso tipo TIC5F)
      // buscar como hacer drop down lists
    ) 
}
