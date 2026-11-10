# Portafolio – Jose Armando Maradiaga Meza

Vite (bundler) + LESS. El build minifica JS/CSS y PurgeCSS deja solo las reglas usadas.

```bash
npm install
npm run dev      # desarrollo
npm run build    # genera dist/ (minificado y purgado)
npm run preview  # revisar dist/ localmente
```

## Despliegue en GitHub Pages
1. Crear el repositorio y subir el código a la rama `main`.
2. En GitHub: Settings > Pages > Source: **GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica `dist/`.
