export async function load() {
	let url = new URL('http://localhost:8000/pokemons/');
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Error al cargar los Pokémon: ${response.status}`);
	}

	let pokemon = await response.json();

	return {
		pokemon: pokemon
	};
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const url = new URL('http://localhost:8000/');
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				nombre: data.get("nombre"),
				url_imagen: data.get("imagen"),
				altura: data.get("altura"),
				peso: data.get("peso"),
				tipo_1: data.get("tipo_1"),
				tipo_2: data.get("tipo_2"),
				habilidad_1: data.get("habilidad_1"),
				habilidad_2: data.get("habilidad_2") || null,
				habilidad_3: data.get("habilidad_3") || null,
				estadistica_hp: data.get("hp"),
				estadistica_attack: data.get("attack"),
				estadistica_defense: data.get("defense"),
				estadistica_special_attack: data.get("special_attack"),
				estadistica_special_defense: data.get("special_defense"),
				estadistica_speed: data.get("speed"),
				id_evolucion_anterior: data.get("evolucion_anterior") || null,
				id_evolucion_siguiente: data.get("evolucion_siguiente") || null,
			})
		});

		if (!response.ok) {
			throw new Error(`Error al crear el Pokémon: ${response.status}`);
		}
	}
};
