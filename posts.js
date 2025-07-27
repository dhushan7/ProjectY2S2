const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    jobRole:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    
        //description was deleted...
    

});

module.exports = mongoose.model("Posts",postSchema);