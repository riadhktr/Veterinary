const express = require('express')
const router = express.Router()

const mongoose = require('mongoose');
const Appoinement = require('../models/appoinement');

const { isAuth } = require('../middleware/isAuth');
const appoinement = require('../models/appoinement');



router.post('/:id',isAuth,async(req,res)=>{

    let appoinement = new Appoinement({
        from:req.user.id,
        to:req.params.id,
        body: req.body.body,
    });
    await appoinement.save();
    
    if(!appoinement) return res.status(400).json([{ message: 'Appoinement not created' }]);

        res.json(appoinement);
})

router.get('/:id',isAuth,async(req,res)=>{
    try {
        const rendez = await Appoinement.find({}).populate('from').populate('to')
        res.json(rendez);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }    
})

router.put('/:id',isAuth ,async (req, res) => {
    try {
        
        const AppoinemetStatus = await Appoinement.findOneAndUpdate({_id: req.params.id, user: req.user.id},{  status : 'confirmed' }, { new: true });
        res.json({AppoinemetStatus});
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
})

router.put('/done/:id',isAuth ,async (req, res) => {
    try {
        
        const AppoinemetStatus = await Appoinement.findOneAndUpdate({_id: req.params.id, user: req.user.id},{  done : 'done' }, { new: true });
        res.json({AppoinemetStatus});
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
})
router.delete('/:id',isAuth ,async (req, res) => {
    try {
        
         await Appoinement.findOneAndDelete({_id: req.params.id, user: req.user.id});
        res.json({message:'delete with sucess'});
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
})

    


module.exports = router;