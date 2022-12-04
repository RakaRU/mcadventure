function minigame1() {
  var playerx = 20;
  var playery = 20;
  var pspeedx = 0;
  var pspeedy = 0;
  var pap = 350;
  var papspeed = 2;
  // var pap = 800;
  // var papspeed = 0;
  var aim = 450;
  var aspeed = 3;
  var snackx = 0;
  var snacky = 700;
  var sspeedx = 3;
  var sspeedy = 2;

  var counter = 100;
  var speed = .5;

  let s = 1;

  this.setup = function() {

  }

  this.enter = function() {
    closebtnsprite.position.x = -500;
    closebtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    row1sprite.position.x = -200;
    row1sprite.position.y = 130;
    row2sprite.position.x = -290;
    row2sprite.position.y = 570;
    row3sprite.position.x = -380;
    row3sprite.position.y = 130;
    row4sprite.position.x = -470;
    row4sprite.position.y = 570;
    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    exitsprite.position.x = -500;
    exitsprite.position.y = 0;

    arrowsprite.position.x = 620;
    arrowsprite.position.y = 435;

    arrowsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    arrowsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    arrowsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      s = s + 1;
    };

  }

  this.draw = function() {
    rectMode(CENTER);
    image(cfloor, 0, 0);


    stroke(50, 100, 70);
    strokeWeight(8);
    fill(100);
    rect(width/2, height/2, width - 130, 200);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(50, 100, 70);
    textSize(20);
    text("Help Hennie escape from the paparazzi.", width/2, height/2 - 45);
    text("Use your arrow keys to move around the store.", width/2, height/2 - 15);
    text("Hide behind the shelves, as you make your way", width/2, height/2 + 15);
    text("to the exit.", width/2, height/2 + 45);


    if (s == 2) {
      arrowsprite.position.x = -620;
      arrowsprite.position.y = 435;

      row1sprite.position.x = 160;
      row1sprite.position.y = 130;
      row2sprite.position.x = 230;
      row2sprite.position.y = 570;
      row3sprite.position.x = 400;
      row3sprite.position.y = 130;
      row4sprite.position.x = 470;
      row4sprite.position.y = 570;
      exitsprite.position.x = 600;
      exitsprite.position.y = 340;
      image(cfloor, 0, 0);
      rmPaparazzi();
      rmPlayer();
    }


    if (pap > 10 && pap < 630) {
      if (playerx > 460) {
        row1sprite.position.x = -500;
        row1sprite.position.y = 0;
        row2sprite.position.x = -500;
        row2sprite.position.y = 0;
        row3sprite.position.x = -500;
        row3sprite.position.y = 0;
        row4sprite.position.x = -500;
        row4sprite.position.y = 0;
        exitsprite.position.x = -500;
        exitsprite.position.y = 0;
        rectMode(CENTER);
        fill(0, 50);
        rect(width/2, width/2, width, height);
        // keyp.play();
        mgr.showScene(scene2b);
      } else if (playery > 190 && playery < 390) {
        row1sprite.position.x = -500;
        row1sprite.position.y = 0;
        row2sprite.position.x = -500;
        row2sprite.position.y = 0;
        row3sprite.position.x = -500;
        row3sprite.position.y = 0;
        row4sprite.position.x = -500;
        row4sprite.position.y = 0;
        exitsprite.position.x = -500;
        exitsprite.position.y = 0;
        rectMode(CENTER);
        fill(0, 50);
        rect(width/2, width/2, width, height);
        // keyp.play();
        mgr.showScene(scene2b);
      }

    }

    if (playery < 310 && playery > 270) {
      if (playerx > 620 && playerx < 660){
        row1sprite.position.x = -500;
        row1sprite.position.y = 0;
        row2sprite.position.x = -500;
        row2sprite.position.y = 0;
        row3sprite.position.x = -500;
        row3sprite.position.y = 0;
        row4sprite.position.x = -500;
        row4sprite.position.y = 0;
        exitsprite.position.x = -500;
        exitsprite.position.y = 0;
        rectMode(CENTER);
        fill(0, 50);
        rect(width/2, width/2, width, height);
        // keyp.play();
        mgr.showScene(scene2a);
      }
    }


    drawSprites();

    fill(0, counter);
    counter = counter - speed;
    stroke(100);
    strokeWeight(random(5, 10));
    rect(width/2, height/2, width, height);
  }

  function rmPlayer() {
    noStroke();
    image(hen, playerx, playery);

    playerx = playerx + pspeedx;
    playery = playery + pspeedy;
    pspeedx = 0;
    pspeedy = 0;
    if (keyIsDown(RIGHT_ARROW)) {
      pspeedx = 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
      pspeedx = -2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      pspeedy = 2;
    }
    if (keyIsDown(UP_ARROW)) {
      pspeedy = -2;
    }

    if (playerx < 0) {
      pspeedx = 0;
      if (keyIsDown(RIGHT_ARROW)) {
        pspeedx = 2;
      }
    }

    if (playerx > 630) {
      pspeedx = 0;
      if (keyIsDown(LEFT_ARROW)) {
        pspeedx = -2;
      }
    }

    if (playery < 0) {
      pspeedy = 0;
      if (keyIsDown(DOWN_ARROW)) {
        pspeedy = 2;
      }
    }

    if (playery > 580) {
      pspeedy = 0;
      if (keyIsDown(UP_ARROW)) {
        pspeedy = -2;
      }
    }

    if (playerx > 50 && playerx < 221) {
      if (playery === 260) {
        pspeedy = 0;
        if (keyIsDown(DOWN_ARROW)) {
          pspeedy = 2;
        }
      }
    }

    if (playerx > 290 && playerx < 461) {
      if (playery === 260) {
        pspeedy = 0;
        if (keyIsDown(DOWN_ARROW)) {
          pspeedy = 2;
        }
      }
    }

    if (playery > -200 && playery < 250) {
      if (playerx === 50) {
        if (pspeedx = 2) {
          pspeedx = 0;
          if (keyIsDown(LEFT_ARROW)) {
            pspeedx = -2;
          }
        }
      }
      if (playerx === 220) {
        if (pspeedx = -2) {
          pspeedx = 0;
          if (keyIsDown(RIGHT_ARROW)) {
            pspeedx = 2;
          }
        }
      }
      if (playerx === 290) {
        if (pspeedx = 2) {
          pspeedx = 0;
          if (keyIsDown(LEFT_ARROW)) {
            pspeedx = -2;
          }
        }
      }
      if (playerx === 460) {
        if (pspeedx = -2) {
          pspeedx = 0;
          if (keyIsDown(RIGHT_ARROW)) {
            pspeedx = 2;
          }
        }
      }
    }

    if (playerx > 99 && playerx < 271) {
      if (playery === 350) {
        pspeedy = 0;
        if (keyIsDown(UP_ARROW)) {
          pspeedy = -2;
        }
      }
    }
    if (playerx > 339 && playerx < 511) {
      if (playery === 350) {
        pspeedy = 0;
        if (keyIsDown(UP_ARROW)) {
          pspeedy = -2;
        }
      }
    }

    if (playery < 700 && playery > 360) {
      if (playerx === 100) {
        if (pspeedx = 2) {
          pspeedx = 0;
          if (keyIsDown(LEFT_ARROW)) {
            pspeedx = -2;
          }
        }
      }
      if (playerx === 270) {
        if (pspeedx = -2) {
          pspeedx = 0;
          if (keyIsDown(RIGHT_ARROW)) {
            pspeedx = 2;
          }
        }
      }
      if (playerx === 340) {
        if (pspeedx = 2) {
          pspeedx = 0;
          if (keyIsDown(LEFT_ARROW)) {
            pspeedx = -2;
          }
        }
      }
      if (playerx === 510) {
        if (pspeedx = -2) {
          pspeedx = 0;
          if (keyIsDown(RIGHT_ARROW)) {
            pspeedx = 2;
          }
        }
      }
    }
  }

  function rmPaparazzi() {
    noStroke();
    image(papa, 520, pap);

    pap = pap + papspeed;
    if (pap > 900 || pap < -300) {
      papspeed = -papspeed;
    }
  }

}
