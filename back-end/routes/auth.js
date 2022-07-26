const express = require('express');
const multer  = require('multer');
const { isAuth } = require('../middleware/isAuth')
const User = require('../models/user');
const { signupController ,signinController} = require('../controllers/auth');

const { signupValidator,validatorResult,signinValidator } = require('../middleware/validator');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
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


router.post('/signup',signupValidator,validatorResult,signupController)
router.post('/signin',signinValidator,validatorResult,signinController)

router.get('/profile',isAuth,(req,res)=>{
    res.json(req.user)
})



router.put('/pic/:id', isAuth,upload.single('picture'), async (req, res) => {


    
    
      const img = req.file.filename
    
     
    try {
        const updatedPicture = await User.findByIdAndUpdate({_id: req.params.id},{ img}, { new: true })
        res.status(200).json({
            updatedPicture,
            message: 'picture Updated' 
        })
     
    } catch (error) {
      console.log(error);
    }
  });



module.exports = router;