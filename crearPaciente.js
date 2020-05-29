//Registro de pacientes
url = "http://161.35.110.128/api/v1/paciente"

axios({
    method: 'post',
    url: url,
    data: {        
        "custom_id": "desdeApi",
        "name": "Ana",
        "age": "21",
        "b64": "sring",
        "image_url": "https://purr.objets-us-east-1.dream.io/i/lotta.png",
        "gender": "f",
        "eps": "sura"    
    },
    headers:{
        'content-type': 'application/json',
        'Authorization': "Bearer "+ localStorage.getItem("token")
    }
}).then(response =>{
    console.log(response)
})


