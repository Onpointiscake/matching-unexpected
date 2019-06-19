
const mainMsg = document.getElementById('title');
const cards = document.querySelectorAll('.card');
console.log(mainMsg)
// Win celebration:
function checkWin()
{
  var testing = Array.from(cards)
  const checkIfAll = testing.every(card => card.classList.contains('flip'));
  
  function delayCheck(){
    if (checkIfAll){
      mainMsg.textContent = "You Win the Game!"
      mainMsg.classList.add('mainmsg')
    }
  }

  setTimeout(delayCheck, 1400)
}


let cardFlipped = false;
let lockBoard = false;
let frontCard;
let backCard;

function blockCard() {
  frontCard.removeEventListener('click', doFlip);
  backCard.removeEventListener('click', doFlip);

  frontCard.classList.add('no-border')
  audio.play();
  backCard.classList.add('no-border')

  checkWin()
  resetBoard();
}

// Effect function:
function doFlip() {

  if (lockBoard) return;
  if (this === frontCard) return;
	
  this.classList.add('flip');

  if (!cardFlipped) {
    
    cardFlipped = true;
    frontCard = this;
    return;
  }
  backCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = frontCard.dataset.framework === backCard.dataset.framework;

  isMatch ? blockCard() : resetCard();
}

function resetCard() {
  lockBoard = true;

  setTimeout(() => {
    frontCard.classList.remove('flip');
    backCard.classList.remove('flip');

    resetBoard();
  }, 550);
}

function resetBoard() {
  [cardFlipped, lockBoard] = [false, false];
  [frontCard, backCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', doFlip));


