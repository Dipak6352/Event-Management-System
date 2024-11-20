const mongoose = require("mongoose");


const eventSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    s_date:{
        type:Date,
        require:true
    },
    e_date:{
        type:Date,
        require:true
    },
    s_time:{
        type:String,
        require:true
    }, 
    e_time:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    category_name:{
        type:String,
        require:true
    }

})
exports.event= new mongoose.model("event", eventSchema);
