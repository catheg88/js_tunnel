var Ship = function() {
  console.log("making new ship");
  this.pos = [200, 372];
};

Ship.prototype.draw = function (ctx) {
  console.log("drawing ship");
  ctx.fillStyle = "#FF0000";

  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], 20, 0, 2 * Math.PI, true
  );
  ctx.fill();

};

Ship.prototype.move = function(move) {
  console.log("moving");
  // console.log(move);

  // var moveVal = move[k];

  // if () {
  //
  // }
  this.pos[0] = this.pos[0] + move[0];
  this.pos[1] = this.pos[1] + move[1];
  console.log(this.pos);
  debugger;

};

module.exports = Ship;
