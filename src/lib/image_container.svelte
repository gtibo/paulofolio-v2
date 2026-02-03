<script>
  import { onMount } from "svelte";
  /**
   * @typedef {Object} Props
   * @property {any} [meta_data]
   * @property {boolean} [cover]
   */

  /** @type {Props} */
  let { meta_data = [], cover = false } = $props();
  let loaded = $state(false);
  let srcset = $state("");
  let sizes = $state("");
  let ratio = meta_data?.formats?.ratio || meta_data.base_ratio;
  let default_src = (meta_data.formats) ? `/${meta_data.formats.sizes[0].path}` : `/${meta_data.base_path}`;
  let alt = meta_data.alt || "no alternative text available";
  if(meta_data.formats){
    srcset = meta_data.formats.sizes.map(size => `/${size.path} ${size.width}w`).join(", ");
    sizes = meta_data.formats.sizes.map(size => `(max-width: ${size.width}px) ${size.width}px`).join(", ");
  }

  let img_element = $state();

  onMount(()=>{
    img_element.src = default_src;
  });

</script>

<picture 
  class:cover
  class:default={!cover}
  style="aspect-ratio:{ratio};"
> 
  <div class="absolute inset-0 flex flex-col gap-4 justify-center items-center ">
    <svg xmlns="http://www.w3.org/2000/svg" 
      class="animate-pulse stroke-accent w-8"
      viewBox="0 0 100 100" fill="none">
      <path d="M19.6934 85.0001V88.0001H22.6934H39.2054H42.2054V85.0001V63.9041H58.1174C62.9095 63.9041 67.3102 62.8782 71.2487 60.763C75.1479 58.6691 78.2661 55.783 80.5391 52.1169L80.546 52.1056L80.5529 52.0943C82.8385 48.3341 83.9654 44.1418 83.9654 39.5921C83.9654 34.8784 82.852 30.5841 80.5529 26.8018C78.289 23.0772 75.1782 20.1536 71.278 18.0528C67.3851 15.8564 62.9691 14.8 58.1174 14.8H22.6934H19.6934V17.8V85.0001ZM59.932 36.2414L59.9556 36.2649L59.9797 36.288C60.78 37.0534 61.2614 38.085 61.2614 39.688C61.2614 41.1996 60.7978 42.2096 59.9797 42.9921C59.1715 43.7652 58.0163 44.2721 56.1974 44.2721H42.2054V34.9121H56.1974C57.9782 34.9121 59.1172 35.4265 59.932 36.2414Z"
      stroke-width="3"
      />
    </svg>
    <div class="text-xs text-default/40">{alt}</div>
  </div>

    <img
    bind:this={img_element}
    class:default-hidden={!loaded}
    class:appear={loaded}
    {srcset}
    {sizes}
    src={default_src}
    {alt} 
    onload={()=>{loaded = true;}}
    loading="lazy"
    />
</picture>


<style>
  @reference "tailwindcss";
  .default-hidden{
    opacity: 0;
  }
  .appear{
    animation: appear 0.15s forwards;
  }

  picture{
    @apply relative bg-black/40;
  }

  @keyframes appear{
    from{
      opacity:0;
    }
    to{
      opacity:1;
    }
  }

  picture.default {
    @apply block w-full h-auto;
  }
  picture.default > img{
    @apply w-full h-auto;
  }

  picture.cover{
    @apply absolute w-full h-full;
  }
  picture.cover > img{
    @apply object-cover w-full h-full;
  }

</style>