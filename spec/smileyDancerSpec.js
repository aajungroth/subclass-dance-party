describe('smileyDancer', function() {

  var smileyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    smileyDancer = new makeSmileyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(smileyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animates changing size', function() {
    sinon.spy(smileyDancer.$node, 'animate');
    smileyDancer.step();
    expect(smileyDancer.$node.animate.called).to.be.true;
  });

  it('should have a set position function that changes its position and color', function() {
    sinon.spy(smileyDancer.$node, 'css');
    smileyDancer.setPosition();
    expect(smileyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(smileyDancer, 'step');
      expect(smileyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(smileyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(smileyDancer.step.callCount).to.be.equal(2);
    });
  });
});
