// User authentication
const withAuth = (req, res, next) => {
  console.log(req.session.loggedIn);
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

// Export
module.exports = withAuth;
