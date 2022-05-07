


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll("button")[i].addEventListener("click", function (){

  MakeSound(this.innerHTML);
  BtnAnimation(this.innerHTML);
    
});



addEventListener("keydown", function(event){
    MakeSound(event.key);
  BtnAnimation(event.key);

});

function MakeSound(key){
    switch (key) {
        case `w`||`W`:
             var audio = new Audio(`sounds/tom-1.mp3`)  ;
   audio.play();
            
            break;
  
            case `a`||`A` :
                    var audio = new Audio(`sounds/tom-2.mp3`)  ;
      audio.play();
                break;
            case `s`||`S`:
                    var audio = new Audio(`sounds/tom-3.mp3`)  ;
      audio.play();
                break;
    case `d`||`D`:
            var audio = new Audio(`sounds/tom-4.mp3`)  ;
      audio.play();
    break;
    case `j`||`J`:
         var audio = new Audio(`sounds/crash.mp3`)  ;
      audio.play();
  break;
  
  case `k`||`K`:
         var audio = new Audio(`sounds/kick-bass.mp3`)  ;
      audio.play();
  
  break;
  case `l`||`L`:
         var audio = new Audio(`sounds/snare.mp3`)  ;
      audio.play();
  break;
        default:
            break;
    }   
}

function BtnAnimation(KeyPressed){
    var activeKey = document.querySelector("."+KeyPressed);
    activeKey.classList.add("pressed");
   setTimeout(function(){
       activeKey.classList.remove("pressed")
   }), 100
}
