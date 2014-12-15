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

	$('#submitButton').on('click', function(e) {
		e.preventDefault();
		nextQuestion();
	});  
		
	function start() {
		questionNum = 0;
		numCorrect = 0;
		$('#currentQ').show();
		$('#answers').show();
		$('#submitButton').css('display', 'block')

		$('#currentQ').html(questions[questionNum].question)

		for (var k = 0; k < 4; k++) {
			$("label[for='" + String.fromCharCode(97 + k) + "']").text(questions[questionNum].answers[0 + k]);
		}
	}
		
	function nextQuestion() {

		var checkedId = $("input[type='radio']:checked").attr('id');
		var submittedAnswer = $("label[for='" + checkedId + "']").html();
		
		if (submittedAnswer === correctAnswers[questionNum]) {
			numCorrect++;
			$('#feedback h2').text("Correct");
			$('#answers').animate()
		} else {
			$('#feedback h2').text("Incorrect");
		}

		console.log(submittedAnswer + "----" + correctAnswers[questionNum] + "----" + numCorrect);

		$('input[type="radio"]').prop('checked', false);

		questionNum += 1;
		
		if (questionNum < 4)	{
			$('#currentQ').html(questions[questionNum].question)

			for (var i = 0; i < 4; i++) {
			$("label[for='" + String.fromCharCode(97 + i) + "']").text(questions[questionNum].answers[0 + i]);
			}

		} else {
			$('#feedback h2').text(numCorrect + " out of 4");
			$('#currentQ').hide();
			$('#answers').hide();
			$('#submitButton').hide();
			$('#startQuiz').show();
		}



	}

	

});