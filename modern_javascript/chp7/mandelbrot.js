window.onload = function _win_onload(){
  let canvas = document.getElementById('my_canvas');
  let ctx = canvas.getContext('2d');

  let canvas_to_axis = function _canvas_to_axis(ctx, i, j) {
    let h = ctx.canvas.height;
    let w = ctx.canvas.width;

    let x = (i - (w/2)) * (4/w);
    let y = (j - (h/2)) * (4/h);

    return [x, y];
  }

  let is_mandel = function _is_mandel(x, y, maxit) {
    let a = 0;
    let b = 0;
    for(var i = 0; i < maxit; i++) {
      let a2 = a*a - b*b + x;
      let b2 = 2*a*b + y;

      if(a2*a2 + b2*b2 > 4) return false;

      a = a2;
      b = b2;
    }

    return true;
  }

  let draw_canvas = function _draw_canvas(ctx) {
    let h = ctx.canvas.height;
    let w = ctx.canvas.width;

    for(var i = 0; i < w; i++)
      for(var j = 0; j < h; j++) {
        const [x, y] = canvas_to_axis(ctx, i, j);
        if(is_mandel(x, y, 10))
          ctx.fillRect(i, j, 1, 1);
      }
  }

  draw_canvas(ctx);
}