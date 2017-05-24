var makesoldierDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  //this.originalTimeBetweenSteps = timeBetweenSteps;
  //this.oldStep = makeBlinkyDancer.prototype.step;
  //this.step();
  //this.$node.text('S');
  this.$bullet = $('<img src="http://rs651.pbsrc.com/albums/uu236/416o/explosion.gif~c200" width="10" height="10" class="soldier explosion">');
};

makesoldierDancer.prototype = Object.create(makeDancer.prototype);
makesoldierDancer.prototype.constructor = makesoldierDancer;

makesoldierDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  //this.oldStep();
  if (!this.party) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);

    this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());

  } else {
    this.$node.clearQueue();
    this.$node.animate({
      top: this.styleSettings.top,
      left: '80%'
    }, (Math.random() * 1000) + 500);

    setTimeout(this.step.bind(this), 1000);
  }

  if(this.checkBoss()){
    this.$node.css({
      'border-color': 'red',
      borderWidth: 50,
      borderRadius: 50
    });

    // this.$node.text(window.dancers[this.bossIndex].styleSettings.left + ':' + window.dancers[this.bossIndex].styleSettings.top);
    if(!this.party) {
      this.shootBoss();
    }

  } else {
    this.$node.css({
      'border-color': 'green',
      borderWidth: 50,
      borderRadius: 50
    });
    $("body").css({
      "background-image": "url(\"http://bestanimations.com/Music/MirrorBalls/animated-purple-disco-ball3.gif\")",
      "background-repeat": "no-repeat",
      "background-position": "center center",
      "background-size": "100% 100%"});
  }

};

makesoldierDancer.prototype.setPosition = function(top, left) {

  this.styleSettings.top = top;
  this.styleSettings.left = left;

  this.$node.animate({
    top: this.styleSettings.top,
    left: this.styleSettings.left
  }, 1000);
};

makesoldierDancer.prototype.shootBoss = function() {
  //this.$bullet = $('<span class="bullet"></span>');

  //$('body').append(this.$bullet);


  // this.$bullet.animate({
  //   top: window.dancers[this.bossIndex].styleSettings.top,
  //   left: window.dancers[this.bossIndex].styleSettings.left
  // }, 1);

  // var currentBullet = this.$bullet;
  // setTimeout(function(){
  //   currentBullet.remove();
  // }, 1);

  if(window.dancers[this.bossIndex].life<=0){
    window.dancers.splice(this.bossIndex);
    //this.$bullet.remove();
    this.bossIndex = null;
  } else {
    window.dancers[this.bossIndex].life--;
    // this.$currentBoss.$node.css.animate({
    //   color: 'oranage'
    // }, 300);
  }

    //this.$bullet.remove();
};

makesoldierDancer.prototype.checkBoss = function() {
  //debugger;
  for(var i=0; i<window.dancers.length; i++ ){
    if(window.dancers[i].constructor.name === "makefadeDancer"){
      this.bossIndex = i;
      return true;
    }
  }

  return false;
};


/*
makesoldierDancer.prototype.party = function() {
  this.$node.clearQueue();
  this.$node.animate({
    top: this.styleSettings.top,
    left: '80%'
  }, (Math.random() * 1000) + 500);

  setTimeout(this.lineUp.bind(this), 500);
};
*/
