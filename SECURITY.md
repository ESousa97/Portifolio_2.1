# Security Policy

## Reporting a Vulnerability

Não abra issue pública para vulnerabilidades sensíveis.

Reporte de forma privada para: `security@example.com` (substitua por um canal real do projeto).

Inclua:

- descrição do impacto
- passos de reprodução
- evidências (logs, payloads, screenshots)
- sugestão de mitigação (se houver)

## Supported Versions

Somente a branch principal (`main`) recebe correções de segurança.

## Security Baseline

- Dependabot habilitado (`.github/dependabot.yml`)
- Auditoria via `npm run audit`
- Segredos em `.env` (nunca commitar)
- Revisão de PR com foco em exposição de dados e credenciais
