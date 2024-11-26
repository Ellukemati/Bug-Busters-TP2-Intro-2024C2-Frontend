<script>
	export let data;
	let listaPokemon = [...data.pokemon].sort((a, b) => a.id - b.id); // Ordeno los Pokémon por ID
	let searchQuery = '';
	let resultados = [];

	import './styles.css';

	function buscarPokemon() {
		if (searchQuery.trim() === '') {
			resultados = [];
		} else {
			resultados = listaPokemon.filter(pokemon =>
				pokemon.nombre.toLowerCase().startsWith(searchQuery.toLowerCase())
			);
		}
	}

	function formatearNombre(nombre) { 	// Función para formatear los nombres
		return nombre
			.replace(/-/g, ' ')
			.replace(/\b\w/g, char => char.toUpperCase());
	}
</script>

<h1>Pokédex</h1>

<input
	type="text"
	placeholder="Buscar Pokémon..."
	bind:value={searchQuery}
	on:input={buscarPokemon}
class="buscador"
/>

{#if resultados.length > 0}
	<ul class="resultados">
		{#each resultados as pokemon, index}
			<li class="resultado-item {index % 2 === 0 ? 'gris' : 'blanco'}">
				<a href="/src/routes/pokemons/{pokemon.id}" class="resultado-link">
					<img src="{pokemon.url_imagen}" alt="{formatearNombre(pokemon.nombre)}" class="resultado-imagen" />
					<div class="resultado-info">
						<h3>{formatearNombre(pokemon.nombre)}</h3>
						<div class="tipo-cartel">
              <span class="{pokemon.tipo_1}" style="background-color: {pokemon.tipo_1};">
                {formatearNombre(pokemon.tipo_1)}
              </span>
							{#if pokemon.tipo_2}
                <span class="{pokemon.tipo_2}" style="background-color: {pokemon.tipo_2};">
                  {formatearNombre(pokemon.tipo_2)}
                </span>
							{/if}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<div class="grilla-pokemon">
	{#each listaPokemon as pokemon}
		<a href="/src/routes/pokemons/{pokemon.id}" class="pokemon-tarjeta">
			<span class="pokemon-id">ID #{pokemon.id}</span>
			<img src="{pokemon.url_imagen}" alt="Imagen de {formatearNombre(pokemon.nombre)}" />
			<h2>{formatearNombre(pokemon.nombre)}</h2>
			<div class="tipo-cartel">
				<span class="{pokemon.tipo_1}" style="background-color: {pokemon.tipo_1};">
					{formatearNombre(pokemon.tipo_1)}
				</span>
				{#if pokemon.tipo_2}
					<span class="{pokemon.tipo_2}" style="background-color: {pokemon.tipo_2};">
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
        width: 99%;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f1f1;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: 'Press Start 2P', sans-serif;
        font-weight: normal
    }

    .resultados {
        background-color: #fff;
        font-family: 'Press Start 2P', sans-serif;
        border: 1px solid #ccc;
        border-radius: 4px;
        max-width: 20%;
        margin-top: 0.5rem;
        list-style: none;
        padding: 0;
        position: absolute;
        z-index: 10;
        width: 80%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .resultado-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        padding: 10px;
        border-radius: 8px;
        border-bottom: 1px solid #ddd;
        background-color: #f8f8f8;
        transition: background-color 0.2s ease;
    }

    .resultado-item.gris {
        background-color: #dfdfdf;
    }

    .resultado-item.blanco {
        background-color: #ffffff;
    }

    .resultado-item:hover {
        background-color: #e1e1e1;
    }

    .resultado-link {
        display: flex;
        text-decoration: none;
        color: inherit;
        align-items: center;
    }

    .resultado-imagen {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .resultado-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .resultado-info h3 {
        font-size: 1rem;
        margin: 0;
    }

    h1, .pokemon-tarjeta, .tipo-cartel {
        font-family: 'Press Start 2P', sans-serif;
    }

    .pokemon-tarjeta h2 {
        font-size: 1rem;
        margin: 0.5rem 0;
    }

    .pokemon-id {
        position: absolute;
        top: 8px;
        left: 8px;
        font-size: 0.7rem;
        color: #555;
        font-weight: normal;
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
