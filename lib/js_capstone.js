var Game = require("./game");
var GameView = require("./gameView");

document.addEventListener("DOMContentLoaded", function(){
  var canvasEl = document.getElementsByTagName("canvas")[0];
  // canvasEl.width = Game.DIM_X;
  canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;
  canvasEl.height = Game.DIM_Y;

  var ctx = canvasEl.getContext("2d");
  var game = new Game();
  new GameView(game, ctx).start();
});

// var ss_ent = new Ship();
// debugger
//
// ctx.fillStyle = "#FF0000";
//
// ctx.beginPath();
// ctx.arc(
//   ss_ent.pos[0], ss_ent.pos[1], 15, 0, 2 * Math.PI, true
// );
// ctx.fill();
