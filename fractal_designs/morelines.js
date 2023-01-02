function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
  
    background(255);
  
    let x = width/2;
    let y = height/2;
    let d = ((width+height)/2)/2
    
    drawEllipse(x, y, d);
    
  }
  
  function drawEllipse(x, y, d){
    
    noFill();
    stroke(0);
    
    ellipse(x, y, d);
    
    //height of next ellipse 
    let d2 = d*0.6;
    let d3 = d*0.5;
    
    stroke(random(255))
    ellipse(x+d2, y, d2);
    ellipse(x-d2, y, d2);
  
    ellipse(x, y-d2, d2);
    ellipse(x, y+d2, d2);
    
    if (d > 10){
  
      drawEllipse(x+d3, y, d3);
      drawEllipse(x-d3, y, d3);
  
      drawEllipse(x, y-d3, d3);
      drawEllipse(x, y+d3, d3);
      
    }
    
  }