function minigame3a() {
  var counter = 100;
  var speed = .5;
  var s = 1;
  var go = 190;
  var strength = 640;
  var sspeed = 5;
  var goal = 300;

  this.setup = function() {
    cysuccess = 74;
  }

  this.enter = function() {
    closebtnsprite.position.x = -500;
    closebtnsprite.position.y = 0;
    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    ropesprite.position.x = width/2 - -500;
    ropesprite.position.y = height - 0;
    cup1sprite.position.x = width/2 - -500;
    cup1sprite.position.y = height - 0;

  }

  this.draw = function() {
    rectMode(CORNER);
    image(table, 0, 0);
    snum = map(s, 1, 8, 8, 1);

    stroke(50, 100, 70);
    strokeWeight(8);
    fill(100);
    rect(65, 250, width - 130, 200);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Beat Mike Al Sara in a game of Beer Pong.", width/2, height/2 - 60);
    text("Use your mouse to click on the cups when the moving", width/2, height/2 - 30);
    text("blue circle fits inside the cup to aim.", width/2, height/2);
    text("After setting up your aim, click on the ping pong ball", width/2, height/2 + 30);
    text("when the strength meter is in the blue section to throw it.", width/2, height/2 + 60);

    if (s == 2) {
      MC1();
      }

      drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(0, 0, width, height);

    // if (cy > 640) {
    //   keyp.play();
    //   cup1sprite.position.x = -500;
    //   cup1sprite.position.y = 0;
    //   mgr.showScene(scene3ba);
    // }
  }

  this.keyPressed = function() {
      keyp.play();
      if (s < 2) {
        s = s + 1;
      }
      // s = s + 1;

      if (s == 2) {
        s = s;
      }
  }

  this.mousePressed = function() {
  }

  function MC1() {
    cup1sprite.position.x = width/2 - 20;
    cup1sprite.position.y = 200;
    cup2sprite.position.x = width/2 + 30;
    cup2sprite.position.y = 125;
    cup3sprite.position.x = width/2 - 70;
    cup3sprite.position.y = 125;
    cup4sprite.position.x = width/2 + 80;
    cup4sprite.position.y = 50;
    cup5sprite.position.x = width/2 - 120;
    cup5sprite.position.y = 50;
    cup6sprite.position.x = width/2 - 20;
    cup6sprite.position.y = 50;
    image(table, 0, 0);
    fill(100, 80);
    stroke(0);
    strokeWeight(2);
    rect(610, 40, 50, 620);

    fill(55, 100, 100);
    rect(610, 40, 50, goal/s);

    fill(0);
    rect(610, strength, 50, 20);
    strength = strength + sspeed;

    if (strength > 640 || strength < 40) {
      sspeed = - sspeed;
    }

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Your Turn", 115, 610);


    cup1sprite.onMousePressed = function() { this.animation.goToFrame(0);};
    cup1sprite.onMouseReleased = function() {
      this.animation.goToFrame(1);
    };
  }

  function Mike1() {
    image(table, 0, 0);
    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Mike's Turn", 115, 610);
  }

  function MC2() {
    image(table, 0, 0);
    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Your Turn", 115, 610);
  }

  function Mike2() {
    image(table, 0, 0);
    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Mike's Turn", 115, 610);
  }

  function MC3() {
    image(table, 0, 0);
    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Your Turn", 115, 610);
  }

  function Mike3() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Mike's Turn", 115, 610);
  }

  function MC4() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Your Turn", 115, 610);
  }

  function Mike4() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Mike's Turn", 115, 610);
  }

  function MC5() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Your Turn", 115, 610);
  }

  function Mike5() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Mike's Turn", 115, 610);
  }

  function MC6() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Your Turn", 115, 610);
  }

  function Mike6() {
    image(table, 0, 0);

    fill(100);
    noStroke();
    rect(40, 560, 150, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(30);
    text("Mike's Turn", 115, 610);
  }

}
