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
        loadEmpleados()

        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Agregar2.html"
        })

        //Buscar empleados por nombre
        document.querySelector('.btn-primary').addEventListener('click', loadEmpleados2)
    } else {
        window.location.href =  "PaginaInicial2.html"
    }
}

function loadEmpleados(){
    axios.get(url + "/pokemon", headers).then(function(res){
        //console.log(res)
        displayEmpleados(res.data.message)
    }).catch(function(err){
        console.log(err)
    })
}

function loadEmpleados2(){
    var nombre = document.getElementById('searchInput').value
    axios.get(url + "/pokemon/" + nombre, headers).then(function(res){
        //console.log(res)
        //Borra la tabla principal
        document.querySelector('table').innerHTML = ""
        displayEmpleados(res.data.message)
    }).catch(function(err){
        console.log(err)
    })
}

//Esto se cambia dependiendo de la interfaz
function displayEmpleados(empleados){
    var body = document.querySelector('table')
    body.innerHTML += `<tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Direccion</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                        <tr>`
    for(i = 0; i < empleados.length; i++){
        body.innerHTML += `<td>${empleados[i].nombre}</td>
                           <td>${empleados[i].apellido}</td>
                           <td>${empleados[i].telefono}</td>
                           <td>${empleados[i].correo}</td>
                           <td>${empleados[i].direccion}</td>
                           <td><button onclick="localStorage.setItem('correo', '${empleados[i].correo}'); window.location.href = 'Modificar2.html'">Editar</button></td>
                           <td><button onclick="localStorage.setItem('correo', '${empleados[i].correo}'); window.location.href = 'Eliminar2.html'">Eliminar</button></td>`
    }
    body.innerHTML += `</tr>`
}