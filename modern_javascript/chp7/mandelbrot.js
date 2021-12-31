window.onload = function _win_onload() {
  let canvas = document.getElementById('mycanvas');
  let field_cx = document.getElementById('field_cx');
  let field_cy = document.getElementById('field_cy');
  let field_mag = document.getElementById('field_mag');
  let field_maxit = document.getElementById('field_maxit');
  let btn_draw = document.getElementById('btn_draw');

  let ctx = canvas.getContext('2d');
  let width = canvas.width;
  let height = canvas.height;
  let cx = parseFloat(field_cx.innerHTML);
  let cy = parseFloat(field_cy.innerHTML);
  let mag = parseFloat(field_mag.value);
  let maxit = parseFloat(field_maxit.value);


  function canvas_to_axis(ctx, cx, cy, i, j, mag) {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    let x = cx + ((i - width/2) * (4/width))/mag;
    let y = cy + ((j - height/2) * (4/width))/mag;

    return [x, y];
  }

  function is_mandel(x, y, maxit) {
    let a = x, b = y;
    let a2 = a*a, b2 = b*b;

    let count = 255;
    for(let i = 0; i < maxit; i++, count--) {
      if(a2 + b2 > 4) return count;

      b = 2*a*b + y; a = a2 - b2 + x;
      a2 = a*a; b2 = b*b;
    }
    
    return -1;
  }

  function draw_mandel(ctx, cx, cy, maxit, mag) {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    for(let i = 0; i < width; i++) {
      for(let j = 0; j < height; j++) {
        const [x, y] = canvas_to_axis(ctx, cx, cy, i, j, mag);
        const mandel_cnt = is_mandel(x, y, maxit);

        ctx.fillStyle = mandel_cnt === -1 ? "black" : "rgb(255, " + mandel_cnt + ", 255)";
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }

  function update_axis_element(cx, cy) {
    field_cx.innerHTML = cx.toFixed(3);
    field_cy.innerHTML = cy.toFixed(3);
  }

  // Main
  // 1. Default Figure
  update_axis_element(cx, cy);
  draw_mandel(ctx, cx, cy, maxit, mag);

  // 2. When Figure is Clicked
  canvas.onclick = function(event) {
    let mag = parseFloat(field_mag.value);
    let maxit = parseFloat(field_maxit.value);

    let click_x = event.offsetX;
    let click_y = event.offsetY;

    cx += ((click_x - width/2) * (4/width))/mag;
    cy += ((click_y - height/2) * (4/width))/mag;

    update_axis_element(cx, cy);
    draw_mandel(ctx, cx, cy, maxit, mag);
  }

  // 3. When Button is Clicked
  btn_draw.onclick = function() {
    let mag = parseFloat(field_mag.value);
    let maxit = parseFloat(field_maxit.value);

    draw_mandel(ctx, cx, cy, maxit, mag);
  }
}