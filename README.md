# Como rodar o projeto?

1º Clone o projeto

```
git clone https://github.com/HellenCristinaP/catalogo_de_livros
```

2º Após isso, crie uma pasta chamada ".env"(importante ter esse ponto no início) na raiz no projeto.

3º Acesso o site do [CrudCrud](https://crudcrud.com) e pegue o link da API.

4º Crie uma variável no arquivo que você criou, com o *link da API* como _valor_ e o _nome da variável_ como *"VITE_LOCAL_API"*

Exemplo:
```
VITE_LOCAL_API = "https://crudcrud.com/api/52a341af940wmf9..."
```

5º Rode o projeto

```
npm run dev
```

# Requisitos

## 1. Estrutura da Aplicação

A aplicação deve conter ao menos três componentes principais: 
BookList: renderiza os livros cadastrados.
BookForm: formulário para adicionar um novo livro.
BookItem: componente que representa um único livro com suas ações.

## 2. Tipagem com TypeScript

Criar interfaces ou types para: 
A estrutura de um livro (title, author, status, _id)
Props dos componentes
Estado local e eventos de formulário

## 3. Funcionalidades obrigatórias

Listar livros armazenados na API crudcrud.com.
Adicionar um novo livro via formulário (título, autor, status: "Lido"/"Não lido").
Remover livro da lista (requisição DELETE).
(Opcional) Atualizar o status do livro ("Lido"/"Não lido").

## 4. Integração com API

Obter uma URL única da API em https://crudcrud.com (não precisa autenticação).

Realizar as operações com axios ou fetch: 
GET: listar livros
POST: adicionar livro
DELETE: remover livro
(Opcional) PUT: atualizar status

## BÔNUS
5. Utilizar o Jotai, para não acontecer o Lifting State