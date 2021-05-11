# Nginx com Node.js

A ideia nesse desafio é criar uma aplicação node que insira um nome em uma tabela do banco de dados mysql, sempre que for chamada e retorne os nomes já inseridos.
Além disso utilizar o nginx como proxy reverso para a aplicação.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Foi gerado um arquivo docker-compose, basta rodar: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
