<script>
	export let data;
	let listaPokemon = [...data.pokemon].sort((a, b) => a.id - b.id); // Ordeno los Pokémon por ID
	let busqueda = '';
	let listaFiltrada = [...listaPokemon];

	import './styles.css';

	const tipoColores = {
		"Normal": "#aaaa99",
		"Fuego": "#ff4422",
		"Agua": "#3399ff",
		"Eléctrico": "#ffcc33",
		"Planta": "#77cc55",
		"Hielo": "#66ccff",
		"Lucha": "#bb5544",
		"Veneno": "#aa5599",
		"Tierra": "#ddbb55",
		"Volador": "#8899ff",
		"Psíquico": "#ff5599",
		"Bicho": "#aabb22",
		"Roca": "#bbaa66",
		"Fantasma": "#6666bb",
		"Dragón": "#7766ee",
		"Siniestro": "#775544",
		"Acero": "#aaaabb",
		"Hada": "#ee99ee"
	};

	function buscarPokemon() {
		if (busqueda.trim() === '') {
			listaFiltrada = listaPokemon;
		} else {
			listaFiltrada = listaPokemon.filter(pokemon =>
				pokemon.nombre.toLowerCase().startsWith(busqueda.toLowerCase().trim())
			);
		}
	}

	function formatearNombre(nombre) {
		return nombre
			.replace(/-/g, ' ')
			.replace(/\b\w/g, char => char.toUpperCase());
	}

	function obtenerColorTipo(tipo) {
		return tipoColores[tipo];
	}
</script>

<h1>Pokédex</h1>

<input
	type="text"
	placeholder="Buscar Pokémon..."
	bind:value={busqueda}
	on:input={buscarPokemon}
	class="buscador"
/>

<div class="grilla-pokemon">
	{#each listaFiltrada as pokemon}
		<a href="/pokemons/{pokemon.id}" class="pokemon-tarjeta">
			<span class="pokemon-id">ID #{pokemon.id}</span>
			<img src="{pokemon.url_imagen}" alt="Imagen de {formatearNombre(pokemon.nombre)}" />
			<h2>{formatearNombre(pokemon.nombre)}</h2>
			<div class="tipo-cartel">
        <span class="tipo-cartel" style="background-color: {obtenerColorTipo(pokemon.tipo_1)}; color: #fff;">
          {formatearNombre(pokemon.tipo_1)}
        </span>
				{#if pokemon.tipo_2}
          <span class="tipo-cartel" style="background-color: {obtenerColorTipo(pokemon.tipo_2)}; color: #fff;">
            {formatearNombre(pokemon.tipo_2)}
          </span>
				{/if}
			</div>
		</a>
	{/each}
</div>

<style>
    .buscador {
        margin: 1rem auto;
        padding: 0.8rem;
        width: 98%;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f1f1;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: 'Press Start 2P', sans-serif;
        font-weight: normal
    }

    .grilla-pokemon {
        display: grid;
        grid-template-columns: repeat(6, 1fr);;
        gap: 1rem;
        margin-top: 1rem;
    }

    .pokemon-tarjeta {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .pokemon-tarjeta:hover {
        transform: scale(1.05);
    }

    .pokemon-id {
        position: absolute;
        top: 8px;
        left: 8px;
        font-size: 0.7rem;
        color: #555;
        font-weight: normal;
    }

    .pokemon-tarjeta img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }

    .pokemon-tarjeta h2 {
        font-size: 1.1rem;
        margin: 0.5rem 0;
    }

    .tipo-cartel {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 8px;
    }

    .tipo-cartel span {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 0.55rem;
        padding: 6px 12px;
        border: 1px solid rgba(0, 0, 0, .3);
        border-radius: 4px;
        color: white;
        font-weight: normal;
        line-height: 1.5rem;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        text-transform: uppercase;
        transition: opacity 0.4s;
    }
</style>
