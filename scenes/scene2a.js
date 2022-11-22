function scene2a() {
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
      mgr.showScene(helpmain2a);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    stroke(50, 100, 70);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You succeeded.", width/2, height/2 - 15);
    text("The paparazzi didn't spot Hennie.", width/2, height/2 + 15);


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
      decsprite.position.x = width/2 - 170;
      decsprite.position.y = height/2;
      decsprite2.position.x = width/2 - 140;
      decsprite2.position.y = height/2 + 50;

      draw10();

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
        s = 11;
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
        s = 11;
      };
    }  else if (s == 11) {
      decsprite.position.x = -500;
      decsprite.position.y = 0;
      decsprite2.position.x = -500;
      decsprite2.position.y = 0;
      draw11();
    }  else if (s == 12) {
      draw12();
    } else if (s == 13) {
      draw13();
    } else if (s == 14) {
      draw14();
      mgr.showScene(minigame2a);
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
    s = s + 1;

  }

  function draw2() {
      image(store, 0, 0);

      image(shrek, 300, 20, 400, 560);
      image(hennie, -100, 120, 400, 400);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Thank you so much for your help, MC oppa. I'd love to help", width/2, height - 107);
      text("you look for your sister. Is that alright with you two?", width/2, height - 83);

      fill(0, counter2);
      counter2 = counter2 - speed2;
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw3() {
      image(store, 0, 0);

      image(shrek, 300, 20, 400, 560);
      image(hennie, -100, 120, 400, 400);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Shrek: Of course.", width/2, height - 95);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw4() {
      image(store, 0, 0);

      image(shrek, 300, 20, 400, 560);
      image(hennie, -100, 120, 400, 400);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Hennie: Really?", width/2, height - 95);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw5() {
      image(store, 0, 0);

      image(shrek, 300, 20, 400, 560);
      image(hennie, -100, 120, 400, 400);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Shrecc: NO.", width/2, height - 95);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw6() {
      image(store, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Your new ally has joined you.", width/2, height/2 - 15);
      text("With new information, you set off for Bigger City.", width/2, height/2 + 15);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw7() {
      image(biggercity, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You arrive in Bigger City the next morning.", width/2, height/2);


      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);

      fill(0, counter3);
      counter3 = counter3 - speed3;
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw8() {
      image(biggercity, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("You, Shrecc, and Hennie split up and search all over the city.", width/2, height/2 - 15);
      text("It's much larger than any other place you've been to.", width/2, height/2 + 15);


      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw9() {
      image(well, 0, 0);

      stroke(50, 100, 70);
      strokeWeight(2);
      fill(100);
      rect(width/2, height/2, width - 130, 200);

      textAlign(CENTER, CENTER);
      noStroke();
      fill(50, 100, 70);
      textSize(20);
      text("Eventually, you wind up at a park. You hear the echo of a voice.", width/2, height/2 - 15);
      text("You spot a well nearby and walk towards it.", width/2, height/2 + 15);

      fill(0, counter4);
      counter4 = counter4 - speed4;
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw10() {
      image(well, 0, 0);

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
      text("Hello? Is someone there?", width/2, height/2);
      text("...", width/2, height/2 + 50);


      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw11() {
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
      image(well, 0, 0);

      noStroke();
      fill(100);
      rect(width/2, height - 95, width, 190);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Mamara Sorgan: HELP ME. MY NAME IS MAMARA SORGAN AND", width/2, height - 107);
      text("I'M TRAPPED IN THIS WELL.", width/2, height - 83);

      fill(0, 0);
      stroke(100);
      strokeWeight(random(5, 10));
      rect(width/2, height/2, width, height);
  }

  function draw12() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You notice an old rope by the well", width/2, height/2);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw13() {
    image(well, 0, 0);

    stroke(50, 100, 70);
    strokeWeight(2);
    fill(100);
    rect(width/2, height/2, width - 130, 200);

    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("You are now entering a mini-game.", width/2, height/2);

    fill(0, 0);
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function draw14() {
    fill(0);
    noStroke();
    rect(width/2, height/2, width, height);
  }
}
