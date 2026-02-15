# Portfólio Interativo 2.1

Portfólio frontend em React com foco em experiência visual (GSAP + Three.js), seção de projetos, contato via EmailJS e gráfico de linguagens via GitHub API.

[![CI](https://github.com/ESousa97/Portifolio_2.1/actions/workflows/ci.yml/badge.svg)](https://github.com/ESousa97/Portifolio_2.1/actions/workflows/ci.yml)
[![Last Commit](https://img.shields.io/github/last-commit/ESousa97/Portifolio_2.1/master)](https://github.com/ESousa97/Portifolio_2.1/commits/master)
[![Open Issues](https://img.shields.io/github/issues/ESousa97/Portifolio_2.1)](https://github.com/ESousa97/Portifolio_2.1/issues)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-025E8C?logo=dependabot)](./.github/dependabot.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/esousa97/portifolio_2.1/badge)](https://www.codefactor.io/repository/github/esousa97/portifolio_2.1)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## Demo

- Produção: https://enoquesousa.vercel.app

## Stack

- React 18 + Create React App
- GSAP (animações)
- Three.js (viewer 3D)
- EmailJS Browser SDK (contato)
- Tailwind CSS (tokens utilitários)

## Arquitetura (visão rápida)

- `src/components/`: seções de UI (`Home`, `About`, `Projects`, `Skills`, `Footer`, `Header`)
- `src/Animation/`: animações separadas por domínio/seção
- `src/utils/`: navegação por pontos e visualizador 3D
- `src/config/env.js`: ponto único de leitura de variáveis de ambiente
- `src/styles/tokens.css`: paleta e tokens centralizados

Mais detalhes em [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```bash
cp .env.example .env
```

```dotenv
REACT_APP_GITHUB_TOKEN=your_github_personal_access_token_here
REACT_APP_SERVICE_ID=your_emailjs_service_id
REACT_APP_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_USER_ID=your_emailjs_public_key
```

## Scripts

- `npm start` — ambiente de desenvolvimento
- `npm run build` — build de produção
- `npm run test:ci` — testes em modo CI
- `npm run test:coverage` — testes com cobertura
- `npm run lint` — lint no código-fonte
- `npm run lint:fix` — autofix lint
- `npm run format` — formatação Prettier
- `npm run format:check` — validação de formato
- `npm run audit` — auditoria de segurança (dependências de runtime)
- `npm run validate` — pipeline local (lint + test + build)

## Qualidade e governança

- CI em GitHub Actions para lint, format-check, test e build
- Dependabot semanal para atualizações npm
- Templates de Issue/PR
- Conventional Commits com Commitlint + Husky

## Roadmap técnico

- [ ] Migrar de Create React App para Vite (reduzir dependências legadas)
- [ ] Melhorar cobertura de testes por componente
- [ ] Avaliar backend para proxy seguro da GitHub API

## Contribuição

Consulte [CONTRIBUTING.md](CONTRIBUTING.md).

## Segurança

Consulte [SECURITY.md](SECURITY.md) e [docs/SECURITY_DECISIONS.md](docs/SECURITY_DECISIONS.md).

## Changelog

Consulte [CHANGELOG.md](CHANGELOG.md).

## Licença

Projeto licenciado em [MIT](LICENSE).

## Autor

- Portfólio: https://enoquesousa.vercel.app
- GitHub: https://github.com/ESousa97
