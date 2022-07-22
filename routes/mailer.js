const express = require("express");
const router = express.Router();
const mailerController = require('../controllers/MailerController')

router.post('/sendmail', mailerController.send)
router.post('/sms', mailerController.otp)
module.exports = router