# AgendaWeb usando API para Controle de Tarefas

Este projeto é uma aplicação Angular que permite o gerenciamento de tarefas em uma agenda. Ele se comunica com uma API para criar, listar, atualizar e excluir tarefas.

## Pré-requisitos

- Node.js e Angular CLI instalados.
- Conhecimento básico de Angular e APIs REST.

## Configuração

1. Clone este repositório.
2. Navegue até a pasta do projeto no terminal.
3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

4. Configure a URL da API no arquivo `environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'URL_DA_API_AQUI',
};
```

## Executando o Projeto

1. No terminal, execute o seguinte comando:

```bash
ng serve
```

2. Acesse a aplicação em `http://localhost:4200`.

## Estrutura do Projeto

O projeto possui a seguinte estrutura:

```
my-angular-app/
  ├── src/
  │   ├── app/
  │   │   ├── components/
  │   │   │   ├── task-list/
  │   │   │   ├── task-form/
  │   │   ├── services/
  │   │   ├── models/
  │   │   ├── app.component.html
  │   │   ├── app.component.ts
  │   │   └── ...
  │   ├── environments/
  │   │   ├── environment.ts
  │   │   └── environment.prod.ts
  │   ├── index.html
  │   └── ...
  ├── package.json
  └── README.md
```

## Funcionalidades

- Listagem de tarefas.
- Adição de novas tarefas.
- Edição e exclusão de tarefas.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.



