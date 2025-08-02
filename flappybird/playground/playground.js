let bird, floor;
let flapMidImg, bg, base;

function preload() {
    flapMidImg = loadImage('assets/yellowbird-midflap.png');
    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');
}

function setup() {
    new Canvas(400, 600);


    bird = new Sprite(width/2, 200, 30, 30, 'dynamic');
    bird.img = flapMidImg;
}

function draw() {

}