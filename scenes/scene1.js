function scene1() {
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
  var counter6 = 100;
  var speed6 = .5;
  var counter7 = 100;
  var speed7 = .5;
  var counter8 = 100;
  var speed8 = .5;
  var value = 100;
  var value2 = 100;
  let s = 1;


  this.setup =  function() {
    image(mgr.bkImage, 0, 0);

  }

  this.enter = function() {
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
      mgr.showScene(helpmain);
    };
  }

  this.draw = function() {
    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
    rectMode(CENTER);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hello, Traveler. Are you ready to step into the shoes of MC", width/2, height/2 - 60);
    text("and become the main character. Embark on a quest filled", width/2, height/2 -30);
    text("journey to find the truth about your origins? Complete the", width/2, height/2);
    text("mini-games and make friends along the way to influence your", width/2, height/2 + 30);
    text("ending. Let's see where MC is right now...", width/2, height/2 + 60);


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
        // choice.play();
        s = 16;
      };
    } else if (s == 16) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      draw16();
    } else if (s == 17) {
      draw17();
    } else if (s == 18) {
      draw18();
    } else if (s == 19) {
      draw19();
    } else if (s == 20) {
      draw20();
    } else if (s == 21) {
      draw21();
    } else if (s == 22) {
      draw22();
    } else if (s == 23) {
      draw23();
    } else if (s == 24) {
      decsprite.position.x = width/2 - 170;
      decsprite.position.y = height/2;
      decsprite2.position.x = width/2 - 140;
      decsprite2.position.y = height/2 + 50;

      draw24();

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
        s = 25;
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
        s = 25;
      };
    } else if (s == 25) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      draw25();
    } else if (s == 26) {
      draw26();
    } else if (s == 27) {
      draw27();
    } else if (s == 28) {
      decsprite.position.x = width/2 - 170;
      decsprite.position.y = height/2;
      decsprite2.position.x = width/2 - 140;
      decsprite2.position.y = height/2 + 50;

      draw28();

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
        s = 29;
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
        s = 29;
      };
    } else if (s == 29) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
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
      decsprite.position.x = width/2 - 170;
      decsprite.position.y = height/2;

      decsprite2.position.x = width/2 - 140;
      decsprite2.position.y = height/2 + 50;

      draw43();

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
        s = 44;
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
        s = 44;
      };
    } else if (s == 44) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      draw44();
    } else if (s == 45) {
      draw45();
    } else if (s == 46) {
      draw46();
    } else if (s == 47) {
      draw47();
    } else if (s == 48) {
      draw48();
    } else if (s == 49) {
      draw49();
    } else if (s == 50) {
      draw50();
    } else if (s == 51) {
      draw51();
    } else if (s == 52) {
      draw52();
    } else if (s == 53) {
      decsprite.position.x = width/2 - 170;
      decsprite.position.y = height/2;

      decsprite2.position.x = width/2 - 140;
      decsprite2.position.y = height/2 + 50;

      draw53();

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
        s = 54;
      };

      decsprite2.onMouseOver = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseOut = function() { this.animation.goToFrame(0);};
      decsprite2.onMousePressed = function() { this.animation.goToFrame(1);};
      decsprite2.onMouseReleased = function() {
        this.animation.goToFrame(0)
        decsprite.position.x = -500;
        decsprite.position.y = 0;
        decsprite2.position.x = -500;
        decsprite2.position.y = 0;
        // choice.play();
        s = 54;
      };
    } else if (s == 54) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      draw54();
    } else if (s == 55) {
      draw55();
    } else if (s == 56) {
      draw56();
    } else if (s == 57) {
      draw57();
    } else if (s == 58) {
      draw58();
      mgr.showScene(minigame1);
    }

    drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(10);
    rect(width/2, height/2, width, height);


  }

  // this.keyPressed = function() {
  //   keyp.play();
  //   s = s + 1;
  //
  // }

  function draw2() {
      image(pdining, 0, 0);

      image(angie, 0, 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Angelino Joley: Good day, birth son.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      fill(0, counter2);
      counter2 = counter2 - speed2;
      rect(width/2, height/2, width, height);
  }

  function draw3() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Brandi Pytt: Birth son, thanks for coming by for lunch. Did you say you", width/2, height - 65);
      text("wanted to pick up a few of your things to take to your apartment earlier?", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw4() {
      image(pdining, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You nod.", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;

  }

  function draw5() {
      image(pdining, 0, 0);

      image(angie, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Angelino Joley: I put all of your boxes in the attic, birth son. Go ahead and", width/2, height - 65);
      text("grab what you need.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw6() {
      image(pattic, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You look around the attic. You pick up one of the boxes", width/2, height/2 - 13);
      text("and notice a small paper trapped between the floorboards.", width/2, height/2 + 13);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;

      fill(0, counter3);
      counter3 = counter3 - speed3;
      rect(width/2, height/2, width, height);
  }

  function draw7() {
      image(pattic, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("It's a photograph of two children: a boy and a girl. The", width/2, height/2 - 39);
      text("resemblance between the two is uncanny. You recognize", width/2, height/2 - 13);
      text("yourself as the boy, but you have no idea who the girl is.", width/2, height/2 + 13);
      text("You go back downstairs to confront your parents.", width/2, height/2 + 39);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;
  }

  function draw8() {
      image(pdining, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You hold the photo up for Angelino and Brandi to see.", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;

      fill(0, counter4);
      counter4 = counter4 - speed4;
      rect(width/2, height/2, width, height);
  }

  function draw9() {
      image(pdining, 0, 0);

      image(mc, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      fill(100);
      strokeWeight(5);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("MC: What is this?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw10() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);
      image(angie, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Brandi: I don't know what you're talking about. Where did you", width/2, height - 65);
      text("find that, birth son?", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw11() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);
      image(angie, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      noStroke();
      textSize(20);
      text("Angelino: We have to tell him the truth, Brandi. It's time.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw12() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);
      image(angie, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Brandi: This may come as a surprise but you are not our birth son.", width/2, height - 65);
      text(" We saw an ad for you on Craigscatalog.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw13() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);
      image(angie, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Angelino: Your parents were selling you to fund their music careers.", width/2, height - 65);
      text("We're so sorry we never told you, adopted son.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw14() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);
      image(angie, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Brandi: We just wanted to give you a happy life. The girl in the photo is", width/2, height - 65);
      text("your twin sister. We met your parents in Big City for the trade off years ago.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw15() {
    arrowsprite.position.x = -670;
    arrowsprite.position.y = 670;
      image(pdining, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("What do you say?", width/2, height/2 - 60);

      textSize(16);
      text("I can't believe you kept this from me!", width/2, height/2);
      text("I need to be alone right now.", width/2, height/2 + 50);

  }

  function draw16() {
      image(pdining, 0, 0);

      image(brandi, 0 , 400, 200, 200);
      image(angie, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Angelino: You have every right to be angry with us right now.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw17() {
    image(pdining, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You leave your parents' house.", width/2, height/2);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

  }

  function draw18() {
    image(roshi, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("It's been one day since you found out the news. You're", width/2, height/2 - 30);
    text("at your job right now, working the cash register at", width/2, height/2);
    text("Rosh (Dresh for Lesh). Your best friend walks up to you.", width/2, height/2 + 30);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

    fill(0, counter5);
    counter5 = counter5 - speed5;
    rect(width/2, height/2, width, height);
  }

  function draw19() {
      image(roshi, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: Workin' hard or hardly workin', eh, MC?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw20() {
      image(roshi, 0, 0);

      image(mc, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("MC: ...", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw21() {
      image(roshi, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: What's on your mind, MC?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw22() {
    image(roshi, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You tell Shrecc everything.", width/2, height/2);

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;
  }

  function draw23() {
      image(roshi, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: Your birth parents sound like real donkeys.", width/2, height - 65);
      text("What are you gonna do now?", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw24() {
    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;

      image(roshi, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("What do you say?", width/2, height/2 - 60);

      textSize(16);
      text("I don't know yet.", width/2, height/2);
      text("Nothing.", width/2, height/2 + 50);


  }

  function draw25() {
      image(roshi, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: It's time to pack up your toothbrush and jammies. You've", width/2, height - 65);
      text("got a sister to find.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw26() {
      image(roshi, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Your manager, Mike Al Sara, walks up to you.", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;
  }

  function draw27() {
      image(roshi, 0, 0);

      image(mike, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike Al Sara: Hey, newbie. I need you to come in early tomorrow because", width/2, height - 65);
      text("I have to get a haircut. I'm afraid my hair is getting kinda shaggy.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw28() {
    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;

      image(roshi, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("What do you say?", width/2, height/2 - 60);

      textSize(16);
      text("I can't.", width/2, height/2);
      text("I quit.", width/2, height/2 + 50);

  }

  function draw29() {
      image(roshi, 0, 0);

      image(mike, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike Al Sara: What? Why?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw30() {
      image(roshi, 0, 0);

      image(mc, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("MC: I found something out recently, and I'm shockd at this terrible", width/2, height - 65);
      text("situation. I can't be here anymore, knowing what I know.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw31() {
      image(roshi, 0, 0);

      image(mike, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike Al Sara: (nervously) What do you know?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw32() {
      image(roshi, 0, 0);

      image(mc, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("MC: Too much.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw33() {
      image(roshi, 0, 0);

      image(mike, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike Al Sara: ...", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw34() {
      image(roshi, 0, 0);

      image(mc, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("MC: Anyway, I have to leave immediately. Sorry about the haircut.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw35() {
      image(roshi, 0, 0);

      image(mike, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Mike Al Sara: So it is getting shaggy? *fear in eyes*", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw36() {
      image(roshe, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: That must be Mika Al Sara's car. Gee, you think", width/2, height - 65);
      text("he's compensating for something?", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

      fill(0, counter8);
      counter8 = counter8 - speed8;
      rect(width/2, height/2, width, height);
  }

  function draw37() {
      image(roshe, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: Anyway, where are we headed to first to find your sister?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw38() {
      image(roshe, 0, 0);

      image(mc, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("MC: Big City", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw39() {
      image(roshe, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You set off for Big City", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;

  }

  function draw40() {
      image(bigcity, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You arrive in Big City in the evening.", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;

      fill(0, counter6);
      counter6 = counter6 - speed6;
      rect(width/2, height/2, width, height);
  }

  function draw41() {
      image(bigcity, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: Let's stop at this convenience store for food. I'm so hungry I could", width/2, height - 65);
      text("squeeze the jelly out of your eyes. It's actually really good on toast.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw42() {
      image(store2, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You enter the convenience store", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;

      fill(0, counter7);
      counter7 = counter7 - speed7;
      rect(width/2, height/2, width, height);
  }

  function draw43() {
    arrowsprite.position.x = -685;
    arrowsprite.position.y = 685;

      image(store2, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Which aisle do you choose?", width/2, height/2 - 60);

      textSize(16);
      text("Candy aisle.", width/2, height/2);
      text("Chips aisle.", width/2, height/2 + 50);
  }

  function draw44() {
      image(store2, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You walk down the aisle and run into a young woman.", width/2, height/2 - 25);
      text("She hides behind a pair of sunglasses. She's indoors, and", width/2, height/2);
      text("the sun isn't even out. She's famous.", width/2, height/2 + 25);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;
  }

  function draw45() {
      image(store2, 0, 0);

      image(shrek, 0 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: Oh, would you look at that. It's the famous kpop star, Hennie.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw46() {
      image(store2, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc appears behind her. Hennie shushes him.", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;
  }

  function draw47() {
      image(store2, 0, 0);

      image(hennie2, 0, 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Would you please keep it down? I'll take a photo", width/2, height - 65);
      text("with you if you want, just don't tell anyone I'm here.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;

  }

  function draw48() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: We don't care about you, lady.", width/2, height - 65);
      text("We're just looking for his sister.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw49() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Do you need any help? How old is she?", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw50() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: She is the same age as MC, over here. Long story short, his", width/2, height - 65);
      text("parents sold him to strangers, and now he wants to meet his twin sister.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw51() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Wow. You know I heard a story on the news about a year ago", width/2, height - 65);
      text("about a woman who was arrested in Bigger City for selling her children.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw52() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: That could be a lead, MC.", width/2, height - 50);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw53() {
    arrowsprite.position.x = -685;
    arrowsprite.position.y = 685;

      image(store2, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("What do you say?", width/2, height/2 - 60);

      textSize(16);
      text("You're right, Shrecc.", width/2, height/2);
      text("Thank you, Hennie.", width/2, height/2 + 50);
  }

  function draw54() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: That was almost too easy. Someday, we will repay you,", width/2, height - 65);
      text("Hennie. Unless, of course, we can't find you, or if we forget.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw55() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Now's your chance. They're here.", width/2, height - 65);
      text("The paparazzi found me.", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw56() {
      image(store2, 0, 0);

      image(hennie2, 0 , 400, 200, 200);
      image(shrek, 500 , 400, 200, 200);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height - 50, width, 100);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: Not sure if now is the right time, but have I ever told you:", width/2, height - 65);
      text("ogres are like onions?", width/2, height - 35);

      arrowsprite.position.x = 685;
      arrowsprite.position.y = 685;
  }

  function draw57() {
      image(store2, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(5);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You are now entering a mini-game:", width/2, height/2);

      arrowsprite.position.x = 620;
      arrowsprite.position.y = 435;
  }

  function draw58() {
    fill(0);
    noStroke();
    rect(width/2, height/2, width, height);

    arrowsprite.position.x = -620;
    arrowsprite.position.y = 435;
  }

}
