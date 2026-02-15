# Architecture

## Context

Aplicação SPA React com renderização 3D e animações por seção. O objetivo é equilibrar impacto visual e manutenção simples.

## Camadas

- UI Layer (`src/components`): composição da interface e interações primárias.
- Animation Layer (`src/Animation`): efeitos GSAP desacoplados de conteúdo.
- Domain Utilities (`src/utils`): componentes técnicos compartilhados (3D, navegação por pontos).
- Config (`src/config/env.js`): centralização de variáveis de ambiente.
- Style System (`src/styles/tokens.css`): paleta e tokens globais.

## Decisões-chave

1. **Configuração de ambiente centralizada** para evitar uso disperso de `process.env`.
2. **Tokens CSS** como fonte única de cor/tema para reduzir inconsistência visual.
3. **Módulos de animação isolados** para diminuir acoplamento entre layout e motion.
4. **CI obrigatório** (lint/test/build) para manter baseline técnico contínuo.

## Fluxos externos

- GitHub API: leitura de repositórios e linguagens.
- EmailJS: envio de formulário de contato.

## Riscos remanescentes

- Dependências legadas herdadas do `react-scripts` ainda geram alertas de segurança transitivos.
- Uso de token no frontend pode expor credencial no bundle do cliente.

## Próximos passos sugeridos

- Migração para Vite.
- Proxy backend para proteger token GitHub.
- Cobertura de testes por componente crítico.
