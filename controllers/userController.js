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
    const userid=req.body.userid;
    const roomid=req.body.roomid;
    const tournamenttype=req.body.tournamenttype;
    const tournamentprice=req.body.tournamentprice;
    
    const newUser=new User({
        userid:userid,
        roomid:roomid,
        tournamenttype:tournamenttype,
        tournamentprice:tournamentprice
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