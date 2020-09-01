alert("hELLO");
var length = document.querySelectorAll(".drum").length;

for (i = 0;i < length; i++)
{
   document.querySelector("button")[i].addEventListener("click", function()
   {
    alert (i+"click");
   });
}