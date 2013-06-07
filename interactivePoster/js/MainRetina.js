// JavaScript Document

var stage, holder, textureBG, circs, logo, btn1,fullWindowState,wrapper,fullScreenBtn, containerMC,  containerMC2,lastContainer, content, globalPage, globalPageType, introVideo, canvasJ, ctx, fpsLabel, mask, soundBtn,loaderBar, loaderStage, bar ;
var pageNum=0;
   
		
		
		function initMain() {
			//initXML();
			window.onorientationchange = readDeviceOrientation;

			canvas = document.getElementById("demoCanvas");
			wrapper = document.getElementById("wrapper");
            stage = new createjs.Stage(canvas);
			createjs.Touch.enable(stage);
			stage.enableMouseOver(10);
            stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
			stage.mouseEventsEnabled = true;
         
			init();			
		}
		
	
/*function initXML(){
$.ajax({
type: "GET",
crossDomain: false, //edit du 25/01 : cette propriété doit être passée à false. 
url: "data.xml",
dataType: "xml",
success: initMenu	
});
}

this.initMenu = function(data)
{
myMenu = new DockMenu(data, 40, 80);
myMenu.x = 350;
myMenu.y = 0;
stage.addChild(myMenu);
stage.update();
}*/

		function updateStaticNav(){
		stage.addChild(logo)
		stage.addChild(fullScreenBtn);
		stage.update();
       
		}

		function update(){
stage.addChild()

		}
		
function initFirstPage(){

			containerMC = new createjs.Container();
			textureBG= containerMC.addChild(new image(0,0,"assets/tex.png", true,0,true));
			textureBG.scaleX=2;
			textureBG.scaleY=2;
			circs= containerMC.addChild(new image(5,46,"assets/RetinaAssets/screen1_r1_c1.png",true,1,false));
		
           btn1 = containerMC.addChild(new Button("next","", "#F00", "assets/RetinaAssets/touch_3.png", 800,300,true,3, 125,125));
			stage.addChild(containerMC);
			updateStaticNav();
			
			fpsLabel = new createjs.Text("-- fps","bold 14px Arial","#000");
stage.addChild(fpsLabel);
fpsLabel.x = 100;
fpsLabel.y = 20;
createjs.Ticker.setFPS(60);
createjs.Ticker.addListener(window);
stage.update();//updates the stage	

			
}



		

///go to next page
function goNextPage(){
	pageNum+=1
	console.log("next page");
	animNextPage();
	lastContainer = containerMC
	TweenLite.to(lastContainer, .5, {x:-960, onComplete:removeLastPage});
	updateStaticNav();
}

function animNextPage(){
	containerMC2 = new createjs.Container();
	//containerMC2.addChild(textureBG);
	textureBG= containerMC2.addChild(new image(0,0,"assets/tex.png", false,0,true));
	stage.addChild(containerMC2);
	containerMC2.x=960;
	TweenLite.to(containerMC2, .5, {x:0, onComplete:loadMenu});
}

function removeLastPage(){
	console.log("remove last page");
//stage.removeChild(containerMC);
stage.removeChild(lastContainer	);

}

function loadMenu(){
//containerMC2	
btn1 = containerMC2.addChild(new Button("back","", "#F00", "assets/touch_l1_c1.png", 70,300,true,1, 125,125));

var circ1= containerMC2.addChild(new circleClass(480,100,"Abstract",0, "page"));
var circ2= containerMC2.addChild(new circleClass(650,225,"Play a video",0, "video"));
var circ3= containerMC2.addChild(new circleClass(585,420,"Scrolling",0, "scroll"));
var circ4= containerMC2.addChild(new circleClass(375,420,"Pinch",0, "pinch"));
var circ5= containerMC2.addChild(new circleClass(310,225,"Sound",0, "sound"));
}

function goPrevPage(){
	pageNum-=1
	console.log("prev page");
	animPrevPage();
	lastContainer = containerMC2
	TweenLite.to(lastContainer, .5, {x:960, onComplete:removeLastPage});
	updateStaticNav();
}

function animPrevPage(){
	containerMC = new createjs.Container();
	//containerMC2.addChild(textureBG);
	textureBG= containerMC.addChild(new image(0,0,"assets/tex.png", false,0,true));
	stage.addChild(containerMC);
	containerMC.x=-960;
	TweenLite.to(containerMC, .5, {x:0, onComplete:initFirstPage});
}

function animDown(title, pageType){
	//var title = this.title;
	pageNum+=1
	console.log("anim down" + title + pageType);
	containerMC = new createjs.Container();
	//containerMC2.addChild(textureBG);
	textureBG= containerMC.addChild(new image(0,0,"assets/tex.png", false,0,true));
	stage.addChild(containerMC);
	containerMC.y=540;
	globalPage=title;
	globalPageType=pageType;
	TweenLite.to(containerMC, .5, {y:0, delay:1, onComplete:loadPage});
	
	lastContainer = containerMC2; //
	TweenLite.to(lastContainer, .5, {y:-540, delay:1, onComplete:removeLastPage});
	updateStaticNav();
	
}

function loadPage(page){
var homeBut = containerMC.addChild(new Button("backUp","", "#F00", "assets/RetinaAssets/homeIcon.png", 900,70,true,1, 58,58));
homeBut.scaleX=.5;
homeBut.scaleY=.5;
if(globalPageType=="page"){
initText();
}

if(globalPageType=="scroll"){
initScroll();
}

if(globalPageType=="video"){
initVideo();
}

if(globalPageType=="pinch"){
initPinch();
}

if(globalPageType=="sound"){
initSound();
}

}

function initText(){

var pageBg= containerMC.addChild(new image(100,100,"assets/paper-texture-2.png", true,1.5,false));

		content = new createjs.DOMElement(globalPage);
		stage.addChild(content);

		content.x=170;
		content.y=100;
		content.alpha=0;
		TweenLite.to(content, .5, {alpha:1, delay:2});

}

function initVideo(){

		content = new createjs.DOMElement(globalPage);
		introVideo =  document.getElementById("video1");
		console.log("introVideo" + introVideo);
        var bitmapVid =  new createjs.Bitmap(introVideo);
        stage.addChild(content);
		content.x=170;
		content.y=100;
		content.alpha=0;
		TweenLite.to(content, .5, {alpha:1, delay:2});

}

function initScroll(){
var pageBg= containerMC.addChild(new image(100,100,"assets/paper-texture-1.png", true,1.5,false));

		content = new createjs.DOMElement(globalPage);
		introVideo =  document.getElementById("video1");
		console.log("introVideo" + introVideo);
        var bitmapVid =  new createjs.Bitmap(introVideo);
        stage.addChild(content);
		content.x=170;
		content.y=130;
		content.alpha=0;
		TweenLite.to(content, .5, {alpha:1, delay:2});

}

function initPinch(){
var pinchImg= containerMC.addChild(new pinchImage(185,185,"assets/touch_3.png", true,1.5,true));
}

function initSound(){
var pageBg= containerMC.addChild(new image(100,100,"assets/paper-texture-3.png", true,1.5,false));
var soundBtn = containerMC.addChild(new Button("openGraph","", "#F00", "assets/touch_r3_c3.png", 700,400,true,1, 81,102));

content = new createjs.DOMElement(globalPage);
		stage.addChild(content);

		content.x=170;
		content.y=100;
		content.alpha=0;
		TweenLite.to(content, .5, {alpha:1, delay:2});

}

function openGraph(){
content.alpha=0;
mask= stage.addChild(new image(0,0,"assets/mask.png", true,0,false));
soundBtn =  stage.addChild(new Button("closeGraph","", "#F00", "assets/touch_r3_c3.png", 700,100,true,1, 81,102));
	
}

function closeGraph(){
TweenLite.to(content, .5, {alpha:1, delay:1});
TweenLite.to([mask,soundBtn], .5, {alpha:0, onComplete:removeSoundElements});
}

function removeSoundElements(){
	console.log("sound elements removed");
stage.removeChild(mask,soundBtn);	
}

function goBackUp(){
	if(globalPageType=="video"){
	introVideo.pause();	
	}
	
	pageNum-=1
    console.log("anim up" + content);
	containerMC2 = new createjs.Container();
	if(content!=null){
	content.y=-500;
	}
	//stage.removeChild(content);
	textureBG= containerMC2.addChild(new image(0,0,"assets/tex.png", false,0,true));
	stage.addChild(containerMC2);
	containerMC2.y=-540;
	TweenLite.to(containerMC2, .5, {y:0, onComplete:loadMenu});
	
	
  
	lastContainer = containerMC; //
	TweenLite.to(lastContainer, .5, {y:540, onComplete:removeLastPage});	
	updateStaticNav();
	
	// stage.update();
}



///full screen function
		function fullWindow(e) {
			if (!fullWindowState) {
				fullWindowState = true;
				// Canvas goes full screen
				canvas.className = "canvasFullWindow";
				wrapper.className = "wrapperFullWindow";
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}else{
				fullWindowState = false;
				//canvas goes normal
				canvas.width = 960;
				canvas.height = 540;
				canvas.className = "canvasNormal";
				wrapper.className = "wrapperNormal";
			}
		}
		


/////////swipe functions
  $(this).swipe( {
					swipeStatus:function(event, phase, direction, distance, duration, fingers)
					{
						var str = "<h4>Swipe Phase : " + phase + "<br/>";
						str += "Direction from inital touch: " + direction + "<br/>";
						str += "Distance from inital touch: " + distance + "<br/>";
						str += "Duration of swipe: " + duration + "<br/>";
						str += "Fingers used: " + fingers + "<br/></h4>";
										
						if (phase!="cancel" && phase!="end")
						{
							if (duration<5000)
								str +="Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>"
							else
								str +="Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>"
						
							if (distance<200)
								str +="Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>"
							else
								str +="Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>"
										
					
					
								
						}
						
						if (phase=="cancel")
							str +="<br/>Handler not triggered. <br/> One or both of the thresholds was not met "
						if (phase=="end"){
							str +="<br/>Handler was triggered."	
								         ///
		                        console.log(direction + pageNum)
								if(direction=="left" &&pageNum==0){
								goNextPage()
								}
								if(direction=="right" && pageNum>0 && pageNum<2){
									goPrevPage()
								}
								//if(direction=="down" && pageNum==1){
								//	animDown();//need to get title var from here
								//}
								if(direction=="down" && pageNum>=2){
									goBackUp()
								}
								direction=null//reset direction var
						////
						}
						
		
						
					},
					threshold:200,
					maxTimeThreshold:5000,
					fingers:'all'
				});
		

//document.addEventListener( 'visibilitychange', onVisibilityChange, false);
	
///performance functions
function onVisibilityChange() {
	console.log("tabbed");
if( document.hidden && !introVideo.paused ){ 
introVideo.pause(); 
}else if( introVideo.paused ){ 
introVideo.play(); 
} 
}

///jquery workaround for oop
(function($) {
    $.fn.hitch = function(ev, fn, scope) {
        return this.bind(ev, function() {
            return fn.apply(scope || this, Array.prototype.slice.call(arguments));
        });
    };
})(jQuery);


function tick() {
	
	 if (update) {
                stage.update();
            }
	fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS())+" fps";
	// draw the updates to stage
	stage.addChild(fpsLabel);

}


//////////////classes///////////////////////
///image class
(function() {

var image = function(thisX, thisY, asset,fade,delay,swipeable) {
  this.initialize(thisX, thisY, asset,fade,delay,swipeable);
}
var p = image.prototype = new createjs.Container(); // inherit from Container

	
p.thisX;
p.thisY;
p.asset;
p.fade;
p.delay;
p.swipeable;

p.Container_initialize = p.initialize;

p.initialize = function(thisX, thisY, asset, fade, delay,swipeable) {
	this.Container_initialize();
    

	this.asset = asset;
	var _asset=asset;
	this.delay=delay;
	this.fade=fade;
	this.swipeable = swipeable;
	this.getAsset = function(){return _asset};//getter
	var imageSRC= new createjs.Bitmap(asset);
	
	
	
    imageSRC.name=asset;
	this.addChild(imageSRC);
	
	imageSRC.x = thisX;
	imageSRC.y = thisY;

	
	
	///fade animation
	if (fade==true){
	imageSRC.alpha=0;
	TweenLite.to(imageSRC, 1, {alpha:1, delay:delay});
	console.log(fade);
	}

}//end p function


//image.prototype.onClick = function() {
//console.log("this image is" +  this.asset);	
//}

 image.prototype.onTouchStart =function(e)
{
	
	
	//prevent default so iOS doesnt try to scale / move page
	e.preventDefault();

	//check and see if this is the first touch point
	if(touchID == -1)
	{
		//if not, get the touch
		var touch = e.changedTouches[0];

		//store the touch id
		touchID = touch.identifier;
alert("aaa");
		//unpause eveything
		Tick.setPaused(false);

		//start listening for the touch move event
		mainCanvas.ontouchmove = onTouchMove;
	}
}

///end touchstart

function onTouchEnd(e)
{
	//prevent default so iOS doesnt try to scale / move page
	e.preventDefault();

	//get a list of all the touch points that changed
	var changedTouches = e.changedTouches;

	//get the number of changed touch points
	var len = changedTouches.length;

	//loop through the changed touch points
	for(var i = 0; i < len; i++)
	{
		//check and see if any of the ended touch points
		//were the first touch point we began to track
		if(changedTouches[i].identifier == touchID)
		{
			//if so, then pause everything
			Tick.setPaused(true);

			//clear touchID
			touchID = -1;

			//stop listening for the touch move event
			mainCanvas.ontouchmove = null;

			return;
		}
	}
}

//called on when a touch points moves (used on iOS / Android)
//devices.
//Note, Android only supports single touch. If there are multiple touch
//points, touchmove events will not be broadcast.
function onTouchMove(e)
{
	//prevent default so iOS doesnt try to scale / move page
	e.preventDefault();

	//get all of the touch points that changed / moved
	var changedTouches = e.changedTouches;

	//get the number of changed touch points
	var len = changedTouches.length;

	var touch;

	//whether we found the first touch point that we are tracking
	var found = false;

	//loop through all of the changed touch points
	for(var i = 0; i < len; i++)
	{
		touch = changedTouches[i];

		//is this the touch point we are tracking?
		if(touch.identifier == touchID)
		{
			//yes
			found = true
			break;
		}
	}

	if(!found)
	{
		//if we didnt find it, it means that the first touch point, that
		//we are tracking did not changed / move. Instead, a second touch point
		//which we dont care about moved.
		return;
	}

	//copy the coordinates into a temp object
	tempData.pageX = touch.pageX;
	tempData.pageY = touch.pageY;

	//update mouse / position coordinates
	updateMouseCoordinates(tempData);
}





window.image = image;
}());
//////end image class/////////////////////////