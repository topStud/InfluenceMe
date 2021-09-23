const companyModel = require('../models/company')
const influencerModel = require('../models/influencer')

async function findUser(req, res, filter){
    let user = await influencerModel.findOne(filter).lean()
    if(!user){
        user = await companyModel.findOne(filter).lean()
    }
    // for error case
    if(!user){
        return res.status(400).json({status: 'error', error: 'User does not exist'})
    }
    return user
}


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
    model.find({$and: [{$text: { $search: queryString}},{disabled: false}]})
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


async function changeStatus(user, req, res, bool) {
    user.disabled = bool
    user.save().catch((err) => {
        return res.status(500).json({status: 'error', 'error': 'could not save'})
    })
    return res.json({status: 'ok'})
}


async function changeStatus(user, req, res, bool) {
    user.disabled = bool
    user.save().catch((err) => {
        return res.status(500).json({status: 'error', 'error': 'could not save'})
    })
    return res.json({status: 'ok'})
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
        await changePassword(req, res, user)
    })
}


module.exports = {
    findUser,
    update,
    findMany,
    findOne,
    searchByCategories,
    searchBySearchBar,
    searchBySearchBarAndCategories,
    passwordUpdate,
    changeStatus
}

