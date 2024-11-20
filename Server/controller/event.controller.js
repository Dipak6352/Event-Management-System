const eventmodel=require("../model/event.model")
const uploadOnCloudinary = require("../utils/cloudinary");

const Event=eventmodel.event
exports.eventpost = async (req, res) => {
    try {

      const eventImgLocalPath = req.file?.path;
      if (!eventImgLocalPath) {
        return res.json({
          success: false,
          message: "Image file is missing",
        });
      }
  
      const eventImg = await uploadOnCloudinary(eventImgLocalPath);
      if (!eventImg) {
        return res.json({
          success: false,
          message: "Error while uploading an image",
        });
      }

      const data = {
        image :eventImg.secure_url ,
        category_name: req.body.category_name,
        s_date:req.body.s_date,
        e_date:req.body.e_date,
        s_time:req.body.s_time,
        e_time:req.body.e_time,
        location:req.body.location,
        price:req.body.price
      };
  
      const eventt = await new Event(data).save();
      if (!eventt) {
        return res.json({
          success: false,
          message: "event not posted",
        });
      } else {
        return res.json({
          success: true,
          message: "event successfully posted",
          data: eventt,
        });
      }
    } catch (error) {
      return res.json({
        success: false,
        message: error.message,
      });
    }
  };
  exports.getcardbycategory=async(req,res)=>{
    try {
        const category_name= req.params.category_name;
        const events = await Event.find({category_name});
        if (!events) {
            return res.status(404).json({ msg: "Category not found" });
        }else{
          return res.json({
            success:true,
            message:"category get successfully",
            data:events
          })
        }
  
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
  }