const express = require('express')
const router = express.Router()

const { isAuth } = require('../middleware/isAuth');
const {
    getAllAnnonces,
    getAnnonces,
    createAnnonce,
    getAnnonceById,
    deleteAnnonce,
    
} = require('../controllers/AnnonceController')

router.get('/', isAuth, getAnnonces)

router.get('/all', isAuth, getAllAnnonces)

router.post('/:id',isAuth, createAnnonce)
router.delete('/:id',isAuth, deleteAnnonce)

router.get('/:id',isAuth, getAnnonceById)


module.exports = router;