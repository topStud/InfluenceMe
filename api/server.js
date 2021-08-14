const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const influencerRoutes = require('./routes/influencerRoutes')

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
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

// for the limit
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const PORT = process.env.PORT || '5000'

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

app.use('/api/influencers', influencerRoutes)
