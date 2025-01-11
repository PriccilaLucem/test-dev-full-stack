import { Router } from "express";
import pool from "../config/db/connection.js";

const router = Router()

router.get("/tasks", async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM Task");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

router.post("/tasks", async (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !status) {
    return res.status(400).json({ error: "Título e status são obrigatórios" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO Task (title, description, status) VALUES (?, ?, ?)",
      [title, description, status]
    );
    res.status(201).json({ message: "Tarefa criada", taskId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
});

export default router