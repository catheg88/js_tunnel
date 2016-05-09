var Ship = require("./ship");

var GameView = function (game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.ship = new Ship();
};

GameView.MOVES = {
  "left": [ 0, -1],// need to change to move left and right
  "right": [-1,  0]// need to change to move left and right
};

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  this.lastTime = 0;
  //start the animation
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.bindKeyHandlers = function () {
  var ship = this.ship;

  Object.keys(GameView.MOVES).forEach(function (k) {
    var move = GameView.MOVES[k];
    key(k, function () { ship.move(move); });
  });
};

GameView.prototype.animate = function(time){
  var timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  // this.game.draw(this.ctx);
  this.lastTime = time;

  //every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};




module.exports = GameView;
