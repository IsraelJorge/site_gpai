# 🐾 G.P.A.I – Grupo de Proteção aos Animais de Imperatriz

## ✨ Introdução

Este projeto foi desenvolvido como um MVP (Produto Mínimo Viável) para a disciplina de Engenharia de Software. O objetivo foi criar uma solução web para o Grupo de Proteção aos Animais de Imperatriz (G.P.A.I), facilitando a divulgação de animais para adoção e promovendo o contato entre protetores e adotantes.

## 🚀 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. 🧬 **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd site_gpai
   ```

2. 📦 **Instale as dependências:**
   ```bash
   npm install
   ```

3. 🏃‍♂️ **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

4. 🌐 Acesse `http://localhost:5173` no seu navegador.

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React** (com TypeScript)
- ⚡ **Vite** (build tool)
- 🎨 **TailwindCSS** e **DaisyUI** (estilização)
- 🛣️ **React Router DOM** (roteamento)
- 📝 **React Hook Form** e **Zod** (formulários e validação)
- 🔗 **Axios** (requisições HTTP)
- 📊 **React Query** (gerenciamento de dados assíncronos)
- 🎬 **Framer Motion** (animações)
- 🧹 **ESLint** e **Prettier** (padronização de código)

## 🗂️ Estrutura do Projeto

```
src/
  assets/         # 🖼️ Imagens e SVGs
  components/     # 🧩 Componentes reutilizáveis (Button, Card, Header, etc.)
    layouts/      # 🖥️ Layouts de página
  context/        # 🌐 Contextos globais (ex: AuthProvider, DialogProvider)
  pages/          # 📄 Páginas principais (Home, Login, Adotar, etc.)
    profile/      # 👤 Páginas relacionadas ao perfil do usuário
  routes/         # 🗺️ Definição de rotas
  services/       # 🔌 Serviços e hooks para integração com APIs
    datasources/  # 💾 Fontes de dados (ex: hooks de requisição)
    lib/          # 📚 Bibliotecas auxiliares
  styles/         # 🎨 Estilos globais e customizações
  utils/          # 🛠️ Funções utilitárias
  @types/         # 🏷️ Tipagens customizadas
  App.tsx         # 🚩 Componente principal da aplicação
  main.tsx        # 🎬 Ponto de entrada da aplicação
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você deseja colaborar, siga estes passos:

1. 🍴 Faça um fork do projeto.
2. 🌱 Crie uma branch para sua feature ou correção (`git checkout -b minha-feature`).
3. 💾 Commit suas alterações (`git commit -m 'Minha contribuição'`).
4. 🚀 Faça push para a branch (`git push origin minha-feature`).
5. 📬 Abra um Pull Request.

Fique à vontade para abrir issues com sugestões, dúvidas ou problemas encontrados. 😃 