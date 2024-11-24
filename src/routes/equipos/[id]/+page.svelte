<script>
    let { equipo } = $props();
 </script>
 
 <h1>Materia {equipo.nombre}</h1>
 <h2>Alumnos</h2>
 <table>
    <tbody>
        {#each equipo.pokemons_de_equipo as integrante}
            <tr>
                <td>
                    {integrante.pokemon_id}
                </td>
                <td>
                    <span>{integrante.naturaleza}</span>
                </td>
            </tr>
        {/each}
    </tbody>
 </table>