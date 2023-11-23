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
        <main>
            <div className="grid grid-cols-4 gap-3">
                {cursos.map((curso: any) => (
                    <CartaCurso curso={curso} key={curso.id} />
                ))}
            </div>
        </main>

    );

}
