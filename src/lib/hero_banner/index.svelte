<script>
import { PerspectiveCamera, Vector3, Clock, AnimationMixer, Fog, Scene, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMount } from 'svelte';

let container = undefined;
let camera, scene, renderer;

let mixer;

let ready = false;

const clock = new Clock();

const loader = new GLTFLoader();

let meshes = [];

let root = undefined;
let center = new Vector3(0, 0.5, 0);
let camera_origin = new Vector3(0, 1.0, 6.5);


onMount(()=>{
  scene = new Scene();
  scene.fog = new Fog( 0x1C221F, 10, 30 );

  let basic_material = new MeshBasicMaterial({
    color: 0x1C221F,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });

  let material = new MeshBasicMaterial({
    color: 0x3CDB4C,
    wireframe: true,
  });

  loader.load(
      './scene.glb',
      ( gltf ) => {
          ready = true;
          camera = new PerspectiveCamera(55, 1.0, 0.1, 1000);

          gltf.scene.traverse( function( child ) {
            if(child.name == "base") root = child;
            if(child.type == "Mesh" || child.type == "SkinnedMesh"){
              meshes.push(child);
            }
          });

          scene.add( gltf.scene );

          
          meshes.forEach(mesh=>{
            mesh.material = basic_material;
            let clone = mesh.clone(false);
            clone.position.set(0,0,0)
            clone.rotation.set(0,0,0)
            clone.material = material;
            mesh.add( clone );
          });

          mixer = new AnimationMixer( gltf.scene );
          gltf.animations.forEach(animation=>{
            mixer.clipAction( animation ).play();
          });

          resize();
          set_camera(0,0);
          container.appendChild(renderer.domElement);
          animate();
          root.position.y = -0.5;
      },
      ( xhr ) => {
          // xhr.loaded / xhr.total * 100
      },
      ( error ) => {
          // called when loading has errors
      },
  );

  renderer = new WebGLRenderer({
    antialias: false,
    alpha: true
  });
});

function resize(){

  let width = container.clientWidth * window.devicePixelRatio,
    height = container.clientHeight * window.devicePixelRatio;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height);
  set_camera(0,0);
}


function animate( time ) {
  const delta = clock.getDelta();
  mixer.update( delta );
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}

function pointermove(e){
  if(root == undefined) return;
  set_camera(
      ((e.clientX / window.innerWidth) - .5) ,
      ((e.clientY / window.innerHeight) - .5)
    );
}

function set_camera(x,y){
  let offset_x = (container.clientWidth <= 768) ? 0 : 2.0;

  root.position.x = offset_x;
  root.rotation.x = y * 0.2;
  root.rotation.y = x * 0.2;
  camera.position.x = camera_origin.x;
  camera.position.y = camera_origin.y;
  camera.position.z = camera_origin.z;
  camera.lookAt(center);
}

</script>

<svelte:window on:resize={resize} on:pointermove={pointermove}/>

<div class:pika={!ready} class="boo" id="container" bind:this={container} >

</div>

<style>

.pika{
  @apply opacity-0;
}

.boo {
  @apply opacity-100 transition-opacity;
}

#container{
  @apply
  h-[40vh]
  md:absolute md:inset-0 md:h-full;
  z-index: -1;
}

:global(canvas){
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
  display: none;
}

</style>
