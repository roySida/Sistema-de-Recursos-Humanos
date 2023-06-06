window.onload = init 


function init(){
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        //cargar los datos del empleado con base en su correo
        loadDatos()

        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Inicio2.html"
        })

        document.querySelector('.btn-primary').addEventListener('click', update)
    } else {
        window.location.href = "PaginaInicial2.html"
    }
}

function loadDatos(){
    var correo = localStorage.getItem("correo")
    axios.get("http://localhost:3000/pokemon/email/" + correo, headers).then(function(res){
        //console.log(res)
        //llenamos los input
        var datos = res.data.message
        document.querySelector('#nombre').value = `${datos[0].nombre}`
        document.querySelector('#apellido').value = `${datos[0].apellido}`
        document.querySelector('#email').value = `${datos[0].correo}`
        document.querySelector('#telefono').value = `${datos[0].telefono}`
        document.querySelector('#direccion').value = `${datos[0].direccion}`
    }).catch(function(err){
        console.log(err)
    })
}

function update(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var telefono = document.getElementById('telefono').value
    var correo = document.getElementById('email').value
    var direccion = document.getElementById('direccion').value

    axios.put('http://localhost:3000/pokemon', {
            user_nombre: nombre,
            user_apellido: apellido,
            user_telefono: telefono,
            user_correo: correo,
            user_direccion: direccion
    }, headers).then(function(res){
        console.log(res)
        alert("Modificacion exitosa")
        window.location.href = "Inicio2.html"
    }).catch(function(err){
        console.log(err)
    })
}