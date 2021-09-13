const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const companyModel = require('../models/company')
const commonController = require('./commonController')
const collaborationModel = require('../models/collaboration')
const influencerModel = require('../models/influencer')

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
    const { email, password : plainTextPassword, name, siteUrl, photo, photoName, phone, bio, disabled } = req.body

    // check if the email is used by an influencer
    const influ = await influencerModel.findOne({ email: email }).lean()
    if(influ !== null){
        return res.status(400).json({status: 'error', 'error': 'email already in use by an influencer'})
    }

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
            bio,
            disabled
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

const passwordUpdate = async (req, res) => {
    await commonController.passwordUpdate(companyModel, req, res)
}

const makeDisabled = async (req, res) => {
    await changeStatus(req, res, true)
}

const makeActive = async (req, res) => {
    await changeStatus(req, res, false)
}

async function changeStatus(req, res, bool) {
    await companyModel.
    findOne({ _id: req.params.id}, async (err, company) => {
        if (err || company === null){
            return res.status(400).json({status: 'error', 'error': 'company not exist'})
        }
        collaborationModel.updateMany({
            _id: { $in: company.CollaborationProposals}},
        { $set: { disabled : bool }},
        function(err){
            if (err) {
                return res.status(400).json({status: 'error',
                    'error': 'can\'t update collaboration proposals to be disabled'})
            }
        })
        await commonController.changeStatus(company, req, res, bool)
    })
}


module.exports = {
    companies,
    company,
    companyRegister,
    update,
    passwordUpdate,
    makeDisabled,
    makeActive
}