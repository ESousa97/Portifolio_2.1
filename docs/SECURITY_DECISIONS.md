# Security Decisions

## Implementado

1. **Segredos removidos do código** e substituídos por placeholders no `.env`.
2. **`.env` ignorado no Git** para reduzir risco de vazamento.
3. **Migração de `emailjs-com` para `@emailjs/browser`** (SDK atual).
4. **Validação de ambiente no envio de e-mail** para falhar com mensagem clara quando faltar configuração.
5. **Auditoria e patch de dependências sem breaking changes** com `npm audit fix`.
6. **Dependabot** com atualização semanal.

## Trade-offs e limites

- Parte das vulnerabilidades restantes é transitiva do ecossistema Create React App.
- Corrigir 100% via `npm audit fix --force` forçaria downgrade quebrado de `react-scripts`.

## Recomendações de operação

- Rotacionar tokens periodicamente (GitHub/EmailJS).
- Aplicar princípio de menor privilégio nos PATs.
- Preferir backend/proxy para chamadas autenticadas da GitHub API.
- Revisar PRs com foco em exposição de segredos e logs sensíveis.
