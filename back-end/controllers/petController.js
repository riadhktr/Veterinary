const Pet = require('../models/animal');



const getPet = async (req, res) => {
    try {
        const myPet = await Pet.find({ user: req.user.id }).populate('user');
        res.send({myPet});
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const getPetById = async (req, res) => {
    try {
        const singlePet = await Pet.findOne({ _id: req.params.id, user: req.user.id }).populate('user');

        if(!singlePet) return res.status(404).json([
            {
                message: 'pet not found',
                
            }
        ])
        res.json(singlePet);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}


const deletePet = async (req, res) => {
    try {
        const pet = await Pet.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        res.json({
            petId: req.params.id,
             message: 'pet deleted' 
        });
    } catch (error) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

// const addVaccin = async (req, res) => {
//     const {vaccinDate} = req.body
//     try {
//         const newVaccin = await Pet.updateOne({ _id: req.params.id, user: req.user.id },{$push:{
//             vaccinDate : vaccinDate
//         }});

        
//         res.json({newVaccin});
//     } catch (err) {
//         console.error(`ERROR: ${err.message}`);
//         res.status(500).send('Server Error');
//     }
// }




module.exports = {
   
    
    getPet,
    getPetById,
    deletePet ,
    //  addVaccin
    
}