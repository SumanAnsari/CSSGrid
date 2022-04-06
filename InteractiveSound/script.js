
var audio = document.getElementbyId("drums");
var intro = document.querySelector('.intro');


document.window.addEventListener('click', function(){
  drums.play();
});

drums.addEventListener('timeupdate', function(event){
  console.log(drums.currentTime);


  if(drums.currentTime < 2.0) {
    document.body.style.backgroundColor = "salmon";
  }
  else {
    document.body.style.backgroundColor = "lightblue";
  }
});

drums.addEventListener('play', function(){
console.log("Playing!");
});

drums.addEventListener('ended', function(){
console.log("Finished!");
});

intro.addEventListener('click', function(){
  intro.classList.add('hidden');
  drums.play();
  synth.triggerAttackRelease("C4", "8n");

});

const synth = new Tone.Synth().toDestination();

document.body.addEventListener("keydown", function(event){
  if(event.key == 'f'){
  synth.triggerAttackRelease("C4", "8n");
  }
  else if(event.key == 'g'){
  synth.triggerAttackRelease("C4", "8n");
  }
  if(event.key == 'h'){
  synth.triggerAttackRelease("C4", "8n");
})
