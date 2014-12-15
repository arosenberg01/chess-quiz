$(document).ready(function() {
	var questionNum, numCorrect;

	var questions = [  
		{question: "Chess is often called the \'game of...\'", 
		 	answers: ["Queens", "Kings", "Tactics", "Strategy"] },   
		{question: "Who is the current World Champion in chess?", 
			answers: ["Magnus Carlsen", "Gary Kasparov", "Viswanathan Anand", "Bobby Fischer"] },	
		{question: "The most famous American chess player of all time is generally considered to be...", answers: ["Samuel Reshevsky", "Hikaru Nakamura", "Bobby Fischer", "Paul Morphy"]},
		{question: "A chess board consists of ___ squares.", answers: ["48", "72", "64", "49"]}
		];

	var correctAnswers = ["Kings", "Magnus Carlsen", "Bobby Fischer", "64"];

	$('#startQuiz').on('click', function(e) {
		e.preventDefault();
		$('#startQuiz').hide();
		start();
	});

	
	$('#submit-btn').on('click', function(e) {
		e.preventDefault();
		nextQuestion();
	});

	function start() {
		questionNum = 0;
		numCorrect = 0;
		$('#currentQ').show();
		$('#answers').show();
		$('#feedback h2').css("text-align", "left");
		$('#feedback h2').css("padding-left", "1em");
		$('#feedback h2').text("Question " + parseInt(questionNum + 1) + "/4");
		$('#submit-btn').css('display', 'block');
		$('ul').empty();
		$('#currentQ').html(questions[questionNum].question)

		for (var k = 0; k < questions.length; k++) {
			$("label[for='" + String.fromCharCode(97 + k) + "']").text(questions[questionNum].answers[0 + k]);
		}
	}
		
	function nextQuestion() {

		var checkedId = $("input[type='radio']:checked").attr('id');
		var submittedAnswer = $("label[for='" + checkedId + "']").html();
		
		if (submittedAnswer === correctAnswers[questionNum]) {
			numCorrect++;
			$('#feedback h2').text("Question " + parseInt(questionNum + 2) + "/4");
			$('#answers').animate()
			$('ul').append('<li>' + '&#x2713' + '</li>')
		} else {
			$('#feedback h2').text("Question " + parseInt(questionNum + 2) + "/4");
			$('ul').append('<li>' + '&#x2717' + '</li>')
			
		}

		console.log(submittedAnswer + "----" + correctAnswers[questionNum] + "----" + numCorrect);

		$('input[type="radio"]').prop('checked', false);

		questionNum += 1;
		
		if (questionNum < 4)	{
			$('#currentQ').html(questions[questionNum].question)

			for (var i = 0; i < questions.length; i++) {
			$("label[for='" + String.fromCharCode(97 + i) + "']").text(questions[questionNum].answers[0 + i]);
			}

		} else {
			$('#feedback h2').text("You got " + numCorrect + " out of 4");
			$('#currentQ').text("Try again?");
			$('#answers').hide();
			$('#submit-btn').hide();
			$('#startQuiz').show();
		}



	}

	

});