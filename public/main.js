const socket = io();

let id;
socket.on('id', i => (id = i));

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Floor
grassTex = THREE.ImageUtils.loadTexture('images/grass.png'); grassTex.wrapS = THREE.RepeatWrapping; grassTex.wrapT = THREE.RepeatWrapping; grassTex.repeat.x = 256; grassTex.repeat.y = 256; var groundMat = new THREE.MeshBasicMaterial({map:grassTex}); 

var groundGeo = new THREE.PlaneGeometry(400,400); 
var ground = new THREE.Mesh(groundGeo,groundMat);
ground.position.z = -1;

// Add cube to Scene
scene.add( cube );
scene.add( ground );

//Tests
camera.rotation.x=1
var scale = 0.5;
var x = 1;
var mouseX = 0;
var mouseY = 0;
document.addEventListener( "mousemove", mouseMove, false );
function mouseMove( event ) {
    mouseX = - ( event.clientX / renderer.domElement.clientWidth ) * 2 + 1;
    mouseY = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
    camera.rotation.x = mouseY / scale - mouseX/scale*x;
    camera.rotation.y = mouseX / scale;

}

// Render Loop
var render = function () {
  move();
  if (camera.position.z>1){
      camera.position.z-=0.1
    }
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
  rendererStats.update(renderer); stats.update(); // These call stats.js
};

render();