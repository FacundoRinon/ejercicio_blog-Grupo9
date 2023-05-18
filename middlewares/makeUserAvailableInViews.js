async function makeUserAvailableInViews(req, res, next) {
  res.locals.user = req.user;
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.esAdmin = req.esAdmin;
  next();
}

module.exports = makeUserAvailableInViews;
