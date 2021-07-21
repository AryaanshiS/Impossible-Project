var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundry1 = createSprite(200,140,400,5);
var boundry2 = createSprite(200,270,400,5);
var start = createSprite(10,205,100,125)
start.shapeColor = ("LightBlue");
var end = createSprite(390,205,100,125);
end.shapeColor = ("yellow");
var Sam = createSprite(40,205,15,15);
var car1 = createSprite(120,170,12,12);
car1.shapeColor = ("Red");
var car2 = createSprite(170,240,12,12);
car2.shapeColor = ("Red")
var car3 = createSprite(230,170,12,12);
car3.shapeColor = ("Red");
var car4 = createSprite(280,240,12,12)
car4.shapeColor = ("Red")

   car1.velocityY=3;
   car2.velocityY=-3;
   car3.velocityY=3;
   car4.velocityY=-3;

function draw() {
 background("White")
   
   car1.bounceOff(boundry1);
   car1.bounceOff(boundry2);
   
   car2.bounceOff(boundry1);
   car2.bounceOff(boundry2);
   
   car3.bounceOff(boundry1);
   car3.bounceOff(boundry2);
   
   car4.bounceOff(boundry1);
   car4.bounceOff(boundry2);
   
   Sam.bounceOff(boundry1);
   Sam.bounceOff(boundry2);
   
  if ( keyDown("left")) {
    Sam.x=Sam.x-3;
    
  }
  if ( keyDown("right")) {
    Sam.x=Sam.x+3;
    
  }
   if (Sam.isTouching(car1)) {
     Sam.x=40;
     Sam.y=205;
   }
   if (Sam.isTouching(car2)) {
     Sam.x=40;
     Sam.y=205;
   }
   if (Sam.isTouching(car3)) {
     Sam.x=40;
     Sam.y=205;
   }
   if (Sam.isTouching(car4)) {
     Sam.x=40;
     Sam.y=205;
   }
   
   if (Sam.isTouching(end)) {
     text("Game Over",200,200);
     Sam.x=40;
     Sam.y=205;
   }
   drawSprites();
   
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
