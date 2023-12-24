import ClientesModel from "../model/ClientesModel.js";

class ClientesController {

    async findAll(req, res) {
        try {
            const model = new ClientesModel();
            const data = await model.findAll();
            return res.send(data)
        } catch(e) {
            console.log(e)
            return res.status(500)
        }
    }

    async findOne(req, res) {
        try {
            const model = new ClientesModel();
            const id = req.params.id
            const data = await model.findOne(id)
            return res.send(data)
        } catch(e) {
            console.log(e)
            return res.status(500)
        }
    }

    async create(req, res) {
        try {
            const body = req.body
            const model = new ClientesModel();
            const data = await model.create(body)
            return res.send(data)
        } catch(e) {
            console.log(e)
            return res.status(500)
        }
    }

    async delete(req, res) {
        try {
            const model = new ClientesModel();
            const id = req.params.id
            const data = await model.delete(id)
            return res.send(data)
        } catch(e) {
            console.log(e)
            return res.status(500)
        }
    }

}

export default ClientesController;