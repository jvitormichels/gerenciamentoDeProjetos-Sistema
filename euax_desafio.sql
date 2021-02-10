-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Fev-2021 às 05:26
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `euax_desafio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `activities`
--

DROP TABLE IF EXISTS `activities`;
CREATE TABLE `activities` (
  `activity_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `activity_name` text NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `finished` tinyint(1) NOT NULL,
  `archived` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `activities`
--

INSERT INTO `activities` (`activity_id`, `project_id`, `activity_name`, `date_start`, `date_end`, `finished`, `archived`) VALUES
(1, 1, 'Criar repositório', '2021-02-03', '2021-02-03', 1, 0),
(2, 1, 'Preparar ambiente', '2021-02-03', '2021-02-03', 1, 0),
(3, 1, 'Criar banco de dados', '2021-02-03', '2021-02-04', 1, 0),
(4, 1, 'Estrutura básica de tabelas', '2021-02-04', '2021-02-04', 1, 0),
(5, 1, 'Formulário de criação de projetos', '2021-02-04', '2021-02-04', 1, 0),
(6, 1, 'Inserção de novos projetos no banco de dados', '2021-02-04', '2021-02-04', 1, 0),
(7, 1, 'Formulário de criação de atividades', '2021-02-04', '2021-02-04', 1, 0),
(8, 1, 'Link da atividade com seu projeto pai', '2021-02-05', '2021-02-05', 1, 0),
(9, 1, 'ID sequenciais de atividades por projeto', '2021-02-05', '2021-02-06', 1, 0),
(10, 1, 'Cálculo de atraso de projetos', '2021-02-06', '2021-02-06', 1, 0),
(11, 1, 'Deleção de projetos', '2021-02-06', '2021-02-06', 1, 0),
(12, 1, 'Edição de projetos', '2021-02-06', '2021-02-07', 1, 0),
(13, 1, 'Arquivar projetos', '2021-02-07', '2021-02-07', 1, 0),
(14, 1, 'Desarquivar projetos', '2021-02-07', '2021-02-07', 1, 0),
(15, 1, 'Estilização básica', '2021-02-08', '2021-02-08', 1, 0),
(16, 1, 'Arquivar e desarquivar atividades', '2021-02-08', '2021-02-08', 1, 0),
(17, 1, 'Deleção de atividades', '2021-02-08', '2021-02-08', 1, 0),
(18, 1, 'Editar, concluir e desconcluir atividades', '2021-02-09', '2021-02-09', 1, 0),
(19, 1, 'Refatorar e comentar o código', '2021-02-09', '2021-02-09', 1, 0),
(20, 1, 'Escrever o README', '2021-02-09', '2021-02-09', 1, 0),
(1, 2, 'Movimentação básica em 3° pessoa', '2021-02-03', '2021-02-08', 0, 0),
(2, 2, 'Sistema de direção', '2021-02-05', '2021-02-07', 1, 0),
(3, 2, 'Modelagem de personagens', '2021-02-18', '2021-03-03', 0, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `project_name` text NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `archived` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `projects`
--

INSERT INTO `projects` (`project_id`, `project_name`, `date_start`, `date_end`, `archived`) VALUES
(1, 'Desafio EUAX', '2021-02-03', '2021-02-10', 0),
(2, 'VRChat caseiro', '2021-02-03', '2021-02-26', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
