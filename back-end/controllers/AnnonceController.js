
const annonce = require('../models/annonce');


const getAnnonces = async (req, res) => {
    try {
        const annonces = await annonce.find({ user: req.user.id }).populate('user').populate('animal');
        res.json(annonces);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}
const getAllAnnonces = async (req, res) => {
    try {
        const annonces = await annonce.find().populate('user').populate('animal');
        res.json(annonces);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const getAnnonceById = async (req, res) => {
    try {
        const Annonce = await annonce.findOne({ _id: req.params.id}).populate('user', '-password').populate('animal');

        if(!Annonce) return res.status(404).json([
            {
                message: 'Annonce not found',
                
            }
        ])
        res.json(Annonce);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const createAnnonce = async (req, res) => {
    try {
        
        const newAnnonce = new annonce({
          
           
            user: req.user.id,
            animal: req.params.id
         
        });
        
        await newAnnonce.save();

        if(!newAnnonce) return res.status(400).json([{ message: 'Annonce not created' }]);

        res.json({newAnnonce});
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}


const deleteAnnonce = async (req, res) => {
    try {
        await annonce.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        res.json({
           
             message: 'annonce deleted' 
        });
    } catch (error) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}






module.exports = {
    getAllAnnonces,
    createAnnonce,
    getAnnonces,
    deleteAnnonce,
    getAnnonceById,
   
}