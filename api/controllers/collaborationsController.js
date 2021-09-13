const companyModel = require('../models/company')
const collaborationModel = require('../models/collaboration')
const commonController = require('./commonController')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'gkdd462gfkbjfoh#$#54*jfdsdf&$&$#)fhdsadfkl676q3478dfcSgd'

// find company by company id and add a new collaboration proposal
const addCollaborationProposal = async (req, res) => {
    await companyModel.
    findOne({ _id: req.body.companyID }, async (err, company) => {
        if (err || company === null){
            return res.status(400).json({status: 'error', 'error': 'company not exist'})
        }
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
            collaborationsNumber: 0, // starting count from zero
            description: req.body.description,
            disabled: req.body.disabled,
            canEdit: req.body.canEdit,
            requirements: req.body.requirements
        }).then(async ( collaborationProposal) => {
            company.CollaborationProposals.push(collaborationProposal)
            company.save().catch((err) => {
                return res.status(500).json({status: 'error', 'error': 'could not save'})
            })

            // get collaboration proposal id and send it
            const cp = await collaborationModel.findOne({ title: req.body.title }).lean()
            const token = jwt.sign({
                id: cp._id
            },JWT_SECRET)
            return res.json({status: 'ok', data: token})
        }).catch((err) => {
            if(err.code === 11000){
                return res.status(400).json({status: 'error', 'error': 'title already in use'})
            }
            return res.status(500).json({status: 'error', 'error': 'could not save'})
        })
    })
}

// Delete collaboration proposal from company and from collaboration
// proposal's collection by collaboration proposal's id
const deleteCollaborationProposal = async (req, res) => {
    const cpID = req.params.id
    await collaborationModel.
    findOne({ _id: cpID}, async (err, cp) => {
        if (err || cp === null){
            return res.status(400).json({status: 'error', 'error': 'collaboration proposal not exist'})
        }
        companyModel.findOneAndUpdate({_id: cp.companyID},
            {$pull: {CollaborationProposals: cpID}},
            { new: true },
            function(err){
                if(err) return res.status(500).json({status: 'error'})
            })
        cp.remove(function (err, result){
            if(err) return res.status(500).json({status: 'error'})
            res.json({status: 'ok', 'deletedID': cpID, 'deletedTitle': result.title})
        })
    })
}


const collaborationProposals = async (req, res) => {
    await commonController.findMany(collaborationModel, req, res)
}

const specificCollaborationProposal = async (req, res) => {
    await commonController.findOne(collaborationModel, req, res)
}


const collaborationProposalsOf = async (req, res) => {
    await companyModel.
    findOne({ _id: req.params.id}, async (err, company) => {
        if (err || company === null){
            return res.status(400).json({status: 'error', 'error': 'company not exist'})
        }
        collaborationModel.find({
            '_id': { $in: company.CollaborationProposals}
        }, function(err, response){
            if (err || response === null){
                return res.status(400).json({status: 'error', 'error': 'can\'t find'})
            }
            return res.status(200).json({response})
        })
    })
}

const update = async (req, res) => {
    await commonController.update(collaborationModel, req, res)
}

// accept string with ' ' delimiter
const searchByCategories = async (req, res) => {
    await commonController.searchByCategories(collaborationModel, req, res)
}

const searchBySearchBar = async (req, res) => {
    await commonController.searchBySearchBar(collaborationModel, req, res)
}

const searchBySearchBarAndCategories = async (req, res) => {
    await commonController.searchBySearchBarAndCategories(collaborationModel, req, res)
}



module.exports = {
    addCollaborationProposal,
    deleteCollaborationProposal,
    collaborationProposals,
    specificCollaborationProposal,
    collaborationProposalsOf,
    update,
    searchBySearchBarAndCategories,
    searchBySearchBar,
    searchByCategories
}