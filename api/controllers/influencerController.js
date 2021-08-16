const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencerModel = require('../models/influencer')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// show the list of infulencers
const influencers = async (req, res) => {
    await influencerModel.find()
        .then(response => {
            return res.json({response})
            //res.json({status: 'ok'})
        })
        .catch(error => {
            return res.json({
                status: 'error'
            })
        })
}

// find specific infulencer by id
const influencer = async (req, res) => {
    let infulencerID = req.params.id
    await influencerModel.findById(infulencerID)
        .then(response => {
            return res.json({response})
            //res.json({status: 'ok'})
        })
        .catch(error => {
            return res.json({
                status: 'error'
            })
        })
}

const influencerRegister = async (req, res) => {
    //for debug
    console.log(req.body)
    const { email, password : plainTextPassword, firstName, lastName, date,
        photo, phone, instagramUser, followersAmount, instagramUrl, categories, bio } = req.body
    const password = await bcrypt.hash(plainTextPassword ,10)
    try{
        const response = await influencerModel.create({
            email,
            password,
            firstName,
            lastName,
            date,
            photo,
            phone,
            instagramUser,
            followersAmount,
            instagramUrl,
            categories,
            bio
        })
        //console.log('user created successfully' + response)
    }catch (error) {
        if(error.code === 11000){
            return res.json({status: 'error', 'error': 'email already in use'})
        }
        throw error
        //return res.json({status: 'error'})
    }

    // ask the user which entered now to get his id
    const user = await influencerModel.findOne({ email: email }).lean()
    const token = jwt.sign({
        id: user._id
    },JWT_SECRET)
    return res.json({status: 'ok', data: token})
}



module.exports = {
    influencers,
    influencer,
    influencerRegister
}