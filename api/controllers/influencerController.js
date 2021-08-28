const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencerModel = require('../models/influencer')
const commonController = require('./commonController')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// show the list of infulencers
const influencers = async (req, res) => {
    await commonController.findMany(influencerModel, req, res)
}

// find specific infulencer by id
const influencer = async (req, res) => {
    await commonController.findOne(influencerModel, req, res)
}

const influencerRegister = async (req, res) => {
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
            photoName,
            phone,
            instagramUser,
            followersAmount,
            instagramUrl,
            categories,
            bio
        })
    }catch (error) {
        if(error.code === 11000){
            return res.status(400).json({status: 'error', 'error': 'email already in use'})
        }
        return res.status(400).json({status: 'error'})
    }

    // ask the influencer which entered now to get his id
    const influencer = await influencerModel.findOne({ email: email }).lean()
    const token = jwt.sign({
        id: influencer._id
    },JWT_SECRET)
    return res.json({status: 'ok', data: token})
}


const update = async (req, res) => {
    await commonController.update(influencerModel, req, res)
}




module.exports = {
    influencers,
    influencer,
    influencerRegister,
    update
}