const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signupController= async(req,res)=>{
    const {username,lastName,firstName,adresse,email,phone,password,role} = req.body;
    

    try{
    const user = await User.findOne({email});
    if(user){
      return  res.status(400).json({errorMsg :"Email déja utilisé"})   
     }
     const newUser = new User();
     newUser.username = username;
     newUser.firstName = firstName;
     newUser.lastName = lastName;
     newUser.adresse = adresse;
     newUser.phone = phone;
     newUser.email = email ;
     newUser.role = role;
  
     const salt = await bcrypt.genSalt(10);
     newUser.password = await bcrypt.hash(password,salt);

     await newUser.save();
     res.json({successMsg:"Bienvenue ! vous pouvez connectez maintenant"})

    }catch(err){
        console.log('signup err',err)
    }
  
}

exports.signinController= async(req,res)=>{
    const {email,password} = req.body;
    
    try{
    const user = await User.findOne({email});
    if(!user){
    return  res.status(400).json({errorMsg :"email ou password sont érronées"})   
    }
    
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({errorMsg:"email ou password sont érronées"})
    }
    const token =  jwt.sign({id: user._id},process.env.JWT_SECRET_KEY,{
        expiresIn: "24h"
    },(err,token)=>{
        if(err) console.log('jwt error',err)
        const {_id,username,email,firstName,lastName,adresse,role,phone} = user;
        res.json({
            token,
            user : {_id,username,email,role,firstName,lastName,phone,adresse}
        })
    })

    }catch(err){
     console.log('signin controller',err)
     res.status(500).json({errMsg:'server error'})
    }
       

}