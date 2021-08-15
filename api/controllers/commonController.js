const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencer = require('../models/influencer')
const company = require('../models/company')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

const login = async (req,res,next) => {
    const {email, password} = req.body
    let user = await influencer.findOne({ email: email }).lean()
    if(!user){
        user = await company.findOne({email}).lean()
    }
    // for error case
    if(!user){
        return res.json({status: 'error', error: 'User does mot exist'})
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({
                id: user._id,
                email: user.email
            },JWT_SECRET)
        return res.json({status: 'ok', data: token})
    } else {
        return res.json({status: 'error', error: 'Invalid password'})
    }
}

module.exports = {
    login
}