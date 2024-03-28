
function loadApp() {

  setTimeout( function() {
 
  document.getElementById("loader").style.top ="-110px";
  document.getElementById("loader").style.display="none";
   },100);
  
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{


section.forEach (sec=>{
   let top = window.scrollY;
   let offeset = sec.offsetTop - 100;
   let height = sec.offsetHeight;
   let id = sec.getAttribute("id");

   sec.classList.add('show-animate');

  if(top >= offeset && top < offeset + height){
    //active navbar links
       navlinks.forEach(links =>{
         links.classList.remove("active");
         document.querySelector('header nav a[href*=' + id  + ']').classList.add("active");
         
       });

  }
  else{
  sec.classList.remove('show-animate')
}
});



look.classList.remove('bx');
navbar.classList.remove('active');
look.src = "menu.png";
menu_clicked = false;
}

let look = document.querySelector('.look');
let navbar = document.querySelector('.navbar');
let menu_clicked = false;

look.onclick = () =>{
menu_clicked = !menu_clicked;
look.src = menu_clicked ? "close.png" : "menu.png";
look.classList.toggle('bx');
navbar.classList.toggle('active');
}



}