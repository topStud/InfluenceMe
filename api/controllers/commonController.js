const bcrypt = require('bcryptjs')
const influencer = require('../models/influencer')
const company = require('../models/company')


const login = async (req,res,next) => {
    const {email, password} = req.body
    let user = await influencer.findOne({ email }).lean()
    /*
    if(!user){
        user = await company.findOne({email}).lean()
    }*/

    const validPassword = await bcrypt.compare(password, user)

    if(validPassword){

    }


        res.send({status: 'ok'})
}
