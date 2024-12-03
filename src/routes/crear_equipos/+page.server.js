export async function load() {
    let moveUrl = `http://localhost:8000/moves/`;
    let pokemonUrl = `http://localhost:8000/pokemons`;
    let naturalezasUrl = `http://localhost:8000/teams/natures`;

    const moveResponse = await fetch(moveUrl);
    const pokemonResponse = await fetch(pokemonUrl);
    const naturalezasResponse = await fetch(naturalezasUrl);

    if (!moveResponse.ok) {
        error(moveResponse.status)
    }
    if (!pokemonResponse.ok) {
        error(pokemonResponse.status)
    }
    if (!naturalezasResponse.ok) {
        error(naturalezasResponse.status)
    }

    let move = await moveResponse.json();
    let pokemonList = await pokemonResponse.json();
    let naturalezas = await naturalezasResponse.json();
    return {
        move,
        pokemonList,
        naturalezas
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        const nombre = data.get('nombre');
        const id_equipo = data.get('id_equipo');
        const pokemons_de_equipo = JSON.parse(data.get('pokemons_de_equipo') || '[]');

        if (!nombre || !pokemons_de_equipo.length) {
            throw new Error('Datos inválidos. Asegurate de proporcionar un nombre y al menos un integrante.');
        }

        const payload = {
            nombre,
            id_equipo: id_equipo || null, 
            pokemons_de_equipo,
        };

        const url = new URL('http://localhost:8000/teams/');

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error al crear el equipo. Response status: ${response.status}`);
        }
    },
};