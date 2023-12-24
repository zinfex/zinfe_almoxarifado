import knex from "../config/Conexao.js";

class ClientesModel {
  async findAll() {
    try {
      return await knex.select().from("clientes");
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar os clientes");
    }
  }

  async findOne(id) {
    try {
      return await knex.select().from("clientes").where("id", id);
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar o cliente");
    }
  }

  async create(data) {
    try {
      return await knex.insert(data).from("clientes");
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível criar o cliente");
    }
  }

  async delete(id) {
    try {
      return await knex("clientes").where("id", id).del();
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível deletar o cliente");
    }
  }
}

export default ClientesModel;
