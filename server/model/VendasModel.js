import knex from "../config/Conexao.js";

class VendasModel {
  async findAll() {
    try {
      const vendas = await knex.select().from("vendas");
      return vendas;
    } catch (e) {
      console.log(e);
      throw new Error("não foi possível encontrar as vendas");
    }
  }

  async create(data) {
    try {
      return await knex.insert(data).from("vendas");
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível criar a venda");
    }
  }

  async low(id) {
    try {
      const produto = await knex
        .select("amount")
        .from("produto")
        .where("id", id);
      return await knex("produto")
        .where("id", id)
        .update("amount", produto[0].amount - 1);
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível diminuir a quantiade");
    }
  }
}

export default VendasModel;
