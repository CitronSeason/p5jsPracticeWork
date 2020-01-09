

function setup(){
    createCanvas(windowWidth-20, windowHeight-20);
}

function draw(){
    background(205);

    DD = new Date();
    Hours = toDoubleDigits(DD.getHours());
    Minutes = toDoubleDigits(DD.getMinutes());
    textSize(330);
    textAlign(CENTER);
    text(Hours + ':' + Minutes , windowWidth/2,windowHeight/2)
    //ellipse(100,100,80,50);

}

var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;     
}