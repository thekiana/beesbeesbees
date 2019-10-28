var RetiredForagerBee = function(value) {
  ForagerBee.call(this, value);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.treasureChest = [];
};

RetiredForagerBee.prototype.eat = function(value) {

};

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}

RetiredForagerBee.prototype(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;