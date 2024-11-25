<script>
    let { data } = $props();
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
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{integrante.pokemon_id}.png" alt="integrante" class="dot">
                    <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="pokebola" class="bola">
                </td>
                <td>
                    <p class="naturaleza">{integrante.naturaleza}</p>
                </td>
                <td>
                    <ul class="moves">
                        {#each integrante.movimientos as movimiento}
                        <p>{movimiento.nombre}   </p>
                    {/each}
                    </ul>
                    
                </td>
            </tr>
        {/each}
    </tbody>
 </table>
 <style>
h1{
    text-align: center;
    
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }

     th {
        border: 10px solid black;
        text-align: center;
        padding: 8px;
        background-color: #8899ff;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        color:rgb(210, 207, 207)
    }
    tr{
        border: 10px solid black;
        text-align: center;
        padding: 8px;
        background-color: #8899ff;
    }
    td{
        border: 10px solid black;
        text-align: center;
        padding: 8px;
        background-color: #8b92ba;
    }
    .bola {
        height: 95px;
  width: 95px;
  border-radius: 60%;
  z-index: 0;
  background-color: rgb(255, 0, 0);
  align-content: center;
}
.naturaleza{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 30px;
    color: rgb(11, 219, 94);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.moves{
    display:inline-table;
    height: 95px;
    align-content: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    color:aqua;
}
.dot{
    position: absolute;
    height: 95px;
  width: 95px;
  border-radius: 60%;
  z-index: 1;
  align-content: center;
}
 </style>