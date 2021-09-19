const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const influencer = require('../models/influencer')
const company = require('../models/company')
const mailer = require('./mailer')

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
    await model.find({disabled: false})
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


async function searchByCategories(model, req, res) {
    const categories = req.params.categories
    console.log(categories)
    const array = categories.split(" ")
    console.log(array)
    // search only by categories
    model.find({$and: [{ categories: { $in: array} }, {disabled: false}]})
    //.limit(10)
    .exec(function(err, docs) {
        if(err) return res.status(400).json({status: 'error', 'error': 'Search by categories failed'})
        return res.status(200).json({docs})
    })
}

async function searchBySearchBar(model, req, res) {
    const searchBar = req.params.searchBar
    const queryString = '\"' + searchBar.split(' ').join('\" \"') + '\"'
    console.log(queryString)
    model.find({$and: [{$text: { $search: queryString}},{disabled: false}]})
    //model.find({$and: [{$text: {$search: '\"'+ searchBar + '\"'}}, {disabled: false}]})
    //.limit(10)
    .exec(function(err, docs) {
        if(err) return res.status(400).json({status: 'error', 'error': 'Search by search bar failed'})
        return res.status(200).json({docs})
    })
}

async function searchBySearchBarAndCategories(model, req, res) {
    const searchBar = req.params.searchBar
    const categories = req.params.categories
    console.log(searchBar+" "+  categories)
    const categoriesArray = categories.split(" ")
    const queryString = '\"' + searchBar.split(' ').join('\" \"') + '\"'
    console.log(queryString)
    model.find({$and: [{$text: { $search: queryString}},
            {disabled: false}, { categories: { $in: categoriesArray} }]})
    //.limit(10)
    .exec(function(err, docs) {
        if(err) return res.status(400).json({status: 'error', 'error': 'Search failed'})
        return res.status(200).json({docs})
    })
}


async function passwordUpdate(model, req, res) {
    await model.
    findOne({ _id: req.params.id}, async (err, user) => {
        if (err || user === null){
            return res.status(400).json({status: 'error', 'error': 'user not exist'})
        }
        if(!(await bcrypt.compare(req.body.currentPassword, user.password))) {
            return res.status(400).json({status: 'error',
                'error': 'current password doesn\'t match to real current password'})
        }
        if(await bcrypt.compare(req.body.newPassword, user.password)){
            return res.status(400).json({status: 'error',
                'error': 'Hey! It looks like you’ve used this password before. Please choose a fresh one.'})
        }
        user.password = await bcrypt.hash(req.body.newPassword ,10)
        user.save().catch((err) => {
            return res.status(500).json({status: 'error', 'error': 'could not save user'})
        })

        // send email about changing
        await mailer.sendEmail(user.email)

        return res.json({status: 'ok'})
    })
}

async function forgotPassword(model, req, res) {
    await model.
    findOne({ _id: req.params.email}, async (err, user) => {
        if (err || user === null) {
            return res.status(400).json({status: 'error', 'error': 'user not exist'})
        }
        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '20m'})
    })

}

async function changeStatus(user, req, res, bool) {
    user.disabled = bool
    user.save().catch((err) => {
        return res.status(500).json({status: 'error', 'error': 'could not save'})
    })
    return res.json({status: 'ok'})
}


module.exports = {
    login,
    update,
    findMany,
    findOne,
    passwordUpdate,
    changeStatus,
    searchByCategories,
    searchBySearchBar,
    searchBySearchBarAndCategories,
    forgotPassword
}