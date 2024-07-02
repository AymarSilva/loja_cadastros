import express from 'express';
import LojaClienteController from './Controllers/lojaClienteController.js';
import LojaPedidoController from './Controllers/lojaPedidoController.js';

const porta = 5000;
const server = express();

server.use(express.json());

server.get("/myStore/clientes",LojaClienteController.read);
server.post("/myStore/clientes",LojaClienteController.create);
server.put("/myStore/clientes/:id",LojaClienteController.update);
server.delete("/myStore/clientes/:id",LojaClienteController.delete);

server.get("/myStore/pedidos",LojaPedidoController.read);
server.post("/myStore/pedidos",LojaPedidoController.create);
server.put("/myStore/pedidos/:pedido",LojaPedidoController.update);
server.delete("/myStore/pedidos/:pedido",LojaPedidoController.delete);


server.listen(porta, console.log(`Escutando em ${porta}`));