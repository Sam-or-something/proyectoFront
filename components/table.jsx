import { useState, useEffect } from 'react';

const info = {
    "alumnos": [
        {
            "id": 40,
            "Name": "Sam",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 9,
                    "idMod": 9,
                    "nota": "10",
                    "comentario": "excelente"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 13,
                    "idMod": 10,
                    "nota": "9",
                    "comentario": "muy bien"
                }
            ]
        },
        {
            "id": 41,
            "Name": "Sofia",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 10,
                    "idMod": 9,
                    "nota": "6",
                    "comentario": "suficiente, falto desarrollar"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 14,
                    "idMod": 10,
                    "nota": "8",
                    "comentario": "bien"
                }
            ]
        },
        {
            "id": 42,
            "Name": "Juan",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 11,
                    "idMod": 9,
                    "nota": "2",
                    "comentario": "sin terminar"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 15,
                    "idMod": 10,
                    "nota": "1",
                    "comentario": "hablar sobre falta de comprension de consigna"
                }
            ]
        },
        {
            "id": 43,
            "Name": "Santiago",
            "trabajos": [
                {
                    "Name": "Prueba",
                    "idTrabajo": 12,
                    "idMod": 9,
                    "nota": "0",
                    "comentario": "sin completar"
                },
                {
                    "Name": "TP1",
                    "idTrabajo": 16,
                    "idMod": 10,
                    "nota": "0",
                    "comentario": ""
                }
            ]
        }
    ]
}





const addTable = ({ info }) => {
    const [alumnosData, setAlumnosData] = useState;

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
export default addTable;

