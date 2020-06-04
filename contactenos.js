var contactos=[];
window.onload=cargarEventos;

function cargarEventos(){
  document.getElementById('contacto').addEventListener("submit", Contacto, false);
}

function Contacto(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    var contacto ={"nombre":nombre,"email":email,"telefono":telefono,"mensaje":mensaje};

    contactos.push(contacto);
    console.log(contactos);
}

function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
} 