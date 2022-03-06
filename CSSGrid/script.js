// Hello Jquery!

//Playing sound
var flowerSound= new Howl({
  src:['wind.mp3']
});

// Alternating boxes
$('.myGrid3 div').each(function(index, element){
  element= $(element);
  index+=1;
  element.css("grid-row", index);

  if(index % 2==0){
    element.attr("data-aos", "zoom-in");
  }
  else{
    element.attr("data-aos", "zoom-in");
    }

  element.click(function(){
    sound.play();
    });

  element.click(function(){
    sound.stop();
    });
});

AOS.init();
