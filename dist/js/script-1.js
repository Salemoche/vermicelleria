let x = [],
    y = [],
    segNum = 2,
    segLength = 10,
    posY,
    posX,
    mousePosX = 500;
mousePosY = 500;

for (let i = 0; i < segNum; i++) {
  x[i] = mousePosX;
  y[i] = 0;
}

setInterval(function () {
  x[segNum] = mousePosX;
  y[segNum] = 0;
  segNum++;
}, 200);

function setup() {
  posY = -50;
  posX = mouseX;
  createCanvas(windowWidth, windowHeight);
  strokeWeight(9);
  stroke(181, 139, 101);
}

function draw() {
  background(0);
  posY++;
  posX = windowWidth / 2; // posY = mouseY;

  dragSegment(0, posX, posY, 1);

  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i], 0);
  }

  mousePosX = mouseX;
  mousePosY = mouseY; // posX = mouseX;
}

function dragSegment(i, xin, yin, wurst) {
  // xin = xin + wurst * 100;
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
  segment(x[i] + 30, y[i], angle);
  segment(x[i] + 40, y[i], angle);
  segment(x[i] - 20, y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}