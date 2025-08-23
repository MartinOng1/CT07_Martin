let bird;

function preload() {
    let birdimg = loadImage('assets/yellowbird-midflap.png'); 
}

function setup() {
    new Canvas(400,600);
    bird = new Sprite();
    bird.x = 300;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.img = birdimg;
    bird.collider = "dynamic"
}
