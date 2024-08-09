import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("sequelizedb", "proyectodb", "1996", {
  host: "localhost",
  dialect: "postgres",
});
