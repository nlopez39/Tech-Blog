//this is the index.js for the server?
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-route.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
