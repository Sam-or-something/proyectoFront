import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavbarInicio from '@/components/NavbarInicio'



export default function Home() {
  return (
    <main>
      <NavbarInicio></NavbarInicio>
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <Image src={"/images/DaskolarLogo.png"} width={417.5} height={216} alt="logo"/>
    <div className="text-center lg:w-2/3 w-full">
      <p className="mb-8 leading-relaxed">Daskolar es una plataforma en la que los docentes puedan ingresar, y luego mirar o actualizar, información sobre sus alumnos, como notas y comentarios, de manera intuitiva y eficiente.</p>
      <div className="flex justify-center">
        <Link href={`/register`} className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Registrar</Link>
        <Link href={`/login`} className="ml-4 inline-flex border-0 py-2 px-6 text-white bg-blue-500 focus:outline-none  hover:bg-blue-600 rounded text-lg">Iniciar Sesión</Link>
      </div>
    </div>
  </div>
      </section>
    </main>
  )
}
