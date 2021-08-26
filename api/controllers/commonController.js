const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencer = require('../models/influencer')
const company = require('../models/company')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

const login = async (req,res,next) => {
    const {email, password} = req.body
    let user = await influencer.findOne({ email: email }).lean()
    let type = 'influencers'
    if(!user){
        user = await company.findOne({email}).lean()
        type = 'companies'
    }
    // for error case
    if(!user){
        return res.json({status: 'error', error: 'User does not exist'})
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({
                id: user._id,
                type: type
            },JWT_SECRET)
        return res.json({status: 'ok', data: token})
    } else {
        return res.json({status: 'error', error: 'Incorrect password'})
    }
}


// Utils:

async function update(model, req, res) {
    try{
        const result = await model.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(result === null) return res.status(400).json({status: 'error', 'error': 'could not find user'})
        return res.json({status: 'ok', data: result})
    } catch (err){
        return res.status(500).json({status: 'error'})
    }
}

async function findMany(model, req, res) {
    await model.find()
    .then(response => {
        return res.status(200).json({response})
    })
    .catch(error => {
        return res.status(400).json({status: 'error'})
    })

}

async function findOne(model, req, res) {
    await model.findById(req.params.id)
    .then(response => {
        return res.json({response})
    })
    .catch(error => {
        return res.status(400).json({status: 'error'})
    })
}



module.exports = {
    login,
    update,
    findMany,
    findOne
}