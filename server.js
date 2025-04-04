const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

dotenv.config()
const app = express()

if (process.env.NODE_ENV === 'local') {
    app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }));
  } else {
    app.use(cors({
      credentials: true
    }));
}
  
const db = async () => {
    try {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('Conectado ao banco de dados de produção.')
        } else {
            await mongoose.connect(process.env.LOCAL_DB_URI)
            console.log('Conectado ao banco de dados de desenvolvimento.')
        }
    } catch (error) {
        console.log('Erro ao conectar-se ao banco de dados.')
    }
}

db()


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})