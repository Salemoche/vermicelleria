if(window.innerWidth > 768) {
  
  let x = [],
    y = [],
    segNum = 1,
    segLength = 25,
    posY,
    posX,
    mousePosX = 500,
    mousePosY = 0,
    squirt = true,
    produce = true,
    random1 = Math.random() * 2 - 1,
    random2 = Math.random() * 2 - 1,
    random3 = Math.random() * 2 - 1,
    random4 = Math.random() * 2 - 1;

  for (let i = 0; i < segNum; i++) {
    x[i] = mousePosX;
    y[i] = 180;
  }

  setTimeout(()=> {

    var handle = setInterval(function() {
      if(squirt && produce && segNum <= 50) {
        x[segNum] = x[segNum - 1];
        y[segNum] = y[segNum - 1] + 200;
        segNum ++;
      } else {
        // produce = false;
      }
      console.log(segNum);

      if(segNum >= 50) {
        clearInterval(handle);
      }
      handle = 0;

    }, 240);
  }, 7000);

  function setup() {
    posY = 50;
    posX = mouseX;
    createCanvas(windowWidth, windowHeight);
    strokeWeight(2);
    stroke(230, 103, 46);
  }

  function draw() {
      background(255);
      posY += 3;
      posX = windowWidth/2;
      // posY = mouseY;
      dragSegment(0, mouseX, 50, 1);
      for (let i = 0; i < x.length - 1; i++) {
          dragSegment(i + 1, x[i], y[i]);
      }
      mousePosX = mouseX;
      mousePosY = mouseY;
      // posX = mouseX;
  }

  function dragSegment(i, xin, yin) {
      const dx = xin - x[i];
      const dy = yin - y[i];
      const angle = atan2(dy, dx);
      x[i] = xin - cos(angle) * segLength;
      y[i] = yin - sin(angle) * segLength + (segLength * 0.1);
      segment(x[i]- 48.75 + (random1*10), y[i]+(random2*10), angle);
      segment(x[i]- 16.25 + (random2*10), y[i]+(random3*10), angle);
      segment(x[i]+ 16.25 + (random3*10), y[i]+(random4*10), angle);
      segment(x[i]+ 48.75 + (random4*10), y[i]+(random1*10), angle);
      // segment(x[i] - 60, y[i]+5, angle);
      // segment(x[i] + 25, y[i]-3, angle);
  }

  function segment(x, y, a) {
      push();
        translate(x, y);
        rotate(a);
        // line(0, -3, segLength, -3);
        // line(0, 3, segLength, 3);
        // line(0, -3, 0, 3);
        // strokeWeight(5);
        // point(segLength, 5)
        // strokeWeight(1);
        beginShape();
        fill(255)
        curveVertex(segLength+6, 6);
        curveVertex(segLength, 6);
        curveVertex(-3, 6);
        curveVertex(-3, -6);
        curveVertex(segLength, -6);
        curveVertex(segLength+6, -6);
        endShape();
        // arc(-segLength,0, 10, 10, HALF_PI, 0);
        
      pop();
  }

  window.addEventListener('click', () => {
    if(produce) {
      squirt = !squirt;
      document.getElementById('vermicelle-presse').classList.toggle("off");
    }
  })

  window.addEventListener('mousemove', (e) => {
    document.getElementById('vermicelle-presse').style.left = e.clientX + 'px';
  })
}

// window.addEventListener('resize', () => {
//   if(window.innerWidth <375) {
//     noLoop();
//   }
// })