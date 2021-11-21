// 1 Imports
const express = require('express')
const app     = express()

require('dotenv').config()

const path    = require('path') 

const connectDB = require('./config/db')

// 2 Middlewares
// Es una funcion que se ejecuta despues de recibir una peticion y antes de dar una respuesta 
// Trabajar con archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')))

//Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

connectDB()


// 3 Routers
//Home
app.get('/', (req, res) => {
    res.render('index')
})


// 4 Server

app.listen(process.env.PORT, () => {
    console.log(`Server on port: http://localhost:${process.env.PORT}`)
})


