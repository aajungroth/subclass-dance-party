var makesoldierDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  //this.oldStep = makeBlinkyDancer.prototype.step;
  //this.step();
  //this.$node.text('S');
  this.currentBoss = null;
};

makesoldierDancer.prototype = Object.create(makeDancer.prototype);
makesoldierDancer.prototype.constructor = makesoldierDancer;

makesoldierDancer.prototype.step = function() {
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

  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());

  if(this.checkBoss()){
    this.$node.css({
      'border-color': 'red'
    });

    this.$node.text(this.currentBoss.styleSettings.left + ':' + this.currentBoss.styleSettings.top);

  } else {
    this.$node.css({
      'border-color': 'yellow'
    });
  }

};

makesoldierDancer.prototype.setPosition = function(top, left) {

  this.styleSettings.top = top;
  this.styleSettings.left = left;

  this.$node.animate({
    top: this.styleSettings.top,
    left: this.styleSettings.left
  }, (Math.random() * 2000) + 500);
};

makesoldierDancer.prototype.shootBoss = function() {
  //debugger;
  return false;
};

makesoldierDancer.prototype.checkBoss = function() {
  //debugger;
  for(var i=0; i<window.dancers.length; i++ ){
    if(window.dancers[i].constructor.name === "makefadeDancer"){
      this.currentBoss = window.dancers[i];
      return true;
    }
  }

  return false;
};
