Los pasos para poder hacer prueba de la aplicacion son los siguientes:

1. Acceda a XAMPP Control Panel y encienda el servicio de MySql y Apache
2. Conectese a Internet
3. Descargue todos los archivos que se encuentran en el repositorio de la rama "master" y guardelos en una carpeta
4. A continuacion, realice la instalacion de las dependencias necesarias para el proyecto, estas se encuentran en el archivo package.json
   en el atributo "dependencies". Para su instalacion solo es necesario acceder a la terminal de su sistema operativo, navegar hasta la carpeta
   donde guardo el proyecto y ejecutar el comando "npm install", esto buscará dentro del archivo package.json las dependencias necesarias y las instalará
5. Acceda a la carpeta del proyecto llamada "base de datos" y recupere el archivo llamado "recursoshumanos.sql", despues importelo 
   a su phpMyAdmin, esto creara una nueva base de datos con las tablas y datos correspondientes
6. Vuelva a su terminal, y ejecute el comando "npm start" en la carpeta del proyecto, esto mantendra el servidor en un estado de ejecucion 
7. En la carpeta Pokedex del proyecto, localice el archivo "PaginaInicial2.hmtl" y abralo en su navegador favorito 
8. A partir de ahora puede navegar por la aplicacion, en la carpeta del proyecto se encuentra el archivo "Manual de Usuario Node.js.pdf"
   este puede servirle de guia para recorrer las distintas interfaces del programa 
   
NOTA: Los usuarios necesarios para realizar el inicio de sesion se encuentran en la tabla "Administradores" en la base de datos 
