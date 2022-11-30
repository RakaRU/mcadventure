function scene3ab() {
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
      mgr.showScene(helpmain3ab);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You failed.", width/2, height/2 - 15);
    text("You couldn't pull Mamara out of the well.", width/2, height/2 + 15);


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
        s = 18;
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
        s = 18;
      };
    } else if (s == 18) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
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
          s = 46;
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
          s = 46;
        };
    } else if (s == 46) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
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
      mgr.showScene(minigame3ab);
    }

    drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(10);
    rect(width/2, height/2, width, height);


  }

  this.keyPressed = function() {
    keyp.play();
    s = s + 1;

  }

  function draw2() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Your arms give out and Mamara falls to the botttom of the", width/2, height/2 - 60);
    text("well once again. Shrecc decides to pick up the slack", width/2, height/2 - 30);
    text("and grabs hold of the rope. He yanks it", width/2, height/2);
    text("in one go and Mamara shoots out of the well and", width/2, height/2 + 30);
    text("lands on the grassy knoll.", width/2, height/2 + 60);
  }

  function draw3() {
    image(well, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
      text("Shrecc: Oh, would you look at that.", width/2, height - 50);
  }

  function draw4() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
      text("Mamara: Tha-aank yoouu...for saving me.", width/2, height - 65);
      text("What aaare your naaaames?", width/2, height - 35);
  }

  function draw5() {
    image(well, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
      text("Shrecc: Uh, Shrecc. And this is MC and Hennie.", width/2, height - 50);
  }

  function draw6() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
      text("Mamara: Hello, Shrecc. How can I p-possibly repaaay you?", width/2, height - 50);
  }

  function draw7() {
    image(well, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: My buddy here needs help finding his sister.", width/2, height - 50);
  }

  function draw8() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
      text("Mamara: Oh.", width/2, height - 50);
  }

  function draw9() {
    image(well, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: MC oppa was separated from his twin sister when he was", width/2, height - 65);
    text("young. His parents sold him to a rich family.", width/2, height - 35);
  }

  function draw10() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: That sooounds familiar. I heeaard many confessssions in the well...", width/2, height - 65);
    text("There waaas a g-girl 2 years ago, who was sold by her mooother.", width/2, height - 35);
  }

  function draw11() {
    image(well, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: That's the girl. Do you know where she is?", width/2, height - 50);

  }

  function draw12() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: I heeaard she was last in a place called", width/2, height - 65);
    text("Biggessst City.", width/2, height - 35);
  }

  function draw13() {
    image(well, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: I think that's a WEE BIT far.", width/2, height - 50);
  }

  function draw14() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: Her mom sooooold her to an international p-popstar. He was", width/2, height - 65);
    text("alssso a m-mafia bossss.", width/2, height - 35);
  }

  function draw15() {
    image(well, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: What kind of mother...", width/2, height - 50);
  }

  function draw16() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: It's still nooothing compared to my mooother.", width/2, height - 50);
  }

  function draw17() {
    image(well, 0, 0);

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
    text("Sorry to hear that.", width/2, height/2 + 50);
    text("We'll be on our way, then.", width/2, height/2);
  }

  function draw18() {
    image(well, 0, 0);

    image(mamara2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mamara: Gooood luck on your journeeey. I hope you f-find your sissster.", width/2, height - 65);
    text("I guessss I'll go-o start my neeew life.", width/2, height - 35);
  }

  function draw19() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("With new information, you set off for Biggest City.", width/2, height/2);
  }

  function draw20() {
    image(biggestcity, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You arrive in Biggest City", width/2, height/2 - 15);
    text("after a long day of travel.", width/2, height/2 + 15);

    fill(0, counter2);
    counter2 = counter2 - speed2;
    rect(width/2, height/2, width, height);
  }

  function draw21() {
    image(biggestcity, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: Now what?", width/2, height - 50);
  }

  function draw22() {
    image(cafe, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Your group decides to find the nearest cafe.", width/2, height/2);

    fill(0, counter2);
    counter2 = counter2 - speed2;
    rect(width/2, height/2, width, height);
  }

  function draw23() {
    image(cafe, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You take a bite of your potato burger salad and notice a", width/2, height/2 - 15);
    text("familiar face peering at you around the corner of the cafe.", width/2, height/2 + 15);
  }

  function draw24() {
    image(cafe, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Hey, MC. Isn't that your buddy from the store?", width/2, height - 50);
  }

  function draw25() {
    image(cafe, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: Who's that?", width/2, height - 50);
  }

  function draw26() {
    image(cafe, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: What's that in his hand?", width/2, height - 50);
  }

  function draw27() {
    image(cafe, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Your eyes widen. Your mind flashes back to the last time you", width/2, height/2 - 30);
    text("were near peanut butter. You blew up like a ballon.", width/2, height/2);
    text("How could he know? Your greatest weakness.", width/2, height/2 + 30);
  }

  function draw28() {
    image(cafe, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Peanut Butter?! He's got a peanut butter bomb!", width/2, height - 50);
  }

  function draw29() {
    image(cafe, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: It's just peanut butter.", width/2, height - 50);
  }

  function draw30() {
      image(cafe, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You get up to run and your friends follow.", width/2, height/2);
  }

  function draw31() {
      image(store, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You run into an abandoned building and find yourself", width/2, height/2 - 15);
      text("at a party?", width/2, height/2 + 15);

      fill(0, counter2);
      counter2 = counter2 - speed2;
      rect(width/2, height/2, width, height);
  }

  function draw32() {
      image(store, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Your friends turn to you in confusion.", width/2, height/2 - 15);
      text("You also don't have answers.", width/2, height/2 + 15);
  }

  function draw33() {
    image(store, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Looks like we lost him eh', MC?", width/2, height - 50);
  }

  function draw34() {
      image(store, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You start making your way further into the building. It's crowded", width/2, height/2 - 15);
      text("and you accidentally bump shoulders with someone.", width/2, height/2 + 15);
  }

  function draw35() {
    image(store, 0, 0);

    image(zoku, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: Hey, watch it.", width/2, height - 50);
  }

  function draw36() {
    image(store, 0, 0);

    image(mc, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("MC: Sorry.", width/2, height - 50);
  }

  function draw37() {
    image(store, 0, 0);

    image(zoku, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: I mean. My bad.", width/2, height - 50);
  }

  function draw38() {
    image(store, 0, 0);

    image(mc, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("MC: It's fine.", width/2, height - 50);
  }

  function draw39() {
    image(store, 0, 0);

    image(shrek, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Shrecc: Hey, mac. What is this place?", width/2, height - 50);
  }

  function draw40() {
    image(store, 0, 0);

    image(zoku, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: You don't know? It's a party. My party.", width/2, height - 50);
  }

  function draw41() {
    image(store, 0, 0);

    image(hennie, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Hennie: And who are you?", width/2, height - 50);
  }

  function draw42() {
    image(store, 0, 0);

    image(zoku2, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: Zoku here. Prince of Beer Pong.", width/2, height - 50);
  }

  function draw43() {
    image(store, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: There you are!", width/2, height - 50);
  }

  function draw44() {
    image(store, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: MC, I've been following you this whole time.", width/2, height - 50);
  }

  function draw45() {
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
    text("Why?", width/2, height/2);
    text("...", width/2, height/2 + 50);
  }

  function draw46() {
    image(store, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Don't play dumb. I know you know I know.", width/2, height - 50);
  }

  function draw47() {
    image(store, 0, 0);

    image(mc, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("MC: What do I know?", width/2, height - 50);
  }

  function draw48() {
    image(store, 0, 0);

    image(mike, 0 , 400, 200, 200);
    image(zoku2, 500, 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Zoku: Friends, why don't we settle this rivalry with a", width/2, height - 65);
    text("good game of beer pong.", width/2, height - 35);
  }

  function draw49() {
    image(store, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Good idea. You vs. me, MC. One on one.", width/2, height - 50);
  }

  function draw50() {
    image(store, 0, 0);

    image(mike, 0 , 400, 200, 200);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height - 50, width, 100);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Mike: Get ready to eat dirt, MC.", width/2, height - 65);
    text("And stop looking at my hair. I know it's getting shaggy.", width/2, height - 35);
  }

  function draw51() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(5);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You are now entering a mini-game.", width/2, height/2);
  }

  function draw52() {
    fill(0);
    noStroke();
    rect(width/2, height/2, width, height);
  }
}
