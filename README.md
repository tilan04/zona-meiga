# Rutas Meigas Static

Proyecto estático de prueba para una web de rutas con estética mística, artesanal y gallega.

## Estructura

```txt
rutas-meigas-static/
├── index.html
├── sobre.html
├── tours-pontevedra.html
├── tours-lugo.html
├── galeria.html
├── contacto.html
├── 404.html
├── .nojekyll
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
```

## Probar en local

Puedes abrir `index.html` directamente en el navegador.

Para una prueba más parecida a GitHub Pages, ejecuta un servidor local desde la carpeta del proyecto:

```bash
python -m http.server 8080
```

Después abre:

```txt
http://localhost:8080
```

## GitHub Pages

1. Sube esta carpeta a un repositorio.
2. Ve a `Settings > Pages`.
3. Selecciona la rama `main` y la carpeta `/root`.
4. Guarda los cambios.

## Notas

- No usa librerías externas.
- Las imágenes son placeholders generados para prueba.
- El formulario es estático y no envía datos reales.
- Sustituye textos, imágenes y correo antes de publicar.
