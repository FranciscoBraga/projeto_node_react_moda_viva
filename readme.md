
# Guia de Desenvolvimento com Node.js e TypeScript

## Sobre o Projeto

Este repositório fornece um guia para iniciar o desenvolvimento com Node.js e TypeScript, apresentando conceitos fundamentais, comandos úteis e boas práticas. Ele abrange desde a configuração inicial até o uso de ferramentas avançadas como `ts-node-dev`.

## Conteúdo

### O que é Node.js?
Node.js é um runtime de JavaScript baseado no mecanismo V8 do Google Chrome. É amplamente utilizado para criar aplicações backend, ferramentas CLI e servidores web, oferecendo:
- **Event-Driven**: Baseado em eventos, com suporte para operações assíncronas.
- **Non-blocking I/O**: Ideal para lidar com múltiplas conexões simultâneas.
- **Ecosistema Rico**: Através do gerenciador de pacotes NPM.

### Configuração Inicial
1. Instale Node.js e NPM:
   ```bash
   node -v
   npm -v
   ```
2. Inicie um novo projeto Node.js:
   ```bash
   npm init -y
   ```
   Isso gera um arquivo `package.json` com configurações padrão.

3. Crie um arquivo `index.js` para começar:
   ```javascript
   console.log("Olá, mundo!");
   ```

### Introdução ao TypeScript
TypeScript é um superset de JavaScript que adiciona tipagem estática ao código, tornando-o mais confiável e fácil de manter.

#### Instalação
1. Adicione o TypeScript como dependência de desenvolvimento:
   ```bash
   npm install typescript -D
   ```
2. Configure o TypeScript com:
   ```bash
   npx tsc --init
   ```

#### Configuração do `tsconfig.json`
O arquivo `tsconfig.json` gerado define como o TypeScript compila o código. Exemplos de configurações importantes:
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Desenvolvimento com `ts-node-dev`
Use `ts-node-dev` para facilitar o desenvolvimento em TypeScript:
```bash
npm install ts-node-dev -D
```
Vantagens:
- Execução direta de arquivos `.ts`.
- Recarregamento automático ao salvar alterações no código.

### Comandos Úteis
- Para rodar um arquivo JavaScript:
  ```bash
  node index.js
  ```
- Para rodar um arquivo TypeScript com recarregamento automático:
  ```bash
  npx ts-node-dev index.ts
  ```

## Exemplos de Uso
1. Criar APIs RESTful.
2. Aplicações em tempo real como chats e sistemas colaborativos.
3. Ferramentas de linha de comando.

## Recursos Adicionais
- [Documentação do Node.js](https://nodejs.org)
- [Documentação do TypeScript](https://www.typescriptlang.org)

