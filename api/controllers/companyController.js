const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const companyModel = require('../models/company')
const collaborationModel = require('../models/collaboration')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// show the list of companies
const companies = async (req, res) => {
    await companyModel.find()
        .then(response => {
            return res.json({response})
            //res.json({status: 'ok'})
        })
        .catch(error => {
            return res.status(400).json({
                status: 'error'
            })
        })
}

// find specific company by id
const company = async (req, res) => {
    let companyID = req.params.id
    await companyModel.findById(companyID)
        .then(response => {
            return res.json({response})
            //res.json({status: 'ok'})
        })
        .catch(error => {
            return res.status(400).json({
                status: 'error'
            })
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

// find company by company id and add a new collaboration proposal
const addCollaborationProposal = async (req, res) => {
    await companyModel.
    findOne({ _id: req.body.companyID }, async (err, company) => {
        if (err) return res.status(400).json({status: 'error', 'error': 'company not exist'})
        let phone = null
        let email = null
        if (req.body.addPhone === true) {
            phone = company.phone
        }
        if (req.body.addEmail === true) {
            email = company.email
        }
        await collaborationModel.create({
            companyID: req.body.companyID,
            title: req.body.title,
            phone: phone,
            email: email,
            categories: req.body.categories,
            CollaborationsNumber: 0, // starting count from zero
            description: req.body.description,
            requirements: req.body.requirements
        }).then(( collaborationProposal) => {
            company.CollaborationProposals.push(collaborationProposal).catch((err) => {
                return res.status(400).json({status: 'error', 'error': 'could not push'})
            })
            company.save().catch((err) => {
                return res.status(400).json({status: 'error', 'error': 'could not save'})
            })
            res.json({status: 'ok'})
        }).catch((err)=>{
            if(err.code === 11000){
                return res.status(400).json({status: 'error', 'error': 'title already in use'})
            }
            return res.status(400).json({status: 'error', 'error': 'could not save'})
        })
    })
}

// Delete collaboration proposal from company and from collaboration
// proposal's collection by collaboration proposal's id
const deleteCollaborationProposal = async (req, res) => {
    let cpID = req.params.id
    await companyModel.
    findOne({ _id: cpID}, async (err, cp) => {
        if (err) return res.status(400).json({
            status: 'error', 'error': 'collaboration proposal not exist'})
        await companyModel.
        findOne({ _id: cp.companyID}, async (err, company) => {
            if (err) return res.status(400).json({
                status: 'error', 'error': 'company not exist'})
            // delete collaboration's id from company's collaboration array

        })


    })
}


module.exports = {
    companies,
    company,
    companyRegister,
    addCollaborationProposal,
    deleteCollaborationProposal
}