import { error } from '@sveltejs/kit';

export async function load({ params }) {
    let url = new URL(`http://localhost:8000/pokemons/${params.id}`)
    const response = await fetch(url);
    if (!response.ok) {
        error(response.status)
    }

    let pokemon = await response.json();
    const description = await getPokemonDescription(params.id)
    let movimientos = await getLearnableMoves(params.id)

    return {
        pokemon,
        description,
        movimientos
    };
}
async function getLearnableMoves(pokemonId) {
    const response = await fetch(`http://localhost:8000/pokemons/${pokemonId}/moves`)
    if (!response.ok) {
        error(response.status)
    }
    return await response.json();
}
async function getPokemonDescription(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    const data = await response.json();

    const flavorText = data.flavor_text_entries.find(entry => entry.language.name === 'es');

    return flavorText ? flavorText.flavor_text : 'Descripción no disponible';
}
