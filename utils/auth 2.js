// DON"T THINK THIS IS IN USE? maybe delete? someone else confirm this isn't being used.

const getAuth = (req, res, next) => {
  //if not logged in, go to login
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    //move on to next function if logged in
    next();
  }
};

module.exports = getAuth;
