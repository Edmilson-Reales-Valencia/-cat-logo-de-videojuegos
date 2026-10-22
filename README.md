HAPPYHUB — Catálogo de videojuegos
HAPPYHUB es un catálogo interactivo de videojuegos desarrollado con React. Permite explorar juegos, buscar por nombre, filtrar por género y organizar títulos en una biblioteca personal o en una lista de favoritos.
Funciones
- Catálogo con más de 15 videojuegos.
- Búsqueda por nombre y filtro por género.
- Biblioteca para agregar o quitar juegos.
- Lista de favoritos con contador.
- Tarjetas con información y detalle de cada juego.
- Sección Comunidad con información sobre el proyecto.
Tecnologías
- React
- JavaScript
- JSX
- CSS
- Vite
Requisitos
- Node.js y npm instalados.
Instalación y ejecución
Abre una terminal en la carpeta del proyecto y ejecuta:
npm install
npm run dev
Vite mostrará una dirección local en la terminal. Ábrela en el navegador para ver la aplicación.
Estructura principal
- src/App.jsx: datos de los juegos, navegación, filtros y componentes de la aplicación.
- src/App.css: estilos de la interfaz.
- src/index.css: estilos generales.
- public/: imágenes locales utilizadas en el catálogo.
Conceptos de React utilizados
El componente App administra el estado de la navegación, la biblioteca, los favoritos, la búsqueda y el género seleccionado mediante useState.
El componente GameCard recibe mediante props los datos de un juego y las funciones para agregarlo o quitarlo de la biblioteca, marcarlo como favorito y abrir sus detalles.
map() genera las tarjetas a partir del arreglo de juegos; filter() aplica la búsqueda y el filtro de género. Los eventos onClick y onChange permiten interactuar con los botones y controles.
Datos
Los juegos están guardados en un arreglo de objetos dentro del proyecto. Esta versión no utiliza backend ni se conecta a una API.