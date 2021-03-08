// here we should have the main logic of our game

console.log("hello");


const randomCardList = [   // ce tableau contient les carte prédefine qui vont etre montré lors que
	{					   // l'on vas cliquer sur une carte
		name: "apple",
		img: "./docs/apple.jpg"
	},
	{
		name: "pear",
		img: "./docs/pear.jpg"
	},
	{
		name: "banana",
		img: "./docs/banana.jpg"
	},
	{
		name: "raspberry",
		img: "./docs/raspberry.jpg"
	},
	{
		name: "orange",
		img: "./docs/orange.jpg"
	},
	{
		name: "lemon",
		img: "./docs/lemon.jpg"
	},
		{
		name: "apple",
		img: "./docs/apple.jpg"
	},
	{
		name: "pear",
		img: "./docs/pear.jpg"
	},
	{
		name: "banana",
		img: "./docs/banana.jpg"
	},
	{
		name: "raspberry",
		img: "./docs/raspberry.jpg"
	},
	{
		name: "orange",
		img: "./docs/orange.jpg"
	},
	{
		name: "lemon",
		img: "./docs/lemon.jpg"
	}

]


randomCardList.sort(() => 0.5 - Math.random()); // permet de classer dans un ordre aléatoire le tableau ci-dessus

const cardList = document.querySelectorAll(".card img");
var cardNameChoiceList = [];
var cardIdChoiceList = [];

// foonction qui permettra au player de jouer

function playerPlay()
{
	for(let i = 0; i< cardList.length; ++i)
	{
		var card = cardList[i];
		card.setAttribute("id", i);
		card.addEventListener("click", showCard); // en cas de clic sur une carte on fais appelle à la fonction showCard
	}											  //pour retourner la face caché de la carte choisi
}



// fonction qui retourne la carte pour montrer son image correspondant

function showCard() {
	let cardIdSelected = this.getAttribute("id");
	cardNameChoiceList.push(randomCardList[cardIdSelected].name)
	cardIdChoiceList.push(cardIdSelected)
	this.setAttribute("src", randomCardList[cardIdSelected].img);
	if(cardIdChoiceList.length === 2)
		window.setTimeout(compareCard, 700); // après avoir retourné 2 cartes, on fais appelle à une fonction compareCard pour comparer
}    										 // et tirer une conclusion

// fonction qui compare 2 cartes et tire une conclusion
function compareCard()
{
	console.log(cardIdChoiceList)
	console.log(cardNameChoiceList)

	let firstCardChoice = document.getElementById(cardIdChoiceList[0])
	let secondCardChoice = document.getElementById(cardIdChoiceList[1])

	if(cardIdChoiceList[0] === cardIdChoiceList[1])
	{
		alert("NE SELECTIONNEZ PAS LA MEME CARTE🙁")
		firstCardChoice.setAttribute("src", "./docs/fruit.jpeg");
	}
	else if(cardNameChoiceList[0] === cardNameChoiceList[1])       // si les deux cartes choisi on la meme image
	{
    if (!firstCardChoice.parentElement.classList.contains("transparent") || !secondCardChoice.parentElement.classList.contains("transparent")) {
      let playerScore = document.querySelector("#js-player-score");
  		playerScore.textContent = parseInt(playerScore.textContent ) + 1; // on incremente son score de 1

  		// on masque les cartes selectionnes si elle sont pareils
      firstCardChoice.parentElement.classList.add("transparent");
      secondCardChoice.parentElement.classList.add("transparent");
    }
	}
	else // si les deux cartes choisi n'on pas la meme image, alors on les retourne
	{
		firstCardChoice.setAttribute("src", "./docs/fruit.jpeg");
		secondCardChoice.setAttribute("src", "./docs/fruit.jpeg");

	}

	cardNameChoiceList = [];
	cardIdChoiceList = [];
}


playerPlay();
