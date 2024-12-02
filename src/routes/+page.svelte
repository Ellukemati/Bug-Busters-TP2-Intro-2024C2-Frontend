<script>
	import './styles.css';
</script>

<body>
<div class="contenedor">
	<div class="cabecera">
		<h1 class="titulo-principal">Pokédex</h1>
		<h2 class="subtitulo">By Bug Busters TB022</h2>
	</div>
	<div class="contenido">
		<p class="titulo">
			Bienvenidos al trabajo práctico del grupo Bug Busters©. Las principales características de la página son:
		</p>
		<ul class="lista-bienvenida">
			<li class="elemento-lista">
				<a href="http://localhost:5173/pokemons" class="highlight">POKÉDEX</a> >>>
				¡Encontrá y conocé a tu Pokémon favorito!
				<p class="descripcion">- Explorá entre todos los Pokémon existentes hasta la Generación N°8.</p>
				<p class="descripcion">- Si querés más información de un Pokémon, hacé clic en su tarjeta.</p>
			</li>
			<li class="elemento-lista">
				<a href="http://localhost:5173/movimientos" class="highlight">LISTA DE MOVIMIENTOS</a> >>>
				¡Navegá entre todos los movimientos y encontrá los más útiles para la batalla!
				<p class="descripcion">- Allí podrás ver todos los movimientos disponibles y con un click leer sus características y efectos.</p>
			</li>
			<li class="elemento-lista">
				<a href="http://localhost:5173/crear_equipos" class="highlight">CREADOR DE EQUIPOS</a> >>>
				¡Creá tu propio Equipo Pokémon con sus Integrantes y Movimientos!
				<p class="descripcion">- Recordá revisar que tu Pokémon pueda aprender los movimientos que quieras ponerle.</p>
			</li>
		</ul>

		<div class="separador"></div>

		<p class="titulo">Integrantes del grupo:</p>
		<ul class="lista-integrantes">
			<li class="elemento-lista">
				<a href="https://github.com/Asimbron" class="link-integrante">Aramis Simbron</a>
			</li>
			<li class="elemento-lista">
				<a href="https://github.com/MartinZaton" class="link-integrante">Martin Zaton</a>
			</li>
			<li class="elemento-lista">
				<a href="https://github.com/Ellukemati" class="link-integrante">Matias Dundic</a>
			</li>
			<li class="elemento-lista">
				<a href="https://github.com/JoacoSp" class="link-integrante">Joaquin Spallanzani</a>
			</li>
		</ul>
	</div>
</div>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Press Start 2P', cursive;
        background: linear-gradient(135deg, #ffecdb, #f7f7f7);
        color: #333;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        min-height: 100vh;
    }

    .contenedor {
        margin-top: 2rem;
        background: rgba(255, 255, 255, 0.8);
        padding: 3rem;
        border-radius: 16px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        width: 90%;
        max-width: 800px;
    }

    .cabecera {
        text-align: center;
        margin-bottom: 2rem;
    }

    .titulo-principal {
        font-size: 3rem;
        color: #e74c3c;
        margin-bottom: 0.5rem;
    }

    .subtitulo {
        font-size: 1.2rem;
        color: #555;
    }

    .contenido {
        text-align: left;
        font-size: 1rem;
        line-height: 1.8;
        color: #444;
    }

    .titulo {
        color: #444;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .lista-bienvenida {
        padding-inline-start: 1.5rem;
        margin-top: 1rem;
    }

    .elemento-lista {
        margin-bottom: 1.5rem;
        color: #555;
    }

    .highlight {
        text-decoration: none;
        color: #3498db;
        font-weight: bold;
    }

    .highlight:hover {
        text-decoration: underline;
        color: #1e70a2;
    }

    .lista-integrantes {
        padding-inline-start: 1.5rem;
        margin-top: 1rem;
    }

    .link-integrante {
        text-decoration: none;
        color: #8e44ad;
    }

    .link-integrante:hover {
        color: #5e3370;
        text-decoration: underline;
    }

    .separador {
        margin: 2rem 0;
        height: 1px;
        background-color: #ccc;
    }

    @media (max-width: 768px) {
        .contenedor {
            padding: 2rem;
        }
        .titulo-principal {
            font-size: 2rem;
        }
        .subtitulo {
            font-size: 1rem;
        }
        .contenido {
            font-size: 0.9rem;
        }
    }
</style>
