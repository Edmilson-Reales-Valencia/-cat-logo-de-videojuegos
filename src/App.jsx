import { useState } from 'react'
import './App.css'

const juegos = [
  {
    id: 1,
    nombre: 'Detroit: Become Human',
    genero: 'Aventura narrativa',
    lanzamiento: 2018,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg',
    descripcion: 'Una historia de ciencia ficción donde tus decisiones cambian el rumbo.',
  },
  {
    id: 2,
    nombre: 'The Forest',
    genero: 'Supervivencia',
    lanzamiento: 2018,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg',
    descripcion: 'Sobrevive en una isla peligrosa y explora sus misterios.',
  },
  {
    id: 3,
    nombre: 'Minecraft',
    genero: 'Sandbox',
    lanzamiento: 2011,
    imagen: '/minecraft.jpg',
    descripcion: 'Explora, construye y crea en un mundo de bloques.',
  },
  {
    id: 4,
    nombre: 'Roblox',
    genero: 'Plataforma y creación',
    lanzamiento: 2006,
    imagen: '/roblox.jpg',
    descripcion: 'Una plataforma con experiencias y juegos creados por usuarios.',
  },
  {
    id: 5,
    nombre: 'Metro 2033 Redux',
    genero: 'Acción y supervivencia',
    lanzamiento: 2010,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/286690/header.jpg',
    descripcion: 'Lucha por sobrevivir en los túneles del metro de Moscú.',
  },
  {
    id: 6,
    nombre: 'The Last of Us Part I',
    genero: 'Acción y aventura',
    lanzamiento: 2013,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg',
    descripcion: 'Acompaña a Joel y Ellie en un viaje por un mundo devastado.',
  },
  {
    id: 7,
    nombre: 'VALORANT',
    genero: 'Shooter táctico',
    lanzamiento: 2020,
    imagen: '/valorant.jpg',
    descripcion: 'Combate táctico por equipos con agentes y habilidades únicas.',
  },
  {
    id: 8,
    nombre: 'Hogwarts Legacy',
    genero: 'RPG y aventura',
    lanzamiento: 2023,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg',
    descripcion: 'Descubre una aventura mágica ambientada en el mundo de Hogwarts.',
  },
  {
    id: 9,
    nombre: 'Grand Theft Auto: San Andreas',
    genero: 'Acción y mundo abierto',
    lanzamiento: 2004,
    imagen: '/gta-san-andreas.jpg',
    descripcion: 'CJ regresa a San Andreas para recuperar su barrio y su familia.',
  },
  {
    id: 10,
    nombre: 'Mario Kart 8 Deluxe',
    genero: 'Carreras',
    lanzamiento: 2017,
    imagen: '/mario-kart-8-deluxe.jpg',
    descripcion: 'Compite en carreras de karts con personajes del universo Mario.',
  },
  {
    id: 11,
    nombre: 'Resident Evil Requiem',
    genero: 'Terror y supervivencia',
    lanzamiento: 2026,
    imagen: '/resident-evil-requiem.jpg',
    descripcion: 'Enfréntate a una nueva pesadilla en la saga Resident Evil.',
  },
  {
    id: 12,
    nombre: 'World War Z',
    genero: 'Shooter cooperativo',
    lanzamiento: 2019,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/699130/header.jpg',
    descripcion: 'Lucha en equipo contra enormes hordas de zombis.',
  },
  {
    id: 13,
    nombre: 'Rust',
    genero: 'Supervivencia',
    lanzamiento: 2018,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg',
    descripcion: 'Recolecta recursos, fabrica herramientas y sobrevive en línea.',
  },
  {
    id: 14,
    nombre: 'DRAGON BALL: Sparking! ZERO',
    genero: 'Lucha',
    lanzamiento: 2024,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1790600/header.jpg',
    descripcion: 'Libra combates espectaculares con personajes de Dragon Ball.',
  },
  {
    id: 15,
    nombre: "Marvel's Spider-Man 2",
    genero: 'Acción y aventura',
    lanzamiento: 2023,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg',
    descripcion: 'Peter Parker y Miles Morales protegen Nueva York juntos.',
  },
  {
    id: 16,
    nombre: 'ARK: Survival Ascended',
    genero: 'Supervivencia y aventura',
    lanzamiento: 2023,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2399830/header.jpg',
    descripcion: 'Domestica dinosaurios y sobrevive en una isla prehistórica.',
  },
  {
    id: 17,
    nombre: 'Hollow Knight',
    genero: 'Aventura y acción',
    lanzamiento: 2017,
    imagen: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
    descripcion: 'Explora un reino subterráneo lleno de criaturas y secretos.',
  },
]

function GameCard({
  juego,
  estaEnBiblioteca,
  esFavorito,
  onToggleBiblioteca,
  onToggleFavorito,
  onVerDetalles,
}) {
  return (
    <article className="game-card">
      <img src={juego.imagen} alt={`Portada de ${juego.nombre}`} />

      <div className="game-info">
        <h2>{juego.nombre}</h2>
        <p>
          {juego.genero} · {juego.lanzamiento}
        </p>
        <p>{juego.descripcion}</p>

        <button
          type="button"
          className="library-button"
          onClick={() => onToggleBiblioteca(juego.id)}
        >
          {estaEnBiblioteca
            ? 'Quitar de biblioteca'
            : 'Añadir a biblioteca'}
        </button>

        <button
          type="button"
          className={`favorite-button ${esFavorito ? 'is-favorite' : ''}`}
          aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={() => onToggleFavorito(juego.id)}
        >
          {esFavorito ? '♥ En favoritos' : '♡ Agregar a favoritos'}
        </button>

        <button
          type="button"
          className="details-button"
          onClick={onVerDetalles}
        >
          Ver detalles
        </button>
      </div>
    </article>
  )
}

function App() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)
  const [paginaActual, setPaginaActual] = useState('tienda')
  const [bibliotecaIds, setBibliotecaIds] = useState([])
  const [favoritosIds, setFavoritosIds] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [generoSeleccionado, setGeneroSeleccionado] = useState('Todos')

  const juegosBase =
    paginaActual === 'biblioteca'
      ? juegos.filter((juego) => bibliotecaIds.includes(juego.id))
      : paginaActual === 'favoritos'
        ? juegos.filter((juego) => favoritosIds.includes(juego.id))
        : juegos

  const generos = [...new Set(juegos.map((juego) => juego.genero))]

  const juegosVisibles = juegosBase.filter((juego) => {
    const coincideNombre = juego.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideGenero =
      generoSeleccionado === 'Todos' ||
      juego.genero === generoSeleccionado

    return coincideNombre && coincideGenero
  })

  function alternarBiblioteca(id) {
    setBibliotecaIds((idsActuales) =>
      idsActuales.includes(id)
        ? idsActuales.filter((idJuego) => idJuego !== id)
        : [...idsActuales, id],
    )
  }

  function alternarFavorito(id) {
    setFavoritosIds((idsActuales) =>
      idsActuales.includes(id)
        ? idsActuales.filter((idJuego) => idJuego !== id)
        : [...idsActuales, id],
    )
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/">
          HAPPY<span>HUB</span>
        </a>

        <nav className="navigation">
          <button
            className={paginaActual === 'tienda' ? 'active' : ''}
            onClick={() => setPaginaActual('tienda')}
          >
            Tienda
          </button>

          <button
            className={paginaActual === 'biblioteca' ? 'active' : ''}
            onClick={() => setPaginaActual('biblioteca')}
          >
            Biblioteca ({bibliotecaIds.length})
          </button>

          <button
            className={paginaActual === 'favoritos' ? 'active' : ''}
            onClick={() => setPaginaActual('favoritos')}
          >
            Favoritos ({favoritosIds.length})
          </button>

          <button
            className={paginaActual === 'comunidad' ? 'active' : ''}
            onClick={() => setPaginaActual('comunidad')}
          >
            Comunidad
          </button>
        </nav>
      </header>

      <main className="page">
        {paginaActual === 'comunidad' ? (
          <section>
            <h1>Comunidad</h1>
            <p>HAPPYHUB es un catálogo interactivo de videojuegos desarrollado con React.
              Permite explorar títulos, buscar por nombre, filtrar por género y organizar
              juegos en una biblioteca personal o en una lista de favoritos. La información
              se gestiona desde el estado de la aplicación y se presenta mediante tarjetas
              con los datos principales de cada juego.
</p>

          </section>
        ) : (
          <>
            <h1>
              {paginaActual === 'biblioteca'
                ? 'Mi biblioteca'
                : paginaActual === 'favoritos'
                  ? 'Mis favoritos'
                  : 'Catálogo de videojuegos'}
            </h1>

            <p>
              {paginaActual === 'biblioteca'
                ? 'Estos son los juegos que has agregado.'
                : paginaActual === 'favoritos'
                  ? 'Estos son los juegos que has marcado como favoritos.'
                  : 'Explora tus videojuegos favoritos.'}
            </p>

            <div className="catalog-filters">
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
              />

              <select
                value={generoSeleccionado}
                onChange={(evento) =>
                  setGeneroSeleccionado(evento.target.value)
                }
              >
                <option value="Todos">Todos los géneros</option>

                {generos.map((genero) => (
                  <option key={genero} value={genero}>
                    {genero}
                  </option>
                ))}
              </select>
            </div>

            {juegosBase.length === 0 && paginaActual === 'biblioteca' && (
              <p className="empty-library">
                Aún no has agregado juegos a tu biblioteca.
              </p>
            )}

            {juegosBase.length === 0 && paginaActual === 'favoritos' && (
              <p className="empty-library">
                Aún no has marcado juegos como favoritos.
              </p>
            )}

            {juegosBase.length > 0 && juegosVisibles.length === 0 && (
              <p className="empty-library">
                No hay juegos que coincidan con la búsqueda y el género.
              </p>
            )}

            <section className="game-grid">
              {juegosVisibles.map((juego) => (
                <GameCard
                  key={juego.id}
                  juego={juego}
                  estaEnBiblioteca={bibliotecaIds.includes(juego.id)}
                  esFavorito={favoritosIds.includes(juego.id)}
                  onToggleBiblioteca={alternarBiblioteca}
                  onToggleFavorito={alternarFavorito}
                  onVerDetalles={() => setJuegoSeleccionado(juego)}
                />
              ))}
            </section>

            {juegoSeleccionado && (
              <div
                className="modal-backdrop"
                onClick={() => setJuegoSeleccionado(null)}
              >
                <section
                  className="game-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-game-title"
                  onClick={(evento) => evento.stopPropagation()}
                >
                  <button
                    type="button"
                    className="modal-close"
                    aria-label="Cerrar detalle"
                    onClick={() => setJuegoSeleccionado(null)}
                  >
                    ×
                  </button>

                  <img
                    src={juegoSeleccionado.imagen}
                    alt={`Portada de ${juegoSeleccionado.nombre}`}
                  />

                  <div className="modal-info">
                    <h2 id="modal-game-title">
                      {juegoSeleccionado.nombre}
                    </h2>
                    <p>
                      <strong>Género:</strong> {juegoSeleccionado.genero}
                    </p>
                    <p>
                      <strong>Año:</strong> {juegoSeleccionado.lanzamiento}
                    </p>
                    <p>{juegoSeleccionado.descripcion}</p>
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </main>
    </>
  )
}

export default App