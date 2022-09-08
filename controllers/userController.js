var  User= require('../models/userModel');


const getallUsers=async(req,res)=>{
    try{
    const users= await User.find({});
    res.json(users);
    }
    catch(err)
    {
      return  res.status(400).send(err)
    }
    }
const saveUser=async(req,res)=>{
    try{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    
    const newUser=new User({
        name:name,
        email:email,
        password:password
    });
    const savedUser =await newUser.save();
    res.json(savedUser);
  }
  catch(err)
  {
    return  res.status(400).send(err);
  }
}



  module.exports = {
       saveUser,getallUsers
  }