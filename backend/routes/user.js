// import framework Express
const express = require('express');

// appel router avec methode mise à disposition par Express
const router = express.Router();

// import controller user_clean
const userCtrl = require('../controllers/user');

// import middleware verifyPassword
const passValidate = require('../middleware/verifyPassword');

// import middleware verifyEmail
const mailValidate = require('../middleware/verifyEmail');

// import middleware auth
const auth = require('../middleware/auth');


const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 5, // 
    message: " Trop de tentatives échouées, réessayez dans 5 minutes",
  });

// Routes

router.post('/signup', mailValidate, passValidate, userCtrl.signup);
router.post('/login', rateLimiter, userCtrl.login);
router.delete('/:id', userCtrl.delete);
router.put('/:id', auth, userCtrl.update);

module.exports = router;