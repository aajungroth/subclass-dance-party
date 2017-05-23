var makeLittleBigDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  this.small = true;
  this.height = this.$node.height();
  this.width = this.$node.width();
};

makeLittleBigDancer.prototype = Object.create(makeDancer.prototype);
makeLittleBigDancer.prototype.constructor = makeLittleBigDancer;

makeLittleBigDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //updates the properties of the dancer based on its current size
  if (this.small === true) {
    this.height += 5;
    this.width += 5;
    this.small = false;
  } else {
    this.height -= 5;
    this.width -= 5;
    this.small = true;
  }
  //height() and width() together change the size of the node
  this.$node.height(this.height);
  this.$node.width(this.width);
};