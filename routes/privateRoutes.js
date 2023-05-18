const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const pagesController = require("../controllers/pagesController");
const authController = require("../controllers/authController");
const { esAlMenosWriter } = require("../middlewares/esAlmenosWriter");
const { esAlMenosEditor } = require("../middlewares/esAlMenosEditor");
const esAdmin = require("../middlewares/esAdmin");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/welcome", ensureAuthenticated, function (req, res) {
  console.log(req.user.firstname);
  return res.redirect("/");
});

router.get("/", ensureAuthenticated, esAlMenosWriter, pagesController.showAdmin);

router.get("/logOut", authController.logout);

router.get("/userPanel", esAdmin, pagesController.showUserPanel);

module.exports = router;
