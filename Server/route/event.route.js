const eventcontroller = require("../controller/event.controller.js");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/imageUpload.js");
router.post('/postevent', upload.single('image'), eventcontroller.eventpost);
router.get('/getcardbycategory/:category_name',eventcontroller.getcardbycategory)
module.exports = router;
