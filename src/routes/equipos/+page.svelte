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
           <th style="width:10%;">ID</th>
           <th style="width:20%;">Nombre</th>
           <th style="width:70%;">Integrantes</th>
       </tr>
   </thead>
   <tbody>
       {#each equipos as equipo}
           <tr>
               <td>
                    <p>
                        {equipo.id_equipo}
                    </p>
               </td>
               <td>
                <a href="/equipos/{equipo.id_equipo}">
                    <p>
                        {equipo.nombre}
                    </p>
                </a>
            </td>
               <td>
                    <ul class="moves">
                        {#each equipo.pokemons_de_equipo as integrante}
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{integrante.pokemon_id}.png" alt="integrante" class="dot">
                            <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokeball_icon_136305.png" alt="pokebola" class="bola">
                        {/each}
                    </ul>
                </td>
           </tr>
       {/each}
   </tbody>
</table>