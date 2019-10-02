var controller = new ScrollMagic.Controller();

const addScene = function (element) {
  var scene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 'onLeave',
    duration: 500
  }).setPin(element) // .addIndicators({name: "1 (duration: 500)"}) // add indicators (requires plugin)
  .addTo(controller);
};

const addLandingScene = function (element) {
  var scene = new ScrollMagic.Scene({
    triggerElement: '#landing-trigger',
    triggerHook: 'onLeave',
    duration: 500
  }).setTween(element, {
    y: '-100vh'
  }) // trigger a TweenMax.to tween
  // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(controller);
};

const addMenuScene = function (element) {
  var scene = new ScrollMagic.Scene({
    triggerElement: '#date',
    triggerHook: 'onLeave',
    duration: 500
  }).setPin(element).addTo(controller);
};

addLandingScene("#landing");
addScene("#date");

if (window.innerWidth > 375) {
  addMenuScene("#menu"); // addScene("#idee");
  // addScene("#vermicelles");
  // addScene("#images");
  // addScene("#tellhof");
  // addScene("#vermicellesfans");
  // addScene("#crowdfunding");
  // addScene("#kontakt");
}