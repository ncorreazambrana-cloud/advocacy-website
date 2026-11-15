# Planeta Vivo — Advocacy Website

Sitio educativo en español para promover la protección del medioambiente.

## Estructura
- `index.html`: página principal.
- `causa.html`: explicación de la causa.
- `ayudar.html`: acciones y formulario de demostración.
- `recursos.html`: enlaces a organizaciones ambientales.
- `css/styles.css`: diseño responsive y estilos accesibles.
- `js/script.js`: contador y validación del formulario.

## Probar localmente
Abre `index.html` en un navegador. Para una experiencia más parecida a la publicación, puedes usar la extensión Live Server de Visual Studio Code.

## Publicar con GitHub Pages
1. Crea un repositorio llamado `advocacy-website` en GitHub.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. Entra en **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
6. Espera a que GitHub Pages publique el sitio. La dirección suele ser `https://TU-USUARIO.github.io/advocacy-website/`.

## Accesibilidad incluida
- HTML semántico, idioma español y enlace para saltar al contenido.
- Navegación con etiquetas accesibles y estado `aria-current`.
- Etiquetas `label` asociadas a los campos del formulario.
- Mensajes dinámicos con `aria-live`.
- Enfoque visible para teclado y adaptación a pantallas pequeñas.
- Respeto a la preferencia de movimiento reducido.

## Nota
El formulario es una demostración front-end: valida los campos, pero no envía ni almacena datos. El contador también se reinicia al recargar. Para recibir mensajes reales se necesita conectar un servicio o backend.
