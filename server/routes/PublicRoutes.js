import express from "express";
import AuthController from "../controller/AuthController.js";
import UsuariosController from "../controller/UsuariosController.js";

const PublicRoutes = express.Router()

const authController = new AuthController()
PublicRoutes.post('/usuarios/login', authController.VerifyLogin)

const usuariosController = new UsuariosController()
PublicRoutes.post('/usuarios', usuariosController.create)

export default PublicRoutes
