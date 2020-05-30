//Registro de pacientes

function registrar(){
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let eps = document.getElementById("eps").value;
    
    console.log(id)
    console.log(nombre)
    console.log(edad)
    console.log(genero)
    console.log(eps)

console.log(localStorage.getItem("token"))
}
let URL = "http://161.35.110.128/api/v1/paciente"

axios({
    method: 'post',
    url: URL,
    data: {        
        "custom_id": id,
        "name": "ana",
        "age": "21",
        "b64": "string",
        "image_url": "https://purr.objets-us-east-1.dream.io/i/lotta.png",
        "gender": "f",
        "eps": "coomeva"    
    },
    headers:{
        'content-type': 'application/json',
        'Authorization': "Bearer "+ localStorage.getItem("token")
    }
}).then(response =>{
    console.log(response)
})


