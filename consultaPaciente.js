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
        //if (response.data == '[]') {console.log("Sin registro")};
        console.log(response.data);
        if (response.data.length==0){
            window.alert("EL USUARIO NO ESTA REGISTRADO")
        }
        else{
        
        var nombre_data = response.data.name;
        document.getElementById("nombre").innerHTML=nombre_data;
        
        var custom_id_data = response.data.custom_id;
        document.getElementById("custom_id").innerHTML=custom_id_data;
        
        var genero_data = response.data.gender;
        document.getElementById("genero").innerHTML=genero_data;

        var eps_data = response.data.eps;
        document.getElementById("eps").innerHTML=eps_data;

        var edad_data = response.data.age;
        document.getElementById("edad").innerHTML=edad_data;

        var imagen_data = response.data.image_url;
        console.log(imagen_data);
        document.getElementById("img").src= imagen_data;
        }
    })
} 
