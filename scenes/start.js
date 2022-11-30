
var beginbtnanim, beginbtnsprite;
var helpbtnanim, helpbtnsprite;
var closebtnanim, closebtnsprite;
var camanim, camsprite;
var decanim, decsprite;
var decsprite2;
var rowanim1, rowanim2;
var row1sprite;
var row2sprite;
var row3sprite;
var row4sprite;
var ropeanim, ropesprite;

var shutter;
var choice;
var help;
var keyp;
var wells;

var bkImage;
var pdining;
var pattic;
var roshe;
var roshi;
var cfloor;
var brandi;
var shrek;
var angie;
var hennie;
var hennie2;
var lhand;
var rhand;
var mamara;
var mike;
var papa;
var bigcity;
var biggercity;
var store;
var store2;
var well;
var wellback;
var sky;
var c1;
var c2;
var c3;
var c4;
var c5;


function preload() {
  //images
  bkImage = loadImage('scenes/assets/images/Background.PNG');
  pdining = loadImage('scenes/assets/images/parents-dining.PNG');
  pattic = loadImage('scenes/assets/images/attic.PNG');
  brandi = loadImage('scenes/assets/images/brandi.PNG');
  roshe = loadImage('scenes/assets/images/rosh-exterior.PNG');
  roshi = loadImage('scenes/assets/images/rosh-interior.PNG');
  cfloor = loadImage('scenes/assets/images/floor.PNG');
  shrek = loadImage('scenes/assets/images/shrek.PNG');
  angie = loadImage('scenes/assets/images/angelino.PNG');
  hennie = loadImage('scenes/assets/images/hennie.PNG');
  hennie2 = loadImage('scenes/assets/images/hennie2.PNG');
  lhand = loadImage('scenes/assets/images/lhand.PNG');
  rhand = loadImage('scenes/assets/images/rhand.PNG');
  mamara = loadImage('scenes/assets/images/mamara.PNG');
  mamara2 = loadImage ('scenes/assets/images/mamara2.PNG');
  mamara3 = loadImage ('scenes/assets/images/mamara3.PNG');
  mc = loadImage ('scenes/assets/images/mc.PNG');
  zoku = loadImage ('scenes/assets/images/zoku.PNG');
  zoku2 = loadImage ('scenes/assets/images/zoku2.PNG');
  mike = loadImage('scenes/assets/images/mike.PNG');
  papa = loadImage('scenes/assets/images/camera.PNG');
  hen = loadImage('scenes/assets/images/hen.PNG');
  bigcity = loadImage('scenes/assets/images/bigcity.PNG');
  biggercity = loadImage('scenes/assets/images/biggercity.PNG');
  biggestcity = loadImage('scenes/assets/images/biggestcity.PNG');
  store = loadImage('scenes/assets/images/store.PNG');
  store2 = loadImage('scenes/assets/images/store2.PNG');
  well = loadImage('scenes/assets/images/well.PNG');
  wellm = loadImage('scenes/assets/images/wellm.PNG');
  wellback = loadImage('scenes/assets/images/wellback.PNG');
  cafe = loadImage('scenes/assets/images/cafe.PNG');
  table = loadImage('scenes/assets/images/table.PNG');
  sky = loadImage('scenes/assets/images/sky.png');
  c1 = loadImage('scenes/assets/images/cloud1.png');
  c2 = loadImage('scenes/assets/images/cloud2.png');
  c3 = loadImage('scenes/assets/images/cloud3.png');
  c4 = loadImage('scenes/assets/images/cloud4.png');
  c5 = loadImage('scenes/assets/images/cloud5.png');





  //sounds
  shutter = loadSound('scenes/assets/sounds/shutter.mp3');
  choice = loadSound('scenes/assets/sounds/choice.mp3');
  help = loadSound('scenes/assets/sounds/help.mp3');
  keyp = loadSound('scenes/assets/sounds/key.mp3');
  wells = loadSound('scenes/assets/sounds/well.mp3');


  //animations
  ropeanim = loadAnimation('scenes/assets/images/rope.PNG');
  ropesprite = createSprite(-500, 0);
  ropesprite.addAnimation('normal', ropeanim);
  beginbtnanim = loadAnimation('scenes/assets/animations/beginbtn_1.png', 'scenes/assets/animations/beginbtn_2.png', 'scenes/assets/animations/beginbtn_3.png');
  beginbtnsprite = createSprite(-500, 0);
  beginbtnsprite.addAnimation('normal', beginbtnanim);
  helpbtnanim = loadAnimation('scenes/assets/animations/helpbtn_1.png', 'scenes/assets/animations/helpbtn_2.png', 'scenes/assets/animations/helpbtn_3.png');
  helpbtnsprite = createSprite(-500, 0);
  helpbtnsprite.addAnimation('normal', helpbtnanim);
  closebtnanim = loadAnimation('scenes/assets/animations/closebtn_1.png', 'scenes/assets/animations/closebtn_2.png');
  closebtnsprite = createSprite(-500, 0);
  closebtnsprite.addAnimation('normal', closebtnanim);
  camanim = loadAnimation('scenes/assets/animations/lens_1.png', 'scenes/assets/animations/lens_2.png', 'scenes/assets/animations/lens_3.png', 'scenes/assets/animations/lens_4.png');
  camsprite = createSprite(-500, 0);
  camsprite.addAnimation('normal', camanim);
  decanim = loadAnimation('scenes/assets/animations/decbtn_1.png', 'scenes/assets/animations/decbtn_2.png');
  decsprite = createSprite(-500, 0);
  decsprite.addAnimation('normal', decanim);
  decsprite2 = createSprite(-500, 0);
  decsprite2.addAnimation('normal', decanim);
  rowanim1 = loadAnimation('scenes/assets/animations/grocery-shelves.PNG');
  rowanim2 = loadAnimation('scenes/assets/animations/grocery-shelves2.PNG');
  row1sprite = createSprite(-500, 0);
  row1sprite.addAnimation('normal', rowanim1);
  row2sprite = createSprite(-500, 0);
  row2sprite.addAnimation('normal', rowanim2);
  row3sprite = createSprite(-500, 0);
  row3sprite.addAnimation('normal', rowanim1);
  row4sprite = createSprite(-500, 0);
  row4sprite.addAnimation('normal', rowanim2);
  exit = loadAnimation('scenes/assets/images/exit.PNG');
  exitsprite = createSprite(-500, 0);
  exitsprite.addAnimation('normal', exit);
  cup = loadAnimation('scenes/assets/images/cup1.png', 'scenes/assets/images/cup2.png');
  cup1sprite = createSprite(-500, 0);
  cup1sprite.addAnimation('normal', cup);
  cup2sprite = createSprite(-500, 0);
  cup2sprite.addAnimation('normal', cup);
  cup3sprite = createSprite(-500, 0);
  cup3sprite.addAnimation('normal', cup);
  cup4sprite = createSprite(-500, 0);
  cup4sprite.addAnimation('normal', cup);
  cup5sprite = createSprite(-500, 0);
  cup5sprite.addAnimation('normal', cup);
  cup6sprite = createSprite(-500, 0);
  cup6sprite.addAnimation('normal', cup);

  // Super_sheet = loadSpriteSheet('scenes/assets/Supernova-sheet.png', 500, 500, 8);


}

var mgr;

function setup() {

    createCanvas(bkImage.width, bkImage.height);
    colorMode (HSB,100);

    mgr = new SceneManager();

    mgr.addScene (intro);
    mgr.addScene (scene1);
    mgr.addScene (scene2a);
    mgr.addScene (scene2b);
    mgr.addScene (scene3a);
    mgr.addScene (scene3ab);
    mgr.addScene (scene3b);
    mgr.addScene (scene3ba);
    mgr.addScene (scene4a);
    mgr.addScene (scene4ab);
    mgr.addScene (scene4ba);
    mgr.addScene (scene4b);
    mgr.addScene (scene5);
    mgr.addScene (minigame1);
    mgr.addScene (minigame2a);
    mgr.addScene (minigame2b);
    mgr.addScene (minigame3a);
    mgr.addScene (minigame3ab);
    mgr.addScene (minigame3b);
    mgr.addScene (minigame3ba);
    mgr.addScene (characterlog);
    mgr.addScene (helpmain);
    mgr.addScene (helpmain2a);
    mgr.addScene (helpmain2b);
    mgr.addScene (helpmain3a);
    mgr.addScene (helpmain3ab);
    mgr.addScene (helpmain3b);
    mgr.addScene (helpmain3ba);

    mgr.bkImage = bkImage;

    mgr.wire();
    mgr.showScene( minigame3a );

    beginbtnsprite.animation.stop();
    helpbtnsprite.animation.stop();
    closebtnsprite.animation.stop();
    camsprite.animation.stop();
    decsprite.animation.stop();
    decsprite2.animation.stop();
    row1sprite.animation.stop();
    row2sprite.animation.stop();
    row3sprite.animation.stop();
    row4sprite.animation.stop();
    exitsprite.animation.stop();
    cup1sprite.animation.stop();
    cup2sprite.animation.stop();
    cup3sprite.animation.stop();
    cup4sprite.animation.stop();
    cup5sprite.animation.stop();
    cup6sprite.animation.stop();


    shutter.stop();
    choice.stop();
    help.stop();
    keyp.stop();
    wells.stop();



}
