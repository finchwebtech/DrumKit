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
   });

   document.querySelectorAll(".drum")[i].addEventListener("keydown", function()
   {
        alert("key press");
   });
}
// var audio = new Audio("/DrumKit/sounds/crash.mp3");
//         audio.play();