# 👤 Sistema de Cadastro de Usuários

Um front-end moderno e responsivo para sistema de cadastro de usuários com autenticação JWT, construído com React, Tailwind CSS e Axios.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.11.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Sobre o Projeto

Este projeto é um front-end completo para um sistema de cadastro de usuários, desenvolvido com foco na experiência do usuário e segurança. Utiliza autenticação JWT para garantir a proteção das informações dos usuários e oferece uma interface moderna, intuitiva e minimalista.

### ✨ Características Principais

- 🔐 **Autenticação JWT** - Sistema seguro de login e controle de acesso
- 📱 **Design Responsivo** - Interface adaptável para diferentes dispositivos
- ⚡ **Performance Otimizada** - Construído com Vite para carregamento rápido
- 🎨 **Interface Moderna** - Estilização com Tailwind CSS
- 🔄 **Roteamento Dinâmico** - Navegação fluida com React Router
- 📡 **Comunicação API** - Integração eficiente com backend via Axios

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca JavaScript para interfaces de usuário
- **React Router DOM 7.7.0** - Roteamento para aplicações React
- **Tailwind CSS 4.1.11** - Framework CSS utilitário para estilização

### Comunicação

- **Axios 1.11.0** - Cliente HTTP para requisições à API

### Ferramentas de Desenvolvimento

- **Vite 7.0.4** - Build tool e bundler
- **ESLint 9.30.1** - Linter para qualidade de código
- **TypeScript** - Tipagem estática (suporte)

## �️ Screenshots da Interface

### Tela de Cadastro

<div text-align="center">
  <img src="docs/images/cadastro-screen.png" alt="Tela de Cadastro" width="800"/>
  <p><em>Interface de cadastro com campos para nome, e-mail e senha</em></p>
</div>

### Tela de Login

<div text-align="center">
  <img src="docs/images/login-screen.png" alt="Tela de Login" width="800"/>
  <p><em>Interface de login simplificada e intuitiva</em></p>
</div>

## 🎨 Design da Interface

A interface foi cuidadosamente projetada para oferecer uma experiência de usuário excepcional:

### ✨ Características Visuais

- **Design Minimalista** - Interface limpa e focada no essencial
- **Esquema de Cores Profissional** - Combinação harmoniosa de azul e branco
- **Tipografia Clara** - Textos legíveis e bem estruturados
- **Elementos Centralizados** - Layout equilibrado e simétrico

### 📱 Responsividade

- **Adaptável** - Interface que se ajusta perfeitamente a diferentes tamanhos de tela
- **Mobile-First** - Desenvolvido pensando primeiro na experiência mobile
- **Cross-Browser** - Compatível com todos os navegadores modernos

### 🔧 Componentes da Interface

- **Formulários Intuitivos** - Campos de entrada com labels claros
- **Botões de Ação** - Destacados em azul para facilitar identificação
- **Links de Navegação** - Transição suave entre telas de login e cadastro
- **Feedback Visual** - Estados visuais para interações do usuário

## �📁 Estrutura do Projeto

```
front-cadastrar-usuarios/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── header.jsx
│   ├── pages/
│   │   ├── Cadastro/
│   │   │   └── index.jsx
│   │   ├── Dashboard/
│   │   │   └── index.jsx
│   │   └── Login/
│   │       └── index.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── package.json
├── README.md
└── vite.config.js
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/jacoryan-dev/front-cadastrar-usuarios.git
   cd front-cadastrar-usuarios
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente** (se necessário)

   ```bash
   # Crie um arquivo .env na raiz do projeto
   # Adicione as configurações da API
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**

   Abra seu navegador e acesse `http://localhost:5173`

## 📱 Funcionalidades

### 🔑 Autenticação

- Login de usuários com validação
- Logout seguro
- Proteção de rotas privadas
- Gerenciamento de tokens JWT

### 👥 Gestão de Usuários

- Cadastro de novos usuários
- Formulários com validação
- Dashboard do usuário
- Interface intuitiva e responsiva

### 🎨 Interface

- Design moderno com Tailwind CSS
- Componentes reutilizáveis
- Navegação fluida
- Feedback visual para ações do usuário

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Linting
npm run lint         # Executa verificação de código

# Preview
npm run preview      # Visualiza build de produção
```

## 🌐 API Integration

O projeto utiliza Axios para comunicação com a API backend. As requisições são organizadas no arquivo `src/services/api.js` para facilitar a manutenção e reutilização.

### Endpoints Principais

- `POST /auth/login` - Autenticação de usuário
- `POST /auth/register` - Cadastro de novo usuário
- `GET /users/profile` - Dados do perfil do usuário
- `PUT /users/profile` - Atualização do perfil

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Deploy

O projeto pode ser facilmente deployado em plataformas como:

- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Jacoryan Dev**

- GitHub: [@jacoryan-dev](https://github.com/jacoryan-dev)

---

⭐ Se gostou do projeto, considere dar uma estrela no repositório!
