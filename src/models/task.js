import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const task = sequelize.define("tareas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  hecho: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
