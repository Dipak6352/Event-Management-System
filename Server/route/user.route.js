const userController = require('../controller/user.controller.js');
const verifyJWT = require('../middleware/auth.middleware.js');
const express = require('express');
const router = express.Router();
const bookingController=require('../controller/booking.controller.js')
router.post('/datapost', userController.postData);
router.get('/getData', userController.getdata);
router.get('/getcurrentUser', verifyJWT, userController.getcurrentUser);
router.post('/login', userController.login);
router.post('/update', verifyJWT, userController.updateUser);
router.delete('/delete/:id', verifyJWT, userController.deleteUser);
router.patch('/block/:id', userController.userblock);
router.post('/booking',verifyJWT,bookingController.booking)
router.get('/getbooking',verifyJWT,bookingController.getBooking)
router.get('/getallbooking',verifyJWT,bookingController.showallBookings)
router.post('/sendotp',userController.sendotp);
router.post('/verifyotp',userController.verifyotp)
module.exports = router;


