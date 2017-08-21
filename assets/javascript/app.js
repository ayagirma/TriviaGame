$(document).ready(function(){
	var timer = 30;

	var correctAnswer = 0;
	var incorrectAnswer = 0;
	var unAnswer = 0;
	var questions = [];
	var timerInterval=0;
	var score;
	var a=[];


    function counter() {
	 if(timer === 0 ) {
	   $("#timer").html("Time Remaining:" + timer);
	   clearInterval(timerInterval);
	 } else {
	    timer = timer -1;
	    $("#timer").text(timer);
	 }
	  
	}
	// when the start button click game start
	// and the time tickling down
	 $(".startButton").click(function(timer) {
	    
	 	// timer 
		 var startButton = $("#timer").html(timer);
		    //console.log("hello");
	     var timerInterval = setInterval(counter, 1000);
	          
	  }); 
	 

	 // function done(){
		// var question1=document.questions.question1.value;
		// var question2=document.questions.question2.value;
		// var question3=document.questions.question3.value;


		// if(question1 === "8"){
		// 	correctAnswer++;
		// 	incorrectAnswer--;
		// }
		// if(question2==="6"){
		// 	correctAnswer++;
		// 	incorrectAnswer--;
		// }
		// if(question3==="5"){
		// 	correctAnswer++;
		// 	incorrectAnswer--;
		// }
		// if (!answer){
		// 	incorrectAnswer--;
		// }

		// document.getElementById('correctAnswer').innerHTML= "correctAnswer  " ;
	 // }


	
   function dispalyGame(){
    var questions = [{
       question: "what is the capital city of Ethiopia?",
       choices: ["AddisAbeba", "Harar", "Mekele", "Gonder"],
       correctAnswer: 1
        }, {

       question: "Who is the richest person in the world?",
       choices: ["Bill Gates", "Warren Buffett", "Mark Suckerberg", "Larry Ellison"],
       correctAnswer: 4
        },{
       question: "what is the capital city of Ethiopia?",
       choices: ["AddisAbeba", "Harar", "Mekele", "Gonder"],
       correctAnswer: 2
        }]
     };

     
	 // $("div").html( "<b>Wow!</b> such excietement....");
	 // $("div b" )
	 //    .append(document.createTextNode("questions"))
  //        .css("color", "red" );

             
	// creating questions

	$(".startButton").on("click", function(){
		$(this).hide();
		
	});

	$(".doneButton").on("click", function(){
		$(this).hide()
		       	 
	});

   

   function displayTrivia(){
   	$("#questions").html(displayGame[0].question);

   }

	
      
	 // creating array of question
     

	   

	// when the time end, the answered
	//  question and the miss question result will populate.


	// timer = 0 stop the game and show results
    $("doneButton").on("click", function(){
      $("#timer").stop();
        
    })

   
	
	// Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
  //   score.append(All Done! </n> + 'correct answered:' + numCorrect );
  //   return score;
  // }
 }
});