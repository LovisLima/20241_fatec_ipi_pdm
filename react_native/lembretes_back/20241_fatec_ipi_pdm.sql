-- Active: 1716598823947@@mysql-lembretes-lembretes.k.aivencloud.com@22418@20241_fatec_ipi_pdm
-- Active: 1715685873518@@localhost@5432@20241_fatec_ipi_pdmn@public

SELECT * FROM tb_lembrete;

INSERT INTO tb_lembrete (texto) VALUES
('descansar');

INSERT INTO tb_lembrete (texto) VALUES
('Fazer um suco');



INSERT INTO tb_lembrete (texto) VALUES
('Ver um filme');


INSERT INTO
    tb_lembrete (texto)
VALUES ('Ir à feira'),
       ('Encerrar a aula');


--postgresql
CREATE TABLE tb_lembrete(
  id SERIAL PRIMARY KEY,
  texto VARCHAR(1000) NOT NULL
);

--mysql
CREATE TABLE tb_lembrete(
  id INT PRIMARY KEY AUTO_INCREMENT,
  texto VARCHAR(1000) NOT NULL
);