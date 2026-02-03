<script>
	import '$lib/app.css';

	let { children } = $props();

</script>

<svelte:head>
	<title>Paul Bellon-Serre</title>
	<meta name="description" content="Paul Bellon-Serre's portfolio">
</svelte:head>


{@render children?.()}
