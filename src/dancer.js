// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {
    top: top,
    left: left
  };
  this.step();
  this.setPosition(top, left);
  this.party = false;
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.styleSettings.top = top;
  this.styleSettings.left = left;
  this.$node.css(this.styleSettings);
};

//dancer.step();

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//dancer.setPosition(top, left);

makeDancer.prototype.lineUp = function() {
  this.$node.animate({
    top: 100,
    left: this.styleSettings.left
  }, (Math.random() * 2000) + 500);
};
