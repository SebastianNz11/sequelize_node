import { Router } from "express";
import {
  getTareas,
  createTarea,
  getTarea,
  deleteTarea,
  updateProyecto,
} from "../controllers/tareas.controller.js";

const router = Router();

router.get("/tareas", getTareas);
router.post("/tareas", createTarea);
router.put("/tareas/:id", updateProyecto);
router.delete("/tareas/:id", deleteTarea);
router.get("/tareas/:id", getTarea);

export default router;
