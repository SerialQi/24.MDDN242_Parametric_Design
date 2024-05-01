/* these are optional special variables which will change the system */
// var systemBackgroundColor = "#ffc8b6";

var systemLineColor = "#577a90";
var systemBoxColor = "#C73869";

/* internal constants */
const orange  = "#f7803f";
//const strokeColor  = "#0a2d27";
const blue = color("#577a90")
const yellow  = color("#f7da30")



/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


//angleMode(DEGREES)

function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  strokeWeight(4);

  // determine parameters for second circle
  //first circle 
  let size = letterData["circle1size"];
  let orangex = 50  + letterData["circle1x"]; //circle1x
  let orangey = 150 + letterData["circle1y"]; //circle1y
  let colorVariability1 = letterData["lerpColorAmt1"]

  //second circle 
  let circle2Size = letterData["circle2size"];
  let circle2x = 50  + letterData["circle2x"];
  let circle2y = 150 + letterData["circle2y"];
  let colorVariability2 = letterData["lerpColorAmt2"]

  //rectangle 1
  let rect1Width = letterData["rect1Width"];
  let rect1Height = letterData["rect1Height"];
  let rect1x = letterData["rect1x"];
  let rect1y = letterData["rect1y"];

  //rectangle 2/3
  let rect2Size = letterData["rect2Size"];
  let rect3Size = letterData["rect3Size"];
  
  //triangle 
  let triangle1Size = letterData["triangle1Size"]
  let triangle1x = letterData["triangle1x"]
  let triangle1y = letterData["triangle1y"]
   
  //triangle 2
  let triangle2Size = letterData["triangle2Size"]
  let triangle2x = 55
  let triangle2y = 130
   
  //color
  let myBlue = color("#577a90")
  let myYellow = color("#f7da30")
  let myOrange = color ("#f7803f")

  //let fillOY = lerpColor( myOrange,myYellow,0)
  let fill1 = lerpColor( myYellow,myOrange,colorVariability1)
  let fill2 = lerpColor( myBlue,myYellow,colorVariability2)
  
 //circle 1
  fill(fill1);
  ellipse(orangex, orangey, size, size);

   // circle 2
   fill("#577a90");
   ellipse(circle2x, circle2y, circle2Size, circle2Size);

   
//triangle
  fill(orange)
    push();
    translate(triangle1x, triangle1y);
    rotate(letterData["rotationAngle"]); 
    triangle(-triangle1Size / 2, 0, triangle1Size / 2, 0, 0, triangle1Size/2); //THIS TRIANGLE CODE IS USED AI TO HELP.
    pop();
 // triangle(30, 75, 58, 50, 86, 75);

   ////triangle 2
   fill("#f7da30")
    push();
    translate(triangle2x, triangle2y);
    rotate(letterData["rotationAngle2"]); 
    triangle(-triangle2Size / 2, 0, triangle2Size / 2, 0, 0, triangle2Size/2);
    pop(); 
   
//rectangle 1
  fill(fill2);
  rect(rect1x, rect1y, rect1Width, rect1Height)

  //rectangle 2/3
  fill("#f7803f");
  rect(20,63,rect2Size,15)
  fill("#577a90");
  rect(37,100,rect3Size,15)


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["circle1size"] = map(percent, 0, 100, oldObj["circle1size"], newObj["circle1size"]);
  new_letter["circle1x"] = map(percent, 0, 100, oldObj["circle1x"], newObj["circle1x"]);
  new_letter["circle1y"] = map(percent, 0, 100, oldObj["circle1y"], newObj["circle1y"]);
  new_letter["circle2size"] = map(percent, 0, 100, oldObj["circle2size"], newObj["circle2size"]);
  new_letter["circle2x"] = map(percent, 0, 100, oldObj["circle2x"], newObj["circle2x"]);
  new_letter["circle2y"] = map(percent, 0, 100, oldObj["circle2y"], newObj["circle2y"]);
  new_letter["rect1Width"] = map(percent, 0, 100, oldObj["rect1Width"], newObj["rect1Width"]);
  new_letter["rect1Height"] = map(percent, 0, 100, oldObj["rect1Height"], newObj["rect1Height"]);
  new_letter["rect1x"] = map(percent, 0, 100, oldObj["rect1x"], newObj["rect1x"]);
  new_letter["rect1y"] = map(percent, 0, 100, oldObj["rect1y"], newObj["rect1y"]);
  new_letter["triangle1Size"] = map(percent, 0, 100, oldObj["triangle1Size"], newObj["triangle1Size"]);
  new_letter["triangle1x"] = map(percent, 0, 100, oldObj["triangle1x"], newObj["triangle1x"]);
  new_letter["triangle1y"] = map(percent, 0, 100, oldObj["triangle1y"], newObj["triangle1y"]);
  new_letter["rotationAngle"] = map(percent, 0, 100, oldObj["rotationAngle"], newObj["rotationAngle"]);
  new_letter["rect2Size"] = map(percent, 0, 100, oldObj["rect2Size"], newObj["rect2Size"]);
  new_letter["triangle2Size"] = map(percent, 0, 100, oldObj["triangle2Size"], newObj["triangle2Size"]);
  //new_letter["triangle2x"] = map(percent, 0, 100, oldObj["triangle2x"], newObj["triangle2x"]);
  //new_letter["triangle2y"] = map(percent, 0, 100, oldObj["triangle2y"], newObj["triangle2y"]);
  new_letter["rotationAngle2"] = map(percent, 0, 100, oldObj["rotationAngle2"], newObj["rotationAngle2"]);
  return new_letter;

}
var swapWords = [
  "CONTRAST",
  "PROGRAMS",
  "1234567?"
]
