<script>
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/'}
	<nav class="barra-navegacion">
		<ul class="barra-navegacion-lista">
			<li><a href="/" class="barra-navegacion-link">Inicio</a></li>
			<li><a href="/pokemons" class="barra-navegacion-link">Pokédex</a></li>
			<li><a href="/movimientos" class="barra-navegacion-link">Lista de Movimientos</a></li>
			<li><a href="/equipos" class="barra-navegacion-link">Equipos</a></li>
			<li><a href="/crear_equipos" class="barra-navegacion-link">Creación de Equipos</a></li> <!-- Cambiar link cuando esté la creación de equipos -->
		</ul>
	</nav>
{/if}

<slot />

<style>
    body {
        background-color: #e5e5e5;
        font-family: 'Press Start 2P', sans-serif;
    }

    .barra-navegacion {
        background-color: #333;
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .barra-navegacion-lista {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }

    .barra-navegacion-link {
        text-decoration: none;
        color: white;
        font-size: 0.8rem;
        transition: color 0.3s ease;
    }

    .barra-navegacion-link:hover {
        color: #ffcc33;
    }

    :global(body) {
        font-family: 'Press Start 2P', sans-serif;
        margin: 0;
        padding: 0;
    }
    .barra-navegacion-link {
        font-family: 'Press Start 2P', sans-serif;
    }
</style>
