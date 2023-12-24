import express from "express";
import ClientesController from "../controller/ClientesController.js";

const ClientesRoutes = express.Router();

const clientesController = new ClientesController();
ClientesRoutes.get('/clientes', clientesController.findAll)
ClientesRoutes.get('/clientes/:id', clientesController.findOne)
ClientesRoutes.post('/clientes', clientesController.create)
ClientesRoutes.delete('/clientes/:id', clientesController.delete)

export default ClientesRoutes;