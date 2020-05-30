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
