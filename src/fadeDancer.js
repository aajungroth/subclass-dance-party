var makefadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  //this.oldStep = makeBlinkyDancer.prototype.step;
  //this.step();
  this.$node.css({
    'border-color': 'blue',
    borderWidth: 100,
    borderRadius: 100
  });

  this.$node.text('BOSS');

  $("body").css({"background-image": "url(\"http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200\")"});
};

makefadeDancer.prototype = Object.create(makeDancer.prototype);
makefadeDancer.prototype.constructor = makefadeDancer;

makefadeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  //this.oldStep();
  if(this.life === 0) {
    this.$node.remove();
  } else if (!this.party) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  /*setTimeout(function() {
    this.step.call(this);
  }, this.timeBetweenSteps);
*/
  //this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //debugger;

  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};

makefadeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.styleSettings.top = top;
  this.styleSettings.left = left;

  this.$node.animate({
    top: this.styleSettings.top,
    left: this.styleSettings.left
  }, (Math.random() * 6000) + 5000);
};
