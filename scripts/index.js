var ctx;
var radio = 20;
var bolax = 50;
var bolay = 100;
var dx = 4;
var dy = 4;
var canvas;
var ancho;
var algo;
var limitederecha;
var limiteizquierda;
var limteArriba;
var limiteAbajo;
var nbolax = 130;
var nbolay = 0;

const Button = document.querySelector("#button");
const Title = document.querySelector("#title");
canvas = document.querySelector("Canvas");
canvas.setAttribute("style", "display: none;");
Title.setAttribute("style", "display: none;");

Button.addEventListener("click", () => {
  canvas.setAttribute("style", "display: flex;");
  Button.setAttribute("style", "display: none;");
  Title.setAttribute("style", "display: flex;");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = radio;
      ctx.fillStyle = "blue";
      acho = canvas.width;
      alto = canvas.height;

      limitederecha = acho - radio;
      limiteizquierda = radio;
      limteArriba = radio;
      limiteAbajo = alto - radio;

      moverBola();
      setInterval(moverBola, 60);

      moverMouse();
    } else {
      alert("erro al crear el canvas");
    }
  }
});

function moverBola() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  verificaLimites();
  ctx.beginPath();
  ctx.arc(bolax, bolay, radio, 0, 2 * Math.PI, true);
  ctx.fill();
}

function verificaLimites() {
  nbolax = nbolax + dx;
  nbolay = nbolay + dy;

  if (nbolax > limitederecha) {
    dx *= -1;
    nbolax = limitederecha;
  }
  if (nbolax < limiteizquierda) {
    dx *= -1;
    nbolax = limiteizquierda;
  }

  if (nbolay > limiteAbajo) {
    dy *= -1;
    nbolay = limiteAbajo;
  }
  if (nbolay < limteArriba) {
    dy *= -1;
    nbolay = limteArriba;
  }

  ctx.fillText("dx " + dx + "nbolax" + nbolax, 10, 10);
  bolax = nbolax;
  bolay = nbolay;
}
function moverMouse() {
  canvas.onmousemove = function(e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    //nbolax=x;
    //nbolay=y;
    //var div = document.getElementById("coords");
    var div = document.querySelector("#coords");

    div.innerHTML = "x: " + x + " y: " + y;
  };
}
