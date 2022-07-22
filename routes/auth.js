const express = require("express");
const router = express.Router();
const authController = require('../controllers/AuthController')
// const auth = require('../../server/middeware/auth')
// router.post('/usered', authController.logined)

router.post('/dang-nhap',authController.login)
router.post('/dang-ki', authController.register)
// router.delete('/delete',auth, authController.delete)
module.exports = router;
