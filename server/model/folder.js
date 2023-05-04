const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    parent_id:{
        type:String,
    },
    type:{ // 0 -> image + folder , 1 -> fodler , 2 -> images
        type:Number,
        // required:true,
    },
    pic_name:{
        type:String,
    },
    pic_size:{
        type:String,
    },
    description:{
        type:String,
    },
    user_id:{
        type:ObjectId,
        // required:true,
        // unique:true
    },
});

const Folderdb = mongoose.model('folder',schema);

module.exports = Folderdb;
