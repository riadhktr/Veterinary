const express = require('express');
const router = express.Router();
const multer  = require('multer');
const { isAuth } = require('../middleware/isAuth');
const {
   createPetCard,getPet, updatePetCard, deletePet, getPetById, 
} = require('../controllers/petController');

const Pet = require('../models/animal');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './public/petPictures/')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now()+file.originalname)
   }
 });

 const fileFilter=(req, file, cb)=>{
  if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
      cb(null,true);
  }else{
      cb(null, false);
  }

 }

const upload = multer({ 
   storage:storage,
   limits:{
       fileSize: 1024 * 1024 * 5
   },
   fileFilter:fileFilter
});


router.post('/',isAuth,upload.array('multi-files'),async (req, res) => {
    try {
        const {categorie, type, gender,birth,vaccinDate,price } = req.body;
        const reqFiles = [];
        const url = req.protocol + '://' + req.get('host')
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + '/public/petPictures/' + req.files[i].filename)
        }

        
        const newPet = new Pet({
            categorie,
            type, 
            gender,
            birth,
            vaccinDate,
            price,
            petPicture : reqFiles,
            user: req.user.id
        });
        console.log(req.files)
        await newPet.save();
 
        if(!newPet) return res.status(400).json([{ message: 'Pet card not created' }]);
 
        res.json(newPet);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
 })
 

router.get('/', isAuth, getPet);
router.get('/:id', isAuth, getPetById);
router.delete('/:id',isAuth, deletePet);

router.put('/:id', isAuth,async (req, res) => {
    try {
        const {categorie, type, gender,birth,vaccinDate ,price} = req.body;
        //const petPicture = req.file.filename;
        const updatedPet = await Pet.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { categorie,type, gender,birth,vaccinDate ,price}, { new: true });
        res.json(updatedPet);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
});

// router.post('/vaccin/:id',isAuth,addVaccin)



module.exports = router;