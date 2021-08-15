const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const influencerRoutes = require('./routes/influencerRoutes')
const commonRoutes = require('./routes/commonRoutes')
const companyRoutes = require('./routes/companyRoutes')

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

const PORT = process.env.PORT || '5000'

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

app.use('/api/influencers', influencerRoutes)
app.use('/api', commonRoutes)
app.use('/api/companies', companyRoutes)