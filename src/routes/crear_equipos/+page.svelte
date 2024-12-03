<script>
    import Typeahead from "svelte-typeahead";
	import { writable } from "svelte/store";

    export let data

    let nuevo_equipo = writable({
        nombre:'',
        id_equipo:0,
        pokemons_de_equipo:[],
    })

    let generacion = "Generación 1"

    function agregarIntegrante() {
        nuevo_equipo.update(s => {
            s.pokemons_de_equipo.push({ id: 0, pokemon_id: 0, equipo_id: 0, naturaleza_id: 0,movimientos_ids: [] });
            return s;
        });
    }
    
    function quitarIntegrante(index) {
        nuevo_equipo.update(s => {
            s.pokemons_de_equipo.splice(index, 1);
            return s;
        });
    }

    function agregarMovimiento(index) {
    nuevo_equipo.update(s => {
        s.pokemons_de_equipo[index].movimientos_ids.push(0); 
        return s;
    });
    }

    function quitarMovimiento(indexIntegrante, indexMovimiento) {
    nuevo_equipo.update(s => {
        s.pokemons_de_equipo[indexIntegrante].movimientos_ids.splice(indexMovimiento, 1); 
        return s;
    });
    }

    function seleccionarPokemon(index, pokemon) {
        nuevo_equipo.update((equipo) => {
            equipo.pokemons_de_equipo[index].pokemon_id = pokemon.id; 
            return equipo;
        });
    }

    function seleccionarNaturaleza(index, naturaleza) {
        nuevo_equipo.update((equipo) => {
            equipo.pokemons_de_equipo[index].naturaleza_id = naturaleza.id; 
            return equipo;
        });
    }

    function seleccionarMovimiento(indexIntegrante, movimientoIndex,movimiento) {
        nuevo_equipo.update((equipo) => {
            equipo.pokemons_de_equipo[indexIntegrante].movimientos_ids[movimientoIndex] = movimiento.id;
            return equipo;
            
    });
    }
    function asignarIdEquipo() {
    nuevo_equipo.update(s => {
        s.pokemons_de_equipo.forEach(integrante => {
            integrante.equipo_id = s.id_equipo; 
        });
            return s;
        });
    }
</script>

<h1> Crear nuevo Equipo </h1>

<form method="POST" action="?/create"> 
    <h2>Informacion de equipo: </h2>
    <div class="integrante-container">
        
        <div class="integrante">
        <div class="movimiento-container">
        <label>
            Nombre:
            <input
                name="nombre"
                type="text"
                bind:value={$nuevo_equipo.nombre}
                autocomplete="off"
                required
            />
        </label>
        
        <label>
            ID Equipo:
            <input
                name="id_equipo"
                type="number"
                bind:value={$nuevo_equipo.id_equipo}
                autocomplete="off"
                on:change={asignarIdEquipo}
                required
            />
        </label>
        <label>
            Incluir hasta:
            <select bind:value={generacion}>
                <option value="Generación 1">Generación 1</option>
                <option value="Generación 2">Generación 2</option>
                <option value="Generación 3">Generación 3</option>
                <option value="Generación 4">Generación 4</option>
                <option value="Generación 5">Generación 5</option>
                <option value="Generación 6">Generación 6</option>
                <option value="Generación 7">Generación 7</option>
                <option value="Generación 8">Generación 8</option>
            </select>
        </label>
        </div>
        </div>
    </div>
    <input type="hidden" name="pokemons_de_equipo" value={JSON.stringify($nuevo_equipo.pokemons_de_equipo)} />
    <h2>Integrantes:</h2>
    <div class="integrante-container">
        {#each $nuevo_equipo.pokemons_de_equipo as integrante, index}
            <div class="integrante">
                <fieldset>
                    <legend>Integrante {index + 1}</legend>
                    
                    <div class="integrante-top">
                        <div class="buscador">
                            <Typeahead
                                label="Seleccionar pokemon"
                                placeholder={`Buscar pokemon por nombre`}
                                data={data.pokemonList}
                                extract={(pokemon) => `${pokemon.nombre} (Tipos: ${pokemon.tipo_1} ${ +pokemon.tipo_2 ||''}) (ID: ${pokemon.id})`}
                                on:select={({ detail }) => seleccionarPokemon(index, detail.original)}
                                inputAfterSelect='clear'
                            />
                        </div>
                        <div class="buscador">
                            <Typeahead
                                label="Seleccionar naturaleza"
                                placeholder={`Buscar naturaleza por nombre`}
                                data={data.naturalezas}
                                extract={(naturaleza) => `${naturaleza.nombre} (ID: ${naturaleza.id})`}
                                on:select={({ detail }) => seleccionarNaturaleza(index, detail.original)}
                                inputAfterSelect='clear'
                            />
                        </div>
                        <div>
                            <label for="integrante-id-{index}">ID Integrante:</label>
                            <input type="number" bind:value={integrante.id} required />
                        </div>
                        <div>
                            <label for="pokemon-id-{index}">Pokemon ID:</label>
                            <input type="text" bind:value={integrante.pokemon_id} readonly/>
                        </div>
                        <div>
                            <label for="naturaleza-id-{index}">Naturaleza ID:</label>
                            <input type="text" bind:value={integrante.naturaleza_id} readonly/>
                        </div>
                    </div>

                    <div class="movimientos-container">
                        {#each integrante.movimientos_ids as movimiento, movimientoIndex}
                            <fieldset>
                                <legend>Movimiento {movimientoIndex + 1}</legend>
                                <Typeahead
                                    label="Seleccionar movimiento"
                                    placeholder={`Buscar movimiento por nombre`}
                                    data={data.move.filter(movimiento => movimiento.generacion <= generacion)}
                                    extract={(movimiento) => `${movimiento.nombre} (Tipo: ${movimiento.tipo}) (Categoria: ${movimiento.categoria})  (ID: ${movimiento.id})`}
                                    on:select={({ detail }) => seleccionarMovimiento(index, movimientoIndex, detail.original)}
                                    inputAfterSelect='clear'
                                />
                                <div>
                                    <label for="movimiento-id-{movimientoIndex}">ID:</label>
                                    <input type="text" bind:value={movimiento} required/>
                                    <button type="button" on:click={() => quitarMovimiento(index, movimientoIndex)}>
                                        Quitar Movimiento
                                    </button>
                                </div>
                            </fieldset>
                        {/each}
                    </div>

                    <button type="button" on:click={() => agregarMovimiento(index)}>
                        Agregar Movimiento
                    </button>
                    <button type="button" on:click={() => quitarIntegrante(index)}>
                        Quitar Integrante
                    </button>
                </fieldset>
            </div> 
        {/each}
    </div>

    <button type="button" on:click={agregarIntegrante}>Agregar Integrante</button>
    <button type="submit">Confirmar</button>
</form>

<!-- Sirve para ver el body con el que se va a hacer la request, una vez terminado el proyecto eliminar -->
<pre>{JSON.stringify($nuevo_equipo, null, 2)}</pre>

<style>
.integrante-container {
    display: flex;
    flex-direction: column; 
    gap: 1rem; 
    justify-content: flex-start;
}

.integrante {
    justify-content: center;
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    background-color: #f9f9f9;
    min-width: 200px;
    margin: 0.5rem; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 97%;
}

.integrante-top {
    display: flex; 
    gap: 1rem; 
    width: 100%; 
    margin-bottom: 1rem;
}

.movimientos-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 0rem;
    width: 100%;
    justify-content: center;
}

.buscador {
    margin-bottom: 1rem;
    width: 100%; 
}

button {
    margin-top: 0.5rem;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    background-color: #808080;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #4e4e4e;
}
h2 {
    margin: 1rem;
    font-family: 'Press Start 2P', sans-serif;
    font-size:large;
}
h1 {
    margin: 1rem;
    font-family: 'Press Start 2P', sans-serif;
    font-size:xx-large;
    text-align: center;
}

</style>