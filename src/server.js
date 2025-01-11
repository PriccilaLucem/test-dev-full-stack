import app from "./index.js";
import initTaskTable from "./tasks/entity.js";

const PORT = 3000;

(async () => {
   try {
     await initTaskTable(); 
     
    app.listen(PORT, () => {
       console.log(`Servidor rodando na porta ${PORT}`);
     });
   } catch (error) {
     console.error("Erro ao inicializar a aplicação:", error.message);
   }
 })();