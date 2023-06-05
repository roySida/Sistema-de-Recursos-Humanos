window.onload = init 


function init(){
    if(!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "login2.html"
        })

        document.querySelector('.btn-terciary').addEventListener('click', function(){
            window.location.href = "PaginaInicial2.html"
        })
    
        document.querySelector('.btn-primary').addEventListener('click', signin)
    } else {
        window.location.href = "Inicio2.html"
    }
}

function signin(){
    var nombre = document.getElementById('input-name').value
    var correo = document.getElementById('input-mail').value
    var contraseña = document.getElementById('input-password').value

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_nombre: nombre,
            user_correo: correo,
            user_contraseña: contraseña
        }
    }).then(function(res){
        console.log(res)
        alert("Registro exitoso")
        window.location.href = "login2.html"
    }).catch(function(err){
        console.log(err)
    })
}