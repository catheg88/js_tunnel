var Ship = require("./ship.js");

var Game = function () {
  console.log("making new game");
  // this.obstacles = [];
  this.ship = new Ship();
};

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.BG_COLOR = "#662200";

// Game.prototype.step = function (delta) {
//   this.moveObjects(delta);
//   this.checkCollisions();
// };

Game.prototype.checkCollisions = function() {  // rework - check to see that it hasn't hit wall

};

// Game.prototype.moveObjects = function (delta) {
//   this.allObjects().forEach(function (object) {
//     object.move(delta);
//   });
// };

// Game.prototype.allObjects = function () {
//   return [].concat(this.ships, this.asteroids, this.bullets);
// };

Game.prototype.draw = function (ctx) {
  console.log("drawing");
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);


  this.ship.draw(ctx);

  // this.allObjects().forEach(function (object) {
  //   object.draw(ctx);
  // });
};

module.exports = Game;
