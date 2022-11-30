function minigame2a() {
  var counter = 100;
  var speed = .5;
  var cw = 40;
  var ch = 23;
  var cy = 330;
  var cysuccess;
  var lhy = 540;
  var rhy = 440;
  var hy = 570;
  var hychange = 30;
  var s = 1;
  var go = 190;
  let s2 = 1;
  var snum;
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

    ropesprite.onMousePressed = function() { this.animation.goToFrame(0);};
    ropesprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = s + 1;

      if (strength > 35 && strength < 45 + goal/s) {
        wells.play();
        cy = cy + 74;
        cw = cw * 2;
        ch = ch * 2;
      }

    };

  }

  this.draw = function() {
    rectMode(CORNER);
    image(wellback, 0, 0);
    snum = map(s, 1, 8, 8, 1);

    stroke(50, 100, 70);
    strokeWeight(8);
    fill(100);
    rect(65, 250, width - 130, 200);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Help Mamara escape from the well.", width/2, height/2 - 45);
    text("Use your mouse to click on the rope when the strength", width/2, height/2 - 15);
    text("line is in the green section of the strength meter.", width/2, height/2 + 15);
    text("You'll have 8 chances to pull Mamara up.", width/2, height/2 + 45);
    //
    // Click the rope when", width/2, height/2 + 25);
    // text("the strength line is in the", width/2, height/2 + 60);
    // text("green section of the strength", width/2, height/2 + 95);
    // text("meter. You'll have 8 chances", width/2, height/2 + 130);
    // text("to pull Mamara up.

    if (s2 == 2) {
      ropesprite.position.x = width/2 - 20;
      ropesprite.position.y = height/2;
      image(wellback, 0, 0);
      fill(100, 80);
      stroke(0);
      strokeWeight(2);
      rect(610, 40, 50, 620);

      fill(40, 100, 100);
      rect(610, 40, 50, goal/s);

      fill(0);
      rect(610, strength, 50, 20);
      strength = strength + sspeed;

      if (strength > 640 || strength < 40) {
        sspeed = - sspeed;
      }

      drawSprites();

      rmMamara();
      rmHands();

      fill(100);
      noStroke();
      rect(40, 560, 150, 100);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Chances left:", 115, 590);
      textSize(30);
      if (s < 9) {
          text(snum, 115, 625);
      }
    }

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(0, 0, width, height);

    if (s == 9) {
      ropesprite.position.x = -500;
      ropesprite.position.y = 0;
      if (cy > 640) {
        keyp.play();
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        mgr.showScene(scene3a);
      } else {
        keyp.play();
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        mgr.showScene(scene3ab);
      }
    }

    if (cy > 640) {
      keyp.play();
      helpbtnsprite.position.x = -500;
      helpbtnsprite.position.y = 0;
      mgr.showScene(scene3a);
    }
  }

  this.keyPressed = function() {
      keyp.play();
      if (s2 < 2) {
        s2 = s2 + 1;
      }
      // s = s + 1;

      if (s2 == 2) {
        s2 = s2;
      }
  }

  this.mousePressed = function() {
    if (lhy === 540) {
      lhy = 440;
    } else {
      lhy = 540;
    }

    if (rhy === 440) {
      rhy = 540;
    } else {
      rhy = 440;
    }
  }

  function rmMamara() {
    image(mamara, width/2 - 20, cy, cw, ch);
  }

  function rmHands() {
    image(lhand, width/2 - 130, lhy);
    image(rhand, width/2 - 90, rhy);


  }

}

function minigame2b() {
  var counter = 100;
  var speed = .5;
  var cw = 40;
  var ch = 23;
  var cy = 330;
  var cysuccess;
  var lhy = 540;
  var rhy = 440;
  var hy = 570;
  var hychange = 30;
  var s = 1;
  var go = 190;
  let s2 = 1;
  var snum;
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

    ropesprite.onMousePressed = function() { this.animation.goToFrame(0);};
    ropesprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = s + 1;

      if (strength > 35 && strength < 45 + goal/s) {
        wells.play();
        cy = cy + 74;
        cw = cw * 2;
        ch = ch * 2;
      }

    };

  }

  this.draw = function() {
    rectMode(CORNER);
    image(wellback, 0, 0);
    snum = map(s, 1, 8, 8, 1);

    stroke(50, 100, 70);
    strokeWeight(8);
    fill(100);
    rect(65, 250, width - 130, 200);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Help Mamara escape from the well.", width/2, height/2 - 45);
    text("Use your mouse to click on the rope when the strength", width/2, height/2 - 15);
    text("line is in the green section of the strength meter.", width/2, height/2 + 15);
    text("You'll have 8 chances to pull Mamara up.", width/2, height/2 + 45);
    //
    // Click the rope when", width/2, height/2 + 25);
    // text("the strength line is in the", width/2, height/2 + 60);
    // text("green section of the strength", width/2, height/2 + 95);
    // text("meter. You'll have 8 chances", width/2, height/2 + 130);
    // text("to pull Mamara up.

    if (s2 == 2) {
      ropesprite.position.x = width/2 - 20;
      ropesprite.position.y = height/2;
      image(wellback, 0, 0);
      fill(100, 80);
      stroke(0);
      strokeWeight(2);
      rect(610, 40, 50, 620);

      fill(40, 100, 100);
      rect(610, 40, 50, goal/s);

      fill(0);
      rect(610, strength, 50, 20);
      strength = strength + sspeed;

      if (strength > 640 || strength < 40) {
        sspeed = - sspeed;
      }

      drawSprites();

      rmMamara();
      rmHands();

      fill(100);
      noStroke();
      rect(40, 560, 150, 100);

      textAlign(CENTER, CENTER);
      fill(50, 100, 70);
      textSize(20);
      text("Chances left:", 115, 590);
      textSize(30);
      if (s < 9) {
          text(snum, 115, 625);
      }
    }

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(0, 0, width, height);

    if (s == 9) {
      ropesprite.position.x = -500;
      ropesprite.position.y = 0;
      if (cy > 640) {
        keyp.play();
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        mgr.showScene(scene3ba);
      } else {
        keyp.play();
        helpbtnsprite.position.x = -500;
        helpbtnsprite.position.y = 0;
        mgr.showScene(scene3b);
      }
    }

    if (cy > 640) {
      keyp.play();
      ropesprite.position.x = -500;
      ropesprite.position.y = 0;
      helpbtnsprite.position.x = -500;
      helpbtnsprite.position.y = 0;
      mgr.showScene(scene3ba);
    }
  }

  this.keyPressed = function() {
      keyp.play();
      if (s2 < 2) {
        s2 = s2 + 1;
      }
      // s = s + 1;

      if (s2 == 2) {
        s2 = s2;
      }
  }

  this.mousePressed = function() {
    if (lhy === 540) {
      lhy = 440;
    } else {
      lhy = 540;
    }

    if (rhy === 440) {
      rhy = 540;
    } else {
      rhy = 440;
    }
  }

  function rmMamara() {
    image(mamara, width/2 - 20, cy, cw, ch);
  }

  function rmHands() {
    image(lhand, width/2 - 130, lhy);
    image(rhand, width/2 - 90, rhy);


  }

}
