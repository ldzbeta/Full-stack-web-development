var noOfButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButtons;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function (){
                 buttonAnimation(this.innerHTML)
             makeSound(this.innerHTML)
        }
        )}

        // detects which button get clicked

        document.addEventListener("keydown",function (event){
                makeSound(event.key)
                buttonAnimation(event.key)
                })
// detects which button get pressed 
// the key present in event.key and the key written inside the function makeSound is different . it is variable which takes value of first key of event.key 
                function makeSound(key){
                        switch (key) {
            case "w":var tom1  = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "a": var tom2  = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            case "s": var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            case "d": var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            case "j": var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            case "l": var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
            case "k": var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            
            
            default:console.log(key)
            break;
        }
}

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+ currentKey)
        activeButton.classList.add("pressed")

        setTimeout(function(){
                activeButton.classList.remove("pressed")
        },100)
}

