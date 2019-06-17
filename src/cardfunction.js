const cards = document.querySelectorAll('.card');

let flipped = false;
let frontCard;
let backCard;

function changed(){
	this.classList.toggle('flip')

	if (!flipped) {
		flipped = true;
		frontCard = this;
	} else {
		flipped = false;
		backCard = this;
	}

	//if cards are the same:
}


cards.forEach(card => card.addEventListener('click', changed));

