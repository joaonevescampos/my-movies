# my-movies

## 🎬 Objetivo

O **my-movies** é uma plataforma de filmes e séries inspirada na Netflix, desenvolvida para proporcionar uma experiência de navegação, busca e descoberta de títulos utilizando a API do [TMDB (The Movie Database)](https://www.themoviedb.org/). O objetivo é criar uma interface moderna, responsiva e intuitiva para explorar conteúdos audiovisuais.

## 🚀 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) — Ferramenta de build rápida para projetos front-end
- [React](https://react.dev/) — Biblioteca para construção de interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) — Framework utilitário para estilização
- [Material UI](https://mui.com/) — Componentes React prontos para produção
- [TMDB API](https://developers.themoviedb.org/3) — Fonte dos dados de filmes e séries

## 🛠️ Instalação e Execução Local

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/joaonevescampos/my-movies
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd my-movies
   ```
3. **Configure o .env:**

- Gere um token de autenticação no [TMDB API](https://developers.themoviedb.org/3) 
- Crie um arquivo ".env" na raíz do projeto
- Adicione o .env com seu VITE_TOKEN, gerado na api do TMDB.
- EX: VITE_TOKEN="seu-token-aqui"

4. **Rode o projeto:**
   ```bash
   npm run dev
   ```

## Funcionalidades

- Listagem de filmes por categoria;

- Pesquisar filme;

- Paginar filmes;

- Ver detalhamento de um filme;

- Adicionar aos favoritos

- Ver sua listagem de filmes favoritos;

- Assistir trailer;

- Ver provedores disponíveis para assistir o filme (Prime Video, Netflix, Mercado Play...)

## Funcoionalidades Futuras

- Cadastro;

- Login;

- Sortear filme;

- Pesquisa e listagem de séries;

- Detalhamento de série;

## Autor

[João Campos](https://github.com/joaonevescampos/my-movies)