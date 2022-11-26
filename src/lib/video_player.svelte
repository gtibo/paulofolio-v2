<script>
import { onMount } from 'svelte';
import ImageContainer from './image_container.svelte';

export let meta_data = {}, vignette = undefined;

let video = undefined;
let path = "/" + meta_data.base_path;
let playing = false;
let duration = meta_data.duration, time = 0;
let ready = false;
let waiting = false;
let show_controls = false;
let has_played_once = false;

let controls_timeout;

onMount(()=>{
  video.src = path;

  video.addEventListener('loadedmetadata', (event) => {
    ready = true;
  });

  video.addEventListener('waiting', (event) => {
    waiting = true;
  });

  video.addEventListener('canplay', (event) => {
    waiting = false;
  });

});

function toggle(){
  if(!ready) return;
  playing = !playing;
  if(playing){
    video.play();
    has_played_once = true;
  }else{
    video.pause();
  }
}

function pointerMove(e){
  clearTimeout(controls_timeout);
  controls_timeout = setTimeout(() => show_controls = false, 1500);
  show_controls = true;

}

function seekTrack(e){
  if(!ready) return;
  let seek_time = duration * (e.layerX / e.target.clientWidth);
  time = seek_time;
  video.currentTime = time;
}

$: time_percent = time / duration;

</script>

<div
on:pointermove={pointerMove}
class="relative overflow-hidden">
  
  <!-- Vignette -->
  {#if vignette && !has_played_once}
    <div class:opacity-0={playing} 
    class="absolute z-10 inset-0 pointer-events-none transition-opacity">
      <ImageContainer meta_data={vignette} cover=true/>
    </div>
  {/if}
  <video
    class:appear={ready}
    bind:this={video}
    bind:currentTime={time}
    on:click={toggle}
    style="aspect-ratio: {meta_data.base_ratio};">
  </video>

  <div class:opacity-0={playing && !waiting} 
  class="z-20 pointer-events-none absolute bg-black/50 inset-0 transition-opacity">

  </div>


  <div
  class:opacity-0={!show_controls && playing}
  class="z-20 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity">
    <svg
      class="w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      width="32" height="32" viewBox="0 0 32 32" fill="none">
        {#if playing}
        <rect x="5" y="3" width="8" height="26" fill="white"/>
        <rect x="20" y="3" width="8" height="26" fill="white"/>
        {:else}
        <path d="M27 16.5L5 3V30L27 16.5Z" fill="white"/>
        {/if}
      </svg>
  </div>

  {#if ready}
    <div class="pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <svg class:opacity-0={!waiting} class="spinner transition-opacity" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke="white" stroke-width="4"></circle>
    </svg>
    </div>
  {/if}

  <div on:click={seekTrack}
  class:translate-y-3={!show_controls && playing}
  class="absolute bottom-0 w-full bg-black/90 h-4 transition-all">
    <div style="width:{time_percent * 100.0}%" class="pointer-events-none	bg-accent h-full transition-all">
    </div>
  </div>
</div>

<style>

video{
  display: inline-block;
  width: 100%;
  height: auto;
  opacity: 0.0;
}

#track{

}

.appear{
  animation: appear 0.25s ease-in forwards;
}

@keyframes appear {
  0%{
    opacity: 0.0;
  }
  100%{
    opacity: 1.0;
  }
}



:global(.spinner) {
  animation: rotate 2s linear infinite;
  @apply w-16 h-16;
}

:global(.path) {
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}


</style>
