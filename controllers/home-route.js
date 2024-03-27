const router = require("express").Router();
const Blog = require("../models/Blog");
const User = require("../models/User");
const withAuth = require("../utils/auth");

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

//get dashboard but must be logged in
//use withAuth as middleware
router.get("/dashboard", withAuth, async (req, res) => {
  //render dashboard handlebarjs
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog, include: [User] }],
    });
    const user = userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

//get createBlog
router.get("/createBlog", async (req, res) => {
  //render create blog handlebarjs
  //renders create blog if user is logged in
  try {
    if (req.session.loggedIn) {
      res.render("createBlog", {
        loggedIn: req.session.loggedIn,
        userId: req.session.user_id,
      });
    }
  } catch (e) {
    res.status(500).json(e);
  }
});
//login page
router.all("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render login handlebar
  res.render("login");
});
//signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  //render sign up handlebarjs
  res.render("signup");
});
module.exports = router;
