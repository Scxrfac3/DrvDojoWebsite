# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Netlify Deployment

This project is configured for deployment on Netlify with the following settings:

### Build Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node.js Version**: 18.18.0

### Environment Variables
Make sure to set any required environment variables in your Netlify dashboard:
- `SUPABASE_PROJECT_ID` (if using Supabase)

### Deployment Steps
1. Connect your repository to Netlify
2. Netlify will automatically detect the configuration from `netlify.toml`
3. Deploy your site

### Troubleshooting
If you encounter deployment issues:
1. Check that your local Node.js version matches the one specified in `.nvmrc` (18.18.0)
2. Run `npm install` and `npm run build` locally to ensure everything works
3. Check Netlify build logs for specific error messages

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
