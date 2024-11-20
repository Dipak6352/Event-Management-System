const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './upload/image',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

 upload = multer({ storage: storage });

module.exports = upload;
