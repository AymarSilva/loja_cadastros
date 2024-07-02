create database loja;
use loja;
create table clientes(
	id int auto_increment primary key,
    nome varchar(30),
    endereco varchar(100)
);
create table pedidos(
	id int auto_increment primary key,
    descricao varchar(60),
    tot decimal(5,2),
    id_cliente int,
    foreign key (id_cliente) REFERENCES clientes(id)
);
INSERT INTO clientes VALUES(
	null,
    "Eduardo",
    "Pedro Leopoldo, 1200B"
);
INSERT INTO pedidos VALUES(
	null,
    "Pasta de dente colgate, sabonete comum",
    14.30,
    1
);