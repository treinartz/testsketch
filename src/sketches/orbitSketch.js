export default function orbitSketch(p) {
  // --- Orbit state ---
  let orbit1 = {
    angle: 270,
    radius: 100,
    speed: 1.5,
    min: 265,
    max: 360,
  };

  let orbit2 = {
    angle: 70,
    radius: 100,
    speed: 0.5,
    min: 0,
    max: 360,
  };

  p.setup = () => {
    p.createCanvas(500, 500);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(220);

    drawStatic();
    drawOrbit(210, 300, orbit1, true);
    drawOrbit(110, 200, orbit2, false);
    drawMisc();
  };

  function drawStatic() {
    p.push();
    p.translate(p.width / 2, p.height / 2);

    p.fill(255);
    p.ellipse(10, -50, 100, 100);
    p.line(-100, 100, 100, 100);
    p.line(60, 100, 50, -100);

    p.fill(255, 0, 0);
    p.ellipse(0, -50, 10, 10);
    p.line(0, -50, 100, -50);

    p.pop();
  }

  function drawOrbit(tx, ty, orbit, useEllipse = true) {
    p.push();
    p.translate(tx, ty);

    p.noFill();
    p.ellipse(0, 0, orbit.radius * 2);

    p.fill(0, 0, 255);
    p.ellipse(0, 0, 10, 10);

    const x = p.cos(orbit.angle) * orbit.radius;
    const y = p.sin(orbit.angle) * orbit.radius;

    if (useEllipse) {
      p.ellipse(x, y, 10, 10);
    } else {
      p.strokeWeight(5);
      p.point(x, y);
    }

    p.line(0, 0, x, y);

    if (orbit.angle >= orbit.max || orbit.angle <= orbit.min) {
      orbit.speed *= -1;
    }

    orbit.angle += orbit.speed;

    p.pop();
  }

  function drawMisc() {
    p.push();
    p.translate(-40, -50);
    p.line(0, 0, -50, -50);
    p.line(0, 0, -50, 20);
    p.pop();

    p.push();
    p.translate(10, 0);
    p.line(200, 300, 200, 50);
    p.line(50, 100, 300, 100);
    p.pop();
  }
}