const User = require('../models/user');
 


exports.GetContact=async(req,res)=>{
    try{
    const users = await User.find({role: { $ne:'admin'} }).select('-password')
    res.status(200).send({users,msg:'list of contact'})
    }catch{
    res.status(500).send('could not get contacts')
    }
    }
    
exports.GetVeterinaires=async(req,res)=>{
        try{
        const users = await User.find({role: { $eq:'vet'} }).select('-password')
        res.status(200).send({users,msg:'list of ocntact'})
        }catch{
        res.status(500).send('could not get contacts')
        }
        }


    exports.GetById=async(req,res)=>{
        const {id} = req.params
    
     try{
    
    const getuser = await User.findById(id).select('-password')
    .select('-createdAt').select('-updatedAt').select('-__v').populate('appoinement')
   
    res.status(200).send({getuser})
        }catch(err){
            console.log(err)
            res.status(400).send('there is no getting naw ')
            
        }
    }

    exports.deletContact= async (req,res)=>{
        try{
            const{id} = req.params
    
            const delContact = await User.findByIdAndDelete(id)
            res.status(200).send('could delet it ')
        }catch(err){
            res.status(500).send('could not delete')
        }
    }

    exports.updateContact= async (req,res)=>{
        try{
            const {id} = req.params
            const { username,firstName,lastName,phone,adresse} = req.body;
            const updatedContact = await User.findByIdAndUpdate(id,{ username,firstName,lastName,phone,adresse }, { new: true })
            res.status(200).json({
                updatedContact,
                userId: req.params.id,
                 message: 'profile Updated' 
            })
        }catch(err){
            res.status(500).send('could not update')
        }
    }

   
   

       
        
        
    
        
           
    
    