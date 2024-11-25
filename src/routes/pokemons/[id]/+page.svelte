<script>
	export let data;

	function capitalizeFirstLetter(string) {
		if (!string) return '';
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
	import './styles.css';
	function handleClick() {
		alert('¡Evolución seleccionada!');
	}
</script>

<main class="main">
	<header>
		<h1>{capitalizeFirstLetter(data.pokemon.nombre)}</h1>
	</header>
	<img src={data.pokemon.url_imagen} alt="Imagen de {data.pokemon.nombre}" class="imagen" />

	<p class="description">{data.description}</p>
	<div class="content">
		<div class="tabla-tipos">
			<div>
				<table>
					<thead>
						<tr>
							<th class="item-title">Tipo/s:</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class={data.pokemon.tipo_1}>{data.pokemon.tipo_1}</td>
						</tr>
						<tr>
							<td class={data.pokemon.tipo_2}>{data.pokemon.tipo_2}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="tabla-estadisticas-base">
			<table>
				<thead>
					<tr>
						<th class="item-title">Estadísticas</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Vida: {data.pokemon.estadistica_hp}HP</td>
					</tr>
					<tr>
						<td>Ataque: {data.pokemon.estadistica_attack}</td>
					</tr>
					<tr>
						<td>Defensa: {data.pokemon.estadistica_defense}</td>
					</tr>
					<tr>
						<td>Velocidad: {data.pokemon.estadistica_speed}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="tabla-habilidades">
			<table>
				<thead>
					<tr>
						<th class="item-title">Habilidades</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{data.pokemon.habilidad_1}</td>
					</tr>
					<tr>
						<td>{data.pokemon.habilidad_2}</td>
					</tr>
					<tr>
						<td>{data.pokemon.habilidad_3}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="tabla-datos">
			<table>
				<thead>
					<tr>
						<th class="item-title">Datos</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Altura: {data.pokemon.altura / 1000}mts</td>
					</tr>
					<tr>
						<td>Peso: {data.pokemon.peso / 10}kg</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="content">
		{#if data.pokemon.id_evolucion_anterior}
			<div class="tabla-evolutiva">
				<table>
					<thead>
						<tr>
							<th class="item-title">Su anterior evolucion es</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a href={data.pokemon.id_evolucion_anterior}>
									<img
										src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{data
											.pokemon.id_evolucion_anterior}.png"
										alt="Evolución"
										class="imagen-boton"
									/>
								</a></td
							>
						</tr>
					</tbody>
				</table>
			</div>
		{/if}
		{#if data.pokemon.id_evolucion_siguiente}
			<div class="tabla-evolutiva">
				<table>
					<thead>
						<tr>
							<th class="item-title">Evoluciona en...</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a href={data.pokemon.id_evolucion_siguiente}>
									<img
										src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{data
											.pokemon.id_evolucion_siguiente}.png"
										alt="Evolución"
										class="imagen-boton"
									/>
								</a></td
							>
						</tr>
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</main>
