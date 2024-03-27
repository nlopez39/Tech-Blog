const router = require("express").Router();
const createRoute = require("./createRoutes");
const userRoute = require("./userRoutes");

router.use("/users", userRoute);
router.use("/posts", createRoute);

module.exports = router;
