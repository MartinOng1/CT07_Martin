function setup() {
  // write your codes here
  createCanvas(800, 400);
  background(250);
  textSize(16);
  fill(0);  
  // --- Exercise: Area of Triangle ---
  // write your codes here
  let b = 5;
  let h = 6;
  let area = 0.5 * b * h;
  console.log("Area: "+ area);
  text(area, 400, 200);
  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here
  // for (let i = 1; i <=10; i++) {
  //   console.log(i);
  // }
  // for (let j = 10; j <=20; j++) {
  //   console.log(j);
  // }
  // for (let k = 20; k >=1; k--) {
  //   console.log(k);
  // }
  // for (let l = 3; l <=46; l+=3) {
  //   console.log(l);
  // }
  let sum = 0;
  for (let i = 0; i <= 20; i+=2) {
    sum += i
  }
  console.log(sum);
  text(sum, 400, 100);
  // --- Exercise: Age category classification ---
  // write your codes here
  let age = 14;
  if (age <= 9) {
    console.log("lower primary");
  } else if (age <= 12) {
    console.log("upper primary");
  } else {
    console.log("secondary school");
  }
  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here
  let i = 19;
  while (i >= 1) {
    console.log(i);
    i-=2;
  }
  // --- Exercise: Array operations (groceries) ---
  // write your codes here
  let list = ["apple", "bread", "milk"];
  list.push("orange");
  list.push("butter");
  list.shift();
  list.splice(1, 1, "kaya");
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
    text(list[i], 250+100*i, 300)
  }

}
function draw() {
  // noStroke();
  // fill(255, 0, 0);
  // ellipse(100, 100, 80, 50);
  // fill(0, 255, 0);
  // circle(200, 200, 30);
  // fill(0, 0, 255);
  // rect(30, 30, 55, 50);
  // noFill();
  // stroke(255, 0, 0);
  // triangle(30, 75, 58, 20, 86, 75);
  // noFill();
  // stroke(0, 0, 255);
  // quad(50, 162, 86, 150, 50, 138, 14, 150);
}
