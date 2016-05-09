var Ship = require("./ship");

var GameView = function (game, ctx) {
  console.log("making new gameView");
  this.game = game;
  this.ctx = ctx;
};

GameView.MOVES = {
  "left": [-86, 0],
  "right": [86, 0],
  "up": [0, -86],
  "down": [0, 86]
};

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  this.lastTime = 0;
  //start the animation
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.bindKeyHandlers = function () {
  console.log("binding key handlers");
  var ship = this.game.ship;

  Object.keys(GameView.MOVES).forEach(function (k) {
    var move = GameView.MOVES[k];
    key(k, function () { ship.move(move); });
  });
};

GameView.prototype.animate = function(time){
  console.log("requestAnimationFrame // animate");
  // var timeDelta = time - this.lastTime;
  //
  // this.game.step(timeDelta);
  this.game.draw(this.ctx);
  // this.lastTime = time;



  requestAnimationFrame(this.animate.bind(this));
};




module.exports = GameView;
