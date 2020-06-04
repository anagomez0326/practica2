console.info("Load service script")
console.info(axios)

window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('datos-ingreso').addEventListener("submit", Ingreso, false);
  document.getElementById('consulta').addEventListener("click",EnviarContrasena,false);
}

function EnviarContrasena(event){
    event.preventDefault();
    var user = document.getElementById("user").value;
    if(user.length==0){ 
    }else{  
      window.confirm("Se ha enviado un mensaje a el correo electrónico con el que se registró, desde allí podrá reestablecer su contraseña.")
    }
}

function Ingreso(event){
  event.preventDefault();
  var usuario = document.getElementById("user").value;
  var contrasena = document.getElementById("password").value;

  var user = {username: usuario, password: contrasena};
  let url = "http://161.35.110.128/api/v1/login/access-token"

  const requestBody = user;
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  
  axios({
    method: 'post',
    url: url,
    data: Qs.stringify(user),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(response=>{
    console.log(response)
      localStorage.setItem("token", response.data.access_token)
      localStorage.setItem("nameusuario",usuario)
      localStorage.setItem("status",response.statusText)  
      if (localStorage.getItem("status")=="OK"){
         location.href = 'menu.html'
      }         
   }).catch(error =>{
     if (error.response.status === 400) {
      alert("Usuario y/o contraseña incorrectos. Intente ingresar nuevamente los datos. Si olvidó su contraseña seleccioné la opción '¿Olvidaste tu contraseña?' para reestablecerla.");
     }
     else if (error.response.status === 422) {
      alert("Usuario y/o contraseña incorrectos.");}
   })
}






  

