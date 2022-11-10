<script>
    import ImageContainer from "$lib/image_container.svelte";
    import VideoPlayer from "$lib/video_player.svelte";
    export let data;
</script>
<header
class="
relative -z-10 lg:-mb-[12vmax] lg:h-[24vmax] h-[20vh]
">
<ImageContainer cover={true} meta_data={data.banner}/>
</header>

<main 
class="
px-8 py-12
bg-deepgreen max-w-screen-lg mx-auto">
    <div class="mb-6">
        <h1 class="text-3xl font-semibold mb-2">{data.title}</h1>
        <h2 class="uppercase opacity-60">{data.type}</h2>
    </div>
    <div class="flex md:flex-row flex-col gap-12 sm:items-start mb-16">
        <div class="flex-1">
            <div class="text-lg max-w-prose">
                {data.overview}
            </div>
        </div>
        <div class="w-full md:w-2/5 grid grid-cols-[auto,_1fr] gap-y-1">
        {#each data.tags as tag }
            <div class="bg-black/80 p-2 flex items-center">
                {tag.name}
            </div>
            <div class="bg-black/20 p-2 flex items-center">
                {tag.value}
            </div>
        {/each}
        </div>
    </div>
    <div class="content-blocks">
        {#each data.body as block}
        {#if block.type == "image"}
        <ImageContainer meta_data={block} />
            {/if}
            {#if block.type == "video"}
                <VideoPlayer meta_data={block} />
            {/if}
            {#if block.legend }
            <div class="p-2 opacity-60">{block.legend}</div>
            {/if}
            {#if block.type == "html"}
            <div class="max-w-prose">
                {@html block.content}
            </div>
            {/if}
            {/each}
        </div>
    </main>

<style>

.content-blocks :global(h2){
    font-size: 1.6em;
    margin-top: 0.8em;
    margin-bottom: 0.2em;
}

.content-blocks :global(p){
    @apply mt-2 mb-6;
}

.media-block{
    margin-bottom: 1.6em;
}

</style>