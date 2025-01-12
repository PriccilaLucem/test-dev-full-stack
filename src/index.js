import express from 'express'
import routes from './routes/routes.js'
import pool from "./config/db/connection.js";
import cors from 'cors'; 

const app = express()
app.use(express.json());
app.use(cors());

routes(app)

process.on("SIGINT", async () => {
    console.log("Encerrando conexões do pool...");
    try {
      await pool.end();
      console.log("Conexões do pool encerradas com sucesso.");
    } catch (err) {
      console.error("Erro ao encerrar conexões do pool:", err);
    }
    process.exit(0);
  });

process.on("SIGTERM", async () => {
    console.log("Encerrando conexões do pool devido a SIGTERM...");
    try {
      await pool.end();
      console.log("Conexões do pool encerradas com sucesso.");
    } catch (err) {
      console.error("Erro ao encerrar conexões do pool:", err);
    }
    process.exit(0);
  });
export default app