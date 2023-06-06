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

        document.querySelector('.btn-primary').addEventListener('click', eliminar)
    } else {
        window.location.href = "PaginaInicial2.html"
    }
}

var correo = localStorage.getItem("correo")

function loadDatos(){
    axios.get("http://localhost:3000/pokemon/email/" + correo, headers).then(function(res){
        //console.log(res)
        //llenamos los input
        var datos = res.data.message
        var body = document.querySelector('table')
        body.innerHTML += `<tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Direccion</th>
                            </tr>
                            <tr>
                                <td>${datos[0].nombre}</td>
                                <td>${datos[0].apellido}</td>
                                <td>${datos[0].telefono}</td>
                                <td>${datos[0].correo}</td>
                                <td>${datos[0].direccion}</td>
                            </tr>`
    }).catch(function(err){
        console.log(err)
    })
}

function eliminar(){
    axios.delete('http://localhost:3000/pokemon/' + correo, headers).then(function(res){
        console.log(res)
        alert("Empleado eliminado")
        window.location.href = "Inicio2.html"
    }).catch(function(err){
        console.log(err)
    })
}