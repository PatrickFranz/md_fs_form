//Global Variables

var liElements = document.getElementById('form-wrap').getElementsByTagName('li');
var progressBar = document.getElementById('progress');
var qCount = document.getElementById('number-current');
var questionCount = 1;
var questionTotal = 5;

//Functions
var onload = function(){
	setProgress();
	for(var i=0; i < liElements.length; ++i){
		if(liElements[i].className !== 'current'){
			liElements[i].className = 'hide';

		}
	}
	//Add Event handlers
	document.getElementById('continue').addEventListener("click", function(e){
		var current = document.getElementsByClassName('current')[0];
		next(current);
		
	});
}

function isValid(event, input){
		console.log('Event: ' + event.which + 'input: ' + input);
		if(event.which === 13){
			//Check input here.
			return true;
		} else {
			return false;
		}
	}

function next(current){
	current.className = 'anim-up-out';
	current.addEventListener('transitionend', function(e){
		current.className = 'hide';
	});
	current.nextElementSibling.className = 'current anim-up-in';
	++questionCount;
	setProgress();
}

function previous(current){
	
}

function setProgress(){
	progressBar.style.width = Math.floor((questionCount / questionTotal)*100) + "%";
	qCount.innerHTML = questionCount;

}
