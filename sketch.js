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

let currX = 0;
let currY = 0;
let lastX = 0;
let lastY = 0;
let degree = 4;
let speed = 0;
let newSpeed = 0;

function draw() {
  background(0, 10); // translucent background (creates trails)

  speed = abs(mouseX - lastX) + abs(mouseY - lastY)
  newSpeed = lerp(speed, newSpeed, 0.1)

  lastX = mouseX;
  lastY = mouseY;

  currX = lerp(currX, mouseX, 1);
  currY = lerp(currY, mouseY, 1);


  // stroke = map(newSpeed, 0, 200, 10, 0);


  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + dist) {
    for (let y = 0; y <= height; y = y + dist) {

      // starting point of each circle depends on mouse position
      const xAngle = map(currX, 0, width, - degree * PI, degree * PI, true);
      const yAngle = map(currY, 0, height, - degree * PI, degree * PI, true);

      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + radius * cos(2 * PI * t + angle);
      const myY = y + radius * sin(2 * PI * t + angle);

      fill(100 + angle * 10, 30, 180 - angle * 10);


      ellipse(myX, myY, stroke); // draw particle

    }
  }

  t = t + 0.005; // update time
}
