async function esAdmin(req, res, next) {
  if (req.user.role.code >= 400) {
    console.log(req.user.role.code);
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = esAdmin;
