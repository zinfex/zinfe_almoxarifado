import UsuariosModel from "../model/UsuariosModel.js";

class UsuariosController {

    async findAll(req, res) {
        const model = new UsuariosModel();
        const data = await model.findAll();
        return res.send(data)
    }

    async findOne(req, res) {
        const model = new UsuariosModel();
        const id = req.params.id
        const data = await model.findOne(id)
        return res.send(data)
    }

    async create(req, res) {
        const body = req.body
        const model = new UsuariosModel();
        const data = await model.create(body)
        
        if(data == null) {
            return res.status(400).json({
                message: 'Não foi possível criar o usuário'
            })
        }

        return res.status(201).json({data})
    }

    async delete(req, res) {
        const model = new UsuariosModel();
        const id = req.params.id
        const data = await model.delete(id)
        return res.status(200).json({data})
    }

}

export default UsuariosController;