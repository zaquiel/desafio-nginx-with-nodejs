const gerador = require('gerador-nome')
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'desafionodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    
    const nome = gerador.geradorNome()
    
    connection.query(`INSERT INTO people(name) values('${nome}')`)

    connection.query(`SELECT * FROM people`, (error, results, fields) => {
        res.send(`
            <h1>Full Cycle Rocks!</h1>
                ${!!results.length ? results.map(el => `<li>${el.id} - ${el.name}</li>`).join('') : ''}
            <ol>
        `)
    })    
})

app.listen(port, () => {
    console.log('Rodando na porta '+ port)
})