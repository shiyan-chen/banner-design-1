/*
 * @name Wavemaker
 * @description This illustrates how waves (like water waves) emerge
 * from particles oscillating in place. Move your mouse to direct the wave.
 * Contributed by Aatish Bhatia, inspired by <a href="https://beesandbombs.tumblr.com/post/45513650541/orbiters">Orbiters</a> by Dave Whyte.
 */

let t = 0; // time variable
let dist = 30;
let radius = 30
let stroke = 10;

window.addEventListener("resize", () => {
  setup();
});

function setup() {
  var [height, width] = [window.innerHeight, window.innerWidth];
  if (height + width > 1500) {
    dist = radius = (height + width) /102;
  } else {
    dist = radius = (height + width) /61;
    height += 100;
  }
  stroke = dist / 3;

  canv = createCanvas(width, height);
  canv.style("z-index: -3");
  canv.position(0, 0);
  background(20);
  noStroke();
  // fill(40 200 40); // green
  // fill(40, 40, 230); // blue
  fill(100, 30, 230); // purple
}

function draw() {
  background(0, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + dist) {
    for (let y = 0; y <= height; y = y + dist) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + radius * cos(2 * PI * t + angle);
      const myY = y + radius * sin(2 * PI * t + angle);

      ellipse(myX, myY, stroke); // draw particle
    }
  }

  t = t + 0.004; // update time
}
