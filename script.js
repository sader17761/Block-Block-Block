$(onReady);

console.log("We're connected!");

function onReady(){
  // click events
  $('.button').on('click', createBox);
  $('.container').on('click', '.box', colorBox);
  $('.container').on('click', '.remove', removeBox);  //you could also use $(document) in place of .container
}

function createBox(){
  var $box = $('<div class="box">' + '<button class="remove">X</button>' + "</div>"); //this creates a jquery object (creates both opening and closing tags)
  $('.container').append($box);

  newColor($box);

  function newColor(newBox){
    // generate random numbers
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    // assign random numbers to the new box
    $(newBox).css('background', "rgb(" + colorR + "," + colorG + "," + colorB + ")");
  }
}

function colorBox(){
  $(this).css('background', 'black');
}

function removeBox(){
  $(this).parent().fadeOut(500);
}
