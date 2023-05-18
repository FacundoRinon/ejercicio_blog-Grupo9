async function esAlMenosEditor(req, res, next) {
  if (req.user.role.code >= 300) {
    console.log(req.user.role.code);
    return next();
  } else {
    res.redirect("back");
  }
}

module.exports = esAlMenosEditor;
