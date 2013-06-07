(function(){
//var stage;
//var myCanvas = $("#stageCanvas").get(0);
this.init = function() {
//stage = new createjs.Stage(myCanvas);
//createjs.Ticker.setFPS(32);
//createjs.Ticker.addListener(this);
$.ajax({
type: "GET",
crossDomain: false, //edit du 25/01 : cette propriété doit être passée à false. 
url: "data/menuData.xml",
dataType: "xml",
success: initMenu
});
}
this.initMenu = function(data){
console.log(data); 
}
this.tick = function(){
}
window.onload = init();
})();
