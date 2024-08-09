import { Router } from "express";
import {
  getProyectos,
  postProyectos,
  deleteProyecto,
  updateProyecto,
  getProyectoById
} from "../controllers/proyectos.controller.js";

const router = Router();

router.get("/proyectos", getProyectos);
router.post("/proyectos", postProyectos);
router.put("/proyectos/:id", updateProyecto);
router.delete("/proyectos/:id", deleteProyecto);
router.get("/proyectos/:id", getProyectoById);

export default router;
