import VendasModel from "../model/VendasModel.js";

class VendasController {
  async findAll(req, res) {
    const model = new VendasModel();
    const data = await model.findAll();
    return res.status(200).json(data);
  }

  async create(req, res) {
    const model = new VendasModel();
    const body = req.body;
    const data = await model.create(body);
    return res.status(200).json(data);
  }

  async low(req, res) {
    const model = new VendasModel();
    const id = req.params.id;
    const data = await model.low(id);
    return res.status(200).json(data);
  }
}

export default VendasController;
