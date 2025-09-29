# Marcadores AR personalizados

Ahora las escenas usan marcadores **AR.js (Hiro/Kanji)** por defecto para que funcionen de inmediato.

Si deseas íconos propios:
1) Usa cualquiera de los SVG de `icons-samples/` como imagen base o sube tu PNG/SVG al generador de AR.js:
   https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
2) Descarga el `.patt` generado.
3) Reemplaza en cada escena el atributo `url="..."` del `<a-marker>` por tu archivo (ej: `../assets/markers/marker-glycolysis.patt`).

> Consejo: imprime cada marcador en tamaño A4 con borde blanco y alto contraste.
