import { error } from '@sveltejs/kit';

export async function load( {params} ) {
    let url = new URL('http://localhost:8000/teams/')
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
 
    let equipos = await response.json();
    let integrante = await encontrar_integrante(params.id, equipos)
    return {
        integrante: integrante
    };
 }
async function encontrar_integrante(id, equipos) {
    let integrante
    for (let i = 0; i < equipos.length; i++){
        for (let j = 0; j < equipos[i].pokemons_de_equipo.length; j++){
            if (equipos[i].pokemons_de_equipo[j].id == id){
                integrante = equipos[i].pokemons_de_equipo[j]
            }
        }
    }
    if (integrante == null){
        throw error(404, "Error: 404");
    }
    return integrante
}