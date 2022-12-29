let angle=0;
let w = 36; //48
let magicangle;
let maxD;
function setup(){
    createCanvas(400, 400, WEBGL);
    magicangle = atan(1/sqrt(7));
    maxD = dist(0,0,5,5) //0,0,200,200
}

function draw(){
    background(50);

    ortho(-300,300,300,-300,0,1000);
    translate(10,0,-500)

    rotateX(QUARTER_PI);
    rotateY(magicangle*2)

    //rotateX(angle * 0.25)

    let offset = 0;
    for (let z=0; z<height; z+=w){
        for (let x=0; x<width; x+=w){
            push();
            let d = dist(x,z,width/2, height/3)
            let offset = map(d,0,maxD,-2,2)
            let a = angle+offset;
            let h = floor(map(sin(a), -1, 1, 100, 300));
            //fill(255);
            translate(x-width/2, 0, z-height/2)
            normalMaterial();
            box(w-3,h-2,w-9)
            //rect(x-width/2+w/2, 0, w-2, h);
            
            pop();
        }
    }
    
    angle+=0.04;  //speed

}