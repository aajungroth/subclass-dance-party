var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  //this.oldStep = makeBlinkyDancer.prototype.step;
  //this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  //this.oldStep();
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  /*setTimeout(function() {
    this.step.call(this);
  }, this.timeBetweenSteps);
*/
  //this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //debugger;
  this.$node.toggle();
};

makeDancer.prototype.lineUp = function() {
  this.party = true;

  this.$node.animate({
    top: 100,
    left: this.styleSettings.left
  }, (Math.random() * 2000) + 500);
};
