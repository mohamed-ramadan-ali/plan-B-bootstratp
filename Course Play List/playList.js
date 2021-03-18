










let vOTP ="20160313versUSE323c6HCv8CIGRmDTzDm6YJTcgH37S9BoZKxmJGfNyFiH63fY8";


function play(){

  (function(v,i,d,e,o){v[o]=v[o]||{}; v[o].add = v[o].add || function V(a){ (v[o].d=v[o].d||[]).push(a);};
  if(!v[o].l) { v[o].l=1*new Date(); a=i.createElement(d), m=i.getElementsByTagName(d)[0];
  a.async=1; a.src=e; m.parentNode.insertBefore(a,m);}
  })(window,document,"script","https://player.vdocipher.com/playerAssets/1.x/vdo.js","vdo");
  vdo.add({
    otp: `${vOTP}`,
    playbackInfo: "eyJ2aWRlb0lkIjoiZWE4MGYyNmU5OWM1NGFlZDliOTcxYTU2MDAzMjZlZmYifQ==",
    theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
    container: document.querySelector( "#embedBox" ),
  });

};

play();






// change video name function start // 



$(".episode-name").click(function(e){
let videoName = e.currentTarget.innerText
console.log(videoName);
$(".Video-Title").html(videoName);
 }
);
