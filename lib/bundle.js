/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(2);
	var GameView = __webpack_require__(3);
	
	document.addEventListener("DOMContentLoaded", function(){
	  var canvasEl = document.getElementsByTagName("canvas")[0];
	  canvasEl.width = Game.DIM_X;
	  canvasEl.height = Game.DIM_Y;
	
	  var ctx = canvasEl.getContext("2d");
	  var game = new Game(); // makes game and ship
	  new GameView(game, ctx).start(); // 
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	  console.log(move);
	  // debugger;
	
	  // var moveVal = move[k];
	
	  // if () {
	  //
	  // }
	  this.pos[0] = this.pos[0] + move[0];
	  this.pos[1] = this.pos[1] + move[1];
	
	};
	
	module.exports = Ship;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(1);
	
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(1);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map