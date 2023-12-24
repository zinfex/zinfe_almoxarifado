import knex from "../config/Conexao.js";

class ProdutosModel {
  async findAll() {
    try {
      return await knex.select().from("produtos");
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar os produtos");
    }
  }

  async findOne(id) {
    try {
      return await knex.select().from("produtos").where("id", id);
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar o produto");
    }
  }

  async create(data) {
    try {
      return await knex.insert(data).from("produtos");
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível criar o produto");
    }
  }

  async delete(id) {
    try {
      return await knex("produtos").where("id", id).del();
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível deletar o produto");
    }
  }
}

export default ProdutosModel;
