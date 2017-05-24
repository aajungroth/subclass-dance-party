var makeSmileyDancer = function(top, left, timeBetweenSteps) {
  makeLittleBigDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="https://vignette1.wikia.nocookie.net/awesome-face/images/5/5f/Rnbw_awesome_face.gif/revision/latest/scale-to-width-down/480?cb=20130303012342" width="100" height="100" class="dancer smiley">');
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {
    //'border-color': '#FF69B4',
    'border-color': 'transparent',
    top: top,
    left: left
  };
  this.sizeDifference = 100;
  this.setPosition(top, left);
};

makeSmileyDancer.prototype = Object.create(makeLittleBigDancer.prototype);
makeSmileyDancer.prototype.constructor = makeSmileyDancer;

makeSmileyDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.styleSettings.top = top;
  this.styleSettings.left = left;
  this.$node.css(this.styleSettings);
};
