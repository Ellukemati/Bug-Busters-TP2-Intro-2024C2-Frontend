<script>
    let { data } = $props();
    import "./estilos.css"
 </script>
 
 <h1 class="nombre_equipo">Equipo: {data.equipo.nombre}</h1>
 <h2>Integrantes:</h2>
 <table class="tabla_de_miembros">
    <thead>
        <tr>
            <th style="width:20%;" class="cabezera_equipo_id">Pokemon</th>
            <th style="width:15%;" class="cabezera_equipo_id">Naturaleza</th>
            <th style="width:65%;" class="cabezera_equipo_id">Movimientos</th>
        </tr>
    </thead>
    <tbody>
        {#each data.equipo.pokemons_de_equipo as integrante}
            <tr class="cuerpo_equipo_id">
                <td class="celda_equipo_id">
                    <div class="celda_integrante">
                        <a href="/integrantes/{integrante.id}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{integrante.pokemon_id}.png" alt="integrante" class="img_integrante">
                        </a>
                    </div>
                </td>
                <td class="celda_equipo_id">
                    <p class="naturaleza">{integrante.naturaleza}</p>
                </td>
                <td class="celda_equipo_id">
                    <ul class="moves">
                        {#each integrante.movimientos as movimiento}
                        <p><a href="/movimientos/{movimiento.id}">
                            {movimiento.nombre}
                        </a>   </p>
                    {/each}
                    </ul>
                    
                </td>
            </tr>
        {/each}
    </tbody>
 </table>
 
