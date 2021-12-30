window.onload = function () {
  let canvas = document.getElementById("my_canvas");
  let ctx = canvas.getContext('2d');

  let get_points = function _get_points(x, y, r, n) {
    let rad = ((360 / n) / 180) * Math.PI;

    let pnts = {x: [], y: []};
    for(i = 0; i < n; i++) {
      pnts.x.push(x + r*Math.cos(rad*i));
      pnts.y.push(y + r*Math.sin(rad*i));
    }

    return pnts;
  }

  let approximate_circle = function _approximate_circle(x, y, r, n, ctx) {
    let pnts = get_points(x, y, r, n);

    ctx.beginPath();

    for(i = 0; i < n; i++) {
      ctx.moveTo(pnts.x[i], pnts.y[i]);
      for(j = 0; j < n; j++) {
        ctx.lineTo(pnts.x[j], pnts.y[j]);
        ctx.moveTo(pnts.x[i], pnts.y[i]);
      }
    }

    ctx.closePath();
    ctx.stroke();
  }

  approximate_circle(640, 512, 400, 32, ctx);
}