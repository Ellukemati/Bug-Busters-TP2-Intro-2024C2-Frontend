import { error } from '@sveltejs/kit';

export async function load( {params} ) {
    let url = new URL('http://localhost:8000/teams/')
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
 
    let equipos = await response.json();
    let diccionario = await encontrar_integrante(params.id, equipos)
    let integrante = diccionario.integrante
    let equipo_id = diccionario.id
    let url2 = new URL(`http://localhost:8000/pokemons/${integrante.pokemon_id}`)
    const response2 = await fetch(url2);
    if (!response2.ok){
        throw new Error(`Response status: ${response2.status}`);
    }
    let pokemon = await response2.json();
    return {
        integrante: integrante,
        pokemon: pokemon,
        equipo_id: equipo_id
    };
 }
async function encontrar_integrante(id, equipos) {
    let integrante
    let equipo_id
    let diccionario = {
        "integrante": -1,
        "id": -1,
    }
    for (let i = 0; i < equipos.length; i++){
        for (let j = 0; j < equipos[i].pokemons_de_equipo.length; j++){
            if (equipos[i].pokemons_de_equipo[j].id == id){
                integrante = equipos[i].pokemons_de_equipo[j]
                equipo_id = equipos[i]
            }
        }
    }
    if (integrante == null){
        throw error(404, "Error: 404");
    }
    diccionario.integrante = integrante
    diccionario.id = equipo_id
    return diccionario
}