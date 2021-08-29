const companyModel = require('../models/company')
const collaborationModel = require('../models/collaboration')
const commonController = require('./commonController')


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
            requirements: req.body.requirements
        }).then(( collaborationProposal) => {
            company.CollaborationProposals.push(collaborationProposal)
            company.save().catch((err) => {
                return res.status(500).json({status: 'error', 'error': 'could not save'})
            })
            res.json({status: 'ok'})
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
            if (err || company === null){
                return res.status(400).json({status: 'error', 'error': 'can\'t find'})
            }
            return res.status(200).json({response})
        })
    })
}

const updateCanEdit = async (req, res) => {
    await collaborationModel.
    findOne({ _id: req.params.id}, async (err, cp) => {
        if (err || cp === null){
            return res.status(400).json({status: 'error', 'error': 'collaboration proposal not exist'})
        }
        // change seen field from false to true
        cp.canEdit = false
        cp.save().catch((err) => {
            return res.status(500).json({status: 'error', 'error': 'could not save collaboration proposal'})
        })
        return res.json({status: 'ok'})
    })
}


const update = async (req, res) => {
    // check if canEdit is true and then update
    await collaborationModel.
    findOne({ _id: req.params.id}, async (err, cp) => {
        if (err || cp === null) {
            return res.status(400).json({status: 'error', 'error': 'collaboration proposal not exist'})
        }
        if(cp.canEdit === true){
            await commonController.update(collaborationModel, req, res)
        } else {
            return res.status(400).json({status: 'error', 'error': 'collaboration already in use'})
        }
    })

}

// accept string with ' ' delimiter
const searchBy = async (req, res) => {
    await commonController.search(collaborationModel, req, res)
}



module.exports = {
    addCollaborationProposal,
    deleteCollaborationProposal,
    collaborationProposals,
    specificCollaborationProposal,
    collaborationProposalsOf,
    update,
    updateCanEdit,
    searchBy
}