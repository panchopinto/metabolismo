# Metabolismo & Nutrición — AR Biología

Repositorio educativo interactivo (3D + Realidad Aumentada) para ayudar a integrar **macronutrientes** con **rutas metabólicas** en células **animal** y **vegetal**.

## Contenidos clave
- Macronutrientes → **proteínas, carbohidratos, lípidos**.
- Catabolismo → **glucólisis → Acetil‑CoA → Ciclo de Krebs (TCA) → NADH/FADH2 → Cadena de Transporte de Electrones (Complejos I–IV) + **ATP sintasa**.
- En vegetal: **cloroplasto** (fase luminosa + ciclo de Calvin) enlazado con glucólisis/TCA.
- Escenas AR/3D: **Glicólisis**, **TCA**, **ETC + ATP sintasa**, **Fotosíntesis**, **Visión general de célula**.

## Demo local
1. Abre `index.html` en un navegador moderno (Chrome/Edge, móvil recomendado).
2. Para modo **3D sin AR** agrega `?noar=1` a las escenas (ej.: `scenes/etc.html?noar=1`).

## AR con marcadores
- Carpeta `assets/markers/` contiene **patrones ejemplo** (`marker-*.patt`).
- Imprime los PNG de marcadores (a añadir) o genera los tuyos en: <https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html>
  - Sube tu imagen (ícono de la escena) y descarga `.patt`.
  - Reemplaza los archivos en `assets/markers/` y ajusta el atributo `url` de `<a-marker>` en cada escena.

## Estructura
```
metabolismo-ar/
├── index.html
├── css/styles.css
├── js/app.js
├── js/data.js
├── components/ui.js
├── scenes/
│   ├── glycolysis.html
│   ├── tca.html
│   ├── etc.html
│   ├── photosynthesis.html
│   └── cell-overview.html
└── assets/
    ├── icons/
    ├── models/   (coloca aquí tus .glb/.gltf)
    └── markers/  (patrones .patt de AR.js)
```

## Publicar en GitHub Pages
1. Crea un repositorio en tu cuenta (por ejemplo: `metabolismo-ar`).
2. Sube todo el contenido de esta carpeta.
3. En **Settings → Pages**, selecciona rama `main` y carpeta `/root`. Abre la URL pública.

## Licencia
- Código: MIT.
- Modelos 3D: agrega autoría/licencia en `assets/models/README.md`.
