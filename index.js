//Dependencies 
const morgan = require('morgan')
const express = require('express')
const app = express()
//Routers
const pokemon = require('./routes/pokemon')
const user = require('./routes/user')
//Middleware
const auth = require('./middleware/auth')
const notFound = require('./middleware/notFound')
const bienvenida = require('./middleware/bienvenida')

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", bienvenida)
app.use("/user", user)
app.use(auth)
app.use("/pokemon", pokemon)
app.use(notFound)

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running...")
})