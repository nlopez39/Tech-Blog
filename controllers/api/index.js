const router = require("express").Router();
const createRoute = require("./createRoutes");

router.use("/createdblog", createRoute);

module.exports = router;
