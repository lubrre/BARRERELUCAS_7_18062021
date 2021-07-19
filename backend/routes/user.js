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


// Routes

router.post('/signup', mailValidate, passValidate, userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.delete);

module.exports = router;