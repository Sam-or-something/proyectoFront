import CartaCurso from "@/components/cartaCurso";

const cursos = [{
    id: 1134,
    anio: "12",
    name: "5tF",
    materia: "matematica"
}, {
    id: 245,
    anio: "11",
    name: "4tc",
    materia: "ingles"
}, {
    id: 1,
    anio: "11",
    name: "4tf",
    materia: "ingles"
},]


export default function () {

    return (
        <div className="">
            <div className="grid grid-cols-4" >
                {cursos.map((curso: any) => (
                    CartaCurso(curso)
                ))}
            </div>
        </div>
    )

}

    


