const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// let controlOut = document.getElementById("radius-output");
// let control = document.getElementById("radius");
// control.oninput = () => {
//   controlOut.textContent = r = control.value;
// };

const mouse = { x: 0, y: 0 };

let r = 20; // Radius
const p1 = { x: 100, y: 50 };
const p2 = { x: 200, y: 100 };
const p3 = { x: 100, y: 100 };
let res = [];

const labelPoint = function (p, offset, i = 0) {
  const { x, y } = offset;
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
};

const drawPoints = function (points) {
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    labelPoint(p, { x: 20, y: -15 }, i);
  }
};
function pointInCircle(x, y, cx, cy, radius) {
  var dx = x - cx,
    dy = y - cy;
  var distsq = dx * dx + dy * dy,
    rsq = radius * radius;

  return distsq < rsq;
}
// Draw arc
const drawArc = function ([p0, p1, p2], r) {
  let arr = [p0, p1, p2];
  arr.forEach((coor, i) => {
    ctx.beginPath();
    ctx.arc(coor.x, coor.y, r, 0, 2 * Math.PI);
    window.addEventListener("click", (e) => {
      let x = e.pageX - canvas.getBoundingClientRect().left;
      let y = e.pageY - canvas.getBoundingClientRect().top;
      let test = pointInCircle(x, y, coor.x, coor.y, r);
      res = [];
      if (test) {
        res.push(i);
        console.log(i);
      } else {
        res.push(-1);
      }
      //   for (let i = 0; i <= res.length - 1; i++) {
      //     if (res[i] !== -1) console.log(res[i]);
      //   }
    });
    ctx.stroke();
  });

  //   ctx.beginPath();
  //   ctx.moveTo(p0.x, p0.y);
  //   ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  //   ctx.lineTo(p2.x, p2.y);
  //   ctx.stroke();
};

let t0 = 0;
let rr = 0; // the radius that changes over time
let a = 0; // angle
const PI2 = Math.PI * 2;
const loop = function (t) {
  t0 = t / 1000;
  a = t0 % PI2;
  rr = Math.abs(Math.cos(a) * r);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
};

loop(0);
