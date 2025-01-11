import { Router } from "express";
import * as taskController from "./controller.js";

const router = Router();

// Get all tasks
router.get("/tasks", taskController.getTasks);

// Create a new task
router.post("/tasks", taskController.createTask);

// Get task by ID
router.get("/tasks/:id", taskController.getTaskById);

// Update task by ID
router.put("/tasks/:id", taskController.updateTask);

// Delete task by ID
router.delete("/tasks/:id", taskController.deleteTask);

export default router;
