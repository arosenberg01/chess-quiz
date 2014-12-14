$(document).ready(function() {
	var questionNum = 0;

	var questions = [  
		{question: "Chess is often called the \'game of...\'", 
		 	answers: ["queens", "kings", "tactics", "strategy"] },   
		{question: "Who is the current World Champion in chess?", 
			answers: ["Magnus Carlsen", "Gary Kasparov", "Viswanathan Anand", "Bobby Fischer"] },	
		{question: "The most famous American chess player of all time is generally considered to be...", answers: ["Samuel Reshevsky", "Hikaru Nakamura", "Bobby Fischer", "Paul Morphy"]},
		{question: "A chess board consists of ___ squares.", answers: ["48", "72", "64", "49"]}
		];

	var correctAnswers = [undefined, "kings", "Magnus Carlsen", "Bobby Fischer", "64"];

	nextQuestion();

	$('#submitButton').on('click', function(e) {
		e.preventDefault();
		nextQuestion();
		
	});  
		
		
		
	function nextQuestion() {

		var checkedId = $("input[type='radio']:checked").attr('id');
		var submittedAnswer = $("label[for='" + checkedId + "']").html();
		
		submittedAnswer === correctAnswers[questionNum] ? console.log("Correct") : console.log("Incorrect");

		console.log(submittedAnswer + "----" + correctAnswers[questionNum]);

		$('#currentQ').html(questions[questionNum].question)

		for (var i = 0; i < 4; i++) {
			$("label[for='" + String.fromCharCode(97 + i) + "']").html(questions[questionNum].answers[0 + i]);
		}

		questionNum += 1;

	}

	







	

});

