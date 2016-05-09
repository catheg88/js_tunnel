var Ship = require("./ship.js");

var Game = function () {

  Game.prototype.step = function (delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  };

  Game.prototype.checkCollisions = function() {

  };

  Game.prototype.moveObjects = function (delta) {
  // this.allObjects().forEach(function (object) {
  //   object.move(delta);
  // });
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

};

module.exports = Game;
