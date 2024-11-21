<script>
    export let data;
    const movimientos = data.movimientos
    function myFunction() {
        let input, table, tr, td, i, txtValue;
        input = document.getElementById("ingreso");
        table = document.getElementById("Tabla");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
                    tr[i].style.display
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    function resetSearch() {
        var input = document.getElementById("ingreso");
        input.value = '';
        myFunction();
    }
</script>
<h1>Movimientos</h1>
<form class="buscador">
    <label for="filtrar movimientos">Nombre:</label>
    <input type="text" id="ingreso" onkeyup="{myFunction()}" placeholder="search " />
    <button type="reset" onclick={resetSearch()} aria-label="reiniciar"></button>
</form>
<table id="Tabla">
   <thead>
       <tr>
           <th style="width:40%;">Numero</th>
           <th style="width:60%;">Nombre</th>
       </tr>
   </thead>
   <tbody>
       {#each movimientos as movimiento}
           <tr>
               <td>{movimiento.id}</td>
               <td>{movimiento.nombre}</td>
           </tr>
       {/each}
   </tbody>
</table>


<style>
    button{
        width: 100%;
        font-size: 12px;
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

    td, th {
        border: 10px solid black;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #33ecff;
        }
</style>
