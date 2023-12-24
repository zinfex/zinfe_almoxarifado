import express from 'express'
import UsuariosController from '../controller/UsuariosController.js'
import AuthController from '../controller/AuthController.js'

const UsuariosRoutes = express.Router()

const authController = new AuthController()
const usuariosController = new UsuariosController()
UsuariosRoutes.get('/usuarios', usuariosController.findAll)
UsuariosRoutes.get('/usuarios/:id', usuariosController.findOne)
UsuariosRoutes.post('/usuarios', usuariosController.create)
UsuariosRoutes.delete('/usuarios/:id', usuariosController.delete)

UsuariosRoutes.post('/usuarios/login', authController.VerifyLogin)


export default UsuariosRoutes