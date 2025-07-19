function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  // Basic shape testing
  // write your codes here
  fill("skyblue");
  stroke("pink")
  // End Basic shape testing

   // Create a bouncing ball sprite
  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 40;
  ball.color = 'blue';
  ball.vel.x = 3;
  ball.vel.y = 3;
  ball.bounciness = 1;
  ball.collider = "dynamic";
   // write your codes here

}

function draw() {
  // write your codes here
}