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