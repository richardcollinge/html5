// JavaScript Document
(function() {
	
//var obj = new hitchClass();
	
var hitchClass = function() {
	this.initialize();
    this.message = 'hello';
};

var p = hitchClass.prototype = new createjs.Container(); // inherit from Container
p.Container_initialize = p.initialize;

p.initialize = function() {
	this.Container_initialize();
	console.log("hello?")	

	var text = new createjs.Text("Hello World!", "36px Arial", "#000");
	this.addChild(text);
    //var obj = new hitchClass();
	//var obj=this;
	
	
///test this must be class contained


this.doOtherWork = function()
 {
 alert('worky');
 };


//////////////////////////////
	
	
}//end p function

 var me = this;
 $(p).bind('click', function() {
 // p.doOtherWork();
  alert('worky');
 });


//$(this).hitch('click', obj.handleClick, obj);


//hitchClass.prototype.handleClick = function(e) {
 //   alert(this.message);
//};





window.hitchClass = hitchClass;
}());