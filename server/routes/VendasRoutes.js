import express from 'express';
import VendasController from '../controller/VendasController.js';

const VendasRoutes = express.Router();

const vendasController = new VendasController();
VendasRoutes.get('/vendas', vendasController.findAll)
VendasRoutes.post('/vendas', vendasController.create)
VendasRoutes.put('/vendas/:id', vendasController.low)

export default VendasRoutes;