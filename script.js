const addButton = document.getElementById('add');
const nameEntry = document.getElementById('names');
const type = document.getElementById('select');
const ul = document.getElementById('participants');
const startButton = document.getElementById('start');

var nameList = [];

/////////
const addToList = (() => {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(nameEntry.value));
	ul.appendChild(li);
	nameList.push(nameEntry.value)
	nameEntry.value = '';
	li.onclick = function() {this.parentNode.removeChild(this);
						     nameList.splice(nameList.indexOf(this.textContent),1);};
});

const addListAfterEnter = ((event) => {
	if (nameEntry.value.length > 0 && event.keyCode === 13){
		addToList();
	}
});

const addListAfterClick = (() => {
	if (nameEntry.value.length > 0){
		addToList();
	}
});

//////////
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const tournamentBegin = (() => {

});

const cupBegin = (() => {

})

const begin = (() => {
	if (type.value === Tournament){
		tournamentBegin();
	} else if (type.value === Cup){
		cupBegin();
	}
});

addButton.addEventListener('click', addListAfterClick);
nameEntry.addEventListener('keypress', addListAfterEnter);
startButton.addEventListener('click', begin)


