const express = require('express');


const {GetContact,deletContact,GetById, GetVeterinaires, updateContact} = require('../controllers/accountUser')
const { isAuth } = require('../middleware/isAuth')



const AccountRouter = express.Router()

AccountRouter.get('/',GetContact)

AccountRouter.get('/vet',isAuth,GetVeterinaires)

AccountRouter.delete('/:id',deletContact)

AccountRouter.put('/:id',isAuth,updateContact)

AccountRouter.get('/:id',isAuth,GetById)

  




module.exports = AccountRouter