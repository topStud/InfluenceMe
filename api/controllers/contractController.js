const companyModel = require('../models/company')
const influencerModel = require('../models/influencer')
const contractModel = require('../models/contract')


// find company by company id and add a new contract
const addContract = async (req, res) => {
    await companyModel.
    findOne({ _id: req.body.companyID }, async (err, company) => {
        if (err || company === null){
            return res.status(400).json({status: 'error', 'error': 'company not exist'})
        }
        await contractModel.create({
            companyID: req.body.companyID,
            title: req.body.title,
            isApproved: req.body.isApproved,
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
        }).then((contract) => {
            company.Contracts.push(contract)
            company.save().catch((err) => {
                return res.status(500).json({status: 'error', 'error': 'could not save'})
            })
            res.json({status: 'ok'})
        }).catch((err) => {
            if(err.code === 11000){
                return res.status(400).json({status: 'error', 'error': 'title + influencer name already in use'})
            }
            return res.status(500).json({status: 'error', 'error': 'could not save'})
        })
    })
}

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
        }
        // return company's notifications
        await findContractsOf(company, req, res)
    })
}

async function findContractsOf(user, req, res) {
    contractModel.find({
        '_id': { $in: user.Contracts}
    }, function(err, response){
        if (err || user === null){
            return res.status(400).json({status: 'error', 'error': 'can\'t find'})
        }
        return res.status(200).json({response})
    })
}



module.exports = {
    addContract,
    contractsOf
}