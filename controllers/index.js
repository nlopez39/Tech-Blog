//this is the index.js for the server?
const router = require("express").Router();

const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);

module.exports = router;
