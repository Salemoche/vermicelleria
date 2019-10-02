if (window.innerWidth > 768) {
  let x = [],
      y = [],
      segNum = 2,
      segLength = 5,
      posY,
      posX,
      mousePosX = 500,
      mousePosY = 0,
      squirt = true;

  for (let i = 0; i < segNum; i++) {
    x[i] = mousePosX;
    y[i] = 50;
  }

  setInterval(function () {
    if (squirt) {
      x[segNum] = x[segNum - 1];
      y[segNum] = y[segNum - 1] + 100;
      segNum++;
    }

    console.log(segNum);
  }, 480);

  function setup() {
    posY = 50;
    posX = mouseX;
    createCanvas(windowWidth, windowHeight);
    strokeWeight(2);
    stroke(58, 53, 131);
  }

  function draw() {
    background(255);
    posY++;
    posX = windowWidth / 2; // posY = mouseY;

    dragSegment(0, mouseX, 50, 1);

    for (let i = 0; i < x.length - 1; i++) {
      dragSegment(i + 1, x[i], y[i]);
    }

    mousePosX = mouseX;
    mousePosY = mouseY; // posX = mouseX;
  }

  function dragSegment(i, xin, yin) {
    const dx = xin - x[i];
    const dy = yin - y[i];
    const angle = atan2(dy, dx);
    x[i] = xin - cos(angle) * segLength;
    y[i] = yin - sin(angle) * segLength + segLength * 0.1;
    segment(x[i], y[i] - 8, angle); // segment(x[i] + 30, y[i]-1, angle);

    segment(x[i] + 80, y[i], angle);
    segment(x[i] - 30, y[i] - 15, angle);
    segment(x[i] - 60, y[i] + 5, angle);
    segment(x[i] + 25, y[i] - 3, angle);
  }

  function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a); // line(0, -3, segLength, -3);
    // line(0, 3, segLength, 3);
    // line(0, -3, 0, 3);
    // strokeWeight(5);
    // point(segLength, 5)
    // strokeWeight(1);

    beginShape();
    fill(255);
    curveVertex(segLength + 5, 5);
    curveVertex(segLength, 5);
    curveVertex(-3, 5);
    curveVertex(-3, -5);
    curveVertex(segLength, -5);
    curveVertex(segLength + 5, -5);
    endShape(); // arc(-segLength,0, 10, 10, HALF_PI, 0);

    pop();
  }

  window.addEventListener('click', () => {
    squirt = !squirt;
    document.getElementById('vermicelle-presse').classList.toggle("off");
  });
  window.addEventListener('mousemove', e => {
    document.getElementById('vermicelle-presse').style.left = e.clientX + 'px';
  });
} // window.addEventListener('resize', () => {
//   if(window.innerWidth <375) {
//     noLoop();
//   }
// })