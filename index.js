const express = require('express')
require('dotenv').config()

const app = express()
const mysql = require('mysql2')

app.get('/', (req,res) => {
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
    connection.end()
    
    res.send('Hello world')
})







app.listen(process.env.PORT || 3000)
console.log('Server listen in: ', process.env.PORT || 3000)