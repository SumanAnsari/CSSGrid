
let interact = document.getElementByID("interact")
let player = document.getElementByID("player")

interact.addEventListener('mouseenter', () => {
  player.play();
})

interact.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('pause', () => {
  document.body.style.color = "white";
})

player.addEventListener('play', () => {
  document.body.style.color = "black";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  if(player.currentTime > 5){
    interactable.style.borderRadius = "30px";
  }
})
