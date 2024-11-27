<script>
    let { data } = $props();
    import "./estilos.css"
 </script>
 
 <h1>Equipo: {data.equipo.nombre}</h1>
 <h2>Integrantes:</h2>
 <table>
    <thead>
        <tr>
            <th style="width:20%;" >Pokemon</th>
            <th style="width:15%;">Naturaleza</th>
            <th style="width:65%;">Movimientos</th>
        </tr>
    </thead>
    <tbody>
        {#each data.equipo.pokemons_de_equipo as integrante}
            <tr>
                <td class="poke">
                    <a href="../routes/integrantes/{integrante.id}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{integrante.pokemon_id}.png" alt="integrante" class="dot">
                    </a>
                    <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="pokebola" class="bola">
                </td>
                <td>
                    <p class="naturaleza">{integrante.naturaleza}</p>
                </td>
                <td>
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
 
