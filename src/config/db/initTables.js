import pool from "./connection.js";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS Task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pendente', 'concluído') NOT NULL DEFAULT 'pendente'
  );
`;

const initTables = async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(createTableQuery);
    console.log("Tabela 'Task' criada ou já existe.");
    connection.release();
  } catch (err) {
    console.error("Erro ao criar a tabela:", err.message);
  }
};

export default initTables;
