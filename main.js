var img = "";
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(650,450);
    canvas.center();



}
function draw(){
    image(img,0,0,650,450);
    fill("#0303fc");
    text("Dog",45,75);
    noFill();
    stroke("#fc0303");
    rect(30,60,350,350);
}
