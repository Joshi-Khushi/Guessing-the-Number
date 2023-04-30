'use strict';

//setting initial conditions
let score = 10;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) +1;
/*math.random() will generate a number between 0 & 0.9999..., which when multiplied by *20 will give a number btween 0 and 19.99999... math.trunc() will remove the decimal part, and +1 will make 20 also included. */

const displayMessage = function(message)
{
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
	const guess = Number(document.querySelector('.guess').value);
	//console.log(guess, typeof guess);

	//no number entered
	if(!guess)
	{
		// document.querySelector('.message').textContent = '⛔ No number!';
		displayMessage('⛔ No number!');
	}
	//correct guess - wins gmae
	else if(guess === secretNumber)
	{
		// document.querySelector('.message').textContent = '🎉 Correct Number!!!';
		displayMessage('🎉 Correct Number!!!');
		document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if(score > highscore)
		{
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	}
	//wrong guess
	else if(guess !== secretNumber)
	{
		if(score > 1)
		{
			// document.querySelector('.message').textContent = (guess > secretNumber ?'Too high!' : 'Too low!');
			displayMessage(guess > secretNumber ?'Too high!' : 'Too low!');
			score--;
			document.querySelector('.score').textContent = score;
		}
		//out of chances - loses game
		else
		{
			// document.querySelector('.message').textContent = '🧨 Oops! You lost the game.';
			displayMessage('🧨 Oops! You lost the game.');
			document.querySelector('.score').textContent = 0;
		}
	}
});

//reset game - play again
document.querySelector('.again').addEventListener('click', function(){
	score = 10;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	// document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').textContent = '';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
})