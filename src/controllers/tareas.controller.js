import { task } from "../models/task.js";

export const getTareas = async (req, res) => {
  try {
    const tareas = await task.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron recuperar las tareas" });
  }
};

export const createTarea = async (req, res) => {
  try {
    const { nombre, hecho, idProyecto } = req.body;
    const nuevaTarea = await task.create({
      nombre,
      hecho,
      idProyecto,
    });
    res.json(nuevaTarea);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la tarea" });
  }
};

export const getTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await task.findOne({
      where: { id },
    });

    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: "No se encontro la tarea" });
  }
};

export const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, hecho, idProyecto } = req.body;

    const tarea = await task.findByPk(id);
    tarea.nombre = nombre;
    tarea.hecho = hecho;
    tarea.idProyecto = idProyecto;
    await tarea.save();
    res.json(tarea);
  } catch (error) {
    return res.status(500).json({ error: "No se pudo actualizar la tarea" });
  }
};

export const deleteTarea = async (req, res) => {
  const { id } = req.params;
  const tarea = await task.destroy({
    where: { id },
  });

  return res.status(204).send();
};
