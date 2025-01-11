import taskRoutes from "../tasks/routes.js";
import { notFoundHandler, errorHandler } from "./errorHandlerMiddleware.js";

const routes = (app) => {
    app.use("/api", taskRoutes)
    app.use(notFoundHandler)
    app.use(errorHandler)
}

export default routes