import * as taskService from "./service.js";
import taskSchema from "./schema.js";
import * as Yup from "yup";

// Get all tasks
export const getTasks = async (req, res) => {
    try {
      const tasks = await taskService.getAllTasks();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
};

// Create a new task
export const createTask = async (req, res) => {
    try {
      await taskSchema.validate(req.body);
  
      const { title, description, status } = req.body;
      const task = await taskService.createTask({ title, description, status });
      res.status(201).json(task);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return res.status(400).json({ error: err.errors.join(", ") });
      }
      res.status(500).json({ error: "Erro ao criar tarefa" });
    }
  };
  
  
// Get a task by ID
export const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
      const task = await taskService.getTaskById(id);
      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: "Erro ao buscar tarefa" });
    }
  };
  
// Update a task by ID
export const updateTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      await taskSchema.validate(req.body);
  
      const { title, description, status } = req.body;
      const updatedTask = await taskService.updateTask(id, { title, description, status });
  
      if (!updatedTask) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
  
      res.json({ message: "Tarefa atualizada", updatedTask });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return res.status(400).json({ error: err.errors.join(", ") });
      }
      res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
  };
  
// Delete a task by ID
export const deleteTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedTask = await taskService.deleteTask(id);
      if (!deletedTask) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err });
    }
};