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
  if (distsq < rsq) return true;
  else return false;
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
        console.log(i);
        alert("Icon Number: " + i);
        return res.push(i);
      } else {
        res.push(-1);
      }
      let resTest = res.every((item) => {
        item === -1;
      });
      alert(resTest);
    });
    ctx.stroke();
  });
};

let t0 = 0;
let rr = 0;
let a = 0;
const PI2 = Math.PI * 2;
const loop = function () {
  rr = Math.abs(Math.cos(a) * r);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // const p1 = { x: 100, y: 50 };
  // const p2 = { x: 200, y: 100 };
  // const p3 = { x: 100, y: 100 };
  // A = [100, 200, 100], B = [50, 100, 100]
  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
};

loop();
