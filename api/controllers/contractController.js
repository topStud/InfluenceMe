const companyModel = require('../models/company')
const influencerModel = require('../models/influencer')
const contractModel = require('../models/contract')
const utils = require('./utils')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// find company by company id and add a new contract
const addContract = async (req, res) => {
    await companyModel.
    findOne({ _id: req.body.companyID }, async (err, company) => {
        if (err || company === null) {
            return res.status(400).json({status: 'error', 'error': 'company not exist'})
        }
        await influencerModel.findOne({email: req.body.influencerEmail}, async (err, influencer) => {
            if (err || influencer === null) {
                return res.status(400).json({status: 'error', 'error': 'influencer not exist'})
            }
            await contractModel.create({
                companyID: req.body.companyID,
                title: req.body.title,
                companyName: req.body.companyName,
                companyPhone: req.body.companyPhone,
                companyEmail: req.body.companyEmail,
                influencerName: req.body.influencerName,
                influencerPhone: req.body.influencerPhone,
                influencerEmail: req.body.influencerEmail,
                categories: req.body.categories,
                details: req.body.details,
                payment: req.body.payment,
                startDay: req.body.startDay,
                endDay: req.body.endDay
            }).then(async (contract) => {
                company.pendingContracts.push(contract)
                company.save().catch((err) => {
                    return res.status(500).json({status: 'error', 'error': 'could not save'})
                })
                influencer.pendingContracts.push(contract)
                influencer.save().catch((err) => {
                    return res.status(500).json({status: 'error', 'error': 'could not save'})
                })
                // get contract id and send it
                const cont = await contractModel.findOne(
                    { title: req.body.title, influencerName: req.body.influencerName }).lean()
                const token = jwt.sign({
                    id: cont._id
                },JWT_SECRET)
                return res.json({status: 'ok', data: token})
            }).catch((err) => {
                if (err.code === 11000) {
                    return res.status(400).json({
                        status: 'error',
                        'error': 'Hey there, it seems like you have already created a contract with this influencer.'})
                }
                return res.status(500).json({status: 'error', 'error': 'could not save'})
            })
        })
    })
}
/*
const contractsOf = async (req, res) => {
    await companyModel.
    findOne({ _id: req.params.id}, async (err, company) => {
        if (err || company === null){
            await influencerModel.
            findOne({ _id: req.params.id}, async (err, influencer) => {
                if (err || influencer === null){
                    return res.status(400).json({status: 'error', 'error': 'user not exist'})
                }
                // return influencer's notifications
                await findContractsOf(influencer, req, res)
            })
        } else {
            // return company's notifications
            await findContractsOf(company, req, res)
        }
    })
}

async function findContractsOf(user, req, res) {
    const now = new Date(new Date().setUTCHours(0, 0, 0, 0))
    await contractModel.find(
        {'_id': { $in: user.pendingContracts}},
        function(err, pending){
            if (err) return res.status(400).json({status: 'error', 'error': 'can\'t find'})
            contractModel.find(
                {$and: [{'_id': { $in: user.currentContracts}},
                        { $or:[{endDay: { $exists: false }}, {endDay: { $gte: now}}]}]},
                function(err, current){
                    if (err) return res.status(400).json({status: 'error', 'error': 'can\'t find'})
                    contractModel.find(
                        {$and: [{'_id': { $in: user.currentContracts}}, { endDay: { $lt: now} }]},
                        function(err, past) {
                            if (err) return res.status(400).json({status: 'error', 'error': 'can\'t find'})

                            return res.status(200).json({
                                status: 'ok',
                                pastContracts: past,
                                currentContracts: current,
                                pendingContracts: pending
                            })
                        })
                })
    })
}
*/


async function findPendingContractsOf(req, res) {
    const user = await utils.findUser(req, res, { _id: req.params.id})
    await contractModel.find(
        {'_id': { $in: user.pendingContracts}},
        function(err, pending) {
            if (err) return res.status(400).json({status: 'error', 'error': 'can\'t find'})
            return res.status(200).json({
                status: 'ok',
                pendingContracts: pending
            })
        })
}

async function findPastContractsOf(req, res) {
    const now = new Date(new Date().setUTCHours(0, 0, 0, 0))
    const user = await utils.findUser(req, res, { _id: req.params.id})
    contractModel.find(
        {$and: [{'_id': { $in: user.currentContracts}}, { endDay: { $lt: now} }]},
        function(err, past) {
            if (err) return res.status(400).json({status: 'error', 'error': 'can\'t find'})

            return res.status(200).json({
                status: 'ok',
                pastContracts: past
            })
        })
}


async function findCurrentContractsOf(req, res) {
    const now = new Date(new Date().setUTCHours(0, 0, 0, 0))
    const user = await utils.findUser(req, res, { _id: req.params.id})
    contractModel.find(
        {$and: [{'_id': { $in: user.currentContracts}},
                { $or:[{endDay: { $exists: false }}, {endDay: { $gte: now}}]}]},
        function(err, current){
            if (err) return res.status(400).json({status: 'error', 'error': 'can\'t find'})

            return res.status(200).json({
                status: 'ok',
                currentContracts: current
            })
        })
}


// find specific contract by id
const findContract = async (req, res) => {
    await utils.findOne(contractModel, req, res)
}



module.exports = {
    addContract,
    findContract,
    findPendingContractsOf,
    findPastContractsOf,
    findCurrentContractsOf
}