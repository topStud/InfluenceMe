const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// connect to the database
mongoose.connect('mongodb://localhost/InfluenceMe',
    { useNewUrlParser: true, useUnifiedTopology: true });
const db= mongoose.connection

db.on('error',(err) => {
    console.log(err)
})

db.once('open',() => {
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
//app.use(bodyParser.json)
app.use(bodyParser.json());

const PORT = process.env.PORT || '5000'

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.post('/api/register', (req, res) => {
    console.log('batel')
    console.log(req.body)
    res.send('hello world')
})

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})
