import express from "express"
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import ProdutosRoutes from "./ProdutosRoutes.js"
import VendasRoutes from "./VendasRoutes.js"
import ClientesRoutes from "./ClientesRoutes.js"
import UsuariosRoutes from "./UsuariosRoutes.js"

dotenv.config()
const SECRET = process.env.SECRET

const PrivateRoutes = express.Router()

PrivateRoutes.use((req, res, next) => {
    const token = req.headers.token
    let logged = false
    
    if(token) {
        try {
            const tokenDecifrado = jwt.verify(token, SECRET)
            
            if(tokenDecifrado) {
                logged = true
            }
        } catch(e) {
            return res.json(e)
        }
        if(logged = false) {
            return res.json({message: 'Token inválido'})
        }
        next()
    } else {
        res.status(500).json({
            statusCode: 500,
            message: 'Insira o toekn'
        })
    }
})

PrivateRoutes.use(UsuariosRoutes)
PrivateRoutes.use(ProdutosRoutes)
PrivateRoutes.use(VendasRoutes)
PrivateRoutes.use(ClientesRoutes)

export default PrivateRoutes