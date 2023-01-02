function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    
    background(255);
    
    //Initial size of the first line
    let h = 100;
    
    drawLine(width/2, height-100, width/2, height-100-h, h)
    
  }
  
  function drawLine(x1, y1, x2, y2, h){
    
    stroke(0);
    strokeWeight(1);
    noFill();
    
    //Draw a line based on the given coordinates.
    //Then, draw two more located to the top left and right of it.
    line(x1, y1, x2, y2);
    
    //The new height/length of the continuing line
    let h2 = h*0.8;
    
    //line(x2, y2, x2-h2, y2-h2);
    //line(x2, y2, x2+h2, y2-h2);
    
    //Only continue recursion if h is larger than 10 (pixels):
    if (h > 10){
      drawLine(x2, y2, x2-h2, y2-h2, h2);
      drawLine(x2, y2, x2+h2, y2-h2, h2);
    }
    
  }