const express = require('express')
const todoRoutes = require('./routes/todo-routes')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

app.use('/api/todo', todoRoutes)

mongoose
    .connect('mongodb://127.0.0.1:27017/todo')
    .then(() => { app.listen(8000) })
    .catch(err => { console.log(err) })