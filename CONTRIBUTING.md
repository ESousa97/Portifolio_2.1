# Contributing

Obrigado por contribuir com o Portfólio Interativo 2.1.

## Pré-requisitos

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
cp .env.example .env
npm start
```

## Fluxo de contribuição

1. Abra branch a partir de `main`.
2. Faça alterações pequenas e focadas.
3. Siga Conventional Commits.
4. Garanta que os checks locais passam:

```bash
npm run lint
npm run test:ci
npm run build
```

5. Abra PR com contexto técnico e evidências de validação.

## Padrões obrigatórios

- Sem segredos no código/repositório.
- Sem hardcode de cores fora de `src/styles/tokens.css`.
- Sem código morto e sem duplicação evitável.
- Atualizar docs quando alterar comportamento.

## Commits

Formato esperado:

`<type>(<scope>): <description>`

Tipos aceitos:

- `feat` — nova funcionalidade
- `fix` — correção de bug
- `refactor` — refatoração sem mudança de comportamento
- `docs` — mudanças de documentação
- `style` — formatação sem mudança lógica
- `test` — testes novos/correção de testes
- `chore` — manutenção e infraestrutura
- `ci` — alterações de CI/CD
- `perf` — melhoria de performance
- `security` — correção de segurança

Commits fora do padrão falham no hook de `commit-msg`.

## Autor e referências

- Portfólio: https://enoquesousa.vercel.app
- GitHub: https://github.com/ESousa97
