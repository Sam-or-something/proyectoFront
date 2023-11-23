import Navbar from "@/components/Navbar";
import { info } from "console";
import { useRouter } from "next/router";

export default function cursos() {
    const Router = useRouter()
    const cursoId = Router.query.cursoId


    const info = {
        "alumnos": [
            {
                "id": 40,
                "Name": "Sam",
                "trabajos": [
                    {
                        "Name": "dear god please help ill stop being gay",
                        "idTrabajo": 7,
                        "nota": "0",
                        "comentario": ""
                    },
                    {
                        "Name": "HEYYYY",
                        "idTrabajo": 8,
                        "nota": "0",
                        "comentario": ""
                    }
                ]
            },
            {
                "id": 41,
                "Name": "Sofia",
                "trabajos": [
                    {
                        "Name": "dear god please help ill stop being gay",
                        "idTrabajo": 7,
                        "nota": "0",
                        "comentario": ""
                    },
                    {
                        "Name": "HEYYYY",
                        "idTrabajo": 8,
                        "nota": "0",
                        "comentario": ""
                    }
                ]
            },
            {
                "id": 42,
                "Name": "Juan",
                "trabajos": [
                    {
                        "Name": "dear god please help ill stop being gay",
                        "idTrabajo": 7,
                        "nota": "0",
                        "comentario": ""
                    },
                    {
                        "Name": "HEYYYY",
                        "idTrabajo": 8,
                        "nota": "0",
                        "comentario": ""
                    }
                ]
            },
            {
                "id": 43,
                "Name": "Santiago",
                "trabajos": [
                    {
                        "Name": "dear god please help ill stop being gay",
                        "idTrabajo": 7,
                        "nota": "0",
                        "comentario": ""
                    },
                    {
                        "Name": "HEYYYY",
                        "idTrabajo": 8,
                        "nota": "0",
                        "comentario": ""
                    }
                ]
            }
        ]
    }

    return (
        <main className="" >
            <Navbar></Navbar>
            <div className="flex min-h-screen flex-col items-center justify-between p-24" id="container">
                <table className="table-auto bg-white">
                    <caption>Información Sobre los Alumnos</caption>
                    <tbody>
                        <tr>
                            <th colSpan={2} rowSpan={2}>Alumnos</th>
                            <th colSpan={3} scope="colgroup">Clothes</th>
                            <th colSpan={2} scope="colgroup">Accessories</th>
                        </tr>
                        <tr>
                            <th scope="col">Trousers</th>
                            <th scope="col">Skirts</th>
                            <th scope="col">Dresses</th>
                            <th scope="col">Bracelets</th>
                            <th scope="col">Rings</th>
                        </tr>
                        <tr>
                            <th rowSpan= {3} scope="rowgroup">Belgium</th>
                            <th scope="row">Antwerp</th>
                            <td>56</td>
                            <td>22</td>
                            <td>43</td>
                            <td>72</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <th scope="row">Gent</th>
                            <td>46</td>
                            <td>18</td>
                            <td>50</td>
                            <td>61</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <th scope="row">Brussels</th>
                            <td>51</td>
                            <td>27</td>
                            <td>38</td>
                            <td>69</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <th rowSpan={2} scope="rowgroup">The Netherlands</th>
                            <th scope="row">Amsterdam</th>
                            <td>89</td>
                            <td>34</td>
                            <td>69</td>
                            <td>85</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <th scope="row">Utrecht</th>
                            <td>80</td>
                            <td>12</td>
                            <td>43</td>
                            <td>36</td>
                            <td>19</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
