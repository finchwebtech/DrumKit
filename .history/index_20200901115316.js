var length = document.querySelectorAll(".drum").length;

for (i = 0;i < length; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function()
   {
        console.log(this);
   });
}
// var audio = new Audio("/DrumKit/sounds/crash.mp3");
//         audio.play();