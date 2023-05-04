const { default: mongoose } = require("mongoose");

var schema = new mongoose.Schema({
    full_name:{
        type:String,
    },
    user_name:{
        type:String,
        // required:true,
        // unique:true
    },
    email:{
        type:String,
        // required:true,
        // unique:true
    },
    phone:{
        type:String,
    },
    pic_url:{
        type:String,
    },
    token:{
        type:String,
        //required:true,
        //unique:true
    },
    created_token:{
        type:Date,
        // required:true,
        // default: Date.now()
    },
    destroy_token:{
        type:Date,
        //required:true
    },
    verification_code:{
        type:String,
    },
    password:{
        type:String,
       //required:true        
    }
});

const Userdb = mongoose.model('user',schema);

module.exports = Userdb;
