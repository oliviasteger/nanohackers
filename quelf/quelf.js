 $(document).ready(function() {
	var p1s = 0;
	var p2s = 0;
	var counter = 0;
	var evens = ["0", "2", "4", "6", "8"];
	var greenSpaces = ["2", "7", "12", "17"];
	var greenCards = ["This is a QUIZZLE card. \n What came first: \n A. The chicken \n B. The egg \n \n ANSWER: The egg, obviously.",
	 "This is a QUIZZLE card. \n Where did the tallest person in the world live? \n A. The United States \n B. Turkey \n C. Bulgaria \n D. Ethiopia \n ANSWER: Turkey.",
	 "This is a QUIZZLE card. \n What color is complementary of blue on the color wheel? \n A. Red \n B. Purple \n C. Orange \n D. Yellow \n ANSWER: Orange.",
	 "This is a QUIZZLE card. \n What is the capital of Ireland? \n A. Dublin \n B. Amman \n C. Belfast \n D. Galway \n ANSWER: Dublin.",
	 "This is a QUIZZLE card. \n What is the biggest country in the world? \n A. United States \n B. Canada \n C. Russia \n D. China \n ANSWER: Russia."]
	var purpleSpaces = ["1", "6", "11", "16"];
	var purpleCards = ["This is a SHOWBIZ card. \n Find a pencil, stick in between your mouth and nose, and pretend to groom your moustache.",
	"This is a SHOWBIZ card. \n Talk in a Transylvanian accent and tell a fellow player, 'I vant to suck your blood.'",
	"This is a SHOWBIZ card. \n In a completely calm and collected tone, explain how you had a delicious child for breakfast yesterday.",
	"This is a SHOWBIZ card. \n Pick up a newspaper and attempt to paper-machê your feet.",
	"This is a SHOWBIZ card. \n Talk about yourself in third-person for the next round."]
	var blueSpaces = ["3", "8", "13", "18"];
	var blueCards = ["This is a ROOLZ card. \n This is a Talking Rule. Every time you take a sip of water, you must say, 'I need my pills!'",
					"This is a ROOLZ card. \n This is an Action Rule. For the rest of the game, you must stand, unless it is your turn.",
					"This is a ROOLZ card. \n This is a Global Rule. Every time you roll the die, you must say 'I once consumed a delicious child!'",
					"This is a ROOLZ card. \n This is a Global Rule. Every time a new player takes the lead, you must honk your approval.",
					"This is a ROOLZ card. \n This is a Talking Rule. Every time an opponent passes you on the playing board, you must say, 'You've thwarted us, you vile beast!'"]
	var redSpaces = ["5", "10", "15", "20"];
	var redCards = ["This is a SCATTERBRAINZ card. \n Choose a topic: 'Types of nuts' or 'Colors of crayons'.",
					"This is a SCATTERBRAINZ card. \n Choose a topic: 'Ways to fry eggs' or 'Embarassing situations'.",
					"This is a SCATTERBRAINZ card. \n Choose a topic: 'Names of a rivers that an aircraft carrier could not float down' or 'Sounds people often make that don't contain words'.",
					"This is a SCATTERBRAINZ card. \n Choose a topic: 'Things you can see your reflection in' or 'Excuses you've used to avoid chores'.",
					"This is a SCATTERBRAINZ card. \n Choose a topic: 'Common excuses given for not turning in your homework' or 'Words that you can define, but the player to your left can't.'"]
	var yellowSpaces = ["4", "9", "14", "19"];
	var yellowCards = ["This is a STUNTZ card. \n You are now the mummy. Get some toilet paper and mummify your face. Keep your wrappings on until any player rolls a four.",
					"This is a STUNTZ card. \n Stand on one foot and hum the national anthem until any player rolls a six.",
					"This is a STUNTZ card. \n Construct a fort made out of pillows. Stay in the fort until your next turn.",
					"This is a STUNTZ card. \n Wear a sock as a tie for five minutes.",
					"This is a STUNTZ card. \n Wear a bowl on your head and bang on the bowl repeatedly saying, 'Bobby, let me in!'"];

	$("#roll").click(function(){
		var roll = Math.floor((Math.random() * 6) + 1);
		alert("You have rolled a " + roll + "!");
		p1s = p1s + roll;
		counter += 1; // counter = counter + 1, same thing.
		console.log(p1s);
		loadScore();
		for (var i = 0; i < blueSpaces.length; i++) {
			if (p1s == blueSpaces[i]) {
				alert(blueCards[Math.floor(Math.random() * blueCards.length)]);
				break;
			}
		}
		for (var i = 0; i < greenSpaces.length; i++) {
			if (p1s == greenSpaces[i]) {
				alert(greenCards[Math.floor(Math.random() * greenCards.length)]);
				break;
			}
		}
		for (var i = 0; i < purpleSpaces.length; i++) {
			if (p1s == purpleSpaces[i]) {
				alert(purpleCards[Math.floor(Math.random() * purpleCards.length)]);
				break;
			}
		}
		for (var i = 0; i < redSpaces.length; i++) {
			if (p1s == redSpaces[i]) {
				alert(redCards[Math.floor(Math.random() * redCards.length)]);
				break;
			}
		}
		for (var i = 0; i < yellowSpaces.length; i++) {
			if (p1s == yellowSpaces[i]) {
				alert(yellowCards[Math.floor(Math.random() * yellowCards.length)]);
				break;
			}
		}
	});

	$("#roll1").click(function(){
		var roll = Math.floor((Math.random() * 6) + 1);
		alert("You have rolled a " + roll + "!");
		counter += 1;
		p2s = p2s + roll;
		loadScore();
		for (var i = 0; i < blueSpaces.length; i++) {
			if (p1s == blueSpaces[i]) {
				alert(blueCards[Math.floor(Math.random() * blueCards.length)]);
				break;
			}
		}
		for (var i = 0; i < greenSpaces.length; i++) {
			if (p1s == greenSpaces[i]) {
				alert(greenCards[Math.floor(Math.random() * greenCards.length)]);
				break;
			}
		}
		for (var i = 0; i < purpleSpaces.length; i++) {
			if (p1s == purpleSpaces[i]) {
				alert(purpleCards[Math.floor(Math.random() * purpleCards.length)]);
				break;
			}
		}
		for (var i = 0; i < redSpaces.length; i++) {
			if (p1s == redSpaces[i]) {
				alert(redCards[Math.floor(Math.random() * redCards.length)]);
				break;
			}
		}
		for (var i = 0; i < yellowSpaces.length; i++) {
			if (p1s == yellowSpaces[i]) {
				alert(yellowCards[Math.floor(Math.random() * yellowCards.length)]);
				break;
			}
		}
	});

    $("#penalty").click(function(){
		alert("You have just been given a penalty, and you have moved back two spaces.");
		if (isEven(counter)) {
				p2s = p2s -2;
		}
		else {
				p1s = p1s-2;
		}
		loadScore();
    });

    function isEven(number) {
    	number = "" + number;
		for (var num = 0; num < 9; num+=2){
			if (number.charAt(number.length - 1) == (num)) {
				return true;
			}
		}
		return false;
    }

	function loadScore() {
		$("#player1space").html("Player 1 Score: " + p1s);
		$("#player2space").html("Player 2 Score: " + p2s);
	}
});
