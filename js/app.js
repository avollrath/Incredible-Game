const kirby = document.querySelector("#kirby");
const coin = document.querySelector("#coin");
let collectSound1 = document.querySelector("#collect1");
let collectSound2 = document.querySelector("#collect2");
let collectSound3 = document.querySelector("#collect3");
let collectSpecialSound = document.querySelector("#collect-special");

let collectedNum = 0;

kirby.style.left = 150;
kirby.style.top = 300;
kirby.style.width = 83 / 1.5;
kirby.style.height = 100 / 1.5;

coin.style.left = 600;
coin.style.top = 100;
coin.style.width = 40;
coin.style.height = 40;


let keyMap = {39: false, 37: false, 38: false, 40: false};



document.addEventListener("keydown", (e) => {

    let moveKey = 0;
    let moveTime = 0 ;
    let frames = 10;
    let second = 250;
    let fps = second/frames;

   x = parseInt(kirby.style.left);
   y = parseInt(kirby.style.top);
    
    
   


if (e.keyCode == 39)  {    //right

    kirby.style.transform = "none";
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    x = x+(40 / frames);
    kirby.style.left = x + "px";      
},fps);
    
    }
else if (e.keyCode == 37)  {   //left

    kirby.style.transform = "scaleX(-1)";
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    x = x-(40 / frames);
    kirby.style.left = x + "px";      
},fps);
    
    }
else if (e.keyCode == 38)  {   //up
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    y = y - (40 / frames);
    kirby.style.top = y + "px";      
},fps);
    
    }
else if (e.keyCode == 40)  {   //down
    
    clearTimeout(moveTime);
    moveTime = setTimeout(function(){
    clearInterval(moveKey);
},second);        

clearInterval(moveKey);
moveKey = setInterval(function(){
    y = y + (40 / frames);
    kirby.style.top = y + "px";      
},fps);
    
    }


if (e.keyCode in keyMap) {
        keyMap[e.keyCode] = true;
        if (keyMap[38] && keyMap[37]) {  //up left
          

            kirby.style.transform = "scaleX(-1)";
    
            clearTimeout(moveTime);
            moveTime = setTimeout(function(){
            clearInterval(moveKey);
        },second);        
        
        clearInterval(moveKey);
        moveKey = setInterval(function(){
            x = x-(40 / frames);
            kirby.style.left = x + "px";  
            y = y - (40 / frames);
            kirby.style.top = y + "px";      
        },fps);


        }
        
        else if (keyMap[40] && keyMap[39]) {  // down right
            
            kirby.style.transform = "none";
    
            clearTimeout(moveTime);
            moveTime = setTimeout(function(){
            clearInterval(moveKey);
        },second);        
        
        clearInterval(moveKey);
        moveKey = setInterval(function(){
            x = x+(40 / frames);
            kirby.style.left = x + "px";  
            y = y + (40 / frames);
            kirby.style.top = y + "px";      
        },fps);
        }
        
        else if (keyMap[38] && keyMap[39]) { // up right
     

            kirby.style.transform = "none";
    
            clearTimeout(moveTime);
            moveTime = setTimeout(function(){
            clearInterval(moveKey);
        },second);        
        
        clearInterval(moveKey);
        moveKey = setInterval(function(){
            x = x+(40 / frames);
            kirby.style.left = x + "px";  
            y = y - (40 / frames);
            kirby.style.top = y + "px";      
        },fps);


        }else if (keyMap[40] && keyMap[37]) { // down left
            kirby.style.transform = "scaleX(-1)";
    
            clearTimeout(moveTime);
            moveTime = setTimeout(function(){
            clearInterval(moveKey);
        },second);        
        
        clearInterval(moveKey);
        moveKey = setInterval(function(){
            x = x-(40 / frames);
            kirby.style.left = x + "px";  
            y = y + (40 / frames);
            kirby.style.top = y + "px";      
        },fps);
        }
    }    



})


document.addEventListener('keyup', function (e) {
    if (e.keyCode in keyMap) {
        keyMap[e.keyCode] = false;
    }
})


const collisionDetection = () => {

    collision = setInterval(() => {
    if (parseInt(kirby.style.left) < parseInt(coin.style.left) + parseInt(coin.style.width) &&
    parseInt(kirby.style.left) + parseInt(kirby.style.width) > parseInt(coin.style.left) &&
    parseInt(kirby.style.top) < parseInt(coin.style.top) + parseInt(coin.style.height) &&
    parseInt(kirby.style.height) + parseInt(kirby.style.top) > parseInt(coin.style.top)) {
         
        collectedNum++;
        
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







