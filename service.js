console.info("Load service script")
console.info(axios)

function enviar(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
        
}

console.log(user)
console.log(password)

let url = "http://161.35.110.128/api/v1/login/access-token"
const requestBody = {
  username: user,
  password: password,
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

axios({
    method: 'post',
    url: url,
    data: Qs.stringify({
      username: user,
      password: password
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(response=>{
      console.log(response)
      localStorage.setItem("token", response.data.access_token)
      localStorage.setItem("status",response.statusText)
    
   })

