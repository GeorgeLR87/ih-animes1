Iniciamos el proceso del Proyecto

1. Creamos la carpeta del proyecto con:

mkdir espacion y nombre de la carpeta del proyecto en este caso quedo de la siguiente manera:

mkdir ih-animes1

2. Acedemos  a la carteta con:
 
 cd ih-animes1

3. Abrimos la carpeta:

code .

4. Instalamos el package.json

npm init --yes

5. instalamos nuestras librerias que vamos a requerir dentro del proyecto en este caso son 4:

npm i express dotenv hbs mongoose

6. En este poryecto vamos a tener una carpeta source (src)

 mkdir src

accedemos a la carpeta cd src

7. Ya dentro de la carpeta src vamos a crear las carpetas que vamos a ocupar dentro del proyecto y nuestro archivo index.js

mkdir bin config models public views

touch index.js

8. Despues en nuestro archivo package.json configuramos nuestros scripts

"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },


9. Seguimos ahora con nuestro archivo index vamos a crear la arquitectura General de nuestro proyecto -Imports -Middlewares -Routes -Server
// 1 Imports
const express = require('express')
const app     = express()

require('dotenv').config()

// 2 Middlewares
// Es una funcion que se ejecutoa despues de recibir una peticion y antes de dar una respuesta 
// Trabajar con archivos estaticos 


// 3 Routers


// 4 Server

app.listen(process.env.PORT, () => {
    console.log(`Server on port: http://localhost:${process.env.PORT}`)
}) 

10. Nuevamente es nuestra terminal salimos de nuestra carpeta src y vamos a crear dos archivos a nivel global

cd .. (salimos de la carpeta src y entramos a la carpeta global)

touch .env
touch .gitignore

11. En nuestro archivo .gitignore vamos a poner los archivos que no queremos que se vean dentro de nuestro repositorio esto es por buenas practicas y por seguridad dentro de nuestros proyectos por la información que podemos tener dentro de estos archivos

.env
node_modules/
package-lock.json


12. En nuestro archivo .env vamos a poner nuestros puertos con los que vamos a trabajar primero iniciamos con nuetro puerto local

PORT=3001

// Hasta este punto ya nos encontramos conectados a nuestro servidor con un puerto local se puede verificar con npm run dev y ponemos ctrl + click en la ruta de nuestro local host en la terminal para que nos abra en nuestro navegador 

13. Ahora vamos a trabajar con nuestras middlewares:
//Es una funcion que se ejecuta despues de recibir una peticion y antes de dar una respuesta  // Trabajar con archivos estaticos 

Existen dos formas en las que podemos trabajar los middlewares:

a). app.use(express.static(__dirname + 'public'))

b).- utilizamos el modulo que incluye expres para hacerlo .path
Se tiene que importar primero y despues lo llamamos 

// 1 Imports
const path    = require('path') 

// 2 Middlewares
app.use(express.static(path.join(__dirname, 'public')))

14. Seguimos en la misma seccion de middlewares para crear nuestras configuracione:
// Que serían nuestro motor de de vistas que vamos a usar que seria con Handlebar(hbs)

//Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

15. Ahojra en nuestra seccion de routes vamos a crear nuestra primer ruta para nuestro home.
// 3 Routers
//Home
app.get('/', (req, res) => {
    res.render('index')
})

16. En nuestra carpeta de views vamos a crear dos archivos.
index.hbs y layout.hbs

17. Creamos nuestro arvhivo layout.hbs y en el body:
{{{body}}}

18. Ponemos en nuestro archivo index.hbs para probar 
<h1>Hola Mundo</h1>

19. Ya empezamos a trabajar en los estilos de la pagina por ejemplo en el layout le ponemos el boostrap tambien agregamos una barra de navegación arvhivos que estamos ocupando para ver el desarrollo general del proyecto esto cambiara dependiendo de nuestro poyecto 

20. Vamos a conectar la base de datos, En la carpeta de config vamos a crear un archivo db.js y en el archivo db.js de la carpeta config

const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB)
    console.log('Data base connected')
}

21. En nuestras variables de entorno que por el momento solo teniamos una local vamos a conectar nuestra nueva base de datos en el archivo .env

// abrimos nuestro db compras en la parte de local le damos en edit y copiamos mongodb://localhost:27017/ despues de esta diagonal le tenemos que poner como se va a llamar la coleccion en este caso sera igual que nuestro proyecto.


22. Regresamos a nuestro arvhivo db.js

module.exports = connectDB


23. Despues tenemos que ir a nuestro index.js tenemos que importar (con nuestro patron modular exportando e importando modulos)

const connectDB = require('./config/db')

// Hasta este punto ya esta conectada nuestra base de datos mongoose.

24. Vamos a hacer los pasos de git
git init
git add .
git commit -m "base del proyecto"

  


