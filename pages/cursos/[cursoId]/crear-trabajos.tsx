import React from 'react'
import { Inter } from 'next/font/google'
import { FormEvent } from 'react'
import { useRouter } from "next/router"
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })



export default function CrearTrabajo() {
    const Router = useRouter()
    const cursoId = Router.query.cursoId

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()// Stop the form from submitting and refreshing the page.
        
        
        

        // Cast the event target to an html form
        const form = event.target as HTMLFormElement

        // Get data from the form.
        const data = {
            Name: form.Name.value as string,
            cursoId: cursoId as string,
        }
        console.log(data)

        const authToken = sessionStorage.getItem('authToken')

        const response = await fetch(`https://proyecto-jade-eta.vercel.app/cursos/${cursoId}/crear-trabajo`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
                //headers: { 'Content-Type': 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbW15QGhvbGEuY29tIiwiaWQiOiIxMCIsImlhdCI6MTcwMTAzNzE5NywiZXhwIjoxNzAxNjQxOTk3fQ.FfFe0O5gY19ZrR19IUlv2IXgJ8hG40dn8MsSWveyi1c` },
                body: JSON.stringify(data)
            })


        const devol = await response.json()
        
        console.log(devol)
        if (devol.success ==  "true") {
            Router.push(`/cursos/${cursoId}`)
        }else{
            alert(`No se ha logrado crear un trabajo. ${devol.comment}.`)
        }

    }
    return (
        <main>
            <Navbar></Navbar>
            <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl'>
                <div className="">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Crear Trabajo</h2>
                    <div className="relative mb-4">
                        <label htmlFor="Name" className="leading-7 text-sm text-gray-600">Nombre del Trabajo</label>
                        <input id="Name" name="Name" type="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Guardar</button>
                </div>
            </form>
        </div>
        </main>
        
    )
}
