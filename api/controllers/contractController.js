const companyModel = require('../models/company')
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
            companyName: req.body.companyName,
            companyPhone: req.body.companyPhone,
            companyEmail: req.body.companyEmail,
            influencerName: req.body.influencerName,
            influencerPhone: req.body.influencerPhone,
            infliencerEmail: req.body.infliencerEmail,
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



module.exports = {
    addContract
}