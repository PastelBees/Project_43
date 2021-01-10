var hr
var mn 
var sc 

var scAngle
var mnAngle
var hrAngle

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(0);  
  

  hr = hour()
  mn = minute()
  sc = second()
  
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

 
  



  drawSprites();
  push()
  angleMode(DEGREES);
  translate(scAngle.x=400, scAngle.y=220);
  rotate(scAngle-87)
  stroke(255,0,0)
  strokeWeight(7)
  line(100,0,0,0)
  
  pop()
  noFill()
  stroke(255,0,0)
  strokeWeight(9)
  arc(400, 220,300, 300, -87,scAngle-87);

  

  push()
  translate(mnAngle.x=400, mnAngle.y=220);
  rotate(mnAngle-87)
  stroke(0,255,0)
  strokeWeight(7)
  angleMode(DEGREES);
  line(80,0,0,0)
  pop()
  noFill()
  stroke(0,255,0)
  strokeWeight(9)
  arc(400, 220,280, 280, -87,mnAngle-87);
  

  push()
  translate(hrAngle.x=400, hrAngle.y=220);
  rotate(hrAngle-87)
  stroke(0,0,255)
  strokeWeight(7)
  angleMode(DEGREES);
  line(60,0,0,0)
  pop()
  noFill()
  stroke(0,0,255)
  strokeWeight(9)
  arc(400, 220,260, 260, -87,hrAngle-87);
  
}