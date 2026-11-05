# 🎮 API MongoDB — Games Catalog

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  Uma API REST desenvolvida com Node.js, Express e MongoDB para realizar operações CRUD em um catálogo de jogos.
</p>

---

## 📌 Sobre o projeto

O **API MongoDB** é um projeto desenvolvido para praticar a criação e integração de uma API REST com um banco de dados NoSQL utilizando MongoDB.

A aplicação permite gerenciar informações de jogos por meio de requisições HTTP, oferecendo operações para cadastrar, consultar, atualizar e excluir registros.

O projeto utiliza o Express para estruturar as rotas da API e o driver oficial do MongoDB para realizar a comunicação com o banco de dados.

## 🚀 Funcionalidades

- [x] Cadastrar novos jogos.
- [x] Listar todos os jogos cadastrados.
- [x] Consultar um jogo específico pelo ID.
- [x] Atualizar informações de um jogo.
- [x] Excluir jogos do banco de dados.
- [x] Integração com MongoDB.
- [x] Respostas no formato JSON.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| JavaScript | Linguagem de programação |
| Node.js | Ambiente de execução |
| Express.js | Criação e gerenciamento das rotas HTTP |
| MongoDB | Banco de dados NoSQL |
| MongoDB Driver | Comunicação com o banco de dados |

## 📂 Estrutura do projeto

```text
api_mongodb/
│
├── index.js           # Arquivo principal da aplicação
├── package.json       # Dependências e configurações
├── package-lock.json  # Controle das versões instaladas
├── .gitignore         # Arquivos ignorados pelo Git
└── README.md          # Documentação do projeto
```

## ⚙️ Instalação e execução

### 1. Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou uma instância local do MongoDB.
- [Git](https://git-scm.com/)
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

### 2. Clone o repositório

```bash
git clone https://github.com/Gregorio14izi/api_mongodb.git
```

### 3. Entre na pasta do projeto

```bash
cd api_mongodb
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Configure a conexão com o MongoDB

A aplicação utiliza a variável de ambiente `MONGO_URI` para estabelecer a conexão com o banco de dados.

No Windows PowerShell:

```powershell
$env:MONGO_URI="mongodb+srv://usuario:senha@cluster.mongodb.net/"
```

No Linux ou macOS:

```bash
export MONGO_URI="mongodb+srv://usuario:senha@cluster.mongodb.net/"
```

Substitua os dados de exemplo pela sua própria string de conexão.

### 6. Execute a aplicação

```bash
node index.js
```

Se a conexão for estabelecida corretamente, o terminal apresentará:

```text
CONECTADO AO MONGODB
API RODANDO NA PORTA 3000
```

A API estará disponível em:

```text
http://localhost:3000
```

## 📡 Documentação dos endpoints

A API disponibiliza cinco endpoints principais para manipulação dos dados.

**Base URL:**

```text
http://localhost:3000
```

### 1. Cadastrar um jogo

| Propriedade | Valor |
|---|---|
| Método | POST |
| Endpoint | `/jogos` |
| Descrição | Cadastra um novo jogo |

Exemplo de requisição:

```http
POST /jogos
Content-Type: application/json
```

Corpo da requisição (JSON ilustrativo):

```json
{
  "titulo": "Minecraft",
  "plataforma": "PC",
  "genero": "Sandbox",
  "desenvolvedora": "Mojang",
  "ano_lancamento": 2011,
  "preco": 99.90,
  "estoque": 25
}
```

### 2. Listar todos os jogos

| Propriedade | Valor |
|---|---|
| Método | GET |
| Endpoint | `/jogos` |
| Descrição | Retorna todos os jogos cadastrados |

Exemplo:

```http
GET /jogos
```

### 3. Consultar jogo por ID

| Propriedade | Valor |
|---|---|
| Método | GET |
| Endpoint | `/jogos/:id` |
| Descrição | Retorna um jogo específico |

Exemplo:

```http
GET /jogos/ID_DO_JOGO
```

O ID deve corresponder ao identificador `_id` gerado pelo MongoDB.

### 4. Atualizar um jogo

| Propriedade | Valor |
|---|---|
| Método | PUT |
| Endpoint | `/jogos/:id` |
| Descrição | Atualiza os campos informados de um jogo |

Exemplo:

```http
PUT /jogos/ID_DO_JOGO
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "preco": 79.90,
  "estoque": 30
}
```

A atualização utiliza o operador `$set` do MongoDB.

### 5. Excluir um jogo

| Propriedade | Valor |
|---|---|
| Método | DELETE |
| Endpoint | `/jogos/:id` |
| Descrição | Exclui um jogo pelo seu identificador |

Exemplo:

```http
DELETE /jogos/ID_DO_JOGO
```

---

## 🗄️ Banco de dados

O projeto utiliza o MongoDB como sistema de gerenciamento de banco de dados.

A conexão é realizada por meio do driver oficial `mongodb`, utilizando a variável de ambiente `MONGO_URI`.

**Configuração utilizada no código:**

| Propriedade | Valor |
|---|---|
| Banco de dados | `catalogo_games` |
| Coleção | `jogos` |
| Porta da API | `3000` |
| Identificador | `_id` |

O MongoDB gera automaticamente um identificador único para cada documento inserido.

## 🔄 Operações CRUD

O projeto implementa as quatro operações fundamentais de manipulação de dados:

| Operação | Método HTTP | Função |
|---|---|---|
| Create | POST | Criar registros |
| Read | GET | Consultar registros |
| Update | PUT | Atualizar registros |
| Delete | DELETE | Excluir registros |

## 🧪 Testes da API

Para testar os endpoints, você pode utilizar ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Thunder Client](https://www.thunderclient.com/)

Essas ferramentas permitem enviar requisições HTTP, visualizar respostas JSON e verificar o funcionamento das operações CRUD.

## 🔮 Melhorias futuras

Algumas funcionalidades que podem ser implementadas em versões futuras:

- [ ] Validação dos dados recebidos.
- [ ] Tratamento personalizado de erros.
- [ ] Verificação de IDs inválidos.
- [ ] Implementação de filtros e pesquisas.
- [ ] Paginação dos resultados.
- [ ] Sistema de autenticação.
- [ ] Documentação com Swagger.
- [ ] Testes automatizados.
- [ ] Configuração de scripts de inicialização.

# Exemplo prático:
<img width="1567" height="910" alt="image" src="https://github.com/user-attachments/assets/b7bdea04-2d06-48b1-964e-e399d36b045a" />

## 👨‍💻 Desenvolvedor

**Gregorio Agostinetto**

Projeto desenvolvido com o objetivo de praticar conceitos de desenvolvimento Back-End, integração com bancos de dados NoSQL e construção de APIs REST.

<p align="center">
  Desenvolvido por <a href="https://github.com/Gregorio14izi">Gregorio14izi</a>
</p>

---


