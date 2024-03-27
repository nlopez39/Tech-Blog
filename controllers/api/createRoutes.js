const router = require("express").Router();
const Blog = require("../../models/Blog");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newPost = await Blog.create({
      ...req.body,
    });
    res.status(200).json(newPost);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
module.exports = router;
