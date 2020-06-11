const mongoose=require('mongoose');

//making schema for to do list
const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});


//making model to fill schema
const Todo=new mongoose.model('Todo',todoSchema);

//now export this model to be used in js
module.exports=Todo;