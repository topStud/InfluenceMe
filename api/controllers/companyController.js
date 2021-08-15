const bcrypt = require('bcryptjs')
const companyModel = require('../models/company')


// show the list of infulencers
const companies = async (req, res) => {
    await companyModel.find()
        .then(response => {
            return res.json({response})
            //res.json({status: 'ok'})
        })
        .catch(error => {
            return res.json({
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
            return res.json({
                status: 'error'
            })
        })
}

const companyRegister = async (req, res) => {
    //for debug
    console.log(req.body)
    const { email, password : plainTextPassword, companyName, photo, phone, bio } = req.body
    const password = await bcrypt.hash(plainTextPassword ,10)
    try{
        const response = await companyModel.create({
            email,
            password,
            companyName,
            photo,
            phone,
            bio
        })
    }catch (error) {
        if(error.code === 11000){
            return res.json({status: 'error', 'error': 'email already in use'})
        }
        throw error
        //return res.json({status: 'error'})
    }

    res.json({status: 'ok'})
}



module.exports = {
    companies,
    company,
    companyRegister
}