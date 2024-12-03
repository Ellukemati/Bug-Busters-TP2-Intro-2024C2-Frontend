<script>
// @ts-nocheck

    export let data; 
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

    function formatearNombre(nombre) {     // Función para formatear los nombres
        return nombre
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    function obtenerColor(tipo) { // Función para colorear los tipos
        return tipoColores[tipo];
    }
</script>

<style>
    .bloque {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Press Start 2P', sans-serif;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        margin: 0 auto;
        text-decoration: none;
        color: #333;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
        border: 1px solid #ddd;
    }

    .titulo {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 2rem;
        margin-bottom: 20px;
        color: #2b2b2b
    }
    .subtitulo {
        font-family: 'Press Start 2P', sans-serif;
        font-size: 1rem;
        margin: 20px;
        color: #2b2b2b
    }

    .contenido {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .seccion {
        width: 45%;
        padding: 10px;
        border-radius: 8px;
        background-color: #ffffff;
        color: #333;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 1px solid #ddd;
    }
    .seccion:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

    .seccion h3{
        font-size: 1.5rem;
        margin-bottom: 10px;
        border-bottom: 2px solid #000000;
    }

    .item {
        margin: 5px 0;
    }

    .item span {
        color: #313131;
    }


</style>

<div class="bloque">
    <h1 class="titulo">{data.move.nombre}</h1>

    <div class="contenido">

        <div class="seccion">
            <h3>Estadisticas</h3>
            <p class="item">
                <span>Tipo:</span>
                <span 
                    class="Cartel-Tipo"
                    style="background-color: {obtenerColor(data.move.tipo)};
                            color: #fff;">
                    {formatearNombre(data.move.tipo)}
                </span>
            </p>
            <p class="item"><span>Categoria:</span> {formatearNombre(data.move.categoria)}</p>
            <p class="item"><span>Potencia:</span> {data.move.power}</p>
            <p class="item"><span>Precision:</span> {data.move.accuracy}</p>
            <p class="item"><span>Usos:</span> {data.move.pp}</p>
            <p class="item"><span>Introducido:</span>  {data.move.generacion}</p>
        </div>

        <div class="seccion">
            <h3>Efectos</h3>
            <p>{data.move.efecto}</p>
            <p class="item"><span>Probabilidad de Efecto:</span> {data.move.probabilidad_efecto || "-"}%</p>
        </div>
    </div>
</div>  


<h2 class="subtitulo">  Pokemones que pueden aprender este movimiento: </h2>
<div class="grilla-pokemon">
    {#each data.pokemonList as pokemon}
        <a href="/pokemons/{pokemon.id}" class="pokemon-tarjeta">
            <span class="pokemon-id">ID #{pokemon.id}</span>
            <img src="{pokemon.url_imagen}" alt="Imagen de {formatearNombre(pokemon.nombre)}" />
            <h2>{formatearNombre(pokemon.nombre)}</h2>
            <div class="tipo-cartel">
                <span class="Cartel-Tipo"
                    style="background-color: {obtenerColor(pokemon.tipo_1)};
                             color: #fff;">
                    {formatearNombre(pokemon.tipo_1)}
                </span>
                {#if pokemon.tipo_2}
                    <span class="Cartel-Tipo"
                    style="background-color: {obtenerColor(pokemon.tipo_2)};
                             color: #fff;">
                        {formatearNombre(pokemon.tipo_2)}
                    </span>
                {/if}
            </div>
        </a>
    {/each}
</div>