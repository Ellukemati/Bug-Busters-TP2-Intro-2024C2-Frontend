<script>
    let { data } = $props();
    const integrante = data.integrante
    import "./estilos.css"
 </script>
<h1 class="titulo_integrante">Integrante</h1>
<div class="contenido_integrante">
    <div class="id">
        <p class="texto">id del integrante: {integrante.id}</p>
    </div>
    <div class="integrante_foto">
        <a href="{`/pokemons/${integrante.pokemon_id}`}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{integrante.pokemon_id}.png" alt="imagen del integrante" >
        </a>
    </div>
    <div>
        <p class = "texto">naturaleza: {integrante.naturaleza}</p>
    </div>
</div>
<h2>Movimientos que utiliza</h2>
<table class="tabla_movs_usados">
    <thead>
        <tr>
            <th style="width:20%;" class="titulo_hilera">Numero</th>
            <th style="width:50%;" class="titulo_hilera">Nombre</th>
            <th style="width:10%;" class="titulo_hilera">Tipo</th>
            <th style="width:10%;" class="titulo_hilera">Categoria</th>
            <th style="width:10%;" class="titulo_hilera">Potencia</th>
        </tr>
    </thead>
    <tbody class="cuerpo_tabla">
        {#each integrante.movimientos as movimiento}
            <tr>
                <td class="contenido_hilera">
                    <p class="texto">
                        {movimiento.id}
                    </p>
                </td>
                <td class="contenido_hilera">
                 <a href="/movimientos/{movimiento.id}">
                    <p class="texto">
                        {movimiento.nombre}
                    </p>
                 </a>
             </td>
                <td class="contenido_hilera">
                     <p class="texto">
                         {movimiento.tipo}       
                     </p>
                 </td>
                <td class="contenido_hilera">
                     <p class="texto">
                         {movimiento.categoria}
                     </p>
                </td>
                <td class="contenido_hilera">
                    <p class="texto">
                        {movimiento.power}
                    </p>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

