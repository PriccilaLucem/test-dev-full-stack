export const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: "Rota não encontrada" });
  };
  
  export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro no servidor" });
  };
  