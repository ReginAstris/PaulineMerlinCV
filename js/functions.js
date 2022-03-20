/* DARK MODE */
const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

/* MENU RAPIDE */
function repositionnementDivMenuRapide(){
  if (window.innerWidth >= "1048"){
      let hauteurMenuRapide=document.getElementById("menu-rapide").offsetHeight;
      if (hauteurMenuRapide!=350){
          hauteurMenuRapide=350;
      }
      let positionBasse=(window.innerHeight-hauteurMenuRapide)/2;
      document.getElementById("menu-rapide").style="bottom:"+positionBasse+"px;";
  }
  else {
      document.getElementById("menu-rapide").style.bottom=0;
      document.getElementById("menu-rapide").style="bottom:0px";
  }
}

/* SEPARATEUR TIMELINE */
function redimensionnementSeparatorTimeline(){
  let largeurNavigateur=window.innerWidth;
  if (largeurNavigateur >= "1048"){
      let widthSeparator=(largeurNavigateur-200)/2;
      for (element of document.getElementsByClassName("separator-timeline")){
          element.style.width=widthSeparator+"px";
      }
  }
}

window.addEventListener('load', (event) => {
  repositionnementDivMenuRapide();
  redimensionnementSeparatorTimeline();

  // Date du copyright
  var date = new Date().getFullYear();
  document.getElementById("year").innerHTML = date;
});

window.onresize = function(){repositionnementDivMenuRapide();redimensionnementSeparatorTimeline();}

/* APPARITION ET DISPARITION DU TEXTE DU MENU */
document.getElementById("menu-rapide").addEventListener("mouseenter", function( event ) {
  // On fait apparaître le texte du menu avec une latence (pour l'animation css)
  setTimeout(function() {
      if (document.getElementById("menu-rapide").clientWidth == 270){
          document.getElementById("menu-rapide").classList.add("menu-apparition");
      }
  }, 500);
}, false);

document.getElementById("menu-rapide").addEventListener("mouseleave", function( event ) {
  document.getElementById("menu-rapide").classList.remove("menu-apparition");
}, false);