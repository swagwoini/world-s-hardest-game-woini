var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ab2a519a-596a-4f8d-b67f-76c87b42943c","7cfc9c2f-e7ee-4cea-8400-d4c845aae984","d707bf00-f3e5-4ac1-b73d-d5e1e9e7a6b5","d9e4624f-ddb7-4e2b-b6af-6685c03ca7b1","b2f8dba6-e908-4f27-a1bd-66d90d6b28fa"],"propsByKey":{"ab2a519a-596a-4f8d-b67f-76c87b42943c":{"name":"bird 1","sourceUrl":null,"frameSize":{"x":3000,"y":1740},"frameCount":1,"looping":true,"frameDelay":12,"version":"sv8sOkMckUhO4MrZA1ePPvk6mzX1Z0al","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":3000,"y":1740},"rootRelativePath":"assets/ab2a519a-596a-4f8d-b67f-76c87b42943c.png"},"7cfc9c2f-e7ee-4cea-8400-d4c845aae984":{"name":"planeBlue","sourceUrl":"assets/api/v1/animation-library/gamelab/N8nE_yTUDZ.3xJ03IT21_joiiSkUtXbd/category_vehicles/planeBlue1.png","frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"N8nE_yTUDZ.3xJ03IT21_joiiSkUtXbd","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N8nE_yTUDZ.3xJ03IT21_joiiSkUtXbd/category_vehicles/planeBlue1.png"},"d707bf00-f3e5-4ac1-b73d-d5e1e9e7a6b5":{"name":"planeGreen","sourceUrl":null,"frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q2nJ8.lzq57bipOGQAQTQnRmXmmBiapr","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/d707bf00-f3e5-4ac1-b73d-d5e1e9e7a6b5.png"},"d9e4624f-ddb7-4e2b-b6af-6685c03ca7b1":{"name":"planeRed","sourceUrl":"assets/api/v1/animation-library/gamelab/doNsuLSldRWw4EqNUuQ0oxoMGvLIMOca/category_vehicles/planeRed1.png","frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"doNsuLSldRWw4EqNUuQ0oxoMGvLIMOca","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/doNsuLSldRWw4EqNUuQ0oxoMGvLIMOca/category_vehicles/planeRed1.png"},"b2f8dba6-e908-4f27-a1bd-66d90d6b28fa":{"name":"planeYellow","sourceUrl":null,"frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"nvPCOzrlfWxzKzl9Nm6as5AkfTdiNM3E","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/b2f8dba6-e908-4f27-a1bd-66d90d6b28fa.png"}}};
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

//creatingstart and end

var start = createSprite(190, 30, 350, 30);
start.shapeColor= "green";

var end = createSprite(190, 340, 350, 30);
end.shapeColor= "green";


//creating lines and giving them colours
var line1 = createSprite(360, 185, 5,280);
line1.shapeColor= "black";
var line2 = createSprite(20, 185, 5, 280);
line2.shapeColor= "black";

//creating character and planes.
var bird = createSprite(200, 25,20, 20);
var plane1 = createSprite(50, 100, 20, 20);
var plane2 = createSprite(325, 160, 20, 20);
var plane3 = createSprite(55, 230, 20,20);
var plane4 = createSprite(325, 280, 20, 20);

bird.setAnimation("bird 1");
bird.scale = 0.20;
plane1.setAnimation("planeBlue");
plane1.scale = 0.6;
plane2.setAnimation("planeGreen");
plane2.scale = 0.6;
plane3.setAnimation("planeRed");
plane3.scale = 0.6;
plane4.setAnimation("planeYellow");
plane4.scale = 0.6;

//creating velocity to make planes fly
plane1.velocityX= +2;
plane2.velocityX= 2;
plane3.velocityX= -2;
plane4.velocityX= 2;

createEdgeSprites();

function draw() {
background("white");
textSize(18);
//text("Press 'Space' to start the game!",100, 200);
//creating edges for planes to bounce off

plane1.bounceOff(line1);
plane1.bounceOff(line2);
plane2.bounceOff(line1);
plane2.bounceOff(line2);
plane3.bounceOff(line1);
plane3.bounceOff(line2);
plane4.bounceOff(line1);
plane4.bounceOff(line2);

   

if (keyDown(LEFT_ARROW)) {
bird.x = bird.x -2;
}
if (keyDown(RIGHT_ARROW)) {
bird.x = bird.x +2;
  
}
//conditions for making the bird to move
if (keyDown(DOWN_ARROW)) 
{ bird.y = bird.y +2;

}
if (keyDown(UP_ARROW)) 
{ bird.y = bird.y -2; 
  
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
