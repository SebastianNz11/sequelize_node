import express from "express";
import { sequelize } from "./database/database.js";
import proyectosRouter from "./routes/proyectos.routes.js";
import tareasRouter from "./routes/tareas.routes.js";
import "./models/proyect.js";

const app = express();
app.use(express.json());
app.use(proyectosRouter);
app.use(tareasRouter);

try {
  await sequelize.sync();
  app.listen(4000);
  console.log("Servidor escuchando en el puerto 4000");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
