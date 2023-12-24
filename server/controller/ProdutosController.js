import ProdutosModel from "../model/ProdutosModel.js";

class ProdutosController {

    async findAll(req, res) {
        const model = new ProdutosModel();
        const data = await model.findAll();
        return res.send(data)
    } 

    async findOne(req, res) {
        const model = new ProdutosModel();
        const id = req.params.id
        const data = await model.findOne(id)
        return res.send(data)
    }

    async create(req, res) {
        const body = req.body
        const model = new ProdutosModel();
        const data = await model.create(body)
        return res.send(data)
    }

    async delete(req, res) {
        const model = new ProdutosModel();
        const id = req.params.id
        const data = await model.delete(id)
        return res.send(data)
    }
}

export default ProdutosController;