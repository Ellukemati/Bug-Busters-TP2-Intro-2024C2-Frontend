<script>
    export let data;
    import Typeahead from "svelte-typeahead";
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
    let color_tipo = tipoColores.Normal
    const movimientos = data.movimientos
    function myFunction() {
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
    function resetSearch() {
        var input = document.getElementById("ingreso"); 
        input.value = ""; 
        myFunction(); // force the table to reset since there is no keyup action here 
    }
</script>
<h1>Movimientos</h1>
<form class="buscador">
    <label for="filtrar movimientos">Nombre:</label>
    <input type="search" id="ingreso" placeholder="nombre..">
    <label for="ingresar">buscar:</label>
    <button type="submit" on:click={myFunction()} aria-label="ingresar" >buscar</button>
    <label for="reiniciar">reiniciar:</label>
    <button type="reset" on:click={resetSearch()} aria-label="reiniciar">reiniciar</button>
</form>
<Typeahead
   label="Preseleccionar alumno"
   placeholder={`Buscar alumno por nombre o apellido`}
   data={data.movimientos}
   extract={(movimiento) => `${movimiento.nombre}`}
   inputAfterSelect='clear'
/>

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
               <td class="not-tipo">{movimiento.id}</td>
               <td class="not-tipo">{movimiento.nombre}</td>
               <td>
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


<style>
    button{
        width: 100%;
        font-size: 16px;
        padding: 12px 12px 12px 40px;
        border: 6px solid #ddddddba;
        margin-bottom: 12px;
    }
    label{
        font-family: Arial, Helvetica, sans-serif;
    }
    input {
        width: 100%;
        font-size: 12px;
        padding: 12px 12px 12px 40px;
        border: 6px solid #ddddddba;
        margin-bottom: 12px;
    }
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
        text-align: left;
        padding: 8px;
        background-color: #8899ff;
    }
    .físico{
        background-image:url("https://img.pokemondb.net/images/icons/move-physical.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:contain;
    }
    .especial{
        background-image:url("https://img.pokemondb.net/images/icons/move-special.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:contain;
    }
    .estado{
        background-image:url("https://img.pokemondb.net/images/icons/move-status.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:contain;
    }
    .Hada{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #ee99ee;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Acero{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #aaaabb;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Siniestro{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #775544;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Dragón{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #7766ee;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Fantasma{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #6666bb;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Roca{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #bbaa66;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Bicho{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #aabb22;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Psíquico{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #ff5599;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Volador{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #8899ff;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Tierra{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #ddbb55;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Veneno{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #aa5599;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Lucha{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #bb5544;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Hielo{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #66ccff;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Planta{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #77cc55;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Oscuro{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #56569d;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Eléctrico{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #ffcc33;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Agua{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #3399ff;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Fuego{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #ff4422;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    .Normal{
        display: inline-block;
    width: 66px;
    margin-bottom: 4px;
    background: #aaaa99;
    border: 1px solid #a3a3a3;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    color: #fff;
    font-size: .75rem;
    font-weight: normal;
    line-height: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    text-transform: uppercase;
    transition: opacity .4s
    }
    td{
        border: 10px solid black;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #32c0d0;
        }
    tr{
        background-color: rgb(233, 229, 229);
    }
</style>
