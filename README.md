1. Estrutura da Aplicação

A aplicação deve conter ao menos três componentes principais: 
BookList: renderiza os livros cadastrados.
BookForm: formulário para adicionar um novo livro.
BookItem: componente que representa um único livro com suas ações.

2. Tipagem com TypeScript

Criar interfaces ou types para: 
A estrutura de um livro (title, author, status, _id)
Props dos componentes
Estado local e eventos de formulário

3. Funcionalidades obrigatórias

Listar livros armazenados na API crudcrud.com.
Adicionar um novo livro via formulário (título, autor, status: "Lido"/"Não lido").
Remover livro da lista (requisição DELETE).
(Opcional) Atualizar o status do livro ("Lido"/"Não lido").

4. Integração com API

Obter uma URL única da API em https://crudcrud.com (não precisa autenticação).

Realizar as operações com axios ou fetch: 
GET: listar livros
POST: adicionar livro
DELETE: remover livro
(Opcional) PUT: atualizar status

BONUS
5. Utilizar o Jotai, para não acontecer o Lifting State