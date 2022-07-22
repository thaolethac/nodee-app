const User = require("../models/User");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

class MailerController {
  send(req, res, next) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lethacthao70@gmail.com",
        pass: "exlrvcvbjeqsaxsa",
      },
    });
    var mailOptions = {
      from: "lethacthao70@gmail.com",
      to: "thaolethac2121@gmail.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json(error);
      } else {
        res.json(info.response);
      }
    });
  }

  otp(req, res, next) {
    var springedge = require("springedge");

    var params = {
      apikey: "", // API Key
      sender: "SEDEMO", // Sender Name
      to: [
        "+84396865496", //Moblie Number
      ],
      message: "Hello, This is a test message from spring edge",
      format: "json",
    };

    springedge.messages.send(params, 5000, function (err, response) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  }
}
module.exports = new MailerController();
