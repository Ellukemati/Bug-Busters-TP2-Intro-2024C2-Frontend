<script>
    export let data;
    import "./estilos.css"
    const equipos = data.equipos
    function filtrar_mesa() {
        var input, filter, table, tbody, tr, i, td, j, txtValue; 
  input = document.getElementById("ingreso"); 
  filter = input.value.toUpperCase(); 
  table = document.getElementById("Tabla"); 
  tbody = table.getElementsByTagName("tbody")[0]; 
  tr = tbody.getElementsByTagName("tr"); 
 
  // Loop through all table rows, then through all row cells, 
  // and hide the rows where none of the cells match the filter 
  for (i = 0; i < tr.length; i++) { 
      tr[i].style.display = "none"; 
      td = tr[i].getElementsByTagName("td")[1]; 
        if (td) { 
          txtValue = td.textContent || td.innerText; 
          if (txtValue.toUpperCase().indexOf(filter) > -1) { 
            tr[i].style.display = ""; 
          } 
        } 
      } 
    }
</script>
<h1>Equipos</h1>
<form class="buscador">
    <label for="filtrar equipos">Buscar equipo:</label>
    <input type="search" id="ingreso" onkeyup={filtrar_mesa} placeholder="nombre..">
</form>

<table id="Tabla">
   <thead>
       <tr>
           <th style="width:10%;" class="header_tabla_equipos">ID</th>
           <th style="width:20%;" class="header_tabla_equipos">Nombre</th>
           <th style="width:70%;" class="header_tabla_equipos">Integrantes</th>
       </tr>
   </thead>
   <tbody>
       {#each equipos as equipo}
           <tr class="cuerpo_equipos">
               <td>
                    <p>
                        {equipo.id_equipo}
                    </p>
               </td>
               <td>
                <a href="/equipos/{equipo.id_equipo}" class="link_equipo_particular">
                    <p class="link_equipo_particular">
                        {equipo.nombre}
                    </p>
                </a>
            </td>
               <td>
                    <ul class="miembros">
                        
                        {#each equipo.pokemons_de_equipo as integrante}
                            <a href="/integrantes/{integrante.id}">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{integrante.pokemon_id}.png" alt="integrante" class="dot">
                                
                            </a>
                            <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="pokebola" class="bola">
                        {/each}
                    </ul>
                </td>
           </tr>
       {/each}
   </tbody>
</table>