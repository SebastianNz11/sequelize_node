import { proyect } from "../models/proyect.js";

export const getProyectos = async (req, res) => {
  try {
    const proyectos = await proyect.findAll();
    res.json(proyectos);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudieron obtener los proyectos" });
  }
};

export const getProyectoById = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await proyect.findOne({
      where: { id },
    });

    res.json(proyecto);
  } catch (error) {
    return res.status(500).json({ error: "No se pudo obtener el proyecto" });
  }
};

export const postProyectos = async (req, res) => {
  try {
    const { nombre, prioridad, descripcion } = req.body;
    const nuevoProyecto = await proyect.create({
      nombre,
      descripcion,
      prioridad,
    });

    res.json(nuevoProyecto);
  } catch (error) {
    return res.status(500).json({ error: "No se pudo enviar el proyecto" });
  }
};

export const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, prioridad } = req.body;

    const proyecto = await proyect.findByPk(id);
    proyecto.nombre = nombre;
    proyecto.descripcion = descripcion;
    proyecto.prioridad = prioridad;
    await proyecto.save();
    res.json(proyecto);
  } catch (error) {
    return res.status(500).json({ error: "No se pudo actualizar el proyecto" });
  }
};

export const deleteProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    await proyect.destroy({
      where: { id },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "No se pudo eliminar el proyecto" });
  }
};
