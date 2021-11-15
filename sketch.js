var r=0; var l=0; var i=0; var time=0; var time2=0;
var c=0; var t=l*l; var s=0; var q=0; var v;
var x=l*20+20; var y=l*20+20;

function setup() {
  createCanvas(x,y);
  background(255);
  fill(220);
  square(0,0,l*20+20);
  fill(255,10,50);
  triangle(l*20+20,l*20+20,l*20+20,l*20,l*20,l*20+20);
}

function draw() {
  mouseMoved();
}

function mouseMoved() {
  c=0; //reset square count
  l=round((mouseX+mouseY)/40); //side length
  t=l*l; //total number of squares
  i=t/60; //total number of squares 't' divided by 60
  j=t/60000; //60000 milleseconds in a minute
  x=l*20+20; //horizontal length
  y=l*20+20; //vertical length
  let s=second();
  let z=millis(); //z needs to wait till second changes to start
  q=z%1000;
  v=z%60000;
  //time=s*1000+q; // computer based time - not as smooth (opt 1)
  time=v; // (opt2)
  //if (time<time2 && s!=0) time=time2+5; //prevents jumping backwards (opt 1)
  resizeCanvas(x,y);
  clear();
  fill(255); //fill canvas bg
  square(0,0,l*20+20);
  fill(120); //fill triangle
  if (mouseX<l*20+20||mouseY<l*20+20) triangle(l*20+20,l*20+20,l*20+20,l*20,l*20,l*20+20); //prevents triangle from hitting square
  else triangle(mouseX,mouseY,mouseX,mouseY-20,mouseX-20,mouseY);
  fill(0); //fill passed time
  r=0; //row (starts at 0)
  for (let n=1;n<=l;n++) {
    c=c+1; //count squares
    if (time*j<=c) fill(random(255),random(255),random(255));
    square(n*20-20,r,20);
    if (n%l==0 && ((l-1)*20)!=r) {
      r=r+20;
      n=0;
    }
  }
  //time2=time; //prevents jumping backwards (opt 1)
  return false;
}
