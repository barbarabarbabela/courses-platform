# Projeto de Cursos

Este projeto é uma aplicação web para gerenciar e visualizar cursos, incluindo detalhes como descrição, duração, e categoria.
Ele permite que os usuários naveguem entre as páginas de inscrições e detalhes de cursos, e inclui um sistema de busca e filtragem.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Decisões de Projeto](#decisões-de-projeto)

## Tecnologias Utilizadas

- React - Biblioteca JavaScript para criação de interfaces de usuário
- React Router - Biblioteca para gerenciar navegação entre páginas
- React Query - Gerenciamento de estado assíncrono para dados de API
- Tailwind CSS - Framework de CSS utilitário para estilização rápida
- TypeScript - Superset do JavaScript com tipagem estática
- Vite - Ferramenta de build para desenvolvimento rápido em projetos de frontend

## Visão Geral

Este projeto foi desenvolvido em React e utiliza roteamento dinâmico para navegação entre as páginas principais: página inicial, inscrições, e detalhes de cursos. O projeto também emprega gerenciadores de estado e query client para melhor organização dos dados e controle de contexto.

## Funcionalidades

- Exibir uma lista de cursos com informações detalhadas.
- Sistema de busca e filtro para cursos.
- Sistema de inscrições e visualização de detalhes de cursos.
- Navegação entre páginas usando rotas dinâmicas.
- Contextos para gerenciar o estado global da aplicação.
- Consulta a uma API para obter dados de cursos e inscrições.

## Pré-requisitos

- **Node.js** versão 14 ou superior
- **npm** ou **yarn** como gerenciador de pacotes

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/barbarabarbabela/courses-platform

   ```

2. Navegue até o diretório do projeto:

```bash
cd courses-platform
```

3. Instale as dependências:

```bash
npm install
```

## Uso

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Abra o navegador e acesse `http://localhost:5173/` para visualizar a aplicação.

## Estrutura de Pastas

```bash
├── src
│   ├── components     # Componentes reutilizáveis da aplicação
│   ├── contexts       # Arquivos de contexto para gerenciamento de estado global
│   ├── data          # Json com dados de cursos e inscrições
│   ├── hooks         # Hooks para gerenciamento de estado e consultas a API
│   ├── interfaces          # Interfaces para definição de tipos de dados
│   ├── pages          # Páginas principais da aplicação
│   ├── services       # Serviços para fazer chamadas à API
└── README.md          # Documentação do projeto
```

## Decisões de Projeto

- Decidi criar um arquivo JSON com todos os dados dos cursos, simulando uma API de backend.
- Optei por não persistir as inscrições. Elas estão salvas apenas no contexto (em memória).
