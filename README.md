# Efood
Este é um projeto de um aplicativo de restaurantes desenvolvido em React com Vite. O aplicativo exibe uma lista de restaurantes, cada restaurante possui seus pratos e é possível adicionar os pratos ao carrinho, finalizar o pedido e retornar o número do pedido da API.

## Tecnologias Utilizadas

**React:** Biblioteca JavaScript para construção de interfaces de usuário.
**Vite:** Ferramenta de build rápida para projetos front-end.
**Styled Components:** Biblioteca para estilização de componentes no React.
**Redux:** Biblioteca para gerenciamento de estado.
**TypeScript:** Superset do JavaScript que adiciona tipos estáticos.
**Yup:** Biblioteca para validação de formulários.
**React Input Mask:** Biblioteca para criação de máscaras de input.

## Funcionalidades

**Lista de Restaurantes:** Exibe uma lista de restaurantes.
**Detalhes do Restaurante:** Exibe os pratos disponíveis em cada restaurante.
**Adicionar ao Carrinho:** Adiciona pratos ao carrinho de compras.
**Finalizar Pedido:** Finaliza o pedido e retorna o número do pedido da API.














This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
