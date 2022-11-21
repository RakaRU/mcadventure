function minigame1() {
  var playerx = 20;
  var playery = 100;
  var pspeedx = 0;
  var pspeedx2 = 0;
  var pspeedy = 0;
  var pspeedy2 = 0;
  var pap = 350;
  var papspeed = 2;
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
    camsprite.position.x = -500;
    camsprite.position.y = 0;
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

    row2sprite.onMousePressed = function() {
        pspeedx = 1;
        pspeedy = 4;
    };
    row2sprite.onMouseReleased = function() {
        pspeedx = 0;
        pspeedy = 0;
        shutter.play();
    };

    row3sprite.onMousePressed = function() {
        pspeedx = 2;
        pspeedy = -4;
    };
    row3sprite.onMouseReleased = function() {
        pspeedx = 0;
        pspeedy = 0;
        shutter.play();
    };

    row4sprite.onMousePressed = function() {
        pspeedx = 1;
        pspeedy = 4;
    };
    row4sprite.onMouseReleased = function() {
        pspeedx = 0;
        pspeedy = 0;
        shutter.play();
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
    text("Use your mouse to click on the store shelves to hide ", width/2, height/2 - 15);
    text("behind them. If you're not hidden behind a shelf when", width/2, height/2 + 15);
    text("the camera is in frame, you'll lose.", width/2, height/2 + 45);

    if (s == 2) {
      row1sprite.position.x = 160;
      row1sprite.position.y = 130;
      row2sprite.position.x = 230;
      row2sprite.position.y = 570;
      row3sprite.position.x = 400;
      row3sprite.position.y = 130;
      row4sprite.position.x = 470;
      row4sprite.position.y = 570;
      image(cfloor, 0, 0);
      rmPaparazzi();
      rmPlayer();
    }

    if (pap > 20 && pap < 630) {
      if (playery > 200 && playery < 400) {
        rectMode(CENTER);
        fill(0, 50);
        rect(width/2, width/2, width, height);
        keyp.play();
        mgr.showScene(scene2b);
      }
    }

    if (playerx > 300 && playery > 460) {
      row1sprite.position.x = -500;
      row1sprite.position.y = 0;
      row2sprite.position.x = -500;
      row2sprite.position.y = 0;
      row3sprite.position.x = -500;
      row3sprite.position.y = 0;
      row4sprite.position.x = -500;
      row4sprite.position.y = 0;
      rectMode(CENTER);
      fill(0, 50);
      rect(width/2, width/2, width, height);
      keyp.play();
      mgr.showScene(scene2a);
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
    if (s < 2) {
      s = s + 1;
    }
    // s = s + 1;

    if (s == 2) {
      s = s;
    }
  }

  function rmPlayer() {
    noStroke();
    // rect(playerx, playery, 60, 60);
    image(hen, playerx, playery);


    playerx = playerx + pspeedx;
    playery = playery + pspeedy;
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
