function helpmain() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene1);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain2a() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene2a);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain2b() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene2b);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain3a() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene3a);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain3ab() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene3ab);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain3b() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene3b);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain3ba() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene3ba);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain4a() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene4a);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain4ab() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene4ab);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain4b() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene4b);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain4ba() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene4ba);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}

function helpmain5() {

  this.setup = function() {

  }

  this.enter = function() {

    helpbtnsprite.position.x = -500;
    helpbtnsprite.position.y = 0;
    decsprite.position.x = -500;
    decsprite.position.y = 0;
    decsprite2.position.x = -500;
    decsprite2.position.y = 0;
    arrowsprite.position.x = -500;
    arrowsprite.position.y = 400;

    closebtnsprite.position.x = 170;
    closebtnsprite.position.y = 180;
    closebtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    closebtnsprite.onMousePressed = function() { this.animation.goToFrame(1);};
    closebtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      closebtnsprite.position.x = -500;
      closebtnsprite.position.y = 60;
      image(mgr.bkImage, 0, 0);
      // help.play();
      mgr.showScene(scene5);
    };
  }

  this.draw = function() {
    rectMode(CENTER);

    fill(100);
    noStroke();
    rect(width/2, height/2, 420, 400, 20);

    textAlign(CENTER, CENTER);
    fill(50, 100, 70);
    textSize(40);
    text("Help", width/2, height/2 - 110);
    textSize(30);
    text("Click on the blue triangle", width/2, height/2 - 45);
    text("in the bottom right corner", width/2, height/2 - 10);
    text("of the text box to progress", width/2, height/2 + 25);
    text("through the narrative.", width/2, height/2 + 60);

    drawSprites();
  }
}
