const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(true);
    window.location.href="./index.html";
  };

document.getElementById("usuario").innerHTML=localStorage.getItem("nameusuario");