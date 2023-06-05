window.onload = init
var headers = {}
var url = "http://localhost:3000"

function init(){
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "inicio2.html"
        })

        document.querySelector('.btn-primary').addEventListener('click', insert)
    } else {
        window.location.href =  "PaginaInicial2.html"
    }
}

function insert(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var telefono = document.getElementById('telefono').value
    var correo = document.getElementById('email').value
    var direccion = document.getElementById('direccion').value

    axios.post('http://localhost:3000/pokemon', {
        user_nombre: nombre,
        user_apellido: apellido,
        user_telefono: telefono,
        user_correo: correo,
        user_direccion: direccion
    }, headers).then(function(res){
        console.log(res)
        alert("Empleado registrado correctamente")
        window.location.href = "Inicio2.html"
    }).catch(function(err){
        console.log(err)
    })


    /*axios({
        method: 'post',
        url: 'http://localhost:3000/pokemon',
        data: {
            user_nombre: nombre,
            user_apellido: apellido,
            user_telefono: telefono,
            user_correo: correo,
            user_direccion: direccion
        }
    }).then(function(res){
        //console.log(res)
        alert("Hola")
        window.location.href = "Inicio2.html"
    }).catch(function(err){
        console.log(err)
    })*/
}