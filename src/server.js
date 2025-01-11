import app from "./index.js";
import initTables from "./config/db/initTables.js";

const PORT = 3000;

(async () => {
   try {
     await initTables(); // Inicializa a tabela antes de iniciar o servidor
     app.listen(PORT, () => {
       console.log(`Servidor rodando na porta ${PORT}`);
     });
   } catch (error) {
     console.error("Erro ao inicializar a aplicação:", error.message);
   }
 })();