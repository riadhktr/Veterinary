const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "subscriber"
    },phone:{
     type:Number,
    },
    adresse:{
        type: String,
    },
   
    lastName:{
        type:  String
    },
    firstName:{
        type: String
    },
    
    img:{
        
        type: String,
        
        default:"user-face.jpg"
    },
    
    

    
},{timestamps : true}
)

const User = mongoose.model('User',UserSchema);
module.exports = User;