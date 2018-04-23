/*Function to open modal and offer character choice*/
const modal = $('#chooseChar');

function openModal() {
	setTimeout(function() {
      $('#chooseChar').modal('show');
    }, 500);
  };

function closeModal() {
	$('#chooseChar').modal('hide');
}


openModal();


/*************************
CODE PURGATORY
*************************/

// function checkCharacter() {
// 	let count = 0;
// 	let max = 1;
// 	while (count < max) {
// 		character();
// 		count += 1;
// 	}
// }

// let character = function() {
// 	let sprite = $('.sprite');
// 	let chosenChar = new Image;
// 	$(sprite).on('click', function() {
// 		if (this.id ==='girl') {
// 			chosenChar.src = 'images/girl.png';
// 		} else {
// 			chosenChar.src = 'images/boy.png';
// 		}
// 		$('#chooseChar').modal('hide');
// 		return chosenChar;
// 	});
// }


// checkCharacter();


// function addChar(chosenChar) {
// 	if (chosenChar ==='girl') {
// 		const girlChar = new Image();
// 		girlChar.src = 'images/girl.png';
// 		return girlChar;
// 	} else {
// 		const boyChar = new Image();
// 		boyChar.src = 'images/boy.png';
// 		return boyChar;
// 	}
// 	Player();
// }