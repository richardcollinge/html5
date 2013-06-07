// JavaScript Document
(function() {
	
	
var hitch = function() {
    this.message = 'hello';
};

var p = hitch.prototype = new createjs.Container(); // inherit from Container
p.Container_initialize = p.initialize;

p.initialize = function() {
	this.Container_initialize();
	

}//end p function




hitch.prototype.handleClick = function(e) {
    alert(this.message);
};
var obj = new hitch();
//var obj = new createjs.Bitmap("assets/touch_1.png");
	var text = new createjs.Text("Hello World!", "36px Arial", "#777");
	stage.addChild(text);
	//this.addChild(img);
console.log("hello?")	
	
$(this).hitch('click', obj.handleClick, obj);







window.hitch = hitch;
}());