<div align="center">

# Portfólio Interativo 2.1

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/Portifolio_2.1/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/Portifolio_2.1/actions/workflows/ci.yml)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/Portifolio_2.1?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/portifolio_2.1)
[![Last Commit](https://img.shields.io/github/last-commit/ESousa97/Portifolio_2.1/master?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97/Portifolio_2.1/commits/master)
[![Open Issues](https://img.shields.io/github/issues/ESousa97/Portifolio_2.1?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97/Portifolio_2.1/issues)
[![Node](https://img.shields.io/badge/Node-%3E%3D20.0.0-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-025E8C?style=flat&logo=dependabot&logoColor=white)](./.github/dependabot.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**Portfólio frontend em React com experiência visual (GSAP + Three.js), seção de projetos, contato via EmailJS e gráfico de linguagens via GitHub API.**

[Demo](https://portifolio21.vercel.app) · [Documentação](docs/ARCHITECTURE.md)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é um portfólio pessoal interativo focado em experiência visual e apresentação de projetos. Desenvolvido com React 18 e Create React App, integra animações com GSAP, visualização 3D com Three.js, envio de e-mails via EmailJS e consumo da GitHub API para exibição de linguagens utilizadas.

O repositório prioriza:

- **Experiência visual rica** — Animações fluidas com GSAP e cena 3D com Three.js
- **Componentização modular** — Seções de UI isoladas e animações separadas por domínio
- **Integração com serviços externos** — EmailJS para contato e GitHub API para dados de linguagens
- **Boas práticas de governança** — CI, Dependabot, Conventional Commits, Commitlint + Husky

### Por que React + GSAP + Three.js?

React oferece componentização e reatividade para a interface, GSAP garante animações performáticas com controle granular de timeline, e Three.js adiciona uma camada visual 3D que diferencia o portfólio. A combinação resulta em uma experiência imersiva sem sacrificar a manutenibilidade do código.

---

## Funcionalidades

- **Seção Home** — Apresentação com animações de entrada via GSAP
- **Seção About** — Informações pessoais e profissionais
- **Seção Projects** — Exibição de projetos com detalhes e links
- **Seção Skills** — Gráfico de linguagens consumido da GitHub API
- **Visualizador 3D** — Cena interativa com Three.js
- **Formulário de contato** — Envio de e-mails via EmailJS Browser SDK
- **Navegação por pontos** — Scroll navigation entre seções
- **Design responsivo** — Tokens utilitários com Tailwind CSS

---

## Tecnologias

### Core

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

### Serviços e Integrações

![EmailJS](https://img.shields.io/badge/EmailJS-FF6600?style=flat&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=flat&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

### Ferramentas de Desenvolvimento

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-000000?style=flat&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Node.js 20+ (recomendado)
- npm 9+

---

## Estrutura do Projeto

```
Portifolio_2.1/
├── src/
│   ├── components/
│   │   ├── Home/                  # Seção inicial
│   │   ├── About/                 # Seção sobre
│   │   ├── Projects/              # Seção de projetos
│   │   ├── Skills/                # Seção de habilidades
│   │   ├── Header/                # Navegação
│   │   └── Footer/                # Rodapé e contato
│   ├── Animation/                 # Animações separadas por domínio/seção
│   ├── utils/
│   │   ├── dotNavigation.js       # Navegação por pontos
│   │   └── threejsViewer.js       # Visualizador 3D
│   ├── config/
│   │   └── env.js                 # Ponto único de variáveis de ambiente
│   └── styles/
│       └── tokens.css             # Paleta e tokens centralizados
├── docs/
│   ├── ARCHITECTURE.md            # Documentação de arquitetura
│   └── SECURITY_DECISIONS.md      # Decisões de segurança
├── .github/
│   ├── workflows/
│   │   └── ci.yml                 # Pipeline de CI
│   └── dependabot.yml             # Atualizações automáticas
├── .env.example                   # Exemplo de variáveis de ambiente
├── CONTRIBUTING.md                # Guia de contribuição
├── SECURITY.md                    # Política de segurança
├── CHANGELOG.md                   # Histórico de mudanças
├── package.json                   # Dependências e scripts
└── LICENSE                        # Licença MIT
```

> Para mais detalhes sobre a arquitetura, consulte [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Começando

### Pré-requisitos

```bash
node --version  # v20 ou superior
npm --version   # v9 ou superior
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/Portifolio_2.1.git
cd Portifolio_2.1
```

2. **Instale as dependências**

```bash
npm install
```

### Configuração

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Preencha as variáveis necessárias:

```env
REACT_APP_GITHUB_TOKEN=your_github_personal_access_token_here
REACT_APP_SERVICE_ID=your_emailjs_service_id
REACT_APP_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_USER_ID=your_emailjs_public_key
```

> **Nota:** O `GITHUB_TOKEN` é utilizado para consumir a GitHub API e exibir o gráfico de linguagens. As variáveis `SERVICE_ID`, `TEMPLATE_ID` e `USER_ID` são do EmailJS para o formulário de contato.

### Uso Local

**Subir o servidor de desenvolvimento:**

```bash
npm start
```

Acesse: `http://localhost:3000/`

---

## Scripts Disponíveis

```bash
# Ambiente de desenvolvimento
npm start

# Build de produção
npm run build

# Executar lint
npm run lint

# Autofix lint
npm run lint:fix

# Formatação Prettier
npm run format

# Validação de formato
npm run format:check

# Testes em modo CI
npm run test:ci

# Testes com cobertura
npm run test:coverage

# Auditoria de segurança (dependências runtime)
npm run audit

# Pipeline local completo (lint + test + build)
npm run validate
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI via GitHub Actions** — Pipeline com lint, format-check, test e build
- **Dependabot semanal** — Atualizações automáticas de dependências npm
- **Conventional Commits** — Padronização de mensagens com Commitlint + Husky
- **Templates de Issue/PR** — Modelos padronizados para contribuições

> Para diretrizes de contribuição, consulte [`CONTRIBUTING.md`](CONTRIBUTING.md). Para política de segurança, consulte [`SECURITY.md`](SECURITY.md).

---

## Deploy

### Vercel (Produção)

O projeto está configurado para deploy automático na Vercel. Cada push na branch principal gera um novo deploy.

```bash
vercel --prod
```

**Produção:** [portifolio21.vercel.app](https://portifolio21.vercel.app)

> Configure as variáveis de ambiente na dashboard da Vercel antes do primeiro deploy.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#portfólio-interativo-21)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
