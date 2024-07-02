import LojaPedidoModel from "../Models/lojaPedidoModel.js";

class LojaPedidoController{

    create(req,res){

        const desc_ped = req.body.desc;
        const tot_ped = req.body.tot;
        const cliente = req.body.cliente;

        LojaPedidoModel.create(desc_ped,tot_ped,cliente).then(
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
        LojaPedidoModel.read().then(
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

        const id_ped = req.params.pedido;
        const desc_ped = req.body.desc;
        const tot_ped = req.body.tot;
        const id_cliente = req.body.cliente;

        LojaPedidoModel.update(desc_ped,tot_ped,id_cliente,id_ped).then(
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

        const id_ped = req.params.pedido;

        LojaPedidoModel.delete(id_ped).then(
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

export default new LojaPedidoController;