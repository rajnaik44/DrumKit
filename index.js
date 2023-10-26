// //detection button press

var numOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrums; i++){    
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    
    var buttonInnerHtml = this.innerHTML;//this= knows the identity which button was pressed

    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
});
}

//detecting keyboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key);//event.key= any key that is press on keyboard
    //added event lister keypress to whole document(whole page)

    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;

            
        case "d":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;

            
        case "j":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
            break;


        case "k": 
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break;

            
        case "l":
            var kickbass= new Audio("sound/kick-bass.mp3");
            kickbass.play();
            break;

            default: console.log(buttonInnerHtml);
    }

}

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100)

}






