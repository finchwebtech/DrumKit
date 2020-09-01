var length = document.querySelectorAll(".drum").length;

for (i = 0;i < length; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function()
   {
       var button = this.innerHTML;
        switch (button) {
            case "w":
                var crash = new Audio("/DrumKit/sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick = new Audio("/DrumKit/sounds/kick-bass.mp3");
                kick.play();
                break;
            case "a":
                var kick = new Audio("/DrumKit/sounds/kick-bass.mp3");
                kick.play();
                break;
            default:
                break;
        }
   });
}
// var audio = new Audio("/DrumKit/sounds/crash.mp3");
//         audio.play();