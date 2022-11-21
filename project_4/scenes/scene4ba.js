function scene4a() {
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

  var count = 15;
  let posX = [count];
  let posX2 = [count];
  let posY = [count];
  let posY2 = [count];
  let speedX = [count];
  let speedX2 = [count];
  let speedY = [count];
  let speedY2 = [count];
  let sizeA = [count];
  let color = [count];


  this.setup =  function() {
    image(mgr.bkImage, 0, 0);

    for (var i=0; i < posX.length; i++) {
      posX[i] = width/2;
      posY[i] = height/2;
      posX2[i] = sizeA[i] + 10;
      posY2[i] = sizeA[i] + 10;
      speedX[i] = random(-7, 7);
      speedX2[i] = random(-10, 10);
      speedY[i] = random(-7, 7);
      speedY2[i] = random(-10, 10);
      sizeA[i] = random(.2, 10);
      color[i] = random(50, 85);
    }

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
    camsprite.position.x = -500;
    camsprite.position.y = 0;
    beginbtnsprite.position.x = -500;
    beginbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;

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
      help.play();
      mgr.showScene(helpmain3a);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    let r = random(3);
    let rS = random(0, 40);
    for (var k = 0; k < r; k+=1) {
      noStroke();
      fill(random(40, 100), random(50, 100), random(85, 100), rS);
      circle(random(width), random(height), random(60));
    }

    for (var i = 0; i < posX.length; i++) {
      posX2[i] += speedX2[i];
      posY2[i] += speedY2[i];

      if (frameCount % 100 == 0) {
        if (value == 100) {
          value = 85;
          value2 = 100;
        } else {
          value = 100;
          value2 = 50;
        }

      }
      stroke(random(40, 100), value2, value, 20);
      strokeWeight(2);
      line(0, 0, posX2[i], posY2[i]);
      line(width, height, posX2[i], posY2[i]);

      if (posX2[i] < sizeA[i] || posX2[i] > width-sizeA[i] ) {
        speedX2[i] = -speedX2[i];
      }
      if (posY2[i] < sizeA[i] || posY2[i] > height-sizeA[i]) {
        speedY2[i] = -speedY2[i];
      }
    }


    stroke(50, 100, 70);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You succeeded.", width/2, height/2 - 15);
    text("You beat Mike Al Sara at beer pong.", width/2, height/2 + 15);


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
      draw16();
    } else if (s == 17) {
      draw17();
    } else if (s == 18) {
        draw18();
    } else if (s == 19) {
        draw19();
    } else if (s == 20) {
        draw20();
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
          s = 21;
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
          s = 21;
        };
    } else if (s == 21) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
        draw21();
    } else if (s == 22) {
        draw22();
    } else if (s == 23) {
        draw23();
    } else if (s == 24) {
        draw24();
    } else if (s == 25) {
        draw25();
    } else if (s == 26) {
        draw26();
    } else if (s == 27) {
        draw27();
    } else if (s == 28) {
        draw28();
    } else if (s == 29) {
        draw29();
    } else if (s == 30) {
        draw30();
    } else if (s == 31) {
          draw31();
    } else if (s == 32) {
          draw32();
    } else if (s == 33) {
          draw33();
    } else if (s == 34) {
          draw34();
    } else if (s == 35) {
          draw35();
    } else if (s == 36) {
          draw36();
    } else if (s == 37) {
          draw37();
    } else if (s == 38) {
            draw38();
    } else if (s == 39) {
          draw39();
    } else if (s == 40) {
            draw40();
    } else if (s == 41) {
              draw41();
    } else if (s == 42) {
              draw42();
    } else if (s == 43) {
              draw43();
    } else if (s == 44) {
              draw44();
    } else if (s == 45) {
              draw45();
    } else if (s == 46) {
              draw46();
    } else if (s == 47) {
              draw47();
              decsprite.position.x = width/2 - 170;
              decsprite.position.y = height/2;

              decsprite2.position.x = width/2 - 170;
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
                s = 48;
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
                s = 48;
              };
    } else if (s == 48) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
        draw48();
    } else if (s == 49) {
        draw49();
    } else if (s == 50) {
      decsprite2.position.x = width/2 - 80;
      decsprite2.position.y = height/2 + 50;
      draw50();
      decsprite2.onMouseOver = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseOut = function() { this.animation.goToFrame(0);};
      decsprite2.onMousePressed = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseReleased = function() {
        this.animation.goToFrame(0);
        decsprite2.position.x = -500;
        decsprite2.position.y = 0;
        choice.play();
        mgr.showScene(intro);
      }
    }

    drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);


  }

  this.keyPressed = function() {
    keyp.play();
    if (s < 50) {
      s = s +1;
    }
    // s = s + 1;

    if (s == 50) {
      s = s;
    }

  }

  function draw2() {
      image(store, 0, 0);

      image(shrek, width/2 - 180 , height/6, 350, 660);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Mike: You'll regret this, MC.", width/2, height - 95);
      fill(0, counter2);
      counter2 = counter2 - speed2;
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw3() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike Al Sara flips the table over, spilling everything", width/2, height/2 - 15);
    text("He runs out crying like a baby. The party is ruined.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw4() {
      image(store, 0, 0);

      image(shrek, width/2, height/5, 250, 450);
      image(hennie, width/2 - 280 , height/6, 300, 410);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Zoku: Good luck, buddy. It will be a long journey to restore your honor.", width/2, height - 107);
      text("I would know.", width/2, height - 83);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw5() {
      image(store, 0, 0);

      image(shrek, width/2 - 180 , height/6, 350, 660);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Mamara: What a baby.", width/2, height - 95);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw6() {
      image(store, 0, 0);

      image(shrek, width/2, height/5, 250, 450);
      image(hennie, width/2 - 280 , height/6, 300, 410);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Zoku: I must say your technique was something, MC.", width/2, height - 107);
      text("I could learn a few things from you.", width/2, height - 83);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw7() {
    image(store, 0, 0);

    image(shrek, width/2, height/5, 250, 450);
    image(hennie, width/2 - 280 , height/6, 300, 410);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("MC: I could teach you, in return for some information.", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw8() {
      image(store, 0, 0);

      image(shrek, width/2, height/5, 250, 450);
      image(hennie, width/2 - 280 , height/6, 300, 410);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Zoku: Anything for a fellow pong lord.", width/2, height - 95);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw9() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You tell Zoku everything.", width/2, height/2);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw10() {
    image(store, 0, 0);

    image(shrek, width/2, height/5, 250, 450);
    image(hennie, width/2 - 280 , height/6, 300, 410);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: That's rough, buddy.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw11() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Do you have any information?", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw12() {
    image(store, 0, 0);

    image(shrek, width/2, height/5, 250, 450);
    image(hennie, width/2 - 280 , height/6, 300, 410);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: Unfortunately, I don't know anything about your sister, but", width/2, height - 107);
    text("I would be honored to join you in your quest.", width/2, height - 83);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw13() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You have gained a new ally, but you have no new information.", width/2, height/2 - 15);
    text("You decide to leave the party with your friends.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw14() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You make your way outside.", width/2, height/2 - 15);
    text("You feel lost, but a stranger stops you.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw15() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Jerry: Excuse me. I heard you're looking for your sister. My name is Jerry.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw16() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Where'd you come from?", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw17() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Jerry: I happened to overhear your conversation earlier. I believe your sister", width/2, height - 107);
    text("is in Smalltown.", width/2, height - 83);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw18() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You are hesitant to believe the stranger. After traveling this far,", width/2, height/2 - 15);
    text("is this finally the real location of your sister?", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw19() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Jerry: I would know. I helped her escape there. Her name is y/n.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw20() {
    image(pdining, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("What do you do?", width/2, height/2 - 60);

    textSize(16);
    text("Believe Jerry.", width/2, height/2);
    text("Shrug it off.", width/2, height/2 + 50);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw21() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: He sounds trustworthy, MC. Let's go.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw22() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You travel to Smalltown.", width/2, height/2);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw23() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Before you can begin searching for your sister, you", width/2, height/2 - 30);
    text("are interrupted by a gang of thugs.", width/2, height/2);
    text("Your manager, Mike Al Sara is leading them.", width/2, height/2 + 30);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw24() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: What's this about?", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw25() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: Hey, buddy. This is not the path to restoring your honor.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw26() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: MC, you've been silent long enough. But now I will silence you...", width/2, height - 107);
    text("FOREVER!", width/2, height - 83);



    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw27() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: What's going on, MC?", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw28() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You shrug your shoulders.", width/2, height/2);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw29() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: I know you know, MC. You know about my undercover money", width/2, height - 107);
    text("laundering business.", width/2, height - 83);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw30() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: Your what???", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw31() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: So you haven't told them. To protect them, I assume. Well it's all", width/2, height - 107);
    text("for naught because they know now.", width/2, height - 83);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw32() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: Because you told us.", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw33() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Not important. Now I will finally defeat you, MC. For good.", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw34() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("MC: But I didn't know anything about that.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw35() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Wait... you didn't?", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw36() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Well... you do now. So I must end you.", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw37() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: Not going to happen.", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw38() {
    image(store, 0, 0);

    image(shrek, width/2 - 180 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: This is the part where you run away.", width/2, height - 95);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw39() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mamara charges Mike like a demon.", width/2, height/2 - 30);
    text("She pummels him to the ground,", width/2, height/2);
    text("but he manages to fight her off with one good punch.", width/2, height/2 + 30);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw40() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku charges him next. He separates Mike from his", width/2, height/2 - 15);
    text("underlings with a blast of fire.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw41() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike is putting up a good fight, but he is no", width/2, height/2 - 15);
    text("match for Mamara and Zoku's attacks.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw42() {
    image(store, 0, 0);

    image(hennie, width/2 - 280 , height/6, 350, 660);

    noStroke();
    fill(100);
    rect(width/2, height - 95, width, 190);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Ah. I'm so weak. All it would take is one more punch to defeat me.", width/2, height - 95);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw43() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie walks up to a nearly defeated Mike.", width/2, height/2 - 30);
    text("Delivering the final blow, she crushes", width/2, height/2);
    text("him with the heel of her designer shoe.", width/2, height/2 + 30);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw44() {

  //KO SCREEN
      image(store, 0, 0);
  }

  function draw45() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike Al Sara has been defeated. You thank your new allies", width/2, height/2 - 15);
    text("and continue on your search. You end up in a cafe.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw46() {
    image(store, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("There she is behind the register. Your long lost sister.", width/2, height/2 - 15);
    text("After all this time, you've finally reunited.", width/2, height/2 + 15);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw47() {
    image(pdining, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("What do you say?", width/2, height/2 - 60);

    textSize(16);
    text("Can I get an iced vanilla latte?", width/2, height/2);
    text("Are you by any chance named y/n?", width/2, height/2 + 50);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }
  function draw48() {
    //end scene of y/n
    image(store, 0, 0);

  }

  function draw49() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(30);
    text("Good End", width/2, height/2);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw50() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(30);
    text("Good End", width/2, height/2);
    textSize(20);
    text("Play Again", width/2, height/2 + 50);


    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }
}
