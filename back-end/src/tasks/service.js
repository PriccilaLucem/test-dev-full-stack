import pool from "../config/db/connection.js";

export const getAllTasks = async () => {
    const [results] = await pool.query("SELECT * FROM Task");
    return results;
};
  
// Create a new task
export const createTask = async (taskData) => {
  const { title, description, status } = taskData;
  const [result] = await pool.query(
    "INSERT INTO Task (title, description, status) VALUES (?, ?, ?)",
    [title, description, status]
  );
  return {
    id: result.insertId,
    title,
    description,
    status,
  };
};

// Get a task by ID
export const getTaskById = async (id) => {
  const [result] = await pool.query("SELECT * FROM Task WHERE id = ?", [id]);
  return result[0];
};

// Update a task by ID
export const updateTask = async (id, taskData) => {
  const { title, description, status } = taskData;
  const [result] = await pool.query(
    "UPDATE Task SET title = ?, description = ?, status = ? WHERE id = ?",
    [title, description, status, id]
  );
  return result.affectedRows > 0 ? { id, title, description, status } : null;
};

// Delete a task by ID
export const deleteTask = async (id) => {
  const [result] = await pool.query("DELETE FROM Task WHERE id = ?", [id]);
  return result.affectedRows > 0;
};