const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const companyModel = require('../models/company')
const commonController = require('./commonController')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// show the list of companies
const companies = async (req, res) => {
    await commonController.findMany(companyModel, req, res)
}

// find specific company by id
const company = async (req, res) => {
    await commonController.findOne(companyModel, req, res)
}

const companyRegister = async (req, res) => {
    const { email, password : plainTextPassword, name, siteUrl, photo, photoName, phone, bio } = req.body
    const password = await bcrypt.hash(plainTextPassword ,10)
    try{
        const response = await companyModel.create({
            email,
            password,
            name,
            siteUrl,
            photo,
            photoName,
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

const update = async (req, res) => {
    await commonController.update(companyModel, req, res)
}



module.exports = {
    companies,
    company,
    companyRegister,
    update
}