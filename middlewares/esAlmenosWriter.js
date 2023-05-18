async function esAlMenosWriter(req, res, next) {
  if (req.user.role.code >= 200) {
    console.log(req.user.role.code);
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = {
  esAlMenosWriter,
};
