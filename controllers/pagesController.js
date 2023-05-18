/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const { Article, Author, Comment, Role } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const localUser = require("../middlewares/makeUserAvailableInViews");
const { Model } = require("sequelize");

async function index(req, res) {
  const articles = await Article.findAll({
    include: [Author, Comment],
    order: [["createdAt", "DESC"]],
  });
  articles.forEach((article) => {
    article.createdAt = format(article.createdAt, "dd 'de' MMMM','  yyyy", {
      locale: es,
    });
  });
  return res.render("home", { articles });
}

async function showAdmin(req, res) {
  let articles;

  if (req.user.role.code >= 300) {
    articles = await Article.findAll({
      include: "author",
      order: [["createdAt", "DESC"]],
    });
  } else {
    articles = await Article.findAll({
      where: { authorId: req.user.id },
      include: "author",
      order: [["createdAt", "DESC"]],
    });
  }
  articles.forEach((article) => {
    article.dataValues.createdAt = format(article.dataValues.createdAt, "yyyy'-'MM'-'dd hh:mm:ss", {
      locale: es,
    });
  });
  console.log(req.user.role.code);
  return res.render("admin", { articles });
}

// Otros handlers...
// ...

async function showUserPanel(req, res) {
  const users = await Author.findAll({ inclide: Role });
  res.render("userPanel", { users });
}

module.exports = {
  index,
  showAdmin,
  showUserPanel,
};
