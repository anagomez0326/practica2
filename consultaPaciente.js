window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('dato-id').addEventListener("submit", Consulta, false);
}

function Consulta(event){
  event.preventDefault();
  var idConsulta = document.getElementById("id-consulta").value;

    axios.get('http://161.35.110.128/api/v1/paciente/'+ idConsulta)
    .then (function (response) {
        // handle success
        console.log(response);
        
    })
} 
