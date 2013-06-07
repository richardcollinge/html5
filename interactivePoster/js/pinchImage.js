// JavaScript Document
(function(){
//self exec anon function	
  var pinchImage = function(make,model,color) {
  this.initialize(make,model,color);
}
var p = pinchImage.prototype = new createjs.Container(); // inherit from Container	


///public variables
pinchImage.prototype.mpg=30;	
	
//static variables created on the class itself
pinchImage.num_of_wheels=4;	



//create js stuff

p.Container_initialize = p.initialize;
p.initialize = function(make,model,color) {
	this.Container_initialize();
	

	this.make = make;
	var imageSRC= new createjs.Bitmap("assets/arrow.png");
	this.addChild(imageSRC);
	imageSRC.x=0
	imageSRC.y=0
console.log("added")
}//end p function
///end create js stuff


///this is a public method
pinchImage.prototype.startEngine = function(){
console.log(getDesc(this) + " engine started");	
}

///local function
function getDesc(context){
//return context.make +" " + context.model;	
//return context.getMake() +" " + context.getModel();	
}

window.pinchImage = pinchImage; //this allows the main window to see this class

///other functions go here
pinchImage.prototype.onClick = function() {
 console.log("this image is" +  this );	
}

//end self exec anon function	
}());

