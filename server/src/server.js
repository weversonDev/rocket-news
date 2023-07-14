const porta = 3003

const express = require('express')
const app = express()
const dataBase = require('./dataBase')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/usuarios', (req, res) => {
    res.send(dataBase.getUsuarios())
})

app.get('/usuarios/:id', (req, res) => {
    res.send(dataBase.getUsuario(req.params.id))
})

app.post('/usuarios', (req, res, next) => {
    const usuario = dataBase.salvarUsuario({
        usuario: req.body.email
    })
    //console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})