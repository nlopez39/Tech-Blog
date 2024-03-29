const router = require("express").Router();
const Blog = require("../../models/Blog");

router.post("/", async (req, res) => {
  console.log(req.body);
  const body = {
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id,
  };
  try {
    const newPost = await Blog.create(body);
    res.status(200).json(newPost);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
module.exports = router;
