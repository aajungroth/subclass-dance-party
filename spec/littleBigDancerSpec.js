describe('littleBigDancer', function() {

  var littleBigDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    littleBigDancer = new makeLittleBigDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(littleBigDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that animates changing size', function() {
    sinon.spy(littleBigDancer.$node, 'animate');
    littleBigDancer.step();
    expect(littleBigDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(littleBigDancer, 'step');
      expect(littleBigDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(littleBigDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(littleBigDancer.step.callCount).to.be.equal(2);
    });
  });
});
