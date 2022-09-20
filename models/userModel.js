const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    roomid: {
        type: String,
        required: true
    },
    tournamenttype: {
        type: String,
        required: true
    },
    tournamentprice: {
        type: String,
        required: true
    }

},{timestamps:true});

const user = mongoose.model('User',userSchema);

module.exports = user;