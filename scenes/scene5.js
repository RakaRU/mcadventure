function scene5() {
  var counter = 100;
  var speed = .5;
  var counter2 = 100;
  var speed2 = .5;
  var counter3 = 100;
  var speed3 = .5;
  var counter4 = 100;
  var speed4 = .5;
  var value = 100;
  var value2 = 100;
  let s = 1;


  this.setup =  function() {
    image(mgr.bkImage, 0, 0);

  }

  this.enter = function() {
    row1sprite.position.x = -500;
    row1sprite.position.y = 0;
    row2sprite.position.x = -500;
    row2sprite.position.y = 0;
    row3sprite.position.x = -500;
    row3sprite.position.y = 0;
    row4sprite.position.x = -500;
    row4sprite.position.y = 0;
    ropesprite.position.x = -500;
    ropesprite.position.y = 0;
    closebtnsprite.position.x = -500;
    closebtnsprite.position.y = 0;
    beginbtnsprite.position.x = -500;
    beginbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;

    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    arrowsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = s + 1;
    };

    helpbtnsprite.position.x = 60;
    helpbtnsprite.position.y = 60;

    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      helpbtnsprite.position.x = -500;
      helpbtnsprite.position.y = 0;
      rectMode(CENTER);
      fill(0, 50);
      rect(width/2, width/2, width, height);
      // help.play();
      mgr.showScene(helpmain5);
    };
  }

  this.draw = function() {
    rectMode(CENTER);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You failed.", width/2, height/2 - 15);
    text("You could not beat Mike Al Sara at beer pong.", width/2, height/2 + 15);


    if (s == 2) {
      draw2();
    } else  if (s == 3) {
      draw3();
    } else if (s == 4) {
      draw4();
    } else if (s == 5) {
      draw5();
    } else if (s == 6) {
      draw6();
    } else if (s == 7) {
      draw7();
    } else if (s == 8) {
      draw8();
    } else if (s == 9) {
      draw9();
    } else if (s == 10) {
      draw10();
    }  else if (s == 11) {
      draw11();
    }  else if (s == 12) {
      draw12();
    } else if (s == 13) {
      draw13();
    } else if (s == 14) {
      draw14();
    } else if (s == 15) {
      draw15();
    } else if (s == 16) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
        draw16();
    } else if (s == 17) {
      decsprite2.position.x = width/2 - 80;
      decsprite2.position.y = height/2 + 50;
      draw17();
      decsprite2.onMouseOver = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseOut = function() { this.animation.goToFrame(0);};
      decsprite2.onMousePressed = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseReleased = function() {
        this.animation.goToFrame(0);
        decsprite2.position.x = -500;
        decsprite2.position.y = 0;
        // choice.play();
        mgr.showScene(intro);
      }
    }

    drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(10);
    rect(width/2, height/2, width, height);


  }

  function draw2() {
      image(party, 0, 0);

      image(mike, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike: Drink up, MC.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      fill(0, counter2);
      counter2 = counter2 - speed2;
      rect(width/2, height/2, width, height);
  }

  function draw3() {
    image(party, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You drink from your last cup.", width/2, height/2);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw4() {
    image(party, 0, 0);

      image(zoku, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Zoku: You okay, MC?", width/2, height - 65);
      text("You don't look so good.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw5() {
    image(party, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Yea. You don't feel so good.", width/2, height/2);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw6() {
    image(party, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: We should probably get you out of here.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw7() {
    image(biggestcity, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You're lead outside of the party by hazy figures.", width/2, height/2 - 15);
    text("You can barely walk. Everything is spinning.", width/2, height/2 + 15);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

    fill(0, counter2);
    counter2 = counter2 - speed2;
    rect(width/2, height/2, width, height);


  }

  function draw8() {
    image(biggestcity, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You can't hold it in anymore.", width/2, height/2 - 15);
    text("You barf all over yourself.", width/2, height/2 + 15);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

  }

  function draw9() {
    image(biggestcity, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Better out than in, I always say.", width/2, height - 50);

    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw10() {
    image(biggestcity, 0, 0);

    image(zoku, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: That's rough, buddy. Can I help with", width/2, height - 65);
    text("anything?", width/2, height - 35);

    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;

  }

  function draw11() {
    image(biggestcity, 0, 0);

    image(mc, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("MC: ...ahghagh...", width/2, height - 50);

    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw12() {
    image(biggestcity, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You collapse on the ground in a heap.", width/2, height/2 - 15);
    text("Darkness overtakes your vision.", width/2, height/2 + 15);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw13() {
    image(bkImage, 0, 0);
    //mc dead scene
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw14() {
    image(bkImage, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You've been poisoned!", width/2, height/2 - 15);
    text("Your journey has come to an end.", width/2, height/2 + 15);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw15() {
    //end screen
    image(bad2, 0, 0);

    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;

        fill(0, counter3);
        counter3 = counter3 - speed3;
        rect(width/2, height/2, width, height);
  }

  function draw16() {
    image(bad2, 0, 0);

    stroke(15, 0, 100);
    strokeWeight(random(5,10));
    fill(100, 0);
    rect(width/2, height/2, width - 125, 205);
    stroke(0, 100, 70);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(0, 100, 70);
    textSize(30);
    text("BAD END", width/2, height/2);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw17() {
    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;
    image(bad2, 0, 0);

    stroke(15, 0, 100);
    strokeWeight(random(5,10));
    fill(100, 0);
    rect(width/2, height/2, width - 125, 205);
    stroke(0, 100, 70);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(0, 100, 70);
    textSize(30);
    text("BAD END", width/2, height/2);
    textSize(20);
    text("Play Again", width/2, height/2 + 50);
  }
}
