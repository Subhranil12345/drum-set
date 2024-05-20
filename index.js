for (var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInner=this.innerHTML;
        makeSound(buttonInner);
        buttonAnimation(buttonInner);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kb=new Audio("./sounds/kick-bass.mp3");
            kb.play();
            break;
        case "l":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
        default: console.log(this.innerHTML);
            break;
    }
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}