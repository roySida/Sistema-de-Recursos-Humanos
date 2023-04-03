const express = require('express')
const app = express()
const {pokemon} = require('./pokedex.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al Pokedex")
})

app.post("/pokemon", (req, res, next) => {
    //console.log(req.body)
    return res.status(200).send(req.body)
})

app.get("/pokemon/:id([0-9]{1,3})", (req, res, next) => {
    const id = req.params.id - 1
    (id >= 0 && id <= 150) ? 
    res.status(200).send(pokemon[id]) :
    res.status(404).send("Pokemon no encontrado")
})

app.get("/pokemon/:name([A-Za-z]+)", (req, res, next) => {
    const name = req.params.name
    const pk = pokemon.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null
    })

    if(pk.length > 0) {
        res.status(200).send(pk)
    } else {
        res.status(404).send("Pokemon no encontrado")
    }
    
})

app.get("/pokemon", (req, res, next) => {
    return res.status(200).send(pokemon)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running...")
})