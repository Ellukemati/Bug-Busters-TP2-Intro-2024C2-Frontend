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
    let equipo = diccionario.equipo
    let url2 = new URL(`http://localhost:8000/pokemons/${integrante.pokemon_id}`)
    const response2 = await fetch(url2);
    if (!response2.ok){
        throw new Error(`Response status: ${response2.status}`);
    }
    let pokemon = await response2.json();
    return {
        integrante: integrante,
        pokemon: pokemon,
        equipo: equipo
    };
 }
async function encontrar_integrante(id, equipos) {
    let integrante
    let equipo
    let diccionario = {
        "integrante": -1,
        "equipo": -1,
    }
    for (let i = 0; i < equipos.length; i++){
        for (let j = 0; j < equipos[i].pokemons_de_equipo.length; j++){
            if (equipos[i].pokemons_de_equipo[j].id == id){
                integrante = equipos[i].pokemons_de_equipo[j]
                equipo = equipos[i]
            }
        }
    }
    if (integrante == null){
        throw error(404, "Error: 404");
    }
    diccionario.integrante = integrante
    diccionario.equipo = equipo
    return diccionario
}