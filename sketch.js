var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibWF0aWxkZTE5OTciLCJhIjoiY2pvemtiem1kMDlhNjNsbnp4eWxkZW02YSJ9.ZCbFKk5S288CXX2Pf7UjMg');
var myImage;
var myImage2;
var click = 0;

var loveLat = 59.8939525
var loveLon = 10.6446897

var options = {
  lat:0,
  lng: 0,
  zoom: 4,
  style: 'mapbox://styles/matilde1997/cjozl70nd9a9q2ro4sywyq2e7',
  pitch: 50
}

function preload() {
  myLoc = getCurrentPosition();
  myImage = loadImage("./assets/500_F_223169826_NcmqjOfxHbQEggWmzWWTEv0g2waQFe5T.png");
  myImage2 = loadImage("./assets/kisspng-love-heart-love-heart-romance-clip-art-picture-of-red-heart-5aaeb7181ca327.7123730415213995761173.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  clear();

  var myText = 'Where is your partner? \n Click and find him/her'
  textAlign(CENTER);
  textSize(25);
  fill('white');
  text (myText, 200, 100);

  var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude)
  if (click == 1) {
    imageMode(CENTER);
    image(myImage, point.x, point.y, myImage.width / 10, myImage.height / 10);
  }

  var love = myMap.latLngToPixel(loveLat, loveLon)
    if(click == 1){
      imageMode(CENTER);
      image(myImage2, love.x, love.y, myImage.width / 9, myImage.height / 15);
    }
  }

function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    click = 1;
    console.log('ok')
  }
}
