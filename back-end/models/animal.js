const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    
    categorie: {
        type: String,
        
    }
    ,type: {
        type: String,
        
    },
    gender: {
        type: String,
          
    },
    birth:{
        type: Date,
        
    },
    
    vaccinDate:{
        type: Date,
        
    },
    petPicture:{
        type: Array
    },
    price :{
        type: Number,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
},{
    timestamps: true,
})

module.exports = mongoose.model('Pet',PetSchema);
