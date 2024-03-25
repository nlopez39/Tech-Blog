const router = require("express").Router();
const Blog = require("../models/Blog");

//GET all blogs for homepage
router.get("/", async (req, res) => {
  try {
    const dbBlog = await Blog.findAll();
    const blogs = dbBlog.map((blog) => blog.get({ plain: true }));
    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});
//login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render login handlebar
  res.render("login");
});
//signup page
router.get("/signup", (req, res) => {
  //render sign up handlebarjs
  res.render("signup");
});
//get dashboard
router.get("/dashboard", (req, res) => {
  //render dashboard handlebarjs
  res.render("dashboard");
});
module.exports = router;
