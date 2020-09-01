var length = document.querySelectorAll(".drum").length;

for (i = 0;i < length; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function()
   {
       var button = this.innerHTML;
       makesound(button);
       buttonAnimation(button);
   });

   document.querySelectorAll(".drum")[i].addEventListener("keydown", function()
   {
       var button = this.innerHTML;
       makesound(button);
       buttonAnimation(button);
   });
}

function makesound(button)
{
    switch (button) {
        case "w":
            var crash = new Audio("/DrumKit/sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("/DrumKit/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("/DrumKit/sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("/DrumKit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("/DrumKit/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("/DrumKit/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("/DrumKit/sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(button)
{
    document.querySelector(".w").classList.remove("pressed");
    document.querySelector(".a").classList.remove("pressed");
    document.querySelector(".s").classList.remove("pressed");
    document.querySelector(".d").classList.remove("pressed");
    document.querySelector(".j").classList.remove("pressed");
    document.querySelector(".k").classList.remove("pressed");
    document.querySelector(".l").classList.remove("pressed");
    switch (button) {
        case "w":
            document.querySelector(".w").classList.add("pressed");
            break;
        case "a":
            document.querySelector(".a").classList.add("pressed");
            break;
        case "s":
            document.querySelector(".s").classList.add("pressed");
            break;
        case "d":
            document.querySelector(".d").classList.add("pressed");
            break;
        case "j":
            document.querySelector(".j").classList.add("pressed");
            break;
        case "k":
            document.querySelector(".k").classList.add("pressed");
            break;
        case "l":
            document.querySelector(".l").classList.add("pressed");
            break;
        default:
            break;
    }
}