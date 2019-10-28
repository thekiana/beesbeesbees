var Grub = function(value) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  return `eats ${this.food}`
};