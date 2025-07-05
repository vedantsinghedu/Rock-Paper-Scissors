let score=JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

updateScoreElement();

/* if (!score){
  score={Wins: 0,
  Losses: 0,
  Ties: 0
  };

}
*/

function pickComputerMove(){
  let computerMove='';
  randomNumber=Math.random();
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';

  }
  else if(randomNumber>=2/3){
    computerMove='paper';
  }
  else{
  computerMove='scissors';
  }
  return computerMove;
}

function function2(playerMove){
  const computerMove=pickComputerMove();

  let result ='';
  if(playerMove==='scissors'){
    if(computerMove==='rock'){
      result='You Lost...';
    }
    else if(computerMove=='paper'){
      result='You Win...';
    }
    else if(computerMove=='scissors'){
      result='Tie...';
    }
  }

  else if(playerMove=="paper"){
    if(computerMove==='rock'){
    result='You Win...';
    }
    else if(computerMove=='paper'){
      result='Tie...';
    }
    else if(computerMove=='scissors'){
      result='You Lost...';
    }
  }
  else if(playerMove=='rock'){
    if(computerMove==='rock'){
    result='Tie...';
    }
    else if(computerMove=='paper'){
    result='You Lost...';
    }
    else if(computerMove=='scissors'){
      result='You Win...';
    }
  }

  if (result==='You Win...'){
    score.Wins++;
  } else if(result==='You Lost...'){
    score.Losses++;
  } else if(result==='Tie...'){
    score.Ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));


  updateScoreElement();

  document.querySelector('.js-result')
  .innerHTML=result;

  document.querySelector('.js-moves')
  .innerHTML=`<span class="label">YOU</span>  
  <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-icon">
  <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">  
  <span class="label">COMPUTER</span>`;


  /*alert(`Your picked ${playerMove}.\nThe Computer picked ${computerMove}.\n${result}\nWins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`);*/
}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML=`Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
}
