const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/userSignUp',userController.signUp);
router.post('/userSignIn',userController.signIn);



module.exports = router;