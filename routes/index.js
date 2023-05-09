/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */
const adminRoutes = require("./adminRoutes");
const articleRoutes = require("./articleRoutes");
const apiRoutes = require("./apiRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  app.use("/admin", adminRoutes);
  app.use("/", articleRoutes);
  app.use("/api", apiRoutes);
  // app.use("/articulo/:id", articleRoutes);
  app.use("/usuarios", userRoutes);
};
