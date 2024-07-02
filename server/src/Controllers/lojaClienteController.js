import LojaClienteModel from "../Models/lojaClienteModel.js";

class LojaClienteController{

    create(req,res){

        const nome_cliente = req.body.nome;
        const endereco_cliente = req.body.endereco;

        LojaClienteModel.create(nome_cliente,endereco_cliente).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    read(req,res){
        LojaClienteModel.read().then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    update(req,res){

        const nome_cliente = req.body.nome;
        const endereco_cliente = req.body.endereco;
        const id_cliente = req.params.id;

        LojaClienteModel.update(nome_cliente,endereco_cliente,id_cliente).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };

    delete(req,res){

        const id_cliente = req.params.id;

        LojaClienteModel.delete(id_cliente).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        ).catch(
            resposta =>{
                res.status(resposta[0]).json(resposta[1]);
            }
        );
    };
};

export default new LojaClienteController;