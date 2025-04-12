var gamePattern = []
var userClickedPattern = []

// select random colour and apply animation and colour
var buttonColours = ["red","blue","green","yellow"]

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play()
}
// what happens when user clicked a button
$(".container").click(function(event){
    var userChosenColour = event.target.id
    playSound(userChosenColour)
    animatePress(userChosenColour)
    userClickedPattern.push(userChosenColour)
    
})

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },50)
}

var level = 0
var started = false
$(document).keypress(function(){
    if (!started){
        nextSequence()
        $("h1").text("Level "+level);
        started=true
    }
})
// ⚠️if the function is given directly it runs directly while reloding even a key is pressed
// to work eventlisteners properly we have to use function every time.

function nextSequence(){
    level++;
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100)
    // .animate({
    //     opacity: 0
    // }, 100).animate({
    //     opacity: 1
    // }, 100);
    playSound(randomChosenColour)
         
}

// var currentAnswer=[]
// var indexOfLastAnswer = userClickedPattern.length-1
// for(i=0;i=level;i++){
//     currentAnswer.push(userClickedPattern[indexOfLastAnswer-i])
// }

// if(currentAnswer===gamePattern){
//     nextSequence()
//     $("h1").text("Level "+level);
// }else{
//     $("h1").text("Game Over, Press Any Key to Restart");
//     $("body").addClass("game-over")
// }

function checkAnswer(currentLevel){

}

if(===gamePattern){
    console.log("success")
}else{
    console.log("wrong")
}