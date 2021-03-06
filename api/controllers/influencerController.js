const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencerModel = require('../models/influencer')
const companyModel = require('../models/company')
const utils = require('./utils')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// show the list of infulencers
const influencers = async (req, res) => {
    await utils.findMany(influencerModel, req, res)
}

// find specific infulencer by id
const influencer = async (req, res) => {
    await utils.findOne(influencerModel, req, res)
}

const influencerRegister = async (req, res) => {
    const { email, password : plainTextPassword, firstName, lastName, date,
        photo, photoName, phone, instagramUser, followersAmount, instagramUrl, categories, bio } = req.body

    // check if the email is used by a company
    const comp = await companyModel.findOne({ email: email }).lean()
    if(comp !== null){
        return res.status(400).json({status: 'error', 'error': 'email already in use by a company'})
    }

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
    await utils.update(influencerModel, req, res)
}

// accept string with ' ' delimiter
const searchByCategories = async (req, res) => {
    await utils.searchByCategories(influencerModel, req, res)
}

const searchBySearchBar = async (req, res) => {
    await utils.searchBySearchBar(influencerModel, req, res)
}

const searchBySearchBarAndCategories = async (req, res) => {
    await utils.searchBySearchBarAndCategories(influencerModel, req, res)
}

const passwordUpdate = async (req, res) => {
    await utils.passwordUpdate(influencerModel, req, res)
}


const makeDisabled = async (req, res) => {
    await changeStatus(req, res, true)
}

const makeActive = async (req, res) => {
    await changeStatus(req, res, false)
}

async function changeStatus(req, res, bool) {
    await influencerModel.
    findOne({ _id: req.params.id}, async (err, influencer) => {
        if (err || influencer === null){
            return res.status(400).json({status: 'error', 'error': 'influencer not exist'})
        }
        await utils.changeStatus(influencer, req, res, bool)
    })
}


module.exports = {
    influencers,
    influencer,
    influencerRegister,
    update,
    passwordUpdate,
    makeDisabled,
    makeActive,
    searchBySearchBarAndCategories,
    searchBySearchBar,
    searchByCategories
}