const kirby = document.querySelector("#kirby");
const coin = document.querySelector("#coin");
const giraffe = document.querySelector("#giraffe");
let collectSound1 = document.querySelector("#collect1");
let collectSound2 = document.querySelector("#collect2");
let collectSound3 = document.querySelector("#collect3");
let collectSpecialSound = document.querySelector("#collect-special");

let collectedNum = 0;

kirby.style.left = 150;
kirby.style.top = 300;
kirby.style.width = 83 / 1.5;
kirby.style.height = 100 / 1.5;
kirby.style.zIndex = "1";

coin.style.left = 600;
coin.style.top = 100;
coin.style.width = 40;
coin.style.height = 40;
coin.style.zIndex = "1";

giraffe.style.right = 100;
giraffe.style.top = 260;
giraffe.style.height = 400;
giraffe.style.zIndex = "0";



var Key = {
    _pressed: {},
  
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    
    isDown: function(keyCode) {
      return this._pressed[keyCode];
    },
    
    onKeydown: function(event) {
      this._pressed[event.keyCode] = true;
    },
    
    onKeyup: function(event) {
      delete this._pressed[event.keyCode];
    }
  };

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);




  setInterval(function(){
   
    if (Key.isDown(Key.UP)) move("up");
    if (Key.isDown(Key.LEFT)) move("left");
    if (Key.isDown(Key.DOWN)) move("down");
    if (Key.isDown(Key.RIGHT)) move("right");
     },10);


let move = (direction) => {

    let moveKey = 0;
    let moveTime = 0 ;
    let frames = 10;
    let second = 250;
    let fps = second/frames;

   x = parseInt(kirby.style.left);
   y = parseInt(kirby.style.top);
    
    

if (direction == "right")  {    //right

    kirby.style.transform = "none";
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    x = x+(5 / frames);
    kirby.style.left = x + "px";      
},fps);
    
    }
else if (direction == "left")  {   //left

    kirby.style.transform = "scaleX(-1)";
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    x = x-(5 / frames);
    kirby.style.left = x + "px";      
},fps);
    
    }
else if (direction == "up")  {   //up
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    y = y - (5 / frames);
    kirby.style.top = y + "px";      
},fps);
    
    }
else if (direction == "down")  {   //down
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    y = y + (5 / frames);
    kirby.style.top = y + "px";      
},fps);
    
    }

}





const collisionDetection = () => {

    collision = setInterval(() => {
    if (parseInt(kirby.style.left) < parseInt(coin.style.left) + parseInt(coin.style.width) &&
    parseInt(kirby.style.left) + parseInt(kirby.style.width) > parseInt(coin.style.left) &&
    parseInt(kirby.style.top) < parseInt(coin.style.top) + parseInt(coin.style.height) &&
    parseInt(kirby.style.height) + parseInt(kirby.style.top) > parseInt(coin.style.top)) {
         
        collectedNum++;
        coin.src="assets/img/coin.gif";
        coin.style.width = 40;
        coin.style.height = 40;

        if ((collectedNum + 1) % 10 == 0) {
            
            coin.src="assets/img/coin2.gif";
            coin.style.width = 60;
coin.style.height = 60;
        }
        
        if (collectedNum % 10 == 0 && collectedNum != 0){
    
            collectSpecialSound.currentTime = 0 ;
            collectSpecialSound.play();
        }

        else if (collectedNum % 3 == 0){
    
            collectSound3.currentTime = 0 ;
            collectSound3.play();
        }


        else if (collectedNum % 2 == 0) {
            collectSound1.currentTime = 0 ;
            collectSound1.play();
            }

        else {

            collectSound2.currentTime = 0 ;
            collectSound2.play();
        }


    
        coin.style.left = Math.floor((Math.random() * window.innerWidth - 40));
        coin.style.top = Math.floor((Math.random() * window.innerHeight) - 40);
    
     
    
        document.querySelector("#coins").innerHTML = collectedNum;
    
        }
    }, 100)


}

collisionDetection();







