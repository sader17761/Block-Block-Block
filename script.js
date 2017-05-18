$(onReady);

console.log("We're connected!");

function onReady(){

  // click events
  $('.button').on('click', createBox);
  $('.container').on('click', '.box', colorBox);
  $('.container').on('click', '.remove', removeBox);
}


  function createBox(){
    console.log("were inside the createBox function");

    var $box = $('<div class="box">' + '<button class="remove">X</button>' + "</div>"); //this creates a jquery object (creates both opening and closing tags)
    $('.container').append($box);

    var colorArray=['red','orange','yellow','green','blue','purple'];
    var randNum = randomNumber(0, 5);
    newColor($box);

    function newColor(newBox){
      $(newBox).css('background', colorArray[randNum]);
    }
  }

  function colorBox(){
    console.log('in colorBox');
    $(this).css('background', 'black');
  }

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function removeBox(){
  console.log('remove box');
  $(this).parent().remove();
}
