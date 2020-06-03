window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('imagen').addEventListener("change",SubirImagen,false);
  document.getElementById('datos').addEventListener("submit", Registro, false);
}

function SubirImagen(){
  if (this.files && this.files[0]) {    
    var FR= new FileReader();    
    FR.addEventListener("load", function(e) {
      console.log(e);
      document.getElementById("img").src       = e.target.result;
      // document.getElementById("b64").innerHTML = e.target.result;
      
    });     
    FR.readAsDataURL( this.files[0] );
  }
}



function Registro(event){
  event.preventDefault();
  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var eps = document.getElementById("eps").value;
  var imagen = document.getElementById("img").src;

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
    });
}


