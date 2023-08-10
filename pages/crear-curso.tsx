import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FormEvent } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function crearCurso() {
    const handleSubmit = async (event: FormEvent) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Cast the event target to an html form
        const form = event.target as HTMLFormElement
    
        // Get data from the form.
        const data = {
          Name: form.Name.value as string,
          Materia: form.Materia.value as string,
        }
        //const response = await fetch('/api/loginForm',
        const response = await fetch('http://localhost:9000/register',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
    
    
        const result = await response.json()
        console.log(result)
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl">
                <div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Name">
                                Nombre de Curso
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Name" name="Name" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Materia">
                                Nombre de la Materia
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Materia" name="Materia" type="text" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )// anio, materia, Name, prof -> pide el token. Ninguno con requirement. Name si o si (nombre de curso tipo TIC5F)
    // buscar como hacer drop down lists
    
    }
}