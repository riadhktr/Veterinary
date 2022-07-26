const mongoose = require('mongoose');

const AnnonceSchema = new mongoose.Schema({
   
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    animal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true,
    }
    
},{
    timestamps: true,
})

module.exports = mongoose.model('Annonce', AnnonceSchema);
