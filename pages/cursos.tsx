import { cartaCurso } from "@/components/cartaCurso"


const token = localStorage.getItem('jwtToken')

export default function cursos (clases: any[]) {
    if (token){
    clases.forEach(function(curso){
        cartaCurso(curso)
    });  
}    
    
}

export async function data() {
    const response = await fetch('http://localhost:9000/cursos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(token)
    })
    const res = await response.json()

    const clases = res.cursos
    


    return {
        clases
    }
} 




//array con json de cada curso
//sacar la informacion por cada curso


// id, name, materia, anio