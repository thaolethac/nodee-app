const Post = require("../models/NewPost"); 

class PostController {
  async post(req, res, next) {
    let { user, title, description } = req.body;
    const newPost = new Post({
      user,
      title,
      description,
    });
    await newPost
      .save(newPost)
      .then((post) => res.json(post))
      .catch(next);
  }
  getpost(req, res, next) {
    Post.find({})
      .then((post) => res.json(post))
      .catch((err) => console.log(err));
  }
  getpostt(req, res, next) {
    res.json("thao")
  }
  async deletepost(req, res, next) {
    const id = req.params.id;
    // const deletePost = new Delete(id)
    await Post.findByIdAndRemove(id).exec();
    res.send(id);
  }
  async updatepost(req, res, next) {
    // const id = req.body.id
    let { id, newPost, newDes } = req.body;
    try {
      await Post.findOneAndUpdate(
        { _id: id },
        { title: newPost, description: newDes },
        { new: true },
        (err, data) => {
          if (err) {
            next();
          } else {
            next();
          }
        }
      );
    } catch (error) {
      console.log({ err: error.message || "Sai rồi" });
    }
  }

  // create user

  async createuser(req, res, next) {
    // let{email} = req.body
    // const userss = await Post.find({user : email})
    // res.json(userss)
  }
}
module.exports = new PostController();
