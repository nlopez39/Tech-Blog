const router = require("express").Router();
const Blog = require("../models/Blog");

//GET all blogs for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlog = await Blog.findAll();
    const blogs = dbBlog.map((blog) => blog.get({ plain: true }));
    res.render("homepage", {
      blogs,
      //   loggedIn: req.session.loggedIn,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});
module.exports = router;
