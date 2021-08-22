const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const companyModel = require('../models/company')
const collaborationModel = require('../models/collaboration')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// show the list of companies
const companies = async (req, res) => {
    await companyModel.find()
    .then(response => {
        return res.status(200).json({response})
    })
    .catch(error => {
        return res.status(400).json({status: 'error'})
    })
}

// find specific company by id
const company = async (req, res) => {
    let companyID = req.params.id
    await companyModel.findById(companyID)
    .then(response => {
        return res.json({response})
    })
    .catch(error => {
        return res.status(400).json({status: 'error'})
    })
}

const companyRegister = async (req, res) => {
    //for debug
    console.log(req.body)
    const { email, password : plainTextPassword, name, siteUrl, photo, phone, bio } = req.body
    const password = await bcrypt.hash(plainTextPassword ,10)
    try{
        const response = await companyModel.create({
            email,
            password,
            name,
            siteUrl,
            photo,
            phone,
            bio
        })
    }catch (error) {
        if(error.code === 11000){
            return res.status(400).json({status: 'error', 'error': 'email already in use'})
        }
        return res.status(400).json({status: 'error'})
    }
    // ask the company which entered now to get his id
    const company = await companyModel.findOne({ email: email }).lean()
    const token = jwt.sign({
        id: company._id
    },JWT_SECRET)
    return res.json({status: 'ok', data: token})
}



module.exports = {
    companies,
    company,
    companyRegister
}