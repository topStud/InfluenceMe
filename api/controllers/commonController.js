const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencer = require('../models/influencer')
const company = require('../models/company')
const mailer = require('./mailer')

const Token = require("../models/Token")
const crypto = require("crypto")
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
        return res.status(400).json({status: 'error', error: 'User does not exist'})
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


async function forgotPassword(req, res) {
    let user = await influencer.findOne({ email: req.body.email}).lean()
    if(!user){
        user = await company.findOne({ email: req.body.email}).lean()
    }
    // for error case
    if(!user){
        return res.status(400).json({status: 'error', error: 'User does not exist'})
    }
    const resetToken = crypto.randomBytes(32).toString("hex")

    await new Token({
        userId: user._id,
        token: resetToken,
        createdAt: Date.now(),
    }).save().catch((err) => {
        return res.status(500).json({status: 'error', 'error': 'could not save token'})
    })

    const link = `http://localhost:3000/reset?token=${resetToken}`
    console.log(link)
    await mailer.forgotPasswordSendEmail(user.email, "Password Reset Request", link)
    return res.json({status: 'ok'})
}


async function resetPassword(req, res) {
    const token = await Token.findOne({ token: req.body.token}).lean()
    if(!token){
        return res.status(400).json({status: 'error', error: 'Sorry, this link has expired.'})
    }
    await influencer.
    findOne({ _id: token.userId}, async (err, influencer) => {
        if (err || influencer === null) {
            await company.findOne({_id: token.userId}, async (err, company) => {
                if (err || company === null) {
                    return res.status(400).json({status: 'error', 'error': 'user not exist'})
                }
                await changePassword(req,res,company)
            })
        } else {
            await changePassword(req,res,influencer)
        }
    })
}





module.exports = {
    login,
    forgotPassword,
    resetPassword
}