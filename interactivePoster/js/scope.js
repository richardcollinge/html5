// JavaScript Document
(function(window){
//self exec anon function	
	
///public variables
scope.prototype.mpg=30;	
	
//static variables created on the class itself
scope.num_of_wheels=4;	
	
function scope(make,model,color){
//this is the constructor
//public properties
this.make = make;
this.model=model;
this.color=color;

//private vars
var _make=make;
var _model=model;
var _color=color;

///create a getter for private vars
this.getMake = function(){return _make};//getter
this.getModel = function(){return _model};//getter
}//end constructor

///this is a public method
scope.prototype.startEngine = function(){
console.log(getDesc(this) + " engine started");	
}

///local function
function getDesc(context){
//return context.make +" " + context.model;	
return context.getMake() +" " + context.getModel();	
}

window.scope = scope; //this allows the main window to see this class



//end self exec anon function	
}(window));