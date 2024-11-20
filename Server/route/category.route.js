// routes/category.js
const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');
const upload = require('../middleware/imageUpload');

router.post('/postcategory', upload.single('URL'), categoryController.categorypost);
router.get('/getallcategory', categoryController.getcategory);
router.delete('/deletecategory/:_id', categoryController.deletecategory);

module.exports = router;
