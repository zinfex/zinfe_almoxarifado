import express from "express";
import ProdutosController from "../controller/ProdutosController.js";

const ProdutosRoutes = express.Router();

const produtosController = new ProdutosController();
ProdutosRoutes.get('/produtos', produtosController.findAll)
ProdutosRoutes.get('/produtos/:id', produtosController.findOne)
ProdutosRoutes.post('/produtos', produtosController.create)
ProdutosRoutes.delete('/produtos/:id', produtosController.delete)

export default ProdutosRoutes;