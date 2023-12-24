import knex from "../config/Conexao.js";
import { hash, compare } from 'bcrypt'

class UsuariosModel {
  async findAll() {
    try {
      return await knex.select().from("usuarios");
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar os usuarios");
    }
  }

  async findLogin(email, senha) {
    try {
      const usuarioCript = await knex.select('senha').from("usuarios").where('email', email).first()

      const validSenha = await compare(senha, usuarioCript.senha)
      
      if (validSenha) {
        return await knex.select().from("usuarios").where({
          email: email,
          senha: usuarioCript.senha,
        });
      }
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar o login");
    }
  }

  async findOne(id) {
    try {
      return await knex.select().from("usuarios").where("id", id);
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível encontrar o usuario");
    }
  }

  async create(data) {
    try {
      const email = await knex
        .select()
        .from("usuarios")
        .where("email", data.email);

      const senha = data.senha
      
      if ((email.length == 0) && (senha.length >= 5)) {
        const dados = { 
          email: data.email,
          senha: await hash(senha, 5)
        }
        return await knex.insert(dados).from("usuarios");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível criar o usuário");
    }
  }

  async delete(id) {
    try {
      return await knex("usuarios").where("id", id).del();
    } catch (e) {
      console.log(e);
      throw new Error("Não foi possível deletar o usuário");
    }
  }
}

export default UsuariosModel;
