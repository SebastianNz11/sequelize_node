import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { task } from "./task.js";

export const proyect = sequelize.define("proyectos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  prioridad: {
    type: DataTypes.INTEGER,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

proyect.hasMany(task, {
  foreignKey: "idProyecto",
  sourceKey: "id",
});

task.belongsTo(proyect, {
  foreignKey: "idProyecto",
  targetId: "id"
});
