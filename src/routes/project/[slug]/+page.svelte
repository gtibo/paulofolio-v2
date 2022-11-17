<script>
    import { afterNavigate } from '$app/navigation';
    import ImageContainer from "$lib/image_container.svelte";
    import VideoPlayer from "$lib/video_player.svelte";
    export let data;
    
    let can_go_back = false;

    afterNavigate(({from})=>{
        can_go_back = from?.url.pathname == "/";
    });

    function goback(e){
        if(can_go_back){
            e.preventDefault();
            history.back();
        }
    }

</script>

<a href="/" on:click={goback} class="z-10 fixed xl:top-16 xl:left-16 top-8 left-8 flex gap-2">
    <svg class="w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 2L12 12M12 12L2 22M12 12L22 2M12 12L22 22" stroke="white" stroke-width="3"/>
    </svg>
    <span class="text-default font-semibold">
        Close
    </span>
</a>

<header
class="
relative -z-10 -mb-[14vmax] h-[30vmax]
">
    <ImageContainer cover={true} meta_data={data.banner}/>
    <div class="absolute inset-0
    bg-gradient-to-b from-deepgreen/0 to-deepgreen"> 
    </div>
</header>

<main 
class="
px-8 py-12
max-w-screen-xl mx-auto">
    <div class="mb-6">
        <h1 class="text-6xl font-semibold mb-2">{data.title}</h1>
        <h2 class="text-2xl uppercase opacity-60">{data.type}</h2>
    </div>
    <div class="flex md:flex-row flex-col gap-12 sm:items-start mb-16">
        <div class="flex-1">
            <div class="text-xl max-w-prose">
                {data.overview}
            </div>
        </div>
        <div class="w-full md:w-2/5 grid grid-cols-[auto,_1fr] gap-y-1 text-sm">
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