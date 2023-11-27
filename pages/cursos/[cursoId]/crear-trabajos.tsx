'use client'
import { Inter } from 'next/font/google'
import { FormEvent } from 'react'
import { useRouter } from "next/router"
import { MultiSelect } from "react-multi-select-component"

const inter = Inter({ subsets: ['latin'] })



export default function CrearTrabajo() {

    const Router = useRouter()
    const cursoId = Router.query.cursoId
    const handleSubmit = async (event: FormEvent) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Cast the event target to an html form
        const form = event.target as HTMLFormElement

        // Get data from the form.
        const data = {
            Name: form.Name.value as string,
            cursoId: cursoId as string,
        }
        
        const response = await fetch('http://localhost:9000/crear-trabajo',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', authentication: `Bearer ` },
                body: JSON.stringify(data)
            })


        const devol = await response.json()


        if (devol.success) {
            Router.push(`/cursos/${cursoId}`)
        } else {
            alert("Ha ocourrido un error al crear curso. Intente otra vez.")
        }

        console.log(devol)
    }
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl"  >
                <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-6">
                    Crear Trabajo
                </label>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Name">
                            Nombre del Trabajo:
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white" id="Name" name="Name" type="text" />
                    </div>
                </div>

                

                <div className="flex items-center justify-end">
                    <button className="object-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </main>
    ) 
}
