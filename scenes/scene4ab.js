function scene4ab() {
  var counter = 100;
  var speed = .5;
  var counter2 = 100;
  var speed2 = .5;
  var counter3 = 100;
  var speed3 = .5;
  var counter4 = 100;
  var speed4 = .5;
  var counter5 = 100;
  var speed5 = .5;
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
      mgr.showScene(helpmain4ab);
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
          // choice.play();
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
          // choice.play();
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
    } else if (s == 48) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
        draw48();
    } else if (s == 49) {
      decsprite2.position.x = width/2 - 80;
      decsprite2.position.y = height/2 + 50;
      draw49();
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
      text("Mike: You'll regret this, MC.", width/2, height - 50);
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
    text("Mike Al Sara flips the table over, spilling everything", width/2, height/2 - 15);
    text("He runs out crying like a baby.", width/2, height/2 + 15);
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
      text("Zoku: Good luck, buddy. It will be a long journey to restore your honor.", width/2, height - 65);
      text("I would know.", width/2, height - 35);
      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw5() {
    image(party, 0, 0);

      image(hennie, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Pathetic.", width/2, height - 50);
      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw6() {
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
      text("Zoku: I must say your technique was something, MC.", width/2, height - 65);
      text("I could learn a few things from you.", width/2, height - 35);
      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw7() {
    image(party, 0, 0);

    image(mc, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("MC: I could teach you, in return for some information.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw8() {
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
      text("Zoku: Anything for a fellow pong lord.", width/2, height - 50);
      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw9() {
    image(party, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You tell Zoku everything.", width/2, height/2);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw10() {
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
    text("Zoku: That's rough, buddy.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw11() {
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
    text("Shrecc: Do you have any information?", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw12() {
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
    text("Zoku: Unfortunately, I don't know anything about your sister, but", width/2, height - 65);
    text("I would be honored to join you in your quest.", width/2, height - 35);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw13() {
    image(party, 0, 0);

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
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw14() {
    image(biggestcity, 0, 0);

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
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
    fill(0, counter2);
    counter2 = counter2 - speed2;
    rect(width/2, height/2, width, height);
  }

  function draw15() {
    image(biggestcity, 0, 0);

    image(jerry, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Jerry: Excuse me. I heard you're looking for your sister. My name is Jerry.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw16() {
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
    text("Shrecc: Where'd you come from?", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw17() {
    image(biggestcity, 0, 0);

    image(jerry, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Jerry: I happened to overhear your conversation earlier. I believe your sister", width/2, height - 65);
    text("is in Smalltown.", width/2, height - 35);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw18() {
    image(biggestcity, 0, 0);

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
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw19() {
    image(biggestcity, 0, 0);

    image(jerry, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Jerry: I would know. I helped her escape there. Her name is y/n.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw20() {
    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;
    image(biggestcity, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(5);
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

  }

  function draw21() {
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
    text("Zoku: He sounds trustworthy, MC. Let's go.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw22() {
    image(small, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You travel to Smalltown.", width/2, height/2);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
    fill(0, counter3);
    counter3 = counter3 - speed3;
    rect(width/2, height/2, width, height);
  }

  function draw23() {
    image(small, 0, 0);

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
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw24() {
    image(small, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: What's this about?", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw25() {
    image(small, 0, 0);

    image(zoku, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: Hey, buddy. This is not the path to restoring your honor.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw26() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: MC, you've been silent long enough. But now I will silence you...", width/2, height - 65);
    text("FOREVER!", width/2, height - 35);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw27() {
    image(small, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: What's this about, MC?", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw28() {
    image(small, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You shrug your shoulders.", width/2, height/2);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw29() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: I know you know, MC. You know about my secret money", width/2, height - 65);
    text("laundering business.", width/2, height - 35);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw30() {
    image(small, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: Your what???", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw31() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: So you haven't told them. To protect them, I assume. Well it's all", width/2, height - 65);
    text("for naught because they know now.", width/2, height - 35);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw32() {
    image(small, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: Because you told us.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw33() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Not important. Now I will finally defeat you, MC. For good.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw34() {
    image(small, 0, 0);

    image(mc, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("MC: But I didn't know anything about that.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw35() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Wait... you didn't?", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw36() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Well... you do now. So I must end you.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw37() {
    image(small, 0, 0);

    image(zoku, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: I will fight for my friend.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw38() {
    image(small, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: This is the part where you run away.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw39() {
    image(small, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku charges him.", width/2, height/2);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw40() {
    image(small, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("He separates Mike from his", width/2, height/2 - 15);
    text("underlings with a blast of fire.", width/2, height/2 + 15);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw41() {
    image(small, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike is putting up a good fight, but he is no", width/2, height/2 - 15);
    text("match for Zoku's attacks.", width/2, height/2 + 15);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw42() {
    image(small, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Ah. I'm so weak. All it would take is one more punch to defeat me.", width/2, height - 50);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
  }

  function draw43() {
    image(small, 0, 0);

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
    text("him with the heel of her designer shoes.", width/2, height/2 + 30);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw44() {

  //KO SCREEN
      image(hstep, 0, 0);
      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
      fill(0, counter4);
      counter4 = counter4 - speed4;
      rect(width/2, height/2, width, height);
  }

  function draw45() {
    image(hstep, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike Al Sara has been defeated. You thank your new allies,", width/2, height/2 - 30);
    text("but you realize that your journey has only led to destruction.", width/2, height/2);
    text("You realize you will only bring chaos to your sister's quiet life.", width/2, height/2 + 30);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw46() {
    image(hstep, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You decide to head back home.", width/2, height/2);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw47() {
    //end scene of mc
    image(normal, 0, 0);
    arrowsprite.position.x = 685;
    arrowsprite.position.y = 685;
    fill(0, counter5);
    counter5 = counter5 - speed5;
    rect(width/2, height/2, width, height);

  }

  function draw48() {
    image(normal, 0, 0);

    stroke(15, 0, 100);
    strokeWeight(random(5,10));
    fill(100, 0);
    rect(width/2, height/2, width - 125, 205);
    stroke(50, 100, 70);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(30);
    text("NORMAL END", width/2, height/2);
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw49() {
    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;
    image(normal, 0, 0);

    stroke(15, 0, 100);
    strokeWeight(random(5,10));
    fill(100, 0);
    rect(width/2, height/2, width - 125, 205);
    stroke(50, 100, 70);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(30);
    text("NORMAL END", width/2, height/2);
    textSize(20);
    text("Play Again", width/2, height/2 + 50);
  }
}
