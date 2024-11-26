import { error } from '@sveltejs/kit';

export async function load({ params }) {
    let moveUrl = `http://localhost:8000/moves/${params.id}`;
    let pokemonUrl = `http://localhost:8000/moves/${params.id}/pokemon`;

    const moveResponse = await fetch(moveUrl);
    const pokemonResponse = await fetch(pokemonUrl);

    if (!moveResponse.ok) {
        error(moveResponse.status)
    }
    if (!pokemonResponse.ok) {
        error(pokemonResponse.status)
    }

    let move = await moveResponse.json();
    let pokemonList = await pokemonResponse.json();
    return {
        move,
        pokemonList
    };
}

