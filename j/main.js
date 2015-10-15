console.log("JAVASCRIPT Loaded!")

// List of prompts for the user
var prompts = [
	'Type my name',
	'Type 1st part of madlibs name',
	'Type 2nd part of madlibs name',
  'Type an adjective',
	
];

var answers=[];

// Keep track of current prompt we're on
var currentPrompt = 0;

// A function that will call the next prompt
var nextPrompt = function() {
  //if there's no answer in the form
  if (currentPrompt != 0){
    answers.push($('input').val());
  }
	// if there is a next prompt
	if (currentPrompt < prompts.length) {
		// put first prompt in all html elements with class 
		$('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
		// move the next prompt into variable currentPrompt 
		currentPrompt = currentPrompt + 1;
	} else { //or else if we're at the end of the array
		// put a new message into the html.
		showFinal();
	}
};

var backPrompt = function() {
  if (currentPrompt > 1) {
    currentPrompt = currentPrompt - 1;
    $('.prompt').html(prompts[currentPrompt-1] + '<br><input type="text">');
  }
};

//puts user answers into HTML
var showFinal = function() {
  $('.prompt').html(
  'I am<span class="fill">'
  + answers[0]
  +'</span> .I am a Madlibs Game named<span class="fill">'
  +answers[1] 
  +'</span>  <span class="fill">'
  +answers[2]
  +'</span>  . This is to show you, the <span class="fill">'
  +answers[3]
  +'</span>  students, that madlibs can be fun!'

  );
  
  $('#next').hide();
  
};

// run nextPrompt function when button is clicked
$('#next').click(function() {
	nextPrompt();
});

$('#reload').on('click', function() {
	// window.location.href=window.location.href;
	document.location.reload(true);
});

// Show the first prompt as soon as js loads
nextPrompt();

setTimeout(function() {
  $('.welcome').fadeOut()
  $('.hidden').fadeIn()
}, 700);

$('#back').on('click', function() {
  console.log("help");
  backPrompt();
});
