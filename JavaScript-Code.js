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
    computerMove='Rock';

  }
  else if(randomNumber>=2/3){
    computerMove='Paper';
  }
  else{
  computerMove='Scissors';
  }
  return computerMove;
}

function function2(playerMove){
  const computerMove=pickComputerMove();

  let result ='';
  if(playerMove==='Scissors'){
    if(computerMove==='Rock'){
      result='You Lost...';
    }
    else if(computerMove=='Paper'){
      result='You Win...';
    }
    else if(computerMove=='Scissors'){
      result='Tie...';
    }
  }

  else if(playerMove=="Paper"){
    if(computerMove==='Rock'){
    result='You Win...';
    }
    else if(computerMove=='Paper'){
      result='Tie...';
    }
    else if(computerMove=='Scissors'){
      result='You Lost...';
    }
  }
  else if(playerMove=='Rock'){
    if(computerMove==='Rock'){
    result='Tie...';
    }
    else if(computerMove=='Paper'){
    result='You Lost...';
    }
    else if(computerMove=='Scissors'){
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
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">  
  <span class="label">COMPUTER</span>`;


  /*alert(`Your picked ${playerMove}.\nThe Computer picked ${computerMove}.\n${result}\nWins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`);*/
}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML=`Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
}
