import mysql from 'mysql2';
import acesso from '../acesso.js';

class LojaPedidoModel{
    constructor(){
        this.conexao = mysql.createConnection(acesso);
    };

    create(desc,tot,cliente){
        let sql = `INSERT INTO pedidos VALUES(null,'${desc}',${tot},${cliente});`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([201,"Pedido cadastrado"]);
            });
        });
    };

    read(){
        let sql = `SELECT * FROM pedidos;`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([200,resultado]);
            });
        });
    };

    update(desc,tot,id_cliente,id){
        let sql = `UPDATE pedidos SET descricao='${desc}',tot=${tot},id_cliente=${id_cliente} where id=${id}`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([200,`Pedido ${id} foi atualizado`]);
            });
        });
    };

    delete(id_pedido){
        let sql = `DELETE FROM pedidos where id=${id_pedido}`;

        return new Promise((reject,resolve)=>{
            this.conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject([400,reject]);
                };
                resolve([200,`Pedido ${id_pedido} foi deletado`]);
            });
        });
    };
};

export default new LojaPedidoModel;