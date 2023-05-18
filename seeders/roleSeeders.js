const { faker } = require("@faker-js/faker");
const { Role } = require("../models");

faker.locale = "es";

module.exports = async function () {
  const role = [
    { code: 100, name: "reader", description: "Este usuario solo puede leer articulos" },
    { code: 200, name: "writer", description: "Este usuario puede leer y escribir articulos" },
    { code: 300, name: "editor", description: "Este usuario puede editar articulos ajenos" },
    { code: 400, name: "admin", description: "Este usuario puede hacer lo que quiera" },
  ];
  await Role.bulkCreate(role);
  console.log("Roles created successfully");
};
