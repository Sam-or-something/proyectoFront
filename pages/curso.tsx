import { serialize } from 'cookie';
import { useState, useEffect } from 'react';
import Cookie from 'react-cookie'

serialize

interface Trabajo {
    Name: string;
    idTrabajo: number;
    idMod: number;
    nota: string;
    comentario: string;
}

interface Alumno {
    id: number;
    Name: string;
    trabajos: Trabajo[];
}

function YourComponent({ info }: { info: { alumnos: Alumno[] } }) {
    const [alumnosData, setAlumnosData] = useState<Alumno[] | []>([]);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setAlumnosData(info.alumnos);
        }
    }, [info]);

    return (
        <main className="">
            {/* Your other components */}
            <div className="flex min-h-screen flex-col items-center justify-between p-24" id="container">
                <table className="table-auto bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4 w-xl max-w-xl" border={3} id="tabla">
                    <caption>Información Sobre los Alumnos</caption>
                    <thead>
                        <tr>
                            <th>Alumno</th>
                            <th>Trabajos Prácticos</th>
                            <th>Notas</th>
                            <th>Comentarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnosData.map((alumno) => (
                            <tr key={alumno.id}>
                                <td>{alumno.Name}</td>
                                <td>
                                    {alumno.trabajos.map((trabajo) => (
                                        <div key={trabajo.idTrabajo}>
                                            {trabajo.Name}
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {alumno.trabajos.map((trabajo) => (
                                        <div key={trabajo.idTrabajo}>
                                            {trabajo.nota}
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {alumno.trabajos.map((trabajo) => (
                                        <div key={trabajo.idTrabajo}>
                                            {trabajo.comentario}
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};


