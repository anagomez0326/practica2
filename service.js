console.info("Load service script")
console.info(axios)

//Traer imagen

//Login
let url = "http://161.35.110.128/api/v1/login/access-token"
const requestBody = {
    username: 'grupo1',
    password: 'grupo12019',
}
const config ={
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

}

axios({
    method: 'post',
    url: url,
    data: Qs.stringify({
        username: 'grupo1',
        password: 'grupo12019'
    }),
    headers:{
        'content-type': 'application/x-www-form-urlencoded; charset=uft-8'
    }
}).then(response =>{
    localStorage.setItem("token",response.data.access_token)
})


let pacienteId = 'desdeApi'

axios.get('http://161.35.110.128/api/v1/paciente/'+ pacienteId)
.then (function (response) {
    // handle success
    console.log(response);
    console.log(response.data)
    let data = response.data
    let imagen = document.getElementById("mi_imagen")
    imagen.src = data.url
    let alerta = document.getElementById("alert")
    alerta.style.display = "none"
}) 

