const mongoose=require("mongoose")
 
const categorySchema= new mongoose.Schema({
    URL:{
     type:String,
     require:true
    },
    category_name:{
           type:String,
           require:true
                  }
    
})
 exports.category=new mongoose.model("category",categorySchema)