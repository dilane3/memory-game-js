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


playerPlay();