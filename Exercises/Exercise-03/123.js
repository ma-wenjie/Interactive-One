var offset=0;
function setup(){
	createCanvas(600,600);
	background(random(0,255),random(0,255),random(255))
}

function draw(){
	var x = 0;

	while(x <= width/2){
	fill(random(0,255), random(0,255), random(255));
	ellipse(x,200,50,50);
	x = x+20;

	print(x);
	noStroke();

}

for( var a =0;  a <=width; a+=50){
	fill(a,a,a);
	ellipse(a+offset,400+offset,50+offset,50+offset);
	print(a);
}
	offset = offset+1;
}






//function setup(){
	createCanvas(1200,1200);

}
function draw(){

	background(255);

	for( var x=0; x<= mouseX; x+=50){
		for(var y=0; y<=mouseY; y+=50){
			fill(x, y, random(255));
			ellipse(x,y,50,50);
		}
		noStroke();
	}
}//