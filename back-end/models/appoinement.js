const mongoose = require('mongoose');

const appoinementSchema = new mongoose.Schema({
    
    body: {
        type: Date,
        required: true,
    },
    
    
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
       
    },
    status: {
        type: String,
        default: 'unconfirmed'
    },
    done : {
        type : String,
        default : 'coming'
    },
    
},{
    timestamps: true,
})

module.exports = mongoose.model('Appoinement',appoinementSchema);
