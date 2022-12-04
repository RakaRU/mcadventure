function minigame3ba() {
  var counter = 100;
  var speed = .5;
  var s = 1;
  var go = 190;
  var strength = 640;
  var sspeed = 5;
  var goal = 300;
  var aim1 = 50;
  var asp1 = 0.5;
  var aim2 = 50;
  var asp2 = .5;
  var bally = 90;
  var bspeed = 2;
  var bally2 = 90;
  var bspeed2 = 2;
  var ballx2 = 335;
  var bspeedx2 = .15;
  var bally3 = 90;
  var bspeed3 = 2;
  var ballx3 = 335;
  var bspeedx3 = -.2;

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

    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

  }

  this.draw = function() {
    rectMode(CENTER);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

    arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = 2;
    };

    image(table, 0, 0);
    snum = map(s, 1, 8, 8, 1);

    stroke(50, 100, 70);
    strokeWeight(8);
    fill(100);
    rect(width/2, height/2, width - 130, 200);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Beat Mike Al Sara in a game of Beer Pong.", width/2, height/2 - 60);
    text("Use your mouse to click on the cups when the moving", width/2, height/2 - 30);
    text("blue circle fits inside the cup to aim.", width/2, height/2);
    text("After setting up your aim, click on the ping pong ball", width/2, height/2 + 30);
    text("when the strength meter is in the blue section to throw it.", width/2, height/2 + 60);
    drawSprites();

    if (s == 2) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;
      Mike1();
    } else  if (s == 3) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;
      MC1();
    } else if (s == 4) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;
      t1a();
    } else if (s == 5) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;
      t1b();
    } else if (s == 6) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;
      Mike2();
    } else if (s == 7) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;
      MC2();
    } else  if (s == 8) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      t2a();
    } else if (s == 9) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      t2b();
    } else if (s == 10) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3();
    } else if (s == 11) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike32();
      decsprite.position.x = width/2 - 170;
      decsprite.position.y = height/2;

      decsprite2.position.x = width/2 - 140;
      decsprite2.position.y = height/2 + 50;

      decsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      decsprite.onMouseOut = function() { this.animation.goToFrame(0);};
      decsprite.onMousePressed = function() { this.animation.goToFrame(1);};
      decsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        decsprite.position.x = -500;
        decsprite.position.y = 0;
        decsprite2.position.x = -500;
        decsprite2.position.y = 0;
        choice.play();
        s = 16;
      };

      decsprite2.onMouseOver = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseOut = function() { this.animation.goToFrame(0);};
      decsprite2.onMousePressed = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseReleased = function() {
        this.animation.goToFrame(0);
        decsprite.position.x = -500;
        decsprite.position.y = 0;
        decsprite2.position.x = -500;
        decsprite2.position.y = 0;
        choice.play();
        s = 12;
      };
    } else if (s == 12) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      Mike3a();
    } else if (s == 13) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3a2();
    } else if (s == 14) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3a3();
    } else if (s == 15) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3a4();
      cup1sprite.position.x = -width/2;
      cup1sprite.position.y = 125;
      cup2sprite.position.x = -width/2 + 50;
      cup2sprite.position.y = 50;
      cup3sprite.position.x = -width/2 - 50;
      cup3sprite.position.y = 50;
      mgr.showScene(scene4ba);
    } else if (s == 16) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      Mike3b();
    } else if (s == 17) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3b2();
    } else if (s == 18) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3b3();
    } else if (s == 19) {
      arrowsprite.position.x = -685;
      arrowsprite.position.y = 685;
      Mike3b4();
      cup1sprite.position.x = -width/2;
      cup1sprite.position.y = 125;
      cup2sprite.position.x = -width/2 + 50;
      cup2sprite.position.y = 50;
      cup3sprite.position.x = -width/2 - 50;
      cup3sprite.position.y = 50;
      mgr.showScene(scene5);
    }

      // drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);

    // if (cy > 640) {
    //   keyp.play();
    //   cup1sprite.position.x = -500;
    //   cup1sprite.position.y = 0;
    //   mgr.showScene(scene3ba);
    // }
  }

  function Mike1() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup, width/2 - 40, 520, 75, 75);
    image(mcup, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);
    drawSprites();

        fill(100);
        stroke(50, 100, 70);
        strokeWeight(4);
        rect(width/2, height/2, 160, 100);

        textAlign(CENTER, CENTER);
        fill(50, 100, 70);
        noStroke();
        textSize(30);
        text("Mike's Turn", width/2, height/2);

    image(ball, width/2 - 15, bally);
    image(rhand2, width/2 - 120, 0);
    bally = bally + bspeed;

    if (bally > 540) {
      arrowsprite.position.x = 485;
      arrowsprite.position.y = 385;
      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 3;
      };
      drawSprites();
      bspeed = 0;
      stroke(50, 100, 70);
      strokeWeight(8);
      fill(100);
      rect(width/2, height/2, width/2 - 50, 100);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(30);
      text("Mike scored :(", width/2, height/2);
      drawSprites();
      image(rhand2, width/2 - 120, 0);
    }

  }

  function MC1() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);

    drawSprites();


    fill(0,0);
    strokeWeight(5);
    stroke(55, 100, 100);
    circle(width/2, 125, aim1);

    aim1 = aim1 + asp1;
    if (aim1 > 90 || aim1 < 25) {
      asp1 = -asp1;
    }


    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Your Turn", width/2, height/2);

    cup1sprite.onMousePressed = function() { this.animation.goToFrame(0);};
    cup1sprite.onMouseReleased = function() {
      asp1 = 0;
      if (aim1 < 61) {
          this.animation.goToFrame(1);
          s = 4;
      }

      if (aim1 > 60) {
        this.animation.goToFrame(0);
          s = 5;
      }
    };
  }

  function t1a() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);


    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Your Turn", width/2, height/2);

      arrowsprite.position.x = 485;
      arrowsprite.position.y = 385;
      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 6;
      };
      stroke(50, 100, 70);
      strokeWeight(8);
      fill(100);
      rect(width/2, height/2, width/2 - 50, 100);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(30);
      text("You scored :)", width/2, height/2);
      drawSprites();

      fill(0,0);
      strokeWeight(5);
      stroke(55, 100, 100);
      circle(width/2, 125, aim1);
  }

  function t1b() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);


    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Your Turn", width/2, height/2);

      arrowsprite.position.x = 485;
      arrowsprite.position.y = 385;
      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 6;
      };
      stroke(50, 100, 70);
      strokeWeight(8);
      fill(100);
      rect(width/2, height/2, width/2 - 50, 100);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(30);
      text("You missed :(", width/2, height/2);
      drawSprites();

      fill(0,0);
      strokeWeight(5);
      stroke(55, 100, 100);
      circle(width/2, 125, aim1);
  }

  function Mike2() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);
    drawSprites();

    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Mike's Turn", width/2, height/2);

    image(ball, ballx2, bally2);
    image(rhand2, width/2 - 120, 0);
    bally2 = bally2 + bspeed2;
    ballx2 = ballx2 + bspeedx2;

    if (bally2 > 615) {
      if (ballx2 > 360) {
        arrowsprite.position.x = 485;
        arrowsprite.position.y = 385;
        arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
        arrowsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          s = 7;
        };
        drawSprites();
        bspeed2 = 0;
        bspeedx2 = 0;
        stroke(50, 100, 70);
        strokeWeight(8);
        fill(100);
        rect(width/2, height/2, width/2 - 50, 100);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(50, 100, 70);
        textSize(30);
        text("Mike scored :(", width/2, height/2);
        drawSprites();
        image(rhand2, width/2 - 120, 0);
      }
    }
  }

  function MC2() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);

    drawSprites();


    fill(0,0);
    strokeWeight(5);
    stroke(55, 100, 100);
    circle(width/2 + 50, 50, aim2);
    aim2 = aim2 + asp2;
    if (aim2 > 90 || aim2 < 25) {
      asp2 = -asp2;
    }


    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Your Turn", width/2, height/2);

    cup2sprite.onMousePressed = function() { this.animation.goToFrame(0);};
    cup2sprite.onMouseReleased = function() {
      asp2 = 0;
      if (aim2 < 61) {
          this.animation.goToFrame(1);
          s = 8;
      }

      if (aim2 > 60) {
        this.animation.goToFrame(0);
          s = 9;
      }
    };
  }

  function t2a() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);


    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Your Turn", width/2, height/2);

      arrowsprite.position.x = 485;
      arrowsprite.position.y = 385;
      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 10;
      };
      stroke(50, 100, 70);
      strokeWeight(8);
      fill(100);
      rect(width/2, height/2, width/2 - 50, 100);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(30);
      text("You scored :)", width/2, height/2);
      drawSprites();

      fill(0,0);
      strokeWeight(5);
      stroke(55, 100, 100);
      circle(width/2 + 50, 50, aim2);
  }

  function t2b() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);


    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Your Turn", width/2, height/2);

      arrowsprite.position.x = 485;
      arrowsprite.position.y = 385;
      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 10;
      };
      stroke(50, 100, 70);
      strokeWeight(8);
      fill(100);
      rect(width/2, height/2, width/2 - 50, 100);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(30);
      text("You missed :(", width/2, height/2);
      drawSprites();

      fill(0,0);
      strokeWeight(5);
      stroke(55, 100, 100);
      circle(width/2 + 50, 50, aim2);
  }

  function Mike3() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);

        arrowsprite.position.x = 535;
        arrowsprite.position.y = 410;
        arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
        arrowsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          s = 11;
        };
        drawSprites();
        stroke(50, 100, 70);
        strokeWeight(8);
        fill(100);
        rect(width/2, height/2, width/2 + 50, 150);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(50, 100, 70);
        textSize(30);
        text("Mike only has 1 cup left!", width/2, height/2 - 20);
        text("Let's try to distract him.", width/2, height/2 + 20);
        drawSprites();

        image(ball, ballx3, bally3);
        image(rhand2, width/2 - 120, 0);
  }


  function Mike32() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);

        arrowsprite.position.x = -535;
        arrowsprite.position.y = 410;

        drawSprites();
        stroke(50, 100, 70);
        strokeWeight(8);
        fill(100);
        rect(width/2, height/2, width/2 + 50, 200);

        textAlign(CENTER, CENTER);
        noStroke();
        fill(50, 100, 70);
        textSize(20);
        text("What do you say?", width/2, height/2 - 60);

        textSize(16);
        text("You have something on your shirt, Mike.", width/2, height/2);
        text("Your hair looks so shaggy, Mike.", width/2, height/2 + 50);
        drawSprites();

        image(ball, ballx3, bally3);
        image(rhand2, width/2 - 120, 0);
  }

  function Mike3a() {
      image(table, 0, 0);
      cup1sprite.position.x = width/2;
      cup1sprite.position.y = 125;
      cup2sprite.position.x = width/2 + 50;
      cup2sprite.position.y = 50;
      cup3sprite.position.x = width/2 - 50;
      cup3sprite.position.y = 50;

      image(mike, 0 , 400, 200, 200);
      image(mcup2, width/2 - 40, 520, 75, 75);
      image(mcup2, width/2 + 10, 595, 75, 75);
      image(mcup, width/2 - 90, 595, 75, 75);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike: It does, doesn't it? I knew it!", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 13;
      };

      drawSprites();

      image(ball, ballx3, bally3);
      image(rhand2, width/2 - 120, 0);
  }

  function Mike3a2() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mike, 0 , 400, 200, 200);
    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: God, I'm such a disgrace. I can't play in this shaggy state.", width/2, height - 50);

    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;

    arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = 14;
    };

    drawSprites();

    image(ball, ballx3, bally3);
    image(rhand2, width/2 - 120, 0);
  }

  function Mike3a3() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mike, 0 , 400, 200, 200);
    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: I forfeit!", width/2, height - 50);

    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;

    arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = 15;
    };

    drawSprites();

    image(ball, ballx3, bally3);
    image(rhand2, width/2 - 120, 0);
  }

  function Mike3a4() {
    fill(0);
    noStroke();
    rect(width/2, height/2, width, height);

    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;
  }

  function Mike3b() {
      image(table, 0, 0);
      cup1sprite.position.x = width/2;
      cup1sprite.position.y = 125;
      cup2sprite.position.x = width/2 + 50;
      cup2sprite.position.y = 50;
      cup3sprite.position.x = width/2 - 50;
      cup3sprite.position.y = 50;

      image(mike, 0 , 400, 200, 200);
      image(mcup2, width/2 - 40, 520, 75, 75);
      image(mcup2, width/2 + 10, 595, 75, 75);
      image(mcup, width/2 - 90, 595, 75, 75);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike: I didn't think you were the type to resort to petty tricks, MC.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 17;
      };

      drawSprites();

      image(ball, ballx3, bally3);
      image(rhand2, width/2 - 120, 0);
  }

  function Mike3b2() {
      image(table, 0, 0);
      cup1sprite.position.x = width/2;
      cup1sprite.position.y = 125;
      cup2sprite.position.x = width/2 + 50;
      cup2sprite.position.y = 50;
      cup3sprite.position.x = width/2 - 50;
      cup3sprite.position.y = 50;

      image(mike, 0 , 400, 200, 200);
      image(mcup2, width/2 - 40, 520, 75, 75);
      image(mcup2, width/2 + 10, 595, 75, 75);
      image(mcup, width/2 - 90, 595, 75, 75);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike: It doesn't matter anyway. I'm about to win this game.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      arrowsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        s = 18;
      };

      drawSprites();

      image(ball, ballx3, bally3);
      image(rhand2, width/2 - 120, 0);
  }

  function Mike3b3() {
    image(table, 0, 0);
    cup1sprite.position.x = width/2;
    cup1sprite.position.y = 125;
    cup2sprite.position.x = width/2 + 50;
    cup2sprite.position.y = 50;
    cup3sprite.position.x = width/2 - 50;
    cup3sprite.position.y = 50;

    image(mcup2, width/2 - 40, 520, 75, 75);
    image(mcup2, width/2 + 10, 595, 75, 75);
    image(mcup, width/2 - 90, 595, 75, 75);
    drawSprites();

    fill(100);
    stroke(50, 100, 70);
    strokeWeight(4);
    rect(width/2, height/2, 160, 100);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    noStroke();
    textSize(30);
    text("Mike's Turn", width/2, height/2);

    image(ball, ballx3, bally3);
    image(rhand2, width/2 - 120, 0);
    bally3 = bally3 + bspeed3;
    ballx3 = ballx3 + bspeedx3;

    if (bally3 > 615) {
      if (ballx3 < 290) {
        arrowsprite.position.x = 485;
        arrowsprite.position.y = 385;
        arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
        arrowsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          s = 19;
        };
        drawSprites();
        bspeed3 = 0;
        bspeedx3 = 0;
        stroke(50, 100, 70);
        strokeWeight(8);
        fill(100);
        rect(width/2, height/2, width/2 - 50, 100);
        textAlign(CENTER, CENTER);
        noStroke();
        fill(50, 100, 70);
        textSize(30);
        text("Mike scored :(", width/2, height/2);
        drawSprites();
        image(rhand2, width/2 - 120, 0);
      }
    }
  }

  function Mike3b4() {
    fill(0);
    noStroke();
    rect(width/2, height/2, width, height);

    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;
  }

}
