import mysql from 'mysql2';
import acesso from '../acesso.js';

class LojaClienteModel{
    constructor(){
        this.conexao = mysql.createConnection(acesso);
    };

    create(nome_cliente,endereco_cliente){
        let sql = `INSERT INTO clientes VALUES(null,'${nome_cliente}','${endereco_cliente}');`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([201,"Cliente cadastrado"]);
            });
        });
    };

    read(){
        let sql = `SELECT * FROM clientes;`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([200,resultado]);
            });
        });
    };

    update(nome_cliente,endereco_cliente,id_cliente){
        let sql = `UPDATE clientes SET nome='${nome_cliente}',endereco='${endereco_cliente}' where id=${id_cliente}`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([200,`Cliente ${id_cliente} foi atualizado`]);
            });
        });
    };

    delete(id_cliente){
        let sql = `DELETE FROM clientes where id=${id_cliente}`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([200,`Cliente ${id_cliente} foi deletado`]);
            });
        });
    };
};

export default new LojaClienteModel;