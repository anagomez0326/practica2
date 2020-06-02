window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('datos').addEventListener("submit", Registro, false);
}

function Registro(event){
  event.preventDefault();
  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var eps = document.getElementById("eps").value;
  var image_url = document.getElementById("image_url").value;
  //var telefono = document.getElementById("Telefono").value;
  //var direccion = document.getElementById("Direccion").value;

    var paciente ={"custom_id":id,"name":nombre,"age":edad,"b64":"string","image_url":image_url,"gender":genero,"eps":eps};

    var url = "http://161.35.110.128/api/v1/paciente/"
    axios({
        method: 'post',
        url: url,
        data: paciente,
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem("token")
        }
        }).then(response=>{
            console.log(response)
    });
}


