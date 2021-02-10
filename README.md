# Sistema de gerenciamento de projetos e atividades


## Introdução

Este projeto foi criado segundo [desafio](https://github.com/Artia/desafios-desevolvimento/blob/master/desafio-fullstack.md) para a vaga de Estágio em Desenvolvimento de Software do [Grupo EUAX](https://grupoeuax.com.br/carreira/).


## Problema

Você precisa criar um cadastro de projetos com a data de início e data final para a entrega, esse projeto pode ter 1 ou N atividades que também precisam ser cadastradas com as datas de início e data de fim. Após ter feito todos os cadastros precisamos saber quantos % dos projetos já temos finalizados e também se o projeto terá atrasos ou não. Para saber a % de andamento do projeto deve ser considerado o número de atividades finalizadas e quantidade de atividades ainda sem finalizar. Para saber se o projeto terá atraso considere a maior data final das atividades e compare com a data final do projeto, se for maior que a data final, o projeto terminará com atrasos.


## Funcionamento

O funcionamento dá-se através do cadastro, manipulação e listagem de projetos e atividades que pertencem a tais projetos.

Ambos, projetos e atividades podem receber as seguintes ações:
* Criação
* Edição
* Deleção
* Arquivação

Ainda, atividades podem ser concluidas e desconcluídas, ação que impacta no status de progresso do projeto.
Baseado na conclusão e prazo final de suas atividades, é calculado o progresso do projeto seu potencial atraso.


## Tecnologias

* [MySQL](https://www.mysql.com/)
* [PHP](https://www.php.net/)
* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JS](https://www.javascript.com/)


## Possíveis melhorias

* Formatação de data nas tabelas
* Refatoração do script responsável pela criação dos modais
