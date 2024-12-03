<script>
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	afterNavigate((nav) => {
		const ruta = nav.route.id ?? 'default';
		document.body.className = '';
		document.body.classList.add(ruta.replaceAll('/', '-'));
	});
</script>

<div transition:fade>
	<slot />
</div>
