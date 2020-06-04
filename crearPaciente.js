window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('imagen').addEventListener("change",SubirImagen,false);
  document.getElementById('datos').addEventListener("submit", Registro, false);
}

function SubirImagen() {
  var file    = document.querySelector('input[type=file]').files[0];  
  var url = 'imagenes/'+file.name;
  document.getElementById("img").src= url;
}

function Registro(event){
  event.preventDefault();
  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var eps = document.getElementById("eps").value;
  var imagen = 'imagenes/'+document.querySelector('input[type=file]').files[0].name;

    var paciente ={"custom_id":id,"name":nombre,"age":edad,"b64":"string","image_url":imagen,"gender":genero,"eps":eps};

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
            var estado = response.statusText
            if(estado=='OK'){
                var ventana = window.confirm("El paciente ha sido registrado con éxito. Ahora puede ser consultado en la sección consulta. ")
                if(ventana){
                  document.getElementById("id").value ="";
                  document.getElementById("nombre").value ="";
                  document.getElementById("edad").value="";
                  document.getElementById("genero").value="";
                  document.getElementById("eps").value="";
                  document.getElementById("img").src= "";
                }
            }
            
    });

}


