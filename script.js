'use strict';

// let message=document.querySelector('.message')
// console.log(message.textContent)
// // message.textContent="Hello"
// document.querySelector('.check').addEventListener('click',function()
// {
//     console.log(Number(document.querySelector('.guess').value))
//     if(!Number(document.querySelector('.guess').value))
//     {
//         document.querySelector('.message').textContent="No number 😢😫😫😫"
//     }
//     else
//     {
//         document.querySelector('.message').textContent="Start gueesing"
//     }
// })
let randnumber=Math.trunc(Math.random()*20)+1
const check=document.querySelector('.check')
const message=document.querySelector('.message')
let guessss=document.querySelector('.guess')
console.log(guessss)
let number=document.querySelector('.number')
const again=document.querySelector('.again')
check.addEventListener('click',function(){
    if (randnumber == guessss.value) {
      number.textContent = randnumber;
      message.textContent = 'Very Good';
      // document.querySelector('.again').textContent='Great!!';
      document.querySelector('body').style.backgroundColor='#60b347';
      let high = document.querySelector('.highscore');
      if(Number(high.textContent)<Number(document.querySelector('.score').textContent))
      {
        high.textContent = Number(document.querySelector('.score').textContent);
      }
    } else if (Number(document.querySelector('.score').textContent)>0) {
      // guess.value=' '
      //   console.log();
      document.querySelector('.score').textContent = String(
        Number(document.querySelector('.score').textContent) - 1
      );
    }
    else
    {
        message.textContent='Loose the game';
    }
})
again.addEventListener('click',function()
{
  document.querySelector('body').style.backgroundColor = '#222';
  randnumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing';
  guessss.value=''
  document.querySelector('.score').textContent=10
  number.textContent='?'
})