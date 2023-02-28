var audio = document.getElementById("audio");
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
  navbarLinks.classList.toggle('active')
})

window.onscroll = function() {myFunction()};

let myMediaQuery = window.matchMedia('(max-width: 768px)');
function myFunction() {
  if (myMediaQuery.matches){
    if (document.documentElement.scrollTop > 2700) {
      audio.play()
    } else {
      audio.pause()
    }
  }else{
  if (document.documentElement.scrollTop > 1600) {
    audio.play()
  } else {
    audio.pause()
  }
}
}

window.onresize = function (){
  audio.pause()
}

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 2000);
  }, index++ * (interval / 3))
}