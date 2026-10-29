# Sistema Acadêmico DS II 

Projeto integrador da disciplina Desenvolvimento para Servidores II. 

## Informações da Aluna

Nome: Sara Nagahara
RA: 2650832423028
Turma: 5 Semestre

## Objetivo 

Desenvolver gradualmente uma aplicação web para cadastro de alunos, disciplinas, usuários e lançamento de notas. 

## Tecnologias previstas 

- HTML 
- CSS 
- JavaScript 
- Node.js 
- Express 
- MySQL 
- JWT 
- Git e GitHub 

## Estrutura 

- frontend: interface da aplicação 
- backend: API e regras do servidor 
- database: scripts do banco de dados 
- docs: documentação e evidências

## Execução do Projeto

1. Abra o terminal. (Atalho: crtl + J)
2. No terminal execute o comando "cd backend"
3. Instale as dependencias com o comando "npm install"
4. após isso execute "npm run dev"
5. apenas se não tiver o live server instalado vá para extensions ao lado esquerdo do vs code e procure por "live server" e instale o mesmo.
6. vá para a pasta frontend e clique com o botão direito sob o arquivo index.html e clique em open with live server


## 📡 Endpoints da API

A tabela abaixo descreve as rotas disponíveis no backend da aplicação:

| Categoria | Método | Rota / Endpoint | Descrição |
| :--- | :---: | :--- | :--- |
| **01 - Sistema** | `GET` | `/` *(ou `/status`)* | Verifica se o servidor está ativo e a funcionar. |
| **02 - Alunos** | `POST` | `/alunos` | Regista um novo aluno no sistema. |
| **02 - Alunos** | `GET` | `/alunos` | Retorna a lista de todos os alunos cadastrados. |

## Evidencias do projeto

Acesse imagens do sistema na pasta docs/evidencias
