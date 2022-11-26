<script>
	import HeroBanner from '$lib/hero_banner/index.svelte';
	import VidePlayer from '$lib/video_player.svelte';
	import ProjectList from '$lib/project_list.svelte';

	export let data;

</script>

<header class="relative w-full md:min-h-[80vh]">
	<HeroBanner/>
	<div class="md:pt-[25vh] max-w-screen-xl mx-auto px-6 md:px-16 mb-8 md:mb-0">
	  <div class="mb-8">
	    <h1 class="font-bold text-3xl md:text-4xl lg:text-6xl mb-2">{data.title}</h1>
	    <h2 class="text-accent font-normal text-xl md:text-2xl lg:text-4xl">{data.subtitle}</h2>
	  </div>
	  <div class="font-semibold max-w-[40ch]	text-lg md:text-xl mb-4">
	    {@html data.body}
	  </div>
	  <div class="flex gap-4">
	  {#each data.links as link}
	    <a class="font-semibold uppercase" href={link.url}>{link.name}</a>
	  {/each}
	  </div>
	</div>
</header>

<main class="max-w-screen-xl mx-auto p-6 md:p-16">
 	<VidePlayer meta_data={data.demo_reel} vignette={data.demo_reel_vignette} />
	<ProjectList projects={data.projects_list}/>
	<footer class="border-t border-default/50 py-8 mt-16 md:mt-24">
		<p class="text-default/50 text-center text-xs md:text-base font-semibold">Designed and developed by <a href="https://gotibo.fr/">Tibo</a> with sveltekit.</p>
	</footer>
</main>
