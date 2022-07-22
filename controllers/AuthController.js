const User = require("../models/User");
const Post = require("../models/NewPost")
const jwt = require("jsonwebtoken");
const { json } = require("express");
const bcrypt = require("bcrypt");
const JWT = "(AC`FJs8rbm-L}MRpT5{n?F(^V9]2^s282z4b/C!+*X]9xCXWQ";
class AuthController {
  async login(req, res, next) {
    try {
      const { email, password, username, rpassword } = req.body;
      const user = await User.findOne({username})
                              
      
      if (!user) 
      {
        return res.status(406).json({ err: "sai roi" });        
      } else{

        const token = jwt.sign({ id: user._id }, JWT);
        
        res.json({
          token,
          username: user.username,
          email: user.email,
          password: user.password,
        });
      }
      } catch (error) {
      res.status(500).json({ err: error.message || "Error while login" });
    }
  }

  async register(req, res, next) {
    try {
      let { email, password, username, rpassword } = req.body;

      const hash = await bcrypt.hashSync(password, 10);
      const newUser = new User({
        email,
        password: hash,
        username,
        rpassword,
      });
      newUser
        .save(newUser)
        .then((register) => {
          res.json(register);
        })
        .catch((err) => {
          res.status(406).json({ err: err.message || "Somethings went fail" });
        });
    } catch (error) {
      res.status(500).json({ err: error.message || "Error while registion" });
    }
  }

  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.user_id);
      res.json({ msg: "deleted" });
    } catch (error) {
      res.status(500).json({ err: error.message || "error when delete" });
    }
  }

  // create user

  createuser(req,res,next) {


  }
  getuser(req, res, next) {
    User.find({})
      .then((post) => res.json(post))
      .catch((err) => console.log(err));
  }
  // async getCurentUser(req, res, next) {
  //   try {
  //     const { email, password, username, rpassword } = req.body;
  //     const user = await User.findOne({_id: req.user_id})
                              
      
  //     if (!user) return res.status(406).json({ err: "sai roi" });

  //     res.json({

  //       username: user.username,
  //       email: user.email,
  //       password: user.password,
  //       // "thao"
  //     }
  //     );
  //   } catch (error) {
  //     res.status(500).json({ err: error.message || "Error while login" });
  //   }
  //   // res.json("thao")
  // }

  // async logined(req, res, next) {
  //   try {
  //     const { email, password, username, rpassword } = req.body;
  //     const user = await Post.find({user:"thaolethac2121@gmail.com"})
                              
      
  //     if (!user) return res.status(406).json({ err: "sai roi" });

  //     // const token = jwt.sign({ id: user._id }, JWT);

  //   res.json(user)
  //   } catch (error) {
  //     res.status(500).json({ err: error.message || "Error while login" });
  //   }
  // }
}

module.exports = new AuthController();
