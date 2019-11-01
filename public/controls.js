var keys = {};
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

function move() { //WASD 87 65 83 68
  if (keys[87] == true){
    camera.position.y += 1;
  }
  if (keys[65] == true){
    camera.position.x -= 1;
  }
  if (keys[83] == true){
    camera.position.y -= 1;
  }
  if (keys[68] == true){
    camera.position.x += 1;
  }
  if (keys[32] == true){ //s Spacebar
    if (camera.position.z <= 1){
      camera.position.z+=3;
    }
  }
  
}
