<script>
  import ProjectVignette from '$lib/project_vignette.svelte';
  export let projects = [];
</script>

<div id="project-grid">
  {#each projects as project}
    <div class="item">
        <ProjectVignette
        {...project}
        />
      </div>
  {/each}
</div>

<style>

#project-grid{
  @apply grid sm:grid-cols-2 gap-8 sm:gap-16 sm:pb-32;
}

#project-grid > .item:nth-child(even){
  @apply sm:translate-y-32;
}

</style>
