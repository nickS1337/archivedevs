function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(255);
  drawCircles(width/2, height/2, 300);
}

function drawCircles(x, y, d){
  
  stroke(0);
  noFill()
  //fill(random(0, 255))
  ellipse(x, y, d);
  
  if (d > 10){
    
    drawCircles(x+d/2, y, d/2);
    drawCircles(x-d/2, y, d/2);
    
    drawCircles(x, y+d/2, d/2);
    drawCircles(x, y-d/2, d/2);
    
    drawCircles(x+d/2, y+d/2, d/2);
    drawCircles(x-d/2, y-d/2, d/2)
    
    drawCircles(x+d/2, y-d/2, d/2);
    drawCircles(x-d/2, y+d/2, d/2)
    
  }
  
}
