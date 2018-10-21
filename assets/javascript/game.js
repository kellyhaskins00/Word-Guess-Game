//record how many times a letter is pressed
var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];

//create variables
var wordBank =['spiderman','superman','batman', 'wonderwoman','ironman','hulk','thor'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

//set funcions
function reset()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}

function startGame()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;
	
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
	
//test and debug
	console.log(choosenWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
				console.log('WORKING!'); 
				if(choosenWord.indexOf(userKey) > -1)
				{
					for(var i = 0; i < numBlanks; i++)
					{
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
					console.log(blanksAndSuccesses);
				}
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
					console.log('Wrong Letters = ' + wrongLetters);
					console.log('Guesses left are ' + guessesLeft);
				}
			
			
		
}

//batman theme song variable
var audioWinElement = document.createElement("audio");
audioWinElement.setAttribute("src", "assets/sounds/batman_theme.mp3");

//you lose song
var audioLoseElement = document.createElement("audio");
audioLoseElement.setAttribute("src", "assets/sounds/lose_sound.mp3");

function winLose()
{
	if(rightGuessCounter === numBlanks)
	{
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		audioWinElement.play();
		reset();
		alert('You Win');
		audioWinElement.pause();
	}
	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		audioLoseElement.play();
		reset();
		alert('You Lose');
		audioLoseElement.pause();
	}
}

//start game
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
			console.log('Double word is = ' + doubleWord[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}
