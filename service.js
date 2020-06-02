console.info("Load service script")
console.info(axios)

window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('datos-ingreso').addEventListener("submit", Ingreso, false);
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
      
      localStorage.setItem("token", response.data.access_token)
      localStorage.setItem("status",response.statusText)  
      if (localStorage.getItem("status")=="OK"){
        location.href = 'menu.html'
      }         
   })


}






  

