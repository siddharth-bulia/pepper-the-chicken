function click(event) {
  if (currentState == states.start) {
      currentState = states.playing;
      sounds.start.play();
  }
  else if (currentState == states.lost && block.y >= 2 * HEIGHT) {
      currentState = states.start;
      obstacles.clean();
      block.reset();
  }
}

function keyUp(event) {
  if (event.keyCode == 38 || event.keyCode == 87 && currentState == states.playing) {
      block.jump();
      sounds.jump.play();
  }
  click();
}

function touch(event) {
  block.jump();
  sounds.jump.play();
  click();
}