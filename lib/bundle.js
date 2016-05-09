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


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Ship = function() {
	  this.pos = [250, 475];
	};
	
	module.exports = Ship;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(1);
	
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Ship = __webpack_require__(1);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map