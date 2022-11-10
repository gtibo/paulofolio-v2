<script>
  import ImageContainer from "$lib/image_container.svelte";
  export let title = "Untitled",
  type = "no type",
  vignette = "/",
  slug = "/";
</script>

<a href="/project/{slug}" class="group">
  <div class="overflow-hidden">
    <div class="group-hover:scale-105 transition-transform">
      <ImageContainer meta_data={vignette} />
    </div>
  </div>
  <div class="text-default mt-6 text-sm md:text-lg lg:text-xl font-bold text-center">
    {title} - {type}
  </div>
</a>
