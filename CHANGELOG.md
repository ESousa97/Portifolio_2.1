# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- CI workflow com lint, formatação, testes e build.
- Dependabot e templates de Issue/PR.
- Husky + Commitlint + lint-staged para governança de commits.
- `src/config/env.js` para centralização de variáveis de ambiente.
- `src/styles/tokens.css` como fonte única de tokens visuais.
- `.env.example` com placeholders seguros.
- Documentação de arquitetura, segurança e contribuição.

### Changed

- Migração de `emailjs-com` para `@emailjs/browser`.
- `Footer` com validações de formulário e tratamento de erro mais robusto.
- `App.test.js` atualizado para refletir comportamento real do app.
- README reescrito para onboarding técnico objetivo.

### Security

- Redução de vulnerabilidades via `npm audit fix` (sem breaking changes).
- Segredos substituídos por exemplos no `.env`.
