var jwt = require('jsonwebtoken');
const UserSchema = require('../models/user')



exports.isAuth = async(req,res,next)=>{
try{

const token = req.header('Authorization')
var decoded =jwt.verify(token,process.env.JWT_SECRET_KEY)

if(!decoded){ return res.status(404).json({ errors })}
const user = await UserSchema.findById(decoded.id)
req.user = user 
//console.log('token ', user)
next()
}catch(err){
    res.status(500).send({msg:'you are not allowed to access'})
}
}