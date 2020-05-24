console.info("Load service script")
console.info(axios)


axios.get('https://random.dog/woof.json')
.then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data)
    let data = response.data
    let imagen = document.getElementById("mi_imagen")
    imagen.src = data.url
})  

