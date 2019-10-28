var HoneyMakerBee = function (value) {
  Bee.call(this, value);
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(value) {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(value) {
  this.honeyPot--;
};

