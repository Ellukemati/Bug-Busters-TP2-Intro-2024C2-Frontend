<script>
    export let data;
    import "./estilos.css"
    const movimientos = data.movimientos
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
<h1>Movimientos</h1>
<form class="buscador">
    <label for="filtrar movimientos">Nombre:</label>
    <input type="search" id="ingreso" onkeyup={filtrar_mesa} placeholder="nombre..">
</form>

<table id="Tabla">
   <thead>
       <tr>
           <th style="width:20%;">Numero</th>
           <th style="width:60%;">Nombre</th>
           <th style="width:10%;">Tipo</th>
           <th style="width:10%;">Categoria</th>
       </tr>
   </thead>
   <tbody>
       {#each movimientos as movimiento}
           <tr>
               <td class="texto_movs">{movimiento.id}</td>
               <td class="texto_movs">
                <p class="nombre_movs_individual">
                  <a href="/movimientos/{movimiento.id}" class="nombre_movs_individual">
                    {movimiento.nombre}
                </a>  
                </p>
                
            </td>
               <td class="columna_tipos">
                    <p class="{movimiento.tipo}">
                        {movimiento.tipo}       
                    </p>
                </td>
               <td>
                    <p class="{movimiento.categoria}">
                        {movimiento.categoria}
                    </p>
               </td>
           </tr>
       {/each}
   </tbody>
</table>



