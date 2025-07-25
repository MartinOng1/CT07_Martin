let ball; 
let box;

function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  // Basic shape testing
  // write your codes here
  // fill("skyblue");
  // stroke("pink");
  // strokeWeight(10);

  // circle(30, 30, 50);
  // rect(50, 50, 100, 200);
  // End Basic shape testing

   // Create a bouncing ball sprite
  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 40;
  ball.color = 'blue';
  ball.vel.x = 10;
  ball.vel.y = 10;
  ball.bounciness = 1;
  ball.collider = "dynamic";
   // write your codes here
  box = new Sprite();
  box.x = 100;
  box.y = 100;
  box.w = 50;
  box.h = 50;
  box.color = 'green';

}

function draw() {
  // write your codes here
  background(240);
  fill(0);
  textSize(16);
  text("Ball: (" + int(ball.x) + " , " + int(ball.y) + ") ", 18, 20);
  text("Mouse: (" + int(mouseX) + " , " + int(mouseY) + ") ", 18, 40);
  if (ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diameter / 2) {
    ball.vel.x *= -1;
  }
  if (ball.y < 0 + ball.diameter / 2 || ball.y > height - ball.diameter / 2) {
    ball.vel.y *= -1;
  }
  box.x = mouseX;
  box.y = mouseY;
}