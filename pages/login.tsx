'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Result } from 'postcss';
import { FormEvent } from 'react'
import NavbarInicio from '@/components/NavbarInicio';
import { useCookies } from "react-cookie"



const inter = Inter({ subsets: ['latin'] })



export default function logIn() {
    const HandleSubmit = async (event: FormEvent) => {

        event.preventDefault()

        const form = event.target as HTMLFormElement

        console.log(form.email.value);
        console.log(form.password.value);


        const data = {
            email: form.email.value as string,
            password: form.password.value as string,
        }

        const response = await fetch('https://proyecto-jade-eta.vercel.app/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })


        const devol = await response.json();


        // Set a cookie with the secure and HttpOnly flags
        const token = devol.token;




        if (devol.success === "true") {
            alert("Iniciaste sesion correctamente")

            const [cookie, setCookie] = useCookies(["jwtToken"])

            setCookie('jwtToken', token ,{
                httpOnly: true,
                path:"/"
            })
        }
    }

    return (
        <main>
            <NavbarInicio></NavbarInicio>
            <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl">
                    <div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    EMAIL
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name='email' type="email" />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    CONTRASEÑA
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" name='password' type="password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <Link className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800 px-3" href="/register">
                                No tienes cuenta? Registrate aquí.
                            </Link>

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Inicia sesion
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>

    )
}
