# VerdeVivo SP — CitizenTech

Aplicativo acadêmico em React Native para apoiar o cuidado de hortas comunitárias por meio de monitoramento simulado da umidade do solo, alertas e registro de irrigação.

## Ficha CitizenTech

**Problema:** hortas comunitárias podem depender de irrigação manual sem informação sobre a umidade do solo, o que pode causar desperdício de água ou falta de irrigação.

**Público beneficiado:** moradores, voluntários, responsáveis por hortas comunitárias e agentes comunitários.

**Hipóteses:**
1. A visualização simples da umidade ajuda responsáveis a identificar quando o solo pode precisar de água.
2. Alertas baseados em limites de umidade podem apoiar decisões de irrigação.
3. O registro das irrigações ajuda a acompanhar as atividades da horta.

**Indicadores propostos:**
- Quantidade de alertas de solo seco gerados.
- Quantidade de registros de irrigação realizados.
- Percentual de leituras simuladas abaixo do limite de 35%.
- Frequência de uso do monitoramento.

> Os indicadores são propostas de acompanhamento. Este protótipo não mede impacto real nem está conectado a sensores físicos.

## Funcionalidades

- Login demonstrativo com perfis de cidadão e agente comunitário.
- Context API para estado de autenticação.
- Navegação com Expo Router.
- Dashboard de umidade e alertas.
- Simulação IoT ajustável por controle deslizante.
- Registro de irrigação e histórico.
- Persistência local com AsyncStorage.
- Validação básica de e-mail e senha.\n- Formulário de irrigação com validação de quantidade e máscara numérica (somente dígitos, até 3 caracteres).

## Contas de demonstração

| Perfil | E-mail | Senha |
|---|---|---|
| Cidadão | cidadao@verdevivo.com | 123456 |
| Agente comunitário | agente@verdevivo.com | 123456 |

A autenticação é simulada localmente para fins acadêmicos; não existe servidor ou autenticação segura de produção.

## Tecnologias

- React Native
- Expo
- TypeScript
- Expo Router
- Context API
- AsyncStorage

## Como instalar e executar

1. Instale Node.js LTS.
2. Extraia o projeto e abra a pasta `VerdeVivoSP` no VS Code.
3. No terminal, execute:

```bash
npm install
npx expo install --fix
npx expo start
```

4. Para testar no celular, instale o Expo Go e leia o QR Code exibido no terminal.
5. Também é possível executar em emulador Android com `npm run android`, após configurar o ambiente Android.

## Estrutura

```text
app/                 Rotas e telas Expo Router
src/components/      Componentes reutilizáveis
src/contexts/        Context API de autenticação
src/hooks/           Estado e lógica das funcionalidades
src/services/        Autenticação e persistência AsyncStorage
src/styles/          Tema visual
src/types/           Tipos TypeScript
```

## Simulação IoT

A tela Monitoramento permite ajustar a umidade simulada entre 0% e 100%. Abaixo de 35%, o aplicativo apresenta alerta de solo seco e recomendação de irrigação. A partir de 35%, indica condição adequada. O botão de demonstração registra uma irrigação no histórico local.

**Limitação:** a leitura é simulada no aplicativo. Não há comunicação real com o ESP32 nem acionamento físico de bomba.

## Prints

Adicione nesta seção capturas reais das telas executando no Expo Go ou emulador:
- Login
- Dashboard
- Monitoramento com alerta
- Monitoramento sem alerta
- Histórico
- Perfil

## Observação

Projeto demonstrativo desenvolvido para atividade acadêmica CitizenTech. Os dados de hortas e sensores são fictícios/simulados.
